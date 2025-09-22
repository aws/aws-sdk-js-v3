// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAnalyzerRequest, CreateAnalyzerResponse } from "../models/models_0";
import { CreateAnalyzer } from "../schemas/schemas_5_Archive";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAnalyzerCommand}.
 */
export interface CreateAnalyzerCommandInput extends CreateAnalyzerRequest {}
/**
 * @public
 *
 * The output of {@link CreateAnalyzerCommand}.
 */
export interface CreateAnalyzerCommandOutput extends CreateAnalyzerResponse, __MetadataBearer {}

/**
 * <p>Creates an analyzer for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, CreateAnalyzerCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, CreateAnalyzerCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
 * const client = new AccessAnalyzerClient(config);
 * const input = { // CreateAnalyzerRequest
 *   analyzerName: "STRING_VALUE", // required
 *   type: "STRING_VALUE", // required
 *   archiveRules: [ // InlineArchiveRulesList
 *     { // InlineArchiveRule
 *       ruleName: "STRING_VALUE", // required
 *       filter: { // FilterCriteriaMap // required
 *         "<keys>": { // Criterion
 *           eq: [ // ValueList
 *             "STRING_VALUE",
 *           ],
 *           neq: [
 *             "STRING_VALUE",
 *           ],
 *           contains: [
 *             "STRING_VALUE",
 *           ],
 *           exists: true || false,
 *         },
 *       },
 *     },
 *   ],
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 *   configuration: { // AnalyzerConfiguration Union: only one key present
 *     unusedAccess: { // UnusedAccessConfiguration
 *       unusedAccessAge: Number("int"),
 *       analysisRule: { // AnalysisRule
 *         exclusions: [ // AnalysisRuleCriteriaList
 *           { // AnalysisRuleCriteria
 *             accountIds: [ // AccountIdsList
 *               "STRING_VALUE",
 *             ],
 *             resourceTags: [ // TagsList
 *               {
 *                 "<keys>": "STRING_VALUE",
 *               },
 *             ],
 *           },
 *         ],
 *       },
 *     },
 *     internalAccess: { // InternalAccessConfiguration
 *       analysisRule: { // InternalAccessAnalysisRule
 *         inclusions: [ // InternalAccessAnalysisRuleCriteriaList
 *           { // InternalAccessAnalysisRuleCriteria
 *             accountIds: [
 *               "STRING_VALUE",
 *             ],
 *             resourceTypes: [ // ResourceTypeList
 *               "STRING_VALUE",
 *             ],
 *             resourceArns: [ // ResourceArnsList
 *               "STRING_VALUE",
 *             ],
 *           },
 *         ],
 *       },
 *     },
 *   },
 * };
 * const command = new CreateAnalyzerCommand(input);
 * const response = await client.send(command);
 * // { // CreateAnalyzerResponse
 * //   arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAnalyzerCommandInput - {@link CreateAnalyzerCommandInput}
 * @returns {@link CreateAnalyzerCommandOutput}
 * @see {@link CreateAnalyzerCommandInput} for command's `input` shape.
 * @see {@link CreateAnalyzerCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict exception error.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Service quote met error.</p>
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
export class CreateAnalyzerCommand extends $Command
  .classBuilder<
    CreateAnalyzerCommandInput,
    CreateAnalyzerCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AccessAnalyzer", "CreateAnalyzer", {})
  .n("AccessAnalyzerClient", "CreateAnalyzerCommand")
  .sc(CreateAnalyzer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAnalyzerRequest;
      output: CreateAnalyzerResponse;
    };
    sdk: {
      input: CreateAnalyzerCommandInput;
      output: CreateAnalyzerCommandOutput;
    };
  };
}
