import { _UnmarshalledSlot } from "./_Slot";
import { _UnmarshalledPrompt } from "./_Prompt";
import { _UnmarshalledStatement } from "./_Statement";
import { _UnmarshalledFollowUpPrompt } from "./_FollowUpPrompt";
import { _UnmarshalledCodeHook } from "./_CodeHook";
import { _UnmarshalledFulfillmentActivity } from "./_FulfillmentActivity";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateIntentVersionOutput shape
 */
export interface CreateIntentVersionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the intent.</p>
   */
  name?: string;

  /**
   * <p>A description of the intent.</p>
   */
  description?: string;

  /**
   * <p>An array of slot types that defines the information required to fulfill the intent.</p>
   */
  slots?: Array<_UnmarshalledSlot>;

  /**
   * <p>An array of sample utterances configured for the intent. </p>
   */
  sampleUtterances?: Array<string>;

  /**
   * <p>If defined, the prompt that Amazon Lex uses to confirm the user's intent before fulfilling it. </p>
   */
  confirmationPrompt?: _UnmarshalledPrompt;

  /**
   * <p>If the user answers "no" to the question defined in <code>confirmationPrompt</code>, Amazon Lex responds with this statement to acknowledge that the intent was canceled. </p>
   */
  rejectionStatement?: _UnmarshalledStatement;

  /**
   * <p>If defined, Amazon Lex uses this prompt to solicit additional user activity after the intent is fulfilled. </p>
   */
  followUpPrompt?: _UnmarshalledFollowUpPrompt;

  /**
   * <p>After the Lambda function specified in the <code>fulfillmentActivity</code> field fulfills the intent, Amazon Lex conveys this statement to the user. </p>
   */
  conclusionStatement?: _UnmarshalledStatement;

  /**
   * <p>If defined, Amazon Lex invokes this Lambda function for each user input.</p>
   */
  dialogCodeHook?: _UnmarshalledCodeHook;

  /**
   * <p> Describes how the intent is fulfilled. </p>
   */
  fulfillmentActivity?: _UnmarshalledFulfillmentActivity;

  /**
   * <p>A unique identifier for a built-in intent.</p>
   */
  parentIntentSignature?: string;

  /**
   * <p>The date that the intent was updated. </p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>The date that the intent was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The version number assigned to the new version of the intent.</p>
   */
  version?: string;

  /**
   * <p>Checksum of the intent version created.</p>
   */
  checksum?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
