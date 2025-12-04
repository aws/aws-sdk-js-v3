// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import type { DeleteBotVersionRequest, DeleteBotVersionResponse } from "../models/models_0";
import { DeleteBotVersion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBotVersionCommand}.
 */
export interface DeleteBotVersionCommandInput extends DeleteBotVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBotVersionCommand}.
 */
export interface DeleteBotVersionCommandOutput extends DeleteBotVersionResponse, __MetadataBearer {}

/**
 * <p>Deletes a specific version of a bot. To delete all versions of a bot,
 *          use the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteBot.html">DeleteBot</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteBotVersionCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteBotVersionCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // DeleteBotVersionRequest
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   skipResourceInUseCheck: true || false,
 * };
 * const command = new DeleteBotVersionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBotVersionResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   botStatus: "Creating" || "Available" || "Inactive" || "Deleting" || "Failed" || "Versioning" || "Importing" || "Updating",
 * // };
 *
 * ```
 *
 * @param DeleteBotVersionCommandInput - {@link DeleteBotVersionCommandInput}
 * @returns {@link DeleteBotVersionCommandOutput}
 * @see {@link DeleteBotVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteBotVersionCommandOutput} for command's `response` shape.
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
export class DeleteBotVersionCommand extends $Command
  .classBuilder<
    DeleteBotVersionCommandInput,
    DeleteBotVersionCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "DeleteBotVersion", {})
  .n("LexModelsV2Client", "DeleteBotVersionCommand")
  .sc(DeleteBotVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBotVersionRequest;
      output: DeleteBotVersionResponse;
    };
    sdk: {
      input: DeleteBotVersionCommandInput;
      output: DeleteBotVersionCommandOutput;
    };
  };
}
