import { _UnmarshalledDkimAttributes } from "./_DkimAttributes";
import { _UnmarshalledMailFromAttributes } from "./_MailFromAttributes";
import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Details about an email identity.</p>
 */
export interface GetEmailIdentityOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The email identity type.</p>
   */
  IdentityType?: "EMAIL_ADDRESS" | "DOMAIN" | "MANAGED_DOMAIN" | string;

  /**
   * <p>The feedback forwarding configuration for the identity.</p> <p>If the value is <code>true</code>, Amazon Pinpoint sends you email notifications when bounce or complaint events occur. Amazon Pinpoint sends this notification to the address that you specified in the Return-Path header of the original email.</p> <p>When you set this value to <code>false</code>, Amazon Pinpoint sends notifications through other mechanisms, such as by notifying an Amazon SNS topic or another event destination. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events occur (even if this setting is disabled).</p>
   */
  FeedbackForwardingStatus?: boolean;

  /**
   * <p>Specifies whether or not the identity is verified. In Amazon Pinpoint, you can only send email from verified email addresses or domains. For more information about verifying identities, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-email-manage-verify.html">Amazon Pinpoint User Guide</a>.</p>
   */
  VerifiedForSendingStatus?: boolean;

  /**
   * <p>An object that contains information about the DKIM attributes for the identity. This object includes the tokens that you use to create the CNAME records that are required to complete the DKIM verification process.</p>
   */
  DkimAttributes?: _UnmarshalledDkimAttributes;

  /**
   * <p>An object that contains information about the Mail-From attributes for the email identity.</p>
   */
  MailFromAttributes?: _UnmarshalledMailFromAttributes;

  /**
   * <p>An array of objects that define the tags (keys and values) that are associated with the email identity.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
