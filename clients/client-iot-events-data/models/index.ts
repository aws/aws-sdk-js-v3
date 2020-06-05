import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Contains information about the errors encountered.</p>
 */
export interface BatchPutMessageErrorEntry {
  __type?: "BatchPutMessageErrorEntry";
  /**
   * <p>The code associated with the error.</p>
   */
  errorCode?: ErrorCode | string;

  /**
   * <p>More information about the error.</p>
   */
  errorMessage?: string;

  /**
   * <p>The ID of the message that caused the error. (See the value corresponding to the
   *           <code>"messageId"</code> key in the <code>"message"</code> object.)</p>
   */
  messageId?: string;
}

export namespace BatchPutMessageErrorEntry {
  export const filterSensitiveLog = (obj: BatchPutMessageErrorEntry): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchPutMessageErrorEntry =>
    __isa(o, "BatchPutMessageErrorEntry");
}

export interface BatchPutMessageRequest {
  __type?: "BatchPutMessageRequest";
  /**
   * <p>The list of messages to send. Each message has the following format:
   *           <code>'{ "messageId": "string", "inputName": "string", "payload": "string"}'</code>
   *          </p>
   */
  messages: Message[] | undefined;
}

export namespace BatchPutMessageRequest {
  export const filterSensitiveLog = (obj: BatchPutMessageRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchPutMessageRequest =>
    __isa(o, "BatchPutMessageRequest");
}

export interface BatchPutMessageResponse {
  __type?: "BatchPutMessageResponse";
  /**
   * <p>A list of any errors encountered when sending the messages.</p>
   */
  BatchPutMessageErrorEntries?: BatchPutMessageErrorEntry[];
}

export namespace BatchPutMessageResponse {
  export const filterSensitiveLog = (obj: BatchPutMessageResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchPutMessageResponse =>
    __isa(o, "BatchPutMessageResponse");
}

/**
 * <p>Information about the error that occured when attempting to update a detector.</p>
 */
export interface BatchUpdateDetectorErrorEntry {
  __type?: "BatchUpdateDetectorErrorEntry";
  /**
   * <p>The code of the error.</p>
   */
  errorCode?: ErrorCode | string;

  /**
   * <p>A message describing the error.</p>
   */
  errorMessage?: string;

  /**
   * <p>The <code>"messageId"</code> of the update request that caused the error. (The value of the
   *        <code>"messageId"</code> in the update request <code>"Detector"</code> object.)</p>
   */
  messageId?: string;
}

export namespace BatchUpdateDetectorErrorEntry {
  export const filterSensitiveLog = (
    obj: BatchUpdateDetectorErrorEntry
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchUpdateDetectorErrorEntry =>
    __isa(o, "BatchUpdateDetectorErrorEntry");
}

export interface BatchUpdateDetectorRequest {
  __type?: "BatchUpdateDetectorRequest";
  /**
   * <p>The list of detectors (instances) to update, along with the values to update.</p>
   */
  detectors: UpdateDetectorRequest[] | undefined;
}

export namespace BatchUpdateDetectorRequest {
  export const filterSensitiveLog = (obj: BatchUpdateDetectorRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchUpdateDetectorRequest =>
    __isa(o, "BatchUpdateDetectorRequest");
}

export interface BatchUpdateDetectorResponse {
  __type?: "BatchUpdateDetectorResponse";
  /**
   * <p>A list of those detector updates that resulted in errors. (If an error is listed here, the
   *         specific update did not occur.)</p>
   */
  batchUpdateDetectorErrorEntries?: BatchUpdateDetectorErrorEntry[];
}

export namespace BatchUpdateDetectorResponse {
  export const filterSensitiveLog = (
    obj: BatchUpdateDetectorResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchUpdateDetectorResponse =>
    __isa(o, "BatchUpdateDetectorResponse");
}

export interface DescribeDetectorRequest {
  __type?: "DescribeDetectorRequest";
  /**
   * <p>The name of the detector model whose detectors (instances) you want information about.</p>
   */
  detectorModelName: string | undefined;

  /**
   * <p>A filter used to limit results to detectors (instances) created because of the given key ID.</p>
   */
  keyValue?: string;
}

export namespace DescribeDetectorRequest {
  export const filterSensitiveLog = (obj: DescribeDetectorRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDetectorRequest =>
    __isa(o, "DescribeDetectorRequest");
}

export interface DescribeDetectorResponse {
  __type?: "DescribeDetectorResponse";
  /**
   * <p>Information about the detector (instance).</p>
   */
  detector?: Detector;
}

export namespace DescribeDetectorResponse {
  export const filterSensitiveLog = (obj: DescribeDetectorResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDetectorResponse =>
    __isa(o, "DescribeDetectorResponse");
}

/**
 * <p>Information about the detector (instance).</p>
 */
export interface Detector {
  __type?: "Detector";
  /**
   * <p>The time the detector (instance) was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The name of the detector model that created this detector (instance).</p>
   */
  detectorModelName?: string;

  /**
   * <p>The version of the detector model that created this detector (instance).</p>
   */
  detectorModelVersion?: string;

  /**
   * <p>The value of the key (identifying the device or system) that caused the creation of this
   *         detector (instance).</p>
   */
  keyValue?: string;

  /**
   * <p>The time the detector (instance) was last updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>The current state of the detector (instance).</p>
   */
  state?: DetectorState;
}

export namespace Detector {
  export const filterSensitiveLog = (obj: Detector): any => ({
    ...obj
  });
  export const isa = (o: any): o is Detector => __isa(o, "Detector");
}

/**
 * <p>Information about the current state of the detector instance.</p>
 */
export interface DetectorState {
  __type?: "DetectorState";
  /**
   * <p>The name of the state.</p>
   */
  stateName: string | undefined;

  /**
   * <p>The current state of the detector's timers.</p>
   */
  timers: Timer[] | undefined;

  /**
   * <p>The current values of the detector's variables.</p>
   */
  variables: Variable[] | undefined;
}

export namespace DetectorState {
  export const filterSensitiveLog = (obj: DetectorState): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetectorState => __isa(o, "DetectorState");
}

/**
 * <p>The new state, variable values, and timer settings of the detector (instance).</p>
 */
export interface DetectorStateDefinition {
  __type?: "DetectorStateDefinition";
  /**
   * <p>The name of the new state of the detector (instance).</p>
   */
  stateName: string | undefined;

  /**
   * <p>The new values of the detector's timers. Any timer whose value isn't specified is
   *        cleared, and its timeout event won't occur.</p>
   */
  timers: TimerDefinition[] | undefined;

  /**
   * <p>The new values of the detector's variables. Any variable whose value isn't specified is cleared.</p>
   */
  variables: VariableDefinition[] | undefined;
}

export namespace DetectorStateDefinition {
  export const filterSensitiveLog = (obj: DetectorStateDefinition): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetectorStateDefinition =>
    __isa(o, "DetectorStateDefinition");
}

/**
 * <p>Information about the detector state.</p>
 */
export interface DetectorStateSummary {
  __type?: "DetectorStateSummary";
  /**
   * <p>The name of the state.</p>
   */
  stateName?: string;
}

export namespace DetectorStateSummary {
  export const filterSensitiveLog = (obj: DetectorStateSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetectorStateSummary =>
    __isa(o, "DetectorStateSummary");
}

/**
 * <p>Information about the detector (instance).</p>
 */
export interface DetectorSummary {
  __type?: "DetectorSummary";
  /**
   * <p>The time the detector (instance) was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The name of the detector model that created this detector (instance).</p>
   */
  detectorModelName?: string;

  /**
   * <p>The version of the detector model that created this detector (instance).</p>
   */
  detectorModelVersion?: string;

  /**
   * <p>The value of the key (identifying the device or system) that caused the creation of this
   *         detector (instance).</p>
   */
  keyValue?: string;

  /**
   * <p>The time the detector (instance) was last updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>The current state of the detector (instance).</p>
   */
  state?: DetectorStateSummary;
}

export namespace DetectorSummary {
  export const filterSensitiveLog = (obj: DetectorSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetectorSummary =>
    __isa(o, "DetectorSummary");
}

export enum ErrorCode {
  InternalFailureException = "InternalFailureException",
  InvalidRequestException = "InvalidRequestException",
  ResourceNotFoundException = "ResourceNotFoundException",
  ServiceUnavailableException = "ServiceUnavailableException",
  ThrottlingException = "ThrottlingException"
}

/**
 * <p>An internal failure occured.</p>
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

export interface ListDetectorsRequest {
  __type?: "ListDetectorsRequest";
  /**
   * <p>The name of the detector model whose detectors (instances) are listed.</p>
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

  /**
   * <p>A filter that limits results to those detectors (instances) in the given state.</p>
   */
  stateName?: string;
}

export namespace ListDetectorsRequest {
  export const filterSensitiveLog = (obj: ListDetectorsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDetectorsRequest =>
    __isa(o, "ListDetectorsRequest");
}

export interface ListDetectorsResponse {
  __type?: "ListDetectorsResponse";
  /**
   * <p>A list of summary information about the detectors (instances).</p>
   */
  detectorSummaries?: DetectorSummary[];

  /**
   * <p>A token to retrieve the next set of results, or <code>null</code> if there are no additional
   *           results.</p>
   */
  nextToken?: string;
}

export namespace ListDetectorsResponse {
  export const filterSensitiveLog = (obj: ListDetectorsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDetectorsResponse =>
    __isa(o, "ListDetectorsResponse");
}

/**
 * <p>Information about a message.</p>
 */
export interface Message {
  __type?: "Message";
  /**
   * <p>The name of the input into which the message payload is transformed.</p>
   */
  inputName: string | undefined;

  /**
   * <p>The ID to assign to the message. Within each batch sent, each <code>"messageId"</code> must
   *         be unique.</p>
   */
  messageId: string | undefined;

  /**
   * <p>The payload of the message. This can be a JSON string or a Base-64-encoded string representing
   *           binary data (in which case you must decode it).</p>
   */
  payload: Uint8Array | undefined;
}

export namespace Message {
  export const filterSensitiveLog = (obj: Message): any => ({
    ...obj
  });
  export const isa = (o: any): o is Message => __isa(o, "Message");
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
 * <p>The current state of a timer.</p>
 */
export interface Timer {
  __type?: "Timer";
  /**
   * <p>The name of the timer.</p>
   */
  name: string | undefined;

  /**
   * <p>The number of seconds which have elapsed on the timer.</p>
   */
  timestamp: Date | undefined;
}

export namespace Timer {
  export const filterSensitiveLog = (obj: Timer): any => ({
    ...obj
  });
  export const isa = (o: any): o is Timer => __isa(o, "Timer");
}

/**
 * <p>The new setting of a timer.</p>
 */
export interface TimerDefinition {
  __type?: "TimerDefinition";
  /**
   * <p>The name of the timer.</p>
   */
  name: string | undefined;

  /**
   * <p>The new setting of the timer (the number of seconds before the timer elapses).</p>
   */
  seconds: number | undefined;
}

export namespace TimerDefinition {
  export const filterSensitiveLog = (obj: TimerDefinition): any => ({
    ...obj
  });
  export const isa = (o: any): o is TimerDefinition =>
    __isa(o, "TimerDefinition");
}

/**
 * <p>Information used to update the detector (instance).</p>
 */
export interface UpdateDetectorRequest {
  __type?: "UpdateDetectorRequest";
  /**
   * <p>The name of the detector model that created the detectors (instances).</p>
   */
  detectorModelName: string | undefined;

  /**
   * <p>The value of the input key attribute (identifying the device or system) that caused the creation
   *        of this detector (instance).</p>
   */
  keyValue?: string;

  /**
   * <p>The ID to assign to the detector update <code>"message"</code>. Each <code>"messageId"</code>
   *        must be unique within each batch sent.</p>
   */
  messageId: string | undefined;

  /**
   * <p>The new state, variable values, and timer settings of the detector (instance).</p>
   */
  state: DetectorStateDefinition | undefined;
}

export namespace UpdateDetectorRequest {
  export const filterSensitiveLog = (obj: UpdateDetectorRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDetectorRequest =>
    __isa(o, "UpdateDetectorRequest");
}

/**
 * <p>The current state of the variable.</p>
 */
export interface Variable {
  __type?: "Variable";
  /**
   * <p>The name of the variable.</p>
   */
  name: string | undefined;

  /**
   * <p>The current value of the variable.</p>
   */
  value: string | undefined;
}

export namespace Variable {
  export const filterSensitiveLog = (obj: Variable): any => ({
    ...obj
  });
  export const isa = (o: any): o is Variable => __isa(o, "Variable");
}

/**
 * <p>The new value of the variable.</p>
 */
export interface VariableDefinition {
  __type?: "VariableDefinition";
  /**
   * <p>The name of the variable.</p>
   */
  name: string | undefined;

  /**
   * <p>The new value of the variable.</p>
   */
  value: string | undefined;
}

export namespace VariableDefinition {
  export const filterSensitiveLog = (obj: VariableDefinition): any => ({
    ...obj
  });
  export const isa = (o: any): o is VariableDefinition =>
    __isa(o, "VariableDefinition");
}
