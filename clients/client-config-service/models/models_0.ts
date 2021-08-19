import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>A collection of accounts and regions.</p>
 */
export interface AccountAggregationSource {
  /**
   * <p>The 12-digit account ID of the account being aggregated.
   * 		</p>
   */
  AccountIds: string[] | undefined;

  /**
   * <p>If true, aggregate existing AWS Config regions and future
   * 			regions.</p>
   */
  AllAwsRegions?: boolean;

  /**
   * <p>The source regions being aggregated.</p>
   */
  AwsRegions?: string[];
}

export namespace AccountAggregationSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountAggregationSource): any => ({
    ...obj,
  });
}

/**
 * <p>The number of AWS resources or AWS Config rules responsible for
 * 			the current compliance of the item, up to a maximum
 * 			number.</p>
 */
export interface ComplianceContributorCount {
  /**
   * <p>The number of AWS resources or AWS Config rules responsible for
   * 			the current compliance of the item.</p>
   */
  CappedCount?: number;

  /**
   * <p>Indicates whether the maximum count is reached.</p>
   */
  CapExceeded?: boolean;
}

export namespace ComplianceContributorCount {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComplianceContributorCount): any => ({
    ...obj,
  });
}

export enum ComplianceType {
  Compliant = "COMPLIANT",
  Insufficient_Data = "INSUFFICIENT_DATA",
  Non_Compliant = "NON_COMPLIANT",
  Not_Applicable = "NOT_APPLICABLE",
}

/**
 * <p>Indicates whether an AWS resource or AWS Config rule is
 * 			compliant and provides the number of contributors that affect the
 * 			compliance.</p>
 */
export interface Compliance {
  /**
   * <p>Indicates whether an AWS resource or AWS Config rule is
   * 			compliant.</p>
   * 		       <p>A resource is compliant if it complies with all of the AWS
   * 			Config rules that evaluate it. A resource is noncompliant if it does
   * 			not comply with one or more of these rules.</p>
   * 		       <p>A rule is compliant if all of the resources that the rule
   * 			evaluates comply with it. A rule is noncompliant if any of these
   * 			resources do not comply.</p>
   * 		       <p>AWS Config returns the <code>INSUFFICIENT_DATA</code> value
   * 			when no evaluation results are available for the AWS resource or AWS
   * 			Config rule.</p>
   * 		       <p>For the <code>Compliance</code> data type, AWS Config supports
   * 			only <code>COMPLIANT</code>, <code>NON_COMPLIANT</code>, and
   * 				<code>INSUFFICIENT_DATA</code> values. AWS Config does not
   * 			support the <code>NOT_APPLICABLE</code> value for the
   * 				<code>Compliance</code> data type.</p>
   */
  ComplianceType?: ComplianceType | string;

  /**
   * <p>The number of AWS resources or AWS Config rules that cause a
   * 			result of <code>NON_COMPLIANT</code>, up to a maximum
   * 			number.</p>
   */
  ComplianceContributorCount?: ComplianceContributorCount;
}

export namespace Compliance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Compliance): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates whether an AWS Config rule is compliant based on
 * 			account ID, region, compliance, and rule name.</p>
 * 		       <p>A rule is compliant if all of the resources that the rule
 * 			evaluated comply with it. It is noncompliant if any of these
 * 			resources do not comply.</p>
 */
export interface AggregateComplianceByConfigRule {
  /**
   * <p>The name of the AWS Config rule.</p>
   */
  ConfigRuleName?: string;

  /**
   * <p>Indicates whether an AWS resource or AWS Config rule is
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

export namespace AggregateComplianceByConfigRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AggregateComplianceByConfigRule): any => ({
    ...obj,
  });
}

export enum ConformancePackComplianceType {
  COMPLIANT = "COMPLIANT",
  INSUFFICIENT_DATA = "INSUFFICIENT_DATA",
  NON_COMPLIANT = "NON_COMPLIANT",
}

/**
 * <p>Provides the number of compliant and noncompliant rules within a conformance pack.
 * 			Also provides the compliance status of the conformance pack and the total rule count which includes compliant rules, noncompliant rules, and rules that cannot be evaluated due to insufficient data.</p>
 *
 * 		       <p>A conformance pack is compliant if all of the rules in a conformance packs are compliant. It is noncompliant if any of the rules are not compliant.
 * 			The compliance status of a conformance pack is INSUFFICIENT_DATA only if all rules within a conformance pack cannot be evaluated due to insufficient data.
 * 			If some of the rules in a conformance pack are compliant but the compliance status of other rules in that same conformance pack is INSUFFICIENT_DATA, the conformance pack shows compliant.</p>
 */
export interface AggregateConformancePackCompliance {
  /**
   * <p>The compliance status of the conformance pack.</p>
   */
  ComplianceType?: ConformancePackComplianceType | string;

  /**
   * <p>The number of compliant AWS Config Rules.</p>
   */
  CompliantRuleCount?: number;

  /**
   * <p>The number of noncompliant AWS Config Rules.</p>
   */
  NonCompliantRuleCount?: number;

  /**
   * <p>Total number of compliant rules, noncompliant rules, and the rules that do not have any applicable resources to evaluate upon resulting in insufficient data.</p>
   */
  TotalRuleCount?: number;
}

export namespace AggregateConformancePackCompliance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AggregateConformancePackCompliance): any => ({
    ...obj,
  });
}

/**
 * <p>Provides aggregate compliance of the conformance pack. Indicates whether a conformance pack is compliant based on the name of the conformance pack, account ID, and region.</p>
 * 		       <p>A conformance pack is compliant if all of the rules in a conformance packs are compliant. It is noncompliant if any of the rules are not compliant.
 * 			The compliance status of a conformance pack is INSUFFICIENT_DATA only if all rules within a conformance pack cannot be evaluated due to insufficient data.
 * 			If some of the rules in a conformance pack are compliant but the compliance status of other rules in that same conformance pack is INSUFFICIENT_DATA, the conformance pack shows compliant.</p>
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
   * <p>The 12-digit AWS account ID of the source account.</p>
   */
  AccountId?: string;

  /**
   * <p>The source AWS Region from where the data is aggregated.</p>
   */
  AwsRegion?: string;
}

export namespace AggregateComplianceByConformancePack {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AggregateComplianceByConformancePack): any => ({
    ...obj,
  });
}

/**
 * <p>The number of AWS Config rules or AWS resources that are
 * 			compliant and noncompliant.</p>
 */
export interface ComplianceSummary {
  /**
   * <p>The number of AWS Config rules or AWS resources that are
   * 			compliant, up to a maximum of 25 for rules and 100 for
   * 			resources.</p>
   */
  CompliantResourceCount?: ComplianceContributorCount;

  /**
   * <p>The number of AWS Config rules or AWS resources that are
   * 			noncompliant, up to a maximum of 25 for rules and 100 for
   * 			resources.</p>
   */
  NonCompliantResourceCount?: ComplianceContributorCount;

  /**
   * <p>The time that AWS Config created the compliance
   * 			summary.</p>
   */
  ComplianceSummaryTimestamp?: Date;
}

export namespace ComplianceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComplianceSummary): any => ({
    ...obj,
  });
}

/**
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
   * <p>The number of compliant and noncompliant AWS Config
   * 			rules.</p>
   */
  ComplianceSummary?: ComplianceSummary;
}

export namespace AggregateComplianceCount {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AggregateComplianceCount): any => ({
    ...obj,
  });
}

/**
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

export namespace AggregateConformancePackComplianceCount {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AggregateConformancePackComplianceCount): any => ({
    ...obj,
  });
}

/**
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
   * <p>The 12-digit AWS account ID of the source account.</p>
   */
  AccountId?: string;

  /**
   * <p>The source AWS Region from where the data is aggregated.</p>
   */
  AwsRegion?: string;
}

export namespace AggregateConformancePackComplianceFilters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AggregateConformancePackComplianceFilters): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a summary of compliance based on either account ID or region. </p>
 */
export interface AggregateConformancePackComplianceSummary {
  /**
   * <p>Returns an <code>AggregateConformancePackComplianceCount</code> object. </p>
   */
  ComplianceSummary?: AggregateConformancePackComplianceCount;

  /**
   * <p>Groups the result based on AWS Account ID or AWS Region.</p>
   */
  GroupName?: string;
}

export namespace AggregateConformancePackComplianceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AggregateConformancePackComplianceSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Filters the results based on account ID and region. </p>
 */
export interface AggregateConformancePackComplianceSummaryFilters {
  /**
   * <p>The 12-digit AWS account ID of the source account.</p>
   */
  AccountId?: string;

  /**
   * <p>The source AWS Region from where the data is aggregated.</p>
   */
  AwsRegion?: string;
}

export namespace AggregateConformancePackComplianceSummaryFilters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AggregateConformancePackComplianceSummaryFilters): any => ({
    ...obj,
  });
}

export enum AggregateConformancePackComplianceSummaryGroupKey {
  ACCOUNT_ID = "ACCOUNT_ID",
  AWS_REGION = "AWS_REGION",
}

export enum AggregatedSourceStatusType {
  FAILED = "FAILED",
  OUTDATED = "OUTDATED",
  SUCCEEDED = "SUCCEEDED",
}

export enum AggregatedSourceType {
  ACCOUNT = "ACCOUNT",
  ORGANIZATION = "ORGANIZATION",
}

/**
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
   * 		       <ul>
   *             <li>
   * 				           <p>Valid value FAILED indicates errors while moving
   * 					data.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Valid value SUCCEEDED indicates the data was
   * 					successfully moved.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Valid value OUTDATED indicates the data is not the most
   * 					recent.</p>
   * 			         </li>
   *          </ul>
   */
  LastUpdateStatus?: AggregatedSourceStatusType | string;

  /**
   * <p>The time of the last update.</p>
   */
  LastUpdateTime?: Date;

  /**
   * <p>The error code that AWS Config returned when the source account
   * 			aggregation last failed.</p>
   */
  LastErrorCode?: string;

  /**
   * <p>The message indicating that the source account aggregation
   * 			failed due to an error.</p>
   */
  LastErrorMessage?: string;
}

export namespace AggregatedSourceStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AggregatedSourceStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies an AWS Config rule that evaluated an AWS resource,
 * 			and provides the type and ID of the resource that the rule
 * 			evaluated.</p>
 */
export interface EvaluationResultQualifier {
  /**
   * <p>The name of the AWS Config rule that was used in the
   * 			evaluation.</p>
   */
  ConfigRuleName?: string;

  /**
   * <p>The type of AWS resource that was evaluated.</p>
   */
  ResourceType?: string;

  /**
   * <p>The ID of the evaluated AWS resource.</p>
   */
  ResourceId?: string;
}

export namespace EvaluationResultQualifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EvaluationResultQualifier): any => ({
    ...obj,
  });
}

/**
 * <p>Uniquely identifies an evaluation result.</p>
 */
export interface EvaluationResultIdentifier {
  /**
   * <p>Identifies an AWS Config rule used to evaluate an AWS resource,
   * 			and provides the type and ID of the evaluated resource.</p>
   */
  EvaluationResultQualifier?: EvaluationResultQualifier;

  /**
   * <p>The time of the event that triggered the evaluation of your AWS
   * 			resources. The time can indicate when AWS Config delivered a
   * 			configuration item change notification, or it can indicate when AWS
   * 			Config delivered the configuration snapshot, depending on which
   * 			event triggered the evaluation.</p>
   */
  OrderingTimestamp?: Date;
}

export namespace EvaluationResultIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EvaluationResultIdentifier): any => ({
    ...obj,
  });
}

/**
 * <p>The details of an AWS Config evaluation for an account ID and
 * 			region in an aggregator. Provides the AWS resource that was
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
   * 		       <p>For the <code>AggregationEvaluationResult</code> data type, AWS
   * 			Config supports only the <code>COMPLIANT</code> and
   * 				<code>NON_COMPLIANT</code>. AWS Config does not support the
   * 				<code>NOT_APPLICABLE</code> and <code>INSUFFICIENT_DATA</code>
   * 			value.</p>
   */
  ComplianceType?: ComplianceType | string;

  /**
   * <p>The time when AWS Config recorded the aggregate evaluation
   * 			result.</p>
   */
  ResultRecordedTime?: Date;

  /**
   * <p>The time when the AWS Config rule evaluated the AWS
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

export namespace AggregateEvaluationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AggregateEvaluationResult): any => ({
    ...obj,
  });
}

export enum ResourceType {
  AccountPublicAccessBlock = "AWS::S3::AccountPublicAccessBlock",
  Alarm = "AWS::CloudWatch::Alarm",
  Api = "AWS::ApiGatewayV2::Api",
  Application = "AWS::ElasticBeanstalk::Application",
  ApplicationVersion = "AWS::ElasticBeanstalk::ApplicationVersion",
  AssociationCompliance = "AWS::SSM::AssociationCompliance",
  AutoScalingGroup = "AWS::AutoScaling::AutoScalingGroup",
  BackupPlan = "AWS::Backup::BackupPlan",
  BackupRecoveryPoint = "AWS::Backup::RecoveryPoint",
  BackupSelection = "AWS::Backup::BackupSelection",
  BackupVault = "AWS::Backup::BackupVault",
  Bucket = "AWS::S3::Bucket",
  Certificate = "AWS::ACM::Certificate",
  CloudFormationProduct = "AWS::ServiceCatalog::CloudFormationProduct",
  CloudFormationProvisionedProduct = "AWS::ServiceCatalog::CloudFormationProvisionedProduct",
  Cluster = "AWS::Redshift::Cluster",
  ClusterParameterGroup = "AWS::Redshift::ClusterParameterGroup",
  ClusterSecurityGroup = "AWS::Redshift::ClusterSecurityGroup",
  ClusterSnapshot = "AWS::Redshift::ClusterSnapshot",
  ClusterSubnetGroup = "AWS::Redshift::ClusterSubnetGroup",
  ConformancePackCompliance = "AWS::Config::ConformancePackCompliance",
  CustomerGateway = "AWS::EC2::CustomerGateway",
  DBCluster = "AWS::RDS::DBCluster",
  DBClusterSnapshot = "AWS::RDS::DBClusterSnapshot",
  DBInstance = "AWS::RDS::DBInstance",
  DBSecurityGroup = "AWS::RDS::DBSecurityGroup",
  DBSnapshot = "AWS::RDS::DBSnapshot",
  DBSubnetGroup = "AWS::RDS::DBSubnetGroup",
  Distribution = "AWS::CloudFront::Distribution",
  Domain = "AWS::Elasticsearch::Domain",
  ECRRepository = "AWS::ECR::Repository",
  ECSCluster = "AWS::ECS::Cluster",
  ECSService = "AWS::ECS::Service",
  ECSTaskDefinition = "AWS::ECS::TaskDefinition",
  EFSAccessPoint = "AWS::EFS::AccessPoint",
  EFSFileSystem = "AWS::EFS::FileSystem",
  EIP = "AWS::EC2::EIP",
  EKSCluster = "AWS::EKS::Cluster",
  EgressOnlyInternetGateway = "AWS::EC2::EgressOnlyInternetGateway",
  EncryptionConfig = "AWS::XRay::EncryptionConfig",
  Environment = "AWS::ElasticBeanstalk::Environment",
  EventSubscription = "AWS::RDS::EventSubscription",
  FileData = "AWS::SSM::FileData",
  FlowLog = "AWS::EC2::FlowLog",
  Function = "AWS::Lambda::Function",
  Group = "AWS::IAM::Group",
  Host = "AWS::EC2::Host",
  IPSetV2 = "AWS::WAFv2::IPSet",
  Instance = "AWS::EC2::Instance",
  InternetGateway = "AWS::EC2::InternetGateway",
  Key = "AWS::KMS::Key",
  LaunchConfiguration = "AWS::AutoScaling::LaunchConfiguration",
  LoadBalancer = "AWS::ElasticLoadBalancing::LoadBalancer",
  LoadBalancerV2 = "AWS::ElasticLoadBalancingV2::LoadBalancer",
  ManagedInstanceInventory = "AWS::SSM::ManagedInstanceInventory",
  ManagedRuleSetV2 = "AWS::WAFv2::ManagedRuleSet",
  NatGateway = "AWS::EC2::NatGateway",
  NetworkAcl = "AWS::EC2::NetworkAcl",
  NetworkFirewallFirewall = "AWS::NetworkFirewall::Firewall",
  NetworkFirewallFirewallPolicy = "AWS::NetworkFirewall::FirewallPolicy",
  NetworkFirewallRuleGroup = "AWS::NetworkFirewall::RuleGroup",
  NetworkInterface = "AWS::EC2::NetworkInterface",
  PatchCompliance = "AWS::SSM::PatchCompliance",
  Pipeline = "AWS::CodePipeline::Pipeline",
  Policy = "AWS::IAM::Policy",
  Portfolio = "AWS::ServiceCatalog::Portfolio",
  Project = "AWS::CodeBuild::Project",
  Protection = "AWS::Shield::Protection",
  QLDBLedger = "AWS::QLDB::Ledger",
  Queue = "AWS::SQS::Queue",
  RateBasedRule = "AWS::WAF::RateBasedRule",
  RedshiftEventSubscription = "AWS::Redshift::EventSubscription",
  RegexPatternSetV2 = "AWS::WAFv2::RegexPatternSet",
  RegionalProtection = "AWS::ShieldRegional::Protection",
  RegionalRateBasedRule = "AWS::WAFRegional::RateBasedRule",
  RegionalRule = "AWS::WAFRegional::Rule",
  RegionalRuleGroup = "AWS::WAFRegional::RuleGroup",
  RegionalWebACL = "AWS::WAFRegional::WebACL",
  RegisteredHAInstance = "AWS::EC2::RegisteredHAInstance",
  ResourceCompliance = "AWS::Config::ResourceCompliance",
  RestApi = "AWS::ApiGateway::RestApi",
  Role = "AWS::IAM::Role",
  RouteTable = "AWS::EC2::RouteTable",
  Rule = "AWS::WAF::Rule",
  RuleGroup = "AWS::WAF::RuleGroup",
  RuleGroupV2 = "AWS::WAFv2::RuleGroup",
  ScalingPolicy = "AWS::AutoScaling::ScalingPolicy",
  ScheduledAction = "AWS::AutoScaling::ScheduledAction",
  Secret = "AWS::SecretsManager::Secret",
  SecurityGroup = "AWS::EC2::SecurityGroup",
  Stack = "AWS::CloudFormation::Stack",
  Stage = "AWS::ApiGateway::Stage",
  StageV2 = "AWS::ApiGatewayV2::Stage",
  StreamingDistribution = "AWS::CloudFront::StreamingDistribution",
  Subnet = "AWS::EC2::Subnet",
  Table = "AWS::DynamoDB::Table",
  Topic = "AWS::SNS::Topic",
  Trail = "AWS::CloudTrail::Trail",
  User = "AWS::IAM::User",
  VPC = "AWS::EC2::VPC",
  VPCEndpoint = "AWS::EC2::VPCEndpoint",
  VPCEndpointService = "AWS::EC2::VPCEndpointService",
  VPCPeeringConnection = "AWS::EC2::VPCPeeringConnection",
  VPNConnection = "AWS::EC2::VPNConnection",
  VPNGateway = "AWS::EC2::VPNGateway",
  Volume = "AWS::EC2::Volume",
  WebACL = "AWS::WAF::WebACL",
  WebACLV2 = "AWS::WAFv2::WebACL",
}

/**
 * <p>The details that identify a resource that is collected by AWS Config aggregator, including the resource type, ID, (if available) the custom resource name, the source account, and source region.</p>
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
   * <p>The ID of the AWS resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The type of the AWS resource.</p>
   */
  ResourceType: ResourceType | string | undefined;

  /**
   * <p>The name of the AWS resource.</p>
   */
  ResourceName?: string;
}

export namespace AggregateResourceIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AggregateResourceIdentifier): any => ({
    ...obj,
  });
}

/**
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

export namespace AggregationAuthorization {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AggregationAuthorization): any => ({
    ...obj,
  });
}

export enum ConfigurationItemStatus {
  OK = "OK",
  ResourceDeleted = "ResourceDeleted",
  ResourceDeletedNotRecorded = "ResourceDeletedNotRecorded",
  ResourceDiscovered = "ResourceDiscovered",
  ResourceNotRecorded = "ResourceNotRecorded",
}

/**
 * <p>The detailed configuration of a specified resource.</p>
 */
export interface BaseConfigurationItem {
  /**
   * <p>The version number of the resource configuration.</p>
   */
  version?: string;

  /**
   * <p>The 12-digit AWS account ID associated with the resource.</p>
   */
  accountId?: string;

  /**
   * <p>The time when the configuration recording was initiated.</p>
   */
  configurationItemCaptureTime?: Date;

  /**
   * <p>The configuration item status. The valid values are:</p>
   *
   * 		       <ul>
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
   * 		       <note>
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
   * <p>The type of AWS resource.</p>
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
   * <p>Configuration attributes that AWS Config returns for certain
   * 			resource types to supplement the information returned for the
   * 			configuration parameter.</p>
   */
  supplementaryConfiguration?: { [key: string]: string };
}

export namespace BaseConfigurationItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BaseConfigurationItem): any => ({
    ...obj,
  });
}

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

export namespace BatchGetAggregateResourceConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetAggregateResourceConfigRequest): any => ({
    ...obj,
  });
}

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

export namespace BatchGetAggregateResourceConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetAggregateResourceConfigResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You have specified a configuration aggregator that does not exist.</p>
 */
export interface NoSuchConfigurationAggregatorException extends __SmithyException, $MetadataBearer {
  name: "NoSuchConfigurationAggregatorException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoSuchConfigurationAggregatorException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoSuchConfigurationAggregatorException): any => ({
    ...obj,
  });
}

/**
 * <p>The requested action is not valid.</p>
 * 		       <p>For PutStoredQuery, you will see this exception if there are missing required fields or if the input value fails the validation, or if you are trying to create more than 300 queries.</p>
 * 		       <p>For GetStoredQuery, ListStoredQuery, and DeleteStoredQuery you will see this exception if there are missing required fields or if the input value fails the validation.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

/**
 * <p>The details that identify a resource within AWS Config, including
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

export namespace ResourceKey {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceKey): any => ({
    ...obj,
  });
}

export interface BatchGetResourceConfigRequest {
  /**
   * <p>A list of resource keys to be processed with the current
   * 			request. Each element in the list consists of the resource type and
   * 			resource ID.</p>
   */
  resourceKeys: ResourceKey[] | undefined;
}

export namespace BatchGetResourceConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetResourceConfigRequest): any => ({
    ...obj,
  });
}

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

export namespace BatchGetResourceConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetResourceConfigResponse): any => ({
    ...obj,
  });
}

/**
 * <p>There are no configuration recorders available to provide the
 * 			role needed to describe your resources. Create a configuration
 * 			recorder.</p>
 */
export interface NoAvailableConfigurationRecorderException extends __SmithyException, $MetadataBearer {
  name: "NoAvailableConfigurationRecorderException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoAvailableConfigurationRecorderException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoAvailableConfigurationRecorderException): any => ({
    ...obj,
  });
}

export enum ChronologicalOrder {
  Forward = "Forward",
  Reverse = "Reverse",
}

/**
 * <p>Indicates whether an AWS Config rule is compliant. A rule is
 * 			compliant if all of the resources that the rule evaluated comply
 * 			with it. A rule is noncompliant if any of these resources do not
 * 			comply.</p>
 */
export interface ComplianceByConfigRule {
  /**
   * <p>The name of the AWS Config rule.</p>
   */
  ConfigRuleName?: string;

  /**
   * <p>Indicates whether the AWS Config rule is compliant.</p>
   */
  Compliance?: Compliance;
}

export namespace ComplianceByConfigRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComplianceByConfigRule): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates whether an AWS resource that is evaluated according
 * 			to one or more AWS Config rules is compliant. A resource is
 * 			compliant if it complies with all of the rules that evaluate it. A
 * 			resource is noncompliant if it does not comply with one or more of
 * 			these rules.</p>
 */
export interface ComplianceByResource {
  /**
   * <p>The type of the AWS resource that was evaluated.</p>
   */
  ResourceType?: string;

  /**
   * <p>The ID of the AWS resource that was evaluated.</p>
   */
  ResourceId?: string;

  /**
   * <p>Indicates whether the AWS resource complies with all of the AWS
   * 			Config rules that evaluated it.</p>
   */
  Compliance?: Compliance;
}

export namespace ComplianceByResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComplianceByResource): any => ({
    ...obj,
  });
}

/**
 * <p>The number of AWS resources of a specific type that are
 * 			compliant or noncompliant, up to a maximum of 100 for
 * 			each.</p>
 */
export interface ComplianceSummaryByResourceType {
  /**
   * <p>The type of AWS resource.</p>
   */
  ResourceType?: string;

  /**
   * <p>The number of AWS resources that are compliant or noncompliant,
   * 			up to a maximum of 100 for each.</p>
   */
  ComplianceSummary?: ComplianceSummary;
}

export namespace ComplianceSummaryByResourceType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComplianceSummaryByResourceType): any => ({
    ...obj,
  });
}

export enum DeliveryStatus {
  Failure = "Failure",
  Not_Applicable = "Not_Applicable",
  Success = "Success",
}

/**
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

export namespace ConfigExportDeliveryInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfigExportDeliveryInfo): any => ({
    ...obj,
  });
}

export enum ConfigRuleState {
  ACTIVE = "ACTIVE",
  DELETING = "DELETING",
  DELETING_RESULTS = "DELETING_RESULTS",
  EVALUATING = "EVALUATING",
}

export enum MaximumExecutionFrequency {
  One_Hour = "One_Hour",
  Six_Hours = "Six_Hours",
  Three_Hours = "Three_Hours",
  Twelve_Hours = "Twelve_Hours",
  TwentyFour_Hours = "TwentyFour_Hours",
}

/**
 * <p>Defines which resources trigger an evaluation for an AWS Config
 * 			rule. The scope can include one or more resource types, a
 * 			combination of a tag key and value, or a combination of one resource
 * 			type and one resource ID. Specify a scope to constrain which
 * 			resources trigger an evaluation for a rule. Otherwise, evaluations
 * 			for the rule are triggered when any resource in your recording group
 * 			changes in configuration.</p>
 */
export interface Scope {
  /**
   * <p>The resource types of only those AWS resources that you want to
   * 			trigger an evaluation for the rule. You can only specify one type if
   * 			you also specify a resource ID for
   * 			<code>ComplianceResourceId</code>.</p>
   */
  ComplianceResourceTypes?: string[];

  /**
   * <p>The tag key that is applied to only those AWS resources that
   * 			you want to trigger an evaluation for the rule.</p>
   */
  TagKey?: string;

  /**
   * <p>The tag value applied to only those AWS resources that you want
   * 			to trigger an evaluation for the rule. If you specify a value for
   * 				<code>TagValue</code>, you must also specify a value for
   * 				<code>TagKey</code>.</p>
   */
  TagValue?: string;

  /**
   * <p>The ID of the only AWS resource that you want to trigger an
   * 			evaluation for the rule. If you specify a resource ID, you must
   * 			specify one resource type for
   * 			<code>ComplianceResourceTypes</code>.</p>
   */
  ComplianceResourceId?: string;
}

export namespace Scope {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Scope): any => ({
    ...obj,
  });
}

export enum Owner {
  Aws = "AWS",
  Custom_Lambda = "CUSTOM_LAMBDA",
}

export enum EventSource {
  Aws_Config = "aws.config",
}

export enum MessageType {
  ConfigurationItemChangeNotification = "ConfigurationItemChangeNotification",
  ConfigurationSnapshotDeliveryCompleted = "ConfigurationSnapshotDeliveryCompleted",
  OversizedConfigurationItemChangeNotification = "OversizedConfigurationItemChangeNotification",
  ScheduledNotification = "ScheduledNotification",
}

/**
 * <p>Provides the source and the message types that trigger AWS
 * 			Config to evaluate your AWS resources against a rule. It also
 * 			provides the frequency with which you want AWS Config to run
 * 			evaluations for the rule if the trigger type is periodic. You can
 * 			specify the parameter values for <code>SourceDetail</code> only for
 * 			custom rules. </p>
 */
export interface SourceDetail {
  /**
   * <p>The source of the event, such as an AWS service, that triggers
   * 			AWS Config to evaluate your AWS resources.</p>
   */
  EventSource?: EventSource | string;

  /**
   * <p>The type of notification that triggers AWS Config to run an
   * 			evaluation for a rule. You can specify the following notification
   * 			types:</p>
   *
   *
   * 		       <ul>
   *             <li>
   * 				           <p>
   * 					             <code>ConfigurationItemChangeNotification</code> - Triggers
   * 					an evaluation when AWS Config delivers a configuration item
   * 					as a result of a resource change.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>OversizedConfigurationItemChangeNotification</code>
   * 					- Triggers an evaluation when AWS Config delivers an
   * 					oversized configuration item. AWS Config may generate this
   * 					notification type when a resource changes and the
   * 					notification exceeds the maximum size allowed by Amazon
   * 					SNS.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>ScheduledNotification</code> - Triggers a
   * 					periodic evaluation at the frequency specified for
   * 						<code>MaximumExecutionFrequency</code>.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>ConfigurationSnapshotDeliveryCompleted</code> -
   * 					Triggers a periodic evaluation when AWS Config delivers a
   * 					configuration snapshot.</p>
   * 			         </li>
   *          </ul>
   *
   * 		       <p>If you want your custom rule to be triggered by configuration
   * 			changes, specify two SourceDetail objects, one for
   * 				<code>ConfigurationItemChangeNotification</code> and one for
   * 				<code>OversizedConfigurationItemChangeNotification</code>.</p>
   */
  MessageType?: MessageType | string;

  /**
   * <p>The frequency at which you want AWS Config to run evaluations
   * 			for a custom rule with a periodic trigger. If you specify a value
   * 			for <code>MaximumExecutionFrequency</code>, then
   * 				<code>MessageType</code> must use the
   * 				<code>ScheduledNotification</code> value.</p>
   *
   *
   *
   *
   *
   * 		       <note>
   * 			         <p>By default, rules with a periodic trigger are evaluated
   * 				every 24 hours. To change the frequency, specify a valid value
   * 				for the <code>MaximumExecutionFrequency</code>
   * 				parameter.</p>
   * 			         <p>Based on the valid value you choose, AWS Config runs
   * 				evaluations once for each valid value. For example, if you
   * 				choose <code>Three_Hours</code>, AWS Config runs evaluations
   * 				once every three hours. In this case, <code>Three_Hours</code>
   * 				is the frequency of this rule. </p>
   * 		       </note>
   */
  MaximumExecutionFrequency?: MaximumExecutionFrequency | string;
}

export namespace SourceDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Provides the AWS Config rule owner (AWS or customer), the rule
 * 			identifier, and the events that trigger the evaluation of your AWS
 * 			resources.</p>
 */
export interface Source {
  /**
   * <p>Indicates whether AWS or the customer owns and manages the AWS
   * 			Config rule.</p>
   */
  Owner: Owner | string | undefined;

  /**
   * <p>For AWS Config managed rules, a predefined identifier from a
   * 			list. For example, <code>IAM_PASSWORD_POLICY</code> is a managed
   * 			rule. To reference a managed rule, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html">Using AWS Managed Config Rules</a>.</p>
   * 		       <p>For custom rules, the identifier is the Amazon Resource Name
   * 			(ARN) of the rule's AWS Lambda function, such as
   * 				<code>arn:aws:lambda:us-east-2:123456789012:function:custom_rule_name</code>.</p>
   */
  SourceIdentifier: string | undefined;

  /**
   * <p>Provides the source and type of the event that causes AWS
   * 			Config to evaluate your AWS resources.</p>
   */
  SourceDetails?: SourceDetail[];
}

export namespace Source {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Source): any => ({
    ...obj,
  });
}

/**
 * <p>An AWS Config rule represents an AWS Lambda function that you
 * 			create for a custom rule or a predefined function for an AWS managed
 * 			rule. The function evaluates configuration items to assess whether
 * 			your AWS resources comply with your desired configurations. This
 * 			function can run when AWS Config detects a configuration change to
 * 			an AWS resource and at a periodic frequency that you choose (for
 * 			example, every 24 hours).</p>
 *
 * 		       <note>
 * 			         <p>You can use the AWS CLI and AWS SDKs if you want to create
 * 				a rule that triggers evaluations for your resources when AWS
 * 				Config delivers the configuration snapshot. For more
 * 				information, see <a>ConfigSnapshotDeliveryProperties</a>.</p>
 * 		       </note>
 * 		       <p>For more information about developing and using AWS Config
 * 			rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating AWS Resource Configurations with AWS Config</a>
 * 			in the <i>AWS Config Developer Guide</i>.</p>
 */
export interface ConfigRule {
  /**
   * <p>The name that you assign to the AWS Config rule. The name is
   * 			required if you are adding a new rule.</p>
   */
  ConfigRuleName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Config
   * 			rule.</p>
   */
  ConfigRuleArn?: string;

  /**
   * <p>The ID of the AWS Config rule.</p>
   */
  ConfigRuleId?: string;

  /**
   * <p>The description that you provide for the AWS Config
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
   * 		       <note>
   *             <p>The scope can be empty. </p>
   *          </note>
   */
  Scope?: Scope;

  /**
   * <p>Provides the rule owner (AWS or customer), the rule identifier,
   * 			and the notifications that cause the function to evaluate your AWS
   * 			resources.</p>
   */
  Source: Source | undefined;

  /**
   * <p>A string, in JSON format, that is passed to the AWS Config rule
   * 			Lambda function.</p>
   */
  InputParameters?: string;

  /**
   * <p>The maximum frequency with which AWS Config runs evaluations
   * 			for a rule. You can specify a value for
   * 				<code>MaximumExecutionFrequency</code> when:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>You are using an AWS managed rule that is triggered at
   * 					a periodic frequency.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Your custom rule is triggered when AWS Config delivers
   * 					the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p>
   * 			         </li>
   *          </ul>
   *
   *
   *
   * 		       <note>
   * 			         <p>By default, rules with a periodic trigger are evaluated
   * 				every 24 hours. To change the frequency, specify a valid value
   * 				for the <code>MaximumExecutionFrequency</code>
   * 				parameter.</p>
   * 		       </note>
   */
  MaximumExecutionFrequency?: MaximumExecutionFrequency | string;

  /**
   * <p>Indicates whether the AWS Config rule is active or is currently
   * 			being deleted by AWS Config. It can also indicate the evaluation
   * 			status for the AWS Config rule.</p>
   *
   * 		       <p>AWS Config sets the state of the rule to
   * 				<code>EVALUATING</code> temporarily after you use the
   * 				<code>StartConfigRulesEvaluation</code> request to evaluate your
   * 			resources against the AWS Config rule.</p>
   *
   * 		       <p>AWS Config sets the state of the rule to
   * 				<code>DELETING_RESULTS</code> temporarily after you use the
   * 				<code>DeleteEvaluationResults</code> request to delete the
   * 			current evaluation results for the AWS Config rule.</p>
   *
   * 		       <p>AWS Config temporarily sets the state of a rule to
   * 				<code>DELETING</code> after you use the
   * 				<code>DeleteConfigRule</code> request to delete the rule. After
   * 			AWS Config deletes the rule, the rule and all of its evaluations are
   * 			erased and are no longer available.</p>
   */
  ConfigRuleState?: ConfigRuleState | string;

  /**
   * <p>Service principal name of the service that created the
   * 			rule.</p>
   * 		       <note>
   * 			         <p>The field is populated only if the service linked rule is
   * 				created by a service. The field is empty if you create your own
   * 				rule.</p>
   * 		       </note>
   */
  CreatedBy?: string;
}

export namespace ConfigRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfigRule): any => ({
    ...obj,
  });
}

/**
 * <p>Filters the compliance results based on account ID, region,
 * 			compliance type, and rule name.</p>
 */
export interface ConfigRuleComplianceFilters {
  /**
   * <p>The name of the AWS Config rule.</p>
   */
  ConfigRuleName?: string;

  /**
   * <p>The rule compliance status.</p>
   * 		       <p>For the <code>ConfigRuleComplianceFilters</code> data type, AWS
   * 			Config supports only <code>COMPLIANT</code> and
   * 				<code>NON_COMPLIANT</code>. AWS Config does not support the
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

export namespace ConfigRuleComplianceFilters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfigRuleComplianceFilters): any => ({
    ...obj,
  });
}

/**
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

export namespace ConfigRuleComplianceSummaryFilters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfigRuleComplianceSummaryFilters): any => ({
    ...obj,
  });
}

export enum ConfigRuleComplianceSummaryGroupKey {
  ACCOUNT_ID = "ACCOUNT_ID",
  AWS_REGION = "AWS_REGION",
}

/**
 * <p>Status information for your AWS managed Config rules. The
 * 			status includes information such as the last time the rule ran, the
 * 			last time it failed, and the related error for the last
 * 			failure.</p>
 * 		       <p>This action does not return status information about custom AWS
 * 			Config rules.</p>
 */
export interface ConfigRuleEvaluationStatus {
  /**
   * <p>The name of the AWS Config rule.</p>
   */
  ConfigRuleName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Config
   * 			rule.</p>
   */
  ConfigRuleArn?: string;

  /**
   * <p>The ID of the AWS Config rule.</p>
   */
  ConfigRuleId?: string;

  /**
   * <p>The time that AWS Config last successfully invoked the AWS
   * 			Config rule to evaluate your AWS resources.</p>
   */
  LastSuccessfulInvocationTime?: Date;

  /**
   * <p>The time that AWS Config last failed to invoke the AWS Config
   * 			rule to evaluate your AWS resources.</p>
   */
  LastFailedInvocationTime?: Date;

  /**
   * <p>The time that AWS Config last successfully evaluated your AWS
   * 			resources against the rule.</p>
   */
  LastSuccessfulEvaluationTime?: Date;

  /**
   * <p>The time that AWS Config last failed to evaluate your AWS
   * 			resources against the rule.</p>
   */
  LastFailedEvaluationTime?: Date;

  /**
   * <p>The time that you first activated the AWS Config
   * 			rule.</p>
   */
  FirstActivatedTime?: Date;

  /**
   * <p>The time that you last turned off the AWS Config rule.</p>
   */
  LastDeactivatedTime?: Date;

  /**
   * <p>The error code that AWS Config returned when the rule last
   * 			failed.</p>
   */
  LastErrorCode?: string;

  /**
   * <p>The error message that AWS Config returned when the rule last
   * 			failed.</p>
   */
  LastErrorMessage?: string;

  /**
   * <p>Indicates whether AWS Config has evaluated your resources
   * 			against the rule at least once.</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   * 					             <code>true</code> - AWS Config has evaluated your AWS
   * 					resources against the rule at least once.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <code>false</code> - AWS Config has not once finished
   * 					evaluating your AWS resources against the rule.</p>
   * 			         </li>
   *          </ul>
   */
  FirstEvaluationStarted?: boolean;
}

export namespace ConfigRuleEvaluationStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfigRuleEvaluationStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Provides options for how often AWS Config delivers
 * 			configuration snapshots to the Amazon S3 bucket in your delivery
 * 			channel.</p>
 *
 *
 *
 *
 * 		       <p>The frequency for a rule that triggers evaluations for your
 * 			resources when AWS Config delivers the configuration snapshot is set
 * 			by one of two values, depending on which is less frequent:</p>
 *
 * 		       <ul>
 *             <li>
 * 				           <p>The value for the <code>deliveryFrequency</code>
 * 					parameter within the delivery channel configuration, which
 * 					sets how often AWS Config delivers configuration snapshots.
 * 					This value also sets how often AWS Config invokes
 * 					evaluations for AWS Config rules.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The value for the
 * 						<code>MaximumExecutionFrequency</code> parameter, which
 * 					sets the maximum frequency with which AWS Config invokes
 * 					evaluations for the rule. For more information, see <a>ConfigRule</a>.</p>
 * 			         </li>
 *          </ul>
 *
 * 		       <p>If the <code>deliveryFrequency</code> value is less frequent
 * 			than the <code>MaximumExecutionFrequency</code> value for a rule,
 * 			AWS Config invokes the rule only as often as the
 * 				<code>deliveryFrequency</code> value.</p>
 *
 * 		       <ol>
 *             <li>
 * 				           <p>For example, you want your rule to run evaluations when
 * 					AWS Config delivers the configuration snapshot.</p>
 * 			         </li>
 *             <li>
 * 				           <p>You specify the <code>MaximumExecutionFrequency</code>
 * 					value for <code>Six_Hours</code>. </p>
 * 			         </li>
 *             <li>
 * 				           <p>You then specify the delivery channel
 * 						<code>deliveryFrequency</code> value for
 * 						<code>TwentyFour_Hours</code>.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Because the value for <code>deliveryFrequency</code> is
 * 					less frequent than <code>MaximumExecutionFrequency</code>,
 * 					AWS Config invokes evaluations for the rule every 24 hours.
 * 				</p>
 * 			         </li>
 *          </ol>
 *
 *
 * 		       <p>You should set the <code>MaximumExecutionFrequency</code> value
 * 			to be at least as frequent as the <code>deliveryFrequency</code>
 * 			value. You can view the <code>deliveryFrequency</code> value by
 * 			using the <code>DescribeDeliveryChannnels</code> action.</p>
 *
 * 		       <p>To update the <code>deliveryFrequency</code> with which AWS
 * 			Config delivers your configuration snapshots, use the
 * 				<code>PutDeliveryChannel</code> action.</p>
 */
export interface ConfigSnapshotDeliveryProperties {
  /**
   * <p>The frequency with which AWS Config delivers configuration
   * 			snapshots.</p>
   */
  deliveryFrequency?: MaximumExecutionFrequency | string;
}

export namespace ConfigSnapshotDeliveryProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfigSnapshotDeliveryProperties): any => ({
    ...obj,
  });
}

/**
 * <p>A list that contains the status of the delivery of the
 * 			configuration stream notification to the Amazon SNS topic.</p>
 */
export interface ConfigStreamDeliveryInfo {
  /**
   * <p>Status of the last attempted delivery.</p>
   * 		       <p>
   * 			         <b>Note</b> Providing an SNS topic on a
   * 				<a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DeliveryChannel.html">DeliveryChannel</a> for AWS Config is optional. If the SNS
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

export namespace ConfigStreamDeliveryInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfigStreamDeliveryInfo): any => ({
    ...obj,
  });
}

/**
 * <p>This object contains regions to set up the aggregator and an IAM
 * 			role to retrieve organization details.</p>
 */
export interface OrganizationAggregationSource {
  /**
   * <p>ARN of the IAM role used to retrieve AWS Organization details
   * 			associated with the aggregator account.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The source regions being aggregated.</p>
   */
  AwsRegions?: string[];

  /**
   * <p>If true, aggregate existing AWS Config regions and future
   * 			regions.</p>
   */
  AllAwsRegions?: boolean;
}

export namespace OrganizationAggregationSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrganizationAggregationSource): any => ({
    ...obj,
  });
}

/**
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
   * <p>AWS service that created the configuration aggregator.</p>
   */
  CreatedBy?: string;
}

export namespace ConfigurationAggregator {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfigurationAggregator): any => ({
    ...obj,
  });
}

/**
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

export namespace Relationship {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Relationship): any => ({
    ...obj,
  });
}

/**
 * <p>A list that contains detailed configurations of a specified
 * 			resource.</p>
 */
export interface ConfigurationItem {
  /**
   * <p>The version number of the resource configuration.</p>
   */
  version?: string;

  /**
   * <p>The 12-digit AWS account ID associated with the
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
   *
   * 		       <ul>
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
   * 		       <note>
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
   * 		       <p>You can use MD5 hash to compare the states of two or more
   * 			configuration items that are associated with the same
   * 			resource.</p>
   */
  configurationItemMD5Hash?: string;

  /**
   * <p>Amazon Resource Name (ARN) associated with the resource.</p>
   */
  arn?: string;

  /**
   * <p>The type of AWS resource.</p>
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
  tags?: { [key: string]: string };

  /**
   * <p>A list of CloudTrail event IDs.</p>
   * 		       <p>A populated field indicates that the current configuration was
   * 			initiated by the events recorded in the CloudTrail log. For more
   * 			information about CloudTrail, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">What Is AWS CloudTrail</a>.</p>
   * 		       <p>An empty field indicates that the current configuration was not
   * 			initiated by any event. As of Version 1.3, the relatedEvents field is empty.
   * 			You can access the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_LookupEvents.html">LookupEvents API</a> in the <i>AWS CloudTrail API Reference</i> to retrieve the events for the resource.</p>
   */
  relatedEvents?: string[];

  /**
   * <p>A list of related AWS resources.</p>
   */
  relationships?: Relationship[];

  /**
   * <p>The description of the resource configuration.</p>
   */
  configuration?: string;

  /**
   * <p>Configuration attributes that AWS Config returns for certain
   * 			resource types to supplement the information returned for the
   * 				<code>configuration</code> parameter.</p>
   */
  supplementaryConfiguration?: { [key: string]: string };
}

export namespace ConfigurationItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfigurationItem): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the types of AWS resource for which AWS Config
 * 			records configuration changes.</p>
 * 		       <p>In the recording group, you specify whether all supported types
 * 			or specific types of resources are recorded.</p>
 * 		       <p>By default, AWS Config records configuration changes for all
 * 			supported types of regional resources that AWS Config discovers in
 * 			the region in which it is running. Regional resources are tied to a
 * 			region and can be used only in that region. Examples of regional
 * 			resources are EC2 instances and EBS volumes.</p>
 * 		       <p>You can also have AWS Config record configuration changes for
 * 			supported types of global resources (for example, IAM resources).
 * 			Global resources are not tied to an individual region and can be
 * 			used in all regions.</p>
 * 		       <important>
 * 			         <p>The configuration details for any global resource are the
 * 				same in all regions. If you customize AWS Config in multiple
 * 				regions to record global resources, it will create multiple
 * 				configuration items each time a global resource changes: one
 * 				configuration item for each region. These configuration items
 * 				will contain identical data. To prevent duplicate configuration
 * 				items, you should consider customizing AWS Config in only one
 * 				region to record global resources, unless you want the
 * 				configuration items to be available in multiple
 * 				regions.</p>
 * 		       </important>
 * 		       <p>If you don't want AWS Config to record all resources, you can
 * 			specify which types of resources it will record with the
 * 				<code>resourceTypes</code> parameter.</p>
 * 		       <p>For a list of supported resource types, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported Resource Types</a>.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html">Selecting Which Resources AWS Config Records</a>.</p>
 */
export interface RecordingGroup {
  /**
   * <p>Specifies whether AWS Config records configuration changes for
   * 			every supported type of regional resource.</p>
   * 		       <p>If you set this option to <code>true</code>, when AWS Config
   * 			adds support for a new type of regional resource, it starts
   * 			recording resources of that type automatically.</p>
   * 		       <p>If you set this option to <code>true</code>, you cannot
   * 			enumerate a list of <code>resourceTypes</code>.</p>
   */
  allSupported?: boolean;

  /**
   * <p>Specifies whether AWS Config includes all supported types of
   * 			global resources (for example, IAM resources) with the resources
   * 			that it records.</p>
   * 		       <p>Before you can set this option to <code>true</code>, you must
   * 			set the <code>allSupported</code> option to
   * 			<code>true</code>.</p>
   * 		       <p>If you set this option to <code>true</code>, when AWS Config
   * 			adds support for a new type of global resource, it starts recording
   * 			resources of that type automatically.</p>
   * 		       <p>The configuration details for any global resource are the same
   * 			in all regions. To prevent duplicate configuration items, you should
   * 			consider customizing AWS Config in only one region to record global
   * 			resources.</p>
   */
  includeGlobalResourceTypes?: boolean;

  /**
   * <p>A comma-separated list that specifies the types of AWS
   * 			resources for which AWS Config records configuration changes (for
   * 			example, <code>AWS::EC2::Instance</code> or
   * 				<code>AWS::CloudTrail::Trail</code>).</p>
   * 		       <p>To record all configuration changes, you must
   * 			set the <code>allSupported</code> option to
   * 			<code>true</code>.</p>
   * 		       <p>If you set this option to <code>false</code>, when AWS Config
   * 			adds support for a new type of resource, it will not record
   * 			resources of that type unless you manually add that type to your
   * 			recording group.</p>
   * 		       <p>For a list of valid <code>resourceTypes</code> values, see the
   * 				<b>resourceType Value</b> column in
   * 				<a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported AWS Resource Types</a>.</p>
   */
  resourceTypes?: (ResourceType | string)[];
}

export namespace RecordingGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecordingGroup): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents the recording of configuration
 * 			changes of an AWS resource.</p>
 */
export interface ConfigurationRecorder {
  /**
   * <p>The name of the recorder. By default, AWS Config automatically
   * 			assigns the name "default" when creating the configuration recorder.
   * 			You cannot change the assigned name.</p>
   */
  name?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the IAM role used to describe the
   * 			AWS resources associated with the account.</p>
   */
  roleARN?: string;

  /**
   * <p>Specifies the types of AWS resources for which AWS Config
   * 			records configuration changes.</p>
   */
  recordingGroup?: RecordingGroup;
}

export namespace ConfigurationRecorder {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfigurationRecorder): any => ({
    ...obj,
  });
}

export enum RecorderStatus {
  Failure = "Failure",
  Pending = "Pending",
  Success = "Success",
}

/**
 * <p>The current status of the configuration recorder.</p>
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
   * <p>The last (previous) status of the recorder.</p>
   */
  lastStatus?: RecorderStatus | string;

  /**
   * <p>The error code indicating that the recording failed.</p>
   */
  lastErrorCode?: string;

  /**
   * <p>The message indicating that the recording failed due to an
   * 			error.</p>
   */
  lastErrorMessage?: string;

  /**
   * <p>The time when the status was last changed.</p>
   */
  lastStatusChangeTime?: Date;
}

export namespace ConfigurationRecorderStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfigurationRecorderStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Filters the conformance pack by compliance types and AWS Config rule names.</p>
 */
export interface ConformancePackComplianceFilters {
  /**
   * <p>Filters the results by AWS Config rule names.</p>
   */
  ConfigRuleNames?: string[];

  /**
   * <p>Filters the results by compliance.</p>
   * 		       <p>The allowed values are <code>COMPLIANT</code> and <code>NON_COMPLIANT</code>. <code>INSUFFICIENT_DATA</code> is not supported.</p>
   */
  ComplianceType?: ConformancePackComplianceType | string;
}

export namespace ConformancePackComplianceFilters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConformancePackComplianceFilters): any => ({
    ...obj,
  });
}

/**
 * <p>Summary includes the name and status of the conformance pack.</p>
 */
export interface ConformancePackComplianceSummary {
  /**
   * <p>The name of the conformance pack name.</p>
   */
  ConformancePackName: string | undefined;

  /**
   * <p>The status of the conformance pack. The allowed values are <code>COMPLIANT</code>, <code>NON_COMPLIANT</code> and <code>INSUFFICIENT_DATA</code>.</p>
   */
  ConformancePackComplianceStatus: ConformancePackComplianceType | string | undefined;
}

export namespace ConformancePackComplianceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConformancePackComplianceSummary): any => ({
    ...obj,
  });
}

/**
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

export namespace ConformancePackInputParameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConformancePackInputParameter): any => ({
    ...obj,
  });
}

/**
 * <p>Returns details of a conformance pack. A conformance pack is a collection of AWS Config rules and remediation actions that can be easily deployed in an account and a region.</p>
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
   * <p>Amazon S3 bucket where AWS Config stores conformance pack templates. </p>
   * 	        <note>
   *             <p>This field is optional.</p>
   *          </note>
   */
  DeliveryS3Bucket?: string;

  /**
   * <p>The prefix for the Amazon S3 bucket.</p>
   * 		       <note>
   *             <p>This field is optional.</p>
   *          </note>
   */
  DeliveryS3KeyPrefix?: string;

  /**
   * <p>A list of <code>ConformancePackInputParameter</code> objects.</p>
   */
  ConformancePackInputParameters?: ConformancePackInputParameter[];

  /**
   * <p>Last time when conformation pack update was requested. </p>
   */
  LastUpdateRequestedTime?: Date;

  /**
   * <p>AWS service that created the conformance pack.</p>
   */
  CreatedBy?: string;
}

export namespace ConformancePackDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConformancePackDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Filters a conformance pack by AWS Config rule names, compliance types, AWS resource types, and resource IDs.</p>
 */
export interface ConformancePackEvaluationFilters {
  /**
   * <p>Filters the results by AWS Config rule names.</p>
   */
  ConfigRuleNames?: string[];

  /**
   * <p>Filters the results by compliance.</p>
   * 		       <p>The allowed values are <code>COMPLIANT</code> and <code>NON_COMPLIANT</code>. <code>INSUFFICIENT_DATA</code> is not supported.</p>
   */
  ComplianceType?: ConformancePackComplianceType | string;

  /**
   * <p>Filters the results by the resource type (for example, <code>"AWS::EC2::Instance"</code>). </p>
   */
  ResourceType?: string;

  /**
   * <p>Filters the results by resource IDs.</p>
   * 		       <note>
   *             <p>This is valid only when you provide resource type. If there is no resource type, you will see an error.</p>
   *          </note>
   */
  ResourceIds?: string[];
}

export namespace ConformancePackEvaluationFilters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConformancePackEvaluationFilters): any => ({
    ...obj,
  });
}

/**
 * <p>The details of a conformance pack evaluation. Provides AWS Config rule and AWS resource type that was evaluated, the compliance of the conformance pack, related time stamps, and supplementary information. </p>
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
   * <p>The time when AWS Config rule evaluated AWS resource.</p>
   */
  ConfigRuleInvokedTime: Date | undefined;

  /**
   * <p>The time when AWS Config recorded the evaluation result. </p>
   */
  ResultRecordedTime: Date | undefined;

  /**
   * <p>Supplementary information about how the evaluation determined the compliance. </p>
   */
  Annotation?: string;
}

export namespace ConformancePackEvaluationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConformancePackEvaluationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Compliance information of one or more AWS Config rules within a conformance pack. You can filter using AWS Config rule names and compliance types.</p>
 */
export interface ConformancePackRuleCompliance {
  /**
   * <p>Name of the config rule.</p>
   */
  ConfigRuleName?: string;

  /**
   * <p>Compliance of the AWS Config rule.</p>
   * 		       <p>The allowed values are <code>COMPLIANT</code>, <code>NON_COMPLIANT</code>, and <code>INSUFFICIENT_DATA</code>.</p>
   */
  ComplianceType?: ConformancePackComplianceType | string;

  /**
   * <p>Controls for the conformance pack. A control is a process to prevent or detect problems while meeting objectives.
   * 			A control can align with a specific compliance regime or map to internal controls defined by an organization.</p>
   */
  Controls?: string[];
}

export namespace ConformancePackRuleCompliance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConformancePackRuleCompliance): any => ({
    ...obj,
  });
}

export enum ConformancePackState {
  CREATE_COMPLETE = "CREATE_COMPLETE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
}

/**
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
   * 		       <p>AWS Config sets the state of the conformance pack to:</p>
   * 		       <ul>
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
   * <p>Amazon Resource Name (ARN) of AWS CloudFormation stack. </p>
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

export namespace ConformancePackStatusDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConformancePackStatusDetail): any => ({
    ...obj,
  });
}

/**
 * <p>You have specified a template that is not valid or supported.</p>
 */
export interface ConformancePackTemplateValidationException extends __SmithyException, $MetadataBearer {
  name: "ConformancePackTemplateValidationException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace ConformancePackTemplateValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConformancePackTemplateValidationException): any => ({
    ...obj,
  });
}

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

export namespace DeleteAggregationAuthorizationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAggregationAuthorizationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>One or more of the specified parameters are invalid. Verify
 * 			that your parameters are valid and try again.</p>
 */
export interface InvalidParameterValueException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterValueException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace InvalidParameterValueException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidParameterValueException): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteConfigRuleRequest {
  /**
   * <p>The name of the AWS Config rule that you want to
   * 			delete.</p>
   */
  ConfigRuleName: string | undefined;
}

export namespace DeleteConfigRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConfigRuleRequest): any => ({
    ...obj,
  });
}

/**
 * <p>One or more AWS Config rules in the request are invalid. Verify
 * 			that the rule names are correct and try again.</p>
 */
export interface NoSuchConfigRuleException extends __SmithyException, $MetadataBearer {
  name: "NoSuchConfigRuleException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoSuchConfigRuleException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoSuchConfigRuleException): any => ({
    ...obj,
  });
}

/**
 * <p>You see this exception in the following cases: </p>
 * 		       <ul>
 *             <li>
 *                <p>For DeleteConfigRule, AWS Config is deleting this rule. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteConfigRule, the rule is deleting your evaluation results. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteConfigRule, a remediation action is associated with the rule and AWS Config cannot delete this rule. Delete the remediation action associated with the rule before deleting the rule and try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For PutConfigOrganizationRule, organization config rule deletion is in progress. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteOrganizationConfigRule, organization config rule creation is in progress. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For PutConformancePack and PutOrganizationConformancePack, a conformance pack creation, update, and deletion is in progress. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteConformancePack, a conformance pack creation, update, and deletion is in progress. Try your request again later.</p>
 *             </li>
 *          </ul>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace ResourceInUseException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj,
  });
}

export interface DeleteConfigurationAggregatorRequest {
  /**
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string | undefined;
}

export namespace DeleteConfigurationAggregatorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConfigurationAggregatorRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace DeleteConfigurationRecorderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConfigurationRecorderRequest): any => ({
    ...obj,
  });
}

/**
 * <p>You have specified a configuration recorder that does not
 * 			exist.</p>
 */
export interface NoSuchConfigurationRecorderException extends __SmithyException, $MetadataBearer {
  name: "NoSuchConfigurationRecorderException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoSuchConfigurationRecorderException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoSuchConfigurationRecorderException): any => ({
    ...obj,
  });
}

export interface DeleteConformancePackRequest {
  /**
   * <p>Name of the conformance pack you want to delete.</p>
   */
  ConformancePackName: string | undefined;
}

export namespace DeleteConformancePackRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConformancePackRequest): any => ({
    ...obj,
  });
}

/**
 * <p>You specified one or more conformance packs that do not exist.</p>
 */
export interface NoSuchConformancePackException extends __SmithyException, $MetadataBearer {
  name: "NoSuchConformancePackException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoSuchConformancePackException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoSuchConformancePackException): any => ({
    ...obj,
  });
}

/**
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

export namespace DeleteDeliveryChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDeliveryChannelRequest): any => ({
    ...obj,
  });
}

/**
 * <p>You cannot delete the delivery channel you specified because
 * 			the configuration recorder is running.</p>
 */
export interface LastDeliveryChannelDeleteFailedException extends __SmithyException, $MetadataBearer {
  name: "LastDeliveryChannelDeleteFailedException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace LastDeliveryChannelDeleteFailedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LastDeliveryChannelDeleteFailedException): any => ({
    ...obj,
  });
}

/**
 * <p>You have specified a delivery channel that does not
 * 			exist.</p>
 */
export interface NoSuchDeliveryChannelException extends __SmithyException, $MetadataBearer {
  name: "NoSuchDeliveryChannelException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoSuchDeliveryChannelException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoSuchDeliveryChannelException): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteEvaluationResultsRequest {
  /**
   * <p>The name of the AWS Config rule for which you want to delete
   * 			the evaluation results.</p>
   */
  ConfigRuleName: string | undefined;
}

export namespace DeleteEvaluationResultsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEvaluationResultsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output when you delete the evaluation results for the
 * 			specified AWS Config rule.</p>
 */
export interface DeleteEvaluationResultsResponse {}

export namespace DeleteEvaluationResultsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEvaluationResultsResponse): any => ({
    ...obj,
  });
}

export interface DeleteOrganizationConfigRuleRequest {
  /**
   * <p>The name of organization config rule that you want to delete.</p>
   */
  OrganizationConfigRuleName: string | undefined;
}

export namespace DeleteOrganizationConfigRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteOrganizationConfigRuleRequest): any => ({
    ...obj,
  });
}

/**
 * <p>You specified one or more organization config rules that do not exist.</p>
 */
export interface NoSuchOrganizationConfigRuleException extends __SmithyException, $MetadataBearer {
  name: "NoSuchOrganizationConfigRuleException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoSuchOrganizationConfigRuleException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoSuchOrganizationConfigRuleException): any => ({
    ...obj,
  });
}

/**
 * <p>For <code>PutConfigurationAggregator</code> API, you can see this exception for the following reasons:</p>
 * 		       <ul>
 *             <li>
 *                <p>No permission to call <code>EnableAWSServiceAccess</code> API</p>
 *             </li>
 *             <li>
 *                <p>The configuration aggregator cannot be updated because your AWS Organization management account or the delegated administrator role changed.
 * 				Delete this aggregator and create a new one with the current AWS Organization.</p>
 *             </li>
 *             <li>
 *                <p>The configuration aggregator is associated with a previous AWS Organization and AWS Config cannot aggregate data with current AWS Organization.
 * 				Delete this aggregator and create a new one with the current AWS Organization.</p>
 *             </li>
 *             <li>
 *                <p>You are not a registered delegated administrator for AWS Config with permissions to call <code>ListDelegatedAdministrators</code> API.
 * 			Ensure that the management account registers delagated administrator for AWS Config service principle name before the delegated administrator creates an aggregator.</p>
 *             </li>
 *          </ul>
 * 		       <p>For all <code>OrganizationConfigRule</code> and <code>OrganizationConformancePack</code> APIs, AWS Config throws an exception if APIs are called from member accounts. All APIs must be called from organization master account.</p>
 */
export interface OrganizationAccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "OrganizationAccessDeniedException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace OrganizationAccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrganizationAccessDeniedException): any => ({
    ...obj,
  });
}

export interface DeleteOrganizationConformancePackRequest {
  /**
   * <p>The name of organization conformance pack that you want to delete.</p>
   */
  OrganizationConformancePackName: string | undefined;
}

export namespace DeleteOrganizationConformancePackRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteOrganizationConformancePackRequest): any => ({
    ...obj,
  });
}

/**
 * <p>AWS Config organization conformance pack that you passed in the filter does not exist.</p>
 * 		       <p>For DeleteOrganizationConformancePack, you tried to delete an organization conformance pack that does not exist.</p>
 */
export interface NoSuchOrganizationConformancePackException extends __SmithyException, $MetadataBearer {
  name: "NoSuchOrganizationConformancePackException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoSuchOrganizationConformancePackException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoSuchOrganizationConformancePackException): any => ({
    ...obj,
  });
}

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

export namespace DeletePendingAggregationRequestRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePendingAggregationRequestRequest): any => ({
    ...obj,
  });
}

export interface DeleteRemediationConfigurationRequest {
  /**
   * <p>The name of the AWS Config rule for which you want to delete remediation configuration.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>The type of a resource.</p>
   */
  ResourceType?: string;
}

export namespace DeleteRemediationConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRemediationConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteRemediationConfigurationResponse {}

export namespace DeleteRemediationConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRemediationConfigurationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates one of the following errors:</p>
 * 		       <ul>
 *             <li>
 *                <p>For PutConfigRule, the rule cannot be created because the IAM role assigned to AWS Config lacks permissions to perform the config:Put* action.</p>
 *             </li>
 *             <li>
 *                <p>For PutConfigRule, the AWS Lambda function cannot be invoked. Check the function ARN, and check the function's permissions.</p>
 *             </li>
 *             <li>
 *                <p>For PutOrganizationConfigRule, organization config rule cannot be created because you do not have permissions to call IAM <code>GetRole</code> action or create a service linked role.</p>
 *             </li>
 *             <li>
 *                <p>For PutConformancePack and PutOrganizationConformancePack, a conformance pack cannot be created because you do not have permissions: </p>
 * 				           <ul>
 *                   <li>
 *                      <p>To call IAM <code>GetRole</code> action or create a service linked role.</p>
 *                   </li>
 *                   <li>
 *                      <p>To read Amazon S3 bucket.</p>
 *                   </li>
 *                </ul>
 * 			         </li>
 *          </ul>
 */
export interface InsufficientPermissionsException extends __SmithyException, $MetadataBearer {
  name: "InsufficientPermissionsException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace InsufficientPermissionsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsufficientPermissionsException): any => ({
    ...obj,
  });
}

/**
 * <p>You specified an AWS Config rule without a remediation configuration.</p>
 */
export interface NoSuchRemediationConfigurationException extends __SmithyException, $MetadataBearer {
  name: "NoSuchRemediationConfigurationException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoSuchRemediationConfigurationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoSuchRemediationConfigurationException): any => ({
    ...obj,
  });
}

/**
 * <p>Remediation action is in progress. You can either cancel execution in AWS Systems Manager or wait and try again later. </p>
 */
export interface RemediationInProgressException extends __SmithyException, $MetadataBearer {
  name: "RemediationInProgressException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace RemediationInProgressException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemediationInProgressException): any => ({
    ...obj,
  });
}

/**
 * <p>The details that identify a resource within AWS Config, including the resource type and resource ID. </p>
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

export namespace RemediationExceptionResourceKey {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemediationExceptionResourceKey): any => ({
    ...obj,
  });
}

export interface DeleteRemediationExceptionsRequest {
  /**
   * <p>The name of the AWS Config rule for which you want to delete remediation exception configuration.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>An exception list of resource exception keys to be processed with the current request. AWS Config adds exception for each resource key. For example, AWS Config adds 3 exceptions for 3 resource keys. </p>
   */
  ResourceKeys: RemediationExceptionResourceKey[] | undefined;
}

export namespace DeleteRemediationExceptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRemediationExceptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>List of each of the failed delete remediation exceptions with specific reasons.</p>
 */
export interface FailedDeleteRemediationExceptionsBatch {
  /**
   * <p>Returns a failure message for delete remediation exception. For example, AWS Config creates an exception due to an internal error.</p>
   */
  FailureMessage?: string;

  /**
   * <p>Returns remediation exception resource key object of the failed items.</p>
   */
  FailedItems?: RemediationExceptionResourceKey[];
}

export namespace FailedDeleteRemediationExceptionsBatch {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailedDeleteRemediationExceptionsBatch): any => ({
    ...obj,
  });
}

export interface DeleteRemediationExceptionsResponse {
  /**
   * <p>Returns a list of failed delete remediation exceptions batch objects. Each object in the batch consists of a list of failed items and failure messages.</p>
   */
  FailedBatches?: FailedDeleteRemediationExceptionsBatch[];
}

export namespace DeleteRemediationExceptionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRemediationExceptionsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You tried to delete a remediation exception that does not exist.</p>
 */
export interface NoSuchRemediationExceptionException extends __SmithyException, $MetadataBearer {
  name: "NoSuchRemediationExceptionException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoSuchRemediationExceptionException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoSuchRemediationExceptionException): any => ({
    ...obj,
  });
}

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

export namespace DeleteResourceConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResourceConfigRequest): any => ({
    ...obj,
  });
}

/**
 * <p>There is no configuration recorder running.</p>
 */
export interface NoRunningConfigurationRecorderException extends __SmithyException, $MetadataBearer {
  name: "NoRunningConfigurationRecorderException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoRunningConfigurationRecorderException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoRunningConfigurationRecorderException): any => ({
    ...obj,
  });
}

export interface DeleteRetentionConfigurationRequest {
  /**
   * <p>The name of the retention configuration to delete.</p>
   */
  RetentionConfigurationName: string | undefined;
}

export namespace DeleteRetentionConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRetentionConfigurationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>You have specified a retention configuration that does not exist.</p>
 */
export interface NoSuchRetentionConfigurationException extends __SmithyException, $MetadataBearer {
  name: "NoSuchRetentionConfigurationException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoSuchRetentionConfigurationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoSuchRetentionConfigurationException): any => ({
    ...obj,
  });
}

export interface DeleteStoredQueryRequest {
  /**
   * <p>The name of the query that you want to delete.</p>
   */
  QueryName: string | undefined;
}

export namespace DeleteStoredQueryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStoredQueryRequest): any => ({
    ...obj,
  });
}

export interface DeleteStoredQueryResponse {}

export namespace DeleteStoredQueryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStoredQueryResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You have specified a resource that does not exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
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

export namespace DeliverConfigSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeliverConfigSnapshotRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output for the <a>DeliverConfigSnapshot</a>
 * 			action, in JSON format.</p>
 */
export interface DeliverConfigSnapshotResponse {
  /**
   * <p>The ID of the snapshot that is being created.</p>
   */
  configSnapshotId?: string;
}

export namespace DeliverConfigSnapshotResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeliverConfigSnapshotResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The channel through which AWS Config delivers notifications and
 * 			updated configuration states.</p>
 */
export interface DeliveryChannel {
  /**
   * <p>The name of the delivery channel. By default, AWS Config
   * 			assigns the name "default" when creating the delivery channel. To
   * 			change the delivery channel name, you must use the
   * 			DeleteDeliveryChannel action to delete your current delivery
   * 			channel, and then you must use the PutDeliveryChannel command to
   * 			create a delivery channel that has the desired name.</p>
   */
  name?: string;

  /**
   * <p>The name of the Amazon S3 bucket to which AWS Config delivers
   * 			configuration snapshots and configuration history files.</p>
   * 		       <p>If you specify a bucket that belongs to another AWS account,
   * 			that bucket must have policies that grant access permissions to AWS
   * 			Config. For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-policy.html">Permissions for the Amazon S3 Bucket</a> in the AWS Config
   * 			Developer Guide.</p>
   */
  s3BucketName?: string;

  /**
   * <p>The prefix for the specified Amazon S3 bucket.</p>
   */
  s3KeyPrefix?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Key Management Service (KMS) customer managed key (CMK) used to encrypt objects delivered by AWS Config.
   * 			Must belong to the same Region as the destination S3 bucket.</p>
   */
  s3KmsKeyArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which
   * 			AWS Config sends notifications about configuration
   * 			changes.</p>
   * 		       <p>If you choose a topic from another account, the topic must have
   * 			policies that grant access permissions to AWS Config. For more
   * 			information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/sns-topic-policy.html">Permissions for the Amazon SNS Topic</a> in the AWS Config
   * 			Developer Guide.</p>
   */
  snsTopicARN?: string;

  /**
   * <p>The options for how often AWS Config delivers configuration
   * 			snapshots to the Amazon S3 bucket.</p>
   */
  configSnapshotDeliveryProperties?: ConfigSnapshotDeliveryProperties;
}

export namespace DeliveryChannel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeliveryChannel): any => ({
    ...obj,
  });
}

/**
 * <p>The status of a specified delivery channel.</p>
 * 		       <p>Valid values: <code>Success</code> | <code>Failure</code>
 * 		       </p>
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

export namespace DeliveryChannelStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeliveryChannelStatus): any => ({
    ...obj,
  });
}

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
   * 			If you specify 0, AWS Config uses the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribeAggregateComplianceByConfigRulesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAggregateComplianceByConfigRulesRequest): any => ({
    ...obj,
  });
}

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

export namespace DescribeAggregateComplianceByConfigRulesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAggregateComplianceByConfigRulesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified limit is outside the allowable range.</p>
 */
export interface InvalidLimitException extends __SmithyException, $MetadataBearer {
  name: "InvalidLimitException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace InvalidLimitException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidLimitException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified next token is invalid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace InvalidNextTokenException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidNextTokenException): any => ({
    ...obj,
  });
}

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
   * <p>The maximum number of conformance packs compliance details returned on each page. The default is maximum. If you specify 0, AWS Config uses the default. </p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribeAggregateComplianceByConformancePacksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAggregateComplianceByConformancePacksRequest): any => ({
    ...obj,
  });
}

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

export namespace DescribeAggregateComplianceByConformancePacksResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAggregateComplianceByConformancePacksResponse): any => ({
    ...obj,
  });
}

export interface DescribeAggregationAuthorizationsRequest {
  /**
   * <p>The maximum number of AggregationAuthorizations returned on
   * 			each page. The default is maximum. If you specify 0, AWS Config uses
   * 			the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribeAggregationAuthorizationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAggregationAuthorizationsRequest): any => ({
    ...obj,
  });
}

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

export namespace DescribeAggregationAuthorizationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAggregationAuthorizationsResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeComplianceByConfigRuleRequest {
  /**
   * <p>Specify one or more AWS Config rule names to filter the results
   * 			by rule.</p>
   */
  ConfigRuleNames?: string[];

  /**
   * <p>Filters the results by compliance.</p>
   * 		       <p>The allowed values are <code>COMPLIANT</code> and <code>NON_COMPLIANT</code>.</p>
   */
  ComplianceTypes?: (ComplianceType | string)[];

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   */
  NextToken?: string;
}

export namespace DescribeComplianceByConfigRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeComplianceByConfigRuleRequest): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeComplianceByConfigRuleResponse {
  /**
   * <p>Indicates whether each of the specified AWS Config rules is
   * 			compliant.</p>
   */
  ComplianceByConfigRules?: ComplianceByConfigRule[];

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribeComplianceByConfigRuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeComplianceByConfigRuleResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeComplianceByResourceRequest {
  /**
   * <p>The types of AWS resources for which you want compliance
   * 			information (for example, <code>AWS::EC2::Instance</code>). For this
   * 			action, you can specify that the resource type is an AWS account by
   * 			specifying <code>AWS::::Account</code>.</p>
   */
  ResourceType?: string;

  /**
   * <p>The ID of the AWS resource for which you want compliance
   * 			information. You can specify only one resource ID. If you specify a
   * 			resource ID, you must also specify a type for
   * 				<code>ResourceType</code>.</p>
   */
  ResourceId?: string;

  /**
   * <p>Filters the results by compliance.</p>
   * 		       <p>The allowed values are <code>COMPLIANT</code>, <code>NON_COMPLIANT</code>, and <code>INSUFFICIENT_DATA</code>.</p>
   */
  ComplianceTypes?: (ComplianceType | string)[];

  /**
   * <p>The maximum number of evaluation results returned on each page.
   * 			The default is 10. You cannot specify a number greater than 100. If
   * 			you specify 0, AWS Config uses the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   */
  NextToken?: string;
}

export namespace DescribeComplianceByResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeComplianceByResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeComplianceByResourceResponse {
  /**
   * <p>Indicates whether the specified AWS resource complies with all
   * 			of the AWS Config rules that evaluate it.</p>
   */
  ComplianceByResources?: ComplianceByResource[];

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribeComplianceByResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeComplianceByResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeConfigRuleEvaluationStatusRequest {
  /**
   * <p>The name of the AWS managed Config rules for which you want
   * 			status information. If you do not specify any names, AWS Config
   * 			returns status information for all AWS managed Config rules that you
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
   *
   * 		       <p>This parameter is required if the rule limit for your account
   * 			is more than the default of 150 rules.</p>
   * 		       <p>For information about requesting a rule limit increase, see
   * 				<a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_config">AWS Config Limits</a> in the <i>AWS General
   * 				Reference Guide</i>.</p>
   */
  Limit?: number;
}

export namespace DescribeConfigRuleEvaluationStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConfigRuleEvaluationStatusRequest): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeConfigRuleEvaluationStatusResponse {
  /**
   * <p>Status information about your AWS managed Config
   * 			rules.</p>
   */
  ConfigRulesEvaluationStatus?: ConfigRuleEvaluationStatus[];

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribeConfigRuleEvaluationStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConfigRuleEvaluationStatusResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeConfigRulesRequest {
  /**
   * <p>The names of the AWS Config rules for which you want details.
   * 			If you do not specify any names, AWS Config returns details for all
   * 			your rules.</p>
   */
  ConfigRuleNames?: string[];

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   */
  NextToken?: string;
}

export namespace DescribeConfigRulesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConfigRulesRequest): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeConfigRulesResponse {
  /**
   * <p>The details about your AWS Config rules.</p>
   */
  ConfigRules?: ConfigRule[];

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribeConfigRulesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConfigRulesResponse): any => ({
    ...obj,
  });
}

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
   * 			each page. The default is maximum. If you specify 0, AWS Config uses
   * 			the default.</p>
   */
  Limit?: number;
}

export namespace DescribeConfigurationAggregatorsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConfigurationAggregatorsRequest): any => ({
    ...obj,
  });
}

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

export namespace DescribeConfigurationAggregatorsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConfigurationAggregatorsResponse): any => ({
    ...obj,
  });
}

export interface DescribeConfigurationAggregatorSourcesStatusRequest {
  /**
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>Filters the status type.</p>
   * 		       <ul>
   *             <li>
   * 				           <p>Valid value FAILED indicates errors while moving
   * 					data.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Valid value SUCCEEDED indicates the data was
   * 					successfully moved.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Valid value OUTDATED indicates the data is not the most
   * 					recent.</p>
   * 			         </li>
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
   * 			page. The default is maximum. If you specify 0, AWS Config uses the
   * 			default.</p>
   */
  Limit?: number;
}

export namespace DescribeConfigurationAggregatorSourcesStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConfigurationAggregatorSourcesStatusRequest): any => ({
    ...obj,
  });
}

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

export namespace DescribeConfigurationAggregatorSourcesStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConfigurationAggregatorSourcesStatusResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the <a>DescribeConfigurationRecorders</a> action.</p>
 */
export interface DescribeConfigurationRecordersRequest {
  /**
   * <p>A list of configuration recorder names.</p>
   */
  ConfigurationRecorderNames?: string[];
}

export namespace DescribeConfigurationRecordersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConfigurationRecordersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output for the <a>DescribeConfigurationRecorders</a> action.</p>
 */
export interface DescribeConfigurationRecordersResponse {
  /**
   * <p>A list that contains the descriptions of the specified
   * 			configuration recorders.</p>
   */
  ConfigurationRecorders?: ConfigurationRecorder[];
}

export namespace DescribeConfigurationRecordersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConfigurationRecordersResponse): any => ({
    ...obj,
  });
}

/**
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

export namespace DescribeConfigurationRecorderStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConfigurationRecorderStatusRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace DescribeConfigurationRecorderStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConfigurationRecorderStatusResponse): any => ({
    ...obj,
  });
}

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
   * <p>The maximum number of AWS Config rules within a conformance pack are returned on each page.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribeConformancePackComplianceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConformancePackComplianceRequest): any => ({
    ...obj,
  });
}

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

export namespace DescribeConformancePackComplianceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConformancePackComplianceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>AWS Config rule that you passed in the filter does not exist.</p>
 */
export interface NoSuchConfigRuleInConformancePackException extends __SmithyException, $MetadataBearer {
  name: "NoSuchConfigRuleInConformancePackException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoSuchConfigRuleInConformancePackException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoSuchConfigRuleInConformancePackException): any => ({
    ...obj,
  });
}

export interface DescribeConformancePacksRequest {
  /**
   * <p>Comma-separated list of conformance pack names for which you want details. If you do not specify any names, AWS Config returns details for all your conformance packs. </p>
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

export namespace DescribeConformancePacksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConformancePacksRequest): any => ({
    ...obj,
  });
}

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

export namespace DescribeConformancePacksResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConformancePacksResponse): any => ({
    ...obj,
  });
}

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

export namespace DescribeConformancePackStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConformancePackStatusRequest): any => ({
    ...obj,
  });
}

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

export namespace DescribeConformancePackStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConformancePackStatusResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the <a>DescribeDeliveryChannels</a>
 * 			action.</p>
 */
export interface DescribeDeliveryChannelsRequest {
  /**
   * <p>A list of delivery channel names.</p>
   */
  DeliveryChannelNames?: string[];
}

export namespace DescribeDeliveryChannelsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDeliveryChannelsRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace DescribeDeliveryChannelsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDeliveryChannelsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the <a>DeliveryChannelStatus</a>
 * 			action.</p>
 */
export interface DescribeDeliveryChannelStatusRequest {
  /**
   * <p>A list of delivery channel names.</p>
   */
  DeliveryChannelNames?: string[];
}

export namespace DescribeDeliveryChannelStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDeliveryChannelStatusRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output for the <a>DescribeDeliveryChannelStatus</a> action.</p>
 */
export interface DescribeDeliveryChannelStatusResponse {
  /**
   * <p>A list that contains the status of a specified delivery
   * 			channel.</p>
   */
  DeliveryChannelsStatus?: DeliveryChannelStatus[];
}

export namespace DescribeDeliveryChannelStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDeliveryChannelStatusResponse): any => ({
    ...obj,
  });
}

export interface DescribeOrganizationConfigRulesRequest {
  /**
   * <p>The names of organization config rules for which you want details. If you do not specify any names, AWS Config returns details for all your organization config rules.</p>
   */
  OrganizationConfigRuleNames?: string[];

  /**
   * <p>The maximum number of organization config rules returned on each page. If you do no specify a number, AWS Config uses the default. The default is 100.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

export namespace DescribeOrganizationConfigRulesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOrganizationConfigRulesRequest): any => ({
    ...obj,
  });
}

export enum OrganizationConfigRuleTriggerType {
  CONFIGURATION_ITEM_CHANGE_NOTIFICATION = "ConfigurationItemChangeNotification",
  OVERSIZED_CONFIGURATION_ITEM_CHANGE_NOTIFCATION = "OversizedConfigurationItemChangeNotification",
  SCHEDULED_NOTIFICATION = "ScheduledNotification",
}

/**
 * <p>An object that specifies organization custom rule metadata such as resource type, resource ID of AWS resource, Lamdba function ARN,
 * 			and organization trigger types that trigger AWS Config to evaluate your AWS resources against a rule.
 * 			It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic.</p>
 */
export interface OrganizationCustomRuleMetadata {
  /**
   * <p>The description that you provide for organization config rule.</p>
   */
  Description?: string;

  /**
   * <p>The lambda function ARN.</p>
   */
  LambdaFunctionArn: string | undefined;

  /**
   * <p>The type of notification that triggers AWS Config to run an evaluation for a rule. You can specify the following notification types:</p>
   *
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>ConfigurationItemChangeNotification</code> - Triggers an evaluation when AWS Config delivers a configuration item as a result of a resource change.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OversizedConfigurationItemChangeNotification</code> - Triggers an evaluation when AWS Config delivers an oversized configuration item.
   * 			         	AWS Config may generate this notification type when a resource changes and the notification exceeds the maximum size allowed by Amazon SNS.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ScheduledNotification</code> - Triggers a periodic evaluation at the frequency specified for <code>MaximumExecutionFrequency</code>.</p>
   *             </li>
   *          </ul>
   */
  OrganizationConfigRuleTriggerTypes: (OrganizationConfigRuleTriggerType | string)[] | undefined;

  /**
   * <p>A string, in JSON format, that is passed to organization config rule Lambda function.</p>
   */
  InputParameters?: string;

  /**
   * <p>The maximum frequency with which AWS Config runs evaluations for a rule.
   * 			Your custom rule is triggered when AWS Config delivers the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p>
   * 		       <note>
   *             <p>By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid
   * 			value for the <code>MaximumExecutionFrequency</code> parameter.</p>
   *          </note>
   */
  MaximumExecutionFrequency?: MaximumExecutionFrequency | string;

  /**
   * <p>The type of the AWS resource that was evaluated.</p>
   */
  ResourceTypesScope?: string[];

  /**
   * <p>The ID of the AWS resource that was evaluated.</p>
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

export namespace OrganizationCustomRuleMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrganizationCustomRuleMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>An object that specifies organization managed rule metadata such as resource type and ID of AWS resource along with the rule identifier.
 * 			It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic.</p>
 */
export interface OrganizationManagedRuleMetadata {
  /**
   * <p>The description that you provide for organization config rule.</p>
   */
  Description?: string;

  /**
   * <p>For organization config managed rules, a predefined identifier from a
   * 			list. For example, <code>IAM_PASSWORD_POLICY</code> is a managed
   * 			rule. To reference a managed rule, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html">Using AWS Managed Config Rules</a>.</p>
   */
  RuleIdentifier: string | undefined;

  /**
   * <p>A string, in JSON format, that is passed to organization config rule Lambda function.</p>
   */
  InputParameters?: string;

  /**
   * <p>The maximum frequency with which AWS Config runs evaluations for a rule. You are using an AWS managed rule that is triggered at a periodic frequency.</p>
   * 		       <note>
   *             <p>By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid
   * 			value for the <code>MaximumExecutionFrequency</code> parameter.</p>
   *          </note>
   */
  MaximumExecutionFrequency?: MaximumExecutionFrequency | string;

  /**
   * <p>The type of the AWS resource that was evaluated.</p>
   */
  ResourceTypesScope?: string[];

  /**
   * <p>The ID of the AWS resource that was evaluated.</p>
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

export namespace OrganizationManagedRuleMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrganizationManagedRuleMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>An organization config rule that has information about config rules that AWS Config creates in member accounts.</p>
 */
export interface OrganizationConfigRule {
  /**
   * <p>The name that you assign to organization config rule.</p>
   */
  OrganizationConfigRuleName: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of organization config rule.</p>
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
   * <p>A comma-separated list of accounts excluded from organization config rule.</p>
   */
  ExcludedAccounts?: string[];

  /**
   * <p>The timestamp of the last update.</p>
   */
  LastUpdateTime?: Date;
}

export namespace OrganizationConfigRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrganizationConfigRule): any => ({
    ...obj,
  });
}

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

export namespace DescribeOrganizationConfigRulesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOrganizationConfigRulesResponse): any => ({
    ...obj,
  });
}

export interface DescribeOrganizationConfigRuleStatusesRequest {
  /**
   * <p>The names of organization config rules for which you want status details. If you do not specify any names, AWS Config returns details for all your organization AWS Confg rules.</p>
   */
  OrganizationConfigRuleNames?: string[];

  /**
   * <p>The maximum number of <code>OrganizationConfigRuleStatuses</code> returned on each page. If you do no specify a number, AWS Config uses the default. The default is 100.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

export namespace DescribeOrganizationConfigRuleStatusesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOrganizationConfigRuleStatusesRequest): any => ({
    ...obj,
  });
}

export enum OrganizationRuleStatus {
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  CREATE_SUCCESSFUL = "CREATE_SUCCESSFUL",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  DELETE_SUCCESSFUL = "DELETE_SUCCESSFUL",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
  UPDATE_SUCCESSFUL = "UPDATE_SUCCESSFUL",
}

/**
 * <p>Returns the status for an organization config rule in an organization.</p>
 */
export interface OrganizationConfigRuleStatus {
  /**
   * <p>The name that you assign to organization config rule.</p>
   */
  OrganizationConfigRuleName: string | undefined;

  /**
   * <p>Indicates deployment status of an organization config rule.
   * 			When master account calls PutOrganizationConfigRule action for the first time, config rule status is created in all the member accounts.
   * 			When master account calls PutOrganizationConfigRule action for the second time, config rule status is updated in all the member accounts. Additionally, config rule status is updated when one or more member accounts join or leave an organization.
   * 			Config rule status is deleted when the master account deletes OrganizationConfigRule in all the member accounts and disables service access for <code>config-multiaccountsetup.amazonaws.com</code>.</p>
   * 			      <p>AWS Config sets the state of the rule to:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_SUCCESSFUL</code> when an organization config rule has been successfully created in all the member accounts. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> when an organization config rule creation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code> when an organization config rule creation failed in one or more member accounts within that organization.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_FAILED</code> when an organization config rule deletion failed in one or more member accounts within that organization.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_IN_PROGRESS</code> when an organization config rule deletion is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_SUCCESSFUL</code> when an organization config rule has been successfully deleted from all the member accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_SUCCESSFUL</code> when an organization config rule has been successfully updated in all the member accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_IN_PROGRESS</code> when an organization config rule update is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FAILED</code> when an organization config rule update failed in one or more member accounts within that organization.</p>
   *             </li>
   *          </ul>
   */
  OrganizationRuleStatus: OrganizationRuleStatus | string | undefined;

  /**
   * <p>An error code that is returned when organization config rule creation or deletion has failed.</p>
   */
  ErrorCode?: string;

  /**
   * <p>An error message indicating that organization config rule creation or deletion failed due to an error.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The timestamp of the last update.</p>
   */
  LastUpdateTime?: Date;
}

export namespace OrganizationConfigRuleStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrganizationConfigRuleStatus): any => ({
    ...obj,
  });
}

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

export namespace DescribeOrganizationConfigRuleStatusesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOrganizationConfigRuleStatusesResponse): any => ({
    ...obj,
  });
}

export interface DescribeOrganizationConformancePacksRequest {
  /**
   * <p>The name that you assign to an organization conformance pack.</p>
   */
  OrganizationConformancePackNames?: string[];

  /**
   * <p>The maximum number of organization config packs returned on each page. If you do no specify a
   * 			number, AWS Config uses the default. The default is 100.</p>
   */
  Limit?: number;

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a
   * 			paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribeOrganizationConformancePacksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOrganizationConformancePacksRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An organization conformance pack that has information about conformance packs that AWS Config creates in member accounts. </p>
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
   * <p>Amazon S3 bucket where AWS Config stores conformance pack templates.  </p>
   * 		       <note>
   *             <p>This field is optional.</p>
   *          </note>
   */
  DeliveryS3Bucket?: string;

  /**
   * <p>Any folder structure you want to add to an Amazon S3 bucket.</p>
   * 		       <note>
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

export namespace OrganizationConformancePack {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrganizationConformancePack): any => ({
    ...obj,
  });
}

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

export namespace DescribeOrganizationConformancePacksResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOrganizationConformancePacksResponse): any => ({
    ...obj,
  });
}

export interface DescribeOrganizationConformancePackStatusesRequest {
  /**
   * <p>The names of organization conformance packs for which you want status details.
   * 			If you do not specify any names, AWS Config returns details for all your organization conformance packs. </p>
   */
  OrganizationConformancePackNames?: string[];

  /**
   * <p>The maximum number of OrganizationConformancePackStatuses returned on each page.
   * 			If you do no specify a number, AWS Config uses the default. The default is 100. </p>
   */
  Limit?: number;

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

export namespace DescribeOrganizationConformancePackStatusesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOrganizationConformancePackStatusesRequest): any => ({
    ...obj,
  });
}

export enum OrganizationResourceStatus {
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  CREATE_SUCCESSFUL = "CREATE_SUCCESSFUL",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  DELETE_SUCCESSFUL = "DELETE_SUCCESSFUL",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
  UPDATE_SUCCESSFUL = "UPDATE_SUCCESSFUL",
}

/**
 * <p>Returns the status for an organization conformance pack in an organization.</p>
 */
export interface OrganizationConformancePackStatus {
  /**
   * <p>The name that you assign to organization conformance pack.</p>
   */
  OrganizationConformancePackName: string | undefined;

  /**
   * <p>Indicates deployment status of an organization conformance pack.
   * 			When master account calls PutOrganizationConformancePack for the first time,
   * 			conformance pack status is created in all the member accounts.
   * 			When master account calls PutOrganizationConformancePack for the second time,
   * 			conformance pack status is updated in all the member accounts.
   * 			Additionally, conformance pack status is updated when one or more member accounts join or leave an
   * 			organization.
   * 			Conformance pack status is deleted when the master account deletes
   * 			OrganizationConformancePack in all the member accounts and disables service
   * 			access for <code>config-multiaccountsetup.amazonaws.com</code>.</p>
   * 		       <p>AWS Config sets the state of the conformance pack to:</p>
   * 		       <ul>
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

export namespace OrganizationConformancePackStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrganizationConformancePackStatus): any => ({
    ...obj,
  });
}

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

export namespace DescribeOrganizationConformancePackStatusesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOrganizationConformancePackStatusesResponse): any => ({
    ...obj,
  });
}

export interface DescribePendingAggregationRequestsRequest {
  /**
   * <p>The maximum number of evaluation results returned on each page.
   * 			The default is maximum. If you specify 0, AWS Config uses the
   * 			default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribePendingAggregationRequestsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePendingAggregationRequestsRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace PendingAggregationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PendingAggregationRequest): any => ({
    ...obj,
  });
}

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

export namespace DescribePendingAggregationRequestsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePendingAggregationRequestsResponse): any => ({
    ...obj,
  });
}

export interface DescribeRemediationConfigurationsRequest {
  /**
   * <p>A list of AWS Config rule names of remediation configurations for which you want details. </p>
   */
  ConfigRuleNames: string[] | undefined;
}

export namespace DescribeRemediationConfigurationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRemediationConfigurationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>AWS Systems Manager (SSM) specific remediation controls.</p>
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

export namespace SsmControls {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SsmControls): any => ({
    ...obj,
  });
}

/**
 * <p>The controls that AWS Config uses for executing remediations.</p>
 */
export interface ExecutionControls {
  /**
   * <p>A SsmControls object.</p>
   */
  SsmControls?: SsmControls;
}

export namespace ExecutionControls {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExecutionControls): any => ({
    ...obj,
  });
}

export enum ResourceValueType {
  RESOURCE_ID = "RESOURCE_ID",
}

/**
 * <p>The dynamic value of the resource.</p>
 */
export interface ResourceValue {
  /**
   * <p>The value is a resource ID.</p>
   */
  Value: ResourceValueType | string | undefined;
}

export namespace ResourceValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceValue): any => ({
    ...obj,
  });
}

/**
 * <p>The static value of the resource.</p>
 */
export interface StaticValue {
  /**
   * <p>A list of values. For example, the ARN of the assumed role. </p>
   */
  Values: string[] | undefined;
}

export namespace StaticValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StaticValue): any => ({
    ...obj,
  });
}

/**
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

export namespace RemediationParameterValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemediationParameterValue): any => ({
    ...obj,
  });
}

export enum RemediationTargetType {
  SSM_DOCUMENT = "SSM_DOCUMENT",
}

/**
 * <p>An object that represents the details about the remediation configuration that includes the remediation action, parameters, and data to execute the action.</p>
 */
export interface RemediationConfiguration {
  /**
   * <p>The name of the AWS Config rule.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>The type of the target. Target executes remediation. For example, SSM document.</p>
   */
  TargetType: RemediationTargetType | string | undefined;

  /**
   * <p>Target ID is the name of the public document.</p>
   */
  TargetId: string | undefined;

  /**
   * <p>Version of the target. For example, version of the SSM document.</p>
   * 		       <note>
   *             <p>If you make backward incompatible changes to the SSM document,
   * 			you must call PutRemediationConfiguration API again to ensure the remediations can run.</p>
   *          </note>
   */
  TargetVersion?: string;

  /**
   * <p>An object of the RemediationParameterValue.</p>
   */
  Parameters?: { [key: string]: RemediationParameterValue };

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
   * 		       <p>For example, if you specify MaximumAutomaticAttempts as 5 with RetryAttemptSeconds as 50 seconds,
   *
   * 			AWS Config will put a RemediationException on your behalf for the failing resource after the 5th failed attempt within 50 seconds.</p>
   */
  MaximumAutomaticAttempts?: number;

  /**
   * <p>Maximum time in seconds that AWS Config runs auto-remediation. If you do not select a number, the default is 60 seconds. </p>
   * 		       <p>For example, if you specify RetryAttemptSeconds as 50 seconds and MaximumAutomaticAttempts as 5,
   * 		AWS Config will run auto-remediations 5 times within 50 seconds before throwing an exception.</p>
   */
  RetryAttemptSeconds?: number;

  /**
   * <p>Amazon Resource Name (ARN) of remediation configuration.</p>
   */
  Arn?: string;

  /**
   * <p>Name of the service that owns the service linked rule, if applicable.</p>
   */
  CreatedByService?: string;
}

export namespace RemediationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemediationConfiguration): any => ({
    ...obj,
  });
}

export interface DescribeRemediationConfigurationsResponse {
  /**
   * <p>Returns a remediation configuration object.</p>
   */
  RemediationConfigurations?: RemediationConfiguration[];
}

export namespace DescribeRemediationConfigurationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRemediationConfigurationsResponse): any => ({
    ...obj,
  });
}

export interface DescribeRemediationExceptionsRequest {
  /**
   * <p>The name of the AWS Config rule.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>An exception list of resource exception keys to be processed with the current request. AWS Config adds exception for each resource key. For example, AWS Config adds 3 exceptions for 3 resource keys. </p>
   */
  ResourceKeys?: RemediationExceptionResourceKey[];

  /**
   * <p>The maximum number of RemediationExceptionResourceKey returned on each page. The default is 25. If you specify 0, AWS Config uses the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribeRemediationExceptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRemediationExceptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents the details about the remediation exception. The details include the rule name, an explanation of an exception, the time when the exception will be deleted, the resource ID, and resource type. </p>
 */
export interface RemediationException {
  /**
   * <p>The name of the AWS Config rule.</p>
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

export namespace RemediationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemediationException): any => ({
    ...obj,
  });
}

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

export namespace DescribeRemediationExceptionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRemediationExceptionsResponse): any => ({
    ...obj,
  });
}

export interface DescribeRemediationExecutionStatusRequest {
  /**
   * <p>A list of AWS Config rule names.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>A list of resource keys to be processed with the current request. Each element in the list consists of the resource type and resource ID. </p>
   */
  ResourceKeys?: ResourceKey[];

  /**
   * <p>The maximum number of RemediationExecutionStatuses returned on each page. The default is maximum. If you specify 0, AWS Config uses the default. </p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribeRemediationExecutionStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRemediationExecutionStatusRequest): any => ({
    ...obj,
  });
}

export enum RemediationExecutionState {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  QUEUED = "QUEUED",
  SUCCEEDED = "SUCCEEDED",
}

export enum RemediationExecutionStepState {
  FAILED = "FAILED",
  PENDING = "PENDING",
  SUCCEEDED = "SUCCEEDED",
}

/**
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

export namespace RemediationExecutionStep {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemediationExecutionStep): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details of the current status of the invoked remediation action for that resource.</p>
 */
export interface RemediationExecutionStatus {
  /**
   * <p>The details that identify a resource within AWS Config, including
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

export namespace RemediationExecutionStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemediationExecutionStatus): any => ({
    ...obj,
  });
}

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

export namespace DescribeRemediationExecutionStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRemediationExecutionStatusResponse): any => ({
    ...obj,
  });
}

export interface DescribeRetentionConfigurationsRequest {
  /**
   * <p>A list of names of retention configurations for which you want
   * 			details. If you do not specify a name, AWS Config returns details
   * 			for all the retention configurations for that account.</p>
   * 		       <note>
   * 			         <p>Currently, AWS Config supports only one retention
   * 				configuration per region in your account.</p>
   * 		       </note>
   */
  RetentionConfigurationNames?: string[];

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response. </p>
   */
  NextToken?: string;
}

export namespace DescribeRetentionConfigurationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRetentionConfigurationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An object with the name of the retention configuration and the retention period in days. The object stores the configuration for data retention in AWS Config.</p>
 */
export interface RetentionConfiguration {
  /**
   * <p>The name of the retention configuration object.</p>
   */
  Name: string | undefined;

  /**
   * <p>Number of days AWS Config stores your historical information.</p>
   * 		       <note>
   *             <p>Currently, only applicable to the configuration item history.</p>
   *          </note>
   */
  RetentionPeriodInDays: number | undefined;
}

export namespace RetentionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RetentionConfiguration): any => ({
    ...obj,
  });
}

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

export namespace DescribeRetentionConfigurationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRetentionConfigurationsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies an AWS resource and indicates whether it complies
 * 			with the AWS Config rule that it was evaluated against.</p>
 */
export interface Evaluation {
  /**
   * <p>The type of AWS resource that was evaluated.</p>
   */
  ComplianceResourceType: string | undefined;

  /**
   * <p>The ID of the AWS resource that was evaluated.</p>
   */
  ComplianceResourceId: string | undefined;

  /**
   * <p>Indicates whether the AWS resource complies with the AWS Config
   * 			rule that it was evaluated against.</p>
   * 		       <p>For the <code>Evaluation</code> data type, AWS Config supports
   * 			only the <code>COMPLIANT</code>, <code>NON_COMPLIANT</code>, and
   * 				<code>NOT_APPLICABLE</code> values. AWS Config does not support
   * 			the <code>INSUFFICIENT_DATA</code> value for this data
   * 			type.</p>
   * 		       <p>Similarly, AWS Config does not accept
   * 				<code>INSUFFICIENT_DATA</code> as the value for
   * 				<code>ComplianceType</code> from a <code>PutEvaluations</code>
   * 			request. For example, an AWS Lambda function for a custom AWS Config
   * 			rule cannot pass an <code>INSUFFICIENT_DATA</code> value to AWS
   * 			Config.</p>
   */
  ComplianceType: ComplianceType | string | undefined;

  /**
   * <p>Supplementary information about how the evaluation determined
   * 			the compliance.</p>
   */
  Annotation?: string;

  /**
   * <p>The time of the event in AWS Config that triggered the
   * 			evaluation. For event-based evaluations, the time indicates when AWS
   * 			Config created the configuration item that triggered the evaluation.
   * 			For periodic evaluations, the time indicates when AWS Config
   * 			triggered the evaluation at the frequency that you specified (for
   * 			example, every 24 hours).</p>
   */
  OrderingTimestamp: Date | undefined;
}

export namespace Evaluation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Evaluation): any => ({
    ...obj,
  });
}

/**
 * <p>The details of an AWS Config evaluation. Provides the AWS
 * 			resource that was evaluated, the compliance of the resource, related
 * 			time stamps, and supplementary information.</p>
 */
export interface EvaluationResult {
  /**
   * <p>Uniquely identifies the evaluation result.</p>
   */
  EvaluationResultIdentifier?: EvaluationResultIdentifier;

  /**
   * <p>Indicates whether the AWS resource complies with the AWS Config
   * 			rule that evaluated it.</p>
   * 		       <p>For the <code>EvaluationResult</code> data type, AWS Config
   * 			supports only the <code>COMPLIANT</code>,
   * 			<code>NON_COMPLIANT</code>, and <code>NOT_APPLICABLE</code> values.
   * 			AWS Config does not support the <code>INSUFFICIENT_DATA</code> value
   * 			for the <code>EvaluationResult</code> data type.</p>
   */
  ComplianceType?: ComplianceType | string;

  /**
   * <p>The time when AWS Config recorded the evaluation
   * 			result.</p>
   */
  ResultRecordedTime?: Date;

  /**
   * <p>The time when the AWS Config rule evaluated the AWS
   * 			resource.</p>
   */
  ConfigRuleInvokedTime?: Date;

  /**
   * <p>Supplementary information about how the evaluation determined
   * 			the compliance.</p>
   */
  Annotation?: string;

  /**
   * <p>An encrypted token that associates an evaluation with an AWS
   * 			Config rule. The token identifies the rule, the AWS resource being
   * 			evaluated, and the event that triggered the evaluation.</p>
   */
  ResultToken?: string;
}

export namespace EvaluationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EvaluationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies an AWS resource and indicates whether it complies with the AWS Config rule that it was evaluated against.</p>
 */
export interface ExternalEvaluation {
  /**
   * <p>The evaluated compliance resource type. AWS Config accepts <code>AWS::::Account</code> resource type.</p>
   */
  ComplianceResourceType: string | undefined;

  /**
   * <p>The evaluated compliance resource ID. AWS Config accepts only AWS account ID.</p>
   */
  ComplianceResourceId: string | undefined;

  /**
   * <p>The compliance of the AWS resource. The valid values are <code>COMPLIANT, NON_COMPLIANT, </code> and <code>NOT_APPLICABLE</code>.</p>
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

export namespace ExternalEvaluation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExternalEvaluation): any => ({
    ...obj,
  });
}

/**
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

export namespace FailedRemediationBatch {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailedRemediationBatch): any => ({
    ...obj,
  });
}

/**
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

export namespace FailedRemediationExceptionBatch {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailedRemediationExceptionBatch): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the fields such as name of the field.</p>
 */
export interface FieldInfo {
  /**
   * <p>Name of the field.</p>
   */
  Name?: string;
}

export namespace FieldInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FieldInfo): any => ({
    ...obj,
  });
}

export interface GetAggregateComplianceDetailsByConfigRuleRequest {
  /**
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>The name of the AWS Config rule for which you want compliance
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
   * 		       <note>
   * 			         <p>For the
   * 					<code>GetAggregateComplianceDetailsByConfigRuleRequest</code>
   * 				data type, AWS Config supports only the <code>COMPLIANT</code>
   * 				and <code>NON_COMPLIANT</code>. AWS Config does not support the
   * 					<code>NOT_APPLICABLE</code> and
   * 					<code>INSUFFICIENT_DATA</code> values.</p>
   * 		       </note>
   */
  ComplianceType?: ComplianceType | string;

  /**
   * <p>The maximum number of evaluation results returned on each page.
   * 			The default is 50. You cannot specify a number greater than 100. If
   * 			you specify 0, AWS Config uses the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace GetAggregateComplianceDetailsByConfigRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAggregateComplianceDetailsByConfigRuleRequest): any => ({
    ...obj,
  });
}

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

export namespace GetAggregateComplianceDetailsByConfigRuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAggregateComplianceDetailsByConfigRuleResponse): any => ({
    ...obj,
  });
}

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
   * 			If you specify 0, AWS Config uses the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace GetAggregateConfigRuleComplianceSummaryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAggregateConfigRuleComplianceSummaryRequest): any => ({
    ...obj,
  });
}

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

export namespace GetAggregateConfigRuleComplianceSummaryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAggregateConfigRuleComplianceSummaryResponse): any => ({
    ...obj,
  });
}

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
   * <p>Groups the result based on AWS Account ID or AWS Region.</p>
   */
  GroupByKey?: AggregateConformancePackComplianceSummaryGroupKey | string;

  /**
   * <p>The maximum number of results returned on each page. The default is maximum. If you specify 0, AWS Config uses the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace GetAggregateConformancePackComplianceSummaryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAggregateConformancePackComplianceSummaryRequest): any => ({
    ...obj,
  });
}

export interface GetAggregateConformancePackComplianceSummaryResponse {
  /**
   * <p>Returns a list of <code>AggregateConformancePackComplianceSummary</code> object.</p>
   */
  AggregateConformancePackComplianceSummaries?: AggregateConformancePackComplianceSummary[];

  /**
   * <p>Groups the result based on AWS Account ID or AWS Region.</p>
   */
  GroupByKey?: string;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace GetAggregateConformancePackComplianceSummaryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAggregateConformancePackComplianceSummaryResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Filters the resource count based on account ID, region, and resource type.</p>
 */
export interface ResourceCountFilters {
  /**
   * <p>The type of the AWS resource.</p>
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

export namespace ResourceCountFilters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceCountFilters): any => ({
    ...obj,
  });
}

export enum ResourceCountGroupKey {
  ACCOUNT_ID = "ACCOUNT_ID",
  AWS_REGION = "AWS_REGION",
  RESOURCE_TYPE = "RESOURCE_TYPE",
}

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
   * <p>The maximum number of <a>GroupedResourceCount</a> objects returned on each page. The default is 1000. You cannot specify a number greater than 1000. If you specify 0, AWS Config uses the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

export namespace GetAggregateDiscoveredResourceCountsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAggregateDiscoveredResourceCountsRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace GroupedResourceCount {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GroupedResourceCount): any => ({
    ...obj,
  });
}

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

export namespace GetAggregateDiscoveredResourceCountsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAggregateDiscoveredResourceCountsResponse): any => ({
    ...obj,
  });
}

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

export namespace GetAggregateResourceConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAggregateResourceConfigRequest): any => ({
    ...obj,
  });
}

export interface GetAggregateResourceConfigResponse {
  /**
   * <p>Returns a <code>ConfigurationItem</code> object.</p>
   */
  ConfigurationItem?: ConfigurationItem;
}

export namespace GetAggregateResourceConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAggregateResourceConfigResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration item size is outside the allowable range.</p>
 */
export interface OversizedConfigurationItemException extends __SmithyException, $MetadataBearer {
  name: "OversizedConfigurationItemException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace OversizedConfigurationItemException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OversizedConfigurationItemException): any => ({
    ...obj,
  });
}

/**
 * <p>You have specified a resource that is either unknown or has not
 * 			been discovered.</p>
 */
export interface ResourceNotDiscoveredException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotDiscoveredException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace ResourceNotDiscoveredException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotDiscoveredException): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface GetComplianceDetailsByConfigRuleRequest {
  /**
   * <p>The name of the AWS Config rule for which you want compliance
   * 			information.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>Filters the results by compliance.</p>
   * 		       <p>The allowed values are <code>COMPLIANT</code>,
   * 				<code>NON_COMPLIANT</code>, and
   * 			<code>NOT_APPLICABLE</code>.</p>
   */
  ComplianceTypes?: (ComplianceType | string)[];

  /**
   * <p>The maximum number of evaluation results returned on each page.
   * 			The default is 10. You cannot specify a number greater than 100. If
   * 			you specify 0, AWS Config uses the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   */
  NextToken?: string;
}

export namespace GetComplianceDetailsByConfigRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetComplianceDetailsByConfigRuleRequest): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface GetComplianceDetailsByConfigRuleResponse {
  /**
   * <p>Indicates whether the AWS resource complies with the specified
   * 			AWS Config rule.</p>
   */
  EvaluationResults?: EvaluationResult[];

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace GetComplianceDetailsByConfigRuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetComplianceDetailsByConfigRuleResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface GetComplianceDetailsByResourceRequest {
  /**
   * <p>The type of the AWS resource for which you want compliance
   * 			information.</p>
   */
  ResourceType: string | undefined;

  /**
   * <p>The ID of the AWS resource for which you want compliance
   * 			information.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>Filters the results by compliance.</p>
   * 		       <p>The allowed values are <code>COMPLIANT</code>,
   * 				<code>NON_COMPLIANT</code>, and
   * 			<code>NOT_APPLICABLE</code>.</p>
   */
  ComplianceTypes?: (ComplianceType | string)[];

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   */
  NextToken?: string;
}

export namespace GetComplianceDetailsByResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetComplianceDetailsByResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface GetComplianceDetailsByResourceResponse {
  /**
   * <p>Indicates whether the specified AWS resource complies each AWS
   * 			Config rule.</p>
   */
  EvaluationResults?: EvaluationResult[];

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace GetComplianceDetailsByResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetComplianceDetailsByResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface GetComplianceSummaryByConfigRuleResponse {
  /**
   * <p>The number of AWS Config rules that are compliant and the
   * 			number that are noncompliant, up to a maximum of 25 for
   * 			each.</p>
   */
  ComplianceSummary?: ComplianceSummary;
}

export namespace GetComplianceSummaryByConfigRuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetComplianceSummaryByConfigRuleResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface GetComplianceSummaryByResourceTypeRequest {
  /**
   * <p>Specify one or more resource types to get the number of
   * 			resources that are compliant and the number that are noncompliant
   * 			for each resource type.</p>
   * 		       <p>For this request, you can specify an AWS resource type such as
   * 				<code>AWS::EC2::Instance</code>. You can specify that the
   * 			resource type is an AWS account by specifying
   * 				<code>AWS::::Account</code>.</p>
   */
  ResourceTypes?: string[];
}

export namespace GetComplianceSummaryByResourceTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetComplianceSummaryByResourceTypeRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace GetComplianceSummaryByResourceTypeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetComplianceSummaryByResourceTypeResponse): any => ({
    ...obj,
  });
}

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
   * <p>The maximum number of evaluation results returned on each page. If you do no specify a number, AWS Config uses the default. The default is 100.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace GetConformancePackComplianceDetailsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConformancePackComplianceDetailsRequest): any => ({
    ...obj,
  });
}

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

export namespace GetConformancePackComplianceDetailsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConformancePackComplianceDetailsResponse): any => ({
    ...obj,
  });
}

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

export namespace GetConformancePackComplianceSummaryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConformancePackComplianceSummaryRequest): any => ({
    ...obj,
  });
}

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

export namespace GetConformancePackComplianceSummaryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConformancePackComplianceSummaryResponse): any => ({
    ...obj,
  });
}

export interface GetDiscoveredResourceCountsRequest {
  /**
   * <p>The comma-separated list that specifies the resource types that
   * 			you want AWS Config to return (for example,
   * 				<code>"AWS::EC2::Instance"</code>,
   * 			<code>"AWS::IAM::User"</code>).</p>
   *
   * 		       <p>If a value for <code>resourceTypes</code> is not specified, AWS
   * 			Config returns all resource types that AWS Config is recording in
   * 			the region for your account.</p>
   * 		       <note>
   * 			         <p>If the configuration recorder is turned off, AWS Config
   * 				returns an empty list of <a>ResourceCount</a>
   * 				objects. If the configuration recorder is not recording a
   * 				specific resource type (for example, S3 buckets), that resource
   * 				type is not returned in the list of <a>ResourceCount</a> objects.</p>
   * 		       </note>
   */
  resourceTypes?: string[];

  /**
   * <p>The maximum number of <a>ResourceCount</a> objects
   * 			returned on each page. The default is 100. You cannot specify a
   * 			number greater than 100. If you specify 0, AWS Config uses the
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

export namespace GetDiscoveredResourceCountsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDiscoveredResourceCountsRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace ResourceCount {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceCount): any => ({
    ...obj,
  });
}

export interface GetDiscoveredResourceCountsResponse {
  /**
   * <p>The total number of resources that AWS Config is recording in
   * 			the region for your account. If you specify resource types in the
   * 			request, AWS Config returns only the total number of resources for
   * 			those resource types.</p>
   *
   *
   * 		       <p class="title">
   *             <b>Example</b>
   *          </p>
   *          <ol>
   *             <li>
   * 				           <p>AWS Config is recording three resource types in the US
   * 					East (Ohio) Region for your account: 25 EC2 instances, 20
   * 					IAM users, and 15 S3 buckets, for a total of 60
   * 					resources.</p>
   * 			         </li>
   *             <li>
   * 				           <p>You make a call to the
   * 						<code>GetDiscoveredResourceCounts</code> action and
   * 					specify the resource type,
   * 						<code>"AWS::EC2::Instances"</code>, in the
   * 					request.</p>
   * 			         </li>
   *             <li>
   * 				           <p>AWS Config returns 25 for
   * 						<code>totalDiscoveredResources</code>.</p>
   * 			         </li>
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

export namespace GetDiscoveredResourceCountsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDiscoveredResourceCountsResponse): any => ({
    ...obj,
  });
}

export enum MemberAccountRuleStatus {
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  CREATE_SUCCESSFUL = "CREATE_SUCCESSFUL",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  DELETE_SUCCESSFUL = "DELETE_SUCCESSFUL",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
  UPDATE_SUCCESSFUL = "UPDATE_SUCCESSFUL",
}

/**
 * <p>Status filter object to filter results based on specific member account ID or status type for an organization config rule. </p>
 */
export interface StatusDetailFilters {
  /**
   * <p>The 12-digit account ID of the member account within an organization.</p>
   */
  AccountId?: string;

  /**
   * <p>Indicates deployment status for config rule in the member account.
   * 			When master account calls <code>PutOrganizationConfigRule</code> action for the first time, config rule status is created in the member account.
   * 			When master account calls <code>PutOrganizationConfigRule</code> action for the second time, config rule status is updated in the member account.
   * 			Config rule status is deleted when the master account deletes <code>OrganizationConfigRule</code> and disables service access for <code>config-multiaccountsetup.amazonaws.com</code>.
   * 			</p>
   * 		       <p>AWS Config sets the state of the rule to:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_SUCCESSFUL</code> when config rule has been created in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> when config rule is being created in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code> when config rule creation has failed in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_FAILED</code> when config rule deletion has failed in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_IN_PROGRESS</code> when config rule is being deleted in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_SUCCESSFUL</code> when config rule has been deleted in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_SUCCESSFUL</code> when config rule has been updated in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_IN_PROGRESS</code> when config rule is being updated in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FAILED</code> when config rule deletion has failed in the member account.</p>
   *             </li>
   *          </ul>
   */
  MemberAccountRuleStatus?: MemberAccountRuleStatus | string;
}

export namespace StatusDetailFilters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StatusDetailFilters): any => ({
    ...obj,
  });
}

export interface GetOrganizationConfigRuleDetailedStatusRequest {
  /**
   * <p>The name of organization config rule for which you want status details for member accounts.</p>
   */
  OrganizationConfigRuleName: string | undefined;

  /**
   * <p>A <code>StatusDetailFilters</code> object.</p>
   */
  Filters?: StatusDetailFilters;

  /**
   * <p>The maximum number of <code>OrganizationConfigRuleDetailedStatus</code> returned on each page. If you do not specify a number, AWS Config uses the default. The default is 100.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

export namespace GetOrganizationConfigRuleDetailedStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOrganizationConfigRuleDetailedStatusRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Organization config rule creation or deletion status in each member account. This includes the name of the rule, the status, error code and error message when the rule creation or deletion failed.</p>
 */
export interface MemberAccountStatus {
  /**
   * <p>The 12-digit account ID of a member account.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The name of config rule deployed in the member account.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>Indicates deployment status for config rule in the member account.
   * 			When master account calls <code>PutOrganizationConfigRule</code> action for the first time, config rule status is created in the member account.
   * 			When master account calls <code>PutOrganizationConfigRule</code> action for the second time, config rule status is updated in the member account.
   * 			Config rule status is deleted when the master account deletes <code>OrganizationConfigRule</code> and disables service access for <code>config-multiaccountsetup.amazonaws.com</code>.
   * 		</p>
   * 		       <p> AWS Config sets the state of the rule to:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_SUCCESSFUL</code> when config rule has been created in the member account. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> when config rule is being created in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code> when config rule creation has failed in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_FAILED</code> when config rule deletion has failed in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_IN_PROGRESS</code> when config rule is being deleted in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_SUCCESSFUL</code> when config rule has been deleted in the member account. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_SUCCESSFUL</code> when config rule has been updated in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_IN_PROGRESS</code> when config rule is being updated in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FAILED</code> when config rule deletion has failed in the member account.</p>
   *             </li>
   *          </ul>
   */
  MemberAccountRuleStatus: MemberAccountRuleStatus | string | undefined;

  /**
   * <p>An error code that is returned when config rule creation or deletion failed in the member account.</p>
   */
  ErrorCode?: string;

  /**
   * <p>An error message indicating that config rule account creation or deletion has failed due to an error in the member account.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The timestamp of the last status update.</p>
   */
  LastUpdateTime?: Date;
}

export namespace MemberAccountStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MemberAccountStatus): any => ({
    ...obj,
  });
}

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

export namespace GetOrganizationConfigRuleDetailedStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOrganizationConfigRuleDetailedStatusResponse): any => ({
    ...obj,
  });
}

export enum OrganizationResourceDetailedStatus {
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  CREATE_SUCCESSFUL = "CREATE_SUCCESSFUL",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  DELETE_SUCCESSFUL = "DELETE_SUCCESSFUL",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
  UPDATE_SUCCESSFUL = "UPDATE_SUCCESSFUL",
}

/**
 * <p>Status filter object to filter results based on specific member account ID or status type for an organization conformance pack.</p>
 */
export interface OrganizationResourceDetailedStatusFilters {
  /**
   * <p>The 12-digit account ID of the member account within an organization.</p>
   */
  AccountId?: string;

  /**
   * <p>Indicates deployment status for conformance pack in a member account.
   * 			When master account calls <code>PutOrganizationConformancePack</code> action for the first time, conformance pack status is created in the member account.
   * 			When master account calls <code>PutOrganizationConformancePack</code> action for the second time, conformance pack status is updated in the member account.
   * 			Conformance pack status is deleted when the master account deletes <code>OrganizationConformancePack</code> and disables service access for <code>config-multiaccountsetup.amazonaws.com</code>.
   * 		</p>
   * 		       <p> AWS Config sets the state of the conformance pack to:</p>
   * 		       <ul>
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

export namespace OrganizationResourceDetailedStatusFilters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrganizationResourceDetailedStatusFilters): any => ({
    ...obj,
  });
}

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
   * 			If you do not specify a number, AWS Config uses the default. The default is 100. </p>
   */
  Limit?: number;

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

export namespace GetOrganizationConformancePackDetailedStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOrganizationConformancePackDetailedStatusRequest): any => ({
    ...obj,
  });
}

/**
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
   * 			When master account calls <code>PutOrganizationConformancePack</code> action for the first time, conformance pack status is created in the member account.
   * 			When master account calls <code>PutOrganizationConformancePack</code> action for the second time, conformance pack status is updated in the member account.
   * 			Conformance pack status is deleted when the master account deletes <code>OrganizationConformancePack</code> and disables service access for <code>config-multiaccountsetup.amazonaws.com</code>.
   * 		</p>
   * 		       <p> AWS Config sets the state of the conformance pack to:</p>
   * 		       <ul>
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

export namespace OrganizationConformancePackDetailedStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrganizationConformancePackDetailedStatus): any => ({
    ...obj,
  });
}

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

export namespace GetOrganizationConformancePackDetailedStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOrganizationConformancePackDetailedStatusResponse): any => ({
    ...obj,
  });
}

/**
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
   * 			100. If you specify 0, AWS Config uses the default.</p>
   */
  limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   */
  nextToken?: string;
}

export namespace GetResourceConfigHistoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourceConfigHistoryRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace GetResourceConfigHistoryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourceConfigHistoryResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified time range is not valid. The earlier time is not
 * 			chronologically before the later time.</p>
 */
export interface InvalidTimeRangeException extends __SmithyException, $MetadataBearer {
  name: "InvalidTimeRangeException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace InvalidTimeRangeException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidTimeRangeException): any => ({
    ...obj,
  });
}

export interface GetStoredQueryRequest {
  /**
   * <p>The name of the query.</p>
   */
  QueryName: string | undefined;
}

export namespace GetStoredQueryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStoredQueryRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace StoredQuery {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StoredQuery): any => ({
    ...obj,
  });
}

export interface GetStoredQueryResponse {
  /**
   * <p>Returns a <code>StoredQuery</code> object.</p>
   */
  StoredQuery?: StoredQuery;
}

export namespace GetStoredQueryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStoredQueryResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Your Amazon S3 bucket policy does not permit AWS Config to
 * 			write to it.</p>
 */
export interface InsufficientDeliveryPolicyException extends __SmithyException, $MetadataBearer {
  name: "InsufficientDeliveryPolicyException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace InsufficientDeliveryPolicyException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsufficientDeliveryPolicyException): any => ({
    ...obj,
  });
}

/**
 * <p>You have provided a configuration recorder name that is not
 * 			valid.</p>
 */
export interface InvalidConfigurationRecorderNameException extends __SmithyException, $MetadataBearer {
  name: "InvalidConfigurationRecorderNameException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace InvalidConfigurationRecorderNameException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidConfigurationRecorderNameException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified delivery channel name is not valid.</p>
 */
export interface InvalidDeliveryChannelNameException extends __SmithyException, $MetadataBearer {
  name: "InvalidDeliveryChannelNameException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace InvalidDeliveryChannelNameException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidDeliveryChannelNameException): any => ({
    ...obj,
  });
}

/**
 * <p>The syntax of the query is incorrect.</p>
 */
export interface InvalidExpressionException extends __SmithyException, $MetadataBearer {
  name: "InvalidExpressionException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace InvalidExpressionException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidExpressionException): any => ({
    ...obj,
  });
}

/**
 * <p>AWS Config throws an exception if the recording group does not contain a valid list of resource types. Invalid values might also be incorrectly formatted.</p>
 */
export interface InvalidRecordingGroupException extends __SmithyException, $MetadataBearer {
  name: "InvalidRecordingGroupException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace InvalidRecordingGroupException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidRecordingGroupException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified <code>ResultToken</code> is invalid.</p>
 */
export interface InvalidResultTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidResultTokenException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace InvalidResultTokenException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidResultTokenException): any => ({
    ...obj,
  });
}

/**
 * <p>You have provided a null or empty role ARN.</p>
 */
export interface InvalidRoleException extends __SmithyException, $MetadataBearer {
  name: "InvalidRoleException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace InvalidRoleException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidRoleException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified Amazon S3 key prefix is not valid.</p>
 */
export interface InvalidS3KeyPrefixException extends __SmithyException, $MetadataBearer {
  name: "InvalidS3KeyPrefixException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace InvalidS3KeyPrefixException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidS3KeyPrefixException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified Amazon KMS Key ARN is not valid.</p>
 */
export interface InvalidS3KmsKeyArnException extends __SmithyException, $MetadataBearer {
  name: "InvalidS3KmsKeyArnException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace InvalidS3KmsKeyArnException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidS3KmsKeyArnException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified Amazon SNS topic does not exist.</p>
 */
export interface InvalidSNSTopicARNException extends __SmithyException, $MetadataBearer {
  name: "InvalidSNSTopicARNException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace InvalidSNSTopicARNException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidSNSTopicARNException): any => ({
    ...obj,
  });
}

/**
 * <p>For <code>StartConfigRulesEvaluation</code> API, this exception
 * 			is thrown if an evaluation is in progress or if you call the <a>StartConfigRulesEvaluation</a> API more than once per
 * 			minute.</p>
 * 		       <p>For <code>PutConfigurationAggregator</code> API, this exception
 * 			is thrown if the number of accounts and aggregators exceeds the
 * 			limit.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace LimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
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

export namespace ResourceFilters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceFilters): any => ({
    ...obj,
  });
}

export interface ListAggregateDiscoveredResourcesRequest {
  /**
   * <p>The name of the configuration aggregator. </p>
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>The type of resources that you want AWS Config to list in the response.</p>
   */
  ResourceType: ResourceType | string | undefined;

  /**
   * <p>Filters the results based on the <code>ResourceFilters</code> object.</p>
   */
  Filters?: ResourceFilters;

  /**
   * <p>The maximum number of resource identifiers returned on each page. You cannot specify a number greater than 100. If you specify 0, AWS Config uses the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace ListAggregateDiscoveredResourcesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAggregateDiscoveredResourcesRequest): any => ({
    ...obj,
  });
}

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

export namespace ListAggregateDiscoveredResourcesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAggregateDiscoveredResourcesResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ListDiscoveredResourcesRequest {
  /**
   * <p>The type of resources that you want AWS Config to list in the
   * 			response.</p>
   */
  resourceType: ResourceType | string | undefined;

  /**
   * <p>The IDs of only those resources that you want AWS Config to
   * 			list in the response. If you do not specify this parameter, AWS
   * 			Config lists all resources of the specified type that it has
   * 			discovered.</p>
   */
  resourceIds?: string[];

  /**
   * <p>The custom name of only those resources that you want AWS
   * 			Config to list in the response. If you do not specify this
   * 			parameter, AWS Config lists all resources of the specified type that
   * 			it has discovered.</p>
   */
  resourceName?: string;

  /**
   * <p>The maximum number of resource identifiers returned on each
   * 			page. The default is 100. You cannot specify a number greater than
   * 			100. If you specify 0, AWS Config uses the default.</p>
   */
  limit?: number;

  /**
   * <p>Specifies whether AWS Config includes deleted resources in the
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

export namespace ListDiscoveredResourcesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDiscoveredResourcesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The details that identify a resource that is discovered by AWS
 * 			Config, including the resource type, ID, and (if available) the
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

export namespace ResourceIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceIdentifier): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ListDiscoveredResourcesResponse {
  /**
   * <p>The details that identify a resource that is discovered by AWS
   * 			Config, including the resource type, ID, and (if available) the
   * 			custom resource name.</p>
   */
  resourceIdentifiers?: ResourceIdentifier[];

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   */
  nextToken?: string;
}

export namespace ListDiscoveredResourcesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDiscoveredResourcesResponse): any => ({
    ...obj,
  });
}

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

export namespace ListStoredQueriesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStoredQueriesRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace StoredQueryMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StoredQueryMetadata): any => ({
    ...obj,
  });
}

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

export namespace ListStoredQueriesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStoredQueriesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are <code>ConfigRule</code>, <code>ConfigurationAggregator</code> and <code>AggregatorAuthorization</code>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The maximum number of tags returned on each page. The limit maximum is 50. You cannot specify a number greater than 50. If you specify 0, AWS Config uses the default. </p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

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

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You have reached the limit (100,000) of active custom resource types in your account.
 * 			Delete unused resources using <code>DeleteResourceConfig</code>.</p>
 */
export interface MaxActiveResourcesExceededException extends __SmithyException, $MetadataBearer {
  name: "MaxActiveResourcesExceededException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace MaxActiveResourcesExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaxActiveResourcesExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>Failed to add the AWS Config rule because the account already
 * 			contains the maximum number of 150 rules. Consider deleting any
 * 			deactivated rules before you add new rules.</p>
 */
export interface MaxNumberOfConfigRulesExceededException extends __SmithyException, $MetadataBearer {
  name: "MaxNumberOfConfigRulesExceededException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace MaxNumberOfConfigRulesExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaxNumberOfConfigRulesExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>You have reached the limit of the number of recorders you can
 * 			create.</p>
 */
export interface MaxNumberOfConfigurationRecordersExceededException extends __SmithyException, $MetadataBearer {
  name: "MaxNumberOfConfigurationRecordersExceededException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace MaxNumberOfConfigurationRecordersExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaxNumberOfConfigurationRecordersExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>You have reached the limit (6) of the number of conformance packs in an account (6 conformance pack with 25 AWS Config rules per pack).</p>
 */
export interface MaxNumberOfConformancePacksExceededException extends __SmithyException, $MetadataBearer {
  name: "MaxNumberOfConformancePacksExceededException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace MaxNumberOfConformancePacksExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaxNumberOfConformancePacksExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>You have reached the limit of the number of delivery channels
 * 			you can create.</p>
 */
export interface MaxNumberOfDeliveryChannelsExceededException extends __SmithyException, $MetadataBearer {
  name: "MaxNumberOfDeliveryChannelsExceededException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace MaxNumberOfDeliveryChannelsExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaxNumberOfDeliveryChannelsExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>You have reached the limit of the number of organization config rules you can create.</p>
 */
export interface MaxNumberOfOrganizationConfigRulesExceededException extends __SmithyException, $MetadataBearer {
  name: "MaxNumberOfOrganizationConfigRulesExceededException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace MaxNumberOfOrganizationConfigRulesExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaxNumberOfOrganizationConfigRulesExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>You have reached the limit (6) of the number of organization conformance packs in an account (6 conformance pack with 25 AWS Config rules per pack per account).</p>
 */
export interface MaxNumberOfOrganizationConformancePacksExceededException extends __SmithyException, $MetadataBearer {
  name: "MaxNumberOfOrganizationConformancePacksExceededException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace MaxNumberOfOrganizationConformancePacksExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaxNumberOfOrganizationConformancePacksExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>Failed to add the retention configuration because a retention configuration with that name already exists.</p>
 */
export interface MaxNumberOfRetentionConfigurationsExceededException extends __SmithyException, $MetadataBearer {
  name: "MaxNumberOfRetentionConfigurationsExceededException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace MaxNumberOfRetentionConfigurationsExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaxNumberOfRetentionConfigurationsExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>There is no delivery channel available to record
 * 			configurations.</p>
 */
export interface NoAvailableDeliveryChannelException extends __SmithyException, $MetadataBearer {
  name: "NoAvailableDeliveryChannelException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoAvailableDeliveryChannelException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoAvailableDeliveryChannelException): any => ({
    ...obj,
  });
}

/**
 * <p>Organization is no longer available.</p>
 */
export interface NoAvailableOrganizationException extends __SmithyException, $MetadataBearer {
  name: "NoAvailableOrganizationException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoAvailableOrganizationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoAvailableOrganizationException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified Amazon S3 bucket does not exist.</p>
 */
export interface NoSuchBucketException extends __SmithyException, $MetadataBearer {
  name: "NoSuchBucketException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoSuchBucketException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoSuchBucketException): any => ({
    ...obj,
  });
}

/**
 * <p>AWS Config resource cannot be created because your organization does not have all features enabled.</p>
 */
export interface OrganizationAllFeaturesNotEnabledException extends __SmithyException, $MetadataBearer {
  name: "OrganizationAllFeaturesNotEnabledException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace OrganizationAllFeaturesNotEnabledException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrganizationAllFeaturesNotEnabledException): any => ({
    ...obj,
  });
}

/**
 * <p>You have specified a template that is not valid or supported.</p>
 */
export interface OrganizationConformancePackTemplateValidationException extends __SmithyException, $MetadataBearer {
  name: "OrganizationConformancePackTemplateValidationException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace OrganizationConformancePackTemplateValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrganizationConformancePackTemplateValidationException): any => ({
    ...obj,
  });
}

export interface PutAggregationAuthorizationRequest {
  /**
   * <p>The 12-digit account ID of the account authorized to aggregate data.</p>
   */
  AuthorizedAccountId: string | undefined;

  /**
   * <p>The region authorized to collect aggregated data.</p>
   */
  AuthorizedAwsRegion: string | undefined;

  /**
   * <p>An array of tag object.</p>
   */
  Tags?: Tag[];
}

export namespace PutAggregationAuthorizationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutAggregationAuthorizationRequest): any => ({
    ...obj,
  });
}

export interface PutAggregationAuthorizationResponse {
  /**
   * <p>Returns an AggregationAuthorization object.
   *
   * 		</p>
   */
  AggregationAuthorization?: AggregationAuthorization;
}

export namespace PutAggregationAuthorizationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutAggregationAuthorizationResponse): any => ({
    ...obj,
  });
}

export interface PutConfigRuleRequest {
  /**
   * <p>The rule that you want to add to your account.</p>
   */
  ConfigRule: ConfigRule | undefined;

  /**
   * <p>An array of tag object.</p>
   */
  Tags?: Tag[];
}

export namespace PutConfigRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutConfigRuleRequest): any => ({
    ...obj,
  });
}

export interface PutConfigurationAggregatorRequest {
  /**
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>A list of AccountAggregationSource object.
   *
   * 		</p>
   */
  AccountAggregationSources?: AccountAggregationSource[];

  /**
   * <p>An OrganizationAggregationSource object.</p>
   */
  OrganizationAggregationSource?: OrganizationAggregationSource;

  /**
   * <p>An array of tag object.</p>
   */
  Tags?: Tag[];
}

export namespace PutConfigurationAggregatorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutConfigurationAggregatorRequest): any => ({
    ...obj,
  });
}

export interface PutConfigurationAggregatorResponse {
  /**
   * <p>Returns a ConfigurationAggregator object.</p>
   */
  ConfigurationAggregator?: ConfigurationAggregator;
}

export namespace PutConfigurationAggregatorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutConfigurationAggregatorResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the <a>PutConfigurationRecorder</a>
 * 			action.</p>
 */
export interface PutConfigurationRecorderRequest {
  /**
   * <p>The configuration recorder object that records each
   * 			configuration change made to the resources.</p>
   */
  ConfigurationRecorder: ConfigurationRecorder | undefined;
}

export namespace PutConfigurationRecorderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutConfigurationRecorderRequest): any => ({
    ...obj,
  });
}

export interface PutConformancePackRequest {
  /**
   * <p>Name of the conformance pack you want to create.</p>
   */
  ConformancePackName: string | undefined;

  /**
   * <p>Location of file containing the template body (<code>s3://bucketname/prefix</code>). The uri must point to the conformance pack template (max size: 300 KB) that is located in an Amazon S3 bucket in the same region as the conformance pack. </p>
   * 		       <note>
   *             <p>You must have access to read Amazon S3 bucket.</p>
   *          </note>
   */
  TemplateS3Uri?: string;

  /**
   * <p>A string containing full conformance pack template body. Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes.</p>
   * 		       <note>
   *             <p>You can only use a YAML template with one resource type, that is, config rule and a remediation action. </p>
   *          </note>
   */
  TemplateBody?: string;

  /**
   * <p>Amazon S3 bucket where AWS Config stores conformance pack templates.</p>
   * 		       <note>
   *             <p>This field is optional.</p>
   *          </note>
   */
  DeliveryS3Bucket?: string;

  /**
   * <p>The prefix for the Amazon S3 bucket. </p>
   * 		       <note>
   *             <p>This field is optional.</p>
   *          </note>
   */
  DeliveryS3KeyPrefix?: string;

  /**
   * <p>A list of <code>ConformancePackInputParameter</code> objects.</p>
   */
  ConformancePackInputParameters?: ConformancePackInputParameter[];
}

export namespace PutConformancePackRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutConformancePackRequest): any => ({
    ...obj,
  });
}

export interface PutConformancePackResponse {
  /**
   * <p>ARN of the conformance pack.</p>
   */
  ConformancePackArn?: string;
}

export namespace PutConformancePackResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutConformancePackResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the <a>PutDeliveryChannel</a>
 * 			action.</p>
 */
export interface PutDeliveryChannelRequest {
  /**
   * <p>The configuration delivery channel object that delivers the
   * 			configuration information to an Amazon S3 bucket and to an Amazon
   * 			SNS topic.</p>
   */
  DeliveryChannel: DeliveryChannel | undefined;
}

export namespace PutDeliveryChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutDeliveryChannelRequest): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface PutEvaluationsRequest {
  /**
   * <p>The assessments that the AWS Lambda function performs. Each
   * 			evaluation identifies an AWS resource and indicates whether it
   * 			complies with the AWS Config rule that invokes the AWS Lambda
   * 			function.</p>
   */
  Evaluations?: Evaluation[];

  /**
   * <p>An encrypted token that associates an evaluation with an AWS
   * 			Config rule. Identifies the rule and the event that triggered the
   * 			evaluation.</p>
   */
  ResultToken: string | undefined;

  /**
   * <p>Use this parameter to specify a test run for
   * 				<code>PutEvaluations</code>. You can verify whether your AWS
   * 			Lambda function will deliver evaluation results to AWS Config. No
   * 			updates occur to your existing evaluations, and evaluation results
   * 			are not sent to AWS Config.</p>
   *
   * 		       <note>
   * 			         <p>When <code>TestMode</code> is <code>true</code>,
   * 					<code>PutEvaluations</code> doesn't require a valid value
   * 				for the <code>ResultToken</code> parameter, but the value cannot
   * 				be null.</p>
   * 		       </note>
   */
  TestMode?: boolean;
}

export namespace PutEvaluationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutEvaluationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface PutEvaluationsResponse {
  /**
   * <p>Requests that failed because of a client or server
   * 			error.</p>
   */
  FailedEvaluations?: Evaluation[];
}

export namespace PutEvaluationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutEvaluationsResponse): any => ({
    ...obj,
  });
}

export interface PutExternalEvaluationRequest {
  /**
   * <p>The name of the AWS Config rule.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>An <code>ExternalEvaluation</code> object that provides details about compliance.</p>
   */
  ExternalEvaluation: ExternalEvaluation | undefined;
}

export namespace PutExternalEvaluationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutExternalEvaluationRequest): any => ({
    ...obj,
  });
}

export interface PutExternalEvaluationResponse {}

export namespace PutExternalEvaluationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutExternalEvaluationResponse): any => ({
    ...obj,
  });
}

export interface PutOrganizationConfigRuleRequest {
  /**
   * <p>The name that you assign to an organization config rule.</p>
   */
  OrganizationConfigRuleName: string | undefined;

  /**
   * <p>An <code>OrganizationManagedRuleMetadata</code> object. </p>
   */
  OrganizationManagedRuleMetadata?: OrganizationManagedRuleMetadata;

  /**
   * <p>An <code>OrganizationCustomRuleMetadata</code> object.</p>
   */
  OrganizationCustomRuleMetadata?: OrganizationCustomRuleMetadata;

  /**
   * <p>A comma-separated list of accounts that you want to exclude from an organization config rule.</p>
   */
  ExcludedAccounts?: string[];
}

export namespace PutOrganizationConfigRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutOrganizationConfigRuleRequest): any => ({
    ...obj,
  });
}

export interface PutOrganizationConfigRuleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of an organization config rule.</p>
   */
  OrganizationConfigRuleArn?: string;
}

export namespace PutOrganizationConfigRuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutOrganizationConfigRuleResponse): any => ({
    ...obj,
  });
}

export interface PutOrganizationConformancePackRequest {
  /**
   * <p>Name of the organization conformance pack you want to create.</p>
   */
  OrganizationConformancePackName: string | undefined;

  /**
   * <p>Location of file containing the template body. The uri must point to the conformance pack template
   * 			(max size: 300 KB).</p>
   * 		       <note>
   *             <p>You must have access to read Amazon S3 bucket.</p>
   *          </note>
   */
  TemplateS3Uri?: string;

  /**
   * <p>A string containing full conformance pack template body. Structure containing the template body
   * 			with a minimum length of 1 byte and a maximum length of 51,200 bytes.</p>
   */
  TemplateBody?: string;

  /**
   * <p>Amazon S3 bucket where AWS Config stores conformance pack templates.</p>
   * 		       <note>
   *             <p>This field is optional. If used, it must be prefixed with <code>awsconfigconforms</code>.</p>
   *          </note>
   */
  DeliveryS3Bucket?: string;

  /**
   * <p>The prefix for the Amazon S3 bucket.</p>
   * 		       <note>
   *             <p>This field is optional.</p>
   *          </note>
   */
  DeliveryS3KeyPrefix?: string;

  /**
   * <p>A list of <code>ConformancePackInputParameter</code> objects.</p>
   */
  ConformancePackInputParameters?: ConformancePackInputParameter[];

  /**
   * <p>A list of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack.</p>
   */
  ExcludedAccounts?: string[];
}

export namespace PutOrganizationConformancePackRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutOrganizationConformancePackRequest): any => ({
    ...obj,
  });
}

export interface PutOrganizationConformancePackResponse {
  /**
   * <p>ARN of the organization conformance pack.</p>
   */
  OrganizationConformancePackArn?: string;
}

export namespace PutOrganizationConformancePackResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutOrganizationConformancePackResponse): any => ({
    ...obj,
  });
}

export interface PutRemediationConfigurationsRequest {
  /**
   * <p>A list of remediation configuration objects.</p>
   */
  RemediationConfigurations: RemediationConfiguration[] | undefined;
}

export namespace PutRemediationConfigurationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRemediationConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface PutRemediationConfigurationsResponse {
  /**
   * <p>Returns a list of failed remediation batch objects.</p>
   */
  FailedBatches?: FailedRemediationBatch[];
}

export namespace PutRemediationConfigurationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRemediationConfigurationsResponse): any => ({
    ...obj,
  });
}

export interface PutRemediationExceptionsRequest {
  /**
   * <p>The name of the AWS Config rule for which you want to create remediation exception.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>An exception list of resource exception keys to be processed with the current request. AWS Config adds exception for each resource key. For example, AWS Config adds 3 exceptions for 3 resource keys. </p>
   */
  ResourceKeys: RemediationExceptionResourceKey[] | undefined;

  /**
   * <p>The message contains an explanation of the exception.</p>
   */
  Message?: string;

  /**
   * <p>The exception is automatically deleted after the expiration date.</p>
   */
  ExpirationTime?: Date;
}

export namespace PutRemediationExceptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRemediationExceptionsRequest): any => ({
    ...obj,
  });
}

export interface PutRemediationExceptionsResponse {
  /**
   * <p>Returns a list of failed remediation exceptions batch objects. Each object in the batch consists of a list of failed items and failure messages.</p>
   */
  FailedBatches?: FailedRemediationExceptionBatch[];
}

export namespace PutRemediationExceptionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRemediationExceptionsResponse): any => ({
    ...obj,
  });
}
