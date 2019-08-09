import {
  _ExtensionField,
  _UnmarshalledExtensionField
} from "./_ExtensionField";

/**
 * <p>Recipient-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p>
 */
export interface _RecipientDsnFields {
  /**
   * <p>The email address that the message was ultimately delivered to. This corresponds to the <code>Final-Recipient</code> in the DSN. If not specified, <code>FinalRecipient</code> will be set to the <code>Recipient</code> specified in the <code>BouncedRecipientInfo</code> structure. Either <code>FinalRecipient</code> or the recipient in <code>BouncedRecipientInfo</code> must be a recipient of the original bounced message.</p> <note> <p>Do not prepend the <code>FinalRecipient</code> email address with <code>rfc 822;</code>, as described in <a href="https://tools.ietf.org/html/rfc3798">RFC 3798</a>.</p> </note>
   */
  FinalRecipient?: string;

  /**
   * <p>The action performed by the reporting mail transfer agent (MTA) as a result of its attempt to deliver the message to the recipient address. This is required by <a href="https://tools.ietf.org/html/rfc3464">RFC 3464</a>.</p>
   */
  Action: "failed" | "delayed" | "delivered" | "relayed" | "expanded" | string;

  /**
   * <p>The MTA to which the remote MTA attempted to deliver the message, formatted as specified in <a href="https://tools.ietf.org/html/rfc3464">RFC 3464</a> (<code>mta-name-type; mta-name</code>). This parameter typically applies only to propagating synchronous bounces.</p>
   */
  RemoteMta?: string;

  /**
   * <p>The status code that indicates what went wrong. This is required by <a href="https://tools.ietf.org/html/rfc3464">RFC 3464</a>.</p>
   */
  Status: string;

  /**
   * <p>An extended explanation of what went wrong; this is usually an SMTP response. See <a href="https://tools.ietf.org/html/rfc3463">RFC 3463</a> for the correct formatting of this parameter.</p>
   */
  DiagnosticCode?: string;

  /**
   * <p>The time the final delivery attempt was made, in <a href="https://www.ietf.org/rfc/rfc0822.txt">RFC 822</a> date-time format.</p>
   */
  LastAttemptDate?: Date | string | number;

  /**
   * <p>Additional X-headers to include in the DSN.</p>
   */
  ExtensionFields?: Array<_ExtensionField> | Iterable<_ExtensionField>;
}

export interface _UnmarshalledRecipientDsnFields extends _RecipientDsnFields {
  /**
   * <p>The time the final delivery attempt was made, in <a href="https://www.ietf.org/rfc/rfc0822.txt">RFC 822</a> date-time format.</p>
   */
  LastAttemptDate?: Date;

  /**
   * <p>Additional X-headers to include in the DSN.</p>
   */
  ExtensionFields?: Array<_UnmarshalledExtensionField>;
}
