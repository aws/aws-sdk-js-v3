import { _UnmarshalledAutomationExecutionMetadata } from "./_AutomationExecutionMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAutomationExecutionsOutput shape
 */
export interface DescribeAutomationExecutionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of details about each automation execution which has occurred which matches the filter specification, if any.</p>
   */
  AutomationExecutionMetadataList?: Array<
    _UnmarshalledAutomationExecutionMetadata
  >;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
