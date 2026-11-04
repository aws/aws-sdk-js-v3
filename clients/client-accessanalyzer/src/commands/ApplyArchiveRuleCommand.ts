// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ApplyArchiveRuleRequest } from "../models/models_0";
import { ApplyArchiveRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ApplyArchiveRuleCommand}.
 */
export interface ApplyArchiveRuleCommandInput extends ApplyArchiveRuleRequest {}
/**
 * @public
 *
 * The output of {@link ApplyArchiveRuleCommand}.
 */
export interface ApplyArchiveRuleCommandOutput extends __MetadataBearer {}

/**
 * Retroactively applies the archive rule to existing findings that meet the archive rule criteria.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, ApplyArchiveRuleCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, ApplyArchiveRuleCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
 * const client = new AccessAnalyzerClient(config);
 * const input = { // ApplyArchiveRuleRequest
 *   analyzerArn: "STRING_VALUE", // required
 *   ruleName: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new ApplyArchiveRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ApplyArchiveRuleCommandInput - {@link ApplyArchiveRuleCommandInput}
 * @returns {@link ApplyArchiveRuleCommandOutput}
 * @see {@link ApplyArchiveRuleCommandInput} for command's `input` shape.
 * @see {@link ApplyArchiveRuleCommandOutput} for command's `response` shape.
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
export class ApplyArchiveRuleCommand extends command<ApplyArchiveRuleCommandInput, ApplyArchiveRuleCommandOutput>(
  _ep0,
  _mw0,
  "ApplyArchiveRule",
  ApplyArchiveRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ApplyArchiveRuleRequest;
      output: {};
    };
    sdk: {
      input: ApplyArchiveRuleCommandInput;
      output: ApplyArchiveRuleCommandOutput;
    };
  };
}
