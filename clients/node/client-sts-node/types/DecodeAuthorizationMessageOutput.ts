import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A document that contains additional information about the authorization status of a request from an encoded message that is returned in response to an AWS request.</p>
 */
export interface DecodeAuthorizationMessageOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An XML document that contains the decoded message.</p>
   */
  DecodedMessage?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
