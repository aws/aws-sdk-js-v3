// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { ListBotAliasReplicasRequest, ListBotAliasReplicasResponse } from "../models/models_1";
import { de_ListBotAliasReplicasCommand, se_ListBotAliasReplicasCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBotAliasReplicasCommand}.
 */
export interface ListBotAliasReplicasCommandInput extends ListBotAliasReplicasRequest {}
/**
 * @public
 *
 * The output of {@link ListBotAliasReplicasCommand}.
 */
export interface ListBotAliasReplicasCommandOutput extends ListBotAliasReplicasResponse, __MetadataBearer {}

/**
 * <p>The action to list the replicated bots created from the source bot alias.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListBotAliasReplicasCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListBotAliasReplicasCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // ListBotAliasReplicasRequest
 *   botId: "STRING_VALUE", // required
 *   replicaRegion: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListBotAliasReplicasCommand(input);
 * const response = await client.send(command);
 * // { // ListBotAliasReplicasResponse
 * //   botId: "STRING_VALUE",
 * //   sourceRegion: "STRING_VALUE",
 * //   replicaRegion: "STRING_VALUE",
 * //   botAliasReplicaSummaries: [ // BotAliasReplicaSummaryList
 * //     { // BotAliasReplicaSummary
 * //       botAliasId: "STRING_VALUE",
 * //       botAliasReplicationStatus: "Creating" || "Updating" || "Available" || "Deleting" || "Failed",
 * //       botVersion: "STRING_VALUE",
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //       failureReasons: [ // FailureReasons
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBotAliasReplicasCommandInput - {@link ListBotAliasReplicasCommandInput}
 * @returns {@link ListBotAliasReplicasCommandOutput}
 * @see {@link ListBotAliasReplicasCommandInput} for command's `input` shape.
 * @see {@link ListBotAliasReplicasCommandOutput} for command's `response` shape.
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
export class ListBotAliasReplicasCommand extends $Command
  .classBuilder<
    ListBotAliasReplicasCommandInput,
    ListBotAliasReplicasCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LexModelBuildingServiceV2", "ListBotAliasReplicas", {})
  .n("LexModelsV2Client", "ListBotAliasReplicasCommand")
  .f(void 0, void 0)
  .ser(se_ListBotAliasReplicasCommand)
  .de(de_ListBotAliasReplicasCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBotAliasReplicasRequest;
      output: ListBotAliasReplicasResponse;
    };
    sdk: {
      input: ListBotAliasReplicasCommandInput;
      output: ListBotAliasReplicasCommandOutput;
    };
  };
}
