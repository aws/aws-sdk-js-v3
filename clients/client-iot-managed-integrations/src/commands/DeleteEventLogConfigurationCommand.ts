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
import { DeleteEventLogConfigurationRequest } from "../models/models_0";
import {
  de_DeleteEventLogConfigurationCommand,
  se_DeleteEventLogConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEventLogConfigurationCommand}.
 */
export interface DeleteEventLogConfigurationCommandInput extends DeleteEventLogConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEventLogConfigurationCommand}.
 */
export interface DeleteEventLogConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Delete an event log configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, DeleteEventLogConfigurationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, DeleteEventLogConfigurationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // DeleteEventLogConfigurationRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteEventLogConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEventLogConfigurationCommandInput - {@link DeleteEventLogConfigurationCommandInput}
 * @returns {@link DeleteEventLogConfigurationCommandOutput}
 * @see {@link DeleteEventLogConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteEventLogConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service
 *          is unavailable.</p>
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
 * @public
 */
export class DeleteEventLogConfigurationCommand extends $Command
  .classBuilder<
    DeleteEventLogConfigurationCommandInput,
    DeleteEventLogConfigurationCommandOutput,
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
  .s("IotManagedIntegrations", "DeleteEventLogConfiguration", {})
  .n("IoTManagedIntegrationsClient", "DeleteEventLogConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteEventLogConfigurationCommand)
  .de(de_DeleteEventLogConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEventLogConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteEventLogConfigurationCommandInput;
      output: DeleteEventLogConfigurationCommandOutput;
    };
  };
}
