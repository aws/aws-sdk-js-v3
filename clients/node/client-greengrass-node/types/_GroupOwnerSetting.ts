/**
 * Group owner related settings for local resources.
 */
export interface _GroupOwnerSetting {
  /**
   * If true, AWS IoT Greengrass automatically adds the specified Linux OS group owner of the resource to the Lambda process privileges. Thus the Lambda process will have the file access permissions of the added Linux group.
   */
  AutoAddGroupOwner?: boolean;

  /**
   * The name of the Linux OS group whose privileges will be added to the Lambda process. This field is optional.
   */
  GroupOwner?: string;
}

export type _UnmarshalledGroupOwnerSetting = _GroupOwnerSetting;
