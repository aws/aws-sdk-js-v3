/**
 * An error with `$unrecoverable: true` can't succeed on retry until the customer acts, for example
 * by running `aws sso login`. The refresh lifecycle throws it right away instead of backing off.
 *
 * @internal
 */
export interface RefreshUnrecoverableError {
  $unrecoverable?: boolean;
}

/**
 * STS error codes that cannot succeed until the customer acts.
 * @internal
 */
export const UNRECOVERABLE_STS_ERROR_CODES = [
  "AccessDenied",
  "IDPRejectedClaim",
  "InvalidIdentityToken",
  "MalformedPolicyDocument",
  "PackedPolicyTooLarge",
  "RegionDisabledException",
];

/**
 * Marks `error` so the credential cache raises it to the caller straight away, instead of keeping
 * the cached credentials and backing off. Use it only when retrying cannot succeed until the
 * customer acts, e.g. runs `aws sso login`. Returns `error`, so callers can `throw mark(e)`.
 * @internal
 */
export const markUnrecoverable = <E>(error: E): E => {
  if (error !== null && typeof error === "object" && Object.isExtensible(error)) {
    (error as RefreshUnrecoverableError).$unrecoverable = true;
  }
  return error;
};

/**
 * True if the error was marked by {@link markUnrecoverable}.
 * @internal
 */
export const isUnrecoverable = (error: unknown): error is RefreshUnrecoverableError =>
  (error as RefreshUnrecoverableError | null)?.$unrecoverable === true;

/**
 * Marks `error` when it carries one of {@link UNRECOVERABLE_STS_ERROR_CODES}.
 * @internal
 */
export const markUnrecoverableStsError = <E>(error: E): E => {
  const code = (error as { name?: string } | null)?.name;
  return code !== undefined && UNRECOVERABLE_STS_ERROR_CODES.includes(code) ? markUnrecoverable(error) : error;
};
