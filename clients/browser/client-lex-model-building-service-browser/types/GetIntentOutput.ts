import { _UnmarshalledSlot } from "./_Slot";
import { _UnmarshalledPrompt } from "./_Prompt";
import { _UnmarshalledStatement } from "./_Statement";
import { _UnmarshalledFollowUpPrompt } from "./_FollowUpPrompt";
import { _UnmarshalledCodeHook } from "./_CodeHook";
import { _UnmarshalledFulfillmentActivity } from "./_FulfillmentActivity";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetIntentOutput shape
 */
export interface GetIntentOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the intent.</p>
   */
  name?: string;

  /**
   * <p>A description of the intent.</p>
   */
  description?: string;

  /**
   * <p>An array of intent slots configured for the intent.</p>
   */
  slots?: Array<_UnmarshalledSlot>;

  /**
   * <p>An array of sample utterances configured for the intent.</p>
   */
  sampleUtterances?: Array<string>;

  /**
   * <p>If defined in the bot, Amazon Lex uses prompt to confirm the intent before fulfilling the user's request. For more information, see <a>PutIntent</a>. </p>
   */
  confirmationPrompt?: _UnmarshalledPrompt;

  /**
   * <p>If the user answers "no" to the question defined in <code>confirmationPrompt</code>, Amazon Lex responds with this statement to acknowledge that the intent was canceled. </p>
   */
  rejectionStatement?: _UnmarshalledStatement;

  /**
   * <p>If defined in the bot, Amazon Lex uses this prompt to solicit additional user activity after the intent is fulfilled. For more information, see <a>PutIntent</a>.</p>
   */
  followUpPrompt?: _UnmarshalledFollowUpPrompt;

  /**
   * <p>After the Lambda function specified in the <code>fulfillmentActivity</code> element fulfills the intent, Amazon Lex conveys this statement to the user.</p>
   */
  conclusionStatement?: _UnmarshalledStatement;

  /**
   * <p>If defined in the bot, Amazon Amazon Lex invokes this Lambda function for each user input. For more information, see <a>PutIntent</a>. </p>
   */
  dialogCodeHook?: _UnmarshalledCodeHook;

  /**
   * <p>Describes how the intent is fulfilled. For more information, see <a>PutIntent</a>. </p>
   */
  fulfillmentActivity?: _UnmarshalledFulfillmentActivity;

  /**
   * <p>A unique identifier for a built-in intent.</p>
   */
  parentIntentSignature?: string;

  /**
   * <p>The date that the intent was updated. When you create a resource, the creation date and the last updated date are the same. </p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>The date that the intent was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The version of the intent.</p>
   */
  version?: string;

  /**
   * <p>Checksum of the intent.</p>
   */
  checksum?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
