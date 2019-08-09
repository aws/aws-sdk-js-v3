import { _Prompt, _UnmarshalledPrompt } from "./_Prompt";
import { _Statement, _UnmarshalledStatement } from "./_Statement";

/**
 * <p>A prompt for additional activity after an intent is fulfilled. For example, after the <code>OrderPizza</code> intent is fulfilled, you might prompt the user to find out whether the user wants to order drinks.</p>
 */
export interface _FollowUpPrompt {
  /**
   * <p>Prompts for information from the user. </p>
   */
  prompt: _Prompt;

  /**
   * <p>If the user answers "no" to the question defined in the <code>prompt</code> field, Amazon Lex responds with this statement to acknowledge that the intent was canceled. </p>
   */
  rejectionStatement: _Statement;
}

export interface _UnmarshalledFollowUpPrompt extends _FollowUpPrompt {
  /**
   * <p>Prompts for information from the user. </p>
   */
  prompt: _UnmarshalledPrompt;

  /**
   * <p>If the user answers "no" to the question defined in the <code>prompt</code> field, Amazon Lex responds with this statement to acknowledge that the intent was canceled. </p>
   */
  rejectionStatement: _UnmarshalledStatement;
}
