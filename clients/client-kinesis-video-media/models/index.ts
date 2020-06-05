import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
import { Readable } from "stream";

/**
 * <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of
 *       allowed client calls. Try making the call later.</p>
 */
export interface ClientLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ClientLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ClientLimitExceededException {
  export const filterSensitiveLog = (
    obj: ClientLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClientLimitExceededException =>
    __isa(o, "ClientLimitExceededException");
}

/**
 * <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of
 *       allowed client connections.</p>
 */
export interface ConnectionLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ConnectionLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ConnectionLimitExceededException {
  export const filterSensitiveLog = (
    obj: ConnectionLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConnectionLimitExceededException =>
    __isa(o, "ConnectionLimitExceededException");
}

export interface GetMediaInput {
  __type?: "GetMediaInput";
  /**
   * <p>Identifies the starting chunk to get from the specified stream. </p>
   */
  StartSelector: StartSelector | undefined;

  /**
   * <p>The ARN of the stream from where you want to get the media content. If you don't
   *       specify the <code>streamARN</code>, you must specify the <code>streamName</code>.</p>
   */
  StreamARN?: string;

  /**
   * <p>The Kinesis video stream name from where you want to get the media content. If you
   *       don't specify the <code>streamName</code>, you must specify the
   *       <code>streamARN</code>.</p>
   */
  StreamName?: string;
}

export namespace GetMediaInput {
  export const filterSensitiveLog = (obj: GetMediaInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMediaInput => __isa(o, "GetMediaInput");
}

export interface GetMediaOutput {
  __type?: "GetMediaOutput";
  /**
   * <p>The content type of the requested media.</p>
   */
  ContentType?: string;

  /**
   * <p> The payload Kinesis Video Streams returns is a sequence of chunks from the specified
   *       stream. For information about the chunks, see . The
   *       chunks that Kinesis Video Streams returns in the <code>GetMedia</code> call also include the
   *       following additional Matroska (MKV) tags: </p>
   *          <ul>
   *             <li>
   *                <p>AWS_KINESISVIDEO_CONTINUATION_TOKEN (UTF-8 string) - In the event your
   *             <code>GetMedia</code> call terminates, you can use this continuation token in your next
   *           request to get the next chunk where the last request terminated.</p>
   *             </li>
   *             <li>
   *                <p>AWS_KINESISVIDEO_MILLIS_BEHIND_NOW (UTF-8 string) - Client applications can use
   *           this tag value to determine how far behind the chunk returned in the response is from the
   *           latest chunk on the stream. </p>
   *             </li>
   *             <li>
   *                <p>AWS_KINESISVIDEO_FRAGMENT_NUMBER - Fragment number returned in the chunk.</p>
   *             </li>
   *             <li>
   *                <p>AWS_KINESISVIDEO_SERVER_TIMESTAMP - Server timestamp of the fragment.</p>
   *             </li>
   *             <li>
   *                <p>AWS_KINESISVIDEO_PRODUCER_TIMESTAMP - Producer timestamp of the fragment.</p>
   *             </li>
   *          </ul>
   *          <p>The following tags will be present if an error occurs:</p>
   *          <ul>
   *             <li>
   *                <p>AWS_KINESISVIDEO_ERROR_CODE - String description of an error that caused GetMedia
   *           to stop.</p>
   *             </li>
   *             <li>
   *                <p>AWS_KINESISVIDEO_ERROR_ID: Integer code of the error.</p>
   *             </li>
   *          </ul>
   *          <p>The error codes are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>3002 - Error writing to the stream</p>
   *             </li>
   *             <li>
   *                <p>4000 - Requested fragment is not found</p>
   *             </li>
   *             <li>
   *                <p>4500 - Access denied for the stream's KMS key</p>
   *             </li>
   *             <li>
   *                <p>4501 - Stream's KMS key is disabled</p>
   *             </li>
   *             <li>
   *                <p>4502 - Validation error on the stream's KMS key</p>
   *             </li>
   *             <li>
   *                <p>4503 - KMS key specified in the stream is unavailable</p>
   *             </li>
   *             <li>
   *                <p>4504 - Invalid usage of the KMS key specified in the stream</p>
   *             </li>
   *             <li>
   *                <p>4505 - Invalid state of the KMS key specified in the stream</p>
   *             </li>
   *             <li>
   *                <p>4506 - Unable to find the KMS key specified in the stream</p>
   *             </li>
   *             <li>
   *                <p>5000 - Internal error</p>
   *             </li>
   *          </ul>
   */
  Payload?: Readable | ReadableStream | Blob;
}

export namespace GetMediaOutput {
  export const filterSensitiveLog = (obj: GetMediaOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMediaOutput =>
    __isa(o, "GetMediaOutput");
}

/**
 * <p>The value for this input parameter is invalid.</p>
 */
export interface InvalidArgumentException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidArgumentException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidArgumentException {
  export const filterSensitiveLog = (obj: InvalidArgumentException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidArgumentException =>
    __isa(o, "InvalidArgumentException");
}

/**
 * <p> Status Code: 400, Caller used wrong endpoint to write data to a stream. On receiving
 *       such an exception, the user must call <code>GetDataEndpoint</code> with
 *         <code>AccessMode</code> set to "READ" and use the endpoint Kinesis Video returns in the next
 *         <code>GetMedia</code> call. </p>
 */
export interface InvalidEndpointException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidEndpointException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidEndpointException {
  export const filterSensitiveLog = (obj: InvalidEndpointException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidEndpointException =>
    __isa(o, "InvalidEndpointException");
}

/**
 * <p>Status Code: 403, The caller is not authorized to perform an operation on the given
 *       stream, or the token has expired.</p>
 */
export interface NotAuthorizedException
  extends __SmithyException,
    $MetadataBearer {
  name: "NotAuthorizedException";
  $fault: "client";
  Message?: string;
}

export namespace NotAuthorizedException {
  export const filterSensitiveLog = (obj: NotAuthorizedException): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotAuthorizedException =>
    __isa(o, "NotAuthorizedException");
}

/**
 * <p>Status Code: 404, The stream with the given name does not exist.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceNotFoundException =>
    __isa(o, "ResourceNotFoundException");
}

/**
 * <p>Identifies the chunk on the Kinesis video stream where you want the
 *         <code>GetMedia</code> API to start returning media data. You have the following options to
 *       identify the starting chunk: </p>
 *          <ul>
 *             <li>
 *                <p>Choose the latest (or oldest) chunk.</p>
 *             </li>
 *             <li>
 *                <p>Identify a specific chunk. You can identify a specific chunk either by providing a
 *           fragment number or timestamp (server or producer). </p>
 *             </li>
 *             <li>
 *                <p>Each chunk's metadata includes a continuation token as a Matroska (MKV) tag
 *             (<code>AWS_KINESISVIDEO_CONTINUATION_TOKEN</code>). If your previous
 *             <code>GetMedia</code> request terminated, you can use this tag value in your next
 *             <code>GetMedia</code> request. The API then starts returning chunks starting where the
 *           last API ended.</p>
 *             </li>
 *          </ul>
 */
export interface StartSelector {
  __type?: "StartSelector";
  /**
   * <p>Specifies the fragment number from where you want the <code>GetMedia</code> API to
   *       start returning the fragments. </p>
   */
  AfterFragmentNumber?: string;

  /**
   * <p>Continuation token that Kinesis Video Streams returned in the previous
   *         <code>GetMedia</code> response. The <code>GetMedia</code> API then starts with the chunk
   *       identified by the continuation token.</p>
   */
  ContinuationToken?: string;

  /**
   * <p>Identifies the fragment on the Kinesis video stream where you want to start getting the
   *       data from.</p>
   *          <ul>
   *             <li>
   *                <p>NOW - Start with the latest chunk on the stream.</p>
   *             </li>
   *             <li>
   *                <p>EARLIEST - Start with earliest available chunk on the stream.</p>
   *             </li>
   *             <li>
   *                <p>FRAGMENT_NUMBER - Start with the chunk after a specific fragment. You must also
   *           specify the <code>AfterFragmentNumber</code> parameter.</p>
   *             </li>
   *             <li>
   *                <p>PRODUCER_TIMESTAMP or SERVER_TIMESTAMP - Start with the chunk containing a fragment
   *           with the specified producer or server timestamp. You specify the timestamp by adding
   *             <code>StartTimestamp</code>.</p>
   *             </li>
   *             <li>
   *                <p> CONTINUATION_TOKEN - Read using the specified continuation token. </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>If you choose the NOW, EARLIEST, or CONTINUATION_TOKEN as the
   *           <code>startSelectorType</code>, you don't provide any additional information in the
   *           <code>startSelector</code>.</p>
   *          </note>
   */
  StartSelectorType: StartSelectorType | string | undefined;

  /**
   * <p>A timestamp value. This value is required if you choose the PRODUCER_TIMESTAMP or the
   *       SERVER_TIMESTAMP as the <code>startSelectorType</code>. The <code>GetMedia</code> API then
   *       starts with the chunk containing the fragment that has the specified timestamp.</p>
   */
  StartTimestamp?: Date;
}

export namespace StartSelector {
  export const filterSensitiveLog = (obj: StartSelector): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartSelector => __isa(o, "StartSelector");
}

export enum StartSelectorType {
  CONTINUATION_TOKEN = "CONTINUATION_TOKEN",
  EARLIEST = "EARLIEST",
  FRAGMENT_NUMBER = "FRAGMENT_NUMBER",
  NOW = "NOW",
  PRODUCER_TIMESTAMP = "PRODUCER_TIMESTAMP",
  SERVER_TIMESTAMP = "SERVER_TIMESTAMP"
}
