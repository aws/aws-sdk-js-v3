// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type {
  CancelDataQualityRuleRecommendationRunRequest,
  CancelDataQualityRuleRecommendationRunResponse,
} from "../models/models_0";
import { CancelDataQualityRuleRecommendationRun } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelDataQualityRuleRecommendationRunCommand}.
 */
export interface CancelDataQualityRuleRecommendationRunCommandInput
  extends CancelDataQualityRuleRecommendationRunRequest {}
/**
 * @public
 *
 * The output of {@link CancelDataQualityRuleRecommendationRunCommand}.
 */
export interface CancelDataQualityRuleRecommendationRunCommandOutput
  extends CancelDataQualityRuleRecommendationRunResponse,
    __MetadataBearer {}

/**
 * <p>Cancels the specified recommendation run that was being used to generate rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CancelDataQualityRuleRecommendationRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CancelDataQualityRuleRecommendationRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CancelDataQualityRuleRecommendationRunRequest
 *   RunId: "STRING_VALUE", // required
 * };
 * const command = new CancelDataQualityRuleRecommendationRunCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelDataQualityRuleRecommendationRunCommandInput - {@link CancelDataQualityRuleRecommendationRunCommandInput}
 * @returns {@link CancelDataQualityRuleRecommendationRunCommandOutput}
 * @see {@link CancelDataQualityRuleRecommendationRunCommandInput} for command's `input` shape.
 * @see {@link CancelDataQualityRuleRecommendationRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class CancelDataQualityRuleRecommendationRunCommand extends $Command
  .classBuilder<
    CancelDataQualityRuleRecommendationRunCommandInput,
    CancelDataQualityRuleRecommendationRunCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "CancelDataQualityRuleRecommendationRun", {})
  .n("GlueClient", "CancelDataQualityRuleRecommendationRunCommand")
  .sc(CancelDataQualityRuleRecommendationRun)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelDataQualityRuleRecommendationRunRequest;
      output: {};
    };
    sdk: {
      input: CancelDataQualityRuleRecommendationRunCommandInput;
      output: CancelDataQualityRuleRecommendationRunCommandOutput;
    };
  };
}
