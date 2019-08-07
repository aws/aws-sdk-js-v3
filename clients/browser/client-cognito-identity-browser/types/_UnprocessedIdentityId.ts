/**
 * <p>An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and IdentityId.</p>
 */
export interface _UnprocessedIdentityId {
  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   */
  IdentityId?: string;

  /**
   * <p>The error code indicating the type of error that occurred.</p>
   */
  ErrorCode?: "AccessDenied" | "InternalServerError" | string;
}

export type _UnmarshalledUnprocessedIdentityId = _UnprocessedIdentityId;
