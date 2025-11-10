// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { StartTestExecutionRequest, StartTestExecutionResponse } from "../models/models_1";
import { StartTestExecution } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartTestExecutionCommand}.
 */
export interface StartTestExecutionCommandInput extends StartTestExecutionRequest {}
/**
 * @public
 *
 * The output of {@link StartTestExecutionCommand}.
 */
export interface StartTestExecutionCommandOutput extends StartTestExecutionResponse, __MetadataBearer {}

/**
 * <p>The action to start test set execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, StartTestExecutionCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, StartTestExecutionCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // StartTestExecutionRequest
 *   testSetId: "STRING_VALUE", // required
 *   target: { // TestExecutionTarget
 *     botAliasTarget: { // BotAliasTestExecutionTarget
 *       botId: "STRING_VALUE", // required
 *       botAliasId: "STRING_VALUE", // required
 *       localeId: "STRING_VALUE", // required
 *     },
 *   },
 *   apiMode: "Streaming" || "NonStreaming", // required
 *   testExecutionModality: "Text" || "Audio",
 * };
 * const command = new StartTestExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StartTestExecutionResponse
 * //   testExecutionId: "STRING_VALUE",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   testSetId: "STRING_VALUE",
 * //   target: { // TestExecutionTarget
 * //     botAliasTarget: { // BotAliasTestExecutionTarget
 * //       botId: "STRING_VALUE", // required
 * //       botAliasId: "STRING_VALUE", // required
 * //       localeId: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   apiMode: "Streaming" || "NonStreaming",
 * //   testExecutionModality: "Text" || "Audio",
 * // };
 *
 * ```
 *
 * @param StartTestExecutionCommandInput - {@link StartTestExecutionCommandInput}
 * @returns {@link StartTestExecutionCommandOutput}
 * @see {@link StartTestExecutionCommandInput} for command's `input` shape.
 * @see {@link StartTestExecutionCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
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
export class StartTestExecutionCommand extends $Command
  .classBuilder<
    StartTestExecutionCommandInput,
    StartTestExecutionCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "StartTestExecution", {})
  .n("LexModelsV2Client", "StartTestExecutionCommand")
  .sc(StartTestExecution)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartTestExecutionRequest;
      output: StartTestExecutionResponse;
    };
    sdk: {
      input: StartTestExecutionCommandInput;
      output: StartTestExecutionCommandOutput;
    };
  };
}
