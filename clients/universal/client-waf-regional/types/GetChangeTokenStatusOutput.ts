import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetChangeTokenStatusOutput shape
 */
export interface GetChangeTokenStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status of the change token.</p>
   */
  ChangeTokenStatus?: "PROVISIONED" | "PENDING" | "INSYNC" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
