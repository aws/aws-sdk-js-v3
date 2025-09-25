// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationCostProfilerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationCostProfilerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ImportApplicationUsageRequest, ImportApplicationUsageResult } from "../models/models_0";
import { ImportApplicationUsage } from "../schemas/schemas_1_Report";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportApplicationUsageCommand}.
 */
export interface ImportApplicationUsageCommandInput extends ImportApplicationUsageRequest {}
/**
 * @public
 *
 * The output of {@link ImportApplicationUsageCommand}.
 */
export interface ImportApplicationUsageCommandOutput extends ImportApplicationUsageResult, __MetadataBearer {}

/**
 * <p>Ingests application usage data from Amazon Simple Storage Service (Amazon S3).</p>
 *          <p>The data must already exist in the S3 location. As part of the action, AWS Application Cost Profiler
 *       copies the object from your S3 bucket to an S3 bucket owned by Amazon for processing
 *       asynchronously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationCostProfilerClient, ImportApplicationUsageCommand } from "@aws-sdk/client-applicationcostprofiler"; // ES Modules import
 * // const { ApplicationCostProfilerClient, ImportApplicationUsageCommand } = require("@aws-sdk/client-applicationcostprofiler"); // CommonJS import
 * // import type { ApplicationCostProfilerClientConfig } from "@aws-sdk/client-applicationcostprofiler";
 * const config = {}; // type is ApplicationCostProfilerClientConfig
 * const client = new ApplicationCostProfilerClient(config);
 * const input = { // ImportApplicationUsageRequest
 *   sourceS3Location: { // SourceS3Location
 *     bucket: "STRING_VALUE", // required
 *     key: "STRING_VALUE", // required
 *     region: "ap-east-1" || "me-south-1" || "eu-south-1" || "af-south-1",
 *   },
 * };
 * const command = new ImportApplicationUsageCommand(input);
 * const response = await client.send(command);
 * // { // ImportApplicationUsageResult
 * //   importId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ImportApplicationUsageCommandInput - {@link ImportApplicationUsageCommandInput}
 * @returns {@link ImportApplicationUsageCommandOutput}
 * @see {@link ImportApplicationUsageCommandInput} for command's `input` shape.
 * @see {@link ImportApplicationUsageCommandOutput} for command's `response` shape.
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
export class ImportApplicationUsageCommand extends $Command
  .classBuilder<
    ImportApplicationUsageCommandInput,
    ImportApplicationUsageCommandOutput,
    ApplicationCostProfilerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationCostProfilerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSApplicationCostProfiler", "ImportApplicationUsage", {})
  .n("ApplicationCostProfilerClient", "ImportApplicationUsageCommand")
  .sc(ImportApplicationUsage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportApplicationUsageRequest;
      output: ImportApplicationUsageResult;
    };
    sdk: {
      input: ImportApplicationUsageCommandInput;
      output: ImportApplicationUsageCommandOutput;
    };
  };
}
