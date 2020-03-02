import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Represents a single entry in a list of agents. <code>AgentListEntry</code> returns an
 *       array that contains a list of agents when the <a>ListAgents</a> operation is
 *       called.</p>
 */
export interface AgentListEntry {
  __type?: "AgentListEntry";
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
  export function isa(o: any): o is AgentListEntry {
    return __isa(o, "AgentListEntry");
  }
}

export enum AgentStatus {
  OFFLINE = "OFFLINE",
  ONLINE = "ONLINE"
}

export enum Atime {
  BEST_EFFORT = "BEST_EFFORT",
  NONE = "NONE"
}

/**
 * <p>CancelTaskExecutionRequest</p>
 */
export interface CancelTaskExecutionRequest {
  __type?: "CancelTaskExecutionRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the task execution to cancel.</p>
   */
  TaskExecutionArn: string | undefined;
}

export namespace CancelTaskExecutionRequest {
  export function isa(o: any): o is CancelTaskExecutionRequest {
    return __isa(o, "CancelTaskExecutionRequest");
  }
}

export interface CancelTaskExecutionResponse {
  __type?: "CancelTaskExecutionResponse";
}

export namespace CancelTaskExecutionResponse {
  export function isa(o: any): o is CancelTaskExecutionResponse {
    return __isa(o, "CancelTaskExecutionResponse");
  }
}

/**
 * <p>CreateAgentRequest</p>
 */
export interface CreateAgentRequest {
  __type?: "CreateAgentRequest";
  /**
   * <p>Your agent activation key. You can get the activation key either by sending an HTTP GET
   *       request with redirects that enable you to get the agent IP address (port 80). Alternatively,
   *       you can get it from the AWS DataSync console.</p>
   *          <p>The redirect URL returned in the response provides you the activation key for your
   *       agent in the query string parameter <code>activationKey</code>. It might also include other
   *       activation-related parameters; however, these are merely defaults. The arguments you pass to
   *       this API call determine the actual configuration of your agent.</p>
   *
   *
   *          <p>For more information, see Activating an Agent in the <i>AWS DataSync
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
   * <p>The ARNs of the security groups used to protect your data transfer task subnets. See <a>CreateAgentRequest$SubnetArns</a>.</p>
   */
  SecurityGroupArns?: Array<string>;

  /**
   * <p>The Amazon Resource Names (ARNs) of the subnets in which DataSync will create elastic
   *       network interfaces for each data transfer task. The agent that runs a task must be private.
   *       When you start a task that is associated with an agent created in a VPC, or one that has
   *       access to an IP address in a VPC, then the task is also private. In this case, DataSync
   *       creates four network interfaces for each task in your subnet. For a data transfer to work, the
   *       agent must be able to route to all these four network interfaces.</p>
   */
  SubnetArns?: Array<string>;

  /**
   * <p>The key-value pair that represents the tag that you want to associate with the agent.
   *       The value can be an empty string. This value helps you manage, filter, and search for your
   *       agents.</p>
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable in
   *         UTF-8 format, and the following special characters: + - = . _ : / @. </p>
   *          </note>
   */
  Tags?: Array<TagListEntry>;

  /**
   * <p>The ID of the VPC (Virtual Private Cloud) endpoint that the agent has access to. This is
   *       the client-side VPC endpoint, also called a PrivateLink. If you don't have a PrivateLink VPC
   *       endpoint, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-service.html#create-endpoint-service">Creating a VPC Endpoint Service Configuration</a> in the AWS VPC User Guide.</p>
   *          <p>VPC endpoint ID looks like this: <code>vpce-01234d5aff67890e1</code>.</p>
   */
  VpcEndpointId?: string;
}

export namespace CreateAgentRequest {
  export function isa(o: any): o is CreateAgentRequest {
    return __isa(o, "CreateAgentRequest");
  }
}

/**
 * <p>CreateAgentResponse</p>
 */
export interface CreateAgentResponse {
  __type?: "CreateAgentResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the agent. Use the <code>ListAgents</code> operation
   *       to return a list of agents for your account and AWS Region.</p>
   */
  AgentArn?: string;
}

export namespace CreateAgentResponse {
  export function isa(o: any): o is CreateAgentResponse {
    return __isa(o, "CreateAgentResponse");
  }
}

/**
 * <p>CreateLocationEfsRequest</p>
 */
export interface CreateLocationEfsRequest {
  __type?: "CreateLocationEfsRequest";
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
   * <p>The Amazon Resource Name (ARN) for the Amazon EFS file system.</p>
   */
  EfsFilesystemArn: string | undefined;

  /**
   * <p>A subdirectory in the location’s path. This subdirectory in the EFS file system is used
   *       to read data from the EFS source location or write data to the EFS destination. By default,
   *       AWS DataSync uses the root directory.</p>
   *          <note>
   *             <p>
   *                <code>Subdirectory</code> must be specified with forward slashes. For example
   *       <code>/path/to/folder</code>.</p>
   *          </note>
   */
  Subdirectory?: string;

  /**
   * <p>The key-value pair that represents a tag that you want to add to the resource. The
   *       value can be an empty string. This value helps you manage, filter, and search for your
   *       resources. We recommend that you create a name tag for your location.</p>
   */
  Tags?: Array<TagListEntry>;
}

export namespace CreateLocationEfsRequest {
  export function isa(o: any): o is CreateLocationEfsRequest {
    return __isa(o, "CreateLocationEfsRequest");
  }
}

/**
 * <p>CreateLocationEfs</p>
 */
export interface CreateLocationEfsResponse {
  __type?: "CreateLocationEfsResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon EFS file system location that is
   *       created.</p>
   */
  LocationArn?: string;
}

export namespace CreateLocationEfsResponse {
  export function isa(o: any): o is CreateLocationEfsResponse {
    return __isa(o, "CreateLocationEfsResponse");
  }
}

/**
 * <p>CreateLocationNfsRequest</p>
 */
export interface CreateLocationNfsRequest {
  __type?: "CreateLocationNfsRequest";
  /**
   * <p>The NFS mount options that DataSync can use to mount your NFS share.</p>
   */
  MountOptions?: NfsMountOptions;

  /**
   * <p>Contains a list of Amazon Resource Names (ARNs) of agents that are used to connect to
   *       an NFS server.</p>
   */
  OnPremConfig: OnPremConfig | undefined;

  /**
   * <p>The name of the NFS server. This value is the IP address or Domain Name Service (DNS)
   *       name of the NFS server. An agent that is installed on-premises uses this host name to mount
   *       the NFS server in a network. </p>
   *          <note>
   *             <p>This name must either be DNS-compliant or must be an IP version 4 (IPv4)
   *         address.</p>
   *          </note>
   */
  ServerHostname: string | undefined;

  /**
   * <p>The subdirectory in the NFS file system that is used to read data from the NFS source
   *       location or write data to the NFS destination. The NFS path should be a path that's
   *       exported by the NFS server, or a subdirectory of that path. The path should be such that it
   *       can be mounted by other NFS clients in your network. </p>
   *          <p>To see all the paths exported by your NFS server. run "<code>showmount -e
   *         nfs-server-name</code>" from an NFS client that has access to your server. You can specify
   *       any directory that appears in the results, and any subdirectory of that directory. Ensure that
   *       the NFS export is accessible without Kerberos authentication. </p>
   *          <p>To transfer all the data in the folder you specified, DataSync needs to have
   *       permissions to read all the data. To ensure this, either configure the NFS export with
   *         <code>no_root_squash,</code> or ensure that the permissions for all of the files that you
   *       want DataSync allow read access for all users. Doing either enables the agent to read the
   *       files. For the agent to access directories, you must additionally enable all execute
   *       access.</p>
   *
   *          <p>For information about NFS export configuration, see 18.7. The /etc/exports
   *       Configuration File in the Red Hat Enterprise Linux documentation.</p>
   */
  Subdirectory: string | undefined;

  /**
   * <p>The key-value pair that represents the tag that you want to add to the location. The
   *       value can be an empty string. We recommend using tags to name your resources.</p>
   */
  Tags?: Array<TagListEntry>;
}

export namespace CreateLocationNfsRequest {
  export function isa(o: any): o is CreateLocationNfsRequest {
    return __isa(o, "CreateLocationNfsRequest");
  }
}

/**
 * <p>CreateLocationNfsResponse</p>
 */
export interface CreateLocationNfsResponse {
  __type?: "CreateLocationNfsResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the source NFS file system location that is
   *       created.</p>
   */
  LocationArn?: string;
}

export namespace CreateLocationNfsResponse {
  export function isa(o: any): o is CreateLocationNfsResponse {
    return __isa(o, "CreateLocationNfsResponse");
  }
}

/**
 * <p>CreateLocationS3Request</p>
 */
export interface CreateLocationS3Request {
  __type?: "CreateLocationS3Request";
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 bucket.</p>
   */
  S3BucketArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role
   *       that is used to access an Amazon S3 bucket.</p>
   *
   *          <p>For detailed information about using such a role, see Creating a Location for
   *       Amazon S3 in the <i>AWS DataSync User Guide</i>.</p>
   */
  S3Config: S3Config | undefined;

  /**
   * <p>The Amazon S3 storage class that you want to store your files in when this location is
   *       used as a task destination. For more information about S3 storage classes, see <a href="https://aws.amazon.com/s3/storage-classes/">Amazon S3 Storage Classes</a> in the
   *         <i>Amazon Simple Storage Service Developer Guide</i>. Some storage classes
   *       have behaviors that can affect your S3 storage cost. For detailed information, see <a>using-storage-classes</a>.</p>
   */
  S3StorageClass?: S3StorageClass | string;

  /**
   * <p>A subdirectory in the Amazon S3 bucket. This subdirectory in Amazon S3 is used to read
   *       data from the S3 source location or write data to the S3 destination.</p>
   */
  Subdirectory?: string;

  /**
   * <p>The key-value pair that represents the tag that you want to add to the location. The
   *       value can be an empty string. We recommend using tags to name your resources.</p>
   */
  Tags?: Array<TagListEntry>;
}

export namespace CreateLocationS3Request {
  export function isa(o: any): o is CreateLocationS3Request {
    return __isa(o, "CreateLocationS3Request");
  }
}

/**
 * <p>CreateLocationS3Response</p>
 */
export interface CreateLocationS3Response {
  __type?: "CreateLocationS3Response";
  /**
   * <p>The Amazon Resource Name (ARN) of the source Amazon S3 bucket location that is
   *       created.</p>
   */
  LocationArn?: string;
}

export namespace CreateLocationS3Response {
  export function isa(o: any): o is CreateLocationS3Response {
    return __isa(o, "CreateLocationS3Response");
  }
}

/**
 * <p>CreateLocationSmbRequest</p>
 */
export interface CreateLocationSmbRequest {
  __type?: "CreateLocationSmbRequest";
  /**
   * <p>The Amazon Resource Names (ARNs) of agents to use for a Simple Message Block (SMB)
   *       location. </p>
   */
  AgentArns: Array<string> | undefined;

  /**
   * <p>The name of the Windows domain that the SMB server belongs to.</p>
   */
  Domain?: string;

  /**
   * <p>The mount options used by DataSync to access the SMB server.</p>
   */
  MountOptions?: SmbMountOptions;

  /**
   * <p>The password of the user who can mount the share, has the permissions to access files and
   *       folders in the SMB share.</p>
   */
  Password: string | undefined;

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
   * <p>The subdirectory in the SMB file system that is used to read data from the SMB source
   *       location or write data to the SMB destination. The SMB path should be a path that's
   *       exported by the SMB server, or a subdirectory of that path. The path should be such that it
   *       can be mounted by other SMB clients in your network.</p>
   *          <note>
   *             <p>
   *                <code>Subdirectory</code> must be specified with forward slashes. For example
   *       <code>/path/to/folder</code>.</p>
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
   * <p>The key-value pair that represents the tag that you want to add to the location. The value
   *       can be an empty string. We recommend using tags to name your resources.</p>
   */
  Tags?: Array<TagListEntry>;

  /**
   * <p>The user who can mount the share, has the permissions to access files and folders in the
   *       SMB share.</p>
   */
  User: string | undefined;
}

export namespace CreateLocationSmbRequest {
  export function isa(o: any): o is CreateLocationSmbRequest {
    return __isa(o, "CreateLocationSmbRequest");
  }
}

/**
 * <p>CreateLocationSmbResponse</p>
 */
export interface CreateLocationSmbResponse {
  __type?: "CreateLocationSmbResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the source SMB file system location that is
   *       created.</p>
   */
  LocationArn?: string;
}

export namespace CreateLocationSmbResponse {
  export function isa(o: any): o is CreateLocationSmbResponse {
    return __isa(o, "CreateLocationSmbResponse");
  }
}

/**
 * <p>CreateTaskRequest</p>
 */
export interface CreateTaskRequest {
  __type?: "CreateTaskRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that is used to
   *       monitor and log events in the task. </p>
   *
   *          <p>For more information on these groups, see Working with Log Groups and Log
   *       Streams in the <i>Amazon CloudWatch User Guide.</i>
   *          </p>
   *
   *
   *          <p>For more information about how to use CloudWatch Logs with DataSync, see
   *       Monitoring Your Task in the <i>AWS DataSync User Guide.</i>
   *          </p>
   */
  CloudWatchLogGroupArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an AWS storage resource's location. </p>
   */
  DestinationLocationArn: string | undefined;

  /**
   * <p>A list of filter rules that determines which files to exclude from a task. The list should
   *       contain a single filter string that consists of the patterns to exclude. The patterns are
   *       delimited by "|" (that is, a pipe), for example, <code>"/folder1|/folder2"</code>
   *          </p>
   *          <p>
   *     </p>
   */
  Excludes?: Array<FilterRule>;

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
   *         <code>OverrideOptions</code> before starting a the task execution. For more information, see
   *       the  operation. </p>
   */
  Options?: Options;

  /**
   * <p>Specifies a schedule used to periodically transfer files from a source to a destination
   *       location. The schedule should be specified in UTC time. For more information, see <a>task-scheduling</a>.</p>
   */
  Schedule?: TaskSchedule;

  /**
   * <p>The Amazon Resource Name (ARN) of the source location for the task.</p>
   */
  SourceLocationArn: string | undefined;

  /**
   * <p>The key-value pair that represents the tag that you want to add to the resource. The
   *       value can be an empty string. </p>
   */
  Tags?: Array<TagListEntry>;
}

export namespace CreateTaskRequest {
  export function isa(o: any): o is CreateTaskRequest {
    return __isa(o, "CreateTaskRequest");
  }
}

/**
 * <p>CreateTaskResponse</p>
 */
export interface CreateTaskResponse {
  __type?: "CreateTaskResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the task.</p>
   */
  TaskArn?: string;
}

export namespace CreateTaskResponse {
  export function isa(o: any): o is CreateTaskResponse {
    return __isa(o, "CreateTaskResponse");
  }
}

/**
 * <p>DeleteAgentRequest</p>
 */
export interface DeleteAgentRequest {
  __type?: "DeleteAgentRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the agent to delete. Use the <code>ListAgents</code>
   *       operation to return a list of agents for your account and AWS Region.</p>
   */
  AgentArn: string | undefined;
}

export namespace DeleteAgentRequest {
  export function isa(o: any): o is DeleteAgentRequest {
    return __isa(o, "DeleteAgentRequest");
  }
}

export interface DeleteAgentResponse {
  __type?: "DeleteAgentResponse";
}

export namespace DeleteAgentResponse {
  export function isa(o: any): o is DeleteAgentResponse {
    return __isa(o, "DeleteAgentResponse");
  }
}

/**
 * <p>DeleteLocation</p>
 */
export interface DeleteLocationRequest {
  __type?: "DeleteLocationRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the location to delete.</p>
   */
  LocationArn: string | undefined;
}

export namespace DeleteLocationRequest {
  export function isa(o: any): o is DeleteLocationRequest {
    return __isa(o, "DeleteLocationRequest");
  }
}

export interface DeleteLocationResponse {
  __type?: "DeleteLocationResponse";
}

export namespace DeleteLocationResponse {
  export function isa(o: any): o is DeleteLocationResponse {
    return __isa(o, "DeleteLocationResponse");
  }
}

/**
 * <p>DeleteTask</p>
 */
export interface DeleteTaskRequest {
  __type?: "DeleteTaskRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the task to delete.</p>
   */
  TaskArn: string | undefined;
}

export namespace DeleteTaskRequest {
  export function isa(o: any): o is DeleteTaskRequest {
    return __isa(o, "DeleteTaskRequest");
  }
}

export interface DeleteTaskResponse {
  __type?: "DeleteTaskResponse";
}

export namespace DeleteTaskResponse {
  export function isa(o: any): o is DeleteTaskResponse {
    return __isa(o, "DeleteTaskResponse");
  }
}

/**
 * <p>DescribeAgent</p>
 */
export interface DescribeAgentRequest {
  __type?: "DescribeAgentRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the agent to describe.</p>
   */
  AgentArn: string | undefined;
}

export namespace DescribeAgentRequest {
  export function isa(o: any): o is DescribeAgentRequest {
    return __isa(o, "DescribeAgentRequest");
  }
}

/**
 * <p>DescribeAgentResponse</p>
 */
export interface DescribeAgentResponse {
  __type?: "DescribeAgentResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the agent.</p>
   */
  AgentArn?: string;

  /**
   * <p>The time that the agent was activated (that is, created in your account).</p>
   */
  CreationTime?: Date;

  /**
   * <p>The type of endpoint that your agent is connected to. If the endpoint is a VPC endpoint,
   *       the agent is not accessible over the public Internet. </p>
   */
  EndpointType?: EndpointType | string;

  /**
   * <p>The time that the agent last connected to DataSyc.</p>
   */
  LastConnectionTime?: Date;

  /**
   * <p>The name of the agent.</p>
   */
  Name?: string;

  /**
   * <p>The subnet and the security group that DataSync used to access a VPC endpoint.</p>
   */
  PrivateLinkConfig?: PrivateLinkConfig;

  /**
   * <p>The status of the agent. If the status is ONLINE, then the agent is configured properly
   *       and is available to use. The Running status is the normal running status for an agent. If the
   *       status is OFFLINE, the agent's VM is turned off or the agent is in an unhealthy state. When
   *       the issue that caused the unhealthy state is resolved, the agent returns to ONLINE
   *       status.</p>
   */
  Status?: AgentStatus | string;
}

export namespace DescribeAgentResponse {
  export function isa(o: any): o is DescribeAgentResponse {
    return __isa(o, "DescribeAgentResponse");
  }
}

/**
 * <p>DescribeLocationEfsRequest</p>
 */
export interface DescribeLocationEfsRequest {
  __type?: "DescribeLocationEfsRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the EFS location to describe.</p>
   */
  LocationArn: string | undefined;
}

export namespace DescribeLocationEfsRequest {
  export function isa(o: any): o is DescribeLocationEfsRequest {
    return __isa(o, "DescribeLocationEfsRequest");
  }
}

/**
 * <p>DescribeLocationEfsResponse</p>
 */
export interface DescribeLocationEfsResponse {
  __type?: "DescribeLocationEfsResponse";
  /**
   * <p>The time that the EFS location was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The subnet and the security group that DataSync uses to access target EFS file system.
   *       The subnet must have at least one mount target for that file system. The security group that
   *       you provide needs to be able to communicate with the security group on the mount target in the
   *       subnet specified. </p>
   */
  Ec2Config?: Ec2Config;

  /**
   * <p>The Amazon resource Name (ARN) of the EFS location that was described.</p>
   */
  LocationArn?: string;

  /**
   * <p>The URL of the EFS location that was described.</p>
   */
  LocationUri?: string;
}

export namespace DescribeLocationEfsResponse {
  export function isa(o: any): o is DescribeLocationEfsResponse {
    return __isa(o, "DescribeLocationEfsResponse");
  }
}

/**
 * <p>DescribeLocationNfsRequest</p>
 */
export interface DescribeLocationNfsRequest {
  __type?: "DescribeLocationNfsRequest";
  /**
   * <p>The Amazon resource Name (ARN) of the NFS location to describe.</p>
   */
  LocationArn: string | undefined;
}

export namespace DescribeLocationNfsRequest {
  export function isa(o: any): o is DescribeLocationNfsRequest {
    return __isa(o, "DescribeLocationNfsRequest");
  }
}

/**
 * <p>DescribeLocationNfsResponse</p>
 */
export interface DescribeLocationNfsResponse {
  __type?: "DescribeLocationNfsResponse";
  /**
   * <p>The time that the NFS location was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The Amazon resource Name (ARN) of the NFS location that was described.</p>
   */
  LocationArn?: string;

  /**
   * <p>The URL of the source NFS location that was described.</p>
   */
  LocationUri?: string;

  /**
   * <p>The NFS mount options that DataSync used to mount your NFS share.</p>
   */
  MountOptions?: NfsMountOptions;

  /**
   * <p>A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS)
   *       location.</p>
   */
  OnPremConfig?: OnPremConfig;
}

export namespace DescribeLocationNfsResponse {
  export function isa(o: any): o is DescribeLocationNfsResponse {
    return __isa(o, "DescribeLocationNfsResponse");
  }
}

/**
 * <p>DescribeLocationS3Request</p>
 */
export interface DescribeLocationS3Request {
  __type?: "DescribeLocationS3Request";
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 bucket location to describe.</p>
   */
  LocationArn: string | undefined;
}

export namespace DescribeLocationS3Request {
  export function isa(o: any): o is DescribeLocationS3Request {
    return __isa(o, "DescribeLocationS3Request");
  }
}

/**
 * <p>DescribeLocationS3Response</p>
 */
export interface DescribeLocationS3Response {
  __type?: "DescribeLocationS3Response";
  /**
   * <p>The time that the Amazon S3 bucket location was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 bucket location.</p>
   */
  LocationArn?: string;

  /**
   * <p>The URL of the Amazon S3 location that was described.</p>
   */
  LocationUri?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role
   *       that is used to access an Amazon S3 bucket.</p>
   *
   *          <p>For detailed information about using such a role, see Creating a Location for
   *       Amazon S3 in the <i>AWS DataSync User Guide</i>.</p>
   */
  S3Config?: S3Config;

  /**
   * <p>The Amazon S3 storage class that you chose to store your files in when this location is
   *       used as a task destination. For more information about S3 storage classes, see <a href="https://aws.amazon.com/s3/storage-classes/">Amazon S3 Storage Classes</a> in the
   *         <i>Amazon Simple Storage Service Developer Guide</i>. Some storage classes
   *       have behaviors that can affect your S3 storage cost. For detailed information, see <a>using-storage-classes</a>.</p>
   */
  S3StorageClass?: S3StorageClass | string;
}

export namespace DescribeLocationS3Response {
  export function isa(o: any): o is DescribeLocationS3Response {
    return __isa(o, "DescribeLocationS3Response");
  }
}

/**
 * <p>DescribeLocationSmbRequest</p>
 */
export interface DescribeLocationSmbRequest {
  __type?: "DescribeLocationSmbRequest";
  /**
   * <p>The Amazon resource Name (ARN) of the SMB location to describe.</p>
   */
  LocationArn: string | undefined;
}

export namespace DescribeLocationSmbRequest {
  export function isa(o: any): o is DescribeLocationSmbRequest {
    return __isa(o, "DescribeLocationSmbRequest");
  }
}

/**
 * <p>DescribeLocationSmbResponse</p>
 */
export interface DescribeLocationSmbResponse {
  __type?: "DescribeLocationSmbResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the source SMB file system location that is
   *       created.</p>
   */
  AgentArns?: Array<string>;

  /**
   * <p>The time that the SMB location was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The name of the Windows domain that the SMB server belongs to.</p>
   */
  Domain?: string;

  /**
   * <p>The Amazon resource Name (ARN) of the SMB location that was described.</p>
   */
  LocationArn?: string;

  /**
   * <p>The URL of the source SBM location that was described.</p>
   */
  LocationUri?: string;

  /**
   * <p>The mount options that are available for DataSync to use to access an SMB location.</p>
   */
  MountOptions?: SmbMountOptions;

  /**
   * <p>The user who can mount the share, has the permissions to access files and folders in the
   *       SMB share.</p>
   */
  User?: string;
}

export namespace DescribeLocationSmbResponse {
  export function isa(o: any): o is DescribeLocationSmbResponse {
    return __isa(o, "DescribeLocationSmbResponse");
  }
}

/**
 * <p>DescribeTaskExecutionRequest</p>
 */
export interface DescribeTaskExecutionRequest {
  __type?: "DescribeTaskExecutionRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the task that is being executed.</p>
   */
  TaskExecutionArn: string | undefined;
}

export namespace DescribeTaskExecutionRequest {
  export function isa(o: any): o is DescribeTaskExecutionRequest {
    return __isa(o, "DescribeTaskExecutionRequest");
  }
}

/**
 * <p>DescribeTaskExecutionResponse</p>
 */
export interface DescribeTaskExecutionResponse {
  __type?: "DescribeTaskExecutionResponse";
  /**
   * <p>The physical number of bytes transferred over the network.</p>
   */
  BytesTransferred?: number;

  /**
   * <p>The number of logical bytes written to the destination AWS storage resource.</p>
   */
  BytesWritten?: number;

  /**
   * <p>The estimated physical number of bytes that is to be transferred over the
   *       network.</p>
   */
  EstimatedBytesToTransfer?: number;

  /**
   * <p>The expected number of files that is to be transferred over the network. This value is
   *       calculated during the PREPARING phase, before the TRANSFERRING phase. This value is the
   *       expected number of files to be transferred. It's calculated based on comparing the
   *       content of the source and destination locations and finding the delta that needs to be
   *       transferred. </p>
   */
  EstimatedFilesToTransfer?: number;

  /**
   * <p>A list of filter rules that determines which files to exclude from a task. The list should
   *       contain a single filter string that consists of the patterns to exclude. The patterns are
   *       delimited by "|" (that is, a pipe), for example: <code>"/folder1|/folder2"</code>
   *          </p>
   *          <p>
   *     </p>
   */
  Excludes?: Array<FilterRule>;

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
   * <p>A list of filter rules that determines which files to include when running a task. The
   *       list should contain a single filter string that consists of the patterns to include. The
   *       patterns are delimited by "|" (that is, a pipe), for example: <code>"/folder1|/folder2"</code>
   *          </p>
   *          <p>
   *     </p>
   */
  Includes?: Array<FilterRule>;

  /**
   * <p>Represents the options that are available to control the behavior of a <a>StartTaskExecution</a> operation. Behavior includes preserving metadata such as user
   *       ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination,
   *       data integrity verification, and so on.</p>
   *          <p>A task has a set of default options associated with it. If you don't specify an option
   *       in <a>StartTaskExecution</a>, the default value is used. You can override the
   *       defaults options on each task execution by specifying an overriding <code>Options</code> value
   *       to <a>StartTaskExecution</a>.</p>
   */
  Options?: Options;

  /**
   * <p>The result of the task execution.</p>
   */
  Result?: TaskExecutionResultDetail;

  /**
   * <p>The time that the task execution was started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The status of the task execution. </p>
   *
   *
   *          <p>For detailed information about task execution statuses, see Understanding
   *       Task Statuses in the <i>AWS DataSync User Guide.</i>
   *          </p>
   */
  Status?: TaskExecutionStatus | string;

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
}

export namespace DescribeTaskExecutionResponse {
  export function isa(o: any): o is DescribeTaskExecutionResponse {
    return __isa(o, "DescribeTaskExecutionResponse");
  }
}

/**
 * <p>DescribeTaskRequest</p>
 */
export interface DescribeTaskRequest {
  __type?: "DescribeTaskRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the task to describe.</p>
   */
  TaskArn: string | undefined;
}

export namespace DescribeTaskRequest {
  export function isa(o: any): o is DescribeTaskRequest {
    return __isa(o, "DescribeTaskRequest");
  }
}

/**
 * <p>DescribeTaskResponse</p>
 */
export interface DescribeTaskResponse {
  __type?: "DescribeTaskResponse";
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
   * <p>The time that the task was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the task execution that is syncing files.</p>
   */
  CurrentTaskExecutionArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS storage resource's location.</p>
   */
  DestinationLocationArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination ENIs (Elastic Network Interface) that
   *       was created for your subnet.</p>
   */
  DestinationNetworkInterfaceArns?: Array<string>;

  /**
   * <p>Errors that AWS DataSync encountered during execution of the task. You can use this
   *       error code to help troubleshoot issues.</p>
   */
  ErrorCode?: string;

  /**
   * <p>Detailed description of an error that was encountered during the task execution. You
   *       can use this information to help troubleshoot issues. </p>
   */
  ErrorDetail?: string;

  /**
   * <p>A list of filter rules that determines which files to exclude from a task. The list should
   *       contain a single filter string that consists of the patterns to exclude. The patterns are
   *       delimited by "|" (that is, a pipe), for example: <code>"/folder1|/folder2"</code>
   *          </p>
   *          <p>
   *     </p>
   */
  Excludes?: Array<FilterRule>;

  /**
   * <p>The name of the task that was described.</p>
   */
  Name?: string;

  /**
   * <p>The set of configuration options that control the behavior of a single execution of the
   *       task that occurs when you call <code>StartTaskExecution</code>. You can configure these
   *       options to preserve metadata such as user ID (UID) and group (GID), file permissions, data
   *       integrity verification, and so on.</p>
   *          <p>For each individual task execution, you can override these options by specifying the
   *       overriding <code>OverrideOptions</code> value to
   *       operation. </p>
   */
  Options?: Options;

  /**
   * <p>The schedule used to periodically transfer files from a source to a destination location.</p>
   */
  Schedule?: TaskSchedule;

  /**
   * <p>The Amazon Resource Name (ARN) of the source file system's location.</p>
   */
  SourceLocationArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source ENIs (Elastic Network Interface) that was
   *       created for your subnet.</p>
   */
  SourceNetworkInterfaceArns?: Array<string>;

  /**
   * <p>The status of the task that was described.</p>
   *
   *
   *          <p>For detailed information about task execution statuses, see Understanding
   *       Task Statuses in the <i>AWS DataSync User Guide.</i>
   *          </p>
   */
  Status?: TaskStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the task that was described.</p>
   */
  TaskArn?: string;
}

export namespace DescribeTaskResponse {
  export function isa(o: any): o is DescribeTaskResponse {
    return __isa(o, "DescribeTaskResponse");
  }
}

/**
 * <p>The subnet and the security group that DataSync uses to access target EFS file system.
 *       The subnet must have at least one mount target for that file system. The security group that
 *       you provide needs to be able to communicate with the security group on the mount target in the
 *       subnet specified. </p>
 */
export interface Ec2Config {
  __type?: "Ec2Config";
  /**
   * <p>The Amazon Resource Names (ARNs) of the security groups that are configured for the
   *       Amazon EC2 resource.</p>
   */
  SecurityGroupArns: Array<string> | undefined;

  /**
   * <p>The ARN of the subnet and the security group that DataSync uses to access the target
   *       EFS file system.</p>
   */
  SubnetArn: string | undefined;
}

export namespace Ec2Config {
  export function isa(o: any): o is Ec2Config {
    return __isa(o, "Ec2Config");
  }
}

export enum EndpointType {
  FIPS = "FIPS",
  PRIVATE_LINK = "PRIVATE_LINK",
  PUBLIC = "PUBLIC"
}

/**
 * <p>Specifies which files, folders and objects to include or exclude when transferring files
 *       from source to destination.</p>
 */
export interface FilterRule {
  __type?: "FilterRule";
  /**
   * <p>The type of filter rule to apply. AWS DataSync only supports the SIMPLE_PATTERN rule
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
  export function isa(o: any): o is FilterRule {
    return __isa(o, "FilterRule");
  }
}

export enum FilterType {
  SIMPLE_PATTERN = "SIMPLE_PATTERN"
}

export enum Gid {
  BOTH = "BOTH",
  INT_VALUE = "INT_VALUE",
  NAME = "NAME",
  NONE = "NONE"
}

/**
 * <p>This exception is thrown when an error occurs in the AWS DataSync service.</p>
 */
export interface InternalException extends __SmithyException, $MetadataBearer {
  name: "InternalException";
  $fault: "server";
  errorCode?: string;
  message?: string;
}

export namespace InternalException {
  export function isa(o: any): o is InternalException {
    return __isa(o, "InternalException");
  }
}

/**
 * <p>This exception is thrown when the client submits a malformed request.</p>
 */
export interface InvalidRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  errorCode?: string;
  message?: string;
}

export namespace InvalidRequestException {
  export function isa(o: any): o is InvalidRequestException {
    return __isa(o, "InvalidRequestException");
  }
}

/**
 * <p>ListAgentsRequest</p>
 */
export interface ListAgentsRequest {
  __type?: "ListAgentsRequest";
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
  export function isa(o: any): o is ListAgentsRequest {
    return __isa(o, "ListAgentsRequest");
  }
}

/**
 * <p>ListAgentsResponse</p>
 */
export interface ListAgentsResponse {
  __type?: "ListAgentsResponse";
  /**
   * <p>A list of agents in your account.</p>
   */
  Agents?: Array<AgentListEntry>;

  /**
   * <p>An opaque string that indicates the position at which to begin returning the next list
   *       of agents.</p>
   */
  NextToken?: string;
}

export namespace ListAgentsResponse {
  export function isa(o: any): o is ListAgentsResponse {
    return __isa(o, "ListAgentsResponse");
  }
}

/**
 * <p>ListLocationsRequest</p>
 */
export interface ListLocationsRequest {
  __type?: "ListLocationsRequest";
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

export namespace ListLocationsRequest {
  export function isa(o: any): o is ListLocationsRequest {
    return __isa(o, "ListLocationsRequest");
  }
}

/**
 * <p>ListLocationsResponse</p>
 */
export interface ListLocationsResponse {
  __type?: "ListLocationsResponse";
  /**
   * <p>An array that contains a list of locations.</p>
   */
  Locations?: Array<LocationListEntry>;

  /**
   * <p>An opaque string that indicates the position at which to begin returning the next list
   *       of locations.</p>
   */
  NextToken?: string;
}

export namespace ListLocationsResponse {
  export function isa(o: any): o is ListLocationsResponse {
    return __isa(o, "ListLocationsResponse");
  }
}

/**
 * <p>ListTagsForResourceRequest</p>
 */
export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
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
   * <p>The Amazon Resource Name (ARN) of the resource whose tags to list.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return __isa(o, "ListTagsForResourceRequest");
  }
}

/**
 * <p>ListTagsForResourceResponse</p>
 */
export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>An opaque string that indicates the position at which to begin returning the next list
   *       of resource tags.</p>
   */
  NextToken?: string;

  /**
   * <p>Array of resource tags.</p>
   */
  Tags?: Array<TagListEntry>;
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return __isa(o, "ListTagsForResourceResponse");
  }
}

/**
 * <p>ListTaskExecutions</p>
 */
export interface ListTaskExecutionsRequest {
  __type?: "ListTaskExecutionsRequest";
  /**
   * <p>The maximum number of executed tasks to list.</p>
   */
  MaxResults?: number;

  /**
   * <p>An opaque string that indicates the position at which to begin the next list of the
   *       executed tasks.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the task whose tasks you want to list.</p>
   */
  TaskArn?: string;
}

export namespace ListTaskExecutionsRequest {
  export function isa(o: any): o is ListTaskExecutionsRequest {
    return __isa(o, "ListTaskExecutionsRequest");
  }
}

/**
 * <p>ListTaskExecutionsResponse</p>
 */
export interface ListTaskExecutionsResponse {
  __type?: "ListTaskExecutionsResponse";
  /**
   * <p>An opaque string that indicates the position at which to begin returning the next list
   *       of executed tasks.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of executed tasks.</p>
   */
  TaskExecutions?: Array<TaskExecutionListEntry>;
}

export namespace ListTaskExecutionsResponse {
  export function isa(o: any): o is ListTaskExecutionsResponse {
    return __isa(o, "ListTaskExecutionsResponse");
  }
}

/**
 * <p>ListTasksRequest</p>
 */
export interface ListTasksRequest {
  __type?: "ListTasksRequest";
  /**
   * <p>The maximum number of tasks to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>An opaque string that indicates the position at which to begin the next list of
   *       tasks.</p>
   */
  NextToken?: string;
}

export namespace ListTasksRequest {
  export function isa(o: any): o is ListTasksRequest {
    return __isa(o, "ListTasksRequest");
  }
}

/**
 * <p>ListTasksResponse</p>
 */
export interface ListTasksResponse {
  __type?: "ListTasksResponse";
  /**
   * <p>An opaque string that indicates the position at which to begin returning the next list
   *       of tasks.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of all the tasks that are returned.</p>
   */
  Tasks?: Array<TaskListEntry>;
}

export namespace ListTasksResponse {
  export function isa(o: any): o is ListTasksResponse {
    return __isa(o, "ListTasksResponse");
  }
}

/**
 * <p>Represents a single entry in a list of locations. <code>LocationListEntry</code>
 *       returns an array that contains a list of locations when the <a>ListLocations</a>
 *       operation is called.</p>
 */
export interface LocationListEntry {
  __type?: "LocationListEntry";
  /**
   * <p>The Amazon Resource Name (ARN) of the location. For Network File System (NFS) or Amazon
   *       EFS, the location is the export path. For Amazon S3, the location is the prefix path that you
   *       want to mount and use as the root of the location.</p>
   */
  LocationArn?: string;

  /**
   * <p>Represents a list of URLs of a location. <code>LocationUri</code> returns an array that
   *       contains a list of locations when the <a>ListLocations</a> operation is
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
  export function isa(o: any): o is LocationListEntry {
    return __isa(o, "LocationListEntry");
  }
}

export enum Mtime {
  NONE = "NONE",
  PRESERVE = "PRESERVE"
}

/**
 * <p>Represents the mount options that are available for DataSync to access an NFS
 *       location.</p>
 */
export interface NfsMountOptions {
  __type?: "NfsMountOptions";
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
  export function isa(o: any): o is NfsMountOptions {
    return __isa(o, "NfsMountOptions");
  }
}

export enum NfsVersion {
  AUTOMATIC = "AUTOMATIC",
  NFS3 = "NFS3",
  NFS4_0 = "NFS4_0",
  NFS4_1 = "NFS4_1"
}

/**
 * <p>A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS)
 *       location.</p>
 */
export interface OnPremConfig {
  __type?: "OnPremConfig";
  /**
   * <p>ARNs)of the agents to use for an NFS location.</p>
   */
  AgentArns: Array<string> | undefined;
}

export namespace OnPremConfig {
  export function isa(o: any): o is OnPremConfig {
    return __isa(o, "OnPremConfig");
  }
}

/**
 * <p>Represents the options that are available to control the behavior of a <a>StartTaskExecution</a> operation. Behavior includes preserving metadata such as user
 *       ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination,
 *       data integrity verification, and so on.</p>
 *          <p>A task has a set of default options associated with it. If you don't specify an option
 *       in <a>StartTaskExecution</a>, the default value is used. You can override the
 *       defaults options on each task execution by specifying an overriding <code>Options</code> value
 *       to <a>StartTaskExecution</a>.</p>
 */
export interface Options {
  __type?: "Options";
  /**
   * <p>A file metadata value that shows the last time a file was accessed (that is, when the
   *       file was read or written to). If you set <code>Atime</code> to BEST_EFFORT, DataSync
   *       attempts to preserve the original <code>Atime</code> attribute on all source files (that is,
   *       the version before the PREPARING phase). However, <code>Atime</code>'s behavior is not
   *       fully standard across platforms, so AWS DataSync can only do this on a best-effort basis. </p>
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
   * <p>A value that limits the bandwidth used by AWS DataSync. For example, if you want
   *       AWS DataSync to use a maximum of 1 MB, set this value to <code>1048576</code>
   *         (<code>=1024*1024</code>).</p>
   */
  BytesPerSecond?: number;

  /**
   * <p>The group ID (GID) of the file's owners. </p>
   *          <p>Default value: INT_VALUE. This preserves the integer value of the ID.</p>
   *          <p>INT_VALUE: Preserve the integer value of user ID (UID) and GID (recommended).</p>
   *          <p>NONE: Ignore UID and GID. </p>
   */
  Gid?: Gid | string;

  /**
   * <p>A value that indicates the last time that a file was modified (that is, a file was
   *       written to) before the PREPARING phase. </p>
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
   * <p>A value that determines whether files at the destination should be overwritten or
   *       preserved when copying files. If set to <code>NEVER</code> a destination file will not be
   *       replaced by a source file, even if the destination file differs from the source file. If you modify files in the destination and you sync the files, you can use this value to
   *       protect against overwriting those changes. </p>
   *          <p>Some storage classes have specific behaviors that can affect your S3 storage cost. For detailed information, see <a>using-storage-classes</a> in the <i>AWS DataSync
   *         User Guide</i>.</p>
   */
  OverwriteMode?: OverwriteMode | string;

  /**
   * <p>A value that determines which users or groups can access a file for a specific purpose
   *       such as reading, writing, or execution of the file. </p>
   *          <p>Default value: PRESERVE.</p>
   *          <p>PRESERVE: Preserve POSIX-style permissions (recommended).</p>
   *          <p>NONE: Ignore permissions. </p>
   *          <note>
   *             <p>AWS DataSync can preserve extant permissions of a source location.</p>
   *          </note>
   */
  PosixPermissions?: PosixPermissions | string;

  /**
   * <p>A value that specifies whether files in the destination that don't exist in the source
   *       file system should be preserved. This option can affect your storage cost.
   *       If your task deletes objects, you might incur minimum storage duration charges for certain storage classes. For detailed
   *       information, see <a>using-storage-classes</a> in the <i>AWS DataSync User
   *         Guide</i>.</p>
   *          <p>Default value: PRESERVE.</p>
   *          <p>PRESERVE: Ignore such destination files (recommended). </p>
   *          <p>REMOVE: Delete destination files that aren’t present in the source.</p>
   */
  PreserveDeletedFiles?: PreserveDeletedFiles | string;

  /**
   * <p>A value that determines whether AWS DataSync should preserve the metadata of block
   *       and character devices in the source file system, and recreate the files with that device name
   *       and metadata on the destination.</p>
   *          <note>
   *             <p>AWS DataSync can't sync the actual contents of such devices, because they are
   *         nonterminal and don't return an end-of-file (EOF) marker.</p>
   *          </note>
   *          <p>Default value: NONE.</p>
   *          <p>NONE: Ignore special devices (recommended). </p>
   *          <p>PRESERVE: Preserve character and block device metadata. This option isn't currently
   *       supported for Amazon EFS. </p>
   */
  PreserveDevices?: PreserveDevices | string;

  /**
   * <p>A value that determines whether tasks should be queued before executing the tasks. If set
   *       to <code>ENABLED</code>, the tasks will be queued. The default is <code>ENABLED</code>.</p>
   *          <p>If you use the same agent to run multiple tasks you can enable the tasks to run in
   *       series. For more information see <a>queue-task-execution</a>.</p>
   */
  TaskQueueing?: TaskQueueing | string;

  /**
   * <p>The user ID (UID) of the file's owner. </p>
   *          <p>Default value: INT_VALUE. This preserves the integer value of the ID.</p>
   *          <p>INT_VALUE: Preserve the integer value of UID and group ID (GID)
   *       (recommended).</p>
   *          <p>NONE: Ignore UID and GID. </p>
   */
  Uid?: Uid | string;

  /**
   * <p>A value that determines whether a data integrity verification should be performed at
   *       the end of a task execution after all data and metadata have been transferred. </p>
   *          <p>Default value: POINT_IN_TIME_CONSISTENT.</p>
   *          <p>POINT_IN_TIME_CONSISTENT: Perform verification (recommended). </p>
   *          <p>ONLY_FILES_TRANSFERRED: Perform verification on only files that were transferred.</p>
   *          <p>NONE: Skip verification.</p>
   */
  VerifyMode?: VerifyMode | string;
}

export namespace Options {
  export function isa(o: any): o is Options {
    return __isa(o, "Options");
  }
}

export enum OverwriteMode {
  ALWAYS = "ALWAYS",
  NEVER = "NEVER"
}

export enum PhaseStatus {
  ERROR = "ERROR",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS"
}

export enum PosixPermissions {
  NONE = "NONE",
  PRESERVE = "PRESERVE"
}

export enum PreserveDeletedFiles {
  PRESERVE = "PRESERVE",
  REMOVE = "REMOVE"
}

export enum PreserveDevices {
  NONE = "NONE",
  PRESERVE = "PRESERVE"
}

/**
 * <p>The VPC endpoint, subnet and security group that an agent uses to access IP addresses in a
 *       VPC (Virtual Private Cloud).</p>
 */
export interface PrivateLinkConfig {
  __type?: "PrivateLinkConfig";
  /**
   * <p>The private endpoint that is configured for an agent that has access to IP addresses in a
   *         <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-service.html">PrivateLink</a>. An agent that is configured with this endpoint will not be accessible
   *       over the public Internet.</p>
   */
  PrivateLinkEndpoint?: string;

  /**
   * <p>The Amazon Resource Names (ARNs) of the security groups that are configured for the EC2
   *       resource that hosts an agent activated in a VPC or an agent that has access to a VPC
   *       endpoint.</p>
   */
  SecurityGroupArns?: Array<string>;

  /**
   * <p>The Amazon Resource Names (ARNs) of the subnets that are configured for an agent activated
   *       in a VPC or an agent that has access to a VPC endpoint.</p>
   */
  SubnetArns?: Array<string>;

  /**
   * <p>The ID of the VPC endpoint that is configured for an agent. An agent that is configured
   *       with a VPC endpoint will not be accessible over the public Internet.</p>
   */
  VpcEndpointId?: string;
}

export namespace PrivateLinkConfig {
  export function isa(o: any): o is PrivateLinkConfig {
    return __isa(o, "PrivateLinkConfig");
  }
}

/**
 * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role
 *       that is used to access an Amazon S3 bucket.</p>
 *
 *          <p>For detailed information about using such a role, see Creating a Location for
 *       Amazon S3 in the <i>AWS DataSync User Guide</i>.</p>
 */
export interface S3Config {
  __type?: "S3Config";
  /**
   * <p>The Amazon S3 bucket to access. This bucket is used as a parameter in the <a>CreateLocationS3</a> operation. </p>
   */
  BucketAccessRoleArn: string | undefined;
}

export namespace S3Config {
  export function isa(o: any): o is S3Config {
    return __isa(o, "S3Config");
  }
}

export enum S3StorageClass {
  DEEP_ARCHIVE = "DEEP_ARCHIVE",
  GLACIER = "GLACIER",
  INTELLIGENT_TIERING = "INTELLIGENT_TIERING",
  ONEZONE_IA = "ONEZONE_IA",
  STANDARD = "STANDARD",
  STANDARD_IA = "STANDARD_IA"
}

/**
 * <p>Represents the mount options that are available for DataSync to access an SMB
 *       location.</p>
 */
export interface SmbMountOptions {
  __type?: "SmbMountOptions";
  /**
   * <p>The specific SMB version that you want DataSync to use to mount your SMB share. If you
   *       don't specify a version, DataSync defaults to <code>AUTOMATIC</code>. That is, DataSync
   *       automatically selects a version based on negotiation with the SMB server.</p>
   */
  Version?: SmbVersion | string;
}

export namespace SmbMountOptions {
  export function isa(o: any): o is SmbMountOptions {
    return __isa(o, "SmbMountOptions");
  }
}

export enum SmbVersion {
  AUTOMATIC = "AUTOMATIC",
  SMB2 = "SMB2",
  SMB3 = "SMB3"
}

/**
 * <p>StartTaskExecutionRequest</p>
 */
export interface StartTaskExecutionRequest {
  __type?: "StartTaskExecutionRequest";
  /**
   * <p>A list of filter rules that determines which files to include when running a task. The
   *       pattern should contain a single filter string that consists of the patterns to include. The
   *       patterns are delimited by "|" (that is, a pipe). For example: <code>"/folder1|/folder2"</code>
   *          </p>
   *          <p>
   *     </p>
   */
  Includes?: Array<FilterRule>;

  /**
   * <p>Represents the options that are available to control the behavior of a <a>StartTaskExecution</a> operation. Behavior includes preserving metadata such as user
   *       ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination,
   *       data integrity verification, and so on.</p>
   *          <p>A task has a set of default options associated with it. If you don't specify an option
   *       in <a>StartTaskExecution</a>, the default value is used. You can override the
   *       defaults options on each task execution by specifying an overriding <code>Options</code> value
   *       to <a>StartTaskExecution</a>.</p>
   */
  OverrideOptions?: Options;

  /**
   * <p>The Amazon Resource Name (ARN) of the task to start.</p>
   */
  TaskArn: string | undefined;
}

export namespace StartTaskExecutionRequest {
  export function isa(o: any): o is StartTaskExecutionRequest {
    return __isa(o, "StartTaskExecutionRequest");
  }
}

/**
 * <p>StartTaskExecutionResponse</p>
 */
export interface StartTaskExecutionResponse {
  __type?: "StartTaskExecutionResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the specific task execution that was
   *       started.</p>
   */
  TaskExecutionArn?: string;
}

export namespace StartTaskExecutionResponse {
  export function isa(o: any): o is StartTaskExecutionResponse {
    return __isa(o, "StartTaskExecutionResponse");
  }
}

/**
 * <p>Represents a single entry in a list of AWS resource tags. <code>TagListEntry</code>
 *       returns an array that contains a list of tasks when the <a>ListTagsForResource</a>
 *       operation is called.</p>
 */
export interface TagListEntry {
  __type?: "TagListEntry";
  /**
   * <p>The key for an AWS resource tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value for an AWS resource tag.</p>
   */
  Value?: string;
}

export namespace TagListEntry {
  export function isa(o: any): o is TagListEntry {
    return __isa(o, "TagListEntry");
  }
}

/**
 * <p>TagResourceRequest</p>
 */
export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to apply the tag to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to apply.</p>
   */
  Tags: Array<TagListEntry> | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return __isa(o, "TagResourceRequest");
  }
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return __isa(o, "TagResourceResponse");
  }
}

/**
 * <p>Represents a single entry in a list of task executions.
 *         <code>TaskExecutionListEntry</code> returns an array that contains a list of specific
 *       invocations of a task when <a>ListTaskExecutions</a> operation is called.</p>
 */
export interface TaskExecutionListEntry {
  __type?: "TaskExecutionListEntry";
  /**
   * <p>The status of a task execution.</p>
   */
  Status?: TaskExecutionStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the task that was executed.</p>
   */
  TaskExecutionArn?: string;
}

export namespace TaskExecutionListEntry {
  export function isa(o: any): o is TaskExecutionListEntry {
    return __isa(o, "TaskExecutionListEntry");
  }
}

/**
 * <p>Describes the detailed result of a <code>TaskExecution</code> operation. This result
 *       includes the time in milliseconds spent in each phase, the status of the task execution, and
 *       the errors encountered.</p>
 */
export interface TaskExecutionResultDetail {
  __type?: "TaskExecutionResultDetail";
  /**
   * <p>Errors that AWS DataSync encountered during execution of the task. You can use this
   *       error code to help troubleshoot issues.</p>
   */
  ErrorCode?: string;

  /**
   * <p>Detailed description of an error that was encountered during the task execution. You
   *       can use this information to help troubleshoot issues. </p>
   */
  ErrorDetail?: string;

  /**
   * <p>The total time in milliseconds that AWS DataSync spent in the PREPARING phase.
   *     </p>
   */
  PrepareDuration?: number;

  /**
   * <p>The status of the PREPARING phase.</p>
   */
  PrepareStatus?: PhaseStatus | string;

  /**
   * <p>The total time in milliseconds that AWS DataSync took to transfer the file from the source to the destination location.</p>
   */
  TotalDuration?: number;

  /**
   * <p>The total time in milliseconds that AWS DataSync spent in the TRANSFERRING
   *       phase.</p>
   */
  TransferDuration?: number;

  /**
   * <p>The status of the TRANSFERRING Phase.</p>
   */
  TransferStatus?: PhaseStatus | string;

  /**
   * <p>The total time in milliseconds that AWS DataSync spent in the VERIFYING
   *       phase.</p>
   */
  VerifyDuration?: number;

  /**
   * <p>The status of the VERIFYING Phase.</p>
   */
  VerifyStatus?: PhaseStatus | string;
}

export namespace TaskExecutionResultDetail {
  export function isa(o: any): o is TaskExecutionResultDetail {
    return __isa(o, "TaskExecutionResultDetail");
  }
}

export enum TaskExecutionStatus {
  ERROR = "ERROR",
  LAUNCHING = "LAUNCHING",
  PREPARING = "PREPARING",
  QUEUED = "QUEUED",
  SUCCESS = "SUCCESS",
  TRANSFERRING = "TRANSFERRING",
  VERIFYING = "VERIFYING"
}

/**
 * <p>Represents a single entry in a list of tasks. <code>TaskListEntry</code> returns an
 *       array that contains a list of tasks when the <a>ListTasks</a> operation is called.
 *       A task includes the source and destination file systems to sync and the options to use for the
 *       tasks.</p>
 */
export interface TaskListEntry {
  __type?: "TaskListEntry";
  /**
   * <p>The name of the task.</p>
   */
  Name?: string;

  /**
   * <p>The status of the task.</p>
   */
  Status?: TaskStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the task.</p>
   */
  TaskArn?: string;
}

export namespace TaskListEntry {
  export function isa(o: any): o is TaskListEntry {
    return __isa(o, "TaskListEntry");
  }
}

export enum TaskQueueing {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

/**
 * <p>Specifies the schedule you want your task to use for repeated executions. For more
 *       information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html">Schedule Expressions for Rules</a>.</p>
 */
export interface TaskSchedule {
  __type?: "TaskSchedule";
  /**
   * <p>A cron expression that specifies when AWS DataSync initiates a scheduled transfer from a
   *       source to a destination location. </p>
   */
  ScheduleExpression: string | undefined;
}

export namespace TaskSchedule {
  export function isa(o: any): o is TaskSchedule {
    return __isa(o, "TaskSchedule");
  }
}

export enum TaskStatus {
  AVAILABLE = "AVAILABLE",
  CREATING = "CREATING",
  QUEUED = "QUEUED",
  RUNNING = "RUNNING",
  UNAVAILABLE = "UNAVAILABLE"
}

export enum Uid {
  BOTH = "BOTH",
  INT_VALUE = "INT_VALUE",
  NAME = "NAME",
  NONE = "NONE"
}

/**
 * <p>UntagResourceRequest</p>
 */
export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The keys in the key-value pair in the tag to remove.</p>
   */
  Keys: Array<string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource to remove the tag from.</p>
   */
  ResourceArn: string | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return __isa(o, "UntagResourceRequest");
  }
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export function isa(o: any): o is UntagResourceResponse {
    return __isa(o, "UntagResourceResponse");
  }
}

/**
 * <p>UpdateAgentRequest</p>
 */
export interface UpdateAgentRequest {
  __type?: "UpdateAgentRequest";
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
  export function isa(o: any): o is UpdateAgentRequest {
    return __isa(o, "UpdateAgentRequest");
  }
}

export interface UpdateAgentResponse {
  __type?: "UpdateAgentResponse";
}

export namespace UpdateAgentResponse {
  export function isa(o: any): o is UpdateAgentResponse {
    return __isa(o, "UpdateAgentResponse");
  }
}

/**
 * <p>UpdateTaskResponse</p>
 */
export interface UpdateTaskRequest {
  __type?: "UpdateTaskRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource name of the CloudWatch
   *       LogGroup.</p>
   */
  CloudWatchLogGroupArn?: string;

  /**
   * <p>A list of filter rules that determines which files to exclude from a task. The list should
   *       contain a single filter string that consists of the patterns to exclude. The patterns are
   *       delimited by "|" (that is, a pipe), for example: <code>"/folder1|/folder2"</code>
   *          </p>
   *          <p>
   *     </p>
   */
  Excludes?: Array<FilterRule>;

  /**
   * <p>The name of the task to update.</p>
   */
  Name?: string;

  /**
   * <p>Represents the options that are available to control the behavior of a <a>StartTaskExecution</a> operation. Behavior includes preserving metadata such as user
   *       ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination,
   *       data integrity verification, and so on.</p>
   *          <p>A task has a set of default options associated with it. If you don't specify an option
   *       in <a>StartTaskExecution</a>, the default value is used. You can override the
   *       defaults options on each task execution by specifying an overriding <code>Options</code> value
   *       to <a>StartTaskExecution</a>.</p>
   */
  Options?: Options;

  /**
   * <p>Specifies a schedule used to periodically transfer files from a source to a destination
   *       location. You can configure your task to execute hourly, daily, weekly or on specific days of
   *       the week. You control when in the day or hour you want the task to execute. The time you
   *       specify is UTC time. For more information, see <a>task-scheduling</a>.</p>
   */
  Schedule?: TaskSchedule;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource name of the task to update.</p>
   */
  TaskArn: string | undefined;
}

export namespace UpdateTaskRequest {
  export function isa(o: any): o is UpdateTaskRequest {
    return __isa(o, "UpdateTaskRequest");
  }
}

export interface UpdateTaskResponse {
  __type?: "UpdateTaskResponse";
}

export namespace UpdateTaskResponse {
  export function isa(o: any): o is UpdateTaskResponse {
    return __isa(o, "UpdateTaskResponse");
  }
}

export enum VerifyMode {
  NONE = "NONE",
  ONLY_FILES_TRANSFERRED = "ONLY_FILES_TRANSFERRED",
  POINT_IN_TIME_CONSISTENT = "POINT_IN_TIME_CONSISTENT"
}
