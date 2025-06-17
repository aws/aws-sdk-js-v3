// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAnalyzersRequest, ListAnalyzersResponse } from "../models/models_0";
import { de_ListAnalyzersCommand, se_ListAnalyzersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAnalyzersCommand}.
 */
export interface ListAnalyzersCommandInput extends ListAnalyzersRequest {}
/**
 * @public
 *
 * The output of {@link ListAnalyzersCommand}.
 */
export interface ListAnalyzersCommandOutput extends ListAnalyzersResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of analyzers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, ListAnalyzersCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, ListAnalyzersCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const input = { // ListAnalyzersRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   type: "STRING_VALUE",
 * };
 * const command = new ListAnalyzersCommand(input);
 * const response = await client.send(command);
 * // { // ListAnalyzersResponse
 * //   analyzers: [ // AnalyzersList // required
 * //     { // AnalyzerSummary
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastResourceAnalyzed: "STRING_VALUE",
 * //       lastResourceAnalyzedAt: new Date("TIMESTAMP"),
 * //       tags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       status: "STRING_VALUE", // required
 * //       statusReason: { // StatusReason
 * //         code: "STRING_VALUE", // required
 * //       },
 * //       configuration: { // AnalyzerConfiguration Union: only one key present
 * //         unusedAccess: { // UnusedAccessConfiguration
 * //           unusedAccessAge: Number("int"),
 * //           analysisRule: { // AnalysisRule
 * //             exclusions: [ // AnalysisRuleCriteriaList
 * //               { // AnalysisRuleCriteria
 * //                 accountIds: [ // AccountIdsList
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 resourceTags: [ // TagsList
 * //                   {
 * //                     "<keys>": "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         internalAccess: { // InternalAccessConfiguration
 * //           analysisRule: { // InternalAccessAnalysisRule
 * //             inclusions: [ // InternalAccessAnalysisRuleCriteriaList
 * //               { // InternalAccessAnalysisRuleCriteria
 * //                 accountIds: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 resourceTypes: [ // ResourceTypeList
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 resourceArns: [ // ResourceArnsList
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAnalyzersCommandInput - {@link ListAnalyzersCommandInput}
 * @returns {@link ListAnalyzersCommandOutput}
 * @see {@link ListAnalyzersCommandInput} for command's `input` shape.
 * @see {@link ListAnalyzersCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
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
export class ListAnalyzersCommand extends $Command
  .classBuilder<
    ListAnalyzersCommandInput,
    ListAnalyzersCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AccessAnalyzer", "ListAnalyzers", {})
  .n("AccessAnalyzerClient", "ListAnalyzersCommand")
  .f(void 0, void 0)
  .ser(se_ListAnalyzersCommand)
  .de(de_ListAnalyzersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAnalyzersRequest;
      output: ListAnalyzersResponse;
    };
    sdk: {
      input: ListAnalyzersCommandInput;
      output: ListAnalyzersCommandOutput;
    };
  };
}
