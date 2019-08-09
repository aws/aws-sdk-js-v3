import { _UnmarshalledStackSummary } from "./_StackSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output for <a>ListStacks</a> action.</p>
 */
export interface ListStacksOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <code>StackSummary</code> structures containing information about the specified stacks.</p>
   */
  StackSummaries?: Array<_UnmarshalledStackSummary>;

  /**
   * <p>If the output exceeds 1 MB in size, a string that identifies the next page of stacks. If no additional page exists, this value is null.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
