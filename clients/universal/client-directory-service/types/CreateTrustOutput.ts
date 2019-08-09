import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a CreateTrust request.</p>
 */
export interface CreateTrustOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A unique identifier for the trust relationship that was created.</p>
   */
  TrustId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
