import { _UnmarshalledEventDescription } from "./_EventDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Result message wrapping a list of event descriptions.</p>
 */
export interface DescribeEventsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> A list of <a>EventDescription</a>. </p>
   */
  Events?: Array<_UnmarshalledEventDescription>;

  /**
   * <p> If returned, this indicates that there are more results to obtain. Use this token in the next <a>DescribeEvents</a> call to get the next batch of events. </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
