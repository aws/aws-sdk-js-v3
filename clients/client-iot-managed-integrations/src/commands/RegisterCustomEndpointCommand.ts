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
import { RegisterCustomEndpointRequest, RegisterCustomEndpointResponse } from "../models/models_0";
import { de_RegisterCustomEndpointCommand, se_RegisterCustomEndpointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterCustomEndpointCommand}.
 */
export interface RegisterCustomEndpointCommandInput extends RegisterCustomEndpointRequest {}
/**
 * @public
 *
 * The output of {@link RegisterCustomEndpointCommand}.
 */
export interface RegisterCustomEndpointCommandOutput extends RegisterCustomEndpointResponse, __MetadataBearer {}

/**
 * <p>Customers can request IoT managed integrations to manage the server trust for them or bring their own
 *          external server trusts for the custom domain. Returns an IoT managed integrations endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, RegisterCustomEndpointCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, RegisterCustomEndpointCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = {};
 * const command = new RegisterCustomEndpointCommand(input);
 * const response = await client.send(command);
 * // { // RegisterCustomEndpointResponse
 * //   EndpointAddress: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param RegisterCustomEndpointCommandInput - {@link RegisterCustomEndpointCommandInput}
 * @returns {@link RegisterCustomEndpointCommandOutput}
 * @see {@link RegisterCustomEndpointCommandInput} for command's `input` shape.
 * @see {@link RegisterCustomEndpointCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
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
export class RegisterCustomEndpointCommand extends $Command
  .classBuilder<
    RegisterCustomEndpointCommandInput,
    RegisterCustomEndpointCommandOutput,
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
  .s("IotManagedIntegrations", "RegisterCustomEndpoint", {})
  .n("IoTManagedIntegrationsClient", "RegisterCustomEndpointCommand")
  .f(void 0, void 0)
  .ser(se_RegisterCustomEndpointCommand)
  .de(de_RegisterCustomEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: RegisterCustomEndpointResponse;
    };
    sdk: {
      input: RegisterCustomEndpointCommandInput;
      output: RegisterCustomEndpointCommandOutput;
    };
  };
}
