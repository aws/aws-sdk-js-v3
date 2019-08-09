import { _UnmarshalledIdentityMailFromDomainAttributes } from "./_IdentityMailFromDomainAttributes";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the custom MAIL FROM attributes for a list of identities.</p>
 */
export interface GetIdentityMailFromDomainAttributesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A map of identities to custom MAIL FROM attributes.</p>
   */
  MailFromDomainAttributes: {
    [key: string]: _UnmarshalledIdentityMailFromDomainAttributes;
  };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
