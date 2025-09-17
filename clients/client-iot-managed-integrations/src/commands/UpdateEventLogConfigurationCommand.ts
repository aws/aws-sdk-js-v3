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
import { UpdateEventLogConfigurationRequest } from "../models/models_0";
import {
  de_UpdateEventLogConfigurationCommand,
  se_UpdateEventLogConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEventLogConfigurationCommand}.
 */
export interface UpdateEventLogConfigurationCommandInput extends UpdateEventLogConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEventLogConfigurationCommand}.
 */
export interface UpdateEventLogConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Update an event log configuration by log configuration ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, UpdateEventLogConfigurationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, UpdateEventLogConfigurationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // UpdateEventLogConfigurationRequest
 *   Id: "STRING_VALUE", // required
 *   EventLogLevel: "DEBUG" || "ERROR" || "INFO" || "WARN", // required
 * };
 * const command = new UpdateEventLogConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateEventLogConfigurationCommandInput - {@link UpdateEventLogConfigurationCommandInput}
 * @returns {@link UpdateEventLogConfigurationCommandOutput}
 * @see {@link UpdateEventLogConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateEventLogConfigurationCommandOutput} for command's `response` shape.
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
export class UpdateEventLogConfigurationCommand extends $Command
  .classBuilder<
    UpdateEventLogConfigurationCommandInput,
    UpdateEventLogConfigurationCommandOutput,
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
  .s("IotManagedIntegrations", "UpdateEventLogConfiguration", {})
  .n("IoTManagedIntegrationsClient", "UpdateEventLogConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateEventLogConfigurationCommand)
  .de(de_UpdateEventLogConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEventLogConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateEventLogConfigurationCommandInput;
      output: UpdateEventLogConfigurationCommandOutput;
    };
  };
}
