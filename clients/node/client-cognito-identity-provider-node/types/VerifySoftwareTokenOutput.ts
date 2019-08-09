import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * VerifySoftwareTokenOutput shape
 */
export interface VerifySoftwareTokenOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status of the verify software token.</p>
   */
  Status?: "SUCCESS" | "ERROR" | string;

  /**
   * <p>The session which should be passed both ways in challenge-response calls to the service.</p>
   */
  Session?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
