import { _UnmarshalledDashboardValidationMessage } from "./_DashboardValidationMessage";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutDashboardOutput shape
 */
export interface PutDashboardOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If the input for <code>PutDashboard</code> was correct and the dashboard was successfully created or modified, this result is empty.</p> <p>If this result includes only warning messages, then the input was valid enough for the dashboard to be created or modified, but some elements of the dashboard may not render.</p> <p>If this result includes error messages, the input was not valid and the operation failed.</p>
   */
  DashboardValidationMessages?: Array<_UnmarshalledDashboardValidationMessage>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
