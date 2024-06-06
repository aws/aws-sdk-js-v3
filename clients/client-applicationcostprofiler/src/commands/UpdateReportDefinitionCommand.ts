// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationCostProfilerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationCostProfilerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateReportDefinitionRequest, UpdateReportDefinitionResult } from "../models/models_0";
import { de_UpdateReportDefinitionCommand, se_UpdateReportDefinitionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateReportDefinitionCommand}.
 */
export interface UpdateReportDefinitionCommandInput extends UpdateReportDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateReportDefinitionCommand}.
 */
export interface UpdateReportDefinitionCommandOutput extends UpdateReportDefinitionResult, __MetadataBearer {}

/**
 * <p>Updates existing report in AWS Application Cost Profiler.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationCostProfilerClient, UpdateReportDefinitionCommand } from "@aws-sdk/client-applicationcostprofiler"; // ES Modules import
 * // const { ApplicationCostProfilerClient, UpdateReportDefinitionCommand } = require("@aws-sdk/client-applicationcostprofiler"); // CommonJS import
 * const client = new ApplicationCostProfilerClient(config);
 * const input = { // UpdateReportDefinitionRequest
 *   reportId: "STRING_VALUE", // required
 *   reportDescription: "STRING_VALUE", // required
 *   reportFrequency: "MONTHLY" || "DAILY" || "ALL", // required
 *   format: "CSV" || "PARQUET", // required
 *   destinationS3Location: { // S3Location
 *     bucket: "STRING_VALUE", // required
 *     prefix: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateReportDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateReportDefinitionResult
 * //   reportId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateReportDefinitionCommandInput - {@link UpdateReportDefinitionCommandInput}
 * @returns {@link UpdateReportDefinitionCommandOutput}
 * @see {@link UpdateReportDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateReportDefinitionCommandOutput} for command's `response` shape.
 * @see {@link ApplicationCostProfilerClientResolvedConfig | config} for ApplicationCostProfilerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The calls to AWS Application Cost Profiler API are throttled. The request was denied.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints for the API.</p>
 *
 * @throws {@link ApplicationCostProfilerServiceException}
 * <p>Base exception class for all service exceptions from ApplicationCostProfiler service.</p>
 *
 * @public
 */
export class UpdateReportDefinitionCommand extends $Command
  .classBuilder<
    UpdateReportDefinitionCommandInput,
    UpdateReportDefinitionCommandOutput,
    ApplicationCostProfilerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ApplicationCostProfilerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSApplicationCostProfiler", "UpdateReportDefinition", {})
  .n("ApplicationCostProfilerClient", "UpdateReportDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateReportDefinitionCommand)
  .de(de_UpdateReportDefinitionCommand)
  .build() {}
