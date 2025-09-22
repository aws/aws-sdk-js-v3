// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTJobsDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTJobsDataPlaneClient";
import { UpdateJobExecutionRequest, UpdateJobExecutionResponse } from "../models/models_0";
import { UpdateJobExecution } from "../schemas/schemas_1_Execution";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateJobExecutionCommand}.
 */
export interface UpdateJobExecutionCommandInput extends UpdateJobExecutionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateJobExecutionCommand}.
 */
export interface UpdateJobExecutionCommandOutput extends UpdateJobExecutionResponse, __MetadataBearer {}

/**
 * <p>Updates the status of a job execution.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotjobsdataplane.html">UpdateJobExecution</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTJobsDataPlaneClient, UpdateJobExecutionCommand } from "@aws-sdk/client-iot-jobs-data-plane"; // ES Modules import
 * // const { IoTJobsDataPlaneClient, UpdateJobExecutionCommand } = require("@aws-sdk/client-iot-jobs-data-plane"); // CommonJS import
 * // import type { IoTJobsDataPlaneClientConfig } from "@aws-sdk/client-iot-jobs-data-plane";
 * const config = {}; // type is IoTJobsDataPlaneClientConfig
 * const client = new IoTJobsDataPlaneClient(config);
 * const input = { // UpdateJobExecutionRequest
 *   jobId: "STRING_VALUE", // required
 *   thingName: "STRING_VALUE", // required
 *   status: "QUEUED" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED" || "TIMED_OUT" || "REJECTED" || "REMOVED" || "CANCELED", // required
 *   statusDetails: { // DetailsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   stepTimeoutInMinutes: Number("long"),
 *   expectedVersion: Number("long"),
 *   includeJobExecutionState: true || false,
 *   includeJobDocument: true || false,
 *   executionNumber: Number("long"),
 * };
 * const command = new UpdateJobExecutionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateJobExecutionResponse
 * //   executionState: { // JobExecutionState
 * //     status: "QUEUED" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED" || "TIMED_OUT" || "REJECTED" || "REMOVED" || "CANCELED",
 * //     statusDetails: { // DetailsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     versionNumber: Number("long"),
 * //   },
 * //   jobDocument: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateJobExecutionCommandInput - {@link UpdateJobExecutionCommandInput}
 * @returns {@link UpdateJobExecutionCommandOutput}
 * @see {@link UpdateJobExecutionCommandInput} for command's `input` shape.
 * @see {@link UpdateJobExecutionCommandOutput} for command's `response` shape.
 * @see {@link IoTJobsDataPlaneClientResolvedConfig | config} for IoTJobsDataPlaneClient's `config` shape.
 *
 * @throws {@link CertificateValidationException} (client fault)
 *  <p>The certificate is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The contents of the request were invalid.</p>
 *
 * @throws {@link InvalidStateTransitionException} (client fault)
 *  <p>An update attempted to change the job execution to a state that is invalid because of
 *          the job execution's current state (for example, an attempt to change a request in state
 *          SUCCESS to state IN_PROGRESS). In this case, the body of the error message also contains
 *          the executionState field.</p>
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
export class UpdateJobExecutionCommand extends $Command
  .classBuilder<
    UpdateJobExecutionCommandInput,
    UpdateJobExecutionCommandOutput,
    IoTJobsDataPlaneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTJobsDataPlaneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotLaserThingJobManagerExternalService", "UpdateJobExecution", {})
  .n("IoTJobsDataPlaneClient", "UpdateJobExecutionCommand")
  .sc(UpdateJobExecution)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateJobExecutionRequest;
      output: UpdateJobExecutionResponse;
    };
    sdk: {
      input: UpdateJobExecutionCommandInput;
      output: UpdateJobExecutionCommandOutput;
    };
  };
}
