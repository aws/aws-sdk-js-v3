import { _UnmarshalledSystemInstanceSummary } from "./_SystemInstanceSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UndeploySystemInstanceOutput shape
 */
export interface UndeploySystemInstanceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object that contains summary information about the system instance that was removed from its target.</p>
   */
  summary?: _UnmarshalledSystemInstanceSummary;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
