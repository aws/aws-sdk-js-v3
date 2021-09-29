import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

export enum AgentStatus {
  OFFLINE = "OFFLINE",
  ONLINE = "ONLINE",
}

/**
 * <p>Represents a single entry in a list of agents. <code>AgentListEntry</code> returns an
 *       array that contains a list of agents when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListAgents.html">ListAgents</a>
 *       operation is
 *       called.</p>
 */
export interface AgentListEntry {
  /**
   * <p>The Amazon Resource Name (ARN) of the agent.</p>
   */
  AgentArn?: string;

  /**
   * <p>The name of the agent.</p>
   */
  Name?: string;

  /**
   * <p>The status of the agent.</p>
   */
  Status?: AgentStatus | string;
}

export namespace AgentListEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AgentListEntry): any => ({
    ...obj,
  });
}

export enum Atime {
  BEST_EFFORT = "BEST_EFFORT",
  NONE = "NONE",
}

/**
 * <p>CancelTaskExecutionRequest</p>
 */
export interface CancelTaskExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the task execution to cancel.</p>
   */
  TaskExecutionArn: string | undefined;
}

export namespace CancelTaskExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelTaskExecutionRequest): any => ({
    ...obj,
  });
}

export interface CancelTaskExecutionResponse {}

export namespace CancelTaskExecutionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelTaskExecutionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when an error occurs in the DataSync service.</p>
 */
export interface InternalException extends __SmithyException, $MetadataBearer {
  name: "InternalException";
  $fault: "server";
  message?: string;
  errorCode?: string;
}

export namespace InternalException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the client submits a malformed request.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  message?: string;
  errorCode?: string;
}

export namespace InvalidRequestException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a single entry in a list of AWS resource tags. <code>TagListEntry</code>
 *       returns an array that contains a list of tasks when the
 *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTagsForResource.html">ListTagsForResource</a>
 *       operation is called.</p>
 */
export interface TagListEntry {
  /**
   * <p>The key for an Amazon Web Services resource tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value for an Amazon Web Services resource tag.</p>
   */
  Value?: string;
}

export namespace TagListEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagListEntry): any => ({
    ...obj,
  });
}

/**
 * <p>CreateAgentRequest</p>
 */
export interface CreateAgentRequest {
  /**
   * <p>Your agent activation key. You can get the activation key either by sending an HTTP GET
   *       request with redirects that enable you to get the agent IP address (port 80). Alternatively,
   *       you can get it from the DataSync console.</p>
   *          <p>The redirect URL returned in the response provides you the activation key for your
   *       agent in the query string parameter <code>activationKey</code>. It might also include other
   *       activation-related parameters; however, these are merely defaults. The arguments you pass to
   *       this API call determine the actual configuration of your agent.</p>
   *
   *
   *          <p>For more information, see Activating an Agent in the <i>DataSync
   *         User Guide.</i>
   *          </p>
   */
  ActivationKey: string | undefined;

  /**
   * <p>The name you configured for your agent. This value is a text reference that is used to
   *       identify the agent in the console.</p>
   */
  AgentName?: string;

  /**
   * <p>The key-value pair that represents the tag that you want to associate with the agent.
   *       The value can be an empty string. This value helps you manage, filter, and search for your
   *       agents.</p>
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable in
   *         UTF-8 format, and the following special characters: + - = . _ : / @. </p>
   *          </note>
   */
  Tags?: TagListEntry[];

  /**
   * <p>The ID of the VPC (virtual private cloud) endpoint that the agent has access to. This is
   *       the client-side VPC endpoint, also called a PrivateLink. If you don't have a PrivateLink VPC
   *       endpoint, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-service.html#create-endpoint-service">Creating a VPC Endpoint Service Configuration</a> in the Amazon VPC User Guide.</p>
   *          <p>VPC endpoint ID looks like this: <code>vpce-01234d5aff67890e1</code>.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>The Amazon Resource Names (ARNs) of the subnets in which DataSync will create elastic
   *       network interfaces for each data transfer task. The agent that runs a task must be private.
   *       When you start a task that is associated with an agent created in a VPC, or one that has
   *       access to an IP address in a VPC, then the task is also private. In this case, DataSync
   *       creates four network interfaces for each task in your subnet. For a data transfer to work, the
   *       agent must be able to route to all these four network interfaces.</p>
   */
  SubnetArns?: string[];

  /**
   * <p>The ARNs of the security groups used to protect your data transfer task subnets. See <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_Ec2Config.html#DataSync-Type-Ec2Config-SecurityGroupArns">SecurityGroupArns</a>.</p>
   */
  SecurityGroupArns?: string[];
}

export namespace CreateAgentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAgentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>CreateAgentResponse</p>
 */
export interface CreateAgentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the agent. Use the <code>ListAgents</code> operation
   *       to return a list of agents for your account and Amazon Web Services Region.</p>
   */
  AgentArn?: string;
}

export namespace CreateAgentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAgentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The subnet and the security group that DataSync uses to access target EFS file system.
 *       The subnet must have at least one mount target for that file system. The security group that
 *       you provide needs to be able to communicate with the security group on the mount target in the
 *       subnet specified. </p>
 */
export interface Ec2Config {
  /**
   * <p>The ARN of the subnet and the security group that DataSync uses to access the target
   *       EFS file system.</p>
   */
  SubnetArn: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the security groups that are configured for the
   *       Amazon EC2 resource.</p>
   */
  SecurityGroupArns: string[] | undefined;
}

export namespace Ec2Config {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Ec2Config): any => ({
    ...obj,
  });
}

/**
 * <p>CreateLocationEfsRequest</p>
 */
export interface CreateLocationEfsRequest {
  /**
   * <p>A subdirectory in the location’s path. This subdirectory in the EFS file system is used
   *       to read data from the EFS source location or write data to the EFS destination. By default,
   *       DataSync uses the root directory.</p>
   *          <note>
   *             <p>
   *                <code>Subdirectory</code> must be specified with forward slashes. For example,
   *           <code>/path/to/folder</code>.</p>
   *          </note>
   */
  Subdirectory?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the Amazon EFS file system.</p>
   */
  EfsFilesystemArn: string | undefined;

  /**
   * <p>The subnet and security group that the Amazon EFS file system uses. The security group
   *       that you provide needs to be able to communicate with the security group on the mount target
   *       in the subnet specified.</p>
   *          <p>The exact relationship between security group M (of the mount target) and security
   *       group S (which you provide for DataSync to use at this stage) is as follows: </p>
   *          <ul>
   *             <li>
   *                <p> Security group M (which you associate with the mount target) must allow inbound
   *           access for the Transmission Control Protocol (TCP) on the NFS port (2049) from security
   *           group S. You can enable inbound connections either by IP address (CIDR range) or security
   *           group. </p>
   *             </li>
   *             <li>
   *                <p>Security group S (provided to DataSync to access EFS) should have a rule that
   *           enables outbound connections to the NFS port on one of the file system’s mount targets.
   *           You can enable outbound connections either by IP address (CIDR range) or security
   *           group.</p>
   *
   *                <p>For information about security groups and mount targets, see Security
   *           Groups for Amazon EC2 Instances and Mount Targets in the <i>Amazon EFS User
   *             Guide.</i>
   *                </p>
   *             </li>
   *          </ul>
   */
  Ec2Config: Ec2Config | undefined;

  /**
   * <p>The key-value pair that represents a tag that you want to add to the resource. The
   *       value can be an empty string. This value helps you manage, filter, and search for your
   *       resources. We recommend that you create a name tag for your location.</p>
   */
  Tags?: TagListEntry[];
}

export namespace CreateLocationEfsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLocationEfsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>CreateLocationEfs</p>
 */
export interface CreateLocationEfsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon EFS file system location that is
   *       created.</p>
   */
  LocationArn?: string;
}

export namespace CreateLocationEfsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLocationEfsResponse): any => ({
    ...obj,
  });
}

export interface CreateLocationFsxWindowsRequest {
  /**
   * <p>A subdirectory in the location’s path. This subdirectory in the Amazon FSx for Windows
   *       File Server file system is used to read data from the Amazon FSx for Windows File Server
   *       source location or write data to the FSx for Windows File Server destination.</p>
   */
  Subdirectory?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the FSx for Windows File Server file system.</p>
   */
  FsxFilesystemArn: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the security groups that are to use to configure the
   *       FSx for Windows File Server file system.</p>
   */
  SecurityGroupArns: string[] | undefined;

  /**
   * <p>The key-value pair that represents a tag that you want to add to the resource. The
   *       value can be an empty string. This value helps you manage, filter, and search for your
   *       resources. We recommend that you create a name tag for your location.</p>
   */
  Tags?: TagListEntry[];

  /**
   * <p>The user who has the permissions to access files and folders in the FSx for Windows File
   *       Server file system.</p>
   *          <p>For information about choosing a user name that ensures sufficient permissions to files,
   *       folders, and metadata, see <a href="create-fsx-location.html#FSxWuser">user</a>.</p>
   */
  User: string | undefined;

  /**
   * <p>The name of the Windows domain that the FSx for Windows File Server belongs to.</p>
   */
  Domain?: string;

  /**
   * <p>The password of the user who has the permissions to access files and folders in the FSx
   *       for Windows File Server file system.</p>
   */
  Password: string | undefined;
}

export namespace CreateLocationFsxWindowsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLocationFsxWindowsRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

export interface CreateLocationFsxWindowsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the FSx for Windows File Server file system location
   *       that is created.</p>
   */
  LocationArn?: string;
}

export namespace CreateLocationFsxWindowsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLocationFsxWindowsResponse): any => ({
    ...obj,
  });
}

export enum NfsVersion {
  AUTOMATIC = "AUTOMATIC",
  NFS3 = "NFS3",
  NFS4_0 = "NFS4_0",
  NFS4_1 = "NFS4_1",
}

/**
 * <p>Represents the mount options that are available for DataSync to access an NFS
 *       location.</p>
 */
export interface NfsMountOptions {
  /**
   * <p>The specific NFS version that you want DataSync to use to mount your NFS share. If the
   *       server refuses to use the version specified, the sync will fail. If you don't specify a
   *       version, DataSync defaults to <code>AUTOMATIC</code>. That is, DataSync automatically
   *       selects a version based on negotiation with the NFS server.</p>
   *
   *          <p>You can specify the following NFS versions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <a href="https://tools.ietf.org/html/rfc1813">NFSv3</a>
   *                   </b> - stateless protocol version that allows for asynchronous
   *           writes on the server.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <a href="https://tools.ietf.org/html/rfc3530">NFSv4.0</a>
   *                   </b> - stateful, firewall-friendly protocol version that supports
   *           delegations and pseudo filesystems.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <a href="https://tools.ietf.org/html/rfc5661">NFSv4.1</a>
   *                   </b> - stateful protocol version that supports sessions,
   *           directory delegations, and parallel data processing. Version 4.1 also includes all
   *           features available in version 4.0.</p>
   *             </li>
   *          </ul>
   */
  Version?: NfsVersion | string;
}

export namespace NfsMountOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NfsMountOptions): any => ({
    ...obj,
  });
}

/**
 * <p>A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS)
 *       location.</p>
 */
export interface OnPremConfig {
  /**
   * <p>ARNs of the agents to use for an NFS location.</p>
   */
  AgentArns: string[] | undefined;
}

export namespace OnPremConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OnPremConfig): any => ({
    ...obj,
  });
}

/**
 * <p>CreateLocationNfsRequest</p>
 */
export interface CreateLocationNfsRequest {
  /**
   * <p>The subdirectory in the NFS file system that is used to read data from the NFS source
   *       location or write data to the NFS destination. The NFS path should be a path that's
   *       exported by the NFS server, or a subdirectory of that path. The path should be such that it
   *       can be mounted by other NFS clients in your network. </p>
   *          <p>To see all the paths exported by your NFS server, run "<code>showmount -e
   *         nfs-server-name</code>" from an NFS client that has access to your server. You can specify
   *       any directory that appears in the results, and any subdirectory of that directory. Ensure that
   *       the NFS export is accessible without Kerberos authentication. </p>
   *          <p>To transfer all the data in the folder you specified, DataSync needs to have
   *       permissions to read all the data. To ensure this, either configure the NFS export with
   *         <code>no_root_squash,</code> or ensure that the permissions for all of the files that you
   *       want DataSync allow read access for all users. Doing either enables the agent to read the
   *       files. For the agent to access directories, you must additionally enable all execute
   *       access.</p>
   *          <p>If you are copying data to or from your Snowcone device, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html#nfs-on-snowcone">NFS Server on Snowcone</a> for more information.</p>
   *
   *          <p>For information about NFS export configuration, see 18.7. The /etc/exports
   *       Configuration File in the Red Hat Enterprise Linux documentation.</p>
   */
  Subdirectory: string | undefined;

  /**
   * <p>The name of the NFS server. This value is the IP address or Domain Name Service (DNS)
   *       name of the NFS server. An agent that is installed on-premises uses this host name to mount
   *       the NFS server in a network. </p>
   *          <p>If you are copying data to or from your Snowcone device, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html#nfs-on-snowcone">NFS Server on Snowcone</a> for more information.</p>
   *          <note>
   *             <p>This name must either be DNS-compliant or must be an IP version 4 (IPv4)
   *         address.</p>
   *          </note>
   */
  ServerHostname: string | undefined;

  /**
   * <p>Contains a list of Amazon Resource Names (ARNs) of agents that are used to connect to
   *       an NFS server. </p>
   *          <p>If you are copying data to or from your Snowcone device, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html#nfs-on-snowcone">NFS Server on Snowcone</a> for more information.</p>
   */
  OnPremConfig: OnPremConfig | undefined;

  /**
   * <p>The NFS mount options that DataSync can use to mount your NFS share.</p>
   */
  MountOptions?: NfsMountOptions;

  /**
   * <p>The key-value pair that represents the tag that you want to add to the location. The
   *       value can be an empty string. We recommend using tags to name your resources.</p>
   */
  Tags?: TagListEntry[];
}

export namespace CreateLocationNfsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLocationNfsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>CreateLocationNfsResponse</p>
 */
export interface CreateLocationNfsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the source NFS file system location that is
   *       created.</p>
   */
  LocationArn?: string;
}

export namespace CreateLocationNfsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLocationNfsResponse): any => ({
    ...obj,
  });
}

export enum ObjectStorageServerProtocol {
  HTTP = "HTTP",
  HTTPS = "HTTPS",
}

/**
 * <p>CreateLocationObjectStorageRequest</p>
 */
export interface CreateLocationObjectStorageRequest {
  /**
   * <p>The name of the self-managed object storage server. This value is the
   *       IP address or Domain Name Service (DNS) name of the object storage server.
   *       An agent uses this host name to mount the object storage server in a network. </p>
   */
  ServerHostname: string | undefined;

  /**
   * <p>The port that your self-managed object storage server accepts inbound network traffic on.
   *       The server port is set by default to TCP 80 (HTTP) or TCP 443 (HTTPS). You can
   *       specify a custom port if your self-managed object storage server requires one.</p>
   */
  ServerPort?: number;

  /**
   * <p>The protocol that the object storage server uses to communicate.
   *       Valid values are HTTP or HTTPS.</p>
   */
  ServerProtocol?: ObjectStorageServerProtocol | string;

  /**
   * <p>The subdirectory in the self-managed object storage server that is used
   *       to read data from.</p>
   */
  Subdirectory?: string;

  /**
   * <p>The bucket on the self-managed object storage server that is used
   *       to read data from.</p>
   */
  BucketName: string | undefined;

  /**
   * <p>Optional. The access key is used if credentials are required to access the self-managed
   *       object storage server. If your object storage requires a user name and password to
   *       authenticate, use <code>AccessKey</code> and <code>SecretKey</code> to provide the user name
   *       and password, respectively.</p>
   */
  AccessKey?: string;

  /**
   * <p>Optional. The secret key is used if credentials are required to access the self-managed
   *       object storage server. If your object storage requires a user name and password to
   *       authenticate, use <code>AccessKey</code> and <code>SecretKey</code> to provide the user name
   *       and password, respectively.</p>
   */
  SecretKey?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the agents associated with the
   *       self-managed object storage server location.</p>
   */
  AgentArns: string[] | undefined;

  /**
   * <p>The key-value pair that represents the tag that you want to add to the location. The
   *       value can be an empty string. We recommend using tags to name your resources.</p>
   */
  Tags?: TagListEntry[];
}

export namespace CreateLocationObjectStorageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLocationObjectStorageRequest): any => ({
    ...obj,
    ...(obj.SecretKey && { SecretKey: SENSITIVE_STRING }),
  });
}

/**
 * <p>CreateLocationObjectStorageResponse</p>
 */
export interface CreateLocationObjectStorageResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the agents associated with the
   *       self-managed object storage server location.</p>
   */
  LocationArn?: string;
}

export namespace CreateLocationObjectStorageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLocationObjectStorageResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role
 *       that is used to access an Amazon S3 bucket.</p>
 *
 *          <p>For detailed information about using such a role, see Creating a Location for
 *       Amazon S3 in the <i>DataSync User Guide</i>.</p>
 */
export interface S3Config {
  /**
   * <p>The Amazon S3 bucket to access. This bucket is used as a parameter in the
   *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationS3.html">CreateLocationS3</a>
   *       operation. </p>
   */
  BucketAccessRoleArn: string | undefined;
}

export namespace S3Config {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3Config): any => ({
    ...obj,
  });
}

export enum S3StorageClass {
  DEEP_ARCHIVE = "DEEP_ARCHIVE",
  GLACIER = "GLACIER",
  INTELLIGENT_TIERING = "INTELLIGENT_TIERING",
  ONEZONE_IA = "ONEZONE_IA",
  OUTPOSTS = "OUTPOSTS",
  STANDARD = "STANDARD",
  STANDARD_IA = "STANDARD_IA",
}

/**
 * <p>CreateLocationS3Request</p>
 */
export interface CreateLocationS3Request {
  /**
   * <p>A subdirectory in the Amazon S3 bucket. This subdirectory in Amazon S3 is used to read
   *       data from the S3 source location or write data to the S3 destination.</p>
   */
  Subdirectory?: string;

  /**
   * <p>The ARN of the Amazon S3 bucket. If the bucket is on an Amazon Web Services Outpost, this must be an
   *       access point ARN.</p>
   */
  S3BucketArn: string | undefined;

  /**
   * <p>The Amazon S3 storage class that you want to store your files in when this location is
   *       used as a task destination. For buckets in Amazon Web Services Regions, the storage class defaults to Standard.
   *       For buckets on Outposts, the storage class defaults to Amazon Web Services S3 Outposts.</p>
   *
   *          <p>For more information about S3 storage classes, see <a href="http://aws.amazon.com/s3/storage-classes/">Amazon S3 Storage Classes</a>. Some storage classes have behaviors that
   *       can affect your S3 storage cost. For detailed information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes">Considerations when working with S3 storage classes in DataSync</a>.</p>
   */
  S3StorageClass?: S3StorageClass | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role
   *       that is used to access an Amazon S3 bucket.</p>
   *
   *          <p>For detailed information about using such a role, see Creating a Location for
   *       Amazon S3 in the <i>DataSync User Guide</i>.</p>
   */
  S3Config: S3Config | undefined;

  /**
   * <p>If you are using DataSync on an Amazon Web Services Outpost, specify the Amazon Resource Names (ARNs) of
   *       the DataSync agents deployed on your Outpost. For more information about launching a DataSync
   *       agent on an Amazon Web Services Outpost, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/deploy-agents.html#outposts-agent">Deploy your DataSync agent on Outposts</a>.</p>
   */
  AgentArns?: string[];

  /**
   * <p>The key-value pair that represents the tag that you want to add to the location. The
   *       value can be an empty string. We recommend using tags to name your resources.</p>
   */
  Tags?: TagListEntry[];
}

export namespace CreateLocationS3Request {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLocationS3Request): any => ({
    ...obj,
  });
}

/**
 * <p>CreateLocationS3Response</p>
 */
export interface CreateLocationS3Response {
  /**
   * <p>The Amazon Resource Name (ARN) of the source Amazon S3 bucket location that is
   *       created.</p>
   */
  LocationArn?: string;
}

export namespace CreateLocationS3Response {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLocationS3Response): any => ({
    ...obj,
  });
}

export enum SmbVersion {
  AUTOMATIC = "AUTOMATIC",
  SMB2 = "SMB2",
  SMB3 = "SMB3",
}

/**
 * <p>Represents the mount options that are available for DataSync to access an SMB
 *       location.</p>
 */
export interface SmbMountOptions {
  /**
   * <p>The specific SMB version that you want DataSync to use to mount your SMB share. If you
   *       don't specify a version, DataSync defaults to <code>AUTOMATIC</code>. That is, DataSync
   *       automatically selects a version based on negotiation with the SMB server.</p>
   */
  Version?: SmbVersion | string;
}

export namespace SmbMountOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SmbMountOptions): any => ({
    ...obj,
  });
}

/**
 * <p>CreateLocationSmbRequest</p>
 */
export interface CreateLocationSmbRequest {
  /**
   * <p>The subdirectory in the SMB file system that is used to read data from the SMB source
   *       location or write data to the SMB destination. The SMB path should be a path that's
   *       exported by the SMB server, or a subdirectory of that path. The path should be such that it
   *       can be mounted by other SMB clients in your network.</p>
   *          <note>
   *             <p>
   *                <code>Subdirectory</code> must be specified with forward slashes. For example,
   *           <code>/path/to/folder</code>.</p>
   *          </note>
   *
   *          <p>To transfer all the data in the folder you specified, DataSync needs to have permissions
   *       to mount the SMB share, as well as to access all the data in that share. To ensure this,
   *       either ensure that the user/password specified belongs to the user who can mount the share,
   *       and who has the appropriate permissions for all of the files and directories that you want
   *       DataSync to access, or use credentials of a member of the Backup Operators group to mount
   *       the share. Doing either enables the agent to access the data. For the agent to access
   *       directories, you must additionally enable all execute access.</p>
   */
  Subdirectory: string | undefined;

  /**
   * <p>The name of the SMB server. This value is the IP address or Domain Name Service (DNS) name
   *       of the SMB server. An agent that is installed on-premises uses this hostname to mount the SMB
   *       server in a network.</p>
   *          <note>
   *             <p>This name must either be DNS-compliant or must be an IP version 4 (IPv4) address.</p>
   *          </note>
   */
  ServerHostname: string | undefined;

  /**
   * <p>The user who can mount the share, has the permissions to access files and folders in the
   *       SMB share.</p>
   *
   *          <p>For information about choosing a user name that ensures sufficient permissions to files,
   *       folders, and metadata, see <a href="create-smb-location.html#SMBuser">user</a>.</p>
   */
  User: string | undefined;

  /**
   * <p>The name of the Windows domain that the SMB server belongs to.</p>
   */
  Domain?: string;

  /**
   * <p>The password of the user who can mount the share, has the permissions to access files and
   *       folders in the SMB share.</p>
   */
  Password: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of agents to use for a Simple Message Block (SMB)
   *       location. </p>
   */
  AgentArns: string[] | undefined;

  /**
   * <p>The mount options used by DataSync to access the SMB server.</p>
   */
  MountOptions?: SmbMountOptions;

  /**
   * <p>The key-value pair that represents the tag that you want to add to the location. The value
   *       can be an empty string. We recommend using tags to name your resources.</p>
   */
  Tags?: TagListEntry[];
}

export namespace CreateLocationSmbRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLocationSmbRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

/**
 * <p>CreateLocationSmbResponse</p>
 */
export interface CreateLocationSmbResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the source SMB file system location that is
   *       created.</p>
   */
  LocationArn?: string;
}

export namespace CreateLocationSmbResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLocationSmbResponse): any => ({
    ...obj,
  });
}

export enum FilterType {
  SIMPLE_PATTERN = "SIMPLE_PATTERN",
}

/**
 * <p>Specifies which files, folders, and objects to include or exclude when transferring files
 *       from source to destination.</p>
 */
export interface FilterRule {
  /**
   * <p>The type of filter rule to apply. DataSync only supports the SIMPLE_PATTERN rule
   *       type.</p>
   */
  FilterType?: FilterType | string;

  /**
   * <p>A single filter string that consists of the patterns to include or exclude. The patterns
   *       are delimited by "|" (that is, a pipe), for example: <code>/folder1|/folder2</code>
   *          </p>
   *          <p>
   *     </p>
   */
  Value?: string;
}

export namespace FilterRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FilterRule): any => ({
    ...obj,
  });
}

export enum Gid {
  BOTH = "BOTH",
  INT_VALUE = "INT_VALUE",
  NAME = "NAME",
  NONE = "NONE",
}

export enum LogLevel {
  BASIC = "BASIC",
  OFF = "OFF",
  TRANSFER = "TRANSFER",
}

export enum Mtime {
  NONE = "NONE",
  PRESERVE = "PRESERVE",
}

export enum OverwriteMode {
  ALWAYS = "ALWAYS",
  NEVER = "NEVER",
}

export enum PosixPermissions {
  NONE = "NONE",
  PRESERVE = "PRESERVE",
}

export enum PreserveDeletedFiles {
  PRESERVE = "PRESERVE",
  REMOVE = "REMOVE",
}

export enum PreserveDevices {
  NONE = "NONE",
  PRESERVE = "PRESERVE",
}

export enum SmbSecurityDescriptorCopyFlags {
  NONE = "NONE",
  OWNER_DACL = "OWNER_DACL",
  OWNER_DACL_SACL = "OWNER_DACL_SACL",
}

export enum TaskQueueing {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum TransferMode {
  ALL = "ALL",
  CHANGED = "CHANGED",
}

export enum Uid {
  BOTH = "BOTH",
  INT_VALUE = "INT_VALUE",
  NAME = "NAME",
  NONE = "NONE",
}

export enum VerifyMode {
  NONE = "NONE",
  ONLY_FILES_TRANSFERRED = "ONLY_FILES_TRANSFERRED",
  POINT_IN_TIME_CONSISTENT = "POINT_IN_TIME_CONSISTENT",
}

/**
 * <p>Represents the options that are available to control the behavior of a
 *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>
 *       operation. Behavior includes preserving metadata such as user
 *       ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination,
 *       data integrity verification, and so on.</p>
 *          <p>A task has a set of default options associated with it. If you don't specify an option
 *       in <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>,
 *       the default value is used. You can override the
 *       defaults options on each task execution by specifying an overriding <code>Options</code> value
 *       to <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>.</p>
 */
export interface Options {
  /**
   * <p>A value that determines whether a data integrity verification should be performed at
   *       the end of a task execution after all data and metadata have been transferred.
   *       For more information, see
   *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-task.html">Configure task settings</a>.
   *     </p>
   *          <p>Default value: POINT_IN_TIME_CONSISTENT.</p>
   *          <p>ONLY_FILES_TRANSFERRED (recommended): Perform verification only on files that were transferred.
   *     </p>
   *
   *          <p>POINT_IN_TIME_CONSISTENT: Scan the entire source and entire destination
   *       at the end of the transfer
   *       to verify that source and destination are fully
   *       synchronized. This option isn't supported when transferring to S3 Glacier or S3 Glacier
   *       Deep Archive storage classes.</p>
   *          <p>NONE: No additional verification is done at the end of the
   *       transfer, but all data transmissions are integrity-checked with
   *       checksum verification during the transfer.</p>
   */
  VerifyMode?: VerifyMode | string;

  /**
   * <p>A value that determines whether files at the destination should be overwritten or
   *       preserved when copying files. If set to <code>NEVER</code> a destination file will not be
   *       replaced by a source file, even if the destination file differs from the source file. If you modify files in the destination and you sync the files, you can use this value to
   *       protect against overwriting those changes. </p>
   *          <p>Some storage classes have specific behaviors that can affect your S3 storage cost. For detailed information, see
   *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes">Considerations when working with Amazon S3 storage classes in DataSync </a>
   *       in the <i>DataSync
   *         User Guide</i>.</p>
   */
  OverwriteMode?: OverwriteMode | string;

  /**
   * <p>A file metadata value that shows the last time a file was accessed (that is, when the
   *       file was read or written to). If you set <code>Atime</code> to BEST_EFFORT, DataSync
   *       attempts to preserve the original <code>Atime</code> attribute on all source files (that is,
   *       the version before the PREPARING phase). However, <code>Atime</code>'s behavior is not
   *       fully standard across platforms, so DataSync can only do this on a best-effort basis. </p>
   *          <p>Default value: BEST_EFFORT.</p>
   *          <p>BEST_EFFORT: Attempt to preserve the per-file <code>Atime</code> value
   *       (recommended).</p>
   *          <p>NONE: Ignore <code>Atime</code>.</p>
   *          <note>
   *             <p>If <code>Atime</code> is set to BEST_EFFORT, <code>Mtime</code> must be set to PRESERVE. </p>
   *             <p>If <code>Atime</code> is set to NONE, <code>Mtime</code> must also be NONE. </p>
   *          </note>
   */
  Atime?: Atime | string;

  /**
   * <p>A value that indicates the last time that a file was modified (that is, a file was
   *       written to) before the PREPARING phase. This option is required for cases when you need to run
   *       the same task more than one time. </p>
   *          <p>Default value: PRESERVE. </p>
   *          <p>PRESERVE: Preserve original <code>Mtime</code> (recommended)</p>
   *          <p> NONE: Ignore <code>Mtime</code>. </p>
   *          <note>
   *             <p>If <code>Mtime</code> is set to PRESERVE, <code>Atime</code> must be set to
   *         BEST_EFFORT.</p>
   *             <p>If <code>Mtime</code> is set to NONE, <code>Atime</code> must also be set to NONE.
   *       </p>
   *          </note>
   */
  Mtime?: Mtime | string;

  /**
   * <p>The POSIX user ID (UID) of the file's owner. This option should only be set for NFS,
   *       EFS, and S3 locations. To learn more about what metadata is copied by DataSync, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/special-files.html#metadata-copied">Metadata Copied by DataSync</a>.</p>
   *          <p>Default value: INT_VALUE. This preserves the integer value of the ID.</p>
   *          <p>INT_VALUE: Preserve the integer value of UID and group ID (GID)
   *       (recommended).</p>
   *          <p>NONE: Ignore UID and GID. </p>
   */
  Uid?: Uid | string;

  /**
   * <p>The POSIX group ID (GID) of the file's owners. This option should only be set for
   *       NFS, EFS, and S3 locations. For more information about what metadata is copied by DataSync,
   *       see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/special-files.html#metadata-copied">Metadata Copied by DataSync</a>. </p>
   *          <p>Default value: INT_VALUE. This preserves the integer value of the ID.</p>
   *          <p>INT_VALUE: Preserve the integer value of user ID (UID) and GID (recommended).</p>
   *          <p>NONE: Ignore UID and GID. </p>
   */
  Gid?: Gid | string;

  /**
   * <p>A value that specifies whether files in the destination that don't exist in the source
   *       file system should be preserved. This option can affect your storage cost.
   *       If your task deletes objects, you might incur minimum storage duration charges for certain storage classes. For detailed
   *       information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes">Considerations when working with Amazon S3 storage classes in DataSync </a> in the <i>DataSync User
   *         Guide</i>.</p>
   *          <p>Default value: PRESERVE.</p>
   *          <p>PRESERVE: Ignore such destination files (recommended). </p>
   *          <p>REMOVE: Delete destination files that aren’t present in the source.</p>
   */
  PreserveDeletedFiles?: PreserveDeletedFiles | string;

  /**
   * <p>A value that determines whether DataSync should preserve the metadata of block
   *       and character devices in the source file system, and re-create the files with that device name
   *       and metadata on the destination. DataSync does not copy the contents of such devices, only the
   *       name and metadata. </p>
   *          <note>
   *             <p>DataSync can't sync the actual contents of such devices, because they are
   *         nonterminal and don't return an end-of-file (EOF) marker.</p>
   *          </note>
   *          <p>Default value: NONE.</p>
   *          <p>NONE: Ignore special devices (recommended). </p>
   *          <p>PRESERVE: Preserve character and block device metadata. This option isn't currently
   *       supported for Amazon EFS. </p>
   */
  PreserveDevices?: PreserveDevices | string;

  /**
   * <p>A value that determines which users or groups can access a file for a specific purpose
   *       such as reading, writing, or execution of the file. This option should only be set for NFS,
   *       EFS, and S3 locations. For more information about what metadata is copied by DataSync, see
   *         <a href="https://docs.aws.amazon.com/datasync/latest/userguide/special-files.html#metadata-copied">Metadata Copied by DataSync</a>. </p>
   *          <p>Default value: PRESERVE.</p>
   *          <p>PRESERVE: Preserve POSIX-style permissions (recommended).</p>
   *          <p>NONE: Ignore permissions. </p>
   *          <note>
   *             <p>DataSync can preserve extant permissions of a source location.</p>
   *          </note>
   */
  PosixPermissions?: PosixPermissions | string;

  /**
   * <p>A value that limits the bandwidth used by DataSync. For example, if you want
   *       DataSync to use a maximum of 1 MB, set this value to <code>1048576</code>
   *         (<code>=1024*1024</code>).</p>
   */
  BytesPerSecond?: number;

  /**
   * <p>A value that determines whether tasks should be queued before executing the tasks. If set
   *       to <code>ENABLED</code>, the tasks will be queued. The default is <code>ENABLED</code>.</p>
   *          <p>If you use the same agent to run multiple tasks, you can enable the tasks to run in
   *       series. For more information, see
   *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/run-task.html#queue-task-execution">Queueing task executions</a>.</p>
   */
  TaskQueueing?: TaskQueueing | string;

  /**
   * <p>A value that determines the type of logs that DataSync publishes to a log stream in the
   *       Amazon CloudWatch log group that you provide. For more information about providing a log group
   *       for DataSync, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateTask.html#DataSync-CreateTask-request-CloudWatchLogGroupArn">CloudWatchLogGroupArn</a>. If set to <code>OFF</code>, no logs are published.
   *         <code>BASIC</code> publishes logs on errors for individual files transferred, and
   *         <code>TRANSFER</code> publishes logs for every file or object that is transferred and
   *       integrity checked.</p>
   */
  LogLevel?: LogLevel | string;

  /**
   * <p>A value that determines whether DataSync transfers only the data and metadata that differ between the source
   *       and the destination location, or whether DataSync transfers all the content from the source, without comparing to
   *       the destination location. </p>
   *          <p>CHANGED: DataSync copies only data or metadata that is new or different content from the source location to the
   *       destination location.</p>
   *          <p>ALL: DataSync copies all source location content to the destination, without comparing to existing content on
   *       the destination.</p>
   */
  TransferMode?: TransferMode | string;

  /**
   * <p>A value that determines which components of the SMB security descriptor are copied from source
   *       to destination objects.
   *       </p>
   *          <p>This value is only used for transfers
   *       between SMB and Amazon FSx for Windows File Server locations, or between two Amazon FSx for Windows File
   *       Server locations. For more information about how
   *       DataSync handles metadata, see
   *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/special-files.html">How DataSync Handles Metadata and Special Files</a>.
   *     </p>
   *          <p>Default value: OWNER_DACL.</p>
   *
   *          <p>
   *             <b>OWNER_DACL</b>: For each copied object, DataSync copies the following metadata:</p>
   *          <ul>
   *             <li>
   *                <p>Object owner.</p>
   *             </li>
   *             <li>
   *                <p>NTFS discretionary access control lists (DACLs), which determine whether to
   *         grant access to an object.</p>
   *             </li>
   *          </ul>
   *          <p>When choosing this option, DataSync does NOT copy the NTFS system access control lists
   *       (SACLs), which are used by administrators to log attempts to access a secured object.</p>
   *
   *          <p>
   *             <b>OWNER_DACL_SACL</b>: For each copied object, DataSync copies the following metadata:</p>
   *          <ul>
   *             <li>
   *                <p>Object owner.</p>
   *             </li>
   *             <li>
   *                <p>NTFS discretionary access control lists (DACLs), which determine whether to
   *           grant access to an object.</p>
   *             </li>
   *             <li>
   *                <p>NTFS system access control lists (SACLs), which are used by administrators
   *           to log attempts to access a secured object.</p>
   *             </li>
   *          </ul>
   *          <p>Copying SACLs requires granting additional permissions to the Windows user that DataSync
   *       uses to access your SMB location. For information about choosing a user that ensures
   *       sufficient permissions to files, folders, and metadata, see <a href="create-smb-location.html#SMBuser">user</a>.</p>
   *
   *          <p>
   *             <b>NONE</b>: None of the SMB security descriptor components
   *       are copied. Destination objects are owned by the user that was provided for accessing the
   *       destination location. DACLs and SACLs are set based on the destination server’s configuration.
   *     </p>
   */
  SecurityDescriptorCopyFlags?: SmbSecurityDescriptorCopyFlags | string;
}

export namespace Options {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Options): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the schedule you want your task to use for repeated executions. For more
 *       information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html">Schedule Expressions for Rules</a>.</p>
 */
export interface TaskSchedule {
  /**
   * <p>A cron expression that specifies when DataSync initiates a scheduled transfer from a
   *       source to a destination location. </p>
   */
  ScheduleExpression: string | undefined;
}

export namespace TaskSchedule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaskSchedule): any => ({
    ...obj,
  });
}

/**
 * <p>CreateTaskRequest</p>
 */
export interface CreateTaskRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the source location for the task.</p>
   */
  SourceLocationArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon Web Services storage resource's location. </p>
   */
  DestinationLocationArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that is used to
   *       monitor and log events in the task. </p>
   */
  CloudWatchLogGroupArn?: string;

  /**
   * <p>The name of a task. This value is a text reference that is used to identify the task in
   *       the console. </p>
   */
  Name?: string;

  /**
   * <p>The set of configuration options that control the behavior of a single execution of the
   *       task that occurs when you call <code>StartTaskExecution</code>. You can configure these
   *       options to preserve metadata such as user ID (UID) and group ID (GID), file permissions, data
   *       integrity verification, and so on.</p>
   *          <p>For each individual task execution, you can override these options by specifying the
   *         <code>OverrideOptions</code> before starting the task execution. For more information, see
   *       the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a> operation. </p>
   */
  Options?: Options;

  /**
   * <p>A list of filter rules that determines which files to exclude from a task. The list should
   *       contain a single filter string that consists of the patterns to exclude. The patterns are
   *       delimited by "|" (that is, a pipe), for example, <code>"/folder1|/folder2"</code>. </p>
   *          <p>
   *     </p>
   */
  Excludes?: FilterRule[];

  /**
   * <p>Specifies a schedule used to periodically transfer files from a source to a destination
   *       location. The schedule should be specified in UTC time. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/task-scheduling.html">Scheduling your task</a>.</p>
   */
  Schedule?: TaskSchedule;

  /**
   * <p>The key-value pair that represents the tag that you want to add to the resource. The
   *       value can be an empty string. </p>
   */
  Tags?: TagListEntry[];

  /**
   * <p>A list of filter rules that determines which files to include when running a task. The
   *       pattern should contain a single filter string that consists of the patterns to include. The
   *       patterns are delimited by "|" (that is, a pipe). For example:
   *       <code>"/folder1|/folder2</code>"</p>
   */
  Includes?: FilterRule[];
}

export namespace CreateTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTaskRequest): any => ({
    ...obj,
  });
}

/**
 * <p>CreateTaskResponse</p>
 */
export interface CreateTaskResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the task.</p>
   */
  TaskArn?: string;
}

export namespace CreateTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTaskResponse): any => ({
    ...obj,
  });
}

/**
 * <p>DeleteAgentRequest</p>
 */
export interface DeleteAgentRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the agent to delete. Use the <code>ListAgents</code>
   *       operation to return a list of agents for your account and Amazon Web Services Region.</p>
   */
  AgentArn: string | undefined;
}

export namespace DeleteAgentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAgentRequest): any => ({
    ...obj,
  });
}

export interface DeleteAgentResponse {}

export namespace DeleteAgentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAgentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>DeleteLocation</p>
 */
export interface DeleteLocationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the location to delete.</p>
   */
  LocationArn: string | undefined;
}

export namespace DeleteLocationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLocationRequest): any => ({
    ...obj,
  });
}

export interface DeleteLocationResponse {}

export namespace DeleteLocationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLocationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>DeleteTask</p>
 */
export interface DeleteTaskRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the task to delete.</p>
   */
  TaskArn: string | undefined;
}

export namespace DeleteTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTaskRequest): any => ({
    ...obj,
  });
}

export interface DeleteTaskResponse {}

export namespace DeleteTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTaskResponse): any => ({
    ...obj,
  });
}

/**
 * <p>DescribeAgent</p>
 */
export interface DescribeAgentRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the agent to describe.</p>
   */
  AgentArn: string | undefined;
}

export namespace DescribeAgentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAgentRequest): any => ({
    ...obj,
  });
}

export enum EndpointType {
  FIPS = "FIPS",
  PRIVATE_LINK = "PRIVATE_LINK",
  PUBLIC = "PUBLIC",
}

/**
 * <p>The VPC endpoint, subnet, and security group that an agent uses to access IP addresses in
 *       a VPC (Virtual Private Cloud).</p>
 */
export interface PrivateLinkConfig {
  /**
   * <p>The ID of the VPC endpoint that is configured for an agent. An agent that is configured
   *       with a VPC endpoint will not be accessible over the public internet.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>The private endpoint that is configured for an agent that has access to IP addresses in a
   *         <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-service.html">PrivateLink</a>. An agent that is configured with this endpoint will not be accessible
   *       over the public internet.</p>
   */
  PrivateLinkEndpoint?: string;

  /**
   * <p>The Amazon Resource Names (ARNs) of the subnets that are configured for an agent activated
   *       in a VPC or an agent that has access to a VPC endpoint.</p>
   */
  SubnetArns?: string[];

  /**
   * <p>The Amazon Resource Names (ARNs) of the security groups that are configured for the EC2
   *       resource that hosts an agent activated in a VPC or an agent that has access to a VPC
   *       endpoint.</p>
   */
  SecurityGroupArns?: string[];
}

export namespace PrivateLinkConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrivateLinkConfig): any => ({
    ...obj,
  });
}

/**
 * <p>DescribeAgentResponse</p>
 */
export interface DescribeAgentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the agent.</p>
   */
  AgentArn?: string;

  /**
   * <p>The name of the agent.</p>
   */
  Name?: string;

  /**
   * <p>The status of the agent. If the status is ONLINE, then the agent is configured properly
   *       and is available to use. The Running status is the normal running status for an agent. If the
   *       status is OFFLINE, the agent's VM is turned off or the agent is in an unhealthy state. When
   *       the issue that caused the unhealthy state is resolved, the agent returns to ONLINE
   *       status.</p>
   */
  Status?: AgentStatus | string;

  /**
   * <p>The time that the agent last connected to DataSync.</p>
   */
  LastConnectionTime?: Date;

  /**
   * <p>The time that the agent was activated (that is, created in your account).</p>
   */
  CreationTime?: Date;

  /**
   * <p>The type of endpoint that your agent is connected to. If the endpoint is a VPC endpoint,
   *       the agent is not accessible over the public internet. </p>
   */
  EndpointType?: EndpointType | string;

  /**
   * <p>The subnet and the security group that DataSync used to access a VPC endpoint.</p>
   */
  PrivateLinkConfig?: PrivateLinkConfig;
}

export namespace DescribeAgentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAgentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>DescribeLocationEfsRequest</p>
 */
export interface DescribeLocationEfsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the EFS location to describe.</p>
   */
  LocationArn: string | undefined;
}

export namespace DescribeLocationEfsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLocationEfsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>DescribeLocationEfsResponse</p>
 */
export interface DescribeLocationEfsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the EFS location that was described.</p>
   */
  LocationArn?: string;

  /**
   * <p>The URL of the EFS location that was described.</p>
   */
  LocationUri?: string;

  /**
   * <p>The subnet and the security group that DataSync uses to access target EFS file system.
   *       The subnet must have at least one mount target for that file system. The security group that
   *       you provide needs to be able to communicate with the security group on the mount target in the
   *       subnet specified. </p>
   */
  Ec2Config?: Ec2Config;

  /**
   * <p>The time that the EFS location was created.</p>
   */
  CreationTime?: Date;
}

export namespace DescribeLocationEfsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLocationEfsResponse): any => ({
    ...obj,
  });
}

export interface DescribeLocationFsxWindowsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the FSx for Windows File Server location to
   *       describe.</p>
   */
  LocationArn: string | undefined;
}

export namespace DescribeLocationFsxWindowsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLocationFsxWindowsRequest): any => ({
    ...obj,
  });
}

export interface DescribeLocationFsxWindowsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the FSx for Windows File Server location that was
   *       described.</p>
   */
  LocationArn?: string;

  /**
   * <p>The URL of the FSx for Windows File Server location that was described.</p>
   */
  LocationUri?: string;

  /**
   * <p>The Amazon Resource Names (ARNs) of the security groups that are configured for the FSx
   *       for Windows File Server file system.</p>
   */
  SecurityGroupArns?: string[];

  /**
   * <p>The time that the FSx for Windows File Server location was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The user who has the permissions to access files and folders in the FSx for Windows File
   *       Server file system.</p>
   */
  User?: string;

  /**
   * <p>The name of the Windows domain that the FSx for Windows File Server belongs to.</p>
   */
  Domain?: string;
}

export namespace DescribeLocationFsxWindowsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLocationFsxWindowsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>DescribeLocationNfsRequest</p>
 */
export interface DescribeLocationNfsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the NFS location to describe.</p>
   */
  LocationArn: string | undefined;
}

export namespace DescribeLocationNfsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLocationNfsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>DescribeLocationNfsResponse</p>
 */
export interface DescribeLocationNfsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the NFS location that was described.</p>
   */
  LocationArn?: string;

  /**
   * <p>The URL of the source NFS location that was described.</p>
   */
  LocationUri?: string;

  /**
   * <p>A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS)
   *       location.</p>
   */
  OnPremConfig?: OnPremConfig;

  /**
   * <p>The NFS mount options that DataSync used to mount your NFS share.</p>
   */
  MountOptions?: NfsMountOptions;

  /**
   * <p>The time that the NFS location was created.</p>
   */
  CreationTime?: Date;
}

export namespace DescribeLocationNfsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLocationNfsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>DescribeLocationObjectStorageRequest</p>
 */
export interface DescribeLocationObjectStorageRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the self-managed object storage server location that was described.</p>
   */
  LocationArn: string | undefined;
}

export namespace DescribeLocationObjectStorageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLocationObjectStorageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>DescribeLocationObjectStorageResponse</p>
 */
export interface DescribeLocationObjectStorageResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the self-managed object storage server location to describe.</p>
   */
  LocationArn?: string;

  /**
   * <p>The URL of the source self-managed object storage server location that was described.</p>
   */
  LocationUri?: string;

  /**
   * <p>Optional. The access key is used if credentials are required to access the self-managed
   *       object storage server. If your object storage requires a user name and password to
   *       authenticate, use <code>AccessKey</code> and <code>SecretKey</code> to provide the user name
   *       and password, respectively.</p>
   */
  AccessKey?: string;

  /**
   * <p>The port that your self-managed object storage server accepts inbound network traffic on.
   *       The server port is set by default to TCP 80 (HTTP) or TCP 443 (HTTPS).</p>
   */
  ServerPort?: number;

  /**
   * <p>The protocol that the object storage server uses to communicate.
   *       Valid values are HTTP or HTTPS.</p>
   */
  ServerProtocol?: ObjectStorageServerProtocol | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the agents associated with the
   *       self-managed object storage server location.</p>
   */
  AgentArns?: string[];

  /**
   * <p>The time that the self-managed object storage server agent was created.</p>
   */
  CreationTime?: Date;
}

export namespace DescribeLocationObjectStorageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLocationObjectStorageResponse): any => ({
    ...obj,
  });
}

/**
 * <p>DescribeLocationS3Request</p>
 */
export interface DescribeLocationS3Request {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 bucket location to describe.</p>
   */
  LocationArn: string | undefined;
}

export namespace DescribeLocationS3Request {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLocationS3Request): any => ({
    ...obj,
  });
}

/**
 * <p>DescribeLocationS3Response</p>
 */
export interface DescribeLocationS3Response {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 bucket or access point.</p>
   */
  LocationArn?: string;

  /**
   * <p>The URL of the Amazon S3 location that was described.</p>
   */
  LocationUri?: string;

  /**
   * <p>The Amazon S3 storage class that you chose to store your files in when this location is
   *       used as a task destination. For more information about S3 storage classes, see <a href="http://aws.amazon.com/s3/storage-classes/">Amazon S3 Storage Classes</a>. Some storage
   *       classes have behaviors that can affect your S3 storage cost. For detailed information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes">Considerations when
   *         working with S3 storage classes in DataSync</a>.</p>
   */
  S3StorageClass?: S3StorageClass | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role
   *       that is used to access an Amazon S3 bucket.</p>
   *
   *          <p>For detailed information about using such a role, see Creating a Location for
   *       Amazon S3 in the <i>DataSync User Guide</i>.</p>
   */
  S3Config?: S3Config;

  /**
   * <p>If you are using DataSync on an Amazon Web Services Outpost, the Amazon Resource Name (ARNs) of the EC2
   *       agents deployed on your Outpost. For more information about launching a DataSync agent on an
   *       Amazon Web Services Outpost, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/deploy-agents.html#outposts-agent">Deploy your DataSync agent on Outposts</a>.</p>
   */
  AgentArns?: string[];

  /**
   * <p>The time that the Amazon S3 bucket location was created.</p>
   */
  CreationTime?: Date;
}

export namespace DescribeLocationS3Response {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLocationS3Response): any => ({
    ...obj,
  });
}

/**
 * <p>DescribeLocationSmbRequest</p>
 */
export interface DescribeLocationSmbRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the SMB location to describe.</p>
   */
  LocationArn: string | undefined;
}

export namespace DescribeLocationSmbRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLocationSmbRequest): any => ({
    ...obj,
  });
}

/**
 * <p>DescribeLocationSmbResponse</p>
 */
export interface DescribeLocationSmbResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the SMB location that was described.</p>
   */
  LocationArn?: string;

  /**
   * <p>The URL of the source SMB location that was described.</p>
   */
  LocationUri?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source SMB file system location that is
   *       created.</p>
   */
  AgentArns?: string[];

  /**
   * <p>The user who can mount the share, has the permissions to access files and folders in the
   *       SMB share.</p>
   */
  User?: string;

  /**
   * <p>The name of the Windows domain that the SMB server belongs to.</p>
   */
  Domain?: string;

  /**
   * <p>The mount options that are available for DataSync to use to access an SMB location.</p>
   */
  MountOptions?: SmbMountOptions;

  /**
   * <p>The time that the SMB location was created.</p>
   */
  CreationTime?: Date;
}

export namespace DescribeLocationSmbResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLocationSmbResponse): any => ({
    ...obj,
  });
}

/**
 * <p>DescribeTaskRequest</p>
 */
export interface DescribeTaskRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the task to describe.</p>
   */
  TaskArn: string | undefined;
}

export namespace DescribeTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTaskRequest): any => ({
    ...obj,
  });
}

export enum TaskStatus {
  AVAILABLE = "AVAILABLE",
  CREATING = "CREATING",
  QUEUED = "QUEUED",
  RUNNING = "RUNNING",
  UNAVAILABLE = "UNAVAILABLE",
}

/**
 * <p>DescribeTaskResponse</p>
 */
export interface DescribeTaskResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the task that was described.</p>
   */
  TaskArn?: string;

  /**
   * <p>The status of the task that was described.</p>
   *
   *
   *          <p>For detailed information about task execution statuses, see Understanding
   *       Task Statuses in the <i>DataSync User Guide</i>.</p>
   */
  Status?: TaskStatus | string;

  /**
   * <p>The name of the task that was described.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the task execution that is syncing files.</p>
   */
  CurrentTaskExecutionArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source file system's location.</p>
   */
  SourceLocationArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services storage resource's location.</p>
   */
  DestinationLocationArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that was used to
   *       monitor and log events in the task.</p>
   *
   *
   *          <p>For more information on these groups, see Working with Log Groups and Log
   *       Streams in the <i>Amazon CloudWatch User Guide</i>.</p>
   */
  CloudWatchLogGroupArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source ENIs (Elastic Network Interface) that was
   *       created for your subnet.</p>
   */
  SourceNetworkInterfaceArns?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the destination ENIs (Elastic Network Interface) that
   *       was created for your subnet.</p>
   */
  DestinationNetworkInterfaceArns?: string[];

  /**
   * <p>The set of configuration options that control the behavior of a single execution of the
   *       task that occurs when you call <code>StartTaskExecution</code>. You can configure these
   *       options to preserve metadata such as user ID (UID) and group (GID), file permissions, data
   *       integrity verification, and so on.</p>
   *          <p>For each individual task execution, you can override these options by specifying the
   *       overriding <code>OverrideOptions</code> value to <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a> operation. </p>
   */
  Options?: Options;

  /**
   * <p>A list of filter rules that determines which files to exclude from a task. The list should
   *       contain a single filter string that consists of the patterns to exclude. The patterns are
   *       delimited by "|" (that is, a pipe), for example: <code>"/folder1|/folder2"</code>
   *          </p>
   *          <p>
   *     </p>
   */
  Excludes?: FilterRule[];

  /**
   * <p>The schedule used to periodically transfer files from a source to a destination location.</p>
   */
  Schedule?: TaskSchedule;

  /**
   * <p>Errors that DataSync encountered during execution of the task. You can use this
   *       error code to help troubleshoot issues.</p>
   */
  ErrorCode?: string;

  /**
   * <p>Detailed description of an error that was encountered during the task execution. You
   *       can use this information to help troubleshoot issues. </p>
   */
  ErrorDetail?: string;

  /**
   * <p>The time that the task was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A list of filter rules that determines which files to include when running a task. The
   *       pattern should contain a single filter string that consists of the patterns to include. The
   *       patterns are delimited by "|" (that is, a pipe). For example:
   *       <code>"/folder1|/folder2</code>"</p>
   */
  Includes?: FilterRule[];
}

export namespace DescribeTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTaskResponse): any => ({
    ...obj,
  });
}

/**
 * <p>DescribeTaskExecutionRequest</p>
 */
export interface DescribeTaskExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the task that is being executed.</p>
   */
  TaskExecutionArn: string | undefined;
}

export namespace DescribeTaskExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTaskExecutionRequest): any => ({
    ...obj,
  });
}

export enum PhaseStatus {
  ERROR = "ERROR",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
}

/**
 * <p>Describes the detailed result of a <code>TaskExecution</code> operation. This result
 *       includes the time in milliseconds spent in each phase, the status of the task execution, and
 *       the errors encountered.</p>
 */
export interface TaskExecutionResultDetail {
  /**
   * <p>The total time in milliseconds that DataSync spent in the PREPARING phase.
   *     </p>
   */
  PrepareDuration?: number;

  /**
   * <p>The status of the PREPARING phase.</p>
   */
  PrepareStatus?: PhaseStatus | string;

  /**
   * <p>The total time in milliseconds that DataSync took to transfer the file from the source to the destination location.</p>
   */
  TotalDuration?: number;

  /**
   * <p>The total time in milliseconds that DataSync spent in the TRANSFERRING
   *       phase.</p>
   */
  TransferDuration?: number;

  /**
   * <p>The status of the TRANSFERRING phase.</p>
   */
  TransferStatus?: PhaseStatus | string;

  /**
   * <p>The total time in milliseconds that DataSync spent in the VERIFYING
   *       phase.</p>
   */
  VerifyDuration?: number;

  /**
   * <p>The status of the VERIFYING phase.</p>
   */
  VerifyStatus?: PhaseStatus | string;

  /**
   * <p>Errors that DataSync encountered during execution of the task. You can use this
   *       error code to help troubleshoot issues.</p>
   */
  ErrorCode?: string;

  /**
   * <p>Detailed description of an error that was encountered during the task execution. You
   *       can use this information to help troubleshoot issues. </p>
   */
  ErrorDetail?: string;
}

export namespace TaskExecutionResultDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaskExecutionResultDetail): any => ({
    ...obj,
  });
}

export enum TaskExecutionStatus {
  ERROR = "ERROR",
  LAUNCHING = "LAUNCHING",
  PREPARING = "PREPARING",
  QUEUED = "QUEUED",
  SUCCESS = "SUCCESS",
  TRANSFERRING = "TRANSFERRING",
  VERIFYING = "VERIFYING",
}

/**
 * <p>DescribeTaskExecutionResponse</p>
 */
export interface DescribeTaskExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the task execution that was described.
   *         <code>TaskExecutionArn</code> is hierarchical and includes <code>TaskArn</code> for the task
   *       that was executed. </p>
   *          <p>For example, a <code>TaskExecution</code> value with the ARN
   *         <code>arn:aws:datasync:us-east-1:111222333444:task/task-0208075f79cedf4a2/execution/exec-08ef1e88ec491019b</code>
   *       executed the task with the ARN
   *         <code>arn:aws:datasync:us-east-1:111222333444:task/task-0208075f79cedf4a2</code>. </p>
   */
  TaskExecutionArn?: string;

  /**
   * <p>The status of the task execution. </p>
   *
   *
   *          <p>For detailed information about task execution statuses, see Understanding
   *       Task Statuses in the <i>DataSync User Guide.</i>
   *          </p>
   */
  Status?: TaskExecutionStatus | string;

  /**
   * <p>Represents the options that are available to control the behavior of a
   *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>
   *       operation. Behavior includes preserving metadata such as user
   *       ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination,
   *       data integrity verification, and so on.</p>
   *          <p>A task has a set of default options associated with it. If you don't specify an option
   *       in <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>,
   *       the default value is used. You can override the
   *       defaults options on each task execution by specifying an overriding <code>Options</code> value
   *       to <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>.</p>
   */
  Options?: Options;

  /**
   * <p>A list of filter rules that determines which files to exclude from a task. The list should
   *       contain a single filter string that consists of the patterns to exclude. The patterns are
   *       delimited by "|" (that is, a pipe), for example: <code>"/folder1|/folder2"</code>
   *          </p>
   *          <p>
   *     </p>
   */
  Excludes?: FilterRule[];

  /**
   * <p>A list of filter rules that determines which files to include when running a task. The
   *       list should contain a single filter string that consists of the patterns to include. The
   *       patterns are delimited by "|" (that is, a pipe), for example: <code>"/folder1|/folder2"</code>
   *          </p>
   *          <p>
   *     </p>
   */
  Includes?: FilterRule[];

  /**
   * <p>The time that the task execution was started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The expected number of files that is to be transferred over the network. This value is
   *       calculated during the PREPARING phase, before the TRANSFERRING phase. This value is the
   *       expected number of files to be transferred. It's calculated based on comparing the
   *       content of the source and destination locations and finding the delta that needs to be
   *       transferred. </p>
   */
  EstimatedFilesToTransfer?: number;

  /**
   * <p>The estimated physical number of bytes that is to be transferred over the
   *       network.</p>
   */
  EstimatedBytesToTransfer?: number;

  /**
   * <p>The actual number of files that was transferred over the network. This value is
   *       calculated and updated on an ongoing basis during the TRANSFERRING phase. It's updated
   *       periodically when each file is read from the source and sent over the network. </p>
   *          <p>If failures occur during a transfer, this value can be less than
   *         <code>EstimatedFilesToTransfer</code>. This value can also be greater than
   *         <code>EstimatedFilesTransferred</code> in some cases. This element is
   *       implementation-specific for some location types, so don't use it as an indicator for a correct
   *       file number or to monitor your task execution.</p>
   */
  FilesTransferred?: number;

  /**
   * <p>The number of logical bytes written to the destination Amazon Web Services storage resource.</p>
   */
  BytesWritten?: number;

  /**
   * <p>The physical number of bytes transferred over the network.</p>
   */
  BytesTransferred?: number;

  /**
   * <p>The result of the task execution.</p>
   */
  Result?: TaskExecutionResultDetail;
}

export namespace DescribeTaskExecutionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTaskExecutionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>ListAgentsRequest</p>
 */
export interface ListAgentsRequest {
  /**
   * <p>The maximum number of agents to list.</p>
   */
  MaxResults?: number;

  /**
   * <p>An opaque string that indicates the position at which to begin the next list of
   *       agents.</p>
   */
  NextToken?: string;
}

export namespace ListAgentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAgentsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>ListAgentsResponse</p>
 */
export interface ListAgentsResponse {
  /**
   * <p>A list of agents in your account.</p>
   */
  Agents?: AgentListEntry[];

  /**
   * <p>An opaque string that indicates the position at which to begin returning the next list
   *       of agents.</p>
   */
  NextToken?: string;
}

export namespace ListAgentsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAgentsResponse): any => ({
    ...obj,
  });
}

export enum LocationFilterName {
  CreationTime = "CreationTime",
  LocationType = "LocationType",
  LocationUri = "LocationUri",
}

export enum Operator {
  BEGINS_WITH = "BeginsWith",
  CONTAINS = "Contains",
  EQ = "Equals",
  GE = "GreaterThanOrEqual",
  GT = "GreaterThan",
  IN = "In",
  LE = "LessThanOrEqual",
  LT = "LessThan",
  NE = "NotEquals",
  NOT_CONTAINS = "NotContains",
}

/**
 * <p>You can use API filters to narrow down the list of resources returned by <code>ListLocations</code>.
 *       For example, to retrieve all your Amazon S3 locations, you can use <code>ListLocations</code> with
 *       filter name <code>LocationType S3</code> and <code>Operator Equals</code>.</p>
 */
export interface LocationFilter {
  /**
   * <p>The name of the filter being used. Each API call supports a list of filters that are available
   *       for it (for example, <code>LocationType</code> for <code>ListLocations</code>).</p>
   */
  Name: LocationFilterName | string | undefined;

  /**
   * <p>The values that you want to filter for. For example, you might want to display only Amazon S3
   *       locations.</p>
   */
  Values: string[] | undefined;

  /**
   * <p>The operator that is used to compare filter values (for example, <code>Equals</code> or
   *       <code>Contains</code>). For more about API filtering operators, see
   *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/query-resources.html">API filters for ListTasks and ListLocations</a>.</p>
   */
  Operator: Operator | string | undefined;
}

export namespace LocationFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LocationFilter): any => ({
    ...obj,
  });
}

/**
 * <p>ListLocationsRequest</p>
 */
export interface ListLocationsRequest {
  /**
   * <p>The maximum number of locations to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>An opaque string that indicates the position at which to begin the next list of
   *       locations.</p>
   */
  NextToken?: string;

  /**
   * <p>You can use API filters to narrow down the list of resources returned by <code>ListLocations</code>.
   *       For example, to retrieve all tasks on a specific source location, you can use <code>ListLocations</code>
   *       with filter name <code>LocationType S3</code> and <code>Operator Equals</code>.</p>
   */
  Filters?: LocationFilter[];
}

export namespace ListLocationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLocationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a single entry in a list of locations. <code>LocationListEntry</code>
 *       returns an array that contains a list of locations when the
 *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListLocations.html">ListLocations</a>
 *       operation is called.</p>
 */
export interface LocationListEntry {
  /**
   * <p>The Amazon Resource Name (ARN) of the location. For Network File System (NFS) or Amazon
   *       EFS, the location is the export path. For Amazon S3, the location is the prefix path that you
   *       want to mount and use as the root of the location.</p>
   */
  LocationArn?: string;

  /**
   * <p>Represents a list of URLs of a location. <code>LocationUri</code> returns an array that
   *       contains a list of locations when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListLocations.html">ListLocations</a> operation is
   *       called.</p>
   *          <p>Format: <code>TYPE://GLOBAL_ID/SUBDIR</code>.</p>
   *          <p>TYPE designates the type of location. Valid values: NFS | EFS | S3.</p>
   *          <p>GLOBAL_ID is the globally unique identifier of the resource that backs the location. An
   *       example for EFS is <code>us-east-2.fs-abcd1234</code>. An example for Amazon S3 is the bucket
   *       name, such as <code>myBucket</code>. An example for NFS is a valid IPv4 address or a host name
   *       compliant with Domain Name Service (DNS).</p>
   *          <p>SUBDIR is a valid file system path, delimited by forward slashes as is the *nix
   *       convention. For NFS and Amazon EFS, it's the export path to mount the location. For
   *       Amazon S3, it's the prefix path that you mount to and treat as the root of the
   *       location.</p>
   *          <p></p>
   */
  LocationUri?: string;
}

export namespace LocationListEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LocationListEntry): any => ({
    ...obj,
  });
}

/**
 * <p>ListLocationsResponse</p>
 */
export interface ListLocationsResponse {
  /**
   * <p>An array that contains a list of locations.</p>
   */
  Locations?: LocationListEntry[];

  /**
   * <p>An opaque string that indicates the position at which to begin returning the next list
   *       of locations.</p>
   */
  NextToken?: string;
}

export namespace ListLocationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLocationsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>ListTagsForResourceRequest</p>
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource whose tags to list.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The maximum number of locations to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>An opaque string that indicates the position at which to begin the next list of
   *       locations.</p>
   */
  NextToken?: string;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>ListTagsForResourceResponse</p>
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Array of resource tags.</p>
   */
  Tags?: TagListEntry[];

  /**
   * <p>An opaque string that indicates the position at which to begin returning the next list
   *       of resource tags.</p>
   */
  NextToken?: string;
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>ListTaskExecutions</p>
 */
export interface ListTaskExecutionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the task whose tasks you want to list.</p>
   */
  TaskArn?: string;

  /**
   * <p>The maximum number of executed tasks to list.</p>
   */
  MaxResults?: number;

  /**
   * <p>An opaque string that indicates the position at which to begin the next list of the
   *       executed tasks.</p>
   */
  NextToken?: string;
}

export namespace ListTaskExecutionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTaskExecutionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a single entry in a list of task executions.
 *         <code>TaskExecutionListEntry</code> returns an array that contains a list of specific
 *       invocations of a task when the
 *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTaskExecutions.html">ListTaskExecutions</a>
 *       operation is called.</p>
 */
export interface TaskExecutionListEntry {
  /**
   * <p>The Amazon Resource Name (ARN) of the task that was executed.</p>
   */
  TaskExecutionArn?: string;

  /**
   * <p>The status of a task execution.</p>
   */
  Status?: TaskExecutionStatus | string;
}

export namespace TaskExecutionListEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaskExecutionListEntry): any => ({
    ...obj,
  });
}

/**
 * <p>ListTaskExecutionsResponse</p>
 */
export interface ListTaskExecutionsResponse {
  /**
   * <p>A list of executed tasks.</p>
   */
  TaskExecutions?: TaskExecutionListEntry[];

  /**
   * <p>An opaque string that indicates the position at which to begin returning the next list
   *       of executed tasks.</p>
   */
  NextToken?: string;
}

export namespace ListTaskExecutionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTaskExecutionsResponse): any => ({
    ...obj,
  });
}

export enum TaskFilterName {
  CreationTime = "CreationTime",
  LocationId = "LocationId",
}

/**
 * <p>You can use API filters to narrow down the list of resources returned by <code>ListTasks</code>.
 *       For example, to retrieve all tasks on a source location, you can use <code>ListTasks</code>
 *       with filter name <code>LocationId</code> and <code>Operator Equals</code> with the ARN for the
 *       location.</p>
 */
export interface TaskFilter {
  /**
   * <p>The name of the filter being used. Each API call supports a list of filters that are available
   *       for it. For example, <code>LocationId</code> for <code>ListTasks</code>.</p>
   */
  Name: TaskFilterName | string | undefined;

  /**
   * <p>The values that you want to filter for. For example, you might want to display only tasks
   *       for a specific destination location.</p>
   */
  Values: string[] | undefined;

  /**
   * <p>The operator that is used to compare filter values (for example, <code>Equals</code> or
   *       <code>Contains</code>). For more about API filtering operators, see
   *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/query-resources.html">API filters for ListTasks and ListLocations</a>.</p>
   */
  Operator: Operator | string | undefined;
}

export namespace TaskFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaskFilter): any => ({
    ...obj,
  });
}

/**
 * <p>ListTasksRequest</p>
 */
export interface ListTasksRequest {
  /**
   * <p>The maximum number of tasks to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>An opaque string that indicates the position at which to begin the next list of
   *       tasks.</p>
   */
  NextToken?: string;

  /**
   * <p>You can use API filters to narrow down the list of resources returned by <code>ListTasks</code>.
   *       For example, to retrieve all tasks on a specific source location, you can use <code>ListTasks</code>
   *       with filter name <code>LocationId</code> and <code>Operator Equals</code> with the ARN for the
   *       location.</p>
   */
  Filters?: TaskFilter[];
}

export namespace ListTasksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTasksRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a single entry in a list of tasks. <code>TaskListEntry</code> returns an
 *       array that contains a list of tasks when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTasks.html">ListTasks</a> operation is called.
 *       A task includes the source and destination file systems to sync and the options to use for the
 *       tasks.</p>
 */
export interface TaskListEntry {
  /**
   * <p>The Amazon Resource Name (ARN) of the task.</p>
   */
  TaskArn?: string;

  /**
   * <p>The status of the task.</p>
   */
  Status?: TaskStatus | string;

  /**
   * <p>The name of the task.</p>
   */
  Name?: string;
}

export namespace TaskListEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaskListEntry): any => ({
    ...obj,
  });
}

/**
 * <p>ListTasksResponse</p>
 */
export interface ListTasksResponse {
  /**
   * <p>A list of all the tasks that are returned.</p>
   */
  Tasks?: TaskListEntry[];

  /**
   * <p>An opaque string that indicates the position at which to begin returning the next list
   *       of tasks.</p>
   */
  NextToken?: string;
}

export namespace ListTasksResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTasksResponse): any => ({
    ...obj,
  });
}

/**
 * <p>StartTaskExecutionRequest</p>
 */
export interface StartTaskExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the task to start.</p>
   */
  TaskArn: string | undefined;

  /**
   * <p>Represents the options that are available to control the behavior of a
   *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>
   *       operation. Behavior includes preserving metadata such as user
   *       ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination,
   *       data integrity verification, and so on.</p>
   *          <p>A task has a set of default options associated with it. If you don't specify an option
   *       in <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>,
   *       the default value is used. You can override the
   *       defaults options on each task execution by specifying an overriding <code>Options</code> value
   *       to <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>.</p>
   */
  OverrideOptions?: Options;

  /**
   * <p>A list of filter rules that determines which files to include when running a task. The
   *       pattern should contain a single filter string that consists of the patterns to include. The
   *       patterns are delimited by "|" (that is, a pipe). For example: <code>"/folder1|/folder2"</code>
   *          </p>
   *
   *          <p>
   *     </p>
   */
  Includes?: FilterRule[];

  /**
   * <p>A list of filter rules that determines which files to exclude from a task. The list
   *       should contain a single filter string that consists of the patterns to exclude. The
   *       patterns are delimited by "|" (that is, a pipe), for example,
   *       <code>"/folder1|/folder2"</code>. </p>
   */
  Excludes?: FilterRule[];
}

export namespace StartTaskExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartTaskExecutionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>StartTaskExecutionResponse</p>
 */
export interface StartTaskExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the specific task execution that was
   *       started.</p>
   */
  TaskExecutionArn?: string;
}

export namespace StartTaskExecutionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartTaskExecutionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>TagResourceRequest</p>
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to apply the tag to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to apply.</p>
   */
  Tags: TagListEntry[] | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>UntagResourceRequest</p>
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to remove the tag from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys in the key-value pair in the tag to remove.</p>
   */
  Keys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>UpdateAgentRequest</p>
 */
export interface UpdateAgentRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the agent to update.</p>
   */
  AgentArn: string | undefined;

  /**
   * <p>The name that you want to use to configure the agent.</p>
   */
  Name?: string;
}

export namespace UpdateAgentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAgentRequest): any => ({
    ...obj,
  });
}

export interface UpdateAgentResponse {}

export namespace UpdateAgentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAgentResponse): any => ({
    ...obj,
  });
}

export interface UpdateLocationNfsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the NFS location to update.</p>
   */
  LocationArn: string | undefined;

  /**
   * <p>The subdirectory in the NFS file system that is used to read data from the NFS source
   *       location or write data to the NFS destination. The NFS path should be a path that's
   *       exported by the NFS server, or a subdirectory of that path. The path should be such that it
   *       can be mounted by other NFS clients in your network.</p>
   *
   *          <p>To see all the paths exported by your NFS server, run "<code>showmount -e
   *         nfs-server-name</code>" from an NFS client that has access to your server. You can specify
   *         any directory that appears in the results, and any subdirectory of that directory. Ensure that
   *         the NFS export is accessible without Kerberos authentication. </p>
   *          <p>To transfer all the data in the folder that you specified, DataSync must have
   *       permissions to read all the data. To ensure this, either configure the NFS export with
   *         <code>no_root_squash</code>, or ensure that the files you want DataSync to
   *       access have permissions that allow read access for all users. Doing either option enables the
   *       agent to read the files. For the agent to access directories, you must additionally enable all
   *       execute access.</p>
   *          <p>If you are copying data to or from your Snowcone device, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html#nfs-on-snowcone">NFS Server on Snowcone</a> for more information.</p>
   *
   *          <p>For information about NFS export configuration, see 18.7. The /etc/exports
   *       Configuration File in the Red Hat Enterprise Linux documentation.</p>
   */
  Subdirectory?: string;

  /**
   * <p>A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS)
   *       location.</p>
   */
  OnPremConfig?: OnPremConfig;

  /**
   * <p>Represents the mount options that are available for DataSync to access an NFS
   *       location.</p>
   */
  MountOptions?: NfsMountOptions;
}

export namespace UpdateLocationNfsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateLocationNfsRequest): any => ({
    ...obj,
  });
}

export interface UpdateLocationNfsResponse {}

export namespace UpdateLocationNfsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateLocationNfsResponse): any => ({
    ...obj,
  });
}

export interface UpdateLocationObjectStorageRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the self-managed object storage server location to be updated.</p>
   */
  LocationArn: string | undefined;

  /**
   * <p>The port that your self-managed object storage server accepts inbound network traffic on.
   *       The server port is set by default to TCP 80 (HTTP) or TCP 443 (HTTPS). You can
   *       specify a custom port if your self-managed object storage server requires one.</p>
   */
  ServerPort?: number;

  /**
   * <p>The protocol that the object storage server uses to communicate. Valid values are
   *         <code>HTTP</code> or <code>HTTPS</code>.</p>
   */
  ServerProtocol?: ObjectStorageServerProtocol | string;

  /**
   * <p>The subdirectory in the self-managed object storage server that is used
   *       to read data from.</p>
   */
  Subdirectory?: string;

  /**
   * <p>Optional. The access key is used if credentials are required to access the self-managed
   *       object storage server. If your object storage requires a user name and password to
   *       authenticate, use <code>AccessKey</code> and <code>SecretKey</code> to provide the user name
   *       and password, respectively.</p>
   */
  AccessKey?: string;

  /**
   * <p>Optional. The secret key is used if credentials are required to access the self-managed
   *       object storage server. If your object storage requires a user name and password to
   *       authenticate, use <code>AccessKey</code> and <code>SecretKey</code> to provide the user name
   *       and password, respectively.</p>
   */
  SecretKey?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the agents associated with the
   *       self-managed object storage server location.</p>
   */
  AgentArns?: string[];
}

export namespace UpdateLocationObjectStorageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateLocationObjectStorageRequest): any => ({
    ...obj,
    ...(obj.SecretKey && { SecretKey: SENSITIVE_STRING }),
  });
}

export interface UpdateLocationObjectStorageResponse {}

export namespace UpdateLocationObjectStorageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateLocationObjectStorageResponse): any => ({
    ...obj,
  });
}

export interface UpdateLocationSmbRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the SMB location to update.</p>
   */
  LocationArn: string | undefined;

  /**
   * <p>The subdirectory in the SMB file system that is used to read data from the SMB source
   *       location or write data to the SMB destination. The SMB path should be a path that's
   *       exported by the SMB server, or a subdirectory of that path. The path should be such that it
   *       can be mounted by other SMB clients in your network.</p>
   *          <note>
   *             <p>
   *                <code>Subdirectory</code> must be specified with forward slashes. For example,
   *       <code>/path/to/folder</code>.</p>
   *          </note>
   *
   *          <p>To transfer all the data in the folder that you specified, DataSync must have
   *       permissions to mount the SMB share and to access all the data in that share. To ensure this,
   *       do either of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Ensure that the user/password specified belongs to the user who can mount the share
   *           and who has the appropriate permissions for all of the files and directories that you want
   *           DataSync to access.</p>
   *             </li>
   *             <li>
   *                <p>Use credentials of a member of the Backup Operators group to mount the share. </p>
   *             </li>
   *          </ul>
   *          <p>Doing either of these options enables the agent to access the data. For the agent to
   *       access directories, you must also enable all execute access.</p>
   */
  Subdirectory?: string;

  /**
   * <p>The user who can mount the share has the permissions to access files and folders in the
   *       SMB share.</p>
   */
  User?: string;

  /**
   * <p>The name of the Windows domain that the SMB server belongs to.</p>
   */
  Domain?: string;

  /**
   * <p>The password of the user who can mount the share has the permissions to access files and
   *       folders in the SMB share.</p>
   */
  Password?: string;

  /**
   * <p>The Amazon Resource Names (ARNs) of agents to use for a Simple Message Block (SMB)
   *       location.</p>
   */
  AgentArns?: string[];

  /**
   * <p>Represents the mount options that are available for DataSync to access an SMB
   *       location.</p>
   */
  MountOptions?: SmbMountOptions;
}

export namespace UpdateLocationSmbRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateLocationSmbRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

export interface UpdateLocationSmbResponse {}

export namespace UpdateLocationSmbResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateLocationSmbResponse): any => ({
    ...obj,
  });
}

/**
 * <p>UpdateTaskResponse</p>
 */
export interface UpdateTaskRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource name of the task to update.</p>
   */
  TaskArn: string | undefined;

  /**
   * <p>Represents the options that are available to control the behavior of a
   *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>
   *       operation. Behavior includes preserving metadata such as user
   *       ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination,
   *       data integrity verification, and so on.</p>
   *          <p>A task has a set of default options associated with it. If you don't specify an option
   *       in <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>,
   *       the default value is used. You can override the
   *       defaults options on each task execution by specifying an overriding <code>Options</code> value
   *       to <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>.</p>
   */
  Options?: Options;

  /**
   * <p>A list of filter rules that determines which files to exclude from a task. The list should
   *       contain a single filter string that consists of the patterns to exclude. The patterns are
   *       delimited by "|" (that is, a pipe), for example: <code>"/folder1|/folder2"</code>
   *          </p>
   *          <p>
   *     </p>
   */
  Excludes?: FilterRule[];

  /**
   * <p>Specifies a schedule used to periodically transfer files from a source to a destination
   *       location. You can configure your task to execute hourly, daily, weekly or on specific days of
   *       the week. You control when in the day or hour you want the task to execute. The time you
   *       specify is UTC time. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/task-scheduling.html">Scheduling your task</a>.</p>
   */
  Schedule?: TaskSchedule;

  /**
   * <p>The name of the task to update.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource name of the CloudWatch
   *       LogGroup.</p>
   */
  CloudWatchLogGroupArn?: string;

  /**
   * <p>A list of filter rules that determines which files to include when running a task. The
   *       pattern should contain a single filter string that consists of the patterns to include. The
   *       patterns are delimited by "|" (that is, a pipe). For example:
   *       <code>"/folder1|/folder2</code>"</p>
   */
  Includes?: FilterRule[];
}

export namespace UpdateTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTaskRequest): any => ({
    ...obj,
  });
}

export interface UpdateTaskResponse {}

export namespace UpdateTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTaskResponse): any => ({
    ...obj,
  });
}

export interface UpdateTaskExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the specific task execution that is being updated. </p>
   */
  TaskExecutionArn: string | undefined;

  /**
   * <p>Represents the options that are available to control the behavior of a
   *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>
   *       operation. Behavior includes preserving metadata such as user
   *       ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination,
   *       data integrity verification, and so on.</p>
   *          <p>A task has a set of default options associated with it. If you don't specify an option
   *       in <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>,
   *       the default value is used. You can override the
   *       defaults options on each task execution by specifying an overriding <code>Options</code> value
   *       to <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>.</p>
   */
  Options: Options | undefined;
}

export namespace UpdateTaskExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTaskExecutionRequest): any => ({
    ...obj,
  });
}

export interface UpdateTaskExecutionResponse {}

export namespace UpdateTaskExecutionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTaskExecutionResponse): any => ({
    ...obj,
  });
}
