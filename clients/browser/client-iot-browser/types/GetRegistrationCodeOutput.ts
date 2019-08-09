import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output from the GetRegistrationCode operation.</p>
 */
export interface GetRegistrationCodeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The CA certificate registration code.</p>
   */
  registrationCode?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
