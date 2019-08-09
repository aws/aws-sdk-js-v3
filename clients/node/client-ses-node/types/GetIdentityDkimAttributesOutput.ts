import { _UnmarshalledIdentityDkimAttributes } from "./_IdentityDkimAttributes";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the status of Amazon SES Easy DKIM signing for an identity. For domain identities, this response also contains the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES successfully verified that these tokens were published.</p>
 */
export interface GetIdentityDkimAttributesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The DKIM attributes for an email address or a domain.</p>
   */
  DkimAttributes: { [key: string]: _UnmarshalledIdentityDkimAttributes };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
