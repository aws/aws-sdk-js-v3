// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { AppConfigServiceException as __BaseException } from "./AppConfigServiceException";

/**
 * <p>An action defines the tasks the extension performs during the AppConfig
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
   * <p>The action name.</p>
   */
  Name?: string;

  /**
   * <p>Information about the action.</p>
   */
  Description?: string;

  /**
   * <p>The extension URI associated to the action point in the extension definition. The URI
   *          can be an Amazon Resource Name (ARN) for one of the following: an Lambda
   *          function, an Amazon Simple Queue Service queue, an Amazon Simple Notification Service topic, or the Amazon EventBridge default event bus.</p>
   */
  Uri?: string;

  /**
   * <p>An Amazon Resource Name (ARN) for an Identity and Access Management assume role.</p>
   */
  RoleArn?: string;
}

/**
 * <p>An extension that was invoked as part of a deployment event.</p>
 */
export interface ActionInvocation {
  /**
   * <p>The name, the ID, or the Amazon Resource Name (ARN) of the extension.</p>
   */
  ExtensionIdentifier?: string;

  /**
   * <p>The name of the action.</p>
   */
  ActionName?: string;

  /**
   * <p>The extension URI associated to the action point in the extension definition. The URI
   *          can be an Amazon Resource Name (ARN) for one of the following: an Lambda
   *          function, an Amazon Simple Queue Service queue, an Amazon Simple Notification Service topic, or the Amazon EventBridge default event bus.</p>
   */
  Uri?: string;

  /**
   * <p>An Amazon Resource Name (ARN) for an Identity and Access Management assume role.</p>
   */
  RoleArn?: string;

  /**
   * <p>The error message when an extension invocation fails.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The error code when an extension invocation fails.</p>
   */
  ErrorCode?: string;

  /**
   * <p>A system-generated ID for this invocation.</p>
   */
  InvocationId?: string;
}

export enum ActionPoint {
  ON_DEPLOYMENT_BAKING = "ON_DEPLOYMENT_BAKING",
  ON_DEPLOYMENT_COMPLETE = "ON_DEPLOYMENT_COMPLETE",
  ON_DEPLOYMENT_ROLLED_BACK = "ON_DEPLOYMENT_ROLLED_BACK",
  ON_DEPLOYMENT_START = "ON_DEPLOYMENT_START",
  ON_DEPLOYMENT_STEP = "ON_DEPLOYMENT_STEP",
  PRE_CREATE_HOSTED_CONFIGURATION_VERSION = "PRE_CREATE_HOSTED_CONFIGURATION_VERSION",
  PRE_START_DEPLOYMENT = "PRE_START_DEPLOYMENT",
}

export interface Application {
  /**
   * <p>The application ID.</p>
   */
  Id?: string;

  /**
   * <p>The application name.</p>
   */
  Name?: string;

  /**
   * <p>The description of the application.</p>
   */
  Description?: string;
}

/**
 * <p>Detailed information about the bad request exception error when creating a hosted
 *          configuration version.</p>
 */
export interface InvalidConfigurationDetail {
  /**
   * <p>The invalid or out-of-range validation constraint in your JSON schema that failed
   *          validation.</p>
   */
  Constraint?: string;

  /**
   * <p>Location of the validation constraint in the configuration JSON schema that failed
   *          validation.</p>
   */
  Location?: string;

  /**
   * <p>The reason for an invalid configuration error.</p>
   */
  Reason?: string;

  /**
   * <p>The type of error for an invalid configuration.</p>
   */
  Type?: string;

  /**
   * <p>Details about an error with Lambda when a synchronous extension
   *          experiences an error during an invocation.</p>
   */
  Value?: string;
}

/**
 * <p>Detailed information about the input that failed to satisfy the constraints specified by
 *          a call.</p>
 */
export type BadRequestDetails = BadRequestDetails.InvalidConfigurationMember | BadRequestDetails.$UnknownMember;

export namespace BadRequestDetails {
  /**
   * <p>Detailed information about the bad request exception error when creating a hosted
   *          configuration version.</p>
   */
  export interface InvalidConfigurationMember {
    InvalidConfiguration: InvalidConfigurationDetail[];
    $unknown?: never;
  }

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

export enum BadRequestReason {
  INVALID_CONFIGURATION = "InvalidConfiguration",
}

/**
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  Reason?: BadRequestReason | string;
  /**
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

export interface CreateApplicationRequest {
  /**
   * <p>A name for the application.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description of the application.</p>
   */
  Description?: string;

  /**
   * <p>Metadata to assign to the application. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which
   *          you define.</p>
   */
  Tags?: Record<string, string>;
}

/**
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

export enum ValidatorType {
  JSON_SCHEMA = "JSON_SCHEMA",
  LAMBDA = "LAMBDA",
}

/**
 * <p>A validator provides a syntactic or semantic check to ensure the configuration that you
 *          want to deploy functions as intended. To validate your application configuration data, you
 *          provide a schema or an Amazon Web Services Lambda function that runs against the configuration. The
 *          configuration deployment or update can only proceed when the configuration data is
 *          valid.</p>
 */
export interface Validator {
  /**
   * <p>AppConfig supports validators of type <code>JSON_SCHEMA</code> and
   *             <code>LAMBDA</code>
   *          </p>
   */
  Type: ValidatorType | string | undefined;

  /**
   * <p>Either the JSON Schema content or the Amazon Resource Name (ARN) of an Lambda
   *          function.</p>
   */
  Content: string | undefined;
}

export interface ConfigurationProfile {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The configuration profile ID.</p>
   */
  Id?: string;

  /**
   * <p>The name of the configuration profile.</p>
   */
  Name?: string;

  /**
   * <p>The configuration profile description.</p>
   */
  Description?: string;

  /**
   * <p>The URI location of the configuration.</p>
   */
  LocationUri?: string;

  /**
   * <p>The ARN of an IAM role with permission to access the configuration at the specified
   *             <code>LocationUri</code>.</p>
   */
  RetrievalRoleArn?: string;

  /**
   * <p>A list of methods for validating the configuration.</p>
   */
  Validators?: Validator[];

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
   */
  Type?: string;
}

export interface CreateConfigurationProfileRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>A name for the configuration profile.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description of the configuration profile.</p>
   */
  Description?: string;

  /**
   * <p>A URI to locate the configuration. You can specify the AppConfig hosted
   *          configuration store, Systems Manager (SSM) document, an SSM Parameter Store parameter, or an Amazon S3
   *          object. For the hosted configuration store and for feature flags, specify
   *             <code>hosted</code>. For an SSM document, specify either the document name in the format
   *             <code>ssm-document://<Document_name></code> or the Amazon Resource Name (ARN). For
   *          a parameter, specify either the parameter name in the format
   *             <code>ssm-parameter://<Parameter_name></code> or the ARN. For an Amazon S3 object,
   *          specify the URI in the following format: <code>s3://<bucket>/<objectKey>
   *          </code>. Here is an example:
   *          <code>s3://my-bucket/my-app/us-east-1/my-config.json</code>
   *          </p>
   */
  LocationUri: string | undefined;

  /**
   * <p>The ARN of an IAM role with permission to access the configuration at the specified
   *             <code>LocationUri</code>.</p>
   *          <important>
   *             <p>A retrieval role ARN is not required for configurations stored in the AppConfig hosted configuration store. It is required for all other sources that
   *             store your configuration. </p>
   *          </important>
   */
  RetrievalRoleArn?: string;

  /**
   * <p>A list of methods for validating the configuration.</p>
   */
  Validators?: Validator[];

  /**
   * <p>Metadata to assign to the configuration profile. Tags help organize and categorize your
   *             AppConfig resources. Each tag consists of a key and an optional value, both of
   *          which you define.</p>
   */
  Tags?: Record<string, string>;

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
   */
  Type?: string;
}

/**
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

export enum GrowthType {
  EXPONENTIAL = "EXPONENTIAL",
  LINEAR = "LINEAR",
}

export enum ReplicateTo {
  NONE = "NONE",
  SSM_DOCUMENT = "SSM_DOCUMENT",
}

export interface CreateDeploymentStrategyRequest {
  /**
   * <p>A name for the deployment strategy.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description of the deployment strategy.</p>
   */
  Description?: string;

  /**
   * <p>Total amount of time for a deployment to last.</p>
   */
  DeploymentDurationInMinutes: number | undefined;

  /**
   * <p>Specifies the amount of time AppConfig monitors for Amazon CloudWatch alarms after the
   *          configuration has been deployed to 100% of its targets, before considering the deployment
   *          to be complete. If an alarm is triggered during this time, AppConfig rolls back
   *          the deployment. You must configure permissions for AppConfig to roll back based
   *          on CloudWatch alarms. For more information, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/getting-started-with-appconfig-cloudwatch-alarms-permissions.html">Configuring permissions for rollback based on Amazon CloudWatch alarms</a> in the
   *             <i>AppConfig User Guide</i>.</p>
   */
  FinalBakeTimeInMinutes?: number;

  /**
   * <p>The percentage of targets to receive a deployed configuration during each
   *          interval.</p>
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
   *
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
  GrowthType?: GrowthType | string;

  /**
   * <p>Save the deployment strategy to a Systems Manager (SSM) document.</p>
   */
  ReplicateTo?: ReplicateTo | string;

  /**
   * <p>Metadata to assign to the deployment strategy. Tags help organize and categorize your
   *             AppConfig resources. Each tag consists of a key and an optional value, both of
   *          which you define.</p>
   */
  Tags?: Record<string, string>;
}

export interface DeploymentStrategy {
  /**
   * <p>The deployment strategy ID.</p>
   */
  Id?: string;

  /**
   * <p>The name of the deployment strategy.</p>
   */
  Name?: string;

  /**
   * <p>The description of the deployment strategy.</p>
   */
  Description?: string;

  /**
   * <p>Total amount of time the deployment lasted.</p>
   */
  DeploymentDurationInMinutes?: number;

  /**
   * <p>The algorithm used to define how percentage grew over time.</p>
   */
  GrowthType?: GrowthType | string;

  /**
   * <p>The percentage of targets that received a deployed configuration during each
   *          interval.</p>
   */
  GrowthFactor?: number;

  /**
   * <p>The amount of time that AppConfig monitored for alarms before considering the
   *          deployment to be complete and no longer eligible for automatic rollback.</p>
   */
  FinalBakeTimeInMinutes?: number;

  /**
   * <p>Save the deployment strategy to a Systems Manager (SSM) document.</p>
   */
  ReplicateTo?: ReplicateTo | string;
}

/**
 * <p>Amazon CloudWatch alarms to monitor during the deployment process.</p>
 */
export interface Monitor {
  /**
   * <p>Amazon Resource Name (ARN) of the Amazon CloudWatch alarm.</p>
   */
  AlarmArn: string | undefined;

  /**
   * <p>ARN of an Identity and Access Management (IAM) role for AppConfig to monitor
   *             <code>AlarmArn</code>.</p>
   */
  AlarmRoleArn?: string;
}

export interface CreateEnvironmentRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>A name for the environment.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description of the environment.</p>
   */
  Description?: string;

  /**
   * <p>Amazon CloudWatch alarms to monitor during the deployment process.</p>
   */
  Monitors?: Monitor[];

  /**
   * <p>Metadata to assign to the environment. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which
   *          you define.</p>
   */
  Tags?: Record<string, string>;
}

export enum EnvironmentState {
  DEPLOYING = "DEPLOYING",
  READY_FOR_DEPLOYMENT = "READY_FOR_DEPLOYMENT",
  ROLLED_BACK = "ROLLED_BACK",
  ROLLING_BACK = "ROLLING_BACK",
}

export interface Environment {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The environment ID.</p>
   */
  Id?: string;

  /**
   * <p>The name of the environment.</p>
   */
  Name?: string;

  /**
   * <p>The description of the environment.</p>
   */
  Description?: string;

  /**
   * <p>The state of the environment. An environment can be in one of the following states:
   *             <code>READY_FOR_DEPLOYMENT</code>, <code>DEPLOYING</code>, <code>ROLLING_BACK</code>, or
   *             <code>ROLLED_BACK</code>
   *          </p>
   */
  State?: EnvironmentState | string;

  /**
   * <p>Amazon CloudWatch alarms monitored during the deployment.</p>
   */
  Monitors?: Monitor[];
}

/**
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
 * <p>A value such as an Amazon Resource Name (ARN) or an Amazon Simple Notification Service topic entered
 *          in an extension when invoked. Parameter values are specified in an extension association.
 *          For more information about extensions, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Working with
 *                AppConfig extensions</a> in the
 *          <i>AppConfig User Guide</i>.</p>
 */
export interface Parameter {
  /**
   * <p>Information about the parameter.</p>
   */
  Description?: string;

  /**
   * <p>A parameter value must be specified in the extension association.</p>
   */
  Required?: boolean;
}

export interface CreateExtensionRequest {
  /**
   * <p>A name for the extension. Each extension name in your account must be unique. Extension
   *          versions use the same name.</p>
   */
  Name: string | undefined;

  /**
   * <p>Information about the extension.</p>
   */
  Description?: string;

  /**
   * <p>The actions defined in the extension.</p>
   */
  Actions: Record<string, Action[]> | undefined;

  /**
   * <p>The parameters accepted by the extension. You specify parameter values when you
   *          associate the extension to an AppConfig resource by using the
   *             <code>CreateExtensionAssociation</code> API action. For Lambda extension
   *          actions, these parameters are included in the Lambda request object.</p>
   */
  Parameters?: Record<string, Parameter>;

  /**
   * <p>Adds one or more tags for the specified extension. Tags are metadata that help you
   *          categorize resources in different ways, for example, by purpose, owner, or environment.
   *          Each tag consists of a key and an optional value, both of which you define. </p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>You can omit this field when you create an extension. When you create a new version,
   *          specify the most recent current version number. For example, you create version 3, enter 2
   *          for this field.</p>
   */
  LatestVersionNumber?: number;
}

export interface Extension {
  /**
   * <p>The system-generated ID of the extension.</p>
   */
  Id?: string;

  /**
   * <p>The extension name.</p>
   */
  Name?: string;

  /**
   * <p>The extension version number.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The system-generated Amazon Resource Name (ARN) for the extension.</p>
   */
  Arn?: string;

  /**
   * <p>Information about the extension.</p>
   */
  Description?: string;

  /**
   * <p>The actions defined in the extension.</p>
   */
  Actions?: Record<string, Action[]>;

  /**
   * <p>The parameters accepted by the extension. You specify parameter values when you
   *          associate the extension to an AppConfig resource by using the
   *             <code>CreateExtensionAssociation</code> API action. For Lambda extension
   *          actions, these parameters are included in the Lambda request object.</p>
   */
  Parameters?: Record<string, Parameter>;
}

/**
 * <p>The number of hosted configuration versions exceeds the limit for the AppConfig hosted configuration store. Delete one or more versions and try again.</p>
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

export interface CreateExtensionAssociationRequest {
  /**
   * <p>The name, the ID, or the Amazon Resource Name (ARN) of the extension.</p>
   */
  ExtensionIdentifier: string | undefined;

  /**
   * <p>The version number of the extension. If not specified, AppConfig uses the
   *          maximum version of the extension.</p>
   */
  ExtensionVersionNumber?: number;

  /**
   * <p>The ARN of an application, configuration profile, or environment.</p>
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p>The parameter names and values defined in the extensions. Extension parameters marked
   *             <code>Required</code> must be entered for this field.</p>
   */
  Parameters?: Record<string, string>;

  /**
   * <p>Adds one or more tags for the specified extension association. Tags are metadata that
   *          help you categorize resources in different ways, for example, by purpose, owner, or
   *          environment. Each tag consists of a key and an optional value, both of which you define.
   *       </p>
   */
  Tags?: Record<string, string>;
}

export interface ExtensionAssociation {
  /**
   * <p>The system-generated ID for the association.</p>
   */
  Id?: string;

  /**
   * <p>The ARN of the extension defined in the association.</p>
   */
  ExtensionArn?: string;

  /**
   * <p>The ARNs of applications, configuration profiles, or environments defined in the
   *          association.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The system-generated Amazon Resource Name (ARN) for the extension.</p>
   */
  Arn?: string;

  /**
   * <p>The parameter names and values defined in the association.</p>
   */
  Parameters?: Record<string, string>;

  /**
   * <p>The version number for the extension defined in the association.</p>
   */
  ExtensionVersionNumber?: number;
}

export interface CreateHostedConfigurationVersionRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The configuration profile ID.</p>
   */
  ConfigurationProfileId: string | undefined;

  /**
   * <p>A description of the configuration.</p>
   */
  Description?: string;

  /**
   * <p>The content of the configuration or the configuration data.</p>
   */
  Content: Uint8Array | undefined;

  /**
   * <p>A standard MIME type describing the format of the configuration content. For more
   *          information, see <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">Content-Type</a>.</p>
   */
  ContentType: string | undefined;

  /**
   * <p>An optional locking token used to prevent race conditions from overwriting configuration
   *          updates when creating a new version. To ensure your data is not overwritten when creating
   *          multiple hosted configuration versions in rapid succession, specify the version number of
   *          the latest hosted configuration version.</p>
   */
  LatestVersionNumber?: number;
}

export interface HostedConfigurationVersion {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The configuration profile ID.</p>
   */
  ConfigurationProfileId?: string;

  /**
   * <p>The configuration version.</p>
   */
  VersionNumber?: number;

  /**
   * <p>A description of the configuration.</p>
   */
  Description?: string;

  /**
   * <p>The content of the configuration or the configuration data.</p>
   */
  Content?: Uint8Array;

  /**
   * <p>A standard MIME type describing the format of the configuration content. For more
   *          information, see <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">Content-Type</a>.</p>
   */
  ContentType?: string;
}

export enum BytesMeasure {
  KILOBYTES = "KILOBYTES",
}

/**
 * <p>The configuration size is too large.</p>
 */
export class PayloadTooLargeException extends __BaseException {
  readonly name: "PayloadTooLargeException" = "PayloadTooLargeException";
  readonly $fault: "client" = "client";
  Message?: string;
  Measure?: BytesMeasure | string;
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

export interface DeleteApplicationRequest {
  /**
   * <p>The ID of the application to delete.</p>
   */
  ApplicationId: string | undefined;
}

export interface DeleteConfigurationProfileRequest {
  /**
   * <p>The application ID that includes the configuration profile you want to delete.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The ID of the configuration profile you want to delete.</p>
   */
  ConfigurationProfileId: string | undefined;
}

export interface DeleteDeploymentStrategyRequest {
  /**
   * <p>The ID of the deployment strategy you want to delete.</p>
   */
  DeploymentStrategyId: string | undefined;
}

export interface DeleteEnvironmentRequest {
  /**
   * <p>The application ID that includes the environment that you want to delete.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The ID of the environment that you want to delete.</p>
   */
  EnvironmentId: string | undefined;
}

export interface DeleteExtensionRequest {
  /**
   * <p>The name, ID, or Amazon Resource Name (ARN) of the extension you want to delete.</p>
   */
  ExtensionIdentifier: string | undefined;

  /**
   * <p>A specific version of an extension to delete. If omitted, the highest version is
   *          deleted.</p>
   */
  VersionNumber?: number;
}

export interface DeleteExtensionAssociationRequest {
  /**
   * <p>The ID of the extension association to delete.</p>
   */
  ExtensionAssociationId: string | undefined;
}

export interface DeleteHostedConfigurationVersionRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The configuration profile ID.</p>
   */
  ConfigurationProfileId: string | undefined;

  /**
   * <p>The versions number to delete.</p>
   */
  VersionNumber: number | undefined;
}

export interface GetApplicationRequest {
  /**
   * <p>The ID of the application you want to get.</p>
   */
  ApplicationId: string | undefined;
}

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
   */
  Content?: Uint8Array;

  /**
   * <p>The configuration version.</p>
   */
  ConfigurationVersion?: string;

  /**
   * <p>A standard MIME type describing the format of the configuration content. For more
   *          information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">Content-Type</a>.</p>
   */
  ContentType?: string;
}

export interface GetConfigurationRequest {
  /**
   * <p>The application to get. Specify either the application name or the application
   *          ID.</p>
   */
  Application: string | undefined;

  /**
   * <p>The environment to get. Specify either the environment name or the environment
   *          ID.</p>
   */
  Environment: string | undefined;

  /**
   * <p>The configuration to get. Specify either the configuration name or the configuration
   *          ID.</p>
   */
  Configuration: string | undefined;

  /**
   * <p>The clientId parameter in the following command is a unique, user-specified ID to
   *          identify the client for the configuration. This ID enables AppConfig to deploy
   *          the configuration in intervals, as defined in the deployment strategy. </p>
   */
  ClientId: string | undefined;

  /**
   * <p>The configuration version returned in the most recent <code>GetConfiguration</code>
   *          response.</p>
   *          <important>
   *             <p>AppConfig uses the value of the <code>ClientConfigurationVersion</code>
   *             parameter to identify the configuration version on your clients. If you don’t send
   *                <code>ClientConfigurationVersion</code> with each call to
   *                <code>GetConfiguration</code>, your clients receive the current configuration. You
   *             are charged each time your clients receive a configuration.</p>
   *             <p>To avoid excess charges, we recommend that you include the
   *                <code>ClientConfigurationVersion</code> value with every call to
   *                <code>GetConfiguration</code>. This value must be saved on your client. Subsequent
   *             calls to <code>GetConfiguration</code> must pass this value by using the
   *                <code>ClientConfigurationVersion</code> parameter. </p>
   *          </important>
   *          <p>For more information about working with configurations, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-the-configuration.html">Retrieving the
   *             Configuration</a> in the <i>AppConfig User Guide</i>.</p>
   */
  ClientConfigurationVersion?: string;
}

export interface GetConfigurationProfileRequest {
  /**
   * <p>The ID of the application that includes the configuration profile you want to
   *          get.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The ID of the configuration profile that you want to get.</p>
   */
  ConfigurationProfileId: string | undefined;
}

/**
 * <p>An extension that was invoked during a deployment.</p>
 */
export interface AppliedExtension {
  /**
   * <p>The system-generated ID of the extension.</p>
   */
  ExtensionId?: string;

  /**
   * <p>The system-generated ID for the association.</p>
   */
  ExtensionAssociationId?: string;

  /**
   * <p>The extension version number.</p>
   */
  VersionNumber?: number;

  /**
   * <p>One or more parameters for the actions called by the extension.</p>
   */
  Parameters?: Record<string, string>;
}

export enum DeploymentEventType {
  BAKE_TIME_STARTED = "BAKE_TIME_STARTED",
  DEPLOYMENT_COMPLETED = "DEPLOYMENT_COMPLETED",
  DEPLOYMENT_STARTED = "DEPLOYMENT_STARTED",
  PERCENTAGE_UPDATED = "PERCENTAGE_UPDATED",
  ROLLBACK_COMPLETED = "ROLLBACK_COMPLETED",
  ROLLBACK_STARTED = "ROLLBACK_STARTED",
}

export enum TriggeredBy {
  APPCONFIG = "APPCONFIG",
  CLOUDWATCH_ALARM = "CLOUDWATCH_ALARM",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  USER = "USER",
}

/**
 * <p>An object that describes a deployment event.</p>
 */
export interface DeploymentEvent {
  /**
   * <p>The type of deployment event. Deployment event types include the start, stop, or
   *          completion of a deployment; a percentage update; the start or stop of a bake period; and
   *          the start or completion of a rollback.</p>
   */
  EventType?: DeploymentEventType | string;

  /**
   * <p>The entity that triggered the deployment event. Events can be triggered by a user,
   *             AppConfig, an Amazon CloudWatch alarm, or an internal error.</p>
   */
  TriggeredBy?: TriggeredBy | string;

  /**
   * <p>A description of the deployment event. Descriptions include, but are not limited to, the
   *          user account or the Amazon CloudWatch alarm ARN that initiated a rollback, the percentage of hosts
   *          that received the deployment, or in the case of an internal error, a recommendation to
   *          attempt a new deployment.</p>
   */
  Description?: string;

  /**
   * <p>The list of extensions that were invoked as part of the deployment.</p>
   */
  ActionInvocations?: ActionInvocation[];

  /**
   * <p>The date and time the event occurred.</p>
   */
  OccurredAt?: Date;
}

export enum DeploymentState {
  BAKING = "BAKING",
  COMPLETE = "COMPLETE",
  DEPLOYING = "DEPLOYING",
  ROLLED_BACK = "ROLLED_BACK",
  ROLLING_BACK = "ROLLING_BACK",
  VALIDATING = "VALIDATING",
}

export interface Deployment {
  /**
   * <p>The ID of the application that was deployed.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The ID of the environment that was deployed.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>The ID of the deployment strategy that was deployed.</p>
   */
  DeploymentStrategyId?: string;

  /**
   * <p>The ID of the configuration profile that was deployed.</p>
   */
  ConfigurationProfileId?: string;

  /**
   * <p>The sequence number of the deployment.</p>
   */
  DeploymentNumber?: number;

  /**
   * <p>The name of the configuration.</p>
   */
  ConfigurationName?: string;

  /**
   * <p>Information about the source location of the configuration.</p>
   */
  ConfigurationLocationUri?: string;

  /**
   * <p>The configuration version that was deployed.</p>
   */
  ConfigurationVersion?: string;

  /**
   * <p>The description of the deployment.</p>
   */
  Description?: string;

  /**
   * <p>Total amount of time the deployment lasted.</p>
   */
  DeploymentDurationInMinutes?: number;

  /**
   * <p>The algorithm used to define how percentage grew over time.</p>
   */
  GrowthType?: GrowthType | string;

  /**
   * <p>The percentage of targets to receive a deployed configuration during each
   *          interval.</p>
   */
  GrowthFactor?: number;

  /**
   * <p>The amount of time that AppConfig monitored for alarms before considering the
   *          deployment to be complete and no longer eligible for automatic rollback.</p>
   */
  FinalBakeTimeInMinutes?: number;

  /**
   * <p>The state of the deployment.</p>
   */
  State?: DeploymentState | string;

  /**
   * <p>A list containing all events related to a deployment. The most recent events are
   *          displayed first.</p>
   */
  EventLog?: DeploymentEvent[];

  /**
   * <p>The percentage of targets for which the deployment is available.</p>
   */
  PercentageComplete?: number;

  /**
   * <p>The time the deployment started.</p>
   */
  StartedAt?: Date;

  /**
   * <p>The time the deployment completed. </p>
   */
  CompletedAt?: Date;

  /**
   * <p>A list of extensions that were processed as part of the deployment. The extensions that
   *          were previously associated to the configuration profile, environment, or the application
   *          when <code>StartDeployment</code> was called.</p>
   */
  AppliedExtensions?: AppliedExtension[];
}

export interface GetDeploymentRequest {
  /**
   * <p>The ID of the application that includes the deployment you want to get. </p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The ID of the environment that includes the deployment you want to get. </p>
   */
  EnvironmentId: string | undefined;

  /**
   * <p>The sequence number of the deployment.</p>
   */
  DeploymentNumber: number | undefined;
}

export interface GetDeploymentStrategyRequest {
  /**
   * <p>The ID of the deployment strategy to get.</p>
   */
  DeploymentStrategyId: string | undefined;
}

export interface GetEnvironmentRequest {
  /**
   * <p>The ID of the application that includes the environment you want to get.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The ID of the environment that you want to get.</p>
   */
  EnvironmentId: string | undefined;
}

export interface GetExtensionRequest {
  /**
   * <p>The name, the ID, or the Amazon Resource Name (ARN) of the extension.</p>
   */
  ExtensionIdentifier: string | undefined;

  /**
   * <p>The extension version number. If no version number was defined, AppConfig uses
   *          the highest version.</p>
   */
  VersionNumber?: number;
}

export interface GetExtensionAssociationRequest {
  /**
   * <p>The extension association ID to get.</p>
   */
  ExtensionAssociationId: string | undefined;
}

export interface GetHostedConfigurationVersionRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The configuration profile ID.</p>
   */
  ConfigurationProfileId: string | undefined;

  /**
   * <p>The version.</p>
   */
  VersionNumber: number | undefined;
}

export interface Applications {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Application[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   */
  NextToken?: string;
}

export interface ListApplicationsRequest {
  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Next token is a pagination token generated by AppConfig to describe what page the previous List call ended on. For the first List
   *          request, the nextToken should not be set. On subsequent calls, the nextToken parameter
   *          should be set to the previous responses nextToken value. Use this token to get the next set
   *          of results. </p>
   */
  NextToken?: string;
}

/**
 * <p>A summary of a configuration profile.</p>
 */
export interface ConfigurationProfileSummary {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The ID of the configuration profile.</p>
   */
  Id?: string;

  /**
   * <p>The name of the configuration profile.</p>
   */
  Name?: string;

  /**
   * <p>The URI location of the configuration.</p>
   */
  LocationUri?: string;

  /**
   * <p>The types of validators in the configuration profile.</p>
   */
  ValidatorTypes?: (ValidatorType | string)[];

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
   */
  Type?: string;
}

export interface ConfigurationProfiles {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: ConfigurationProfileSummary[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   */
  NextToken?: string;
}

export interface ListConfigurationProfilesRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>A filter based on the type of configurations that the configuration profile contains. A
   *          configuration can be a feature flag or a freeform configuration.</p>
   */
  Type?: string;
}

/**
 * <p>Information about the deployment.</p>
 */
export interface DeploymentSummary {
  /**
   * <p>The sequence number of the deployment.</p>
   */
  DeploymentNumber?: number;

  /**
   * <p>The name of the configuration.</p>
   */
  ConfigurationName?: string;

  /**
   * <p>The version of the configuration.</p>
   */
  ConfigurationVersion?: string;

  /**
   * <p>Total amount of time the deployment lasted.</p>
   */
  DeploymentDurationInMinutes?: number;

  /**
   * <p>The algorithm used to define how percentage grows over time.</p>
   */
  GrowthType?: GrowthType | string;

  /**
   * <p>The percentage of targets to receive a deployed configuration during each
   *          interval.</p>
   */
  GrowthFactor?: number;

  /**
   * <p>The amount of time that AppConfig monitors for alarms before considering the
   *          deployment to be complete and no longer eligible for automatic rollback.</p>
   */
  FinalBakeTimeInMinutes?: number;

  /**
   * <p>The state of the deployment.</p>
   */
  State?: DeploymentState | string;

  /**
   * <p>The percentage of targets for which the deployment is available.</p>
   */
  PercentageComplete?: number;

  /**
   * <p>Time the deployment started.</p>
   */
  StartedAt?: Date;

  /**
   * <p>Time the deployment completed.</p>
   */
  CompletedAt?: Date;
}

export interface Deployments {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: DeploymentSummary[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   */
  NextToken?: string;
}

export interface ListDeploymentsRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The environment ID.</p>
   */
  EnvironmentId: string | undefined;

  /**
   * <p>The maximum number of items that may be returned for this call. If there are items that
   *          have not yet been returned, the response will include a non-null <code>NextToken</code>
   *          that you can provide in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token returned by a prior call to this operation indicating the next set of results
   *          to be returned. If not specified, the operation will return the first set of
   *          results.</p>
   */
  NextToken?: string;
}

export interface DeploymentStrategies {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: DeploymentStrategy[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   */
  NextToken?: string;
}

export interface ListDeploymentStrategiesRequest {
  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   */
  NextToken?: string;
}

export interface Environments {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Environment[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   */
  NextToken?: string;
}

export interface ListEnvironmentsRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Information about an association between an extension and an AppConfig
 *          resource such as an application, environment, or configuration profile. Call
 *             <code>GetExtensionAssociation</code> to get more information about an
 *          association.</p>
 */
export interface ExtensionAssociationSummary {
  /**
   * <p>The extension association ID. This ID is used to call other
   *             <code>ExtensionAssociation</code> API actions such as
   *             <code>GetExtensionAssociation</code> or <code>DeleteExtensionAssociation</code>.</p>
   */
  Id?: string;

  /**
   * <p>The system-generated Amazon Resource Name (ARN) for the extension.</p>
   */
  ExtensionArn?: string;

  /**
   * <p>The ARNs of applications, configuration profiles, or environments defined in the
   *          association.</p>
   */
  ResourceArn?: string;
}

export interface ExtensionAssociations {
  /**
   * <p>The list of extension associations. Each item represents an extension association to an
   *          application, environment, or configuration profile. </p>
   */
  Items?: ExtensionAssociationSummary[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   */
  NextToken?: string;
}

export interface ListExtensionAssociationsRequest {
  /**
   * <p>The ARN of an application, configuration profile, or environment.</p>
   */
  ResourceIdentifier?: string;

  /**
   * <p>The name, the ID, or the Amazon Resource Name (ARN) of the extension.</p>
   */
  ExtensionIdentifier?: string;

  /**
   * <p>The version number for the extension defined in the association.</p>
   */
  ExtensionVersionNumber?: number;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results or pass null to
   *          get the first set of results. </p>
   */
  NextToken?: string;
}

/**
 * <p>Information about an extension. Call <code>GetExtension</code> to get more information
 *          about an extension.</p>
 */
export interface ExtensionSummary {
  /**
   * <p>The system-generated ID of the extension.</p>
   */
  Id?: string;

  /**
   * <p>The extension name.</p>
   */
  Name?: string;

  /**
   * <p>The extension version number.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The system-generated Amazon Resource Name (ARN) for the extension.</p>
   */
  Arn?: string;

  /**
   * <p>Information about the extension.</p>
   */
  Description?: string;
}

export interface Extensions {
  /**
   * <p>The list of available extensions. The list includes Amazon Web Services-authored and
   *          user-created extensions.</p>
   */
  Items?: ExtensionSummary[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   */
  NextToken?: string;
}

export interface ListExtensionsRequest {
  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   */
  NextToken?: string;

  /**
   * <p>The extension name.</p>
   */
  Name?: string;
}

/**
 * <p>Information about the configuration.</p>
 */
export interface HostedConfigurationVersionSummary {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The configuration profile ID.</p>
   */
  ConfigurationProfileId?: string;

  /**
   * <p>The configuration version.</p>
   */
  VersionNumber?: number;

  /**
   * <p>A description of the configuration.</p>
   */
  Description?: string;

  /**
   * <p>A standard MIME type describing the format of the configuration content. For more
   *          information, see <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">Content-Type</a>.</p>
   */
  ContentType?: string;
}

export interface HostedConfigurationVersions {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: HostedConfigurationVersionSummary[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   */
  NextToken?: string;
}

export interface ListHostedConfigurationVersionsRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The configuration profile ID.</p>
   */
  ConfigurationProfileId: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The resource ARN.</p>
   */
  ResourceArn: string | undefined;
}

export interface ResourceTags {
  /**
   * <p>Metadata to assign to AppConfig resources. Tags help organize and categorize
   *          your AppConfig resources. Each tag consists of a key and an optional value, both
   *          of which you define.</p>
   */
  Tags?: Record<string, string>;
}

export interface StartDeploymentRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The environment ID.</p>
   */
  EnvironmentId: string | undefined;

  /**
   * <p>The deployment strategy ID.</p>
   */
  DeploymentStrategyId: string | undefined;

  /**
   * <p>The configuration profile ID.</p>
   */
  ConfigurationProfileId: string | undefined;

  /**
   * <p>The configuration version to deploy.</p>
   */
  ConfigurationVersion: string | undefined;

  /**
   * <p>A description of the deployment.</p>
   */
  Description?: string;

  /**
   * <p>Metadata to assign to the deployment. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which
   *          you define.</p>
   */
  Tags?: Record<string, string>;
}

export interface StopDeploymentRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The environment ID.</p>
   */
  EnvironmentId: string | undefined;

  /**
   * <p>The sequence number of the deployment.</p>
   */
  DeploymentNumber: number | undefined;
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource for which to retrieve tags.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The key-value string map. The valid character set is [a-zA-Z+-=._:/]. The tag key can be
   *          up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to
   *          256 characters.</p>
   */
  Tags: Record<string, string> | undefined;
}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource for which to remove tags.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys to delete.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UpdateApplicationRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The name of the application.</p>
   */
  Name?: string;

  /**
   * <p>A description of the application.</p>
   */
  Description?: string;
}

export interface UpdateConfigurationProfileRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The ID of the configuration profile.</p>
   */
  ConfigurationProfileId: string | undefined;

  /**
   * <p>The name of the configuration profile.</p>
   */
  Name?: string;

  /**
   * <p>A description of the configuration profile.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of an IAM role with permission to access the configuration at the specified
   *             <code>LocationUri</code>.</p>
   */
  RetrievalRoleArn?: string;

  /**
   * <p>A list of methods for validating the configuration.</p>
   */
  Validators?: Validator[];
}

export interface UpdateDeploymentStrategyRequest {
  /**
   * <p>The deployment strategy ID.</p>
   */
  DeploymentStrategyId: string | undefined;

  /**
   * <p>A description of the deployment strategy.</p>
   */
  Description?: string;

  /**
   * <p>Total amount of time for a deployment to last.</p>
   */
  DeploymentDurationInMinutes?: number;

  /**
   * <p>The amount of time that AppConfig monitors for alarms before considering the
   *          deployment to be complete and no longer eligible for automatic rollback.</p>
   */
  FinalBakeTimeInMinutes?: number;

  /**
   * <p>The percentage of targets to receive a deployed configuration during each
   *          interval.</p>
   */
  GrowthFactor?: number;

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
   *
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
  GrowthType?: GrowthType | string;
}

export interface UpdateEnvironmentRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The environment ID.</p>
   */
  EnvironmentId: string | undefined;

  /**
   * <p>The name of the environment.</p>
   */
  Name?: string;

  /**
   * <p>A description of the environment.</p>
   */
  Description?: string;

  /**
   * <p>Amazon CloudWatch alarms to monitor during the deployment process.</p>
   */
  Monitors?: Monitor[];
}

export interface UpdateExtensionRequest {
  /**
   * <p>The name, the ID, or the Amazon Resource Name (ARN) of the extension.</p>
   */
  ExtensionIdentifier: string | undefined;

  /**
   * <p>Information about the extension.</p>
   */
  Description?: string;

  /**
   * <p>The actions defined in the extension.</p>
   */
  Actions?: Record<string, Action[]>;

  /**
   * <p>One or more parameters for the actions called by the extension.</p>
   */
  Parameters?: Record<string, Parameter>;

  /**
   * <p>The extension version number.</p>
   */
  VersionNumber?: number;
}

export interface UpdateExtensionAssociationRequest {
  /**
   * <p>The system-generated ID for the association.</p>
   */
  ExtensionAssociationId: string | undefined;

  /**
   * <p>The parameter names and values defined in the extension.</p>
   */
  Parameters?: Record<string, string>;
}

export interface ValidateConfigurationRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The configuration profile ID.</p>
   */
  ConfigurationProfileId: string | undefined;

  /**
   * <p>The version of the configuration to validate.</p>
   */
  ConfigurationVersion: string | undefined;
}

/**
 * @internal
 */
export const ActionFilterSensitiveLog = (obj: Action): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionInvocationFilterSensitiveLog = (obj: ActionInvocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationFilterSensitiveLog = (obj: Application): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InvalidConfigurationDetailFilterSensitiveLog = (obj: InvalidConfigurationDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BadRequestDetailsFilterSensitiveLog = (obj: BadRequestDetails): any => {
  if (obj.InvalidConfiguration !== undefined)
    return {
      InvalidConfiguration: obj.InvalidConfiguration.map((item) => InvalidConfigurationDetailFilterSensitiveLog(item)),
    };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateApplicationRequestFilterSensitiveLog = (obj: CreateApplicationRequest): any => ({
  ...obj,
});

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
export const CreateDeploymentStrategyRequestFilterSensitiveLog = (obj: CreateDeploymentStrategyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeploymentStrategyFilterSensitiveLog = (obj: DeploymentStrategy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitorFilterSensitiveLog = (obj: Monitor): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEnvironmentRequestFilterSensitiveLog = (obj: CreateEnvironmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnvironmentFilterSensitiveLog = (obj: Environment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParameterFilterSensitiveLog = (obj: Parameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateExtensionRequestFilterSensitiveLog = (obj: CreateExtensionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExtensionFilterSensitiveLog = (obj: Extension): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateExtensionAssociationRequestFilterSensitiveLog = (obj: CreateExtensionAssociationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExtensionAssociationFilterSensitiveLog = (obj: ExtensionAssociation): any => ({
  ...obj,
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
export const DeleteApplicationRequestFilterSensitiveLog = (obj: DeleteApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConfigurationProfileRequestFilterSensitiveLog = (obj: DeleteConfigurationProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDeploymentStrategyRequestFilterSensitiveLog = (obj: DeleteDeploymentStrategyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEnvironmentRequestFilterSensitiveLog = (obj: DeleteEnvironmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteExtensionRequestFilterSensitiveLog = (obj: DeleteExtensionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteExtensionAssociationRequestFilterSensitiveLog = (obj: DeleteExtensionAssociationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteHostedConfigurationVersionRequestFilterSensitiveLog = (
  obj: DeleteHostedConfigurationVersionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetApplicationRequestFilterSensitiveLog = (obj: GetApplicationRequest): any => ({
  ...obj,
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
export const GetConfigurationRequestFilterSensitiveLog = (obj: GetConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConfigurationProfileRequestFilterSensitiveLog = (obj: GetConfigurationProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppliedExtensionFilterSensitiveLog = (obj: AppliedExtension): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeploymentEventFilterSensitiveLog = (obj: DeploymentEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeploymentFilterSensitiveLog = (obj: Deployment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDeploymentRequestFilterSensitiveLog = (obj: GetDeploymentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDeploymentStrategyRequestFilterSensitiveLog = (obj: GetDeploymentStrategyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEnvironmentRequestFilterSensitiveLog = (obj: GetEnvironmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetExtensionRequestFilterSensitiveLog = (obj: GetExtensionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetExtensionAssociationRequestFilterSensitiveLog = (obj: GetExtensionAssociationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetHostedConfigurationVersionRequestFilterSensitiveLog = (
  obj: GetHostedConfigurationVersionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationsFilterSensitiveLog = (obj: Applications): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationsRequestFilterSensitiveLog = (obj: ListApplicationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfigurationProfileSummaryFilterSensitiveLog = (obj: ConfigurationProfileSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfigurationProfilesFilterSensitiveLog = (obj: ConfigurationProfiles): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListConfigurationProfilesRequestFilterSensitiveLog = (obj: ListConfigurationProfilesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeploymentSummaryFilterSensitiveLog = (obj: DeploymentSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeploymentsFilterSensitiveLog = (obj: Deployments): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDeploymentsRequestFilterSensitiveLog = (obj: ListDeploymentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeploymentStrategiesFilterSensitiveLog = (obj: DeploymentStrategies): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDeploymentStrategiesRequestFilterSensitiveLog = (obj: ListDeploymentStrategiesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnvironmentsFilterSensitiveLog = (obj: Environments): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEnvironmentsRequestFilterSensitiveLog = (obj: ListEnvironmentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExtensionAssociationSummaryFilterSensitiveLog = (obj: ExtensionAssociationSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExtensionAssociationsFilterSensitiveLog = (obj: ExtensionAssociations): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListExtensionAssociationsRequestFilterSensitiveLog = (obj: ListExtensionAssociationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExtensionSummaryFilterSensitiveLog = (obj: ExtensionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExtensionsFilterSensitiveLog = (obj: Extensions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListExtensionsRequestFilterSensitiveLog = (obj: ListExtensionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HostedConfigurationVersionSummaryFilterSensitiveLog = (obj: HostedConfigurationVersionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HostedConfigurationVersionsFilterSensitiveLog = (obj: HostedConfigurationVersions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListHostedConfigurationVersionsRequestFilterSensitiveLog = (
  obj: ListHostedConfigurationVersionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceTagsFilterSensitiveLog = (obj: ResourceTags): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartDeploymentRequestFilterSensitiveLog = (obj: StartDeploymentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopDeploymentRequestFilterSensitiveLog = (obj: StopDeploymentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateApplicationRequestFilterSensitiveLog = (obj: UpdateApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConfigurationProfileRequestFilterSensitiveLog = (obj: UpdateConfigurationProfileRequest): any => ({
  ...obj,
  ...(obj.Validators && { Validators: obj.Validators.map((item) => ValidatorFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateDeploymentStrategyRequestFilterSensitiveLog = (obj: UpdateDeploymentStrategyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEnvironmentRequestFilterSensitiveLog = (obj: UpdateEnvironmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateExtensionRequestFilterSensitiveLog = (obj: UpdateExtensionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateExtensionAssociationRequestFilterSensitiveLog = (obj: UpdateExtensionAssociationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidateConfigurationRequestFilterSensitiveLog = (obj: ValidateConfigurationRequest): any => ({
  ...obj,
});
