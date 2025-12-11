// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import type { PutHubConfigurationRequest, PutHubConfigurationResponse } from "../models/models_0";
import { PutHubConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutHubConfigurationCommand}.
 */
export interface PutHubConfigurationCommandInput extends PutHubConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutHubConfigurationCommand}.
 */
export interface PutHubConfigurationCommandOutput extends PutHubConfigurationResponse, __MetadataBearer {}

/**
 * <p>Update a hub configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, PutHubConfigurationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, PutHubConfigurationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // PutHubConfigurationRequest
 *   HubTokenTimerExpirySettingInSeconds: Number("long"), // required
 * };
 * const command = new PutHubConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutHubConfigurationResponse
 * //   HubTokenTimerExpirySettingInSeconds: Number("long"),
 * // };
 *
 * ```
 *
 * @param PutHubConfigurationCommandInput - {@link PutHubConfigurationCommandInput}
 * @returns {@link PutHubConfigurationCommandOutput}
 * @see {@link PutHubConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutHubConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
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
export class PutHubConfigurationCommand extends $Command
  .classBuilder<
    PutHubConfigurationCommandInput,
    PutHubConfigurationCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "PutHubConfiguration", {})
  .n("IoTManagedIntegrationsClient", "PutHubConfigurationCommand")
  .sc(PutHubConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutHubConfigurationRequest;
      output: PutHubConfigurationResponse;
    };
    sdk: {
      input: PutHubConfigurationCommandInput;
      output: PutHubConfigurationCommandOutput;
    };
  };
}
