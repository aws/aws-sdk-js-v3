import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Response from Cognito for a signing certificate request.</p>
 */
export interface GetSigningCertificateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The signing certificate.</p>
   */
  Certificate?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
