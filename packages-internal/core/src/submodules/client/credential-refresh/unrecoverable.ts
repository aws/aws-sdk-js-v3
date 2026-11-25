/**
 * Key of the unrecoverable marker. `Symbol.for` returns the same symbol in every copy of this
 * package, so an error marked by one copy is recognized by another.
 * @internal
 */
export const UNRECOVERABLE = Symbol.for("unrecoverable");

/**
 * An error with `[UNRECOVERABLE]: true` can't succeed on retry without external action, for example
 * by running `aws sso login`. The refresh lifecycle throws it right away instead of applying a backoff.
 *
 * @internal
 */
export interface RefreshUnrecoverableError {
  [UNRECOVERABLE]?: boolean;
}

/**
 * STS error codes that cannot succeed without external action.
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
 * the cached credentials and backing off. Use it only when retrying cannot succeed without
 * external action, e.g. running `aws sso login`. Returns `error`, so callers can `throw mark(e)`.
 * @internal
 */
export const markUnrecoverable = <E>(error: E): E => {
  if (error !== null && typeof error === "object" && Object.isExtensible(error)) {
    (error as RefreshUnrecoverableError)[UNRECOVERABLE] = true;
  }
  return error;
};

/**
 * True if the error was marked by {@link markUnrecoverable}.
 * @internal
 */
export const isUnrecoverable = (error: unknown): error is RefreshUnrecoverableError =>
  (error as RefreshUnrecoverableError | null)?.[UNRECOVERABLE] === true;

/**
 * Marks `error` when it carries one of {@link UNRECOVERABLE_STS_ERROR_CODES}.
 * @internal
 */
export const markUnrecoverableStsError = <E>(error: E): E => {
  const code = (error as { name?: string } | null)?.name;
  return code !== undefined && UNRECOVERABLE_STS_ERROR_CODES.includes(code) ? markUnrecoverable(error) : error;
};
