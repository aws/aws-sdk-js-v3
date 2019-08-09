import { _Slot } from "./_Slot";
import { _Prompt } from "./_Prompt";
import { _Statement } from "./_Statement";
import { _FollowUpPrompt } from "./_FollowUpPrompt";
import { _CodeHook } from "./_CodeHook";
import { _FulfillmentActivity } from "./_FulfillmentActivity";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutIntentInput shape
 */
export interface PutIntentInput {
  /**
   * <p>The name of the intent. The name is <i>not</i> case sensitive. </p> <p>The name can't match a built-in intent name, or a built-in intent name with "AMAZON." removed. For example, because there is a built-in intent called <code>AMAZON.HelpIntent</code>, you can't create a custom intent called <code>HelpIntent</code>.</p> <p>For a list of built-in intents, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents">Standard Built-in Intents</a> in the <i>Alexa Skills Kit</i>.</p>
   */
  name: string;

  /**
   * <p>A description of the intent.</p>
   */
  description?: string;

  /**
   * <p>An array of intent slots. At runtime, Amazon Lex elicits required slot values from the user using prompts defined in the slots. For more information, see <a>how-it-works</a>. </p>
   */
  slots?: Array<_Slot> | Iterable<_Slot>;

  /**
   * <p>An array of utterances (strings) that a user might say to signal the intent. For example, "I want {PizzaSize} pizza", "Order {Quantity} {PizzaSize} pizzas". </p> <p>In each utterance, a slot name is enclosed in curly braces. </p>
   */
  sampleUtterances?: Array<string> | Iterable<string>;

  /**
   * <p>Prompts the user to confirm the intent. This question should have a yes or no answer.</p> <p>Amazon Lex uses this prompt to ensure that the user acknowledges that the intent is ready for fulfillment. For example, with the <code>OrderPizza</code> intent, you might want to confirm that the order is correct before placing it. For other intents, such as intents that simply respond to user questions, you might not need to ask the user for confirmation before providing the information. </p> <note> <p>You you must provide both the <code>rejectionStatement</code> and the <code>confirmationPrompt</code>, or neither.</p> </note>
   */
  confirmationPrompt?: _Prompt;

  /**
   * <p>When the user answers "no" to the question defined in <code>confirmationPrompt</code>, Amazon Lex responds with this statement to acknowledge that the intent was canceled. </p> <note> <p>You must provide both the <code>rejectionStatement</code> and the <code>confirmationPrompt</code>, or neither.</p> </note>
   */
  rejectionStatement?: _Statement;

  /**
   * <p>Amazon Lex uses this prompt to solicit additional activity after fulfilling an intent. For example, after the <code>OrderPizza</code> intent is fulfilled, you might prompt the user to order a drink.</p> <p>The action that Amazon Lex takes depends on the user's response, as follows:</p> <ul> <li> <p>If the user says "Yes" it responds with the clarification prompt that is configured for the bot.</p> </li> <li> <p>if the user says "Yes" and continues with an utterance that triggers an intent it starts a conversation for the intent.</p> </li> <li> <p>If the user says "No" it responds with the rejection statement configured for the the follow-up prompt.</p> </li> <li> <p>If it doesn't recognize the utterance it repeats the follow-up prompt again.</p> </li> </ul> <p>The <code>followUpPrompt</code> field and the <code>conclusionStatement</code> field are mutually exclusive. You can specify only one. </p>
   */
  followUpPrompt?: _FollowUpPrompt;

  /**
   * <p> The statement that you want Amazon Lex to convey to the user after the intent is successfully fulfilled by the Lambda function. </p> <p>This element is relevant only if you provide a Lambda function in the <code>fulfillmentActivity</code>. If you return the intent to the client application, you can't specify this element.</p> <note> <p>The <code>followUpPrompt</code> and <code>conclusionStatement</code> are mutually exclusive. You can specify only one.</p> </note>
   */
  conclusionStatement?: _Statement;

  /**
   * <p> Specifies a Lambda function to invoke for each user input. You can invoke this Lambda function to personalize user interaction. </p> <p>For example, suppose your bot determines that the user is John. Your Lambda function might retrieve John's information from a backend database and prepopulate some of the values. For example, if you find that John is gluten intolerant, you might set the corresponding intent slot, <code>GlutenIntolerant</code>, to true. You might find John's phone number and set the corresponding session attribute. </p>
   */
  dialogCodeHook?: _CodeHook;

  /**
   * <p>Required. Describes how the intent is fulfilled. For example, after a user provides all of the information for a pizza order, <code>fulfillmentActivity</code> defines how the bot places an order with a local pizza store. </p> <p> You might configure Amazon Lex to return all of the intent information to the client application, or direct it to invoke a Lambda function that can process the intent (for example, place an order with a pizzeria). </p>
   */
  fulfillmentActivity?: _FulfillmentActivity;

  /**
   * <p>A unique identifier for the built-in intent to base this intent on. To find the signature for an intent, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents">Standard Built-in Intents</a> in the <i>Alexa Skills Kit</i>.</p>
   */
  parentIntentSignature?: string;

  /**
   * <p>Identifies a specific revision of the <code>$LATEST</code> version.</p> <p>When you create a new intent, leave the <code>checksum</code> field blank. If you specify a checksum you get a <code>BadRequestException</code> exception.</p> <p>When you want to update a intent, set the <code>checksum</code> field to the checksum of the most recent revision of the <code>$LATEST</code> version. If you don't specify the <code> checksum</code> field, or if the checksum does not match the <code>$LATEST</code> version, you get a <code>PreconditionFailedException</code> exception.</p>
   */
  checksum?: string;

  /**
   * _Boolean shape
   */
  createVersion?: boolean;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
