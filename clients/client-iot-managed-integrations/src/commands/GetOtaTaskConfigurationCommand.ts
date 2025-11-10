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
import { GetOtaTaskConfigurationRequest, GetOtaTaskConfigurationResponse } from "../models/models_0";
import { GetOtaTaskConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOtaTaskConfigurationCommand}.
 */
export interface GetOtaTaskConfigurationCommandInput extends GetOtaTaskConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetOtaTaskConfigurationCommand}.
 */
export interface GetOtaTaskConfigurationCommandOutput extends GetOtaTaskConfigurationResponse, __MetadataBearer {}

/**
 * <p>Get a configuraiton for the over-the-air (OTA) task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, GetOtaTaskConfigurationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, GetOtaTaskConfigurationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // GetOtaTaskConfigurationRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetOtaTaskConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetOtaTaskConfigurationResponse
 * //   TaskConfigurationId: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   PushConfig: { // PushConfig
 * //     AbortConfig: { // OtaTaskAbortConfig
 * //       AbortConfigCriteriaList: [ // AbortConfigCriteriaList
 * //         { // AbortConfigCriteria
 * //           Action: "CANCEL",
 * //           FailureType: "FAILED" || "REJECTED" || "TIMED_OUT" || "ALL",
 * //           MinNumberOfExecutedThings: Number("int"),
 * //           ThresholdPercentage: Number("double"),
 * //         },
 * //       ],
 * //     },
 * //     RolloutConfig: { // OtaTaskExecutionRolloutConfig
 * //       ExponentialRolloutRate: { // ExponentialRolloutRate
 * //         BaseRatePerMinute: Number("int"),
 * //         IncrementFactor: Number("double"),
 * //         RateIncreaseCriteria: { // RolloutRateIncreaseCriteria
 * //           numberOfNotifiedThings: Number("int"),
 * //           numberOfSucceededThings: Number("int"),
 * //         },
 * //       },
 * //       MaximumPerMinute: Number("int"),
 * //     },
 * //     TimeoutConfig: { // OtaTaskTimeoutConfig
 * //       InProgressTimeoutInMinutes: Number("long"),
 * //     },
 * //   },
 * //   Description: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetOtaTaskConfigurationCommandInput - {@link GetOtaTaskConfigurationCommandInput}
 * @returns {@link GetOtaTaskConfigurationCommandOutput}
 * @see {@link GetOtaTaskConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetOtaTaskConfigurationCommandOutput} for command's `response` shape.
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
export class GetOtaTaskConfigurationCommand extends $Command
  .classBuilder<
    GetOtaTaskConfigurationCommandInput,
    GetOtaTaskConfigurationCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "GetOtaTaskConfiguration", {})
  .n("IoTManagedIntegrationsClient", "GetOtaTaskConfigurationCommand")
  .sc(GetOtaTaskConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOtaTaskConfigurationRequest;
      output: GetOtaTaskConfigurationResponse;
    };
    sdk: {
      input: GetOtaTaskConfigurationCommandInput;
      output: GetOtaTaskConfigurationCommandOutput;
    };
  };
}
