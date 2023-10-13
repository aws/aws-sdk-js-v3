// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import {
  AccountDetails,
  Action,
  ActionTarget,
  Adjustment,
  AdminAccount,
  AssociationStatus,
  AutoEnableStandards,
  AutomationRulesAction,
  AutomationRulesConfig,
  AutomationRulesFindingFilters,
  AutomationRulesMetadata,
  AwsAmazonMqBrokerDetails,
  AwsApiGatewayRestApiDetails,
  AwsApiGatewayStageDetails,
  AwsApiGatewayV2ApiDetails,
  AwsApiGatewayV2StageDetails,
  AwsAppSyncGraphQlApiDetails,
  AwsAthenaWorkGroupDetails,
  AwsAutoScalingAutoScalingGroupDetails,
  AwsAutoScalingLaunchConfigurationDetails,
  AwsBackupBackupPlanDetails,
  AwsBackupBackupVaultDetails,
  AwsBackupRecoveryPointDetails,
  AwsCertificateManagerCertificateDetails,
  AwsCloudFormationStackDetails,
  AwsCloudFrontDistributionDetails,
  AwsCloudTrailTrailDetails,
  AwsCloudWatchAlarmDetails,
  AwsCodeBuildProjectDetails,
  AwsDmsEndpointDetails,
  AwsDmsReplicationInstanceDetails,
  AwsDmsReplicationTaskDetails,
  AwsDynamoDbTableDetails,
  AwsEc2EipDetails,
  AwsEc2InstanceDetails,
  AwsEc2LaunchTemplateDetails,
  AwsEc2NetworkAclDetails,
  AwsEc2NetworkInterfaceDetails,
  AwsEc2RouteTableDetails,
  AwsEc2SecurityGroupDetails,
  AwsEc2SubnetDetails,
  AwsEc2TransitGatewayDetails,
  AwsEc2VolumeDetails,
  AwsEc2VpcDetails,
  AwsEc2VpcEndpointServiceDetails,
  AwsEc2VpcPeeringConnectionDetails,
  AwsEc2VpnConnectionDetails,
  AwsEcrContainerImageDetails,
  AwsEcrRepositoryDetails,
  AwsEcsClusterDetails,
  AwsEcsContainerDetails,
  AwsEcsServiceDetails,
  AwsEcsTaskDefinitionDetails,
  DateFilter,
  MapFilter,
  NoteUpdate,
  NumberFilter,
  RelatedFinding,
  RuleStatus,
  SeverityLabel,
  SeverityUpdate,
  StringFilter,
  VerificationState,
  WorkflowStatus,
  WorkflowUpdate,
} from "./models_0";
import {
  AwsEcsTaskDetails,
  AwsEfsAccessPointDetails,
  AwsEksClusterDetails,
  AwsElasticBeanstalkEnvironmentDetails,
  AwsElasticsearchDomainDetails,
  AwsElbLoadBalancerDetails,
  AwsElbv2LoadBalancerDetails,
  AwsEventSchemasRegistryDetails,
  AwsEventsEndpointDetails,
  AwsEventsEventbusDetails,
  AwsGuardDutyDetectorDetails,
  AwsIamAccessKeyDetails,
  AwsIamGroupDetails,
  AwsIamPolicyDetails,
  AwsIamRoleDetails,
  AwsIamUserDetails,
  AwsKinesisStreamDetails,
  AwsKmsKeyDetails,
  AwsLambdaFunctionDetails,
  AwsLambdaLayerVersionDetails,
  AwsMskClusterDetails,
  AwsNetworkFirewallFirewallDetails,
  AwsNetworkFirewallFirewallPolicyDetails,
  AwsNetworkFirewallRuleGroupDetails,
  AwsOpenSearchServiceDomainDetails,
  AwsRdsDbClusterDetails,
  AwsRdsDbClusterSnapshotDetails,
  AwsRdsDbInstanceDetails,
  AwsRdsDbSecurityGroupDetails,
  AwsRdsDbSnapshotDetails,
  AwsRdsEventSubscriptionDetails,
  AwsRedshiftClusterDetails,
  AwsRoute53HostedZoneDetails,
  AwsS3AccountPublicAccessBlockDetails,
  AwsS3BucketDetails,
  AwsS3ObjectDetails,
  AwsSageMakerNotebookInstanceDetails,
  AwsSecretsManagerSecretDetails,
  AwsSnsTopicDetails,
  AwsSqsQueueDetails,
  AwsSsmPatchComplianceDetails,
  AwsStepFunctionStateMachineDetails,
  AwsWafRateBasedRuleDetails,
  AwsWafRegionalRateBasedRuleDetails,
  AwsWafRegionalRuleDetails,
  AwsWafRegionalRuleGroupDetails,
  AwsWafRegionalWebAclDetails,
  AwsWafRuleDetails,
  AwsWafRuleGroupDetails,
  AwsWafv2ActionAllowDetails,
  AwsWafv2ActionBlockDetails,
  AwsWafv2RulesActionDetails,
  Compliance,
  DataClassificationDetails,
  FindingProviderFields,
  GeneratorDetails,
  Malware,
  Network,
  NetworkPathComponent,
  Note,
  PatchSummary,
  ProcessDetails,
  RecordState,
  Remediation,
} from "./models_1";
import { SecurityHubServiceException as __BaseException } from "./SecurityHubServiceException";

/**
 * @public
 * <p>
 *          Defines and enables Amazon CloudWatch metrics and web request sample collection.
 *       </p>
 */
export interface AwsWafv2VisibilityConfigDetails {
  /**
   * @public
   * <p>
   *          A boolean indicating whether the associated resource sends metrics to Amazon CloudWatch. For the list of available
   *          metrics, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/monitoring-cloudwatch.html#waf-metrics">WAF metrics and dimensions</a> in the <i>WAF Developer Guide</i>.
   *       </p>
   */
  CloudWatchMetricsEnabled?: boolean;

  /**
   * @public
   * <p>
   *          A name of the Amazon CloudWatch metric.
   *       </p>
   */
  MetricName?: string;

  /**
   * @public
   * <p>
   *          A boolean indicating whether WAF should store a sampling of the web requests that match the rules.
   *          You can view the sampled requests through the WAF console.
   *       </p>
   */
  SampledRequestsEnabled?: boolean;
}

/**
 * @public
 * <p>
 *          Provides details about rules in a rule group. A rule identifies web requests that you want to allow, block, or count. Each rule includes one top-level Statement that WAF uses to identify matching web requests, and parameters that govern how WAF handles them.
 *       </p>
 */
export interface AwsWafv2RulesDetails {
  /**
   * @public
   * <p>
   *          The action that WAF should take on a web request when it matches the rule statement. Settings at the web ACL level can override the rule action setting.
   *       </p>
   */
  Action?: AwsWafv2RulesActionDetails;

  /**
   * @public
   * <p>
   *          The name of the rule.
   *       </p>
   */
  Name?: string;

  /**
   * @public
   * <p>
   *          The action to use in the place of the action that results from the rule group evaluation.
   *       </p>
   */
  OverrideAction?: string;

  /**
   * @public
   * <p>
   *          If you define more than one Rule in a WebACL, WAF evaluates each request against the Rules in order based on the value of <code>Priority</code>.
   *          WAF processes rules with lower priority first. The priorities don't need to be consecutive, but they must all be different.
   *       </p>
   */
  Priority?: number;

  /**
   * @public
   * <p>
   *          Defines and enables Amazon CloudWatch metrics and web request sample collection.
   *       </p>
   */
  VisibilityConfig?: AwsWafv2VisibilityConfigDetails;
}

/**
 * @public
 * <p>
 *          Details about an WAFv2 rule group.
 *       </p>
 */
export interface AwsWafv2RuleGroupDetails {
  /**
   * @public
   * <p>
   *          The web ACL capacity units (WCUs) required for this rule group.
   *       </p>
   */
  Capacity?: number;

  /**
   * @public
   * <p>
   *          A description of the rule group that helps with identification.
   *       </p>
   */
  Description?: string;

  /**
   * @public
   * <p>
   *          A unique identifier for the rule group.
   *       </p>
   */
  Id?: string;

  /**
   * @public
   * <p>
   *          The name of the rule group. You cannot change the name of a rule group after you create it.
   *       </p>
   */
  Name?: string;

  /**
   * @public
   * <p>
   *          The Amazon Resource Name (ARN) of the entity.
   *       </p>
   */
  Arn?: string;

  /**
   * @public
   * <p>
   *          The Rule statements used to identify the web requests that you want to allow, block, or count. Each rule includes one
   *          top-level statement that WAF uses to identify matching web requests, and parameters that govern how
   *          WAF handles them.
   *       </p>
   */
  Rules?: AwsWafv2RulesDetails[];

  /**
   * @public
   * <p>
   *          Specifies whether the rule group is for an Amazon CloudFront distribution or for a regional application.
   *          A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync
   *          GraphQL API, or an Amazon Cognito user pool.
   *       </p>
   */
  Scope?: string;

  /**
   * @public
   * <p>
   *          Defines and enables Amazon CloudWatch metrics and web request sample collection.
   *       </p>
   */
  VisibilityConfig?: AwsWafv2VisibilityConfigDetails;
}

/**
 * @public
 * <p>
 *          Used for CAPTCHA and challenge token settings. Determines how long a CAPTCHA or challenge timestamp remains valid after WAF updates it for a successful CAPTCHA or challenge response.
 *       </p>
 */
export interface AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails {
  /**
   * @public
   * <p>
   *          The amount of time, in seconds, that a CAPTCHA or challenge timestamp is considered valid by WAF.
   *       </p>
   */
  ImmunityTime?: number;
}

/**
 * @public
 * <p>
 *          Specifies how WAF should handle CAPTCHA evaluations for rules that don't have their own <code>CaptchaConfig</code> settings.
 *       </p>
 */
export interface AwsWafv2WebAclCaptchaConfigDetails {
  /**
   * @public
   * <p>
   *          Determines how long a CAPTCHA timestamp in the token remains valid after the client successfully solves a CAPTCHA puzzle.
   *       </p>
   */
  ImmunityTimeProperty?: AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails;
}

/**
 * @public
 * <p>
 *          Specifies the action that Amazon CloudFront or WAF takes when a web request matches the conditions in the rule.
 *       </p>
 */
export interface AwsWafv2WebAclActionDetails {
  /**
   * @public
   * <p>
   *          Specifies that WAF should allow requests by default.
   *       </p>
   */
  Allow?: AwsWafv2ActionAllowDetails;

  /**
   * @public
   * <p>
   *          Specifies that WAF should block requests by default.
   *       </p>
   */
  Block?: AwsWafv2ActionBlockDetails;
}

/**
 * @public
 * <p>
 *          Details about an WAFv2 web Access Control List (ACL).
 *       </p>
 */
export interface AwsWafv2WebAclDetails {
  /**
   * @public
   * <p>
   *          The name of the web ACL.
   *       </p>
   */
  Name?: string;

  /**
   * @public
   * <p>
   *          The Amazon Resource Name (ARN) of the web ACL that you want to associate with the resource.
   *       </p>
   */
  Arn?: string;

  /**
   * @public
   * <p>
   *          Indicates whether this web ACL is managed by Firewall Manager.
   *       </p>
   */
  ManagedbyFirewallManager?: boolean;

  /**
   * @public
   * <p>
   *          A unique identifier for the web ACL.
   *       </p>
   */
  Id?: string;

  /**
   * @public
   * <p>
   *          The web ACL capacity units (WCUs) currently being used by this web ACL.
   *       </p>
   */
  Capacity?: number;

  /**
   * @public
   * <p>
   *          Specifies how WAF should handle CAPTCHA evaluations for rules that don't have their own
   *          <code>CaptchaConfig</code> settings.
   *       </p>
   */
  CaptchaConfig?: AwsWafv2WebAclCaptchaConfigDetails;

  /**
   * @public
   * <p>
   *          The action to perform if none of the Rules contained in the web ACL match.
   *       </p>
   */
  DefaultAction?: AwsWafv2WebAclActionDetails;

  /**
   * @public
   * <p>
   *          A description of the web ACL that helps with identification.
   *       </p>
   */
  Description?: string;

  /**
   * @public
   * <p>
   *          The Rule statements used to identify the web requests that you want to allow, block, or count. Each rule includes one
   *          top-level statement that WAF uses to identify matching web requests, and parameters that govern how
   *          WAF handles them.
   *       </p>
   */
  Rules?: AwsWafv2RulesDetails[];

  /**
   * @public
   * <p>
   *          Defines and enables Amazon CloudWatch metrics and web request sample collection.
   *       </p>
   */
  VisibilityConfig?: AwsWafv2VisibilityConfigDetails;
}

/**
 * @public
 * <p>Details about the action that CloudFront or WAF takes when a web request matches the
 *          conditions in the rule. </p>
 */
export interface WafAction {
  /**
   * @public
   * <p>Specifies how you want WAF to respond to requests that match the settings in a
   *          rule.</p>
   *          <p>Valid settings include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALLOW</code> - WAF allows requests</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> - WAF blocks requests</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COUNT</code> - WAF increments a counter of the requests that
   *                match all of the conditions in the rule. WAF then continues to inspect
   *                the web request based on the remaining rules in the web ACL. You can't specify
   *                   <code>COUNT</code> for the default action for a web ACL.</p>
   *             </li>
   *          </ul>
   */
  Type?: string;
}

/**
 * @public
 * <p>Details about a rule to exclude from a rule group.</p>
 */
export interface WafExcludedRule {
  /**
   * @public
   * <p>The unique identifier for the rule to exclude from the rule group.</p>
   */
  RuleId?: string;
}

/**
 * @public
 * <p>Details about an override action for a rule.</p>
 */
export interface WafOverrideAction {
  /**
   * @public
   * <p>
   *             <code>COUNT</code> overrides the action specified by the individual rule within a
   *             <code>RuleGroup</code> .</p>
   *          <p>If set to <code>NONE</code>, the rule's action takes place.</p>
   */
  Type?: string;
}

/**
 * @public
 * <p>Details for a rule in an WAF web ACL.</p>
 */
export interface AwsWafWebAclRule {
  /**
   * @public
   * <p>Specifies the action that CloudFront or WAF takes when a web request matches the
   *          conditions in the rule. </p>
   */
  Action?: WafAction;

  /**
   * @public
   * <p>Rules to exclude from a rule group.</p>
   */
  ExcludedRules?: WafExcludedRule[];

  /**
   * @public
   * <p>Use the <code>OverrideAction</code> to test your <code>RuleGroup</code>.</p>
   *          <p>Any rule in a <code>RuleGroup</code> can potentially block a request. If you set the <code>OverrideAction</code> to
   *             <code>None</code>, the <code>RuleGroup</code> blocks a request if any individual rule in the <code>RuleGroup</code>
   *          matches the request and is configured to block that request.</p>
   *          <p>However, if you first want to test the <code>RuleGroup</code>,
   *          set the <code>OverrideAction</code> to <code>Count</code>. The <code>RuleGroup</code>
   *          then overrides any block action specified by individual rules contained within the group.
   *          Instead of blocking matching requests, those requests are counted.</p>
   *          <p>
   *             <code>ActivatedRule</code>|<code>OverrideAction</code> applies only when updating or
   *          adding a <code>RuleGroup</code>
   *          to a web ACL. In this case you do not use <code>ActivatedRule</code>
   *             <code>Action</code>. For all other update requests,
   *             <code>ActivatedRule</code>
   *             <code>Action</code> is used instead of <code>ActivatedRule</code>
   *             <code>OverrideAction</code>.</p>
   */
  OverrideAction?: WafOverrideAction;

  /**
   * @public
   * <p>Specifies the order in which the rules in a web
   *          ACL are evaluated. Rules with a lower value for <code>Priority</code> are
   *          evaluated before rules with a higher value. The value must be a unique integer. If you add
   *          multiple rules to a web ACL, the values do not need to be consecutive.</p>
   */
  Priority?: number;

  /**
   * @public
   * <p>The identifier for a rule.</p>
   */
  RuleId?: string;

  /**
   * @public
   * <p>The rule type.</p>
   *          <p>Valid values: <code>REGULAR</code> | <code>RATE_BASED</code> | <code>GROUP</code>
   *          </p>
   *          <p>The default is <code>REGULAR</code>.</p>
   */
  Type?: string;
}

/**
 * @public
 * <p>Provides information about an WAF web access control list (web ACL).</p>
 */
export interface AwsWafWebAclDetails {
  /**
   * @public
   * <p>A friendly name or description of the web ACL. You can't change the name of a web ACL  after you create it.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The action to perform if none of the rules contained in the web ACL match.</p>
   */
  DefaultAction?: string;

  /**
   * @public
   * <p>An array that contains the action for each rule in a web ACL, the priority of the rule, and the ID of the rule.</p>
   */
  Rules?: AwsWafWebAclRule[];

  /**
   * @public
   * <p>A unique identifier for a web ACL.</p>
   */
  WebAclId?: string;
}

/**
 * @public
 * <p>Information about the encryption configuration for X-Ray.</p>
 */
export interface AwsXrayEncryptionConfigDetails {
  /**
   * @public
   * <p>The identifier of the KMS key that is used for encryption. Provided if <code>Type</code> is <code>KMS</code>.</p>
   */
  KeyId?: string;

  /**
   * @public
   * <p>The current status of the encryption configuration. Valid values are <code>ACTIVE</code> or <code>UPDATING</code>.</p>
   *          <p>When <code>Status</code> is equal to <code>UPDATING</code>, X-Ray might use both the old and new encryption.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The type of encryption. <code>KMS</code> indicates that the encryption uses KMS keys. <code>NONE</code> indicates the default encryption.</p>
   */
  Type?: string;
}

/**
 * @public
 * <p>Describes the mounting of a volume in a container.
 *       </p>
 */
export interface VolumeMount {
  /**
   * @public
   * <p>The name of the volume.
   *       </p>
   */
  Name?: string;

  /**
   * @public
   * <p>The path in the container at which the volume should be mounted.
   *       </p>
   */
  MountPath?: string;
}

/**
 * @public
 * <p>Container details related to a finding.</p>
 */
export interface ContainerDetails {
  /**
   * @public
   * <p>The runtime of the container.
   *       </p>
   */
  ContainerRuntime?: string;

  /**
   * @public
   * <p>The name of the container related to a finding.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The identifier of the container image related to a finding.</p>
   */
  ImageId?: string;

  /**
   * @public
   * <p>The name of the container image related to a finding.</p>
   */
  ImageName?: string;

  /**
   * @public
   * <p>Indicates when the container started.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LaunchedAt?: string;

  /**
   * @public
   * <p>Provides information about the mounting of a volume in a container.
   *       </p>
   */
  VolumeMounts?: VolumeMount[];

  /**
   * @public
   * <p>When this parameter is <code>true</code>, the container is given elevated privileges on the host
   * container instance (similar to the root user).
   *       </p>
   */
  Privileged?: boolean;
}

/**
 * @public
 * <p>Additional details about a resource related to a finding.</p>
 *          <p>To provide the details, use the object that corresponds to the resource type. For
 *          example, if the resource type is <code>AwsEc2Instance</code>, then you use the
 *             <code>AwsEc2Instance</code> object to provide the details.</p>
 *          <p>If the type-specific object does not contain all of the fields you want to populate,
 *          then you use the <code>Other</code> object to populate those additional fields.</p>
 *          <p>You also use the <code>Other</code> object to populate the details when the selected
 *          type does not have a corresponding object.</p>
 */
export interface ResourceDetails {
  /**
   * @public
   * <p>Details for an autoscaling group.</p>
   */
  AwsAutoScalingAutoScalingGroup?: AwsAutoScalingAutoScalingGroupDetails;

  /**
   * @public
   * <p>Details for an CodeBuild project.</p>
   */
  AwsCodeBuildProject?: AwsCodeBuildProjectDetails;

  /**
   * @public
   * <p>Details about a CloudFront distribution.</p>
   */
  AwsCloudFrontDistribution?: AwsCloudFrontDistributionDetails;

  /**
   * @public
   * <p>Details about an EC2 instance related to a finding.</p>
   */
  AwsEc2Instance?: AwsEc2InstanceDetails;

  /**
   * @public
   * <p>Details for an EC2 network interface.</p>
   */
  AwsEc2NetworkInterface?: AwsEc2NetworkInterfaceDetails;

  /**
   * @public
   * <p>Details for an EC2 security group.</p>
   */
  AwsEc2SecurityGroup?: AwsEc2SecurityGroupDetails;

  /**
   * @public
   * <p>Details for an Amazon EC2 volume.</p>
   */
  AwsEc2Volume?: AwsEc2VolumeDetails;

  /**
   * @public
   * <p>Details for an Amazon EC2 VPC.</p>
   */
  AwsEc2Vpc?: AwsEc2VpcDetails;

  /**
   * @public
   * <p>Details about an Elastic IP address.</p>
   */
  AwsEc2Eip?: AwsEc2EipDetails;

  /**
   * @public
   * <p>Details about a subnet in Amazon EC2.</p>
   */
  AwsEc2Subnet?: AwsEc2SubnetDetails;

  /**
   * @public
   * <p>Details about an EC2 network access control list (ACL).</p>
   */
  AwsEc2NetworkAcl?: AwsEc2NetworkAclDetails;

  /**
   * @public
   * <p>Details about a load balancer.</p>
   */
  AwsElbv2LoadBalancer?: AwsElbv2LoadBalancerDetails;

  /**
   * @public
   * <p>Details about an Elastic Beanstalk environment.</p>
   */
  AwsElasticBeanstalkEnvironment?: AwsElasticBeanstalkEnvironmentDetails;

  /**
   * @public
   * <p>Details for an Elasticsearch domain.</p>
   */
  AwsElasticsearchDomain?: AwsElasticsearchDomainDetails;

  /**
   * @public
   * <p>Details about an S3 bucket related to a finding.</p>
   */
  AwsS3Bucket?: AwsS3BucketDetails;

  /**
   * @public
   * <p>Details about the Amazon S3 Public Access Block configuration for an account.</p>
   */
  AwsS3AccountPublicAccessBlock?: AwsS3AccountPublicAccessBlockDetails;

  /**
   * @public
   * <p>Details about an S3 object related to a finding.</p>
   */
  AwsS3Object?: AwsS3ObjectDetails;

  /**
   * @public
   * <p>Details about a Secrets Manager secret.</p>
   */
  AwsSecretsManagerSecret?: AwsSecretsManagerSecretDetails;

  /**
   * @public
   * <p>Details about an IAM access key related to a finding.</p>
   */
  AwsIamAccessKey?: AwsIamAccessKeyDetails;

  /**
   * @public
   * <p>Details about an IAM user.</p>
   */
  AwsIamUser?: AwsIamUserDetails;

  /**
   * @public
   * <p>Details about an IAM permissions policy.</p>
   */
  AwsIamPolicy?: AwsIamPolicyDetails;

  /**
   * @public
   * <p>Provides information about a version 2 stage for Amazon API Gateway.</p>
   */
  AwsApiGatewayV2Stage?: AwsApiGatewayV2StageDetails;

  /**
   * @public
   * <p>Provides information about a version 2 API in Amazon API Gateway.</p>
   */
  AwsApiGatewayV2Api?: AwsApiGatewayV2ApiDetails;

  /**
   * @public
   * <p>Details about a DynamoDB table.</p>
   */
  AwsDynamoDbTable?: AwsDynamoDbTableDetails;

  /**
   * @public
   * <p>Provides information about a version 1 Amazon API Gateway stage.</p>
   */
  AwsApiGatewayStage?: AwsApiGatewayStageDetails;

  /**
   * @public
   * <p>Provides information about a REST API in version 1 of Amazon API Gateway.</p>
   */
  AwsApiGatewayRestApi?: AwsApiGatewayRestApiDetails;

  /**
   * @public
   * <p>Provides details about a CloudTrail trail.</p>
   */
  AwsCloudTrailTrail?: AwsCloudTrailTrailDetails;

  /**
   * @public
   * <p>Provides information about the state of a patch on an instance based on the patch baseline that was used to patch the instance.</p>
   */
  AwsSsmPatchCompliance?: AwsSsmPatchComplianceDetails;

  /**
   * @public
   * <p>Provides details about an Certificate Manager certificate.</p>
   */
  AwsCertificateManagerCertificate?: AwsCertificateManagerCertificateDetails;

  /**
   * @public
   * <p>Contains details about an Amazon Redshift cluster.</p>
   */
  AwsRedshiftCluster?: AwsRedshiftClusterDetails;

  /**
   * @public
   * <p>Contains details about a Classic Load Balancer.</p>
   */
  AwsElbLoadBalancer?: AwsElbLoadBalancerDetails;

  /**
   * @public
   * <p>Contains details about an IAM group.</p>
   */
  AwsIamGroup?: AwsIamGroupDetails;

  /**
   * @public
   * <p>Details about an IAM role.</p>
   */
  AwsIamRole?: AwsIamRoleDetails;

  /**
   * @public
   * <p>Details about an KMS key.</p>
   */
  AwsKmsKey?: AwsKmsKeyDetails;

  /**
   * @public
   * <p>Details about a Lambda function.</p>
   */
  AwsLambdaFunction?: AwsLambdaFunctionDetails;

  /**
   * @public
   * <p>Details for a Lambda layer version.</p>
   */
  AwsLambdaLayerVersion?: AwsLambdaLayerVersionDetails;

  /**
   * @public
   * <p>Details about an Amazon RDS database instance.</p>
   */
  AwsRdsDbInstance?: AwsRdsDbInstanceDetails;

  /**
   * @public
   * <p>Details about an SNS topic.</p>
   */
  AwsSnsTopic?: AwsSnsTopicDetails;

  /**
   * @public
   * <p>Details about an SQS queue.</p>
   */
  AwsSqsQueue?: AwsSqsQueueDetails;

  /**
   * @public
   * <p>Details for an WAF web ACL.</p>
   */
  AwsWafWebAcl?: AwsWafWebAclDetails;

  /**
   * @public
   * <p>Details about an Amazon RDS database snapshot.</p>
   */
  AwsRdsDbSnapshot?: AwsRdsDbSnapshotDetails;

  /**
   * @public
   * <p>Details about an Amazon RDS database cluster snapshot.</p>
   */
  AwsRdsDbClusterSnapshot?: AwsRdsDbClusterSnapshotDetails;

  /**
   * @public
   * <p>Details about an Amazon RDS database cluster.</p>
   */
  AwsRdsDbCluster?: AwsRdsDbClusterDetails;

  /**
   * @public
   * <p>Details about an Amazon ECS cluster.</p>
   */
  AwsEcsCluster?: AwsEcsClusterDetails;

  /**
   * @public
   * <p>Provides information about a Docker container that's part of a task.
   *       </p>
   */
  AwsEcsContainer?: AwsEcsContainerDetails;

  /**
   * @public
   * <p>Details about a task definition. A task definition describes the container and volume definitions of an Amazon Elastic Container Service task.</p>
   */
  AwsEcsTaskDefinition?: AwsEcsTaskDefinitionDetails;

  /**
   * @public
   * <p>Details about a container resource related to a finding.</p>
   */
  Container?: ContainerDetails;

  /**
   * @public
   * <p>Details about a resource that are not available in a type-specific details object. Use
   *          the <code>Other</code> object in the following cases.</p>
   *          <ul>
   *             <li>
   *                <p>The type-specific object does not contain all of the fields that you want to
   *                populate. In this case, first use the type-specific object to populate those fields.
   *                Use the <code>Other</code> object to populate the fields that are missing from the
   *                type-specific object.</p>
   *             </li>
   *             <li>
   *                <p>The resource type does not have a corresponding object. This includes resources
   *                for which the type is <code>Other</code>. </p>
   *             </li>
   *          </ul>
   */
  Other?: Record<string, string>;

  /**
   * @public
   * <p>Details about an RDS event notification subscription.</p>
   */
  AwsRdsEventSubscription?: AwsRdsEventSubscriptionDetails;

  /**
   * @public
   * <p>Details about a service within an ECS cluster.</p>
   */
  AwsEcsService?: AwsEcsServiceDetails;

  /**
   * @public
   * <p>Provides details about a launch configuration.</p>
   */
  AwsAutoScalingLaunchConfiguration?: AwsAutoScalingLaunchConfigurationDetails;

  /**
   * @public
   * <p>Details about an Amazon EC2 VPN connection.</p>
   */
  AwsEc2VpnConnection?: AwsEc2VpnConnectionDetails;

  /**
   * @public
   * <p>Information about an Amazon ECR image.</p>
   */
  AwsEcrContainerImage?: AwsEcrContainerImageDetails;

  /**
   * @public
   * <p>Details about an Amazon OpenSearch Service domain.</p>
   */
  AwsOpenSearchServiceDomain?: AwsOpenSearchServiceDomainDetails;

  /**
   * @public
   * <p>Details about the service configuration for a VPC endpoint service.</p>
   */
  AwsEc2VpcEndpointService?: AwsEc2VpcEndpointServiceDetails;

  /**
   * @public
   * <p>Information about the encryption configuration for X-Ray.</p>
   */
  AwsXrayEncryptionConfig?: AwsXrayEncryptionConfigDetails;

  /**
   * @public
   * <p>Details about a rate-based rule for global resources.</p>
   */
  AwsWafRateBasedRule?: AwsWafRateBasedRuleDetails;

  /**
   * @public
   * <p>Details about a rate-based rule for Regional resources.</p>
   */
  AwsWafRegionalRateBasedRule?: AwsWafRegionalRateBasedRuleDetails;

  /**
   * @public
   * <p>Information about an Amazon Elastic Container Registry repository.</p>
   */
  AwsEcrRepository?: AwsEcrRepositoryDetails;

  /**
   * @public
   * <p>Details about an Amazon EKS cluster.</p>
   */
  AwsEksCluster?: AwsEksClusterDetails;

  /**
   * @public
   * <p>Details about an Network Firewall firewall policy.</p>
   */
  AwsNetworkFirewallFirewallPolicy?: AwsNetworkFirewallFirewallPolicyDetails;

  /**
   * @public
   * <p>Details about an Network Firewall firewall.</p>
   */
  AwsNetworkFirewallFirewall?: AwsNetworkFirewallFirewallDetails;

  /**
   * @public
   * <p>Details about an Network Firewall rule group.</p>
   */
  AwsNetworkFirewallRuleGroup?: AwsNetworkFirewallRuleGroupDetails;

  /**
   * @public
   * <p>Details about an Amazon RDS DB security group.</p>
   */
  AwsRdsDbSecurityGroup?: AwsRdsDbSecurityGroupDetails;

  /**
   * @public
   * <p>Details about an Amazon Kinesis data stream.</p>
   */
  AwsKinesisStream?: AwsKinesisStreamDetails;

  /**
   * @public
   * <p>Details about an Amazon EC2 transit gateway that interconnects your virtual private clouds (VPC) and on-premises networks.</p>
   */
  AwsEc2TransitGateway?: AwsEc2TransitGatewayDetails;

  /**
   * @public
   * <p>Details about an Amazon EFS access point. An access point is an application-specific view into an EFS file system that
   * applies an operating system user and group, and a file system path, to any file system request made through the access point.
   *       </p>
   */
  AwsEfsAccessPoint?: AwsEfsAccessPointDetails;

  /**
   * @public
   * <p>Details about an CloudFormation stack. A stack is a collection of Amazon Web Services resources that you can manage as a single unit.</p>
   */
  AwsCloudFormationStack?: AwsCloudFormationStackDetails;

  /**
   * @public
   * <p>Details about an Amazon CloudWatch alarm. An alarm allows you to monitor and receive alerts about your Amazon Web Services resources and applications across multiple Regions.</p>
   */
  AwsCloudWatchAlarm?: AwsCloudWatchAlarmDetails;

  /**
   * @public
   * <p>Details about an Amazon EC2 VPC peering connection. A VPC peering connection is
   *          a networking connection between two VPCs that enables you to route traffic between them
   *          privately.
   *       </p>
   */
  AwsEc2VpcPeeringConnection?: AwsEc2VpcPeeringConnectionDetails;

  /**
   * @public
   * <p>Details about an WAF rule group for Regional resources.
   *       </p>
   */
  AwsWafRegionalRuleGroup?: AwsWafRegionalRuleGroupDetails;

  /**
   * @public
   * <p>Details about an WAF rule for Regional resources.
   *       </p>
   */
  AwsWafRegionalRule?: AwsWafRegionalRuleDetails;

  /**
   * @public
   * <p>Details about an WAF web access control list (web ACL) for Regional resources. </p>
   */
  AwsWafRegionalWebAcl?: AwsWafRegionalWebAclDetails;

  /**
   * @public
   * <p>Details about an WAF rule for global resources.
   *       </p>
   */
  AwsWafRule?: AwsWafRuleDetails;

  /**
   * @public
   * <p>Details about an WAF rule group for global resources.
   *       </p>
   */
  AwsWafRuleGroup?: AwsWafRuleGroupDetails;

  /**
   * @public
   * <p>Details about a task in a cluster. </p>
   */
  AwsEcsTask?: AwsEcsTaskDetails;

  /**
   * @public
   * <p>Provides details about an Backup backup vault.
   *       </p>
   */
  AwsBackupBackupVault?: AwsBackupBackupVaultDetails;

  /**
   * @public
   * <p>Provides details about an Backup backup plan.
   *       </p>
   */
  AwsBackupBackupPlan?: AwsBackupBackupPlanDetails;

  /**
   * @public
   * <p>Provides details about an Backup backup, or recovery point.
   *       </p>
   */
  AwsBackupRecoveryPoint?: AwsBackupRecoveryPointDetails;

  /**
   * @public
   * <p>
   *          Specifies the properties for creating an Amazon Elastic Compute Cloud (Amazon EC2) launch template.
   *       </p>
   */
  AwsEc2LaunchTemplate?: AwsEc2LaunchTemplateDetails;

  /**
   * @public
   * <p>
   *          Provides details about an Amazon SageMaker notebook instance.
   *       </p>
   */
  AwsSageMakerNotebookInstance?: AwsSageMakerNotebookInstanceDetails;

  /**
   * @public
   * <p>
   *          Details about an WAFv2 web Access Control List (ACL).
   *       </p>
   */
  AwsWafv2WebAcl?: AwsWafv2WebAclDetails;

  /**
   * @public
   * <p>
   *          Details about an WAFv2 rule group.
   *       </p>
   */
  AwsWafv2RuleGroup?: AwsWafv2RuleGroupDetails;

  /**
   * @public
   * <p>
   *          Provides details about a route table. A route table contains a set of rules, called routes, that
   *          determine where to direct network traffic from your subnet or gateway.
   *       </p>
   */
  AwsEc2RouteTable?: AwsEc2RouteTableDetails;

  /**
   * @public
   * <p>
   *             Provides details about AppSync message broker. A message broker allows software applications and
   *             components to communicate using various programming languages, operating systems, and formal messaging protocols.
   *         </p>
   */
  AwsAmazonMqBroker?: AwsAmazonMqBrokerDetails;

  /**
   * @public
   * <p>
   *             Provides details about an AppSync Graph QL API, which lets you query multiple databases, microservices,
   *             and APIs from a single GraphQL endpoint.
   *         </p>
   */
  AwsAppSyncGraphQlApi?: AwsAppSyncGraphQlApiDetails;

  /**
   * @public
   * <p>
   *             A schema defines the structure of events that are sent to Amazon EventBridge. Schema registries are containers for
   *             schemas. They collect and organize schemas so that your schemas are in logical groups.
   *         </p>
   */
  AwsEventSchemasRegistry?: AwsEventSchemasRegistryDetails;

  /**
   * @public
   * <p>
   *             Provides details about an Amazon GuardDuty detector. A detector is an object that represents the GuardDuty
   *             service. A detector is required for GuardDuty to become operational.
   *         </p>
   */
  AwsGuardDutyDetector?: AwsGuardDutyDetectorDetails;

  /**
   * @public
   * <p>
   *             Provides details about an Step Functions state machine, which is a workflow consisting of a series of event-driven steps.
   *         </p>
   */
  AwsStepFunctionStateMachine?: AwsStepFunctionStateMachineDetails;

  /**
   * @public
   * <p>
   *             Provides information about an Amazon Athena workgroup. A workgroup helps you separate users, teams,
   *             applications, or workloads. It also helps you set limits on data processing and track costs.
   *         </p>
   */
  AwsAthenaWorkGroup?: AwsAthenaWorkGroupDetails;

  /**
   * @public
   * <p>
   *             Provides details about Amazon EventBridge event bus for an endpoint. An event bus is a router that receives events
   * and delivers them to zero or more destinations, or targets.</p>
   */
  AwsEventsEventbus?: AwsEventsEventbusDetails;

  /**
   * @public
   * <p>
   *             Provides details about an Database Migration Service (DMS) endpoint. An endpoint provides connection, data
   * store type, and location information about your data store.</p>
   */
  AwsDmsEndpoint?: AwsDmsEndpointDetails;

  /**
   * @public
   * <p>
   *             Provides details about an Amazon EventBridge global endpoint. The endpoint can improve your application’s
   * availability by making it Regional-fault tolerant.</p>
   */
  AwsEventsEndpoint?: AwsEventsEndpointDetails;

  /**
   * @public
   * <p>
   *             Provides details about an DMS replication task. A replication task moves a set of data from the source
   * endpoint to the target endpoint.</p>
   */
  AwsDmsReplicationTask?: AwsDmsReplicationTaskDetails;

  /**
   * @public
   * <p>
   *             Provides details about an DMS replication instance. DMS uses a replication instance to connect to your
   * source data store, read the source data, and format the data for consumption by the target data store.</p>
   */
  AwsDmsReplicationInstance?: AwsDmsReplicationInstanceDetails;

  /**
   * @public
   * <p>
   *             Provides details about an Amazon Route 53 hosted zone, including the four name servers assigned to the hosted
   * zone. A hosted zone represents a collection of records that can be managed together, belonging to a single parent domain name.</p>
   */
  AwsRoute53HostedZone?: AwsRoute53HostedZoneDetails;

  /**
   * @public
   * <p>
   *             Provides details about an Amazon Managed Streaming for Apache Kafka (Amazon MSK) cluster.</p>
   */
  AwsMskCluster?: AwsMskClusterDetails;
}

/**
 * @public
 * @enum
 */
export const Partition = {
  AWS: "aws",
  AWS_CN: "aws-cn",
  AWS_US_GOV: "aws-us-gov",
} as const;

/**
 * @public
 */
export type Partition = (typeof Partition)[keyof typeof Partition];

/**
 * @public
 * <p>A resource related to a finding.</p>
 */
export interface Resource {
  /**
   * @public
   * <p>The type of the resource that details are provided for. If possible, set
   *             <code>Type</code> to one of the supported resource types. For example, if the resource
   *          is an EC2 instance, then set <code>Type</code> to <code>AwsEc2Instance</code>.</p>
   *          <p>If the resource does not match any of the provided types, then set <code>Type</code> to
   *             <code>Other</code>. </p>
   */
  Type: string | undefined;

  /**
   * @public
   * <p>The canonical identifier for the given resource type.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The canonical Amazon Web Services partition name that the Region is assigned to.</p>
   */
  Partition?: Partition;

  /**
   * @public
   * <p>The canonical Amazon Web Services external Region name where this resource is located.</p>
   */
  Region?: string;

  /**
   * @public
   * <p>Identifies the role of the resource in the finding. A resource is either the actor or target of the finding activity,</p>
   */
  ResourceRole?: string;

  /**
   * @public
   * <p>A list of Amazon Web Services tags associated with a resource at the time the finding was
   *          processed.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>Contains information about sensitive data that was detected on the resource.</p>
   */
  DataClassification?: DataClassificationDetails;

  /**
   * @public
   * <p>Additional details about the resource related to a finding.</p>
   */
  Details?: ResourceDetails;
}

/**
 * @public
 * <p>The severity of the finding.</p>
 *          <p>The finding provider can provide the initial severity. The finding provider can only
 *          update the severity if it hasn't been updated using
 *          <code>BatchUpdateFindings</code>.</p>
 *          <p>The finding must have either <code>Label</code> or <code>Normalized</code> populated. If
 *          only one of these attributes is populated, then Security Hub automatically populates the other
 *          one. If neither attribute is populated, then the finding is invalid. <code>Label</code> is
 *          the preferred attribute.</p>
 */
export interface Severity {
  /**
   * @public
   * <p>Deprecated. This attribute is being deprecated. Instead of providing
   *             <code>Product</code>, provide <code>Original</code>.</p>
   *          <p>The native severity as defined by the Amazon Web Services service or integrated partner product that
   *          generated the finding.</p>
   */
  Product?: number;

  /**
   * @public
   * <p>The severity value of the finding. The allowed values are the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INFORMATIONAL</code> - No issue was found.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOW</code> - The issue does not require action on its own.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code> - The issue must be addressed but not urgently.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HIGH</code> - The issue must be addressed as a priority.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CRITICAL</code> - The issue must be remediated immediately to avoid it
   *                escalating.</p>
   *             </li>
   *          </ul>
   *          <p>If you provide <code>Normalized</code> and do not provide <code>Label</code>, then
   *             <code>Label</code> is set automatically as follows. </p>
   *          <ul>
   *             <li>
   *                <p>0 - <code>INFORMATIONAL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>1–39 - <code>LOW</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>40–69 - <code>MEDIUM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>70–89 - <code>HIGH</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>90–100 - <code>CRITICAL</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Label?: SeverityLabel;

  /**
   * @public
   * <p>Deprecated. The normalized severity of a finding. This attribute is being deprecated.
   *          Instead of providing <code>Normalized</code>, provide <code>Label</code>.</p>
   *          <p>If you provide <code>Label</code> and do not provide <code>Normalized</code>, then
   *             <code>Normalized</code> is set automatically as follows.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INFORMATIONAL</code> - 0</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOW</code> - 1</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code> - 40</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HIGH</code> - 70</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CRITICAL</code> - 90</p>
   *             </li>
   *          </ul>
   */
  Normalized?: number;

  /**
   * @public
   * <p>The native severity from the finding product that generated the finding.</p>
   */
  Original?: string;
}

/**
 * @public
 * @enum
 */
export const ThreatIntelIndicatorCategory = {
  BACKDOOR: "BACKDOOR",
  CARD_STEALER: "CARD_STEALER",
  COMMAND_AND_CONTROL: "COMMAND_AND_CONTROL",
  DROP_SITE: "DROP_SITE",
  EXPLOIT_SITE: "EXPLOIT_SITE",
  KEYLOGGER: "KEYLOGGER",
} as const;

/**
 * @public
 */
export type ThreatIntelIndicatorCategory =
  (typeof ThreatIntelIndicatorCategory)[keyof typeof ThreatIntelIndicatorCategory];

/**
 * @public
 * @enum
 */
export const ThreatIntelIndicatorType = {
  DOMAIN: "DOMAIN",
  EMAIL_ADDRESS: "EMAIL_ADDRESS",
  HASH_MD5: "HASH_MD5",
  HASH_SHA1: "HASH_SHA1",
  HASH_SHA256: "HASH_SHA256",
  HASH_SHA512: "HASH_SHA512",
  IPV4_ADDRESS: "IPV4_ADDRESS",
  IPV6_ADDRESS: "IPV6_ADDRESS",
  MUTEX: "MUTEX",
  PROCESS: "PROCESS",
  URL: "URL",
} as const;

/**
 * @public
 */
export type ThreatIntelIndicatorType = (typeof ThreatIntelIndicatorType)[keyof typeof ThreatIntelIndicatorType];

/**
 * @public
 * <p>Details about the threat intelligence related to a finding.</p>
 */
export interface ThreatIntelIndicator {
  /**
   * @public
   * <p>The type of threat intelligence indicator.</p>
   */
  Type?: ThreatIntelIndicatorType;

  /**
   * @public
   * <p>The value of a threat intelligence indicator.</p>
   */
  Value?: string;

  /**
   * @public
   * <p>The category of a threat intelligence indicator.</p>
   */
  Category?: ThreatIntelIndicatorCategory;

  /**
   * @public
   * <p>Indicates when the most recent instance of a threat intelligence indicator was
   *          observed.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastObservedAt?: string;

  /**
   * @public
   * <p>The source of the threat intelligence indicator.</p>
   */
  Source?: string;

  /**
   * @public
   * <p>The URL to the page or site where you can get more information about the threat
   *          intelligence indicator.</p>
   */
  SourceUrl?: string;
}

/**
 * @public
 * <p>Provides information about the file paths that were affected by the threat.
 * 		</p>
 */
export interface FilePaths {
  /**
   * @public
   * <p>Path to the infected or suspicious file on the resource it was detected on.
   * 		</p>
   */
  FilePath?: string;

  /**
   * @public
   * <p>The name of the infected or suspicious file corresponding to the hash.
   * 		</p>
   */
  FileName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource on which the threat was detected.
   * 		</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The hash value for the infected or suspicious file.
   * 		</p>
   */
  Hash?: string;
}

/**
 * @public
 * <p>Provides information about the threat detected in a security finding and the file paths that were affected by the threat.
 * 		</p>
 */
export interface Threat {
  /**
   * @public
   * <p>The name of the threat.
   * 		</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The severity of the threat.
   * 		</p>
   */
  Severity?: string;

  /**
   * @public
   * <p>This total number of items in which the threat has been detected.
   * 		</p>
   */
  ItemCount?: number;

  /**
   * @public
   * <p>Provides information about the file paths that were affected by the threat.
   * 		</p>
   */
  FilePaths?: FilePaths[];
}

/**
 * @public
 * <p>
 *             Provides details about where a code vulnerability is located in your Lambda function.
 *         </p>
 */
export interface CodeVulnerabilitiesFilePath {
  /**
   * @public
   * <p>
   *         	The line number of the last line of code in which the vulnerability is located.
   *         </p>
   */
  EndLine?: number;

  /**
   * @public
   * <p>
   *             The name of the file in which the code vulnerability is located.
   *         </p>
   */
  FileName?: string;

  /**
   * @public
   * <p>
   *             The file path to the code in which the vulnerability is located.
   *         </p>
   */
  FilePath?: string;

  /**
   * @public
   * <p>
   *             The line number of the first line of code in which the vulnerability is located.
   *         </p>
   */
  StartLine?: number;
}

/**
 * @public
 * <p>Provides details about the vulnerabilities found in your Lambda function code. This field pertains to findings that
 *             Security Hub receives from Amazon Inspector.
 *         </p>
 */
export interface VulnerabilityCodeVulnerabilities {
  /**
   * @public
   * <p>
   *             The Common Weakness Enumeration (CWE) item associated with the detected code vulnerability.
   *         </p>
   */
  Cwes?: string[];

  /**
   * @public
   * <p>
   *             Provides details about where a code vulnerability is located in your Lambda function.
   *         </p>
   */
  FilePath?: CodeVulnerabilitiesFilePath;

  /**
   * @public
   * <p>
   *             The Amazon Resource Name (ARN) of the Lambda layer in which the code vulnerability is located.
   *         </p>
   */
  SourceArn?: string;
}

/**
 * @public
 * <p>CVSS scores from the advisory related to the vulnerability.</p>
 */
export interface Cvss {
  /**
   * @public
   * <p>The version of CVSS for the CVSS score.</p>
   */
  Version?: string;

  /**
   * @public
   * <p>The base CVSS score.</p>
   */
  BaseScore?: number;

  /**
   * @public
   * <p>The base scoring vector for the CVSS score.</p>
   */
  BaseVector?: string;

  /**
   * @public
   * <p>The origin of the original CVSS score and vector.</p>
   */
  Source?: string;

  /**
   * @public
   * <p>Adjustments to the CVSS metrics.</p>
   */
  Adjustments?: Adjustment[];
}

/**
 * @public
 * @enum
 */
export const VulnerabilityExploitAvailable = {
  NO: "NO",
  YES: "YES",
} as const;

/**
 * @public
 */
export type VulnerabilityExploitAvailable =
  (typeof VulnerabilityExploitAvailable)[keyof typeof VulnerabilityExploitAvailable];

/**
 * @public
 * @enum
 */
export const VulnerabilityFixAvailable = {
  NO: "NO",
  PARTIAL: "PARTIAL",
  YES: "YES",
} as const;

/**
 * @public
 */
export type VulnerabilityFixAvailable = (typeof VulnerabilityFixAvailable)[keyof typeof VulnerabilityFixAvailable];

/**
 * @public
 * <p>A vendor that generates a vulnerability report.</p>
 */
export interface VulnerabilityVendor {
  /**
   * @public
   * <p>The name of the vendor.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The URL of the vulnerability advisory.</p>
   */
  Url?: string;

  /**
   * @public
   * <p>The severity that the vendor assigned to the vulnerability.</p>
   */
  VendorSeverity?: string;

  /**
   * @public
   * <p>Indicates when the vulnerability advisory was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  VendorCreatedAt?: string;

  /**
   * @public
   * <p>Indicates when the vulnerability advisory was last updated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  VendorUpdatedAt?: string;
}

/**
 * @public
 * <p>Information about a software package.</p>
 */
export interface SoftwarePackage {
  /**
   * @public
   * <p>The name of the software package.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The version of the software package.</p>
   */
  Version?: string;

  /**
   * @public
   * <p>The epoch of the software package.</p>
   */
  Epoch?: string;

  /**
   * @public
   * <p>The release of the software package.</p>
   */
  Release?: string;

  /**
   * @public
   * <p>The architecture used for the software package.</p>
   */
  Architecture?: string;

  /**
   * @public
   * <p>The source of the package.</p>
   */
  PackageManager?: string;

  /**
   * @public
   * <p>The file system path to the package manager inventory file.</p>
   */
  FilePath?: string;

  /**
   * @public
   * <p>The version of the software package in which the vulnerability has been resolved.
   *       </p>
   */
  FixedInVersion?: string;

  /**
   * @public
   * <p>Describes the actions a customer can take to resolve the vulnerability in the software package.
   *       </p>
   */
  Remediation?: string;

  /**
   * @public
   * <p>The source layer hash of the vulnerable package.
   *       </p>
   */
  SourceLayerHash?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the source layer.
   *       </p>
   */
  SourceLayerArn?: string;
}

/**
 * @public
 * <p>A vulnerability associated with a finding.</p>
 */
export interface Vulnerability {
  /**
   * @public
   * <p>The identifier of the vulnerability.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>List of software packages that have the vulnerability.</p>
   */
  VulnerablePackages?: SoftwarePackage[];

  /**
   * @public
   * <p>CVSS scores from the advisory related to the vulnerability.</p>
   */
  Cvss?: Cvss[];

  /**
   * @public
   * <p>List of vulnerabilities that are related to this vulnerability.</p>
   */
  RelatedVulnerabilities?: string[];

  /**
   * @public
   * <p>Information about the vendor that generates the vulnerability report.</p>
   */
  Vendor?: VulnerabilityVendor;

  /**
   * @public
   * <p>A list of URLs that provide additional information about the vulnerability.</p>
   */
  ReferenceUrls?: string[];

  /**
   * @public
   * <p>Specifies if all vulnerable packages in a finding have a value for <code>FixedInVersion</code>
   * and <code>Remediation</code>.
   * This field is evaluated for each vulnerability <code>Id</code> based on the number of vulnerable packages that have a value for both
   * <code>FixedInVersion</code> and <code>Remediation</code>. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>YES</code> if all vulnerable packages have a value for both <code>FixedInVersion</code> and <code>Remediation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NO</code> if no vulnerable packages have a value for <code>FixedInVersion</code> and <code>Remediation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PARTIAL</code> otherwise</p>
   *             </li>
   *          </ul>
   */
  FixAvailable?: VulnerabilityFixAvailable;

  /**
   * @public
   * <p>The Exploit Prediction Scoring System (EPSS) score for a finding.
   * 		</p>
   */
  EpssScore?: number;

  /**
   * @public
   * <p>Whether an exploit is available for a finding.
   * 		</p>
   */
  ExploitAvailable?: VulnerabilityExploitAvailable;

  /**
   * @public
   * <p>The vulnerabilities found in your Lambda function code. This field pertains to findings that
   * Security Hub receives from Amazon Inspector.
   *         </p>
   */
  CodeVulnerabilities?: VulnerabilityCodeVulnerabilities[];
}

/**
 * @public
 * <p>Provides details about the status of the investigation into a finding.</p>
 */
export interface Workflow {
  /**
   * @public
   * <p>The status of the investigation into the finding. The workflow status is specific to an individual finding. It does not affect the generation of new findings. For example, setting the workflow status to <code>SUPPRESSED</code> or <code>RESOLVED</code> does not prevent a new finding for the same issue.</p>
   *          <p>The allowed values are the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code> - The initial state of a finding, before it is reviewed.</p>
   *                <p>Security Hub also resets the workflow status from <code>NOTIFIED</code> or
   *                   <code>RESOLVED</code> to <code>NEW</code> in the following cases:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>RecordState</code> changes from <code>ARCHIVED</code> to
   *                         <code>ACTIVE</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ComplianceStatus</code> changes from <code>PASSED</code> to either
   *                         <code>WARNING</code>, <code>FAILED</code>, or
   *                      <code>NOT_AVAILABLE</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOTIFIED</code> - Indicates that you notified the resource owner about the
   *                security issue. Used when the initial reviewer is not the resource owner, and needs
   *                intervention from the resource owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUPPRESSED</code> - Indicates that you reviewed the finding and do not believe that any action is needed. The finding is no longer updated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESOLVED</code> - The finding was reviewed and remediated and is now
   *                considered resolved. </p>
   *             </li>
   *          </ul>
   */
  Status?: WorkflowStatus;
}

/**
 * @public
 * @enum
 */
export const WorkflowState = {
  ASSIGNED: "ASSIGNED",
  DEFERRED: "DEFERRED",
  IN_PROGRESS: "IN_PROGRESS",
  NEW: "NEW",
  RESOLVED: "RESOLVED",
} as const;

/**
 * @public
 */
export type WorkflowState = (typeof WorkflowState)[keyof typeof WorkflowState];

/**
 * @public
 * <p>Provides a consistent format for Security Hub findings.
 *          <code>AwsSecurityFinding</code> format allows you to share findings between Amazon Web Services
 *          security services and third-party solutions.</p>
 *          <note>
 *             <p>A finding is a potential security issue generated either by Amazon Web Services services or by the integrated third-party
 *             solutions and standards checks.</p>
 *          </note>
 */
export interface AwsSecurityFinding {
  /**
   * @public
   * <p>The schema version that a finding is formatted for.</p>
   */
  SchemaVersion: string | undefined;

  /**
   * @public
   * <p>The security findings provider-specific identifier for a finding.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The ARN generated by Security Hub that uniquely identifies a product that generates findings.
   *          This can be the ARN for a third-party product that is integrated with Security Hub, or the ARN for
   *          a custom integration.</p>
   */
  ProductArn: string | undefined;

  /**
   * @public
   * <p>The name of the product that generated the finding.</p>
   *          <p>Security Hub populates this attribute automatically for each finding. You cannot update this attribute with <code>BatchImportFindings</code> or <code>BatchUpdateFindings</code>. The exception to this is a custom integration.</p>
   *          <p>When you use the Security Hub console or API to filter findings by product name, you use this attribute.</p>
   */
  ProductName?: string;

  /**
   * @public
   * <p>The name of the company for the product that generated the finding.</p>
   *          <p>Security Hub populates this attribute automatically for each finding. You cannot update this attribute with <code>BatchImportFindings</code> or <code>BatchUpdateFindings</code>. The exception to this is a custom integration.</p>
   *          <p>When you use the Security Hub console or API to filter findings by company name, you use this attribute.</p>
   */
  CompanyName?: string;

  /**
   * @public
   * <p>The Region from which the finding was generated.</p>
   *          <p>Security Hub populates this attribute automatically for each finding. You cannot update it using <code>BatchImportFindings</code> or <code>BatchUpdateFindings</code>.</p>
   */
  Region?: string;

  /**
   * @public
   * <p>The identifier for the solution-specific component (a discrete unit of logic) that
   *          generated a finding. In various security findings providers' solutions, this generator can
   *          be called a rule, a check, a detector, a plugin, etc. </p>
   */
  GeneratorId: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID that a finding is generated in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>One or more finding types in the format of <code>namespace/category/classifier</code>
   *          that classify a finding.</p>
   *          <p>Valid namespace values are: Software and Configuration Checks | TTPs | Effects | Unusual
   *          Behaviors | Sensitive Data Identifications</p>
   */
  Types?: string[];

  /**
   * @public
   * <p>Indicates when the security findings provider first observed the potential security
   *          issue that a finding captured.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  FirstObservedAt?: string;

  /**
   * @public
   * <p>Indicates when the security findings provider most recently observed the potential
   *          security issue that a finding captured.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastObservedAt?: string;

  /**
   * @public
   * <p>Indicates when the security findings provider created the potential security issue that
   *          a finding captured.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedAt: string | undefined;

  /**
   * @public
   * <p>Indicates when the security findings provider last updated the finding record.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  UpdatedAt: string | undefined;

  /**
   * @public
   * <p>A finding's severity.</p>
   */
  Severity?: Severity;

  /**
   * @public
   * <p>A finding's confidence. Confidence is defined as the likelihood that a finding
   *          accurately identifies the behavior or issue that it was intended to identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   */
  Confidence?: number;

  /**
   * @public
   * <p>The level of importance assigned to the resources associated with the finding.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources.</p>
   */
  Criticality?: number;

  /**
   * @public
   * <p>A finding's title.</p>
   *          <note>
   *             <p>In this release, <code>Title</code> is a required property.</p>
   *          </note>
   */
  Title: string | undefined;

  /**
   * @public
   * <p>A finding's description.</p>
   *          <note>
   *             <p>In this release, <code>Description</code> is a required property.</p>
   *          </note>
   */
  Description: string | undefined;

  /**
   * @public
   * <p>A data type that describes the remediation options for a finding.</p>
   */
  Remediation?: Remediation;

  /**
   * @public
   * <p>A URL that links to a page about the current finding in the security findings provider's
   *          solution.</p>
   */
  SourceUrl?: string;

  /**
   * @public
   * <p>A data type where security findings providers can include additional solution-specific
   *          details that aren't part of the defined <code>AwsSecurityFinding</code> format.</p>
   *          <p>Can contain up to 50 key-value pairs. For each key-value pair, the key can contain up to 128 characters, and the value can contain up to 2048 characters.</p>
   */
  ProductFields?: Record<string, string>;

  /**
   * @public
   * <p>A list of name/value string pairs associated with the finding. These are custom,
   *          user-defined fields added to a finding. </p>
   */
  UserDefinedFields?: Record<string, string>;

  /**
   * @public
   * <p>A list of malware related to a finding.</p>
   */
  Malware?: Malware[];

  /**
   * @public
   * <p>The details of network-related information about a finding.</p>
   */
  Network?: Network;

  /**
   * @public
   * <p>Provides information about a network path that is relevant to a finding. Each entry
   *          under <code>NetworkPath</code> represents a component of that path.</p>
   */
  NetworkPath?: NetworkPathComponent[];

  /**
   * @public
   * <p>The details of process-related information about a finding.</p>
   */
  Process?: ProcessDetails;

  /**
   * @public
   * <p>Details about the threat detected in a security finding and the file paths that were affected by the threat.
   *       </p>
   */
  Threats?: Threat[];

  /**
   * @public
   * <p>Threat intelligence details related to a finding.</p>
   */
  ThreatIntelIndicators?: ThreatIntelIndicator[];

  /**
   * @public
   * <p>A set of resource data types that describe the resources that the finding refers
   *          to.</p>
   */
  Resources: Resource[] | undefined;

  /**
   * @public
   * <p>This data type is exclusive to findings that are generated as the result of a check run
   *          against a specific rule in a supported security standard, such as CIS Amazon Web Services Foundations.
   *          Contains security standard-related finding details.</p>
   */
  Compliance?: Compliance;

  /**
   * @public
   * <p>Indicates the veracity of a finding. </p>
   */
  VerificationState?: VerificationState;

  /**
   * @public
   * @deprecated
   *
   * <p>The workflow state of a finding. </p>
   */
  WorkflowState?: WorkflowState;

  /**
   * @public
   * <p>Provides information about the status of the investigation into a finding.</p>
   */
  Workflow?: Workflow;

  /**
   * @public
   * <p>The record state of a finding.</p>
   */
  RecordState?: RecordState;

  /**
   * @public
   * <p>A list of related findings.</p>
   */
  RelatedFindings?: RelatedFinding[];

  /**
   * @public
   * <p>A user-defined note added to a finding.</p>
   */
  Note?: Note;

  /**
   * @public
   * <p>Provides a list of vulnerabilities associated with the findings.</p>
   */
  Vulnerabilities?: Vulnerability[];

  /**
   * @public
   * <p>Provides an overview of the patch compliance status for an instance against a selected
   *          compliance standard.</p>
   */
  PatchSummary?: PatchSummary;

  /**
   * @public
   * <p>Provides details about an action that affects or that was taken on a resource.</p>
   */
  Action?: Action;

  /**
   * @public
   * <p>In a <code>BatchImportFindings</code> request, finding providers use <code>FindingProviderFields</code> to provide and update their own values for confidence, criticality, related findings, severity, and types.</p>
   */
  FindingProviderFields?: FindingProviderFields;

  /**
   * @public
   * <p>Indicates whether the finding is a sample finding.</p>
   */
  Sample?: boolean;

  /**
   * @public
   * <p>Provides metadata for the Amazon CodeGuru detector associated with a finding. This field pertains to
   * findings that relate to Lambda functions. Amazon Inspector identifies policy violations and
   * vulnerabilities in Lambda function code based on internal detectors developed
   * in collaboration with Amazon CodeGuru. Security Hub receives those findings.
   *         </p>
   */
  GeneratorDetails?: GeneratorDetails;
}

/**
 * @public
 * <p>A keyword filter for querying findings.</p>
 */
export interface KeywordFilter {
  /**
   * @public
   * <p>A value for the keyword.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>The IP filter for querying findings.</p>
 */
export interface IpFilter {
  /**
   * @public
   * <p>A finding's CIDR value.</p>
   */
  Cidr?: string;
}

/**
 * @public
 * <p>Boolean filter for querying findings.</p>
 */
export interface BooleanFilter {
  /**
   * @public
   * <p>The value of the boolean.</p>
   */
  Value?: boolean;
}

/**
 * @public
 * <p>A collection of attributes that are applied to all active Security Hub-aggregated findings and
 *          that result in a subset of findings that are included in this insight.</p>
 *          <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to
 *          20 filter values.</p>
 */
export interface AwsSecurityFindingFilters {
  /**
   * @public
   * <p>The ARN generated by Security Hub that uniquely identifies a third-party company
   *          (security findings provider) after this provider's product (solution that generates
   *          findings) is registered with Security Hub.</p>
   */
  ProductArn?: StringFilter[];

  /**
   * @public
   * <p>The Amazon Web Services account ID that a finding is generated in.</p>
   */
  AwsAccountId?: StringFilter[];

  /**
   * @public
   * <p>The security findings provider-specific identifier for a finding.</p>
   */
  Id?: StringFilter[];

  /**
   * @public
   * <p>The identifier for the solution-specific component (a discrete unit of logic) that
   *          generated a finding. In various security findings providers' solutions, this generator can
   *          be called a rule, a check, a detector, a plugin, etc.</p>
   */
  GeneratorId?: StringFilter[];

  /**
   * @public
   * <p>The Region from which the finding was generated.</p>
   */
  Region?: StringFilter[];

  /**
   * @public
   * <p>A finding type in the format of <code>namespace/category/classifier</code> that
   *          classifies a finding.</p>
   */
  Type?: StringFilter[];

  /**
   * @public
   * <p>An ISO8601-formatted timestamp that indicates when the security findings provider first
   *          observed the potential security issue that a finding captured.</p>
   *          <p>A correctly formatted example is <code>2020-05-21T20:16:34.724Z</code>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339 section 5.6, Internet Date/Time Format</a>.</p>
   */
  FirstObservedAt?: DateFilter[];

  /**
   * @public
   * <p>An ISO8601-formatted timestamp that indicates when the security findings provider most
   *          recently observed the potential security issue that a finding captured.</p>
   *          <p>A correctly formatted example is <code>2020-05-21T20:16:34.724Z</code>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339 section 5.6, Internet Date/Time Format</a>.</p>
   */
  LastObservedAt?: DateFilter[];

  /**
   * @public
   * <p>An ISO8601-formatted timestamp that indicates when the security findings provider
   *          captured the potential security issue that a finding captured.</p>
   *          <p>A correctly formatted example is <code>2020-05-21T20:16:34.724Z</code>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339 section 5.6, Internet Date/Time Format</a>.</p>
   */
  CreatedAt?: DateFilter[];

  /**
   * @public
   * <p>An ISO8601-formatted timestamp that indicates when the security findings provider last
   *          updated the finding record. </p>
   *          <p>A correctly formatted example is <code>2020-05-21T20:16:34.724Z</code>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339 section 5.6, Internet Date/Time Format</a>.</p>
   */
  UpdatedAt?: DateFilter[];

  /**
   * @public
   * @deprecated
   *
   * <p>The native severity as defined by the security findings provider's solution that
   *          generated the finding.</p>
   */
  SeverityProduct?: NumberFilter[];

  /**
   * @public
   * @deprecated
   *
   * <p>The normalized severity of a finding.</p>
   */
  SeverityNormalized?: NumberFilter[];

  /**
   * @public
   * <p>The label of a finding's severity.</p>
   */
  SeverityLabel?: StringFilter[];

  /**
   * @public
   * <p>A finding's confidence. Confidence is defined as the likelihood that a finding
   *          accurately identifies the behavior or issue that it was intended to identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   */
  Confidence?: NumberFilter[];

  /**
   * @public
   * <p>The level of importance assigned to the resources associated with the finding.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources.</p>
   */
  Criticality?: NumberFilter[];

  /**
   * @public
   * <p>A finding's title.</p>
   */
  Title?: StringFilter[];

  /**
   * @public
   * <p>A finding's description.</p>
   */
  Description?: StringFilter[];

  /**
   * @public
   * <p>The recommendation of what to do about the issue described in a finding.</p>
   */
  RecommendationText?: StringFilter[];

  /**
   * @public
   * <p>A URL that links to a page about the current finding in the security findings provider's
   *          solution.</p>
   */
  SourceUrl?: StringFilter[];

  /**
   * @public
   * <p>A data type where security findings providers can include additional solution-specific
   *          details that aren't part of the defined <code>AwsSecurityFinding</code> format.</p>
   */
  ProductFields?: MapFilter[];

  /**
   * @public
   * <p>The name of the solution (product) that generates findings.</p>
   */
  ProductName?: StringFilter[];

  /**
   * @public
   * <p>The name of the findings provider (company) that owns the solution (product) that
   *          generates findings.</p>
   */
  CompanyName?: StringFilter[];

  /**
   * @public
   * <p>A list of name/value string pairs associated with the finding. These are custom,
   *          user-defined fields added to a finding. </p>
   */
  UserDefinedFields?: MapFilter[];

  /**
   * @public
   * <p>The name of the malware that was observed.</p>
   */
  MalwareName?: StringFilter[];

  /**
   * @public
   * <p>The type of the malware that was observed.</p>
   */
  MalwareType?: StringFilter[];

  /**
   * @public
   * <p>The filesystem path of the malware that was observed.</p>
   */
  MalwarePath?: StringFilter[];

  /**
   * @public
   * <p>The state of the malware that was observed.</p>
   */
  MalwareState?: StringFilter[];

  /**
   * @public
   * <p>Indicates the direction of network traffic associated with a finding.</p>
   */
  NetworkDirection?: StringFilter[];

  /**
   * @public
   * <p>The protocol of network-related information about a finding.</p>
   */
  NetworkProtocol?: StringFilter[];

  /**
   * @public
   * <p>The source IPv4 address of network-related information about a finding.</p>
   */
  NetworkSourceIpV4?: IpFilter[];

  /**
   * @public
   * <p>The source IPv6 address of network-related information about a finding.</p>
   */
  NetworkSourceIpV6?: IpFilter[];

  /**
   * @public
   * <p>The source port of network-related information about a finding.</p>
   */
  NetworkSourcePort?: NumberFilter[];

  /**
   * @public
   * <p>The source domain of network-related information about a finding.</p>
   */
  NetworkSourceDomain?: StringFilter[];

  /**
   * @public
   * <p>The source media access control (MAC) address of network-related information about a
   *          finding.</p>
   */
  NetworkSourceMac?: StringFilter[];

  /**
   * @public
   * <p>The destination IPv4 address of network-related information about a finding.</p>
   */
  NetworkDestinationIpV4?: IpFilter[];

  /**
   * @public
   * <p>The destination IPv6 address of network-related information about a finding.</p>
   */
  NetworkDestinationIpV6?: IpFilter[];

  /**
   * @public
   * <p>The destination port of network-related information about a finding.</p>
   */
  NetworkDestinationPort?: NumberFilter[];

  /**
   * @public
   * <p>The destination domain of network-related information about a finding.</p>
   */
  NetworkDestinationDomain?: StringFilter[];

  /**
   * @public
   * <p>The name of the process.</p>
   */
  ProcessName?: StringFilter[];

  /**
   * @public
   * <p>The path to the process executable.</p>
   */
  ProcessPath?: StringFilter[];

  /**
   * @public
   * <p>The process ID.</p>
   */
  ProcessPid?: NumberFilter[];

  /**
   * @public
   * <p>The parent process ID. This field accepts positive integers between <code>O</code> and <code>2147483647</code>.</p>
   */
  ProcessParentPid?: NumberFilter[];

  /**
   * @public
   * <p>A timestamp that identifies when the process was launched.</p>
   *          <p>A correctly formatted example is <code>2020-05-21T20:16:34.724Z</code>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339 section 5.6, Internet Date/Time Format</a>.</p>
   */
  ProcessLaunchedAt?: DateFilter[];

  /**
   * @public
   * <p>A timestamp that identifies when the process was terminated.</p>
   *          <p>A correctly formatted example is <code>2020-05-21T20:16:34.724Z</code>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339 section 5.6, Internet Date/Time Format</a>.</p>
   */
  ProcessTerminatedAt?: DateFilter[];

  /**
   * @public
   * <p>The type of a threat intelligence indicator.</p>
   */
  ThreatIntelIndicatorType?: StringFilter[];

  /**
   * @public
   * <p>The value of a threat intelligence indicator.</p>
   */
  ThreatIntelIndicatorValue?: StringFilter[];

  /**
   * @public
   * <p>The category of a threat intelligence indicator.</p>
   */
  ThreatIntelIndicatorCategory?: StringFilter[];

  /**
   * @public
   * <p>A timestamp that identifies the last observation of a threat intelligence indicator.</p>
   */
  ThreatIntelIndicatorLastObservedAt?: DateFilter[];

  /**
   * @public
   * <p>The source of the threat intelligence.</p>
   */
  ThreatIntelIndicatorSource?: StringFilter[];

  /**
   * @public
   * <p>The URL for more details from the source of the threat intelligence.</p>
   */
  ThreatIntelIndicatorSourceUrl?: StringFilter[];

  /**
   * @public
   * <p>Specifies the type of the resource that details are provided for.</p>
   */
  ResourceType?: StringFilter[];

  /**
   * @public
   * <p>The canonical identifier for the given resource type.</p>
   */
  ResourceId?: StringFilter[];

  /**
   * @public
   * <p>The canonical Amazon Web Services partition name that the Region is assigned to.</p>
   */
  ResourcePartition?: StringFilter[];

  /**
   * @public
   * <p>The canonical Amazon Web Services external Region name where this resource is located.</p>
   */
  ResourceRegion?: StringFilter[];

  /**
   * @public
   * <p>A list of Amazon Web Services tags associated with a resource at the time the finding was
   *          processed.</p>
   */
  ResourceTags?: MapFilter[];

  /**
   * @public
   * <p>The instance type of the instance.</p>
   */
  ResourceAwsEc2InstanceType?: StringFilter[];

  /**
   * @public
   * <p>The Amazon Machine Image (AMI) ID of the instance.</p>
   */
  ResourceAwsEc2InstanceImageId?: StringFilter[];

  /**
   * @public
   * <p>The IPv4 addresses associated with the instance.</p>
   */
  ResourceAwsEc2InstanceIpV4Addresses?: IpFilter[];

  /**
   * @public
   * <p>The IPv6 addresses associated with the instance.</p>
   */
  ResourceAwsEc2InstanceIpV6Addresses?: IpFilter[];

  /**
   * @public
   * <p>The key name associated with the instance.</p>
   */
  ResourceAwsEc2InstanceKeyName?: StringFilter[];

  /**
   * @public
   * <p>The IAM profile ARN of the instance.</p>
   */
  ResourceAwsEc2InstanceIamInstanceProfileArn?: StringFilter[];

  /**
   * @public
   * <p>The identifier of the VPC that the instance was launched in.</p>
   */
  ResourceAwsEc2InstanceVpcId?: StringFilter[];

  /**
   * @public
   * <p>The identifier of the subnet that the instance was launched in.</p>
   */
  ResourceAwsEc2InstanceSubnetId?: StringFilter[];

  /**
   * @public
   * <p>The date and time the instance was launched.</p>
   */
  ResourceAwsEc2InstanceLaunchedAt?: DateFilter[];

  /**
   * @public
   * <p>The canonical user ID of the owner of the S3 bucket.</p>
   */
  ResourceAwsS3BucketOwnerId?: StringFilter[];

  /**
   * @public
   * <p>The display name of the owner of the S3 bucket.</p>
   */
  ResourceAwsS3BucketOwnerName?: StringFilter[];

  /**
   * @public
   * @deprecated
   *
   * <p>The user associated with the IAM access key related to a finding.</p>
   */
  ResourceAwsIamAccessKeyUserName?: StringFilter[];

  /**
   * @public
   * <p>The name of the principal that is associated with an IAM access key.</p>
   */
  ResourceAwsIamAccessKeyPrincipalName?: StringFilter[];

  /**
   * @public
   * <p>The status of the IAM access key related to a finding.</p>
   */
  ResourceAwsIamAccessKeyStatus?: StringFilter[];

  /**
   * @public
   * <p>The creation date/time of the IAM access key related to a finding.</p>
   */
  ResourceAwsIamAccessKeyCreatedAt?: DateFilter[];

  /**
   * @public
   * <p>The name of an IAM user.</p>
   */
  ResourceAwsIamUserUserName?: StringFilter[];

  /**
   * @public
   * <p>The name of the container related to a finding.</p>
   */
  ResourceContainerName?: StringFilter[];

  /**
   * @public
   * <p>The identifier of the image related to a finding.</p>
   */
  ResourceContainerImageId?: StringFilter[];

  /**
   * @public
   * <p>The name of the image related to a finding.</p>
   */
  ResourceContainerImageName?: StringFilter[];

  /**
   * @public
   * <p>A timestamp that identifies when the container was started.</p>
   *          <p>A correctly formatted example is <code>2020-05-21T20:16:34.724Z</code>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339 section 5.6, Internet Date/Time Format</a>.</p>
   */
  ResourceContainerLaunchedAt?: DateFilter[];

  /**
   * @public
   * <p>The details of a resource that doesn't have a specific subfield for the resource type
   *          defined.</p>
   */
  ResourceDetailsOther?: MapFilter[];

  /**
   * @public
   * <p>Exclusive to findings that are generated as the result of a check run against a specific
   *          rule in a supported standard, such as CIS Amazon Web Services Foundations. Contains security
   *          standard-related finding details.</p>
   */
  ComplianceStatus?: StringFilter[];

  /**
   * @public
   * <p>The veracity of a finding.</p>
   */
  VerificationState?: StringFilter[];

  /**
   * @public
   * <p>The workflow state of a finding.</p>
   *          <p>Note that this field is deprecated. To search for a finding based on its workflow
   *          status, use <code>WorkflowStatus</code>.</p>
   */
  WorkflowState?: StringFilter[];

  /**
   * @public
   * <p>The status of the investigation into a finding. Allowed values are the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code> - The initial state of a finding, before it is reviewed.</p>
   *                <p>Security Hub also resets the workflow status from <code>NOTIFIED</code> or
   *                   <code>RESOLVED</code> to <code>NEW</code> in the following cases:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>RecordState</code> changes from <code>ARCHIVED</code> to <code>ACTIVE</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Compliance.Status</code> changes from <code>PASSED</code> to either <code>WARNING</code>,
   *                         <code>FAILED</code>, or <code>NOT_AVAILABLE</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOTIFIED</code> - Indicates that the resource owner has been notified about
   *                the security issue. Used when the initial reviewer is not the resource owner, and
   *                needs intervention from the resource owner.</p>
   *                <p>If one of the following occurs, the workflow status is changed automatically from
   *                <code>NOTIFIED</code> to <code>NEW</code>:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>RecordState</code> changes from <code>ARCHIVED</code> to
   *                      <code>ACTIVE</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Compliance.Status</code> changes from <code>PASSED</code> to <code>FAILED</code>,
   *                      <code>WARNING</code>, or <code>NOT_AVAILABLE</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUPPRESSED</code> - Indicates that you reviewed the finding and do not believe that any action is
   *                needed.</p>
   *                <p>The workflow status of a <code>SUPPRESSED</code> finding does not change if
   *                <code>RecordState</code> changes from <code>ARCHIVED</code> to
   *                <code>ACTIVE</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESOLVED</code> - The finding was reviewed and remediated and is now
   *                considered resolved. </p>
   *                <p>The finding remains <code>RESOLVED</code> unless one of the following occurs:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>RecordState</code> changes from <code>ARCHIVED</code> to
   *                      <code>ACTIVE</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Compliance.Status</code> changes from <code>PASSED</code> to <code>FAILED</code>,
   *                      <code>WARNING</code>, or <code>NOT_AVAILABLE</code>.</p>
   *                   </li>
   *                </ul>
   *                <p>In those cases, the workflow status is automatically reset to <code>NEW</code>.</p>
   *                <p>For findings from controls, if <code>Compliance.Status</code> is <code>PASSED</code>,
   *                then Security Hub automatically sets the workflow status to <code>RESOLVED</code>.</p>
   *             </li>
   *          </ul>
   */
  WorkflowStatus?: StringFilter[];

  /**
   * @public
   * <p>The updated record state for the finding.</p>
   */
  RecordState?: StringFilter[];

  /**
   * @public
   * <p>The ARN of the solution that generated a related finding.</p>
   */
  RelatedFindingsProductArn?: StringFilter[];

  /**
   * @public
   * <p>The solution-generated identifier for a related finding.</p>
   */
  RelatedFindingsId?: StringFilter[];

  /**
   * @public
   * <p>The text of a note.</p>
   */
  NoteText?: StringFilter[];

  /**
   * @public
   * <p>The timestamp of when the note was updated.</p>
   */
  NoteUpdatedAt?: DateFilter[];

  /**
   * @public
   * <p>The principal that created a note.</p>
   */
  NoteUpdatedBy?: StringFilter[];

  /**
   * @public
   * @deprecated
   *
   * <p>A keyword for a finding.</p>
   */
  Keyword?: KeywordFilter[];

  /**
   * @public
   * <p>The finding provider value for the finding confidence. Confidence is defined as the likelihood
   *          that a finding accurately identifies the behavior or issue that it was intended to
   *          identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   */
  FindingProviderFieldsConfidence?: NumberFilter[];

  /**
   * @public
   * <p>The finding provider value for the level of importance assigned to the resources associated with
   *          the findings.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources. </p>
   */
  FindingProviderFieldsCriticality?: NumberFilter[];

  /**
   * @public
   * <p>The finding identifier of a related finding that is identified by the finding provider.</p>
   */
  FindingProviderFieldsRelatedFindingsId?: StringFilter[];

  /**
   * @public
   * <p>The ARN of the solution that generated a related finding that is identified by the finding provider.</p>
   */
  FindingProviderFieldsRelatedFindingsProductArn?: StringFilter[];

  /**
   * @public
   * <p>The finding provider value for the severity label.</p>
   */
  FindingProviderFieldsSeverityLabel?: StringFilter[];

  /**
   * @public
   * <p>The finding provider's original value for the severity.</p>
   */
  FindingProviderFieldsSeverityOriginal?: StringFilter[];

  /**
   * @public
   * <p>One or more finding types that the finding provider assigned to the finding. Uses the format of <code>namespace/category/classifier</code>
   *          that classify a finding.</p>
   *          <p>Valid namespace values are: Software and Configuration Checks | TTPs | Effects | Unusual
   *          Behaviors | Sensitive Data Identifications</p>
   */
  FindingProviderFieldsTypes?: StringFilter[];

  /**
   * @public
   * <p>Indicates whether or not sample findings are included in the filter results.</p>
   */
  Sample?: BooleanFilter[];

  /**
   * @public
   * <p>
   *          The unique identifier of a control across standards. Values for this field typically consist of an
   *          Amazon Web Service and a number, such as APIGateway.5.
   *       </p>
   */
  ComplianceSecurityControlId?: StringFilter[];

  /**
   * @public
   * <p>
   *          The unique identifier of a standard in which a control is enabled. This field consists of the resource portion of the
   *          Amazon Resource Name (ARN) returned for a standard in the <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html">DescribeStandards</a> API response.
   *       </p>
   */
  ComplianceAssociatedStandardsId?: StringFilter[];
}

/**
 * @public
 * <p>Identifies which finding to get the finding history for.</p>
 */
export interface AwsSecurityFindingIdentifier {
  /**
   * @public
   * <p>The identifier of the finding that was specified by the finding provider.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The ARN generated by Security Hub that uniquely identifies a product that generates findings.
   *          This can be the ARN for a third-party product that is integrated with Security Hub, or the ARN for
   *          a custom integration.</p>
   */
  ProductArn: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteAutomationRulesRequest {
  /**
   * @public
   * <p>
   *          A list of Amazon Resource Names (ARNs) for the rules that are to be deleted.
   *       </p>
   */
  AutomationRulesArns: string[] | undefined;
}

/**
 * @public
 * <p>
 *          A list of objects containing <code>RuleArn</code>, <code>ErrorCode</code>, and <code>ErrorMessage</code>. This parameter
 *          tells you which automation rules the request didn't process and why.
 *       </p>
 */
export interface UnprocessedAutomationRule {
  /**
   * @public
   * <p>
   *          The Amazon Resource Name (ARN) for the unprocessed automation rule.
   *       </p>
   */
  RuleArn?: string;

  /**
   * @public
   * <p>
   *          The error code associated with the unprocessed automation rule.
   *       </p>
   */
  ErrorCode?: number;

  /**
   * @public
   * <p>
   *          An error message describing why a request didn't process a specific rule.
   *       </p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 */
export interface BatchDeleteAutomationRulesResponse {
  /**
   * @public
   * <p>
   *          A list of properly processed rule ARNs.
   *       </p>
   */
  ProcessedAutomationRules?: string[];

  /**
   * @public
   * <p>
   *          A list of objects containing <code>RuleArn</code>, <code>ErrorCode</code>, and <code>ErrorMessage</code>. This parameter
   *          tells you which automation rules the request didn't delete and why.
   *       </p>
   */
  UnprocessedAutomationRules?: UnprocessedAutomationRule[];
}

/**
 * @public
 */
export interface BatchDisableStandardsRequest {
  /**
   * @public
   * <p>The ARNs of the standards subscriptions to disable.</p>
   */
  StandardsSubscriptionArns: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const StandardsStatus = {
  DELETING: "DELETING",
  FAILED: "FAILED",
  INCOMPLETE: "INCOMPLETE",
  PENDING: "PENDING",
  READY: "READY",
} as const;

/**
 * @public
 */
export type StandardsStatus = (typeof StandardsStatus)[keyof typeof StandardsStatus];

/**
 * @public
 * @enum
 */
export const StatusReasonCode = {
  INTERNAL_ERROR: "INTERNAL_ERROR",
  NO_AVAILABLE_CONFIGURATION_RECORDER: "NO_AVAILABLE_CONFIGURATION_RECORDER",
} as const;

/**
 * @public
 */
export type StatusReasonCode = (typeof StatusReasonCode)[keyof typeof StatusReasonCode];

/**
 * @public
 * <p>The reason for the current status of a standard subscription.</p>
 */
export interface StandardsStatusReason {
  /**
   * @public
   * <p>The reason code that represents the reason for the current status of a standard subscription.</p>
   */
  StatusReasonCode: StatusReasonCode | undefined;
}

/**
 * @public
 * <p>A resource that represents your subscription to a supported standard.</p>
 */
export interface StandardsSubscription {
  /**
   * @public
   * <p>The ARN of a resource that represents your subscription to a supported standard.</p>
   */
  StandardsSubscriptionArn: string | undefined;

  /**
   * @public
   * <p>The ARN of a standard.</p>
   */
  StandardsArn: string | undefined;

  /**
   * @public
   * <p>A key-value pair of input for the standard.</p>
   */
  StandardsInput: Record<string, string> | undefined;

  /**
   * @public
   * <p>The status of the standard subscription.</p>
   *          <p>The status values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - Standard is in the process of being enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>READY</code> - Standard is enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INCOMPLETE</code> - Standard could not be enabled completely. Some controls may not be available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - Standard is in the process of being disabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - Standard could not be disabled.</p>
   *             </li>
   *          </ul>
   */
  StandardsStatus: StandardsStatus | undefined;

  /**
   * @public
   * <p>The reason for the current status.</p>
   */
  StandardsStatusReason?: StandardsStatusReason;
}

/**
 * @public
 */
export interface BatchDisableStandardsResponse {
  /**
   * @public
   * <p>The details of the standards subscriptions that were disabled.</p>
   */
  StandardsSubscriptions?: StandardsSubscription[];
}

/**
 * @public
 * <p>The standard that you want to enable.</p>
 */
export interface StandardsSubscriptionRequest {
  /**
   * @public
   * <p>The ARN of the standard that you want to enable. To view the list of available standards
   *          and their ARNs, use the <code>DescribeStandards</code> operation.</p>
   */
  StandardsArn: string | undefined;

  /**
   * @public
   * <p>A key-value pair of input for the standard.</p>
   */
  StandardsInput?: Record<string, string>;
}

/**
 * @public
 */
export interface BatchEnableStandardsRequest {
  /**
   * @public
   * <p>The list of standards checks to enable.</p>
   */
  StandardsSubscriptionRequests: StandardsSubscriptionRequest[] | undefined;
}

/**
 * @public
 */
export interface BatchEnableStandardsResponse {
  /**
   * @public
   * <p>The details of the standards subscriptions that were enabled.</p>
   */
  StandardsSubscriptions?: StandardsSubscription[];
}

/**
 * @public
 */
export interface BatchGetAutomationRulesRequest {
  /**
   * @public
   * <p>
   *          A list of rule ARNs to get details for.
   *       </p>
   */
  AutomationRulesArns: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetAutomationRulesResponse {
  /**
   * @public
   * <p>
   *          A list of rule details for the provided rule ARNs.
   *       </p>
   */
  Rules?: AutomationRulesConfig[];

  /**
   * @public
   * <p>
   *          A list of objects containing <code>RuleArn</code>, <code>ErrorCode</code>, and <code>ErrorMessage</code>. This parameter
   *          tells you which automation rules the request didn't retrieve and why.
   *       </p>
   */
  UnprocessedAutomationRules?: UnprocessedAutomationRule[];
}

/**
 * @public
 */
export interface BatchGetSecurityControlsRequest {
  /**
   * @public
   * <p> A list of security controls (identified with <code>SecurityControlId</code>,
   *             <code>SecurityControlArn</code>, or a mix of both parameters). The security control ID
   *          or Amazon Resource Name (ARN) is the same across standards. </p>
   */
  SecurityControlIds: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ControlStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ControlStatus = (typeof ControlStatus)[keyof typeof ControlStatus];

/**
 * @public
 * @enum
 */
export const SeverityRating = {
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;

/**
 * @public
 */
export type SeverityRating = (typeof SeverityRating)[keyof typeof SeverityRating];

/**
 * @public
 * <p>
 *          A security control in Security Hub describes a security best practice related to a specific resource.
 *       </p>
 */
export interface SecurityControl {
  /**
   * @public
   * <p>
   *          The unique identifier of a security control across standards. Values for this field typically consist of an Amazon Web Service name and a
   *          number, such as APIGateway.3.
   *       </p>
   */
  SecurityControlId: string | undefined;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) for a security control across standards, such as
   *             <code>arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1</code>. This
   *          parameter doesn't mention a specific standard. </p>
   */
  SecurityControlArn: string | undefined;

  /**
   * @public
   * <p>The title of a security control.
   *       </p>
   */
  Title: string | undefined;

  /**
   * @public
   * <p> The description of a security control across standards. This typically summarizes how
   *             Security Hub evaluates the control and the conditions under which it produces a
   *          failed finding. This parameter doesn't reference a specific standard. </p>
   */
  Description: string | undefined;

  /**
   * @public
   * <p>
   *          A link to Security Hub documentation that explains how to remediate a failed finding for a security control.
   *       </p>
   */
  RemediationUrl: string | undefined;

  /**
   * @public
   * <p>
   *          The severity of a security control. For more information about how Security Hub determines control severity, see
   *          <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/controls-findings-create-update.html#control-findings-severity">Assigning severity to control findings</a> in the
   *          <i>Security Hub User Guide</i>.
   *       </p>
   */
  SeverityRating: SeverityRating | undefined;

  /**
   * @public
   * <p>
   *          The enablement status of a security control in a specific standard.
   *       </p>
   */
  SecurityControlStatus: ControlStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const UnprocessedErrorCode = {
  ACCESS_DENIED: "ACCESS_DENIED",
  INVALID_INPUT: "INVALID_INPUT",
  LIMIT_EXCEEDED: "LIMIT_EXCEEDED",
  NOT_FOUND: "NOT_FOUND",
} as const;

/**
 * @public
 */
export type UnprocessedErrorCode = (typeof UnprocessedErrorCode)[keyof typeof UnprocessedErrorCode];

/**
 * @public
 * <p> Provides details about a security control for which a response couldn't be returned. </p>
 */
export interface UnprocessedSecurityControl {
  /**
   * @public
   * <p> The control (identified with <code>SecurityControlId</code>,
   *             <code>SecurityControlArn</code>, or a mix of both parameters) for which a response
   *          couldn't be returned. </p>
   */
  SecurityControlId: string | undefined;

  /**
   * @public
   * <p>
   *          The error code for the unprocessed security control.
   *       </p>
   */
  ErrorCode: UnprocessedErrorCode | undefined;

  /**
   * @public
   * <p>
   *          The reason why the security control was unprocessed.
   *       </p>
   */
  ErrorReason?: string;
}

/**
 * @public
 */
export interface BatchGetSecurityControlsResponse {
  /**
   * @public
   * <p>
   *          An array that returns the identifier, Amazon Resource Name (ARN), and other details about a security control.
   *          The same information is returned whether the request includes <code>SecurityControlId</code> or <code>SecurityControlArn</code>.
   *       </p>
   */
  SecurityControls: SecurityControl[] | undefined;

  /**
   * @public
   * <p>
   *          A security control (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters) for which
   *          details cannot be returned.
   *       </p>
   */
  UnprocessedIds?: UnprocessedSecurityControl[];
}

/**
 * @public
 * <p>
 *          An array with one or more objects that includes a security control (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters)
 *          and the Amazon Resource Name (ARN) of a standard. The security control ID or ARN is the same across standards.
 *       </p>
 */
export interface StandardsControlAssociationId {
  /**
   * @public
   * <p>
   *          The unique identifier (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters) of a security
   *          control across standards.
   *       </p>
   */
  SecurityControlId: string | undefined;

  /**
   * @public
   * <p>
   *          The ARN of a standard.
   *       </p>
   */
  StandardsArn: string | undefined;
}

/**
 * @public
 */
export interface BatchGetStandardsControlAssociationsRequest {
  /**
   * @public
   * <p>
   *          An array with one or more objects that includes a security control (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters) and the Amazon Resource Name (ARN) of a standard.
   *          This field is used to query the enablement status of a control in a specified standard. The security control ID or ARN is the same across standards.
   *       </p>
   */
  StandardsControlAssociationIds: StandardsControlAssociationId[] | undefined;
}

/**
 * @public
 * <p> Provides details about a control's enablement status in a specified standard. </p>
 */
export interface StandardsControlAssociationDetail {
  /**
   * @public
   * <p>
   *          The Amazon Resource Name (ARN) of a security standard.
   *       </p>
   */
  StandardsArn: string | undefined;

  /**
   * @public
   * <p>
   *          The unique identifier of a security control across standards. Values for this field typically consist of an Amazon Web Service
   *          name and a number, such as APIGateway.3.
   *       </p>
   */
  SecurityControlId: string | undefined;

  /**
   * @public
   * <p> The ARN of a security control across standards, such as
   *             <code>arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1</code>. This
   *          parameter doesn't mention a specific standard. </p>
   */
  SecurityControlArn: string | undefined;

  /**
   * @public
   * <p>
   *          Specifies whether a control is enabled or disabled in a specified standard.
   *       </p>
   */
  AssociationStatus: AssociationStatus | undefined;

  /**
   * @public
   * <p>
   *          The requirement that underlies a control in the compliance framework related to the standard.
   *       </p>
   */
  RelatedRequirements?: string[];

  /**
   * @public
   * <p>
   *          The time at which the enablement status of the control in the specified standard was last updated.
   *       </p>
   */
  UpdatedAt?: Date;

  /**
   * @public
   * <p>
   *          The reason for updating the enablement status of a control in a specified standard.
   *       </p>
   */
  UpdatedReason?: string;

  /**
   * @public
   * <p>
   *          The title of a control. This field may reference a specific standard.
   *       </p>
   */
  StandardsControlTitle?: string;

  /**
   * @public
   * <p>
   *          The description of a control. This typically summarizes how Security Hub evaluates the control and the
   *          conditions under which it produces a failed finding. This parameter may reference a specific standard.
   *       </p>
   */
  StandardsControlDescription?: string;

  /**
   * @public
   * <p> Provides the input parameter that Security Hub uses to call the <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateStandardsControl.html">UpdateStandardsControl</a> API. This API can be used to enable or disable a control
   *          in a specified standard. </p>
   */
  StandardsControlArns?: string[];
}

/**
 * @public
 * <p> Provides details about which
 *          control's enablement status couldn't be retrieved in a specified standard when calling <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateStandardsControlAssociations.html">BatchUpdateStandardsControlAssociations</a>. This parameter also provides details
 *          about why the request was unprocessed. </p>
 */
export interface UnprocessedStandardsControlAssociation {
  /**
   * @public
   * <p> An array with one or more objects that includes a security control (identified with
   *             <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both
   *          parameters) and the Amazon Resource Name (ARN) of a standard. This parameter shows the
   *          specific controls for which the enablement status couldn't be retrieved in specified standards when
   *          calling <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateStandardsControlAssociations.html">BatchUpdateStandardsControlAssociations</a>. </p>
   */
  StandardsControlAssociationId: StandardsControlAssociationId | undefined;

  /**
   * @public
   * <p>The error code for the unprocessed standard and control association.
   *       </p>
   */
  ErrorCode: UnprocessedErrorCode | undefined;

  /**
   * @public
   * <p>The reason why the standard and control association was unprocessed. </p>
   */
  ErrorReason?: string;
}

/**
 * @public
 */
export interface BatchGetStandardsControlAssociationsResponse {
  /**
   * @public
   * <p>Provides the enablement status of a security control in a specified standard and other details for the control in relation to
   *          the specified standard.
   *       </p>
   */
  StandardsControlAssociationDetails: StandardsControlAssociationDetail[] | undefined;

  /**
   * @public
   * <p>
   *          A security control (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters) whose enablement
   *          status in a specified standard cannot be returned.
   *       </p>
   */
  UnprocessedAssociations?: UnprocessedStandardsControlAssociation[];
}

/**
 * @public
 */
export interface BatchImportFindingsRequest {
  /**
   * @public
   * <p>A list of findings to import. To successfully import a finding, it must follow the
   *             <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html">Amazon Web Services Security Finding Format</a>. Maximum of 100 findings per request.</p>
   */
  Findings: AwsSecurityFinding[] | undefined;
}

/**
 * @public
 * <p>The list of the findings that cannot be imported. For each finding, the list provides
 *          the error.</p>
 */
export interface ImportFindingsError {
  /**
   * @public
   * <p>The identifier of the finding that could not be updated.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The code of the error returned by the <code>BatchImportFindings</code> operation.</p>
   */
  ErrorCode: string | undefined;

  /**
   * @public
   * <p>The message of the error returned by the <code>BatchImportFindings</code>
   *          operation.</p>
   */
  ErrorMessage: string | undefined;
}

/**
 * @public
 */
export interface BatchImportFindingsResponse {
  /**
   * @public
   * <p>The number of findings that failed to import.</p>
   */
  FailedCount: number | undefined;

  /**
   * @public
   * <p>The number of findings that were successfully imported.</p>
   */
  SuccessCount: number | undefined;

  /**
   * @public
   * <p>The list of findings that failed to import.</p>
   */
  FailedFindings?: ImportFindingsError[];
}

/**
 * @public
 * <p>
 *          Specifies the parameters to update in an existing automation rule.
 *       </p>
 */
export interface UpdateAutomationRulesRequestItem {
  /**
   * @public
   * <p>
   *          The Amazon Resource Name (ARN) for the rule.
   *       </p>
   */
  RuleArn: string | undefined;

  /**
   * @public
   * <p>
   *          Whether the rule is active after it is created. If
   *          this parameter is equal to <code>ENABLED</code>, Security Hub starts applying the rule to findings
   *          and finding updates after the rule is created. To change the value of this
   *          parameter after creating a rule, use <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateAutomationRules.html">
   *                <code>BatchUpdateAutomationRules</code>
   *             </a>.
   *       </p>
   */
  RuleStatus?: RuleStatus;

  /**
   * @public
   * <p> An integer ranging from 1 to 1000 that represents the order in which the rule action is
   *          applied to findings. Security Hub applies rules with lower values for this parameter
   *          first. </p>
   */
  RuleOrder?: number;

  /**
   * @public
   * <p>
   *          A description of the rule.
   *       </p>
   */
  Description?: string;

  /**
   * @public
   * <p>
   *          The name of the rule.
   *       </p>
   */
  RuleName?: string;

  /**
   * @public
   * <p>Specifies whether a rule is the last to be applied with respect to a finding that matches the rule criteria. This is useful when a finding
   *             matches the criteria for multiple rules, and each rule has different actions. If a rule is terminal, Security Hub applies the rule action to a finding that matches
   *             the rule criteria and doesn't evaluate other rules for the finding. By default, a rule isn't terminal.
   *         </p>
   */
  IsTerminal?: boolean;

  /**
   * @public
   * <p>
   *          A set of ASFF finding field attributes and corresponding expected values that
   *          Security Hub uses to filter findings. If a rule is enabled and a finding matches the conditions specified in
   *          this parameter, Security Hub applies the rule action to the finding.
   *       </p>
   */
  Criteria?: AutomationRulesFindingFilters;

  /**
   * @public
   * <p>
   *          One or more actions to update finding fields if a finding matches the conditions
   *          specified in <code>Criteria</code>.
   *       </p>
   */
  Actions?: AutomationRulesAction[];
}

/**
 * @public
 */
export interface BatchUpdateAutomationRulesRequest {
  /**
   * @public
   * <p>
   *          An array of ARNs for the rules that are to be updated. Optionally, you can also include
   *          <code>RuleStatus</code> and <code>RuleOrder</code>.
   *       </p>
   */
  UpdateAutomationRulesRequestItems: UpdateAutomationRulesRequestItem[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateAutomationRulesResponse {
  /**
   * @public
   * <p>
   *          A list of properly processed rule ARNs.
   *       </p>
   */
  ProcessedAutomationRules?: string[];

  /**
   * @public
   * <p>
   *          A list of objects containing <code>RuleArn</code>, <code>ErrorCode</code>, and <code>ErrorMessage</code>. This parameter
   *          tells you which automation rules the request didn't update and why.
   *       </p>
   */
  UnprocessedAutomationRules?: UnprocessedAutomationRule[];
}

/**
 * @public
 */
export interface BatchUpdateFindingsRequest {
  /**
   * @public
   * <p>The list of findings to update. <code>BatchUpdateFindings</code> can be used to update
   *          up to 100 findings at a time.</p>
   *          <p>For each finding, the list provides the finding identifier and the ARN of the finding
   *          provider.</p>
   */
  FindingIdentifiers: AwsSecurityFindingIdentifier[] | undefined;

  /**
   * @public
   * <p>The updated note.</p>
   */
  Note?: NoteUpdate;

  /**
   * @public
   * <p>Used to update the finding severity.</p>
   */
  Severity?: SeverityUpdate;

  /**
   * @public
   * <p>Indicates the veracity of a finding.</p>
   *          <p>The available values for <code>VerificationState</code> are  as follows.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code> – The default disposition of a security finding</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TRUE_POSITIVE</code> – The security finding is confirmed</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FALSE_POSITIVE</code> – The security finding was determined to be a false
   *                alarm</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BENIGN_POSITIVE</code> – A special case of <code>TRUE_POSITIVE</code> where
   *                the finding doesn't pose any threat, is expected, or both</p>
   *             </li>
   *          </ul>
   */
  VerificationState?: VerificationState;

  /**
   * @public
   * <p>The updated value for the finding confidence. Confidence is defined as the likelihood
   *          that a finding accurately identifies the behavior or issue that it was intended to
   *          identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   */
  Confidence?: number;

  /**
   * @public
   * <p>The updated value for the level of importance assigned to the resources associated with
   *          the findings.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources. </p>
   */
  Criticality?: number;

  /**
   * @public
   * <p>One or more finding types in the format of namespace/category/classifier that classify a
   *          finding.</p>
   *          <p>Valid namespace values are as follows.</p>
   *          <ul>
   *             <li>
   *                <p>Software and Configuration Checks</p>
   *             </li>
   *             <li>
   *                <p>TTPs</p>
   *             </li>
   *             <li>
   *                <p>Effects</p>
   *             </li>
   *             <li>
   *                <p>Unusual Behaviors</p>
   *             </li>
   *             <li>
   *                <p>Sensitive Data Identifications </p>
   *             </li>
   *          </ul>
   */
  Types?: string[];

  /**
   * @public
   * <p>A list of name/value string pairs associated with the finding. These are custom,
   *          user-defined fields added to a finding.</p>
   */
  UserDefinedFields?: Record<string, string>;

  /**
   * @public
   * <p>Used to update the workflow status of a finding.</p>
   *          <p>The workflow status indicates the progress of the investigation into the finding. </p>
   */
  Workflow?: WorkflowUpdate;

  /**
   * @public
   * <p>A list of findings that are related to the updated findings.</p>
   */
  RelatedFindings?: RelatedFinding[];
}

/**
 * @public
 * <p>A finding from a <code>BatchUpdateFindings</code> request that Security Hub was unable to
 *          update.</p>
 */
export interface BatchUpdateFindingsUnprocessedFinding {
  /**
   * @public
   * <p>The identifier of the finding that was not updated.</p>
   */
  FindingIdentifier: AwsSecurityFindingIdentifier | undefined;

  /**
   * @public
   * <p>The code associated with the error. Possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ConcurrentUpdateError</code> - Another request attempted to update the finding while this request was being processed.
   * This error may also occur if you call <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateFindings.html">
   *                      <code>BatchUpdateFindings</code>
   *                   </a>
   * and <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchImportFindings.html">
   *                      <code>BatchImportFindings</code>
   *                   </a> at the same time.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DuplicatedFindingIdentifier</code> - The request included two or more findings with the same <code>FindingIdentifier</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FindingNotFound</code> - The <code>FindingIdentifier</code> included in the request did not match an existing finding.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FindingSizeExceeded</code> - The finding size was greater than the permissible value of 240 KB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InternalFailure</code> - An internal service failure occurred when updating the finding.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InvalidInput</code> - The finding update contained an invalid value that did not satisfy the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html">Amazon Web Services Security Finding Format</a> syntax.</p>
   *             </li>
   *          </ul>
   */
  ErrorCode: string | undefined;

  /**
   * @public
   * <p>The message associated with the error. Possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Concurrent finding updates detected</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Finding Identifier is duplicated</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Finding Not Found</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Finding size exceeded 240 KB</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Internal service failure</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Invalid Input</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ErrorMessage: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateFindingsResponse {
  /**
   * @public
   * <p>The list of findings that were updated successfully.</p>
   */
  ProcessedFindings: AwsSecurityFindingIdentifier[] | undefined;

  /**
   * @public
   * <p>The list of findings that were not updated.</p>
   */
  UnprocessedFindings: BatchUpdateFindingsUnprocessedFinding[] | undefined;
}

/**
 * @public
 * <p>An array of requested updates to the enablement status of controls in specified
 *          standards. The objects in the array include a security control ID, the Amazon Resource Name (ARN) of the standard, the requested
 *          enablement status, and the reason for updating the enablement status.</p>
 */
export interface StandardsControlAssociationUpdate {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the standard in which you want to update the
   *          control's enablement status.</p>
   */
  StandardsArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the security control whose enablement status you want to update.</p>
   */
  SecurityControlId: string | undefined;

  /**
   * @public
   * <p>The desired enablement status of the control in the standard.</p>
   */
  AssociationStatus: AssociationStatus | undefined;

  /**
   * @public
   * <p>The reason for updating the control's enablement status in the standard.</p>
   */
  UpdatedReason?: string;
}

/**
 * @public
 */
export interface BatchUpdateStandardsControlAssociationsRequest {
  /**
   * @public
   * <p>
   *          Updates the enablement status of a security control in a specified standard.
   *       </p>
   */
  StandardsControlAssociationUpdates: StandardsControlAssociationUpdate[] | undefined;
}

/**
 * @public
 * <p>Provides details about which control's enablement status could not be updated in a
 *          specified standard when calling the <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateStandardsControlAssociations.html">BatchUpdateStandardsControlAssociations</a> API. This parameter also provides
 *          details about why the request was unprocessed. </p>
 */
export interface UnprocessedStandardsControlAssociationUpdate {
  /**
   * @public
   * <p>An array of control and standard associations for which an update failed when calling
   *          <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateStandardsControlAssociations.html">BatchUpdateStandardsControlAssociations</a>.
   *       </p>
   */
  StandardsControlAssociationUpdate: StandardsControlAssociationUpdate | undefined;

  /**
   * @public
   * <p>The error code for the unprocessed update of the control's enablement status in the
   *          specified standard.</p>
   */
  ErrorCode: UnprocessedErrorCode | undefined;

  /**
   * @public
   * <p>The reason why a control's enablement status in the specified standard couldn't be updated. </p>
   */
  ErrorReason?: string;
}

/**
 * @public
 */
export interface BatchUpdateStandardsControlAssociationsResponse {
  /**
   * @public
   * <p>
   *          A security control (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters) whose enablement status in a specified standard couldn't be updated.
   *       </p>
   */
  UnprocessedAssociationUpdates?: UnprocessedStandardsControlAssociationUpdate[];
}

/**
 * @public
 * @enum
 */
export const ControlFindingGenerator = {
  SECURITY_CONTROL: "SECURITY_CONTROL",
  STANDARD_CONTROL: "STANDARD_CONTROL",
} as const;

/**
 * @public
 */
export type ControlFindingGenerator = (typeof ControlFindingGenerator)[keyof typeof ControlFindingGenerator];

/**
 * @public
 */
export interface CreateActionTargetRequest {
  /**
   * @public
   * <p>The name of the custom action target. Can contain up to 20 characters.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description for the custom action target.</p>
   */
  Description: string | undefined;

  /**
   * @public
   * <p>The ID for the custom action target. Can contain up to 20 alphanumeric characters.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface CreateActionTargetResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the custom action target.</p>
   */
  ActionTargetArn: string | undefined;
}

/**
 * @public
 * <p>The resource specified in the request conflicts with an existing resource.</p>
 */
export class ResourceConflictException extends __BaseException {
  readonly name: "ResourceConflictException" = "ResourceConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceConflictException, __BaseException>) {
    super({
      name: "ResourceConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceConflictException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 */
export interface CreateAutomationRuleRequest {
  /**
   * @public
   * <p>
   *             User-defined tags that help you label the purpose of a rule.
   *         </p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>
   *          Whether the rule is active after it is created. If
   *          this parameter is equal to <code>ENABLED</code>, Security Hub starts applying the rule to findings
   *          and finding updates after the rule is created. To change the value of this
   *          parameter after creating a rule, use <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateAutomationRules.html">
   *                <code>BatchUpdateAutomationRules</code>
   *             </a>.
   *       </p>
   */
  RuleStatus?: RuleStatus;

  /**
   * @public
   * <p>An integer ranging from 1 to 1000 that represents the order in which the rule action is
   *          applied to findings. Security Hub applies rules with lower values for this parameter
   *          first. </p>
   */
  RuleOrder: number | undefined;

  /**
   * @public
   * <p>
   *          The name of the rule.
   *       </p>
   */
  RuleName: string | undefined;

  /**
   * @public
   * <p>
   *          A description of the rule.
   *       </p>
   */
  Description: string | undefined;

  /**
   * @public
   * <p>Specifies whether a rule is the last to be applied with respect to a finding that matches the rule criteria. This is useful when a finding
   *             matches the criteria for multiple rules, and each rule has different actions. If a rule is terminal, Security Hub applies the rule action to a finding that matches
   *             the rule criteria and doesn't evaluate other rules for the finding. By default, a rule isn't terminal.
   *         </p>
   */
  IsTerminal?: boolean;

  /**
   * @public
   * <p>
   *          A set of ASFF finding field attributes and corresponding expected values that
   *          Security Hub uses to filter findings. If a rule is enabled and a finding matches the conditions specified in
   *          this parameter, Security Hub applies the rule action to the finding.
   *       </p>
   */
  Criteria: AutomationRulesFindingFilters | undefined;

  /**
   * @public
   * <p>
   *          One or more actions to update finding fields if a finding matches the conditions
   *          specified in <code>Criteria</code>.
   *       </p>
   */
  Actions: AutomationRulesAction[] | undefined;
}

/**
 * @public
 */
export interface CreateAutomationRuleResponse {
  /**
   * @public
   * <p>
   *          The Amazon Resource Name (ARN) of the automation rule that you created.
   *       </p>
   */
  RuleArn?: string;
}

/**
 * @public
 */
export interface CreateFindingAggregatorRequest {
  /**
   * @public
   * <p>Indicates whether to aggregate findings from all of the available Regions in the current partition. Also determines whether to automatically aggregate findings from new Regions as Security Hub supports them and you opt into them.</p>
   *          <p>The selected option also determines how to use the Regions provided in the Regions list.</p>
   *          <p>The options are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_REGIONS</code> - Indicates to aggregate findings from all of the Regions where Security Hub is enabled. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL_REGIONS_EXCEPT_SPECIFIED</code> - Indicates to aggregate findings from all of the Regions where Security Hub is enabled, except for the Regions listed in the <code>Regions</code> parameter. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SPECIFIED_REGIONS</code> - Indicates to aggregate findings only from the Regions listed in the <code>Regions</code> parameter. Security Hub does not automatically aggregate findings from new Regions.
   *          </p>
   *             </li>
   *          </ul>
   */
  RegionLinkingMode: string | undefined;

  /**
   * @public
   * <p>If <code>RegionLinkingMode</code> is <code>ALL_REGIONS_EXCEPT_SPECIFIED</code>, then this is a space-separated list of Regions that do not aggregate findings to the aggregation Region.</p>
   *          <p>If <code>RegionLinkingMode</code> is <code>SPECIFIED_REGIONS</code>, then this is a space-separated list of Regions that do aggregate findings to the aggregation Region.
   *       </p>
   */
  Regions?: string[];
}

/**
 * @public
 */
export interface CreateFindingAggregatorResponse {
  /**
   * @public
   * <p>The ARN of the finding aggregator. You use the finding aggregator ARN to retrieve details for, update, and stop finding aggregation.</p>
   */
  FindingAggregatorArn?: string;

  /**
   * @public
   * <p>The aggregation Region.</p>
   */
  FindingAggregationRegion?: string;

  /**
   * @public
   * <p>Indicates whether to link all Regions, all Regions except for a list of excluded Regions, or a list of included Regions.</p>
   */
  RegionLinkingMode?: string;

  /**
   * @public
   * <p>The list of excluded Regions or included Regions.</p>
   */
  Regions?: string[];
}

/**
 * @public
 */
export interface CreateInsightRequest {
  /**
   * @public
   * <p>The name of the custom insight to create.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>One or more attributes used to filter the findings included in the insight. The insight
   *          only includes findings that match the criteria defined in the filters.</p>
   */
  Filters: AwsSecurityFindingFilters | undefined;

  /**
   * @public
   * <p>The attribute used to group the findings for the insight. The grouping attribute
   *          identifies the type of item that the insight applies to. For example, if an insight is
   *          grouped by resource identifier, then the insight produces a list of resource
   *          identifiers.</p>
   */
  GroupByAttribute: string | undefined;
}

/**
 * @public
 */
export interface CreateInsightResponse {
  /**
   * @public
   * <p>The ARN of the insight created.</p>
   */
  InsightArn: string | undefined;
}

/**
 * @public
 */
export interface CreateMembersRequest {
  /**
   * @public
   * <p>The list of accounts to associate with the Security Hub administrator account. For each account, the
   *          list includes the account ID and optionally the email address.</p>
   */
  AccountDetails: AccountDetails[] | undefined;
}

/**
 * @public
 * <p>Details about the account that was not processed.</p>
 */
export interface Result {
  /**
   * @public
   * <p>An Amazon Web Services account ID of the account that was not processed.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The reason that the account was not processed.</p>
   */
  ProcessingResult?: string;
}

/**
 * @public
 */
export interface CreateMembersResponse {
  /**
   * @public
   * <p>The list of Amazon Web Services accounts that were not processed. For each account, the list includes
   *          the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

/**
 * @public
 */
export interface DeclineInvitationsRequest {
  /**
   * @public
   * <p>The list of prospective member account IDs for which to decline an invitation.</p>
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeclineInvitationsResponse {
  /**
   * @public
   * <p>The list of Amazon Web Services accounts that were not processed. For each account, the list includes
   *          the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

/**
 * @public
 */
export interface DeleteActionTargetRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the custom action target to delete.</p>
   */
  ActionTargetArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteActionTargetResponse {
  /**
   * @public
   * <p>The ARN of the custom action target that was deleted.</p>
   */
  ActionTargetArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteFindingAggregatorRequest {
  /**
   * @public
   * <p>The ARN of the finding aggregator to delete. To obtain the ARN, use <code>ListFindingAggregators</code>.</p>
   */
  FindingAggregatorArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteFindingAggregatorResponse {}

/**
 * @public
 */
export interface DeleteInsightRequest {
  /**
   * @public
   * <p>The ARN of the insight to delete.</p>
   */
  InsightArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteInsightResponse {
  /**
   * @public
   * <p>The ARN of the insight that was deleted.</p>
   */
  InsightArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteInvitationsRequest {
  /**
   * @public
   * <p>The list of member account IDs that received the invitations you want to delete.</p>
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteInvitationsResponse {
  /**
   * @public
   * <p>The list of Amazon Web Services accounts for which the invitations were not deleted. For each account,
   *          the list includes the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

/**
 * @public
 */
export interface DeleteMembersRequest {
  /**
   * @public
   * <p>The list of account IDs for the member accounts to delete.</p>
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteMembersResponse {
  /**
   * @public
   * <p>The list of Amazon Web Services accounts that were not deleted. For each account, the list includes the
   *          account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

/**
 * @public
 */
export interface DescribeActionTargetsRequest {
  /**
   * @public
   * <p>A list of custom action target ARNs for the custom action targets to retrieve.</p>
   */
  ActionTargetArns?: string[];

  /**
   * @public
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeActionTargets</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeActionTargetsResponse {
  /**
   * @public
   * <p>A list of <code>ActionTarget</code> objects. Each object includes the <code>ActionTargetArn</code>,
   *             <code>Description</code>, and <code>Name</code> of a custom action target available in
   *          Security Hub.</p>
   */
  ActionTargets: ActionTarget[] | undefined;

  /**
   * @public
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeHubRequest {
  /**
   * @public
   * <p>The ARN of the Hub resource to retrieve.</p>
   */
  HubArn?: string;
}

/**
 * @public
 */
export interface DescribeHubResponse {
  /**
   * @public
   * <p>The ARN of the Hub resource that was retrieved.</p>
   */
  HubArn?: string;

  /**
   * @public
   * <p>The date and time when Security Hub was enabled in the account.</p>
   */
  SubscribedAt?: string;

  /**
   * @public
   * <p>Whether to automatically enable new controls when they are added to standards that are
   *          enabled.</p>
   *          <p>If set to <code>true</code>, then new controls for enabled standards are enabled
   *          automatically. If set to <code>false</code>, then new controls are not enabled.</p>
   */
  AutoEnableControls?: boolean;

  /**
   * @public
   * <p>Specifies whether the calling account has consolidated control findings turned on. If the value for this field is set to
   *          <code>SECURITY_CONTROL</code>, Security Hub generates a single finding for a control check even when the check
   *          applies to multiple enabled standards.</p>
   *          <p>If the value for this field is set to <code>STANDARD_CONTROL</code>, Security Hub generates separate findings
   *          for a control check when the check applies to multiple enabled standards.</p>
   *          <p>The value for this field in a member account matches the value in the administrator
   *          account. For accounts that aren't part of an organization, the default value of this field
   *          is <code>SECURITY_CONTROL</code> if you enabled Security Hub on or after February 23,
   *          2023.</p>
   */
  ControlFindingGenerator?: ControlFindingGenerator;
}

/**
 * @public
 */
export interface DescribeOrganizationConfigurationRequest {}

/**
 * @public
 */
export interface DescribeOrganizationConfigurationResponse {
  /**
   * @public
   * <p>Whether to automatically enable Security Hub for new accounts in the organization.</p>
   *          <p>If set to <code>true</code>, then Security Hub is enabled for new accounts. If set to false,
   *          then new accounts are not added automatically.</p>
   */
  AutoEnable?: boolean;

  /**
   * @public
   * <p>Whether the maximum number of allowed member accounts are already associated with the
   *          Security Hub administrator account.</p>
   */
  MemberAccountLimitReached?: boolean;

  /**
   * @public
   * <p>Whether to automatically enable Security Hub <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-enable-disable.html">default standards</a>
   *          for new member accounts in the organization.</p>
   *          <p>The default value of this parameter is equal to <code>DEFAULT</code>.</p>
   *          <p>If equal to <code>DEFAULT</code>, then Security Hub default standards are automatically enabled for new member
   *          accounts. If equal to <code>NONE</code>, then default standards are not automatically enabled for new member
   *          accounts.</p>
   */
  AutoEnableStandards?: AutoEnableStandards;
}

/**
 * @public
 */
export interface DescribeProductsRequest {
  /**
   * @public
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeProducts</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The ARN of the integration to return.</p>
   */
  ProductArn?: string;
}

/**
 * @public
 * @enum
 */
export const IntegrationType = {
  RECEIVE_FINDINGS_FROM_SECURITY_HUB: "RECEIVE_FINDINGS_FROM_SECURITY_HUB",
  SEND_FINDINGS_TO_SECURITY_HUB: "SEND_FINDINGS_TO_SECURITY_HUB",
  UPDATE_FINDINGS_IN_SECURITY_HUB: "UPDATE_FINDINGS_IN_SECURITY_HUB",
} as const;

/**
 * @public
 */
export type IntegrationType = (typeof IntegrationType)[keyof typeof IntegrationType];

/**
 * @public
 * <p>Contains details about a product.</p>
 */
export interface Product {
  /**
   * @public
   * <p>The ARN assigned to the product.</p>
   */
  ProductArn: string | undefined;

  /**
   * @public
   * <p>The name of the product.</p>
   */
  ProductName?: string;

  /**
   * @public
   * <p>The name of the company that provides the product.</p>
   */
  CompanyName?: string;

  /**
   * @public
   * <p>A description of the product.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The categories assigned to the product.</p>
   */
  Categories?: string[];

  /**
   * @public
   * <p>The types of integration that the product supports. Available values are the
   *          following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SEND_FINDINGS_TO_SECURITY_HUB</code> - The integration sends
   *                findings to Security Hub.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RECEIVE_FINDINGS_FROM_SECURITY_HUB</code> - The integration
   *                receives findings from Security Hub.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FINDINGS_IN_SECURITY_HUB</code> - The integration does not send new findings to Security Hub, but does make updates to the findings that it receives from Security Hub.</p>
   *             </li>
   *          </ul>
   */
  IntegrationTypes?: IntegrationType[];

  /**
   * @public
   * <p>For integrations with Amazon Web Services services, the Amazon Web Services Console URL from which to activate the service.</p>
   *          <p>For integrations with third-party products, the Amazon Web Services Marketplace URL from which to subscribe to or purchase the product.</p>
   */
  MarketplaceUrl?: string;

  /**
   * @public
   * <p>The URL to the service or product documentation about the integration with Security Hub, including how to activate the integration.</p>
   */
  ActivationUrl?: string;

  /**
   * @public
   * <p>The resource policy associated with the product.</p>
   */
  ProductSubscriptionResourcePolicy?: string;
}

/**
 * @public
 */
export interface DescribeProductsResponse {
  /**
   * @public
   * <p>A list of products, including details for each product.</p>
   */
  Products: Product[] | undefined;

  /**
   * @public
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeStandardsRequest {
  /**
   * @public
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeStandards</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of standards to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Provides details about the management of a security standard.</p>
 */
export interface StandardsManagedBy {
  /**
   * @public
   * <p>An identifier for the company that manages a specific security standard. For existing
   *          standards, the value is equal to <code>Amazon Web Services</code>.</p>
   */
  Company?: string;

  /**
   * @public
   * <p>An identifier for the product that manages a specific security standard. For existing
   *          standards, the value is equal to the Amazon Web Services service that manages the
   *          standard.</p>
   */
  Product?: string;
}

/**
 * @public
 * <p>Provides information about a specific security standard.</p>
 */
export interface Standard {
  /**
   * @public
   * <p>The ARN of a standard.</p>
   */
  StandardsArn?: string;

  /**
   * @public
   * <p>The name of the standard.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A description of the standard.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Whether the standard is enabled by default. When Security Hub is enabled from the console, if a
   *          standard is enabled by default, the check box for that standard is selected by
   *          default.</p>
   *          <p>When Security Hub is enabled using the <code>EnableSecurityHub</code> API operation, the
   *          standard is enabled by default unless <code>EnableDefaultStandards</code> is set to
   *             <code>false</code>.</p>
   */
  EnabledByDefault?: boolean;

  /**
   * @public
   * <p>Provides details about the management of a standard.
   *       </p>
   */
  StandardsManagedBy?: StandardsManagedBy;
}

/**
 * @public
 */
export interface DescribeStandardsResponse {
  /**
   * @public
   * <p>A list of available standards.</p>
   */
  Standards?: Standard[];

  /**
   * @public
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeStandardsControlsRequest {
  /**
   * @public
   * <p>The ARN of a resource that represents your subscription to a supported standard. To get
   *          the subscription ARNs of the standards you have enabled, use the <code>GetEnabledStandards</code> operation.</p>
   */
  StandardsSubscriptionArn: string | undefined;

  /**
   * @public
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeStandardsControls</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of security standard controls to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Details for an individual security standard control.</p>
 */
export interface StandardsControl {
  /**
   * @public
   * <p>The ARN of the security standard control.</p>
   */
  StandardsControlArn?: string;

  /**
   * @public
   * <p>The current status of the security standard control. Indicates whether the control is
   *          enabled or disabled. Security Hub does not check against disabled controls.</p>
   */
  ControlStatus?: ControlStatus;

  /**
   * @public
   * <p>The reason provided for the most recent change in status for the control.</p>
   */
  DisabledReason?: string;

  /**
   * @public
   * <p>The date and time that the status of the security standard control was most recently
   *          updated.</p>
   */
  ControlStatusUpdatedAt?: Date;

  /**
   * @public
   * <p>The identifier of the security standard control.</p>
   */
  ControlId?: string;

  /**
   * @public
   * <p>The title of the security standard control.</p>
   */
  Title?: string;

  /**
   * @public
   * <p>The longer description of the security standard control. Provides information about what
   *          the control is checking for.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A link to remediation information for the control in the Security Hub user
   *          documentation.</p>
   */
  RemediationUrl?: string;

  /**
   * @public
   * <p>The severity of findings generated from this security standard control.</p>
   *          <p>The finding severity is based on an assessment of how easy it would be to compromise Amazon Web Services
   *          resources if the issue is detected.</p>
   */
  SeverityRating?: SeverityRating;

  /**
   * @public
   * <p>The list of requirements that are related to this control.</p>
   */
  RelatedRequirements?: string[];
}

/**
 * @public
 */
export interface DescribeStandardsControlsResponse {
  /**
   * @public
   * <p>A list of security standards controls.</p>
   */
  Controls?: StandardsControl[];

  /**
   * @public
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DisableImportFindingsForProductRequest {
  /**
   * @public
   * <p>The ARN of the integrated product to disable the integration for.</p>
   */
  ProductSubscriptionArn: string | undefined;
}

/**
 * @public
 */
export interface DisableImportFindingsForProductResponse {}

/**
 * @public
 */
export interface DisableOrganizationAdminAccountRequest {
  /**
   * @public
   * <p>The Amazon Web Services account identifier of the Security Hub administrator account.</p>
   */
  AdminAccountId: string | undefined;
}

/**
 * @public
 */
export interface DisableOrganizationAdminAccountResponse {}

/**
 * @public
 */
export interface DisableSecurityHubRequest {}

/**
 * @public
 */
export interface DisableSecurityHubResponse {}

/**
 * @public
 */
export interface DisassociateFromAdministratorAccountRequest {}

/**
 * @public
 */
export interface DisassociateFromAdministratorAccountResponse {}

/**
 * @public
 */
export interface DisassociateFromMasterAccountRequest {}

/**
 * @public
 */
export interface DisassociateFromMasterAccountResponse {}

/**
 * @public
 */
export interface DisassociateMembersRequest {
  /**
   * @public
   * <p>The account IDs of the member accounts to disassociate from the administrator account.</p>
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateMembersResponse {}

/**
 * @public
 */
export interface EnableImportFindingsForProductRequest {
  /**
   * @public
   * <p>The ARN of the product to enable the integration for.</p>
   */
  ProductArn: string | undefined;
}

/**
 * @public
 */
export interface EnableImportFindingsForProductResponse {
  /**
   * @public
   * <p>The ARN of your subscription to the product to enable integrations for.</p>
   */
  ProductSubscriptionArn?: string;
}

/**
 * @public
 */
export interface EnableOrganizationAdminAccountRequest {
  /**
   * @public
   * <p>The Amazon Web Services account identifier of the account to designate as the Security Hub administrator
   *          account.</p>
   */
  AdminAccountId: string | undefined;
}

/**
 * @public
 */
export interface EnableOrganizationAdminAccountResponse {}

/**
 * @public
 */
export interface EnableSecurityHubRequest {
  /**
   * @public
   * <p>The tags to add to the hub resource when you enable Security Hub.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>Whether to enable the security standards that Security Hub has designated as automatically
   *          enabled. If you do not provide a value for <code>EnableDefaultStandards</code>, it is set
   *          to <code>true</code>. To not enable the automatically enabled standards, set
   *             <code>EnableDefaultStandards</code> to <code>false</code>.</p>
   */
  EnableDefaultStandards?: boolean;

  /**
   * @public
   * <p>This field, used when enabling Security Hub, specifies whether the calling account has consolidated control findings turned on.
   *       If the value for this field is set to
   *       <code>SECURITY_CONTROL</code>, Security Hub generates a single finding for a control check even when the check
   *       applies to multiple enabled standards.</p>
   *          <p>If the value for this field is set to <code>STANDARD_CONTROL</code>, Security Hub generates separate findings
   *       for a control check when the check applies to multiple enabled standards.</p>
   *          <p>The value for this field in a member account matches the value in the administrator
   *          account. For accounts that aren't part of an organization, the default value of this field
   *          is <code>SECURITY_CONTROL</code> if you enabled Security Hub on or after February 23,
   *          2023.</p>
   */
  ControlFindingGenerator?: ControlFindingGenerator;
}

/**
 * @public
 */
export interface EnableSecurityHubResponse {}

/**
 * @public
 * <p>A finding aggregator. A finding aggregator contains the configuration for finding aggregation.</p>
 */
export interface FindingAggregator {
  /**
   * @public
   * <p>The ARN of the finding aggregator. You use the finding aggregator ARN to retrieve details for, update, and delete the finding aggregator.</p>
   */
  FindingAggregatorArn?: string;
}

/**
 * @public
 * <p> An array of objects that provides details about a change to a finding, including the
 *                 Amazon Web Services Security Finding Format (ASFF) field that changed, the value of
 *             the field before the change, and the value of the field after the change. </p>
 */
export interface FindingHistoryUpdate {
  /**
   * @public
   * <p>
   *          The ASFF field that changed during the finding change event.
   *       </p>
   */
  UpdatedField?: string;

  /**
   * @public
   * <p>
   *          The value of the ASFF field before the finding change event.
   *       </p>
   */
  OldValue?: string;

  /**
   * @public
   * <p>
   *          The value of the ASFF field after the finding change event. To preserve storage and readability, Security Hub omits this value
   *           if <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_FindingHistoryRecord.html">
   *                <code>FindingHistoryRecord</code>
   *             </a> exceeds database limits.
   *       </p>
   */
  NewValue?: string;
}

/**
 * @public
 * @enum
 */
export const FindingHistoryUpdateSourceType = {
  BATCH_IMPORT_FINDINGS: "BATCH_IMPORT_FINDINGS",
  BATCH_UPDATE_FINDINGS: "BATCH_UPDATE_FINDINGS",
} as const;

/**
 * @public
 */
export type FindingHistoryUpdateSourceType =
  (typeof FindingHistoryUpdateSourceType)[keyof typeof FindingHistoryUpdateSourceType];

/**
 * @public
 * <p>
 *          Identifies the source of the finding change event.
 *       </p>
 */
export interface FindingHistoryUpdateSource {
  /**
   * @public
   * <p>
   *          Describes the type of finding change event, such as a call to <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchImportFindings.html">
   *                <code>BatchImportFindings</code>
   *             </a> (by an integrated Amazon Web Service or third party partner integration) or <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateFindings.html">
   *                <code>BatchUpdateFindings</code>
   *             </a> (by a Security Hub customer).
   *       </p>
   */
  Type?: FindingHistoryUpdateSourceType;

  /**
   * @public
   * <p>
   *          The identity of the source that initiated the finding change event. For example, the Amazon Resource Name (ARN) of a partner that calls BatchImportFindings or of a customer that calls BatchUpdateFindings.
   *       </p>
   */
  Identity?: string;
}

/**
 * @public
 * <p>
 *          A list of events that changed the specified finding during the specified time period. Each record represents a single
 *          finding change event.
 *       </p>
 */
export interface FindingHistoryRecord {
  /**
   * @public
   * <p>Identifies which finding to get the finding history for.</p>
   */
  FindingIdentifier?: AwsSecurityFindingIdentifier;

  /**
   * @public
   * <p> An ISO 8601-formatted timestamp that indicates when Security Hub
   *             processed the updated finding record.</p>
   *          <p>A correctly formatted example is
   *                 <code>2020-05-21T20:16:34.724Z</code>. The value cannot contain spaces, and date and
   *             time should be separated by <code>T</code>. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339 section 5.6,
   *                 Internet Date/Time Format</a>. </p>
   */
  UpdateTime?: Date;

  /**
   * @public
   * <p>
   *          Identifies whether the event marks the creation of a new finding. A value of <code>True</code> means that the finding is
   *          newly created. A value of <code>False</code> means that the finding isn’t newly created.
   *       </p>
   */
  FindingCreated?: boolean;

  /**
   * @public
   * <p> Identifies the source of the event that changed the finding. For example, an integrated
   *                 Amazon Web Service or third-party partner integration may call <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchImportFindings.html">
   *                <code>BatchImportFindings</code>
   *             </a>, or an Security Hub customer
   *             may call <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateFindings.html">
   *                <code>BatchUpdateFindings</code>
   *             </a>. </p>
   */
  UpdateSource?: FindingHistoryUpdateSource;

  /**
   * @public
   * <p>
   *          An array of objects that provides details about the finding change event, including the Amazon Web Services Security
   *          Finding Format (ASFF) field that changed, the value of the field before the change, and the value of the field after
   *          the change.
   *       </p>
   */
  Updates?: FindingHistoryUpdate[];

  /**
   * @public
   * <p>
   *          A token for pagination purposes. Provide this token in the subsequent request to <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetFindingsHistory.html">
   *                <code>GetFindingsHistory</code>
   *             </a> to get
   *          up to an additional 100 results of history for the same finding that you specified in your initial request.
   *       </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetAdministratorAccountRequest {}

/**
 * @public
 * <p>Details about an invitation.</p>
 */
export interface Invitation {
  /**
   * @public
   * <p>The account ID of the Security Hub administrator account that the invitation was sent from.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The ID of the invitation sent to the member account.</p>
   */
  InvitationId?: string;

  /**
   * @public
   * <p>The timestamp of when the invitation was sent.</p>
   */
  InvitedAt?: Date;

  /**
   * @public
   * <p>The current status of the association between the member and administrator accounts.</p>
   */
  MemberStatus?: string;
}

/**
 * @public
 */
export interface GetAdministratorAccountResponse {
  /**
   * @public
   * <p>Details about an invitation.</p>
   */
  Administrator?: Invitation;
}

/**
 * @public
 */
export interface GetEnabledStandardsRequest {
  /**
   * @public
   * <p>The list of the standards subscription ARNs for the standards to retrieve.</p>
   */
  StandardsSubscriptionArns?: string[];

  /**
   * @public
   * <p>The token that is required for pagination. On your first call to the
   *             <code>GetEnabledStandards</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in the response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetEnabledStandardsResponse {
  /**
   * @public
   * <p>The list of <code>StandardsSubscriptions</code> objects that include information about
   *          the enabled standards.</p>
   */
  StandardsSubscriptions?: StandardsSubscription[];

  /**
   * @public
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetFindingAggregatorRequest {
  /**
   * @public
   * <p>The ARN of the finding aggregator to return details for. To obtain the ARN, use <code>ListFindingAggregators</code>.</p>
   */
  FindingAggregatorArn: string | undefined;
}

/**
 * @public
 */
export interface GetFindingAggregatorResponse {
  /**
   * @public
   * <p>The ARN of the finding aggregator.</p>
   */
  FindingAggregatorArn?: string;

  /**
   * @public
   * <p>The aggregation Region.</p>
   */
  FindingAggregationRegion?: string;

  /**
   * @public
   * <p>Indicates whether to link all Regions, all Regions except for a list of excluded Regions, or a list of included Regions.</p>
   */
  RegionLinkingMode?: string;

  /**
   * @public
   * <p>The list of excluded Regions or included Regions.</p>
   */
  Regions?: string[];
}

/**
 * @public
 */
export interface GetFindingHistoryRequest {
  /**
   * @public
   * <p>Identifies which finding to get the finding history for.</p>
   */
  FindingIdentifier: AwsSecurityFindingIdentifier | undefined;

  /**
   * @public
   * <p>
   *          An ISO 8601-formatted timestamp that indicates the start time of the requested finding history. A correctly formatted
   *          example is <code>2020-05-21T20:16:34.724Z</code>. The value cannot contain spaces, and date and time should be separated
   *          by <code>T</code>. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339
   *             section 5.6, Internet Date/Time Format</a>.</p>
   *          <p>If you provide values for both <code>StartTime</code> and <code>EndTime</code>,
   *                 Security Hub returns finding history for the specified time period. If you
   *             provide a value for <code>StartTime</code> but not for <code>EndTime</code>, Security Hub returns finding history from the <code>StartTime</code> to the time at
   *             which the API is called. If you provide a value for <code>EndTime</code> but not for
   *                 <code>StartTime</code>, Security Hub returns finding history from the <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_AwsSecurityFindingFilters.html#securityhub-Type-AwsSecurityFindingFilters-CreatedAt">CreatedAt</a> timestamp of the finding to the <code>EndTime</code>. If you
   *             provide neither <code>StartTime</code> nor <code>EndTime</code>, Security Hub
   *             returns finding history from the CreatedAt timestamp of the finding to the time at which
   *             the API is called. In all of these scenarios, the response is limited to 100 results, and the maximum time period is
   *             limited to 90 days. </p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>
   *          An ISO 8601-formatted timestamp that indicates the end time of the requested finding history. A correctly formatted
   *          example is <code>2020-05-21T20:16:34.724Z</code>. The value cannot contain spaces, and date and time should be separated
   *          by <code>T</code>. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339
   *             section 5.6, Internet Date/Time Format</a>.</p>
   *          <p>If you provide values for both <code>StartTime</code> and <code>EndTime</code>,
   *                 Security Hub returns finding history for the specified time period. If you
   *             provide a value for <code>StartTime</code> but not for <code>EndTime</code>, Security Hub returns finding history from the <code>StartTime</code> to the time at
   *             which the API is called. If you provide a value for <code>EndTime</code> but not for
   *                 <code>StartTime</code>, Security Hub returns finding history from the <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_AwsSecurityFindingFilters.html#securityhub-Type-AwsSecurityFindingFilters-CreatedAt">CreatedAt</a> timestamp of the finding to the <code>EndTime</code>. If you
   *             provide neither <code>StartTime</code> nor <code>EndTime</code>, Security Hub
   *             returns finding history from the CreatedAt timestamp of the finding to the time at which
   *             the API is called. In all of these scenarios, the response is limited to 100 results, and the maximum time period is
   *             limited to 90 days.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>
   *          A token for pagination purposes. Provide <code>NULL</code> as the initial value. In subsequent requests, provide the
   *          token included in the response to get up to an additional 100 results of finding history. If you don’t provide
   *          <code>NextToken</code>, Security Hub returns up to 100 results of finding history for each request.
   *       </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>
   *          The maximum number of results to be returned. If you don’t provide it, Security Hub returns up to 100 results of finding history.
   *       </p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetFindingHistoryResponse {
  /**
   * @public
   * <p>
   *          A list of events that altered the specified finding during the specified time period.
   *       </p>
   */
  Records?: FindingHistoryRecord[];

  /**
   * @public
   * <p>
   *          A token for pagination purposes. Provide this token in the subsequent request to <code>GetFindingsHistory</code> to
   *          get up to an additional 100 results of history for the same finding that you specified in your initial request.
   *       </p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "asc",
  DESCENDING: "desc",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * <p>A collection of finding attributes used to sort findings.</p>
 */
export interface SortCriterion {
  /**
   * @public
   * <p>The finding attribute used to sort findings.</p>
   */
  Field?: string;

  /**
   * @public
   * <p>The order used to sort findings.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 */
export interface GetFindingsRequest {
  /**
   * @public
   * <p>The finding attributes used to define a condition to filter the returned
   *          findings.</p>
   *          <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to
   *          20 filter values.</p>
   *          <p>Note that in the available filter fields, <code>WorkflowState</code> is deprecated. To
   *          search for a finding based on its workflow status, use <code>WorkflowStatus</code>.</p>
   */
  Filters?: AwsSecurityFindingFilters;

  /**
   * @public
   * <p>The finding attributes used to sort the list of returned findings.</p>
   */
  SortCriteria?: SortCriterion[];

  /**
   * @public
   * <p>The token that is required for pagination. On your first call to the
   *             <code>GetFindings</code> operation, set the value of this parameter to
   *          <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of findings to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetFindingsResponse {
  /**
   * @public
   * <p>The findings that matched the filters specified in the request.</p>
   */
  Findings: AwsSecurityFinding[] | undefined;

  /**
   * @public
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetInsightResultsRequest {
  /**
   * @public
   * <p>The ARN of the insight for which to return results.</p>
   */
  InsightArn: string | undefined;
}

/**
 * @public
 * <p>The insight result values returned by the <code>GetInsightResults</code>
 *          operation.</p>
 */
export interface InsightResultValue {
  /**
   * @public
   * <p>The value of the attribute that the findings are grouped by for the insight whose
   *          results are returned by the <code>GetInsightResults</code> operation.</p>
   */
  GroupByAttributeValue: string | undefined;

  /**
   * @public
   * <p>The number of findings returned for each <code>GroupByAttributeValue</code>.</p>
   */
  Count: number | undefined;
}

/**
 * @public
 * <p>The insight results returned by the <code>GetInsightResults</code> operation.</p>
 */
export interface InsightResults {
  /**
   * @public
   * <p>The ARN of the insight whose results are returned by the <code>GetInsightResults</code>
   *          operation.</p>
   */
  InsightArn: string | undefined;

  /**
   * @public
   * <p>The attribute that the findings are grouped by for the insight whose results are
   *          returned by the <code>GetInsightResults</code> operation.</p>
   */
  GroupByAttribute: string | undefined;

  /**
   * @public
   * <p>The list of insight result values returned by the <code>GetInsightResults</code>
   *          operation.</p>
   */
  ResultValues: InsightResultValue[] | undefined;
}

/**
 * @public
 */
export interface GetInsightResultsResponse {
  /**
   * @public
   * <p>The insight results returned by the operation.</p>
   */
  InsightResults: InsightResults | undefined;
}

/**
 * @public
 */
export interface GetInsightsRequest {
  /**
   * @public
   * <p>The ARNs of the insights to describe. If you do not provide any insight ARNs, then
   *             <code>GetInsights</code> returns all of your custom insights. It does not return any
   *          managed insights.</p>
   */
  InsightArns?: string[];

  /**
   * @public
   * <p>The token that is required for pagination. On your first call to the
   *             <code>GetInsights</code> operation, set the value of this parameter to
   *          <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return in the response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains information about a Security Hub insight.</p>
 */
export interface Insight {
  /**
   * @public
   * <p>The ARN of a Security Hub insight.</p>
   */
  InsightArn: string | undefined;

  /**
   * @public
   * <p>The name of a Security Hub insight.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>One or more attributes used to filter the findings included in the insight. The insight
   *          only includes findings that match the criteria defined in the filters.</p>
   */
  Filters: AwsSecurityFindingFilters | undefined;

  /**
   * @public
   * <p>The grouping attribute for the insight's findings. Indicates how to group the matching
   *          findings, and identifies the type of item that the insight applies to. For example, if an
   *          insight is grouped by resource identifier, then the insight produces a list of resource
   *          identifiers.</p>
   */
  GroupByAttribute: string | undefined;
}

/**
 * @public
 */
export interface GetInsightsResponse {
  /**
   * @public
   * <p>The insights returned by the operation.</p>
   */
  Insights: Insight[] | undefined;

  /**
   * @public
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetInvitationsCountRequest {}

/**
 * @public
 */
export interface GetInvitationsCountResponse {
  /**
   * @public
   * <p>The number of all membership invitations sent to this Security Hub member account, not
   *          including the currently accepted invitation.</p>
   */
  InvitationsCount?: number;
}

/**
 * @public
 */
export interface GetMasterAccountRequest {}

/**
 * @public
 */
export interface GetMasterAccountResponse {
  /**
   * @public
   * <p>A list of details about the Security Hub administrator account for the current member account.
   *       </p>
   */
  Master?: Invitation;
}

/**
 * @public
 */
export interface GetMembersRequest {
  /**
   * @public
   * <p>The list of account IDs for the Security Hub member accounts to return the details for. </p>
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 * <p>The details about a member account.</p>
 */
export interface Member {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the member account.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The email address of the member account.</p>
   */
  Email?: string;

  /**
   * @public
   * @deprecated
   *
   * <p>This is replaced by <code>AdministratorID</code>.</p>
   *          <p>The Amazon Web Services account ID of the Security Hub administrator account associated with this member account.</p>
   */
  MasterId?: string;

  /**
   * @public
   * <p>The Amazon Web Services account ID of the Security Hub administrator account associated with this member account.</p>
   */
  AdministratorId?: string;

  /**
   * @public
   * <p>The status of the relationship between the member account and its administrator account.
   *       </p>
   *          <p>The status can have one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Created</code> - Indicates that the administrator account added the member account,
   *                but has not yet invited the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Invited</code> - Indicates that the administrator account invited the member
   *                account. The member account has not yet responded to the invitation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Enabled</code> - Indicates that the member account is currently active. For
   *                manually invited member accounts, indicates that the member account accepted the
   *                invitation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Removed</code> - Indicates that the administrator account disassociated the member
   *                account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Resigned</code> - Indicates that the member account disassociated themselves
   *                from the administrator account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Deleted</code> - Indicates that the administrator account deleted the member
   *                account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AccountSuspended</code> - Indicates that an organization account was suspended from Amazon Web Services at the same time that the administrator account tried to enable the organization account as a member account.</p>
   *             </li>
   *          </ul>
   */
  MemberStatus?: string;

  /**
   * @public
   * <p>A timestamp for the date and time when the invitation was sent to the member
   *          account.</p>
   */
  InvitedAt?: Date;

  /**
   * @public
   * <p>The timestamp for the date and time when the member account was updated.</p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 */
export interface GetMembersResponse {
  /**
   * @public
   * <p>The list of details about the Security Hub member accounts.</p>
   */
  Members?: Member[];

  /**
   * @public
   * <p>The list of Amazon Web Services accounts that could not be processed. For each account, the list
   *          includes the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

/**
 * @public
 */
export interface InviteMembersRequest {
  /**
   * @public
   * <p>The list of account IDs of the Amazon Web Services accounts to invite to Security Hub as members. </p>
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface InviteMembersResponse {
  /**
   * @public
   * <p>The list of Amazon Web Services accounts that could not be processed. For each account, the list
   *          includes the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

/**
 * @public
 */
export interface ListAutomationRulesRequest {
  /**
   * @public
   * <p>
   *          A token to specify where to start paginating the response. This is the <code>NextToken</code>
   *          from a previously truncated response. On your first call to the <code>ListAutomationRules</code>
   *          API, set the value of this parameter to <code>NULL</code>.
   *       </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p> The maximum number of rules to return in the response. This currently ranges from 1 to
   *          100. </p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListAutomationRulesResponse {
  /**
   * @public
   * <p>
   *          Metadata for rules in the calling account. The response includes rules with a
   *          <code>RuleStatus</code> of <code>ENABLED</code> and <code>DISABLED</code>.
   *       </p>
   */
  AutomationRulesMetadata?: AutomationRulesMetadata[];

  /**
   * @public
   * <p>
   *          A pagination token for the response.
   *       </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListEnabledProductsForImportRequest {
  /**
   * @public
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListEnabledProductsForImport</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return in the response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListEnabledProductsForImportResponse {
  /**
   * @public
   * <p>The list of ARNs for the resources that represent your subscriptions to products. </p>
   */
  ProductSubscriptions?: string[];

  /**
   * @public
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFindingAggregatorsRequest {
  /**
   * @public
   * <p>The token returned with the previous set of results. Identifies the next set of results to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return. This operation currently only returns a single result.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListFindingAggregatorsResponse {
  /**
   * @public
   * <p>The list of finding aggregators. This operation currently only returns a single result.</p>
   */
  FindingAggregators?: FindingAggregator[];

  /**
   * @public
   * <p>If there are more results, this is the token to provide in the next call to <code>ListFindingAggregators</code>.</p>
   *          <p>This operation currently only returns a single result.
   *       </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListInvitationsRequest {
  /**
   * @public
   * <p>The maximum number of items to return in the response. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListInvitations</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListInvitationsResponse {
  /**
   * @public
   * <p>The details of the invitations returned by the operation.</p>
   */
  Invitations?: Invitation[];

  /**
   * @public
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListMembersRequest {
  /**
   * @public
   * <p>Specifies which member accounts to include in the response based on their relationship
   *          status with the administrator account. The default value is <code>TRUE</code>.</p>
   *          <p>If <code>OnlyAssociated</code> is set to <code>TRUE</code>, the response includes member
   *          accounts whose relationship status with the administrator account is set to <code>ENABLED</code>.</p>
   *          <p>If <code>OnlyAssociated</code> is set to <code>FALSE</code>, the response includes all
   *          existing member accounts. </p>
   */
  OnlyAssociated?: boolean;

  /**
   * @public
   * <p>The maximum number of items to return in the response. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListMembers</code> operation, set the value of this parameter to
   *          <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListMembersResponse {
  /**
   * @public
   * <p>Member details returned by the operation.</p>
   */
  Members?: Member[];

  /**
   * @public
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListOrganizationAdminAccountsRequest {
  /**
   * @public
   * <p>The maximum number of items to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListOrganizationAdminAccounts</code> operation, set the value of this parameter to
   *             <code>NULL</code>. For subsequent calls to the operation, to continue listing data, set
   *          the value of this parameter to the value returned from the previous response. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListOrganizationAdminAccountsResponse {
  /**
   * @public
   * <p>The list of Security Hub administrator accounts.</p>
   */
  AdminAccounts?: AdminAccount[];

  /**
   * @public
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSecurityControlDefinitionsRequest {
  /**
   * @public
   * <p>
   *          The Amazon Resource Name (ARN) of the standard that you want to view controls for.
   *       </p>
   */
  StandardsArn?: string;

  /**
   * @public
   * <p>
   *          Optional pagination parameter.
   *       </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p> An optional parameter that limits the total results of the API response to the
   *          specified number. If this parameter isn't provided in the request, the results include the
   *          first 25 security controls that apply to the specified standard. The results also include a
   *             <code>NextToken</code> parameter that you can use in a subsequent API call to get the
   *          next 25 controls. This repeats until all controls for the standard are returned. </p>
   */
  MaxResults?: number;
}

/**
 * @public
 * @enum
 */
export const RegionAvailabilityStatus = {
  AVAILABLE: "AVAILABLE",
  UNAVAILABLE: "UNAVAILABLE",
} as const;

/**
 * @public
 */
export type RegionAvailabilityStatus = (typeof RegionAvailabilityStatus)[keyof typeof RegionAvailabilityStatus];

/**
 * @public
 * <p>
 *          Provides metadata for a security control, including its unique standard-agnostic identifier, title, description,
 *          severity, availability in Amazon Web Services Regions, and a link to remediation steps.
 *       </p>
 */
export interface SecurityControlDefinition {
  /**
   * @public
   * <p>
   *          The unique identifier of a security control across standards. Values for this field typically consist of an
   *          Amazon Web Service name and a number (for example, APIGateway.3). This parameter differs from
   *          <code>SecurityControlArn</code>, which is a unique Amazon Resource Name (ARN) assigned to a control. The
   *          ARN references the security control ID (for example, arn:aws:securityhub:eu-central-1:123456789012:security-control/APIGateway.3).
   *       </p>
   */
  SecurityControlId: string | undefined;

  /**
   * @public
   * <p>
   *          The title of a security control.
   *       </p>
   */
  Title: string | undefined;

  /**
   * @public
   * <p> The description of a security control across standards. This typically summarizes how
   *             Security Hub evaluates the control and the conditions under which it produces a
   *          failed finding. This parameter doesn't reference a specific standard. </p>
   */
  Description: string | undefined;

  /**
   * @public
   * <p>
   *          A link to Security Hub documentation that explains how to remediate a failed finding for a security control.
   *       </p>
   */
  RemediationUrl: string | undefined;

  /**
   * @public
   * <p>
   *          The severity of a security control. For more information about how Security Hub determines control severity,
   *          see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/controls-findings-create-update.html#control-findings-severity">Assigning severity to control findings</a> in the
   *          <i>Security Hub User Guide</i>.
   *       </p>
   */
  SeverityRating: SeverityRating | undefined;

  /**
   * @public
   * <p>
   *          Specifies whether a security control is available in the current Amazon Web Services Region.
   *       </p>
   */
  CurrentRegionAvailability: RegionAvailabilityStatus | undefined;
}

/**
 * @public
 */
export interface ListSecurityControlDefinitionsResponse {
  /**
   * @public
   * <p>
   *          An array of controls that apply to the specified standard.
   *       </p>
   */
  SecurityControlDefinitions: SecurityControlDefinition[] | undefined;

  /**
   * @public
   * <p> A pagination parameter that's included in the response only if it was included in the
   *          request. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListStandardsControlAssociationsRequest {
  /**
   * @public
   * <p>
   *          The identifier of the control (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters) that you
   *          want to determine the enablement status of in each enabled standard.
   *       </p>
   */
  SecurityControlId: string | undefined;

  /**
   * @public
   * <p>
   *          Optional pagination parameter.
   *       </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p> An optional parameter that limits the total results of the API response to the
   *          specified number. If this parameter isn't provided in the request, the results include the
   *          first 25 standard and control associations. The results also include a
   *             <code>NextToken</code> parameter that you can use in a subsequent API call to get the
   *          next 25 associations. This repeats until all associations for the specified control are
   *          returned. The number of results is limited by the number of supported Security Hub
   *          standards that you've enabled in the calling account. </p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p> An array that provides the enablement status and other details for each control that
 *          applies to each enabled standard. </p>
 */
export interface StandardsControlAssociationSummary {
  /**
   * @public
   * <p>
   *          The Amazon Resource Name (ARN) of a standard.
   *       </p>
   */
  StandardsArn: string | undefined;

  /**
   * @public
   * <p>
   *          A unique standard-agnostic identifier for a control. Values for this field typically consist of an
   *          Amazon Web Service and a number, such as APIGateway.5. This field doesn't reference a specific standard.
   *       </p>
   */
  SecurityControlId: string | undefined;

  /**
   * @public
   * <p> The ARN of a control, such as
   *             <code>arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1</code>. This
   *          parameter doesn't mention a specific standard. </p>
   */
  SecurityControlArn: string | undefined;

  /**
   * @public
   * <p>
   *          The enablement status of a control in a specific standard.
   *       </p>
   */
  AssociationStatus: AssociationStatus | undefined;

  /**
   * @public
   * <p>
   *          The requirement that underlies this control in the compliance framework related to the standard.
   *       </p>
   */
  RelatedRequirements?: string[];

  /**
   * @public
   * <p> The last time that a control's enablement status in a specified standard was updated. </p>
   */
  UpdatedAt?: Date;

  /**
   * @public
   * <p> The reason for updating the control's enablement status in a specified standard. </p>
   */
  UpdatedReason?: string;

  /**
   * @public
   * <p>
   *          The title of a control.
   *       </p>
   */
  StandardsControlTitle?: string;

  /**
   * @public
   * <p>
   *          The description of a control. This typically summarizes how Security Hub evaluates the control and the
   *          conditions under which it produces a failed finding. The parameter may reference a specific standard.
   *       </p>
   */
  StandardsControlDescription?: string;
}

/**
 * @public
 */
export interface ListStandardsControlAssociationsResponse {
  /**
   * @public
   * <p> An array that provides the enablement status and other details for each security
   *          control that applies to each enabled standard. </p>
   */
  StandardsControlAssociationSummaries: StandardsControlAssociationSummary[] | undefined;

  /**
   * @public
   * <p> A pagination parameter that's included in the response only if it was included in the
   *          request. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource to retrieve tags for.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tags associated with a resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource to apply the tags to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The tags to add to the resource. You can add up to 50 tags at a time. The tag keys can be no longer than 128 characters. The tag values can be no longer than 256 characters.</p>
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource to remove the tags from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The tag keys associated with the tags to remove from the resource. You can remove up to 50 tags at a time.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateActionTargetRequest {
  /**
   * @public
   * <p>The ARN of the custom action target to update.</p>
   */
  ActionTargetArn: string | undefined;

  /**
   * @public
   * <p>The updated name of the custom action target.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The updated description for the custom action target.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateActionTargetResponse {}

/**
 * @public
 */
export interface UpdateFindingAggregatorRequest {
  /**
   * @public
   * <p>The ARN of the finding aggregator. To obtain the ARN, use <code>ListFindingAggregators</code>.</p>
   */
  FindingAggregatorArn: string | undefined;

  /**
   * @public
   * <p>Indicates whether to aggregate findings from all of the available Regions in the current partition. Also determines whether to automatically aggregate findings from new Regions as Security Hub supports them and you opt into them.</p>
   *          <p>The selected option also determines how to use the Regions provided in the Regions list.</p>
   *          <p>The options are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_REGIONS</code> - Indicates to aggregate findings from all of the Regions where Security Hub is enabled. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL_REGIONS_EXCEPT_SPECIFIED</code> - Indicates to aggregate findings from all of the Regions where Security Hub is enabled, except for the Regions listed in the <code>Regions</code> parameter. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SPECIFIED_REGIONS</code> - Indicates to aggregate findings only from the Regions listed in the <code>Regions</code> parameter. Security Hub does not automatically aggregate findings from new Regions.
   *          </p>
   *             </li>
   *          </ul>
   */
  RegionLinkingMode: string | undefined;

  /**
   * @public
   * <p>If <code>RegionLinkingMode</code> is <code>ALL_REGIONS_EXCEPT_SPECIFIED</code>, then this is a space-separated list of Regions that do not aggregate findings to the aggregation Region.</p>
   *          <p>If <code>RegionLinkingMode</code> is <code>SPECIFIED_REGIONS</code>, then this is a space-separated list of Regions that do aggregate findings to the aggregation Region.</p>
   */
  Regions?: string[];
}

/**
 * @public
 */
export interface UpdateFindingAggregatorResponse {
  /**
   * @public
   * <p>The ARN of the finding aggregator.</p>
   */
  FindingAggregatorArn?: string;

  /**
   * @public
   * <p>The aggregation Region.</p>
   */
  FindingAggregationRegion?: string;

  /**
   * @public
   * <p>Indicates whether to link all Regions, all Regions except for a list of excluded Regions, or a list of included Regions.</p>
   */
  RegionLinkingMode?: string;

  /**
   * @public
   * <p>The list of excluded Regions or included Regions.</p>
   */
  Regions?: string[];
}

/**
 * @public
 */
export interface UpdateFindingsRequest {
  /**
   * @public
   * <p>A collection of attributes that specify which findings you want to update.</p>
   */
  Filters: AwsSecurityFindingFilters | undefined;

  /**
   * @public
   * <p>The updated note for the finding.</p>
   */
  Note?: NoteUpdate;

  /**
   * @public
   * <p>The updated record state for the finding.</p>
   */
  RecordState?: RecordState;
}

/**
 * @public
 */
export interface UpdateFindingsResponse {}

/**
 * @public
 */
export interface UpdateInsightRequest {
  /**
   * @public
   * <p>The ARN of the insight that you want to update.</p>
   */
  InsightArn: string | undefined;

  /**
   * @public
   * <p>The updated name for the insight.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The updated filters that define this insight.</p>
   */
  Filters?: AwsSecurityFindingFilters;

  /**
   * @public
   * <p>The updated <code>GroupBy</code> attribute that defines this insight.</p>
   */
  GroupByAttribute?: string;
}

/**
 * @public
 */
export interface UpdateInsightResponse {}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationRequest {
  /**
   * @public
   * <p>Whether to automatically enable Security Hub for new accounts in the organization.</p>
   *          <p>By default, this is <code>false</code>, and new accounts are not added
   *          automatically.</p>
   *          <p>To automatically enable Security Hub for new accounts, set this to <code>true</code>.</p>
   */
  AutoEnable: boolean | undefined;

  /**
   * @public
   * <p>Whether to automatically enable Security Hub <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-enable-disable.html">default standards</a>
   *          for new member accounts in the organization.</p>
   *          <p>By default, this parameter is equal to <code>DEFAULT</code>, and new member accounts are automatically enabled with default Security Hub standards.</p>
   *          <p>To opt out of enabling default standards for new member accounts, set this parameter equal to <code>NONE</code>.</p>
   */
  AutoEnableStandards?: AutoEnableStandards;
}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationResponse {}

/**
 * @public
 */
export interface UpdateSecurityHubConfigurationRequest {
  /**
   * @public
   * <p>Whether to automatically enable new controls when they are added to standards that are
   *          enabled.</p>
   *          <p>By default, this is set to <code>true</code>, and new controls are enabled
   *          automatically. To not automatically enable new controls, set this to <code>false</code>.
   *       </p>
   */
  AutoEnableControls?: boolean;

  /**
   * @public
   * <p>Updates whether the calling account has consolidated control findings turned on.
   *       If the value for this field is set to
   *       <code>SECURITY_CONTROL</code>, Security Hub generates a single finding for a control check even when the check
   *       applies to multiple enabled standards.</p>
   *          <p>If the value for this field is set to <code>STANDARD_CONTROL</code>, Security Hub generates separate findings
   *       for a control check when the check applies to multiple enabled standards.</p>
   *          <p>For accounts that are part of an organization, this value can only be updated in the administrator account.</p>
   */
  ControlFindingGenerator?: ControlFindingGenerator;
}

/**
 * @public
 */
export interface UpdateSecurityHubConfigurationResponse {}

/**
 * @public
 */
export interface UpdateStandardsControlRequest {
  /**
   * @public
   * <p>The ARN of the security standard control to enable or disable.</p>
   */
  StandardsControlArn: string | undefined;

  /**
   * @public
   * <p>The updated status of the security standard control.</p>
   */
  ControlStatus?: ControlStatus;

  /**
   * @public
   * <p>A description of the reason why you are disabling a security standard control. If you
   *          are disabling a control, then this is required.</p>
   */
  DisabledReason?: string;
}

/**
 * @public
 */
export interface UpdateStandardsControlResponse {}
