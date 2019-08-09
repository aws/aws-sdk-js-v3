import {
  _GenericAttachment,
  _UnmarshalledGenericAttachment
} from "./_GenericAttachment";

/**
 * <p>If you configure a response card when creating your bots, Amazon Lex substitutes the session attributes and slot values that are available, and then returns it. The response card can also come from a Lambda function ( <code>dialogCodeHook</code> and <code>fulfillmentActivity</code> on an intent).</p>
 */
export interface _ResponseCard {
  /**
   * <p>The version of the response card format.</p>
   */
  version?: string;

  /**
   * <p>The content type of the response.</p>
   */
  contentType?: "application/vnd.amazonaws.card.generic" | string;

  /**
   * <p>An array of attachment objects representing options.</p>
   */
  genericAttachments?: Array<_GenericAttachment> | Iterable<_GenericAttachment>;
}

export interface _UnmarshalledResponseCard extends _ResponseCard {
  /**
   * <p>An array of attachment objects representing options.</p>
   */
  genericAttachments?: Array<_UnmarshalledGenericAttachment>;
}
