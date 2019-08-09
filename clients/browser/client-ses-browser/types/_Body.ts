import { _Content, _UnmarshalledContent } from "./_Content";

/**
 * <p>Represents the body of the message. You can specify text, HTML, or both. If you use both, then the message should display correctly in the widest variety of email clients.</p>
 */
export interface _Body {
  /**
   * <p>The content of the message, in text format. Use this for text-based email clients, or clients on high-latency networks (such as mobile devices).</p>
   */
  Text?: _Content;

  /**
   * <p>The content of the message, in HTML format. Use this for email clients that can process HTML. You can include clickable links, formatted text, and much more in an HTML message.</p>
   */
  Html?: _Content;
}

export interface _UnmarshalledBody extends _Body {
  /**
   * <p>The content of the message, in text format. Use this for text-based email clients, or clients on high-latency networks (such as mobile devices).</p>
   */
  Text?: _UnmarshalledContent;

  /**
   * <p>The content of the message, in HTML format. Use this for email clients that can process HTML. You can include clickable links, formatted text, and much more in an HTML message.</p>
   */
  Html?: _UnmarshalledContent;
}
