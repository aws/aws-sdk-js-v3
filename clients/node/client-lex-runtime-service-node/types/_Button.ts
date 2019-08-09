/**
 * <p>Represents an option to be shown on the client platform (Facebook, Slack, etc.)</p>
 */
export interface _Button {
  /**
   * <p>Text that is visible to the user on the button.</p>
   */
  text: string;

  /**
   * <p>The value sent to Amazon Lex when a user chooses the button. For example, consider button text "NYC." When the user chooses the button, the value sent can be "New York City."</p>
   */
  value: string;
}

export type _UnmarshalledButton = _Button;
