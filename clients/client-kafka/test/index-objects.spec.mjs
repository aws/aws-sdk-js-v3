import {
  BatchAssociateScramSecretCommand,
  BatchDisassociateScramSecretCommand,
  BrokerAZDistribution,
  ClientBroker,
  ClusterState,
  ClusterType,
  ConfigurationState,
  CreateClusterCommand,
  CreateClusterV2Command,
  CreateConfigurationCommand,
  CreateReplicatorCommand,
  CreateVpcConnectionCommand,
  CustomerActionStatus,
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
  DescribeTopicCommand,
  DescribeTopicPartitionsCommand,
  DescribeVpcConnectionCommand,
  EnhancedMonitoring,
  GetBootstrapBrokersCommand,
  GetClusterPolicyCommand,
  GetCompatibleKafkaVersionsCommand,
  Kafka,
  KafkaClient,
  KafkaServiceException,
  KafkaVersionStatus,
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
  NodeType,
  PutClusterPolicyCommand,
  RebalancingStatus,
  RebootBrokerCommand,
  RejectClientVpcConnectionCommand,
  ReplicationStartingPositionType,
  ReplicationTopicNameConfigurationType,
  ReplicatorState,
  StorageMode,
  TagResourceCommand,
  TargetCompressionType,
  TopicState,
  UntagResourceCommand,
  UpdateBrokerCountCommand,
  UpdateBrokerStorageCommand,
  UpdateBrokerTypeCommand,
  UpdateClusterConfigurationCommand,
  UpdateClusterKafkaVersionCommand,
  UpdateConfigurationCommand,
  UpdateConnectivityCommand,
  UpdateMonitoringCommand,
  UpdateRebalancingCommand,
  UpdateReplicationInfoCommand,
  UpdateSecurityCommand,
  UpdateStorageCommand,
  UserIdentityType,
  VpcConnectionState,
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
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KafkaClient === "function")
assert(typeof Kafka === "function")
// commands
assert(typeof BatchAssociateScramSecretCommand === "function")
assert(typeof BatchDisassociateScramSecretCommand === "function")
assert(typeof CreateClusterCommand === "function")
assert(typeof CreateClusterV2Command === "function")
assert(typeof CreateConfigurationCommand === "function")
assert(typeof CreateReplicatorCommand === "function")
assert(typeof CreateVpcConnectionCommand === "function")
assert(typeof DeleteClusterCommand === "function")
assert(typeof DeleteClusterPolicyCommand === "function")
assert(typeof DeleteConfigurationCommand === "function")
assert(typeof DeleteReplicatorCommand === "function")
assert(typeof DeleteVpcConnectionCommand === "function")
assert(typeof DescribeClusterCommand === "function")
assert(typeof DescribeClusterOperationCommand === "function")
assert(typeof DescribeClusterOperationV2Command === "function")
assert(typeof DescribeClusterV2Command === "function")
assert(typeof DescribeConfigurationCommand === "function")
assert(typeof DescribeConfigurationRevisionCommand === "function")
assert(typeof DescribeReplicatorCommand === "function")
assert(typeof DescribeTopicCommand === "function")
assert(typeof DescribeTopicPartitionsCommand === "function")
assert(typeof DescribeVpcConnectionCommand === "function")
assert(typeof GetBootstrapBrokersCommand === "function")
assert(typeof GetClusterPolicyCommand === "function")
assert(typeof GetCompatibleKafkaVersionsCommand === "function")
assert(typeof ListClientVpcConnectionsCommand === "function")
assert(typeof ListClusterOperationsCommand === "function")
assert(typeof ListClusterOperationsV2Command === "function")
assert(typeof ListClustersCommand === "function")
assert(typeof ListClustersV2Command === "function")
assert(typeof ListConfigurationRevisionsCommand === "function")
assert(typeof ListConfigurationsCommand === "function")
assert(typeof ListKafkaVersionsCommand === "function")
assert(typeof ListNodesCommand === "function")
assert(typeof ListReplicatorsCommand === "function")
assert(typeof ListScramSecretsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListTopicsCommand === "function")
assert(typeof ListVpcConnectionsCommand === "function")
assert(typeof PutClusterPolicyCommand === "function")
assert(typeof RebootBrokerCommand === "function")
assert(typeof RejectClientVpcConnectionCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateBrokerCountCommand === "function")
assert(typeof UpdateBrokerStorageCommand === "function")
assert(typeof UpdateBrokerTypeCommand === "function")
assert(typeof UpdateClusterConfigurationCommand === "function")
assert(typeof UpdateClusterKafkaVersionCommand === "function")
assert(typeof UpdateConfigurationCommand === "function")
assert(typeof UpdateConnectivityCommand === "function")
assert(typeof UpdateMonitoringCommand === "function")
assert(typeof UpdateRebalancingCommand === "function")
assert(typeof UpdateReplicationInfoCommand === "function")
assert(typeof UpdateSecurityCommand === "function")
assert(typeof UpdateStorageCommand === "function")
// enums
assert(typeof BrokerAZDistribution === "object");
assert(typeof ClientBroker === "object");
assert(typeof ClusterState === "object");
assert(typeof ClusterType === "object");
assert(typeof ConfigurationState === "object");
assert(typeof CustomerActionStatus === "object");
assert(typeof EnhancedMonitoring === "object");
assert(typeof KafkaVersionStatus === "object");
assert(typeof NodeType === "object");
assert(typeof RebalancingStatus === "object");
assert(typeof ReplicationStartingPositionType === "object");
assert(typeof ReplicationTopicNameConfigurationType === "object");
assert(typeof ReplicatorState === "object");
assert(typeof StorageMode === "object");
assert(typeof TargetCompressionType === "object");
assert(typeof TopicState === "object");
assert(typeof UserIdentityType === "object");
assert(typeof VpcConnectionState === "object");
// errors
assert(KafkaServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateDescribeTopicPartitions === "function")
assert(typeof paginateListClientVpcConnections === "function")
assert(typeof paginateListClusterOperations === "function")
assert(typeof paginateListClusterOperationsV2 === "function")
assert(typeof paginateListClusters === "function")
assert(typeof paginateListClustersV2 === "function")
assert(typeof paginateListConfigurationRevisions === "function")
assert(typeof paginateListConfigurations === "function")
assert(typeof paginateListKafkaVersions === "function")
assert(typeof paginateListNodes === "function")
assert(typeof paginateListReplicators === "function")
assert(typeof paginateListScramSecrets === "function")
assert(typeof paginateListTopics === "function")
assert(typeof paginateListVpcConnections === "function")
console.log(`Kafka index test passed.`);
