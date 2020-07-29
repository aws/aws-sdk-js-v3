import { ElastiCacheClient } from "./ElastiCacheClient";
import {
  AddTagsToResourceCommand,
  AddTagsToResourceCommandInput,
  AddTagsToResourceCommandOutput,
} from "./commands/AddTagsToResourceCommand";
import {
  AuthorizeCacheSecurityGroupIngressCommand,
  AuthorizeCacheSecurityGroupIngressCommandInput,
  AuthorizeCacheSecurityGroupIngressCommandOutput,
} from "./commands/AuthorizeCacheSecurityGroupIngressCommand";
import {
  BatchApplyUpdateActionCommand,
  BatchApplyUpdateActionCommandInput,
  BatchApplyUpdateActionCommandOutput,
} from "./commands/BatchApplyUpdateActionCommand";
import {
  BatchStopUpdateActionCommand,
  BatchStopUpdateActionCommandInput,
  BatchStopUpdateActionCommandOutput,
} from "./commands/BatchStopUpdateActionCommand";
import {
  CompleteMigrationCommand,
  CompleteMigrationCommandInput,
  CompleteMigrationCommandOutput,
} from "./commands/CompleteMigrationCommand";
import {
  CopySnapshotCommand,
  CopySnapshotCommandInput,
  CopySnapshotCommandOutput,
} from "./commands/CopySnapshotCommand";
import {
  CreateCacheClusterCommand,
  CreateCacheClusterCommandInput,
  CreateCacheClusterCommandOutput,
} from "./commands/CreateCacheClusterCommand";
import {
  CreateCacheParameterGroupCommand,
  CreateCacheParameterGroupCommandInput,
  CreateCacheParameterGroupCommandOutput,
} from "./commands/CreateCacheParameterGroupCommand";
import {
  CreateCacheSecurityGroupCommand,
  CreateCacheSecurityGroupCommandInput,
  CreateCacheSecurityGroupCommandOutput,
} from "./commands/CreateCacheSecurityGroupCommand";
import {
  CreateCacheSubnetGroupCommand,
  CreateCacheSubnetGroupCommandInput,
  CreateCacheSubnetGroupCommandOutput,
} from "./commands/CreateCacheSubnetGroupCommand";
import {
  CreateReplicationGroupCommand,
  CreateReplicationGroupCommandInput,
  CreateReplicationGroupCommandOutput,
} from "./commands/CreateReplicationGroupCommand";
import {
  CreateSnapshotCommand,
  CreateSnapshotCommandInput,
  CreateSnapshotCommandOutput,
} from "./commands/CreateSnapshotCommand";
import {
  DecreaseReplicaCountCommand,
  DecreaseReplicaCountCommandInput,
  DecreaseReplicaCountCommandOutput,
} from "./commands/DecreaseReplicaCountCommand";
import {
  DeleteCacheClusterCommand,
  DeleteCacheClusterCommandInput,
  DeleteCacheClusterCommandOutput,
} from "./commands/DeleteCacheClusterCommand";
import {
  DeleteCacheParameterGroupCommand,
  DeleteCacheParameterGroupCommandInput,
  DeleteCacheParameterGroupCommandOutput,
} from "./commands/DeleteCacheParameterGroupCommand";
import {
  DeleteCacheSecurityGroupCommand,
  DeleteCacheSecurityGroupCommandInput,
  DeleteCacheSecurityGroupCommandOutput,
} from "./commands/DeleteCacheSecurityGroupCommand";
import {
  DeleteCacheSubnetGroupCommand,
  DeleteCacheSubnetGroupCommandInput,
  DeleteCacheSubnetGroupCommandOutput,
} from "./commands/DeleteCacheSubnetGroupCommand";
import {
  DeleteReplicationGroupCommand,
  DeleteReplicationGroupCommandInput,
  DeleteReplicationGroupCommandOutput,
} from "./commands/DeleteReplicationGroupCommand";
import {
  DeleteSnapshotCommand,
  DeleteSnapshotCommandInput,
  DeleteSnapshotCommandOutput,
} from "./commands/DeleteSnapshotCommand";
import {
  DescribeCacheClustersCommand,
  DescribeCacheClustersCommandInput,
  DescribeCacheClustersCommandOutput,
} from "./commands/DescribeCacheClustersCommand";
import {
  DescribeCacheEngineVersionsCommand,
  DescribeCacheEngineVersionsCommandInput,
  DescribeCacheEngineVersionsCommandOutput,
} from "./commands/DescribeCacheEngineVersionsCommand";
import {
  DescribeCacheParameterGroupsCommand,
  DescribeCacheParameterGroupsCommandInput,
  DescribeCacheParameterGroupsCommandOutput,
} from "./commands/DescribeCacheParameterGroupsCommand";
import {
  DescribeCacheParametersCommand,
  DescribeCacheParametersCommandInput,
  DescribeCacheParametersCommandOutput,
} from "./commands/DescribeCacheParametersCommand";
import {
  DescribeCacheSecurityGroupsCommand,
  DescribeCacheSecurityGroupsCommandInput,
  DescribeCacheSecurityGroupsCommandOutput,
} from "./commands/DescribeCacheSecurityGroupsCommand";
import {
  DescribeCacheSubnetGroupsCommand,
  DescribeCacheSubnetGroupsCommandInput,
  DescribeCacheSubnetGroupsCommandOutput,
} from "./commands/DescribeCacheSubnetGroupsCommand";
import {
  DescribeEngineDefaultParametersCommand,
  DescribeEngineDefaultParametersCommandInput,
  DescribeEngineDefaultParametersCommandOutput,
} from "./commands/DescribeEngineDefaultParametersCommand";
import {
  DescribeEventsCommand,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
} from "./commands/DescribeEventsCommand";
import {
  DescribeReplicationGroupsCommand,
  DescribeReplicationGroupsCommandInput,
  DescribeReplicationGroupsCommandOutput,
} from "./commands/DescribeReplicationGroupsCommand";
import {
  DescribeReservedCacheNodesCommand,
  DescribeReservedCacheNodesCommandInput,
  DescribeReservedCacheNodesCommandOutput,
} from "./commands/DescribeReservedCacheNodesCommand";
import {
  DescribeReservedCacheNodesOfferingsCommand,
  DescribeReservedCacheNodesOfferingsCommandInput,
  DescribeReservedCacheNodesOfferingsCommandOutput,
} from "./commands/DescribeReservedCacheNodesOfferingsCommand";
import {
  DescribeServiceUpdatesCommand,
  DescribeServiceUpdatesCommandInput,
  DescribeServiceUpdatesCommandOutput,
} from "./commands/DescribeServiceUpdatesCommand";
import {
  DescribeSnapshotsCommand,
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput,
} from "./commands/DescribeSnapshotsCommand";
import {
  DescribeUpdateActionsCommand,
  DescribeUpdateActionsCommandInput,
  DescribeUpdateActionsCommandOutput,
} from "./commands/DescribeUpdateActionsCommand";
import {
  IncreaseReplicaCountCommand,
  IncreaseReplicaCountCommandInput,
  IncreaseReplicaCountCommandOutput,
} from "./commands/IncreaseReplicaCountCommand";
import {
  ListAllowedNodeTypeModificationsCommand,
  ListAllowedNodeTypeModificationsCommandInput,
  ListAllowedNodeTypeModificationsCommandOutput,
} from "./commands/ListAllowedNodeTypeModificationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ModifyCacheClusterCommand,
  ModifyCacheClusterCommandInput,
  ModifyCacheClusterCommandOutput,
} from "./commands/ModifyCacheClusterCommand";
import {
  ModifyCacheParameterGroupCommand,
  ModifyCacheParameterGroupCommandInput,
  ModifyCacheParameterGroupCommandOutput,
} from "./commands/ModifyCacheParameterGroupCommand";
import {
  ModifyCacheSubnetGroupCommand,
  ModifyCacheSubnetGroupCommandInput,
  ModifyCacheSubnetGroupCommandOutput,
} from "./commands/ModifyCacheSubnetGroupCommand";
import {
  ModifyReplicationGroupCommand,
  ModifyReplicationGroupCommandInput,
  ModifyReplicationGroupCommandOutput,
} from "./commands/ModifyReplicationGroupCommand";
import {
  ModifyReplicationGroupShardConfigurationCommand,
  ModifyReplicationGroupShardConfigurationCommandInput,
  ModifyReplicationGroupShardConfigurationCommandOutput,
} from "./commands/ModifyReplicationGroupShardConfigurationCommand";
import {
  PurchaseReservedCacheNodesOfferingCommand,
  PurchaseReservedCacheNodesOfferingCommandInput,
  PurchaseReservedCacheNodesOfferingCommandOutput,
} from "./commands/PurchaseReservedCacheNodesOfferingCommand";
import {
  RebootCacheClusterCommand,
  RebootCacheClusterCommandInput,
  RebootCacheClusterCommandOutput,
} from "./commands/RebootCacheClusterCommand";
import {
  RemoveTagsFromResourceCommand,
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "./commands/RemoveTagsFromResourceCommand";
import {
  ResetCacheParameterGroupCommand,
  ResetCacheParameterGroupCommandInput,
  ResetCacheParameterGroupCommandOutput,
} from "./commands/ResetCacheParameterGroupCommand";
import {
  RevokeCacheSecurityGroupIngressCommand,
  RevokeCacheSecurityGroupIngressCommandInput,
  RevokeCacheSecurityGroupIngressCommandOutput,
} from "./commands/RevokeCacheSecurityGroupIngressCommand";
import {
  StartMigrationCommand,
  StartMigrationCommandInput,
  StartMigrationCommandOutput,
} from "./commands/StartMigrationCommand";
import {
  TestFailoverCommand,
  TestFailoverCommandInput,
  TestFailoverCommandOutput,
} from "./commands/TestFailoverCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>Amazon ElastiCache</fullname>
 *         <p>Amazon ElastiCache is a web service that makes it easier to set up, operate,
 *             and scale a distributed cache in the cloud.</p>
 *         <p>With ElastiCache, customers get all of the benefits of a high-performance,
 *             in-memory cache with less of the administrative burden involved in launching and managing a distributed cache.
 *             The service makes setup, scaling,
 *             and cluster failure handling much simpler than in a self-managed cache deployment.</p>
 *         <p>In addition, through integration with Amazon CloudWatch,
 *             customers get enhanced visibility into the key performance statistics
 *             associated with their cache and can receive alarms if a part of their cache runs hot.</p>
 */
export class ElastiCache extends ElastiCacheClient {
  /**
   * <p>Adds up to 50 cost allocation tags to the named resource.
   *             A cost allocation tag is a key-value pair where the key and value are case-sensitive.
   *             You can use cost allocation tags to categorize and track your AWS costs.</p>
   *         <p>
   *             When you apply tags to your ElastiCache resources,
   *             AWS generates a cost allocation report as a comma-separated value (CSV) file
   *             with your usage and costs aggregated by your tags.
   *             You can apply tags that represent business categories (such as cost centers, application names, or owners)
   *             to organize your costs across multiple services.
   *             For more information,
   *             see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Tagging.html">Using Cost Allocation Tags in Amazon ElastiCache</a>
   *             in the <i>ElastiCache User Guide</i>.</p>
   */
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddTagsToResourceCommandOutput>;
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddTagsToResourceCommandOutput) => void),
    cb?: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): Promise<AddTagsToResourceCommandOutput> | void {
    const command = new AddTagsToResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Allows network ingress to a cache
   *             security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2
   *             security groups are used as the authorization mechanism.</p>
   *         <note>
   *             <p>You cannot authorize ingress from an Amazon EC2 security group in one region to an
   *             ElastiCache cluster in another region.</p>
   *          </note>
   */
  public authorizeCacheSecurityGroupIngress(
    args: AuthorizeCacheSecurityGroupIngressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AuthorizeCacheSecurityGroupIngressCommandOutput>;
  public authorizeCacheSecurityGroupIngress(
    args: AuthorizeCacheSecurityGroupIngressCommandInput,
    cb: (err: any, data?: AuthorizeCacheSecurityGroupIngressCommandOutput) => void
  ): void;
  public authorizeCacheSecurityGroupIngress(
    args: AuthorizeCacheSecurityGroupIngressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AuthorizeCacheSecurityGroupIngressCommandOutput) => void
  ): void;
  public authorizeCacheSecurityGroupIngress(
    args: AuthorizeCacheSecurityGroupIngressCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AuthorizeCacheSecurityGroupIngressCommandOutput) => void),
    cb?: (err: any, data?: AuthorizeCacheSecurityGroupIngressCommandOutput) => void
  ): Promise<AuthorizeCacheSecurityGroupIngressCommandOutput> | void {
    const command = new AuthorizeCacheSecurityGroupIngressCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Apply the service update. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/applying-updates.html">Applying Service Updates</a>.</p>
   */
  public batchApplyUpdateAction(
    args: BatchApplyUpdateActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchApplyUpdateActionCommandOutput>;
  public batchApplyUpdateAction(
    args: BatchApplyUpdateActionCommandInput,
    cb: (err: any, data?: BatchApplyUpdateActionCommandOutput) => void
  ): void;
  public batchApplyUpdateAction(
    args: BatchApplyUpdateActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchApplyUpdateActionCommandOutput) => void
  ): void;
  public batchApplyUpdateAction(
    args: BatchApplyUpdateActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchApplyUpdateActionCommandOutput) => void),
    cb?: (err: any, data?: BatchApplyUpdateActionCommandOutput) => void
  ): Promise<BatchApplyUpdateActionCommandOutput> | void {
    const command = new BatchApplyUpdateActionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stop the service update. For more information on service updates and stopping them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/stopping-self-service-updates.html">Stopping Service Updates</a>.</p>
   */
  public batchStopUpdateAction(
    args: BatchStopUpdateActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchStopUpdateActionCommandOutput>;
  public batchStopUpdateAction(
    args: BatchStopUpdateActionCommandInput,
    cb: (err: any, data?: BatchStopUpdateActionCommandOutput) => void
  ): void;
  public batchStopUpdateAction(
    args: BatchStopUpdateActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchStopUpdateActionCommandOutput) => void
  ): void;
  public batchStopUpdateAction(
    args: BatchStopUpdateActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchStopUpdateActionCommandOutput) => void),
    cb?: (err: any, data?: BatchStopUpdateActionCommandOutput) => void
  ): Promise<BatchStopUpdateActionCommandOutput> | void {
    const command = new BatchStopUpdateActionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Complete the migration of data.</p>
   */
  public completeMigration(
    args: CompleteMigrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CompleteMigrationCommandOutput>;
  public completeMigration(
    args: CompleteMigrationCommandInput,
    cb: (err: any, data?: CompleteMigrationCommandOutput) => void
  ): void;
  public completeMigration(
    args: CompleteMigrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CompleteMigrationCommandOutput) => void
  ): void;
  public completeMigration(
    args: CompleteMigrationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CompleteMigrationCommandOutput) => void),
    cb?: (err: any, data?: CompleteMigrationCommandOutput) => void
  ): Promise<CompleteMigrationCommandOutput> | void {
    const command = new CompleteMigrationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Makes a copy of an existing snapshot.</p>
   *
   *         <note>
   *             <p>This operation is valid for Redis only.</p>
   *          </note>
   *
   *         <important>
   *             <p>Users or groups that have permissions to use the <code>CopySnapshot</code> operation
   *                 can create their own Amazon S3 buckets and copy snapshots to it.
   *                 To control access to your snapshots, use an IAM policy to control who has the ability to use
   *                 the <code>CopySnapshot</code> operation.
   *                 For more information about using IAM to control the use of ElastiCache operations, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html">Exporting Snapshots</a>
   *                 and <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.html">Authentication & Access Control</a>.</p>
   *          </important>
   *
   *         <p>You could receive the following error messages.</p>
   *         <p class="title">
   *             <b>Error Messages</b>
   *          </p>
   *          <ul>
   *             <li>
   *                 <p>
   *                   <b>Error Message:</b>
   *                     The S3 bucket %s is outside of the region.</p>
   *                 <p>
   *                   <b>Solution:</b>
   *                     Create an Amazon S3 bucket in the same region as your snapshot.
   *                     For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Error Message:</b>
   *                     The S3 bucket %s does not exist.</p>
   *                 <p>
   *                   <b>Solution:</b>
   *                     Create an Amazon S3 bucket in the same region as your snapshot.
   *                     For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Error Message:</b>
   *                     The S3 bucket %s is not owned by the authenticated user.</p>
   *                 <p>
   *                   <b>Solution:</b>
   *                     Create an Amazon S3 bucket in the same region as your snapshot.
   *                     For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Error Message:</b>
   *                     The authenticated user does not have sufficient permissions to perform the desired activity.</p>
   *                 <p>
   *                   <b>Solution:</b>
   *                     Contact your system administrator to get the needed permissions.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Error Message:</b>
   *                     The S3 bucket %s already contains an object with key %s.</p>
   *                 <p>
   *                   <b>Solution:</b>
   *                     Give the <code>TargetSnapshotName</code> a new and unique value.
   *                     If exporting a snapshot,
   *                     you could alternatively create a new Amazon S3 bucket
   *                     and use this same value for <code>TargetSnapshotName</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Error Message: </b>
   *                     ElastiCache has not been granted READ permissions %s on the S3 Bucket.</p>
   *                 <p>
   *                   <b>Solution:</b>
   *                     Add List and Read permissions on the bucket.
   *                 For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Error Message: </b>
   *                     ElastiCache has not been granted WRITE permissions %s on the S3 Bucket.</p>
   *                 <p>
   *                   <b>Solution:</b>
   *                     Add Upload/Delete permissions on the bucket.
   *                     For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Error Message: </b>
   *                     ElastiCache has not been granted READ_ACP permissions %s on the S3 Bucket.</p>
   *                 <p>
   *                   <b>Solution:</b>
   *                     Add View Permissions on the bucket.
   *                 For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p>
   *             </li>
   *          </ul>
   */
  public copySnapshot(
    args: CopySnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopySnapshotCommandOutput>;
  public copySnapshot(args: CopySnapshotCommandInput, cb: (err: any, data?: CopySnapshotCommandOutput) => void): void;
  public copySnapshot(
    args: CopySnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopySnapshotCommandOutput) => void
  ): void;
  public copySnapshot(
    args: CopySnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CopySnapshotCommandOutput) => void),
    cb?: (err: any, data?: CopySnapshotCommandOutput) => void
  ): Promise<CopySnapshotCommandOutput> | void {
    const command = new CopySnapshotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a cluster. All nodes in the
   *             cluster run the same protocol-compliant cache engine software, either Memcached
   *             or Redis.</p>
   *         <p>This operation is not supported for Redis (cluster mode enabled) clusters.</p>
   */
  public createCacheCluster(
    args: CreateCacheClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCacheClusterCommandOutput>;
  public createCacheCluster(
    args: CreateCacheClusterCommandInput,
    cb: (err: any, data?: CreateCacheClusterCommandOutput) => void
  ): void;
  public createCacheCluster(
    args: CreateCacheClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCacheClusterCommandOutput) => void
  ): void;
  public createCacheCluster(
    args: CreateCacheClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCacheClusterCommandOutput) => void),
    cb?: (err: any, data?: CreateCacheClusterCommandOutput) => void
  ): Promise<CreateCacheClusterCommandOutput> | void {
    const command = new CreateCacheClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new Amazon ElastiCache cache parameter group. An ElastiCache
   *             cache parameter group is a collection of parameters and their values that are applied to all of the nodes
   *             in any cluster or replication group using the CacheParameterGroup.</p>
   *         <p>A newly created CacheParameterGroup is an exact duplicate of the default parameter group
   *             for the CacheParameterGroupFamily. To customize the newly created CacheParameterGroup you can
   *             change the values of specific parameters. For more information, see:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheParameterGroup.html">ModifyCacheParameterGroup</a> in the ElastiCache API Reference.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ParameterGroups.html">Parameters and Parameter Groups</a> in the ElastiCache User Guide.</p>
   *             </li>
   *          </ul>
   */
  public createCacheParameterGroup(
    args: CreateCacheParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCacheParameterGroupCommandOutput>;
  public createCacheParameterGroup(
    args: CreateCacheParameterGroupCommandInput,
    cb: (err: any, data?: CreateCacheParameterGroupCommandOutput) => void
  ): void;
  public createCacheParameterGroup(
    args: CreateCacheParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCacheParameterGroupCommandOutput) => void
  ): void;
  public createCacheParameterGroup(
    args: CreateCacheParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCacheParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateCacheParameterGroupCommandOutput) => void
  ): Promise<CreateCacheParameterGroupCommandOutput> | void {
    const command = new CreateCacheParameterGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new cache security group. Use a
   *             cache security group to control access to one or more clusters.</p>
   *         <p>Cache security groups are only used when you are creating a cluster outside of an Amazon
   *             Virtual Private Cloud (Amazon VPC). If you are creating a cluster inside of a VPC, use a cache
   *             subnet group instead. For more information,
   *             see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html">CreateCacheSubnetGroup</a>.</p>
   */
  public createCacheSecurityGroup(
    args: CreateCacheSecurityGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCacheSecurityGroupCommandOutput>;
  public createCacheSecurityGroup(
    args: CreateCacheSecurityGroupCommandInput,
    cb: (err: any, data?: CreateCacheSecurityGroupCommandOutput) => void
  ): void;
  public createCacheSecurityGroup(
    args: CreateCacheSecurityGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCacheSecurityGroupCommandOutput) => void
  ): void;
  public createCacheSecurityGroup(
    args: CreateCacheSecurityGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCacheSecurityGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateCacheSecurityGroupCommandOutput) => void
  ): Promise<CreateCacheSecurityGroupCommandOutput> | void {
    const command = new CreateCacheSecurityGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new cache subnet group.</p>
   *         <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p>
   */
  public createCacheSubnetGroup(
    args: CreateCacheSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCacheSubnetGroupCommandOutput>;
  public createCacheSubnetGroup(
    args: CreateCacheSubnetGroupCommandInput,
    cb: (err: any, data?: CreateCacheSubnetGroupCommandOutput) => void
  ): void;
  public createCacheSubnetGroup(
    args: CreateCacheSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCacheSubnetGroupCommandOutput) => void
  ): void;
  public createCacheSubnetGroup(
    args: CreateCacheSubnetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCacheSubnetGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateCacheSubnetGroupCommandOutput) => void
  ): Promise<CreateCacheSubnetGroupCommandOutput> | void {
    const command = new CreateCacheSubnetGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a Redis (cluster mode disabled) or a Redis (cluster mode enabled) replication group.</p>
   *         <p>A Redis (cluster mode disabled) replication group is a collection of clusters,
   *             where one of the clusters is a read/write primary and the others are read-only replicas.
   *             Writes to the primary are asynchronously propagated to the replicas.</p>
   *         <p>A Redis (cluster mode enabled) replication group is a collection of 1 to 90 node groups (shards).
   *             Each node group (shard) has one read/write primary node and up to 5 read-only replica nodes.
   *             Writes to the primary are asynchronously propagated to the replicas.
   *             Redis (cluster mode enabled) replication groups partition the data across node groups (shards).</p>
   *         <p>When a Redis (cluster mode disabled) replication group has been successfully created,
   *             you can add one or more read replicas to it, up to a total of 5 read replicas.
   *             You cannot alter a Redis (cluster mode enabled) replication group after it has been created.
   *             However, if you need to increase or decrease the number of node groups (console: shards),
   *             you can avail yourself of ElastiCache for Redis' enhanced backup and restore. For more information,
   *             see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-restoring.html">Restoring From a Backup with Cluster Resizing</a> in the <i>ElastiCache User Guide</i>.</p>
   *         <note>
   *             <p>This operation is valid for Redis only.</p>
   *          </note>
   */
  public createReplicationGroup(
    args: CreateReplicationGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReplicationGroupCommandOutput>;
  public createReplicationGroup(
    args: CreateReplicationGroupCommandInput,
    cb: (err: any, data?: CreateReplicationGroupCommandOutput) => void
  ): void;
  public createReplicationGroup(
    args: CreateReplicationGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReplicationGroupCommandOutput) => void
  ): void;
  public createReplicationGroup(
    args: CreateReplicationGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateReplicationGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateReplicationGroupCommandOutput) => void
  ): Promise<CreateReplicationGroupCommandOutput> | void {
    const command = new CreateReplicationGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a copy of an entire cluster or replication group at a
   *             specific moment in time.</p>
   *
   *         <note>
   *             <p>This operation is valid for Redis only.</p>
   *          </note>
   */
  public createSnapshot(
    args: CreateSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSnapshotCommandOutput>;
  public createSnapshot(
    args: CreateSnapshotCommandInput,
    cb: (err: any, data?: CreateSnapshotCommandOutput) => void
  ): void;
  public createSnapshot(
    args: CreateSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSnapshotCommandOutput) => void
  ): void;
  public createSnapshot(
    args: CreateSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSnapshotCommandOutput) => void),
    cb?: (err: any, data?: CreateSnapshotCommandOutput) => void
  ): Promise<CreateSnapshotCommandOutput> | void {
    const command = new CreateSnapshotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Dynamically decreases the number of replics in a Redis (cluster mode disabled) replication group or the number of
   *             replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation
   *             is performed with no cluster down time.</p>
   */
  public decreaseReplicaCount(
    args: DecreaseReplicaCountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DecreaseReplicaCountCommandOutput>;
  public decreaseReplicaCount(
    args: DecreaseReplicaCountCommandInput,
    cb: (err: any, data?: DecreaseReplicaCountCommandOutput) => void
  ): void;
  public decreaseReplicaCount(
    args: DecreaseReplicaCountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DecreaseReplicaCountCommandOutput) => void
  ): void;
  public decreaseReplicaCount(
    args: DecreaseReplicaCountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DecreaseReplicaCountCommandOutput) => void),
    cb?: (err: any, data?: DecreaseReplicaCountCommandOutput) => void
  ): Promise<DecreaseReplicaCountCommandOutput> | void {
    const command = new DecreaseReplicaCountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a previously provisioned cluster.
   *                 <code>DeleteCacheCluster</code> deletes all associated cache nodes, node endpoints and the
   *             cluster itself. When you receive a successful response from this operation,
   *             Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert
   *             this operation.</p>
   *         <p>This operation is not valid for:</p>
   *         <ul>
   *             <li>
   *                 <p>Redis (cluster mode enabled) clusters</p>
   *             </li>
   *             <li>
   *                 <p>A cluster that is the last read replica of a replication group</p>
   *             </li>
   *             <li>
   *                 <p>A node group (shard) that has Multi-AZ mode enabled</p>
   *             </li>
   *             <li>
   *                 <p>A cluster from a Redis (cluster mode enabled) replication group</p>
   *             </li>
   *             <li>
   *                 <p>A cluster that is not in the <code>available</code> state</p>
   *             </li>
   *          </ul>
   */
  public deleteCacheCluster(
    args: DeleteCacheClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCacheClusterCommandOutput>;
  public deleteCacheCluster(
    args: DeleteCacheClusterCommandInput,
    cb: (err: any, data?: DeleteCacheClusterCommandOutput) => void
  ): void;
  public deleteCacheCluster(
    args: DeleteCacheClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCacheClusterCommandOutput) => void
  ): void;
  public deleteCacheCluster(
    args: DeleteCacheClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCacheClusterCommandOutput) => void),
    cb?: (err: any, data?: DeleteCacheClusterCommandOutput) => void
  ): Promise<DeleteCacheClusterCommandOutput> | void {
    const command = new DeleteCacheClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified cache parameter
   *             group. You cannot delete a cache parameter group if it is associated with any cache
   *             clusters.</p>
   */
  public deleteCacheParameterGroup(
    args: DeleteCacheParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCacheParameterGroupCommandOutput>;
  public deleteCacheParameterGroup(
    args: DeleteCacheParameterGroupCommandInput,
    cb: (err: any, data?: DeleteCacheParameterGroupCommandOutput) => void
  ): void;
  public deleteCacheParameterGroup(
    args: DeleteCacheParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCacheParameterGroupCommandOutput) => void
  ): void;
  public deleteCacheParameterGroup(
    args: DeleteCacheParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCacheParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteCacheParameterGroupCommandOutput) => void
  ): Promise<DeleteCacheParameterGroupCommandOutput> | void {
    const command = new DeleteCacheParameterGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a cache security group.</p>
   *         <note>
   *             <p>You cannot delete a cache security group if it is associated with any clusters.</p>
   *          </note>
   */
  public deleteCacheSecurityGroup(
    args: DeleteCacheSecurityGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCacheSecurityGroupCommandOutput>;
  public deleteCacheSecurityGroup(
    args: DeleteCacheSecurityGroupCommandInput,
    cb: (err: any, data?: DeleteCacheSecurityGroupCommandOutput) => void
  ): void;
  public deleteCacheSecurityGroup(
    args: DeleteCacheSecurityGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCacheSecurityGroupCommandOutput) => void
  ): void;
  public deleteCacheSecurityGroup(
    args: DeleteCacheSecurityGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCacheSecurityGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteCacheSecurityGroupCommandOutput) => void
  ): Promise<DeleteCacheSecurityGroupCommandOutput> | void {
    const command = new DeleteCacheSecurityGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a cache subnet group.</p>
   *         <note>
   *             <p>You cannot delete a cache subnet group if it is associated with any clusters.</p>
   *          </note>
   */
  public deleteCacheSubnetGroup(
    args: DeleteCacheSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCacheSubnetGroupCommandOutput>;
  public deleteCacheSubnetGroup(
    args: DeleteCacheSubnetGroupCommandInput,
    cb: (err: any, data?: DeleteCacheSubnetGroupCommandOutput) => void
  ): void;
  public deleteCacheSubnetGroup(
    args: DeleteCacheSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCacheSubnetGroupCommandOutput) => void
  ): void;
  public deleteCacheSubnetGroup(
    args: DeleteCacheSubnetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCacheSubnetGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteCacheSubnetGroupCommandOutput) => void
  ): Promise<DeleteCacheSubnetGroupCommandOutput> | void {
    const command = new DeleteCacheSubnetGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an existing replication group.
   *             By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas.
   *             If the replication group has only one primary,
   *             you can optionally delete only the read replicas, while retaining the primary by setting <code>RetainPrimaryCluster=true</code>.</p>
   *         <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources;
   *             you cannot cancel or revert this operation.</p>
   *         <note>
   *             <p>This operation is valid for Redis only.</p>
   *          </note>
   */
  public deleteReplicationGroup(
    args: DeleteReplicationGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReplicationGroupCommandOutput>;
  public deleteReplicationGroup(
    args: DeleteReplicationGroupCommandInput,
    cb: (err: any, data?: DeleteReplicationGroupCommandOutput) => void
  ): void;
  public deleteReplicationGroup(
    args: DeleteReplicationGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReplicationGroupCommandOutput) => void
  ): void;
  public deleteReplicationGroup(
    args: DeleteReplicationGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteReplicationGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteReplicationGroupCommandOutput) => void
  ): Promise<DeleteReplicationGroupCommandOutput> | void {
    const command = new DeleteReplicationGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an existing snapshot. When you receive a
   *             successful response from this operation, ElastiCache immediately begins deleting the snapshot;
   *             you cannot cancel or revert this operation.</p>
   *
   *         <note>
   *             <p>This operation is valid for Redis only.</p>
   *          </note>
   */
  public deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSnapshotCommandOutput>;
  public deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    cb: (err: any, data?: DeleteSnapshotCommandOutput) => void
  ): void;
  public deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSnapshotCommandOutput) => void
  ): void;
  public deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSnapshotCommandOutput) => void),
    cb?: (err: any, data?: DeleteSnapshotCommandOutput) => void
  ): Promise<DeleteSnapshotCommandOutput> | void {
    const command = new DeleteSnapshotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about all provisioned
   *             clusters if no cluster identifier is specified, or about a specific cache
   *             cluster if a cluster identifier is supplied.</p>
   *         <p>By default, abbreviated information about the clusters is returned. You can
   *             use the optional <i>ShowCacheNodeInfo</i> flag to retrieve detailed information about the
   *             cache nodes associated with the clusters. These details include the DNS address
   *             and port for the cache node endpoint.</p>
   *         <p>If the cluster is in the <i>creating</i> state, only cluster-level information is displayed
   *             until all of the nodes are successfully provisioned.</p>
   *         <p>If the cluster is in the <i>deleting</i> state, only cluster-level information is displayed.</p>
   *         <p>If cache nodes are currently being added to the cluster, node endpoint information
   *             and creation time for the additional nodes are not displayed until they are
   *             completely provisioned. When the cluster state is <i>available</i>, the cluster is
   *             ready for use.</p>
   *         <p>If cache nodes are currently being removed from the cluster, no endpoint information
   *             for the removed nodes is displayed.</p>
   */
  public describeCacheClusters(
    args: DescribeCacheClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCacheClustersCommandOutput>;
  public describeCacheClusters(
    args: DescribeCacheClustersCommandInput,
    cb: (err: any, data?: DescribeCacheClustersCommandOutput) => void
  ): void;
  public describeCacheClusters(
    args: DescribeCacheClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCacheClustersCommandOutput) => void
  ): void;
  public describeCacheClusters(
    args: DescribeCacheClustersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCacheClustersCommandOutput) => void),
    cb?: (err: any, data?: DescribeCacheClustersCommandOutput) => void
  ): Promise<DescribeCacheClustersCommandOutput> | void {
    const command = new DescribeCacheClustersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of the available cache
   *             engines and their versions.</p>
   */
  public describeCacheEngineVersions(
    args: DescribeCacheEngineVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCacheEngineVersionsCommandOutput>;
  public describeCacheEngineVersions(
    args: DescribeCacheEngineVersionsCommandInput,
    cb: (err: any, data?: DescribeCacheEngineVersionsCommandOutput) => void
  ): void;
  public describeCacheEngineVersions(
    args: DescribeCacheEngineVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCacheEngineVersionsCommandOutput) => void
  ): void;
  public describeCacheEngineVersions(
    args: DescribeCacheEngineVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCacheEngineVersionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeCacheEngineVersionsCommandOutput) => void
  ): Promise<DescribeCacheEngineVersionsCommandOutput> | void {
    const command = new DescribeCacheEngineVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of cache parameter group
   *             descriptions. If a cache parameter group name is specified, the list contains only
   *             the descriptions for that group.</p>
   */
  public describeCacheParameterGroups(
    args: DescribeCacheParameterGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCacheParameterGroupsCommandOutput>;
  public describeCacheParameterGroups(
    args: DescribeCacheParameterGroupsCommandInput,
    cb: (err: any, data?: DescribeCacheParameterGroupsCommandOutput) => void
  ): void;
  public describeCacheParameterGroups(
    args: DescribeCacheParameterGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCacheParameterGroupsCommandOutput) => void
  ): void;
  public describeCacheParameterGroups(
    args: DescribeCacheParameterGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCacheParameterGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeCacheParameterGroupsCommandOutput) => void
  ): Promise<DescribeCacheParameterGroupsCommandOutput> | void {
    const command = new DescribeCacheParameterGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the detailed parameter list for a
   *             particular cache parameter group.</p>
   */
  public describeCacheParameters(
    args: DescribeCacheParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCacheParametersCommandOutput>;
  public describeCacheParameters(
    args: DescribeCacheParametersCommandInput,
    cb: (err: any, data?: DescribeCacheParametersCommandOutput) => void
  ): void;
  public describeCacheParameters(
    args: DescribeCacheParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCacheParametersCommandOutput) => void
  ): void;
  public describeCacheParameters(
    args: DescribeCacheParametersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCacheParametersCommandOutput) => void),
    cb?: (err: any, data?: DescribeCacheParametersCommandOutput) => void
  ): Promise<DescribeCacheParametersCommandOutput> | void {
    const command = new DescribeCacheParametersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of cache security group
   *             descriptions. If a cache security group name is specified, the list contains only
   *             the description of that group. This applicable only when you have ElastiCache in Classic setup
   *         </p>
   */
  public describeCacheSecurityGroups(
    args: DescribeCacheSecurityGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCacheSecurityGroupsCommandOutput>;
  public describeCacheSecurityGroups(
    args: DescribeCacheSecurityGroupsCommandInput,
    cb: (err: any, data?: DescribeCacheSecurityGroupsCommandOutput) => void
  ): void;
  public describeCacheSecurityGroups(
    args: DescribeCacheSecurityGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCacheSecurityGroupsCommandOutput) => void
  ): void;
  public describeCacheSecurityGroups(
    args: DescribeCacheSecurityGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCacheSecurityGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeCacheSecurityGroupsCommandOutput) => void
  ): Promise<DescribeCacheSecurityGroupsCommandOutput> | void {
    const command = new DescribeCacheSecurityGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of cache subnet group
   *             descriptions. If a subnet group name is specified, the list  contains only the
   *             description of that group. This is applicable only when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by default.
   *         </p>
   */
  public describeCacheSubnetGroups(
    args: DescribeCacheSubnetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCacheSubnetGroupsCommandOutput>;
  public describeCacheSubnetGroups(
    args: DescribeCacheSubnetGroupsCommandInput,
    cb: (err: any, data?: DescribeCacheSubnetGroupsCommandOutput) => void
  ): void;
  public describeCacheSubnetGroups(
    args: DescribeCacheSubnetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCacheSubnetGroupsCommandOutput) => void
  ): void;
  public describeCacheSubnetGroups(
    args: DescribeCacheSubnetGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCacheSubnetGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeCacheSubnetGroupsCommandOutput) => void
  ): Promise<DescribeCacheSubnetGroupsCommandOutput> | void {
    const command = new DescribeCacheSubnetGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the default engine and
   *             system parameter information for the specified cache engine.</p>
   */
  public describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEngineDefaultParametersCommandOutput>;
  public describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersCommandInput,
    cb: (err: any, data?: DescribeEngineDefaultParametersCommandOutput) => void
  ): void;
  public describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEngineDefaultParametersCommandOutput) => void
  ): void;
  public describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEngineDefaultParametersCommandOutput) => void),
    cb?: (err: any, data?: DescribeEngineDefaultParametersCommandOutput) => void
  ): Promise<DescribeEngineDefaultParametersCommandOutput> | void {
    const command = new DescribeEngineDefaultParametersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns events related to clusters, cache
   *             security groups, and cache parameter groups. You can obtain events specific to a
   *             particular cluster, cache security group, or cache parameter group by providing
   *             the name as a parameter.</p>
   *         <p>By default, only the events occurring within the last hour are returned;
   *             however, you can retrieve up to 14 days' worth of events if necessary.</p>
   */
  public describeEvents(
    args: DescribeEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventsCommandOutput>;
  public describeEvents(
    args: DescribeEventsCommandInput,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;
  public describeEvents(
    args: DescribeEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;
  public describeEvents(
    args: DescribeEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEventsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventsCommandOutput) => void
  ): Promise<DescribeEventsCommandOutput> | void {
    const command = new DescribeEventsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about a particular
   *             replication group. If no identifier is specified, <code>DescribeReplicationGroups</code>
   *             returns information about all replication groups.</p>
   *         <note>
   *             <p>This operation is valid for Redis only.</p>
   *          </note>
   */
  public describeReplicationGroups(
    args: DescribeReplicationGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplicationGroupsCommandOutput>;
  public describeReplicationGroups(
    args: DescribeReplicationGroupsCommandInput,
    cb: (err: any, data?: DescribeReplicationGroupsCommandOutput) => void
  ): void;
  public describeReplicationGroups(
    args: DescribeReplicationGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplicationGroupsCommandOutput) => void
  ): void;
  public describeReplicationGroups(
    args: DescribeReplicationGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeReplicationGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeReplicationGroupsCommandOutput) => void
  ): Promise<DescribeReplicationGroupsCommandOutput> | void {
    const command = new DescribeReplicationGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about reserved cache
   *             nodes for this account, or about a specified reserved cache node.</p>
   */
  public describeReservedCacheNodes(
    args: DescribeReservedCacheNodesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedCacheNodesCommandOutput>;
  public describeReservedCacheNodes(
    args: DescribeReservedCacheNodesCommandInput,
    cb: (err: any, data?: DescribeReservedCacheNodesCommandOutput) => void
  ): void;
  public describeReservedCacheNodes(
    args: DescribeReservedCacheNodesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedCacheNodesCommandOutput) => void
  ): void;
  public describeReservedCacheNodes(
    args: DescribeReservedCacheNodesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeReservedCacheNodesCommandOutput) => void),
    cb?: (err: any, data?: DescribeReservedCacheNodesCommandOutput) => void
  ): Promise<DescribeReservedCacheNodesCommandOutput> | void {
    const command = new DescribeReservedCacheNodesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists available reserved cache
   *             node offerings.</p>
   */
  public describeReservedCacheNodesOfferings(
    args: DescribeReservedCacheNodesOfferingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedCacheNodesOfferingsCommandOutput>;
  public describeReservedCacheNodesOfferings(
    args: DescribeReservedCacheNodesOfferingsCommandInput,
    cb: (err: any, data?: DescribeReservedCacheNodesOfferingsCommandOutput) => void
  ): void;
  public describeReservedCacheNodesOfferings(
    args: DescribeReservedCacheNodesOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedCacheNodesOfferingsCommandOutput) => void
  ): void;
  public describeReservedCacheNodesOfferings(
    args: DescribeReservedCacheNodesOfferingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeReservedCacheNodesOfferingsCommandOutput) => void),
    cb?: (err: any, data?: DescribeReservedCacheNodesOfferingsCommandOutput) => void
  ): Promise<DescribeReservedCacheNodesOfferingsCommandOutput> | void {
    const command = new DescribeReservedCacheNodesOfferingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns details of the service updates</p>
   */
  public describeServiceUpdates(
    args: DescribeServiceUpdatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServiceUpdatesCommandOutput>;
  public describeServiceUpdates(
    args: DescribeServiceUpdatesCommandInput,
    cb: (err: any, data?: DescribeServiceUpdatesCommandOutput) => void
  ): void;
  public describeServiceUpdates(
    args: DescribeServiceUpdatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServiceUpdatesCommandOutput) => void
  ): void;
  public describeServiceUpdates(
    args: DescribeServiceUpdatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeServiceUpdatesCommandOutput) => void),
    cb?: (err: any, data?: DescribeServiceUpdatesCommandOutput) => void
  ): Promise<DescribeServiceUpdatesCommandOutput> | void {
    const command = new DescribeServiceUpdatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about cluster or replication group snapshots.
   *             By default, <code>DescribeSnapshots</code> lists all of your snapshots; it can optionally
   *             describe a single snapshot, or just the snapshots associated with a particular cache
   *             cluster.</p>
   *
   *         <note>
   *             <p>This operation is valid for Redis only.</p>
   *          </note>
   */
  public describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSnapshotsCommandOutput>;
  public describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    cb: (err: any, data?: DescribeSnapshotsCommandOutput) => void
  ): void;
  public describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSnapshotsCommandOutput) => void
  ): void;
  public describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSnapshotsCommandOutput) => void),
    cb?: (err: any, data?: DescribeSnapshotsCommandOutput) => void
  ): Promise<DescribeSnapshotsCommandOutput> | void {
    const command = new DescribeSnapshotsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns details of the update actions </p>
   */
  public describeUpdateActions(
    args: DescribeUpdateActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUpdateActionsCommandOutput>;
  public describeUpdateActions(
    args: DescribeUpdateActionsCommandInput,
    cb: (err: any, data?: DescribeUpdateActionsCommandOutput) => void
  ): void;
  public describeUpdateActions(
    args: DescribeUpdateActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUpdateActionsCommandOutput) => void
  ): void;
  public describeUpdateActions(
    args: DescribeUpdateActionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeUpdateActionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeUpdateActionsCommandOutput) => void
  ): Promise<DescribeUpdateActionsCommandOutput> | void {
    const command = new DescribeUpdateActionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Dynamically increases the number of replics in a Redis (cluster mode disabled) replication group or the number of
   *             replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation
   *             is performed with no cluster down time.</p>
   */
  public increaseReplicaCount(
    args: IncreaseReplicaCountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<IncreaseReplicaCountCommandOutput>;
  public increaseReplicaCount(
    args: IncreaseReplicaCountCommandInput,
    cb: (err: any, data?: IncreaseReplicaCountCommandOutput) => void
  ): void;
  public increaseReplicaCount(
    args: IncreaseReplicaCountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: IncreaseReplicaCountCommandOutput) => void
  ): void;
  public increaseReplicaCount(
    args: IncreaseReplicaCountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: IncreaseReplicaCountCommandOutput) => void),
    cb?: (err: any, data?: IncreaseReplicaCountCommandOutput) => void
  ): Promise<IncreaseReplicaCountCommandOutput> | void {
    const command = new IncreaseReplicaCountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all available node types that you
   *             can scale your Redis cluster's or replication group's current node type.</p>
   *
   *         <p>When you use the <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code> operations to
   *             scale your cluster or replication group, the value of the <code>CacheNodeType</code> parameter
   *             must be one of the node types returned by this operation.</p>
   */
  public listAllowedNodeTypeModifications(
    args: ListAllowedNodeTypeModificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAllowedNodeTypeModificationsCommandOutput>;
  public listAllowedNodeTypeModifications(
    args: ListAllowedNodeTypeModificationsCommandInput,
    cb: (err: any, data?: ListAllowedNodeTypeModificationsCommandOutput) => void
  ): void;
  public listAllowedNodeTypeModifications(
    args: ListAllowedNodeTypeModificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAllowedNodeTypeModificationsCommandOutput) => void
  ): void;
  public listAllowedNodeTypeModifications(
    args: ListAllowedNodeTypeModificationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAllowedNodeTypeModificationsCommandOutput) => void),
    cb?: (err: any, data?: ListAllowedNodeTypeModificationsCommandOutput) => void
  ): Promise<ListAllowedNodeTypeModificationsCommandOutput> | void {
    const command = new ListAllowedNodeTypeModificationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all cost allocation tags currently on the named resource.
   *             A <code>cost allocation tag</code> is a key-value pair where the key is case-sensitive and the value is optional.
   *             You can use cost allocation tags to categorize and track your AWS costs.</p>
   *         <p>If the cluster is not in the <i>available</i> state, <code>ListTagsForResource</code>
   *             returns an error.</p>
   *
   *         <p>You can have a maximum of 50 cost allocation tags on an ElastiCache resource.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Tagging.html">Monitoring Costs with Tags</a>.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the settings for a cluster. You
   *             can use this operation to change one or more cluster configuration parameters by
   *             specifying the parameters and the new values.</p>
   */
  public modifyCacheCluster(
    args: ModifyCacheClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyCacheClusterCommandOutput>;
  public modifyCacheCluster(
    args: ModifyCacheClusterCommandInput,
    cb: (err: any, data?: ModifyCacheClusterCommandOutput) => void
  ): void;
  public modifyCacheCluster(
    args: ModifyCacheClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyCacheClusterCommandOutput) => void
  ): void;
  public modifyCacheCluster(
    args: ModifyCacheClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyCacheClusterCommandOutput) => void),
    cb?: (err: any, data?: ModifyCacheClusterCommandOutput) => void
  ): Promise<ModifyCacheClusterCommandOutput> | void {
    const command = new ModifyCacheClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the parameters of a cache
   *             parameter group. You can modify up to 20 parameters in a single request by submitting a
   *             list parameter name and value pairs.</p>
   */
  public modifyCacheParameterGroup(
    args: ModifyCacheParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyCacheParameterGroupCommandOutput>;
  public modifyCacheParameterGroup(
    args: ModifyCacheParameterGroupCommandInput,
    cb: (err: any, data?: ModifyCacheParameterGroupCommandOutput) => void
  ): void;
  public modifyCacheParameterGroup(
    args: ModifyCacheParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyCacheParameterGroupCommandOutput) => void
  ): void;
  public modifyCacheParameterGroup(
    args: ModifyCacheParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyCacheParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: ModifyCacheParameterGroupCommandOutput) => void
  ): Promise<ModifyCacheParameterGroupCommandOutput> | void {
    const command = new ModifyCacheParameterGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies an existing cache subnet group.</p>
   */
  public modifyCacheSubnetGroup(
    args: ModifyCacheSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyCacheSubnetGroupCommandOutput>;
  public modifyCacheSubnetGroup(
    args: ModifyCacheSubnetGroupCommandInput,
    cb: (err: any, data?: ModifyCacheSubnetGroupCommandOutput) => void
  ): void;
  public modifyCacheSubnetGroup(
    args: ModifyCacheSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyCacheSubnetGroupCommandOutput) => void
  ): void;
  public modifyCacheSubnetGroup(
    args: ModifyCacheSubnetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyCacheSubnetGroupCommandOutput) => void),
    cb?: (err: any, data?: ModifyCacheSubnetGroupCommandOutput) => void
  ): Promise<ModifyCacheSubnetGroupCommandOutput> | void {
    const command = new ModifyCacheSubnetGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the settings for a replication group.</p>
   *         <p>For Redis (cluster mode enabled) clusters, this operation cannot be used to
   *             change a cluster's node type or engine version. For more information,
   *             see:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/scaling-redis-cluster-mode-enabled.html">Scaling for Amazon ElastiCache for Redis (cluster mode enabled)</a>
   *                     in the ElastiCache User Guide</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroupShardConfiguration.html">ModifyReplicationGroupShardConfiguration</a>
   *                     in the ElastiCache API Reference</p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>This operation is valid for Redis only.</p>
   *          </note>
   */
  public modifyReplicationGroup(
    args: ModifyReplicationGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyReplicationGroupCommandOutput>;
  public modifyReplicationGroup(
    args: ModifyReplicationGroupCommandInput,
    cb: (err: any, data?: ModifyReplicationGroupCommandOutput) => void
  ): void;
  public modifyReplicationGroup(
    args: ModifyReplicationGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyReplicationGroupCommandOutput) => void
  ): void;
  public modifyReplicationGroup(
    args: ModifyReplicationGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyReplicationGroupCommandOutput) => void),
    cb?: (err: any, data?: ModifyReplicationGroupCommandOutput) => void
  ): Promise<ModifyReplicationGroupCommandOutput> | void {
    const command = new ModifyReplicationGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies a replication group's shards (node groups) by allowing you to
   *             add shards, remove shards, or rebalance the keyspaces among exisiting shards.</p>
   */
  public modifyReplicationGroupShardConfiguration(
    args: ModifyReplicationGroupShardConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyReplicationGroupShardConfigurationCommandOutput>;
  public modifyReplicationGroupShardConfiguration(
    args: ModifyReplicationGroupShardConfigurationCommandInput,
    cb: (err: any, data?: ModifyReplicationGroupShardConfigurationCommandOutput) => void
  ): void;
  public modifyReplicationGroupShardConfiguration(
    args: ModifyReplicationGroupShardConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyReplicationGroupShardConfigurationCommandOutput) => void
  ): void;
  public modifyReplicationGroupShardConfiguration(
    args: ModifyReplicationGroupShardConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ModifyReplicationGroupShardConfigurationCommandOutput) => void),
    cb?: (err: any, data?: ModifyReplicationGroupShardConfigurationCommandOutput) => void
  ): Promise<ModifyReplicationGroupShardConfigurationCommandOutput> | void {
    const command = new ModifyReplicationGroupShardConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Allows you to purchase a reserved
   *             cache node offering.</p>
   */
  public purchaseReservedCacheNodesOffering(
    args: PurchaseReservedCacheNodesOfferingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PurchaseReservedCacheNodesOfferingCommandOutput>;
  public purchaseReservedCacheNodesOffering(
    args: PurchaseReservedCacheNodesOfferingCommandInput,
    cb: (err: any, data?: PurchaseReservedCacheNodesOfferingCommandOutput) => void
  ): void;
  public purchaseReservedCacheNodesOffering(
    args: PurchaseReservedCacheNodesOfferingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PurchaseReservedCacheNodesOfferingCommandOutput) => void
  ): void;
  public purchaseReservedCacheNodesOffering(
    args: PurchaseReservedCacheNodesOfferingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PurchaseReservedCacheNodesOfferingCommandOutput) => void),
    cb?: (err: any, data?: PurchaseReservedCacheNodesOfferingCommandOutput) => void
  ): Promise<PurchaseReservedCacheNodesOfferingCommandOutput> | void {
    const command = new PurchaseReservedCacheNodesOfferingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Reboots some, or all, of the cache nodes
   *             within a provisioned cluster. This operation applies any modified cache parameter
   *             groups to the cluster. The reboot operation takes place as soon as possible, and
   *             results in a momentary outage to the cluster. During the reboot, the cluster
   *             status is set to REBOOTING.</p>
   *         <p>The reboot causes the contents of the cache (for each cache node being rebooted) to be lost.</p>
   *         <p>When the reboot is complete, a cluster event is created.</p>
   *
   *         <p>Rebooting a cluster is currently supported on Memcached and Redis (cluster mode disabled) clusters.
   *             Rebooting is not supported on Redis (cluster mode enabled) clusters.</p>
   *
   *         <p>If you make changes to parameters that require a Redis (cluster mode enabled) cluster reboot for the changes to be applied,
   *             see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.Rebooting.html">Rebooting a Cluster</a> for an alternate process.</p>
   */
  public rebootCacheCluster(
    args: RebootCacheClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootCacheClusterCommandOutput>;
  public rebootCacheCluster(
    args: RebootCacheClusterCommandInput,
    cb: (err: any, data?: RebootCacheClusterCommandOutput) => void
  ): void;
  public rebootCacheCluster(
    args: RebootCacheClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootCacheClusterCommandOutput) => void
  ): void;
  public rebootCacheCluster(
    args: RebootCacheClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RebootCacheClusterCommandOutput) => void),
    cb?: (err: any, data?: RebootCacheClusterCommandOutput) => void
  ): Promise<RebootCacheClusterCommandOutput> | void {
    const command = new RebootCacheClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the tags identified by the <code>TagKeys</code>
   *             list from the named resource.</p>
   */
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveTagsFromResourceCommandOutput>;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveTagsFromResourceCommandOutput) => void),
    cb?: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): Promise<RemoveTagsFromResourceCommandOutput> | void {
    const command = new RemoveTagsFromResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the parameters of a cache
   *             parameter group to the engine or system default value. You can reset specific parameters
   *             by submitting a list of parameter names. To reset the entire cache parameter group,
   *             specify the <code>ResetAllParameters</code> and <code>CacheParameterGroupName</code> parameters.</p>
   */
  public resetCacheParameterGroup(
    args: ResetCacheParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetCacheParameterGroupCommandOutput>;
  public resetCacheParameterGroup(
    args: ResetCacheParameterGroupCommandInput,
    cb: (err: any, data?: ResetCacheParameterGroupCommandOutput) => void
  ): void;
  public resetCacheParameterGroup(
    args: ResetCacheParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetCacheParameterGroupCommandOutput) => void
  ): void;
  public resetCacheParameterGroup(
    args: ResetCacheParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResetCacheParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: ResetCacheParameterGroupCommandOutput) => void
  ): Promise<ResetCacheParameterGroupCommandOutput> | void {
    const command = new ResetCacheParameterGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Revokes ingress from a cache security group.
   *             Use this operation to disallow access from an Amazon EC2 security group
   *             that had been previously authorized.</p>
   */
  public revokeCacheSecurityGroupIngress(
    args: RevokeCacheSecurityGroupIngressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeCacheSecurityGroupIngressCommandOutput>;
  public revokeCacheSecurityGroupIngress(
    args: RevokeCacheSecurityGroupIngressCommandInput,
    cb: (err: any, data?: RevokeCacheSecurityGroupIngressCommandOutput) => void
  ): void;
  public revokeCacheSecurityGroupIngress(
    args: RevokeCacheSecurityGroupIngressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeCacheSecurityGroupIngressCommandOutput) => void
  ): void;
  public revokeCacheSecurityGroupIngress(
    args: RevokeCacheSecurityGroupIngressCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RevokeCacheSecurityGroupIngressCommandOutput) => void),
    cb?: (err: any, data?: RevokeCacheSecurityGroupIngressCommandOutput) => void
  ): Promise<RevokeCacheSecurityGroupIngressCommandOutput> | void {
    const command = new RevokeCacheSecurityGroupIngressCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Start the migration of data.</p>
   */
  public startMigration(
    args: StartMigrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMigrationCommandOutput>;
  public startMigration(
    args: StartMigrationCommandInput,
    cb: (err: any, data?: StartMigrationCommandOutput) => void
  ): void;
  public startMigration(
    args: StartMigrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMigrationCommandOutput) => void
  ): void;
  public startMigration(
    args: StartMigrationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartMigrationCommandOutput) => void),
    cb?: (err: any, data?: StartMigrationCommandOutput) => void
  ): Promise<StartMigrationCommandOutput> | void {
    const command = new StartMigrationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Represents the input of a <code>TestFailover</code> operation which test automatic failover on
   *             a specified node group (called shard in the console) in a replication group (called cluster in the console).</p>
   *
   *         <p class="title">
   *             <b>Note the following</b>
   *          </p>
   *          <ul>
   *             <li>
   *                 <p>A customer can use this operation to test automatic failover on up to 5 shards (called node groups in the ElastiCache API and AWS CLI)
   *                     in any rolling 24-hour period.</p>
   *             </li>
   *             <li>
   *                 <p>If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently.</p>
   *                 <p> </p>
   *             </li>
   *             <li>
   *                 <p>If calling this operation multiple times on different shards in the same Redis (cluster mode enabled) replication group,
   *                     the first node replacement must complete before a subsequent call can be made.</p>
   *             </li>
   *             <li>
   *                 <p>To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console,
   *                     the AWS CLI, or the ElastiCache API.
   *                     Look for the following automatic failover related events, listed here in order of occurrance:</p>
   *                 <ol>
   *                   <li>
   *                         <p>Replication group message: <code>Test Failover API called for node group <node-group-id></code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                         <p>Cache cluster message: <code>Failover from master node <primary-node-id> to replica node <node-id> completed</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                         <p>Replication group message: <code>Failover from master node <primary-node-id> to replica node <node-id> completed</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                         <p>Cache cluster message: <code>Recovering cache nodes <node-id></code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                         <p>Cache cluster message: <code>Finished recovery for cache nodes <node-id></code>
   *                      </p>
   *                   </li>
   *                </ol>
   *
   *                 <p>For more information see:</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ECEvents.Viewing.html">Viewing ElastiCache Events</a>
   *                             in the <i>ElastiCache User Guide</i>
   *                      </p>
   *                   </li>
   *                   <li>
   *                         <p>
   *                         <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> in the ElastiCache API Reference</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *
   *         <p>Also see, <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html#auto-failover-test">Testing Multi-AZ with Automatic Failover</a> in the <i>ElastiCache User Guide</i>.</p>
   */
  public testFailover(
    args: TestFailoverCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestFailoverCommandOutput>;
  public testFailover(args: TestFailoverCommandInput, cb: (err: any, data?: TestFailoverCommandOutput) => void): void;
  public testFailover(
    args: TestFailoverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestFailoverCommandOutput) => void
  ): void;
  public testFailover(
    args: TestFailoverCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TestFailoverCommandOutput) => void),
    cb?: (err: any, data?: TestFailoverCommandOutput) => void
  ): Promise<TestFailoverCommandOutput> | void {
    const command = new TestFailoverCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
