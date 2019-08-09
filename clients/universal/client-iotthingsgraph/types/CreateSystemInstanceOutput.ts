import { _UnmarshalledSystemInstanceSummary } from "./_SystemInstanceSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateSystemInstanceOutput shape
 */
export interface CreateSystemInstanceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The summary object that describes the new system instance.</p>
   */
  summary?: _UnmarshalledSystemInstanceSummary;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
