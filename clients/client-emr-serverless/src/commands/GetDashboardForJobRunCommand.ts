// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRServerlessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRServerlessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDashboardForJobRunRequest, GetDashboardForJobRunResponse } from "../models/models_0";
import { de_GetDashboardForJobRunCommand, se_GetDashboardForJobRunCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates and returns a URL that you can use to access the application UIs for a job
 *          run.</p>
 *          <p>For jobs in a running state, the application UI is a live user interface such as the
 *          Spark or Tez web UI. For completed jobs, the application UI is a persistent application
 *          user interface such as the Spark History Server or persistent Tez UI.</p>
 *          <note>
 *             <p>The URL is valid for one hour after you generate it. To access the application UI
 *             after that hour elapses, you must invoke the API again to generate a new URL.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRServerlessClient, GetDashboardForJobRunCommand } from "@aws-sdk/client-emr-serverless"; // ES Modules import
 * // const { EMRServerlessClient, GetDashboardForJobRunCommand } = require("@aws-sdk/client-emr-serverless"); // CommonJS import
 * const client = new EMRServerlessClient(config);
 * const input = { // GetDashboardForJobRunRequest
 *   applicationId: "STRING_VALUE", // required
 *   jobRunId: "STRING_VALUE", // required
 *   attempt: Number("int"),
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
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 * @throws {@link EMRServerlessServiceException}
 * <p>Base exception class for all service exceptions from EMRServerless service.</p>
 *
 * @public
 */
export class GetDashboardForJobRunCommand extends $Command
  .classBuilder<
    GetDashboardForJobRunCommandInput,
    GetDashboardForJobRunCommandOutput,
    EMRServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EMRServerlessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsToledoWebService", "GetDashboardForJobRun", {})
  .n("EMRServerlessClient", "GetDashboardForJobRunCommand")
  .f(void 0, void 0)
  .ser(se_GetDashboardForJobRunCommand)
  .de(de_GetDashboardForJobRunCommand)
  .build() {}
