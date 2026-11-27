import type { AwsCredentialIdentity, HttpRequest as IHttpRequest } from "@smithy/types";

/**
 * Error codes a service returns when the credentials that signed the request are no longer valid.
 */
const INVALID_CREDENTIAL_ERROR_CODES = ["ExpiredToken", "ExpiredTokenException"];

/**
 * Prefix of the synthetic shape IDs the SDK gives to each service's base exception.
 */
const SYNTHETIC_SHAPE_ID_PREFIX = "smithy.ts.sdk.synthetic.";

/**
 * A credentials provider that can mark its cached credentials for refresh.
 */
type InvalidatableCredentials = {
  invalidate?: (rejectedIdentity: Pick<AwsCredentialIdentity, "accessKeyId">) => void;
};

/**
 * Reads the access key ID from a SigV4 or SigV4a `Authorization` header.
 *
 * @internal
 */
export const getSigningAccessKeyId = (request: IHttpRequest): string | undefined =>
  /Credential=([^/,\s]+)\//.exec(request.headers?.authorization ?? "")?.[1];

/**
 * True if the service models this error.
 *
 * A modeled error is an instance of its own generated class, which has a static `shapeId` from the
 * service model.
 *
 * @internal
 */
export const isModeledError = (error: unknown): boolean => {
  let proto = error !== null && typeof error === "object" ? Object.getPrototypeOf(error) : null;
  while (proto && proto !== Object.prototype) {
    const ctor = proto.constructor;
    if (Object.prototype.hasOwnProperty.call(ctor, "shapeId")) {
      return !String(ctor.shapeId).startsWith(SYNTHETIC_SHAPE_ID_PREFIX);
    }
    proto = Object.getPrototypeOf(proto);
  }
  return false;
};

/**
 * On an unmodeled expired-token error, marks the signing credentials for refresh and makes the
 * request retryable, so the retry signs with new credentials.
 *
 * Skipped if the provider has no `invalidate` or the signing access key is unknown.
 *
 * @internal
 */
export const invalidateRejectedCredentials = (
  error: { name?: string; $retryable?: unknown },
  credentials: unknown,
  signingAccessKeyId: string | undefined
): void => {
  if (!INVALID_CREDENTIAL_ERROR_CODES.includes(error?.name ?? "") || isModeledError(error)) {
    return;
  }
  const invalidate = (credentials as InvalidatableCredentials | undefined)?.invalidate;
  if (typeof invalidate !== "function" || signingAccessKeyId === undefined) {
    return;
  }
  invalidate({ accessKeyId: signingAccessKeyId });
  // Retry only when credentials were invalidated. Without that the retry signs with the same
  // rejected credentials.
  error.$retryable ??= {};
};
