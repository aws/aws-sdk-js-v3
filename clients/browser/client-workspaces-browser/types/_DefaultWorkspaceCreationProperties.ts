/**
 * <p>Describes the default values used to create a WorkSpace.</p>
 */
export interface _DefaultWorkspaceCreationProperties {
  /**
   * <p>Specifies whether the directory is enabled for Amazon WorkDocs.</p>
   */
  EnableWorkDocs?: boolean;

  /**
   * <p>The public IP address to attach to all WorkSpaces that are created or rebuilt.</p>
   */
  EnableInternetAccess?: boolean;

  /**
   * <p>The organizational unit (OU) in the directory for the WorkSpace machine accounts.</p>
   */
  DefaultOu?: string;

  /**
   * <p>The identifier of any security groups to apply to WorkSpaces when they are created.</p>
   */
  CustomSecurityGroupId?: string;

  /**
   * <p>Specifies whether the WorkSpace user is an administrator on the WorkSpace.</p>
   */
  UserEnabledAsLocalAdministrator?: boolean;
}

export type _UnmarshalledDefaultWorkspaceCreationProperties = _DefaultWorkspaceCreationProperties;
