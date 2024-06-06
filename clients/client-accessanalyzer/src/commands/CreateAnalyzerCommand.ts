// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAnalyzerRequest, CreateAnalyzerResponse } from "../models/models_0";
import { de_CreateAnalyzerCommand, se_CreateAnalyzerCommand } from "../protocols/Aws_restJson1";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AccessAnalyzer", "CreateAnalyzer", {})
  .n("AccessAnalyzerClient", "CreateAnalyzerCommand")
  .f(void 0, void 0)
  .ser(se_CreateAnalyzerCommand)
  .de(de_CreateAnalyzerCommand)
  .build() {}
