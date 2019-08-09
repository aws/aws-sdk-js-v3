import { ElastiCacheClient } from "./ElastiCacheClient";
import { APICallRateForCustomerExceededFault } from "./types/APICallRateForCustomerExceededFault";
import { AddTagsToResourceInput } from "./types/AddTagsToResourceInput";
import { AddTagsToResourceOutput } from "./types/AddTagsToResourceOutput";
import { AuthorizationAlreadyExistsFault } from "./types/AuthorizationAlreadyExistsFault";
import { AuthorizationNotFoundFault } from "./types/AuthorizationNotFoundFault";
import { AuthorizeCacheSecurityGroupIngressInput } from "./types/AuthorizeCacheSecurityGroupIngressInput";
import { AuthorizeCacheSecurityGroupIngressOutput } from "./types/AuthorizeCacheSecurityGroupIngressOutput";
import { BatchApplyUpdateActionInput } from "./types/BatchApplyUpdateActionInput";
import { BatchApplyUpdateActionOutput } from "./types/BatchApplyUpdateActionOutput";
import { BatchStopUpdateActionInput } from "./types/BatchStopUpdateActionInput";
import { BatchStopUpdateActionOutput } from "./types/BatchStopUpdateActionOutput";
import { CacheClusterAlreadyExistsFault } from "./types/CacheClusterAlreadyExistsFault";
import { CacheClusterNotFoundFault } from "./types/CacheClusterNotFoundFault";
import { CacheParameterGroupAlreadyExistsFault } from "./types/CacheParameterGroupAlreadyExistsFault";
import { CacheParameterGroupNotFoundFault } from "./types/CacheParameterGroupNotFoundFault";
import { CacheParameterGroupQuotaExceededFault } from "./types/CacheParameterGroupQuotaExceededFault";
import { CacheSecurityGroupAlreadyExistsFault } from "./types/CacheSecurityGroupAlreadyExistsFault";
import { CacheSecurityGroupNotFoundFault } from "./types/CacheSecurityGroupNotFoundFault";
import { CacheSecurityGroupQuotaExceededFault } from "./types/CacheSecurityGroupQuotaExceededFault";
import { CacheSubnetGroupAlreadyExistsFault } from "./types/CacheSubnetGroupAlreadyExistsFault";
import { CacheSubnetGroupInUse } from "./types/CacheSubnetGroupInUse";
import { CacheSubnetGroupNotFoundFault } from "./types/CacheSubnetGroupNotFoundFault";
import { CacheSubnetGroupQuotaExceededFault } from "./types/CacheSubnetGroupQuotaExceededFault";
import { CacheSubnetQuotaExceededFault } from "./types/CacheSubnetQuotaExceededFault";
import { ClusterQuotaForCustomerExceededFault } from "./types/ClusterQuotaForCustomerExceededFault";
import { CopySnapshotInput } from "./types/CopySnapshotInput";
import { CopySnapshotOutput } from "./types/CopySnapshotOutput";
import { CreateCacheClusterInput } from "./types/CreateCacheClusterInput";
import { CreateCacheClusterOutput } from "./types/CreateCacheClusterOutput";
import { CreateCacheParameterGroupInput } from "./types/CreateCacheParameterGroupInput";
import { CreateCacheParameterGroupOutput } from "./types/CreateCacheParameterGroupOutput";
import { CreateCacheSecurityGroupInput } from "./types/CreateCacheSecurityGroupInput";
import { CreateCacheSecurityGroupOutput } from "./types/CreateCacheSecurityGroupOutput";
import { CreateCacheSubnetGroupInput } from "./types/CreateCacheSubnetGroupInput";
import { CreateCacheSubnetGroupOutput } from "./types/CreateCacheSubnetGroupOutput";
import { CreateReplicationGroupInput } from "./types/CreateReplicationGroupInput";
import { CreateReplicationGroupOutput } from "./types/CreateReplicationGroupOutput";
import { CreateSnapshotInput } from "./types/CreateSnapshotInput";
import { CreateSnapshotOutput } from "./types/CreateSnapshotOutput";
import { DecreaseReplicaCountInput } from "./types/DecreaseReplicaCountInput";
import { DecreaseReplicaCountOutput } from "./types/DecreaseReplicaCountOutput";
import { DeleteCacheClusterInput } from "./types/DeleteCacheClusterInput";
import { DeleteCacheClusterOutput } from "./types/DeleteCacheClusterOutput";
import { DeleteCacheParameterGroupInput } from "./types/DeleteCacheParameterGroupInput";
import { DeleteCacheParameterGroupOutput } from "./types/DeleteCacheParameterGroupOutput";
import { DeleteCacheSecurityGroupInput } from "./types/DeleteCacheSecurityGroupInput";
import { DeleteCacheSecurityGroupOutput } from "./types/DeleteCacheSecurityGroupOutput";
import { DeleteCacheSubnetGroupInput } from "./types/DeleteCacheSubnetGroupInput";
import { DeleteCacheSubnetGroupOutput } from "./types/DeleteCacheSubnetGroupOutput";
import { DeleteReplicationGroupInput } from "./types/DeleteReplicationGroupInput";
import { DeleteReplicationGroupOutput } from "./types/DeleteReplicationGroupOutput";
import { DeleteSnapshotInput } from "./types/DeleteSnapshotInput";
import { DeleteSnapshotOutput } from "./types/DeleteSnapshotOutput";
import { DescribeCacheClustersInput } from "./types/DescribeCacheClustersInput";
import { DescribeCacheClustersOutput } from "./types/DescribeCacheClustersOutput";
import { DescribeCacheEngineVersionsInput } from "./types/DescribeCacheEngineVersionsInput";
import { DescribeCacheEngineVersionsOutput } from "./types/DescribeCacheEngineVersionsOutput";
import { DescribeCacheParameterGroupsInput } from "./types/DescribeCacheParameterGroupsInput";
import { DescribeCacheParameterGroupsOutput } from "./types/DescribeCacheParameterGroupsOutput";
import { DescribeCacheParametersInput } from "./types/DescribeCacheParametersInput";
import { DescribeCacheParametersOutput } from "./types/DescribeCacheParametersOutput";
import { DescribeCacheSecurityGroupsInput } from "./types/DescribeCacheSecurityGroupsInput";
import { DescribeCacheSecurityGroupsOutput } from "./types/DescribeCacheSecurityGroupsOutput";
import { DescribeCacheSubnetGroupsInput } from "./types/DescribeCacheSubnetGroupsInput";
import { DescribeCacheSubnetGroupsOutput } from "./types/DescribeCacheSubnetGroupsOutput";
import { DescribeEngineDefaultParametersInput } from "./types/DescribeEngineDefaultParametersInput";
import { DescribeEngineDefaultParametersOutput } from "./types/DescribeEngineDefaultParametersOutput";
import { DescribeEventsInput } from "./types/DescribeEventsInput";
import { DescribeEventsOutput } from "./types/DescribeEventsOutput";
import { DescribeReplicationGroupsInput } from "./types/DescribeReplicationGroupsInput";
import { DescribeReplicationGroupsOutput } from "./types/DescribeReplicationGroupsOutput";
import { DescribeReservedCacheNodesInput } from "./types/DescribeReservedCacheNodesInput";
import { DescribeReservedCacheNodesOfferingsInput } from "./types/DescribeReservedCacheNodesOfferingsInput";
import { DescribeReservedCacheNodesOfferingsOutput } from "./types/DescribeReservedCacheNodesOfferingsOutput";
import { DescribeReservedCacheNodesOutput } from "./types/DescribeReservedCacheNodesOutput";
import { DescribeServiceUpdatesInput } from "./types/DescribeServiceUpdatesInput";
import { DescribeServiceUpdatesOutput } from "./types/DescribeServiceUpdatesOutput";
import { DescribeSnapshotsInput } from "./types/DescribeSnapshotsInput";
import { DescribeSnapshotsOutput } from "./types/DescribeSnapshotsOutput";
import { DescribeUpdateActionsInput } from "./types/DescribeUpdateActionsInput";
import { DescribeUpdateActionsOutput } from "./types/DescribeUpdateActionsOutput";
import { IncreaseReplicaCountInput } from "./types/IncreaseReplicaCountInput";
import { IncreaseReplicaCountOutput } from "./types/IncreaseReplicaCountOutput";
import { InsufficientCacheClusterCapacityFault } from "./types/InsufficientCacheClusterCapacityFault";
import { InvalidARNFault } from "./types/InvalidARNFault";
import { InvalidCacheClusterStateFault } from "./types/InvalidCacheClusterStateFault";
import { InvalidCacheParameterGroupStateFault } from "./types/InvalidCacheParameterGroupStateFault";
import { InvalidCacheSecurityGroupStateFault } from "./types/InvalidCacheSecurityGroupStateFault";
import { InvalidParameterCombinationException } from "./types/InvalidParameterCombinationException";
import { InvalidParameterValueException } from "./types/InvalidParameterValueException";
import { InvalidReplicationGroupStateFault } from "./types/InvalidReplicationGroupStateFault";
import { InvalidSnapshotStateFault } from "./types/InvalidSnapshotStateFault";
import { InvalidSubnet } from "./types/InvalidSubnet";
import { InvalidVPCNetworkStateFault } from "./types/InvalidVPCNetworkStateFault";
import { ListAllowedNodeTypeModificationsInput } from "./types/ListAllowedNodeTypeModificationsInput";
import { ListAllowedNodeTypeModificationsOutput } from "./types/ListAllowedNodeTypeModificationsOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ModifyCacheClusterInput } from "./types/ModifyCacheClusterInput";
import { ModifyCacheClusterOutput } from "./types/ModifyCacheClusterOutput";
import { ModifyCacheParameterGroupInput } from "./types/ModifyCacheParameterGroupInput";
import { ModifyCacheParameterGroupOutput } from "./types/ModifyCacheParameterGroupOutput";
import { ModifyCacheSubnetGroupInput } from "./types/ModifyCacheSubnetGroupInput";
import { ModifyCacheSubnetGroupOutput } from "./types/ModifyCacheSubnetGroupOutput";
import { ModifyReplicationGroupInput } from "./types/ModifyReplicationGroupInput";
import { ModifyReplicationGroupOutput } from "./types/ModifyReplicationGroupOutput";
import { ModifyReplicationGroupShardConfigurationInput } from "./types/ModifyReplicationGroupShardConfigurationInput";
import { ModifyReplicationGroupShardConfigurationOutput } from "./types/ModifyReplicationGroupShardConfigurationOutput";
import { NoOperationFault } from "./types/NoOperationFault";
import { NodeGroupNotFoundFault } from "./types/NodeGroupNotFoundFault";
import { NodeGroupsPerReplicationGroupQuotaExceededFault } from "./types/NodeGroupsPerReplicationGroupQuotaExceededFault";
import { NodeQuotaForClusterExceededFault } from "./types/NodeQuotaForClusterExceededFault";
import { NodeQuotaForCustomerExceededFault } from "./types/NodeQuotaForCustomerExceededFault";
import { PurchaseReservedCacheNodesOfferingInput } from "./types/PurchaseReservedCacheNodesOfferingInput";
import { PurchaseReservedCacheNodesOfferingOutput } from "./types/PurchaseReservedCacheNodesOfferingOutput";
import { RebootCacheClusterInput } from "./types/RebootCacheClusterInput";
import { RebootCacheClusterOutput } from "./types/RebootCacheClusterOutput";
import { RemoveTagsFromResourceInput } from "./types/RemoveTagsFromResourceInput";
import { RemoveTagsFromResourceOutput } from "./types/RemoveTagsFromResourceOutput";
import { ReplicationGroupAlreadyExistsFault } from "./types/ReplicationGroupAlreadyExistsFault";
import { ReplicationGroupNotFoundFault } from "./types/ReplicationGroupNotFoundFault";
import { ReservedCacheNodeAlreadyExistsFault } from "./types/ReservedCacheNodeAlreadyExistsFault";
import { ReservedCacheNodeNotFoundFault } from "./types/ReservedCacheNodeNotFoundFault";
import { ReservedCacheNodeQuotaExceededFault } from "./types/ReservedCacheNodeQuotaExceededFault";
import { ReservedCacheNodesOfferingNotFoundFault } from "./types/ReservedCacheNodesOfferingNotFoundFault";
import { ResetCacheParameterGroupInput } from "./types/ResetCacheParameterGroupInput";
import { ResetCacheParameterGroupOutput } from "./types/ResetCacheParameterGroupOutput";
import { RevokeCacheSecurityGroupIngressInput } from "./types/RevokeCacheSecurityGroupIngressInput";
import { RevokeCacheSecurityGroupIngressOutput } from "./types/RevokeCacheSecurityGroupIngressOutput";
import { ServiceLinkedRoleNotFoundFault } from "./types/ServiceLinkedRoleNotFoundFault";
import { ServiceUpdateNotFoundFault } from "./types/ServiceUpdateNotFoundFault";
import { SnapshotAlreadyExistsFault } from "./types/SnapshotAlreadyExistsFault";
import { SnapshotFeatureNotSupportedFault } from "./types/SnapshotFeatureNotSupportedFault";
import { SnapshotNotFoundFault } from "./types/SnapshotNotFoundFault";
import { SnapshotQuotaExceededFault } from "./types/SnapshotQuotaExceededFault";
import { SubnetInUse } from "./types/SubnetInUse";
import { TagNotFoundFault } from "./types/TagNotFoundFault";
import { TagQuotaPerResourceExceeded } from "./types/TagQuotaPerResourceExceeded";
import { TestFailoverInput } from "./types/TestFailoverInput";
import { TestFailoverNotAvailableFault } from "./types/TestFailoverNotAvailableFault";
import { TestFailoverOutput } from "./types/TestFailoverOutput";
import { AddTagsToResourceCommand } from "./commands/AddTagsToResourceCommand";
import { AuthorizeCacheSecurityGroupIngressCommand } from "./commands/AuthorizeCacheSecurityGroupIngressCommand";
import { BatchApplyUpdateActionCommand } from "./commands/BatchApplyUpdateActionCommand";
import { BatchStopUpdateActionCommand } from "./commands/BatchStopUpdateActionCommand";
import { CopySnapshotCommand } from "./commands/CopySnapshotCommand";
import { CreateCacheClusterCommand } from "./commands/CreateCacheClusterCommand";
import { CreateCacheParameterGroupCommand } from "./commands/CreateCacheParameterGroupCommand";
import { CreateCacheSecurityGroupCommand } from "./commands/CreateCacheSecurityGroupCommand";
import { CreateCacheSubnetGroupCommand } from "./commands/CreateCacheSubnetGroupCommand";
import { CreateReplicationGroupCommand } from "./commands/CreateReplicationGroupCommand";
import { CreateSnapshotCommand } from "./commands/CreateSnapshotCommand";
import { DecreaseReplicaCountCommand } from "./commands/DecreaseReplicaCountCommand";
import { DeleteCacheClusterCommand } from "./commands/DeleteCacheClusterCommand";
import { DeleteCacheParameterGroupCommand } from "./commands/DeleteCacheParameterGroupCommand";
import { DeleteCacheSecurityGroupCommand } from "./commands/DeleteCacheSecurityGroupCommand";
import { DeleteCacheSubnetGroupCommand } from "./commands/DeleteCacheSubnetGroupCommand";
import { DeleteReplicationGroupCommand } from "./commands/DeleteReplicationGroupCommand";
import { DeleteSnapshotCommand } from "./commands/DeleteSnapshotCommand";
import { DescribeCacheClustersCommand } from "./commands/DescribeCacheClustersCommand";
import { DescribeCacheEngineVersionsCommand } from "./commands/DescribeCacheEngineVersionsCommand";
import { DescribeCacheParameterGroupsCommand } from "./commands/DescribeCacheParameterGroupsCommand";
import { DescribeCacheParametersCommand } from "./commands/DescribeCacheParametersCommand";
import { DescribeCacheSecurityGroupsCommand } from "./commands/DescribeCacheSecurityGroupsCommand";
import { DescribeCacheSubnetGroupsCommand } from "./commands/DescribeCacheSubnetGroupsCommand";
import { DescribeEngineDefaultParametersCommand } from "./commands/DescribeEngineDefaultParametersCommand";
import { DescribeEventsCommand } from "./commands/DescribeEventsCommand";
import { DescribeReplicationGroupsCommand } from "./commands/DescribeReplicationGroupsCommand";
import { DescribeReservedCacheNodesCommand } from "./commands/DescribeReservedCacheNodesCommand";
import { DescribeReservedCacheNodesOfferingsCommand } from "./commands/DescribeReservedCacheNodesOfferingsCommand";
import { DescribeServiceUpdatesCommand } from "./commands/DescribeServiceUpdatesCommand";
import { DescribeSnapshotsCommand } from "./commands/DescribeSnapshotsCommand";
import { DescribeUpdateActionsCommand } from "./commands/DescribeUpdateActionsCommand";
import { IncreaseReplicaCountCommand } from "./commands/IncreaseReplicaCountCommand";
import { ListAllowedNodeTypeModificationsCommand } from "./commands/ListAllowedNodeTypeModificationsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ModifyCacheClusterCommand } from "./commands/ModifyCacheClusterCommand";
import { ModifyCacheParameterGroupCommand } from "./commands/ModifyCacheParameterGroupCommand";
import { ModifyCacheSubnetGroupCommand } from "./commands/ModifyCacheSubnetGroupCommand";
import { ModifyReplicationGroupCommand } from "./commands/ModifyReplicationGroupCommand";
import { ModifyReplicationGroupShardConfigurationCommand } from "./commands/ModifyReplicationGroupShardConfigurationCommand";
import { PurchaseReservedCacheNodesOfferingCommand } from "./commands/PurchaseReservedCacheNodesOfferingCommand";
import { RebootCacheClusterCommand } from "./commands/RebootCacheClusterCommand";
import { RemoveTagsFromResourceCommand } from "./commands/RemoveTagsFromResourceCommand";
import { ResetCacheParameterGroupCommand } from "./commands/ResetCacheParameterGroupCommand";
import { RevokeCacheSecurityGroupIngressCommand } from "./commands/RevokeCacheSecurityGroupIngressCommand";
import { TestFailoverCommand } from "./commands/TestFailoverCommand";

export class ElastiCache extends ElastiCacheClient {
  /**
   * <p>Adds up to 50 cost allocation tags to the named resource. A cost allocation tag is a key-value pair where the key and value are case-sensitive. You can use cost allocation tags to categorize and track your AWS costs.</p> <p> When you apply tags to your ElastiCache resources, AWS generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Tagging.html">Using Cost Allocation Tags in Amazon ElastiCache</a> in the <i>ElastiCache User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CacheClusterNotFoundFault} <p>The requested cluster ID does not refer to an existing cluster.</p>
   *   - {SnapshotNotFoundFault} <p>The requested snapshot name does not refer to an existing snapshot.</p>
   *   - {TagQuotaPerResourceExceeded} <p>The request cannot be processed because it would cause the resource to have more than the allowed number of tags. The maximum number of tags permitted on a resource is 50.</p>
   *   - {InvalidARNFault} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addTagsToResource(
    args: AddTagsToResourceInput
  ): Promise<AddTagsToResourceOutput>;
  public addTagsToResource(
    args: AddTagsToResourceInput,
    cb: (err: any, data?: AddTagsToResourceOutput) => void
  ): void;
  public addTagsToResource(
    args: AddTagsToResourceInput,
    cb?: (err: any, data?: AddTagsToResourceOutput) => void
  ): Promise<AddTagsToResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddTagsToResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Allows network ingress to a cache security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2 security groups are used as the authorization mechanism.</p> <note> <p>You cannot authorize ingress from an Amazon EC2 security group in one region to an ElastiCache cluster in another region.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {CacheSecurityGroupNotFoundFault} <p>The requested cache security group name does not refer to an existing cache security group.</p>
   *   - {InvalidCacheSecurityGroupStateFault} <p>The current state of the cache security group does not allow deletion.</p>
   *   - {AuthorizationAlreadyExistsFault} <p>The specified Amazon EC2 security group is already authorized for the specified cache security group.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public authorizeCacheSecurityGroupIngress(
    args: AuthorizeCacheSecurityGroupIngressInput
  ): Promise<AuthorizeCacheSecurityGroupIngressOutput>;
  public authorizeCacheSecurityGroupIngress(
    args: AuthorizeCacheSecurityGroupIngressInput,
    cb: (err: any, data?: AuthorizeCacheSecurityGroupIngressOutput) => void
  ): void;
  public authorizeCacheSecurityGroupIngress(
    args: AuthorizeCacheSecurityGroupIngressInput,
    cb?: (err: any, data?: AuthorizeCacheSecurityGroupIngressOutput) => void
  ): Promise<AuthorizeCacheSecurityGroupIngressOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AuthorizeCacheSecurityGroupIngressCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Apply the service update. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/applying-updates.html">Applying Service Updates</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUpdateNotFoundFault} <p>The service update doesn't exist</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchApplyUpdateAction(
    args: BatchApplyUpdateActionInput
  ): Promise<BatchApplyUpdateActionOutput>;
  public batchApplyUpdateAction(
    args: BatchApplyUpdateActionInput,
    cb: (err: any, data?: BatchApplyUpdateActionOutput) => void
  ): void;
  public batchApplyUpdateAction(
    args: BatchApplyUpdateActionInput,
    cb?: (err: any, data?: BatchApplyUpdateActionOutput) => void
  ): Promise<BatchApplyUpdateActionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchApplyUpdateActionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stop the service update. For more information on service updates and stopping them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/stopping-self-service-updates.html">Stopping Service Updates</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUpdateNotFoundFault} <p>The service update doesn't exist</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchStopUpdateAction(
    args: BatchStopUpdateActionInput
  ): Promise<BatchStopUpdateActionOutput>;
  public batchStopUpdateAction(
    args: BatchStopUpdateActionInput,
    cb: (err: any, data?: BatchStopUpdateActionOutput) => void
  ): void;
  public batchStopUpdateAction(
    args: BatchStopUpdateActionInput,
    cb?: (err: any, data?: BatchStopUpdateActionOutput) => void
  ): Promise<BatchStopUpdateActionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchStopUpdateActionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Makes a copy of an existing snapshot.</p> <note> <p>This operation is valid for Redis only.</p> </note> <important> <p>Users or groups that have permissions to use the <code>CopySnapshot</code> operation can create their own Amazon S3 buckets and copy snapshots to it. To control access to your snapshots, use an IAM policy to control who has the ability to use the <code>CopySnapshot</code> operation. For more information about using IAM to control the use of ElastiCache operations, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html">Exporting Snapshots</a> and <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.html">Authentication &amp; Access Control</a>.</p> </important> <p>You could receive the following error messages.</p> <p class="title"> <b>Error Messages</b> </p> <ul> <li> <p> <b>Error Message:</b> The S3 bucket %s is outside of the region.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s does not exist.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s is not owned by the authenticated user.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The authenticated user does not have sufficient permissions to perform the desired activity.</p> <p> <b>Solution:</b> Contact your system administrator to get the needed permissions.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s already contains an object with key %s.</p> <p> <b>Solution:</b> Give the <code>TargetSnapshotName</code> a new and unique value. If exporting a snapshot, you could alternatively create a new Amazon S3 bucket and use this same value for <code>TargetSnapshotName</code>.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted READ permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add List and Read permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted WRITE permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add Upload/Delete permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted READ_ACP permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add View Permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {SnapshotAlreadyExistsFault} <p>You already have a snapshot with the given name.</p>
   *   - {SnapshotNotFoundFault} <p>The requested snapshot name does not refer to an existing snapshot.</p>
   *   - {SnapshotQuotaExceededFault} <p>The request cannot be processed because it would exceed the maximum number of snapshots.</p>
   *   - {InvalidSnapshotStateFault} <p>The current state of the snapshot does not allow the requested operation to occur.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public copySnapshot(args: CopySnapshotInput): Promise<CopySnapshotOutput>;
  public copySnapshot(
    args: CopySnapshotInput,
    cb: (err: any, data?: CopySnapshotOutput) => void
  ): void;
  public copySnapshot(
    args: CopySnapshotInput,
    cb?: (err: any, data?: CopySnapshotOutput) => void
  ): Promise<CopySnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CopySnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a cluster. All nodes in the cluster run the same protocol-compliant cache engine software, either Memcached or Redis.</p> <p>This operation is not supported for Redis (cluster mode enabled) clusters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ReplicationGroupNotFoundFault} <p>The specified replication group does not exist.</p>
   *   - {InvalidReplicationGroupStateFault} <p>The requested replication group is not in the <code>available</code> state.</p>
   *   - {CacheClusterAlreadyExistsFault} <p>You already have a cluster with the given identifier.</p>
   *   - {InsufficientCacheClusterCapacityFault} <p>The requested cache node type is not available in the specified Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ErrorMessages.html#ErrorMessages.INSUFFICIENT_CACHE_CLUSTER_CAPACITY">InsufficientCacheClusterCapacity</a> in the ElastiCache User Guide.</p>
   *   - {CacheSecurityGroupNotFoundFault} <p>The requested cache security group name does not refer to an existing cache security group.</p>
   *   - {CacheSubnetGroupNotFoundFault} <p>The requested cache subnet group name does not refer to an existing cache subnet group.</p>
   *   - {ClusterQuotaForCustomerExceededFault} <p>The request cannot be processed because it would exceed the allowed number of clusters per customer.</p>
   *   - {NodeQuotaForClusterExceededFault} <p>The request cannot be processed because it would exceed the allowed number of cache nodes in a single cluster.</p>
   *   - {NodeQuotaForCustomerExceededFault} <p>The request cannot be processed because it would exceed the allowed number of cache nodes per customer.</p>
   *   - {CacheParameterGroupNotFoundFault} <p>The requested cache parameter group name does not refer to an existing cache parameter group.</p>
   *   - {InvalidVPCNetworkStateFault} <p>The VPC network is in an invalid state.</p>
   *   - {TagQuotaPerResourceExceeded} <p>The request cannot be processed because it would cause the resource to have more than the allowed number of tags. The maximum number of tags permitted on a resource is 50.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCacheCluster(
    args: CreateCacheClusterInput
  ): Promise<CreateCacheClusterOutput>;
  public createCacheCluster(
    args: CreateCacheClusterInput,
    cb: (err: any, data?: CreateCacheClusterOutput) => void
  ): void;
  public createCacheCluster(
    args: CreateCacheClusterInput,
    cb?: (err: any, data?: CreateCacheClusterOutput) => void
  ): Promise<CreateCacheClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateCacheClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new Amazon ElastiCache cache parameter group. An ElastiCache cache parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster or replication group using the CacheParameterGroup.</p> <p>A newly created CacheParameterGroup is an exact duplicate of the default parameter group for the CacheParameterGroupFamily. To customize the newly created CacheParameterGroup you can change the values of specific parameters. For more information, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheParameterGroup.html">ModifyCacheParameterGroup</a> in the ElastiCache API Reference.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ParameterGroups.html">Parameters and Parameter Groups</a> in the ElastiCache User Guide.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {CacheParameterGroupQuotaExceededFault} <p>The request cannot be processed because it would exceed the maximum number of cache security groups.</p>
   *   - {CacheParameterGroupAlreadyExistsFault} <p>A cache parameter group with the requested name already exists.</p>
   *   - {InvalidCacheParameterGroupStateFault} <p>The current state of the cache parameter group does not allow the requested operation to occur.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCacheParameterGroup(
    args: CreateCacheParameterGroupInput
  ): Promise<CreateCacheParameterGroupOutput>;
  public createCacheParameterGroup(
    args: CreateCacheParameterGroupInput,
    cb: (err: any, data?: CreateCacheParameterGroupOutput) => void
  ): void;
  public createCacheParameterGroup(
    args: CreateCacheParameterGroupInput,
    cb?: (err: any, data?: CreateCacheParameterGroupOutput) => void
  ): Promise<CreateCacheParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateCacheParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new cache security group. Use a cache security group to control access to one or more clusters.</p> <p>Cache security groups are only used when you are creating a cluster outside of an Amazon Virtual Private Cloud (Amazon VPC). If you are creating a cluster inside of a VPC, use a cache subnet group instead. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html">CreateCacheSubnetGroup</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CacheSecurityGroupAlreadyExistsFault} <p>A cache security group with the specified name already exists.</p>
   *   - {CacheSecurityGroupQuotaExceededFault} <p>The request cannot be processed because it would exceed the allowed number of cache security groups.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCacheSecurityGroup(
    args: CreateCacheSecurityGroupInput
  ): Promise<CreateCacheSecurityGroupOutput>;
  public createCacheSecurityGroup(
    args: CreateCacheSecurityGroupInput,
    cb: (err: any, data?: CreateCacheSecurityGroupOutput) => void
  ): void;
  public createCacheSecurityGroup(
    args: CreateCacheSecurityGroupInput,
    cb?: (err: any, data?: CreateCacheSecurityGroupOutput) => void
  ): Promise<CreateCacheSecurityGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateCacheSecurityGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new cache subnet group.</p> <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CacheSubnetGroupAlreadyExistsFault} <p>The requested cache subnet group name is already in use by an existing cache subnet group.</p>
   *   - {CacheSubnetGroupQuotaExceededFault} <p>The request cannot be processed because it would exceed the allowed number of cache subnet groups.</p>
   *   - {CacheSubnetQuotaExceededFault} <p>The request cannot be processed because it would exceed the allowed number of subnets in a cache subnet group.</p>
   *   - {InvalidSubnet} <p>An invalid subnet identifier was specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCacheSubnetGroup(
    args: CreateCacheSubnetGroupInput
  ): Promise<CreateCacheSubnetGroupOutput>;
  public createCacheSubnetGroup(
    args: CreateCacheSubnetGroupInput,
    cb: (err: any, data?: CreateCacheSubnetGroupOutput) => void
  ): void;
  public createCacheSubnetGroup(
    args: CreateCacheSubnetGroupInput,
    cb?: (err: any, data?: CreateCacheSubnetGroupOutput) => void
  ): Promise<CreateCacheSubnetGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateCacheSubnetGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a Redis (cluster mode disabled) or a Redis (cluster mode enabled) replication group.</p> <p>A Redis (cluster mode disabled) replication group is a collection of clusters, where one of the clusters is a read/write primary and the others are read-only replicas. Writes to the primary are asynchronously propagated to the replicas.</p> <p>A Redis (cluster mode enabled) replication group is a collection of 1 to 90 node groups (shards). Each node group (shard) has one read/write primary node and up to 5 read-only replica nodes. Writes to the primary are asynchronously propagated to the replicas. Redis (cluster mode enabled) replication groups partition the data across node groups (shards).</p> <p>When a Redis (cluster mode disabled) replication group has been successfully created, you can add one or more read replicas to it, up to a total of 5 read replicas. You cannot alter a Redis (cluster mode enabled) replication group after it has been created. However, if you need to increase or decrease the number of node groups (console: shards), you can avail yourself of ElastiCache for Redis' enhanced backup and restore. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-restoring.html">Restoring From a Backup with Cluster Resizing</a> in the <i>ElastiCache User Guide</i>.</p> <note> <p>This operation is valid for Redis only.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {CacheClusterNotFoundFault} <p>The requested cluster ID does not refer to an existing cluster.</p>
   *   - {InvalidCacheClusterStateFault} <p>The requested cluster is not in the <code>available</code> state.</p>
   *   - {ReplicationGroupAlreadyExistsFault} <p>The specified replication group already exists.</p>
   *   - {InsufficientCacheClusterCapacityFault} <p>The requested cache node type is not available in the specified Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ErrorMessages.html#ErrorMessages.INSUFFICIENT_CACHE_CLUSTER_CAPACITY">InsufficientCacheClusterCapacity</a> in the ElastiCache User Guide.</p>
   *   - {CacheSecurityGroupNotFoundFault} <p>The requested cache security group name does not refer to an existing cache security group.</p>
   *   - {CacheSubnetGroupNotFoundFault} <p>The requested cache subnet group name does not refer to an existing cache subnet group.</p>
   *   - {ClusterQuotaForCustomerExceededFault} <p>The request cannot be processed because it would exceed the allowed number of clusters per customer.</p>
   *   - {NodeQuotaForClusterExceededFault} <p>The request cannot be processed because it would exceed the allowed number of cache nodes in a single cluster.</p>
   *   - {NodeQuotaForCustomerExceededFault} <p>The request cannot be processed because it would exceed the allowed number of cache nodes per customer.</p>
   *   - {CacheParameterGroupNotFoundFault} <p>The requested cache parameter group name does not refer to an existing cache parameter group.</p>
   *   - {InvalidVPCNetworkStateFault} <p>The VPC network is in an invalid state.</p>
   *   - {TagQuotaPerResourceExceeded} <p>The request cannot be processed because it would cause the resource to have more than the allowed number of tags. The maximum number of tags permitted on a resource is 50.</p>
   *   - {NodeGroupsPerReplicationGroupQuotaExceededFault} <p>The request cannot be processed because it would exceed the maximum allowed number of node groups (shards) in a single replication group. The default maximum is 90</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createReplicationGroup(
    args: CreateReplicationGroupInput
  ): Promise<CreateReplicationGroupOutput>;
  public createReplicationGroup(
    args: CreateReplicationGroupInput,
    cb: (err: any, data?: CreateReplicationGroupOutput) => void
  ): void;
  public createReplicationGroup(
    args: CreateReplicationGroupInput,
    cb?: (err: any, data?: CreateReplicationGroupOutput) => void
  ): Promise<CreateReplicationGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateReplicationGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a copy of an entire cluster or replication group at a specific moment in time.</p> <note> <p>This operation is valid for Redis only.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {SnapshotAlreadyExistsFault} <p>You already have a snapshot with the given name.</p>
   *   - {CacheClusterNotFoundFault} <p>The requested cluster ID does not refer to an existing cluster.</p>
   *   - {ReplicationGroupNotFoundFault} <p>The specified replication group does not exist.</p>
   *   - {InvalidCacheClusterStateFault} <p>The requested cluster is not in the <code>available</code> state.</p>
   *   - {InvalidReplicationGroupStateFault} <p>The requested replication group is not in the <code>available</code> state.</p>
   *   - {SnapshotQuotaExceededFault} <p>The request cannot be processed because it would exceed the maximum number of snapshots.</p>
   *   - {SnapshotFeatureNotSupportedFault} <p>You attempted one of the following operations:</p> <ul> <li> <p>Creating a snapshot of a Redis cluster running on a <code>cache.t1.micro</code> cache node.</p> </li> <li> <p>Creating a snapshot of a cluster that is running Memcached rather than Redis.</p> </li> </ul> <p>Neither of these are supported by ElastiCache.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSnapshot(
    args: CreateSnapshotInput
  ): Promise<CreateSnapshotOutput>;
  public createSnapshot(
    args: CreateSnapshotInput,
    cb: (err: any, data?: CreateSnapshotOutput) => void
  ): void;
  public createSnapshot(
    args: CreateSnapshotInput,
    cb?: (err: any, data?: CreateSnapshotOutput) => void
  ): Promise<CreateSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Dynamically decreases the number of replics in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation is performed with no cluster down time.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ReplicationGroupNotFoundFault} <p>The specified replication group does not exist.</p>
   *   - {InvalidReplicationGroupStateFault} <p>The requested replication group is not in the <code>available</code> state.</p>
   *   - {InvalidCacheClusterStateFault} <p>The requested cluster is not in the <code>available</code> state.</p>
   *   - {InvalidVPCNetworkStateFault} <p>The VPC network is in an invalid state.</p>
   *   - {InsufficientCacheClusterCapacityFault} <p>The requested cache node type is not available in the specified Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ErrorMessages.html#ErrorMessages.INSUFFICIENT_CACHE_CLUSTER_CAPACITY">InsufficientCacheClusterCapacity</a> in the ElastiCache User Guide.</p>
   *   - {ClusterQuotaForCustomerExceededFault} <p>The request cannot be processed because it would exceed the allowed number of clusters per customer.</p>
   *   - {NodeGroupsPerReplicationGroupQuotaExceededFault} <p>The request cannot be processed because it would exceed the maximum allowed number of node groups (shards) in a single replication group. The default maximum is 90</p>
   *   - {NodeQuotaForCustomerExceededFault} <p>The request cannot be processed because it would exceed the allowed number of cache nodes per customer.</p>
   *   - {ServiceLinkedRoleNotFoundFault} <p>The specified service linked role (SLR) was not found.</p>
   *   - {NoOperationFault} <p>The operation was not performed because no changes were required.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public decreaseReplicaCount(
    args: DecreaseReplicaCountInput
  ): Promise<DecreaseReplicaCountOutput>;
  public decreaseReplicaCount(
    args: DecreaseReplicaCountInput,
    cb: (err: any, data?: DecreaseReplicaCountOutput) => void
  ): void;
  public decreaseReplicaCount(
    args: DecreaseReplicaCountInput,
    cb?: (err: any, data?: DecreaseReplicaCountOutput) => void
  ): Promise<DecreaseReplicaCountOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DecreaseReplicaCountCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a previously provisioned cluster. <code>DeleteCacheCluster</code> deletes all associated cache nodes, node endpoints and the cluster itself. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert this operation.</p> <p>This operation is not valid for:</p> <ul> <li> <p>Redis (cluster mode enabled) clusters</p> </li> <li> <p>A cluster that is the last read replica of a replication group</p> </li> <li> <p>A node group (shard) that has Multi-AZ mode enabled</p> </li> <li> <p>A cluster from a Redis (cluster mode enabled) replication group</p> </li> <li> <p>A cluster that is not in the <code>available</code> state</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {CacheClusterNotFoundFault} <p>The requested cluster ID does not refer to an existing cluster.</p>
   *   - {InvalidCacheClusterStateFault} <p>The requested cluster is not in the <code>available</code> state.</p>
   *   - {SnapshotAlreadyExistsFault} <p>You already have a snapshot with the given name.</p>
   *   - {SnapshotFeatureNotSupportedFault} <p>You attempted one of the following operations:</p> <ul> <li> <p>Creating a snapshot of a Redis cluster running on a <code>cache.t1.micro</code> cache node.</p> </li> <li> <p>Creating a snapshot of a cluster that is running Memcached rather than Redis.</p> </li> </ul> <p>Neither of these are supported by ElastiCache.</p>
   *   - {SnapshotQuotaExceededFault} <p>The request cannot be processed because it would exceed the maximum number of snapshots.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteCacheCluster(
    args: DeleteCacheClusterInput
  ): Promise<DeleteCacheClusterOutput>;
  public deleteCacheCluster(
    args: DeleteCacheClusterInput,
    cb: (err: any, data?: DeleteCacheClusterOutput) => void
  ): void;
  public deleteCacheCluster(
    args: DeleteCacheClusterInput,
    cb?: (err: any, data?: DeleteCacheClusterOutput) => void
  ): Promise<DeleteCacheClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteCacheClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified cache parameter group. You cannot delete a cache parameter group if it is associated with any cache clusters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidCacheParameterGroupStateFault} <p>The current state of the cache parameter group does not allow the requested operation to occur.</p>
   *   - {CacheParameterGroupNotFoundFault} <p>The requested cache parameter group name does not refer to an existing cache parameter group.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteCacheParameterGroup(
    args: DeleteCacheParameterGroupInput
  ): Promise<DeleteCacheParameterGroupOutput>;
  public deleteCacheParameterGroup(
    args: DeleteCacheParameterGroupInput,
    cb: (err: any, data?: DeleteCacheParameterGroupOutput) => void
  ): void;
  public deleteCacheParameterGroup(
    args: DeleteCacheParameterGroupInput,
    cb?: (err: any, data?: DeleteCacheParameterGroupOutput) => void
  ): Promise<DeleteCacheParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteCacheParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a cache security group.</p> <note> <p>You cannot delete a cache security group if it is associated with any clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidCacheSecurityGroupStateFault} <p>The current state of the cache security group does not allow deletion.</p>
   *   - {CacheSecurityGroupNotFoundFault} <p>The requested cache security group name does not refer to an existing cache security group.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteCacheSecurityGroup(
    args: DeleteCacheSecurityGroupInput
  ): Promise<DeleteCacheSecurityGroupOutput>;
  public deleteCacheSecurityGroup(
    args: DeleteCacheSecurityGroupInput,
    cb: (err: any, data?: DeleteCacheSecurityGroupOutput) => void
  ): void;
  public deleteCacheSecurityGroup(
    args: DeleteCacheSecurityGroupInput,
    cb?: (err: any, data?: DeleteCacheSecurityGroupOutput) => void
  ): Promise<DeleteCacheSecurityGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteCacheSecurityGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a cache subnet group.</p> <note> <p>You cannot delete a cache subnet group if it is associated with any clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {CacheSubnetGroupInUse} <p>The requested cache subnet group is currently in use.</p>
   *   - {CacheSubnetGroupNotFoundFault} <p>The requested cache subnet group name does not refer to an existing cache subnet group.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteCacheSubnetGroup(
    args: DeleteCacheSubnetGroupInput
  ): Promise<DeleteCacheSubnetGroupOutput>;
  public deleteCacheSubnetGroup(
    args: DeleteCacheSubnetGroupInput,
    cb: (err: any, data?: DeleteCacheSubnetGroupOutput) => void
  ): void;
  public deleteCacheSubnetGroup(
    args: DeleteCacheSubnetGroupInput,
    cb?: (err: any, data?: DeleteCacheSubnetGroupOutput) => void
  ): Promise<DeleteCacheSubnetGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteCacheSubnetGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an existing replication group. By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas. If the replication group has only one primary, you can optionally delete only the read replicas, while retaining the primary by setting <code>RetainPrimaryCluster=true</code>.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ReplicationGroupNotFoundFault} <p>The specified replication group does not exist.</p>
   *   - {InvalidReplicationGroupStateFault} <p>The requested replication group is not in the <code>available</code> state.</p>
   *   - {SnapshotAlreadyExistsFault} <p>You already have a snapshot with the given name.</p>
   *   - {SnapshotFeatureNotSupportedFault} <p>You attempted one of the following operations:</p> <ul> <li> <p>Creating a snapshot of a Redis cluster running on a <code>cache.t1.micro</code> cache node.</p> </li> <li> <p>Creating a snapshot of a cluster that is running Memcached rather than Redis.</p> </li> </ul> <p>Neither of these are supported by ElastiCache.</p>
   *   - {SnapshotQuotaExceededFault} <p>The request cannot be processed because it would exceed the maximum number of snapshots.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteReplicationGroup(
    args: DeleteReplicationGroupInput
  ): Promise<DeleteReplicationGroupOutput>;
  public deleteReplicationGroup(
    args: DeleteReplicationGroupInput,
    cb: (err: any, data?: DeleteReplicationGroupOutput) => void
  ): void;
  public deleteReplicationGroup(
    args: DeleteReplicationGroupInput,
    cb?: (err: any, data?: DeleteReplicationGroupOutput) => void
  ): Promise<DeleteReplicationGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteReplicationGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an existing snapshot. When you receive a successful response from this operation, ElastiCache immediately begins deleting the snapshot; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {SnapshotNotFoundFault} <p>The requested snapshot name does not refer to an existing snapshot.</p>
   *   - {InvalidSnapshotStateFault} <p>The current state of the snapshot does not allow the requested operation to occur.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSnapshot(
    args: DeleteSnapshotInput
  ): Promise<DeleteSnapshotOutput>;
  public deleteSnapshot(
    args: DeleteSnapshotInput,
    cb: (err: any, data?: DeleteSnapshotOutput) => void
  ): void;
  public deleteSnapshot(
    args: DeleteSnapshotInput,
    cb?: (err: any, data?: DeleteSnapshotOutput) => void
  ): Promise<DeleteSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cache cluster if a cluster identifier is supplied.</p> <p>By default, abbreviated information about the clusters is returned. You can use the optional <i>ShowCacheNodeInfo</i> flag to retrieve detailed information about the cache nodes associated with the clusters. These details include the DNS address and port for the cache node endpoint.</p> <p>If the cluster is in the <i>creating</i> state, only cluster-level information is displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the <i>deleting</i> state, only cluster-level information is displayed.</p> <p>If cache nodes are currently being added to the cluster, node endpoint information and creation time for the additional nodes are not displayed until they are completely provisioned. When the cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If cache nodes are currently being removed from the cluster, no endpoint information for the removed nodes is displayed.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CacheClusterNotFoundFault} <p>The requested cluster ID does not refer to an existing cluster.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeCacheClusters(
    args: DescribeCacheClustersInput
  ): Promise<DescribeCacheClustersOutput>;
  public describeCacheClusters(
    args: DescribeCacheClustersInput,
    cb: (err: any, data?: DescribeCacheClustersOutput) => void
  ): void;
  public describeCacheClusters(
    args: DescribeCacheClustersInput,
    cb?: (err: any, data?: DescribeCacheClustersOutput) => void
  ): Promise<DescribeCacheClustersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeCacheClustersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of the available cache engines and their versions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeCacheEngineVersions(
    args: DescribeCacheEngineVersionsInput
  ): Promise<DescribeCacheEngineVersionsOutput>;
  public describeCacheEngineVersions(
    args: DescribeCacheEngineVersionsInput,
    cb: (err: any, data?: DescribeCacheEngineVersionsOutput) => void
  ): void;
  public describeCacheEngineVersions(
    args: DescribeCacheEngineVersionsInput,
    cb?: (err: any, data?: DescribeCacheEngineVersionsOutput) => void
  ): Promise<DescribeCacheEngineVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeCacheEngineVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list contains only the descriptions for that group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CacheParameterGroupNotFoundFault} <p>The requested cache parameter group name does not refer to an existing cache parameter group.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeCacheParameterGroups(
    args: DescribeCacheParameterGroupsInput
  ): Promise<DescribeCacheParameterGroupsOutput>;
  public describeCacheParameterGroups(
    args: DescribeCacheParameterGroupsInput,
    cb: (err: any, data?: DescribeCacheParameterGroupsOutput) => void
  ): void;
  public describeCacheParameterGroups(
    args: DescribeCacheParameterGroupsInput,
    cb?: (err: any, data?: DescribeCacheParameterGroupsOutput) => void
  ): Promise<DescribeCacheParameterGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeCacheParameterGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the detailed parameter list for a particular cache parameter group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CacheParameterGroupNotFoundFault} <p>The requested cache parameter group name does not refer to an existing cache parameter group.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeCacheParameters(
    args: DescribeCacheParametersInput
  ): Promise<DescribeCacheParametersOutput>;
  public describeCacheParameters(
    args: DescribeCacheParametersInput,
    cb: (err: any, data?: DescribeCacheParametersOutput) => void
  ): void;
  public describeCacheParameters(
    args: DescribeCacheParametersInput,
    cb?: (err: any, data?: DescribeCacheParametersOutput) => void
  ): Promise<DescribeCacheParametersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeCacheParametersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of cache security group descriptions. If a cache security group name is specified, the list contains only the description of that group. This applicable only when you have ElastiCache in Classic setup </p>
   *
   * This operation may fail with one of the following errors:
   *   - {CacheSecurityGroupNotFoundFault} <p>The requested cache security group name does not refer to an existing cache security group.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeCacheSecurityGroups(
    args: DescribeCacheSecurityGroupsInput
  ): Promise<DescribeCacheSecurityGroupsOutput>;
  public describeCacheSecurityGroups(
    args: DescribeCacheSecurityGroupsInput,
    cb: (err: any, data?: DescribeCacheSecurityGroupsOutput) => void
  ): void;
  public describeCacheSecurityGroups(
    args: DescribeCacheSecurityGroupsInput,
    cb?: (err: any, data?: DescribeCacheSecurityGroupsOutput) => void
  ): Promise<DescribeCacheSecurityGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeCacheSecurityGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of cache subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group. This is applicable only when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by default. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {CacheSubnetGroupNotFoundFault} <p>The requested cache subnet group name does not refer to an existing cache subnet group.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeCacheSubnetGroups(
    args: DescribeCacheSubnetGroupsInput
  ): Promise<DescribeCacheSubnetGroupsOutput>;
  public describeCacheSubnetGroups(
    args: DescribeCacheSubnetGroupsInput,
    cb: (err: any, data?: DescribeCacheSubnetGroupsOutput) => void
  ): void;
  public describeCacheSubnetGroups(
    args: DescribeCacheSubnetGroupsInput,
    cb?: (err: any, data?: DescribeCacheSubnetGroupsOutput) => void
  ): Promise<DescribeCacheSubnetGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeCacheSubnetGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the default engine and system parameter information for the specified cache engine.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersInput
  ): Promise<DescribeEngineDefaultParametersOutput>;
  public describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersInput,
    cb: (err: any, data?: DescribeEngineDefaultParametersOutput) => void
  ): void;
  public describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersInput,
    cb?: (err: any, data?: DescribeEngineDefaultParametersOutput) => void
  ): Promise<DescribeEngineDefaultParametersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEngineDefaultParametersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns events related to clusters, cache security groups, and cache parameter groups. You can obtain events specific to a particular cluster, cache security group, or cache parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEvents(
    args: DescribeEventsInput
  ): Promise<DescribeEventsOutput>;
  public describeEvents(
    args: DescribeEventsInput,
    cb: (err: any, data?: DescribeEventsOutput) => void
  ): void;
  public describeEvents(
    args: DescribeEventsInput,
    cb?: (err: any, data?: DescribeEventsOutput) => void
  ): Promise<DescribeEventsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEventsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a particular replication group. If no identifier is specified, <code>DescribeReplicationGroups</code> returns information about all replication groups.</p> <note> <p>This operation is valid for Redis only.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ReplicationGroupNotFoundFault} <p>The specified replication group does not exist.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeReplicationGroups(
    args: DescribeReplicationGroupsInput
  ): Promise<DescribeReplicationGroupsOutput>;
  public describeReplicationGroups(
    args: DescribeReplicationGroupsInput,
    cb: (err: any, data?: DescribeReplicationGroupsOutput) => void
  ): void;
  public describeReplicationGroups(
    args: DescribeReplicationGroupsInput,
    cb?: (err: any, data?: DescribeReplicationGroupsOutput) => void
  ): Promise<DescribeReplicationGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeReplicationGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about reserved cache nodes for this account, or about a specified reserved cache node.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ReservedCacheNodeNotFoundFault} <p>The requested reserved cache node was not found.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeReservedCacheNodes(
    args: DescribeReservedCacheNodesInput
  ): Promise<DescribeReservedCacheNodesOutput>;
  public describeReservedCacheNodes(
    args: DescribeReservedCacheNodesInput,
    cb: (err: any, data?: DescribeReservedCacheNodesOutput) => void
  ): void;
  public describeReservedCacheNodes(
    args: DescribeReservedCacheNodesInput,
    cb?: (err: any, data?: DescribeReservedCacheNodesOutput) => void
  ): Promise<DescribeReservedCacheNodesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeReservedCacheNodesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists available reserved cache node offerings.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ReservedCacheNodesOfferingNotFoundFault} <p>The requested cache node offering does not exist.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeReservedCacheNodesOfferings(
    args: DescribeReservedCacheNodesOfferingsInput
  ): Promise<DescribeReservedCacheNodesOfferingsOutput>;
  public describeReservedCacheNodesOfferings(
    args: DescribeReservedCacheNodesOfferingsInput,
    cb: (err: any, data?: DescribeReservedCacheNodesOfferingsOutput) => void
  ): void;
  public describeReservedCacheNodesOfferings(
    args: DescribeReservedCacheNodesOfferingsInput,
    cb?: (err: any, data?: DescribeReservedCacheNodesOfferingsOutput) => void
  ): Promise<DescribeReservedCacheNodesOfferingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeReservedCacheNodesOfferingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns details of the service updates</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUpdateNotFoundFault} <p>The service update doesn't exist</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeServiceUpdates(
    args: DescribeServiceUpdatesInput
  ): Promise<DescribeServiceUpdatesOutput>;
  public describeServiceUpdates(
    args: DescribeServiceUpdatesInput,
    cb: (err: any, data?: DescribeServiceUpdatesOutput) => void
  ): void;
  public describeServiceUpdates(
    args: DescribeServiceUpdatesInput,
    cb?: (err: any, data?: DescribeServiceUpdatesOutput) => void
  ): Promise<DescribeServiceUpdatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeServiceUpdatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about cluster or replication group snapshots. By default, <code>DescribeSnapshots</code> lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cache cluster.</p> <note> <p>This operation is valid for Redis only.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {CacheClusterNotFoundFault} <p>The requested cluster ID does not refer to an existing cluster.</p>
   *   - {SnapshotNotFoundFault} <p>The requested snapshot name does not refer to an existing snapshot.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSnapshots(
    args: DescribeSnapshotsInput
  ): Promise<DescribeSnapshotsOutput>;
  public describeSnapshots(
    args: DescribeSnapshotsInput,
    cb: (err: any, data?: DescribeSnapshotsOutput) => void
  ): void;
  public describeSnapshots(
    args: DescribeSnapshotsInput,
    cb?: (err: any, data?: DescribeSnapshotsOutput) => void
  ): Promise<DescribeSnapshotsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSnapshotsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns details of the update actions </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeUpdateActions(
    args: DescribeUpdateActionsInput
  ): Promise<DescribeUpdateActionsOutput>;
  public describeUpdateActions(
    args: DescribeUpdateActionsInput,
    cb: (err: any, data?: DescribeUpdateActionsOutput) => void
  ): void;
  public describeUpdateActions(
    args: DescribeUpdateActionsInput,
    cb?: (err: any, data?: DescribeUpdateActionsOutput) => void
  ): Promise<DescribeUpdateActionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeUpdateActionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Dynamically increases the number of replics in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation is performed with no cluster down time.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ReplicationGroupNotFoundFault} <p>The specified replication group does not exist.</p>
   *   - {InvalidReplicationGroupStateFault} <p>The requested replication group is not in the <code>available</code> state.</p>
   *   - {InvalidCacheClusterStateFault} <p>The requested cluster is not in the <code>available</code> state.</p>
   *   - {InvalidVPCNetworkStateFault} <p>The VPC network is in an invalid state.</p>
   *   - {InsufficientCacheClusterCapacityFault} <p>The requested cache node type is not available in the specified Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ErrorMessages.html#ErrorMessages.INSUFFICIENT_CACHE_CLUSTER_CAPACITY">InsufficientCacheClusterCapacity</a> in the ElastiCache User Guide.</p>
   *   - {ClusterQuotaForCustomerExceededFault} <p>The request cannot be processed because it would exceed the allowed number of clusters per customer.</p>
   *   - {NodeGroupsPerReplicationGroupQuotaExceededFault} <p>The request cannot be processed because it would exceed the maximum allowed number of node groups (shards) in a single replication group. The default maximum is 90</p>
   *   - {NodeQuotaForCustomerExceededFault} <p>The request cannot be processed because it would exceed the allowed number of cache nodes per customer.</p>
   *   - {NoOperationFault} <p>The operation was not performed because no changes were required.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public increaseReplicaCount(
    args: IncreaseReplicaCountInput
  ): Promise<IncreaseReplicaCountOutput>;
  public increaseReplicaCount(
    args: IncreaseReplicaCountInput,
    cb: (err: any, data?: IncreaseReplicaCountOutput) => void
  ): void;
  public increaseReplicaCount(
    args: IncreaseReplicaCountInput,
    cb?: (err: any, data?: IncreaseReplicaCountOutput) => void
  ): Promise<IncreaseReplicaCountOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new IncreaseReplicaCountCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all available node types that you can scale your Redis cluster's or replication group's current node type up to.</p> <p>When you use the <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code> operations to scale up your cluster or replication group, the value of the <code>CacheNodeType</code> parameter must be one of the node types returned by this operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CacheClusterNotFoundFault} <p>The requested cluster ID does not refer to an existing cluster.</p>
   *   - {ReplicationGroupNotFoundFault} <p>The specified replication group does not exist.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAllowedNodeTypeModifications(
    args: ListAllowedNodeTypeModificationsInput
  ): Promise<ListAllowedNodeTypeModificationsOutput>;
  public listAllowedNodeTypeModifications(
    args: ListAllowedNodeTypeModificationsInput,
    cb: (err: any, data?: ListAllowedNodeTypeModificationsOutput) => void
  ): void;
  public listAllowedNodeTypeModifications(
    args: ListAllowedNodeTypeModificationsInput,
    cb?: (err: any, data?: ListAllowedNodeTypeModificationsOutput) => void
  ): Promise<ListAllowedNodeTypeModificationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAllowedNodeTypeModificationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all cost allocation tags currently on the named resource. A <code>cost allocation tag</code> is a key-value pair where the key is case-sensitive and the value is optional. You can use cost allocation tags to categorize and track your AWS costs.</p> <p>If the cluster is not in the <i>available</i> state, <code>ListTagsForResource</code> returns an error.</p> <p>You can have a maximum of 50 cost allocation tags on an ElastiCache resource. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Tagging.html">Monitoring Costs with Tags</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CacheClusterNotFoundFault} <p>The requested cluster ID does not refer to an existing cluster.</p>
   *   - {SnapshotNotFoundFault} <p>The requested snapshot name does not refer to an existing snapshot.</p>
   *   - {InvalidARNFault} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration parameters by specifying the parameters and the new values.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidCacheClusterStateFault} <p>The requested cluster is not in the <code>available</code> state.</p>
   *   - {InvalidCacheSecurityGroupStateFault} <p>The current state of the cache security group does not allow deletion.</p>
   *   - {InsufficientCacheClusterCapacityFault} <p>The requested cache node type is not available in the specified Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ErrorMessages.html#ErrorMessages.INSUFFICIENT_CACHE_CLUSTER_CAPACITY">InsufficientCacheClusterCapacity</a> in the ElastiCache User Guide.</p>
   *   - {CacheClusterNotFoundFault} <p>The requested cluster ID does not refer to an existing cluster.</p>
   *   - {NodeQuotaForClusterExceededFault} <p>The request cannot be processed because it would exceed the allowed number of cache nodes in a single cluster.</p>
   *   - {NodeQuotaForCustomerExceededFault} <p>The request cannot be processed because it would exceed the allowed number of cache nodes per customer.</p>
   *   - {CacheSecurityGroupNotFoundFault} <p>The requested cache security group name does not refer to an existing cache security group.</p>
   *   - {CacheParameterGroupNotFoundFault} <p>The requested cache parameter group name does not refer to an existing cache parameter group.</p>
   *   - {InvalidVPCNetworkStateFault} <p>The VPC network is in an invalid state.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyCacheCluster(
    args: ModifyCacheClusterInput
  ): Promise<ModifyCacheClusterOutput>;
  public modifyCacheCluster(
    args: ModifyCacheClusterInput,
    cb: (err: any, data?: ModifyCacheClusterOutput) => void
  ): void;
  public modifyCacheCluster(
    args: ModifyCacheClusterInput,
    cb?: (err: any, data?: ModifyCacheClusterOutput) => void
  ): Promise<ModifyCacheClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyCacheClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the parameters of a cache parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CacheParameterGroupNotFoundFault} <p>The requested cache parameter group name does not refer to an existing cache parameter group.</p>
   *   - {InvalidCacheParameterGroupStateFault} <p>The current state of the cache parameter group does not allow the requested operation to occur.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyCacheParameterGroup(
    args: ModifyCacheParameterGroupInput
  ): Promise<ModifyCacheParameterGroupOutput>;
  public modifyCacheParameterGroup(
    args: ModifyCacheParameterGroupInput,
    cb: (err: any, data?: ModifyCacheParameterGroupOutput) => void
  ): void;
  public modifyCacheParameterGroup(
    args: ModifyCacheParameterGroupInput,
    cb?: (err: any, data?: ModifyCacheParameterGroupOutput) => void
  ): Promise<ModifyCacheParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyCacheParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies an existing cache subnet group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CacheSubnetGroupNotFoundFault} <p>The requested cache subnet group name does not refer to an existing cache subnet group.</p>
   *   - {CacheSubnetQuotaExceededFault} <p>The request cannot be processed because it would exceed the allowed number of subnets in a cache subnet group.</p>
   *   - {SubnetInUse} <p>The requested subnet is being used by another cache subnet group.</p>
   *   - {InvalidSubnet} <p>An invalid subnet identifier was specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyCacheSubnetGroup(
    args: ModifyCacheSubnetGroupInput
  ): Promise<ModifyCacheSubnetGroupOutput>;
  public modifyCacheSubnetGroup(
    args: ModifyCacheSubnetGroupInput,
    cb: (err: any, data?: ModifyCacheSubnetGroupOutput) => void
  ): void;
  public modifyCacheSubnetGroup(
    args: ModifyCacheSubnetGroupInput,
    cb?: (err: any, data?: ModifyCacheSubnetGroupOutput) => void
  ): Promise<ModifyCacheSubnetGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyCacheSubnetGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the settings for a replication group.</p> <p>For Redis (cluster mode enabled) clusters, this operation cannot be used to change a cluster's node type or engine version. For more information, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/scaling-redis-cluster-mode-enabled.html">Scaling for Amazon ElastiCache for Redis (cluster mode enabled)</a> in the ElastiCache User Guide</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroupShardConfiguration.html">ModifyReplicationGroupShardConfiguration</a> in the ElastiCache API Reference</p> </li> </ul> <note> <p>This operation is valid for Redis only.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ReplicationGroupNotFoundFault} <p>The specified replication group does not exist.</p>
   *   - {InvalidReplicationGroupStateFault} <p>The requested replication group is not in the <code>available</code> state.</p>
   *   - {InvalidCacheClusterStateFault} <p>The requested cluster is not in the <code>available</code> state.</p>
   *   - {InvalidCacheSecurityGroupStateFault} <p>The current state of the cache security group does not allow deletion.</p>
   *   - {InsufficientCacheClusterCapacityFault} <p>The requested cache node type is not available in the specified Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ErrorMessages.html#ErrorMessages.INSUFFICIENT_CACHE_CLUSTER_CAPACITY">InsufficientCacheClusterCapacity</a> in the ElastiCache User Guide.</p>
   *   - {CacheClusterNotFoundFault} <p>The requested cluster ID does not refer to an existing cluster.</p>
   *   - {NodeQuotaForClusterExceededFault} <p>The request cannot be processed because it would exceed the allowed number of cache nodes in a single cluster.</p>
   *   - {NodeQuotaForCustomerExceededFault} <p>The request cannot be processed because it would exceed the allowed number of cache nodes per customer.</p>
   *   - {CacheSecurityGroupNotFoundFault} <p>The requested cache security group name does not refer to an existing cache security group.</p>
   *   - {CacheParameterGroupNotFoundFault} <p>The requested cache parameter group name does not refer to an existing cache parameter group.</p>
   *   - {InvalidVPCNetworkStateFault} <p>The VPC network is in an invalid state.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyReplicationGroup(
    args: ModifyReplicationGroupInput
  ): Promise<ModifyReplicationGroupOutput>;
  public modifyReplicationGroup(
    args: ModifyReplicationGroupInput,
    cb: (err: any, data?: ModifyReplicationGroupOutput) => void
  ): void;
  public modifyReplicationGroup(
    args: ModifyReplicationGroupInput,
    cb?: (err: any, data?: ModifyReplicationGroupOutput) => void
  ): Promise<ModifyReplicationGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyReplicationGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies a replication group's shards (node groups) by allowing you to add shards, remove shards, or rebalance the keyspaces among exisiting shards.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ReplicationGroupNotFoundFault} <p>The specified replication group does not exist.</p>
   *   - {InvalidReplicationGroupStateFault} <p>The requested replication group is not in the <code>available</code> state.</p>
   *   - {InvalidCacheClusterStateFault} <p>The requested cluster is not in the <code>available</code> state.</p>
   *   - {InvalidVPCNetworkStateFault} <p>The VPC network is in an invalid state.</p>
   *   - {InsufficientCacheClusterCapacityFault} <p>The requested cache node type is not available in the specified Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ErrorMessages.html#ErrorMessages.INSUFFICIENT_CACHE_CLUSTER_CAPACITY">InsufficientCacheClusterCapacity</a> in the ElastiCache User Guide.</p>
   *   - {NodeGroupsPerReplicationGroupQuotaExceededFault} <p>The request cannot be processed because it would exceed the maximum allowed number of node groups (shards) in a single replication group. The default maximum is 90</p>
   *   - {NodeQuotaForCustomerExceededFault} <p>The request cannot be processed because it would exceed the allowed number of cache nodes per customer.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyReplicationGroupShardConfiguration(
    args: ModifyReplicationGroupShardConfigurationInput
  ): Promise<ModifyReplicationGroupShardConfigurationOutput>;
  public modifyReplicationGroupShardConfiguration(
    args: ModifyReplicationGroupShardConfigurationInput,
    cb: (
      err: any,
      data?: ModifyReplicationGroupShardConfigurationOutput
    ) => void
  ): void;
  public modifyReplicationGroupShardConfiguration(
    args: ModifyReplicationGroupShardConfigurationInput,
    cb?: (
      err: any,
      data?: ModifyReplicationGroupShardConfigurationOutput
    ) => void
  ): Promise<ModifyReplicationGroupShardConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyReplicationGroupShardConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Allows you to purchase a reserved cache node offering.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ReservedCacheNodesOfferingNotFoundFault} <p>The requested cache node offering does not exist.</p>
   *   - {ReservedCacheNodeAlreadyExistsFault} <p>You already have a reservation with the given identifier.</p>
   *   - {ReservedCacheNodeQuotaExceededFault} <p>The request cannot be processed because it would exceed the user's cache node quota.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public purchaseReservedCacheNodesOffering(
    args: PurchaseReservedCacheNodesOfferingInput
  ): Promise<PurchaseReservedCacheNodesOfferingOutput>;
  public purchaseReservedCacheNodesOffering(
    args: PurchaseReservedCacheNodesOfferingInput,
    cb: (err: any, data?: PurchaseReservedCacheNodesOfferingOutput) => void
  ): void;
  public purchaseReservedCacheNodesOffering(
    args: PurchaseReservedCacheNodesOfferingInput,
    cb?: (err: any, data?: PurchaseReservedCacheNodesOfferingOutput) => void
  ): Promise<PurchaseReservedCacheNodesOfferingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PurchaseReservedCacheNodesOfferingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Reboots some, or all, of the cache nodes within a provisioned cluster. This operation applies any modified cache parameter groups to the cluster. The reboot operation takes place as soon as possible, and results in a momentary outage to the cluster. During the reboot, the cluster status is set to REBOOTING.</p> <p>The reboot causes the contents of the cache (for each cache node being rebooted) to be lost.</p> <p>When the reboot is complete, a cluster event is created.</p> <p>Rebooting a cluster is currently supported on Memcached and Redis (cluster mode disabled) clusters. Rebooting is not supported on Redis (cluster mode enabled) clusters.</p> <p>If you make changes to parameters that require a Redis (cluster mode enabled) cluster reboot for the changes to be applied, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.Rebooting.html">Rebooting a Cluster</a> for an alternate process.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidCacheClusterStateFault} <p>The requested cluster is not in the <code>available</code> state.</p>
   *   - {CacheClusterNotFoundFault} <p>The requested cluster ID does not refer to an existing cluster.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public rebootCacheCluster(
    args: RebootCacheClusterInput
  ): Promise<RebootCacheClusterOutput>;
  public rebootCacheCluster(
    args: RebootCacheClusterInput,
    cb: (err: any, data?: RebootCacheClusterOutput) => void
  ): void;
  public rebootCacheCluster(
    args: RebootCacheClusterInput,
    cb?: (err: any, data?: RebootCacheClusterOutput) => void
  ): Promise<RebootCacheClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RebootCacheClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the tags identified by the <code>TagKeys</code> list from the named resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CacheClusterNotFoundFault} <p>The requested cluster ID does not refer to an existing cluster.</p>
   *   - {SnapshotNotFoundFault} <p>The requested snapshot name does not refer to an existing snapshot.</p>
   *   - {InvalidARNFault} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {TagNotFoundFault} <p>The requested tag was not found on this resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeTagsFromResource(
    args: RemoveTagsFromResourceInput
  ): Promise<RemoveTagsFromResourceOutput>;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceInput,
    cb: (err: any, data?: RemoveTagsFromResourceOutput) => void
  ): void;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceInput,
    cb?: (err: any, data?: RemoveTagsFromResourceOutput) => void
  ): Promise<RemoveTagsFromResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveTagsFromResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the parameters of a cache parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire cache parameter group, specify the <code>ResetAllParameters</code> and <code>CacheParameterGroupName</code> parameters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidCacheParameterGroupStateFault} <p>The current state of the cache parameter group does not allow the requested operation to occur.</p>
   *   - {CacheParameterGroupNotFoundFault} <p>The requested cache parameter group name does not refer to an existing cache parameter group.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resetCacheParameterGroup(
    args: ResetCacheParameterGroupInput
  ): Promise<ResetCacheParameterGroupOutput>;
  public resetCacheParameterGroup(
    args: ResetCacheParameterGroupInput,
    cb: (err: any, data?: ResetCacheParameterGroupOutput) => void
  ): void;
  public resetCacheParameterGroup(
    args: ResetCacheParameterGroupInput,
    cb?: (err: any, data?: ResetCacheParameterGroupOutput) => void
  ): Promise<ResetCacheParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResetCacheParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Revokes ingress from a cache security group. Use this operation to disallow access from an Amazon EC2 security group that had been previously authorized.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CacheSecurityGroupNotFoundFault} <p>The requested cache security group name does not refer to an existing cache security group.</p>
   *   - {AuthorizationNotFoundFault} <p>The specified Amazon EC2 security group is not authorized for the specified cache security group.</p>
   *   - {InvalidCacheSecurityGroupStateFault} <p>The current state of the cache security group does not allow deletion.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public revokeCacheSecurityGroupIngress(
    args: RevokeCacheSecurityGroupIngressInput
  ): Promise<RevokeCacheSecurityGroupIngressOutput>;
  public revokeCacheSecurityGroupIngress(
    args: RevokeCacheSecurityGroupIngressInput,
    cb: (err: any, data?: RevokeCacheSecurityGroupIngressOutput) => void
  ): void;
  public revokeCacheSecurityGroupIngress(
    args: RevokeCacheSecurityGroupIngressInput,
    cb?: (err: any, data?: RevokeCacheSecurityGroupIngressOutput) => void
  ): Promise<RevokeCacheSecurityGroupIngressOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RevokeCacheSecurityGroupIngressCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Represents the input of a <code>TestFailover</code> operation which test automatic failover on a specified node group (called shard in the console) in a replication group (called cluster in the console).</p> <p class="title"> <b>Note the following</b> </p> <ul> <li> <p>A customer can use this operation to test automatic failover on up to 5 shards (called node groups in the ElastiCache API and AWS CLI) in any rolling 24-hour period.</p> </li> <li> <p>If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently.</p> <p> </p> </li> <li> <p>If calling this operation multiple times on different shards in the same Redis (cluster mode enabled) replication group, the first node replacement must complete before a subsequent call can be made.</p> </li> <li> <p>To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console, the AWS CLI, or the ElastiCache API. Look for the following automatic failover related events, listed here in order of occurrance:</p> <ol> <li> <p>Replication group message: <code>Test Failover API called for node group &lt;node-group-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Failover from master node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Replication group message: <code>Failover from master node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Cache cluster message: <code>Recovering cache nodes &lt;node-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Finished recovery for cache nodes &lt;node-id&gt;</code> </p> </li> </ol> <p>For more information see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ECEvents.Viewing.html">Viewing ElastiCache Events</a> in the <i>ElastiCache User Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> in the ElastiCache API Reference</p> </li> </ul> </li> </ul> <p>Also see, <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html#auto-failover-test">Testing Multi-AZ with Automatic Failover</a> in the <i>ElastiCache User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {APICallRateForCustomerExceededFault} <p>The customer has exceeded the allowed rate of API calls.</p>
   *   - {InvalidCacheClusterStateFault} <p>The requested cluster is not in the <code>available</code> state.</p>
   *   - {InvalidReplicationGroupStateFault} <p>The requested replication group is not in the <code>available</code> state.</p>
   *   - {NodeGroupNotFoundFault} <p>The node group specified by the <code>NodeGroupId</code> parameter could not be found. Please verify that the node group exists and that you spelled the <code>NodeGroupId</code> value correctly.</p>
   *   - {ReplicationGroupNotFoundFault} <p>The specified replication group does not exist.</p>
   *   - {TestFailoverNotAvailableFault} <p>The <code>TestFailover</code> action is not available.</p>
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public testFailover(args: TestFailoverInput): Promise<TestFailoverOutput>;
  public testFailover(
    args: TestFailoverInput,
    cb: (err: any, data?: TestFailoverOutput) => void
  ): void;
  public testFailover(
    args: TestFailoverInput,
    cb?: (err: any, data?: TestFailoverOutput) => void
  ): Promise<TestFailoverOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TestFailoverCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
