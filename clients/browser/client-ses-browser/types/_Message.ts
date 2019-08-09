import { _Content, _UnmarshalledContent } from "./_Content";
import { _Body, _UnmarshalledBody } from "./_Body";

/**
 * <p>Represents the message to be sent, composed of a subject and a body.</p>
 */
export interface _Message {
  /**
   * <p>The subject of the message: A short summary of the content, which will appear in the recipient's inbox.</p>
   */
  Subject: _Content;

  /**
   * <p>The message body.</p>
   */
  Body: _Body;
}

export interface _UnmarshalledMessage extends _Message {
  /**
   * <p>The subject of the message: A short summary of the content, which will appear in the recipient's inbox.</p>
   */
  Subject: _UnmarshalledContent;

  /**
   * <p>The message body.</p>
   */
  Body: _UnmarshalledBody;
}
