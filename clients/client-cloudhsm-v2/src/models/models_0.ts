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
 * <p>Contains a tag. A tag is a key-value pair.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key of the tag.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value of the tag.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>Contains information about a backup of an AWS CloudHSM cluster. All backup objects
 *       contain the <code>BackupId</code>, <code>BackupState</code>, <code>ClusterId</code>, and
 *         <code>CreateTimestamp</code> parameters. Backups that were copied into a destination region
 *       additionally contain the <code>CopyTimestamp</code>, <code>SourceBackup</code>,
 *         <code>SourceCluster</code>, and <code>SourceRegion</code> parameters. A backup that is
 *       pending deletion will include the <code>DeleteTimestamp</code> parameter.</p>
 */
export interface Backup {
  /**
   * @public
   * <p>The identifier (ID) of the backup.</p>
   */
  BackupId: string | undefined;

  /**
   * @public
   * <p>The state of the backup.</p>
   */
  BackupState?: BackupState | string;

  /**
   * @public
   * <p>The identifier (ID) of the cluster that was backed up.</p>
   */
  ClusterId?: string;

  /**
   * @public
   * <p>The date and time when the backup was created.</p>
   */
  CreateTimestamp?: Date;

  /**
   * @public
   * <p>The date and time when the backup was copied from a source backup.</p>
   */
  CopyTimestamp?: Date;

  /**
   * @public
   * <p>Specifies whether the service should exempt a backup from the retention policy for the cluster. <code>True</code> exempts
   *       a backup from the retention policy. <code>False</code> means the service applies the backup retention policy defined at the cluster.</p>
   */
  NeverExpires?: boolean;

  /**
   * @public
   * <p>The AWS Region that contains the source backup from which the new backup was
   *       copied.</p>
   */
  SourceRegion?: string;

  /**
   * @public
   * <p>The identifier (ID) of the source backup from which the new backup was
   *       copied.</p>
   */
  SourceBackup?: string;

  /**
   * @public
   * <p>The identifier (ID) of the cluster containing the source backup from which the new
   *       backup was copied.</p>
   */
  SourceCluster?: string;

  /**
   * @public
   * <p>The date and time when the backup will be permanently deleted.</p>
   */
  DeleteTimestamp?: Date;

  /**
   * @public
   * <p>The list of tags for the backup.</p>
   */
  TagList?: Tag[];
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
 * @public
 * <p>A policy that defines the number of days to retain backups.</p>
 */
export interface BackupRetentionPolicy {
  /**
   * @public
   * <p>The type of backup retention policy. For the <code>DAYS</code> type, the value is
   *             the number of days to retain backups.</p>
   */
  Type?: BackupRetentionType | string;

  /**
   * @public
   * <p>Use a value between 7 - 379.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>The request was rejected because the requester does not have permission to perform the
 *       requested operation.</p>
 */
export class CloudHsmAccessDeniedException extends __BaseException {
  readonly name: "CloudHsmAccessDeniedException" = "CloudHsmAccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The request was rejected because of an AWS CloudHSM internal failure. The request can
 *       be retried.</p>
 */
export class CloudHsmInternalFailureException extends __BaseException {
  readonly name: "CloudHsmInternalFailureException" = "CloudHsmInternalFailureException";
  readonly $fault: "server" = "server";
  Message?: string;
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
 * @public
 * <p>The request was rejected because it is not a valid request.</p>
 */
export class CloudHsmInvalidRequestException extends __BaseException {
  readonly name: "CloudHsmInvalidRequestException" = "CloudHsmInvalidRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The request was rejected because it refers to a resource that cannot be
 *       found.</p>
 */
export class CloudHsmResourceNotFoundException extends __BaseException {
  readonly name: "CloudHsmResourceNotFoundException" = "CloudHsmResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The request was rejected because an error occurred.</p>
 */
export class CloudHsmServiceException extends __BaseException {
  readonly name: "CloudHsmServiceException" = "CloudHsmServiceException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The request was rejected because of a tagging failure. Verify the tag conditions in all applicable policies, and then retry the request.</p>
 */
export class CloudHsmTagException extends __BaseException {
  readonly name: "CloudHsmTagException" = "CloudHsmTagException";
  readonly $fault: "client" = "client";
  Message?: string;
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
   * @public
   * <p>The AWS region that will contain your copied CloudHSM cluster backup.</p>
   */
  DestinationRegion: string | undefined;

  /**
   * @public
   * <p>The ID of the backup that will be copied to the destination region. </p>
   */
  BackupId: string | undefined;

  /**
   * @public
   * <p>Tags to apply to the destination backup during creation. If you specify tags, only these tags will be applied to the destination backup. If you do not specify tags, the service copies tags from the source backup to the destination backup.</p>
   */
  TagList?: Tag[];
}

/**
 * @public
 * <p>Contains information about the backup that will be copied and created by the <a>CopyBackupToRegion</a> operation.</p>
 */
export interface DestinationBackup {
  /**
   * @public
   * <p>The date and time when both the source backup was created.</p>
   */
  CreateTimestamp?: Date;

  /**
   * @public
   * <p>The AWS region that contains the source backup from which the new backup was copied.</p>
   */
  SourceRegion?: string;

  /**
   * @public
   * <p>The identifier (ID) of the source backup from which the new backup was copied.</p>
   */
  SourceBackup?: string;

  /**
   * @public
   * <p>The identifier (ID) of the cluster containing the source backup from which the new backup was copied.</p>
   */
  SourceCluster?: string;
}

/**
 * @public
 */
export interface CopyBackupToRegionResponse {
  /**
   * @public
   * <p>Information on the backup that will be copied to the destination region, including
   *       CreateTimestamp, SourceBackup, SourceCluster, and Source Region. CreateTimestamp of the
   *       destination backup will be the same as that of the source backup.</p>
   *          <p>You will need to use the <code>sourceBackupID</code> returned in this operation to use
   *       the <a>DescribeBackups</a> operation on the backup that will be copied to the
   *       destination region.</p>
   */
  DestinationBackup?: DestinationBackup;
}

/**
 * @public
 */
export interface CreateClusterRequest {
  /**
   * @public
   * <p>A policy that defines how the service retains backups.</p>
   */
  BackupRetentionPolicy?: BackupRetentionPolicy;

  /**
   * @public
   * <p>The type of HSM to use in the cluster. Currently the only allowed value is
   *       <code>hsm1.medium</code>.</p>
   */
  HsmType: string | undefined;

  /**
   * @public
   * <p>The identifier (ID) of the cluster backup to restore. Use this value to restore the
   *       cluster from a backup instead of creating a new cluster. To find the backup ID, use <a>DescribeBackups</a>.</p>
   */
  SourceBackupId?: string;

  /**
   * @public
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
   */
  SubnetIds: string[] | undefined;

  /**
   * @public
   * <p>Tags to apply to the CloudHSM cluster during creation.</p>
   */
  TagList?: Tag[];
}

/**
 * @public
 * <p>Contains one or more certificates or a certificate signing request (CSR).</p>
 */
export interface Certificates {
  /**
   * @public
   * <p>The cluster's certificate signing request (CSR). The CSR exists only when the cluster's
   *       state is <code>UNINITIALIZED</code>.</p>
   */
  ClusterCsr?: string;

  /**
   * @public
   * <p>The HSM certificate issued (signed) by the HSM hardware.</p>
   */
  HsmCertificate?: string;

  /**
   * @public
   * <p>The HSM hardware certificate issued (signed) by AWS CloudHSM.</p>
   */
  AwsHardwareCertificate?: string;

  /**
   * @public
   * <p>The HSM hardware certificate issued (signed) by the hardware manufacturer.</p>
   */
  ManufacturerHardwareCertificate?: string;

  /**
   * @public
   * <p>The cluster certificate issued (signed) by the issuing certificate authority (CA) of
   *       the cluster's owner.</p>
   */
  ClusterCertificate?: string;
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
 * @public
 * <p>Contains information about a hardware security module (HSM) in an AWS CloudHSM
 *       cluster.</p>
 */
export interface Hsm {
  /**
   * @public
   * <p>The Availability Zone that contains the HSM.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The identifier (ID) of the cluster that contains the HSM.</p>
   */
  ClusterId?: string;

  /**
   * @public
   * <p>The subnet that contains the HSM's elastic network interface (ENI).</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The identifier (ID) of the HSM's elastic network interface (ENI).</p>
   */
  EniId?: string;

  /**
   * @public
   * <p>The IP address of the HSM's elastic network interface (ENI).</p>
   */
  EniIp?: string;

  /**
   * @public
   * <p>The HSM's identifier (ID).</p>
   */
  HsmId: string | undefined;

  /**
   * @public
   * <p>The HSM's state.</p>
   */
  State?: HsmState | string;

  /**
   * @public
   * <p>A description of the HSM's state.</p>
   */
  StateMessage?: string;
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
  UNINITIALIZED: "UNINITIALIZED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ClusterState = (typeof ClusterState)[keyof typeof ClusterState];

/**
 * @public
 * <p>Contains information about an AWS CloudHSM cluster.</p>
 */
export interface Cluster {
  /**
   * @public
   * <p>The cluster's backup policy.</p>
   */
  BackupPolicy?: BackupPolicy | string;

  /**
   * @public
   * <p>A policy that defines how the service retains backups.</p>
   */
  BackupRetentionPolicy?: BackupRetentionPolicy;

  /**
   * @public
   * <p>The cluster's identifier (ID).</p>
   */
  ClusterId?: string;

  /**
   * @public
   * <p>The date and time when the cluster was created.</p>
   */
  CreateTimestamp?: Date;

  /**
   * @public
   * <p>Contains information about the HSMs in the cluster.</p>
   */
  Hsms?: Hsm[];

  /**
   * @public
   * <p>The type of HSM that the cluster contains.</p>
   */
  HsmType?: string;

  /**
   * @public
   * <p>The default password for the cluster's Pre-Crypto Officer (PRECO) user.</p>
   */
  PreCoPassword?: string;

  /**
   * @public
   * <p>The identifier (ID) of the cluster's security group.</p>
   */
  SecurityGroup?: string;

  /**
   * @public
   * <p>The identifier (ID) of the backup used to create the cluster. This value exists only
   *       when the cluster was created from a backup.</p>
   */
  SourceBackupId?: string;

  /**
   * @public
   * <p>The cluster's state.</p>
   */
  State?: ClusterState | string;

  /**
   * @public
   * <p>A description of the cluster's state.</p>
   */
  StateMessage?: string;

  /**
   * @public
   * <p>A map from availability zone to the cluster’s subnet in that availability zone.</p>
   */
  SubnetMapping?: Record<string, string>;

  /**
   * @public
   * <p>The identifier (ID) of the virtual private cloud (VPC) that contains the
   *       cluster.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>Contains one or more certificates or a certificate signing request (CSR).</p>
   */
  Certificates?: Certificates;

  /**
   * @public
   * <p>The list of tags for the cluster.</p>
   */
  TagList?: Tag[];
}

/**
 * @public
 */
export interface CreateClusterResponse {
  /**
   * @public
   * <p>Information about the cluster that was created.</p>
   */
  Cluster?: Cluster;
}

/**
 * @public
 */
export interface CreateHsmRequest {
  /**
   * @public
   * <p>The identifier (ID) of the HSM's cluster. To find the cluster ID, use <a>DescribeClusters</a>.</p>
   */
  ClusterId: string | undefined;

  /**
   * @public
   * <p>The Availability Zone where you are creating the HSM. To find the cluster's
   *       Availability Zones, use <a>DescribeClusters</a>.</p>
   */
  AvailabilityZone: string | undefined;

  /**
   * @public
   * <p>The HSM's IP address. If you specify an IP address, use an available address from the
   *       subnet that maps to the Availability Zone where you are creating the HSM. If you don't specify
   *       an IP address, one is chosen for you from that subnet.</p>
   */
  IpAddress?: string;
}

/**
 * @public
 */
export interface CreateHsmResponse {
  /**
   * @public
   * <p>Information about the HSM that was created.</p>
   */
  Hsm?: Hsm;
}

/**
 * @public
 */
export interface DeleteBackupRequest {
  /**
   * @public
   * <p>The ID of the backup to be deleted. To find the ID of a backup, use the <a>DescribeBackups</a> operation.</p>
   */
  BackupId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackupResponse {
  /**
   * @public
   * <p>Information on the <code>Backup</code> object deleted.</p>
   */
  Backup?: Backup;
}

/**
 * @public
 */
export interface DeleteClusterRequest {
  /**
   * @public
   * <p>The identifier (ID) of the cluster that you are deleting. To find the cluster ID, use
   *       <a>DescribeClusters</a>.</p>
   */
  ClusterId: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterResponse {
  /**
   * @public
   * <p>Information about the cluster that was deleted.</p>
   */
  Cluster?: Cluster;
}

/**
 * @public
 */
export interface DeleteHsmRequest {
  /**
   * @public
   * <p>The identifier (ID) of the cluster that contains the HSM that you are
   *       deleting.</p>
   */
  ClusterId: string | undefined;

  /**
   * @public
   * <p>The identifier (ID) of the HSM that you are deleting.</p>
   */
  HsmId?: string;

  /**
   * @public
   * <p>The identifier (ID) of the elastic network interface (ENI) of the HSM that you are
   *       deleting.</p>
   */
  EniId?: string;

  /**
   * @public
   * <p>The IP address of the elastic network interface (ENI) of the HSM that you are
   *       deleting.</p>
   */
  EniIp?: string;
}

/**
 * @public
 */
export interface DeleteHsmResponse {
  /**
   * @public
   * <p>The identifier (ID) of the HSM that was deleted.</p>
   */
  HsmId?: string;
}

/**
 * @public
 */
export interface DescribeBackupsRequest {
  /**
   * @public
   * <p>The <code>NextToken</code> value that you received in the previous response. Use this
   *       value to get more backups.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of backups to return in the response. When there are more backups
   *       than the number you specify, the response contains a <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
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
   */
  Filters?: Record<string, string[]>;

  /**
   * @public
   * <p>Designates whether or not to sort the return backups by ascending chronological order
   *       of generation.</p>
   */
  SortAscending?: boolean;
}

/**
 * @public
 */
export interface DescribeBackupsResponse {
  /**
   * @public
   * <p>A list of backups.</p>
   */
  Backups?: Backup[];

  /**
   * @public
   * <p>An opaque string that indicates that the response contains only a subset of backups.
   *       Use this value in a subsequent <code>DescribeBackups</code> request to get more
   *       backups.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeClustersRequest {
  /**
   * @public
   * <p>One or more filters to limit the items returned in the response.</p>
   *          <p>Use the <code>clusterIds</code> filter to return only the specified clusters. Specify
   *       clusters by their cluster identifier (ID).</p>
   *          <p>Use the <code>vpcIds</code> filter to return only the clusters in the specified virtual
   *       private clouds (VPCs). Specify VPCs by their VPC identifier (ID).</p>
   *          <p>Use the <code>states</code> filter to return only clusters that match the specified
   *       state.</p>
   */
  Filters?: Record<string, string[]>;

  /**
   * @public
   * <p>The <code>NextToken</code> value that you received in the previous response. Use this
   *       value to get more clusters.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of clusters to return in the response. When there are more clusters
   *       than the number you specify, the response contains a <code>NextToken</code> value.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeClustersResponse {
  /**
   * @public
   * <p>A list of clusters.</p>
   */
  Clusters?: Cluster[];

  /**
   * @public
   * <p>An opaque string that indicates that the response contains only a subset of clusters.
   *       Use this value in a subsequent <code>DescribeClusters</code> request to get more
   *       clusters.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface InitializeClusterRequest {
  /**
   * @public
   * <p>The identifier (ID) of the cluster that you are claiming. To find the cluster ID, use
   *         <a>DescribeClusters</a>.</p>
   */
  ClusterId: string | undefined;

  /**
   * @public
   * <p>The cluster certificate issued (signed) by your issuing certificate authority (CA). The
   *       certificate must be in PEM format and can contain a maximum of 5000 characters.</p>
   */
  SignedCert: string | undefined;

  /**
   * @public
   * <p>The issuing certificate of the issuing certificate authority (CA) that issued (signed)
   *       the cluster certificate. You must use a self-signed certificate. The certificate used to sign the HSM CSR must be directly available, and thus must be the
   *       root certificate. The certificate must be in PEM format and can contain a
   *       maximum of 5000 characters.</p>
   */
  TrustAnchor: string | undefined;
}

/**
 * @public
 */
export interface InitializeClusterResponse {
  /**
   * @public
   * <p>The cluster's state.</p>
   */
  State?: ClusterState | string;

  /**
   * @public
   * <p>A description of the cluster's state.</p>
   */
  StateMessage?: string;
}

/**
 * @public
 */
export interface ListTagsRequest {
  /**
   * @public
   * <p>The cluster identifier (ID) for the cluster whose tags you are getting. To find the
   *       cluster ID, use <a>DescribeClusters</a>.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>The <code>NextToken</code> value that you received in the previous response. Use this
   *       value to get more tags.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of tags to return in the response. When there are more tags than the
   *       number you specify, the response contains a <code>NextToken</code> value.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListTagsResponse {
  /**
   * @public
   * <p>A list of tags.</p>
   */
  TagList: Tag[] | undefined;

  /**
   * @public
   * <p>An opaque string that indicates that the response contains only a subset of tags. Use
   *       this value in a subsequent <code>ListTags</code> request to get more tags.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ModifyBackupAttributesRequest {
  /**
   * @public
   * <p>The identifier (ID) of the backup to modify. To find the ID of a backup, use the <a>DescribeBackups</a> operation.</p>
   */
  BackupId: string | undefined;

  /**
   * @public
   * <p>Specifies whether the service should exempt a backup from the retention policy for the cluster. <code>True</code> exempts
   *     a backup from the retention policy. <code>False</code> means the service applies the backup retention policy defined at the cluster.</p>
   */
  NeverExpires: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyBackupAttributesResponse {
  /**
   * @public
   * <p>Contains information about a backup of an AWS CloudHSM cluster. All backup objects
   *       contain the <code>BackupId</code>, <code>BackupState</code>, <code>ClusterId</code>, and
   *         <code>CreateTimestamp</code> parameters. Backups that were copied into a destination region
   *       additionally contain the <code>CopyTimestamp</code>, <code>SourceBackup</code>,
   *         <code>SourceCluster</code>, and <code>SourceRegion</code> parameters. A backup that is
   *       pending deletion will include the <code>DeleteTimestamp</code> parameter.</p>
   */
  Backup?: Backup;
}

/**
 * @public
 */
export interface ModifyClusterRequest {
  /**
   * @public
   * <p>A policy that defines how the service retains backups.</p>
   */
  BackupRetentionPolicy: BackupRetentionPolicy | undefined;

  /**
   * @public
   * <p>The identifier (ID) of the cluster that you want to modify. To find the cluster ID, use
   *         <a>DescribeClusters</a>.</p>
   */
  ClusterId: string | undefined;
}

/**
 * @public
 */
export interface ModifyClusterResponse {
  /**
   * @public
   * <p>Contains information about an AWS CloudHSM cluster.</p>
   */
  Cluster?: Cluster;
}

/**
 * @public
 */
export interface RestoreBackupRequest {
  /**
   * @public
   * <p>The ID of the backup to be restored. To find the ID of a backup, use the <a>DescribeBackups</a> operation.</p>
   */
  BackupId: string | undefined;
}

/**
 * @public
 */
export interface RestoreBackupResponse {
  /**
   * @public
   * <p>Information on the <code>Backup</code> object created.</p>
   */
  Backup?: Backup;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The cluster identifier (ID) for the cluster that you are tagging. To find the cluster
   *       ID, use <a>DescribeClusters</a>.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>A list of one or more tags.</p>
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
   * @public
   * <p>The cluster identifier (ID) for the cluster whose tags you are removing. To find the
   *       cluster ID, use <a>DescribeClusters</a>.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>A list of one or more tag keys for the tags that you are removing. Specify only the tag
   *       keys, not the tag values.</p>
   */
  TagKeyList: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
