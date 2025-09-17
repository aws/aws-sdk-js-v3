// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  LexRuntimeServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexRuntimeServiceClient";
import {
  PutSessionRequest,
  PutSessionRequestFilterSensitiveLog,
  PutSessionResponse,
  PutSessionResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_PutSessionCommand, se_PutSessionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutSessionCommand}.
 */
export interface PutSessionCommandInput extends PutSessionRequest {}
/**
 * @public
 *
 * The output of {@link PutSessionCommand}.
 */
export interface PutSessionCommandOutput extends Omit<PutSessionResponse, "audioStream">, __MetadataBearer {
  audioStream?: StreamingBlobPayloadOutputTypes;
}

/**
 * <p>Creates a new session or modifies an existing session with an Amazon Lex
 *       bot. Use this operation to enable your application to set the state of the
 *       bot.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/how-session-api.html">Managing
 *         Sessions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeServiceClient, PutSessionCommand } from "@aws-sdk/client-lex-runtime-service"; // ES Modules import
 * // const { LexRuntimeServiceClient, PutSessionCommand } = require("@aws-sdk/client-lex-runtime-service"); // CommonJS import
 * // import type { LexRuntimeServiceClientConfig } from "@aws-sdk/client-lex-runtime-service";
 * const config = {}; // type is LexRuntimeServiceClientConfig
 * const client = new LexRuntimeServiceClient(config);
 * const input = { // PutSessionRequest
 *   botName: "STRING_VALUE", // required
 *   botAlias: "STRING_VALUE", // required
 *   userId: "STRING_VALUE", // required
 *   sessionAttributes: { // StringMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   dialogAction: { // DialogAction
 *     type: "ElicitIntent" || "ConfirmIntent" || "ElicitSlot" || "Close" || "Delegate", // required
 *     intentName: "STRING_VALUE",
 *     slots: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *     slotToElicit: "STRING_VALUE",
 *     fulfillmentState: "Fulfilled" || "Failed" || "ReadyForFulfillment",
 *     message: "STRING_VALUE",
 *     messageFormat: "PlainText" || "CustomPayload" || "SSML" || "Composite",
 *   },
 *   recentIntentSummaryView: [ // IntentSummaryList
 *     { // IntentSummary
 *       intentName: "STRING_VALUE",
 *       checkpointLabel: "STRING_VALUE",
 *       slots: "<StringMap>",
 *       confirmationStatus: "None" || "Confirmed" || "Denied",
 *       dialogActionType: "ElicitIntent" || "ConfirmIntent" || "ElicitSlot" || "Close" || "Delegate", // required
 *       fulfillmentState: "Fulfilled" || "Failed" || "ReadyForFulfillment",
 *       slotToElicit: "STRING_VALUE",
 *     },
 *   ],
 *   accept: "STRING_VALUE",
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
 * const command = new PutSessionCommand(input);
 * const response = await client.send(command);
 * // consume or destroy the stream to free the socket.
 * const bytes = await response.audioStream.transformToByteArray();
 * // const str = await response.audioStream.transformToString();
 * // response.audioStream.destroy(); // only applicable to Node.js Readable streams.
 *
 * // { // PutSessionResponse
 * //   contentType: "STRING_VALUE",
 * //   intentName: "STRING_VALUE",
 * //   slots: "STRING_VALUE",
 * //   sessionAttributes: "STRING_VALUE",
 * //   message: "STRING_VALUE",
 * //   encodedMessage: "STRING_VALUE",
 * //   messageFormat: "PlainText" || "CustomPayload" || "SSML" || "Composite",
 * //   dialogState: "ElicitIntent" || "ConfirmIntent" || "ElicitSlot" || "Fulfilled" || "ReadyForFulfillment" || "Failed",
 * //   slotToElicit: "STRING_VALUE",
 * //   audioStream: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes
 * //   sessionId: "STRING_VALUE",
 * //   activeContexts: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutSessionCommandInput - {@link PutSessionCommandInput}
 * @returns {@link PutSessionCommandOutput}
 * @see {@link PutSessionCommandInput} for command's `input` shape.
 * @see {@link PutSessionCommandOutput} for command's `response` shape.
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
 * @throws {@link NotAcceptableException} (client fault)
 *  <p>The accept header in the request does not have a valid value.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource (such as the Amazon Lex bot or an alias) that is referred
 *       to is not found.</p>
 *
 * @throws {@link LexRuntimeServiceServiceException}
 * <p>Base exception class for all service exceptions from LexRuntimeService service.</p>
 *
 *
 * @public
 */
export class PutSessionCommand extends $Command
  .classBuilder<
    PutSessionCommandInput,
    PutSessionCommandOutput,
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
  .s("AWSDeepSenseRunTimeService", "PutSession", {})
  .n("LexRuntimeServiceClient", "PutSessionCommand")
  .f(PutSessionRequestFilterSensitiveLog, PutSessionResponseFilterSensitiveLog)
  .ser(se_PutSessionCommand)
  .de(de_PutSessionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutSessionRequest;
      output: PutSessionResponse;
    };
    sdk: {
      input: PutSessionCommandInput;
      output: PutSessionCommandOutput;
    };
  };
}
