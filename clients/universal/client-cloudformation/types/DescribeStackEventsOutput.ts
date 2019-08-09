import { _UnmarshalledStackEvent } from "./_StackEvent";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output for a <a>DescribeStackEvents</a> action.</p>
 */
export interface DescribeStackEventsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <code>StackEvents</code> structures.</p>
   */
  StackEvents?: Array<_UnmarshalledStackEvent>;

  /**
   * <p>If the output exceeds 1 MB in size, a string that identifies the next page of events. If no additional page exists, this value is null.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
