/**
 * An error with `$nonRecoverable: true` can't succeed on retry until the customer acts, for example
 * by running `aws sso login`. The refresh lifecycle throws it right away instead of backing off.
 *
 * @internal
 */
export interface RefreshNonRecoverableError {
  $nonRecoverable?: boolean;
}

/**
 * STS error codes that cannot succeed until the customer acts.
 * @internal
 */
export const NON_RECOVERABLE_STS_ERROR_CODES = [
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
export const markNonRecoverable = <E>(error: E): E => {
  if (error !== null && typeof error === "object" && Object.isExtensible(error)) {
    (error as RefreshNonRecoverableError).$nonRecoverable = true;
  }
  return error;
};

/**
 * True if the error was marked by {@link markNonRecoverable}.
 * @internal
 */
export const isNonRecoverable = (error: unknown): error is RefreshNonRecoverableError =>
  (error as RefreshNonRecoverableError | null)?.$nonRecoverable === true;

/**
 * Marks `error` when it carries one of {@link NON_RECOVERABLE_STS_ERROR_CODES}.
 * @internal
 */
export const markNonRecoverableStsError = <E>(error: E): E => {
  const code = (error as { name?: string } | null)?.name;
  return code !== undefined && NON_RECOVERABLE_STS_ERROR_CODES.includes(code) ? markNonRecoverable(error) : error;
};
