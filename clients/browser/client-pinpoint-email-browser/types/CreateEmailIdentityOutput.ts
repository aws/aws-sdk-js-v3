import { _UnmarshalledDkimAttributes } from "./_DkimAttributes";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>If the email identity is a domain, this object contains tokens that you can use to create a set of CNAME records. To sucessfully verify your domain, you have to add these records to the DNS configuration for your domain.</p> <p>If the email identity is an email address, this object is empty. </p>
 */
export interface CreateEmailIdentityOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The email identity type.</p>
   */
  IdentityType?: "EMAIL_ADDRESS" | "DOMAIN" | "MANAGED_DOMAIN" | string;

  /**
   * <p>Specifies whether or not the identity is verified. In Amazon Pinpoint, you can only send email from verified email addresses or domains. For more information about verifying identities, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-email-manage-verify.html">Amazon Pinpoint User Guide</a>.</p>
   */
  VerifiedForSendingStatus?: boolean;

  /**
   * <p>An object that contains information about the DKIM attributes for the identity. This object includes the tokens that you use to create the CNAME records that are required to complete the DKIM verification process.</p>
   */
  DkimAttributes?: _UnmarshalledDkimAttributes;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
