import { _Content, _UnmarshalledContent } from "./_Content";

/**
 * <p>Represents the body of the email message.</p>
 */
export interface _Body {
  /**
   * <p>An object that represents the version of the message that is displayed in email clients that don't support HTML, or clients where the recipient has disabled HTML rendering.</p>
   */
  Text?: _Content;

  /**
   * <p>An object that represents the version of the message that is displayed in email clients that support HTML. HTML messages can include formatted text, hyperlinks, images, and more. </p>
   */
  Html?: _Content;
}

export interface _UnmarshalledBody extends _Body {
  /**
   * <p>An object that represents the version of the message that is displayed in email clients that don't support HTML, or clients where the recipient has disabled HTML rendering.</p>
   */
  Text?: _UnmarshalledContent;

  /**
   * <p>An object that represents the version of the message that is displayed in email clients that support HTML. HTML messages can include formatted text, hyperlinks, images, and more. </p>
   */
  Html?: _UnmarshalledContent;
}
