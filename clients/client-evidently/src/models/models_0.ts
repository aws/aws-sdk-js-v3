// smithy-typescript generated code
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
} from "@smithy/smithy-client";

import { EvidentlyServiceException as __BaseException } from "./EvidentlyServiceException";

/**
 * @public
 * <p>You do not have sufficient permissions to perform this action. </p>
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
 * @public
 * <p>This structure assigns a feature variation to one user session.</p>
 */
export interface EvaluationRequest {
  /**
   * @public
   * <p>The name of the feature being evaluated.</p>
   */
  feature: string | undefined;

  /**
   * @public
   * <p>An internal ID that represents a unique user session of the application. This
   *         <code>entityID</code> is checked against any override rules assigned for this
   *       feature.</p>
   */
  entityId: string | undefined;

  /**
   * @public
   * <p>A JSON block of attributes that you can optionally pass in. This JSON block is included
   *        in the evaluation events sent to Evidently from the user session. </p>
   */
  evaluationContext?: __LazyJsonString | string;
}

/**
 * @public
 */
export interface BatchEvaluateFeatureRequest {
  /**
   * @public
   * <p>The name or ARN of the project that contains the feature being evaluated.</p>
   */
  project: string | undefined;

  /**
   * @public
   * <p>An array of structures, where each structure assigns a feature variation to one user session.</p>
   */
  requests: EvaluationRequest[] | undefined;
}

/**
 * @public
 * <p>The value assigned to a feature variation. This structure must contain exactly one
 *       field. It can be <code>boolValue</code>, <code>doubleValue</code>, <code>longValue</code>, or
 *         <code>stringValue</code>.</p>
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
   * @public
   * <p>If this feature uses the Boolean variation type, this field contains the Boolean value of
   *       this variation.</p>
   */
  export interface BoolValueMember {
    boolValue: boolean;
    stringValue?: never;
    longValue?: never;
    doubleValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>If this feature uses the string variation type, this field contains the string value of
   *        this variation.</p>
   */
  export interface StringValueMember {
    boolValue?: never;
    stringValue: string;
    longValue?: never;
    doubleValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>If this feature uses the long variation type, this field contains the long value of
   *        this variation.</p>
   */
  export interface LongValueMember {
    boolValue?: never;
    stringValue?: never;
    longValue: number;
    doubleValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>If this feature uses the double integer variation type, this field contains the double integer value of
   *        this variation.</p>
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

  export interface Visitor<T> {
    boolValue: (value: boolean) => T;
    stringValue: (value: string) => T;
    longValue: (value: number) => T;
    doubleValue: (value: number) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: VariableValue, visitor: Visitor<T>): T => {
    if (value.boolValue !== undefined) return visitor.boolValue(value.boolValue);
    if (value.stringValue !== undefined) return visitor.stringValue(value.stringValue);
    if (value.longValue !== undefined) return visitor.longValue(value.longValue);
    if (value.doubleValue !== undefined) return visitor.doubleValue(value.doubleValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>This structure displays the results of one feature evaluation assignment to one user
 *       session.</p>
 */
export interface EvaluationResult {
  /**
   * @public
   * <p>The name or ARN of the project that contains the feature being evaluated.</p>
   */
  project?: string;

  /**
   * @public
   * <p>The name of the feature being evaluated.</p>
   */
  feature: string | undefined;

  /**
   * @public
   * <p>The name of the variation that was served to the user session.</p>
   */
  variation?: string;

  /**
   * @public
   * <p>The value assigned to this variation to differentiate it from the other variations of this feature.</p>
   */
  value?: VariableValue;

  /**
   * @public
   * <p>An internal ID that represents a unique user session of the application.</p>
   */
  entityId: string | undefined;

  /**
   * @public
   * <p>Specifies the reason that the user session was assigned this variation. Possible values
   *       include <code>DEFAULT</code>, meaning the user was served the default variation;
   *         <code>LAUNCH_RULE_MATCH</code>, if the user session was enrolled in a launch; or
   *         <code>EXPERIMENT_RULE_MATCH</code>, if the user session was enrolled in an
   *       experiment.</p>
   */
  reason?: string;

  /**
   * @public
   * <p>If this user was assigned to a launch or experiment, this field lists the launch or experiment name.</p>
   */
  details?: __LazyJsonString | string;
}

/**
 * @public
 */
export interface BatchEvaluateFeatureResponse {
  /**
   * @public
   * <p>An array of structures, where each structure displays the results of one feature evaluation
   *        assignment to one user session.</p>
   */
  results?: EvaluationResult[];
}

/**
 * @public
 * <p>The request references a resource that does not exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the resource that caused the exception.</p>
   */
  resourceId?: string;

  /**
   * @public
   * <p>The type of the resource that is associated with the error.</p>
   */
  resourceType?: string;

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
 * @public
 * <p>The request was denied because of request throttling. Retry the request.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the service that is associated with the error.</p>
   */
  serviceCode?: string;

  /**
   * @public
   * <p>The ID of the service quota that was exceeded.</p>
   */
  quotaCode?: string;

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
 * @public
 * <p>A structure containing an error name and message.</p>
 */
export interface ValidationExceptionField {
  /**
   * @public
   * <p>The error name.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The error message.</p>
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
 * @public
 * <p>The value of a parameter in the request caused an error.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A reason for the error.</p>
   */
  reason?: ValidationExceptionReason | string;

  /**
   * @public
   * <p>The parameter that caused the exception.</p>
   */
  fieldList?: ValidationExceptionField[];

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
 * @public
 * <p>A structure containing the CloudWatch Logs log group where the project stores evaluation
 *        events.</p>
 */
export interface CloudWatchLogsDestination {
  /**
   * @public
   * <p>The name of the log group where the project stores evaluation
   *        events.</p>
   */
  logGroup?: string;
}

/**
 * @public
 * <p>A structure containing the CloudWatch Logs log group where the project stores evaluation
 *        events.</p>
 */
export interface CloudWatchLogsDestinationConfig {
  /**
   * @public
   * <p>The name of the log group where the project stores evaluation
   *        events.</p>
   */
  logGroup?: string;
}

/**
 * @public
 * <p>A resource was in an inconsistent state during an update or a deletion.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the resource that caused the exception.</p>
   */
  resourceId?: string;

  /**
   * @public
   * <p>The type of the resource that is associated with the error.</p>
   */
  resourceType?: string;

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
 * @public
 * <p>This structure defines a metric that you want to use to evaluate the variations
 *        during a launch or experiment.</p>
 */
export interface MetricDefinitionConfig {
  /**
   * @public
   * <p>A name for the metric.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The entity, such as a user or session, that does an action that causes a metric
   *        value to be recorded. An example is <code>userDetails.userID</code>.</p>
   */
  entityIdKey: string | undefined;

  /**
   * @public
   * <p>The value that is tracked to produce the metric.</p>
   */
  valueKey: string | undefined;

  /**
   * @public
   * <p>The EventBridge event pattern that defines how the metric is recorded.</p>
   *          <p>For more information about EventBridge event patterns, see
   *        <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html">Amazon EventBridge event patterns</a>.</p>
   */
  eventPattern?: __LazyJsonString | string;

  /**
   * @public
   * <p>A label for the units that the metric is measuring.</p>
   */
  unitLabel?: string;
}

/**
 * @public
 * <p>Use this structure to tell Evidently whether higher or lower values are desired for a metric that is
 *        used in an experiment.</p>
 */
export interface MetricGoalConfig {
  /**
   * @public
   * <p>A structure that contains details about the metric.</p>
   */
  metricDefinition: MetricDefinitionConfig | undefined;

  /**
   * @public
   * <p>
   *             <code>INCREASE</code> means that a variation with a higher number for this metric is performing
   *        better.</p>
   *          <p>
   *             <code>DECREASE</code> means that a variation with a lower number for this metric is performing
   *        better.</p>
   */
  desiredChange?: ChangeDirectionEnum | string;
}

/**
 * @public
 * <p>A structure that contains the configuration of which variation to use as the "control"
 *       version. The "control" version  is used for comparison with other variations. This structure
 *       also specifies how much experiment traffic is allocated to each variation.</p>
 */
export interface OnlineAbConfig {
  /**
   * @public
   * <p>The name of the variation that is to be the default variation that the other variations are compared to.</p>
   */
  controlTreatmentName?: string;

  /**
   * @public
   * <p>A set of key-value pairs. The keys are variation names, and the values are the portion
   *       of experiment traffic to be assigned to that variation. Specify the traffic portion in
   *       thousandths of a percent, so 20,000 for a variation would allocate 20% of the experiment
   *       traffic to that variation.</p>
   */
  treatmentWeights?: Record<string, number>;
}

/**
 * @public
 * <p>A structure that defines one treatment in an experiment. A treatment is a variation of the feature
 *       that you are including in the experiment.</p>
 */
export interface TreatmentConfig {
  /**
   * @public
   * <p>A name for this treatment.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A description for this treatment.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The feature that this experiment is testing.</p>
   */
  feature: string | undefined;

  /**
   * @public
   * <p>The name of the variation to use as this treatment in the experiment.</p>
   */
  variation: string | undefined;
}

/**
 * @public
 */
export interface CreateExperimentRequest {
  /**
   * @public
   * <p>The name or ARN of the project that you want to create the new experiment in.</p>
   */
  project: string | undefined;

  /**
   * @public
   * <p>A name for the new experiment.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>An optional description of the experiment.</p>
   */
  description?: string;

  /**
   * @public
   * <p>An array of structures that describe the configuration of each feature variation used in the experiment.</p>
   */
  treatments: TreatmentConfig[] | undefined;

  /**
   * @public
   * <p>An array of structures that defines the metrics used for the experiment, and whether a higher
   *       or lower value for each metric is the goal.</p>
   */
  metricGoals: MetricGoalConfig[] | undefined;

  /**
   * @public
   * <p>When Evidently assigns a particular user session to an experiment, it must use a randomization ID
   *        to determine which variation the user session is served. This randomization ID is a combination of the entity ID
   *        and <code>randomizationSalt</code>. If you omit <code>randomizationSalt</code>, Evidently uses
   *        the experiment name as the <code>randomizationSalt</code>.</p>
   */
  randomizationSalt?: string;

  /**
   * @public
   * <p>The portion of the available audience that you want to allocate to this experiment, in thousandths of a percent. The available audience
   *       is the total audience minus the audience that you have allocated to overrides or current launches of
   *       this feature.</p>
   *          <p>This is represented in thousandths of a percent. For example, specify 10,000 to allocate 10% of the available audience.</p>
   */
  samplingRate?: number;

  /**
   * @public
   * <p>A structure that contains the configuration of which variation to use as the "control"
   *       version. tThe "control" version is used for comparison with other variations. This structure
   *       also specifies how much experiment traffic is allocated to each variation.</p>
   */
  onlineAbConfig?: OnlineAbConfig;

  /**
   * @public
   * <p>Specifies an audience <i>segment</i> to use in the experiment. When a segment is used in an experiment, only
   *       user sessions that match the segment pattern are used in the experiment.</p>
   */
  segment?: string;

  /**
   * @public
   * <p>Assigns one or more tags (key-value pairs) to the experiment.</p>
   *          <p>Tags can help you organize and categorize your resources. You can also use them to scope user
   *        permissions by granting a user
   *        permission to access or change only resources with certain tag values.</p>
   *          <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p>
   *          <p>You can associate as many as 50 tags with an experiment.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>This structure contains the date and time that the experiment started and ended.</p>
 */
export interface ExperimentExecution {
  /**
   * @public
   * <p>The date and time that the experiment started.</p>
   */
  startedTime?: Date;

  /**
   * @public
   * <p>The date and time that the experiment ended.</p>
   */
  endedTime?: Date;
}

/**
 * @public
 * <p>This structure defines a metric that is being used to evaluate the variations
 *       during a launch or experiment.</p>
 */
export interface MetricDefinition {
  /**
   * @public
   * <p>The name of the metric.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The entity, such as a user or session, that does an action that causes a metric
   *       value to be recorded.</p>
   */
  entityIdKey?: string;

  /**
   * @public
   * <p>The value that is tracked to produce the metric.</p>
   */
  valueKey?: string;

  /**
   * @public
   * <p>The EventBridge event pattern that defines how the metric is recorded.</p>
   *          <p>For more information about EventBridge event patterns, see
   *        <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html">Amazon EventBridge event patterns</a>.</p>
   */
  eventPattern?: __LazyJsonString | string;

  /**
   * @public
   * <p>The label for the units that the metric is measuring.</p>
   */
  unitLabel?: string;
}

/**
 * @public
 * <p>A structure that tells Evidently whether higher or lower values are desired for a metric that is
 *        used in an experiment.</p>
 */
export interface MetricGoal {
  /**
   * @public
   * <p>A structure that contains details about the metric.</p>
   */
  metricDefinition: MetricDefinition | undefined;

  /**
   * @public
   * <p>
   *             <code>INCREASE</code> means that a variation with a higher number for this metric is performing
   *       better.</p>
   *          <p>
   *             <code>DECREASE</code> means that a variation with a lower number for this metric is performing
   *      better.</p>
   */
  desiredChange?: ChangeDirectionEnum | string;
}

/**
 * @public
 * <p>A structure that contains the configuration of which variation to use as the "control"
 *       version. The "control" version is used for comparison with other variations. This structure
 *       also specifies how much experiment traffic is allocated to each variation.</p>
 */
export interface OnlineAbDefinition {
  /**
   * @public
   * <p>The name of the variation that is the default variation that the other variations are compared to.</p>
   */
  controlTreatmentName?: string;

  /**
   * @public
   * <p>A set of key-value pairs.  The keys are variation names, and the values are the portion
   *       of experiment traffic to be assigned to that variation. The traffic portion is specified in
   *       thousandths of a percent, so 20,000 for a variation would allocate 20% of the experiment
   *       traffic to that variation.</p>
   */
  treatmentWeights?: Record<string, number>;
}

/**
 * @public
 * <p>This structure contains the time and date that Evidently completed the analysis of the experiment.</p>
 */
export interface ExperimentSchedule {
  /**
   * @public
   * <p>The time and date that Evidently completed the analysis of the experiment.</p>
   */
  analysisCompleteTime?: Date;
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
 * @public
 * <p>A structure that defines one treatment in an experiment. A treatment is a variation of the feature
 *        that you are including in the experiment.</p>
 */
export interface Treatment {
  /**
   * @public
   * <p>The name of this treatment.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the treatment.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The feature variation used for this treatment. This is a key-value pair. The key is the
   *       feature name, and the value is the variation name.</p>
   */
  featureVariations?: Record<string, string>;
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
 * @public
 * <p>A structure containing the configuration details of an experiment.</p>
 */
export interface Experiment {
  /**
   * @public
   * <p>The ARN of the experiment.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The name of the experiment.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The name or ARN of the project that contains this experiment.</p>
   */
  project?: string;

  /**
   * @public
   * <p>The current state of the experiment.</p>
   */
  status: ExperimentStatus | string | undefined;

  /**
   * @public
   * <p>If the experiment was stopped, this is the string that was entered by the person who
   *       stopped the experiment, to explain why it was stopped.</p>
   */
  statusReason?: string;

  /**
   * @public
   * <p>A description of the experiment.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The date and time that the experiment is first created.</p>
   */
  createdTime: Date | undefined;

  /**
   * @public
   * <p>The date and time that the experiment was most recently updated.</p>
   */
  lastUpdatedTime: Date | undefined;

  /**
   * @public
   * <p>A structure that contains the time and date that Evidently completed the analysis of the experiment.</p>
   */
  schedule?: ExperimentSchedule;

  /**
   * @public
   * <p>A structure that contains the date and time that the experiment started and ended.</p>
   */
  execution?: ExperimentExecution;

  /**
   * @public
   * <p>An array of structures that describe the configuration of each feature variation used in the experiment.</p>
   */
  treatments?: Treatment[];

  /**
   * @public
   * <p>An array of structures that defines the metrics used for the experiment, and whether a higher
   *       or lower value for each metric is the goal.</p>
   */
  metricGoals?: MetricGoal[];

  /**
   * @public
   * <p>This value is used when Evidently assigns a particular user session to the experiment. It
   *       helps create a randomization ID to determine which variation the user session is served. This
   *       randomization ID is a combination of the entity ID and <code>randomizationSalt</code>.</p>
   */
  randomizationSalt?: string;

  /**
   * @public
   * <p>In thousandths of a percent, the amount of the available audience that is allocated to this experiment.
   *       The available audience
   *       is the total audience minus the audience that you have allocated to overrides or current launches of
   *       this feature.</p>
   *          <p>This is represented in thousandths of a percent, so a value of 10,000 is 10% of the available audience.</p>
   */
  samplingRate?: number;

  /**
   * @public
   * <p>The audience segment being used for the experiment, if a segment is being used.</p>
   */
  segment?: string;

  /**
   * @public
   * <p>The type of this experiment. Currently, this value must be <code>aws.experiment.onlineab</code>.</p>
   */
  type: ExperimentType | string | undefined;

  /**
   * @public
   * <p>A structure that contains the configuration of which variation to use as the "control"
   *       version. The "control" version is used for comparison with other variations. This structure
   *       also specifies how much experiment traffic is allocated to each variation.</p>
   */
  onlineAbDefinition?: OnlineAbDefinition;

  /**
   * @public
   * <p>The list of tag keys and values associated with this experiment.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateExperimentResponse {
  /**
   * @public
   * <p>A structure containing the configuration details of the experiment
   *        that you created.</p>
   */
  experiment: Experiment | undefined;
}

/**
 * @public
 * <p>The request would cause a service quota to be exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the resource that caused the exception.</p>
   */
  resourceId?: string;

  /**
   * @public
   * <p>The type of the resource that is associated with the error.</p>
   */
  resourceType?: string;

  /**
   * @public
   * <p>The ID of the service that is associated with the error.</p>
   */
  serviceCode?: string;

  /**
   * @public
   * <p>The ID of the service quota that was exceeded.</p>
   */
  quotaCode?: string;

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
 * @public
 * <p>This structure contains the name and variation value of one variation of a feature.</p>
 */
export interface VariationConfig {
  /**
   * @public
   * <p>The name of the variation.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The value assigned to this variation.</p>
   */
  value: VariableValue | undefined;
}

/**
 * @public
 */
export interface CreateFeatureRequest {
  /**
   * @public
   * <p>The name or ARN of the project that is to contain the new feature.</p>
   */
  project: string | undefined;

  /**
   * @public
   * <p>The name for the new feature.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Specify <code>ALL_RULES</code> to activate the traffic allocation specified by any
   *       ongoing launches or experiments. Specify <code>DEFAULT_VARIATION</code> to serve the default
   *       variation to all users instead.</p>
   */
  evaluationStrategy?: FeatureEvaluationStrategy | string;

  /**
   * @public
   * <p>An optional description of the feature.</p>
   */
  description?: string;

  /**
   * @public
   * <p>An array of structures that contain the configuration of the feature's different variations.</p>
   */
  variations: VariationConfig[] | undefined;

  /**
   * @public
   * <p>The name of the variation to use as the default variation. The default
   *       variation is served to users who are not allocated to any ongoing launches
   *       or experiments of this feature.</p>
   *          <p>This variation must also be listed in the <code>variations</code> structure.</p>
   *          <p>If you omit <code>defaultVariation</code>, the first variation listed in
   *        the <code>variations</code> structure is used as the default variation.</p>
   */
  defaultVariation?: string;

  /**
   * @public
   * <p>Assigns one or more tags (key-value pairs) to the feature.</p>
   *          <p>Tags can help you organize and categorize your resources. You can also use them to scope user
   *        permissions by granting a user
   *        permission to access or change only resources with certain tag values.</p>
   *          <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p>
   *          <p>You can associate as many as 50 tags with a feature.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Specify users that should always be served a specific variation of a feature. Each user
   *       is specified by a key-value pair . For each key, specify a user by entering their user ID,
   *       account ID, or some other identifier. For the value, specify the name of the variation that
   *       they are to be served.</p>
   *          <p>This parameter is limited to 2500 overrides or a total of 40KB. The 40KB limit includes an overhead of 6 bytes
   *      per override.</p>
   */
  entityOverrides?: Record<string, string>;
}

/**
 * @public
 * <p>A structure that contains the information about an evaluation rule for this feature,
 *       if it is used in a launch or experiment.</p>
 */
export interface EvaluationRule {
  /**
   * @public
   * <p>The name of the experiment or launch.</p>
   */
  name?: string;

  /**
   * @public
   * <p>This value is <code>aws.evidently.splits</code> if this is an evaluation rule for a launch, and it is
   *        <code>aws.evidently.onlineab</code> if this is an evaluation rule for an experiment.</p>
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
 * @public
 * <p>This structure contains the name and variation value of one variation of a feature.</p>
 */
export interface Variation {
  /**
   * @public
   * <p>The name of the variation.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The value assigned to this variation.</p>
   */
  value?: VariableValue;
}

/**
 * @public
 * <p>This structure contains information about one Evidently feature in your account.</p>
 */
export interface Feature {
  /**
   * @public
   * <p>The ARN of the feature.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The name of the feature.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The name or ARN of the project that contains the feature.</p>
   */
  project?: string;

  /**
   * @public
   * <p>The current state of the feature.</p>
   */
  status: FeatureStatus | string | undefined;

  /**
   * @public
   * <p>The date and time that the feature is created.</p>
   */
  createdTime: Date | undefined;

  /**
   * @public
   * <p>The date and time that the feature was most recently updated.</p>
   */
  lastUpdatedTime: Date | undefined;

  /**
   * @public
   * <p>The description of the feature.</p>
   */
  description?: string;

  /**
   * @public
   * <p>If this value is <code>ALL_RULES</code>, the traffic allocation specified by
   *       any ongoing launches or experiments is being used. If this is <code>DEFAULT_VARIATION</code>,
   *       the default variation is being served to all users.</p>
   */
  evaluationStrategy: FeatureEvaluationStrategy | string | undefined;

  /**
   * @public
   * <p>Defines the type of value used to define the different feature variations.
   *       For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-variationtypes.html">Variation types</a>
   *          </p>
   */
  valueType: VariationValueType | string | undefined;

  /**
   * @public
   * <p>An array of structures that contain the configuration of the feature's different variations.</p>
   */
  variations: Variation[] | undefined;

  /**
   * @public
   * <p>The name of the variation that is used as the default variation. The default
   *       variation is served to users who are not allocated to any ongoing launches
   *       or experiments of this feature.</p>
   *          <p>This variation must also be listed in the <code>variations</code> structure.</p>
   *          <p>If you omit <code>defaultVariation</code>, the first variation listed in
   *     the <code>variations</code> structure is used as the default variation.</p>
   */
  defaultVariation?: string;

  /**
   * @public
   * <p>An array of structures that define the evaluation rules for the feature.</p>
   */
  evaluationRules?: EvaluationRule[];

  /**
   * @public
   * <p>The list of tag keys and values associated with this feature.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>A set of key-value pairs  that specify users who should always be served a specific
   *       variation of a feature. Each key specifies a user using their user ID, account ID, or some
   *       other identifier. The value specifies the name of the variation that the user is to be
   *       served.</p>
   *          <p>For the override to be successful, the value of the key must match the <code>entityId</code> used
   *       in the <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html">EvaluateFeature</a> operation.</p>
   */
  entityOverrides?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateFeatureResponse {
  /**
   * @public
   * <p>A structure that contains information about the new feature.</p>
   */
  feature?: Feature;
}

/**
 * @public
 * <p>A structure that defines one launch group in a launch. A launch group is a variation of
 *       the feature that you are including in the launch.</p>
 */
export interface LaunchGroupConfig {
  /**
   * @public
   * <p>A name for this launch group.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A description of the launch group.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The feature that this launch is using.</p>
   */
  feature: string | undefined;

  /**
   * @public
   * <p>The feature variation to use for this launch group.</p>
   */
  variation: string | undefined;
}

/**
 * @public
 * <p>A structure that defines a metric to be used to monitor performance of the variations during a launch.</p>
 */
export interface MetricMonitorConfig {
  /**
   * @public
   * <p>A structure that defines the metric.</p>
   */
  metricDefinition: MetricDefinitionConfig | undefined;
}

/**
 * @public
 * <p>This structure specifies a segment
 *       that you have already created, and defines the traffic split for that segment to be used in a launch.</p>
 */
export interface SegmentOverride {
  /**
   * @public
   * <p>The ARN of the segment to use.</p>
   */
  segment: string | undefined;

  /**
   * @public
   * <p>A number indicating the order to use to evaluate segment overrides, if there are more
   *     than one. Segment overrides with lower numbers are evaluated first.</p>
   */
  evaluationOrder: number | undefined;

  /**
   * @public
   * <p>The traffic allocation percentages among the feature variations to assign to this
   *       segment. This is a set of key-value pairs.   The keys are variation names. The values represent
   *       the amount of traffic to allocate to that variation for this segment. This is expressed in thousandths of a percent,
   *     so a weight of 50000 represents 50% of traffic.</p>
   */
  weights: Record<string, number> | undefined;
}

/**
 * @public
 * <p>This structure defines the traffic allocation percentages among the feature
 *        variations during one step of a launch, and the start time of that step.</p>
 */
export interface ScheduledSplitConfig {
  /**
   * @public
   * <p>The date and time that this step of the launch starts.</p>
   */
  startTime: Date | undefined;

  /**
   * @public
   * <p>The traffic allocation percentages among the feature variations during one step of a
   *       launch. This is a set of key-value pairs. The keys are variation names. The values represent
   *       the percentage of traffic to allocate to that variation during this step.</p>
   *          <p>The values is expressed in thousandths of a percent,
   *        so assigning a weight of 50000 assigns 50% of traffic to that variation.</p>
   *          <p>If the sum of the weights for all the variations in a segment override does not add up to 100,000,
   *        then the remaining traffic that matches this segment is not assigned by this segment override, and instead moves
   *        on to the next segment override or the default traffic split.</p>
   */
  groupWeights: Record<string, number> | undefined;

  /**
   * @public
   * <p>Use this parameter to specify different traffic splits for one or more audience <i>segments</i>.
   *       A segment
   *       is a portion of your audience that share one or more characteristics. Examples could be Chrome browser users,
   *       users in Europe, or Firefox browser users in Europe who also fit other criteria that your application collects,
   *       such as age.</p>
   *          <p>This parameter is an array of up to six segment override objects. Each of these objects specifies a segment
   *       that you have already created, and defines the traffic split for that segment.</p>
   */
  segmentOverrides?: SegmentOverride[];
}

/**
 * @public
 * <p>An array of structures that define the traffic allocation percentages among the feature
 *       variations during each step of a launch. This also defines the start time of each step.</p>
 */
export interface ScheduledSplitsLaunchConfig {
  /**
   * @public
   * <p>An array of structures that define the traffic allocation percentages among the feature
   *       variations during each step of the launch. This also defines the start time of each
   *       step.</p>
   */
  steps: ScheduledSplitConfig[] | undefined;
}

/**
 * @public
 */
export interface CreateLaunchRequest {
  /**
   * @public
   * <p>The name or ARN of the project that you want to create the launch in.</p>
   */
  project: string | undefined;

  /**
   * @public
   * <p>The name for the new launch.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>An optional description for the launch.</p>
   */
  description?: string;

  /**
   * @public
   * <p>An array of structures that define the traffic allocation percentages among the feature
   *       variations during each step of the launch.</p>
   */
  scheduledSplitsConfig?: ScheduledSplitsLaunchConfig;

  /**
   * @public
   * <p>An array of structures that define the metrics that will be used to monitor
   *        the launch performance.</p>
   */
  metricMonitors?: MetricMonitorConfig[];

  /**
   * @public
   * <p>An array of structures that contains the feature and variations that are to be used for the launch.</p>
   */
  groups: LaunchGroupConfig[] | undefined;

  /**
   * @public
   * <p>When Evidently assigns a particular user session to a launch, it must use a randomization ID
   *         to determine which variation the user session is served. This randomization ID is a combination of the entity ID
   *         and <code>randomizationSalt</code>. If you omit <code>randomizationSalt</code>, Evidently uses
   *       the launch name as the <code>randomizationSalt</code>.</p>
   */
  randomizationSalt?: string;

  /**
   * @public
   * <p>Assigns one or more tags (key-value pairs) to the launch.</p>
   *          <p>Tags can help you organize and categorize your resources. You can also use them to scope user
   *        permissions by granting a user
   *        permission to access or change only resources with certain tag values.</p>
   *          <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p>
   *          <p>You can associate as many as 50 tags with a launch.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>This structure contains information about the start and end times of the launch.</p>
 */
export interface LaunchExecution {
  /**
   * @public
   * <p>The date and time that the launch started.</p>
   */
  startedTime?: Date;

  /**
   * @public
   * <p>The date and time that the launch ended.</p>
   */
  endedTime?: Date;
}

/**
 * @public
 * <p>A structure that defines one launch group in a launch. A launch group is a variation of the feature
 *       that you are including in the launch.</p>
 */
export interface LaunchGroup {
  /**
   * @public
   * <p>The name of the launch group.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A description of the launch group.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The feature variation for this launch group. This is a key-value pair.</p>
   */
  featureVariations: Record<string, string> | undefined;
}

/**
 * @public
 * <p>A structure that defines a metric to be used to monitor performance of the variations during a launch.</p>
 */
export interface MetricMonitor {
  /**
   * @public
   * <p>A structure that defines the metric.</p>
   */
  metricDefinition: MetricDefinition | undefined;
}

/**
 * @public
 * <p>This structure defines the traffic allocation percentages among the feature
 *        variations during one step of a launch, and the start time of that step.</p>
 */
export interface ScheduledSplit {
  /**
   * @public
   * <p>The date and time that this step of the launch starts.</p>
   */
  startTime: Date | undefined;

  /**
   * @public
   * <p>The traffic allocation percentages among the feature variations during one step of a
   *       launch. This is a set of key-value pairs.   The keys are variation names. The values represent
   *       the percentage of traffic to allocate to that variation during this step.</p>
   *          <p>The values is expressed in thousandths of a percent,
   *        so assigning a weight of 50000 assigns 50% of traffic to that variation.</p>
   *          <p>If the sum of the weights for all the variations in a segment override does not add up to 100,000,
   *      then the remaining traffic that matches this segment is not assigned by this segment override, and instead moves
   *      on to the next segment override or the default traffic split.</p>
   */
  groupWeights?: Record<string, number>;

  /**
   * @public
   * <p>Use this parameter to specify different traffic splits for one or more audience <i>segments</i>.
   *       A segment
   *       is a portion of your audience that share one or more characteristics. Examples could be Chrome browser users,
   *       users in Europe, or Firefox browser users in Europe who also fit other criteria that your application collects,
   *       such as age.</p>
   *          <p>This parameter is an array of up to six segment override objects. Each of these objects specifies a segment
   *     that you have already created, and defines the traffic split for that segment.</p>
   */
  segmentOverrides?: SegmentOverride[];
}

/**
 * @public
 * <p>An array of structures that define the traffic allocation percentages among the feature
 *       variations during each step of a launch. This also defines the start time of each step.</p>
 */
export interface ScheduledSplitsLaunchDefinition {
  /**
   * @public
   * <p>An array of structures that define the traffic allocation percentages among the feature
   *       variations during each step of the launch. This also defines the start time of each
   *       step.</p>
   */
  steps?: ScheduledSplit[];
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
 * @public
 * <p>This structure contains the configuration details of one Evidently launch.</p>
 */
export interface Launch {
  /**
   * @public
   * <p>The ARN of the launch.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The name of the launch.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The name or ARN of the project that contains the launch.</p>
   */
  project?: string;

  /**
   * @public
   * <p>The current state of the launch.</p>
   */
  status: LaunchStatus | string | undefined;

  /**
   * @public
   * <p>If the launch was stopped, this is the string that was entered by the person who
   *       stopped the launch, to explain why it was stopped.</p>
   */
  statusReason?: string;

  /**
   * @public
   * <p>The description of the launch.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The date and time that the launch is created.</p>
   */
  createdTime: Date | undefined;

  /**
   * @public
   * <p>The date and time that the launch was most recently updated.</p>
   */
  lastUpdatedTime: Date | undefined;

  /**
   * @public
   * <p>A structure that contains information about the start and end times of the launch.</p>
   */
  execution?: LaunchExecution;

  /**
   * @public
   * <p>An array of structures that define the feature variations that are being used in the launch.</p>
   */
  groups?: LaunchGroup[];

  /**
   * @public
   * <p>An array of structures that define the metrics that are being used to monitor the launch performance.</p>
   */
  metricMonitors?: MetricMonitor[];

  /**
   * @public
   * <p>This value is used when Evidently assigns a particular user session to the launch, to help create a randomization ID
   *       to determine which variation the user session is served. This randomization ID is a combination of the entity ID
   *       and <code>randomizationSalt</code>.</p>
   */
  randomizationSalt?: string;

  /**
   * @public
   * <p>The type of launch.</p>
   */
  type: LaunchType | string | undefined;

  /**
   * @public
   * <p>An array of structures that define the traffic allocation percentages among the feature
   *       variations during each step of the launch.</p>
   */
  scheduledSplitsDefinition?: ScheduledSplitsLaunchDefinition;

  /**
   * @public
   * <p>The list of tag keys and values associated with this launch.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateLaunchResponse {
  /**
   * @public
   * <p>A structure that contains the configuration of the launch that was created.</p>
   */
  launch: Launch | undefined;
}

/**
 * @public
 * <p>Use this parameter to configure client-side evaluation for your project. Client-side evaluation allows your application to assign
 *       variations to user
 *       sessions locally instead of by calling the <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html">EvaluateFeature</a> operation to assign the
 *       variations. This mitigates the latency and availability risks that come with an API call.</p>
 *          <p>
 *             <code>ProjectAppConfigResource</code> is a structure that defines the configuration of how your application
 *       integrates with AppConfig to run client-side evaluation.</p>
 */
export interface ProjectAppConfigResourceConfig {
  /**
   * @public
   * <p>The ID of the AppConfig application to use for client-side evaluation. </p>
   */
  applicationId?: string;

  /**
   * @public
   * <p>The ID of the AppConfig environment to use for client-side evaluation. This must be an
   *       environment that is within the application that you specify for <code>applicationId</code>.</p>
   */
  environmentId?: string;
}

/**
 * @public
 * <p>If the project stores evaluation events in an Amazon S3 bucket, this structure
 *        stores the bucket name and bucket prefix.</p>
 */
export interface S3DestinationConfig {
  /**
   * @public
   * <p>The name of the bucket in which Evidently stores evaluation events.</p>
   */
  bucket?: string;

  /**
   * @public
   * <p>The bucket prefix in which Evidently stores evaluation events.</p>
   */
  prefix?: string;
}

/**
 * @public
 * <p>A structure that contains information about where Evidently is to store
 *        evaluation events for longer term storage.</p>
 */
export interface ProjectDataDeliveryConfig {
  /**
   * @public
   * <p>If the project stores evaluation events in an Amazon S3 bucket, this structure
   *        stores the bucket name and bucket prefix.</p>
   */
  s3Destination?: S3DestinationConfig;

  /**
   * @public
   * <p>If the project stores evaluation events in CloudWatch Logs, this structure
   *        stores the log group name.</p>
   */
  cloudWatchLogs?: CloudWatchLogsDestinationConfig;
}

/**
 * @public
 */
export interface CreateProjectRequest {
  /**
   * @public
   * <p>The name for the project.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>An optional description of the project.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A structure that contains information about where Evidently is to store
   *       evaluation events for longer term storage, if you choose to do so. If you choose
   *       not to store these events, Evidently deletes them after using them to produce metrics and other experiment
   *       results that you can view.</p>
   */
  dataDelivery?: ProjectDataDeliveryConfig;

  /**
   * @public
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
   */
  appConfigResource?: ProjectAppConfigResourceConfig;

  /**
   * @public
   * <p>Assigns one or more tags (key-value pairs) to the project.</p>
   *          <p>Tags can help you organize and categorize your resources. You can also use them to scope user
   *        permissions by granting a user
   *        permission to access or change only resources with certain tag values.</p>
   *          <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p>
   *          <p>You can associate as many as 50 tags with a project.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>This is a structure that defines the configuration of how your application
 *       integrates with AppConfig to run client-side evaluation.</p>
 */
export interface ProjectAppConfigResource {
  /**
   * @public
   * <p>The ID of the AppConfig application to use for client-side evaluation. </p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The ID of the AppConfig environment to use for client-side evaluation. This must be an
   *     environment that is within the application that you specify for <code>applicationId</code>.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>The ID of the AppConfig profile to use for client-side evaluation. </p>
   */
  configurationProfileId: string | undefined;
}

/**
 * @public
 * <p>If the project stores evaluation events in an Amazon S3 bucket, this structure
 *        stores the bucket name and bucket prefix.</p>
 */
export interface S3Destination {
  /**
   * @public
   * <p>The name of the bucket in which Evidently stores evaluation events.</p>
   */
  bucket?: string;

  /**
   * @public
   * <p>The bucket prefix in which Evidently stores evaluation events.</p>
   */
  prefix?: string;
}

/**
 * @public
 * <p>A structure that contains information about where Evidently is to store
 *        evaluation events for longer term storage.</p>
 */
export interface ProjectDataDelivery {
  /**
   * @public
   * <p>If the project stores evaluation events in an Amazon S3 bucket, this structure
   *        stores the bucket name and bucket prefix.</p>
   */
  s3Destination?: S3Destination;

  /**
   * @public
   * <p>If the project stores evaluation events in CloudWatch Logs, this structure
   *       stores the log group name.</p>
   */
  cloudWatchLogs?: CloudWatchLogsDestination;
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
 * @public
 * <p>This structure defines a project, which is the logical object in Evidently that can contain features, launches, and
 *       experiments. Use projects to group similar features together.</p>
 */
export interface Project {
  /**
   * @public
   * <p>The name or ARN of the project.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The name of the project.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The current state of the project.</p>
   */
  status: ProjectStatus | string | undefined;

  /**
   * @public
   * <p>The user-entered description of the project.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The date and time that the project is created.</p>
   */
  createdTime: Date | undefined;

  /**
   * @public
   * <p>The date and time that the project was most recently updated.</p>
   */
  lastUpdatedTime: Date | undefined;

  /**
   * @public
   * <p>The number of features currently in the project.</p>
   */
  featureCount?: number;

  /**
   * @public
   * <p>The number of launches currently in the project. This includes all launches that have been created
   *        and not deleted, whether they are ongoing or not.</p>
   */
  launchCount?: number;

  /**
   * @public
   * <p>The number of ongoing launches currently in the project.</p>
   */
  activeLaunchCount?: number;

  /**
   * @public
   * <p>The number of experiments currently in the project. This includes all experiments that have been created
   *       and not deleted, whether they are ongoing or not.</p>
   */
  experimentCount?: number;

  /**
   * @public
   * <p>The number of ongoing experiments currently in the project.</p>
   */
  activeExperimentCount?: number;

  /**
   * @public
   * <p>A structure that contains information about where Evidently is to store
   *        evaluation events for longer term storage.</p>
   */
  dataDelivery?: ProjectDataDelivery;

  /**
   * @public
   * <p>This structure defines the configuration of how your application
   *       integrates with AppConfig to run client-side evaluation.</p>
   */
  appConfigResource?: ProjectAppConfigResource;

  /**
   * @public
   * <p>The list of tag keys and values associated with this project.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateProjectResponse {
  /**
   * @public
   * <p>A structure that contains information about the created project.</p>
   */
  project: Project | undefined;
}

/**
 * @public
 */
export interface CreateSegmentRequest {
  /**
   * @public
   * <p>A name for the segment.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The pattern to use for the segment. For more information about pattern syntax,
   *       see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html#CloudWatch-Evidently-segments-syntax.html">
   *         Segment rule pattern syntax</a>.</p>
   */
  pattern: __LazyJsonString | string | undefined;

  /**
   * @public
   * <p>An optional description for this segment.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Assigns one or more tags (key-value pairs) to the segment.</p>
   *          <p>Tags can help you organize and categorize your resources. You can also use them to scope user
   *       permissions by granting a user
   *       permission to access or change only resources with certain tag values.</p>
   *          <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p>
   *          <p>You can associate as many as 50 tags with a segment.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>This structure contains information about one audience <i>segment</i>. You can use segments
 *     in your experiments and launches to narrow the user sessions used for experiment or launch to only the user
 *     sessions that match one or more criteria.</p>
 */
export interface Segment {
  /**
   * @public
   * <p>The ARN of the segment.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The name of the segment.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The pattern that defines the attributes to use to evalute whether a user session will be in the segment.
   *     For more information about the pattern syntax, see
   *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html">Segment rule pattern syntax</a>.</p>
   */
  pattern: __LazyJsonString | string | undefined;

  /**
   * @public
   * <p>The date and time that this segment was created.</p>
   */
  createdTime: Date | undefined;

  /**
   * @public
   * <p>The date and time that this segment was most recently updated.</p>
   */
  lastUpdatedTime: Date | undefined;

  /**
   * @public
   * <p>The customer-created description for this segment.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The number of experiments that this segment is used in. This count includes all current experiments, not just
   *     those that are currently running.</p>
   */
  experimentCount?: number;

  /**
   * @public
   * <p>The number of launches that this segment is used in. This count includes all current launches, not just
   *       those that are currently running.</p>
   */
  launchCount?: number;

  /**
   * @public
   * <p>The list of tag keys and values associated with this launch.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateSegmentResponse {
  /**
   * @public
   * <p>A structure that contains the complete information about the segment that was just created.</p>
   */
  segment: Segment | undefined;
}

/**
 * @public
 */
export interface DeleteExperimentRequest {
  /**
   * @public
   * <p>The name or ARN of the project that contains the experiment to delete.</p>
   */
  project: string | undefined;

  /**
   * @public
   * <p>The name of the experiment to delete.</p>
   */
  experiment: string | undefined;
}

/**
 * @public
 */
export interface DeleteExperimentResponse {}

/**
 * @public
 * <p>Unexpected error while processing the request. Retry the request.</p>
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
 * @public
 * <p>The service was unavailable. Retry the request.</p>
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
   * @public
   * <p>The name or ARN of the project that contains the feature to delete.</p>
   */
  project: string | undefined;

  /**
   * @public
   * <p>The name of the feature to delete.</p>
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
   * @public
   * <p>The name or ARN of the project that contains the launch to delete.</p>
   */
  project: string | undefined;

  /**
   * @public
   * <p>The name of the launch to delete.</p>
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
   * @public
   * <p>The name or ARN of the project to delete.</p>
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
   * @public
   * <p>Specifies the segment to delete.</p>
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
   * @public
   * <p>The name or ARN of the project that contains this feature.</p>
   */
  project: string | undefined;

  /**
   * @public
   * <p>The name of the feature being evaluated.</p>
   */
  feature: string | undefined;

  /**
   * @public
   * <p>An internal ID that represents a unique user of the application. This
   *         <code>entityID</code> is checked against any override rules assigned for this
   *       feature.</p>
   */
  entityId: string | undefined;

  /**
   * @public
   * <p>A JSON object of attributes that you can optionally pass in as part of the evaluation event
   *       sent to Evidently from the user session. Evidently can use
   *       this value to match user sessions with defined audience segments. For more information, see
   *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html">Use segments to focus your
   *         audience</a>.</p>
   *          <p>If you include this parameter, the value must be a JSON object. A JSON array is not supported.</p>
   */
  evaluationContext?: __LazyJsonString | string;
}

/**
 * @public
 */
export interface EvaluateFeatureResponse {
  /**
   * @public
   * <p>The name of the variation that was served to the user session.</p>
   */
  variation?: string;

  /**
   * @public
   * <p>The value assigned to this variation to differentiate it from the other variations of this feature.</p>
   */
  value?: VariableValue;

  /**
   * @public
   * <p>Specifies the reason that the user session was assigned this variation. Possible values
   *       include <code>DEFAULT</code>, meaning the user was served the default variation;
   *         <code>LAUNCH_RULE_MATCH</code>, if the user session was enrolled in a launch;
   *         <code>EXPERIMENT_RULE_MATCH</code>, if the user session was enrolled in an experiment; or
   *         <code>ENTITY_OVERRIDES_MATCH</code>, if the user's <code>entityId</code> matches an override
   *       rule.</p>
   */
  reason?: string;

  /**
   * @public
   * <p>If this user was assigned to a launch or experiment, this field lists the launch or experiment name.</p>
   */
  details?: __LazyJsonString | string;
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
 * @public
 * <p>A structure that contains the information about one evaluation event or custom event sent to Evidently.
 *         This is a JSON payload. If this event specifies a pre-defined event type, the payload must follow the
 *         defined event schema.</p>
 */
export interface Event {
  /**
   * @public
   * <p>The timestamp of the event.</p>
   */
  timestamp: Date | undefined;

  /**
   * @public
   * <p>
   *             <code>aws.evidently.evaluation</code> specifies an evaluation event, which determines
   *       which feature variation that a user sees. <code>aws.evidently.custom</code> specifies a custom
   *       event, which generates metrics from user actions such as clicks and checkouts.</p>
   */
  type: EventType | string | undefined;

  /**
   * @public
   * <p>The event data.</p>
   */
  data: __LazyJsonString | string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource that you want to see the tags of.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The list of tag keys and values associated with the resource you specified.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetExperimentRequest {
  /**
   * @public
   * <p>The name or ARN of the project that contains the experiment.</p>
   */
  project: string | undefined;

  /**
   * @public
   * <p>The name of the experiment that you want to see the details of.</p>
   */
  experiment: string | undefined;
}

/**
 * @public
 */
export interface GetExperimentResponse {
  /**
   * @public
   * <p>A structure containing the configuration details of the experiment.</p>
   */
  experiment?: Experiment;
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
   * @public
   * <p>The name or ARN of the project that contains the experiment that you want to see the results of.</p>
   */
  project: string | undefined;

  /**
   * @public
   * <p>The name of the experiment to retrieve the results of.</p>
   */
  experiment: string | undefined;

  /**
   * @public
   * <p>The date and time that the experiment started.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>The date and time that the experiment ended, if it is completed. This must be no longer than 30 days
   *       after the experiment start time.</p>
   */
  endTime?: Date;

  /**
   * @public
   * <p>The names of the experiment metrics that you want to see the results of.</p>
   */
  metricNames: string[] | undefined;

  /**
   * @public
   * <p>The names of the experiment treatments that you want to see the results for.</p>
   */
  treatmentNames: string[] | undefined;

  /**
   * @public
   * <p>The statistic used to calculate experiment results. Currently the only valid value is <code>mean</code>,
   *       which uses the mean of the collected values as the statistic.</p>
   */
  baseStat?: ExperimentBaseStat | string;

  /**
   * @public
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
   */
  resultStats?: (ExperimentResultRequestType | string)[];

  /**
   * @public
   * <p>The names of the report types that you want to see. Currently, <code>BayesianInference</code>
   *        is the only valid value.</p>
   */
  reportNames?: (ExperimentReportName | string)[];

  /**
   * @public
   * <p>In seconds, the amount of time to aggregate results together. </p>
   */
  period?: number;
}

/**
 * @public
 * <p>A structure that contains results of an experiment.</p>
 */
export interface ExperimentReport {
  /**
   * @public
   * <p>The name of the metric that is analyzed in this experiment report.</p>
   */
  metricName?: string;

  /**
   * @public
   * <p>The name of the variation that this report pertains to.</p>
   */
  treatmentName?: string;

  /**
   * @public
   * <p>The type of analysis used for this report.</p>
   */
  reportName?: ExperimentReportName | string;

  /**
   * @public
   * <p>The content of the report.</p>
   */
  content?: __LazyJsonString | string;
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
 * @public
 * <p>A structure that contains experiment results for one metric that is monitored in
 *       the experiment.</p>
 */
export interface ExperimentResultsData {
  /**
   * @public
   * <p>The name of the metric.</p>
   */
  metricName?: string;

  /**
   * @public
   * <p>The treatment, or variation, that returned the <code>values</code> in this structure.</p>
   */
  treatmentName?: string;

  /**
   * @public
   * <p>The experiment statistic that these results pertain to.</p>
   */
  resultStat?: ExperimentResultResponseType | string;

  /**
   * @public
   * <p>The values for the <code>metricName</code> that were recorded in the experiment.</p>
   */
  values?: number[];
}

/**
 * @public
 */
export interface GetExperimentResultsResponse {
  /**
   * @public
   * <p>An array of structures that include experiment results including metric names and values. </p>
   */
  resultsData?: ExperimentResultsData[];

  /**
   * @public
   * <p>An array of structures that include the reports that you requested.</p>
   */
  reports?: ExperimentReport[];

  /**
   * @public
   * <p>The timestamps of each result returned.</p>
   */
  timestamps?: Date[];

  /**
   * @public
   * <p>If the experiment doesn't yet have enough events to provide valid results, this
   *       field is returned with the message <code>Not enough events to generate results</code>. If there are
   *       enough events to provide valid results, this field is not returned.</p>
   */
  details?: string;
}

/**
 * @public
 */
export interface ListExperimentsRequest {
  /**
   * @public
   * <p>The name or ARN of the project to return the experiment list from.</p>
   */
  project: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to include in the response.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token to use when requesting the next set of results. You received this token from a previous
   *        <code>ListExperiments</code> operation.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Use this optional parameter to limit the returned results to only the experiments with the status that you specify here.</p>
   */
  status?: ExperimentStatus | string;
}

/**
 * @public
 */
export interface ListExperimentsResponse {
  /**
   * @public
   * <p>An array of structures that contain the configuration details of the experiments in the
   *       specified project.</p>
   */
  experiments?: Experiment[];

  /**
   * @public
   * <p>The token to use in a subsequent <code>ListExperiments</code> operation to return
   *        the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface StartExperimentRequest {
  /**
   * @public
   * <p>The name or ARN of the project that contains the experiment to start.</p>
   */
  project: string | undefined;

  /**
   * @public
   * <p>The name of the experiment to start.</p>
   */
  experiment: string | undefined;

  /**
   * @public
   * <p>The date and time to end the experiment. This must be no more than 30 days after
   *       the experiment starts.</p>
   */
  analysisCompleteTime: Date | undefined;
}

/**
 * @public
 */
export interface StartExperimentResponse {
  /**
   * @public
   * <p>A timestamp that indicates when the experiment started.</p>
   */
  startedTime?: Date;
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
   * @public
   * <p>The name or ARN of the project that contains the experiment to stop.</p>
   */
  project: string | undefined;

  /**
   * @public
   * <p>The name of the experiment to stop.</p>
   */
  experiment: string | undefined;

  /**
   * @public
   * <p>Specify whether the experiment is to be considered <code>COMPLETED</code> or
   *       <code>CANCELLED</code> after it stops.</p>
   */
  desiredState?: ExperimentStopDesiredState | string;

  /**
   * @public
   * <p>A string that describes why you are stopping the experiment.</p>
   */
  reason?: string;
}

/**
 * @public
 */
export interface StopExperimentResponse {
  /**
   * @public
   * <p>The date and time that the experiment stopped.</p>
   */
  endedTime?: Date;
}

/**
 * @public
 */
export interface UpdateExperimentRequest {
  /**
   * @public
   * <p>The name or ARN of the project that contains the experiment that you want to update.</p>
   */
  project: string | undefined;

  /**
   * @public
   * <p>The name of the experiment to update.</p>
   */
  experiment: string | undefined;

  /**
   * @public
   * <p>An optional description of the experiment.</p>
   */
  description?: string;

  /**
   * @public
   * <p>An array of structures that define the variations being tested in the experiment.</p>
   */
  treatments?: TreatmentConfig[];

  /**
   * @public
   * <p>An array of structures that defines the metrics used for the experiment, and whether a higher
   *       or lower value for each metric is the goal.</p>
   */
  metricGoals?: MetricGoalConfig[];

  /**
   * @public
   * <p>When Evidently assigns a particular user session to an experiment, it must use a randomization ID
   *       to determine which variation the user session is served. This randomization ID is a combination of the entity ID
   *       and <code>randomizationSalt</code>. If you omit <code>randomizationSalt</code>, Evidently uses
   *       the experiment name as the <code>randomizationSalt</code>.</p>
   */
  randomizationSalt?: string;

  /**
   * @public
   * <p>The portion of the available audience that you want to allocate to this experiment, in thousandths of a percent. The available audience
   *       is the total audience minus the audience that you have allocated to overrides or current launches of
   *       this feature.</p>
   *          <p>This is represented in thousandths of a percent. For example, specify 20,000 to allocate 20% of the available audience.</p>
   */
  samplingRate?: number;

  /**
   * @public
   * <p>Adds an audience <i>segment</i> to an experiment. When a segment is used in an experiment, only
   *       user sessions that match the segment pattern are used in the experiment. You can't use this parameter if the
   *       experiment is currently
   *       running.</p>
   */
  segment?: string;

  /**
   * @public
   * <p>Removes a segment from being used in an experiment. You can't use this parameter if the experiment is currently
   *       running.</p>
   */
  removeSegment?: boolean;

  /**
   * @public
   * <p>A structure that contains the configuration of which variation o use as the "control"
   *       version. The "control" version is used for comparison with other variations. This structure
   *       also specifies how much experiment traffic is allocated to each variation.</p>
   */
  onlineAbConfig?: OnlineAbConfig;
}

/**
 * @public
 */
export interface UpdateExperimentResponse {
  /**
   * @public
   * <p>A structure containing the configuration details of the experiment
   *     that was updated.</p>
   */
  experiment: Experiment | undefined;
}

/**
 * @public
 */
export interface GetFeatureRequest {
  /**
   * @public
   * <p>The name or ARN of the project that contains the feature.</p>
   */
  project: string | undefined;

  /**
   * @public
   * <p>The name of the feature that you want to retrieve information for.</p>
   */
  feature: string | undefined;
}

/**
 * @public
 */
export interface GetFeatureResponse {
  /**
   * @public
   * <p>A structure containing the configuration details of the feature.</p>
   */
  feature: Feature | undefined;
}

/**
 * @public
 */
export interface ListFeaturesRequest {
  /**
   * @public
   * <p>The name or ARN of the project to return the feature list from.</p>
   */
  project: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to include in the response.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token to use when requesting the next set of results. You received this token from a previous
   *        <code>ListFeatures</code> operation.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>This structure contains information about one Evidently feature in your account.</p>
 */
export interface FeatureSummary {
  /**
   * @public
   * <p>The ARN of the feature.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The name of the feature.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The name or ARN of the project that contains the feature.</p>
   */
  project?: string;

  /**
   * @public
   * <p>The current state of the feature.</p>
   */
  status: FeatureStatus | string | undefined;

  /**
   * @public
   * <p>The date and time that the feature is created.</p>
   */
  createdTime: Date | undefined;

  /**
   * @public
   * <p>The date and time that the feature was most recently updated.</p>
   */
  lastUpdatedTime: Date | undefined;

  /**
   * @public
   * <p>If this value is <code>ALL_RULES</code>, the traffic allocation specified by
   *       any ongoing launches or experiments is being used. If this is <code>DEFAULT_VARIATION</code>,
   *       the default variation is being served to all users.</p>
   */
  evaluationStrategy: FeatureEvaluationStrategy | string | undefined;

  /**
   * @public
   * <p>An array of structures that define</p>
   */
  evaluationRules?: EvaluationRule[];

  /**
   * @public
   * <p>The name of the variation that is used as the default variation. The default
   *       variation is served to users who are not allocated to any ongoing launches
   *       or experiments of this feature.</p>
   */
  defaultVariation?: string;

  /**
   * @public
   * <p>The list of tag keys and values associated with this feature.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListFeaturesResponse {
  /**
   * @public
   * <p>An array of structures that contain the configuration details of the features in the
   *        specified project.</p>
   */
  features?: FeatureSummary[];

  /**
   * @public
   * <p>The token to use in a subsequent <code>ListFeatures</code> operation to return
   *        the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateFeatureRequest {
  /**
   * @public
   * <p>The name or ARN of the project that contains the feature to be updated.</p>
   */
  project: string | undefined;

  /**
   * @public
   * <p>The name of the feature to be updated.</p>
   */
  feature: string | undefined;

  /**
   * @public
   * <p>Specify <code>ALL_RULES</code> to activate the traffic allocation specified by any ongoing
   *       launches or experiments. Specify <code>DEFAULT_VARIATION</code> to serve the default variation
   *       to all users instead.</p>
   */
  evaluationStrategy?: FeatureEvaluationStrategy | string;

  /**
   * @public
   * <p>An optional description of the feature.</p>
   */
  description?: string;

  /**
   * @public
   * <p>To update variation configurations for this feature, or add new ones, specify this structure.
   *       In this array, include any variations that you want to add or update. If the array includes a variation name that
   *       already exists for this feature, it is updated. If it includes a new variation name, it is added
   *       as a new variation.</p>
   */
  addOrUpdateVariations?: VariationConfig[];

  /**
   * @public
   * <p>Removes a variation from the feature. If the variation you specify doesn't exist, then this
   *     makes no change and does not report an error.</p>
   *          <p>This operation fails if you try to remove a variation that is part of an
   *     ongoing launch or experiment.</p>
   */
  removeVariations?: string[];

  /**
   * @public
   * <p>The name of the variation to use as the default variation. The default
   *       variation is served to users who are not allocated to any ongoing launches
   *       or experiments of this feature.</p>
   */
  defaultVariation?: string;

  /**
   * @public
   * <p>Specified users that should always be served a specific variation of a feature. Each user
   *       is specified by a key-value pair . For each key, specify a user by entering their user ID,
   *       account ID, or some other identifier. For the value, specify the name of the variation that
   *       they are to be served.</p>
   *          <p>This parameter is limited to 2500 overrides or a total of 40KB. The 40KB limit includes an overhead of 6 bytes
   *       per override.</p>
   */
  entityOverrides?: Record<string, string>;
}

/**
 * @public
 */
export interface UpdateFeatureResponse {
  /**
   * @public
   * <p>A structure that contains information about the updated feature.</p>
   */
  feature: Feature | undefined;
}

/**
 * @public
 */
export interface GetProjectRequest {
  /**
   * @public
   * <p>The name or ARN of the project that you want to see the details of.</p>
   */
  project: string | undefined;
}

/**
 * @public
 */
export interface GetProjectResponse {
  /**
   * @public
   * <p>A structure containing the configuration details of the project.</p>
   */
  project: Project | undefined;
}

/**
 * @public
 */
export interface GetLaunchRequest {
  /**
   * @public
   * <p>The name or ARN of the project that contains the launch.</p>
   */
  project: string | undefined;

  /**
   * @public
   * <p>The name of the launch that you want to see the details of.</p>
   */
  launch: string | undefined;
}

/**
 * @public
 */
export interface GetLaunchResponse {
  /**
   * @public
   * <p>A structure containing the configuration details of the launch.</p>
   */
  launch?: Launch;
}

/**
 * @public
 */
export interface ListLaunchesRequest {
  /**
   * @public
   * <p>The name or ARN of the project to return the launch list from.</p>
   */
  project: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to include in the response.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token to use when requesting the next set of results. You received this token from a previous
   *        <code>ListLaunches</code> operation.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Use this optional parameter to limit the returned results to only the launches with the status that you specify here.</p>
   */
  status?: LaunchStatus | string;
}

/**
 * @public
 */
export interface ListLaunchesResponse {
  /**
   * @public
   * <p>An array of structures that contain the configuration details of the launches in the
   *        specified project.</p>
   */
  launches?: Launch[];

  /**
   * @public
   * <p>The token to use in a subsequent <code>ListLaunches</code> operation to return
   *        the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface StartLaunchRequest {
  /**
   * @public
   * <p>The name or ARN of the project that contains the launch to start.</p>
   */
  project: string | undefined;

  /**
   * @public
   * <p>The name of the launch to start.</p>
   */
  launch: string | undefined;
}

/**
 * @public
 */
export interface StartLaunchResponse {
  /**
   * @public
   * <p>A structure that contains information about the launch that was started.</p>
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
   * @public
   * <p>The name or ARN of the project that contains the launch that you want to stop.</p>
   */
  project: string | undefined;

  /**
   * @public
   * <p>The name of the launch to stop.</p>
   */
  launch: string | undefined;

  /**
   * @public
   * <p>Specify whether to consider the launch as <code>COMPLETED</code> or
   *         <code>CANCELLED</code> after it stops.</p>
   */
  desiredState?: LaunchStopDesiredState | string;

  /**
   * @public
   * <p>A string that describes why you are stopping the launch.</p>
   */
  reason?: string;
}

/**
 * @public
 */
export interface StopLaunchResponse {
  /**
   * @public
   * <p>The date and time that the launch stopped.</p>
   */
  endedTime?: Date;
}

/**
 * @public
 */
export interface UpdateLaunchRequest {
  /**
   * @public
   * <p>The name or ARN of the project that contains the launch that you want to update.</p>
   */
  project: string | undefined;

  /**
   * @public
   * <p>The name of the launch that is to be updated.</p>
   */
  launch: string | undefined;

  /**
   * @public
   * <p>An optional description for the launch.</p>
   */
  description?: string;

  /**
   * @public
   * <p>An array of structures that contains the feature and variations that are to be used for
   *       the launch.</p>
   */
  groups?: LaunchGroupConfig[];

  /**
   * @public
   * <p>An array of structures that define the metrics that will be used to monitor
   *     the launch performance.</p>
   */
  metricMonitors?: MetricMonitorConfig[];

  /**
   * @public
   * <p>When Evidently assigns a particular user session to a launch, it must use a randomization ID
   *       to determine which variation the user session is served. This randomization ID is a combination of the entity ID
   *       and <code>randomizationSalt</code>. If you omit <code>randomizationSalt</code>, Evidently uses
   *       the launch name as the <code>randomizationSalt</code>.</p>
   */
  randomizationSalt?: string;

  /**
   * @public
   * <p>An array of structures that define the traffic allocation percentages among the feature
   *       variations during each step of the launch.</p>
   */
  scheduledSplitsConfig?: ScheduledSplitsLaunchConfig;
}

/**
 * @public
 */
export interface UpdateLaunchResponse {
  /**
   * @public
   * <p>A structure that contains the new configuration of the launch that was updated.</p>
   */
  launch: Launch | undefined;
}

/**
 * @public
 */
export interface ListProjectsRequest {
  /**
   * @public
   * <p>The maximum number of results to include in the response.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token to use when requesting the next set of results. You received this token from a previous
   *        <code>ListProjects</code> operation.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>A structure that contains configuration information about an Evidently project.</p>
 */
export interface ProjectSummary {
  /**
   * @public
   * <p>The name or ARN of the project.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The name of the project.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The current state of the project.</p>
   */
  status: ProjectStatus | string | undefined;

  /**
   * @public
   * <p>The description of the project.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The date and time that the project is created.</p>
   */
  createdTime: Date | undefined;

  /**
   * @public
   * <p>The date and time that the project was most recently updated.</p>
   */
  lastUpdatedTime: Date | undefined;

  /**
   * @public
   * <p>The number of features currently in the project.</p>
   */
  featureCount?: number;

  /**
   * @public
   * <p>The number of launches currently in the project, including launches that are ongoing, completed, and not started yet.</p>
   */
  launchCount?: number;

  /**
   * @public
   * <p>The number of ongoing launches currently in the project.</p>
   */
  activeLaunchCount?: number;

  /**
   * @public
   * <p>The number of experiments currently in the project.</p>
   */
  experimentCount?: number;

  /**
   * @public
   * <p>The number of experiments currently in the project.</p>
   */
  activeExperimentCount?: number;

  /**
   * @public
   * <p>The list of tag keys and values associated with this project.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListProjectsResponse {
  /**
   * @public
   * <p>An array of structures that contain the configuration details of the projects in the Region.</p>
   */
  projects?: ProjectSummary[];

  /**
   * @public
   * <p>The token to use in a subsequent <code>ListProjects</code> operation to return
   *        the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface PutProjectEventsRequest {
  /**
   * @public
   * <p>The name or ARN of the project to write the events to.</p>
   */
  project: string | undefined;

  /**
   * @public
   * <p>An array of event structures that contain the performance data that is being sent to
   *       Evidently.</p>
   */
  events: Event[] | undefined;
}

/**
 * @public
 * <p>A structure that contains Evidently's response to the sent events, including an event ID and error codes, if any. </p>
 */
export interface PutProjectEventsResultEntry {
  /**
   * @public
   * <p>A unique ID assigned to this <code>PutProjectEvents</code> operation. </p>
   */
  eventId?: string;

  /**
   * @public
   * <p>If the <code>PutProjectEvents</code> operation has an error, the error code is returned
   *       here.</p>
   */
  errorCode?: string;

  /**
   * @public
   * <p>If the <code>PutProjectEvents</code> operation has an error, the error message is
   *       returned here.</p>
   */
  errorMessage?: string;
}

/**
 * @public
 */
export interface PutProjectEventsResponse {
  /**
   * @public
   * <p>The number of events in the operation that could not be used by Evidently.</p>
   */
  failedEventCount?: number;

  /**
   * @public
   * <p>A structure that contains Evidently's response to the sent events, including an event ID and
   *       error codes, if any.</p>
   */
  eventResults?: PutProjectEventsResultEntry[];
}

/**
 * @public
 */
export interface UpdateProjectRequest {
  /**
   * @public
   * <p>The name or ARN of the project to update.</p>
   */
  project: string | undefined;

  /**
   * @public
   * <p>Use this parameter if the project will use client-side evaluation powered by AppConfig. Client-side
   *      evaluation allows your application to assign variations to user
   *      sessions locally instead of by calling the <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html">EvaluateFeature</a> operation. This
   *      mitigates the latency and availability risks that come with an API call. allows
   *       you to</p>
   *          <p>This parameter is a structure that
   *       contains information about the AppConfig application that will be used for client-side evaluation.</p>
   */
  appConfigResource?: ProjectAppConfigResourceConfig;

  /**
   * @public
   * <p>An optional description of the project.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateProjectResponse {
  /**
   * @public
   * <p>A structure containing information about the updated project.</p>
   */
  project: Project | undefined;
}

/**
 * @public
 */
export interface UpdateProjectDataDeliveryRequest {
  /**
   * @public
   * <p>The name or ARN of the project that you want to modify the data storage options for.</p>
   */
  project: string | undefined;

  /**
   * @public
   * <p>A structure containing the S3 bucket name and bucket prefix where you want to store evaluation events.</p>
   */
  s3Destination?: S3DestinationConfig;

  /**
   * @public
   * <p>A structure containing the CloudWatch Logs log group where you want to store evaluation
   *       events.</p>
   */
  cloudWatchLogs?: CloudWatchLogsDestinationConfig;
}

/**
 * @public
 */
export interface UpdateProjectDataDeliveryResponse {
  /**
   * @public
   * <p>A structure containing details about the project that you updated.</p>
   */
  project: Project | undefined;
}

/**
 * @public
 */
export interface GetSegmentRequest {
  /**
   * @public
   * <p>The ARN of the segment to return information for.</p>
   */
  segment: string | undefined;
}

/**
 * @public
 */
export interface GetSegmentResponse {
  /**
   * @public
   * <p>A structure that contains the complete information about the segment.</p>
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
   * @public
   * <p>The ARN of the segment that you want to view information for.</p>
   */
  segment: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to include in the response. If you omit this, the default of 50 is used.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token to use when requesting the next set of results. You received this token from a previous
   *       <code>ListSegmentReferences</code> operation.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Specifies whether to return information about launches or experiments that use this segment.</p>
   */
  type: SegmentReferenceResourceType | string | undefined;
}

/**
 * @public
 * <p>A structure that contains information about one experiment or launch that
 *       uses the specified segment.  </p>
 */
export interface RefResource {
  /**
   * @public
   * <p>The name of the experiment or launch.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Specifies whether the resource that this structure contains information about is an experiment or a launch.</p>
   */
  type: string | undefined;

  /**
   * @public
   * <p>The ARN of the experiment or launch.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The status of the experiment or launch.</p>
   */
  status?: string;

  /**
   * @public
   * <p>The day and time that this experiment or launch started.</p>
   */
  startTime?: string;

  /**
   * @public
   * <p>The day and time that this experiment or launch ended.</p>
   */
  endTime?: string;

  /**
   * @public
   * <p>The day and time that this experiment or launch was most recently updated.</p>
   */
  lastUpdatedOn?: string;
}

/**
 * @public
 */
export interface ListSegmentReferencesResponse {
  /**
   * @public
   * <p>An array of structures, where each structure contains information about one experiment or launch that
   *       uses this segment.  </p>
   */
  referencedBy?: RefResource[];

  /**
   * @public
   * <p>The token to use in a subsequent <code>ListSegmentReferences</code> operation to return
   *       the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSegmentsRequest {
  /**
   * @public
   * <p>The maximum number of results to include in the response. If you omit this, the default of 50 is used.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token to use when requesting the next set of results. You received this token from a previous
   *       <code>ListSegments</code> operation.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSegmentsResponse {
  /**
   * @public
   * <p>An array of structures that contain information about the segments in this Region.</p>
   */
  segments?: Segment[];

  /**
   * @public
   * <p>The token to use in a subsequent <code>ListSegments</code> operation to return
   *       the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the CloudWatch Evidently resource that you're adding tags to.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The list of key-value pairs to associate with the resource.</p>
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
   * @public
   * <p>The pattern to test.</p>
   */
  pattern: __LazyJsonString | string | undefined;

  /**
   * @public
   * <p>A sample <code>evaluationContext</code> JSON block to test against the specified pattern.</p>
   */
  payload: __LazyJsonString | string | undefined;
}

/**
 * @public
 */
export interface TestSegmentPatternResponse {
  /**
   * @public
   * <p>Returns <code>true</code> if the pattern matches the payload.</p>
   */
  match: boolean | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The ARN of the CloudWatch Evidently resource that you're removing tags from.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The list of tag keys to remove from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
