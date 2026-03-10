// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import type { StopBotAnalyzerRequest, StopBotAnalyzerResponse } from "../models/models_1";
import { StopBotAnalyzer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopBotAnalyzerCommand}.
 */
export interface StopBotAnalyzerCommandInput extends StopBotAnalyzerRequest {}
/**
 * @public
 *
 * The output of {@link StopBotAnalyzerCommand}.
 */
export interface StopBotAnalyzerCommandOutput extends StopBotAnalyzerResponse, __MetadataBearer {}

/**
 * <p>Cancels an ongoing bot analysis execution. Once stopped, the analysis cannot be resumed and no recommendations will be generated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, StopBotAnalyzerCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, StopBotAnalyzerCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // StopBotAnalyzerRequest
 *   botId: "STRING_VALUE", // required
 *   botAnalyzerRequestId: "STRING_VALUE", // required
 * };
 * const command = new StopBotAnalyzerCommand(input);
 * const response = await client.send(command);
 * // { // StopBotAnalyzerResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   botAnalyzerStatus: "Processing" || "Available" || "Failed" || "Stopping" || "Stopped",
 * //   botAnalyzerRequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StopBotAnalyzerCommandInput - {@link StopBotAnalyzerCommandInput}
 * @returns {@link StopBotAnalyzerCommandOutput}
 * @see {@link StopBotAnalyzerCommandInput} for command's `input` shape.
 * @see {@link StopBotAnalyzerCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
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
export class StopBotAnalyzerCommand extends $Command
  .classBuilder<
    StopBotAnalyzerCommandInput,
    StopBotAnalyzerCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "StopBotAnalyzer", {})
  .n("LexModelsV2Client", "StopBotAnalyzerCommand")
  .sc(StopBotAnalyzer$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopBotAnalyzerRequest;
      output: StopBotAnalyzerResponse;
    };
    sdk: {
      input: StopBotAnalyzerCommandInput;
      output: StopBotAnalyzerCommandOutput;
    };
  };
}
