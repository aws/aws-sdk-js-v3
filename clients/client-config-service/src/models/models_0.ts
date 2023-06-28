// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ConfigServiceServiceException as __BaseException } from "./ConfigServiceServiceException";

/**
 * @public
 * <p>A collection of accounts and regions.</p>
 */
export interface AccountAggregationSource {
  /**
   * <p>The 12-digit account ID of the account being aggregated.
   * 		</p>
   */
  AccountIds: string[] | undefined;

  /**
   * <p>If true, aggregate existing Config regions and future
   * 			regions.</p>
   */
  AllAwsRegions?: boolean;

  /**
   * <p>The source regions being aggregated.</p>
   */
  AwsRegions?: string[];
}

/**
 * @public
 * <p>The number of Amazon Web Services resources or Config rules responsible for
 * 			the current compliance of the item, up to a maximum
 * 			number.</p>
 */
export interface ComplianceContributorCount {
  /**
   * <p>The number of Amazon Web Services resources or Config rules responsible for
   * 			the current compliance of the item.</p>
   */
  CappedCount?: number;

  /**
   * <p>Indicates whether the maximum count is reached.</p>
   */
  CapExceeded?: boolean;
}

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
 * <p>Indicates whether an Amazon Web Services resource or Config rule is
 * 			compliant and provides the number of contributors that affect the
 * 			compliance.</p>
 */
export interface Compliance {
  /**
   * <p>Indicates whether an Amazon Web Services resource or Config rule is
   * 			compliant.</p>
   *          <p>A resource is compliant if it complies with all of the Config rules that evaluate it. A resource is noncompliant if it does
   * 			not comply with one or more of these rules.</p>
   *          <p>A rule is compliant if all of the resources that the rule
   * 			evaluates comply with it. A rule is noncompliant if any of these
   * 			resources do not comply.</p>
   *          <p>Config returns the <code>INSUFFICIENT_DATA</code> value
   * 			when no evaluation results are available for the Amazon Web Services resource or Config rule.</p>
   *          <p>For the <code>Compliance</code> data type, Config supports
   * 			only <code>COMPLIANT</code>, <code>NON_COMPLIANT</code>, and
   * 				<code>INSUFFICIENT_DATA</code> values. Config does not
   * 			support the <code>NOT_APPLICABLE</code> value for the
   * 				<code>Compliance</code> data type.</p>
   */
  ComplianceType?: ComplianceType | string;

  /**
   * <p>The number of Amazon Web Services resources or Config rules that cause a
   * 			result of <code>NON_COMPLIANT</code>, up to a maximum
   * 			number.</p>
   */
  ComplianceContributorCount?: ComplianceContributorCount;
}

/**
 * @public
 * <p>Indicates whether an Config rule is compliant based on
 * 			account ID, region, compliance, and rule name.</p>
 *          <p>A rule is compliant if all of the resources that the rule
 * 			evaluated comply with it. It is noncompliant if any of these
 * 			resources do not comply.</p>
 */
export interface AggregateComplianceByConfigRule {
  /**
   * <p>The name of the Config rule.</p>
   */
  ConfigRuleName?: string;

  /**
   * <p>Indicates whether an Amazon Web Services resource or Config rule is
   * 			compliant and provides the number of contributors that affect the
   * 			compliance.</p>
   */
  Compliance?: Compliance;

  /**
   * <p>The 12-digit account ID of the source account.</p>
   */
  AccountId?: string;

  /**
   * <p>The source region from where the data is aggregated.</p>
   */
  AwsRegion?: string;
}

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
 * <p>Provides the number of compliant and noncompliant rules within a conformance pack.
 * 			Also provides the compliance status of the conformance pack and the total rule count which includes compliant rules, noncompliant rules, and rules that cannot be evaluated due to insufficient data.</p>
 *          <p>A conformance pack is compliant if all of the rules in a conformance packs are compliant. It is noncompliant if any of the rules are not compliant.
 * 			The compliance status of a conformance pack is INSUFFICIENT_DATA only if all rules within a conformance pack cannot be evaluated due to insufficient data.
 * 			If some of the rules in a conformance pack are compliant but the compliance status of other rules in that same conformance pack is INSUFFICIENT_DATA, the conformance pack shows compliant.</p>
 */
export interface AggregateConformancePackCompliance {
  /**
   * <p>The compliance status of the conformance pack.</p>
   */
  ComplianceType?: ConformancePackComplianceType | string;

  /**
   * <p>The number of compliant Config Rules.</p>
   */
  CompliantRuleCount?: number;

  /**
   * <p>The number of noncompliant Config Rules.</p>
   */
  NonCompliantRuleCount?: number;

  /**
   * <p>Total number of compliant rules, noncompliant rules, and the rules that do not have any applicable resources to evaluate upon resulting in insufficient data.</p>
   */
  TotalRuleCount?: number;
}

/**
 * @public
 * <p>Provides aggregate compliance of the conformance pack. Indicates whether a conformance pack is compliant based on the name of the conformance pack, account ID, and region.</p>
 *          <p>A conformance pack is compliant if all of the rules in a conformance packs are compliant. It is noncompliant if any of the rules are not compliant.
 * 			The compliance status of a conformance pack is INSUFFICIENT_DATA only if all rules within a conformance pack cannot be evaluated due to insufficient data.
 * 			If some of the rules in a conformance pack are compliant but the compliance status of other rules in that same conformance pack is INSUFFICIENT_DATA, the conformance pack shows
 * 			compliant.</p>
 */
export interface AggregateComplianceByConformancePack {
  /**
   * <p>The name of the conformance pack.</p>
   */
  ConformancePackName?: string;

  /**
   * <p>The compliance status of the conformance pack.</p>
   */
  Compliance?: AggregateConformancePackCompliance;

  /**
   * <p>The 12-digit Amazon Web Services account ID of the source account.</p>
   */
  AccountId?: string;

  /**
   * <p>The source Amazon Web Services Region from where the data is aggregated.</p>
   */
  AwsRegion?: string;
}

/**
 * @public
 * <p>The number of Config rules or Amazon Web Services resources that are
 * 			compliant and noncompliant.</p>
 */
export interface ComplianceSummary {
  /**
   * <p>The number of Config rules or Amazon Web Services resources that are
   * 			compliant, up to a maximum of 25 for rules and 100 for
   * 			resources.</p>
   */
  CompliantResourceCount?: ComplianceContributorCount;

  /**
   * <p>The number of Config rules or Amazon Web Services resources that are
   * 			noncompliant, up to a maximum of 25 for rules and 100 for
   * 			resources.</p>
   */
  NonCompliantResourceCount?: ComplianceContributorCount;

  /**
   * <p>The time that Config created the compliance
   * 			summary.</p>
   */
  ComplianceSummaryTimestamp?: Date;
}

/**
 * @public
 * <p>Returns the number of compliant and noncompliant rules for one
 * 			or more accounts and regions in an aggregator.</p>
 */
export interface AggregateComplianceCount {
  /**
   * <p>The 12-digit account ID or region based on the GroupByKey
   * 			value.</p>
   */
  GroupName?: string;

  /**
   * <p>The number of compliant and noncompliant Config
   * 			rules.</p>
   */
  ComplianceSummary?: ComplianceSummary;
}

/**
 * @public
 * <p>The number of conformance packs that are compliant and noncompliant.</p>
 */
export interface AggregateConformancePackComplianceCount {
  /**
   * <p>Number of compliant conformance packs.</p>
   */
  CompliantConformancePackCount?: number;

  /**
   * <p>Number of noncompliant conformance packs.</p>
   */
  NonCompliantConformancePackCount?: number;
}

/**
 * @public
 * <p>Filters the conformance packs based on an account ID, region, compliance type, and the name of the conformance pack.</p>
 */
export interface AggregateConformancePackComplianceFilters {
  /**
   * <p>The name of the conformance pack.</p>
   */
  ConformancePackName?: string;

  /**
   * <p>The compliance status of the conformance pack.</p>
   */
  ComplianceType?: ConformancePackComplianceType | string;

  /**
   * <p>The 12-digit Amazon Web Services account ID of the source account.</p>
   */
  AccountId?: string;

  /**
   * <p>The source Amazon Web Services Region from where the data is aggregated.</p>
   */
  AwsRegion?: string;
}

/**
 * @public
 * <p>Provides a summary of compliance based on either account ID or region. </p>
 */
export interface AggregateConformancePackComplianceSummary {
  /**
   * <p>Returns an <code>AggregateConformancePackComplianceCount</code> object. </p>
   */
  ComplianceSummary?: AggregateConformancePackComplianceCount;

  /**
   * <p>Groups the result based on Amazon Web Services account ID or Amazon Web Services Region.</p>
   */
  GroupName?: string;
}

/**
 * @public
 * <p>Filters the results based on account ID and region. </p>
 */
export interface AggregateConformancePackComplianceSummaryFilters {
  /**
   * <p>The 12-digit Amazon Web Services account ID of the source account.</p>
   */
  AccountId?: string;

  /**
   * <p>The source Amazon Web Services Region from where the data is aggregated.</p>
   */
  AwsRegion?: string;
}

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
 * <p>The current sync status between the source and the aggregator
 * 			account.</p>
 */
export interface AggregatedSourceStatus {
  /**
   * <p>The source account ID or an organization.</p>
   */
  SourceId?: string;

  /**
   * <p>The source account or an organization.</p>
   */
  SourceType?: AggregatedSourceType | string;

  /**
   * <p>The region authorized to collect aggregated data.</p>
   */
  AwsRegion?: string;

  /**
   * <p>Filters the last updated status type.</p>
   *          <ul>
   *             <li>
   *                <p>Valid value FAILED indicates errors while moving
   * 					data.</p>
   *             </li>
   *             <li>
   *                <p>Valid value SUCCEEDED indicates the data was
   * 					successfully moved.</p>
   *             </li>
   *             <li>
   *                <p>Valid value OUTDATED indicates the data is not the most
   * 					recent.</p>
   *             </li>
   *          </ul>
   */
  LastUpdateStatus?: AggregatedSourceStatusType | string;

  /**
   * <p>The time of the last update.</p>
   */
  LastUpdateTime?: Date;

  /**
   * <p>The error code that Config returned when the source account
   * 			aggregation last failed.</p>
   */
  LastErrorCode?: string;

  /**
   * <p>The message indicating that the source account aggregation
   * 			failed due to an error.</p>
   */
  LastErrorMessage?: string;
}

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
 * <p>Identifies an Config rule that evaluated an Amazon Web Services resource,
 * 			and provides the type and ID of the resource that the rule
 * 			evaluated.</p>
 */
export interface EvaluationResultQualifier {
  /**
   * <p>The name of the Config rule that was used in the
   * 			evaluation.</p>
   */
  ConfigRuleName?: string;

  /**
   * <p>The type of Amazon Web Services resource that was evaluated.</p>
   */
  ResourceType?: string;

  /**
   * <p>The ID of the evaluated Amazon Web Services resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The mode of an evaluation. The valid values are Detective or Proactive.</p>
   */
  EvaluationMode?: EvaluationMode | string;
}

/**
 * @public
 * <p>Uniquely identifies an evaluation result.</p>
 */
export interface EvaluationResultIdentifier {
  /**
   * <p>Identifies an Config rule used to evaluate an Amazon Web Services resource,
   * 			and provides the type and ID of the evaluated resource.</p>
   */
  EvaluationResultQualifier?: EvaluationResultQualifier;

  /**
   * <p>The time of the event that triggered the evaluation of your Amazon Web Services
   * 			resources. The time can indicate when Config delivered a
   * 			configuration item change notification, or it can indicate when Config delivered the configuration snapshot, depending on which
   * 			event triggered the evaluation.</p>
   */
  OrderingTimestamp?: Date;

  /**
   * <p>A Unique ID for an evaluation result.</p>
   */
  ResourceEvaluationId?: string;
}

/**
 * @public
 * <p>The details of an Config evaluation for an account ID and
 * 			region in an aggregator. Provides the Amazon Web Services resource that was
 * 			evaluated, the compliance of the resource, related time stamps, and
 * 			supplementary information. </p>
 */
export interface AggregateEvaluationResult {
  /**
   * <p>Uniquely identifies the evaluation result.</p>
   */
  EvaluationResultIdentifier?: EvaluationResultIdentifier;

  /**
   * <p>The resource compliance status.</p>
   *          <p>For the <code>AggregationEvaluationResult</code> data type, Config supports only the <code>COMPLIANT</code> and
   * 				<code>NON_COMPLIANT</code>. Config does not support the
   * 				<code>NOT_APPLICABLE</code> and <code>INSUFFICIENT_DATA</code>
   * 			value.</p>
   */
  ComplianceType?: ComplianceType | string;

  /**
   * <p>The time when Config recorded the aggregate evaluation
   * 			result.</p>
   */
  ResultRecordedTime?: Date;

  /**
   * <p>The time when the Config rule evaluated the Amazon Web Services
   * 			resource.</p>
   */
  ConfigRuleInvokedTime?: Date;

  /**
   * <p>Supplementary information about how the agrregate evaluation
   * 			determined the compliance.</p>
   */
  Annotation?: string;

  /**
   * <p>The 12-digit account ID of the source account.</p>
   */
  AccountId?: string;

  /**
   * <p>The source region from where the data is aggregated.</p>
   */
  AwsRegion?: string;
}

/**
 * @public
 * @enum
 */
export const ResourceType = {
  AccessAnalyzerAnalyzer: "AWS::AccessAnalyzer::Analyzer",
  AccountPublicAccessBlock: "AWS::S3::AccountPublicAccessBlock",
  Alarm: "AWS::CloudWatch::Alarm",
  AmazonMQBroker: "AWS::AmazonMQ::Broker",
  AmplifyApp: "AWS::Amplify::App",
  Api: "AWS::ApiGatewayV2::Api",
  AppConfigApplication: "AWS::AppConfig::Application",
  AppConfigConfigurationProfile: "AWS::AppConfig::ConfigurationProfile",
  AppConfigDeploymentStrategy: "AWS::AppConfig::DeploymentStrategy",
  AppConfigEnvironment: "AWS::AppConfig::Environment",
  AppFlowFlow: "AWS::AppFlow::Flow",
  AppMeshVirtualNode: "AWS::AppMesh::VirtualNode",
  AppMeshVirtualService: "AWS::AppMesh::VirtualService",
  AppRunnerVpcConnector: "AWS::AppRunner::VpcConnector",
  AppStreamApplication: "AWS::AppStream::Application",
  AppStreamDirectoryConfig: "AWS::AppStream::DirectoryConfig",
  AppSyncGraphQLApi: "AWS::AppSync::GraphQLApi",
  Application: "AWS::ElasticBeanstalk::Application",
  ApplicationVersion: "AWS::ElasticBeanstalk::ApplicationVersion",
  AssociationCompliance: "AWS::SSM::AssociationCompliance",
  AthenaDataCatalog: "AWS::Athena::DataCatalog",
  AthenaWorkGroup: "AWS::Athena::WorkGroup",
  AuditManagerAssessment: "AWS::AuditManager::Assessment",
  AutoScalingGroup: "AWS::AutoScaling::AutoScalingGroup",
  AutoScalingWarmPool: "AWS::AutoScaling::WarmPool",
  BackupPlan: "AWS::Backup::BackupPlan",
  BackupRecoveryPoint: "AWS::Backup::RecoveryPoint",
  BackupReportPlan: "AWS::Backup::ReportPlan",
  BackupSelection: "AWS::Backup::BackupSelection",
  BackupVault: "AWS::Backup::BackupVault",
  BatchComputeEnvironment: "AWS::Batch::ComputeEnvironment",
  BatchJobQueue: "AWS::Batch::JobQueue",
  Bucket: "AWS::S3::Bucket",
  BudgetsBudgetsAction: "AWS::Budgets::BudgetsAction",
  CassandraKeyspace: "AWS::Cassandra::Keyspace",
  Certificate: "AWS::ACM::Certificate",
  Cloud9EnvironmentEC2: "AWS::Cloud9::EnvironmentEC2",
  CloudFormationProduct: "AWS::ServiceCatalog::CloudFormationProduct",
  CloudFormationProvisionedProduct: "AWS::ServiceCatalog::CloudFormationProvisionedProduct",
  CloudWatchMetricStream: "AWS::CloudWatch::MetricStream",
  Cluster: "AWS::Redshift::Cluster",
  ClusterParameterGroup: "AWS::Redshift::ClusterParameterGroup",
  ClusterSecurityGroup: "AWS::Redshift::ClusterSecurityGroup",
  ClusterSnapshot: "AWS::Redshift::ClusterSnapshot",
  ClusterSubnetGroup: "AWS::Redshift::ClusterSubnetGroup",
  CodeArtifactRepository: "AWS::CodeArtifact::Repository",
  CodeDeployApplication: "AWS::CodeDeploy::Application",
  CodeDeployDeploymentConfig: "AWS::CodeDeploy::DeploymentConfig",
  CodeDeployDeploymentGroup: "AWS::CodeDeploy::DeploymentGroup",
  CodeGuruReviewerRepositoryAssociation: "AWS::CodeGuruReviewer::RepositoryAssociation",
  ConformancePackCompliance: "AWS::Config::ConformancePackCompliance",
  ConnectPhoneNumber: "AWS::Connect::PhoneNumber",
  CustomerGateway: "AWS::EC2::CustomerGateway",
  CustomerProfilesDomain: "AWS::CustomerProfiles::Domain",
  DBCluster: "AWS::RDS::DBCluster",
  DBClusterSnapshot: "AWS::RDS::DBClusterSnapshot",
  DBInstance: "AWS::RDS::DBInstance",
  DBSecurityGroup: "AWS::RDS::DBSecurityGroup",
  DBSnapshot: "AWS::RDS::DBSnapshot",
  DBSubnetGroup: "AWS::RDS::DBSubnetGroup",
  DMSCertificate: "AWS::DMS::Certificate",
  DMSEventSubscription: "AWS::DMS::EventSubscription",
  DMSReplicationSubnetGroup: "AWS::DMS::ReplicationSubnetGroup",
  DataSyncLocationEFS: "AWS::DataSync::LocationEFS",
  DataSyncLocationFSxLustre: "AWS::DataSync::LocationFSxLustre",
  DataSyncLocationFSxWindows: "AWS::DataSync::LocationFSxWindows",
  DataSyncLocationHDFS: "AWS::DataSync::LocationHDFS",
  DataSyncLocationNFS: "AWS::DataSync::LocationNFS",
  DataSyncLocationObjectStorage: "AWS::DataSync::LocationObjectStorage",
  DataSyncLocationS3: "AWS::DataSync::LocationS3",
  DataSyncLocationSMB: "AWS::DataSync::LocationSMB",
  DataSyncTask: "AWS::DataSync::Task",
  DetectiveGraph: "AWS::Detective::Graph",
  DeviceFarmInstanceProfile: "AWS::DeviceFarm::InstanceProfile",
  DeviceFarmProject: "AWS::DeviceFarm::Project",
  DeviceFarmTestGridProject: "AWS::DeviceFarm::TestGridProject",
  Distribution: "AWS::CloudFront::Distribution",
  Domain: "AWS::Elasticsearch::Domain",
  EC2DHCPOptions: "AWS::EC2::DHCPOptions",
  EC2EC2Fleet: "AWS::EC2::EC2Fleet",
  EC2IPAM: "AWS::EC2::IPAM",
  EC2NetworkInsightsPath: "AWS::EC2::NetworkInsightsPath",
  EC2PrefixList: "AWS::EC2::PrefixList",
  EC2SpotFleet: "AWS::EC2::SpotFleet",
  EC2SubnetRouteTableAssociation: "AWS::EC2::SubnetRouteTableAssociation",
  EC2TrafficMirrorFilter: "AWS::EC2::TrafficMirrorFilter",
  EC2TrafficMirrorSession: "AWS::EC2::TrafficMirrorSession",
  EC2TrafficMirrorTarget: "AWS::EC2::TrafficMirrorTarget",
  ECRPublicRepository: "AWS::ECR::PublicRepository",
  ECRPullThroughCacheRule: "AWS::ECR::PullThroughCacheRule",
  ECRRegistryPolicy: "AWS::ECR::RegistryPolicy",
  ECRRepository: "AWS::ECR::Repository",
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
  EMRSecurityConfiguration: "AWS::EMR::SecurityConfiguration",
  EgressOnlyInternetGateway: "AWS::EC2::EgressOnlyInternetGateway",
  EncryptionConfig: "AWS::XRay::EncryptionConfig",
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
  EvidentlyProject: "AWS::Evidently::Project",
  FISExperimentTemplate: "AWS::FIS::ExperimentTemplate",
  FileData: "AWS::SSM::FileData",
  FlowLog: "AWS::EC2::FlowLog",
  ForecastDataset: "AWS::Forecast::Dataset",
  FraudDetectorEntityType: "AWS::FraudDetector::EntityType",
  FraudDetectorLabel: "AWS::FraudDetector::Label",
  FraudDetectorOutcome: "AWS::FraudDetector::Outcome",
  FraudDetectorVariable: "AWS::FraudDetector::Variable",
  Function: "AWS::Lambda::Function",
  GlobalAcceleratorAccelerator: "AWS::GlobalAccelerator::Accelerator",
  GlobalAcceleratorEndpointGroup: "AWS::GlobalAccelerator::EndpointGroup",
  GlobalAcceleratorListener: "AWS::GlobalAccelerator::Listener",
  GlueClassifier: "AWS::Glue::Classifier",
  GlueJob: "AWS::Glue::Job",
  GlueMLTransform: "AWS::Glue::MLTransform",
  GroundStationConfig: "AWS::GroundStation::Config",
  Group: "AWS::IAM::Group",
  GuardDutyDetector: "AWS::GuardDuty::Detector",
  GuardDutyFilter: "AWS::GuardDuty::Filter",
  GuardDutyIPSet: "AWS::GuardDuty::IPSet",
  GuardDutyThreatIntelSet: "AWS::GuardDuty::ThreatIntelSet",
  HealthLakeFHIRDatastore: "AWS::HealthLake::FHIRDatastore",
  Host: "AWS::EC2::Host",
  IAMSAMLProvider: "AWS::IAM::SAMLProvider",
  IAMServerCertificate: "AWS::IAM::ServerCertificate",
  IPSetV2: "AWS::WAFv2::IPSet",
  IVSChannel: "AWS::IVS::Channel",
  IVSPlaybackKeyPair: "AWS::IVS::PlaybackKeyPair",
  IVSRecordingConfiguration: "AWS::IVS::RecordingConfiguration",
  ImageBuilderContainerRecipe: "AWS::ImageBuilder::ContainerRecipe",
  ImageBuilderDistributionConfiguration: "AWS::ImageBuilder::DistributionConfiguration",
  ImageBuilderImagePipeline: "AWS::ImageBuilder::ImagePipeline",
  ImageBuilderInfrastructureConfiguration: "AWS::ImageBuilder::InfrastructureConfiguration",
  Instance: "AWS::EC2::Instance",
  InternetGateway: "AWS::EC2::InternetGateway",
  IoTAccountAuditConfiguration: "AWS::IoT::AccountAuditConfiguration",
  IoTAnalyticsChannel: "AWS::IoTAnalytics::Channel",
  IoTAnalyticsDataset: "AWS::IoTAnalytics::Dataset",
  IoTAnalyticsDatastore: "AWS::IoTAnalytics::Datastore",
  IoTAnalyticsPipeline: "AWS::IoTAnalytics::Pipeline",
  IoTAuthorizer: "AWS::IoT::Authorizer",
  IoTCustomMetric: "AWS::IoT::CustomMetric",
  IoTDimension: "AWS::IoT::Dimension",
  IoTEventsAlarmModel: "AWS::IoTEvents::AlarmModel",
  IoTEventsDetectorModel: "AWS::IoTEvents::DetectorModel",
  IoTEventsInput: "AWS::IoTEvents::Input",
  IoTFleetMetric: "AWS::IoT::FleetMetric",
  IoTMitigationAction: "AWS::IoT::MitigationAction",
  IoTPolicy: "AWS::IoT::Policy",
  IoTRoleAlias: "AWS::IoT::RoleAlias",
  IoTScheduledAudit: "AWS::IoT::ScheduledAudit",
  IoTSecurityProfile: "AWS::IoT::SecurityProfile",
  IoTSiteWiseAssetModel: "AWS::IoTSiteWise::AssetModel",
  IoTSiteWiseDashboard: "AWS::IoTSiteWise::Dashboard",
  IoTSiteWiseGateway: "AWS::IoTSiteWise::Gateway",
  IoTSiteWisePortal: "AWS::IoTSiteWise::Portal",
  IoTSiteWiseProject: "AWS::IoTSiteWise::Project",
  IoTTwinMakerEntity: "AWS::IoTTwinMaker::Entity",
  IoTTwinMakerScene: "AWS::IoTTwinMaker::Scene",
  IoTTwinMakerWorkspace: "AWS::IoTTwinMaker::Workspace",
  IoTWirelessServiceProfile: "AWS::IoTWireless::ServiceProfile",
  Key: "AWS::KMS::Key",
  KinesisAnalyticsV2Application: "AWS::KinesisAnalyticsV2::Application",
  KinesisFirehoseDeliveryStream: "AWS::KinesisFirehose::DeliveryStream",
  KinesisStream: "AWS::Kinesis::Stream",
  KinesisStreamConsumer: "AWS::Kinesis::StreamConsumer",
  KinesisVideoSignalingChannel: "AWS::KinesisVideo::SignalingChannel",
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
  LookoutMetricsAlert: "AWS::LookoutMetrics::Alert",
  LookoutVisionProject: "AWS::LookoutVision::Project",
  MSKCluster: "AWS::MSK::Cluster",
  ManagedInstanceInventory: "AWS::SSM::ManagedInstanceInventory",
  ManagedRuleSetV2: "AWS::WAFv2::ManagedRuleSet",
  MediaPackagePackagingConfiguration: "AWS::MediaPackage::PackagingConfiguration",
  MediaPackagePackagingGroup: "AWS::MediaPackage::PackagingGroup",
  NatGateway: "AWS::EC2::NatGateway",
  NetworkAcl: "AWS::EC2::NetworkAcl",
  NetworkFirewallFirewall: "AWS::NetworkFirewall::Firewall",
  NetworkFirewallFirewallPolicy: "AWS::NetworkFirewall::FirewallPolicy",
  NetworkFirewallRuleGroup: "AWS::NetworkFirewall::RuleGroup",
  NetworkInsightsAccessScopeAnalysis: "AWS::EC2::NetworkInsightsAccessScopeAnalysis",
  NetworkInterface: "AWS::EC2::NetworkInterface",
  NetworkManagerDevice: "AWS::NetworkManager::Device",
  NetworkManagerGlobalNetwork: "AWS::NetworkManager::GlobalNetwork",
  NetworkManagerLink: "AWS::NetworkManager::Link",
  NetworkManagerSite: "AWS::NetworkManager::Site",
  NetworkManagerTransitGatewayRegistration: "AWS::NetworkManager::TransitGatewayRegistration",
  OpenSearchDomain: "AWS::OpenSearch::Domain",
  PanoramaPackage: "AWS::Panorama::Package",
  PatchCompliance: "AWS::SSM::PatchCompliance",
  PinpointApp: "AWS::Pinpoint::App",
  PinpointApplicationSettings: "AWS::Pinpoint::ApplicationSettings",
  PinpointCampaign: "AWS::Pinpoint::Campaign",
  PinpointInAppTemplate: "AWS::Pinpoint::InAppTemplate",
  PinpointSegment: "AWS::Pinpoint::Segment",
  Pipeline: "AWS::CodePipeline::Pipeline",
  Policy: "AWS::IAM::Policy",
  Portfolio: "AWS::ServiceCatalog::Portfolio",
  Project: "AWS::CodeBuild::Project",
  Protection: "AWS::Shield::Protection",
  QLDBLedger: "AWS::QLDB::Ledger",
  Queue: "AWS::SQS::Queue",
  RDSGlobalCluster: "AWS::RDS::GlobalCluster",
  RUMAppMonitor: "AWS::RUM::AppMonitor",
  RateBasedRule: "AWS::WAF::RateBasedRule",
  RedshiftEventSubscription: "AWS::Redshift::EventSubscription",
  RedshiftScheduledAction: "AWS::Redshift::ScheduledAction",
  RegexPatternSetV2: "AWS::WAFv2::RegexPatternSet",
  RegionalProtection: "AWS::ShieldRegional::Protection",
  RegionalRateBasedRule: "AWS::WAFRegional::RateBasedRule",
  RegionalRule: "AWS::WAFRegional::Rule",
  RegionalRuleGroup: "AWS::WAFRegional::RuleGroup",
  RegionalWebACL: "AWS::WAFRegional::WebACL",
  RegisteredHAInstance: "AWS::EC2::RegisteredHAInstance",
  ResilienceHubResiliencyPolicy: "AWS::ResilienceHub::ResiliencyPolicy",
  ResourceCompliance: "AWS::Config::ResourceCompliance",
  RestApi: "AWS::ApiGateway::RestApi",
  RoboMakerRobotApplication: "AWS::RoboMaker::RobotApplication",
  RoboMakerRobotApplicationVersion: "AWS::RoboMaker::RobotApplicationVersion",
  RoboMakerSimulationApplication: "AWS::RoboMaker::SimulationApplication",
  Role: "AWS::IAM::Role",
  Route53HostedZone: "AWS::Route53::HostedZone",
  Route53RecoveryControlCluster: "AWS::Route53RecoveryControl::Cluster",
  Route53RecoveryControlControlPanel: "AWS::Route53RecoveryControl::ControlPanel",
  Route53RecoveryControlRoutingControl: "AWS::Route53RecoveryControl::RoutingControl",
  Route53RecoveryControlSafetyRule: "AWS::Route53RecoveryControl::SafetyRule",
  Route53RecoveryReadinessCell: "AWS::Route53RecoveryReadiness::Cell",
  Route53RecoveryReadinessReadinessCheck: "AWS::Route53RecoveryReadiness::ReadinessCheck",
  Route53RecoveryReadinessRecoveryGroup: "AWS::Route53RecoveryReadiness::RecoveryGroup",
  Route53RecoveryReadinessResourceSet: "AWS::Route53RecoveryReadiness::ResourceSet",
  Route53ResolverFirewallDomainList: "AWS::Route53Resolver::FirewallDomainList",
  Route53ResolverFirewallRuleGroupAssociation: "AWS::Route53Resolver::FirewallRuleGroupAssociation",
  Route53ResolverResolverEndpoint: "AWS::Route53Resolver::ResolverEndpoint",
  Route53ResolverResolverRule: "AWS::Route53Resolver::ResolverRule",
  Route53ResolverResolverRuleAssociation: "AWS::Route53Resolver::ResolverRuleAssociation",
  RouteTable: "AWS::EC2::RouteTable",
  Rule: "AWS::WAF::Rule",
  RuleGroup: "AWS::WAF::RuleGroup",
  RuleGroupV2: "AWS::WAFv2::RuleGroup",
  S3MultiRegionAccessPoint: "AWS::S3::MultiRegionAccessPoint",
  S3StorageLens: "AWS::S3::StorageLens",
  SESConfigurationSet: "AWS::SES::ConfigurationSet",
  SESContactList: "AWS::SES::ContactList",
  SESReceiptFilter: "AWS::SES::ReceiptFilter",
  SESReceiptRuleSet: "AWS::SES::ReceiptRuleSet",
  SESTemplate: "AWS::SES::Template",
  SageMakerAppImageConfig: "AWS::SageMaker::AppImageConfig",
  SageMakerCodeRepository: "AWS::SageMaker::CodeRepository",
  SageMakerDomain: "AWS::SageMaker::Domain",
  SageMakerImage: "AWS::SageMaker::Image",
  SageMakerModel: "AWS::SageMaker::Model",
  SageMakerNotebookInstanceLifecycleConfig: "AWS::SageMaker::NotebookInstanceLifecycleConfig",
  SageMakerWorkteam: "AWS::SageMaker::Workteam",
  ScalingPolicy: "AWS::AutoScaling::ScalingPolicy",
  ScheduledAction: "AWS::AutoScaling::ScheduledAction",
  Secret: "AWS::SecretsManager::Secret",
  SecurityGroup: "AWS::EC2::SecurityGroup",
  ServiceDiscoveryHttpNamespace: "AWS::ServiceDiscovery::HttpNamespace",
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
  TransferConnector: "AWS::Transfer::Connector",
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
 * <p>The details that identify a resource that is collected by Config aggregator, including the resource type, ID, (if available) the custom resource name, the source account, and source region.</p>
 */
export interface AggregateResourceIdentifier {
  /**
   * <p>The 12-digit account ID of the source account.</p>
   */
  SourceAccountId: string | undefined;

  /**
   * <p>The source region where data is aggregated.</p>
   */
  SourceRegion: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The type of the Amazon Web Services resource.</p>
   */
  ResourceType: ResourceType | string | undefined;

  /**
   * <p>The name of the Amazon Web Services resource.</p>
   */
  ResourceName?: string;
}

/**
 * @public
 * <p>An object that represents the authorizations granted to
 * 			aggregator accounts and regions.</p>
 */
export interface AggregationAuthorization {
  /**
   * <p>The Amazon Resource Name (ARN) of the aggregation
   * 			object.</p>
   */
  AggregationAuthorizationArn?: string;

  /**
   * <p>The 12-digit account ID of the account authorized to aggregate
   * 			data.</p>
   */
  AuthorizedAccountId?: string;

  /**
   * <p>The region authorized to collect aggregated data.</p>
   */
  AuthorizedAwsRegion?: string;

  /**
   * <p>The time stamp when the aggregation authorization was
   * 			created.</p>
   */
  CreationTime?: Date;
}

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
 * <p>The detailed configuration of a specified resource.</p>
 */
export interface BaseConfigurationItem {
  /**
   * <p>The version number of the resource configuration.</p>
   */
  version?: string;

  /**
   * <p>The 12-digit Amazon Web Services account ID associated with the resource.</p>
   */
  accountId?: string;

  /**
   * <p>The time when the configuration recording was initiated.</p>
   */
  configurationItemCaptureTime?: Date;

  /**
   * <p>The configuration item status. The valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>OK – The resource configuration has been updated</p>
   *             </li>
   *             <li>
   *                <p>ResourceDiscovered – The resource was newly discovered</p>
   *             </li>
   *             <li>
   *                <p>ResourceNotRecorded – The resource was discovered but its configuration was not recorded since the recorder excludes the recording of resources of this type</p>
   *             </li>
   *             <li>
   *                <p>ResourceDeleted – The resource was deleted</p>
   *             </li>
   *             <li>
   *                <p>ResourceDeletedNotRecorded – The resource was deleted but its configuration was not recorded since the recorder excludes the recording of resources of this type</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The CIs do not incur any cost.</p>
   *          </note>
   */
  configurationItemStatus?: ConfigurationItemStatus | string;

  /**
   * <p>An identifier that indicates the ordering of the configuration
   * 			items of a resource.</p>
   */
  configurationStateId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  arn?: string;

  /**
   * <p>The type of Amazon Web Services resource.</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The ID of the resource (for example., sg-xxxxxx).</p>
   */
  resourceId?: string;

  /**
   * <p>The custom name of the resource, if available.</p>
   */
  resourceName?: string;

  /**
   * <p>The region where the resource resides.</p>
   */
  awsRegion?: string;

  /**
   * <p>The Availability Zone associated with the resource.</p>
   */
  availabilityZone?: string;

  /**
   * <p>The time stamp when the resource was created.</p>
   */
  resourceCreationTime?: Date;

  /**
   * <p>The description of the resource configuration.</p>
   */
  configuration?: string;

  /**
   * <p>Configuration attributes that Config returns for certain
   * 			resource types to supplement the information returned for the
   * 			configuration parameter.</p>
   */
  supplementaryConfiguration?: Record<string, string>;
}

/**
 * @public
 */
export interface BatchGetAggregateResourceConfigRequest {
  /**
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>A list of aggregate ResourceIdentifiers objects. </p>
   */
  ResourceIdentifiers: AggregateResourceIdentifier[] | undefined;
}

/**
 * @public
 */
export interface BatchGetAggregateResourceConfigResponse {
  /**
   * <p>A list that contains the current configuration of one or more resources.</p>
   */
  BaseConfigurationItems?: BaseConfigurationItem[];

  /**
   * <p>A list of resource identifiers that were not processed with current scope. The list is empty if all the resources are processed.</p>
   */
  UnprocessedResourceIdentifiers?: AggregateResourceIdentifier[];
}

/**
 * @public
 * <p>You have specified a configuration aggregator that does not exist.</p>
 */
export class NoSuchConfigurationAggregatorException extends __BaseException {
  readonly name: "NoSuchConfigurationAggregatorException" = "NoSuchConfigurationAggregatorException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchConfigurationAggregatorException, __BaseException>) {
    super({
      name: "NoSuchConfigurationAggregatorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchConfigurationAggregatorException.prototype);
  }
}

/**
 * @public
 * <p>The requested action is not valid.</p>
 *          <p>For PutStoredQuery, you will see this exception if there are missing required fields or if the input value fails the validation, or if you are trying to create more than 300 queries.</p>
 *          <p>For GetStoredQuery, ListStoredQuery, and DeleteStoredQuery you will see this exception if there are missing required fields or if the input value fails the validation.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * @public
 * <p>The details that identify a resource within Config, including
 * 			the resource type and resource ID.</p>
 */
export interface ResourceKey {
  /**
   * <p>The resource type.</p>
   */
  resourceType: ResourceType | string | undefined;

  /**
   * <p>The ID of the resource (for example., sg-xxxxxx). </p>
   */
  resourceId: string | undefined;
}

/**
 * @public
 */
export interface BatchGetResourceConfigRequest {
  /**
   * <p>A list of resource keys to be processed with the current
   * 			request. Each element in the list consists of the resource type and
   * 			resource ID.</p>
   */
  resourceKeys: ResourceKey[] | undefined;
}

/**
 * @public
 */
export interface BatchGetResourceConfigResponse {
  /**
   * <p>A list that contains the current configuration of one or more
   * 			resources.</p>
   */
  baseConfigurationItems?: BaseConfigurationItem[];

  /**
   * <p>A list of resource keys that were not processed with the
   * 			current response. The unprocessesResourceKeys value is in the same
   * 			form as ResourceKeys, so the value can be directly provided to a
   * 			subsequent BatchGetResourceConfig operation.
   *
   * 			If there are no unprocessed resource keys, the response contains an
   * 			empty unprocessedResourceKeys list. </p>
   */
  unprocessedResourceKeys?: ResourceKey[];
}

/**
 * @public
 * <p>There are no configuration recorders available to provide the
 * 			role needed to describe your resources. Create a configuration
 * 			recorder.</p>
 */
export class NoAvailableConfigurationRecorderException extends __BaseException {
  readonly name: "NoAvailableConfigurationRecorderException" = "NoAvailableConfigurationRecorderException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoAvailableConfigurationRecorderException, __BaseException>) {
    super({
      name: "NoAvailableConfigurationRecorderException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoAvailableConfigurationRecorderException.prototype);
  }
}

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
 * <p>Indicates whether an Config rule is compliant. A rule is
 * 			compliant if all of the resources that the rule evaluated comply
 * 			with it. A rule is noncompliant if any of these resources do not
 * 			comply.</p>
 */
export interface ComplianceByConfigRule {
  /**
   * <p>The name of the Config rule.</p>
   */
  ConfigRuleName?: string;

  /**
   * <p>Indicates whether the Config rule is compliant.</p>
   */
  Compliance?: Compliance;
}

/**
 * @public
 * <p>Indicates whether an Amazon Web Services resource that is evaluated according
 * 			to one or more Config rules is compliant. A resource is
 * 			compliant if it complies with all of the rules that evaluate it. A
 * 			resource is noncompliant if it does not comply with one or more of
 * 			these rules.</p>
 */
export interface ComplianceByResource {
  /**
   * <p>The type of the Amazon Web Services resource that was evaluated.</p>
   */
  ResourceType?: string;

  /**
   * <p>The ID of the Amazon Web Services resource that was evaluated.</p>
   */
  ResourceId?: string;

  /**
   * <p>Indicates whether the Amazon Web Services resource complies with all of the Config rules that evaluated it.</p>
   */
  Compliance?: Compliance;
}

/**
 * @public
 * <p>The number of Amazon Web Services resources of a specific type that are
 * 			compliant or noncompliant, up to a maximum of 100 for
 * 			each.</p>
 */
export interface ComplianceSummaryByResourceType {
  /**
   * <p>The type of Amazon Web Services resource.</p>
   */
  ResourceType?: string;

  /**
   * <p>The number of Amazon Web Services resources that are compliant or noncompliant,
   * 			up to a maximum of 100 for each.</p>
   */
  ComplianceSummary?: ComplianceSummary;
}

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
 * <p>Provides status of the delivery of the snapshot or the
 * 			configuration history to the specified Amazon S3 bucket. Also
 * 			provides the status of notifications about the Amazon S3 delivery to
 * 			the specified Amazon SNS topic.</p>
 */
export interface ConfigExportDeliveryInfo {
  /**
   * <p>Status of the last attempted delivery.</p>
   */
  lastStatus?: DeliveryStatus | string;

  /**
   * <p>The error code from the last attempted delivery.</p>
   */
  lastErrorCode?: string;

  /**
   * <p>The error message from the last attempted delivery.</p>
   */
  lastErrorMessage?: string;

  /**
   * <p>The time of the last attempted delivery.</p>
   */
  lastAttemptTime?: Date;

  /**
   * <p>The time of the last successful delivery.</p>
   */
  lastSuccessfulTime?: Date;

  /**
   * <p>The time that the next delivery occurs.</p>
   */
  nextDeliveryTime?: Date;
}

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
 * <p>The configuration object for Config rule evaluation mode. The Supported valid values are Detective or Proactive.</p>
 */
export interface EvaluationModeConfiguration {
  /**
   * <p>The mode of an evaluation. The valid values are Detective or Proactive.</p>
   */
  Mode?: EvaluationMode | string;
}

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
 * <p>Defines which resources trigger an evaluation for an Config
 * 			rule. The scope can include one or more resource types, a
 * 			combination of a tag key and value, or a combination of one resource
 * 			type and one resource ID. Specify a scope to constrain which
 * 			resources trigger an evaluation for a rule. Otherwise, evaluations
 * 			for the rule are triggered when any resource in your recording group
 * 			changes in configuration.</p>
 */
export interface Scope {
  /**
   * <p>The resource types of only those Amazon Web Services resources that you want to
   * 			trigger an evaluation for the rule. You can only specify one type if
   * 			you also specify a resource ID for
   * 			<code>ComplianceResourceId</code>.</p>
   */
  ComplianceResourceTypes?: string[];

  /**
   * <p>The tag key that is applied to only those Amazon Web Services resources that
   * 			you want to trigger an evaluation for the rule.</p>
   */
  TagKey?: string;

  /**
   * <p>The tag value applied to only those Amazon Web Services resources that you want
   * 			to trigger an evaluation for the rule. If you specify a value for
   * 				<code>TagValue</code>, you must also specify a value for
   * 				<code>TagKey</code>.</p>
   */
  TagValue?: string;

  /**
   * <p>The ID of the only Amazon Web Services resource that you want to trigger an
   * 			evaluation for the rule. If you specify a resource ID, you must
   * 			specify one resource type for
   * 			<code>ComplianceResourceTypes</code>.</p>
   */
  ComplianceResourceId?: string;
}

/**
 * @public
 * <p>Provides the runtime system, policy definition, and whether debug logging enabled. You can
 * 			specify the following CustomPolicyDetails parameter values
 * 			only
 * 			for Config Custom Policy rules.</p>
 */
export interface CustomPolicyDetails {
  /**
   * <p>The runtime system for your Config Custom Policy rule. Guard is a policy-as-code language that allows you to write policies that are enforced by Config Custom Policy rules. For more information about Guard, see the <a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub
   * 					Repository</a>.</p>
   */
  PolicyRuntime: string | undefined;

  /**
   * <p>The policy definition containing the logic for your Config Custom Policy rule.</p>
   */
  PolicyText: string | undefined;

  /**
   * <p>The boolean expression for enabling debug logging for your Config Custom Policy rule. The default value is <code>false</code>.</p>
   */
  EnableDebugLogDelivery?: boolean;
}

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
 * <p>Provides the source and the message types that trigger Config to evaluate your Amazon Web Services resources against a rule. It also
 * 			provides the frequency with which you want Config to run
 * 			evaluations for the rule if the trigger type is periodic. You can
 * 			specify the parameter values for <code>SourceDetail</code> only for
 * 			custom rules. </p>
 */
export interface SourceDetail {
  /**
   * <p>The source of the event, such as an Amazon Web Services service, that triggers
   * 			Config to evaluate your Amazon Web Services resources.</p>
   */
  EventSource?: EventSource | string;

  /**
   * <p>The type of notification that triggers Config to run an
   * 			evaluation for a rule. You can specify the following notification
   * 			types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ConfigurationItemChangeNotification</code> - Triggers
   * 					an evaluation when Config delivers a configuration item
   * 					as a result of a resource change.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OversizedConfigurationItemChangeNotification</code>
   * 					- Triggers an evaluation when Config delivers an
   * 					oversized configuration item. Config may generate this
   * 					notification type when a resource changes and the
   * 					notification exceeds the maximum size allowed by Amazon
   * 					SNS.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ScheduledNotification</code> - Triggers a
   * 					periodic evaluation at the frequency specified for
   * 						<code>MaximumExecutionFrequency</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ConfigurationSnapshotDeliveryCompleted</code> -
   * 					Triggers a periodic evaluation when Config delivers a
   * 					configuration snapshot.</p>
   *             </li>
   *          </ul>
   *          <p>If you want your custom rule to be triggered by configuration
   * 			changes, specify two SourceDetail objects, one for
   * 				<code>ConfigurationItemChangeNotification</code> and one for
   * 				<code>OversizedConfigurationItemChangeNotification</code>.</p>
   */
  MessageType?: MessageType | string;

  /**
   * <p>The frequency at which you want Config to run evaluations
   * 			for a custom rule with a periodic trigger. If you specify a value
   * 			for <code>MaximumExecutionFrequency</code>, then
   * 				<code>MessageType</code> must use the
   * 				<code>ScheduledNotification</code> value.</p>
   *          <note>
   *             <p>By default, rules with a periodic trigger are evaluated
   * 				every 24 hours. To change the frequency, specify a valid value
   * 				for the <code>MaximumExecutionFrequency</code>
   * 				parameter.</p>
   *             <p>Based on the valid value you choose, Config runs
   * 				evaluations once for each valid value. For example, if you
   * 				choose <code>Three_Hours</code>, Config runs evaluations
   * 				once every three hours. In this case, <code>Three_Hours</code>
   * 				is the frequency of this rule. </p>
   *          </note>
   */
  MaximumExecutionFrequency?: MaximumExecutionFrequency | string;
}

/**
 * @public
 * <p>Provides the CustomPolicyDetails, the rule owner (<code>Amazon Web Services</code> for managed rules, <code>CUSTOM_POLICY</code> for Custom Policy rules, and <code>CUSTOM_LAMBDA</code> for Custom Lambda rules), the rule
 * 			identifier, and the events that cause the evaluation of your Amazon Web Services
 * 			resources.</p>
 */
export interface Source {
  /**
   * <p>Indicates whether Amazon Web Services or the customer owns and manages the Config rule.</p>
   *          <p>Config Managed Rules are predefined rules owned by Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html">Config Managed Rules</a> in the <i>Config developer guide</i>.</p>
   *          <p>Config Custom Rules are rules that you can develop either with Guard (<code>CUSTOM_POLICY</code>) or Lambda (<code>CUSTOM_LAMBDA</code>). For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_develop-rules.html">Config Custom Rules </a> in the <i>Config developer guide</i>.</p>
   */
  Owner: Owner | string | undefined;

  /**
   * <p>For Config Managed rules, a predefined identifier from a
   * 			list. For example, <code>IAM_PASSWORD_POLICY</code> is a managed
   * 			rule. To reference a managed rule, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">List of Config Managed Rules</a>.</p>
   *          <p>For Config Custom Lambda rules, the identifier is the Amazon Resource Name
   * 			(ARN) of the rule's Lambda function, such as
   * 			<code>arn:aws:lambda:us-east-2:123456789012:function:custom_rule_name</code>.</p>
   *          <p>For Config Custom Policy rules, this field will be ignored.</p>
   */
  SourceIdentifier?: string;

  /**
   * <p>Provides the source and the message types that cause Config to evaluate your Amazon Web Services resources against a rule. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.</p>
   *          <p>If the owner is set to <code>CUSTOM_POLICY</code>, the only acceptable values for the Config rule trigger message type are <code>ConfigurationItemChangeNotification</code> and <code>OversizedConfigurationItemChangeNotification</code>.</p>
   */
  SourceDetails?: SourceDetail[];

  /**
   * <p>Provides the runtime system, policy definition, and whether debug logging is enabled. Required when owner is set to <code>CUSTOM_POLICY</code>.</p>
   */
  CustomPolicyDetails?: CustomPolicyDetails;
}

/**
 * @public
 * <p>Config rules evaluate the configuration settings of your Amazon Web Services resources. A rule can run when Config detects a configuration change to
 * 			an Amazon Web Services resource or at a periodic frequency that you choose (for
 * 			example, every 24 hours). There are two types of rules: <i>Config Managed Rules</i> and <i>Config Custom Rules</i>.</p>
 *          <p>Config Managed Rules are predefined,
 * 				customizable rules created by Config. For a list of managed rules, see
 * 				<a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">List of Config
 * 					Managed Rules</a>.</p>
 *          <p>Config Custom Rules are rules that you create from scratch. There are two ways to create Config custom rules: with Lambda functions
 * 				(<a href="https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function"> Lambda Developer Guide</a>) and with Guard (<a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub
 * 						Repository</a>), a policy-as-code language.
 *
 * 				Config custom rules created with Lambda
 * 				are called <i>Config Custom Lambda Rules</i> and Config custom rules created with
 * 				Guard are called <i>Config Custom Policy Rules</i>.</p>
 *          <p>For more information about developing and using Config
 * 			rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating Resource with Config Rules</a>
 * 			in the <i>Config Developer Guide</i>.</p>
 *          <note>
 *             <p>You can use the Amazon Web Services CLI and Amazon Web Services SDKs if you want to create
 * 				a rule that triggers evaluations for your resources when Config delivers the configuration snapshot. For more
 * 				information, see <a>ConfigSnapshotDeliveryProperties</a>.</p>
 *          </note>
 */
export interface ConfigRule {
  /**
   * <p>The name that you assign to the Config rule. The name is
   * 			required if you are adding a new rule.</p>
   */
  ConfigRuleName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Config
   * 			rule.</p>
   */
  ConfigRuleArn?: string;

  /**
   * <p>The ID of the Config rule.</p>
   */
  ConfigRuleId?: string;

  /**
   * <p>The description that you provide for the Config
   * 			rule.</p>
   */
  Description?: string;

  /**
   * <p>Defines which resources can trigger an evaluation for the rule.
   * 			The scope can include one or more resource types, a combination of
   * 			one resource type and one resource ID, or a combination of a tag key
   * 			and value. Specify a scope to constrain the resources that can
   * 			trigger an evaluation for the rule. If you do not specify a scope,
   * 			evaluations are triggered when any resource in the recording group
   * 			changes.</p>
   *          <note>
   *             <p>The scope can be empty. </p>
   *          </note>
   */
  Scope?: Scope;

  /**
   * <p>Provides the rule owner (<code>Amazon Web Services</code> for managed rules, <code>CUSTOM_POLICY</code> for Custom Policy rules, and <code>CUSTOM_LAMBDA</code> for Custom Lambda rules), the rule identifier,
   * 			and the notifications that cause the function to evaluate your Amazon Web Services
   * 			resources.</p>
   */
  Source: Source | undefined;

  /**
   * <p>A string, in JSON format, that is passed to the Config rule
   * 			Lambda function.</p>
   */
  InputParameters?: string;

  /**
   * <p>The maximum frequency with which Config runs evaluations
   * 			for a rule. You can specify a value for
   * 				<code>MaximumExecutionFrequency</code> when:</p>
   *          <ul>
   *             <li>
   *                <p>This is for an Config managed rule that is triggered at
   * 					a periodic frequency.</p>
   *             </li>
   *             <li>
   *                <p>Your custom rule is triggered when Config delivers
   * 					the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>By default, rules with a periodic trigger are evaluated
   * 				every 24 hours. To change the frequency, specify a valid value
   * 				for the <code>MaximumExecutionFrequency</code>
   * 				parameter.</p>
   *          </note>
   */
  MaximumExecutionFrequency?: MaximumExecutionFrequency | string;

  /**
   * <p>Indicates whether the Config rule is active or is currently
   * 			being deleted by Config. It can also indicate the evaluation
   * 			status for the Config rule.</p>
   *          <p>Config sets the state of the rule to
   * 				<code>EVALUATING</code> temporarily after you use the
   * 				<code>StartConfigRulesEvaluation</code> request to evaluate your
   * 			resources against the Config rule.</p>
   *          <p>Config sets the state of the rule to
   * 				<code>DELETING_RESULTS</code> temporarily after you use the
   * 				<code>DeleteEvaluationResults</code> request to delete the
   * 			current evaluation results for the Config rule.</p>
   *          <p>Config temporarily sets the state of a rule to
   * 				<code>DELETING</code> after you use the
   * 				<code>DeleteConfigRule</code> request to delete the rule. After
   * 			Config deletes the rule, the rule and all of its evaluations are
   * 			erased and are no longer available.</p>
   */
  ConfigRuleState?: ConfigRuleState | string;

  /**
   * <p>Service principal name of the service that created the
   * 			rule.</p>
   *          <note>
   *             <p>The field is populated only if the service-linked rule is
   * 				created by a service. The field is empty if you create your own
   * 				rule.</p>
   *          </note>
   */
  CreatedBy?: string;

  /**
   * <p>The modes the Config rule can be evaluated in. The valid values are distinct objects. By default, the value is Detective evaluation mode only.</p>
   */
  EvaluationModes?: EvaluationModeConfiguration[];
}

/**
 * @public
 * <p>Filters the compliance results based on account ID, region,
 * 			compliance type, and rule name.</p>
 */
export interface ConfigRuleComplianceFilters {
  /**
   * <p>The name of the Config rule.</p>
   */
  ConfigRuleName?: string;

  /**
   * <p>The rule compliance status.</p>
   *          <p>For the <code>ConfigRuleComplianceFilters</code> data type, Config supports only <code>COMPLIANT</code> and
   * 				<code>NON_COMPLIANT</code>. Config does not support the
   * 				<code>NOT_APPLICABLE</code> and the
   * 				<code>INSUFFICIENT_DATA</code> values.</p>
   */
  ComplianceType?: ComplianceType | string;

  /**
   * <p>The 12-digit account ID of the source account.
   * 			</p>
   */
  AccountId?: string;

  /**
   * <p>The source region where the data is aggregated.
   * 			</p>
   */
  AwsRegion?: string;
}

/**
 * @public
 * <p>Filters the results based on the account IDs and
 * 			regions.</p>
 */
export interface ConfigRuleComplianceSummaryFilters {
  /**
   * <p>The 12-digit account ID of the source account.</p>
   */
  AccountId?: string;

  /**
   * <p>The source region where the data is aggregated.</p>
   */
  AwsRegion?: string;
}

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
 * <p>Status information for your Config Managed rules and Config Custom Policy rules. The
 * 			status includes information such as the last time the rule ran, the
 * 			last time it failed, and the related error for the last
 * 			failure.</p>
 *          <p>This action does not return status information about Config Custom Lambda rules.</p>
 */
export interface ConfigRuleEvaluationStatus {
  /**
   * <p>The name of the Config rule.</p>
   */
  ConfigRuleName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Config
   * 			rule.</p>
   */
  ConfigRuleArn?: string;

  /**
   * <p>The ID of the Config rule.</p>
   */
  ConfigRuleId?: string;

  /**
   * <p>The time that Config last successfully invoked the Config rule to evaluate your Amazon Web Services resources.</p>
   */
  LastSuccessfulInvocationTime?: Date;

  /**
   * <p>The time that Config last failed to invoke the Config
   * 			rule to evaluate your Amazon Web Services resources.</p>
   */
  LastFailedInvocationTime?: Date;

  /**
   * <p>The time that Config last successfully evaluated your Amazon Web Services
   * 			resources against the rule.</p>
   */
  LastSuccessfulEvaluationTime?: Date;

  /**
   * <p>The time that Config last failed to evaluate your Amazon Web Services
   * 			resources against the rule.</p>
   */
  LastFailedEvaluationTime?: Date;

  /**
   * <p>The time that you first activated the Config
   * 			rule.</p>
   */
  FirstActivatedTime?: Date;

  /**
   * <p>The time that you last turned off the Config rule.</p>
   */
  LastDeactivatedTime?: Date;

  /**
   * <p>The error code that Config returned when the rule last
   * 			failed.</p>
   */
  LastErrorCode?: string;

  /**
   * <p>The error message that Config returned when the rule last
   * 			failed.</p>
   */
  LastErrorMessage?: string;

  /**
   * <p>Indicates whether Config has evaluated your resources
   * 			against the rule at least once.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>true</code> - Config has evaluated your Amazon Web Services
   * 					resources against the rule at least once.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>false</code> - Config has not finished evaluating your Amazon Web Services resources against the
   * 					rule
   * 					at least once.</p>
   *             </li>
   *          </ul>
   */
  FirstEvaluationStarted?: boolean;

  /**
   * <p>The status of the last attempted delivery of a debug log for your Config Custom Policy rules. Either <code>Successful</code> or <code>Failed</code>.</p>
   */
  LastDebugLogDeliveryStatus?: string;

  /**
   * <p>The reason Config was not able to deliver a debug log. This is for the last
   * 			failed attempt to retrieve a debug log for your Config Custom Policy rules.</p>
   */
  LastDebugLogDeliveryStatusReason?: string;

  /**
   * <p>The time Config last attempted to deliver a debug log for your Config Custom Policy rules.</p>
   */
  LastDebugLogDeliveryTime?: Date;
}

/**
 * @public
 * <p>Provides options for how often Config delivers
 * 			configuration snapshots to the Amazon S3 bucket in your delivery
 * 			channel.</p>
 *          <p>The frequency for a rule that triggers evaluations for your
 * 			resources when Config delivers the configuration snapshot is set
 * 			by one of two values, depending on which is less frequent:</p>
 *          <ul>
 *             <li>
 *                <p>The value for the <code>deliveryFrequency</code>
 * 					parameter within the delivery channel configuration, which
 * 					sets how often Config delivers configuration snapshots.
 * 					This value also sets how often Config invokes
 * 					evaluations for Config rules.</p>
 *             </li>
 *             <li>
 *                <p>The value for the
 * 						<code>MaximumExecutionFrequency</code> parameter, which
 * 					sets the maximum frequency with which Config invokes
 * 					evaluations for the rule. For more information, see <a>ConfigRule</a>.</p>
 *             </li>
 *          </ul>
 *          <p>If the <code>deliveryFrequency</code> value is less frequent
 * 			than the <code>MaximumExecutionFrequency</code> value for a rule,
 * 			Config invokes the rule only as often as the
 * 				<code>deliveryFrequency</code> value.</p>
 *          <ol>
 *             <li>
 *                <p>For example, you want your rule to run evaluations when
 * 					Config delivers the configuration snapshot.</p>
 *             </li>
 *             <li>
 *                <p>You specify the <code>MaximumExecutionFrequency</code>
 * 					value for <code>Six_Hours</code>. </p>
 *             </li>
 *             <li>
 *                <p>You then specify the delivery channel
 * 						<code>deliveryFrequency</code> value for
 * 						<code>TwentyFour_Hours</code>.</p>
 *             </li>
 *             <li>
 *                <p>Because the value for <code>deliveryFrequency</code> is
 * 					less frequent than <code>MaximumExecutionFrequency</code>,
 * 					Config invokes evaluations for the rule every 24 hours.
 * 				</p>
 *             </li>
 *          </ol>
 *          <p>You should set the <code>MaximumExecutionFrequency</code> value
 * 			to be at least as frequent as the <code>deliveryFrequency</code>
 * 			value. You can view the <code>deliveryFrequency</code> value by
 * 			using the <code>DescribeDeliveryChannnels</code> action.</p>
 *          <p>To update the <code>deliveryFrequency</code> with which Config delivers your configuration snapshots, use the
 * 				<code>PutDeliveryChannel</code> action.</p>
 */
export interface ConfigSnapshotDeliveryProperties {
  /**
   * <p>The frequency with which Config delivers configuration
   * 			snapshots.</p>
   */
  deliveryFrequency?: MaximumExecutionFrequency | string;
}

/**
 * @public
 * <p>A list that contains the status of the delivery of the
 * 			configuration stream notification to the Amazon SNS topic.</p>
 */
export interface ConfigStreamDeliveryInfo {
  /**
   * <p>Status of the last attempted delivery.</p>
   *          <p>
   *             <b>Note</b> Providing an SNS topic on a
   * 				<a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DeliveryChannel.html">DeliveryChannel</a> for Config is optional. If the SNS
   * 			delivery is turned off, the last status will be <b>Not_Applicable</b>.</p>
   */
  lastStatus?: DeliveryStatus | string;

  /**
   * <p>The error code from the last attempted delivery.</p>
   */
  lastErrorCode?: string;

  /**
   * <p>The error message from the last attempted delivery.</p>
   */
  lastErrorMessage?: string;

  /**
   * <p>The time from the last status change.</p>
   */
  lastStatusChangeTime?: Date;
}

/**
 * @public
 * <p>This object contains regions to set up the aggregator and an IAM
 * 			role to retrieve organization details.</p>
 */
export interface OrganizationAggregationSource {
  /**
   * <p>ARN of the IAM role used to retrieve Amazon Web Services Organization details
   * 			associated with the aggregator account.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The source regions being aggregated.</p>
   */
  AwsRegions?: string[];

  /**
   * <p>If true, aggregate existing Config regions and future
   * 			regions.</p>
   */
  AllAwsRegions?: boolean;
}

/**
 * @public
 * <p>The details about the configuration aggregator, including
 * 			information about source accounts, regions, and metadata of the
 * 			aggregator. </p>
 */
export interface ConfigurationAggregator {
  /**
   * <p>The name of the aggregator.</p>
   */
  ConfigurationAggregatorName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the aggregator.</p>
   */
  ConfigurationAggregatorArn?: string;

  /**
   * <p>Provides a list of source accounts and regions to be
   * 			aggregated.</p>
   */
  AccountAggregationSources?: AccountAggregationSource[];

  /**
   * <p>Provides an organization and list of regions to be
   * 			aggregated.</p>
   */
  OrganizationAggregationSource?: OrganizationAggregationSource;

  /**
   * <p>The time stamp when the configuration aggregator was
   * 			created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time of the last update.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>Amazon Web Services service that created the configuration aggregator.</p>
   */
  CreatedBy?: string;
}

/**
 * @public
 * <p>The relationship of the related resource to the main
 * 			resource.</p>
 */
export interface Relationship {
  /**
   * <p>The resource type of the related resource.</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The ID of the related resource (for example,
   * 				<code>sg-xxxxxx</code>).</p>
   */
  resourceId?: string;

  /**
   * <p>The custom name of the related resource, if
   * 			available.</p>
   */
  resourceName?: string;

  /**
   * <p>The type of relationship with the related resource.</p>
   */
  relationshipName?: string;
}

/**
 * @public
 * <p>A list that contains detailed configurations of a specified
 * 			resource.</p>
 */
export interface ConfigurationItem {
  /**
   * <p>The version number of the resource configuration.</p>
   */
  version?: string;

  /**
   * <p>The 12-digit Amazon Web Services account ID associated with the
   * 			resource.</p>
   */
  accountId?: string;

  /**
   * <p>The time when the configuration recording was
   * 			initiated.</p>
   */
  configurationItemCaptureTime?: Date;

  /**
   * <p>The configuration item status. The valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>OK – The resource configuration has been updated</p>
   *             </li>
   *             <li>
   *                <p>ResourceDiscovered – The resource was newly discovered</p>
   *             </li>
   *             <li>
   *                <p>ResourceNotRecorded – The resource was discovered but its configuration was not recorded since the recorder excludes the recording of resources of this type</p>
   *             </li>
   *             <li>
   *                <p>ResourceDeleted – The resource was deleted</p>
   *             </li>
   *             <li>
   *                <p>ResourceDeletedNotRecorded – The resource was deleted but its configuration was not recorded since the recorder excludes the recording of resources of this type</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The CIs do not incur any cost.</p>
   *          </note>
   */
  configurationItemStatus?: ConfigurationItemStatus | string;

  /**
   * <p>An identifier that indicates the ordering of the configuration
   * 			items of a resource.</p>
   */
  configurationStateId?: string;

  /**
   * <p>Unique MD5 hash that represents the configuration item's
   * 			state.</p>
   *          <p>You can use MD5 hash to compare the states of two or more
   * 			configuration items that are associated with the same
   * 			resource.</p>
   */
  configurationItemMD5Hash?: string;

  /**
   * <p>Amazon Resource Name (ARN) associated with the resource.</p>
   */
  arn?: string;

  /**
   * <p>The type of Amazon Web Services resource.</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The ID of the resource (for example,
   * 			<code>sg-xxxxxx</code>).</p>
   */
  resourceId?: string;

  /**
   * <p>The custom name of the resource, if available.</p>
   */
  resourceName?: string;

  /**
   * <p>The region where the resource resides.</p>
   */
  awsRegion?: string;

  /**
   * <p>The Availability Zone associated with the resource.</p>
   */
  availabilityZone?: string;

  /**
   * <p>The time stamp when the resource was created.</p>
   */
  resourceCreationTime?: Date;

  /**
   * <p>A mapping of key value tags associated with the
   * 			resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>A list of CloudTrail event IDs.</p>
   *          <p>A populated field indicates that the current configuration was
   * 			initiated by the events recorded in the CloudTrail log. For more
   * 			information about CloudTrail, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">What Is CloudTrail</a>.</p>
   *          <p>An empty field indicates that the current configuration was not
   * 			initiated by any event. As of Version 1.3, the relatedEvents field is empty.
   * 			You can access the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_LookupEvents.html">LookupEvents API</a> in the <i>CloudTrail API Reference</i> to retrieve the events for the resource.</p>
   */
  relatedEvents?: string[];

  /**
   * <p>A list of related Amazon Web Services resources.</p>
   */
  relationships?: Relationship[];

  /**
   * <p>The description of the resource configuration.</p>
   */
  configuration?: string;

  /**
   * <p>Configuration attributes that Config returns for certain
   * 			resource types to supplement the information returned for the
   * 				<code>configuration</code> parameter.</p>
   */
  supplementaryConfiguration?: Record<string, string>;
}

/**
 * @public
 * <p>Specifies whether the configuration recorder excludes resource types from being recorded.
 * 			Use the <code>resourceTypes</code> field to enter a comma-separated list of resource types to exclude as exemptions.</p>
 */
export interface ExclusionByResourceTypes {
  /**
   * <p>A comma-separated list of resource types to exclude from recording by the configuration
   * 			recorder.</p>
   */
  resourceTypes?: (ResourceType | string)[];
}

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
 * <p>Specifies the recording strategy of the configuration recorder.</p>
 */
export interface RecordingStrategy {
  /**
   * <p>The recording strategy for the configuration recorder.</p>
   *          <ul>
   *             <li>
   *                <p>If you set this option to <code>ALL_SUPPORTED_RESOURCE_TYPES</code>, Config records configuration changes for all supported regional resource types. You also must set the <code>allSupported</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html">RecordingGroup</a> to <code>true</code>.</p>
   *                <p>When Config adds support for a new type of regional resource, Config automatically starts recording resources of that type. For a list of supported resource types,
   * 				see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported Resource Types</a> in the <i>Config developer guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>If you set this option to <code>INCLUSION_BY_RESOURCE_TYPES</code>, Config records
   * 					configuration changes for only the resource types that you specify in the
   * 						<code>resourceTypes</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html">RecordingGroup</a>.</p>
   *             </li>
   *             <li>
   *                <p>If you set this option to <code>EXCLUSION_BY_RESOURCE_TYPES</code>, Config records
   * 					configuration changes for all supported resource types, except the resource
   * 					types that you specify as exemptions to exclude from being recorded in the
   * 						<code>resourceTypes</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_ExclusionByResourceTypes.html">ExclusionByResourceTypes</a>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>recordingStrategy</code> field is optional when you set the
   * 			<code>allSupported</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html">RecordingGroup</a> to <code>true</code>.</p>
   *             <p>The <code>recordingStrategy</code> field is optional when you list resource types in the
   * 				<code>resourceTypes</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html">RecordingGroup</a>.</p>
   *             <p>The <code>recordingStrategy</code> field is required if you list resource types to exclude from recording in the <code>resourceTypes</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_ExclusionByResourceTypes.html">ExclusionByResourceTypes</a>.</p>
   *          </note>
   *          <note>
   *             <p>If you choose <code>EXCLUSION_BY_RESOURCE_TYPES</code> for the recording strategy, the <code>exclusionByResourceTypes</code> field will override other properties in the request.</p>
   *             <p>For example, even if you set <code>includeGlobalResourceTypes</code> to false, global resource types will still be automatically
   * 			recorded in this option unless those resource types are specifically listed as exemptions in the <code>resourceTypes</code> field of <code>exclusionByResourceTypes</code>.</p>
   *             <p>By default, if you choose the <code>EXCLUSION_BY_RESOURCE_TYPES</code> recording strategy,
   * 				when Config adds support for a new resource type in the Region where you set up the configuration recorder, including global resource types,
   * 				Config starts recording resources of that type automatically.</p>
   *          </note>
   */
  useOnly?: RecordingStrategyType | string;
}

/**
 * @public
 * <p>Specifies which resource types Config
 * 			records for configuration changes.
 * 			In the recording group, you specify whether you want to record all supported resource types or to include or exclude specific types of resources.</p>
 *          <p>By default, Config records configuration changes for all supported types of
 * 				<i>Regional resources</i> that Config discovers in the
 * 				Amazon Web Services Region in which it is running. Regional resources are tied to a
 * 			Region and can be used only in that Region. Examples of Regional resources are Amazon EC2 instances and Amazon EBS volumes.</p>
 *          <p>You can also have Config record supported types of <i>global resources</i>.
 * 				Global resources are not tied to a specific Region and can be used in all Regions. The global
 * 				resource types that Config supports include  IAM users, groups, roles, and customer managed
 * 				policies.</p>
 *          <important>
 *             <p>Global resource types onboarded to Config recording after February 2022 will
 * 				be recorded only in the service's home Region for the commercial partition and
 * 				Amazon Web Services GovCloud (US-West) for the Amazon Web Services GovCloud (US) partition. You can view the
 * 				Configuration Items for these new global resource types only in their home Region
 * 				and Amazon Web Services GovCloud (US-West).</p>
 *          </important>
 *          <p>If you don't want Config to record all resources, you can specify which types of resources Config records with the <code>resourceTypes</code> parameter.</p>
 *          <p>For a list of supported resource types, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported Resource Types</a> in the <i>Config developer guide</i>.</p>
 *          <p>For more information and a table of the Home Regions for Global Resource Types Onboarded after February 2022, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html">Selecting Which Resources Config Records</a> in the <i>Config developer guide</i>.</p>
 */
export interface RecordingGroup {
  /**
   * <p>Specifies whether Config records configuration changes for all supported regional resource types.</p>
   *          <p>If you set this field to <code>true</code>, when Config
   * 			adds support for a new type of regional resource, Config starts recording resources of that type automatically.</p>
   *          <p>If you set this field to <code>true</code>,
   * 			you cannot enumerate specific resource types to record in the <code>resourceTypes</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html">RecordingGroup</a>, or to exclude in the <code>resourceTypes</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_ExclusionByResourceTypes.html">ExclusionByResourceTypes</a>.</p>
   */
  allSupported?: boolean;

  /**
   * <p>Specifies whether Config records configuration changes for all supported global resources.</p>
   *          <p>Before you set this field to <code>true</code>,
   * 			set the <code>allSupported</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html">RecordingGroup</a> to
   * 			<code>true</code>. Optionally, you can set the <code>useOnly</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingStrategy.html">RecordingStrategy</a> to <code>ALL_SUPPORTED_RESOURCE_TYPES</code>.</p>
   *          <p>If you set this field to <code>true</code>, when Config
   * 			adds support for a new type of global resource in the Region where you set up the configuration recorder, Config starts recording
   * 			resources of that type automatically.</p>
   *          <note>
   *             <p>If you set this field to <code>false</code> but list global resource types in the <code>resourceTypes</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html">RecordingGroup</a>,
   * 			Config will still record configuration changes for those specified resource types <i>regardless</i> of if you set the <code>includeGlobalResourceTypes</code> field to false.</p>
   *             <p>If you do not want to record configuration changes to global resource types, make sure to not list them in the <code>resourceTypes</code> field
   * 			in addition to setting the <code>includeGlobalResourceTypes</code> field to false.</p>
   *          </note>
   */
  includeGlobalResourceTypes?: boolean;

  /**
   * <p>A comma-separated list that specifies which resource types Config
   * 			records.</p>
   *          <p>Optionally, you can set the <code>useOnly</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingStrategy.html">RecordingStrategy</a> to <code>INCLUSION_BY_RESOURCE_TYPES</code>.</p>
   *          <p>To record all configuration changes,
   * 				set the <code>allSupported</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html">RecordingGroup</a> to
   * 				<code>true</code>, and either omit this field or don't specify any resource types in this field. If you set the <code>allSupported</code> field to <code>false</code> and specify values for <code>resourceTypes</code>,
   * 					when Config adds support for a new type of resource,
   * 					it will not record resources of that type unless you manually add that type to your recording group.</p>
   *          <p>For a list of valid <code>resourceTypes</code> values, see the
   * 				<b>Resource Type Value</b> column in
   * 				<a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported Amazon Web Services resource Types</a> in the <i>Config developer guide</i>.</p>
   *          <note>
   *             <p>
   *                <b>Region Availability</b>
   *             </p>
   *             <p>Before specifying a resource type for Config to track,
   * 				check <a href="https://docs.aws.amazon.com/config/latest/developerguide/what-is-resource-config-coverage.html">Resource Coverage by Region Availability</a>
   * 				to see if the resource type is supported in the Amazon Web Services Region where you set up Config.
   * 				If a resource type is supported by Config in at least one Region,
   * 				you can enable the recording of that resource type in all Regions supported by Config,
   * 				even if the specified resource type is not supported in the Amazon Web Services Region where you set up Config.</p>
   *          </note>
   */
  resourceTypes?: (ResourceType | string)[];

  /**
   * <p>An object that specifies how Config excludes resource types from being recorded by the configuration recorder.</p>
   *          <p>To use this option, you must set the <code>useOnly</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingStrategy.html">RecordingStrategy</a> to <code>EXCLUSION_BY_RESOURCE_TYPES</code>.</p>
   */
  exclusionByResourceTypes?: ExclusionByResourceTypes;

  /**
   * <p>An object that specifies the recording strategy for the configuration recorder.</p>
   *          <ul>
   *             <li>
   *                <p>If you set the <code>useOnly</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingStrategy.html">RecordingStrategy</a> to <code>ALL_SUPPORTED_RESOURCE_TYPES</code>, Config records configuration changes for all supported regional resource types. You also must set the <code>allSupported</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html">RecordingGroup</a> to <code>true</code>. When Config adds support for a new type of regional resource, Config automatically starts recording resources of that type.</p>
   *             </li>
   *             <li>
   *                <p>If you set the <code>useOnly</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingStrategy.html">RecordingStrategy</a> to <code>INCLUSION_BY_RESOURCE_TYPES</code>, Config records configuration changes for only the resource types you specify in the <code>resourceTypes</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html">RecordingGroup</a>.</p>
   *             </li>
   *             <li>
   *                <p>If you set the <code>useOnly</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingStrategy.html">RecordingStrategy</a> to <code>EXCLUSION_BY_RESOURCE_TYPES</code>, Config records configuration changes for all supported resource types
   * 				except the resource types that you specify as exemptions to exclude from being recorded in the <code>resourceTypes</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_ExclusionByResourceTypes.html">ExclusionByResourceTypes</a>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>recordingStrategy</code> field is optional when you set the
   * 			<code>allSupported</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html">RecordingGroup</a> to <code>true</code>.</p>
   *             <p>The <code>recordingStrategy</code> field is optional when you list resource types in the
   * 				<code>resourceTypes</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html">RecordingGroup</a>.</p>
   *             <p>The <code>recordingStrategy</code> field is required if you list resource types to exclude from recording in the <code>resourceTypes</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_ExclusionByResourceTypes.html">ExclusionByResourceTypes</a>.</p>
   *          </note>
   *          <note>
   *             <p>If you choose <code>EXCLUSION_BY_RESOURCE_TYPES</code> for the recording strategy, the <code>exclusionByResourceTypes</code> field will override other properties in the request.</p>
   *             <p>For example, even if you set <code>includeGlobalResourceTypes</code> to false, global resource types will still be automatically
   * 			recorded in this option unless those resource types are specifically listed as exemptions in the <code>resourceTypes</code> field of <code>exclusionByResourceTypes</code>.</p>
   *             <p>By default, if you choose the <code>EXCLUSION_BY_RESOURCE_TYPES</code> recording strategy,
   * 				when Config adds support for a new resource type in the Region where you set up the configuration recorder, including global resource types,
   * 				Config starts recording resources of that type automatically.</p>
   *          </note>
   */
  recordingStrategy?: RecordingStrategy;
}

/**
 * @public
 * <p>Records configuration changes to specified resource types.
 * 			For more information about the configuration recorder,
 * 			see <a href="https://docs.aws.amazon.com/config/latest/developerguide/stop-start-recorder.html">
 *                <b>Managing the Configuration Recorder</b>
 *             </a> in the <i>Config Developer Guide</i>.</p>
 */
export interface ConfigurationRecorder {
  /**
   * <p>The name of the configuration recorder. Config automatically assigns the name of "default" when creating the configuration recorder.</p>
   *          <p>You cannot change the name of the configuration recorder after it has been created. To change the configuration recorder name, you must delete it and create a new configuration recorder with a new name. </p>
   */
  name?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the IAM role assumed by  Config and used by the configuration recorder.</p>
   *          <note>
   *             <p>While the API model does not require this field, the server will reject a request without a defined <code>roleARN</code> for the configuration recorder.</p>
   *          </note>
   *          <note>
   *             <p>
   *                <b>Pre-existing Config role</b>
   *             </p>
   *             <p>If you have used an Amazon Web Services service that uses Config, such as Security Hub or
   * 				Control Tower, and an Config role has already been created, make sure that the
   * 				IAM role that you use when setting up Config keeps the same minimum
   * 				permissions as the already created Config role. You must do this so that the
   * 				other Amazon Web Services service continues to run as expected. </p>
   *             <p>For example, if Control Tower has an IAM role that allows Config to read
   * 				Amazon Simple Storage Service  (Amazon S3) objects, make sure that the same permissions are granted
   * 				within the IAM  role you use when setting up Config. Otherwise, it may
   * 				interfere with how Control Tower  operates. For more information about IAM
   * 				roles for Config,
   * 				see <a href="https://docs.aws.amazon.com/config/latest/developerguide/security-iam.html">
   *                   <b>Identity and Access Management for Config</b>
   *                </a> in the <i>Config Developer Guide</i>.
   * 			</p>
   *          </note>
   */
  roleARN?: string;

  /**
   * <p>Specifies which resource types Config
   * 			records for configuration changes.</p>
   *          <note>
   *             <p>
   *                <b> High Number of Config Evaluations</b>
   *             </p>
   *             <p>You may notice increased activity in your account during your initial month recording with Config when compared to subsequent months. During the
   * 				initial bootstrapping process, Config runs evaluations on all the resources in your account that you have selected
   * 				for Config to record.</p>
   *             <p>If you are running ephemeral workloads, you may see increased activity from Config as it records configuration changes associated with creating and deleting these
   * 				temporary resources. An <i>ephemeral workload</i> is a temporary use of computing resources that are loaded
   * 				and run when needed. Examples include Amazon Elastic Compute Cloud (Amazon EC2)
   * 				Spot Instances, Amazon EMR jobs, and Auto Scaling. If you want
   * 				to avoid the increased activity from running ephemeral workloads, you can run these
   * 				types of workloads in a separate account with Config turned off to avoid
   * 				increased configuration recording and rule evaluations.</p>
   *          </note>
   */
  recordingGroup?: RecordingGroup;
}

/**
 * @public
 * @enum
 */
export const RecorderStatus = {
  Failure: "Failure",
  Pending: "Pending",
  Success: "Success",
} as const;

/**
 * @public
 */
export type RecorderStatus = (typeof RecorderStatus)[keyof typeof RecorderStatus];

/**
 * @public
 * <p>The current status of the configuration recorder.</p>
 *          <note>
 *             <p>For a detailed status of recording events over time, add your Config events to CloudWatch metrics and use CloudWatch metrics.</p>
 *          </note>
 */
export interface ConfigurationRecorderStatus {
  /**
   * <p>The name of the configuration recorder.</p>
   */
  name?: string;

  /**
   * <p>The time the recorder was last started.</p>
   */
  lastStartTime?: Date;

  /**
   * <p>The time the recorder was last stopped.</p>
   */
  lastStopTime?: Date;

  /**
   * <p>Specifies whether or not the recorder is currently
   * 			recording.</p>
   */
  recording?: boolean;

  /**
   * <p>The status of the latest recording event processed by the recorder.</p>
   */
  lastStatus?: RecorderStatus | string;

  /**
   * <p>The latest error code from when the recorder last failed.</p>
   */
  lastErrorCode?: string;

  /**
   * <p>The latest error message from when the recorder last failed.</p>
   */
  lastErrorMessage?: string;

  /**
   * <p>The time of the latest change in status of an recording event processed by the recorder.</p>
   */
  lastStatusChangeTime?: Date;
}

/**
 * @public
 * <p>Filters the conformance pack by compliance types and Config rule names.</p>
 */
export interface ConformancePackComplianceFilters {
  /**
   * <p>Filters the results by Config rule names.</p>
   */
  ConfigRuleNames?: string[];

  /**
   * <p>Filters the results by compliance.</p>
   *          <p>The allowed values are <code>COMPLIANT</code> and <code>NON_COMPLIANT</code>. <code>INSUFFICIENT_DATA</code> is not supported.</p>
   */
  ComplianceType?: ConformancePackComplianceType | string;
}

/**
 * @public
 * <p>A compliance score is the percentage of the number of compliant rule-resource combinations in a conformance pack compared to the number of total possible rule-resource combinations in the conformance pack.
 * 			This metric provides you with a high-level view of the compliance state of your conformance packs. You can use it to identify, investigate, and understand
 * 			the level of compliance in your conformance packs.</p>
 */
export interface ConformancePackComplianceScore {
  /**
   * <p>Compliance score for the conformance pack. Conformance packs with no evaluation results will have a compliance score of <code>INSUFFICIENT_DATA</code>.</p>
   */
  Score?: string;

  /**
   * <p>The name of the conformance pack.</p>
   */
  ConformancePackName?: string;

  /**
   * <p>The time that the conformance pack compliance score was last updated.</p>
   */
  LastUpdatedTime?: Date;
}

/**
 * @public
 * <p>A list of filters to apply to the conformance pack compliance score result set. </p>
 */
export interface ConformancePackComplianceScoresFilters {
  /**
   * <p>The names of the conformance packs whose compliance scores you want to include in the conformance pack compliance score result set.
   * 			You can include up to 25 conformance packs in the <code>ConformancePackNames</code> array of strings, each with a character limit of 256 characters for the conformance pack name.</p>
   */
  ConformancePackNames: string[] | undefined;
}

/**
 * @public
 * <p>Summary includes the name and status of the conformance pack.</p>
 */
export interface ConformancePackComplianceSummary {
  /**
   * <p>The name of the conformance pack name.</p>
   */
  ConformancePackName: string | undefined;

  /**
   * <p>The status of the conformance pack.</p>
   */
  ConformancePackComplianceStatus: ConformancePackComplianceType | string | undefined;
}

/**
 * @public
 * <p>Input parameters in the form of key-value pairs for the conformance pack, both of which you define.
 * 			Keys can have a maximum character length of 255 characters, and values can have a maximum length of 4096 characters.</p>
 */
export interface ConformancePackInputParameter {
  /**
   * <p>One part of a key-value pair.</p>
   */
  ParameterName: string | undefined;

  /**
   * <p>Another part of the key-value pair. </p>
   */
  ParameterValue: string | undefined;
}

/**
 * @public
 * <p>This API allows you to create a conformance pack template with an Amazon Web Services Systems Manager document (SSM document).
 * 			To deploy a conformance pack using an SSM document, first create an SSM document with conformance pack content, and then provide the <code>DocumentName</code> in the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConformancePack.html">PutConformancePack API</a>. You can also provide the <code>DocumentVersion</code>.</p>
 *          <p>The <code>TemplateSSMDocumentDetails</code> object contains the name of the SSM document and the version of the SSM document.</p>
 */
export interface TemplateSSMDocumentDetails {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the SSM document to use to create a conformance pack.
   * 			If you use the document name, Config checks only your account and Amazon Web Services Region for the SSM document. If you want to use an SSM document from another Region or account, you must provide the ARN.</p>
   */
  DocumentName: string | undefined;

  /**
   * <p>The version of the SSM document to use to create a conformance pack. By default, Config uses the latest version.</p>
   *          <note>
   *             <p>This field is optional.</p>
   *          </note>
   */
  DocumentVersion?: string;
}

/**
 * @public
 * <p>Returns details of a conformance pack. A conformance pack is a collection of Config rules and remediation actions that can be easily deployed in an account and a region.</p>
 */
export interface ConformancePackDetail {
  /**
   * <p>Name of the conformance pack.</p>
   */
  ConformancePackName: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the conformance pack.</p>
   */
  ConformancePackArn: string | undefined;

  /**
   * <p>ID of the conformance pack.</p>
   */
  ConformancePackId: string | undefined;

  /**
   * <p>The name of the Amazon S3 bucket where Config stores conformance pack templates. </p>
   *          <note>
   *             <p>This field is optional.</p>
   *          </note>
   */
  DeliveryS3Bucket?: string;

  /**
   * <p>The prefix for the Amazon S3 bucket.</p>
   *          <note>
   *             <p>This field is optional.</p>
   *          </note>
   */
  DeliveryS3KeyPrefix?: string;

  /**
   * <p>A list of <code>ConformancePackInputParameter</code> objects.</p>
   */
  ConformancePackInputParameters?: ConformancePackInputParameter[];

  /**
   * <p>The last time a conformation pack update was requested. </p>
   */
  LastUpdateRequestedTime?: Date;

  /**
   * <p>The Amazon Web Services service that created the conformance pack.</p>
   */
  CreatedBy?: string;

  /**
   * <p>An object that contains the name or Amazon Resource Name (ARN) of the Amazon Web Services Systems Manager document (SSM document) and the version of the SSM document that is used to create a conformance pack.</p>
   */
  TemplateSSMDocumentDetails?: TemplateSSMDocumentDetails;
}

/**
 * @public
 * <p>Filters a conformance pack by Config rule names, compliance types, Amazon Web Services resource types, and resource IDs.</p>
 */
export interface ConformancePackEvaluationFilters {
  /**
   * <p>Filters the results by Config rule names.</p>
   */
  ConfigRuleNames?: string[];

  /**
   * <p>Filters the results by compliance.</p>
   *          <p>The allowed values are <code>COMPLIANT</code> and <code>NON_COMPLIANT</code>. <code>INSUFFICIENT_DATA</code> is not supported.</p>
   */
  ComplianceType?: ConformancePackComplianceType | string;

  /**
   * <p>Filters the results by the resource type (for example, <code>"AWS::EC2::Instance"</code>). </p>
   */
  ResourceType?: string;

  /**
   * <p>Filters the results by resource IDs.</p>
   *          <note>
   *             <p>This is valid only when you provide resource type. If there is no resource type, you will see an error.</p>
   *          </note>
   */
  ResourceIds?: string[];
}

/**
 * @public
 * <p>The details of a conformance pack evaluation. Provides Config rule and Amazon Web Services resource type that was evaluated, the compliance of the conformance pack, related time stamps, and supplementary information. </p>
 */
export interface ConformancePackEvaluationResult {
  /**
   * <p>The compliance type. The allowed values are <code>COMPLIANT</code> and <code>NON_COMPLIANT</code>. <code>INSUFFICIENT_DATA</code> is not supported.</p>
   */
  ComplianceType: ConformancePackComplianceType | string | undefined;

  /**
   * <p>Uniquely identifies an evaluation result.</p>
   */
  EvaluationResultIdentifier: EvaluationResultIdentifier | undefined;

  /**
   * <p>The time when Config rule evaluated Amazon Web Services resource.</p>
   */
  ConfigRuleInvokedTime: Date | undefined;

  /**
   * <p>The time when Config recorded the evaluation result. </p>
   */
  ResultRecordedTime: Date | undefined;

  /**
   * <p>Supplementary information about how the evaluation determined the compliance. </p>
   */
  Annotation?: string;
}

/**
 * @public
 * <p>Compliance information of one or more Config rules within a conformance pack. You can filter using Config rule names and compliance types.</p>
 */
export interface ConformancePackRuleCompliance {
  /**
   * <p>Name of the Config rule.</p>
   */
  ConfigRuleName?: string;

  /**
   * <p>Compliance of the Config rule.</p>
   */
  ComplianceType?: ConformancePackComplianceType | string;

  /**
   * <p>Controls for the conformance pack. A control is a process to prevent or detect problems while meeting objectives.
   * 			A control can align with a specific compliance regime or map to internal controls defined by an organization.</p>
   */
  Controls?: string[];
}

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
 * <p>Status details of a conformance pack.</p>
 */
export interface ConformancePackStatusDetail {
  /**
   * <p>Name of the conformance pack.</p>
   */
  ConformancePackName: string | undefined;

  /**
   * <p>ID of the conformance pack.</p>
   */
  ConformancePackId: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of comformance pack.</p>
   */
  ConformancePackArn: string | undefined;

  /**
   * <p>Indicates deployment status of conformance pack.</p>
   *          <p>Config sets the state of the conformance pack to:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE_IN_PROGRESS when a conformance pack creation is in progress for an account.</p>
   *             </li>
   *             <li>
   *                <p>CREATE_COMPLETE when a conformance pack has been successfully created in your account.</p>
   *             </li>
   *             <li>
   *                <p>CREATE_FAILED when a conformance pack creation failed in your account.</p>
   *             </li>
   *             <li>
   *                <p>DELETE_IN_PROGRESS when a conformance pack deletion is in progress. </p>
   *             </li>
   *             <li>
   *                <p>DELETE_FAILED when a conformance pack deletion failed in your account.</p>
   *             </li>
   *          </ul>
   */
  ConformancePackState: ConformancePackState | string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of CloudFormation stack. </p>
   */
  StackArn: string | undefined;

  /**
   * <p>The reason of conformance pack creation failure.</p>
   */
  ConformancePackStatusReason?: string;

  /**
   * <p>Last time when conformation pack creation and update was requested.</p>
   */
  LastUpdateRequestedTime: Date | undefined;

  /**
   * <p>Last time when conformation pack creation and update was successful.</p>
   */
  LastUpdateCompletedTime?: Date;
}

/**
 * @public
 * <p>You have specified a template that is not valid or supported.</p>
 */
export class ConformancePackTemplateValidationException extends __BaseException {
  readonly name: "ConformancePackTemplateValidationException" = "ConformancePackTemplateValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConformancePackTemplateValidationException, __BaseException>) {
    super({
      name: "ConformancePackTemplateValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConformancePackTemplateValidationException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteAggregationAuthorizationRequest {
  /**
   * <p>The 12-digit account ID of the account authorized to aggregate
   * 			data.</p>
   */
  AuthorizedAccountId: string | undefined;

  /**
   * <p>The region authorized to collect aggregated data.</p>
   */
  AuthorizedAwsRegion: string | undefined;
}

/**
 * @public
 * <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 */
export class InvalidParameterValueException extends __BaseException {
  readonly name: "InvalidParameterValueException" = "InvalidParameterValueException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValueException, __BaseException>) {
    super({
      name: "InvalidParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
  }
}

/**
 * @public
 * <p></p>
 */
export interface DeleteConfigRuleRequest {
  /**
   * <p>The name of the Config rule that you want to
   * 			delete.</p>
   */
  ConfigRuleName: string | undefined;
}

/**
 * @public
 * <p>The Config rule in the request is not valid. Verify that the rule is an Config Process Check rule, that the rule name is correct, and that valid Amazon Resouce Names (ARNs) are used before trying again.</p>
 */
export class NoSuchConfigRuleException extends __BaseException {
  readonly name: "NoSuchConfigRuleException" = "NoSuchConfigRuleException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchConfigRuleException, __BaseException>) {
    super({
      name: "NoSuchConfigRuleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchConfigRuleException.prototype);
  }
}

/**
 * @public
 * <p>You see this exception in the following cases: </p>
 *          <ul>
 *             <li>
 *                <p>For DeleteConfigRule, Config is deleting this rule. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteConfigRule, the rule is deleting your evaluation results. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteConfigRule, a remediation action is associated with the rule and Config cannot delete this rule. Delete the remediation action associated with the rule before deleting the rule and try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For PutConfigOrganizationRule, organization Config rule deletion is in progress. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteOrganizationConfigRule, organization Config rule creation is in progress. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For PutConformancePack and PutOrganizationConformancePack, a conformance pack creation, update, and deletion is in progress. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteConformancePack, a conformance pack creation, update, and deletion is in progress. Try your request again later.</p>
 *             </li>
 *          </ul>
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteConfigurationAggregatorRequest {
  /**
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string | undefined;
}

/**
 * @public
 * <p>The request object for the
 * 				<code>DeleteConfigurationRecorder</code> action.</p>
 */
export interface DeleteConfigurationRecorderRequest {
  /**
   * <p>The name of the configuration recorder to be deleted. You can
   * 			retrieve the name of your configuration recorder by using the
   * 				<code>DescribeConfigurationRecorders</code> action.</p>
   */
  ConfigurationRecorderName: string | undefined;
}

/**
 * @public
 * <p>You have specified a configuration recorder that does not
 * 			exist.</p>
 */
export class NoSuchConfigurationRecorderException extends __BaseException {
  readonly name: "NoSuchConfigurationRecorderException" = "NoSuchConfigurationRecorderException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchConfigurationRecorderException, __BaseException>) {
    super({
      name: "NoSuchConfigurationRecorderException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchConfigurationRecorderException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteConformancePackRequest {
  /**
   * <p>Name of the conformance pack you want to delete.</p>
   */
  ConformancePackName: string | undefined;
}

/**
 * @public
 * <p>You specified one or more conformance packs that do not exist.</p>
 */
export class NoSuchConformancePackException extends __BaseException {
  readonly name: "NoSuchConformancePackException" = "NoSuchConformancePackException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchConformancePackException, __BaseException>) {
    super({
      name: "NoSuchConformancePackException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchConformancePackException.prototype);
  }
}

/**
 * @public
 * <p>The input for the <a>DeleteDeliveryChannel</a>
 * 			action. The action accepts the following data, in JSON format.
 * 		</p>
 */
export interface DeleteDeliveryChannelRequest {
  /**
   * <p>The name of the delivery channel to delete.</p>
   */
  DeliveryChannelName: string | undefined;
}

/**
 * @public
 * <p>You cannot delete the delivery channel you specified because
 * 			the configuration recorder is running.</p>
 */
export class LastDeliveryChannelDeleteFailedException extends __BaseException {
  readonly name: "LastDeliveryChannelDeleteFailedException" = "LastDeliveryChannelDeleteFailedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LastDeliveryChannelDeleteFailedException, __BaseException>) {
    super({
      name: "LastDeliveryChannelDeleteFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LastDeliveryChannelDeleteFailedException.prototype);
  }
}

/**
 * @public
 * <p>You have specified a delivery channel that does not
 * 			exist.</p>
 */
export class NoSuchDeliveryChannelException extends __BaseException {
  readonly name: "NoSuchDeliveryChannelException" = "NoSuchDeliveryChannelException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchDeliveryChannelException, __BaseException>) {
    super({
      name: "NoSuchDeliveryChannelException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchDeliveryChannelException.prototype);
  }
}

/**
 * @public
 * <p></p>
 */
export interface DeleteEvaluationResultsRequest {
  /**
   * <p>The name of the Config rule for which you want to delete
   * 			the evaluation results.</p>
   */
  ConfigRuleName: string | undefined;
}

/**
 * @public
 * <p>The output when you delete the evaluation results for the
 * 			specified Config rule.</p>
 */
export interface DeleteEvaluationResultsResponse {}

/**
 * @public
 */
export interface DeleteOrganizationConfigRuleRequest {
  /**
   * <p>The name of organization Config rule that you want to delete.</p>
   */
  OrganizationConfigRuleName: string | undefined;
}

/**
 * @public
 * <p>The Config rule in the request is not valid. Verify that the rule is an organization Config Process Check rule, that the rule name is correct, and that valid Amazon Resouce Names (ARNs) are used before trying again.</p>
 */
export class NoSuchOrganizationConfigRuleException extends __BaseException {
  readonly name: "NoSuchOrganizationConfigRuleException" = "NoSuchOrganizationConfigRuleException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchOrganizationConfigRuleException, __BaseException>) {
    super({
      name: "NoSuchOrganizationConfigRuleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchOrganizationConfigRuleException.prototype);
  }
}

/**
 * @public
 * <p>For <code>PutConfigurationAggregator</code> API, you can see this exception for the following reasons:</p>
 *          <ul>
 *             <li>
 *                <p>No permission to call <code>EnableAWSServiceAccess</code> API</p>
 *             </li>
 *             <li>
 *                <p>The configuration aggregator cannot be updated because your Amazon Web Services Organization management account or the delegated administrator role changed.
 * 				Delete this aggregator and create a new one with the current Amazon Web Services Organization.</p>
 *             </li>
 *             <li>
 *                <p>The configuration aggregator is associated with a previous Amazon Web Services Organization and Config cannot aggregate data with current Amazon Web Services Organization.
 * 				Delete this aggregator and create a new one with the current Amazon Web Services Organization.</p>
 *             </li>
 *             <li>
 *                <p>You are not a registered delegated administrator for Config with permissions to call <code>ListDelegatedAdministrators</code> API.
 * 			Ensure that the management account registers delagated administrator for Config service principle name before the delegated administrator creates an aggregator.</p>
 *             </li>
 *          </ul>
 *          <p>For all <code>OrganizationConfigRule</code> and <code>OrganizationConformancePack</code> APIs, Config throws an exception if APIs are called from member accounts. All APIs must be called from organization management account.</p>
 */
export class OrganizationAccessDeniedException extends __BaseException {
  readonly name: "OrganizationAccessDeniedException" = "OrganizationAccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OrganizationAccessDeniedException, __BaseException>) {
    super({
      name: "OrganizationAccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OrganizationAccessDeniedException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteOrganizationConformancePackRequest {
  /**
   * <p>The name of organization conformance pack that you want to delete.</p>
   */
  OrganizationConformancePackName: string | undefined;
}

/**
 * @public
 * <p>Config organization conformance pack that you passed in the filter does not exist.</p>
 *          <p>For DeleteOrganizationConformancePack, you tried to delete an organization conformance pack that does not exist.</p>
 */
export class NoSuchOrganizationConformancePackException extends __BaseException {
  readonly name: "NoSuchOrganizationConformancePackException" = "NoSuchOrganizationConformancePackException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchOrganizationConformancePackException, __BaseException>) {
    super({
      name: "NoSuchOrganizationConformancePackException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchOrganizationConformancePackException.prototype);
  }
}

/**
 * @public
 */
export interface DeletePendingAggregationRequestRequest {
  /**
   * <p>The 12-digit account ID of the account requesting to aggregate
   * 			data.</p>
   */
  RequesterAccountId: string | undefined;

  /**
   * <p>The region requesting to aggregate data.</p>
   */
  RequesterAwsRegion: string | undefined;
}

/**
 * @public
 */
export interface DeleteRemediationConfigurationRequest {
  /**
   * <p>The name of the Config rule for which you want to delete remediation configuration.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>The type of a resource.</p>
   */
  ResourceType?: string;
}

/**
 * @public
 */
export interface DeleteRemediationConfigurationResponse {}

/**
 * @public
 * <p>Indicates one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>For PutConfigRule, the rule cannot be created because the IAM role assigned to Config lacks permissions to perform the config:Put* action.</p>
 *             </li>
 *             <li>
 *                <p>For PutConfigRule, the Lambda function cannot be invoked. Check the function ARN, and check the function's permissions.</p>
 *             </li>
 *             <li>
 *                <p>For PutOrganizationConfigRule, organization Config rule cannot be created because you do not have permissions to call IAM <code>GetRole</code> action or create a service-linked role.</p>
 *             </li>
 *             <li>
 *                <p>For PutConformancePack and PutOrganizationConformancePack, a conformance pack cannot be created because you do not have the following permissions: </p>
 *                <ul>
 *                   <li>
 *                      <p>You do not have permission to call IAM <code>GetRole</code> action or create a service-linked role.</p>
 *                   </li>
 *                   <li>
 *                      <p>You do not have permission to read Amazon S3 bucket or call SSM:GetDocument.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 */
export class InsufficientPermissionsException extends __BaseException {
  readonly name: "InsufficientPermissionsException" = "InsufficientPermissionsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientPermissionsException, __BaseException>) {
    super({
      name: "InsufficientPermissionsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientPermissionsException.prototype);
  }
}

/**
 * @public
 * <p>You specified an Config rule without a remediation configuration.</p>
 */
export class NoSuchRemediationConfigurationException extends __BaseException {
  readonly name: "NoSuchRemediationConfigurationException" = "NoSuchRemediationConfigurationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchRemediationConfigurationException, __BaseException>) {
    super({
      name: "NoSuchRemediationConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchRemediationConfigurationException.prototype);
  }
}

/**
 * @public
 * <p>Remediation action is in progress. You can either cancel execution in Amazon Web Services Systems Manager or wait and try again later. </p>
 */
export class RemediationInProgressException extends __BaseException {
  readonly name: "RemediationInProgressException" = "RemediationInProgressException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RemediationInProgressException, __BaseException>) {
    super({
      name: "RemediationInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RemediationInProgressException.prototype);
  }
}

/**
 * @public
 * <p>The details that identify a resource within Config, including the resource type and resource ID. </p>
 */
export interface RemediationExceptionResourceKey {
  /**
   * <p>The type of a resource.</p>
   */
  ResourceType?: string;

  /**
   * <p>The ID of the resource (for example., sg-xxxxxx).</p>
   */
  ResourceId?: string;
}

/**
 * @public
 */
export interface DeleteRemediationExceptionsRequest {
  /**
   * <p>The name of the Config rule for which you want to delete remediation exception configuration.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>An exception list of resource exception keys to be processed with the current request. Config adds exception for each resource key. For example, Config adds 3 exceptions for 3 resource keys. </p>
   */
  ResourceKeys: RemediationExceptionResourceKey[] | undefined;
}

/**
 * @public
 * <p>List of each of the failed delete remediation exceptions with specific reasons.</p>
 */
export interface FailedDeleteRemediationExceptionsBatch {
  /**
   * <p>Returns a failure message for delete remediation exception. For example, Config creates an exception due to an internal error.</p>
   */
  FailureMessage?: string;

  /**
   * <p>Returns remediation exception resource key object of the failed items.</p>
   */
  FailedItems?: RemediationExceptionResourceKey[];
}

/**
 * @public
 */
export interface DeleteRemediationExceptionsResponse {
  /**
   * <p>Returns a list of failed delete remediation exceptions batch objects. Each object in the batch consists of a list of failed items and failure messages.</p>
   */
  FailedBatches?: FailedDeleteRemediationExceptionsBatch[];
}

/**
 * @public
 * <p>You tried to delete a remediation exception that does not exist.</p>
 */
export class NoSuchRemediationExceptionException extends __BaseException {
  readonly name: "NoSuchRemediationExceptionException" = "NoSuchRemediationExceptionException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchRemediationExceptionException, __BaseException>) {
    super({
      name: "NoSuchRemediationExceptionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchRemediationExceptionException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteResourceConfigRequest {
  /**
   * <p>The type of the resource.</p>
   */
  ResourceType: string | undefined;

  /**
   * <p>Unique identifier of the resource.</p>
   */
  ResourceId: string | undefined;
}

/**
 * @public
 * <p>There is no configuration recorder running.</p>
 */
export class NoRunningConfigurationRecorderException extends __BaseException {
  readonly name: "NoRunningConfigurationRecorderException" = "NoRunningConfigurationRecorderException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoRunningConfigurationRecorderException, __BaseException>) {
    super({
      name: "NoRunningConfigurationRecorderException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoRunningConfigurationRecorderException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteRetentionConfigurationRequest {
  /**
   * <p>The name of the retention configuration to delete.</p>
   */
  RetentionConfigurationName: string | undefined;
}

/**
 * @public
 * <p>You have specified a retention configuration that does not exist.</p>
 */
export class NoSuchRetentionConfigurationException extends __BaseException {
  readonly name: "NoSuchRetentionConfigurationException" = "NoSuchRetentionConfigurationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchRetentionConfigurationException, __BaseException>) {
    super({
      name: "NoSuchRetentionConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchRetentionConfigurationException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteStoredQueryRequest {
  /**
   * <p>The name of the query that you want to delete.</p>
   */
  QueryName: string | undefined;
}

/**
 * @public
 */
export interface DeleteStoredQueryResponse {}

/**
 * @public
 * <p>You have specified a resource that does not exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * @public
 * <p>The input for the <a>DeliverConfigSnapshot</a>
 * 			action.</p>
 */
export interface DeliverConfigSnapshotRequest {
  /**
   * <p>The name of the delivery channel through which the snapshot is
   * 			delivered.</p>
   */
  deliveryChannelName: string | undefined;
}

/**
 * @public
 * <p>The output for the <a>DeliverConfigSnapshot</a>
 * 			action, in JSON format.</p>
 */
export interface DeliverConfigSnapshotResponse {
  /**
   * <p>The ID of the snapshot that is being created.</p>
   */
  configSnapshotId?: string;
}

/**
 * @public
 * <p>The channel through which Config delivers notifications and
 * 			updated configuration states.</p>
 */
export interface DeliveryChannel {
  /**
   * <p>The name of the delivery channel. By default, Config
   * 			assigns the name "default" when creating the delivery channel. To
   * 			change the delivery channel name, you must use the
   * 			DeleteDeliveryChannel action to delete your current delivery
   * 			channel, and then you must use the PutDeliveryChannel command to
   * 			create a delivery channel that has the desired name.</p>
   */
  name?: string;

  /**
   * <p>The name of the Amazon S3 bucket to which Config delivers
   * 			configuration snapshots and configuration history files.</p>
   *          <p>If you specify a bucket that belongs to another Amazon Web Services account,
   * 			that bucket must have policies that grant access permissions to Config. For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-policy.html">Permissions for the Amazon S3 Bucket</a> in the <i>Config
   * 			Developer Guide</i>.</p>
   */
  s3BucketName?: string;

  /**
   * <p>The prefix for the specified Amazon S3 bucket.</p>
   */
  s3KeyPrefix?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Key Management Service (KMS ) KMS key (KMS key) used to encrypt objects delivered by Config.
   * 			Must belong to the same Region as the destination S3 bucket.</p>
   */
  s3KmsKeyArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which
   * 			Config sends notifications about configuration
   * 			changes.</p>
   *          <p>If you choose a topic from another account, the topic must have
   * 			policies that grant access permissions to Config. For more
   * 			information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/sns-topic-policy.html">Permissions for the Amazon SNS Topic</a> in the <i>Config
   * 			Developer Guide</i>.</p>
   */
  snsTopicARN?: string;

  /**
   * <p>The options for how often Config delivers configuration
   * 			snapshots to the Amazon S3 bucket.</p>
   */
  configSnapshotDeliveryProperties?: ConfigSnapshotDeliveryProperties;
}

/**
 * @public
 * <p>The status of a specified delivery channel.</p>
 *          <p>Valid values: <code>Success</code> | <code>Failure</code>
 *          </p>
 */
export interface DeliveryChannelStatus {
  /**
   * <p>The name of the delivery channel.</p>
   */
  name?: string;

  /**
   * <p>A list containing the status of the delivery of the snapshot to
   * 			the specified Amazon S3 bucket.</p>
   */
  configSnapshotDeliveryInfo?: ConfigExportDeliveryInfo;

  /**
   * <p>A list that contains the status of the delivery of the
   * 			configuration history to the specified Amazon S3 bucket.</p>
   */
  configHistoryDeliveryInfo?: ConfigExportDeliveryInfo;

  /**
   * <p>A list containing the status of the delivery of the
   * 			configuration stream notification to the specified Amazon SNS
   * 			topic.</p>
   */
  configStreamDeliveryInfo?: ConfigStreamDeliveryInfo;
}

/**
 * @public
 */
export interface DescribeAggregateComplianceByConfigRulesRequest {
  /**
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>Filters the results by ConfigRuleComplianceFilters object.
   * 		</p>
   */
  Filters?: ConfigRuleComplianceFilters;

  /**
   * <p>The maximum number of evaluation results returned on each page.
   * 			The default is
   * 			maximum.
   * 			If you specify 0, Config uses the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeAggregateComplianceByConfigRulesResponse {
  /**
   * <p>Returns a list of AggregateComplianceByConfigRule
   * 			object.</p>
   */
  AggregateComplianceByConfigRules?: AggregateComplianceByConfigRule[];

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The specified limit is outside the allowable range.</p>
 */
export class InvalidLimitException extends __BaseException {
  readonly name: "InvalidLimitException" = "InvalidLimitException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLimitException, __BaseException>) {
    super({
      name: "InvalidLimitException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLimitException.prototype);
  }
}

/**
 * @public
 * <p>The specified next token is not valid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
  }
}

/**
 * @public
 */
export interface DescribeAggregateComplianceByConformancePacksRequest {
  /**
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>Filters the result by <code>AggregateConformancePackComplianceFilters</code> object.</p>
   */
  Filters?: AggregateConformancePackComplianceFilters;

  /**
   * <p>The maximum number of conformance packs compliance details returned on each page. The default is maximum. If you specify 0, Config uses the default. </p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeAggregateComplianceByConformancePacksResponse {
  /**
   * <p>Returns the <code>AggregateComplianceByConformancePack</code> object.</p>
   */
  AggregateComplianceByConformancePacks?: AggregateComplianceByConformancePack[];

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeAggregationAuthorizationsRequest {
  /**
   * <p>The maximum number of AggregationAuthorizations returned on
   * 			each page. The default is maximum. If you specify 0, Config uses
   * 			the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeAggregationAuthorizationsResponse {
  /**
   * <p>Returns a list of authorizations granted to various aggregator
   * 			accounts and regions.</p>
   */
  AggregationAuthorizations?: AggregationAuthorization[];

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeComplianceByConfigRuleRequest {
  /**
   * <p>Specify one or more Config rule names to filter the results
   * 			by rule.</p>
   */
  ConfigRuleNames?: string[];

  /**
   * <p>Filters the results by compliance.</p>
   */
  ComplianceTypes?: (ComplianceType | string)[];

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeComplianceByConfigRuleResponse {
  /**
   * <p>Indicates whether each of the specified Config rules is
   * 			compliant.</p>
   */
  ComplianceByConfigRules?: ComplianceByConfigRule[];

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeComplianceByResourceRequest {
  /**
   * <p>The types of Amazon Web Services resources for which you want compliance
   * 			information (for example, <code>AWS::EC2::Instance</code>). For this
   * 			action, you can specify that the resource type is an Amazon Web Services account by
   * 			specifying <code>AWS::::Account</code>.</p>
   */
  ResourceType?: string;

  /**
   * <p>The ID of the Amazon Web Services resource for which you want compliance
   * 			information. You can specify only one resource ID. If you specify a
   * 			resource ID, you must also specify a type for
   * 				<code>ResourceType</code>.</p>
   */
  ResourceId?: string;

  /**
   * <p>Filters the results by compliance.</p>
   */
  ComplianceTypes?: (ComplianceType | string)[];

  /**
   * <p>The maximum number of evaluation results returned on each page.
   * 			The default is 10. You cannot specify a number greater than 100. If
   * 			you specify 0, Config uses the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeComplianceByResourceResponse {
  /**
   * <p>Indicates whether the specified Amazon Web Services resource complies with all
   * 			of the Config rules that evaluate it.</p>
   */
  ComplianceByResources?: ComplianceByResource[];

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeConfigRuleEvaluationStatusRequest {
  /**
   * <p>The name of the Config managed rules for which you want
   * 			status information. If you do not specify any names, Config
   * 			returns status information for all Config managed rules that you
   * 			use.</p>
   */
  ConfigRuleNames?: string[];

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   */
  NextToken?: string;

  /**
   * <p>The number of rule evaluation results that you want
   * 			returned.</p>
   *          <p>This parameter is required if the rule limit for your account
   * 			is more than the default of 150 rules.</p>
   *          <p>For information about requesting a rule limit increase, see
   * 				<a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_config">Config Limits</a> in the <i>Amazon Web Services General
   * 				Reference Guide</i>.</p>
   */
  Limit?: number;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeConfigRuleEvaluationStatusResponse {
  /**
   * <p>Status information about your Config managed rules.</p>
   */
  ConfigRulesEvaluationStatus?: ConfigRuleEvaluationStatus[];

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Returns a filtered list of Detective or Proactive Config rules. By default, if the filter is not defined, this API returns an unfiltered list. For more information on Detective or Proactive Config rules,
 * 			see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config-rules.html">
 *                <b>Evaluation Mode</b>
 *             </a> in the <i>Config Developer Guide</i>.</p>
 */
export interface DescribeConfigRulesFilters {
  /**
   * <p>The mode of an evaluation. The valid values are Detective or Proactive.</p>
   */
  EvaluationMode?: EvaluationMode | string;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeConfigRulesRequest {
  /**
   * <p>The names of the Config rules for which you want details.
   * 			If you do not specify any names, Config returns details for all
   * 			your rules.</p>
   */
  ConfigRuleNames?: string[];

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   */
  NextToken?: string;

  /**
   * <p>Returns a list of Detective or Proactive Config rules. By default, this API returns an unfiltered list. For more information on Detective or Proactive Config rules,
   * 			see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config-rules.html">
   *                <b>Evaluation Mode</b>
   *             </a> in the <i>Config Developer Guide</i>.</p>
   */
  Filters?: DescribeConfigRulesFilters;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeConfigRulesResponse {
  /**
   * <p>The details about your Config rules.</p>
   */
  ConfigRules?: ConfigRule[];

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeConfigurationAggregatorsRequest {
  /**
   * <p>The name of the configuration aggregators.</p>
   */
  ConfigurationAggregatorNames?: string[];

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of configuration aggregators returned on
   * 			each page. The default is maximum. If you specify 0, Config uses
   * 			the default.</p>
   */
  Limit?: number;
}

/**
 * @public
 */
export interface DescribeConfigurationAggregatorsResponse {
  /**
   * <p>Returns a ConfigurationAggregators object.</p>
   */
  ConfigurationAggregators?: ConfigurationAggregator[];

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeConfigurationAggregatorSourcesStatusRequest {
  /**
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>Filters the status type.</p>
   *          <ul>
   *             <li>
   *                <p>Valid value FAILED indicates errors while moving
   * 					data.</p>
   *             </li>
   *             <li>
   *                <p>Valid value SUCCEEDED indicates the data was
   * 					successfully moved.</p>
   *             </li>
   *             <li>
   *                <p>Valid value OUTDATED indicates the data is not the most
   * 					recent.</p>
   *             </li>
   *          </ul>
   */
  UpdateStatus?: (AggregatedSourceStatusType | string)[];

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of AggregatorSourceStatus returned on each
   * 			page. The default is maximum. If you specify 0, Config uses the
   * 			default.</p>
   */
  Limit?: number;
}

/**
 * @public
 */
export interface DescribeConfigurationAggregatorSourcesStatusResponse {
  /**
   * <p>Returns an AggregatedSourceStatus object.
   * 			</p>
   */
  AggregatedSourceStatusList?: AggregatedSourceStatus[];

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The input for the <a>DescribeConfigurationRecorders</a> action.</p>
 */
export interface DescribeConfigurationRecordersRequest {
  /**
   * <p>A list of configuration recorder names.</p>
   */
  ConfigurationRecorderNames?: string[];
}

/**
 * @public
 * <p>The output for the <a>DescribeConfigurationRecorders</a> action.</p>
 */
export interface DescribeConfigurationRecordersResponse {
  /**
   * <p>A list that contains the descriptions of the specified
   * 			configuration recorders.</p>
   */
  ConfigurationRecorders?: ConfigurationRecorder[];
}

/**
 * @public
 * <p>The input for the <a>DescribeConfigurationRecorderStatus</a>
 * 			action.</p>
 */
export interface DescribeConfigurationRecorderStatusRequest {
  /**
   * <p>The name(s) of the configuration recorder. If the name is not
   * 			specified, the action returns the current status of all the
   * 			configuration recorders associated with the account.</p>
   */
  ConfigurationRecorderNames?: string[];
}

/**
 * @public
 * <p>The output for the <a>DescribeConfigurationRecorderStatus</a> action, in JSON
 * 			format.</p>
 */
export interface DescribeConfigurationRecorderStatusResponse {
  /**
   * <p>A list that contains status of the specified
   * 			recorders.</p>
   */
  ConfigurationRecordersStatus?: ConfigurationRecorderStatus[];
}

/**
 * @public
 */
export interface DescribeConformancePackComplianceRequest {
  /**
   * <p>Name of the conformance pack.</p>
   */
  ConformancePackName: string | undefined;

  /**
   * <p>A <code>ConformancePackComplianceFilters</code> object.</p>
   */
  Filters?: ConformancePackComplianceFilters;

  /**
   * <p>The maximum number of Config rules within a conformance pack are returned on each page.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeConformancePackComplianceResponse {
  /**
   * <p>Name of the conformance pack.</p>
   */
  ConformancePackName: string | undefined;

  /**
   * <p>Returns a list of <code>ConformancePackRuleCompliance</code> objects.</p>
   */
  ConformancePackRuleComplianceList: ConformancePackRuleCompliance[] | undefined;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Config rule that you passed in the filter does not exist.</p>
 */
export class NoSuchConfigRuleInConformancePackException extends __BaseException {
  readonly name: "NoSuchConfigRuleInConformancePackException" = "NoSuchConfigRuleInConformancePackException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchConfigRuleInConformancePackException, __BaseException>) {
    super({
      name: "NoSuchConfigRuleInConformancePackException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchConfigRuleInConformancePackException.prototype);
  }
}

/**
 * @public
 */
export interface DescribeConformancePacksRequest {
  /**
   * <p>Comma-separated list of conformance pack names for which you want details. If you do not specify any names, Config returns details for all your conformance packs. </p>
   */
  ConformancePackNames?: string[];

  /**
   * <p>The maximum number of conformance packs returned on each page.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeConformancePacksResponse {
  /**
   * <p>Returns a list of <code>ConformancePackDetail</code> objects.</p>
   */
  ConformancePackDetails?: ConformancePackDetail[];

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeConformancePackStatusRequest {
  /**
   * <p>Comma-separated list of conformance pack names.</p>
   */
  ConformancePackNames?: string[];

  /**
   * <p>The maximum number of conformance packs status returned on each page.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeConformancePackStatusResponse {
  /**
   * <p>A list of <code>ConformancePackStatusDetail</code> objects.</p>
   */
  ConformancePackStatusDetails?: ConformancePackStatusDetail[];

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The input for the <a>DescribeDeliveryChannels</a>
 * 			action.</p>
 */
export interface DescribeDeliveryChannelsRequest {
  /**
   * <p>A list of delivery channel names.</p>
   */
  DeliveryChannelNames?: string[];
}

/**
 * @public
 * <p>The output for the <a>DescribeDeliveryChannels</a>
 * 			action.</p>
 */
export interface DescribeDeliveryChannelsResponse {
  /**
   * <p>A list that contains the descriptions of the specified delivery
   * 			channel.</p>
   */
  DeliveryChannels?: DeliveryChannel[];
}

/**
 * @public
 * <p>The input for the <a>DeliveryChannelStatus</a>
 * 			action.</p>
 */
export interface DescribeDeliveryChannelStatusRequest {
  /**
   * <p>A list of delivery channel names.</p>
   */
  DeliveryChannelNames?: string[];
}

/**
 * @public
 * <p>The output for the <a>DescribeDeliveryChannelStatus</a> action.</p>
 */
export interface DescribeDeliveryChannelStatusResponse {
  /**
   * <p>A list that contains the status of a specified delivery
   * 			channel.</p>
   */
  DeliveryChannelsStatus?: DeliveryChannelStatus[];
}

/**
 * @public
 */
export interface DescribeOrganizationConfigRulesRequest {
  /**
   * <p>The names of organization Config rules for which you want details. If you do not specify any names, Config returns details for all your organization Config rules.</p>
   */
  OrganizationConfigRuleNames?: string[];

  /**
   * <p>The maximum number of organization Config rules returned on each page. If you do no specify a number, Config uses the default. The default is 100.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

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
 * <p> metadata for your organization Config Custom Policy rule including the runtime system in use, which accounts have debug logging enabled, and
 * 			other custom rule metadata such as resource type, resource ID of Amazon Web Services
 * 			resource, and organization trigger types that trigger Config to evaluate
 * 				Amazon Web Services resources against a rule.</p>
 */
export interface OrganizationCustomPolicyRuleMetadataNoPolicy {
  /**
   * <p>The description that you provide for your organization Config Custom Policy rule.</p>
   */
  Description?: string;

  /**
   * <p>The type of notification that triggers Config to run an evaluation for a rule.
   * 			For Config Custom Policy rules, Config supports change
   * 			triggered notification types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ConfigurationItemChangeNotification</code> - Triggers an evaluation when Config delivers a configuration item as a result of a resource change.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OversizedConfigurationItemChangeNotification</code> - Triggers an evaluation when Config delivers an oversized configuration item.
   * 				Config may generate this notification type when a resource changes and the notification exceeds the maximum size allowed by Amazon SNS.</p>
   *             </li>
   *          </ul>
   */
  OrganizationConfigRuleTriggerTypes?: (OrganizationConfigRuleTriggerTypeNoSN | string)[];

  /**
   * <p>A string, in JSON format, that is passed to your organization Config Custom Policy rule.</p>
   */
  InputParameters?: string;

  /**
   * <p>The maximum frequency with which Config runs evaluations for a rule. Your
   * 			Config Custom Policy rule is triggered when Config delivers
   * 			the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p>
   */
  MaximumExecutionFrequency?: MaximumExecutionFrequency | string;

  /**
   * <p>The type of the Amazon Web Services resource that was evaluated.</p>
   */
  ResourceTypesScope?: string[];

  /**
   * <p>The ID of the Amazon Web Services resource that was evaluated.</p>
   */
  ResourceIdScope?: string;

  /**
   * <p>One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.</p>
   */
  TagKeyScope?: string;

  /**
   * <p>The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).</p>
   */
  TagValueScope?: string;

  /**
   * <p>The runtime system for your organization Config Custom Policy rules. Guard is a policy-as-code language that allows you to write policies that are enforced by Config Custom Policy rules. For more information about Guard, see the <a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub
   * 			Repository</a>.</p>
   */
  PolicyRuntime?: string;

  /**
   * <p>A list of accounts that you can enable debug logging for your organization Config Custom Policy rule. List is null when debug logging is enabled for all accounts.</p>
   */
  DebugLogDeliveryAccounts?: string[];
}

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
 * <p> organization custom rule metadata such as resource type, resource ID of Amazon Web Services resource, Lambda function ARN,
 * 			and organization trigger types that trigger Config to evaluate your Amazon Web Services resources against a rule.
 * 			It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.</p>
 */
export interface OrganizationCustomRuleMetadata {
  /**
   * <p>The description that you provide for your organization Config rule.</p>
   */
  Description?: string;

  /**
   * <p>The lambda function ARN.</p>
   */
  LambdaFunctionArn: string | undefined;

  /**
   * <p>The type of notification that triggers Config to run an evaluation for a rule. You can specify the following notification types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ConfigurationItemChangeNotification</code> - Triggers an evaluation when Config delivers a configuration item as a result of a resource change.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OversizedConfigurationItemChangeNotification</code> - Triggers an evaluation when Config delivers an oversized configuration item.
   * 			         	Config may generate this notification type when a resource changes and the notification exceeds the maximum size allowed by Amazon SNS.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ScheduledNotification</code> - Triggers a periodic evaluation at the frequency specified for <code>MaximumExecutionFrequency</code>.</p>
   *             </li>
   *          </ul>
   */
  OrganizationConfigRuleTriggerTypes: (OrganizationConfigRuleTriggerType | string)[] | undefined;

  /**
   * <p>A string, in JSON format, that is passed to your organization Config rule Lambda function.</p>
   */
  InputParameters?: string;

  /**
   * <p>The maximum frequency with which Config runs evaluations for a rule.
   * 			Your custom rule is triggered when Config delivers the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p>
   *          <note>
   *             <p>By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid
   * 			value for the <code>MaximumExecutionFrequency</code> parameter.</p>
   *          </note>
   */
  MaximumExecutionFrequency?: MaximumExecutionFrequency | string;

  /**
   * <p>The type of the Amazon Web Services resource that was evaluated.</p>
   */
  ResourceTypesScope?: string[];

  /**
   * <p>The ID of the Amazon Web Services resource that was evaluated.</p>
   */
  ResourceIdScope?: string;

  /**
   * <p>One part of a key-value pair that make up a tag.
   * 			A key is a general label that acts like a category for more specific tag values. </p>
   */
  TagKeyScope?: string;

  /**
   * <p>The optional part of a key-value pair that make up a tag.
   * 			A value acts as a descriptor within a tag category (key). </p>
   */
  TagValueScope?: string;
}

/**
 * @public
 * <p> organization managed rule metadata such as resource type and ID of Amazon Web Services resource along with the rule identifier.
 * 			It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.</p>
 */
export interface OrganizationManagedRuleMetadata {
  /**
   * <p>The description that you provide for your organization Config rule.</p>
   */
  Description?: string;

  /**
   * <p>For organization config managed rules, a predefined identifier from a
   * 			list. For example, <code>IAM_PASSWORD_POLICY</code> is a managed
   * 			rule. To reference a managed rule, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html">Using Config managed rules</a>.</p>
   */
  RuleIdentifier: string | undefined;

  /**
   * <p>A string, in JSON format, that is passed to your organization Config rule Lambda function.</p>
   */
  InputParameters?: string;

  /**
   * <p>The maximum frequency with which Config runs evaluations for a rule. This is for an Config managed rule that is triggered at a periodic frequency.</p>
   *          <note>
   *             <p>By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid
   * 			value for the <code>MaximumExecutionFrequency</code> parameter.</p>
   *          </note>
   */
  MaximumExecutionFrequency?: MaximumExecutionFrequency | string;

  /**
   * <p>The type of the Amazon Web Services resource that was evaluated.</p>
   */
  ResourceTypesScope?: string[];

  /**
   * <p>The ID of the Amazon Web Services resource that was evaluated.</p>
   */
  ResourceIdScope?: string;

  /**
   * <p>One part of a key-value pair that make up a tag.
   * 			A key is a general label that acts like a category for more specific tag values. </p>
   */
  TagKeyScope?: string;

  /**
   * <p>The optional part of a key-value pair that make up a tag.
   * 			A value acts as a descriptor within a tag category (key).</p>
   */
  TagValueScope?: string;
}

/**
 * @public
 * <p>An organization Config rule that has information about Config rules that Config creates in member accounts.</p>
 */
export interface OrganizationConfigRule {
  /**
   * <p>The name that you assign to organization Config rule.</p>
   */
  OrganizationConfigRuleName: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of organization Config rule.</p>
   */
  OrganizationConfigRuleArn: string | undefined;

  /**
   * <p>An <code>OrganizationManagedRuleMetadata</code> object.</p>
   */
  OrganizationManagedRuleMetadata?: OrganizationManagedRuleMetadata;

  /**
   * <p>An <code>OrganizationCustomRuleMetadata</code> object.</p>
   */
  OrganizationCustomRuleMetadata?: OrganizationCustomRuleMetadata;

  /**
   * <p>A comma-separated list of accounts excluded from organization Config rule.</p>
   */
  ExcludedAccounts?: string[];

  /**
   * <p>The timestamp of the last update.</p>
   */
  LastUpdateTime?: Date;

  /**
   * <p>An
   * 			object that specifies metadata for your organization's Config Custom Policy rule. The metadata includes the runtime system in use, which accounts have
   * 			debug logging enabled, and other custom rule metadata, such as resource type, resource
   * 			ID of Amazon Web Services resource, and organization trigger types that initiate Config to evaluate Amazon Web Services resources against a rule.</p>
   */
  OrganizationCustomPolicyRuleMetadata?: OrganizationCustomPolicyRuleMetadataNoPolicy;
}

/**
 * @public
 */
export interface DescribeOrganizationConfigRulesResponse {
  /**
   * <p>Returns a list of <code>OrganizationConfigRule</code> objects.</p>
   */
  OrganizationConfigRules?: OrganizationConfigRule[];

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeOrganizationConfigRuleStatusesRequest {
  /**
   * <p>The names of organization Config rules for which you want status details. If you do not specify any names, Config returns details for all your organization Config rules.</p>
   */
  OrganizationConfigRuleNames?: string[];

  /**
   * <p>The maximum number of <code>OrganizationConfigRuleStatuses</code> returned on each page. If you do no specify a number, Config uses the default. The default is 100.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

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
 * <p>Returns the status for an organization Config rule in an organization.</p>
 */
export interface OrganizationConfigRuleStatus {
  /**
   * <p>The name that you assign to organization Config rule.</p>
   */
  OrganizationConfigRuleName: string | undefined;

  /**
   * <p>Indicates deployment status of an organization Config rule.
   * 			When management account calls PutOrganizationConfigRule action for the first time, Config rule status is created in all the member accounts.
   * 			When management account calls PutOrganizationConfigRule action for the second time, Config rule status is updated in all the member accounts. Additionally, Config rule status is updated when one or more member accounts join or leave an organization.
   * 			Config rule status is deleted when the management account deletes OrganizationConfigRule in all the member accounts and disables service access for <code>config-multiaccountsetup.amazonaws.com</code>.</p>
   *          <p>Config sets the state of the rule to:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_SUCCESSFUL</code> when an organization Config rule has been successfully created in all the member accounts. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> when an organization Config rule creation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code> when an organization Config rule creation failed in one or more member accounts within that organization.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_FAILED</code> when an organization Config rule deletion failed in one or more member accounts within that organization.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_IN_PROGRESS</code> when an organization Config rule deletion is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_SUCCESSFUL</code> when an organization Config rule has been successfully deleted from all the member accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_SUCCESSFUL</code> when an organization Config rule has been successfully updated in all the member accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_IN_PROGRESS</code> when an organization Config rule update is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FAILED</code> when an organization Config rule update failed in one or more member accounts within that organization.</p>
   *             </li>
   *          </ul>
   */
  OrganizationRuleStatus: OrganizationRuleStatus | string | undefined;

  /**
   * <p>An error code that is returned when organization Config rule creation or deletion has failed.</p>
   */
  ErrorCode?: string;

  /**
   * <p>An error message indicating that organization Config rule creation or deletion failed due to an error.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The timestamp of the last update.</p>
   */
  LastUpdateTime?: Date;
}

/**
 * @public
 */
export interface DescribeOrganizationConfigRuleStatusesResponse {
  /**
   * <p>A list of <code>OrganizationConfigRuleStatus</code> objects.</p>
   */
  OrganizationConfigRuleStatuses?: OrganizationConfigRuleStatus[];

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeOrganizationConformancePacksRequest {
  /**
   * <p>The name that you assign to an organization conformance pack.</p>
   */
  OrganizationConformancePackNames?: string[];

  /**
   * <p>The maximum number of organization config packs returned on each page. If you do no specify a
   * 			number, Config uses the default. The default is 100.</p>
   */
  Limit?: number;

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a
   * 			paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>An organization conformance pack that has information about conformance packs that Config creates in member accounts. </p>
 */
export interface OrganizationConformancePack {
  /**
   * <p>The name you assign to an organization conformance pack.</p>
   */
  OrganizationConformancePackName: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of organization conformance pack.</p>
   */
  OrganizationConformancePackArn: string | undefined;

  /**
   * <p>The name of the Amazon S3 bucket where Config stores conformance pack templates.  </p>
   *          <note>
   *             <p>This field is optional.</p>
   *          </note>
   */
  DeliveryS3Bucket?: string;

  /**
   * <p>Any folder structure you want to add to an Amazon S3 bucket.</p>
   *          <note>
   *             <p>This field is optional.</p>
   *          </note>
   */
  DeliveryS3KeyPrefix?: string;

  /**
   * <p>A list of <code>ConformancePackInputParameter</code> objects.</p>
   */
  ConformancePackInputParameters?: ConformancePackInputParameter[];

  /**
   * <p>A comma-separated list of accounts excluded from organization conformance pack.</p>
   */
  ExcludedAccounts?: string[];

  /**
   * <p>Last time when organization conformation pack was updated.</p>
   */
  LastUpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConformancePacksResponse {
  /**
   * <p>Returns a list of OrganizationConformancePacks objects.</p>
   */
  OrganizationConformancePacks?: OrganizationConformancePack[];

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a
   * 			paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeOrganizationConformancePackStatusesRequest {
  /**
   * <p>The names of organization conformance packs for which you want status details.
   * 			If you do not specify any names, Config returns details for all your organization conformance packs. </p>
   */
  OrganizationConformancePackNames?: string[];

  /**
   * <p>The maximum number of OrganizationConformancePackStatuses returned on each page.
   * 			If you do no specify a number, Config uses the default. The default is 100. </p>
   */
  Limit?: number;

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

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
 * <p>Returns the status for an organization conformance pack in an organization.</p>
 */
export interface OrganizationConformancePackStatus {
  /**
   * <p>The name that you assign to organization conformance pack.</p>
   */
  OrganizationConformancePackName: string | undefined;

  /**
   * <p>Indicates deployment status of an organization conformance pack.
   * 			When management account calls PutOrganizationConformancePack for the first time,
   * 			conformance pack status is created in all the member accounts.
   * 			When management account calls PutOrganizationConformancePack for the second time,
   * 			conformance pack status is updated in all the member accounts.
   * 			Additionally, conformance pack status is updated when one or more member accounts join or leave an
   * 			organization.
   * 			Conformance pack status is deleted when the management account deletes
   * 			OrganizationConformancePack in all the member accounts and disables service
   * 			access for <code>config-multiaccountsetup.amazonaws.com</code>.</p>
   *          <p>Config sets the state of the conformance pack to:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_SUCCESSFUL</code> when an organization conformance pack has been successfully created in all the member accounts. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> when an organization conformance pack creation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code> when an organization conformance pack creation failed in one or more member accounts within that organization.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_FAILED</code> when an organization conformance pack deletion failed in one or more member accounts within that organization.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_IN_PROGRESS</code> when an organization conformance pack deletion is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_SUCCESSFUL</code> when an organization conformance pack has been successfully deleted from all the member accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_SUCCESSFUL</code> when an organization conformance pack has been successfully updated in all the member accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_IN_PROGRESS</code> when an organization conformance pack update is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FAILED</code> when an organization conformance pack update failed in one or more member accounts within that organization.</p>
   *             </li>
   *          </ul>
   */
  Status: OrganizationResourceStatus | string | undefined;

  /**
   * <p>An error code that is returned when organization conformance pack creation or deletion has failed in a member account. </p>
   */
  ErrorCode?: string;

  /**
   * <p>An error message indicating that organization conformance pack creation or deletion failed due to an error. </p>
   */
  ErrorMessage?: string;

  /**
   * <p>The timestamp of the last update.</p>
   */
  LastUpdateTime?: Date;
}

/**
 * @public
 */
export interface DescribeOrganizationConformancePackStatusesResponse {
  /**
   * <p>A list of <code>OrganizationConformancePackStatus</code> objects. </p>
   */
  OrganizationConformancePackStatuses?: OrganizationConformancePackStatus[];

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribePendingAggregationRequestsRequest {
  /**
   * <p>The maximum number of evaluation results returned on each page.
   * 			The default is maximum. If you specify 0, Config uses the
   * 			default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>An object that represents the account ID and region of an
 * 			aggregator account that is requesting authorization but is not yet
 * 			authorized.</p>
 */
export interface PendingAggregationRequest {
  /**
   * <p>The 12-digit account ID of the account requesting to aggregate
   * 			data.</p>
   */
  RequesterAccountId?: string;

  /**
   * <p>The region requesting to aggregate data. </p>
   */
  RequesterAwsRegion?: string;
}

/**
 * @public
 */
export interface DescribePendingAggregationRequestsResponse {
  /**
   * <p>Returns a PendingAggregationRequests object.</p>
   */
  PendingAggregationRequests?: PendingAggregationRequest[];

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeRemediationConfigurationsRequest {
  /**
   * <p>A list of Config rule names of remediation configurations for which you want details. </p>
   */
  ConfigRuleNames: string[] | undefined;
}

/**
 * @public
 * <p>Amazon Web Services Systems Manager (SSM) specific remediation controls.</p>
 */
export interface SsmControls {
  /**
   * <p>The maximum percentage of remediation actions allowed to run in parallel on the non-compliant resources for that specific rule. You can specify a percentage, such as 10%. The default value is 10. </p>
   */
  ConcurrentExecutionRatePercentage?: number;

  /**
   * <p>The percentage of errors that are allowed before SSM stops running automations on non-compliant resources for that specific rule.
   * 			You can specify a percentage of errors, for example 10%. If you do not specifiy a percentage, the default is 50%.
   * 			For example, if you set the ErrorPercentage to 40% for 10 non-compliant resources, then SSM stops running the automations when the fifth error is received. </p>
   */
  ErrorPercentage?: number;
}

/**
 * @public
 * <p>The controls that Config uses for executing remediations.</p>
 */
export interface ExecutionControls {
  /**
   * <p>A SsmControls object.</p>
   */
  SsmControls?: SsmControls;
}

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
 * <p>The dynamic value of the resource.</p>
 */
export interface ResourceValue {
  /**
   * <p>The value is a resource ID.</p>
   */
  Value: ResourceValueType | string | undefined;
}

/**
 * @public
 * <p>The static value of the resource.</p>
 */
export interface StaticValue {
  /**
   * <p>A list of values. For example, the ARN of the assumed role. </p>
   */
  Values: string[] | undefined;
}

/**
 * @public
 * <p>The value is either a dynamic (resource) value or a static value. You must select either a dynamic value or a static value.</p>
 */
export interface RemediationParameterValue {
  /**
   * <p>The value is dynamic and changes at run-time.</p>
   */
  ResourceValue?: ResourceValue;

  /**
   * <p>The value is static and does not change at run-time.</p>
   */
  StaticValue?: StaticValue;
}

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
 * <p>An object that represents the details about the remediation configuration that includes the remediation action, parameters, and data to execute the action.</p>
 */
export interface RemediationConfiguration {
  /**
   * <p>The name of the Config rule.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>The type of the target. Target executes remediation. For example, SSM document.</p>
   */
  TargetType: RemediationTargetType | string | undefined;

  /**
   * <p>Target ID is the name of the SSM document.</p>
   */
  TargetId: string | undefined;

  /**
   * <p>Version of the target. For example, version of the SSM document.</p>
   *          <note>
   *             <p>If you make backward incompatible changes to the SSM document,
   * 			you must call PutRemediationConfiguration API again to ensure the remediations can run.</p>
   *          </note>
   */
  TargetVersion?: string;

  /**
   * <p>An object of the RemediationParameterValue.</p>
   */
  Parameters?: Record<string, RemediationParameterValue>;

  /**
   * <p>The type of a resource. </p>
   */
  ResourceType?: string;

  /**
   * <p>The remediation is triggered automatically.</p>
   */
  Automatic?: boolean;

  /**
   * <p>An ExecutionControls object.</p>
   */
  ExecutionControls?: ExecutionControls;

  /**
   * <p>The maximum number of failed attempts for auto-remediation. If you do not select a number, the default is 5.</p>
   *          <p>For example, if you specify MaximumAutomaticAttempts as 5 with RetryAttemptSeconds as 50 seconds,
   *
   * 			Config will put a RemediationException on your behalf for the failing resource after the 5th failed attempt within 50 seconds.</p>
   */
  MaximumAutomaticAttempts?: number;

  /**
   * <p>Maximum time in seconds that Config runs auto-remediation. If you do not select a number, the default is 60 seconds. </p>
   *          <p>For example, if you specify RetryAttemptSeconds as 50 seconds and MaximumAutomaticAttempts as 5,
   * 		Config will run auto-remediations 5 times within 50 seconds before throwing an exception.</p>
   */
  RetryAttemptSeconds?: number;

  /**
   * <p>Amazon Resource Name (ARN) of remediation configuration.</p>
   */
  Arn?: string;

  /**
   * <p>Name of the service that owns the service-linked rule, if applicable.</p>
   */
  CreatedByService?: string;
}

/**
 * @public
 */
export interface DescribeRemediationConfigurationsResponse {
  /**
   * <p>Returns a remediation configuration object.</p>
   */
  RemediationConfigurations?: RemediationConfiguration[];
}

/**
 * @public
 */
export interface DescribeRemediationExceptionsRequest {
  /**
   * <p>The name of the Config rule.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>An exception list of resource exception keys to be processed with the current request. Config adds exception for each resource key. For example, Config adds 3 exceptions for 3 resource keys. </p>
   */
  ResourceKeys?: RemediationExceptionResourceKey[];

  /**
   * <p>The maximum number of RemediationExceptionResourceKey returned on each page. The default is 25. If you specify 0, Config uses the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>An object that represents the details about the remediation exception. The details include the rule name, an explanation of an exception, the time when the exception will be deleted, the resource ID, and resource type. </p>
 */
export interface RemediationException {
  /**
   * <p>The name of the Config rule.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>The type of a resource.</p>
   */
  ResourceType: string | undefined;

  /**
   * <p>The ID of the resource (for example., sg-xxxxxx).</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>An explanation of an remediation exception.</p>
   */
  Message?: string;

  /**
   * <p>The time when the remediation exception will be deleted.</p>
   */
  ExpirationTime?: Date;
}

/**
 * @public
 */
export interface DescribeRemediationExceptionsResponse {
  /**
   * <p>Returns a list of remediation exception objects.</p>
   */
  RemediationExceptions?: RemediationException[];

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeRemediationExecutionStatusRequest {
  /**
   * <p>A list of Config rule names.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>A list of resource keys to be processed with the current request. Each element in the list consists of the resource type and resource ID. </p>
   */
  ResourceKeys?: ResourceKey[];

  /**
   * <p>The maximum number of RemediationExecutionStatuses returned on each page. The default is maximum. If you specify 0, Config uses the default. </p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const RemediationExecutionState = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED: "QUEUED",
  SUCCEEDED: "SUCCEEDED",
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
  FAILED: "FAILED",
  PENDING: "PENDING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type RemediationExecutionStepState =
  (typeof RemediationExecutionStepState)[keyof typeof RemediationExecutionStepState];

/**
 * @public
 * <p>Name of the step from the SSM document.</p>
 */
export interface RemediationExecutionStep {
  /**
   * <p>The details of the step.</p>
   */
  Name?: string;

  /**
   * <p>The valid status of the step.</p>
   */
  State?: RemediationExecutionStepState | string;

  /**
   * <p>An error message if the step was interrupted during execution.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The time when the step started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time when the step stopped.</p>
   */
  StopTime?: Date;
}

/**
 * @public
 * <p>Provides details of the current status of the invoked remediation action for that resource.</p>
 */
export interface RemediationExecutionStatus {
  /**
   * <p>The details that identify a resource within Config, including
   * 			the resource type and resource ID.</p>
   */
  ResourceKey?: ResourceKey;

  /**
   * <p>ENUM of the values.</p>
   */
  State?: RemediationExecutionState | string;

  /**
   * <p>Details of every step.</p>
   */
  StepDetails?: RemediationExecutionStep[];

  /**
   * <p>Start time when the remediation was executed.</p>
   */
  InvocationTime?: Date;

  /**
   * <p>The time when the remediation execution was last updated.</p>
   */
  LastUpdatedTime?: Date;
}

/**
 * @public
 */
export interface DescribeRemediationExecutionStatusResponse {
  /**
   * <p>Returns a list of remediation execution statuses objects.</p>
   */
  RemediationExecutionStatuses?: RemediationExecutionStatus[];

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeRetentionConfigurationsRequest {
  /**
   * <p>A list of names of retention configurations for which you want
   * 			details. If you do not specify a name, Config returns details
   * 			for all the retention configurations for that account.</p>
   *          <note>
   *             <p>Currently, Config supports only one retention
   * 				configuration per region in your account.</p>
   *          </note>
   */
  RetentionConfigurationNames?: string[];

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>An object with the name of the retention configuration and the retention period in days. The object stores the configuration for data retention in Config.</p>
 */
export interface RetentionConfiguration {
  /**
   * <p>The name of the retention configuration object.</p>
   */
  Name: string | undefined;

  /**
   * <p>Number of days Config stores your historical information.</p>
   *          <note>
   *             <p>Currently, only applicable to the configuration item history.</p>
   *          </note>
   */
  RetentionPeriodInDays: number | undefined;
}

/**
 * @public
 */
export interface DescribeRetentionConfigurationsResponse {
  /**
   * <p>Returns a retention configuration object.</p>
   */
  RetentionConfigurations?: RetentionConfiguration[];

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Identifies an Amazon Web Services resource and indicates whether it complies
 * 			with the Config rule that it was evaluated against.</p>
 */
export interface Evaluation {
  /**
   * <p>The type of Amazon Web Services resource that was evaluated.</p>
   */
  ComplianceResourceType: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services resource that was evaluated.</p>
   */
  ComplianceResourceId: string | undefined;

  /**
   * <p>Indicates whether the Amazon Web Services resource complies with the Config
   * 			rule that it was evaluated against.</p>
   *          <p>For the <code>Evaluation</code> data type, Config supports
   * 			only the <code>COMPLIANT</code>, <code>NON_COMPLIANT</code>, and
   * 				<code>NOT_APPLICABLE</code> values. Config does not support
   * 			the <code>INSUFFICIENT_DATA</code> value for this data
   * 			type.</p>
   *          <p>Similarly, Config does not accept
   * 				<code>INSUFFICIENT_DATA</code> as the value for
   * 				<code>ComplianceType</code> from a <code>PutEvaluations</code>
   * 			request. For example, an Lambda function for a custom Config
   * 			rule cannot pass an <code>INSUFFICIENT_DATA</code> value to Config.</p>
   */
  ComplianceType: ComplianceType | string | undefined;

  /**
   * <p>Supplementary information about how the evaluation determined
   * 			the compliance.</p>
   */
  Annotation?: string;

  /**
   * <p>The time of the event in Config that triggered the
   * 			evaluation. For event-based evaluations, the time indicates when Config created the configuration item that triggered the evaluation.
   * 			For periodic evaluations, the time indicates when Config
   * 			triggered the evaluation at the frequency that you specified (for
   * 			example, every 24 hours).</p>
   */
  OrderingTimestamp: Date | undefined;
}

/**
 * @public
 * <p>Use EvaluationContext to group independently initiated proactive resource evaluations. For example, CFN Stack.
 * 			If you want to check just a resource definition, you do not need to provide evaluation context.</p>
 */
export interface EvaluationContext {
  /**
   * <p>A unique EvaluationContextIdentifier ID for an EvaluationContext.</p>
   */
  EvaluationContextIdentifier?: string;
}

/**
 * @public
 * <p>The details of an Config evaluation. Provides the Amazon Web Services
 * 			resource that was evaluated, the compliance of the resource, related
 * 			time stamps, and supplementary information.</p>
 */
export interface EvaluationResult {
  /**
   * <p>Uniquely identifies the evaluation result.</p>
   */
  EvaluationResultIdentifier?: EvaluationResultIdentifier;

  /**
   * <p>Indicates whether the Amazon Web Services resource complies with the Config
   * 			rule that evaluated it.</p>
   *          <p>For the <code>EvaluationResult</code> data type, Config
   * 			supports only the <code>COMPLIANT</code>,
   * 			<code>NON_COMPLIANT</code>, and <code>NOT_APPLICABLE</code> values.
   * 			Config does not support the <code>INSUFFICIENT_DATA</code> value
   * 			for the <code>EvaluationResult</code> data type.</p>
   */
  ComplianceType?: ComplianceType | string;

  /**
   * <p>The time when Config recorded the evaluation
   * 			result.</p>
   */
  ResultRecordedTime?: Date;

  /**
   * <p>The time when the Config rule evaluated the Amazon Web Services
   * 			resource.</p>
   */
  ConfigRuleInvokedTime?: Date;

  /**
   * <p>Supplementary information about how the evaluation determined
   * 			the compliance.</p>
   */
  Annotation?: string;

  /**
   * <p>An encrypted token that associates an evaluation with an Config rule. The token identifies the rule, the Amazon Web Services resource being
   * 			evaluated, and the event that triggered the evaluation.</p>
   */
  ResultToken?: string;
}

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
 * <p>Returns status details of an evaluation.</p>
 */
export interface EvaluationStatus {
  /**
   * <p>The status of an execution. The valid values are In_Progress, Succeeded or Failed. </p>
   */
  Status: ResourceEvaluationStatus | string | undefined;

  /**
   * <p>An explanation for failed execution status.</p>
   */
  FailureReason?: string;
}

/**
 * @public
 * <p>Identifies an Amazon Web Services resource and indicates whether it complies with the Config rule that it was evaluated against.</p>
 */
export interface ExternalEvaluation {
  /**
   * <p>The evaluated compliance resource type. Config accepts <code>AWS::::Account</code> resource type.</p>
   */
  ComplianceResourceType: string | undefined;

  /**
   * <p>The evaluated compliance resource ID. Config accepts only Amazon Web Services account ID.</p>
   */
  ComplianceResourceId: string | undefined;

  /**
   * <p>The compliance of the Amazon Web Services resource. The valid values are <code>COMPLIANT, NON_COMPLIANT, </code> and <code>NOT_APPLICABLE</code>.</p>
   */
  ComplianceType: ComplianceType | string | undefined;

  /**
   * <p>Supplementary information about the reason of compliance. For example, this task was completed on a specific date.</p>
   */
  Annotation?: string;

  /**
   * <p>The time when the compliance was recorded. </p>
   */
  OrderingTimestamp: Date | undefined;
}

/**
 * @public
 * <p>List of each of the failed remediations with specific reasons.</p>
 */
export interface FailedRemediationBatch {
  /**
   * <p>Returns a failure message. For example, the resource is already compliant.</p>
   */
  FailureMessage?: string;

  /**
   * <p>Returns remediation configurations of the failed items.</p>
   */
  FailedItems?: RemediationConfiguration[];
}

/**
 * @public
 * <p>List of each of the failed remediation exceptions with specific reasons.</p>
 */
export interface FailedRemediationExceptionBatch {
  /**
   * <p>Returns a failure message. For example, the auto-remediation has failed.</p>
   */
  FailureMessage?: string;

  /**
   * <p>Returns remediation exception resource key object of the failed items.</p>
   */
  FailedItems?: RemediationException[];
}

/**
 * @public
 * <p>Details about the fields such as name of the field.</p>
 */
export interface FieldInfo {
  /**
   * <p>Name of the field.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface GetAggregateComplianceDetailsByConfigRuleRequest {
  /**
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>The name of the Config rule for which you want compliance
   * 			information.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>The 12-digit account ID of the source account.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The source region from where the data is aggregated.</p>
   */
  AwsRegion: string | undefined;

  /**
   * <p>The resource compliance status.</p>
   *          <note>
   *             <p>For the
   * 					<code>GetAggregateComplianceDetailsByConfigRuleRequest</code>
   * 				data type, Config supports only the <code>COMPLIANT</code>
   * 				and <code>NON_COMPLIANT</code>. Config does not support the
   * 					<code>NOT_APPLICABLE</code> and
   * 					<code>INSUFFICIENT_DATA</code> values.</p>
   *          </note>
   */
  ComplianceType?: ComplianceType | string;

  /**
   * <p>The maximum number of evaluation results returned on each page.
   * 			The default is 50. You cannot specify a number greater than 100. If
   * 			you specify 0, Config uses the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetAggregateComplianceDetailsByConfigRuleResponse {
  /**
   * <p>Returns an AggregateEvaluationResults object.</p>
   */
  AggregateEvaluationResults?: AggregateEvaluationResult[];

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetAggregateConfigRuleComplianceSummaryRequest {
  /**
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>Filters the results based on the
   * 			ConfigRuleComplianceSummaryFilters object.</p>
   */
  Filters?: ConfigRuleComplianceSummaryFilters;

  /**
   * <p>Groups the result based on ACCOUNT_ID or AWS_REGION.</p>
   */
  GroupByKey?: ConfigRuleComplianceSummaryGroupKey | string;

  /**
   * <p>The maximum number of evaluation results returned on each page.
   * 			The default is 1000. You cannot specify a number greater than 1000.
   * 			If you specify 0, Config uses the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetAggregateConfigRuleComplianceSummaryResponse {
  /**
   * <p>Groups the result based on ACCOUNT_ID or AWS_REGION.</p>
   */
  GroupByKey?: string;

  /**
   * <p>Returns a list of AggregateComplianceCounts object.</p>
   */
  AggregateComplianceCounts?: AggregateComplianceCount[];

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetAggregateConformancePackComplianceSummaryRequest {
  /**
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>Filters the results based on the <code>AggregateConformancePackComplianceSummaryFilters</code> object.</p>
   */
  Filters?: AggregateConformancePackComplianceSummaryFilters;

  /**
   * <p>Groups the result based on Amazon Web Services account ID or Amazon Web Services Region.</p>
   */
  GroupByKey?: AggregateConformancePackComplianceSummaryGroupKey | string;

  /**
   * <p>The maximum number of results returned on each page. The default is maximum. If you specify 0, Config uses the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetAggregateConformancePackComplianceSummaryResponse {
  /**
   * <p>Returns a list of <code>AggregateConformancePackComplianceSummary</code> object.</p>
   */
  AggregateConformancePackComplianceSummaries?: AggregateConformancePackComplianceSummary[];

  /**
   * <p>Groups the result based on Amazon Web Services account ID or Amazon Web Services Region.</p>
   */
  GroupByKey?: string;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Filters the resource count based on account ID, region, and resource type.</p>
 */
export interface ResourceCountFilters {
  /**
   * <p>The type of the Amazon Web Services resource.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>The 12-digit ID of the account.</p>
   */
  AccountId?: string;

  /**
   * <p>The region where the account is located.</p>
   */
  Region?: string;
}

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
 */
export interface GetAggregateDiscoveredResourceCountsRequest {
  /**
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>Filters the results based on the <code>ResourceCountFilters</code> object.</p>
   */
  Filters?: ResourceCountFilters;

  /**
   * <p>The key to group the resource counts.</p>
   */
  GroupByKey?: ResourceCountGroupKey | string;

  /**
   * <p>The maximum number of <a>GroupedResourceCount</a> objects returned on each page. The default is 1000. You cannot specify a number greater than 1000. If you specify 0, Config uses the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The count of resources that are grouped by the group name.</p>
 */
export interface GroupedResourceCount {
  /**
   * <p>The name of the group that can be region, account ID, or resource type. For example, region1, region2 if the region was chosen as <code>GroupByKey</code>.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The number of resources in the group.</p>
   */
  ResourceCount: number | undefined;
}

/**
 * @public
 */
export interface GetAggregateDiscoveredResourceCountsResponse {
  /**
   * <p>The total number of resources that are present in an aggregator with the filters that you provide.</p>
   */
  TotalDiscoveredResources: number | undefined;

  /**
   * <p>The key passed into the request object. If <code>GroupByKey</code> is not provided, the result will be empty.</p>
   */
  GroupByKey?: string;

  /**
   * <p>Returns a list of GroupedResourceCount objects.</p>
   */
  GroupedResourceCounts?: GroupedResourceCount[];

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetAggregateResourceConfigRequest {
  /**
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>An object that identifies aggregate resource.</p>
   */
  ResourceIdentifier: AggregateResourceIdentifier | undefined;
}

/**
 * @public
 */
export interface GetAggregateResourceConfigResponse {
  /**
   * <p>Returns a <code>ConfigurationItem</code> object.</p>
   */
  ConfigurationItem?: ConfigurationItem;
}

/**
 * @public
 * <p>The configuration item size is outside the allowable range.</p>
 */
export class OversizedConfigurationItemException extends __BaseException {
  readonly name: "OversizedConfigurationItemException" = "OversizedConfigurationItemException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OversizedConfigurationItemException, __BaseException>) {
    super({
      name: "OversizedConfigurationItemException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OversizedConfigurationItemException.prototype);
  }
}

/**
 * @public
 * <p>You have specified a resource that is either unknown or has not
 * 			been discovered.</p>
 */
export class ResourceNotDiscoveredException extends __BaseException {
  readonly name: "ResourceNotDiscoveredException" = "ResourceNotDiscoveredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotDiscoveredException, __BaseException>) {
    super({
      name: "ResourceNotDiscoveredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotDiscoveredException.prototype);
  }
}

/**
 * @public
 * <p></p>
 */
export interface GetComplianceDetailsByConfigRuleRequest {
  /**
   * <p>The name of the Config rule for which you want compliance
   * 			information.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>Filters the results by compliance.</p>
   *          <p>
   *             <code>INSUFFICIENT_DATA</code> is a valid <code>ComplianceType</code> that is returned when an Config rule cannot be evaluated. However, <code>INSUFFICIENT_DATA</code> cannot be used as a <code>ComplianceType</code> for filtering results.</p>
   */
  ComplianceTypes?: (ComplianceType | string)[];

  /**
   * <p>The maximum number of evaluation results returned on each page.
   * 			The default is 10. You cannot specify a number greater than 100. If
   * 			you specify 0, Config uses the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p></p>
 */
export interface GetComplianceDetailsByConfigRuleResponse {
  /**
   * <p>Indicates whether the Amazon Web Services resource complies with the specified
   * 			Config rule.</p>
   */
  EvaluationResults?: EvaluationResult[];

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p></p>
 */
export interface GetComplianceDetailsByResourceRequest {
  /**
   * <p>The type of the Amazon Web Services resource for which you want compliance
   * 			information.</p>
   */
  ResourceType?: string;

  /**
   * <p>The ID of the Amazon Web Services resource for which you want compliance
   * 			information.</p>
   */
  ResourceId?: string;

  /**
   * <p>Filters the results by compliance.</p>
   *          <p>
   *             <code>INSUFFICIENT_DATA</code> is a valid <code>ComplianceType</code> that is returned when an Config rule cannot be evaluated. However, <code>INSUFFICIENT_DATA</code> cannot be used as a <code>ComplianceType</code> for filtering results.</p>
   */
  ComplianceTypes?: (ComplianceType | string)[];

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   */
  NextToken?: string;

  /**
   * <p>The unique ID of Amazon Web Services resource execution for which you want to retrieve evaluation results. </p>
   *          <note>
   *             <p>You need to only provide either a <code>ResourceEvaluationID</code> or a <code>ResourceID </code>and <code>ResourceType</code>.</p>
   *          </note>
   */
  ResourceEvaluationId?: string;
}

/**
 * @public
 * <p></p>
 */
export interface GetComplianceDetailsByResourceResponse {
  /**
   * <p>Indicates whether the specified Amazon Web Services resource complies each Config rule.</p>
   */
  EvaluationResults?: EvaluationResult[];

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p></p>
 */
export interface GetComplianceSummaryByConfigRuleResponse {
  /**
   * <p>The number of Config rules that are compliant and the
   * 			number that are noncompliant, up to a maximum of 25 for
   * 			each.</p>
   */
  ComplianceSummary?: ComplianceSummary;
}

/**
 * @public
 * <p></p>
 */
export interface GetComplianceSummaryByResourceTypeRequest {
  /**
   * <p>Specify one or more resource types to get the number of
   * 			resources that are compliant and the number that are noncompliant
   * 			for each resource type.</p>
   *          <p>For this request, you can specify an Amazon Web Services resource type such as
   * 				<code>AWS::EC2::Instance</code>. You can specify that the
   * 			resource type is an Amazon Web Services account by specifying
   * 				<code>AWS::::Account</code>.</p>
   */
  ResourceTypes?: string[];
}

/**
 * @public
 * <p></p>
 */
export interface GetComplianceSummaryByResourceTypeResponse {
  /**
   * <p>The number of resources that are compliant and the number that
   * 			are noncompliant. If one or more resource types were provided with
   * 			the request, the numbers are returned for each resource type. The
   * 			maximum number returned is 100.</p>
   */
  ComplianceSummariesByResourceType?: ComplianceSummaryByResourceType[];
}

/**
 * @public
 */
export interface GetConformancePackComplianceDetailsRequest {
  /**
   * <p>Name of the conformance pack.</p>
   */
  ConformancePackName: string | undefined;

  /**
   * <p>A <code>ConformancePackEvaluationFilters</code> object.</p>
   */
  Filters?: ConformancePackEvaluationFilters;

  /**
   * <p>The maximum number of evaluation results returned on each page. If you do no specify a number, Config uses the default. The default is 100.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetConformancePackComplianceDetailsResponse {
  /**
   * <p>Name of the conformance pack.</p>
   */
  ConformancePackName: string | undefined;

  /**
   * <p>Returns a list of <code>ConformancePackEvaluationResult</code> objects.</p>
   */
  ConformancePackRuleEvaluationResults?: ConformancePackEvaluationResult[];

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetConformancePackComplianceSummaryRequest {
  /**
   * <p>Names of conformance packs.</p>
   */
  ConformancePackNames: string[] | undefined;

  /**
   * <p>The maximum number of conformance packs returned on each page.</p>
   */
  Limit?: number;

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetConformancePackComplianceSummaryResponse {
  /**
   * <p>A list of <code>ConformancePackComplianceSummary</code> objects. </p>
   */
  ConformancePackComplianceSummaryList?: ConformancePackComplianceSummary[];

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetCustomRulePolicyRequest {
  /**
   * <p>The name of your Config Custom Policy rule.</p>
   */
  ConfigRuleName?: string;
}

/**
 * @public
 */
export interface GetCustomRulePolicyResponse {
  /**
   * <p>The policy definition containing the logic for your Config Custom Policy rule.</p>
   */
  PolicyText?: string;
}

/**
 * @public
 */
export interface GetDiscoveredResourceCountsRequest {
  /**
   * <p>The comma-separated list that specifies the resource types that
   * 			you want Config to return (for example,
   * 				<code>"AWS::EC2::Instance"</code>,
   * 			<code>"AWS::IAM::User"</code>).</p>
   *          <p>If a value for <code>resourceTypes</code> is not specified, Config returns all resource types that Config is recording in
   * 			the region for your account.</p>
   *          <note>
   *             <p>If the configuration recorder is turned off, Config
   * 				returns an empty list of <a>ResourceCount</a>
   * 				objects. If the configuration recorder is not recording a
   * 				specific resource type (for example, S3 buckets), that resource
   * 				type is not returned in the list of <a>ResourceCount</a> objects.</p>
   *          </note>
   */
  resourceTypes?: string[];

  /**
   * <p>The maximum number of <a>ResourceCount</a> objects
   * 			returned on each page. The default is 100. You cannot specify a
   * 			number greater than 100. If you specify 0, Config uses the
   * 			default.</p>
   */
  limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>An object that contains the resource type and the number of
 * 			resources.</p>
 */
export interface ResourceCount {
  /**
   * <p>The resource type (for example,
   * 				<code>"AWS::EC2::Instance"</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The number of resources.</p>
   */
  count?: number;
}

/**
 * @public
 */
export interface GetDiscoveredResourceCountsResponse {
  /**
   * <p>The total number of resources that Config is recording in
   * 			the region for your account. If you specify resource types in the
   * 			request, Config returns only the total number of resources for
   * 			those resource types.</p>
   *          <p class="title">
   *             <b>Example</b>
   *          </p>
   *          <ol>
   *             <li>
   *                <p>Config is recording three resource types in the US
   * 					East (Ohio) Region for your account: 25 EC2 instances, 20
   * 					IAM users, and 15 S3 buckets, for a total of 60
   * 					resources.</p>
   *             </li>
   *             <li>
   *                <p>You make a call to the
   * 						<code>GetDiscoveredResourceCounts</code> action and
   * 					specify the resource type,
   * 						<code>"AWS::EC2::Instances"</code>, in the
   * 					request.</p>
   *             </li>
   *             <li>
   *                <p>Config returns 25 for
   * 						<code>totalDiscoveredResources</code>.</p>
   *             </li>
   *          </ol>
   */
  totalDiscoveredResources?: number;

  /**
   * <p>The list of <code>ResourceCount</code> objects. Each object is
   * 			listed in descending order by the number of resources.</p>
   */
  resourceCounts?: ResourceCount[];

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   */
  nextToken?: string;
}

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
 * <p>Status filter object to filter results based on specific member account ID or status type for an organization Config rule. </p>
 */
export interface StatusDetailFilters {
  /**
   * <p>The 12-digit account ID of the member account within an organization.</p>
   */
  AccountId?: string;

  /**
   * <p>Indicates deployment status for Config rule in the member account.
   * 			When management account calls <code>PutOrganizationConfigRule</code> action for the first time, Config rule status is created in the member account.
   * 			When management account calls <code>PutOrganizationConfigRule</code> action for the second time, Config rule status is updated in the member account.
   * 			Config rule status is deleted when the management account deletes <code>OrganizationConfigRule</code> and disables service access for <code>config-multiaccountsetup.amazonaws.com</code>.
   * 			</p>
   *          <p>Config sets the state of the rule to:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_SUCCESSFUL</code> when Config rule has been created in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> when Config rule is being created in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code> when Config rule creation has failed in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_FAILED</code> when Config rule deletion has failed in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_IN_PROGRESS</code> when Config rule is being deleted in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_SUCCESSFUL</code> when Config rule has been deleted in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_SUCCESSFUL</code> when Config rule has been updated in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_IN_PROGRESS</code> when Config rule is being updated in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FAILED</code> when Config rule deletion has failed in the member account.</p>
   *             </li>
   *          </ul>
   */
  MemberAccountRuleStatus?: MemberAccountRuleStatus | string;
}

/**
 * @public
 */
export interface GetOrganizationConfigRuleDetailedStatusRequest {
  /**
   * <p>The name of your organization Config rule for which you want status details for member accounts.</p>
   */
  OrganizationConfigRuleName: string | undefined;

  /**
   * <p>A <code>StatusDetailFilters</code> object.</p>
   */
  Filters?: StatusDetailFilters;

  /**
   * <p>The maximum number of <code>OrganizationConfigRuleDetailedStatus</code> returned on each page. If you do not specify a number, Config uses the default. The default is 100.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Organization Config rule creation or deletion status in each member account. This includes the name of the rule, the status, error code and error message when the rule creation or deletion failed.</p>
 */
export interface MemberAccountStatus {
  /**
   * <p>The 12-digit account ID of a member account.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The name of Config rule deployed in the member account.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>Indicates deployment status for Config rule in the member account.
   * 			When management account calls <code>PutOrganizationConfigRule</code> action for the first time, Config rule status is created in the member account.
   * 			When management account calls <code>PutOrganizationConfigRule</code> action for the second time, Config rule status is updated in the member account.
   * 			Config rule status is deleted when the management account deletes <code>OrganizationConfigRule</code> and disables service access for <code>config-multiaccountsetup.amazonaws.com</code>.
   * 		</p>
   *          <p> Config sets the state of the rule to:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_SUCCESSFUL</code> when Config rule has been created in the member account. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> when Config rule is being created in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code> when Config rule creation has failed in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_FAILED</code> when Config rule deletion has failed in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_IN_PROGRESS</code> when Config rule is being deleted in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_SUCCESSFUL</code> when Config rule has been deleted in the member account. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_SUCCESSFUL</code> when Config rule has been updated in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_IN_PROGRESS</code> when Config rule is being updated in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FAILED</code> when Config rule deletion has failed in the member account.</p>
   *             </li>
   *          </ul>
   */
  MemberAccountRuleStatus: MemberAccountRuleStatus | string | undefined;

  /**
   * <p>An error code that is returned when Config rule creation or deletion failed in the member account.</p>
   */
  ErrorCode?: string;

  /**
   * <p>An error message indicating that Config rule account creation or deletion has failed due to an error in the member account.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The timestamp of the last status update.</p>
   */
  LastUpdateTime?: Date;
}

/**
 * @public
 */
export interface GetOrganizationConfigRuleDetailedStatusResponse {
  /**
   * <p>A list of <code>MemberAccountStatus</code> objects.</p>
   */
  OrganizationConfigRuleDetailedStatus?: MemberAccountStatus[];

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

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
 * <p>Status filter object to filter results based on specific member account ID or status type for an organization conformance pack.</p>
 */
export interface OrganizationResourceDetailedStatusFilters {
  /**
   * <p>The 12-digit account ID of the member account within an organization.</p>
   */
  AccountId?: string;

  /**
   * <p>Indicates deployment status for conformance pack in a member account.
   * 			When management account calls <code>PutOrganizationConformancePack</code> action for the first time, conformance pack status is created in the member account.
   * 			When management account calls <code>PutOrganizationConformancePack</code> action for the second time, conformance pack status is updated in the member account.
   * 			Conformance pack status is deleted when the management account deletes <code>OrganizationConformancePack</code> and disables service access for <code>config-multiaccountsetup.amazonaws.com</code>.
   * 		</p>
   *          <p> Config sets the state of the conformance pack to:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_SUCCESSFUL</code> when conformance pack has been created in the member account. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> when conformance pack is being created in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code> when conformance pack creation has failed in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_FAILED</code> when conformance pack deletion has failed in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_IN_PROGRESS</code> when conformance pack is being deleted in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_SUCCESSFUL</code> when conformance pack has been deleted in the member account. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_SUCCESSFUL</code> when conformance pack has been updated in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_IN_PROGRESS</code> when conformance pack is being updated in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FAILED</code> when conformance pack deletion has failed in the member account.</p>
   *             </li>
   *          </ul>
   */
  Status?: OrganizationResourceDetailedStatus | string;
}

/**
 * @public
 */
export interface GetOrganizationConformancePackDetailedStatusRequest {
  /**
   * <p>The name of organization conformance pack for which you want status details for member accounts.</p>
   */
  OrganizationConformancePackName: string | undefined;

  /**
   * <p>An <code>OrganizationResourceDetailedStatusFilters</code> object.</p>
   */
  Filters?: OrganizationResourceDetailedStatusFilters;

  /**
   * <p>The maximum number of <code>OrganizationConformancePackDetailedStatuses</code> returned on each page.
   * 			If you do not specify a number, Config uses the default. The default is 100. </p>
   */
  Limit?: number;

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Organization conformance pack creation or deletion status in each member account.
 * 			This includes the name of the conformance pack, the status, error code and error message
 * 			when the conformance pack creation or deletion failed. </p>
 */
export interface OrganizationConformancePackDetailedStatus {
  /**
   * <p>The 12-digit account ID of a member account.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The name of conformance pack deployed in the member account.</p>
   */
  ConformancePackName: string | undefined;

  /**
   * <p>Indicates deployment status for conformance pack in a member account.
   * 			When management account calls <code>PutOrganizationConformancePack</code> action for the first time, conformance pack status is created in the member account.
   * 			When management account calls <code>PutOrganizationConformancePack</code> action for the second time, conformance pack status is updated in the member account.
   * 			Conformance pack status is deleted when the management account deletes <code>OrganizationConformancePack</code> and disables service access for <code>config-multiaccountsetup.amazonaws.com</code>.
   * 		</p>
   *          <p> Config sets the state of the conformance pack to:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_SUCCESSFUL</code> when conformance pack has been created in the member account. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> when conformance pack is being created in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code> when conformance pack creation has failed in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_FAILED</code> when conformance pack deletion has failed in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_IN_PROGRESS</code> when conformance pack is being deleted in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_SUCCESSFUL</code> when conformance pack has been deleted in the member account. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_SUCCESSFUL</code> when conformance pack has been updated in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_IN_PROGRESS</code> when conformance pack is being updated in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FAILED</code> when conformance pack deletion has failed in the member account.</p>
   *             </li>
   *          </ul>
   */
  Status: OrganizationResourceDetailedStatus | string | undefined;

  /**
   * <p>An error code that is returned when conformance pack creation or
   * 			deletion failed in the member account. </p>
   */
  ErrorCode?: string;

  /**
   * <p>An error message indicating that conformance pack account creation or deletion
   * 			has failed due to an error in the member account. </p>
   */
  ErrorMessage?: string;

  /**
   * <p>The timestamp of the last status update.</p>
   */
  LastUpdateTime?: Date;
}

/**
 * @public
 */
export interface GetOrganizationConformancePackDetailedStatusResponse {
  /**
   * <p>A list of <code>OrganizationConformancePackDetailedStatus</code> objects. </p>
   */
  OrganizationConformancePackDetailedStatuses?: OrganizationConformancePackDetailedStatus[];

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetOrganizationCustomRulePolicyRequest {
  /**
   * <p>The name of your organization Config Custom Policy rule. </p>
   */
  OrganizationConfigRuleName: string | undefined;
}

/**
 * @public
 */
export interface GetOrganizationCustomRulePolicyResponse {
  /**
   * <p>The policy definition containing the logic for your organization Config Custom Policy rule.</p>
   */
  PolicyText?: string;
}

/**
 * @public
 * <p>The input for the <a>GetResourceConfigHistory</a>
 * 			action.</p>
 */
export interface GetResourceConfigHistoryRequest {
  /**
   * <p>The resource type.</p>
   */
  resourceType: ResourceType | string | undefined;

  /**
   * <p>The ID of the resource (for example.,
   * 			<code>sg-xxxxxx</code>).</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The time stamp that indicates a later time. If not specified,
   * 			current time is taken.</p>
   */
  laterTime?: Date;

  /**
   * <p>The time stamp that indicates an earlier time. If not
   * 			specified, the action returns paginated results that contain
   * 			configuration items that start when the first configuration item was
   * 			recorded.</p>
   */
  earlierTime?: Date;

  /**
   * <p>The chronological order for configuration items listed. By
   * 			default, the results are listed in reverse chronological
   * 			order.</p>
   */
  chronologicalOrder?: ChronologicalOrder | string;

  /**
   * <p>The maximum number of configuration items returned on each
   * 			page. The default is 10. You cannot specify a number greater than
   * 			100. If you specify 0, Config uses the default.</p>
   */
  limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The output for the <a>GetResourceConfigHistory</a>
 * 			action.</p>
 */
export interface GetResourceConfigHistoryResponse {
  /**
   * <p>A list that contains the configuration history of one or more
   * 			resources.</p>
   */
  configurationItems?: ConfigurationItem[];

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The specified time range is not valid. The earlier time is not
 * 			chronologically before the later time.</p>
 */
export class InvalidTimeRangeException extends __BaseException {
  readonly name: "InvalidTimeRangeException" = "InvalidTimeRangeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTimeRangeException, __BaseException>) {
    super({
      name: "InvalidTimeRangeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTimeRangeException.prototype);
  }
}

/**
 * @public
 */
export interface GetResourceEvaluationSummaryRequest {
  /**
   * <p>The unique <code>ResourceEvaluationId</code> of Amazon Web Services resource execution for which you want to retrieve the evaluation summary.</p>
   */
  ResourceEvaluationId: string | undefined;
}

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
 * <p>Returns information about the resource being evaluated.</p>
 */
export interface ResourceDetails {
  /**
   * <p>A unique resource ID for an evaluation.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The type of resource being evaluated.</p>
   */
  ResourceType: string | undefined;

  /**
   * <p>The resource definition to be evaluated as per the resource configuration schema type.</p>
   */
  ResourceConfiguration: string | undefined;

  /**
   * <p>The schema type of the resource configuration.</p>
   *          <note>
   *             <p>You can find the
   * 			<a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html">Resource type schema</a>, or <code>CFN_RESOURCE_SCHEMA</code>, in "<i>Amazon Web Services public extensions</i>" within the CloudFormation registry or with the following CLI commmand:
   * 			<code>aws cloudformation describe-type --type-name "AWS::S3::Bucket" --type RESOURCE</code>.</p>
   *             <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html#registry-view">Managing extensions through the CloudFormation registry</a>
   * 				and <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and property types reference</a> in the CloudFormation User Guide.</p>
   *          </note>
   */
  ResourceConfigurationSchemaType?: ResourceConfigurationSchemaType | string;
}

/**
 * @public
 */
export interface GetResourceEvaluationSummaryResponse {
  /**
   * <p>The unique <code>ResourceEvaluationId</code> of Amazon Web Services resource execution for which you want to retrieve the evaluation summary.</p>
   */
  ResourceEvaluationId?: string;

  /**
   * <p>Lists results of the mode that you requested to retrieve the resource evaluation summary. The valid values are Detective or Proactive.</p>
   */
  EvaluationMode?: EvaluationMode | string;

  /**
   * <p>Returns an <code>EvaluationStatus</code> object.</p>
   */
  EvaluationStatus?: EvaluationStatus;

  /**
   * <p>The start timestamp when Config rule starts evaluating compliance for the provided resource details.</p>
   */
  EvaluationStartTimestamp?: Date;

  /**
   * <p>The compliance status of the resource evaluation summary.</p>
   */
  Compliance?: ComplianceType | string;

  /**
   * <p>Returns an <code>EvaluationContext</code> object.</p>
   */
  EvaluationContext?: EvaluationContext;

  /**
   * <p>Returns a <code>ResourceDetails</code> object.</p>
   */
  ResourceDetails?: ResourceDetails;
}

/**
 * @public
 */
export interface GetStoredQueryRequest {
  /**
   * <p>The name of the query.</p>
   */
  QueryName: string | undefined;
}

/**
 * @public
 * <p>Provides the details of a stored query.</p>
 */
export interface StoredQuery {
  /**
   * <p>The ID of the query.</p>
   */
  QueryId?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the query. For example, arn:partition:service:region:account-id:resource-type/resource-name/resource-id.</p>
   */
  QueryArn?: string;

  /**
   * <p>The name of the query.</p>
   */
  QueryName: string | undefined;

  /**
   * <p>A unique description for the query.</p>
   */
  Description?: string;

  /**
   * <p>The expression of the query. For example, <code>SELECT
   * 			resourceId,
   * 			resourceType,
   * 			supplementaryConfiguration.BucketVersioningConfiguration.status
   * 			WHERE
   * 			resourceType = 'AWS::S3::Bucket'
   * 			AND supplementaryConfiguration.BucketVersioningConfiguration.status = 'Off'.</code>
   *          </p>
   */
  Expression?: string;
}

/**
 * @public
 */
export interface GetStoredQueryResponse {
  /**
   * <p>Returns a <code>StoredQuery</code> object.</p>
   */
  StoredQuery?: StoredQuery;
}

/**
 * @public
 * <p>Using the same client token with one or more different parameters. Specify a new client token with the parameter changes and try again.</p>
 */
export class IdempotentParameterMismatch extends __BaseException {
  readonly name: "IdempotentParameterMismatch" = "IdempotentParameterMismatch";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotentParameterMismatch, __BaseException>) {
    super({
      name: "IdempotentParameterMismatch",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotentParameterMismatch.prototype);
  }
}

/**
 * @public
 * <p>Your Amazon S3 bucket policy does not permit Config to
 * 			write to it.</p>
 */
export class InsufficientDeliveryPolicyException extends __BaseException {
  readonly name: "InsufficientDeliveryPolicyException" = "InsufficientDeliveryPolicyException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientDeliveryPolicyException, __BaseException>) {
    super({
      name: "InsufficientDeliveryPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientDeliveryPolicyException.prototype);
  }
}

/**
 * @public
 * <p>You have provided a name for the configuration recorder that is not
 * 			valid.</p>
 */
export class InvalidConfigurationRecorderNameException extends __BaseException {
  readonly name: "InvalidConfigurationRecorderNameException" = "InvalidConfigurationRecorderNameException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidConfigurationRecorderNameException, __BaseException>) {
    super({
      name: "InvalidConfigurationRecorderNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidConfigurationRecorderNameException.prototype);
  }
}

/**
 * @public
 * <p>The specified delivery channel name is not valid.</p>
 */
export class InvalidDeliveryChannelNameException extends __BaseException {
  readonly name: "InvalidDeliveryChannelNameException" = "InvalidDeliveryChannelNameException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDeliveryChannelNameException, __BaseException>) {
    super({
      name: "InvalidDeliveryChannelNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDeliveryChannelNameException.prototype);
  }
}

/**
 * @public
 * <p>The syntax of the query is incorrect.</p>
 */
export class InvalidExpressionException extends __BaseException {
  readonly name: "InvalidExpressionException" = "InvalidExpressionException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidExpressionException, __BaseException>) {
    super({
      name: "InvalidExpressionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidExpressionException.prototype);
  }
}

/**
 * @public
 * <p>Indicates one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>You have provided a combination of parameter values that is not valid. For example:</p>
 *                <ul>
 *                   <li>
 *                      <p>Setting the <code>allSupported</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html">RecordingGroup</a> to <code>true</code>,
 * 						but providing a non-empty list for the <code>resourceTypes</code>field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html">RecordingGroup</a>.</p>
 *                   </li>
 *                   <li>
 *                      <p>Setting the <code>allSupported</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html">RecordingGroup</a> to <code>true</code>, but also setting the <code>useOnly</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingStrategy.html">RecordingStrategy</a> to <code>EXCLUSION_BY_RESOURCE_TYPES</code>.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Every parameter is either null, false, or empty.</p>
 *             </li>
 *             <li>
 *                <p>You have reached the limit of the number of resource types you can provide for the recording group.</p>
 *             </li>
 *             <li>
 *                <p>You have provided resource types or a recording strategy that are not valid.</p>
 *             </li>
 *          </ul>
 */
export class InvalidRecordingGroupException extends __BaseException {
  readonly name: "InvalidRecordingGroupException" = "InvalidRecordingGroupException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRecordingGroupException, __BaseException>) {
    super({
      name: "InvalidRecordingGroupException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRecordingGroupException.prototype);
  }
}

/**
 * @public
 * <p>The specified <code>ResultToken</code> is not valid.</p>
 */
export class InvalidResultTokenException extends __BaseException {
  readonly name: "InvalidResultTokenException" = "InvalidResultTokenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResultTokenException, __BaseException>) {
    super({
      name: "InvalidResultTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResultTokenException.prototype);
  }
}

/**
 * @public
 * <p>You have provided a null or empty Amazon Resource Name (ARN) for the IAM role assumed by Config and used by the configuration recorder.</p>
 */
export class InvalidRoleException extends __BaseException {
  readonly name: "InvalidRoleException" = "InvalidRoleException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRoleException, __BaseException>) {
    super({
      name: "InvalidRoleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRoleException.prototype);
  }
}

/**
 * @public
 * <p>The specified Amazon S3 key prefix is not valid.</p>
 */
export class InvalidS3KeyPrefixException extends __BaseException {
  readonly name: "InvalidS3KeyPrefixException" = "InvalidS3KeyPrefixException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidS3KeyPrefixException, __BaseException>) {
    super({
      name: "InvalidS3KeyPrefixException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidS3KeyPrefixException.prototype);
  }
}

/**
 * @public
 * <p>The specified Amazon KMS Key ARN is not valid.</p>
 */
export class InvalidS3KmsKeyArnException extends __BaseException {
  readonly name: "InvalidS3KmsKeyArnException" = "InvalidS3KmsKeyArnException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidS3KmsKeyArnException, __BaseException>) {
    super({
      name: "InvalidS3KmsKeyArnException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidS3KmsKeyArnException.prototype);
  }
}

/**
 * @public
 * <p>The specified Amazon SNS topic does not exist.</p>
 */
export class InvalidSNSTopicARNException extends __BaseException {
  readonly name: "InvalidSNSTopicARNException" = "InvalidSNSTopicARNException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSNSTopicARNException, __BaseException>) {
    super({
      name: "InvalidSNSTopicARNException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSNSTopicARNException.prototype);
  }
}

/**
 * @public
 * <p>For <code>StartConfigRulesEvaluation</code> API, this exception
 * 			is thrown if an evaluation is in progress or if you call the <a>StartConfigRulesEvaluation</a> API more than once per
 * 			minute.</p>
 *          <p>For <code>PutConfigurationAggregator</code> API, this exception
 * 			is thrown if the number of accounts and aggregators exceeds the
 * 			limit.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * @public
 * <p>Filters the results by resource account ID, region, resource ID, and resource name.</p>
 */
export interface ResourceFilters {
  /**
   * <p>The 12-digit source account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The name of the resource.</p>
   */
  ResourceName?: string;

  /**
   * <p>The source region.</p>
   */
  Region?: string;
}

/**
 * @public
 */
export interface ListAggregateDiscoveredResourcesRequest {
  /**
   * <p>The name of the configuration aggregator. </p>
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>The type of resources that you want Config to list in the response.</p>
   */
  ResourceType: ResourceType | string | undefined;

  /**
   * <p>Filters the results based on the <code>ResourceFilters</code> object.</p>
   */
  Filters?: ResourceFilters;

  /**
   * <p>The maximum number of resource identifiers returned on each page. You cannot specify a number greater than 100. If you specify 0, Config uses the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAggregateDiscoveredResourcesResponse {
  /**
   * <p>Returns a list of <code>ResourceIdentifiers</code> objects.</p>
   */
  ResourceIdentifiers?: AggregateResourceIdentifier[];

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

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

/**
 * @public
 */
export interface ListConformancePackComplianceScoresRequest {
  /**
   * <p>Filters the results based on the <code>ConformancePackComplianceScoresFilters</code>.</p>
   */
  Filters?: ConformancePackComplianceScoresFilters;

  /**
   * <p>Determines the order in which conformance pack compliance scores are sorted. Either in ascending or descending order.</p>
   *          <p>By default, conformance pack compliance scores are sorted in alphabetical order by name of the conformance pack. Conformance pack compliance scores are sorted in reverse alphabetical order if you enter <code>DESCENDING</code>.</p>
   *          <p>You can sort conformance pack compliance scores by the numerical value of the compliance score by entering <code>SCORE</code> in the <code>SortBy</code> action. When compliance scores are sorted by <code>SCORE</code>, conformance packs with a compliance score of <code>INSUFFICIENT_DATA</code> will be last when sorting by ascending order and first when sorting by descending order.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>Sorts your conformance pack compliance scores in either ascending or descending order, depending on <code>SortOrder</code>.</p>
   *          <p>By default, conformance pack compliance scores are sorted in alphabetical order by name of the conformance pack.
   * 			Enter <code>SCORE</code>, to sort conformance pack compliance scores by the numerical value of the compliance score.</p>
   */
  SortBy?: SortBy | string;

  /**
   * <p>The maximum number of conformance pack compliance scores returned on each page.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string in a prior request that you can use to get the paginated response for the next set of conformance pack compliance scores.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListConformancePackComplianceScoresResponse {
  /**
   * <p>The <code>nextToken</code> string that you can use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>ConformancePackComplianceScore</code> objects.</p>
   */
  ConformancePackComplianceScores: ConformancePackComplianceScore[] | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface ListDiscoveredResourcesRequest {
  /**
   * <p>The type of resources that you want Config to list in the
   * 			response.</p>
   */
  resourceType: ResourceType | string | undefined;

  /**
   * <p>The IDs of only those resources that you want Config to
   * 			list in the response. If you do not specify this parameter, Config lists all resources of the specified type that it has
   * 			discovered. You can list a minimum of 1 resourceID and a maximum of 20 resourceIds.</p>
   */
  resourceIds?: string[];

  /**
   * <p>The custom name of only those resources that you want Config to list in the response. If you do not specify this
   * 			parameter, Config lists all resources of the specified type that
   * 			it has discovered.</p>
   */
  resourceName?: string;

  /**
   * <p>The maximum number of resource identifiers returned on each
   * 			page. The default is 100. You cannot specify a number greater than
   * 			100. If you specify 0, Config uses the default.</p>
   */
  limit?: number;

  /**
   * <p>Specifies whether Config includes deleted resources in the
   * 			results. By default, deleted resources are not included.</p>
   */
  includeDeletedResources?: boolean;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The details that identify a resource that is discovered by Config, including the resource type, ID, and (if available) the
 * 			custom resource name.</p>
 */
export interface ResourceIdentifier {
  /**
   * <p>The type of resource.</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The ID of the resource (for example,
   * 			<code>sg-xxxxxx</code>).</p>
   */
  resourceId?: string;

  /**
   * <p>The custom name of the resource (if available).</p>
   */
  resourceName?: string;

  /**
   * <p>The time that the resource was deleted.</p>
   */
  resourceDeletionTime?: Date;
}

/**
 * @public
 * <p></p>
 */
export interface ListDiscoveredResourcesResponse {
  /**
   * <p>The details that identify a resource that is discovered by Config, including the resource type, ID, and (if available) the
   * 			custom resource name.</p>
   */
  resourceIdentifiers?: ResourceIdentifier[];

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Filters evaluation results based on start and end times.</p>
 */
export interface TimeWindow {
  /**
   * <p>The start time of an execution.</p>
   */
  StartTime?: Date;

  /**
   * <p>The end time of an execution. The end time must be after the start date.</p>
   */
  EndTime?: Date;
}

/**
 * @public
 * <p>Returns details of a resource evaluation based on the selected filter.</p>
 */
export interface ResourceEvaluationFilters {
  /**
   * <p>Filters all resource evaluations results based on an evaluation mode. the valid value for this API is <code>Proactive</code>.</p>
   */
  EvaluationMode?: EvaluationMode | string;

  /**
   * <p>Returns a <code>TimeWindow</code> object.</p>
   */
  TimeWindow?: TimeWindow;

  /**
   * <p>Filters evaluations for a given infrastructure deployment. For example: CFN Stack.</p>
   */
  EvaluationContextIdentifier?: string;
}

/**
 * @public
 */
export interface ListResourceEvaluationsRequest {
  /**
   * <p>Returns a <code>ResourceEvaluationFilters</code> object.</p>
   */
  Filters?: ResourceEvaluationFilters;

  /**
   * <p>The maximum number of evaluations returned on each page. The default is 10.
   * 			You cannot specify a number greater than 100. If you specify 0, Config uses the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Returns details of a resource evaluation.</p>
 */
export interface ResourceEvaluation {
  /**
   * <p>The ResourceEvaluationId of a evaluation.</p>
   */
  ResourceEvaluationId?: string;

  /**
   * <p>The mode of an evaluation. The valid values are Detective or Proactive.</p>
   */
  EvaluationMode?: EvaluationMode | string;

  /**
   * <p>The starting time of an execution.</p>
   */
  EvaluationStartTimestamp?: Date;
}

/**
 * @public
 */
export interface ListResourceEvaluationsResponse {
  /**
   * <p>Returns a <code>ResourceEvaluations</code> object.</p>
   */
  ResourceEvaluations?: ResourceEvaluation[];

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListStoredQueriesRequest {
  /**
   * <p>The nextToken string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned with a single call.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Returns details of a specific query. </p>
 */
export interface StoredQueryMetadata {
  /**
   * <p>The ID of the query. </p>
   */
  QueryId: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the query. For example, arn:partition:service:region:account-id:resource-type/resource-name/resource-id.</p>
   */
  QueryArn: string | undefined;

  /**
   * <p>The name of the query.</p>
   */
  QueryName: string | undefined;

  /**
   * <p>A unique description for the query.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface ListStoredQueriesResponse {
  /**
   * <p>A list of <code>StoredQueryMetadata</code> objects.</p>
   */
  StoredQueryMetadata?: StoredQueryMetadata[];

  /**
   * <p>If the previous paginated request didn't return all of the remaining results, the response object's <code>NextToken</code> parameter value is set to a token.
   * 			To retrieve the next set of results, call this action again and assign that token to the request object's <code>NextToken</code> parameter.
   * 			If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are <code>ConfigRule</code>, <code>ConfigurationAggregator</code> and <code>AggregatorAuthorization</code>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The maximum number of tags returned on each page. The limit maximum is 50. You cannot specify a number greater than 50. If you specify 0, Config uses the default. </p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The tags for the resource. The metadata that you apply to a resource to help you categorize and organize them.
 * 			Each tag consists of a key and an optional value, both of which you define.
 * 			Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
 */
export interface Tag {
  /**
   * <p>One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.</p>
   */
  Key?: string;

  /**
   * <p>The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).</p>
   */
  Value?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for the resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>You have reached the limit of active custom resource types in your account. There is a limit of 100,000.
 * 			Delete unused resources using <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteResourceConfig.html">DeleteResourceConfig</a>
 *             <code></code>.</p>
 */
export class MaxActiveResourcesExceededException extends __BaseException {
  readonly name: "MaxActiveResourcesExceededException" = "MaxActiveResourcesExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaxActiveResourcesExceededException, __BaseException>) {
    super({
      name: "MaxActiveResourcesExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaxActiveResourcesExceededException.prototype);
  }
}
