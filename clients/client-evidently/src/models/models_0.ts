// smithy-typescript generated code
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
} from "@aws-sdk/smithy-client";

import { EvidentlyServiceException as __BaseException } from "./EvidentlyServiceException";

/**
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
 * <p>This structure assigns a feature variation to one user session.</p>
 */
export interface EvaluationRequest {
  /**
   * <p>The name of the feature being evaluated.</p>
   */
  feature: string | undefined;

  /**
   * <p>An internal ID that represents a unique user session of the application. This
   *         <code>entityID</code> is checked against any override rules assigned for this
   *       feature.</p>
   */
  entityId: string | undefined;

  /**
   * <p>A JSON block of attributes that you can optionally pass in. This JSON block is included
   *        in the evaluation events sent to Evidently from the user session. </p>
   */
  evaluationContext?: __LazyJsonString | string;
}

export interface BatchEvaluateFeatureRequest {
  /**
   * <p>The name or ARN of the project that contains the feature being evaluated.</p>
   */
  project: string | undefined;

  /**
   * <p>An array of structures, where each structure assigns a feature variation to one user session.</p>
   */
  requests: EvaluationRequest[] | undefined;
}

/**
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

export namespace VariableValue {
  /**
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
 * <p>This structure displays the results of one feature evaluation assignment to one user
 *       session.</p>
 */
export interface EvaluationResult {
  /**
   * <p>The name or ARN of the project that contains the feature being evaluated.</p>
   */
  project?: string;

  /**
   * <p>The name of the feature being evaluated.</p>
   */
  feature: string | undefined;

  /**
   * <p>The name of the variation that was served to the user session.</p>
   */
  variation?: string;

  /**
   * <p>The value assigned to this variation to differentiate it from the other variations of this feature.</p>
   */
  value?: VariableValue;

  /**
   * <p>An internal ID that represents a unique user session of the application.</p>
   */
  entityId: string | undefined;

  /**
   * <p>Specifies the reason that the user session was assigned this variation. Possible values
   *       include <code>DEFAULT</code>, meaning the user was served the default variation;
   *         <code>LAUNCH_RULE_MATCH</code>, if the user session was enrolled in a launch; or
   *         <code>EXPERIMENT_RULE_MATCH</code>, if the user session was enrolled in an
   *       experiment.</p>
   */
  reason?: string;

  /**
   * <p>If this user was assigned to a launch or experiment, this field lists the launch or experiment name.</p>
   */
  details?: __LazyJsonString | string;
}

export interface BatchEvaluateFeatureResponse {
  /**
   * <p>An array of structures, where each structure displays the results of one feature evaluation
   *        assignment to one user session.</p>
   */
  results?: EvaluationResult[];
}

/**
 * <p>The request references a resource that does not exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource that caused the exception.</p>
   */
  resourceId?: string;

  /**
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
 * <p>The request was denied because of request throttling. Retry the request.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the service that is associated with the error.</p>
   */
  serviceCode?: string;

  /**
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
 * <p>A structure containing an error name and message.</p>
 */
export interface ValidationExceptionField {
  /**
   * <p>The error name.</p>
   */
  name: string | undefined;

  /**
   * <p>The error message.</p>
   */
  message: string | undefined;
}

export enum ValidationExceptionReason {
  CANNOT_PARSE = "cannotParse",
  FIELD_VALIDATION_FAILED = "fieldValidationFailed",
  OTHER = "other",
  UNKNOWN_OPERATION = "unknownOperation",
}

/**
 * <p>The value of a parameter in the request caused an error.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>A reason for the error.</p>
   */
  reason?: ValidationExceptionReason | string;

  /**
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

export enum ChangeDirectionEnum {
  DECREASE = "DECREASE",
  INCREASE = "INCREASE",
}

/**
 * <p>A structure containing the CloudWatch Logs log group where the project stores evaluation
 *        events.</p>
 */
export interface CloudWatchLogsDestination {
  /**
   * <p>The name of the log group where the project stores evaluation
   *        events.</p>
   */
  logGroup?: string;
}

/**
 * <p>A structure containing the CloudWatch Logs log group where the project stores evaluation
 *        events.</p>
 */
export interface CloudWatchLogsDestinationConfig {
  /**
   * <p>The name of the log group where the project stores evaluation
   *        events.</p>
   */
  logGroup?: string;
}

/**
 * <p>A resource was in an inconsistent state during an update or a deletion.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource that caused the exception.</p>
   */
  resourceId?: string;

  /**
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
 * <p>This structure defines a metric that you want to use to evaluate the variations
 *        during a launch or experiment.</p>
 */
export interface MetricDefinitionConfig {
  /**
   * <p>A name for the metric.</p>
   */
  name: string | undefined;

  /**
   * <p>The entity, such as a user or session, that does an action that causes a metric
   *        value to be recorded. An example is <code>userDetails.userID</code>.</p>
   */
  entityIdKey: string | undefined;

  /**
   * <p>The value that is tracked to produce the metric.</p>
   */
  valueKey: string | undefined;

  /**
   * <p>The EventBridge event pattern that defines how the metric is recorded.</p>
   *          <p>For more information about EventBridge event patterns, see
   *        <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html">Amazon EventBridge event patterns</a>.</p>
   */
  eventPattern?: __LazyJsonString | string;

  /**
   * <p>A label for the units that the metric is measuring.</p>
   */
  unitLabel?: string;
}

/**
 * <p>Use this structure to tell Evidently whether higher or lower values are desired for a metric that is
 *        used in an experiment.</p>
 */
export interface MetricGoalConfig {
  /**
   * <p>A structure that contains details about the metric.</p>
   */
  metricDefinition: MetricDefinitionConfig | undefined;

  /**
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
 * <p>A structure that contains the configuration of which variation to use as the "control"
 *       version. The "control" version  is used for comparison with other variations. This structure
 *       also specifies how much experiment traffic is allocated to each variation.</p>
 */
export interface OnlineAbConfig {
  /**
   * <p>The name of the variation that is to be the default variation that the other variations are compared to.</p>
   */
  controlTreatmentName?: string;

  /**
   * <p>A set of key-value pairs. The keys are variation names, and the values are the portion
   *       of experiment traffic to be assigned to that variation. Specify the traffic portion in
   *       thousandths of a percent, so 20,000 for a variation would allocate 20% of the experiment
   *       traffic to that variation.</p>
   */
  treatmentWeights?: Record<string, number>;
}

/**
 * <p>A structure that defines one treatment in an experiment. A treatment is a variation of the feature
 *       that you are including in the experiment.</p>
 */
export interface TreatmentConfig {
  /**
   * <p>A name for this treatment.</p>
   */
  name: string | undefined;

  /**
   * <p>A description for this treatment.</p>
   */
  description?: string;

  /**
   * <p>The feature that this experiment is testing.</p>
   */
  feature: string | undefined;

  /**
   * <p>The name of the variation to use as this treatment in the experiment.</p>
   */
  variation: string | undefined;
}

export interface CreateExperimentRequest {
  /**
   * <p>The name or ARN of the project that you want to create the new experiment in.</p>
   */
  project: string | undefined;

  /**
   * <p>A name for the new experiment.</p>
   */
  name: string | undefined;

  /**
   * <p>An optional description of the experiment.</p>
   */
  description?: string;

  /**
   * <p>An array of structures that describe the configuration of each feature variation used in the experiment.</p>
   */
  treatments: TreatmentConfig[] | undefined;

  /**
   * <p>An array of structures that defines the metrics used for the experiment, and whether a higher
   *       or lower value for each metric is the goal.</p>
   */
  metricGoals: MetricGoalConfig[] | undefined;

  /**
   * <p>When Evidently assigns a particular user session to an experiment, it must use a randomization ID
   *        to determine which variation the user session is served. This randomization ID is a combination of the entity ID
   *        and <code>randomizationSalt</code>. If you omit <code>randomizationSalt</code>, Evidently uses
   *        the experiment name as the <code>randomizationSalt</code>.</p>
   */
  randomizationSalt?: string;

  /**
   * <p>The portion of the available audience that you want to allocate to this experiment, in thousandths of a percent. The available audience
   *       is the total audience minus the audience that you have allocated to overrides or current launches of
   *       this feature.</p>
   *          <p>This is represented in thousandths of a percent. For example, specify 10,000 to allocate 10% of the available audience.</p>
   */
  samplingRate?: number;

  /**
   * <p>A structure that contains the configuration of which variation to use as the "control"
   *       version. tThe "control" version is used for comparison with other variations. This structure
   *       also specifies how much experiment traffic is allocated to each variation.</p>
   */
  onlineAbConfig?: OnlineAbConfig;

  /**
   * <p>Specifies an audience <i>segment</i> to use in the experiment. When a segment is used in an experiment, only
   *       user sessions that match the segment pattern are used in the experiment.</p>
   */
  segment?: string;

  /**
   * <p>Assigns one or more tags (key-value pairs) to the experiment.</p>
   *          <p>Tags can help you organize and categorize your resources. You can also use them to scope user
   *        permissions by granting a user
   *        permission to access or change only resources with certain tag values.</p>
   *          <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p>
   *
   *          <p>You can associate as many as 50 tags with an experiment.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>This structure contains the date and time that the experiment started and ended.</p>
 */
export interface ExperimentExecution {
  /**
   * <p>The date and time that the experiment started.</p>
   */
  startedTime?: Date;

  /**
   * <p>The date and time that the experiment ended.</p>
   */
  endedTime?: Date;
}

/**
 * <p>This structure defines a metric that is being used to evaluate the variations
 *       during a launch or experiment.</p>
 */
export interface MetricDefinition {
  /**
   * <p>The name of the metric.</p>
   */
  name?: string;

  /**
   * <p>The entity, such as a user or session, that does an action that causes a metric
   *       value to be recorded.</p>
   */
  entityIdKey?: string;

  /**
   * <p>The value that is tracked to produce the metric.</p>
   */
  valueKey?: string;

  /**
   * <p>The EventBridge event pattern that defines how the metric is recorded.</p>
   *          <p>For more information about EventBridge event patterns, see
   *        <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html">Amazon EventBridge event patterns</a>.</p>
   */
  eventPattern?: __LazyJsonString | string;

  /**
   * <p>The label for the units that the metric is measuring.</p>
   */
  unitLabel?: string;
}

/**
 * <p>A structure that tells Evidently whether higher or lower values are desired for a metric that is
 *        used in an experiment.</p>
 */
export interface MetricGoal {
  /**
   * <p>A structure that contains details about the metric.</p>
   */
  metricDefinition: MetricDefinition | undefined;

  /**
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
 * <p>A structure that contains the configuration of which variation to use as the "control"
 *       version. The "control" version is used for comparison with other variations. This structure
 *       also specifies how much experiment traffic is allocated to each variation.</p>
 */
export interface OnlineAbDefinition {
  /**
   * <p>The name of the variation that is the default variation that the other variations are compared to.</p>
   */
  controlTreatmentName?: string;

  /**
   * <p>A set of key-value pairs.  The keys are variation names, and the values are the portion
   *       of experiment traffic to be assigned to that variation. The traffic portion is specified in
   *       thousandths of a percent, so 20,000 for a variation would allocate 20% of the experiment
   *       traffic to that variation.</p>
   */
  treatmentWeights?: Record<string, number>;
}

/**
 * <p>This structure contains the time and date that Evidently completed the analysis of the experiment.</p>
 */
export interface ExperimentSchedule {
  /**
   * <p>The time and date that Evidently completed the analysis of the experiment.</p>
   */
  analysisCompleteTime?: Date;
}

export enum ExperimentStatus {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  CREATED = "CREATED",
  RUNNING = "RUNNING",
  UPDATING = "UPDATING",
}

/**
 * <p>A structure that defines one treatment in an experiment. A treatment is a variation of the feature
 *        that you are including in the experiment.</p>
 */
export interface Treatment {
  /**
   * <p>The name of this treatment.</p>
   */
  name: string | undefined;

  /**
   * <p>The description of the treatment.</p>
   */
  description?: string;

  /**
   * <p>The feature variation used for this treatment. This is a key-value pair. The key is the
   *       feature name, and the value is the variation name.</p>
   */
  featureVariations?: Record<string, string>;
}

export enum ExperimentType {
  ONLINE_AB_EXPERIMENT = "aws.evidently.onlineab",
}

/**
 * <p>A structure containing the configuration details of an experiment.</p>
 */
export interface Experiment {
  /**
   * <p>The ARN of the experiment.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the experiment.</p>
   */
  name: string | undefined;

  /**
   * <p>The name or ARN of the project that contains this experiment.</p>
   */
  project?: string;

  /**
   * <p>The current state of the experiment.</p>
   */
  status: ExperimentStatus | string | undefined;

  /**
   * <p>If the experiment was stopped, this is the string that was entered by the person who
   *       stopped the experiment, to explain why it was stopped.</p>
   */
  statusReason?: string;

  /**
   * <p>A description of the experiment.</p>
   */
  description?: string;

  /**
   * <p>The date and time that the experiment is first created.</p>
   */
  createdTime: Date | undefined;

  /**
   * <p>The date and time that the experiment was most recently updated.</p>
   */
  lastUpdatedTime: Date | undefined;

  /**
   * <p>A structure that contains the time and date that Evidently completed the analysis of the experiment.</p>
   */
  schedule?: ExperimentSchedule;

  /**
   * <p>A structure that contains the date and time that the experiment started and ended.</p>
   */
  execution?: ExperimentExecution;

  /**
   * <p>An array of structures that describe the configuration of each feature variation used in the experiment.</p>
   */
  treatments?: Treatment[];

  /**
   * <p>An array of structures that defines the metrics used for the experiment, and whether a higher
   *       or lower value for each metric is the goal.</p>
   */
  metricGoals?: MetricGoal[];

  /**
   * <p>This value is used when Evidently assigns a particular user session to the experiment. It
   *       helps create a randomization ID to determine which variation the user session is served. This
   *       randomization ID is a combination of the entity ID and <code>randomizationSalt</code>.</p>
   */
  randomizationSalt?: string;

  /**
   * <p>In thousandths of a percent, the amount of the available audience that is allocated to this experiment.
   *       The available audience
   *       is the total audience minus the audience that you have allocated to overrides or current launches of
   *       this feature.</p>
   *          <p>This is represented in thousandths of a percent, so a value of 10,000 is 10% of the available audience.</p>
   */
  samplingRate?: number;

  /**
   * <p>The audience segment being used for the experiment, if a segment is being used.</p>
   */
  segment?: string;

  /**
   * <p>The type of this experiment. Currently, this value must be <code>aws.experiment.onlineab</code>.</p>
   */
  type: ExperimentType | string | undefined;

  /**
   * <p>A structure that contains the configuration of which variation to use as the "control"
   *       version. The "control" version is used for comparison with other variations. This structure
   *       also specifies how much experiment traffic is allocated to each variation.</p>
   */
  onlineAbDefinition?: OnlineAbDefinition;

  /**
   * <p>The list of tag keys and values associated with this experiment.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateExperimentResponse {
  /**
   * <p>A structure containing the configuration details of the experiment
   *        that you created.</p>
   */
  experiment: Experiment | undefined;
}

/**
 * <p>The request would cause a service quota to be exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource that caused the exception.</p>
   */
  resourceId?: string;

  /**
   * <p>The type of the resource that is associated with the error.</p>
   */
  resourceType?: string;

  /**
   * <p>The ID of the service that is associated with the error.</p>
   */
  serviceCode?: string;

  /**
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

export enum FeatureEvaluationStrategy {
  ALL_RULES = "ALL_RULES",
  DEFAULT_VARIATION = "DEFAULT_VARIATION",
}

/**
 * <p>This structure contains the name and variation value of one variation of a feature.</p>
 */
export interface VariationConfig {
  /**
   * <p>The name of the variation.</p>
   */
  name: string | undefined;

  /**
   * <p>The value assigned to this variation.</p>
   */
  value: VariableValue | undefined;
}

export interface CreateFeatureRequest {
  /**
   * <p>The name or ARN of the project that is to contain the new feature.</p>
   */
  project: string | undefined;

  /**
   * <p>The name for the new feature.</p>
   */
  name: string | undefined;

  /**
   * <p>Specify <code>ALL_RULES</code> to activate the traffic allocation specified by any
   *       ongoing launches or experiments. Specify <code>DEFAULT_VARIATION</code> to serve the default
   *       variation to all users instead.</p>
   */
  evaluationStrategy?: FeatureEvaluationStrategy | string;

  /**
   * <p>An optional description of the feature.</p>
   */
  description?: string;

  /**
   * <p>An array of structures that contain the configuration of the feature's different variations.</p>
   */
  variations: VariationConfig[] | undefined;

  /**
   * <p>The name of the variation to use as the default variation. The default
   *       variation is served to users who are not allocated to any ongoing launches
   *       or experiments of this feature.</p>
   *          <p>This variation must also be listed in the <code>variations</code> structure.</p>
   *          <p>If you omit <code>defaultVariation</code>, the first variation listed in
   *        the <code>variations</code> structure is used as the default variation.</p>
   */
  defaultVariation?: string;

  /**
   * <p>Assigns one or more tags (key-value pairs) to the feature.</p>
   *          <p>Tags can help you organize and categorize your resources. You can also use them to scope user
   *        permissions by granting a user
   *        permission to access or change only resources with certain tag values.</p>
   *          <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p>
   *
   *          <p>You can associate as many as 50 tags with a feature.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Specify users that should always be served a specific variation of a feature. Each user
   *       is specified by a key-value pair . For each key, specify a user by entering their user ID,
   *       account ID, or some other identifier. For the value, specify the name of the variation that
   *       they are to be served.</p>
   */
  entityOverrides?: Record<string, string>;
}

/**
 * <p>A structure that contains the information about an evaluation rule for this feature,
 *       if it is used in a launch or experiment.</p>
 */
export interface EvaluationRule {
  /**
   * <p>The name of the experiment or launch.</p>
   */
  name?: string;

  /**
   * <p>This value is <code>aws.evidently.splits</code> if this is an evaluation rule for a launch, and it is
   *        <code>aws.evidently.onlineab</code> if this is an evaluation rule for an experiment.</p>
   */
  type: string | undefined;
}

export enum FeatureStatus {
  AVAILABLE = "AVAILABLE",
  UPDATING = "UPDATING",
}

export enum VariationValueType {
  BOOLEAN = "BOOLEAN",
  DOUBLE = "DOUBLE",
  LONG = "LONG",
  STRING = "STRING",
}

/**
 * <p>This structure contains the name and variation value of one variation of a feature.</p>
 */
export interface Variation {
  /**
   * <p>The name of the variation.</p>
   */
  name?: string;

  /**
   * <p>The value assigned to this variation.</p>
   */
  value?: VariableValue;
}

/**
 * <p>This structure contains information about one Evidently feature in your account.</p>
 */
export interface Feature {
  /**
   * <p>The ARN of the feature.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the feature.</p>
   */
  name: string | undefined;

  /**
   * <p>The name or ARN of the project that contains the feature.</p>
   */
  project?: string;

  /**
   * <p>The current state of the feature.</p>
   */
  status: FeatureStatus | string | undefined;

  /**
   * <p>The date and time that the feature is created.</p>
   */
  createdTime: Date | undefined;

  /**
   * <p>The date and time that the feature was most recently updated.</p>
   */
  lastUpdatedTime: Date | undefined;

  /**
   * <p>The description of the feature.</p>
   */
  description?: string;

  /**
   * <p>If this value is <code>ALL_RULES</code>, the traffic allocation specified by
   *       any ongoing launches or experiments is being used. If this is <code>DEFAULT_VARIATION</code>,
   *       the default variation is being served to all users.</p>
   */
  evaluationStrategy: FeatureEvaluationStrategy | string | undefined;

  /**
   * <p>Defines the type of value used to define the different feature variations.
   *       For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-variationtypes.html">Variation types</a>
   *          </p>
   */
  valueType: VariationValueType | string | undefined;

  /**
   * <p>An array of structures that contain the configuration of the feature's different variations.</p>
   */
  variations: Variation[] | undefined;

  /**
   * <p>The name of the variation that is used as the default variation. The default
   *       variation is served to users who are not allocated to any ongoing launches
   *       or experiments of this feature.</p>
   *          <p>This variation must also be listed in the <code>variations</code> structure.</p>
   *          <p>If you omit <code>defaultVariation</code>, the first variation listed in
   *     the <code>variations</code> structure is used as the default variation.</p>
   */
  defaultVariation?: string;

  /**
   * <p>An array of structures that define the evaluation rules for the feature.</p>
   */
  evaluationRules?: EvaluationRule[];

  /**
   * <p>The list of tag keys and values associated with this feature.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>A set of key-value pairs  that specify users who should always be served a specific
   *       variation of a feature. Each key specifies a user using their user ID, account ID, or some
   *       other identifier. The value specifies the name of the variation that the user is to be
   *       served.</p>
   *          <p>For the override to be successful, the value of the key must match the <code>entityId</code> used
   *       in the <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html">EvaluateFeature</a> operation.</p>
   */
  entityOverrides?: Record<string, string>;
}

export interface CreateFeatureResponse {
  /**
   * <p>A structure that contains information about the new feature.</p>
   */
  feature?: Feature;
}

/**
 * <p>A structure that defines one launch group in a launch. A launch group is a variation of
 *       the feature that you are including in the launch.</p>
 */
export interface LaunchGroupConfig {
  /**
   * <p>A name for this launch group.</p>
   */
  name: string | undefined;

  /**
   * <p>A description of the launch group.</p>
   */
  description?: string;

  /**
   * <p>The feature that this launch is using.</p>
   */
  feature: string | undefined;

  /**
   * <p>The feature variation to use for this launch group.</p>
   */
  variation: string | undefined;
}

/**
 * <p>A structure that defines a metric to be used to monitor performance of the variations during a launch.</p>
 */
export interface MetricMonitorConfig {
  /**
   * <p>A structure that defines the metric.</p>
   */
  metricDefinition: MetricDefinitionConfig | undefined;
}

/**
 * <p>This structure specifies a segment
 *       that you have already created, and defines the traffic split for that segment to be used in a launch.</p>
 */
export interface SegmentOverride {
  /**
   * <p>The ARN of the segment to use.</p>
   */
  segment: string | undefined;

  /**
   * <p>A number indicating the order to use to evaluate segment overrides, if there are more
   *     than one. Segment overrides with lower numbers are evaluated first.</p>
   */
  evaluationOrder: number | undefined;

  /**
   * <p>The traffic allocation percentages among the feature variations to assign to this
   *       segment. This is a set of key-value pairs.   The keys are variation names. The values represent
   *       the amount of traffic to allocate to that variation for this segment. This is expressed in thousandths of a percent,
   *     so a weight of 50000 represents 50% of traffic.</p>
   */
  weights: Record<string, number> | undefined;
}

/**
 * <p>This structure defines the traffic allocation percentages among the feature
 *        variations during one step of a launch, and the start time of that step.</p>
 */
export interface ScheduledSplitConfig {
  /**
   * <p>The date and time that this step of the launch starts.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>The traffic allocation percentages among the feature variations during one step of a
   *       launch. This is a set of key-value pairs. The keys are variation names. The values represent
   *       the percentage of traffic to allocate to that variation during this step.</p>
   *
   *          <p>The values is expressed in thousandths of a percent,
   *        so assigning a weight of 50000 assigns 50% of traffic to that variation.</p>
   *          <p>If the sum of the weights for all the variations in a segment override does not add up to 100,000,
   *        then the remaining traffic that matches this segment is not assigned by this segment override, and instead moves
   *        on to the next segment override or the default traffic split.</p>
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
   */
  segmentOverrides?: SegmentOverride[];
}

/**
 * <p>An array of structures that define the traffic allocation percentages among the feature
 *       variations during each step of a launch. This also defines the start time of each step.</p>
 */
export interface ScheduledSplitsLaunchConfig {
  /**
   * <p>An array of structures that define the traffic allocation percentages among the feature
   *       variations during each step of the launch. This also defines the start time of each
   *       step.</p>
   */
  steps: ScheduledSplitConfig[] | undefined;
}

export interface CreateLaunchRequest {
  /**
   * <p>The name or ARN of the project that you want to create the launch in.</p>
   */
  project: string | undefined;

  /**
   * <p>The name for the new launch.</p>
   */
  name: string | undefined;

  /**
   * <p>An optional description for the launch.</p>
   */
  description?: string;

  /**
   * <p>An array of structures that define the traffic allocation percentages among the feature
   *       variations during each step of the launch.</p>
   */
  scheduledSplitsConfig?: ScheduledSplitsLaunchConfig;

  /**
   * <p>An array of structures that define the metrics that will be used to monitor
   *        the launch performance.</p>
   */
  metricMonitors?: MetricMonitorConfig[];

  /**
   * <p>An array of structures that contains the feature and variations that are to be used for the launch.</p>
   */
  groups: LaunchGroupConfig[] | undefined;

  /**
   * <p>When Evidently assigns a particular user session to a launch, it must use a randomization ID
   *         to determine which variation the user session is served. This randomization ID is a combination of the entity ID
   *         and <code>randomizationSalt</code>. If you omit <code>randomizationSalt</code>, Evidently uses
   *       the launch name as the <code>randomizationSalt</code>.</p>
   */
  randomizationSalt?: string;

  /**
   * <p>Assigns one or more tags (key-value pairs) to the launch.</p>
   *          <p>Tags can help you organize and categorize your resources. You can also use them to scope user
   *        permissions by granting a user
   *        permission to access or change only resources with certain tag values.</p>
   *          <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p>
   *
   *          <p>You can associate as many as 50 tags with a launch.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>This structure contains information about the start and end times of the launch.</p>
 */
export interface LaunchExecution {
  /**
   * <p>The date and time that the launch started.</p>
   */
  startedTime?: Date;

  /**
   * <p>The date and time that the launch ended.</p>
   */
  endedTime?: Date;
}

/**
 * <p>A structure that defines one launch group in a launch. A launch group is a variation of the feature
 *       that you are including in the launch.</p>
 */
export interface LaunchGroup {
  /**
   * <p>The name of the launch group.</p>
   */
  name: string | undefined;

  /**
   * <p>A description of the launch group.</p>
   */
  description?: string;

  /**
   * <p>The feature variation for this launch group. This is a key-value pair.</p>
   */
  featureVariations: Record<string, string> | undefined;
}

/**
 * <p>A structure that defines a metric to be used to monitor performance of the variations during a launch.</p>
 */
export interface MetricMonitor {
  /**
   * <p>A structure that defines the metric.</p>
   */
  metricDefinition: MetricDefinition | undefined;
}

/**
 * <p>This structure defines the traffic allocation percentages among the feature
 *        variations during one step of a launch, and the start time of that step.</p>
 */
export interface ScheduledSplit {
  /**
   * <p>The date and time that this step of the launch starts.</p>
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
   */
  groupWeights?: Record<string, number>;

  /**
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
 * <p>An array of structures that define the traffic allocation percentages among the feature
 *       variations during each step of a launch. This also defines the start time of each step.</p>
 */
export interface ScheduledSplitsLaunchDefinition {
  /**
   * <p>An array of structures that define the traffic allocation percentages among the feature
   *       variations during each step of the launch. This also defines the start time of each
   *       step.</p>
   */
  steps?: ScheduledSplit[];
}

export enum LaunchStatus {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  CREATED = "CREATED",
  RUNNING = "RUNNING",
  UPDATING = "UPDATING",
}

export enum LaunchType {
  SCHEDULED_SPLITS_LAUNCH = "aws.evidently.splits",
}

/**
 * <p>This structure contains the configuration details of one Evidently launch.</p>
 */
export interface Launch {
  /**
   * <p>The ARN of the launch.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the launch.</p>
   */
  name: string | undefined;

  /**
   * <p>The name or ARN of the project that contains the launch.</p>
   */
  project?: string;

  /**
   * <p>The current state of the launch.</p>
   */
  status: LaunchStatus | string | undefined;

  /**
   * <p>If the launch was stopped, this is the string that was entered by the person who
   *       stopped the launch, to explain why it was stopped.</p>
   */
  statusReason?: string;

  /**
   * <p>The description of the launch.</p>
   */
  description?: string;

  /**
   * <p>The date and time that the launch is created.</p>
   */
  createdTime: Date | undefined;

  /**
   * <p>The date and time that the launch was most recently updated.</p>
   */
  lastUpdatedTime: Date | undefined;

  /**
   * <p>A structure that contains information about the start and end times of the launch.</p>
   */
  execution?: LaunchExecution;

  /**
   * <p>An array of structures that define the feature variations that are being used in the launch.</p>
   */
  groups?: LaunchGroup[];

  /**
   * <p>An array of structures that define the metrics that are being used to monitor the launch performance.</p>
   */
  metricMonitors?: MetricMonitor[];

  /**
   * <p>This value is used when Evidently assigns a particular user session to the launch, to help create a randomization ID
   *       to determine which variation the user session is served. This randomization ID is a combination of the entity ID
   *       and <code>randomizationSalt</code>.</p>
   */
  randomizationSalt?: string;

  /**
   * <p>The type of launch.</p>
   */
  type: LaunchType | string | undefined;

  /**
   * <p>An array of structures that define the traffic allocation percentages among the feature
   *       variations during each step of the launch.</p>
   */
  scheduledSplitsDefinition?: ScheduledSplitsLaunchDefinition;

  /**
   * <p>The list of tag keys and values associated with this launch.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateLaunchResponse {
  /**
   * <p>A structure that contains the configuration of the launch that was created.</p>
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
 */
export interface ProjectAppConfigResourceConfig {
  /**
   * <p>The ID of the AppConfig application to use for client-side evaluation. </p>
   */
  applicationId?: string;

  /**
   * <p>The ID of the AppConfig environment to use for client-side evaluation. This must be an
   *       environment that is within the application that you specify for <code>applicationId</code>.</p>
   */
  environmentId?: string;
}

/**
 * <p>If the project stores evaluation events in an Amazon S3 bucket, this structure
 *        stores the bucket name and bucket prefix.</p>
 */
export interface S3DestinationConfig {
  /**
   * <p>The name of the bucket in which Evidently stores evaluation events.</p>
   */
  bucket?: string;

  /**
   * <p>The bucket prefix in which Evidently stores evaluation events.</p>
   */
  prefix?: string;
}

/**
 * <p>A structure that contains information about where Evidently is to store
 *        evaluation events for longer term storage.</p>
 */
export interface ProjectDataDeliveryConfig {
  /**
   * <p>If the project stores evaluation events in an Amazon S3 bucket, this structure
   *        stores the bucket name and bucket prefix.</p>
   */
  s3Destination?: S3DestinationConfig;

  /**
   * <p>If the project stores evaluation events in CloudWatch Logs, this structure
   *        stores the log group name.</p>
   */
  cloudWatchLogs?: CloudWatchLogsDestinationConfig;
}

export interface CreateProjectRequest {
  /**
   * <p>The name for the project.</p>
   */
  name: string | undefined;

  /**
   * <p>An optional description of the project.</p>
   */
  description?: string;

  /**
   * <p>A structure that contains information about where Evidently is to store
   *       evaluation events for longer term storage, if you choose to do so. If you choose
   *       not to store these events, Evidently deletes them after using them to produce metrics and other experiment
   *       results that you can view.</p>
   */
  dataDelivery?: ProjectDataDeliveryConfig;

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
   */
  appConfigResource?: ProjectAppConfigResourceConfig;

  /**
   * <p>Assigns one or more tags (key-value pairs) to the project.</p>
   *          <p>Tags can help you organize and categorize your resources. You can also use them to scope user
   *        permissions by granting a user
   *        permission to access or change only resources with certain tag values.</p>
   *          <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p>
   *
   *          <p>You can associate as many as 50 tags with a project.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>This is a structure that defines the configuration of how your application
 *       integrates with AppConfig to run client-side evaluation.</p>
 */
export interface ProjectAppConfigResource {
  /**
   * <p>The ID of the AppConfig application to use for client-side evaluation. </p>
   */
  applicationId: string | undefined;

  /**
   * <p>The ID of the AppConfig environment to use for client-side evaluation. This must be an
   *     environment that is within the application that you specify for <code>applicationId</code>.</p>
   */
  environmentId: string | undefined;

  /**
   * <p>The ID of the AppConfig profile to use for client-side evaluation. </p>
   */
  configurationProfileId: string | undefined;
}

/**
 * <p>If the project stores evaluation events in an Amazon S3 bucket, this structure
 *        stores the bucket name and bucket prefix.</p>
 */
export interface S3Destination {
  /**
   * <p>The name of the bucket in which Evidently stores evaluation events.</p>
   */
  bucket?: string;

  /**
   * <p>The bucket prefix in which Evidently stores evaluation events.</p>
   */
  prefix?: string;
}

/**
 * <p>A structure that contains information about where Evidently is to store
 *        evaluation events for longer term storage.</p>
 */
export interface ProjectDataDelivery {
  /**
   * <p>If the project stores evaluation events in an Amazon S3 bucket, this structure
   *        stores the bucket name and bucket prefix.</p>
   */
  s3Destination?: S3Destination;

  /**
   * <p>If the project stores evaluation events in CloudWatch Logs, this structure
   *       stores the log group name.</p>
   */
  cloudWatchLogs?: CloudWatchLogsDestination;
}

export enum ProjectStatus {
  AVAILABLE = "AVAILABLE",
  UPDATING = "UPDATING",
}

/**
 * <p>This structure defines a project, which is the logical object in Evidently that can contain features, launches, and
 *       experiments. Use projects to group similar features together.</p>
 */
export interface Project {
  /**
   * <p>The name or ARN of the project.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the project.</p>
   */
  name: string | undefined;

  /**
   * <p>The current state of the project.</p>
   */
  status: ProjectStatus | string | undefined;

  /**
   * <p>The user-entered description of the project.</p>
   */
  description?: string;

  /**
   * <p>The date and time that the project is created.</p>
   */
  createdTime: Date | undefined;

  /**
   * <p>The date and time that the project was most recently updated.</p>
   */
  lastUpdatedTime: Date | undefined;

  /**
   * <p>The number of features currently in the project.</p>
   */
  featureCount?: number;

  /**
   * <p>The number of launches currently in the project. This includes all launches that have been created
   *        and not deleted, whether they are ongoing or not.</p>
   */
  launchCount?: number;

  /**
   * <p>The number of ongoing launches currently in the project.</p>
   */
  activeLaunchCount?: number;

  /**
   * <p>The number of experiments currently in the project. This includes all experiments that have been created
   *       and not deleted, whether they are ongoing or not.</p>
   */
  experimentCount?: number;

  /**
   * <p>The number of ongoing experiments currently in the project.</p>
   */
  activeExperimentCount?: number;

  /**
   * <p>A structure that contains information about where Evidently is to store
   *        evaluation events for longer term storage.</p>
   */
  dataDelivery?: ProjectDataDelivery;

  /**
   * <p>This structure defines the configuration of how your application
   *       integrates with AppConfig to run client-side evaluation.</p>
   */
  appConfigResource?: ProjectAppConfigResource;

  /**
   * <p>The list of tag keys and values associated with this project.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateProjectResponse {
  /**
   * <p>A structure that contains information about the created project.</p>
   */
  project: Project | undefined;
}

export interface CreateSegmentRequest {
  /**
   * <p>A name for the segment.</p>
   */
  name: string | undefined;

  /**
   * <p>The pattern to use for the segment. For more information about pattern syntax,
   *       see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html#CloudWatch-Evidently-segments-syntax.html">
   *         Segment rule pattern syntax</a>.</p>
   */
  pattern: __LazyJsonString | string | undefined;

  /**
   * <p>An optional description for this segment.</p>
   */
  description?: string;

  /**
   * <p>Assigns one or more tags (key-value pairs) to the segment.</p>
   *          <p>Tags can help you organize and categorize your resources. You can also use them to scope user
   *       permissions by granting a user
   *       permission to access or change only resources with certain tag values.</p>
   *          <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p>
   *
   *          <p>You can associate as many as 50 tags with a segment.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>This structure contains information about one audience <i>segment</i>. You can use segments
 *     in your experiments and launches to narrow the user sessions used for experiment or launch to only the user
 *     sessions that match one or more criteria.</p>
 */
export interface Segment {
  /**
   * <p>The ARN of the segment.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the segment.</p>
   */
  name: string | undefined;

  /**
   * <p>The pattern that defines the attributes to use to evalute whether a user session will be in the segment.
   *     For more information about the pattern syntax, see
   *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html">Segment rule pattern syntax</a>.</p>
   */
  pattern: __LazyJsonString | string | undefined;

  /**
   * <p>The date and time that this segment was created.</p>
   */
  createdTime: Date | undefined;

  /**
   * <p>The date and time that this segment was most recently updated.</p>
   */
  lastUpdatedTime: Date | undefined;

  /**
   * <p>The customer-created description for this segment.</p>
   */
  description?: string;

  /**
   * <p>The number of experiments that this segment is used in. This count includes all current experiments, not just
   *     those that are currently running.</p>
   */
  experimentCount?: number;

  /**
   * <p>The number of launches that this segment is used in. This count includes all current launches, not just
   *       those that are currently running.</p>
   */
  launchCount?: number;

  /**
   * <p>The list of tag keys and values associated with this launch.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateSegmentResponse {
  /**
   * <p>A structure that contains the complete information about the segment that was just created.</p>
   */
  segment: Segment | undefined;
}

export interface DeleteExperimentRequest {
  /**
   * <p>The name or ARN of the project that contains the experiment to delete.</p>
   */
  project: string | undefined;

  /**
   * <p>The name of the experiment to delete.</p>
   */
  experiment: string | undefined;
}

export interface DeleteExperimentResponse {}

/**
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

export interface DeleteFeatureRequest {
  /**
   * <p>The name or ARN of the project that contains the feature to delete.</p>
   */
  project: string | undefined;

  /**
   * <p>The name of the feature to delete.</p>
   */
  feature: string | undefined;
}

export interface DeleteFeatureResponse {}

export interface DeleteLaunchRequest {
  /**
   * <p>The name or ARN of the project that contains the launch to delete.</p>
   */
  project: string | undefined;

  /**
   * <p>The name of the launch to delete.</p>
   */
  launch: string | undefined;
}

export interface DeleteLaunchResponse {}

export interface DeleteProjectRequest {
  /**
   * <p>The name or ARN of the project to delete.</p>
   */
  project: string | undefined;
}

export interface DeleteProjectResponse {}

export interface DeleteSegmentRequest {
  /**
   * <p>Specifies the segment to delete.</p>
   */
  segment: string | undefined;
}

export interface DeleteSegmentResponse {}

export interface EvaluateFeatureRequest {
  /**
   * <p>The name or ARN of the project that contains this feature.</p>
   */
  project: string | undefined;

  /**
   * <p>The name of the feature being evaluated.</p>
   */
  feature: string | undefined;

  /**
   * <p>An internal ID that represents a unique user of the application. This
   *         <code>entityID</code> is checked against any override rules assigned for this
   *       feature.</p>
   */
  entityId: string | undefined;

  /**
   * <p>A JSON object of attributes that you can optionally pass in as part of the evaluation event
   *       sent to Evidently from the user session. Evidently can use
   *       this value to match user sessions with defined audience segments. For more information, see
   *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html">Use segments to focus your
   *         audience</a>.</p>
   *
   *          <p>If you include this parameter, the value must be a JSON object. A JSON array is not supported.</p>
   */
  evaluationContext?: __LazyJsonString | string;
}

export interface EvaluateFeatureResponse {
  /**
   * <p>The name of the variation that was served to the user session.</p>
   */
  variation?: string;

  /**
   * <p>The value assigned to this variation to differentiate it from the other variations of this feature.</p>
   */
  value?: VariableValue;

  /**
   * <p>Specifies the reason that the user session was assigned this variation. Possible values
   *       include <code>DEFAULT</code>, meaning the user was served the default variation;
   *         <code>LAUNCH_RULE_MATCH</code>, if the user session was enrolled in a launch;
   *         <code>EXPERIMENT_RULE_MATCH</code>, if the user session was enrolled in an experiment; or
   *         <code>ENTITY_OVERRIDES_MATCH</code>, if the user's <code>entityId</code> matches an override
   *       rule.</p>
   */
  reason?: string;

  /**
   * <p>If this user was assigned to a launch or experiment, this field lists the launch or experiment name.</p>
   */
  details?: __LazyJsonString | string;
}

export enum EventType {
  CUSTOM = "aws.evidently.custom",
  EVALUATION = "aws.evidently.evaluation",
}

/**
 * <p>A structure that contains the information about one evaluation event or custom event sent to Evidently.
 *         This is a JSON payload. If this event specifies a pre-defined event type, the payload must follow the
 *         defined event schema.</p>
 */
export interface Event {
  /**
   * <p>The timestamp of the event.</p>
   */
  timestamp: Date | undefined;

  /**
   * <p>
   *             <code>aws.evidently.evaluation</code> specifies an evaluation event, which determines
   *       which feature variation that a user sees. <code>aws.evidently.custom</code> specifies a custom
   *       event, which generates metrics from user actions such as clicks and checkouts.</p>
   */
  type: EventType | string | undefined;

  /**
   * <p>The event data.</p>
   */
  data: __LazyJsonString | string | undefined;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource that you want to see the tags of.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tag keys and values associated with the resource you specified.</p>
   */
  tags?: Record<string, string>;
}

export interface GetExperimentRequest {
  /**
   * <p>The name or ARN of the project that contains the experiment.</p>
   */
  project: string | undefined;

  /**
   * <p>The name of the experiment that you want to see the details of.</p>
   */
  experiment: string | undefined;
}

export interface GetExperimentResponse {
  /**
   * <p>A structure containing the configuration details of the experiment.</p>
   */
  experiment?: Experiment;
}

export enum ExperimentBaseStat {
  MEAN = "Mean",
}

export enum ExperimentReportName {
  BAYESIAN_INFERENCE = "BayesianInference",
}

export enum ExperimentResultRequestType {
  BASE_STAT = "BaseStat",
  CONFIDENCE_INTERVAL = "ConfidenceInterval",
  P_VALUE = "PValue",
  TREATMENT_EFFECT = "TreatmentEffect",
}

export interface GetExperimentResultsRequest {
  /**
   * <p>The name or ARN of the project that contains the experiment that you want to see the results of.</p>
   */
  project: string | undefined;

  /**
   * <p>The name of the experiment to retrieve the results of.</p>
   */
  experiment: string | undefined;

  /**
   * <p>The date and time that the experiment started.</p>
   */
  startTime?: Date;

  /**
   * <p>The date and time that the experiment ended, if it is completed. This must be no longer than 30 days
   *       after the experiment start time.</p>
   */
  endTime?: Date;

  /**
   * <p>The names of the experiment metrics that you want to see the results of.</p>
   */
  metricNames: string[] | undefined;

  /**
   * <p>The names of the experiment treatments that you want to see the results for.</p>
   */
  treatmentNames: string[] | undefined;

  /**
   * <p>The statistic used to calculate experiment results. Currently the only valid value is <code>mean</code>,
   *       which uses the mean of the collected values as the statistic.</p>
   */
  baseStat?: ExperimentBaseStat | string;

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
   */
  resultStats?: (ExperimentResultRequestType | string)[];

  /**
   * <p>The names of the report types that you want to see. Currently, <code>BayesianInference</code>
   *        is the only valid value.</p>
   */
  reportNames?: (ExperimentReportName | string)[];

  /**
   * <p>In seconds, the amount of time to aggregate results together. </p>
   */
  period?: number;
}

/**
 * <p>A structure that contains results of an experiment.</p>
 */
export interface ExperimentReport {
  /**
   * <p>The name of the metric that is analyzed in this experiment report.</p>
   */
  metricName?: string;

  /**
   * <p>The name of the variation that this report pertains to.</p>
   */
  treatmentName?: string;

  /**
   * <p>The type of analysis used for this report.</p>
   */
  reportName?: ExperimentReportName | string;

  /**
   * <p>The content of the report.</p>
   */
  content?: __LazyJsonString | string;
}

export enum ExperimentResultResponseType {
  CONFIDENCE_INTERVAL_LOWERBOUND = "ConfidenceIntervalLowerBound",
  CONFIDENCE_INTERVAL_UPPERBOUND = "ConfidenceIntervalUpperBound",
  MEAN = "Mean",
  P_VALUE = "PValue",
  TREATMENT_EFFECT = "TreatmentEffect",
}

/**
 * <p>A structure that contains experiment results for one metric that is monitored in
 *       the experiment.</p>
 */
export interface ExperimentResultsData {
  /**
   * <p>The name of the metric.</p>
   */
  metricName?: string;

  /**
   * <p>The treatment, or variation, that returned the <code>values</code> in this structure.</p>
   */
  treatmentName?: string;

  /**
   * <p>The experiment statistic that these results pertain to.</p>
   */
  resultStat?: ExperimentResultResponseType | string;

  /**
   * <p>The values for the <code>metricName</code> that were recorded in the experiment.</p>
   */
  values?: number[];
}

export interface GetExperimentResultsResponse {
  /**
   * <p>An array of structures that include experiment results including metric names and values. </p>
   */
  resultsData?: ExperimentResultsData[];

  /**
   * <p>An array of structures that include the reports that you requested.</p>
   */
  reports?: ExperimentReport[];

  /**
   * <p>The timestamps of each result returned.</p>
   */
  timestamps?: Date[];

  /**
   * <p>If the experiment doesn't yet have enough events to provide valid results, this
   *       field is returned with the message <code>Not enough events to generate results</code>. If there are
   *       enough events to provide valid results, this field is not returned.</p>
   */
  details?: string;
}

export interface ListExperimentsRequest {
  /**
   * <p>The name or ARN of the project to return the experiment list from.</p>
   */
  project: string | undefined;

  /**
   * <p>The maximum number of results to include in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to use when requesting the next set of results. You received this token from a previous
   *        <code>ListExperiments</code> operation.</p>
   */
  nextToken?: string;

  /**
   * <p>Use this optional parameter to limit the returned results to only the experiments with the status that you specify here.</p>
   */
  status?: ExperimentStatus | string;
}

export interface ListExperimentsResponse {
  /**
   * <p>An array of structures that contain the configuration details of the experiments in the
   *       specified project.</p>
   */
  experiments?: Experiment[];

  /**
   * <p>The token to use in a subsequent <code>ListExperiments</code> operation to return
   *        the next set of results.</p>
   */
  nextToken?: string;
}

export interface StartExperimentRequest {
  /**
   * <p>The name or ARN of the project that contains the experiment to start.</p>
   */
  project: string | undefined;

  /**
   * <p>The name of the experiment to start.</p>
   */
  experiment: string | undefined;

  /**
   * <p>The date and time to end the experiment. This must be no more than 30 days after
   *       the experiment starts.</p>
   */
  analysisCompleteTime: Date | undefined;
}

export interface StartExperimentResponse {
  /**
   * <p>A timestamp that indicates when the experiment started.</p>
   */
  startedTime?: Date;
}

export enum ExperimentStopDesiredState {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
}

export interface StopExperimentRequest {
  /**
   * <p>The name or ARN of the project that contains the experiment to stop.</p>
   */
  project: string | undefined;

  /**
   * <p>The name of the experiment to stop.</p>
   */
  experiment: string | undefined;

  /**
   * <p>Specify whether the experiment is to be considered <code>COMPLETED</code> or
   *       <code>CANCELLED</code> after it stops.</p>
   */
  desiredState?: ExperimentStopDesiredState | string;

  /**
   * <p>A string that describes why you are stopping the experiment.</p>
   */
  reason?: string;
}

export interface StopExperimentResponse {
  /**
   * <p>The date and time that the experiment stopped.</p>
   */
  endedTime?: Date;
}

export interface UpdateExperimentRequest {
  /**
   * <p>The name or ARN of the project that contains the experiment that you want to update.</p>
   */
  project: string | undefined;

  /**
   * <p>The name of the experiment to update.</p>
   */
  experiment: string | undefined;

  /**
   * <p>An optional description of the experiment.</p>
   */
  description?: string;

  /**
   * <p>An array of structures that define the variations being tested in the experiment.</p>
   */
  treatments?: TreatmentConfig[];

  /**
   * <p>An array of structures that defines the metrics used for the experiment, and whether a higher
   *       or lower value for each metric is the goal.</p>
   */
  metricGoals?: MetricGoalConfig[];

  /**
   * <p>When Evidently assigns a particular user session to an experiment, it must use a randomization ID
   *       to determine which variation the user session is served. This randomization ID is a combination of the entity ID
   *       and <code>randomizationSalt</code>. If you omit <code>randomizationSalt</code>, Evidently uses
   *       the experiment name as the <code>randomizationSalt</code>.</p>
   */
  randomizationSalt?: string;

  /**
   * <p>The portion of the available audience that you want to allocate to this experiment, in thousandths of a percent. The available audience
   *       is the total audience minus the audience that you have allocated to overrides or current launches of
   *       this feature.</p>
   *          <p>This is represented in thousandths of a percent. For example, specify 20,000 to allocate 20% of the available audience.</p>
   */
  samplingRate?: number;

  /**
   * <p>Adds an audience <i>segment</i> to an experiment. When a segment is used in an experiment, only
   *       user sessions that match the segment pattern are used in the experiment. You can't use this parameter if the
   *       experiment is currently
   *       running.</p>
   */
  segment?: string;

  /**
   * <p>Removes a segment from being used in an experiment. You can't use this parameter if the experiment is currently
   *       running.</p>
   */
  removeSegment?: boolean;

  /**
   * <p>A structure that contains the configuration of which variation o use as the "control"
   *       version. The "control" version is used for comparison with other variations. This structure
   *       also specifies how much experiment traffic is allocated to each variation.</p>
   */
  onlineAbConfig?: OnlineAbConfig;
}

export interface UpdateExperimentResponse {
  /**
   * <p>A structure containing the configuration details of the experiment
   *     that was updated.</p>
   */
  experiment: Experiment | undefined;
}

export interface GetFeatureRequest {
  /**
   * <p>The name or ARN of the project that contains the feature.</p>
   */
  project: string | undefined;

  /**
   * <p>The name of the feature that you want to retrieve information for.</p>
   */
  feature: string | undefined;
}

export interface GetFeatureResponse {
  /**
   * <p>A structure containing the configuration details of the feature.</p>
   */
  feature: Feature | undefined;
}

export interface ListFeaturesRequest {
  /**
   * <p>The name or ARN of the project to return the feature list from.</p>
   */
  project: string | undefined;

  /**
   * <p>The maximum number of results to include in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to use when requesting the next set of results. You received this token from a previous
   *        <code>ListFeatures</code> operation.</p>
   */
  nextToken?: string;
}

/**
 * <p>This structure contains information about one Evidently feature in your account.</p>
 */
export interface FeatureSummary {
  /**
   * <p>The ARN of the feature.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the feature.</p>
   */
  name: string | undefined;

  /**
   * <p>The name or ARN of the project that contains the feature.</p>
   */
  project?: string;

  /**
   * <p>The current state of the feature.</p>
   */
  status: FeatureStatus | string | undefined;

  /**
   * <p>The date and time that the feature is created.</p>
   */
  createdTime: Date | undefined;

  /**
   * <p>The date and time that the feature was most recently updated.</p>
   */
  lastUpdatedTime: Date | undefined;

  /**
   * <p>If this value is <code>ALL_RULES</code>, the traffic allocation specified by
   *       any ongoing launches or experiments is being used. If this is <code>DEFAULT_VARIATION</code>,
   *       the default variation is being served to all users.</p>
   */
  evaluationStrategy: FeatureEvaluationStrategy | string | undefined;

  /**
   * <p>An array of structures that define</p>
   */
  evaluationRules?: EvaluationRule[];

  /**
   * <p>The name of the variation that is used as the default variation. The default
   *       variation is served to users who are not allocated to any ongoing launches
   *       or experiments of this feature.</p>
   */
  defaultVariation?: string;

  /**
   * <p>The list of tag keys and values associated with this feature.</p>
   */
  tags?: Record<string, string>;
}

export interface ListFeaturesResponse {
  /**
   * <p>An array of structures that contain the configuration details of the features in the
   *        specified project.</p>
   */
  features?: FeatureSummary[];

  /**
   * <p>The token to use in a subsequent <code>ListFeatures</code> operation to return
   *        the next set of results.</p>
   */
  nextToken?: string;
}

export interface UpdateFeatureRequest {
  /**
   * <p>The name or ARN of the project that contains the feature to be updated.</p>
   */
  project: string | undefined;

  /**
   * <p>The name of the feature to be updated.</p>
   */
  feature: string | undefined;

  /**
   * <p>Specify <code>ALL_RULES</code> to activate the traffic allocation specified by any ongoing
   *       launches or experiments. Specify <code>DEFAULT_VARIATION</code> to serve the default variation
   *       to all users instead.</p>
   */
  evaluationStrategy?: FeatureEvaluationStrategy | string;

  /**
   * <p>An optional description of the feature.</p>
   */
  description?: string;

  /**
   * <p>To update variation configurations for this feature, or add new ones, specify this structure.
   *       In this array, include any variations that you want to add or update. If the array includes a variation name that
   *       already exists for this feature, it is updated. If it includes a new variation name, it is added
   *       as a new variation.</p>
   */
  addOrUpdateVariations?: VariationConfig[];

  /**
   * <p>Removes a variation from the feature. If the variation you specify doesn't exist, then this
   *     makes no change and does not report an error.</p>
   *          <p>This operation fails if you try to remove a variation that is part of an
   *     ongoing launch or experiment.</p>
   */
  removeVariations?: string[];

  /**
   * <p>The name of the variation to use as the default variation. The default
   *       variation is served to users who are not allocated to any ongoing launches
   *       or experiments of this feature.</p>
   */
  defaultVariation?: string;

  /**
   * <p>Specified users that should always be served a specific variation of a feature. Each user
   *       is specified by a key-value pair . For each key, specify a user by entering their user ID,
   *       account ID, or some other identifier. For the value, specify the name of the variation that
   *       they are to be served.</p>
   */
  entityOverrides?: Record<string, string>;
}

export interface UpdateFeatureResponse {
  /**
   * <p>A structure that contains information about the updated feature.</p>
   */
  feature: Feature | undefined;
}

export interface GetProjectRequest {
  /**
   * <p>The name or ARN of the project that you want to see the details of.</p>
   */
  project: string | undefined;
}

export interface GetProjectResponse {
  /**
   * <p>A structure containing the configuration details of the project.</p>
   */
  project: Project | undefined;
}

export interface GetLaunchRequest {
  /**
   * <p>The name or ARN of the project that contains the launch.</p>
   */
  project: string | undefined;

  /**
   * <p>The name of the launch that you want to see the details of.</p>
   */
  launch: string | undefined;
}

export interface GetLaunchResponse {
  /**
   * <p>A structure containing the configuration details of the launch.</p>
   */
  launch?: Launch;
}

export interface ListLaunchesRequest {
  /**
   * <p>The name or ARN of the project to return the launch list from.</p>
   */
  project: string | undefined;

  /**
   * <p>The maximum number of results to include in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to use when requesting the next set of results. You received this token from a previous
   *        <code>ListLaunches</code> operation.</p>
   */
  nextToken?: string;

  /**
   * <p>Use this optional parameter to limit the returned results to only the launches with the status that you specify here.</p>
   */
  status?: LaunchStatus | string;
}

export interface ListLaunchesResponse {
  /**
   * <p>An array of structures that contain the configuration details of the launches in the
   *        specified project.</p>
   */
  launches?: Launch[];

  /**
   * <p>The token to use in a subsequent <code>ListLaunches</code> operation to return
   *        the next set of results.</p>
   */
  nextToken?: string;
}

export interface StartLaunchRequest {
  /**
   * <p>The name or ARN of the project that contains the launch to start.</p>
   */
  project: string | undefined;

  /**
   * <p>The name of the launch to start.</p>
   */
  launch: string | undefined;
}

export interface StartLaunchResponse {
  /**
   * <p>A structure that contains information about the launch that was started.</p>
   */
  launch: Launch | undefined;
}

export enum LaunchStopDesiredState {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
}

export interface StopLaunchRequest {
  /**
   * <p>The name or ARN of the project that contains the launch that you want to stop.</p>
   */
  project: string | undefined;

  /**
   * <p>The name of the launch to stop.</p>
   */
  launch: string | undefined;

  /**
   * <p>Specify whether to consider the launch as <code>COMPLETED</code> or
   *         <code>CANCELLED</code> after it stops.</p>
   */
  desiredState?: LaunchStopDesiredState | string;

  /**
   * <p>A string that describes why you are stopping the launch.</p>
   */
  reason?: string;
}

export interface StopLaunchResponse {
  /**
   * <p>The date and time that the launch stopped.</p>
   */
  endedTime?: Date;
}

export interface UpdateLaunchRequest {
  /**
   * <p>The name or ARN of the project that contains the launch that you want to update.</p>
   */
  project: string | undefined;

  /**
   * <p>The name of the launch that is to be updated.</p>
   */
  launch: string | undefined;

  /**
   * <p>An optional description for the launch.</p>
   */
  description?: string;

  /**
   * <p>An array of structures that contains the feature and variations that are to be used for
   *       the launch.</p>
   */
  groups?: LaunchGroupConfig[];

  /**
   * <p>An array of structures that define the metrics that will be used to monitor
   *     the launch performance.</p>
   */
  metricMonitors?: MetricMonitorConfig[];

  /**
   * <p>When Evidently assigns a particular user session to a launch, it must use a randomization ID
   *       to determine which variation the user session is served. This randomization ID is a combination of the entity ID
   *       and <code>randomizationSalt</code>. If you omit <code>randomizationSalt</code>, Evidently uses
   *       the launch name as the <code>randomizationSalt</code>.</p>
   */
  randomizationSalt?: string;

  /**
   * <p>An array of structures that define the traffic allocation percentages among the feature
   *       variations during each step of the launch.</p>
   */
  scheduledSplitsConfig?: ScheduledSplitsLaunchConfig;
}

export interface UpdateLaunchResponse {
  /**
   * <p>A structure that contains the new configuration of the launch that was updated.</p>
   */
  launch: Launch | undefined;
}

export interface ListProjectsRequest {
  /**
   * <p>The maximum number of results to include in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to use when requesting the next set of results. You received this token from a previous
   *        <code>ListProjects</code> operation.</p>
   */
  nextToken?: string;
}

/**
 * <p>A structure that contains configuration information about an Evidently project.</p>
 */
export interface ProjectSummary {
  /**
   * <p>The name or ARN of the project.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the project.</p>
   */
  name: string | undefined;

  /**
   * <p>The current state of the project.</p>
   */
  status: ProjectStatus | string | undefined;

  /**
   * <p>The description of the project.</p>
   */
  description?: string;

  /**
   * <p>The date and time that the project is created.</p>
   */
  createdTime: Date | undefined;

  /**
   * <p>The date and time that the project was most recently updated.</p>
   */
  lastUpdatedTime: Date | undefined;

  /**
   * <p>The number of features currently in the project.</p>
   */
  featureCount?: number;

  /**
   * <p>The number of launches currently in the project, including launches that are ongoing, completed, and not started yet.</p>
   */
  launchCount?: number;

  /**
   * <p>The number of ongoing launches currently in the project.</p>
   */
  activeLaunchCount?: number;

  /**
   * <p>The number of experiments currently in the project.</p>
   */
  experimentCount?: number;

  /**
   * <p>The number of experiments currently in the project.</p>
   */
  activeExperimentCount?: number;

  /**
   * <p>The list of tag keys and values associated with this project.</p>
   */
  tags?: Record<string, string>;
}

export interface ListProjectsResponse {
  /**
   * <p>An array of structures that contain the configuration details of the projects in the Region.</p>
   */
  projects?: ProjectSummary[];

  /**
   * <p>The token to use in a subsequent <code>ListProjects</code> operation to return
   *        the next set of results.</p>
   */
  nextToken?: string;
}

export interface PutProjectEventsRequest {
  /**
   * <p>The name or ARN of the project to write the events to.</p>
   */
  project: string | undefined;

  /**
   * <p>An array of event structures that contain the performance data that is being sent to
   *       Evidently.</p>
   */
  events: Event[] | undefined;
}

/**
 * <p>A structure that contains Evidently's response to the sent events, including an event ID and error codes, if any. </p>
 */
export interface PutProjectEventsResultEntry {
  /**
   * <p>A unique ID assigned to this <code>PutProjectEvents</code> operation. </p>
   */
  eventId?: string;

  /**
   * <p>If the <code>PutProjectEvents</code> operation has an error, the error code is returned
   *       here.</p>
   */
  errorCode?: string;

  /**
   * <p>If the <code>PutProjectEvents</code> operation has an error, the error message is
   *       returned here.</p>
   */
  errorMessage?: string;
}

export interface PutProjectEventsResponse {
  /**
   * <p>The number of events in the operation that could not be used by Evidently.</p>
   */
  failedEventCount?: number;

  /**
   * <p>A structure that contains Evidently's response to the sent events, including an event ID and
   *       error codes, if any.</p>
   */
  eventResults?: PutProjectEventsResultEntry[];
}

export interface UpdateProjectRequest {
  /**
   * <p>The name or ARN of the project to update.</p>
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
   */
  appConfigResource?: ProjectAppConfigResourceConfig;

  /**
   * <p>An optional description of the project.</p>
   */
  description?: string;
}

export interface UpdateProjectResponse {
  /**
   * <p>A structure containing information about the updated project.</p>
   */
  project: Project | undefined;
}

export interface UpdateProjectDataDeliveryRequest {
  /**
   * <p>The name or ARN of the project that you want to modify the data storage options for.</p>
   */
  project: string | undefined;

  /**
   * <p>A structure containing the S3 bucket name and bucket prefix where you want to store evaluation events.</p>
   */
  s3Destination?: S3DestinationConfig;

  /**
   * <p>A structure containing the CloudWatch Logs log group where you want to store evaluation
   *       events.</p>
   */
  cloudWatchLogs?: CloudWatchLogsDestinationConfig;
}

export interface UpdateProjectDataDeliveryResponse {
  /**
   * <p>A structure containing details about the project that you updated.</p>
   */
  project: Project | undefined;
}

export interface GetSegmentRequest {
  /**
   * <p>The ARN of the segment to return information for.</p>
   */
  segment: string | undefined;
}

export interface GetSegmentResponse {
  /**
   * <p>A structure that contains the complete information about the segment.</p>
   */
  segment: Segment | undefined;
}

export enum SegmentReferenceResourceType {
  EXPERIMENT = "EXPERIMENT",
  LAUNCH = "LAUNCH",
}

export interface ListSegmentReferencesRequest {
  /**
   * <p>The ARN of the segment that you want to view information for.</p>
   */
  segment: string | undefined;

  /**
   * <p>The maximum number of results to include in the response. If you omit this, the default of 50 is used.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to use when requesting the next set of results. You received this token from a previous
   *       <code>ListSegmentReferences</code> operation.</p>
   */
  nextToken?: string;

  /**
   * <p>Specifies whether to return information about launches or experiments that use this segment.</p>
   */
  type: SegmentReferenceResourceType | string | undefined;
}

/**
 * <p>A structure that contains information about one experiment or launch that
 *       uses the specified segment.  </p>
 */
export interface RefResource {
  /**
   * <p>The name of the experiment or launch.</p>
   */
  name: string | undefined;

  /**
   * <p>Specifies whether the resource that this structure contains information about is an experiment or a launch.</p>
   */
  type: string | undefined;

  /**
   * <p>The ARN of the experiment or launch.</p>
   */
  arn?: string;

  /**
   * <p>The status of the experiment or launch.</p>
   */
  status?: string;

  /**
   * <p>The day and time that this experiment or launch started.</p>
   */
  startTime?: string;

  /**
   * <p>The day and time that this experiment or launch ended.</p>
   */
  endTime?: string;

  /**
   * <p>The day and time that this experiment or launch was most recently updated.</p>
   */
  lastUpdatedOn?: string;
}

export interface ListSegmentReferencesResponse {
  /**
   * <p>An array of structures, where each structure contains information about one experiment or launch that
   *       uses this segment.  </p>
   */
  referencedBy?: RefResource[];

  /**
   * <p>The token to use in a subsequent <code>ListSegmentReferences</code> operation to return
   *       the next set of results.</p>
   */
  nextToken?: string;
}

export interface ListSegmentsRequest {
  /**
   * <p>The maximum number of results to include in the response. If you omit this, the default of 50 is used.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to use when requesting the next set of results. You received this token from a previous
   *       <code>ListSegments</code> operation.</p>
   */
  nextToken?: string;
}

export interface ListSegmentsResponse {
  /**
   * <p>An array of structures that contain information about the segments in this Region.</p>
   */
  segments?: Segment[];

  /**
   * <p>The token to use in a subsequent <code>ListSegments</code> operation to return
   *       the next set of results.</p>
   */
  nextToken?: string;
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the CloudWatch Evidently resource that you're adding tags to.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of key-value pairs to associate with the resource.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface TestSegmentPatternRequest {
  /**
   * <p>The pattern to test.</p>
   */
  pattern: __LazyJsonString | string | undefined;

  /**
   * <p>A sample <code>evaluationContext</code> JSON block to test against the specified pattern.</p>
   */
  payload: __LazyJsonString | string | undefined;
}

export interface TestSegmentPatternResponse {
  /**
   * <p>Returns <code>true</code> if the pattern matches the payload.</p>
   */
  match: boolean | undefined;
}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the CloudWatch Evidently resource that you're removing tags from.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of tag keys to remove from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

/**
 * @internal
 */
export const EvaluationRequestFilterSensitiveLog = (obj: EvaluationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchEvaluateFeatureRequestFilterSensitiveLog = (obj: BatchEvaluateFeatureRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VariableValueFilterSensitiveLog = (obj: VariableValue): any => {
  if (obj.boolValue !== undefined) return { boolValue: obj.boolValue };
  if (obj.stringValue !== undefined) return { stringValue: obj.stringValue };
  if (obj.longValue !== undefined) return { longValue: obj.longValue };
  if (obj.doubleValue !== undefined) return { doubleValue: obj.doubleValue };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const EvaluationResultFilterSensitiveLog = (obj: EvaluationResult): any => ({
  ...obj,
  ...(obj.value && { value: VariableValueFilterSensitiveLog(obj.value) }),
});

/**
 * @internal
 */
export const BatchEvaluateFeatureResponseFilterSensitiveLog = (obj: BatchEvaluateFeatureResponse): any => ({
  ...obj,
  ...(obj.results && { results: obj.results.map((item) => EvaluationResultFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ValidationExceptionFieldFilterSensitiveLog = (obj: ValidationExceptionField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudWatchLogsDestinationFilterSensitiveLog = (obj: CloudWatchLogsDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudWatchLogsDestinationConfigFilterSensitiveLog = (obj: CloudWatchLogsDestinationConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricDefinitionConfigFilterSensitiveLog = (obj: MetricDefinitionConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricGoalConfigFilterSensitiveLog = (obj: MetricGoalConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OnlineAbConfigFilterSensitiveLog = (obj: OnlineAbConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TreatmentConfigFilterSensitiveLog = (obj: TreatmentConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateExperimentRequestFilterSensitiveLog = (obj: CreateExperimentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentExecutionFilterSensitiveLog = (obj: ExperimentExecution): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricDefinitionFilterSensitiveLog = (obj: MetricDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricGoalFilterSensitiveLog = (obj: MetricGoal): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OnlineAbDefinitionFilterSensitiveLog = (obj: OnlineAbDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentScheduleFilterSensitiveLog = (obj: ExperimentSchedule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TreatmentFilterSensitiveLog = (obj: Treatment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentFilterSensitiveLog = (obj: Experiment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateExperimentResponseFilterSensitiveLog = (obj: CreateExperimentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VariationConfigFilterSensitiveLog = (obj: VariationConfig): any => ({
  ...obj,
  ...(obj.value && { value: VariableValueFilterSensitiveLog(obj.value) }),
});

/**
 * @internal
 */
export const CreateFeatureRequestFilterSensitiveLog = (obj: CreateFeatureRequest): any => ({
  ...obj,
  ...(obj.variations && { variations: obj.variations.map((item) => VariationConfigFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const EvaluationRuleFilterSensitiveLog = (obj: EvaluationRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VariationFilterSensitiveLog = (obj: Variation): any => ({
  ...obj,
  ...(obj.value && { value: VariableValueFilterSensitiveLog(obj.value) }),
});

/**
 * @internal
 */
export const FeatureFilterSensitiveLog = (obj: Feature): any => ({
  ...obj,
  ...(obj.variations && { variations: obj.variations.map((item) => VariationFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateFeatureResponseFilterSensitiveLog = (obj: CreateFeatureResponse): any => ({
  ...obj,
  ...(obj.feature && { feature: FeatureFilterSensitiveLog(obj.feature) }),
});

/**
 * @internal
 */
export const LaunchGroupConfigFilterSensitiveLog = (obj: LaunchGroupConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricMonitorConfigFilterSensitiveLog = (obj: MetricMonitorConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SegmentOverrideFilterSensitiveLog = (obj: SegmentOverride): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduledSplitConfigFilterSensitiveLog = (obj: ScheduledSplitConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduledSplitsLaunchConfigFilterSensitiveLog = (obj: ScheduledSplitsLaunchConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLaunchRequestFilterSensitiveLog = (obj: CreateLaunchRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchExecutionFilterSensitiveLog = (obj: LaunchExecution): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchGroupFilterSensitiveLog = (obj: LaunchGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricMonitorFilterSensitiveLog = (obj: MetricMonitor): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduledSplitFilterSensitiveLog = (obj: ScheduledSplit): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduledSplitsLaunchDefinitionFilterSensitiveLog = (obj: ScheduledSplitsLaunchDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchFilterSensitiveLog = (obj: Launch): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLaunchResponseFilterSensitiveLog = (obj: CreateLaunchResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProjectAppConfigResourceConfigFilterSensitiveLog = (obj: ProjectAppConfigResourceConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3DestinationConfigFilterSensitiveLog = (obj: S3DestinationConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProjectDataDeliveryConfigFilterSensitiveLog = (obj: ProjectDataDeliveryConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProjectRequestFilterSensitiveLog = (obj: CreateProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProjectAppConfigResourceFilterSensitiveLog = (obj: ProjectAppConfigResource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3DestinationFilterSensitiveLog = (obj: S3Destination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProjectDataDeliveryFilterSensitiveLog = (obj: ProjectDataDelivery): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProjectFilterSensitiveLog = (obj: Project): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProjectResponseFilterSensitiveLog = (obj: CreateProjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSegmentRequestFilterSensitiveLog = (obj: CreateSegmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SegmentFilterSensitiveLog = (obj: Segment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSegmentResponseFilterSensitiveLog = (obj: CreateSegmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteExperimentRequestFilterSensitiveLog = (obj: DeleteExperimentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteExperimentResponseFilterSensitiveLog = (obj: DeleteExperimentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFeatureRequestFilterSensitiveLog = (obj: DeleteFeatureRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFeatureResponseFilterSensitiveLog = (obj: DeleteFeatureResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLaunchRequestFilterSensitiveLog = (obj: DeleteLaunchRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLaunchResponseFilterSensitiveLog = (obj: DeleteLaunchResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProjectRequestFilterSensitiveLog = (obj: DeleteProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProjectResponseFilterSensitiveLog = (obj: DeleteProjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSegmentRequestFilterSensitiveLog = (obj: DeleteSegmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSegmentResponseFilterSensitiveLog = (obj: DeleteSegmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EvaluateFeatureRequestFilterSensitiveLog = (obj: EvaluateFeatureRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EvaluateFeatureResponseFilterSensitiveLog = (obj: EvaluateFeatureResponse): any => ({
  ...obj,
  ...(obj.value && { value: VariableValueFilterSensitiveLog(obj.value) }),
});

/**
 * @internal
 */
export const EventFilterSensitiveLog = (obj: Event): any => ({
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
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetExperimentRequestFilterSensitiveLog = (obj: GetExperimentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetExperimentResponseFilterSensitiveLog = (obj: GetExperimentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetExperimentResultsRequestFilterSensitiveLog = (obj: GetExperimentResultsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentReportFilterSensitiveLog = (obj: ExperimentReport): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentResultsDataFilterSensitiveLog = (obj: ExperimentResultsData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetExperimentResultsResponseFilterSensitiveLog = (obj: GetExperimentResultsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListExperimentsRequestFilterSensitiveLog = (obj: ListExperimentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListExperimentsResponseFilterSensitiveLog = (obj: ListExperimentsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartExperimentRequestFilterSensitiveLog = (obj: StartExperimentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartExperimentResponseFilterSensitiveLog = (obj: StartExperimentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopExperimentRequestFilterSensitiveLog = (obj: StopExperimentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopExperimentResponseFilterSensitiveLog = (obj: StopExperimentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateExperimentRequestFilterSensitiveLog = (obj: UpdateExperimentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateExperimentResponseFilterSensitiveLog = (obj: UpdateExperimentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFeatureRequestFilterSensitiveLog = (obj: GetFeatureRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFeatureResponseFilterSensitiveLog = (obj: GetFeatureResponse): any => ({
  ...obj,
  ...(obj.feature && { feature: FeatureFilterSensitiveLog(obj.feature) }),
});

/**
 * @internal
 */
export const ListFeaturesRequestFilterSensitiveLog = (obj: ListFeaturesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FeatureSummaryFilterSensitiveLog = (obj: FeatureSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFeaturesResponseFilterSensitiveLog = (obj: ListFeaturesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFeatureRequestFilterSensitiveLog = (obj: UpdateFeatureRequest): any => ({
  ...obj,
  ...(obj.addOrUpdateVariations && {
    addOrUpdateVariations: obj.addOrUpdateVariations.map((item) => VariationConfigFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdateFeatureResponseFilterSensitiveLog = (obj: UpdateFeatureResponse): any => ({
  ...obj,
  ...(obj.feature && { feature: FeatureFilterSensitiveLog(obj.feature) }),
});

/**
 * @internal
 */
export const GetProjectRequestFilterSensitiveLog = (obj: GetProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetProjectResponseFilterSensitiveLog = (obj: GetProjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLaunchRequestFilterSensitiveLog = (obj: GetLaunchRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLaunchResponseFilterSensitiveLog = (obj: GetLaunchResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLaunchesRequestFilterSensitiveLog = (obj: ListLaunchesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLaunchesResponseFilterSensitiveLog = (obj: ListLaunchesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartLaunchRequestFilterSensitiveLog = (obj: StartLaunchRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartLaunchResponseFilterSensitiveLog = (obj: StartLaunchResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopLaunchRequestFilterSensitiveLog = (obj: StopLaunchRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopLaunchResponseFilterSensitiveLog = (obj: StopLaunchResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLaunchRequestFilterSensitiveLog = (obj: UpdateLaunchRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLaunchResponseFilterSensitiveLog = (obj: UpdateLaunchResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProjectsRequestFilterSensitiveLog = (obj: ListProjectsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProjectSummaryFilterSensitiveLog = (obj: ProjectSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProjectsResponseFilterSensitiveLog = (obj: ListProjectsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutProjectEventsRequestFilterSensitiveLog = (obj: PutProjectEventsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutProjectEventsResultEntryFilterSensitiveLog = (obj: PutProjectEventsResultEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutProjectEventsResponseFilterSensitiveLog = (obj: PutProjectEventsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateProjectRequestFilterSensitiveLog = (obj: UpdateProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateProjectResponseFilterSensitiveLog = (obj: UpdateProjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateProjectDataDeliveryRequestFilterSensitiveLog = (obj: UpdateProjectDataDeliveryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateProjectDataDeliveryResponseFilterSensitiveLog = (obj: UpdateProjectDataDeliveryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSegmentRequestFilterSensitiveLog = (obj: GetSegmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSegmentResponseFilterSensitiveLog = (obj: GetSegmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSegmentReferencesRequestFilterSensitiveLog = (obj: ListSegmentReferencesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RefResourceFilterSensitiveLog = (obj: RefResource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSegmentReferencesResponseFilterSensitiveLog = (obj: ListSegmentReferencesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSegmentsRequestFilterSensitiveLog = (obj: ListSegmentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSegmentsResponseFilterSensitiveLog = (obj: ListSegmentsResponse): any => ({
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
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TestSegmentPatternRequestFilterSensitiveLog = (obj: TestSegmentPatternRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TestSegmentPatternResponseFilterSensitiveLog = (obj: TestSegmentPatternResponse): any => ({
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
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});
