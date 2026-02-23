// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const OAuth2ErrorCode = {
  /**
   * Authorization code has expired
   */
  AUTHCODE_EXPIRED: "AUTHCODE_EXPIRED",
  /**
   * Insufficient permissions to perform this operation
   */
  INSUFFICIENT_PERMISSIONS: "INSUFFICIENT_PERMISSIONS",
  /**
   * The request is missing a required parameter, includes an invalid parameter value, or is otherwise malformed
   */
  INVALID_REQUEST: "INVALID_REQUEST",
  /**
   * Internal server error occurred
   */
  SERVER_ERROR: "server_error",
  /**
   * Token has expired and needs to be refreshed
   */
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  /**
   * User credentials have been changed
   */
  USER_CREDENTIALS_CHANGED: "USER_CREDENTIALS_CHANGED",
} as const;
/**
 * @public
 */
export type OAuth2ErrorCode = (typeof OAuth2ErrorCode)[keyof typeof OAuth2ErrorCode];
