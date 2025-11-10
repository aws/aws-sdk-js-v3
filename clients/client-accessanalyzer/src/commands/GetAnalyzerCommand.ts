// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAnalyzerRequest, GetAnalyzerResponse } from "../models/models_0";
import { GetAnalyzer } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAnalyzerCommand}.
 */
export interface GetAnalyzerCommandInput extends GetAnalyzerRequest {}
/**
 * @public
 *
 * The output of {@link GetAnalyzerCommand}.
 */
export interface GetAnalyzerCommandOutput extends GetAnalyzerResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the specified analyzer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, GetAnalyzerCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, GetAnalyzerCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
 * const client = new AccessAnalyzerClient(config);
 * const input = { // GetAnalyzerRequest
 *   analyzerName: "STRING_VALUE", // required
 * };
 * const command = new GetAnalyzerCommand(input);
 * const response = await client.send(command);
 * // { // GetAnalyzerResponse
 * //   analyzer: { // AnalyzerSummary
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     type: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     lastResourceAnalyzed: "STRING_VALUE",
 * //     lastResourceAnalyzedAt: new Date("TIMESTAMP"),
 * //     tags: { // TagsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     status: "STRING_VALUE", // required
 * //     statusReason: { // StatusReason
 * //       code: "STRING_VALUE", // required
 * //     },
 * //     configuration: { // AnalyzerConfiguration Union: only one key present
 * //       unusedAccess: { // UnusedAccessConfiguration
 * //         unusedAccessAge: Number("int"),
 * //         analysisRule: { // AnalysisRule
 * //           exclusions: [ // AnalysisRuleCriteriaList
 * //             { // AnalysisRuleCriteria
 * //               accountIds: [ // AccountIdsList
 * //                 "STRING_VALUE",
 * //               ],
 * //               resourceTags: [ // TagsList
 * //                 {
 * //                   "<keys>": "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       internalAccess: { // InternalAccessConfiguration
 * //         analysisRule: { // InternalAccessAnalysisRule
 * //           inclusions: [ // InternalAccessAnalysisRuleCriteriaList
 * //             { // InternalAccessAnalysisRuleCriteria
 * //               accountIds: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               resourceTypes: [ // ResourceTypeList
 * //                 "STRING_VALUE",
 * //               ],
 * //               resourceArns: [ // ResourceArnsList
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAnalyzerCommandInput - {@link GetAnalyzerCommandInput}
 * @returns {@link GetAnalyzerCommandOutput}
 * @see {@link GetAnalyzerCommandInput} for command's `input` shape.
 * @see {@link GetAnalyzerCommandOutput} for command's `response` shape.
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
export class GetAnalyzerCommand extends $Command
  .classBuilder<
    GetAnalyzerCommandInput,
    GetAnalyzerCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AccessAnalyzer", "GetAnalyzer", {})
  .n("AccessAnalyzerClient", "GetAnalyzerCommand")
  .sc(GetAnalyzer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAnalyzerRequest;
      output: GetAnalyzerResponse;
    };
    sdk: {
      input: GetAnalyzerCommandInput;
      output: GetAnalyzerCommandOutput;
    };
  };
}
