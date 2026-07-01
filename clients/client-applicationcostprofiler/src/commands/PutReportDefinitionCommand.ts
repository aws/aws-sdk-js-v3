// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutReportDefinitionRequest, PutReportDefinitionResult } from "../models/models_0";
import { PutReportDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutReportDefinitionCommand}.
 */
export interface PutReportDefinitionCommandInput extends PutReportDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link PutReportDefinitionCommand}.
 */
export interface PutReportDefinitionCommandOutput extends PutReportDefinitionResult, __MetadataBearer {}

/**
 * <p>Creates the report definition for a report in Application Cost Profiler.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationCostProfilerClient, PutReportDefinitionCommand } from "@aws-sdk/client-applicationcostprofiler"; // ES Modules import
 * // const { ApplicationCostProfilerClient, PutReportDefinitionCommand } = require("@aws-sdk/client-applicationcostprofiler"); // CommonJS import
 * // import type { ApplicationCostProfilerClientConfig } from "@aws-sdk/client-applicationcostprofiler";
 * const config = {}; // type is ApplicationCostProfilerClientConfig
 * const client = new ApplicationCostProfilerClient(config);
 * const input = { // PutReportDefinitionRequest
 *   reportId: "STRING_VALUE", // required
 *   reportDescription: "STRING_VALUE", // required
 *   reportFrequency: "MONTHLY" || "DAILY" || "ALL", // required
 *   format: "CSV" || "PARQUET", // required
 *   destinationS3Location: { // S3Location
 *     bucket: "STRING_VALUE", // required
 *     prefix: "STRING_VALUE", // required
 *   },
 * };
 * const command = new PutReportDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // PutReportDefinitionResult
 * //   reportId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutReportDefinitionCommandInput - {@link PutReportDefinitionCommandInput}
 * @returns {@link PutReportDefinitionCommandOutput}
 * @see {@link PutReportDefinitionCommandInput} for command's `input` shape.
 * @see {@link PutReportDefinitionCommandOutput} for command's `response` shape.
 * @see {@link ApplicationCostProfilerClientResolvedConfig | config} for ApplicationCostProfilerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your request exceeds one or more of the service quotas.</p>
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
export class PutReportDefinitionCommand extends command<PutReportDefinitionCommandInput, PutReportDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "PutReportDefinition",
  PutReportDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutReportDefinitionRequest;
      output: PutReportDefinitionResult;
    };
    sdk: {
      input: PutReportDefinitionCommandInput;
      output: PutReportDefinitionCommandOutput;
    };
  };
}
