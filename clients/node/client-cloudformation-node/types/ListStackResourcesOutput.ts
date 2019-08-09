import { _UnmarshalledStackResourceSummary } from "./_StackResourceSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output for a <a>ListStackResources</a> action.</p>
 */
export interface ListStackResourcesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <code>StackResourceSummary</code> structures.</p>
   */
  StackResourceSummaries?: Array<_UnmarshalledStackResourceSummary>;

  /**
   * <p>If the output exceeds 1 MB, a string that identifies the next page of stack resources. If no additional page exists, this value is null.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
