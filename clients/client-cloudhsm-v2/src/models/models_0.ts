// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CloudHSMV2ServiceException as __BaseException } from "./CloudHSMV2ServiceException";

/**
 * @public
 * @enum
 */
export const BackupState = {
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETED: "DELETED",
  PENDING_DELETION: "PENDING_DELETION",
  READY: "READY",
} as const;

/**
 * @public
 */
export type BackupState = (typeof BackupState)[keyof typeof BackupState];

/**
 * @public
 * @enum
 */
export const ClusterMode = {
  FIPS: "FIPS",
  NON_FIPS: "NON_FIPS",
} as const;

/**
 * @public
 */
export type ClusterMode = (typeof ClusterMode)[keyof typeof ClusterMode];

/**
 * <p>Contains a tag. A tag is a key-value pair.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Contains information about a backup of an CloudHSM cluster. All backup objects
 *       contain the <code>BackupId</code>, <code>BackupState</code>, <code>ClusterId</code>, and
 *         <code>CreateTimestamp</code> parameters. Backups that were copied into a destination region
 *       additionally contain the <code>CopyTimestamp</code>, <code>SourceBackup</code>,
 *         <code>SourceCluster</code>, and <code>SourceRegion</code> parameters. A backup that is
 *       pending deletion will include the <code>DeleteTimestamp</code> parameter.</p>
 * @public
 */
export interface Backup {
  /**
   * <p>The identifier (ID) of the backup.</p>
   * @public
   */
  BackupId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the backup.</p>
   * @public
   */
  BackupArn?: string | undefined;

  /**
   * <p>The state of the backup.</p>
   * @public
   */
  BackupState?: BackupState | undefined;

  /**
   * <p>The identifier (ID) of the cluster that was backed up.</p>
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * <p>The date and time when the backup was created.</p>
   * @public
   */
  CreateTimestamp?: Date | undefined;

  /**
   * <p>The date and time when the backup was copied from a source backup.</p>
   * @public
   */
  CopyTimestamp?: Date | undefined;

  /**
   * <p>Specifies whether the service should exempt a backup from the retention policy for the cluster. <code>True</code> exempts
   *       a backup from the retention policy. <code>False</code> means the service applies the backup retention policy defined at the cluster.</p>
   * @public
   */
  NeverExpires?: boolean | undefined;

  /**
   * <p>The AWS Region that contains the source backup from which the new backup was
   *       copied.</p>
   * @public
   */
  SourceRegion?: string | undefined;

  /**
   * <p>The identifier (ID) of the source backup from which the new backup was
   *       copied.</p>
   * @public
   */
  SourceBackup?: string | undefined;

  /**
   * <p>The identifier (ID) of the cluster containing the source backup from which the new
   *       backup was copied.</p>
   * @public
   */
  SourceCluster?: string | undefined;

  /**
   * <p>The date and time when the backup will be permanently deleted.</p>
   * @public
   */
  DeleteTimestamp?: Date | undefined;

  /**
   * <p>The list of tags for the backup.</p>
   * @public
   */
  TagList?: Tag[] | undefined;

  /**
   * <p>The HSM type used to create the backup.</p>
   * @public
   */
  HsmType?: string | undefined;

  /**
   * <p>The mode of the cluster that was backed up.</p>
   * @public
   */
  Mode?: ClusterMode | undefined;
}

/**
 * @public
 * @enum
 */
export const BackupPolicy = {
  DEFAULT: "DEFAULT",
} as const;

/**
 * @public
 */
export type BackupPolicy = (typeof BackupPolicy)[keyof typeof BackupPolicy];

/**
 * @public
 * @enum
 */
export const BackupRetentionType = {
  DAYS: "DAYS",
} as const;

/**
 * @public
 */
export type BackupRetentionType = (typeof BackupRetentionType)[keyof typeof BackupRetentionType];

/**
 * <p>A policy that defines the number of days to retain backups.</p>
 * @public
 */
export interface BackupRetentionPolicy {
  /**
   * <p>The type of backup retention policy. For the <code>DAYS</code> type, the value is
   *             the number of days to retain backups.</p>
   * @public
   */
  Type?: BackupRetentionType | undefined;

  /**
   * <p>Use a value between 7 - 379.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>The request was rejected because the requester does not have permission to perform the
 *       requested operation.</p>
 * @public
 */
export class CloudHsmAccessDeniedException extends __BaseException {
  readonly name: "CloudHsmAccessDeniedException" = "CloudHsmAccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudHsmAccessDeniedException, __BaseException>) {
    super({
      name: "CloudHsmAccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudHsmAccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was rejected because of an CloudHSM internal failure. The request can
 *       be retried.</p>
 * @public
 */
export class CloudHsmInternalFailureException extends __BaseException {
  readonly name: "CloudHsmInternalFailureException" = "CloudHsmInternalFailureException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudHsmInternalFailureException, __BaseException>) {
    super({
      name: "CloudHsmInternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudHsmInternalFailureException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was rejected because it is not a valid request.</p>
 * @public
 */
export class CloudHsmInvalidRequestException extends __BaseException {
  readonly name: "CloudHsmInvalidRequestException" = "CloudHsmInvalidRequestException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudHsmInvalidRequestException, __BaseException>) {
    super({
      name: "CloudHsmInvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudHsmInvalidRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was rejected because it refers to a resource that cannot be
 *       found.</p>
 * @public
 */
export class CloudHsmResourceNotFoundException extends __BaseException {
  readonly name: "CloudHsmResourceNotFoundException" = "CloudHsmResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudHsmResourceNotFoundException, __BaseException>) {
    super({
      name: "CloudHsmResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudHsmResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was rejected because an error occurred.</p>
 * @public
 */
export class CloudHsmServiceException extends __BaseException {
  readonly name: "CloudHsmServiceException" = "CloudHsmServiceException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudHsmServiceException, __BaseException>) {
    super({
      name: "CloudHsmServiceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudHsmServiceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was rejected because of a tagging failure. Verify the tag conditions in all applicable policies, and then retry the request.</p>
 * @public
 */
export class CloudHsmTagException extends __BaseException {
  readonly name: "CloudHsmTagException" = "CloudHsmTagException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudHsmTagException, __BaseException>) {
    super({
      name: "CloudHsmTagException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudHsmTagException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CopyBackupToRegionRequest {
  /**
   * <p>The AWS region that will contain your copied CloudHSM cluster backup.</p>
   * @public
   */
  DestinationRegion: string | undefined;

  /**
   * <p>The ID of the backup that will be copied to the destination region. </p>
   * @public
   */
  BackupId: string | undefined;

  /**
   * <p>Tags to apply to the destination backup during creation. If you specify tags, only these tags will be applied to the destination backup. If you do not specify tags, the service copies tags from the source backup to the destination backup.</p>
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * <p>Contains information about the backup that will be copied and created by the <a>CopyBackupToRegion</a> operation.</p>
 * @public
 */
export interface DestinationBackup {
  /**
   * <p>The date and time when both the source backup was created.</p>
   * @public
   */
  CreateTimestamp?: Date | undefined;

  /**
   * <p>The AWS region that contains the source backup from which the new backup was copied.</p>
   * @public
   */
  SourceRegion?: string | undefined;

  /**
   * <p>The identifier (ID) of the source backup from which the new backup was copied.</p>
   * @public
   */
  SourceBackup?: string | undefined;

  /**
   * <p>The identifier (ID) of the cluster containing the source backup from which the new backup was copied.</p>
   * @public
   */
  SourceCluster?: string | undefined;
}

/**
 * @public
 */
export interface CopyBackupToRegionResponse {
  /**
   * <p>Information on the backup that will be copied to the destination region, including
   *       CreateTimestamp, SourceBackup, SourceCluster, and Source Region. CreateTimestamp of the
   *       destination backup will be the same as that of the source backup.</p>
   *          <p>You will need to use the <code>sourceBackupID</code> returned in this operation to use
   *       the <a>DescribeBackups</a> operation on the backup that will be copied to the
   *       destination region.</p>
   * @public
   */
  DestinationBackup?: DestinationBackup | undefined;
}

/**
 * @public
 * @enum
 */
export const NetworkType = {
  DUALSTACK: "DUALSTACK",
  IPV4: "IPV4",
} as const;

/**
 * @public
 */
export type NetworkType = (typeof NetworkType)[keyof typeof NetworkType];

/**
 * @public
 */
export interface CreateClusterRequest {
  /**
   * <p>A policy that defines how the service retains backups.</p>
   * @public
   */
  BackupRetentionPolicy?: BackupRetentionPolicy | undefined;

  /**
   * <p>The type of HSM to use in the cluster. The allowed values are
   *       <code>hsm1.medium</code> and <code>hsm2m.medium</code>.</p>
   * @public
   */
  HsmType: string | undefined;

  /**
   * <p>The identifier (ID) or the Amazon Resource Name (ARN) of the cluster backup to restore. Use this value to restore the
   *       cluster from a backup instead of creating a new cluster. To find the backup ID or ARN, use <a>DescribeBackups</a>. <i>If using a backup in another account, the full ARN must be supplied.</i>
   *          </p>
   * @public
   */
  SourceBackupId?: string | undefined;

  /**
   * <p>The identifiers (IDs) of the subnets where you are creating the cluster. You must
   *       specify at least one subnet. If you specify multiple subnets, they must meet the following
   *       criteria:</p>
   *          <ul>
   *             <li>
   *                <p>All subnets must be in the same virtual private cloud (VPC).</p>
   *             </li>
   *             <li>
   *                <p>You can specify only one subnet per Availability Zone.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The NetworkType to create a cluster with. The allowed values are
   *           <code>IPV4</code> and <code>DUALSTACK</code>.
   *       </p>
   * @public
   */
  NetworkType?: NetworkType | undefined;

  /**
   * <p>Tags to apply to the CloudHSM cluster during creation.</p>
   * @public
   */
  TagList?: Tag[] | undefined;

  /**
   * <p>The mode to use in the cluster. The allowed values are
   *       <code>FIPS</code> and <code>NON_FIPS</code>.</p>
   * @public
   */
  Mode?: ClusterMode | undefined;
}

/**
 * <p>Contains one or more certificates or a certificate signing request (CSR).</p>
 * @public
 */
export interface Certificates {
  /**
   * <p>The cluster's certificate signing request (CSR). The CSR exists only when the cluster's
   *       state is <code>UNINITIALIZED</code>.</p>
   * @public
   */
  ClusterCsr?: string | undefined;

  /**
   * <p>The HSM certificate issued (signed) by the HSM hardware.</p>
   * @public
   */
  HsmCertificate?: string | undefined;

  /**
   * <p>The HSM hardware certificate issued (signed) by CloudHSM.</p>
   * @public
   */
  AwsHardwareCertificate?: string | undefined;

  /**
   * <p>The HSM hardware certificate issued (signed) by the hardware manufacturer.</p>
   * @public
   */
  ManufacturerHardwareCertificate?: string | undefined;

  /**
   * <p>The cluster certificate issued (signed) by the issuing certificate authority (CA) of
   *       the cluster's owner.</p>
   * @public
   */
  ClusterCertificate?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const HsmState = {
  ACTIVE: "ACTIVE",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DEGRADED: "DEGRADED",
  DELETED: "DELETED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type HsmState = (typeof HsmState)[keyof typeof HsmState];

/**
 * <p>Contains information about a hardware security module (HSM) in an CloudHSM
 *       cluster.</p>
 * @public
 */
export interface Hsm {
  /**
   * <p>The Availability Zone that contains the HSM.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The identifier (ID) of the cluster that contains the HSM.</p>
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * <p>The subnet that contains the HSM's elastic network interface (ENI).</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The identifier (ID) of the HSM's elastic network interface (ENI).</p>
   * @public
   */
  EniId?: string | undefined;

  /**
   * <p>The IP address of the HSM's elastic network interface (ENI).</p>
   * @public
   */
  EniIp?: string | undefined;

  /**
   * <p>The IPv6 address (if any) of the HSM's elastic network interface (ENI).</p>
   * @public
   */
  EniIpV6?: string | undefined;

  /**
   * <p>The HSM's identifier (ID).</p>
   * @public
   */
  HsmId: string | undefined;

  /**
   * <p>The type of HSM.</p>
   * @public
   */
  HsmType?: string | undefined;

  /**
   * <p>The HSM's state.</p>
   * @public
   */
  State?: HsmState | undefined;

  /**
   * <p>A description of the HSM's state.</p>
   * @public
   */
  StateMessage?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ClusterState = {
  ACTIVE: "ACTIVE",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DEGRADED: "DEGRADED",
  DELETED: "DELETED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  INITIALIZED: "INITIALIZED",
  INITIALIZE_IN_PROGRESS: "INITIALIZE_IN_PROGRESS",
  MODIFY_IN_PROGRESS: "MODIFY_IN_PROGRESS",
  ROLLBACK_IN_PROGRESS: "ROLLBACK_IN_PROGRESS",
  UNINITIALIZED: "UNINITIALIZED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ClusterState = (typeof ClusterState)[keyof typeof ClusterState];

/**
 * <p>Contains information about an CloudHSM cluster.</p>
 * @public
 */
export interface Cluster {
  /**
   * <p>The cluster's backup policy.</p>
   * @public
   */
  BackupPolicy?: BackupPolicy | undefined;

  /**
   * <p>A policy that defines how the service retains backups.</p>
   * @public
   */
  BackupRetentionPolicy?: BackupRetentionPolicy | undefined;

  /**
   * <p>The cluster's identifier (ID).</p>
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * <p>The date and time when the cluster was created.</p>
   * @public
   */
  CreateTimestamp?: Date | undefined;

  /**
   * <p>Contains information about the HSMs in the cluster.</p>
   * @public
   */
  Hsms?: Hsm[] | undefined;

  /**
   * <p>The type of HSM that the cluster contains.</p>
   * @public
   */
  HsmType?: string | undefined;

  /**
   * <p>The timestamp until when the cluster can be rolled back to its original HSM type.</p>
   * @public
   */
  HsmTypeRollbackExpiration?: Date | undefined;

  /**
   * <p>The default password for the cluster's Pre-Crypto Officer (PRECO) user.</p>
   * @public
   */
  PreCoPassword?: string | undefined;

  /**
   * <p>The identifier (ID) of the cluster's security group.</p>
   * @public
   */
  SecurityGroup?: string | undefined;

  /**
   * <p>The identifier (ID) of the backup used to create the cluster. This value exists only
   *       when the cluster was created from a backup.</p>
   * @public
   */
  SourceBackupId?: string | undefined;

  /**
   * <p>The cluster's state.</p>
   * @public
   */
  State?: ClusterState | undefined;

  /**
   * <p>A description of the cluster's state.</p>
   * @public
   */
  StateMessage?: string | undefined;

  /**
   * <p>A map from availability zone to the cluster’s subnet in that availability zone.</p>
   * @public
   */
  SubnetMapping?: Record<string, string> | undefined;

  /**
   * <p>The identifier (ID) of the virtual private cloud (VPC) that contains the
   *       cluster.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The cluster's NetworkType can be IPv4 (the default) or DUALSTACK.
   *         The IPv4 NetworkType restricts communication between your application and the hardware security modules (HSMs) to the IPv4 protocol only. The DUALSTACK NetworkType enables communication over both IPv4 and IPv6 protocols.
   *         To use DUALSTACK, configure your virtual private cloud (VPC) and subnets to support both IPv4 and IPv6.
   *         This configuration involves adding IPv6 Classless Inter-Domain Routing (CIDR) blocks to the existing IPv4 CIDR blocks in your subnets.
   *         The NetworkType you choose affects the network addressing options for your cluster. DUALSTACK provides more flexibility by supporting both IPv4 and IPv6 communication.</p>
   * @public
   */
  NetworkType?: NetworkType | undefined;

  /**
   * <p>Contains one or more certificates or a certificate signing request (CSR).</p>
   * @public
   */
  Certificates?: Certificates | undefined;

  /**
   * <p>The list of tags for the cluster.</p>
   * @public
   */
  TagList?: Tag[] | undefined;

  /**
   * <p>The mode of the cluster.</p>
   * @public
   */
  Mode?: ClusterMode | undefined;
}

/**
 * @public
 */
export interface CreateClusterResponse {
  /**
   * <p>Information about the cluster that was created.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface CreateHsmRequest {
  /**
   * <p>The identifier (ID) of the HSM's cluster. To find the cluster ID, use <a>DescribeClusters</a>.</p>
   * @public
   */
  ClusterId: string | undefined;

  /**
   * <p>The Availability Zone where you are creating the HSM. To find the cluster's
   *       Availability Zones, use <a>DescribeClusters</a>.</p>
   * @public
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>The HSM's IP address. If you specify an IP address, use an available address from the
   *       subnet that maps to the Availability Zone where you are creating the HSM. If you don't specify
   *       an IP address, one is chosen for you from that subnet.</p>
   * @public
   */
  IpAddress?: string | undefined;
}

/**
 * @public
 */
export interface CreateHsmResponse {
  /**
   * <p>Information about the HSM that was created.</p>
   * @public
   */
  Hsm?: Hsm | undefined;
}

/**
 * @public
 */
export interface DeleteBackupRequest {
  /**
   * <p>The ID of the backup to be deleted. To find the ID of a backup, use the <a>DescribeBackups</a> operation.</p>
   * @public
   */
  BackupId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackupResponse {
  /**
   * <p>Information on the <code>Backup</code> object deleted.</p>
   * @public
   */
  Backup?: Backup | undefined;
}

/**
 * @public
 */
export interface DeleteClusterRequest {
  /**
   * <p>The identifier (ID) of the cluster that you are deleting. To find the cluster ID, use
   *       <a>DescribeClusters</a>.</p>
   * @public
   */
  ClusterId: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterResponse {
  /**
   * <p>Information about the cluster that was deleted.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface DeleteHsmRequest {
  /**
   * <p>The identifier (ID) of the cluster that contains the HSM that you are
   *       deleting.</p>
   * @public
   */
  ClusterId: string | undefined;

  /**
   * <p>The identifier (ID) of the HSM that you are deleting.</p>
   * @public
   */
  HsmId?: string | undefined;

  /**
   * <p>The identifier (ID) of the elastic network interface (ENI) of the HSM that you are
   *       deleting.</p>
   * @public
   */
  EniId?: string | undefined;

  /**
   * <p>The IP address of the elastic network interface (ENI) of the HSM that you are
   *       deleting.</p>
   * @public
   */
  EniIp?: string | undefined;
}

/**
 * @public
 */
export interface DeleteHsmResponse {
  /**
   * <p>The identifier (ID) of the HSM that was deleted.</p>
   * @public
   */
  HsmId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the resource from which the policy will be removed. </p>
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the resource from which the policy was deleted. </p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The policy previously attached to the resource.</p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBackupsRequest {
  /**
   * <p>The <code>NextToken</code> value that you received in the previous response. Use this
   *       value to get more backups.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of backups to return in the response. When there are more backups
   *       than the number you specify, the response contains a <code>NextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>One or more filters to limit the items returned in the response.</p>
   *          <p>Use the <code>backupIds</code> filter to return only the specified backups. Specify
   *       backups by their backup identifier (ID).</p>
   *          <p>Use the <code>sourceBackupIds</code> filter to return only the backups created from a
   *       source backup. The <code>sourceBackupID</code> of a source backup is returned by the <a>CopyBackupToRegion</a> operation.</p>
   *          <p>Use the <code>clusterIds</code> filter to return only the backups for the specified
   *       clusters. Specify clusters by their cluster identifier (ID).</p>
   *          <p>Use the <code>states</code> filter to return only backups that match the specified
   *       state.</p>
   *          <p>Use the <code>neverExpires</code> filter to return backups filtered by the value in the
   *         <code>neverExpires</code> parameter. <code>True</code> returns all backups exempt from the
   *       backup retention policy. <code>False</code> returns all backups with a backup retention policy
   *       defined at the cluster.</p>
   * @public
   */
  Filters?: Record<string, string[]> | undefined;

  /**
   * <p>Describe backups that are shared with you.</p>
   *          <note>
   *             <p>By default when using this option, the command returns backups that have been shared using a standard Resource Access Manager
   *     resource share. In order for a backup that was shared using the PutResourcePolicy command to be returned, the share must be promoted to a
   *     standard resource share using the RAM <a href="https://docs.aws.amazon.com/cli/latest/reference/ram/promote-resource-share-created-from-policy.html">PromoteResourceShareCreatedFromPolicy</a> API operation.
   *
   *     For more information about sharing backups, see <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/sharing.html"> Working with shared backups</a> in the CloudHSM User Guide.</p>
   *          </note>
   * @public
   */
  Shared?: boolean | undefined;

  /**
   * <p>Designates whether or not to sort the return backups by ascending chronological order
   *       of generation.</p>
   * @public
   */
  SortAscending?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeBackupsResponse {
  /**
   * <p>A list of backups.</p>
   * @public
   */
  Backups?: Backup[] | undefined;

  /**
   * <p>An opaque string that indicates that the response contains only a subset of backups.
   *       Use this value in a subsequent <code>DescribeBackups</code> request to get more
   *       backups.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClustersRequest {
  /**
   * <p>One or more filters to limit the items returned in the response.</p>
   *          <p>Use the <code>clusterIds</code> filter to return only the specified clusters. Specify
   *       clusters by their cluster identifier (ID).</p>
   *          <p>Use the <code>vpcIds</code> filter to return only the clusters in the specified virtual
   *       private clouds (VPCs). Specify VPCs by their VPC identifier (ID).</p>
   *          <p>Use the <code>states</code> filter to return only clusters that match the specified
   *       state.</p>
   * @public
   */
  Filters?: Record<string, string[]> | undefined;

  /**
   * <p>The <code>NextToken</code> value that you received in the previous response. Use this
   *       value to get more clusters.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of clusters to return in the response. When there are more clusters
   *       than the number you specify, the response contains a <code>NextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeClustersResponse {
  /**
   * <p>A list of clusters.</p>
   * @public
   */
  Clusters?: Cluster[] | undefined;

  /**
   * <p>An opaque string that indicates that the response contains only a subset of clusters.
   *       Use this value in a subsequent <code>DescribeClusters</code> request to get more
   *       clusters.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the resource to which a policy is attached.</p>
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * <p>The policy attached to a resource.</p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface InitializeClusterRequest {
  /**
   * <p>The identifier (ID) of the cluster that you are claiming. To find the cluster ID, use
   *         <a>DescribeClusters</a>.</p>
   * @public
   */
  ClusterId: string | undefined;

  /**
   * <p>The cluster certificate issued (signed) by your issuing certificate authority (CA). The
   *       certificate must be in PEM format and can contain a maximum of 5000 characters.</p>
   * @public
   */
  SignedCert: string | undefined;

  /**
   * <p>The issuing certificate of the issuing certificate authority (CA) that issued (signed)
   *       the cluster certificate. You must use a self-signed certificate. The certificate used to sign the HSM CSR must be directly available, and thus must be the
   *       root certificate. The certificate must be in PEM format and can contain a
   *       maximum of 5000 characters.</p>
   * @public
   */
  TrustAnchor: string | undefined;
}

/**
 * @public
 */
export interface InitializeClusterResponse {
  /**
   * <p>The cluster's state.</p>
   * @public
   */
  State?: ClusterState | undefined;

  /**
   * <p>A description of the cluster's state.</p>
   * @public
   */
  StateMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsRequest {
  /**
   * <p>The cluster identifier (ID) for the cluster whose tags you are getting. To find the
   *       cluster ID, use <a>DescribeClusters</a>.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The <code>NextToken</code> value that you received in the previous response. Use this
   *       value to get more tags.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of tags to return in the response. When there are more tags than the
   *       number you specify, the response contains a <code>NextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTagsResponse {
  /**
   * <p>A list of tags.</p>
   * @public
   */
  TagList: Tag[] | undefined;

  /**
   * <p>An opaque string that indicates that the response contains only a subset of tags. Use
   *       this value in a subsequent <code>ListTags</code> request to get more tags.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ModifyBackupAttributesRequest {
  /**
   * <p>The identifier (ID) of the backup to modify. To find the ID of a backup, use the <a>DescribeBackups</a> operation.</p>
   * @public
   */
  BackupId: string | undefined;

  /**
   * <p>Specifies whether the service should exempt a backup from the retention policy for the cluster. <code>True</code> exempts
   *     a backup from the retention policy. <code>False</code> means the service applies the backup retention policy defined at the cluster.</p>
   * @public
   */
  NeverExpires: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyBackupAttributesResponse {
  /**
   * <p>Contains information about a backup of an CloudHSM cluster. All backup objects
   *       contain the <code>BackupId</code>, <code>BackupState</code>, <code>ClusterId</code>, and
   *         <code>CreateTimestamp</code> parameters. Backups that were copied into a destination region
   *       additionally contain the <code>CopyTimestamp</code>, <code>SourceBackup</code>,
   *         <code>SourceCluster</code>, and <code>SourceRegion</code> parameters. A backup that is
   *       pending deletion will include the <code>DeleteTimestamp</code> parameter.</p>
   * @public
   */
  Backup?: Backup | undefined;
}

/**
 * @public
 */
export interface ModifyClusterRequest {
  /**
   * <p>The desired HSM type of the cluster.</p>
   * @public
   */
  HsmType?: string | undefined;

  /**
   * <p>A policy that defines how the service retains backups.</p>
   * @public
   */
  BackupRetentionPolicy?: BackupRetentionPolicy | undefined;

  /**
   * <p>The identifier (ID) of the cluster that you want to modify. To find the cluster ID, use
   *         <a>DescribeClusters</a>.</p>
   * @public
   */
  ClusterId: string | undefined;
}

/**
 * @public
 */
export interface ModifyClusterResponse {
  /**
   * <p>Contains information about an CloudHSM cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the resource to which you want to attach a policy. </p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The policy you want to associate with a resource. </p>
   *          <p>For an example policy, see <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/sharing.html"> Working with shared backups</a> in the CloudHSM User Guide</p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the resource to which a policy is attached.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The policy attached to a resource.</p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface RestoreBackupRequest {
  /**
   * <p>The ID of the backup to be restored. To find the ID of a backup, use the <a>DescribeBackups</a> operation.</p>
   * @public
   */
  BackupId: string | undefined;
}

/**
 * @public
 */
export interface RestoreBackupResponse {
  /**
   * <p>Information on the <code>Backup</code> object created.</p>
   * @public
   */
  Backup?: Backup | undefined;
}

/**
 * <p>The request was rejected because it exceeds an CloudHSM limit.</p>
 * @public
 */
export class CloudHsmResourceLimitExceededException extends __BaseException {
  readonly name: "CloudHsmResourceLimitExceededException" = "CloudHsmResourceLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudHsmResourceLimitExceededException, __BaseException>) {
    super({
      name: "CloudHsmResourceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudHsmResourceLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The cluster identifier (ID) for the cluster that you are tagging. To find the cluster
   *       ID, use <a>DescribeClusters</a>.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>A list of one or more tags.</p>
   * @public
   */
  TagList: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The cluster identifier (ID) for the cluster whose tags you are removing. To find the
   *       cluster ID, use <a>DescribeClusters</a>.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>A list of one or more tag keys for the tags that you are removing. Specify only the tag
   *       keys, not the tag values.</p>
   * @public
   */
  TagKeyList: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
