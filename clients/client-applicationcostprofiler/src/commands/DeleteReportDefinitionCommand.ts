// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteReportDefinitionRequest, DeleteReportDefinitionResult } from "../models/models_0";
import { DeleteReportDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteReportDefinitionCommand}.
 */
export interface DeleteReportDefinitionCommandInput extends DeleteReportDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteReportDefinitionCommand}.
 */
export interface DeleteReportDefinitionCommandOutput extends DeleteReportDefinitionResult, __MetadataBearer {}

/**
 * <p>Deletes the specified report definition in AWS Application Cost Profiler. This stops the report from being
 *       generated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationCostProfilerClient, DeleteReportDefinitionCommand } from "@aws-sdk/client-applicationcostprofiler"; // ES Modules import
 * // const { ApplicationCostProfilerClient, DeleteReportDefinitionCommand } = require("@aws-sdk/client-applicationcostprofiler"); // CommonJS import
 * // import type { ApplicationCostProfilerClientConfig } from "@aws-sdk/client-applicationcostprofiler";
 * const config = {}; // type is ApplicationCostProfilerClientConfig
 * const client = new ApplicationCostProfilerClient(config);
 * const input = { // DeleteReportDefinitionRequest
 *   reportId: "STRING_VALUE", // required
 * };
 * const command = new DeleteReportDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteReportDefinitionResult
 * //   reportId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteReportDefinitionCommandInput - {@link DeleteReportDefinitionCommandInput}
 * @returns {@link DeleteReportDefinitionCommandOutput}
 * @see {@link DeleteReportDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteReportDefinitionCommandOutput} for command's `response` shape.
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
export class DeleteReportDefinitionCommand extends command<DeleteReportDefinitionCommandInput, DeleteReportDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteReportDefinition",
  DeleteReportDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteReportDefinitionRequest;
      output: DeleteReportDefinitionResult;
    };
    sdk: {
      input: DeleteReportDefinitionCommandInput;
      output: DeleteReportDefinitionCommandOutput;
    };
  };
}
