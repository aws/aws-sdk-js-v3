// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ImportApplicationUsageRequest, ImportApplicationUsageResult } from "../models/models_0";
import { ImportApplicationUsage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Ingests application usage data from Amazon Simple Storage Service (Amazon S3).
 *
 * The data must already exist in the S3 location. As part of the action, AWS Application Cost Profiler copies the object from your S3 bucket to an S3 bucket owned by Amazon for processing asynchronously.
 *
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
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The calls to AWS Application Cost Profiler API are throttled. The request was denied.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints for the API.
 *
 * @throws {@link ApplicationCostProfilerServiceException}
 *
 * Base exception class for all service exceptions from ApplicationCostProfiler service.
 *
 * @public
 */
export class ImportApplicationUsageCommand extends command<ImportApplicationUsageCommandInput, ImportApplicationUsageCommandOutput>(
  _ep0,
  _mw0,
  "ImportApplicationUsage",
  ImportApplicationUsage$
) {
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
