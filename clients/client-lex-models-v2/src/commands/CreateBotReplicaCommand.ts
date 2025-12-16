// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import type { CreateBotReplicaRequest, CreateBotReplicaResponse } from "../models/models_0";
import { CreateBotReplica$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBotReplicaCommand}.
 */
export interface CreateBotReplicaCommandInput extends CreateBotReplicaRequest {}
/**
 * @public
 *
 * The output of {@link CreateBotReplicaCommand}.
 */
export interface CreateBotReplicaCommandOutput extends CreateBotReplicaResponse, __MetadataBearer {}

/**
 * <p>Action to create a replication of the source bot in the secondary region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateBotReplicaCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateBotReplicaCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // CreateBotReplicaRequest
 *   botId: "STRING_VALUE", // required
 *   replicaRegion: "STRING_VALUE", // required
 * };
 * const command = new CreateBotReplicaCommand(input);
 * const response = await client.send(command);
 * // { // CreateBotReplicaResponse
 * //   botId: "STRING_VALUE",
 * //   replicaRegion: "STRING_VALUE",
 * //   sourceRegion: "STRING_VALUE",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   botReplicaStatus: "Enabling" || "Enabled" || "Deleting" || "Failed",
 * // };
 *
 * ```
 *
 * @param CreateBotReplicaCommandInput - {@link CreateBotReplicaCommandInput}
 * @returns {@link CreateBotReplicaCommandOutput}
 * @see {@link CreateBotReplicaCommandInput} for command's `input` shape.
 * @see {@link CreateBotReplicaCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The action that you tried to perform couldn't be completed because
 *          the resource is in a conflicting state. For example, deleting a bot
 *          that is in the CREATING state. Try your request again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>Your request couldn't be completed because one or more request
 *          fields aren't valid. Check the fields in your request and try
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
export class CreateBotReplicaCommand extends $Command
  .classBuilder<
    CreateBotReplicaCommandInput,
    CreateBotReplicaCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "CreateBotReplica", {})
  .n("LexModelsV2Client", "CreateBotReplicaCommand")
  .sc(CreateBotReplica$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBotReplicaRequest;
      output: CreateBotReplicaResponse;
    };
    sdk: {
      input: CreateBotReplicaCommandInput;
      output: CreateBotReplicaCommandOutput;
    };
  };
}
