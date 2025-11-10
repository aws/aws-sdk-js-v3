// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetFindingsStatisticsRequest, GetFindingsStatisticsResponse } from "../models/models_0";
import { GetFindingsStatistics } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFindingsStatisticsCommand}.
 */
export interface GetFindingsStatisticsCommandInput extends GetFindingsStatisticsRequest {}
/**
 * @public
 *
 * The output of {@link GetFindingsStatisticsCommand}.
 */
export interface GetFindingsStatisticsCommandOutput extends GetFindingsStatisticsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of aggregated finding statistics for an external access or unused access analyzer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, GetFindingsStatisticsCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, GetFindingsStatisticsCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
 * const client = new AccessAnalyzerClient(config);
 * const input = { // GetFindingsStatisticsRequest
 *   analyzerArn: "STRING_VALUE", // required
 * };
 * const command = new GetFindingsStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetFindingsStatisticsResponse
 * //   findingsStatistics: [ // FindingsStatisticsList
 * //     { // FindingsStatistics Union: only one key present
 * //       externalAccessFindingsStatistics: { // ExternalAccessFindingsStatistics
 * //         resourceTypeStatistics: { // ResourceTypeStatisticsMap
 * //           "<keys>": { // ResourceTypeDetails
 * //             totalActivePublic: Number("int"),
 * //             totalActiveCrossAccount: Number("int"),
 * //             totalActiveErrors: Number("int"),
 * //           },
 * //         },
 * //         totalActiveFindings: Number("int"),
 * //         totalArchivedFindings: Number("int"),
 * //         totalResolvedFindings: Number("int"),
 * //       },
 * //       internalAccessFindingsStatistics: { // InternalAccessFindingsStatistics
 * //         resourceTypeStatistics: { // InternalAccessResourceTypeStatisticsMap
 * //           "<keys>": { // InternalAccessResourceTypeDetails
 * //             totalActiveFindings: Number("int"),
 * //             totalResolvedFindings: Number("int"),
 * //             totalArchivedFindings: Number("int"),
 * //           },
 * //         },
 * //         totalActiveFindings: Number("int"),
 * //         totalArchivedFindings: Number("int"),
 * //         totalResolvedFindings: Number("int"),
 * //       },
 * //       unusedAccessFindingsStatistics: { // UnusedAccessFindingsStatistics
 * //         unusedAccessTypeStatistics: [ // UnusedAccessTypeStatisticsList
 * //           { // UnusedAccessTypeStatistics
 * //             unusedAccessType: "STRING_VALUE",
 * //             total: Number("int"),
 * //           },
 * //         ],
 * //         topAccounts: [ // AccountAggregations
 * //           { // FindingAggregationAccountDetails
 * //             account: "STRING_VALUE",
 * //             numberOfActiveFindings: Number("int"),
 * //             details: { // FindingAggregationAccountDetailsMap
 * //               "<keys>": Number("int"),
 * //             },
 * //           },
 * //         ],
 * //         totalActiveFindings: Number("int"),
 * //         totalArchivedFindings: Number("int"),
 * //         totalResolvedFindings: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetFindingsStatisticsCommandInput - {@link GetFindingsStatisticsCommandInput}
 * @returns {@link GetFindingsStatisticsCommandOutput}
 * @see {@link GetFindingsStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetFindingsStatisticsCommandOutput} for command's `response` shape.
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
export class GetFindingsStatisticsCommand extends $Command
  .classBuilder<
    GetFindingsStatisticsCommandInput,
    GetFindingsStatisticsCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AccessAnalyzer", "GetFindingsStatistics", {})
  .n("AccessAnalyzerClient", "GetFindingsStatisticsCommand")
  .sc(GetFindingsStatistics)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFindingsStatisticsRequest;
      output: GetFindingsStatisticsResponse;
    };
    sdk: {
      input: GetFindingsStatisticsCommandInput;
      output: GetFindingsStatisticsCommandOutput;
    };
  };
}
