// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateOtaTaskRequest, CreateOtaTaskResponse } from "../models/models_0";
import { CreateOtaTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateOtaTaskCommand}.
 */
export interface CreateOtaTaskCommandInput extends CreateOtaTaskRequest {}
/**
 * @public
 *
 * The output of {@link CreateOtaTaskCommand}.
 */
export interface CreateOtaTaskCommandOutput extends CreateOtaTaskResponse, __MetadataBearer {}

/**
 * Create an over-the-air (OTA) task to target a device.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, CreateOtaTaskCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, CreateOtaTaskCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // CreateOtaTaskRequest
 *   Description: "STRING_VALUE",
 *   S3Url: "STRING_VALUE", // required
 *   Protocol: "HTTP",
 *   Target: [ // Target
 *     "STRING_VALUE",
 *   ],
 *   TaskConfigurationId: "STRING_VALUE",
 *   OtaMechanism: "PUSH",
 *   OtaType: "ONE_TIME" || "CONTINUOUS", // required
 *   OtaTargetQueryString: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   OtaSchedulingConfig: { // OtaTaskSchedulingConfig
 *     EndBehavior: "STOP_ROLLOUT" || "CANCEL" || "FORCE_CANCEL",
 *     EndTime: "STRING_VALUE",
 *     MaintenanceWindows: [ // ScheduleMaintenanceWindowList
 *       { // ScheduleMaintenanceWindow
 *         DurationInMinutes: Number("int"),
 *         StartTime: "STRING_VALUE",
 *       },
 *     ],
 *     StartTime: "STRING_VALUE",
 *   },
 *   OtaTaskExecutionRetryConfig: { // OtaTaskExecutionRetryConfig
 *     RetryConfigCriteria: [ // RetryConfigCriteriaList
 *       { // RetryConfigCriteria
 *         FailureType: "FAILED" || "TIMED_OUT" || "ALL",
 *         MinNumberOfRetries: Number("int"),
 *       },
 *     ],
 *   },
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateOtaTaskCommand(input);
 * const response = await client.send(command);
 * // { // CreateOtaTaskResponse
 * //   TaskId: "STRING_VALUE",
 * //   TaskArn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateOtaTaskCommandInput - {@link CreateOtaTaskCommandInput}
 * @returns {@link CreateOtaTaskCommandOutput}
 * @see {@link CreateOtaTaskCommandInput} for command's `input` shape.
 * @see {@link CreateOtaTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User is not authorized.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict with the request.
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
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
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
export class CreateOtaTaskCommand extends command<CreateOtaTaskCommandInput, CreateOtaTaskCommandOutput>(
  _ep0,
  _mw0,
  "CreateOtaTask",
  CreateOtaTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOtaTaskRequest;
      output: CreateOtaTaskResponse;
    };
    sdk: {
      input: CreateOtaTaskCommandInput;
      output: CreateOtaTaskCommandOutput;
    };
  };
}
