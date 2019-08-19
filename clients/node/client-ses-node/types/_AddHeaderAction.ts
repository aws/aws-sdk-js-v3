/**
 * <p>When included in a receipt rule, this action adds a header to the received email.</p> <p>For information about adding a header using a receipt rule, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-add-header.html">Amazon SES Developer Guide</a>.</p>
 */
export interface _AddHeaderAction {
  /**
   * <p>The name of the header to add. Must be between 1 and 50 characters, inclusive, and consist of alphanumeric (a-z, A-Z, 0-9) characters and dashes only.</p>
   */
  HeaderName: string;

  /**
   * <p>Must be less than 2048 characters, and must not contain newline characters ("\r" or "\n").</p>
   */
  HeaderValue: string;
}

export type _UnmarshalledAddHeaderAction = _AddHeaderAction;
