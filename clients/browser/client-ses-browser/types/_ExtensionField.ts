/**
 * <p>Additional X-headers to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p>
 */
export interface _ExtensionField {
  /**
   * <p>The name of the header to add. Must be between 1 and 50 characters, inclusive, and consist of alphanumeric (a-z, A-Z, 0-9) characters and dashes only.</p>
   */
  Name: string;

  /**
   * <p>The value of the header to add. Must be less than 2048 characters, and must not contain newline characters ("\r" or "\n").</p>
   */
  Value: string;
}

export type _UnmarshalledExtensionField = _ExtensionField;
