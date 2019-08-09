import { _UnmarshalledQueue } from "./_Queue";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetQueueOutput shape
 */
export interface GetQueueOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
   */
  Queue?: _UnmarshalledQueue;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
