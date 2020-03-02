import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Contains information about a backup of an AWS CloudHSM cluster. All backup objects
 *       contain the BackupId, BackupState, ClusterId, and CreateTimestamp parameters. Backups that were copied
 *       into a destination region additionally contain the CopyTimestamp, SourceBackup, SourceCluster,
 *       and SourceRegion paramters. A backup that is pending deletion will include the DeleteTimestamp parameter.</p>
 */
export interface Backup {
  __type?: "Backup";
  /**
   * <p>The identifier (ID) of the backup.</p>
   */
  BackupId: string | undefined;

  /**
   * <p>The state of the backup.</p>
   */
  BackupState?: BackupState | string;

  /**
   * <p>The identifier (ID) of the cluster that was backed up.</p>
   */
  ClusterId?: string;

  /**
   * <p>The date and time when the backup was copied from a source backup.</p>
   */
  CopyTimestamp?: Date;

  /**
   * <p>The date and time when the backup was created.</p>
   */
  CreateTimestamp?: Date;

  /**
   * <p>The date and time when the backup will be permanently deleted.</p>
   */
  DeleteTimestamp?: Date;

  /**
   * <p>The identifier (ID) of the source backup from which the new backup was
   *       copied.</p>
   */
  SourceBackup?: string;

  /**
   * <p>The identifier (ID) of the cluster containing the source backup from which the new
   *       backup was copied. .</p>
   */
  SourceCluster?: string;

  /**
   * <p>The AWS region that contains the source backup from which the new backup was
   *       copied.</p>
   */
  SourceRegion?: string;

  TagList?: Array<Tag>;
}

export namespace Backup {
  export function isa(o: any): o is Backup {
    return __isa(o, "Backup");
  }
}

export enum BackupPolicy {
  DEFAULT = "DEFAULT"
}

export enum BackupState {
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  DELETED = "DELETED",
  PENDING_DELETION = "PENDING_DELETION",
  READY = "READY"
}

/**
 * <p>Contains one or more certificates or a certificate signing request (CSR).</p>
 */
export interface Certificates {
  __type?: "Certificates";
  /**
   * <p>The HSM hardware certificate issued (signed) by AWS CloudHSM.</p>
   */
  AwsHardwareCertificate?: string;

  /**
   * <p>The cluster certificate issued (signed) by the issuing certificate authority (CA) of
   *       the cluster's owner.</p>
   */
  ClusterCertificate?: string;

  /**
   * <p>The cluster's certificate signing request (CSR). The CSR exists only when the cluster's
   *       state is <code>UNINITIALIZED</code>.</p>
   */
  ClusterCsr?: string;

  /**
   * <p>The HSM certificate issued (signed) by the HSM hardware.</p>
   */
  HsmCertificate?: string;

  /**
   * <p>The HSM hardware certificate issued (signed) by the hardware manufacturer.</p>
   */
  ManufacturerHardwareCertificate?: string;
}

export namespace Certificates {
  export function isa(o: any): o is Certificates {
    return __isa(o, "Certificates");
  }
}

/**
 * <p>Contains information about an AWS CloudHSM cluster.</p>
 */
export interface Cluster {
  __type?: "Cluster";
  /**
   * <p>The cluster's backup policy.</p>
   */
  BackupPolicy?: BackupPolicy | string;

  /**
   * <p>Contains one or more certificates or a certificate signing request (CSR).</p>
   */
  Certificates?: Certificates;

  /**
   * <p>The cluster's identifier (ID).</p>
   */
  ClusterId?: string;

  /**
   * <p>The date and time when the cluster was created.</p>
   */
  CreateTimestamp?: Date;

  /**
   * <p>The type of HSM that the cluster contains.</p>
   */
  HsmType?: string;

  /**
   * <p>Contains information about the HSMs in the cluster.</p>
   */
  Hsms?: Array<Hsm>;

  /**
   * <p>The default password for the cluster's Pre-Crypto Officer (PRECO) user.</p>
   */
  PreCoPassword?: string;

  /**
   * <p>The identifier (ID) of the cluster's security group.</p>
   */
  SecurityGroup?: string;

  /**
   * <p>The identifier (ID) of the backup used to create the cluster. This value exists only
   *       when the cluster was created from a backup.</p>
   */
  SourceBackupId?: string;

  /**
   * <p>The cluster's state.</p>
   */
  State?: ClusterState | string;

  /**
   * <p>A description of the cluster's state.</p>
   */
  StateMessage?: string;

  /**
   * <p>A map from availability zone to the cluster’s subnet in that availability zone.</p>
   */
  SubnetMapping?: { [key: string]: string };

  TagList?: Array<Tag>;
  /**
   * <p>The identifier (ID) of the virtual private cloud (VPC) that contains the
   *       cluster.</p>
   */
  VpcId?: string;
}

export namespace Cluster {
  export function isa(o: any): o is Cluster {
    return __isa(o, "Cluster");
  }
}

export enum ClusterState {
  ACTIVE = "ACTIVE",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  DEGRADED = "DEGRADED",
  DELETED = "DELETED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  INITIALIZED = "INITIALIZED",
  INITIALIZE_IN_PROGRESS = "INITIALIZE_IN_PROGRESS",
  UNINITIALIZED = "UNINITIALIZED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS"
}

export interface CopyBackupToRegionRequest {
  __type?: "CopyBackupToRegionRequest";
  /**
   * <p>The ID of the backup that will be copied to the destination region. </p>
   */
  BackupId: string | undefined;

  /**
   * <p>The AWS region that will contain your copied CloudHSM cluster backup.</p>
   */
  DestinationRegion: string | undefined;

  TagList?: Array<Tag>;
}

export namespace CopyBackupToRegionRequest {
  export function isa(o: any): o is CopyBackupToRegionRequest {
    return __isa(o, "CopyBackupToRegionRequest");
  }
}

export interface CopyBackupToRegionResponse {
  __type?: "CopyBackupToRegionResponse";
  /**
   * <p>Information on the backup that will be copied to the destination region, including
   *       CreateTimestamp, SourceBackup, SourceCluster, and Source Region. CreateTimestamp of the
   *       destination backup will be the same as that of the source backup.</p>
   *          <p>You will need to use the <code>sourceBackupID</code> returned in this operation to use
   *       the <a>DescribeBackups</a> operation on the backup that will be copied to the
   *       destination region.</p>
   */
  DestinationBackup?: DestinationBackup;
}

export namespace CopyBackupToRegionResponse {
  export function isa(o: any): o is CopyBackupToRegionResponse {
    return __isa(o, "CopyBackupToRegionResponse");
  }
}

export interface CreateClusterRequest {
  __type?: "CreateClusterRequest";
  /**
   * <p>The type of HSM to use in the cluster. Currently the only allowed value is
   *       <code>hsm1.medium</code>.</p>
   */
  HsmType: string | undefined;

  /**
   * <p>The identifier (ID) of the cluster backup to restore. Use this value to restore the
   *       cluster from a backup instead of creating a new cluster. To find the backup ID, use <a>DescribeBackups</a>.</p>
   */
  SourceBackupId?: string;

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
   */
  SubnetIds: Array<string> | undefined;

  TagList?: Array<Tag>;
}

export namespace CreateClusterRequest {
  export function isa(o: any): o is CreateClusterRequest {
    return __isa(o, "CreateClusterRequest");
  }
}

export interface CreateClusterResponse {
  __type?: "CreateClusterResponse";
  /**
   * <p>Information about the cluster that was created.</p>
   */
  Cluster?: Cluster;
}

export namespace CreateClusterResponse {
  export function isa(o: any): o is CreateClusterResponse {
    return __isa(o, "CreateClusterResponse");
  }
}

export interface CreateHsmRequest {
  __type?: "CreateHsmRequest";
  /**
   * <p>The Availability Zone where you are creating the HSM. To find the cluster's
   *       Availability Zones, use <a>DescribeClusters</a>.</p>
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>The identifier (ID) of the HSM's cluster. To find the cluster ID, use <a>DescribeClusters</a>.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>The HSM's IP address. If you specify an IP address, use an available address from the
   *       subnet that maps to the Availability Zone where you are creating the HSM. If you don't specify
   *       an IP address, one is chosen for you from that subnet.</p>
   */
  IpAddress?: string;
}

export namespace CreateHsmRequest {
  export function isa(o: any): o is CreateHsmRequest {
    return __isa(o, "CreateHsmRequest");
  }
}

export interface CreateHsmResponse {
  __type?: "CreateHsmResponse";
  /**
   * <p>Information about the HSM that was created.</p>
   */
  Hsm?: Hsm;
}

export namespace CreateHsmResponse {
  export function isa(o: any): o is CreateHsmResponse {
    return __isa(o, "CreateHsmResponse");
  }
}

export interface DeleteBackupRequest {
  __type?: "DeleteBackupRequest";
  /**
   * <p>The ID of the backup to be deleted. To find the ID of a backup, use the <a>DescribeBackups</a> operation.</p>
   */
  BackupId: string | undefined;
}

export namespace DeleteBackupRequest {
  export function isa(o: any): o is DeleteBackupRequest {
    return __isa(o, "DeleteBackupRequest");
  }
}

export interface DeleteBackupResponse {
  __type?: "DeleteBackupResponse";
  /**
   * <p>Information on the <code>Backup</code> object deleted.</p>
   */
  Backup?: Backup;
}

export namespace DeleteBackupResponse {
  export function isa(o: any): o is DeleteBackupResponse {
    return __isa(o, "DeleteBackupResponse");
  }
}

export interface DeleteClusterRequest {
  __type?: "DeleteClusterRequest";
  /**
   * <p>The identifier (ID) of the cluster that you are deleting. To find the cluster ID, use
   *       <a>DescribeClusters</a>.</p>
   */
  ClusterId: string | undefined;
}

export namespace DeleteClusterRequest {
  export function isa(o: any): o is DeleteClusterRequest {
    return __isa(o, "DeleteClusterRequest");
  }
}

export interface DeleteClusterResponse {
  __type?: "DeleteClusterResponse";
  /**
   * <p>Information about the cluster that was deleted.</p>
   */
  Cluster?: Cluster;
}

export namespace DeleteClusterResponse {
  export function isa(o: any): o is DeleteClusterResponse {
    return __isa(o, "DeleteClusterResponse");
  }
}

export interface DeleteHsmRequest {
  __type?: "DeleteHsmRequest";
  /**
   * <p>The identifier (ID) of the cluster that contains the HSM that you are
   *       deleting.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>The identifier (ID) of the elastic network interface (ENI) of the HSM that you are
   *       deleting.</p>
   */
  EniId?: string;

  /**
   * <p>The IP address of the elastic network interface (ENI) of the HSM that you are
   *       deleting.</p>
   */
  EniIp?: string;

  /**
   * <p>The identifier (ID) of the HSM that you are deleting.</p>
   */
  HsmId?: string;
}

export namespace DeleteHsmRequest {
  export function isa(o: any): o is DeleteHsmRequest {
    return __isa(o, "DeleteHsmRequest");
  }
}

export interface DeleteHsmResponse {
  __type?: "DeleteHsmResponse";
  /**
   * <p>The identifier (ID) of the HSM that was deleted.</p>
   */
  HsmId?: string;
}

export namespace DeleteHsmResponse {
  export function isa(o: any): o is DeleteHsmResponse {
    return __isa(o, "DeleteHsmResponse");
  }
}

export interface DescribeBackupsRequest {
  __type?: "DescribeBackupsRequest";
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
   */
  Filters?: { [key: string]: Array<string> };

  /**
   * <p>The maximum number of backups to return in the response. When there are more backups
   *       than the number you specify, the response contains a <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The <code>NextToken</code> value that you received in the previous response. Use this
   *       value to get more backups.</p>
   */
  NextToken?: string;

  /**
   * <p>Designates whether or not to sort the return backups by ascending chronological order
   *       of generation.</p>
   */
  SortAscending?: boolean;
}

export namespace DescribeBackupsRequest {
  export function isa(o: any): o is DescribeBackupsRequest {
    return __isa(o, "DescribeBackupsRequest");
  }
}

export interface DescribeBackupsResponse {
  __type?: "DescribeBackupsResponse";
  /**
   * <p>A list of backups.</p>
   */
  Backups?: Array<Backup>;

  /**
   * <p>An opaque string that indicates that the response contains only a subset of backups.
   *       Use this value in a subsequent <code>DescribeBackups</code> request to get more
   *       backups.</p>
   */
  NextToken?: string;
}

export namespace DescribeBackupsResponse {
  export function isa(o: any): o is DescribeBackupsResponse {
    return __isa(o, "DescribeBackupsResponse");
  }
}

export interface DescribeClustersRequest {
  __type?: "DescribeClustersRequest";
  /**
   * <p>One or more filters to limit the items returned in the response.</p>
   *          <p>Use the <code>clusterIds</code> filter to return only the specified clusters. Specify
   *       clusters by their cluster identifier (ID).</p>
   *          <p>Use the <code>vpcIds</code> filter to return only the clusters in the specified virtual
   *       private clouds (VPCs). Specify VPCs by their VPC identifier (ID).</p>
   *          <p>Use the <code>states</code> filter to return only clusters that match the specified
   *       state.</p>
   */
  Filters?: { [key: string]: Array<string> };

  /**
   * <p>The maximum number of clusters to return in the response. When there are more clusters
   *       than the number you specify, the response contains a <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The <code>NextToken</code> value that you received in the previous response. Use this
   *       value to get more clusters.</p>
   */
  NextToken?: string;
}

export namespace DescribeClustersRequest {
  export function isa(o: any): o is DescribeClustersRequest {
    return __isa(o, "DescribeClustersRequest");
  }
}

export interface DescribeClustersResponse {
  __type?: "DescribeClustersResponse";
  /**
   * <p>A list of clusters.</p>
   */
  Clusters?: Array<Cluster>;

  /**
   * <p>An opaque string that indicates that the response contains only a subset of clusters.
   *       Use this value in a subsequent <code>DescribeClusters</code> request to get more
   *       clusters.</p>
   */
  NextToken?: string;
}

export namespace DescribeClustersResponse {
  export function isa(o: any): o is DescribeClustersResponse {
    return __isa(o, "DescribeClustersResponse");
  }
}

/**
 * <p>Contains information about the backup that will be copied and created by the <a>CopyBackupToRegion</a> operation.</p>
 */
export interface DestinationBackup {
  __type?: "DestinationBackup";
  /**
   * <p>The date and time when both the source backup was created.</p>
   */
  CreateTimestamp?: Date;

  /**
   * <p>The identifier (ID) of the source backup from which the new backup was copied.</p>
   */
  SourceBackup?: string;

  /**
   * <p>The identifier (ID) of the cluster containing the source backup from which the new backup was copied.</p>
   */
  SourceCluster?: string;

  /**
   * <p>The AWS region that contains the source backup from which the new backup was copied.</p>
   */
  SourceRegion?: string;
}

export namespace DestinationBackup {
  export function isa(o: any): o is DestinationBackup {
    return __isa(o, "DestinationBackup");
  }
}

/**
 * <p>Contains information about a hardware security module (HSM) in an AWS CloudHSM
 *       cluster.</p>
 */
export interface Hsm {
  __type?: "Hsm";
  /**
   * <p>The Availability Zone that contains the HSM.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The identifier (ID) of the cluster that contains the HSM.</p>
   */
  ClusterId?: string;

  /**
   * <p>The identifier (ID) of the HSM's elastic network interface (ENI).</p>
   */
  EniId?: string;

  /**
   * <p>The IP address of the HSM's elastic network interface (ENI).</p>
   */
  EniIp?: string;

  /**
   * <p>The HSM's identifier (ID).</p>
   */
  HsmId: string | undefined;

  /**
   * <p>The HSM's state.</p>
   */
  State?: HsmState | string;

  /**
   * <p>A description of the HSM's state.</p>
   */
  StateMessage?: string;

  /**
   * <p>The subnet that contains the HSM's elastic network interface (ENI).</p>
   */
  SubnetId?: string;
}

export namespace Hsm {
  export function isa(o: any): o is Hsm {
    return __isa(o, "Hsm");
  }
}

export enum HsmState {
  ACTIVE = "ACTIVE",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  DEGRADED = "DEGRADED",
  DELETED = "DELETED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS"
}

export interface InitializeClusterRequest {
  __type?: "InitializeClusterRequest";
  /**
   * <p>The identifier (ID) of the cluster that you are claiming. To find the cluster ID, use
   *         <a>DescribeClusters</a>.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>The cluster certificate issued (signed) by your issuing certificate authority (CA). The
   *       certificate must be in PEM format and can contain a maximum of 5000 characters.</p>
   */
  SignedCert: string | undefined;

  /**
   * <p>The issuing certificate of the issuing certificate authority (CA) that issued (signed)
   *       the cluster certificate. You must use a self-signed certificate. The certificate used to sign the HSM CSR must be directly available, and thus must be the
   *       root certificate. The certificate must be in PEM format and can contain a
   *       maximum of 5000 characters.</p>
   */
  TrustAnchor: string | undefined;
}

export namespace InitializeClusterRequest {
  export function isa(o: any): o is InitializeClusterRequest {
    return __isa(o, "InitializeClusterRequest");
  }
}

export interface InitializeClusterResponse {
  __type?: "InitializeClusterResponse";
  /**
   * <p>The cluster's state.</p>
   */
  State?: ClusterState | string;

  /**
   * <p>A description of the cluster's state.</p>
   */
  StateMessage?: string;
}

export namespace InitializeClusterResponse {
  export function isa(o: any): o is InitializeClusterResponse {
    return __isa(o, "InitializeClusterResponse");
  }
}

export interface ListTagsRequest {
  __type?: "ListTagsRequest";
  /**
   * <p>The maximum number of tags to return in the response. When there are more tags than the
   *       number you specify, the response contains a <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The <code>NextToken</code> value that you received in the previous response. Use this
   *       value to get more tags.</p>
   */
  NextToken?: string;

  /**
   * <p>The cluster identifier (ID) for the cluster whose tags you are getting. To find the
   *       cluster ID, use <a>DescribeClusters</a>.</p>
   */
  ResourceId: string | undefined;
}

export namespace ListTagsRequest {
  export function isa(o: any): o is ListTagsRequest {
    return __isa(o, "ListTagsRequest");
  }
}

export interface ListTagsResponse {
  __type?: "ListTagsResponse";
  /**
   * <p>An opaque string that indicates that the response contains only a subset of tags. Use
   *       this value in a subsequent <code>ListTags</code> request to get more tags.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of tags.</p>
   */
  TagList: Array<Tag> | undefined;
}

export namespace ListTagsResponse {
  export function isa(o: any): o is ListTagsResponse {
    return __isa(o, "ListTagsResponse");
  }
}

export interface RestoreBackupRequest {
  __type?: "RestoreBackupRequest";
  /**
   * <p>The ID of the backup to be restored. To find the ID of a backup, use the <a>DescribeBackups</a> operation.</p>
   */
  BackupId: string | undefined;
}

export namespace RestoreBackupRequest {
  export function isa(o: any): o is RestoreBackupRequest {
    return __isa(o, "RestoreBackupRequest");
  }
}

export interface RestoreBackupResponse {
  __type?: "RestoreBackupResponse";
  /**
   * <p>Information on the <code>Backup</code> object created.</p>
   */
  Backup?: Backup;
}

export namespace RestoreBackupResponse {
  export function isa(o: any): o is RestoreBackupResponse {
    return __isa(o, "RestoreBackupResponse");
  }
}

/**
 * <p>Contains a tag. A tag is a key-value pair.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The key of the tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export function isa(o: any): o is Tag {
    return __isa(o, "Tag");
  }
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The cluster identifier (ID) for the cluster that you are tagging. To find the cluster
   *       ID, use <a>DescribeClusters</a>.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>A list of one or more tags.</p>
   */
  TagList: Array<Tag> | undefined;
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

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The cluster identifier (ID) for the cluster whose tags you are removing. To find the
   *       cluster ID, use <a>DescribeClusters</a>.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>A list of one or more tag keys for the tags that you are removing. Specify only the tag
   *       keys, not the tag values.</p>
   */
  TagKeyList: Array<string> | undefined;
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
 * <p>The request was rejected because the requester does not have permission to perform the
 *       requested operation.</p>
 */
export interface CloudHsmAccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "CloudHsmAccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace CloudHsmAccessDeniedException {
  export function isa(o: any): o is CloudHsmAccessDeniedException {
    return __isa(o, "CloudHsmAccessDeniedException");
  }
}

/**
 * <p>The request was rejected because of an AWS CloudHSM internal failure. The request can
 *       be retried.</p>
 */
export interface CloudHsmInternalFailureException
  extends __SmithyException,
    $MetadataBearer {
  name: "CloudHsmInternalFailureException";
  $fault: "server";
  Message?: string;
}

export namespace CloudHsmInternalFailureException {
  export function isa(o: any): o is CloudHsmInternalFailureException {
    return __isa(o, "CloudHsmInternalFailureException");
  }
}

/**
 * <p>The request was rejected because it is not a valid request.</p>
 */
export interface CloudHsmInvalidRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "CloudHsmInvalidRequestException";
  $fault: "client";
  Message?: string;
}

export namespace CloudHsmInvalidRequestException {
  export function isa(o: any): o is CloudHsmInvalidRequestException {
    return __isa(o, "CloudHsmInvalidRequestException");
  }
}

/**
 * <p>The request was rejected because it refers to a resource that cannot be
 *       found.</p>
 */
export interface CloudHsmResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "CloudHsmResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace CloudHsmResourceNotFoundException {
  export function isa(o: any): o is CloudHsmResourceNotFoundException {
    return __isa(o, "CloudHsmResourceNotFoundException");
  }
}

/**
 * <p>The request was rejected because an error occurred.</p>
 */
export interface CloudHsmServiceException
  extends __SmithyException,
    $MetadataBearer {
  name: "CloudHsmServiceException";
  $fault: "client";
  Message?: string;
}

export namespace CloudHsmServiceException {
  export function isa(o: any): o is CloudHsmServiceException {
    return __isa(o, "CloudHsmServiceException");
  }
}

export interface CloudHsmTagException
  extends __SmithyException,
    $MetadataBearer {
  name: "CloudHsmTagException";
  $fault: "client";
  Message?: string;
}

export namespace CloudHsmTagException {
  export function isa(o: any): o is CloudHsmTagException {
    return __isa(o, "CloudHsmTagException");
  }
}
