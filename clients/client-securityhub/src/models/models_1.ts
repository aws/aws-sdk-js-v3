// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import {
  AccountDetails,
  Action,
  ActionTarget,
  Adjustment,
  AutoEnableStandards,
  AwsApiGatewayRestApiDetails,
  AwsApiGatewayStageDetails,
  AwsApiGatewayV2ApiDetails,
  AwsApiGatewayV2StageDetails,
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
  AwsDynamoDbTableDetails,
  AwsEc2EipDetails,
  AwsEc2InstanceDetails,
  AwsEc2LaunchTemplateDetails,
  AwsEc2NetworkAclDetails,
  AwsEc2NetworkInterfaceDetails,
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
  AwsEcsTaskDetails,
  AwsEfsAccessPointDetails,
  AwsEksClusterDetails,
  AwsElasticBeanstalkEnvironmentDetails,
  AwsElasticsearchDomainDetails,
  AwsElbLoadBalancerDetails,
  AwsElbv2LoadBalancerDetails,
  AwsIamAccessKeyDetails,
  AwsIamAttachedManagedPolicy,
  AwsIamGroupDetails,
} from "./models_0";
import { SecurityHubServiceException as __BaseException } from "./SecurityHubServiceException";

/**
 * <p>Information about a role associated with an instance profile.</p>
 */
export interface AwsIamInstanceProfileRole {
  /**
   * <p>The ARN of the role.</p>
   */
  Arn?: string;

  /**
   * <p>The policy that grants an entity permission to assume the role.</p>
   */
  AssumeRolePolicyDocument?: string;

  /**
   * <p>Indicates when the role was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreateDate?: string;

  /**
   * <p>The path to the role.</p>
   */
  Path?: string;

  /**
   * <p>The identifier of the role.</p>
   */
  RoleId?: string;

  /**
   * <p>The name of the role.</p>
   */
  RoleName?: string;
}

/**
 * <p>Information about an instance profile.</p>
 */
export interface AwsIamInstanceProfile {
  /**
   * <p>The ARN of the instance profile.</p>
   */
  Arn?: string;

  /**
   * <p>Indicates when the instance profile was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreateDate?: string;

  /**
   * <p>The identifier of the instance profile.</p>
   */
  InstanceProfileId?: string;

  /**
   * <p>The name of the instance profile.</p>
   */
  InstanceProfileName?: string;

  /**
   * <p>The path to the instance profile.</p>
   */
  Path?: string;

  /**
   * <p>The roles associated with the instance profile.</p>
   */
  Roles?: AwsIamInstanceProfileRole[];
}

/**
 * <p>Information about the policy used to set the permissions boundary for an IAM
 *          principal.</p>
 */
export interface AwsIamPermissionsBoundary {
  /**
   * <p>The ARN of the policy used to set the permissions boundary.</p>
   */
  PermissionsBoundaryArn?: string;

  /**
   * <p>The usage type for the permissions boundary.</p>
   */
  PermissionsBoundaryType?: string;
}

/**
 * <p>A version of an IAM policy.</p>
 */
export interface AwsIamPolicyVersion {
  /**
   * <p>The identifier of the policy version.</p>
   */
  VersionId?: string;

  /**
   * <p>Whether the version is the default version.</p>
   */
  IsDefaultVersion?: boolean;

  /**
   * <p>Indicates when the version was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreateDate?: string;
}

/**
 * <p>Represents an IAM permissions policy.</p>
 */
export interface AwsIamPolicyDetails {
  /**
   * <p>The number of users, groups, and roles that the policy is attached to.</p>
   */
  AttachmentCount?: number;

  /**
   * <p>When the policy was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreateDate?: string;

  /**
   * <p>The identifier of the default version of the policy.</p>
   */
  DefaultVersionId?: string;

  /**
   * <p>A description of the policy.</p>
   */
  Description?: string;

  /**
   * <p>Whether the policy can be attached to a user, group, or role.</p>
   */
  IsAttachable?: boolean;

  /**
   * <p>The path to the policy.</p>
   */
  Path?: string;

  /**
   * <p>The number of users and roles that use the policy to set the permissions
   *          boundary.</p>
   */
  PermissionsBoundaryUsageCount?: number;

  /**
   * <p>The unique identifier of the policy.</p>
   */
  PolicyId?: string;

  /**
   * <p>The name of the policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>List of versions of the policy.</p>
   */
  PolicyVersionList?: AwsIamPolicyVersion[];

  /**
   * <p>When the policy was most recently updated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  UpdateDate?: string;
}

/**
 * <p>An inline policy that is embedded in the role.</p>
 */
export interface AwsIamRolePolicy {
  /**
   * <p>The name of the policy.</p>
   */
  PolicyName?: string;
}

/**
 * <p>Contains information about an IAM role, including all of the role's policies.</p>
 */
export interface AwsIamRoleDetails {
  /**
   * <p>The trust policy that grants permission to assume the role.</p>
   */
  AssumeRolePolicyDocument?: string;

  /**
   * <p>The list of the managed policies that are attached to the role.</p>
   */
  AttachedManagedPolicies?: AwsIamAttachedManagedPolicy[];

  /**
   * <p>Indicates when the role was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreateDate?: string;

  /**
   * <p>The list of instance profiles that contain this role.</p>
   */
  InstanceProfileList?: AwsIamInstanceProfile[];

  /**
   * <p>Information about the policy used to set the permissions boundary for an IAM
   *          principal.</p>
   */
  PermissionsBoundary?: AwsIamPermissionsBoundary;

  /**
   * <p>The stable and unique string identifying the role.</p>
   */
  RoleId?: string;

  /**
   * <p>The friendly name that identifies the role.</p>
   */
  RoleName?: string;

  /**
   * <p>The list of inline policies that are embedded in the role.</p>
   */
  RolePolicyList?: AwsIamRolePolicy[];

  /**
   * <p>The maximum session duration (in seconds) that you want to set for the specified role.</p>
   */
  MaxSessionDuration?: number;

  /**
   * <p>The path to the role.</p>
   */
  Path?: string;
}

/**
 * <p>Information about an inline policy that is embedded in the user.</p>
 */
export interface AwsIamUserPolicy {
  /**
   * <p>The name of the policy.</p>
   */
  PolicyName?: string;
}

/**
 * <p>Information about an IAM user.</p>
 */
export interface AwsIamUserDetails {
  /**
   * <p>A list of the managed policies that are attached to the user.</p>
   */
  AttachedManagedPolicies?: AwsIamAttachedManagedPolicy[];

  /**
   * <p>Indicates when the user was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreateDate?: string;

  /**
   * <p>A list of IAM groups that the user belongs to.</p>
   */
  GroupList?: string[];

  /**
   * <p>The path to the user.</p>
   */
  Path?: string;

  /**
   * <p>The permissions boundary for the user.</p>
   */
  PermissionsBoundary?: AwsIamPermissionsBoundary;

  /**
   * <p>The unique identifier for the user.</p>
   */
  UserId?: string;

  /**
   * <p>The name of the user.</p>
   */
  UserName?: string;

  /**
   * <p>The list of inline policies that are embedded in the user.</p>
   */
  UserPolicyList?: AwsIamUserPolicy[];
}

/**
 * <p>Provides information about stream encryption.
 *       </p>
 */
export interface AwsKinesisStreamStreamEncryptionDetails {
  /**
   * <p>The encryption type to use.
   *       </p>
   */
  EncryptionType?: string;

  /**
   * <p>The globally unique identifier for the customer-managed KMS key to use for encryption. </p>
   */
  KeyId?: string;
}

/**
 * <p>Provides information about an Amazon Kinesis data stream.
 *       </p>
 */
export interface AwsKinesisStreamDetails {
  /**
   * <p>The name of the Kinesis stream. If you don't specify a name, CloudFront generates a unique
   * physical ID and uses that ID for the stream name.
   *       </p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Kinesis data stream.
   *       </p>
   */
  Arn?: string;

  /**
   * <p>When specified, enables or updates server-side encryption using an KMS key for a specified stream.
   * Removing this property from your stack template and updating your stack disables encryption.
   *       </p>
   */
  StreamEncryption?: AwsKinesisStreamStreamEncryptionDetails;

  /**
   * <p>The number of shards that the stream uses.
   *       </p>
   */
  ShardCount?: number;

  /**
   * <p>The number of hours for the data records that are stored in shards to remain accessible.
   *       </p>
   */
  RetentionPeriodHours?: number;
}

/**
 * <p>Contains metadata about an KMS key.</p>
 */
export interface AwsKmsKeyDetails {
  /**
   * <p>The twelve-digit account ID of the Amazon Web Services account that owns the KMS key.</p>
   */
  AWSAccountId?: string;

  /**
   * <p>Indicates when the KMS key was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreationDate?: number;

  /**
   * <p>The globally unique identifier for the KMS key.</p>
   */
  KeyId?: string;

  /**
   * <p>The manager of the KMS key. KMS keys in your Amazon Web Services account are either customer managed or Amazon Web Services managed.</p>
   */
  KeyManager?: string;

  /**
   * <p>The state of the KMS key. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Disabled</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Enabled</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PendingDeletion</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PendingImport</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Unavailable</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  KeyState?: string;

  /**
   * <p>The source of the KMS key material.</p>
   *          <p>When this value is <code>AWS_KMS</code>, KMS created the key material.</p>
   *          <p>When this value is <code>EXTERNAL</code>, the key material was imported from your
   *          existing key management infrastructure or the KMS key lacks key material.</p>
   *          <p>When this value is <code>AWS_CLOUDHSM</code>, the key material was created in the CloudHSM cluster associated with a custom key store.</p>
   */
  Origin?: string;

  /**
   * <p>A description of the KMS key.</p>
   */
  Description?: string;

  /**
   * <p>Whether the key has key rotation enabled.</p>
   */
  KeyRotationStatus?: boolean;
}

/**
 * <p>The code for the Lambda function. You can specify either an object in Amazon S3, or upload a deployment package directly.</p>
 */
export interface AwsLambdaFunctionCode {
  /**
   * <p>An Amazon S3 bucket in the same Amazon Web Services Region as your function. The bucket can be in a different Amazon Web Services account.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The Amazon S3 key of the deployment package.</p>
   */
  S3Key?: string;

  /**
   * <p>For versioned objects, the version of the deployment package object to use.</p>
   */
  S3ObjectVersion?: string;

  /**
   * <p>The base64-encoded contents of the deployment package. Amazon Web Services SDK and Amazon Web Services CLI clients handle the encoding for you.</p>
   */
  ZipFile?: string;
}

/**
 * <p>The dead-letter queue for failed asynchronous invocations.</p>
 */
export interface AwsLambdaFunctionDeadLetterConfig {
  /**
   * <p>The ARN of an SQS queue or SNS topic.</p>
   */
  TargetArn?: string;
}

/**
 * <p>Error messages for environment variables that could not be applied.</p>
 */
export interface AwsLambdaFunctionEnvironmentError {
  /**
   * <p>The error code.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

/**
 * <p>A function's environment variable settings.</p>
 */
export interface AwsLambdaFunctionEnvironment {
  /**
   * <p>Environment variable key-value pairs.</p>
   */
  Variables?: Record<string, string>;

  /**
   * <p>An <code>AwsLambdaFunctionEnvironmentError</code> object.</p>
   */
  Error?: AwsLambdaFunctionEnvironmentError;
}

/**
 * <p>An Lambda layer.</p>
 */
export interface AwsLambdaFunctionLayer {
  /**
   * <p>The ARN of the function layer.</p>
   */
  Arn?: string;

  /**
   * <p>The size of the layer archive in bytes.</p>
   */
  CodeSize?: number;
}

/**
 * <p>The function's X-Ray tracing configuration.</p>
 */
export interface AwsLambdaFunctionTracingConfig {
  /**
   * <p>The tracing mode.</p>
   */
  Mode?: string;
}

/**
 * <p>The VPC security groups and subnets that are attached to a Lambda function.</p>
 */
export interface AwsLambdaFunctionVpcConfig {
  /**
   * <p>A list of VPC security groups IDs.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>A list of VPC subnet IDs.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

/**
 * <p>Details about an Lambda function's configuration.</p>
 */
export interface AwsLambdaFunctionDetails {
  /**
   * <p>An <code>AwsLambdaFunctionCode</code> object.</p>
   */
  Code?: AwsLambdaFunctionCode;

  /**
   * <p>The SHA256 hash of the function's deployment package.</p>
   */
  CodeSha256?: string;

  /**
   * <p>The function's dead letter queue.</p>
   */
  DeadLetterConfig?: AwsLambdaFunctionDeadLetterConfig;

  /**
   * <p>The function's environment variables.</p>
   */
  Environment?: AwsLambdaFunctionEnvironment;

  /**
   * <p>The name of the function.</p>
   */
  FunctionName?: string;

  /**
   * <p>The function that Lambda calls to begin executing your function.</p>
   */
  Handler?: string;

  /**
   * <p>The KMS key that is used to encrypt the function's environment variables. This key is only returned if you've configured a customer managed customer managed key.</p>
   */
  KmsKeyArn?: string;

  /**
   * <p>Indicates when the function was last updated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastModified?: string;

  /**
   * <p>The function's layers.</p>
   */
  Layers?: AwsLambdaFunctionLayer[];

  /**
   * <p>For Lambda@Edge functions, the ARN of the master function.</p>
   */
  MasterArn?: string;

  /**
   * <p>The memory that is allocated to the function.</p>
   */
  MemorySize?: number;

  /**
   * <p>The latest updated revision of the function or alias.</p>
   */
  RevisionId?: string;

  /**
   * <p>The function's execution role.</p>
   */
  Role?: string;

  /**
   * <p>The runtime environment for the Lambda function.</p>
   */
  Runtime?: string;

  /**
   * <p>The amount of time that Lambda allows a function to run before stopping it.</p>
   */
  Timeout?: number;

  /**
   * <p>The function's X-Ray tracing configuration.</p>
   */
  TracingConfig?: AwsLambdaFunctionTracingConfig;

  /**
   * <p>The function's networking configuration.</p>
   */
  VpcConfig?: AwsLambdaFunctionVpcConfig;

  /**
   * <p>The version of the Lambda function.</p>
   */
  Version?: string;

  /**
   * <p>The instruction set architecture that the function uses. Valid values are <code>x86_64</code> or
   * <code>arm64</code>.</p>
   */
  Architectures?: string[];

  /**
   * <p>The type of deployment package that's used to deploy the function code to Lambda. Set to <code>Image</code> for a container image and <code>Zip</code>  for a .zip file archive.
   *       </p>
   */
  PackageType?: string;
}

/**
 * <p>Details about a Lambda layer version.</p>
 */
export interface AwsLambdaLayerVersionDetails {
  /**
   * <p>The version number.</p>
   */
  Version?: number;

  /**
   * <p>The layer's compatible runtimes. Maximum number of five items.</p>
   *          <p>Valid values: <code>nodejs10.x</code> | <code>nodejs12.x</code> | <code>java8</code> |
   *             <code>java11</code> | <code>python2.7</code> | <code>python3.6</code> |
   *             <code>python3.7</code> | <code>python3.8</code> | <code>dotnetcore1.0</code> |
   *             <code>dotnetcore2.1</code> | <code>go1.x</code> | <code>ruby2.5</code> |
   *             <code>provided</code>
   *          </p>
   */
  CompatibleRuntimes?: string[];

  /**
   * <p>Indicates when the version was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedDate?: string;
}

/**
 * <p>A public subnet that Network Firewall uses for the firewall.</p>
 */
export interface AwsNetworkFirewallFirewallSubnetMappingsDetails {
  /**
   * <p>The identifier of the subnet</p>
   */
  SubnetId?: string;
}

/**
 * <p>Details about an Network Firewall firewall.</p>
 */
export interface AwsNetworkFirewallFirewallDetails {
  /**
   * <p>Whether the firewall is protected from deletion. If set to <code>true</code>, then the firewall cannot be deleted.</p>
   */
  DeleteProtection?: boolean;

  /**
   * <p>A description of the firewall.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the firewall.</p>
   */
  FirewallArn?: string;

  /**
   * <p>The identifier of the firewall.</p>
   */
  FirewallId?: string;

  /**
   * <p>A descriptive name of the firewall.</p>
   */
  FirewallName?: string;

  /**
   * <p>The ARN of the firewall policy.</p>
   */
  FirewallPolicyArn?: string;

  /**
   * <p>Whether the firewall is protected from a change to the firewall policy. If set to <code>true</code>, you cannot associate a different policy with the firewall.</p>
   */
  FirewallPolicyChangeProtection?: boolean;

  /**
   * <p>Whether the firewall is protected from a change to the subnet associations. If set to <code>true</code>, you cannot map different subnets to the firewall.</p>
   */
  SubnetChangeProtection?: boolean;

  /**
   * <p>The public subnets that Network Firewall uses for the firewall. Each subnet must belong to a different Availability Zone.</p>
   */
  SubnetMappings?: AwsNetworkFirewallFirewallSubnetMappingsDetails[];

  /**
   * <p>The identifier of the VPC where the firewall is used.</p>
   */
  VpcId?: string;
}

/**
 * <p>A stateful rule group that is used by the firewall policy.</p>
 */
export interface FirewallPolicyStatefulRuleGroupReferencesDetails {
  /**
   * <p>The ARN of the stateful rule group.</p>
   */
  ResourceArn?: string;
}

/**
 * <p>Defines a CloudWatch dimension value to publish.</p>
 */
export interface StatelessCustomPublishMetricActionDimension {
  /**
   * <p>The value to use for the custom metric dimension.</p>
   */
  Value?: string;
}

/**
 * <p>Information about metrics to publish to CloudWatch.</p>
 */
export interface StatelessCustomPublishMetricAction {
  /**
   * <p>Defines CloudWatch dimension values to publish.</p>
   */
  Dimensions?: StatelessCustomPublishMetricActionDimension[];
}

/**
 * <p>The definition of a custom action that can be used for stateless packet handling.</p>
 */
export interface StatelessCustomActionDefinition {
  /**
   * <p>Information about metrics to publish to CloudWatch.</p>
   */
  PublishMetricAction?: StatelessCustomPublishMetricAction;
}

/**
 * <p>A custom action that can be used for stateless packet handling.</p>
 */
export interface FirewallPolicyStatelessCustomActionsDetails {
  /**
   * <p>The definition of the custom action.</p>
   */
  ActionDefinition?: StatelessCustomActionDefinition;

  /**
   * <p>The name of the custom action.</p>
   */
  ActionName?: string;
}

/**
 * <p>A stateless rule group that is used by the firewall policy.</p>
 */
export interface FirewallPolicyStatelessRuleGroupReferencesDetails {
  /**
   * <p>The order in which to run the stateless rule group.</p>
   */
  Priority?: number;

  /**
   * <p>The ARN of the stateless rule group.</p>
   */
  ResourceArn?: string;
}

/**
 * <p>Defines the behavior of the firewall.</p>
 */
export interface FirewallPolicyDetails {
  /**
   * <p>The stateful rule groups that are used in the firewall policy.</p>
   */
  StatefulRuleGroupReferences?: FirewallPolicyStatefulRuleGroupReferencesDetails[];

  /**
   * <p>The custom action definitions that are available to use in the firewall policy's <code>StatelessDefaultActions</code> setting.</p>
   */
  StatelessCustomActions?: FirewallPolicyStatelessCustomActionsDetails[];

  /**
   * <p>The actions to take on a packet if it doesn't match any of the stateless rules in the policy.</p>
   *          <p>You must specify a standard action (<code>aws:pass</code>, <code>aws:drop</code>, <code>aws:forward_to_sfe</code>), and can optionally include a custom action from <code>StatelessCustomActions</code>.
   *       </p>
   */
  StatelessDefaultActions?: string[];

  /**
   * <p>The actions to take on a fragmented UDP packet if it doesn't match any of the stateless rules in the policy.</p>
   *          <p>You must specify a standard action (<code>aws:pass</code>, <code>aws:drop</code>, <code>aws:forward_to_sfe</code>), and can optionally include a custom action from <code>StatelessCustomActions</code>.
   *       </p>
   */
  StatelessFragmentDefaultActions?: string[];

  /**
   * <p>The stateless rule groups that are used in the firewall policy.</p>
   */
  StatelessRuleGroupReferences?: FirewallPolicyStatelessRuleGroupReferencesDetails[];
}

/**
 * <p>Details about a firewall policy. A firewall policy defines the behavior of a network firewall.</p>
 */
export interface AwsNetworkFirewallFirewallPolicyDetails {
  /**
   * <p>The firewall policy configuration.</p>
   */
  FirewallPolicy?: FirewallPolicyDetails;

  /**
   * <p>The ARN of the firewall policy.</p>
   */
  FirewallPolicyArn?: string;

  /**
   * <p>The identifier of the firewall policy.</p>
   */
  FirewallPolicyId?: string;

  /**
   * <p>The name of the firewall policy.</p>
   */
  FirewallPolicyName?: string;

  /**
   * <p>A description of the firewall policy.</p>
   */
  Description?: string;
}

/**
 * <p>Stateful inspection criteria for a domain list rule group.</p>
 */
export interface RuleGroupSourceListDetails {
  /**
   * <p>Indicates whether to allow or deny access to the domains listed in <code>Targets</code>.</p>
   */
  GeneratedRulesType?: string;

  /**
   * <p>The protocols that you want to inspect. Specify <code>LS_SNI</code> for HTTPS. Specify <code>HTTP_HOST</code> for HTTP. You can specify either or both.</p>
   */
  TargetTypes?: string[];

  /**
   * <p>The domains that you want to inspect for in your traffic flows. You can provide full domain names, or use the '.' prefix as a wildcard. For example, <code>.example.com</code> matches all domains that end with <code>example.com</code>.</p>
   */
  Targets?: string[];
}

/**
 * <p>The inspection criteria for a stateful rule.</p>
 */
export interface RuleGroupSourceStatefulRulesHeaderDetails {
  /**
   * <p>The destination IP address or address range to inspect for, in CIDR notation. To match with any address, specify <code>ANY</code>.</p>
   */
  Destination?: string;

  /**
   * <p>The destination port to inspect for. You can specify an individual port, such as <code>1994</code>. You also can specify a port range, such as <code>1990:1994</code>. To match with any port, specify <code>ANY</code>.</p>
   */
  DestinationPort?: string;

  /**
   * <p>The direction of traffic flow to inspect. If set to <code>ANY</code>, the inspection matches bidirectional traffic, both from the source to the destination and from the destination to the source. If set to <code>FORWARD</code>, the inspection only matches traffic going from the source to the destination.</p>
   */
  Direction?: string;

  /**
   * <p>The protocol to inspect for. To inspector for all protocols, use <code>IP</code>.</p>
   */
  Protocol?: string;

  /**
   * <p>The source IP address or address range to inspect for, in CIDR notation. To match with any address, specify <code>ANY</code>.</p>
   */
  Source?: string;

  /**
   * <p>The source port to inspect for. You can specify an individual port, such as <code>1994</code>. You also can specify a port range, such as <code>1990:1994</code>. To match with any port, specify <code>ANY</code>.</p>
   */
  SourcePort?: string;
}

/**
 * <p>A rule option for a stateful rule.</p>
 */
export interface RuleGroupSourceStatefulRulesOptionsDetails {
  /**
   * <p>A keyword to look for.</p>
   */
  Keyword?: string;

  /**
   * <p>A list of settings.</p>
   */
  Settings?: string[];
}

/**
 * <p>A Suricata rule specification.</p>
 */
export interface RuleGroupSourceStatefulRulesDetails {
  /**
   * <p>Defines what Network Firewall should do with the packets in a traffic flow when the flow matches the stateful rule criteria.</p>
   */
  Action?: string;

  /**
   * <p>The stateful inspection criteria for the rule.</p>
   */
  Header?: RuleGroupSourceStatefulRulesHeaderDetails;

  /**
   * <p>Additional options for the rule.</p>
   */
  RuleOptions?: RuleGroupSourceStatefulRulesOptionsDetails[];
}

/**
 * <p>A custom action definition. A custom action is an optional, non-standard action to use for stateless packet handling.</p>
 */
export interface RuleGroupSourceCustomActionsDetails {
  /**
   * <p>The definition of a custom action.</p>
   */
  ActionDefinition?: StatelessCustomActionDefinition;

  /**
   * <p>A descriptive name of the custom action.</p>
   */
  ActionName?: string;
}

/**
 * <p>A port range to specify the destination ports to inspect for.</p>
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts {
  /**
   * <p>The starting port value for the port range.</p>
   */
  FromPort?: number;

  /**
   * <p>The ending port value for the port range.</p>
   */
  ToPort?: number;
}

/**
 * <p>A destination IP address or range.</p>
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesDestinations {
  /**
   * <p>An IP address or a block of IP addresses.</p>
   */
  AddressDefinition?: string;
}

/**
 * <p>A port range to specify the source ports to inspect for.</p>
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesSourcePorts {
  /**
   * <p>The starting port value for the port range.</p>
   */
  FromPort?: number;

  /**
   * <p>The ending port value for the port range.</p>
   */
  ToPort?: number;
}

/**
 * <p>A source IP addresses and address range to inspect for.</p>
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesSources {
  /**
   * <p>An IP address or a block of IP addresses.</p>
   */
  AddressDefinition?: string;
}

/**
 * <p>A set of TCP flags and masks to inspect for.</p>
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesTcpFlags {
  /**
   * <p>Defines the flags from the <code>Masks</code> setting that must be set in order for the packet to match. Flags that are listed must be set. Flags that are not listed must not be set.</p>
   */
  Flags?: string[];

  /**
   * <p>The set of flags to consider in the inspection. If not specified, then all flags are inspected.</p>
   */
  Masks?: string[];
}

/**
 * <p>Criteria for the stateless rule.</p>
 */
export interface RuleGroupSourceStatelessRuleMatchAttributes {
  /**
   * <p>A list of port ranges to specify the destination ports to inspect for.</p>
   */
  DestinationPorts?: RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts[];

  /**
   * <p>The destination IP addresses and address ranges to inspect for, in CIDR notation.</p>
   */
  Destinations?: RuleGroupSourceStatelessRuleMatchAttributesDestinations[];

  /**
   * <p>The protocols to inspect for.</p>
   */
  Protocols?: number[];

  /**
   * <p>A list of port ranges to specify the source ports to inspect for.</p>
   */
  SourcePorts?: RuleGroupSourceStatelessRuleMatchAttributesSourcePorts[];

  /**
   * <p>The source IP addresses and address ranges to inspect for, in CIDR notation.</p>
   */
  Sources?: RuleGroupSourceStatelessRuleMatchAttributesSources[];

  /**
   * <p>The TCP flags and masks to inspect for.</p>
   */
  TcpFlags?: RuleGroupSourceStatelessRuleMatchAttributesTcpFlags[];
}

/**
 * <p>The definition of the stateless rule.</p>
 */
export interface RuleGroupSourceStatelessRuleDefinition {
  /**
   * <p>The actions to take on a packet that matches one of the stateless rule definition's match attributes. You must specify a standard action (<code>aws:pass</code>, <code>aws:drop</code>, or <code>aws:forward_to_sfe</code>). You can then add custom actions.</p>
   */
  Actions?: string[];

  /**
   * <p>The criteria for Network Firewall to use to inspect an individual packet in a stateless rule inspection.</p>
   */
  MatchAttributes?: RuleGroupSourceStatelessRuleMatchAttributes;
}

/**
 * <p>A stateless rule in the rule group.</p>
 */
export interface RuleGroupSourceStatelessRulesDetails {
  /**
   * <p>Indicates the order in which to run this rule relative to all of the rules in the stateless rule group.</p>
   */
  Priority?: number;

  /**
   * <p>Provides the definition of the stateless rule.</p>
   */
  RuleDefinition?: RuleGroupSourceStatelessRuleDefinition;
}

/**
 * <p>Stateless rules and custom actions for a stateless rule group.</p>
 */
export interface RuleGroupSourceStatelessRulesAndCustomActionsDetails {
  /**
   * <p>Custom actions for the rule group.</p>
   */
  CustomActions?: RuleGroupSourceCustomActionsDetails[];

  /**
   * <p>Stateless rules for the rule group.</p>
   */
  StatelessRules?: RuleGroupSourceStatelessRulesDetails[];
}

/**
 * <p>The rules and actions for the rule group.</p>
 */
export interface RuleGroupSource {
  /**
   * <p>Stateful inspection criteria for a domain list rule group. A domain list rule group determines access by specific protocols to specific domains.</p>
   */
  RulesSourceList?: RuleGroupSourceListDetails;

  /**
   * <p>Stateful inspection criteria, provided in Suricata compatible intrusion prevention system (IPS) rules.</p>
   */
  RulesString?: string;

  /**
   * <p>Suricata rule specifications.</p>
   */
  StatefulRules?: RuleGroupSourceStatefulRulesDetails[];

  /**
   * <p>The stateless rules and custom actions used by a stateless rule group.</p>
   */
  StatelessRulesAndCustomActions?: RuleGroupSourceStatelessRulesAndCustomActionsDetails;
}

/**
 * <p>A list of IP addresses and address ranges, in CIDR notation.</p>
 */
export interface RuleGroupVariablesIpSetsDetails {
  /**
   * <p>The list of IP addresses and ranges.</p>
   */
  Definition?: string[];
}

/**
 * <p>A list of port ranges.</p>
 */
export interface RuleGroupVariablesPortSetsDetails {
  /**
   * <p>The list of port ranges.</p>
   */
  Definition?: string[];
}

/**
 * <p>Additional settings to use in the specified rules.</p>
 */
export interface RuleGroupVariables {
  /**
   * <p>A list of IP addresses and address ranges, in CIDR notation.</p>
   */
  IpSets?: RuleGroupVariablesIpSetsDetails;

  /**
   * <p>A list of port ranges.</p>
   */
  PortSets?: RuleGroupVariablesPortSetsDetails;
}

/**
 * <p>Details about the rule group.</p>
 */
export interface RuleGroupDetails {
  /**
   * <p>Additional settings to use in the specified rules.</p>
   */
  RuleVariables?: RuleGroupVariables;

  /**
   * <p>The rules and actions for the rule group.</p>
   *          <p>For stateful rule groups, can contain <code>RulesString</code>, <code>RulesSourceList</code>, or <code>StatefulRules</code>.</p>
   *          <p>For stateless rule groups, contains <code>StatelessRulesAndCustomActions</code>.</p>
   */
  RulesSource?: RuleGroupSource;
}

/**
 * <p>Details about an Network Firewall rule group. Rule groups are used to inspect and control network traffic. Stateless rule groups apply to individual packets. Stateful rule groups apply to packets in the context of their traffic flow.</p>
 *          <p>Rule groups are referenced in firewall policies.
 *       </p>
 */
export interface AwsNetworkFirewallRuleGroupDetails {
  /**
   * <p>The maximum number of operating resources that this rule group can use.</p>
   */
  Capacity?: number;

  /**
   * <p>A description of the rule group.</p>
   */
  Description?: string;

  /**
   * <p>Details about the rule group.</p>
   */
  RuleGroup?: RuleGroupDetails;

  /**
   * <p>The ARN of the rule group.</p>
   */
  RuleGroupArn?: string;

  /**
   * <p>The identifier of the rule group.</p>
   */
  RuleGroupId?: string;

  /**
   * <p>The descriptive name of the rule group.</p>
   */
  RuleGroupName?: string;

  /**
   * <p>The type of rule group. A rule group can be stateful or stateless.</p>
   */
  Type?: string;
}

/**
 * <p>Specifies information about the master user of the domain.
 *       </p>
 */
export interface AwsOpenSearchServiceDomainMasterUserOptionsDetails {
  /**
   * <p>The Amazon Resource Name (ARN) for the master user.
   *       </p>
   */
  MasterUserArn?: string;

  /**
   * <p>The username for the master user.
   *       </p>
   */
  MasterUserName?: string;

  /**
   * <p>The password for the master user.
   *       </p>
   */
  MasterUserPassword?: string;
}

/**
 * <p>Provides information about domain access control options.
 *       </p>
 */
export interface AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails {
  /**
   * <p>Enables fine-grained access control.
   *       </p>
   */
  Enabled?: boolean;

  /**
   * <p>Enables the internal user database.
   *       </p>
   */
  InternalUserDatabaseEnabled?: boolean;

  /**
   * <p>Specifies information about the master user of the domain.
   *       </p>
   */
  MasterUserOptions?: AwsOpenSearchServiceDomainMasterUserOptionsDetails;
}

/**
 * <p>Configuration options for zone awareness.</p>
 */
export interface AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails {
  /**
   * <p>The number of Availability Zones that the domain uses. Valid values are <code>2</code> or <code>3</code>. The default is <code>2</code>.</p>
   */
  AvailabilityZoneCount?: number;
}

/**
 * <p>Details about the configuration of an OpenSearch cluster.</p>
 */
export interface AwsOpenSearchServiceDomainClusterConfigDetails {
  /**
   * <p>The number of data nodes to use in the OpenSearch domain.</p>
   */
  InstanceCount?: number;

  /**
   * <p>Whether UltraWarm is enabled.</p>
   */
  WarmEnabled?: boolean;

  /**
   * <p>The number of UltraWarm instances.</p>
   */
  WarmCount?: number;

  /**
   * <p>Whether to use a dedicated master node for the OpenSearch domain. A dedicated master node performs cluster management tasks, but does not hold data or respond to data upload requests.</p>
   */
  DedicatedMasterEnabled?: boolean;

  /**
   * <p>Configuration options for zone awareness. Provided if <code>ZoneAwarenessEnabled</code> is <code>true</code>.</p>
   */
  ZoneAwarenessConfig?: AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails;

  /**
   * <p>The number of instances to use for the master node. If this attribute is specified, then <code>DedicatedMasterEnabled</code> must be <code>true</code>.</p>
   */
  DedicatedMasterCount?: number;

  /**
   * <p>The instance type for your data nodes.</p>
   *          <p>For a list of valid values, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/supported-instance-types.html">Supported instance types in Amazon OpenSearch Service</a> in the <i>Amazon OpenSearch Service Developer Guide</i>.</p>
   */
  InstanceType?: string;

  /**
   * <p>The type of UltraWarm instance.</p>
   */
  WarmType?: string;

  /**
   * <p>Whether to enable zone awareness for the OpenSearch domain. When zone awareness is enabled, OpenSearch Service allocates the cluster's nodes and replica index shards across Availability Zones (AZs) in the same Region. This prevents data loss and minimizes downtime if a node or data center fails.</p>
   */
  ZoneAwarenessEnabled?: boolean;

  /**
   * <p>The hardware configuration of the computer that hosts the dedicated master node.</p>
   *          <p>If this attribute is specified, then <code>DedicatedMasterEnabled</code> must be <code>true</code>.
   *       </p>
   */
  DedicatedMasterType?: string;
}

/**
 * <p>Information about additional options for the domain endpoint.</p>
 */
export interface AwsOpenSearchServiceDomainDomainEndpointOptionsDetails {
  /**
   * <p>The ARN for the security certificate. The certificate is managed in ACM.</p>
   */
  CustomEndpointCertificateArn?: string;

  /**
   * <p>Whether to enable a custom endpoint for the domain.</p>
   */
  CustomEndpointEnabled?: boolean;

  /**
   * <p>Whether to require that all traffic to the domain arrive over HTTPS.</p>
   */
  EnforceHTTPS?: boolean;

  /**
   * <p>The fully qualified URL for the custom endpoint.</p>
   */
  CustomEndpoint?: string;

  /**
   * <p>The TLS security policy to apply to the HTTPS endpoint of the OpenSearch domain.</p>
   */
  TLSSecurityPolicy?: string;
}

/**
 * <p>Details about the configuration for encryption at rest for the OpenSearch domain.</p>
 */
export interface AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails {
  /**
   * <p>Whether encryption at rest is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The KMS key ID.</p>
   */
  KmsKeyId?: string;
}

/**
 * <p>Configuration details for a log publishing option.</p>
 */
export interface AwsOpenSearchServiceDomainLogPublishingOption {
  /**
   * <p>The ARN of the CloudWatch Logs group to publish the logs to.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * <p>Whether the log publishing is enabled.</p>
   */
  Enabled?: boolean;
}

/**
 * <p>Configures the CloudWatch Logs to publish for the OpenSearch domain.</p>
 */
export interface AwsOpenSearchServiceDomainLogPublishingOptionsDetails {
  /**
   * <p>Configures the OpenSearch index logs publishing.</p>
   */
  IndexSlowLogs?: AwsOpenSearchServiceDomainLogPublishingOption;

  /**
   * <p>Configures the OpenSearch search slow log publishing.</p>
   */
  SearchSlowLogs?: AwsOpenSearchServiceDomainLogPublishingOption;

  /**
   * <p>Configures the OpenSearch audit logs publishing.</p>
   */
  AuditLogs?: AwsOpenSearchServiceDomainLogPublishingOption;
}

/**
 * <p>Provides details about the configuration for node-to-node encryption.</p>
 */
export interface AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails {
  /**
   * <p>Whether node-to-node encryption is enabled.</p>
   */
  Enabled?: boolean;
}

/**
 * <p>Provides information about the state of the domain relative to the latest service software.</p>
 */
export interface AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails {
  /**
   * <p>The epoch time when the deployment window closes for required updates. After this time, OpenSearch Service schedules the software upgrade automatically.</p>
   */
  AutomatedUpdateDate?: string;

  /**
   * <p>Whether a request to update the domain can be canceled.</p>
   */
  Cancellable?: boolean;

  /**
   * <p>The version of the service software that is currently installed on the domain.</p>
   */
  CurrentVersion?: string;

  /**
   * <p>A more detailed description of the service software status.</p>
   */
  Description?: string;

  /**
   * <p>The most recent version of the service software.</p>
   */
  NewVersion?: string;

  /**
   * <p>Whether a service software update is available for the domain.</p>
   */
  UpdateAvailable?: boolean;

  /**
   * <p>The status of the service software update. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ELIGIBLE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_ELIGIBLE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_UPDATE</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  UpdateStatus?: string;

  /**
   * <p>Whether the service software update is optional.</p>
   */
  OptionalDeployment?: boolean;
}

/**
 * <p>Contains information that OpenSearch Service derives based on the <code>VPCOptions</code> for the domain.</p>
 */
export interface AwsOpenSearchServiceDomainVpcOptionsDetails {
  /**
   * <p>The list of security group IDs that are associated with the VPC endpoints for the domain.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>A list of subnet IDs that are associated with the VPC endpoints for the domain.</p>
   */
  SubnetIds?: string[];
}

/**
 * <p>Information about an Amazon OpenSearch Service domain.</p>
 */
export interface AwsOpenSearchServiceDomainDetails {
  /**
   * <p>The ARN of the OpenSearch Service domain.</p>
   */
  Arn?: string;

  /**
   * <p>IAM policy document that specifies the access policies for the OpenSearch Service domain.</p>
   */
  AccessPolicies?: string;

  /**
   * <p>The name of the endpoint.</p>
   */
  DomainName?: string;

  /**
   * <p>The identifier of the domain.</p>
   */
  Id?: string;

  /**
   * <p>The domain endpoint.</p>
   */
  DomainEndpoint?: string;

  /**
   * <p>The version of the domain engine.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Details about the configuration for encryption at rest.</p>
   */
  EncryptionAtRestOptions?: AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails;

  /**
   * <p>Details about the configuration for node-to-node encryption.</p>
   */
  NodeToNodeEncryptionOptions?: AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails;

  /**
   * <p>Information about the status of a domain relative to the latest service software.</p>
   */
  ServiceSoftwareOptions?: AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails;

  /**
   * <p>Details about the configuration of an OpenSearch cluster.</p>
   */
  ClusterConfig?: AwsOpenSearchServiceDomainClusterConfigDetails;

  /**
   * <p>Additional options for the domain endpoint.</p>
   */
  DomainEndpointOptions?: AwsOpenSearchServiceDomainDomainEndpointOptionsDetails;

  /**
   * <p>Information that OpenSearch Service derives based on <code>VPCOptions</code> for the domain.</p>
   */
  VpcOptions?: AwsOpenSearchServiceDomainVpcOptionsDetails;

  /**
   * <p>Configures the CloudWatch Logs to publish for the OpenSearch domain.</p>
   */
  LogPublishingOptions?: AwsOpenSearchServiceDomainLogPublishingOptionsDetails;

  /**
   * <p>The domain endpoints. Used if the OpenSearch domain resides in a VPC.</p>
   *          <p>This is a map of key-value pairs. The key is always <code>vpc</code>. The value is the endpoint.</p>
   */
  DomainEndpoints?: Record<string, string>;

  /**
   * <p>Specifies options for fine-grained access control.
   *       </p>
   */
  AdvancedSecurityOptions?: AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails;
}

/**
 * <p>An IAM role that is associated with the Amazon RDS DB cluster.</p>
 */
export interface AwsRdsDbClusterAssociatedRole {
  /**
   * <p>The ARN of the IAM role.</p>
   */
  RoleArn?: string;

  /**
   * <p>The status of the association between the IAM role and the DB cluster. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Status?: string;
}

/**
 * <p>Information about an instance in the DB cluster.</p>
 */
export interface AwsRdsDbClusterMember {
  /**
   * <p>Whether the cluster member is the primary instance for the DB cluster.</p>
   */
  IsClusterWriter?: boolean;

  /**
   * <p>Specifies the order in which an Aurora replica is promoted to the primary instance when
   *          the existing primary instance fails.</p>
   */
  PromotionTier?: number;

  /**
   * <p>The instance identifier for this member of the DB cluster.</p>
   */
  DbInstanceIdentifier?: string;

  /**
   * <p>The status of the DB cluster parameter group for this member of the DB cluster.</p>
   */
  DbClusterParameterGroupStatus?: string;
}

/**
 * <p>Information about an option group membership for a DB cluster.</p>
 */
export interface AwsRdsDbClusterOptionGroupMembership {
  /**
   * <p>The name of the DB cluster option group.</p>
   */
  DbClusterOptionGroupName?: string;

  /**
   * <p>The status of the DB cluster option group.</p>
   */
  Status?: string;
}

/**
 * <p>Information about an Active Directory domain membership record associated with the DB
 *          instance.</p>
 */
export interface AwsRdsDbDomainMembership {
  /**
   * <p>The identifier of the Active Directory domain.</p>
   */
  Domain?: string;

  /**
   * <p>The status of the Active Directory Domain membership for the DB instance.</p>
   */
  Status?: string;

  /**
   * <p>The fully qualified domain name of the Active Directory domain.</p>
   */
  Fqdn?: string;

  /**
   * <p>The name of the IAM role to use when making API calls to the Directory Service.</p>
   */
  IamRoleName?: string;
}

/**
 * <p>A VPC security groups that the DB instance belongs to.</p>
 */
export interface AwsRdsDbInstanceVpcSecurityGroup {
  /**
   * <p>The name of the VPC security group.</p>
   */
  VpcSecurityGroupId?: string;

  /**
   * <p>The status of the VPC security group.</p>
   */
  Status?: string;
}

/**
 * <p>Information about an Amazon RDS DB cluster.</p>
 */
export interface AwsRdsDbClusterDetails {
  /**
   * <p>For all database engines except Aurora, specifies the allocated storage size in
   *          gibibytes (GiB).</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>A list of Availability Zones (AZs) where instances in the DB cluster can be
   *          created.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The number of days for which automated backups are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>The name of the database.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The current status of this DB cluster.</p>
   */
  Status?: string;

  /**
   * <p>The connection endpoint for the primary instance of the DB cluster.</p>
   */
  Endpoint?: string;

  /**
   * <p>The reader endpoint for the DB cluster.</p>
   */
  ReaderEndpoint?: string;

  /**
   * <p>A list of custom endpoints for the DB cluster.</p>
   */
  CustomEndpoints?: string[];

  /**
   * <p>Whether the DB cluster has instances in multiple Availability Zones.</p>
   */
  MultiAz?: boolean;

  /**
   * <p>The name of the database engine to use for this DB cluster. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>aurora</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aurora-mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aurora-postgresql</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Engine?: string;

  /**
   * <p>The version number of the database engine to use.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The port number on which the DB instances in the DB cluster accept connections.</p>
   */
  Port?: number;

  /**
   * <p>The name of the master user for the DB cluster.</p>
   */
  MasterUsername?: string;

  /**
   * <p>The range of time each day when automated backups are created, if automated backups are
   *          enabled.</p>
   *          <p>Uses the format <code>HH:MM-HH:MM</code>. For example, <code>04:52-05:22</code>.</p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal
   *          Coordinated Time (UTC).</p>
   *          <p>Uses the format <code><day>:HH:MM-<day>:HH:MM</code>.</p>
   *          <p>For the day values, use
   *             <code>mon</code>|<code>tue</code>|<code>wed</code>|<code>thu</code>|<code>fri</code>|<code>sat</code>|<code>sun</code>.</p>
   *          <p>For example, <code>sun:09:32-sun:10:02</code>.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The identifiers of the read replicas that are associated with this DB cluster.</p>
   */
  ReadReplicaIdentifiers?: string[];

  /**
   * <p>A list of VPC security groups that the DB cluster belongs to.</p>
   */
  VpcSecurityGroups?: AwsRdsDbInstanceVpcSecurityGroup[];

  /**
   * <p>Specifies the identifier that Amazon Route 53 assigns when you create a hosted
   *          zone.</p>
   */
  HostedZoneId?: string;

  /**
   * <p>Whether the DB cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>The ARN of the KMS master key that is used to encrypt the database instances in the
   *          DB cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The identifier of the DB cluster. The identifier must be unique within each Amazon Web Services Region
   *          and is immutable.</p>
   */
  DbClusterResourceId?: string;

  /**
   * <p>A list of the IAM roles that are associated with the DB cluster.</p>
   */
  AssociatedRoles?: AwsRdsDbClusterAssociatedRole[];

  /**
   * <p>Indicates when the DB cluster was created, in Universal Coordinated Time (UTC).</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  ClusterCreateTime?: string;

  /**
   * <p>A list of log types that this DB cluster is configured to export to CloudWatch
   *          Logs.</p>
   */
  EnabledCloudWatchLogsExports?: string[];

  /**
   * <p>The database engine mode of the DB cluster.Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>global</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>multimaster</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>parallelquery</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>provisioned</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>serverless</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  EngineMode?: string;

  /**
   * <p>Whether the DB cluster has deletion protection enabled.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>Whether the HTTP endpoint for an Aurora Serverless DB cluster is enabled.</p>
   */
  HttpEndpointEnabled?: boolean;

  /**
   * <p>The status of the database activity stream. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>started</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>starting</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>stopped</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>stopping</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ActivityStreamStatus?: string;

  /**
   * <p>Whether tags are copied from the DB cluster to snapshots of the DB cluster.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>Whether the DB cluster is a clone of a DB cluster owned by a different Amazon Web Services
   *          account.</p>
   */
  CrossAccountClone?: boolean;

  /**
   * <p>The Active Directory domain membership records that are associated with the DB
   *          cluster.</p>
   */
  DomainMemberships?: AwsRdsDbDomainMembership[];

  /**
   * <p>The name of the DB cluster parameter group for the DB cluster.</p>
   */
  DbClusterParameterGroup?: string;

  /**
   * <p>The subnet group that is associated with the DB cluster, including the name,
   *          description, and subnets in the subnet group.</p>
   */
  DbSubnetGroup?: string;

  /**
   * <p>The list of option group memberships for this DB cluster.</p>
   */
  DbClusterOptionGroupMemberships?: AwsRdsDbClusterOptionGroupMembership[];

  /**
   * <p>The DB cluster identifier that the user assigned to the cluster. This identifier is the
   *          unique key that identifies a DB cluster.</p>
   */
  DbClusterIdentifier?: string;

  /**
   * <p>The list of instances that make up the DB cluster.</p>
   */
  DbClusterMembers?: AwsRdsDbClusterMember[];

  /**
   * <p>Whether the mapping of IAM accounts to database accounts is enabled.</p>
   */
  IamDatabaseAuthenticationEnabled?: boolean;
}

/**
 * <p>Information about an Amazon RDS DB cluster snapshot.</p>
 */
export interface AwsRdsDbClusterSnapshotDetails {
  /**
   * <p>A list of Availability Zones where instances in the DB cluster can be created.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>Indicates when the snapshot was taken.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  SnapshotCreateTime?: string;

  /**
   * <p>The name of the database engine that you want to use for this DB instance.</p>
   */
  Engine?: string;

  /**
   * <p>Specifies the allocated storage size in gibibytes (GiB).</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>The status of this DB cluster snapshot.</p>
   */
  Status?: string;

  /**
   * <p>The port number on which the DB instances in the DB cluster accept connections.</p>
   */
  Port?: number;

  /**
   * <p>The VPC ID that is associated with the DB cluster snapshot.</p>
   */
  VpcId?: string;

  /**
   * <p>Indicates when the DB cluster was created, in Universal Coordinated Time (UTC).</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  ClusterCreateTime?: string;

  /**
   * <p>The name of the master user for the DB cluster.</p>
   */
  MasterUsername?: string;

  /**
   * <p>The version of the database engine to use.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The license model information for this DB cluster snapshot.</p>
   */
  LicenseModel?: string;

  /**
   * <p>The type of DB cluster snapshot.</p>
   */
  SnapshotType?: string;

  /**
   * <p>Specifies the percentage of the estimated data that has been transferred.</p>
   */
  PercentProgress?: number;

  /**
   * <p>Whether the DB cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>The ARN of the KMS master key that is used to encrypt the database instances in the
   *          DB cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The DB cluster identifier.</p>
   */
  DbClusterIdentifier?: string;

  /**
   * <p>The identifier of the DB cluster snapshot.</p>
   */
  DbClusterSnapshotIdentifier?: string;

  /**
   * <p>Whether mapping of IAM accounts to database accounts is enabled.</p>
   */
  IamDatabaseAuthenticationEnabled?: boolean;
}

/**
 * <p>An IAM role associated with the DB instance.</p>
 */
export interface AwsRdsDbInstanceAssociatedRole {
  /**
   * <p>The ARN of the IAM role that is associated with the DB
   *          instance.</p>
   */
  RoleArn?: string;

  /**
   * <p>The name of the feature associated with the IAM role.</p>
   */
  FeatureName?: string;

  /**
   * <p>Describes the state of the association between the IAM role and the DB instance. The
   *             <code>Status</code> property returns one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The IAM role ARN is associated with the DB instance and can
   *                be used to access other Amazon Web Services services on your behalf.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - The IAM role ARN is being associated with the DB
   *                instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID</code> - The IAM role ARN is associated with the DB instance. But
   *                the DB instance is unable to assume the IAM role in order to access other Amazon Web Services
   *                services on your behalf. </p>
   *             </li>
   *          </ul>
   */
  Status?: string;
}

/**
 * <p>Provides information about a parameter group for a DB instance.</p>
 */
export interface AwsRdsDbParameterGroup {
  /**
   * <p>The name of the parameter group.</p>
   */
  DbParameterGroupName?: string;

  /**
   * <p>The status of parameter updates.</p>
   */
  ParameterApplyStatus?: string;
}

/**
 * <p>An Availability Zone for a subnet in a subnet group.</p>
 */
export interface AwsRdsDbSubnetGroupSubnetAvailabilityZone {
  /**
   * <p>The name of the Availability Zone for a subnet in the subnet group.</p>
   */
  Name?: string;
}

/**
 * <p>Information about a subnet in a subnet group.</p>
 */
export interface AwsRdsDbSubnetGroupSubnet {
  /**
   * <p>The identifier of a subnet in the subnet group.</p>
   */
  SubnetIdentifier?: string;

  /**
   * <p>Information about the Availability Zone for a subnet in the subnet group.</p>
   */
  SubnetAvailabilityZone?: AwsRdsDbSubnetGroupSubnetAvailabilityZone;

  /**
   * <p>The status of a subnet in the subnet group.</p>
   */
  SubnetStatus?: string;
}

/**
 * <p>Information about the subnet group for the database instance.</p>
 */
export interface AwsRdsDbSubnetGroup {
  /**
   * <p>The name of the subnet group.</p>
   */
  DbSubnetGroupName?: string;

  /**
   * <p>The description of the subnet group.</p>
   */
  DbSubnetGroupDescription?: string;

  /**
   * <p>The VPC ID of the subnet group.</p>
   */
  VpcId?: string;

  /**
   * <p>The status of the subnet group.</p>
   */
  SubnetGroupStatus?: string;

  /**
   * <p>A list of subnets in the subnet group.</p>
   */
  Subnets?: AwsRdsDbSubnetGroupSubnet[];

  /**
   * <p>The ARN of the subnet group.</p>
   */
  DbSubnetGroupArn?: string;
}

/**
 * <p>Specifies the connection endpoint.</p>
 */
export interface AwsRdsDbInstanceEndpoint {
  /**
   * <p>Specifies the DNS address of the DB instance.</p>
   */
  Address?: string;

  /**
   * <p>Specifies the port that the database engine is listening on.</p>
   */
  Port?: number;

  /**
   * <p>Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.</p>
   */
  HostedZoneId?: string;
}

/**
 * <p>An option group membership.</p>
 */
export interface AwsRdsDbOptionGroupMembership {
  /**
   * <p>The name of the option group.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The status of the option group membership.</p>
   */
  Status?: string;
}

/**
 * <p>Identifies the log types to enable and disable.</p>
 */
export interface AwsRdsPendingCloudWatchLogsExports {
  /**
   * <p>A list of log types that are being enabled.</p>
   */
  LogTypesToEnable?: string[];

  /**
   * <p>A list of log types that are being disabled.</p>
   */
  LogTypesToDisable?: string[];
}

/**
 * <p>A processor feature.</p>
 */
export interface AwsRdsDbProcessorFeature {
  /**
   * <p>The name of the processor feature. Valid values are <code>coreCount</code> or <code>threadsPerCore</code>.</p>
   */
  Name?: string;

  /**
   * <p>The value of the processor feature.</p>
   */
  Value?: string;
}

/**
 * <p>Changes to a DB instance that are currently pending.</p>
 */
export interface AwsRdsDbPendingModifiedValues {
  /**
   * <p>The new DB instance class for the DB instance.</p>
   */
  DbInstanceClass?: string;

  /**
   * <p>The new value of the allocated storage for the DB instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>The new master user password for the DB instance.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>The new port for the DB instance.</p>
   */
  Port?: number;

  /**
   * <p>The new backup retention period for the DB instance.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>Indicates that a single Availability Zone DB instance is changing to a multiple Availability Zone deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The new engine version for the DB instance.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The new license model value for the DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * <p>The new provisioned IOPS value for the DB instance.</p>
   */
  Iops?: number;

  /**
   * <p>The new DB instance identifier for the DB instance.</p>
   */
  DbInstanceIdentifier?: string;

  /**
   * <p>The new storage type for the DB instance.</p>
   */
  StorageType?: string;

  /**
   * <p>The new CA certificate identifier for the DB instance.</p>
   */
  CaCertificateIdentifier?: string;

  /**
   * <p>The name of the new subnet group for the DB instance.</p>
   */
  DbSubnetGroupName?: string;

  /**
   * <p>A list of log types that are being enabled or disabled.</p>
   */
  PendingCloudWatchLogsExports?: AwsRdsPendingCloudWatchLogsExports;

  /**
   * <p>Processor features that are being updated.</p>
   */
  ProcessorFeatures?: AwsRdsDbProcessorFeature[];
}

/**
 * <p>Information about the status of a read replica.</p>
 */
export interface AwsRdsDbStatusInfo {
  /**
   * <p>The type of status. For a read replica, the status type is read replication.</p>
   */
  StatusType?: string;

  /**
   * <p>Whether the read replica instance is operating normally.</p>
   */
  Normal?: boolean;

  /**
   * <p>The status of the read replica instance.</p>
   */
  Status?: string;

  /**
   * <p>If the read replica is currently in an error state, provides the error details.</p>
   */
  Message?: string;
}

/**
 * <p>Contains the details of an Amazon RDS DB instance.</p>
 */
export interface AwsRdsDbInstanceDetails {
  /**
   * <p>The IAM roles associated with the DB
   *          instance.</p>
   */
  AssociatedRoles?: AwsRdsDbInstanceAssociatedRole[];

  /**
   * <p>The identifier of the CA certificate for this DB instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * <p>If the DB instance is a member of a DB cluster, contains the name of the DB cluster that
   *          the DB instance is a member of.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>Contains a user-supplied database identifier. This identifier is the unique key that
   *          identifies a DB instance.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>Contains the name of the compute and memory capacity class of the DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>Specifies the port that the DB instance listens on. If the DB instance is part of a DB
   *          cluster, this can be a different port than the DB cluster port.</p>
   */
  DbInstancePort?: number;

  /**
   * <p>The Amazon Web Services Region-unique, immutable identifier for the DB instance. This identifier is
   *          found in CloudTrail log entries whenever the KMS key for the DB instance is
   *          accessed. </p>
   */
  DbiResourceId?: string;

  /**
   * <p>The meaning of this parameter differs according to the database engine you use.</p>
   *          <p>
   *             <b>MySQL, MariaDB, SQL Server, PostgreSQL</b>
   *          </p>
   *          <p>Contains the name of the initial database of this instance that was provided at create
   *          time, if one was specified when the DB instance was created. This same name is returned for
   *          the life of the DB instance.</p>
   *          <p>
   *             <b>Oracle</b>
   *          </p>
   *          <p>Contains the Oracle System ID (SID) of the created DB instance. Not shown when the
   *          returned parameters do not apply to an Oracle DB instance. </p>
   */
  DBName?: string;

  /**
   * <p>Indicates whether the DB instance has deletion protection enabled.</p>
   *          <p>When deletion protection is enabled, the database cannot be deleted.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>Specifies the connection endpoint.</p>
   */
  Endpoint?: AwsRdsDbInstanceEndpoint;

  /**
   * <p>Provides the name of the database engine to use for this DB instance.</p>
   */
  Engine?: string;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>True if mapping of IAM accounts to database
   *          accounts is enabled, and otherwise false.</p>
   *          <p>IAM database authentication can be enabled for the following database engines.</p>
   *          <ul>
   *             <li>
   *                <p>For MySQL 5.6, minor version 5.6.34 or higher</p>
   *             </li>
   *             <li>
   *                <p>For MySQL 5.7, minor version 5.7.16 or higher</p>
   *             </li>
   *             <li>
   *                <p>Aurora 5.6 or higher</p>
   *             </li>
   *          </ul>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>Indicates when the DB instance was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  InstanceCreateTime?: string;

  /**
   * <p>If <code>StorageEncrypted</code> is true, the KMS key identifier for the encrypted
   *          DB instance.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Specifies the accessibility options for the DB instance.</p>
   *          <p>A value of true specifies an Internet-facing instance with a publicly resolvable DNS
   *          name, which resolves to a public IP address.</p>
   *          <p>A value of false specifies an internal instance with a DNS name that resolves to a
   *          private IP address. </p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>Specifies whether the DB instance is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>The ARN from the key store with which the instance is associated for TDE
   *          encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>A list of VPC security groups that the DB instance belongs to.</p>
   */
  VpcSecurityGroups?: AwsRdsDbInstanceVpcSecurityGroup[];

  /**
   * <p>Whether the DB instance is a multiple Availability Zone deployment.</p>
   */
  MultiAz?: boolean;

  /**
   * <p>The ARN of the CloudWatch Logs log stream that receives the enhanced monitoring metrics
   *          data for the DB instance.</p>
   */
  EnhancedMonitoringResourceArn?: string;

  /**
   * <p>The current status of the DB instance.</p>
   */
  DbInstanceStatus?: string;

  /**
   * <p>The master user name of the DB instance.</p>
   */
  MasterUsername?: string;

  /**
   * <p>The amount of storage (in gigabytes) to initially allocate for the DB instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>The range of time each day when automated backups are created, if automated backups are
   *          enabled.</p>
   *          <p>Uses the format <code>HH:MM-HH:MM</code>. For example, <code>04:52-05:22</code>.</p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The number of days for which to retain automated backups.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>A list of the DB security groups to assign to the DB instance.</p>
   */
  DbSecurityGroups?: string[];

  /**
   * <p>A list of the DB parameter groups to assign to the DB instance.</p>
   */
  DbParameterGroups?: AwsRdsDbParameterGroup[];

  /**
   * <p>The Availability Zone where the DB instance will be created.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Information about the subnet group that is associated with the DB instance.</p>
   */
  DbSubnetGroup?: AwsRdsDbSubnetGroup;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal
   *          Coordinated Time (UTC).</p>
   *          <p>Uses the format <code><day>:HH:MM-<day>:HH:MM</code>.</p>
   *          <p>For the day values, use
   *             <code>mon</code>|<code>tue</code>|<code>wed</code>|<code>thu</code>|<code>fri</code>|<code>sat</code>|<code>sun</code>.</p>
   *          <p>For example, <code>sun:09:32-sun:10:02</code>.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>Changes to the DB instance that are currently pending.</p>
   */
  PendingModifiedValues?: AwsRdsDbPendingModifiedValues;

  /**
   * <p>Specifies the latest time to which a database can be restored with point-in-time
   *          restore.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LatestRestorableTime?: string;

  /**
   * <p>Indicates whether minor version patches are applied automatically.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>If this DB instance is a read replica, contains the identifier of the source DB
   *          instance.</p>
   */
  ReadReplicaSourceDBInstanceIdentifier?: string;

  /**
   * <p>List of identifiers of the read replicas associated with this DB instance.</p>
   */
  ReadReplicaDBInstanceIdentifiers?: string[];

  /**
   * <p>List of identifiers of Aurora DB clusters to which the RDS DB instance is replicated as
   *          a read replica.</p>
   */
  ReadReplicaDBClusterIdentifiers?: string[];

  /**
   * <p>License model information for this DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * <p>Specifies the provisioned IOPS (I/O operations per second) for this DB instance.</p>
   */
  Iops?: number;

  /**
   * <p>The list of option group memberships for this DB instance.</p>
   */
  OptionGroupMemberships?: AwsRdsDbOptionGroupMembership[];

  /**
   * <p>The name of the character set that this DB instance is associated with.</p>
   */
  CharacterSetName?: string;

  /**
   * <p>For a DB instance with multi-Availability Zone support, the name of the secondary
   *          Availability Zone.</p>
   */
  SecondaryAvailabilityZone?: string;

  /**
   * <p>The status of a read replica. If the instance isn't a read replica, this is
   *          empty.</p>
   */
  StatusInfos?: AwsRdsDbStatusInfo[];

  /**
   * <p>The storage type for the DB instance.</p>
   */
  StorageType?: string;

  /**
   * <p>The Active Directory domain membership records associated with the DB instance.</p>
   */
  DomainMemberships?: AwsRdsDbDomainMembership[];

  /**
   * <p>Whether to copy resource tags to snapshots of the DB instance.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The interval, in seconds, between points when enhanced monitoring metrics are collected
   *          for the DB instance.</p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The ARN for the IAM role that permits Amazon RDS to send enhanced monitoring metrics to
   *          CloudWatch Logs.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>The order in which to promote an Aurora replica to the primary instance after a failure
   *          of the existing primary instance.</p>
   */
  PromotionTier?: number;

  /**
   * <p>The time zone of the DB instance.</p>
   */
  Timezone?: string;

  /**
   * <p>Indicates whether Performance Insights is enabled for the DB instance.</p>
   */
  PerformanceInsightsEnabled?: boolean;

  /**
   * <p>The identifier of the KMS key used to encrypt the Performance Insights data.</p>
   */
  PerformanceInsightsKmsKeyId?: string;

  /**
   * <p>The number of days to retain Performance Insights data.</p>
   */
  PerformanceInsightsRetentionPeriod?: number;

  /**
   * <p>A list of log types that this DB instance is configured to export to CloudWatch Logs.</p>
   */
  EnabledCloudWatchLogsExports?: string[];

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of
   *          the DB instance.</p>
   */
  ProcessorFeatures?: AwsRdsDbProcessorFeature[];

  /**
   * <p>Specifies the connection endpoint.</p>
   */
  ListenerEndpoint?: AwsRdsDbInstanceEndpoint;

  /**
   * <p>The upper limit to which Amazon RDS can automatically scale the storage of the DB
   *          instance.</p>
   */
  MaxAllocatedStorage?: number;
}

/**
 * <p>EC2 security group information for an RDS DB security group.</p>
 */
export interface AwsRdsDbSecurityGroupEc2SecurityGroup {
  /**
   * <p>Specifies the ID for the EC2 security group.</p>
   */
  Ec2SecurityGroupId?: string;

  /**
   * <p>Specifies the name of the EC2 security group.</p>
   */
  Ec2SecurityGroupName?: string;

  /**
   * <p>Provides the Amazon Web Services ID of the owner of the EC2 security group.</p>
   */
  Ec2SecurityGroupOwnerId?: string;

  /**
   * <p>Provides the status of the EC2 security group.</p>
   */
  Status?: string;
}

/**
 * <p>IP range information for an RDS DB security group.</p>
 */
export interface AwsRdsDbSecurityGroupIpRange {
  /**
   * <p>Specifies the IP range.</p>
   */
  CidrIp?: string;

  /**
   * <p>Specifies the status of the IP range.</p>
   */
  Status?: string;
}

/**
 * <p>Provides information about an Amazon RDS DB security group.</p>
 */
export interface AwsRdsDbSecurityGroupDetails {
  /**
   * <p>The ARN for the DB security group.</p>
   */
  DbSecurityGroupArn?: string;

  /**
   * <p>Provides the description of the DB security group.</p>
   */
  DbSecurityGroupDescription?: string;

  /**
   * <p>Specifies the name of the DB security group.</p>
   */
  DbSecurityGroupName?: string;

  /**
   * <p>Contains a list of EC2 security groups.</p>
   */
  Ec2SecurityGroups?: AwsRdsDbSecurityGroupEc2SecurityGroup[];

  /**
   * <p>Contains a list of IP ranges.</p>
   */
  IpRanges?: AwsRdsDbSecurityGroupIpRange[];

  /**
   * <p>Provides the Amazon Web Services ID of the owner of a specific DB security group.</p>
   */
  OwnerId?: string;

  /**
   * <p>Provides VPC ID associated with the DB security group.
   *       </p>
   */
  VpcId?: string;
}

/**
 * <p>Provides details about an Amazon RDS DB cluster snapshot.</p>
 */
export interface AwsRdsDbSnapshotDetails {
  /**
   * <p>The name or ARN of the DB snapshot that is used to restore the DB instance.</p>
   */
  DbSnapshotIdentifier?: string;

  /**
   * <p>A name for the DB instance.</p>
   */
  DbInstanceIdentifier?: string;

  /**
   * <p>When the snapshot was taken in Coordinated Universal Time (UTC).</p>
   */
  SnapshotCreateTime?: string;

  /**
   * <p>The name of the database engine to use for this DB instance. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>aurora</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aurora-mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aurora-postgresql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>c</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mariadb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ex</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-web</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Engine?: string;

  /**
   * <p>The amount of storage (in gigabytes) to be initially allocated for the database instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>The status of this DB snapshot.</p>
   */
  Status?: string;

  /**
   * <p>The port that the database engine was listening on at the time of the snapshot.</p>
   */
  Port?: number;

  /**
   * <p>Specifies the name of the Availability Zone in which the DB instance was located at the time of the DB snapshot.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The VPC ID associated with the DB snapshot.</p>
   */
  VpcId?: string;

  /**
   * <p>Specifies the time in Coordinated Universal Time (UTC) when the DB instance, from which the snapshot was taken, was created.</p>
   */
  InstanceCreateTime?: string;

  /**
   * <p>The master user name for the DB snapshot.</p>
   */
  MasterUsername?: string;

  /**
   * <p>The version of the database engine.</p>
   */
  EngineVersion?: string;

  /**
   * <p>License model information for the restored DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * <p>The type of the DB snapshot.</p>
   */
  SnapshotType?: string;

  /**
   * <p>The provisioned IOPS (I/O operations per second) value of the DB instance at the time of the snapshot.</p>
   */
  Iops?: number;

  /**
   * <p>The option group name for the DB snapshot.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The percentage of the estimated data that has been transferred.</p>
   */
  PercentProgress?: number;

  /**
   * <p>The Amazon Web Services Region that the DB snapshot was created in or copied from.</p>
   */
  SourceRegion?: string;

  /**
   * <p>The DB snapshot ARN that the DB snapshot was copied from.</p>
   */
  SourceDbSnapshotIdentifier?: string;

  /**
   * <p>The storage type associated with the DB snapshot. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>standard</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  StorageType?: string;

  /**
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>Whether the DB snapshot is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>If <code>Encrypted</code> is <code>true</code>, the KMS key identifier for the encrypted DB snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The time zone of the DB snapshot.</p>
   */
  Timezone?: string;

  /**
   * <p>Whether mapping of IAM accounts to database accounts is enabled.</p>
   */
  IamDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   */
  ProcessorFeatures?: AwsRdsDbProcessorFeature[];

  /**
   * <p>The identifier for the source DB instance.</p>
   */
  DbiResourceId?: string;
}

/**
 * <p>Details about an Amazon RDS event notification subscription. The subscription allows Amazon RDS to post events to an SNS topic.</p>
 */
export interface AwsRdsEventSubscriptionDetails {
  /**
   * <p>The identifier of the account that is associated with the event notification subscription.</p>
   */
  CustSubscriptionId?: string;

  /**
   * <p>The identifier of the event notification subscription.</p>
   */
  CustomerAwsId?: string;

  /**
   * <p>Whether the event notification subscription is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The list of event categories for the event notification subscription.</p>
   */
  EventCategoriesList?: string[];

  /**
   * <p>The ARN of the event notification subscription.</p>
   */
  EventSubscriptionArn?: string;

  /**
   * <p>The ARN of the SNS topic to post the event notifications to.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>A list of source identifiers for the event notification subscription.</p>
   */
  SourceIdsList?: string[];

  /**
   * <p>The source type for the event notification subscription.</p>
   */
  SourceType?: string;

  /**
   * <p>The status of the event notification subscription.</p>
   *          <p>Valid values: <code>creating</code> | <code>modifying</code> | <code>deleting</code> | <code>active</code> | <code>no-permission</code> | <code>topic-not-exist</code>
   *          </p>
   */
  Status?: string;

  /**
   * <p>The datetime when the event notification subscription was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  SubscriptionCreationTime?: string;
}

/**
 * <p>A node in an Amazon Redshift cluster.</p>
 */
export interface AwsRedshiftClusterClusterNode {
  /**
   * <p>The role of the node. A node might be a leader node or a compute node.</p>
   */
  NodeRole?: string;

  /**
   * <p>The private IP address of the node.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>The public IP address of the node.</p>
   */
  PublicIpAddress?: string;
}

/**
 * <p>The status of a parameter in a cluster parameter group for an Amazon Redshift
 *          cluster.</p>
 */
export interface AwsRedshiftClusterClusterParameterStatus {
  /**
   * <p>The name of the parameter.</p>
   */
  ParameterName?: string;

  /**
   * <p>The status of the parameter. Indicates whether the parameter is in sync with the
   *          database, waiting for a cluster reboot, or encountered an error when it was applied.</p>
   *          <p>Valid values: <code>in-sync</code> | <code>pending-reboot</code> | <code>applying</code>
   *          | <code>invalid-parameter</code> | <code>apply-deferred</code> | <code>apply-error</code> |
   *             <code>unknown-error</code>
   *          </p>
   */
  ParameterApplyStatus?: string;

  /**
   * <p>The error that prevented the parameter from being applied to the database.</p>
   */
  ParameterApplyErrorDescription?: string;
}

/**
 * <p>A cluster parameter group that is associated with an Amazon Redshift cluster.</p>
 */
export interface AwsRedshiftClusterClusterParameterGroup {
  /**
   * <p>The list of parameter statuses.</p>
   */
  ClusterParameterStatusList?: AwsRedshiftClusterClusterParameterStatus[];

  /**
   * <p>The status of updates to the parameters.</p>
   */
  ParameterApplyStatus?: string;

  /**
   * <p>The name of the parameter group.</p>
   */
  ParameterGroupName?: string;
}

/**
 * <p>A security group that is associated with the cluster.</p>
 */
export interface AwsRedshiftClusterClusterSecurityGroup {
  /**
   * <p>The name of the cluster security group.</p>
   */
  ClusterSecurityGroupName?: string;

  /**
   * <p>The status of the cluster security group.</p>
   */
  Status?: string;
}

/**
 * <p>Information about a cross-Region snapshot copy.</p>
 */
export interface AwsRedshiftClusterClusterSnapshotCopyStatus {
  /**
   * <p>The destination Region that snapshots are automatically copied to when cross-Region
   *          snapshot copy is enabled.</p>
   */
  DestinationRegion?: string;

  /**
   * <p>The number of days that manual snapshots are retained in the destination region after
   *          they are copied from a source region.</p>
   *          <p>If the value is <code>-1</code>,
   *          then the manual snapshot is retained indefinitely.</p>
   *          <p>Valid values: Either <code>-1</code>
   *          or an integer between 1 and 3,653</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>The number of days to retain automated snapshots in the destination Region after they
   *          are copied from a source Region.</p>
   */
  RetentionPeriod?: number;

  /**
   * <p>The name of the snapshot copy grant.</p>
   */
  SnapshotCopyGrantName?: string;
}

/**
 * <p>A time windows during which maintenance was deferred for an Amazon Redshift
 *          cluster.</p>
 */
export interface AwsRedshiftClusterDeferredMaintenanceWindow {
  /**
   * <p>The end of the time window for which maintenance was deferred.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  DeferMaintenanceEndTime?: string;

  /**
   * <p>The identifier of the maintenance window.</p>
   */
  DeferMaintenanceIdentifier?: string;

  /**
   * <p>The start of the time window for which maintenance was deferred.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  DeferMaintenanceStartTime?: string;
}

/**
 * <p>The status of the elastic IP (EIP) address for an Amazon Redshift cluster.</p>
 */
export interface AwsRedshiftClusterElasticIpStatus {
  /**
   * <p>The elastic IP address for the cluster.</p>
   */
  ElasticIp?: string;

  /**
   * <p>The status of the elastic IP address.</p>
   */
  Status?: string;
}

/**
 * <p>The connection endpoint for an Amazon Redshift cluster.</p>
 */
export interface AwsRedshiftClusterEndpoint {
  /**
   * <p>The DNS address of the cluster.</p>
   */
  Address?: string;

  /**
   * <p>The port that the database engine listens on.</p>
   */
  Port?: number;
}

/**
 * <p>Information about whether an Amazon Redshift cluster finished applying any hardware
 *          changes to security module (HSM) settings that were specified in a modify cluster
 *          command.</p>
 */
export interface AwsRedshiftClusterHsmStatus {
  /**
   * <p>The name of the HSM client certificate that the Amazon Redshift cluster uses to retrieve
   *          the data encryption keys that are stored in an HSM.</p>
   */
  HsmClientCertificateIdentifier?: string;

  /**
   * <p>The name of the HSM configuration that contains the information that the Amazon Redshift
   *          cluster can use to retrieve and store keys in an HSM.</p>
   */
  HsmConfigurationIdentifier?: string;

  /**
   * <p>Indicates whether the Amazon Redshift cluster has finished applying any HSM settings
   *          changes specified in a modify cluster command.</p>
   *          <p>Type: String</p>
   *          <p>Valid values: <code>active</code> | <code>applying</code>
   *          </p>
   */
  Status?: string;
}

/**
 * <p>An IAM role that the cluster can use to access other Amazon Web Services services.</p>
 */
export interface AwsRedshiftClusterIamRole {
  /**
   * <p>The status of the IAM role's association with the cluster.</p>
   *          <p>Valid values: <code>in-sync</code> | <code>adding</code> | <code>removing</code>
   *          </p>
   */
  ApplyStatus?: string;

  /**
   * <p>The ARN of the IAM role.</p>
   */
  IamRoleArn?: string;
}

/**
 * <p>Provides information about the logging status of the cluster.</p>
 */
export interface AwsRedshiftClusterLoggingStatus {
  /**
   * <p>The name of the S3 bucket where the log files are stored.</p>
   */
  BucketName?: string;

  /**
   * <p>The message indicating that the logs failed to be delivered.</p>
   */
  LastFailureMessage?: string;

  /**
   * <p>The last time when logs failed to be delivered.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastFailureTime?: string;

  /**
   * <p>The last time that logs were delivered successfully.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastSuccessfulDeliveryTime?: string;

  /**
   * <p>Indicates whether logging is enabled.</p>
   */
  LoggingEnabled?: boolean;

  /**
   * <p>Provides the prefix applied to the log file names.</p>
   */
  S3KeyPrefix?: string;
}

/**
 * <p>Changes to the Amazon Redshift cluster that are currently pending.</p>
 */
export interface AwsRedshiftClusterPendingModifiedValues {
  /**
   * <p>The pending or in-progress change to the automated snapshot retention period.</p>
   */
  AutomatedSnapshotRetentionPeriod?: number;

  /**
   * <p>The pending or in-progress change to the identifier for the cluster.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The pending or in-progress change to the cluster type.</p>
   */
  ClusterType?: string;

  /**
   * <p>The pending or in-progress change to the service version.</p>
   */
  ClusterVersion?: string;

  /**
   * <p>The encryption type for a cluster.</p>
   */
  EncryptionType?: string;

  /**
   * <p>Indicates whether to create the cluster with enhanced VPC routing enabled.</p>
   */
  EnhancedVpcRouting?: boolean;

  /**
   * <p>The name of the maintenance track that the cluster changes to during the next
   *          maintenance window.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>The pending or in-progress change to the master user password for the cluster.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>The pending or in-progress change to the cluster's node type.</p>
   */
  NodeType?: string;

  /**
   * <p>The pending or in-progress change to the number of nodes in the cluster.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>The pending or in-progress change to whether the cluster can be connected to from the
   *          public network.</p>
   */
  PubliclyAccessible?: boolean;
}

/**
 * <p>Information about the resize operation for the cluster.</p>
 */
export interface AwsRedshiftClusterResizeInfo {
  /**
   * <p>Indicates whether the resize operation can be canceled.</p>
   */
  AllowCancelResize?: boolean;

  /**
   * <p>The type of resize operation.</p>
   *          <p>Valid values: <code>ClassicResize</code>
   *          </p>
   */
  ResizeType?: string;
}

/**
 * <p>Information about the status of a cluster restore action. It only applies if the cluster
 *          was created by restoring a snapshot.</p>
 */
export interface AwsRedshiftClusterRestoreStatus {
  /**
   * <p>The number of megabytes per second being transferred from the backup storage. Returns
   *          the average rate for a completed backup.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   */
  CurrentRestoreRateInMegaBytesPerSecond?: number;

  /**
   * <p>The amount of time an in-progress restore has been running, or the amount of time it
   *          took a completed restore to finish.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   */
  ElapsedTimeInSeconds?: number;

  /**
   * <p>The estimate of the time remaining before the restore is complete. Returns 0 for a
   *          completed restore.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   */
  EstimatedTimeToCompletionInSeconds?: number;

  /**
   * <p>The number of megabytes that were transferred from snapshot storage.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   */
  ProgressInMegaBytes?: number;

  /**
   * <p>The size of the set of snapshot data that was used to restore the cluster.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   */
  SnapshotSizeInMegaBytes?: number;

  /**
   * <p>The status of the restore action.</p>
   *          <p>Valid values: <code>starting</code> | <code>restoring</code> | <code>completed</code> |
   *             <code>failed</code>
   *          </p>
   */
  Status?: string;
}

/**
 * <p>A VPC security group that the cluster belongs to, if the cluster is in a VPC.</p>
 */
export interface AwsRedshiftClusterVpcSecurityGroup {
  /**
   * <p>The status of the VPC security group.</p>
   */
  Status?: string;

  /**
   * <p>The identifier of the VPC security group.</p>
   */
  VpcSecurityGroupId?: string;
}

/**
 * <p>Details about an Amazon Redshift cluster.</p>
 */
export interface AwsRedshiftClusterDetails {
  /**
   * <p>Indicates whether major version upgrades are applied automatically to the cluster during
   *          the maintenance window.</p>
   */
  AllowVersionUpgrade?: boolean;

  /**
   * <p>The number of days that automatic cluster snapshots are retained.</p>
   */
  AutomatedSnapshotRetentionPeriod?: number;

  /**
   * <p>The name of the Availability Zone in which the cluster is located.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The availability status of the cluster for queries. Possible values are the
   *          following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Available</code> - The cluster is available for queries.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Unavailable</code> - The cluster is not available for queries.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Maintenance</code> - The cluster is intermittently available for queries due
   *                to maintenance activities.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Modifying</code> -The cluster is intermittently available for queries due to
   *                changes that modify the cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code> - The cluster failed and is not available for queries.</p>
   *             </li>
   *          </ul>
   */
  ClusterAvailabilityStatus?: string;

  /**
   * <p>Indicates when the cluster was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  ClusterCreateTime?: string;

  /**
   * <p>The unique identifier of the cluster.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The nodes in the cluster.</p>
   */
  ClusterNodes?: AwsRedshiftClusterClusterNode[];

  /**
   * <p>The list of cluster parameter groups that are associated with this cluster.</p>
   */
  ClusterParameterGroups?: AwsRedshiftClusterClusterParameterGroup[];

  /**
   * <p>The public key for the cluster.</p>
   */
  ClusterPublicKey?: string;

  /**
   * <p>The specific revision number of the database in the cluster.</p>
   */
  ClusterRevisionNumber?: string;

  /**
   * <p>A list of cluster security groups that are associated with the cluster.</p>
   */
  ClusterSecurityGroups?: AwsRedshiftClusterClusterSecurityGroup[];

  /**
   * <p>Information about the destination Region and retention period for the cross-Region
   *          snapshot copy.</p>
   */
  ClusterSnapshotCopyStatus?: AwsRedshiftClusterClusterSnapshotCopyStatus;

  /**
   * <p>The current status of the cluster.</p>
   *          <p>Valid values: <code>available</code> | <code>available, prep-for-resize</code> |
   *             <code>available, resize-cleanup</code> |<code> cancelling-resize</code> |
   *             <code>creating</code> | <code>deleting</code> | <code>final-snapshot</code> |
   *             <code>hardware-failure</code> | <code>incompatible-hsm</code> |<code>
   *             incompatible-network</code> | <code>incompatible-parameters</code> |
   *             <code>incompatible-restore</code> | <code>modifying</code> | <code>paused</code> |
   *             <code>rebooting</code> | <code>renaming</code> | <code>resizing</code> |
   *             <code>rotating-keys</code> | <code>storage-full</code> |
   *          <code>updating-hsm</code>
   *          </p>
   */
  ClusterStatus?: string;

  /**
   * <p>The name of the subnet group that is associated with the cluster. This parameter is
   *          valid only when the cluster is in a VPC.</p>
   */
  ClusterSubnetGroupName?: string;

  /**
   * <p>The version ID of the Amazon Redshift engine that runs on the cluster.</p>
   */
  ClusterVersion?: string;

  /**
   * <p>The name of the initial database that was created when the cluster was created.</p>
   *          <p>The same name is returned for the life of the cluster.</p>
   *          <p>If an initial database is not specified, a database named <code>devdev</code> is created
   *          by default.</p>
   */
  DBName?: string;

  /**
   * <p>List of time windows during which maintenance was deferred.</p>
   */
  DeferredMaintenanceWindows?: AwsRedshiftClusterDeferredMaintenanceWindow[];

  /**
   * <p>Information about the status of the Elastic IP (EIP) address.</p>
   */
  ElasticIpStatus?: AwsRedshiftClusterElasticIpStatus;

  /**
   * <p>The number of nodes that you can use the elastic resize method to resize the cluster
   *          to.</p>
   */
  ElasticResizeNumberOfNodeOptions?: string;

  /**
   * <p>Indicates whether the data in the cluster is encrypted at rest.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The connection endpoint.</p>
   */
  Endpoint?: AwsRedshiftClusterEndpoint;

  /**
   * <p>Indicates whether to create the cluster with enhanced VPC routing enabled.</p>
   */
  EnhancedVpcRouting?: boolean;

  /**
   * <p>Indicates when the next snapshot is expected to be taken. The cluster must have a valid
   *          snapshot schedule and have backups enabled.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  ExpectedNextSnapshotScheduleTime?: string;

  /**
   * <p>The status of the next expected snapshot.</p>
   *          <p>Valid values: <code>OnTrack</code> | <code>Pending</code>
   *          </p>
   */
  ExpectedNextSnapshotScheduleTimeStatus?: string;

  /**
   * <p>Information about whether the Amazon Redshift cluster finished applying any changes to
   *          hardware security module (HSM) settings that were specified in a modify cluster
   *          command.</p>
   */
  HsmStatus?: AwsRedshiftClusterHsmStatus;

  /**
   * <p>A list of IAM roles that the cluster can use to access other Amazon Web Services services.</p>
   */
  IamRoles?: AwsRedshiftClusterIamRole[];

  /**
   * <p>The identifier of the KMS encryption key that is used to encrypt data in the
   *          cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The name of the maintenance track for the cluster.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>The default number of days to retain a manual snapshot.</p>
   *          <p>If the value is <code>-1</code>, the snapshot is retained indefinitely.</p>
   *          <p>This setting doesn't change the retention period of existing snapshots.</p>
   *          <p>Valid values: Either <code>-1</code> or an integer between 1 and 3,653</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>The master user name for the cluster. This name is used to connect to the database that
   *          is specified in as the value of <code>DBName</code>.</p>
   */
  MasterUsername?: string;

  /**
   * <p>Indicates the start of the next maintenance window.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  NextMaintenanceWindowStartTime?: string;

  /**
   * <p>The node type for the nodes in the cluster.</p>
   */
  NodeType?: string;

  /**
   * <p>The number of compute nodes in the cluster.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>A list of cluster operations that are waiting to start.</p>
   */
  PendingActions?: string[];

  /**
   * <p>A list of changes to the cluster that are currently pending.</p>
   */
  PendingModifiedValues?: AwsRedshiftClusterPendingModifiedValues;

  /**
   * <p>The weekly time range, in Universal Coordinated Time (UTC), during which system
   *          maintenance can occur.</p>
   *          <p>Format:
   *             <code>
   *                <i><day></i>:HH:MM-<i><day></i>:HH:MM</code>
   *          </p>
   *          <p>For the day values, use <code>mon</code> | <code>tue</code> | <code>wed</code> |
   *             <code>thu</code> | <code>fri</code> | <code>sat</code> | <code>sun</code>
   *          </p>
   *          <p>For example, <code>sun:09:32-sun:10:02</code>
   *          </p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>Whether the cluster can be accessed from a public network.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>Information about the resize operation for the cluster.</p>
   */
  ResizeInfo?: AwsRedshiftClusterResizeInfo;

  /**
   * <p>Information about the status of a cluster restore action. Only applies to a cluster that
   *          was created by restoring a snapshot.</p>
   */
  RestoreStatus?: AwsRedshiftClusterRestoreStatus;

  /**
   * <p>A unique identifier for the cluster snapshot schedule.</p>
   */
  SnapshotScheduleIdentifier?: string;

  /**
   * <p>The current state of the cluster snapshot schedule.</p>
   *          <p>Valid values: <code>MODIFYING</code> | <code>ACTIVE</code> | <code>FAILED</code>
   *          </p>
   */
  SnapshotScheduleState?: string;

  /**
   * <p>The identifier of the VPC that the cluster is in, if the cluster is in a VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The list of VPC security groups that the cluster belongs to, if the cluster is in a
   *          VPC.</p>
   */
  VpcSecurityGroups?: AwsRedshiftClusterVpcSecurityGroup[];

  /**
   * <p>Information about the logging status of the cluster.</p>
   */
  LoggingStatus?: AwsRedshiftClusterLoggingStatus;
}

/**
 * <p>provides information about the Amazon S3 Public Access Block configuration for accounts.</p>
 */
export interface AwsS3AccountPublicAccessBlockDetails {
  /**
   * <p>Indicates whether to reject calls to update an S3 bucket if the calls include a public access control list (ACL).</p>
   */
  BlockPublicAcls?: boolean;

  /**
   * <p>Indicates whether to reject calls to update the access policy for an S3 bucket or access point if the policy allows public access.</p>
   */
  BlockPublicPolicy?: boolean;

  /**
   * <p>Indicates whether Amazon S3 ignores public ACLs that are associated with an S3 bucket.</p>
   */
  IgnorePublicAcls?: boolean;

  /**
   * <p>Indicates whether to restrict access to an access point or S3 bucket that has a public policy to only Amazon Web Services service principals and authorized users within the S3 bucket owner's account.</p>
   */
  RestrictPublicBuckets?: boolean;
}

/**
 * <p>Information about what Amazon S3
 *          does when a multipart upload is incomplete.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails {
  /**
   * <p>The number of days after which Amazon S3 cancels an incomplete multipart upload.</p>
   */
  DaysAfterInitiation?: number;
}

/**
 * <p>A tag that is assigned to matching objects.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails {
  /**
   * <p>The tag key.</p>
   */
  Key?: string;

  /**
   * <p>The tag value.</p>
   */
  Value?: string;
}

/**
 * <p>A value to use for the filter.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails {
  /**
   * <p>Prefix text for matching objects.</p>
   */
  Prefix?: string;

  /**
   * <p>A tag that is assigned to matching objects.</p>
   */
  Tag?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails;

  /**
   * <p>The type of filter value.
   * Valid values are <code>LifecyclePrefixPredicate</code> or <code>LifecycleTagPredicate</code>.</p>
   */
  Type?: string;
}

/**
 * <p>A tag filter.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails {
  /**
   * <p>The tag key.</p>
   */
  Key?: string;

  /**
   * <p>The tag value</p>
   */
  Value?: string;
}

/**
 * <p>The configuration for the filter.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails {
  /**
   * <p>The values to use for the filter.</p>
   */
  Operands?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails[];

  /**
   * <p>A prefix filter.</p>
   */
  Prefix?: string;

  /**
   * <p>A tag filter.</p>
   */
  Tag?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails;

  /**
   * <p>Whether to use <code>AND</code> or <code>OR</code> to join the operands.
   * Valid values are <code>LifecycleAndOperator</code> or <code>LifecycleOrOperator</code>.</p>
   */
  Type?: string;
}

/**
 * <p>Identifies the objects that a rule applies to.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails {
  /**
   * <p>The configuration for the filter.</p>
   */
  Predicate?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails;
}

/**
 * <p>A transition rule that describes when noncurrent objects transition to a specified storage class.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails {
  /**
   * <p>The number of days that an object is noncurrent before Amazon S3 can perform the associated action.</p>
   */
  Days?: number;

  /**
   * <p>The class of storage to change the object to after the object is noncurrent for the specified number of days.</p>
   */
  StorageClass?: string;
}

/**
 * <p>A rule for when objects transition to specific storage classes.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails {
  /**
   * <p>A date on which to transition objects to the specified storage class. If you provide <code>Date</code>, you cannot provide <code>Days</code>.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  Date?: string;

  /**
   * <p>The number of days after which to transition the object to the specified storage class. If you provide <code>Days</code>, you cannot provide <code>Date</code>.</p>
   */
  Days?: number;

  /**
   * <p>The storage class to transition the object to. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DEEP_ARCHIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GLACIER</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INTELLIGENT_TIERING</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ONEZONE_IA</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STANDARD_IA</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  StorageClass?: string;
}

/**
 * <p>Configuration for a lifecycle rule.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesDetails {
  /**
   * <p>How Amazon S3 responds when a multipart upload is incomplete. Specifically, provides a number
   *          of days before Amazon S3 cancels the entire upload.</p>
   */
  AbortIncompleteMultipartUpload?: AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails;

  /**
   * <p>The date when objects are moved or deleted.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  ExpirationDate?: string;

  /**
   * <p>The length in days of the lifetime for objects that are subject to the rule.</p>
   */
  ExpirationInDays?: number;

  /**
   * <p>Whether Amazon S3 removes a delete marker that has no noncurrent versions. If set to
   *          <code>true</code>, the delete marker is expired. If set to <code>false</code>, the policy
   *          takes no action.</p>
   *          <p>If you provide <code>ExpiredObjectDeleteMarker</code>, you cannot provide
   *          <code>ExpirationInDays</code> or <code>ExpirationDate</code>.</p>
   */
  ExpiredObjectDeleteMarker?: boolean;

  /**
   * <p>Identifies the objects that a rule applies to.</p>
   */
  Filter?: AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails;

  /**
   * <p>The unique identifier of the rule.</p>
   */
  ID?: string;

  /**
   * <p>The number of days that an object is noncurrent before Amazon S3 can perform the associated action.</p>
   */
  NoncurrentVersionExpirationInDays?: number;

  /**
   * <p>Transition rules that describe when noncurrent objects transition to a specified storage class.</p>
   */
  NoncurrentVersionTransitions?: AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails[];

  /**
   * <p>A prefix that identifies one or more objects that the rule applies to.</p>
   */
  Prefix?: string;

  /**
   * <p>The current status of the rule. Indicates whether the rule is currently being applied.</p>
   */
  Status?: string;

  /**
   * <p>Transition rules that indicate when objects transition to a specified storage class.</p>
   */
  Transitions?: AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails[];
}

/**
 * <p>The lifecycle configuration for the objects in the S3 bucket.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationDetails {
  /**
   * <p>The lifecycle rules.</p>
   */
  Rules?: AwsS3BucketBucketLifecycleConfigurationRulesDetails[];
}

/**
 * <p>Describes the versioning state of an S3 bucket.</p>
 */
export interface AwsS3BucketBucketVersioningConfiguration {
  /**
   * <p>Specifies whether MFA delete is currently enabled in the S3 bucket versioning configuration. If the S3 bucket was never configured with MFA delete, then this attribute is not included.</p>
   */
  IsMfaDeleteEnabled?: boolean;

  /**
   * <p>The versioning status of the S3 bucket. Valid values are <code>Enabled</code> or <code>Suspended</code>.</p>
   */
  Status?: string;
}

/**
 * <p>Information about logging for
 *          the S3 bucket</p>
 */
export interface AwsS3BucketLoggingConfiguration {
  /**
   * <p>The name of the S3 bucket where log files for the S3 bucket are stored.</p>
   */
  DestinationBucketName?: string;

  /**
   * <p>The prefix added to log files for the S3 bucket.</p>
   */
  LogFilePrefix?: string;
}

export enum AwsS3BucketNotificationConfigurationS3KeyFilterRuleName {
  PREFIX = "Prefix",
  SUFFIX = "Suffix",
}

/**
 * <p>Details for a filter rule.</p>
 */
export interface AwsS3BucketNotificationConfigurationS3KeyFilterRule {
  /**
   * <p>Indicates whether the filter is based on the prefix or suffix of the Amazon S3 key.</p>
   */
  Name?: AwsS3BucketNotificationConfigurationS3KeyFilterRuleName | string;

  /**
   * <p>The filter value.</p>
   */
  Value?: string;
}

/**
 * <p>Details for an Amazon S3 filter.</p>
 */
export interface AwsS3BucketNotificationConfigurationS3KeyFilter {
  /**
   * <p>The filter rules for the filter.</p>
   */
  FilterRules?: AwsS3BucketNotificationConfigurationS3KeyFilterRule[];
}

/**
 * <p>Filtering information for the notifications. The
 *          filtering is based on Amazon S3 key names.</p>
 */
export interface AwsS3BucketNotificationConfigurationFilter {
  /**
   * <p>Details for an Amazon S3 filter.</p>
   */
  S3KeyFilter?: AwsS3BucketNotificationConfigurationS3KeyFilter;
}

/**
 * <p>Details for an S3 bucket notification configuration.</p>
 */
export interface AwsS3BucketNotificationConfigurationDetail {
  /**
   * <p>The list of events that trigger a notification.</p>
   */
  Events?: string[];

  /**
   * <p>The filters that determine which S3 buckets generate notifications.</p>
   */
  Filter?: AwsS3BucketNotificationConfigurationFilter;

  /**
   * <p>The ARN of the Lambda function, Amazon SQS queue, or Amazon SNS topic that generates the
   *          notification.</p>
   */
  Destination?: string;

  /**
   * <p>Indicates the type of notification. Notifications can be generated using Lambda functions,
   *          Amazon SQS queues, or Amazon SNS topics, with corresponding valid values as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LambdaConfiguration</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QueueConfiguration</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TopicConfiguration</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Type?: string;
}

/**
 * <p>The notification
 *          configuration for the S3 bucket.</p>
 */
export interface AwsS3BucketNotificationConfiguration {
  /**
   * <p>Configurations for S3 bucket notifications.</p>
   */
  Configurations?: AwsS3BucketNotificationConfigurationDetail[];
}

/**
 * <p>The redirect behavior for requests
 *          to the website.</p>
 */
export interface AwsS3BucketWebsiteConfigurationRedirectTo {
  /**
   * <p>The name of the host to redirect requests to.</p>
   */
  Hostname?: string;

  /**
   * <p>The protocol to use when redirecting requests. By default, this field uses the same protocol as the
   *          original request. Valid values are <code>http</code> or <code>https</code>.</p>
   */
  Protocol?: string;
}

/**
 * <p>The condition that must be met in order to apply the routing rule.</p>
 */
export interface AwsS3BucketWebsiteConfigurationRoutingRuleCondition {
  /**
   * <p>Indicates to redirect the request if the HTTP error code matches this value.</p>
   */
  HttpErrorCodeReturnedEquals?: string;

  /**
   * <p>Indicates to redirect the request if the key prefix matches this value.</p>
   */
  KeyPrefixEquals?: string;
}

/**
 * <p>The rules to redirect the request if the condition in <code>Condition</code> is
 *          met.</p>
 */
export interface AwsS3BucketWebsiteConfigurationRoutingRuleRedirect {
  /**
   * <p>The host name to use in the redirect request.</p>
   */
  Hostname?: string;

  /**
   * <p>The HTTP redirect code to use in the response.</p>
   */
  HttpRedirectCode?: string;

  /**
   * <p>The protocol to use to redirect the request. By default, uses the protocol from the
   *          original request.</p>
   */
  Protocol?: string;

  /**
   * <p>The object key prefix to use in the redirect request.</p>
   *          <p>Cannot be provided if <code>ReplaceKeyWith</code> is present.</p>
   */
  ReplaceKeyPrefixWith?: string;

  /**
   * <p>The specific object key to use in the redirect request.</p>
   *          <p>Cannot be provided if <code>ReplaceKeyPrefixWith</code> is present.</p>
   */
  ReplaceKeyWith?: string;
}

/**
 * <p>A rule for redirecting requests
 *          to the website.</p>
 */
export interface AwsS3BucketWebsiteConfigurationRoutingRule {
  /**
   * <p>Provides the condition that must be met in order to apply the routing rule.</p>
   */
  Condition?: AwsS3BucketWebsiteConfigurationRoutingRuleCondition;

  /**
   * <p>Provides the rules to redirect the request if the condition in <code>Condition</code> is
   *          met.</p>
   */
  Redirect?: AwsS3BucketWebsiteConfigurationRoutingRuleRedirect;
}

/**
 * <p>Website parameters for the S3
 *          bucket.</p>
 */
export interface AwsS3BucketWebsiteConfiguration {
  /**
   * <p>The name of the error document for the website.</p>
   */
  ErrorDocument?: string;

  /**
   * <p>The name of the index document for the website.</p>
   */
  IndexDocumentSuffix?: string;

  /**
   * <p>The redirect behavior for requests to the website.</p>
   */
  RedirectAllRequestsTo?: AwsS3BucketWebsiteConfigurationRedirectTo;

  /**
   * <p>The rules for applying redirects for requests to the website.</p>
   */
  RoutingRules?: AwsS3BucketWebsiteConfigurationRoutingRule[];
}

/**
 * <p>Specifies the default server-side encryption to apply to new objects in the
 *          bucket.</p>
 */
export interface AwsS3BucketServerSideEncryptionByDefault {
  /**
   * <p>Server-side encryption algorithm to use for the default encryption. Valid values are
   * <code>aws: kms</code> or <code>AES256</code>.</p>
   */
  SSEAlgorithm?: string;

  /**
   * <p>KMS key ID to use for the default encryption.</p>
   */
  KMSMasterKeyID?: string;
}

/**
 * <p>An encryption rule to apply to the S3 bucket.</p>
 */
export interface AwsS3BucketServerSideEncryptionRule {
  /**
   * <p>Specifies the default server-side encryption to apply to new objects in the bucket. If a
   *             <code>PUT</code> object request doesn't specify any server-side encryption, this default
   *          encryption is applied.</p>
   */
  ApplyServerSideEncryptionByDefault?: AwsS3BucketServerSideEncryptionByDefault;
}

/**
 * <p>The encryption configuration for the S3 bucket.</p>
 */
export interface AwsS3BucketServerSideEncryptionConfiguration {
  /**
   * <p>The encryption rules that are applied to the S3 bucket.</p>
   */
  Rules?: AwsS3BucketServerSideEncryptionRule[];
}

/**
 * <p>The details of an Amazon S3 bucket.</p>
 */
export interface AwsS3BucketDetails {
  /**
   * <p>The canonical user ID of the owner of the S3 bucket.</p>
   */
  OwnerId?: string;

  /**
   * <p>The display name of the owner of the S3 bucket.</p>
   */
  OwnerName?: string;

  /**
   * <p>The Amazon Web Services account identifier of the account that owns the S3 bucket.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>Indicates when the S3 bucket was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedAt?: string;

  /**
   * <p>The encryption rules that are applied to the S3 bucket.</p>
   */
  ServerSideEncryptionConfiguration?: AwsS3BucketServerSideEncryptionConfiguration;

  /**
   * <p>The lifecycle configuration for objects in the S3 bucket.</p>
   */
  BucketLifecycleConfiguration?: AwsS3BucketBucketLifecycleConfigurationDetails;

  /**
   * <p>Provides information about the Amazon S3 Public Access Block configuration for the S3 bucket.</p>
   */
  PublicAccessBlockConfiguration?: AwsS3AccountPublicAccessBlockDetails;

  /**
   * <p>The access control list for the S3 bucket.</p>
   */
  AccessControlList?: string;

  /**
   * <p>The logging configuration for the S3 bucket.</p>
   */
  BucketLoggingConfiguration?: AwsS3BucketLoggingConfiguration;

  /**
   * <p>The website configuration parameters for the S3 bucket.</p>
   */
  BucketWebsiteConfiguration?: AwsS3BucketWebsiteConfiguration;

  /**
   * <p>The notification configuration for the S3 bucket.</p>
   */
  BucketNotificationConfiguration?: AwsS3BucketNotificationConfiguration;

  /**
   * <p>The versioning state of an S3 bucket.</p>
   */
  BucketVersioningConfiguration?: AwsS3BucketBucketVersioningConfiguration;
}

/**
 * <p>Details about an Amazon S3 object.</p>
 */
export interface AwsS3ObjectDetails {
  /**
   * <p>Indicates when the object was last modified.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastModified?: string;

  /**
   * <p>The opaque identifier assigned by a web server to a specific version of a resource found
   *          at a URL.</p>
   */
  ETag?: string;

  /**
   * <p>The version of the object.</p>
   */
  VersionId?: string;

  /**
   * <p>A standard MIME type describing the format of the object data.</p>
   */
  ContentType?: string;

  /**
   * <p>If the object is stored using server-side encryption, the value of the server-side
   *          encryption algorithm used when storing this object in Amazon S3.</p>
   */
  ServerSideEncryption?: string;

  /**
   * <p>The identifier of the KMS symmetric customer managed key that was used for the object.</p>
   */
  SSEKMSKeyId?: string;
}

/**
 * <p>
 *          Information on the instance metadata service (IMDS) configuration of the notebook instance.
 *       </p>
 */
export interface AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails {
  /**
   * <p>
   *          Indicates the minimum IMDS version that the notebook instance supports.
   *       </p>
   */
  MinimumInstanceMetadataServiceVersion?: string;
}

/**
 * <p>
 *          Provides details about an Amazon SageMaker notebook instance.
 *       </p>
 */
export interface AwsSageMakerNotebookInstanceDetails {
  /**
   * <p>
   *          A list of Amazon Elastic Inference instance types to associate with the notebook instance. Currently, only one instance type can be associated with a notebook instance.
   *       </p>
   */
  AcceleratorTypes?: string[];

  /**
   * <p>
   *          An array of up to three Git repositories associated with the notebook instance. These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any other Git repository.
   *          These repositories are cloned at the same level as the default repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git repositories with SageMaker notebook instances</a> in the <i>Amazon SageMaker Developer Guide</i>.
   *       </p>
   */
  AdditionalCodeRepositories?: string[];

  /**
   * <p>
   *          The Git repository associated with the notebook instance as its default code repository. This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any other Git repository.
   *          When you open a notebook instance, it opens in the directory that contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git repositories with SageMaker notebook instances</a> in the <i>Amazon SageMaker Developer Guide</i>.
   *       </p>
   */
  DefaultCodeRepository?: string;

  /**
   * <p>
   *          Sets whether SageMaker provides internet access to the notebook instance. If you set this to <code>Disabled</code>, this notebook instance is able to access resources only in your VPC, and is not be able to connect to SageMaker training and endpoint services unless you configure a Network Address Translation (NAT) Gateway in your VPC.
   *       </p>
   */
  DirectInternetAccess?: string;

  /**
   * <p>
   *          If status of the instance is <code>Failed</code>, the reason it failed.
   *       </p>
   */
  FailureReason?: string;

  /**
   * <p>
   *          Information on the IMDS configuration of the notebook instance.
   *       </p>
   */
  InstanceMetadataServiceConfiguration?: AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails;

  /**
   * <p>
   *          The type of machine learning (ML) compute instance to launch for the notebook instance.
   *       </p>
   */
  InstanceType?: string;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of an Key Management Service (KMS) key that SageMaker uses to encrypt data on the storage volume attached to your notebook instance. The KMS key you provide must be enabled. For information, see
   *          <a href="https://docs.aws.amazon.com/kms/latest/developerguide/enabling-keys.html">Enabling and disabling keys</a> in the <i>Key Management Service Developer Guide</i>.
   *       </p>
   */
  KmsKeyId?: string;

  /**
   * <p>
   *          The network interface ID that SageMaker created when the instance was created.
   *       </p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the notebook instance.
   *       </p>
   */
  NotebookInstanceArn?: string;

  /**
   * <p>
   *          The name of a notebook instance lifecycle configuration.
   *       </p>
   */
  NotebookInstanceLifecycleConfigName?: string;

  /**
   * <p>
   *          The name of the new notebook instance.
   *       </p>
   */
  NotebookInstanceName?: string;

  /**
   * <p>
   *          The status of the notebook instance.
   *       </p>
   */
  NotebookInstanceStatus?: string;

  /**
   * <p>
   *          The platform identifier of the notebook instance runtime environment.
   *       </p>
   */
  PlatformIdentifier?: string;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the IAM role associated with the instance.
   *       </p>
   */
  RoleArn?: string;

  /**
   * <p>
   *          Whether root access is enabled or disabled for users of the notebook instance.
   *       </p>
   */
  RootAccess?: string;

  /**
   * <p>
   *          The VPC security group IDs.
   *       </p>
   */
  SecurityGroups?: string[];

  /**
   * <p>
   *          The ID of the VPC subnet to which you have a connectivity from your ML compute instance.
   *       </p>
   */
  SubnetId?: string;

  /**
   * <p>
   *          The URL that you use to connect to the Jupyter notebook that is running in your notebook instance.
   *       </p>
   */
  Url?: string;

  /**
   * <p>
   *          The size, in GB, of the ML storage volume to attach to the notebook instance.
   *       </p>
   */
  VolumeSizeInGB?: number;
}

/**
 * <p>Defines the rotation schedule for the secret.</p>
 */
export interface AwsSecretsManagerSecretRotationRules {
  /**
   * <p>The number of days after the previous rotation to rotate the secret.</p>
   */
  AutomaticallyAfterDays?: number;
}

/**
 * <p>Details about an Secrets Manager secret.</p>
 */
export interface AwsSecretsManagerSecretDetails {
  /**
   * <p>Defines the rotation schedule for the secret.</p>
   */
  RotationRules?: AwsSecretsManagerSecretRotationRules;

  /**
   * <p>Whether the rotation occurred within the specified rotation frequency.</p>
   */
  RotationOccurredWithinFrequency?: boolean;

  /**
   * <p>The ARN, Key ID, or alias of the KMS key used to encrypt the
   *             <code>SecretString</code> or <code>SecretBinary</code> values for versions of this
   *          secret.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Whether rotation is enabled.</p>
   */
  RotationEnabled?: boolean;

  /**
   * <p>The ARN of the Lambda function that rotates the secret.</p>
   */
  RotationLambdaArn?: string;

  /**
   * <p>Whether the secret is deleted.</p>
   */
  Deleted?: boolean;

  /**
   * <p>The name of the secret.</p>
   */
  Name?: string;

  /**
   * <p>The user-provided description of the secret.</p>
   */
  Description?: string;
}

export enum ComplianceStatus {
  FAILED = "FAILED",
  NOT_AVAILABLE = "NOT_AVAILABLE",
  PASSED = "PASSED",
  WARNING = "WARNING",
}

/**
 * <p>Provides additional context for the value of <code>Compliance.Status</code>.</p>
 */
export interface StatusReason {
  /**
   * <p>A code that represents a reason for the control status. For the list of status reason
   *          codes and their meanings, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-results.html#securityhub-standards-results-asff">Standards-related information in the ASFF</a> in the
   *             <i>Security Hub User Guide</i>. </p>
   */
  ReasonCode: string | undefined;

  /**
   * <p>The corresponding description for the status reason code.</p>
   */
  Description?: string;
}

/**
 * <p>Contains finding details that are specific to control-based findings. Only returned for
 *          findings generated from controls.</p>
 */
export interface Compliance {
  /**
   * <p>The result of a standards check.</p>
   *          <p>The valid values for <code>Status</code> are as follows.</p>
   *          <ul>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>PASSED</code> - Standards check passed for all evaluated
   *                      resources.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>WARNING</code> - Some information is missing or this check is not
   *                      supported for your configuration.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>FAILED</code> - Standards check failed for at least one evaluated
   *                      resource.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>NOT_AVAILABLE</code> - Check could not be performed due to a service
   *                      outage, API error, or because the result of the Config evaluation was
   *                         <code>NOT_APPLICABLE</code>. If the Config evaluation result was
   *                      <code>NOT_APPLICABLE</code>, then after 3 days, Security Hub automatically archives
   *                      the finding.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  Status?: ComplianceStatus | string;

  /**
   * <p>For a control, the industry or regulatory framework requirements that are related to the
   *          control. The check for that control is aligned with these requirements.</p>
   */
  RelatedRequirements?: string[];

  /**
   * <p>For findings generated from controls, a list of reasons behind the value of
   *             <code>Status</code>. For the list of status reason codes and their meanings, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-results.html#securityhub-standards-results-asff">Standards-related information in the ASFF</a> in the
   *             <i>Security Hub User Guide</i>. </p>
   */
  StatusReasons?: StatusReason[];
}

/**
 * <p>Details about a related finding.</p>
 */
export interface RelatedFinding {
  /**
   * <p>The ARN of the product that generated a related finding.</p>
   */
  ProductArn: string | undefined;

  /**
   * <p>The product-generated identifier for a related finding.</p>
   */
  Id: string | undefined;
}

export enum SeverityLabel {
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
  INFORMATIONAL = "INFORMATIONAL",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}

/**
 * <p>The severity assigned to the finding by the finding provider.</p>
 */
export interface FindingProviderSeverity {
  /**
   * <p>The severity label assigned to the finding by the finding provider.</p>
   */
  Label?: SeverityLabel | string;

  /**
   * <p>The finding provider's original value for the severity.</p>
   */
  Original?: string;
}

/**
 * <p>In a <code>BatchImportFindings</code> request, finding providers use <code>FindingProviderFields</code> to provide and update values for confidence, criticality, related findings, severity, and types.</p>
 */
export interface FindingProviderFields {
  /**
   * <p>A finding's confidence. Confidence is defined as the likelihood that a finding
   *          accurately identifies the behavior or issue that it was intended to identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   */
  Confidence?: number;

  /**
   * <p>The level of importance assigned to the resources associated with the finding.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources.</p>
   */
  Criticality?: number;

  /**
   * <p>A list of findings that are related to the current finding.</p>
   */
  RelatedFindings?: RelatedFinding[];

  /**
   * <p>The severity of a finding.</p>
   */
  Severity?: FindingProviderSeverity;

  /**
   * <p>One or more finding types in the format of <code>namespace/category/classifier</code>
   *          that classify a finding.</p>
   *          <p>Valid namespace values are: Software and Configuration Checks | TTPs | Effects | Unusual
   *          Behaviors | Sensitive Data Identifications</p>
   */
  Types?: string[];
}

export enum MalwareState {
  OBSERVED = "OBSERVED",
  REMOVAL_FAILED = "REMOVAL_FAILED",
  REMOVED = "REMOVED",
}

export enum MalwareType {
  ADWARE = "ADWARE",
  BLENDED_THREAT = "BLENDED_THREAT",
  BOTNET_AGENT = "BOTNET_AGENT",
  COIN_MINER = "COIN_MINER",
  EXPLOIT_KIT = "EXPLOIT_KIT",
  KEYLOGGER = "KEYLOGGER",
  MACRO = "MACRO",
  POTENTIALLY_UNWANTED = "POTENTIALLY_UNWANTED",
  RANSOMWARE = "RANSOMWARE",
  REMOTE_ACCESS = "REMOTE_ACCESS",
  ROOTKIT = "ROOTKIT",
  SPYWARE = "SPYWARE",
  TROJAN = "TROJAN",
  VIRUS = "VIRUS",
  WORM = "WORM",
}

/**
 * <p>A list of malware related to a finding.</p>
 */
export interface Malware {
  /**
   * <p>The name of the malware that was observed.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of the malware that was observed.</p>
   */
  Type?: MalwareType | string;

  /**
   * <p>The file system path of the malware that was observed.</p>
   */
  Path?: string;

  /**
   * <p>The state of the malware that was observed.</p>
   */
  State?: MalwareState | string;
}

export enum NetworkDirection {
  IN = "IN",
  OUT = "OUT",
}

/**
 * <p>A range of ports.</p>
 */
export interface PortRange {
  /**
   * <p>The first port in the port range.</p>
   */
  Begin?: number;

  /**
   * <p>The last port in the port range.</p>
   */
  End?: number;
}

/**
 * <p>The details of network-related information about a finding.</p>
 */
export interface Network {
  /**
   * <p>The direction of network traffic associated with a finding.</p>
   */
  Direction?: NetworkDirection | string;

  /**
   * <p>The protocol of network-related information about a finding.</p>
   */
  Protocol?: string;

  /**
   * <p>The range of open ports that is present on the network.</p>
   */
  OpenPortRange?: PortRange;

  /**
   * <p>The source IPv4 address of network-related information about a finding.</p>
   */
  SourceIpV4?: string;

  /**
   * <p>The source IPv6 address of network-related information about a finding.</p>
   */
  SourceIpV6?: string;

  /**
   * <p>The source port of network-related information about a finding.</p>
   */
  SourcePort?: number;

  /**
   * <p>The source domain of network-related information about a finding.</p>
   */
  SourceDomain?: string;

  /**
   * <p>The source media access control (MAC) address of network-related information about a
   *          finding.</p>
   */
  SourceMac?: string;

  /**
   * <p>The destination IPv4 address of network-related information about a finding.</p>
   */
  DestinationIpV4?: string;

  /**
   * <p>The destination IPv6 address of network-related information about a finding.</p>
   */
  DestinationIpV6?: string;

  /**
   * <p>The destination port of network-related information about a finding.</p>
   */
  DestinationPort?: number;

  /**
   * <p>The destination domain of network-related information about a finding.</p>
   */
  DestinationDomain?: string;
}

/**
 * <p>Information about the destination of the next component in the network path.</p>
 */
export interface NetworkPathComponentDetails {
  /**
   * <p>The IP addresses of the destination.</p>
   */
  Address?: string[];

  /**
   * <p>A list of port ranges for the destination.</p>
   */
  PortRanges?: PortRange[];
}

/**
 * <p>Details about a network path component that occurs before or after the current
 *          component.</p>
 */
export interface NetworkHeader {
  /**
   * <p>The protocol used for the component.</p>
   */
  Protocol?: string;

  /**
   * <p>Information about the destination of the component.</p>
   */
  Destination?: NetworkPathComponentDetails;

  /**
   * <p>Information about the origin of the component.</p>
   */
  Source?: NetworkPathComponentDetails;
}

/**
 * <p>Information about a network path component.</p>
 */
export interface NetworkPathComponent {
  /**
   * <p>The identifier of a component in the network path.</p>
   */
  ComponentId?: string;

  /**
   * <p>The type of component.</p>
   */
  ComponentType?: string;

  /**
   * <p>Information about the component that comes after the current component in the network
   *          path.</p>
   */
  Egress?: NetworkHeader;

  /**
   * <p>Information about the component that comes before the current node in the network
   *          path.</p>
   */
  Ingress?: NetworkHeader;
}

/**
 * <p>A user-defined note added to a finding.</p>
 */
export interface Note {
  /**
   * <p>The text of a note.</p>
   */
  Text: string | undefined;

  /**
   * <p>The principal that created a note.</p>
   */
  UpdatedBy: string | undefined;

  /**
   * <p>The timestamp of when the note was updated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  UpdatedAt: string | undefined;
}

/**
 * <p>Provides an overview of the patch compliance status for an instance against a selected
 *          compliance standard.</p>
 */
export interface PatchSummary {
  /**
   * <p>The identifier of the compliance standard that was used to determine the patch
   *          compliance status.</p>
   */
  Id: string | undefined;

  /**
   * <p>The number of patches from the compliance standard that were installed
   *          successfully.</p>
   */
  InstalledCount?: number;

  /**
   * <p>The number of patches that are part of the compliance standard but are not installed.
   *          The count includes patches that failed to install.</p>
   */
  MissingCount?: number;

  /**
   * <p>The number of patches from the compliance standard that failed to install.</p>
   */
  FailedCount?: number;

  /**
   * <p>The number of installed patches that are not part of the compliance standard.</p>
   */
  InstalledOtherCount?: number;

  /**
   * <p>The number of patches that are installed but are also on a list of patches that the
   *          customer rejected.</p>
   */
  InstalledRejectedCount?: number;

  /**
   * <p>The number of patches that were applied, but that require the instance to be rebooted in
   *          order to be marked as installed.</p>
   */
  InstalledPendingReboot?: number;

  /**
   * <p>Indicates when the operation started.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  OperationStartTime?: string;

  /**
   * <p>Indicates when the operation completed.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  OperationEndTime?: string;

  /**
   * <p>The reboot option specified for the instance.</p>
   */
  RebootOption?: string;

  /**
   * <p>The type of patch operation performed. For Patch Manager, the values are
   *             <code>SCAN</code> and <code>INSTALL</code>. </p>
   */
  Operation?: string;
}

/**
 * <p>The details of process-related information about a finding.</p>
 */
export interface ProcessDetails {
  /**
   * <p>The name of the process.</p>
   */
  Name?: string;

  /**
   * <p>The path to the process executable.</p>
   */
  Path?: string;

  /**
   * <p>The process ID.</p>
   */
  Pid?: number;

  /**
   * <p>The parent process ID.</p>
   */
  ParentPid?: number;

  /**
   * <p>Indicates when the process was launched.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LaunchedAt?: string;

  /**
   * <p>Indicates when the process was terminated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  TerminatedAt?: string;
}

export enum RecordState {
  ACTIVE = "ACTIVE",
  ARCHIVED = "ARCHIVED",
}

/**
 * <p>A recommendation on how to remediate the issue identified in a finding.</p>
 */
export interface Recommendation {
  /**
   * <p>Describes the recommended steps to take to remediate an issue identified in a finding.</p>
   */
  Text?: string;

  /**
   * <p>A URL to a page or site that contains information about how to remediate a finding.</p>
   */
  Url?: string;
}

/**
 * <p>Details about the remediation steps for a finding.</p>
 */
export interface Remediation {
  /**
   * <p>A recommendation on the steps to take to remediate the issue identified by a finding.</p>
   */
  Recommendation?: Recommendation;
}

/**
 * <p>An occurrence of sensitive data detected in a Microsoft Excel workbook, comma-separated value (CSV) file, or tab-separated value (TSV) file.</p>
 */
export interface Cell {
  /**
   * <p>The column number of the column that contains the data. For a Microsoft Excel workbook, the column number corresponds to the alphabetical column identifiers. For example, a value of 1 for Column corresponds to the A column in the workbook.</p>
   */
  Column?: number;

  /**
   * <p>The row number of the row that contains the data.</p>
   */
  Row?: number;

  /**
   * <p>The name of the column that contains the data.</p>
   */
  ColumnName?: string;

  /**
   * <p>For a Microsoft Excel workbook, provides the location of the cell, as an absolute cell reference, that contains the data. For example, Sheet2!C5 for cell C5 on Sheet2.</p>
   */
  CellReference?: string;
}

/**
 * <p>Identifies where the sensitive data begins and ends.</p>
 */
export interface Range {
  /**
   * <p>The number of lines (for a line range) or characters (for an offset range) from the beginning of the file to the end of the sensitive data.</p>
   */
  Start?: number;

  /**
   * <p>The number of lines (for a line range) or characters (for an offset range) from the beginning of the file to the end of the sensitive data.</p>
   */
  End?: number;

  /**
   * <p>In the line where the sensitive data starts, the column within the line where the sensitive data starts.</p>
   */
  StartColumn?: number;
}

/**
 * <p>An occurrence of sensitive data in an Adobe Portable Document Format (PDF) file.</p>
 */
export interface Page {
  /**
   * <p>The page number of the page that contains the sensitive data.</p>
   */
  PageNumber?: number;

  /**
   * <p>An occurrence of sensitive data detected in a non-binary text file or a Microsoft Word file. Non-binary text files include files such as HTML, XML, JSON, and TXT files.</p>
   */
  LineRange?: Range;

  /**
   * <p>An occurrence of sensitive data detected in a binary text file.</p>
   */
  OffsetRange?: Range;
}

/**
 * <p>An occurrence of sensitive data in an Apache Avro object container or an Apache Parquet file.</p>
 */
export interface _Record {
  /**
   * <p>The path, as a JSONPath expression, to the field in the record that contains the data. If the field name is longer than 20 characters, it is truncated. If the path is longer than 250 characters, it is truncated.</p>
   */
  JsonPath?: string;

  /**
   * <p>The record index, starting from 0, for the record that contains the data.</p>
   */
  RecordIndex?: number;
}

/**
 * <p>The detected occurrences of sensitive data.</p>
 */
export interface Occurrences {
  /**
   * <p>Occurrences of sensitive data detected in a non-binary text file or a Microsoft Word file. Non-binary text files include files such as HTML, XML, JSON, and TXT files.</p>
   */
  LineRanges?: Range[];

  /**
   * <p>Occurrences of sensitive data detected in a binary text file.</p>
   */
  OffsetRanges?: Range[];

  /**
   * <p>Occurrences of sensitive data in an Adobe Portable Document Format (PDF) file.</p>
   */
  Pages?: Page[];

  /**
   * <p>Occurrences of sensitive data in an Apache Avro object container or an Apache Parquet file.</p>
   */
  Records?: _Record[];

  /**
   * <p>Occurrences of sensitive data detected in Microsoft Excel workbooks, comma-separated value (CSV) files, or tab-separated value (TSV) files.</p>
   */
  Cells?: Cell[];
}

/**
 * <p>The list of detected instances of sensitive data.</p>
 */
export interface CustomDataIdentifiersDetections {
  /**
   * <p>The total number of occurrences of sensitive data that were detected.</p>
   */
  Count?: number;

  /**
   * <p>The ARN of the custom identifier that was used to detect the sensitive data.</p>
   */
  Arn?: string;

  /**
   * <p>he name of the custom identifier that detected the sensitive data.</p>
   */
  Name?: string;

  /**
   * <p>Details about the sensitive data that was detected.</p>
   */
  Occurrences?: Occurrences;
}

/**
 * <p>Contains an instance of sensitive data that was detected by a customer-defined identifier.</p>
 */
export interface CustomDataIdentifiersResult {
  /**
   * <p>The list of detected instances of sensitive data.</p>
   */
  Detections?: CustomDataIdentifiersDetections[];

  /**
   * <p>The total number of occurrences of sensitive data.</p>
   */
  TotalCount?: number;
}

/**
 * <p>The list of detected instances of sensitive data.</p>
 */
export interface SensitiveDataDetections {
  /**
   * <p>The total number of occurrences of sensitive data that were detected.</p>
   */
  Count?: number;

  /**
   * <p>The type of sensitive data that was detected. For example, the type might indicate that the data is an email address.</p>
   */
  Type?: string;

  /**
   * <p>Details about the sensitive data that was detected.</p>
   */
  Occurrences?: Occurrences;
}

/**
 * <p>Contains a detected instance of sensitive data that are based on built-in identifiers.</p>
 */
export interface SensitiveDataResult {
  /**
   * <p>The category of sensitive data that was detected. For example, the category can indicate that the sensitive data involved credentials, financial information, or personal information.</p>
   */
  Category?: string;

  /**
   * <p>The list of detected instances of sensitive data.</p>
   */
  Detections?: SensitiveDataDetections[];

  /**
   * <p>The total number of occurrences of sensitive data.</p>
   */
  TotalCount?: number;
}

/**
 * <p>Provides details about the current status of the sensitive data detection.</p>
 */
export interface ClassificationStatus {
  /**
   * <p>The code that represents the status of the sensitive data detection.</p>
   */
  Code?: string;

  /**
   * <p>A longer description of the current status of the sensitive data detection.</p>
   */
  Reason?: string;
}

/**
 * <p>Details about the sensitive data that was detected on the resource.</p>
 */
export interface ClassificationResult {
  /**
   * <p>The type of content that the finding applies to.</p>
   */
  MimeType?: string;

  /**
   * <p>The total size in bytes of the affected data.</p>
   */
  SizeClassified?: number;

  /**
   * <p>Indicates whether there are additional occurrences of sensitive data that are not included in the finding. This occurs when the number of occurrences exceeds the maximum that can be included.</p>
   */
  AdditionalOccurrences?: boolean;

  /**
   * <p>The current status of the sensitive data detection.</p>
   */
  Status?: ClassificationStatus;

  /**
   * <p>Provides details about sensitive data that was identified based on built-in configuration.</p>
   */
  SensitiveData?: SensitiveDataResult[];

  /**
   * <p>Provides details about sensitive data that was identified based on customer-defined configuration.</p>
   */
  CustomDataIdentifiers?: CustomDataIdentifiersResult;
}

/**
 * <p>Provides details about sensitive data that was detected on a resource.</p>
 */
export interface DataClassificationDetails {
  /**
   * <p>The path to the folder or file that contains the sensitive data.</p>
   */
  DetailedResultsLocation?: string;

  /**
   * <p>The details about the sensitive data that was detected on the resource.</p>
   */
  Result?: ClassificationResult;
}

/**
 * <p>A wrapper type for the attributes of an Amazon SNS subscription.</p>
 */
export interface AwsSnsTopicSubscription {
  /**
   * <p>The subscription's endpoint (format depends on the protocol).</p>
   */
  Endpoint?: string;

  /**
   * <p>The subscription's protocol.</p>
   */
  Protocol?: string;
}

/**
 * <p>Provides information about an Amazon SNS topic to which notifications can be published.</p>
 */
export interface AwsSnsTopicDetails {
  /**
   * <p>The ID of an Amazon Web Services managed key for Amazon SNS or a customer managed key.</p>
   */
  KmsMasterKeyId?: string;

  /**
   * <p>Subscription is an embedded property that describes the subscription endpoints of an Amazon SNS topic.</p>
   */
  Subscription?: AwsSnsTopicSubscription[];

  /**
   * <p>The name of the Amazon SNS topic.</p>
   */
  TopicName?: string;

  /**
   * <p>The subscription's owner.</p>
   */
  Owner?: string;

  /**
   * <p>Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint.
   *       </p>
   */
  SqsSuccessFeedbackRoleArn?: string;

  /**
   * <p>Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint.
   *       </p>
   */
  SqsFailureFeedbackRoleArn?: string;

  /**
   * <p>Indicates failed message delivery status for an Amazon SNS topic that is subscribed to a platform application endpoint.
   *       </p>
   */
  ApplicationSuccessFeedbackRoleArn?: string;

  /**
   * <p>Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon Kinesis Data Firehose endpoint.
   *       </p>
   */
  FirehoseSuccessFeedbackRoleArn?: string;

  /**
   * <p>Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon Kinesis Data Firehose endpoint.
   *       </p>
   */
  FirehoseFailureFeedbackRoleArn?: string;

  /**
   * <p>Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an HTTP endpoint.
   *       </p>
   */
  HttpSuccessFeedbackRoleArn?: string;

  /**
   * <p>Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an HTTP endpoint. </p>
   */
  HttpFailureFeedbackRoleArn?: string;
}

/**
 * <p>Data about a queue.</p>
 */
export interface AwsSqsQueueDetails {
  /**
   * <p>The length of time, in seconds, for which Amazon SQS can reuse a data key to encrypt or decrypt messages before calling KMS again.</p>
   */
  KmsDataKeyReusePeriodSeconds?: number;

  /**
   * <p>The ID of an Amazon Web Services managed key for Amazon SQS or a custom
   *          KMS key.</p>
   */
  KmsMasterKeyId?: string;

  /**
   * <p>The name of the new queue.</p>
   */
  QueueName?: string;

  /**
   * <p>The ARN of the dead-letter queue to which Amazon SQS moves
   *          messages after the value of <code>maxReceiveCount</code> is exceeded. </p>
   */
  DeadLetterTargetArn?: string;
}

/**
 * <p>Provides the details about the compliance status for a patch.</p>
 */
export interface AwsSsmComplianceSummary {
  /**
   * <p>The current patch compliance status. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPLIANT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_COMPLIANT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNSPECIFIED_DATA</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *             <code>CRITICAL</code>.</p>
   */
  CompliantCriticalCount?: number;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *          <code>HIGH</code>.</p>
   */
  CompliantHighCount?: number;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *             <code>MEDIUM</code>.</p>
   */
  CompliantMediumCount?: number;

  /**
   * <p>The type of execution that was used determine compliance.</p>
   */
  ExecutionType?: string;

  /**
   * <p>For the patch items that are noncompliant, the number of items that have a severity of
   *             <code>CRITICAL</code>.</p>
   */
  NonCompliantCriticalCount?: number;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *             <code>INFORMATIONAL</code>.</p>
   */
  CompliantInformationalCount?: number;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>INFORMATIONAL</code>.</p>
   */
  NonCompliantInformationalCount?: number;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *             <code>UNSPECIFIED</code>.</p>
   */
  CompliantUnspecifiedCount?: number;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>LOW</code>.</p>
   */
  NonCompliantLowCount?: number;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>HIGH</code>.</p>
   */
  NonCompliantHighCount?: number;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *          <code>LOW</code>.</p>
   */
  CompliantLowCount?: number;

  /**
   * <p>The type of resource for which the compliance was determined. For
   *             <code>AwsSsmPatchCompliance</code>, <code>ComplianceType</code> is <code>Patch</code>. </p>
   */
  ComplianceType?: string;

  /**
   * <p>The identifier of the patch baseline. The patch baseline lists the patches that are
   *          approved for installation.</p>
   */
  PatchBaselineId?: string;

  /**
   * <p>The highest severity for the patches. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CRITICAL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HIGH</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOW</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INFORMATIONAL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNSPECIFIED</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  OverallSeverity?: string;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>MEDIUM</code>.</p>
   */
  NonCompliantMediumCount?: number;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>UNSPECIFIED</code>.</p>
   */
  NonCompliantUnspecifiedCount?: number;

  /**
   * <p>The identifier of the patch group for which compliance was determined. A patch group
   *          uses tags to group EC2 instances that should have the same patch compliance.</p>
   */
  PatchGroup?: string;
}

/**
 * <p>Provides details about the compliance for a patch.</p>
 */
export interface AwsSsmPatch {
  /**
   * <p>The compliance status details for the patch.</p>
   */
  ComplianceSummary?: AwsSsmComplianceSummary;
}

/**
 * <p>Provides information about the state of a patch on an instance based on the patch
 *          baseline that was used to patch the instance.</p>
 */
export interface AwsSsmPatchComplianceDetails {
  /**
   * <p>Information about the status of a patch.</p>
   */
  Patch?: AwsSsmPatch;
}

/**
 * <p>A match predicate. A predicate might look for characteristics such as specific IP addresses, geographic locations, or sizes.</p>
 */
export interface AwsWafRateBasedRuleMatchPredicate {
  /**
   * <p>The unique identifier for the predicate.</p>
   */
  DataId?: string;

  /**
   * <p>If set to <code>true</code>, then the rule actions are performed on requests that match the predicate settings.</p>
   *          <p>If set to <code>false</code>, then the rule actions are performed on all requests except those that match the predicate settings.
   *       </p>
   */
  Negated?: boolean;

  /**
   * <p>The type of predicate. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ByteMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GeoMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IPMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RegexMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SizeConstraint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SqlInjectionMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>XssMatch</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Type?: string;
}

/**
 * <p>Details about a rate-based rule for global resources. A rate-based rule provides settings to indicate when to allow, block, or count a request. Rate-based rules include the number of requests that arrive over a specified period of time.</p>
 */
export interface AwsWafRateBasedRuleDetails {
  /**
   * <p>The name of the metrics for the rate-based rule.</p>
   */
  MetricName?: string;

  /**
   * <p>The name of the rate-based rule.</p>
   */
  Name?: string;

  /**
   * <p>The field that WAF uses to determine whether requests are likely arriving from single source and are subject to rate monitoring.</p>
   */
  RateKey?: string;

  /**
   * <p>The maximum number of requests that have an identical value for the field specified in <code>RateKey</code> that are allowed within a five-minute period. If the number of requests exceeds <code>RateLimit</code> and the other predicates specified in the rule are met, WAF triggers the action for the rule.</p>
   */
  RateLimit?: number;

  /**
   * <p>The unique identifier for the rate-based rule.</p>
   */
  RuleId?: string;

  /**
   * <p>The predicates to include in the rate-based rule.</p>
   */
  MatchPredicates?: AwsWafRateBasedRuleMatchPredicate[];
}

/**
 * <p>Details for a match predicate. A predicate might look for characteristics such as specific IP addresses, geographic locations, or sizes.</p>
 */
export interface AwsWafRegionalRateBasedRuleMatchPredicate {
  /**
   * <p>The unique identifier for the predicate.</p>
   */
  DataId?: string;

  /**
   * <p>If set to <code>true</code>, then the rule actions are performed on requests that match the predicate settings.</p>
   *          <p>If set to <code>false</code>, then the rule actions are performed on all requests except those that match the predicate settings.</p>
   */
  Negated?: boolean;

  /**
   * <p>The type of predicate. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ByteMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GeoMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IPMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RegexMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SizeConstraint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SqlInjectionMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>XssMatch</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Type?: string;
}

/**
 * <p>contains details about a rate-based rule for Regional resources. A rate-based rule provides settings to indicate when to allow, block, or count a request. Rate-based rules include the number of requests that arrive over a specified period of time.</p>
 */
export interface AwsWafRegionalRateBasedRuleDetails {
  /**
   * <p>The name of the metrics for the rate-based rule.</p>
   */
  MetricName?: string;

  /**
   * <p>The name of the rate-based rule.</p>
   */
  Name?: string;

  /**
   * <p>The field that WAF uses to determine whether requests are likely arriving from single source and are subject to rate monitoring.</p>
   */
  RateKey?: string;

  /**
   * <p>The maximum number of requests that have an identical value for the field specified in <code>RateKey</code> that are allowed within a five-minute period. If the number of requests exceeds <code>RateLimit</code> and the other predicates specified in the rule are met, WAF triggers the action for the rule.</p>
   */
  RateLimit?: number;

  /**
   * <p>The unique identifier for the rate-based rule.</p>
   */
  RuleId?: string;

  /**
   * <p>The predicates to include in the rate-based rule.</p>
   */
  MatchPredicates?: AwsWafRegionalRateBasedRuleMatchPredicate[];
}

/**
 * <p>Provides details about the <code>ByteMatchSet</code>, <code>IPSet</code>, <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>,
 *          <code>RegexMatchSet</code>, <code>GeoMatchSet</code>, and <code>SizeConstraintSet</code> objects that you want to add to a rule and, for each object, indicates whether you want to negate the settings.
 *       </p>
 */
export interface AwsWafRegionalRulePredicateListDetails {
  /**
   * <p>A unique identifier for a predicate in a rule, such as <code>ByteMatchSetId</code> or <code>IPSetId</code>.
   *       </p>
   */
  DataId?: string;

  /**
   * <p>Specifies if you want WAF to allow, block, or count requests based on the settings in the
   *          <code>ByteMatchSet</code>, <code>IPSet</code>, <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>,
   *          <code>RegexMatchSet</code>, <code>GeoMatchSet</code>, or <code>SizeConstraintSet</code>.
   *       </p>
   */
  Negated?: boolean;

  /**
   * <p>The type of predicate in a rule, such as <code>ByteMatch</code> or <code>IPSet</code>.
   *       </p>
   */
  Type?: string;
}

/**
 * <p>Provides information about an WAF Regional rule. This rule identifies the web requests that you want to allow, block, or count. </p>
 */
export interface AwsWafRegionalRuleDetails {
  /**
   * <p>A name for the metrics for the rule.
   *       </p>
   */
  MetricName?: string;

  /**
   * <p>A descriptive name for the rule.
   *       </p>
   */
  Name?: string;

  /**
   * <p>Specifies the <code>ByteMatchSet</code>, <code>IPSet</code>,
   *             <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>, <code>RegexMatchSet</code>,
   *             <code>GeoMatchSet</code>, and <code>SizeConstraintSet</code> objects that you want to
   *          add to a rule and, for each object, indicates whether you want to negate the settings. </p>
   */
  PredicateList?: AwsWafRegionalRulePredicateListDetails[];

  /**
   * <p>The ID of the rule.
   *       </p>
   */
  RuleId?: string;
}

/**
 * <p>Describes the action that WAF should take on a web request when it matches the criteria defined in the rule.
 *       </p>
 */
export interface AwsWafRegionalRuleGroupRulesActionDetails {
  /**
   * <p>Specifies the <code>ByteMatchSet</code>, <code>IPSet</code>, <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>, <code>RegexMatchSet</code>,
   * <code>GeoMatchSet</code>, and <code>SizeConstraintSet</code> objects that you want to add to a rule and, for each object, indicates whether you want to negate the settings.</p>
   */
  Type?: string;
}

/**
 * <p>Provides information about the rules attached to a rule group
 *       </p>
 */
export interface AwsWafRegionalRuleGroupRulesDetails {
  /**
   * <p>The action that WAF should take on a web request when it matches the criteria defined in the rule. </p>
   */
  Action?: AwsWafRegionalRuleGroupRulesActionDetails;

  /**
   * <p>If you define more than one rule in a web ACL, WAF evaluates each request against the rules in
   *          order based on the value of <code>Priority</code>. </p>
   */
  Priority?: number;

  /**
   * <p>The ID for a rule.
   *       </p>
   */
  RuleId?: string;

  /**
   * <p>The type of rule in the rule group.
   *       </p>
   */
  Type?: string;
}

/**
 * <p>Provides information about an WAF Regional rule group. The rule group is a collection of rules for inspecting and controlling web
 *          requests. </p>
 */
export interface AwsWafRegionalRuleGroupDetails {
  /**
   * <p>A name for the metrics for this rule group.
   *       </p>
   */
  MetricName?: string;

  /**
   * <p>The descriptive name of the rule group.
   *       </p>
   */
  Name?: string;

  /**
   * <p>The ID of the rule group.
   *       </p>
   */
  RuleGroupId?: string;

  /**
   * <p>Provides information about the rule statements used to identify the web requests that you want to allow, block, or
   * count.
   *       </p>
   */
  Rules?: AwsWafRegionalRuleGroupRulesDetails[];
}

/**
 * <p>The action that WAF takes when a web request matches all conditions in the
 *          rule, such as allow, block, or count the request. </p>
 */
export interface AwsWafRegionalWebAclRulesListActionDetails {
  /**
   * <p>For actions that are associated with a rule, the action that WAF takes when a web request matches all conditions in a rule.
   *       </p>
   */
  Type?: string;
}

/**
 * <p>Provides details about the action to use in the place of the action that results from the rule group
 * evaluation.
 *       </p>
 */
export interface AwsWafRegionalWebAclRulesListOverrideActionDetails {
  /**
   * <p>Overrides the rule evaluation result in the rule group.
   *       </p>
   */
  Type?: string;
}

/**
 * <p>A combination of <code>ByteMatchSet</code>, <code>IPSet</code>, and/or <code>SqlInjectionMatchSet</code>
 * objects that identify the web requests that you want to allow, block, or count.
 *       </p>
 */
export interface AwsWafRegionalWebAclRulesListDetails {
  /**
   * <p>The action that WAF takes when a web request matches all conditions in the rule, such as allow,
   *          block, or count the request.
   *       </p>
   */
  Action?: AwsWafRegionalWebAclRulesListActionDetails;

  /**
   * <p>Overrides the rule evaluation result in the rule group.
   *       </p>
   */
  OverrideAction?: AwsWafRegionalWebAclRulesListOverrideActionDetails;

  /**
   * <p>The order in which WAF evaluates the rules in a web ACL.
   *       </p>
   */
  Priority?: number;

  /**
   * <p>The ID of an WAF Regional rule to associate with a web ACL. </p>
   */
  RuleId?: string;

  /**
   * <p>For actions that are associated with a rule, the action that WAF takes when a web
   * request matches all conditions in a rule.
   *       </p>
   */
  Type?: string;
}

/**
 * <p>Provides information about the web access control list (web ACL). The web ACL contains the rules that identify the requests that you
 *          want to allow, block, or count. </p>
 */
export interface AwsWafRegionalWebAclDetails {
  /**
   * <p>The action to perform if none of the rules contained in the web ACL match.
   *       </p>
   */
  DefaultAction?: string;

  /**
   * <p>A name for the metrics for this web ACL.
   *       </p>
   */
  MetricName?: string;

  /**
   * <p>A descriptive name for the web ACL.
   *       </p>
   */
  Name?: string;

  /**
   * <p>An array that contains the action for each rule in a web ACL, the priority of the rule, and the ID of
   * the rule.
   *       </p>
   */
  RulesList?: AwsWafRegionalWebAclRulesListDetails[];

  /**
   * <p>The ID of the web ACL.
   *       </p>
   */
  WebAclId?: string;
}

/**
 * <p>Provides details about the <code>ByteMatchSet</code>, <code>IPSet</code>, <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>,
 *          <code>RegexMatchSet</code>, <code>GeoMatchSet</code>, and <code>SizeConstraintSet</code> objects that you want to add to a rule and,
 * for each object, indicates whether you want to negate the settings.
 *       </p>
 */
export interface AwsWafRulePredicateListDetails {
  /**
   * <p>A unique identifier for a predicate in a rule, such as <code>ByteMatchSetId</code> or <code>IPSetId</code>.
   *       </p>
   */
  DataId?: string;

  /**
   * <p>Specifies if you want WAF to allow, block, or count requests based on the settings in the
   *          <code>ByteMatchSet</code>, <code>IPSet</code>, <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>,
   *          <code>RegexMatchSet</code>, <code>GeoMatchSet</code>, or <code>SizeConstraintSet</code>.
   *       </p>
   */
  Negated?: boolean;

  /**
   * <p>The type of predicate in a rule, such as <code>ByteMatch</code> or <code>IPSet</code>.
   *       </p>
   */
  Type?: string;
}

/**
 * <p>Provides information about a WAF rule. This rule specifies the web requests that you want to allow, block, or count.
 *       </p>
 */
export interface AwsWafRuleDetails {
  /**
   * <p>The name of the metrics for this rule.
   *       </p>
   */
  MetricName?: string;

  /**
   * <p>A descriptive name for the rule.
   *       </p>
   */
  Name?: string;

  /**
   * <p>Specifies the <code>ByteMatchSet</code>, <code>IPSet</code>, <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>,
   *          <code>RegexMatchSet</code>, <code>GeoMatchSet</code>, and <code>SizeConstraintSet</code> objects that you want to add to a rule and,
   *          for each object, indicates whether you want to negate the settings.
   *       </p>
   */
  PredicateList?: AwsWafRulePredicateListDetails[];

  /**
   * <p>The ID of the WAF rule.
   *       </p>
   */
  RuleId?: string;
}

/**
 * <p>Provides information about what action WAF should take on a web request when it matches the criteria defined in the rule.
 *       </p>
 */
export interface AwsWafRuleGroupRulesActionDetails {
  /**
   * <p>The action that WAF should take on a web request when it matches the rule's
   *          statement.</p>
   */
  Type?: string;
}

/**
 * <p>Provides information about the rules attached to the rule group. These rules identify the web requests that you want to
 *          allow, block, or count.
 *       </p>
 */
export interface AwsWafRuleGroupRulesDetails {
  /**
   * <p>Provides information about what action WAF should take on a web request when it matches the criteria defined in the rule.
   *       </p>
   */
  Action?: AwsWafRuleGroupRulesActionDetails;

  /**
   * <p>If you define more than one rule in a web ACL, WAF evaluates each request against the rules in order
   *          based on the value of <code>Priority</code>.</p>
   */
  Priority?: number;

  /**
   * <p>The rule ID for a rule.
   *       </p>
   */
  RuleId?: string;

  /**
   * <p>The type of rule.
   *       </p>
   */
  Type?: string;
}

/**
 * <p>Provides information about an WAF rule group. A rule group is a collection of rules for inspecting and controlling web requests.
 *       </p>
 */
export interface AwsWafRuleGroupDetails {
  /**
   * <p>The name of the metrics for this rule group.
   *       </p>
   */
  MetricName?: string;

  /**
   * <p>The name of the rule group.
   *       </p>
   */
  Name?: string;

  /**
   * <p>The ID of the rule group.
   *       </p>
   */
  RuleGroupId?: string;

  /**
   * <p>Provides information about the rules attached to the rule group. These rules identify the web requests that you want to
   * allow, block, or count.
   *       </p>
   */
  Rules?: AwsWafRuleGroupRulesDetails[];
}

/**
 * <p>
 *          A custom header for custom request and response handling.
 *       </p>
 */
export interface AwsWafv2CustomHttpHeader {
  /**
   * <p>
   *          The name of the custom header.
   *       </p>
   */
  Name?: string;

  /**
   * <p>
   *          The value of the custom header.
   *       </p>
   */
  Value?: string;
}

/**
 * <p>
 *          Custom request handling behavior that inserts custom headers into a web request. WAF uses custom request handling when the rule action doesn't block the request.
 *       </p>
 */
export interface AwsWafv2CustomRequestHandlingDetails {
  /**
   * <p>
   *          The HTTP headers to insert into the request.
   *       </p>
   */
  InsertHeaders?: AwsWafv2CustomHttpHeader[];
}

/**
 * <p>
 *          Specifies that WAF should allow the request and optionally defines additional custom handling for the request.
 *       </p>
 */
export interface AwsWafv2ActionAllowDetails {
  /**
   * <p>
   *          Defines custom handling for the web request. For information about customizing web requests and responses, see
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide.</i>.
   *       </p>
   */
  CustomRequestHandling?: AwsWafv2CustomRequestHandlingDetails;
}

/**
 * <p>
 *          A custom response to send to the client. You can define a custom response for rule actions and default web ACL actions that are set to block.
 *       </p>
 */
export interface AwsWafv2CustomResponseDetails {
  /**
   * <p>
   *          References the response body that you want WAF to return to the web request client. You can define a custom response for a rule action or a default web ACL action that is set to block.
   *       </p>
   */
  CustomResponseBodyKey?: string;

  /**
   * <p>
   *          The HTTP status code to return to the client. For a list of status codes that you can use in your custom responses, see
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/customizing-the-response-status-codes.html">Supported status codes for custom response</a> in the <i>WAF Developer Guide.</i>
   *          </p>
   */
  ResponseCode?: number;

  /**
   * <p>
   *          The HTTP headers to use in the response.
   *       </p>
   */
  ResponseHeaders?: AwsWafv2CustomHttpHeader[];
}

/**
 * <p>
 *          Specifies that WAF should block the request and optionally defines additional custom handling for the response to the web request.
 *       </p>
 */
export interface AwsWafv2ActionBlockDetails {
  /**
   * <p>
   *          Defines a custom response for the web request. For information, see
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide.</i>.
   *       </p>
   */
  CustomResponse?: AwsWafv2CustomResponseDetails;
}

/**
 * <p>
 *          Specifies that WAF should run a CAPTCHA check against the request.
 *       </p>
 */
export interface AwsWafv2RulesActionCaptchaDetails {
  /**
   * <p>
   *          Defines custom handling for the web request, used when the CAPTCHA inspection determines that the request's token is valid and unexpired. For more information,
   *          see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide.</i>.
   *       </p>
   */
  CustomRequestHandling?: AwsWafv2CustomRequestHandlingDetails;
}

/**
 * <p>
 *          Specifies that WAF should count the request.
 *       </p>
 */
export interface AwsWafv2RulesActionCountDetails {
  /**
   * <p>
   *          Defines custom handling for the web request. For more information,
   *          see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide.</i>.
   *       </p>
   */
  CustomRequestHandling?: AwsWafv2CustomRequestHandlingDetails;
}

/**
 * <p>
 *          The action that WAF should take on a web request when it matches a rule's statement.
 *          Settings at the web ACL level can override the rule action setting.
 *       </p>
 */
export interface AwsWafv2RulesActionDetails {
  /**
   * <p>
   *          Instructs WAF to allow the web request.
   *       </p>
   */
  Allow?: AwsWafv2ActionAllowDetails;

  /**
   * <p>
   *          Instructs WAF to block the web request.
   *       </p>
   */
  Block?: AwsWafv2ActionBlockDetails;

  /**
   * <p>
   *          Instructs WAF to run a CAPTCHA check against the web request.
   *       </p>
   */
  Captcha?: AwsWafv2RulesActionCaptchaDetails;

  /**
   * <p>
   *          Instructs WAF to count the web request and then continue evaluating the request using the remaining rules in the web ACL.
   *       </p>
   */
  Count?: AwsWafv2RulesActionCountDetails;
}

/**
 * <p>
 *          Defines and enables Amazon CloudWatch metrics and web request sample collection.
 *       </p>
 */
export interface AwsWafv2VisibilityConfigDetails {
  /**
   * <p>
   *          A boolean indicating whether the associated resource sends metrics to Amazon CloudWatch. For the list of available
   *          metrics, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/monitoring-cloudwatch.html#waf-metrics">WAF metrics and dimensions</a> in the <i>WAF Developer Guide</i>.
   *       </p>
   */
  CloudWatchMetricsEnabled?: boolean;

  /**
   * <p>
   *          A name of the Amazon CloudWatch metric.
   *       </p>
   */
  MetricName?: string;

  /**
   * <p>
   *          A boolean indicating whether WAF should store a sampling of the web requests that match the rules.
   *          You can view the sampled requests through the WAF console.
   *       </p>
   */
  SampledRequestsEnabled?: boolean;
}

/**
 * <p>
 *          Provides details about rules in a rule group. A rule identifies web requests that you want to allow, block, or count. Each rule includes one top-level Statement that AWS WAF uses to identify matching web requests, and parameters that govern how AWS WAF handles them.
 *       </p>
 */
export interface AwsWafv2RulesDetails {
  /**
   * <p>
   *          The action that WAF should take on a web request when it matches the rule statement. Settings at the web ACL level can override the rule action setting.
   *       </p>
   */
  Action?: AwsWafv2RulesActionDetails;

  /**
   * <p>
   *          The name of the rule.
   *       </p>
   */
  Name?: string;

  /**
   * <p>
   *          The action to use in the place of the action that results from the rule group evaluation.
   *       </p>
   */
  OverrideAction?: string;

  /**
   * <p>
   *          If you define more than one Rule in a WebACL, WAF evaluates each request against the Rules in order based on the value of <code>Priority</code>.
   *          WAF processes rules with lower priority first. The priorities don't need to be consecutive, but they must all be different.
   *       </p>
   */
  Priority?: number;

  /**
   * <p>
   *          Defines and enables Amazon CloudWatch metrics and web request sample collection.
   *       </p>
   */
  VisibilityConfig?: AwsWafv2VisibilityConfigDetails;
}

/**
 * <p>
 *          Details about an WAFv2 rule group.
 *       </p>
 */
export interface AwsWafv2RuleGroupDetails {
  /**
   * <p>
   *          The web ACL capacity units (WCUs) required for this rule group.
   *       </p>
   */
  Capacity?: number;

  /**
   * <p>
   *          A description of the rule group that helps with identification.
   *       </p>
   */
  Description?: string;

  /**
   * <p>
   *          A unique identifier for the rule group.
   *       </p>
   */
  Id?: string;

  /**
   * <p>
   *          The name of the rule group. You cannot change the name of a rule group after you create it.
   *       </p>
   */
  Name?: string;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the entity.
   *       </p>
   */
  Arn?: string;

  /**
   * <p>
   *          The Rule statements used to identify the web requests that you want to allow, block, or count. Each rule includes one
   *          top-level statement that WAF uses to identify matching web requests, and parameters that govern how
   *          WAF handles them.
   *       </p>
   */
  Rules?: AwsWafv2RulesDetails[];

  /**
   * <p>
   *          Specifies whether the rule group is for an Amazon CloudFront distribution or for a regional application.
   *          A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync
   *          GraphQL API, or an Amazon Cognito user pool.
   *       </p>
   */
  Scope?: string;

  /**
   * <p>
   *          Defines and enables Amazon CloudWatch metrics and web request sample collection.
   *       </p>
   */
  VisibilityConfig?: AwsWafv2VisibilityConfigDetails;
}

/**
 * <p>
 *          Used for CAPTCHA and challenge token settings. Determines how long a CAPTCHA or challenge timestamp remains valid after WAF updates it for a successful CAPTCHA or challenge response.
 *       </p>
 */
export interface AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails {
  /**
   * <p>
   *          The amount of time, in seconds, that a CAPTCHA or challenge timestamp is considered valid by WAF.
   *       </p>
   */
  ImmunityTime?: number;
}

/**
 * <p>
 *          Specifies how WAF should handle CAPTCHA evaluations for rules that don't have their own <code>CaptchaConfig</code> settings.
 *       </p>
 */
export interface AwsWafv2WebAclCaptchaConfigDetails {
  /**
   * <p>
   *          Determines how long a CAPTCHA timestamp in the token remains valid after the client successfully solves a CAPTCHA puzzle.
   *       </p>
   */
  ImmunityTimeProperty?: AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails;
}

/**
 * <p>
 *          Specifies the action that Amazon CloudFront or WAF takes when a web request matches the conditions in the rule.
 *       </p>
 */
export interface AwsWafv2WebAclActionDetails {
  /**
   * <p>
   *          Specifies that WAF should allow requests by default.
   *       </p>
   */
  Allow?: AwsWafv2ActionAllowDetails;

  /**
   * <p>
   *          Specifies that WAF should block requests by default.
   *       </p>
   */
  Block?: AwsWafv2ActionBlockDetails;
}

/**
 * <p>
 *          Details about an WAFv2 web Access Control List (ACL).
 *       </p>
 */
export interface AwsWafv2WebAclDetails {
  /**
   * <p>
   *          The name of the web ACL.
   *       </p>
   */
  Name?: string;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the web ACL that you want to associate with the resource.
   *       </p>
   */
  Arn?: string;

  /**
   * <p>
   *          Indicates whether this web ACL is managed by Firewall Manager.
   *       </p>
   */
  ManagedbyFirewallManager?: boolean;

  /**
   * <p>
   *          A unique identifier for the web ACL.
   *       </p>
   */
  Id?: string;

  /**
   * <p>
   *          The web ACL capacity units (WCUs) currently being used by this web ACL.
   *       </p>
   */
  Capacity?: number;

  /**
   * <p>
   *          Specifies how WAF should handle CAPTCHA evaluations for rules that don't have their own
   *          <code>CaptchaConfig</code> settings.
   *       </p>
   */
  CaptchaConfig?: AwsWafv2WebAclCaptchaConfigDetails;

  /**
   * <p>
   *          The action to perform if none of the Rules contained in the web ACL match.
   *       </p>
   */
  DefaultAction?: AwsWafv2WebAclActionDetails;

  /**
   * <p>
   *          A description of the web ACL that helps with identification.
   *       </p>
   */
  Description?: string;

  /**
   * <p>
   *          The Rule statements used to identify the web requests that you want to allow, block, or count. Each rule includes one
   *          top-level statement that WAF uses to identify matching web requests, and parameters that govern how
   *          WAF handles them.
   *       </p>
   */
  Rules?: AwsWafv2RulesDetails[];

  /**
   * <p>
   *          Defines and enables Amazon CloudWatch metrics and web request sample collection.
   *       </p>
   */
  VisibilityConfig?: AwsWafv2VisibilityConfigDetails;
}

/**
 * <p>Details about the action that CloudFront or WAF takes when a web request matches the
 *          conditions in the rule. </p>
 */
export interface WafAction {
  /**
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
 * <p>Details about a rule to exclude from a rule group.</p>
 */
export interface WafExcludedRule {
  /**
   * <p>The unique identifier for the rule to exclude from the rule group.</p>
   */
  RuleId?: string;
}

/**
 * <p>Details about an override action for a rule.</p>
 */
export interface WafOverrideAction {
  /**
   * <p>
   *             <code>COUNT</code> overrides the action specified by the individual rule within a
   *             <code>RuleGroup</code> .</p>
   *          <p>If set to <code>NONE</code>, the rule's action takes place.</p>
   */
  Type?: string;
}

/**
 * <p>Details for a rule in an WAF web ACL.</p>
 */
export interface AwsWafWebAclRule {
  /**
   * <p>Specifies the action that CloudFront or WAF takes when a web request matches the
   *          conditions in the rule. </p>
   */
  Action?: WafAction;

  /**
   * <p>Rules to exclude from a rule group.</p>
   */
  ExcludedRules?: WafExcludedRule[];

  /**
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
   * <p>Specifies the order in which the rules in a web
   *          ACL are evaluated. Rules with a lower value for <code>Priority</code> are
   *          evaluated before rules with a higher value. The value must be a unique integer. If you add
   *          multiple rules to a web ACL, the values do not need to be consecutive.</p>
   */
  Priority?: number;

  /**
   * <p>The identifier for a rule.</p>
   */
  RuleId?: string;

  /**
   * <p>The rule type.</p>
   *          <p>Valid values: <code>REGULAR</code> | <code>RATE_BASED</code> | <code>GROUP</code>
   *          </p>
   *          <p>The default is <code>REGULAR</code>.</p>
   */
  Type?: string;
}

/**
 * <p>Provides information about an WAF web access control list (web ACL).</p>
 */
export interface AwsWafWebAclDetails {
  /**
   * <p>A friendly name or description of the web ACL. You can't change the name of a web ACL  after you create it.</p>
   */
  Name?: string;

  /**
   * <p>The action to perform if none of the rules contained in the web ACL match.</p>
   */
  DefaultAction?: string;

  /**
   * <p>An array that contains the action for each rule in a web ACL, the priority of the rule, and the ID of the rule.</p>
   */
  Rules?: AwsWafWebAclRule[];

  /**
   * <p>A unique identifier for a web ACL.</p>
   */
  WebAclId?: string;
}

/**
 * <p>Information about the encryption configuration for X-Ray.</p>
 */
export interface AwsXrayEncryptionConfigDetails {
  /**
   * <p>The identifier of the KMS key that is used for encryption. Provided if <code>Type</code> is <code>KMS</code>.</p>
   */
  KeyId?: string;

  /**
   * <p>The current status of the encryption configuration. Valid values are <code>ACTIVE</code> or <code>UPDATING</code>.</p>
   *          <p>When <code>Status</code> is equal to <code>UPDATING</code>, X-Ray might use both the old and new encryption.</p>
   */
  Status?: string;

  /**
   * <p>The type of encryption. <code>KMS</code> indicates that the encryption uses KMS keys. <code>NONE</code> indicates the default encryption.</p>
   */
  Type?: string;
}

/**
 * <p>Describes the mounting of a volume in a container.
 *       </p>
 */
export interface VolumeMount {
  /**
   * <p>The name of the volume.
   *       </p>
   */
  Name?: string;

  /**
   * <p>The path in the container at which the volume should be mounted.
   *       </p>
   */
  MountPath?: string;
}

/**
 * <p>Container details related to a finding.</p>
 */
export interface ContainerDetails {
  /**
   * <p>The runtime of the container.
   *       </p>
   */
  ContainerRuntime?: string;

  /**
   * <p>The name of the container related to a finding.</p>
   */
  Name?: string;

  /**
   * <p>The identifier of the container image related to a finding.</p>
   */
  ImageId?: string;

  /**
   * <p>The name of the container image related to a finding.</p>
   */
  ImageName?: string;

  /**
   * <p>Indicates when the container started.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LaunchedAt?: string;

  /**
   * <p>Provides information about the mounting of a volume in a container.
   *       </p>
   */
  VolumeMounts?: VolumeMount[];

  /**
   * <p>When this parameter is <code>true</code>, the container is given elevated privileges on the host
   * container instance (similar to the root user).
   *       </p>
   */
  Privileged?: boolean;
}

/**
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
   * <p>Details for an autoscaling group.</p>
   */
  AwsAutoScalingAutoScalingGroup?: AwsAutoScalingAutoScalingGroupDetails;

  /**
   * <p>Details for an CodeBuild project.</p>
   */
  AwsCodeBuildProject?: AwsCodeBuildProjectDetails;

  /**
   * <p>Details about a CloudFront distribution.</p>
   */
  AwsCloudFrontDistribution?: AwsCloudFrontDistributionDetails;

  /**
   * <p>Details about an EC2 instance related to a finding.</p>
   */
  AwsEc2Instance?: AwsEc2InstanceDetails;

  /**
   * <p>Details for an EC2 network interface.</p>
   */
  AwsEc2NetworkInterface?: AwsEc2NetworkInterfaceDetails;

  /**
   * <p>Details for an EC2 security group.</p>
   */
  AwsEc2SecurityGroup?: AwsEc2SecurityGroupDetails;

  /**
   * <p>Details for an Amazon EC2 volume.</p>
   */
  AwsEc2Volume?: AwsEc2VolumeDetails;

  /**
   * <p>Details for an Amazon EC2 VPC.</p>
   */
  AwsEc2Vpc?: AwsEc2VpcDetails;

  /**
   * <p>Details about an Elastic IP address.</p>
   */
  AwsEc2Eip?: AwsEc2EipDetails;

  /**
   * <p>Details about a subnet in Amazon EC2.</p>
   */
  AwsEc2Subnet?: AwsEc2SubnetDetails;

  /**
   * <p>Details about an EC2 network access control list (ACL).</p>
   */
  AwsEc2NetworkAcl?: AwsEc2NetworkAclDetails;

  /**
   * <p>Details about a load balancer.</p>
   */
  AwsElbv2LoadBalancer?: AwsElbv2LoadBalancerDetails;

  /**
   * <p>Details about an Elastic Beanstalk environment.</p>
   */
  AwsElasticBeanstalkEnvironment?: AwsElasticBeanstalkEnvironmentDetails;

  /**
   * <p>Details for an Elasticsearch domain.</p>
   */
  AwsElasticsearchDomain?: AwsElasticsearchDomainDetails;

  /**
   * <p>Details about an S3 bucket related to a finding.</p>
   */
  AwsS3Bucket?: AwsS3BucketDetails;

  /**
   * <p>Details about the Amazon S3 Public Access Block configuration for an account.</p>
   */
  AwsS3AccountPublicAccessBlock?: AwsS3AccountPublicAccessBlockDetails;

  /**
   * <p>Details about an S3 object related to a finding.</p>
   */
  AwsS3Object?: AwsS3ObjectDetails;

  /**
   * <p>Details about a Secrets Manager secret.</p>
   */
  AwsSecretsManagerSecret?: AwsSecretsManagerSecretDetails;

  /**
   * <p>Details about an IAM access key related to a finding.</p>
   */
  AwsIamAccessKey?: AwsIamAccessKeyDetails;

  /**
   * <p>Details about an IAM user.</p>
   */
  AwsIamUser?: AwsIamUserDetails;

  /**
   * <p>Details about an IAM permissions policy.</p>
   */
  AwsIamPolicy?: AwsIamPolicyDetails;

  /**
   * <p>Provides information about a version 2 stage for Amazon API Gateway.</p>
   */
  AwsApiGatewayV2Stage?: AwsApiGatewayV2StageDetails;

  /**
   * <p>Provides information about a version 2 API in Amazon API Gateway.</p>
   */
  AwsApiGatewayV2Api?: AwsApiGatewayV2ApiDetails;

  /**
   * <p>Details about a DynamoDB table.</p>
   */
  AwsDynamoDbTable?: AwsDynamoDbTableDetails;

  /**
   * <p>Provides information about a version 1 Amazon API Gateway stage.</p>
   */
  AwsApiGatewayStage?: AwsApiGatewayStageDetails;

  /**
   * <p>Provides information about a REST API in version 1 of Amazon API Gateway.</p>
   */
  AwsApiGatewayRestApi?: AwsApiGatewayRestApiDetails;

  /**
   * <p>Provides details about a CloudTrail trail.</p>
   */
  AwsCloudTrailTrail?: AwsCloudTrailTrailDetails;

  /**
   * <p>Provides information about the state of a patch on an instance based on the patch baseline that was used to patch the instance.</p>
   */
  AwsSsmPatchCompliance?: AwsSsmPatchComplianceDetails;

  /**
   * <p>Provides details about an Certificate Manager certificate.</p>
   */
  AwsCertificateManagerCertificate?: AwsCertificateManagerCertificateDetails;

  /**
   * <p>Contains details about an Amazon Redshift cluster.</p>
   */
  AwsRedshiftCluster?: AwsRedshiftClusterDetails;

  /**
   * <p>Contains details about a Classic Load Balancer.</p>
   */
  AwsElbLoadBalancer?: AwsElbLoadBalancerDetails;

  /**
   * <p>Contains details about an IAM group.</p>
   */
  AwsIamGroup?: AwsIamGroupDetails;

  /**
   * <p>Details about an IAM role.</p>
   */
  AwsIamRole?: AwsIamRoleDetails;

  /**
   * <p>Details about an KMS key.</p>
   */
  AwsKmsKey?: AwsKmsKeyDetails;

  /**
   * <p>Details about a Lambda function.</p>
   */
  AwsLambdaFunction?: AwsLambdaFunctionDetails;

  /**
   * <p>Details for a Lambda layer version.</p>
   */
  AwsLambdaLayerVersion?: AwsLambdaLayerVersionDetails;

  /**
   * <p>Details about an Amazon RDS database instance.</p>
   */
  AwsRdsDbInstance?: AwsRdsDbInstanceDetails;

  /**
   * <p>Details about an SNS topic.</p>
   */
  AwsSnsTopic?: AwsSnsTopicDetails;

  /**
   * <p>Details about an SQS queue.</p>
   */
  AwsSqsQueue?: AwsSqsQueueDetails;

  /**
   * <p>Details for an WAF web ACL.</p>
   */
  AwsWafWebAcl?: AwsWafWebAclDetails;

  /**
   * <p>Details about an Amazon RDS database snapshot.</p>
   */
  AwsRdsDbSnapshot?: AwsRdsDbSnapshotDetails;

  /**
   * <p>Details about an Amazon RDS database cluster snapshot.</p>
   */
  AwsRdsDbClusterSnapshot?: AwsRdsDbClusterSnapshotDetails;

  /**
   * <p>Details about an Amazon RDS database cluster.</p>
   */
  AwsRdsDbCluster?: AwsRdsDbClusterDetails;

  /**
   * <p>Details about an Amazon ECS cluster.</p>
   */
  AwsEcsCluster?: AwsEcsClusterDetails;

  /**
   * <p>Provides information about a Docker container that's part of a task.
   *       </p>
   */
  AwsEcsContainer?: AwsEcsContainerDetails;

  /**
   * <p>Details about a task definition. A task definition describes the container and volume definitions of an Amazon Elastic Container Service task.</p>
   */
  AwsEcsTaskDefinition?: AwsEcsTaskDefinitionDetails;

  /**
   * <p>Details about a container resource related to a finding.</p>
   */
  Container?: ContainerDetails;

  /**
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
   * <p>Details about an RDS event notification subscription.</p>
   */
  AwsRdsEventSubscription?: AwsRdsEventSubscriptionDetails;

  /**
   * <p>Details about a service within an ECS cluster.</p>
   */
  AwsEcsService?: AwsEcsServiceDetails;

  /**
   * <p>Provides details about a launch configuration.</p>
   */
  AwsAutoScalingLaunchConfiguration?: AwsAutoScalingLaunchConfigurationDetails;

  /**
   * <p>Details about an Amazon EC2 VPN connection.</p>
   */
  AwsEc2VpnConnection?: AwsEc2VpnConnectionDetails;

  /**
   * <p>Information about an Amazon ECR image.</p>
   */
  AwsEcrContainerImage?: AwsEcrContainerImageDetails;

  /**
   * <p>Details about an Amazon OpenSearch Service domain.</p>
   */
  AwsOpenSearchServiceDomain?: AwsOpenSearchServiceDomainDetails;

  /**
   * <p>Details about the service configuration for a VPC endpoint service.</p>
   */
  AwsEc2VpcEndpointService?: AwsEc2VpcEndpointServiceDetails;

  /**
   * <p>Information about the encryption configuration for X-Ray.</p>
   */
  AwsXrayEncryptionConfig?: AwsXrayEncryptionConfigDetails;

  /**
   * <p>Details about a rate-based rule for global resources.</p>
   */
  AwsWafRateBasedRule?: AwsWafRateBasedRuleDetails;

  /**
   * <p>Details about a rate-based rule for Regional resources.</p>
   */
  AwsWafRegionalRateBasedRule?: AwsWafRegionalRateBasedRuleDetails;

  /**
   * <p>Information about an Amazon Elastic Container Registry repository.</p>
   */
  AwsEcrRepository?: AwsEcrRepositoryDetails;

  /**
   * <p>Details about an Amazon EKS cluster.</p>
   */
  AwsEksCluster?: AwsEksClusterDetails;

  /**
   * <p>Details about an Network Firewall firewall policy.</p>
   */
  AwsNetworkFirewallFirewallPolicy?: AwsNetworkFirewallFirewallPolicyDetails;

  /**
   * <p>Details about an Network Firewall firewall.</p>
   */
  AwsNetworkFirewallFirewall?: AwsNetworkFirewallFirewallDetails;

  /**
   * <p>Details about an Network Firewall rule group.</p>
   */
  AwsNetworkFirewallRuleGroup?: AwsNetworkFirewallRuleGroupDetails;

  /**
   * <p>Details about an Amazon RDS DB security group.</p>
   */
  AwsRdsDbSecurityGroup?: AwsRdsDbSecurityGroupDetails;

  /**
   * <p>Details about an Amazon Kinesis data stream.</p>
   */
  AwsKinesisStream?: AwsKinesisStreamDetails;

  /**
   * <p>Details about an Amazon EC2 transit gateway that interconnects your virtual private clouds (VPC) and on-premises networks.</p>
   */
  AwsEc2TransitGateway?: AwsEc2TransitGatewayDetails;

  /**
   * <p>Details about an Amazon EFS access point. An access point is an application-specific view into an EFS file system that
   * applies an operating system user and group, and a file system path, to any file system request made through the access point.
   *       </p>
   */
  AwsEfsAccessPoint?: AwsEfsAccessPointDetails;

  /**
   * <p>Details about an CloudFormation stack. A stack is a collection of Amazon Web Services resources that you can manage as a single unit.</p>
   */
  AwsCloudFormationStack?: AwsCloudFormationStackDetails;

  /**
   * <p>Details about an Amazon CloudWatch alarm. An alarm allows you to monitor and receive alerts about your Amazon Web Services resources and applications across multiple Regions.</p>
   */
  AwsCloudWatchAlarm?: AwsCloudWatchAlarmDetails;

  /**
   * <p>Details about an Amazon EC2 VPC peering connection. A VPC peering connection is
   *          a networking connection between two VPCs that enables you to route traffic between them
   *          privately.
   *       </p>
   */
  AwsEc2VpcPeeringConnection?: AwsEc2VpcPeeringConnectionDetails;

  /**
   * <p>Details about an WAF rule group for Regional resources.
   *       </p>
   */
  AwsWafRegionalRuleGroup?: AwsWafRegionalRuleGroupDetails;

  /**
   * <p>Details about an WAF rule for Regional resources.
   *       </p>
   */
  AwsWafRegionalRule?: AwsWafRegionalRuleDetails;

  /**
   * <p>Details about an WAF web access control list (web ACL) for Regional resources. </p>
   */
  AwsWafRegionalWebAcl?: AwsWafRegionalWebAclDetails;

  /**
   * <p>Details about an WAF rule for global resources.
   *       </p>
   */
  AwsWafRule?: AwsWafRuleDetails;

  /**
   * <p>Details about an WAF rule group for global resources.
   *       </p>
   */
  AwsWafRuleGroup?: AwsWafRuleGroupDetails;

  /**
   * <p>Details about a task in a cluster. </p>
   */
  AwsEcsTask?: AwsEcsTaskDetails;

  /**
   * <p>Provides details about an Backup backup vault.
   *       </p>
   */
  AwsBackupBackupVault?: AwsBackupBackupVaultDetails;

  /**
   * <p>Provides details about an Backup backup plan.
   *       </p>
   */
  AwsBackupBackupPlan?: AwsBackupBackupPlanDetails;

  /**
   * <p>Provides details about an Backup backup, or recovery point.
   *       </p>
   */
  AwsBackupRecoveryPoint?: AwsBackupRecoveryPointDetails;

  /**
   * <p>
   *          Specifies the properties for creating an Amazon Elastic Compute Cloud (Amazon EC2) launch template.
   *       </p>
   */
  AwsEc2LaunchTemplate?: AwsEc2LaunchTemplateDetails;

  /**
   * <p>
   *          Provides details about an Amazon SageMaker notebook instance.
   *       </p>
   */
  AwsSageMakerNotebookInstance?: AwsSageMakerNotebookInstanceDetails;

  /**
   * <p>
   *          Details about an WAFv2 web Access Control List (ACL).
   *       </p>
   */
  AwsWafv2WebAcl?: AwsWafv2WebAclDetails;

  /**
   * <p>
   *          Details about an WAFv2 rule group.
   *       </p>
   */
  AwsWafv2RuleGroup?: AwsWafv2RuleGroupDetails;
}

export enum Partition {
  AWS = "aws",
  AWS_CN = "aws-cn",
  AWS_US_GOV = "aws-us-gov",
}

/**
 * <p>A resource related to a finding.</p>
 */
export interface Resource {
  /**
   * <p>The type of the resource that details are provided for. If possible, set
   *             <code>Type</code> to one of the supported resource types. For example, if the resource
   *          is an EC2 instance, then set <code>Type</code> to <code>AwsEc2Instance</code>.</p>
   *          <p>If the resource does not match any of the provided types, then set <code>Type</code> to
   *             <code>Other</code>. </p>
   */
  Type: string | undefined;

  /**
   * <p>The canonical identifier for the given resource type.</p>
   */
  Id: string | undefined;

  /**
   * <p>The canonical Amazon Web Services partition name that the Region is assigned to.</p>
   */
  Partition?: Partition | string;

  /**
   * <p>The canonical Amazon Web Services external Region name where this resource is located.</p>
   */
  Region?: string;

  /**
   * <p>Identifies the role of the resource in the finding. A resource is either the actor or target of the finding activity,</p>
   */
  ResourceRole?: string;

  /**
   * <p>A list of Amazon Web Services tags associated with a resource at the time the finding was
   *          processed.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>Contains information about sensitive data that was detected on the resource.</p>
   */
  DataClassification?: DataClassificationDetails;

  /**
   * <p>Additional details about the resource related to a finding.</p>
   */
  Details?: ResourceDetails;
}

/**
 * <p>The severity of the finding.</p>
 *          <p>The finding provider can provide the initial severity. The finding provider can only
 *          update the severity if it has not been updated using
 *          <code>BatchUpdateFindings</code>.</p>
 *          <p>The finding must have either <code>Label</code> or <code>Normalized</code> populated. If
 *          only one of these attributes is populated, then Security Hub automatically populates the other
 *          one. If neither attribute is populated, then the finding is invalid. <code>Label</code> is
 *          the preferred attribute.</p>
 */
export interface Severity {
  /**
   * <p>Deprecated. This attribute is being deprecated. Instead of providing
   *             <code>Product</code>, provide <code>Original</code>.</p>
   *          <p>The native severity as defined by the Amazon Web Services service or integrated partner product that
   *          generated the finding.</p>
   */
  Product?: number;

  /**
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
  Label?: SeverityLabel | string;

  /**
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
   * <p>The native severity from the finding product that generated the finding.</p>
   */
  Original?: string;
}

export enum ThreatIntelIndicatorCategory {
  BACKDOOR = "BACKDOOR",
  CARD_STEALER = "CARD_STEALER",
  COMMAND_AND_CONTROL = "COMMAND_AND_CONTROL",
  DROP_SITE = "DROP_SITE",
  EXPLOIT_SITE = "EXPLOIT_SITE",
  KEYLOGGER = "KEYLOGGER",
}

export enum ThreatIntelIndicatorType {
  DOMAIN = "DOMAIN",
  EMAIL_ADDRESS = "EMAIL_ADDRESS",
  HASH_MD5 = "HASH_MD5",
  HASH_SHA1 = "HASH_SHA1",
  HASH_SHA256 = "HASH_SHA256",
  HASH_SHA512 = "HASH_SHA512",
  IPV4_ADDRESS = "IPV4_ADDRESS",
  IPV6_ADDRESS = "IPV6_ADDRESS",
  MUTEX = "MUTEX",
  PROCESS = "PROCESS",
  URL = "URL",
}

/**
 * <p>Details about the threat intelligence related to a finding.</p>
 */
export interface ThreatIntelIndicator {
  /**
   * <p>The type of threat intelligence indicator.</p>
   */
  Type?: ThreatIntelIndicatorType | string;

  /**
   * <p>The value of a threat intelligence indicator.</p>
   */
  Value?: string;

  /**
   * <p>The category of a threat intelligence indicator.</p>
   */
  Category?: ThreatIntelIndicatorCategory | string;

  /**
   * <p>Indicates when the most recent instance of a threat intelligence indicator was
   *          observed.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastObservedAt?: string;

  /**
   * <p>The source of the threat intelligence indicator.</p>
   */
  Source?: string;

  /**
   * <p>The URL to the page or site where you can get more information about the threat
   *          intelligence indicator.</p>
   */
  SourceUrl?: string;
}

/**
 * <p>Provides information about the file paths that were affected by the threat.
 * 		</p>
 */
export interface FilePaths {
  /**
   * <p>Path to the infected or suspicious file on the resource it was detected on.
   * 		</p>
   */
  FilePath?: string;

  /**
   * <p>The name of the infected or suspicious file corresponding to the hash.
   * 		</p>
   */
  FileName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource on which the threat was detected.
   * 		</p>
   */
  ResourceId?: string;

  /**
   * <p>The hash value for the infected or suspicious file.
   * 		</p>
   */
  Hash?: string;
}

/**
 * <p>Provides information about the threat detected in a security finding and the file paths that were affected by the threat.
 * 		</p>
 */
export interface Threat {
  /**
   * <p>The name of the threat.
   * 		</p>
   */
  Name?: string;

  /**
   * <p>The severity of the threat.
   * 		</p>
   */
  Severity?: string;

  /**
   * <p>This total number of items in which the threat has been detected.
   * 		</p>
   */
  ItemCount?: number;

  /**
   * <p>Provides information about the file paths that were affected by the threat.
   * 		</p>
   */
  FilePaths?: FilePaths[];
}

export enum VerificationState {
  BENIGN_POSITIVE = "BENIGN_POSITIVE",
  FALSE_POSITIVE = "FALSE_POSITIVE",
  TRUE_POSITIVE = "TRUE_POSITIVE",
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>CVSS scores from the advisory related to the vulnerability.</p>
 */
export interface Cvss {
  /**
   * <p>The version of CVSS for the CVSS score.</p>
   */
  Version?: string;

  /**
   * <p>The base CVSS score.</p>
   */
  BaseScore?: number;

  /**
   * <p>The base scoring vector for the CVSS score.</p>
   */
  BaseVector?: string;

  /**
   * <p>The origin of the original CVSS score and vector.</p>
   */
  Source?: string;

  /**
   * <p>Adjustments to the CVSS metrics.</p>
   */
  Adjustments?: Adjustment[];
}

export enum VulnerabilityFixAvailable {
  NO = "NO",
  PARTIAL = "PARTIAL",
  YES = "YES",
}

/**
 * <p>A vendor that generates a vulnerability report.</p>
 */
export interface VulnerabilityVendor {
  /**
   * <p>The name of the vendor.</p>
   */
  Name: string | undefined;

  /**
   * <p>The URL of the vulnerability advisory.</p>
   */
  Url?: string;

  /**
   * <p>The severity that the vendor assigned to the vulnerability.</p>
   */
  VendorSeverity?: string;

  /**
   * <p>Indicates when the vulnerability advisory was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  VendorCreatedAt?: string;

  /**
   * <p>Indicates when the vulnerability advisory was last updated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  VendorUpdatedAt?: string;
}

/**
 * <p>Information about a software package.</p>
 */
export interface SoftwarePackage {
  /**
   * <p>The name of the software package.</p>
   */
  Name?: string;

  /**
   * <p>The version of the software package.</p>
   */
  Version?: string;

  /**
   * <p>The epoch of the software package.</p>
   */
  Epoch?: string;

  /**
   * <p>The release of the software package.</p>
   */
  Release?: string;

  /**
   * <p>The architecture used for the software package.</p>
   */
  Architecture?: string;

  /**
   * <p>The source of the package.</p>
   */
  PackageManager?: string;

  /**
   * <p>The file system path to the package manager inventory file.</p>
   */
  FilePath?: string;

  /**
   * <p>The version of the software package in which the vulnerability has been resolved.
   *       </p>
   */
  FixedInVersion?: string;

  /**
   * <p>Describes the actions a customer can take to resolve the vulnerability in the software package.
   *       </p>
   */
  Remediation?: string;

  /**
   * <p>The source layer hash of the vulnerable package.
   *       </p>
   */
  SourceLayerHash?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source layer.
   *       </p>
   */
  SourceLayerArn?: string;
}

/**
 * <p>A vulnerability associated with a finding.</p>
 */
export interface Vulnerability {
  /**
   * <p>The identifier of the vulnerability.</p>
   */
  Id: string | undefined;

  /**
   * <p>List of software packages that have the vulnerability.</p>
   */
  VulnerablePackages?: SoftwarePackage[];

  /**
   * <p>CVSS scores from the advisory related to the vulnerability.</p>
   */
  Cvss?: Cvss[];

  /**
   * <p>List of vulnerabilities that are related to this vulnerability.</p>
   */
  RelatedVulnerabilities?: string[];

  /**
   * <p>Information about the vendor that generates the vulnerability report.</p>
   */
  Vendor?: VulnerabilityVendor;

  /**
   * <p>A list of URLs that provide additional information about the vulnerability.</p>
   */
  ReferenceUrls?: string[];

  /**
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
  FixAvailable?: VulnerabilityFixAvailable | string;
}

export enum WorkflowStatus {
  NEW = "NEW",
  NOTIFIED = "NOTIFIED",
  RESOLVED = "RESOLVED",
  SUPPRESSED = "SUPPRESSED",
}

/**
 * <p>Provides information about the status of the investigation into a finding.</p>
 */
export interface Workflow {
  /**
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
  Status?: WorkflowStatus | string;
}

export enum WorkflowState {
  ASSIGNED = "ASSIGNED",
  DEFERRED = "DEFERRED",
  IN_PROGRESS = "IN_PROGRESS",
  NEW = "NEW",
  RESOLVED = "RESOLVED",
}

/**
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
   * <p>The schema version that a finding is formatted for.</p>
   */
  SchemaVersion: string | undefined;

  /**
   * <p>The security findings provider-specific identifier for a finding.</p>
   */
  Id: string | undefined;

  /**
   * <p>The ARN generated by Security Hub that uniquely identifies a product that generates findings.
   *          This can be the ARN for a third-party product that is integrated with Security Hub, or the ARN for
   *          a custom integration.</p>
   */
  ProductArn: string | undefined;

  /**
   * <p>The name of the product that generated the finding.</p>
   *          <p>Security Hub populates this attribute automatically for each finding. You cannot update this attribute with <code>BatchImportFindings</code> or <code>BatchUpdateFindings</code>. The exception to this is a custom integration.</p>
   *          <p>When you use the Security Hub console or API to filter findings by product name, you use this attribute.</p>
   */
  ProductName?: string;

  /**
   * <p>The name of the company for the product that generated the finding.</p>
   *          <p>Security Hub populates this attribute automatically for each finding. You cannot update this attribute with <code>BatchImportFindings</code> or <code>BatchUpdateFindings</code>. The exception to this is a custom integration.</p>
   *          <p>When you use the Security Hub console or API to filter findings by company name, you use this attribute.</p>
   */
  CompanyName?: string;

  /**
   * <p>The Region from which the finding was generated.</p>
   *          <p>Security Hub populates this attribute automatically for each finding. You cannot update it using <code>BatchImportFindings</code> or <code>BatchUpdateFindings</code>.</p>
   */
  Region?: string;

  /**
   * <p>The identifier for the solution-specific component (a discrete unit of logic) that
   *          generated a finding. In various security-findings providers' solutions, this generator can
   *          be called a rule, a check, a detector, a plugin, etc. </p>
   */
  GeneratorId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that a finding is generated in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>One or more finding types in the format of <code>namespace/category/classifier</code>
   *          that classify a finding.</p>
   *          <p>Valid namespace values are: Software and Configuration Checks | TTPs | Effects | Unusual
   *          Behaviors | Sensitive Data Identifications</p>
   */
  Types?: string[];

  /**
   * <p>Indicates when the security-findings provider first observed the potential security
   *          issue that a finding captured.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  FirstObservedAt?: string;

  /**
   * <p>Indicates when the security-findings provider most recently observed the potential
   *          security issue that a finding captured.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastObservedAt?: string;

  /**
   * <p>Indicates when the security-findings provider created the potential security issue that
   *          a finding captured.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedAt: string | undefined;

  /**
   * <p>Indicates when the security-findings provider last updated the finding record.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  UpdatedAt: string | undefined;

  /**
   * <p>A finding's severity.</p>
   */
  Severity?: Severity;

  /**
   * <p>A finding's confidence. Confidence is defined as the likelihood that a finding
   *          accurately identifies the behavior or issue that it was intended to identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   */
  Confidence?: number;

  /**
   * <p>The level of importance assigned to the resources associated with the finding.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources.</p>
   */
  Criticality?: number;

  /**
   * <p>A finding's title.</p>
   *          <note>
   *             <p>In this release, <code>Title</code> is a required property.</p>
   *          </note>
   */
  Title: string | undefined;

  /**
   * <p>A finding's description.</p>
   *          <note>
   *             <p>In this release, <code>Description</code> is a required property.</p>
   *          </note>
   */
  Description: string | undefined;

  /**
   * <p>A data type that describes the remediation options for a finding.</p>
   */
  Remediation?: Remediation;

  /**
   * <p>A URL that links to a page about the current finding in the security-findings provider's
   *          solution.</p>
   */
  SourceUrl?: string;

  /**
   * <p>A data type where security-findings providers can include additional solution-specific
   *          details that aren't part of the defined <code>AwsSecurityFinding</code> format.</p>
   *          <p>Can contain up to 50 key-value pairs. For each key-value pair, the key can contain up to 128 characters, and the value can contain up to 2048 characters.</p>
   */
  ProductFields?: Record<string, string>;

  /**
   * <p>A list of name/value string pairs associated with the finding. These are custom,
   *          user-defined fields added to a finding. </p>
   */
  UserDefinedFields?: Record<string, string>;

  /**
   * <p>A list of malware related to a finding.</p>
   */
  Malware?: Malware[];

  /**
   * <p>The details of network-related information about a finding.</p>
   */
  Network?: Network;

  /**
   * <p>Provides information about a network path that is relevant to a finding. Each entry
   *          under <code>NetworkPath</code> represents a component of that path.</p>
   */
  NetworkPath?: NetworkPathComponent[];

  /**
   * <p>The details of process-related information about a finding.</p>
   */
  Process?: ProcessDetails;

  /**
   * <p>Details about the threat detected in a security finding and the file paths that were affected by the threat.
   *       </p>
   */
  Threats?: Threat[];

  /**
   * <p>Threat intelligence details related to a finding.</p>
   */
  ThreatIntelIndicators?: ThreatIntelIndicator[];

  /**
   * <p>A set of resource data types that describe the resources that the finding refers
   *          to.</p>
   */
  Resources: Resource[] | undefined;

  /**
   * <p>This data type is exclusive to findings that are generated as the result of a check run
   *          against a specific rule in a supported security standard, such as CIS Amazon Web Services Foundations.
   *          Contains security standard-related finding details.</p>
   */
  Compliance?: Compliance;

  /**
   * <p>Indicates the veracity of a finding. </p>
   */
  VerificationState?: VerificationState | string;

  /**
   * @deprecated
   *
   * <p>The workflow state of a finding. </p>
   */
  WorkflowState?: WorkflowState | string;

  /**
   * <p>Provides information about the status of the investigation into a finding.</p>
   */
  Workflow?: Workflow;

  /**
   * <p>The record state of a finding.</p>
   */
  RecordState?: RecordState | string;

  /**
   * <p>A list of related findings.</p>
   */
  RelatedFindings?: RelatedFinding[];

  /**
   * <p>A user-defined note added to a finding.</p>
   */
  Note?: Note;

  /**
   * <p>Provides a list of vulnerabilities associated with the findings.</p>
   */
  Vulnerabilities?: Vulnerability[];

  /**
   * <p>Provides an overview of the patch compliance status for an instance against a selected
   *          compliance standard.</p>
   */
  PatchSummary?: PatchSummary;

  /**
   * <p>Provides details about an action that affects or that was taken on a resource.</p>
   */
  Action?: Action;

  /**
   * <p>In a <code>BatchImportFindings</code> request, finding providers use <code>FindingProviderFields</code> to provide and update their own values for confidence, criticality, related findings, severity, and types.</p>
   */
  FindingProviderFields?: FindingProviderFields;

  /**
   * <p>Indicates whether the finding is a sample finding.</p>
   */
  Sample?: boolean;
}

export enum StringFilterComparison {
  EQUALS = "EQUALS",
  NOT_EQUALS = "NOT_EQUALS",
  PREFIX = "PREFIX",
  PREFIX_NOT_EQUALS = "PREFIX_NOT_EQUALS",
}

/**
 * <p>A string filter for querying findings.</p>
 */
export interface StringFilter {
  /**
   * <p>The string filter value. Filter values are case sensitive. For example, the product name
   *          for control-based findings is <code>Security Hub</code>. If you provide <code>security hub</code>
   *          as the filter text, then there is no match.</p>
   */
  Value?: string;

  /**
   * <p>The condition to apply to a string value when querying for findings. To search for
   *          values that contain the filter criteria value, use one of the following comparison
   *          operators:</p>
   *          <ul>
   *             <li>
   *                <p>To search for values that exactly match the filter value, use
   *                <code>EQUALS</code>.</p>
   *                <p>For example, the filter <code>ResourceType EQUALS AwsEc2SecurityGroup</code> only
   *                matches findings that have a resource type of
   *                <code>AwsEc2SecurityGroup</code>.</p>
   *             </li>
   *             <li>
   *                <p>To search for values that start with the filter value, use
   *                <code>PREFIX</code>.</p>
   *                <p>For example, the filter <code>ResourceType PREFIX AwsIam</code> matches findings
   *                that have a resource type that starts with <code>AwsIam</code>. Findings with a
   *                resource type of <code>AwsIamPolicy</code>, <code>AwsIamRole</code>, or
   *                   <code>AwsIamUser</code> would all match.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>EQUALS</code> and <code>PREFIX</code> filters on the same field are joined by
   *             <code>OR</code>. A finding matches if it matches any one of those filters.</p>
   *          <p>To search for values that do not contain the filter criteria value, use one of the
   *          following comparison operators:</p>
   *          <ul>
   *             <li>
   *                <p>To search for values that do not exactly match the filter value, use
   *                   <code>NOT_EQUALS</code>.</p>
   *                <p>For example, the filter <code>ResourceType NOT_EQUALS AwsIamPolicy</code> matches
   *                findings that have a resource type other than <code>AwsIamPolicy</code>.</p>
   *             </li>
   *             <li>
   *                <p>To search for values that do not start with the filter value, use
   *                   <code>PREFIX_NOT_EQUALS</code>.</p>
   *                <p>For example, the filter <code>ResourceType PREFIX_NOT_EQUALS AwsIam</code> matches
   *                findings that have a resource type that does not start with <code>AwsIam</code>.
   *                Findings with a resource type of <code>AwsIamPolicy</code>, <code>AwsIamRole</code>,
   *                or <code>AwsIamUser</code> would all be excluded from the results.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>NOT_EQUALS</code> and <code>PREFIX_NOT_EQUALS</code> filters on the same field are
   *          joined by <code>AND</code>. A finding matches only if it matches all of those
   *          filters.</p>
   *          <p>For filters on the same field, you cannot provide both an <code>EQUALS</code> filter and
   *          a <code>NOT_EQUALS</code> or <code>PREFIX_NOT_EQUALS</code> filter. Combining filters in
   *          this way always returns an error, even if the provided filter values would return valid
   *          results.</p>
   *          <p>You can combine <code>PREFIX</code> filters with <code>NOT_EQUALS</code> or
   *          <code>PREFIX_NOT_EQUALS</code> filters for the same field. Security Hub first processes the
   *             <code>PREFIX</code> filters, then the <code>NOT_EQUALS</code> or
   *             <code>PREFIX_NOT_EQUALS</code> filters.</p>
   *          <p> For example, for the following filter, Security Hub first identifies findings that have
   *          resource types that start with either <code>AwsIAM</code> or <code>AwsEc2</code>. It then
   *          excludes findings that have a resource type of <code>AwsIamPolicy</code> and findings that
   *          have a resource type of <code>AwsEc2NetworkInterface</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ResourceType PREFIX AwsIam</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType PREFIX AwsEc2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType NOT_EQUALS AwsIamPolicy</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType NOT_EQUALS AwsEc2NetworkInterface</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Comparison?: StringFilterComparison | string;
}

/**
 * <p>A number filter for querying findings.</p>
 */
export interface NumberFilter {
  /**
   * <p>The greater-than-equal condition to be applied to a single field when querying for
   *          findings. </p>
   */
  Gte?: number;

  /**
   * <p>The less-than-equal condition to be applied to a single field when querying for
   *          findings. </p>
   */
  Lte?: number;

  /**
   * <p>The equal-to condition to be applied to a single field when querying for
   *          findings.</p>
   */
  Eq?: number;
}

export enum DateRangeUnit {
  DAYS = "DAYS",
}

/**
 * <p>A date range for the date filter.</p>
 */
export interface DateRange {
  /**
   * <p>A date range value for the date filter.</p>
   */
  Value?: number;

  /**
   * <p>A date range unit for the date filter.</p>
   */
  Unit?: DateRangeUnit | string;
}

/**
 * <p>A date filter for querying findings.</p>
 */
export interface DateFilter {
  /**
   * <p>A start date for the date filter.</p>
   */
  Start?: string;

  /**
   * <p>An end date for the date filter.</p>
   */
  End?: string;

  /**
   * <p>A date range for the date filter.</p>
   */
  DateRange?: DateRange;
}

/**
 * <p>A keyword filter for querying findings.</p>
 */
export interface KeywordFilter {
  /**
   * <p>A value for the keyword.</p>
   */
  Value?: string;
}

/**
 * <p>The IP filter for querying findings.</p>
 */
export interface IpFilter {
  /**
   * <p>A finding's CIDR value.</p>
   */
  Cidr?: string;
}

export enum MapFilterComparison {
  EQUALS = "EQUALS",
  NOT_EQUALS = "NOT_EQUALS",
}

/**
 * <p>A map filter for querying findings. Each map filter provides the field to check, the
 *          value to look for, and the comparison operator.</p>
 */
export interface MapFilter {
  /**
   * <p>The key of the map filter. For example, for <code>ResourceTags</code>, <code>Key</code>
   *          identifies the name of the tag. For <code>UserDefinedFields</code>, <code>Key</code> is the
   *          name of the field.</p>
   */
  Key?: string;

  /**
   * <p>The value for the key in the map filter. Filter values are case sensitive. For example,
   *          one of the values for a tag called <code>Department</code> might be <code>Security</code>.
   *          If you provide <code>security</code> as the filter value, then there is no match.</p>
   */
  Value?: string;

  /**
   * <p>The condition to apply to the key value when querying for findings with a map
   *          filter.</p>
   *          <p>To search for values that exactly match the filter value, use <code>EQUALS</code>. For
   *          example, for the <code>ResourceTags</code> field, the filter <code>Department EQUALS
   *             Security</code> matches findings that have the value <code>Security</code> for the tag
   *             <code>Department</code>.</p>
   *          <p>To search for values other than the filter value, use <code>NOT_EQUALS</code>. For
   *          example, for the <code>ResourceTags</code> field, the filter <code>Department NOT_EQUALS
   *             Finance</code> matches findings that do not have the value <code>Finance</code> for the
   *          tag <code>Department</code>.</p>
   *          <p>
   *             <code>EQUALS</code> filters on the same field are joined by <code>OR</code>. A finding
   *          matches if it matches any one of those filters.</p>
   *          <p>
   *             <code>NOT_EQUALS</code> filters on the same field are joined by <code>AND</code>. A
   *          finding matches only if it matches all of those filters.</p>
   *          <p>You cannot have both an <code>EQUALS</code> filter and a <code>NOT_EQUALS</code> filter
   *          on the same field.</p>
   */
  Comparison?: MapFilterComparison | string;
}

/**
 * <p>Boolean filter for querying findings.</p>
 */
export interface BooleanFilter {
  /**
   * <p>The value of the boolean.</p>
   */
  Value?: boolean;
}

/**
 * <p>A collection of attributes that are applied to all active Security Hub-aggregated findings and
 *          that result in a subset of findings that are included in this insight.</p>
 *          <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to
 *          20 filter values.</p>
 */
export interface AwsSecurityFindingFilters {
  /**
   * <p>The ARN generated by Security Hub that uniquely identifies a third-party company
   *          (security findings provider) after this provider's product (solution that generates
   *          findings) is registered with Security Hub.</p>
   */
  ProductArn?: StringFilter[];

  /**
   * <p>The Amazon Web Services account ID that a finding is generated in.</p>
   */
  AwsAccountId?: StringFilter[];

  /**
   * <p>The security findings provider-specific identifier for a finding.</p>
   */
  Id?: StringFilter[];

  /**
   * <p>The identifier for the solution-specific component (a discrete unit of logic) that
   *          generated a finding. In various security-findings providers' solutions, this generator can
   *          be called a rule, a check, a detector, a plugin, etc.</p>
   */
  GeneratorId?: StringFilter[];

  /**
   * <p>The Region from which the finding was generated.</p>
   */
  Region?: StringFilter[];

  /**
   * <p>A finding type in the format of <code>namespace/category/classifier</code> that
   *          classifies a finding.</p>
   */
  Type?: StringFilter[];

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider first
   *          observed the potential security issue that a finding captured.</p>
   */
  FirstObservedAt?: DateFilter[];

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider most
   *          recently observed the potential security issue that a finding captured.</p>
   */
  LastObservedAt?: DateFilter[];

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider
   *          captured the potential security issue that a finding captured.</p>
   */
  CreatedAt?: DateFilter[];

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider last
   *          updated the finding record. </p>
   */
  UpdatedAt?: DateFilter[];

  /**
   * @deprecated
   *
   * <p>The native severity as defined by the security-findings provider's solution that
   *          generated the finding.</p>
   */
  SeverityProduct?: NumberFilter[];

  /**
   * @deprecated
   *
   * <p>The normalized severity of a finding.</p>
   */
  SeverityNormalized?: NumberFilter[];

  /**
   * <p>The label of a finding's severity.</p>
   */
  SeverityLabel?: StringFilter[];

  /**
   * <p>A finding's confidence. Confidence is defined as the likelihood that a finding
   *          accurately identifies the behavior or issue that it was intended to identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   */
  Confidence?: NumberFilter[];

  /**
   * <p>The level of importance assigned to the resources associated with the finding.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources.</p>
   */
  Criticality?: NumberFilter[];

  /**
   * <p>A finding's title.</p>
   */
  Title?: StringFilter[];

  /**
   * <p>A finding's description.</p>
   */
  Description?: StringFilter[];

  /**
   * <p>The recommendation of what to do about the issue described in a finding.</p>
   */
  RecommendationText?: StringFilter[];

  /**
   * <p>A URL that links to a page about the current finding in the security-findings provider's
   *          solution.</p>
   */
  SourceUrl?: StringFilter[];

  /**
   * <p>A data type where security-findings providers can include additional solution-specific
   *          details that aren't part of the defined <code>AwsSecurityFinding</code> format.</p>
   */
  ProductFields?: MapFilter[];

  /**
   * <p>The name of the solution (product) that generates findings.</p>
   */
  ProductName?: StringFilter[];

  /**
   * <p>The name of the findings provider (company) that owns the solution (product) that
   *          generates findings.</p>
   */
  CompanyName?: StringFilter[];

  /**
   * <p>A list of name/value string pairs associated with the finding. These are custom,
   *          user-defined fields added to a finding. </p>
   */
  UserDefinedFields?: MapFilter[];

  /**
   * <p>The name of the malware that was observed.</p>
   */
  MalwareName?: StringFilter[];

  /**
   * <p>The type of the malware that was observed.</p>
   */
  MalwareType?: StringFilter[];

  /**
   * <p>The filesystem path of the malware that was observed.</p>
   */
  MalwarePath?: StringFilter[];

  /**
   * <p>The state of the malware that was observed.</p>
   */
  MalwareState?: StringFilter[];

  /**
   * <p>Indicates the direction of network traffic associated with a finding.</p>
   */
  NetworkDirection?: StringFilter[];

  /**
   * <p>The protocol of network-related information about a finding.</p>
   */
  NetworkProtocol?: StringFilter[];

  /**
   * <p>The source IPv4 address of network-related information about a finding.</p>
   */
  NetworkSourceIpV4?: IpFilter[];

  /**
   * <p>The source IPv6 address of network-related information about a finding.</p>
   */
  NetworkSourceIpV6?: IpFilter[];

  /**
   * <p>The source port of network-related information about a finding.</p>
   */
  NetworkSourcePort?: NumberFilter[];

  /**
   * <p>The source domain of network-related information about a finding.</p>
   */
  NetworkSourceDomain?: StringFilter[];

  /**
   * <p>The source media access control (MAC) address of network-related information about a
   *          finding.</p>
   */
  NetworkSourceMac?: StringFilter[];

  /**
   * <p>The destination IPv4 address of network-related information about a finding.</p>
   */
  NetworkDestinationIpV4?: IpFilter[];

  /**
   * <p>The destination IPv6 address of network-related information about a finding.</p>
   */
  NetworkDestinationIpV6?: IpFilter[];

  /**
   * <p>The destination port of network-related information about a finding.</p>
   */
  NetworkDestinationPort?: NumberFilter[];

  /**
   * <p>The destination domain of network-related information about a finding.</p>
   */
  NetworkDestinationDomain?: StringFilter[];

  /**
   * <p>The name of the process.</p>
   */
  ProcessName?: StringFilter[];

  /**
   * <p>The path to the process executable.</p>
   */
  ProcessPath?: StringFilter[];

  /**
   * <p>The process ID.</p>
   */
  ProcessPid?: NumberFilter[];

  /**
   * <p>The parent process ID.</p>
   */
  ProcessParentPid?: NumberFilter[];

  /**
   * <p>The date/time that the process was launched.</p>
   */
  ProcessLaunchedAt?: DateFilter[];

  /**
   * <p>The date/time that the process was terminated.</p>
   */
  ProcessTerminatedAt?: DateFilter[];

  /**
   * <p>The type of a threat intelligence indicator.</p>
   */
  ThreatIntelIndicatorType?: StringFilter[];

  /**
   * <p>The value of a threat intelligence indicator.</p>
   */
  ThreatIntelIndicatorValue?: StringFilter[];

  /**
   * <p>The category of a threat intelligence indicator.</p>
   */
  ThreatIntelIndicatorCategory?: StringFilter[];

  /**
   * <p>The date/time of the last observation of a threat intelligence indicator.</p>
   */
  ThreatIntelIndicatorLastObservedAt?: DateFilter[];

  /**
   * <p>The source of the threat intelligence.</p>
   */
  ThreatIntelIndicatorSource?: StringFilter[];

  /**
   * <p>The URL for more details from the source of the threat intelligence.</p>
   */
  ThreatIntelIndicatorSourceUrl?: StringFilter[];

  /**
   * <p>Specifies the type of the resource that details are provided for.</p>
   */
  ResourceType?: StringFilter[];

  /**
   * <p>The canonical identifier for the given resource type.</p>
   */
  ResourceId?: StringFilter[];

  /**
   * <p>The canonical Amazon Web Services partition name that the Region is assigned to.</p>
   */
  ResourcePartition?: StringFilter[];

  /**
   * <p>The canonical Amazon Web Services external Region name where this resource is located.</p>
   */
  ResourceRegion?: StringFilter[];

  /**
   * <p>A list of Amazon Web Services tags associated with a resource at the time the finding was
   *          processed.</p>
   */
  ResourceTags?: MapFilter[];

  /**
   * <p>The instance type of the instance.</p>
   */
  ResourceAwsEc2InstanceType?: StringFilter[];

  /**
   * <p>The Amazon Machine Image (AMI) ID of the instance.</p>
   */
  ResourceAwsEc2InstanceImageId?: StringFilter[];

  /**
   * <p>The IPv4 addresses associated with the instance.</p>
   */
  ResourceAwsEc2InstanceIpV4Addresses?: IpFilter[];

  /**
   * <p>The IPv6 addresses associated with the instance.</p>
   */
  ResourceAwsEc2InstanceIpV6Addresses?: IpFilter[];

  /**
   * <p>The key name associated with the instance.</p>
   */
  ResourceAwsEc2InstanceKeyName?: StringFilter[];

  /**
   * <p>The IAM profile ARN of the instance.</p>
   */
  ResourceAwsEc2InstanceIamInstanceProfileArn?: StringFilter[];

  /**
   * <p>The identifier of the VPC that the instance was launched in.</p>
   */
  ResourceAwsEc2InstanceVpcId?: StringFilter[];

  /**
   * <p>The identifier of the subnet that the instance was launched in.</p>
   */
  ResourceAwsEc2InstanceSubnetId?: StringFilter[];

  /**
   * <p>The date and time the instance was launched.</p>
   */
  ResourceAwsEc2InstanceLaunchedAt?: DateFilter[];

  /**
   * <p>The canonical user ID of the owner of the S3 bucket.</p>
   */
  ResourceAwsS3BucketOwnerId?: StringFilter[];

  /**
   * <p>The display name of the owner of the S3 bucket.</p>
   */
  ResourceAwsS3BucketOwnerName?: StringFilter[];

  /**
   * @deprecated
   *
   * <p>The user associated with the IAM access key related to a finding.</p>
   */
  ResourceAwsIamAccessKeyUserName?: StringFilter[];

  /**
   * <p>The name of the principal that is associated with an IAM access key.</p>
   */
  ResourceAwsIamAccessKeyPrincipalName?: StringFilter[];

  /**
   * <p>The status of the IAM access key related to a finding.</p>
   */
  ResourceAwsIamAccessKeyStatus?: StringFilter[];

  /**
   * <p>The creation date/time of the IAM access key related to a finding.</p>
   */
  ResourceAwsIamAccessKeyCreatedAt?: DateFilter[];

  /**
   * <p>The name of an IAM user.</p>
   */
  ResourceAwsIamUserUserName?: StringFilter[];

  /**
   * <p>The name of the container related to a finding.</p>
   */
  ResourceContainerName?: StringFilter[];

  /**
   * <p>The identifier of the image related to a finding.</p>
   */
  ResourceContainerImageId?: StringFilter[];

  /**
   * <p>The name of the image related to a finding.</p>
   */
  ResourceContainerImageName?: StringFilter[];

  /**
   * <p>The date/time that the container was started.</p>
   */
  ResourceContainerLaunchedAt?: DateFilter[];

  /**
   * <p>The details of a resource that doesn't have a specific subfield for the resource type
   *          defined.</p>
   */
  ResourceDetailsOther?: MapFilter[];

  /**
   * <p>Exclusive to findings that are generated as the result of a check run against a specific
   *          rule in a supported standard, such as CIS Amazon Web Services Foundations. Contains security
   *          standard-related finding details.</p>
   */
  ComplianceStatus?: StringFilter[];

  /**
   * <p>The veracity of a finding.</p>
   */
  VerificationState?: StringFilter[];

  /**
   * <p>The workflow state of a finding.</p>
   *          <p>Note that this field is deprecated. To search for a finding based on its workflow
   *          status, use <code>WorkflowStatus</code>.</p>
   */
  WorkflowState?: StringFilter[];

  /**
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
   * <p>The updated record state for the finding.</p>
   */
  RecordState?: StringFilter[];

  /**
   * <p>The ARN of the solution that generated a related finding.</p>
   */
  RelatedFindingsProductArn?: StringFilter[];

  /**
   * <p>The solution-generated identifier for a related finding.</p>
   */
  RelatedFindingsId?: StringFilter[];

  /**
   * <p>The text of a note.</p>
   */
  NoteText?: StringFilter[];

  /**
   * <p>The timestamp of when the note was updated.</p>
   */
  NoteUpdatedAt?: DateFilter[];

  /**
   * <p>The principal that created a note.</p>
   */
  NoteUpdatedBy?: StringFilter[];

  /**
   * @deprecated
   *
   * <p>A keyword for a finding.</p>
   */
  Keyword?: KeywordFilter[];

  /**
   * <p>The finding provider value for the finding confidence. Confidence is defined as the likelihood
   *          that a finding accurately identifies the behavior or issue that it was intended to
   *          identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   */
  FindingProviderFieldsConfidence?: NumberFilter[];

  /**
   * <p>The finding provider value for the level of importance assigned to the resources associated with
   *          the findings.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources. </p>
   */
  FindingProviderFieldsCriticality?: NumberFilter[];

  /**
   * <p>The finding identifier of a related finding that is identified by the finding provider.</p>
   */
  FindingProviderFieldsRelatedFindingsId?: StringFilter[];

  /**
   * <p>The ARN of the solution that generated a related finding that is identified by the finding provider.</p>
   */
  FindingProviderFieldsRelatedFindingsProductArn?: StringFilter[];

  /**
   * <p>The finding provider value for the severity label.</p>
   */
  FindingProviderFieldsSeverityLabel?: StringFilter[];

  /**
   * <p>The finding provider's original value for the severity.</p>
   */
  FindingProviderFieldsSeverityOriginal?: StringFilter[];

  /**
   * <p>One or more finding types that the finding provider assigned to the finding. Uses the format of <code>namespace/category/classifier</code>
   *          that classify a finding.</p>
   *          <p>Valid namespace values are: Software and Configuration Checks | TTPs | Effects | Unusual
   *          Behaviors | Sensitive Data Identifications</p>
   */
  FindingProviderFieldsTypes?: StringFilter[];

  /**
   * <p>Indicates whether or not sample findings are included in the filter results.</p>
   */
  Sample?: BooleanFilter[];
}

/**
 * <p>Identifies a finding to update using <code>BatchUpdateFindings</code>.</p>
 */
export interface AwsSecurityFindingIdentifier {
  /**
   * <p>The identifier of the finding that was specified by the finding provider.</p>
   */
  Id: string | undefined;

  /**
   * <p>The ARN generated by Security Hub that uniquely identifies a product that generates findings.
   *          This can be the ARN for a third-party product that is integrated with Security Hub, or the ARN for
   *          a custom integration.</p>
   */
  ProductArn: string | undefined;
}

export interface BatchDisableStandardsRequest {
  /**
   * <p>The ARNs of the standards subscriptions to disable.</p>
   */
  StandardsSubscriptionArns: string[] | undefined;
}

export enum StandardsStatus {
  DELETING = "DELETING",
  FAILED = "FAILED",
  INCOMPLETE = "INCOMPLETE",
  PENDING = "PENDING",
  READY = "READY",
}

export enum StatusReasonCode {
  INTERNAL_ERROR = "INTERNAL_ERROR",
  NO_AVAILABLE_CONFIGURATION_RECORDER = "NO_AVAILABLE_CONFIGURATION_RECORDER",
}

/**
 * <p>The reason for the current status of a standard subscription.</p>
 */
export interface StandardsStatusReason {
  /**
   * <p>The reason code that represents the reason for the current status of a standard subscription.</p>
   */
  StatusReasonCode: StatusReasonCode | string | undefined;
}

/**
 * <p>A resource that represents your subscription to a supported standard.</p>
 */
export interface StandardsSubscription {
  /**
   * <p>The ARN of a resource that represents your subscription to a supported standard.</p>
   */
  StandardsSubscriptionArn: string | undefined;

  /**
   * <p>The ARN of a standard.</p>
   */
  StandardsArn: string | undefined;

  /**
   * <p>A key-value pair of input for the standard.</p>
   */
  StandardsInput: Record<string, string> | undefined;

  /**
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
  StandardsStatus: StandardsStatus | string | undefined;

  /**
   * <p>The reason for the current status.</p>
   */
  StandardsStatusReason?: StandardsStatusReason;
}

export interface BatchDisableStandardsResponse {
  /**
   * <p>The details of the standards subscriptions that were disabled.</p>
   */
  StandardsSubscriptions?: StandardsSubscription[];
}

/**
 * <p>The standard that you want to enable.</p>
 */
export interface StandardsSubscriptionRequest {
  /**
   * <p>The ARN of the standard that you want to enable. To view the list of available standards
   *          and their ARNs, use the <code>DescribeStandards</code> operation.</p>
   */
  StandardsArn: string | undefined;

  /**
   * <p>A key-value pair of input for the standard.</p>
   */
  StandardsInput?: Record<string, string>;
}

export interface BatchEnableStandardsRequest {
  /**
   * <p>The list of standards checks to enable.</p>
   */
  StandardsSubscriptionRequests: StandardsSubscriptionRequest[] | undefined;
}

export interface BatchEnableStandardsResponse {
  /**
   * <p>The details of the standards subscriptions that were enabled.</p>
   */
  StandardsSubscriptions?: StandardsSubscription[];
}

export interface BatchImportFindingsRequest {
  /**
   * <p>A list of findings to import. To successfully import a finding, it must follow the
   *             <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html">Amazon Web Services Security Finding Format</a>. Maximum of 100 findings per request.</p>
   */
  Findings: AwsSecurityFinding[] | undefined;
}

/**
 * <p>The list of the findings that cannot be imported. For each finding, the list provides
 *          the error.</p>
 */
export interface ImportFindingsError {
  /**
   * <p>The identifier of the finding that could not be updated.</p>
   */
  Id: string | undefined;

  /**
   * <p>The code of the error returned by the <code>BatchImportFindings</code> operation.</p>
   */
  ErrorCode: string | undefined;

  /**
   * <p>The message of the error returned by the <code>BatchImportFindings</code>
   *          operation.</p>
   */
  ErrorMessage: string | undefined;
}

export interface BatchImportFindingsResponse {
  /**
   * <p>The number of findings that failed to import.</p>
   */
  FailedCount: number | undefined;

  /**
   * <p>The number of findings that were successfully imported.</p>
   */
  SuccessCount: number | undefined;

  /**
   * <p>The list of findings that failed to import.</p>
   */
  FailedFindings?: ImportFindingsError[];
}

/**
 * <p>The updated note.</p>
 */
export interface NoteUpdate {
  /**
   * <p>The updated note text.</p>
   */
  Text: string | undefined;

  /**
   * <p>The principal that updated the note.</p>
   */
  UpdatedBy: string | undefined;
}

/**
 * <p>Updates to the severity information for a finding.</p>
 */
export interface SeverityUpdate {
  /**
   * <p>The normalized severity for the finding. This attribute is to be deprecated in favor of
   *             <code>Label</code>.</p>
   *          <p>If you provide <code>Normalized</code> and do not provide <code>Label</code>,
   *             <code>Label</code> is set automatically as follows.</p>
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
  Normalized?: number;

  /**
   * <p>The native severity as defined by the Amazon Web Services service or integrated partner product that
   *          generated the finding.</p>
   */
  Product?: number;

  /**
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
   */
  Label?: SeverityLabel | string;
}

/**
 * <p>Used to update information about the investigation into the finding.</p>
 */
export interface WorkflowUpdate {
  /**
   * <p>The status of the investigation into the finding. The workflow status is specific to an individual finding. It does not affect the generation of new findings. For example, setting the workflow status to <code>SUPPRESSED</code> or <code>RESOLVED</code> does not prevent a new finding for the same issue.</p>
   *          <p>The allowed values are the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code> - The initial state of a finding, before it is reviewed.</p>
   *                <p>Security Hub also resets <code>WorkFlowStatus</code> from <code>NOTIFIED</code> or
   *                   <code>RESOLVED</code> to <code>NEW</code> in the following cases:</p>
   *                <ul>
   *                   <li>
   *                      <p>The record state changes from <code>ARCHIVED</code> to
   *                      <code>ACTIVE</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>The compliance status changes from <code>PASSED</code> to either
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
   *                   <code>RESOLVED</code> - The finding was reviewed and remediated and is now
   *                considered resolved.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUPPRESSED</code> - Indicates that you reviewed the finding and do not believe that any action is needed. The finding is no longer updated.</p>
   *             </li>
   *          </ul>
   */
  Status?: WorkflowStatus | string;
}

export interface BatchUpdateFindingsRequest {
  /**
   * <p>The list of findings to update. <code>BatchUpdateFindings</code> can be used to update
   *          up to 100 findings at a time.</p>
   *          <p>For each finding, the list provides the finding identifier and the ARN of the finding
   *          provider.</p>
   */
  FindingIdentifiers: AwsSecurityFindingIdentifier[] | undefined;

  /**
   * <p>The updated note.</p>
   */
  Note?: NoteUpdate;

  /**
   * <p>Used to update the finding severity.</p>
   */
  Severity?: SeverityUpdate;

  /**
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
  VerificationState?: VerificationState | string;

  /**
   * <p>The updated value for the finding confidence. Confidence is defined as the likelihood
   *          that a finding accurately identifies the behavior or issue that it was intended to
   *          identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   */
  Confidence?: number;

  /**
   * <p>The updated value for the level of importance assigned to the resources associated with
   *          the findings.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources. </p>
   */
  Criticality?: number;

  /**
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
   * <p>A list of name/value string pairs associated with the finding. These are custom,
   *          user-defined fields added to a finding.</p>
   */
  UserDefinedFields?: Record<string, string>;

  /**
   * <p>Used to update the workflow status of a finding.</p>
   *          <p>The workflow status indicates the progress of the investigation into the finding. </p>
   */
  Workflow?: WorkflowUpdate;

  /**
   * <p>A list of findings that are related to the updated findings.</p>
   */
  RelatedFindings?: RelatedFinding[];
}

/**
 * <p>A finding from a <code>BatchUpdateFindings</code> request that Security Hub was unable to
 *          update.</p>
 */
export interface BatchUpdateFindingsUnprocessedFinding {
  /**
   * <p>The identifier of the finding that was not updated.</p>
   */
  FindingIdentifier: AwsSecurityFindingIdentifier | undefined;

  /**
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

export interface BatchUpdateFindingsResponse {
  /**
   * <p>The list of findings that were updated successfully.</p>
   */
  ProcessedFindings: AwsSecurityFindingIdentifier[] | undefined;

  /**
   * <p>The list of findings that were not updated.</p>
   */
  UnprocessedFindings: BatchUpdateFindingsUnprocessedFinding[] | undefined;
}

export enum ControlStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export interface CreateActionTargetRequest {
  /**
   * <p>The name of the custom action target. Can contain up to 20 characters.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description for the custom action target.</p>
   */
  Description: string | undefined;

  /**
   * <p>The ID for the custom action target. Can contain up to 20 alphanumeric characters.</p>
   */
  Id: string | undefined;
}

export interface CreateActionTargetResponse {
  /**
   * <p>The ARN for the custom action target.</p>
   */
  ActionTargetArn: string | undefined;
}

/**
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

export interface CreateFindingAggregatorRequest {
  /**
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
   * <p>If <code>RegionLinkingMode</code> is <code>ALL_REGIONS_EXCEPT_SPECIFIED</code>, then this is a space-separated list of Regions that do not aggregate findings to the aggregation Region.</p>
   *          <p>If <code>RegionLinkingMode</code> is <code>SPECIFIED_REGIONS</code>, then this is a space-separated list of Regions that do aggregate findings to the aggregation Region.
   *       </p>
   */
  Regions?: string[];
}

export interface CreateFindingAggregatorResponse {
  /**
   * <p>The ARN of the finding aggregator. You use the finding aggregator ARN to retrieve details for, update, and stop finding aggregation.</p>
   */
  FindingAggregatorArn?: string;

  /**
   * <p>The aggregation Region.</p>
   */
  FindingAggregationRegion?: string;

  /**
   * <p>Indicates whether to link all Regions, all Regions except for a list of excluded Regions, or a list of included Regions.</p>
   */
  RegionLinkingMode?: string;

  /**
   * <p>The list of excluded Regions or included Regions.</p>
   */
  Regions?: string[];
}

export interface CreateInsightRequest {
  /**
   * <p>The name of the custom insight to create.</p>
   */
  Name: string | undefined;

  /**
   * <p>One or more attributes used to filter the findings included in the insight. The insight
   *          only includes findings that match the criteria defined in the filters.</p>
   */
  Filters: AwsSecurityFindingFilters | undefined;

  /**
   * <p>The attribute used to group the findings for the insight. The grouping attribute
   *          identifies the type of item that the insight applies to. For example, if an insight is
   *          grouped by resource identifier, then the insight produces a list of resource
   *          identifiers.</p>
   */
  GroupByAttribute: string | undefined;
}

export interface CreateInsightResponse {
  /**
   * <p>The ARN of the insight created.</p>
   */
  InsightArn: string | undefined;
}

export interface CreateMembersRequest {
  /**
   * <p>The list of accounts to associate with the Security Hub administrator account. For each account, the
   *          list includes the account ID and optionally the email address.</p>
   */
  AccountDetails: AccountDetails[] | undefined;
}

/**
 * <p>Details about the account that was not processed.</p>
 */
export interface Result {
  /**
   * <p>An Amazon Web Services account ID of the account that was not processed.</p>
   */
  AccountId?: string;

  /**
   * <p>The reason that the account was not processed.</p>
   */
  ProcessingResult?: string;
}

export interface CreateMembersResponse {
  /**
   * <p>The list of Amazon Web Services accounts that were not processed. For each account, the list includes
   *          the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export interface DeclineInvitationsRequest {
  /**
   * <p>The list of account IDs for the accounts from which to decline the invitations to
   *          Security Hub.</p>
   */
  AccountIds: string[] | undefined;
}

export interface DeclineInvitationsResponse {
  /**
   * <p>The list of Amazon Web Services accounts that were not processed. For each account, the list includes
   *          the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export interface DeleteActionTargetRequest {
  /**
   * <p>The ARN of the custom action target to delete.</p>
   */
  ActionTargetArn: string | undefined;
}

export interface DeleteActionTargetResponse {
  /**
   * <p>The ARN of the custom action target that was deleted.</p>
   */
  ActionTargetArn: string | undefined;
}

export interface DeleteFindingAggregatorRequest {
  /**
   * <p>The ARN of the finding aggregator to delete. To obtain the ARN, use <code>ListFindingAggregators</code>.</p>
   */
  FindingAggregatorArn: string | undefined;
}

export interface DeleteFindingAggregatorResponse {}

export interface DeleteInsightRequest {
  /**
   * <p>The ARN of the insight to delete.</p>
   */
  InsightArn: string | undefined;
}

export interface DeleteInsightResponse {
  /**
   * <p>The ARN of the insight that was deleted.</p>
   */
  InsightArn: string | undefined;
}

export interface DeleteInvitationsRequest {
  /**
   * <p>The list of the account IDs that sent the invitations to delete.</p>
   */
  AccountIds: string[] | undefined;
}

export interface DeleteInvitationsResponse {
  /**
   * <p>The list of Amazon Web Services accounts for which the invitations were not deleted. For each account,
   *          the list includes the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export interface DeleteMembersRequest {
  /**
   * <p>The list of account IDs for the member accounts to delete.</p>
   */
  AccountIds: string[] | undefined;
}

export interface DeleteMembersResponse {
  /**
   * <p>The list of Amazon Web Services accounts that were not deleted. For each account, the list includes the
   *          account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export interface DescribeActionTargetsRequest {
  /**
   * <p>A list of custom action target ARNs for the custom action targets to retrieve.</p>
   */
  ActionTargetArns?: string[];

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeActionTargets</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

export interface DescribeActionTargetsResponse {
  /**
   * <p>A list of <code>ActionTarget</code> objects. Each object includes the <code>ActionTargetArn</code>,
   *             <code>Description</code>, and <code>Name</code> of a custom action target available in
   *          Security Hub.</p>
   */
  ActionTargets: ActionTarget[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export interface DescribeHubRequest {
  /**
   * <p>The ARN of the Hub resource to retrieve.</p>
   */
  HubArn?: string;
}

export interface DescribeHubResponse {
  /**
   * <p>The ARN of the Hub resource that was retrieved.</p>
   */
  HubArn?: string;

  /**
   * <p>The date and time when Security Hub was enabled in the account.</p>
   */
  SubscribedAt?: string;

  /**
   * <p>Whether to automatically enable new controls when they are added to standards that are
   *          enabled.</p>
   *          <p>If set to <code>true</code>, then new controls for enabled standards are enabled
   *          automatically. If set to <code>false</code>, then new controls are not enabled.</p>
   */
  AutoEnableControls?: boolean;
}

export interface DescribeOrganizationConfigurationRequest {}

export interface DescribeOrganizationConfigurationResponse {
  /**
   * <p>Whether to automatically enable Security Hub for new accounts in the organization.</p>
   *          <p>If set to <code>true</code>, then Security Hub is enabled for new accounts. If set to false,
   *          then new accounts are not added automatically.</p>
   */
  AutoEnable?: boolean;

  /**
   * <p>Whether the maximum number of allowed member accounts are already associated with the
   *          Security Hub administrator account.</p>
   */
  MemberAccountLimitReached?: boolean;

  /**
   * <p>Whether to automatically enable Security Hub <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-enable-disable.html">default standards</a>
   *          for new member accounts in the organization.</p>
   *          <p>The default value of this parameter is equal to <code>DEFAULT</code>.</p>
   *          <p>If equal to <code>DEFAULT</code>, then Security Hub default standards are automatically enabled for new member
   *          accounts. If equal to <code>NONE</code>, then default standards are not automatically enabled for new member
   *          accounts.</p>
   */
  AutoEnableStandards?: AutoEnableStandards | string;
}

export interface DescribeProductsRequest {
  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeProducts</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The ARN of the integration to return.</p>
   */
  ProductArn?: string;
}

export enum IntegrationType {
  RECEIVE_FINDINGS_FROM_SECURITY_HUB = "RECEIVE_FINDINGS_FROM_SECURITY_HUB",
  SEND_FINDINGS_TO_SECURITY_HUB = "SEND_FINDINGS_TO_SECURITY_HUB",
  UPDATE_FINDINGS_IN_SECURITY_HUB = "UPDATE_FINDINGS_IN_SECURITY_HUB",
}

/**
 * <p>Contains details about a product.</p>
 */
export interface Product {
  /**
   * <p>The ARN assigned to the product.</p>
   */
  ProductArn: string | undefined;

  /**
   * <p>The name of the product.</p>
   */
  ProductName?: string;

  /**
   * <p>The name of the company that provides the product.</p>
   */
  CompanyName?: string;

  /**
   * <p>A description of the product.</p>
   */
  Description?: string;

  /**
   * <p>The categories assigned to the product.</p>
   */
  Categories?: string[];

  /**
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
  IntegrationTypes?: (IntegrationType | string)[];

  /**
   * <p>For integrations with Amazon Web Services services, the Amazon Web Services Console URL from which to activate the service.</p>
   *          <p>For integrations with third-party products, the Amazon Web Services Marketplace URL from which to subscribe to or purchase the product.</p>
   */
  MarketplaceUrl?: string;

  /**
   * <p>The URL to the service or product documentation about the integration with Security Hub, including how to activate the integration.</p>
   */
  ActivationUrl?: string;

  /**
   * <p>The resource policy associated with the product.</p>
   */
  ProductSubscriptionResourcePolicy?: string;
}

export interface DescribeProductsResponse {
  /**
   * <p>A list of products, including details for each product.</p>
   */
  Products: Product[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @internal
 */
export const AwsIamInstanceProfileRoleFilterSensitiveLog = (obj: AwsIamInstanceProfileRole): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsIamInstanceProfileFilterSensitiveLog = (obj: AwsIamInstanceProfile): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsIamPermissionsBoundaryFilterSensitiveLog = (obj: AwsIamPermissionsBoundary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsIamPolicyVersionFilterSensitiveLog = (obj: AwsIamPolicyVersion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsIamPolicyDetailsFilterSensitiveLog = (obj: AwsIamPolicyDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsIamRolePolicyFilterSensitiveLog = (obj: AwsIamRolePolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsIamRoleDetailsFilterSensitiveLog = (obj: AwsIamRoleDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsIamUserPolicyFilterSensitiveLog = (obj: AwsIamUserPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsIamUserDetailsFilterSensitiveLog = (obj: AwsIamUserDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsKinesisStreamStreamEncryptionDetailsFilterSensitiveLog = (
  obj: AwsKinesisStreamStreamEncryptionDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsKinesisStreamDetailsFilterSensitiveLog = (obj: AwsKinesisStreamDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsKmsKeyDetailsFilterSensitiveLog = (obj: AwsKmsKeyDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsLambdaFunctionCodeFilterSensitiveLog = (obj: AwsLambdaFunctionCode): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsLambdaFunctionDeadLetterConfigFilterSensitiveLog = (obj: AwsLambdaFunctionDeadLetterConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsLambdaFunctionEnvironmentErrorFilterSensitiveLog = (obj: AwsLambdaFunctionEnvironmentError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsLambdaFunctionEnvironmentFilterSensitiveLog = (obj: AwsLambdaFunctionEnvironment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsLambdaFunctionLayerFilterSensitiveLog = (obj: AwsLambdaFunctionLayer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsLambdaFunctionTracingConfigFilterSensitiveLog = (obj: AwsLambdaFunctionTracingConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsLambdaFunctionVpcConfigFilterSensitiveLog = (obj: AwsLambdaFunctionVpcConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsLambdaFunctionDetailsFilterSensitiveLog = (obj: AwsLambdaFunctionDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsLambdaLayerVersionDetailsFilterSensitiveLog = (obj: AwsLambdaLayerVersionDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsNetworkFirewallFirewallSubnetMappingsDetailsFilterSensitiveLog = (
  obj: AwsNetworkFirewallFirewallSubnetMappingsDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsNetworkFirewallFirewallDetailsFilterSensitiveLog = (obj: AwsNetworkFirewallFirewallDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FirewallPolicyStatefulRuleGroupReferencesDetailsFilterSensitiveLog = (
  obj: FirewallPolicyStatefulRuleGroupReferencesDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StatelessCustomPublishMetricActionDimensionFilterSensitiveLog = (
  obj: StatelessCustomPublishMetricActionDimension
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StatelessCustomPublishMetricActionFilterSensitiveLog = (obj: StatelessCustomPublishMetricAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StatelessCustomActionDefinitionFilterSensitiveLog = (obj: StatelessCustomActionDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FirewallPolicyStatelessCustomActionsDetailsFilterSensitiveLog = (
  obj: FirewallPolicyStatelessCustomActionsDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FirewallPolicyStatelessRuleGroupReferencesDetailsFilterSensitiveLog = (
  obj: FirewallPolicyStatelessRuleGroupReferencesDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FirewallPolicyDetailsFilterSensitiveLog = (obj: FirewallPolicyDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsNetworkFirewallFirewallPolicyDetailsFilterSensitiveLog = (
  obj: AwsNetworkFirewallFirewallPolicyDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleGroupSourceListDetailsFilterSensitiveLog = (obj: RuleGroupSourceListDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleGroupSourceStatefulRulesHeaderDetailsFilterSensitiveLog = (
  obj: RuleGroupSourceStatefulRulesHeaderDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleGroupSourceStatefulRulesOptionsDetailsFilterSensitiveLog = (
  obj: RuleGroupSourceStatefulRulesOptionsDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleGroupSourceStatefulRulesDetailsFilterSensitiveLog = (
  obj: RuleGroupSourceStatefulRulesDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleGroupSourceCustomActionsDetailsFilterSensitiveLog = (
  obj: RuleGroupSourceCustomActionsDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleGroupSourceStatelessRuleMatchAttributesDestinationPortsFilterSensitiveLog = (
  obj: RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleGroupSourceStatelessRuleMatchAttributesDestinationsFilterSensitiveLog = (
  obj: RuleGroupSourceStatelessRuleMatchAttributesDestinations
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleGroupSourceStatelessRuleMatchAttributesSourcePortsFilterSensitiveLog = (
  obj: RuleGroupSourceStatelessRuleMatchAttributesSourcePorts
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleGroupSourceStatelessRuleMatchAttributesSourcesFilterSensitiveLog = (
  obj: RuleGroupSourceStatelessRuleMatchAttributesSources
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleGroupSourceStatelessRuleMatchAttributesTcpFlagsFilterSensitiveLog = (
  obj: RuleGroupSourceStatelessRuleMatchAttributesTcpFlags
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleGroupSourceStatelessRuleMatchAttributesFilterSensitiveLog = (
  obj: RuleGroupSourceStatelessRuleMatchAttributes
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleGroupSourceStatelessRuleDefinitionFilterSensitiveLog = (
  obj: RuleGroupSourceStatelessRuleDefinition
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleGroupSourceStatelessRulesDetailsFilterSensitiveLog = (
  obj: RuleGroupSourceStatelessRulesDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleGroupSourceStatelessRulesAndCustomActionsDetailsFilterSensitiveLog = (
  obj: RuleGroupSourceStatelessRulesAndCustomActionsDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleGroupSourceFilterSensitiveLog = (obj: RuleGroupSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleGroupVariablesIpSetsDetailsFilterSensitiveLog = (obj: RuleGroupVariablesIpSetsDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleGroupVariablesPortSetsDetailsFilterSensitiveLog = (obj: RuleGroupVariablesPortSetsDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleGroupVariablesFilterSensitiveLog = (obj: RuleGroupVariables): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleGroupDetailsFilterSensitiveLog = (obj: RuleGroupDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsNetworkFirewallRuleGroupDetailsFilterSensitiveLog = (obj: AwsNetworkFirewallRuleGroupDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsOpenSearchServiceDomainMasterUserOptionsDetailsFilterSensitiveLog = (
  obj: AwsOpenSearchServiceDomainMasterUserOptionsDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetailsFilterSensitiveLog = (
  obj: AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetailsFilterSensitiveLog = (
  obj: AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsOpenSearchServiceDomainClusterConfigDetailsFilterSensitiveLog = (
  obj: AwsOpenSearchServiceDomainClusterConfigDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsOpenSearchServiceDomainDomainEndpointOptionsDetailsFilterSensitiveLog = (
  obj: AwsOpenSearchServiceDomainDomainEndpointOptionsDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetailsFilterSensitiveLog = (
  obj: AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsOpenSearchServiceDomainLogPublishingOptionFilterSensitiveLog = (
  obj: AwsOpenSearchServiceDomainLogPublishingOption
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsOpenSearchServiceDomainLogPublishingOptionsDetailsFilterSensitiveLog = (
  obj: AwsOpenSearchServiceDomainLogPublishingOptionsDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetailsFilterSensitiveLog = (
  obj: AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsOpenSearchServiceDomainServiceSoftwareOptionsDetailsFilterSensitiveLog = (
  obj: AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsOpenSearchServiceDomainVpcOptionsDetailsFilterSensitiveLog = (
  obj: AwsOpenSearchServiceDomainVpcOptionsDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsOpenSearchServiceDomainDetailsFilterSensitiveLog = (obj: AwsOpenSearchServiceDomainDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRdsDbClusterAssociatedRoleFilterSensitiveLog = (obj: AwsRdsDbClusterAssociatedRole): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRdsDbClusterMemberFilterSensitiveLog = (obj: AwsRdsDbClusterMember): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRdsDbClusterOptionGroupMembershipFilterSensitiveLog = (
  obj: AwsRdsDbClusterOptionGroupMembership
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRdsDbDomainMembershipFilterSensitiveLog = (obj: AwsRdsDbDomainMembership): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRdsDbInstanceVpcSecurityGroupFilterSensitiveLog = (obj: AwsRdsDbInstanceVpcSecurityGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRdsDbClusterDetailsFilterSensitiveLog = (obj: AwsRdsDbClusterDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRdsDbClusterSnapshotDetailsFilterSensitiveLog = (obj: AwsRdsDbClusterSnapshotDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRdsDbInstanceAssociatedRoleFilterSensitiveLog = (obj: AwsRdsDbInstanceAssociatedRole): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRdsDbParameterGroupFilterSensitiveLog = (obj: AwsRdsDbParameterGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRdsDbSubnetGroupSubnetAvailabilityZoneFilterSensitiveLog = (
  obj: AwsRdsDbSubnetGroupSubnetAvailabilityZone
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRdsDbSubnetGroupSubnetFilterSensitiveLog = (obj: AwsRdsDbSubnetGroupSubnet): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRdsDbSubnetGroupFilterSensitiveLog = (obj: AwsRdsDbSubnetGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRdsDbInstanceEndpointFilterSensitiveLog = (obj: AwsRdsDbInstanceEndpoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRdsDbOptionGroupMembershipFilterSensitiveLog = (obj: AwsRdsDbOptionGroupMembership): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRdsPendingCloudWatchLogsExportsFilterSensitiveLog = (obj: AwsRdsPendingCloudWatchLogsExports): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRdsDbProcessorFeatureFilterSensitiveLog = (obj: AwsRdsDbProcessorFeature): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRdsDbPendingModifiedValuesFilterSensitiveLog = (obj: AwsRdsDbPendingModifiedValues): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRdsDbStatusInfoFilterSensitiveLog = (obj: AwsRdsDbStatusInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRdsDbInstanceDetailsFilterSensitiveLog = (obj: AwsRdsDbInstanceDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRdsDbSecurityGroupEc2SecurityGroupFilterSensitiveLog = (
  obj: AwsRdsDbSecurityGroupEc2SecurityGroup
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRdsDbSecurityGroupIpRangeFilterSensitiveLog = (obj: AwsRdsDbSecurityGroupIpRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRdsDbSecurityGroupDetailsFilterSensitiveLog = (obj: AwsRdsDbSecurityGroupDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRdsDbSnapshotDetailsFilterSensitiveLog = (obj: AwsRdsDbSnapshotDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRdsEventSubscriptionDetailsFilterSensitiveLog = (obj: AwsRdsEventSubscriptionDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRedshiftClusterClusterNodeFilterSensitiveLog = (obj: AwsRedshiftClusterClusterNode): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRedshiftClusterClusterParameterStatusFilterSensitiveLog = (
  obj: AwsRedshiftClusterClusterParameterStatus
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRedshiftClusterClusterParameterGroupFilterSensitiveLog = (
  obj: AwsRedshiftClusterClusterParameterGroup
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRedshiftClusterClusterSecurityGroupFilterSensitiveLog = (
  obj: AwsRedshiftClusterClusterSecurityGroup
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRedshiftClusterClusterSnapshotCopyStatusFilterSensitiveLog = (
  obj: AwsRedshiftClusterClusterSnapshotCopyStatus
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRedshiftClusterDeferredMaintenanceWindowFilterSensitiveLog = (
  obj: AwsRedshiftClusterDeferredMaintenanceWindow
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRedshiftClusterElasticIpStatusFilterSensitiveLog = (obj: AwsRedshiftClusterElasticIpStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRedshiftClusterEndpointFilterSensitiveLog = (obj: AwsRedshiftClusterEndpoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRedshiftClusterHsmStatusFilterSensitiveLog = (obj: AwsRedshiftClusterHsmStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRedshiftClusterIamRoleFilterSensitiveLog = (obj: AwsRedshiftClusterIamRole): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRedshiftClusterLoggingStatusFilterSensitiveLog = (obj: AwsRedshiftClusterLoggingStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRedshiftClusterPendingModifiedValuesFilterSensitiveLog = (
  obj: AwsRedshiftClusterPendingModifiedValues
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRedshiftClusterResizeInfoFilterSensitiveLog = (obj: AwsRedshiftClusterResizeInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRedshiftClusterRestoreStatusFilterSensitiveLog = (obj: AwsRedshiftClusterRestoreStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRedshiftClusterVpcSecurityGroupFilterSensitiveLog = (obj: AwsRedshiftClusterVpcSecurityGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsRedshiftClusterDetailsFilterSensitiveLog = (obj: AwsRedshiftClusterDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsS3AccountPublicAccessBlockDetailsFilterSensitiveLog = (
  obj: AwsS3AccountPublicAccessBlockDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetailsFilterSensitiveLog = (
  obj: AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetailsFilterSensitiveLog = (
  obj: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetailsFilterSensitiveLog = (
  obj: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetailsFilterSensitiveLog = (
  obj: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetailsFilterSensitiveLog = (
  obj: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsS3BucketBucketLifecycleConfigurationRulesFilterDetailsFilterSensitiveLog = (
  obj: AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetailsFilterSensitiveLog = (
  obj: AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetailsFilterSensitiveLog = (
  obj: AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsS3BucketBucketLifecycleConfigurationRulesDetailsFilterSensitiveLog = (
  obj: AwsS3BucketBucketLifecycleConfigurationRulesDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsS3BucketBucketLifecycleConfigurationDetailsFilterSensitiveLog = (
  obj: AwsS3BucketBucketLifecycleConfigurationDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsS3BucketBucketVersioningConfigurationFilterSensitiveLog = (
  obj: AwsS3BucketBucketVersioningConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsS3BucketLoggingConfigurationFilterSensitiveLog = (obj: AwsS3BucketLoggingConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsS3BucketNotificationConfigurationS3KeyFilterRuleFilterSensitiveLog = (
  obj: AwsS3BucketNotificationConfigurationS3KeyFilterRule
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsS3BucketNotificationConfigurationS3KeyFilterFilterSensitiveLog = (
  obj: AwsS3BucketNotificationConfigurationS3KeyFilter
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsS3BucketNotificationConfigurationFilterFilterSensitiveLog = (
  obj: AwsS3BucketNotificationConfigurationFilter
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsS3BucketNotificationConfigurationDetailFilterSensitiveLog = (
  obj: AwsS3BucketNotificationConfigurationDetail
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsS3BucketNotificationConfigurationFilterSensitiveLog = (
  obj: AwsS3BucketNotificationConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsS3BucketWebsiteConfigurationRedirectToFilterSensitiveLog = (
  obj: AwsS3BucketWebsiteConfigurationRedirectTo
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsS3BucketWebsiteConfigurationRoutingRuleConditionFilterSensitiveLog = (
  obj: AwsS3BucketWebsiteConfigurationRoutingRuleCondition
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsS3BucketWebsiteConfigurationRoutingRuleRedirectFilterSensitiveLog = (
  obj: AwsS3BucketWebsiteConfigurationRoutingRuleRedirect
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsS3BucketWebsiteConfigurationRoutingRuleFilterSensitiveLog = (
  obj: AwsS3BucketWebsiteConfigurationRoutingRule
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsS3BucketWebsiteConfigurationFilterSensitiveLog = (obj: AwsS3BucketWebsiteConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsS3BucketServerSideEncryptionByDefaultFilterSensitiveLog = (
  obj: AwsS3BucketServerSideEncryptionByDefault
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsS3BucketServerSideEncryptionRuleFilterSensitiveLog = (
  obj: AwsS3BucketServerSideEncryptionRule
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsS3BucketServerSideEncryptionConfigurationFilterSensitiveLog = (
  obj: AwsS3BucketServerSideEncryptionConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsS3BucketDetailsFilterSensitiveLog = (obj: AwsS3BucketDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsS3ObjectDetailsFilterSensitiveLog = (obj: AwsS3ObjectDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetailsFilterSensitiveLog = (
  obj: AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsSageMakerNotebookInstanceDetailsFilterSensitiveLog = (
  obj: AwsSageMakerNotebookInstanceDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsSecretsManagerSecretRotationRulesFilterSensitiveLog = (
  obj: AwsSecretsManagerSecretRotationRules
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsSecretsManagerSecretDetailsFilterSensitiveLog = (obj: AwsSecretsManagerSecretDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StatusReasonFilterSensitiveLog = (obj: StatusReason): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComplianceFilterSensitiveLog = (obj: Compliance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RelatedFindingFilterSensitiveLog = (obj: RelatedFinding): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FindingProviderSeverityFilterSensitiveLog = (obj: FindingProviderSeverity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FindingProviderFieldsFilterSensitiveLog = (obj: FindingProviderFields): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MalwareFilterSensitiveLog = (obj: Malware): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PortRangeFilterSensitiveLog = (obj: PortRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkFilterSensitiveLog = (obj: Network): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkPathComponentDetailsFilterSensitiveLog = (obj: NetworkPathComponentDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkHeaderFilterSensitiveLog = (obj: NetworkHeader): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkPathComponentFilterSensitiveLog = (obj: NetworkPathComponent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NoteFilterSensitiveLog = (obj: Note): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PatchSummaryFilterSensitiveLog = (obj: PatchSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProcessDetailsFilterSensitiveLog = (obj: ProcessDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecommendationFilterSensitiveLog = (obj: Recommendation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemediationFilterSensitiveLog = (obj: Remediation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CellFilterSensitiveLog = (obj: Cell): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RangeFilterSensitiveLog = (obj: Range): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PageFilterSensitiveLog = (obj: Page): any => ({
  ...obj,
});

/**
 * @internal
 */
export const _RecordFilterSensitiveLog = (obj: _Record): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OccurrencesFilterSensitiveLog = (obj: Occurrences): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomDataIdentifiersDetectionsFilterSensitiveLog = (obj: CustomDataIdentifiersDetections): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomDataIdentifiersResultFilterSensitiveLog = (obj: CustomDataIdentifiersResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SensitiveDataDetectionsFilterSensitiveLog = (obj: SensitiveDataDetections): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SensitiveDataResultFilterSensitiveLog = (obj: SensitiveDataResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClassificationStatusFilterSensitiveLog = (obj: ClassificationStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClassificationResultFilterSensitiveLog = (obj: ClassificationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataClassificationDetailsFilterSensitiveLog = (obj: DataClassificationDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsSnsTopicSubscriptionFilterSensitiveLog = (obj: AwsSnsTopicSubscription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsSnsTopicDetailsFilterSensitiveLog = (obj: AwsSnsTopicDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsSqsQueueDetailsFilterSensitiveLog = (obj: AwsSqsQueueDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsSsmComplianceSummaryFilterSensitiveLog = (obj: AwsSsmComplianceSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsSsmPatchFilterSensitiveLog = (obj: AwsSsmPatch): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsSsmPatchComplianceDetailsFilterSensitiveLog = (obj: AwsSsmPatchComplianceDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafRateBasedRuleMatchPredicateFilterSensitiveLog = (obj: AwsWafRateBasedRuleMatchPredicate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafRateBasedRuleDetailsFilterSensitiveLog = (obj: AwsWafRateBasedRuleDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafRegionalRateBasedRuleMatchPredicateFilterSensitiveLog = (
  obj: AwsWafRegionalRateBasedRuleMatchPredicate
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafRegionalRateBasedRuleDetailsFilterSensitiveLog = (obj: AwsWafRegionalRateBasedRuleDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafRegionalRulePredicateListDetailsFilterSensitiveLog = (
  obj: AwsWafRegionalRulePredicateListDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafRegionalRuleDetailsFilterSensitiveLog = (obj: AwsWafRegionalRuleDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafRegionalRuleGroupRulesActionDetailsFilterSensitiveLog = (
  obj: AwsWafRegionalRuleGroupRulesActionDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafRegionalRuleGroupRulesDetailsFilterSensitiveLog = (
  obj: AwsWafRegionalRuleGroupRulesDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafRegionalRuleGroupDetailsFilterSensitiveLog = (obj: AwsWafRegionalRuleGroupDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafRegionalWebAclRulesListActionDetailsFilterSensitiveLog = (
  obj: AwsWafRegionalWebAclRulesListActionDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafRegionalWebAclRulesListOverrideActionDetailsFilterSensitiveLog = (
  obj: AwsWafRegionalWebAclRulesListOverrideActionDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafRegionalWebAclRulesListDetailsFilterSensitiveLog = (
  obj: AwsWafRegionalWebAclRulesListDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafRegionalWebAclDetailsFilterSensitiveLog = (obj: AwsWafRegionalWebAclDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafRulePredicateListDetailsFilterSensitiveLog = (obj: AwsWafRulePredicateListDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafRuleDetailsFilterSensitiveLog = (obj: AwsWafRuleDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafRuleGroupRulesActionDetailsFilterSensitiveLog = (obj: AwsWafRuleGroupRulesActionDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafRuleGroupRulesDetailsFilterSensitiveLog = (obj: AwsWafRuleGroupRulesDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafRuleGroupDetailsFilterSensitiveLog = (obj: AwsWafRuleGroupDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafv2CustomHttpHeaderFilterSensitiveLog = (obj: AwsWafv2CustomHttpHeader): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafv2CustomRequestHandlingDetailsFilterSensitiveLog = (
  obj: AwsWafv2CustomRequestHandlingDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafv2ActionAllowDetailsFilterSensitiveLog = (obj: AwsWafv2ActionAllowDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafv2CustomResponseDetailsFilterSensitiveLog = (obj: AwsWafv2CustomResponseDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafv2ActionBlockDetailsFilterSensitiveLog = (obj: AwsWafv2ActionBlockDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafv2RulesActionCaptchaDetailsFilterSensitiveLog = (obj: AwsWafv2RulesActionCaptchaDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafv2RulesActionCountDetailsFilterSensitiveLog = (obj: AwsWafv2RulesActionCountDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafv2RulesActionDetailsFilterSensitiveLog = (obj: AwsWafv2RulesActionDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafv2VisibilityConfigDetailsFilterSensitiveLog = (obj: AwsWafv2VisibilityConfigDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafv2RulesDetailsFilterSensitiveLog = (obj: AwsWafv2RulesDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafv2RuleGroupDetailsFilterSensitiveLog = (obj: AwsWafv2RuleGroupDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetailsFilterSensitiveLog = (
  obj: AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafv2WebAclCaptchaConfigDetailsFilterSensitiveLog = (obj: AwsWafv2WebAclCaptchaConfigDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafv2WebAclActionDetailsFilterSensitiveLog = (obj: AwsWafv2WebAclActionDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafv2WebAclDetailsFilterSensitiveLog = (obj: AwsWafv2WebAclDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WafActionFilterSensitiveLog = (obj: WafAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WafExcludedRuleFilterSensitiveLog = (obj: WafExcludedRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WafOverrideActionFilterSensitiveLog = (obj: WafOverrideAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafWebAclRuleFilterSensitiveLog = (obj: AwsWafWebAclRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsWafWebAclDetailsFilterSensitiveLog = (obj: AwsWafWebAclDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsXrayEncryptionConfigDetailsFilterSensitiveLog = (obj: AwsXrayEncryptionConfigDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VolumeMountFilterSensitiveLog = (obj: VolumeMount): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContainerDetailsFilterSensitiveLog = (obj: ContainerDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceDetailsFilterSensitiveLog = (obj: ResourceDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceFilterSensitiveLog = (obj: Resource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SeverityFilterSensitiveLog = (obj: Severity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThreatIntelIndicatorFilterSensitiveLog = (obj: ThreatIntelIndicator): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilePathsFilterSensitiveLog = (obj: FilePaths): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThreatFilterSensitiveLog = (obj: Threat): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CvssFilterSensitiveLog = (obj: Cvss): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VulnerabilityVendorFilterSensitiveLog = (obj: VulnerabilityVendor): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SoftwarePackageFilterSensitiveLog = (obj: SoftwarePackage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VulnerabilityFilterSensitiveLog = (obj: Vulnerability): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkflowFilterSensitiveLog = (obj: Workflow): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsSecurityFindingFilterSensitiveLog = (obj: AwsSecurityFinding): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StringFilterFilterSensitiveLog = (obj: StringFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NumberFilterFilterSensitiveLog = (obj: NumberFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DateRangeFilterSensitiveLog = (obj: DateRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DateFilterFilterSensitiveLog = (obj: DateFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KeywordFilterFilterSensitiveLog = (obj: KeywordFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpFilterFilterSensitiveLog = (obj: IpFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MapFilterFilterSensitiveLog = (obj: MapFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BooleanFilterFilterSensitiveLog = (obj: BooleanFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsSecurityFindingFiltersFilterSensitiveLog = (obj: AwsSecurityFindingFilters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsSecurityFindingIdentifierFilterSensitiveLog = (obj: AwsSecurityFindingIdentifier): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDisableStandardsRequestFilterSensitiveLog = (obj: BatchDisableStandardsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StandardsStatusReasonFilterSensitiveLog = (obj: StandardsStatusReason): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StandardsSubscriptionFilterSensitiveLog = (obj: StandardsSubscription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDisableStandardsResponseFilterSensitiveLog = (obj: BatchDisableStandardsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StandardsSubscriptionRequestFilterSensitiveLog = (obj: StandardsSubscriptionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchEnableStandardsRequestFilterSensitiveLog = (obj: BatchEnableStandardsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchEnableStandardsResponseFilterSensitiveLog = (obj: BatchEnableStandardsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchImportFindingsRequestFilterSensitiveLog = (obj: BatchImportFindingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportFindingsErrorFilterSensitiveLog = (obj: ImportFindingsError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchImportFindingsResponseFilterSensitiveLog = (obj: BatchImportFindingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NoteUpdateFilterSensitiveLog = (obj: NoteUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SeverityUpdateFilterSensitiveLog = (obj: SeverityUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkflowUpdateFilterSensitiveLog = (obj: WorkflowUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchUpdateFindingsRequestFilterSensitiveLog = (obj: BatchUpdateFindingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchUpdateFindingsUnprocessedFindingFilterSensitiveLog = (
  obj: BatchUpdateFindingsUnprocessedFinding
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchUpdateFindingsResponseFilterSensitiveLog = (obj: BatchUpdateFindingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateActionTargetRequestFilterSensitiveLog = (obj: CreateActionTargetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateActionTargetResponseFilterSensitiveLog = (obj: CreateActionTargetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFindingAggregatorRequestFilterSensitiveLog = (obj: CreateFindingAggregatorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFindingAggregatorResponseFilterSensitiveLog = (obj: CreateFindingAggregatorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateInsightRequestFilterSensitiveLog = (obj: CreateInsightRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateInsightResponseFilterSensitiveLog = (obj: CreateInsightResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMembersRequestFilterSensitiveLog = (obj: CreateMembersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResultFilterSensitiveLog = (obj: Result): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMembersResponseFilterSensitiveLog = (obj: CreateMembersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeclineInvitationsRequestFilterSensitiveLog = (obj: DeclineInvitationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeclineInvitationsResponseFilterSensitiveLog = (obj: DeclineInvitationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteActionTargetRequestFilterSensitiveLog = (obj: DeleteActionTargetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteActionTargetResponseFilterSensitiveLog = (obj: DeleteActionTargetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFindingAggregatorRequestFilterSensitiveLog = (obj: DeleteFindingAggregatorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFindingAggregatorResponseFilterSensitiveLog = (obj: DeleteFindingAggregatorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteInsightRequestFilterSensitiveLog = (obj: DeleteInsightRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteInsightResponseFilterSensitiveLog = (obj: DeleteInsightResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteInvitationsRequestFilterSensitiveLog = (obj: DeleteInvitationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteInvitationsResponseFilterSensitiveLog = (obj: DeleteInvitationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMembersRequestFilterSensitiveLog = (obj: DeleteMembersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMembersResponseFilterSensitiveLog = (obj: DeleteMembersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeActionTargetsRequestFilterSensitiveLog = (obj: DescribeActionTargetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeActionTargetsResponseFilterSensitiveLog = (obj: DescribeActionTargetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeHubRequestFilterSensitiveLog = (obj: DescribeHubRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeHubResponseFilterSensitiveLog = (obj: DescribeHubResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeOrganizationConfigurationRequestFilterSensitiveLog = (
  obj: DescribeOrganizationConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeOrganizationConfigurationResponseFilterSensitiveLog = (
  obj: DescribeOrganizationConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProductsRequestFilterSensitiveLog = (obj: DescribeProductsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProductFilterSensitiveLog = (obj: Product): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProductsResponseFilterSensitiveLog = (obj: DescribeProductsResponse): any => ({
  ...obj,
});
