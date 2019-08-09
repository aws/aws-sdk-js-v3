/**
 * <p>Describes a load permission.</p>
 */
export interface _LoadPermissionRequest {
  /**
   * <p>The name of the group.</p>
   */
  Group?: "all" | string;

  /**
   * <p>The AWS account ID.</p>
   */
  UserId?: string;
}

export type _UnmarshalledLoadPermissionRequest = _LoadPermissionRequest;
