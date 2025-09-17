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
import { GetHubConfigurationRequest, GetHubConfigurationResponse } from "../models/models_0";
import { de_GetHubConfigurationCommand, se_GetHubConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetHubConfigurationCommand}.
 */
export interface GetHubConfigurationCommandInput extends GetHubConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetHubConfigurationCommand}.
 */
export interface GetHubConfigurationCommandOutput extends GetHubConfigurationResponse, __MetadataBearer {}

/**
 * <p>Get a hub configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, GetHubConfigurationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, GetHubConfigurationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = {};
 * const command = new GetHubConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetHubConfigurationResponse
 * //   HubTokenTimerExpirySettingInSeconds: Number("long"),
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetHubConfigurationCommandInput - {@link GetHubConfigurationCommandInput}
 * @returns {@link GetHubConfigurationCommandOutput}
 * @see {@link GetHubConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetHubConfigurationCommandOutput} for command's `response` shape.
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
export class GetHubConfigurationCommand extends $Command
  .classBuilder<
    GetHubConfigurationCommandInput,
    GetHubConfigurationCommandOutput,
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
  .s("IotManagedIntegrations", "GetHubConfiguration", {})
  .n("IoTManagedIntegrationsClient", "GetHubConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetHubConfigurationCommand)
  .de(de_GetHubConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetHubConfigurationResponse;
    };
    sdk: {
      input: GetHubConfigurationCommandInput;
      output: GetHubConfigurationCommandOutput;
    };
  };
}
