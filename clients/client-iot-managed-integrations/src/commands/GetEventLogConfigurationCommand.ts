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
import type { GetEventLogConfigurationRequest, GetEventLogConfigurationResponse } from "../models/models_0";
import { GetEventLogConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEventLogConfigurationCommand}.
 */
export interface GetEventLogConfigurationCommandInput extends GetEventLogConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetEventLogConfigurationCommand}.
 */
export interface GetEventLogConfigurationCommandOutput extends GetEventLogConfigurationResponse, __MetadataBearer {}

/**
 * <p>Get an event log configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, GetEventLogConfigurationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, GetEventLogConfigurationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // GetEventLogConfigurationRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetEventLogConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetEventLogConfigurationResponse
 * //   Id: "STRING_VALUE",
 * //   ResourceType: "STRING_VALUE",
 * //   ResourceId: "STRING_VALUE",
 * //   EventLogLevel: "DEBUG" || "ERROR" || "INFO" || "WARN",
 * // };
 *
 * ```
 *
 * @param GetEventLogConfigurationCommandInput - {@link GetEventLogConfigurationCommandInput}
 * @returns {@link GetEventLogConfigurationCommandOutput}
 * @see {@link GetEventLogConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetEventLogConfigurationCommandOutput} for command's `response` shape.
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
export class GetEventLogConfigurationCommand extends $Command
  .classBuilder<
    GetEventLogConfigurationCommandInput,
    GetEventLogConfigurationCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "GetEventLogConfiguration", {})
  .n("IoTManagedIntegrationsClient", "GetEventLogConfigurationCommand")
  .sc(GetEventLogConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEventLogConfigurationRequest;
      output: GetEventLogConfigurationResponse;
    };
    sdk: {
      input: GetEventLogConfigurationCommandInput;
      output: GetEventLogConfigurationCommandOutput;
    };
  };
}
