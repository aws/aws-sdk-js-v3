// smithy-typescript generated code
import type {
  ActionPoint,
  DeleteType,
  DeletionProtectionCheck,
  DeploymentEventType,
  DeploymentState,
  DeploymentType,
  EnvironmentState,
  ExperimentDefinitionStatus,
  ExperimentRunEventType,
  ExperimentRunStatus,
  GrowthType,
  ReplicateTo,
  TriggeredBy,
  ValidatorType,
} from "./enums";

/**
 * A parameter to configure deletion protection. Deletion protection prevents a user from deleting a configuration profile or an environment if AppConfig has called either [GetLatestConfiguration](https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html) or for the configuration profile or from the environment during the specified interval.
 *
 * The default interval specified by `ProtectionPeriodInMinutes` is 60. `DeletionProtectionCheck` skips configuration profiles and environments that were created in the past hour.
 *
 * @public
 */
export interface DeletionProtectionSettings {
  /**
   * A parameter that indicates if deletion protection is enabled or not.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The time interval during which AppConfig monitors for calls to [GetLatestConfiguration](https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html) or for a configuration profile or from an environment. AppConfig returns an error if a user calls or for the designated configuration profile or environment. To bypass the error and delete a configuration profile or an environment, specify `BYPASS` for the `DeletionProtectionCheck` parameter for either or .
   *
   * @public
   */
  ProtectionPeriodInMinutes?: number | undefined;
}

/**
 * The configuration settings for vended metrics in your AppConfig account.
 *
 * @public
 */
export interface VendedMetricsSettings {
  /**
   * Specifies whether vended metrics are enabled for the account.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface AccountSettings {
  /**
   * A parameter to configure deletion protection. Deletion protection prevents a user from deleting a configuration profile or an environment if AppConfig has called either [GetLatestConfiguration](https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html) or for the configuration profile or from the environment during the specified interval. The default interval for `ProtectionPeriodInMinutes` is 60.
   *
   * @public
   */
  DeletionProtection?: DeletionProtectionSettings | undefined;

  /**
   * The configuration for vended metrics in the account.
   *
   * @public
   */
  VendedMetrics?: VendedMetricsSettings | undefined;
}

/**
 * An action defines the tasks that the extension performs during the AppConfig workflow. Each action includes an action point, as shown in the following list:
 *
 * - `PRE_CREATE_HOSTED_CONFIGURATION_VERSION`
 * - `PRE_START_DEPLOYMENT`
 * - `AT_DEPLOYMENT_TICK`
 * - `ON_DEPLOYMENT_START`
 * - `ON_DEPLOYMENT_STEP`
 * - `ON_DEPLOYMENT_BAKING`
 * - `ON_DEPLOYMENT_COMPLETE`
 * - `ON_DEPLOYMENT_ROLLED_BACK`
 *
 * Each action also includes a name, a URI to an Lambda function, and an Amazon Resource Name (ARN) for an Identity and Access Management assume role. You specify the name, URI, and ARN for each *action point* defined in the extension.
 *
 * @public
 */
export interface Action {
  /**
   * The action name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Information about the action.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The extension URI associated to the action point in the extension definition. The URI can be an Amazon Resource Name (ARN) for one of the following: an Lambda function, an Amazon Simple Queue Service queue, an Amazon Simple Notification Service topic, or the Amazon EventBridge default event bus.
   *
   * @public
   */
  Uri?: string | undefined;

  /**
   * An Amazon Resource Name (ARN) for an Identity and Access Management assume role.
   *
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * An extension that was invoked as part of a deployment event.
 *
 * @public
 */
export interface ActionInvocation {
  /**
   * The name, the ID, or the Amazon Resource Name (ARN) of the extension.
   *
   * @public
   */
  ExtensionIdentifier?: string | undefined;

  /**
   * The name of the action.
   *
   * @public
   */
  ActionName?: string | undefined;

  /**
   * The extension URI associated to the action point in the extension definition. The URI can be an Amazon Resource Name (ARN) for one of the following: an Lambda function, an Amazon Simple Queue Service queue, an Amazon Simple Notification Service topic, or the Amazon EventBridge default event bus.
   *
   * @public
   */
  Uri?: string | undefined;

  /**
   * An Amazon Resource Name (ARN) for an Identity and Access Management assume role.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The error message when an extension invocation fails.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The error code when an extension invocation fails.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * A system-generated ID for this invocation.
   *
   * @public
   */
  InvocationId?: string | undefined;
}

/**
 * @public
 */
export interface Application {
  /**
   * The application ID.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The application name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the application.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * Detailed information about the bad request exception error when creating a hosted configuration version.
 *
 * @public
 */
export interface InvalidConfigurationDetail {
  /**
   * The invalid or out-of-range validation constraint in your JSON schema that failed validation.
   *
   * @public
   */
  Constraint?: string | undefined;

  /**
   * Location of the validation constraint in the configuration JSON schema that failed validation.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The reason for an invalid configuration error.
   *
   * @public
   */
  Reason?: string | undefined;

  /**
   * The type of error for an invalid configuration.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * Details about an error with Lambda when a synchronous extension experiences an error during an invocation.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Detailed information about the input that failed to satisfy the constraints specified by a call.
 *
 * @public
 */
export type BadRequestDetails =
  | BadRequestDetails.InvalidConfigurationMember
  | BadRequestDetails.$UnknownMember;

/**
 * @public
 */
export namespace BadRequestDetails {
  /**
   * Detailed information about the bad request exception error when creating a hosted configuration version.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    InvalidConfiguration: (value: InvalidConfigurationDetail[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * A name for the application.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the application.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Metadata to assign to the application. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * A validator provides a syntactic or semantic check to ensure the configuration that you want to deploy functions as intended. To validate your application configuration data, you provide a schema or an Amazon Web Services Lambda function that runs against the configuration. The configuration deployment or update can only proceed when the configuration data is valid. For more information, see [About validators](https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-configuration-profile.html#appconfig-creating-configuration-and-profile-validators) in the *AppConfig User Guide*.
 *
 * @public
 */
export interface Validator {
  /**
   * AppConfig supports validators of type `JSON_SCHEMA` and `LAMBDA`
   *
   * @public
   */
  Type: ValidatorType | undefined;

  /**
   * Either the JSON Schema content or the Amazon Resource Name (ARN) of an Lambda function.
   *
   * @public
   */
  Content: string | undefined;
}

/**
 * @public
 */
export interface ConfigurationProfile {
  /**
   * The application ID.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The configuration profile ID.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the configuration profile.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The configuration profile description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The URI location of the configuration.
   *
   * @public
   */
  LocationUri?: string | undefined;

  /**
   * The ARN of an IAM role with permission to access the configuration at the specified `LocationUri`.
   *
   * @public
   */
  RetrievalRoleArn?: string | undefined;

  /**
   * A list of methods for validating the configuration.
   *
   * @public
   */
  Validators?: Validator[] | undefined;

  /**
   * The type of configurations contained in the profile. AppConfig supports `feature flags` and `freeform` configurations. We recommend you create feature flag configurations to enable or disable new features and freeform configurations to distribute configurations to an application. When calling this API, enter one of the following values for `Type`:
   *
   * `AWS.AppConfig.FeatureFlags`
   *
   * `AWS.Freeform`
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The Amazon Resource Name of the Key Management Service key to encrypt new configuration data versions in the AppConfig hosted configuration store. This attribute is only used for `hosted` configuration types. To encrypt data managed in other configuration stores, see the documentation for how to specify an KMS key for that particular service.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * The Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated.
   *
   * @public
   */
  KmsKeyIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface CreateConfigurationProfileRequest {
  /**
   * The application ID.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * A name for the configuration profile.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the configuration profile.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A URI to locate the configuration. You can specify the following:
   *
   * - For the AppConfig hosted configuration store and for feature flags, specify `hosted`.
   * - For an Amazon Web Services Systems Manager Parameter Store parameter, specify either the parameter name in the format `ssm-parameter://<parameter name>` or the ARN.
   * - For an Amazon Web Services CodePipeline pipeline, specify the URI in the following format: `codepipeline`://<pipeline name>.
   * - For an Secrets Manager secret, specify the URI in the following format: `secretsmanager`://<secret name>.
   * - For an Amazon S3 object, specify the URI in the following format: `s3://<bucket>/<objectKey>`. Here is an example: `s3://amzn-s3-demo-bucket/my-app/us-east-1/my-config.json`
   * - For an SSM document, specify either the document name in the format `ssm-document://<document name>` or the Amazon Resource Name (ARN).
   *
   * @public
   */
  LocationUri: string | undefined;

  /**
   * The ARN of an IAM role with permission to access the configuration at the specified `LocationUri`.
   *
   * > **Important:** A retrieval role ARN is not required for configurations stored in CodePipeline or the AppConfig hosted configuration store. It is required for all other sources that store your configuration.
   *
   * @public
   */
  RetrievalRoleArn?: string | undefined;

  /**
   * A list of methods for validating the configuration.
   *
   * @public
   */
  Validators?: Validator[] | undefined;

  /**
   * Metadata to assign to the configuration profile. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The type of configurations contained in the profile. AppConfig supports `feature flags` and `freeform` configurations. We recommend you create feature flag configurations to enable or disable new features and freeform configurations to distribute configurations to an application. When calling this API, enter one of the following values for `Type`:
   *
   * `AWS.AppConfig.FeatureFlags`
   *
   * `AWS.Freeform`
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The identifier for an Key Management Service key to encrypt new configuration data versions in the AppConfig hosted configuration store. This attribute is only used for `hosted` configuration types. The identifier can be an KMS key ID, alias, or the Amazon Resource Name (ARN) of the key ID or alias. To encrypt data managed in other configuration stores, see the documentation for how to specify an KMS key for that particular service.
   *
   * @public
   */
  KmsKeyIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface CreateDeploymentStrategyRequest {
  /**
   * A name for the deployment strategy.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the deployment strategy.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Total amount of time for a deployment to last.
   *
   * > **Note:** AppConfig Agent supports deploying feature flag or free-form configuration data to specific segments or individual users during a gradual rollout. Entity-based gradual deployments ensure that once a user or segment receives a configuration version, they continue to receive that same version throughout the deployment period, regardless of which compute resource serves their requests. For more information, see [Using AppConfig Agent for user-based or entity-based gradual deployments](https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-agent-how-to-use.html#appconfig-entity-based-gradual-deployments)
   *
   * @public
   */
  DeploymentDurationInMinutes: number | undefined;

  /**
   * Specifies the amount of time AppConfig monitors for Amazon CloudWatch alarms after the configuration has been deployed to 100% of its targets, before considering the deployment to be complete. If an alarm is triggered during this time, AppConfig rolls back the deployment. You must configure permissions for AppConfig to roll back based on CloudWatch alarms. For more information, see [Configuring permissions for rollback based on Amazon CloudWatch alarms](https://docs.aws.amazon.com/appconfig/latest/userguide/getting-started-with-appconfig-cloudwatch-alarms-permissions.html) in the *AppConfig User Guide*.
   *
   * @public
   */
  FinalBakeTimeInMinutes?: number | undefined;

  /**
   * The percentage of targets to receive a deployed configuration during each interval.
   *
   * @public
   */
  GrowthFactor: number | undefined;

  /**
   * The algorithm used to define how percentage grows over time. AppConfig supports the following growth types:
   *
   * **Linear**: For this type, AppConfig processes the deployment by dividing the total number of targets by the value specified for `Step percentage`. For example, a linear deployment that uses a `Step percentage` of 10 deploys the configuration to 10 percent of the hosts. After those deployments are complete, the system deploys the configuration to the next 10 percent. This continues until 100% of the targets have successfully received the configuration.
   *
   * **Exponential**: For this type, AppConfig processes the deployment exponentially using the following formula: `G*(2^N)`. In this formula, `G` is the growth factor specified by the user and `N` is the number of steps until the configuration is deployed to all targets. For example, if you specify a growth factor of 2, then the system rolls out the configuration as follows:
   *
   * `2*(2^0)`
   *
   * `2*(2^1)`
   *
   * `2*(2^2)`
   *
   * Expressed numerically, the deployment rolls out as follows: 2% of the targets, 4% of the targets, 8% of the targets, and continues until the configuration has been deployed to all targets.
   *
   * @public
   */
  GrowthType?: GrowthType | undefined;

  /**
   * Save the deployment strategy to a Systems Manager (SSM) document.
   *
   * @public
   */
  ReplicateTo?: ReplicateTo | undefined;

  /**
   * Metadata to assign to the deployment strategy. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeploymentStrategy {
  /**
   * The deployment strategy ID.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the deployment strategy.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the deployment strategy.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Total amount of time the deployment lasted.
   *
   * @public
   */
  DeploymentDurationInMinutes?: number | undefined;

  /**
   * The algorithm used to define how percentage grew over time.
   *
   * @public
   */
  GrowthType?: GrowthType | undefined;

  /**
   * The percentage of targets that received a deployed configuration during each interval.
   *
   * @public
   */
  GrowthFactor?: number | undefined;

  /**
   * The amount of time that AppConfig monitored for alarms before considering the deployment to be complete and no longer eligible for automatic rollback.
   *
   * @public
   */
  FinalBakeTimeInMinutes?: number | undefined;

  /**
   * Save the deployment strategy to a Systems Manager (SSM) document.
   *
   * @public
   */
  ReplicateTo?: ReplicateTo | undefined;
}

/**
 * Amazon CloudWatch alarms to monitor during the deployment process.
 *
 * @public
 */
export interface Monitor {
  /**
   * Amazon Resource Name (ARN) of the Amazon CloudWatch alarm.
   *
   * @public
   */
  AlarmArn: string | undefined;

  /**
   * ARN of an Identity and Access Management (IAM) role for AppConfig to monitor `AlarmArn`.
   *
   * @public
   */
  AlarmRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentRequest {
  /**
   * The application ID.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * A name for the environment.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the environment.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Amazon CloudWatch alarms to monitor during the deployment process.
   *
   * @public
   */
  Monitors?: Monitor[] | undefined;

  /**
   * Metadata to assign to the environment. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface Environment {
  /**
   * The application ID.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The environment ID.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the environment.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the environment.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The state of the environment. An environment can be in one of the following states: `READY_FOR_DEPLOYMENT`, `DEPLOYING`, `ROLLING_BACK`, or `ROLLED_BACK`
   *
   * @public
   */
  State?: EnvironmentState | undefined;

  /**
   * Amazon CloudWatch alarms monitored during the deployment.
   *
   * @public
   */
  Monitors?: Monitor[] | undefined;
}

/**
 * A value for a feature flag attribute. Only one of the members can be set.
 *
 * @public
 */
export type AttributeValue =
  | AttributeValue.BooleanValueMember
  | AttributeValue.NumberArrayMember
  | AttributeValue.NumberValueMember
  | AttributeValue.StringArrayMember
  | AttributeValue.StringValueMember
  | AttributeValue.$UnknownMember;

/**
 * @public
 */
export namespace AttributeValue {
  /**
   * A string value for the attribute.
   *
   * @public
   */
  export interface StringValueMember {
    StringValue: string;
    NumberValue?: never;
    BooleanValue?: never;
    StringArray?: never;
    NumberArray?: never;
    $unknown?: never;
  }

  /**
   * A numeric value for the attribute.
   *
   * @public
   */
  export interface NumberValueMember {
    StringValue?: never;
    NumberValue: number;
    BooleanValue?: never;
    StringArray?: never;
    NumberArray?: never;
    $unknown?: never;
  }

  /**
   * A Boolean value for the attribute.
   *
   * @public
   */
  export interface BooleanValueMember {
    StringValue?: never;
    NumberValue?: never;
    BooleanValue: boolean;
    StringArray?: never;
    NumberArray?: never;
    $unknown?: never;
  }

  /**
   * An array of string values for the attribute.
   *
   * @public
   */
  export interface StringArrayMember {
    StringValue?: never;
    NumberValue?: never;
    BooleanValue?: never;
    StringArray: string[];
    NumberArray?: never;
    $unknown?: never;
  }

  /**
   * An array of numeric values for the attribute.
   *
   * @public
   */
  export interface NumberArrayMember {
    StringValue?: never;
    NumberValue?: never;
    BooleanValue?: never;
    StringArray?: never;
    NumberArray: number[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    StringValue?: never;
    NumberValue?: never;
    BooleanValue?: never;
    StringArray?: never;
    NumberArray?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    StringValue: (value: string) => T;
    NumberValue: (value: number) => T;
    BooleanValue: (value: boolean) => T;
    StringArray: (value: string[]) => T;
    NumberArray: (value: number[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The feature flag value configuration for a treatment, including the enabled state and attribute values.
 *
 * @public
 */
export interface FlagValue {
  /**
   * Specifies whether the feature flag is enabled for this treatment.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * The attribute values associated with this flag value.
   *
   * @public
   */
  AttributeValues?: Record<string, AttributeValue> | undefined;
}

/**
 * Input structure for defining a treatment when creating or updating an experiment definition.
 *
 * @public
 */
export interface TreatmentInput {
  /**
   * The traffic allocation weight for this treatment.
   *
   * @public
   */
  Weight: number | undefined;

  /**
   * A description of the treatment.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The feature flag value to serve to users assigned to this treatment.
   *
   * @public
   */
  FlagValue: FlagValue | undefined;
}

/**
 * @public
 */
export interface CreateExperimentDefinitionRequest {
  /**
   * The application ID or name.
   *
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * A name for the experiment definition.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The configuration profile ID or name that stores the feature flag.
   *
   * @public
   */
  ConfigurationProfileIdentifier: string | undefined;

  /**
   * The environment ID or name where the experiment will run.
   *
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * The key of the existing feature flag to use with the experiment.
   *
   * @public
   */
  FlagKey: string | undefined;

  /**
   * A list of treatments to evaluate during the experiment. Each treatment defines a distinct variation compared to the control.
   *
   * @public
   */
  Treatments: TreatmentInput[] | undefined;

  /**
   * The control treatment that represents the baseline experience for comparison.
   *
   * @public
   */
  Control: TreatmentInput | undefined;

  /**
   * A rule that defines which users are eligible to be assigned to treatments during the experiment.
   *
   * @public
   */
  AudienceRule: string | undefined;

  /**
   * A description of the goal or hypothesis the experiment is designed to validate.
   *
   * @public
   */
  Hypothesis?: string | undefined;

  /**
   * A description of the intended audience for the experiment.
   *
   * @public
   */
  AudienceDescription?: string | undefined;

  /**
   * Information about the conditions under which you would launch the winning treatment.
   *
   * @public
   */
  LaunchCriteria?: string | undefined;

  /**
   * The tags to assign to the experiment definition. Tags help organize and categorize your AppConfig resources.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Describes a treatment in an experiment, including its traffic allocation weight and feature flag value.
 *
 * @public
 */
export interface Treatment {
  /**
   * The unique key that identifies this treatment.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The traffic allocation weight for this treatment.
   *
   * @public
   */
  Weight: number | undefined;

  /**
   * A description of the treatment.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The feature flag value served to users assigned to this treatment.
   *
   * @public
   */
  FlagValue: FlagValue | undefined;
}

/**
 * Describes an experiment definition, including the target audience, feature flag, treatments, and current status.
 *
 * @public
 */
export interface ExperimentDefinition {
  /**
   * The application ID.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The experiment definition ID.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the experiment definition.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The hypothesis that the experiment is designed to validate.
   *
   * @public
   */
  Hypothesis?: string | undefined;

  /**
   * The current status of the experiment definition. Valid values: `ACTIVE`, `IDLE`, `ARCHIVED`.
   *
   * @public
   */
  Status?: ExperimentDefinitionStatus | undefined;

  /**
   * The configuration profile ID associated with the experiment.
   *
   * @public
   */
  ConfigurationProfileId?: string | undefined;

  /**
   * The environment ID where the experiment runs.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * The key of the feature flag used by the experiment.
   *
   * @public
   */
  FlagKey?: string | undefined;

  /**
   * The rule that defines which users are eligible to be assigned to treatments.
   *
   * @public
   */
  AudienceRule?: string | undefined;

  /**
   * A description of the intended audience for the experiment.
   *
   * @public
   */
  AudienceDescription?: string | undefined;

  /**
   * The conditions under which the winning treatment should be launched.
   *
   * @public
   */
  LaunchCriteria?: string | undefined;

  /**
   * The list of treatments defined for the experiment.
   *
   * @public
   */
  Treatments?: Treatment[] | undefined;

  /**
   * The control treatment used as the baseline for comparison.
   *
   * @public
   */
  Control?: Treatment | undefined;

  /**
   * The date and time the experiment definition was created, in ISO 8601 format.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time the experiment definition was last updated, in ISO 8601 format.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt experiment data.
   *
   * @public
   */
  KmsKeyIdentifier?: string | undefined;
}

/**
 * A value such as an Amazon Resource Name (ARN) or an Amazon Simple Notification Service topic entered in an extension when invoked. Parameter values are specified in an extension association. For more information about extensions, see [Extending workflows](https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html) in the *AppConfig User Guide*.
 *
 * @public
 */
export interface Parameter {
  /**
   * Information about the parameter.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A parameter value must be specified in the extension association.
   *
   * @public
   */
  Required?: boolean | undefined;

  /**
   * Indicates whether this parameter's value can be supplied at the extension's action point instead of during extension association. Dynamic parameters can't be marked `Required`.
   *
   * @public
   */
  Dynamic?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateExtensionRequest {
  /**
   * A name for the extension. Each extension name in your account must be unique. Extension versions use the same name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Information about the extension.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The actions defined in the extension.
   *
   * @public
   */
  Actions: Partial<Record<ActionPoint, Action[]>> | undefined;

  /**
   * The parameters accepted by the extension. You specify parameter values when you associate the extension to an AppConfig resource by using the `CreateExtensionAssociation` API action. For Lambda extension actions, these parameters are included in the Lambda request object.
   *
   * @public
   */
  Parameters?: Record<string, Parameter> | undefined;

  /**
   * Adds one or more tags for the specified extension. Tags are metadata that help you categorize resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * You can omit this field when you create an extension. When you create a new version, specify the most recent current version number. For example, you create version 3, enter 2 for this field.
   *
   * @public
   */
  LatestVersionNumber?: number | undefined;
}

/**
 * @public
 */
export interface Extension {
  /**
   * The system-generated ID of the extension.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The extension name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The extension version number.
   *
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * The system-generated Amazon Resource Name (ARN) for the extension.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Information about the extension.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The actions defined in the extension.
   *
   * @public
   */
  Actions?: Partial<Record<ActionPoint, Action[]>> | undefined;

  /**
   * The parameters accepted by the extension. You specify parameter values when you associate the extension to an AppConfig resource by using the `CreateExtensionAssociation` API action. For Lambda extension actions, these parameters are included in the Lambda request object.
   *
   * @public
   */
  Parameters?: Record<string, Parameter> | undefined;
}

/**
 * @public
 */
export interface CreateExtensionAssociationRequest {
  /**
   * The name, the ID, or the Amazon Resource Name (ARN) of the extension.
   *
   * @public
   */
  ExtensionIdentifier: string | undefined;

  /**
   * The version number of the extension. If not specified, AppConfig uses the maximum version of the extension.
   *
   * @public
   */
  ExtensionVersionNumber?: number | undefined;

  /**
   * The ARN of an application, configuration profile, or environment.
   *
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * The parameter names and values defined in the extensions. Extension parameters marked `Required` must be entered for this field.
   *
   * @public
   */
  Parameters?: Record<string, string> | undefined;

  /**
   * Adds one or more tags for the specified extension association. Tags are metadata that help you categorize resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ExtensionAssociation {
  /**
   * The system-generated ID for the association.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The ARN of the extension defined in the association.
   *
   * @public
   */
  ExtensionArn?: string | undefined;

  /**
   * The ARNs of applications, configuration profiles, or environments defined in the association.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The system-generated Amazon Resource Name (ARN) for the extension.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The parameter names and values defined in the association.
   *
   * @public
   */
  Parameters?: Record<string, string> | undefined;

  /**
   * The version number for the extension defined in the association.
   *
   * @public
   */
  ExtensionVersionNumber?: number | undefined;
}

/**
 * @public
 */
export interface CreateHostedConfigurationVersionRequest {
  /**
   * The application ID.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The configuration profile ID.
   *
   * @public
   */
  ConfigurationProfileId: string | undefined;

  /**
   * A description of the configuration.
   *
   * > **Note:** Due to HTTP limitations, this field only supports ASCII characters.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The configuration data, as bytes.
   *
   * > **Note:** AppConfig accepts any type of data, including text formats like JSON or TOML, or binary formats like protocol buffers or compressed data.
   *
   * @public
   */
  Content: Uint8Array | undefined;

  /**
   * A standard MIME type describing the format of the configuration content. For more information, see [Content-Type](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17).
   *
   * @public
   */
  ContentType: string | undefined;

  /**
   * An optional locking token used to prevent race conditions from overwriting configuration updates when creating a new version. To ensure your data is not overwritten when creating multiple hosted configuration versions in rapid succession, specify the version number of the latest hosted configuration version.
   *
   * @public
   */
  LatestVersionNumber?: number | undefined;

  /**
   * An optional, user-defined label for the AppConfig hosted configuration version. This value must contain at least one non-numeric character. For example, "v2.2.0".
   *
   * @public
   */
  VersionLabel?: string | undefined;
}

/**
 * @public
 */
export interface HostedConfigurationVersion {
  /**
   * The application ID.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The configuration profile ID.
   *
   * @public
   */
  ConfigurationProfileId?: string | undefined;

  /**
   * The configuration version.
   *
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * A description of the configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The content of the configuration or the configuration data.
   *
   * @public
   */
  Content?: Uint8Array | undefined;

  /**
   * A standard MIME type describing the format of the configuration content. For more information, see [Content-Type](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17).
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * A user-defined label for an AppConfig hosted configuration version.
   *
   * @public
   */
  VersionLabel?: string | undefined;

  /**
   * The Amazon Resource Name of the Key Management Service key that was used to encrypt this specific version of the configuration data in the AppConfig hosted configuration store.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * The ID of the application to delete.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfigurationProfileRequest {
  /**
   * The application ID that includes the configuration profile you want to delete.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The ID of the configuration profile you want to delete.
   *
   * @public
   */
  ConfigurationProfileId: string | undefined;

  /**
   * A parameter to configure deletion protection. Deletion protection prevents a user from deleting a configuration profile if your application has called either [GetLatestConfiguration](https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html) or for the configuration profile during the specified interval.
   *
   * This parameter supports the following values:
   *
   * - `BYPASS`: Instructs AppConfig to bypass the deletion protection check and delete a configuration profile even if deletion protection would have otherwise prevented it.
   * - `APPLY`: Instructs the deletion protection check to run, even if deletion protection is disabled at the account level. `APPLY` also forces the deletion protection check to run against resources created in the past hour, which are normally excluded from deletion protection checks.
   * - `ACCOUNT_DEFAULT`: The default setting, which instructs AppConfig to implement the deletion protection value specified in the `UpdateAccountSettings` API.
   *
   * @public
   */
  DeletionProtectionCheck?: DeletionProtectionCheck | undefined;
}

/**
 * @public
 */
export interface DeleteDeploymentStrategyRequest {
  /**
   * The ID of the deployment strategy you want to delete.
   *
   * @public
   */
  DeploymentStrategyId: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentRequest {
  /**
   * The ID of the environment that you want to delete.
   *
   * @public
   */
  EnvironmentId: string | undefined;

  /**
   * The application ID that includes the environment that you want to delete.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * A parameter to configure deletion protection. Deletion protection prevents a user from deleting an environment if your application called either [GetLatestConfiguration](https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html) or in the environment during the specified interval.
   *
   * This parameter supports the following values:
   *
   * - `BYPASS`: Instructs AppConfig to bypass the deletion protection check and delete a configuration profile even if deletion protection would have otherwise prevented it.
   * - `APPLY`: Instructs the deletion protection check to run, even if deletion protection is disabled at the account level. `APPLY` also forces the deletion protection check to run against resources created in the past hour, which are normally excluded from deletion protection checks.
   * - `ACCOUNT_DEFAULT`: The default setting, which instructs AppConfig to implement the deletion protection value specified in the `UpdateAccountSettings` API.
   *
   * @public
   */
  DeletionProtectionCheck?: DeletionProtectionCheck | undefined;
}

/**
 * @public
 */
export interface DeleteExperimentDefinitionRequest {
  /**
   * The application ID or name.
   *
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * The experiment definition ID or name.
   *
   * @public
   */
  ExperimentDefinitionIdentifier: string | undefined;

  /**
   * The type of deletion to perform. Valid values include archive (hide but preserve) and permanent (delete permanently).
   *
   * @public
   */
  DeleteType?: DeleteType | undefined;
}

/**
 * @public
 */
export interface DeleteExtensionRequest {
  /**
   * The name, ID, or Amazon Resource Name (ARN) of the extension you want to delete.
   *
   * @public
   */
  ExtensionIdentifier: string | undefined;

  /**
   * A specific version of an extension to delete. If omitted, the highest version is deleted.
   *
   * @public
   */
  VersionNumber?: number | undefined;
}

/**
 * @public
 */
export interface DeleteExtensionAssociationRequest {
  /**
   * The ID of the extension association to delete.
   *
   * @public
   */
  ExtensionAssociationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteHostedConfigurationVersionRequest {
  /**
   * The application ID.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The configuration profile ID.
   *
   * @public
   */
  ConfigurationProfileId: string | undefined;

  /**
   * The versions number to delete.
   *
   * @public
   */
  VersionNumber: number | undefined;
}

/**
 * @public
 */
export interface GetApplicationRequest {
  /**
   * The ID of the application you want to get.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface Configuration {
  /**
   * The content of the configuration or the configuration data.
   *
   * > **Important:** The `Content` attribute only contains data if the system finds new or updated configuration data. If there is no new or updated data and `ClientConfigurationVersion` matches the version of the current configuration, AppConfig returns a `204 No Content` HTTP response code and the `Content` value will be empty.
   *
   * @public
   */
  Content?: Uint8Array | undefined;

  /**
   * The configuration version.
   *
   * @public
   */
  ConfigurationVersion?: string | undefined;

  /**
   * A standard MIME type describing the format of the configuration content. For more information, see [Content-Type](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17).
   *
   * @public
   */
  ContentType?: string | undefined;
}

/**
 * @public
 */
export interface GetConfigurationRequest {
  /**
   * The application to get. Specify either the application name or the application ID.
   *
   * @public
   */
  Application: string | undefined;

  /**
   * The environment to get. Specify either the environment name or the environment ID.
   *
   * @public
   */
  Environment: string | undefined;

  /**
   * The configuration to get. Specify either the configuration name or the configuration ID.
   *
   * @public
   */
  Configuration: string | undefined;

  /**
   * The clientId parameter in the following command is a unique, user-specified ID to identify the client for the configuration. This ID enables AppConfig to deploy the configuration in intervals, as defined in the deployment strategy.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * The configuration version returned in the most recent GetConfiguration response.
   *
   * > **Important:**
   * >
   * > AppConfig uses the value of the `ClientConfigurationVersion` parameter to identify the configuration version on your clients. If you don’t send `ClientConfigurationVersion` with each call to GetConfiguration, your clients receive the current configuration. You are charged each time your clients receive a configuration.
   * >
   * > To avoid excess charges, we recommend you use the [StartConfigurationSession](https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/StartConfigurationSession.html) and [GetLatestConfiguration](https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/GetLatestConfiguration.html) APIs, which track the client configuration version on your behalf. If you choose to continue using GetConfiguration, we recommend that you include the `ClientConfigurationVersion` value with every call to GetConfiguration. The value to use for `ClientConfigurationVersion` comes from the `ConfigurationVersion` attribute returned by GetConfiguration when there is new or updated data, and should be saved for subsequent calls to GetConfiguration.
   *
   * For more information about working with configurations, see [Retrieving feature flags and configuration data in AppConfig](http://docs.aws.amazon.com/appconfig/latest/userguide/retrieving-feature-flags.html) in the *AppConfig User Guide*.
   *
   * @public
   */
  ClientConfigurationVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetConfigurationProfileRequest {
  /**
   * The ID of the application that includes the configuration profile you want to get.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The ID of the configuration profile that you want to get.
   *
   * @public
   */
  ConfigurationProfileId: string | undefined;
}

/**
 * An extension that was invoked during a deployment.
 *
 * @public
 */
export interface AppliedExtension {
  /**
   * The system-generated ID of the extension.
   *
   * @public
   */
  ExtensionId?: string | undefined;

  /**
   * The system-generated ID for the association.
   *
   * @public
   */
  ExtensionAssociationId?: string | undefined;

  /**
   * The extension version number.
   *
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * One or more parameters for the actions called by the extension.
   *
   * @public
   */
  Parameters?: Record<string, string> | undefined;
}

/**
 * An object that describes a deployment event.
 *
 * @public
 */
export interface DeploymentEvent {
  /**
   * The type of deployment event. Deployment event types include the start, stop, or completion of a deployment; a percentage update; the start or stop of a bake period; and the start or completion of a rollback.
   *
   * @public
   */
  EventType?: DeploymentEventType | undefined;

  /**
   * The entity that triggered the deployment event. Events can be triggered by a user, AppConfig, an Amazon CloudWatch alarm, or an internal error.
   *
   * @public
   */
  TriggeredBy?: TriggeredBy | undefined;

  /**
   * A description of the deployment event. Descriptions include, but are not limited to, the following:
   *
   * - The Amazon Web Services account or the Amazon CloudWatch alarm ARN that initiated a rollback.
   * - The percentage of hosts that received the deployment.
   * - A recommendation to attempt a new deployment (in the case of an internal error).
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The list of extensions that were invoked as part of the deployment.
   *
   * @public
   */
  ActionInvocations?: ActionInvocation[] | undefined;

  /**
   * The date and time the event occurred.
   *
   * @public
   */
  OccurredAt?: Date | undefined;
}

/**
 * @public
 */
export interface Deployment {
  /**
   * The ID of the application that was deployed.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The ID of the environment that was deployed.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * The ID of the deployment strategy that was deployed.
   *
   * @public
   */
  DeploymentStrategyId?: string | undefined;

  /**
   * The ID of the configuration profile that was deployed.
   *
   * @public
   */
  ConfigurationProfileId?: string | undefined;

  /**
   * The sequence number of the deployment.
   *
   * @public
   */
  DeploymentNumber?: number | undefined;

  /**
   * The name of the configuration.
   *
   * @public
   */
  ConfigurationName?: string | undefined;

  /**
   * Information about the source location of the configuration.
   *
   * @public
   */
  ConfigurationLocationUri?: string | undefined;

  /**
   * The configuration version that was deployed.
   *
   * @public
   */
  ConfigurationVersion?: string | undefined;

  /**
   * The description of the deployment.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Total amount of time the deployment lasted.
   *
   * @public
   */
  DeploymentDurationInMinutes?: number | undefined;

  /**
   * The algorithm used to define how percentage grew over time.
   *
   * @public
   */
  GrowthType?: GrowthType | undefined;

  /**
   * The percentage of targets to receive a deployed configuration during each interval.
   *
   * @public
   */
  GrowthFactor?: number | undefined;

  /**
   * The amount of time that AppConfig monitored for alarms before considering the deployment to be complete and no longer eligible for automatic rollback.
   *
   * @public
   */
  FinalBakeTimeInMinutes?: number | undefined;

  /**
   * The state of the deployment.
   *
   * @public
   */
  State?: DeploymentState | undefined;

  /**
   * A list containing all events related to a deployment. The most recent events are displayed first.
   *
   * @public
   */
  EventLog?: DeploymentEvent[] | undefined;

  /**
   * The percentage of targets for which the deployment is available.
   *
   * @public
   */
  PercentageComplete?: number | undefined;

  /**
   * The time the deployment started.
   *
   * @public
   */
  StartedAt?: Date | undefined;

  /**
   * The time the deployment completed.
   *
   * @public
   */
  CompletedAt?: Date | undefined;

  /**
   * A list of extensions that were processed as part of the deployment. The extensions that were previously associated to the configuration profile, environment, or the application when `StartDeployment` was called.
   *
   * @public
   */
  AppliedExtensions?: AppliedExtension[] | undefined;

  /**
   * The Amazon Resource Name of the Key Management Service key used to encrypt configuration data. You can encrypt secrets stored in Secrets Manager, Amazon Simple Storage Service (Amazon S3) objects encrypted with SSE-KMS, or secure string parameters stored in Amazon Web Services Systems Manager Parameter Store.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * The Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated.
   *
   * @public
   */
  KmsKeyIdentifier?: string | undefined;

  /**
   * A user-defined label for an AppConfig hosted configuration version.
   *
   * @public
   */
  VersionLabel?: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentRequest {
  /**
   * The ID of the application that includes the deployment you want to get.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The ID of the environment that includes the deployment you want to get.
   *
   * @public
   */
  EnvironmentId: string | undefined;

  /**
   * The sequence number of the deployment.
   *
   * @public
   */
  DeploymentNumber: number | undefined;
}

/**
 * @public
 */
export interface GetDeploymentStrategyRequest {
  /**
   * The ID of the deployment strategy to get.
   *
   * @public
   */
  DeploymentStrategyId: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentRequest {
  /**
   * The ID of the application that includes the environment you want to get.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The ID of the environment that you want to get.
   *
   * @public
   */
  EnvironmentId: string | undefined;
}

/**
 * @public
 */
export interface GetExperimentDefinitionRequest {
  /**
   * The application ID or name.
   *
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * The experiment definition ID or name.
   *
   * @public
   */
  ExperimentDefinitionIdentifier: string | undefined;
}

/**
 * A snapshot of the experiment definition captured at the time an experiment run was started. This preserves the configuration that was active during the run.
 *
 * @public
 */
export interface ExperimentDefinitionSnapshot {
  /**
   * The application ID at the time the run was started.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The experiment definition ID.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the experiment definition at the time the run was started.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The hypothesis at the time the run was started.
   *
   * @public
   */
  Hypothesis?: string | undefined;

  /**
   * The configuration profile ID at the time the run was started.
   *
   * @public
   */
  ConfigurationProfileId?: string | undefined;

  /**
   * The environment ID at the time the run was started.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * The feature flag key at the time the run was started.
   *
   * @public
   */
  FlagKey?: string | undefined;

  /**
   * The audience rule at the time the run was started.
   *
   * @public
   */
  AudienceRule?: string | undefined;

  /**
   * The audience description at the time the run was started.
   *
   * @public
   */
  AudienceDescription?: string | undefined;

  /**
   * The launch criteria at the time the run was started.
   *
   * @public
   */
  LaunchCriteria?: string | undefined;

  /**
   * The treatments at the time the run was started.
   *
   * @public
   */
  Treatments?: Treatment[] | undefined;

  /**
   * The control treatment at the time the run was started.
   *
   * @public
   */
  Control?: Treatment | undefined;
}

/**
 * The result of an experiment run, including the executive summary and launch decision rationale.
 *
 * @public
 */
export interface ExperimentRunResult {
  /**
   * A summary of the experiment outcome and key findings.
   *
   * @public
   */
  ExecutiveSummary?: string | undefined;

  /**
   * Evidence in favor of launching the winning treatment.
   *
   * @public
   */
  ReasonsToLaunch?: string | undefined;

  /**
   * Evidence against launching the treatment.
   *
   * @public
   */
  ReasonsNotToLaunch?: string | undefined;
}

/**
 * Treatment assignment overrides that assign specific entity IDs to treatments, bypassing random assignment.
 *
 * @public
 */
export type TreatmentOverrides =
  | TreatmentOverrides.InlineMember
  | TreatmentOverrides.$UnknownMember;

/**
 * @public
 */
export namespace TreatmentOverrides {
  /**
   * A map of entity IDs to treatment keys. Each entry assigns the specified entity to the specified treatment, bypassing random assignment.
   *
   * @public
   */
  export interface InlineMember {
    Inline: Record<string, string>;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Inline?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Inline: (value: Record<string, string>) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Describes an experiment run, including its status, exposure settings, and treatment overrides.
 *
 * @public
 */
export interface ExperimentRun {
  /**
   * The application ID.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The experiment definition ID.
   *
   * @public
   */
  ExperimentDefinitionId?: string | undefined;

  /**
   * The experiment run number.
   *
   * @public
   */
  Run?: number | undefined;

  /**
   * A description of the experiment run.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The current status of the experiment run. Valid values: `RUNNING`, `DONE`.
   *
   * @public
   */
  Status?: ExperimentRunStatus | undefined;

  /**
   * The percentage of the target audience exposed to treatments.
   *
   * @public
   */
  ExposurePercentage?: number | undefined;

  /**
   * Treatment assignment overrides that assign specific entity IDs to treatments.
   *
   * @public
   */
  TreatmentOverrides?: TreatmentOverrides | undefined;

  /**
   * The result of the experiment run, including the executive summary and launch decision rationale.
   *
   * @public
   */
  Result?: ExperimentRunResult | undefined;

  /**
   * The date and time the experiment run started, in ISO 8601 format.
   *
   * @public
   */
  StartedAt?: Date | undefined;

  /**
   * The date and time the experiment run was last updated, in ISO 8601 format.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The date and time the experiment run ended, in ISO 8601 format.
   *
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * A snapshot of the experiment definition at the time the run was started.
   *
   * @public
   */
  ExperimentDefinitionSnapshot?: ExperimentDefinitionSnapshot | undefined;
}

/**
 * @public
 */
export interface GetExperimentRunRequest {
  /**
   * The application ID or name.
   *
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * The experiment definition ID or name.
   *
   * @public
   */
  ExperimentDefinitionIdentifier: string | undefined;

  /**
   * The run number to retrieve.
   *
   * @public
   */
  Run: number | undefined;
}

/**
 * @public
 */
export interface GetExtensionRequest {
  /**
   * The name, the ID, or the Amazon Resource Name (ARN) of the extension.
   *
   * @public
   */
  ExtensionIdentifier: string | undefined;

  /**
   * The extension version number. If no version number was defined, AppConfig uses the highest version.
   *
   * @public
   */
  VersionNumber?: number | undefined;
}

/**
 * @public
 */
export interface GetExtensionAssociationRequest {
  /**
   * The extension association ID to get.
   *
   * @public
   */
  ExtensionAssociationId: string | undefined;
}

/**
 * @public
 */
export interface GetHostedConfigurationVersionRequest {
  /**
   * The application ID.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The configuration profile ID.
   *
   * @public
   */
  ConfigurationProfileId: string | undefined;

  /**
   * The version.
   *
   * @public
   */
  VersionNumber: number | undefined;
}

/**
 * @public
 */
export interface Applications {
  /**
   * The elements from this collection.
   *
   * @public
   */
  Items?: Application[] | undefined;

  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token to start the list. Next token is a pagination token generated by AppConfig to describe what page the previous List call ended on. For the first List request, the nextToken should not be set. On subsequent calls, the nextToken parameter should be set to the previous responses nextToken value. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A summary of a configuration profile.
 *
 * @public
 */
export interface ConfigurationProfileSummary {
  /**
   * The application ID.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The ID of the configuration profile.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the configuration profile.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The URI location of the configuration.
   *
   * @public
   */
  LocationUri?: string | undefined;

  /**
   * The types of validators in the configuration profile.
   *
   * @public
   */
  ValidatorTypes?: ValidatorType[] | undefined;

  /**
   * The type of configurations contained in the profile. AppConfig supports `feature flags` and `freeform` configurations. We recommend you create feature flag configurations to enable or disable new features and freeform configurations to distribute configurations to an application. When calling this API, enter one of the following values for `Type`:
   *
   * `AWS.AppConfig.FeatureFlags`
   *
   * `AWS.Freeform`
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * @public
 */
export interface ConfigurationProfiles {
  /**
   * The elements from this collection.
   *
   * @public
   */
  Items?: ConfigurationProfileSummary[] | undefined;

  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationProfilesRequest {
  /**
   * The application ID.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token to start the list. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A filter based on the type of configurations that the configuration profile contains. A configuration can be a feature flag or a freeform configuration.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Information about the deployment.
 *
 * @public
 */
export interface DeploymentSummary {
  /**
   * The sequence number of the deployment.
   *
   * @public
   */
  DeploymentNumber?: number | undefined;

  /**
   * The ID of the configuration profile that was deployed.
   *
   * @public
   */
  ConfigurationProfileId?: string | undefined;

  /**
   * The name of the configuration.
   *
   * @public
   */
  ConfigurationName?: string | undefined;

  /**
   * The version of the configuration.
   *
   * @public
   */
  ConfigurationVersion?: string | undefined;

  /**
   * Total amount of time the deployment lasted.
   *
   * @public
   */
  DeploymentDurationInMinutes?: number | undefined;

  /**
   * The algorithm used to define how percentage grows over time.
   *
   * @public
   */
  GrowthType?: GrowthType | undefined;

  /**
   * The percentage of targets to receive a deployed configuration during each interval.
   *
   * @public
   */
  GrowthFactor?: number | undefined;

  /**
   * The amount of time that AppConfig monitors for alarms before considering the deployment to be complete and no longer eligible for automatic rollback.
   *
   * @public
   */
  FinalBakeTimeInMinutes?: number | undefined;

  /**
   * The state of the deployment.
   *
   * @public
   */
  State?: DeploymentState | undefined;

  /**
   * The percentage of targets for which the deployment is available.
   *
   * @public
   */
  PercentageComplete?: number | undefined;

  /**
   * Time the deployment started.
   *
   * @public
   */
  StartedAt?: Date | undefined;

  /**
   * Time the deployment completed.
   *
   * @public
   */
  CompletedAt?: Date | undefined;

  /**
   * A user-defined label for an AppConfig hosted configuration version.
   *
   * @public
   */
  VersionLabel?: string | undefined;

  /**
   * The type of deployment.
   *
   * @public
   */
  Type?: DeploymentType | undefined;
}

/**
 * @public
 */
export interface Deployments {
  /**
   * The elements from this collection.
   *
   * @public
   */
  Items?: DeploymentSummary[] | undefined;

  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDeploymentsRequest {
  /**
   * The application ID.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The environment ID.
   *
   * @public
   */
  EnvironmentId: string | undefined;

  /**
   * The maximum number of items that may be returned for this call. If there are items that have not yet been returned, the response will include a non-null `NextToken` that you can provide in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned by a prior call to this operation indicating the next set of results to be returned. If not specified, the operation will return the first set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DeploymentStrategies {
  /**
   * The elements from this collection.
   *
   * @public
   */
  Items?: DeploymentStrategy[] | undefined;

  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDeploymentStrategiesRequest {
  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token to start the list. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface Environments {
  /**
   * The elements from this collection.
   *
   * @public
   */
  Items?: Environment[] | undefined;

  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsRequest {
  /**
   * The application ID.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token to start the list. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Summary information about an experiment definition.
 *
 * @public
 */
export interface ExperimentDefinitionSummary {
  /**
   * The application ID.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The experiment definition ID.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the experiment definition.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The hypothesis that the experiment is designed to validate.
   *
   * @public
   */
  Hypothesis?: string | undefined;

  /**
   * The current status of the experiment definition.
   *
   * @public
   */
  Status?: ExperimentDefinitionStatus | undefined;

  /**
   * The configuration profile ID associated with the experiment.
   *
   * @public
   */
  ConfigurationProfileId?: string | undefined;

  /**
   * The environment ID where the experiment runs.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * The key of the feature flag used by the experiment.
   *
   * @public
   */
  FlagKey?: string | undefined;

  /**
   * The date and time the experiment definition was created, in ISO 8601 format.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time the experiment definition was last updated, in ISO 8601 format.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * The response for a list experiment definitions request.
 *
 * @public
 */
export interface ExperimentDefinitions {
  /**
   * The list of experiment definitions.
   *
   * @public
   */
  Items?: ExperimentDefinitionSummary[] | undefined;

  /**
   * A token to use for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExperimentDefinitionsRequest {
  /**
   * The application ID or name to filter results.
   *
   * @public
   */
  ApplicationIdentifier?: string | undefined;

  /**
   * The configuration profile ID or name to filter results.
   *
   * @public
   */
  ConfigurationProfileIdentifier?: string | undefined;

  /**
   * The environment ID or name to filter results.
   *
   * @public
   */
  EnvironmentIdentifier?: string | undefined;

  /**
   * A filter for the experiment definition status.
   *
   * @public
   */
  Status?: ExperimentDefinitionStatus | undefined;

  /**
   * The maximum number of items to return for this call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token to start the list from a previously truncated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes an event that occurred during an experiment run.
 *
 * @public
 */
export interface ExperimentRunEvent {
  /**
   * A description of the event.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the deployment associated with this event.
   *
   * @public
   */
  AssociatedDeployment?: string | undefined;

  /**
   * The type of event. Valid values: `RUN_STARTED`, `EXPOSURE_UPDATED`, `OVERRIDES_UPDATED`, `RUN_STOPPED`.
   *
   * @public
   */
  EventType?: ExperimentRunEventType | undefined;

  /**
   * The date and time the event occurred, in ISO 8601 format.
   *
   * @public
   */
  OccurredAt?: Date | undefined;

  /**
   * The principal that triggered the event.
   *
   * @public
   */
  TriggeredBy?: TriggeredBy | undefined;

  /**
   * The exposure percentage at the time of the event.
   *
   * @public
   */
  ExposurePercentage?: number | undefined;

  /**
   * The treatment overrides at the time of the event.
   *
   * @public
   */
  TreatmentOverrides?: TreatmentOverrides | undefined;
}

/**
 * The response for a list experiment run events request.
 *
 * @public
 */
export interface ExperimentRunEvents {
  /**
   * The list of experiment run events.
   *
   * @public
   */
  Items?: ExperimentRunEvent[] | undefined;

  /**
   * A token to use for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExperimentRunEventsRequest {
  /**
   * The application ID or name.
   *
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * The experiment definition ID or name.
   *
   * @public
   */
  ExperimentDefinitionIdentifier: string | undefined;

  /**
   * The run number.
   *
   * @public
   */
  Run: number | undefined;

  /**
   * The maximum number of items to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token to start the list from a previously truncated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Summary information about an experiment run.
 *
 * @public
 */
export interface ExperimentRunSummary {
  /**
   * The experiment definition ID.
   *
   * @public
   */
  ExperimentDefinitionId?: string | undefined;

  /**
   * The experiment run number.
   *
   * @public
   */
  Run?: number | undefined;

  /**
   * A description of the experiment run.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The current status of the experiment run.
   *
   * @public
   */
  Status?: ExperimentRunStatus | undefined;

  /**
   * The date and time the experiment run started, in ISO 8601 format.
   *
   * @public
   */
  StartedAt?: Date | undefined;

  /**
   * The date and time the experiment run was last updated, in ISO 8601 format.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The date and time the experiment run ended, in ISO 8601 format.
   *
   * @public
   */
  EndedAt?: Date | undefined;
}

/**
 * The response for a list experiment runs request.
 *
 * @public
 */
export interface ExperimentRuns {
  /**
   * The list of experiment runs.
   *
   * @public
   */
  Items?: ExperimentRunSummary[] | undefined;

  /**
   * A token to use for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExperimentRunsRequest {
  /**
   * The application ID or name.
   *
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * The experiment definition ID or name.
   *
   * @public
   */
  ExperimentDefinitionIdentifier: string | undefined;

  /**
   * The maximum number of items to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token to start the list from a previously truncated response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A filter for the experiment run status.
   *
   * @public
   */
  Status?: ExperimentRunStatus | undefined;
}

/**
 * Information about an association between an extension and an AppConfig resource such as an application, environment, or configuration profile. Call `GetExtensionAssociation` to get more information about an association.
 *
 * @public
 */
export interface ExtensionAssociationSummary {
  /**
   * The extension association ID. This ID is used to call other `ExtensionAssociation` API actions such as `GetExtensionAssociation` or `DeleteExtensionAssociation`.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The system-generated Amazon Resource Name (ARN) for the extension.
   *
   * @public
   */
  ExtensionArn?: string | undefined;

  /**
   * The ARNs of applications, configuration profiles, or environments defined in the association.
   *
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * @public
 */
export interface ExtensionAssociations {
  /**
   * The list of extension associations. Each item represents an extension association to an application, environment, or configuration profile.
   *
   * @public
   */
  Items?: ExtensionAssociationSummary[] | undefined;

  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExtensionAssociationsRequest {
  /**
   * The ARN of an application, configuration profile, or environment.
   *
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * The name, the ID, or the Amazon Resource Name (ARN) of the extension.
   *
   * @public
   */
  ExtensionIdentifier?: string | undefined;

  /**
   * The version number for the extension defined in the association.
   *
   * @public
   */
  ExtensionVersionNumber?: number | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token to start the list. Use this token to get the next set of results or pass null to get the first set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Information about an extension. Call `GetExtension` to get more information about an extension.
 *
 * @public
 */
export interface ExtensionSummary {
  /**
   * The system-generated ID of the extension.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The extension name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The extension version number.
   *
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * The system-generated Amazon Resource Name (ARN) for the extension.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Information about the extension.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface Extensions {
  /**
   * The list of available extensions. The list includes Amazon Web Services authored and user-created extensions.
   *
   * @public
   */
  Items?: ExtensionSummary[] | undefined;

  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExtensionsRequest {
  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token to start the list. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The extension name.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Information about the configuration.
 *
 * @public
 */
export interface HostedConfigurationVersionSummary {
  /**
   * The application ID.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The configuration profile ID.
   *
   * @public
   */
  ConfigurationProfileId?: string | undefined;

  /**
   * The configuration version.
   *
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * A description of the configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A standard MIME type describing the format of the configuration content. For more information, see [Content-Type](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17).
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * A user-defined label for an AppConfig hosted configuration version.
   *
   * @public
   */
  VersionLabel?: string | undefined;

  /**
   * The Amazon Resource Name of the Key Management Service key that was used to encrypt this specific version of the configuration data in the AppConfig hosted configuration store.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface HostedConfigurationVersions {
  /**
   * The elements from this collection.
   *
   * @public
   */
  Items?: HostedConfigurationVersionSummary[] | undefined;

  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHostedConfigurationVersionsRequest {
  /**
   * The application ID.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The configuration profile ID.
   *
   * @public
   */
  ConfigurationProfileId: string | undefined;

  /**
   * The maximum number of items to return for this call. If `MaxResults` is not provided in the call, AppConfig returns the maximum of 50. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token to start the list. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An optional filter that can be used to specify the version label of an AppConfig hosted configuration version. This parameter supports filtering by prefix using a wildcard, for example "v2*". If you don't specify an asterisk at the end of the value, only an exact match is returned.
   *
   * @public
   */
  VersionLabel?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The resource ARN.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ResourceTags {
  /**
   * Metadata to assign to AppConfig resources. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartDeploymentRequest {
  /**
   * The application ID.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The environment ID.
   *
   * @public
   */
  EnvironmentId: string | undefined;

  /**
   * The deployment strategy ID.
   *
   * @public
   */
  DeploymentStrategyId: string | undefined;

  /**
   * The configuration profile ID.
   *
   * @public
   */
  ConfigurationProfileId: string | undefined;

  /**
   * The configuration version to deploy. If deploying an AppConfig hosted configuration version, you can specify either the version number or version label. For all other configurations, you must specify the version number.
   *
   * @public
   */
  ConfigurationVersion: string | undefined;

  /**
   * A description of the deployment.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Metadata to assign to the deployment. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The KMS key identifier (key ID, key alias, or key ARN). AppConfig uses this ID to encrypt the configuration data using a customer managed key.
   *
   * @public
   */
  KmsKeyIdentifier?: string | undefined;

  /**
   * A map of dynamic extension parameter names to values to pass to associated extensions with `PRE_START_DEPLOYMENT` actions.
   *
   * @public
   */
  DynamicExtensionParameters?: Record<string, string> | undefined;

  /**
   * The number of the latest deployment. Use this value to ensure that the deployment starts from the expected state and to prevent conflicting updates.
   *
   * @public
   */
  LatestDeploymentNumber?: number | undefined;
}

/**
 * The deployment parameters for an experiment run, including dynamic extension parameters and tags.
 *
 * @public
 */
export interface DeploymentParameters {
  /**
   * A map of extension parameters for the deployment.
   *
   * @public
   */
  DynamicExtensionParameters?: Record<string, string> | undefined;

  /**
   * The tags to assign to the deployment.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartExperimentRunRequest {
  /**
   * The application ID or name.
   *
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * The experiment definition ID or name.
   *
   * @public
   */
  ExperimentDefinitionIdentifier: string | undefined;

  /**
   * A description of this experiment run.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The percentage of the target audience to expose to treatments. Set to 0 to validate the experiment before exposing production users.
   *
   * @public
   */
  ExposurePercentage?: number | undefined;

  /**
   * Treatment assignment overrides that assign specific entity IDs to treatments directly, bypassing random assignment.
   *
   * @public
   */
  TreatmentOverrides?: TreatmentOverrides | undefined;

  /**
   * The tags to assign to the experiment run.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The deployment parameters for the experiment run, including a KMS key identifier for encryption.
   *
   * @public
   */
  DeploymentParameters?: DeploymentParameters | undefined;
}

/**
 * @public
 */
export interface StopDeploymentRequest {
  /**
   * The application ID.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The environment ID.
   *
   * @public
   */
  EnvironmentId: string | undefined;

  /**
   * The sequence number of the deployment.
   *
   * @public
   */
  DeploymentNumber: number | undefined;

  /**
   * A Boolean that enables AppConfig to rollback a `COMPLETED` deployment to the previous configuration version. This action moves the deployment to a status of `REVERTED`.
   *
   * @public
   */
  AllowRevert?: boolean | undefined;
}

/**
 * @public
 */
export interface StopExperimentRunRequest {
  /**
   * The application ID or name.
   *
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * The experiment definition ID or name.
   *
   * @public
   */
  ExperimentDefinitionIdentifier: string | undefined;

  /**
   * The run number to stop.
   *
   * @public
   */
  Run: number | undefined;

  /**
   * The result of the experiment run, including an executive summary and reasons for or against launching.
   *
   * @public
   */
  Result?: ExperimentRunResult | undefined;

  /**
   * The deployment parameters for the stop operation.
   *
   * @public
   */
  DeploymentParameters?: DeploymentParameters | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource for which to retrieve tags.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The key-value string map. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with `aws:`. The tag value can be up to 256 characters.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN of the resource for which to remove tags.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tag keys to delete.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAccountSettingsRequest {
  /**
   * A parameter to configure deletion protection. Deletion protection prevents a user from deleting a configuration profile or an environment if AppConfig has called either [GetLatestConfiguration](https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html) or for the configuration profile or from the environment during the specified interval. The default interval for `ProtectionPeriodInMinutes` is 60.
   *
   * @public
   */
  DeletionProtection?: DeletionProtectionSettings | undefined;

  /**
   * The configuration for vended metrics in the account.
   *
   * @public
   */
  VendedMetrics?: VendedMetricsSettings | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * The application ID.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The name of the application.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the application.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConfigurationProfileRequest {
  /**
   * The application ID.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The ID of the configuration profile.
   *
   * @public
   */
  ConfigurationProfileId: string | undefined;

  /**
   * The name of the configuration profile.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the configuration profile.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of an IAM role with permission to access the configuration at the specified `LocationUri`.
   *
   * > **Important:** A retrieval role ARN is not required for configurations stored in CodePipeline or the AppConfig hosted configuration store. It is required for all other sources that store your configuration.
   *
   * @public
   */
  RetrievalRoleArn?: string | undefined;

  /**
   * A list of methods for validating the configuration.
   *
   * @public
   */
  Validators?: Validator[] | undefined;

  /**
   * The identifier for a Key Management Service key to encrypt new configuration data versions in the AppConfig hosted configuration store. This attribute is only used for `hosted` configuration types. The identifier can be an KMS key ID, alias, or the Amazon Resource Name (ARN) of the key ID or alias. To encrypt data managed in other configuration stores, see the documentation for how to specify an KMS key for that particular service.
   *
   * @public
   */
  KmsKeyIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDeploymentStrategyRequest {
  /**
   * The deployment strategy ID.
   *
   * @public
   */
  DeploymentStrategyId: string | undefined;

  /**
   * A description of the deployment strategy.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Total amount of time for a deployment to last.
   *
   * @public
   */
  DeploymentDurationInMinutes?: number | undefined;

  /**
   * The amount of time that AppConfig monitors for alarms before considering the deployment to be complete and no longer eligible for automatic rollback.
   *
   * @public
   */
  FinalBakeTimeInMinutes?: number | undefined;

  /**
   * The percentage of targets to receive a deployed configuration during each interval.
   *
   * @public
   */
  GrowthFactor?: number | undefined;

  /**
   * The algorithm used to define how percentage grows over time. AppConfig supports the following growth types:
   *
   * **Linear**: For this type, AppConfig processes the deployment by increments of the growth factor evenly distributed over the deployment time. For example, a linear deployment that uses a growth factor of 20 initially makes the configuration available to 20 percent of the targets. After 1/5th of the deployment time has passed, the system updates the percentage to 40 percent. This continues until 100% of the targets are set to receive the deployed configuration.
   *
   * **Exponential**: For this type, AppConfig processes the deployment exponentially using the following formula: `G*(2^N)`. In this formula, `G` is the growth factor specified by the user and `N` is the number of steps until the configuration is deployed to all targets. For example, if you specify a growth factor of 2, then the system rolls out the configuration as follows:
   *
   * `2*(2^0)`
   *
   * `2*(2^1)`
   *
   * `2*(2^2)`
   *
   * Expressed numerically, the deployment rolls out as follows: 2% of the targets, 4% of the targets, 8% of the targets, and continues until the configuration has been deployed to all targets.
   *
   * @public
   */
  GrowthType?: GrowthType | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentRequest {
  /**
   * The application ID.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The environment ID.
   *
   * @public
   */
  EnvironmentId: string | undefined;

  /**
   * The name of the environment.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the environment.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Amazon CloudWatch alarms to monitor during the deployment process.
   *
   * @public
   */
  Monitors?: Monitor[] | undefined;
}

/**
 * @public
 */
export interface UpdateExperimentDefinitionRequest {
  /**
   * The application ID or name.
   *
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * The experiment definition ID or name.
   *
   * @public
   */
  ExperimentDefinitionIdentifier: string | undefined;

  /**
   * The updated list of treatments to evaluate during the experiment. Each treatment defines a distinct variation compared to the control.
   *
   * @public
   */
  Treatments?: TreatmentInput[] | undefined;

  /**
   * An updated control treatment.
   *
   * @public
   */
  Control?: TreatmentInput | undefined;

  /**
   * An updated hypothesis.
   *
   * @public
   */
  Hypothesis?: string | undefined;

  /**
   * An updated audience rule.
   *
   * @public
   */
  AudienceRule?: string | undefined;

  /**
   * An updated audience description.
   *
   * @public
   */
  AudienceDescription?: string | undefined;

  /**
   * Updated launch criteria.
   *
   * @public
   */
  LaunchCriteria?: string | undefined;
}

/**
 * @public
 */
export interface UpdateExperimentRunRequest {
  /**
   * The application ID or name.
   *
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * The experiment definition ID or name.
   *
   * @public
   */
  ExperimentDefinitionIdentifier: string | undefined;

  /**
   * The run number to update.
   *
   * @public
   */
  Run: number | undefined;

  /**
   * An updated description for the experiment run.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The new exposure percentage. This value can only be increased from the current setting.
   *
   * @public
   */
  ExposurePercentage?: number | undefined;

  /**
   * The updated treatment assignment overrides that assign specific entity IDs to treatments, bypassing random assignment.
   *
   * @public
   */
  TreatmentOverrides?: TreatmentOverrides | undefined;

  /**
   * The updated deployment parameters for the experiment run.
   *
   * @public
   */
  DeploymentParameters?: DeploymentParameters | undefined;
}

/**
 * @public
 */
export interface UpdateExtensionRequest {
  /**
   * The name, the ID, or the Amazon Resource Name (ARN) of the extension.
   *
   * @public
   */
  ExtensionIdentifier: string | undefined;

  /**
   * Information about the extension.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The actions defined in the extension.
   *
   * @public
   */
  Actions?: Partial<Record<ActionPoint, Action[]>> | undefined;

  /**
   * One or more parameters for the actions called by the extension.
   *
   * @public
   */
  Parameters?: Record<string, Parameter> | undefined;

  /**
   * The extension version number.
   *
   * @public
   */
  VersionNumber?: number | undefined;
}

/**
 * @public
 */
export interface UpdateExtensionAssociationRequest {
  /**
   * The system-generated ID for the association.
   *
   * @public
   */
  ExtensionAssociationId: string | undefined;

  /**
   * The parameter names and values defined in the extension.
   *
   * @public
   */
  Parameters?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ValidateConfigurationRequest {
  /**
   * The application ID.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The configuration profile ID.
   *
   * @public
   */
  ConfigurationProfileId: string | undefined;

  /**
   * The version of the configuration to validate.
   *
   * @public
   */
  ConfigurationVersion: string | undefined;
}
