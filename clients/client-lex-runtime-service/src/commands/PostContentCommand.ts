// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import {
  MetadataBearer as __MetadataBearer,
  StreamingBlobPayloadInputTypes,
  StreamingBlobPayloadOutputTypes,
} from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  LexRuntimeServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexRuntimeServiceClient";
import {
  PostContentRequest,
  PostContentRequestFilterSensitiveLog,
  PostContentResponse,
  PostContentResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_PostContentCommand, se_PostContentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> Sends user input (text or speech) to Amazon Lex. Clients use this API to
 *       send text and audio requests to Amazon Lex at runtime. Amazon Lex interprets the
 *       user input using the machine learning model that it built for the bot. </p>
 *          <p>The <code>PostContent</code> operation supports audio input at 8kHz
 *       and 16kHz. You can use 8kHz audio to achieve higher speech recognition
 *       accuracy in telephone audio applications. </p>
 *          <p> In response, Amazon Lex returns the next message to convey to the user.
 *       Consider the following example messages: </p>
 *          <ul>
 *             <li>
 *                <p> For a user input "I would like a pizza," Amazon Lex might return a
 *           response with a message eliciting slot data (for example,
 *             <code>PizzaSize</code>): "What size pizza would you like?". </p>
 *             </li>
 *             <li>
 *                <p> After the user provides all of the pizza order information, Amazon Lex
 *           might return a response with a message to get user confirmation:
 *           "Order the pizza?". </p>
 *             </li>
 *             <li>
 *                <p> After the user replies "Yes" to the confirmation prompt, Amazon Lex
 *           might return a conclusion statement: "Thank you, your cheese pizza has
 *           been ordered.". </p>
 *             </li>
 *          </ul>
 *          <p> Not all Amazon Lex messages require a response from the user. For example,
 *       conclusion statements do not require a response. Some messages require
 *       only a yes or no response. In addition to the <code>message</code>, Amazon Lex
 *       provides additional context about the message in the response that you can
 *       use to enhance client behavior, such as displaying the appropriate client
 *       user interface. Consider the following examples: </p>
 *          <ul>
 *             <li>
 *                <p> If the message is to elicit slot data, Amazon Lex returns the
 *           following context information: </p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>x-amz-lex-dialog-state</code> header set to
 *                 <code>ElicitSlot</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>x-amz-lex-intent-name</code> header set to the intent name
 *               in the current context </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>x-amz-lex-slot-to-elicit</code> header set to the slot name
 *               for which the <code>message</code> is eliciting information
 *             </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>x-amz-lex-slots</code> header set to a map of slots
 *               configured for the intent with their current values </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p> If the message is a confirmation prompt, the
 *             <code>x-amz-lex-dialog-state</code> header is set to
 *             <code>Confirmation</code> and the
 *             <code>x-amz-lex-slot-to-elicit</code> header is omitted. </p>
 *             </li>
 *             <li>
 *                <p> If the message is a clarification prompt configured for the
 *           intent, indicating that the user intent is not understood, the
 *             <code>x-amz-dialog-state</code> header is set to
 *             <code>ElicitIntent</code> and the <code>x-amz-slot-to-elicit</code>
 *           header is omitted. </p>
 *             </li>
 *          </ul>
 *          <p> In addition, Amazon Lex also returns your application-specific
 *         <code>sessionAttributes</code>. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html">Managing
 *         Conversation Context</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeServiceClient, PostContentCommand } from "@aws-sdk/client-lex-runtime-service"; // ES Modules import
 * // const { LexRuntimeServiceClient, PostContentCommand } = require("@aws-sdk/client-lex-runtime-service"); // CommonJS import
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
 *  <p>Either the Amazon Lex bot is still building, or one of the dependent
 *       services (Amazon Polly, AWS Lambda) failed with an internal service
 *       error.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p> Request validation failed, there is no usable message in the context,
 *       or the bot build failed, is still in progress, or contains unbuilt
 *       changes. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> Two clients are using the same AWS account, Amazon Lex bot, and user
 *       ID. </p>
 *
 * @throws {@link DependencyFailedException} (client fault)
 *  <p> One of the dependencies, such as AWS Lambda or Amazon Polly, threw an
 *       exception. For example, </p>
 *          <ul>
 *             <li>
 *                <p>If Amazon Lex does not have sufficient permissions to call a Lambda
 *           function.</p>
 *             </li>
 *             <li>
 *                <p>If a Lambda function takes longer than 30 seconds to
 *           execute.</p>
 *             </li>
 *             <li>
 *                <p>If a fulfillment Lambda function returns a <code>Delegate</code>
 *           dialog action without removing any slot values.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>Internal service error. Retry the call.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Exceeded a limit.</p>
 *
 * @throws {@link LoopDetectedException} (server fault)
 *  <p>This exception is not used.</p>
 *
 * @throws {@link NotAcceptableException} (client fault)
 *  <p>The accept header in the request does not have a valid value.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource (such as the Amazon Lex bot or an alias) that is referred
 *       to is not found.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The input speech is too long.</p>
 *
 * @throws {@link UnsupportedMediaTypeException} (client fault)
 *  <p>The Content-Type header (<code>PostContent</code> API) has an invalid
 *       value. </p>
 *
 * @throws {@link LexRuntimeServiceServiceException}
 * <p>Base exception class for all service exceptions from LexRuntimeService service.</p>
 *
 * @public
 */
export class PostContentCommand extends $Command
  .classBuilder<
    PostContentCommandInput,
    PostContentCommandOutput,
    LexRuntimeServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LexRuntimeServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepSenseRunTimeService", "PostContent", {})
  .n("LexRuntimeServiceClient", "PostContentCommand")
  .f(PostContentRequestFilterSensitiveLog, PostContentResponseFilterSensitiveLog)
  .ser(se_PostContentCommand)
  .de(de_PostContentCommand)
  .build() {}
