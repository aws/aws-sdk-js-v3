// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type BatchAssociateScramSecretCommandInput,
  type BatchAssociateScramSecretCommandOutput,
  BatchAssociateScramSecretCommand,
} from "./commands/BatchAssociateScramSecretCommand";
import {
  type BatchDisassociateScramSecretCommandInput,
  type BatchDisassociateScramSecretCommandOutput,
  BatchDisassociateScramSecretCommand,
} from "./commands/BatchDisassociateScramSecretCommand";
import {
  type CreateChannelCommandInput,
  type CreateChannelCommandOutput,
  CreateChannelCommand,
} from "./commands/CreateChannelCommand";
import {
  type CreateClusterCommandInput,
  type CreateClusterCommandOutput,
  CreateClusterCommand,
} from "./commands/CreateClusterCommand";
import {
  type CreateClusterV2CommandInput,
  type CreateClusterV2CommandOutput,
  CreateClusterV2Command,
} from "./commands/CreateClusterV2Command";
import {
  type CreateConfigurationCommandInput,
  type CreateConfigurationCommandOutput,
  CreateConfigurationCommand,
} from "./commands/CreateConfigurationCommand";
import {
  type CreateReplicatorCommandInput,
  type CreateReplicatorCommandOutput,
  CreateReplicatorCommand,
} from "./commands/CreateReplicatorCommand";
import {
  type CreateTopicCommandInput,
  type CreateTopicCommandOutput,
  CreateTopicCommand,
} from "./commands/CreateTopicCommand";
import {
  type CreateVpcConnectionCommandInput,
  type CreateVpcConnectionCommandOutput,
  CreateVpcConnectionCommand,
} from "./commands/CreateVpcConnectionCommand";
import {
  type DeleteChannelCommandInput,
  type DeleteChannelCommandOutput,
  DeleteChannelCommand,
} from "./commands/DeleteChannelCommand";
import {
  type DeleteClusterCommandInput,
  type DeleteClusterCommandOutput,
  DeleteClusterCommand,
} from "./commands/DeleteClusterCommand";
import {
  type DeleteClusterPolicyCommandInput,
  type DeleteClusterPolicyCommandOutput,
  DeleteClusterPolicyCommand,
} from "./commands/DeleteClusterPolicyCommand";
import {
  type DeleteConfigurationCommandInput,
  type DeleteConfigurationCommandOutput,
  DeleteConfigurationCommand,
} from "./commands/DeleteConfigurationCommand";
import {
  type DeleteReplicatorCommandInput,
  type DeleteReplicatorCommandOutput,
  DeleteReplicatorCommand,
} from "./commands/DeleteReplicatorCommand";
import {
  type DeleteTopicCommandInput,
  type DeleteTopicCommandOutput,
  DeleteTopicCommand,
} from "./commands/DeleteTopicCommand";
import {
  type DeleteVpcConnectionCommandInput,
  type DeleteVpcConnectionCommandOutput,
  DeleteVpcConnectionCommand,
} from "./commands/DeleteVpcConnectionCommand";
import {
  type DescribeChannelCommandInput,
  type DescribeChannelCommandOutput,
  DescribeChannelCommand,
} from "./commands/DescribeChannelCommand";
import {
  type DescribeClusterCommandInput,
  type DescribeClusterCommandOutput,
  DescribeClusterCommand,
} from "./commands/DescribeClusterCommand";
import {
  type DescribeClusterOperationCommandInput,
  type DescribeClusterOperationCommandOutput,
  DescribeClusterOperationCommand,
} from "./commands/DescribeClusterOperationCommand";
import {
  type DescribeClusterOperationV2CommandInput,
  type DescribeClusterOperationV2CommandOutput,
  DescribeClusterOperationV2Command,
} from "./commands/DescribeClusterOperationV2Command";
import {
  type DescribeClusterV2CommandInput,
  type DescribeClusterV2CommandOutput,
  DescribeClusterV2Command,
} from "./commands/DescribeClusterV2Command";
import {
  type DescribeConfigurationCommandInput,
  type DescribeConfigurationCommandOutput,
  DescribeConfigurationCommand,
} from "./commands/DescribeConfigurationCommand";
import {
  type DescribeConfigurationRevisionCommandInput,
  type DescribeConfigurationRevisionCommandOutput,
  DescribeConfigurationRevisionCommand,
} from "./commands/DescribeConfigurationRevisionCommand";
import {
  type DescribeReplicatorCommandInput,
  type DescribeReplicatorCommandOutput,
  DescribeReplicatorCommand,
} from "./commands/DescribeReplicatorCommand";
import {
  type DescribeTopicCommandInput,
  type DescribeTopicCommandOutput,
  DescribeTopicCommand,
} from "./commands/DescribeTopicCommand";
import {
  type DescribeTopicPartitionsCommandInput,
  type DescribeTopicPartitionsCommandOutput,
  DescribeTopicPartitionsCommand,
} from "./commands/DescribeTopicPartitionsCommand";
import {
  type DescribeVpcConnectionCommandInput,
  type DescribeVpcConnectionCommandOutput,
  DescribeVpcConnectionCommand,
} from "./commands/DescribeVpcConnectionCommand";
import {
  type GetBootstrapBrokersCommandInput,
  type GetBootstrapBrokersCommandOutput,
  GetBootstrapBrokersCommand,
} from "./commands/GetBootstrapBrokersCommand";
import {
  type GetClusterPolicyCommandInput,
  type GetClusterPolicyCommandOutput,
  GetClusterPolicyCommand,
} from "./commands/GetClusterPolicyCommand";
import {
  type GetCompatibleKafkaVersionsCommandInput,
  type GetCompatibleKafkaVersionsCommandOutput,
  GetCompatibleKafkaVersionsCommand,
} from "./commands/GetCompatibleKafkaVersionsCommand";
import {
  type ListChannelsCommandInput,
  type ListChannelsCommandOutput,
  ListChannelsCommand,
} from "./commands/ListChannelsCommand";
import {
  type ListClientVpcConnectionsCommandInput,
  type ListClientVpcConnectionsCommandOutput,
  ListClientVpcConnectionsCommand,
} from "./commands/ListClientVpcConnectionsCommand";
import {
  type ListClusterOperationsCommandInput,
  type ListClusterOperationsCommandOutput,
  ListClusterOperationsCommand,
} from "./commands/ListClusterOperationsCommand";
import {
  type ListClusterOperationsV2CommandInput,
  type ListClusterOperationsV2CommandOutput,
  ListClusterOperationsV2Command,
} from "./commands/ListClusterOperationsV2Command";
import {
  type ListClustersCommandInput,
  type ListClustersCommandOutput,
  ListClustersCommand,
} from "./commands/ListClustersCommand";
import {
  type ListClustersV2CommandInput,
  type ListClustersV2CommandOutput,
  ListClustersV2Command,
} from "./commands/ListClustersV2Command";
import {
  type ListConfigurationRevisionsCommandInput,
  type ListConfigurationRevisionsCommandOutput,
  ListConfigurationRevisionsCommand,
} from "./commands/ListConfigurationRevisionsCommand";
import {
  type ListConfigurationsCommandInput,
  type ListConfigurationsCommandOutput,
  ListConfigurationsCommand,
} from "./commands/ListConfigurationsCommand";
import {
  type ListKafkaVersionsCommandInput,
  type ListKafkaVersionsCommandOutput,
  ListKafkaVersionsCommand,
} from "./commands/ListKafkaVersionsCommand";
import { type ListNodesCommandInput, type ListNodesCommandOutput, ListNodesCommand } from "./commands/ListNodesCommand";
import {
  type ListReplicatorsCommandInput,
  type ListReplicatorsCommandOutput,
  ListReplicatorsCommand,
} from "./commands/ListReplicatorsCommand";
import {
  type ListScramSecretsCommandInput,
  type ListScramSecretsCommandOutput,
  ListScramSecretsCommand,
} from "./commands/ListScramSecretsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTopicsCommandInput,
  type ListTopicsCommandOutput,
  ListTopicsCommand,
} from "./commands/ListTopicsCommand";
import {
  type ListVpcConnectionsCommandInput,
  type ListVpcConnectionsCommandOutput,
  ListVpcConnectionsCommand,
} from "./commands/ListVpcConnectionsCommand";
import {
  type PutClusterPolicyCommandInput,
  type PutClusterPolicyCommandOutput,
  PutClusterPolicyCommand,
} from "./commands/PutClusterPolicyCommand";
import {
  type RebootBrokerCommandInput,
  type RebootBrokerCommandOutput,
  RebootBrokerCommand,
} from "./commands/RebootBrokerCommand";
import {
  type RejectClientVpcConnectionCommandInput,
  type RejectClientVpcConnectionCommandOutput,
  RejectClientVpcConnectionCommand,
} from "./commands/RejectClientVpcConnectionCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateBrokerCountCommandInput,
  type UpdateBrokerCountCommandOutput,
  UpdateBrokerCountCommand,
} from "./commands/UpdateBrokerCountCommand";
import {
  type UpdateBrokerStorageCommandInput,
  type UpdateBrokerStorageCommandOutput,
  UpdateBrokerStorageCommand,
} from "./commands/UpdateBrokerStorageCommand";
import {
  type UpdateBrokerTypeCommandInput,
  type UpdateBrokerTypeCommandOutput,
  UpdateBrokerTypeCommand,
} from "./commands/UpdateBrokerTypeCommand";
import {
  type UpdateChannelCommandInput,
  type UpdateChannelCommandOutput,
  UpdateChannelCommand,
} from "./commands/UpdateChannelCommand";
import {
  type UpdateClusterConfigurationCommandInput,
  type UpdateClusterConfigurationCommandOutput,
  UpdateClusterConfigurationCommand,
} from "./commands/UpdateClusterConfigurationCommand";
import {
  type UpdateClusterKafkaVersionCommandInput,
  type UpdateClusterKafkaVersionCommandOutput,
  UpdateClusterKafkaVersionCommand,
} from "./commands/UpdateClusterKafkaVersionCommand";
import {
  type UpdateConfigurationCommandInput,
  type UpdateConfigurationCommandOutput,
  UpdateConfigurationCommand,
} from "./commands/UpdateConfigurationCommand";
import {
  type UpdateConnectivityCommandInput,
  type UpdateConnectivityCommandOutput,
  UpdateConnectivityCommand,
} from "./commands/UpdateConnectivityCommand";
import {
  type UpdateMonitoringCommandInput,
  type UpdateMonitoringCommandOutput,
  UpdateMonitoringCommand,
} from "./commands/UpdateMonitoringCommand";
import {
  type UpdateRebalancingCommandInput,
  type UpdateRebalancingCommandOutput,
  UpdateRebalancingCommand,
} from "./commands/UpdateRebalancingCommand";
import {
  type UpdateReplicationInfoCommandInput,
  type UpdateReplicationInfoCommandOutput,
  UpdateReplicationInfoCommand,
} from "./commands/UpdateReplicationInfoCommand";
import {
  type UpdateSecurityCommandInput,
  type UpdateSecurityCommandOutput,
  UpdateSecurityCommand,
} from "./commands/UpdateSecurityCommand";
import {
  type UpdateStorageCommandInput,
  type UpdateStorageCommandOutput,
  UpdateStorageCommand,
} from "./commands/UpdateStorageCommand";
import {
  type UpdateTopicCommandInput,
  type UpdateTopicCommandOutput,
  UpdateTopicCommand,
} from "./commands/UpdateTopicCommand";
import { KafkaClient } from "./KafkaClient";
import { paginateDescribeTopicPartitions } from "./pagination/DescribeTopicPartitionsPaginator";
import { paginateListClientVpcConnections } from "./pagination/ListClientVpcConnectionsPaginator";
import { paginateListClusterOperations } from "./pagination/ListClusterOperationsPaginator";
import { paginateListClusterOperationsV2 } from "./pagination/ListClusterOperationsV2Paginator";
import { paginateListClusters } from "./pagination/ListClustersPaginator";
import { paginateListClustersV2 } from "./pagination/ListClustersV2Paginator";
import { paginateListConfigurationRevisions } from "./pagination/ListConfigurationRevisionsPaginator";
import { paginateListConfigurations } from "./pagination/ListConfigurationsPaginator";
import { paginateListKafkaVersions } from "./pagination/ListKafkaVersionsPaginator";
import { paginateListNodes } from "./pagination/ListNodesPaginator";
import { paginateListReplicators } from "./pagination/ListReplicatorsPaginator";
import { paginateListScramSecrets } from "./pagination/ListScramSecretsPaginator";
import { paginateListTopics } from "./pagination/ListTopicsPaginator";
import { paginateListVpcConnections } from "./pagination/ListVpcConnectionsPaginator";

const commands = {
  BatchAssociateScramSecretCommand,
  BatchDisassociateScramSecretCommand,
  CreateChannelCommand,
  CreateClusterCommand,
  CreateClusterV2Command,
  CreateConfigurationCommand,
  CreateReplicatorCommand,
  CreateTopicCommand,
  CreateVpcConnectionCommand,
  DeleteChannelCommand,
  DeleteClusterCommand,
  DeleteClusterPolicyCommand,
  DeleteConfigurationCommand,
  DeleteReplicatorCommand,
  DeleteTopicCommand,
  DeleteVpcConnectionCommand,
  DescribeChannelCommand,
  DescribeClusterCommand,
  DescribeClusterOperationCommand,
  DescribeClusterOperationV2Command,
  DescribeClusterV2Command,
  DescribeConfigurationCommand,
  DescribeConfigurationRevisionCommand,
  DescribeReplicatorCommand,
  DescribeTopicCommand,
  DescribeTopicPartitionsCommand,
  DescribeVpcConnectionCommand,
  GetBootstrapBrokersCommand,
  GetClusterPolicyCommand,
  GetCompatibleKafkaVersionsCommand,
  ListChannelsCommand,
  ListClientVpcConnectionsCommand,
  ListClusterOperationsCommand,
  ListClusterOperationsV2Command,
  ListClustersCommand,
  ListClustersV2Command,
  ListConfigurationRevisionsCommand,
  ListConfigurationsCommand,
  ListKafkaVersionsCommand,
  ListNodesCommand,
  ListReplicatorsCommand,
  ListScramSecretsCommand,
  ListTagsForResourceCommand,
  ListTopicsCommand,
  ListVpcConnectionsCommand,
  PutClusterPolicyCommand,
  RebootBrokerCommand,
  RejectClientVpcConnectionCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateBrokerCountCommand,
  UpdateBrokerStorageCommand,
  UpdateBrokerTypeCommand,
  UpdateChannelCommand,
  UpdateClusterConfigurationCommand,
  UpdateClusterKafkaVersionCommand,
  UpdateConfigurationCommand,
  UpdateConnectivityCommand,
  UpdateMonitoringCommand,
  UpdateRebalancingCommand,
  UpdateReplicationInfoCommand,
  UpdateSecurityCommand,
  UpdateStorageCommand,
  UpdateTopicCommand,
};
const paginators = {
  paginateDescribeTopicPartitions,
  paginateListClientVpcConnections,
  paginateListClusterOperations,
  paginateListClusterOperationsV2,
  paginateListClusters,
  paginateListClustersV2,
  paginateListConfigurationRevisions,
  paginateListConfigurations,
  paginateListKafkaVersions,
  paginateListNodes,
  paginateListReplicators,
  paginateListScramSecrets,
  paginateListTopics,
  paginateListVpcConnections,
};

/**
 * @public
 */
export interface KafkaRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Kafka {
  /**
   * @see {@link BatchAssociateScramSecretCommand}
   */
  batchAssociateScramSecret(
    args: BatchAssociateScramSecretCommandInput,
    options?: KafkaRequestOptions
  ): Promise<BatchAssociateScramSecretCommandOutput>;
  batchAssociateScramSecret(
    args: BatchAssociateScramSecretCommandInput,
    cb: (err: any, data?: BatchAssociateScramSecretCommandOutput) => void
  ): void;
  batchAssociateScramSecret(
    args: BatchAssociateScramSecretCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: BatchAssociateScramSecretCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDisassociateScramSecretCommand}
   */
  batchDisassociateScramSecret(
    args: BatchDisassociateScramSecretCommandInput,
    options?: KafkaRequestOptions
  ): Promise<BatchDisassociateScramSecretCommandOutput>;
  batchDisassociateScramSecret(
    args: BatchDisassociateScramSecretCommandInput,
    cb: (err: any, data?: BatchDisassociateScramSecretCommandOutput) => void
  ): void;
  batchDisassociateScramSecret(
    args: BatchDisassociateScramSecretCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: BatchDisassociateScramSecretCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChannelCommand}
   */
  createChannel(
    args: CreateChannelCommandInput,
    options?: KafkaRequestOptions
  ): Promise<CreateChannelCommandOutput>;
  createChannel(
    args: CreateChannelCommandInput,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;
  createChannel(
    args: CreateChannelCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClusterCommand}
   */
  createCluster(
    args: CreateClusterCommandInput,
    options?: KafkaRequestOptions
  ): Promise<CreateClusterCommandOutput>;
  createCluster(
    args: CreateClusterCommandInput,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;
  createCluster(
    args: CreateClusterCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClusterV2Command}
   */
  createClusterV2(
    args: CreateClusterV2CommandInput,
    options?: KafkaRequestOptions
  ): Promise<CreateClusterV2CommandOutput>;
  createClusterV2(
    args: CreateClusterV2CommandInput,
    cb: (err: any, data?: CreateClusterV2CommandOutput) => void
  ): void;
  createClusterV2(
    args: CreateClusterV2CommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: CreateClusterV2CommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConfigurationCommand}
   */
  createConfiguration(
    args: CreateConfigurationCommandInput,
    options?: KafkaRequestOptions
  ): Promise<CreateConfigurationCommandOutput>;
  createConfiguration(
    args: CreateConfigurationCommandInput,
    cb: (err: any, data?: CreateConfigurationCommandOutput) => void
  ): void;
  createConfiguration(
    args: CreateConfigurationCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: CreateConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReplicatorCommand}
   */
  createReplicator(
    args: CreateReplicatorCommandInput,
    options?: KafkaRequestOptions
  ): Promise<CreateReplicatorCommandOutput>;
  createReplicator(
    args: CreateReplicatorCommandInput,
    cb: (err: any, data?: CreateReplicatorCommandOutput) => void
  ): void;
  createReplicator(
    args: CreateReplicatorCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: CreateReplicatorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTopicCommand}
   */
  createTopic(
    args: CreateTopicCommandInput,
    options?: KafkaRequestOptions
  ): Promise<CreateTopicCommandOutput>;
  createTopic(
    args: CreateTopicCommandInput,
    cb: (err: any, data?: CreateTopicCommandOutput) => void
  ): void;
  createTopic(
    args: CreateTopicCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: CreateTopicCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVpcConnectionCommand}
   */
  createVpcConnection(
    args: CreateVpcConnectionCommandInput,
    options?: KafkaRequestOptions
  ): Promise<CreateVpcConnectionCommandOutput>;
  createVpcConnection(
    args: CreateVpcConnectionCommandInput,
    cb: (err: any, data?: CreateVpcConnectionCommandOutput) => void
  ): void;
  createVpcConnection(
    args: CreateVpcConnectionCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: CreateVpcConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelCommand}
   */
  deleteChannel(
    args: DeleteChannelCommandInput,
    options?: KafkaRequestOptions
  ): Promise<DeleteChannelCommandOutput>;
  deleteChannel(
    args: DeleteChannelCommandInput,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;
  deleteChannel(
    args: DeleteChannelCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClusterCommand}
   */
  deleteCluster(
    args: DeleteClusterCommandInput,
    options?: KafkaRequestOptions
  ): Promise<DeleteClusterCommandOutput>;
  deleteCluster(
    args: DeleteClusterCommandInput,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;
  deleteCluster(
    args: DeleteClusterCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClusterPolicyCommand}
   */
  deleteClusterPolicy(
    args: DeleteClusterPolicyCommandInput,
    options?: KafkaRequestOptions
  ): Promise<DeleteClusterPolicyCommandOutput>;
  deleteClusterPolicy(
    args: DeleteClusterPolicyCommandInput,
    cb: (err: any, data?: DeleteClusterPolicyCommandOutput) => void
  ): void;
  deleteClusterPolicy(
    args: DeleteClusterPolicyCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: DeleteClusterPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfigurationCommand}
   */
  deleteConfiguration(
    args: DeleteConfigurationCommandInput,
    options?: KafkaRequestOptions
  ): Promise<DeleteConfigurationCommandOutput>;
  deleteConfiguration(
    args: DeleteConfigurationCommandInput,
    cb: (err: any, data?: DeleteConfigurationCommandOutput) => void
  ): void;
  deleteConfiguration(
    args: DeleteConfigurationCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: DeleteConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReplicatorCommand}
   */
  deleteReplicator(
    args: DeleteReplicatorCommandInput,
    options?: KafkaRequestOptions
  ): Promise<DeleteReplicatorCommandOutput>;
  deleteReplicator(
    args: DeleteReplicatorCommandInput,
    cb: (err: any, data?: DeleteReplicatorCommandOutput) => void
  ): void;
  deleteReplicator(
    args: DeleteReplicatorCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: DeleteReplicatorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTopicCommand}
   */
  deleteTopic(
    args: DeleteTopicCommandInput,
    options?: KafkaRequestOptions
  ): Promise<DeleteTopicCommandOutput>;
  deleteTopic(
    args: DeleteTopicCommandInput,
    cb: (err: any, data?: DeleteTopicCommandOutput) => void
  ): void;
  deleteTopic(
    args: DeleteTopicCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: DeleteTopicCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVpcConnectionCommand}
   */
  deleteVpcConnection(
    args: DeleteVpcConnectionCommandInput,
    options?: KafkaRequestOptions
  ): Promise<DeleteVpcConnectionCommandOutput>;
  deleteVpcConnection(
    args: DeleteVpcConnectionCommandInput,
    cb: (err: any, data?: DeleteVpcConnectionCommandOutput) => void
  ): void;
  deleteVpcConnection(
    args: DeleteVpcConnectionCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: DeleteVpcConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeChannelCommand}
   */
  describeChannel(
    args: DescribeChannelCommandInput,
    options?: KafkaRequestOptions
  ): Promise<DescribeChannelCommandOutput>;
  describeChannel(
    args: DescribeChannelCommandInput,
    cb: (err: any, data?: DescribeChannelCommandOutput) => void
  ): void;
  describeChannel(
    args: DescribeChannelCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: DescribeChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterCommand}
   */
  describeCluster(
    args: DescribeClusterCommandInput,
    options?: KafkaRequestOptions
  ): Promise<DescribeClusterCommandOutput>;
  describeCluster(
    args: DescribeClusterCommandInput,
    cb: (err: any, data?: DescribeClusterCommandOutput) => void
  ): void;
  describeCluster(
    args: DescribeClusterCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: DescribeClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterOperationCommand}
   */
  describeClusterOperation(
    args: DescribeClusterOperationCommandInput,
    options?: KafkaRequestOptions
  ): Promise<DescribeClusterOperationCommandOutput>;
  describeClusterOperation(
    args: DescribeClusterOperationCommandInput,
    cb: (err: any, data?: DescribeClusterOperationCommandOutput) => void
  ): void;
  describeClusterOperation(
    args: DescribeClusterOperationCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: DescribeClusterOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterOperationV2Command}
   */
  describeClusterOperationV2(
    args: DescribeClusterOperationV2CommandInput,
    options?: KafkaRequestOptions
  ): Promise<DescribeClusterOperationV2CommandOutput>;
  describeClusterOperationV2(
    args: DescribeClusterOperationV2CommandInput,
    cb: (err: any, data?: DescribeClusterOperationV2CommandOutput) => void
  ): void;
  describeClusterOperationV2(
    args: DescribeClusterOperationV2CommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: DescribeClusterOperationV2CommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterV2Command}
   */
  describeClusterV2(
    args: DescribeClusterV2CommandInput,
    options?: KafkaRequestOptions
  ): Promise<DescribeClusterV2CommandOutput>;
  describeClusterV2(
    args: DescribeClusterV2CommandInput,
    cb: (err: any, data?: DescribeClusterV2CommandOutput) => void
  ): void;
  describeClusterV2(
    args: DescribeClusterV2CommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: DescribeClusterV2CommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConfigurationCommand}
   */
  describeConfiguration(
    args: DescribeConfigurationCommandInput,
    options?: KafkaRequestOptions
  ): Promise<DescribeConfigurationCommandOutput>;
  describeConfiguration(
    args: DescribeConfigurationCommandInput,
    cb: (err: any, data?: DescribeConfigurationCommandOutput) => void
  ): void;
  describeConfiguration(
    args: DescribeConfigurationCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: DescribeConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConfigurationRevisionCommand}
   */
  describeConfigurationRevision(
    args: DescribeConfigurationRevisionCommandInput,
    options?: KafkaRequestOptions
  ): Promise<DescribeConfigurationRevisionCommandOutput>;
  describeConfigurationRevision(
    args: DescribeConfigurationRevisionCommandInput,
    cb: (err: any, data?: DescribeConfigurationRevisionCommandOutput) => void
  ): void;
  describeConfigurationRevision(
    args: DescribeConfigurationRevisionCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: DescribeConfigurationRevisionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReplicatorCommand}
   */
  describeReplicator(
    args: DescribeReplicatorCommandInput,
    options?: KafkaRequestOptions
  ): Promise<DescribeReplicatorCommandOutput>;
  describeReplicator(
    args: DescribeReplicatorCommandInput,
    cb: (err: any, data?: DescribeReplicatorCommandOutput) => void
  ): void;
  describeReplicator(
    args: DescribeReplicatorCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: DescribeReplicatorCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTopicCommand}
   */
  describeTopic(
    args: DescribeTopicCommandInput,
    options?: KafkaRequestOptions
  ): Promise<DescribeTopicCommandOutput>;
  describeTopic(
    args: DescribeTopicCommandInput,
    cb: (err: any, data?: DescribeTopicCommandOutput) => void
  ): void;
  describeTopic(
    args: DescribeTopicCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: DescribeTopicCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTopicPartitionsCommand}
   */
  describeTopicPartitions(
    args: DescribeTopicPartitionsCommandInput,
    options?: KafkaRequestOptions
  ): Promise<DescribeTopicPartitionsCommandOutput>;
  describeTopicPartitions(
    args: DescribeTopicPartitionsCommandInput,
    cb: (err: any, data?: DescribeTopicPartitionsCommandOutput) => void
  ): void;
  describeTopicPartitions(
    args: DescribeTopicPartitionsCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: DescribeTopicPartitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVpcConnectionCommand}
   */
  describeVpcConnection(
    args: DescribeVpcConnectionCommandInput,
    options?: KafkaRequestOptions
  ): Promise<DescribeVpcConnectionCommandOutput>;
  describeVpcConnection(
    args: DescribeVpcConnectionCommandInput,
    cb: (err: any, data?: DescribeVpcConnectionCommandOutput) => void
  ): void;
  describeVpcConnection(
    args: DescribeVpcConnectionCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: DescribeVpcConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBootstrapBrokersCommand}
   */
  getBootstrapBrokers(
    args: GetBootstrapBrokersCommandInput,
    options?: KafkaRequestOptions
  ): Promise<GetBootstrapBrokersCommandOutput>;
  getBootstrapBrokers(
    args: GetBootstrapBrokersCommandInput,
    cb: (err: any, data?: GetBootstrapBrokersCommandOutput) => void
  ): void;
  getBootstrapBrokers(
    args: GetBootstrapBrokersCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: GetBootstrapBrokersCommandOutput) => void
  ): void;

  /**
   * @see {@link GetClusterPolicyCommand}
   */
  getClusterPolicy(
    args: GetClusterPolicyCommandInput,
    options?: KafkaRequestOptions
  ): Promise<GetClusterPolicyCommandOutput>;
  getClusterPolicy(
    args: GetClusterPolicyCommandInput,
    cb: (err: any, data?: GetClusterPolicyCommandOutput) => void
  ): void;
  getClusterPolicy(
    args: GetClusterPolicyCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: GetClusterPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCompatibleKafkaVersionsCommand}
   */
  getCompatibleKafkaVersions(): Promise<GetCompatibleKafkaVersionsCommandOutput>;
  getCompatibleKafkaVersions(
    args: GetCompatibleKafkaVersionsCommandInput,
    options?: KafkaRequestOptions
  ): Promise<GetCompatibleKafkaVersionsCommandOutput>;
  getCompatibleKafkaVersions(
    args: GetCompatibleKafkaVersionsCommandInput,
    cb: (err: any, data?: GetCompatibleKafkaVersionsCommandOutput) => void
  ): void;
  getCompatibleKafkaVersions(
    args: GetCompatibleKafkaVersionsCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: GetCompatibleKafkaVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelsCommand}
   */
  listChannels(
    args: ListChannelsCommandInput,
    options?: KafkaRequestOptions
  ): Promise<ListChannelsCommandOutput>;
  listChannels(
    args: ListChannelsCommandInput,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;
  listChannels(
    args: ListChannelsCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClientVpcConnectionsCommand}
   */
  listClientVpcConnections(
    args: ListClientVpcConnectionsCommandInput,
    options?: KafkaRequestOptions
  ): Promise<ListClientVpcConnectionsCommandOutput>;
  listClientVpcConnections(
    args: ListClientVpcConnectionsCommandInput,
    cb: (err: any, data?: ListClientVpcConnectionsCommandOutput) => void
  ): void;
  listClientVpcConnections(
    args: ListClientVpcConnectionsCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: ListClientVpcConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClusterOperationsCommand}
   */
  listClusterOperations(
    args: ListClusterOperationsCommandInput,
    options?: KafkaRequestOptions
  ): Promise<ListClusterOperationsCommandOutput>;
  listClusterOperations(
    args: ListClusterOperationsCommandInput,
    cb: (err: any, data?: ListClusterOperationsCommandOutput) => void
  ): void;
  listClusterOperations(
    args: ListClusterOperationsCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: ListClusterOperationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClusterOperationsV2Command}
   */
  listClusterOperationsV2(
    args: ListClusterOperationsV2CommandInput,
    options?: KafkaRequestOptions
  ): Promise<ListClusterOperationsV2CommandOutput>;
  listClusterOperationsV2(
    args: ListClusterOperationsV2CommandInput,
    cb: (err: any, data?: ListClusterOperationsV2CommandOutput) => void
  ): void;
  listClusterOperationsV2(
    args: ListClusterOperationsV2CommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: ListClusterOperationsV2CommandOutput) => void
  ): void;

  /**
   * @see {@link ListClustersCommand}
   */
  listClusters(): Promise<ListClustersCommandOutput>;
  listClusters(
    args: ListClustersCommandInput,
    options?: KafkaRequestOptions
  ): Promise<ListClustersCommandOutput>;
  listClusters(
    args: ListClustersCommandInput,
    cb: (err: any, data?: ListClustersCommandOutput) => void
  ): void;
  listClusters(
    args: ListClustersCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: ListClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClustersV2Command}
   */
  listClustersV2(): Promise<ListClustersV2CommandOutput>;
  listClustersV2(
    args: ListClustersV2CommandInput,
    options?: KafkaRequestOptions
  ): Promise<ListClustersV2CommandOutput>;
  listClustersV2(
    args: ListClustersV2CommandInput,
    cb: (err: any, data?: ListClustersV2CommandOutput) => void
  ): void;
  listClustersV2(
    args: ListClustersV2CommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: ListClustersV2CommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfigurationRevisionsCommand}
   */
  listConfigurationRevisions(
    args: ListConfigurationRevisionsCommandInput,
    options?: KafkaRequestOptions
  ): Promise<ListConfigurationRevisionsCommandOutput>;
  listConfigurationRevisions(
    args: ListConfigurationRevisionsCommandInput,
    cb: (err: any, data?: ListConfigurationRevisionsCommandOutput) => void
  ): void;
  listConfigurationRevisions(
    args: ListConfigurationRevisionsCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: ListConfigurationRevisionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfigurationsCommand}
   */
  listConfigurations(): Promise<ListConfigurationsCommandOutput>;
  listConfigurations(
    args: ListConfigurationsCommandInput,
    options?: KafkaRequestOptions
  ): Promise<ListConfigurationsCommandOutput>;
  listConfigurations(
    args: ListConfigurationsCommandInput,
    cb: (err: any, data?: ListConfigurationsCommandOutput) => void
  ): void;
  listConfigurations(
    args: ListConfigurationsCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: ListConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKafkaVersionsCommand}
   */
  listKafkaVersions(): Promise<ListKafkaVersionsCommandOutput>;
  listKafkaVersions(
    args: ListKafkaVersionsCommandInput,
    options?: KafkaRequestOptions
  ): Promise<ListKafkaVersionsCommandOutput>;
  listKafkaVersions(
    args: ListKafkaVersionsCommandInput,
    cb: (err: any, data?: ListKafkaVersionsCommandOutput) => void
  ): void;
  listKafkaVersions(
    args: ListKafkaVersionsCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: ListKafkaVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNodesCommand}
   */
  listNodes(
    args: ListNodesCommandInput,
    options?: KafkaRequestOptions
  ): Promise<ListNodesCommandOutput>;
  listNodes(
    args: ListNodesCommandInput,
    cb: (err: any, data?: ListNodesCommandOutput) => void
  ): void;
  listNodes(
    args: ListNodesCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: ListNodesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReplicatorsCommand}
   */
  listReplicators(): Promise<ListReplicatorsCommandOutput>;
  listReplicators(
    args: ListReplicatorsCommandInput,
    options?: KafkaRequestOptions
  ): Promise<ListReplicatorsCommandOutput>;
  listReplicators(
    args: ListReplicatorsCommandInput,
    cb: (err: any, data?: ListReplicatorsCommandOutput) => void
  ): void;
  listReplicators(
    args: ListReplicatorsCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: ListReplicatorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListScramSecretsCommand}
   */
  listScramSecrets(
    args: ListScramSecretsCommandInput,
    options?: KafkaRequestOptions
  ): Promise<ListScramSecretsCommandOutput>;
  listScramSecrets(
    args: ListScramSecretsCommandInput,
    cb: (err: any, data?: ListScramSecretsCommandOutput) => void
  ): void;
  listScramSecrets(
    args: ListScramSecretsCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: ListScramSecretsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: KafkaRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTopicsCommand}
   */
  listTopics(
    args: ListTopicsCommandInput,
    options?: KafkaRequestOptions
  ): Promise<ListTopicsCommandOutput>;
  listTopics(
    args: ListTopicsCommandInput,
    cb: (err: any, data?: ListTopicsCommandOutput) => void
  ): void;
  listTopics(
    args: ListTopicsCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: ListTopicsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVpcConnectionsCommand}
   */
  listVpcConnections(): Promise<ListVpcConnectionsCommandOutput>;
  listVpcConnections(
    args: ListVpcConnectionsCommandInput,
    options?: KafkaRequestOptions
  ): Promise<ListVpcConnectionsCommandOutput>;
  listVpcConnections(
    args: ListVpcConnectionsCommandInput,
    cb: (err: any, data?: ListVpcConnectionsCommandOutput) => void
  ): void;
  listVpcConnections(
    args: ListVpcConnectionsCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: ListVpcConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutClusterPolicyCommand}
   */
  putClusterPolicy(
    args: PutClusterPolicyCommandInput,
    options?: KafkaRequestOptions
  ): Promise<PutClusterPolicyCommandOutput>;
  putClusterPolicy(
    args: PutClusterPolicyCommandInput,
    cb: (err: any, data?: PutClusterPolicyCommandOutput) => void
  ): void;
  putClusterPolicy(
    args: PutClusterPolicyCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: PutClusterPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RebootBrokerCommand}
   */
  rebootBroker(
    args: RebootBrokerCommandInput,
    options?: KafkaRequestOptions
  ): Promise<RebootBrokerCommandOutput>;
  rebootBroker(
    args: RebootBrokerCommandInput,
    cb: (err: any, data?: RebootBrokerCommandOutput) => void
  ): void;
  rebootBroker(
    args: RebootBrokerCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: RebootBrokerCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectClientVpcConnectionCommand}
   */
  rejectClientVpcConnection(
    args: RejectClientVpcConnectionCommandInput,
    options?: KafkaRequestOptions
  ): Promise<RejectClientVpcConnectionCommandOutput>;
  rejectClientVpcConnection(
    args: RejectClientVpcConnectionCommandInput,
    cb: (err: any, data?: RejectClientVpcConnectionCommandOutput) => void
  ): void;
  rejectClientVpcConnection(
    args: RejectClientVpcConnectionCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: RejectClientVpcConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: KafkaRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: KafkaRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBrokerCountCommand}
   */
  updateBrokerCount(
    args: UpdateBrokerCountCommandInput,
    options?: KafkaRequestOptions
  ): Promise<UpdateBrokerCountCommandOutput>;
  updateBrokerCount(
    args: UpdateBrokerCountCommandInput,
    cb: (err: any, data?: UpdateBrokerCountCommandOutput) => void
  ): void;
  updateBrokerCount(
    args: UpdateBrokerCountCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: UpdateBrokerCountCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBrokerStorageCommand}
   */
  updateBrokerStorage(
    args: UpdateBrokerStorageCommandInput,
    options?: KafkaRequestOptions
  ): Promise<UpdateBrokerStorageCommandOutput>;
  updateBrokerStorage(
    args: UpdateBrokerStorageCommandInput,
    cb: (err: any, data?: UpdateBrokerStorageCommandOutput) => void
  ): void;
  updateBrokerStorage(
    args: UpdateBrokerStorageCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: UpdateBrokerStorageCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBrokerTypeCommand}
   */
  updateBrokerType(
    args: UpdateBrokerTypeCommandInput,
    options?: KafkaRequestOptions
  ): Promise<UpdateBrokerTypeCommandOutput>;
  updateBrokerType(
    args: UpdateBrokerTypeCommandInput,
    cb: (err: any, data?: UpdateBrokerTypeCommandOutput) => void
  ): void;
  updateBrokerType(
    args: UpdateBrokerTypeCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: UpdateBrokerTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateChannelCommand}
   */
  updateChannel(
    args: UpdateChannelCommandInput,
    options?: KafkaRequestOptions
  ): Promise<UpdateChannelCommandOutput>;
  updateChannel(
    args: UpdateChannelCommandInput,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;
  updateChannel(
    args: UpdateChannelCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateClusterConfigurationCommand}
   */
  updateClusterConfiguration(
    args: UpdateClusterConfigurationCommandInput,
    options?: KafkaRequestOptions
  ): Promise<UpdateClusterConfigurationCommandOutput>;
  updateClusterConfiguration(
    args: UpdateClusterConfigurationCommandInput,
    cb: (err: any, data?: UpdateClusterConfigurationCommandOutput) => void
  ): void;
  updateClusterConfiguration(
    args: UpdateClusterConfigurationCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: UpdateClusterConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateClusterKafkaVersionCommand}
   */
  updateClusterKafkaVersion(
    args: UpdateClusterKafkaVersionCommandInput,
    options?: KafkaRequestOptions
  ): Promise<UpdateClusterKafkaVersionCommandOutput>;
  updateClusterKafkaVersion(
    args: UpdateClusterKafkaVersionCommandInput,
    cb: (err: any, data?: UpdateClusterKafkaVersionCommandOutput) => void
  ): void;
  updateClusterKafkaVersion(
    args: UpdateClusterKafkaVersionCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: UpdateClusterKafkaVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConfigurationCommand}
   */
  updateConfiguration(
    args: UpdateConfigurationCommandInput,
    options?: KafkaRequestOptions
  ): Promise<UpdateConfigurationCommandOutput>;
  updateConfiguration(
    args: UpdateConfigurationCommandInput,
    cb: (err: any, data?: UpdateConfigurationCommandOutput) => void
  ): void;
  updateConfiguration(
    args: UpdateConfigurationCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: UpdateConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConnectivityCommand}
   */
  updateConnectivity(
    args: UpdateConnectivityCommandInput,
    options?: KafkaRequestOptions
  ): Promise<UpdateConnectivityCommandOutput>;
  updateConnectivity(
    args: UpdateConnectivityCommandInput,
    cb: (err: any, data?: UpdateConnectivityCommandOutput) => void
  ): void;
  updateConnectivity(
    args: UpdateConnectivityCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: UpdateConnectivityCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMonitoringCommand}
   */
  updateMonitoring(
    args: UpdateMonitoringCommandInput,
    options?: KafkaRequestOptions
  ): Promise<UpdateMonitoringCommandOutput>;
  updateMonitoring(
    args: UpdateMonitoringCommandInput,
    cb: (err: any, data?: UpdateMonitoringCommandOutput) => void
  ): void;
  updateMonitoring(
    args: UpdateMonitoringCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: UpdateMonitoringCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRebalancingCommand}
   */
  updateRebalancing(
    args: UpdateRebalancingCommandInput,
    options?: KafkaRequestOptions
  ): Promise<UpdateRebalancingCommandOutput>;
  updateRebalancing(
    args: UpdateRebalancingCommandInput,
    cb: (err: any, data?: UpdateRebalancingCommandOutput) => void
  ): void;
  updateRebalancing(
    args: UpdateRebalancingCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: UpdateRebalancingCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateReplicationInfoCommand}
   */
  updateReplicationInfo(
    args: UpdateReplicationInfoCommandInput,
    options?: KafkaRequestOptions
  ): Promise<UpdateReplicationInfoCommandOutput>;
  updateReplicationInfo(
    args: UpdateReplicationInfoCommandInput,
    cb: (err: any, data?: UpdateReplicationInfoCommandOutput) => void
  ): void;
  updateReplicationInfo(
    args: UpdateReplicationInfoCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: UpdateReplicationInfoCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSecurityCommand}
   */
  updateSecurity(
    args: UpdateSecurityCommandInput,
    options?: KafkaRequestOptions
  ): Promise<UpdateSecurityCommandOutput>;
  updateSecurity(
    args: UpdateSecurityCommandInput,
    cb: (err: any, data?: UpdateSecurityCommandOutput) => void
  ): void;
  updateSecurity(
    args: UpdateSecurityCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: UpdateSecurityCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStorageCommand}
   */
  updateStorage(
    args: UpdateStorageCommandInput,
    options?: KafkaRequestOptions
  ): Promise<UpdateStorageCommandOutput>;
  updateStorage(
    args: UpdateStorageCommandInput,
    cb: (err: any, data?: UpdateStorageCommandOutput) => void
  ): void;
  updateStorage(
    args: UpdateStorageCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: UpdateStorageCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTopicCommand}
   */
  updateTopic(
    args: UpdateTopicCommandInput,
    options?: KafkaRequestOptions
  ): Promise<UpdateTopicCommandOutput>;
  updateTopic(
    args: UpdateTopicCommandInput,
    cb: (err: any, data?: UpdateTopicCommandOutput) => void
  ): void;
  updateTopic(
    args: UpdateTopicCommandInput,
    options: KafkaRequestOptions,
    cb: (err: any, data?: UpdateTopicCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTopicPartitionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeTopicPartitionsCommandOutput}.
   */
  paginateDescribeTopicPartitions(
    args: DescribeTopicPartitionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeTopicPartitionsCommandOutput>;

  /**
   * @see {@link ListClientVpcConnectionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListClientVpcConnectionsCommandOutput}.
   */
  paginateListClientVpcConnections(
    args: ListClientVpcConnectionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListClientVpcConnectionsCommandOutput>;

  /**
   * @see {@link ListClusterOperationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListClusterOperationsCommandOutput}.
   */
  paginateListClusterOperations(
    args: ListClusterOperationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListClusterOperationsCommandOutput>;

  /**
   * @see {@link ListClusterOperationsV2Command}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListClusterOperationsV2CommandOutput}.
   */
  paginateListClusterOperationsV2(
    args: ListClusterOperationsV2CommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListClusterOperationsV2CommandOutput>;

  /**
   * @see {@link ListClustersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListClustersCommandOutput}.
   */
  paginateListClusters(
    args?: ListClustersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListClustersCommandOutput>;

  /**
   * @see {@link ListClustersV2Command}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListClustersV2CommandOutput}.
   */
  paginateListClustersV2(
    args?: ListClustersV2CommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListClustersV2CommandOutput>;

  /**
   * @see {@link ListConfigurationRevisionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListConfigurationRevisionsCommandOutput}.
   */
  paginateListConfigurationRevisions(
    args: ListConfigurationRevisionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListConfigurationRevisionsCommandOutput>;

  /**
   * @see {@link ListConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListConfigurationsCommandOutput}.
   */
  paginateListConfigurations(
    args?: ListConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListConfigurationsCommandOutput>;

  /**
   * @see {@link ListKafkaVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListKafkaVersionsCommandOutput}.
   */
  paginateListKafkaVersions(
    args?: ListKafkaVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListKafkaVersionsCommandOutput>;

  /**
   * @see {@link ListNodesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNodesCommandOutput}.
   */
  paginateListNodes(
    args: ListNodesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNodesCommandOutput>;

  /**
   * @see {@link ListReplicatorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListReplicatorsCommandOutput}.
   */
  paginateListReplicators(
    args?: ListReplicatorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListReplicatorsCommandOutput>;

  /**
   * @see {@link ListScramSecretsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListScramSecretsCommandOutput}.
   */
  paginateListScramSecrets(
    args: ListScramSecretsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListScramSecretsCommandOutput>;

  /**
   * @see {@link ListTopicsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTopicsCommandOutput}.
   */
  paginateListTopics(
    args: ListTopicsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTopicsCommandOutput>;

  /**
   * @see {@link ListVpcConnectionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListVpcConnectionsCommandOutput}.
   */
  paginateListVpcConnections(
    args?: ListVpcConnectionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListVpcConnectionsCommandOutput>;
}

/**
 * <p>The operations for managing an Amazon MSK cluster.</p>
 * @public
 */
export class Kafka extends KafkaClient implements Kafka {}
createAggregatedClient(commands, Kafka, { paginators });
