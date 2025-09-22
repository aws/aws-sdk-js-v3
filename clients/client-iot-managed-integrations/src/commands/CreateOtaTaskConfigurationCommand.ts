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
import { CreateOtaTaskConfigurationRequest, CreateOtaTaskConfigurationResponse } from "../models/models_0";
import { CreateOtaTaskConfiguration } from "../schemas/schemas_13_Ota";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateOtaTaskConfigurationCommand}.
 */
export interface CreateOtaTaskConfigurationCommandInput extends CreateOtaTaskConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateOtaTaskConfigurationCommand}.
 */
export interface CreateOtaTaskConfigurationCommandOutput extends CreateOtaTaskConfigurationResponse, __MetadataBearer {}

/**
 * <p>Create a configuraiton for the over-the-air (OTA) task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, CreateOtaTaskConfigurationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, CreateOtaTaskConfigurationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // CreateOtaTaskConfigurationRequest
 *   Description: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 *   PushConfig: { // PushConfig
 *     AbortConfig: { // OtaTaskAbortConfig
 *       AbortConfigCriteriaList: [ // AbortConfigCriteriaList
 *         { // AbortConfigCriteria
 *           Action: "CANCEL",
 *           FailureType: "FAILED" || "REJECTED" || "TIMED_OUT" || "ALL",
 *           MinNumberOfExecutedThings: Number("int"),
 *           ThresholdPercentage: Number("double"),
 *         },
 *       ],
 *     },
 *     RolloutConfig: { // OtaTaskExecutionRolloutConfig
 *       ExponentialRolloutRate: { // ExponentialRolloutRate
 *         BaseRatePerMinute: Number("int"),
 *         IncrementFactor: Number("double"),
 *         RateIncreaseCriteria: { // RolloutRateIncreaseCriteria
 *           numberOfNotifiedThings: Number("int"),
 *           numberOfSucceededThings: Number("int"),
 *         },
 *       },
 *       MaximumPerMinute: Number("int"),
 *     },
 *     TimeoutConfig: { // OtaTaskTimeoutConfig
 *       InProgressTimeoutInMinutes: Number("long"),
 *     },
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateOtaTaskConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateOtaTaskConfigurationResponse
 * //   TaskConfigurationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateOtaTaskConfigurationCommandInput - {@link CreateOtaTaskConfigurationCommandInput}
 * @returns {@link CreateOtaTaskConfigurationCommandOutput}
 * @see {@link CreateOtaTaskConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateOtaTaskConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict with the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service is unavailable.</p>
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
export class CreateOtaTaskConfigurationCommand extends $Command
  .classBuilder<
    CreateOtaTaskConfigurationCommandInput,
    CreateOtaTaskConfigurationCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "CreateOtaTaskConfiguration", {})
  .n("IoTManagedIntegrationsClient", "CreateOtaTaskConfigurationCommand")
  .sc(CreateOtaTaskConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOtaTaskConfigurationRequest;
      output: CreateOtaTaskConfigurationResponse;
    };
    sdk: {
      input: CreateOtaTaskConfigurationCommandInput;
      output: CreateOtaTaskConfigurationCommandOutput;
    };
  };
}
