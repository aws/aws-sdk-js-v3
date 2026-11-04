// smithy-typescript generated code
import type {
  MetadataBearer as __MetadataBearer,
  StreamingBlobPayloadInputTypes,
  StreamingBlobPayloadOutputTypes,
} from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PostContentRequest, PostContentResponse } from "../models/models_0";
import { PostContent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PostContentCommand}.
 */
export interface PostContentCommandInput extends Omit<PostContentRequest, "inputStream"> {
  inputStream: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link PostContentCommand}.
 */
export interface PostContentCommandOutput extends Omit<PostContentResponse, "audioStream">, __MetadataBearer {
  audioStream?: StreamingBlobPayloadOutputTypes;
}

/**
 * Sends user input (text or speech) to Amazon Lex. Clients use this API to send text and audio requests to Amazon Lex at runtime. Amazon Lex interprets the user input using the machine learning model that it built for the bot.
 *
 * The `PostContent` operation supports audio input at 8kHz and 16kHz. You can use 8kHz audio to achieve higher speech recognition accuracy in telephone audio applications.
 *
 * In response, Amazon Lex returns the next message to convey to the user. Consider the following example messages:
 *
 * - For a user input "I would like a pizza," Amazon Lex might return a response with a message eliciting slot data (for example, `PizzaSize`): "What size pizza would you like?".
 * - After the user provides all of the pizza order information, Amazon Lex might return a response with a message to get user confirmation: "Order the pizza?".
 * - After the user replies "Yes" to the confirmation prompt, Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.".
 *
 * Not all Amazon Lex messages require a response from the user. For example, conclusion statements do not require a response. Some messages require only a yes or no response. In addition to the `message`, Amazon Lex provides additional context about the message in the response that you can use to enhance client behavior, such as displaying the appropriate client user interface. Consider the following examples:
 *
 * - If the message is to elicit slot data, Amazon Lex returns the following context information:
 *
 *   - `x-amz-lex-dialog-state` header set to `ElicitSlot`
 *   - `x-amz-lex-intent-name` header set to the intent name in the current context
 *   - `x-amz-lex-slot-to-elicit` header set to the slot name for which the `message` is eliciting information
 *   - `x-amz-lex-slots` header set to a map of slots configured for the intent with their current values
 * - If the message is a confirmation prompt, the `x-amz-lex-dialog-state` header is set to `Confirmation` and the `x-amz-lex-slot-to-elicit` header is omitted.
 * - If the message is a clarification prompt configured for the intent, indicating that the user intent is not understood, the `x-amz-dialog-state` header is set to `ElicitIntent` and the `x-amz-slot-to-elicit` header is omitted.
 *
 * In addition, Amazon Lex also returns your application-specific `sessionAttributes`. For more information, see [Managing Conversation Context](https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeServiceClient, PostContentCommand } from "@aws-sdk/client-lex-runtime-service"; // ES Modules import
 * // const { LexRuntimeServiceClient, PostContentCommand } = require("@aws-sdk/client-lex-runtime-service"); // CommonJS import
 * // import type { LexRuntimeServiceClientConfig } from "@aws-sdk/client-lex-runtime-service";
 * const config = {}; // type is LexRuntimeServiceClientConfig
 * const client = new LexRuntimeServiceClient(config);
 * const input = { // PostContentRequest
 *   botName: "STRING_VALUE", // required
 *   botAlias: "STRING_VALUE", // required
 *   userId: "STRING_VALUE", // required
 *   sessionAttributes: "STRING_VALUE",
 *   requestAttributes: "STRING_VALUE",
 *   contentType: "STRING_VALUE", // required
 *   accept: "STRING_VALUE",
 *   inputStream: "MULTIPLE_TYPES_ACCEPTED", // see \@smithy/types -> StreamingBlobPayloadInputTypes // required
 *   activeContexts: "STRING_VALUE",
 * };
 * const command = new PostContentCommand(input);
 * const response = await client.send(command);
 * // consume or destroy the stream to free the socket.
 * const bytes = await response.audioStream.transformToByteArray();
 * // const str = await response.audioStream.transformToString();
 * // response.audioStream.destroy(); // only applicable to Node.js Readable streams.
 *
 * // { // PostContentResponse
 * //   contentType: "STRING_VALUE",
 * //   intentName: "STRING_VALUE",
 * //   nluIntentConfidence: "STRING_VALUE",
 * //   alternativeIntents: "STRING_VALUE",
 * //   slots: "STRING_VALUE",
 * //   sessionAttributes: "STRING_VALUE",
 * //   sentimentResponse: "STRING_VALUE",
 * //   message: "STRING_VALUE",
 * //   encodedMessage: "STRING_VALUE",
 * //   messageFormat: "PlainText" || "CustomPayload" || "SSML" || "Composite",
 * //   dialogState: "ElicitIntent" || "ConfirmIntent" || "ElicitSlot" || "Fulfilled" || "ReadyForFulfillment" || "Failed",
 * //   slotToElicit: "STRING_VALUE",
 * //   inputTranscript: "STRING_VALUE",
 * //   encodedInputTranscript: "STRING_VALUE",
 * //   audioStream: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes
 * //   botVersion: "STRING_VALUE",
 * //   sessionId: "STRING_VALUE",
 * //   activeContexts: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PostContentCommandInput - {@link PostContentCommandInput}
 * @returns {@link PostContentCommandOutput}
 * @see {@link PostContentCommandInput} for command's `input` shape.
 * @see {@link PostContentCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeServiceClientResolvedConfig | config} for LexRuntimeServiceClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *
 * Either the Amazon Lex bot is still building, or one of the dependent services (Amazon Polly, AWS Lambda) failed with an internal service error.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * Request validation failed, there is no usable message in the context, or the bot build failed, is still in progress, or contains unbuilt changes.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Two clients are using the same AWS account, Amazon Lex bot, and user ID.
 *
 * @throws {@link DependencyFailedException} (client fault)
 *
 * One of the dependencies, such as AWS Lambda or Amazon Polly, threw an exception. For example,
 *
 * - If Amazon Lex does not have sufficient permissions to call a Lambda function.
 * - If a Lambda function takes longer than 30 seconds to execute.
 * - If a fulfillment Lambda function returns a `Delegate` dialog action without removing any slot values.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * Internal service error. Retry the call.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * Exceeded a limit.
 *
 * @throws {@link LoopDetectedException} (server fault)
 *
 * This exception is not used.
 *
 * @throws {@link NotAcceptableException} (client fault)
 *
 * The accept header in the request does not have a valid value.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource (such as the Amazon Lex bot or an alias) that is referred to is not found.
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * The input speech is too long.
 *
 * @throws {@link UnsupportedMediaTypeException} (client fault)
 *
 * The Content-Type header (`PostContent` API) has an invalid value.
 *
 * @throws {@link LexRuntimeServiceServiceException}
 *
 * Base exception class for all service exceptions from LexRuntimeService service.
 *
 * @public
 */
export class PostContentCommand extends command<PostContentCommandInput, PostContentCommandOutput>(
  _ep0,
  _mw0,
  "PostContent",
  PostContent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PostContentRequest;
      output: PostContentResponse;
    };
    sdk: {
      input: PostContentCommandInput;
      output: PostContentCommandOutput;
    };
  };
}
