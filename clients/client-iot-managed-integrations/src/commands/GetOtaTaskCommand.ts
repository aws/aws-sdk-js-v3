// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import { GetOtaTaskRequest, GetOtaTaskResponse } from "../models/models_0";
import { GetOtaTask } from "../schemas/schemas_13_Ota";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOtaTaskCommand}.
 */
export interface GetOtaTaskCommandInput extends GetOtaTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetOtaTaskCommand}.
 */
export interface GetOtaTaskCommandOutput extends GetOtaTaskResponse, __MetadataBearer {}

/**
 * <p>Get the over-the-air (OTA) task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, GetOtaTaskCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, GetOtaTaskCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // GetOtaTaskRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetOtaTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetOtaTaskResponse
 * //   TaskId: "STRING_VALUE",
 * //   TaskArn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   S3Url: "STRING_VALUE",
 * //   Protocol: "HTTP",
 * //   OtaType: "ONE_TIME" || "CONTINUOUS",
 * //   OtaTargetQueryString: "STRING_VALUE",
 * //   OtaMechanism: "PUSH",
 * //   Target: [ // Target
 * //     "STRING_VALUE",
 * //   ],
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * //   TaskConfigurationId: "STRING_VALUE",
 * //   TaskProcessingDetails: { // TaskProcessingDetails
 * //     NumberOfCanceledThings: Number("int"),
 * //     NumberOfFailedThings: Number("int"),
 * //     NumberOfInProgressThings: Number("int"),
 * //     numberOfQueuedThings: Number("int"),
 * //     numberOfRejectedThings: Number("int"),
 * //     numberOfRemovedThings: Number("int"),
 * //     numberOfSucceededThings: Number("int"),
 * //     numberOfTimedOutThings: Number("int"),
 * //     processingTargets: [
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   OtaSchedulingConfig: { // OtaTaskSchedulingConfig
 * //     EndBehavior: "STOP_ROLLOUT" || "CANCEL" || "FORCE_CANCEL",
 * //     EndTime: "STRING_VALUE",
 * //     MaintenanceWindows: [ // ScheduleMaintenanceWindowList
 * //       { // ScheduleMaintenanceWindow
 * //         DurationInMinutes: Number("int"),
 * //         StartTime: "STRING_VALUE",
 * //       },
 * //     ],
 * //     StartTime: "STRING_VALUE",
 * //   },
 * //   OtaTaskExecutionRetryConfig: { // OtaTaskExecutionRetryConfig
 * //     RetryConfigCriteria: [ // RetryConfigCriteriaList
 * //       { // RetryConfigCriteria
 * //         FailureType: "FAILED" || "TIMED_OUT" || "ALL",
 * //         MinNumberOfRetries: Number("int"),
 * //       },
 * //     ],
 * //   },
 * //   Status: "IN_PROGRESS" || "CANCELED" || "COMPLETED" || "DELETION_IN_PROGRESS" || "SCHEDULED",
 * //   Tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetOtaTaskCommandInput - {@link GetOtaTaskCommandInput}
 * @returns {@link GetOtaTaskCommandOutput}
 * @see {@link GetOtaTaskCommandInput} for command's `input` shape.
 * @see {@link GetOtaTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service is unavailable.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation error occurred when performing the API request.</p>
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from IoTManagedIntegrations service.</p>
 *
 *
 * @public
 */
export class GetOtaTaskCommand extends $Command
  .classBuilder<
    GetOtaTaskCommandInput,
    GetOtaTaskCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "GetOtaTask", {})
  .n("IoTManagedIntegrationsClient", "GetOtaTaskCommand")
  .sc(GetOtaTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOtaTaskRequest;
      output: GetOtaTaskResponse;
    };
    sdk: {
      input: GetOtaTaskCommandInput;
      output: GetOtaTaskCommandOutput;
    };
  };
}
