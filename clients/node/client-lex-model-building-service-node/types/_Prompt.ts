import { _Message, _UnmarshalledMessage } from "./_Message";

/**
 * <p>Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>.</p>
 */
export interface _Prompt {
  /**
   * <p>An array of objects, each of which provides a message string and its type. You can specify the message string in plain text or in Speech Synthesis Markup Language (SSML).</p>
   */
  messages: Array<_Message> | Iterable<_Message>;

  /**
   * <p>The number of times to prompt the user for information.</p>
   */
  maxAttempts: number;

  /**
   * <p>A response card. Amazon Lex uses this prompt at runtime, in the <code>PostText</code> API response. It substitutes session attributes and slot values for placeholders in the response card. For more information, see <a>ex-resp-card</a>. </p>
   */
  responseCard?: string;
}

export interface _UnmarshalledPrompt extends _Prompt {
  /**
   * <p>An array of objects, each of which provides a message string and its type. You can specify the message string in plain text or in Speech Synthesis Markup Language (SSML).</p>
   */
  messages: Array<_UnmarshalledMessage>;
}
