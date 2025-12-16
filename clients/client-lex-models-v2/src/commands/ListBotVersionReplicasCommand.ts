// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import type { ListBotVersionReplicasRequest, ListBotVersionReplicasResponse } from "../models/models_1";
import { ListBotVersionReplicas$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBotVersionReplicasCommand}.
 */
export interface ListBotVersionReplicasCommandInput extends ListBotVersionReplicasRequest {}
/**
 * @public
 *
 * The output of {@link ListBotVersionReplicasCommand}.
 */
export interface ListBotVersionReplicasCommandOutput extends ListBotVersionReplicasResponse, __MetadataBearer {}

/**
 * <p>Contains information about all the versions replication statuses applicable for Global Resiliency.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListBotVersionReplicasCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListBotVersionReplicasCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // ListBotVersionReplicasRequest
 *   botId: "STRING_VALUE", // required
 *   replicaRegion: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   sortBy: { // BotVersionReplicaSortBy
 *     attribute: "BotVersion", // required
 *     order: "Ascending" || "Descending", // required
 *   },
 * };
 * const command = new ListBotVersionReplicasCommand(input);
 * const response = await client.send(command);
 * // { // ListBotVersionReplicasResponse
 * //   botId: "STRING_VALUE",
 * //   sourceRegion: "STRING_VALUE",
 * //   replicaRegion: "STRING_VALUE",
 * //   botVersionReplicaSummaries: [ // BotVersionReplicaSummaryList
 * //     { // BotVersionReplicaSummary
 * //       botVersion: "STRING_VALUE",
 * //       botVersionReplicationStatus: "Creating" || "Available" || "Deleting" || "Failed",
 * //       creationDateTime: new Date("TIMESTAMP"),
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
 * @param ListBotVersionReplicasCommandInput - {@link ListBotVersionReplicasCommandInput}
 * @returns {@link ListBotVersionReplicasCommandOutput}
 * @see {@link ListBotVersionReplicasCommandInput} for command's `input` shape.
 * @see {@link ListBotVersionReplicasCommandOutput} for command's `response` shape.
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
export class ListBotVersionReplicasCommand extends $Command
  .classBuilder<
    ListBotVersionReplicasCommandInput,
    ListBotVersionReplicasCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "ListBotVersionReplicas", {})
  .n("LexModelsV2Client", "ListBotVersionReplicasCommand")
  .sc(ListBotVersionReplicas$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBotVersionReplicasRequest;
      output: ListBotVersionReplicasResponse;
    };
    sdk: {
      input: ListBotVersionReplicasCommandInput;
      output: ListBotVersionReplicasCommandOutput;
    };
  };
}
