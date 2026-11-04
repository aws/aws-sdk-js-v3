// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AssociationStatus,
  AssociationType,
  AutoEnableStandards,
  BatchUpdateFindingsV2UnprocessedFindingErrorCode,
  CloudProviderName,
  ConfigurationPolicyAssociationStatus,
  ConnectorAuthStatus,
  ConnectorProviderName,
  ConnectorStatus,
  ControlFindingGenerator,
  ControlStatus,
  CriticalitySourceType,
  CspmConnectorProviderName,
  CspmConnectorStatus,
  CspmEnablementStatus,
  EnablementStatus,
  ExportDataType,
  ExportFailureCode,
  ExportStatus,
  ExposureImpact,
  ExposureSeverity,
  FeatureName,
  FeatureStatus,
  FindingHistoryUpdateSourceType,
  FindingsExportFormat,
  FindingsTrendsStringField,
  GranularityField,
  HealthIssueCode,
  IntegrationType,
  IntegrationV2Type,
  OcsfBooleanField,
  OcsfDateField,
  OcsfIpField,
  OcsfMapField,
  OcsfNumberField,
  OcsfStringField,
  OrganizationConfigurationConfigurationType,
  OrganizationConfigurationStatus,
  ParameterValueType,
  Partition,
  RecordState,
  ResourcesDateField,
  ResourcesMapField,
  ResourcesNumberField,
  ResourcesStringField,
  RuleStatus,
  ScopeType,
  SecurityControlsProvider,
  SecurityHubFeature,
  SeverityLabel,
  SeverityRating,
  SortOrder,
  StandardsControlsUpdatable,
  StandardsProvider,
  StandardsStatus,
  StatusReasonCode,
  TargetType,
  ThreatIntelIndicatorCategory,
  ThreatIntelIndicatorType,
  TicketCreationMode,
  UnprocessedErrorCode,
  UpdateStatus,
  VerificationState,
  VulnerabilityExploitAvailable,
  VulnerabilityFixAvailable,
  WorkflowState,
  WorkflowStatus,
} from "./enums";
import type {
  AccountDetails,
  Action,
  ActionTarget,
  Adjustment,
  AutomationRulesAction,
  AutomationRulesConfig,
  AutomationRulesFindingFilters,
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
  AwsEc2ClientVpnEndpointDetails,
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
  DateFilter,
  MapFilter,
  NoteUpdate,
  NumberFilter,
  RelatedFinding,
  SeverityUpdate,
  StringFilter,
  WorkflowUpdate,
} from "./models_0";
import type {
  AwsEcsTaskDefinitionDetails,
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
  AwsOrganizationScope,
  AwsRdsDbClusterDetails,
  AwsRdsDbClusterSnapshotDetails,
  AwsRdsDbInstanceDetails,
  AwsRdsDbSecurityGroupDetails,
  AwsRdsDbSnapshotDetails,
  AwsRdsEventSubscriptionDetails,
  AwsRedshiftClusterDetails,
  AwsRoute53HostedZoneDetails,
  AwsS3AccessPointDetails,
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
  AwsWafRulePredicateListDetails,
  Compliance,
  DataClassificationDetails,
  Detection,
  FindingProviderFields,
  GeneratorDetails,
  Malware,
  Network,
  NetworkPathComponent,
  Note,
  PatchSummary,
  ProcessDetails,
  Remediation,
} from "./models_1";

/**
 * Provides information about a WAF rule. This rule specifies the web requests that you want to allow, block, or count.
 *
 * @public
 */
export interface AwsWafRuleDetails {
  /**
   * The name of the metrics for this rule.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * A descriptive name for the rule.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Specifies the `ByteMatchSet`, `IPSet`, `SqlInjectionMatchSet`, `XssMatchSet`, `RegexMatchSet`, `GeoMatchSet`, and `SizeConstraintSet` objects that you want to add to a rule and, for each object, indicates whether you want to negate the settings.
   *
   * @public
   */
  PredicateList?: AwsWafRulePredicateListDetails[] | undefined;

  /**
   * The ID of the WAF rule.
   *
   * @public
   */
  RuleId?: string | undefined;
}

/**
 * Provides information about what action WAF should take on a web request when it matches the criteria defined in the rule.
 *
 * @public
 */
export interface AwsWafRuleGroupRulesActionDetails {
  /**
   * The action that WAF should take on a web request when it matches the rule's statement.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Provides information about the rules attached to the rule group. These rules identify the web requests that you want to allow, block, or count.
 *
 * @public
 */
export interface AwsWafRuleGroupRulesDetails {
  /**
   * Provides information about what action WAF should take on a web request when it matches the criteria defined in the rule.
   *
   * @public
   */
  Action?: AwsWafRuleGroupRulesActionDetails | undefined;

  /**
   * If you define more than one rule in a web ACL, WAF evaluates each request against the rules in order based on the value of `Priority`.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * The rule ID for a rule.
   *
   * @public
   */
  RuleId?: string | undefined;

  /**
   * The type of rule.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Provides information about an WAF rule group. A rule group is a collection of rules for inspecting and controlling web requests.
 *
 * @public
 */
export interface AwsWafRuleGroupDetails {
  /**
   * The name of the metrics for this rule group.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The name of the rule group.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of the rule group.
   *
   * @public
   */
  RuleGroupId?: string | undefined;

  /**
   * Provides information about the rules attached to the rule group. These rules identify the web requests that you want to allow, block, or count.
   *
   * @public
   */
  Rules?: AwsWafRuleGroupRulesDetails[] | undefined;
}

/**
 * A custom header for custom request and response handling.
 *
 * @public
 */
export interface AwsWafv2CustomHttpHeader {
  /**
   * The name of the custom header.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The value of the custom header.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Custom request handling behavior that inserts custom headers into a web request. WAF uses custom request handling when the rule action doesn't block the request.
 *
 * @public
 */
export interface AwsWafv2CustomRequestHandlingDetails {
  /**
   * The HTTP headers to insert into the request.
   *
   * @public
   */
  InsertHeaders?: AwsWafv2CustomHttpHeader[] | undefined;
}

/**
 * Specifies that WAF should allow the request and optionally defines additional custom handling for the request.
 *
 * @public
 */
export interface AwsWafv2ActionAllowDetails {
  /**
   * Defines custom handling for the web request. For information about customizing web requests and responses, see [Customizing web requests and responses in WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the *WAF Developer Guide.*.
   *
   * @public
   */
  CustomRequestHandling?: AwsWafv2CustomRequestHandlingDetails | undefined;
}

/**
 * A custom response to send to the client. You can define a custom response for rule actions and default web ACL actions that are set to block.
 *
 * @public
 */
export interface AwsWafv2CustomResponseDetails {
  /**
   * References the response body that you want WAF to return to the web request client. You can define a custom response for a rule action or a default web ACL action that is set to block.
   *
   * @public
   */
  CustomResponseBodyKey?: string | undefined;

  /**
   * The HTTP status code to return to the client. For a list of status codes that you can use in your custom responses, see [Supported status codes for custom response](https://docs.aws.amazon.com/waf/latest/developerguide/customizing-the-response-status-codes.html) in the *WAF Developer Guide.*
   *
   * @public
   */
  ResponseCode?: number | undefined;

  /**
   * The HTTP headers to use in the response.
   *
   * @public
   */
  ResponseHeaders?: AwsWafv2CustomHttpHeader[] | undefined;
}

/**
 * Specifies that WAF should block the request and optionally defines additional custom handling for the response to the web request.
 *
 * @public
 */
export interface AwsWafv2ActionBlockDetails {
  /**
   * Defines a custom response for the web request. For information, see [Customizing web requests and responses in WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the *WAF Developer Guide.*.
   *
   * @public
   */
  CustomResponse?: AwsWafv2CustomResponseDetails | undefined;
}

/**
 * Specifies that WAF should run a CAPTCHA check against the request.
 *
 * @public
 */
export interface AwsWafv2RulesActionCaptchaDetails {
  /**
   * Defines custom handling for the web request, used when the CAPTCHA inspection determines that the request's token is valid and unexpired. For more information, see [Customizing web requests and responses in WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the *WAF Developer Guide.*.
   *
   * @public
   */
  CustomRequestHandling?: AwsWafv2CustomRequestHandlingDetails | undefined;
}

/**
 * Specifies that WAF should count the request.
 *
 * @public
 */
export interface AwsWafv2RulesActionCountDetails {
  /**
   * Defines custom handling for the web request. For more information, see [Customizing web requests and responses in WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the *WAF Developer Guide.*.
   *
   * @public
   */
  CustomRequestHandling?: AwsWafv2CustomRequestHandlingDetails | undefined;
}

/**
 * The action that WAF should take on a web request when it matches a rule's statement. Settings at the web ACL level can override the rule action setting.
 *
 * @public
 */
export interface AwsWafv2RulesActionDetails {
  /**
   * Instructs WAF to allow the web request.
   *
   * @public
   */
  Allow?: AwsWafv2ActionAllowDetails | undefined;

  /**
   * Instructs WAF to block the web request.
   *
   * @public
   */
  Block?: AwsWafv2ActionBlockDetails | undefined;

  /**
   * Instructs WAF to run a CAPTCHA check against the web request.
   *
   * @public
   */
  Captcha?: AwsWafv2RulesActionCaptchaDetails | undefined;

  /**
   * Instructs WAF to count the web request and then continue evaluating the request using the remaining rules in the web ACL.
   *
   * @public
   */
  Count?: AwsWafv2RulesActionCountDetails | undefined;
}

/**
 * Defines and enables Amazon CloudWatch metrics and web request sample collection.
 *
 * @public
 */
export interface AwsWafv2VisibilityConfigDetails {
  /**
   * A boolean indicating whether the associated resource sends metrics to Amazon CloudWatch. For the list of available metrics, see [WAF metrics and dimensions](https://docs.aws.amazon.com/waf/latest/developerguide/monitoring-cloudwatch.html#waf-metrics) in the *WAF Developer Guide*.
   *
   * @public
   */
  CloudWatchMetricsEnabled?: boolean | undefined;

  /**
   * A name of the Amazon CloudWatch metric.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * A boolean indicating whether WAF should store a sampling of the web requests that match the rules. You can view the sampled requests through the WAF console.
   *
   * @public
   */
  SampledRequestsEnabled?: boolean | undefined;
}

/**
 * Provides details about rules in a rule group. A rule identifies web requests that you want to allow, block, or count. Each rule includes one top-level Statement that WAF uses to identify matching web requests, and parameters that govern how WAF handles them.
 *
 * @public
 */
export interface AwsWafv2RulesDetails {
  /**
   * The action that WAF should take on a web request when it matches the rule statement. Settings at the web ACL level can override the rule action setting.
   *
   * @public
   */
  Action?: AwsWafv2RulesActionDetails | undefined;

  /**
   * The name of the rule.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The action to use in the place of the action that results from the rule group evaluation.
   *
   * @public
   */
  OverrideAction?: string | undefined;

  /**
   * If you define more than one Rule in a WebACL, WAF evaluates each request against the Rules in order based on the value of `Priority`. WAF processes rules with lower priority first. The priorities don't need to be consecutive, but they must all be different.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * Defines and enables Amazon CloudWatch metrics and web request sample collection.
   *
   * @public
   */
  VisibilityConfig?: AwsWafv2VisibilityConfigDetails | undefined;
}

/**
 * Details about an WAFv2 rule group.
 *
 * @public
 */
export interface AwsWafv2RuleGroupDetails {
  /**
   * The web ACL capacity units (WCUs) required for this rule group.
   *
   * @public
   */
  Capacity?: number | undefined;

  /**
   * A description of the rule group that helps with identification.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A unique identifier for the rule group.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the rule group. You cannot change the name of a rule group after you create it.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the entity.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Rule statements used to identify the web requests that you want to allow, block, or count. Each rule includes one top-level statement that WAF uses to identify matching web requests, and parameters that govern how WAF handles them.
   *
   * @public
   */
  Rules?: AwsWafv2RulesDetails[] | undefined;

  /**
   * Specifies whether the rule group is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, or an Amazon Cognito user pool.
   *
   * @public
   */
  Scope?: string | undefined;

  /**
   * Defines and enables Amazon CloudWatch metrics and web request sample collection.
   *
   * @public
   */
  VisibilityConfig?: AwsWafv2VisibilityConfigDetails | undefined;
}

/**
 * Used for CAPTCHA and challenge token settings. Determines how long a CAPTCHA or challenge timestamp remains valid after WAF updates it for a successful CAPTCHA or challenge response.
 *
 * @public
 */
export interface AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails {
  /**
   * The amount of time, in seconds, that a CAPTCHA or challenge timestamp is considered valid by WAF.
   *
   * @public
   */
  ImmunityTime?: number | undefined;
}

/**
 * Specifies how WAF should handle CAPTCHA evaluations for rules that don't have their own `CaptchaConfig` settings.
 *
 * @public
 */
export interface AwsWafv2WebAclCaptchaConfigDetails {
  /**
   * Determines how long a CAPTCHA timestamp in the token remains valid after the client successfully solves a CAPTCHA puzzle.
   *
   * @public
   */
  ImmunityTimeProperty?: AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails | undefined;
}

/**
 * Specifies the action that Amazon CloudFront or WAF takes when a web request matches the conditions in the rule.
 *
 * @public
 */
export interface AwsWafv2WebAclActionDetails {
  /**
   * Specifies that WAF should allow requests by default.
   *
   * @public
   */
  Allow?: AwsWafv2ActionAllowDetails | undefined;

  /**
   * Specifies that WAF should block requests by default.
   *
   * @public
   */
  Block?: AwsWafv2ActionBlockDetails | undefined;
}

/**
 * Details about an WAFv2 web Access Control List (ACL).
 *
 * @public
 */
export interface AwsWafv2WebAclDetails {
  /**
   * The name of the web ACL.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the web ACL that you want to associate with the resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Indicates whether this web ACL is managed by Firewall Manager.
   *
   * @public
   */
  ManagedbyFirewallManager?: boolean | undefined;

  /**
   * A unique identifier for the web ACL.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The web ACL capacity units (WCUs) currently being used by this web ACL.
   *
   * @public
   */
  Capacity?: number | undefined;

  /**
   * Specifies how WAF should handle CAPTCHA evaluations for rules that don't have their own `CaptchaConfig` settings.
   *
   * @public
   */
  CaptchaConfig?: AwsWafv2WebAclCaptchaConfigDetails | undefined;

  /**
   * The action to perform if none of the Rules contained in the web ACL match.
   *
   * @public
   */
  DefaultAction?: AwsWafv2WebAclActionDetails | undefined;

  /**
   * A description of the web ACL that helps with identification.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Rule statements used to identify the web requests that you want to allow, block, or count. Each rule includes one top-level statement that WAF uses to identify matching web requests, and parameters that govern how WAF handles them.
   *
   * @public
   */
  Rules?: AwsWafv2RulesDetails[] | undefined;

  /**
   * Defines and enables Amazon CloudWatch metrics and web request sample collection.
   *
   * @public
   */
  VisibilityConfig?: AwsWafv2VisibilityConfigDetails | undefined;
}

/**
 * Details about the action that CloudFront or WAF takes when a web request matches the conditions in the rule.
 *
 * @public
 */
export interface WafAction {
  /**
   * Specifies how you want WAF to respond to requests that match the settings in a rule.
   *
   * Valid settings include the following:
   *
   * - `ALLOW` - WAF allows requests
   * - `BLOCK` - WAF blocks requests
   * - `COUNT` - WAF increments a counter of the requests that match all of the conditions in the rule. WAF then continues to inspect the web request based on the remaining rules in the web ACL. You can't specify `COUNT` for the default action for a web ACL.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Details about a rule to exclude from a rule group.
 *
 * @public
 */
export interface WafExcludedRule {
  /**
   * The unique identifier for the rule to exclude from the rule group.
   *
   * @public
   */
  RuleId?: string | undefined;
}

/**
 * Details about an override action for a rule.
 *
 * @public
 */
export interface WafOverrideAction {
  /**
   * `COUNT` overrides the action specified by the individual rule within a `RuleGroup` .
   *
   * If set to `NONE`, the rule's action takes place.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Details for a rule in an WAF web ACL.
 *
 * @public
 */
export interface AwsWafWebAclRule {
  /**
   * Specifies the action that CloudFront or WAF takes when a web request matches the conditions in the rule.
   *
   * @public
   */
  Action?: WafAction | undefined;

  /**
   * Rules to exclude from a rule group.
   *
   * @public
   */
  ExcludedRules?: WafExcludedRule[] | undefined;

  /**
   * Use the `OverrideAction` to test your `RuleGroup`.
   *
   * Any rule in a `RuleGroup` can potentially block a request. If you set the `OverrideAction` to `None`, the `RuleGroup` blocks a request if any individual rule in the `RuleGroup` matches the request and is configured to block that request.
   *
   * However, if you first want to test the `RuleGroup`, set the `OverrideAction` to `Count`. The `RuleGroup` then overrides any block action specified by individual rules contained within the group. Instead of blocking matching requests, those requests are counted.
   *
   * `ActivatedRule`|`OverrideAction` applies only when updating or adding a `RuleGroup` to a web ACL. In this case you don't use `ActivatedRule` `Action`. For all other update requests, `ActivatedRule` `Action` is used instead of `ActivatedRule` `OverrideAction`.
   *
   * @public
   */
  OverrideAction?: WafOverrideAction | undefined;

  /**
   * Specifies the order in which the rules in a web ACL are evaluated. Rules with a lower value for `Priority` are evaluated before rules with a higher value. The value must be a unique integer. If you add multiple rules to a web ACL, the values don't need to be consecutive.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * The identifier for a rule.
   *
   * @public
   */
  RuleId?: string | undefined;

  /**
   * The rule type.
   *
   * Valid values: `REGULAR` | `RATE_BASED` | `GROUP`
   *
   * The default is `REGULAR`.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Provides information about an WAF web access control list (web ACL).
 *
 * @public
 */
export interface AwsWafWebAclDetails {
  /**
   * A friendly name or description of the web ACL. You can't change the name of a web ACL after you create it.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The action to perform if none of the rules contained in the web ACL match.
   *
   * @public
   */
  DefaultAction?: string | undefined;

  /**
   * An array that contains the action for each rule in a web ACL, the priority of the rule, and the ID of the rule.
   *
   * @public
   */
  Rules?: AwsWafWebAclRule[] | undefined;

  /**
   * A unique identifier for a web ACL.
   *
   * @public
   */
  WebAclId?: string | undefined;
}

/**
 * Information about the encryption configuration for X-Ray.
 *
 * @public
 */
export interface AwsXrayEncryptionConfigDetails {
  /**
   * The identifier of the KMS key that is used for encryption. Provided if `Type` is `KMS`.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * The current status of the encryption configuration. Valid values are `ACTIVE` or `UPDATING`.
   *
   * When `Status` is equal to `UPDATING`, X-Ray might use both the old and new encryption.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The type of encryption. `KMS` indicates that the encryption uses KMS keys. `NONE` indicates the default encryption.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Details about an external code repository with which you can connect your Amazon Web Services resources. The connection is established through Amazon Inspector.
 *
 * @public
 */
export interface CodeRepositoryDetails {
  /**
   * The type of repository provider.
   *
   * @public
   */
  ProviderType?: string | undefined;

  /**
   * The name of the project in the code repository.
   *
   * @public
   */
  ProjectName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the code security integration associated with the repository.
   *
   * @public
   */
  CodeSecurityIntegrationArn?: string | undefined;
}

/**
 * Describes the mounting of a volume in a container.
 *
 * @public
 */
export interface VolumeMount {
  /**
   * The name of the volume.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The path in the container at which the volume should be mounted.
   *
   * @public
   */
  MountPath?: string | undefined;
}

/**
 * Container details related to a finding.
 *
 * @public
 */
export interface ContainerDetails {
  /**
   * The runtime of the container.
   *
   * @public
   */
  ContainerRuntime?: string | undefined;

  /**
   * The name of the container related to a finding.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The identifier of the container image related to a finding.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The name of the container image related to a finding.
   *
   * @public
   */
  ImageName?: string | undefined;

  /**
   * Indicates when the container started.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  LaunchedAt?: string | undefined;

  /**
   * Provides information about the mounting of a volume in a container.
   *
   * @public
   */
  VolumeMounts?: VolumeMount[] | undefined;

  /**
   * When this parameter is `true`, the container is given elevated privileges on the host container instance (similar to the root user).
   *
   * @public
   */
  Privileged?: boolean | undefined;
}

/**
 * Additional details about a resource related to a finding.
 *
 * To provide the details, use the object that corresponds to the resource type. For example, if the resource type is `AwsEc2Instance`, then you use the `AwsEc2Instance` object to provide the details.
 *
 * If the type-specific object does not contain all of the fields you want to populate, then you use the `Other` object to populate those additional fields.
 *
 * You also use the `Other` object to populate the details when the selected type does not have a corresponding object.
 *
 * @public
 */
export interface ResourceDetails {
  /**
   * Details for an autoscaling group.
   *
   * @public
   */
  AwsAutoScalingAutoScalingGroup?: AwsAutoScalingAutoScalingGroupDetails | undefined;

  /**
   * Details for an CodeBuild project.
   *
   * @public
   */
  AwsCodeBuildProject?: AwsCodeBuildProjectDetails | undefined;

  /**
   * Details about a CloudFront distribution.
   *
   * @public
   */
  AwsCloudFrontDistribution?: AwsCloudFrontDistributionDetails | undefined;

  /**
   * Details about an EC2 instance related to a finding.
   *
   * @public
   */
  AwsEc2Instance?: AwsEc2InstanceDetails | undefined;

  /**
   * Details for an EC2 network interface.
   *
   * @public
   */
  AwsEc2NetworkInterface?: AwsEc2NetworkInterfaceDetails | undefined;

  /**
   * Details for an EC2 security group.
   *
   * @public
   */
  AwsEc2SecurityGroup?: AwsEc2SecurityGroupDetails | undefined;

  /**
   * Details for an Amazon EC2 volume.
   *
   * @public
   */
  AwsEc2Volume?: AwsEc2VolumeDetails | undefined;

  /**
   * Details for an Amazon EC2 VPC.
   *
   * @public
   */
  AwsEc2Vpc?: AwsEc2VpcDetails | undefined;

  /**
   * Details about an Elastic IP address.
   *
   * @public
   */
  AwsEc2Eip?: AwsEc2EipDetails | undefined;

  /**
   * Details about a subnet in Amazon EC2.
   *
   * @public
   */
  AwsEc2Subnet?: AwsEc2SubnetDetails | undefined;

  /**
   * Details about an EC2 network access control list (ACL).
   *
   * @public
   */
  AwsEc2NetworkAcl?: AwsEc2NetworkAclDetails | undefined;

  /**
   * Details about a load balancer.
   *
   * @public
   */
  AwsElbv2LoadBalancer?: AwsElbv2LoadBalancerDetails | undefined;

  /**
   * Details about an Elastic Beanstalk environment.
   *
   * @public
   */
  AwsElasticBeanstalkEnvironment?: AwsElasticBeanstalkEnvironmentDetails | undefined;

  /**
   * Details for an Elasticsearch domain.
   *
   * @public
   */
  AwsElasticsearchDomain?: AwsElasticsearchDomainDetails | undefined;

  /**
   * Details about an S3 bucket related to a finding.
   *
   * @public
   */
  AwsS3Bucket?: AwsS3BucketDetails | undefined;

  /**
   * Details about the Amazon S3 Public Access Block configuration for an account.
   *
   * @public
   */
  AwsS3AccountPublicAccessBlock?: AwsS3AccountPublicAccessBlockDetails | undefined;

  /**
   * Details about an S3 object related to a finding.
   *
   * @public
   */
  AwsS3Object?: AwsS3ObjectDetails | undefined;

  /**
   * Details about a Secrets Manager secret.
   *
   * @public
   */
  AwsSecretsManagerSecret?: AwsSecretsManagerSecretDetails | undefined;

  /**
   * Details about an IAM access key related to a finding.
   *
   * @public
   */
  AwsIamAccessKey?: AwsIamAccessKeyDetails | undefined;

  /**
   * Details about an IAM user.
   *
   * @public
   */
  AwsIamUser?: AwsIamUserDetails | undefined;

  /**
   * Details about an IAM permissions policy.
   *
   * @public
   */
  AwsIamPolicy?: AwsIamPolicyDetails | undefined;

  /**
   * Provides information about a version 2 stage for Amazon API Gateway.
   *
   * @public
   */
  AwsApiGatewayV2Stage?: AwsApiGatewayV2StageDetails | undefined;

  /**
   * Provides information about a version 2 API in Amazon API Gateway.
   *
   * @public
   */
  AwsApiGatewayV2Api?: AwsApiGatewayV2ApiDetails | undefined;

  /**
   * Details about a DynamoDB table.
   *
   * @public
   */
  AwsDynamoDbTable?: AwsDynamoDbTableDetails | undefined;

  /**
   * Provides information about a version 1 Amazon API Gateway stage.
   *
   * @public
   */
  AwsApiGatewayStage?: AwsApiGatewayStageDetails | undefined;

  /**
   * Provides information about a REST API in version 1 of Amazon API Gateway.
   *
   * @public
   */
  AwsApiGatewayRestApi?: AwsApiGatewayRestApiDetails | undefined;

  /**
   * Provides details about a CloudTrail trail.
   *
   * @public
   */
  AwsCloudTrailTrail?: AwsCloudTrailTrailDetails | undefined;

  /**
   * Provides information about the state of a patch on an instance based on the patch baseline that was used to patch the instance.
   *
   * @public
   */
  AwsSsmPatchCompliance?: AwsSsmPatchComplianceDetails | undefined;

  /**
   * Provides details about an Certificate Manager certificate.
   *
   * @public
   */
  AwsCertificateManagerCertificate?: AwsCertificateManagerCertificateDetails | undefined;

  /**
   * Contains details about an Amazon Redshift cluster.
   *
   * @public
   */
  AwsRedshiftCluster?: AwsRedshiftClusterDetails | undefined;

  /**
   * Contains details about a Classic Load Balancer.
   *
   * @public
   */
  AwsElbLoadBalancer?: AwsElbLoadBalancerDetails | undefined;

  /**
   * Contains details about an IAM group.
   *
   * @public
   */
  AwsIamGroup?: AwsIamGroupDetails | undefined;

  /**
   * Details about an IAM role.
   *
   * @public
   */
  AwsIamRole?: AwsIamRoleDetails | undefined;

  /**
   * Details about an KMS key.
   *
   * @public
   */
  AwsKmsKey?: AwsKmsKeyDetails | undefined;

  /**
   * Details about a Lambda function.
   *
   * @public
   */
  AwsLambdaFunction?: AwsLambdaFunctionDetails | undefined;

  /**
   * Details for a Lambda layer version.
   *
   * @public
   */
  AwsLambdaLayerVersion?: AwsLambdaLayerVersionDetails | undefined;

  /**
   * Details about an Amazon RDS database instance.
   *
   * @public
   */
  AwsRdsDbInstance?: AwsRdsDbInstanceDetails | undefined;

  /**
   * Details about an SNS topic.
   *
   * @public
   */
  AwsSnsTopic?: AwsSnsTopicDetails | undefined;

  /**
   * Details about an SQS queue.
   *
   * @public
   */
  AwsSqsQueue?: AwsSqsQueueDetails | undefined;

  /**
   * Details for an WAF web ACL.
   *
   * @public
   */
  AwsWafWebAcl?: AwsWafWebAclDetails | undefined;

  /**
   * Details about an Amazon RDS database snapshot.
   *
   * @public
   */
  AwsRdsDbSnapshot?: AwsRdsDbSnapshotDetails | undefined;

  /**
   * Details about an Amazon RDS database cluster snapshot.
   *
   * @public
   */
  AwsRdsDbClusterSnapshot?: AwsRdsDbClusterSnapshotDetails | undefined;

  /**
   * Details about an Amazon RDS database cluster.
   *
   * @public
   */
  AwsRdsDbCluster?: AwsRdsDbClusterDetails | undefined;

  /**
   * Details about an Amazon ECS cluster.
   *
   * @public
   */
  AwsEcsCluster?: AwsEcsClusterDetails | undefined;

  /**
   * Provides information about a Docker container that's part of a task.
   *
   * @public
   */
  AwsEcsContainer?: AwsEcsContainerDetails | undefined;

  /**
   * Details about a task definition. A task definition describes the container and volume definitions of an Amazon Elastic Container Service task.
   *
   * @public
   */
  AwsEcsTaskDefinition?: AwsEcsTaskDefinitionDetails | undefined;

  /**
   * Details about a container resource related to a finding.
   *
   * @public
   */
  Container?: ContainerDetails | undefined;

  /**
   * Details about a resource that are not available in a type-specific details object. Use the `Other` object in the following cases.
   *
   * - The type-specific object does not contain all of the fields that you want to populate. In this case, first use the type-specific object to populate those fields. Use the `Other` object to populate the fields that are missing from the type-specific object.
   * - The resource type does not have a corresponding object. This includes resources for which the type is `Other`.
   *
   * @public
   */
  Other?: Record<string, string> | undefined;

  /**
   * Details about an RDS event notification subscription.
   *
   * @public
   */
  AwsRdsEventSubscription?: AwsRdsEventSubscriptionDetails | undefined;

  /**
   * Details about a service within an ECS cluster.
   *
   * @public
   */
  AwsEcsService?: AwsEcsServiceDetails | undefined;

  /**
   * Provides details about a launch configuration.
   *
   * @public
   */
  AwsAutoScalingLaunchConfiguration?: AwsAutoScalingLaunchConfigurationDetails | undefined;

  /**
   * Details about an Amazon EC2 VPN connection.
   *
   * @public
   */
  AwsEc2VpnConnection?: AwsEc2VpnConnectionDetails | undefined;

  /**
   * Information about an Amazon ECR image.
   *
   * @public
   */
  AwsEcrContainerImage?: AwsEcrContainerImageDetails | undefined;

  /**
   * Details about an Amazon OpenSearch Service domain.
   *
   * @public
   */
  AwsOpenSearchServiceDomain?: AwsOpenSearchServiceDomainDetails | undefined;

  /**
   * Details about the service configuration for a VPC endpoint service.
   *
   * @public
   */
  AwsEc2VpcEndpointService?: AwsEc2VpcEndpointServiceDetails | undefined;

  /**
   * Information about the encryption configuration for X-Ray.
   *
   * @public
   */
  AwsXrayEncryptionConfig?: AwsXrayEncryptionConfigDetails | undefined;

  /**
   * Details about a rate-based rule for global resources.
   *
   * @public
   */
  AwsWafRateBasedRule?: AwsWafRateBasedRuleDetails | undefined;

  /**
   * Details about a rate-based rule for Regional resources.
   *
   * @public
   */
  AwsWafRegionalRateBasedRule?: AwsWafRegionalRateBasedRuleDetails | undefined;

  /**
   * Information about an Amazon Elastic Container Registry repository.
   *
   * @public
   */
  AwsEcrRepository?: AwsEcrRepositoryDetails | undefined;

  /**
   * Details about an Amazon EKS cluster.
   *
   * @public
   */
  AwsEksCluster?: AwsEksClusterDetails | undefined;

  /**
   * Details about an Network Firewall firewall policy.
   *
   * @public
   */
  AwsNetworkFirewallFirewallPolicy?: AwsNetworkFirewallFirewallPolicyDetails | undefined;

  /**
   * Details about an Network Firewall firewall.
   *
   * @public
   */
  AwsNetworkFirewallFirewall?: AwsNetworkFirewallFirewallDetails | undefined;

  /**
   * Details about an Network Firewall rule group.
   *
   * @public
   */
  AwsNetworkFirewallRuleGroup?: AwsNetworkFirewallRuleGroupDetails | undefined;

  /**
   * Details about an Amazon RDS DB security group.
   *
   * @public
   */
  AwsRdsDbSecurityGroup?: AwsRdsDbSecurityGroupDetails | undefined;

  /**
   * Details about an Amazon Kinesis data stream.
   *
   * @public
   */
  AwsKinesisStream?: AwsKinesisStreamDetails | undefined;

  /**
   * Details about an Amazon EC2 transit gateway that interconnects your virtual private clouds (VPC) and on-premises networks.
   *
   * @public
   */
  AwsEc2TransitGateway?: AwsEc2TransitGatewayDetails | undefined;

  /**
   * Details about an Amazon EFS access point. An access point is an application-specific view into an EFS file system that applies an operating system user and group, and a file system path, to any file system request made through the access point.
   *
   * @public
   */
  AwsEfsAccessPoint?: AwsEfsAccessPointDetails | undefined;

  /**
   * Details about an CloudFormation stack. A stack is a collection of Amazon Web Services resources that you can manage as a single unit.
   *
   * @public
   */
  AwsCloudFormationStack?: AwsCloudFormationStackDetails | undefined;

  /**
   * Details about an Amazon CloudWatch alarm. An alarm allows you to monitor and receive alerts about your Amazon Web Services resources and applications across multiple Regions.
   *
   * @public
   */
  AwsCloudWatchAlarm?: AwsCloudWatchAlarmDetails | undefined;

  /**
   * Details about an Amazon EC2 VPC peering connection. A VPC peering connection is a networking connection between two VPCs that enables you to route traffic between them privately.
   *
   * @public
   */
  AwsEc2VpcPeeringConnection?: AwsEc2VpcPeeringConnectionDetails | undefined;

  /**
   * Details about an WAF rule group for Regional resources.
   *
   * @public
   */
  AwsWafRegionalRuleGroup?: AwsWafRegionalRuleGroupDetails | undefined;

  /**
   * Details about an WAF rule for Regional resources.
   *
   * @public
   */
  AwsWafRegionalRule?: AwsWafRegionalRuleDetails | undefined;

  /**
   * Details about an WAF web access control list (web ACL) for Regional resources.
   *
   * @public
   */
  AwsWafRegionalWebAcl?: AwsWafRegionalWebAclDetails | undefined;

  /**
   * Details about an WAF rule for global resources.
   *
   * @public
   */
  AwsWafRule?: AwsWafRuleDetails | undefined;

  /**
   * Details about an WAF rule group for global resources.
   *
   * @public
   */
  AwsWafRuleGroup?: AwsWafRuleGroupDetails | undefined;

  /**
   * Details about a task in a cluster.
   *
   * @public
   */
  AwsEcsTask?: AwsEcsTaskDetails | undefined;

  /**
   * Provides details about an Backup backup vault.
   *
   * @public
   */
  AwsBackupBackupVault?: AwsBackupBackupVaultDetails | undefined;

  /**
   * Provides details about an Backup backup plan.
   *
   * @public
   */
  AwsBackupBackupPlan?: AwsBackupBackupPlanDetails | undefined;

  /**
   * Provides details about an Backup backup, or recovery point.
   *
   * @public
   */
  AwsBackupRecoveryPoint?: AwsBackupRecoveryPointDetails | undefined;

  /**
   * Specifies the properties for creating an Amazon Elastic Compute Cloud (Amazon EC2) launch template.
   *
   * @public
   */
  AwsEc2LaunchTemplate?: AwsEc2LaunchTemplateDetails | undefined;

  /**
   * Provides details about an Amazon SageMaker AI notebook instance.
   *
   * @public
   */
  AwsSageMakerNotebookInstance?: AwsSageMakerNotebookInstanceDetails | undefined;

  /**
   * Details about an WAFv2 web Access Control List (ACL).
   *
   * @public
   */
  AwsWafv2WebAcl?: AwsWafv2WebAclDetails | undefined;

  /**
   * Details about an WAFv2 rule group.
   *
   * @public
   */
  AwsWafv2RuleGroup?: AwsWafv2RuleGroupDetails | undefined;

  /**
   * Provides details about a route table. A route table contains a set of rules, called routes, that determine where to direct network traffic from your subnet or gateway.
   *
   * @public
   */
  AwsEc2RouteTable?: AwsEc2RouteTableDetails | undefined;

  /**
   * Provides details about AppSync message broker. A message broker allows software applications and components to communicate using various programming languages, operating systems, and formal messaging protocols.
   *
   * @public
   */
  AwsAmazonMqBroker?: AwsAmazonMqBrokerDetails | undefined;

  /**
   * Provides details about an AppSync Graph QL API, which lets you query multiple databases, microservices, and APIs from a single GraphQL endpoint.
   *
   * @public
   */
  AwsAppSyncGraphQlApi?: AwsAppSyncGraphQlApiDetails | undefined;

  /**
   * A schema defines the structure of events that are sent to Amazon EventBridge. Schema registries are containers for schemas. They collect and organize schemas so that your schemas are in logical groups.
   *
   * @public
   */
  AwsEventSchemasRegistry?: AwsEventSchemasRegistryDetails | undefined;

  /**
   * Provides details about an Amazon GuardDuty detector. A detector is an object that represents the GuardDuty service. A detector is required for GuardDuty to become operational.
   *
   * @public
   */
  AwsGuardDutyDetector?: AwsGuardDutyDetectorDetails | undefined;

  /**
   * Provides details about an Step Functions state machine, which is a workflow consisting of a series of event-driven steps.
   *
   * @public
   */
  AwsStepFunctionStateMachine?: AwsStepFunctionStateMachineDetails | undefined;

  /**
   * Provides information about an Amazon Athena workgroup. A workgroup helps you separate users, teams, applications, or workloads. It also helps you set limits on data processing and track costs.
   *
   * @public
   */
  AwsAthenaWorkGroup?: AwsAthenaWorkGroupDetails | undefined;

  /**
   * Provides details about Amazon EventBridge event bus for an endpoint. An event bus is a router that receives events and delivers them to zero or more destinations, or targets.
   *
   * @public
   */
  AwsEventsEventbus?: AwsEventsEventbusDetails | undefined;

  /**
   * Provides details about an Database Migration Service (DMS) endpoint. An endpoint provides connection, data store type, and location information about your data store.
   *
   * @public
   */
  AwsDmsEndpoint?: AwsDmsEndpointDetails | undefined;

  /**
   * Provides details about an Amazon EventBridge global endpoint. The endpoint can improve your application’s availability by making it Regional-fault tolerant.
   *
   * @public
   */
  AwsEventsEndpoint?: AwsEventsEndpointDetails | undefined;

  /**
   * Provides details about an DMS replication task. A replication task moves a set of data from the source endpoint to the target endpoint.
   *
   * @public
   */
  AwsDmsReplicationTask?: AwsDmsReplicationTaskDetails | undefined;

  /**
   * Provides details about an DMS replication instance. DMS uses a replication instance to connect to your source data store, read the source data, and format the data for consumption by the target data store.
   *
   * @public
   */
  AwsDmsReplicationInstance?: AwsDmsReplicationInstanceDetails | undefined;

  /**
   * Provides details about an Amazon Route 53 hosted zone, including the four name servers assigned to the hosted zone. A hosted zone represents a collection of records that can be managed together, belonging to a single parent domain name.
   *
   * @public
   */
  AwsRoute53HostedZone?: AwsRoute53HostedZoneDetails | undefined;

  /**
   * Provides details about an Amazon Managed Streaming for Apache Kafka (Amazon MSK) cluster.
   *
   * @public
   */
  AwsMskCluster?: AwsMskClusterDetails | undefined;

  /**
   * Provides details about an Amazon Simple Storage Service (Amazon S3) access point. S3 access points are named network endpoints that are attached to S3 buckets that you can use to perform S3 object operations.
   *
   * @public
   */
  AwsS3AccessPoint?: AwsS3AccessPointDetails | undefined;

  /**
   * Provides details about an Client VPN endpoint. A Client VPN endpoint is the resource that you create and configure to enable and manage client VPN sessions. It's the termination point for all client VPN sessions.
   *
   * @public
   */
  AwsEc2ClientVpnEndpoint?: AwsEc2ClientVpnEndpointDetails | undefined;

  /**
   * Details about an external code repository with which you can connect your Amazon Web Services resources. The connection is established through Amazon Inspector.
   *
   * @public
   */
  CodeRepository?: CodeRepositoryDetails | undefined;

  /**
   * Details about an Azure resource that is related to a finding.
   *
   * @public
   */
  AzureResource?: __DocumentType | undefined;
}

/**
 * Information about the account that owns a resource, for example, an Azure Subscription or Amazon Web Services Account.
 *
 * @public
 */
export interface ResourceOwnerAccount {
  /**
   * The unique identifier of the account that owns the resource, for example, Azure Subscription Id or Amazon Web Services Account Id.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * Information about the organization that owns a resource, for example, an Azure Tenant.
 *
 * @public
 */
export interface ResourceOwnerOrg {
  /**
   * The unique identifier of the organization that owns the resource, for example, Azure Tenant Id.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * Information about the owner of a resource, including the account and organization that the resource belongs to.
 *
 * @public
 */
export interface ResourceOwner {
  /**
   * Information about the account that owns the resource, for example, an Azure Subscription or Amazon Web Services Account.
   *
   * @public
   */
  Account?: ResourceOwnerAccount | undefined;

  /**
   * Information about the organization that owns the resource, for example, an Azure Tenant.
   *
   * @public
   */
  Org?: ResourceOwnerOrg | undefined;
}

/**
 * A resource related to a finding.
 *
 * @public
 */
export interface Resource {
  /**
   * The type of the resource that details are provided for. If possible, set `Type` to one of the supported resource types. For example, if the resource is an EC2 instance, then set `Type` to `AwsEc2Instance`.
   *
   * If the resource does not match any of the provided types, then set `Type` to `Other`.
   *
   * Length Constraints: Minimum length of 1. Maximum length of 256.
   *
   * @public
   */
  Type: string | undefined;

  /**
   * The canonical identifier for the given resource type.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The canonical Amazon Web Services partition name that the Region is assigned to.
   *
   * @public
   */
  Partition?: Partition | undefined;

  /**
   * The canonical Amazon Web Services external Region name where this resource is located.
   *
   * Length Constraints: Minimum length of 1. Maximum length of 16.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The cloud provider that the resource belongs to. Valid values are `AWS` and `Azure`.
   *
   * @public
   */
  Provider?: CloudProviderName | undefined;

  /**
   * Information about the account and organization that own the resource.
   *
   * @public
   */
  Owner?: ResourceOwner | undefined;

  /**
   * Identifies the role of the resource in the finding. A resource is either the actor or target of the finding activity,
   *
   * @public
   */
  ResourceRole?: string | undefined;

  /**
   * A list of Amazon Web Services tags associated with a resource at the time the finding was processed. Tags must follow [Amazon Web Services tag naming limits and requirements](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html#tag-conventions).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Contains information about sensitive data that was detected on the resource.
   *
   * @public
   */
  DataClassification?: DataClassificationDetails | undefined;

  /**
   * Additional details about the resource related to a finding.
   *
   * @public
   */
  Details?: ResourceDetails | undefined;

  /**
   * The name of the application that is related to a finding.
   *
   * @public
   */
  ApplicationName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the application that is related to a finding.
   *
   * @public
   */
  ApplicationArn?: string | undefined;
}

/**
 * The severity of the finding.
 *
 * The finding provider can provide the initial severity. The finding provider can only update the severity if it hasn't been updated using `BatchUpdateFindings`.
 *
 * The finding must have either `Label` or `Normalized` populated. If only one of these attributes is populated, then Security Hub CSPM automatically populates the other one. If neither attribute is populated, then the finding is invalid. `Label` is the preferred attribute.
 *
 * @public
 */
export interface Severity {
  /**
   * Deprecated. This attribute isn't included in findings. Instead of providing `Product`, provide `Original`.
   *
   * The native severity as defined by the Amazon Web Services service or integrated partner product that generated the finding.
   *
   * @public
   */
  Product?: number | undefined;

  /**
   * The severity value of the finding. The allowed values are the following.
   *
   * - `INFORMATIONAL` - No issue was found.
   * - `LOW` - The issue does not require action on its own.
   * - `MEDIUM` - The issue must be addressed but not urgently.
   * - `HIGH` - The issue must be addressed as a priority.
   * - `CRITICAL` - The issue must be remediated immediately to avoid it escalating.
   *
   * If you provide `Normalized` and don't provide `Label`, then `Label` is set automatically as follows.
   *
   * - 0 - `INFORMATIONAL`
   * - 1–39 - `LOW`
   * - 40–69 - `MEDIUM`
   * - 70–89 - `HIGH`
   * - 90–100 - `CRITICAL`
   *
   * @public
   */
  Label?: SeverityLabel | undefined;

  /**
   * Deprecated. The normalized severity of a finding. Instead of providing `Normalized`, provide `Label`.
   *
   * The value of `Normalized` can be an integer between `0` and `100`.
   *
   * If you provide `Label` and don't provide `Normalized`, then `Normalized` is set automatically as follows.
   *
   * - `INFORMATIONAL` - 0
   * - `LOW` - 1
   * - `MEDIUM` - 40
   * - `HIGH` - 70
   * - `CRITICAL` - 90
   *
   * @public
   */
  Normalized?: number | undefined;

  /**
   * The native severity from the finding product that generated the finding.
   *
   * Length Constraints: Minimum length of 1. Maximum length of 64.
   *
   * @public
   */
  Original?: string | undefined;
}

/**
 * Details about the threat intelligence related to a finding.
 *
 * @public
 */
export interface ThreatIntelIndicator {
  /**
   * The type of threat intelligence indicator.
   *
   * @public
   */
  Type?: ThreatIntelIndicatorType | undefined;

  /**
   * The value of a threat intelligence indicator.
   *
   * Length Constraints: Minimum of 1 length. Maximum of 512 length.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The category of a threat intelligence indicator.
   *
   * @public
   */
  Category?: ThreatIntelIndicatorCategory | undefined;

  /**
   * Indicates when the most recent instance of a threat intelligence indicator was observed.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  LastObservedAt?: string | undefined;

  /**
   * The source of the threat intelligence indicator.
   *
   * Length Constraints: Minimum of 1 length. Maximum of 64 length.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * The URL to the page or site where you can get more information about the threat intelligence indicator.
   *
   * @public
   */
  SourceUrl?: string | undefined;
}

/**
 * Provides information about the file paths that were affected by the threat.
 *
 * @public
 */
export interface FilePaths {
  /**
   * Path to the infected or suspicious file on the resource it was detected on.
   *
   * Length Constraints: Minimum of 1 length. Maximum of 128 length.
   *
   * @public
   */
  FilePath?: string | undefined;

  /**
   * The name of the infected or suspicious file corresponding to the hash.
   *
   * Length Constraints: Minimum of 1 length. Maximum of 128 length.
   *
   * @public
   */
  FileName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource on which the threat was detected.
   *
   * Length Constraints: Minimum of 1 length. Maximum of 128 length.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The hash value for the infected or suspicious file.
   *
   * Length Constraints: Minimum of 1 length. Maximum of 128 length.
   *
   * @public
   */
  Hash?: string | undefined;
}

/**
 * Provides information about the threat detected in a security finding and the file paths that were affected by the threat.
 *
 * @public
 */
export interface Threat {
  /**
   * The name of the threat.
   *
   * Length Constraints: Minimum of 1 length. Maximum of 128 length.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The severity of the threat.
   *
   * Length Constraints: Minimum of 1 length. Maximum of 128 length.
   *
   * @public
   */
  Severity?: string | undefined;

  /**
   * This total number of items in which the threat has been detected.
   *
   * @public
   */
  ItemCount?: number | undefined;

  /**
   * Provides information about the file paths that were affected by the threat.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 5 items.
   *
   * @public
   */
  FilePaths?: FilePaths[] | undefined;
}

/**
 * Provides details about where a code vulnerability is located in your Lambda function.
 *
 * @public
 */
export interface CodeVulnerabilitiesFilePath {
  /**
   * The line number of the last line of code in which the vulnerability is located.
   *
   * @public
   */
  EndLine?: number | undefined;

  /**
   * The name of the file in which the code vulnerability is located.
   *
   * @public
   */
  FileName?: string | undefined;

  /**
   * The file path to the code in which the vulnerability is located.
   *
   * @public
   */
  FilePath?: string | undefined;

  /**
   * The line number of the first line of code in which the vulnerability is located.
   *
   * @public
   */
  StartLine?: number | undefined;
}

/**
 * Provides details about the vulnerabilities found in your Lambda function code. This field pertains to findings that Security Hub CSPM receives from Amazon Inspector.
 *
 * @public
 */
export interface VulnerabilityCodeVulnerabilities {
  /**
   * The Common Weakness Enumeration (CWE) item associated with the detected code vulnerability.
   *
   * @public
   */
  Cwes?: string[] | undefined;

  /**
   * Provides details about where a code vulnerability is located in your Lambda function.
   *
   * @public
   */
  FilePath?: CodeVulnerabilitiesFilePath | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Lambda layer in which the code vulnerability is located.
   *
   * @public
   */
  SourceArn?: string | undefined;
}

/**
 * CVSS scores from the advisory related to the vulnerability.
 *
 * @public
 */
export interface Cvss {
  /**
   * The version of CVSS for the CVSS score.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The base CVSS score.
   *
   * @public
   */
  BaseScore?: number | undefined;

  /**
   * The base scoring vector for the CVSS score.
   *
   * @public
   */
  BaseVector?: string | undefined;

  /**
   * The origin of the original CVSS score and vector.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * Adjustments to the CVSS metrics.
   *
   * @public
   */
  Adjustments?: Adjustment[] | undefined;
}

/**
 * A vendor that generates a vulnerability report.
 *
 * @public
 */
export interface VulnerabilityVendor {
  /**
   * The name of the vendor.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The URL of the vulnerability advisory.
   *
   * @public
   */
  Url?: string | undefined;

  /**
   * The severity that the vendor assigned to the vulnerability.
   *
   * @public
   */
  VendorSeverity?: string | undefined;

  /**
   * Indicates when the vulnerability advisory was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  VendorCreatedAt?: string | undefined;

  /**
   * Indicates when the vulnerability advisory was last updated.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  VendorUpdatedAt?: string | undefined;
}

/**
 * Information about a software package.
 *
 * @public
 */
export interface SoftwarePackage {
  /**
   * The name of the software package.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The version of the software package.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The epoch of the software package.
   *
   * @public
   */
  Epoch?: string | undefined;

  /**
   * The release of the software package.
   *
   * @public
   */
  Release?: string | undefined;

  /**
   * The architecture used for the software package.
   *
   * @public
   */
  Architecture?: string | undefined;

  /**
   * The source of the package.
   *
   * @public
   */
  PackageManager?: string | undefined;

  /**
   * The file system path to the package manager inventory file.
   *
   * @public
   */
  FilePath?: string | undefined;

  /**
   * The version of the software package in which the vulnerability has been resolved.
   *
   * @public
   */
  FixedInVersion?: string | undefined;

  /**
   * Describes the actions a customer can take to resolve the vulnerability in the software package.
   *
   * @public
   */
  Remediation?: string | undefined;

  /**
   * The source layer hash of the vulnerable package.
   *
   * @public
   */
  SourceLayerHash?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source layer.
   *
   * @public
   */
  SourceLayerArn?: string | undefined;
}

/**
 * A vulnerability associated with a finding.
 *
 * @public
 */
export interface Vulnerability {
  /**
   * The identifier of the vulnerability.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * List of software packages that have the vulnerability.
   *
   * @public
   */
  VulnerablePackages?: SoftwarePackage[] | undefined;

  /**
   * CVSS scores from the advisory related to the vulnerability.
   *
   * @public
   */
  Cvss?: Cvss[] | undefined;

  /**
   * List of vulnerabilities that are related to this vulnerability.
   *
   * @public
   */
  RelatedVulnerabilities?: string[] | undefined;

  /**
   * Information about the vendor that generates the vulnerability report.
   *
   * @public
   */
  Vendor?: VulnerabilityVendor | undefined;

  /**
   * A list of URLs that provide additional information about the vulnerability.
   *
   * @public
   */
  ReferenceUrls?: string[] | undefined;

  /**
   * Specifies if all vulnerable packages in a finding have a value for `FixedInVersion` and `Remediation`. This field is evaluated for each vulnerability `Id` based on the number of vulnerable packages that have a value for both `FixedInVersion` and `Remediation`. Valid values are as follows:
   *
   * - `YES` if all vulnerable packages have a value for both `FixedInVersion` and `Remediation`
   * - `NO` if no vulnerable packages have a value for `FixedInVersion` and `Remediation`
   * - `PARTIAL` otherwise
   *
   * @public
   */
  FixAvailable?: VulnerabilityFixAvailable | undefined;

  /**
   * The Exploit Prediction Scoring System (EPSS) score for a finding.
   *
   * @public
   */
  EpssScore?: number | undefined;

  /**
   * Whether an exploit is available for a finding.
   *
   * @public
   */
  ExploitAvailable?: VulnerabilityExploitAvailable | undefined;

  /**
   * The date and time of the last exploit associated with a finding discovered in your environment.
   *
   * @public
   */
  LastKnownExploitAt?: string | undefined;

  /**
   * The vulnerabilities found in your Lambda function code. This field pertains to findings that Security Hub CSPM receives from Amazon Inspector.
   *
   * @public
   */
  CodeVulnerabilities?: VulnerabilityCodeVulnerabilities[] | undefined;
}

/**
 * Provides details about the status of the investigation into a finding.
 *
 * @public
 */
export interface Workflow {
  /**
   * The status of the investigation into the finding. The workflow status is specific to an individual finding. It does not affect the generation of new findings. For example, setting the workflow status to `SUPPRESSED` or `RESOLVED` does not prevent a new finding for the same issue.
   *
   * The allowed values are the following.
   *
   * - `NEW` - The initial state of a finding, before it is reviewed.
   *
   *   Security Hub CSPM also resets the workflow status from `NOTIFIED` or `RESOLVED` to `NEW` in the following cases:
   *
   *   - `RecordState` changes from `ARCHIVED` to `ACTIVE`.
   *   - `ComplianceStatus` changes from `PASSED` to either `WARNING`, `FAILED`, or `NOT_AVAILABLE`.
   * - `NOTIFIED` - Indicates that you notified the resource owner about the security issue. Used when the initial reviewer is not the resource owner, and needs intervention from the resource owner.
   * - `SUPPRESSED` - Indicates that you reviewed the finding and don't believe that any action is needed. The finding is no longer updated.
   * - `RESOLVED` - The finding was reviewed and remediated and is now considered resolved.
   *
   * @public
   */
  Status?: WorkflowStatus | undefined;
}

/**
 * Provides a consistent format for Security Hub CSPM findings. `AwsSecurityFinding` format allows you to share findings between Amazon Web Services security services and third-party solutions.
 *
 * > **Note:** A finding is a potential security issue generated either by Amazon Web Services services or by the integrated third-party solutions and standards checks.
 *
 * @public
 */
export interface AwsSecurityFinding {
  /**
   * The schema version that a finding is formatted for. The value is `2018-10-08`.
   *
   * @public
   */
  SchemaVersion: string | undefined;

  /**
   * The security findings provider-specific identifier for a finding.
   *
   * Length Constraints: Minimum length of 1. Maximum length of 512.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The ARN generated by Security Hub CSPM that uniquely identifies a product that generates findings. This can be the ARN for a third-party product that is integrated with Security Hub CSPM, or the ARN for a custom integration.
   *
   * Length Constraints: Minimum length of 12. Maximum length of 2048.
   *
   * @public
   */
  ProductArn: string | undefined;

  /**
   * The name of the product that generated the finding.
   *
   * Security Hub CSPM populates this attribute automatically for each finding. You cannot update this attribute with `BatchImportFindings` or `BatchUpdateFindings`. The exception to this is a custom integration.
   *
   * When you use the Security Hub CSPM console or API to filter findings by product name, you use this attribute.
   *
   * Length Constraints: Minimum length of 1. Maximum length of 128.
   *
   * @public
   */
  ProductName?: string | undefined;

  /**
   * The name of the company for the product that generated the finding.
   *
   * Security Hub CSPM populates this attribute automatically for each finding. You cannot update this attribute with `BatchImportFindings` or `BatchUpdateFindings`. The exception to this is a custom integration.
   *
   * When you use the Security Hub CSPM console or API to filter findings by company name, you use this attribute.
   *
   * Length Constraints: Minimum length of 1. Maximum length of 128.
   *
   * @public
   */
  CompanyName?: string | undefined;

  /**
   * The Region from which the finding was generated.
   *
   * Security Hub CSPM populates this attribute automatically for each finding. You cannot update it using `BatchImportFindings` or `BatchUpdateFindings`.
   *
   * Length Constraints: Minimum length of 1. Maximum length of 16.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The identifier for the solution-specific component (a discrete unit of logic) that generated a finding. In various security findings providers' solutions, this generator can be called a rule, a check, a detector, a plugin, or something else.
   *
   * Length Constraints: Minimum length of 1. Maximum length of 512.
   *
   * @public
   */
  GeneratorId: string | undefined;

  /**
   * The Amazon Web Services account ID that a finding is generated in.
   *
   * Length Constraints: 12.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * One or more finding types in the format of `namespace/category/classifier` that classify a finding.
   *
   * Valid namespace values are: Software and Configuration Checks | TTPs | Effects | Unusual Behaviors | Sensitive Data Identifications
   *
   * Array Members: Maximum number of 50 items.
   *
   * @public
   */
  Types?: string[] | undefined;

  /**
   * Indicates when the security findings provider first observed the potential security issue that a finding captured.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  FirstObservedAt?: string | undefined;

  /**
   * Indicates when the security findings provider most recently observed a change in the resource that is involved in the finding.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  LastObservedAt?: string | undefined;

  /**
   * Indicates when the security findings provider created the potential security issue that a finding captured.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  CreatedAt: string | undefined;

  /**
   * Indicates when the security findings provider last updated the finding record.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  UpdatedAt: string | undefined;

  /**
   * A finding's severity.
   *
   * @public
   */
  Severity?: Severity | undefined;

  /**
   * A finding's confidence. Confidence is defined as the likelihood that a finding accurately identifies the behavior or issue that it was intended to identify.
   *
   * Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent confidence and 100 means 100 percent confidence.
   *
   * @public
   */
  Confidence?: number | undefined;

  /**
   * The level of importance assigned to the resources associated with the finding.
   *
   * A score of 0 means that the underlying resources have no criticality, and a score of 100 is reserved for the most critical resources.
   *
   * @public
   */
  Criticality?: number | undefined;

  /**
   * A finding's title. `Title` is a required property.
   *
   * Length Constraints: Minimum length of 1. Maximum length of 256.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * A finding's description. `Description` is a required property.
   *
   * Length Constraints: Minimum length of 1. Maximum length of 1024.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * A data type that describes the remediation options for a finding.
   *
   * @public
   */
  Remediation?: Remediation | undefined;

  /**
   * A URL that links to a page about the current finding in the security findings provider's solution.
   *
   * @public
   */
  SourceUrl?: string | undefined;

  /**
   * A data type where security findings providers can include additional solution-specific details that aren't part of the defined `AwsSecurityFinding` format.
   *
   * Can contain up to 50 key-value pairs. For each key-value pair, the key can contain up to 128 characters, and the value can contain up to 2048 characters.
   *
   * @public
   */
  ProductFields?: Record<string, string> | undefined;

  /**
   * A list of name/value string pairs associated with the finding. These are custom, user-defined fields added to a finding.
   *
   * Can contain up to 50 key-value pairs. For each key-value pair, the key can contain up to 128 characters, and the value can contain up to 1024 characters.
   *
   * @public
   */
  UserDefinedFields?: Record<string, string> | undefined;

  /**
   * A list of malware related to a finding.
   *
   * Array Members: Maximum number of 5 items.
   *
   * @public
   */
  Malware?: Malware[] | undefined;

  /**
   * The details of network-related information about a finding.
   *
   * @public
   */
  Network?: Network | undefined;

  /**
   * Provides information about a network path that is relevant to a finding. Each entry under `NetworkPath` represents a component of that path.
   *
   * @public
   */
  NetworkPath?: NetworkPathComponent[] | undefined;

  /**
   * The details of process-related information about a finding.
   *
   * @public
   */
  Process?: ProcessDetails | undefined;

  /**
   * Details about the threat detected in a security finding and the file paths that were affected by the threat.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 32 items.
   *
   * @public
   */
  Threats?: Threat[] | undefined;

  /**
   * Threat intelligence details related to a finding.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 5 items.
   *
   * @public
   */
  ThreatIntelIndicators?: ThreatIntelIndicator[] | undefined;

  /**
   * A set of resource data types that describe the resources that the finding refers to.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 32 items.
   *
   * @public
   */
  Resources: Resource[] | undefined;

  /**
   * This data type is exclusive to findings that are generated as the result of a check run against a specific rule in a supported security standard, such as CIS Amazon Web Services Foundations. Contains security standard-related finding details.
   *
   * @public
   */
  Compliance?: Compliance | undefined;

  /**
   * Indicates the veracity of a finding.
   *
   * @public
   */
  VerificationState?: VerificationState | undefined;

  /**
   * The workflow state of a finding.
   *
   * @deprecated This filter is deprecated. Instead, use SeverityLabel or FindingProviderFieldsSeverityLabel.
   * @public
   */
  WorkflowState?: WorkflowState | undefined;

  /**
   * Provides information about the status of the investigation into a finding.
   *
   * @public
   */
  Workflow?: Workflow | undefined;

  /**
   * The record state of a finding.
   *
   * @public
   */
  RecordState?: RecordState | undefined;

  /**
   * A list of related findings.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 10 items.
   *
   * @public
   */
  RelatedFindings?: RelatedFinding[] | undefined;

  /**
   * A user-defined note added to a finding.
   *
   * @public
   */
  Note?: Note | undefined;

  /**
   * Provides a list of vulnerabilities associated with the findings.
   *
   * @public
   */
  Vulnerabilities?: Vulnerability[] | undefined;

  /**
   * Provides an overview of the patch compliance status for an instance against a selected compliance standard.
   *
   * @public
   */
  PatchSummary?: PatchSummary | undefined;

  /**
   * Provides details about an action that affects or that was taken on a resource.
   *
   * @public
   */
  Action?: Action | undefined;

  /**
   * In a `BatchImportFindings` request, finding providers use `FindingProviderFields` to provide and update their own values for confidence, criticality, related findings, severity, and types.
   *
   * @public
   */
  FindingProviderFields?: FindingProviderFields | undefined;

  /**
   * Indicates whether the finding is a sample finding.
   *
   * @public
   */
  Sample?: boolean | undefined;

  /**
   * Provides metadata for the Amazon CodeGuru detector associated with a finding. This field pertains to findings that relate to Lambda functions. Amazon Inspector identifies policy violations and vulnerabilities in Lambda function code based on internal detectors developed in collaboration with Amazon CodeGuru. Security Hub CSPM receives those findings.
   *
   * @public
   */
  GeneratorDetails?: GeneratorDetails | undefined;

  /**
   * A timestamp that indicates when Security Hub CSPM received a finding and begins to process it.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  ProcessedAt?: string | undefined;

  /**
   * The name of the Amazon Web Services account from which a finding was generated.
   *
   * Length Constraints: Minimum length of 1. Maximum length of 50.
   *
   * @public
   */
  AwsAccountName?: string | undefined;

  /**
   * Provides details about an Amazon GuardDuty Extended Threat Detection attack sequence. GuardDuty generates an attack sequence finding when multiple events align to a potentially suspicious activity. To receive GuardDuty attack sequence findings in Security Hub CSPM, you must have GuardDuty enabled. For more information, see [GuardDuty Extended Threat Detection](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-extended-threat-detection.html) in the *Amazon GuardDuty User Guide*.
   *
   * @public
   */
  Detection?: Detection | undefined;
}

/**
 * A keyword filter for querying findings.
 *
 * @public
 */
export interface KeywordFilter {
  /**
   * A value for the keyword.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * The IP filter for querying findings.
 *
 * @public
 */
export interface IpFilter {
  /**
   * A finding's CIDR value.
   *
   * @public
   */
  Cidr?: string | undefined;
}

/**
 * Boolean filter for querying findings.
 *
 * @public
 */
export interface BooleanFilter {
  /**
   * The value of the boolean.
   *
   * @public
   */
  Value?: boolean | undefined;
}

/**
 * A collection of filters that are applied to all active findings aggregated by Security Hub CSPM.
 *
 * You can filter by up to ten finding attributes. For each attribute, you can provide up to 20 filter values.
 *
 * @public
 */
export interface AwsSecurityFindingFilters {
  /**
   * The ARN generated by Security Hub CSPM that uniquely identifies a third-party company (security findings provider) after this provider's product (solution that generates findings) is registered with Security Hub CSPM.
   *
   * @public
   */
  ProductArn?: StringFilter[] | undefined;

  /**
   * The Amazon Web Services account ID in which a finding is generated.
   *
   * @public
   */
  AwsAccountId?: StringFilter[] | undefined;

  /**
   * The security findings provider-specific identifier for a finding.
   *
   * @public
   */
  Id?: StringFilter[] | undefined;

  /**
   * The identifier for the solution-specific component (a discrete unit of logic) that generated a finding. In various security findings providers' solutions, this generator can be called a rule, a check, a detector, a plugin, etc.
   *
   * @public
   */
  GeneratorId?: StringFilter[] | undefined;

  /**
   * The Region from which the finding was generated.
   *
   * @public
   */
  Region?: StringFilter[] | undefined;

  /**
   * A finding type in the format of `namespace/category/classifier` that classifies a finding.
   *
   * @public
   */
  Type?: StringFilter[] | undefined;

  /**
   * A timestamp that indicates when the security findings provider first observed the potential security issue that a finding captured.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  FirstObservedAt?: DateFilter[] | undefined;

  /**
   * A timestamp that indicates when the security findings provider most recently observed a change in the resource that is involved in the finding.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  LastObservedAt?: DateFilter[] | undefined;

  /**
   * A timestamp that indicates when the security findings provider created the potential security issue that a finding reflects.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  CreatedAt?: DateFilter[] | undefined;

  /**
   * A timestamp that indicates when the security findings provider last updated the finding record.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  UpdatedAt?: DateFilter[] | undefined;

  /**
   * The native severity as defined by the security findings provider's solution that generated the finding.
   *
   * @deprecated This filter is deprecated. Instead, use FindingProviderSeverityOriginal.
   * @public
   */
  SeverityProduct?: NumberFilter[] | undefined;

  /**
   * The normalized severity of a finding.
   *
   * @deprecated This filter is deprecated. Instead, use SeverityLabel or FindingProviderFieldsSeverityLabel.
   * @public
   */
  SeverityNormalized?: NumberFilter[] | undefined;

  /**
   * The label of a finding's severity.
   *
   * @public
   */
  SeverityLabel?: StringFilter[] | undefined;

  /**
   * A finding's confidence. Confidence is defined as the likelihood that a finding accurately identifies the behavior or issue that it was intended to identify.
   *
   * Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent confidence and 100 means 100 percent confidence.
   *
   * @public
   */
  Confidence?: NumberFilter[] | undefined;

  /**
   * The level of importance assigned to the resources associated with the finding.
   *
   * A score of 0 means that the underlying resources have no criticality, and a score of 100 is reserved for the most critical resources.
   *
   * @public
   */
  Criticality?: NumberFilter[] | undefined;

  /**
   * A finding's title.
   *
   * @public
   */
  Title?: StringFilter[] | undefined;

  /**
   * A finding's description.
   *
   * @public
   */
  Description?: StringFilter[] | undefined;

  /**
   * The recommendation of what to do about the issue described in a finding.
   *
   * @public
   */
  RecommendationText?: StringFilter[] | undefined;

  /**
   * A URL that links to a page about the current finding in the security findings provider's solution.
   *
   * @public
   */
  SourceUrl?: StringFilter[] | undefined;

  /**
   * A data type where security findings providers can include additional solution-specific details that aren't part of the defined `AwsSecurityFinding` format.
   *
   * @public
   */
  ProductFields?: MapFilter[] | undefined;

  /**
   * The name of the solution (product) that generates findings.
   *
   * @public
   */
  ProductName?: StringFilter[] | undefined;

  /**
   * The name of the findings provider (company) that owns the solution (product) that generates findings.
   *
   * @public
   */
  CompanyName?: StringFilter[] | undefined;

  /**
   * A list of name/value string pairs associated with the finding. These are custom, user-defined fields added to a finding.
   *
   * @public
   */
  UserDefinedFields?: MapFilter[] | undefined;

  /**
   * The name of the malware that was observed.
   *
   * @public
   */
  MalwareName?: StringFilter[] | undefined;

  /**
   * The type of the malware that was observed.
   *
   * @public
   */
  MalwareType?: StringFilter[] | undefined;

  /**
   * The filesystem path of the malware that was observed.
   *
   * @public
   */
  MalwarePath?: StringFilter[] | undefined;

  /**
   * The state of the malware that was observed.
   *
   * @public
   */
  MalwareState?: StringFilter[] | undefined;

  /**
   * Indicates the direction of network traffic associated with a finding.
   *
   * @public
   */
  NetworkDirection?: StringFilter[] | undefined;

  /**
   * The protocol of network-related information about a finding.
   *
   * @public
   */
  NetworkProtocol?: StringFilter[] | undefined;

  /**
   * The source IPv4 address of network-related information about a finding.
   *
   * @public
   */
  NetworkSourceIpV4?: IpFilter[] | undefined;

  /**
   * The source IPv6 address of network-related information about a finding.
   *
   * @public
   */
  NetworkSourceIpV6?: IpFilter[] | undefined;

  /**
   * The source port of network-related information about a finding.
   *
   * @public
   */
  NetworkSourcePort?: NumberFilter[] | undefined;

  /**
   * The source domain of network-related information about a finding.
   *
   * @public
   */
  NetworkSourceDomain?: StringFilter[] | undefined;

  /**
   * The source media access control (MAC) address of network-related information about a finding.
   *
   * @public
   */
  NetworkSourceMac?: StringFilter[] | undefined;

  /**
   * The destination IPv4 address of network-related information about a finding.
   *
   * @public
   */
  NetworkDestinationIpV4?: IpFilter[] | undefined;

  /**
   * The destination IPv6 address of network-related information about a finding.
   *
   * @public
   */
  NetworkDestinationIpV6?: IpFilter[] | undefined;

  /**
   * The destination port of network-related information about a finding.
   *
   * @public
   */
  NetworkDestinationPort?: NumberFilter[] | undefined;

  /**
   * The destination domain of network-related information about a finding.
   *
   * @public
   */
  NetworkDestinationDomain?: StringFilter[] | undefined;

  /**
   * The name of the process.
   *
   * @public
   */
  ProcessName?: StringFilter[] | undefined;

  /**
   * The path to the process executable.
   *
   * @public
   */
  ProcessPath?: StringFilter[] | undefined;

  /**
   * The process ID.
   *
   * @public
   */
  ProcessPid?: NumberFilter[] | undefined;

  /**
   * The parent process ID. This field accepts positive integers between `O` and `2147483647`.
   *
   * @public
   */
  ProcessParentPid?: NumberFilter[] | undefined;

  /**
   * A timestamp that identifies when the process was launched.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  ProcessLaunchedAt?: DateFilter[] | undefined;

  /**
   * A timestamp that identifies when the process was terminated.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  ProcessTerminatedAt?: DateFilter[] | undefined;

  /**
   * The type of a threat intelligence indicator.
   *
   * @public
   */
  ThreatIntelIndicatorType?: StringFilter[] | undefined;

  /**
   * The value of a threat intelligence indicator.
   *
   * @public
   */
  ThreatIntelIndicatorValue?: StringFilter[] | undefined;

  /**
   * The category of a threat intelligence indicator.
   *
   * @public
   */
  ThreatIntelIndicatorCategory?: StringFilter[] | undefined;

  /**
   * A timestamp that identifies the last observation of a threat intelligence indicator.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  ThreatIntelIndicatorLastObservedAt?: DateFilter[] | undefined;

  /**
   * The source of the threat intelligence.
   *
   * @public
   */
  ThreatIntelIndicatorSource?: StringFilter[] | undefined;

  /**
   * The URL for more details from the source of the threat intelligence.
   *
   * @public
   */
  ThreatIntelIndicatorSourceUrl?: StringFilter[] | undefined;

  /**
   * Specifies the type of the resource that details are provided for.
   *
   * @public
   */
  ResourceType?: StringFilter[] | undefined;

  /**
   * The canonical identifier for the given resource type.
   *
   * @public
   */
  ResourceId?: StringFilter[] | undefined;

  /**
   * The canonical Amazon Web Services partition name that the Region is assigned to.
   *
   * @public
   */
  ResourcePartition?: StringFilter[] | undefined;

  /**
   * The canonical Amazon Web Services external Region name where this resource is located.
   *
   * @public
   */
  ResourceRegion?: StringFilter[] | undefined;

  /**
   * A list of Amazon Web Services tags associated with a resource at the time the finding was processed.
   *
   * @public
   */
  ResourceTags?: MapFilter[] | undefined;

  /**
   * The instance type of the instance.
   *
   * @public
   */
  ResourceAwsEc2InstanceType?: StringFilter[] | undefined;

  /**
   * The Amazon Machine Image (AMI) ID of the instance.
   *
   * @public
   */
  ResourceAwsEc2InstanceImageId?: StringFilter[] | undefined;

  /**
   * The IPv4 addresses associated with the instance.
   *
   * @public
   */
  ResourceAwsEc2InstanceIpV4Addresses?: IpFilter[] | undefined;

  /**
   * The IPv6 addresses associated with the instance.
   *
   * @public
   */
  ResourceAwsEc2InstanceIpV6Addresses?: IpFilter[] | undefined;

  /**
   * The key name associated with the instance.
   *
   * @public
   */
  ResourceAwsEc2InstanceKeyName?: StringFilter[] | undefined;

  /**
   * The IAM profile ARN of the instance.
   *
   * @public
   */
  ResourceAwsEc2InstanceIamInstanceProfileArn?: StringFilter[] | undefined;

  /**
   * The identifier of the VPC that the instance was launched in.
   *
   * @public
   */
  ResourceAwsEc2InstanceVpcId?: StringFilter[] | undefined;

  /**
   * The identifier of the subnet that the instance was launched in.
   *
   * @public
   */
  ResourceAwsEc2InstanceSubnetId?: StringFilter[] | undefined;

  /**
   * The date and time the instance was launched.
   *
   * @public
   */
  ResourceAwsEc2InstanceLaunchedAt?: DateFilter[] | undefined;

  /**
   * The canonical user ID of the owner of the S3 bucket.
   *
   * @public
   */
  ResourceAwsS3BucketOwnerId?: StringFilter[] | undefined;

  /**
   * The display name of the owner of the S3 bucket.
   *
   * @public
   */
  ResourceAwsS3BucketOwnerName?: StringFilter[] | undefined;

  /**
   * The user associated with the IAM access key related to a finding.
   *
   * @deprecated This filter is deprecated. Instead, use ResourceAwsIamAccessKeyPrincipalName.
   * @public
   */
  ResourceAwsIamAccessKeyUserName?: StringFilter[] | undefined;

  /**
   * The name of the principal that is associated with an IAM access key.
   *
   * @public
   */
  ResourceAwsIamAccessKeyPrincipalName?: StringFilter[] | undefined;

  /**
   * The status of the IAM access key related to a finding.
   *
   * @public
   */
  ResourceAwsIamAccessKeyStatus?: StringFilter[] | undefined;

  /**
   * The creation date/time of the IAM access key related to a finding.
   *
   * @public
   */
  ResourceAwsIamAccessKeyCreatedAt?: DateFilter[] | undefined;

  /**
   * The name of an IAM user.
   *
   * @public
   */
  ResourceAwsIamUserUserName?: StringFilter[] | undefined;

  /**
   * The name of the container related to a finding.
   *
   * @public
   */
  ResourceContainerName?: StringFilter[] | undefined;

  /**
   * The identifier of the image related to a finding.
   *
   * @public
   */
  ResourceContainerImageId?: StringFilter[] | undefined;

  /**
   * The name of the image related to a finding.
   *
   * @public
   */
  ResourceContainerImageName?: StringFilter[] | undefined;

  /**
   * A timestamp that identifies when the container was started.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  ResourceContainerLaunchedAt?: DateFilter[] | undefined;

  /**
   * The details of a resource that doesn't have a specific subfield for the resource type defined.
   *
   * @public
   */
  ResourceDetailsOther?: MapFilter[] | undefined;

  /**
   * Exclusive to findings that are generated as the result of a check run against a specific rule in a supported standard, such as CIS Amazon Web Services Foundations. Contains security standard-related finding details.
   *
   * @public
   */
  ComplianceStatus?: StringFilter[] | undefined;

  /**
   * The veracity of a finding.
   *
   * @public
   */
  VerificationState?: StringFilter[] | undefined;

  /**
   * The workflow state of a finding.
   *
   * Note that this field is deprecated. To search for a finding based on its workflow status, use `WorkflowStatus`.
   *
   * @public
   */
  WorkflowState?: StringFilter[] | undefined;

  /**
   * The status of the investigation into a finding. Allowed values are the following.
   *
   * - `NEW` - The initial state of a finding, before it is reviewed.
   *
   *   Security Hub CSPM also resets the workflow status from `NOTIFIED` or `RESOLVED` to `NEW` in the following cases:
   *
   *   - `RecordState` changes from `ARCHIVED` to `ACTIVE`.
   *   - `Compliance.Status` changes from `PASSED` to either `WARNING`, `FAILED`, or `NOT_AVAILABLE`.
   * - `NOTIFIED` - Indicates that the resource owner has been notified about the security issue. Used when the initial reviewer is not the resource owner, and needs intervention from the resource owner.
   *
   *   If one of the following occurs, the workflow status is changed automatically from `NOTIFIED` to `NEW`:
   *
   *   - `RecordState` changes from `ARCHIVED` to `ACTIVE`.
   *   - `Compliance.Status` changes from `PASSED` to `FAILED`, `WARNING`, or `NOT_AVAILABLE`.
   * - `SUPPRESSED` - Indicates that you reviewed the finding and don't believe that any action is needed.
   *
   *   The workflow status of a `SUPPRESSED` finding does not change if `RecordState` changes from `ARCHIVED` to `ACTIVE`.
   * - `RESOLVED` - The finding was reviewed and remediated and is now considered resolved.
   *
   *   The finding remains `RESOLVED` unless one of the following occurs:
   *
   *   - `RecordState` changes from `ARCHIVED` to `ACTIVE`.
   *   - `Compliance.Status` changes from `PASSED` to `FAILED`, `WARNING`, or `NOT_AVAILABLE`.
   *
   *   In those cases, the workflow status is automatically reset to `NEW`.
   *
   *   For findings from controls, if `Compliance.Status` is `PASSED`, then Security Hub CSPM automatically sets the workflow status to `RESOLVED`.
   *
   * @public
   */
  WorkflowStatus?: StringFilter[] | undefined;

  /**
   * The updated record state for the finding.
   *
   * @public
   */
  RecordState?: StringFilter[] | undefined;

  /**
   * The ARN of the solution that generated a related finding.
   *
   * @public
   */
  RelatedFindingsProductArn?: StringFilter[] | undefined;

  /**
   * The solution-generated identifier for a related finding.
   *
   * @public
   */
  RelatedFindingsId?: StringFilter[] | undefined;

  /**
   * The text of a note.
   *
   * @public
   */
  NoteText?: StringFilter[] | undefined;

  /**
   * The timestamp of when the note was updated.
   *
   * @public
   */
  NoteUpdatedAt?: DateFilter[] | undefined;

  /**
   * The principal that created a note.
   *
   * @public
   */
  NoteUpdatedBy?: StringFilter[] | undefined;

  /**
   * A keyword for a finding.
   *
   * @deprecated The Keyword property is deprecated.
   * @public
   */
  Keyword?: KeywordFilter[] | undefined;

  /**
   * The finding provider value for the finding confidence. Confidence is defined as the likelihood that a finding accurately identifies the behavior or issue that it was intended to identify.
   *
   * Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent confidence and 100 means 100 percent confidence.
   *
   * @public
   */
  FindingProviderFieldsConfidence?: NumberFilter[] | undefined;

  /**
   * The finding provider value for the level of importance assigned to the resources associated with the findings.
   *
   * A score of 0 means that the underlying resources have no criticality, and a score of 100 is reserved for the most critical resources.
   *
   * @public
   */
  FindingProviderFieldsCriticality?: NumberFilter[] | undefined;

  /**
   * The finding identifier of a related finding that is identified by the finding provider.
   *
   * @public
   */
  FindingProviderFieldsRelatedFindingsId?: StringFilter[] | undefined;

  /**
   * The ARN of the solution that generated a related finding that is identified by the finding provider.
   *
   * @public
   */
  FindingProviderFieldsRelatedFindingsProductArn?: StringFilter[] | undefined;

  /**
   * The finding provider value for the severity label.
   *
   * @public
   */
  FindingProviderFieldsSeverityLabel?: StringFilter[] | undefined;

  /**
   * The finding provider's original value for the severity.
   *
   * @public
   */
  FindingProviderFieldsSeverityOriginal?: StringFilter[] | undefined;

  /**
   * One or more finding types that the finding provider assigned to the finding. Uses the format of `namespace/category/classifier` that classify a finding.
   *
   * Valid namespace values are: Software and Configuration Checks | TTPs | Effects | Unusual Behaviors | Sensitive Data Identifications
   *
   * @public
   */
  FindingProviderFieldsTypes?: StringFilter[] | undefined;

  /**
   * Indicates whether or not sample findings are included in the filter results.
   *
   * @public
   */
  Sample?: BooleanFilter[] | undefined;

  /**
   * The unique identifier of a control across standards. Values for this field typically consist of an Amazon Web Services service and a number, such as APIGateway.5.
   *
   * @public
   */
  ComplianceSecurityControlId?: StringFilter[] | undefined;

  /**
   * The unique identifier of a standard in which a control is enabled. This field consists of the resource portion of the Amazon Resource Name (ARN) returned for a standard in the [DescribeStandards](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html) API response.
   *
   * @public
   */
  ComplianceAssociatedStandardsId?: StringFilter[] | undefined;

  /**
   * Indicates whether a software vulnerability in your environment has a known exploit. You can filter findings by this field only if you use Security Hub CSPM and Amazon Inspector.
   *
   * @public
   */
  VulnerabilitiesExploitAvailable?: StringFilter[] | undefined;

  /**
   * Indicates whether a vulnerability is fixed in a newer version of the affected software packages. You can filter findings by this field only if you use Security Hub CSPM and Amazon Inspector.
   *
   * @public
   */
  VulnerabilitiesFixAvailable?: StringFilter[] | undefined;

  /**
   * The name of a security control parameter.
   *
   * @public
   */
  ComplianceSecurityControlParametersName?: StringFilter[] | undefined;

  /**
   * The current value of a security control parameter.
   *
   * @public
   */
  ComplianceSecurityControlParametersValue?: StringFilter[] | undefined;

  /**
   * The name of the Amazon Web Services account in which a finding is generated.
   *
   * @public
   */
  AwsAccountName?: StringFilter[] | undefined;

  /**
   * The name of the application that is related to a finding.
   *
   * @public
   */
  ResourceApplicationName?: StringFilter[] | undefined;

  /**
   * The ARN of the application that is related to a finding.
   *
   * @public
   */
  ResourceApplicationArn?: StringFilter[] | undefined;

  /**
   * The unique identifier of the account that owns the resource that the finding applies to, for example, Azure Subscription Id or Amazon Web Services Account Id
   *
   * @public
   */
  ResourceOwnerAccountId?: StringFilter[] | undefined;

  /**
   * The unique identifier of the organization that owns the resource that the finding applies to, for example, Azure Tenant Id
   *
   * @public
   */
  ResourceOwnerOrgId?: StringFilter[] | undefined;

  /**
   * The cloud provider that the resource belongs to. Valid values are `AWS` and `Azure`.
   *
   * @public
   */
  ResourceProvider?: StringFilter[] | undefined;
}

/**
 * Identifies which finding to get the finding history for.
 *
 * @public
 */
export interface AwsSecurityFindingIdentifier {
  /**
   * The identifier of the finding that was specified by the finding provider.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The ARN generated by Security Hub CSPM that uniquely identifies a product that generates findings. This can be the ARN for a third-party product that is integrated with Security Hub CSPM, or the ARN for a custom integration.
   *
   * @public
   */
  ProductArn: string | undefined;
}

/**
 * The scope configuration for an Azure connector, defining the tenant or subscription scope.
 *
 * @public
 */
export interface AzureScopeConfiguration {
  /**
   * The type of scope. Valid values are `tenant` and `subscription`.
   *
   * @public
   */
  ScopeType: ScopeType | undefined;

  /**
   * The list of scope values, such as subscription IDs, when the scope type is `subscription`.
   *
   * @public
   */
  ScopeValues?: string[] | undefined;
}

/**
 * The detailed Azure configuration for a connector.
 *
 * @public
 */
export interface AzureDetail {
  /**
   * The ARN of the multi-cloud configuration connector used to establish the connection to Azure.
   *
   * @public
   */
  AWSConfigConnectorArn: string | undefined;

  /**
   * The scope configuration that defines which Azure resources are monitored.
   *
   * @public
   */
  ScopeConfiguration: AzureScopeConfiguration | undefined;

  /**
   * The list of Azure regions being monitored.
   *
   * @public
   */
  AzureRegions: string[] | undefined;
}

/**
 * The configuration for connecting to an Azure environment.
 *
 * @public
 */
export interface AzureProviderConfiguration {
  /**
   * The ARN of the multi-cloud configuration connector used to establish the connection to Azure.
   *
   * @public
   */
  AWSConfigConnectorArn: string | undefined;

  /**
   * The scope configuration that defines which Azure resources are monitored.
   *
   * @public
   */
  ScopeConfiguration: AzureScopeConfiguration | undefined;

  /**
   * The list of Azure regions to monitor.
   *
   * @public
   */
  AzureRegions: string[] | undefined;
}

/**
 * The configuration for updating an Azure connector's scope and regions.
 *
 * @public
 */
export interface AzureUpdateConfiguration {
  /**
   * The updated scope configuration.
   *
   * @public
   */
  ScopeConfiguration: AzureScopeConfiguration | undefined;

  /**
   * The updated list of Azure regions to monitor.
   *
   * @public
   */
  AzureRegions: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteAutomationRulesRequest {
  /**
   * A list of Amazon Resource Names (ARNs) for the rules that are to be deleted.
   *
   * @public
   */
  AutomationRulesArns: string[] | undefined;
}

/**
 * A list of objects containing `RuleArn`, `ErrorCode`, and `ErrorMessage`. This parameter tells you which automation rules the request didn't process and why.
 *
 * @public
 */
export interface UnprocessedAutomationRule {
  /**
   * The Amazon Resource Name (ARN) for the unprocessed automation rule.
   *
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * The error code associated with the unprocessed automation rule.
   *
   * @public
   */
  ErrorCode?: number | undefined;

  /**
   * An error message describing why a request didn't process a specific rule.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteAutomationRulesResponse {
  /**
   * A list of properly processed rule ARNs.
   *
   * @public
   */
  ProcessedAutomationRules?: string[] | undefined;

  /**
   * A list of objects containing `RuleArn`, `ErrorCode`, and `ErrorMessage`. This parameter tells you which automation rules the request didn't delete and why.
   *
   * @public
   */
  UnprocessedAutomationRules?: UnprocessedAutomationRule[] | undefined;
}

/**
 * @public
 */
export interface BatchDisableStandardsRequest {
  /**
   * The ARNs of the standards subscriptions to disable.
   *
   * @public
   */
  StandardsSubscriptionArns: string[] | undefined;
}

/**
 * The reason for the current status of your subscription to the standard.
 *
 * @public
 */
export interface StandardsStatusReason {
  /**
   * The reason code that represents the reason for the current status of a standard subscription.
   *
   * @public
   */
  StatusReasonCode: StatusReasonCode | undefined;
}

/**
 * A resource that represents your subscription to a supported standard.
 *
 * @public
 */
export interface StandardsSubscription {
  /**
   * The ARN of the resource that represents your subscription to the standard.
   *
   * @public
   */
  StandardsSubscriptionArn: string | undefined;

  /**
   * The ARN of the standard.
   *
   * @public
   */
  StandardsArn: string | undefined;

  /**
   * A key-value pair of input for the standard.
   *
   * @public
   */
  StandardsInput: Record<string, string> | undefined;

  /**
   * The status of your subscription to the standard. Possible values are:
   *
   * - `PENDING` - The standard is in the process of being enabled. Or the standard is already enabled and Security Hub CSPM is adding new controls to the standard.
   * - `READY` - The standard is enabled.
   * - `INCOMPLETE` - The standard could not be enabled completely. One or more errors (`StandardsStatusReason`) occurred when Security Hub CSPM attempted to enable the standard.
   * - `DELETING` - The standard is in the process of being disabled.
   * - `FAILED` - The standard could not be disabled. One or more errors (`StandardsStatusReason`) occurred when Security Hub CSPM attempted to disable the standard.
   *
   * @public
   */
  StandardsStatus: StandardsStatus | undefined;

  /**
   * Specifies whether you can retrieve information about and configure individual controls that apply to the standard. Possible values are:
   *
   * - `READY_FOR_UPDATES` - Controls in the standard can be retrieved and configured.
   * - `NOT_READY_FOR_UPDATES` - Controls in the standard cannot be retrieved or configured.
   *
   * @public
   */
  StandardsControlsUpdatable?: StandardsControlsUpdatable | undefined;

  /**
   * The reason for the current status.
   *
   * @public
   */
  StandardsStatusReason?: StandardsStatusReason | undefined;

  /**
   * The cloud provider whose resources the standard evaluates. For example, `AWS` or `Azure`.
   *
   * @public
   */
  Provider?: StandardsProvider | undefined;
}

/**
 * @public
 */
export interface BatchDisableStandardsResponse {
  /**
   * The details of the standards subscriptions that were disabled.
   *
   * @public
   */
  StandardsSubscriptions?: StandardsSubscription[] | undefined;
}

/**
 * The standard that you want to enable.
 *
 * @public
 */
export interface StandardsSubscriptionRequest {
  /**
   * The ARN of the standard that you want to enable. To view the list of available standards and their ARNs, use the `DescribeStandards` operation.
   *
   * @public
   */
  StandardsArn: string | undefined;

  /**
   * A key-value pair of input for the standard.
   *
   * @public
   */
  StandardsInput?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface BatchEnableStandardsRequest {
  /**
   * The list of standards checks to enable.
   *
   * @public
   */
  StandardsSubscriptionRequests: StandardsSubscriptionRequest[] | undefined;
}

/**
 * @public
 */
export interface BatchEnableStandardsResponse {
  /**
   * The details of the standards subscriptions that were enabled.
   *
   * @public
   */
  StandardsSubscriptions?: StandardsSubscription[] | undefined;
}

/**
 * @public
 */
export interface BatchGetAutomationRulesRequest {
  /**
   * A list of rule ARNs to get details for.
   *
   * @public
   */
  AutomationRulesArns: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetAutomationRulesResponse {
  /**
   * A list of rule details for the provided rule ARNs.
   *
   * @public
   */
  Rules?: AutomationRulesConfig[] | undefined;

  /**
   * A list of objects containing `RuleArn`, `ErrorCode`, and `ErrorMessage`. This parameter tells you which automation rules the request didn't retrieve and why.
   *
   * @public
   */
  UnprocessedAutomationRules?: UnprocessedAutomationRule[] | undefined;
}

/**
 * The target account, organizational unit, or the root that is associated with an Security Hub CSPM configuration. The configuration can be a configuration policy or self-managed behavior.
 *
 * @public
 */
export type Target =
  | Target.AccountIdMember
  | Target.OrganizationalUnitIdMember
  | Target.RootIdMember
  | Target.$UnknownMember;

/**
 * @public
 */
export namespace Target {
  /**
   * The Amazon Web Services account ID of the target account.
   *
   * @public
   */
  export interface AccountIdMember {
    AccountId: string;
    OrganizationalUnitId?: never;
    RootId?: never;
    $unknown?: never;
  }

  /**
   * The organizational unit ID of the target organizational unit.
   *
   * @public
   */
  export interface OrganizationalUnitIdMember {
    AccountId?: never;
    OrganizationalUnitId: string;
    RootId?: never;
    $unknown?: never;
  }

  /**
   * The ID of the organization root.
   *
   * @public
   */
  export interface RootIdMember {
    AccountId?: never;
    OrganizationalUnitId?: never;
    RootId: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AccountId?: never;
    OrganizationalUnitId?: never;
    RootId?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    AccountId: (value: string) => T;
    OrganizationalUnitId: (value: string) => T;
    RootId: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Provides details about the association between an Security Hub CSPM configuration and a target account, organizational unit, or the root. An association can exist between a target and a configuration policy, or between a target and self-managed behavior.
 *
 * @public
 */
export interface ConfigurationPolicyAssociation {
  /**
   * The target account, organizational unit, or the root.
   *
   * @public
   */
  Target?: Target | undefined;
}

/**
 * @public
 */
export interface BatchGetConfigurationPolicyAssociationsRequest {
  /**
   * Specifies one or more target account IDs, organizational unit (OU) IDs, or the root ID to retrieve associations for.
   *
   * @public
   */
  ConfigurationPolicyAssociationIdentifiers: ConfigurationPolicyAssociation[] | undefined;
}

/**
 * An object that contains the details of a configuration policy association that’s returned in a `ListConfigurationPolicyAssociations` request.
 *
 * @public
 */
export interface ConfigurationPolicyAssociationSummary {
  /**
   * The universally unique identifier (UUID) of the configuration policy.
   *
   * @public
   */
  ConfigurationPolicyId?: string | undefined;

  /**
   * The identifier of the target account, organizational unit, or the root.
   *
   * @public
   */
  TargetId?: string | undefined;

  /**
   * Specifies whether the target is an Amazon Web Services account, organizational unit, or the root.
   *
   * @public
   */
  TargetType?: TargetType | undefined;

  /**
   * Indicates whether the association between the specified target and the configuration was directly applied by the Security Hub CSPM delegated administrator or inherited from a parent.
   *
   * @public
   */
  AssociationType?: AssociationType | undefined;

  /**
   * The date and time, in UTC and ISO 8601 format, that the configuration policy association was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The current status of the association between the specified target and the configuration.
   *
   * @public
   */
  AssociationStatus?: ConfigurationPolicyAssociationStatus | undefined;

  /**
   * The explanation for a `FAILED` value for `AssociationStatus`.
   *
   * @public
   */
  AssociationStatusMessage?: string | undefined;
}

/**
 * An array of configuration policy associations, one for each configuration policy association identifier, that was specified in a `BatchGetConfigurationPolicyAssociations` request but couldn’t be processed due to an error.
 *
 * @public
 */
export interface UnprocessedConfigurationPolicyAssociation {
  /**
   * Configuration policy association identifiers that were specified in a `BatchGetConfigurationPolicyAssociations` request but couldn’t be processed due to an error.
   *
   * @public
   */
  ConfigurationPolicyAssociationIdentifiers?: ConfigurationPolicyAssociation | undefined;

  /**
   * An HTTP status code that identifies why the configuration policy association failed.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * A string that identifies why the configuration policy association failed.
   *
   * @public
   */
  ErrorReason?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetConfigurationPolicyAssociationsResponse {
  /**
   * Describes associations for the target accounts, OUs, or the root.
   *
   * @public
   */
  ConfigurationPolicyAssociations?: ConfigurationPolicyAssociationSummary[] | undefined;

  /**
   * An array of configuration policy associations, one for each configuration policy association identifier, that was specified in the request but couldn’t be processed due to an error.
   *
   * @public
   */
  UnprocessedConfigurationPolicyAssociations?: UnprocessedConfigurationPolicyAssociation[] | undefined;
}

/**
 * @public
 */
export interface BatchGetSecurityControlsRequest {
  /**
   * A list of security controls (identified with `SecurityControlId`, `SecurityControlArn`, or a mix of both parameters). The security control ID or Amazon Resource Name (ARN) is the same across standards.
   *
   * @public
   */
  SecurityControlIds: string[] | undefined;
}

/**
 * An object that includes the data type of a security control parameter and its current value.
 *
 * @public
 */
export type ParameterValue =
  | ParameterValue.BooleanMember
  | ParameterValue.DoubleMember
  | ParameterValue.EnumMember
  | ParameterValue.EnumListMember
  | ParameterValue.IntegerMember
  | ParameterValue.IntegerListMember
  | ParameterValue.StringMember
  | ParameterValue.StringListMember
  | ParameterValue.$UnknownMember;

/**
 * @public
 */
export namespace ParameterValue {
  /**
   * A control parameter that is an integer.
   *
   * @public
   */
  export interface IntegerMember {
    Integer: number;
    IntegerList?: never;
    Double?: never;
    String?: never;
    StringList?: never;
    Boolean?: never;
    Enum?: never;
    EnumList?: never;
    $unknown?: never;
  }

  /**
   * A control parameter that is a list of integers.
   *
   * @public
   */
  export interface IntegerListMember {
    Integer?: never;
    IntegerList: number[];
    Double?: never;
    String?: never;
    StringList?: never;
    Boolean?: never;
    Enum?: never;
    EnumList?: never;
    $unknown?: never;
  }

  /**
   * A control parameter that is a double.
   *
   * @public
   */
  export interface DoubleMember {
    Integer?: never;
    IntegerList?: never;
    Double: number;
    String?: never;
    StringList?: never;
    Boolean?: never;
    Enum?: never;
    EnumList?: never;
    $unknown?: never;
  }

  /**
   * A control parameter that is a string.
   *
   * @public
   */
  export interface StringMember {
    Integer?: never;
    IntegerList?: never;
    Double?: never;
    String: string;
    StringList?: never;
    Boolean?: never;
    Enum?: never;
    EnumList?: never;
    $unknown?: never;
  }

  /**
   * A control parameter that is a list of strings.
   *
   * @public
   */
  export interface StringListMember {
    Integer?: never;
    IntegerList?: never;
    Double?: never;
    String?: never;
    StringList: string[];
    Boolean?: never;
    Enum?: never;
    EnumList?: never;
    $unknown?: never;
  }

  /**
   * A control parameter that is a boolean.
   *
   * @public
   */
  export interface BooleanMember {
    Integer?: never;
    IntegerList?: never;
    Double?: never;
    String?: never;
    StringList?: never;
    Boolean: boolean;
    Enum?: never;
    EnumList?: never;
    $unknown?: never;
  }

  /**
   * A control parameter that is an enum.
   *
   * @public
   */
  export interface EnumMember {
    Integer?: never;
    IntegerList?: never;
    Double?: never;
    String?: never;
    StringList?: never;
    Boolean?: never;
    Enum: string;
    EnumList?: never;
    $unknown?: never;
  }

  /**
   * A control parameter that is a list of enums.
   *
   * @public
   */
  export interface EnumListMember {
    Integer?: never;
    IntegerList?: never;
    Double?: never;
    String?: never;
    StringList?: never;
    Boolean?: never;
    Enum?: never;
    EnumList: string[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Integer?: never;
    IntegerList?: never;
    Double?: never;
    String?: never;
    StringList?: never;
    Boolean?: never;
    Enum?: never;
    EnumList?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Integer: (value: number) => T;
    IntegerList: (value: number[]) => T;
    Double: (value: number) => T;
    String: (value: string) => T;
    StringList: (value: string[]) => T;
    Boolean: (value: boolean) => T;
    Enum: (value: string) => T;
    EnumList: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An object that provides the current value of a security control parameter and identifies whether it has been customized.
 *
 * @public
 */
export interface ParameterConfiguration {
  /**
   * Identifies whether a control parameter uses a custom user-defined value or subscribes to the default Security Hub CSPM behavior.
   *
   * When `ValueType` is set equal to `DEFAULT`, the default behavior can be a specific Security Hub CSPM default value, or the default behavior can be to ignore a specific parameter. When `ValueType` is set equal to `DEFAULT`, Security Hub CSPM ignores user-provided input for the `Value` field.
   *
   * When `ValueType` is set equal to `CUSTOM`, the `Value` field can't be empty.
   *
   * @public
   */
  ValueType: ParameterValueType | undefined;

  /**
   * The current value of a control parameter.
   *
   * @public
   */
  Value?: ParameterValue | undefined;
}

/**
 * A security control in Security Hub CSPM describes a security best practice related to a specific resource.
 *
 * @public
 */
export interface SecurityControl {
  /**
   * The unique identifier of a security control across standards. Values for this field typically consist of an Amazon Web Services service name and a number, such as APIGateway.3.
   *
   * @public
   */
  SecurityControlId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for a security control across standards, such as `arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1`. This parameter doesn't mention a specific standard.
   *
   * @public
   */
  SecurityControlArn: string | undefined;

  /**
   * The title of a security control.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * The description of a security control across standards. This typically summarizes how Security Hub CSPM evaluates the control and the conditions under which it produces a failed finding. This parameter doesn't reference a specific standard.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * A link to Security Hub CSPM documentation that explains how to remediate a failed finding for a security control.
   *
   * @public
   */
  RemediationUrl: string | undefined;

  /**
   * The severity of a security control. For more information about how Security Hub CSPM determines control severity, see [Assigning severity to control findings](https://docs.aws.amazon.com/securityhub/latest/userguide/controls-findings-create-update.html#control-findings-severity) in the *Security Hub CSPM User Guide*.
   *
   * @public
   */
  SeverityRating: SeverityRating | undefined;

  /**
   * The enablement status of a security control in a specific standard.
   *
   * @public
   */
  SecurityControlStatus: ControlStatus | undefined;

  /**
   * Identifies whether customizable properties of a security control are reflected in Security Hub CSPM findings. A status of `READY` indicates that Security Hub CSPM uses the current control parameter values when running security checks of the control. A status of `UPDATING` indicates that all security checks might not use the current parameter values.
   *
   * @public
   */
  UpdateStatus?: UpdateStatus | undefined;

  /**
   * An object that identifies the name of a control parameter, its current value, and whether it has been customized.
   *
   * @public
   */
  Parameters?: Record<string, ParameterConfiguration> | undefined;

  /**
   * The most recent reason for updating the customizable properties of a security control. This differs from the `UpdateReason` field of the [`BatchUpdateStandardsControlAssociations`](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateStandardsControlAssociations.html) API, which tracks the reason for updating the enablement status of a control. This field accepts alphanumeric characters in addition to white spaces, dashes, and underscores.
   *
   * @public
   */
  LastUpdateReason?: string | undefined;

  /**
   * The cloud provider whose resources the security control evaluates. For example, `AWS` or `Azure`.
   *
   * @public
   */
  Provider?: SecurityControlsProvider | undefined;
}

/**
 * Provides details about a security control for which a response couldn't be returned.
 *
 * @public
 */
export interface UnprocessedSecurityControl {
  /**
   * The control (identified with `SecurityControlId`, `SecurityControlArn`, or a mix of both parameters) for which a response couldn't be returned.
   *
   * @public
   */
  SecurityControlId: string | undefined;

  /**
   * The error code for the unprocessed security control. The `NOT_FOUND` value has been deprecated and replaced by the `RESOURCE_NOT_FOUND` value.
   *
   * @public
   */
  ErrorCode: UnprocessedErrorCode | undefined;

  /**
   * The reason why the security control was unprocessed.
   *
   * @public
   */
  ErrorReason?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetSecurityControlsResponse {
  /**
   * An array that returns the identifier, Amazon Resource Name (ARN), and other details about a security control. The same information is returned whether the request includes `SecurityControlId` or `SecurityControlArn`.
   *
   * @public
   */
  SecurityControls: SecurityControl[] | undefined;

  /**
   * A security control (identified with `SecurityControlId`, `SecurityControlArn`, or a mix of both parameters) for which details cannot be returned.
   *
   * @public
   */
  UnprocessedIds?: UnprocessedSecurityControl[] | undefined;
}

/**
 * An array with one or more objects that includes a security control (identified with `SecurityControlId`, `SecurityControlArn`, or a mix of both parameters) and the Amazon Resource Name (ARN) of a standard. The security control ID or ARN is the same across standards.
 *
 * @public
 */
export interface StandardsControlAssociationId {
  /**
   * The unique identifier (identified with `SecurityControlId`, `SecurityControlArn`, or a mix of both parameters) of a security control across standards.
   *
   * @public
   */
  SecurityControlId: string | undefined;

  /**
   * The ARN of a standard.
   *
   * @public
   */
  StandardsArn: string | undefined;
}

/**
 * @public
 */
export interface BatchGetStandardsControlAssociationsRequest {
  /**
   * An array with one or more objects that includes a security control (identified with `SecurityControlId`, `SecurityControlArn`, or a mix of both parameters) and the Amazon Resource Name (ARN) of a standard. This field is used to query the enablement status of a control in a specified standard. The security control ID or ARN is the same across standards.
   *
   * @public
   */
  StandardsControlAssociationIds: StandardsControlAssociationId[] | undefined;
}

/**
 * Provides details about a control's enablement status in a specified standard.
 *
 * @public
 */
export interface StandardsControlAssociationDetail {
  /**
   * The Amazon Resource Name (ARN) of a security standard.
   *
   * @public
   */
  StandardsArn: string | undefined;

  /**
   * The unique identifier of a security control across standards. Values for this field typically consist of an Amazon Web Services service name and a number, such as APIGateway.3.
   *
   * @public
   */
  SecurityControlId: string | undefined;

  /**
   * The ARN of a security control across standards, such as `arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1`. This parameter doesn't mention a specific standard.
   *
   * @public
   */
  SecurityControlArn: string | undefined;

  /**
   * Specifies whether a control is enabled or disabled in a specified standard.
   *
   * @public
   */
  AssociationStatus: AssociationStatus | undefined;

  /**
   * The requirement that underlies a control in the compliance framework related to the standard.
   *
   * @public
   */
  RelatedRequirements?: string[] | undefined;

  /**
   * The time at which the enablement status of the control in the specified standard was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The reason for updating the enablement status of a control in a specified standard.
   *
   * @public
   */
  UpdatedReason?: string | undefined;

  /**
   * The title of a control. This field may reference a specific standard.
   *
   * @public
   */
  StandardsControlTitle?: string | undefined;

  /**
   * The description of a control. This typically summarizes how Security Hub CSPM evaluates the control and the conditions under which it produces a failed finding. This parameter may reference a specific standard.
   *
   * @public
   */
  StandardsControlDescription?: string | undefined;

  /**
   * Provides the input parameter that Security Hub CSPM uses to call the [UpdateStandardsControl](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateStandardsControl.html) API. This API can be used to enable or disable a control in a specified standard.
   *
   * @public
   */
  StandardsControlArns?: string[] | undefined;
}

/**
 * Provides details about which control's enablement status couldn't be retrieved in a specified standard when calling [BatchUpdateStandardsControlAssociations](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateStandardsControlAssociations.html). This parameter also provides details about why the request was unprocessed.
 *
 * @public
 */
export interface UnprocessedStandardsControlAssociation {
  /**
   * An array with one or more objects that includes a security control (identified with `SecurityControlId`, `SecurityControlArn`, or a mix of both parameters) and the Amazon Resource Name (ARN) of a standard. This parameter shows the specific controls for which the enablement status couldn't be retrieved in specified standards when calling [BatchUpdateStandardsControlAssociations](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateStandardsControlAssociations.html).
   *
   * @public
   */
  StandardsControlAssociationId: StandardsControlAssociationId | undefined;

  /**
   * The error code for the unprocessed standard and control association. The `NOT_FOUND` value has been deprecated and replaced by the `RESOURCE_NOT_FOUND` value.
   *
   * @public
   */
  ErrorCode: UnprocessedErrorCode | undefined;

  /**
   * The reason why the standard and control association was unprocessed.
   *
   * @public
   */
  ErrorReason?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetStandardsControlAssociationsResponse {
  /**
   * Provides the enablement status of a security control in a specified standard and other details for the control in relation to the specified standard.
   *
   * @public
   */
  StandardsControlAssociationDetails: StandardsControlAssociationDetail[] | undefined;

  /**
   * A security control (identified with `SecurityControlId`, `SecurityControlArn`, or a mix of both parameters) whose enablement status in a specified standard cannot be returned.
   *
   * @public
   */
  UnprocessedAssociations?: UnprocessedStandardsControlAssociation[] | undefined;
}

/**
 * @public
 */
export interface BatchImportFindingsRequest {
  /**
   * A list of findings to import. To successfully import a finding, it must follow the [Amazon Web Services Security Finding Format](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html). Maximum of 100 findings per request.
   *
   * @public
   */
  Findings: AwsSecurityFinding[] | undefined;
}

/**
 * The list of the findings that cannot be imported. For each finding, the list provides the error.
 *
 * @public
 */
export interface ImportFindingsError {
  /**
   * The identifier of the finding that could not be updated.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The code of the error returned by the `BatchImportFindings` operation.
   *
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * The message of the error returned by the `BatchImportFindings` operation.
   *
   * @public
   */
  ErrorMessage: string | undefined;
}

/**
 * @public
 */
export interface BatchImportFindingsResponse {
  /**
   * The number of findings that failed to import.
   *
   * @public
   */
  FailedCount: number | undefined;

  /**
   * The number of findings that were successfully imported.
   *
   * @public
   */
  SuccessCount: number | undefined;

  /**
   * The list of findings that failed to import.
   *
   * @public
   */
  FailedFindings?: ImportFindingsError[] | undefined;
}

/**
 * Specifies the parameters to update in an existing automation rule.
 *
 * @public
 */
export interface UpdateAutomationRulesRequestItem {
  /**
   * The Amazon Resource Name (ARN) for the rule.
   *
   * @public
   */
  RuleArn: string | undefined;

  /**
   * Whether the rule is active after it is created. If this parameter is equal to `ENABLED`, Security Hub CSPM starts applying the rule to findings and finding updates after the rule is created. To change the value of this parameter after creating a rule, use [`BatchUpdateAutomationRules`](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateAutomationRules.html).
   *
   * @public
   */
  RuleStatus?: RuleStatus | undefined;

  /**
   * An integer ranging from 1 to 1000 that represents the order in which the rule action is applied to findings. Security Hub CSPM applies rules with lower values for this parameter first.
   *
   * @public
   */
  RuleOrder?: number | undefined;

  /**
   * A description of the rule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the rule.
   *
   * @public
   */
  RuleName?: string | undefined;

  /**
   * Specifies whether a rule is the last to be applied with respect to a finding that matches the rule criteria. This is useful when a finding matches the criteria for multiple rules, and each rule has different actions. If a rule is terminal, Security Hub CSPM applies the rule action to a finding that matches the rule criteria and doesn't evaluate other rules for the finding. By default, a rule isn't terminal.
   *
   * @public
   */
  IsTerminal?: boolean | undefined;

  /**
   * A set of ASFF finding field attributes and corresponding expected values that Security Hub CSPM uses to filter findings. If a rule is enabled and a finding matches the conditions specified in this parameter, Security Hub CSPM applies the rule action to the finding.
   *
   * @public
   */
  Criteria?: AutomationRulesFindingFilters | undefined;

  /**
   * One or more actions to update finding fields if a finding matches the conditions specified in `Criteria`.
   *
   * @public
   */
  Actions?: AutomationRulesAction[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateAutomationRulesRequest {
  /**
   * An array of ARNs for the rules that are to be updated. Optionally, you can also include `RuleStatus` and `RuleOrder`.
   *
   * @public
   */
  UpdateAutomationRulesRequestItems: UpdateAutomationRulesRequestItem[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateAutomationRulesResponse {
  /**
   * A list of properly processed rule ARNs.
   *
   * @public
   */
  ProcessedAutomationRules?: string[] | undefined;

  /**
   * A list of objects containing `RuleArn`, `ErrorCode`, and `ErrorMessage`. This parameter tells you which automation rules the request didn't update and why.
   *
   * @public
   */
  UnprocessedAutomationRules?: UnprocessedAutomationRule[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateFindingsRequest {
  /**
   * The list of findings to update. `BatchUpdateFindings` can be used to update up to 100 findings at a time.
   *
   * For each finding, the list provides the finding identifier and the ARN of the finding provider.
   *
   * @public
   */
  FindingIdentifiers: AwsSecurityFindingIdentifier[] | undefined;

  /**
   * The updated note.
   *
   * @public
   */
  Note?: NoteUpdate | undefined;

  /**
   * Used to update the finding severity.
   *
   * @public
   */
  Severity?: SeverityUpdate | undefined;

  /**
   * Indicates the veracity of a finding.
   *
   * The available values for `VerificationState` are as follows.
   *
   * - `UNKNOWN` – The default disposition of a security finding
   * - `TRUE_POSITIVE` – The security finding is confirmed
   * - `FALSE_POSITIVE` – The security finding was determined to be a false alarm
   * - `BENIGN_POSITIVE` – A special case of `TRUE_POSITIVE` where the finding doesn't pose any threat, is expected, or both
   *
   * @public
   */
  VerificationState?: VerificationState | undefined;

  /**
   * The updated value for the finding confidence. Confidence is defined as the likelihood that a finding accurately identifies the behavior or issue that it was intended to identify.
   *
   * Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent confidence and 100 means 100 percent confidence.
   *
   * @public
   */
  Confidence?: number | undefined;

  /**
   * The updated value for the level of importance assigned to the resources associated with the findings.
   *
   * A score of 0 means that the underlying resources have no criticality, and a score of 100 is reserved for the most critical resources.
   *
   * @public
   */
  Criticality?: number | undefined;

  /**
   * One or more finding types in the format of namespace/category/classifier that classify a finding.
   *
   * Valid namespace values are as follows.
   *
   * - Software and Configuration Checks
   * - TTPs
   * - Effects
   * - Unusual Behaviors
   * - Sensitive Data Identifications
   *
   * @public
   */
  Types?: string[] | undefined;

  /**
   * A list of name/value string pairs associated with the finding. These are custom, user-defined fields added to a finding.
   *
   * @public
   */
  UserDefinedFields?: Record<string, string> | undefined;

  /**
   * Used to update the workflow status of a finding.
   *
   * The workflow status indicates the progress of the investigation into the finding.
   *
   * @public
   */
  Workflow?: WorkflowUpdate | undefined;

  /**
   * A list of findings that are related to the updated findings.
   *
   * @public
   */
  RelatedFindings?: RelatedFinding[] | undefined;
}

/**
 * A finding from a `BatchUpdateFindings` request that Security Hub CSPM was unable to update.
 *
 * @public
 */
export interface BatchUpdateFindingsUnprocessedFinding {
  /**
   * The identifier of the finding that was not updated.
   *
   * @public
   */
  FindingIdentifier: AwsSecurityFindingIdentifier | undefined;

  /**
   * The code associated with the error. Possible values are:
   *
   * - `ConcurrentUpdateError` - Another request attempted to update the finding while this request was being processed. This error may also occur if you call [`BatchUpdateFindings`](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateFindings.html) and [`BatchImportFindings`](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchImportFindings.html) at the same time.
   * - `DuplicatedFindingIdentifier` - The request included two or more findings with the same `FindingIdentifier`.
   * - `FindingNotFound` - The `FindingIdentifier` included in the request did not match an existing finding.
   * - `FindingSizeExceeded` - The finding size was greater than the permissible value of 240 KB.
   * - `InternalFailure` - An internal service failure occurred when updating the finding.
   * - `InvalidInput` - The finding update contained an invalid value that did not satisfy the [Amazon Web Services Security Finding Format](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html) syntax.
   *
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * The message associated with the error. Possible values are:
   *
   * - `Concurrent finding updates detected`
   * - `Finding Identifier is duplicated`
   * - `Finding Not Found`
   * - `Finding size exceeded 240 KB`
   * - `Internal service failure`
   * - `Invalid Input`
   *
   * @public
   */
  ErrorMessage: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateFindingsResponse {
  /**
   * The list of findings that were updated successfully.
   *
   * @public
   */
  ProcessedFindings: AwsSecurityFindingIdentifier[] | undefined;

  /**
   * The list of findings that were not updated.
   *
   * @public
   */
  UnprocessedFindings: BatchUpdateFindingsUnprocessedFinding[] | undefined;
}

/**
 * Provides a standard to identify security findings using OCSF.
 *
 * @public
 */
export interface OcsfFindingIdentifier {
  /**
   * Finding cloud.account.uid, which is a unique identifier in the Amazon Web Services account..
   *
   * @public
   */
  CloudAccountUid: string | undefined;

  /**
   * Finding finding_info.uid, which is a unique identifier for the finding from the finding provider.
   *
   * @public
   */
  FindingInfoUid: string | undefined;

  /**
   * Finding metadata.product.uid, which is a unique identifier for the product.
   *
   * @public
   */
  MetadataProductUid: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateFindingsV2Request {
  /**
   * The list of finding `metadata.uid` to indicate findings to update. Finding `metadata.uid` is a globally unique identifier associated with the finding. Customers cannot use `MetadataUids` together with `FindingIdentifiers`.
   *
   * @public
   */
  MetadataUids?: string[] | undefined;

  /**
   * Provides information to identify a specific V2 finding.
   *
   * @public
   */
  FindingIdentifiers?: OcsfFindingIdentifier[] | undefined;

  /**
   * The updated value for a user provided comment about the finding. Minimum character length 1. Maximum character length 512.
   *
   * @public
   */
  Comment?: string | undefined;

  /**
   * The updated value for the normalized severity identifier. The severity ID is an integer with the allowed enum values [0, 1, 2, 3, 4, 5, 6, 99]. When customer provides the updated severity ID, the string sibling severity will automatically be updated in the finding.
   *
   * @public
   */
  SeverityId?: number | undefined;

  /**
   * The updated value for the normalized status identifier. The status ID is an integer with the allowed enum values [0, 1, 2, 3, 4, 5, 99]. When customer provides the updated status ID, the string sibling status will automatically be updated in the finding.
   *
   * @public
   */
  StatusId?: number | undefined;
}

/**
 * The list of findings that were updated.
 *
 * @public
 */
export interface BatchUpdateFindingsV2ProcessedFinding {
  /**
   * The finding identifier of a processed finding.
   *
   * @public
   */
  FindingIdentifier?: OcsfFindingIdentifier | undefined;

  /**
   * The metadata.uid of a processed finding.
   *
   * @public
   */
  MetadataUid?: string | undefined;
}

/**
 * The list of findings that were not updated.
 *
 * @public
 */
export interface BatchUpdateFindingsV2UnprocessedFinding {
  /**
   * The finding identifier of an unprocessed finding.
   *
   * @public
   */
  FindingIdentifier?: OcsfFindingIdentifier | undefined;

  /**
   * The metadata.uid of an unprocessed finding.
   *
   * @public
   */
  MetadataUid?: string | undefined;

  /**
   * Indicates the specific type of error preventing successful processing of a finding during a batch update operation.
   *
   * @public
   */
  ErrorCode?: BatchUpdateFindingsV2UnprocessedFindingErrorCode | undefined;

  /**
   * A detailed description of why a finding could not be processed during a batch update operation.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateFindingsV2Response {
  /**
   * The list of findings that were updated successfully.
   *
   * @public
   */
  ProcessedFindings: BatchUpdateFindingsV2ProcessedFinding[] | undefined;

  /**
   * The list of V2 findings that were not updated.
   *
   * @public
   */
  UnprocessedFindings: BatchUpdateFindingsV2UnprocessedFinding[] | undefined;
}

/**
 * An array of requested updates to the enablement status of controls in specified standards. The objects in the array include a security control ID, the Amazon Resource Name (ARN) of the standard, the requested enablement status, and the reason for updating the enablement status.
 *
 * @public
 */
export interface StandardsControlAssociationUpdate {
  /**
   * The Amazon Resource Name (ARN) of the standard in which you want to update the control's enablement status.
   *
   * @public
   */
  StandardsArn: string | undefined;

  /**
   * The unique identifier for the security control whose enablement status you want to update.
   *
   * @public
   */
  SecurityControlId: string | undefined;

  /**
   * The desired enablement status of the control in the standard.
   *
   * @public
   */
  AssociationStatus: AssociationStatus | undefined;

  /**
   * The reason for updating the control's enablement status in the standard.
   *
   * @public
   */
  UpdatedReason?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateStandardsControlAssociationsRequest {
  /**
   * Updates the enablement status of a security control in a specified standard.
   *
   * Calls to this operation return a `RESOURCE_NOT_FOUND_EXCEPTION` error when the standard subscription for the control has `StandardsControlsUpdatable` value `NOT_READY_FOR_UPDATES`.
   *
   * @public
   */
  StandardsControlAssociationUpdates: StandardsControlAssociationUpdate[] | undefined;
}

/**
 * Provides details about which control's enablement status could not be updated in a specified standard when calling the [BatchUpdateStandardsControlAssociations](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateStandardsControlAssociations.html) API. This parameter also provides details about why the request was unprocessed.
 *
 * @public
 */
export interface UnprocessedStandardsControlAssociationUpdate {
  /**
   * An array of control and standard associations for which an update failed when calling [BatchUpdateStandardsControlAssociations](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateStandardsControlAssociations.html).
   *
   * @public
   */
  StandardsControlAssociationUpdate: StandardsControlAssociationUpdate | undefined;

  /**
   * The error code for the unprocessed update of the control's enablement status in the specified standard. The `NOT_FOUND` value has been deprecated and replaced by the `RESOURCE_NOT_FOUND` value.
   *
   * @public
   */
  ErrorCode: UnprocessedErrorCode | undefined;

  /**
   * The reason why a control's enablement status in the specified standard couldn't be updated.
   *
   * @public
   */
  ErrorReason?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateStandardsControlAssociationsResponse {
  /**
   * A security control (identified with `SecurityControlId`, `SecurityControlArn`, or a mix of both parameters) whose enablement status in a specified standard couldn't be updated.
   *
   * @public
   */
  UnprocessedAssociationUpdates?: UnprocessedStandardsControlAssociationUpdate[] | undefined;
}

/**
 * The options for customizing a security control parameter with a boolean. For a boolean parameter, the options are `true` and `false`.
 *
 * @public
 */
export interface BooleanConfigurationOptions {
  /**
   * The Security Hub CSPM default value for a boolean parameter.
   *
   * @public
   */
  DefaultValue?: boolean | undefined;
}

/**
 * @public
 */
export interface CancelExportJobV2Request {
  /**
   * The unique identifier of the export job to cancel. This is the value returned by `StartExportJobV2`.
   *
   * @public
   */
  ExportJobId: string | undefined;
}

/**
 * @public
 */
export interface CancelExportJobV2Response {
  /**
   * The unique identifier of the export job.
   *
   * @public
   */
  ExportJobId: string | undefined;

  /**
   * The state of the export job after the cancel request.
   *
   * @public
   */
  Status: ExportStatus | undefined;
}

/**
 * Enables filtering of security findings based on boolean field values in OCSF.
 *
 * @public
 */
export interface OcsfBooleanFilter {
  /**
   * The name of the field.
   *
   * @public
   */
  FieldName?: OcsfBooleanField | undefined;

  /**
   * Boolean filter for querying findings.
   *
   * @public
   */
  Filter?: BooleanFilter | undefined;
}

/**
 * Enables filtering of security findings based on date and timestamp fields in OCSF.
 *
 * @public
 */
export interface OcsfDateFilter {
  /**
   * The name of the field.
   *
   * @public
   */
  FieldName?: OcsfDateField | undefined;

  /**
   * A date filter for querying findings.
   *
   * @public
   */
  Filter?: DateFilter | undefined;
}

/**
 * The structure for filtering findings based on IP address attributes.
 *
 * @public
 */
export interface OcsfIpFilter {
  /**
   * The name of the IP address field to filter on.
   *
   * @public
   */
  FieldName?: OcsfIpField | undefined;

  /**
   * The IP filter for querying findings.
   *
   * @public
   */
  Filter?: IpFilter | undefined;
}

/**
 * Enables filtering of security findings based on map field values in OCSF.
 *
 * @public
 */
export interface OcsfMapFilter {
  /**
   * The name of the field.
   *
   * @public
   */
  FieldName?: OcsfMapField | undefined;

  /**
   * A map filter for filtering Security Hub CSPM findings. Each map filter provides the field to check for, the value to check for, and the comparison operator.
   *
   * @public
   */
  Filter?: MapFilter | undefined;
}

/**
 * Enables filtering of security findings based on numerical field values in OCSF.
 *
 * @public
 */
export interface OcsfNumberFilter {
  /**
   * The name of the field.
   *
   * @public
   */
  FieldName?: OcsfNumberField | undefined;

  /**
   * A number filter for querying findings.
   *
   * @public
   */
  Filter?: NumberFilter | undefined;
}

/**
 * Enables filtering of security findings based on string field values in OCSF.
 *
 * @public
 */
export interface OcsfStringFilter {
  /**
   * The name of the field.
   *
   * @public
   */
  FieldName?: OcsfStringField | undefined;

  /**
   * A string filter for filtering Security Hub CSPM findings.
   *
   * @public
   */
  Filter?: StringFilter | undefined;
}

/**
 * The options for customizing a security control parameter that is a double.
 *
 * @public
 */
export interface DoubleConfigurationOptions {
  /**
   * The Security Hub CSPM default value for a control parameter that is a double.
   *
   * @public
   */
  DefaultValue?: number | undefined;

  /**
   * The minimum valid value for a control parameter that is a double.
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * The maximum valid value for a control parameter that is a double.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * The options for customizing a security control parameter that is an enum.
 *
 * @public
 */
export interface EnumConfigurationOptions {
  /**
   * The Security Hub CSPM default value for a control parameter that is an enum.
   *
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * The valid values for a control parameter that is an enum.
   *
   * @public
   */
  AllowedValues?: string[] | undefined;
}

/**
 * The options for customizing a security control parameter that is a list of enums.
 *
 * @public
 */
export interface EnumListConfigurationOptions {
  /**
   * The Security Hub CSPM default value for a control parameter that is a list of enums.
   *
   * @public
   */
  DefaultValue?: string[] | undefined;

  /**
   * The maximum number of list items that an enum list control parameter can accept.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * The valid values for a control parameter that is a list of enums.
   *
   * @public
   */
  AllowedValues?: string[] | undefined;
}

/**
 * The options for customizing a security control parameter that is an integer.
 *
 * @public
 */
export interface IntegerConfigurationOptions {
  /**
   * The Security Hub CSPM default value for a control parameter that is an integer.
   *
   * @public
   */
  DefaultValue?: number | undefined;

  /**
   * The minimum valid value for a control parameter that is an integer.
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * The maximum valid value for a control parameter that is an integer.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * The options for customizing a security control parameter that is a list of integers.
 *
 * @public
 */
export interface IntegerListConfigurationOptions {
  /**
   * The Security Hub CSPM default value for a control parameter that is a list of integers.
   *
   * @public
   */
  DefaultValue?: number[] | undefined;

  /**
   * The minimum valid value for a control parameter that is a list of integers.
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * The maximum valid value for a control parameter that is a list of integers.
   *
   * @public
   */
  Max?: number | undefined;

  /**
   * The maximum number of list items that an interger list control parameter can accept.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * The options for customizing a security control parameter that is a string.
 *
 * @public
 */
export interface StringConfigurationOptions {
  /**
   * The Security Hub CSPM default value for a control parameter that is a string.
   *
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * An RE2 regular expression that Security Hub CSPM uses to validate a user-provided control parameter string.
   *
   * @public
   */
  Re2Expression?: string | undefined;

  /**
   * The description of the RE2 regular expression.
   *
   * @public
   */
  ExpressionDescription?: string | undefined;
}

/**
 * The options for customizing a security control parameter that is a list of strings.
 *
 * @public
 */
export interface StringListConfigurationOptions {
  /**
   * The Security Hub CSPM default value for a control parameter that is a list of strings.
   *
   * @public
   */
  DefaultValue?: string[] | undefined;

  /**
   * An RE2 regular expression that Security Hub CSPM uses to validate a user-provided list of strings for a control parameter.
   *
   * @public
   */
  Re2Expression?: string | undefined;

  /**
   * The maximum number of list items that a string list control parameter can accept.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * The description of the RE2 regular expression.
   *
   * @public
   */
  ExpressionDescription?: string | undefined;
}

/**
 * The options for customizing a security control parameter.
 *
 * @public
 */
export type ConfigurationOptions =
  | ConfigurationOptions.BooleanMember
  | ConfigurationOptions.DoubleMember
  | ConfigurationOptions.EnumMember
  | ConfigurationOptions.EnumListMember
  | ConfigurationOptions.IntegerMember
  | ConfigurationOptions.IntegerListMember
  | ConfigurationOptions.StringMember
  | ConfigurationOptions.StringListMember
  | ConfigurationOptions.$UnknownMember;

/**
 * @public
 */
export namespace ConfigurationOptions {
  /**
   * The options for customizing a security control parameter that is an integer.
   *
   * @public
   */
  export interface IntegerMember {
    Integer: IntegerConfigurationOptions;
    IntegerList?: never;
    Double?: never;
    String?: never;
    StringList?: never;
    Boolean?: never;
    Enum?: never;
    EnumList?: never;
    $unknown?: never;
  }

  /**
   * The options for customizing a security control parameter that is a list of integers.
   *
   * @public
   */
  export interface IntegerListMember {
    Integer?: never;
    IntegerList: IntegerListConfigurationOptions;
    Double?: never;
    String?: never;
    StringList?: never;
    Boolean?: never;
    Enum?: never;
    EnumList?: never;
    $unknown?: never;
  }

  /**
   * The options for customizing a security control parameter that is a double.
   *
   * @public
   */
  export interface DoubleMember {
    Integer?: never;
    IntegerList?: never;
    Double: DoubleConfigurationOptions;
    String?: never;
    StringList?: never;
    Boolean?: never;
    Enum?: never;
    EnumList?: never;
    $unknown?: never;
  }

  /**
   * The options for customizing a security control parameter that is a string data type.
   *
   * @public
   */
  export interface StringMember {
    Integer?: never;
    IntegerList?: never;
    Double?: never;
    String: StringConfigurationOptions;
    StringList?: never;
    Boolean?: never;
    Enum?: never;
    EnumList?: never;
    $unknown?: never;
  }

  /**
   * The options for customizing a security control parameter that is a list of strings.
   *
   * @public
   */
  export interface StringListMember {
    Integer?: never;
    IntegerList?: never;
    Double?: never;
    String?: never;
    StringList: StringListConfigurationOptions;
    Boolean?: never;
    Enum?: never;
    EnumList?: never;
    $unknown?: never;
  }

  /**
   * The options for customizing a security control parameter that is a boolean. For a boolean parameter, the options are `true` and `false`.
   *
   * @public
   */
  export interface BooleanMember {
    Integer?: never;
    IntegerList?: never;
    Double?: never;
    String?: never;
    StringList?: never;
    Boolean: BooleanConfigurationOptions;
    Enum?: never;
    EnumList?: never;
    $unknown?: never;
  }

  /**
   * The options for customizing a security control parameter that is an enum.
   *
   * @public
   */
  export interface EnumMember {
    Integer?: never;
    IntegerList?: never;
    Double?: never;
    String?: never;
    StringList?: never;
    Boolean?: never;
    Enum: EnumConfigurationOptions;
    EnumList?: never;
    $unknown?: never;
  }

  /**
   * The options for customizing a security control parameter that is a list of enums.
   *
   * @public
   */
  export interface EnumListMember {
    Integer?: never;
    IntegerList?: never;
    Double?: never;
    String?: never;
    StringList?: never;
    Boolean?: never;
    Enum?: never;
    EnumList: EnumListConfigurationOptions;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Integer?: never;
    IntegerList?: never;
    Double?: never;
    String?: never;
    StringList?: never;
    Boolean?: never;
    Enum?: never;
    EnumList?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Integer: (value: IntegerConfigurationOptions) => T;
    IntegerList: (value: IntegerListConfigurationOptions) => T;
    Double: (value: DoubleConfigurationOptions) => T;
    String: (value: StringConfigurationOptions) => T;
    StringList: (value: StringListConfigurationOptions) => T;
    Boolean: (value: BooleanConfigurationOptions) => T;
    Enum: (value: EnumConfigurationOptions) => T;
    EnumList: (value: EnumListConfigurationOptions) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An object that contains the details of an Security Hub CSPM configuration policy that’s returned in a `ListConfigurationPolicies` request.
 *
 * @public
 */
export interface ConfigurationPolicySummary {
  /**
   * The Amazon Resource Name (ARN) of the configuration policy.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The universally unique identifier (UUID) of the configuration policy.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the configuration policy. Alphanumeric characters and the following ASCII characters are permitted: `-, ., !, *, /`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the configuration policy.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time, in UTC and ISO 8601 format, that the configuration policy was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * Indicates whether the service that the configuration policy applies to is enabled in the policy.
   *
   * @public
   */
  ServiceEnabled?: boolean | undefined;
}

/**
 * Information about the configuration and status of a Jira Cloud integration.
 *
 * @public
 */
export interface JiraCloudDetail {
  /**
   * The cloud id of the Jira Cloud.
   *
   * @public
   */
  CloudId?: string | undefined;

  /**
   * The projectKey of Jira Cloud.
   *
   * @public
   */
  ProjectKey?: string | undefined;

  /**
   * The URL domain of your Jira Cloud instance.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The URL to provide to customers for OAuth auth code flow.
   *
   * @public
   */
  AuthUrl?: string | undefined;

  /**
   * The status of the authorization between Jira Cloud and the service.
   *
   * @public
   */
  AuthStatus?: ConnectorAuthStatus | undefined;
}

/**
 * Information about a ServiceNow ITSM integration.
 *
 * @public
 */
export interface ServiceNowDetail {
  /**
   * The instanceName of ServiceNow ITSM.
   *
   * @public
   */
  InstanceName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the ServiceNow credentials.
   *
   * @public
   */
  SecretArn: string | undefined;

  /**
   * The status of the authorization between ServiceNow and the service.
   *
   * @public
   */
  AuthStatus: ConnectorAuthStatus | undefined;
}

/**
 * The third-party provider detail for a service configuration.
 *
 * @public
 */
export type ProviderDetail =
  | ProviderDetail.AzureMember
  | ProviderDetail.JiraCloudMember
  | ProviderDetail.ServiceNowMember
  | ProviderDetail.$UnknownMember;

/**
 * @public
 */
export namespace ProviderDetail {
  /**
   * Details about a Jira Cloud integration.
   *
   * @public
   */
  export interface JiraCloudMember {
    JiraCloud: JiraCloudDetail;
    ServiceNow?: never;
    Azure?: never;
    $unknown?: never;
  }

  /**
   * Details about a ServiceNow ITSM integration.
   *
   * @public
   */
  export interface ServiceNowMember {
    JiraCloud?: never;
    ServiceNow: ServiceNowDetail;
    Azure?: never;
    $unknown?: never;
  }

  /**
   * Details about a Microsoft Azure CSPM integration.
   *
   * @public
   */
  export interface AzureMember {
    JiraCloud?: never;
    ServiceNow?: never;
    Azure: AzureDetail;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    JiraCloud?: never;
    ServiceNow?: never;
    Azure?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    JiraCloud: (value: JiraCloudDetail) => T;
    ServiceNow: (value: ServiceNowDetail) => T;
    Azure: (value: AzureDetail) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The connectorV2 third-party provider configuration summary.
 *
 * @public
 */
export interface ProviderSummary {
  /**
   * The name of the provider.
   *
   * @public
   */
  ProviderName?: ConnectorProviderName | undefined;

  /**
   * The status for the connectorV2.
   *
   * @public
   */
  ConnectorStatus?: ConnectorStatus | undefined;

  /**
   * The third-party provider detail for a service configuration.
   *
   * @public
   */
  ProviderConfiguration?: ProviderDetail | undefined;
}

/**
 * A condensed overview of the connectorV2..
 *
 * @public
 */
export interface ConnectorSummary {
  /**
   * The Amazon Resource Name (ARN) of the connectorV2.
   *
   * @public
   */
  ConnectorArn?: string | undefined;

  /**
   * The UUID of the connectorV2 to identify connectorV2 resource.
   *
   * @public
   */
  ConnectorId: string | undefined;

  /**
   * The Name field contains the user-defined name assigned to the integration connector. This helps identify and manage multiple connectors within Security Hub.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the connectorV2.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The connectorV2 third party provider configuration summary.
   *
   * @public
   */
  ProviderSummary: ProviderSummary | undefined;

  /**
   * ISO 8601 UTC timestamp for the time create the connectorV2.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The enablement status of the connector.
   *
   * @public
   */
  EnablementStatus?: EnablementStatus | undefined;

  /**
   * The reason for the current enablement status. Provides additional context when the connector is in a failed state.
   *
   * @public
   */
  EnablementStatusReason?: string | undefined;
}

/**
 * @public
 */
export interface CreateActionTargetRequest {
  /**
   * The name of the custom action target. Can contain up to 20 characters.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description for the custom action target.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The ID for the custom action target. Can contain up to 20 alphanumeric characters.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface CreateActionTargetResponse {
  /**
   * The Amazon Resource Name (ARN) for the custom action target.
   *
   * @public
   */
  ActionTargetArn: string | undefined;
}

/**
 * @public
 */
export interface CreateAggregatorV2Request {
  /**
   * Determines how Regions are linked to an Aggregator V2.
   *
   * @public
   */
  RegionLinkingMode: string | undefined;

  /**
   * The list of Regions that are linked to the aggregation Region.
   *
   * @public
   */
  LinkedRegions?: string[] | undefined;

  /**
   * A list of key-value pairs to be applied to the AggregatorV2.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A unique identifier used to ensure idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAggregatorV2Response {
  /**
   * The ARN of the AggregatorV2.
   *
   * @public
   */
  AggregatorV2Arn?: string | undefined;

  /**
   * The Amazon Web Services Region where data is aggregated.
   *
   * @public
   */
  AggregationRegion?: string | undefined;

  /**
   * Determines how Regions are linked to an Aggregator V2.
   *
   * @public
   */
  RegionLinkingMode?: string | undefined;

  /**
   * The list of Regions that are linked to the aggregation Region.
   *
   * @public
   */
  LinkedRegions?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateAutomationRuleRequest {
  /**
   * User-defined tags associated with an automation rule.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Whether the rule is active after it is created. If this parameter is equal to `ENABLED`, Security Hub CSPM starts applying the rule to findings and finding updates after the rule is created. To change the value of this parameter after creating a rule, use [`BatchUpdateAutomationRules`](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateAutomationRules.html).
   *
   * @public
   */
  RuleStatus?: RuleStatus | undefined;

  /**
   * An integer ranging from 1 to 1000 that represents the order in which the rule action is applied to findings. Security Hub CSPM applies rules with lower values for this parameter first.
   *
   * @public
   */
  RuleOrder: number | undefined;

  /**
   * The name of the rule.
   *
   * @public
   */
  RuleName: string | undefined;

  /**
   * A description of the rule.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * Specifies whether a rule is the last to be applied with respect to a finding that matches the rule criteria. This is useful when a finding matches the criteria for multiple rules, and each rule has different actions. If a rule is terminal, Security Hub CSPM applies the rule action to a finding that matches the rule criteria and doesn't evaluate other rules for the finding. By default, a rule isn't terminal.
   *
   * @public
   */
  IsTerminal?: boolean | undefined;

  /**
   * A set of ASFF finding field attributes and corresponding expected values that Security Hub CSPM uses to filter findings. If a rule is enabled and a finding matches the conditions specified in this parameter, Security Hub CSPM applies the rule action to the finding.
   *
   * @public
   */
  Criteria: AutomationRulesFindingFilters | undefined;

  /**
   * One or more actions to update finding fields if a finding matches the conditions specified in `Criteria`.
   *
   * @public
   */
  Actions: AutomationRulesAction[] | undefined;
}

/**
 * @public
 */
export interface CreateAutomationRuleResponse {
  /**
   * The Amazon Resource Name (ARN) of the automation rule that you created.
   *
   * @public
   */
  RuleArn?: string | undefined;
}

/**
 * Enables the filtering of Amazon Web Services resources based on date and timestamp attributes.
 *
 * @public
 */
export interface ResourcesDateFilter {
  /**
   * The name of the field.
   *
   * @public
   */
  FieldName?: ResourcesDateField | undefined;

  /**
   * A date filter for querying findings.
   *
   * @public
   */
  Filter?: DateFilter | undefined;
}

/**
 * Enables filtering of Amazon Web Services resources based on key-value map attributes.
 *
 * @public
 */
export interface ResourcesMapFilter {
  /**
   * The name of the field.
   *
   * @public
   */
  FieldName?: ResourcesMapField | undefined;

  /**
   * A map filter for filtering Security Hub CSPM findings. Each map filter provides the field to check for, the value to check for, and the comparison operator.
   *
   * @public
   */
  Filter?: MapFilter | undefined;
}

/**
 * Enables filtering of Amazon Web Services resources based on numerical values.
 *
 * @public
 */
export interface ResourcesNumberFilter {
  /**
   * The name of the field.
   *
   * @public
   */
  FieldName?: ResourcesNumberField | undefined;

  /**
   * A number filter for querying findings.
   *
   * @public
   */
  Filter?: NumberFilter | undefined;
}

/**
 * Enables filtering of Amazon Web Services resources based on string field values.
 *
 * @public
 */
export interface ResourcesStringFilter {
  /**
   * The name of the field.
   *
   * @public
   */
  FieldName?: ResourcesStringField | undefined;

  /**
   * A string filter for filtering Security Hub CSPM findings.
   *
   * @public
   */
  Filter?: StringFilter | undefined;
}

/**
 * @public
 */
export interface CreateAutomationRuleV2Response {
  /**
   * The ARN of the V2 automation rule.
   *
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * The ID of the V2 automation rule.
   *
   * @public
   */
  RuleId?: string | undefined;
}

/**
 * A list of security controls and control parameter values that are included in a configuration policy.
 *
 * @public
 */
export interface SecurityControlCustomParameter {
  /**
   * The ID of the security control.
   *
   * @public
   */
  SecurityControlId?: string | undefined;

  /**
   * An object that specifies parameter values for a control in a configuration policy.
   *
   * @public
   */
  Parameters?: Record<string, ParameterConfiguration> | undefined;
}

/**
 * An object that defines which security controls are enabled in an Security Hub CSPM configuration policy. The enablement status of a control is aligned across all of the enabled standards in an account.
 *
 * @public
 */
export interface SecurityControlsConfiguration {
  /**
   * A list of security controls that are enabled in the configuration policy. Security Hub CSPM disables all other controls (including newly released controls) other than the listed controls.
   *
   * @public
   */
  EnabledSecurityControlIdentifiers?: string[] | undefined;

  /**
   * A list of security controls that are disabled in the configuration policy. Security Hub CSPM enables all other controls (including newly released controls) other than the listed controls.
   *
   * @public
   */
  DisabledSecurityControlIdentifiers?: string[] | undefined;

  /**
   * A list of security controls and control parameter values that are included in a configuration policy.
   *
   * @public
   */
  SecurityControlCustomParameters?: SecurityControlCustomParameter[] | undefined;
}

/**
 * An object that defines how Security Hub CSPM is configured. The configuration policy includes whether Security Hub CSPM is enabled or disabled, a list of enabled security standards, a list of enabled or disabled security controls, and a list of custom parameter values for specified controls. If you provide a list of security controls that are enabled in the configuration policy, Security Hub CSPM disables all other controls (including newly released controls). If you provide a list of security controls that are disabled in the configuration policy, Security Hub CSPM enables all other controls (including newly released controls).
 *
 * @public
 */
export interface SecurityHubPolicy {
  /**
   * Indicates whether Security Hub CSPM is enabled in the policy.
   *
   * @public
   */
  ServiceEnabled?: boolean | undefined;

  /**
   * A list that defines which security standards are enabled in the configuration policy.
   *
   * @public
   */
  EnabledStandardIdentifiers?: string[] | undefined;

  /**
   * An object that defines which security controls are enabled in the configuration policy. The enablement status of a control is aligned across all of the enabled standards in an account.
   *
   * @public
   */
  SecurityControlsConfiguration?: SecurityControlsConfiguration | undefined;
}

/**
 * An object that defines how Security Hub CSPM is configured. It includes whether Security Hub CSPM is enabled or disabled, a list of enabled security standards, a list of enabled or disabled security controls, and a list of custom parameter values for specified controls. If you provide a list of security controls that are enabled in the configuration policy, Security Hub CSPM disables all other controls (including newly released controls). If you provide a list of security controls that are disabled in the configuration policy, Security Hub CSPM enables all other controls (including newly released controls).
 *
 * @public
 */
export type Policy =
  | Policy.SecurityHubMember
  | Policy.$UnknownMember;

/**
 * @public
 */
export namespace Policy {
  /**
   * The Amazon Web Services service that the configuration policy applies to.
   *
   * @public
   */
  export interface SecurityHubMember {
    SecurityHub: SecurityHubPolicy;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    SecurityHub?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    SecurityHub: (value: SecurityHubPolicy) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateConfigurationPolicyRequest {
  /**
   * The name of the configuration policy. Alphanumeric characters and the following ASCII characters are permitted: `-, ., !, *, /`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the configuration policy.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * An object that defines how Security Hub CSPM is configured. It includes whether Security Hub CSPM is enabled or disabled, a list of enabled security standards, a list of enabled or disabled security controls, and a list of custom parameter values for specified controls. If you provide a list of security controls that are enabled in the configuration policy, Security Hub CSPM disables all other controls (including newly released controls). If you provide a list of security controls that are disabled in the configuration policy, Security Hub CSPM enables all other controls (including newly released controls).
   *
   * @public
   */
  ConfigurationPolicy: Policy | undefined;

  /**
   * User-defined tags associated with a configuration policy. For more information, see [Tagging Security Hub CSPM resources](https://docs.aws.amazon.com/securityhub/latest/userguide/tagging-resources.html) in the *Security Hub CSPM user guide*.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateConfigurationPolicyResponse {
  /**
   * The Amazon Resource Name (ARN) of the configuration policy.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The universally unique identifier (UUID) of the configuration policy.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the configuration policy.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the configuration policy.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time, in UTC and ISO 8601 format, that the configuration policy was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The date and time, in UTC and ISO 8601 format, that the configuration policy was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * An object that defines how Security Hub CSPM is configured. It includes whether Security Hub CSPM is enabled or disabled, a list of enabled security standards, a list of enabled or disabled security controls, and a list of custom parameter values for specified controls. If the request included a list of security controls that are enabled in the configuration policy, Security Hub CSPM disables all other controls (including newly released controls). If the request included a list of security controls that are disabled in the configuration policy, Security Hub CSPM enables all other controls (including newly released controls).
   *
   * @public
   */
  ConfigurationPolicy?: Policy | undefined;
}

/**
 * The cloud provider configuration for creating a connector. This is a union type that currently supports Azure.
 *
 * @public
 */
export type CspmProviderConfiguration =
  | CspmProviderConfiguration.AzureMember
  | CspmProviderConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace CspmProviderConfiguration {
  /**
   * The Azure provider configuration.
   *
   * @public
   */
  export interface AzureMember {
    Azure: AzureProviderConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Azure?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Azure: (value: AzureProviderConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateConnectorRequest {
  /**
   * The name of the connector. Must be unique within the account.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the connector.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The configuration for the cloud provider to connect to. Currently supports Azure.
   *
   * @public
   */
  Provider: CspmProviderConfiguration | undefined;

  /**
   * The tags to add to the connector resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A unique identifier used to ensure idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectorResponse {
  /**
   * The Amazon Resource Name (ARN) of the connector.
   *
   * @public
   */
  ConnectorArn: string | undefined;

  /**
   * The unique identifier of the connector.
   *
   * @public
   */
  ConnectorId: string | undefined;

  /**
   * The connectivity status of the connector.
   *
   * @public
   */
  ConnectorStatus?: CspmConnectorStatus | undefined;

  /**
   * The enablement status of the connector.
   *
   * @public
   */
  EnablementStatus?: CspmEnablementStatus | undefined;
}

/**
 * The initial configuration settings required to establish an integration between Security Hub and Jira Cloud.
 *
 * @public
 */
export interface JiraCloudProviderConfiguration {
  /**
   * The project key for a JiraCloud instance.
   *
   * @public
   */
  ProjectKey?: string | undefined;
}

/**
 * The initial configuration settings required to establish an integration between Security Hub and ServiceNow ITSM.
 *
 * @public
 */
export interface ServiceNowProviderConfiguration {
  /**
   * The instance name of ServiceNow ITSM.
   *
   * @public
   */
  InstanceName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the ServiceNow credentials.
   *
   * @public
   */
  SecretArn: string | undefined;
}

/**
 * The initial configuration settings required to establish an integration between Security Hub and third-party provider.
 *
 * @public
 */
export type ProviderConfiguration =
  | ProviderConfiguration.AzureMember
  | ProviderConfiguration.JiraCloudMember
  | ProviderConfiguration.ServiceNowMember
  | ProviderConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ProviderConfiguration {
  /**
   * The configuration settings required to establish an integration with Jira Cloud.
   *
   * @public
   */
  export interface JiraCloudMember {
    JiraCloud: JiraCloudProviderConfiguration;
    ServiceNow?: never;
    Azure?: never;
    $unknown?: never;
  }

  /**
   * The configuration settings required to establish an integration with ServiceNow ITSM.
   *
   * @public
   */
  export interface ServiceNowMember {
    JiraCloud?: never;
    ServiceNow: ServiceNowProviderConfiguration;
    Azure?: never;
    $unknown?: never;
  }

  /**
   * The configuration settings required to establish a CSPM integration with Microsoft Azure.
   *
   * @public
   */
  export interface AzureMember {
    JiraCloud?: never;
    ServiceNow?: never;
    Azure: AzureProviderConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    JiraCloud?: never;
    ServiceNow?: never;
    Azure?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    JiraCloud: (value: JiraCloudProviderConfiguration) => T;
    ServiceNow: (value: ServiceNowProviderConfiguration) => T;
    Azure: (value: AzureProviderConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateConnectorV2Request {
  /**
   * The unique name of the connectorV2.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the connectorV2.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The third-party provider’s service configuration.
   *
   * @public
   */
  Provider: ProviderConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of KMS key used to encrypt secrets for the connectorV2.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * The tags to add to the connectorV2 when you create.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A unique identifier used to ensure idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectorV2Response {
  /**
   * The Amazon Resource Name (ARN) of the connectorV2.
   *
   * @public
   */
  ConnectorArn: string | undefined;

  /**
   * The UUID of the connectorV2 to identify connectorV2 resource.
   *
   * @public
   */
  ConnectorId: string | undefined;

  /**
   * The Url provide to customers for OAuth auth code flow.
   *
   * @public
   */
  AuthUrl?: string | undefined;

  /**
   * The current status of the connectorV2.
   *
   * @public
   */
  ConnectorStatus?: ConnectorStatus | undefined;

  /**
   * The enablement status of the connector after creation.
   *
   * @public
   */
  EnablementStatus?: EnablementStatus | undefined;
}

/**
 * @public
 */
export interface CreateFindingAggregatorRequest {
  /**
   * Indicates whether to aggregate findings from all of the available Regions in the current partition. Also determines whether to automatically aggregate findings from new Regions as Security Hub CSPM supports them and you opt into them.
   *
   * The selected option also determines how to use the Regions provided in the Regions list.
   *
   * The options are as follows:
   *
   * - `ALL_REGIONS` - Aggregates findings from all of the Regions where Security Hub CSPM is enabled. When you choose this option, Security Hub CSPM also automatically aggregates findings from new Regions as Security Hub CSPM supports them and you opt into them.
   * - `ALL_REGIONS_EXCEPT_SPECIFIED` - Aggregates findings from all of the Regions where Security Hub CSPM is enabled, except for the Regions listed in the `Regions` parameter. When you choose this option, Security Hub CSPM also automatically aggregates findings from new Regions as Security Hub CSPM supports them and you opt into them.
   * - `SPECIFIED_REGIONS` - Aggregates findings only from the Regions listed in the `Regions` parameter. Security Hub CSPM does not automatically aggregate findings from new Regions.
   * - `NO_REGIONS` - Aggregates no data because no Regions are selected as linked Regions.
   *
   * @public
   */
  RegionLinkingMode: string | undefined;

  /**
   * If `RegionLinkingMode` is `ALL_REGIONS_EXCEPT_SPECIFIED`, then this is a space-separated list of Regions that don't replicate and send findings to the home Region.
   *
   * If `RegionLinkingMode` is `SPECIFIED_REGIONS`, then this is a space-separated list of Regions that do replicate and send findings to the home Region.
   *
   * An `InvalidInputException` error results if you populate this field while `RegionLinkingMode` is `NO_REGIONS`.
   *
   * @public
   */
  Regions?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateFindingAggregatorResponse {
  /**
   * The ARN of the finding aggregator. You use the finding aggregator ARN to retrieve details for, update, and stop cross-Region aggregation.
   *
   * @public
   */
  FindingAggregatorArn?: string | undefined;

  /**
   * The home Region. Findings generated in linked Regions are replicated and sent to the home Region.
   *
   * @public
   */
  FindingAggregationRegion?: string | undefined;

  /**
   * Indicates whether to link all Regions, all Regions except for a list of excluded Regions, or a list of included Regions.
   *
   * @public
   */
  RegionLinkingMode?: string | undefined;

  /**
   * The list of excluded Regions or included Regions.
   *
   * @public
   */
  Regions?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateInsightRequest {
  /**
   * The name of the custom insight to create.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * One or more attributes used to filter the findings included in the insight. The insight only includes findings that match the criteria defined in the filters.
   *
   * @public
   */
  Filters: AwsSecurityFindingFilters | undefined;

  /**
   * The attribute used to group the findings for the insight. The grouping attribute identifies the type of item that the insight applies to. For example, if an insight is grouped by resource identifier, then the insight produces a list of resource identifiers.
   *
   * @public
   */
  GroupByAttribute: string | undefined;
}

/**
 * @public
 */
export interface CreateInsightResponse {
  /**
   * The ARN of the insight created.
   *
   * @public
   */
  InsightArn: string | undefined;
}

/**
 * @public
 */
export interface CreateMembersRequest {
  /**
   * The list of accounts to associate with the Security Hub CSPM administrator account. For each account, the list includes the account ID and optionally the email address.
   *
   * @public
   */
  AccountDetails: AccountDetails[] | undefined;
}

/**
 * Details about the account that was not processed.
 *
 * @public
 */
export interface Result {
  /**
   * An Amazon Web Services account ID of the account that was not processed.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The reason that the account was not processed.
   *
   * @public
   */
  ProcessingResult?: string | undefined;
}

/**
 * @public
 */
export interface CreateMembersResponse {
  /**
   * The list of Amazon Web Services accounts that were not processed. For each account, the list includes the account ID and the email address.
   *
   * @public
   */
  UnprocessedAccounts?: Result[] | undefined;
}

/**
 * @public
 */
export interface CreateTicketV2Request {
  /**
   * The UUID of the connectorV2 to identify connectorV2 resource.
   *
   * @public
   */
  ConnectorId: string | undefined;

  /**
   * The the unique ID for the finding.
   *
   * @public
   */
  FindingMetadataUid: string | undefined;

  /**
   * The client idempotency token.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The mode for ticket creation. When set to DRYRUN, the ticket is created using a Security Hub owned template test finding to verify the integration is working correctly.
   *
   * @public
   */
  Mode?: TicketCreationMode | undefined;
}

/**
 * @public
 */
export interface CreateTicketV2Response {
  /**
   * The ID for the ticketv2.
   *
   * @public
   */
  TicketId: string | undefined;

  /**
   * The url to the created ticket.
   *
   * @public
   */
  TicketSrcUrl?: string | undefined;
}

/**
 * Details the source and reason of a criticality.
 *
 * @public
 */
export interface CriticalitySource {
  /**
   * The source of the criticality.
   *
   * @public
   */
  Source: CriticalitySourceType | undefined;

  /**
   * The reason the criticality was assigned.
   *
   * @public
   */
  Reason: string | undefined;
}

/**
 * The detailed cloud provider configuration for a connector. This is a union type that currently supports Azure.
 *
 * @public
 */
export type CspmProviderDetail =
  | CspmProviderDetail.AzureMember
  | CspmProviderDetail.$UnknownMember;

/**
 * @public
 */
export namespace CspmProviderDetail {
  /**
   * The Azure provider detail.
   *
   * @public
   */
  export interface AzureMember {
    Azure: AzureDetail;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Azure?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Azure: (value: AzureDetail) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A summary of the cloud provider configuration for a connector.
 *
 * @public
 */
export interface CspmProviderSummary {
  /**
   * The name of the cloud provider.
   *
   * @public
   */
  ProviderName?: CspmConnectorProviderName | undefined;

  /**
   * The connectivity status of the connector.
   *
   * @public
   */
  ConnectorStatus?: CspmConnectorStatus | undefined;

  /**
   * The provider configuration details.
   *
   * @public
   */
  ProviderConfiguration?: CspmProviderDetail | undefined;
}

/**
 * A summary of a CSPM connector.
 *
 * @public
 */
export interface CspmConnectorSummary {
  /**
   * The Amazon Resource Name (ARN) of the connector.
   *
   * @public
   */
  ConnectorArn?: string | undefined;

  /**
   * The unique identifier of the connector.
   *
   * @public
   */
  ConnectorId?: string | undefined;

  /**
   * The name of the connector.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the connector.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A summary of the cloud provider configuration for the connector.
   *
   * @public
   */
  ProviderSummary?: CspmProviderSummary | undefined;

  /**
   * The ISO 8601 UTC timestamp indicating when the connector was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The service principal that created the connector.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The enablement status of the connector.
   *
   * @public
   */
  EnablementStatus?: CspmEnablementStatus | undefined;
}

/**
 * Represents a specific health issue detected for a connector.
 *
 * @public
 */
export interface HealthIssue {
  /**
   * The error code that identifies the type of health issue.
   *
   * @public
   */
  Code: HealthIssueCode | undefined;

  /**
   * A human-readable message that describes the health issue.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * Information about the operational status and health of a CSPM connector.
 *
 * @public
 */
export interface CspmHealthCheck {
  /**
   * The connectivity status of the connector.
   *
   * @public
   */
  ConnectorStatus: CspmConnectorStatus | undefined;

  /**
   * A message describing the reason for the current connector status.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The ISO 8601 UTC timestamp indicating when the health status was last checked.
   *
   * @public
   */
  LastCheckedAt: Date | undefined;

  /**
   * A list of health issues associated with the connector.
   *
   * @public
   */
  Issues?: HealthIssue[] | undefined;
}

/**
 * The cloud provider configuration for updating a connector. This is a union type that currently supports Azure.
 *
 * @public
 */
export type CspmProviderUpdateConfiguration =
  | CspmProviderUpdateConfiguration.AzureMember
  | CspmProviderUpdateConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace CspmProviderUpdateConfiguration {
  /**
   * The Azure update configuration.
   *
   * @public
   */
  export interface AzureMember {
    Azure: AzureUpdateConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Azure?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Azure: (value: AzureUpdateConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface DeclineInvitationsRequest {
  /**
   * The list of prospective member account IDs for which to decline an invitation.
   *
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeclineInvitationsResponse {
  /**
   * The list of Amazon Web Services accounts that were not processed. For each account, the list includes the account ID and the email address.
   *
   * @public
   */
  UnprocessedAccounts?: Result[] | undefined;
}

/**
 * @public
 */
export interface DeleteActionTargetRequest {
  /**
   * The Amazon Resource Name (ARN) of the custom action target to delete.
   *
   * @public
   */
  ActionTargetArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteActionTargetResponse {
  /**
   * The ARN of the custom action target that was deleted.
   *
   * @public
   */
  ActionTargetArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAggregatorV2Request {
  /**
   * The ARN of the Aggregator V2.
   *
   * @public
   */
  AggregatorV2Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAggregatorV2Response {}

/**
 * @public
 */
export interface DeleteAutomationRuleV2Request {
  /**
   * The ARN of the V2 automation rule.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteAutomationRuleV2Response {}

/**
 * @public
 */
export interface DeleteConfigurationPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) or universally unique identifier (UUID) of the configuration policy.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfigurationPolicyResponse {}

/**
 * @public
 */
export interface DeleteConnectorRequest {
  /**
   * The unique identifier of the connector to delete.
   *
   * @public
   */
  ConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectorResponse {
  /**
   * The enablement status of the connector after the delete request.
   *
   * @public
   */
  EnablementStatus?: CspmEnablementStatus | undefined;
}

/**
 * @public
 */
export interface DeleteConnectorV2Request {
  /**
   * The UUID of the connectorV2 to identify connectorV2 resource.
   *
   * @public
   */
  ConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectorV2Response {
  /**
   * The enablement status of the connector after deletion.
   *
   * @public
   */
  EnablementStatus?: EnablementStatus | undefined;
}

/**
 * @public
 */
export interface DeleteFindingAggregatorRequest {
  /**
   * The ARN of the finding aggregator to delete. To obtain the ARN, use `ListFindingAggregators`.
   *
   * @public
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
   * The ARN of the insight to delete.
   *
   * @public
   */
  InsightArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteInsightResponse {
  /**
   * The ARN of the insight that was deleted.
   *
   * @public
   */
  InsightArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteInvitationsRequest {
  /**
   * The list of member account IDs that received the invitations you want to delete.
   *
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteInvitationsResponse {
  /**
   * The list of Amazon Web Services accounts for which the invitations were not deleted. For each account, the list includes the account ID and the email address.
   *
   * @public
   */
  UnprocessedAccounts?: Result[] | undefined;
}

/**
 * @public
 */
export interface DeleteMembersRequest {
  /**
   * The list of account IDs for the member accounts to delete.
   *
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteMembersResponse {
  /**
   * The list of Amazon Web Services accounts that were not deleted. For each account, the list includes the account ID and the email address.
   *
   * @public
   */
  UnprocessedAccounts?: Result[] | undefined;
}

/**
 * @public
 */
export interface DescribeActionTargetsRequest {
  /**
   * A list of custom action target ARNs for the custom action targets to retrieve.
   *
   * @public
   */
  ActionTargetArns?: string[] | undefined;

  /**
   * The token that is required for pagination. On your first call to the `DescribeActionTargets` operation, set the value of this parameter to `NULL`.
   *
   * For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeActionTargetsResponse {
  /**
   * A list of `ActionTarget` objects. Each object includes the `ActionTargetArn`, `Description`, and `Name` of a custom action target available in Security Hub CSPM.
   *
   * @public
   */
  ActionTargets: ActionTarget[] | undefined;

  /**
   * The pagination token to use to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeHubRequest {
  /**
   * The ARN of the Hub resource to retrieve.
   *
   * @public
   */
  HubArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeHubResponse {
  /**
   * The ARN of the Hub resource that was retrieved.
   *
   * @public
   */
  HubArn?: string | undefined;

  /**
   * The date and time when Security Hub CSPM was enabled in the account.
   *
   * @public
   */
  SubscribedAt?: string | undefined;

  /**
   * Whether to automatically enable new controls when they are added to standards that are enabled.
   *
   * If set to `true`, then new controls for enabled standards are enabled automatically. If set to `false`, then new controls are not enabled.
   *
   * When you automatically enable new controls, you can interact with the controls in the console and programmatically immediately after release. However, automatically enabled controls have a temporary default status of `DISABLED`. It can take up to several days for Security Hub CSPM to process the control release and designate the control as `ENABLED` in your account. During the processing period, you can manually enable or disable a control, and Security Hub CSPM will maintain that designation regardless of whether you have `AutoEnableControls` set to `true`.
   *
   * @public
   */
  AutoEnableControls?: boolean | undefined;

  /**
   * Specifies whether the calling account has consolidated control findings turned on. If the value for this field is set to `SECURITY_CONTROL`, Security Hub CSPM generates a single finding for a control check even when the check applies to multiple enabled standards.
   *
   * If the value for this field is set to `STANDARD_CONTROL`, Security Hub CSPM generates separate findings for a control check when the check applies to multiple enabled standards.
   *
   * The value for this field in a member account matches the value in the administrator account. For accounts that aren't part of an organization, the default value of this field is `SECURITY_CONTROL` if you enabled Security Hub CSPM on or after February 23, 2023.
   *
   * @public
   */
  ControlFindingGenerator?: ControlFindingGenerator | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConfigurationRequest {}

/**
 * Provides information about the way an organization is configured in Security Hub CSPM.
 *
 * @public
 */
export interface OrganizationConfiguration {
  /**
   * Indicates whether the organization uses local or central configuration.
   *
   * If you use local configuration, the Security Hub CSPM delegated administrator can set `AutoEnable` to `true` and `AutoEnableStandards` to `DEFAULT`. This automatically enables Security Hub CSPM and default security standards in new organization accounts. These new account settings must be set separately in each Amazon Web Services Region, and settings may be different in each Region.
   *
   * If you use central configuration, the delegated administrator can create configuration policies. Configuration policies can be used to configure Security Hub CSPM, security standards, and security controls in multiple accounts and Regions. If you want new organization accounts to use a specific configuration, you can create a configuration policy and associate it with the root or specific organizational units (OUs). New accounts will inherit the policy from the root or their assigned OU.
   *
   * @public
   */
  ConfigurationType?: OrganizationConfigurationConfigurationType | undefined;

  /**
   * Describes whether central configuration could be enabled as the `ConfigurationType` for the organization. If your `ConfigurationType` is local configuration, then the value of `Status` is always `ENABLED`.
   *
   * @public
   */
  Status?: OrganizationConfigurationStatus | undefined;

  /**
   * Provides an explanation if the value of `Status` is equal to `FAILED` when `ConfigurationType` is equal to `CENTRAL`.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConfigurationResponse {
  /**
   * Whether to automatically enable Security Hub CSPM in new member accounts when they join the organization.
   *
   * If set to `true`, then Security Hub CSPM is automatically enabled in new accounts. If set to `false`, then Security Hub CSPM isn't enabled in new accounts automatically. The default value is `false`.
   *
   * If the `ConfigurationType` of your organization is set to `CENTRAL`, then this field is set to `false` and can't be changed in the home Region and linked Regions. However, in that case, the delegated administrator can create a configuration policy in which Security Hub CSPM is enabled and associate the policy with new organization accounts.
   *
   * @public
   */
  AutoEnable?: boolean | undefined;

  /**
   * Whether the maximum number of allowed member accounts are already associated with the Security Hub CSPM administrator account.
   *
   * @public
   */
  MemberAccountLimitReached?: boolean | undefined;

  /**
   * Whether to automatically enable Security Hub CSPM [default standards](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-enable-disable.html) in new member accounts when they join the organization.
   *
   * If equal to `DEFAULT`, then Security Hub CSPM default standards are automatically enabled for new member accounts. If equal to `NONE`, then default standards are not automatically enabled for new member accounts. The default value of this parameter is equal to `DEFAULT`.
   *
   * If the `ConfigurationType` of your organization is set to `CENTRAL`, then this field is set to `NONE` and can't be changed in the home Region and linked Regions. However, in that case, the delegated administrator can create a configuration policy in which specific security standards are enabled and associate the policy with new organization accounts.
   *
   * @public
   */
  AutoEnableStandards?: AutoEnableStandards | undefined;

  /**
   * Provides information about the way an organization is configured in Security Hub CSPM.
   *
   * @public
   */
  OrganizationConfiguration?: OrganizationConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeProductsRequest {
  /**
   * The token that is required for pagination. On your first call to the `DescribeProducts` operation, set the value of this parameter to `NULL`.
   *
   * For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The ARN of the integration to return.
   *
   * @public
   */
  ProductArn?: string | undefined;
}

/**
 * Contains details about a product.
 *
 * @public
 */
export interface Product {
  /**
   * The ARN assigned to the product.
   *
   * @public
   */
  ProductArn: string | undefined;

  /**
   * The name of the product.
   *
   * @public
   */
  ProductName?: string | undefined;

  /**
   * The name of the company that provides the product.
   *
   * @public
   */
  CompanyName?: string | undefined;

  /**
   * A description of the product.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The categories assigned to the product.
   *
   * @public
   */
  Categories?: string[] | undefined;

  /**
   * The types of integration that the product supports. Available values are the following.
   *
   * - `SEND_FINDINGS_TO_SECURITY_HUB` - The integration sends findings to Security Hub CSPM.
   * - `RECEIVE_FINDINGS_FROM_SECURITY_HUB` - The integration receives findings from Security Hub CSPM.
   * - `UPDATE_FINDINGS_IN_SECURITY_HUB` - The integration does not send new findings to Security Hub CSPM, but does make updates to the findings that it receives from Security Hub CSPM.
   *
   * @public
   */
  IntegrationTypes?: IntegrationType[] | undefined;

  /**
   * For integrations with Amazon Web Services services, the Amazon Web Services Console URL from which to activate the service.
   *
   * For integrations with third-party products, the Amazon Web Services Marketplace URL from which to subscribe to or purchase the product.
   *
   * @public
   */
  MarketplaceUrl?: string | undefined;

  /**
   * The URL to the service or product documentation about the integration with Security Hub CSPM, including how to activate the integration.
   *
   * @public
   */
  ActivationUrl?: string | undefined;

  /**
   * The resource policy associated with the product.
   *
   * @public
   */
  ProductSubscriptionResourcePolicy?: string | undefined;
}

/**
 * @public
 */
export interface DescribeProductsResponse {
  /**
   * A list of products, including details for each product.
   *
   * @public
   */
  Products: Product[] | undefined;

  /**
   * The pagination token to use to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeProductsV2Request {
  /**
   * The token required for pagination. On your first call, set the value of this parameter to `NULL`. For subsequent calls, to continue listing data, set the value of this parameter to the value returned in the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Defines the structure for the productV2.
 *
 * @public
 */
export interface ProductV2 {
  /**
   * The name of the productV2.
   *
   * @public
   */
  ProductV2Name?: string | undefined;

  /**
   * The name of the organization or vendor that provides the productV2.
   *
   * @public
   */
  CompanyName?: string | undefined;

  /**
   * Detailed information about the productV2.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The domains or functional areas the productV2 addresses.
   *
   * @public
   */
  Categories?: string[] | undefined;

  /**
   * The type of integration.
   *
   * @public
   */
  IntegrationV2Types?: IntegrationV2Type[] | undefined;

  /**
   * The console URL where you can purchase or subscribe to products.
   *
   * @public
   */
  MarketplaceUrl?: string | undefined;

  /**
   * The URL to the serviceV@ or productV2 documentation about the integration, which includes how to activate the integration.
   *
   * @public
   */
  ActivationUrl?: string | undefined;

  /**
   * The identifier for the Amazon Web Services Marketplace product associated with this integration.
   *
   * @public
   */
  MarketplaceProductId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeProductsV2Response {
  /**
   * Gets information about the product integration.
   *
   * @public
   */
  ProductsV2: ProductV2[] | undefined;

  /**
   * The pagination token to use to request the next page of results. Otherwise, this parameter is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityHubV2Request {}

/**
 * Contains the status and metadata for an opt-in feature.
 *
 * @public
 */
export interface FeatureDetail {
  /**
   * The current enablement status of the feature. Valid values: `ENABLED` | `DISABLED`.
   *
   * @public
   */
  FeatureStatus?: FeatureStatus | undefined;

  /**
   * The date and time when the feature status was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityHubV2Response {
  /**
   * The ARN of the service resource.
   *
   * @public
   */
  HubV2Arn?: string | undefined;

  /**
   * The date and time when the service was enabled in the account.
   *
   * @public
   */
  SubscribedAt?: string | undefined;

  /**
   * A map of opt-in features and their current status and metadata for the account in the current Region.
   *
   * @public
   */
  Features?: Record<string, FeatureDetail> | undefined;
}

/**
 * @public
 */
export interface DescribeStandardsRequest {
  /**
   * The token that is required for pagination. On your first call to the `DescribeStandards` operation, set the value of this parameter to `NULL`.
   *
   * For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of standards to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A list of cloud providers to filter the standards by. For example, specify `Azure` to return only standards that evaluate Azure resources.
   *
   * @public
   */
  Providers?: StandardsProvider[] | undefined;
}

/**
 * Provides details about the management of a security standard.
 *
 * @public
 */
export interface StandardsManagedBy {
  /**
   * An identifier for the company that manages a specific security standard. For existing standards, the value is equal to `Amazon Web Services`.
   *
   * @public
   */
  Company?: string | undefined;

  /**
   * An identifier for the product that manages a specific security standard. For existing standards, the value is equal to the Amazon Web Services service that manages the standard.
   *
   * @public
   */
  Product?: string | undefined;
}

/**
 * Provides information about a specific security standard.
 *
 * @public
 */
export interface Standard {
  /**
   * The ARN of the standard.
   *
   * @public
   */
  StandardsArn?: string | undefined;

  /**
   * The name of the standard.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the standard.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Whether the standard is enabled by default. When Security Hub CSPM is enabled from the console, if a standard is enabled by default, the check box for that standard is selected by default.
   *
   * When Security Hub CSPM is enabled using the `EnableSecurityHub` API operation, the standard is enabled by default unless `EnableDefaultStandards` is set to `false`.
   *
   * @public
   */
  EnabledByDefault?: boolean | undefined;

  /**
   * The cloud provider whose resources the standard evaluates. For example, `AWS` or `Azure`.
   *
   * @public
   */
  Provider?: StandardsProvider | undefined;

  /**
   * Provides details about the management of a standard.
   *
   * @public
   */
  StandardsManagedBy?: StandardsManagedBy | undefined;
}

/**
 * @public
 */
export interface DescribeStandardsResponse {
  /**
   * A list of available standards.
   *
   * @public
   */
  Standards?: Standard[] | undefined;

  /**
   * The pagination token to use to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStandardsControlsRequest {
  /**
   * The ARN of a resource that represents your subscription to a supported standard. To get the subscription ARNs of the standards you have enabled, use the `GetEnabledStandards` operation.
   *
   * @public
   */
  StandardsSubscriptionArn: string | undefined;

  /**
   * The token that is required for pagination. On your first call to the `DescribeStandardsControls` operation, set the value of this parameter to `NULL`.
   *
   * For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of security standard controls to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Details for an individual security standard control.
 *
 * @public
 */
export interface StandardsControl {
  /**
   * The ARN of the security standard control.
   *
   * @public
   */
  StandardsControlArn?: string | undefined;

  /**
   * The current status of the security standard control. Indicates whether the control is enabled or disabled. Security Hub CSPM does not check against disabled controls.
   *
   * @public
   */
  ControlStatus?: ControlStatus | undefined;

  /**
   * The reason provided for the most recent change in status for the control.
   *
   * @public
   */
  DisabledReason?: string | undefined;

  /**
   * The date and time that the status of the security standard control was most recently updated.
   *
   * @public
   */
  ControlStatusUpdatedAt?: Date | undefined;

  /**
   * The identifier of the security standard control.
   *
   * @public
   */
  ControlId?: string | undefined;

  /**
   * The title of the security standard control.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The longer description of the security standard control. Provides information about what the control is checking for.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A link to remediation information for the control in the Security Hub CSPM user documentation.
   *
   * @public
   */
  RemediationUrl?: string | undefined;

  /**
   * The severity of findings generated from this security standard control.
   *
   * The finding severity is based on an assessment of how easy it would be to compromise Amazon Web Services resources if the issue is detected.
   *
   * @public
   */
  SeverityRating?: SeverityRating | undefined;

  /**
   * The list of requirements that are related to this control.
   *
   * @public
   */
  RelatedRequirements?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeStandardsControlsResponse {
  /**
   * A list of security standards controls.
   *
   * @public
   */
  Controls?: StandardsControl[] | undefined;

  /**
   * The pagination token to use to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisableImportFindingsForProductRequest {
  /**
   * The ARN of the integrated product to disable the integration for.
   *
   * @public
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
   * The Amazon Web Services account identifier of the Security Hub CSPM administrator account.
   *
   * @public
   */
  AdminAccountId: string | undefined;

  /**
   * The feature for which the delegated admin account is disabled. Defaults to Security Hub CSPM if not specified.
   *
   * @public
   */
  Feature?: SecurityHubFeature | undefined;
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
export interface DisableSecurityHubFeatureV2Request {
  /**
   * The name of the feature to disable.
   *
   * @public
   */
  FeatureName: FeatureName | undefined;
}

/**
 * @public
 */
export interface DisableSecurityHubFeatureV2Response {}

/**
 * @public
 */
export interface DisableSecurityHubV2Request {}

/**
 * @public
 */
export interface DisableSecurityHubV2Response {}

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
   * The account IDs of the member accounts to disassociate from the administrator account.
   *
   * @public
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
   * The ARN of the product to enable the integration for.
   *
   * @public
   */
  ProductArn: string | undefined;
}

/**
 * @public
 */
export interface EnableImportFindingsForProductResponse {
  /**
   * The ARN of your subscription to the product to enable integrations for.
   *
   * @public
   */
  ProductSubscriptionArn?: string | undefined;
}

/**
 * @public
 */
export interface EnableOrganizationAdminAccountRequest {
  /**
   * The Amazon Web Services account identifier of the account to designate as the Security Hub CSPM administrator account.
   *
   * @public
   */
  AdminAccountId: string | undefined;

  /**
   * The feature for which the delegated admin account is enabled. Defaults to Security Hub CSPM if not specified.
   *
   * @public
   */
  Feature?: SecurityHubFeature | undefined;
}

/**
 * @public
 */
export interface EnableOrganizationAdminAccountResponse {
  /**
   * The Amazon Web Services account identifier of the account to designate as the Security Hub CSPM administrator account.
   *
   * @public
   */
  AdminAccountId?: string | undefined;

  /**
   * The feature where the delegated administrator is enabled. The default is Security Hub CSPM CSPM if no delegated administrator is specified in the request.
   *
   * @public
   */
  Feature?: SecurityHubFeature | undefined;
}

/**
 * @public
 */
export interface EnableSecurityHubRequest {
  /**
   * The tags to add to the hub resource when you enable Security Hub CSPM.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Whether to enable the security standards that Security Hub CSPM has designated as automatically enabled. If you don't provide a value for `EnableDefaultStandards`, it is set to `true`. To not enable the automatically enabled standards, set `EnableDefaultStandards` to `false`.
   *
   * @public
   */
  EnableDefaultStandards?: boolean | undefined;

  /**
   * This field, used when enabling Security Hub CSPM, specifies whether the calling account has consolidated control findings turned on. If the value for this field is set to `SECURITY_CONTROL`, Security Hub CSPM generates a single finding for a control check even when the check applies to multiple enabled standards.
   *
   * If the value for this field is set to `STANDARD_CONTROL`, Security Hub CSPM generates separate findings for a control check when the check applies to multiple enabled standards.
   *
   * The value for this field in a member account matches the value in the administrator account. For accounts that aren't part of an organization, the default value of this field is `SECURITY_CONTROL` if you enabled Security Hub CSPM on or after February 23, 2023.
   *
   * @public
   */
  ControlFindingGenerator?: ControlFindingGenerator | undefined;
}

/**
 * @public
 */
export interface EnableSecurityHubResponse {}

/**
 * @public
 */
export interface EnableSecurityHubFeatureV2Request {
  /**
   * The name of the feature to enable.
   *
   * @public
   */
  FeatureName: FeatureName | undefined;
}

/**
 * @public
 */
export interface EnableSecurityHubFeatureV2Response {}

/**
 * @public
 */
export interface EnableSecurityHubV2Request {
  /**
   * The tags to add to the hub V2 resource when you enable Security Hub.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface EnableSecurityHubV2Response {
  /**
   * The ARN of the V2 resource that was created.
   *
   * @public
   */
  HubV2Arn?: string | undefined;
}

/**
 * The Amazon S3 destination for an export, including the bucket, the Amazon Web Services KMS key used for encryption, and an optional object key prefix.
 *
 * @public
 */
export interface S3ExportDestination {
  /**
   * The Amazon Resource Name (ARN) of the Amazon S3 bucket that Security Hub writes the export to. You must own the bucket, and its bucket policy must grant the Security Hub service principal (`exportv2.securityhub.amazonaws.com`) permission to write objects. For the required bucket policy, see the Examples section of `StartExportJobV2`.
   *
   * @public
   */
  BucketArn: string | undefined;

  /**
   * The ARN of the Amazon Web Services KMS key that Security Hub uses to encrypt the export objects with server-side encryption. The key policy must allow the Security Hub service principal (`exportv2.securityhub.amazonaws.com`) to use the key through Amazon S3. For the required key policy, see the Examples section of `StartExportJobV2`.
   *
   * The key must meet all of the following requirements:
   *
   * - It must be a symmetric key with a key usage of `ENCRYPT_DECRYPT`.
   * - It must be a single-Region key. Multi-Region keys, whose key IDs begin with `mrk-`, are rejected.
   * - You must specify the full key ARN. Key IDs and aliases are rejected.
   * - The key must be in the same Amazon Web Services account as the export job.
   * - The key must be in the same Amazon Web Services Region as the export job.
   * - The key must be in the `aws`, `aws-cn`, or `aws-us-gov` partition.
   *
   * @public
   */
  KmsKeyArn: string | undefined;

  /**
   * An optional key prefix that Security Hub prepends to the Amazon S3 object keys of the export output. Use a prefix to organize exports within the bucket. The value can be up to 512 characters.
   *
   * @public
   */
  ObjectPrefix?: string | undefined;
}

/**
 * Specifies where Security Hub writes the export output. This is a union: you must specify exactly one member. Currently, the only supported member is `S3`.
 *
 * @public
 */
export type ExportDestination =
  | ExportDestination.S3Member
  | ExportDestination.$UnknownMember;

/**
 * @public
 */
export namespace ExportDestination {
  /**
   * The Amazon Simple Storage Service (Amazon S3) bucket and Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Security Hub uses to write the export.
   *
   * @public
   */
  export interface S3Member {
    S3: S3ExportDestination;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    S3?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    S3: (value: S3ExportDestination) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A summary of the output configuration for a findings export, returned by `ListExportJobsV2`. Unlike the configuration returned by `GetExportJobV2`, it reports only the output format.
 *
 * @public
 */
export interface FindingsOutputSummary {
  /**
   * The output format of the export. `CSV` produces comma-separated rows that are suitable for spreadsheets and analysis tools. `OCSF_JSON` produces newline-delimited JSON records in the Open Cybersecurity Schema Framework (OCSF) format used elsewhere in Security Hub.
   *
   * @public
   */
  Format: FindingsExportFormat | undefined;
}

/**
 * A summary of the output configuration for an export job. The populated member corresponds to the data type that was exported.
 *
 * @public
 */
export type ExportOutputSummary =
  | ExportOutputSummary.FindingsMember
  | ExportOutputSummary.$UnknownMember;

/**
 * @public
 */
export namespace ExportOutputSummary {
  /**
   * The output configuration summary for a findings export.
   *
   * @public
   */
  export interface FindingsMember {
    Findings: FindingsOutputSummary;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Findings?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Findings: (value: FindingsOutputSummary) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Defines the data boundary for a findings export. Scopes determine which organizational units or organizations to retrieve data from.
 *
 * Only a delegated administrator can use this structure. If a delegated administrator omits it, the export covers the entire organization; any other caller exports only findings from its own account.
 *
 * @public
 */
export interface ExportScopes {
  /**
   * A list of Organizations scopes to include in the export. Each entry in the list specifies an organization or organizational unit to include for the delegated administrator's account. If the list specifies multiple entries, the entries are combined using OR logic.
   *
   * @public
   */
  AwsOrganizations?: AwsOrganizationScope[] | undefined;
}

/**
 * A summary of an export job, as returned by `ListExportJobsV2`.
 *
 * @public
 */
export interface ExportSummary {
  /**
   * The unique identifier of the export job.
   *
   * @public
   */
  ExportJobId: string | undefined;

  /**
   * The user-provided name of the export job, if one was specified.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The current state of the export job.
   *
   * @public
   */
  Status: ExportStatus | undefined;

  /**
   * The category of data that the export job produces.
   *
   * @public
   */
  DataType: ExportDataType | undefined;

  /**
   * The output configuration of the export job. For findings exports, this reports the output format. Present only for findings exports; absent for other data types.
   *
   * @public
   */
  OutputConfiguration?: ExportOutputSummary | undefined;

  /**
   * The organization scopes that the export job was started with, echoed verbatim. Absent if the caller didn't supply `Scopes`.
   *
   * @public
   */
  Scopes?: ExportScopes | undefined;

  /**
   * The destination that the export job writes to.
   *
   * @public
   */
  Destination: ExportDestination | undefined;

  /**
   * A code that classifies why the export job failed. Present only when `Status` is `FAILED`.
   *
   * @public
   */
  FailureCode?: ExportFailureCode | undefined;

  /**
   * A human-readable message about why the export job failed. Present only when `Status` is `FAILED`.
   *
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * The time when the export job was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * The time when the export job reached a terminal state. Absent while the job is `RUNNING`.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  EndedAt?: Date | undefined;
}

/**
 * Provides details about an exposure finding and the effect the specific remediation target has on it.
 *
 * @public
 */
export interface ExposureFinding {
  /**
   * The unique identifier (ID) of the Security Hub exposure finding, found under the `metadata.uid` field of the finding.
   *
   * @public
   */
  MetadataUid: string | undefined;

  /**
   * The title of the exposure finding.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * The severity of the exposure finding before the remediation target is resolved.
   *
   * @public
   */
  PreviousSeverity: ExposureSeverity | undefined;

  /**
   * The severity of the exposure finding after the remediation target is resolved.
   *
   * @public
   */
  ProjectedSeverity: ExposureSeverity | undefined;

  /**
   * The impact resolving a remediation target has on the exposure finding.
   *
   * - `Reduces` specifies that resolving the remediation target lowers the severity of the exposure finding, but does not resolve it.
   * - `Resolves` specifies that resolving the remediation target resolves the exposure finding.
   * - `Unchanged` specifies that resolving the remediation target does not change the severity of the exposure finding.
   *
   * @public
   */
  Impact: ExposureImpact | undefined;
}

/**
 * A finding aggregator is a Security Hub CSPM resource that specifies cross-Region aggregation settings, including the home Region and any linked Regions.
 *
 * @public
 */
export interface FindingAggregator {
  /**
   * The ARN of the finding aggregator. You use the finding aggregator ARN to retrieve details for, update, and delete the finding aggregator.
   *
   * @public
   */
  FindingAggregatorArn?: string | undefined;
}

/**
 * An array of objects that provides details about a change to a finding, including the Amazon Web Services Security Finding Format (ASFF) field that changed, the value of the field before the change, and the value of the field after the change.
 *
 * @public
 */
export interface FindingHistoryUpdate {
  /**
   * The ASFF field that changed during the finding change event.
   *
   * @public
   */
  UpdatedField?: string | undefined;

  /**
   * The value of the ASFF field before the finding change event.
   *
   * @public
   */
  OldValue?: string | undefined;

  /**
   * The value of the ASFF field after the finding change event. To preserve storage and readability, Security Hub CSPM omits this value if [`FindingHistoryRecord`](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_FindingHistoryRecord.html) exceeds database limits.
   *
   * @public
   */
  NewValue?: string | undefined;
}

/**
 * Identifies the source of the finding change event.
 *
 * @public
 */
export interface FindingHistoryUpdateSource {
  /**
   * Describes the type of finding change event, such as a call to [`BatchImportFindings`](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchImportFindings.html) (by an integrated Amazon Web Services service or third party partner integration) or [`BatchUpdateFindings`](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateFindings.html) (by a Security Hub CSPM customer).
   *
   * @public
   */
  Type?: FindingHistoryUpdateSourceType | undefined;

  /**
   * The identity of the source that initiated the finding change event. For example, the Amazon Resource Name (ARN) of a partner that calls BatchImportFindings or of a customer that calls BatchUpdateFindings.
   *
   * @public
   */
  Identity?: string | undefined;
}

/**
 * A list of events that changed the specified finding during the specified time period. Each record represents a single finding change event.
 *
 * @public
 */
export interface FindingHistoryRecord {
  /**
   * Identifies which finding to get the finding history for.
   *
   * @public
   */
  FindingIdentifier?: AwsSecurityFindingIdentifier | undefined;

  /**
   * A timestamp that indicates when Security Hub CSPM processed the updated finding record.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  UpdateTime?: Date | undefined;

  /**
   * Identifies whether the event marks the creation of a new finding. A value of `True` means that the finding is newly created. A value of `False` means that the finding isn’t newly created.
   *
   * @public
   */
  FindingCreated?: boolean | undefined;

  /**
   * Identifies the source of the event that changed the finding. For example, an integrated Amazon Web Services service or third-party partner integration may call [`BatchImportFindings`](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchImportFindings.html), or an Security Hub CSPM customer may call [`BatchUpdateFindings`](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateFindings.html).
   *
   * @public
   */
  UpdateSource?: FindingHistoryUpdateSource | undefined;

  /**
   * An array of objects that provides details about the finding change event, including the Amazon Web Services Security Finding Format (ASFF) field that changed, the value of the field before the change, and the value of the field after the change.
   *
   * @public
   */
  Updates?: FindingHistoryUpdate[] | undefined;

  /**
   * A token for pagination purposes. Provide this token in the subsequent request to [`GetFindingsHistory`](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetFindingsHistory.html) to get up to an additional 100 results of history for the same finding that you specified in your initial request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Defines the data boundary for a findings query. Scopes determine which organizational units or organizations to retrieve data from.
 *
 * @public
 */
export interface FindingScopes {
  /**
   * A list of Organizations scopes to include in the query results. Each entry in the list specifies an organization or organizational unit to include for the delegated administrator's account. If the list specifies multiple entries, the entries are combined using OR logic.
   *
   * @public
   */
  AwsOrganizations?: AwsOrganizationScope[] | undefined;
}

/**
 * A filter for string-based fields in findings trend data.
 *
 * @public
 */
export interface FindingsTrendsStringFilter {
  /**
   * The name of the findings field to filter on. You can specify one of the following fields.
   *
   * - `account_id` – The Amazon Web Services account ID associated with the finding.
   * - `region` – The Amazon Web Services Region associated with the finding.
   * - `finding_types` – The finding types associated with the finding.
   * - `finding_status` – The status of the finding.
   * - `finding_cve_ids` – The Common Vulnerabilities and Exposures (CVE) identifiers associated with the finding.
   * - `finding_compliance_status` – The compliance status of the finding.
   * - `finding_control_id` – The identifier of the security control associated with the finding.
   * - `finding_class_name` – The finding class, such as `Compliance Finding`.
   * - `finding_provider` – The name of the product that generated the finding.
   * - `finding_activity_name` – The activity name associated with the finding.
   * - `resource_cloud_providers` – The cloud providers of the resources that the finding is associated with. Valid values are `AWS` and `Azure`.
   * - `resource_regions` – The Regions of the associated resources. For an Amazon Web Services resource, this is the Amazon Web Services Region. For an Azure resource, this is the Azure Region, such as `eastus`.
   * - `resource_owner_ids` – The identifiers of the accounts that own the associated resources. For an Amazon Web Services resource, this is the Amazon Web Services account ID. For an Azure resource, this is the Azure subscription ID.
   * - `resource_owner_organization_ids` – The identifiers of the organizations that own the associated resources. For an Amazon Web Services resource, this is the Amazon Web Services organization ID. For an Azure resource, this is the Azure tenant ID.
   *
   * @public
   */
  FieldName?: FindingsTrendsStringField | undefined;

  /**
   * A string filter for filtering Security Hub CSPM findings.
   *
   * @public
   */
  Filter?: StringFilter | undefined;
}

/**
 * @public
 */
export interface GenerateRecommendedPolicyV2Request {
  /**
   * The unique identifier (ID) of Security Hub OCSF findings found under the `metadata.uid` field of the finding.
   *
   * @public
   */
  MetadataUid: string | undefined;
}

/**
 * @public
 */
export interface GenerateRecommendedPolicyV2Response {}

/**
 * @public
 */
export interface GetAdministratorAccountRequest {}

/**
 * Details about an invitation.
 *
 * @public
 */
export interface Invitation {
  /**
   * The account ID of the Security Hub CSPM administrator account that the invitation was sent from.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The ID of the invitation sent to the member account.
   *
   * @public
   */
  InvitationId?: string | undefined;

  /**
   * The timestamp of when the invitation was sent.
   *
   * @public
   */
  InvitedAt?: Date | undefined;

  /**
   * The current status of the association between the member and administrator accounts.
   *
   * @public
   */
  MemberStatus?: string | undefined;
}

/**
 * @public
 */
export interface GetAdministratorAccountResponse {
  /**
   * Details about an invitation.
   *
   * @public
   */
  Administrator?: Invitation | undefined;
}

/**
 * @public
 */
export interface GetAggregatorV2Request {
  /**
   * The ARN of the Aggregator V2.
   *
   * @public
   */
  AggregatorV2Arn: string | undefined;
}

/**
 * @public
 */
export interface GetAggregatorV2Response {
  /**
   * The ARN of the Aggregator V2.
   *
   * @public
   */
  AggregatorV2Arn?: string | undefined;

  /**
   * The Amazon Web Services Region where data is aggregated.
   *
   * @public
   */
  AggregationRegion?: string | undefined;

  /**
   * Determines how Regions are linked to an Aggregator V2.
   *
   * @public
   */
  RegionLinkingMode?: string | undefined;

  /**
   * The list of Regions that are linked to the aggregation Region.
   *
   * @public
   */
  LinkedRegions?: string[] | undefined;
}

/**
 * @public
 */
export interface GetAutomationRuleV2Request {
  /**
   * The ARN of the V2 automation rule.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetConfigurationPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) or universally unique identifier (UUID) of the configuration policy.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetConfigurationPolicyResponse {
  /**
   * The ARN of the configuration policy.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The UUID of the configuration policy.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the configuration policy.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the configuration policy.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time, in UTC and ISO 8601 format, that the configuration policy was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The date and time, in UTC and ISO 8601 format, that the configuration policy was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * An object that defines how Security Hub CSPM is configured. It includes whether Security Hub CSPM is enabled or disabled, a list of enabled security standards, a list of enabled or disabled security controls, and a list of custom parameter values for specified controls. If the policy includes a list of security controls that are enabled, Security Hub CSPM disables all other controls (including newly released controls). If the policy includes a list of security controls that are disabled, Security Hub CSPM enables all other controls (including newly released controls).
   *
   * @public
   */
  ConfigurationPolicy?: Policy | undefined;
}

/**
 * @public
 */
export interface GetConfigurationPolicyAssociationRequest {
  /**
   * The target account ID, organizational unit ID, or the root ID to retrieve the association for.
   *
   * @public
   */
  Target: Target | undefined;
}

/**
 * @public
 */
export interface GetConfigurationPolicyAssociationResponse {
  /**
   * The universally unique identifier (UUID) of a configuration policy. For self-managed behavior, the value is `SELF_MANAGED_SECURITY_HUB`.
   *
   * @public
   */
  ConfigurationPolicyId?: string | undefined;

  /**
   * The target account ID, organizational unit ID, or the root ID for which the association is retrieved.
   *
   * @public
   */
  TargetId?: string | undefined;

  /**
   * Specifies whether the target is an Amazon Web Services account, organizational unit, or the organization root.
   *
   * @public
   */
  TargetType?: TargetType | undefined;

  /**
   * Indicates whether the association between the specified target and the configuration was directly applied by the Security Hub CSPM delegated administrator or inherited from a parent.
   *
   * @public
   */
  AssociationType?: AssociationType | undefined;

  /**
   * The date and time, in UTC and ISO 8601 format, that the configuration policy association was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The current status of the association between the specified target and the configuration.
   *
   * @public
   */
  AssociationStatus?: ConfigurationPolicyAssociationStatus | undefined;

  /**
   * The explanation for a `FAILED` value for `AssociationStatus`.
   *
   * @public
   */
  AssociationStatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetConnectorRequest {
  /**
   * The unique identifier of the connector to retrieve.
   *
   * @public
   */
  ConnectorId: string | undefined;
}

/**
 * @public
 */
export interface GetConnectorResponse {
  /**
   * The Amazon Resource Name (ARN) of the connector.
   *
   * @public
   */
  ConnectorArn?: string | undefined;

  /**
   * The unique identifier of the connector.
   *
   * @public
   */
  ConnectorId: string | undefined;

  /**
   * The name of the connector.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the connector.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ISO 8601 UTC timestamp indicating when the connector was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The ISO 8601 UTC timestamp indicating when the connector was last updated.
   *
   * @public
   */
  LastUpdatedAt: Date | undefined;

  /**
   * The health status of the connector, including connectivity status and last check time.
   *
   * @public
   */
  Health: CspmHealthCheck | undefined;

  /**
   * The cloud provider configuration details for the connector.
   *
   * @public
   */
  ProviderDetail: CspmProviderDetail | undefined;

  /**
   * The service principal that created the connector.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The enablement status of the connector.
   *
   * @public
   */
  EnablementStatus?: CspmEnablementStatus | undefined;
}

/**
 * @public
 */
export interface GetConnectorV2Request {
  /**
   * The UUID of the connectorV2 to identify connectorV2 resource.
   *
   * @public
   */
  ConnectorId: string | undefined;
}

/**
 * Information about the operational status and health of a connectorV2.
 *
 * @public
 */
export interface HealthCheck {
  /**
   * The status of the connectorV2.
   *
   * @public
   */
  ConnectorStatus: ConnectorStatus | undefined;

  /**
   * The message for the reason of connectorStatus change.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * ISO 8601 UTC timestamp for the time check the health status of the connectorV2.
   *
   * @public
   */
  LastCheckedAt: Date | undefined;

  /**
   * A list of health issues associated with the connector, including error codes and messages.
   *
   * @public
   */
  Issues?: HealthIssue[] | undefined;
}

/**
 * @public
 */
export interface GetConnectorV2Response {
  /**
   * The Amazon Resource Name (ARN) of the connectorV2.
   *
   * @public
   */
  ConnectorArn?: string | undefined;

  /**
   * The UUID of the connectorV2 to identify connectorV2 resource.
   *
   * @public
   */
  ConnectorId: string | undefined;

  /**
   * The name of the connectorV2.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the connectorV2.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of KMS key used for the connectorV2.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * ISO 8601 UTC timestamp for the time create the connectorV2.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * ISO 8601 UTC timestamp for the time update the connectorV2 connectorStatus.
   *
   * @public
   */
  LastUpdatedAt: Date | undefined;

  /**
   * The current health status for connectorV2
   *
   * @public
   */
  Health: HealthCheck | undefined;

  /**
   * The third-party provider detail for a service configuration.
   *
   * @public
   */
  ProviderDetail: ProviderDetail | undefined;

  /**
   * The enablement status of the connector.
   *
   * @public
   */
  EnablementStatus?: EnablementStatus | undefined;

  /**
   * The reason for the current enablement status. Provides additional context when the connector is in a failed state.
   *
   * @public
   */
  EnablementStatusReason?: string | undefined;
}

/**
 * @public
 */
export interface GetEnabledStandardsRequest {
  /**
   * The list of the standards subscription ARNs for the standards to retrieve.
   *
   * @public
   */
  StandardsSubscriptionArns?: string[] | undefined;

  /**
   * The token that is required for pagination. On your first call to the `GetEnabledStandards` operation, set the value of this parameter to `NULL`.
   *
   * For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A list of cloud providers to filter the enabled standards by. For example, specify `Azure` to return only enabled standards that evaluate Azure resources.
   *
   * @public
   */
  Providers?: StandardsProvider[] | undefined;
}

/**
 * @public
 */
export interface GetEnabledStandardsResponse {
  /**
   * The list of `StandardsSubscriptions` objects that include information about the enabled standards.
   *
   * @public
   */
  StandardsSubscriptions?: StandardsSubscription[] | undefined;

  /**
   * The pagination token to use to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetExportJobV2Request {
  /**
   * The unique identifier of the export job to retrieve. This is the value returned by `StartExportJobV2`.
   *
   * @public
   */
  ExportJobId: string | undefined;
}

/**
 * @public
 */
export interface GetFindingAggregatorRequest {
  /**
   * The ARN of the finding aggregator to return details for. To obtain the ARN, use `ListFindingAggregators`.
   *
   * @public
   */
  FindingAggregatorArn: string | undefined;
}

/**
 * @public
 */
export interface GetFindingAggregatorResponse {
  /**
   * The ARN of the finding aggregator.
   *
   * @public
   */
  FindingAggregatorArn?: string | undefined;

  /**
   * The home Region. Findings generated in linked Regions are replicated and sent to the home Region.
   *
   * @public
   */
  FindingAggregationRegion?: string | undefined;

  /**
   * Indicates whether to link all Regions, all Regions except for a list of excluded Regions, or a list of included Regions.
   *
   * @public
   */
  RegionLinkingMode?: string | undefined;

  /**
   * The list of excluded Regions or included Regions.
   *
   * @public
   */
  Regions?: string[] | undefined;
}

/**
 * @public
 */
export interface GetFindingHistoryRequest {
  /**
   * Identifies which finding to get the finding history for.
   *
   * @public
   */
  FindingIdentifier: AwsSecurityFindingIdentifier | undefined;

  /**
   * A timestamp that indicates the start time of the requested finding history.
   *
   * If you provide values for both `StartTime` and `EndTime`, Security Hub CSPM returns finding history for the specified time period. If you provide a value for `StartTime` but not for `EndTime`, Security Hub CSPM returns finding history from the `StartTime` to the time at which the API is called. If you provide a value for `EndTime` but not for `StartTime`, Security Hub CSPM returns finding history from the [CreatedAt](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_AwsSecurityFindingFilters.html#securityhub-Type-AwsSecurityFindingFilters-CreatedAt) timestamp of the finding to the `EndTime`. If you provide neither `StartTime` nor `EndTime`, Security Hub CSPM returns finding history from the `CreatedAt` timestamp of the finding to the time at which the API is called. In all of these scenarios, the response is limited to 100 results.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * An ISO 8601-formatted timestamp that indicates the end time of the requested finding history.
   *
   * If you provide values for both `StartTime` and `EndTime`, Security Hub CSPM returns finding history for the specified time period. If you provide a value for `StartTime` but not for `EndTime`, Security Hub CSPM returns finding history from the `StartTime` to the time at which the API is called. If you provide a value for `EndTime` but not for `StartTime`, Security Hub CSPM returns finding history from the [CreatedAt](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_AwsSecurityFindingFilters.html#securityhub-Type-AwsSecurityFindingFilters-CreatedAt) timestamp of the finding to the `EndTime`. If you provide neither `StartTime` nor `EndTime`, Security Hub CSPM returns finding history from the `CreatedAt` timestamp of the finding to the time at which the API is called. In all of these scenarios, the response is limited to 100 results.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * A token for pagination purposes. Provide `NULL` as the initial value. In subsequent requests, provide the token included in the response to get up to an additional 100 results of finding history. If you don’t provide `NextToken`, Security Hub CSPM returns up to 100 results of finding history for each request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned. If you don’t provide it, Security Hub CSPM returns up to 100 results of finding history.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetFindingHistoryResponse {
  /**
   * A list of events that altered the specified finding during the specified time period.
   *
   * @public
   */
  Records?: FindingHistoryRecord[] | undefined;

  /**
   * A token for pagination purposes. Provide this token in the subsequent request to `GetFindingsHistory` to get up to an additional 100 results of history for the same finding that you specified in your initial request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A collection of finding attributes used to sort findings.
 *
 * @public
 */
export interface SortCriterion {
  /**
   * The finding attribute used to sort findings.
   *
   * @public
   */
  Field?: string | undefined;

  /**
   * The order used to sort findings.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface GetFindingsRequest {
  /**
   * The finding attributes used to define a condition to filter the returned findings.
   *
   * You can filter by up to 10 finding attributes. For each attribute, you can provide up to 20 filter values.
   *
   * Note that in the available filter fields, `WorkflowState` is deprecated. To search for a finding based on its workflow status, use `WorkflowStatus`.
   *
   * @public
   */
  Filters?: AwsSecurityFindingFilters | undefined;

  /**
   * The finding attributes used to sort the list of returned findings.
   *
   * @public
   */
  SortCriteria?: SortCriterion[] | undefined;

  /**
   * The token that is required for pagination. On your first call to the `GetFindings` operation, set the value of this parameter to `NULL`.
   *
   * For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of findings to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetFindingsResponse {
  /**
   * The findings that matched the filters specified in the request.
   *
   * @public
   */
  Findings: AwsSecurityFinding[] | undefined;

  /**
   * The pagination token to use to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents individual aggregated results when grouping security findings for each `GroupByField`.
 *
 * @public
 */
export interface GroupByValue {
  /**
   * The value of the field by which findings are grouped.
   *
   * @public
   */
  FieldValue?: string | undefined;

  /**
   * The number of findings for a specific `FieldValue` and `GroupByField`.
   *
   * @public
   */
  Count?: number | undefined;
}

/**
 * Represents finding statistics grouped by `GroupedByField`.
 *
 * @public
 */
export interface GroupByResult {
  /**
   * The attribute by which filtered security findings should be grouped.
   *
   * @public
   */
  GroupByField?: string | undefined;

  /**
   * An array of grouped values and their respective counts for each `GroupByField`.
   *
   * @public
   */
  GroupByValues?: GroupByValue[] | undefined;
}

/**
 * @public
 */
export interface GetFindingStatisticsV2Response {
  /**
   * Aggregated statistics about security findings based on specified grouping criteria.
   *
   * @public
   */
  GroupByResults?: GroupByResult[] | undefined;
}

/**
 * Contains counts of findings grouped by severity level for trend analysis.
 *
 * @public
 */
export interface SeverityTrendsCount {
  /**
   * The count of findings with Unknown severity level at this point in the trend timeline.
   *
   * @public
   */
  Unknown: number | undefined;

  /**
   * The count of findings with Informational severity level at this point in the trend timeline.
   *
   * @public
   */
  Informational: number | undefined;

  /**
   * The count of findings with Low severity level at this point in the trend timeline.
   *
   * @public
   */
  Low: number | undefined;

  /**
   * The count of findings with Medium severity level at this point in the trend timeline.
   *
   * @public
   */
  Medium: number | undefined;

  /**
   * The count of findings with High severity level at this point in the trend timeline.
   *
   * @public
   */
  High: number | undefined;

  /**
   * The count of findings with Critical severity level at this point in the trend timeline.
   *
   * @public
   */
  Critical: number | undefined;

  /**
   * The count of findings with Fatal severity level at this point in the trend timeline.
   *
   * @public
   */
  Fatal: number | undefined;

  /**
   * The count of findings with severity levels not fitting into the standard categories at this point in the trend timeline.
   *
   * @public
   */
  Other: number | undefined;
}

/**
 * Contains the aggregated finding values for a specific point in the findings trend timeline.
 *
 * @public
 */
export interface TrendsValues {
  /**
   * The count of findings organized by severity level for this data point in the trend timeline.
   *
   * @public
   */
  SeverityTrends: SeverityTrendsCount | undefined;
}

/**
 * Contains the findings trend metrics data for a specific time point in the requested time period.
 *
 * @public
 */
export interface TrendsMetricsResult {
  /**
   * The timestamp for this data point in the findings trend metrics.
   *
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * The finding trend metric values associated with this timestamp, including severity counts.
   *
   * @public
   */
  TrendsValues: TrendsValues | undefined;
}

/**
 * @public
 */
export interface GetFindingsTrendsV2Response {
  /**
   * The time interval granularity for the returned trend data.
   *
   * @public
   */
  Granularity: GranularityField | undefined;

  /**
   * The collection of time-series trend metrics, including counts of findings by severity across the specified time period.
   *
   * @public
   */
  TrendsMetrics: TrendsMetricsResult[] | undefined;

  /**
   * The token to use for retrieving the next page of results, if more trend data is available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetFindingsV2Response {
  /**
   * An array of security findings returned by the operation.
   *
   * @public
   */
  Findings?: __DocumentType[] | undefined;

  /**
   * The pagination token to use to request the next page of results. Otherwise, this parameter is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInsightResultsRequest {
  /**
   * The ARN of the insight for which to return results.
   *
   * @public
   */
  InsightArn: string | undefined;
}

/**
 * The insight result values returned by the `GetInsightResults` operation.
 *
 * @public
 */
export interface InsightResultValue {
  /**
   * The value of the attribute that the findings are grouped by for the insight whose results are returned by the `GetInsightResults` operation.
   *
   * @public
   */
  GroupByAttributeValue: string | undefined;

  /**
   * The number of findings returned for each `GroupByAttributeValue`.
   *
   * @public
   */
  Count: number | undefined;
}

/**
 * The insight results returned by the `GetInsightResults` operation.
 *
 * @public
 */
export interface InsightResults {
  /**
   * The ARN of the insight whose results are returned by the `GetInsightResults` operation.
   *
   * @public
   */
  InsightArn: string | undefined;

  /**
   * The attribute that the findings are grouped by for the insight whose results are returned by the `GetInsightResults` operation.
   *
   * @public
   */
  GroupByAttribute: string | undefined;

  /**
   * The list of insight result values returned by the `GetInsightResults` operation.
   *
   * @public
   */
  ResultValues: InsightResultValue[] | undefined;
}

/**
 * @public
 */
export interface GetInsightResultsResponse {
  /**
   * The insight results returned by the operation.
   *
   * @public
   */
  InsightResults: InsightResults | undefined;
}

/**
 * @public
 */
export interface GetInsightsRequest {
  /**
   * The ARNs of the insights to describe. If you don't provide any insight ARNs, then `GetInsights` returns all of your custom insights. It does not return any managed insights.
   *
   * @public
   */
  InsightArns?: string[] | undefined;

  /**
   * The token that is required for pagination. On your first call to the `GetInsights` operation, set the value of this parameter to `NULL`.
   *
   * For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains information about a Security Hub CSPM insight.
 *
 * @public
 */
export interface Insight {
  /**
   * The ARN of a Security Hub CSPM insight.
   *
   * @public
   */
  InsightArn: string | undefined;

  /**
   * The name of a Security Hub CSPM insight.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * One or more attributes used to filter the findings included in the insight. You can filter by up to ten finding attributes. For each attribute, you can provide up to 20 filter values. The insight only includes findings that match the criteria defined in the filters.
   *
   * @public
   */
  Filters: AwsSecurityFindingFilters | undefined;

  /**
   * The grouping attribute for the insight's findings. Indicates how to group the matching findings, and identifies the type of item that the insight applies to. For example, if an insight is grouped by resource identifier, then the insight produces a list of resource identifiers.
   *
   * @public
   */
  GroupByAttribute: string | undefined;
}

/**
 * @public
 */
export interface GetInsightsResponse {
  /**
   * The insights returned by the operation.
   *
   * @public
   */
  Insights: Insight[] | undefined;

  /**
   * The pagination token to use to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
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
   * The number of all membership invitations sent to this Security Hub CSPM member account, not including the currently accepted invitation.
   *
   * @public
   */
  InvitationsCount?: number | undefined;
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
   * A list of details about the Security Hub CSPM administrator account for the current member account.
   *
   * @public
   */
  Master?: Invitation | undefined;
}

/**
 * @public
 */
export interface GetMembersRequest {
  /**
   * The list of account IDs for the Security Hub CSPM member accounts to return the details for.
   *
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * The details about a member account.
 *
 * @public
 */
export interface Member {
  /**
   * The Amazon Web Services account ID of the member account.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The email address of the member account.
   *
   * @public
   */
  Email?: string | undefined;

  /**
   * This is replaced by `AdministratorID`.
   *
   * The Amazon Web Services account ID of the Security Hub CSPM administrator account associated with this member account.
   *
   * @deprecated This field is deprecated, use AdministratorId instead.
   * @public
   */
  MasterId?: string | undefined;

  /**
   * The Amazon Web Services account ID of the Security Hub CSPM administrator account associated with this member account.
   *
   * @public
   */
  AdministratorId?: string | undefined;

  /**
   * The status of the relationship between the member account and its administrator account.
   *
   * The status can have one of the following values:
   *
   * - `Created` - Indicates that the administrator account added the member account, but has not yet invited the member account.
   * - `Invited` - Indicates that the administrator account invited the member account. The member account has not yet responded to the invitation.
   * - `Enabled` - Indicates that the member account is currently active. For manually invited member accounts, indicates that the member account accepted the invitation.
   * - `Removed` - Indicates that the administrator account disassociated the member account.
   * - `Resigned` - Indicates that the member account disassociated themselves from the administrator account.
   * - `Deleted` - Indicates that the administrator account deleted the member account.
   * - `AccountSuspended` - Indicates that an organization account was suspended from Amazon Web Services at the same time that the administrator account tried to enable the organization account as a member account.
   *
   * @public
   */
  MemberStatus?: string | undefined;

  /**
   * A timestamp for the date and time when the invitation was sent to the member account.
   *
   * @public
   */
  InvitedAt?: Date | undefined;

  /**
   * The timestamp for the date and time when the member account was updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetMembersResponse {
  /**
   * The list of details about the Security Hub CSPM member accounts.
   *
   * @public
   */
  Members?: Member[] | undefined;

  /**
   * The list of Amazon Web Services accounts that could not be processed. For each account, the list includes the account ID and the email address.
   *
   * @public
   */
  UnprocessedAccounts?: Result[] | undefined;
}

/**
 * @public
 */
export interface GetRecommendedPolicyV2Request {
  /**
   * The unique identifier (ID) of Security Hub OCSF findings found under the `metadata.uid` field of the finding.
   *
   * @public
   */
  MetadataUid: string | undefined;

  /**
   * The token used to paginate the `RecommendationSteps` list returned. On your first call to `GetRecommendedPolicyV2`, omit this parameter or set it to `NULL`. For subsequent calls, use the `NextToken` value returned in the previous response to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of recommendation steps to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains information about the reason that the retrieval of a recommended policy for a finding failed.
 *
 * @public
 */
export interface RecommendationError {
  /**
   * The error code for a failed retrieval of a recommended policy for a finding.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * The error message for a failed retrieval of a recommended policy for a finding.
   *
   * @public
   */
  Message?: string | undefined;
}
