// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDashboardForJobRunRequest, GetDashboardForJobRunResponse } from "../models/models_0";
import { GetDashboardForJobRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDashboardForJobRunCommand}.
 */
export interface GetDashboardForJobRunCommandInput extends GetDashboardForJobRunRequest {}
/**
 * @public
 *
 * The output of {@link GetDashboardForJobRunCommand}.
 */
export interface GetDashboardForJobRunCommandOutput extends GetDashboardForJobRunResponse, __MetadataBearer {}

/**
 * Creates and returns a URL that you can use to access the application UIs for a job run.
 *
 * For jobs in a running state, the application UI is a live user interface such as the Spark or Tez web UI. For completed jobs, the application UI is a persistent application user interface such as the Spark History Server or persistent Tez UI.
 *
 * > **Note:** The URL is valid for one hour after you generate it. To access the application UI after that hour elapses, you must invoke the API again to generate a new URL.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRServerlessClient, GetDashboardForJobRunCommand } from "@aws-sdk/client-emr-serverless"; // ES Modules import
 * // const { EMRServerlessClient, GetDashboardForJobRunCommand } = require("@aws-sdk/client-emr-serverless"); // CommonJS import
 * // import type { EMRServerlessClientConfig } from "@aws-sdk/client-emr-serverless";
 * const config = {}; // type is EMRServerlessClientConfig
 * const client = new EMRServerlessClient(config);
 * const input = { // GetDashboardForJobRunRequest
 *   applicationId: "STRING_VALUE", // required
 *   jobRunId: "STRING_VALUE", // required
 *   attempt: Number("int"),
 *   accessSystemProfileLogs: true || false,
 * };
 * const command = new GetDashboardForJobRunCommand(input);
 * const response = await client.send(command);
 * // { // GetDashboardForJobRunResponse
 * //   url: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDashboardForJobRunCommandInput - {@link GetDashboardForJobRunCommandInput}
 * @returns {@link GetDashboardForJobRunCommandOutput}
 * @see {@link GetDashboardForJobRunCommandInput} for command's `input` shape.
 * @see {@link GetDashboardForJobRunCommandOutput} for command's `response` shape.
 * @see {@link EMRServerlessClientResolvedConfig | config} for EMRServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link EMRServerlessServiceException}
 *
 * Base exception class for all service exceptions from EMRServerless service.
 *
 * @public
 */
export class GetDashboardForJobRunCommand extends command<GetDashboardForJobRunCommandInput, GetDashboardForJobRunCommandOutput>(
  _ep0,
  _mw0,
  "GetDashboardForJobRun",
  GetDashboardForJobRun$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDashboardForJobRunRequest;
      output: GetDashboardForJobRunResponse;
    };
    sdk: {
      input: GetDashboardForJobRunCommandInput;
      output: GetDashboardForJobRunCommandOutput;
    };
  };
}
