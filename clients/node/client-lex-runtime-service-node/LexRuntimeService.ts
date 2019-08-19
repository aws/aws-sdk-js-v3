import { LexRuntimeServiceClient } from "./LexRuntimeServiceClient";
import { BadGatewayException } from "./types/BadGatewayException";
import { BadRequestException } from "./types/BadRequestException";
import { ConflictException } from "./types/ConflictException";
import { DependencyFailedException } from "./types/DependencyFailedException";
import { InternalFailureException } from "./types/InternalFailureException";
import { LimitExceededException } from "./types/LimitExceededException";
import { LoopDetectedException } from "./types/LoopDetectedException";
import { NotAcceptableException } from "./types/NotAcceptableException";
import { NotFoundException } from "./types/NotFoundException";
import { PostContentInput } from "./types/PostContentInput";
import { PostContentOutput } from "./types/PostContentOutput";
import { PostTextInput } from "./types/PostTextInput";
import { PostTextOutput } from "./types/PostTextOutput";
import { RequestTimeoutException } from "./types/RequestTimeoutException";
import { UnsupportedMediaTypeException } from "./types/UnsupportedMediaTypeException";
import { PostContentCommand } from "./commands/PostContentCommand";
import { PostTextCommand } from "./commands/PostTextCommand";

export class LexRuntimeService extends LexRuntimeServiceClient {
  /**
   * <p> Sends user input (text or speech) to Amazon Lex. Clients use this API to send text and audio requests to Amazon Lex at runtime. Amazon Lex interprets the user input using the machine learning model that it built for the bot. </p> <p>The <code>PostContent</code> operation supports audio input at 8kHz and 16kHz. You can use 8kHz audio to achieve higher speech recognition accuracy in telephone audio applications. </p> <p> In response, Amazon Lex returns the next message to convey to the user. Consider the following example messages: </p> <ul> <li> <p> For a user input "I would like a pizza," Amazon Lex might return a response with a message eliciting slot data (for example, <code>PizzaSize</code>): "What size pizza would you like?". </p> </li> <li> <p> After the user provides all of the pizza order information, Amazon Lex might return a response with a message to get user confirmation: "Order the pizza?". </p> </li> <li> <p> After the user replies "Yes" to the confirmation prompt, Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". </p> </li> </ul> <p> Not all Amazon Lex messages require a response from the user. For example, conclusion statements do not require a response. Some messages require only a yes or no response. In addition to the <code>message</code>, Amazon Lex provides additional context about the message in the response that you can use to enhance client behavior, such as displaying the appropriate client user interface. Consider the following examples: </p> <ul> <li> <p> If the message is to elicit slot data, Amazon Lex returns the following context information: </p> <ul> <li> <p> <code>x-amz-lex-dialog-state</code> header set to <code>ElicitSlot</code> </p> </li> <li> <p> <code>x-amz-lex-intent-name</code> header set to the intent name in the current context </p> </li> <li> <p> <code>x-amz-lex-slot-to-elicit</code> header set to the slot name for which the <code>message</code> is eliciting information </p> </li> <li> <p> <code>x-amz-lex-slots</code> header set to a map of slots configured for the intent with their current values </p> </li> </ul> </li> <li> <p> If the message is a confirmation prompt, the <code>x-amz-lex-dialog-state</code> header is set to <code>Confirmation</code> and the <code>x-amz-lex-slot-to-elicit</code> header is omitted. </p> </li> <li> <p> If the message is a clarification prompt configured for the intent, indicating that the user intent is not understood, the <code>x-amz-dialog-state</code> header is set to <code>ElicitIntent</code> and the <code>x-amz-slot-to-elicit</code> header is omitted. </p> </li> </ul> <p> In addition, Amazon Lex also returns your application-specific <code>sessionAttributes</code>. For more information, see <a href="http://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html">Managing Conversation Context</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource (such as the Amazon Lex bot or an alias) that is referred to is not found.</p>
   *   - {BadRequestException} <p> Request validation failed, there is no usable message in the context, or the bot build failed, is still in progress, or contains unbuilt changes. </p>
   *   - {LimitExceededException} <p>Exceeded a limit.</p>
   *   - {InternalFailureException} <p>Internal service error. Retry the call.</p>
   *   - {ConflictException} <p> Two clients are using the same AWS account, Amazon Lex bot, and user ID. </p>
   *   - {UnsupportedMediaTypeException} <p>The Content-Type header (<code>PostContent</code> API) has an invalid value. </p>
   *   - {NotAcceptableException} <p>The accept header in the request does not have a valid value.</p>
   *   - {RequestTimeoutException} <p>The input speech is too long.</p>
   *   - {DependencyFailedException} <p> One of the dependencies, such as AWS Lambda or Amazon Polly, threw an exception. For example, </p> <ul> <li> <p>If Amazon Lex does not have sufficient permissions to call a Lambda function.</p> </li> <li> <p>If a Lambda function takes longer than 30 seconds to execute.</p> </li> <li> <p>If a fulfillment Lambda function returns a <code>Delegate</code> dialog action without removing any slot values.</p> </li> </ul>
   *   - {BadGatewayException} <p>Either the Amazon Lex bot is still building, or one of the dependent services (Amazon Polly, AWS Lambda) failed with an internal service error.</p>
   *   - {LoopDetectedException} <p>This exception is not used.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public postContent(args: PostContentInput): Promise<PostContentOutput>;
  public postContent(
    args: PostContentInput,
    cb: (err: any, data?: PostContentOutput) => void
  ): void;
  public postContent(
    args: PostContentInput,
    cb?: (err: any, data?: PostContentOutput) => void
  ): Promise<PostContentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PostContentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sends user input (text-only) to Amazon Lex. Client applications can use this API to send requests to Amazon Lex at runtime. Amazon Lex then interprets the user input using the machine learning model it built for the bot. </p> <p> In response, Amazon Lex returns the next <code>message</code> to convey to the user an optional <code>responseCard</code> to display. Consider the following example messages: </p> <ul> <li> <p> For a user input "I would like a pizza", Amazon Lex might return a response with a message eliciting slot data (for example, PizzaSize): "What size pizza would you like?" </p> </li> <li> <p> After the user provides all of the pizza order information, Amazon Lex might return a response with a message to obtain user confirmation "Proceed with the pizza order?". </p> </li> <li> <p> After the user replies to a confirmation prompt with a "yes", Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". </p> </li> </ul> <p> Not all Amazon Lex messages require a user response. For example, a conclusion statement does not require a response. Some messages require only a "yes" or "no" user response. In addition to the <code>message</code>, Amazon Lex provides additional context about the message in the response that you might use to enhance client behavior, for example, to display the appropriate client user interface. These are the <code>slotToElicit</code>, <code>dialogState</code>, <code>intentName</code>, and <code>slots</code> fields in the response. Consider the following examples: </p> <ul> <li> <p>If the message is to elicit slot data, Amazon Lex returns the following context information:</p> <ul> <li> <p> <code>dialogState</code> set to ElicitSlot </p> </li> <li> <p> <code>intentName</code> set to the intent name in the current context </p> </li> <li> <p> <code>slotToElicit</code> set to the slot name for which the <code>message</code> is eliciting information </p> </li> <li> <p> <code>slots</code> set to a map of slots, configured for the intent, with currently known values </p> </li> </ul> </li> <li> <p> If the message is a confirmation prompt, the <code>dialogState</code> is set to ConfirmIntent and <code>SlotToElicit</code> is set to null. </p> </li> <li> <p>If the message is a clarification prompt (configured for the intent) that indicates that user intent is not understood, the <code>dialogState</code> is set to ElicitIntent and <code>slotToElicit</code> is set to null. </p> </li> </ul> <p> In addition, Amazon Lex also returns your application-specific <code>sessionAttributes</code>. For more information, see <a href="http://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html">Managing Conversation Context</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource (such as the Amazon Lex bot or an alias) that is referred to is not found.</p>
   *   - {BadRequestException} <p> Request validation failed, there is no usable message in the context, or the bot build failed, is still in progress, or contains unbuilt changes. </p>
   *   - {LimitExceededException} <p>Exceeded a limit.</p>
   *   - {InternalFailureException} <p>Internal service error. Retry the call.</p>
   *   - {ConflictException} <p> Two clients are using the same AWS account, Amazon Lex bot, and user ID. </p>
   *   - {DependencyFailedException} <p> One of the dependencies, such as AWS Lambda or Amazon Polly, threw an exception. For example, </p> <ul> <li> <p>If Amazon Lex does not have sufficient permissions to call a Lambda function.</p> </li> <li> <p>If a Lambda function takes longer than 30 seconds to execute.</p> </li> <li> <p>If a fulfillment Lambda function returns a <code>Delegate</code> dialog action without removing any slot values.</p> </li> </ul>
   *   - {BadGatewayException} <p>Either the Amazon Lex bot is still building, or one of the dependent services (Amazon Polly, AWS Lambda) failed with an internal service error.</p>
   *   - {LoopDetectedException} <p>This exception is not used.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public postText(args: PostTextInput): Promise<PostTextOutput>;
  public postText(
    args: PostTextInput,
    cb: (err: any, data?: PostTextOutput) => void
  ): void;
  public postText(
    args: PostTextInput,
    cb?: (err: any, data?: PostTextOutput) => void
  ): Promise<PostTextOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PostTextCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
