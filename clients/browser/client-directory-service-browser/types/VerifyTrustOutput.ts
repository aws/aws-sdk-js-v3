import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Result of a VerifyTrust request.</p>
 */
export interface VerifyTrustOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The unique Trust ID of the trust relationship that was verified.</p>
   */
  TrustId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
