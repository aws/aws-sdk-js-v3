import {
  AmazonMskCluster$,
  BadRequestException,
  BadRequestException$,
  BatchAssociateScramSecret$,
  BatchAssociateScramSecretCommand,
  BatchAssociateScramSecretRequest$,
  BatchAssociateScramSecretResponse$,
  BatchDisassociateScramSecret$,
  BatchDisassociateScramSecretCommand,
  BatchDisassociateScramSecretRequest$,
  BatchDisassociateScramSecretResponse$,
  BrokerAZDistribution,
  BrokerCountUpdateInfo$,
  BrokerEBSVolumeInfo$,
  BrokerLogs$,
  BrokerNodeGroupInfo$,
  BrokerNodeInfo$,
  BrokerSoftwareInfo$,
  ClientAuthentication$,
  ClientBroker,
  ClientVpcConnection$,
  CloudWatchLogs$,
  Cluster$,
  ClusterInfo$,
  ClusterOperationInfo$,
  ClusterOperationStep$,
  ClusterOperationStepInfo$,
  ClusterOperationV2$,
  ClusterOperationV2Provisioned$,
  ClusterOperationV2Serverless$,
  ClusterOperationV2Summary$,
  ClusterState,
  ClusterType,
  CompatibleKafkaVersion$,
  Configuration$,
  ConfigurationInfo$,
  ConfigurationRevision$,
  ConfigurationState,
  ConflictException,
  ConflictException$,
  ConnectivityInfo$,
  ConsumerGroupReplication$,
  ConsumerGroupReplicationUpdate$,
  ControllerNodeInfo$,
  CreateCluster$,
  CreateClusterCommand,
  CreateClusterRequest$,
  CreateClusterResponse$,
  CreateClusterV2$,
  CreateClusterV2Command,
  CreateClusterV2Request$,
  CreateClusterV2Response$,
  CreateConfiguration$,
  CreateConfigurationCommand,
  CreateConfigurationRequest$,
  CreateConfigurationResponse$,
  CreateReplicator$,
  CreateReplicatorCommand,
  CreateReplicatorRequest$,
  CreateReplicatorResponse$,
  CreateVpcConnection$,
  CreateVpcConnectionCommand,
  CreateVpcConnectionRequest$,
  CreateVpcConnectionResponse$,
  CustomerActionStatus,
  DeleteCluster$,
  DeleteClusterCommand,
  DeleteClusterPolicy$,
  DeleteClusterPolicyCommand,
  DeleteClusterPolicyRequest$,
  DeleteClusterPolicyResponse$,
  DeleteClusterRequest$,
  DeleteClusterResponse$,
  DeleteConfiguration$,
  DeleteConfigurationCommand,
  DeleteConfigurationRequest$,
  DeleteConfigurationResponse$,
  DeleteReplicator$,
  DeleteReplicatorCommand,
  DeleteReplicatorRequest$,
  DeleteReplicatorResponse$,
  DeleteVpcConnection$,
  DeleteVpcConnectionCommand,
  DeleteVpcConnectionRequest$,
  DeleteVpcConnectionResponse$,
  DescribeCluster$,
  DescribeClusterCommand,
  DescribeClusterOperation$,
  DescribeClusterOperationCommand,
  DescribeClusterOperationRequest$,
  DescribeClusterOperationResponse$,
  DescribeClusterOperationV2$,
  DescribeClusterOperationV2Command,
  DescribeClusterOperationV2Request$,
  DescribeClusterOperationV2Response$,
  DescribeClusterRequest$,
  DescribeClusterResponse$,
  DescribeClusterV2$,
  DescribeClusterV2Command,
  DescribeClusterV2Request$,
  DescribeClusterV2Response$,
  DescribeConfiguration$,
  DescribeConfigurationCommand,
  DescribeConfigurationRequest$,
  DescribeConfigurationResponse$,
  DescribeConfigurationRevision$,
  DescribeConfigurationRevisionCommand,
  DescribeConfigurationRevisionRequest$,
  DescribeConfigurationRevisionResponse$,
  DescribeReplicator$,
  DescribeReplicatorCommand,
  DescribeReplicatorRequest$,
  DescribeReplicatorResponse$,
  DescribeTopic$,
  DescribeTopicCommand,
  DescribeTopicPartitions$,
  DescribeTopicPartitionsCommand,
  DescribeTopicPartitionsRequest$,
  DescribeTopicPartitionsResponse$,
  DescribeTopicRequest$,
  DescribeTopicResponse$,
  DescribeVpcConnection$,
  DescribeVpcConnectionCommand,
  DescribeVpcConnectionRequest$,
  DescribeVpcConnectionResponse$,
  EBSStorageInfo$,
  EncryptionAtRest$,
  EncryptionInfo$,
  EncryptionInTransit$,
  EnhancedMonitoring,
  ErrorInfo$,
  Firehose$,
  ForbiddenException,
  ForbiddenException$,
  GetBootstrapBrokers$,
  GetBootstrapBrokersCommand,
  GetBootstrapBrokersRequest$,
  GetBootstrapBrokersResponse$,
  GetClusterPolicy$,
  GetClusterPolicyCommand,
  GetClusterPolicyRequest$,
  GetClusterPolicyResponse$,
  GetCompatibleKafkaVersions$,
  GetCompatibleKafkaVersionsCommand,
  GetCompatibleKafkaVersionsRequest$,
  GetCompatibleKafkaVersionsResponse$,
  Iam$,
  InternalServerErrorException,
  InternalServerErrorException$,
  JmxExporter$,
  JmxExporterInfo$,
  Kafka,
  KafkaClient,
  KafkaCluster$,
  KafkaClusterClientVpcConfig$,
  KafkaClusterDescription$,
  KafkaClusterSummary$,
  KafkaServiceException,
  KafkaVersion$,
  KafkaVersionStatus,
  ListClientVpcConnections$,
  ListClientVpcConnectionsCommand,
  ListClientVpcConnectionsRequest$,
  ListClientVpcConnectionsResponse$,
  ListClusterOperations$,
  ListClusterOperationsCommand,
  ListClusterOperationsRequest$,
  ListClusterOperationsResponse$,
  ListClusterOperationsV2$,
  ListClusterOperationsV2Command,
  ListClusterOperationsV2Request$,
  ListClusterOperationsV2Response$,
  ListClusters$,
  ListClustersCommand,
  ListClustersRequest$,
  ListClustersResponse$,
  ListClustersV2$,
  ListClustersV2Command,
  ListClustersV2Request$,
  ListClustersV2Response$,
  ListConfigurationRevisions$,
  ListConfigurationRevisionsCommand,
  ListConfigurationRevisionsRequest$,
  ListConfigurationRevisionsResponse$,
  ListConfigurations$,
  ListConfigurationsCommand,
  ListConfigurationsRequest$,
  ListConfigurationsResponse$,
  ListKafkaVersions$,
  ListKafkaVersionsCommand,
  ListKafkaVersionsRequest$,
  ListKafkaVersionsResponse$,
  ListNodes$,
  ListNodesCommand,
  ListNodesRequest$,
  ListNodesResponse$,
  ListReplicators$,
  ListReplicatorsCommand,
  ListReplicatorsRequest$,
  ListReplicatorsResponse$,
  ListScramSecrets$,
  ListScramSecretsCommand,
  ListScramSecretsRequest$,
  ListScramSecretsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTopics$,
  ListTopicsCommand,
  ListTopicsRequest$,
  ListTopicsResponse$,
  ListVpcConnections$,
  ListVpcConnectionsCommand,
  ListVpcConnectionsRequest$,
  ListVpcConnectionsResponse$,
  LoggingInfo$,
  MutableClusterInfo$,
  NodeExporter$,
  NodeExporterInfo$,
  NodeInfo$,
  NodeType,
  NotFoundException,
  NotFoundException$,
  OpenMonitoring$,
  OpenMonitoringInfo$,
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
  Prometheus$,
  PrometheusInfo$,
  Provisioned$,
  ProvisionedRequest$,
  ProvisionedThroughput$,
  PublicAccess$,
  PutClusterPolicy$,
  PutClusterPolicyCommand,
  PutClusterPolicyRequest$,
  PutClusterPolicyResponse$,
  Rebalancing$,
  RebalancingStatus,
  RebootBroker$,
  RebootBrokerCommand,
  RebootBrokerRequest$,
  RebootBrokerResponse$,
  RejectClientVpcConnection$,
  RejectClientVpcConnectionCommand,
  RejectClientVpcConnectionRequest$,
  RejectClientVpcConnectionResponse$,
  ReplicationInfo$,
  ReplicationInfoDescription$,
  ReplicationInfoSummary$,
  ReplicationStartingPosition$,
  ReplicationStartingPositionType,
  ReplicationStateInfo$,
  ReplicationTopicNameConfiguration$,
  ReplicationTopicNameConfigurationType,
  ReplicatorState,
  ReplicatorSummary$,
  S3$,
  Sasl$,
  Scram$,
  Serverless$,
  ServerlessClientAuthentication$,
  ServerlessRequest$,
  ServerlessSasl$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  StateInfo$,
  StorageInfo$,
  StorageMode,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TargetCompressionType,
  Tls$,
  TooManyRequestsException,
  TooManyRequestsException$,
  TopicInfo$,
  TopicPartitionInfo$,
  TopicReplication$,
  TopicReplicationUpdate$,
  TopicState,
  Unauthenticated$,
  UnauthorizedException,
  UnauthorizedException$,
  UnprocessedScramSecret$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateBrokerCount$,
  UpdateBrokerCountCommand,
  UpdateBrokerCountRequest$,
  UpdateBrokerCountResponse$,
  UpdateBrokerStorage$,
  UpdateBrokerStorageCommand,
  UpdateBrokerStorageRequest$,
  UpdateBrokerStorageResponse$,
  UpdateBrokerType$,
  UpdateBrokerTypeCommand,
  UpdateBrokerTypeRequest$,
  UpdateBrokerTypeResponse$,
  UpdateClusterConfiguration$,
  UpdateClusterConfigurationCommand,
  UpdateClusterConfigurationRequest$,
  UpdateClusterConfigurationResponse$,
  UpdateClusterKafkaVersion$,
  UpdateClusterKafkaVersionCommand,
  UpdateClusterKafkaVersionRequest$,
  UpdateClusterKafkaVersionResponse$,
  UpdateConfiguration$,
  UpdateConfigurationCommand,
  UpdateConfigurationRequest$,
  UpdateConfigurationResponse$,
  UpdateConnectivity$,
  UpdateConnectivityCommand,
  UpdateConnectivityRequest$,
  UpdateConnectivityResponse$,
  UpdateMonitoring$,
  UpdateMonitoringCommand,
  UpdateMonitoringRequest$,
  UpdateMonitoringResponse$,
  UpdateRebalancing$,
  UpdateRebalancingCommand,
  UpdateRebalancingRequest$,
  UpdateRebalancingResponse$,
  UpdateReplicationInfo$,
  UpdateReplicationInfoCommand,
  UpdateReplicationInfoRequest$,
  UpdateReplicationInfoResponse$,
  UpdateSecurity$,
  UpdateSecurityCommand,
  UpdateSecurityRequest$,
  UpdateSecurityResponse$,
  UpdateStorage$,
  UpdateStorageCommand,
  UpdateStorageRequest$,
  UpdateStorageResponse$,
  UserIdentity$,
  UserIdentityType,
  VpcConfig$,
  VpcConnection$,
  VpcConnectionInfo$,
  VpcConnectionInfoServerless$,
  VpcConnectionState,
  VpcConnectivity$,
  VpcConnectivityClientAuthentication$,
  VpcConnectivityIam$,
  VpcConnectivitySasl$,
  VpcConnectivityScram$,
  VpcConnectivityTls$,
  ZookeeperNodeInfo$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KafkaClient === "function");
assert(typeof Kafka === "function");
// commands
assert(typeof BatchAssociateScramSecretCommand === "function");
assert(typeof BatchAssociateScramSecret$ === "object");
assert(typeof BatchDisassociateScramSecretCommand === "function");
assert(typeof BatchDisassociateScramSecret$ === "object");
assert(typeof CreateClusterCommand === "function");
assert(typeof CreateCluster$ === "object");
assert(typeof CreateClusterV2Command === "function");
assert(typeof CreateClusterV2$ === "object");
assert(typeof CreateConfigurationCommand === "function");
assert(typeof CreateConfiguration$ === "object");
assert(typeof CreateReplicatorCommand === "function");
assert(typeof CreateReplicator$ === "object");
assert(typeof CreateVpcConnectionCommand === "function");
assert(typeof CreateVpcConnection$ === "object");
assert(typeof DeleteClusterCommand === "function");
assert(typeof DeleteCluster$ === "object");
assert(typeof DeleteClusterPolicyCommand === "function");
assert(typeof DeleteClusterPolicy$ === "object");
assert(typeof DeleteConfigurationCommand === "function");
assert(typeof DeleteConfiguration$ === "object");
assert(typeof DeleteReplicatorCommand === "function");
assert(typeof DeleteReplicator$ === "object");
assert(typeof DeleteVpcConnectionCommand === "function");
assert(typeof DeleteVpcConnection$ === "object");
assert(typeof DescribeClusterCommand === "function");
assert(typeof DescribeCluster$ === "object");
assert(typeof DescribeClusterOperationCommand === "function");
assert(typeof DescribeClusterOperation$ === "object");
assert(typeof DescribeClusterOperationV2Command === "function");
assert(typeof DescribeClusterOperationV2$ === "object");
assert(typeof DescribeClusterV2Command === "function");
assert(typeof DescribeClusterV2$ === "object");
assert(typeof DescribeConfigurationCommand === "function");
assert(typeof DescribeConfiguration$ === "object");
assert(typeof DescribeConfigurationRevisionCommand === "function");
assert(typeof DescribeConfigurationRevision$ === "object");
assert(typeof DescribeReplicatorCommand === "function");
assert(typeof DescribeReplicator$ === "object");
assert(typeof DescribeTopicCommand === "function");
assert(typeof DescribeTopic$ === "object");
assert(typeof DescribeTopicPartitionsCommand === "function");
assert(typeof DescribeTopicPartitions$ === "object");
assert(typeof DescribeVpcConnectionCommand === "function");
assert(typeof DescribeVpcConnection$ === "object");
assert(typeof GetBootstrapBrokersCommand === "function");
assert(typeof GetBootstrapBrokers$ === "object");
assert(typeof GetClusterPolicyCommand === "function");
assert(typeof GetClusterPolicy$ === "object");
assert(typeof GetCompatibleKafkaVersionsCommand === "function");
assert(typeof GetCompatibleKafkaVersions$ === "object");
assert(typeof ListClientVpcConnectionsCommand === "function");
assert(typeof ListClientVpcConnections$ === "object");
assert(typeof ListClusterOperationsCommand === "function");
assert(typeof ListClusterOperations$ === "object");
assert(typeof ListClusterOperationsV2Command === "function");
assert(typeof ListClusterOperationsV2$ === "object");
assert(typeof ListClustersCommand === "function");
assert(typeof ListClusters$ === "object");
assert(typeof ListClustersV2Command === "function");
assert(typeof ListClustersV2$ === "object");
assert(typeof ListConfigurationRevisionsCommand === "function");
assert(typeof ListConfigurationRevisions$ === "object");
assert(typeof ListConfigurationsCommand === "function");
assert(typeof ListConfigurations$ === "object");
assert(typeof ListKafkaVersionsCommand === "function");
assert(typeof ListKafkaVersions$ === "object");
assert(typeof ListNodesCommand === "function");
assert(typeof ListNodes$ === "object");
assert(typeof ListReplicatorsCommand === "function");
assert(typeof ListReplicators$ === "object");
assert(typeof ListScramSecretsCommand === "function");
assert(typeof ListScramSecrets$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTopicsCommand === "function");
assert(typeof ListTopics$ === "object");
assert(typeof ListVpcConnectionsCommand === "function");
assert(typeof ListVpcConnections$ === "object");
assert(typeof PutClusterPolicyCommand === "function");
assert(typeof PutClusterPolicy$ === "object");
assert(typeof RebootBrokerCommand === "function");
assert(typeof RebootBroker$ === "object");
assert(typeof RejectClientVpcConnectionCommand === "function");
assert(typeof RejectClientVpcConnection$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateBrokerCountCommand === "function");
assert(typeof UpdateBrokerCount$ === "object");
assert(typeof UpdateBrokerStorageCommand === "function");
assert(typeof UpdateBrokerStorage$ === "object");
assert(typeof UpdateBrokerTypeCommand === "function");
assert(typeof UpdateBrokerType$ === "object");
assert(typeof UpdateClusterConfigurationCommand === "function");
assert(typeof UpdateClusterConfiguration$ === "object");
assert(typeof UpdateClusterKafkaVersionCommand === "function");
assert(typeof UpdateClusterKafkaVersion$ === "object");
assert(typeof UpdateConfigurationCommand === "function");
assert(typeof UpdateConfiguration$ === "object");
assert(typeof UpdateConnectivityCommand === "function");
assert(typeof UpdateConnectivity$ === "object");
assert(typeof UpdateMonitoringCommand === "function");
assert(typeof UpdateMonitoring$ === "object");
assert(typeof UpdateRebalancingCommand === "function");
assert(typeof UpdateRebalancing$ === "object");
assert(typeof UpdateReplicationInfoCommand === "function");
assert(typeof UpdateReplicationInfo$ === "object");
assert(typeof UpdateSecurityCommand === "function");
assert(typeof UpdateSecurity$ === "object");
assert(typeof UpdateStorageCommand === "function");
assert(typeof UpdateStorage$ === "object");
// structural schemas
assert(typeof AmazonMskCluster$ === "object");
assert(typeof BatchAssociateScramSecretRequest$ === "object");
assert(typeof BatchAssociateScramSecretResponse$ === "object");
assert(typeof BatchDisassociateScramSecretRequest$ === "object");
assert(typeof BatchDisassociateScramSecretResponse$ === "object");
assert(typeof BrokerCountUpdateInfo$ === "object");
assert(typeof BrokerEBSVolumeInfo$ === "object");
assert(typeof BrokerLogs$ === "object");
assert(typeof BrokerNodeGroupInfo$ === "object");
assert(typeof BrokerNodeInfo$ === "object");
assert(typeof BrokerSoftwareInfo$ === "object");
assert(typeof ClientAuthentication$ === "object");
assert(typeof ClientVpcConnection$ === "object");
assert(typeof CloudWatchLogs$ === "object");
assert(typeof Cluster$ === "object");
assert(typeof ClusterInfo$ === "object");
assert(typeof ClusterOperationInfo$ === "object");
assert(typeof ClusterOperationStep$ === "object");
assert(typeof ClusterOperationStepInfo$ === "object");
assert(typeof ClusterOperationV2$ === "object");
assert(typeof ClusterOperationV2Provisioned$ === "object");
assert(typeof ClusterOperationV2Serverless$ === "object");
assert(typeof ClusterOperationV2Summary$ === "object");
assert(typeof CompatibleKafkaVersion$ === "object");
assert(typeof Configuration$ === "object");
assert(typeof ConfigurationInfo$ === "object");
assert(typeof ConfigurationRevision$ === "object");
assert(typeof ConnectivityInfo$ === "object");
assert(typeof ConsumerGroupReplication$ === "object");
assert(typeof ConsumerGroupReplicationUpdate$ === "object");
assert(typeof ControllerNodeInfo$ === "object");
assert(typeof CreateClusterRequest$ === "object");
assert(typeof CreateClusterResponse$ === "object");
assert(typeof CreateClusterV2Request$ === "object");
assert(typeof CreateClusterV2Response$ === "object");
assert(typeof CreateConfigurationRequest$ === "object");
assert(typeof CreateConfigurationResponse$ === "object");
assert(typeof CreateReplicatorRequest$ === "object");
assert(typeof CreateReplicatorResponse$ === "object");
assert(typeof CreateVpcConnectionRequest$ === "object");
assert(typeof CreateVpcConnectionResponse$ === "object");
assert(typeof DeleteClusterPolicyRequest$ === "object");
assert(typeof DeleteClusterPolicyResponse$ === "object");
assert(typeof DeleteClusterRequest$ === "object");
assert(typeof DeleteClusterResponse$ === "object");
assert(typeof DeleteConfigurationRequest$ === "object");
assert(typeof DeleteConfigurationResponse$ === "object");
assert(typeof DeleteReplicatorRequest$ === "object");
assert(typeof DeleteReplicatorResponse$ === "object");
assert(typeof DeleteVpcConnectionRequest$ === "object");
assert(typeof DeleteVpcConnectionResponse$ === "object");
assert(typeof DescribeClusterOperationRequest$ === "object");
assert(typeof DescribeClusterOperationResponse$ === "object");
assert(typeof DescribeClusterOperationV2Request$ === "object");
assert(typeof DescribeClusterOperationV2Response$ === "object");
assert(typeof DescribeClusterRequest$ === "object");
assert(typeof DescribeClusterResponse$ === "object");
assert(typeof DescribeClusterV2Request$ === "object");
assert(typeof DescribeClusterV2Response$ === "object");
assert(typeof DescribeConfigurationRequest$ === "object");
assert(typeof DescribeConfigurationResponse$ === "object");
assert(typeof DescribeConfigurationRevisionRequest$ === "object");
assert(typeof DescribeConfigurationRevisionResponse$ === "object");
assert(typeof DescribeReplicatorRequest$ === "object");
assert(typeof DescribeReplicatorResponse$ === "object");
assert(typeof DescribeTopicPartitionsRequest$ === "object");
assert(typeof DescribeTopicPartitionsResponse$ === "object");
assert(typeof DescribeTopicRequest$ === "object");
assert(typeof DescribeTopicResponse$ === "object");
assert(typeof DescribeVpcConnectionRequest$ === "object");
assert(typeof DescribeVpcConnectionResponse$ === "object");
assert(typeof EBSStorageInfo$ === "object");
assert(typeof EncryptionAtRest$ === "object");
assert(typeof EncryptionInfo$ === "object");
assert(typeof EncryptionInTransit$ === "object");
assert(typeof ErrorInfo$ === "object");
assert(typeof Firehose$ === "object");
assert(typeof GetBootstrapBrokersRequest$ === "object");
assert(typeof GetBootstrapBrokersResponse$ === "object");
assert(typeof GetClusterPolicyRequest$ === "object");
assert(typeof GetClusterPolicyResponse$ === "object");
assert(typeof GetCompatibleKafkaVersionsRequest$ === "object");
assert(typeof GetCompatibleKafkaVersionsResponse$ === "object");
assert(typeof Iam$ === "object");
assert(typeof JmxExporter$ === "object");
assert(typeof JmxExporterInfo$ === "object");
assert(typeof KafkaCluster$ === "object");
assert(typeof KafkaClusterClientVpcConfig$ === "object");
assert(typeof KafkaClusterDescription$ === "object");
assert(typeof KafkaClusterSummary$ === "object");
assert(typeof KafkaVersion$ === "object");
assert(typeof ListClientVpcConnectionsRequest$ === "object");
assert(typeof ListClientVpcConnectionsResponse$ === "object");
assert(typeof ListClusterOperationsRequest$ === "object");
assert(typeof ListClusterOperationsResponse$ === "object");
assert(typeof ListClusterOperationsV2Request$ === "object");
assert(typeof ListClusterOperationsV2Response$ === "object");
assert(typeof ListClustersRequest$ === "object");
assert(typeof ListClustersResponse$ === "object");
assert(typeof ListClustersV2Request$ === "object");
assert(typeof ListClustersV2Response$ === "object");
assert(typeof ListConfigurationRevisionsRequest$ === "object");
assert(typeof ListConfigurationRevisionsResponse$ === "object");
assert(typeof ListConfigurationsRequest$ === "object");
assert(typeof ListConfigurationsResponse$ === "object");
assert(typeof ListKafkaVersionsRequest$ === "object");
assert(typeof ListKafkaVersionsResponse$ === "object");
assert(typeof ListNodesRequest$ === "object");
assert(typeof ListNodesResponse$ === "object");
assert(typeof ListReplicatorsRequest$ === "object");
assert(typeof ListReplicatorsResponse$ === "object");
assert(typeof ListScramSecretsRequest$ === "object");
assert(typeof ListScramSecretsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTopicsRequest$ === "object");
assert(typeof ListTopicsResponse$ === "object");
assert(typeof ListVpcConnectionsRequest$ === "object");
assert(typeof ListVpcConnectionsResponse$ === "object");
assert(typeof LoggingInfo$ === "object");
assert(typeof MutableClusterInfo$ === "object");
assert(typeof NodeExporter$ === "object");
assert(typeof NodeExporterInfo$ === "object");
assert(typeof NodeInfo$ === "object");
assert(typeof OpenMonitoring$ === "object");
assert(typeof OpenMonitoringInfo$ === "object");
assert(typeof Prometheus$ === "object");
assert(typeof PrometheusInfo$ === "object");
assert(typeof Provisioned$ === "object");
assert(typeof ProvisionedRequest$ === "object");
assert(typeof ProvisionedThroughput$ === "object");
assert(typeof PublicAccess$ === "object");
assert(typeof PutClusterPolicyRequest$ === "object");
assert(typeof PutClusterPolicyResponse$ === "object");
assert(typeof Rebalancing$ === "object");
assert(typeof RebootBrokerRequest$ === "object");
assert(typeof RebootBrokerResponse$ === "object");
assert(typeof RejectClientVpcConnectionRequest$ === "object");
assert(typeof RejectClientVpcConnectionResponse$ === "object");
assert(typeof ReplicationInfo$ === "object");
assert(typeof ReplicationInfoDescription$ === "object");
assert(typeof ReplicationInfoSummary$ === "object");
assert(typeof ReplicationStartingPosition$ === "object");
assert(typeof ReplicationStateInfo$ === "object");
assert(typeof ReplicationTopicNameConfiguration$ === "object");
assert(typeof ReplicatorSummary$ === "object");
assert(typeof S3$ === "object");
assert(typeof Sasl$ === "object");
assert(typeof Scram$ === "object");
assert(typeof Serverless$ === "object");
assert(typeof ServerlessClientAuthentication$ === "object");
assert(typeof ServerlessRequest$ === "object");
assert(typeof ServerlessSasl$ === "object");
assert(typeof StateInfo$ === "object");
assert(typeof StorageInfo$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof Tls$ === "object");
assert(typeof TopicInfo$ === "object");
assert(typeof TopicPartitionInfo$ === "object");
assert(typeof TopicReplication$ === "object");
assert(typeof TopicReplicationUpdate$ === "object");
assert(typeof Unauthenticated$ === "object");
assert(typeof UnprocessedScramSecret$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateBrokerCountRequest$ === "object");
assert(typeof UpdateBrokerCountResponse$ === "object");
assert(typeof UpdateBrokerStorageRequest$ === "object");
assert(typeof UpdateBrokerStorageResponse$ === "object");
assert(typeof UpdateBrokerTypeRequest$ === "object");
assert(typeof UpdateBrokerTypeResponse$ === "object");
assert(typeof UpdateClusterConfigurationRequest$ === "object");
assert(typeof UpdateClusterConfigurationResponse$ === "object");
assert(typeof UpdateClusterKafkaVersionRequest$ === "object");
assert(typeof UpdateClusterKafkaVersionResponse$ === "object");
assert(typeof UpdateConfigurationRequest$ === "object");
assert(typeof UpdateConfigurationResponse$ === "object");
assert(typeof UpdateConnectivityRequest$ === "object");
assert(typeof UpdateConnectivityResponse$ === "object");
assert(typeof UpdateMonitoringRequest$ === "object");
assert(typeof UpdateMonitoringResponse$ === "object");
assert(typeof UpdateRebalancingRequest$ === "object");
assert(typeof UpdateRebalancingResponse$ === "object");
assert(typeof UpdateReplicationInfoRequest$ === "object");
assert(typeof UpdateReplicationInfoResponse$ === "object");
assert(typeof UpdateSecurityRequest$ === "object");
assert(typeof UpdateSecurityResponse$ === "object");
assert(typeof UpdateStorageRequest$ === "object");
assert(typeof UpdateStorageResponse$ === "object");
assert(typeof UserIdentity$ === "object");
assert(typeof VpcConfig$ === "object");
assert(typeof VpcConnection$ === "object");
assert(typeof VpcConnectionInfo$ === "object");
assert(typeof VpcConnectionInfoServerless$ === "object");
assert(typeof VpcConnectivity$ === "object");
assert(typeof VpcConnectivityClientAuthentication$ === "object");
assert(typeof VpcConnectivityIam$ === "object");
assert(typeof VpcConnectivitySasl$ === "object");
assert(typeof VpcConnectivityScram$ === "object");
assert(typeof VpcConnectivityTls$ === "object");
assert(typeof ZookeeperNodeInfo$ === "object");
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
assert(BadRequestException.prototype instanceof KafkaServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConflictException.prototype instanceof KafkaServiceException);
assert(typeof ConflictException$ === "object");
assert(ForbiddenException.prototype instanceof KafkaServiceException);
assert(typeof ForbiddenException$ === "object");
assert(InternalServerErrorException.prototype instanceof KafkaServiceException);
assert(typeof InternalServerErrorException$ === "object");
assert(NotFoundException.prototype instanceof KafkaServiceException);
assert(typeof NotFoundException$ === "object");
assert(ServiceUnavailableException.prototype instanceof KafkaServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(TooManyRequestsException.prototype instanceof KafkaServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(UnauthorizedException.prototype instanceof KafkaServiceException);
assert(typeof UnauthorizedException$ === "object");
assert(KafkaServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeTopicPartitions === "function");
assert(typeof paginateListClientVpcConnections === "function");
assert(typeof paginateListClusterOperations === "function");
assert(typeof paginateListClusterOperationsV2 === "function");
assert(typeof paginateListClusters === "function");
assert(typeof paginateListClustersV2 === "function");
assert(typeof paginateListConfigurationRevisions === "function");
assert(typeof paginateListConfigurations === "function");
assert(typeof paginateListKafkaVersions === "function");
assert(typeof paginateListNodes === "function");
assert(typeof paginateListReplicators === "function");
assert(typeof paginateListScramSecrets === "function");
assert(typeof paginateListTopics === "function");
assert(typeof paginateListVpcConnections === "function");
console.log(`Kafka index test passed.`);
