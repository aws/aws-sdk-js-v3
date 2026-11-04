// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateArchiveRuleRequest } from "../models/models_0";
import { UpdateArchiveRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateArchiveRuleCommand}.
 */
export interface UpdateArchiveRuleCommandInput extends UpdateArchiveRuleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateArchiveRuleCommand}.
 */
export interface UpdateArchiveRuleCommandOutput extends __MetadataBearer {}

/**
 * Updates the criteria and values for the specified archive rule.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, UpdateArchiveRuleCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, UpdateArchiveRuleCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
 * const client = new AccessAnalyzerClient(config);
 * const input = { // UpdateArchiveRuleRequest
 *   analyzerName: "STRING_VALUE", // required
 *   ruleName: "STRING_VALUE", // required
 *   filter: { // FilterCriteriaMap // required
 *     "<keys>": { // Criterion
 *       eq: [ // ValueList
 *         "STRING_VALUE",
 *       ],
 *       neq: [
 *         "STRING_VALUE",
 *       ],
 *       contains: [
 *         "STRING_VALUE",
 *       ],
 *       exists: true || false,
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateArchiveRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateArchiveRuleCommandInput - {@link UpdateArchiveRuleCommandInput}
 * @returns {@link UpdateArchiveRuleCommandOutput}
 * @see {@link UpdateArchiveRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateArchiveRuleCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Throttling limit exceeded error.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Validation exception error.
 *
 * @throws {@link AccessAnalyzerServiceException}
 *
 * Base exception class for all service exceptions from AccessAnalyzer service.
 *
 * @public
 */
export class UpdateArchiveRuleCommand extends command<UpdateArchiveRuleCommandInput, UpdateArchiveRuleCommandOutput>(
  _ep0,
  _mw0,
  "UpdateArchiveRule",
  UpdateArchiveRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateArchiveRuleRequest;
      output: {};
    };
    sdk: {
      input: UpdateArchiveRuleCommandInput;
      output: UpdateArchiveRuleCommandOutput;
    };
  };
}
