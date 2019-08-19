import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>GetSAMLProvider</a> request. </p>
 */
export interface GetSAMLProviderOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The XML metadata document that includes information about an identity provider.</p>
   */
  SAMLMetadataDocument?: string;

  /**
   * <p>The date and time when the SAML provider was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The expiration date and time for the SAML provider.</p>
   */
  ValidUntil?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
