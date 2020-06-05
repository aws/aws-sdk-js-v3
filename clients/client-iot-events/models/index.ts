import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>An action to be performed when the <code>"condition"</code> is TRUE.</p>
 */
export interface Action {
  __type?: "Action";
  /**
   * <p>Information needed to clear the timer.</p>
   */
  clearTimer?: ClearTimerAction;

  /**
   * <p>Sends information about the detector model instance and the event that triggered the
   *       action to a Kinesis Data Firehose delivery stream.</p>
   */
  firehose?: FirehoseAction;

  /**
   * <p>Sends an IoT Events input, passing in information about the detector model instance and
   *       the event that triggered the action.</p>
   */
  iotEvents?: IotEventsAction;

  /**
   * <p>Publishes an MQTT message with the given topic to the AWS IoT message broker.</p>
   */
  iotTopicPublish?: IotTopicPublishAction;

  /**
   * <p>Calls a Lambda function, passing in information about the detector model instance and the
   *       event that triggered the action.</p>
   */
  lambda?: LambdaAction;

  /**
   * <p>Information needed to reset the timer.</p>
   */
  resetTimer?: ResetTimerAction;

  /**
   * <p>Information needed to set the timer.</p>
   */
  setTimer?: SetTimerAction;

  /**
   * <p>Sets a variable to a specified value.</p>
   */
  setVariable?: SetVariableAction;

  /**
   * <p>Sends an Amazon SNS message.</p>
   */
  sns?: SNSTopicPublishAction;

  /**
   * <p>Sends information about the detector model instance and the event that triggered the
   *       action to an Amazon SQS queue.</p>
   */
  sqs?: SqsAction;
}

export namespace Action {
  export const filterSensitiveLog = (obj: Action): any => ({
    ...obj
  });
  export const isa = (o: any): o is Action => __isa(o, "Action");
}

/**
 * <p>The attributes from the JSON payload that are made available by the input. Inputs are
 *         derived from messages sent to the AWS IoT Events system using <code>BatchPutMessage</code>. Each such message
 *         contains a JSON payload, and those attributes (and their paired values) specified here are
 *         available for use in the <code>condition</code> expressions used by detectors. </p>
 */
export interface Attribute {
  __type?: "Attribute";
  /**
   * <p>An expression that specifies an attribute-value pair in a JSON structure. Use this to specify
   *         an attribute from the JSON payload that is made available by the input. Inputs are derived from
   *         messages sent to the AWS IoT Events system (<code>BatchPutMessage</code>). Each such message
   *         contains a JSON payload, and the attribute (and its paired value) specified here are
   *         available for use in the <code>"condition"</code> expressions used by detectors. </p>
   *          <p>Syntax: <code><field-name>.<field-name>...</code>
   *          </p>
   */
  jsonPath: string | undefined;
}

export namespace Attribute {
  export const filterSensitiveLog = (obj: Attribute): any => ({
    ...obj
  });
  export const isa = (o: any): o is Attribute => __isa(o, "Attribute");
}

/**
 * <p>Information needed to clear the timer.</p>
 */
export interface ClearTimerAction {
  __type?: "ClearTimerAction";
  /**
   * <p>The name of the timer to clear.</p>
   */
  timerName: string | undefined;
}

export namespace ClearTimerAction {
  export const filterSensitiveLog = (obj: ClearTimerAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClearTimerAction =>
    __isa(o, "ClearTimerAction");
}

export interface CreateDetectorModelRequest {
  __type?: "CreateDetectorModelRequest";
  /**
   * <p>Information that defines how the detectors operate.</p>
   */
  detectorModelDefinition: DetectorModelDefinition | undefined;

  /**
   * <p>A brief description of the detector model.</p>
   */
  detectorModelDescription?: string;

  /**
   * <p>The name of the detector model.</p>
   */
  detectorModelName: string | undefined;

  /**
   * <p>Information about the order in which events are evaluated and how actions are executed. </p>
   */
  evaluationMethod?: EvaluationMethod | string;

  /**
   * <p>The input attribute key used to identify a device or system in order to create a detector (an
   *         instance of the detector model) and then to route each input received to the appropriate detector
   *         (instance). This parameter uses a JSON-path expression to specify the attribute-value pair in
   *         the message payload of each input that is used to identify the device associated with the input.</p>
   */
  key?: string;

  /**
   * <p>The ARN of the role that grants permission to AWS IoT Events to perform its operations.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>Metadata that can be used to manage the detector model.</p>
   */
  tags?: Tag[];
}

export namespace CreateDetectorModelRequest {
  export const filterSensitiveLog = (obj: CreateDetectorModelRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDetectorModelRequest =>
    __isa(o, "CreateDetectorModelRequest");
}

export interface CreateDetectorModelResponse {
  __type?: "CreateDetectorModelResponse";
  /**
   * <p>Information about how the detector model is configured.</p>
   */
  detectorModelConfiguration?: DetectorModelConfiguration;
}

export namespace CreateDetectorModelResponse {
  export const filterSensitiveLog = (
    obj: CreateDetectorModelResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDetectorModelResponse =>
    __isa(o, "CreateDetectorModelResponse");
}

export interface CreateInputRequest {
  __type?: "CreateInputRequest";
  /**
   * <p>The definition of the input.</p>
   */
  inputDefinition: InputDefinition | undefined;

  /**
   * <p>A brief description of the input.</p>
   */
  inputDescription?: string;

  /**
   * <p>The name you want to give to the input.</p>
   */
  inputName: string | undefined;

  /**
   * <p>Metadata that can be used to manage the input.</p>
   */
  tags?: Tag[];
}

export namespace CreateInputRequest {
  export const filterSensitiveLog = (obj: CreateInputRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateInputRequest =>
    __isa(o, "CreateInputRequest");
}

export interface CreateInputResponse {
  __type?: "CreateInputResponse";
  /**
   * <p>Information about the configuration of the input.</p>
   */
  inputConfiguration?: InputConfiguration;
}

export namespace CreateInputResponse {
  export const filterSensitiveLog = (obj: CreateInputResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateInputResponse =>
    __isa(o, "CreateInputResponse");
}

export interface DeleteDetectorModelRequest {
  __type?: "DeleteDetectorModelRequest";
  /**
   * <p>The name of the detector model to be deleted.</p>
   */
  detectorModelName: string | undefined;
}

export namespace DeleteDetectorModelRequest {
  export const filterSensitiveLog = (obj: DeleteDetectorModelRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDetectorModelRequest =>
    __isa(o, "DeleteDetectorModelRequest");
}

export interface DeleteDetectorModelResponse {
  __type?: "DeleteDetectorModelResponse";
}

export namespace DeleteDetectorModelResponse {
  export const filterSensitiveLog = (
    obj: DeleteDetectorModelResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDetectorModelResponse =>
    __isa(o, "DeleteDetectorModelResponse");
}

export interface DeleteInputRequest {
  __type?: "DeleteInputRequest";
  /**
   * <p>The name of the input to delete.</p>
   */
  inputName: string | undefined;
}

export namespace DeleteInputRequest {
  export const filterSensitiveLog = (obj: DeleteInputRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteInputRequest =>
    __isa(o, "DeleteInputRequest");
}

export interface DeleteInputResponse {
  __type?: "DeleteInputResponse";
}

export namespace DeleteInputResponse {
  export const filterSensitiveLog = (obj: DeleteInputResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteInputResponse =>
    __isa(o, "DeleteInputResponse");
}

export interface DescribeDetectorModelRequest {
  __type?: "DescribeDetectorModelRequest";
  /**
   * <p>The name of the detector model.</p>
   */
  detectorModelName: string | undefined;

  /**
   * <p>The version of the detector model.</p>
   */
  detectorModelVersion?: string;
}

export namespace DescribeDetectorModelRequest {
  export const filterSensitiveLog = (
    obj: DescribeDetectorModelRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDetectorModelRequest =>
    __isa(o, "DescribeDetectorModelRequest");
}

export interface DescribeDetectorModelResponse {
  __type?: "DescribeDetectorModelResponse";
  /**
   * <p>Information about the detector model.</p>
   */
  detectorModel?: DetectorModel;
}

export namespace DescribeDetectorModelResponse {
  export const filterSensitiveLog = (
    obj: DescribeDetectorModelResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDetectorModelResponse =>
    __isa(o, "DescribeDetectorModelResponse");
}

export interface DescribeInputRequest {
  __type?: "DescribeInputRequest";
  /**
   * <p>The name of the input.</p>
   */
  inputName: string | undefined;
}

export namespace DescribeInputRequest {
  export const filterSensitiveLog = (obj: DescribeInputRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeInputRequest =>
    __isa(o, "DescribeInputRequest");
}

export interface DescribeInputResponse {
  __type?: "DescribeInputResponse";
  /**
   * <p>Information about the input.</p>
   */
  input?: Input;
}

export namespace DescribeInputResponse {
  export const filterSensitiveLog = (obj: DescribeInputResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeInputResponse =>
    __isa(o, "DescribeInputResponse");
}

export interface DescribeLoggingOptionsRequest {
  __type?: "DescribeLoggingOptionsRequest";
}

export namespace DescribeLoggingOptionsRequest {
  export const filterSensitiveLog = (
    obj: DescribeLoggingOptionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeLoggingOptionsRequest =>
    __isa(o, "DescribeLoggingOptionsRequest");
}

export interface DescribeLoggingOptionsResponse {
  __type?: "DescribeLoggingOptionsResponse";
  /**
   * <p>The current settings of the AWS IoT Events logging options.</p>
   */
  loggingOptions?: LoggingOptions;
}

export namespace DescribeLoggingOptionsResponse {
  export const filterSensitiveLog = (
    obj: DescribeLoggingOptionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeLoggingOptionsResponse =>
    __isa(o, "DescribeLoggingOptionsResponse");
}

/**
 * <p>The detector model and the specific detectors (instances) for which the logging level is given.</p>
 */
export interface DetectorDebugOption {
  __type?: "DetectorDebugOption";
  /**
   * <p>The name of the detector model.</p>
   */
  detectorModelName: string | undefined;

  /**
   * <p>The value of the input attribute key used to create the detector (the instance of the detector
   *        model).</p>
   */
  keyValue?: string;
}

export namespace DetectorDebugOption {
  export const filterSensitiveLog = (obj: DetectorDebugOption): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetectorDebugOption =>
    __isa(o, "DetectorDebugOption");
}

/**
 * <p>Information about the detector model.</p>
 */
export interface DetectorModel {
  __type?: "DetectorModel";
  /**
   * <p>Information about how the detector is configured.</p>
   */
  detectorModelConfiguration?: DetectorModelConfiguration;

  /**
   * <p>Information that defines how a detector operates.</p>
   */
  detectorModelDefinition?: DetectorModelDefinition;
}

export namespace DetectorModel {
  export const filterSensitiveLog = (obj: DetectorModel): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetectorModel => __isa(o, "DetectorModel");
}

/**
 * <p>Information about how the detector model is configured.</p>
 */
export interface DetectorModelConfiguration {
  __type?: "DetectorModelConfiguration";
  /**
   * <p>The time the detector model was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The ARN of the detector model.</p>
   */
  detectorModelArn?: string;

  /**
   * <p>A brief description of the detector model.</p>
   */
  detectorModelDescription?: string;

  /**
   * <p>The name of the detector model.</p>
   */
  detectorModelName?: string;

  /**
   * <p>The version of the detector model.</p>
   */
  detectorModelVersion?: string;

  /**
   * <p>Information about the order in which events are evaluated and how actions are executed. </p>
   */
  evaluationMethod?: EvaluationMethod | string;

  /**
   * <p>The input attribute key used to identify a device or system in order to create a detector (an
   *         instance of the detector model) and then to route each input received to the appropriate detector
   *         (instance). This parameter uses a JSON-path expression to specify the attribute-value pair in the
   *         message payload of each input that is used to identify the device associated with the input.</p>
   */
  key?: string;

  /**
   * <p>The time the detector model was last updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>The ARN of the role that grants permission to AWS IoT Events to perform its operations.</p>
   */
  roleArn?: string;

  /**
   * <p>The status of the detector model.</p>
   */
  status?: DetectorModelVersionStatus | string;
}

export namespace DetectorModelConfiguration {
  export const filterSensitiveLog = (obj: DetectorModelConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetectorModelConfiguration =>
    __isa(o, "DetectorModelConfiguration");
}

/**
 * <p>Information that defines how a detector operates.</p>
 */
export interface DetectorModelDefinition {
  __type?: "DetectorModelDefinition";
  /**
   * <p>The state that is entered at the creation of each detector (instance).</p>
   */
  initialStateName: string | undefined;

  /**
   * <p>Information about the states of the detector.</p>
   */
  states: State[] | undefined;
}

export namespace DetectorModelDefinition {
  export const filterSensitiveLog = (obj: DetectorModelDefinition): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetectorModelDefinition =>
    __isa(o, "DetectorModelDefinition");
}

/**
 * <p>Information about the detector model.</p>
 */
export interface DetectorModelSummary {
  __type?: "DetectorModelSummary";
  /**
   * <p>The time the detector model was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>A brief description of the detector model.</p>
   */
  detectorModelDescription?: string;

  /**
   * <p>The name of the detector model.</p>
   */
  detectorModelName?: string;
}

export namespace DetectorModelSummary {
  export const filterSensitiveLog = (obj: DetectorModelSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetectorModelSummary =>
    __isa(o, "DetectorModelSummary");
}

export enum DetectorModelVersionStatus {
  ACTIVATING = "ACTIVATING",
  ACTIVE = "ACTIVE",
  DEPRECATED = "DEPRECATED",
  DRAFT = "DRAFT",
  FAILED = "FAILED",
  INACTIVE = "INACTIVE",
  PAUSED = "PAUSED"
}

/**
 * <p>Information about the detector model version.</p>
 */
export interface DetectorModelVersionSummary {
  __type?: "DetectorModelVersionSummary";
  /**
   * <p>The time the detector model version was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The ARN of the detector model version.</p>
   */
  detectorModelArn?: string;

  /**
   * <p>The name of the detector model.</p>
   */
  detectorModelName?: string;

  /**
   * <p>The ID of the detector model version.</p>
   */
  detectorModelVersion?: string;

  /**
   * <p>Information about the order in which events are evaluated and how actions are executed. </p>
   */
  evaluationMethod?: EvaluationMethod | string;

  /**
   * <p>The last time the detector model version was updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>The ARN of the role that grants the detector model permission to perform its tasks.</p>
   */
  roleArn?: string;

  /**
   * <p>The status of the detector model version.</p>
   */
  status?: DetectorModelVersionStatus | string;
}

export namespace DetectorModelVersionSummary {
  export const filterSensitiveLog = (
    obj: DetectorModelVersionSummary
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetectorModelVersionSummary =>
    __isa(o, "DetectorModelVersionSummary");
}

export enum EvaluationMethod {
  BATCH = "BATCH",
  SERIAL = "SERIAL"
}

/**
 * <p>Specifies the <code>"actions"</code> to be performed when the <code>"condition"</code>
 *         evaluates to TRUE.</p>
 */
export interface Event {
  __type?: "Event";
  /**
   * <p>The actions to be performed.</p>
   */
  actions?: Action[];

  /**
   * <p>[Optional] The Boolean expression that when TRUE causes the <code>"actions"</code> to be performed.
   *         If not present, the actions are performed (=TRUE); if the expression result is not a Boolean value, the
   *         actions are NOT performed (=FALSE).</p>
   */
  condition?: string;

  /**
   * <p>The name of the event.</p>
   */
  eventName: string | undefined;
}

export namespace Event {
  export const filterSensitiveLog = (obj: Event): any => ({
    ...obj
  });
  export const isa = (o: any): o is Event => __isa(o, "Event");
}

/**
 * <p>Sends information about the detector model instance and the event that triggered the
 *       action to a Kinesis Data Firehose delivery stream.</p>
 */
export interface FirehoseAction {
  __type?: "FirehoseAction";
  /**
   * <p>The name of the Kinesis Data Firehose delivery stream where the data is written.</p>
   */
  deliveryStreamName: string | undefined;

  /**
   * <p>A character separator that is used to separate records written to the Kinesis Data
   *       Firehose delivery stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows
   *       newline), ',' (comma).</p>
   */
  separator?: string;
}

export namespace FirehoseAction {
  export const filterSensitiveLog = (obj: FirehoseAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is FirehoseAction =>
    __isa(o, "FirehoseAction");
}

/**
 * <p>Information about the input.</p>
 */
export interface Input {
  __type?: "Input";
  /**
   * <p>Information about the configuration of an input.</p>
   */
  inputConfiguration?: InputConfiguration;

  /**
   * <p>The definition of the input.</p>
   */
  inputDefinition?: InputDefinition;
}

export namespace Input {
  export const filterSensitiveLog = (obj: Input): any => ({
    ...obj
  });
  export const isa = (o: any): o is Input => __isa(o, "Input");
}

/**
 * <p>Information about the configuration of an input.</p>
 */
export interface InputConfiguration {
  __type?: "InputConfiguration";
  /**
   * <p>The time the input was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>The ARN of the input.</p>
   */
  inputArn: string | undefined;

  /**
   * <p>A brief description of the input.</p>
   */
  inputDescription?: string;

  /**
   * <p>The name of the input.</p>
   */
  inputName: string | undefined;

  /**
   * <p>The last time the input was updated.</p>
   */
  lastUpdateTime: Date | undefined;

  /**
   * <p>The status of the input.</p>
   */
  status: InputStatus | string | undefined;
}

export namespace InputConfiguration {
  export const filterSensitiveLog = (obj: InputConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is InputConfiguration =>
    __isa(o, "InputConfiguration");
}

/**
 * <p>The definition of the input.</p>
 */
export interface InputDefinition {
  __type?: "InputDefinition";
  /**
   * <p>The attributes from the JSON payload that are made available by the input. Inputs are
   *           derived from messages sent to the AWS IoT Events system using <code>BatchPutMessage</code>.
   *           Each such message contains a JSON payload, and those attributes (and their paired values)
   *           specified here are available for use in the <code>"condition"</code> expressions used by
   *           detectors that monitor this input. </p>
   */
  attributes: Attribute[] | undefined;
}

export namespace InputDefinition {
  export const filterSensitiveLog = (obj: InputDefinition): any => ({
    ...obj
  });
  export const isa = (o: any): o is InputDefinition =>
    __isa(o, "InputDefinition");
}

export enum InputStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  UPDATING = "UPDATING"
}

/**
 * <p>Information about the input.</p>
 */
export interface InputSummary {
  __type?: "InputSummary";
  /**
   * <p>The time the input was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The ARN of the input.</p>
   */
  inputArn?: string;

  /**
   * <p>A brief description of the input.</p>
   */
  inputDescription?: string;

  /**
   * <p>The name of the input.</p>
   */
  inputName?: string;

  /**
   * <p>The last time the input was updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>The status of the input.</p>
   */
  status?: InputStatus | string;
}

export namespace InputSummary {
  export const filterSensitiveLog = (obj: InputSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is InputSummary => __isa(o, "InputSummary");
}

/**
 * <p>An internal failure occurred.</p>
 */
export interface InternalFailureException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalFailureException";
  $fault: "server";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InternalFailureException {
  export const filterSensitiveLog = (obj: InternalFailureException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalFailureException =>
    __isa(o, "InternalFailureException");
}

/**
 * <p>The request was invalid.</p>
 */
export interface InvalidRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidRequestException =>
    __isa(o, "InvalidRequestException");
}

/**
 * <p>Sends an AWS IoT Events input, passing in information about the detector model instance
 *       and the event that triggered the action.</p>
 */
export interface IotEventsAction {
  __type?: "IotEventsAction";
  /**
   * <p>The name of the AWS IoT Events input where the data is sent.</p>
   */
  inputName: string | undefined;
}

export namespace IotEventsAction {
  export const filterSensitiveLog = (obj: IotEventsAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is IotEventsAction =>
    __isa(o, "IotEventsAction");
}

/**
 * <p>Information required to publish the MQTT message via the AWS IoT message broker.</p>
 */
export interface IotTopicPublishAction {
  __type?: "IotTopicPublishAction";
  /**
   * <p>The MQTT topic of the message.</p>
   */
  mqttTopic: string | undefined;
}

export namespace IotTopicPublishAction {
  export const filterSensitiveLog = (obj: IotTopicPublishAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is IotTopicPublishAction =>
    __isa(o, "IotTopicPublishAction");
}

/**
 * <p>Calls a Lambda function, passing in information about the detector model instance and the
 *       event that triggered the action.</p>
 */
export interface LambdaAction {
  __type?: "LambdaAction";
  /**
   * <p>The ARN of the Lambda function that is executed.</p>
   */
  functionArn: string | undefined;
}

export namespace LambdaAction {
  export const filterSensitiveLog = (obj: LambdaAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is LambdaAction => __isa(o, "LambdaAction");
}

/**
 * <p>A limit was exceeded.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj
  });
  export const isa = (o: any): o is LimitExceededException =>
    __isa(o, "LimitExceededException");
}

export interface ListDetectorModelsRequest {
  __type?: "ListDetectorModelsRequest";
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListDetectorModelsRequest {
  export const filterSensitiveLog = (obj: ListDetectorModelsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDetectorModelsRequest =>
    __isa(o, "ListDetectorModelsRequest");
}

export interface ListDetectorModelsResponse {
  __type?: "ListDetectorModelsResponse";
  /**
   * <p>Summary information about the detector models.</p>
   */
  detectorModelSummaries?: DetectorModelSummary[];

  /**
   * <p>A token to retrieve the next set of results, or <code>null</code> if there are no additional
   *           results.</p>
   */
  nextToken?: string;
}

export namespace ListDetectorModelsResponse {
  export const filterSensitiveLog = (obj: ListDetectorModelsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDetectorModelsResponse =>
    __isa(o, "ListDetectorModelsResponse");
}

export interface ListDetectorModelVersionsRequest {
  __type?: "ListDetectorModelVersionsRequest";
  /**
   * <p>The name of the detector model whose versions are returned.</p>
   */
  detectorModelName: string | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListDetectorModelVersionsRequest {
  export const filterSensitiveLog = (
    obj: ListDetectorModelVersionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDetectorModelVersionsRequest =>
    __isa(o, "ListDetectorModelVersionsRequest");
}

export interface ListDetectorModelVersionsResponse {
  __type?: "ListDetectorModelVersionsResponse";
  /**
   * <p>Summary information about the detector model versions.</p>
   */
  detectorModelVersionSummaries?: DetectorModelVersionSummary[];

  /**
   * <p>A token to retrieve the next set of results, or <code>null</code> if there are no additional
   *           results.</p>
   */
  nextToken?: string;
}

export namespace ListDetectorModelVersionsResponse {
  export const filterSensitiveLog = (
    obj: ListDetectorModelVersionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDetectorModelVersionsResponse =>
    __isa(o, "ListDetectorModelVersionsResponse");
}

export interface ListInputsRequest {
  __type?: "ListInputsRequest";
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListInputsRequest {
  export const filterSensitiveLog = (obj: ListInputsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListInputsRequest =>
    __isa(o, "ListInputsRequest");
}

export interface ListInputsResponse {
  __type?: "ListInputsResponse";
  /**
   * <p>Summary information about the inputs.</p>
   */
  inputSummaries?: InputSummary[];

  /**
   * <p>A token to retrieve the next set of results, or <code>null</code> if there are no additional
   *         results.</p>
   */
  nextToken?: string;
}

export namespace ListInputsResponse {
  export const filterSensitiveLog = (obj: ListInputsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListInputsResponse =>
    __isa(o, "ListInputsResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceRequest =>
    __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The list of tags assigned to the resource.</p>
   */
  tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (
    obj: ListTagsForResourceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceResponse =>
    __isa(o, "ListTagsForResourceResponse");
}

export enum LoggingLevel {
  DEBUG = "DEBUG",
  ERROR = "ERROR",
  INFO = "INFO"
}

/**
 * <p>The values of the AWS IoT Events logging options.</p>
 */
export interface LoggingOptions {
  __type?: "LoggingOptions";
  /**
   * <p>Information that identifies those detector models and their detectors (instances) for which the
   *        logging level is given.</p>
   */
  detectorDebugOptions?: DetectorDebugOption[];

  /**
   * <p>If TRUE, logging is enabled for AWS IoT Events.</p>
   */
  enabled: boolean | undefined;

  /**
   * <p>The logging level.</p>
   */
  level: LoggingLevel | string | undefined;

  /**
   * <p>The ARN of the role that grants permission to AWS IoT Events to perform logging.</p>
   */
  roleArn: string | undefined;
}

export namespace LoggingOptions {
  export const filterSensitiveLog = (obj: LoggingOptions): any => ({
    ...obj
  });
  export const isa = (o: any): o is LoggingOptions =>
    __isa(o, "LoggingOptions");
}

/**
 * <p>When entering this state, perform these <code>actions</code> if the
 *         <code>condition</code> is TRUE.</p>
 */
export interface OnEnterLifecycle {
  __type?: "OnEnterLifecycle";
  /**
   * <p>Specifies the actions that are performed when the state is entered and the
   *        <code>"condition"</code> is TRUE.</p>
   */
  events?: Event[];
}

export namespace OnEnterLifecycle {
  export const filterSensitiveLog = (obj: OnEnterLifecycle): any => ({
    ...obj
  });
  export const isa = (o: any): o is OnEnterLifecycle =>
    __isa(o, "OnEnterLifecycle");
}

/**
 * <p>When exiting this state, perform these <code>"actions"</code> if the specified
 *          <code>"condition"</code> is TRUE.</p>
 */
export interface OnExitLifecycle {
  __type?: "OnExitLifecycle";
  /**
   * <p>Specifies the <code>"actions"</code> that are performed when the state is exited and the
   *         <code>"condition"</code> is TRUE.</p>
   */
  events?: Event[];
}

export namespace OnExitLifecycle {
  export const filterSensitiveLog = (obj: OnExitLifecycle): any => ({
    ...obj
  });
  export const isa = (o: any): o is OnExitLifecycle =>
    __isa(o, "OnExitLifecycle");
}

/**
 * <p>Specifies the actions performed when the <code>"condition"</code> evaluates to TRUE.</p>
 */
export interface OnInputLifecycle {
  __type?: "OnInputLifecycle";
  /**
   * <p>Specifies the actions performed when the <code>"condition"</code> evaluates to TRUE.</p>
   */
  events?: Event[];

  /**
   * <p>Specifies the actions performed, and the next state entered, when a <code>"condition"</code>
   *         evaluates to TRUE.</p>
   */
  transitionEvents?: TransitionEvent[];
}

export namespace OnInputLifecycle {
  export const filterSensitiveLog = (obj: OnInputLifecycle): any => ({
    ...obj
  });
  export const isa = (o: any): o is OnInputLifecycle =>
    __isa(o, "OnInputLifecycle");
}

export interface PutLoggingOptionsRequest {
  __type?: "PutLoggingOptionsRequest";
  /**
   * <p>The new values of the AWS IoT Events logging options.</p>
   */
  loggingOptions: LoggingOptions | undefined;
}

export namespace PutLoggingOptionsRequest {
  export const filterSensitiveLog = (obj: PutLoggingOptionsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutLoggingOptionsRequest =>
    __isa(o, "PutLoggingOptionsRequest");
}

/**
 * <p>Information needed to reset the timer.</p>
 */
export interface ResetTimerAction {
  __type?: "ResetTimerAction";
  /**
   * <p>The name of the timer to reset.</p>
   */
  timerName: string | undefined;
}

export namespace ResetTimerAction {
  export const filterSensitiveLog = (obj: ResetTimerAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResetTimerAction =>
    __isa(o, "ResetTimerAction");
}

/**
 * <p>The resource already exists.</p>
 */
export interface ResourceAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;

  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  resourceId?: string;
}

export namespace ResourceAlreadyExistsException {
  export const filterSensitiveLog = (
    obj: ResourceAlreadyExistsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceAlreadyExistsException =>
    __isa(o, "ResourceAlreadyExistsException");
}

/**
 * <p>The resource is in use.</p>
 */
export interface ResourceInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ResourceInUseException {
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceInUseException =>
    __isa(o, "ResourceInUseException");
}

/**
 * <p>The resource was not found.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceNotFoundException =>
    __isa(o, "ResourceNotFoundException");
}

/**
 * <p>The service is currently unavailable.</p>
 */
export interface ServiceUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (
    obj: ServiceUnavailableException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceUnavailableException =>
    __isa(o, "ServiceUnavailableException");
}

/**
 * <p>Information needed to set the timer.</p>
 */
export interface SetTimerAction {
  __type?: "SetTimerAction";
  /**
   * <p>The number of seconds until the timer expires. The minimum value is 60 seconds to ensure accuracy.</p>
   */
  seconds: number | undefined;

  /**
   * <p>The name of the timer.</p>
   */
  timerName: string | undefined;
}

export namespace SetTimerAction {
  export const filterSensitiveLog = (obj: SetTimerAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is SetTimerAction =>
    __isa(o, "SetTimerAction");
}

/**
 * <p>Information about the variable and its new value.</p>
 */
export interface SetVariableAction {
  __type?: "SetVariableAction";
  /**
   * <p>The new value of the variable.</p>
   */
  value: string | undefined;

  /**
   * <p>The name of the variable.</p>
   */
  variableName: string | undefined;
}

export namespace SetVariableAction {
  export const filterSensitiveLog = (obj: SetVariableAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is SetVariableAction =>
    __isa(o, "SetVariableAction");
}

/**
 * <p>Information required to publish the Amazon SNS message.</p>
 */
export interface SNSTopicPublishAction {
  __type?: "SNSTopicPublishAction";
  /**
   * <p>The ARN of the Amazon SNS target where the message is sent.</p>
   */
  targetArn: string | undefined;
}

export namespace SNSTopicPublishAction {
  export const filterSensitiveLog = (obj: SNSTopicPublishAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is SNSTopicPublishAction =>
    __isa(o, "SNSTopicPublishAction");
}

/**
 * <p>Sends information about the detector model instance and the event that triggered the
 *       action to an Amazon SQS queue.</p>
 */
export interface SqsAction {
  __type?: "SqsAction";
  /**
   * <p>The URL of the SQS queue where the data is written.</p>
   */
  queueUrl: string | undefined;

  /**
   * <p>Set this to TRUE if you want the data to be Base-64 encoded before it is written to the queue.
   *        Otherwise, set this to FALSE.</p>
   */
  useBase64?: boolean;
}

export namespace SqsAction {
  export const filterSensitiveLog = (obj: SqsAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is SqsAction => __isa(o, "SqsAction");
}

/**
 * <p>Information that defines a state of a detector.</p>
 */
export interface State {
  __type?: "State";
  /**
   * <p>When entering this state, perform these <code>"actions"</code> if the
   *         <code>"condition"</code> is TRUE.</p>
   */
  onEnter?: OnEnterLifecycle;

  /**
   * <p>When exiting this state, perform these <code>"actions"</code> if the specified
   *         <code>"condition"</code> is TRUE.</p>
   */
  onExit?: OnExitLifecycle;

  /**
   * <p>When an input is received and the <code>"condition"</code> is TRUE, perform the
   *         specified <code>"actions"</code>.</p>
   */
  onInput?: OnInputLifecycle;

  /**
   * <p>The name of the state.</p>
   */
  stateName: string | undefined;
}

export namespace State {
  export const filterSensitiveLog = (obj: State): any => ({
    ...obj
  });
  export const isa = (o: any): o is State => __isa(o, "State");
}

/**
 * <p>Metadata that can be used to manage the resource.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The tag's key.</p>
   */
  key: string | undefined;

  /**
   * <p>The tag's value.</p>
   */
  value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The new or modified tags for the resource.</p>
   */
  tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagResourceRequest =>
    __isa(o, "TagResourceRequest");
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagResourceResponse =>
    __isa(o, "TagResourceResponse");
}

/**
 * <p>The request could not be completed due to throttling.</p>
 */
export interface ThrottlingException
  extends __SmithyException,
    $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ThrottlingException =>
    __isa(o, "ThrottlingException");
}

/**
 * <p>Specifies the actions performed and the next state entered when a <code>"condition"</code>
 *         evaluates to TRUE.</p>
 */
export interface TransitionEvent {
  __type?: "TransitionEvent";
  /**
   * <p>The actions to be performed.</p>
   */
  actions?: Action[];

  /**
   * <p>[Required] A Boolean expression that when TRUE causes the actions to be performed and
   *         the <code>"nextState"</code> to be entered.</p>
   */
  condition: string | undefined;

  /**
   * <p>The name of the transition event.</p>
   */
  eventName: string | undefined;

  /**
   * <p>The next state to enter.</p>
   */
  nextState: string | undefined;
}

export namespace TransitionEvent {
  export const filterSensitiveLog = (obj: TransitionEvent): any => ({
    ...obj
  });
  export const isa = (o: any): o is TransitionEvent =>
    __isa(o, "TransitionEvent");
}

/**
 * <p>The requested operation is not supported.</p>
 */
export interface UnsupportedOperationException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnsupportedOperationException";
  $fault: "server";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace UnsupportedOperationException {
  export const filterSensitiveLog = (
    obj: UnsupportedOperationException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnsupportedOperationException =>
    __isa(o, "UnsupportedOperationException");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of the keys of the tags to be removed from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceRequest =>
    __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceResponse =>
    __isa(o, "UntagResourceResponse");
}

export interface UpdateDetectorModelRequest {
  __type?: "UpdateDetectorModelRequest";
  /**
   * <p>Information that defines how a detector operates.</p>
   */
  detectorModelDefinition: DetectorModelDefinition | undefined;

  /**
   * <p>A brief description of the detector model.</p>
   */
  detectorModelDescription?: string;

  /**
   * <p>The name of the detector model that is updated.</p>
   */
  detectorModelName: string | undefined;

  /**
   * <p>Information about the order in which events are evaluated and how actions are
   *       executed. </p>
   */
  evaluationMethod?: EvaluationMethod | string;

  /**
   * <p>The ARN of the role that grants permission to AWS IoT Events to perform its operations.</p>
   */
  roleArn: string | undefined;
}

export namespace UpdateDetectorModelRequest {
  export const filterSensitiveLog = (obj: UpdateDetectorModelRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDetectorModelRequest =>
    __isa(o, "UpdateDetectorModelRequest");
}

export interface UpdateDetectorModelResponse {
  __type?: "UpdateDetectorModelResponse";
  /**
   * <p>Information about how the detector model is configured.</p>
   */
  detectorModelConfiguration?: DetectorModelConfiguration;
}

export namespace UpdateDetectorModelResponse {
  export const filterSensitiveLog = (
    obj: UpdateDetectorModelResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDetectorModelResponse =>
    __isa(o, "UpdateDetectorModelResponse");
}

export interface UpdateInputRequest {
  __type?: "UpdateInputRequest";
  /**
   * <p>The definition of the input.</p>
   */
  inputDefinition: InputDefinition | undefined;

  /**
   * <p>A brief description of the input.</p>
   */
  inputDescription?: string;

  /**
   * <p>The name of the input you want to update.</p>
   */
  inputName: string | undefined;
}

export namespace UpdateInputRequest {
  export const filterSensitiveLog = (obj: UpdateInputRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateInputRequest =>
    __isa(o, "UpdateInputRequest");
}

export interface UpdateInputResponse {
  __type?: "UpdateInputResponse";
  /**
   * <p>Information about the configuration of the input.</p>
   */
  inputConfiguration?: InputConfiguration;
}

export namespace UpdateInputResponse {
  export const filterSensitiveLog = (obj: UpdateInputResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateInputResponse =>
    __isa(o, "UpdateInputResponse");
}
