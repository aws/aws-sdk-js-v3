import { _UnmarshalledSlot } from "./_Slot";
import { _UnmarshalledPrompt } from "./_Prompt";
import { _UnmarshalledStatement } from "./_Statement";
import { _UnmarshalledFollowUpPrompt } from "./_FollowUpPrompt";
import { _UnmarshalledCodeHook } from "./_CodeHook";
import { _UnmarshalledFulfillmentActivity } from "./_FulfillmentActivity";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutIntentOutput shape
 */
export interface PutIntentOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the intent.</p>
   */
  name?: string;

  /**
   * <p>A description of the intent.</p>
   */
  description?: string;

  /**
   * <p>An array of intent slots that are configured for the intent.</p>
   */
  slots?: Array<_UnmarshalledSlot>;

  /**
   * <p> An array of sample utterances that are configured for the intent. </p>
   */
  sampleUtterances?: Array<string>;

  /**
   * <p>If defined in the intent, Amazon Lex prompts the user to confirm the intent before fulfilling it.</p>
   */
  confirmationPrompt?: _UnmarshalledPrompt;

  /**
   * <p>If the user answers "no" to the question defined in <code>confirmationPrompt</code> Amazon Lex responds with this statement to acknowledge that the intent was canceled. </p>
   */
  rejectionStatement?: _UnmarshalledStatement;

  /**
   * <p>If defined in the intent, Amazon Lex uses this prompt to solicit additional user activity after the intent is fulfilled.</p>
   */
  followUpPrompt?: _UnmarshalledFollowUpPrompt;

  /**
   * <p>After the Lambda function specified in the<code>fulfillmentActivity</code>intent fulfills the intent, Amazon Lex conveys this statement to the user.</p>
   */
  conclusionStatement?: _UnmarshalledStatement;

  /**
   * <p>If defined in the intent, Amazon Lex invokes this Lambda function for each user input.</p>
   */
  dialogCodeHook?: _UnmarshalledCodeHook;

  /**
   * <p>If defined in the intent, Amazon Lex invokes this Lambda function to fulfill the intent after the user provides all of the information required by the intent.</p>
   */
  fulfillmentActivity?: _UnmarshalledFulfillmentActivity;

  /**
   * <p>A unique identifier for the built-in intent that this intent is based on.</p>
   */
  parentIntentSignature?: string;

  /**
   * <p>The date that the intent was updated. When you create a resource, the creation date and last update dates are the same.</p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>The date that the intent was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The version of the intent. For a new intent, the version is always <code>$LATEST</code>.</p>
   */
  version?: string;

  /**
   * <p>Checksum of the <code>$LATEST</code>version of the intent created or updated.</p>
   */
  checksum?: string;

  /**
   * _Boolean shape
   */
  createVersion?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
