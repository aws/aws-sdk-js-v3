// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ConfigServiceServiceException as __BaseException } from "./ConfigServiceServiceException";

/**
 * <p>A collection of accounts and regions.</p>
 * @public
 */
export interface AccountAggregationSource {
  /**
   * <p>The 12-digit account ID of the account being aggregated.
   * 		</p>
   * @public
   */
  AccountIds: string[] | undefined;

  /**
   * <p>If true, aggregate existing Config regions and future
   * 			regions.</p>
   * @public
   */
  AllAwsRegions?: boolean | undefined;

  /**
   * <p>The source regions being aggregated.</p>
   * @public
   */
  AwsRegions?: string[] | undefined;
}

/**
 * <p>The number of Amazon Web Services resources or Config rules responsible for
 * 			the current compliance of the item, up to a maximum
 * 			number.</p>
 * @public
 */
export interface ComplianceContributorCount {
  /**
   * <p>The number of Amazon Web Services resources or Config rules responsible for
   * 			the current compliance of the item.</p>
   * @public
   */
  CappedCount?: number | undefined;

  /**
   * <p>Indicates whether the maximum count is reached.</p>
   * @public
   */
  CapExceeded?: boolean | undefined;
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
 * <p>Indicates whether an Amazon Web Services resource or Config rule is
 * 			compliant and provides the number of contributors that affect the
 * 			compliance.</p>
 * @public
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
   * @public
   */
  ComplianceType?: ComplianceType | undefined;

  /**
   * <p>The number of Amazon Web Services resources or Config rules that cause a
   * 			result of <code>NON_COMPLIANT</code>, up to a maximum
   * 			number.</p>
   * @public
   */
  ComplianceContributorCount?: ComplianceContributorCount | undefined;
}

/**
 * <p>Indicates whether an Config rule is compliant based on
 * 			account ID, region, compliance, and rule name.</p>
 *          <p>A rule is compliant if all of the resources that the rule
 * 			evaluated comply with it. It is noncompliant if any of these
 * 			resources do not comply.</p>
 * @public
 */
export interface AggregateComplianceByConfigRule {
  /**
   * <p>The name of the Config rule.</p>
   * @public
   */
  ConfigRuleName?: string | undefined;

  /**
   * <p>Indicates whether an Amazon Web Services resource or Config rule is
   * 			compliant and provides the number of contributors that affect the
   * 			compliance.</p>
   * @public
   */
  Compliance?: Compliance | undefined;

  /**
   * <p>The 12-digit account ID of the source account.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The source region from where the data is aggregated.</p>
   * @public
   */
  AwsRegion?: string | undefined;
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
 * <p>Provides the number of compliant and noncompliant rules within a conformance pack.
 * 			Also provides the compliance status of the conformance pack and the total rule count which includes compliant rules, noncompliant rules, and rules that cannot be evaluated due to insufficient data.</p>
 *          <p>A conformance pack is compliant if all of the rules in a conformance packs are compliant. It is noncompliant if any of the rules are not compliant.
 * 			The compliance status of a conformance pack is INSUFFICIENT_DATA only if all rules within a conformance pack cannot be evaluated due to insufficient data.
 * 			If some of the rules in a conformance pack are compliant but the compliance status of other rules in that same conformance pack is INSUFFICIENT_DATA, the conformance pack shows compliant.</p>
 * @public
 */
export interface AggregateConformancePackCompliance {
  /**
   * <p>The compliance status of the conformance pack.</p>
   * @public
   */
  ComplianceType?: ConformancePackComplianceType | undefined;

  /**
   * <p>The number of compliant Config Rules.</p>
   * @public
   */
  CompliantRuleCount?: number | undefined;

  /**
   * <p>The number of noncompliant Config Rules.</p>
   * @public
   */
  NonCompliantRuleCount?: number | undefined;

  /**
   * <p>Total number of compliant rules, noncompliant rules, and the rules that do not have any applicable resources to evaluate upon resulting in insufficient data.</p>
   * @public
   */
  TotalRuleCount?: number | undefined;
}

/**
 * <p>Provides aggregate compliance of the conformance pack. Indicates whether a conformance pack is compliant based on the name of the conformance pack, account ID, and region.</p>
 *          <p>A conformance pack is compliant if all of the rules in a conformance packs are compliant. It is noncompliant if any of the rules are not compliant.
 * 			The compliance status of a conformance pack is INSUFFICIENT_DATA only if all rules within a conformance pack cannot be evaluated due to insufficient data.
 * 			If some of the rules in a conformance pack are compliant but the compliance status of other rules in that same conformance pack is INSUFFICIENT_DATA, the conformance pack shows
 * 			compliant.</p>
 * @public
 */
export interface AggregateComplianceByConformancePack {
  /**
   * <p>The name of the conformance pack.</p>
   * @public
   */
  ConformancePackName?: string | undefined;

  /**
   * <p>The compliance status of the conformance pack.</p>
   * @public
   */
  Compliance?: AggregateConformancePackCompliance | undefined;

  /**
   * <p>The 12-digit Amazon Web Services account ID of the source account.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The source Amazon Web Services Region from where the data is aggregated.</p>
   * @public
   */
  AwsRegion?: string | undefined;
}

/**
 * <p>The number of Config rules or Amazon Web Services resources that are
 * 			compliant and noncompliant.</p>
 * @public
 */
export interface ComplianceSummary {
  /**
   * <p>The number of Config rules or Amazon Web Services resources that are
   * 			compliant, up to a maximum of 25 for rules and 100 for
   * 			resources.</p>
   * @public
   */
  CompliantResourceCount?: ComplianceContributorCount | undefined;

  /**
   * <p>The number of Config rules or Amazon Web Services resources that are
   * 			noncompliant, up to a maximum of 25 for rules and 100 for
   * 			resources.</p>
   * @public
   */
  NonCompliantResourceCount?: ComplianceContributorCount | undefined;

  /**
   * <p>The time that Config created the compliance
   * 			summary.</p>
   * @public
   */
  ComplianceSummaryTimestamp?: Date | undefined;
}

/**
 * <p>Returns the number of compliant and noncompliant rules for one
 * 			or more accounts and regions in an aggregator.</p>
 * @public
 */
export interface AggregateComplianceCount {
  /**
   * <p>The 12-digit account ID or region based on the GroupByKey
   * 			value.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The number of compliant and noncompliant Config
   * 			rules.</p>
   * @public
   */
  ComplianceSummary?: ComplianceSummary | undefined;
}

/**
 * <p>The number of conformance packs that are compliant and noncompliant.</p>
 * @public
 */
export interface AggregateConformancePackComplianceCount {
  /**
   * <p>Number of compliant conformance packs.</p>
   * @public
   */
  CompliantConformancePackCount?: number | undefined;

  /**
   * <p>Number of noncompliant conformance packs.</p>
   * @public
   */
  NonCompliantConformancePackCount?: number | undefined;
}

/**
 * <p>Filters the conformance packs based on an account ID, region, compliance type, and the name of the conformance pack.</p>
 * @public
 */
export interface AggregateConformancePackComplianceFilters {
  /**
   * <p>The name of the conformance pack.</p>
   * @public
   */
  ConformancePackName?: string | undefined;

  /**
   * <p>The compliance status of the conformance pack.</p>
   * @public
   */
  ComplianceType?: ConformancePackComplianceType | undefined;

  /**
   * <p>The 12-digit Amazon Web Services account ID of the source account.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The source Amazon Web Services Region from where the data is aggregated.</p>
   * @public
   */
  AwsRegion?: string | undefined;
}

/**
 * <p>Provides a summary of compliance based on either account ID or region. </p>
 * @public
 */
export interface AggregateConformancePackComplianceSummary {
  /**
   * <p>Returns an <code>AggregateConformancePackComplianceCount</code> object. </p>
   * @public
   */
  ComplianceSummary?: AggregateConformancePackComplianceCount | undefined;

  /**
   * <p>Groups the result based on Amazon Web Services account ID or Amazon Web Services Region.</p>
   * @public
   */
  GroupName?: string | undefined;
}

/**
 * <p>Filters the results based on account ID and region. </p>
 * @public
 */
export interface AggregateConformancePackComplianceSummaryFilters {
  /**
   * <p>The 12-digit Amazon Web Services account ID of the source account.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The source Amazon Web Services Region from where the data is aggregated.</p>
   * @public
   */
  AwsRegion?: string | undefined;
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
 * <p>The current sync status between the source and the aggregator
 * 			account.</p>
 * @public
 */
export interface AggregatedSourceStatus {
  /**
   * <p>The source account ID or an organization.</p>
   * @public
   */
  SourceId?: string | undefined;

  /**
   * <p>The source account or an organization.</p>
   * @public
   */
  SourceType?: AggregatedSourceType | undefined;

  /**
   * <p>The region authorized to collect aggregated data.</p>
   * @public
   */
  AwsRegion?: string | undefined;

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
   * @public
   */
  LastUpdateStatus?: AggregatedSourceStatusType | undefined;

  /**
   * <p>The time of the last update.</p>
   * @public
   */
  LastUpdateTime?: Date | undefined;

  /**
   * <p>The error code that Config returned when the source account
   * 			aggregation last failed.</p>
   * @public
   */
  LastErrorCode?: string | undefined;

  /**
   * <p>The message indicating that the source account aggregation
   * 			failed due to an error.</p>
   * @public
   */
  LastErrorMessage?: string | undefined;
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
 * <p>Identifies an Config rule that evaluated an Amazon Web Services resource,
 * 			and provides the type and ID of the resource that the rule
 * 			evaluated.</p>
 * @public
 */
export interface EvaluationResultQualifier {
  /**
   * <p>The name of the Config rule that was used in the
   * 			evaluation.</p>
   * @public
   */
  ConfigRuleName?: string | undefined;

  /**
   * <p>The type of Amazon Web Services resource that was evaluated.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The ID of the evaluated Amazon Web Services resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The mode of an evaluation. The valid values are Detective or Proactive.</p>
   * @public
   */
  EvaluationMode?: EvaluationMode | undefined;
}

/**
 * <p>Uniquely identifies an evaluation result.</p>
 * @public
 */
export interface EvaluationResultIdentifier {
  /**
   * <p>Identifies an Config rule used to evaluate an Amazon Web Services resource,
   * 			and provides the type and ID of the evaluated resource.</p>
   * @public
   */
  EvaluationResultQualifier?: EvaluationResultQualifier | undefined;

  /**
   * <p>The time of the event that triggered the evaluation of your Amazon Web Services
   * 			resources. The time can indicate when Config delivered a
   * 			configuration item change notification, or it can indicate when Config delivered the configuration snapshot, depending on which
   * 			event triggered the evaluation.</p>
   * @public
   */
  OrderingTimestamp?: Date | undefined;

  /**
   * <p>A Unique ID for an evaluation result.</p>
   * @public
   */
  ResourceEvaluationId?: string | undefined;
}

/**
 * <p>The details of an Config evaluation for an account ID and
 * 			region in an aggregator. Provides the Amazon Web Services resource that was
 * 			evaluated, the compliance of the resource, related time stamps, and
 * 			supplementary information. </p>
 * @public
 */
export interface AggregateEvaluationResult {
  /**
   * <p>Uniquely identifies the evaluation result.</p>
   * @public
   */
  EvaluationResultIdentifier?: EvaluationResultIdentifier | undefined;

  /**
   * <p>The resource compliance status.</p>
   *          <p>For the <code>AggregationEvaluationResult</code> data type, Config supports only the <code>COMPLIANT</code> and
   * 				<code>NON_COMPLIANT</code>. Config does not support the
   * 				<code>NOT_APPLICABLE</code> and <code>INSUFFICIENT_DATA</code>
   * 			value.</p>
   * @public
   */
  ComplianceType?: ComplianceType | undefined;

  /**
   * <p>The time when Config recorded the aggregate evaluation
   * 			result.</p>
   * @public
   */
  ResultRecordedTime?: Date | undefined;

  /**
   * <p>The time when the Config rule evaluated the Amazon Web Services
   * 			resource.</p>
   * @public
   */
  ConfigRuleInvokedTime?: Date | undefined;

  /**
   * <p>Supplementary information about how the agrregate evaluation
   * 			determined the compliance.</p>
   * @public
   */
  Annotation?: string | undefined;

  /**
   * <p>The 12-digit account ID of the source account.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The source region from where the data is aggregated.</p>
   * @public
   */
  AwsRegion?: string | undefined;
}

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
  AppConfigApplication: "AWS::AppConfig::Application",
  AppConfigConfigurationProfile: "AWS::AppConfig::ConfigurationProfile",
  AppConfigDeploymentStrategy: "AWS::AppConfig::DeploymentStrategy",
  AppConfigEnvironment: "AWS::AppConfig::Environment",
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
  BackupPlan: "AWS::Backup::BackupPlan",
  BackupRecoveryPoint: "AWS::Backup::RecoveryPoint",
  BackupReportPlan: "AWS::Backup::ReportPlan",
  BackupSelection: "AWS::Backup::BackupSelection",
  BackupVault: "AWS::Backup::BackupVault",
  BatchComputeEnvironment: "AWS::Batch::ComputeEnvironment",
  BatchJobQueue: "AWS::Batch::JobQueue",
  BatchSchedulingPolicy: "AWS::Batch::SchedulingPolicy",
  BedrockGuardrail: "AWS::Bedrock::Guardrail",
  BedrockKnowledgeBase: "AWS::Bedrock::KnowledgeBase",
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
  ConformancePackCompliance: "AWS::Config::ConformancePackCompliance",
  ConnectInstance: "AWS::Connect::Instance",
  ConnectPhoneNumber: "AWS::Connect::PhoneNumber",
  ConnectQuickConnect: "AWS::Connect::QuickConnect",
  ConnectRule: "AWS::Connect::Rule",
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
  EC2CapacityReservation: "AWS::EC2::CapacityReservation",
  EC2CarrierGateway: "AWS::EC2::CarrierGateway",
  EC2ClientVpnEndpoint: "AWS::EC2::ClientVpnEndpoint",
  EC2ClientVpnTargetNetworkAssociation: "AWS::EC2::ClientVpnTargetNetworkAssociation",
  EC2DHCPOptions: "AWS::EC2::DHCPOptions",
  EC2EC2Fleet: "AWS::EC2::EC2Fleet",
  EC2EIPAssociation: "AWS::EC2::EIPAssociation",
  EC2IPAM: "AWS::EC2::IPAM",
  EC2IPAMPool: "AWS::EC2::IPAMPool",
  EC2IPAMResourceDiscovery: "AWS::EC2::IPAMResourceDiscovery",
  EC2IPAMResourceDiscoveryAssociation: "AWS::EC2::IPAMResourceDiscoveryAssociation",
  EC2IPAMScope: "AWS::EC2::IPAMScope",
  EC2InstanceConnectEndpoint: "AWS::EC2::InstanceConnectEndpoint",
  EC2NetworkInsightsAccessScope: "AWS::EC2::NetworkInsightsAccessScope",
  EC2NetworkInsightsAnalysis: "AWS::EC2::NetworkInsightsAnalysis",
  EC2NetworkInsightsPath: "AWS::EC2::NetworkInsightsPath",
  EC2PrefixList: "AWS::EC2::PrefixList",
  EC2SnapshotBlockPublicAccess: "AWS::EC2::SnapshotBlockPublicAccess",
  EC2SpotFleet: "AWS::EC2::SpotFleet",
  EC2SubnetRouteTableAssociation: "AWS::EC2::SubnetRouteTableAssociation",
  EC2TrafficMirrorFilter: "AWS::EC2::TrafficMirrorFilter",
  EC2TrafficMirrorSession: "AWS::EC2::TrafficMirrorSession",
  EC2TrafficMirrorTarget: "AWS::EC2::TrafficMirrorTarget",
  EC2TransitGatewayConnect: "AWS::EC2::TransitGatewayConnect",
  EC2TransitGatewayMulticastDomain: "AWS::EC2::TransitGatewayMulticastDomain",
  EC2VPCBlockPublicAccessExclusion: "AWS::EC2::VPCBlockPublicAccessExclusion",
  EC2VPCBlockPublicAccessOptions: "AWS::EC2::VPCBlockPublicAccessOptions",
  EC2VPCEndpointConnectionNotification: "AWS::EC2::VPCEndpointConnectionNotification",
  EC2VPNConnectionRoute: "AWS::EC2::VPNConnectionRoute",
  ECRPublicRepository: "AWS::ECR::PublicRepository",
  ECRPullThroughCacheRule: "AWS::ECR::PullThroughCacheRule",
  ECRRegistryPolicy: "AWS::ECR::RegistryPolicy",
  ECRRepository: "AWS::ECR::Repository",
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
  GlobalAcceleratorAccelerator: "AWS::GlobalAccelerator::Accelerator",
  GlobalAcceleratorEndpointGroup: "AWS::GlobalAccelerator::EndpointGroup",
  GlobalAcceleratorListener: "AWS::GlobalAccelerator::Listener",
  GlueClassifier: "AWS::Glue::Classifier",
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
  IoTCustomMetric: "AWS::IoT::CustomMetric",
  IoTDimension: "AWS::IoT::Dimension",
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
  IoTSiteWiseAssetModel: "AWS::IoTSiteWise::AssetModel",
  IoTSiteWiseDashboard: "AWS::IoTSiteWise::Dashboard",
  IoTSiteWiseGateway: "AWS::IoTSiteWise::Gateway",
  IoTSiteWisePortal: "AWS::IoTSiteWise::Portal",
  IoTSiteWiseProject: "AWS::IoTSiteWise::Project",
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
  LogsDestination: "AWS::Logs::Destination",
  LookoutMetricsAlert: "AWS::LookoutMetrics::Alert",
  LookoutVisionProject: "AWS::LookoutVision::Project",
  M2Environment: "AWS::M2::Environment",
  MSKBatchScramSecret: "AWS::MSK::BatchScramSecret",
  MSKCluster: "AWS::MSK::Cluster",
  MSKClusterPolicy: "AWS::MSK::ClusterPolicy",
  MSKConfiguration: "AWS::MSK::Configuration",
  MSKVpcConnection: "AWS::MSK::VpcConnection",
  ManagedInstanceInventory: "AWS::SSM::ManagedInstanceInventory",
  ManagedRuleSetV2: "AWS::WAFv2::ManagedRuleSet",
  MediaConnectFlowEntitlement: "AWS::MediaConnect::FlowEntitlement",
  MediaConnectFlowSource: "AWS::MediaConnect::FlowSource",
  MediaConnectFlowVpcInterface: "AWS::MediaConnect::FlowVpcInterface",
  MediaConnectGateway: "AWS::MediaConnect::Gateway",
  MediaPackagePackagingConfiguration: "AWS::MediaPackage::PackagingConfiguration",
  MediaPackagePackagingGroup: "AWS::MediaPackage::PackagingGroup",
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
  NetworkManagerTransitGatewayRegistration: "AWS::NetworkManager::TransitGatewayRegistration",
  OpenSearchDomain: "AWS::OpenSearch::Domain",
  OpenSearchServerlessCollection: "AWS::OpenSearchServerless::Collection",
  OpenSearchServerlessVpcEndpoint: "AWS::OpenSearchServerless::VpcEndpoint",
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
  RDSOptionGroup: "AWS::RDS::OptionGroup",
  RUMAppMonitor: "AWS::RUM::AppMonitor",
  RateBasedRule: "AWS::WAF::RateBasedRule",
  RedshiftEndpointAccess: "AWS::Redshift::EndpointAccess",
  RedshiftEndpointAuthorization: "AWS::Redshift::EndpointAuthorization",
  RedshiftEventSubscription: "AWS::Redshift::EventSubscription",
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
  Route53HostedZone: "AWS::Route53::HostedZone",
  Route53ProfilesProfile: "AWS::Route53Profiles::Profile",
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
  S3AccessPoint: "AWS::S3::AccessPoint",
  S3ExpressBucketPolicy: "AWS::S3Express::BucketPolicy",
  S3ExpressDirectoryBucket: "AWS::S3Express::DirectoryBucket",
  S3MultiRegionAccessPoint: "AWS::S3::MultiRegionAccessPoint",
  S3StorageLens: "AWS::S3::StorageLens",
  S3StorageLensGroup: "AWS::S3::StorageLensGroup",
  SESConfigurationSet: "AWS::SES::ConfigurationSet",
  SESContactList: "AWS::SES::ContactList",
  SESReceiptFilter: "AWS::SES::ReceiptFilter",
  SESReceiptRuleSet: "AWS::SES::ReceiptRuleSet",
  SESTemplate: "AWS::SES::Template",
  SSMDocument: "AWS::SSM::Document",
  SageMakerAppImageConfig: "AWS::SageMaker::AppImageConfig",
  SageMakerCodeRepository: "AWS::SageMaker::CodeRepository",
  SageMakerDomain: "AWS::SageMaker::Domain",
  SageMakerFeatureGroup: "AWS::SageMaker::FeatureGroup",
  SageMakerImage: "AWS::SageMaker::Image",
  SageMakerInferenceExperiment: "AWS::SageMaker::InferenceExperiment",
  SageMakerModel: "AWS::SageMaker::Model",
  SageMakerNotebookInstanceLifecycleConfig: "AWS::SageMaker::NotebookInstanceLifecycleConfig",
  SageMakerWorkteam: "AWS::SageMaker::Workteam",
  ScalingPolicy: "AWS::AutoScaling::ScalingPolicy",
  ScheduledAction: "AWS::AutoScaling::ScheduledAction",
  Secret: "AWS::SecretsManager::Secret",
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
 * <p>The details that identify a resource that is collected by Config aggregator, including the resource type, ID, (if available) the custom resource name, the source account, and source region.</p>
 * @public
 */
export interface AggregateResourceIdentifier {
  /**
   * <p>The 12-digit account ID of the source account.</p>
   * @public
   */
  SourceAccountId: string | undefined;

  /**
   * <p>The source region where data is aggregated.</p>
   * @public
   */
  SourceRegion: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services resource.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The type of the Amazon Web Services resource.</p>
   * @public
   */
  ResourceType: ResourceType | undefined;

  /**
   * <p>The name of the Amazon Web Services resource.</p>
   * @public
   */
  ResourceName?: string | undefined;
}

/**
 * <p>An object that represents the authorizations granted to
 * 			aggregator accounts and regions.</p>
 * @public
 */
export interface AggregationAuthorization {
  /**
   * <p>The Amazon Resource Name (ARN) of the aggregation
   * 			object.</p>
   * @public
   */
  AggregationAuthorizationArn?: string | undefined;

  /**
   * <p>The 12-digit account ID of the account authorized to aggregate
   * 			data.</p>
   * @public
   */
  AuthorizedAccountId?: string | undefined;

  /**
   * <p>The region authorized to collect aggregated data.</p>
   * @public
   */
  AuthorizedAwsRegion?: string | undefined;

  /**
   * <p>The time stamp when the aggregation authorization was
   * 			created.</p>
   * @public
   */
  CreationTime?: Date | undefined;
}

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
 * <p>An object to filter the configuration recorders based on the resource types in scope for recording.</p>
 * @public
 */
export interface AggregatorFilterResourceType {
  /**
   * <p>The type of resource type filter to apply. <code>INCLUDE</code> specifies that the list of resource types in the <code>Value</code> field will be aggregated and no other resource types will be filtered.</p>
   * @public
   */
  Type?: AggregatorFilterType | undefined;

  /**
   * <p>Comma-separate list of resource types to filter your aggregated configuration recorders.</p>
   * @public
   */
  Value?: string[] | undefined;
}

/**
 * <p>An object to filter service-linked configuration recorders in an aggregator based on the linked Amazon Web Services service.</p>
 * @public
 */
export interface AggregatorFilterServicePrincipal {
  /**
   * <p>The type of service principal filter to apply. <code>INCLUDE</code> specifies that the list of service principals in the <code>Value</code> field will be aggregated and no other service principals will be filtered.</p>
   * @public
   */
  Type?: AggregatorFilterType | undefined;

  /**
   * <p>Comma-separated list of service principals for the linked Amazon Web Services services to filter your aggregated service-linked configuration recorders.</p>
   * @public
   */
  Value?: string[] | undefined;
}

/**
 * <p>An object to filter the data you specify for an aggregator.</p>
 * @public
 */
export interface AggregatorFilters {
  /**
   * <p>An object to filter the configuration recorders based on the resource types in scope for recording.</p>
   * @public
   */
  ResourceType?: AggregatorFilterResourceType | undefined;

  /**
   * <p>An object to filter service-linked configuration recorders in an aggregator based on the linked Amazon Web Services service.</p>
   * @public
   */
  ServicePrincipal?: AggregatorFilterServicePrincipal | undefined;
}

/**
 * @public
 */
export interface AssociateResourceTypesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the specified configuration recorder.</p>
   * @public
   */
  ConfigurationRecorderArn: string | undefined;

  /**
   * <p>The list of resource types you want to add to the recording group of the specified configuration recorder.</p>
   * @public
   */
  ResourceTypes: ResourceType[] | undefined;
}

/**
 * <p>Specifies whether the configuration recorder excludes certain resource types from being recorded.
 * 			Use the <code>resourceTypes</code> field to enter a comma-separated list of resource types you want to exclude from recording.</p>
 *          <p>By default, when Config adds support for a new resource type in the Region where you set up the configuration recorder,
 * 			including global resource types, Config starts recording resources of that type automatically.</p>
 *          <note>
 *             <p>
 *                <b>How to use the exclusion recording strategy </b>
 *             </p>
 *             <p>To use this option, you must set the <code>useOnly</code>
 * 				field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingStrategy.html">RecordingStrategy</a>
 * 				to <code>EXCLUSION_BY_RESOURCE_TYPES</code>.</p>
 *             <p>Config will then record configuration changes for all supported resource types, except the resource types that you specify to exclude from being recorded.</p>
 *             <p>
 *                <b>Global resource types and the exclusion recording strategy </b>
 *             </p>
 *             <p>Unless specifically listed as exclusions,
 * 				<code>AWS::RDS::GlobalCluster</code> will be recorded automatically in all supported  Config Regions were the configuration recorder is enabled.</p>
 *             <p>IAM users, groups, roles, and customer managed policies will be recorded in the Region where you set up the configuration recorder if that is a Region where Config was available before February 2022.
 * 				You cannot be record the global IAM resouce types in Regions supported by Config after February 2022. For a list of those Regions,
 * 				see <a href="https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html#select-resources-all">Recording Amazon Web Services Resources | Global Resources</a>.</p>
 *          </note>
 * @public
 */
export interface ExclusionByResourceTypes {
  /**
   * <p>A comma-separated list of resource types to exclude from recording by the configuration
   * 			recorder.</p>
   * @public
   */
  resourceTypes?: ResourceType[] | undefined;
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
 * <p>Specifies the recording strategy of the configuration recorder.</p>
 * @public
 */
export interface RecordingStrategy {
  /**
   * <p>The recording strategy for the configuration recorder.</p>
   *          <ul>
   *             <li>
   *                <p>If you set this option to <code>ALL_SUPPORTED_RESOURCE_TYPES</code>, Config records configuration changes for all supported resource types, excluding the global IAM resource types.
   * 				You also must set the <code>allSupported</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html">RecordingGroup</a> to <code>true</code>.
   * 				When Config adds support for a new resource type, Config automatically starts recording resources of that type. For a list of supported resource types,
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
   * 					types that you specify to exclude from being recorded in the
   * 						<code>resourceTypes</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_ExclusionByResourceTypes.html">ExclusionByResourceTypes</a>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>
   *                <b>Required and optional fields</b>
   *             </p>
   *             <p>The <code>recordingStrategy</code> field is optional when you set the
   * 			<code>allSupported</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html">RecordingGroup</a> to <code>true</code>.</p>
   *             <p>The <code>recordingStrategy</code> field is optional when you list resource types in the
   * 				<code>resourceTypes</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html">RecordingGroup</a>.</p>
   *             <p>The <code>recordingStrategy</code> field is required if you list resource types to exclude from recording in the <code>resourceTypes</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_ExclusionByResourceTypes.html">ExclusionByResourceTypes</a>.</p>
   *          </note>
   *          <note>
   *             <p>
   *                <b>Overriding fields</b>
   *             </p>
   *             <p>If you choose <code>EXCLUSION_BY_RESOURCE_TYPES</code> for the recording strategy, the <code>exclusionByResourceTypes</code> field will override other properties in the request.</p>
   *             <p>For example, even if you set <code>includeGlobalResourceTypes</code> to false, global IAM resource types will still be automatically
   * 			recorded in this option unless those resource types are specifically listed as exclusions in the <code>resourceTypes</code> field of <code>exclusionByResourceTypes</code>.</p>
   *          </note>
   *          <note>
   *             <p>
   *                <b>Global resource types and the exclusion recording strategy</b>
   *             </p>
   *             <p>By default, if you choose the <code>EXCLUSION_BY_RESOURCE_TYPES</code> recording strategy,
   * 				when Config adds support for a new resource type in the Region where you set up the configuration recorder, including global resource types,
   * 				Config starts recording resources of that type automatically.</p>
   *             <p>Unless specifically listed as exclusions,
   * 				<code>AWS::RDS::GlobalCluster</code> will be recorded automatically in all supported Config Regions were the configuration recorder is enabled.</p>
   *             <p>IAM users, groups, roles, and customer managed policies will be recorded in the Region where you set up the configuration recorder if that is a Region where Config was available before February 2022.
   * 				You cannot be record the global IAM resouce types in Regions supported by Config after February 2022. This list where you cannot record the global IAM resource types includes the following Regions:</p>
   *             <ul>
   *                <li>
   *                   <p>Asia Pacific (Hyderabad)</p>
   *                </li>
   *                <li>
   *                   <p>Asia Pacific (Melbourne)</p>
   *                </li>
   *                <li>
   *                   <p>Canada West (Calgary)</p>
   *                </li>
   *                <li>
   *                   <p>Europe (Spain)</p>
   *                </li>
   *                <li>
   *                   <p>Europe (Zurich)</p>
   *                </li>
   *                <li>
   *                   <p>Israel (Tel Aviv)</p>
   *                </li>
   *                <li>
   *                   <p>Middle East (UAE)</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  useOnly?: RecordingStrategyType | undefined;
}

/**
 * <p>Specifies which resource types Config
 * 			records for configuration changes. By default, Config records configuration changes for all current and future supported resource types in the Amazon Web Services Region where you have enabled Config,
 * 			excluding the global IAM resource types: IAM users, groups, roles, and customer managed policies.</p>
 *          <p>In the recording group, you specify whether you want to record all supported current and future supported resource types or to include or exclude specific resources types.
 * 			For a list of supported resource types, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported Resource Types</a> in the <i>Config developer guide</i>.</p>
 *          <p>If you don't want Config to record all current and future supported resource types (excluding the global IAM resource types), use one of the following recording strategies:</p>
 *          <ol>
 *             <li>
 *                <p>
 *                   <b>Record all current and future resource types with exclusions</b> (<code>EXCLUSION_BY_RESOURCE_TYPES</code>), or</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Record specific resource types</b> (<code>INCLUSION_BY_RESOURCE_TYPES</code>).</p>
 *             </li>
 *          </ol>
 *          <p>If you use the recording strategy to <b>Record all current and future resource types</b> (<code>ALL_SUPPORTED_RESOURCE_TYPES</code>),
 * 			you can use the flag <code>includeGlobalResourceTypes</code> to include the global IAM resource types in your recording.</p>
 *          <important>
 *             <p>
 *                <b>Aurora global clusters are recorded in all enabled Regions</b>
 *             </p>
 *             <p>The <code>AWS::RDS::GlobalCluster</code> resource type
 * 				will be recorded in all supported Config Regions where the configuration recorder is enabled.</p>
 *             <p>If you do not want to record <code>AWS::RDS::GlobalCluster</code> in all enabled Regions, use the <code>EXCLUSION_BY_RESOURCE_TYPES</code> or <code>INCLUSION_BY_RESOURCE_TYPES</code> recording strategy.</p>
 *          </important>
 * @public
 */
export interface RecordingGroup {
  /**
   * <p>Specifies whether Config records configuration changes for all supported resource types, excluding the global IAM resource types.</p>
   *          <p>If you set this field to <code>true</code>, when Config
   * 			adds support for a new resource type, Config starts recording resources of that type automatically.</p>
   *          <p>If you set this field to <code>true</code>,
   * 			you cannot enumerate specific resource types to record in the <code>resourceTypes</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html">RecordingGroup</a>, or to exclude in the <code>resourceTypes</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_ExclusionByResourceTypes.html">ExclusionByResourceTypes</a>.</p>
   *          <note>
   *             <p>
   *                <b>Region availability</b>
   *             </p>
   *             <p>Check <a href="https://docs.aws.amazon.com/config/latest/developerguide/what-is-resource-config-coverage.html">Resource Coverage by Region Availability</a>
   * 				to see if a resource type is supported in the Amazon Web Services Region where you set up Config.</p>
   *          </note>
   * @public
   */
  allSupported?: boolean | undefined;

  /**
   * <p>This option is a bundle which only applies to the global IAM resource types:
   * 			IAM users, groups, roles, and customer managed policies. These global IAM resource types can only be recorded
   * 			by Config in Regions where Config was available before February 2022.
   * 			You cannot be record the global IAM resouce types in Regions supported by Config after February 2022. For a list of those Regions,
   * 			see <a href="https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html#select-resources-all">Recording Amazon Web Services Resources | Global Resources</a>.</p>
   *          <important>
   *             <p>
   *                <b>Aurora global clusters are recorded in all enabled Regions</b>
   *             </p>
   *             <p>The <code>AWS::RDS::GlobalCluster</code> resource type will be recorded in all supported Config Regions where the configuration recorder is enabled, even if <code>includeGlobalResourceTypes</code> is set<code>false</code>.
   * 				The <code>includeGlobalResourceTypes</code> option is a bundle which only applies to IAM users, groups, roles, and customer managed policies.
   * 			</p>
   *             <p>If you do not want to record <code>AWS::RDS::GlobalCluster</code> in all enabled Regions, use one of the following recording strategies:</p>
   *             <ol>
   *                <li>
   *                   <p>
   *                      <b>Record all current and future resource types with exclusions</b> (<code>EXCLUSION_BY_RESOURCE_TYPES</code>), or</p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <b>Record specific resource types</b> (<code>INCLUSION_BY_RESOURCE_TYPES</code>).</p>
   *                </li>
   *             </ol>
   *             <p>For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html#select-resources-all">Selecting Which Resources are Recorded</a> in the <i>Config developer guide</i>.</p>
   *          </important>
   *          <important>
   *             <p>
   *                <b>includeGlobalResourceTypes and the exclusion recording strategy</b>
   *             </p>
   *             <p>The <code>includeGlobalResourceTypes</code> field has no impact on the <code>EXCLUSION_BY_RESOURCE_TYPES</code> recording strategy.
   * 				This means that the global IAM resource types (IAM users, groups, roles, and customer managed policies) will
   * 				not be automatically added as exclusions for <code>exclusionByResourceTypes</code> when <code>includeGlobalResourceTypes</code> is set to <code>false</code>.</p>
   *             <p>The <code>includeGlobalResourceTypes</code> field should only be used to modify the <code>AllSupported</code> field, as the default for
   * 				the <code>AllSupported</code> field is to record configuration changes for all supported resource types excluding the global
   * 				IAM resource types. To include the global IAM resource types when <code>AllSupported</code> is set to <code>true</code>, make sure to set <code>includeGlobalResourceTypes</code> to <code>true</code>.</p>
   *             <p>To exclude the global IAM resource types for the <code>EXCLUSION_BY_RESOURCE_TYPES</code> recording strategy, you need to manually add them to the <code>resourceTypes</code> field of <code>exclusionByResourceTypes</code>.</p>
   *          </important>
   *          <note>
   *             <p>
   *                <b>Required and optional fields</b>
   *             </p>
   *             <p>Before you set this field to <code>true</code>,
   * 			set the <code>allSupported</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html">RecordingGroup</a> to
   * 			<code>true</code>. Optionally, you can set the <code>useOnly</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingStrategy.html">RecordingStrategy</a> to <code>ALL_SUPPORTED_RESOURCE_TYPES</code>.</p>
   *          </note>
   *          <note>
   *             <p>
   *                <b>Overriding fields</b>
   *             </p>
   *             <p>If you set this field to <code>false</code> but list global IAM resource types in the <code>resourceTypes</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html">RecordingGroup</a>,
   * 			Config will still record configuration changes for those specified resource types <i>regardless</i> of if you set the <code>includeGlobalResourceTypes</code> field to false.</p>
   *             <p>If you do not want to record configuration changes to the global IAM resource types (IAM users, groups, roles, and customer managed policies), make sure to not list them in the <code>resourceTypes</code> field
   * 			in addition to setting the <code>includeGlobalResourceTypes</code> field to false.</p>
   *          </note>
   * @public
   */
  includeGlobalResourceTypes?: boolean | undefined;

  /**
   * <p>A comma-separated list that specifies which resource types Config
   * 			records.</p>
   *          <p>For a list of valid <code>resourceTypes</code> values, see the
   * 				<b>Resource Type Value</b> column in
   * 				<a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported Amazon Web Services resource Types</a> in the <i>Config developer guide</i>.</p>
   *          <note>
   *             <p>
   *                <b>Required and optional fields</b>
   *             </p>
   *             <p>Optionally, you can set the <code>useOnly</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingStrategy.html">RecordingStrategy</a> to <code>INCLUSION_BY_RESOURCE_TYPES</code>.</p>
   *             <p>To record all configuration changes,
   * 				set the <code>allSupported</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html">RecordingGroup</a> to
   * 				<code>true</code>, and either omit this field or don't specify any resource types in this field. If you set the <code>allSupported</code> field to <code>false</code> and specify values for <code>resourceTypes</code>,
   * 				when Config adds support for a new type of resource,
   * 				it will not record resources of that type unless you manually add that type to your recording group.</p>
   *          </note>
   *          <note>
   *             <p>
   *                <b>Region availability</b>
   *             </p>
   *             <p>Before specifying a resource type for Config to track,
   * 				check <a href="https://docs.aws.amazon.com/config/latest/developerguide/what-is-resource-config-coverage.html">Resource Coverage by Region Availability</a>
   * 				to see if the resource type is supported in the Amazon Web Services Region where you set up Config.
   * 				If a resource type is supported by Config in at least one Region,
   * 				you can enable the recording of that resource type in all Regions supported by Config,
   * 				even if the specified resource type is not supported in the Amazon Web Services Region where you set up Config.</p>
   *          </note>
   * @public
   */
  resourceTypes?: ResourceType[] | undefined;

  /**
   * <p>An object that specifies how Config excludes resource types from being recorded by the configuration recorder.</p>
   *          <note>
   *             <p>
   *                <b>Required fields</b>
   *             </p>
   *             <p>To use this option, you must set the <code>useOnly</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingStrategy.html">RecordingStrategy</a> to <code>EXCLUSION_BY_RESOURCE_TYPES</code>.</p>
   *          </note>
   * @public
   */
  exclusionByResourceTypes?: ExclusionByResourceTypes | undefined;

  /**
   * <p>An object that specifies the recording strategy for the configuration recorder.</p>
   *          <ul>
   *             <li>
   *                <p>If you set the <code>useOnly</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingStrategy.html">RecordingStrategy</a> to <code>ALL_SUPPORTED_RESOURCE_TYPES</code>, Config records configuration changes for all supported resource types, excluding the global IAM resource types. You also must set the <code>allSupported</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html">RecordingGroup</a> to <code>true</code>. When Config adds support for a new resource type, Config automatically starts recording resources of that type.</p>
   *             </li>
   *             <li>
   *                <p>If you set the <code>useOnly</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingStrategy.html">RecordingStrategy</a> to <code>INCLUSION_BY_RESOURCE_TYPES</code>, Config records configuration changes for only the resource types you specify in the <code>resourceTypes</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html">RecordingGroup</a>.</p>
   *             </li>
   *             <li>
   *                <p>If you set the <code>useOnly</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingStrategy.html">RecordingStrategy</a> to <code>EXCLUSION_BY_RESOURCE_TYPES</code>, Config records configuration changes for all supported resource types
   * 				except the resource types that you specify to exclude from being recorded in the <code>resourceTypes</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_ExclusionByResourceTypes.html">ExclusionByResourceTypes</a>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>
   *                <b>Required and optional fields</b>
   *             </p>
   *             <p>The <code>recordingStrategy</code> field is optional when you set the
   * 			<code>allSupported</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html">RecordingGroup</a> to <code>true</code>.</p>
   *             <p>The <code>recordingStrategy</code> field is optional when you list resource types in the
   * 				<code>resourceTypes</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html">RecordingGroup</a>.</p>
   *             <p>The <code>recordingStrategy</code> field is required if you list resource types to exclude from recording in the <code>resourceTypes</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_ExclusionByResourceTypes.html">ExclusionByResourceTypes</a>.</p>
   *          </note>
   *          <note>
   *             <p>
   *                <b>Overriding fields</b>
   *             </p>
   *             <p>If you choose <code>EXCLUSION_BY_RESOURCE_TYPES</code> for the recording strategy, the <code>exclusionByResourceTypes</code> field will override other properties in the request.</p>
   *             <p>For example, even if you set <code>includeGlobalResourceTypes</code> to false, global IAM resource types will still be automatically
   * 			recorded in this option unless those resource types are specifically listed as exclusions in the <code>resourceTypes</code> field of <code>exclusionByResourceTypes</code>.</p>
   *          </note>
   *          <note>
   *             <p>
   *                <b>Global resources types and the resource exclusion recording strategy</b>
   *             </p>
   *             <p>By default, if you choose the <code>EXCLUSION_BY_RESOURCE_TYPES</code> recording strategy,
   * 			when Config adds support for a new resource type in the Region where you set up the configuration recorder, including global resource types,
   * 			Config starts recording resources of that type automatically.</p>
   *             <p>Unless specifically listed as exclusions,
   * 				<code>AWS::RDS::GlobalCluster</code> will be recorded automatically in all supported Config Regions were the configuration recorder is enabled.</p>
   *             <p>IAM users, groups, roles, and customer managed policies will be recorded in the Region where you set up the configuration recorder if that is a Region where Config  was available before February 2022.
   * 				You cannot be record the global IAM resouce types in Regions supported by Config after February 2022. For a list of those Regions,
   * 				see <a href="https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html#select-resources-all">Recording Amazon Web Services Resources | Global Resources</a>.</p>
   *          </note>
   * @public
   */
  recordingStrategy?: RecordingStrategy | undefined;
}

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
 * <p>An object for you to specify your overrides for the recording mode.</p>
 * @public
 */
export interface RecordingModeOverride {
  /**
   * <p>A description that you provide for the override.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A comma-separated list that specifies which resource types Config
   * 			includes in the override.</p>
   *          <important>
   *             <p>Daily recording cannot be specified for the following resource types:</p>
   *             <ul>
   *                <li>
   *                   <p>
   *                      <code>AWS::Config::ResourceCompliance</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>AWS::Config::ConformancePackCompliance</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>AWS::Config::ConfigurationRecorder</code>
   *                   </p>
   *                </li>
   *             </ul>
   *          </important>
   * @public
   */
  resourceTypes: ResourceType[] | undefined;

  /**
   * <p>The recording frequency that will be applied to all the resource types specified in the override.</p>
   *          <ul>
   *             <li>
   *                <p>Continuous recording allows you to record configuration changes continuously whenever a change occurs.</p>
   *             </li>
   *             <li>
   *                <p>Daily recording allows you to receive a configuration item (CI) representing the most recent state of your resources over the last 24-hour period, only if it’s different from the previous CI recorded.
   * 			</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Firewall Manager depends on continuous recording to monitor your resources. If you are using Firewall Manager,
   * 			it is recommended that you set the recording frequency to Continuous.</p>
   *          </note>
   * @public
   */
  recordingFrequency: RecordingFrequency | undefined;
}

/**
 * <p>Specifies the default recording frequency that Config uses to record configuration changes.
 *
 * 			Config supports <i>Continuous recording</i> and <i>Daily recording</i>.</p>
 *          <ul>
 *             <li>
 *                <p>Continuous recording allows you to record configuration changes continuously whenever a change occurs.</p>
 *             </li>
 *             <li>
 *                <p>Daily recording allows you to receive a configuration item (CI) representing the most recent state of your resources over the last 24-hour period, only if it’s different from the previous CI recorded.
 * 			</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>Firewall Manager depends on continuous recording to monitor your resources. If you are using Firewall Manager,
 * 			it is recommended that you set the recording frequency to Continuous.</p>
 *          </note>
 *          <p>You can also override the recording frequency for specific resource types.</p>
 * @public
 */
export interface RecordingMode {
  /**
   * <p>The default recording frequency that Config uses to record configuration changes.</p>
   *          <important>
   *             <p>Daily recording cannot be specified for the following resource types:</p>
   *             <ul>
   *                <li>
   *                   <p>
   *                      <code>AWS::Config::ResourceCompliance</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>AWS::Config::ConformancePackCompliance</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>AWS::Config::ConfigurationRecorder</code>
   *                   </p>
   *                </li>
   *             </ul>
   *             <p>For the <b>allSupported</b> (<code>ALL_SUPPORTED_RESOURCE_TYPES</code>) recording strategy, these resource types will be set to Continuous recording.</p>
   *          </important>
   * @public
   */
  recordingFrequency: RecordingFrequency | undefined;

  /**
   * <p>An array of <code>recordingModeOverride</code> objects for you to specify your overrides for the recording mode.
   * 			The <code>recordingModeOverride</code> object in the <code>recordingModeOverrides</code> array consists of three fields: a <code>description</code>, the new <code>recordingFrequency</code>, and an array of <code>resourceTypes</code> to override.</p>
   * @public
   */
  recordingModeOverrides?: RecordingModeOverride[] | undefined;
}

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
 * <p>Records configuration changes to the resource types in scope.</p>
 *          <p>For more information about the configuration recorder,
 * 			see <a href="https://docs.aws.amazon.com/config/latest/developerguide/stop-start-recorder.html">
 *                <b>Working with the Configuration Recorder</b>
 *             </a> in the <i>Config Developer Guide</i>.</p>
 * @public
 */
export interface ConfigurationRecorder {
  /**
   * <p>The Amazon Resource Name (ARN) of the specified configuration recorder.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the configuration recorder.</p>
   *          <p>For customer managed configuration recorders, Config automatically assigns the name of "default" when creating a configuration recorder if you do not specify a name at creation time.</p>
   *          <p>For service-linked configuration recorders, Config automatically assigns a name that has the prefix "<code>AWSConfigurationRecorderFor</code>" to a new service-linked configuration recorder.</p>
   *          <note>
   *             <p>
   *                <b>Changing the name of a configuration recorder</b>
   *             </p>
   *             <p>To change the name of the customer managed configuration recorder, you must delete it and create a new customer managed configuration recorder with a new name.</p>
   *             <p>You cannot change the name of a service-linked configuration recorder.</p>
   *          </note>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role assumed by Config and used by the specified configuration recorder.</p>
   *          <note>
   *             <p>
   *                <b>The server will reject a request without a defined <code>roleARN</code> for the configuration recorder</b>
   *             </p>
   *             <p>While the API model does not require this field, the server will reject a request without a defined <code>roleARN</code> for the configuration recorder.</p>
   *             <p>
   *                <b>Policies and compliance results</b>
   *             </p>
   *             <p>
   *                <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">IAM policies</a>
   * 				and <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies.html">other policies managed in Organizations</a>
   * 				can impact whether Config
   * 				has permissions to record configuration changes for your resources. Additionally, rules directly evaluate the configuration of a resource and rules don't take into account these policies when running evaluations.
   * 				Make sure that the policies in effect align with how you intend to use Config.</p>
   *             <p>
   *                <b>Keep Minimum Permisions When Reusing an IAM role</b>
   *             </p>
   *             <p>If you use an Amazon Web Services service that uses Config, such as Security Hub or
   * 				Control Tower, and an IAM role has already been created, make sure that the
   * 				IAM role that you use when setting up Config keeps the same minimum
   * 				permissions as the pre-existing IAM role. You must do this to ensure that the
   * 				other Amazon Web Services service continues to run as expected. </p>
   *             <p>For example, if Control Tower has an IAM role that allows Config to read
   * 				S3 objects, make sure that the same permissions are granted
   * 				to the IAM role you use when setting up Config. Otherwise, it may
   * 				interfere with how Control Tower operates.</p>
   *             <p>
   *                <b>The service-linked IAM role for Config must be used for service-linked configuration recorders</b>
   *             </p>
   *             <p>For service-linked configuration recorders, you must use the service-linked IAM role for Config: <a href="https://docs.aws.amazon.com/config/latest/developerguide/using-service-linked-roles.html">AWSServiceRoleForConfig</a>.</p>
   *          </note>
   * @public
   */
  roleARN?: string | undefined;

  /**
   * <p>Specifies which resource types are in scope for the configuration recorder to record.</p>
   *          <note>
   *             <p>
   *                <b> High Number of Config Evaluations</b>
   *             </p>
   *             <p>You might notice increased activity in your account during your initial month recording with Config when compared to subsequent months. During the
   * 				initial bootstrapping process, Config runs evaluations on all the resources in your account that you have selected
   * 				for Config to record.</p>
   *             <p>If you are running ephemeral workloads, you may see increased activity from Config as it records configuration changes associated with creating and deleting these
   * 				temporary resources. An <i>ephemeral workload</i> is a temporary use of computing resources that are loaded
   * 				and run when needed. Examples include Amazon Elastic Compute Cloud (Amazon EC2)
   * 				Spot Instances, Amazon EMR jobs, and Auto Scaling.</p>
   *             <p>If you want to avoid the increased activity from running ephemeral workloads, you can set up the configuration recorder to exclude these resource types from being recorded, or run these types of workloads in a separate account with Config turned off to avoid
   * 				increased configuration recording and rule evaluations.</p>
   *          </note>
   * @public
   */
  recordingGroup?: RecordingGroup | undefined;

  /**
   * <p>Specifies the default recording frequency for the configuration recorder.
   *
   * 			Config supports <i>Continuous recording</i> and <i>Daily recording</i>.</p>
   *          <ul>
   *             <li>
   *                <p>Continuous recording allows you to record configuration changes continuously whenever a change occurs.</p>
   *             </li>
   *             <li>
   *                <p>Daily recording allows you to receive a configuration item (CI) representing the most recent state of your resources over the last 24-hour period, only if it’s different from the previous CI recorded.
   * 			</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>
   *                <b>Some resource types require continuous recording</b>
   *             </p>
   *             <p>Firewall Manager depends on continuous recording to monitor your resources. If you are using Firewall Manager,
   * 			it is recommended that you set the recording frequency to Continuous.</p>
   *          </note>
   *          <p>You can also override the recording frequency for specific resource types.</p>
   * @public
   */
  recordingMode?: RecordingMode | undefined;

  /**
   * <p>Specifies whether the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_ConfigurationItem.html">ConfigurationItems</a> in scope for the specified configuration recorder are recorded for free (<code>INTERNAL</code>) or if it impacts the costs to your bill (<code>PAID</code>).</p>
   * @public
   */
  recordingScope?: RecordingScope | undefined;

  /**
   * <p>For service-linked configuration recorders, specifies the linked Amazon Web Services service for the configuration recorder.</p>
   * @public
   */
  servicePrincipal?: string | undefined;
}

/**
 * @public
 */
export interface AssociateResourceTypesResponse {
  /**
   * <p>Records configuration changes to the resource types in scope.</p>
   *          <p>For more information about the configuration recorder,
   * 			see <a href="https://docs.aws.amazon.com/config/latest/developerguide/stop-start-recorder.html">
   *                <b>Working with the Configuration Recorder</b>
   *             </a> in the <i>Config Developer Guide</i>.</p>
   * @public
   */
  ConfigurationRecorder: ConfigurationRecorder | undefined;
}

/**
 * <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutServiceLinkedConfigurationRecorder.html">PutServiceLinkedConfigurationRecorder</a>, you cannot create a service-linked recorder because a service-linked recorder already exists for the specified service.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteServiceLinkedConfigurationRecorder.html">DeleteServiceLinkedConfigurationRecorder</a>, you cannot delete the service-linked recorder because it is currently in use by the linked Amazon Web Services service.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteDeliveryChannel.html">DeleteDeliveryChannel</a>, you cannot delete the specified delivery channel because the customer managed configuration recorder is running. Use the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_StopConfigurationRecorder.html">StopConfigurationRecorder</a> operation to stop the customer managed configuration
 * 			recorder.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_AssociateResourceTypes.html">AssociateResourceTypes</a> and <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DisassociateResourceTypes.html">DisassociateResourceTypes</a>, one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>For service-linked configuration recorders, the configuration recorder is not in use by the service. No association or dissociation of resource types is permitted.</p>
 *             </li>
 *             <li>
 *                <p>For service-linked configuration recorders, your requested change to the configuration recorder has been denied by its linked Amazon Web Services service.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * <p>You have specified a configuration recorder that does not
 * 			exist.</p>
 * @public
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
 * <p>The requested operation is not valid. You will see this exception if there are missing required fields or if the input value fails the validation.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutStoredQuery.html">PutStoredQuery</a>, one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>There are missing required fields.</p>
 *             </li>
 *             <li>
 *                <p>The input value fails the validation.</p>
 *             </li>
 *             <li>
 *                <p>You are trying to create more than 300 queries.</p>
 *             </li>
 *          </ul>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorders.html">DescribeConfigurationRecorders</a> and <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorderStatus.html">DescribeConfigurationRecorderStatus</a>, one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>You have specified more than one configuration recorder.</p>
 *             </li>
 *             <li>
 *                <p>You have provided a service principal for service-linked configuration recorder that is not valid.</p>
 *             </li>
 *          </ul>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_AssociateResourceTypes.html">AssociateResourceTypes</a> and <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DisassociateResourceTypes.html">DisassociateResourceTypes</a>, one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>Your configuraiton recorder has a recording strategy that does not allow the association or disassociation of resource types.</p>
 *             </li>
 *             <li>
 *                <p>One or more of the specified resource types are already associated or disassociated with the configuration recorder.</p>
 *             </li>
 *             <li>
 *                <p>For service-linked configuration recorders, the configuration recorder does not record one or more of the specified resource types.</p>
 *             </li>
 *          </ul>
 * @public
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
 * <p>The detailed configurations of a specified resource.</p>
 * @public
 */
export interface BaseConfigurationItem {
  /**
   * <p>The version number of the resource configuration.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The 12-digit Amazon Web Services account ID associated with the resource.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The time when the recording of configuration changes was initiated for the resource.</p>
   * @public
   */
  configurationItemCaptureTime?: Date | undefined;

  /**
   * <p>The configuration item status. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>OK – The resource configuration has been updated.</p>
   *             </li>
   *             <li>
   *                <p>ResourceDiscovered – The resource was newly discovered.</p>
   *             </li>
   *             <li>
   *                <p>ResourceNotRecorded – The resource was discovered, but its configuration was not recorded since the recorder doesn't record resources of this type.</p>
   *             </li>
   *             <li>
   *                <p>ResourceDeleted – The resource was deleted</p>
   *             </li>
   *             <li>
   *                <p>ResourceDeletedNotRecorded – The resource was deleted, but its configuration was not recorded since the recorder doesn't record resources of this type.</p>
   *             </li>
   *          </ul>
   * @public
   */
  configurationItemStatus?: ConfigurationItemStatus | undefined;

  /**
   * <p>An identifier that indicates the ordering of the configuration
   * 			items of a resource.</p>
   * @public
   */
  configurationStateId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The type of Amazon Web Services resource.</p>
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * <p>The ID of the resource (for example., sg-xxxxxx).</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The custom name of the resource, if available.</p>
   * @public
   */
  resourceName?: string | undefined;

  /**
   * <p>The region where the resource resides.</p>
   * @public
   */
  awsRegion?: string | undefined;

  /**
   * <p>The Availability Zone associated with the resource.</p>
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * <p>The time stamp when the resource was created.</p>
   * @public
   */
  resourceCreationTime?: Date | undefined;

  /**
   * <p>A JSON-encoded string that contains the contents for the resource configuration. This string needs to be deserialized using <code>json.loads()</code> before you can access the contents.
   * </p>
   * @public
   */
  configuration?: string | undefined;

  /**
   * <p>A string to string map that contains additional contents for the resource configuration.Config returns this field for certain
   * 			resource types to supplement the information returned for the
   * 			<code>configuration</code> field.</p>
   *          <p>This string needs to be deserialized using <code>json.loads()</code> before you can access the contents.</p>
   * @public
   */
  supplementaryConfiguration?: Record<string, string> | undefined;

  /**
   * <p>The recording frequency that Config uses to record configuration changes for the resource.</p>
   *          <note>
   *             <p>This field only appears in the API response when <code>DAILY</code> recording is enabled for a resource type.
   * 				If this field is not present, <code>CONTINUOUS</code> recording is enabled for that resource type. For more information on daily recording and continuous recording, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html#select-resources-recording-frequency">Recording Frequency</a> in the <i>Config
   * 						Developer Guide</i>.</p>
   *          </note>
   * @public
   */
  recordingFrequency?: RecordingFrequency | undefined;

  /**
   * <p>The time when configuration changes for the resource were delivered.</p>
   *          <note>
   *             <p>This field is optional and is not guaranteed to be present in a configuration item  (CI). If you are using daily recording,
   * 			this field will be populated. However, if you are using continuous recording,
   * 			this field will be omitted since the delivery time is instantaneous as the CI is available right away. For more information on daily recording and continuous recording, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html#select-resources-recording-frequency">Recording Frequency</a> in the <i>Config
   * 					Developer Guide</i>.</p>
   *          </note>
   * @public
   */
  configurationItemDeliveryTime?: Date | undefined;
}

/**
 * @public
 */
export interface BatchGetAggregateResourceConfigRequest {
  /**
   * <p>The name of the configuration aggregator.</p>
   * @public
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>A list of aggregate ResourceIdentifiers objects. </p>
   * @public
   */
  ResourceIdentifiers: AggregateResourceIdentifier[] | undefined;
}

/**
 * @public
 */
export interface BatchGetAggregateResourceConfigResponse {
  /**
   * <p>A list that contains the current configuration of one or more resources.</p>
   * @public
   */
  BaseConfigurationItems?: BaseConfigurationItem[] | undefined;

  /**
   * <p>A list of resource identifiers that were not processed with current scope. The list is empty if all the resources are processed.</p>
   * @public
   */
  UnprocessedResourceIdentifiers?: AggregateResourceIdentifier[] | undefined;
}

/**
 * <p>You have specified a configuration aggregator that does not exist.</p>
 * @public
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
 * <p>The details that identify a resource within Config, including
 * 			the resource type and resource ID.</p>
 * @public
 */
export interface ResourceKey {
  /**
   * <p>The resource type.</p>
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * <p>The ID of the resource (for example., sg-xxxxxx). </p>
   * @public
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
   * @public
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
   * @public
   */
  baseConfigurationItems?: BaseConfigurationItem[] | undefined;

  /**
   * <p>A list of resource keys that were not processed with the
   * 			current response. The unprocessesResourceKeys value is in the same
   * 			form as ResourceKeys, so the value can be directly provided to a
   * 			subsequent BatchGetResourceConfig operation.
   *
   * 			If there are no unprocessed resource keys, the response contains an
   * 			empty unprocessedResourceKeys list. </p>
   * @public
   */
  unprocessedResourceKeys?: ResourceKey[] | undefined;
}

/**
 * <p>There are no customer managed configuration recorders available to record your resources. Use the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigurationRecorder.html">PutConfigurationRecorder</a> operation to create the customer managed configuration
 * 			recorder.</p>
 * @public
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
 * <p>Indicates whether an Config rule is compliant. A rule is
 * 			compliant if all of the resources that the rule evaluated comply
 * 			with it. A rule is noncompliant if any of these resources do not
 * 			comply.</p>
 * @public
 */
export interface ComplianceByConfigRule {
  /**
   * <p>The name of the Config rule.</p>
   * @public
   */
  ConfigRuleName?: string | undefined;

  /**
   * <p>Indicates whether the Config rule is compliant.</p>
   * @public
   */
  Compliance?: Compliance | undefined;
}

/**
 * <p>Indicates whether an Amazon Web Services resource that is evaluated according
 * 			to one or more Config rules is compliant. A resource is
 * 			compliant if it complies with all of the rules that evaluate it. A
 * 			resource is noncompliant if it does not comply with one or more of
 * 			these rules.</p>
 * @public
 */
export interface ComplianceByResource {
  /**
   * <p>The type of the Amazon Web Services resource that was evaluated.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services resource that was evaluated.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>Indicates whether the Amazon Web Services resource complies with all of the Config rules that evaluated it.</p>
   * @public
   */
  Compliance?: Compliance | undefined;
}

/**
 * <p>The number of Amazon Web Services resources of a specific type that are
 * 			compliant or noncompliant, up to a maximum of 100 for
 * 			each.</p>
 * @public
 */
export interface ComplianceSummaryByResourceType {
  /**
   * <p>The type of Amazon Web Services resource.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The number of Amazon Web Services resources that are compliant or noncompliant,
   * 			up to a maximum of 100 for each.</p>
   * @public
   */
  ComplianceSummary?: ComplianceSummary | undefined;
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
 * <p>Provides status of the delivery of the snapshot or the
 * 			configuration history to the specified Amazon S3 bucket. Also
 * 			provides the status of notifications about the Amazon S3 delivery to
 * 			the specified Amazon SNS topic.</p>
 * @public
 */
export interface ConfigExportDeliveryInfo {
  /**
   * <p>Status of the last attempted delivery.</p>
   * @public
   */
  lastStatus?: DeliveryStatus | undefined;

  /**
   * <p>The error code from the last attempted delivery.</p>
   * @public
   */
  lastErrorCode?: string | undefined;

  /**
   * <p>The error message from the last attempted delivery.</p>
   * @public
   */
  lastErrorMessage?: string | undefined;

  /**
   * <p>The time of the last attempted delivery.</p>
   * @public
   */
  lastAttemptTime?: Date | undefined;

  /**
   * <p>The time of the last successful delivery.</p>
   * @public
   */
  lastSuccessfulTime?: Date | undefined;

  /**
   * <p>The time that the next delivery occurs.</p>
   * @public
   */
  nextDeliveryTime?: Date | undefined;
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
 * <p>The configuration object for Config rule evaluation mode. The supported valid values are Detective or Proactive.</p>
 * @public
 */
export interface EvaluationModeConfiguration {
  /**
   * <p>The mode of an evaluation. The valid values are Detective or Proactive.</p>
   * @public
   */
  Mode?: EvaluationMode | undefined;
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
 * <p>Defines which resources trigger an evaluation for an Config
 * 			rule. The scope can include one or more resource types, a
 * 			combination of a tag key and value, or a combination of one resource
 * 			type and one resource ID. Specify a scope to constrain which
 * 			resources trigger an evaluation for a rule. Otherwise, evaluations
 * 			for the rule are triggered when any resource in your recording group
 * 			changes in configuration.</p>
 * @public
 */
export interface Scope {
  /**
   * <p>The resource types of only those Amazon Web Services resources that you want to
   * 			trigger an evaluation for the rule. You can only specify one type if
   * 			you also specify a resource ID for
   * 			<code>ComplianceResourceId</code>.</p>
   * @public
   */
  ComplianceResourceTypes?: string[] | undefined;

  /**
   * <p>The tag key that is applied to only those Amazon Web Services resources that
   * 			you want to trigger an evaluation for the rule.</p>
   * @public
   */
  TagKey?: string | undefined;

  /**
   * <p>The tag value applied to only those Amazon Web Services resources that you want
   * 			to trigger an evaluation for the rule. If you specify a value for
   * 				<code>TagValue</code>, you must also specify a value for
   * 				<code>TagKey</code>.</p>
   * @public
   */
  TagValue?: string | undefined;

  /**
   * <p>The ID of the only Amazon Web Services resource that you want to trigger an
   * 			evaluation for the rule. If you specify a resource ID, you must
   * 			specify one resource type for
   * 			<code>ComplianceResourceTypes</code>.</p>
   * @public
   */
  ComplianceResourceId?: string | undefined;
}

/**
 * <p>Provides the runtime system, policy definition, and whether debug logging enabled. You can
 * 			specify the following CustomPolicyDetails parameter values
 * 			only
 * 			for Config Custom Policy rules.</p>
 * @public
 */
export interface CustomPolicyDetails {
  /**
   * <p>The runtime system for your Config Custom Policy rule. Guard is a policy-as-code language that allows you to write policies that are enforced by Config Custom Policy rules. For more information about Guard, see the <a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub
   * 					Repository</a>.</p>
   * @public
   */
  PolicyRuntime: string | undefined;

  /**
   * <p>The policy definition containing the logic for your Config Custom Policy rule.</p>
   * @public
   */
  PolicyText: string | undefined;

  /**
   * <p>The boolean expression for enabling debug logging for your Config Custom Policy rule. The default value is <code>false</code>.</p>
   * @public
   */
  EnableDebugLogDelivery?: boolean | undefined;
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
 * <p>Provides the source and the message types that trigger Config to evaluate your Amazon Web Services resources against a rule. It also
 * 			provides the frequency with which you want Config to run
 * 			evaluations for the rule if the trigger type is periodic. You can
 * 			specify the parameter values for <code>SourceDetail</code> only for
 * 			custom rules. </p>
 * @public
 */
export interface SourceDetail {
  /**
   * <p>The source of the event, such as an Amazon Web Services service, that triggers
   * 			Config to evaluate your Amazon Web Services resources.</p>
   * @public
   */
  EventSource?: EventSource | undefined;

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
   * @public
   */
  MessageType?: MessageType | undefined;

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
   * @public
   */
  MaximumExecutionFrequency?: MaximumExecutionFrequency | undefined;
}

/**
 * <p>Provides the CustomPolicyDetails, the rule owner (<code>Amazon Web Services</code> for managed rules, <code>CUSTOM_POLICY</code> for Custom Policy rules, and <code>CUSTOM_LAMBDA</code> for Custom Lambda rules), the rule
 * 			identifier, and the events that cause the evaluation of your Amazon Web Services
 * 			resources.</p>
 * @public
 */
export interface Source {
  /**
   * <p>Indicates whether Amazon Web Services or the customer owns and manages the Config rule.</p>
   *          <p>Config Managed Rules are predefined rules owned by Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html">Config Managed Rules</a> in the <i>Config developer guide</i>.</p>
   *          <p>Config Custom Rules are rules that you can develop either with Guard (<code>CUSTOM_POLICY</code>) or Lambda (<code>CUSTOM_LAMBDA</code>). For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_develop-rules.html">Config Custom Rules </a> in the <i>Config developer guide</i>.</p>
   * @public
   */
  Owner: Owner | undefined;

  /**
   * <p>For Config Managed rules, a predefined identifier from a
   * 			list. For example, <code>IAM_PASSWORD_POLICY</code> is a managed
   * 			rule. To reference a managed rule, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">List of Config Managed Rules</a>.</p>
   *          <p>For Config Custom Lambda rules, the identifier is the Amazon Resource Name
   * 			(ARN) of the rule's Lambda function, such as
   * 			<code>arn:aws:lambda:us-east-2:123456789012:function:custom_rule_name</code>.</p>
   *          <p>For Config Custom Policy rules, this field will be ignored.</p>
   * @public
   */
  SourceIdentifier?: string | undefined;

  /**
   * <p>Provides the source and the message types that cause Config to evaluate your Amazon Web Services resources against a rule. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.</p>
   *          <p>If the owner is set to <code>CUSTOM_POLICY</code>, the only acceptable values for the Config rule trigger message type are <code>ConfigurationItemChangeNotification</code> and <code>OversizedConfigurationItemChangeNotification</code>.</p>
   * @public
   */
  SourceDetails?: SourceDetail[] | undefined;

  /**
   * <p>Provides the runtime system, policy definition, and whether debug logging is enabled. Required when owner is set to <code>CUSTOM_POLICY</code>.</p>
   * @public
   */
  CustomPolicyDetails?: CustomPolicyDetails | undefined;
}

/**
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
 * @public
 */
export interface ConfigRule {
  /**
   * <p>The name that you assign to the Config rule. The name is
   * 			required if you are adding a new rule.</p>
   * @public
   */
  ConfigRuleName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Config
   * 			rule.</p>
   * @public
   */
  ConfigRuleArn?: string | undefined;

  /**
   * <p>The ID of the Config rule.</p>
   * @public
   */
  ConfigRuleId?: string | undefined;

  /**
   * <p>The description that you provide for the Config
   * 			rule.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Defines which resources can trigger an evaluation for the rule.
   * 			The scope can include one or more resource types, a combination of
   * 			one resource type and one resource ID, or a combination of a tag key
   * 			and value. Specify a scope to constrain the resources that can
   * 			trigger an evaluation for the rule. If you do not specify a scope,
   * 			evaluations are triggered when any resource in the recording group
   * 			changes.</p>
   * @public
   */
  Scope?: Scope | undefined;

  /**
   * <p>Provides the rule owner (<code>Amazon Web Services</code> for managed rules, <code>CUSTOM_POLICY</code> for Custom Policy rules, and <code>CUSTOM_LAMBDA</code> for Custom Lambda rules), the rule identifier,
   * 			and the notifications that cause the function to evaluate your Amazon Web Services
   * 			resources.</p>
   * @public
   */
  Source: Source | undefined;

  /**
   * <p>A string, in JSON format, that is passed to the Config rule
   * 			Lambda function.</p>
   * @public
   */
  InputParameters?: string | undefined;

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
   * @public
   */
  MaximumExecutionFrequency?: MaximumExecutionFrequency | undefined;

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
   * @public
   */
  ConfigRuleState?: ConfigRuleState | undefined;

  /**
   * <p>Service principal name of the service that created the
   * 			rule.</p>
   *          <note>
   *             <p>The field is populated only if the service-linked rule is
   * 				created by a service. The field is empty if you create your own
   * 				rule.</p>
   *          </note>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The modes the Config rule can be evaluated in. The valid values are distinct objects. By default, the value is Detective evaluation mode only.</p>
   * @public
   */
  EvaluationModes?: EvaluationModeConfiguration[] | undefined;
}

/**
 * <p>Filters the compliance results based on account ID, region,
 * 			compliance type, and rule name.</p>
 * @public
 */
export interface ConfigRuleComplianceFilters {
  /**
   * <p>The name of the Config rule.</p>
   * @public
   */
  ConfigRuleName?: string | undefined;

  /**
   * <p>The rule compliance status.</p>
   *          <p>For the <code>ConfigRuleComplianceFilters</code> data type, Config supports only <code>COMPLIANT</code> and
   * 				<code>NON_COMPLIANT</code>. Config does not support the
   * 				<code>NOT_APPLICABLE</code> and the
   * 				<code>INSUFFICIENT_DATA</code> values.</p>
   * @public
   */
  ComplianceType?: ComplianceType | undefined;

  /**
   * <p>The 12-digit account ID of the source account.
   * 			</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The source region where the data is aggregated.
   * 			</p>
   * @public
   */
  AwsRegion?: string | undefined;
}

/**
 * <p>Filters the results based on the account IDs and
 * 			regions.</p>
 * @public
 */
export interface ConfigRuleComplianceSummaryFilters {
  /**
   * <p>The 12-digit account ID of the source account.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The source region where the data is aggregated.</p>
   * @public
   */
  AwsRegion?: string | undefined;
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
 * <p>Status information for your Config Managed rules and Config Custom Policy rules. The
 * 			status includes information such as the last time the rule ran, the
 * 			last time it failed, and the related error for the last
 * 			failure.</p>
 *          <p>This operation does not return status information about Config Custom Lambda rules.</p>
 * @public
 */
export interface ConfigRuleEvaluationStatus {
  /**
   * <p>The name of the Config rule.</p>
   * @public
   */
  ConfigRuleName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Config
   * 			rule.</p>
   * @public
   */
  ConfigRuleArn?: string | undefined;

  /**
   * <p>The ID of the Config rule.</p>
   * @public
   */
  ConfigRuleId?: string | undefined;

  /**
   * <p>The time that Config last successfully invoked the Config rule to evaluate your Amazon Web Services resources.</p>
   * @public
   */
  LastSuccessfulInvocationTime?: Date | undefined;

  /**
   * <p>The time that Config last failed to invoke the Config
   * 			rule to evaluate your Amazon Web Services resources.</p>
   * @public
   */
  LastFailedInvocationTime?: Date | undefined;

  /**
   * <p>The time that Config last successfully evaluated your Amazon Web Services
   * 			resources against the rule.</p>
   * @public
   */
  LastSuccessfulEvaluationTime?: Date | undefined;

  /**
   * <p>The time that Config last failed to evaluate your Amazon Web Services
   * 			resources against the rule.</p>
   * @public
   */
  LastFailedEvaluationTime?: Date | undefined;

  /**
   * <p>The time that you first activated the Config
   * 			rule.</p>
   * @public
   */
  FirstActivatedTime?: Date | undefined;

  /**
   * <p>The time that you last turned off the Config rule.</p>
   * @public
   */
  LastDeactivatedTime?: Date | undefined;

  /**
   * <p>The error code that Config returned when the rule last
   * 			failed.</p>
   * @public
   */
  LastErrorCode?: string | undefined;

  /**
   * <p>The error message that Config returned when the rule last
   * 			failed.</p>
   * @public
   */
  LastErrorMessage?: string | undefined;

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
   * @public
   */
  FirstEvaluationStarted?: boolean | undefined;

  /**
   * <p>The status of the last attempted delivery of a debug log for your Config Custom Policy rules. Either <code>Successful</code> or <code>Failed</code>.</p>
   * @public
   */
  LastDebugLogDeliveryStatus?: string | undefined;

  /**
   * <p>The reason Config was not able to deliver a debug log. This is for the last
   * 			failed attempt to retrieve a debug log for your Config Custom Policy rules.</p>
   * @public
   */
  LastDebugLogDeliveryStatusReason?: string | undefined;

  /**
   * <p>The time Config last attempted to deliver a debug log for your Config Custom Policy rules.</p>
   * @public
   */
  LastDebugLogDeliveryTime?: Date | undefined;
}

/**
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
 * @public
 */
export interface ConfigSnapshotDeliveryProperties {
  /**
   * <p>The frequency with which Config delivers configuration
   * 			snapshots.</p>
   * @public
   */
  deliveryFrequency?: MaximumExecutionFrequency | undefined;
}

/**
 * <p>A list that contains the status of the delivery of the
 * 			configuration stream notification to the Amazon SNS topic.</p>
 * @public
 */
export interface ConfigStreamDeliveryInfo {
  /**
   * <p>Status of the last attempted delivery.</p>
   *          <p>
   *             <b>Note</b> Providing an SNS topic on a
   * 				<a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DeliveryChannel.html">DeliveryChannel</a> for Config is optional. If the SNS
   * 			delivery is turned off, the last status will be <b>Not_Applicable</b>.</p>
   * @public
   */
  lastStatus?: DeliveryStatus | undefined;

  /**
   * <p>The error code from the last attempted delivery.</p>
   * @public
   */
  lastErrorCode?: string | undefined;

  /**
   * <p>The error message from the last attempted delivery.</p>
   * @public
   */
  lastErrorMessage?: string | undefined;

  /**
   * <p>The time from the last status change.</p>
   * @public
   */
  lastStatusChangeTime?: Date | undefined;
}

/**
 * <p>This object contains regions to set up the aggregator and an IAM
 * 			role to retrieve organization details.</p>
 * @public
 */
export interface OrganizationAggregationSource {
  /**
   * <p>ARN of the IAM role used to retrieve Amazon Web Services Organization details
   * 			associated with the aggregator account.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The source regions being aggregated.</p>
   * @public
   */
  AwsRegions?: string[] | undefined;

  /**
   * <p>If true, aggregate existing Config regions and future
   * 			regions.</p>
   * @public
   */
  AllAwsRegions?: boolean | undefined;
}

/**
 * <p>The details about the configuration aggregator, including
 * 			information about source accounts, regions, and metadata of the
 * 			aggregator. </p>
 * @public
 */
export interface ConfigurationAggregator {
  /**
   * <p>The name of the aggregator.</p>
   * @public
   */
  ConfigurationAggregatorName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the aggregator.</p>
   * @public
   */
  ConfigurationAggregatorArn?: string | undefined;

  /**
   * <p>Provides a list of source accounts and regions to be
   * 			aggregated.</p>
   * @public
   */
  AccountAggregationSources?: AccountAggregationSource[] | undefined;

  /**
   * <p>Provides an organization and list of regions to be
   * 			aggregated.</p>
   * @public
   */
  OrganizationAggregationSource?: OrganizationAggregationSource | undefined;

  /**
   * <p>The time stamp when the configuration aggregator was
   * 			created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time of the last update.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>Amazon Web Services service that created the configuration aggregator.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>An object to filter the data you specify for an aggregator.</p>
   * @public
   */
  AggregatorFilters?: AggregatorFilters | undefined;
}

/**
 * <p>The relationship of the related resource to the main
 * 			resource.</p>
 * @public
 */
export interface Relationship {
  /**
   * <p>The resource type of the related resource.</p>
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * <p>The ID of the related resource (for example,
   * 				<code>sg-xxxxxx</code>).</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The custom name of the related resource, if
   * 			available.</p>
   * @public
   */
  resourceName?: string | undefined;

  /**
   * <p>The type of relationship with the related resource.</p>
   * @public
   */
  relationshipName?: string | undefined;
}

/**
 * <p>A list that contains detailed configurations of a specified
 * 			resource.</p>
 * @public
 */
export interface ConfigurationItem {
  /**
   * <p>The version number of the resource configuration.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The 12-digit Amazon Web Services account ID associated with the
   * 			resource.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The time when the recording of configuration changes was
   * 			initiated for the resource.</p>
   * @public
   */
  configurationItemCaptureTime?: Date | undefined;

  /**
   * <p>The configuration item status. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>OK – The resource configuration has been updated</p>
   *             </li>
   *             <li>
   *                <p>ResourceDiscovered – The resource was newly discovered</p>
   *             </li>
   *             <li>
   *                <p>ResourceNotRecorded – The resource was discovered but its configuration was not recorded since the recorder doesn't record resources of this type</p>
   *             </li>
   *             <li>
   *                <p>ResourceDeleted – The resource was deleted</p>
   *             </li>
   *             <li>
   *                <p>ResourceDeletedNotRecorded – The resource was deleted but its configuration was not recorded since the recorder doesn't  record resources of this type</p>
   *             </li>
   *          </ul>
   * @public
   */
  configurationItemStatus?: ConfigurationItemStatus | undefined;

  /**
   * <p>An identifier that indicates the ordering of the configuration
   * 			items of a resource.</p>
   * @public
   */
  configurationStateId?: string | undefined;

  /**
   * <p>Unique MD5 hash that represents the configuration item's
   * 			state.</p>
   *          <p>You can use MD5 hash to compare the states of two or more
   * 			configuration items that are associated with the same
   * 			resource.</p>
   * @public
   */
  configurationItemMD5Hash?: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) associated with the resource.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The type of Amazon Web Services resource.</p>
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * <p>The ID of the resource (for example,
   * 			<code>sg-xxxxxx</code>).</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The custom name of the resource, if available.</p>
   * @public
   */
  resourceName?: string | undefined;

  /**
   * <p>The region where the resource resides.</p>
   * @public
   */
  awsRegion?: string | undefined;

  /**
   * <p>The Availability Zone associated with the resource.</p>
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * <p>The time stamp when the resource was created.</p>
   * @public
   */
  resourceCreationTime?: Date | undefined;

  /**
   * <p>A mapping of key value tags associated with the
   * 			resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A list of CloudTrail event IDs.</p>
   *          <p>A populated field indicates that the current configuration was
   * 			initiated by the events recorded in the CloudTrail log. For more
   * 			information about CloudTrail, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">What Is CloudTrail</a>.</p>
   *          <p>An empty field indicates that the current configuration was not
   * 			initiated by any event. As of Version 1.3, the relatedEvents field is empty.
   * 			You can access the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_LookupEvents.html">LookupEvents API</a> in the <i>CloudTrail API Reference</i> to retrieve the events for the resource.</p>
   * @public
   */
  relatedEvents?: string[] | undefined;

  /**
   * <p>A list of related Amazon Web Services resources.</p>
   * @public
   */
  relationships?: Relationship[] | undefined;

  /**
   * <p>A JSON-encoded string that contains the contents for the resource configuration. This string needs to be deserialized using <code>json.loads()</code> before you can access the contents.</p>
   * @public
   */
  configuration?: string | undefined;

  /**
   * <p>A string to string map that contains additional contents for the resource configuration.Config returns this field for certain
   * 			resource types to supplement the information returned for the
   * 			<code>configuration</code> field.</p>
   *          <p>This string to string map needs to be deserialized using <code>json.loads()</code> before you can accessing the contents.</p>
   * @public
   */
  supplementaryConfiguration?: Record<string, string> | undefined;

  /**
   * <p>The recording frequency that Config uses to record configuration changes for the resource.</p>
   *          <note>
   *             <p>This field only appears in the API response when <code>DAILY</code> recording is enabled for a resource type.
   * 				If this field is not present, <code>CONTINUOUS</code> recording is enabled for that resource type. For more information on daily recording and continuous recording, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html#select-resources-recording-frequency">Recording Frequency</a> in the <i>Config
   * 						Developer Guide</i>.</p>
   *          </note>
   * @public
   */
  recordingFrequency?: RecordingFrequency | undefined;

  /**
   * <p>The time when configuration changes for the resource were delivered.</p>
   *          <note>
   *             <p>This field is optional and is not guaranteed to be present in a configuration item  (CI). If you are using daily recording,
   * 			this field will be populated. However, if you are using continuous recording,
   * 			this field will be omitted since the delivery time is instantaneous as the CI is available right away.</p>
   *             <p>For more information on daily recording and continuous recording, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html#select-resources-recording-frequency">Recording Frequency</a> in the <i>Config
   * 					Developer Guide</i>.</p>
   *          </note>
   * @public
   */
  configurationItemDeliveryTime?: Date | undefined;
}

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
 * <p>Filters configuration recorders by recording scope.</p>
 * @public
 */
export interface ConfigurationRecorderFilter {
  /**
   * <p>The name of the type of filter. Currently, only <code>recordingScope</code> is supported.</p>
   * @public
   */
  filterName?: ConfigurationRecorderFilterName | undefined;

  /**
   * <p>The value of the filter. For <code>recordingScope</code>, valid values include: <code>INTERNAL</code> and <code>PAID</code>.</p>
   *          <p>
   *             <code>INTERNAL</code> indicates that the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_ConfigurationItem.html">ConfigurationItems</a> in scope for the configuration recorder are recorded for free.</p>
   *          <p>
   *             <code>PAID</code> indicates that the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_ConfigurationItem.html">ConfigurationItems</a> in scope for the configuration recorder impact the costs to your bill.</p>
   * @public
   */
  filterValue?: string[] | undefined;
}

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
 * <p>The current status of the configuration recorder.</p>
 *          <p>For a detailed status of recording events over time, add your Config events to CloudWatch metrics and use CloudWatch metrics.</p>
 * @public
 */
export interface ConfigurationRecorderStatus {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration recorder.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the configuration recorder.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The time the recorder was last started.</p>
   * @public
   */
  lastStartTime?: Date | undefined;

  /**
   * <p>The time the recorder was last stopped.</p>
   * @public
   */
  lastStopTime?: Date | undefined;

  /**
   * <p>Specifies whether or not the recorder is currently
   * 			recording.</p>
   * @public
   */
  recording?: boolean | undefined;

  /**
   * <p>The status of the latest recording event processed by the recorder.</p>
   * @public
   */
  lastStatus?: RecorderStatus | undefined;

  /**
   * <p>The latest error code from when the recorder last failed.</p>
   * @public
   */
  lastErrorCode?: string | undefined;

  /**
   * <p>The latest error message from when the recorder last failed.</p>
   * @public
   */
  lastErrorMessage?: string | undefined;

  /**
   * <p>The time of the latest change in status of an recording event processed by the recorder.</p>
   * @public
   */
  lastStatusChangeTime?: Date | undefined;

  /**
   * <p>For service-linked configuration recorders, the service principal of the linked Amazon Web Services service.</p>
   * @public
   */
  servicePrincipal?: string | undefined;
}

/**
 * <p>A summary of a configuration recorder, including the <code>arn</code>, <code>name</code>, <code>servicePrincipal</code>, and <code>recordingScope</code>.</p>
 * @public
 */
export interface ConfigurationRecorderSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration recorder.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the configuration recorder.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>For service-linked configuration recorders, indicates which Amazon Web Services service the configuration recorder is linked to.</p>
   * @public
   */
  servicePrincipal?: string | undefined;

  /**
   * <p>Indicates whether the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_ConfigurationItem.html">ConfigurationItems</a> in scope for the configuration recorder are recorded for free (<code>INTERNAL</code>) or if you are charged a service fee for recording (<code>PAID</code>).</p>
   * @public
   */
  recordingScope: RecordingScope | undefined;
}

/**
 * <p>Filters the conformance pack by compliance types and Config rule names.</p>
 * @public
 */
export interface ConformancePackComplianceFilters {
  /**
   * <p>Filters the results by Config rule names.</p>
   * @public
   */
  ConfigRuleNames?: string[] | undefined;

  /**
   * <p>Filters the results by compliance.</p>
   *          <p>The allowed values are <code>COMPLIANT</code> and <code>NON_COMPLIANT</code>. <code>INSUFFICIENT_DATA</code> is not supported.</p>
   * @public
   */
  ComplianceType?: ConformancePackComplianceType | undefined;
}

/**
 * <p>A compliance score is the percentage of the number of compliant rule-resource combinations in a conformance pack compared to the number of total possible rule-resource combinations in the conformance pack.
 * 			This metric provides you with a high-level view of the compliance state of your conformance packs. You can use it to identify, investigate, and understand
 * 			the level of compliance in your conformance packs.</p>
 * @public
 */
export interface ConformancePackComplianceScore {
  /**
   * <p>Compliance score for the conformance pack. Conformance packs with no evaluation results will have a compliance score of <code>INSUFFICIENT_DATA</code>.</p>
   * @public
   */
  Score?: string | undefined;

  /**
   * <p>The name of the conformance pack.</p>
   * @public
   */
  ConformancePackName?: string | undefined;

  /**
   * <p>The time that the conformance pack compliance score was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * <p>A list of filters to apply to the conformance pack compliance score result set. </p>
 * @public
 */
export interface ConformancePackComplianceScoresFilters {
  /**
   * <p>The names of the conformance packs whose compliance scores you want to include in the conformance pack compliance score result set.
   * 			You can include up to 25 conformance packs in the <code>ConformancePackNames</code> array of strings, each with a character limit of 256 characters for the conformance pack name.</p>
   * @public
   */
  ConformancePackNames: string[] | undefined;
}

/**
 * <p>Summary includes the name and status of the conformance pack.</p>
 * @public
 */
export interface ConformancePackComplianceSummary {
  /**
   * <p>The name of the conformance pack name.</p>
   * @public
   */
  ConformancePackName: string | undefined;

  /**
   * <p>The status of the conformance pack.</p>
   * @public
   */
  ConformancePackComplianceStatus: ConformancePackComplianceType | undefined;
}

/**
 * <p>Input parameters in the form of key-value pairs for the conformance pack, both of which you define.
 * 			Keys can have a maximum character length of 255 characters, and values can have a maximum length of 4096 characters.</p>
 * @public
 */
export interface ConformancePackInputParameter {
  /**
   * <p>One part of a key-value pair.</p>
   * @public
   */
  ParameterName: string | undefined;

  /**
   * <p>Another part of the key-value pair. </p>
   * @public
   */
  ParameterValue: string | undefined;
}

/**
 * <p>This API allows you to create a conformance pack template with an Amazon Web Services Systems Manager document (SSM document).
 * 			To deploy a conformance pack using an SSM document, first create an SSM document with conformance pack content, and then provide the <code>DocumentName</code> in the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConformancePack.html">PutConformancePack API</a>. You can also provide the <code>DocumentVersion</code>.</p>
 *          <p>The <code>TemplateSSMDocumentDetails</code> object contains the name of the SSM document and the version of the SSM document.</p>
 * @public
 */
export interface TemplateSSMDocumentDetails {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the SSM document to use to create a conformance pack.
   * 			If you use the document name, Config checks only your account and Amazon Web Services Region for the SSM document.</p>
   * @public
   */
  DocumentName: string | undefined;

  /**
   * <p>The version of the SSM document to use to create a conformance pack. By default, Config uses the latest version.</p>
   *          <note>
   *             <p>This field is optional.</p>
   *          </note>
   * @public
   */
  DocumentVersion?: string | undefined;
}

/**
 * <p>Returns details of a conformance pack. A conformance pack is a collection of Config rules and remediation actions that can be easily deployed in an account and a region.</p>
 * @public
 */
export interface ConformancePackDetail {
  /**
   * <p>Name of the conformance pack.</p>
   * @public
   */
  ConformancePackName: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the conformance pack.</p>
   * @public
   */
  ConformancePackArn: string | undefined;

  /**
   * <p>ID of the conformance pack.</p>
   * @public
   */
  ConformancePackId: string | undefined;

  /**
   * <p>The name of the Amazon S3 bucket where Config stores conformance pack templates. </p>
   *          <note>
   *             <p>This field is optional.</p>
   *          </note>
   * @public
   */
  DeliveryS3Bucket?: string | undefined;

  /**
   * <p>The prefix for the Amazon S3 bucket.</p>
   *          <note>
   *             <p>This field is optional.</p>
   *          </note>
   * @public
   */
  DeliveryS3KeyPrefix?: string | undefined;

  /**
   * <p>A list of <code>ConformancePackInputParameter</code> objects.</p>
   * @public
   */
  ConformancePackInputParameters?: ConformancePackInputParameter[] | undefined;

  /**
   * <p>The last time a conformation pack update was requested. </p>
   * @public
   */
  LastUpdateRequestedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services service that created the conformance pack.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>An object that contains the name or Amazon Resource Name (ARN) of the Amazon Web Services Systems Manager document (SSM document) and the version of the SSM document that is used to create a conformance pack.</p>
   * @public
   */
  TemplateSSMDocumentDetails?: TemplateSSMDocumentDetails | undefined;
}

/**
 * <p>Filters a conformance pack by Config rule names, compliance types, Amazon Web Services resource types, and resource IDs.</p>
 * @public
 */
export interface ConformancePackEvaluationFilters {
  /**
   * <p>Filters the results by Config rule names.</p>
   * @public
   */
  ConfigRuleNames?: string[] | undefined;

  /**
   * <p>Filters the results by compliance.</p>
   *          <p>The allowed values are <code>COMPLIANT</code> and <code>NON_COMPLIANT</code>. <code>INSUFFICIENT_DATA</code> is not supported.</p>
   * @public
   */
  ComplianceType?: ConformancePackComplianceType | undefined;

  /**
   * <p>Filters the results by the resource type (for example, <code>"AWS::EC2::Instance"</code>). </p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>Filters the results by resource IDs.</p>
   *          <note>
   *             <p>This is valid only when you provide resource type. If there is no resource type, you will see an error.</p>
   *          </note>
   * @public
   */
  ResourceIds?: string[] | undefined;
}

/**
 * <p>The details of a conformance pack evaluation. Provides Config rule and Amazon Web Services resource type that was evaluated, the compliance of the conformance pack, related time stamps, and supplementary information. </p>
 * @public
 */
export interface ConformancePackEvaluationResult {
  /**
   * <p>The compliance type. The allowed values are <code>COMPLIANT</code> and <code>NON_COMPLIANT</code>. <code>INSUFFICIENT_DATA</code> is not supported.</p>
   * @public
   */
  ComplianceType: ConformancePackComplianceType | undefined;

  /**
   * <p>Uniquely identifies an evaluation result.</p>
   * @public
   */
  EvaluationResultIdentifier: EvaluationResultIdentifier | undefined;

  /**
   * <p>The time when Config rule evaluated Amazon Web Services resource.</p>
   * @public
   */
  ConfigRuleInvokedTime: Date | undefined;

  /**
   * <p>The time when Config recorded the evaluation result. </p>
   * @public
   */
  ResultRecordedTime: Date | undefined;

  /**
   * <p>Supplementary information about how the evaluation determined the compliance. </p>
   * @public
   */
  Annotation?: string | undefined;
}

/**
 * <p>Compliance information of one or more Config rules within a conformance pack. You can filter using Config rule names and compliance types.</p>
 * @public
 */
export interface ConformancePackRuleCompliance {
  /**
   * <p>Name of the Config rule.</p>
   * @public
   */
  ConfigRuleName?: string | undefined;

  /**
   * <p>Compliance of the Config rule.</p>
   * @public
   */
  ComplianceType?: ConformancePackComplianceType | undefined;

  /**
   * <p>Controls for the conformance pack. A control is a process to prevent or detect problems while meeting objectives.
   * 			A control can align with a specific compliance regime or map to internal controls defined by an organization.</p>
   * @public
   */
  Controls?: string[] | undefined;
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
 * <p>Status details of a conformance pack.</p>
 * @public
 */
export interface ConformancePackStatusDetail {
  /**
   * <p>Name of the conformance pack.</p>
   * @public
   */
  ConformancePackName: string | undefined;

  /**
   * <p>ID of the conformance pack.</p>
   * @public
   */
  ConformancePackId: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of comformance pack.</p>
   * @public
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
   * @public
   */
  ConformancePackState: ConformancePackState | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of CloudFormation stack. </p>
   * @public
   */
  StackArn: string | undefined;

  /**
   * <p>The reason of conformance pack creation failure.</p>
   * @public
   */
  ConformancePackStatusReason?: string | undefined;

  /**
   * <p>Last time when conformation pack creation and update was requested.</p>
   * @public
   */
  LastUpdateRequestedTime: Date | undefined;

  /**
   * <p>Last time when conformation pack creation and update was successful.</p>
   * @public
   */
  LastUpdateCompletedTime?: Date | undefined;
}

/**
 * <p>You have specified a template that is not valid or supported.</p>
 * @public
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
   * @public
   */
  AuthorizedAccountId: string | undefined;

  /**
   * <p>The region authorized to collect aggregated data.</p>
   * @public
   */
  AuthorizedAwsRegion: string | undefined;
}

/**
 * <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 * @public
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
 * <p></p>
 * @public
 */
export interface DeleteConfigRuleRequest {
  /**
   * <p>The name of the Config rule that you want to
   * 			delete.</p>
   * @public
   */
  ConfigRuleName: string | undefined;
}

/**
 * <p>The Config rule in the request is not valid. Verify that the rule is an Config Process Check rule, that the rule name is correct, and that valid Amazon Resouce Names (ARNs) are used before trying again.</p>
 * @public
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
 * @public
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
   * @public
   */
  ConfigurationAggregatorName: string | undefined;
}

/**
 * <p>The request object for the
 * 				<code>DeleteConfigurationRecorder</code> operation.</p>
 * @public
 */
export interface DeleteConfigurationRecorderRequest {
  /**
   * <p>The name of the customer managed configuration recorder that you want to delete. You can
   * 			retrieve the name of your configuration recorders by using the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorders.html">DescribeConfigurationRecorders</a> operation.</p>
   * @public
   */
  ConfigurationRecorderName: string | undefined;
}

/**
 * <p>The requested operation is not valid.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigurationRecorder.html">PutConfigurationRecorder</a>,
 * 			you will see this exception because you cannot use this operation to create a service-linked configuration recorder. Use the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutServiceLinkedConfigurationRecorder.html">PutServiceLinkedConfigurationRecorder</a> operation to create a service-linked configuration
 * 			recorder.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConfigurationRecorder.html">DeleteConfigurationRecorder</a>, you will see this exception because you cannot use this operation to delete a service-linked configuration recorder. Use the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteServiceLinkedConfigurationRecorder.html">DeleteServiceLinkedConfigurationRecorder</a> operation to delete a service-linked configuration
 * 			recorder.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_StartConfigurationRecorder.html">StartConfigurationRecorder</a> and <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_StopConfigurationRecorder.html">StopConfigurationRecorder</a>, you will see this exception because these operations do not affect service-linked configuration recorders.
 * 			Service-linked configuration recorders are always recording. To stop recording, you must delete the service-linked configuration recorder. Use the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteServiceLinkedConfigurationRecorder.html">DeleteServiceLinkedConfigurationRecorder</a> operation to delete a service-linked configuration
 * 			recorder.</p>
 * @public
 */
export class UnmodifiableEntityException extends __BaseException {
  readonly name: "UnmodifiableEntityException" = "UnmodifiableEntityException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnmodifiableEntityException, __BaseException>) {
    super({
      name: "UnmodifiableEntityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnmodifiableEntityException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteConformancePackRequest {
  /**
   * <p>Name of the conformance pack you want to delete.</p>
   * @public
   */
  ConformancePackName: string | undefined;
}

/**
 * <p>You specified one or more conformance packs that do not exist.</p>
 * @public
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
 * <p>The input for the <a>DeleteDeliveryChannel</a>
 * 			action. The action accepts the following data, in JSON format.
 * 		</p>
 * @public
 */
export interface DeleteDeliveryChannelRequest {
  /**
   * <p>The name of the delivery channel that you want to delete.</p>
   * @public
   */
  DeliveryChannelName: string | undefined;
}

/**
 * <p>You cannot delete the delivery channel you specified because the customer managed configuration recorder is running.</p>
 * @public
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
 * <p>You have specified a delivery channel that does not
 * 			exist.</p>
 * @public
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
 * <p></p>
 * @public
 */
export interface DeleteEvaluationResultsRequest {
  /**
   * <p>The name of the Config rule for which you want to delete
   * 			the evaluation results.</p>
   * @public
   */
  ConfigRuleName: string | undefined;
}

/**
 * <p>The output when you delete the evaluation results for the
 * 			specified Config rule.</p>
 * @public
 */
export interface DeleteEvaluationResultsResponse {}

/**
 * @public
 */
export interface DeleteOrganizationConfigRuleRequest {
  /**
   * <p>The name of organization Config rule that you want to delete.</p>
   * @public
   */
  OrganizationConfigRuleName: string | undefined;
}

/**
 * <p>The Config rule in the request is not valid. Verify that the rule is an organization Config Process Check rule, that the rule name is correct, and that valid Amazon Resouce Names (ARNs) are used before trying again.</p>
 * @public
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
 * 			Ensure that the management account registers delagated administrator for Config service principal name before the delegated administrator creates an aggregator.</p>
 *             </li>
 *          </ul>
 *          <p>For all <code>OrganizationConfigRule</code> and <code>OrganizationConformancePack</code> APIs, Config throws an exception if APIs are called from member accounts. All APIs must be called from organization management account.</p>
 * @public
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
   * @public
   */
  OrganizationConformancePackName: string | undefined;
}

/**
 * <p>Config organization conformance pack that you passed in the filter does not exist.</p>
 *          <p>For DeleteOrganizationConformancePack, you tried to delete an organization conformance pack that does not exist.</p>
 * @public
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
   * @public
   */
  RequesterAccountId: string | undefined;

  /**
   * <p>The region requesting to aggregate data.</p>
   * @public
   */
  RequesterAwsRegion: string | undefined;
}

/**
 * @public
 */
export interface DeleteRemediationConfigurationRequest {
  /**
   * <p>The name of the Config rule for which you want to delete remediation configuration.</p>
   * @public
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>The type of a resource.</p>
   * @public
   */
  ResourceType?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRemediationConfigurationResponse {}

/**
 * <p>Indicates one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigRule.html">PutConfigRule</a>, the rule cannot be created because the IAM role assigned to Config lacks permissions to perform the config:Put* action.</p>
 *             </li>
 *             <li>
 *                <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigRule.html">PutConfigRule</a>, the Lambda function cannot be invoked. Check the function ARN, and check the function's permissions.</p>
 *             </li>
 *             <li>
 *                <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConfigRule.html">PutOrganizationConfigRule</a>, organization Config rule cannot be created because you do not have permissions to call IAM <code>GetRole</code> action or create a service-linked role.</p>
 *             </li>
 *             <li>
 *                <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConformancePack.html">PutConformancePack</a> and <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConformancePack.html">PutOrganizationConformancePack</a>, a conformance pack cannot be created because you do not have the following permissions: </p>
 *                <ul>
 *                   <li>
 *                      <p>You do not have permission to call IAM <code>GetRole</code> action or create a service-linked role.</p>
 *                   </li>
 *                   <li>
 *                      <p>You do not have permission to read Amazon S3 bucket or call SSM:GetDocument.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutServiceLinkedConfigurationRecorder.html">PutServiceLinkedConfigurationRecorder</a>, a service-linked configuration recorder cannot be created because you do not have the following permissions: IAM <code>CreateServiceLinkedRole</code>.</p>
 *             </li>
 *          </ul>
 * @public
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
 * <p>You specified an Config rule without a remediation configuration.</p>
 * @public
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
 * <p>Remediation action is in progress. You can either cancel execution in Amazon Web Services Systems Manager or wait and try again later. </p>
 * @public
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
 * <p>The details that identify a resource within Config, including the resource type and resource ID. </p>
 * @public
 */
export interface RemediationExceptionResourceKey {
  /**
   * <p>The type of a resource.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The ID of the resource (for example., sg-xxxxxx).</p>
   * @public
   */
  ResourceId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRemediationExceptionsRequest {
  /**
   * <p>The name of the Config rule for which you want to delete remediation exception configuration.</p>
   * @public
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>An exception list of resource exception keys to be processed with the current request. Config adds exception for each resource key. For example, Config adds 3 exceptions for 3 resource keys. </p>
   * @public
   */
  ResourceKeys: RemediationExceptionResourceKey[] | undefined;
}

/**
 * <p>List of each of the failed delete remediation exceptions with specific reasons.</p>
 * @public
 */
export interface FailedDeleteRemediationExceptionsBatch {
  /**
   * <p>Returns a failure message for delete remediation exception. For example, Config creates an exception due to an internal error.</p>
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * <p>Returns remediation exception resource key object of the failed items.</p>
   * @public
   */
  FailedItems?: RemediationExceptionResourceKey[] | undefined;
}

/**
 * @public
 */
export interface DeleteRemediationExceptionsResponse {
  /**
   * <p>Returns a list of failed delete remediation exceptions batch objects. Each object in the batch consists of a list of failed items and failure messages.</p>
   * @public
   */
  FailedBatches?: FailedDeleteRemediationExceptionsBatch[] | undefined;
}

/**
 * <p>You tried to delete a remediation exception that does not exist.</p>
 * @public
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
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>Unique identifier of the resource.</p>
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * <p>There is no configuration recorder running.</p>
 * @public
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
   * @public
   */
  RetentionConfigurationName: string | undefined;
}

/**
 * <p>You have specified a retention configuration that does not exist.</p>
 * @public
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
export interface DeleteServiceLinkedConfigurationRecorderRequest {
  /**
   * <p>The service principal of the Amazon Web Services service for the service-linked configuration recorder that you want to delete.</p>
   * @public
   */
  ServicePrincipal: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceLinkedConfigurationRecorderResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the specified configuration recorder.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the specified configuration recorder.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteStoredQueryRequest {
  /**
   * <p>The name of the query that you want to delete.</p>
   * @public
   */
  QueryName: string | undefined;
}

/**
 * @public
 */
export interface DeleteStoredQueryResponse {}

/**
 * <p>You have specified a resource that does not exist.</p>
 * @public
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
 * <p>The input for the <a>DeliverConfigSnapshot</a>
 * 			action.</p>
 * @public
 */
export interface DeliverConfigSnapshotRequest {
  /**
   * <p>The name of the delivery channel through which the snapshot is
   * 			delivered.</p>
   * @public
   */
  deliveryChannelName: string | undefined;
}

/**
 * <p>The output for the <a>DeliverConfigSnapshot</a>
 * 			action, in JSON format.</p>
 * @public
 */
export interface DeliverConfigSnapshotResponse {
  /**
   * <p>The ID of the snapshot that is being created.</p>
   * @public
   */
  configSnapshotId?: string | undefined;
}

/**
 * <p>The channel through which Config delivers notifications and
 * 			updated configuration states.</p>
 * @public
 */
export interface DeliveryChannel {
  /**
   * <p>The name of the delivery channel. By default, Config
   * 			assigns the name "default" when creating the delivery channel. To
   * 			change the delivery channel name, you must use the
   * 			DeleteDeliveryChannel action to delete your current delivery
   * 			channel, and then you must use the PutDeliveryChannel command to
   * 			create a delivery channel that has the desired name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The name of the Amazon S3 bucket to which Config delivers
   * 			configuration snapshots and configuration history files.</p>
   *          <p>If you specify a bucket that belongs to another Amazon Web Services account,
   * 			that bucket must have policies that grant access permissions to Config. For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-policy.html">Permissions for the Amazon S3 Bucket</a> in the <i>Config
   * 			Developer Guide</i>.</p>
   * @public
   */
  s3BucketName?: string | undefined;

  /**
   * <p>The prefix for the specified Amazon S3 bucket.</p>
   * @public
   */
  s3KeyPrefix?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Key Management Service (KMS ) KMS key (KMS key) used to encrypt objects delivered by Config.
   * 			Must belong to the same Region as the destination S3 bucket.</p>
   * @public
   */
  s3KmsKeyArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which
   * 			Config sends notifications about configuration
   * 			changes.</p>
   *          <p>If you choose a topic from another account, the topic must have
   * 			policies that grant access permissions to Config. For more
   * 			information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/sns-topic-policy.html">Permissions for the Amazon SNS Topic</a> in the <i>Config
   * 			Developer Guide</i>.</p>
   * @public
   */
  snsTopicARN?: string | undefined;

  /**
   * <p>The options for how often Config delivers configuration
   * 			snapshots to the Amazon S3 bucket.</p>
   * @public
   */
  configSnapshotDeliveryProperties?: ConfigSnapshotDeliveryProperties | undefined;
}

/**
 * <p>The status of a specified delivery channel.</p>
 *          <p>Valid values: <code>Success</code> | <code>Failure</code>
 *          </p>
 * @public
 */
export interface DeliveryChannelStatus {
  /**
   * <p>The name of the delivery channel.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A list containing the status of the delivery of the snapshot to
   * 			the specified Amazon S3 bucket.</p>
   * @public
   */
  configSnapshotDeliveryInfo?: ConfigExportDeliveryInfo | undefined;

  /**
   * <p>A list that contains the status of the delivery of the
   * 			configuration history to the specified Amazon S3 bucket.</p>
   * @public
   */
  configHistoryDeliveryInfo?: ConfigExportDeliveryInfo | undefined;

  /**
   * <p>A list containing the status of the delivery of the
   * 			configuration stream notification to the specified Amazon SNS
   * 			topic.</p>
   * @public
   */
  configStreamDeliveryInfo?: ConfigStreamDeliveryInfo | undefined;
}

/**
 * @public
 */
export interface DescribeAggregateComplianceByConfigRulesRequest {
  /**
   * <p>The name of the configuration aggregator.</p>
   * @public
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>Filters the results by ConfigRuleComplianceFilters object.
   * 		</p>
   * @public
   */
  Filters?: ConfigRuleComplianceFilters | undefined;

  /**
   * <p>The maximum number of evaluation results returned on each page.
   * 			The default is
   * 			maximum.
   * 			If you specify 0, Config uses the default.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAggregateComplianceByConfigRulesResponse {
  /**
   * <p>Returns a list of AggregateComplianceByConfigRule
   * 			object.</p>
   * @public
   */
  AggregateComplianceByConfigRules?: AggregateComplianceByConfigRule[] | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The specified limit is outside the allowable range.</p>
 * @public
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
 * <p>The specified next token is not valid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 * @public
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
   * @public
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>Filters the result by <code>AggregateConformancePackComplianceFilters</code> object.</p>
   * @public
   */
  Filters?: AggregateConformancePackComplianceFilters | undefined;

  /**
   * <p>The maximum number of conformance packs compliance details returned on each page. The default is maximum. If you specify 0, Config uses the default. </p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAggregateComplianceByConformancePacksResponse {
  /**
   * <p>Returns the <code>AggregateComplianceByConformancePack</code> object.</p>
   * @public
   */
  AggregateComplianceByConformancePacks?: AggregateComplianceByConformancePack[] | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAggregationAuthorizationsRequest {
  /**
   * <p>The maximum number of AggregationAuthorizations returned on
   * 			each page. The default is maximum. If you specify 0, Config uses
   * 			the default.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAggregationAuthorizationsResponse {
  /**
   * <p>Returns a list of authorizations granted to various aggregator
   * 			accounts and regions.</p>
   * @public
   */
  AggregationAuthorizations?: AggregationAuthorization[] | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeComplianceByConfigRuleRequest {
  /**
   * <p>Specify one or more Config rule names to filter the results
   * 			by rule.</p>
   * @public
   */
  ConfigRuleNames?: string[] | undefined;

  /**
   * <p>Filters the results by compliance.</p>
   * @public
   */
  ComplianceTypes?: ComplianceType[] | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeComplianceByConfigRuleResponse {
  /**
   * <p>Indicates whether each of the specified Config rules is
   * 			compliant.</p>
   * @public
   */
  ComplianceByConfigRules?: ComplianceByConfigRule[] | undefined;

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeComplianceByResourceRequest {
  /**
   * <p>The types of Amazon Web Services resources for which you want compliance
   * 			information (for example, <code>AWS::EC2::Instance</code>). For this operation, you can specify that the resource type is an Amazon Web Services account by
   * 			specifying <code>AWS::::Account</code>.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services resource for which you want compliance
   * 			information. You can specify only one resource ID. If you specify a
   * 			resource ID, you must also specify a type for
   * 				<code>ResourceType</code>.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>Filters the results by compliance.</p>
   * @public
   */
  ComplianceTypes?: ComplianceType[] | undefined;

  /**
   * <p>The maximum number of evaluation results returned on each page.
   * 			The default is 10. You cannot specify a number greater than 100. If
   * 			you specify 0, Config uses the default.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeComplianceByResourceResponse {
  /**
   * <p>Indicates whether the specified Amazon Web Services resource complies with all
   * 			of the Config rules that evaluate it.</p>
   * @public
   */
  ComplianceByResources?: ComplianceByResource[] | undefined;

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeConfigRuleEvaluationStatusRequest {
  /**
   * <p>The name of the Config managed rules for which you want
   * 			status information. If you do not specify any names, Config
   * 			returns status information for all Config managed rules that you
   * 			use.</p>
   * @public
   */
  ConfigRuleNames?: string[] | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The number of rule evaluation results that you want
   * 			returned.</p>
   *          <p>This parameter is required if the rule limit for your account
   * 			is more than the default of 1000 rules.</p>
   *          <p>For information about requesting a rule limit increase, see
   * 				<a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_config">Config Limits</a> in the <i>Amazon Web Services General
   * 				Reference Guide</i>.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeConfigRuleEvaluationStatusResponse {
  /**
   * <p>Status information about your Config managed rules.</p>
   * @public
   */
  ConfigRulesEvaluationStatus?: ConfigRuleEvaluationStatus[] | undefined;

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Returns a filtered list of Detective or Proactive Config rules. By default, if the filter is not defined, this API returns an unfiltered list. For more information on Detective or Proactive Config rules,
 * 			see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config-rules.html">
 *                <b>Evaluation Mode</b>
 *             </a> in the <i>Config Developer Guide</i>.</p>
 * @public
 */
export interface DescribeConfigRulesFilters {
  /**
   * <p>The mode of an evaluation. The valid values are Detective or Proactive.</p>
   * @public
   */
  EvaluationMode?: EvaluationMode | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeConfigRulesRequest {
  /**
   * <p>The names of the Config rules for which you want details.
   * 			If you do not specify any names, Config returns details for all
   * 			your rules.</p>
   * @public
   */
  ConfigRuleNames?: string[] | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Returns a list of Detective or Proactive Config rules. By default, this API returns an unfiltered list. For more information on Detective or Proactive Config rules,
   * 			see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config-rules.html">
   *                <b>Evaluation Mode</b>
   *             </a> in the <i>Config Developer Guide</i>.</p>
   * @public
   */
  Filters?: DescribeConfigRulesFilters | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeConfigRulesResponse {
  /**
   * <p>The details about your Config rules.</p>
   * @public
   */
  ConfigRules?: ConfigRule[] | undefined;

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationAggregatorsRequest {
  /**
   * <p>The name of the configuration aggregators.</p>
   * @public
   */
  ConfigurationAggregatorNames?: string[] | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of configuration aggregators returned on
   * 			each page. The default is maximum. If you specify 0, Config uses
   * 			the default.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationAggregatorsResponse {
  /**
   * <p>Returns a ConfigurationAggregators object.</p>
   * @public
   */
  ConfigurationAggregators?: ConfigurationAggregator[] | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationAggregatorSourcesStatusRequest {
  /**
   * <p>The name of the configuration aggregator.</p>
   * @public
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
   * @public
   */
  UpdateStatus?: AggregatedSourceStatusType[] | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of AggregatorSourceStatus returned on each
   * 			page. The default is maximum. If you specify 0, Config uses the
   * 			default.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationAggregatorSourcesStatusResponse {
  /**
   * <p>Returns an AggregatedSourceStatus object.
   * 			</p>
   * @public
   */
  AggregatedSourceStatusList?: AggregatedSourceStatus[] | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The input for the <a>DescribeConfigurationRecorders</a> action.</p>
 * @public
 */
export interface DescribeConfigurationRecordersRequest {
  /**
   * <p>A list of names of the configuration recorders that you want to specify.</p>
   *          <note>
   *             <p>When making a request to this operation, you can only specify one configuration recorder.</p>
   *          </note>
   * @public
   */
  ConfigurationRecorderNames?: string[] | undefined;

  /**
   * <p>For service-linked configuration recorders, you can use the service principal of the linked Amazon Web Services service to specify the configuration recorder.</p>
   * @public
   */
  ServicePrincipal?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configuration recorder that you want to specify.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>The output for the <a>DescribeConfigurationRecorders</a> action.</p>
 * @public
 */
export interface DescribeConfigurationRecordersResponse {
  /**
   * <p>A list that contains the descriptions of the specified
   * 			configuration recorders.</p>
   * @public
   */
  ConfigurationRecorders?: ConfigurationRecorder[] | undefined;
}

/**
 * <p>The input for the <a>DescribeConfigurationRecorderStatus</a>
 * 			action.</p>
 * @public
 */
export interface DescribeConfigurationRecorderStatusRequest {
  /**
   * <p>The name of the configuration recorder. If the name is not
   * 			specified, the operation returns the status for the customer managed configuration recorder configured for the
   * 			account, if applicable.</p>
   *          <note>
   *             <p>When making a request to this operation, you can only specify one configuration recorder.</p>
   *          </note>
   * @public
   */
  ConfigurationRecorderNames?: string[] | undefined;

  /**
   * <p>For service-linked configuration recorders, you can use the service principal of the linked Amazon Web Services service to specify the configuration recorder.</p>
   * @public
   */
  ServicePrincipal?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configuration recorder that you want to specify.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>The output for the <a>DescribeConfigurationRecorderStatus</a> action, in JSON
 * 			format.</p>
 * @public
 */
export interface DescribeConfigurationRecorderStatusResponse {
  /**
   * <p>A list that contains status of the specified
   * 			recorders.</p>
   * @public
   */
  ConfigurationRecordersStatus?: ConfigurationRecorderStatus[] | undefined;
}

/**
 * @public
 */
export interface DescribeConformancePackComplianceRequest {
  /**
   * <p>Name of the conformance pack.</p>
   * @public
   */
  ConformancePackName: string | undefined;

  /**
   * <p>A <code>ConformancePackComplianceFilters</code> object.</p>
   * @public
   */
  Filters?: ConformancePackComplianceFilters | undefined;

  /**
   * <p>The maximum number of Config rules within a conformance pack are returned on each page.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConformancePackComplianceResponse {
  /**
   * <p>Name of the conformance pack.</p>
   * @public
   */
  ConformancePackName: string | undefined;

  /**
   * <p>Returns a list of <code>ConformancePackRuleCompliance</code> objects.</p>
   * @public
   */
  ConformancePackRuleComplianceList: ConformancePackRuleCompliance[] | undefined;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Config rule that you passed in the filter does not exist.</p>
 * @public
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
   * @public
   */
  ConformancePackNames?: string[] | undefined;

  /**
   * <p>The maximum number of conformance packs returned on each page.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConformancePacksResponse {
  /**
   * <p>Returns a list of <code>ConformancePackDetail</code> objects.</p>
   * @public
   */
  ConformancePackDetails?: ConformancePackDetail[] | undefined;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConformancePackStatusRequest {
  /**
   * <p>Comma-separated list of conformance pack names.</p>
   * @public
   */
  ConformancePackNames?: string[] | undefined;

  /**
   * <p>The maximum number of conformance packs status returned on each page.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConformancePackStatusResponse {
  /**
   * <p>A list of <code>ConformancePackStatusDetail</code> objects.</p>
   * @public
   */
  ConformancePackStatusDetails?: ConformancePackStatusDetail[] | undefined;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The input for the <a>DescribeDeliveryChannels</a>
 * 			action.</p>
 * @public
 */
export interface DescribeDeliveryChannelsRequest {
  /**
   * <p>A list of delivery channel names.</p>
   * @public
   */
  DeliveryChannelNames?: string[] | undefined;
}

/**
 * <p>The output for the <a>DescribeDeliveryChannels</a>
 * 			action.</p>
 * @public
 */
export interface DescribeDeliveryChannelsResponse {
  /**
   * <p>A list that contains the descriptions of the specified delivery
   * 			channel.</p>
   * @public
   */
  DeliveryChannels?: DeliveryChannel[] | undefined;
}

/**
 * <p>The input for the <a>DeliveryChannelStatus</a>
 * 			action.</p>
 * @public
 */
export interface DescribeDeliveryChannelStatusRequest {
  /**
   * <p>A list of delivery channel names.</p>
   * @public
   */
  DeliveryChannelNames?: string[] | undefined;
}

/**
 * <p>The output for the <a>DescribeDeliveryChannelStatus</a> action.</p>
 * @public
 */
export interface DescribeDeliveryChannelStatusResponse {
  /**
   * <p>A list that contains the status of a specified delivery
   * 			channel.</p>
   * @public
   */
  DeliveryChannelsStatus?: DeliveryChannelStatus[] | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConfigRulesRequest {
  /**
   * <p>The names of organization Config rules for which you want details. If you do not specify any names, Config returns details for all your organization Config rules.</p>
   * @public
   */
  OrganizationConfigRuleNames?: string[] | undefined;

  /**
   * <p>The maximum number of organization Config rules returned on each page. If you do no specify a number, Config uses the default. The default is 100.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   * @public
   */
  NextToken?: string | undefined;
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
 * <p> metadata for your organization Config Custom Policy rule including the runtime system in use, which accounts have debug logging enabled, and
 * 			other custom rule metadata such as resource type, resource ID of Amazon Web Services
 * 			resource, and organization trigger types that trigger Config to evaluate
 * 				Amazon Web Services resources against a rule.</p>
 * @public
 */
export interface OrganizationCustomPolicyRuleMetadataNoPolicy {
  /**
   * <p>The description that you provide for your organization Config Custom Policy rule.</p>
   * @public
   */
  Description?: string | undefined;

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
   * @public
   */
  OrganizationConfigRuleTriggerTypes?: OrganizationConfigRuleTriggerTypeNoSN[] | undefined;

  /**
   * <p>A string, in JSON format, that is passed to your organization Config Custom Policy rule.</p>
   * @public
   */
  InputParameters?: string | undefined;

  /**
   * <p>The maximum frequency with which Config runs evaluations for a rule. Your
   * 			Config Custom Policy rule is triggered when Config delivers
   * 			the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p>
   * @public
   */
  MaximumExecutionFrequency?: MaximumExecutionFrequency | undefined;

  /**
   * <p>The type of the Amazon Web Services resource that was evaluated.</p>
   * @public
   */
  ResourceTypesScope?: string[] | undefined;

  /**
   * <p>The ID of the Amazon Web Services resource that was evaluated.</p>
   * @public
   */
  ResourceIdScope?: string | undefined;

  /**
   * <p>One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.</p>
   * @public
   */
  TagKeyScope?: string | undefined;

  /**
   * <p>The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).</p>
   * @public
   */
  TagValueScope?: string | undefined;

  /**
   * <p>The runtime system for your organization Config Custom Policy rules. Guard is a policy-as-code language that allows you to write policies that are enforced by Config Custom Policy rules. For more information about Guard, see the <a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub
   * 			Repository</a>.</p>
   * @public
   */
  PolicyRuntime?: string | undefined;

  /**
   * <p>A list of accounts that you can enable debug logging for your organization Config Custom Policy rule. List is null when debug logging is enabled for all accounts.</p>
   * @public
   */
  DebugLogDeliveryAccounts?: string[] | undefined;
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
 * <p>An object that specifies organization custom rule metadata such as resource type, resource ID of Amazon Web Services resource, Lambda function ARN,
 * 			and organization trigger types that trigger Config to evaluate your Amazon Web Services resources against a rule.
 * 			It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.</p>
 * @public
 */
export interface OrganizationCustomRuleMetadata {
  /**
   * <p>The description that you provide for your organization Config rule.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The lambda function ARN.</p>
   * @public
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
   * @public
   */
  OrganizationConfigRuleTriggerTypes: OrganizationConfigRuleTriggerType[] | undefined;

  /**
   * <p>A string, in JSON format, that is passed to your organization Config rule Lambda function.</p>
   * @public
   */
  InputParameters?: string | undefined;

  /**
   * <p>The maximum frequency with which Config runs evaluations for a rule.
   * 			Your custom rule is triggered when Config delivers the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p>
   *          <note>
   *             <p>By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid
   * 			value for the <code>MaximumExecutionFrequency</code> parameter.</p>
   *          </note>
   * @public
   */
  MaximumExecutionFrequency?: MaximumExecutionFrequency | undefined;

  /**
   * <p>The type of the Amazon Web Services resource that was evaluated.</p>
   * @public
   */
  ResourceTypesScope?: string[] | undefined;

  /**
   * <p>The ID of the Amazon Web Services resource that was evaluated.</p>
   * @public
   */
  ResourceIdScope?: string | undefined;

  /**
   * <p>One part of a key-value pair that make up a tag.
   * 			A key is a general label that acts like a category for more specific tag values. </p>
   * @public
   */
  TagKeyScope?: string | undefined;

  /**
   * <p>The optional part of a key-value pair that make up a tag.
   * 			A value acts as a descriptor within a tag category (key). </p>
   * @public
   */
  TagValueScope?: string | undefined;
}

/**
 * <p>An object that specifies organization managed rule metadata such as resource type and ID of Amazon Web Services resource along with the rule identifier.
 * 			It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.</p>
 * @public
 */
export interface OrganizationManagedRuleMetadata {
  /**
   * <p>The description that you provide for your organization Config rule.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>For organization config managed rules, a predefined identifier from a
   * 			list. For example, <code>IAM_PASSWORD_POLICY</code> is a managed
   * 			rule. To reference a managed rule, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html">Using Config managed rules</a>.</p>
   * @public
   */
  RuleIdentifier: string | undefined;

  /**
   * <p>A string, in JSON format, that is passed to your organization Config rule Lambda function.</p>
   * @public
   */
  InputParameters?: string | undefined;

  /**
   * <p>The maximum frequency with which Config runs evaluations for a rule. This is for an Config managed rule that is triggered at a periodic frequency.</p>
   *          <note>
   *             <p>By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid
   * 			value for the <code>MaximumExecutionFrequency</code> parameter.</p>
   *          </note>
   * @public
   */
  MaximumExecutionFrequency?: MaximumExecutionFrequency | undefined;

  /**
   * <p>The type of the Amazon Web Services resource that was evaluated.</p>
   * @public
   */
  ResourceTypesScope?: string[] | undefined;

  /**
   * <p>The ID of the Amazon Web Services resource that was evaluated.</p>
   * @public
   */
  ResourceIdScope?: string | undefined;

  /**
   * <p>One part of a key-value pair that make up a tag.
   * 			A key is a general label that acts like a category for more specific tag values. </p>
   * @public
   */
  TagKeyScope?: string | undefined;

  /**
   * <p>The optional part of a key-value pair that make up a tag.
   * 			A value acts as a descriptor within a tag category (key).</p>
   * @public
   */
  TagValueScope?: string | undefined;
}

/**
 * <p>An organization Config rule that has information about Config rules that Config creates in member accounts.</p>
 * @public
 */
export interface OrganizationConfigRule {
  /**
   * <p>The name that you assign to organization Config rule.</p>
   * @public
   */
  OrganizationConfigRuleName: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of organization Config rule.</p>
   * @public
   */
  OrganizationConfigRuleArn: string | undefined;

  /**
   * <p>An <code>OrganizationManagedRuleMetadata</code> object.</p>
   * @public
   */
  OrganizationManagedRuleMetadata?: OrganizationManagedRuleMetadata | undefined;

  /**
   * <p>An <code>OrganizationCustomRuleMetadata</code> object.</p>
   * @public
   */
  OrganizationCustomRuleMetadata?: OrganizationCustomRuleMetadata | undefined;

  /**
   * <p>A comma-separated list of accounts excluded from organization Config rule.</p>
   * @public
   */
  ExcludedAccounts?: string[] | undefined;

  /**
   * <p>The timestamp of the last update.</p>
   * @public
   */
  LastUpdateTime?: Date | undefined;

  /**
   * <p>An
   * 			object that specifies metadata for your organization's Config Custom Policy rule. The metadata includes the runtime system in use, which accounts have
   * 			debug logging enabled, and other custom rule metadata, such as resource type, resource
   * 			ID of Amazon Web Services resource, and organization trigger types that initiate Config to evaluate Amazon Web Services resources against a rule.</p>
   * @public
   */
  OrganizationCustomPolicyRuleMetadata?: OrganizationCustomPolicyRuleMetadataNoPolicy | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConfigRulesResponse {
  /**
   * <p>Returns a list of <code>OrganizationConfigRule</code> objects.</p>
   * @public
   */
  OrganizationConfigRules?: OrganizationConfigRule[] | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConfigRuleStatusesRequest {
  /**
   * <p>The names of organization Config rules for which you want status details. If you do not specify any names, Config returns details for all your organization Config rules.</p>
   * @public
   */
  OrganizationConfigRuleNames?: string[] | undefined;

  /**
   * <p>The maximum number of <code>OrganizationConfigRuleStatuses</code> returned on each page. If you do no specify a number, Config uses the default. The default is 100.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   * @public
   */
  NextToken?: string | undefined;
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
 * <p>Returns the status for an organization Config rule in an organization.</p>
 * @public
 */
export interface OrganizationConfigRuleStatus {
  /**
   * <p>The name that you assign to organization Config rule.</p>
   * @public
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
   * @public
   */
  OrganizationRuleStatus: OrganizationRuleStatus | undefined;

  /**
   * <p>An error code that is returned when organization Config rule creation or deletion has failed.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>An error message indicating that organization Config rule creation or deletion failed due to an error.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The timestamp of the last update.</p>
   * @public
   */
  LastUpdateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConfigRuleStatusesResponse {
  /**
   * <p>A list of <code>OrganizationConfigRuleStatus</code> objects.</p>
   * @public
   */
  OrganizationConfigRuleStatuses?: OrganizationConfigRuleStatus[] | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConformancePacksRequest {
  /**
   * <p>The name that you assign to an organization conformance pack.</p>
   * @public
   */
  OrganizationConformancePackNames?: string[] | undefined;

  /**
   * <p>The maximum number of organization config packs returned on each page. If you do no specify a
   * 			number, Config uses the default. The default is 100.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a
   * 			paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>An organization conformance pack that has information about conformance packs that Config creates in member accounts. </p>
 * @public
 */
export interface OrganizationConformancePack {
  /**
   * <p>The name you assign to an organization conformance pack.</p>
   * @public
   */
  OrganizationConformancePackName: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of organization conformance pack.</p>
   * @public
   */
  OrganizationConformancePackArn: string | undefined;

  /**
   * <p>The name of the Amazon S3 bucket where Config stores conformance pack templates.  </p>
   *          <note>
   *             <p>This field is optional.</p>
   *          </note>
   * @public
   */
  DeliveryS3Bucket?: string | undefined;

  /**
   * <p>Any folder structure you want to add to an Amazon S3 bucket.</p>
   *          <note>
   *             <p>This field is optional.</p>
   *          </note>
   * @public
   */
  DeliveryS3KeyPrefix?: string | undefined;

  /**
   * <p>A list of <code>ConformancePackInputParameter</code> objects.</p>
   * @public
   */
  ConformancePackInputParameters?: ConformancePackInputParameter[] | undefined;

  /**
   * <p>A comma-separated list of accounts excluded from organization conformance pack.</p>
   * @public
   */
  ExcludedAccounts?: string[] | undefined;

  /**
   * <p>Last time when organization conformation pack was updated.</p>
   * @public
   */
  LastUpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConformancePacksResponse {
  /**
   * <p>Returns a list of OrganizationConformancePacks objects.</p>
   * @public
   */
  OrganizationConformancePacks?: OrganizationConformancePack[] | undefined;

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a
   * 			paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConformancePackStatusesRequest {
  /**
   * <p>The names of organization conformance packs for which you want status details.
   * 			If you do not specify any names, Config returns details for all your organization conformance packs. </p>
   * @public
   */
  OrganizationConformancePackNames?: string[] | undefined;

  /**
   * <p>The maximum number of OrganizationConformancePackStatuses returned on each page.
   * 			If you do no specify a number, Config uses the default. The default is 100. </p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   * @public
   */
  NextToken?: string | undefined;
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
 * <p>Returns the status for an organization conformance pack in an organization.</p>
 * @public
 */
export interface OrganizationConformancePackStatus {
  /**
   * <p>The name that you assign to organization conformance pack.</p>
   * @public
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
   * @public
   */
  Status: OrganizationResourceStatus | undefined;

  /**
   * <p>An error code that is returned when organization conformance pack creation or deletion has failed in a member account. </p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>An error message indicating that organization conformance pack creation or deletion failed due to an error. </p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The timestamp of the last update.</p>
   * @public
   */
  LastUpdateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConformancePackStatusesResponse {
  /**
   * <p>A list of <code>OrganizationConformancePackStatus</code> objects. </p>
   * @public
   */
  OrganizationConformancePackStatuses?: OrganizationConformancePackStatus[] | undefined;

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribePendingAggregationRequestsRequest {
  /**
   * <p>The maximum number of evaluation results returned on each page.
   * 			The default is maximum. If you specify 0, Config uses the
   * 			default.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>An object that represents the account ID and region of an
 * 			aggregator account that is requesting authorization but is not yet
 * 			authorized.</p>
 * @public
 */
export interface PendingAggregationRequest {
  /**
   * <p>The 12-digit account ID of the account requesting to aggregate
   * 			data.</p>
   * @public
   */
  RequesterAccountId?: string | undefined;

  /**
   * <p>The region requesting to aggregate data. </p>
   * @public
   */
  RequesterAwsRegion?: string | undefined;
}

/**
 * @public
 */
export interface DescribePendingAggregationRequestsResponse {
  /**
   * <p>Returns a PendingAggregationRequests object.</p>
   * @public
   */
  PendingAggregationRequests?: PendingAggregationRequest[] | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRemediationConfigurationsRequest {
  /**
   * <p>A list of Config rule names of remediation configurations for which you want details. </p>
   * @public
   */
  ConfigRuleNames: string[] | undefined;
}

/**
 * <p>Amazon Web Services Systems Manager (SSM) specific remediation controls.</p>
 * @public
 */
export interface SsmControls {
  /**
   * <p>The maximum percentage of remediation actions allowed to run in parallel on the non-compliant resources for that specific rule. You can specify a percentage, such as 10%. The default value is 10. </p>
   * @public
   */
  ConcurrentExecutionRatePercentage?: number | undefined;

  /**
   * <p>The percentage of errors that are allowed before SSM stops running automations on non-compliant resources for that specific rule.
   * 			You can specify a percentage of errors, for example 10%. If you do not specifiy a percentage, the default is 50%.
   * 			For example, if you set the ErrorPercentage to 40% for 10 non-compliant resources, then SSM stops running the automations when the fifth error is received. </p>
   * @public
   */
  ErrorPercentage?: number | undefined;
}

/**
 * <p>The controls that Config uses for executing remediations.</p>
 * @public
 */
export interface ExecutionControls {
  /**
   * <p>A SsmControls object.</p>
   * @public
   */
  SsmControls?: SsmControls | undefined;
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
 * <p>The dynamic value of the resource.</p>
 * @public
 */
export interface ResourceValue {
  /**
   * <p>The value is a resource ID.</p>
   * @public
   */
  Value: ResourceValueType | undefined;
}

/**
 * <p>The static value of the resource.</p>
 * @public
 */
export interface StaticValue {
  /**
   * <p>A list of values. For example, the ARN of the assumed role. </p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * <p>The value is either a dynamic (resource) value or a static value. You must select either a dynamic value or a static value.</p>
 * @public
 */
export interface RemediationParameterValue {
  /**
   * <p>The value is dynamic and changes at run-time.</p>
   * @public
   */
  ResourceValue?: ResourceValue | undefined;

  /**
   * <p>The value is static and does not change at run-time.</p>
   * @public
   */
  StaticValue?: StaticValue | undefined;
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
 * <p>An object that represents the details about the remediation configuration that includes the remediation action, parameters, and data to execute the action.</p>
 * @public
 */
export interface RemediationConfiguration {
  /**
   * <p>The name of the Config rule.</p>
   * @public
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>The type of the target. Target executes remediation. For example, SSM document.</p>
   * @public
   */
  TargetType: RemediationTargetType | undefined;

  /**
   * <p>Target ID is the name of the SSM document.</p>
   * @public
   */
  TargetId: string | undefined;

  /**
   * <p>Version of the target. For example, version of the SSM document.</p>
   *          <note>
   *             <p>If you make backward incompatible changes to the SSM document,
   * 			you must call PutRemediationConfiguration API again to ensure the remediations can run.</p>
   *          </note>
   * @public
   */
  TargetVersion?: string | undefined;

  /**
   * <p>An object of the RemediationParameterValue.</p>
   * @public
   */
  Parameters?: Record<string, RemediationParameterValue> | undefined;

  /**
   * <p>The type of a resource. </p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The remediation is triggered automatically.</p>
   * @public
   */
  Automatic?: boolean | undefined;

  /**
   * <p>An ExecutionControls object.</p>
   * @public
   */
  ExecutionControls?: ExecutionControls | undefined;

  /**
   * <p>The maximum number of failed attempts for auto-remediation. If you do not select a number, the default is 5.</p>
   *          <p>For example, if you specify MaximumAutomaticAttempts as 5 with RetryAttemptSeconds as 50 seconds,
   *
   * 			Config will put a RemediationException on your behalf for the failing resource after the 5th failed attempt within 50 seconds.</p>
   * @public
   */
  MaximumAutomaticAttempts?: number | undefined;

  /**
   * <p>Time window to determine whether or not to add a remediation exception to prevent infinite remediation attempts.
   * 			If <code>MaximumAutomaticAttempts</code> remediation attempts have been made under <code>RetryAttemptSeconds</code>, a remediation exception will be added to the resource.
   * 			If you do not select a number, the default is 60 seconds.
   * 		</p>
   *          <p>For example, if you specify <code>RetryAttemptSeconds</code> as 50 seconds and <code>MaximumAutomaticAttempts</code> as 5,
   * 			Config will run auto-remediations 5 times within 50 seconds before adding a remediation exception to the resource.</p>
   * @public
   */
  RetryAttemptSeconds?: number | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of remediation configuration.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Name of the service that owns the service-linked rule, if applicable.</p>
   * @public
   */
  CreatedByService?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRemediationConfigurationsResponse {
  /**
   * <p>Returns a remediation configuration object.</p>
   * @public
   */
  RemediationConfigurations?: RemediationConfiguration[] | undefined;
}

/**
 * @public
 */
export interface DescribeRemediationExceptionsRequest {
  /**
   * <p>The name of the Config rule.</p>
   * @public
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>An exception list of resource exception keys to be processed with the current request. Config adds exception for each resource key. For example, Config adds 3 exceptions for 3 resource keys. </p>
   * @public
   */
  ResourceKeys?: RemediationExceptionResourceKey[] | undefined;

  /**
   * <p>The maximum number of RemediationExceptionResourceKey returned on each page. The default is 25. If you specify 0, Config uses the default.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>An object that represents the details about the remediation exception. The details include the rule name, an explanation of an exception, the time when the exception will be deleted, the resource ID, and resource type. </p>
 * @public
 */
export interface RemediationException {
  /**
   * <p>The name of the Config rule.</p>
   * @public
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>The type of a resource.</p>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>The ID of the resource (for example., sg-xxxxxx).</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>An explanation of an remediation exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The time when the remediation exception will be deleted.</p>
   * @public
   */
  ExpirationTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeRemediationExceptionsResponse {
  /**
   * <p>Returns a list of remediation exception objects.</p>
   * @public
   */
  RemediationExceptions?: RemediationException[] | undefined;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRemediationExecutionStatusRequest {
  /**
   * <p>The name of the Config rule.</p>
   * @public
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>A list of resource keys to be processed with the current request. Each element in the list consists of the resource type and resource ID. </p>
   * @public
   */
  ResourceKeys?: ResourceKey[] | undefined;

  /**
   * <p>The maximum number of RemediationExecutionStatuses returned on each page. The default is maximum. If you specify 0, Config uses the default. </p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
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
 * <p>Name of the step from the SSM document.</p>
 * @public
 */
export interface RemediationExecutionStep {
  /**
   * <p>The details of the step.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The valid status of the step.</p>
   * @public
   */
  State?: RemediationExecutionStepState | undefined;

  /**
   * <p>An error message if the step was interrupted during execution.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The time when the step started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time when the step stopped.</p>
   * @public
   */
  StopTime?: Date | undefined;
}

/**
 * <p>Provides details of the current status of the invoked remediation action for that resource.</p>
 * @public
 */
export interface RemediationExecutionStatus {
  /**
   * <p>The details that identify a resource within Config, including
   * 			the resource type and resource ID.</p>
   * @public
   */
  ResourceKey?: ResourceKey | undefined;

  /**
   * <p>ENUM of the values.</p>
   * @public
   */
  State?: RemediationExecutionState | undefined;

  /**
   * <p>Details of every step.</p>
   * @public
   */
  StepDetails?: RemediationExecutionStep[] | undefined;

  /**
   * <p>Start time when the remediation was executed.</p>
   * @public
   */
  InvocationTime?: Date | undefined;

  /**
   * <p>The time when the remediation execution was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeRemediationExecutionStatusResponse {
  /**
   * <p>Returns a list of remediation execution statuses objects.</p>
   * @public
   */
  RemediationExecutionStatuses?: RemediationExecutionStatus[] | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
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
   * @public
   */
  RetentionConfigurationNames?: string[] | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>An object with the name of the retention configuration and the retention period in days. The object stores the configuration for data retention in Config.</p>
 * @public
 */
export interface RetentionConfiguration {
  /**
   * <p>The name of the retention configuration object.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Number of days Config stores your historical information.</p>
   *          <note>
   *             <p>Currently, only applicable to the configuration item history.</p>
   *          </note>
   * @public
   */
  RetentionPeriodInDays: number | undefined;
}

/**
 * @public
 */
export interface DescribeRetentionConfigurationsResponse {
  /**
   * <p>Returns a retention configuration object.</p>
   * @public
   */
  RetentionConfigurations?: RetentionConfiguration[] | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateResourceTypesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the specified configuration recorder.</p>
   * @public
   */
  ConfigurationRecorderArn: string | undefined;

  /**
   * <p>The list of resource types you want to remove from the recording group of the specified configuration recorder.</p>
   * @public
   */
  ResourceTypes: ResourceType[] | undefined;
}

/**
 * @public
 */
export interface DisassociateResourceTypesResponse {
  /**
   * <p>Records configuration changes to the resource types in scope.</p>
   *          <p>For more information about the configuration recorder,
   * 			see <a href="https://docs.aws.amazon.com/config/latest/developerguide/stop-start-recorder.html">
   *                <b>Working with the Configuration Recorder</b>
   *             </a> in the <i>Config Developer Guide</i>.</p>
   * @public
   */
  ConfigurationRecorder: ConfigurationRecorder | undefined;
}

/**
 * <p>Identifies an Amazon Web Services resource and indicates whether it complies
 * 			with the Config rule that it was evaluated against.</p>
 * @public
 */
export interface Evaluation {
  /**
   * <p>The type of Amazon Web Services resource that was evaluated.</p>
   * @public
   */
  ComplianceResourceType: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services resource that was evaluated.</p>
   * @public
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
   * @public
   */
  ComplianceType: ComplianceType | undefined;

  /**
   * <p>Supplementary information about how the evaluation determined
   * 			the compliance.</p>
   * @public
   */
  Annotation?: string | undefined;

  /**
   * <p>The time of the event in Config that triggered the
   * 			evaluation. For event-based evaluations, the time indicates when Config created the configuration item that triggered the evaluation.
   * 			For periodic evaluations, the time indicates when Config
   * 			triggered the evaluation at the frequency that you specified (for
   * 			example, every 24 hours).</p>
   * @public
   */
  OrderingTimestamp: Date | undefined;
}

/**
 * <p>Use EvaluationContext to group independently initiated proactive resource evaluations. For example, CFN Stack.
 * 			If you want to check just a resource definition, you do not need to provide evaluation context.</p>
 * @public
 */
export interface EvaluationContext {
  /**
   * <p>A unique EvaluationContextIdentifier ID for an EvaluationContext.</p>
   * @public
   */
  EvaluationContextIdentifier?: string | undefined;
}

/**
 * <p>The details of an Config evaluation. Provides the Amazon Web Services
 * 			resource that was evaluated, the compliance of the resource, related
 * 			time stamps, and supplementary information.</p>
 * @public
 */
export interface EvaluationResult {
  /**
   * <p>Uniquely identifies the evaluation result.</p>
   * @public
   */
  EvaluationResultIdentifier?: EvaluationResultIdentifier | undefined;

  /**
   * <p>Indicates whether the Amazon Web Services resource complies with the Config
   * 			rule that evaluated it.</p>
   *          <p>For the <code>EvaluationResult</code> data type, Config
   * 			supports only the <code>COMPLIANT</code>,
   * 			<code>NON_COMPLIANT</code>, and <code>NOT_APPLICABLE</code> values.
   * 			Config does not support the <code>INSUFFICIENT_DATA</code> value
   * 			for the <code>EvaluationResult</code> data type.</p>
   * @public
   */
  ComplianceType?: ComplianceType | undefined;

  /**
   * <p>The time when Config recorded the evaluation
   * 			result.</p>
   * @public
   */
  ResultRecordedTime?: Date | undefined;

  /**
   * <p>The time when the Config rule evaluated the Amazon Web Services
   * 			resource.</p>
   * @public
   */
  ConfigRuleInvokedTime?: Date | undefined;

  /**
   * <p>Supplementary information about how the evaluation determined
   * 			the compliance.</p>
   * @public
   */
  Annotation?: string | undefined;

  /**
   * <p>An encrypted token that associates an evaluation with an Config rule. The token identifies the rule, the Amazon Web Services resource being
   * 			evaluated, and the event that triggered the evaluation.</p>
   * @public
   */
  ResultToken?: string | undefined;
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
 * <p>Returns status details of an evaluation.</p>
 * @public
 */
export interface EvaluationStatus {
  /**
   * <p>The status of an execution. The valid values are In_Progress, Succeeded or Failed. </p>
   * @public
   */
  Status: ResourceEvaluationStatus | undefined;

  /**
   * <p>An explanation for failed execution status.</p>
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * <p>Identifies an Amazon Web Services resource and indicates whether it complies with the Config rule that it was evaluated against.</p>
 * @public
 */
export interface ExternalEvaluation {
  /**
   * <p>The evaluated compliance resource type. Config accepts <code>AWS::::Account</code> resource type.</p>
   * @public
   */
  ComplianceResourceType: string | undefined;

  /**
   * <p>The evaluated compliance resource ID. Config accepts only Amazon Web Services account ID.</p>
   * @public
   */
  ComplianceResourceId: string | undefined;

  /**
   * <p>The compliance of the Amazon Web Services resource. The valid values are <code>COMPLIANT, NON_COMPLIANT, </code> and <code>NOT_APPLICABLE</code>.</p>
   * @public
   */
  ComplianceType: ComplianceType | undefined;

  /**
   * <p>Supplementary information about the reason of compliance. For example, this task was completed on a specific date.</p>
   * @public
   */
  Annotation?: string | undefined;

  /**
   * <p>The time when the compliance was recorded. </p>
   * @public
   */
  OrderingTimestamp: Date | undefined;
}

/**
 * <p>List of each of the failed remediations with specific reasons.</p>
 * @public
 */
export interface FailedRemediationBatch {
  /**
   * <p>Returns a failure message. For example, the resource is already compliant.</p>
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * <p>Returns remediation configurations of the failed items.</p>
   * @public
   */
  FailedItems?: RemediationConfiguration[] | undefined;
}

/**
 * <p>List of each of the failed remediation exceptions with specific reasons.</p>
 * @public
 */
export interface FailedRemediationExceptionBatch {
  /**
   * <p>Returns a failure message. For example, the auto-remediation has failed.</p>
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * <p>Returns remediation exception resource key object of the failed items.</p>
   * @public
   */
  FailedItems?: RemediationException[] | undefined;
}

/**
 * <p>Details about the fields such as name of the field.</p>
 * @public
 */
export interface FieldInfo {
  /**
   * <p>Name of the field.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface GetAggregateComplianceDetailsByConfigRuleRequest {
  /**
   * <p>The name of the configuration aggregator.</p>
   * @public
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>The name of the Config rule for which you want compliance
   * 			information.</p>
   * @public
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>The 12-digit account ID of the source account.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The source region from where the data is aggregated.</p>
   * @public
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
   * @public
   */
  ComplianceType?: ComplianceType | undefined;

  /**
   * <p>The maximum number of evaluation results returned on each page.
   * 			The default is 50. You cannot specify a number greater than 100. If
   * 			you specify 0, Config uses the default.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAggregateComplianceDetailsByConfigRuleResponse {
  /**
   * <p>Returns an AggregateEvaluationResults object.</p>
   * @public
   */
  AggregateEvaluationResults?: AggregateEvaluationResult[] | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAggregateConfigRuleComplianceSummaryRequest {
  /**
   * <p>The name of the configuration aggregator.</p>
   * @public
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>Filters the results based on the
   * 			ConfigRuleComplianceSummaryFilters object.</p>
   * @public
   */
  Filters?: ConfigRuleComplianceSummaryFilters | undefined;

  /**
   * <p>Groups the result based on ACCOUNT_ID or AWS_REGION.</p>
   * @public
   */
  GroupByKey?: ConfigRuleComplianceSummaryGroupKey | undefined;

  /**
   * <p>The maximum number of evaluation results returned on each page.
   * 			The default is 1000. You cannot specify a number greater than 1000.
   * 			If you specify 0, Config uses the default.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAggregateConfigRuleComplianceSummaryResponse {
  /**
   * <p>Groups the result based on ACCOUNT_ID or AWS_REGION.</p>
   * @public
   */
  GroupByKey?: string | undefined;

  /**
   * <p>Returns a list of AggregateComplianceCounts object.</p>
   * @public
   */
  AggregateComplianceCounts?: AggregateComplianceCount[] | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAggregateConformancePackComplianceSummaryRequest {
  /**
   * <p>The name of the configuration aggregator.</p>
   * @public
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>Filters the results based on the <code>AggregateConformancePackComplianceSummaryFilters</code> object.</p>
   * @public
   */
  Filters?: AggregateConformancePackComplianceSummaryFilters | undefined;

  /**
   * <p>Groups the result based on Amazon Web Services account ID or Amazon Web Services Region.</p>
   * @public
   */
  GroupByKey?: AggregateConformancePackComplianceSummaryGroupKey | undefined;

  /**
   * <p>The maximum number of results returned on each page. The default is maximum. If you specify 0, Config uses the default.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAggregateConformancePackComplianceSummaryResponse {
  /**
   * <p>Returns a list of <code>AggregateConformancePackComplianceSummary</code> object.</p>
   * @public
   */
  AggregateConformancePackComplianceSummaries?: AggregateConformancePackComplianceSummary[] | undefined;

  /**
   * <p>Groups the result based on Amazon Web Services account ID or Amazon Web Services Region.</p>
   * @public
   */
  GroupByKey?: string | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Filters the resource count based on account ID, region, and resource type.</p>
 * @public
 */
export interface ResourceCountFilters {
  /**
   * <p>The type of the Amazon Web Services resource.</p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>The 12-digit ID of the account.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The region where the account is located.</p>
   * @public
   */
  Region?: string | undefined;
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
   * @public
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>Filters the results based on the <code>ResourceCountFilters</code> object.</p>
   * @public
   */
  Filters?: ResourceCountFilters | undefined;

  /**
   * <p>The key to group the resource counts.</p>
   * @public
   */
  GroupByKey?: ResourceCountGroupKey | undefined;

  /**
   * <p>The maximum number of <a>GroupedResourceCount</a> objects returned on each page. The default is 1000. You cannot specify a number greater than 1000. If you specify 0, Config uses the default.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The count of resources that are grouped by the group name.</p>
 * @public
 */
export interface GroupedResourceCount {
  /**
   * <p>The name of the group that can be region, account ID, or resource type. For example, region1, region2 if the region was chosen as <code>GroupByKey</code>.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The number of resources in the group.</p>
   * @public
   */
  ResourceCount: number | undefined;
}

/**
 * @public
 */
export interface GetAggregateDiscoveredResourceCountsResponse {
  /**
   * <p>The total number of resources that are present in an aggregator with the filters that you provide.</p>
   * @public
   */
  TotalDiscoveredResources: number | undefined;

  /**
   * <p>The key passed into the request object. If <code>GroupByKey</code> is not provided, the result will be empty.</p>
   * @public
   */
  GroupByKey?: string | undefined;

  /**
   * <p>Returns a list of GroupedResourceCount objects.</p>
   * @public
   */
  GroupedResourceCounts?: GroupedResourceCount[] | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAggregateResourceConfigRequest {
  /**
   * <p>The name of the configuration aggregator.</p>
   * @public
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>An object that identifies aggregate resource.</p>
   * @public
   */
  ResourceIdentifier: AggregateResourceIdentifier | undefined;
}

/**
 * @public
 */
export interface GetAggregateResourceConfigResponse {
  /**
   * <p>Returns a <code>ConfigurationItem</code> object.</p>
   * @public
   */
  ConfigurationItem?: ConfigurationItem | undefined;
}

/**
 * <p>The configuration item size is outside the allowable range.</p>
 * @public
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
 * <p>You have specified a resource that is either unknown or has not
 * 			been discovered.</p>
 * @public
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
 * <p></p>
 * @public
 */
export interface GetComplianceDetailsByConfigRuleRequest {
  /**
   * <p>The name of the Config rule for which you want compliance
   * 			information.</p>
   * @public
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>Filters the results by compliance.</p>
   *          <p>
   *             <code>INSUFFICIENT_DATA</code> is a valid <code>ComplianceType</code> that is returned when an Config rule cannot be evaluated. However, <code>INSUFFICIENT_DATA</code> cannot be used as a <code>ComplianceType</code> for filtering results.</p>
   * @public
   */
  ComplianceTypes?: ComplianceType[] | undefined;

  /**
   * <p>The maximum number of evaluation results returned on each page.
   * 			The default is 10. You cannot specify a number greater than 100. If
   * 			you specify 0, Config uses the default.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface GetComplianceDetailsByConfigRuleResponse {
  /**
   * <p>Indicates whether the Amazon Web Services resource complies with the specified
   * 			Config rule.</p>
   * @public
   */
  EvaluationResults?: EvaluationResult[] | undefined;

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface GetComplianceDetailsByResourceRequest {
  /**
   * <p>The type of the Amazon Web Services resource for which you want compliance
   * 			information.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services resource for which you want compliance
   * 			information.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>Filters the results by compliance.</p>
   *          <p>
   *             <code>INSUFFICIENT_DATA</code> is a valid <code>ComplianceType</code> that is returned when an Config rule cannot be evaluated. However, <code>INSUFFICIENT_DATA</code> cannot be used as a <code>ComplianceType</code> for filtering results.</p>
   * @public
   */
  ComplianceTypes?: ComplianceType[] | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The unique ID of Amazon Web Services resource execution for which you want to retrieve evaluation results. </p>
   *          <note>
   *             <p>You need to only provide either a <code>ResourceEvaluationID</code> or a <code>ResourceID </code>and <code>ResourceType</code>.</p>
   *          </note>
   * @public
   */
  ResourceEvaluationId?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface GetComplianceDetailsByResourceResponse {
  /**
   * <p>Indicates whether the specified Amazon Web Services resource complies each Config rule.</p>
   * @public
   */
  EvaluationResults?: EvaluationResult[] | undefined;

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface GetComplianceSummaryByConfigRuleResponse {
  /**
   * <p>The number of Config rules that are compliant and the
   * 			number that are noncompliant, up to a maximum of 25 for
   * 			each.</p>
   * @public
   */
  ComplianceSummary?: ComplianceSummary | undefined;
}

/**
 * <p></p>
 * @public
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
   * @public
   */
  ResourceTypes?: string[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface GetComplianceSummaryByResourceTypeResponse {
  /**
   * <p>The number of resources that are compliant and the number that
   * 			are noncompliant. If one or more resource types were provided with
   * 			the request, the numbers are returned for each resource type. The
   * 			maximum number returned is 100.</p>
   * @public
   */
  ComplianceSummariesByResourceType?: ComplianceSummaryByResourceType[] | undefined;
}

/**
 * @public
 */
export interface GetConformancePackComplianceDetailsRequest {
  /**
   * <p>Name of the conformance pack.</p>
   * @public
   */
  ConformancePackName: string | undefined;

  /**
   * <p>A <code>ConformancePackEvaluationFilters</code> object.</p>
   * @public
   */
  Filters?: ConformancePackEvaluationFilters | undefined;

  /**
   * <p>The maximum number of evaluation results returned on each page. If you do no specify a number, Config uses the default. The default is 100.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetConformancePackComplianceDetailsResponse {
  /**
   * <p>Name of the conformance pack.</p>
   * @public
   */
  ConformancePackName: string | undefined;

  /**
   * <p>Returns a list of <code>ConformancePackEvaluationResult</code> objects.</p>
   * @public
   */
  ConformancePackRuleEvaluationResults?: ConformancePackEvaluationResult[] | undefined;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetConformancePackComplianceSummaryRequest {
  /**
   * <p>Names of conformance packs.</p>
   * @public
   */
  ConformancePackNames: string[] | undefined;

  /**
   * <p>The maximum number of conformance packs returned on each page.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetConformancePackComplianceSummaryResponse {
  /**
   * <p>A list of <code>ConformancePackComplianceSummary</code> objects. </p>
   * @public
   */
  ConformancePackComplianceSummaryList?: ConformancePackComplianceSummary[] | undefined;

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCustomRulePolicyRequest {
  /**
   * <p>The name of your Config Custom Policy rule.</p>
   * @public
   */
  ConfigRuleName?: string | undefined;
}

/**
 * @public
 */
export interface GetCustomRulePolicyResponse {
  /**
   * <p>The policy definition containing the logic for your Config Custom Policy rule.</p>
   * @public
   */
  PolicyText?: string | undefined;
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
   * @public
   */
  resourceTypes?: string[] | undefined;

  /**
   * <p>The maximum number of <a>ResourceCount</a> objects
   * 			returned on each page. The default is 100. You cannot specify a
   * 			number greater than 100. If you specify 0, Config uses the
   * 			default.</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>An object that contains the resource type and the number of
 * 			resources.</p>
 * @public
 */
export interface ResourceCount {
  /**
   * <p>The resource type (for example,
   * 				<code>"AWS::EC2::Instance"</code>).</p>
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * <p>The number of resources.</p>
   * @public
   */
  count?: number | undefined;
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
   * @public
   */
  totalDiscoveredResources?: number | undefined;

  /**
   * <p>The list of <code>ResourceCount</code> objects. Each object is
   * 			listed in descending order by the number of resources.</p>
   * @public
   */
  resourceCounts?: ResourceCount[] | undefined;

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   * @public
   */
  nextToken?: string | undefined;
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
 * <p>Status filter object to filter results based on specific member account ID or status type for an organization Config rule. </p>
 * @public
 */
export interface StatusDetailFilters {
  /**
   * <p>The 12-digit account ID of the member account within an organization.</p>
   * @public
   */
  AccountId?: string | undefined;

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
   * @public
   */
  MemberAccountRuleStatus?: MemberAccountRuleStatus | undefined;
}

/**
 * @public
 */
export interface GetOrganizationConfigRuleDetailedStatusRequest {
  /**
   * <p>The name of your organization Config rule for which you want status details for member accounts.</p>
   * @public
   */
  OrganizationConfigRuleName: string | undefined;

  /**
   * <p>A <code>StatusDetailFilters</code> object.</p>
   * @public
   */
  Filters?: StatusDetailFilters | undefined;

  /**
   * <p>The maximum number of <code>OrganizationConfigRuleDetailedStatus</code> returned on each page. If you do not specify a number, Config uses the default. The default is 100.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Organization Config rule creation or deletion status in each member account. This includes the name of the rule, the status, error code and error message when the rule creation or deletion failed.</p>
 * @public
 */
export interface MemberAccountStatus {
  /**
   * <p>The 12-digit account ID of a member account.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The name of Config rule deployed in the member account.</p>
   * @public
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
   * @public
   */
  MemberAccountRuleStatus: MemberAccountRuleStatus | undefined;

  /**
   * <p>An error code that is returned when Config rule creation or deletion failed in the member account.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>An error message indicating that Config rule account creation or deletion has failed due to an error in the member account.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The timestamp of the last status update.</p>
   * @public
   */
  LastUpdateTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetOrganizationConfigRuleDetailedStatusResponse {
  /**
   * <p>A list of <code>MemberAccountStatus</code> objects.</p>
   * @public
   */
  OrganizationConfigRuleDetailedStatus?: MemberAccountStatus[] | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   * @public
   */
  NextToken?: string | undefined;
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
 * <p>Status filter object to filter results based on specific member account ID or status type for an organization conformance pack.</p>
 * @public
 */
export interface OrganizationResourceDetailedStatusFilters {
  /**
   * <p>The 12-digit account ID of the member account within an organization.</p>
   * @public
   */
  AccountId?: string | undefined;

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
   * @public
   */
  Status?: OrganizationResourceDetailedStatus | undefined;
}

/**
 * @public
 */
export interface GetOrganizationConformancePackDetailedStatusRequest {
  /**
   * <p>The name of organization conformance pack for which you want status details for member accounts.</p>
   * @public
   */
  OrganizationConformancePackName: string | undefined;

  /**
   * <p>An <code>OrganizationResourceDetailedStatusFilters</code> object.</p>
   * @public
   */
  Filters?: OrganizationResourceDetailedStatusFilters | undefined;

  /**
   * <p>The maximum number of <code>OrganizationConformancePackDetailedStatuses</code> returned on each page.
   * 			If you do not specify a number, Config uses the default. The default is 100. </p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Organization conformance pack creation or deletion status in each member account.
 * 			This includes the name of the conformance pack, the status, error code and error message
 * 			when the conformance pack creation or deletion failed. </p>
 * @public
 */
export interface OrganizationConformancePackDetailedStatus {
  /**
   * <p>The 12-digit account ID of a member account.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The name of conformance pack deployed in the member account.</p>
   * @public
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
   * @public
   */
  Status: OrganizationResourceDetailedStatus | undefined;

  /**
   * <p>An error code that is returned when conformance pack creation or
   * 			deletion failed in the member account. </p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>An error message indicating that conformance pack account creation or deletion
   * 			has failed due to an error in the member account. </p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The timestamp of the last status update.</p>
   * @public
   */
  LastUpdateTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetOrganizationConformancePackDetailedStatusResponse {
  /**
   * <p>A list of <code>OrganizationConformancePackDetailedStatus</code> objects. </p>
   * @public
   */
  OrganizationConformancePackDetailedStatuses?: OrganizationConformancePackDetailedStatus[] | undefined;

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetOrganizationCustomRulePolicyRequest {
  /**
   * <p>The name of your organization Config Custom Policy rule. </p>
   * @public
   */
  OrganizationConfigRuleName: string | undefined;
}

/**
 * @public
 */
export interface GetOrganizationCustomRulePolicyResponse {
  /**
   * <p>The policy definition containing the logic for your organization Config Custom Policy rule.</p>
   * @public
   */
  PolicyText?: string | undefined;
}

/**
 * <p>The input for the <a>GetResourceConfigHistory</a>
 * 			action.</p>
 * @public
 */
export interface GetResourceConfigHistoryRequest {
  /**
   * <p>The resource type.</p>
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * <p>The ID of the resource (for example.,
   * 			<code>sg-xxxxxx</code>).</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The chronologically latest time in the time range for which the history requested. If not specified,
   * 			current time is taken.</p>
   * @public
   */
  laterTime?: Date | undefined;

  /**
   * <p>The chronologically earliest time in the time range for which the history requested. If not
   * 			specified, the action returns paginated results that contain
   * 			configuration items that start when the first configuration item was
   * 			recorded.</p>
   * @public
   */
  earlierTime?: Date | undefined;

  /**
   * <p>The chronological order for configuration items listed. By
   * 			default, the results are listed in reverse chronological
   * 			order.</p>
   * @public
   */
  chronologicalOrder?: ChronologicalOrder | undefined;

  /**
   * <p>The maximum number of configuration items returned on each
   * 			page. The default is 10. You cannot specify a number greater than
   * 			100. If you specify 0, Config uses the default.</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The output for the <a>GetResourceConfigHistory</a>
 * 			action.</p>
 * @public
 */
export interface GetResourceConfigHistoryResponse {
  /**
   * <p>An array of <code>ConfigurationItems</code> Objects. Contatins the configuration history for one or more
   * 			resources.</p>
   * @public
   */
  configurationItems?: ConfigurationItem[] | undefined;

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The specified time range is not valid. The earlier time is not
 * 			chronologically before the later time.</p>
 * @public
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
   * @public
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
 * <p>Returns information about the resource being evaluated.</p>
 * @public
 */
export interface ResourceDetails {
  /**
   * <p>A unique resource ID for an evaluation.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The type of resource being evaluated.</p>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>The resource definition to be evaluated as per the resource configuration schema type.</p>
   * @public
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
   * @public
   */
  ResourceConfigurationSchemaType?: ResourceConfigurationSchemaType | undefined;
}

/**
 * @public
 */
export interface GetResourceEvaluationSummaryResponse {
  /**
   * <p>The unique <code>ResourceEvaluationId</code> of Amazon Web Services resource execution for which you want to retrieve the evaluation summary.</p>
   * @public
   */
  ResourceEvaluationId?: string | undefined;

  /**
   * <p>Lists results of the mode that you requested to retrieve the resource evaluation summary. The valid values are Detective or Proactive.</p>
   * @public
   */
  EvaluationMode?: EvaluationMode | undefined;

  /**
   * <p>Returns an <code>EvaluationStatus</code> object.</p>
   * @public
   */
  EvaluationStatus?: EvaluationStatus | undefined;

  /**
   * <p>The start timestamp when Config rule starts evaluating compliance for the provided resource details.</p>
   * @public
   */
  EvaluationStartTimestamp?: Date | undefined;

  /**
   * <p>The compliance status of the resource evaluation summary.</p>
   * @public
   */
  Compliance?: ComplianceType | undefined;

  /**
   * <p>Returns an <code>EvaluationContext</code> object.</p>
   * @public
   */
  EvaluationContext?: EvaluationContext | undefined;

  /**
   * <p>Returns a <code>ResourceDetails</code> object.</p>
   * @public
   */
  ResourceDetails?: ResourceDetails | undefined;
}

/**
 * @public
 */
export interface GetStoredQueryRequest {
  /**
   * <p>The name of the query.</p>
   * @public
   */
  QueryName: string | undefined;
}

/**
 * <p>Provides the details of a stored query.</p>
 * @public
 */
export interface StoredQuery {
  /**
   * <p>The ID of the query.</p>
   * @public
   */
  QueryId?: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the query. For example, arn:partition:service:region:account-id:resource-type/resource-name/resource-id.</p>
   * @public
   */
  QueryArn?: string | undefined;

  /**
   * <p>The name of the query.</p>
   * @public
   */
  QueryName: string | undefined;

  /**
   * <p>A unique description for the query.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The expression of the query. For example, <code>SELECT
   * 			resourceId,
   * 			resourceType,
   * 			supplementaryConfiguration.BucketVersioningConfiguration.status
   * 			WHERE
   * 			resourceType = 'AWS::S3::Bucket'
   * 			AND supplementaryConfiguration.BucketVersioningConfiguration.status = 'Off'.</code>
   *          </p>
   * @public
   */
  Expression?: string | undefined;
}

/**
 * @public
 */
export interface GetStoredQueryResponse {
  /**
   * <p>Returns a <code>StoredQuery</code> object.</p>
   * @public
   */
  StoredQuery?: StoredQuery | undefined;
}

/**
 * <p>Using the same client token with one or more different parameters. Specify a new client token with the parameter changes and try again.</p>
 * @public
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
 * <p>Your Amazon S3 bucket policy does not allow Config to
 * 			write to it.</p>
 * @public
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
 * <p>The configuration recorder name is not valid. The prefix "<code>AWSConfigurationRecorderFor</code>" is reserved for service-linked configuration recorders.</p>
 * @public
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
 * <p>The specified delivery channel name is not valid.</p>
 * @public
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
 * <p>The syntax of the query is incorrect.</p>
 * @public
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
 * <p>One of the following errors:</p>
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
 * @public
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
 * <p>The specified <code>ResultToken</code> is not valid.</p>
 * @public
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
 * <p>You have provided a null or empty Amazon Resource Name (ARN) for the IAM role assumed by Config and used by the customer managed configuration recorder.</p>
 * @public
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
 * <p>The specified Amazon S3 key prefix is not valid.</p>
 * @public
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
 * <p>The specified Amazon KMS Key ARN is not valid.</p>
 * @public
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
 * <p>The specified Amazon SNS topic does not exist.</p>
 * @public
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
 * <p>For <code>PutServiceLinkedConfigurationRecorder</code> API, this exception
 * 			is thrown if the number of service-linked roles in the account exceeds the limit.</p>
 *          <p>For <code>StartConfigRulesEvaluation</code> API, this exception
 * 			is thrown if an evaluation is in progress or if you call the <a>StartConfigRulesEvaluation</a> API more than once per
 * 			minute.</p>
 *          <p>For <code>PutConfigurationAggregator</code> API, this exception
 * 			is thrown if the number of accounts and aggregators exceeds the
 * 			limit.</p>
 * @public
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
 * <p>Filters the results by resource account ID, region, resource ID, and resource name.</p>
 * @public
 */
export interface ResourceFilters {
  /**
   * <p>The 12-digit source account ID.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * <p>The source region.</p>
   * @public
   */
  Region?: string | undefined;
}

/**
 * @public
 */
export interface ListAggregateDiscoveredResourcesRequest {
  /**
   * <p>The name of the configuration aggregator. </p>
   * @public
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>The type of resources that you want Config to list in the response.</p>
   * @public
   */
  ResourceType: ResourceType | undefined;

  /**
   * <p>Filters the results based on the <code>ResourceFilters</code> object.</p>
   * @public
   */
  Filters?: ResourceFilters | undefined;

  /**
   * <p>The maximum number of resource identifiers returned on each page. You cannot specify a number greater than 100. If you specify 0, Config uses the default.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAggregateDiscoveredResourcesResponse {
  /**
   * <p>Returns a list of <code>ResourceIdentifiers</code> objects.</p>
   * @public
   */
  ResourceIdentifiers?: AggregateResourceIdentifier[] | undefined;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}
