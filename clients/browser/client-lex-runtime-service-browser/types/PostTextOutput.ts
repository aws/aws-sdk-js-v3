import { _UnmarshalledResponseCard } from "./_ResponseCard";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PostTextOutput shape
 */
export interface PostTextOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The current user intent that Amazon Lex is aware of.</p>
   */
  intentName?: string;

  /**
   * <p> The intent slots that Amazon Lex detected from the user input in the conversation. </p> <p>Amazon Lex creates a resolution list containing likely values for a slot. The value that it returns is determined by the <code>valueSelectionStrategy</code> selected when the slot type was created or updated. If <code>valueSelectionStrategy</code> is set to <code>ORIGINAL_VALUE</code>, the value provided by the user is returned, if the user value is similar to the slot values. If <code>valueSelectionStrategy</code> is set to <code>TOP_RESOLUTION</code> Amazon Lex returns the first value in the resolution list or, if there is no resolution list, null. If you don't specify a <code>valueSelectionStrategy</code>, the default is <code>ORIGINAL_VALUE</code>.</p>
   */
  slots?: { [key: string]: string };

  /**
   * <p>A map of key-value pairs representing the session-specific context information.</p>
   */
  sessionAttributes?: { [key: string]: string };

  /**
   * <p>The message to convey to the user. The message can come from the bot's configuration or from a Lambda function.</p> <p>If the intent is not configured with a Lambda function, or if the Lambda function returned <code>Delegate</code> as the <code>dialogAction.type</code> its response, Amazon Lex decides on the next course of action and selects an appropriate message from the bot's configuration based on the current interaction context. For example, if Amazon Lex isn't able to understand user input, it uses a clarification prompt message.</p> <p>When you create an intent you can assign messages to groups. When messages are assigned to groups Amazon Lex returns one message from each group in the response. The message field is an escaped JSON string containing the messages. For more information about the structure of the JSON string returned, see <a>msg-prompts-formats</a>.</p> <p>If the Lambda function returns a message, Amazon Lex passes it to the client in its response.</p>
   */
  message?: string;

  /**
   * <p>The format of the response message. One of the following values:</p> <ul> <li> <p> <code>PlainText</code> - The message contains plain UTF-8 text.</p> </li> <li> <p> <code>CustomPayload</code> - The message is a custom format defined by the Lambda function.</p> </li> <li> <p> <code>SSML</code> - The message contains text formatted for voice output.</p> </li> <li> <p> <code>Composite</code> - The message contains an escaped JSON object containing one or more messages from the groups that messages were assigned to when the intent was created.</p> </li> </ul>
   */
  messageFormat?: "PlainText" | "CustomPayload" | "SSML" | "Composite" | string;

  /**
   * <p> Identifies the current state of the user interaction. Amazon Lex returns one of the following values as <code>dialogState</code>. The client can optionally use this information to customize the user interface. </p> <ul> <li> <p> <code>ElicitIntent</code> - Amazon Lex wants to elicit user intent. </p> <p>For example, a user might utter an intent ("I want to order a pizza"). If Amazon Lex cannot infer the user intent from this utterance, it will return this dialogState.</p> </li> <li> <p> <code>ConfirmIntent</code> - Amazon Lex is expecting a "yes" or "no" response. </p> <p> For example, Amazon Lex wants user confirmation before fulfilling an intent. </p> <p>Instead of a simple "yes" or "no," a user might respond with additional information. For example, "yes, but make it thick crust pizza" or "no, I want to order a drink". Amazon Lex can process such additional information (in these examples, update the crust type slot value, or change intent from OrderPizza to OrderDrink).</p> </li> <li> <p> <code>ElicitSlot</code> - Amazon Lex is expecting a slot value for the current intent. </p> <p>For example, suppose that in the response Amazon Lex sends this message: "What size pizza would you like?". A user might reply with the slot value (e.g., "medium"). The user might also provide additional information in the response (e.g., "medium thick crust pizza"). Amazon Lex can process such additional information appropriately. </p> </li> <li> <p> <code>Fulfilled</code> - Conveys that the Lambda function configured for the intent has successfully fulfilled the intent. </p> </li> <li> <p> <code>ReadyForFulfillment</code> - Conveys that the client has to fulfill the intent. </p> </li> <li> <p> <code>Failed</code> - Conveys that the conversation with the user failed. </p> <p> This can happen for various reasons including that the user did not provide an appropriate response to prompts from the service (you can configure how many times Amazon Lex can prompt a user for specific information), or the Lambda function failed to fulfill the intent. </p> </li> </ul>
   */
  dialogState?:
    | "ElicitIntent"
    | "ConfirmIntent"
    | "ElicitSlot"
    | "Fulfilled"
    | "ReadyForFulfillment"
    | "Failed"
    | string;

  /**
   * <p>If the <code>dialogState</code> value is <code>ElicitSlot</code>, returns the name of the slot for which Amazon Lex is eliciting a value. </p>
   */
  slotToElicit?: string;

  /**
   * <p>Represents the options that the user has to respond to the current prompt. Response Card can come from the bot configuration (in the Amazon Lex console, choose the settings button next to a slot) or from a code hook (Lambda function). </p>
   */
  responseCard?: _UnmarshalledResponseCard;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
