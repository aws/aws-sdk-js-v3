// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PostTextRequest, PostTextResponse } from "../models/models_0";
import { PostText$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Sends user input to Amazon Lex. Client applications can use this API to send requests to Amazon Lex at runtime. Amazon Lex then interprets the user input using the machine learning model it built for the bot.
 *
 * In response, Amazon Lex returns the next `message` to convey to the user an optional `responseCard` to display. Consider the following example messages:
 *
 * - For a user input "I would like a pizza", Amazon Lex might return a response with a message eliciting slot data (for example, PizzaSize): "What size pizza would you like?"
 * - After the user provides all of the pizza order information, Amazon Lex might return a response with a message to obtain user confirmation "Proceed with the pizza order?".
 * - After the user replies to a confirmation prompt with a "yes", Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.".
 *
 * Not all Amazon Lex messages require a user response. For example, a conclusion statement does not require a response. Some messages require only a "yes" or "no" user response. In addition to the `message`, Amazon Lex provides additional context about the message in the response that you might use to enhance client behavior, for example, to display the appropriate client user interface. These are the `slotToElicit`, `dialogState`, `intentName`, and `slots` fields in the response. Consider the following examples:
 *
 * - If the message is to elicit slot data, Amazon Lex returns the following context information:
 *
 *   - `dialogState` set to ElicitSlot
 *   - `intentName` set to the intent name in the current context
 *   - `slotToElicit` set to the slot name for which the `message` is eliciting information
 *   - `slots` set to a map of slots, configured for the intent, with currently known values
 * - If the message is a confirmation prompt, the `dialogState` is set to ConfirmIntent and `SlotToElicit` is set to null.
 * - If the message is a clarification prompt (configured for the intent) that indicates that user intent is not understood, the `dialogState` is set to ElicitIntent and `slotToElicit` is set to null.
 *
 * In addition, Amazon Lex also returns your application-specific `sessionAttributes`. For more information, see [Managing Conversation Context](https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeServiceClient, PostTextCommand } from "@aws-sdk/client-lex-runtime-service"; // ES Modules import
 * // const { LexRuntimeServiceClient, PostTextCommand } = require("@aws-sdk/client-lex-runtime-service"); // CommonJS import
 * // import type { LexRuntimeServiceClientConfig } from "@aws-sdk/client-lex-runtime-service";
 * const config = {}; // type is LexRuntimeServiceClientConfig
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
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource (such as the Amazon Lex bot or an alias) that is referred to is not found.
 *
 * @throws {@link LexRuntimeServiceServiceException}
 *
 * Base exception class for all service exceptions from LexRuntimeService service.
 *
 * @public
 */
export class PostTextCommand extends command<PostTextCommandInput, PostTextCommandOutput>(
  _ep0,
  _mw0,
  "PostText",
  PostText$
) {
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
