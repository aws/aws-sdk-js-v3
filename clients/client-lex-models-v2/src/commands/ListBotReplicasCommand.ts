// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import type { ListBotReplicasRequest, ListBotReplicasResponse } from "../models/models_1";
import { ListBotReplicas } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBotReplicasCommand}.
 */
export interface ListBotReplicasCommandInput extends ListBotReplicasRequest {}
/**
 * @public
 *
 * The output of {@link ListBotReplicasCommand}.
 */
export interface ListBotReplicasCommandOutput extends ListBotReplicasResponse, __MetadataBearer {}

/**
 * <p>The action to list the replicated bots.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListBotReplicasCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListBotReplicasCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // ListBotReplicasRequest
 *   botId: "STRING_VALUE", // required
 * };
 * const command = new ListBotReplicasCommand(input);
 * const response = await client.send(command);
 * // { // ListBotReplicasResponse
 * //   botId: "STRING_VALUE",
 * //   sourceRegion: "STRING_VALUE",
 * //   botReplicaSummaries: [ // BotReplicaSummaryList
 * //     { // BotReplicaSummary
 * //       replicaRegion: "STRING_VALUE",
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       botReplicaStatus: "Enabling" || "Enabled" || "Deleting" || "Failed",
 * //       failureReasons: [ // FailureReasons
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListBotReplicasCommandInput - {@link ListBotReplicasCommandInput}
 * @returns {@link ListBotReplicasCommandOutput}
 * @see {@link ListBotReplicasCommandInput} for command's `input` shape.
 * @see {@link ListBotReplicasCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 *
 * @public
 */
export class ListBotReplicasCommand extends $Command
  .classBuilder<
    ListBotReplicasCommandInput,
    ListBotReplicasCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "ListBotReplicas", {})
  .n("LexModelsV2Client", "ListBotReplicasCommand")
  .sc(ListBotReplicas)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBotReplicasRequest;
      output: ListBotReplicasResponse;
    };
    sdk: {
      input: ListBotReplicasCommandInput;
      output: ListBotReplicasCommandOutput;
    };
  };
}
