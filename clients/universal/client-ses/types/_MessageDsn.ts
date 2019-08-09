import {
  _ExtensionField,
  _UnmarshalledExtensionField
} from "./_ExtensionField";

/**
 * <p>Message-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p>
 */
export interface _MessageDsn {
  /**
   * <p>The reporting MTA that attempted to deliver the message, formatted as specified in <a href="https://tools.ietf.org/html/rfc3464">RFC 3464</a> (<code>mta-name-type; mta-name</code>). The default value is <code>dns; inbound-smtp.[region].amazonaws.com</code>.</p>
   */
  ReportingMta: string;

  /**
   * <p>When the message was received by the reporting mail transfer agent (MTA), in <a href="https://www.ietf.org/rfc/rfc0822.txt">RFC 822</a> date-time format.</p>
   */
  ArrivalDate?: Date | string | number;

  /**
   * <p>Additional X-headers to include in the DSN.</p>
   */
  ExtensionFields?: Array<_ExtensionField> | Iterable<_ExtensionField>;
}

export interface _UnmarshalledMessageDsn extends _MessageDsn {
  /**
   * <p>When the message was received by the reporting mail transfer agent (MTA), in <a href="https://www.ietf.org/rfc/rfc0822.txt">RFC 822</a> date-time format.</p>
   */
  ArrivalDate?: Date;

  /**
   * <p>Additional X-headers to include in the DSN.</p>
   */
  ExtensionFields?: Array<_UnmarshalledExtensionField>;
}
