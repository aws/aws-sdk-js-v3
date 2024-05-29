// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DataSyncServiceException as __BaseException } from "./DataSyncServiceException";

/**
 * <p>The credentials that provide DataSync Discovery read access to your on-premises storage system's
 *       management interface.</p>
 *          <p>DataSync Discovery stores these credentials in <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html">Secrets Manager</a>. For more
 *       information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-configure-storage.html">Accessing your on-premises
 *         storage system</a>.</p>
 * @public
 */
export interface Credentials {
  /**
   * <p>Specifies the user name for your storage system's management interface.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>Specifies the password for your storage system's management interface.</p>
   * @public
   */
  Password: string | undefined;
}

/**
 * <p>The network settings that DataSync Discovery uses to connect with your on-premises storage system's
 *       management interface.</p>
 * @public
 */
export interface DiscoveryServerConfiguration {
  /**
   * <p>The domain name or IP address of your storage system's management interface.</p>
   * @public
   */
  ServerHostname: string | undefined;

  /**
   * <p>The network port for accessing the storage system's management interface.</p>
   * @public
   */
  ServerPort?: number;
}

/**
 * @public
 * @enum
 */
export const DiscoverySystemType = {
  NetAppONTAP: "NetAppONTAP",
} as const;

/**
 * @public
 */
export type DiscoverySystemType = (typeof DiscoverySystemType)[keyof typeof DiscoverySystemType];

/**
 * <p>A key-value pair representing a single tag that's been applied to an Amazon Web Services
 *       resource.</p>
 * @public
 */
export interface TagListEntry {
  /**
   * <p>The key for an Amazon Web Services resource tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value for an Amazon Web Services resource tag.</p>
   * @public
   */
  Value?: string;
}

/**
 * @public
 */
export interface AddStorageSystemRequest {
  /**
   * <p>Specifies the server name and network port required to connect with the management
   *       interface of your on-premises storage system.</p>
   * @public
   */
  ServerConfiguration: DiscoveryServerConfiguration | undefined;

  /**
   * <p>Specifies the type of on-premises storage system that you want DataSync Discovery to collect
   *       information about.</p>
   *          <note>
   *             <p>DataSync Discovery currently supports NetApp
   *         Fabric-Attached
   *         Storage (FAS) and All Flash FAS (AFF) systems running ONTAP 9.7 or
   *         later.</p>
   *          </note>
   * @public
   */
  SystemType: DiscoverySystemType | undefined;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the DataSync agent that connects to
   *       and reads from your on-premises storage system's management interface. You can only specify
   *       one ARN.</p>
   * @public
   */
  AgentArns: string[] | undefined;

  /**
   * <p>Specifies the ARN of the Amazon CloudWatch log group for monitoring and logging
   *       discovery job events.</p>
   * @public
   */
  CloudWatchLogGroupArn?: string;

  /**
   * <p>Specifies labels that help you categorize, filter, and search for your Amazon Web Services
   *       resources. We recommend creating at least a name tag for your on-premises storage
   *       system.</p>
   * @public
   */
  Tags?: TagListEntry[];

  /**
   * <p>Specifies a familiar name for your on-premises storage system.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Specifies a client token to make sure requests with this API operation are idempotent. If
   *       you don't specify a client token, DataSync generates one for you
   *       automatically.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>Specifies the user name and password for accessing your on-premises storage system's
   *       management interface.</p>
   * @public
   */
  Credentials: Credentials | undefined;
}

/**
 * @public
 */
export interface AddStorageSystemResponse {
  /**
   * <p>The ARN of the on-premises storage system that you can use with DataSync Discovery.</p>
   * @public
   */
  StorageSystemArn: string | undefined;
}

/**
 * <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 * @public
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
 * @public
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
 * <p>The platform-related details about the DataSync agent, such as the version
 *       number.</p>
 * @public
 */
export interface Platform {
  /**
   * <p>The version of the DataSync agent.</p>
   * @public
   */
  Version?: string;
}

/**
 * @public
 * @enum
 */
export const AgentStatus = {
  OFFLINE: "OFFLINE",
  ONLINE: "ONLINE",
} as const;

/**
 * @public
 */
export type AgentStatus = (typeof AgentStatus)[keyof typeof AgentStatus];

/**
 * <p>Represents a single entry in a list (or array) of DataSync agents when
 *       you call the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListAgents.html">ListAgents</a> operation.</p>
 * @public
 */
export interface AgentListEntry {
  /**
   * <p>The Amazon Resource Name (ARN) of a DataSync agent.</p>
   * @public
   */
  AgentArn?: string;

  /**
   * <p>The name of an agent.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The status of an agent.</p>
   *          <ul>
   *             <li>
   *                <p>If the status is <code>ONLINE</code>, the agent is configured properly and ready to
   *           use.</p>
   *             </li>
   *             <li>
   *                <p>If the status is <code>OFFLINE</code>, the agent has been out of contact with
   *           DataSync for five minutes or longer. This can happen for a few reasons. For
   *           more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/troubleshooting-datasync-agents.html#troubleshoot-agent-offline">What do I do if my agent is offline?</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: AgentStatus;

  /**
   * <p>The platform-related details about the agent, such as the version number.</p>
   * @public
   */
  Platform?: Platform;
}

/**
 * @public
 * @enum
 */
export const Atime = {
  BEST_EFFORT: "BEST_EFFORT",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type Atime = (typeof Atime)[keyof typeof Atime];

/**
 * @public
 * @enum
 */
export const AzureAccessTier = {
  ARCHIVE: "ARCHIVE",
  COOL: "COOL",
  HOT: "HOT",
} as const;

/**
 * @public
 */
export type AzureAccessTier = (typeof AzureAccessTier)[keyof typeof AzureAccessTier];

/**
 * @public
 * @enum
 */
export const AzureBlobAuthenticationType = {
  SAS: "SAS",
} as const;

/**
 * @public
 */
export type AzureBlobAuthenticationType =
  (typeof AzureBlobAuthenticationType)[keyof typeof AzureBlobAuthenticationType];

/**
 * <p>The shared access signature (SAS) configuration that allows DataSync to access your Microsoft Azure Blob Storage.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#azure-blob-sas-tokens">SAS
 *         tokens</a> for accessing your Azure Blob Storage.</p>
 * @public
 */
export interface AzureBlobSasConfiguration {
  /**
   * <p>Specifies a SAS token that provides permissions to access your Azure Blob Storage.</p>
   *          <p>The token is part of the SAS URI string that comes after the storage resource URI and a question mark. A token looks something like this:</p>
   *          <p>
   *             <code>sp=r&st=2023-12-20T14:54:52Z&se=2023-12-20T22:54:52Z&spr=https&sv=2021-06-08&sr=c&sig=aBBKDWQvyuVcTPH9EBp%2FXTI9E%2F%2Fmq171%2BZU178wcwqU%3D</code>
   *          </p>
   * @public
   */
  Token: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AzureBlobType = {
  BLOCK: "BLOCK",
} as const;

/**
 * @public
 */
export type AzureBlobType = (typeof AzureBlobType)[keyof typeof AzureBlobType];

/**
 * <p>CancelTaskExecutionRequest</p>
 * @public
 */
export interface CancelTaskExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the task execution to stop.</p>
   * @public
   */
  TaskExecutionArn: string | undefined;
}

/**
 * @public
 */
export interface CancelTaskExecutionResponse {}

/**
 * <p>The storage capacity of an on-premises storage system resource (for example, a
 *       volume).</p>
 * @public
 */
export interface Capacity {
  /**
   * <p>The amount of space that's being used in a storage system resource.</p>
   * @public
   */
  Used?: number;

  /**
   * <p>The total amount of space available in a storage system resource.</p>
   * @public
   */
  Provisioned?: number;

  /**
   * <p>The amount of space that's being used in a storage system resource without accounting for
   *       compression or deduplication.</p>
   * @public
   */
  LogicalUsed?: number;

  /**
   * <p>The amount of space in the cluster that's in cloud storage (for example, if you're using data tiering).</p>
   * @public
   */
  ClusterCloudStorageUsed?: number;
}

/**
 * <p>CreateAgentRequest</p>
 * @public
 */
export interface CreateAgentRequest {
  /**
   * <p>Specifies your DataSync agent's activation key. If you don't have an
   *       activation key, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/activate-agent.html">Activate your agent</a>.</p>
   * @public
   */
  ActivationKey: string | undefined;

  /**
   * <p>Specifies a name for your agent. You can see this name in the DataSync
   *       console.</p>
   * @public
   */
  AgentName?: string;

  /**
   * <p>Specifies labels that help you categorize, filter, and search for your Amazon Web Services resources.
   *       We recommend creating at least one tag for your agent.</p>
   * @public
   */
  Tags?: TagListEntry[];

  /**
   * <p>Specifies the ID of the VPC endpoint that you want your agent to connect to. For example,
   *       a VPC endpoint ID looks like <code>vpce-01234d5aff67890e1</code>.</p>
   *          <important>
   *             <p>The VPC endpoint you use must include the DataSync service name (for example,
   *           <code>com.amazonaws.us-east-2.datasync</code>).</p>
   *          </important>
   * @public
   */
  VpcEndpointId?: string;

  /**
   * <p>Specifies the ARN of the subnet where you want to run your DataSync task when
   *       using a VPC endpoint. This is the subnet where DataSync creates and manages the
   *         <a href="https://docs.aws.amazon.com/datasync/latest/userguide/datasync-network.html#required-network-interfaces">network
   *         interfaces</a> for your transfer. You can only specify one ARN.</p>
   * @public
   */
  SubnetArns?: string[];

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the security group that protects your task's
   *         <a href="https://docs.aws.amazon.com/datasync/latest/userguide/datasync-network.html#required-network-interfaces">network
   *         interfaces</a> when <a href="https://docs.aws.amazon.com/datasync/latest/userguide/choose-service-endpoint.html#choose-service-endpoint-vpc">using a virtual private cloud (VPC) endpoint</a>. You can only specify one ARN.</p>
   * @public
   */
  SecurityGroupArns?: string[];
}

/**
 * <p>CreateAgentResponse</p>
 * @public
 */
export interface CreateAgentResponse {
  /**
   * <p>The ARN of the agent that you just activated. Use the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListAgents.html">ListAgents</a> operation to return a
   *       list of agents in your Amazon Web Services account and Amazon Web Services Region.</p>
   * @public
   */
  AgentArn?: string;
}

/**
 * @public
 */
export interface CreateLocationAzureBlobRequest {
  /**
   * <p>Specifies the URL of the Azure Blob Storage container involved in your transfer.</p>
   * @public
   */
  ContainerUrl: string | undefined;

  /**
   * <p>Specifies the authentication method DataSync uses to access your Azure Blob Storage. DataSync can access blob storage using a shared access signature (SAS).</p>
   * @public
   */
  AuthenticationType: AzureBlobAuthenticationType | undefined;

  /**
   * <p>Specifies the SAS configuration that allows DataSync to access your Azure Blob Storage.</p>
   * @public
   */
  SasConfiguration?: AzureBlobSasConfiguration;

  /**
   * <p>Specifies the type of blob that you want your objects or files to be when transferring
   *       them into Azure Blob Storage. Currently, DataSync only supports moving data into
   *       Azure Blob Storage as block blobs. For more information on blob types, see the <a href="https://learn.microsoft.com/en-us/rest/api/storageservices/understanding-block-blobs--append-blobs--and-page-blobs">Azure Blob Storage documentation</a>.</p>
   * @public
   */
  BlobType?: AzureBlobType;

  /**
   * <p>Specifies the access tier that you want your objects or files transferred into. This only applies when using the location as a transfer destination. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#azure-blob-access-tiers">Access tiers</a>.</p>
   * @public
   */
  AccessTier?: AzureAccessTier;

  /**
   * <p>Specifies path segments if you want to limit your transfer to a virtual directory in your
   *       container (for example, <code>/my/images</code>).</p>
   * @public
   */
  Subdirectory?: string;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the DataSync agent that can connect with your Azure Blob Storage container.</p>
   *          <p>You can specify more than one agent. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/multiple-agents.html">Using multiple
   *         agents for your transfer</a>.</p>
   * @public
   */
  AgentArns: string[] | undefined;

  /**
   * <p>Specifies labels that help you categorize, filter, and search for your Amazon Web Services resources. We recommend creating at least a name tag for your transfer location.</p>
   * @public
   */
  Tags?: TagListEntry[];
}

/**
 * @public
 */
export interface CreateLocationAzureBlobResponse {
  /**
   * <p>The ARN of the Azure Blob Storage transfer location that you created.</p>
   * @public
   */
  LocationArn?: string;
}

/**
 * <p>The subnet and security groups that DataSync uses to access your Amazon EFS file system.</p>
 * @public
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
   *                <p>In the same Availability Zone as at least one mount target for the Amazon EFS
   *           file system.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>You don't need to specify a subnet that includes a file system mount target.</p>
   *          </note>
   * @public
   */
  SubnetArn: string | undefined;

  /**
   * <p>Specifies the Amazon Resource Names (ARNs) of the security groups associated with an
   *         Amazon EFS file system's mount target.</p>
   * @public
   */
  SecurityGroupArns: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const EfsInTransitEncryption = {
  NONE: "NONE",
  TLS1_2: "TLS1_2",
} as const;

/**
 * @public
 */
export type EfsInTransitEncryption = (typeof EfsInTransitEncryption)[keyof typeof EfsInTransitEncryption];

/**
 * <p>CreateLocationEfsRequest</p>
 * @public
 */
export interface CreateLocationEfsRequest {
  /**
   * <p>Specifies a mount path for your Amazon EFS file system. This is where DataSync reads or writes data (depending on if this is a source or destination location).
   *       By default, DataSync uses the root directory, but you can also include
   *       subdirectories.</p>
   *          <note>
   *             <p>You must specify a value with forward slashes (for example,
   *         <code>/path/to/folder</code>).</p>
   *          </note>
   * @public
   */
  Subdirectory?: string;

  /**
   * <p>Specifies the ARN for the Amazon EFS file system.</p>
   * @public
   */
  EfsFilesystemArn: string | undefined;

  /**
   * <p>Specifies the subnet and security groups DataSync uses to access your Amazon EFS file system.</p>
   * @public
   */
  Ec2Config: Ec2Config | undefined;

  /**
   * <p>Specifies the key-value pair that represents a tag that you want to add to the
   *       resource. The value can be an empty string. This value helps you manage, filter, and search
   *       for your resources. We recommend that you create a name tag for your location.</p>
   * @public
   */
  Tags?: TagListEntry[];

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the access point that DataSync uses
   *       to access the Amazon EFS file system.</p>
   * @public
   */
  AccessPointArn?: string;

  /**
   * <p>Specifies an Identity and Access Management (IAM) role that DataSync
   *       assumes when mounting the Amazon EFS file system.</p>
   * @public
   */
  FileSystemAccessRoleArn?: string;

  /**
   * <p>Specifies whether you want DataSync to use Transport Layer Security (TLS) 1.2
   *       encryption when it copies data to or from the Amazon EFS file system.</p>
   *          <p>If you specify an access point using <code>AccessPointArn</code> or an IAM
   *       role using <code>FileSystemAccessRoleArn</code>, you must set this parameter to
   *         <code>TLS1_2</code>.</p>
   * @public
   */
  InTransitEncryption?: EfsInTransitEncryption;
}

/**
 * <p>CreateLocationEfs</p>
 * @public
 */
export interface CreateLocationEfsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon EFS file system location that you
   *       create.</p>
   * @public
   */
  LocationArn?: string;
}

/**
 * @public
 */
export interface CreateLocationFsxLustreRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the FSx for Lustre file system.</p>
   * @public
   */
  FsxFilesystemArn: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the security groups that are used to configure the
   *         FSx for Lustre file system.</p>
   * @public
   */
  SecurityGroupArns: string[] | undefined;

  /**
   * <p>A subdirectory in the location's path. This subdirectory in the FSx for Lustre
   *       file system is used to read data from the FSx for Lustre source location or write
   *       data to the FSx for Lustre destination.</p>
   * @public
   */
  Subdirectory?: string;

  /**
   * <p>The key-value pair that represents a tag that you want to add to the resource. The value
   *       can be an empty string. This value helps you manage, filter, and search for your resources. We
   *       recommend that you create a name tag for your location.</p>
   * @public
   */
  Tags?: TagListEntry[];
}

/**
 * @public
 */
export interface CreateLocationFsxLustreResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the FSx for Lustre file system location that's
   *       created. </p>
   * @public
   */
  LocationArn?: string;
}

/**
 * @public
 * @enum
 */
export const NfsVersion = {
  AUTOMATIC: "AUTOMATIC",
  NFS3: "NFS3",
  NFS4_0: "NFS4_0",
  NFS4_1: "NFS4_1",
} as const;

/**
 * @public
 */
export type NfsVersion = (typeof NfsVersion)[keyof typeof NfsVersion];

/**
 * <p>Specifies how DataSync can access a location using the NFS protocol.</p>
 * @public
 */
export interface NfsMountOptions {
  /**
   * <p>Specifies the NFS version that you want DataSync to use when mounting your NFS
   *       share. If the server refuses to use the version specified, the task fails.</p>
   *          <p>You can specify the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AUTOMATIC</code> (default): DataSync chooses NFS version 4.1.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NFS3</code>: Stateless protocol version that allows for asynchronous writes on
   *           the server.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NFSv4_0</code>: Stateful, firewall-friendly protocol version that supports
   *           delegations and pseudo file systems.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NFSv4_1</code>: Stateful protocol version that supports sessions, directory
   *           delegations, and parallel data processing. NFS version 4.1 also includes all features
   *           available in version 4.0.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>DataSync currently only supports NFS version 3 with Amazon FSx for NetApp ONTAP locations.</p>
   *          </note>
   * @public
   */
  Version?: NfsVersion;
}

/**
 * <p>Specifies the Network File System (NFS) protocol configuration that DataSync
 *       uses to access your Amazon FSx for OpenZFS or Amazon FSx for NetApp ONTAP file
 *       system.</p>
 * @public
 */
export interface FsxProtocolNfs {
  /**
   * <p>Specifies how DataSync can access a location using the NFS protocol.</p>
   * @public
   */
  MountOptions?: NfsMountOptions;
}

/**
 * @public
 * @enum
 */
export const SmbVersion = {
  AUTOMATIC: "AUTOMATIC",
  SMB1: "SMB1",
  SMB2: "SMB2",
  SMB2_0: "SMB2_0",
  SMB3: "SMB3",
} as const;

/**
 * @public
 */
export type SmbVersion = (typeof SmbVersion)[keyof typeof SmbVersion];

/**
 * <p>Specifies the version of the Server Message Block (SMB) protocol that DataSync uses to access an SMB file server.</p>
 * @public
 */
export interface SmbMountOptions {
  /**
   * <p>By default, DataSync automatically chooses an SMB protocol version based on
   *       negotiation with your SMB file server. You also can configure DataSync to use a
   *       specific SMB version, but we recommend doing this only if DataSync has trouble
   *       negotiating with the SMB file server automatically.</p>
   *          <p>These are the following options for configuring the SMB version:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AUTOMATIC</code> (default): DataSync and the SMB file server negotiate
   *           the highest version of SMB that they mutually support between 2.1 and 3.1.1.</p>
   *                <p>This is the recommended option. If you instead choose a specific version that your
   *           file server doesn't support, you may get an <code>Operation Not Supported</code>
   *           error.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SMB3</code>: Restricts the protocol negotiation to only SMB version
   *           3.0.2.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SMB2</code>: Restricts the protocol negotiation to only SMB version 2.1.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SMB2_0</code>: Restricts the protocol negotiation to only SMB version
   *           2.0.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SMB1</code>: Restricts the protocol negotiation to only SMB version 1.0.</p>
   *                <note>
   *                   <p>The <code>SMB1</code> option isn't available when <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationFsxOntap.html">creating an Amazon FSx for NetApp ONTAP location</a>.</p>
   *                </note>
   *             </li>
   *          </ul>
   * @public
   */
  Version?: SmbVersion;
}

/**
 * <p>Specifies the Server Message Block (SMB) protocol configuration that DataSync uses to access your Amazon FSx for NetApp ONTAP file system. For more information, see
 *         <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html#create-ontap-location-access">Accessing FSx for ONTAP file systems</a>.</p>
 * @public
 */
export interface FsxProtocolSmb {
  /**
   * <p>Specifies the fully qualified domain name (FQDN) of the Microsoft Active Directory that
   *       your storage virtual machine (SVM) belongs to.</p>
   *          <p>If you have multiple domains in your environment, configuring this setting makes sure that
   *       DataSync connects to the right SVM.</p>
   * @public
   */
  Domain?: string;

  /**
   * <p>Specifies the version of the Server Message Block (SMB) protocol that DataSync uses to access an SMB file server.</p>
   * @public
   */
  MountOptions?: SmbMountOptions;

  /**
   * <p>Specifies the password of a user who has permission to access your SVM.</p>
   * @public
   */
  Password: string | undefined;

  /**
   * <p>Specifies a user that can mount and access the files, folders, and metadata in your SVM.</p>
   *          <p>For information about choosing a user with the right level of access for your transfer, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html#create-ontap-location-smb">Using
   *         the SMB protocol</a>.</p>
   * @public
   */
  User: string | undefined;
}

/**
 * <p>Specifies the data transfer protocol that DataSync uses to access your
 *         Amazon FSx file system.</p>
 * @public
 */
export interface FsxProtocol {
  /**
   * <p>Specifies the Network File System (NFS) protocol configuration that DataSync
   *       uses to access your FSx for OpenZFS file system or FSx for ONTAP file
   *       system's storage virtual machine (SVM).</p>
   * @public
   */
  NFS?: FsxProtocolNfs;

  /**
   * <p>Specifies the Server Message Block (SMB) protocol configuration that DataSync
   *       uses to access your FSx for ONTAP file system's SVM.</p>
   * @public
   */
  SMB?: FsxProtocolSmb;
}

/**
 * @public
 */
export interface CreateLocationFsxOntapRequest {
  /**
   * <p>Specifies the data transfer protocol that DataSync uses to access your
   *         Amazon FSx file system.</p>
   * @public
   */
  Protocol: FsxProtocol | undefined;

  /**
   * <p>Specifies the Amazon EC2 security groups that provide access to your file system's
   *       preferred subnet.</p>
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
   * @public
   */
  SecurityGroupArns: string[] | undefined;

  /**
   * <p>Specifies the ARN of the storage virtual machine (SVM) in your file system where you want
   *       to copy data to or from.</p>
   * @public
   */
  StorageVirtualMachineArn: string | undefined;

  /**
   * <p>Specifies a path to the file share in the SVM where you'll copy your data.</p>
   *          <p>You can specify a junction path (also known as a mount point), qtree path (for NFS file
   *       shares), or share name (for SMB file shares). For example, your mount path might be
   *         <code>/vol1</code>, <code>/vol1/tree1</code>, or <code>/share1</code>.</p>
   *          <note>
   *             <p>Don't specify a junction path in the SVM's root volume. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html">Managing FSx for ONTAP storage virtual machines</a> in the <i>Amazon FSx for NetApp ONTAP User Guide</i>.</p>
   *          </note>
   * @public
   */
  Subdirectory?: string;

  /**
   * <p>Specifies labels that help you categorize, filter, and search for your Amazon Web Services
   *       resources. We recommend creating at least a name tag for your location.</p>
   * @public
   */
  Tags?: TagListEntry[];
}

/**
 * @public
 */
export interface CreateLocationFsxOntapResponse {
  /**
   * <p>Specifies the ARN of the FSx for ONTAP file system location that you
   *       create.</p>
   * @public
   */
  LocationArn?: string;
}

/**
 * @public
 */
export interface CreateLocationFsxOpenZfsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the FSx for OpenZFS file system.</p>
   * @public
   */
  FsxFilesystemArn: string | undefined;

  /**
   * <p>The type of protocol that DataSync uses to access your file system.</p>
   * @public
   */
  Protocol: FsxProtocol | undefined;

  /**
   * <p>The ARNs of the security groups that are used to configure the FSx for OpenZFS file
   *       system.</p>
   * @public
   */
  SecurityGroupArns: string[] | undefined;

  /**
   * <p>A subdirectory in the location's path that must begin with <code>/fsx</code>. DataSync uses this subdirectory to read or write data (depending on whether the file
   *       system is a source or destination location).</p>
   * @public
   */
  Subdirectory?: string;

  /**
   * <p>The key-value pair that represents a tag that you want to add to the resource. The value
   *       can be an empty string. This value helps you manage, filter, and search for your resources. We
   *       recommend that you create a name tag for your location.</p>
   * @public
   */
  Tags?: TagListEntry[];
}

/**
 * @public
 */
export interface CreateLocationFsxOpenZfsResponse {
  /**
   * <p>The ARN of the FSx for OpenZFS file system location that you created.</p>
   * @public
   */
  LocationArn?: string;
}

/**
 * @public
 */
export interface CreateLocationFsxWindowsRequest {
  /**
   * <p>Specifies a mount path for your file system using forward slashes. This is where DataSync reads or writes data (depending on if this is a source or destination
   *       location).</p>
   * @public
   */
  Subdirectory?: string;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) for the FSx for Windows File Server file
   *       system.</p>
   * @public
   */
  FsxFilesystemArn: string | undefined;

  /**
   * <p>Specifies the ARNs of the security groups that provide access to your file system's
   *       preferred subnet.</p>
   *          <note>
   *             <p>If you choose a security group that doesn't allow connections from within itself, do one
   *         of the following:</p>
   *             <ul>
   *                <li>
   *                   <p>Configure the security group to allow it to communicate within itself.</p>
   *                </li>
   *                <li>
   *                   <p>Choose a different security group that can communicate with the mount target's
   *             security group.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  SecurityGroupArns: string[] | undefined;

  /**
   * <p>Specifies labels that help you categorize, filter, and search for your Amazon Web Services
   *       resources. We recommend creating at least a name tag for your location.</p>
   * @public
   */
  Tags?: TagListEntry[];

  /**
   * <p>Specifies the user with the permissions to mount and access the files, folders, and file
   *       metadata in your FSx for Windows File Server file system.</p>
   *          <p>For information about choosing a user with the right level of access for your transfer, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-fsx-location.html#create-fsx-windows-location-permissions">required permissions</a> for FSx for Windows File Server locations.</p>
   * @public
   */
  User: string | undefined;

  /**
   * <p>Specifies the name of the Microsoft Active Directory domain that the FSx for Windows File Server file system belongs to.</p>
   *          <p>If you have multiple Active Directory domains in your environment, configuring this
   *       parameter makes sure that DataSync connects to the right file system.</p>
   * @public
   */
  Domain?: string;

  /**
   * <p>Specifies the password of the user with the permissions to mount and access the files,
   *       folders, and file metadata in your FSx for Windows File Server file system.</p>
   * @public
   */
  Password: string | undefined;
}

/**
 * @public
 */
export interface CreateLocationFsxWindowsResponse {
  /**
   * <p>The ARN of the FSx for Windows File Server file system location you created.</p>
   * @public
   */
  LocationArn?: string;
}

/**
 * @public
 * @enum
 */
export const HdfsAuthenticationType = {
  KERBEROS: "KERBEROS",
  SIMPLE: "SIMPLE",
} as const;

/**
 * @public
 */
export type HdfsAuthenticationType = (typeof HdfsAuthenticationType)[keyof typeof HdfsAuthenticationType];

/**
 * <p>The NameNode of the Hadoop Distributed File System (HDFS). The NameNode manages the file
 *       system's namespace. The NameNode performs operations such as opening, closing, and renaming
 *       files and directories. The NameNode contains the information to map blocks of data to the
 *       DataNodes.</p>
 * @public
 */
export interface HdfsNameNode {
  /**
   * <p>The hostname of the NameNode in the HDFS cluster. This value is the IP address or Domain
   *       Name Service (DNS) name of the NameNode. An agent that's installed on-premises uses this
   *       hostname to communicate with the NameNode in the network.</p>
   * @public
   */
  Hostname: string | undefined;

  /**
   * <p>The port that the NameNode uses to listen to client requests.</p>
   * @public
   */
  Port: number | undefined;
}

/**
 * @public
 * @enum
 */
export const HdfsDataTransferProtection = {
  AUTHENTICATION: "AUTHENTICATION",
  DISABLED: "DISABLED",
  INTEGRITY: "INTEGRITY",
  PRIVACY: "PRIVACY",
} as const;

/**
 * @public
 */
export type HdfsDataTransferProtection = (typeof HdfsDataTransferProtection)[keyof typeof HdfsDataTransferProtection];

/**
 * @public
 * @enum
 */
export const HdfsRpcProtection = {
  AUTHENTICATION: "AUTHENTICATION",
  DISABLED: "DISABLED",
  INTEGRITY: "INTEGRITY",
  PRIVACY: "PRIVACY",
} as const;

/**
 * @public
 */
export type HdfsRpcProtection = (typeof HdfsRpcProtection)[keyof typeof HdfsRpcProtection];

/**
 * <p>The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC)
 *       and data transfer privacy settings configured on the Hadoop Distributed File System (HDFS)
 *       cluster.</p>
 * @public
 */
export interface QopConfiguration {
  /**
   * <p>The RPC protection setting configured on the HDFS cluster. This setting corresponds to
   *       your <code>hadoop.rpc.protection</code> setting in your <code>core-site.xml</code> file on
   *       your Hadoop cluster.</p>
   * @public
   */
  RpcProtection?: HdfsRpcProtection;

  /**
   * <p>The data transfer protection setting configured on the HDFS cluster. This setting
   *       corresponds to your <code>dfs.data.transfer.protection</code> setting in the
   *         <code>hdfs-site.xml</code> file on your Hadoop cluster.</p>
   * @public
   */
  DataTransferProtection?: HdfsDataTransferProtection;
}

/**
 * @public
 */
export interface CreateLocationHdfsRequest {
  /**
   * <p>A subdirectory in the HDFS cluster. This subdirectory is used to read data from or write
   *       data to the HDFS cluster. If the subdirectory isn't specified, it will default to
   *         <code>/</code>.</p>
   * @public
   */
  Subdirectory?: string;

  /**
   * <p>The NameNode that manages the HDFS namespace. The NameNode performs operations such as
   *       opening, closing, and renaming files and directories. The NameNode contains the information to
   *       map blocks of data to the DataNodes. You can use only one NameNode.</p>
   * @public
   */
  NameNodes: HdfsNameNode[] | undefined;

  /**
   * <p>The size of data blocks to write into the HDFS cluster. The block size must be a multiple
   *       of 512 bytes. The default block size is 128 mebibytes (MiB).</p>
   * @public
   */
  BlockSize?: number;

  /**
   * <p>The number of DataNodes to replicate the data to when writing to the HDFS cluster. By
   *       default, data is replicated to three DataNodes.</p>
   * @public
   */
  ReplicationFactor?: number;

  /**
   * <p>The URI of the HDFS cluster's Key Management Server (KMS). </p>
   * @public
   */
  KmsKeyProviderUri?: string;

  /**
   * <p>The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC)
   *       and data transfer protection settings configured on the Hadoop Distributed File System (HDFS)
   *       cluster. If <code>QopConfiguration</code> isn't specified, <code>RpcProtection</code> and
   *         <code>DataTransferProtection</code> default to <code>PRIVACY</code>. If you set
   *         <code>RpcProtection</code> or <code>DataTransferProtection</code>, the other parameter
   *       assumes the same value. </p>
   * @public
   */
  QopConfiguration?: QopConfiguration;

  /**
   * <p>The type of authentication used to determine the identity of the user. </p>
   * @public
   */
  AuthenticationType: HdfsAuthenticationType | undefined;

  /**
   * <p>The user name used to identify the client on the host operating system. </p>
   *          <note>
   *             <p>If <code>SIMPLE</code> is specified for <code>AuthenticationType</code>, this parameter
   *         is required. </p>
   *          </note>
   * @public
   */
  SimpleUser?: string;

  /**
   * <p>The Kerberos principal with access to the files and folders on the HDFS cluster. </p>
   *          <note>
   *             <p>If <code>KERBEROS</code> is specified for <code>AuthenticationType</code>, this
   *         parameter is required.</p>
   *          </note>
   * @public
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
   * @public
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
   * @public
   */
  KerberosKrb5Conf?: Uint8Array;

  /**
   * <p>The Amazon Resource Names (ARNs) of the agents that are used to connect to the HDFS
   *       cluster.</p>
   * @public
   */
  AgentArns: string[] | undefined;

  /**
   * <p>The key-value pair that represents the tag that you want to add to the location. The value
   *       can be an empty string. We recommend using tags to name your resources. </p>
   * @public
   */
  Tags?: TagListEntry[];
}

/**
 * @public
 */
export interface CreateLocationHdfsResponse {
  /**
   * <p>The ARN of the source HDFS cluster location that's created. </p>
   * @public
   */
  LocationArn?: string;
}

/**
 * <p>The DataSync agents that are connecting to a Network File System (NFS)
 *       location.</p>
 * @public
 */
export interface OnPremConfig {
  /**
   * <p>The Amazon Resource Names (ARNs) of the agents connecting to a transfer
   *       location.</p>
   * @public
   */
  AgentArns: string[] | undefined;
}

/**
 * <p>CreateLocationNfsRequest</p>
 * @public
 */
export interface CreateLocationNfsRequest {
  /**
   * <p>Specifies the export path in your NFS file server that you want DataSync to
   *       mount.</p>
   *          <p>This path (or a subdirectory of the path) is where DataSync transfers data to
   *       or from. For information on configuring an export for DataSync, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html#accessing-nfs">Accessing NFS file servers</a>.</p>
   * @public
   */
  Subdirectory: string | undefined;

  /**
   * <p>Specifies the Domain Name System (DNS) name or IP version 4 address of the NFS file
   *       server that your DataSync agent connects to.</p>
   * @public
   */
  ServerHostname: string | undefined;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the DataSync agent that want to
   *       connect to your NFS file server.</p>
   *          <p>You can specify more than one agent. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/multiple-agents.html">Using multiple
   *         agents for transfers</a>.</p>
   * @public
   */
  OnPremConfig: OnPremConfig | undefined;

  /**
   * <p>Specifies the options that DataSync can use to mount your NFS file
   *       server.</p>
   * @public
   */
  MountOptions?: NfsMountOptions;

  /**
   * <p>Specifies labels that help you categorize, filter, and search for your Amazon Web Services resources.
   *       We recommend creating at least a name tag for your location.</p>
   * @public
   */
  Tags?: TagListEntry[];
}

/**
 * <p>CreateLocationNfsResponse</p>
 * @public
 */
export interface CreateLocationNfsResponse {
  /**
   * <p>The ARN of the transfer location that you created for your NFS file server.</p>
   * @public
   */
  LocationArn?: string;
}

/**
 * @public
 * @enum
 */
export const ObjectStorageServerProtocol = {
  HTTP: "HTTP",
  HTTPS: "HTTPS",
} as const;

/**
 * @public
 */
export type ObjectStorageServerProtocol =
  (typeof ObjectStorageServerProtocol)[keyof typeof ObjectStorageServerProtocol];

/**
 * <p>CreateLocationObjectStorageRequest</p>
 * @public
 */
export interface CreateLocationObjectStorageRequest {
  /**
   * <p>Specifies the domain name or IP address of the object storage server. A DataSync
   *       agent uses this hostname to mount the object storage server in a network.</p>
   * @public
   */
  ServerHostname: string | undefined;

  /**
   * <p>Specifies the port that your object storage server accepts inbound network traffic on (for
   *       example, port 443).</p>
   * @public
   */
  ServerPort?: number;

  /**
   * <p>Specifies the protocol that your object storage server uses to communicate.</p>
   * @public
   */
  ServerProtocol?: ObjectStorageServerProtocol;

  /**
   * <p>Specifies the object prefix for your object storage server. If this is a source location,
   *         DataSync only copies objects with this prefix. If this is a destination location,
   *         DataSync writes all objects with this prefix. </p>
   * @public
   */
  Subdirectory?: string;

  /**
   * <p>Specifies the name of the object storage bucket involved in the transfer.</p>
   * @public
   */
  BucketName: string | undefined;

  /**
   * <p>Specifies the access key (for example, a user name) if credentials are required to
   *       authenticate with the object storage server.</p>
   * @public
   */
  AccessKey?: string;

  /**
   * <p>Specifies the secret key (for example, a password) if credentials are required to
   *       authenticate with the object storage server.</p>
   * @public
   */
  SecretKey?: string;

  /**
   * <p>Specifies the Amazon Resource Names (ARNs) of the DataSync agents that can
   *       securely connect with your location.</p>
   * @public
   */
  AgentArns: string[] | undefined;

  /**
   * <p>Specifies the key-value pair that represents a tag that you want to add to the resource.
   *       Tags can help you manage, filter, and search for your resources. We recommend creating a name
   *       tag for your location.</p>
   * @public
   */
  Tags?: TagListEntry[];

  /**
   * <p>Specifies a certificate chain for DataSync to authenticate with your object
   *       storage system if the system uses a private or self-signed certificate authority (CA). You
   *       must specify a single <code>.pem</code> file with a full certificate chain (for example,
   *         <code>file:///home/user/.ssh/object_storage_certificates.pem</code>).</p>
   *          <p>The certificate chain might include:</p>
   *          <ul>
   *             <li>
   *                <p>The object storage system's certificate</p>
   *             </li>
   *             <li>
   *                <p>All intermediate certificates (if there are any)</p>
   *             </li>
   *             <li>
   *                <p>The root certificate of the signing CA</p>
   *             </li>
   *          </ul>
   *          <p>You can concatenate your certificates into a <code>.pem</code> file (which can be up to
   *       32768 bytes before base64 encoding). The following example <code>cat</code> command creates an
   *         <code>object_storage_certificates.pem</code> file that includes three certificates:</p>
   *          <p>
   *             <code>cat object_server_certificate.pem intermediate_certificate.pem
   *         ca_root_certificate.pem > object_storage_certificates.pem</code>
   *          </p>
   *          <p>To use this parameter, configure <code>ServerProtocol</code> to <code>HTTPS</code>.</p>
   * @public
   */
  ServerCertificate?: Uint8Array;
}

/**
 * <p>CreateLocationObjectStorageResponse</p>
 * @public
 */
export interface CreateLocationObjectStorageResponse {
  /**
   * <p>Specifies the ARN of the object storage system location that you create.</p>
   * @public
   */
  LocationArn?: string;
}

/**
 * <p>Specifies the Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that DataSync uses to access your S3 bucket.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-access">Accessing
 *         S3 buckets</a>.</p>
 * @public
 */
export interface S3Config {
  /**
   * <p>Specifies the ARN of the IAM role that DataSync uses to access
   *       your S3 bucket.</p>
   * @public
   */
  BucketAccessRoleArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const S3StorageClass = {
  DEEP_ARCHIVE: "DEEP_ARCHIVE",
  GLACIER: "GLACIER",
  GLACIER_INSTANT_RETRIEVAL: "GLACIER_INSTANT_RETRIEVAL",
  INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
  ONEZONE_IA: "ONEZONE_IA",
  OUTPOSTS: "OUTPOSTS",
  STANDARD: "STANDARD",
  STANDARD_IA: "STANDARD_IA",
} as const;

/**
 * @public
 */
export type S3StorageClass = (typeof S3StorageClass)[keyof typeof S3StorageClass];

/**
 * <p>CreateLocationS3Request</p>
 * @public
 */
export interface CreateLocationS3Request {
  /**
   * <p>Specifies a prefix in the S3 bucket that DataSync  reads from or writes to
   *       (depending on whether the bucket is a source or destination location).</p>
   *          <note>
   *             <p>DataSync can't transfer objects with a prefix that begins with a slash
   *         (<code>/</code>) or includes <code>//</code>, <code>/./</code>, or
   *         <code>/../</code> patterns. For example:</p>
   *             <ul>
   *                <li>
   *                   <p>
   *                      <code>/photos</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>photos//2006/January</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>photos/./2006/February</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>photos/../2006/March</code>
   *                   </p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  Subdirectory?: string;

  /**
   * <p>Specifies the ARN of the S3 bucket that you want to use as a location. (When creating
   *       your DataSync task later, you specify whether this location is a transfer source or
   *       destination.) </p>
   *          <p>If your S3 bucket is located on an Outposts resource, you must specify an Amazon S3 access
   *       point. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html">Managing data access with Amazon S3 access points</a> in the
   *       <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  S3BucketArn: string | undefined;

  /**
   * <p>Specifies the storage class that you want your objects to use when Amazon S3 is a
   *       transfer destination.</p>
   *          <p>For buckets in Amazon Web Services Regions, the storage class defaults to
   *         <code>STANDARD</code>. For buckets on Outposts, the storage class defaults to
   *         <code>OUTPOSTS</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes">Storage class
   *         considerations with Amazon S3 transfers</a>.</p>
   * @public
   */
  S3StorageClass?: S3StorageClass;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that DataSync uses to access your S3 bucket.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-access">Accessing
   *         S3 buckets</a>.</p>
   * @public
   */
  S3Config: S3Config | undefined;

  /**
   * <p>(Amazon S3 on Outposts only) Specifies the Amazon Resource Name (ARN) of the DataSync agent on your Outpost.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/deploy-agents.html#outposts-agent">Deploy your DataSync agent
   *         on Outposts</a>.</p>
   * @public
   */
  AgentArns?: string[];

  /**
   * <p>Specifies labels that help you categorize, filter, and search for your Amazon Web Services resources.
   *       We recommend creating at least a name tag for your transfer location.</p>
   * @public
   */
  Tags?: TagListEntry[];
}

/**
 * <p>CreateLocationS3Response</p>
 * @public
 */
export interface CreateLocationS3Response {
  /**
   * <p>The ARN of the S3 location that you created.</p>
   * @public
   */
  LocationArn?: string;
}

/**
 * <p>CreateLocationSmbRequest</p>
 * @public
 */
export interface CreateLocationSmbRequest {
  /**
   * <p>Specifies the name of the share exported by your SMB file server where DataSync
   *       will read or write data. You can include a subdirectory in the share path (for example,
   *         <code>/path/to/subdirectory</code>). Make sure that other SMB clients in your network can
   *       also mount this path.</p>
   *          <p>To copy all data in the subdirectory, DataSync must be able to mount the SMB
   *       share and access all of its data. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html#configuring-smb-permissions">required permissions</a> for SMB locations.</p>
   * @public
   */
  Subdirectory: string | undefined;

  /**
   * <p>Specifies the Domain Name Service (DNS) name or IP address of the SMB file server that
   *       your DataSync agent will mount.</p>
   *          <note>
   *             <p>You can't specify an IP version 6 (IPv6) address.</p>
   *          </note>
   * @public
   */
  ServerHostname: string | undefined;

  /**
   * <p>Specifies the user that can mount and access the files, folders, and file metadata in your
   *       SMB file server.</p>
   *          <p>For information about choosing a user with the right level of access for your transfer,
   *       see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html#configuring-smb-permissions">required permissions</a> for SMB locations.</p>
   * @public
   */
  User: string | undefined;

  /**
   * <p>Specifies the name of the Active Directory domain that your SMB file server belongs to. </p>
   *          <p>If you have multiple Active Directory domains in your environment, configuring this
   *       parameter makes sure that DataSync connects to the right file server.</p>
   * @public
   */
  Domain?: string;

  /**
   * <p>Specifies the password of the user who can mount your SMB file server and has permission
   *       to access the files and folders involved in your transfer.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html#configuring-smb-permissions">required permissions</a> for SMB locations.</p>
   * @public
   */
  Password: string | undefined;

  /**
   * <p>Specifies the DataSync agent (or agents) which you want to connect to your SMB
   *       file server. You specify an agent by using its Amazon Resource Name (ARN).</p>
   * @public
   */
  AgentArns: string[] | undefined;

  /**
   * <p>Specifies the version of the SMB protocol that DataSync uses to access your SMB
   *       file server.</p>
   * @public
   */
  MountOptions?: SmbMountOptions;

  /**
   * <p>Specifies labels that help you categorize, filter, and search for your Amazon Web Services
   *       resources. We recommend creating at least a name tag for your location.</p>
   * @public
   */
  Tags?: TagListEntry[];
}

/**
 * <p>CreateLocationSmbResponse</p>
 * @public
 */
export interface CreateLocationSmbResponse {
  /**
   * <p>The ARN of the SMB location that you created.</p>
   * @public
   */
  LocationArn?: string;
}

/**
 * @public
 * @enum
 */
export const FilterType = {
  SIMPLE_PATTERN: "SIMPLE_PATTERN",
} as const;

/**
 * @public
 */
export type FilterType = (typeof FilterType)[keyof typeof FilterType];

/**
 * <p>Specifies which files, folders, and objects to include or exclude when transferring files
 *       from source to destination.</p>
 * @public
 */
export interface FilterRule {
  /**
   * <p>The type of filter rule to apply. DataSync only supports the SIMPLE_PATTERN
   *       rule type.</p>
   * @public
   */
  FilterType?: FilterType;

  /**
   * <p>A single filter string that consists of the patterns to include or exclude. The patterns
   *       are delimited by "|" (that is, a pipe), for example: <code>/folder1|/folder2</code>
   *          </p>
   *          <p> </p>
   * @public
   */
  Value?: string;
}

/**
 * @public
 * @enum
 */
export const ManifestAction = {
  TRANSFER: "TRANSFER",
} as const;

/**
 * @public
 */
export type ManifestAction = (typeof ManifestAction)[keyof typeof ManifestAction];

/**
 * @public
 * @enum
 */
export const ManifestFormat = {
  CSV: "CSV",
} as const;

/**
 * @public
 */
export type ManifestFormat = (typeof ManifestFormat)[keyof typeof ManifestFormat];

/**
 * <p>Specifies the S3 bucket where you're hosting the manifest that you want DataSync to use. For more information and configuration examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/transferring-with-manifest.html">Specifying what DataSync transfers by using a manifest</a>.</p>
 * @public
 */
export interface S3ManifestConfig {
  /**
   * <p>Specifies the Amazon S3 object key of your manifest. This can include a prefix
   *       (for example, <code>prefix/my-manifest.csv</code>).</p>
   * @public
   */
  ManifestObjectPath: string | undefined;

  /**
   * <p>Specifies the Identity and Access Management (IAM) role that allows DataSync to access your
   *       manifest. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/transferring-with-manifest.html#transferring-with-manifest-access">Providing DataSync access to your manifest</a>.</p>
   * @public
   */
  BucketAccessRoleArn: string | undefined;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the S3 bucket where you're hosting your manifest.</p>
   * @public
   */
  S3BucketArn: string | undefined;

  /**
   * <p>Specifies the object version ID of the manifest that you want DataSync to use.
   *       If you don't set this, DataSync uses the latest version of the object.</p>
   * @public
   */
  ManifestObjectVersionId?: string;
}

/**
 * <p>Specifies the manifest that you want DataSync to use and where it's hosted.
 *       For more information and configuration examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/transferring-with-manifest.html">Specifying what DataSync transfers by using a manifest</a>.</p>
 * @public
 */
export interface SourceManifestConfig {
  /**
   * <p>Specifies the S3 bucket where you're hosting your manifest.</p>
   * @public
   */
  S3: S3ManifestConfig | undefined;
}

/**
 * <p>Configures a manifest, which is a list of files or objects that you want DataSync to transfer. For more information and configuration examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/transferring-with-manifest.html">Specifying what DataSync transfers by using a manifest</a>.</p>
 * @public
 */
export interface ManifestConfig {
  /**
   * <p>Specifies what DataSync uses the manifest for.</p>
   * @public
   */
  Action?: ManifestAction;

  /**
   * <p>Specifies the file format of your manifest. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/transferring-with-manifest.html#transferring-with-manifest-create">Creating a manifest</a>.</p>
   * @public
   */
  Format?: ManifestFormat;

  /**
   * <p>Specifies the manifest that you want DataSync to use and where it's
   *       hosted.</p>
   *          <note>
   *             <p>You must specify this parameter if you're configuring a new manifest on or after February 7,
   *         2024.</p>
   *             <p>If you don't, you'll get a 400 status code and <code>ValidationException</code> error
   *         stating that you're missing the IAM role for DataSync to access the
   *         S3 bucket where you're hosting your manifest. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/transferring-with-manifest.html#transferring-with-manifest-access">Providing DataSync access to your manifest</a>.</p>
   *          </note>
   * @public
   */
  Source?: SourceManifestConfig;
}

/**
 * @public
 * @enum
 */
export const Gid = {
  BOTH: "BOTH",
  INT_VALUE: "INT_VALUE",
  NAME: "NAME",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type Gid = (typeof Gid)[keyof typeof Gid];

/**
 * @public
 * @enum
 */
export const LogLevel = {
  BASIC: "BASIC",
  OFF: "OFF",
  TRANSFER: "TRANSFER",
} as const;

/**
 * @public
 */
export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

/**
 * @public
 * @enum
 */
export const Mtime = {
  NONE: "NONE",
  PRESERVE: "PRESERVE",
} as const;

/**
 * @public
 */
export type Mtime = (typeof Mtime)[keyof typeof Mtime];

/**
 * @public
 * @enum
 */
export const ObjectTags = {
  NONE: "NONE",
  PRESERVE: "PRESERVE",
} as const;

/**
 * @public
 */
export type ObjectTags = (typeof ObjectTags)[keyof typeof ObjectTags];

/**
 * @public
 * @enum
 */
export const OverwriteMode = {
  ALWAYS: "ALWAYS",
  NEVER: "NEVER",
} as const;

/**
 * @public
 */
export type OverwriteMode = (typeof OverwriteMode)[keyof typeof OverwriteMode];

/**
 * @public
 * @enum
 */
export const PosixPermissions = {
  NONE: "NONE",
  PRESERVE: "PRESERVE",
} as const;

/**
 * @public
 */
export type PosixPermissions = (typeof PosixPermissions)[keyof typeof PosixPermissions];

/**
 * @public
 * @enum
 */
export const PreserveDeletedFiles = {
  PRESERVE: "PRESERVE",
  REMOVE: "REMOVE",
} as const;

/**
 * @public
 */
export type PreserveDeletedFiles = (typeof PreserveDeletedFiles)[keyof typeof PreserveDeletedFiles];

/**
 * @public
 * @enum
 */
export const PreserveDevices = {
  NONE: "NONE",
  PRESERVE: "PRESERVE",
} as const;

/**
 * @public
 */
export type PreserveDevices = (typeof PreserveDevices)[keyof typeof PreserveDevices];

/**
 * @public
 * @enum
 */
export const SmbSecurityDescriptorCopyFlags = {
  NONE: "NONE",
  OWNER_DACL: "OWNER_DACL",
  OWNER_DACL_SACL: "OWNER_DACL_SACL",
} as const;

/**
 * @public
 */
export type SmbSecurityDescriptorCopyFlags =
  (typeof SmbSecurityDescriptorCopyFlags)[keyof typeof SmbSecurityDescriptorCopyFlags];

/**
 * @public
 * @enum
 */
export const TaskQueueing = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type TaskQueueing = (typeof TaskQueueing)[keyof typeof TaskQueueing];

/**
 * @public
 * @enum
 */
export const TransferMode = {
  ALL: "ALL",
  CHANGED: "CHANGED",
} as const;

/**
 * @public
 */
export type TransferMode = (typeof TransferMode)[keyof typeof TransferMode];

/**
 * @public
 * @enum
 */
export const Uid = {
  BOTH: "BOTH",
  INT_VALUE: "INT_VALUE",
  NAME: "NAME",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type Uid = (typeof Uid)[keyof typeof Uid];

/**
 * @public
 * @enum
 */
export const VerifyMode = {
  NONE: "NONE",
  ONLY_FILES_TRANSFERRED: "ONLY_FILES_TRANSFERRED",
  POINT_IN_TIME_CONSISTENT: "POINT_IN_TIME_CONSISTENT",
} as const;

/**
 * @public
 */
export type VerifyMode = (typeof VerifyMode)[keyof typeof VerifyMode];

/**
 * <p>Indicates how your transfer task is configured. These options include how DataSync handles files, objects, and their associated metadata during your transfer. You
 *       also can specify how to verify data integrity, set bandwidth limits for your task, among other
 *       options.</p>
 *          <p>Each option has a default value. Unless you need to, you don't have to configure any option before calling <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>.</p>
 *          <p>You also can override your task options for each task execution. For example, you might want to adjust the <code>LogLevel</code> for an individual execution.</p>
 * @public
 */
export interface Options {
  /**
   * <p>Specifies how and when DataSync checks the integrity of your data during a
   *       transfer.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ONLY_FILES_TRANSFERRED</code> (recommended) - DataSync calculates
   *           the checksum of transferred files and metadata at the source location. At the end of the
   *           transfer, DataSync then compares this checksum to the checksum calculated on
   *           those files at the destination.</p>
   *                <p>We recommend this option when transferring to S3 Glacier Flexible Retrieval
   *           or S3 Glacier Deep Archive storage classes. For more information, see
   *             <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes">Storage
   *             class considerations with Amazon S3 locations</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>POINT_IN_TIME_CONSISTENT</code> (default) - At the end of the transfer,
   *             DataSync scans the entire source and destination to verify that both locations
   *           are fully synchronized.</p>
   *                <p>If you use a <a href="https://docs.aws.amazon.com/datasync/latest/userguide/transferring-with-manifest.html">manifest</a>, DataSync only scans and
   *           verifies what's listed in the manifest.</p>
   *                <p>You can't use this option when transferring to S3 Glacier Flexible Retrieval
   *           or S3 Glacier Deep Archive storage classes. For more information, see
   *             <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes">Storage
   *             class considerations with Amazon S3 locations</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - DataSync doesn't run additional verification at the
   *           end of the transfer. All data transmissions are still integrity-checked with checksum
   *           verification during the transfer.</p>
   *             </li>
   *          </ul>
   * @public
   */
  VerifyMode?: VerifyMode;

  /**
   * <p>Specifies whether DataSync should modify or preserve data at the destination
   *       location.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALWAYS</code> (default) - DataSync modifies data in the destination
   *           location when source data (including metadata) has changed.</p>
   *                <p>If DataSync overwrites objects, you might incur additional charges for
   *           certain Amazon S3 storage classes (for example, for retrieval or early deletion).
   *           For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes">Storage
   *             class considerations with Amazon S3 transfers</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEVER</code> - DataSync doesn't overwrite data in the destination
   *           location even if the source data has changed. You can use this option to protect against
   *           overwriting changes made to files or objects in the destination.</p>
   *             </li>
   *          </ul>
   * @public
   */
  OverwriteMode?: OverwriteMode;

  /**
   * <p>Specifies whether to preserve metadata indicating the last time a file was read or
   *       written to.</p>
   *          <note>
   *             <p>The behavior of <code>Atime</code> isn't fully standard across platforms, so DataSync can only do this on a best-effort basis.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BEST_EFFORT</code> (default) - DataSync attempts to preserve the
   *           original <code>Atime</code> attribute on all source files (that is, the version before the
   *             <code>PREPARING</code> phase of the task execution). This option is
   *           recommended.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - Ignores <code>Atime</code>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>If <code>Atime</code> is set to <code>BEST_EFFORT</code>, <code>Mtime</code> must be set
   *         to <code>PRESERVE</code>. </p>
   *             <p>If <code>Atime</code> is set to <code>NONE</code>, <code>Mtime</code> must also be
   *           <code>NONE</code>. </p>
   *          </note>
   * @public
   */
  Atime?: Atime;

  /**
   * <p>Specifies whether to preserve metadata indicating the last time that a file was written
   *       to before the <code>PREPARING</code> phase of your task execution. This option is required
   *       when you need to run the a task more than once.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PRESERVE</code> (default) - Preserves original <code>Mtime</code>, which is
   *           recommended.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - Ignores <code>Mtime</code>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>If <code>Mtime</code> is set to <code>PRESERVE</code>, <code>Atime</code> must be set to
   *           <code>BEST_EFFORT</code>.</p>
   *             <p>If <code>Mtime</code> is set to <code>NONE</code>, <code>Atime</code> must also be set
   *         to <code>NONE</code>. </p>
   *          </note>
   * @public
   */
  Mtime?: Mtime;

  /**
   * <p>Specifies the POSIX user ID (UID) of the file's owner.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INT_VALUE</code> (default) - Preserves the integer value of UID and group ID
   *           (GID), which is recommended.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - Ignores UID and GID. </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/special-files.html#metadata-copied">Metadata copied by DataSync</a>.</p>
   * @public
   */
  Uid?: Uid;

  /**
   * <p>Specifies the POSIX group ID (GID) of the file's owners.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INT_VALUE</code> (default) - Preserves the integer value of user ID (UID) and
   *           GID, which is recommended.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - Ignores UID and GID.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/special-files.html#metadata-copied">Metadata copied by DataSync</a>.</p>
   * @public
   */
  Gid?: Gid;

  /**
   * <p>Specifies whether files in the destination location that don't exist in the source
   *       should be preserved. This option can affect your Amazon S3 storage cost. If your task
   *       deletes objects, you might incur minimum storage duration charges for certain storage classes.
   *       For detailed information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes">Considerations
   *         when working with Amazon S3 storage classes in DataSync</a>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PRESERVE</code> (default) - Ignores such destination files, which is
   *           recommended. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REMOVE</code> - Deletes destination files that aren’t present in the
   *           source.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>If you set this parameter to <code>REMOVE</code>, you can't set
   *           <code>TransferMode</code> to <code>ALL</code>. When you transfer all data, DataSync doesn't scan your destination location and doesn't know what to delete.</p>
   *          </note>
   * @public
   */
  PreserveDeletedFiles?: PreserveDeletedFiles;

  /**
   * <p>Specifies whether DataSync should preserve the metadata of block and
   *       character devices in the source location and recreate the files with that device name and
   *       metadata on the destination. DataSync copies only the name and metadata of such
   *       devices.</p>
   *          <note>
   *             <p>DataSync can't copy the actual contents of these devices because they're
   *         nonterminal and don't return an end-of-file (EOF) marker.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code> (default) - Ignores special devices (recommended).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PRESERVE</code> - Preserves character and block device metadata. This option
   *           currently isn't supported for Amazon EFS.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PreserveDevices?: PreserveDevices;

  /**
   * <p>Specifies which users or groups can access a file for a specific purpose such as reading,
   *       writing, or execution of the file.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/special-files.html#metadata-copied">Metadata copied by DataSync</a>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PRESERVE</code> (default) - Preserves POSIX-style permissions, which is
   *           recommended.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - Ignores POSIX-style permissions. </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>DataSync can preserve extant permissions of a source location.</p>
   *          </note>
   * @public
   */
  PosixPermissions?: PosixPermissions;

  /**
   * <p>Limits the bandwidth used by a DataSync task. For example, if you want
   *         DataSync to use a maximum of 1 MB, set this value to <code>1048576</code>
   *         (<code>=1024*1024</code>).</p>
   * @public
   */
  BytesPerSecond?: number;

  /**
   * <p>Specifies whether your transfer tasks should be put into a queue during certain scenarios
   *       when <a href="https://docs.aws.amazon.com/datasync/latest/userguide/run-task.html#running-multiple-tasks">running multiple
   *         tasks</a>. This is <code>ENABLED</code> by default.</p>
   * @public
   */
  TaskQueueing?: TaskQueueing;

  /**
   * <p>Specifies the type of logs that DataSync publishes to a Amazon CloudWatch Logs
   *       log group. To specify the log group, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateTask.html#DataSync-CreateTask-request-CloudWatchLogGroupArn">CloudWatchLogGroupArn</a>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BASIC</code> - Publishes logs with only basic information (such as transfer
   *           errors).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TRANSFER</code> - Publishes logs for all files or objects that your DataSync task transfers and performs data-integrity checks on.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OFF</code> - No logs are published.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LogLevel?: LogLevel;

  /**
   * <p>Determines whether DataSync transfers only the data and metadata that differ
   *       between the source and the destination location or transfers all the content from the source
   *       (without comparing what's in the destination).</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CHANGED</code> (default) - DataSync copies only data or metadata that
   *           is new or different content from the source location to the destination location.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL</code> - DataSync copies everything in the source to the
   *           destination without comparing differences between the locations.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TransferMode?: TransferMode;

  /**
   * <p>Specifies which components of the SMB security descriptor are copied from source to
   *       destination objects. </p>
   *          <p>This value is only used for transfers between SMB and Amazon FSx for Windows File Server
   *       locations or between two FSx for Windows File Server locations. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/special-files.html">how DataSync handles metadata</a>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>OWNER_DACL</code> (default) - For each copied object, DataSync copies
   *           the following metadata:</p>
   *                <ul>
   *                   <li>
   *                      <p>The object owner.</p>
   *                   </li>
   *                   <li>
   *                      <p>NTFS discretionary access control lists (DACLs), which determine whether to grant
   *               access to an object.</p>
   *                      <p>DataSync won't copy NTFS system access control lists (SACLs) with this
   *               option.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OWNER_DACL_SACL</code> - For each copied object, DataSync copies the
   *           following metadata:</p>
   *                <ul>
   *                   <li>
   *                      <p>The object owner.</p>
   *                   </li>
   *                   <li>
   *                      <p>NTFS discretionary access control lists (DACLs), which determine whether to grant
   *               access to an object.</p>
   *                   </li>
   *                   <li>
   *                      <p>SACLs, which are used by administrators to log attempts to access a secured
   *               object.</p>
   *                      <p>Copying SACLs requires granting additional permissions to the Windows user that
   *                 DataSync uses to access your SMB location. For information about choosing
   *               a user with the right permissions, see required permissions for <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html#configuring-smb-permissions">SMB</a>, <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-fsx-location.html#create-fsx-windows-location-permissions">FSx for Windows File Server</a>, or <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html#create-ontap-location-smb">FSx for ONTAP</a> (depending
   *               on the type of location in your transfer).</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - None of the SMB security descriptor components are copied.
   *           Destination objects are owned by the user that was provided for accessing the destination
   *           location. DACLs and SACLs are set based on the destination server’s configuration. </p>
   *             </li>
   *          </ul>
   * @public
   */
  SecurityDescriptorCopyFlags?: SmbSecurityDescriptorCopyFlags;

  /**
   * <p>Specifies whether you want DataSync to <code>PRESERVE</code> object tags
   *       (default behavior) when transferring between object storage systems. If you want your DataSync task to ignore object tags, specify the <code>NONE</code> value.</p>
   * @public
   */
  ObjectTags?: ObjectTags;
}

/**
 * @public
 * @enum
 */
export const ScheduleStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ScheduleStatus = (typeof ScheduleStatus)[keyof typeof ScheduleStatus];

/**
 * <p>Configures your DataSync task to run on a <a href="https://docs.aws.amazon.com/datasync/latest/userguide/task-scheduling.html">schedule</a>
 *       (at a minimum interval of 1 hour).</p>
 * @public
 */
export interface TaskSchedule {
  /**
   * <p>Specifies your task schedule by using a cron expression in UTC time. For information about
   *       cron expression syntax, see the <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-cron-expressions.html">
   *                <i>Amazon EventBridge User
   *           Guide</i>
   *             </a>.</p>
   * @public
   */
  ScheduleExpression: string | undefined;

  /**
   * <p>Specifies whether to enable or disable your task schedule. Your schedule is enabled by
   *       default, but there can be situations where you need to disable it. For example, you might need
   *       to pause a recurring transfer to fix an issue with your task or perform maintenance on your
   *       storage system.</p>
   *          <p>DataSync might disable your schedule automatically if your task fails repeatedly
   *       with the same error. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_TaskScheduleDetails.html">TaskScheduleDetails</a>.</p>
   * @public
   */
  Status?: ScheduleStatus;
}

/**
 * <p>Specifies the Amazon S3 bucket where DataSync uploads your <a href="https://docs.aws.amazon.com/datasync/latest/userguide/task-reports.html">task report</a>.</p>
 * @public
 */
export interface ReportDestinationS3 {
  /**
   * <p>Specifies a bucket prefix for your report.</p>
   * @public
   */
  Subdirectory?: string;

  /**
   * <p>Specifies the ARN of the S3 bucket where DataSync uploads your report.</p>
   * @public
   */
  S3BucketArn: string | undefined;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the IAM policy that allows DataSync to upload a task report to your S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/task-reports.html">Allowing DataSync to upload a task report to an Amazon S3 bucket</a>.</p>
   * @public
   */
  BucketAccessRoleArn: string | undefined;
}

/**
 * <p>Specifies where DataSync uploads your <a href="https://docs.aws.amazon.com/datasync/latest/userguide/task-reports.html">task report</a>.</p>
 * @public
 */
export interface ReportDestination {
  /**
   * <p>Specifies the Amazon S3 bucket where DataSync uploads your task report.</p>
   * @public
   */
  S3?: ReportDestinationS3;
}

/**
 * @public
 * @enum
 */
export const ObjectVersionIds = {
  INCLUDE: "INCLUDE",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type ObjectVersionIds = (typeof ObjectVersionIds)[keyof typeof ObjectVersionIds];

/**
 * @public
 * @enum
 */
export const ReportOutputType = {
  STANDARD: "STANDARD",
  SUMMARY_ONLY: "SUMMARY_ONLY",
} as const;

/**
 * @public
 */
export type ReportOutputType = (typeof ReportOutputType)[keyof typeof ReportOutputType];

/**
 * @public
 * @enum
 */
export const ReportLevel = {
  ERRORS_ONLY: "ERRORS_ONLY",
  SUCCESSES_AND_ERRORS: "SUCCESSES_AND_ERRORS",
} as const;

/**
 * @public
 */
export type ReportLevel = (typeof ReportLevel)[keyof typeof ReportLevel];

/**
 * <p>Specifies the level of detail for a particular aspect of your DataSync
 *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/task-reports.html">task
 *         report</a>.</p>
 * @public
 */
export interface ReportOverride {
  /**
   * <p>Specifies whether your task report includes errors only or successes and errors.</p>
   *          <p>For example, your report might mostly include only what didn't go well in your transfer (<code>ERRORS_ONLY</code>). At the same time, you want to verify that your <a href="https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html">task filter</a> is working correctly. In this situation, you can get a list of what files DataSync successfully skipped and if something transferred that you didn't to transfer (<code>SUCCESSES_AND_ERRORS</code>).</p>
   * @public
   */
  ReportLevel?: ReportLevel;
}

/**
 * <p>The level of detail included in each aspect of your DataSync
 *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/task-reports.html">task
 *         report</a>.</p>
 * @public
 */
export interface ReportOverrides {
  /**
   * <p>Specifies the level of reporting for the files, objects, and directories that DataSync attempted to transfer.</p>
   * @public
   */
  Transferred?: ReportOverride;

  /**
   * <p>Specifies the level of reporting for the files, objects, and directories that DataSync attempted to verify at the end of your transfer.</p>
   * @public
   */
  Verified?: ReportOverride;

  /**
   * <p>Specifies the level of reporting for the files, objects, and directories that DataSync attempted to delete in your destination location. This only applies if you <a href="https://docs.aws.amazon.com/datasync/latest/userguide/configure-metadata.html">configure your task</a> to delete data in the destination that isn't in the source.</p>
   * @public
   */
  Deleted?: ReportOverride;

  /**
   * <p>Specifies the level of reporting for the files, objects, and directories that DataSync attempted to skip during your transfer.</p>
   * @public
   */
  Skipped?: ReportOverride;
}

/**
 * <p>Specifies how you want to configure a task report, which provides detailed information about for your DataSync transfer.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/task-reports.html">Task
 *         reports</a>.</p>
 * @public
 */
export interface TaskReportConfig {
  /**
   * <p>Specifies the Amazon S3 bucket where DataSync uploads your task report. For more
   *       information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/task-reports.html#task-report-access">Task reports</a>.</p>
   * @public
   */
  Destination?: ReportDestination;

  /**
   * <p>Specifies the type of task report that you want:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SUMMARY_ONLY</code>: Provides necessary details about your task, including the number of
   *           files, objects, and directories transferred and transfer duration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STANDARD</code>: Provides complete details about your task, including a full list of
   *           files, objects, and directories that were transferred, skipped, verified, and more.</p>
   *             </li>
   *          </ul>
   * @public
   */
  OutputType?: ReportOutputType;

  /**
   * <p>Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ERRORS_ONLY</code>: A report shows what DataSync was unable to transfer, skip,
   *           verify, and delete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCESSES_AND_ERRORS</code>: A report shows what DataSync was able and unable
   *           to transfer, skip, verify, and delete.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ReportLevel?: ReportLevel;

  /**
   * <p>Specifies whether your task report includes the new version of each object transferred into an S3 bucket. This only applies if you <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/manage-versioning-examples.html">enable versioning on your bucket</a>. Keep in mind that setting this to <code>INCLUDE</code> can increase the duration of your task execution.</p>
   * @public
   */
  ObjectVersionIds?: ObjectVersionIds;

  /**
   * <p>Customizes the reporting level for aspects of your task report. For example, your report
   *       might generally only include errors, but you could specify that you want a list of successes
   *       and errors just for the files that DataSync attempted to delete in your destination
   *       location.</p>
   * @public
   */
  Overrides?: ReportOverrides;
}

/**
 * <p>CreateTaskRequest</p>
 * @public
 */
export interface CreateTaskRequest {
  /**
   * <p>Specifies the ARN of your transfer's source location.</p>
   * @public
   */
  SourceLocationArn: string | undefined;

  /**
   * <p>Specifies the ARN of your transfer's destination location. </p>
   * @public
   */
  DestinationLocationArn: string | undefined;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of an Amazon CloudWatch log group for
   *       monitoring your task.</p>
   * @public
   */
  CloudWatchLogGroupArn?: string;

  /**
   * <p>Specifies the name of your task.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Specifies your task's settings, such as preserving file metadata, verifying data
   *       integrity, among other options.</p>
   * @public
   */
  Options?: Options;

  /**
   * <p>Specifies exclude filters that define the files, objects, and folders in your source location that you don't want DataSync to transfer. For more
   *       information and examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html">Specifying what DataSync transfers by using filters</a>.</p>
   * @public
   */
  Excludes?: FilterRule[];

  /**
   * <p>Specifies a schedule for when you want your task to run. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/task-scheduling.html">Scheduling your
   *         task</a>.</p>
   * @public
   */
  Schedule?: TaskSchedule;

  /**
   * <p>Specifies the tags that you want to apply to your task.</p>
   *          <p>
   *             <i>Tags</i> are key-value pairs that help you manage, filter, and search
   *       for your DataSync resources.</p>
   * @public
   */
  Tags?: TagListEntry[];

  /**
   * <p>Specifies include filters define the files, objects, and folders in your source location
   *       that you want DataSync to transfer. For more information and examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html">Specifying what DataSync transfers by using filters</a>.</p>
   * @public
   */
  Includes?: FilterRule[];

  /**
   * <p>Configures a manifest, which is a list of files or objects that you want DataSync to transfer. For more information and configuration examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/transferring-with-manifest.html">Specifying what DataSync transfers by using a manifest</a>.</p>
   *          <p>When using this parameter, your caller identity (the role that you're using DataSync with) must have the <code>iam:PassRole</code> permission. The <a href="https://docs.aws.amazon.com/datasync/latest/userguide/security-iam-awsmanpol.html#security-iam-awsmanpol-awsdatasyncfullaccess">AWSDataSyncFullAccess</a> policy includes this permission.</p>
   * @public
   */
  ManifestConfig?: ManifestConfig;

  /**
   * <p>Specifies how you want to configure a task report, which provides detailed information
   *       about your DataSync transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/task-reports.html">Monitoring your DataSync
   *         transfers with task reports</a>.</p>
   *          <p>When using this parameter, your caller identity (the role that you're using DataSync with) must have the <code>iam:PassRole</code> permission. The <a href="https://docs.aws.amazon.com/datasync/latest/userguide/security-iam-awsmanpol.html#security-iam-awsmanpol-awsdatasyncfullaccess">AWSDataSyncFullAccess</a> policy includes this permission.</p>
   * @public
   */
  TaskReportConfig?: TaskReportConfig;
}

/**
 * <p>CreateTaskResponse</p>
 * @public
 */
export interface CreateTaskResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the task.</p>
   * @public
   */
  TaskArn?: string;
}

/**
 * <p>DeleteAgentRequest</p>
 * @public
 */
export interface DeleteAgentRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the agent to delete. Use the <code>ListAgents</code>
   *       operation to return a list of agents for your account and Amazon Web Services Region.</p>
   * @public
   */
  AgentArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAgentResponse {}

/**
 * <p>DeleteLocation</p>
 * @public
 */
export interface DeleteLocationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the location to delete.</p>
   * @public
   */
  LocationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteLocationResponse {}

/**
 * <p>DeleteTask</p>
 * @public
 */
export interface DeleteTaskRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the task that you want to delete.</p>
   * @public
   */
  TaskArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTaskResponse {}

/**
 * <p>DescribeAgent</p>
 * @public
 */
export interface DescribeAgentRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the DataSync agent that you want
   *       information about.</p>
   * @public
   */
  AgentArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EndpointType = {
  FIPS: "FIPS",
  PRIVATE_LINK: "PRIVATE_LINK",
  PUBLIC: "PUBLIC",
} as const;

/**
 * @public
 */
export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

/**
 * <p>Specifies how your DataSync agent connects to Amazon Web Services using a
 *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/choose-service-endpoint.html#choose-service-endpoint-vpc">virtual private cloud (VPC) service endpoint</a>. An agent that uses a VPC endpoint isn't accessible over the public internet.</p>
 * @public
 */
export interface PrivateLinkConfig {
  /**
   * <p>Specifies the ID of the VPC endpoint that your agent connects to.</p>
   * @public
   */
  VpcEndpointId?: string;

  /**
   * <p>Specifies the VPC endpoint provided by <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-service.html">Amazon Web Services PrivateLink</a> that
   *       your agent connects to.</p>
   * @public
   */
  PrivateLinkEndpoint?: string;

  /**
   * <p>Specifies the ARN of the subnet where your VPC endpoint is located. You can only specify
   *       one ARN.</p>
   * @public
   */
  SubnetArns?: string[];

  /**
   * <p>Specifies the Amazon Resource Names (ARN) of the security group that provides DataSync access to your VPC endpoint. You can only specify one ARN.</p>
   * @public
   */
  SecurityGroupArns?: string[];
}

/**
 * <p>DescribeAgentResponse</p>
 * @public
 */
export interface DescribeAgentResponse {
  /**
   * <p>The ARN of the agent.</p>
   * @public
   */
  AgentArn?: string;

  /**
   * <p>The name of the agent.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The status of the agent.</p>
   *          <ul>
   *             <li>
   *                <p>If the status is <code>ONLINE</code>, the agent is configured properly and ready to
   *           use.</p>
   *             </li>
   *             <li>
   *                <p>If the status is <code>OFFLINE</code>, the agent has been out of contact with
   *             DataSync for five minutes or longer. This can happen for a few reasons. For
   *           more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/troubleshooting-datasync-agents.html#troubleshoot-agent-offline">What do I do if my agent is offline?</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: AgentStatus;

  /**
   * <p>The last time that the agent was communicating with the DataSync
   *       service.</p>
   * @public
   */
  LastConnectionTime?: Date;

  /**
   * <p>The time that the agent was <a href="https://docs.aws.amazon.com/datasync/latest/userguide/activate-agent.html">activated</a>.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The type of <a href="https://docs.aws.amazon.com/datasync/latest/userguide/choose-service-endpoint.html">service endpoint</a> that your agent is connected to.</p>
   * @public
   */
  EndpointType?: EndpointType;

  /**
   * <p>The network configuration that the agent uses when connecting to a <a href="https://docs.aws.amazon.com/datasync/latest/userguide/choose-service-endpoint.html#choose-service-endpoint-vpc">VPC
   *         service endpoint</a>.</p>
   * @public
   */
  PrivateLinkConfig?: PrivateLinkConfig;

  /**
   * <p>The platform-related details about the agent, such as the version number.</p>
   * @public
   */
  Platform?: Platform;
}

/**
 * @public
 */
export interface DescribeDiscoveryJobRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the discovery job that you want information
   *       about.</p>
   * @public
   */
  DiscoveryJobArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DiscoveryJobStatus = {
  COMPLETED: "COMPLETED",
  COMPLETED_WITH_ISSUES: "COMPLETED_WITH_ISSUES",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
  TERMINATED: "TERMINATED",
  WARNING: "WARNING",
} as const;

/**
 * @public
 */
export type DiscoveryJobStatus = (typeof DiscoveryJobStatus)[keyof typeof DiscoveryJobStatus];

/**
 * @public
 */
export interface DescribeDiscoveryJobResponse {
  /**
   * <p>The ARN of the on-premises storage system you're running the discovery job on.</p>
   * @public
   */
  StorageSystemArn?: string;

  /**
   * <p>The ARN of the discovery job.</p>
   * @public
   */
  DiscoveryJobArn?: string;

  /**
   * <p>The number of minutes that the discovery job runs.</p>
   * @public
   */
  CollectionDurationMinutes?: number;

  /**
   * <p>Indicates the status of a discovery job. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-job-statuses.html#discovery-job-statuses-table">Discovery job statuses</a>.</p>
   * @public
   */
  Status?: DiscoveryJobStatus;

  /**
   * <p>The time when the discovery job started.</p>
   * @public
   */
  JobStartTime?: Date;

  /**
   * <p>The time when the discovery job ended.</p>
   * @public
   */
  JobEndTime?: Date;
}

/**
 * @public
 */
export interface DescribeLocationAzureBlobRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of your Azure Blob Storage transfer location.</p>
   * @public
   */
  LocationArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeLocationAzureBlobResponse {
  /**
   * <p>The ARN of your Azure Blob Storage transfer location.</p>
   * @public
   */
  LocationArn?: string;

  /**
   * <p>The URL of the Azure Blob Storage container involved in your transfer.</p>
   * @public
   */
  LocationUri?: string;

  /**
   * <p>The authentication method DataSync uses to access your Azure Blob Storage. DataSync can access blob storage using a shared access signature (SAS).</p>
   * @public
   */
  AuthenticationType?: AzureBlobAuthenticationType;

  /**
   * <p>The type of blob that you want your objects or files to be when transferring them into
   *       Azure Blob Storage. Currently, DataSync only supports moving data into Azure Blob
   *       Storage as block blobs. For more information on blob types, see the <a href="https://learn.microsoft.com/en-us/rest/api/storageservices/understanding-block-blobs--append-blobs--and-page-blobs">Azure Blob Storage documentation</a>.</p>
   * @public
   */
  BlobType?: AzureBlobType;

  /**
   * <p>The access tier that you want your objects or files transferred into. This only applies when using the location as a transfer destination. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#azure-blob-access-tiers">Access tiers</a>.</p>
   * @public
   */
  AccessTier?: AzureAccessTier;

  /**
   * <p>The ARNs of the DataSync agents that can connect with your Azure Blob Storage container.</p>
   * @public
   */
  AgentArns?: string[];

  /**
   * <p>The time that your Azure Blob Storage transfer location was created.</p>
   * @public
   */
  CreationTime?: Date;
}

/**
 * <p>DescribeLocationEfsRequest</p>
 * @public
 */
export interface DescribeLocationEfsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon EFS file system location that you
   *       want information about.</p>
   * @public
   */
  LocationArn: string | undefined;
}

/**
 * <p>DescribeLocationEfsResponse</p>
 * @public
 */
export interface DescribeLocationEfsResponse {
  /**
   * <p>The ARN of the Amazon EFS file system location.</p>
   * @public
   */
  LocationArn?: string;

  /**
   * <p>The URL of the Amazon EFS file system location.</p>
   * @public
   */
  LocationUri?: string;

  /**
   * <p>The subnet and security groups that DataSync uses to access your Amazon EFS file system.</p>
   * @public
   */
  Ec2Config?: Ec2Config;

  /**
   * <p>The time that the location was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The ARN of the access point that DataSync uses to access the Amazon EFS
   *       file system.</p>
   * @public
   */
  AccessPointArn?: string;

  /**
   * <p>The Identity and Access Management (IAM) role that DataSync assumes when
   *       mounting the Amazon EFS file system.</p>
   * @public
   */
  FileSystemAccessRoleArn?: string;

  /**
   * <p>Describes whether DataSync uses Transport Layer Security (TLS) encryption when
   *       copying data to or from the Amazon EFS file system.</p>
   * @public
   */
  InTransitEncryption?: EfsInTransitEncryption;
}

/**
 * @public
 */
export interface DescribeLocationFsxLustreRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the FSx for Lustre location to describe.
   *     </p>
   * @public
   */
  LocationArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeLocationFsxLustreResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the FSx for Lustre location that was
   *       described.</p>
   * @public
   */
  LocationArn?: string;

  /**
   * <p>The URI of the FSx for Lustre location that was described.</p>
   * @public
   */
  LocationUri?: string;

  /**
   * <p>The Amazon Resource Names (ARNs) of the security groups that are configured for the
   *         FSx for Lustre file system.</p>
   * @public
   */
  SecurityGroupArns?: string[];

  /**
   * <p>The time that the FSx for Lustre location was created.</p>
   * @public
   */
  CreationTime?: Date;
}

/**
 * @public
 */
export interface DescribeLocationFsxOntapRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the FSx for ONTAP file system
   *       location that you want information about.</p>
   * @public
   */
  LocationArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeLocationFsxOntapResponse {
  /**
   * <p>The time that the location was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The ARN of the FSx for ONTAP file system location.</p>
   * @public
   */
  LocationArn?: string;

  /**
   * <p>The uniform resource identifier (URI) of the FSx for ONTAP file system
   *       location.</p>
   * @public
   */
  LocationUri?: string;

  /**
   * <p>Specifies the data transfer protocol that DataSync uses to access your
   *         Amazon FSx file system.</p>
   * @public
   */
  Protocol?: FsxProtocol;

  /**
   * <p>The security groups that DataSync uses to access your FSx for ONTAP
   *       file system.</p>
   * @public
   */
  SecurityGroupArns?: string[];

  /**
   * <p>The ARN of the storage virtual machine (SVM) on your FSx for ONTAP file system
   *       where you're copying data to or from.</p>
   * @public
   */
  StorageVirtualMachineArn?: string;

  /**
   * <p>The ARN of the FSx for ONTAP file system.</p>
   * @public
   */
  FsxFilesystemArn?: string;
}

/**
 * @public
 */
export interface DescribeLocationFsxOpenZfsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the FSx for OpenZFS location to describe.</p>
   * @public
   */
  LocationArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeLocationFsxOpenZfsResponse {
  /**
   * <p>The ARN of the FSx for OpenZFS location that was described.</p>
   * @public
   */
  LocationArn?: string;

  /**
   * <p>The uniform resource identifier (URI) of the FSx for OpenZFS location that was
   *       described.</p>
   *          <p>Example: <code>fsxz://us-west-2.fs-1234567890abcdef02/fsx/folderA/folder</code>
   *          </p>
   * @public
   */
  LocationUri?: string;

  /**
   * <p>The ARNs of the security groups that are configured for the FSx for OpenZFS file
   *       system.</p>
   * @public
   */
  SecurityGroupArns?: string[];

  /**
   * <p>The type of protocol that DataSync uses to access your file system.</p>
   * @public
   */
  Protocol?: FsxProtocol;

  /**
   * <p>The time that the FSx for OpenZFS location was created.</p>
   * @public
   */
  CreationTime?: Date;
}

/**
 * @public
 */
export interface DescribeLocationFsxWindowsRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the FSx for Windows File Server location.</p>
   * @public
   */
  LocationArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeLocationFsxWindowsResponse {
  /**
   * <p>The ARN of the FSx for Windows File Server location.</p>
   * @public
   */
  LocationArn?: string;

  /**
   * <p>The uniform resource identifier (URI) of the FSx for Windows File Server location.</p>
   * @public
   */
  LocationUri?: string;

  /**
   * <p>The ARNs of the security groups that are configured for the FSx for Windows File Server file
   *       system.</p>
   * @public
   */
  SecurityGroupArns?: string[];

  /**
   * <p>The time that the FSx for Windows File Server location was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The user with the permissions to mount and access the FSx for Windows File Server file
   *       system.</p>
   * @public
   */
  User?: string;

  /**
   * <p>The name of the Microsoft Active Directory domain that the FSx for Windows File Server file
   *       system belongs to.</p>
   * @public
   */
  Domain?: string;
}

/**
 * @public
 */
export interface DescribeLocationHdfsRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the HDFS location.</p>
   * @public
   */
  LocationArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeLocationHdfsResponse {
  /**
   * <p>The ARN of the HDFS location.</p>
   * @public
   */
  LocationArn?: string;

  /**
   * <p>The URI of the HDFS location.</p>
   * @public
   */
  LocationUri?: string;

  /**
   * <p>The NameNode that manages the HDFS namespace. </p>
   * @public
   */
  NameNodes?: HdfsNameNode[];

  /**
   * <p>The size of the data blocks to write into the HDFS cluster. </p>
   * @public
   */
  BlockSize?: number;

  /**
   * <p>The number of DataNodes to replicate the data to when writing to the HDFS cluster. </p>
   * @public
   */
  ReplicationFactor?: number;

  /**
   * <p> The URI of the HDFS cluster's Key Management Server (KMS). </p>
   * @public
   */
  KmsKeyProviderUri?: string;

  /**
   * <p>The Quality of Protection (QOP) configuration, which specifies the Remote Procedure Call
   *       (RPC) and data transfer protection settings configured on the HDFS cluster. </p>
   * @public
   */
  QopConfiguration?: QopConfiguration;

  /**
   * <p>The type of authentication used to determine the identity of the user. </p>
   * @public
   */
  AuthenticationType?: HdfsAuthenticationType;

  /**
   * <p>The user name to identify the client on the host operating system. This parameter is used
   *       if the <code>AuthenticationType</code> is defined as <code>SIMPLE</code>.</p>
   * @public
   */
  SimpleUser?: string;

  /**
   * <p>The Kerberos principal with access to the files and folders on the HDFS cluster. This
   *       parameter is used if the <code>AuthenticationType</code> is defined as
   *       <code>KERBEROS</code>.</p>
   * @public
   */
  KerberosPrincipal?: string;

  /**
   * <p>The ARNs of the DataSync agents that can connect with your HDFS cluster.</p>
   * @public
   */
  AgentArns?: string[];

  /**
   * <p>The time that the HDFS location was created.</p>
   * @public
   */
  CreationTime?: Date;
}

/**
 * <p>DescribeLocationNfsRequest</p>
 * @public
 */
export interface DescribeLocationNfsRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the NFS location that you want information
   *       about.</p>
   * @public
   */
  LocationArn: string | undefined;
}

/**
 * <p>DescribeLocationNfsResponse</p>
 * @public
 */
export interface DescribeLocationNfsResponse {
  /**
   * <p>The ARN of the NFS location.</p>
   * @public
   */
  LocationArn?: string;

  /**
   * <p>The URI of the NFS location.</p>
   * @public
   */
  LocationUri?: string;

  /**
   * <p>The DataSync agents that are connecting to a Network File System (NFS)
   *       location.</p>
   * @public
   */
  OnPremConfig?: OnPremConfig;

  /**
   * <p>The mount options that DataSync uses to mount your NFS file server.</p>
   * @public
   */
  MountOptions?: NfsMountOptions;

  /**
   * <p>The time when the NFS location was created.</p>
   * @public
   */
  CreationTime?: Date;
}

/**
 * <p>DescribeLocationObjectStorageRequest</p>
 * @public
 */
export interface DescribeLocationObjectStorageRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the object storage system location.</p>
   * @public
   */
  LocationArn: string | undefined;
}

/**
 * <p>DescribeLocationObjectStorageResponse</p>
 * @public
 */
export interface DescribeLocationObjectStorageResponse {
  /**
   * <p>The ARN of the object storage system location.</p>
   * @public
   */
  LocationArn?: string;

  /**
   * <p>The URI of the object storage system location.</p>
   * @public
   */
  LocationUri?: string;

  /**
   * <p>The access key (for example, a user name) required to authenticate with the object storage
   *       system.</p>
   * @public
   */
  AccessKey?: string;

  /**
   * <p>The port that your object storage server accepts inbound network traffic on (for example,
   *       port 443).</p>
   * @public
   */
  ServerPort?: number;

  /**
   * <p>The protocol that your object storage system uses to communicate.</p>
   * @public
   */
  ServerProtocol?: ObjectStorageServerProtocol;

  /**
   * <p>The ARNs of the DataSync agents that can connect with your object storage
   *       system.</p>
   * @public
   */
  AgentArns?: string[];

  /**
   * <p>The time that the location was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The certificate chain for DataSync to authenticate with your object storage
   *       system if the system uses a private or self-signed certificate authority (CA).</p>
   * @public
   */
  ServerCertificate?: Uint8Array;
}

/**
 * <p>DescribeLocationS3Request</p>
 * @public
 */
export interface DescribeLocationS3Request {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the Amazon S3 location.</p>
   * @public
   */
  LocationArn: string | undefined;
}

/**
 * <p>DescribeLocationS3Response</p>
 * @public
 */
export interface DescribeLocationS3Response {
  /**
   * <p>The ARN of the Amazon S3 location.</p>
   * @public
   */
  LocationArn?: string;

  /**
   * <p>The URL of the Amazon S3 location that was described.</p>
   * @public
   */
  LocationUri?: string;

  /**
   * <p>When Amazon S3 is a destination location, this is the storage class that you chose
   *       for your objects.</p>
   *          <p>Some storage classes have behaviors that can affect your Amazon S3 storage costs.
   *       For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes">Storage class
   *         considerations with Amazon S3 transfers</a>.</p>
   * @public
   */
  S3StorageClass?: S3StorageClass;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that DataSync uses to access your S3 bucket.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-access">Accessing
   *         S3 buckets</a>.</p>
   * @public
   */
  S3Config?: S3Config;

  /**
   * <p>The ARNs of the DataSync agents deployed on your Outpost when using working with
   *         Amazon S3 on Outposts.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/deploy-agents.html#outposts-agent">Deploy your DataSync agent
   *         on Outposts</a>.</p>
   * @public
   */
  AgentArns?: string[];

  /**
   * <p>The time that the Amazon S3 location was created.</p>
   * @public
   */
  CreationTime?: Date;
}

/**
 * <p>DescribeLocationSmbRequest</p>
 * @public
 */
export interface DescribeLocationSmbRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the SMB location that you want information
   *       about.</p>
   * @public
   */
  LocationArn: string | undefined;
}

/**
 * <p>DescribeLocationSmbResponse</p>
 * @public
 */
export interface DescribeLocationSmbResponse {
  /**
   * <p>The ARN of the SMB location.</p>
   * @public
   */
  LocationArn?: string;

  /**
   * <p>The URI of the SMB location.</p>
   * @public
   */
  LocationUri?: string;

  /**
   * <p>The ARNs of the DataSync agents that can connect with your SMB file
   *       server.</p>
   * @public
   */
  AgentArns?: string[];

  /**
   * <p>The user that can mount and access the files, folders, and file metadata in your SMB file
   *       server.</p>
   * @public
   */
  User?: string;

  /**
   * <p>The name of the Microsoft Active Directory domain that the SMB file server belongs
   *       to.</p>
   * @public
   */
  Domain?: string;

  /**
   * <p>The protocol that DataSync use to access your SMB file.</p>
   * @public
   */
  MountOptions?: SmbMountOptions;

  /**
   * <p>The time that the SMB location was created.</p>
   * @public
   */
  CreationTime?: Date;
}

/**
 * @public
 */
export interface DescribeStorageSystemRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of an on-premises storage system that you're
   *       using with DataSync Discovery.</p>
   * @public
   */
  StorageSystemArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StorageSystemConnectivityStatus = {
  FAIL: "FAIL",
  PASS: "PASS",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type StorageSystemConnectivityStatus =
  (typeof StorageSystemConnectivityStatus)[keyof typeof StorageSystemConnectivityStatus];

/**
 * @public
 */
export interface DescribeStorageSystemResponse {
  /**
   * <p>The ARN of the on-premises storage system that the discovery job looked at.</p>
   * @public
   */
  StorageSystemArn?: string;

  /**
   * <p>The server name and network port required to connect with your on-premises storage
   *       system's management interface.</p>
   * @public
   */
  ServerConfiguration?: DiscoveryServerConfiguration;

  /**
   * <p>The type of on-premises storage system.</p>
   *          <note>
   *             <p>DataSync Discovery currently only supports NetApp
   *         Fabric-Attached
   *         Storage (FAS) and All Flash FAS (AFF) systems running ONTAP 9.7 or later.
   *       </p>
   *          </note>
   * @public
   */
  SystemType?: DiscoverySystemType;

  /**
   * <p>The ARN of the DataSync agent that connects to and reads from your on-premises storage
   *       system.</p>
   * @public
   */
  AgentArns?: string[];

  /**
   * <p>The name that you gave your on-premises storage system when adding it to DataSync Discovery.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Describes the connectivity error that the DataSync agent is encountering with your
   *       on-premises storage system.</p>
   * @public
   */
  ErrorMessage?: string;

  /**
   * <p>Indicates whether your DataSync agent can connect to your on-premises storage system.</p>
   * @public
   */
  ConnectivityStatus?: StorageSystemConnectivityStatus;

  /**
   * <p>The ARN of the Amazon CloudWatch log group that's used to monitor and log discovery
   *       job events.</p>
   * @public
   */
  CloudWatchLogGroupArn?: string;

  /**
   * <p>The time when you added the on-premises storage system to DataSync Discovery.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The ARN of the secret that stores your on-premises storage system's credentials. DataSync Discovery
   *       stores these credentials in <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-configure-storage.html#discovery-add-storage">Secrets Manager</a>.</p>
   * @public
   */
  SecretsManagerArn?: string;
}

/**
 * @public
 * @enum
 */
export const DiscoveryResourceType = {
  CLUSTER: "CLUSTER",
  SVM: "SVM",
  VOLUME: "VOLUME",
} as const;

/**
 * @public
 */
export type DiscoveryResourceType = (typeof DiscoveryResourceType)[keyof typeof DiscoveryResourceType];

/**
 * @public
 */
export interface DescribeStorageSystemResourceMetricsRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the discovery job that collects information
   *       about your on-premises storage system.</p>
   * @public
   */
  DiscoveryJobArn: string | undefined;

  /**
   * <p>Specifies the kind of storage system resource that you want information about.</p>
   * @public
   */
  ResourceType: DiscoveryResourceType | undefined;

  /**
   * <p>Specifies the universally unique identifier (UUID) of the storage system resource that you
   *       want information about.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>Specifies a time within the total duration that the discovery job ran. To see information
   *       gathered during a certain time frame, use this parameter with <code>EndTime</code>.</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>Specifies a time within the total duration that the discovery job ran. To see information
   *       gathered during a certain time frame, use this parameter with <code>StartTime</code>.</p>
   * @public
   */
  EndTime?: Date;

  /**
   * <p>Specifies how many results that you want in the response.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Specifies an opaque string that indicates the position to begin the next list of results
   *       in the response.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>The IOPS peaks for an on-premises storage system
 *       resource.
 *       Each data point represents the 95th percentile peak value during a 1-hour interval.</p>
 * @public
 */
export interface IOPS {
  /**
   * <p>Peak IOPS related to read operations.</p>
   * @public
   */
  Read?: number;

  /**
   * <p>Peak IOPS related to write operations.</p>
   * @public
   */
  Write?: number;

  /**
   * <p>Peak IOPS unrelated to read and write operations.</p>
   * @public
   */
  Other?: number;

  /**
   * <p>Peak total IOPS on your on-premises storage system resource.</p>
   * @public
   */
  Total?: number;
}

/**
 * <p>The latency peaks for an on-premises storage system
 *       resource.
 *       Each data point represents the 95th percentile peak value during a 1-hour interval.</p>
 * @public
 */
export interface Latency {
  /**
   * <p>Peak latency for read operations.</p>
   * @public
   */
  Read?: number;

  /**
   * <p>Peak latency for write operations.</p>
   * @public
   */
  Write?: number;

  /**
   * <p>Peak latency for operations unrelated to read and write operations.</p>
   * @public
   */
  Other?: number;
}

/**
 * <p>The throughput peaks for an on-premises storage system volume. Each data point represents
 *       the 95th percentile peak value during a 1-hour interval.</p>
 * @public
 */
export interface Throughput {
  /**
   * <p>Peak throughput related to read operations.</p>
   * @public
   */
  Read?: number;

  /**
   * <p>Peak throughput related to write operations.</p>
   * @public
   */
  Write?: number;

  /**
   * <p>Peak throughput unrelated to read and write operations.</p>
   * @public
   */
  Other?: number;

  /**
   * <p>Peak total throughput on your on-premises storage system resource.</p>
   * @public
   */
  Total?: number;
}

/**
 * <p>The types of performance data that DataSync Discovery collects about an on-premises storage system
 *       resource.</p>
 * @public
 */
export interface P95Metrics {
  /**
   * <p>The IOPS peaks for an on-premises storage system resource. Each data point represents the
   *       95th percentile peak value during a 1-hour interval.</p>
   * @public
   */
  IOPS?: IOPS;

  /**
   * <p>The throughput peaks for an on-premises storage system resource. Each data point
   *       represents the 95th percentile peak value during a 1-hour interval.</p>
   * @public
   */
  Throughput?: Throughput;

  /**
   * <p>The latency peaks for an on-premises storage system resource. Each data point represents
   *       the 95th percentile peak value during a 1-hour interval.</p>
   * @public
   */
  Latency?: Latency;
}

/**
 * <p>Information, including performance data and capacity usage, provided by DataSync Discovery about a
 *       resource in your on-premises storage system.</p>
 * @public
 */
export interface ResourceMetrics {
  /**
   * <p>The time when DataSync Discovery collected this information from the
   *     resource.</p>
   * @public
   */
  Timestamp?: Date;

  /**
   * <p>The types of performance data that DataSync Discovery collects about the on-premises storage system
   *       resource.</p>
   * @public
   */
  P95Metrics?: P95Metrics;

  /**
   * <p>The storage capacity of the on-premises storage system resource.</p>
   * @public
   */
  Capacity?: Capacity;

  /**
   * <p>The universally unique identifier (UUID) of the on-premises storage system
   *       resource.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>The type of on-premises storage system resource.</p>
   * @public
   */
  ResourceType?: DiscoveryResourceType;
}

/**
 * @public
 */
export interface DescribeStorageSystemResourceMetricsResponse {
  /**
   * <p>The details that your discovery job collected about your storage system resource.</p>
   * @public
   */
  Metrics?: ResourceMetrics[];

  /**
   * <p>The opaque string that indicates the position to begin the next list of results in the
   *       response.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const DiscoveryResourceFilter = {
  SVM: "SVM",
} as const;

/**
 * @public
 */
export type DiscoveryResourceFilter = (typeof DiscoveryResourceFilter)[keyof typeof DiscoveryResourceFilter];

/**
 * @public
 */
export interface DescribeStorageSystemResourcesRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the discovery job that's collecting data from
   *       your on-premises storage system.</p>
   * @public
   */
  DiscoveryJobArn: string | undefined;

  /**
   * <p>Specifies what kind of storage system resources that you want information about.</p>
   * @public
   */
  ResourceType: DiscoveryResourceType | undefined;

  /**
   * <p>Specifies the universally unique identifiers (UUIDs) of the storage system resources that
   *       you want information about. You can't use this parameter in combination with the
   *         <code>Filter</code> parameter.</p>
   * @public
   */
  ResourceIds?: string[];

  /**
   * <p>Filters the storage system resources that you want returned. For example, this might be
   *       volumes associated with a specific storage virtual machine (SVM).</p>
   * @public
   */
  Filter?: Partial<Record<DiscoveryResourceFilter, string[]>>;

  /**
   * <p>Specifies the maximum number of storage system resources that you want to list in a
   *       response.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Specifies an opaque string that indicates the position to begin the next list of results
   *       in the response.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>The performance data that DataSync Discovery collects about an on-premises storage system
 *       resource.</p>
 * @public
 */
export interface MaxP95Performance {
  /**
   * <p>Peak IOPS related to read operations.</p>
   * @public
   */
  IopsRead?: number;

  /**
   * <p>Peak IOPS related to write operations.</p>
   * @public
   */
  IopsWrite?: number;

  /**
   * <p>Peak IOPS unrelated to read and write operations.</p>
   * @public
   */
  IopsOther?: number;

  /**
   * <p>Peak total IOPS on your on-premises storage system resource.</p>
   * @public
   */
  IopsTotal?: number;

  /**
   * <p>Peak throughput related to read operations.</p>
   * @public
   */
  ThroughputRead?: number;

  /**
   * <p>Peak throughput related to write operations.</p>
   * @public
   */
  ThroughputWrite?: number;

  /**
   * <p>Peak throughput unrelated to read and write operations.</p>
   * @public
   */
  ThroughputOther?: number;

  /**
   * <p>Peak total throughput on your on-premises storage system resource.</p>
   * @public
   */
  ThroughputTotal?: number;

  /**
   * <p>Peak latency for read operations.</p>
   * @public
   */
  LatencyRead?: number;

  /**
   * <p>Peak latency for write operations.</p>
   * @public
   */
  LatencyWrite?: number;

  /**
   * <p>Peak latency for operations unrelated to read and write operations.</p>
   * @public
   */
  LatencyOther?: number;
}

/**
 * <p>The details about an Amazon Web Services storage service that DataSync Discovery recommends for a
 *       resource in your on-premises storage system.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-understand-recommendations.html">Recommendations
 *         provided by DataSync Discovery</a>.</p>
 * @public
 */
export interface Recommendation {
  /**
   * <p>A recommended Amazon Web Services storage service that you can migrate data to based on
   *       information that DataSync Discovery collects about your on-premises storage system.</p>
   * @public
   */
  StorageType?: string;

  /**
   * <p>Information about how you can set up a recommended Amazon Web Services storage
   *       service.</p>
   * @public
   */
  StorageConfiguration?: Record<string, string>;

  /**
   * <p>The estimated monthly cost of the recommended Amazon Web Services storage service.</p>
   * @public
   */
  EstimatedMonthlyStorageCost?: string;
}

/**
 * @public
 * @enum
 */
export const RecommendationStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type RecommendationStatus = (typeof RecommendationStatus)[keyof typeof RecommendationStatus];

/**
 * <p>The information that DataSync Discovery collects about an on-premises storage system
 *       cluster.</p>
 * @public
 */
export interface NetAppONTAPCluster {
  /**
   * <p>The number of CIFS shares in the cluster.</p>
   * @public
   */
  CifsShareCount?: number;

  /**
   * <p>The number of NFS volumes in the cluster.</p>
   * @public
   */
  NfsExportedVolumes?: number;

  /**
   * <p>The universally unique identifier (UUID) of the cluster.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>The name of the cluster.</p>
   * @public
   */
  ClusterName?: string;

  /**
   * <p>The performance data that DataSync Discovery collects about the cluster.</p>
   * @public
   */
  MaxP95Performance?: MaxP95Performance;

  /**
   * <p>The total storage space that's available in the cluster.</p>
   * @public
   */
  ClusterBlockStorageSize?: number;

  /**
   * <p>The storage space that's being used in a cluster.</p>
   * @public
   */
  ClusterBlockStorageUsed?: number;

  /**
   * <p>The storage space that's being used in the cluster without accounting for compression or
   *       deduplication.</p>
   * @public
   */
  ClusterBlockStorageLogicalUsed?: number;

  /**
   * <p>The Amazon Web Services storage services that DataSync Discovery recommends for the cluster. For
   *       more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-understand-recommendations.html">Recommendations
   *         provided by DataSync Discovery</a>.</p>
   * @public
   */
  Recommendations?: Recommendation[];

  /**
   * <p>Indicates whether DataSync Discovery recommendations for the cluster are ready to view, incomplete,
   *       or can't be determined.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-job-statuses.html#recommendation-statuses-table">Recommendation statuses</a>.</p>
   * @public
   */
  RecommendationStatus?: RecommendationStatus;

  /**
   * <p>The number of LUNs (logical unit numbers) in the cluster.</p>
   * @public
   */
  LunCount?: number;

  /**
   * <p>The amount of space in the cluster that's in cloud storage (for example, if you're using data tiering).</p>
   * @public
   */
  ClusterCloudStorageUsed?: number;
}

/**
 * <p>The information that DataSync Discovery collects about a storage virtual machine (SVM) in your
 *       on-premises storage system.</p>
 * @public
 */
export interface NetAppONTAPSVM {
  /**
   * <p>The universally unique identifier (UUID) of the cluster associated with the SVM.</p>
   * @public
   */
  ClusterUuid?: string;

  /**
   * <p>The UUID of the SVM.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>The name of the SVM</p>
   * @public
   */
  SvmName?: string;

  /**
   * <p>The number of CIFS shares in the SVM.</p>
   * @public
   */
  CifsShareCount?: number;

  /**
   * <p>The data transfer protocols (such as NFS) configured for the SVM.</p>
   * @public
   */
  EnabledProtocols?: string[];

  /**
   * <p>The storage space that's being used in the SVM.</p>
   * @public
   */
  TotalCapacityUsed?: number;

  /**
   * <p>The total storage space that's available in the SVM.</p>
   * @public
   */
  TotalCapacityProvisioned?: number;

  /**
   * <p>The storage space that's being used in the SVM without accounting for compression or
   *       deduplication.</p>
   * @public
   */
  TotalLogicalCapacityUsed?: number;

  /**
   * <p>The performance data that DataSync Discovery collects about the SVM.</p>
   * @public
   */
  MaxP95Performance?: MaxP95Performance;

  /**
   * <p>The Amazon Web Services storage services that DataSync Discovery recommends for the SVM. For more
   *       information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-understand-recommendations.html">Recommendations
   *         provided by DataSync Discovery</a>.</p>
   * @public
   */
  Recommendations?: Recommendation[];

  /**
   * <p>The number of NFS volumes in the SVM.</p>
   * @public
   */
  NfsExportedVolumes?: number;

  /**
   * <p>Indicates whether DataSync Discovery recommendations for the SVM are ready to view, incomplete, or
   *       can't be determined.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-job-statuses.html#recommendation-statuses-table">Recommendation statuses</a>.</p>
   * @public
   */
  RecommendationStatus?: RecommendationStatus;

  /**
   * <p>The amount of storage in the SVM that's being used for snapshots.</p>
   * @public
   */
  TotalSnapshotCapacityUsed?: number;

  /**
   * <p>The number of LUNs (logical unit numbers) in the SVM.</p>
   * @public
   */
  LunCount?: number;
}

/**
 * <p>The information that DataSync Discovery collects about a volume in your on-premises storage
 *       system.</p>
 * @public
 */
export interface NetAppONTAPVolume {
  /**
   * <p>The name of the volume.</p>
   * @public
   */
  VolumeName?: string;

  /**
   * <p>The universally unique identifier (UUID) of the volume.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>The number of CIFS shares in the volume.</p>
   * @public
   */
  CifsShareCount?: number;

  /**
   * <p>The volume's security style (such as Unix or NTFS).</p>
   * @public
   */
  SecurityStyle?: string;

  /**
   * <p>The UUID of the storage virtual machine (SVM) associated with the volume.</p>
   * @public
   */
  SvmUuid?: string;

  /**
   * <p>The name of the SVM associated with the volume.</p>
   * @public
   */
  SvmName?: string;

  /**
   * <p>The storage space that's being used in the volume.</p>
   * @public
   */
  CapacityUsed?: number;

  /**
   * <p>The total storage space that's available in the volume.</p>
   * @public
   */
  CapacityProvisioned?: number;

  /**
   * <p>The storage space that's being used in the volume without accounting for compression or
   *       deduplication.</p>
   * @public
   */
  LogicalCapacityUsed?: number;

  /**
   * <p>The number of NFS volumes in the volume.</p>
   * @public
   */
  NfsExported?: boolean;

  /**
   * <p>The amount of storage in the volume that's being used for snapshots.</p>
   * @public
   */
  SnapshotCapacityUsed?: number;

  /**
   * <p>The performance data that DataSync Discovery collects about the volume.</p>
   * @public
   */
  MaxP95Performance?: MaxP95Performance;

  /**
   * <p>The Amazon Web Services storage services that DataSync Discovery recommends for the volume. For more
   *       information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-understand-recommendations.html">Recommendations
   *         provided by DataSync Discovery</a>.</p>
   * @public
   */
  Recommendations?: Recommendation[];

  /**
   * <p>Indicates whether DataSync Discovery recommendations for the volume are ready to view, incomplete,
   *       or can't be determined.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-job-statuses.html#recommendation-statuses-table">Recommendation statuses</a>.</p>
   * @public
   */
  RecommendationStatus?: RecommendationStatus;

  /**
   * <p>The number of LUNs (logical unit numbers) in the volume.</p>
   * @public
   */
  LunCount?: number;
}

/**
 * <p>Information provided by DataSync Discovery about the resources in your on-premises storage
 *       system.</p>
 * @public
 */
export interface ResourceDetails {
  /**
   * <p>The information that DataSync Discovery collects about storage virtual machines (SVMs) in your
   *       on-premises storage system.</p>
   * @public
   */
  NetAppONTAPSVMs?: NetAppONTAPSVM[];

  /**
   * <p>The information that DataSync Discovery collects about volumes in your on-premises storage
   *       system.</p>
   * @public
   */
  NetAppONTAPVolumes?: NetAppONTAPVolume[];

  /**
   * <p>The information that DataSync Discovery collects about the
   *       cluster
   *       in your on-premises storage system.</p>
   * @public
   */
  NetAppONTAPClusters?: NetAppONTAPCluster[];
}

/**
 * @public
 */
export interface DescribeStorageSystemResourcesResponse {
  /**
   * <p>The information collected about your storage system's resources. A response can also
   *       include Amazon Web Services storage service recommendations.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-understand-findings.html">storage resource
   *         information</a> collected by and <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-understand-recommendations.html">recommendations</a> provided by DataSync Discovery.</p>
   * @public
   */
  ResourceDetails?: ResourceDetails;

  /**
   * <p>The opaque string that indicates the position to begin the next list of results in the
   *       response.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>DescribeTaskRequest</p>
 * @public
 */
export interface DescribeTaskRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the transfer task that you want information
   *       about.</p>
   * @public
   */
  TaskArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ScheduleDisabledBy = {
  SERVICE: "SERVICE",
  USER: "USER",
} as const;

/**
 * @public
 */
export type ScheduleDisabledBy = (typeof ScheduleDisabledBy)[keyof typeof ScheduleDisabledBy];

/**
 * <p>Provides information about your DataSync
 *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/task-scheduling.html">task schedule</a>.</p>
 * @public
 */
export interface TaskScheduleDetails {
  /**
   * <p>Indicates the last time the status of your task schedule changed. For example, if DataSync automatically disables your schedule because of a repeated error, you can see
   *       when the schedule was disabled.</p>
   * @public
   */
  StatusUpdateTime?: Date;

  /**
   * <p>Provides a reason if the task schedule is disabled.</p>
   *          <p>If your schedule is disabled by <code>USER</code>, you see a <code>Manually disabled by user.</code> message.</p>
   *          <p>If your schedule is disabled by <code>SERVICE</code>, you see an error message to help you
   *       understand why the task keeps failing. For information on resolving DataSync errors,
   *       see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/troubleshooting-datasync-locations-tasks.html">Troubleshooting issues with DataSync transfers</a>.</p>
   * @public
   */
  DisabledReason?: string;

  /**
   * <p>Indicates how your task schedule was disabled.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>USER</code> - Your schedule was manually disabled by using the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateTask.html">UpdateTask</a> operation or DataSync console.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SERVICE</code> - Your schedule was automatically disabled by DataSync
   *           because the task failed repeatedly with the same error.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DisabledBy?: ScheduleDisabledBy;
}

/**
 * @public
 * @enum
 */
export const TaskStatus = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
  UNAVAILABLE: "UNAVAILABLE",
} as const;

/**
 * @public
 */
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];

/**
 * <p>DescribeTaskResponse</p>
 * @public
 */
export interface DescribeTaskResponse {
  /**
   * <p>The ARN of your task.</p>
   * @public
   */
  TaskArn?: string;

  /**
   * <p>The status of your task. For information about what each status means, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/understand-task-statuses.html#understand-task-creation-statuses">Task statuses</a>.</p>
   * @public
   */
  Status?: TaskStatus;

  /**
   * <p>The name of your task.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The ARN of the most recent task execution.</p>
   * @public
   */
  CurrentTaskExecutionArn?: string;

  /**
   * <p>The ARN of your transfer's source location.</p>
   * @public
   */
  SourceLocationArn?: string;

  /**
   * <p>The ARN of your transfer's destination location.</p>
   * @public
   */
  DestinationLocationArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon CloudWatch log group for monitoring your
   *       task.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/monitor-datasync.html">Monitoring DataSync with
   *       Amazon CloudWatch</a>.</p>
   * @public
   */
  CloudWatchLogGroupArn?: string;

  /**
   * <p>The ARNs of the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/datasync-network.html#required-network-interfaces">network
   *         interfaces</a> that DataSync created for your source location.</p>
   * @public
   */
  SourceNetworkInterfaceArns?: string[];

  /**
   * <p>The ARNs of the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/datasync-network.html#required-network-interfaces">network
   *         interfaces</a> that DataSync created for your destination location.</p>
   * @public
   */
  DestinationNetworkInterfaceArns?: string[];

  /**
   * <p>The task's settings. For example, what file metadata gets preserved, how data integrity
   *       gets verified at the end of your transfer, bandwidth limits, among other options.</p>
   * @public
   */
  Options?: Options;

  /**
   * <p>The exclude filters that define the files, objects, and folders in your source location that you don't want DataSync to transfer. For more
   *       information and examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html">Specifying what DataSync transfers by using filters</a>.</p>
   * @public
   */
  Excludes?: FilterRule[];

  /**
   * <p>The schedule for when you want your task to run. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/task-scheduling.html">Scheduling your
   *       task</a>.</p>
   * @public
   */
  Schedule?: TaskSchedule;

  /**
   * <p>If there's an issue with your task, you can use the error code to help you troubleshoot
   *       the problem. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/troubleshooting-datasync-locations-tasks.html">Troubleshooting issues with DataSync transfers</a>.</p>
   * @public
   */
  ErrorCode?: string;

  /**
   * <p>If there's an issue with your task, you can use the error details to help you
   *       troubleshoot the problem. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/troubleshooting-datasync-locations-tasks.html">Troubleshooting issues with DataSync transfers</a>.</p>
   * @public
   */
  ErrorDetail?: string;

  /**
   * <p>The time that the task was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The include filters that define the files, objects, and folders in your source location
   *       that you want DataSync to transfer. For more information and examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html">Specifying what DataSync transfers by using filters</a>.</p>
   * @public
   */
  Includes?: FilterRule[];

  /**
   * <p>The configuration of the manifest that lists the files or objects that you want DataSync to transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/transferring-with-manifest.html">Specifying what DataSync transfers by using a manifest</a>.</p>
   * @public
   */
  ManifestConfig?: ManifestConfig;

  /**
   * <p>The configuration of your task report, which provides detailed information about your
   *         DataSync transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/task-reports.html">Monitoring your DataSync
   *         transfers with task reports</a>.</p>
   * @public
   */
  TaskReportConfig?: TaskReportConfig;

  /**
   * <p>The details about your <a href="https://docs.aws.amazon.com/datasync/latest/userguide/task-scheduling.html">task schedule</a>.</p>
   * @public
   */
  ScheduleDetails?: TaskScheduleDetails;
}

/**
 * <p>DescribeTaskExecutionRequest</p>
 * @public
 */
export interface DescribeTaskExecutionRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the task execution that you want
   *       information about.</p>
   * @public
   */
  TaskExecutionArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PhaseStatus = {
  ERROR: "ERROR",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type PhaseStatus = (typeof PhaseStatus)[keyof typeof PhaseStatus];

/**
 * <p>Indicates whether DataSync created a complete <a href="https://docs.aws.amazon.com/datasync/latest/userguide/task-reports.html">task report</a> for your
 *       transfer.</p>
 * @public
 */
export interface ReportResult {
  /**
   * <p>Indicates whether DataSync is still working on your report, created a report, or
   *       can't create a complete report.</p>
   * @public
   */
  Status?: PhaseStatus;

  /**
   * <p>Indicates the code associated with the error if DataSync can't create a complete
   *       report.</p>
   * @public
   */
  ErrorCode?: string;

  /**
   * <p>Provides details about issues creating a report.</p>
   * @public
   */
  ErrorDetail?: string;
}

/**
 * <p>Describes the detailed result of a <code>TaskExecution</code> operation. This result
 *       includes the time in milliseconds spent in each phase, the status of the task execution, and
 *       the errors encountered.</p>
 * @public
 */
export interface TaskExecutionResultDetail {
  /**
   * <p>The total time in milliseconds that DataSync spent in the PREPARING
   *       phase. </p>
   * @public
   */
  PrepareDuration?: number;

  /**
   * <p>The status of the PREPARING phase.</p>
   * @public
   */
  PrepareStatus?: PhaseStatus;

  /**
   * <p>The total time in milliseconds that DataSync took to transfer the file from
   *       the source to the destination location.</p>
   * @public
   */
  TotalDuration?: number;

  /**
   * <p>The total time in milliseconds that DataSync spent in the TRANSFERRING
   *       phase.</p>
   * @public
   */
  TransferDuration?: number;

  /**
   * <p>The status of the TRANSFERRING phase.</p>
   * @public
   */
  TransferStatus?: PhaseStatus;

  /**
   * <p>The total time in milliseconds that DataSync spent in the VERIFYING
   *       phase.</p>
   * @public
   */
  VerifyDuration?: number;

  /**
   * <p>The status of the VERIFYING phase.</p>
   * @public
   */
  VerifyStatus?: PhaseStatus;

  /**
   * <p>Errors that DataSync encountered during execution of the task. You can
   *       use this error code to help troubleshoot issues.</p>
   * @public
   */
  ErrorCode?: string;

  /**
   * <p>Detailed description of an error that was encountered during the task execution. You
   *       can use this information to help troubleshoot issues. </p>
   * @public
   */
  ErrorDetail?: string;
}

/**
 * @public
 * @enum
 */
export const TaskExecutionStatus = {
  CANCELLING: "CANCELLING",
  ERROR: "ERROR",
  LAUNCHING: "LAUNCHING",
  PREPARING: "PREPARING",
  QUEUED: "QUEUED",
  SUCCESS: "SUCCESS",
  TRANSFERRING: "TRANSFERRING",
  VERIFYING: "VERIFYING",
} as const;

/**
 * @public
 */
export type TaskExecutionStatus = (typeof TaskExecutionStatus)[keyof typeof TaskExecutionStatus];

/**
 * <p>DescribeTaskExecutionResponse</p>
 * @public
 */
export interface DescribeTaskExecutionResponse {
  /**
   * <p>The ARN of the task execution that you wanted information about.
   *         <code>TaskExecutionArn</code> is hierarchical and includes <code>TaskArn</code> for the task
   *       that was executed. </p>
   *          <p>For example, a <code>TaskExecution</code> value with the ARN
   *         <code>arn:aws:datasync:us-east-1:111222333444:task/task-0208075f79cedf4a2/execution/exec-08ef1e88ec491019b</code>
   *       executed the task with the ARN
   *         <code>arn:aws:datasync:us-east-1:111222333444:task/task-0208075f79cedf4a2</code>. </p>
   * @public
   */
  TaskExecutionArn?: string;

  /**
   * <p>The status of the task execution. </p>
   * @public
   */
  Status?: TaskExecutionStatus;

  /**
   * <p>Indicates how your transfer task is configured. These options include how DataSync handles files, objects, and their associated metadata during your transfer. You
   *       also can specify how to verify data integrity, set bandwidth limits for your task, among other
   *       options.</p>
   *          <p>Each option has a default value. Unless you need to, you don't have to configure any option before calling <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>.</p>
   *          <p>You also can override your task options for each task execution. For example, you might want to adjust the <code>LogLevel</code> for an individual execution.</p>
   * @public
   */
  Options?: Options;

  /**
   * <p>A list of filter rules that exclude specific data during your transfer. For more
   *       information and examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html">Filtering data transferred by DataSync</a>.</p>
   * @public
   */
  Excludes?: FilterRule[];

  /**
   * <p>A list of filter rules that include specific data during your transfer. For more
   *       information and examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html">Filtering data transferred by DataSync</a>.</p>
   * @public
   */
  Includes?: FilterRule[];

  /**
   * <p>The configuration of the manifest that lists the files or objects to transfer. For more
   *       information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/transferring-with-manifest.html">Specifying what DataSync transfers by using a manifest</a>.</p>
   * @public
   */
  ManifestConfig?: ManifestConfig;

  /**
   * <p>The time when the task execution started.</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>The expected number of files, objects, and directories that DataSync will
   *       transfer over the network. This value is calculated during the task execution's
   *         <code>PREPARING</code> phase before the <code>TRANSFERRING</code> phase. The calculation is
   *       based on comparing the content of the source and destination locations and finding the
   *       difference that needs to be transferred. </p>
   * @public
   */
  EstimatedFilesToTransfer?: number;

  /**
   * <p>The estimated physical number of bytes that will transfer over the network.</p>
   * @public
   */
  EstimatedBytesToTransfer?: number;

  /**
   * <p>The actual number of files, objects, and directories that DataSync
   *       transferred over the network. This value is updated periodically during the task execution's
   *         <code>TRANSFERRING</code> phase when something is read from the source and sent over the
   *       network.</p>
   *          <p>If DataSync fails to transfer something, this value can be less than
   *         <code>EstimatedFilesToTransfer</code>. In some cases, this value can also be greater than
   *         <code>EstimatedFilesToTransfer</code>. This element is implementation-specific for some
   *       location types, so don't use it as an exact indication of what transferred or to monitor your task execution.</p>
   * @public
   */
  FilesTransferred?: number;

  /**
   * <p>The number of logical bytes written to the destination location.</p>
   * @public
   */
  BytesWritten?: number;

  /**
   * <p>The total number of bytes that are involved in the transfer. For the number of bytes
   *       sent over the network, see <code>BytesCompressed</code>. </p>
   * @public
   */
  BytesTransferred?: number;

  /**
   * <p>The physical number of bytes transferred over the network after compression was applied.
   *       In most cases, this number is less than <code>BytesTransferred</code> unless the data isn't
   *       compressible.</p>
   * @public
   */
  BytesCompressed?: number;

  /**
   * <p>The result of the task execution.</p>
   * @public
   */
  Result?: TaskExecutionResultDetail;

  /**
   * <p>The configuration of your task report, which provides detailed information about for your
   *         DataSync transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/task-reports.html">Creating a task report</a>.</p>
   * @public
   */
  TaskReportConfig?: TaskReportConfig;

  /**
   * <p>The number of files, objects, and directories that DataSync deleted in your
   *       destination location. If you don't <a href="https://docs.aws.amazon.com/datasync/latest/userguide/configure-metadata.html">configure your task</a> to
   *       delete data in the destination that isn't in the source, the value is always
   *       <code>0</code>.</p>
   * @public
   */
  FilesDeleted?: number;

  /**
   * <p>The number of files, objects, and directories that DataSync skipped during your
   *       transfer.</p>
   * @public
   */
  FilesSkipped?: number;

  /**
   * <p>The number of files, objects, and directories that DataSync verified during your
   *       transfer.</p>
   *          <note>
   *             <p>When you configure your task to <a href="https://docs.aws.amazon.com/datasync/latest/userguide/configure-data-verification-options.html">verify only the
   *           data that's transferred</a>, DataSync doesn't verify directories in some
   *         situations or files that fail to transfer.</p>
   *          </note>
   * @public
   */
  FilesVerified?: number;

  /**
   * <p>Indicates whether DataSync generated a complete <a href="https://docs.aws.amazon.com/datasync/latest/userguide/task-reports.html">task report</a> for your
   *       transfer.</p>
   * @public
   */
  ReportResult?: ReportResult;

  /**
   * <p>The expected number of files, objects, and directories that DataSync will delete
   *       in your destination location.  If you don't <a href="https://docs.aws.amazon.com/datasync/latest/userguide/configure-metadata.html">configure your task</a> to
   *       delete data in the destination that isn't in the source, the value is always
   *       <code>0</code>.</p>
   * @public
   */
  EstimatedFilesToDelete?: number;
}

/**
 * <p>The details about a specific DataSync discovery job.</p>
 * @public
 */
export interface DiscoveryJobListEntry {
  /**
   * <p>The Amazon Resource Name (ARN) of a discovery job.</p>
   * @public
   */
  DiscoveryJobArn?: string;

  /**
   * <p>The status of a discovery job. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-job-statuses.html#discovery-job-statuses-table">Discovery job statuses</a>.</p>
   * @public
   */
  Status?: DiscoveryJobStatus;
}

/**
 * @public
 */
export interface GenerateRecommendationsRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the discovery job that collects information
   *       about your on-premises storage system.</p>
   * @public
   */
  DiscoveryJobArn: string | undefined;

  /**
   * <p>Specifies the universally unique identifiers (UUIDs) of the resources in your storage
   *       system that you want recommendations on.</p>
   * @public
   */
  ResourceIds: string[] | undefined;

  /**
   * <p>Specifies the type of resource in your storage system that you want recommendations
   *       on.</p>
   * @public
   */
  ResourceType: DiscoveryResourceType | undefined;
}

/**
 * @public
 */
export interface GenerateRecommendationsResponse {}

/**
 * <p>ListAgentsRequest</p>
 * @public
 */
export interface ListAgentsRequest {
  /**
   * <p>Specifies the maximum number of DataSync agents to list in a response. By
   *       default, a response shows a maximum of 100 agents.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Specifies an opaque string that indicates the position to begin the next list of
   *       results in the response.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>ListAgentsResponse</p>
 * @public
 */
export interface ListAgentsResponse {
  /**
   * <p>A list of DataSync agents in your Amazon Web Services account in the Amazon Web Services Region specified in the request. The list is ordered by the agents' Amazon
   *       Resource Names (ARNs).</p>
   * @public
   */
  Agents?: AgentListEntry[];

  /**
   * <p>The opaque string that indicates the position to begin the next list of results in the
   *       response.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDiscoveryJobsRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of an on-premises storage system. Use this
   *       parameter if you only want to list the discovery jobs that are associated with a specific
   *       storage system.</p>
   * @public
   */
  StorageSystemArn?: string;

  /**
   * <p>Specifies how many results you want in the response.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Specifies an opaque string that indicates the position to begin the next list of results
   *       in the response.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDiscoveryJobsResponse {
  /**
   * <p>The discovery jobs that you've run.</p>
   * @public
   */
  DiscoveryJobs?: DiscoveryJobListEntry[];

  /**
   * <p>The opaque string that indicates the position to begin the next list of results in the
   *       response.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const LocationFilterName = {
  CreationTime: "CreationTime",
  LocationType: "LocationType",
  LocationUri: "LocationUri",
} as const;

/**
 * @public
 */
export type LocationFilterName = (typeof LocationFilterName)[keyof typeof LocationFilterName];

/**
 * @public
 * @enum
 */
export const Operator = {
  BEGINS_WITH: "BeginsWith",
  CONTAINS: "Contains",
  EQ: "Equals",
  GE: "GreaterThanOrEqual",
  GT: "GreaterThan",
  IN: "In",
  LE: "LessThanOrEqual",
  LT: "LessThan",
  NE: "NotEquals",
  NOT_CONTAINS: "NotContains",
} as const;

/**
 * @public
 */
export type Operator = (typeof Operator)[keyof typeof Operator];

/**
 * <p>Narrow down the list of resources returned by <code>ListLocations</code>. For example, to
 *       see all your Amazon S3 locations, create a filter using <code>"Name":
 *         "LocationType"</code>, <code>"Operator": "Equals"</code>, and <code>"Values":
 *       "S3"</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/query-resources.html">filtering resources</a>.</p>
 * @public
 */
export interface LocationFilter {
  /**
   * <p>The name of the filter being used. Each API call supports a list of filters that are
   *       available for it (for example, <code>LocationType</code> for
   *       <code>ListLocations</code>).</p>
   * @public
   */
  Name: LocationFilterName | undefined;

  /**
   * <p>The values that you want to filter for. For example, you might want to display only Amazon
   *       S3 locations.</p>
   * @public
   */
  Values: string[] | undefined;

  /**
   * <p>The operator that is used to compare filter values (for example, <code>Equals</code> or
   *         <code>Contains</code>).</p>
   * @public
   */
  Operator: Operator | undefined;
}

/**
 * <p>ListLocationsRequest</p>
 * @public
 */
export interface ListLocationsRequest {
  /**
   * <p>The maximum number of locations to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>An opaque string that indicates the position at which to begin the next list of
   *       locations.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>You can use API filters to narrow down the list of resources returned by
   *         <code>ListLocations</code>. For example, to retrieve all tasks on a specific source
   *       location, you can use <code>ListLocations</code> with filter name <code>LocationType S3</code>
   *       and <code>Operator Equals</code>.</p>
   * @public
   */
  Filters?: LocationFilter[];
}

/**
 * <p>Represents a single entry in a list of locations. <code>LocationListEntry</code>
 *       returns an array that contains a list of locations when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListLocations.html">ListLocations</a> operation is
 *       called.</p>
 * @public
 */
export interface LocationListEntry {
  /**
   * <p>The Amazon Resource Name (ARN) of the location. For Network File System (NFS) or Amazon
   *       EFS, the location is the export path. For Amazon S3, the location is the prefix path that you
   *       want to mount and use as the root of the location.</p>
   * @public
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
   * @public
   */
  LocationUri?: string;
}

/**
 * <p>ListLocationsResponse</p>
 * @public
 */
export interface ListLocationsResponse {
  /**
   * <p>An array that contains a list of locations.</p>
   * @public
   */
  Locations?: LocationListEntry[];

  /**
   * <p>An opaque string that indicates the position at which to begin returning the next list
   *       of locations.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListStorageSystemsRequest {
  /**
   * <p>Specifies how many results you want in the response.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Specifies an opaque string that indicates the position to begin the next list of results
   *       in the response. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Information that identifies an on-premises storage system that you're using with
 *       DataSync Discovery.</p>
 * @public
 */
export interface StorageSystemListEntry {
  /**
   * <p>The Amazon Resource Names (ARN) of an on-premises storage system that you added to
   *       DataSync Discovery.</p>
   * @public
   */
  StorageSystemArn?: string;

  /**
   * <p>The name of an on-premises storage system that you added to DataSync Discovery.</p>
   * @public
   */
  Name?: string;
}

/**
 * @public
 */
export interface ListStorageSystemsResponse {
  /**
   * <p>The Amazon Resource Names ARNs) of the on-premises storage systems that you're using with
   *       DataSync Discovery.</p>
   * @public
   */
  StorageSystems?: StorageSystemListEntry[];

  /**
   * <p>The opaque string that indicates the position to begin the next list of results in the
   *       response.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>ListTagsForResourceRequest</p>
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the resource that you want tag information
   *       on.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Specifies how many results that you want in the response.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Specifies an opaque string that indicates the position to begin the next list of
   *       results in the response.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>ListTagsForResourceResponse</p>
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>An array of tags applied to the specified resource.</p>
   * @public
   */
  Tags?: TagListEntry[];

  /**
   * <p>The opaque string that indicates the position to begin the next list of results in the
   *       response.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>ListTaskExecutions</p>
 * @public
 */
export interface ListTaskExecutionsRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the task that you want execution
   *       information about.</p>
   * @public
   */
  TaskArn?: string;

  /**
   * <p>Specifies how many results you want in the response.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Specifies an opaque string that indicates the position at which to begin the next list
   *       of results in the response.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Represents a single entry in a list of DataSync task executions that's
 *       returned with the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTaskExecutions.html">ListTaskExecutions</a>
 *       operation.</p>
 * @public
 */
export interface TaskExecutionListEntry {
  /**
   * <p>The Amazon Resource Name (ARN) of a task execution.</p>
   * @public
   */
  TaskExecutionArn?: string;

  /**
   * <p>The status of a task execution. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/understand-task-statuses.html#understand-task-execution-statuses">Task execution statuses</a>.</p>
   * @public
   */
  Status?: TaskExecutionStatus;
}

/**
 * <p>ListTaskExecutionsResponse</p>
 * @public
 */
export interface ListTaskExecutionsResponse {
  /**
   * <p>A list of the task's executions.</p>
   * @public
   */
  TaskExecutions?: TaskExecutionListEntry[];

  /**
   * <p>The opaque string that indicates the position to begin the next list of results in the
   *       response.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const TaskFilterName = {
  CreationTime: "CreationTime",
  LocationId: "LocationId",
} as const;

/**
 * @public
 */
export type TaskFilterName = (typeof TaskFilterName)[keyof typeof TaskFilterName];

/**
 * <p>You can use API filters to narrow down the list of resources returned by
 *         <code>ListTasks</code>. For example, to retrieve all tasks on a source location, you can use
 *         <code>ListTasks</code> with filter name <code>LocationId</code> and <code>Operator
 *         Equals</code> with the ARN for the location.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/query-resources.html">filtering DataSync
 *         resources</a>.</p>
 * @public
 */
export interface TaskFilter {
  /**
   * <p>The name of the filter being used. Each API call supports a list of filters that are
   *       available for it. For example, <code>LocationId</code> for <code>ListTasks</code>.</p>
   * @public
   */
  Name: TaskFilterName | undefined;

  /**
   * <p>The values that you want to filter for. For example, you might want to display only tasks
   *       for a specific destination location.</p>
   * @public
   */
  Values: string[] | undefined;

  /**
   * <p>The operator that is used to compare filter values (for example, <code>Equals</code> or
   *         <code>Contains</code>).</p>
   * @public
   */
  Operator: Operator | undefined;
}

/**
 * <p>ListTasksRequest</p>
 * @public
 */
export interface ListTasksRequest {
  /**
   * <p>The maximum number of tasks to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>An opaque string that indicates the position at which to begin the next list of
   *       tasks.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>You can use API filters to narrow down the list of resources returned by
   *         <code>ListTasks</code>. For example, to retrieve all tasks on a specific source location,
   *       you can use <code>ListTasks</code> with filter name <code>LocationId</code> and <code>Operator
   *         Equals</code> with the ARN for the location.</p>
   * @public
   */
  Filters?: TaskFilter[];
}

/**
 * <p>Represents a single entry in a list of tasks. <code>TaskListEntry</code> returns an
 *       array that contains a list of tasks when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTasks.html">ListTasks</a> operation is called. A
 *       task includes the source and destination file systems to sync and the options to use for the
 *       tasks.</p>
 * @public
 */
export interface TaskListEntry {
  /**
   * <p>The Amazon Resource Name (ARN) of the task.</p>
   * @public
   */
  TaskArn?: string;

  /**
   * <p>The status of the task.</p>
   * @public
   */
  Status?: TaskStatus;

  /**
   * <p>The name of the task.</p>
   * @public
   */
  Name?: string;
}

/**
 * <p>ListTasksResponse</p>
 * @public
 */
export interface ListTasksResponse {
  /**
   * <p>A list of all the tasks that are returned.</p>
   * @public
   */
  Tasks?: TaskListEntry[];

  /**
   * <p>An opaque string that indicates the position at which to begin returning the next list
   *       of tasks.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface RemoveStorageSystemRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the storage system that you want to
   *       permanently remove from DataSync Discovery.</p>
   * @public
   */
  StorageSystemArn: string | undefined;
}

/**
 * @public
 */
export interface RemoveStorageSystemResponse {}

/**
 * @public
 */
export interface StartDiscoveryJobRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the on-premises storage system that you want
   *       to run the discovery job on.</p>
   * @public
   */
  StorageSystemArn: string | undefined;

  /**
   * <p>Specifies in minutes how long you want the discovery job to run.</p>
   *          <note>
   *             <p>For more accurate recommendations, we recommend a duration of at least 14 days. Longer
   *         durations allow time to collect a sufficient number of data points and provide a realistic
   *         representation of storage performance and utilization.</p>
   *          </note>
   * @public
   */
  CollectionDurationMinutes: number | undefined;

  /**
   * <p>Specifies a client token to make sure requests with this API operation are idempotent. If
   *       you don't specify a client token, DataSync generates one for you automatically.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>Specifies labels that help you categorize, filter, and search for your Amazon Web Services
   *       resources.</p>
   * @public
   */
  Tags?: TagListEntry[];
}

/**
 * @public
 */
export interface StartDiscoveryJobResponse {
  /**
   * <p>The ARN of the discovery job that you started.</p>
   * @public
   */
  DiscoveryJobArn?: string;
}

/**
 * <p>StartTaskExecutionRequest</p>
 * @public
 */
export interface StartTaskExecutionRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the task that you want to start.</p>
   * @public
   */
  TaskArn: string | undefined;

  /**
   * <p>Indicates how your transfer task is configured. These options include how DataSync handles files, objects, and their associated metadata during your transfer. You
   *       also can specify how to verify data integrity, set bandwidth limits for your task, among other
   *       options.</p>
   *          <p>Each option has a default value. Unless you need to, you don't have to configure any option before calling <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>.</p>
   *          <p>You also can override your task options for each task execution. For example, you might want to adjust the <code>LogLevel</code> for an individual execution.</p>
   * @public
   */
  OverrideOptions?: Options;

  /**
   * <p>Specifies a list of filter rules that determines which files to include when running a
   *       task. The pattern should contain a single filter string that consists of the patterns to
   *       include. The patterns are delimited by "|" (that is, a pipe), for example,
   *         <code>"/folder1|/folder2"</code>. </p>
   * @public
   */
  Includes?: FilterRule[];

  /**
   * <p>Specifies a list of filter rules that determines which files to exclude from a task. The
   *       list contains a single filter string that consists of the patterns to exclude. The patterns
   *       are delimited by "|" (that is, a pipe), for example, <code>"/folder1|/folder2"</code>. </p>
   * @public
   */
  Excludes?: FilterRule[];

  /**
   * <p>Configures a manifest, which is a list of files or objects that you want DataSync to transfer. For more information and configuration examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/transferring-with-manifest.html">Specifying what DataSync transfers by using a manifest</a>.</p>
   *          <p>When using this parameter, your caller identity (the role that you're using DataSync with) must have the <code>iam:PassRole</code> permission. The <a href="https://docs.aws.amazon.com/datasync/latest/userguide/security-iam-awsmanpol.html#security-iam-awsmanpol-awsdatasyncfullaccess">AWSDataSyncFullAccess</a> policy includes this permission.</p>
   *          <p>To remove a manifest configuration, specify this parameter with an empty value.</p>
   * @public
   */
  ManifestConfig?: ManifestConfig;

  /**
   * <p>Specifies how you want to configure a task report, which provides detailed information
   *       about your DataSync transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/task-reports.html">Monitoring your DataSync
   *         transfers with task reports</a>.</p>
   *          <p>When using this parameter, your caller identity (the role that you're using DataSync with) must have the <code>iam:PassRole</code> permission. The <a href="https://docs.aws.amazon.com/datasync/latest/userguide/security-iam-awsmanpol.html#security-iam-awsmanpol-awsdatasyncfullaccess">AWSDataSyncFullAccess</a> policy includes this permission.</p>
   *          <p>To remove a task report configuration, specify this parameter as empty.</p>
   * @public
   */
  TaskReportConfig?: TaskReportConfig;

  /**
   * <p>Specifies the tags that you want to apply to the Amazon Resource Name (ARN) representing
   *       the task execution.</p>
   *          <p>
   *             <i>Tags</i> are key-value pairs that help you manage, filter, and search for
   *       your DataSync resources.</p>
   * @public
   */
  Tags?: TagListEntry[];
}

/**
 * <p>StartTaskExecutionResponse</p>
 * @public
 */
export interface StartTaskExecutionResponse {
  /**
   * <p>The ARN of the running task execution.</p>
   * @public
   */
  TaskExecutionArn?: string;
}

/**
 * @public
 */
export interface StopDiscoveryJobRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the discovery job that you want to stop.
   *     </p>
   * @public
   */
  DiscoveryJobArn: string | undefined;
}

/**
 * @public
 */
export interface StopDiscoveryJobResponse {}

/**
 * <p>TagResourceRequest</p>
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the resource to apply the tag to.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Specifies the tags that you want to apply to the resource.</p>
   * @public
   */
  Tags: TagListEntry[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * <p>UntagResourceRequest</p>
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the resource to remove the tags
   *       from.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Specifies the keys in the tags that you want to remove.</p>
   * @public
   */
  Keys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * <p>UpdateAgentRequest</p>
 * @public
 */
export interface UpdateAgentRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the agent to update.</p>
   * @public
   */
  AgentArn: string | undefined;

  /**
   * <p>The name that you want to use to configure the agent.</p>
   * @public
   */
  Name?: string;
}

/**
 * @public
 */
export interface UpdateAgentResponse {}

/**
 * @public
 */
export interface UpdateDiscoveryJobRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the discovery job that you want to
   *       update.</p>
   * @public
   */
  DiscoveryJobArn: string | undefined;

  /**
   * <p>Specifies in minutes how long that you want the discovery job to run. (You can't set this
   *       parameter to less than the number of minutes that the job has already run for.)</p>
   * @public
   */
  CollectionDurationMinutes: number | undefined;
}

/**
 * @public
 */
export interface UpdateDiscoveryJobResponse {}

/**
 * @public
 */
export interface UpdateLocationAzureBlobRequest {
  /**
   * <p>Specifies the ARN of the Azure Blob Storage transfer location that you're updating.</p>
   * @public
   */
  LocationArn: string | undefined;

  /**
   * <p>Specifies path segments if you want to limit your transfer to a virtual directory in your
   *       container (for example, <code>/my/images</code>).</p>
   * @public
   */
  Subdirectory?: string;

  /**
   * <p>Specifies the authentication method DataSync uses to access your Azure Blob Storage. DataSync can access blob storage using a shared access signature (SAS).</p>
   * @public
   */
  AuthenticationType?: AzureBlobAuthenticationType;

  /**
   * <p>Specifies the SAS configuration that allows DataSync to access your Azure Blob Storage.</p>
   * @public
   */
  SasConfiguration?: AzureBlobSasConfiguration;

  /**
   * <p>Specifies the type of blob that you want your objects or files to be when transferring
   *       them into Azure Blob Storage. Currently, DataSync only supports moving data into
   *       Azure Blob Storage as block blobs. For more information on blob types, see the <a href="https://learn.microsoft.com/en-us/rest/api/storageservices/understanding-block-blobs--append-blobs--and-page-blobs">Azure Blob Storage documentation</a>.</p>
   * @public
   */
  BlobType?: AzureBlobType;

  /**
   * <p>Specifies the access tier that you want your objects or files transferred into. This only applies when using the location as a transfer destination. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#azure-blob-access-tiers">Access tiers</a>.</p>
   * @public
   */
  AccessTier?: AzureAccessTier;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the DataSync agent that can connect with your Azure Blob Storage container.</p>
   *          <p>You can specify more than one agent. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/multiple-agents.html">Using multiple
   *       agents for your transfer</a>.</p>
   * @public
   */
  AgentArns?: string[];
}

/**
 * @public
 */
export interface UpdateLocationAzureBlobResponse {}

/**
 * @public
 */
export interface UpdateLocationHdfsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the source HDFS cluster location.</p>
   * @public
   */
  LocationArn: string | undefined;

  /**
   * <p>A subdirectory in the HDFS cluster. This subdirectory is used to read data from or write
   *       data to the HDFS cluster.</p>
   * @public
   */
  Subdirectory?: string;

  /**
   * <p>The NameNode that manages the HDFS namespace. The NameNode performs operations such as
   *       opening, closing, and renaming files and directories. The NameNode contains the information to
   *       map blocks of data to the DataNodes. You can use only one NameNode.</p>
   * @public
   */
  NameNodes?: HdfsNameNode[];

  /**
   * <p>The size of the data blocks to write into the HDFS cluster. </p>
   * @public
   */
  BlockSize?: number;

  /**
   * <p>The number of DataNodes to replicate the data to when writing to the HDFS cluster. </p>
   * @public
   */
  ReplicationFactor?: number;

  /**
   * <p>The URI of the HDFS cluster's Key Management Server (KMS). </p>
   * @public
   */
  KmsKeyProviderUri?: string;

  /**
   * <p>The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC)
   *       and data transfer privacy settings configured on the Hadoop Distributed File System (HDFS)
   *       cluster. </p>
   * @public
   */
  QopConfiguration?: QopConfiguration;

  /**
   * <p>The type of authentication used to determine the identity of the user. </p>
   * @public
   */
  AuthenticationType?: HdfsAuthenticationType;

  /**
   * <p>The user name used to identify the client on the host operating system.</p>
   * @public
   */
  SimpleUser?: string;

  /**
   * <p>The Kerberos principal with access to the files and folders on the HDFS cluster. </p>
   * @public
   */
  KerberosPrincipal?: string;

  /**
   * <p>The Kerberos key table (keytab) that contains mappings between the defined Kerberos
   *       principal and the encrypted keys. You can load the keytab from a file by providing the file's
   *       address. If you use the CLI, it performs base64 encoding for you. Otherwise,
   *       provide the base64-encoded text.</p>
   * @public
   */
  KerberosKeytab?: Uint8Array;

  /**
   * <p>The <code>krb5.conf</code> file that contains the Kerberos configuration information. You
   *       can load the <code>krb5.conf</code> file by providing the file's address. If you're using the
   *         CLI, it performs the base64 encoding for you. Otherwise, provide the
   *       base64-encoded text.</p>
   * @public
   */
  KerberosKrb5Conf?: Uint8Array;

  /**
   * <p>The ARNs of the agents that are used to connect to the HDFS cluster. </p>
   * @public
   */
  AgentArns?: string[];
}

/**
 * @public
 */
export interface UpdateLocationHdfsResponse {}

/**
 * @public
 */
export interface UpdateLocationNfsRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the NFS transfer location that you want to
   *       update.</p>
   * @public
   */
  LocationArn: string | undefined;

  /**
   * <p>Specifies the export path in your NFS file server that you want DataSync to
   *       mount.</p>
   *          <p>This path (or a subdirectory of the path) is where DataSync transfers data to
   *       or from. For information on configuring an export for DataSync, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html#accessing-nfs">Accessing NFS file servers</a>.</p>
   * @public
   */
  Subdirectory?: string;

  /**
   * <p>The DataSync agents that are connecting to a Network File System (NFS)
   *       location.</p>
   * @public
   */
  OnPremConfig?: OnPremConfig;

  /**
   * <p>Specifies how DataSync can access a location using the NFS protocol.</p>
   * @public
   */
  MountOptions?: NfsMountOptions;
}

/**
 * @public
 */
export interface UpdateLocationNfsResponse {}

/**
 * @public
 */
export interface UpdateLocationObjectStorageRequest {
  /**
   * <p>Specifies the ARN of the object storage system location that you're updating.</p>
   * @public
   */
  LocationArn: string | undefined;

  /**
   * <p>Specifies the port that your object storage server accepts inbound network traffic on (for
   *       example, port 443).</p>
   * @public
   */
  ServerPort?: number;

  /**
   * <p>Specifies the protocol that your object storage server uses to communicate.</p>
   * @public
   */
  ServerProtocol?: ObjectStorageServerProtocol;

  /**
   * <p>Specifies the object prefix for your object storage server. If this is a source location,
   *       DataSync only copies objects with this prefix. If this is a destination location, DataSync
   *       writes all objects with this prefix.</p>
   * @public
   */
  Subdirectory?: string;

  /**
   * <p>Specifies the access key (for example, a user name) if credentials are required to
   *       authenticate with the object storage server.</p>
   * @public
   */
  AccessKey?: string;

  /**
   * <p>Specifies the secret key (for example, a password) if credentials are required to
   *       authenticate with the object storage server.</p>
   * @public
   */
  SecretKey?: string;

  /**
   * <p>Specifies the Amazon Resource Names (ARNs) of the DataSync agents that can
   *       securely connect with your location.</p>
   * @public
   */
  AgentArns?: string[];

  /**
   * <p>Specifies a certificate chain for DataSync to authenticate with your object
   *       storage system if the system uses a private or self-signed certificate authority (CA). You
   *       must specify a single <code>.pem</code> file with a full certificate chain (for example,
   *         <code>file:///home/user/.ssh/object_storage_certificates.pem</code>).</p>
   *          <p>The certificate chain might include:</p>
   *          <ul>
   *             <li>
   *                <p>The object storage system's certificate</p>
   *             </li>
   *             <li>
   *                <p>All intermediate certificates (if there are any)</p>
   *             </li>
   *             <li>
   *                <p>The root certificate of the signing CA</p>
   *             </li>
   *          </ul>
   *          <p>You can concatenate your certificates into a <code>.pem</code> file (which can be up to
   *       32768 bytes before base64 encoding). The following example <code>cat</code> command creates an
   *         <code>object_storage_certificates.pem</code> file that includes three certificates:</p>
   *          <p>
   *             <code>cat object_server_certificate.pem intermediate_certificate.pem
   *       ca_root_certificate.pem > object_storage_certificates.pem</code>
   *          </p>
   *          <p>To use this parameter, configure <code>ServerProtocol</code> to <code>HTTPS</code>.</p>
   *          <p>Updating this parameter doesn't interfere with tasks that you have in progress.</p>
   * @public
   */
  ServerCertificate?: Uint8Array;
}

/**
 * @public
 */
export interface UpdateLocationObjectStorageResponse {}

/**
 * @public
 */
export interface UpdateLocationSmbRequest {
  /**
   * <p>Specifies the ARN of the SMB location that you want to update.</p>
   * @public
   */
  LocationArn: string | undefined;

  /**
   * <p>Specifies the name of the share exported by your SMB file server where DataSync
   *       will read or write data. You can include a subdirectory in the share path (for example,
   *       <code>/path/to/subdirectory</code>). Make sure that other SMB clients in your network can
   *       also mount this path.</p>
   *          <p>To copy all data in the specified subdirectory, DataSync must be able to mount
   *       the SMB share and access all of its data. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html#configuring-smb-permissions">required permissions</a> for SMB locations.</p>
   * @public
   */
  Subdirectory?: string;

  /**
   * <p>Specifies the user name that can mount your SMB file server and has permission to access
   *       the files and folders involved in your transfer.</p>
   *          <p>For information about choosing a user with the right level of access for your transfer,
   *       see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html#configuring-smb-permissions">required permissions</a> for SMB locations.</p>
   * @public
   */
  User?: string;

  /**
   * <p>Specifies the Windows domain name that your SMB file server belongs to. </p>
   *          <p>If you have multiple domains in your environment, configuring this parameter makes sure that DataSync connects to the right file server.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html#configuring-smb-permissions">required permissions</a> for SMB locations.</p>
   * @public
   */
  Domain?: string;

  /**
   * <p>Specifies the password of the user who can mount your SMB file server and has permission
   *       to access the files and folders involved in your transfer.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html#configuring-smb-permissions">required permissions</a> for SMB locations.</p>
   * @public
   */
  Password?: string;

  /**
   * <p>Specifies the DataSync agent (or agents) which you want to connect to your SMB file server. You specify an agent by using its Amazon Resource Name (ARN).</p>
   * @public
   */
  AgentArns?: string[];

  /**
   * <p>Specifies the version of the Server Message Block (SMB) protocol that DataSync uses to access an SMB file server.</p>
   * @public
   */
  MountOptions?: SmbMountOptions;
}

/**
 * @public
 */
export interface UpdateLocationSmbResponse {}

/**
 * @public
 */
export interface UpdateStorageSystemRequest {
  /**
   * <p>Specifies the ARN of the on-premises storage system that you want reconfigure.</p>
   * @public
   */
  StorageSystemArn: string | undefined;

  /**
   * <p>Specifies the server name and network port required to connect with your on-premises
   *       storage system's management interface.</p>
   * @public
   */
  ServerConfiguration?: DiscoveryServerConfiguration;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the DataSync agent that connects to and reads
   *       your on-premises storage system. You can only specify one ARN.</p>
   * @public
   */
  AgentArns?: string[];

  /**
   * <p>Specifies a familiar name for your on-premises storage system.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Specifies the ARN of the Amazon CloudWatch log group for monitoring and logging
   *       discovery job events.</p>
   * @public
   */
  CloudWatchLogGroupArn?: string;

  /**
   * <p>Specifies the user name and password for accessing your on-premises storage system's
   *       management interface.</p>
   * @public
   */
  Credentials?: Credentials;
}

/**
 * @public
 */
export interface UpdateStorageSystemResponse {}

/**
 * <p>UpdateTaskResponse</p>
 * @public
 */
export interface UpdateTaskRequest {
  /**
   * <p>Specifies the ARN of the task that you want to update.</p>
   * @public
   */
  TaskArn: string | undefined;

  /**
   * <p>Indicates how your transfer task is configured. These options include how DataSync handles files, objects, and their associated metadata during your transfer. You
   *       also can specify how to verify data integrity, set bandwidth limits for your task, among other
   *       options.</p>
   *          <p>Each option has a default value. Unless you need to, you don't have to configure any option before calling <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>.</p>
   *          <p>You also can override your task options for each task execution. For example, you might want to adjust the <code>LogLevel</code> for an individual execution.</p>
   * @public
   */
  Options?: Options;

  /**
   * <p>Specifies exclude filters that define the files, objects, and folders in your source location that you don't want DataSync to transfer. For more
   *       information and examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html">Specifying what DataSync transfers by using filters</a>.</p>
   * @public
   */
  Excludes?: FilterRule[];

  /**
   * <p>Specifies a schedule for when you want your task to run. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/task-scheduling.html">Scheduling your
   *       task</a>.</p>
   * @public
   */
  Schedule?: TaskSchedule;

  /**
   * <p>Specifies the name of your task.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of an Amazon CloudWatch log group for
   *       monitoring your task.</p>
   * @public
   */
  CloudWatchLogGroupArn?: string;

  /**
   * <p>Specifies include filters define the files, objects, and folders in your source location
   *       that you want DataSync to transfer. For more information and examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html">Specifying what DataSync transfers by using filters</a>.</p>
   * @public
   */
  Includes?: FilterRule[];

  /**
   * <p>Configures a manifest, which is a list of files or objects that you want DataSync to transfer. For more information and configuration examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/transferring-with-manifest.html">Specifying what DataSync transfers by using a manifest</a>.</p>
   *          <p>When using this parameter, your caller identity (the IAM role that you're using DataSync with) must have the <code>iam:PassRole</code> permission. The <a href="https://docs.aws.amazon.com/datasync/latest/userguide/security-iam-awsmanpol.html#security-iam-awsmanpol-awsdatasyncfullaccess">AWSDataSyncFullAccess</a> policy includes this permission.</p>
   *          <p>To remove a manifest configuration, specify this parameter as empty.</p>
   * @public
   */
  ManifestConfig?: ManifestConfig;

  /**
   * <p>Specifies how you want to configure a task report, which provides detailed information
   *       about your DataSync transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/task-reports.html">Monitoring your DataSync
   *         transfers with task reports</a>.</p>
   *          <p>When using this parameter, your caller identity (the IAM role that you're using DataSync with) must have the <code>iam:PassRole</code> permission. The <a href="https://docs.aws.amazon.com/datasync/latest/userguide/security-iam-awsmanpol.html#security-iam-awsmanpol-awsdatasyncfullaccess">AWSDataSyncFullAccess</a> policy includes this permission.</p>
   *          <p>To remove a task report configuration, specify this parameter as empty.</p>
   * @public
   */
  TaskReportConfig?: TaskReportConfig;
}

/**
 * @public
 */
export interface UpdateTaskResponse {}

/**
 * @public
 */
export interface UpdateTaskExecutionRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the task execution that you're
   *       updating.</p>
   * @public
   */
  TaskExecutionArn: string | undefined;

  /**
   * <p>Indicates how your transfer task is configured. These options include how DataSync handles files, objects, and their associated metadata during your transfer. You
   *       also can specify how to verify data integrity, set bandwidth limits for your task, among other
   *       options.</p>
   *          <p>Each option has a default value. Unless you need to, you don't have to configure any option before calling <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>.</p>
   *          <p>You also can override your task options for each task execution. For example, you might want to adjust the <code>LogLevel</code> for an individual execution.</p>
   * @public
   */
  Options: Options | undefined;
}

/**
 * @public
 */
export interface UpdateTaskExecutionResponse {}

/**
 * @internal
 */
export const CredentialsFilterSensitiveLog = (obj: Credentials): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AddStorageSystemRequestFilterSensitiveLog = (obj: AddStorageSystemRequest): any => ({
  ...obj,
  ...(obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }),
});

/**
 * @internal
 */
export const AzureBlobSasConfigurationFilterSensitiveLog = (obj: AzureBlobSasConfiguration): any => ({
  ...obj,
  ...(obj.Token && { Token: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateLocationAzureBlobRequestFilterSensitiveLog = (obj: CreateLocationAzureBlobRequest): any => ({
  ...obj,
  ...(obj.SasConfiguration && { SasConfiguration: AzureBlobSasConfigurationFilterSensitiveLog(obj.SasConfiguration) }),
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
export const CreateLocationFsxOpenZfsRequestFilterSensitiveLog = (obj: CreateLocationFsxOpenZfsRequest): any => ({
  ...obj,
  ...(obj.Protocol && { Protocol: FsxProtocolFilterSensitiveLog(obj.Protocol) }),
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
export const CreateLocationObjectStorageRequestFilterSensitiveLog = (obj: CreateLocationObjectStorageRequest): any => ({
  ...obj,
  ...(obj.SecretKey && { SecretKey: SENSITIVE_STRING }),
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
export const DescribeLocationFsxOntapResponseFilterSensitiveLog = (obj: DescribeLocationFsxOntapResponse): any => ({
  ...obj,
  ...(obj.Protocol && { Protocol: FsxProtocolFilterSensitiveLog(obj.Protocol) }),
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
export const UpdateLocationAzureBlobRequestFilterSensitiveLog = (obj: UpdateLocationAzureBlobRequest): any => ({
  ...obj,
  ...(obj.SasConfiguration && { SasConfiguration: AzureBlobSasConfigurationFilterSensitiveLog(obj.SasConfiguration) }),
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
export const UpdateLocationSmbRequestFilterSensitiveLog = (obj: UpdateLocationSmbRequest): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateStorageSystemRequestFilterSensitiveLog = (obj: UpdateStorageSystemRequest): any => ({
  ...obj,
  ...(obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }),
});
