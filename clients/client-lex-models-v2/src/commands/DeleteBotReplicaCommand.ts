// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DeleteBotReplicaRequest, DeleteBotReplicaResponse } from "../models/models_0";
import { DeleteBotReplica } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBotReplicaCommand}.
 */
export interface DeleteBotReplicaCommandInput extends DeleteBotReplicaRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBotReplicaCommand}.
 */
export interface DeleteBotReplicaCommandOutput extends DeleteBotReplicaResponse, __MetadataBearer {}

/**
 * <p>The action to delete the replicated bot in the secondary region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteBotReplicaCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteBotReplicaCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // DeleteBotReplicaRequest
 *   botId: "STRING_VALUE", // required
 *   replicaRegion: "STRING_VALUE", // required
 * };
 * const command = new DeleteBotReplicaCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBotReplicaResponse
 * //   botId: "STRING_VALUE",
 * //   replicaRegion: "STRING_VALUE",
 * //   botReplicaStatus: "Enabling" || "Enabled" || "Deleting" || "Failed",
 * // };
 *
 * ```
 *
 * @param DeleteBotReplicaCommandInput - {@link DeleteBotReplicaCommandInput}
 * @returns {@link DeleteBotReplicaCommandOutput}
 * @see {@link DeleteBotReplicaCommandInput} for command's `input` shape.
 * @see {@link DeleteBotReplicaCommandOutput} for command's `response` shape.
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
export class DeleteBotReplicaCommand extends $Command
  .classBuilder<
    DeleteBotReplicaCommandInput,
    DeleteBotReplicaCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "DeleteBotReplica", {})
  .n("LexModelsV2Client", "DeleteBotReplicaCommand")
  .sc(DeleteBotReplica)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBotReplicaRequest;
      output: DeleteBotReplicaResponse;
    };
    sdk: {
      input: DeleteBotReplicaCommandInput;
      output: DeleteBotReplicaCommandOutput;
    };
  };
}
