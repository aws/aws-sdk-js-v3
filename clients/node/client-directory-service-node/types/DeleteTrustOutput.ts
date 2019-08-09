import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a DeleteTrust request.</p>
 */
export interface DeleteTrustOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Trust ID of the trust relationship that was deleted.</p>
   */
  TrustId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
