import { _UnmarshalledAutomationExecution } from "./_AutomationExecution";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetAutomationExecutionOutput shape
 */
export interface GetAutomationExecutionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Detailed information about the current state of an automation execution.</p>
   */
  AutomationExecution?: _UnmarshalledAutomationExecution;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
