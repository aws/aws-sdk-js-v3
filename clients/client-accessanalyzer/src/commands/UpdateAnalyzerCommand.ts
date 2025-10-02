// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAnalyzerRequest, UpdateAnalyzerResponse } from "../models/models_0";
import { de_UpdateAnalyzerCommand, se_UpdateAnalyzerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAnalyzerCommand}.
 */
export interface UpdateAnalyzerCommandInput extends UpdateAnalyzerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAnalyzerCommand}.
 */
export interface UpdateAnalyzerCommandOutput extends UpdateAnalyzerResponse, __MetadataBearer {}

/**
 * <p>Modifies the configuration of an existing analyzer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, UpdateAnalyzerCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, UpdateAnalyzerCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
 * const client = new AccessAnalyzerClient(config);
 * const input = { // UpdateAnalyzerRequest
 *   analyzerName: "STRING_VALUE", // required
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
 * const command = new UpdateAnalyzerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAnalyzerResponse
 * //   configuration: { // AnalyzerConfiguration Union: only one key present
 * //     unusedAccess: { // UnusedAccessConfiguration
 * //       unusedAccessAge: Number("int"),
 * //       analysisRule: { // AnalysisRule
 * //         exclusions: [ // AnalysisRuleCriteriaList
 * //           { // AnalysisRuleCriteria
 * //             accountIds: [ // AccountIdsList
 * //               "STRING_VALUE",
 * //             ],
 * //             resourceTags: [ // TagsList
 * //               { // TagsMap
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     internalAccess: { // InternalAccessConfiguration
 * //       analysisRule: { // InternalAccessAnalysisRule
 * //         inclusions: [ // InternalAccessAnalysisRuleCriteriaList
 * //           { // InternalAccessAnalysisRuleCriteria
 * //             accountIds: [
 * //               "STRING_VALUE",
 * //             ],
 * //             resourceTypes: [ // ResourceTypeList
 * //               "STRING_VALUE",
 * //             ],
 * //             resourceArns: [ // ResourceArnsList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAnalyzerCommandInput - {@link UpdateAnalyzerCommandInput}
 * @returns {@link UpdateAnalyzerCommandOutput}
 * @see {@link UpdateAnalyzerCommandInput} for command's `input` shape.
 * @see {@link UpdateAnalyzerCommandOutput} for command's `response` shape.
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
export class UpdateAnalyzerCommand extends $Command
  .classBuilder<
    UpdateAnalyzerCommandInput,
    UpdateAnalyzerCommandOutput,
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
  .s("AccessAnalyzer", "UpdateAnalyzer", {})
  .n("AccessAnalyzerClient", "UpdateAnalyzerCommand")
  .f(void 0, void 0)
  .ser(se_UpdateAnalyzerCommand)
  .de(de_UpdateAnalyzerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAnalyzerRequest;
      output: UpdateAnalyzerResponse;
    };
    sdk: {
      input: UpdateAnalyzerCommandInput;
      output: UpdateAnalyzerCommandOutput;
    };
  };
}
