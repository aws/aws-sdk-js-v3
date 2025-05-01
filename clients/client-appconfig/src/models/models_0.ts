// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { AppConfigServiceException as __BaseException } from "./AppConfigServiceException";

/**
 * <p>A parameter to configure deletion protection. Deletion protection prevents a user from
 *          deleting a configuration profile or an environment if AppConfig has called either
 *             <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html">GetLatestConfiguration</a> or  for the
 *          configuration profile or from the environment during the specified interval.</p>
 *          <p>The default interval specified by <code>ProtectionPeriodInMinutes</code> is 60.
 *             <code>DeletionProtectionCheck</code> skips configuration profiles and environments that
 *          were created in the past hour.</p>
 * @public
 */
export interface DeletionProtectionSettings {
  /**
   * <p>A parameter that indicates if deletion protection is enabled or not.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The time interval during which AppConfig monitors for calls to <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html">GetLatestConfiguration</a> or  for a
   *          configuration profile or from an environment. AppConfig returns an error if a
   *          user calls  or  for the designated configuration profile or
   *          environment. To bypass the error and delete a configuration profile or an environment,
   *          specify <code>BYPASS</code> for the <code>DeletionProtectionCheck</code> parameter for
   *          either  or .</p>
   * @public
   */
  ProtectionPeriodInMinutes?: number | undefined;
}

/**
 * @public
 */
export interface AccountSettings {
  /**
   * <p>A parameter to configure deletion protection. Deletion protection prevents a user from
   *          deleting a configuration profile or an environment if AppConfig has called either
   *             <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html">GetLatestConfiguration</a> or  for the
   *          configuration profile or from the environment during the specified interval. The default
   *          interval for <code>ProtectionPeriodInMinutes</code> is 60.</p>
   * @public
   */
  DeletionProtection?: DeletionProtectionSettings | undefined;
}

/**
 * <p>An action defines the tasks that the extension performs during the AppConfig
 *          workflow. Each action includes an action point, as shown in the following list: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>PRE_CREATE_HOSTED_CONFIGURATION_VERSION</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>PRE_START_DEPLOYMENT</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>AT_DEPLOYMENT_TICK</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ON_DEPLOYMENT_START</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ON_DEPLOYMENT_STEP</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ON_DEPLOYMENT_BAKING</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ON_DEPLOYMENT_COMPLETE</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ON_DEPLOYMENT_ROLLED_BACK</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Each action also includes a name, a URI to an Lambda function, and an
 *          Amazon Resource Name (ARN) for an Identity and Access Management assume role. You specify the name,
 *          URI, and ARN for each <i>action point</i> defined in the extension.</p>
 * @public
 */
export interface Action {
  /**
   * <p>The action name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Information about the action.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The extension URI associated to the action point in the extension definition. The URI
   *          can be an Amazon Resource Name (ARN) for one of the following: an Lambda
   *          function, an Amazon Simple Queue Service queue, an Amazon Simple Notification Service topic, or the Amazon EventBridge default event bus.</p>
   * @public
   */
  Uri?: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) for an Identity and Access Management assume role.</p>
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * <p>An extension that was invoked as part of a deployment event.</p>
 * @public
 */
export interface ActionInvocation {
  /**
   * <p>The name, the ID, or the Amazon Resource Name (ARN) of the extension.</p>
   * @public
   */
  ExtensionIdentifier?: string | undefined;

  /**
   * <p>The name of the action.</p>
   * @public
   */
  ActionName?: string | undefined;

  /**
   * <p>The extension URI associated to the action point in the extension definition. The URI
   *          can be an Amazon Resource Name (ARN) for one of the following: an Lambda
   *          function, an Amazon Simple Queue Service queue, an Amazon Simple Notification Service topic, or the Amazon EventBridge default event bus.</p>
   * @public
   */
  Uri?: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) for an Identity and Access Management assume role.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The error message when an extension invocation fails.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The error code when an extension invocation fails.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>A system-generated ID for this invocation.</p>
   * @public
   */
  InvocationId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ActionPoint = {
  AT_DEPLOYMENT_TICK: "AT_DEPLOYMENT_TICK",
  ON_DEPLOYMENT_BAKING: "ON_DEPLOYMENT_BAKING",
  ON_DEPLOYMENT_COMPLETE: "ON_DEPLOYMENT_COMPLETE",
  ON_DEPLOYMENT_ROLLED_BACK: "ON_DEPLOYMENT_ROLLED_BACK",
  ON_DEPLOYMENT_START: "ON_DEPLOYMENT_START",
  ON_DEPLOYMENT_STEP: "ON_DEPLOYMENT_STEP",
  PRE_CREATE_HOSTED_CONFIGURATION_VERSION: "PRE_CREATE_HOSTED_CONFIGURATION_VERSION",
  PRE_START_DEPLOYMENT: "PRE_START_DEPLOYMENT",
} as const;

/**
 * @public
 */
export type ActionPoint = (typeof ActionPoint)[keyof typeof ActionPoint];

/**
 * @public
 */
export interface Application {
  /**
   * <p>The application ID.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The application name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the application.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>Detailed information about the bad request exception error when creating a hosted
 *          configuration version.</p>
 * @public
 */
export interface InvalidConfigurationDetail {
  /**
   * <p>The invalid or out-of-range validation constraint in your JSON schema that failed
   *          validation.</p>
   * @public
   */
  Constraint?: string | undefined;

  /**
   * <p>Location of the validation constraint in the configuration JSON schema that failed
   *          validation.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The reason for an invalid configuration error.</p>
   * @public
   */
  Reason?: string | undefined;

  /**
   * <p>The type of error for an invalid configuration.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>Details about an error with Lambda when a synchronous extension
   *          experiences an error during an invocation.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Detailed information about the input that failed to satisfy the constraints specified by
 *          a call.</p>
 * @public
 */
export type BadRequestDetails = BadRequestDetails.InvalidConfigurationMember | BadRequestDetails.$UnknownMember;

/**
 * @public
 */
export namespace BadRequestDetails {
  /**
   * <p>Detailed information about the bad request exception error when creating a hosted
   *          configuration version.</p>
   * @public
   */
  export interface InvalidConfigurationMember {
    InvalidConfiguration: InvalidConfigurationDetail[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    InvalidConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    InvalidConfiguration: (value: InvalidConfigurationDetail[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: BadRequestDetails, visitor: Visitor<T>): T => {
    if (value.InvalidConfiguration !== undefined) return visitor.InvalidConfiguration(value.InvalidConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const BadRequestReason = {
  INVALID_CONFIGURATION: "InvalidConfiguration",
} as const;

/**
 * @public
 */
export type BadRequestReason = (typeof BadRequestReason)[keyof typeof BadRequestReason];

/**
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Reason?: BadRequestReason | undefined;
  /**
   * <p>Detailed information about the input that failed to satisfy the constraints specified by
   *          a call.</p>
   * @public
   */
  Details?: BadRequestDetails | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
    this.Details = opts.Details;
  }
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * <p>A name for the application.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the application.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Metadata to assign to the application. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which
   *          you define.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>There was an internal failure in the AppConfig service.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of one more AppConfig resources exceeds the maximum allowed. Verify that your
 *          environment doesn't exceed the following service quotas:</p>
 *          <p>Applications: 100 max</p>
 *          <p>Deployment strategies: 20 max</p>
 *          <p>Configuration profiles: 100 max per application</p>
 *          <p>Environments: 20 max per application</p>
 *          <p>To resolve this issue, you can delete one or more resources and try again. Or, you can
 *          request a quota increase. For more information about quotas and to request an increase, see
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/appconfig.html#limits_appconfig">Service quotas for AppConfig</a> in the Amazon Web Services General Reference.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const ValidatorType = {
  JSON_SCHEMA: "JSON_SCHEMA",
  LAMBDA: "LAMBDA",
} as const;

/**
 * @public
 */
export type ValidatorType = (typeof ValidatorType)[keyof typeof ValidatorType];

/**
 * <p>A validator provides a syntactic or semantic check to ensure the configuration that you
 *          want to deploy functions as intended. To validate your application configuration data, you
 *          provide a schema or an Amazon Web Services Lambda function that runs against the configuration. The
 *          configuration deployment or update can only proceed when the configuration data is valid.
 *          For more information, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-configuration-profile.html#appconfig-creating-configuration-and-profile-validators">About validators</a> in the <i>AppConfig User Guide</i>.</p>
 * @public
 */
export interface Validator {
  /**
   * <p>AppConfig supports validators of type <code>JSON_SCHEMA</code> and
   *             <code>LAMBDA</code>
   *          </p>
   * @public
   */
  Type: ValidatorType | undefined;

  /**
   * <p>Either the JSON Schema content or the Amazon Resource Name (ARN) of an Lambda
   *          function.</p>
   * @public
   */
  Content: string | undefined;
}

/**
 * @public
 */
export interface ConfigurationProfile {
  /**
   * <p>The application ID.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The configuration profile ID.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the configuration profile.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The configuration profile description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The URI location of the configuration.</p>
   * @public
   */
  LocationUri?: string | undefined;

  /**
   * <p>The ARN of an IAM role with permission to access the configuration at the specified
   *             <code>LocationUri</code>.</p>
   * @public
   */
  RetrievalRoleArn?: string | undefined;

  /**
   * <p>A list of methods for validating the configuration.</p>
   * @public
   */
  Validators?: Validator[] | undefined;

  /**
   * <p>The type of configurations contained in the profile. AppConfig supports
   *             <code>feature flags</code> and <code>freeform</code> configurations. We recommend you
   *          create feature flag configurations to enable or disable new features and freeform
   *          configurations to distribute configurations to an application. When calling this API, enter
   *          one of the following values for <code>Type</code>:</p>
   *          <p>
   *             <code>AWS.AppConfig.FeatureFlags</code>
   *          </p>
   *          <p>
   *             <code>AWS.Freeform</code>
   *          </p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The Amazon Resource Name of the Key Management Service key to encrypt new configuration
   *          data versions in the AppConfig hosted configuration store. This attribute is only
   *          used for <code>hosted</code> configuration types. To encrypt data managed in other
   *          configuration stores, see the documentation for how to specify an KMS key
   *          for that particular service.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * <p>The Key Management Service key identifier (key ID, key alias, or key ARN) provided when
   *          the resource was created or updated.</p>
   * @public
   */
  KmsKeyIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface CreateConfigurationProfileRequest {
  /**
   * <p>The application ID.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>A name for the configuration profile.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the configuration profile.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A URI to locate the configuration. You can specify the following:</p>
   *          <ul>
   *             <li>
   *                <p>For the AppConfig hosted configuration store and for feature flags,
   *                specify <code>hosted</code>.</p>
   *             </li>
   *             <li>
   *                <p>For an Amazon Web Services Systems Manager Parameter Store parameter, specify either the parameter name in
   *                the format <code>ssm-parameter://<parameter name></code> or the ARN.</p>
   *             </li>
   *             <li>
   *                <p>For an Amazon Web Services
   *                CodePipeline pipeline, specify the URI in the following format:
   *                   <code>codepipeline</code>://<pipeline name>.</p>
   *             </li>
   *             <li>
   *                <p>For an Secrets Manager secret, specify the URI in the following format:
   *                   <code>secretsmanager</code>://<secret name>.</p>
   *             </li>
   *             <li>
   *                <p>For an Amazon S3 object, specify the URI in the following format:
   *                   <code>s3://<bucket>/<objectKey> </code>. Here is an example:
   *                      <code>s3://amzn-s3-demo-bucket/my-app/us-east-1/my-config.json</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an SSM document, specify either the document name in the format
   *                   <code>ssm-document://<document name></code> or the Amazon Resource Name
   *                (ARN).</p>
   *             </li>
   *          </ul>
   * @public
   */
  LocationUri: string | undefined;

  /**
   * <p>The ARN of an IAM role with permission to access the configuration at the specified
   *             <code>LocationUri</code>.</p>
   *          <important>
   *             <p>A retrieval role ARN is not required for configurations stored in CodePipeline or the AppConfig hosted configuration store. It is required for all other sources that
   *             store your configuration. </p>
   *          </important>
   * @public
   */
  RetrievalRoleArn?: string | undefined;

  /**
   * <p>A list of methods for validating the configuration.</p>
   * @public
   */
  Validators?: Validator[] | undefined;

  /**
   * <p>Metadata to assign to the configuration profile. Tags help organize and categorize your
   *             AppConfig resources. Each tag consists of a key and an optional value, both of
   *          which you define.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The type of configurations contained in the profile. AppConfig supports
   *             <code>feature flags</code> and <code>freeform</code> configurations. We recommend you
   *          create feature flag configurations to enable or disable new features and freeform
   *          configurations to distribute configurations to an application. When calling this API, enter
   *          one of the following values for <code>Type</code>:</p>
   *          <p>
   *             <code>AWS.AppConfig.FeatureFlags</code>
   *          </p>
   *          <p>
   *             <code>AWS.Freeform</code>
   *          </p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The identifier for an Key Management Service key to encrypt new configuration data
   *          versions in the AppConfig hosted configuration store. This attribute is only used
   *          for <code>hosted</code> configuration types. The identifier can be an KMS
   *          key ID, alias, or the Amazon Resource Name (ARN) of the key ID or alias. To encrypt data
   *          managed in other configuration stores, see the documentation for how to specify an KMS key for that particular service.</p>
   * @public
   */
  KmsKeyIdentifier?: string | undefined;
}

/**
 * <p>The requested resource could not be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  ResourceName?: string | undefined;
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
    this.Message = opts.Message;
    this.ResourceName = opts.ResourceName;
  }
}

/**
 * @public
 * @enum
 */
export const GrowthType = {
  EXPONENTIAL: "EXPONENTIAL",
  LINEAR: "LINEAR",
} as const;

/**
 * @public
 */
export type GrowthType = (typeof GrowthType)[keyof typeof GrowthType];

/**
 * @public
 * @enum
 */
export const ReplicateTo = {
  NONE: "NONE",
  SSM_DOCUMENT: "SSM_DOCUMENT",
} as const;

/**
 * @public
 */
export type ReplicateTo = (typeof ReplicateTo)[keyof typeof ReplicateTo];

/**
 * @public
 */
export interface CreateDeploymentStrategyRequest {
  /**
   * <p>A name for the deployment strategy.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the deployment strategy.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Total amount of time for a deployment to last.</p>
   * @public
   */
  DeploymentDurationInMinutes: number | undefined;

  /**
   * <p>Specifies the amount of time AppConfig monitors for Amazon CloudWatch alarms after the
   *          configuration has been deployed to 100% of its targets, before considering the deployment
   *          to be complete. If an alarm is triggered during this time, AppConfig rolls back
   *          the deployment. You must configure permissions for AppConfig to roll back based
   *          on CloudWatch alarms. For more information, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/getting-started-with-appconfig-cloudwatch-alarms-permissions.html">Configuring permissions for rollback based on Amazon CloudWatch alarms</a> in the
   *             <i>AppConfig User Guide</i>.</p>
   * @public
   */
  FinalBakeTimeInMinutes?: number | undefined;

  /**
   * <p>The percentage of targets to receive a deployed configuration during each
   *          interval.</p>
   * @public
   */
  GrowthFactor: number | undefined;

  /**
   * <p>The algorithm used to define how percentage grows over time. AppConfig
   *          supports the following growth types:</p>
   *          <p>
   *             <b>Linear</b>: For this type, AppConfig processes
   *          the deployment by dividing the total number of targets by the value specified for
   *             <code>Step percentage</code>. For example, a linear deployment that uses a <code>Step
   *             percentage</code> of 10 deploys the configuration to 10 percent of the hosts. After
   *          those deployments are complete, the system deploys the configuration to the next 10
   *          percent. This continues until 100% of the targets have successfully received the
   *          configuration.</p>
   *          <p>
   *             <b>Exponential</b>: For this type, AppConfig
   *          processes the deployment exponentially using the following formula: <code>G*(2^N)</code>.
   *          In this formula, <code>G</code> is the growth factor specified by the user and
   *             <code>N</code> is the number of steps until the configuration is deployed to all
   *          targets. For example, if you specify a growth factor of 2, then the system rolls out the
   *          configuration as follows:</p>
   *          <p>
   *             <code>2*(2^0)</code>
   *          </p>
   *          <p>
   *             <code>2*(2^1)</code>
   *          </p>
   *          <p>
   *             <code>2*(2^2)</code>
   *          </p>
   *          <p>Expressed numerically, the deployment rolls out as follows: 2% of the targets, 4% of the
   *          targets, 8% of the targets, and continues until the configuration has been deployed to all
   *          targets.</p>
   * @public
   */
  GrowthType?: GrowthType | undefined;

  /**
   * <p>Save the deployment strategy to a Systems Manager (SSM) document.</p>
   * @public
   */
  ReplicateTo?: ReplicateTo | undefined;

  /**
   * <p>Metadata to assign to the deployment strategy. Tags help organize and categorize your
   *             AppConfig resources. Each tag consists of a key and an optional value, both of
   *          which you define.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeploymentStrategy {
  /**
   * <p>The deployment strategy ID.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the deployment strategy.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the deployment strategy.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Total amount of time the deployment lasted.</p>
   * @public
   */
  DeploymentDurationInMinutes?: number | undefined;

  /**
   * <p>The algorithm used to define how percentage grew over time.</p>
   * @public
   */
  GrowthType?: GrowthType | undefined;

  /**
   * <p>The percentage of targets that received a deployed configuration during each
   *          interval.</p>
   * @public
   */
  GrowthFactor?: number | undefined;

  /**
   * <p>The amount of time that AppConfig monitored for alarms before considering the
   *          deployment to be complete and no longer eligible for automatic rollback.</p>
   * @public
   */
  FinalBakeTimeInMinutes?: number | undefined;

  /**
   * <p>Save the deployment strategy to a Systems Manager (SSM) document.</p>
   * @public
   */
  ReplicateTo?: ReplicateTo | undefined;
}

/**
 * <p>Amazon CloudWatch alarms to monitor during the deployment process.</p>
 * @public
 */
export interface Monitor {
  /**
   * <p>Amazon Resource Name (ARN) of the Amazon CloudWatch alarm.</p>
   * @public
   */
  AlarmArn: string | undefined;

  /**
   * <p>ARN of an Identity and Access Management (IAM) role for AppConfig to monitor
   *             <code>AlarmArn</code>.</p>
   * @public
   */
  AlarmRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentRequest {
  /**
   * <p>The application ID.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>A name for the environment.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the environment.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Amazon CloudWatch alarms to monitor during the deployment process.</p>
   * @public
   */
  Monitors?: Monitor[] | undefined;

  /**
   * <p>Metadata to assign to the environment. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which
   *          you define.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const EnvironmentState = {
  DEPLOYING: "DEPLOYING",
  READY_FOR_DEPLOYMENT: "READY_FOR_DEPLOYMENT",
  REVERTED: "REVERTED",
  ROLLED_BACK: "ROLLED_BACK",
  ROLLING_BACK: "ROLLING_BACK",
} as const;

/**
 * @public
 */
export type EnvironmentState = (typeof EnvironmentState)[keyof typeof EnvironmentState];

/**
 * @public
 */
export interface Environment {
  /**
   * <p>The application ID.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The environment ID.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the environment.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the environment.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The state of the environment. An environment can be in one of the following states:
   *             <code>READY_FOR_DEPLOYMENT</code>, <code>DEPLOYING</code>, <code>ROLLING_BACK</code>, or
   *             <code>ROLLED_BACK</code>
   *          </p>
   * @public
   */
  State?: EnvironmentState | undefined;

  /**
   * <p>Amazon CloudWatch alarms monitored during the deployment.</p>
   * @public
   */
  Monitors?: Monitor[] | undefined;
}

/**
 * <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>A value such as an Amazon Resource Name (ARN) or an Amazon Simple Notification Service topic entered
 *          in an extension when invoked. Parameter values are specified in an extension association.
 *          For more information about extensions, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Extending
 *             workflows</a> in the <i>AppConfig User Guide</i>.</p>
 * @public
 */
export interface Parameter {
  /**
   * <p>Information about the parameter.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A parameter value must be specified in the extension association.</p>
   * @public
   */
  Required?: boolean | undefined;

  /**
   * <p>Indicates whether this parameter's value can be supplied at the extension's action point
   *          instead of during extension association. Dynamic parameters can't be marked
   *             <code>Required</code>.</p>
   * @public
   */
  Dynamic?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateExtensionRequest {
  /**
   * <p>A name for the extension. Each extension name in your account must be unique. Extension
   *          versions use the same name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Information about the extension.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The actions defined in the extension.</p>
   * @public
   */
  Actions: Partial<Record<ActionPoint, Action[]>> | undefined;

  /**
   * <p>The parameters accepted by the extension. You specify parameter values when you
   *          associate the extension to an AppConfig resource by using the
   *             <code>CreateExtensionAssociation</code> API action. For Lambda extension
   *          actions, these parameters are included in the Lambda request object.</p>
   * @public
   */
  Parameters?: Record<string, Parameter> | undefined;

  /**
   * <p>Adds one or more tags for the specified extension. Tags are metadata that help you
   *          categorize resources in different ways, for example, by purpose, owner, or environment.
   *          Each tag consists of a key and an optional value, both of which you define. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>You can omit this field when you create an extension. When you create a new version,
   *          specify the most recent current version number. For example, you create version 3, enter 2
   *          for this field.</p>
   * @public
   */
  LatestVersionNumber?: number | undefined;
}

/**
 * @public
 */
export interface Extension {
  /**
   * <p>The system-generated ID of the extension.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The extension name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The extension version number.</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The system-generated Amazon Resource Name (ARN) for the extension.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Information about the extension.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The actions defined in the extension.</p>
   * @public
   */
  Actions?: Partial<Record<ActionPoint, Action[]>> | undefined;

  /**
   * <p>The parameters accepted by the extension. You specify parameter values when you
   *          associate the extension to an AppConfig resource by using the
   *             <code>CreateExtensionAssociation</code> API action. For Lambda extension
   *          actions, these parameters are included in the Lambda request object.</p>
   * @public
   */
  Parameters?: Record<string, Parameter> | undefined;
}

/**
 * @public
 */
export interface CreateExtensionAssociationRequest {
  /**
   * <p>The name, the ID, or the Amazon Resource Name (ARN) of the extension.</p>
   * @public
   */
  ExtensionIdentifier: string | undefined;

  /**
   * <p>The version number of the extension. If not specified, AppConfig uses the
   *          maximum version of the extension.</p>
   * @public
   */
  ExtensionVersionNumber?: number | undefined;

  /**
   * <p>The ARN of an application, configuration profile, or environment.</p>
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p>The parameter names and values defined in the extensions. Extension parameters marked
   *             <code>Required</code> must be entered for this field.</p>
   * @public
   */
  Parameters?: Record<string, string> | undefined;

  /**
   * <p>Adds one or more tags for the specified extension association. Tags are metadata that
   *          help you categorize resources in different ways, for example, by purpose, owner, or
   *          environment. Each tag consists of a key and an optional value, both of which you define.
   *       </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ExtensionAssociation {
  /**
   * <p>The system-generated ID for the association.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The ARN of the extension defined in the association.</p>
   * @public
   */
  ExtensionArn?: string | undefined;

  /**
   * <p>The ARNs of applications, configuration profiles, or environments defined in the
   *          association.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The system-generated Amazon Resource Name (ARN) for the extension.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The parameter names and values defined in the association.</p>
   * @public
   */
  Parameters?: Record<string, string> | undefined;

  /**
   * <p>The version number for the extension defined in the association.</p>
   * @public
   */
  ExtensionVersionNumber?: number | undefined;
}

/**
 * @public
 */
export interface CreateHostedConfigurationVersionRequest {
  /**
   * <p>The application ID.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The configuration profile ID.</p>
   * @public
   */
  ConfigurationProfileId: string | undefined;

  /**
   * <p>A description of the configuration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The configuration data, as bytes.</p>
   *          <note>
   *             <p>AppConfig accepts any type of data, including text formats like JSON or
   *             TOML, or binary formats like protocol buffers or compressed data.</p>
   *          </note>
   * @public
   */
  Content: Uint8Array | undefined;

  /**
   * <p>A standard MIME type describing the format of the configuration content. For more
   *          information, see <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">Content-Type</a>.</p>
   * @public
   */
  ContentType: string | undefined;

  /**
   * <p>An optional locking token used to prevent race conditions from overwriting configuration
   *          updates when creating a new version. To ensure your data is not overwritten when creating
   *          multiple hosted configuration versions in rapid succession, specify the version number of
   *          the latest hosted configuration version.</p>
   * @public
   */
  LatestVersionNumber?: number | undefined;

  /**
   * <p>An optional, user-defined label for the AppConfig hosted configuration
   *          version. This value must contain at least one non-numeric character. For example,
   *          "v2.2.0".</p>
   * @public
   */
  VersionLabel?: string | undefined;
}

/**
 * @public
 */
export interface HostedConfigurationVersion {
  /**
   * <p>The application ID.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The configuration profile ID.</p>
   * @public
   */
  ConfigurationProfileId?: string | undefined;

  /**
   * <p>The configuration version.</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>A description of the configuration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The content of the configuration or the configuration data.</p>
   * @public
   */
  Content?: Uint8Array | undefined;

  /**
   * <p>A standard MIME type describing the format of the configuration content. For more
   *          information, see <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">Content-Type</a>.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>A user-defined label for an AppConfig hosted configuration version.</p>
   * @public
   */
  VersionLabel?: string | undefined;

  /**
   * <p>The Amazon Resource Name of the Key Management Service key that was used to encrypt this
   *          specific version of the configuration data in the AppConfig hosted configuration
   *          store.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BytesMeasure = {
  KILOBYTES: "KILOBYTES",
} as const;

/**
 * @public
 */
export type BytesMeasure = (typeof BytesMeasure)[keyof typeof BytesMeasure];

/**
 * <p>The configuration size is too large.</p>
 * @public
 */
export class PayloadTooLargeException extends __BaseException {
  readonly name: "PayloadTooLargeException" = "PayloadTooLargeException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Measure?: BytesMeasure | undefined;
  Limit?: number | undefined;
  Size?: number | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PayloadTooLargeException, __BaseException>) {
    super({
      name: "PayloadTooLargeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PayloadTooLargeException.prototype);
    this.Message = opts.Message;
    this.Measure = opts.Measure;
    this.Limit = opts.Limit;
    this.Size = opts.Size;
  }
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * <p>The ID of the application to delete.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DeletionProtectionCheck = {
  ACCOUNT_DEFAULT: "ACCOUNT_DEFAULT",
  APPLY: "APPLY",
  BYPASS: "BYPASS",
} as const;

/**
 * @public
 */
export type DeletionProtectionCheck = (typeof DeletionProtectionCheck)[keyof typeof DeletionProtectionCheck];

/**
 * @public
 */
export interface DeleteConfigurationProfileRequest {
  /**
   * <p>The application ID that includes the configuration profile you want to delete.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The ID of the configuration profile you want to delete.</p>
   * @public
   */
  ConfigurationProfileId: string | undefined;

  /**
   * <p>A parameter to configure deletion protection. Deletion protection prevents a user from
   *          deleting a configuration profile if your application has called either <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html">GetLatestConfiguration</a> or  for the
   *          configuration profile during the specified interval. </p>
   *          <p>This parameter supports the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BYPASS</code>: Instructs AppConfig to bypass the deletion
   *                protection check and delete a configuration profile even if deletion protection would
   *                have otherwise prevented it.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>APPLY</code>: Instructs the deletion protection check to run, even if
   *                deletion protection is disabled at the account level. <code>APPLY</code> also forces
   *                the deletion protection check to run against resources created in the past hour,
   *                which are normally excluded from deletion protection checks. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACCOUNT_DEFAULT</code>: The default setting, which instructs AppConfig to implement the deletion protection value specified in the
   *                   <code>UpdateAccountSettings</code> API.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DeletionProtectionCheck?: DeletionProtectionCheck | undefined;
}

/**
 * @public
 */
export interface DeleteDeploymentStrategyRequest {
  /**
   * <p>The ID of the deployment strategy you want to delete.</p>
   * @public
   */
  DeploymentStrategyId: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentRequest {
  /**
   * <p>The ID of the environment that you want to delete.</p>
   * @public
   */
  EnvironmentId: string | undefined;

  /**
   * <p>The application ID that includes the environment that you want to delete.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>A parameter to configure deletion protection. Deletion protection prevents a user from
   *          deleting an environment if your application called either <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html">GetLatestConfiguration</a> or  in the
   *          environment during the specified interval. </p>
   *          <p>This parameter supports the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BYPASS</code>: Instructs AppConfig to bypass the deletion
   *                protection check and delete a configuration profile even if deletion protection would
   *                have otherwise prevented it. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>APPLY</code>: Instructs the deletion protection check to run, even if
   *                deletion protection is disabled at the account level. <code>APPLY</code> also forces
   *                the deletion protection check to run against resources created in the past hour,
   *                which are normally excluded from deletion protection checks.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACCOUNT_DEFAULT</code>: The default setting, which instructs AppConfig to implement the deletion protection value specified in the
   *                   <code>UpdateAccountSettings</code> API.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DeletionProtectionCheck?: DeletionProtectionCheck | undefined;
}

/**
 * @public
 */
export interface DeleteExtensionRequest {
  /**
   * <p>The name, ID, or Amazon Resource Name (ARN) of the extension you want to delete.</p>
   * @public
   */
  ExtensionIdentifier: string | undefined;

  /**
   * <p>A specific version of an extension to delete. If omitted, the highest version is
   *          deleted.</p>
   * @public
   */
  VersionNumber?: number | undefined;
}

/**
 * @public
 */
export interface DeleteExtensionAssociationRequest {
  /**
   * <p>The ID of the extension association to delete.</p>
   * @public
   */
  ExtensionAssociationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteHostedConfigurationVersionRequest {
  /**
   * <p>The application ID.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The configuration profile ID.</p>
   * @public
   */
  ConfigurationProfileId: string | undefined;

  /**
   * <p>The versions number to delete.</p>
   * @public
   */
  VersionNumber: number | undefined;
}

/**
 * @public
 */
export interface GetApplicationRequest {
  /**
   * <p>The ID of the application you want to get.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface Configuration {
  /**
   * <p>The content of the configuration or the configuration data.</p>
   *          <important>
   *             <p>The <code>Content</code> attribute only contains data if the system finds new or
   *             updated configuration data. If there is no new or updated data and
   *                <code>ClientConfigurationVersion</code> matches the version of the current
   *             configuration, AppConfig returns a <code>204 No Content</code> HTTP response
   *             code and the <code>Content</code> value will be empty.</p>
   *          </important>
   * @public
   */
  Content?: Uint8Array | undefined;

  /**
   * <p>The configuration version.</p>
   * @public
   */
  ConfigurationVersion?: string | undefined;

  /**
   * <p>A standard MIME type describing the format of the configuration content. For more
   *          information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">Content-Type</a>.</p>
   * @public
   */
  ContentType?: string | undefined;
}

/**
 * @public
 */
export interface GetConfigurationRequest {
  /**
   * <p>The application to get. Specify either the application name or the application
   *          ID.</p>
   * @public
   */
  Application: string | undefined;

  /**
   * <p>The environment to get. Specify either the environment name or the environment
   *          ID.</p>
   * @public
   */
  Environment: string | undefined;

  /**
   * <p>The configuration to get. Specify either the configuration name or the configuration
   *          ID.</p>
   * @public
   */
  Configuration: string | undefined;

  /**
   * <p>The clientId parameter in the following command is a unique, user-specified ID to
   *          identify the client for the configuration. This ID enables AppConfig to deploy
   *          the configuration in intervals, as defined in the deployment strategy. </p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>The configuration version returned in the most recent <a>GetConfiguration</a>
   *          response.</p>
   *          <important>
   *             <p>AppConfig uses the value of the <code>ClientConfigurationVersion</code>
   *             parameter to identify the configuration version on your clients. If you don’t send
   *                <code>ClientConfigurationVersion</code> with each call to <a>GetConfiguration</a>, your clients receive the current configuration. You are
   *             charged each time your clients receive a configuration.</p>
   *             <p>To avoid excess charges, we recommend you use the <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/StartConfigurationSession.html">StartConfigurationSession</a> and <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/GetLatestConfiguration.html">GetLatestConfiguration</a> APIs, which track the client configuration version on
   *             your behalf. If you choose to continue using <a>GetConfiguration</a>, we
   *             recommend that you include the <code>ClientConfigurationVersion</code> value with every
   *             call to <a>GetConfiguration</a>. The value to use for
   *                <code>ClientConfigurationVersion</code> comes from the
   *                <code>ConfigurationVersion</code> attribute returned by <a>GetConfiguration</a> when there is new or updated data, and should be saved
   *             for subsequent calls to <a>GetConfiguration</a>.</p>
   *          </important>
   *          <p>For more information about working with configurations, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/retrieving-feature-flags.html">Retrieving feature flags and
   *             configuration data in AppConfig</a> in the <i>AppConfig
   *             User Guide</i>.</p>
   * @public
   */
  ClientConfigurationVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetConfigurationProfileRequest {
  /**
   * <p>The ID of the application that includes the configuration profile you want to
   *          get.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The ID of the configuration profile that you want to get.</p>
   * @public
   */
  ConfigurationProfileId: string | undefined;
}

/**
 * <p>An extension that was invoked during a deployment.</p>
 * @public
 */
export interface AppliedExtension {
  /**
   * <p>The system-generated ID of the extension.</p>
   * @public
   */
  ExtensionId?: string | undefined;

  /**
   * <p>The system-generated ID for the association.</p>
   * @public
   */
  ExtensionAssociationId?: string | undefined;

  /**
   * <p>The extension version number.</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>One or more parameters for the actions called by the extension.</p>
   * @public
   */
  Parameters?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const DeploymentEventType = {
  BAKE_TIME_STARTED: "BAKE_TIME_STARTED",
  DEPLOYMENT_COMPLETED: "DEPLOYMENT_COMPLETED",
  DEPLOYMENT_STARTED: "DEPLOYMENT_STARTED",
  PERCENTAGE_UPDATED: "PERCENTAGE_UPDATED",
  REVERT_COMPLETED: "REVERT_COMPLETED",
  ROLLBACK_COMPLETED: "ROLLBACK_COMPLETED",
  ROLLBACK_STARTED: "ROLLBACK_STARTED",
} as const;

/**
 * @public
 */
export type DeploymentEventType = (typeof DeploymentEventType)[keyof typeof DeploymentEventType];

/**
 * @public
 * @enum
 */
export const TriggeredBy = {
  APPCONFIG: "APPCONFIG",
  CLOUDWATCH_ALARM: "CLOUDWATCH_ALARM",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  USER: "USER",
} as const;

/**
 * @public
 */
export type TriggeredBy = (typeof TriggeredBy)[keyof typeof TriggeredBy];

/**
 * <p>An object that describes a deployment event.</p>
 * @public
 */
export interface DeploymentEvent {
  /**
   * <p>The type of deployment event. Deployment event types include the start, stop, or
   *          completion of a deployment; a percentage update; the start or stop of a bake period; and
   *          the start or completion of a rollback.</p>
   * @public
   */
  EventType?: DeploymentEventType | undefined;

  /**
   * <p>The entity that triggered the deployment event. Events can be triggered by a user,
   *             AppConfig, an Amazon CloudWatch alarm, or an internal error.</p>
   * @public
   */
  TriggeredBy?: TriggeredBy | undefined;

  /**
   * <p>A description of the deployment event. Descriptions include, but are not limited to, the
   *          following:</p>
   *          <ul>
   *             <li>
   *                <p>The Amazon Web Services account or the Amazon CloudWatch alarm ARN that initiated a rollback.</p>
   *             </li>
   *             <li>
   *                <p>The percentage of hosts that received the deployment.</p>
   *             </li>
   *             <li>
   *                <p>A recommendation to attempt a new deployment (in the case of an internal
   *                error).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The list of extensions that were invoked as part of the deployment.</p>
   * @public
   */
  ActionInvocations?: ActionInvocation[] | undefined;

  /**
   * <p>The date and time the event occurred.</p>
   * @public
   */
  OccurredAt?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const DeploymentState = {
  BAKING: "BAKING",
  COMPLETE: "COMPLETE",
  DEPLOYING: "DEPLOYING",
  REVERTED: "REVERTED",
  ROLLED_BACK: "ROLLED_BACK",
  ROLLING_BACK: "ROLLING_BACK",
  VALIDATING: "VALIDATING",
} as const;

/**
 * @public
 */
export type DeploymentState = (typeof DeploymentState)[keyof typeof DeploymentState];

/**
 * @public
 */
export interface Deployment {
  /**
   * <p>The ID of the application that was deployed.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The ID of the environment that was deployed.</p>
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * <p>The ID of the deployment strategy that was deployed.</p>
   * @public
   */
  DeploymentStrategyId?: string | undefined;

  /**
   * <p>The ID of the configuration profile that was deployed.</p>
   * @public
   */
  ConfigurationProfileId?: string | undefined;

  /**
   * <p>The sequence number of the deployment.</p>
   * @public
   */
  DeploymentNumber?: number | undefined;

  /**
   * <p>The name of the configuration.</p>
   * @public
   */
  ConfigurationName?: string | undefined;

  /**
   * <p>Information about the source location of the configuration.</p>
   * @public
   */
  ConfigurationLocationUri?: string | undefined;

  /**
   * <p>The configuration version that was deployed.</p>
   * @public
   */
  ConfigurationVersion?: string | undefined;

  /**
   * <p>The description of the deployment.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Total amount of time the deployment lasted.</p>
   * @public
   */
  DeploymentDurationInMinutes?: number | undefined;

  /**
   * <p>The algorithm used to define how percentage grew over time.</p>
   * @public
   */
  GrowthType?: GrowthType | undefined;

  /**
   * <p>The percentage of targets to receive a deployed configuration during each
   *          interval.</p>
   * @public
   */
  GrowthFactor?: number | undefined;

  /**
   * <p>The amount of time that AppConfig monitored for alarms before considering the
   *          deployment to be complete and no longer eligible for automatic rollback.</p>
   * @public
   */
  FinalBakeTimeInMinutes?: number | undefined;

  /**
   * <p>The state of the deployment.</p>
   * @public
   */
  State?: DeploymentState | undefined;

  /**
   * <p>A list containing all events related to a deployment. The most recent events are
   *          displayed first.</p>
   * @public
   */
  EventLog?: DeploymentEvent[] | undefined;

  /**
   * <p>The percentage of targets for which the deployment is available.</p>
   * @public
   */
  PercentageComplete?: number | undefined;

  /**
   * <p>The time the deployment started.</p>
   * @public
   */
  StartedAt?: Date | undefined;

  /**
   * <p>The time the deployment completed. </p>
   * @public
   */
  CompletedAt?: Date | undefined;

  /**
   * <p>A list of extensions that were processed as part of the deployment. The extensions that
   *          were previously associated to the configuration profile, environment, or the application
   *          when <code>StartDeployment</code> was called.</p>
   * @public
   */
  AppliedExtensions?: AppliedExtension[] | undefined;

  /**
   * <p>The Amazon Resource Name of the Key Management Service key used to encrypt configuration
   *          data. You can encrypt secrets stored in Secrets Manager, Amazon Simple Storage Service
   *          (Amazon S3) objects encrypted with SSE-KMS, or secure string parameters stored in Amazon Web Services Systems Manager
   *          Parameter Store. </p>
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * <p>The Key Management Service key identifier (key ID, key alias, or key ARN) provided when
   *          the resource was created or updated.</p>
   * @public
   */
  KmsKeyIdentifier?: string | undefined;

  /**
   * <p>A user-defined label for an AppConfig hosted configuration version.</p>
   * @public
   */
  VersionLabel?: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentRequest {
  /**
   * <p>The ID of the application that includes the deployment you want to get. </p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The ID of the environment that includes the deployment you want to get. </p>
   * @public
   */
  EnvironmentId: string | undefined;

  /**
   * <p>The sequence number of the deployment.</p>
   * @public
   */
  DeploymentNumber: number | undefined;
}

/**
 * @public
 */
export interface GetDeploymentStrategyRequest {
  /**
   * <p>The ID of the deployment strategy to get.</p>
   * @public
   */
  DeploymentStrategyId: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentRequest {
  /**
   * <p>The ID of the application that includes the environment you want to get.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The ID of the environment that you want to get.</p>
   * @public
   */
  EnvironmentId: string | undefined;
}

/**
 * @public
 */
export interface GetExtensionRequest {
  /**
   * <p>The name, the ID, or the Amazon Resource Name (ARN) of the extension.</p>
   * @public
   */
  ExtensionIdentifier: string | undefined;

  /**
   * <p>The extension version number. If no version number was defined, AppConfig uses
   *          the highest version.</p>
   * @public
   */
  VersionNumber?: number | undefined;
}

/**
 * @public
 */
export interface GetExtensionAssociationRequest {
  /**
   * <p>The extension association ID to get.</p>
   * @public
   */
  ExtensionAssociationId: string | undefined;
}

/**
 * @public
 */
export interface GetHostedConfigurationVersionRequest {
  /**
   * <p>The application ID.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The configuration profile ID.</p>
   * @public
   */
  ConfigurationProfileId: string | undefined;

  /**
   * <p>The version.</p>
   * @public
   */
  VersionNumber: number | undefined;
}

/**
 * @public
 */
export interface Applications {
  /**
   * <p>The elements from this collection.</p>
   * @public
   */
  Items?: Application[] | undefined;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to start the list. Next token is a pagination token generated by AppConfig to describe what page the previous List call ended on. For the first List
   *          request, the nextToken should not be set. On subsequent calls, the nextToken parameter
   *          should be set to the previous responses nextToken value. Use this token to get the next set
   *          of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A summary of a configuration profile.</p>
 * @public
 */
export interface ConfigurationProfileSummary {
  /**
   * <p>The application ID.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The ID of the configuration profile.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the configuration profile.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The URI location of the configuration.</p>
   * @public
   */
  LocationUri?: string | undefined;

  /**
   * <p>The types of validators in the configuration profile.</p>
   * @public
   */
  ValidatorTypes?: ValidatorType[] | undefined;

  /**
   * <p>The type of configurations contained in the profile. AppConfig supports
   *             <code>feature flags</code> and <code>freeform</code> configurations. We recommend you
   *          create feature flag configurations to enable or disable new features and freeform
   *          configurations to distribute configurations to an application. When calling this API, enter
   *          one of the following values for <code>Type</code>:</p>
   *          <p>
   *             <code>AWS.AppConfig.FeatureFlags</code>
   *          </p>
   *          <p>
   *             <code>AWS.Freeform</code>
   *          </p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * @public
 */
export interface ConfigurationProfiles {
  /**
   * <p>The elements from this collection.</p>
   * @public
   */
  Items?: ConfigurationProfileSummary[] | undefined;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationProfilesRequest {
  /**
   * <p>The application ID.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A filter based on the type of configurations that the configuration profile contains. A
   *          configuration can be a feature flag or a freeform configuration.</p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>Information about the deployment.</p>
 * @public
 */
export interface DeploymentSummary {
  /**
   * <p>The sequence number of the deployment.</p>
   * @public
   */
  DeploymentNumber?: number | undefined;

  /**
   * <p>The name of the configuration.</p>
   * @public
   */
  ConfigurationName?: string | undefined;

  /**
   * <p>The version of the configuration.</p>
   * @public
   */
  ConfigurationVersion?: string | undefined;

  /**
   * <p>Total amount of time the deployment lasted.</p>
   * @public
   */
  DeploymentDurationInMinutes?: number | undefined;

  /**
   * <p>The algorithm used to define how percentage grows over time.</p>
   * @public
   */
  GrowthType?: GrowthType | undefined;

  /**
   * <p>The percentage of targets to receive a deployed configuration during each
   *          interval.</p>
   * @public
   */
  GrowthFactor?: number | undefined;

  /**
   * <p>The amount of time that AppConfig monitors for alarms before considering the
   *          deployment to be complete and no longer eligible for automatic rollback.</p>
   * @public
   */
  FinalBakeTimeInMinutes?: number | undefined;

  /**
   * <p>The state of the deployment.</p>
   * @public
   */
  State?: DeploymentState | undefined;

  /**
   * <p>The percentage of targets for which the deployment is available.</p>
   * @public
   */
  PercentageComplete?: number | undefined;

  /**
   * <p>Time the deployment started.</p>
   * @public
   */
  StartedAt?: Date | undefined;

  /**
   * <p>Time the deployment completed.</p>
   * @public
   */
  CompletedAt?: Date | undefined;

  /**
   * <p>A user-defined label for an AppConfig hosted configuration version.</p>
   * @public
   */
  VersionLabel?: string | undefined;
}

/**
 * @public
 */
export interface Deployments {
  /**
   * <p>The elements from this collection.</p>
   * @public
   */
  Items?: DeploymentSummary[] | undefined;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDeploymentsRequest {
  /**
   * <p>The application ID.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The environment ID.</p>
   * @public
   */
  EnvironmentId: string | undefined;

  /**
   * <p>The maximum number of items that may be returned for this call. If there are items that
   *          have not yet been returned, the response will include a non-null <code>NextToken</code>
   *          that you can provide in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned by a prior call to this operation indicating the next set of results
   *          to be returned. If not specified, the operation will return the first set of
   *          results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DeploymentStrategies {
  /**
   * <p>The elements from this collection.</p>
   * @public
   */
  Items?: DeploymentStrategy[] | undefined;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDeploymentStrategiesRequest {
  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface Environments {
  /**
   * <p>The elements from this collection.</p>
   * @public
   */
  Items?: Environment[] | undefined;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsRequest {
  /**
   * <p>The application ID.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Information about an association between an extension and an AppConfig
 *          resource such as an application, environment, or configuration profile. Call
 *             <code>GetExtensionAssociation</code> to get more information about an
 *          association.</p>
 * @public
 */
export interface ExtensionAssociationSummary {
  /**
   * <p>The extension association ID. This ID is used to call other
   *             <code>ExtensionAssociation</code> API actions such as
   *             <code>GetExtensionAssociation</code> or <code>DeleteExtensionAssociation</code>.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The system-generated Amazon Resource Name (ARN) for the extension.</p>
   * @public
   */
  ExtensionArn?: string | undefined;

  /**
   * <p>The ARNs of applications, configuration profiles, or environments defined in the
   *          association.</p>
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * @public
 */
export interface ExtensionAssociations {
  /**
   * <p>The list of extension associations. Each item represents an extension association to an
   *          application, environment, or configuration profile. </p>
   * @public
   */
  Items?: ExtensionAssociationSummary[] | undefined;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExtensionAssociationsRequest {
  /**
   * <p>The ARN of an application, configuration profile, or environment.</p>
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * <p>The name, the ID, or the Amazon Resource Name (ARN) of the extension.</p>
   * @public
   */
  ExtensionIdentifier?: string | undefined;

  /**
   * <p>The version number for the extension defined in the association.</p>
   * @public
   */
  ExtensionVersionNumber?: number | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to start the list. Use this token to get the next set of results or pass null to
   *          get the first set of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Information about an extension. Call <code>GetExtension</code> to get more information
 *          about an extension.</p>
 * @public
 */
export interface ExtensionSummary {
  /**
   * <p>The system-generated ID of the extension.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The extension name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The extension version number.</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The system-generated Amazon Resource Name (ARN) for the extension.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Information about the extension.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface Extensions {
  /**
   * <p>The list of available extensions. The list includes Amazon Web Services authored and
   *          user-created extensions.</p>
   * @public
   */
  Items?: ExtensionSummary[] | undefined;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExtensionsRequest {
  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The extension name.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Information about the configuration.</p>
 * @public
 */
export interface HostedConfigurationVersionSummary {
  /**
   * <p>The application ID.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The configuration profile ID.</p>
   * @public
   */
  ConfigurationProfileId?: string | undefined;

  /**
   * <p>The configuration version.</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>A description of the configuration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A standard MIME type describing the format of the configuration content. For more
   *          information, see <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">Content-Type</a>.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>A user-defined label for an AppConfig hosted configuration version.</p>
   * @public
   */
  VersionLabel?: string | undefined;

  /**
   * <p>The Amazon Resource Name of the Key Management Service key that was used to encrypt this
   *          specific version of the configuration data in the AppConfig hosted configuration
   *          store.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface HostedConfigurationVersions {
  /**
   * <p>The elements from this collection.</p>
   * @public
   */
  Items?: HostedConfigurationVersionSummary[] | undefined;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHostedConfigurationVersionsRequest {
  /**
   * <p>The application ID.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The configuration profile ID.</p>
   * @public
   */
  ConfigurationProfileId: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. If <code>MaxResults</code> is not
   *          provided in the call, AppConfig returns the maximum of 50. The call also returns
   *          a token that you can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An optional filter that can be used to specify the version label of an AppConfig hosted configuration version. This parameter supports filtering by prefix using a
   *          wildcard, for example "v2*". If you don't specify an asterisk at the end of the value, only
   *          an exact match is returned.</p>
   * @public
   */
  VersionLabel?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The resource ARN.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ResourceTags {
  /**
   * <p>Metadata to assign to AppConfig resources. Tags help organize and categorize
   *          your AppConfig resources. Each tag consists of a key and an optional value, both
   *          of which you define.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartDeploymentRequest {
  /**
   * <p>The application ID.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The environment ID.</p>
   * @public
   */
  EnvironmentId: string | undefined;

  /**
   * <p>The deployment strategy ID.</p>
   * @public
   */
  DeploymentStrategyId: string | undefined;

  /**
   * <p>The configuration profile ID.</p>
   * @public
   */
  ConfigurationProfileId: string | undefined;

  /**
   * <p>The configuration version to deploy. If deploying an AppConfig hosted
   *          configuration version, you can specify either the version number or version label. For all
   *          other configurations, you must specify the version number.</p>
   * @public
   */
  ConfigurationVersion: string | undefined;

  /**
   * <p>A description of the deployment.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Metadata to assign to the deployment. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which
   *          you define.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The KMS key identifier (key ID, key alias, or key ARN). AppConfig uses this ID to encrypt the configuration data using a customer managed key. </p>
   * @public
   */
  KmsKeyIdentifier?: string | undefined;

  /**
   * <p>A map of dynamic extension parameter names to values to pass to associated extensions
   *          with <code>PRE_START_DEPLOYMENT</code> actions.</p>
   * @public
   */
  DynamicExtensionParameters?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StopDeploymentRequest {
  /**
   * <p>The application ID.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The environment ID.</p>
   * @public
   */
  EnvironmentId: string | undefined;

  /**
   * <p>The sequence number of the deployment.</p>
   * @public
   */
  DeploymentNumber: number | undefined;

  /**
   * <p>A Boolean that enables AppConfig to rollback a <code>COMPLETED</code>
   *          deployment to the previous configuration version. This action moves the deployment to a
   *          status of <code>REVERTED</code>.</p>
   * @public
   */
  AllowRevert?: boolean | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource for which to retrieve tags.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The key-value string map. The valid character set is [a-zA-Z+-=._:/]. The tag key can be
   *          up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to
   *          256 characters.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource for which to remove tags.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys to delete.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAccountSettingsRequest {
  /**
   * <p>A parameter to configure deletion protection. Deletion protection prevents a user from
   *          deleting a configuration profile or an environment if AppConfig has called either
   *             <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html">GetLatestConfiguration</a> or  for the
   *          configuration profile or from the environment during the specified interval. The default
   *          interval for <code>ProtectionPeriodInMinutes</code> is 60.</p>
   * @public
   */
  DeletionProtection?: DeletionProtectionSettings | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * <p>The application ID.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The name of the application.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the application.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConfigurationProfileRequest {
  /**
   * <p>The application ID.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The ID of the configuration profile.</p>
   * @public
   */
  ConfigurationProfileId: string | undefined;

  /**
   * <p>The name of the configuration profile.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the configuration profile.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ARN of an IAM role with permission to access the configuration at the specified
   *             <code>LocationUri</code>.</p>
   *          <important>
   *             <p>A retrieval role ARN is not required for configurations stored in CodePipeline or the AppConfig hosted configuration store. It is required for all other sources that
   *             store your configuration. </p>
   *          </important>
   * @public
   */
  RetrievalRoleArn?: string | undefined;

  /**
   * <p>A list of methods for validating the configuration.</p>
   * @public
   */
  Validators?: Validator[] | undefined;

  /**
   * <p>The identifier for a Key Management Service key to encrypt new configuration data
   *          versions in the AppConfig hosted configuration store. This attribute is only used
   *          for <code>hosted</code> configuration types. The identifier can be an KMS
   *          key ID, alias, or the Amazon Resource Name (ARN) of the key ID or alias. To encrypt data
   *          managed in other configuration stores, see the documentation for how to specify an KMS key for that particular service.</p>
   * @public
   */
  KmsKeyIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDeploymentStrategyRequest {
  /**
   * <p>The deployment strategy ID.</p>
   * @public
   */
  DeploymentStrategyId: string | undefined;

  /**
   * <p>A description of the deployment strategy.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Total amount of time for a deployment to last.</p>
   * @public
   */
  DeploymentDurationInMinutes?: number | undefined;

  /**
   * <p>The amount of time that AppConfig monitors for alarms before considering the
   *          deployment to be complete and no longer eligible for automatic rollback.</p>
   * @public
   */
  FinalBakeTimeInMinutes?: number | undefined;

  /**
   * <p>The percentage of targets to receive a deployed configuration during each
   *          interval.</p>
   * @public
   */
  GrowthFactor?: number | undefined;

  /**
   * <p>The algorithm used to define how percentage grows over time. AppConfig
   *          supports the following growth types:</p>
   *          <p>
   *             <b>Linear</b>: For this type, AppConfig processes
   *          the deployment by increments of the growth factor evenly distributed over the deployment
   *          time. For example, a linear deployment that uses a growth factor of 20 initially makes the
   *          configuration available to 20 percent of the targets. After 1/5th of the deployment time
   *          has passed, the system updates the percentage to 40 percent. This continues until 100% of
   *          the targets are set to receive the deployed configuration.</p>
   *          <p>
   *             <b>Exponential</b>: For this type, AppConfig
   *          processes the deployment exponentially using the following formula: <code>G*(2^N)</code>.
   *          In this formula, <code>G</code> is the growth factor specified by the user and
   *             <code>N</code> is the number of steps until the configuration is deployed to all
   *          targets. For example, if you specify a growth factor of 2, then the system rolls out the
   *          configuration as follows:</p>
   *          <p>
   *             <code>2*(2^0)</code>
   *          </p>
   *          <p>
   *             <code>2*(2^1)</code>
   *          </p>
   *          <p>
   *             <code>2*(2^2)</code>
   *          </p>
   *          <p>Expressed numerically, the deployment rolls out as follows: 2% of the targets, 4% of the
   *          targets, 8% of the targets, and continues until the configuration has been deployed to all
   *          targets.</p>
   * @public
   */
  GrowthType?: GrowthType | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentRequest {
  /**
   * <p>The application ID.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The environment ID.</p>
   * @public
   */
  EnvironmentId: string | undefined;

  /**
   * <p>The name of the environment.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the environment.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Amazon CloudWatch alarms to monitor during the deployment process.</p>
   * @public
   */
  Monitors?: Monitor[] | undefined;
}

/**
 * @public
 */
export interface UpdateExtensionRequest {
  /**
   * <p>The name, the ID, or the Amazon Resource Name (ARN) of the extension.</p>
   * @public
   */
  ExtensionIdentifier: string | undefined;

  /**
   * <p>Information about the extension.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The actions defined in the extension.</p>
   * @public
   */
  Actions?: Partial<Record<ActionPoint, Action[]>> | undefined;

  /**
   * <p>One or more parameters for the actions called by the extension.</p>
   * @public
   */
  Parameters?: Record<string, Parameter> | undefined;

  /**
   * <p>The extension version number.</p>
   * @public
   */
  VersionNumber?: number | undefined;
}

/**
 * @public
 */
export interface UpdateExtensionAssociationRequest {
  /**
   * <p>The system-generated ID for the association.</p>
   * @public
   */
  ExtensionAssociationId: string | undefined;

  /**
   * <p>The parameter names and values defined in the extension.</p>
   * @public
   */
  Parameters?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ValidateConfigurationRequest {
  /**
   * <p>The application ID.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The configuration profile ID.</p>
   * @public
   */
  ConfigurationProfileId: string | undefined;

  /**
   * <p>The version of the configuration to validate.</p>
   * @public
   */
  ConfigurationVersion: string | undefined;
}

/**
 * @internal
 */
export const ValidatorFilterSensitiveLog = (obj: Validator): any => ({
  ...obj,
  ...(obj.Content && { Content: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConfigurationProfileFilterSensitiveLog = (obj: ConfigurationProfile): any => ({
  ...obj,
  ...(obj.Validators && { Validators: obj.Validators.map((item) => ValidatorFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateConfigurationProfileRequestFilterSensitiveLog = (obj: CreateConfigurationProfileRequest): any => ({
  ...obj,
  ...(obj.Validators && { Validators: obj.Validators.map((item) => ValidatorFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateHostedConfigurationVersionRequestFilterSensitiveLog = (
  obj: CreateHostedConfigurationVersionRequest
): any => ({
  ...obj,
  ...(obj.Content && { Content: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const HostedConfigurationVersionFilterSensitiveLog = (obj: HostedConfigurationVersion): any => ({
  ...obj,
  ...(obj.Content && { Content: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConfigurationFilterSensitiveLog = (obj: Configuration): any => ({
  ...obj,
  ...(obj.Content && { Content: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartDeploymentRequestFilterSensitiveLog = (obj: StartDeploymentRequest): any => ({
  ...obj,
  ...(obj.DynamicExtensionParameters && { DynamicExtensionParameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateConfigurationProfileRequestFilterSensitiveLog = (obj: UpdateConfigurationProfileRequest): any => ({
  ...obj,
  ...(obj.Validators && { Validators: obj.Validators.map((item) => ValidatorFilterSensitiveLog(item)) }),
});
