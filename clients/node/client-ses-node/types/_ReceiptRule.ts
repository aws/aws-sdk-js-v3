import { _ReceiptAction, _UnmarshalledReceiptAction } from "./_ReceiptAction";

/**
 * <p>Receipt rules enable you to specify which actions Amazon SES should take when it receives mail on behalf of one or more email addresses or domains that you own.</p> <p>Each receipt rule defines a set of email addresses or domains that it applies to. If the email addresses or domains match at least one recipient address of the message, Amazon SES executes all of the receipt rule's actions on the message.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p>
 */
export interface _ReceiptRule {
  /**
   * <p>The name of the receipt rule. The name must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Start and end with a letter or number.</p> </li> <li> <p>Contain less than 64 characters.</p> </li> </ul>
   */
  Name: string;

  /**
   * <p>If <code>true</code>, the receipt rule is active. The default value is <code>false</code>.</p>
   */
  Enabled?: boolean;

  /**
   * <p>Specifies whether Amazon SES should require that incoming email is delivered over a connection encrypted with Transport Layer Security (TLS). If this parameter is set to <code>Require</code>, Amazon SES will bounce emails that are not received over TLS. The default is <code>Optional</code>.</p>
   */
  TlsPolicy?: "Require" | "Optional" | string;

  /**
   * <p>The recipient domains and email addresses that the receipt rule applies to. If this field is not specified, this rule will match all recipients under all verified domains.</p>
   */
  Recipients?: Array<string> | Iterable<string>;

  /**
   * <p>An ordered list of actions to perform on messages that match at least one of the recipient email addresses or domains specified in the receipt rule.</p>
   */
  Actions?: Array<_ReceiptAction> | Iterable<_ReceiptAction>;

  /**
   * <p>If <code>true</code>, then messages that this receipt rule applies to are scanned for spam and viruses. The default value is <code>false</code>.</p>
   */
  ScanEnabled?: boolean;
}

export interface _UnmarshalledReceiptRule extends _ReceiptRule {
  /**
   * <p>The recipient domains and email addresses that the receipt rule applies to. If this field is not specified, this rule will match all recipients under all verified domains.</p>
   */
  Recipients?: Array<string>;

  /**
   * <p>An ordered list of actions to perform on messages that match at least one of the recipient email addresses or domains specified in the receipt rule.</p>
   */
  Actions?: Array<_UnmarshalledReceiptAction>;
}
