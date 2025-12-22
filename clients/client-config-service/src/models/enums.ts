// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ComplianceType = {
  Compliant: "COMPLIANT",
  Insufficient_Data: "INSUFFICIENT_DATA",
  Non_Compliant: "NON_COMPLIANT",
  Not_Applicable: "NOT_APPLICABLE",
} as const;
/**
 * @public
 */
export type ComplianceType = (typeof ComplianceType)[keyof typeof ComplianceType];

/**
 * @public
 * @enum
 */
export const ConformancePackComplianceType = {
  COMPLIANT: "COMPLIANT",
  INSUFFICIENT_DATA: "INSUFFICIENT_DATA",
  NON_COMPLIANT: "NON_COMPLIANT",
} as const;
/**
 * @public
 */
export type ConformancePackComplianceType =
  (typeof ConformancePackComplianceType)[keyof typeof ConformancePackComplianceType];

/**
 * @public
 * @enum
 */
export const AggregateConformancePackComplianceSummaryGroupKey = {
  ACCOUNT_ID: "ACCOUNT_ID",
  AWS_REGION: "AWS_REGION",
} as const;
/**
 * @public
 */
export type AggregateConformancePackComplianceSummaryGroupKey =
  (typeof AggregateConformancePackComplianceSummaryGroupKey)[keyof typeof AggregateConformancePackComplianceSummaryGroupKey];

/**
 * @public
 * @enum
 */
export const AggregatedSourceStatusType = {
  FAILED: "FAILED",
  OUTDATED: "OUTDATED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type AggregatedSourceStatusType = (typeof AggregatedSourceStatusType)[keyof typeof AggregatedSourceStatusType];

/**
 * @public
 * @enum
 */
export const AggregatedSourceType = {
  ACCOUNT: "ACCOUNT",
  ORGANIZATION: "ORGANIZATION",
} as const;
/**
 * @public
 */
export type AggregatedSourceType = (typeof AggregatedSourceType)[keyof typeof AggregatedSourceType];

/**
 * @public
 * @enum
 */
export const EvaluationMode = {
  DETECTIVE: "DETECTIVE",
  PROACTIVE: "PROACTIVE",
} as const;
/**
 * @public
 */
export type EvaluationMode = (typeof EvaluationMode)[keyof typeof EvaluationMode];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  ACMPCACertificateAuthority: "AWS::ACMPCA::CertificateAuthority",
  ACMPCACertificateAuthorityActivation: "AWS::ACMPCA::CertificateAuthorityActivation",
  APSRuleGroupsNamespace: "AWS::APS::RuleGroupsNamespace",
  AccessAnalyzerAnalyzer: "AWS::AccessAnalyzer::Analyzer",
  AccountPublicAccessBlock: "AWS::S3::AccountPublicAccessBlock",
  Alarm: "AWS::CloudWatch::Alarm",
  AmazonMQBroker: "AWS::AmazonMQ::Broker",
  AmplifyApp: "AWS::Amplify::App",
  AmplifyBranch: "AWS::Amplify::Branch",
  Api: "AWS::ApiGatewayV2::Api",
  ApiGatewayMethod: "AWS::ApiGateway::Method",
  ApiGatewayUsagePlan: "AWS::ApiGateway::UsagePlan",
  ApiGatewayV2Integration: "AWS::ApiGatewayV2::Integration",
  AppConfigApplication: "AWS::AppConfig::Application",
  AppConfigConfigurationProfile: "AWS::AppConfig::ConfigurationProfile",
  AppConfigDeploymentStrategy: "AWS::AppConfig::DeploymentStrategy",
  AppConfigEnvironment: "AWS::AppConfig::Environment",
  AppConfigExtension: "AWS::AppConfig::Extension",
  AppConfigExtensionAssociation: "AWS::AppConfig::ExtensionAssociation",
  AppConfigHostedConfigurationVersion: "AWS::AppConfig::HostedConfigurationVersion",
  AppFlowFlow: "AWS::AppFlow::Flow",
  AppIntegrationsApplication: "AWS::AppIntegrations::Application",
  AppIntegrationsEventIntegration: "AWS::AppIntegrations::EventIntegration",
  AppMeshGatewayRoute: "AWS::AppMesh::GatewayRoute",
  AppMeshMesh: "AWS::AppMesh::Mesh",
  AppMeshRoute: "AWS::AppMesh::Route",
  AppMeshVirtualGateway: "AWS::AppMesh::VirtualGateway",
  AppMeshVirtualNode: "AWS::AppMesh::VirtualNode",
  AppMeshVirtualRouter: "AWS::AppMesh::VirtualRouter",
  AppMeshVirtualService: "AWS::AppMesh::VirtualService",
  AppRunnerService: "AWS::AppRunner::Service",
  AppRunnerVpcConnector: "AWS::AppRunner::VpcConnector",
  AppStreamAppBlockBuilder: "AWS::AppStream::AppBlockBuilder",
  AppStreamApplication: "AWS::AppStream::Application",
  AppStreamDirectoryConfig: "AWS::AppStream::DirectoryConfig",
  AppStreamFleet: "AWS::AppStream::Fleet",
  AppStreamStack: "AWS::AppStream::Stack",
  AppSyncApiCache: "AWS::AppSync::ApiCache",
  AppSyncGraphQLApi: "AWS::AppSync::GraphQLApi",
  Application: "AWS::ElasticBeanstalk::Application",
  ApplicationVersion: "AWS::ElasticBeanstalk::ApplicationVersion",
  AssociationCompliance: "AWS::SSM::AssociationCompliance",
  AthenaDataCatalog: "AWS::Athena::DataCatalog",
  AthenaPreparedStatement: "AWS::Athena::PreparedStatement",
  AthenaWorkGroup: "AWS::Athena::WorkGroup",
  AuditManagerAssessment: "AWS::AuditManager::Assessment",
  AutoScalingGroup: "AWS::AutoScaling::AutoScalingGroup",
  AutoScalingWarmPool: "AWS::AutoScaling::WarmPool",
  B2BICapability: "AWS::B2BI::Capability",
  BCMDataExportsExport: "AWS::BCMDataExports::Export",
  BackupGatewayHypervisor: "AWS::BackupGateway::Hypervisor",
  BackupPlan: "AWS::Backup::BackupPlan",
  BackupRecoveryPoint: "AWS::Backup::RecoveryPoint",
  BackupReportPlan: "AWS::Backup::ReportPlan",
  BackupRestoreTestingPlan: "AWS::Backup::RestoreTestingPlan",
  BackupSelection: "AWS::Backup::BackupSelection",
  BackupVault: "AWS::Backup::BackupVault",
  BatchComputeEnvironment: "AWS::Batch::ComputeEnvironment",
  BatchJobQueue: "AWS::Batch::JobQueue",
  BatchSchedulingPolicy: "AWS::Batch::SchedulingPolicy",
  BedrockAgentCoreBrowserCustom: "AWS::BedrockAgentCore::BrowserCustom",
  BedrockAgentCoreRuntime: "AWS::BedrockAgentCore::Runtime",
  BedrockApplicationInferenceProfile: "AWS::Bedrock::ApplicationInferenceProfile",
  BedrockGuardrail: "AWS::Bedrock::Guardrail",
  BedrockKnowledgeBase: "AWS::Bedrock::KnowledgeBase",
  BedrockPrompt: "AWS::Bedrock::Prompt",
  Bucket: "AWS::S3::Bucket",
  BudgetsBudgetsAction: "AWS::Budgets::BudgetsAction",
  CassandraKeyspace: "AWS::Cassandra::Keyspace",
  Certificate: "AWS::ACM::Certificate",
  CleanRoomsMLTrainingDataset: "AWS::CleanRoomsML::TrainingDataset",
  Cloud9EnvironmentEC2: "AWS::Cloud9::EnvironmentEC2",
  CloudFormationGuardHook: "AWS::CloudFormation::GuardHook",
  CloudFormationLambdaHook: "AWS::CloudFormation::LambdaHook",
  CloudFormationProduct: "AWS::ServiceCatalog::CloudFormationProduct",
  CloudFormationProvisionedProduct: "AWS::ServiceCatalog::CloudFormationProvisionedProduct",
  CloudFormationStackSet: "AWS::CloudFormation::StackSet",
  CloudFrontKeyValueStore: "AWS::CloudFront::KeyValueStore",
  CloudFrontPublicKey: "AWS::CloudFront::PublicKey",
  CloudFrontRealtimeLogConfig: "AWS::CloudFront::RealtimeLogConfig",
  CloudTrailEventDataStore: "AWS::CloudTrail::EventDataStore",
  CloudWatchMetricStream: "AWS::CloudWatch::MetricStream",
  Cluster: "AWS::Redshift::Cluster",
  ClusterParameterGroup: "AWS::Redshift::ClusterParameterGroup",
  ClusterSecurityGroup: "AWS::Redshift::ClusterSecurityGroup",
  ClusterSnapshot: "AWS::Redshift::ClusterSnapshot",
  ClusterSubnetGroup: "AWS::Redshift::ClusterSubnetGroup",
  CodeArtifactDomain: "AWS::CodeArtifact::Domain",
  CodeArtifactRepository: "AWS::CodeArtifact::Repository",
  CodeBuildReportGroup: "AWS::CodeBuild::ReportGroup",
  CodeDeployApplication: "AWS::CodeDeploy::Application",
  CodeDeployDeploymentConfig: "AWS::CodeDeploy::DeploymentConfig",
  CodeDeployDeploymentGroup: "AWS::CodeDeploy::DeploymentGroup",
  CodeGuruProfilerProfilingGroup: "AWS::CodeGuruProfiler::ProfilingGroup",
  CodeGuruReviewerRepositoryAssociation: "AWS::CodeGuruReviewer::RepositoryAssociation",
  CognitoIdentityPool: "AWS::Cognito::IdentityPool",
  CognitoUserPool: "AWS::Cognito::UserPool",
  CognitoUserPoolClient: "AWS::Cognito::UserPoolClient",
  CognitoUserPoolGroup: "AWS::Cognito::UserPoolGroup",
  ComprehendFlywheel: "AWS::Comprehend::Flywheel",
  ConfigAggregationAuthorization: "AWS::Config::AggregationAuthorization",
  ConfigConformancePack: "AWS::Config::ConformancePack",
  ConfigStoredQuery: "AWS::Config::StoredQuery",
  ConformancePackCompliance: "AWS::Config::ConformancePackCompliance",
  ConnectInstance: "AWS::Connect::Instance",
  ConnectPhoneNumber: "AWS::Connect::PhoneNumber",
  ConnectQuickConnect: "AWS::Connect::QuickConnect",
  ConnectRule: "AWS::Connect::Rule",
  ConnectSecurityProfile: "AWS::Connect::SecurityProfile",
  ConnectUser: "AWS::Connect::User",
  CustomerGateway: "AWS::EC2::CustomerGateway",
  CustomerProfilesDomain: "AWS::CustomerProfiles::Domain",
  CustomerProfilesObjectType: "AWS::CustomerProfiles::ObjectType",
  DBCluster: "AWS::RDS::DBCluster",
  DBClusterSnapshot: "AWS::RDS::DBClusterSnapshot",
  DBInstance: "AWS::RDS::DBInstance",
  DBSecurityGroup: "AWS::RDS::DBSecurityGroup",
  DBSnapshot: "AWS::RDS::DBSnapshot",
  DBSubnetGroup: "AWS::RDS::DBSubnetGroup",
  DMSCertificate: "AWS::DMS::Certificate",
  DMSEndpoint: "AWS::DMS::Endpoint",
  DMSEventSubscription: "AWS::DMS::EventSubscription",
  DMSReplicationSubnetGroup: "AWS::DMS::ReplicationSubnetGroup",
  DataSyncAgent: "AWS::DataSync::Agent",
  DataSyncLocationEFS: "AWS::DataSync::LocationEFS",
  DataSyncLocationFSxLustre: "AWS::DataSync::LocationFSxLustre",
  DataSyncLocationFSxWindows: "AWS::DataSync::LocationFSxWindows",
  DataSyncLocationHDFS: "AWS::DataSync::LocationHDFS",
  DataSyncLocationNFS: "AWS::DataSync::LocationNFS",
  DataSyncLocationObjectStorage: "AWS::DataSync::LocationObjectStorage",
  DataSyncLocationS3: "AWS::DataSync::LocationS3",
  DataSyncLocationSMB: "AWS::DataSync::LocationSMB",
  DataSyncTask: "AWS::DataSync::Task",
  DeadlineFleet: "AWS::Deadline::Fleet",
  DeadlineMonitor: "AWS::Deadline::Monitor",
  DeadlineQueueFleetAssociation: "AWS::Deadline::QueueFleetAssociation",
  DetectiveGraph: "AWS::Detective::Graph",
  DeviceFarmInstanceProfile: "AWS::DeviceFarm::InstanceProfile",
  DeviceFarmProject: "AWS::DeviceFarm::Project",
  DeviceFarmTestGridProject: "AWS::DeviceFarm::TestGridProject",
  Distribution: "AWS::CloudFront::Distribution",
  Domain: "AWS::Elasticsearch::Domain",
  EC2CapacityReservation: "AWS::EC2::CapacityReservation",
  EC2CarrierGateway: "AWS::EC2::CarrierGateway",
  EC2ClientVpnEndpoint: "AWS::EC2::ClientVpnEndpoint",
  EC2ClientVpnTargetNetworkAssociation: "AWS::EC2::ClientVpnTargetNetworkAssociation",
  EC2DHCPOptions: "AWS::EC2::DHCPOptions",
  EC2EC2Fleet: "AWS::EC2::EC2Fleet",
  EC2EIPAssociation: "AWS::EC2::EIPAssociation",
  EC2IPAM: "AWS::EC2::IPAM",
  EC2IPAMPool: "AWS::EC2::IPAMPool",
  EC2IPAMPoolCidr: "AWS::EC2::IPAMPoolCidr",
  EC2IPAMResourceDiscovery: "AWS::EC2::IPAMResourceDiscovery",
  EC2IPAMResourceDiscoveryAssociation: "AWS::EC2::IPAMResourceDiscoveryAssociation",
  EC2IPAMScope: "AWS::EC2::IPAMScope",
  EC2InstanceConnectEndpoint: "AWS::EC2::InstanceConnectEndpoint",
  EC2NetworkInsightsAccessScope: "AWS::EC2::NetworkInsightsAccessScope",
  EC2NetworkInsightsAnalysis: "AWS::EC2::NetworkInsightsAnalysis",
  EC2NetworkInsightsPath: "AWS::EC2::NetworkInsightsPath",
  EC2PrefixList: "AWS::EC2::PrefixList",
  EC2SecurityGroupVpcAssociation: "AWS::EC2::SecurityGroupVpcAssociation",
  EC2SnapshotBlockPublicAccess: "AWS::EC2::SnapshotBlockPublicAccess",
  EC2SpotFleet: "AWS::EC2::SpotFleet",
  EC2SubnetCidrBlock: "AWS::EC2::SubnetCidrBlock",
  EC2SubnetNetworkAclAssociation: "AWS::EC2::SubnetNetworkAclAssociation",
  EC2SubnetRouteTableAssociation: "AWS::EC2::SubnetRouteTableAssociation",
  EC2TrafficMirrorFilter: "AWS::EC2::TrafficMirrorFilter",
  EC2TrafficMirrorSession: "AWS::EC2::TrafficMirrorSession",
  EC2TrafficMirrorTarget: "AWS::EC2::TrafficMirrorTarget",
  EC2TransitGatewayConnect: "AWS::EC2::TransitGatewayConnect",
  EC2TransitGatewayMulticastDomain: "AWS::EC2::TransitGatewayMulticastDomain",
  EC2VPCBlockPublicAccessExclusion: "AWS::EC2::VPCBlockPublicAccessExclusion",
  EC2VPCBlockPublicAccessOptions: "AWS::EC2::VPCBlockPublicAccessOptions",
  EC2VPCEndpointConnectionNotification: "AWS::EC2::VPCEndpointConnectionNotification",
  EC2VPCGatewayAttachment: "AWS::EC2::VPCGatewayAttachment",
  EC2VPNConnectionRoute: "AWS::EC2::VPNConnectionRoute",
  EC2VerifiedAccessInstance: "AWS::EC2::VerifiedAccessInstance",
  ECRPublicRepository: "AWS::ECR::PublicRepository",
  ECRPullThroughCacheRule: "AWS::ECR::PullThroughCacheRule",
  ECRRegistryPolicy: "AWS::ECR::RegistryPolicy",
  ECRReplicationConfiguration: "AWS::ECR::ReplicationConfiguration",
  ECRRepository: "AWS::ECR::Repository",
  ECRRepositoryCreationTemplate: "AWS::ECR::RepositoryCreationTemplate",
  ECSCapacityProvider: "AWS::ECS::CapacityProvider",
  ECSCluster: "AWS::ECS::Cluster",
  ECSService: "AWS::ECS::Service",
  ECSTaskDefinition: "AWS::ECS::TaskDefinition",
  ECSTaskSet: "AWS::ECS::TaskSet",
  EFSAccessPoint: "AWS::EFS::AccessPoint",
  EFSFileSystem: "AWS::EFS::FileSystem",
  EIP: "AWS::EC2::EIP",
  EKSAddon: "AWS::EKS::Addon",
  EKSCluster: "AWS::EKS::Cluster",
  EKSFargateProfile: "AWS::EKS::FargateProfile",
  EKSIdentityProviderConfig: "AWS::EKS::IdentityProviderConfig",
  EMRContainersVirtualCluster: "AWS::EMRContainers::VirtualCluster",
  EMRSecurityConfiguration: "AWS::EMR::SecurityConfiguration",
  EMRServerlessApplication: "AWS::EMRServerless::Application",
  EMRStudio: "AWS::EMR::Studio",
  EgressOnlyInternetGateway: "AWS::EC2::EgressOnlyInternetGateway",
  ElasticLoadBalancingV2TargetGroup: "AWS::ElasticLoadBalancingV2::TargetGroup",
  EncryptionConfig: "AWS::XRay::EncryptionConfig",
  EntityResolutionIdMappingWorkflow: "AWS::EntityResolution::IdMappingWorkflow",
  EntityResolutionMatchingWorkflow: "AWS::EntityResolution::MatchingWorkflow",
  EntityResolutionSchemaMapping: "AWS::EntityResolution::SchemaMapping",
  Environment: "AWS::ElasticBeanstalk::Environment",
  EventSchemasDiscoverer: "AWS::EventSchemas::Discoverer",
  EventSchemasRegistry: "AWS::EventSchemas::Registry",
  EventSchemasRegistryPolicy: "AWS::EventSchemas::RegistryPolicy",
  EventSchemasSchema: "AWS::EventSchemas::Schema",
  EventSubscription: "AWS::RDS::EventSubscription",
  EventsApiDestination: "AWS::Events::ApiDestination",
  EventsArchive: "AWS::Events::Archive",
  EventsConnection: "AWS::Events::Connection",
  EventsEndpoint: "AWS::Events::Endpoint",
  EventsEventBus: "AWS::Events::EventBus",
  EventsRule: "AWS::Events::Rule",
  EvidentlyLaunch: "AWS::Evidently::Launch",
  EvidentlyProject: "AWS::Evidently::Project",
  EvidentlySegment: "AWS::Evidently::Segment",
  FISExperimentTemplate: "AWS::FIS::ExperimentTemplate",
  FileData: "AWS::SSM::FileData",
  FlowLog: "AWS::EC2::FlowLog",
  ForecastDataset: "AWS::Forecast::Dataset",
  ForecastDatasetGroup: "AWS::Forecast::DatasetGroup",
  FraudDetectorEntityType: "AWS::FraudDetector::EntityType",
  FraudDetectorLabel: "AWS::FraudDetector::Label",
  FraudDetectorOutcome: "AWS::FraudDetector::Outcome",
  FraudDetectorVariable: "AWS::FraudDetector::Variable",
  Function: "AWS::Lambda::Function",
  GameLiftBuild: "AWS::GameLift::Build",
  GlobalAcceleratorAccelerator: "AWS::GlobalAccelerator::Accelerator",
  GlobalAcceleratorEndpointGroup: "AWS::GlobalAccelerator::EndpointGroup",
  GlobalAcceleratorListener: "AWS::GlobalAccelerator::Listener",
  GlueClassifier: "AWS::Glue::Classifier",
  GlueDatabase: "AWS::Glue::Database",
  GlueJob: "AWS::Glue::Job",
  GlueMLTransform: "AWS::Glue::MLTransform",
  GrafanaWorkspace: "AWS::Grafana::Workspace",
  GreengrassV2ComponentVersion: "AWS::GreengrassV2::ComponentVersion",
  GroundStationConfig: "AWS::GroundStation::Config",
  GroundStationDataflowEndpointGroup: "AWS::GroundStation::DataflowEndpointGroup",
  GroundStationMissionProfile: "AWS::GroundStation::MissionProfile",
  Group: "AWS::IAM::Group",
  GuardDutyDetector: "AWS::GuardDuty::Detector",
  GuardDutyFilter: "AWS::GuardDuty::Filter",
  GuardDutyIPSet: "AWS::GuardDuty::IPSet",
  GuardDutyMalwareProtectionPlan: "AWS::GuardDuty::MalwareProtectionPlan",
  GuardDutyThreatIntelSet: "AWS::GuardDuty::ThreatIntelSet",
  HealthLakeFHIRDatastore: "AWS::HealthLake::FHIRDatastore",
  Host: "AWS::EC2::Host",
  IAMInstanceProfile: "AWS::IAM::InstanceProfile",
  IAMOIDCProvider: "AWS::IAM::OIDCProvider",
  IAMSAMLProvider: "AWS::IAM::SAMLProvider",
  IAMServerCertificate: "AWS::IAM::ServerCertificate",
  IPSetV2: "AWS::WAFv2::IPSet",
  IVSChannel: "AWS::IVS::Channel",
  IVSPlaybackKeyPair: "AWS::IVS::PlaybackKeyPair",
  IVSRecordingConfiguration: "AWS::IVS::RecordingConfiguration",
  ImageBuilderContainerRecipe: "AWS::ImageBuilder::ContainerRecipe",
  ImageBuilderDistributionConfiguration: "AWS::ImageBuilder::DistributionConfiguration",
  ImageBuilderImagePipeline: "AWS::ImageBuilder::ImagePipeline",
  ImageBuilderImageRecipe: "AWS::ImageBuilder::ImageRecipe",
  ImageBuilderInfrastructureConfiguration: "AWS::ImageBuilder::InfrastructureConfiguration",
  ImageBuilderLifecyclePolicy: "AWS::ImageBuilder::LifecyclePolicy",
  InspectorV2Activation: "AWS::InspectorV2::Activation",
  InspectorV2Filter: "AWS::InspectorV2::Filter",
  Instance: "AWS::EC2::Instance",
  InternetGateway: "AWS::EC2::InternetGateway",
  IoTAccountAuditConfiguration: "AWS::IoT::AccountAuditConfiguration",
  IoTAnalyticsChannel: "AWS::IoTAnalytics::Channel",
  IoTAnalyticsDataset: "AWS::IoTAnalytics::Dataset",
  IoTAnalyticsDatastore: "AWS::IoTAnalytics::Datastore",
  IoTAnalyticsPipeline: "AWS::IoTAnalytics::Pipeline",
  IoTAuthorizer: "AWS::IoT::Authorizer",
  IoTCACertificate: "AWS::IoT::CACertificate",
  IoTCoreDeviceAdvisorSuiteDefinition: "AWS::IoTCoreDeviceAdvisor::SuiteDefinition",
  IoTCustomMetric: "AWS::IoT::CustomMetric",
  IoTDimension: "AWS::IoT::Dimension",
  IoTDomainConfiguration: "AWS::IoT::DomainConfiguration",
  IoTEventsAlarmModel: "AWS::IoTEvents::AlarmModel",
  IoTEventsDetectorModel: "AWS::IoTEvents::DetectorModel",
  IoTEventsInput: "AWS::IoTEvents::Input",
  IoTFleetMetric: "AWS::IoT::FleetMetric",
  IoTJobTemplate: "AWS::IoT::JobTemplate",
  IoTMitigationAction: "AWS::IoT::MitigationAction",
  IoTPolicy: "AWS::IoT::Policy",
  IoTProvisioningTemplate: "AWS::IoT::ProvisioningTemplate",
  IoTRoleAlias: "AWS::IoT::RoleAlias",
  IoTScheduledAudit: "AWS::IoT::ScheduledAudit",
  IoTSecurityProfile: "AWS::IoT::SecurityProfile",
  IoTSiteWiseAsset: "AWS::IoTSiteWise::Asset",
  IoTSiteWiseAssetModel: "AWS::IoTSiteWise::AssetModel",
  IoTSiteWiseDashboard: "AWS::IoTSiteWise::Dashboard",
  IoTSiteWiseGateway: "AWS::IoTSiteWise::Gateway",
  IoTSiteWisePortal: "AWS::IoTSiteWise::Portal",
  IoTSiteWiseProject: "AWS::IoTSiteWise::Project",
  IoTThingGroup: "AWS::IoT::ThingGroup",
  IoTTwinMakerComponentType: "AWS::IoTTwinMaker::ComponentType",
  IoTTwinMakerEntity: "AWS::IoTTwinMaker::Entity",
  IoTTwinMakerScene: "AWS::IoTTwinMaker::Scene",
  IoTTwinMakerSyncJob: "AWS::IoTTwinMaker::SyncJob",
  IoTTwinMakerWorkspace: "AWS::IoTTwinMaker::Workspace",
  IoTWirelessFuotaTask: "AWS::IoTWireless::FuotaTask",
  IoTWirelessMulticastGroup: "AWS::IoTWireless::MulticastGroup",
  IoTWirelessServiceProfile: "AWS::IoTWireless::ServiceProfile",
  KMSAlias: "AWS::KMS::Alias",
  KafkaConnectConnector: "AWS::KafkaConnect::Connector",
  KafkaConnectCustomPlugin: "AWS::KafkaConnect::CustomPlugin",
  KendraIndex: "AWS::Kendra::Index",
  Key: "AWS::KMS::Key",
  KinesisAnalyticsV2Application: "AWS::KinesisAnalyticsV2::Application",
  KinesisFirehoseDeliveryStream: "AWS::KinesisFirehose::DeliveryStream",
  KinesisStream: "AWS::Kinesis::Stream",
  KinesisStreamConsumer: "AWS::Kinesis::StreamConsumer",
  KinesisVideoSignalingChannel: "AWS::KinesisVideo::SignalingChannel",
  KinesisVideoStream: "AWS::KinesisVideo::Stream",
  LambdaCodeSigningConfig: "AWS::Lambda::CodeSigningConfig",
  LaunchConfiguration: "AWS::AutoScaling::LaunchConfiguration",
  LaunchTemplate: "AWS::EC2::LaunchTemplate",
  LexBot: "AWS::Lex::Bot",
  LexBotAlias: "AWS::Lex::BotAlias",
  LightsailBucket: "AWS::Lightsail::Bucket",
  LightsailCertificate: "AWS::Lightsail::Certificate",
  LightsailDisk: "AWS::Lightsail::Disk",
  LightsailStaticIp: "AWS::Lightsail::StaticIp",
  ListenerV2: "AWS::ElasticLoadBalancingV2::Listener",
  LoadBalancer: "AWS::ElasticLoadBalancing::LoadBalancer",
  LoadBalancerV2: "AWS::ElasticLoadBalancingV2::LoadBalancer",
  LocationAPIKey: "AWS::Location::APIKey",
  LogsDestination: "AWS::Logs::Destination",
  LookoutMetricsAlert: "AWS::LookoutMetrics::Alert",
  LookoutVisionProject: "AWS::LookoutVision::Project",
  M2Environment: "AWS::M2::Environment",
  MSKBatchScramSecret: "AWS::MSK::BatchScramSecret",
  MSKCluster: "AWS::MSK::Cluster",
  MSKClusterPolicy: "AWS::MSK::ClusterPolicy",
  MSKConfiguration: "AWS::MSK::Configuration",
  MSKServerlessCluster: "AWS::MSK::ServerlessCluster",
  MSKVpcConnection: "AWS::MSK::VpcConnection",
  ManagedInstanceInventory: "AWS::SSM::ManagedInstanceInventory",
  ManagedRuleSetV2: "AWS::WAFv2::ManagedRuleSet",
  MediaConnectFlowEntitlement: "AWS::MediaConnect::FlowEntitlement",
  MediaConnectFlowSource: "AWS::MediaConnect::FlowSource",
  MediaConnectFlowVpcInterface: "AWS::MediaConnect::FlowVpcInterface",
  MediaConnectGateway: "AWS::MediaConnect::Gateway",
  MediaPackagePackagingConfiguration: "AWS::MediaPackage::PackagingConfiguration",
  MediaPackagePackagingGroup: "AWS::MediaPackage::PackagingGroup",
  MediaPackageV2Channel: "AWS::MediaPackageV2::Channel",
  MediaPackageV2OriginEndpoint: "AWS::MediaPackageV2::OriginEndpoint",
  MediaTailorLiveSource: "AWS::MediaTailor::LiveSource",
  MediaTailorPlaybackConfiguration: "AWS::MediaTailor::PlaybackConfiguration",
  MemoryDBSubnetGroup: "AWS::MemoryDB::SubnetGroup",
  NatGateway: "AWS::EC2::NatGateway",
  NetworkAcl: "AWS::EC2::NetworkAcl",
  NetworkFirewallFirewall: "AWS::NetworkFirewall::Firewall",
  NetworkFirewallFirewallPolicy: "AWS::NetworkFirewall::FirewallPolicy",
  NetworkFirewallRuleGroup: "AWS::NetworkFirewall::RuleGroup",
  NetworkInsightsAccessScopeAnalysis: "AWS::EC2::NetworkInsightsAccessScopeAnalysis",
  NetworkInterface: "AWS::EC2::NetworkInterface",
  NetworkManagerConnectPeer: "AWS::NetworkManager::ConnectPeer",
  NetworkManagerCustomerGatewayAssociation: "AWS::NetworkManager::CustomerGatewayAssociation",
  NetworkManagerDevice: "AWS::NetworkManager::Device",
  NetworkManagerGlobalNetwork: "AWS::NetworkManager::GlobalNetwork",
  NetworkManagerLink: "AWS::NetworkManager::Link",
  NetworkManagerLinkAssociation: "AWS::NetworkManager::LinkAssociation",
  NetworkManagerSite: "AWS::NetworkManager::Site",
  NetworkManagerTransitGatewayPeering: "AWS::NetworkManager::TransitGatewayPeering",
  NetworkManagerTransitGatewayRegistration: "AWS::NetworkManager::TransitGatewayRegistration",
  OpenSearchDomain: "AWS::OpenSearch::Domain",
  OpenSearchServerlessCollection: "AWS::OpenSearchServerless::Collection",
  OpenSearchServerlessSecurityConfig: "AWS::OpenSearchServerless::SecurityConfig",
  OpenSearchServerlessVpcEndpoint: "AWS::OpenSearchServerless::VpcEndpoint",
  OrganizationsOrganizationalUnit: "AWS::Organizations::OrganizationalUnit",
  PCAConnectorADConnector: "AWS::PCAConnectorAD::Connector",
  PCAConnectorADDirectoryRegistration: "AWS::PCAConnectorAD::DirectoryRegistration",
  PanoramaPackage: "AWS::Panorama::Package",
  PatchCompliance: "AWS::SSM::PatchCompliance",
  PersonalizeDataset: "AWS::Personalize::Dataset",
  PersonalizeDatasetGroup: "AWS::Personalize::DatasetGroup",
  PersonalizeSchema: "AWS::Personalize::Schema",
  PersonalizeSolution: "AWS::Personalize::Solution",
  PinpointApp: "AWS::Pinpoint::App",
  PinpointApplicationSettings: "AWS::Pinpoint::ApplicationSettings",
  PinpointCampaign: "AWS::Pinpoint::Campaign",
  PinpointEmailChannel: "AWS::Pinpoint::EmailChannel",
  PinpointEmailTemplate: "AWS::Pinpoint::EmailTemplate",
  PinpointEventStream: "AWS::Pinpoint::EventStream",
  PinpointInAppTemplate: "AWS::Pinpoint::InAppTemplate",
  PinpointSegment: "AWS::Pinpoint::Segment",
  Pipeline: "AWS::CodePipeline::Pipeline",
  Policy: "AWS::IAM::Policy",
  Portfolio: "AWS::ServiceCatalog::Portfolio",
  Project: "AWS::CodeBuild::Project",
  Protection: "AWS::Shield::Protection",
  QLDBLedger: "AWS::QLDB::Ledger",
  Queue: "AWS::SQS::Queue",
  QuickSightDataSource: "AWS::QuickSight::DataSource",
  QuickSightTemplate: "AWS::QuickSight::Template",
  QuickSightTheme: "AWS::QuickSight::Theme",
  RDSGlobalCluster: "AWS::RDS::GlobalCluster",
  RDSIntegration: "AWS::RDS::Integration",
  RDSOptionGroup: "AWS::RDS::OptionGroup",
  RUMAppMonitor: "AWS::RUM::AppMonitor",
  RateBasedRule: "AWS::WAF::RateBasedRule",
  RedshiftEndpointAccess: "AWS::Redshift::EndpointAccess",
  RedshiftEndpointAuthorization: "AWS::Redshift::EndpointAuthorization",
  RedshiftEventSubscription: "AWS::Redshift::EventSubscription",
  RedshiftIntegration: "AWS::Redshift::Integration",
  RedshiftScheduledAction: "AWS::Redshift::ScheduledAction",
  RegexPatternSetV2: "AWS::WAFv2::RegexPatternSet",
  RegionalProtection: "AWS::ShieldRegional::Protection",
  RegionalRateBasedRule: "AWS::WAFRegional::RateBasedRule",
  RegionalRule: "AWS::WAFRegional::Rule",
  RegionalRuleGroup: "AWS::WAFRegional::RuleGroup",
  RegionalWebACL: "AWS::WAFRegional::WebACL",
  RegisteredHAInstance: "AWS::EC2::RegisteredHAInstance",
  ResilienceHubApp: "AWS::ResilienceHub::App",
  ResilienceHubResiliencyPolicy: "AWS::ResilienceHub::ResiliencyPolicy",
  ResourceCompliance: "AWS::Config::ResourceCompliance",
  ResourceExplorer2Index: "AWS::ResourceExplorer2::Index",
  RestApi: "AWS::ApiGateway::RestApi",
  RoboMakerRobotApplication: "AWS::RoboMaker::RobotApplication",
  RoboMakerRobotApplicationVersion: "AWS::RoboMaker::RobotApplicationVersion",
  RoboMakerSimulationApplication: "AWS::RoboMaker::SimulationApplication",
  Role: "AWS::IAM::Role",
  RolesAnywhereProfile: "AWS::RolesAnywhere::Profile",
  RolesAnywhereTrustAnchor: "AWS::RolesAnywhere::TrustAnchor",
  Route53DNSSEC: "AWS::Route53::DNSSEC",
  Route53HostedZone: "AWS::Route53::HostedZone",
  Route53ProfilesProfile: "AWS::Route53Profiles::Profile",
  Route53ProfilesProfileAssociation: "AWS::Route53Profiles::ProfileAssociation",
  Route53RecoveryControlCluster: "AWS::Route53RecoveryControl::Cluster",
  Route53RecoveryControlControlPanel: "AWS::Route53RecoveryControl::ControlPanel",
  Route53RecoveryControlRoutingControl: "AWS::Route53RecoveryControl::RoutingControl",
  Route53RecoveryControlSafetyRule: "AWS::Route53RecoveryControl::SafetyRule",
  Route53RecoveryReadinessCell: "AWS::Route53RecoveryReadiness::Cell",
  Route53RecoveryReadinessReadinessCheck: "AWS::Route53RecoveryReadiness::ReadinessCheck",
  Route53RecoveryReadinessRecoveryGroup: "AWS::Route53RecoveryReadiness::RecoveryGroup",
  Route53RecoveryReadinessResourceSet: "AWS::Route53RecoveryReadiness::ResourceSet",
  Route53ResolverFirewallDomainList: "AWS::Route53Resolver::FirewallDomainList",
  Route53ResolverFirewallRuleGroup: "AWS::Route53Resolver::FirewallRuleGroup",
  Route53ResolverFirewallRuleGroupAssociation: "AWS::Route53Resolver::FirewallRuleGroupAssociation",
  Route53ResolverResolverEndpoint: "AWS::Route53Resolver::ResolverEndpoint",
  Route53ResolverResolverQueryLoggingConfig: "AWS::Route53Resolver::ResolverQueryLoggingConfig",
  Route53ResolverResolverQueryLoggingConfigAssociation: "AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation",
  Route53ResolverResolverRule: "AWS::Route53Resolver::ResolverRule",
  Route53ResolverResolverRuleAssociation: "AWS::Route53Resolver::ResolverRuleAssociation",
  RouteTable: "AWS::EC2::RouteTable",
  Rule: "AWS::WAF::Rule",
  RuleGroup: "AWS::WAF::RuleGroup",
  RuleGroupV2: "AWS::WAFv2::RuleGroup",
  S3AccessGrant: "AWS::S3::AccessGrant",
  S3AccessGrantsInstance: "AWS::S3::AccessGrantsInstance",
  S3AccessGrantsLocation: "AWS::S3::AccessGrantsLocation",
  S3AccessPoint: "AWS::S3::AccessPoint",
  S3ExpressBucketPolicy: "AWS::S3Express::BucketPolicy",
  S3ExpressDirectoryBucket: "AWS::S3Express::DirectoryBucket",
  S3MultiRegionAccessPoint: "AWS::S3::MultiRegionAccessPoint",
  S3StorageLens: "AWS::S3::StorageLens",
  S3StorageLensGroup: "AWS::S3::StorageLensGroup",
  S3TablesTableBucket: "AWS::S3Tables::TableBucket",
  S3TablesTableBucketPolicy: "AWS::S3Tables::TableBucketPolicy",
  SESConfigurationSet: "AWS::SES::ConfigurationSet",
  SESContactList: "AWS::SES::ContactList",
  SESDedicatedIpPool: "AWS::SES::DedicatedIpPool",
  SESMailManagerTrafficPolicy: "AWS::SES::MailManagerTrafficPolicy",
  SESReceiptFilter: "AWS::SES::ReceiptFilter",
  SESReceiptRuleSet: "AWS::SES::ReceiptRuleSet",
  SESTemplate: "AWS::SES::Template",
  SSMContactsContact: "AWS::SSMContacts::Contact",
  SSMDocument: "AWS::SSM::Document",
  SSMIncidentsResponsePlan: "AWS::SSMIncidents::ResponsePlan",
  SSMResourceDataSync: "AWS::SSM::ResourceDataSync",
  SageMakerAppImageConfig: "AWS::SageMaker::AppImageConfig",
  SageMakerCodeRepository: "AWS::SageMaker::CodeRepository",
  SageMakerDataQualityJobDefinition: "AWS::SageMaker::DataQualityJobDefinition",
  SageMakerDomain: "AWS::SageMaker::Domain",
  SageMakerFeatureGroup: "AWS::SageMaker::FeatureGroup",
  SageMakerImage: "AWS::SageMaker::Image",
  SageMakerInferenceExperiment: "AWS::SageMaker::InferenceExperiment",
  SageMakerMlflowTrackingServer: "AWS::SageMaker::MlflowTrackingServer",
  SageMakerModel: "AWS::SageMaker::Model",
  SageMakerModelBiasJobDefinition: "AWS::SageMaker::ModelBiasJobDefinition",
  SageMakerModelExplainabilityJobDefinition: "AWS::SageMaker::ModelExplainabilityJobDefinition",
  SageMakerModelQualityJobDefinition: "AWS::SageMaker::ModelQualityJobDefinition",
  SageMakerNotebookInstanceLifecycleConfig: "AWS::SageMaker::NotebookInstanceLifecycleConfig",
  SageMakerStudioLifecycleConfig: "AWS::SageMaker::StudioLifecycleConfig",
  SageMakerUserProfile: "AWS::SageMaker::UserProfile",
  SageMakerWorkteam: "AWS::SageMaker::Workteam",
  ScalingPolicy: "AWS::AutoScaling::ScalingPolicy",
  ScheduledAction: "AWS::AutoScaling::ScheduledAction",
  Secret: "AWS::SecretsManager::Secret",
  SecretsManagerResourcePolicy: "AWS::SecretsManager::ResourcePolicy",
  SecretsManagerRotationSchedule: "AWS::SecretsManager::RotationSchedule",
  SecurityGroup: "AWS::EC2::SecurityGroup",
  SecurityHubStandard: "AWS::SecurityHub::Standard",
  ServiceDiscoveryHttpNamespace: "AWS::ServiceDiscovery::HttpNamespace",
  ServiceDiscoveryInstance: "AWS::ServiceDiscovery::Instance",
  ServiceDiscoveryPublicDnsNamespace: "AWS::ServiceDiscovery::PublicDnsNamespace",
  ServiceDiscoveryService: "AWS::ServiceDiscovery::Service",
  SignerSigningProfile: "AWS::Signer::SigningProfile",
  Stack: "AWS::CloudFormation::Stack",
  Stage: "AWS::ApiGateway::Stage",
  StageV2: "AWS::ApiGatewayV2::Stage",
  StepFunctionsActivity: "AWS::StepFunctions::Activity",
  StepFunctionsStateMachine: "AWS::StepFunctions::StateMachine",
  StreamingDistribution: "AWS::CloudFront::StreamingDistribution",
  Subnet: "AWS::EC2::Subnet",
  Table: "AWS::DynamoDB::Table",
  Topic: "AWS::SNS::Topic",
  Trail: "AWS::CloudTrail::Trail",
  TransferAgreement: "AWS::Transfer::Agreement",
  TransferCertificate: "AWS::Transfer::Certificate",
  TransferConnector: "AWS::Transfer::Connector",
  TransferProfile: "AWS::Transfer::Profile",
  TransferServer: "AWS::Transfer::Server",
  TransferWorkflow: "AWS::Transfer::Workflow",
  TransitGateway: "AWS::EC2::TransitGateway",
  TransitGatewayAttachment: "AWS::EC2::TransitGatewayAttachment",
  TransitGatewayRouteTable: "AWS::EC2::TransitGatewayRouteTable",
  User: "AWS::IAM::User",
  VPC: "AWS::EC2::VPC",
  VPCEndpoint: "AWS::EC2::VPCEndpoint",
  VPCEndpointService: "AWS::EC2::VPCEndpointService",
  VPCPeeringConnection: "AWS::EC2::VPCPeeringConnection",
  VPNConnection: "AWS::EC2::VPNConnection",
  VPNGateway: "AWS::EC2::VPNGateway",
  Volume: "AWS::EC2::Volume",
  WebACL: "AWS::WAF::WebACL",
  WebACLV2: "AWS::WAFv2::WebACL",
  WorkSpacesConnectionAlias: "AWS::WorkSpaces::ConnectionAlias",
  WorkSpacesWorkspace: "AWS::WorkSpaces::Workspace",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const AggregatorFilterType = {
  INCLUDE: "INCLUDE",
} as const;
/**
 * @public
 */
export type AggregatorFilterType = (typeof AggregatorFilterType)[keyof typeof AggregatorFilterType];

/**
 * @public
 * @enum
 */
export const RecordingStrategyType = {
  ALL_SUPPORTED_RESOURCE_TYPES: "ALL_SUPPORTED_RESOURCE_TYPES",
  EXCLUSION_BY_RESOURCE_TYPES: "EXCLUSION_BY_RESOURCE_TYPES",
  INCLUSION_BY_RESOURCE_TYPES: "INCLUSION_BY_RESOURCE_TYPES",
} as const;
/**
 * @public
 */
export type RecordingStrategyType = (typeof RecordingStrategyType)[keyof typeof RecordingStrategyType];

/**
 * @public
 * @enum
 */
export const RecordingFrequency = {
  CONTINUOUS: "CONTINUOUS",
  DAILY: "DAILY",
} as const;
/**
 * @public
 */
export type RecordingFrequency = (typeof RecordingFrequency)[keyof typeof RecordingFrequency];

/**
 * @public
 * @enum
 */
export const RecordingScope = {
  INTERNAL: "INTERNAL",
  PAID: "PAID",
} as const;
/**
 * @public
 */
export type RecordingScope = (typeof RecordingScope)[keyof typeof RecordingScope];

/**
 * @public
 * @enum
 */
export const ConfigurationItemStatus = {
  OK: "OK",
  ResourceDeleted: "ResourceDeleted",
  ResourceDeletedNotRecorded: "ResourceDeletedNotRecorded",
  ResourceDiscovered: "ResourceDiscovered",
  ResourceNotRecorded: "ResourceNotRecorded",
} as const;
/**
 * @public
 */
export type ConfigurationItemStatus = (typeof ConfigurationItemStatus)[keyof typeof ConfigurationItemStatus];

/**
 * @public
 * @enum
 */
export const ChronologicalOrder = {
  Forward: "Forward",
  Reverse: "Reverse",
} as const;
/**
 * @public
 */
export type ChronologicalOrder = (typeof ChronologicalOrder)[keyof typeof ChronologicalOrder];

/**
 * @public
 * @enum
 */
export const DeliveryStatus = {
  Failure: "Failure",
  Not_Applicable: "Not_Applicable",
  Success: "Success",
} as const;
/**
 * @public
 */
export type DeliveryStatus = (typeof DeliveryStatus)[keyof typeof DeliveryStatus];

/**
 * @public
 * @enum
 */
export const ConfigRuleState = {
  ACTIVE: "ACTIVE",
  DELETING: "DELETING",
  DELETING_RESULTS: "DELETING_RESULTS",
  EVALUATING: "EVALUATING",
} as const;
/**
 * @public
 */
export type ConfigRuleState = (typeof ConfigRuleState)[keyof typeof ConfigRuleState];

/**
 * @public
 * @enum
 */
export const MaximumExecutionFrequency = {
  One_Hour: "One_Hour",
  Six_Hours: "Six_Hours",
  Three_Hours: "Three_Hours",
  Twelve_Hours: "Twelve_Hours",
  TwentyFour_Hours: "TwentyFour_Hours",
} as const;
/**
 * @public
 */
export type MaximumExecutionFrequency = (typeof MaximumExecutionFrequency)[keyof typeof MaximumExecutionFrequency];

/**
 * @public
 * @enum
 */
export const Owner = {
  Aws: "AWS",
  Custom_Lambda: "CUSTOM_LAMBDA",
  Custom_Policy: "CUSTOM_POLICY",
} as const;
/**
 * @public
 */
export type Owner = (typeof Owner)[keyof typeof Owner];

/**
 * @public
 * @enum
 */
export const EventSource = {
  Aws_Config: "aws.config",
} as const;
/**
 * @public
 */
export type EventSource = (typeof EventSource)[keyof typeof EventSource];

/**
 * @public
 * @enum
 */
export const MessageType = {
  ConfigurationItemChangeNotification: "ConfigurationItemChangeNotification",
  ConfigurationSnapshotDeliveryCompleted: "ConfigurationSnapshotDeliveryCompleted",
  OversizedConfigurationItemChangeNotification: "OversizedConfigurationItemChangeNotification",
  ScheduledNotification: "ScheduledNotification",
} as const;
/**
 * @public
 */
export type MessageType = (typeof MessageType)[keyof typeof MessageType];

/**
 * @public
 * @enum
 */
export const ConfigRuleComplianceSummaryGroupKey = {
  ACCOUNT_ID: "ACCOUNT_ID",
  AWS_REGION: "AWS_REGION",
} as const;
/**
 * @public
 */
export type ConfigRuleComplianceSummaryGroupKey =
  (typeof ConfigRuleComplianceSummaryGroupKey)[keyof typeof ConfigRuleComplianceSummaryGroupKey];

/**
 * @public
 * @enum
 */
export const ConfigurationRecorderFilterName = {
  RecordingScope: "recordingScope",
} as const;
/**
 * @public
 */
export type ConfigurationRecorderFilterName =
  (typeof ConfigurationRecorderFilterName)[keyof typeof ConfigurationRecorderFilterName];

/**
 * @public
 * @enum
 */
export const RecorderStatus = {
  Failure: "Failure",
  NotApplicable: "NotApplicable",
  Pending: "Pending",
  Success: "Success",
} as const;
/**
 * @public
 */
export type RecorderStatus = (typeof RecorderStatus)[keyof typeof RecorderStatus];

/**
 * @public
 * @enum
 */
export const ConformancePackState = {
  CREATE_COMPLETE: "CREATE_COMPLETE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ConformancePackState = (typeof ConformancePackState)[keyof typeof ConformancePackState];

/**
 * @public
 * @enum
 */
export const OrganizationConfigRuleTriggerTypeNoSN = {
  CONFIGURATION_ITEM_CHANGE_NOTIFICATION: "ConfigurationItemChangeNotification",
  OVERSIZED_CONFIGURATION_ITEM_CHANGE_NOTIFCATION: "OversizedConfigurationItemChangeNotification",
} as const;
/**
 * @public
 */
export type OrganizationConfigRuleTriggerTypeNoSN =
  (typeof OrganizationConfigRuleTriggerTypeNoSN)[keyof typeof OrganizationConfigRuleTriggerTypeNoSN];

/**
 * @public
 * @enum
 */
export const OrganizationConfigRuleTriggerType = {
  CONFIGURATION_ITEM_CHANGE_NOTIFICATION: "ConfigurationItemChangeNotification",
  OVERSIZED_CONFIGURATION_ITEM_CHANGE_NOTIFCATION: "OversizedConfigurationItemChangeNotification",
  SCHEDULED_NOTIFICATION: "ScheduledNotification",
} as const;
/**
 * @public
 */
export type OrganizationConfigRuleTriggerType =
  (typeof OrganizationConfigRuleTriggerType)[keyof typeof OrganizationConfigRuleTriggerType];

/**
 * @public
 * @enum
 */
export const OrganizationRuleStatus = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  CREATE_SUCCESSFUL: "CREATE_SUCCESSFUL",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  DELETE_SUCCESSFUL: "DELETE_SUCCESSFUL",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
  UPDATE_SUCCESSFUL: "UPDATE_SUCCESSFUL",
} as const;
/**
 * @public
 */
export type OrganizationRuleStatus = (typeof OrganizationRuleStatus)[keyof typeof OrganizationRuleStatus];

/**
 * @public
 * @enum
 */
export const OrganizationResourceStatus = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  CREATE_SUCCESSFUL: "CREATE_SUCCESSFUL",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  DELETE_SUCCESSFUL: "DELETE_SUCCESSFUL",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
  UPDATE_SUCCESSFUL: "UPDATE_SUCCESSFUL",
} as const;
/**
 * @public
 */
export type OrganizationResourceStatus = (typeof OrganizationResourceStatus)[keyof typeof OrganizationResourceStatus];

/**
 * @public
 * @enum
 */
export const ResourceValueType = {
  RESOURCE_ID: "RESOURCE_ID",
} as const;
/**
 * @public
 */
export type ResourceValueType = (typeof ResourceValueType)[keyof typeof ResourceValueType];

/**
 * @public
 * @enum
 */
export const RemediationTargetType = {
  SSM_DOCUMENT: "SSM_DOCUMENT",
} as const;
/**
 * @public
 */
export type RemediationTargetType = (typeof RemediationTargetType)[keyof typeof RemediationTargetType];

/**
 * @public
 * @enum
 */
export const RemediationExecutionState = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED: "QUEUED",
  SUCCEEDED: "SUCCEEDED",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type RemediationExecutionState = (typeof RemediationExecutionState)[keyof typeof RemediationExecutionState];

/**
 * @public
 * @enum
 */
export const RemediationExecutionStepState = {
  EXITED: "EXITED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  SUCCEEDED: "SUCCEEDED",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type RemediationExecutionStepState =
  (typeof RemediationExecutionStepState)[keyof typeof RemediationExecutionStepState];

/**
 * @public
 * @enum
 */
export const ResourceEvaluationStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type ResourceEvaluationStatus = (typeof ResourceEvaluationStatus)[keyof typeof ResourceEvaluationStatus];

/**
 * @public
 * @enum
 */
export const ResourceCountGroupKey = {
  ACCOUNT_ID: "ACCOUNT_ID",
  AWS_REGION: "AWS_REGION",
  RESOURCE_TYPE: "RESOURCE_TYPE",
} as const;
/**
 * @public
 */
export type ResourceCountGroupKey = (typeof ResourceCountGroupKey)[keyof typeof ResourceCountGroupKey];

/**
 * @public
 * @enum
 */
export const MemberAccountRuleStatus = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  CREATE_SUCCESSFUL: "CREATE_SUCCESSFUL",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  DELETE_SUCCESSFUL: "DELETE_SUCCESSFUL",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
  UPDATE_SUCCESSFUL: "UPDATE_SUCCESSFUL",
} as const;
/**
 * @public
 */
export type MemberAccountRuleStatus = (typeof MemberAccountRuleStatus)[keyof typeof MemberAccountRuleStatus];

/**
 * @public
 * @enum
 */
export const OrganizationResourceDetailedStatus = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  CREATE_SUCCESSFUL: "CREATE_SUCCESSFUL",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  DELETE_SUCCESSFUL: "DELETE_SUCCESSFUL",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
  UPDATE_SUCCESSFUL: "UPDATE_SUCCESSFUL",
} as const;
/**
 * @public
 */
export type OrganizationResourceDetailedStatus =
  (typeof OrganizationResourceDetailedStatus)[keyof typeof OrganizationResourceDetailedStatus];

/**
 * @public
 * @enum
 */
export const ResourceConfigurationSchemaType = {
  CFN_RESOURCE_SCHEMA: "CFN_RESOURCE_SCHEMA",
} as const;
/**
 * @public
 */
export type ResourceConfigurationSchemaType =
  (typeof ResourceConfigurationSchemaType)[keyof typeof ResourceConfigurationSchemaType];

/**
 * @public
 * @enum
 */
export const SortBy = {
  SCORE: "SCORE",
} as const;
/**
 * @public
 */
export type SortBy = (typeof SortBy)[keyof typeof SortBy];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
