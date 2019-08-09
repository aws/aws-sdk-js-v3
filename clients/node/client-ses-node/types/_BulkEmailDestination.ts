import { _Destination, _UnmarshalledDestination } from "./_Destination";
import { _MessageTag, _UnmarshalledMessageTag } from "./_MessageTag";

/**
 * <p>An array that contains one or more Destinations, as well as the tags and replacement data associated with each of those Destinations.</p>
 */
export interface _BulkEmailDestination {
  /**
   * <p>Represents the destination of the message, consisting of To:, CC:, and BCC: fields.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a destination email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p> </note>
   */
  Destination: _Destination;

  /**
   * <p>A list of tags, in the form of name/value pairs, to apply to an email that you send using <code>SendBulkTemplatedEmail</code>. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.</p>
   */
  ReplacementTags?: Array<_MessageTag> | Iterable<_MessageTag>;

  /**
   * <p>A list of replacement values to apply to the template. This parameter is a JSON object, typically consisting of key-value pairs in which the keys correspond to replacement tags in the email template.</p>
   */
  ReplacementTemplateData?: string;
}

export interface _UnmarshalledBulkEmailDestination
  extends _BulkEmailDestination {
  /**
   * <p>Represents the destination of the message, consisting of To:, CC:, and BCC: fields.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a destination email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p> </note>
   */
  Destination: _UnmarshalledDestination;

  /**
   * <p>A list of tags, in the form of name/value pairs, to apply to an email that you send using <code>SendBulkTemplatedEmail</code>. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.</p>
   */
  ReplacementTags?: Array<_UnmarshalledMessageTag>;
}
