import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The RetrieveDomainAuthCode response includes the following element.</p>
 */
export interface RetrieveDomainAuthCodeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The authorization code for the domain.</p>
   */
  AuthCode: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
