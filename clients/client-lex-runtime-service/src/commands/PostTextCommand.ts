// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  LexRuntimeServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexRuntimeServiceClient";
import {
  PostTextRequest,
  PostTextRequestFilterSensitiveLog,
  PostTextResponse,
  PostTextResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_PostTextCommand, se_PostTextCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PostTextCommand}.
 */
export interface PostTextCommandInput extends PostTextRequest {}
/**
 * @public
 *
 * The output of {@link PostTextCommand}.
 */
export interface PostTextCommandOutput extends PostTextResponse, __MetadataBearer {}

/**
 * <p>Sends user input to Amazon Lex. Client applications can use this API to
 *       send requests to Amazon Lex at runtime. Amazon Lex then interprets the user input
 *       using the machine learning model it built for the bot. </p>
 *          <p> In response, Amazon Lex returns the next <code>message</code> to convey to
 *       the user an optional <code>responseCard</code> to display. Consider the
 *       following example messages: </p>
 *          <ul>
 *             <li>
 *                <p> For a user input "I would like a pizza", Amazon Lex might return a
 *           response with a message eliciting slot data (for example, PizzaSize):
 *           "What size pizza would you like?" </p>
 *             </li>
 *             <li>
 *                <p> After the user provides all of the pizza order information,
 *           Amazon Lex might return a response with a message to obtain user
 *           confirmation "Proceed with the pizza order?". </p>
 *             </li>
 *             <li>
 *                <p> After the user replies to a confirmation prompt with a "yes",
 *           Amazon Lex might return a conclusion statement: "Thank you, your cheese
 *           pizza has been ordered.". </p>
 *             </li>
 *          </ul>
 *
 *          <p> Not all Amazon Lex messages require a user response. For example, a
 *       conclusion statement does not require a response. Some messages require
 *       only a "yes" or "no" user response. In addition to the
 *         <code>message</code>, Amazon Lex provides additional context about the
 *       message in the response that you might use to enhance client behavior, for
 *       example, to display the appropriate client user interface. These are the
 *         <code>slotToElicit</code>, <code>dialogState</code>,
 *         <code>intentName</code>, and <code>slots</code> fields in the response.
 *       Consider the following examples: </p>
 *
 *          <ul>
 *             <li>
 *                <p>If the message is to elicit slot data, Amazon Lex returns the
 *           following context information:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>dialogState</code> set to ElicitSlot </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>intentName</code> set to the intent name in the current
 *               context </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>slotToElicit</code> set to the slot name for which the
 *                 <code>message</code> is eliciting information </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>slots</code> set to a map of slots, configured for the
 *               intent, with currently known values </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p> If the message is a confirmation prompt, the
 *             <code>dialogState</code> is set to ConfirmIntent and
 *             <code>SlotToElicit</code> is set to null. </p>
 *             </li>
 *             <li>
 *                <p>If the message is a clarification prompt (configured for the
 *           intent) that indicates that user intent is not understood, the
 *             <code>dialogState</code> is set to ElicitIntent and
 *             <code>slotToElicit</code> is set to null. </p>
 *             </li>
 *          </ul>
 *
 *          <p> In addition, Amazon Lex also returns your application-specific
 *         <code>sessionAttributes</code>. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html">Managing
 *         Conversation Context</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeServiceClient, PostTextCommand } from "@aws-sdk/client-lex-runtime-service"; // ES Modules import
 * // const { LexRuntimeServiceClient, PostTextCommand } = require("@aws-sdk/client-lex-runtime-service"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LexRuntimeServiceClient(config);
 * const input = { // PostTextRequest
 *   botName: "STRING_VALUE", // required
 *   botAlias: "STRING_VALUE", // required
 *   userId: "STRING_VALUE", // required
 *   sessionAttributes: { // StringMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   requestAttributes: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   inputText: "STRING_VALUE", // required
 *   activeContexts: [ // ActiveContextsList
 *     { // ActiveContext
 *       name: "STRING_VALUE", // required
 *       timeToLive: { // ActiveContextTimeToLive
 *         timeToLiveInSeconds: Number("int"),
 *         turnsToLive: Number("int"),
 *       },
 *       parameters: { // ActiveContextParametersMap // required
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new PostTextCommand(input);
 * const response = await client.send(command);
 * // { // PostTextResponse
 * //   intentName: "STRING_VALUE",
 * //   nluIntentConfidence: { // IntentConfidence
 * //     score: Number("double"),
 * //   },
 * //   alternativeIntents: [ // IntentList
 * //     { // PredictedIntent
 * //       intentName: "STRING_VALUE",
 * //       nluIntentConfidence: {
 * //         score: Number("double"),
 * //       },
 * //       slots: { // StringMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   slots: {
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   sessionAttributes: {
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   message: "STRING_VALUE",
 * //   sentimentResponse: { // SentimentResponse
 * //     sentimentLabel: "STRING_VALUE",
 * //     sentimentScore: "STRING_VALUE",
 * //   },
 * //   messageFormat: "PlainText" || "CustomPayload" || "SSML" || "Composite",
 * //   dialogState: "ElicitIntent" || "ConfirmIntent" || "ElicitSlot" || "Fulfilled" || "ReadyForFulfillment" || "Failed",
 * //   slotToElicit: "STRING_VALUE",
 * //   responseCard: { // ResponseCard
 * //     version: "STRING_VALUE",
 * //     contentType: "application/vnd.amazonaws.card.generic",
 * //     genericAttachments: [ // genericAttachmentList
 * //       { // GenericAttachment
 * //         title: "STRING_VALUE",
 * //         subTitle: "STRING_VALUE",
 * //         attachmentLinkUrl: "STRING_VALUE",
 * //         imageUrl: "STRING_VALUE",
 * //         buttons: [ // listOfButtons
 * //           { // Button
 * //             text: "STRING_VALUE", // required
 * //             value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   sessionId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   activeContexts: [ // ActiveContextsList
 * //     { // ActiveContext
 * //       name: "STRING_VALUE", // required
 * //       timeToLive: { // ActiveContextTimeToLive
 * //         timeToLiveInSeconds: Number("int"),
 * //         turnsToLive: Number("int"),
 * //       },
 * //       parameters: { // ActiveContextParametersMap // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PostTextCommandInput - {@link PostTextCommandInput}
 * @returns {@link PostTextCommandOutput}
 * @see {@link PostTextCommandInput} for command's `input` shape.
 * @see {@link PostTextCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource (such as the Amazon Lex bot or an alias) that is referred
 *       to is not found.</p>
 *
 * @throws {@link LexRuntimeServiceServiceException}
 * <p>Base exception class for all service exceptions from LexRuntimeService service.</p>
 *
 * @public
 */
export class PostTextCommand extends $Command
  .classBuilder<
    PostTextCommandInput,
    PostTextCommandOutput,
    LexRuntimeServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexRuntimeServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepSenseRunTimeService", "PostText", {})
  .n("LexRuntimeServiceClient", "PostTextCommand")
  .f(PostTextRequestFilterSensitiveLog, PostTextResponseFilterSensitiveLog)
  .ser(se_PostTextCommand)
  .de(de_PostTextCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PostTextRequest;
      output: PostTextResponse;
    };
    sdk: {
      input: PostTextCommandInput;
      output: PostTextCommandOutput;
    };
  };
}
