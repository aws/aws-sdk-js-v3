import { _UnmarshalledCancelStepsInfo } from "./_CancelStepsInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> The output for the <a>CancelSteps</a> operation. </p>
 */
export interface CancelStepsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <a>CancelStepsInfo</a>, which shows the status of specified cancel requests for each <code>StepID</code> specified.</p>
   */
  CancelStepsInfoList?: Array<_UnmarshalledCancelStepsInfo>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
