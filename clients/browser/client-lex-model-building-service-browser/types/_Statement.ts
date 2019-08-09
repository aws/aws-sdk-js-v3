import { _Message, _UnmarshalledMessage } from "./_Message";

/**
 * <p>A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. </p>
 */
export interface _Statement {
  /**
   * <p>A collection of message objects.</p>
   */
  messages: Array<_Message> | Iterable<_Message>;

  /**
   * <p> At runtime, if the client is using the <a href="http://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html">PostText</a> API, Amazon Lex includes the response card in the response. It substitutes all of the session attributes and slot values for placeholders in the response card. </p>
   */
  responseCard?: string;
}

export interface _UnmarshalledStatement extends _Statement {
  /**
   * <p>A collection of message objects.</p>
   */
  messages: Array<_UnmarshalledMessage>;
}
