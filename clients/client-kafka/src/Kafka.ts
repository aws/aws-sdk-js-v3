// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  BatchAssociateScramSecretCommand,
  BatchAssociateScramSecretCommandInput,
  BatchAssociateScramSecretCommandOutput,
} from "./commands/BatchAssociateScramSecretCommand";
import {
  BatchDisassociateScramSecretCommand,
  BatchDisassociateScramSecretCommandInput,
  BatchDisassociateScramSecretCommandOutput,
} from "./commands/BatchDisassociateScramSecretCommand";
import {
  CreateClusterCommand,
  CreateClusterCommandInput,
  CreateClusterCommandOutput,
} from "./commands/CreateClusterCommand";
import {
  CreateClusterV2Command,
  CreateClusterV2CommandInput,
  CreateClusterV2CommandOutput,
} from "./commands/CreateClusterV2Command";
import {
  CreateConfigurationCommand,
  CreateConfigurationCommandInput,
  CreateConfigurationCommandOutput,
} from "./commands/CreateConfigurationCommand";
import {
  CreateReplicatorCommand,
  CreateReplicatorCommandInput,
  CreateReplicatorCommandOutput,
} from "./commands/CreateReplicatorCommand";
import {
  CreateVpcConnectionCommand,
  CreateVpcConnectionCommandInput,
  CreateVpcConnectionCommandOutput,
} from "./commands/CreateVpcConnectionCommand";
import {
  DeleteClusterCommand,
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput,
} from "./commands/DeleteClusterCommand";
import {
  DeleteClusterPolicyCommand,
  DeleteClusterPolicyCommandInput,
  DeleteClusterPolicyCommandOutput,
} from "./commands/DeleteClusterPolicyCommand";
import {
  DeleteConfigurationCommand,
  DeleteConfigurationCommandInput,
  DeleteConfigurationCommandOutput,
} from "./commands/DeleteConfigurationCommand";
import {
  DeleteReplicatorCommand,
  DeleteReplicatorCommandInput,
  DeleteReplicatorCommandOutput,
} from "./commands/DeleteReplicatorCommand";
import {
  DeleteVpcConnectionCommand,
  DeleteVpcConnectionCommandInput,
  DeleteVpcConnectionCommandOutput,
} from "./commands/DeleteVpcConnectionCommand";
import {
  DescribeClusterCommand,
  DescribeClusterCommandInput,
  DescribeClusterCommandOutput,
} from "./commands/DescribeClusterCommand";
import {
  DescribeClusterOperationCommand,
  DescribeClusterOperationCommandInput,
  DescribeClusterOperationCommandOutput,
} from "./commands/DescribeClusterOperationCommand";
import {
  DescribeClusterOperationV2Command,
  DescribeClusterOperationV2CommandInput,
  DescribeClusterOperationV2CommandOutput,
} from "./commands/DescribeClusterOperationV2Command";
import {
  DescribeClusterV2Command,
  DescribeClusterV2CommandInput,
  DescribeClusterV2CommandOutput,
} from "./commands/DescribeClusterV2Command";
import {
  DescribeConfigurationCommand,
  DescribeConfigurationCommandInput,
  DescribeConfigurationCommandOutput,
} from "./commands/DescribeConfigurationCommand";
import {
  DescribeConfigurationRevisionCommand,
  DescribeConfigurationRevisionCommandInput,
  DescribeConfigurationRevisionCommandOutput,
} from "./commands/DescribeConfigurationRevisionCommand";
import {
  DescribeReplicatorCommand,
  DescribeReplicatorCommandInput,
  DescribeReplicatorCommandOutput,
} from "./commands/DescribeReplicatorCommand";
import {
  DescribeVpcConnectionCommand,
  DescribeVpcConnectionCommandInput,
  DescribeVpcConnectionCommandOutput,
} from "./commands/DescribeVpcConnectionCommand";
import {
  GetBootstrapBrokersCommand,
  GetBootstrapBrokersCommandInput,
  GetBootstrapBrokersCommandOutput,
} from "./commands/GetBootstrapBrokersCommand";
import {
  GetClusterPolicyCommand,
  GetClusterPolicyCommandInput,
  GetClusterPolicyCommandOutput,
} from "./commands/GetClusterPolicyCommand";
import {
  GetCompatibleKafkaVersionsCommand,
  GetCompatibleKafkaVersionsCommandInput,
  GetCompatibleKafkaVersionsCommandOutput,
} from "./commands/GetCompatibleKafkaVersionsCommand";
import {
  ListClientVpcConnectionsCommand,
  ListClientVpcConnectionsCommandInput,
  ListClientVpcConnectionsCommandOutput,
} from "./commands/ListClientVpcConnectionsCommand";
import {
  ListClusterOperationsCommand,
  ListClusterOperationsCommandInput,
  ListClusterOperationsCommandOutput,
} from "./commands/ListClusterOperationsCommand";
import {
  ListClusterOperationsV2Command,
  ListClusterOperationsV2CommandInput,
  ListClusterOperationsV2CommandOutput,
} from "./commands/ListClusterOperationsV2Command";
import {
  ListClustersCommand,
  ListClustersCommandInput,
  ListClustersCommandOutput,
} from "./commands/ListClustersCommand";
import {
  ListClustersV2Command,
  ListClustersV2CommandInput,
  ListClustersV2CommandOutput,
} from "./commands/ListClustersV2Command";
import {
  ListConfigurationRevisionsCommand,
  ListConfigurationRevisionsCommandInput,
  ListConfigurationRevisionsCommandOutput,
} from "./commands/ListConfigurationRevisionsCommand";
import {
  ListConfigurationsCommand,
  ListConfigurationsCommandInput,
  ListConfigurationsCommandOutput,
} from "./commands/ListConfigurationsCommand";
import {
  ListKafkaVersionsCommand,
  ListKafkaVersionsCommandInput,
  ListKafkaVersionsCommandOutput,
} from "./commands/ListKafkaVersionsCommand";
import { ListNodesCommand, ListNodesCommandInput, ListNodesCommandOutput } from "./commands/ListNodesCommand";
import {
  ListReplicatorsCommand,
  ListReplicatorsCommandInput,
  ListReplicatorsCommandOutput,
} from "./commands/ListReplicatorsCommand";
import {
  ListScramSecretsCommand,
  ListScramSecretsCommandInput,
  ListScramSecretsCommandOutput,
} from "./commands/ListScramSecretsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListVpcConnectionsCommand,
  ListVpcConnectionsCommandInput,
  ListVpcConnectionsCommandOutput,
} from "./commands/ListVpcConnectionsCommand";
import {
  PutClusterPolicyCommand,
  PutClusterPolicyCommandInput,
  PutClusterPolicyCommandOutput,
} from "./commands/PutClusterPolicyCommand";
import {
  RebootBrokerCommand,
  RebootBrokerCommandInput,
  RebootBrokerCommandOutput,
} from "./commands/RebootBrokerCommand";
import {
  RejectClientVpcConnectionCommand,
  RejectClientVpcConnectionCommandInput,
  RejectClientVpcConnectionCommandOutput,
} from "./commands/RejectClientVpcConnectionCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateBrokerCountCommand,
  UpdateBrokerCountCommandInput,
  UpdateBrokerCountCommandOutput,
} from "./commands/UpdateBrokerCountCommand";
import {
  UpdateBrokerStorageCommand,
  UpdateBrokerStorageCommandInput,
  UpdateBrokerStorageCommandOutput,
} from "./commands/UpdateBrokerStorageCommand";
import {
  UpdateBrokerTypeCommand,
  UpdateBrokerTypeCommandInput,
  UpdateBrokerTypeCommandOutput,
} from "./commands/UpdateBrokerTypeCommand";
import {
  UpdateClusterConfigurationCommand,
  UpdateClusterConfigurationCommandInput,
  UpdateClusterConfigurationCommandOutput,
} from "./commands/UpdateClusterConfigurationCommand";
import {
  UpdateClusterKafkaVersionCommand,
  UpdateClusterKafkaVersionCommandInput,
  UpdateClusterKafkaVersionCommandOutput,
} from "./commands/UpdateClusterKafkaVersionCommand";
import {
  UpdateConfigurationCommand,
  UpdateConfigurationCommandInput,
  UpdateConfigurationCommandOutput,
} from "./commands/UpdateConfigurationCommand";
import {
  UpdateConnectivityCommand,
  UpdateConnectivityCommandInput,
  UpdateConnectivityCommandOutput,
} from "./commands/UpdateConnectivityCommand";
import {
  UpdateMonitoringCommand,
  UpdateMonitoringCommandInput,
  UpdateMonitoringCommandOutput,
} from "./commands/UpdateMonitoringCommand";
import {
  UpdateReplicationInfoCommand,
  UpdateReplicationInfoCommandInput,
  UpdateReplicationInfoCommandOutput,
} from "./commands/UpdateReplicationInfoCommand";
import {
  UpdateSecurityCommand,
  UpdateSecurityCommandInput,
  UpdateSecurityCommandOutput,
} from "./commands/UpdateSecurityCommand";
import {
  UpdateStorageCommand,
  UpdateStorageCommandInput,
  UpdateStorageCommandOutput,
} from "./commands/UpdateStorageCommand";
import { KafkaClient, KafkaClientConfig } from "./KafkaClient";

const commands = {
  BatchAssociateScramSecretCommand,
  BatchDisassociateScramSecretCommand,
  CreateClusterCommand,
  CreateClusterV2Command,
  CreateConfigurationCommand,
  CreateReplicatorCommand,
  CreateVpcConnectionCommand,
  DeleteClusterCommand,
  DeleteClusterPolicyCommand,
  DeleteConfigurationCommand,
  DeleteReplicatorCommand,
  DeleteVpcConnectionCommand,
  DescribeClusterCommand,
  DescribeClusterOperationCommand,
  DescribeClusterOperationV2Command,
  DescribeClusterV2Command,
  DescribeConfigurationCommand,
  DescribeConfigurationRevisionCommand,
  DescribeReplicatorCommand,
  DescribeVpcConnectionCommand,
  GetBootstrapBrokersCommand,
  GetClusterPolicyCommand,
  GetCompatibleKafkaVersionsCommand,
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
  ListVpcConnectionsCommand,
  PutClusterPolicyCommand,
  RebootBrokerCommand,
  RejectClientVpcConnectionCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateBrokerCountCommand,
  UpdateBrokerStorageCommand,
  UpdateBrokerTypeCommand,
  UpdateClusterConfigurationCommand,
  UpdateClusterKafkaVersionCommand,
  UpdateConfigurationCommand,
  UpdateConnectivityCommand,
  UpdateMonitoringCommand,
  UpdateReplicationInfoCommand,
  UpdateSecurityCommand,
  UpdateStorageCommand,
};

export interface Kafka {
  /**
   * @see {@link BatchAssociateScramSecretCommand}
   */
  batchAssociateScramSecret(
    args: BatchAssociateScramSecretCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchAssociateScramSecretCommandOutput>;
  batchAssociateScramSecret(
    args: BatchAssociateScramSecretCommandInput,
    cb: (err: any, data?: BatchAssociateScramSecretCommandOutput) => void
  ): void;
  batchAssociateScramSecret(
    args: BatchAssociateScramSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchAssociateScramSecretCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDisassociateScramSecretCommand}
   */
  batchDisassociateScramSecret(
    args: BatchDisassociateScramSecretCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDisassociateScramSecretCommandOutput>;
  batchDisassociateScramSecret(
    args: BatchDisassociateScramSecretCommandInput,
    cb: (err: any, data?: BatchDisassociateScramSecretCommandOutput) => void
  ): void;
  batchDisassociateScramSecret(
    args: BatchDisassociateScramSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDisassociateScramSecretCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClusterCommand}
   */
  createCluster(args: CreateClusterCommandInput, options?: __HttpHandlerOptions): Promise<CreateClusterCommandOutput>;
  createCluster(args: CreateClusterCommandInput, cb: (err: any, data?: CreateClusterCommandOutput) => void): void;
  createCluster(
    args: CreateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClusterV2Command}
   */
  createClusterV2(
    args: CreateClusterV2CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClusterV2CommandOutput>;
  createClusterV2(args: CreateClusterV2CommandInput, cb: (err: any, data?: CreateClusterV2CommandOutput) => void): void;
  createClusterV2(
    args: CreateClusterV2CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterV2CommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConfigurationCommand}
   */
  createConfiguration(
    args: CreateConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfigurationCommandOutput>;
  createConfiguration(
    args: CreateConfigurationCommandInput,
    cb: (err: any, data?: CreateConfigurationCommandOutput) => void
  ): void;
  createConfiguration(
    args: CreateConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReplicatorCommand}
   */
  createReplicator(
    args: CreateReplicatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReplicatorCommandOutput>;
  createReplicator(
    args: CreateReplicatorCommandInput,
    cb: (err: any, data?: CreateReplicatorCommandOutput) => void
  ): void;
  createReplicator(
    args: CreateReplicatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReplicatorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVpcConnectionCommand}
   */
  createVpcConnection(
    args: CreateVpcConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpcConnectionCommandOutput>;
  createVpcConnection(
    args: CreateVpcConnectionCommandInput,
    cb: (err: any, data?: CreateVpcConnectionCommandOutput) => void
  ): void;
  createVpcConnection(
    args: CreateVpcConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClusterCommand}
   */
  deleteCluster(args: DeleteClusterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteClusterCommandOutput>;
  deleteCluster(args: DeleteClusterCommandInput, cb: (err: any, data?: DeleteClusterCommandOutput) => void): void;
  deleteCluster(
    args: DeleteClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClusterPolicyCommand}
   */
  deleteClusterPolicy(
    args: DeleteClusterPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClusterPolicyCommandOutput>;
  deleteClusterPolicy(
    args: DeleteClusterPolicyCommandInput,
    cb: (err: any, data?: DeleteClusterPolicyCommandOutput) => void
  ): void;
  deleteClusterPolicy(
    args: DeleteClusterPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClusterPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfigurationCommand}
   */
  deleteConfiguration(
    args: DeleteConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigurationCommandOutput>;
  deleteConfiguration(
    args: DeleteConfigurationCommandInput,
    cb: (err: any, data?: DeleteConfigurationCommandOutput) => void
  ): void;
  deleteConfiguration(
    args: DeleteConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReplicatorCommand}
   */
  deleteReplicator(
    args: DeleteReplicatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReplicatorCommandOutput>;
  deleteReplicator(
    args: DeleteReplicatorCommandInput,
    cb: (err: any, data?: DeleteReplicatorCommandOutput) => void
  ): void;
  deleteReplicator(
    args: DeleteReplicatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReplicatorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVpcConnectionCommand}
   */
  deleteVpcConnection(
    args: DeleteVpcConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpcConnectionCommandOutput>;
  deleteVpcConnection(
    args: DeleteVpcConnectionCommandInput,
    cb: (err: any, data?: DeleteVpcConnectionCommandOutput) => void
  ): void;
  deleteVpcConnection(
    args: DeleteVpcConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterCommand}
   */
  describeCluster(
    args: DescribeClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterCommandOutput>;
  describeCluster(args: DescribeClusterCommandInput, cb: (err: any, data?: DescribeClusterCommandOutput) => void): void;
  describeCluster(
    args: DescribeClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterOperationCommand}
   */
  describeClusterOperation(
    args: DescribeClusterOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterOperationCommandOutput>;
  describeClusterOperation(
    args: DescribeClusterOperationCommandInput,
    cb: (err: any, data?: DescribeClusterOperationCommandOutput) => void
  ): void;
  describeClusterOperation(
    args: DescribeClusterOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterOperationV2Command}
   */
  describeClusterOperationV2(
    args: DescribeClusterOperationV2CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterOperationV2CommandOutput>;
  describeClusterOperationV2(
    args: DescribeClusterOperationV2CommandInput,
    cb: (err: any, data?: DescribeClusterOperationV2CommandOutput) => void
  ): void;
  describeClusterOperationV2(
    args: DescribeClusterOperationV2CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterOperationV2CommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterV2Command}
   */
  describeClusterV2(
    args: DescribeClusterV2CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterV2CommandOutput>;
  describeClusterV2(
    args: DescribeClusterV2CommandInput,
    cb: (err: any, data?: DescribeClusterV2CommandOutput) => void
  ): void;
  describeClusterV2(
    args: DescribeClusterV2CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterV2CommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConfigurationCommand}
   */
  describeConfiguration(
    args: DescribeConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigurationCommandOutput>;
  describeConfiguration(
    args: DescribeConfigurationCommandInput,
    cb: (err: any, data?: DescribeConfigurationCommandOutput) => void
  ): void;
  describeConfiguration(
    args: DescribeConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConfigurationRevisionCommand}
   */
  describeConfigurationRevision(
    args: DescribeConfigurationRevisionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigurationRevisionCommandOutput>;
  describeConfigurationRevision(
    args: DescribeConfigurationRevisionCommandInput,
    cb: (err: any, data?: DescribeConfigurationRevisionCommandOutput) => void
  ): void;
  describeConfigurationRevision(
    args: DescribeConfigurationRevisionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigurationRevisionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReplicatorCommand}
   */
  describeReplicator(
    args: DescribeReplicatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplicatorCommandOutput>;
  describeReplicator(
    args: DescribeReplicatorCommandInput,
    cb: (err: any, data?: DescribeReplicatorCommandOutput) => void
  ): void;
  describeReplicator(
    args: DescribeReplicatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplicatorCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVpcConnectionCommand}
   */
  describeVpcConnection(
    args: DescribeVpcConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcConnectionCommandOutput>;
  describeVpcConnection(
    args: DescribeVpcConnectionCommandInput,
    cb: (err: any, data?: DescribeVpcConnectionCommandOutput) => void
  ): void;
  describeVpcConnection(
    args: DescribeVpcConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBootstrapBrokersCommand}
   */
  getBootstrapBrokers(
    args: GetBootstrapBrokersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBootstrapBrokersCommandOutput>;
  getBootstrapBrokers(
    args: GetBootstrapBrokersCommandInput,
    cb: (err: any, data?: GetBootstrapBrokersCommandOutput) => void
  ): void;
  getBootstrapBrokers(
    args: GetBootstrapBrokersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBootstrapBrokersCommandOutput) => void
  ): void;

  /**
   * @see {@link GetClusterPolicyCommand}
   */
  getClusterPolicy(
    args: GetClusterPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetClusterPolicyCommandOutput>;
  getClusterPolicy(
    args: GetClusterPolicyCommandInput,
    cb: (err: any, data?: GetClusterPolicyCommandOutput) => void
  ): void;
  getClusterPolicy(
    args: GetClusterPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClusterPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCompatibleKafkaVersionsCommand}
   */
  getCompatibleKafkaVersions(
    args: GetCompatibleKafkaVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCompatibleKafkaVersionsCommandOutput>;
  getCompatibleKafkaVersions(
    args: GetCompatibleKafkaVersionsCommandInput,
    cb: (err: any, data?: GetCompatibleKafkaVersionsCommandOutput) => void
  ): void;
  getCompatibleKafkaVersions(
    args: GetCompatibleKafkaVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCompatibleKafkaVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClientVpcConnectionsCommand}
   */
  listClientVpcConnections(
    args: ListClientVpcConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClientVpcConnectionsCommandOutput>;
  listClientVpcConnections(
    args: ListClientVpcConnectionsCommandInput,
    cb: (err: any, data?: ListClientVpcConnectionsCommandOutput) => void
  ): void;
  listClientVpcConnections(
    args: ListClientVpcConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClientVpcConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClusterOperationsCommand}
   */
  listClusterOperations(
    args: ListClusterOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClusterOperationsCommandOutput>;
  listClusterOperations(
    args: ListClusterOperationsCommandInput,
    cb: (err: any, data?: ListClusterOperationsCommandOutput) => void
  ): void;
  listClusterOperations(
    args: ListClusterOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClusterOperationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClusterOperationsV2Command}
   */
  listClusterOperationsV2(
    args: ListClusterOperationsV2CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClusterOperationsV2CommandOutput>;
  listClusterOperationsV2(
    args: ListClusterOperationsV2CommandInput,
    cb: (err: any, data?: ListClusterOperationsV2CommandOutput) => void
  ): void;
  listClusterOperationsV2(
    args: ListClusterOperationsV2CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClusterOperationsV2CommandOutput) => void
  ): void;

  /**
   * @see {@link ListClustersCommand}
   */
  listClusters(args: ListClustersCommandInput, options?: __HttpHandlerOptions): Promise<ListClustersCommandOutput>;
  listClusters(args: ListClustersCommandInput, cb: (err: any, data?: ListClustersCommandOutput) => void): void;
  listClusters(
    args: ListClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClustersV2Command}
   */
  listClustersV2(
    args: ListClustersV2CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClustersV2CommandOutput>;
  listClustersV2(args: ListClustersV2CommandInput, cb: (err: any, data?: ListClustersV2CommandOutput) => void): void;
  listClustersV2(
    args: ListClustersV2CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClustersV2CommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfigurationRevisionsCommand}
   */
  listConfigurationRevisions(
    args: ListConfigurationRevisionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfigurationRevisionsCommandOutput>;
  listConfigurationRevisions(
    args: ListConfigurationRevisionsCommandInput,
    cb: (err: any, data?: ListConfigurationRevisionsCommandOutput) => void
  ): void;
  listConfigurationRevisions(
    args: ListConfigurationRevisionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfigurationRevisionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfigurationsCommand}
   */
  listConfigurations(
    args: ListConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfigurationsCommandOutput>;
  listConfigurations(
    args: ListConfigurationsCommandInput,
    cb: (err: any, data?: ListConfigurationsCommandOutput) => void
  ): void;
  listConfigurations(
    args: ListConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKafkaVersionsCommand}
   */
  listKafkaVersions(
    args: ListKafkaVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListKafkaVersionsCommandOutput>;
  listKafkaVersions(
    args: ListKafkaVersionsCommandInput,
    cb: (err: any, data?: ListKafkaVersionsCommandOutput) => void
  ): void;
  listKafkaVersions(
    args: ListKafkaVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKafkaVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNodesCommand}
   */
  listNodes(args: ListNodesCommandInput, options?: __HttpHandlerOptions): Promise<ListNodesCommandOutput>;
  listNodes(args: ListNodesCommandInput, cb: (err: any, data?: ListNodesCommandOutput) => void): void;
  listNodes(
    args: ListNodesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNodesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReplicatorsCommand}
   */
  listReplicators(
    args: ListReplicatorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReplicatorsCommandOutput>;
  listReplicators(args: ListReplicatorsCommandInput, cb: (err: any, data?: ListReplicatorsCommandOutput) => void): void;
  listReplicators(
    args: ListReplicatorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReplicatorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListScramSecretsCommand}
   */
  listScramSecrets(
    args: ListScramSecretsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListScramSecretsCommandOutput>;
  listScramSecrets(
    args: ListScramSecretsCommandInput,
    cb: (err: any, data?: ListScramSecretsCommandOutput) => void
  ): void;
  listScramSecrets(
    args: ListScramSecretsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListScramSecretsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVpcConnectionsCommand}
   */
  listVpcConnections(
    args: ListVpcConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVpcConnectionsCommandOutput>;
  listVpcConnections(
    args: ListVpcConnectionsCommandInput,
    cb: (err: any, data?: ListVpcConnectionsCommandOutput) => void
  ): void;
  listVpcConnections(
    args: ListVpcConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVpcConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutClusterPolicyCommand}
   */
  putClusterPolicy(
    args: PutClusterPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutClusterPolicyCommandOutput>;
  putClusterPolicy(
    args: PutClusterPolicyCommandInput,
    cb: (err: any, data?: PutClusterPolicyCommandOutput) => void
  ): void;
  putClusterPolicy(
    args: PutClusterPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutClusterPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RebootBrokerCommand}
   */
  rebootBroker(args: RebootBrokerCommandInput, options?: __HttpHandlerOptions): Promise<RebootBrokerCommandOutput>;
  rebootBroker(args: RebootBrokerCommandInput, cb: (err: any, data?: RebootBrokerCommandOutput) => void): void;
  rebootBroker(
    args: RebootBrokerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootBrokerCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectClientVpcConnectionCommand}
   */
  rejectClientVpcConnection(
    args: RejectClientVpcConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectClientVpcConnectionCommandOutput>;
  rejectClientVpcConnection(
    args: RejectClientVpcConnectionCommandInput,
    cb: (err: any, data?: RejectClientVpcConnectionCommandOutput) => void
  ): void;
  rejectClientVpcConnection(
    args: RejectClientVpcConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectClientVpcConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBrokerCountCommand}
   */
  updateBrokerCount(
    args: UpdateBrokerCountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBrokerCountCommandOutput>;
  updateBrokerCount(
    args: UpdateBrokerCountCommandInput,
    cb: (err: any, data?: UpdateBrokerCountCommandOutput) => void
  ): void;
  updateBrokerCount(
    args: UpdateBrokerCountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBrokerCountCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBrokerStorageCommand}
   */
  updateBrokerStorage(
    args: UpdateBrokerStorageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBrokerStorageCommandOutput>;
  updateBrokerStorage(
    args: UpdateBrokerStorageCommandInput,
    cb: (err: any, data?: UpdateBrokerStorageCommandOutput) => void
  ): void;
  updateBrokerStorage(
    args: UpdateBrokerStorageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBrokerStorageCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBrokerTypeCommand}
   */
  updateBrokerType(
    args: UpdateBrokerTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBrokerTypeCommandOutput>;
  updateBrokerType(
    args: UpdateBrokerTypeCommandInput,
    cb: (err: any, data?: UpdateBrokerTypeCommandOutput) => void
  ): void;
  updateBrokerType(
    args: UpdateBrokerTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBrokerTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateClusterConfigurationCommand}
   */
  updateClusterConfiguration(
    args: UpdateClusterConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateClusterConfigurationCommandOutput>;
  updateClusterConfiguration(
    args: UpdateClusterConfigurationCommandInput,
    cb: (err: any, data?: UpdateClusterConfigurationCommandOutput) => void
  ): void;
  updateClusterConfiguration(
    args: UpdateClusterConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClusterConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateClusterKafkaVersionCommand}
   */
  updateClusterKafkaVersion(
    args: UpdateClusterKafkaVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateClusterKafkaVersionCommandOutput>;
  updateClusterKafkaVersion(
    args: UpdateClusterKafkaVersionCommandInput,
    cb: (err: any, data?: UpdateClusterKafkaVersionCommandOutput) => void
  ): void;
  updateClusterKafkaVersion(
    args: UpdateClusterKafkaVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClusterKafkaVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConfigurationCommand}
   */
  updateConfiguration(
    args: UpdateConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfigurationCommandOutput>;
  updateConfiguration(
    args: UpdateConfigurationCommandInput,
    cb: (err: any, data?: UpdateConfigurationCommandOutput) => void
  ): void;
  updateConfiguration(
    args: UpdateConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConnectivityCommand}
   */
  updateConnectivity(
    args: UpdateConnectivityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectivityCommandOutput>;
  updateConnectivity(
    args: UpdateConnectivityCommandInput,
    cb: (err: any, data?: UpdateConnectivityCommandOutput) => void
  ): void;
  updateConnectivity(
    args: UpdateConnectivityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectivityCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMonitoringCommand}
   */
  updateMonitoring(
    args: UpdateMonitoringCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMonitoringCommandOutput>;
  updateMonitoring(
    args: UpdateMonitoringCommandInput,
    cb: (err: any, data?: UpdateMonitoringCommandOutput) => void
  ): void;
  updateMonitoring(
    args: UpdateMonitoringCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMonitoringCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateReplicationInfoCommand}
   */
  updateReplicationInfo(
    args: UpdateReplicationInfoCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateReplicationInfoCommandOutput>;
  updateReplicationInfo(
    args: UpdateReplicationInfoCommandInput,
    cb: (err: any, data?: UpdateReplicationInfoCommandOutput) => void
  ): void;
  updateReplicationInfo(
    args: UpdateReplicationInfoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateReplicationInfoCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSecurityCommand}
   */
  updateSecurity(
    args: UpdateSecurityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSecurityCommandOutput>;
  updateSecurity(args: UpdateSecurityCommandInput, cb: (err: any, data?: UpdateSecurityCommandOutput) => void): void;
  updateSecurity(
    args: UpdateSecurityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSecurityCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStorageCommand}
   */
  updateStorage(args: UpdateStorageCommandInput, options?: __HttpHandlerOptions): Promise<UpdateStorageCommandOutput>;
  updateStorage(args: UpdateStorageCommandInput, cb: (err: any, data?: UpdateStorageCommandOutput) => void): void;
  updateStorage(
    args: UpdateStorageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStorageCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>The operations for managing an Amazon MSK cluster.</p>
 */
export class Kafka extends KafkaClient implements Kafka {}
createAggregatedClient(commands, Kafka);
