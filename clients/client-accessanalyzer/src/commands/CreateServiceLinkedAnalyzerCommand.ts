// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateServiceLinkedAnalyzerRequest, CreateServiceLinkedAnalyzerResponse } from "../models/models_0";
import { CreateServiceLinkedAnalyzer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateServiceLinkedAnalyzerCommand}.
 */
export interface CreateServiceLinkedAnalyzerCommandInput extends CreateServiceLinkedAnalyzerRequest {}
/**
 * @public
 *
 * The output of {@link CreateServiceLinkedAnalyzerCommand}.
 */
export interface CreateServiceLinkedAnalyzerCommandOutput extends CreateServiceLinkedAnalyzerResponse, __MetadataBearer {}

/**
 * <p>Creates a service-linked analyzer managed by an Amazon Web Services service. This operation can only be invoked by authorized Amazon Web Services services. Direct customer invocation returns <code>AccessDeniedException</code>.</p> <p>Service-linked analyzers enable Amazon Web Services services to create and manage analyzers on behalf of customers. The lifecycle of these analyzers is managed by the calling service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, CreateServiceLinkedAnalyzerCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, CreateServiceLinkedAnalyzerCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
 * const client = new AccessAnalyzerClient(config);
 * const input = { // CreateServiceLinkedAnalyzerRequest
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
 *               { // TagsMap
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
 * const command = new CreateServiceLinkedAnalyzerCommand(input);
 * const response = await client.send(command);
 * // { // CreateServiceLinkedAnalyzerResponse
 * //   arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateServiceLinkedAnalyzerCommandInput - {@link CreateServiceLinkedAnalyzerCommandInput}
 * @returns {@link CreateServiceLinkedAnalyzerCommandOutput}
 * @see {@link CreateServiceLinkedAnalyzerCommandInput} for command's `input` shape.
 * @see {@link CreateServiceLinkedAnalyzerCommandOutput} for command's `response` shape.
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
export class CreateServiceLinkedAnalyzerCommand extends command<CreateServiceLinkedAnalyzerCommandInput, CreateServiceLinkedAnalyzerCommandOutput>(
  _ep0,
  _mw0,
  "CreateServiceLinkedAnalyzer",
  CreateServiceLinkedAnalyzer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateServiceLinkedAnalyzerRequest;
      output: CreateServiceLinkedAnalyzerResponse;
    };
    sdk: {
      input: CreateServiceLinkedAnalyzerCommandInput;
      output: CreateServiceLinkedAnalyzerCommandOutput;
    };
  };
}
