// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAnalyzerRequest, CreateAnalyzerResponse } from "../models/models_0";
import { CreateAnalyzer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates an analyzer for your account.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A conflict exception error.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal server error.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Service quote met error.
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
export class CreateAnalyzerCommand extends command<CreateAnalyzerCommandInput, CreateAnalyzerCommandOutput>(
  _ep0,
  _mw0,
  "CreateAnalyzer",
  CreateAnalyzer$
) {
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
