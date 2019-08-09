import { _UnmarshalledQueue } from "./_Queue";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListQueuesOutput shape
 */
export interface ListQueuesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * Use this string to request the next batch of queues.
   */
  NextToken?: string;

  /**
   * List of queues.
   */
  Queues?: Array<_UnmarshalledQueue>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
