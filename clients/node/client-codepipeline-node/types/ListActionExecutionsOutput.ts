import { _UnmarshalledActionExecutionDetail } from "./_ActionExecutionDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListActionExecutionsOutput shape
 */
export interface ListActionExecutionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The details for a list of recent executions, such as action execution ID.</p>
   */
  actionExecutionDetails?: Array<_UnmarshalledActionExecutionDetail>;

  /**
   * <p>If the amount of returned information is significantly large, an identifier is also returned and can be used in a subsequent <code>ListActionExecutions</code> call to return the next set of action executions in the list.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
