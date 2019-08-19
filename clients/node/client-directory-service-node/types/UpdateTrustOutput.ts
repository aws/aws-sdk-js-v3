import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateTrustOutput shape
 */
export interface UpdateTrustOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;

  /**
   * <p>Identifier of the trust relationship.</p>
   */
  TrustId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
