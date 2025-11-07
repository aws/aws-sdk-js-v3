// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ReportTaskRunnerHeartbeatInput, ReportTaskRunnerHeartbeatOutput } from "../models/models_0";
import { ReportTaskRunnerHeartbeat } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ReportTaskRunnerHeartbeatCommand}.
 */
export interface ReportTaskRunnerHeartbeatCommandInput extends ReportTaskRunnerHeartbeatInput {}
/**
 * @public
 *
 * The output of {@link ReportTaskRunnerHeartbeatCommand}.
 */
export interface ReportTaskRunnerHeartbeatCommandOutput extends ReportTaskRunnerHeartbeatOutput, __MetadataBearer {}

/**
 * <p>Task runners call <code>ReportTaskRunnerHeartbeat</code> every 15 minutes to indicate that they are operational.
 *             If the AWS Data Pipeline Task Runner is launched on a resource managed by AWS Data Pipeline, the web service can use
 *             this call to detect when the task runner application has failed and restart a new instance.</p>
 *
 *         <examples>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.ReportTaskRunnerHeartbeat
 * Content-Length: 84
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * \{"taskrunnerId": "1234567890",
 *  "workerGroup": "wg-12345",
 *  "hostname": "example.com"\}
 *
 *             </request>
 *
 *             <response>
 *
 * Status:
 * x-amzn-RequestId: b3104dc5-0734-11e2-af6f-6bc7a6be60d9
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 20
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * \{"terminate": false\}
 *
 *             </response>
 *         </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, ReportTaskRunnerHeartbeatCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, ReportTaskRunnerHeartbeatCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * // import type { DataPipelineClientConfig } from "@aws-sdk/client-data-pipeline";
 * const config = {}; // type is DataPipelineClientConfig
 * const client = new DataPipelineClient(config);
 * const input = { // ReportTaskRunnerHeartbeatInput
 *   taskrunnerId: "STRING_VALUE", // required
 *   workerGroup: "STRING_VALUE",
 *   hostname: "STRING_VALUE",
 * };
 * const command = new ReportTaskRunnerHeartbeatCommand(input);
 * const response = await client.send(command);
 * // { // ReportTaskRunnerHeartbeatOutput
 * //   terminate: true || false, // required
 * // };
 *
 * ```
 *
 * @param ReportTaskRunnerHeartbeatCommandInput - {@link ReportTaskRunnerHeartbeatCommandInput}
 * @returns {@link ReportTaskRunnerHeartbeatCommandOutput}
 * @see {@link ReportTaskRunnerHeartbeatCommandInput} for command's `input` shape.
 * @see {@link ReportTaskRunnerHeartbeatCommandOutput} for command's `response` shape.
 * @see {@link DataPipelineClientResolvedConfig | config} for DataPipelineClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
 *
 * @throws {@link DataPipelineServiceException}
 * <p>Base exception class for all service exceptions from DataPipeline service.</p>
 *
 *
 * @public
 */
export class ReportTaskRunnerHeartbeatCommand extends $Command
  .classBuilder<
    ReportTaskRunnerHeartbeatCommandInput,
    ReportTaskRunnerHeartbeatCommandOutput,
    DataPipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataPipelineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataPipeline", "ReportTaskRunnerHeartbeat", {})
  .n("DataPipelineClient", "ReportTaskRunnerHeartbeatCommand")
  .sc(ReportTaskRunnerHeartbeat)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReportTaskRunnerHeartbeatInput;
      output: ReportTaskRunnerHeartbeatOutput;
    };
    sdk: {
      input: ReportTaskRunnerHeartbeatCommandInput;
      output: ReportTaskRunnerHeartbeatCommandOutput;
    };
  };
}
