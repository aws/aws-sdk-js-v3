// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CancelDataQualityRulesetEvaluationRunRequest,
  CancelDataQualityRulesetEvaluationRunResponse,
} from "../models/models_0";
import { CancelDataQualityRulesetEvaluationRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelDataQualityRulesetEvaluationRunCommand}.
 */
export interface CancelDataQualityRulesetEvaluationRunCommandInput extends CancelDataQualityRulesetEvaluationRunRequest {}
/**
 * @public
 *
 * The output of {@link CancelDataQualityRulesetEvaluationRunCommand}.
 */
export interface CancelDataQualityRulesetEvaluationRunCommandOutput extends CancelDataQualityRulesetEvaluationRunResponse, __MetadataBearer {}

/**
 * Cancels a run where a ruleset is being evaluated against a data source.
 *
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
 *
 * A specified entity does not exist
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class CancelDataQualityRulesetEvaluationRunCommand extends command<CancelDataQualityRulesetEvaluationRunCommandInput, CancelDataQualityRulesetEvaluationRunCommandOutput>(
  _ep0,
  _mw0,
  "CancelDataQualityRulesetEvaluationRun",
  CancelDataQualityRulesetEvaluationRun$
) {
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
