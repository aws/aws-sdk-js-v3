// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetOtaTaskRequest, GetOtaTaskResponse } from "../models/models_0";
import { GetOtaTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Get details of the over-the-air (OTA) task by its task id.
 *
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
 *
 * User is not authorized.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal error from the service that indicates an unexpected error or that the service is unavailable.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A validation error occurred when performing the API request.
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 *
 * Base exception class for all service exceptions from IoTManagedIntegrations service.
 *
 * @public
 */
export class GetOtaTaskCommand extends command<GetOtaTaskCommandInput, GetOtaTaskCommandOutput>(
  _ep0,
  _mw0,
  "GetOtaTask",
  GetOtaTask$
) {
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
