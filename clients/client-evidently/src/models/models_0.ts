import { LazyJsonString as __LazyJsonString } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient permissions to perform this action. </p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message?: string;
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

export namespace EvaluationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EvaluationRequest): any => ({
    ...obj,
  });
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

export namespace BatchEvaluateFeatureRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchEvaluateFeatureRequest): any => ({
    ...obj,
  });
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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VariableValue): any => {
    if (obj.boolValue !== undefined) return { boolValue: obj.boolValue };
    if (obj.stringValue !== undefined) return { stringValue: obj.stringValue };
    if (obj.longValue !== undefined) return { longValue: obj.longValue };
    if (obj.doubleValue !== undefined) return { doubleValue: obj.doubleValue };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
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

export namespace EvaluationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EvaluationResult): any => ({
    ...obj,
    ...(obj.value && { value: VariableValue.filterSensitiveLog(obj.value) }),
  });
}

export interface BatchEvaluateFeatureResponse {
  /**
   * <p>An array of structures, where each structure displays the results of one feature evaluation
   *        assignment to one user session.</p>
   */
  results?: EvaluationResult[];
}

export namespace BatchEvaluateFeatureResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchEvaluateFeatureResponse): any => ({
    ...obj,
    ...(obj.results && { results: obj.results.map((item) => EvaluationResult.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>The request references a resource that does not exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
  /**
   * <p>The ID of the resource that caused the exception.</p>
   */
  resourceId?: string;

  /**
   * <p>The type of the resource that is associated with the error.</p>
   */
  resourceType?: string;
}

/**
 * <p>The request was denied because of request throttling. Retry the request.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message?: string;
  /**
   * <p>The ID of the service that is associated with the error.</p>
   */
  serviceCode?: string;

  /**
   * <p>The ID of the service quota that was exceeded.</p>
   */
  quotaCode?: string;
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

export namespace ValidationExceptionField {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationExceptionField): any => ({
    ...obj,
  });
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
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message?: string;
  /**
   * <p>A reason for the error.</p>
   */
  reason?: ValidationExceptionReason | string;

  /**
   * <p>The parameter that caused the exception.</p>
   */
  fieldList?: ValidationExceptionField[];
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

export namespace CloudWatchLogsDestination {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudWatchLogsDestination): any => ({
    ...obj,
  });
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

export namespace CloudWatchLogsDestinationConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudWatchLogsDestinationConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A resource was in an inconsistent state during an update or a deletion.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  message?: string;
  /**
   * <p>The ID of the resource that caused the exception.</p>
   */
  resourceId?: string;

  /**
   * <p>The type of the resource that is associated with the error.</p>
   */
  resourceType?: string;
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

export namespace MetricDefinitionConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetricDefinitionConfig): any => ({
    ...obj,
  });
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

export namespace MetricGoalConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetricGoalConfig): any => ({
    ...obj,
  });
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
  treatmentWeights?: { [key: string]: number };
}

export namespace OnlineAbConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OnlineAbConfig): any => ({
    ...obj,
  });
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

export namespace TreatmentConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TreatmentConfig): any => ({
    ...obj,
  });
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
   * <p>Assigns one or more tags (key-value pairs) to the experiment.</p>
   *          <p>Tags can help you organize and categorize your resources. You can also use them to scope user
   *        permissions by granting a user
   *        permission to access or change only resources with certain tag values.</p>
   *          <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p>
   *
   *          <p>You can associate as many as 50 tags with an experiment.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateExperimentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateExperimentRequest): any => ({
    ...obj,
  });
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

export namespace ExperimentExecution {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentExecution): any => ({
    ...obj,
  });
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

export namespace MetricDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetricDefinition): any => ({
    ...obj,
  });
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

export namespace MetricGoal {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetricGoal): any => ({
    ...obj,
  });
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
  treatmentWeights?: { [key: string]: number };
}

export namespace OnlineAbDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OnlineAbDefinition): any => ({
    ...obj,
  });
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

export namespace ExperimentSchedule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentSchedule): any => ({
    ...obj,
  });
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
  featureVariations?: { [key: string]: string };
}

export namespace Treatment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Treatment): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace Experiment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Experiment): any => ({
    ...obj,
  });
}

export interface CreateExperimentResponse {
  /**
   * <p>A structure containing the configuration details of the experiment
   *        that you created.</p>
   */
  experiment: Experiment | undefined;
}

export namespace CreateExperimentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateExperimentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request would cause a service quota to be exceeded.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  message?: string;
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

export namespace VariationConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VariationConfig): any => ({
    ...obj,
    ...(obj.value && { value: VariableValue.filterSensitiveLog(obj.value) }),
  });
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
  tags?: { [key: string]: string };

  /**
   * <p>Specify users that should always be served a specific variation of a feature. Each user
   *       is specified by a key-value pair . For each key, specify a user by entering their user ID,
   *       account ID, or some other identifier. For the value, specify the name of the variation that
   *       they are to be served.</p>
   */
  entityOverrides?: { [key: string]: string };
}

export namespace CreateFeatureRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFeatureRequest): any => ({
    ...obj,
    ...(obj.variations && { variations: obj.variations.map((item) => VariationConfig.filterSensitiveLog(item)) }),
  });
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

export namespace EvaluationRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EvaluationRule): any => ({
    ...obj,
  });
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

export namespace Variation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Variation): any => ({
    ...obj,
    ...(obj.value && { value: VariableValue.filterSensitiveLog(obj.value) }),
  });
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
  tags?: { [key: string]: string };

  /**
   * <p>A set of key-value pairs  that specify users who should always be served a specific
   *       variation of a feature. Each key specifies a user using their user ID, account ID, or some
   *       other identifier. The value specifies the name of the variation that the user is to be
   *       served.</p>
   *          <p>For the override to be successful, the value of the key must match the <code>entityId</code> used
   *       in the <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html">EvaluateFeature</a> operation.</p>
   */
  entityOverrides?: { [key: string]: string };
}

export namespace Feature {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Feature): any => ({
    ...obj,
    ...(obj.variations && { variations: obj.variations.map((item) => Variation.filterSensitiveLog(item)) }),
  });
}

export interface CreateFeatureResponse {
  /**
   * <p>A structure that contains information about the new feature.</p>
   */
  feature?: Feature;
}

export namespace CreateFeatureResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFeatureResponse): any => ({
    ...obj,
    ...(obj.feature && { feature: Feature.filterSensitiveLog(obj.feature) }),
  });
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

export namespace LaunchGroupConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchGroupConfig): any => ({
    ...obj,
  });
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

export namespace MetricMonitorConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetricMonitorConfig): any => ({
    ...obj,
  });
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
   */
  groupWeights: { [key: string]: number } | undefined;
}

export namespace ScheduledSplitConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledSplitConfig): any => ({
    ...obj,
  });
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

export namespace ScheduledSplitsLaunchConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledSplitsLaunchConfig): any => ({
    ...obj,
  });
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
   *       the launch name as the <code>randomizationsSalt</code>.</p>
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
  tags?: { [key: string]: string };
}

export namespace CreateLaunchRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLaunchRequest): any => ({
    ...obj,
  });
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

export namespace LaunchExecution {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchExecution): any => ({
    ...obj,
  });
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
  featureVariations: { [key: string]: string } | undefined;
}

export namespace LaunchGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchGroup): any => ({
    ...obj,
  });
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

export namespace MetricMonitor {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetricMonitor): any => ({
    ...obj,
  });
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
   */
  groupWeights?: { [key: string]: number };
}

export namespace ScheduledSplit {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledSplit): any => ({
    ...obj,
  });
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

export namespace ScheduledSplitsLaunchDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledSplitsLaunchDefinition): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace Launch {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Launch): any => ({
    ...obj,
  });
}

export interface CreateLaunchResponse {
  /**
   * <p>A structure that contains the configuration of the launch that was created.</p>
   */
  launch: Launch | undefined;
}

export namespace CreateLaunchResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLaunchResponse): any => ({
    ...obj,
  });
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

export namespace S3DestinationConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3DestinationConfig): any => ({
    ...obj,
  });
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

export namespace ProjectDataDeliveryConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProjectDataDeliveryConfig): any => ({
    ...obj,
  });
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
   * <p>Assigns one or more tags (key-value pairs) to the project.</p>
   *          <p>Tags can help you organize and categorize your resources. You can also use them to scope user
   *        permissions by granting a user
   *        permission to access or change only resources with certain tag values.</p>
   *          <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p>
   *
   *          <p>You can associate as many as 50 tags with a project.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateProjectRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProjectRequest): any => ({
    ...obj,
  });
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

export namespace S3Destination {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3Destination): any => ({
    ...obj,
  });
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

export namespace ProjectDataDelivery {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProjectDataDelivery): any => ({
    ...obj,
  });
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
   * <p>The list of tag keys and values associated with this project.</p>
   */
  tags?: { [key: string]: string };
}

export namespace Project {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Project): any => ({
    ...obj,
  });
}

export interface CreateProjectResponse {
  /**
   * <p>A structure that contains information about the created project.</p>
   */
  project: Project | undefined;
}

export namespace CreateProjectResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProjectResponse): any => ({
    ...obj,
  });
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

export namespace DeleteExperimentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteExperimentRequest): any => ({
    ...obj,
  });
}

export interface DeleteExperimentResponse {}

export namespace DeleteExperimentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteExperimentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Unexpected error while processing the request. Retry the request.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  message?: string;
}

/**
 * <p>The service was unavailable. Retry the request.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  message?: string;
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

export namespace DeleteFeatureRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFeatureRequest): any => ({
    ...obj,
  });
}

export interface DeleteFeatureResponse {}

export namespace DeleteFeatureResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFeatureResponse): any => ({
    ...obj,
  });
}

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

export namespace DeleteLaunchRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLaunchRequest): any => ({
    ...obj,
  });
}

export interface DeleteLaunchResponse {}

export namespace DeleteLaunchResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLaunchResponse): any => ({
    ...obj,
  });
}

export interface DeleteProjectRequest {
  /**
   * <p>The name or ARN of the project to delete.</p>
   */
  project: string | undefined;
}

export namespace DeleteProjectRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteProjectRequest): any => ({
    ...obj,
  });
}

export interface DeleteProjectResponse {}

export namespace DeleteProjectResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteProjectResponse): any => ({
    ...obj,
  });
}

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
   * <p>A JSON block of attributes that you can optionally pass in. This JSON block is included
   *       in the evaluation events sent to Evidently from the user session. </p>
   */
  evaluationContext?: __LazyJsonString | string;
}

export namespace EvaluateFeatureRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EvaluateFeatureRequest): any => ({
    ...obj,
  });
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

export namespace EvaluateFeatureResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EvaluateFeatureResponse): any => ({
    ...obj,
    ...(obj.value && { value: VariableValue.filterSensitiveLog(obj.value) }),
  });
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

export namespace Event {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Event): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource that you want to see the tags of.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tag keys and values associated with the resource you specified.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
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

export namespace GetExperimentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetExperimentRequest): any => ({
    ...obj,
  });
}

export interface GetExperimentResponse {
  /**
   * <p>A structure containing the configuration details of the experiment.</p>
   */
  experiment?: Experiment;
}

export namespace GetExperimentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetExperimentResponse): any => ({
    ...obj,
  });
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
   * <p>The date and time that the experiment ended, if it is completed.</p>
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

export namespace GetExperimentResultsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetExperimentResultsRequest): any => ({
    ...obj,
  });
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

export namespace ExperimentReport {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentReport): any => ({
    ...obj,
  });
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

export namespace ExperimentResultsData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentResultsData): any => ({
    ...obj,
  });
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
}

export namespace GetExperimentResultsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetExperimentResultsResponse): any => ({
    ...obj,
  });
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

export namespace ListExperimentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListExperimentsRequest): any => ({
    ...obj,
  });
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

export namespace ListExperimentsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListExperimentsResponse): any => ({
    ...obj,
  });
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
   * <p>The date and time to end the experiment.</p>
   */
  analysisCompleteTime: Date | undefined;
}

export namespace StartExperimentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartExperimentRequest): any => ({
    ...obj,
  });
}

export interface StartExperimentResponse {
  /**
   * <p>A timestamp that indicates when the experiment started.</p>
   */
  startedTime?: Date;
}

export namespace StartExperimentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartExperimentResponse): any => ({
    ...obj,
  });
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

export namespace StopExperimentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopExperimentRequest): any => ({
    ...obj,
  });
}

export interface StopExperimentResponse {
  /**
   * <p>The date and time that the experiment stopped.</p>
   */
  endedTime?: Date;
}

export namespace StopExperimentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopExperimentResponse): any => ({
    ...obj,
  });
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
   * <p>A structure that contains the configuration of which variation o use as the "control"
   *       version. The "control" version is used for comparison with other variations. This structure
   *       also specifies how much experiment traffic is allocated to each variation.</p>
   */
  onlineAbConfig?: OnlineAbConfig;
}

export namespace UpdateExperimentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateExperimentRequest): any => ({
    ...obj,
  });
}

export interface UpdateExperimentResponse {
  /**
   * <p>A structure containing the configuration details of the experiment
   *     that was updated.</p>
   */
  experiment: Experiment | undefined;
}

export namespace UpdateExperimentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateExperimentResponse): any => ({
    ...obj,
  });
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

export namespace GetFeatureRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFeatureRequest): any => ({
    ...obj,
  });
}

export interface GetFeatureResponse {
  /**
   * <p>A structure containing the configuration details of the feature.</p>
   */
  feature: Feature | undefined;
}

export namespace GetFeatureResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFeatureResponse): any => ({
    ...obj,
    ...(obj.feature && { feature: Feature.filterSensitiveLog(obj.feature) }),
  });
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

export namespace ListFeaturesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFeaturesRequest): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace FeatureSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FeatureSummary): any => ({
    ...obj,
  });
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

export namespace ListFeaturesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFeaturesResponse): any => ({
    ...obj,
  });
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
  entityOverrides?: { [key: string]: string };
}

export namespace UpdateFeatureRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFeatureRequest): any => ({
    ...obj,
    ...(obj.addOrUpdateVariations && {
      addOrUpdateVariations: obj.addOrUpdateVariations.map((item) => VariationConfig.filterSensitiveLog(item)),
    }),
  });
}

export interface UpdateFeatureResponse {
  /**
   * <p>A structure that contains information about the updated feature.</p>
   */
  feature: Feature | undefined;
}

export namespace UpdateFeatureResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFeatureResponse): any => ({
    ...obj,
    ...(obj.feature && { feature: Feature.filterSensitiveLog(obj.feature) }),
  });
}

export interface GetProjectRequest {
  /**
   * <p>The name or ARN of the project that you want to see the details of.</p>
   */
  project: string | undefined;
}

export namespace GetProjectRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetProjectRequest): any => ({
    ...obj,
  });
}

export interface GetProjectResponse {
  /**
   * <p>A structure containing the configuration details of the project.</p>
   */
  project: Project | undefined;
}

export namespace GetProjectResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetProjectResponse): any => ({
    ...obj,
  });
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

export namespace GetLaunchRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLaunchRequest): any => ({
    ...obj,
  });
}

export interface GetLaunchResponse {
  /**
   * <p>A structure containing the configuration details of the launch.</p>
   */
  launch?: Launch;
}

export namespace GetLaunchResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLaunchResponse): any => ({
    ...obj,
  });
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

export namespace ListLaunchesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLaunchesRequest): any => ({
    ...obj,
  });
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

export namespace ListLaunchesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLaunchesResponse): any => ({
    ...obj,
  });
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

export namespace StartLaunchRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartLaunchRequest): any => ({
    ...obj,
  });
}

export interface StartLaunchResponse {
  /**
   * <p>A structure that contains information about the launch that was started.</p>
   */
  launch: Launch | undefined;
}

export namespace StartLaunchResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartLaunchResponse): any => ({
    ...obj,
  });
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

export namespace StopLaunchRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopLaunchRequest): any => ({
    ...obj,
  });
}

export interface StopLaunchResponse {
  /**
   * <p>The date and time that the launch stopped.</p>
   */
  endedTime?: Date;
}

export namespace StopLaunchResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopLaunchResponse): any => ({
    ...obj,
  });
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

export namespace UpdateLaunchRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateLaunchRequest): any => ({
    ...obj,
  });
}

export interface UpdateLaunchResponse {
  /**
   * <p>A structure that contains the new configuration of the launch that was updated.</p>
   */
  launch: Launch | undefined;
}

export namespace UpdateLaunchResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateLaunchResponse): any => ({
    ...obj,
  });
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

export namespace ListProjectsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProjectsRequest): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace ProjectSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProjectSummary): any => ({
    ...obj,
  });
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

export namespace ListProjectsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProjectsResponse): any => ({
    ...obj,
  });
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

export namespace PutProjectEventsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutProjectEventsRequest): any => ({
    ...obj,
  });
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

export namespace PutProjectEventsResultEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutProjectEventsResultEntry): any => ({
    ...obj,
  });
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

export namespace PutProjectEventsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutProjectEventsResponse): any => ({
    ...obj,
  });
}

export interface UpdateProjectRequest {
  /**
   * <p>The name or ARN of the project to update.</p>
   */
  project: string | undefined;

  /**
   * <p>An optional description of the project.</p>
   */
  description?: string;
}

export namespace UpdateProjectRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateProjectRequest): any => ({
    ...obj,
  });
}

export interface UpdateProjectResponse {
  /**
   * <p>A structure containing information about the updated project.</p>
   */
  project: Project | undefined;
}

export namespace UpdateProjectResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateProjectResponse): any => ({
    ...obj,
  });
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

export namespace UpdateProjectDataDeliveryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateProjectDataDeliveryRequest): any => ({
    ...obj,
  });
}

export interface UpdateProjectDataDeliveryResponse {
  /**
   * <p>A structure containing details about the project that you updated.</p>
   */
  project: Project | undefined;
}

export namespace UpdateProjectDataDeliveryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateProjectDataDeliveryResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the CloudWatch Evidently resource that you're adding tags to.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of key-value pairs to associate with the resource.</p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
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

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}
