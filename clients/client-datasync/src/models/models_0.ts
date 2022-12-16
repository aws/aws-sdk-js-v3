// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { DataSyncServiceException as __BaseException } from "./DataSyncServiceException";

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

export enum Atime {
  BEST_EFFORT = "BEST_EFFORT",
  NONE = "NONE",
}

/**
 * <p>CancelTaskExecutionRequest</p>
 */
export interface CancelTaskExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the task execution to stop.</p>
   */
  TaskExecutionArn: string | undefined;
}

export interface CancelTaskExecutionResponse {}

/**
 * <p>This exception is thrown when an error occurs in the DataSync service.</p>
 */
export class InternalException extends __BaseException {
  readonly name: "InternalException" = "InternalException";
  readonly $fault: "server" = "server";
  errorCode?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalException, __BaseException>) {
    super({
      name: "InternalException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalException.prototype);
    this.errorCode = opts.errorCode;
  }
}

/**
 * <p>This exception is thrown when the client submits a malformed request.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  errorCode?: string;
  datasyncErrorCode?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.errorCode = opts.errorCode;
    this.datasyncErrorCode = opts.datasyncErrorCode;
  }
}

/**
 * <p>A key-value pair representing a single tag that's been applied to an Amazon Web Services
 *       resource.</p>
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

/**
 * <p>The subnet and security groups that DataSync uses to access your Amazon EFS file system.</p>
 */
export interface Ec2Config {
  /**
   * <p>Specifies the ARN of a subnet where DataSync creates the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/datasync-network.html#required-network-interfaces">network interfaces</a> for managing traffic during your transfer.</p>
   *          <p>The subnet must be located:</p>
   *          <ul>
   *             <li>
   *                <p>In the same virtual private cloud (VPC) as the Amazon EFS file system.</p>
   *             </li>
   *             <li>
   *                <p>In the same Availability Zone as at least one mount target for the Amazon EFS file
   *           system.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>You don't need to specify a subnet that includes a file system mount target.</p>
   *          </note>
   */
  SubnetArn: string | undefined;

  /**
   * <p>Specifies the Amazon Resource Names (ARNs) of the security groups associated with an
   *         Amazon EFS file system's mount target.</p>
   */
  SecurityGroupArns: string[] | undefined;
}

export enum EfsInTransitEncryption {
  NONE = "NONE",
  TLS1_2 = "TLS1_2",
}

/**
 * <p>CreateLocationEfsRequest</p>
 */
export interface CreateLocationEfsRequest {
  /**
   * <p>Specifies a mount path for your Amazon EFS file system. This is where DataSync reads or writes data (depending on if this is a source or destination location). By default, DataSync uses the root directory, but you can also include subdirectories.</p>
   *          <note>
   *             <p>You must specify a value with forward slashes (for example,
   *           <code>/path/to/folder</code>).</p>
   *          </note>
   */
  Subdirectory?: string;

  /**
   * <p>Specifies the ARN for the Amazon EFS file system.</p>
   */
  EfsFilesystemArn: string | undefined;

  /**
   * <p>Specifies the subnet and security groups DataSync uses to access your Amazon EFS file system.</p>
   */
  Ec2Config: Ec2Config | undefined;

  /**
   * <p>Specifies the key-value pair that represents a tag that you want to add to the
   *       resource. The value can be an empty string. This value helps you manage, filter, and search
   *       for your resources. We recommend that you create a name tag for your location.</p>
   */
  Tags?: TagListEntry[];

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the access point that DataSync uses to access the Amazon EFS file system.</p>
   */
  AccessPointArn?: string;

  /**
   * <p>Specifies an Identity and Access Management (IAM) role that DataSync
   *       assumes when mounting the Amazon EFS file system.</p>
   */
  FileSystemAccessRoleArn?: string;

  /**
   * <p>Specifies whether you want DataSync to use Transport Layer Security (TLS) 1.2 encryption when it copies data to
   *       or from the Amazon EFS file system.</p>
   *          <p>If you specify an access point using <code>AccessPointArn</code> or an IAM
   *       role using <code>FileSystemAccessRoleArn</code>, you must set this parameter to
   *         <code>TLS1_2</code>.</p>
   */
  InTransitEncryption?: EfsInTransitEncryption | string;
}

/**
 * <p>CreateLocationEfs</p>
 */
export interface CreateLocationEfsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon EFS file system location that you
   *       create.</p>
   */
  LocationArn?: string;
}

export interface CreateLocationFsxLustreRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the FSx for Lustre file system.</p>
   */
  FsxFilesystemArn: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the security groups that are used to configure the FSx for Lustre file system.</p>
   */
  SecurityGroupArns: string[] | undefined;

  /**
   * <p>A subdirectory in the location's path. This subdirectory in the FSx for Lustre file system is used to read data from the FSx for Lustre source location or write data to the FSx for Lustre  destination.</p>
   */
  Subdirectory?: string;

  /**
   * <p>The key-value pair that represents a tag that you want to add to the resource. The value can be an empty string. This value helps you manage, filter, and search for your resources. We recommend that you create a name tag for your location.</p>
   */
  Tags?: TagListEntry[];
}

export interface CreateLocationFsxLustreResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the FSx for Lustre file system location that's
   *       created. </p>
   */
  LocationArn?: string;
}

export enum NfsVersion {
  AUTOMATIC = "AUTOMATIC",
  NFS3 = "NFS3",
  NFS4_0 = "NFS4_0",
  NFS4_1 = "NFS4_1",
}

/**
 * <p>Specifies how DataSync can access a location using the NFS protocol.</p>
 */
export interface NfsMountOptions {
  /**
   * <p>Specifies the NFS version that you want DataSync to use when mounting your NFS share. If the server refuses to use the version specified, the task fails.</p>
   *          <p>You can specify the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AUTOMATIC</code> (default): DataSync chooses NFS version 4.1.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NFS3</code>: Stateless protocol version that allows for asynchronous
   *           writes on the server.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NFSv4_0</code>: Stateful, firewall-friendly protocol version that supports
   *           delegations and pseudo file systems.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NFSv4_1</code>: Stateful protocol version that supports sessions,
   *           directory delegations, and parallel data processing. NFS version 4.1 also includes all
   *           features available in version 4.0.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>DataSync currently only supports NFS version 3 with Amazon FSx for NetApp ONTAP locations.</p>
   *          </note>
   */
  Version?: NfsVersion | string;
}

/**
 * <p>Specifies the Network File System (NFS) protocol configuration that DataSync uses to access your Amazon FSx for OpenZFS or Amazon FSx for NetApp ONTAP file system.</p>
 */
export interface FsxProtocolNfs {
  /**
   * <p>Specifies how DataSync can access a location using the NFS protocol.</p>
   */
  MountOptions?: NfsMountOptions;
}

export enum SmbVersion {
  AUTOMATIC = "AUTOMATIC",
  SMB2 = "SMB2",
  SMB3 = "SMB3",
}

/**
 * <p>Specifies how DataSync can access a location using the SMB protocol.</p>
 */
export interface SmbMountOptions {
  /**
   * <p>Specifies the SMB version that you want DataSync to use when mounting your SMB share. If you
   *       don't specify a version, DataSync defaults to <code>AUTOMATIC</code> and chooses a version based on negotiation with the SMB server.</p>
   */
  Version?: SmbVersion | string;
}

/**
 * <p>Specifies the Server Message Block (SMB) protocol configuration that DataSync uses to access your Amazon FSx for NetApp ONTAP file system. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html#create-ontap-location-access">Accessing FSx for ONTAP file systems</a>.</p>
 */
export interface FsxProtocolSmb {
  /**
   * <p>Specifies the fully qualified domain name (FQDN) of the Microsoft Active Directory that your storage virtual machine (SVM) belongs to.</p>
   */
  Domain?: string;

  /**
   * <p>Specifies how DataSync can access a location using the SMB protocol.</p>
   */
  MountOptions?: SmbMountOptions;

  /**
   * <p>Specifies the password of a user who has permission to access your SVM.</p>
   */
  Password: string | undefined;

  /**
   * <p>Specifies a user name that can mount the location and access the files, folders, and metadata that you need in the SVM.</p>
   *          <p>If you provide a user in your Active Directory, note the following:</p>
   *          <ul>
   *             <li>
   *                <p>If you're using Directory Service for Microsoft Active Directory, the user
   *           must be a member of the Amazon Web Services Delegated
   *             FSx Administrators group.</p>
   *             </li>
   *             <li>
   *                <p>If you're using a self-managed Active Directory, the user must be a member of either
   *           the Domain Admins group or a custom group that you specified for file system
   *           administration when you created your file system.</p>
   *             </li>
   *          </ul>
   *          <p>Make sure that the user has the permissions it needs
   *       to copy the data you want:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SE_TCB_NAME</code>: Required to
   *           set object ownership and file metadata. With this
   *           privilege, you also can copy NTFS discretionary
   *           access lists (DACLs).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SE_SECURITY_NAME</code>: May be
   *           needed to copy NTFS system access control lists
   *           (SACLs). This operation specifically requires the
   *           Windows privilege, which is granted to members of
   *           the Domain Admins group. If
   *           you configure your task to copy SACLs, make sure
   *           that the user has the required privileges. For
   *           information about copying SACLs, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-task.html#configure-ownership-and-permissions">Ownership and permissions-related options</a>.</p>
   *             </li>
   *          </ul>
   */
  User: string | undefined;
}

/**
 * <p>Specifies the data transfer protocol that DataSync uses to access your Amazon FSx file system.</p>
 */
export interface FsxProtocol {
  /**
   * <p>Specifies the Network File System (NFS) protocol configuration that DataSync uses to access your FSx for OpenZFS file system or FSx for ONTAP file system's storage virtual machine (SVM).</p>
   */
  NFS?: FsxProtocolNfs;

  /**
   * <p>Specifies the Server Message Block (SMB) protocol configuration that DataSync uses to access your FSx for ONTAP file system's SVM.</p>
   */
  SMB?: FsxProtocolSmb;
}

export interface CreateLocationFsxOntapRequest {
  /**
   * <p>Specifies the data transfer protocol that DataSync uses to access your Amazon FSx file system.</p>
   */
  Protocol: FsxProtocol | undefined;

  /**
   * <p>Specifies the Amazon EC2 security groups that provide access to your file system's preferred subnet.</p>
   *          <p>The security groups must allow outbound traffic on the following ports (depending on the
   *       protocol you use):</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Network File System (NFS)</b>: TCP ports 111, 635, and
   *           2049</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Server Message Block (SMB)</b>: TCP port 445</p>
   *             </li>
   *          </ul>
   *          <p>Your file system's security groups must also allow inbound traffic on the same
   *       ports.</p>
   */
  SecurityGroupArns: string[] | undefined;

  /**
   * <p>Specifies the ARN of the storage virtual machine (SVM) on your file system where you're
   *       copying data to or from.</p>
   */
  StorageVirtualMachineArn: string | undefined;

  /**
   * <p>Specifies the junction path (also known as a mount point) in the SVM volume where you're
   *       copying data to or from (for example, <code>/vol1</code>).</p>
   *          <note>
   *             <p>Don't specify a junction path in the SVM's root volume. For more
   *         information, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html">Managing FSx for ONTAP
   *           storage virtual machines</a> in the <i>Amazon FSx for NetApp ONTAP User Guide</i>.</p>
   *          </note>
   */
  Subdirectory?: string;

  /**
   * <p>Specifies labels that help you categorize, filter, and search for your Amazon Web Services resources. We recommend creating at least a name tag for your location.</p>
   */
  Tags?: TagListEntry[];
}

export interface CreateLocationFsxOntapResponse {
  /**
   * <p>Specifies the ARN of the FSx for ONTAP file system location that you create.</p>
   */
  LocationArn?: string;
}

export interface CreateLocationFsxOpenZfsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the FSx for OpenZFS file system.</p>
   */
  FsxFilesystemArn: string | undefined;

  /**
   * <p>The type of protocol that DataSync uses to
   *       access your file system.</p>
   */
  Protocol: FsxProtocol | undefined;

  /**
   * <p>The ARNs of the security groups that are used to configure the
   *       FSx for OpenZFS file system.</p>
   */
  SecurityGroupArns: string[] | undefined;

  /**
   * <p>A subdirectory in the location's path that must begin with <code>/fsx</code>. DataSync uses this subdirectory to read
   *       or write data (depending on whether the file system is a source or destination
   *       location).</p>
   */
  Subdirectory?: string;

  /**
   * <p>The key-value pair that represents a tag that you want to add to the resource. The value can be an empty string. This value helps you manage, filter, and search for your resources. We recommend that you create a name tag for your location.</p>
   */
  Tags?: TagListEntry[];
}

export interface CreateLocationFsxOpenZfsResponse {
  /**
   * <p>The ARN of the FSx for OpenZFS file system location that you created.</p>
   */
  LocationArn?: string;
}

export interface CreateLocationFsxWindowsRequest {
  /**
   * <p>Specifies a mount path for your file system using forward slashes. This is where DataSync reads or
   *       writes data (depending on if this is a source or destination location).</p>
   */
  Subdirectory?: string;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) for the FSx for Windows File Server file
   *       system.</p>
   */
  FsxFilesystemArn: string | undefined;

  /**
   * <p>Specifies the ARNs of the security groups that provide access to your file system's
   *       preferred subnet.</p>
   *          <note>
   *             <p>If you choose a security group that doesn't allow connections from within
   *         itself, do one of the following:</p>
   *             <ul>
   *                <li>
   *                   <p>Configure the security group to allow it to communicate within
   *             itself.</p>
   *                </li>
   *                <li>
   *                   <p>Choose a different security group that can communicate with the
   *             mount target's security group.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  SecurityGroupArns: string[] | undefined;

  /**
   * <p>Specifies labels that help you categorize, filter, and search for your Amazon Web Services resources. We
   *       recommend creating at least a name tag for your location.</p>
   */
  Tags?: TagListEntry[];

  /**
   * <p>Specifies the user who has the permissions to access files and folders in the file
   *       system.</p>
   *          <p>For information about choosing a user name that ensures sufficient permissions to files,
   *       folders, and metadata, see <a href="create-fsx-location.html#FSxWuser">user</a>.</p>
   */
  User: string | undefined;

  /**
   * <p>Specifies the name of the Windows domain that the FSx for Windows File Server belongs
   *       to.</p>
   */
  Domain?: string;

  /**
   * <p>Specifies the password of the user who has the permissions to access files and folders in
   *       the file system.</p>
   */
  Password: string | undefined;
}

export interface CreateLocationFsxWindowsResponse {
  /**
   * <p>The ARN of the FSx for Windows File Server file system location you created.</p>
   */
  LocationArn?: string;
}

export enum HdfsAuthenticationType {
  KERBEROS = "KERBEROS",
  SIMPLE = "SIMPLE",
}

/**
 * <p>The NameNode of the Hadoop Distributed File System (HDFS). The NameNode manages the file
 *       system's namespace. The NameNode performs operations such as opening, closing, and renaming
 *       files and directories. The NameNode contains the information to map blocks of data to the
 *       DataNodes.</p>
 */
export interface HdfsNameNode {
  /**
   * <p>The hostname of the NameNode in the HDFS cluster. This value is the IP address or Domain
   *       Name Service (DNS) name of the NameNode. An agent that's installed on-premises uses this
   *       hostname to communicate with the NameNode in the network.</p>
   */
  Hostname: string | undefined;

  /**
   * <p>The port that the NameNode uses to listen to client requests.</p>
   */
  Port: number | undefined;
}

export enum HdfsDataTransferProtection {
  AUTHENTICATION = "AUTHENTICATION",
  DISABLED = "DISABLED",
  INTEGRITY = "INTEGRITY",
  PRIVACY = "PRIVACY",
}

export enum HdfsRpcProtection {
  AUTHENTICATION = "AUTHENTICATION",
  DISABLED = "DISABLED",
  INTEGRITY = "INTEGRITY",
  PRIVACY = "PRIVACY",
}

/**
 * <p>The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC)
 *       and data transfer privacy settings configured on the Hadoop Distributed File System (HDFS)
 *       cluster.</p>
 */
export interface QopConfiguration {
  /**
   * <p>The RPC protection setting configured on the HDFS cluster. This setting corresponds to
   *       your <code>hadoop.rpc.protection</code> setting in your <code>core-site.xml</code> file on
   *       your Hadoop cluster.</p>
   */
  RpcProtection?: HdfsRpcProtection | string;

  /**
   * <p>The data transfer protection setting configured on the HDFS cluster. This setting
   *       corresponds to your <code>dfs.data.transfer.protection</code> setting in the
   *         <code>hdfs-site.xml</code> file on your Hadoop cluster.</p>
   */
  DataTransferProtection?: HdfsDataTransferProtection | string;
}

export interface CreateLocationHdfsRequest {
  /**
   * <p>A subdirectory in the HDFS cluster. This subdirectory is used to read data from or write
   *       data to the HDFS cluster. If the subdirectory isn't specified, it will default to
   *         <code>/</code>.</p>
   */
  Subdirectory?: string;

  /**
   * <p>The NameNode that manages the HDFS namespace. The NameNode performs operations such as
   *       opening, closing, and renaming files and directories. The NameNode contains the information to
   *       map blocks of data to the DataNodes. You can use only one NameNode.</p>
   */
  NameNodes: HdfsNameNode[] | undefined;

  /**
   * <p>The size of data blocks to write into the HDFS cluster. The block size must be a multiple
   *       of 512 bytes. The default block size is 128 mebibytes (MiB).</p>
   */
  BlockSize?: number;

  /**
   * <p>The number of DataNodes to replicate the data to when writing to the HDFS cluster. By
   *       default, data is replicated to three DataNodes.</p>
   */
  ReplicationFactor?: number;

  /**
   * <p>The URI of the HDFS cluster's Key Management Server (KMS). </p>
   */
  KmsKeyProviderUri?: string;

  /**
   * <p>The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC)
   *       and data transfer protection settings configured on the Hadoop Distributed File System (HDFS)
   *       cluster. If <code>QopConfiguration</code> isn't specified, <code>RpcProtection</code> and
   *         <code>DataTransferProtection</code> default to <code>PRIVACY</code>. If you set
   *         <code>RpcProtection</code> or <code>DataTransferProtection</code>, the other parameter
   *       assumes the same value. </p>
   */
  QopConfiguration?: QopConfiguration;

  /**
   * <p>The type of authentication used to determine the identity of the user. </p>
   */
  AuthenticationType: HdfsAuthenticationType | string | undefined;

  /**
   * <p>The user name used to identify the client on the host operating system. </p>
   *          <note>
   *             <p>If <code>SIMPLE</code> is specified for <code>AuthenticationType</code>, this parameter
   *         is required. </p>
   *          </note>
   */
  SimpleUser?: string;

  /**
   * <p>The Kerberos principal with access to the files and folders on the HDFS cluster. </p>
   *          <note>
   *             <p>If <code>KERBEROS</code> is specified for <code>AuthenticationType</code>, this
   *         parameter is required.</p>
   *          </note>
   */
  KerberosPrincipal?: string;

  /**
   * <p>The Kerberos key table (keytab) that contains mappings between the defined Kerberos
   *       principal and the encrypted keys. You can load the keytab from a file by providing the file's
   *       address. If you're using the CLI, it performs base64 encoding for you.
   *       Otherwise, provide the base64-encoded text. </p>
   *          <note>
   *             <p>If <code>KERBEROS</code> is specified for <code>AuthenticationType</code>, this
   *         parameter is required. </p>
   *          </note>
   */
  KerberosKeytab?: Uint8Array;

  /**
   * <p>The <code>krb5.conf</code> file that contains the Kerberos configuration information. You
   *       can load the <code>krb5.conf</code> file by providing the file's address. If you're using the
   *         CLI, it performs the base64 encoding for you. Otherwise, provide the
   *       base64-encoded text. </p>
   *          <note>
   *             <p>If <code>KERBEROS</code> is specified for <code>AuthenticationType</code>, this
   *         parameter is required.</p>
   *          </note>
   */
  KerberosKrb5Conf?: Uint8Array;

  /**
   * <p>The Amazon Resource Names (ARNs) of the agents that are used to connect to the HDFS
   *       cluster.</p>
   */
  AgentArns: string[] | undefined;

  /**
   * <p>The key-value pair that represents the tag that you want to add to the location. The value
   *       can be an empty string. We recommend using tags to name your resources. </p>
   */
  Tags?: TagListEntry[];
}

export interface CreateLocationHdfsResponse {
  /**
   * <p>The ARN of the source HDFS cluster location that's created. </p>
   */
  LocationArn?: string;
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
   *          <p>For information about NFS export configuration, see 18.7. The /etc/exports
   *       Configuration File in the Red Hat Enterprise Linux documentation.</p>
   */
  Subdirectory: string | undefined;

  /**
   * <p>The name of the NFS server. This value is the IP address or Domain Name Service (DNS)
   *       name of the NFS server. An agent that is installed on-premises uses this hostname to mount the
   *       NFS server in a network. </p>
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

export enum ObjectStorageServerProtocol {
  HTTP = "HTTP",
  HTTPS = "HTTPS",
}

/**
 * <p>CreateLocationObjectStorageRequest</p>
 */
export interface CreateLocationObjectStorageRequest {
  /**
   * <p>Specifies the domain name or IP address of the object storage server. A DataSync agent uses this hostname to mount the
   *       object storage server in a network.</p>
   */
  ServerHostname: string | undefined;

  /**
   * <p>Specifies the port that your object storage server accepts inbound network traffic on (for example, port 443).</p>
   */
  ServerPort?: number;

  /**
   * <p>Specifies the protocol that your object storage server uses to communicate.</p>
   */
  ServerProtocol?: ObjectStorageServerProtocol | string;

  /**
   * <p>Specifies the object prefix for your object storage server. If this is a source location, DataSync only copies objects with this prefix. If this is a destination location, DataSync writes all objects with this prefix. </p>
   */
  Subdirectory?: string;

  /**
   * <p>Specifies the name of the object storage bucket involved in the transfer.</p>
   */
  BucketName: string | undefined;

  /**
   * <p>Specifies the access key (for example, a user name) if credentials are required to authenticate with the object storage server.</p>
   */
  AccessKey?: string;

  /**
   * <p>Specifies the secret key (for example, a password) if credentials are required to authenticate with the object storage server.</p>
   */
  SecretKey?: string;

  /**
   * <p>Specifies the Amazon Resource Names (ARNs) of the DataSync agents that can securely connect with your location.</p>
   */
  AgentArns: string[] | undefined;

  /**
   * <p>Specifies the key-value pair that represents a tag that you want to add to the resource. Tags can help you manage, filter, and search for your resources. We recommend creating a name tag for your location.</p>
   */
  Tags?: TagListEntry[];

  /**
   * <p>Specifies a certificate to authenticate with an object storage system that uses a private
   *       or self-signed certificate authority (CA). You must specify a Base64-encoded <code>.pem</code>
   *       file (for example, <code>file:///home/user/.ssh/storage_sys_certificate.pem</code>). The certificate can be up to 32768 bytes (before Base64 encoding).</p>
   *          <p>To use this parameter, configure <code>ServerProtocol</code> to <code>HTTPS</code>.</p>
   */
  ServerCertificate?: Uint8Array;
}

/**
 * <p>CreateLocationObjectStorageResponse</p>
 */
export interface CreateLocationObjectStorageResponse {
  /**
   * <p>Specifies the ARN of the object storage system location that you create.</p>
   */
  LocationArn?: string;
}

/**
 * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role used to access
 *       an Amazon S3 bucket.</p>
 *          <p>For detailed information about using such a role, see Creating a Location for
 *       Amazon S3 in the <i>DataSync User Guide</i>.</p>
 */
export interface S3Config {
  /**
   * <p>The ARN of the IAM role for accessing the S3 bucket. </p>
   */
  BucketAccessRoleArn: string | undefined;
}

export enum S3StorageClass {
  DEEP_ARCHIVE = "DEEP_ARCHIVE",
  GLACIER = "GLACIER",
  GLACIER_INSTANT_RETRIEVAL = "GLACIER_INSTANT_RETRIEVAL",
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
   *          <p>For more information about S3 storage classes, see <a href="http://aws.amazon.com/s3/storage-classes/">Amazon S3 Storage Classes</a>. Some storage classes have behaviors that
   *       can affect your S3 storage cost. For detailed information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes">Considerations when working with S3 storage classes in DataSync</a>.</p>
   */
  S3StorageClass?: S3StorageClass | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role used to access
   *       an Amazon S3 bucket.</p>
   *          <p>For detailed information about using such a role, see Creating a Location for
   *       Amazon S3 in the <i>DataSync User Guide</i>.</p>
   */
  S3Config: S3Config | undefined;

  /**
   * <p>If you're using DataSync on an Amazon Web Services Outpost, specify the Amazon Resource
   *       Names (ARNs) of the DataSync agents deployed on your Outpost. For more information about
   *       launching a DataSync agent on an Amazon Web Services Outpost, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/deploy-agents.html#outposts-agent">Deploy your DataSync agent
   *         on Outposts</a>.</p>
   */
  AgentArns?: string[];

  /**
   * <p>The key-value pair that represents the tag that you want to add to the location. The
   *       value can be an empty string. We recommend using tags to name your resources.</p>
   */
  Tags?: TagListEntry[];
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
   *          <p>For information about choosing a user name that ensures sufficient permissions to files,
   *       folders, and metadata, see the <a href="create-smb-location.html#SMBuser">User setting</a> for SMB locations.</p>
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

export enum ObjectTags {
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
 * <p>Configures your DataSync task settings. These options include how DataSync handles files, objects, and their associated metadata. You also can specify how
 *         DataSync verifies data integrity, set bandwidth limits for your task, among other
 *       options.</p>
 *          <p>Each task setting has a default value. Unless you need to, you don't have to configure
 *       any of these <code>Options</code> before starting your task.</p>
 */
export interface Options {
  /**
   * <p>Specifies how and when DataSync  checks the integrity of your data during a
   *       transfer. </p>
   *          <p>Default value: <code>POINT_IN_TIME_CONSISTENT</code>
   *          </p>
   *          <p>
   *             <code>ONLY_FILES_TRANSFERRED</code> (recommended): DataSync calculates the checksum of
   *       transferred files and metadata at the source location. At the end of the transfer, DataSync then
   *       compares this checksum to the checksum calculated on those files at the destination.</p>
   *          <p>We recommend this option when transferring to S3 Glacier Flexible Retrieval or
   *         S3 Glacier Deep Archive storage classes. For more information, see
   *         <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes">Storage class
   *         considerations with Amazon S3 locations</a>.</p>
   *          <p>
   *             <code>POINT_IN_TIME_CONSISTENT</code>: At the end of the transfer, DataSync
   *       scans the entire source and destination to verify that both locations are fully
   *       synchronized.</p>
   *          <p>You can't use this option when transferring to S3 Glacier Flexible Retrieval or
   *         S3 Glacier Deep Archive storage classes. For more information, see
   *         <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes">Storage class
   *         considerations with Amazon S3 locations</a>.</p>
   *          <p>
   *             <code>NONE</code>: DataSync doesn't run additional verification at the end of
   *       the transfer. All data transmissions are still integrity-checked with checksum verification
   *       during the transfer.</p>
   */
  VerifyMode?: VerifyMode | string;

  /**
   * <p>Specifies whether data at the destination location should be overwritten or preserved. If
   *       set to <code>NEVER</code>, a destination file for example will not be replaced by a source
   *       file (even if the destination file differs from the source file). If you modify files in the
   *       destination and you sync the files, you can use this value to protect against overwriting
   *       those changes. </p>
   *          <p>Some storage classes have specific behaviors that can affect your Amazon S3
   *       storage cost. For detailed information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes">Considerations
   *         when working with Amazon S3 storage classes in DataSync </a>.</p>
   */
  OverwriteMode?: OverwriteMode | string;

  /**
   * <p>Specifies whether to preserve metadata indicating the last time a file was read or
   *       written to. If you set <code>Atime</code> to <code>BEST_EFFORT</code>, DataSync
   *       attempts to preserve the original <code>Atime</code> attribute on all source files (that is,
   *       the version before the <code>PREPARING</code> phase of the task execution).</p>
   *          <note>
   *             <p>The behavior of <code>Atime</code> isn't fully standard across platforms, so DataSync can only do this on a best-effort basis.</p>
   *          </note>
   *          <p>Default value: <code>BEST_EFFORT</code>
   *          </p>
   *          <p>
   *             <code>BEST_EFFORT</code>: Attempt to preserve the per-file <code>Atime</code> value
   *       (recommended).</p>
   *          <p>
   *             <code>NONE</code>: Ignore <code>Atime</code>.</p>
   *          <note>
   *             <p>If <code>Atime</code> is set to <code>BEST_EFFORT</code>, <code>Mtime</code> must be set
   *         to <code>PRESERVE</code>. </p>
   *             <p>If <code>Atime</code> is set to <code>NONE</code>, <code>Mtime</code> must also be
   *           <code>NONE</code>. </p>
   *          </note>
   */
  Atime?: Atime | string;

  /**
   * <p>Specifies whether to preserve metadata indicating the last time that a file was written
   *       to before the <code>PREPARING</code> phase of your task execution. This option is required
   *       when you need to run the a task more than once.</p>
   *          <p>Default Value: <code>PRESERVE</code>
   *          </p>
   *          <p>
   *             <code>PRESERVE</code>: Preserve original <code>Mtime</code> (recommended)</p>
   *          <p>
   *             <code>NONE</code>: Ignore <code>Mtime</code>. </p>
   *          <note>
   *             <p>If <code>Mtime</code> is set to <code>PRESERVE</code>, <code>Atime</code> must be set to
   *           <code>BEST_EFFORT</code>.</p>
   *             <p>If <code>Mtime</code> is set to <code>NONE</code>, <code>Atime</code> must also be set
   *         to <code>NONE</code>. </p>
   *          </note>
   */
  Mtime?: Mtime | string;

  /**
   * <p>Specifies the POSIX user ID (UID) of the file's owner.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/special-files.html#metadata-copied">Metadata copied by DataSync</a>.</p>
   *          <p>Default value: <code>INT_VALUE</code>. This preserves the integer value of the ID.</p>
   *          <p>
   *             <code>INT_VALUE</code>: Preserve the integer value of UID and group ID (GID)
   *       (recommended).</p>
   *          <p>
   *             <code>NONE</code>: Ignore UID and GID. </p>
   */
  Uid?: Uid | string;

  /**
   * <p>Specifies the POSIX group ID (GID) of the file's owners.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/special-files.html#metadata-copied">Metadata copied by DataSync</a>.</p>
   *          <p>Default value: <code>INT_VALUE</code>. This preserves the integer value of the ID.</p>
   *          <p>
   *             <code>INT_VALUE</code>: Preserve the integer value of user ID (UID) and GID
   *       (recommended).</p>
   *          <p>
   *             <code>NONE</code>: Ignore UID and GID.</p>
   */
  Gid?: Gid | string;

  /**
   * <p>Specifies whether files in the destination location that don't exist in the source
   *       should be preserved. This option can affect your Amazon S3 storage cost. If your task
   *       deletes objects, you might incur minimum storage duration charges for certain storage classes.
   *       For detailed information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes">Considerations
   *         when working with Amazon S3 storage classes in DataSync </a>.</p>
   *          <p>Default value: <code>PRESERVE</code>
   *          </p>
   *          <p>
   *             <code>PRESERVE</code>: Ignore such destination files (recommended). </p>
   *          <p>
   *             <code>REMOVE</code>: Delete destination files that aren’t present in the
   *       source.</p>
   */
  PreserveDeletedFiles?: PreserveDeletedFiles | string;

  /**
   * <p>Specifies whether DataSync should preserve the metadata of block and
   *       character devices in the source location and recreate the files with that device name and
   *       metadata on the destination. DataSync copies only the name and metadata of such
   *       devices.</p>
   *          <note>
   *             <p>DataSync can't copy the actual contents of these devices because they're
   *         nonterminal and don't return an end-of-file (EOF) marker.</p>
   *          </note>
   *          <p>Default value: <code>NONE</code>
   *          </p>
   *          <p>
   *             <code>NONE</code>: Ignore special devices (recommended). </p>
   *          <p>
   *             <code>PRESERVE</code>: Preserve character and block device metadata. This option
   *       currently isn't supported for Amazon EFS. </p>
   */
  PreserveDevices?: PreserveDevices | string;

  /**
   * <p>Specifies which users or groups can access a file for a specific purpose such as reading,
   *       writing, or execution of the file.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/special-files.html#metadata-copied">Metadata copied by DataSync</a>.</p>
   *          <p>Default value: <code>PRESERVE</code>
   *          </p>
   *          <p>
   *             <code>PRESERVE</code>: Preserve POSIX-style permissions (recommended).</p>
   *          <p>
   *             <code>NONE</code>: Ignore permissions. </p>
   *          <note>
   *             <p>DataSync can preserve extant permissions of a source location.</p>
   *          </note>
   */
  PosixPermissions?: PosixPermissions | string;

  /**
   * <p>Limits the bandwidth used by a DataSync task. For example, if you want
   *         DataSync to use a maximum of 1 MB, set this value to <code>1048576</code>
   *         (<code>=1024*1024</code>).</p>
   */
  BytesPerSecond?: number;

  /**
   * <p>Specifies whether tasks should be queued before executing the tasks. The default is
   *         <code>ENABLED</code>, which means the tasks will be queued.</p>
   *          <p>If you use the same agent to run multiple tasks, you can enable the tasks to run in
   *       series. For more information, see
   *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/run-task.html#queue-task-execution">Queueing task executions</a>.</p>
   */
  TaskQueueing?: TaskQueueing | string;

  /**
   * <p>Specifies the type of logs that DataSync publishes to a Amazon CloudWatch Logs log
   *       group. To specify the log group, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateTask.html#DataSync-CreateTask-request-CloudWatchLogGroupArn">CloudWatchLogGroupArn</a>.</p>
   *          <p>If you set <code>LogLevel</code> to <code>OFF</code>, no logs are published.
   *         <code>BASIC</code> publishes logs on errors for individual files transferred.
   *         <code>TRANSFER</code> publishes logs for every file or object that is transferred and
   *       integrity checked.</p>
   */
  LogLevel?: LogLevel | string;

  /**
   * <p>Determines whether DataSync transfers only the data and metadata that differ
   *       between the source and the destination location or transfers all the content from the source
   *       (without comparing what's in the destination).</p>
   *          <p>
   *             <code>CHANGED</code>: DataSync copies only data or metadata that is new or
   *       different content from the source location to the destination location.</p>
   *          <p>
   *             <code>ALL</code>: DataSync copies all source location content to the destination
   *       (without comparing what's in the destination).</p>
   */
  TransferMode?: TransferMode | string;

  /**
   * <p>Specifies which components of the SMB security descriptor are copied from source to
   *       destination objects. </p>
   *          <p>This value is only used for transfers between SMB and Amazon FSx for Windows File Server
   *       locations or between two FSx for Windows File Server locations. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/special-files.html">how DataSync handles metadata</a>.</p>
   *          <p>Default value: <code>OWNER_DACL</code>
   *          </p>
   *          <p>
   *             <code>OWNER_DACL</code>: For each copied object, DataSync copies the following
   *       metadata:</p>
   *          <ul>
   *             <li>
   *                <p>The object owner.</p>
   *             </li>
   *             <li>
   *                <p>NTFS discretionary access control lists (DACLs), which determine whether to
   *         grant access to an object.</p>
   *                <p>DataSync won't copy NTFS system access control lists (SACLs) with this
   *           option.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>OWNER_DACL_SACL</code>: For each copied object, DataSync copies the
   *       following metadata:</p>
   *          <ul>
   *             <li>
   *                <p>The object owner.</p>
   *             </li>
   *             <li>
   *                <p>NTFS discretionary access control lists (DACLs), which determine whether to
   *           grant access to an object.</p>
   *             </li>
   *             <li>
   *                <p>SACLs, which are used by administrators to log attempts to access a secured object.</p>
   *                <p>Copying SACLs requires granting additional permissions to the Windows user that
   *           DataSync uses to access your SMB location. For information about choosing a user that
   *           ensures sufficient permissions to files, folders, and metadata, see <a href="create-smb-location.html#SMBuser">user</a>.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>NONE</code>: None of the SMB security descriptor components are copied. Destination
   *       objects are owned by the user that was provided for accessing the destination location. DACLs
   *       and SACLs are set based on the destination server’s configuration. </p>
   */
  SecurityDescriptorCopyFlags?: SmbSecurityDescriptorCopyFlags | string;

  /**
   * <p>Specifies whether object tags are preserved when transferring between object storage
   *       systems. If you want your DataSync task to ignore object tags, specify the
   *         <code>NONE</code> value.</p>
   *          <p>Default Value: <code>PRESERVE</code>
   *          </p>
   */
  ObjectTags?: ObjectTags | string;
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
   * <p>Specifies the configuration options for a task. Some options include preserving file or object metadata and verifying data integrity.</p>
   *          <p>You can also override these options before starting an individual run of a task (also
   *       known as a <i>task execution</i>). For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>.</p>
   */
  Options?: Options;

  /**
   * <p>Specifies a list of filter rules that exclude specific data during your transfer. For more
   *       information and examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html">Filtering data transferred by DataSync</a>.</p>
   */
  Excludes?: FilterRule[];

  /**
   * <p>Specifies a schedule used to periodically transfer files from a source to a destination
   *       location. The schedule should be specified in UTC time. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/task-scheduling.html">Scheduling your task</a>.</p>
   */
  Schedule?: TaskSchedule;

  /**
   * <p>Specifies the tags that you want to apply to the Amazon Resource Name (ARN)
   *       representing the task.</p>
   *          <p>
   *             <i>Tags</i> are key-value pairs that help you manage, filter, and search
   *       for your DataSync resources.</p>
   */
  Tags?: TagListEntry[];

  /**
   * <p>Specifies a list of filter rules that include specific data during your transfer. For more information and examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html">Filtering data transferred by DataSync</a>.</p>
   */
  Includes?: FilterRule[];
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

export interface DeleteAgentResponse {}

/**
 * <p>DeleteLocation</p>
 */
export interface DeleteLocationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the location to delete.</p>
   */
  LocationArn: string | undefined;
}

export interface DeleteLocationResponse {}

/**
 * <p>DeleteTask</p>
 */
export interface DeleteTaskRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the task that you want to delete.</p>
   */
  TaskArn: string | undefined;
}

export interface DeleteTaskResponse {}

/**
 * <p>DescribeAgent</p>
 */
export interface DescribeAgentRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the agent to describe.</p>
   */
  AgentArn: string | undefined;
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

/**
 * <p>DescribeLocationEfsRequest</p>
 */
export interface DescribeLocationEfsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon EFS file system location that you want information about.</p>
   */
  LocationArn: string | undefined;
}

/**
 * <p>DescribeLocationEfsResponse</p>
 */
export interface DescribeLocationEfsResponse {
  /**
   * <p>The ARN of the Amazon EFS file system location.</p>
   */
  LocationArn?: string;

  /**
   * <p>The URL of the Amazon EFS file system location.</p>
   */
  LocationUri?: string;

  /**
   * <p>The subnet and security groups that DataSync uses to access your Amazon EFS file system.</p>
   */
  Ec2Config?: Ec2Config;

  /**
   * <p>The time that the location was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The ARN of the access point that DataSync uses to access the Amazon EFS file system.</p>
   */
  AccessPointArn?: string;

  /**
   * <p>The Identity and Access Management (IAM) role that DataSync assumes when mounting the Amazon EFS file system.</p>
   */
  FileSystemAccessRoleArn?: string;

  /**
   * <p>Describes whether DataSync uses Transport Layer Security (TLS) encryption when
   *       copying data to or from the Amazon EFS file system.</p>
   */
  InTransitEncryption?: EfsInTransitEncryption | string;
}

export interface DescribeLocationFsxLustreRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the FSx for Lustre location to describe. </p>
   */
  LocationArn: string | undefined;
}

export interface DescribeLocationFsxLustreResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the FSx for Lustre location that was described.</p>
   */
  LocationArn?: string;

  /**
   * <p>The URI of the FSx for Lustre location that was described.</p>
   */
  LocationUri?: string;

  /**
   * <p>The Amazon Resource Names (ARNs) of the security groups that are configured for the FSx for Lustre file system.</p>
   */
  SecurityGroupArns?: string[];

  /**
   * <p>The time that the FSx for Lustre location was created.</p>
   */
  CreationTime?: Date;
}

export interface DescribeLocationFsxOntapRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the FSx for ONTAP file system location that you want information about.</p>
   */
  LocationArn: string | undefined;
}

export interface DescribeLocationFsxOntapResponse {
  /**
   * <p>The time that the location was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The ARN of the FSx for ONTAP file system location.</p>
   */
  LocationArn?: string;

  /**
   * <p>The uniform resource identifier (URI) of the FSx for ONTAP file system
   *       location.</p>
   */
  LocationUri?: string;

  /**
   * <p>Specifies the data transfer protocol that DataSync uses to access your Amazon FSx file system.</p>
   */
  Protocol?: FsxProtocol;

  /**
   * <p>The security groups that DataSync uses to access your FSx for ONTAP file system.</p>
   */
  SecurityGroupArns?: string[];

  /**
   * <p>The ARN of the storage virtual machine (SVM) on your FSx for ONTAP file system where you're copying data to or from.</p>
   */
  StorageVirtualMachineArn?: string;

  /**
   * <p>The ARN of the FSx for ONTAP file system.</p>
   */
  FsxFilesystemArn?: string;
}

export interface DescribeLocationFsxOpenZfsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the FSx for OpenZFS location to describe.</p>
   */
  LocationArn: string | undefined;
}

export interface DescribeLocationFsxOpenZfsResponse {
  /**
   * <p>The ARN of the FSx for OpenZFS location that was described.</p>
   */
  LocationArn?: string;

  /**
   * <p>The uniform resource identifier (URI) of the FSx for OpenZFS location that was
   *       described.</p>
   *          <p>Example: <code>fsxz://us-west-2.fs-1234567890abcdef02/fsx/folderA/folder</code>
   *          </p>
   */
  LocationUri?: string;

  /**
   * <p>The ARNs of the security groups that are configured for the FSx for OpenZFS file
   *       system.</p>
   */
  SecurityGroupArns?: string[];

  /**
   * <p>The type of protocol that DataSync uses to
   *       access your file system.</p>
   */
  Protocol?: FsxProtocol;

  /**
   * <p>The time that the FSx for OpenZFS location was created.</p>
   */
  CreationTime?: Date;
}

export interface DescribeLocationFsxWindowsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the FSx for Windows File Server location to
   *       describe.</p>
   */
  LocationArn: string | undefined;
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

export interface DescribeLocationHdfsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the HDFS cluster location to describe.</p>
   */
  LocationArn: string | undefined;
}

export interface DescribeLocationHdfsResponse {
  /**
   * <p>The ARN of the HDFS cluster location.</p>
   */
  LocationArn?: string;

  /**
   * <p>The URI of the HDFS cluster location.</p>
   */
  LocationUri?: string;

  /**
   * <p>The NameNode that manage the HDFS namespace. </p>
   */
  NameNodes?: HdfsNameNode[];

  /**
   * <p>The size of the data blocks to write into the HDFS cluster. </p>
   */
  BlockSize?: number;

  /**
   * <p>The number of DataNodes to replicate the data to when writing to the HDFS cluster. </p>
   */
  ReplicationFactor?: number;

  /**
   * <p> The URI of the HDFS cluster's Key Management Server (KMS). </p>
   */
  KmsKeyProviderUri?: string;

  /**
   * <p>The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC)
   *       and data transfer protection settings configured on the Hadoop Distributed File System (HDFS)
   *       cluster. </p>
   */
  QopConfiguration?: QopConfiguration;

  /**
   * <p>The type of authentication used to determine the identity of the user. </p>
   */
  AuthenticationType?: HdfsAuthenticationType | string;

  /**
   * <p>The user name used to identify the client on the host operating system. This parameter is
   *       used if the <code>AuthenticationType</code> is defined as <code>SIMPLE</code>.</p>
   */
  SimpleUser?: string;

  /**
   * <p>The Kerberos principal with access to the files and folders on the HDFS cluster. This
   *       parameter is used if the <code>AuthenticationType</code> is defined as
   *       <code>KERBEROS</code>.</p>
   */
  KerberosPrincipal?: string;

  /**
   * <p>The ARNs of the agents that are used to connect to the HDFS cluster. </p>
   */
  AgentArns?: string[];

  /**
   * <p>The time that the HDFS location was created.</p>
   */
  CreationTime?: Date;
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

/**
 * <p>DescribeLocationObjectStorageRequest</p>
 */
export interface DescribeLocationObjectStorageRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the object storage system location that you want information about.</p>
   */
  LocationArn: string | undefined;
}

/**
 * <p>DescribeLocationObjectStorageResponse</p>
 */
export interface DescribeLocationObjectStorageResponse {
  /**
   * <p>The ARN of the object storage system location.</p>
   */
  LocationArn?: string;

  /**
   * <p>The URL of the object storage system location.</p>
   */
  LocationUri?: string;

  /**
   * <p>The access key (for example, a user name) required to authenticate with the object storage
   *       system.</p>
   */
  AccessKey?: string;

  /**
   * <p>The port that your object storage server accepts inbound network traffic on (for example, port 443).</p>
   */
  ServerPort?: number;

  /**
   * <p>The protocol that your object storage system uses to communicate.</p>
   */
  ServerProtocol?: ObjectStorageServerProtocol | string;

  /**
   * <p>The ARNs of the DataSync agents that can securely connect with your location.</p>
   */
  AgentArns?: string[];

  /**
   * <p>The time that the location was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The self-signed certificate that DataSync uses to securely authenticate with
   *       your object storage system.</p>
   */
  ServerCertificate?: Uint8Array;
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
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role used to access
   *       an Amazon S3 bucket.</p>
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

/**
 * <p>DescribeLocationSmbRequest</p>
 */
export interface DescribeLocationSmbRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the SMB location to describe.</p>
   */
  LocationArn: string | undefined;
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

/**
 * <p>DescribeTaskRequest</p>
 */
export interface DescribeTaskRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the task to describe.</p>
   */
  TaskArn: string | undefined;
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
   *          <p>For detailed information about task execution statuses, see Understanding
   *       Task Statuses in the <i>DataSync User Guide</i>.</p>
   */
  Status?: TaskStatus | string;

  /**
   * <p>The name of the task that was described.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the task execution that is transferring files.</p>
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
   *          <p>For more information on these groups, see Working with Log Groups and Log
   *       Streams in the <i>Amazon CloudWatch User Guide</i>.</p>
   */
  CloudWatchLogGroupArn?: string;

  /**
   * <p>The Amazon Resource Names (ARNs) of the network interfaces created for your source location. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/datasync-network.html#required-network-interfaces">Network interface requirements</a>.</p>
   */
  SourceNetworkInterfaceArns?: string[];

  /**
   * <p>The Amazon Resource Names (ARNs) of the network interfaces created for your destination location. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/datasync-network.html#required-network-interfaces">Network interface requirements</a>.</p>
   */
  DestinationNetworkInterfaceArns?: string[];

  /**
   * <p>The configuration options that control the behavior of the <code>StartTaskExecution</code> operation. Some options include preserving file or object metadata and verifying data integrity.</p>
   *          <p>You can override these options for each task execution. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>.</p>
   */
  Options?: Options;

  /**
   * <p>A list of filter rules that exclude specific data during your transfer. For more information and examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html">Filtering data transferred by DataSync</a>.</p>
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
   * <p>A list of filter rules that include specific data during your transfer. For more information and examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html">Filtering data transferred by DataSync</a>.</p>
   */
  Includes?: FilterRule[];
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
   *          <p>For detailed information about task execution statuses, see Understanding
   *       Task Statuses in the <i>DataSync User Guide.</i>
   *          </p>
   */
  Status?: TaskExecutionStatus | string;

  /**
   * <p>Configures your DataSync task settings. These options include how DataSync handles files, objects, and their associated metadata. You also can specify how
   *         DataSync verifies data integrity, set bandwidth limits for your task, among other
   *       options.</p>
   *          <p>Each task setting has a default value. Unless you need to, you don't have to configure
   *       any of these <code>Options</code> before starting your task.</p>
   */
  Options?: Options;

  /**
   * <p>A list of filter rules that exclude specific data during your transfer. For more information and examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html">Filtering data transferred by DataSync</a>.</p>
   */
  Excludes?: FilterRule[];

  /**
   * <p>A list of filter rules that include specific data during your transfer. For more information and examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html">Filtering data transferred by DataSync</a>.</p>
   */
  Includes?: FilterRule[];

  /**
   * <p>The time that the task execution was started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The expected number of files that is to be transferred over the network. This value is
   *       calculated during the <code>PREPARING</code> phase before the <code>TRANSFERRING</code> phase
   *       of the task execution. This value is the expected number of files to be transferred. It's
   *       calculated based on comparing the content of the source and destination locations and finding
   *       the delta that needs to be transferred. </p>
   */
  EstimatedFilesToTransfer?: number;

  /**
   * <p>The estimated physical number of bytes that is to be transferred over the
   *       network.</p>
   */
  EstimatedBytesToTransfer?: number;

  /**
   * <p>The actual number of files that was transferred over the network. This value is
   *       calculated and updated on an ongoing basis during the <code>TRANSFERRING</code> phase of the
   *       task execution. It's updated periodically when each file is read from the source and sent over
   *       the network. </p>
   *          <p>If failures occur during a transfer, this value can be less than
   *         <code>EstimatedFilesToTransfer</code>. In some cases, this value can also be greater than
   *         <code>EstimatedFilesToTransfer</code>. This element is implementation-specific for some
   *       location types, so don't use it as an indicator for a correct file number or to monitor your
   *       task execution.</p>
   */
  FilesTransferred?: number;

  /**
   * <p>The number of logical bytes written to the destination Amazon Web Services storage resource.</p>
   */
  BytesWritten?: number;

  /**
   * <p>The total number of bytes that are involved in the transfer. For the number of bytes
   *       sent over the network, see <code>BytesCompressed</code>. </p>
   */
  BytesTransferred?: number;

  /**
   * <p>The result of the task execution.</p>
   */
  Result?: TaskExecutionResultDetail;

  /**
   * <p>The physical number of bytes transferred over the network after compression was applied.
   *       In most cases, this number is less than <code>BytesTransferred</code> unless the data isn't
   *       compressible.</p>
   */
  BytesCompressed?: number;
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
 * <p>Narrow down the list of resources returned by <code>ListLocations</code>. For example, to
 *       see all your Amazon S3 locations, create a filter using <code>"Name":
 *         "LocationType"</code>, <code>"Operator": "Equals"</code>, and <code>"Values":
 *       "S3"</code>.</p>
 *          <p>For more information, see
 *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/query-resources.html">filtering resources</a>.</p>
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
   *       <code>Contains</code>).</p>
   */
  Operator: Operator | string | undefined;
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
   * <p>Represents a list of URIs of a location. <code>LocationUri</code> returns an array that
   *       contains a list of locations when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListLocations.html">ListLocations</a> operation is
   *       called.</p>
   *          <p>Format: <code>TYPE://GLOBAL_ID/SUBDIR</code>.</p>
   *          <p>TYPE designates the type of location (for example, <code>nfs</code> or
   *       <code>s3</code>).</p>
   *          <p>GLOBAL_ID is the globally unique identifier of the resource that backs the location. An
   *       example for EFS is <code>us-east-2.fs-abcd1234</code>. An example for Amazon S3 is the bucket
   *       name, such as <code>myBucket</code>. An example for NFS is a valid IPv4 address or a hostname
   *       that is compliant with Domain Name Service (DNS).</p>
   *          <p>SUBDIR is a valid file system path, delimited by forward slashes as is the *nix
   *       convention. For NFS and Amazon EFS, it's the export path to mount the location. For
   *       Amazon S3, it's the prefix path that you mount to and treat as the root of the
   *       location.</p>
   *          <p></p>
   */
  LocationUri?: string;
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

/**
 * <p>ListTagsForResourceRequest</p>
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the resource that you want tag information on.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Specifies how many results that you want in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>Specifies an opaque string that indicates the position to begin the next list of results in the response.</p>
   */
  NextToken?: string;
}

/**
 * <p>ListTagsForResourceResponse</p>
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>An array of tags applied to the specified resource.</p>
   */
  Tags?: TagListEntry[];

  /**
   * <p>The opaque string that indicates the position to begin the next list of results in the response.</p>
   */
  NextToken?: string;
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

export enum TaskFilterName {
  CreationTime = "CreationTime",
  LocationId = "LocationId",
}

/**
 * <p>You can use API filters to narrow down the list of resources returned by <code>ListTasks</code>.
 *       For example, to retrieve all tasks on a source location, you can use <code>ListTasks</code>
 *       with filter name <code>LocationId</code> and <code>Operator Equals</code> with the ARN for the
 *       location.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/query-resources.html">filtering DataSync resources</a>.</p>
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
   *       <code>Contains</code>).</p>
   */
  Operator: Operator | string | undefined;
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

/**
 * <p>StartTaskExecutionRequest</p>
 */
export interface StartTaskExecutionRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the task that you want to start.</p>
   */
  TaskArn: string | undefined;

  /**
   * <p>Configures your DataSync task settings. These options include how DataSync handles files, objects, and their associated metadata. You also can specify how
   *         DataSync verifies data integrity, set bandwidth limits for your task, among other
   *       options.</p>
   *          <p>Each task setting has a default value. Unless you need to, you don't have to configure
   *       any of these <code>Options</code> before starting your task.</p>
   */
  OverrideOptions?: Options;

  /**
   * <p>Specifies a list of filter rules that determines which files to include when running a
   *       task. The pattern should contain a single filter string that consists of the patterns to
   *       include. The patterns are delimited by "|" (that is, a pipe), for example,
   *         <code>"/folder1|/folder2"</code>. </p>
   */
  Includes?: FilterRule[];

  /**
   * <p>Specifies a list of filter rules that determines which files to exclude from a task. The
   *       list contains a single filter string that consists of the patterns to exclude. The patterns
   *       are delimited by "|" (that is, a pipe), for example, <code>"/folder1|/folder2"</code>. </p>
   */
  Excludes?: FilterRule[];

  /**
   * <p>Specifies the tags that you want to apply to the Amazon Resource Name (ARN) representing the task execution.</p>
   *          <p>
   *             <i>Tags</i> are key-value pairs that help you manage, filter, and search for your DataSync resources.</p>
   */
  Tags?: TagListEntry[];
}

/**
 * <p>StartTaskExecutionResponse</p>
 */
export interface StartTaskExecutionResponse {
  /**
   * <p>The ARN of the running task execution.</p>
   */
  TaskExecutionArn?: string;
}

/**
 * <p>TagResourceRequest</p>
 */
export interface TagResourceRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the resource to apply the tag to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Specifies the tags that you want to apply to the resource.</p>
   */
  Tags: TagListEntry[] | undefined;
}

export interface TagResourceResponse {}

/**
 * <p>UntagResourceRequest</p>
 */
export interface UntagResourceRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the resource to remove the tags from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Specifies the keys in the tags that you want to remove.</p>
   */
  Keys: string[] | undefined;
}

export interface UntagResourceResponse {}

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

export interface UpdateAgentResponse {}

export interface UpdateLocationHdfsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the source HDFS cluster location.</p>
   */
  LocationArn: string | undefined;

  /**
   * <p>A subdirectory in the HDFS cluster. This subdirectory is used to read data from or write
   *       data to the HDFS cluster.</p>
   */
  Subdirectory?: string;

  /**
   * <p>The NameNode that manages the HDFS namespace. The NameNode performs operations such as
   *       opening, closing, and renaming files and directories. The NameNode contains the information to
   *       map blocks of data to the DataNodes. You can use only one NameNode.</p>
   */
  NameNodes?: HdfsNameNode[];

  /**
   * <p>The size of the data blocks to write into the HDFS cluster. </p>
   */
  BlockSize?: number;

  /**
   * <p>The number of DataNodes to replicate the data to when writing to the HDFS cluster. </p>
   */
  ReplicationFactor?: number;

  /**
   * <p>The URI of the HDFS cluster's Key Management Server (KMS). </p>
   */
  KmsKeyProviderUri?: string;

  /**
   * <p>The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC)
   *       and data transfer privacy settings configured on the Hadoop Distributed File System (HDFS)
   *       cluster. </p>
   */
  QopConfiguration?: QopConfiguration;

  /**
   * <p>The type of authentication used to determine the identity of the user. </p>
   */
  AuthenticationType?: HdfsAuthenticationType | string;

  /**
   * <p>The user name used to identify the client on the host operating system.</p>
   */
  SimpleUser?: string;

  /**
   * <p>The Kerberos principal with access to the files and folders on the HDFS cluster. </p>
   */
  KerberosPrincipal?: string;

  /**
   * <p>The Kerberos key table (keytab) that contains mappings between the defined Kerberos
   *       principal and the encrypted keys. You can load the keytab from a file by providing the file's
   *       address. If you use the CLI, it performs base64 encoding for you. Otherwise,
   *       provide the base64-encoded text.</p>
   */
  KerberosKeytab?: Uint8Array;

  /**
   * <p>The <code>krb5.conf</code> file that contains the Kerberos configuration information. You
   *       can load the <code>krb5.conf</code> file by providing the file's address. If you're using the
   *         CLI, it performs the base64 encoding for you. Otherwise, provide the
   *       base64-encoded text.</p>
   */
  KerberosKrb5Conf?: Uint8Array;

  /**
   * <p>The ARNs of the agents that are used to connect to the HDFS cluster. </p>
   */
  AgentArns?: string[];
}

export interface UpdateLocationHdfsResponse {}

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
   * <p>Specifies how DataSync can access a location using the NFS protocol.</p>
   */
  MountOptions?: NfsMountOptions;
}

export interface UpdateLocationNfsResponse {}

export interface UpdateLocationObjectStorageRequest {
  /**
   * <p>Specifies the ARN of the object storage system location that you're updating.</p>
   */
  LocationArn: string | undefined;

  /**
   * <p>Specifies the port that your object storage server accepts inbound network traffic on (for
   *       example, port 443).</p>
   */
  ServerPort?: number;

  /**
   * <p>Specifies the protocol that your object storage server uses to communicate.</p>
   */
  ServerProtocol?: ObjectStorageServerProtocol | string;

  /**
   * <p>Specifies the object prefix for your object storage server. If this is a source location,
   *       DataSync only copies objects with this prefix. If this is a destination location, DataSync
   *       writes all objects with this prefix.</p>
   */
  Subdirectory?: string;

  /**
   * <p>Specifies the access key (for example, a user name) if credentials are required to
   *       authenticate with the object storage server.</p>
   */
  AccessKey?: string;

  /**
   * <p>Specifies the secret key (for example, a password) if credentials are required to
   *       authenticate with the object storage server.</p>
   */
  SecretKey?: string;

  /**
   * <p>Specifies the Amazon Resource Names (ARNs) of the DataSync agents that can securely connect with
   *       your location.</p>
   */
  AgentArns?: string[];

  /**
   * <p>Specifies a certificate to authenticate with an object storage system that uses a private
   *       or self-signed certificate authority (CA). You must specify a Base64-encoded <code>.pem</code>
   *       file (for example, <code>file:///home/user/.ssh/storage_sys_certificate.pem</code>). The certificate can be up to 32768 bytes (before Base64 encoding).</p>
   *          <p>To use this parameter, configure <code>ServerProtocol</code> to <code>HTTPS</code>.</p>
   *          <p>Updating the certificate doesn't interfere with tasks that you have in progress.</p>
   */
  ServerCertificate?: Uint8Array;
}

export interface UpdateLocationObjectStorageResponse {}

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
   * <p>Specifies how DataSync can access a location using the SMB protocol.</p>
   */
  MountOptions?: SmbMountOptions;
}

export interface UpdateLocationSmbResponse {}

/**
 * <p>UpdateTaskResponse</p>
 */
export interface UpdateTaskRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource name of the task to update.</p>
   */
  TaskArn: string | undefined;

  /**
   * <p>Configures your DataSync task settings. These options include how DataSync handles files, objects, and their associated metadata. You also can specify how
   *         DataSync verifies data integrity, set bandwidth limits for your task, among other
   *       options.</p>
   *          <p>Each task setting has a default value. Unless you need to, you don't have to configure
   *       any of these <code>Options</code> before starting your task.</p>
   */
  Options?: Options;

  /**
   * <p>Specifies a list of filter rules that exclude specific data during your transfer. For more information and examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html">Filtering data transferred by DataSync</a>.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource name of the Amazon CloudWatch log
   *       group.</p>
   */
  CloudWatchLogGroupArn?: string;

  /**
   * <p>Specifies a list of filter rules that include specific data during your transfer. For more information and examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html">Filtering data transferred by DataSync</a>.</p>
   */
  Includes?: FilterRule[];
}

export interface UpdateTaskResponse {}

export interface UpdateTaskExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the specific task execution that is being updated. </p>
   */
  TaskExecutionArn: string | undefined;

  /**
   * <p>Configures your DataSync task settings. These options include how DataSync handles files, objects, and their associated metadata. You also can specify how
   *         DataSync verifies data integrity, set bandwidth limits for your task, among other
   *       options.</p>
   *          <p>Each task setting has a default value. Unless you need to, you don't have to configure
   *       any of these <code>Options</code> before starting your task.</p>
   */
  Options: Options | undefined;
}

export interface UpdateTaskExecutionResponse {}

/**
 * @internal
 */
export const AgentListEntryFilterSensitiveLog = (obj: AgentListEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelTaskExecutionRequestFilterSensitiveLog = (obj: CancelTaskExecutionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelTaskExecutionResponseFilterSensitiveLog = (obj: CancelTaskExecutionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagListEntryFilterSensitiveLog = (obj: TagListEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAgentRequestFilterSensitiveLog = (obj: CreateAgentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAgentResponseFilterSensitiveLog = (obj: CreateAgentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Ec2ConfigFilterSensitiveLog = (obj: Ec2Config): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLocationEfsRequestFilterSensitiveLog = (obj: CreateLocationEfsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLocationEfsResponseFilterSensitiveLog = (obj: CreateLocationEfsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLocationFsxLustreRequestFilterSensitiveLog = (obj: CreateLocationFsxLustreRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLocationFsxLustreResponseFilterSensitiveLog = (obj: CreateLocationFsxLustreResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NfsMountOptionsFilterSensitiveLog = (obj: NfsMountOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FsxProtocolNfsFilterSensitiveLog = (obj: FsxProtocolNfs): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SmbMountOptionsFilterSensitiveLog = (obj: SmbMountOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FsxProtocolSmbFilterSensitiveLog = (obj: FsxProtocolSmb): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FsxProtocolFilterSensitiveLog = (obj: FsxProtocol): any => ({
  ...obj,
  ...(obj.SMB && { SMB: FsxProtocolSmbFilterSensitiveLog(obj.SMB) }),
});

/**
 * @internal
 */
export const CreateLocationFsxOntapRequestFilterSensitiveLog = (obj: CreateLocationFsxOntapRequest): any => ({
  ...obj,
  ...(obj.Protocol && { Protocol: FsxProtocolFilterSensitiveLog(obj.Protocol) }),
});

/**
 * @internal
 */
export const CreateLocationFsxOntapResponseFilterSensitiveLog = (obj: CreateLocationFsxOntapResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLocationFsxOpenZfsRequestFilterSensitiveLog = (obj: CreateLocationFsxOpenZfsRequest): any => ({
  ...obj,
  ...(obj.Protocol && { Protocol: FsxProtocolFilterSensitiveLog(obj.Protocol) }),
});

/**
 * @internal
 */
export const CreateLocationFsxOpenZfsResponseFilterSensitiveLog = (obj: CreateLocationFsxOpenZfsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLocationFsxWindowsRequestFilterSensitiveLog = (obj: CreateLocationFsxWindowsRequest): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateLocationFsxWindowsResponseFilterSensitiveLog = (obj: CreateLocationFsxWindowsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HdfsNameNodeFilterSensitiveLog = (obj: HdfsNameNode): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QopConfigurationFilterSensitiveLog = (obj: QopConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLocationHdfsRequestFilterSensitiveLog = (obj: CreateLocationHdfsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLocationHdfsResponseFilterSensitiveLog = (obj: CreateLocationHdfsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OnPremConfigFilterSensitiveLog = (obj: OnPremConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLocationNfsRequestFilterSensitiveLog = (obj: CreateLocationNfsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLocationNfsResponseFilterSensitiveLog = (obj: CreateLocationNfsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLocationObjectStorageRequestFilterSensitiveLog = (obj: CreateLocationObjectStorageRequest): any => ({
  ...obj,
  ...(obj.SecretKey && { SecretKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateLocationObjectStorageResponseFilterSensitiveLog = (
  obj: CreateLocationObjectStorageResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ConfigFilterSensitiveLog = (obj: S3Config): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLocationS3RequestFilterSensitiveLog = (obj: CreateLocationS3Request): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLocationS3ResponseFilterSensitiveLog = (obj: CreateLocationS3Response): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLocationSmbRequestFilterSensitiveLog = (obj: CreateLocationSmbRequest): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateLocationSmbResponseFilterSensitiveLog = (obj: CreateLocationSmbResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterRuleFilterSensitiveLog = (obj: FilterRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OptionsFilterSensitiveLog = (obj: Options): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TaskScheduleFilterSensitiveLog = (obj: TaskSchedule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTaskRequestFilterSensitiveLog = (obj: CreateTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTaskResponseFilterSensitiveLog = (obj: CreateTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAgentRequestFilterSensitiveLog = (obj: DeleteAgentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAgentResponseFilterSensitiveLog = (obj: DeleteAgentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLocationRequestFilterSensitiveLog = (obj: DeleteLocationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLocationResponseFilterSensitiveLog = (obj: DeleteLocationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTaskRequestFilterSensitiveLog = (obj: DeleteTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTaskResponseFilterSensitiveLog = (obj: DeleteTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAgentRequestFilterSensitiveLog = (obj: DescribeAgentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrivateLinkConfigFilterSensitiveLog = (obj: PrivateLinkConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAgentResponseFilterSensitiveLog = (obj: DescribeAgentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLocationEfsRequestFilterSensitiveLog = (obj: DescribeLocationEfsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLocationEfsResponseFilterSensitiveLog = (obj: DescribeLocationEfsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLocationFsxLustreRequestFilterSensitiveLog = (obj: DescribeLocationFsxLustreRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLocationFsxLustreResponseFilterSensitiveLog = (obj: DescribeLocationFsxLustreResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLocationFsxOntapRequestFilterSensitiveLog = (obj: DescribeLocationFsxOntapRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLocationFsxOntapResponseFilterSensitiveLog = (obj: DescribeLocationFsxOntapResponse): any => ({
  ...obj,
  ...(obj.Protocol && { Protocol: FsxProtocolFilterSensitiveLog(obj.Protocol) }),
});

/**
 * @internal
 */
export const DescribeLocationFsxOpenZfsRequestFilterSensitiveLog = (obj: DescribeLocationFsxOpenZfsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLocationFsxOpenZfsResponseFilterSensitiveLog = (obj: DescribeLocationFsxOpenZfsResponse): any => ({
  ...obj,
  ...(obj.Protocol && { Protocol: FsxProtocolFilterSensitiveLog(obj.Protocol) }),
});

/**
 * @internal
 */
export const DescribeLocationFsxWindowsRequestFilterSensitiveLog = (obj: DescribeLocationFsxWindowsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLocationFsxWindowsResponseFilterSensitiveLog = (obj: DescribeLocationFsxWindowsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLocationHdfsRequestFilterSensitiveLog = (obj: DescribeLocationHdfsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLocationHdfsResponseFilterSensitiveLog = (obj: DescribeLocationHdfsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLocationNfsRequestFilterSensitiveLog = (obj: DescribeLocationNfsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLocationNfsResponseFilterSensitiveLog = (obj: DescribeLocationNfsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLocationObjectStorageRequestFilterSensitiveLog = (
  obj: DescribeLocationObjectStorageRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLocationObjectStorageResponseFilterSensitiveLog = (
  obj: DescribeLocationObjectStorageResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLocationS3RequestFilterSensitiveLog = (obj: DescribeLocationS3Request): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLocationS3ResponseFilterSensitiveLog = (obj: DescribeLocationS3Response): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLocationSmbRequestFilterSensitiveLog = (obj: DescribeLocationSmbRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLocationSmbResponseFilterSensitiveLog = (obj: DescribeLocationSmbResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTaskRequestFilterSensitiveLog = (obj: DescribeTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTaskResponseFilterSensitiveLog = (obj: DescribeTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTaskExecutionRequestFilterSensitiveLog = (obj: DescribeTaskExecutionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TaskExecutionResultDetailFilterSensitiveLog = (obj: TaskExecutionResultDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTaskExecutionResponseFilterSensitiveLog = (obj: DescribeTaskExecutionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAgentsRequestFilterSensitiveLog = (obj: ListAgentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAgentsResponseFilterSensitiveLog = (obj: ListAgentsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LocationFilterFilterSensitiveLog = (obj: LocationFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLocationsRequestFilterSensitiveLog = (obj: ListLocationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LocationListEntryFilterSensitiveLog = (obj: LocationListEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLocationsResponseFilterSensitiveLog = (obj: ListLocationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTaskExecutionsRequestFilterSensitiveLog = (obj: ListTaskExecutionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TaskExecutionListEntryFilterSensitiveLog = (obj: TaskExecutionListEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTaskExecutionsResponseFilterSensitiveLog = (obj: ListTaskExecutionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TaskFilterFilterSensitiveLog = (obj: TaskFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTasksRequestFilterSensitiveLog = (obj: ListTasksRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TaskListEntryFilterSensitiveLog = (obj: TaskListEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTasksResponseFilterSensitiveLog = (obj: ListTasksResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartTaskExecutionRequestFilterSensitiveLog = (obj: StartTaskExecutionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartTaskExecutionResponseFilterSensitiveLog = (obj: StartTaskExecutionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAgentRequestFilterSensitiveLog = (obj: UpdateAgentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAgentResponseFilterSensitiveLog = (obj: UpdateAgentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLocationHdfsRequestFilterSensitiveLog = (obj: UpdateLocationHdfsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLocationHdfsResponseFilterSensitiveLog = (obj: UpdateLocationHdfsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLocationNfsRequestFilterSensitiveLog = (obj: UpdateLocationNfsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLocationNfsResponseFilterSensitiveLog = (obj: UpdateLocationNfsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLocationObjectStorageRequestFilterSensitiveLog = (obj: UpdateLocationObjectStorageRequest): any => ({
  ...obj,
  ...(obj.SecretKey && { SecretKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateLocationObjectStorageResponseFilterSensitiveLog = (
  obj: UpdateLocationObjectStorageResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLocationSmbRequestFilterSensitiveLog = (obj: UpdateLocationSmbRequest): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateLocationSmbResponseFilterSensitiveLog = (obj: UpdateLocationSmbResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTaskRequestFilterSensitiveLog = (obj: UpdateTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTaskResponseFilterSensitiveLog = (obj: UpdateTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTaskExecutionRequestFilterSensitiveLog = (obj: UpdateTaskExecutionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTaskExecutionResponseFilterSensitiveLog = (obj: UpdateTaskExecutionResponse): any => ({
  ...obj,
});
