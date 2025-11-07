// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePerformanceAnalysisReportRequest, CreatePerformanceAnalysisReportResponse } from "../models/models_0";
import { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient";
import { CreatePerformanceAnalysisReport } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePerformanceAnalysisReportCommand}.
 */
export interface CreatePerformanceAnalysisReportCommandInput extends CreatePerformanceAnalysisReportRequest {}
/**
 * @public
 *
 * The output of {@link CreatePerformanceAnalysisReportCommand}.
 */
export interface CreatePerformanceAnalysisReportCommandOutput
  extends CreatePerformanceAnalysisReportResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new performance analysis report for a specific time period for the
 *             DB instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, CreatePerformanceAnalysisReportCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, CreatePerformanceAnalysisReportCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * // import type { PIClientConfig } from "@aws-sdk/client-pi";
 * const config = {}; // type is PIClientConfig
 * const client = new PIClient(config);
 * const input = { // CreatePerformanceAnalysisReportRequest
 *   ServiceType: "RDS" || "DOCDB", // required
 *   Identifier: "STRING_VALUE", // required
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreatePerformanceAnalysisReportCommand(input);
 * const response = await client.send(command);
 * // { // CreatePerformanceAnalysisReportResponse
 * //   AnalysisReportId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePerformanceAnalysisReportCommandInput - {@link CreatePerformanceAnalysisReportCommandInput}
 * @returns {@link CreatePerformanceAnalysisReportCommandOutput}
 * @see {@link CreatePerformanceAnalysisReportCommandInput} for command's `input` shape.
 * @see {@link CreatePerformanceAnalysisReportCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class CreatePerformanceAnalysisReportCommand extends $Command
  .classBuilder<
    CreatePerformanceAnalysisReportCommandInput,
    CreatePerformanceAnalysisReportCommandOutput,
    PIClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PIClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PerformanceInsightsv20180227", "CreatePerformanceAnalysisReport", {})
  .n("PIClient", "CreatePerformanceAnalysisReportCommand")
  .sc(CreatePerformanceAnalysisReport)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePerformanceAnalysisReportRequest;
      output: CreatePerformanceAnalysisReportResponse;
    };
    sdk: {
      input: CreatePerformanceAnalysisReportCommandInput;
      output: CreatePerformanceAnalysisReportCommandOutput;
    };
  };
}
