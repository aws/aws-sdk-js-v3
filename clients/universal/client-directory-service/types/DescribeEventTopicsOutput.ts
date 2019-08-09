import { _UnmarshalledEventTopic } from "./_EventTopic";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a DescribeEventTopic request.</p>
 */
export interface DescribeEventTopicsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of SNS topic names that receive status messages from the specified Directory ID.</p>
   */
  EventTopics?: Array<_UnmarshalledEventTopic>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
