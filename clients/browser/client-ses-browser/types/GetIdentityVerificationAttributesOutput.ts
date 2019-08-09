import { _UnmarshalledIdentityVerificationAttributes } from "./_IdentityVerificationAttributes";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The Amazon SES verification status of a list of identities. For domain identities, this response also contains the verification token.</p>
 */
export interface GetIdentityVerificationAttributesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A map of Identities to IdentityVerificationAttributes objects.</p>
   */
  VerificationAttributes: {
    [key: string]: _UnmarshalledIdentityVerificationAttributes;
  };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
