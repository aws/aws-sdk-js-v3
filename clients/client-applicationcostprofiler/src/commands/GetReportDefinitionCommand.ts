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
import { GetReportDefinitionRequest, GetReportDefinitionResult } from "../models/models_0";
import { de_GetReportDefinitionCommand, se_GetReportDefinitionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetReportDefinitionCommand}.
 */
export interface GetReportDefinitionCommandInput extends GetReportDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link GetReportDefinitionCommand}.
 */
export interface GetReportDefinitionCommandOutput extends GetReportDefinitionResult, __MetadataBearer {}

/**
 * <p>Retrieves the definition of a report already configured in AWS Application Cost Profiler.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationCostProfilerClient, GetReportDefinitionCommand } from "@aws-sdk/client-applicationcostprofiler"; // ES Modules import
 * // const { ApplicationCostProfilerClient, GetReportDefinitionCommand } = require("@aws-sdk/client-applicationcostprofiler"); // CommonJS import
 * // import type { ApplicationCostProfilerClientConfig } from "@aws-sdk/client-applicationcostprofiler";
 * const config = {}; // type is ApplicationCostProfilerClientConfig
 * const client = new ApplicationCostProfilerClient(config);
 * const input = { // GetReportDefinitionRequest
 *   reportId: "STRING_VALUE", // required
 * };
 * const command = new GetReportDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // GetReportDefinitionResult
 * //   reportId: "STRING_VALUE", // required
 * //   reportDescription: "STRING_VALUE", // required
 * //   reportFrequency: "MONTHLY" || "DAILY" || "ALL", // required
 * //   format: "CSV" || "PARQUET", // required
 * //   destinationS3Location: { // S3Location
 * //     bucket: "STRING_VALUE", // required
 * //     prefix: "STRING_VALUE", // required
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   lastUpdated: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetReportDefinitionCommandInput - {@link GetReportDefinitionCommandInput}
 * @returns {@link GetReportDefinitionCommandOutput}
 * @see {@link GetReportDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetReportDefinitionCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetReportDefinitionCommand extends $Command
  .classBuilder<
    GetReportDefinitionCommandInput,
    GetReportDefinitionCommandOutput,
    ApplicationCostProfilerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationCostProfilerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSApplicationCostProfiler", "GetReportDefinition", {})
  .n("ApplicationCostProfilerClient", "GetReportDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_GetReportDefinitionCommand)
  .de(de_GetReportDefinitionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetReportDefinitionRequest;
      output: GetReportDefinitionResult;
    };
    sdk: {
      input: GetReportDefinitionCommandInput;
      output: GetReportDefinitionCommandOutput;
    };
  };
}
