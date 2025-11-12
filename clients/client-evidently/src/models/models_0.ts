// smithy-typescript generated code
import {
  AutomaticJsonStringConversion as __AutomaticJsonStringConversion,
  ExceptionOptionType as __ExceptionOptionType,
} from "@smithy/smithy-client";

import { EvidentlyServiceException as __BaseException } from "./EvidentlyServiceException";

/**
 * <p>You do not have sufficient permissions to perform this action. </p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * <p>This structure assigns a feature variation to one user session.</p>
 * @public
 */
export interface EvaluationRequest {
  /**
   * <p>The name of the feature being evaluated.</p>
   * @public
   */
  feature: string | undefined;

  /**
   * <p>An internal ID that represents a unique user session of the application. This
   *         <code>entityID</code> is checked against any override rules assigned for this
   *       feature.</p>
   * @public
   */
  entityId: string | undefined;

  /**
   * <p>A JSON block of attributes that you can optionally pass in. This JSON block is included
   *        in the evaluation events sent to Evidently from the user session. </p>
   * @public
   */
  evaluationContext?: __AutomaticJsonStringConversion | string | undefined;
}

/**
 * @public
 */
export interface BatchEvaluateFeatureRequest {
  /**
   * <p>The name or ARN of the project that contains the feature being evaluated.</p>
   * @public
   */
  project: string | undefined;

  /**
   * <p>An array of structures, where each structure assigns a feature variation to one user session.</p>
   * @public
   */
  requests: EvaluationRequest[] | undefined;
}

/**
 * <p>The value assigned to a feature variation. This structure must contain exactly one
 *       field. It can be <code>boolValue</code>, <code>doubleValue</code>, <code>longValue</code>, or
 *         <code>stringValue</code>.</p>
 * @public
 */
export type VariableValue =
  | VariableValue.BoolValueMember
  | VariableValue.DoubleValueMember
  | VariableValue.LongValueMember
  | VariableValue.StringValueMember
  | VariableValue.$UnknownMember;

/**
 * @public
 */
export namespace VariableValue {
  /**
   * <p>If this feature uses the Boolean variation type, this field contains the Boolean value of
   *       this variation.</p>
   * @public
   */
  export interface BoolValueMember {
    boolValue: boolean;
    stringValue?: never;
    longValue?: never;
    doubleValue?: never;
    $unknown?: never;
  }

  /**
   * <p>If this feature uses the string variation type, this field contains the string value of
   *        this variation.</p>
   * @public
   */
  export interface StringValueMember {
    boolValue?: never;
    stringValue: string;
    longValue?: never;
    doubleValue?: never;
    $unknown?: never;
  }

  /**
   * <p>If this feature uses the long variation type, this field contains the long value of
   *        this variation.</p>
   * @public
   */
  export interface LongValueMember {
    boolValue?: never;
    stringValue?: never;
    longValue: number;
    doubleValue?: never;
    $unknown?: never;
  }

  /**
   * <p>If this feature uses the double integer variation type, this field contains the double integer value of
   *        this variation.</p>
   * @public
   */
  export interface DoubleValueMember {
    boolValue?: never;
    stringValue?: never;
    longValue?: never;
    doubleValue: number;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    boolValue?: never;
    stringValue?: never;
    longValue?: never;
    doubleValue?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    boolValue: (value: boolean) => T;
    stringValue: (value: string) => T;
    longValue: (value: number) => T;
    doubleValue: (value: number) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>This structure displays the results of one feature evaluation assignment to one user
 *       session.</p>
 * @public
 */
export interface EvaluationResult {
  /**
   * <p>The name or ARN of the project that contains the feature being evaluated.</p>
   * @public
   */
  project?: string | undefined;

  /**
   * <p>The name of the feature being evaluated.</p>
   * @public
   */
  feature: string | undefined;

  /**
   * <p>The name of the variation that was served to the user session.</p>
   * @public
   */
  variation?: string | undefined;

  /**
   * <p>The value assigned to this variation to differentiate it from the other variations of this feature.</p>
   * @public
   */
  value?: VariableValue | undefined;

  /**
   * <p>An internal ID that represents a unique user session of the application.</p>
   * @public
   */
  entityId: string | undefined;

  /**
   * <p>Specifies the reason that the user session was assigned this variation. Possible values
   *       include <code>DEFAULT</code>, meaning the user was served the default variation;
   *         <code>LAUNCH_RULE_MATCH</code>, if the user session was enrolled in a launch; or
   *         <code>EXPERIMENT_RULE_MATCH</code>, if the user session was enrolled in an
   *       experiment.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>If this user was assigned to a launch or experiment, this field lists the launch or experiment name.</p>
   * @public
   */
  details?: __AutomaticJsonStringConversion | string | undefined;
}

/**
 * @public
 */
export interface BatchEvaluateFeatureResponse {
  /**
   * <p>An array of structures, where each structure displays the results of one feature evaluation
   *        assignment to one user session.</p>
   * @public
   */
  results?: EvaluationResult[] | undefined;
}

/**
 * <p>The request references a resource that does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource that caused the exception.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The type of the resource that is associated with the error.</p>
   * @public
   */
  resourceType?: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>The request was denied because of request throttling. Retry the request.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the service that is associated with the error.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>The ID of the service quota that was exceeded.</p>
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * <p>A structure containing an error name and message.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The error name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>The value of a parameter in the request caused an error.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>A reason for the error.</p>
   * @public
   */
  reason?: ValidationExceptionReason | undefined;

  /**
   * <p>The parameter that caused the exception.</p>
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

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
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * @public
 * @enum
 */
export const ChangeDirectionEnum = {
  DECREASE: "DECREASE",
  INCREASE: "INCREASE",
} as const;

/**
 * @public
 */
export type ChangeDirectionEnum = (typeof ChangeDirectionEnum)[keyof typeof ChangeDirectionEnum];

/**
 * <p>A structure containing the CloudWatch Logs log group where the project stores evaluation
 *        events.</p>
 * @public
 */
export interface CloudWatchLogsDestination {
  /**
   * <p>The name of the log group where the project stores evaluation
   *        events.</p>
   * @public
   */
  logGroup?: string | undefined;
}

/**
 * <p>A structure containing the CloudWatch Logs log group where the project stores evaluation
 *        events.</p>
 * @public
 */
export interface CloudWatchLogsDestinationConfig {
  /**
   * <p>The name of the log group where the project stores evaluation
   *        events.</p>
   * @public
   */
  logGroup?: string | undefined;
}

/**
 * <p>A resource was in an inconsistent state during an update or a deletion.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource that caused the exception.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The type of the resource that is associated with the error.</p>
   * @public
   */
  resourceType?: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>This structure defines a metric that you want to use to evaluate the variations
 *        during a launch or experiment.</p>
 * @public
 */
export interface MetricDefinitionConfig {
  /**
   * <p>A name for the metric.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The entity, such as a user or session, that does an action that causes a metric
   *        value to be recorded. An example is <code>userDetails.userID</code>.</p>
   * @public
   */
  entityIdKey: string | undefined;

  /**
   * <p>The value that is tracked to produce the metric.</p>
   * @public
   */
  valueKey: string | undefined;

  /**
   * <p>The EventBridge event pattern that defines how the metric is recorded.</p>
   *          <p>For more information about EventBridge event patterns, see
   *        <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html">Amazon EventBridge event patterns</a>.</p>
   * @public
   */
  eventPattern?: __AutomaticJsonStringConversion | string | undefined;

  /**
   * <p>A label for the units that the metric is measuring.</p>
   * @public
   */
  unitLabel?: string | undefined;
}

/**
 * <p>Use this structure to tell Evidently whether higher or lower values are desired for a metric that is
 *        used in an experiment.</p>
 * @public
 */
export interface MetricGoalConfig {
  /**
   * <p>A structure that contains details about the metric.</p>
   * @public
   */
  metricDefinition: MetricDefinitionConfig | undefined;

  /**
   * <p>
   *             <code>INCREASE</code> means that a variation with a higher number for this metric is performing
   *        better.</p>
   *          <p>
   *             <code>DECREASE</code> means that a variation with a lower number for this metric is performing
   *        better.</p>
   * @public
   */
  desiredChange?: ChangeDirectionEnum | undefined;
}

/**
 * <p>A structure that contains the configuration of which variation to use as the "control"
 *       version. The "control" version  is used for comparison with other variations. This structure
 *       also specifies how much experiment traffic is allocated to each variation.</p>
 * @public
 */
export interface OnlineAbConfig {
  /**
   * <p>The name of the variation that is to be the default variation that the other variations are compared to.</p>
   * @public
   */
  controlTreatmentName?: string | undefined;

  /**
   * <p>A set of key-value pairs. The keys are variation names, and the values are the portion
   *       of experiment traffic to be assigned to that variation. Specify the traffic portion in
   *       thousandths of a percent, so 20,000 for a variation would allocate 20% of the experiment
   *       traffic to that variation.</p>
   * @public
   */
  treatmentWeights?: Record<string, number> | undefined;
}

/**
 * <p>A structure that defines one treatment in an experiment. A treatment is a variation of the feature
 *       that you are including in the experiment.</p>
 * @public
 */
export interface TreatmentConfig {
  /**
   * <p>A name for this treatment.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description for this treatment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The feature that this experiment is testing.</p>
   * @public
   */
  feature: string | undefined;

  /**
   * <p>The name of the variation to use as this treatment in the experiment.</p>
   * @public
   */
  variation: string | undefined;
}

/**
 * @public
 */
export interface CreateExperimentRequest {
  /**
   * <p>The name or ARN of the project that you want to create the new experiment in.</p>
   * @public
   */
  project: string | undefined;

  /**
   * <p>A name for the new experiment.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>An optional description of the experiment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An array of structures that describe the configuration of each feature variation used in the experiment.</p>
   * @public
   */
  treatments: TreatmentConfig[] | undefined;

  /**
   * <p>An array of structures that defines the metrics used for the experiment, and whether a higher
   *       or lower value for each metric is the goal.</p>
   * @public
   */
  metricGoals: MetricGoalConfig[] | undefined;

  /**
   * <p>When Evidently assigns a particular user session to an experiment, it must use a randomization ID
   *        to determine which variation the user session is served. This randomization ID is a combination of the entity ID
   *        and <code>randomizationSalt</code>. If you omit <code>randomizationSalt</code>, Evidently uses
   *        the experiment name as the <code>randomizationSalt</code>.</p>
   * @public
   */
  randomizationSalt?: string | undefined;

  /**
   * <p>The portion of the available audience that you want to allocate to this experiment, in thousandths of a percent. The available audience
   *       is the total audience minus the audience that you have allocated to overrides or current launches of
   *       this feature.</p>
   *          <p>This is represented in thousandths of a percent. For example, specify 10,000 to allocate 10% of the available audience.</p>
   * @public
   */
  samplingRate?: number | undefined;

  /**
   * <p>A structure that contains the configuration of which variation to use as the "control"
   *       version. tThe "control" version is used for comparison with other variations. This structure
   *       also specifies how much experiment traffic is allocated to each variation.</p>
   * @public
   */
  onlineAbConfig?: OnlineAbConfig | undefined;

  /**
   * <p>Specifies an audience <i>segment</i> to use in the experiment. When a segment is used in an experiment, only
   *       user sessions that match the segment pattern are used in the experiment.</p>
   * @public
   */
  segment?: string | undefined;

  /**
   * <p>Assigns one or more tags (key-value pairs) to the experiment.</p>
   *          <p>Tags can help you organize and categorize your resources. You can also use them to scope user
   *        permissions by granting a user
   *        permission to access or change only resources with certain tag values.</p>
   *          <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p>
   *          <p>You can associate as many as 50 tags with an experiment.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>This structure contains the date and time that the experiment started and ended.</p>
 * @public
 */
export interface ExperimentExecution {
  /**
   * <p>The date and time that the experiment started.</p>
   * @public
   */
  startedTime?: Date | undefined;

  /**
   * <p>The date and time that the experiment ended.</p>
   * @public
   */
  endedTime?: Date | undefined;
}

/**
 * <p>This structure defines a metric that is being used to evaluate the variations
 *       during a launch or experiment.</p>
 * @public
 */
export interface MetricDefinition {
  /**
   * <p>The name of the metric.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The entity, such as a user or session, that does an action that causes a metric
   *       value to be recorded.</p>
   * @public
   */
  entityIdKey?: string | undefined;

  /**
   * <p>The value that is tracked to produce the metric.</p>
   * @public
   */
  valueKey?: string | undefined;

  /**
   * <p>The EventBridge event pattern that defines how the metric is recorded.</p>
   *          <p>For more information about EventBridge event patterns, see
   *        <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html">Amazon EventBridge event patterns</a>.</p>
   * @public
   */
  eventPattern?: __AutomaticJsonStringConversion | string | undefined;

  /**
   * <p>The label for the units that the metric is measuring.</p>
   * @public
   */
  unitLabel?: string | undefined;
}

/**
 * <p>A structure that tells Evidently whether higher or lower values are desired for a metric that is
 *        used in an experiment.</p>
 * @public
 */
export interface MetricGoal {
  /**
   * <p>A structure that contains details about the metric.</p>
   * @public
   */
  metricDefinition: MetricDefinition | undefined;

  /**
   * <p>
   *             <code>INCREASE</code> means that a variation with a higher number for this metric is performing
   *       better.</p>
   *          <p>
   *             <code>DECREASE</code> means that a variation with a lower number for this metric is performing
   *      better.</p>
   * @public
   */
  desiredChange?: ChangeDirectionEnum | undefined;
}

/**
 * <p>A structure that contains the configuration of which variation to use as the "control"
 *       version. The "control" version is used for comparison with other variations. This structure
 *       also specifies how much experiment traffic is allocated to each variation.</p>
 * @public
 */
export interface OnlineAbDefinition {
  /**
   * <p>The name of the variation that is the default variation that the other variations are compared to.</p>
   * @public
   */
  controlTreatmentName?: string | undefined;

  /**
   * <p>A set of key-value pairs.  The keys are variation names, and the values are the portion
   *       of experiment traffic to be assigned to that variation. The traffic portion is specified in
   *       thousandths of a percent, so 20,000 for a variation would allocate 20% of the experiment
   *       traffic to that variation.</p>
   * @public
   */
  treatmentWeights?: Record<string, number> | undefined;
}

/**
 * <p>This structure contains the time and date that Evidently completed the analysis of the experiment.</p>
 * @public
 */
export interface ExperimentSchedule {
  /**
   * <p>The time and date that Evidently completed the analysis of the experiment.</p>
   * @public
   */
  analysisCompleteTime?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const ExperimentStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  CREATED: "CREATED",
  RUNNING: "RUNNING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ExperimentStatus = (typeof ExperimentStatus)[keyof typeof ExperimentStatus];

/**
 * <p>A structure that defines one treatment in an experiment. A treatment is a variation of the feature
 *        that you are including in the experiment.</p>
 * @public
 */
export interface Treatment {
  /**
   * <p>The name of this treatment.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the treatment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The feature variation used for this treatment. This is a key-value pair. The key is the
   *       feature name, and the value is the variation name.</p>
   * @public
   */
  featureVariations?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const ExperimentType = {
  ONLINE_AB_EXPERIMENT: "aws.evidently.onlineab",
} as const;

/**
 * @public
 */
export type ExperimentType = (typeof ExperimentType)[keyof typeof ExperimentType];

/**
 * <p>A structure containing the configuration details of an experiment.</p>
 * @public
 */
export interface Experiment {
  /**
   * <p>The ARN of the experiment.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the experiment.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The name or ARN of the project that contains this experiment.</p>
   * @public
   */
  project?: string | undefined;

  /**
   * <p>The current state of the experiment.</p>
   * @public
   */
  status: ExperimentStatus | undefined;

  /**
   * <p>If the experiment was stopped, this is the string that was entered by the person who
   *       stopped the experiment, to explain why it was stopped.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>A description of the experiment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The date and time that the experiment is first created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The date and time that the experiment was most recently updated.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;

  /**
   * <p>A structure that contains the time and date that Evidently completed the analysis of the experiment.</p>
   * @public
   */
  schedule?: ExperimentSchedule | undefined;

  /**
   * <p>A structure that contains the date and time that the experiment started and ended.</p>
   * @public
   */
  execution?: ExperimentExecution | undefined;

  /**
   * <p>An array of structures that describe the configuration of each feature variation used in the experiment.</p>
   * @public
   */
  treatments?: Treatment[] | undefined;

  /**
   * <p>An array of structures that defines the metrics used for the experiment, and whether a higher
   *       or lower value for each metric is the goal.</p>
   * @public
   */
  metricGoals?: MetricGoal[] | undefined;

  /**
   * <p>This value is used when Evidently assigns a particular user session to the experiment. It
   *       helps create a randomization ID to determine which variation the user session is served. This
   *       randomization ID is a combination of the entity ID and <code>randomizationSalt</code>.</p>
   * @public
   */
  randomizationSalt?: string | undefined;

  /**
   * <p>In thousandths of a percent, the amount of the available audience that is allocated to this experiment.
   *       The available audience
   *       is the total audience minus the audience that you have allocated to overrides or current launches of
   *       this feature.</p>
   *          <p>This is represented in thousandths of a percent, so a value of 10,000 is 10% of the available audience.</p>
   * @public
   */
  samplingRate?: number | undefined;

  /**
   * <p>The audience segment being used for the experiment, if a segment is being used.</p>
   * @public
   */
  segment?: string | undefined;

  /**
   * <p>The type of this experiment. Currently, this value must be <code>aws.experiment.onlineab</code>.</p>
   * @public
   */
  type: ExperimentType | undefined;

  /**
   * <p>A structure that contains the configuration of which variation to use as the "control"
   *       version. The "control" version is used for comparison with other variations. This structure
   *       also specifies how much experiment traffic is allocated to each variation.</p>
   * @public
   */
  onlineAbDefinition?: OnlineAbDefinition | undefined;

  /**
   * <p>The list of tag keys and values associated with this experiment.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateExperimentResponse {
  /**
   * <p>A structure containing the configuration details of the experiment
   *        that you created.</p>
   * @public
   */
  experiment: Experiment | undefined;
}

/**
 * <p>The request would cause a service quota to be exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource that caused the exception.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The type of the resource that is associated with the error.</p>
   * @public
   */
  resourceType?: string | undefined;

  /**
   * <p>The ID of the service that is associated with the error.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>The ID of the service quota that was exceeded.</p>
   * @public
   */
  quotaCode?: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * @public
 * @enum
 */
export const FeatureEvaluationStrategy = {
  ALL_RULES: "ALL_RULES",
  DEFAULT_VARIATION: "DEFAULT_VARIATION",
} as const;

/**
 * @public
 */
export type FeatureEvaluationStrategy = (typeof FeatureEvaluationStrategy)[keyof typeof FeatureEvaluationStrategy];

/**
 * <p>This structure contains the name and variation value of one variation of a feature.</p>
 * @public
 */
export interface VariationConfig {
  /**
   * <p>The name of the variation.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The value assigned to this variation.</p>
   * @public
   */
  value: VariableValue | undefined;
}

/**
 * @public
 */
export interface CreateFeatureRequest {
  /**
   * <p>The name or ARN of the project that is to contain the new feature.</p>
   * @public
   */
  project: string | undefined;

  /**
   * <p>The name for the new feature.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Specify <code>ALL_RULES</code> to activate the traffic allocation specified by any
   *       ongoing launches or experiments. Specify <code>DEFAULT_VARIATION</code> to serve the default
   *       variation to all users instead.</p>
   * @public
   */
  evaluationStrategy?: FeatureEvaluationStrategy | undefined;

  /**
   * <p>An optional description of the feature.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An array of structures that contain the configuration of the feature's different variations.</p>
   * @public
   */
  variations: VariationConfig[] | undefined;

  /**
   * <p>The name of the variation to use as the default variation. The default
   *       variation is served to users who are not allocated to any ongoing launches
   *       or experiments of this feature.</p>
   *          <p>This variation must also be listed in the <code>variations</code> structure.</p>
   *          <p>If you omit <code>defaultVariation</code>, the first variation listed in
   *        the <code>variations</code> structure is used as the default variation.</p>
   * @public
   */
  defaultVariation?: string | undefined;

  /**
   * <p>Assigns one or more tags (key-value pairs) to the feature.</p>
   *          <p>Tags can help you organize and categorize your resources. You can also use them to scope user
   *        permissions by granting a user
   *        permission to access or change only resources with certain tag values.</p>
   *          <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p>
   *          <p>You can associate as many as 50 tags with a feature.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Specify users that should always be served a specific variation of a feature. Each user
   *       is specified by a key-value pair . For each key, specify a user by entering their user ID,
   *       account ID, or some other identifier. For the value, specify the name of the variation that
   *       they are to be served.</p>
   *          <p>This parameter is limited to 2500 overrides or a total of 40KB. The 40KB limit includes an overhead of 6 bytes
   *      per override.</p>
   * @public
   */
  entityOverrides?: Record<string, string> | undefined;
}

/**
 * <p>A structure that contains the information about an evaluation rule for this feature,
 *       if it is used in a launch or experiment.</p>
 * @public
 */
export interface EvaluationRule {
  /**
   * <p>The name of the experiment or launch.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>This value is <code>aws.evidently.splits</code> if this is an evaluation rule for a launch, and it is
   *        <code>aws.evidently.onlineab</code> if this is an evaluation rule for an experiment.</p>
   * @public
   */
  type: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FeatureStatus = {
  AVAILABLE: "AVAILABLE",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type FeatureStatus = (typeof FeatureStatus)[keyof typeof FeatureStatus];

/**
 * @public
 * @enum
 */
export const VariationValueType = {
  BOOLEAN: "BOOLEAN",
  DOUBLE: "DOUBLE",
  LONG: "LONG",
  STRING: "STRING",
} as const;

/**
 * @public
 */
export type VariationValueType = (typeof VariationValueType)[keyof typeof VariationValueType];

/**
 * <p>This structure contains the name and variation value of one variation of a feature.</p>
 * @public
 */
export interface Variation {
  /**
   * <p>The name of the variation.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The value assigned to this variation.</p>
   * @public
   */
  value?: VariableValue | undefined;
}

/**
 * <p>This structure contains information about one Evidently feature in your account.</p>
 * @public
 */
export interface Feature {
  /**
   * <p>The ARN of the feature.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the feature.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The name or ARN of the project that contains the feature.</p>
   * @public
   */
  project?: string | undefined;

  /**
   * <p>The current state of the feature.</p>
   * @public
   */
  status: FeatureStatus | undefined;

  /**
   * <p>The date and time that the feature is created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The date and time that the feature was most recently updated.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;

  /**
   * <p>The description of the feature.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>If this value is <code>ALL_RULES</code>, the traffic allocation specified by
   *       any ongoing launches or experiments is being used. If this is <code>DEFAULT_VARIATION</code>,
   *       the default variation is being served to all users.</p>
   * @public
   */
  evaluationStrategy: FeatureEvaluationStrategy | undefined;

  /**
   * <p>Defines the type of value used to define the different feature variations.
   *       For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-variationtypes.html">Variation types</a>
   *          </p>
   * @public
   */
  valueType: VariationValueType | undefined;

  /**
   * <p>An array of structures that contain the configuration of the feature's different variations.</p>
   * @public
   */
  variations: Variation[] | undefined;

  /**
   * <p>The name of the variation that is used as the default variation. The default
   *       variation is served to users who are not allocated to any ongoing launches
   *       or experiments of this feature.</p>
   *          <p>This variation must also be listed in the <code>variations</code> structure.</p>
   *          <p>If you omit <code>defaultVariation</code>, the first variation listed in
   *     the <code>variations</code> structure is used as the default variation.</p>
   * @public
   */
  defaultVariation?: string | undefined;

  /**
   * <p>An array of structures that define the evaluation rules for the feature.</p>
   * @public
   */
  evaluationRules?: EvaluationRule[] | undefined;

  /**
   * <p>The list of tag keys and values associated with this feature.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A set of key-value pairs  that specify users who should always be served a specific
   *       variation of a feature. Each key specifies a user using their user ID, account ID, or some
   *       other identifier. The value specifies the name of the variation that the user is to be
   *       served.</p>
   *          <p>For the override to be successful, the value of the key must match the <code>entityId</code> used
   *       in the <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html">EvaluateFeature</a> operation.</p>
   * @public
   */
  entityOverrides?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateFeatureResponse {
  /**
   * <p>A structure that contains information about the new feature.</p>
   * @public
   */
  feature?: Feature | undefined;
}

/**
 * <p>A structure that defines one launch group in a launch. A launch group is a variation of
 *       the feature that you are including in the launch.</p>
 * @public
 */
export interface LaunchGroupConfig {
  /**
   * <p>A name for this launch group.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the launch group.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The feature that this launch is using.</p>
   * @public
   */
  feature: string | undefined;

  /**
   * <p>The feature variation to use for this launch group.</p>
   * @public
   */
  variation: string | undefined;
}

/**
 * <p>A structure that defines a metric to be used to monitor performance of the variations during a launch.</p>
 * @public
 */
export interface MetricMonitorConfig {
  /**
   * <p>A structure that defines the metric.</p>
   * @public
   */
  metricDefinition: MetricDefinitionConfig | undefined;
}

/**
 * <p>This structure specifies a segment
 *       that you have already created, and defines the traffic split for that segment to be used in a launch.</p>
 * @public
 */
export interface SegmentOverride {
  /**
   * <p>The ARN of the segment to use.</p>
   * @public
   */
  segment: string | undefined;

  /**
   * <p>A number indicating the order to use to evaluate segment overrides, if there are more
   *     than one. Segment overrides with lower numbers are evaluated first.</p>
   * @public
   */
  evaluationOrder: number | undefined;

  /**
   * <p>The traffic allocation percentages among the feature variations to assign to this
   *       segment. This is a set of key-value pairs.   The keys are variation names. The values represent
   *       the amount of traffic to allocate to that variation for this segment. This is expressed in thousandths of a percent,
   *     so a weight of 50000 represents 50% of traffic.</p>
   * @public
   */
  weights: Record<string, number> | undefined;
}

/**
 * <p>This structure defines the traffic allocation percentages among the feature
 *        variations during one step of a launch, and the start time of that step.</p>
 * @public
 */
export interface ScheduledSplitConfig {
  /**
   * <p>The date and time that this step of the launch starts.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The traffic allocation percentages among the feature variations during one step of a
   *       launch. This is a set of key-value pairs. The keys are variation names. The values represent
   *       the percentage of traffic to allocate to that variation during this step.</p>
   *          <p>The values is expressed in thousandths of a percent,
   *        so assigning a weight of 50000 assigns 50% of traffic to that variation.</p>
   *          <p>If the sum of the weights for all the variations in a segment override does not add up to 100,000,
   *        then the remaining traffic that matches this segment is not assigned by this segment override, and instead moves
   *        on to the next segment override or the default traffic split.</p>
   * @public
   */
  groupWeights: Record<string, number> | undefined;

  /**
   * <p>Use this parameter to specify different traffic splits for one or more audience <i>segments</i>.
   *       A segment
   *       is a portion of your audience that share one or more characteristics. Examples could be Chrome browser users,
   *       users in Europe, or Firefox browser users in Europe who also fit other criteria that your application collects,
   *       such as age.</p>
   *          <p>This parameter is an array of up to six segment override objects. Each of these objects specifies a segment
   *       that you have already created, and defines the traffic split for that segment.</p>
   * @public
   */
  segmentOverrides?: SegmentOverride[] | undefined;
}

/**
 * <p>An array of structures that define the traffic allocation percentages among the feature
 *       variations during each step of a launch. This also defines the start time of each step.</p>
 * @public
 */
export interface ScheduledSplitsLaunchConfig {
  /**
   * <p>An array of structures that define the traffic allocation percentages among the feature
   *       variations during each step of the launch. This also defines the start time of each
   *       step.</p>
   * @public
   */
  steps: ScheduledSplitConfig[] | undefined;
}

/**
 * @public
 */
export interface CreateLaunchRequest {
  /**
   * <p>The name or ARN of the project that you want to create the launch in.</p>
   * @public
   */
  project: string | undefined;

  /**
   * <p>The name for the new launch.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>An optional description for the launch.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An array of structures that define the traffic allocation percentages among the feature
   *       variations during each step of the launch.</p>
   * @public
   */
  scheduledSplitsConfig?: ScheduledSplitsLaunchConfig | undefined;

  /**
   * <p>An array of structures that define the metrics that will be used to monitor
   *        the launch performance.</p>
   * @public
   */
  metricMonitors?: MetricMonitorConfig[] | undefined;

  /**
   * <p>An array of structures that contains the feature and variations that are to be used for the launch.</p>
   * @public
   */
  groups: LaunchGroupConfig[] | undefined;

  /**
   * <p>When Evidently assigns a particular user session to a launch, it must use a randomization ID
   *         to determine which variation the user session is served. This randomization ID is a combination of the entity ID
   *         and <code>randomizationSalt</code>. If you omit <code>randomizationSalt</code>, Evidently uses
   *       the launch name as the <code>randomizationSalt</code>.</p>
   * @public
   */
  randomizationSalt?: string | undefined;

  /**
   * <p>Assigns one or more tags (key-value pairs) to the launch.</p>
   *          <p>Tags can help you organize and categorize your resources. You can also use them to scope user
   *        permissions by granting a user
   *        permission to access or change only resources with certain tag values.</p>
   *          <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p>
   *          <p>You can associate as many as 50 tags with a launch.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>This structure contains information about the start and end times of the launch.</p>
 * @public
 */
export interface LaunchExecution {
  /**
   * <p>The date and time that the launch started.</p>
   * @public
   */
  startedTime?: Date | undefined;

  /**
   * <p>The date and time that the launch ended.</p>
   * @public
   */
  endedTime?: Date | undefined;
}

/**
 * <p>A structure that defines one launch group in a launch. A launch group is a variation of the feature
 *       that you are including in the launch.</p>
 * @public
 */
export interface LaunchGroup {
  /**
   * <p>The name of the launch group.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the launch group.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The feature variation for this launch group. This is a key-value pair.</p>
   * @public
   */
  featureVariations: Record<string, string> | undefined;
}

/**
 * <p>A structure that defines a metric to be used to monitor performance of the variations during a launch.</p>
 * @public
 */
export interface MetricMonitor {
  /**
   * <p>A structure that defines the metric.</p>
   * @public
   */
  metricDefinition: MetricDefinition | undefined;
}

/**
 * <p>This structure defines the traffic allocation percentages among the feature
 *        variations during one step of a launch, and the start time of that step.</p>
 * @public
 */
export interface ScheduledSplit {
  /**
   * <p>The date and time that this step of the launch starts.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The traffic allocation percentages among the feature variations during one step of a
   *       launch. This is a set of key-value pairs.   The keys are variation names. The values represent
   *       the percentage of traffic to allocate to that variation during this step.</p>
   *          <p>The values is expressed in thousandths of a percent,
   *        so assigning a weight of 50000 assigns 50% of traffic to that variation.</p>
   *          <p>If the sum of the weights for all the variations in a segment override does not add up to 100,000,
   *      then the remaining traffic that matches this segment is not assigned by this segment override, and instead moves
   *      on to the next segment override or the default traffic split.</p>
   * @public
   */
  groupWeights?: Record<string, number> | undefined;

  /**
   * <p>Use this parameter to specify different traffic splits for one or more audience <i>segments</i>.
   *       A segment
   *       is a portion of your audience that share one or more characteristics. Examples could be Chrome browser users,
   *       users in Europe, or Firefox browser users in Europe who also fit other criteria that your application collects,
   *       such as age.</p>
   *          <p>This parameter is an array of up to six segment override objects. Each of these objects specifies a segment
   *     that you have already created, and defines the traffic split for that segment.</p>
   * @public
   */
  segmentOverrides?: SegmentOverride[] | undefined;
}

/**
 * <p>An array of structures that define the traffic allocation percentages among the feature
 *       variations during each step of a launch. This also defines the start time of each step.</p>
 * @public
 */
export interface ScheduledSplitsLaunchDefinition {
  /**
   * <p>An array of structures that define the traffic allocation percentages among the feature
   *       variations during each step of the launch. This also defines the start time of each
   *       step.</p>
   * @public
   */
  steps?: ScheduledSplit[] | undefined;
}

/**
 * @public
 * @enum
 */
export const LaunchStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  CREATED: "CREATED",
  RUNNING: "RUNNING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type LaunchStatus = (typeof LaunchStatus)[keyof typeof LaunchStatus];

/**
 * @public
 * @enum
 */
export const LaunchType = {
  SCHEDULED_SPLITS_LAUNCH: "aws.evidently.splits",
} as const;

/**
 * @public
 */
export type LaunchType = (typeof LaunchType)[keyof typeof LaunchType];

/**
 * <p>This structure contains the configuration details of one Evidently launch.</p>
 * @public
 */
export interface Launch {
  /**
   * <p>The ARN of the launch.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the launch.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The name or ARN of the project that contains the launch.</p>
   * @public
   */
  project?: string | undefined;

  /**
   * <p>The current state of the launch.</p>
   * @public
   */
  status: LaunchStatus | undefined;

  /**
   * <p>If the launch was stopped, this is the string that was entered by the person who
   *       stopped the launch, to explain why it was stopped.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The description of the launch.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The date and time that the launch is created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The date and time that the launch was most recently updated.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;

  /**
   * <p>A structure that contains information about the start and end times of the launch.</p>
   * @public
   */
  execution?: LaunchExecution | undefined;

  /**
   * <p>An array of structures that define the feature variations that are being used in the launch.</p>
   * @public
   */
  groups?: LaunchGroup[] | undefined;

  /**
   * <p>An array of structures that define the metrics that are being used to monitor the launch performance.</p>
   * @public
   */
  metricMonitors?: MetricMonitor[] | undefined;

  /**
   * <p>This value is used when Evidently assigns a particular user session to the launch, to help create a randomization ID
   *       to determine which variation the user session is served. This randomization ID is a combination of the entity ID
   *       and <code>randomizationSalt</code>.</p>
   * @public
   */
  randomizationSalt?: string | undefined;

  /**
   * <p>The type of launch.</p>
   * @public
   */
  type: LaunchType | undefined;

  /**
   * <p>An array of structures that define the traffic allocation percentages among the feature
   *       variations during each step of the launch.</p>
   * @public
   */
  scheduledSplitsDefinition?: ScheduledSplitsLaunchDefinition | undefined;

  /**
   * <p>The list of tag keys and values associated with this launch.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateLaunchResponse {
  /**
   * <p>A structure that contains the configuration of the launch that was created.</p>
   * @public
   */
  launch: Launch | undefined;
}

/**
 * <p>Use this parameter to configure client-side evaluation for your project. Client-side evaluation allows your application to assign
 *       variations to user
 *       sessions locally instead of by calling the <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html">EvaluateFeature</a> operation to assign the
 *       variations. This mitigates the latency and availability risks that come with an API call.</p>
 *          <p>
 *             <code>ProjectAppConfigResource</code> is a structure that defines the configuration of how your application
 *       integrates with AppConfig to run client-side evaluation.</p>
 * @public
 */
export interface ProjectAppConfigResourceConfig {
  /**
   * <p>The ID of the AppConfig application to use for client-side evaluation. </p>
   * @public
   */
  applicationId?: string | undefined;

  /**
   * <p>The ID of the AppConfig environment to use for client-side evaluation. This must be an
   *       environment that is within the application that you specify for <code>applicationId</code>.</p>
   * @public
   */
  environmentId?: string | undefined;
}

/**
 * <p>If the project stores evaluation events in an Amazon S3 bucket, this structure
 *        stores the bucket name and bucket prefix.</p>
 * @public
 */
export interface S3DestinationConfig {
  /**
   * <p>The name of the bucket in which Evidently stores evaluation events.</p>
   * @public
   */
  bucket?: string | undefined;

  /**
   * <p>The bucket prefix in which Evidently stores evaluation events.</p>
   * @public
   */
  prefix?: string | undefined;
}

/**
 * <p>A structure that contains information about where Evidently is to store
 *        evaluation events for longer term storage.</p>
 * @public
 */
export interface ProjectDataDeliveryConfig {
  /**
   * <p>If the project stores evaluation events in an Amazon S3 bucket, this structure
   *        stores the bucket name and bucket prefix.</p>
   * @public
   */
  s3Destination?: S3DestinationConfig | undefined;

  /**
   * <p>If the project stores evaluation events in CloudWatch Logs, this structure
   *        stores the log group name.</p>
   * @public
   */
  cloudWatchLogs?: CloudWatchLogsDestinationConfig | undefined;
}

/**
 * @public
 */
export interface CreateProjectRequest {
  /**
   * <p>The name for the project.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>An optional description of the project.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A structure that contains information about where Evidently is to store
   *       evaluation events for longer term storage, if you choose to do so. If you choose
   *       not to store these events, Evidently deletes them after using them to produce metrics and other experiment
   *       results that you can view.</p>
   * @public
   */
  dataDelivery?: ProjectDataDeliveryConfig | undefined;

  /**
   * <p>Use this parameter if the project will use <i>client-side evaluation powered by AppConfig</i>. Client-side
   *       evaluation allows your application to assign variations to user
   *       sessions locally instead of by calling the <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html">EvaluateFeature</a> operation. This
   *       mitigates the latency and availability risks that come with an API call. For more information,
   *       see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-client-side-evaluation.html">
   *         Client-side evaluation - powered by AppConfig.</a>
   *          </p>
   *          <p>This parameter is a structure that
   *       contains information about the AppConfig application and environment that will be used as for client-side evaluation.</p>
   *          <p>To create a project that uses client-side evaluation, you must have the
   *       <code>evidently:ExportProjectAsConfiguration</code> permission.</p>
   * @public
   */
  appConfigResource?: ProjectAppConfigResourceConfig | undefined;

  /**
   * <p>Assigns one or more tags (key-value pairs) to the project.</p>
   *          <p>Tags can help you organize and categorize your resources. You can also use them to scope user
   *        permissions by granting a user
   *        permission to access or change only resources with certain tag values.</p>
   *          <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p>
   *          <p>You can associate as many as 50 tags with a project.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>This is a structure that defines the configuration of how your application
 *       integrates with AppConfig to run client-side evaluation.</p>
 * @public
 */
export interface ProjectAppConfigResource {
  /**
   * <p>The ID of the AppConfig application to use for client-side evaluation. </p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The ID of the AppConfig environment to use for client-side evaluation. This must be an
   *     environment that is within the application that you specify for <code>applicationId</code>.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The ID of the AppConfig profile to use for client-side evaluation. </p>
   * @public
   */
  configurationProfileId: string | undefined;
}

/**
 * <p>If the project stores evaluation events in an Amazon S3 bucket, this structure
 *        stores the bucket name and bucket prefix.</p>
 * @public
 */
export interface S3Destination {
  /**
   * <p>The name of the bucket in which Evidently stores evaluation events.</p>
   * @public
   */
  bucket?: string | undefined;

  /**
   * <p>The bucket prefix in which Evidently stores evaluation events.</p>
   * @public
   */
  prefix?: string | undefined;
}

/**
 * <p>A structure that contains information about where Evidently is to store
 *        evaluation events for longer term storage.</p>
 * @public
 */
export interface ProjectDataDelivery {
  /**
   * <p>If the project stores evaluation events in an Amazon S3 bucket, this structure
   *        stores the bucket name and bucket prefix.</p>
   * @public
   */
  s3Destination?: S3Destination | undefined;

  /**
   * <p>If the project stores evaluation events in CloudWatch Logs, this structure
   *       stores the log group name.</p>
   * @public
   */
  cloudWatchLogs?: CloudWatchLogsDestination | undefined;
}

/**
 * @public
 * @enum
 */
export const ProjectStatus = {
  AVAILABLE: "AVAILABLE",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];

/**
 * <p>This structure defines a project, which is the logical object in Evidently that can contain features, launches, and
 *       experiments. Use projects to group similar features together.</p>
 * @public
 */
export interface Project {
  /**
   * <p>The name or ARN of the project.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the project.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The current state of the project.</p>
   * @public
   */
  status: ProjectStatus | undefined;

  /**
   * <p>The user-entered description of the project.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The date and time that the project is created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The date and time that the project was most recently updated.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;

  /**
   * <p>The number of features currently in the project.</p>
   * @public
   */
  featureCount?: number | undefined;

  /**
   * <p>The number of launches currently in the project. This includes all launches that have been created
   *        and not deleted, whether they are ongoing or not.</p>
   * @public
   */
  launchCount?: number | undefined;

  /**
   * <p>The number of ongoing launches currently in the project.</p>
   * @public
   */
  activeLaunchCount?: number | undefined;

  /**
   * <p>The number of experiments currently in the project. This includes all experiments that have been created
   *       and not deleted, whether they are ongoing or not.</p>
   * @public
   */
  experimentCount?: number | undefined;

  /**
   * <p>The number of ongoing experiments currently in the project.</p>
   * @public
   */
  activeExperimentCount?: number | undefined;

  /**
   * <p>A structure that contains information about where Evidently is to store
   *        evaluation events for longer term storage.</p>
   * @public
   */
  dataDelivery?: ProjectDataDelivery | undefined;

  /**
   * <p>This structure defines the configuration of how your application
   *       integrates with AppConfig to run client-side evaluation.</p>
   * @public
   */
  appConfigResource?: ProjectAppConfigResource | undefined;

  /**
   * <p>The list of tag keys and values associated with this project.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateProjectResponse {
  /**
   * <p>A structure that contains information about the created project.</p>
   * @public
   */
  project: Project | undefined;
}

/**
 * @public
 */
export interface CreateSegmentRequest {
  /**
   * <p>A name for the segment.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The pattern to use for the segment. For more information about pattern syntax,
   *       see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html#CloudWatch-Evidently-segments-syntax.html">
   *         Segment rule pattern syntax</a>.</p>
   * @public
   */
  pattern: __AutomaticJsonStringConversion | string | undefined;

  /**
   * <p>An optional description for this segment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Assigns one or more tags (key-value pairs) to the segment.</p>
   *          <p>Tags can help you organize and categorize your resources. You can also use them to scope user
   *       permissions by granting a user
   *       permission to access or change only resources with certain tag values.</p>
   *          <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p>
   *          <p>You can associate as many as 50 tags with a segment.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>This structure contains information about one audience <i>segment</i>. You can use segments
 *     in your experiments and launches to narrow the user sessions used for experiment or launch to only the user
 *     sessions that match one or more criteria.</p>
 * @public
 */
export interface Segment {
  /**
   * <p>The ARN of the segment.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the segment.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The pattern that defines the attributes to use to evalute whether a user session will be in the segment.
   *     For more information about the pattern syntax, see
   *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html">Segment rule pattern syntax</a>.</p>
   * @public
   */
  pattern: __AutomaticJsonStringConversion | string | undefined;

  /**
   * <p>The date and time that this segment was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The date and time that this segment was most recently updated.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;

  /**
   * <p>The customer-created description for this segment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The number of experiments that this segment is used in. This count includes all current experiments, not just
   *     those that are currently running.</p>
   * @public
   */
  experimentCount?: number | undefined;

  /**
   * <p>The number of launches that this segment is used in. This count includes all current launches, not just
   *       those that are currently running.</p>
   * @public
   */
  launchCount?: number | undefined;

  /**
   * <p>The list of tag keys and values associated with this launch.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSegmentResponse {
  /**
   * <p>A structure that contains the complete information about the segment that was just created.</p>
   * @public
   */
  segment: Segment | undefined;
}

/**
 * @public
 */
export interface DeleteExperimentRequest {
  /**
   * <p>The name or ARN of the project that contains the experiment to delete.</p>
   * @public
   */
  project: string | undefined;

  /**
   * <p>The name of the experiment to delete.</p>
   * @public
   */
  experiment: string | undefined;
}

/**
 * @public
 */
export interface DeleteExperimentResponse {}

/**
 * <p>Unexpected error while processing the request. Retry the request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
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
  }
}

/**
 * <p>The service was unavailable. Retry the request.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteFeatureRequest {
  /**
   * <p>The name or ARN of the project that contains the feature to delete.</p>
   * @public
   */
  project: string | undefined;

  /**
   * <p>The name of the feature to delete.</p>
   * @public
   */
  feature: string | undefined;
}

/**
 * @public
 */
export interface DeleteFeatureResponse {}

/**
 * @public
 */
export interface DeleteLaunchRequest {
  /**
   * <p>The name or ARN of the project that contains the launch to delete.</p>
   * @public
   */
  project: string | undefined;

  /**
   * <p>The name of the launch to delete.</p>
   * @public
   */
  launch: string | undefined;
}

/**
 * @public
 */
export interface DeleteLaunchResponse {}

/**
 * @public
 */
export interface DeleteProjectRequest {
  /**
   * <p>The name or ARN of the project to delete.</p>
   * @public
   */
  project: string | undefined;
}

/**
 * @public
 */
export interface DeleteProjectResponse {}

/**
 * @public
 */
export interface DeleteSegmentRequest {
  /**
   * <p>Specifies the segment to delete.</p>
   * @public
   */
  segment: string | undefined;
}

/**
 * @public
 */
export interface DeleteSegmentResponse {}

/**
 * @public
 */
export interface EvaluateFeatureRequest {
  /**
   * <p>The name or ARN of the project that contains this feature.</p>
   * @public
   */
  project: string | undefined;

  /**
   * <p>The name of the feature being evaluated.</p>
   * @public
   */
  feature: string | undefined;

  /**
   * <p>An internal ID that represents a unique user of the application. This
   *         <code>entityID</code> is checked against any override rules assigned for this
   *       feature.</p>
   * @public
   */
  entityId: string | undefined;

  /**
   * <p>A JSON object of attributes that you can optionally pass in as part of the evaluation event
   *       sent to Evidently from the user session. Evidently can use
   *       this value to match user sessions with defined audience segments. For more information, see
   *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html">Use segments to focus your
   *         audience</a>.</p>
   *          <p>If you include this parameter, the value must be a JSON object. A JSON array is not supported.</p>
   * @public
   */
  evaluationContext?: __AutomaticJsonStringConversion | string | undefined;
}

/**
 * @public
 */
export interface EvaluateFeatureResponse {
  /**
   * <p>The name of the variation that was served to the user session.</p>
   * @public
   */
  variation?: string | undefined;

  /**
   * <p>The value assigned to this variation to differentiate it from the other variations of this feature.</p>
   * @public
   */
  value?: VariableValue | undefined;

  /**
   * <p>Specifies the reason that the user session was assigned this variation. Possible values
   *       include <code>DEFAULT</code>, meaning the user was served the default variation;
   *         <code>LAUNCH_RULE_MATCH</code>, if the user session was enrolled in a launch;
   *         <code>EXPERIMENT_RULE_MATCH</code>, if the user session was enrolled in an experiment; or
   *         <code>ENTITY_OVERRIDES_MATCH</code>, if the user's <code>entityId</code> matches an override
   *       rule.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>If this user was assigned to a launch or experiment, this field lists the launch or experiment name.</p>
   * @public
   */
  details?: __AutomaticJsonStringConversion | string | undefined;
}

/**
 * @public
 * @enum
 */
export const EventType = {
  CUSTOM: "aws.evidently.custom",
  EVALUATION: "aws.evidently.evaluation",
} as const;

/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * <p>A structure that contains the information about one evaluation event or custom event sent to Evidently.
 *         This is a JSON payload. If this event specifies a pre-defined event type, the payload must follow the
 *         defined event schema.</p>
 * @public
 */
export interface Event {
  /**
   * <p>The timestamp of the event.</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>
   *             <code>aws.evidently.evaluation</code> specifies an evaluation event, which determines
   *       which feature variation that a user sees. <code>aws.evidently.custom</code> specifies a custom
   *       event, which generates metrics from user actions such as clicks and checkouts.</p>
   * @public
   */
  type: EventType | undefined;

  /**
   * <p>The event data.</p>
   * @public
   */
  data: __AutomaticJsonStringConversion | string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource that you want to see the tags of.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tag keys and values associated with the resource you specified.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetExperimentRequest {
  /**
   * <p>The name or ARN of the project that contains the experiment.</p>
   * @public
   */
  project: string | undefined;

  /**
   * <p>The name of the experiment that you want to see the details of.</p>
   * @public
   */
  experiment: string | undefined;
}

/**
 * @public
 */
export interface GetExperimentResponse {
  /**
   * <p>A structure containing the configuration details of the experiment.</p>
   * @public
   */
  experiment?: Experiment | undefined;
}

/**
 * @public
 * @enum
 */
export const ExperimentBaseStat = {
  MEAN: "Mean",
} as const;

/**
 * @public
 */
export type ExperimentBaseStat = (typeof ExperimentBaseStat)[keyof typeof ExperimentBaseStat];

/**
 * @public
 * @enum
 */
export const ExperimentReportName = {
  BAYESIAN_INFERENCE: "BayesianInference",
} as const;

/**
 * @public
 */
export type ExperimentReportName = (typeof ExperimentReportName)[keyof typeof ExperimentReportName];

/**
 * @public
 * @enum
 */
export const ExperimentResultRequestType = {
  BASE_STAT: "BaseStat",
  CONFIDENCE_INTERVAL: "ConfidenceInterval",
  P_VALUE: "PValue",
  TREATMENT_EFFECT: "TreatmentEffect",
} as const;

/**
 * @public
 */
export type ExperimentResultRequestType =
  (typeof ExperimentResultRequestType)[keyof typeof ExperimentResultRequestType];

/**
 * @public
 */
export interface GetExperimentResultsRequest {
  /**
   * <p>The name or ARN of the project that contains the experiment that you want to see the results of.</p>
   * @public
   */
  project: string | undefined;

  /**
   * <p>The name of the experiment to retrieve the results of.</p>
   * @public
   */
  experiment: string | undefined;

  /**
   * <p>The date and time that the experiment started.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The date and time that the experiment ended, if it is completed. This must be no longer than 30 days
   *       after the experiment start time.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The names of the experiment metrics that you want to see the results of.</p>
   * @public
   */
  metricNames: string[] | undefined;

  /**
   * <p>The names of the experiment treatments that you want to see the results for.</p>
   * @public
   */
  treatmentNames: string[] | undefined;

  /**
   * <p>The statistic used to calculate experiment results. Currently the only valid value is <code>mean</code>,
   *       which uses the mean of the collected values as the statistic.</p>
   * @public
   */
  baseStat?: ExperimentBaseStat | undefined;

  /**
   * <p>The statistics that you want to see in the returned results.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PValue</code> specifies to use p-values for the results. A p-value is used in hypothesis
   *           testing to measure how often you are willing to make a mistake in rejecting the null
   *           hypothesis. A general practice is to reject the null hypothesis and declare that the
   *           results are statistically significant when the p-value is less than 0.05.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ConfidenceInterval</code> specifies a confidence interval for the results. The
   *           confidence interval represents the range of values for the chosen metric that is likely to
   *           contain the true difference between the <code>baseStat</code> of a variation and the
   *           baseline. Evidently returns the 95% confidence interval. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TreatmentEffect</code> is the difference in the statistic specified by the
   *             <code>baseStat</code> parameter between each variation and the default variation. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BaseStat</code> returns the statistical values collected for the metric for each
   *           variation. The statistic uses the same statistic specified in the <code>baseStat</code>
   *           parameter. Therefore, if <code>baseStat</code> is <code>mean</code>, this returns the mean
   *           of the values collected for each variation.</p>
   *             </li>
   *          </ul>
   * @public
   */
  resultStats?: ExperimentResultRequestType[] | undefined;

  /**
   * <p>The names of the report types that you want to see. Currently, <code>BayesianInference</code>
   *        is the only valid value.</p>
   * @public
   */
  reportNames?: ExperimentReportName[] | undefined;

  /**
   * <p>In seconds, the amount of time to aggregate results together. </p>
   * @public
   */
  period?: number | undefined;
}

/**
 * <p>A structure that contains results of an experiment.</p>
 * @public
 */
export interface ExperimentReport {
  /**
   * <p>The name of the metric that is analyzed in this experiment report.</p>
   * @public
   */
  metricName?: string | undefined;

  /**
   * <p>The name of the variation that this report pertains to.</p>
   * @public
   */
  treatmentName?: string | undefined;

  /**
   * <p>The type of analysis used for this report.</p>
   * @public
   */
  reportName?: ExperimentReportName | undefined;

  /**
   * <p>The content of the report.</p>
   * @public
   */
  content?: __AutomaticJsonStringConversion | string | undefined;
}

/**
 * @public
 * @enum
 */
export const ExperimentResultResponseType = {
  CONFIDENCE_INTERVAL_LOWERBOUND: "ConfidenceIntervalLowerBound",
  CONFIDENCE_INTERVAL_UPPERBOUND: "ConfidenceIntervalUpperBound",
  MEAN: "Mean",
  P_VALUE: "PValue",
  TREATMENT_EFFECT: "TreatmentEffect",
} as const;

/**
 * @public
 */
export type ExperimentResultResponseType =
  (typeof ExperimentResultResponseType)[keyof typeof ExperimentResultResponseType];

/**
 * <p>A structure that contains experiment results for one metric that is monitored in
 *       the experiment.</p>
 * @public
 */
export interface ExperimentResultsData {
  /**
   * <p>The name of the metric.</p>
   * @public
   */
  metricName?: string | undefined;

  /**
   * <p>The treatment, or variation, that returned the <code>values</code> in this structure.</p>
   * @public
   */
  treatmentName?: string | undefined;

  /**
   * <p>The experiment statistic that these results pertain to.</p>
   * @public
   */
  resultStat?: ExperimentResultResponseType | undefined;

  /**
   * <p>The values for the <code>metricName</code> that were recorded in the experiment.</p>
   * @public
   */
  values?: number[] | undefined;
}

/**
 * @public
 */
export interface GetExperimentResultsResponse {
  /**
   * <p>An array of structures that include experiment results including metric names and values. </p>
   * @public
   */
  resultsData?: ExperimentResultsData[] | undefined;

  /**
   * <p>An array of structures that include the reports that you requested.</p>
   * @public
   */
  reports?: ExperimentReport[] | undefined;

  /**
   * <p>The timestamps of each result returned.</p>
   * @public
   */
  timestamps?: Date[] | undefined;

  /**
   * <p>If the experiment doesn't yet have enough events to provide valid results, this
   *       field is returned with the message <code>Not enough events to generate results</code>. If there are
   *       enough events to provide valid results, this field is not returned.</p>
   * @public
   */
  details?: string | undefined;
}

/**
 * @public
 */
export interface ListExperimentsRequest {
  /**
   * <p>The name or ARN of the project to return the experiment list from.</p>
   * @public
   */
  project: string | undefined;

  /**
   * <p>The maximum number of results to include in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token to use when requesting the next set of results. You received this token from a previous
   *        <code>ListExperiments</code> operation.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Use this optional parameter to limit the returned results to only the experiments with the status that you specify here.</p>
   * @public
   */
  status?: ExperimentStatus | undefined;
}

/**
 * @public
 */
export interface ListExperimentsResponse {
  /**
   * <p>An array of structures that contain the configuration details of the experiments in the
   *       specified project.</p>
   * @public
   */
  experiments?: Experiment[] | undefined;

  /**
   * <p>The token to use in a subsequent <code>ListExperiments</code> operation to return
   *        the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartExperimentRequest {
  /**
   * <p>The name or ARN of the project that contains the experiment to start.</p>
   * @public
   */
  project: string | undefined;

  /**
   * <p>The name of the experiment to start.</p>
   * @public
   */
  experiment: string | undefined;

  /**
   * <p>The date and time to end the experiment. This must be no more than 30 days after
   *       the experiment starts.</p>
   * @public
   */
  analysisCompleteTime: Date | undefined;
}

/**
 * @public
 */
export interface StartExperimentResponse {
  /**
   * <p>A timestamp that indicates when the experiment started.</p>
   * @public
   */
  startedTime?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const ExperimentStopDesiredState = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
} as const;

/**
 * @public
 */
export type ExperimentStopDesiredState = (typeof ExperimentStopDesiredState)[keyof typeof ExperimentStopDesiredState];

/**
 * @public
 */
export interface StopExperimentRequest {
  /**
   * <p>The name or ARN of the project that contains the experiment to stop.</p>
   * @public
   */
  project: string | undefined;

  /**
   * <p>The name of the experiment to stop.</p>
   * @public
   */
  experiment: string | undefined;

  /**
   * <p>Specify whether the experiment is to be considered <code>COMPLETED</code> or
   *       <code>CANCELLED</code> after it stops.</p>
   * @public
   */
  desiredState?: ExperimentStopDesiredState | undefined;

  /**
   * <p>A string that describes why you are stopping the experiment.</p>
   * @public
   */
  reason?: string | undefined;
}

/**
 * @public
 */
export interface StopExperimentResponse {
  /**
   * <p>The date and time that the experiment stopped.</p>
   * @public
   */
  endedTime?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateExperimentRequest {
  /**
   * <p>The name or ARN of the project that contains the experiment that you want to update.</p>
   * @public
   */
  project: string | undefined;

  /**
   * <p>The name of the experiment to update.</p>
   * @public
   */
  experiment: string | undefined;

  /**
   * <p>An optional description of the experiment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An array of structures that define the variations being tested in the experiment.</p>
   * @public
   */
  treatments?: TreatmentConfig[] | undefined;

  /**
   * <p>An array of structures that defines the metrics used for the experiment, and whether a higher
   *       or lower value for each metric is the goal.</p>
   * @public
   */
  metricGoals?: MetricGoalConfig[] | undefined;

  /**
   * <p>When Evidently assigns a particular user session to an experiment, it must use a randomization ID
   *       to determine which variation the user session is served. This randomization ID is a combination of the entity ID
   *       and <code>randomizationSalt</code>. If you omit <code>randomizationSalt</code>, Evidently uses
   *       the experiment name as the <code>randomizationSalt</code>.</p>
   * @public
   */
  randomizationSalt?: string | undefined;

  /**
   * <p>The portion of the available audience that you want to allocate to this experiment, in thousandths of a percent. The available audience
   *       is the total audience minus the audience that you have allocated to overrides or current launches of
   *       this feature.</p>
   *          <p>This is represented in thousandths of a percent. For example, specify 20,000 to allocate 20% of the available audience.</p>
   * @public
   */
  samplingRate?: number | undefined;

  /**
   * <p>Adds an audience <i>segment</i> to an experiment. When a segment is used in an experiment, only
   *       user sessions that match the segment pattern are used in the experiment. You can't use this parameter if the
   *       experiment is currently
   *       running.</p>
   * @public
   */
  segment?: string | undefined;

  /**
   * <p>Removes a segment from being used in an experiment. You can't use this parameter if the experiment is currently
   *       running.</p>
   * @public
   */
  removeSegment?: boolean | undefined;

  /**
   * <p>A structure that contains the configuration of which variation o use as the "control"
   *       version. The "control" version is used for comparison with other variations. This structure
   *       also specifies how much experiment traffic is allocated to each variation.</p>
   * @public
   */
  onlineAbConfig?: OnlineAbConfig | undefined;
}

/**
 * @public
 */
export interface UpdateExperimentResponse {
  /**
   * <p>A structure containing the configuration details of the experiment
   *     that was updated.</p>
   * @public
   */
  experiment: Experiment | undefined;
}

/**
 * @public
 */
export interface GetFeatureRequest {
  /**
   * <p>The name or ARN of the project that contains the feature.</p>
   * @public
   */
  project: string | undefined;

  /**
   * <p>The name of the feature that you want to retrieve information for.</p>
   * @public
   */
  feature: string | undefined;
}

/**
 * @public
 */
export interface GetFeatureResponse {
  /**
   * <p>A structure containing the configuration details of the feature.</p>
   * @public
   */
  feature: Feature | undefined;
}

/**
 * @public
 */
export interface ListFeaturesRequest {
  /**
   * <p>The name or ARN of the project to return the feature list from.</p>
   * @public
   */
  project: string | undefined;

  /**
   * <p>The maximum number of results to include in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token to use when requesting the next set of results. You received this token from a previous
   *        <code>ListFeatures</code> operation.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>This structure contains information about one Evidently feature in your account.</p>
 * @public
 */
export interface FeatureSummary {
  /**
   * <p>The ARN of the feature.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the feature.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The name or ARN of the project that contains the feature.</p>
   * @public
   */
  project?: string | undefined;

  /**
   * <p>The current state of the feature.</p>
   * @public
   */
  status: FeatureStatus | undefined;

  /**
   * <p>The date and time that the feature is created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The date and time that the feature was most recently updated.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;

  /**
   * <p>If this value is <code>ALL_RULES</code>, the traffic allocation specified by
   *       any ongoing launches or experiments is being used. If this is <code>DEFAULT_VARIATION</code>,
   *       the default variation is being served to all users.</p>
   * @public
   */
  evaluationStrategy: FeatureEvaluationStrategy | undefined;

  /**
   * <p>An array of structures that define</p>
   * @public
   */
  evaluationRules?: EvaluationRule[] | undefined;

  /**
   * <p>The name of the variation that is used as the default variation. The default
   *       variation is served to users who are not allocated to any ongoing launches
   *       or experiments of this feature.</p>
   * @public
   */
  defaultVariation?: string | undefined;

  /**
   * <p>The list of tag keys and values associated with this feature.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListFeaturesResponse {
  /**
   * <p>An array of structures that contain the configuration details of the features in the
   *        specified project.</p>
   * @public
   */
  features?: FeatureSummary[] | undefined;

  /**
   * <p>The token to use in a subsequent <code>ListFeatures</code> operation to return
   *        the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFeatureRequest {
  /**
   * <p>The name or ARN of the project that contains the feature to be updated.</p>
   * @public
   */
  project: string | undefined;

  /**
   * <p>The name of the feature to be updated.</p>
   * @public
   */
  feature: string | undefined;

  /**
   * <p>Specify <code>ALL_RULES</code> to activate the traffic allocation specified by any ongoing
   *       launches or experiments. Specify <code>DEFAULT_VARIATION</code> to serve the default variation
   *       to all users instead.</p>
   * @public
   */
  evaluationStrategy?: FeatureEvaluationStrategy | undefined;

  /**
   * <p>An optional description of the feature.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>To update variation configurations for this feature, or add new ones, specify this structure.
   *       In this array, include any variations that you want to add or update. If the array includes a variation name that
   *       already exists for this feature, it is updated. If it includes a new variation name, it is added
   *       as a new variation.</p>
   * @public
   */
  addOrUpdateVariations?: VariationConfig[] | undefined;

  /**
   * <p>Removes a variation from the feature. If the variation you specify doesn't exist, then this
   *     makes no change and does not report an error.</p>
   *          <p>This operation fails if you try to remove a variation that is part of an
   *     ongoing launch or experiment.</p>
   * @public
   */
  removeVariations?: string[] | undefined;

  /**
   * <p>The name of the variation to use as the default variation. The default
   *       variation is served to users who are not allocated to any ongoing launches
   *       or experiments of this feature.</p>
   * @public
   */
  defaultVariation?: string | undefined;

  /**
   * <p>Specified users that should always be served a specific variation of a feature. Each user
   *       is specified by a key-value pair . For each key, specify a user by entering their user ID,
   *       account ID, or some other identifier. For the value, specify the name of the variation that
   *       they are to be served.</p>
   *          <p>This parameter is limited to 2500 overrides or a total of 40KB. The 40KB limit includes an overhead of 6 bytes
   *       per override.</p>
   * @public
   */
  entityOverrides?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateFeatureResponse {
  /**
   * <p>A structure that contains information about the updated feature.</p>
   * @public
   */
  feature: Feature | undefined;
}

/**
 * @public
 */
export interface GetProjectRequest {
  /**
   * <p>The name or ARN of the project that you want to see the details of.</p>
   * @public
   */
  project: string | undefined;
}

/**
 * @public
 */
export interface GetProjectResponse {
  /**
   * <p>A structure containing the configuration details of the project.</p>
   * @public
   */
  project: Project | undefined;
}

/**
 * @public
 */
export interface GetLaunchRequest {
  /**
   * <p>The name or ARN of the project that contains the launch.</p>
   * @public
   */
  project: string | undefined;

  /**
   * <p>The name of the launch that you want to see the details of.</p>
   * @public
   */
  launch: string | undefined;
}

/**
 * @public
 */
export interface GetLaunchResponse {
  /**
   * <p>A structure containing the configuration details of the launch.</p>
   * @public
   */
  launch?: Launch | undefined;
}

/**
 * @public
 */
export interface ListLaunchesRequest {
  /**
   * <p>The name or ARN of the project to return the launch list from.</p>
   * @public
   */
  project: string | undefined;

  /**
   * <p>The maximum number of results to include in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token to use when requesting the next set of results. You received this token from a previous
   *        <code>ListLaunches</code> operation.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Use this optional parameter to limit the returned results to only the launches with the status that you specify here.</p>
   * @public
   */
  status?: LaunchStatus | undefined;
}

/**
 * @public
 */
export interface ListLaunchesResponse {
  /**
   * <p>An array of structures that contain the configuration details of the launches in the
   *        specified project.</p>
   * @public
   */
  launches?: Launch[] | undefined;

  /**
   * <p>The token to use in a subsequent <code>ListLaunches</code> operation to return
   *        the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartLaunchRequest {
  /**
   * <p>The name or ARN of the project that contains the launch to start.</p>
   * @public
   */
  project: string | undefined;

  /**
   * <p>The name of the launch to start.</p>
   * @public
   */
  launch: string | undefined;
}

/**
 * @public
 */
export interface StartLaunchResponse {
  /**
   * <p>A structure that contains information about the launch that was started.</p>
   * @public
   */
  launch: Launch | undefined;
}

/**
 * @public
 * @enum
 */
export const LaunchStopDesiredState = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
} as const;

/**
 * @public
 */
export type LaunchStopDesiredState = (typeof LaunchStopDesiredState)[keyof typeof LaunchStopDesiredState];

/**
 * @public
 */
export interface StopLaunchRequest {
  /**
   * <p>The name or ARN of the project that contains the launch that you want to stop.</p>
   * @public
   */
  project: string | undefined;

  /**
   * <p>The name of the launch to stop.</p>
   * @public
   */
  launch: string | undefined;

  /**
   * <p>Specify whether to consider the launch as <code>COMPLETED</code> or
   *         <code>CANCELLED</code> after it stops.</p>
   * @public
   */
  desiredState?: LaunchStopDesiredState | undefined;

  /**
   * <p>A string that describes why you are stopping the launch.</p>
   * @public
   */
  reason?: string | undefined;
}

/**
 * @public
 */
export interface StopLaunchResponse {
  /**
   * <p>The date and time that the launch stopped.</p>
   * @public
   */
  endedTime?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateLaunchRequest {
  /**
   * <p>The name or ARN of the project that contains the launch that you want to update.</p>
   * @public
   */
  project: string | undefined;

  /**
   * <p>The name of the launch that is to be updated.</p>
   * @public
   */
  launch: string | undefined;

  /**
   * <p>An optional description for the launch.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An array of structures that contains the feature and variations that are to be used for
   *       the launch.</p>
   * @public
   */
  groups?: LaunchGroupConfig[] | undefined;

  /**
   * <p>An array of structures that define the metrics that will be used to monitor
   *     the launch performance.</p>
   * @public
   */
  metricMonitors?: MetricMonitorConfig[] | undefined;

  /**
   * <p>When Evidently assigns a particular user session to a launch, it must use a randomization ID
   *       to determine which variation the user session is served. This randomization ID is a combination of the entity ID
   *       and <code>randomizationSalt</code>. If you omit <code>randomizationSalt</code>, Evidently uses
   *       the launch name as the <code>randomizationSalt</code>.</p>
   * @public
   */
  randomizationSalt?: string | undefined;

  /**
   * <p>An array of structures that define the traffic allocation percentages among the feature
   *       variations during each step of the launch.</p>
   * @public
   */
  scheduledSplitsConfig?: ScheduledSplitsLaunchConfig | undefined;
}

/**
 * @public
 */
export interface UpdateLaunchResponse {
  /**
   * <p>A structure that contains the new configuration of the launch that was updated.</p>
   * @public
   */
  launch: Launch | undefined;
}

/**
 * @public
 */
export interface ListProjectsRequest {
  /**
   * <p>The maximum number of results to include in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token to use when requesting the next set of results. You received this token from a previous
   *        <code>ListProjects</code> operation.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A structure that contains configuration information about an Evidently project.</p>
 * @public
 */
export interface ProjectSummary {
  /**
   * <p>The name or ARN of the project.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the project.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The current state of the project.</p>
   * @public
   */
  status: ProjectStatus | undefined;

  /**
   * <p>The description of the project.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The date and time that the project is created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The date and time that the project was most recently updated.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;

  /**
   * <p>The number of features currently in the project.</p>
   * @public
   */
  featureCount?: number | undefined;

  /**
   * <p>The number of launches currently in the project, including launches that are ongoing, completed, and not started yet.</p>
   * @public
   */
  launchCount?: number | undefined;

  /**
   * <p>The number of ongoing launches currently in the project.</p>
   * @public
   */
  activeLaunchCount?: number | undefined;

  /**
   * <p>The number of experiments currently in the project.</p>
   * @public
   */
  experimentCount?: number | undefined;

  /**
   * <p>The number of experiments currently in the project.</p>
   * @public
   */
  activeExperimentCount?: number | undefined;

  /**
   * <p>The list of tag keys and values associated with this project.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListProjectsResponse {
  /**
   * <p>An array of structures that contain the configuration details of the projects in the Region.</p>
   * @public
   */
  projects?: ProjectSummary[] | undefined;

  /**
   * <p>The token to use in a subsequent <code>ListProjects</code> operation to return
   *        the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutProjectEventsRequest {
  /**
   * <p>The name or ARN of the project to write the events to.</p>
   * @public
   */
  project: string | undefined;

  /**
   * <p>An array of event structures that contain the performance data that is being sent to
   *       Evidently.</p>
   * @public
   */
  events: Event[] | undefined;
}

/**
 * <p>A structure that contains Evidently's response to the sent events, including an event ID and error codes, if any. </p>
 * @public
 */
export interface PutProjectEventsResultEntry {
  /**
   * <p>A unique ID assigned to this <code>PutProjectEvents</code> operation. </p>
   * @public
   */
  eventId?: string | undefined;

  /**
   * <p>If the <code>PutProjectEvents</code> operation has an error, the error code is returned
   *       here.</p>
   * @public
   */
  errorCode?: string | undefined;

  /**
   * <p>If the <code>PutProjectEvents</code> operation has an error, the error message is
   *       returned here.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface PutProjectEventsResponse {
  /**
   * <p>The number of events in the operation that could not be used by Evidently.</p>
   * @public
   */
  failedEventCount?: number | undefined;

  /**
   * <p>A structure that contains Evidently's response to the sent events, including an event ID and
   *       error codes, if any.</p>
   * @public
   */
  eventResults?: PutProjectEventsResultEntry[] | undefined;
}

/**
 * @public
 */
export interface UpdateProjectRequest {
  /**
   * <p>The name or ARN of the project to update.</p>
   * @public
   */
  project: string | undefined;

  /**
   * <p>Use this parameter if the project will use client-side evaluation powered by AppConfig. Client-side
   *      evaluation allows your application to assign variations to user
   *      sessions locally instead of by calling the <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html">EvaluateFeature</a> operation. This
   *      mitigates the latency and availability risks that come with an API call. allows
   *       you to</p>
   *          <p>This parameter is a structure that
   *       contains information about the AppConfig application that will be used for client-side evaluation.</p>
   * @public
   */
  appConfigResource?: ProjectAppConfigResourceConfig | undefined;

  /**
   * <p>An optional description of the project.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProjectResponse {
  /**
   * <p>A structure containing information about the updated project.</p>
   * @public
   */
  project: Project | undefined;
}

/**
 * @public
 */
export interface UpdateProjectDataDeliveryRequest {
  /**
   * <p>The name or ARN of the project that you want to modify the data storage options for.</p>
   * @public
   */
  project: string | undefined;

  /**
   * <p>A structure containing the S3 bucket name and bucket prefix where you want to store evaluation events.</p>
   * @public
   */
  s3Destination?: S3DestinationConfig | undefined;

  /**
   * <p>A structure containing the CloudWatch Logs log group where you want to store evaluation
   *       events.</p>
   * @public
   */
  cloudWatchLogs?: CloudWatchLogsDestinationConfig | undefined;
}

/**
 * @public
 */
export interface UpdateProjectDataDeliveryResponse {
  /**
   * <p>A structure containing details about the project that you updated.</p>
   * @public
   */
  project: Project | undefined;
}

/**
 * @public
 */
export interface GetSegmentRequest {
  /**
   * <p>The ARN of the segment to return information for.</p>
   * @public
   */
  segment: string | undefined;
}

/**
 * @public
 */
export interface GetSegmentResponse {
  /**
   * <p>A structure that contains the complete information about the segment.</p>
   * @public
   */
  segment: Segment | undefined;
}

/**
 * @public
 * @enum
 */
export const SegmentReferenceResourceType = {
  EXPERIMENT: "EXPERIMENT",
  LAUNCH: "LAUNCH",
} as const;

/**
 * @public
 */
export type SegmentReferenceResourceType =
  (typeof SegmentReferenceResourceType)[keyof typeof SegmentReferenceResourceType];

/**
 * @public
 */
export interface ListSegmentReferencesRequest {
  /**
   * <p>The ARN of the segment that you want to view information for.</p>
   * @public
   */
  segment: string | undefined;

  /**
   * <p>The maximum number of results to include in the response. If you omit this, the default of 50 is used.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token to use when requesting the next set of results. You received this token from a previous
   *       <code>ListSegmentReferences</code> operation.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Specifies whether to return information about launches or experiments that use this segment.</p>
   * @public
   */
  type: SegmentReferenceResourceType | undefined;
}

/**
 * <p>A structure that contains information about one experiment or launch that
 *       uses the specified segment.  </p>
 * @public
 */
export interface RefResource {
  /**
   * <p>The name of the experiment or launch.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Specifies whether the resource that this structure contains information about is an experiment or a launch.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The ARN of the experiment or launch.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The status of the experiment or launch.</p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The day and time that this experiment or launch started.</p>
   * @public
   */
  startTime?: string | undefined;

  /**
   * <p>The day and time that this experiment or launch ended.</p>
   * @public
   */
  endTime?: string | undefined;

  /**
   * <p>The day and time that this experiment or launch was most recently updated.</p>
   * @public
   */
  lastUpdatedOn?: string | undefined;
}

/**
 * @public
 */
export interface ListSegmentReferencesResponse {
  /**
   * <p>An array of structures, where each structure contains information about one experiment or launch that
   *       uses this segment.  </p>
   * @public
   */
  referencedBy?: RefResource[] | undefined;

  /**
   * <p>The token to use in a subsequent <code>ListSegmentReferences</code> operation to return
   *       the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSegmentsRequest {
  /**
   * <p>The maximum number of results to include in the response. If you omit this, the default of 50 is used.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token to use when requesting the next set of results. You received this token from a previous
   *       <code>ListSegments</code> operation.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSegmentsResponse {
  /**
   * <p>An array of structures that contain information about the segments in this Region.</p>
   * @public
   */
  segments?: Segment[] | undefined;

  /**
   * <p>The token to use in a subsequent <code>ListSegments</code> operation to return
   *       the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the CloudWatch Evidently resource that you're adding tags to.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of key-value pairs to associate with the resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface TestSegmentPatternRequest {
  /**
   * <p>The pattern to test.</p>
   * @public
   */
  pattern: __AutomaticJsonStringConversion | string | undefined;

  /**
   * <p>A sample <code>evaluationContext</code> JSON block to test against the specified pattern.</p>
   * @public
   */
  payload: __AutomaticJsonStringConversion | string | undefined;
}

/**
 * @public
 */
export interface TestSegmentPatternResponse {
  /**
   * <p>Returns <code>true</code> if the pattern matches the payload.</p>
   * @public
   */
  match: boolean | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the CloudWatch Evidently resource that you're removing tags from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of tag keys to remove from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
