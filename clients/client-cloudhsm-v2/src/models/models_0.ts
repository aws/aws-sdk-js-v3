// smithy-typescript generated code
import type {
  BackupPolicy,
  BackupRetentionType,
  BackupState,
  ClusterMode,
  ClusterState,
  HsmState,
  NetworkType,
} from "./enums";

/**
 * Contains a tag. A tag is a key-value pair.
 *
 * @public
 */
export interface Tag {
  /**
   * The key of the tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value of the tag.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Contains information about a backup of an CloudHSM cluster. All backup objects contain the `BackupId`, `BackupState`, `ClusterId`, and `CreateTimestamp` parameters. Backups that were copied into a destination region additionally contain the `CopyTimestamp`, `SourceBackup`, `SourceCluster`, and `SourceRegion` parameters. A backup that is pending deletion will include the `DeleteTimestamp` parameter.
 *
 * @public
 */
export interface Backup {
  /**
   * The identifier (ID) of the backup.
   *
   * @public
   */
  BackupId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the backup.
   *
   * @public
   */
  BackupArn?: string | undefined;

  /**
   * The state of the backup.
   *
   * @public
   */
  BackupState?: BackupState | undefined;

  /**
   * The identifier (ID) of the cluster that was backed up.
   *
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * The date and time when the backup was created.
   *
   * @public
   */
  CreateTimestamp?: Date | undefined;

  /**
   * The date and time when the backup was copied from a source backup.
   *
   * @public
   */
  CopyTimestamp?: Date | undefined;

  /**
   * Specifies whether the service should exempt a backup from the retention policy for the cluster. `True` exempts a backup from the retention policy. `False` means the service applies the backup retention policy defined at the cluster.
   *
   * @public
   */
  NeverExpires?: boolean | undefined;

  /**
   * The AWS Region that contains the source backup from which the new backup was copied.
   *
   * @public
   */
  SourceRegion?: string | undefined;

  /**
   * The identifier (ID) of the source backup from which the new backup was copied.
   *
   * @public
   */
  SourceBackup?: string | undefined;

  /**
   * The identifier (ID) of the cluster containing the source backup from which the new backup was copied.
   *
   * @public
   */
  SourceCluster?: string | undefined;

  /**
   * The date and time when the backup will be permanently deleted.
   *
   * @public
   */
  DeleteTimestamp?: Date | undefined;

  /**
   * The list of tags for the backup.
   *
   * @public
   */
  TagList?: Tag[] | undefined;

  /**
   * The HSM type used to create the backup.
   *
   * @public
   */
  HsmType?: string | undefined;

  /**
   * The mode of the cluster that was backed up.
   *
   * @public
   */
  Mode?: ClusterMode | undefined;
}

/**
 * A policy that defines the number of days to retain backups.
 *
 * @public
 */
export interface BackupRetentionPolicy {
  /**
   * The type of backup retention policy. For the `DAYS` type, the value is the number of days to retain backups.
   *
   * @public
   */
  Type?: BackupRetentionType | undefined;

  /**
   * Use a value between 7 - 379.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CopyBackupToRegionRequest {
  /**
   * The AWS region that will contain your copied CloudHSM cluster backup.
   *
   * @public
   */
  DestinationRegion: string | undefined;

  /**
   * The ID of the backup that will be copied to the destination region.
   *
   * @public
   */
  BackupId: string | undefined;

  /**
   * Tags to apply to the destination backup during creation. If you specify tags, only these tags will be applied to the destination backup. If you do not specify tags, the service copies tags from the source backup to the destination backup.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * Contains information about the backup that will be copied and created by the CopyBackupToRegion operation.
 *
 * @public
 */
export interface DestinationBackup {
  /**
   * The date and time when both the source backup was created.
   *
   * @public
   */
  CreateTimestamp?: Date | undefined;

  /**
   * The AWS region that contains the source backup from which the new backup was copied.
   *
   * @public
   */
  SourceRegion?: string | undefined;

  /**
   * The identifier (ID) of the source backup from which the new backup was copied.
   *
   * @public
   */
  SourceBackup?: string | undefined;

  /**
   * The identifier (ID) of the cluster containing the source backup from which the new backup was copied.
   *
   * @public
   */
  SourceCluster?: string | undefined;
}

/**
 * @public
 */
export interface CopyBackupToRegionResponse {
  /**
   * Information on the backup that will be copied to the destination region, including CreateTimestamp, SourceBackup, SourceCluster, and Source Region. CreateTimestamp of the destination backup will be the same as that of the source backup.
   *
   * You will need to use the `sourceBackupID` returned in this operation to use the DescribeBackups operation on the backup that will be copied to the destination region.
   *
   * @public
   */
  DestinationBackup?: DestinationBackup | undefined;
}

/**
 * @public
 */
export interface CreateClusterRequest {
  /**
   * A policy that defines how the service retains backups.
   *
   * @public
   */
  BackupRetentionPolicy?: BackupRetentionPolicy | undefined;

  /**
   * The type of HSM to use in the cluster. The allowed values are `hsm1.medium` and `hsm2m.medium`.
   *
   * @public
   */
  HsmType: string | undefined;

  /**
   * The identifier (ID) or the Amazon Resource Name (ARN) of the cluster backup to restore. Use this value to restore the cluster from a backup instead of creating a new cluster. To find the backup ID or ARN, use DescribeBackups. *If using a backup in another account, the full ARN must be supplied.*
   *
   * @public
   */
  SourceBackupId?: string | undefined;

  /**
   * The identifiers (IDs) of the subnets where you are creating the cluster. You must specify at least one subnet. If you specify multiple subnets, they must meet the following criteria:
   *
   * - All subnets must be in the same virtual private cloud (VPC).
   * - You can specify only one subnet per Availability Zone.
   *
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * The NetworkType to create a cluster with. The allowed values are `IPV4` and `DUALSTACK`.
   *
   * @public
   */
  NetworkType?: NetworkType | undefined;

  /**
   * Tags to apply to the CloudHSM cluster during creation.
   *
   * @public
   */
  TagList?: Tag[] | undefined;

  /**
   * The mode to use in the cluster. The allowed values are `FIPS` and `NON_FIPS`.
   *
   * @public
   */
  Mode?: ClusterMode | undefined;
}

/**
 * Contains one or more certificates or a certificate signing request (CSR).
 *
 * @public
 */
export interface Certificates {
  /**
   * The cluster's certificate signing request (CSR). The CSR exists only when the cluster's state is `UNINITIALIZED`.
   *
   * @public
   */
  ClusterCsr?: string | undefined;

  /**
   * The HSM certificate issued (signed) by the HSM hardware.
   *
   * @public
   */
  HsmCertificate?: string | undefined;

  /**
   * The HSM hardware certificate issued (signed) by CloudHSM.
   *
   * @public
   */
  AwsHardwareCertificate?: string | undefined;

  /**
   * The HSM hardware certificate issued (signed) by the hardware manufacturer.
   *
   * @public
   */
  ManufacturerHardwareCertificate?: string | undefined;

  /**
   * The cluster certificate issued (signed) by the issuing certificate authority (CA) of the cluster's owner.
   *
   * @public
   */
  ClusterCertificate?: string | undefined;
}

/**
 * Contains information about a hardware security module (HSM) in an CloudHSM cluster.
 *
 * @public
 */
export interface Hsm {
  /**
   * The Availability Zone that contains the HSM.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The identifier (ID) of the cluster that contains the HSM.
   *
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * The subnet that contains the HSM's elastic network interface (ENI).
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The identifier (ID) of the HSM's elastic network interface (ENI).
   *
   * @public
   */
  EniId?: string | undefined;

  /**
   * The IP address of the HSM's elastic network interface (ENI).
   *
   * @public
   */
  EniIp?: string | undefined;

  /**
   * The IPv6 address (if any) of the HSM's elastic network interface (ENI).
   *
   * @public
   */
  EniIpV6?: string | undefined;

  /**
   * The HSM's identifier (ID).
   *
   * @public
   */
  HsmId: string | undefined;

  /**
   * The type of HSM.
   *
   * @public
   */
  HsmType?: string | undefined;

  /**
   * The HSM's state.
   *
   * @public
   */
  State?: HsmState | undefined;

  /**
   * A description of the HSM's state.
   *
   * @public
   */
  StateMessage?: string | undefined;
}

/**
 * Contains information about an CloudHSM cluster.
 *
 * @public
 */
export interface Cluster {
  /**
   * The cluster's backup policy.
   *
   * @public
   */
  BackupPolicy?: BackupPolicy | undefined;

  /**
   * A policy that defines how the service retains backups.
   *
   * @public
   */
  BackupRetentionPolicy?: BackupRetentionPolicy | undefined;

  /**
   * The cluster's identifier (ID).
   *
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * The date and time when the cluster was created.
   *
   * @public
   */
  CreateTimestamp?: Date | undefined;

  /**
   * Contains information about the HSMs in the cluster.
   *
   * @public
   */
  Hsms?: Hsm[] | undefined;

  /**
   * The type of HSM that the cluster contains.
   *
   * @public
   */
  HsmType?: string | undefined;

  /**
   * The timestamp until when the cluster can be rolled back to its original HSM type.
   *
   * @public
   */
  HsmTypeRollbackExpiration?: Date | undefined;

  /**
   * The default password for the cluster's Pre-Crypto Officer (PRECO) user.
   *
   * @public
   */
  PreCoPassword?: string | undefined;

  /**
   * The identifier (ID) of the cluster's security group.
   *
   * @public
   */
  SecurityGroup?: string | undefined;

  /**
   * The identifier (ID) of the backup used to create the cluster. This value exists only when the cluster was created from a backup.
   *
   * @public
   */
  SourceBackupId?: string | undefined;

  /**
   * The cluster's state.
   *
   * @public
   */
  State?: ClusterState | undefined;

  /**
   * A description of the cluster's state.
   *
   * @public
   */
  StateMessage?: string | undefined;

  /**
   * A map from availability zone to the cluster’s subnet in that availability zone.
   *
   * @public
   */
  SubnetMapping?: Record<string, string> | undefined;

  /**
   * The identifier (ID) of the virtual private cloud (VPC) that contains the cluster.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The cluster's NetworkType can be IPv4 (the default) or DUALSTACK. The IPv4 NetworkType restricts communication between your application and the hardware security modules (HSMs) to the IPv4 protocol only. The DUALSTACK NetworkType enables communication over both IPv4 and IPv6 protocols. To use DUALSTACK, configure your virtual private cloud (VPC) and subnets to support both IPv4 and IPv6. This configuration involves adding IPv6 Classless Inter-Domain Routing (CIDR) blocks to the existing IPv4 CIDR blocks in your subnets. The NetworkType you choose affects the network addressing options for your cluster. DUALSTACK provides more flexibility by supporting both IPv4 and IPv6 communication.
   *
   * @public
   */
  NetworkType?: NetworkType | undefined;

  /**
   * Contains one or more certificates or a certificate signing request (CSR).
   *
   * @public
   */
  Certificates?: Certificates | undefined;

  /**
   * The list of tags for the cluster.
   *
   * @public
   */
  TagList?: Tag[] | undefined;

  /**
   * The mode of the cluster.
   *
   * @public
   */
  Mode?: ClusterMode | undefined;
}

/**
 * @public
 */
export interface CreateClusterResponse {
  /**
   * Information about the cluster that was created.
   *
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface CreateHsmRequest {
  /**
   * The identifier (ID) of the HSM's cluster. To find the cluster ID, use DescribeClusters.
   *
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The Availability Zone where you are creating the HSM. To find the cluster's Availability Zones, use DescribeClusters.
   *
   * @public
   */
  AvailabilityZone: string | undefined;

  /**
   * The HSM's IP address. If you specify an IP address, use an available address from the subnet that maps to the Availability Zone where you are creating the HSM. If you don't specify an IP address, one is chosen for you from that subnet.
   *
   * @public
   */
  IpAddress?: string | undefined;
}

/**
 * @public
 */
export interface CreateHsmResponse {
  /**
   * Information about the HSM that was created.
   *
   * @public
   */
  Hsm?: Hsm | undefined;
}

/**
 * @public
 */
export interface DeleteBackupRequest {
  /**
   * The ID of the backup to be deleted. To find the ID of a backup, use the DescribeBackups operation.
   *
   * @public
   */
  BackupId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackupResponse {
  /**
   * Information on the `Backup` object deleted.
   *
   * @public
   */
  Backup?: Backup | undefined;
}

/**
 * @public
 */
export interface DeleteClusterRequest {
  /**
   * The identifier (ID) of the cluster that you are deleting. To find the cluster ID, use DescribeClusters.
   *
   * @public
   */
  ClusterId: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterResponse {
  /**
   * Information about the cluster that was deleted.
   *
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface DeleteHsmRequest {
  /**
   * The identifier (ID) of the cluster that contains the HSM that you are deleting.
   *
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The identifier (ID) of the HSM that you are deleting.
   *
   * @public
   */
  HsmId?: string | undefined;

  /**
   * The identifier (ID) of the elastic network interface (ENI) of the HSM that you are deleting.
   *
   * @public
   */
  EniId?: string | undefined;

  /**
   * The IP address of the elastic network interface (ENI) of the HSM that you are deleting.
   *
   * @public
   */
  EniIp?: string | undefined;
}

/**
 * @public
 */
export interface DeleteHsmResponse {
  /**
   * The identifier (ID) of the HSM that was deleted.
   *
   * @public
   */
  HsmId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * Amazon Resource Name (ARN) of the resource from which the policy will be removed.
   *
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {
  /**
   * Amazon Resource Name (ARN) of the resource from which the policy was deleted.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The policy previously attached to the resource.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBackupsRequest {
  /**
   * The `NextToken` value that you received in the previous response. Use this value to get more backups.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of backups to return in the response. When there are more backups than the number you specify, the response contains a `NextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * One or more filters to limit the items returned in the response.
   *
   * Use the `backupIds` filter to return only the specified backups. Specify backups by their backup identifier (ID).
   *
   * Use the `sourceBackupIds` filter to return only the backups created from a source backup. The `sourceBackupID` of a source backup is returned by the CopyBackupToRegion operation.
   *
   * Use the `clusterIds` filter to return only the backups for the specified clusters. Specify clusters by their cluster identifier (ID).
   *
   * Use the `states` filter to return only backups that match the specified state.
   *
   * Use the `neverExpires` filter to return backups filtered by the value in the `neverExpires` parameter. `True` returns all backups exempt from the backup retention policy. `False` returns all backups with a backup retention policy defined at the cluster.
   *
   * @public
   */
  Filters?: Record<string, string[]> | undefined;

  /**
   * Describe backups that are shared with you.
   *
   * > **Note:** By default when using this option, the command returns backups that have been shared using a standard Resource Access Manager resource share. In order for a backup that was shared using the PutResourcePolicy command to be returned, the share must be promoted to a standard resource share using the RAM [PromoteResourceShareCreatedFromPolicy](https://docs.aws.amazon.com/cli/latest/reference/ram/promote-resource-share-created-from-policy.html) API operation. For more information about sharing backups, see [Working with shared backups](https://docs.aws.amazon.com/cloudhsm/latest/userguide/sharing.html) in the CloudHSM User Guide.
   *
   * @public
   */
  Shared?: boolean | undefined;

  /**
   * Designates whether or not to sort the return backups by ascending chronological order of generation.
   *
   * @public
   */
  SortAscending?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeBackupsResponse {
  /**
   * A list of backups.
   *
   * @public
   */
  Backups?: Backup[] | undefined;

  /**
   * An opaque string that indicates that the response contains only a subset of backups. Use this value in a subsequent `DescribeBackups` request to get more backups.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClustersRequest {
  /**
   * One or more filters to limit the items returned in the response.
   *
   * Use the `clusterIds` filter to return only the specified clusters. Specify clusters by their cluster identifier (ID).
   *
   * Use the `vpcIds` filter to return only the clusters in the specified virtual private clouds (VPCs). Specify VPCs by their VPC identifier (ID).
   *
   * Use the `states` filter to return only clusters that match the specified state.
   *
   * @public
   */
  Filters?: Record<string, string[]> | undefined;

  /**
   * The `NextToken` value that you received in the previous response. Use this value to get more clusters.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of clusters to return in the response. When there are more clusters than the number you specify, the response contains a `NextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeClustersResponse {
  /**
   * A list of clusters.
   *
   * @public
   */
  Clusters?: Cluster[] | undefined;

  /**
   * An opaque string that indicates that the response contains only a subset of clusters. Use this value in a subsequent `DescribeClusters` request to get more clusters.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * Amazon Resource Name (ARN) of the resource to which a policy is attached.
   *
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * The policy attached to a resource.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface InitializeClusterRequest {
  /**
   * The identifier (ID) of the cluster that you are claiming. To find the cluster ID, use DescribeClusters.
   *
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The cluster certificate issued (signed) by your issuing certificate authority (CA). The certificate must be in PEM format and can contain a maximum of 5000 characters.
   *
   * @public
   */
  SignedCert: string | undefined;

  /**
   * The issuing certificate of the issuing certificate authority (CA) that issued (signed) the cluster certificate. You must use a self-signed certificate. The certificate used to sign the HSM CSR must be directly available, and thus must be the root certificate. The certificate must be in PEM format and can contain a maximum of 5000 characters.
   *
   * @public
   */
  TrustAnchor: string | undefined;
}

/**
 * @public
 */
export interface InitializeClusterResponse {
  /**
   * The cluster's state.
   *
   * @public
   */
  State?: ClusterState | undefined;

  /**
   * A description of the cluster's state.
   *
   * @public
   */
  StateMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsRequest {
  /**
   * The cluster identifier (ID) for the cluster whose tags you are getting. To find the cluster ID, use DescribeClusters.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The `NextToken` value that you received in the previous response. Use this value to get more tags.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of tags to return in the response. When there are more tags than the number you specify, the response contains a `NextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTagsResponse {
  /**
   * A list of tags.
   *
   * @public
   */
  TagList: Tag[] | undefined;

  /**
   * An opaque string that indicates that the response contains only a subset of tags. Use this value in a subsequent `ListTags` request to get more tags.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ModifyBackupAttributesRequest {
  /**
   * The identifier (ID) of the backup to modify. To find the ID of a backup, use the DescribeBackups operation.
   *
   * @public
   */
  BackupId: string | undefined;

  /**
   * Specifies whether the service should exempt a backup from the retention policy for the cluster. `True` exempts a backup from the retention policy. `False` means the service applies the backup retention policy defined at the cluster.
   *
   * @public
   */
  NeverExpires: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyBackupAttributesResponse {
  /**
   * Contains information about a backup of an CloudHSM cluster. All backup objects contain the `BackupId`, `BackupState`, `ClusterId`, and `CreateTimestamp` parameters. Backups that were copied into a destination region additionally contain the `CopyTimestamp`, `SourceBackup`, `SourceCluster`, and `SourceRegion` parameters. A backup that is pending deletion will include the `DeleteTimestamp` parameter.
   *
   * @public
   */
  Backup?: Backup | undefined;
}

/**
 * @public
 */
export interface ModifyClusterRequest {
  /**
   * The desired HSM type of the cluster.
   *
   * @public
   */
  HsmType?: string | undefined;

  /**
   * A policy that defines how the service retains backups.
   *
   * @public
   */
  BackupRetentionPolicy?: BackupRetentionPolicy | undefined;

  /**
   * The identifier (ID) of the cluster that you want to modify. To find the cluster ID, use DescribeClusters.
   *
   * @public
   */
  ClusterId: string | undefined;
}

/**
 * @public
 */
export interface ModifyClusterResponse {
  /**
   * Contains information about an CloudHSM cluster.
   *
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * Amazon Resource Name (ARN) of the resource to which you want to attach a policy.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The policy you want to associate with a resource.
   *
   * For an example policy, see [Working with shared backups](https://docs.aws.amazon.com/cloudhsm/latest/userguide/sharing.html) in the CloudHSM User Guide
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * Amazon Resource Name (ARN) of the resource to which a policy is attached.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The policy attached to a resource.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface RestoreBackupRequest {
  /**
   * The ID of the backup to be restored. To find the ID of a backup, use the DescribeBackups operation.
   *
   * @public
   */
  BackupId: string | undefined;
}

/**
 * @public
 */
export interface RestoreBackupResponse {
  /**
   * Information on the `Backup` object created.
   *
   * @public
   */
  Backup?: Backup | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The cluster identifier (ID) for the cluster that you are tagging. To find the cluster ID, use DescribeClusters.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * A list of one or more tags.
   *
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
   * The cluster identifier (ID) for the cluster whose tags you are removing. To find the cluster ID, use DescribeClusters.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * A list of one or more tag keys for the tags that you are removing. Specify only the tag keys, not the tag values.
   *
   * @public
   */
  TagKeyList: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
