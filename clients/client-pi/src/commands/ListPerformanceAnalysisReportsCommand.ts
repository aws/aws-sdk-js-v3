// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListPerformanceAnalysisReportsRequest, ListPerformanceAnalysisReportsResponse } from "../models/models_0";
import { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient";
import {
  de_ListPerformanceAnalysisReportsCommand,
  se_ListPerformanceAnalysisReportsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPerformanceAnalysisReportsCommand}.
 */
export interface ListPerformanceAnalysisReportsCommandInput extends ListPerformanceAnalysisReportsRequest {}
/**
 * @public
 *
 * The output of {@link ListPerformanceAnalysisReportsCommand}.
 */
export interface ListPerformanceAnalysisReportsCommandOutput
  extends ListPerformanceAnalysisReportsResponse,
    __MetadataBearer {}

/**
 * <p>Lists all the analysis reports created for the DB instance. The reports are sorted based on the start time of each report.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, ListPerformanceAnalysisReportsCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, ListPerformanceAnalysisReportsCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * const client = new PIClient(config);
 * const input = { // ListPerformanceAnalysisReportsRequest
 *   ServiceType: "RDS" || "DOCDB", // required
 *   Identifier: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ListTags: true || false,
 * };
 * const command = new ListPerformanceAnalysisReportsCommand(input);
 * const response = await client.send(command);
 * // { // ListPerformanceAnalysisReportsResponse
 * //   AnalysisReports: [ // AnalysisReportSummaryList
 * //     { // AnalysisReportSummary
 * //       AnalysisReportId: "STRING_VALUE",
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       Status: "RUNNING" || "SUCCEEDED" || "FAILED",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPerformanceAnalysisReportsCommandInput - {@link ListPerformanceAnalysisReportsCommandInput}
 * @returns {@link ListPerformanceAnalysisReportsCommandOutput}
 * @see {@link ListPerformanceAnalysisReportsCommandInput} for command's `input` shape.
 * @see {@link ListPerformanceAnalysisReportsCommandOutput} for command's `response` shape.
 * @see {@link PIClientResolvedConfig | config} for PIClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>The request failed due to an unknown error.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>One of the arguments provided is invalid for this request.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>The user is not authorized to perform this request.</p>
 *
 * @throws {@link PIServiceException}
 * <p>Base exception class for all service exceptions from PI service.</p>
 *
 * @public
 */
export class ListPerformanceAnalysisReportsCommand extends $Command
  .classBuilder<
    ListPerformanceAnalysisReportsCommandInput,
    ListPerformanceAnalysisReportsCommandOutput,
    PIClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PIClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PerformanceInsightsv20180227", "ListPerformanceAnalysisReports", {})
  .n("PIClient", "ListPerformanceAnalysisReportsCommand")
  .f(void 0, void 0)
  .ser(se_ListPerformanceAnalysisReportsCommand)
  .de(de_ListPerformanceAnalysisReportsCommand)
  .build() {}
