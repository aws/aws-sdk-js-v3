// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import {
  CreateOtaTaskRequest,
  CreateOtaTaskRequestFilterSensitiveLog,
  CreateOtaTaskResponse,
} from "../models/models_0";
import { de_CreateOtaTaskCommand, se_CreateOtaTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Create an over-the-air (OTA) task to update a device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, CreateOtaTaskCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, CreateOtaTaskCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
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
 *  <p>User is not authorized.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict with the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service
 *          is unavailable.</p>
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
export class CreateOtaTaskCommand extends $Command
  .classBuilder<
    CreateOtaTaskCommandInput,
    CreateOtaTaskCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotManagedIntegrations", "CreateOtaTask", {})
  .n("IoTManagedIntegrationsClient", "CreateOtaTaskCommand")
  .f(CreateOtaTaskRequestFilterSensitiveLog, void 0)
  .ser(se_CreateOtaTaskCommand)
  .de(de_CreateOtaTaskCommand)
  .build() {
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
