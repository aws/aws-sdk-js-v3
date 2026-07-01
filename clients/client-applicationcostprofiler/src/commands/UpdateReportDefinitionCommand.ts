// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateReportDefinitionRequest, UpdateReportDefinitionResult } from "../models/models_0";
import { UpdateReportDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { ApplicationCostProfilerClientConfig } from "@aws-sdk/client-applicationcostprofiler";
 * const config = {}; // type is ApplicationCostProfilerClientConfig
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
 *
 * @public
 */
export class UpdateReportDefinitionCommand extends command<UpdateReportDefinitionCommandInput, UpdateReportDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateReportDefinition",
  UpdateReportDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateReportDefinitionRequest;
      output: UpdateReportDefinitionResult;
    };
    sdk: {
      input: UpdateReportDefinitionCommandInput;
      output: UpdateReportDefinitionCommandOutput;
    };
  };
}
