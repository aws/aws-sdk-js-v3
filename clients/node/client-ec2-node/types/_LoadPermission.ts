/**
 * <p>Describes a load permission.</p>
 */
export interface _LoadPermission {
  /**
   * <p>The AWS account ID.</p>
   */
  UserId?: string;

  /**
   * <p>The name of the group.</p>
   */
  Group?: "all" | string;
}

export type _UnmarshalledLoadPermission = _LoadPermission;
