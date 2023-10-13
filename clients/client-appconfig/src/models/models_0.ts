// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { AppConfigServiceException as __BaseException } from "./AppConfigServiceException";

/**
 * @public
 * <p>An action defines the tasks that the extension performs during the AppConfig
 *          workflow. Each action includes an action point such as
 *             <code>ON_CREATE_HOSTED_CONFIGURATION</code>, <code>PRE_DEPLOYMENT</code>, or
 *             <code>ON_DEPLOYMENT</code>. Each action also includes a name, a URI to an Lambda function, and an Amazon Resource Name (ARN) for an Identity and Access Management
 *          assume role. You specify the name, URI, and ARN for each <i>action point</i>
 *          defined in the extension. You can specify the following actions for an extension:</p>
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
 */
export interface Action {
  /**
   * @public
   * <p>The action name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Information about the action.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The extension URI associated to the action point in the extension definition. The URI
   *          can be an Amazon Resource Name (ARN) for one of the following: an Lambda
   *          function, an Amazon Simple Queue Service queue, an Amazon Simple Notification Service topic, or the Amazon EventBridge default event bus.</p>
   */
  Uri?: string;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) for an Identity and Access Management assume role.</p>
   */
  RoleArn?: string;
}

/**
 * @public
 * <p>An extension that was invoked as part of a deployment event.</p>
 */
export interface ActionInvocation {
  /**
   * @public
   * <p>The name, the ID, or the Amazon Resource Name (ARN) of the extension.</p>
   */
  ExtensionIdentifier?: string;

  /**
   * @public
   * <p>The name of the action.</p>
   */
  ActionName?: string;

  /**
   * @public
   * <p>The extension URI associated to the action point in the extension definition. The URI
   *          can be an Amazon Resource Name (ARN) for one of the following: an Lambda
   *          function, an Amazon Simple Queue Service queue, an Amazon Simple Notification Service topic, or the Amazon EventBridge default event bus.</p>
   */
  Uri?: string;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) for an Identity and Access Management assume role.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The error message when an extension invocation fails.</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>The error code when an extension invocation fails.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>A system-generated ID for this invocation.</p>
   */
  InvocationId?: string;
}

/**
 * @public
 * @enum
 */
export const ActionPoint = {
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
   * @public
   * <p>The application ID.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The application name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the application.</p>
   */
  Description?: string;
}

/**
 * @public
 * <p>Detailed information about the bad request exception error when creating a hosted
 *          configuration version.</p>
 */
export interface InvalidConfigurationDetail {
  /**
   * @public
   * <p>The invalid or out-of-range validation constraint in your JSON schema that failed
   *          validation.</p>
   */
  Constraint?: string;

  /**
   * @public
   * <p>Location of the validation constraint in the configuration JSON schema that failed
   *          validation.</p>
   */
  Location?: string;

  /**
   * @public
   * <p>The reason for an invalid configuration error.</p>
   */
  Reason?: string;

  /**
   * @public
   * <p>The type of error for an invalid configuration.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>Details about an error with Lambda when a synchronous extension
   *          experiences an error during an invocation.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Detailed information about the input that failed to satisfy the constraints specified by
 *          a call.</p>
 */
export type BadRequestDetails = BadRequestDetails.InvalidConfigurationMember | BadRequestDetails.$UnknownMember;

/**
 * @public
 */
export namespace BadRequestDetails {
  /**
   * @public
   * <p>Detailed information about the bad request exception error when creating a hosted
   *          configuration version.</p>
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
 * @public
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  Reason?: BadRequestReason;
  /**
   * @public
   * <p>Detailed information about the input that failed to satisfy the constraints specified by
   *          a call.</p>
   */
  Details?: BadRequestDetails;
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
   * @public
   * <p>A name for the application.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A description of the application.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Metadata to assign to the application. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which
   *          you define.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>There was an internal failure in the AppConfig service.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
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
 * @public
 * <p>The number of one more AppConfig resources exceeds the maximum allowed. Verify that your
 *          environment doesn't exceed the following service quotas:</p>
 *          <p>Applications: 100 max</p>
 *          <p>Deployment strategies: 20 max</p>
 *          <p>Configuration profiles: 100 max per application</p>
 *          <p>Environments: 20 max per application</p>
 *          <p>To resolve this issue, you can delete one or more resources and try again. Or, you can
 *          request a quota increase. For more information about quotas and to request an increase, see
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/appconfig.html#limits_appconfig">Service quotas for AppConfig</a> in the Amazon Web Services General Reference.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>A validator provides a syntactic or semantic check to ensure the configuration that you
 *          want to deploy functions as intended. To validate your application configuration data, you
 *          provide a schema or an Amazon Web Services Lambda function that runs against the configuration. The
 *          configuration deployment or update can only proceed when the configuration data is
 *          valid.</p>
 */
export interface Validator {
  /**
   * @public
   * <p>AppConfig supports validators of type <code>JSON_SCHEMA</code> and
   *             <code>LAMBDA</code>
   *          </p>
   */
  Type: ValidatorType | undefined;

  /**
   * @public
   * <p>Either the JSON Schema content or the Amazon Resource Name (ARN) of an Lambda
   *          function.</p>
   */
  Content: string | undefined;
}

/**
 * @public
 */
export interface ConfigurationProfile {
  /**
   * @public
   * <p>The application ID.</p>
   */
  ApplicationId?: string;

  /**
   * @public
   * <p>The configuration profile ID.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The name of the configuration profile.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The configuration profile description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The URI location of the configuration.</p>
   */
  LocationUri?: string;

  /**
   * @public
   * <p>The ARN of an IAM role with permission to access the configuration at the specified
   *             <code>LocationUri</code>.</p>
   */
  RetrievalRoleArn?: string;

  /**
   * @public
   * <p>A list of methods for validating the configuration.</p>
   */
  Validators?: Validator[];

  /**
   * @public
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
   */
  Type?: string;

  /**
   * @public
   * <p>The Amazon Resource Name of the Key Management Service key to encrypt new configuration data
   *          versions in the AppConfig hosted configuration store. This
   *          attribute is only used for <code>hosted</code> configuration types. To encrypt data managed
   *          in other configuration stores, see the documentation for how to specify an KMS key for that particular service.</p>
   */
  KmsKeyArn?: string;

  /**
   * @public
   * <p>The Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated.</p>
   */
  KmsKeyIdentifier?: string;
}

/**
 * @public
 */
export interface CreateConfigurationProfileRequest {
  /**
   * @public
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>A name for the configuration profile.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A description of the configuration profile.</p>
   */
  Description?: string;

  /**
   * @public
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
   *                   <code>s3://my-bucket/my-app/us-east-1/my-config.json</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an SSM document, specify either the document name in the format
   *                   <code>ssm-document://<document name></code> or the Amazon Resource Name
   *                (ARN).</p>
   *             </li>
   *          </ul>
   */
  LocationUri: string | undefined;

  /**
   * @public
   * <p>The ARN of an IAM role with permission to access the configuration at the specified
   *             <code>LocationUri</code>.</p>
   *          <important>
   *             <p>A retrieval role ARN is not required for configurations stored in the AppConfig hosted configuration store. It is required for all other sources that
   *             store your configuration. </p>
   *          </important>
   */
  RetrievalRoleArn?: string;

  /**
   * @public
   * <p>A list of methods for validating the configuration.</p>
   */
  Validators?: Validator[];

  /**
   * @public
   * <p>Metadata to assign to the configuration profile. Tags help organize and categorize your
   *             AppConfig resources. Each tag consists of a key and an optional value, both of
   *          which you define.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
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
   */
  Type?: string;

  /**
   * @public
   * <p>The identifier for an Key Management Service key to encrypt new configuration
   *          data versions in the AppConfig hosted configuration store. This attribute is only
   *          used for <code>hosted</code> configuration types. The identifier can be an KMS key ID, alias, or the Amazon Resource Name (ARN) of the key ID or alias.
   *          To encrypt data managed in other configuration stores, see the documentation for how to
   *          specify an KMS key for that particular service.</p>
   */
  KmsKeyIdentifier?: string;
}

/**
 * @public
 * <p>The requested resource could not be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  ResourceName?: string;
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
   * @public
   * <p>A name for the deployment strategy.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A description of the deployment strategy.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Total amount of time for a deployment to last.</p>
   */
  DeploymentDurationInMinutes: number | undefined;

  /**
   * @public
   * <p>Specifies the amount of time AppConfig monitors for Amazon CloudWatch alarms after the
   *          configuration has been deployed to 100% of its targets, before considering the deployment
   *          to be complete. If an alarm is triggered during this time, AppConfig rolls back
   *          the deployment. You must configure permissions for AppConfig to roll back based
   *          on CloudWatch alarms. For more information, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/getting-started-with-appconfig-cloudwatch-alarms-permissions.html">Configuring permissions for rollback based on Amazon CloudWatch alarms</a> in the
   *             <i>AppConfig User Guide</i>.</p>
   */
  FinalBakeTimeInMinutes?: number;

  /**
   * @public
   * <p>The percentage of targets to receive a deployed configuration during each
   *          interval.</p>
   */
  GrowthFactor: number | undefined;

  /**
   * @public
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
   */
  GrowthType?: GrowthType;

  /**
   * @public
   * <p>Save the deployment strategy to a Systems Manager (SSM) document.</p>
   */
  ReplicateTo?: ReplicateTo;

  /**
   * @public
   * <p>Metadata to assign to the deployment strategy. Tags help organize and categorize your
   *             AppConfig resources. Each tag consists of a key and an optional value, both of
   *          which you define.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DeploymentStrategy {
  /**
   * @public
   * <p>The deployment strategy ID.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The name of the deployment strategy.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the deployment strategy.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Total amount of time the deployment lasted.</p>
   */
  DeploymentDurationInMinutes?: number;

  /**
   * @public
   * <p>The algorithm used to define how percentage grew over time.</p>
   */
  GrowthType?: GrowthType;

  /**
   * @public
   * <p>The percentage of targets that received a deployed configuration during each
   *          interval.</p>
   */
  GrowthFactor?: number;

  /**
   * @public
   * <p>The amount of time that AppConfig monitored for alarms before considering the
   *          deployment to be complete and no longer eligible for automatic rollback.</p>
   */
  FinalBakeTimeInMinutes?: number;

  /**
   * @public
   * <p>Save the deployment strategy to a Systems Manager (SSM) document.</p>
   */
  ReplicateTo?: ReplicateTo;
}

/**
 * @public
 * <p>Amazon CloudWatch alarms to monitor during the deployment process.</p>
 */
export interface Monitor {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the Amazon CloudWatch alarm.</p>
   */
  AlarmArn: string | undefined;

  /**
   * @public
   * <p>ARN of an Identity and Access Management (IAM) role for AppConfig to monitor
   *             <code>AlarmArn</code>.</p>
   */
  AlarmRoleArn?: string;
}

/**
 * @public
 */
export interface CreateEnvironmentRequest {
  /**
   * @public
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>A name for the environment.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A description of the environment.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Amazon CloudWatch alarms to monitor during the deployment process.</p>
   */
  Monitors?: Monitor[];

  /**
   * @public
   * <p>Metadata to assign to the environment. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which
   *          you define.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const EnvironmentState = {
  DEPLOYING: "DEPLOYING",
  READY_FOR_DEPLOYMENT: "READY_FOR_DEPLOYMENT",
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
   * @public
   * <p>The application ID.</p>
   */
  ApplicationId?: string;

  /**
   * @public
   * <p>The environment ID.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The name of the environment.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the environment.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The state of the environment. An environment can be in one of the following states:
   *             <code>READY_FOR_DEPLOYMENT</code>, <code>DEPLOYING</code>, <code>ROLLING_BACK</code>, or
   *             <code>ROLLED_BACK</code>
   *          </p>
   */
  State?: EnvironmentState;

  /**
   * @public
   * <p>Amazon CloudWatch alarms monitored during the deployment.</p>
   */
  Monitors?: Monitor[];
}

/**
 * @public
 * <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>A value such as an Amazon Resource Name (ARN) or an Amazon Simple Notification Service topic entered
 *          in an extension when invoked. Parameter values are specified in an extension association.
 *          For more information about extensions, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Working with
 *                AppConfig extensions</a> in the
 *          <i>AppConfig User Guide</i>.</p>
 */
export interface Parameter {
  /**
   * @public
   * <p>Information about the parameter.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A parameter value must be specified in the extension association.</p>
   */
  Required?: boolean;
}

/**
 * @public
 */
export interface CreateExtensionRequest {
  /**
   * @public
   * <p>A name for the extension. Each extension name in your account must be unique. Extension
   *          versions use the same name.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Information about the extension.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The actions defined in the extension.</p>
   */
  Actions: Record<ActionPoint, Action[]> | undefined;

  /**
   * @public
   * <p>The parameters accepted by the extension. You specify parameter values when you
   *          associate the extension to an AppConfig resource by using the
   *             <code>CreateExtensionAssociation</code> API action. For Lambda extension
   *          actions, these parameters are included in the Lambda request object.</p>
   */
  Parameters?: Record<string, Parameter>;

  /**
   * @public
   * <p>Adds one or more tags for the specified extension. Tags are metadata that help you
   *          categorize resources in different ways, for example, by purpose, owner, or environment.
   *          Each tag consists of a key and an optional value, both of which you define. </p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>You can omit this field when you create an extension. When you create a new version,
   *          specify the most recent current version number. For example, you create version 3, enter 2
   *          for this field.</p>
   */
  LatestVersionNumber?: number;
}

/**
 * @public
 */
export interface Extension {
  /**
   * @public
   * <p>The system-generated ID of the extension.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The extension name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The extension version number.</p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>The system-generated Amazon Resource Name (ARN) for the extension.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>Information about the extension.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The actions defined in the extension.</p>
   */
  Actions?: Record<ActionPoint, Action[]>;

  /**
   * @public
   * <p>The parameters accepted by the extension. You specify parameter values when you
   *          associate the extension to an AppConfig resource by using the
   *             <code>CreateExtensionAssociation</code> API action. For Lambda extension
   *          actions, these parameters are included in the Lambda request object.</p>
   */
  Parameters?: Record<string, Parameter>;
}

/**
 * @public
 */
export interface CreateExtensionAssociationRequest {
  /**
   * @public
   * <p>The name, the ID, or the Amazon Resource Name (ARN) of the extension.</p>
   */
  ExtensionIdentifier: string | undefined;

  /**
   * @public
   * <p>The version number of the extension. If not specified, AppConfig uses the
   *          maximum version of the extension.</p>
   */
  ExtensionVersionNumber?: number;

  /**
   * @public
   * <p>The ARN of an application, configuration profile, or environment.</p>
   */
  ResourceIdentifier: string | undefined;

  /**
   * @public
   * <p>The parameter names and values defined in the extensions. Extension parameters marked
   *             <code>Required</code> must be entered for this field.</p>
   */
  Parameters?: Record<string, string>;

  /**
   * @public
   * <p>Adds one or more tags for the specified extension association. Tags are metadata that
   *          help you categorize resources in different ways, for example, by purpose, owner, or
   *          environment. Each tag consists of a key and an optional value, both of which you define.
   *       </p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ExtensionAssociation {
  /**
   * @public
   * <p>The system-generated ID for the association.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The ARN of the extension defined in the association.</p>
   */
  ExtensionArn?: string;

  /**
   * @public
   * <p>The ARNs of applications, configuration profiles, or environments defined in the
   *          association.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The system-generated Amazon Resource Name (ARN) for the extension.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The parameter names and values defined in the association.</p>
   */
  Parameters?: Record<string, string>;

  /**
   * @public
   * <p>The version number for the extension defined in the association.</p>
   */
  ExtensionVersionNumber?: number;
}

/**
 * @public
 */
export interface CreateHostedConfigurationVersionRequest {
  /**
   * @public
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The configuration profile ID.</p>
   */
  ConfigurationProfileId: string | undefined;

  /**
   * @public
   * <p>A description of the configuration.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The content of the configuration or the configuration data.</p>
   */
  Content: Uint8Array | undefined;

  /**
   * @public
   * <p>A standard MIME type describing the format of the configuration content. For more
   *          information, see <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">Content-Type</a>.</p>
   */
  ContentType: string | undefined;

  /**
   * @public
   * <p>An optional locking token used to prevent race conditions from overwriting configuration
   *          updates when creating a new version. To ensure your data is not overwritten when creating
   *          multiple hosted configuration versions in rapid succession, specify the version number of
   *          the latest hosted configuration version.</p>
   */
  LatestVersionNumber?: number;

  /**
   * @public
   * <p>An optional, user-defined label for the AppConfig hosted configuration
   *          version. This value must contain at least one non-numeric character. For example,
   *          "v2.2.0".</p>
   */
  VersionLabel?: string;
}

/**
 * @public
 */
export interface HostedConfigurationVersion {
  /**
   * @public
   * <p>The application ID.</p>
   */
  ApplicationId?: string;

  /**
   * @public
   * <p>The configuration profile ID.</p>
   */
  ConfigurationProfileId?: string;

  /**
   * @public
   * <p>The configuration version.</p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>A description of the configuration.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The content of the configuration or the configuration data.</p>
   */
  Content?: Uint8Array;

  /**
   * @public
   * <p>A standard MIME type describing the format of the configuration content. For more
   *          information, see <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">Content-Type</a>.</p>
   */
  ContentType?: string;

  /**
   * @public
   * <p>A user-defined label for an AppConfig hosted configuration version.</p>
   */
  VersionLabel?: string;

  /**
   * @public
   * <p>The Amazon Resource Name of the Key Management Service key that was used to encrypt this
   *          specific version of the configuration data in the AppConfig hosted configuration
   *          store.</p>
   */
  KmsKeyArn?: string;
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
 * @public
 * <p>The configuration size is too large.</p>
 */
export class PayloadTooLargeException extends __BaseException {
  readonly name: "PayloadTooLargeException" = "PayloadTooLargeException";
  readonly $fault: "client" = "client";
  Message?: string;
  Measure?: BytesMeasure;
  Limit?: number;
  Size?: number;
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
   * @public
   * <p>The ID of the application to delete.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfigurationProfileRequest {
  /**
   * @public
   * <p>The application ID that includes the configuration profile you want to delete.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The ID of the configuration profile you want to delete.</p>
   */
  ConfigurationProfileId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeploymentStrategyRequest {
  /**
   * @public
   * <p>The ID of the deployment strategy you want to delete.</p>
   */
  DeploymentStrategyId: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentRequest {
  /**
   * @public
   * <p>The application ID that includes the environment that you want to delete.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The ID of the environment that you want to delete.</p>
   */
  EnvironmentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteExtensionRequest {
  /**
   * @public
   * <p>The name, ID, or Amazon Resource Name (ARN) of the extension you want to delete.</p>
   */
  ExtensionIdentifier: string | undefined;

  /**
   * @public
   * <p>A specific version of an extension to delete. If omitted, the highest version is
   *          deleted.</p>
   */
  VersionNumber?: number;
}

/**
 * @public
 */
export interface DeleteExtensionAssociationRequest {
  /**
   * @public
   * <p>The ID of the extension association to delete.</p>
   */
  ExtensionAssociationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteHostedConfigurationVersionRequest {
  /**
   * @public
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The configuration profile ID.</p>
   */
  ConfigurationProfileId: string | undefined;

  /**
   * @public
   * <p>The versions number to delete.</p>
   */
  VersionNumber: number | undefined;
}

/**
 * @public
 */
export interface GetApplicationRequest {
  /**
   * @public
   * <p>The ID of the application you want to get.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface Configuration {
  /**
   * @public
   * <p>The content of the configuration or the configuration data.</p>
   *          <important>
   *             <p>The <code>Content</code> attribute only contains data if the system finds new or
   *             updated configuration data. If there is no new or updated data and
   *                <code>ClientConfigurationVersion</code> matches the version of the current
   *             configuration, AppConfig returns a <code>204 No Content</code> HTTP response
   *             code and the <code>Content</code> value will be empty.</p>
   *          </important>
   */
  Content?: Uint8Array;

  /**
   * @public
   * <p>The configuration version.</p>
   */
  ConfigurationVersion?: string;

  /**
   * @public
   * <p>A standard MIME type describing the format of the configuration content. For more
   *          information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">Content-Type</a>.</p>
   */
  ContentType?: string;
}

/**
 * @public
 */
export interface GetConfigurationRequest {
  /**
   * @public
   * <p>The application to get. Specify either the application name or the application
   *          ID.</p>
   */
  Application: string | undefined;

  /**
   * @public
   * <p>The environment to get. Specify either the environment name or the environment
   *          ID.</p>
   */
  Environment: string | undefined;

  /**
   * @public
   * <p>The configuration to get. Specify either the configuration name or the configuration
   *          ID.</p>
   */
  Configuration: string | undefined;

  /**
   * @public
   * <p>The clientId parameter in the following command is a unique, user-specified ID to
   *          identify the client for the configuration. This ID enables AppConfig to deploy
   *          the configuration in intervals, as defined in the deployment strategy. </p>
   */
  ClientId: string | undefined;

  /**
   * @public
   * <p>The configuration version returned in the most recent <code>GetConfiguration</code>
   *          response.</p>
   *          <important>
   *             <p>AppConfig uses the value of the <code>ClientConfigurationVersion</code>
   *             parameter to identify the configuration version on your clients. If you don’t send
   *                <code>ClientConfigurationVersion</code> with each call to
   *                <code>GetConfiguration</code>, your clients receive the current configuration. You
   *             are charged each time your clients receive a configuration.</p>
   *             <p>To avoid excess charges, we recommend you use the <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/StartConfigurationSession.html">StartConfigurationSession</a> and <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/GetLatestConfiguration.html">GetLatestConfiguration</a> APIs, which track the client configuration version on
   *             your behalf. If you choose to continue using <code>GetConfiguration</code>, we recommend
   *             that you include the <code>ClientConfigurationVersion</code> value with every call to
   *                <code>GetConfiguration</code>. The value to use for
   *                <code>ClientConfigurationVersion</code> comes from the
   *                <code>ConfigurationVersion</code> attribute returned by <code>GetConfiguration</code>
   *             when there is new or updated data, and should be saved for subsequent calls to
   *                <code>GetConfiguration</code>.</p>
   *          </important>
   *          <p>For more information about working with configurations, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-the-configuration.html">Retrieving the
   *             Configuration</a> in the <i>AppConfig User Guide</i>.</p>
   */
  ClientConfigurationVersion?: string;
}

/**
 * @public
 */
export interface GetConfigurationProfileRequest {
  /**
   * @public
   * <p>The ID of the application that includes the configuration profile you want to
   *          get.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The ID of the configuration profile that you want to get.</p>
   */
  ConfigurationProfileId: string | undefined;
}

/**
 * @public
 * <p>An extension that was invoked during a deployment.</p>
 */
export interface AppliedExtension {
  /**
   * @public
   * <p>The system-generated ID of the extension.</p>
   */
  ExtensionId?: string;

  /**
   * @public
   * <p>The system-generated ID for the association.</p>
   */
  ExtensionAssociationId?: string;

  /**
   * @public
   * <p>The extension version number.</p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>One or more parameters for the actions called by the extension.</p>
   */
  Parameters?: Record<string, string>;
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
 * @public
 * <p>An object that describes a deployment event.</p>
 */
export interface DeploymentEvent {
  /**
   * @public
   * <p>The type of deployment event. Deployment event types include the start, stop, or
   *          completion of a deployment; a percentage update; the start or stop of a bake period; and
   *          the start or completion of a rollback.</p>
   */
  EventType?: DeploymentEventType;

  /**
   * @public
   * <p>The entity that triggered the deployment event. Events can be triggered by a user,
   *             AppConfig, an Amazon CloudWatch alarm, or an internal error.</p>
   */
  TriggeredBy?: TriggeredBy;

  /**
   * @public
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
   */
  Description?: string;

  /**
   * @public
   * <p>The list of extensions that were invoked as part of the deployment.</p>
   */
  ActionInvocations?: ActionInvocation[];

  /**
   * @public
   * <p>The date and time the event occurred.</p>
   */
  OccurredAt?: Date;
}

/**
 * @public
 * @enum
 */
export const DeploymentState = {
  BAKING: "BAKING",
  COMPLETE: "COMPLETE",
  DEPLOYING: "DEPLOYING",
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
   * @public
   * <p>The ID of the application that was deployed.</p>
   */
  ApplicationId?: string;

  /**
   * @public
   * <p>The ID of the environment that was deployed.</p>
   */
  EnvironmentId?: string;

  /**
   * @public
   * <p>The ID of the deployment strategy that was deployed.</p>
   */
  DeploymentStrategyId?: string;

  /**
   * @public
   * <p>The ID of the configuration profile that was deployed.</p>
   */
  ConfigurationProfileId?: string;

  /**
   * @public
   * <p>The sequence number of the deployment.</p>
   */
  DeploymentNumber?: number;

  /**
   * @public
   * <p>The name of the configuration.</p>
   */
  ConfigurationName?: string;

  /**
   * @public
   * <p>Information about the source location of the configuration.</p>
   */
  ConfigurationLocationUri?: string;

  /**
   * @public
   * <p>The configuration version that was deployed.</p>
   */
  ConfigurationVersion?: string;

  /**
   * @public
   * <p>The description of the deployment.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Total amount of time the deployment lasted.</p>
   */
  DeploymentDurationInMinutes?: number;

  /**
   * @public
   * <p>The algorithm used to define how percentage grew over time.</p>
   */
  GrowthType?: GrowthType;

  /**
   * @public
   * <p>The percentage of targets to receive a deployed configuration during each
   *          interval.</p>
   */
  GrowthFactor?: number;

  /**
   * @public
   * <p>The amount of time that AppConfig monitored for alarms before considering the
   *          deployment to be complete and no longer eligible for automatic rollback.</p>
   */
  FinalBakeTimeInMinutes?: number;

  /**
   * @public
   * <p>The state of the deployment.</p>
   */
  State?: DeploymentState;

  /**
   * @public
   * <p>A list containing all events related to a deployment. The most recent events are
   *          displayed first.</p>
   */
  EventLog?: DeploymentEvent[];

  /**
   * @public
   * <p>The percentage of targets for which the deployment is available.</p>
   */
  PercentageComplete?: number;

  /**
   * @public
   * <p>The time the deployment started.</p>
   */
  StartedAt?: Date;

  /**
   * @public
   * <p>The time the deployment completed. </p>
   */
  CompletedAt?: Date;

  /**
   * @public
   * <p>A list of extensions that were processed as part of the deployment. The extensions that
   *          were previously associated to the configuration profile, environment, or the application
   *          when <code>StartDeployment</code> was called.</p>
   */
  AppliedExtensions?: AppliedExtension[];

  /**
   * @public
   * <p>The Amazon Resource Name of the Key Management Service key used to encrypt configuration
   *          data. You can encrypt secrets stored in Secrets Manager, Amazon Simple Storage Service
   *          (Amazon S3) objects encrypted with SSE-KMS, or secure string parameters stored in Amazon Web Services Systems Manager
   *          Parameter Store. </p>
   */
  KmsKeyArn?: string;

  /**
   * @public
   * <p>The Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated.</p>
   */
  KmsKeyIdentifier?: string;

  /**
   * @public
   * <p>A user-defined label for an AppConfig hosted configuration version.</p>
   */
  VersionLabel?: string;
}

/**
 * @public
 */
export interface GetDeploymentRequest {
  /**
   * @public
   * <p>The ID of the application that includes the deployment you want to get. </p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The ID of the environment that includes the deployment you want to get. </p>
   */
  EnvironmentId: string | undefined;

  /**
   * @public
   * <p>The sequence number of the deployment.</p>
   */
  DeploymentNumber: number | undefined;
}

/**
 * @public
 */
export interface GetDeploymentStrategyRequest {
  /**
   * @public
   * <p>The ID of the deployment strategy to get.</p>
   */
  DeploymentStrategyId: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentRequest {
  /**
   * @public
   * <p>The ID of the application that includes the environment you want to get.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The ID of the environment that you want to get.</p>
   */
  EnvironmentId: string | undefined;
}

/**
 * @public
 */
export interface GetExtensionRequest {
  /**
   * @public
   * <p>The name, the ID, or the Amazon Resource Name (ARN) of the extension.</p>
   */
  ExtensionIdentifier: string | undefined;

  /**
   * @public
   * <p>The extension version number. If no version number was defined, AppConfig uses
   *          the highest version.</p>
   */
  VersionNumber?: number;
}

/**
 * @public
 */
export interface GetExtensionAssociationRequest {
  /**
   * @public
   * <p>The extension association ID to get.</p>
   */
  ExtensionAssociationId: string | undefined;
}

/**
 * @public
 */
export interface GetHostedConfigurationVersionRequest {
  /**
   * @public
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The configuration profile ID.</p>
   */
  ConfigurationProfileId: string | undefined;

  /**
   * @public
   * <p>The version.</p>
   */
  VersionNumber: number | undefined;
}

/**
 * @public
 */
export interface Applications {
  /**
   * @public
   * <p>The elements from this collection.</p>
   */
  Items?: Application[];

  /**
   * @public
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * @public
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token to start the list. Next token is a pagination token generated by AppConfig to describe what page the previous List call ended on. For the first List
   *          request, the nextToken should not be set. On subsequent calls, the nextToken parameter
   *          should be set to the previous responses nextToken value. Use this token to get the next set
   *          of results. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A summary of a configuration profile.</p>
 */
export interface ConfigurationProfileSummary {
  /**
   * @public
   * <p>The application ID.</p>
   */
  ApplicationId?: string;

  /**
   * @public
   * <p>The ID of the configuration profile.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The name of the configuration profile.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The URI location of the configuration.</p>
   */
  LocationUri?: string;

  /**
   * @public
   * <p>The types of validators in the configuration profile.</p>
   */
  ValidatorTypes?: ValidatorType[];

  /**
   * @public
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
   */
  Type?: string;
}

/**
 * @public
 */
export interface ConfigurationProfiles {
  /**
   * @public
   * <p>The elements from this collection.</p>
   */
  Items?: ConfigurationProfileSummary[];

  /**
   * @public
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListConfigurationProfilesRequest {
  /**
   * @public
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A filter based on the type of configurations that the configuration profile contains. A
   *          configuration can be a feature flag or a freeform configuration.</p>
   */
  Type?: string;
}

/**
 * @public
 * <p>Information about the deployment.</p>
 */
export interface DeploymentSummary {
  /**
   * @public
   * <p>The sequence number of the deployment.</p>
   */
  DeploymentNumber?: number;

  /**
   * @public
   * <p>The name of the configuration.</p>
   */
  ConfigurationName?: string;

  /**
   * @public
   * <p>The version of the configuration.</p>
   */
  ConfigurationVersion?: string;

  /**
   * @public
   * <p>Total amount of time the deployment lasted.</p>
   */
  DeploymentDurationInMinutes?: number;

  /**
   * @public
   * <p>The algorithm used to define how percentage grows over time.</p>
   */
  GrowthType?: GrowthType;

  /**
   * @public
   * <p>The percentage of targets to receive a deployed configuration during each
   *          interval.</p>
   */
  GrowthFactor?: number;

  /**
   * @public
   * <p>The amount of time that AppConfig monitors for alarms before considering the
   *          deployment to be complete and no longer eligible for automatic rollback.</p>
   */
  FinalBakeTimeInMinutes?: number;

  /**
   * @public
   * <p>The state of the deployment.</p>
   */
  State?: DeploymentState;

  /**
   * @public
   * <p>The percentage of targets for which the deployment is available.</p>
   */
  PercentageComplete?: number;

  /**
   * @public
   * <p>Time the deployment started.</p>
   */
  StartedAt?: Date;

  /**
   * @public
   * <p>Time the deployment completed.</p>
   */
  CompletedAt?: Date;

  /**
   * @public
   * <p>A user-defined label for an AppConfig hosted configuration version.</p>
   */
  VersionLabel?: string;
}

/**
 * @public
 */
export interface Deployments {
  /**
   * @public
   * <p>The elements from this collection.</p>
   */
  Items?: DeploymentSummary[];

  /**
   * @public
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDeploymentsRequest {
  /**
   * @public
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The environment ID.</p>
   */
  EnvironmentId: string | undefined;

  /**
   * @public
   * <p>The maximum number of items that may be returned for this call. If there are items that
   *          have not yet been returned, the response will include a non-null <code>NextToken</code>
   *          that you can provide in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned by a prior call to this operation indicating the next set of results
   *          to be returned. If not specified, the operation will return the first set of
   *          results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DeploymentStrategies {
  /**
   * @public
   * <p>The elements from this collection.</p>
   */
  Items?: DeploymentStrategy[];

  /**
   * @public
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDeploymentStrategiesRequest {
  /**
   * @public
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface Environments {
  /**
   * @public
   * <p>The elements from this collection.</p>
   */
  Items?: Environment[];

  /**
   * @public
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListEnvironmentsRequest {
  /**
   * @public
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Information about an association between an extension and an AppConfig
 *          resource such as an application, environment, or configuration profile. Call
 *             <code>GetExtensionAssociation</code> to get more information about an
 *          association.</p>
 */
export interface ExtensionAssociationSummary {
  /**
   * @public
   * <p>The extension association ID. This ID is used to call other
   *             <code>ExtensionAssociation</code> API actions such as
   *             <code>GetExtensionAssociation</code> or <code>DeleteExtensionAssociation</code>.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The system-generated Amazon Resource Name (ARN) for the extension.</p>
   */
  ExtensionArn?: string;

  /**
   * @public
   * <p>The ARNs of applications, configuration profiles, or environments defined in the
   *          association.</p>
   */
  ResourceArn?: string;
}

/**
 * @public
 */
export interface ExtensionAssociations {
  /**
   * @public
   * <p>The list of extension associations. Each item represents an extension association to an
   *          application, environment, or configuration profile. </p>
   */
  Items?: ExtensionAssociationSummary[];

  /**
   * @public
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListExtensionAssociationsRequest {
  /**
   * @public
   * <p>The ARN of an application, configuration profile, or environment.</p>
   */
  ResourceIdentifier?: string;

  /**
   * @public
   * <p>The name, the ID, or the Amazon Resource Name (ARN) of the extension.</p>
   */
  ExtensionIdentifier?: string;

  /**
   * @public
   * <p>The version number for the extension defined in the association.</p>
   */
  ExtensionVersionNumber?: number;

  /**
   * @public
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token to start the list. Use this token to get the next set of results or pass null to
   *          get the first set of results. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Information about an extension. Call <code>GetExtension</code> to get more information
 *          about an extension.</p>
 */
export interface ExtensionSummary {
  /**
   * @public
   * <p>The system-generated ID of the extension.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The extension name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The extension version number.</p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>The system-generated Amazon Resource Name (ARN) for the extension.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>Information about the extension.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface Extensions {
  /**
   * @public
   * <p>The list of available extensions. The list includes Amazon Web Services authored and
   *          user-created extensions.</p>
   */
  Items?: ExtensionSummary[];

  /**
   * @public
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListExtensionsRequest {
  /**
   * @public
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The extension name.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>Information about the configuration.</p>
 */
export interface HostedConfigurationVersionSummary {
  /**
   * @public
   * <p>The application ID.</p>
   */
  ApplicationId?: string;

  /**
   * @public
   * <p>The configuration profile ID.</p>
   */
  ConfigurationProfileId?: string;

  /**
   * @public
   * <p>The configuration version.</p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>A description of the configuration.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A standard MIME type describing the format of the configuration content. For more
   *          information, see <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">Content-Type</a>.</p>
   */
  ContentType?: string;

  /**
   * @public
   * <p>A user-defined label for an AppConfig hosted configuration version.</p>
   */
  VersionLabel?: string;

  /**
   * @public
   * <p>The Amazon Resource Name of the Key Management Service key that was used to encrypt this
   *          specific version of the configuration data in the AppConfig hosted configuration
   *          store.</p>
   */
  KmsKeyArn?: string;
}

/**
 * @public
 */
export interface HostedConfigurationVersions {
  /**
   * @public
   * <p>The elements from this collection.</p>
   */
  Items?: HostedConfigurationVersionSummary[];

  /**
   * @public
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListHostedConfigurationVersionsRequest {
  /**
   * @public
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The configuration profile ID.</p>
   */
  ConfigurationProfileId: string | undefined;

  /**
   * @public
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An optional filter that can be used to specify the version label of an AppConfig hosted configuration version. This parameter supports filtering by prefix using a
   *          wildcard, for example "v2*". If you don't specify an asterisk at the end of the value, only
   *          an exact match is returned.</p>
   */
  VersionLabel?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The resource ARN.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ResourceTags {
  /**
   * @public
   * <p>Metadata to assign to AppConfig resources. Tags help organize and categorize
   *          your AppConfig resources. Each tag consists of a key and an optional value, both
   *          of which you define.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartDeploymentRequest {
  /**
   * @public
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The environment ID.</p>
   */
  EnvironmentId: string | undefined;

  /**
   * @public
   * <p>The deployment strategy ID.</p>
   */
  DeploymentStrategyId: string | undefined;

  /**
   * @public
   * <p>The configuration profile ID.</p>
   */
  ConfigurationProfileId: string | undefined;

  /**
   * @public
   * <p>The configuration version to deploy. If deploying an AppConfig hosted
   *          configuration version, you can specify either the version number or version label. For all
   *          other configurations, you must specify the version number.</p>
   */
  ConfigurationVersion: string | undefined;

  /**
   * @public
   * <p>A description of the deployment.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Metadata to assign to the deployment. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which
   *          you define.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The KMS key identifier (key ID, key alias, or key ARN). AppConfig uses this ID to encrypt the configuration data using a customer managed key. </p>
   */
  KmsKeyIdentifier?: string;
}

/**
 * @public
 */
export interface StopDeploymentRequest {
  /**
   * @public
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The environment ID.</p>
   */
  EnvironmentId: string | undefined;

  /**
   * @public
   * <p>The sequence number of the deployment.</p>
   */
  DeploymentNumber: number | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource for which to retrieve tags.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The key-value string map. The valid character set is [a-zA-Z+-=._:/]. The tag key can be
   *          up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to
   *          256 characters.</p>
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource for which to remove tags.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The tag keys to delete.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * @public
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The name of the application.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A description of the application.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateConfigurationProfileRequest {
  /**
   * @public
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The ID of the configuration profile.</p>
   */
  ConfigurationProfileId: string | undefined;

  /**
   * @public
   * <p>The name of the configuration profile.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A description of the configuration profile.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ARN of an IAM role with permission to access the configuration at the specified
   *             <code>LocationUri</code>.</p>
   */
  RetrievalRoleArn?: string;

  /**
   * @public
   * <p>A list of methods for validating the configuration.</p>
   */
  Validators?: Validator[];

  /**
   * @public
   * <p>The identifier for a Key Management Service key to encrypt new configuration
   *          data versions in the AppConfig hosted configuration store. This attribute is only
   *          used for <code>hosted</code> configuration types. The identifier can be an KMS key ID, alias, or the Amazon Resource Name (ARN) of the key ID or alias.
   *          To encrypt data managed in other configuration stores, see the documentation for how to
   *          specify an KMS key for that particular service.</p>
   */
  KmsKeyIdentifier?: string;
}

/**
 * @public
 */
export interface UpdateDeploymentStrategyRequest {
  /**
   * @public
   * <p>The deployment strategy ID.</p>
   */
  DeploymentStrategyId: string | undefined;

  /**
   * @public
   * <p>A description of the deployment strategy.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Total amount of time for a deployment to last.</p>
   */
  DeploymentDurationInMinutes?: number;

  /**
   * @public
   * <p>The amount of time that AppConfig monitors for alarms before considering the
   *          deployment to be complete and no longer eligible for automatic rollback.</p>
   */
  FinalBakeTimeInMinutes?: number;

  /**
   * @public
   * <p>The percentage of targets to receive a deployed configuration during each
   *          interval.</p>
   */
  GrowthFactor?: number;

  /**
   * @public
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
   */
  GrowthType?: GrowthType;
}

/**
 * @public
 */
export interface UpdateEnvironmentRequest {
  /**
   * @public
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The environment ID.</p>
   */
  EnvironmentId: string | undefined;

  /**
   * @public
   * <p>The name of the environment.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A description of the environment.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Amazon CloudWatch alarms to monitor during the deployment process.</p>
   */
  Monitors?: Monitor[];
}

/**
 * @public
 */
export interface UpdateExtensionRequest {
  /**
   * @public
   * <p>The name, the ID, or the Amazon Resource Name (ARN) of the extension.</p>
   */
  ExtensionIdentifier: string | undefined;

  /**
   * @public
   * <p>Information about the extension.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The actions defined in the extension.</p>
   */
  Actions?: Record<ActionPoint, Action[]>;

  /**
   * @public
   * <p>One or more parameters for the actions called by the extension.</p>
   */
  Parameters?: Record<string, Parameter>;

  /**
   * @public
   * <p>The extension version number.</p>
   */
  VersionNumber?: number;
}

/**
 * @public
 */
export interface UpdateExtensionAssociationRequest {
  /**
   * @public
   * <p>The system-generated ID for the association.</p>
   */
  ExtensionAssociationId: string | undefined;

  /**
   * @public
   * <p>The parameter names and values defined in the extension.</p>
   */
  Parameters?: Record<string, string>;
}

/**
 * @public
 */
export interface ValidateConfigurationRequest {
  /**
   * @public
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The configuration profile ID.</p>
   */
  ConfigurationProfileId: string | undefined;

  /**
   * @public
   * <p>The version of the configuration to validate.</p>
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
export const UpdateConfigurationProfileRequestFilterSensitiveLog = (obj: UpdateConfigurationProfileRequest): any => ({
  ...obj,
  ...(obj.Validators && { Validators: obj.Validators.map((item) => ValidatorFilterSensitiveLog(item)) }),
});
