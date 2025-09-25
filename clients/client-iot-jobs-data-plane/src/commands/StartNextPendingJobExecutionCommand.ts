// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTJobsDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTJobsDataPlaneClient";
import { StartNextPendingJobExecutionRequest, StartNextPendingJobExecutionResponse } from "../models/models_0";
import { StartNextPendingJobExecution } from "../schemas/schemas_1_Execution";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartNextPendingJobExecutionCommand}.
 */
export interface StartNextPendingJobExecutionCommandInput extends StartNextPendingJobExecutionRequest {}
/**
 * @public
 *
 * The output of {@link StartNextPendingJobExecutionCommand}.
 */
export interface StartNextPendingJobExecutionCommandOutput
  extends StartNextPendingJobExecutionResponse,
    __MetadataBearer {}

/**
 * <p>Gets and starts the next pending (status IN_PROGRESS or QUEUED) job execution for a
 *          thing.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartNextPendingJobExecution</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTJobsDataPlaneClient, StartNextPendingJobExecutionCommand } from "@aws-sdk/client-iot-jobs-data-plane"; // ES Modules import
 * // const { IoTJobsDataPlaneClient, StartNextPendingJobExecutionCommand } = require("@aws-sdk/client-iot-jobs-data-plane"); // CommonJS import
 * // import type { IoTJobsDataPlaneClientConfig } from "@aws-sdk/client-iot-jobs-data-plane";
 * const config = {}; // type is IoTJobsDataPlaneClientConfig
 * const client = new IoTJobsDataPlaneClient(config);
 * const input = { // StartNextPendingJobExecutionRequest
 *   thingName: "STRING_VALUE", // required
 *   statusDetails: { // DetailsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   stepTimeoutInMinutes: Number("long"),
 * };
 * const command = new StartNextPendingJobExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StartNextPendingJobExecutionResponse
 * //   execution: { // JobExecution
 * //     jobId: "STRING_VALUE",
 * //     thingName: "STRING_VALUE",
 * //     status: "QUEUED" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED" || "TIMED_OUT" || "REJECTED" || "REMOVED" || "CANCELED",
 * //     statusDetails: { // DetailsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     queuedAt: Number("long"),
 * //     startedAt: Number("long"),
 * //     lastUpdatedAt: Number("long"),
 * //     approximateSecondsBeforeTimedOut: Number("long"),
 * //     versionNumber: Number("long"),
 * //     executionNumber: Number("long"),
 * //     jobDocument: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartNextPendingJobExecutionCommandInput - {@link StartNextPendingJobExecutionCommandInput}
 * @returns {@link StartNextPendingJobExecutionCommandOutput}
 * @see {@link StartNextPendingJobExecutionCommandInput} for command's `input` shape.
 * @see {@link StartNextPendingJobExecutionCommandOutput} for command's `response` shape.
 * @see {@link IoTJobsDataPlaneClientResolvedConfig | config} for IoTJobsDataPlaneClient's `config` shape.
 *
 * @throws {@link CertificateValidationException} (client fault)
 *  <p>The certificate is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The contents of the request were invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTJobsDataPlaneServiceException}
 * <p>Base exception class for all service exceptions from IoTJobsDataPlane service.</p>
 *
 *
 * @public
 */
export class StartNextPendingJobExecutionCommand extends $Command
  .classBuilder<
    StartNextPendingJobExecutionCommandInput,
    StartNextPendingJobExecutionCommandOutput,
    IoTJobsDataPlaneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTJobsDataPlaneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotLaserThingJobManagerExternalService", "StartNextPendingJobExecution", {})
  .n("IoTJobsDataPlaneClient", "StartNextPendingJobExecutionCommand")
  .sc(StartNextPendingJobExecution)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartNextPendingJobExecutionRequest;
      output: StartNextPendingJobExecutionResponse;
    };
    sdk: {
      input: StartNextPendingJobExecutionCommandInput;
      output: StartNextPendingJobExecutionCommandOutput;
    };
  };
}
