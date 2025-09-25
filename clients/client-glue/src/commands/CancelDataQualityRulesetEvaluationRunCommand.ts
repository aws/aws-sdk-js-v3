// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  CancelDataQualityRulesetEvaluationRunRequest,
  CancelDataQualityRulesetEvaluationRunResponse,
} from "../models/models_1";
import { CancelDataQualityRulesetEvaluationRun } from "../schemas/schemas_79_CancelDataQualityRulesetEvaluationRun";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelDataQualityRulesetEvaluationRunCommand}.
 */
export interface CancelDataQualityRulesetEvaluationRunCommandInput
  extends CancelDataQualityRulesetEvaluationRunRequest {}
/**
 * @public
 *
 * The output of {@link CancelDataQualityRulesetEvaluationRunCommand}.
 */
export interface CancelDataQualityRulesetEvaluationRunCommandOutput
  extends CancelDataQualityRulesetEvaluationRunResponse,
    __MetadataBearer {}

/**
 * <p>Cancels a run where a ruleset is being evaluated against a data source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CancelDataQualityRulesetEvaluationRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CancelDataQualityRulesetEvaluationRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CancelDataQualityRulesetEvaluationRunRequest
 *   RunId: "STRING_VALUE", // required
 * };
 * const command = new CancelDataQualityRulesetEvaluationRunCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelDataQualityRulesetEvaluationRunCommandInput - {@link CancelDataQualityRulesetEvaluationRunCommandInput}
 * @returns {@link CancelDataQualityRulesetEvaluationRunCommandOutput}
 * @see {@link CancelDataQualityRulesetEvaluationRunCommandInput} for command's `input` shape.
 * @see {@link CancelDataQualityRulesetEvaluationRunCommandOutput} for command's `response` shape.
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
export class CancelDataQualityRulesetEvaluationRunCommand extends $Command
  .classBuilder<
    CancelDataQualityRulesetEvaluationRunCommandInput,
    CancelDataQualityRulesetEvaluationRunCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "CancelDataQualityRulesetEvaluationRun", {})
  .n("GlueClient", "CancelDataQualityRulesetEvaluationRunCommand")
  .sc(CancelDataQualityRulesetEvaluationRun)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelDataQualityRulesetEvaluationRunRequest;
      output: {};
    };
    sdk: {
      input: CancelDataQualityRulesetEvaluationRunCommandInput;
      output: CancelDataQualityRulesetEvaluationRunCommandOutput;
    };
  };
}
