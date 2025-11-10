// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeletePerformanceAnalysisReportRequest, DeletePerformanceAnalysisReportResponse } from "../models/models_0";
import { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient";
import { DeletePerformanceAnalysisReport } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePerformanceAnalysisReportCommand}.
 */
export interface DeletePerformanceAnalysisReportCommandInput extends DeletePerformanceAnalysisReportRequest {}
/**
 * @public
 *
 * The output of {@link DeletePerformanceAnalysisReportCommand}.
 */
export interface DeletePerformanceAnalysisReportCommandOutput
  extends DeletePerformanceAnalysisReportResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a performance analysis report.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, DeletePerformanceAnalysisReportCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, DeletePerformanceAnalysisReportCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * // import type { PIClientConfig } from "@aws-sdk/client-pi";
 * const config = {}; // type is PIClientConfig
 * const client = new PIClient(config);
 * const input = { // DeletePerformanceAnalysisReportRequest
 *   ServiceType: "RDS" || "DOCDB", // required
 *   Identifier: "STRING_VALUE", // required
 *   AnalysisReportId: "STRING_VALUE", // required
 * };
 * const command = new DeletePerformanceAnalysisReportCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePerformanceAnalysisReportCommandInput - {@link DeletePerformanceAnalysisReportCommandInput}
 * @returns {@link DeletePerformanceAnalysisReportCommandOutput}
 * @see {@link DeletePerformanceAnalysisReportCommandInput} for command's `input` shape.
 * @see {@link DeletePerformanceAnalysisReportCommandOutput} for command's `response` shape.
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
export class DeletePerformanceAnalysisReportCommand extends $Command
  .classBuilder<
    DeletePerformanceAnalysisReportCommandInput,
    DeletePerformanceAnalysisReportCommandOutput,
    PIClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PIClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PerformanceInsightsv20180227", "DeletePerformanceAnalysisReport", {})
  .n("PIClient", "DeletePerformanceAnalysisReportCommand")
  .sc(DeletePerformanceAnalysisReport)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePerformanceAnalysisReportRequest;
      output: {};
    };
    sdk: {
      input: DeletePerformanceAnalysisReportCommandInput;
      output: DeletePerformanceAnalysisReportCommandOutput;
    };
  };
}
