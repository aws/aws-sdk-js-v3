// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  AccessAnalyzerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ApplyArchiveRuleRequest } from "../models/models_0";
import { ApplyArchiveRule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retroactively applies the archive rule to existing findings that meet the archive rule criteria.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Throttling limit exceeded error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link AccessAnalyzerServiceException}
 * <p>Base exception class for all service exceptions from AccessAnalyzer service.</p>
 *
 *
 * @public
 */
export class ApplyArchiveRuleCommand extends $Command
  .classBuilder<
    ApplyArchiveRuleCommandInput,
    ApplyArchiveRuleCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AccessAnalyzer", "ApplyArchiveRule", {})
  .n("AccessAnalyzerClient", "ApplyArchiveRuleCommand")
  .sc(ApplyArchiveRule)
  .build() {
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
