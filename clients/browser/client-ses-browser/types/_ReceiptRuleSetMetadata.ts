/**
 * <p>Information about a receipt rule set.</p> <p>A receipt rule set is a collection of rules that specify what Amazon SES should do with mail it receives on behalf of your account's verified domains.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p>
 */
export interface _ReceiptRuleSetMetadata {
  /**
   * <p>The name of the receipt rule set. The name must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Start and end with a letter or number.</p> </li> <li> <p>Contain less than 64 characters.</p> </li> </ul>
   */
  Name?: string;

  /**
   * <p>The date and time the receipt rule set was created.</p>
   */
  CreatedTimestamp?: Date | string | number;
}

export interface _UnmarshalledReceiptRuleSetMetadata
  extends _ReceiptRuleSetMetadata {
  /**
   * <p>The date and time the receipt rule set was created.</p>
   */
  CreatedTimestamp?: Date;
}
