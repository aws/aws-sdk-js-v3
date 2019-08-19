/**
 * <p>Represents the destination of the message, consisting of To:, CC:, and BCC: fields.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a destination email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p> </note>
 */
export interface _Destination {
  /**
   * <p>The To: field(s) of the message.</p>
   */
  ToAddresses?: Array<string> | Iterable<string>;

  /**
   * <p>The CC: field(s) of the message.</p>
   */
  CcAddresses?: Array<string> | Iterable<string>;

  /**
   * <p>The BCC: field(s) of the message.</p>
   */
  BccAddresses?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledDestination extends _Destination {
  /**
   * <p>The To: field(s) of the message.</p>
   */
  ToAddresses?: Array<string>;

  /**
   * <p>The CC: field(s) of the message.</p>
   */
  CcAddresses?: Array<string>;

  /**
   * <p>The BCC: field(s) of the message.</p>
   */
  BccAddresses?: Array<string>;
}
