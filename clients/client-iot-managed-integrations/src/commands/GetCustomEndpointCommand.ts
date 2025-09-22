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
import { GetCustomEndpointRequest, GetCustomEndpointResponse } from "../models/models_0";
import { GetCustomEndpoint } from "../schemas/schemas_5_Endpoint";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCustomEndpointCommand}.
 */
export interface GetCustomEndpointCommandInput extends GetCustomEndpointRequest {}
/**
 * @public
 *
 * The output of {@link GetCustomEndpointCommand}.
 */
export interface GetCustomEndpointCommandOutput extends GetCustomEndpointResponse, __MetadataBearer {}

/**
 * <p>Returns the IoT managed integrations custom endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, GetCustomEndpointCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, GetCustomEndpointCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = {};
 * const command = new GetCustomEndpointCommand(input);
 * const response = await client.send(command);
 * // { // GetCustomEndpointResponse
 * //   EndpointAddress: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetCustomEndpointCommandInput - {@link GetCustomEndpointCommandInput}
 * @returns {@link GetCustomEndpointCommandOutput}
 * @see {@link GetCustomEndpointCommandInput} for command's `input` shape.
 * @see {@link GetCustomEndpointCommandOutput} for command's `response` shape.
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
export class GetCustomEndpointCommand extends $Command
  .classBuilder<
    GetCustomEndpointCommandInput,
    GetCustomEndpointCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "GetCustomEndpoint", {})
  .n("IoTManagedIntegrationsClient", "GetCustomEndpointCommand")
  .sc(GetCustomEndpoint)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetCustomEndpointResponse;
    };
    sdk: {
      input: GetCustomEndpointCommandInput;
      output: GetCustomEndpointCommandOutput;
    };
  };
}
