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
import type { GetArchiveRuleRequest, GetArchiveRuleResponse } from "../models/models_0";
import { GetArchiveRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetArchiveRuleCommand}.
 */
export interface GetArchiveRuleCommandInput extends GetArchiveRuleRequest {}
/**
 * @public
 *
 * The output of {@link GetArchiveRuleCommand}.
 */
export interface GetArchiveRuleCommandOutput extends GetArchiveRuleResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about an archive rule.</p> <p>To learn about filter keys that you can use to create an archive rule, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer filter keys</a> in the <b>IAM User Guide</b>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, GetArchiveRuleCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, GetArchiveRuleCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
 * const client = new AccessAnalyzerClient(config);
 * const input = { // GetArchiveRuleRequest
 *   analyzerName: "STRING_VALUE", // required
 *   ruleName: "STRING_VALUE", // required
 * };
 * const command = new GetArchiveRuleCommand(input);
 * const response = await client.send(command);
 * // { // GetArchiveRuleResponse
 * //   archiveRule: { // ArchiveRuleSummary
 * //     ruleName: "STRING_VALUE", // required
 * //     filter: { // FilterCriteriaMap // required
 * //       "<keys>": { // Criterion
 * //         eq: [ // ValueList
 * //           "STRING_VALUE",
 * //         ],
 * //         neq: [
 * //           "STRING_VALUE",
 * //         ],
 * //         contains: [
 * //           "STRING_VALUE",
 * //         ],
 * //         exists: true || false,
 * //       },
 * //     },
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetArchiveRuleCommandInput - {@link GetArchiveRuleCommandInput}
 * @returns {@link GetArchiveRuleCommandOutput}
 * @see {@link GetArchiveRuleCommandInput} for command's `input` shape.
 * @see {@link GetArchiveRuleCommandOutput} for command's `response` shape.
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
export class GetArchiveRuleCommand extends $Command
  .classBuilder<
    GetArchiveRuleCommandInput,
    GetArchiveRuleCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AccessAnalyzer", "GetArchiveRule", {})
  .n("AccessAnalyzerClient", "GetArchiveRuleCommand")
  .sc(GetArchiveRule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetArchiveRuleRequest;
      output: GetArchiveRuleResponse;
    };
    sdk: {
      input: GetArchiveRuleCommandInput;
      output: GetArchiveRuleCommandOutput;
    };
  };
}
