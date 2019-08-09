import {
  _DefaultWorkspaceCreationProperties,
  _UnmarshalledDefaultWorkspaceCreationProperties
} from "./_DefaultWorkspaceCreationProperties";

/**
 * <p>Describes an AWS Directory Service directory that is used with Amazon WorkSpaces.</p>
 */
export interface _WorkspaceDirectory {
  /**
   * <p>The directory identifier.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The directory alias.</p>
   */
  Alias?: string;

  /**
   * <p>The name of the directory.</p>
   */
  DirectoryName?: string;

  /**
   * <p>The registration code for the directory. This is the code that users enter in their Amazon WorkSpaces client application to connect to the directory.</p>
   */
  RegistrationCode?: string;

  /**
   * <p>The identifiers of the subnets used with the directory.</p>
   */
  SubnetIds?: Array<string> | Iterable<string>;

  /**
   * <p>The IP addresses of the DNS servers for the directory.</p>
   */
  DnsIpAddresses?: Array<string> | Iterable<string>;

  /**
   * <p>The user name for the service account.</p>
   */
  CustomerUserName?: string;

  /**
   * <p>The identifier of the IAM role. This is the role that allows Amazon WorkSpaces to make calls to other services, such as Amazon EC2, on your behalf.</p>
   */
  IamRoleId?: string;

  /**
   * <p>The directory type.</p>
   */
  DirectoryType?: "SIMPLE_AD" | "AD_CONNECTOR" | string;

  /**
   * <p>The identifier of the security group that is assigned to new WorkSpaces.</p>
   */
  WorkspaceSecurityGroupId?: string;

  /**
   * <p>The state of the directory's registration with Amazon WorkSpaces</p>
   */
  State?:
    | "REGISTERING"
    | "REGISTERED"
    | "DEREGISTERING"
    | "DEREGISTERED"
    | "ERROR"
    | string;

  /**
   * <p>The default creation properties for all WorkSpaces in the directory.</p>
   */
  WorkspaceCreationProperties?: _DefaultWorkspaceCreationProperties;

  /**
   * <p>The identifiers of the IP access control groups associated with the directory.</p>
   */
  ipGroupIds?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledWorkspaceDirectory extends _WorkspaceDirectory {
  /**
   * <p>The identifiers of the subnets used with the directory.</p>
   */
  SubnetIds?: Array<string>;

  /**
   * <p>The IP addresses of the DNS servers for the directory.</p>
   */
  DnsIpAddresses?: Array<string>;

  /**
   * <p>The default creation properties for all WorkSpaces in the directory.</p>
   */
  WorkspaceCreationProperties?: _UnmarshalledDefaultWorkspaceCreationProperties;

  /**
   * <p>The identifiers of the IP access control groups associated with the directory.</p>
   */
  ipGroupIds?: Array<string>;
}
