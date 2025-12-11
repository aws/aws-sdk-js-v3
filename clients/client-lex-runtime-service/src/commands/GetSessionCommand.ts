// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  LexRuntimeServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexRuntimeServiceClient";
import type { GetSessionRequest, GetSessionResponse } from "../models/models_0";
import { GetSession } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSessionCommand}.
 */
export interface GetSessionCommandInput extends GetSessionRequest {}
/**
 * @public
 *
 * The output of {@link GetSessionCommand}.
 */
export interface GetSessionCommandOutput extends GetSessionResponse, __MetadataBearer {}

/**
 * <p>Returns session information for a specified bot, alias, and user
 *       ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeServiceClient, GetSessionCommand } from "@aws-sdk/client-lex-runtime-service"; // ES Modules import
 * // const { LexRuntimeServiceClient, GetSessionCommand } = require("@aws-sdk/client-lex-runtime-service"); // CommonJS import
 * // import type { LexRuntimeServiceClientConfig } from "@aws-sdk/client-lex-runtime-service";
 * const config = {}; // type is LexRuntimeServiceClientConfig
 * const client = new LexRuntimeServiceClient(config);
 * const input = { // GetSessionRequest
 *   botName: "STRING_VALUE", // required
 *   botAlias: "STRING_VALUE", // required
 *   userId: "STRING_VALUE", // required
 *   checkpointLabelFilter: "STRING_VALUE",
 * };
 * const command = new GetSessionCommand(input);
 * const response = await client.send(command);
 * // { // GetSessionResponse
 * //   recentIntentSummaryView: [ // IntentSummaryList
 * //     { // IntentSummary
 * //       intentName: "STRING_VALUE",
 * //       checkpointLabel: "STRING_VALUE",
 * //       slots: { // StringMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       confirmationStatus: "None" || "Confirmed" || "Denied",
 * //       dialogActionType: "ElicitIntent" || "ConfirmIntent" || "ElicitSlot" || "Close" || "Delegate", // required
 * //       fulfillmentState: "Fulfilled" || "Failed" || "ReadyForFulfillment",
 * //       slotToElicit: "STRING_VALUE",
 * //     },
 * //   ],
 * //   sessionAttributes: {
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   sessionId: "STRING_VALUE",
 * //   dialogAction: { // DialogAction
 * //     type: "ElicitIntent" || "ConfirmIntent" || "ElicitSlot" || "Close" || "Delegate", // required
 * //     intentName: "STRING_VALUE",
 * //     slots: "<StringMap>",
 * //     slotToElicit: "STRING_VALUE",
 * //     fulfillmentState: "Fulfilled" || "Failed" || "ReadyForFulfillment",
 * //     message: "STRING_VALUE",
 * //     messageFormat: "PlainText" || "CustomPayload" || "SSML" || "Composite",
 * //   },
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
 * @param GetSessionCommandInput - {@link GetSessionCommandInput}
 * @returns {@link GetSessionCommandOutput}
 * @see {@link GetSessionCommandInput} for command's `input` shape.
 * @see {@link GetSessionCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeServiceClientResolvedConfig | config} for LexRuntimeServiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p> Request validation failed, there is no usable message in the context,
 *       or the bot build failed, is still in progress, or contains unbuilt
 *       changes. </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>Internal service error. Retry the call.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Exceeded a limit.</p>
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
export class GetSessionCommand extends $Command
  .classBuilder<
    GetSessionCommandInput,
    GetSessionCommandOutput,
    LexRuntimeServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexRuntimeServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepSenseRunTimeService", "GetSession", {})
  .n("LexRuntimeServiceClient", "GetSessionCommand")
  .sc(GetSession)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSessionRequest;
      output: GetSessionResponse;
    };
    sdk: {
      input: GetSessionCommandInput;
      output: GetSessionCommandOutput;
    };
  };
}
