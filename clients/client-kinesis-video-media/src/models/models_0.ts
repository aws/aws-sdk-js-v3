// smithy-typescript generated code
import type { StreamingBlobTypes } from "@smithy/types";

import type { StartSelectorType } from "./enums";

/**
 * Identifies the chunk on the Kinesis video stream where you want the `GetMedia` API to start returning media data. You have the following options to identify the starting chunk:
 *
 * - Choose the latest (or oldest) chunk.
 * - Identify a specific chunk. You can identify a specific chunk either by providing a fragment number or timestamp (server or producer).
 * - Each chunk's metadata includes a continuation token as a Matroska (MKV) tag (`AWS_KINESISVIDEO_CONTINUATION_TOKEN`). If your previous `GetMedia` request terminated, you can use this tag value in your next `GetMedia` request. The API then starts returning chunks starting where the last API ended.
 *
 * @public
 */
export interface StartSelector {
  /**
   * Identifies the fragment on the Kinesis video stream where you want to start getting the data from.
   *
   * - NOW - Start with the latest chunk on the stream.
   * - EARLIEST - Start with earliest available chunk on the stream.
   * - FRAGMENT_NUMBER - Start with the chunk after a specific fragment. You must also specify the `AfterFragmentNumber` parameter.
   * - PRODUCER_TIMESTAMP or SERVER_TIMESTAMP - Start with the chunk containing a fragment with the specified producer or server timestamp. You specify the timestamp by adding `StartTimestamp`.
   * - CONTINUATION_TOKEN - Read using the specified continuation token.
   *
   * > **Note:** If you choose the NOW, EARLIEST, or CONTINUATION_TOKEN as the `startSelectorType`, you don't provide any additional information in the `startSelector`.
   *
   * @public
   */
  StartSelectorType: StartSelectorType | undefined;

  /**
   * Specifies the fragment number from where you want the `GetMedia` API to start returning the fragments.
   *
   * @public
   */
  AfterFragmentNumber?: string | undefined;

  /**
   * A timestamp value. This value is required if you choose the PRODUCER_TIMESTAMP or the SERVER_TIMESTAMP as the `startSelectorType`. The `GetMedia` API then starts with the chunk containing the fragment that has the specified timestamp.
   *
   * @public
   */
  StartTimestamp?: Date | undefined;

  /**
   * Continuation token that Kinesis Video Streams returned in the previous `GetMedia` response. The `GetMedia` API then starts with the chunk identified by the continuation token.
   *
   * @public
   */
  ContinuationToken?: string | undefined;
}

/**
 * @public
 */
export interface GetMediaInput {
  /**
   * The Kinesis video stream name from where you want to get the media content. If you don't specify the `streamName`, you must specify the `streamARN`.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The ARN of the stream from where you want to get the media content. If you don't specify the `streamARN`, you must specify the `streamName`.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * Identifies the starting chunk to get from the specified stream.
   *
   * @public
   */
  StartSelector: StartSelector | undefined;
}

/**
 * @public
 */
export interface GetMediaOutput {
  /**
   * The content type of the requested media.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The payload Kinesis Video Streams returns is a sequence of chunks from the specified stream. For information about the chunks, see . The chunks that Kinesis Video Streams returns in the `GetMedia` call also include the following additional Matroska (MKV) tags:
   *
   * - AWS_KINESISVIDEO_CONTINUATION_TOKEN (UTF-8 string) - In the event your `GetMedia` call terminates, you can use this continuation token in your next request to get the next chunk where the last request terminated.
   * - AWS_KINESISVIDEO_MILLIS_BEHIND_NOW (UTF-8 string) - Client applications can use this tag value to determine how far behind the chunk returned in the response is from the latest chunk on the stream.
   * - AWS_KINESISVIDEO_FRAGMENT_NUMBER - Fragment number returned in the chunk.
   * - AWS_KINESISVIDEO_SERVER_TIMESTAMP - Server timestamp of the fragment.
   * - AWS_KINESISVIDEO_PRODUCER_TIMESTAMP - Producer timestamp of the fragment.
   *
   * The following tags will be present if an error occurs:
   *
   * - AWS_KINESISVIDEO_ERROR_CODE - String description of an error that caused GetMedia to stop.
   * - AWS_KINESISVIDEO_ERROR_ID: Integer code of the error.
   *
   * The error codes are as follows:
   *
   * - 3002 - Error writing to the stream
   * - 4000 - Requested fragment is not found
   * - 4500 - Access denied for the stream's KMS key
   * - 4501 - Stream's KMS key is disabled
   * - 4502 - Validation error on the stream's KMS key
   * - 4503 - KMS key specified in the stream is unavailable
   * - 4504 - Invalid usage of the KMS key specified in the stream
   * - 4505 - Invalid state of the KMS key specified in the stream
   * - 4506 - Unable to find the KMS key specified in the stream
   * - 5000 - Internal error
   *
   * @public
   */
  Payload?: StreamingBlobTypes | undefined;
}
