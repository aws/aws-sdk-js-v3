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
import type { SendManagedThingCommandRequest, SendManagedThingCommandResponse } from "../models/models_0";
import { SendManagedThingCommand$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendManagedThingCommandCommand}.
 */
export interface SendManagedThingCommandCommandInput extends SendManagedThingCommandRequest {}
/**
 * @public
 *
 * The output of {@link SendManagedThingCommandCommand}.
 */
export interface SendManagedThingCommandCommandOutput extends SendManagedThingCommandResponse, __MetadataBearer {}

/**
 * <p>Send the command to the device represented by the managed thing. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, SendManagedThingCommandCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, SendManagedThingCommandCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // SendManagedThingCommandRequest
 *   ManagedThingId: "STRING_VALUE", // required
 *   Endpoints: [ // CommandEndpoints // required
 *     { // CommandEndpoint
 *       endpointId: "STRING_VALUE", // required
 *       capabilities: [ // CommandCapabilities // required
 *         { // CommandCapability
 *           id: "STRING_VALUE", // required
 *           name: "STRING_VALUE", // required
 *           version: "STRING_VALUE", // required
 *           actions: [ // CapabilityActions // required
 *             { // CapabilityAction
 *               name: "STRING_VALUE", // required
 *               ref: "STRING_VALUE",
 *               actionTraceId: "STRING_VALUE",
 *               parameters: "DOCUMENT_VALUE",
 *             },
 *           ],
 *         },
 *       ],
 *     },
 *   ],
 *   ConnectorAssociationId: "STRING_VALUE",
 *   AccountAssociationId: "STRING_VALUE",
 * };
 * const command = new SendManagedThingCommandCommand(input);
 * const response = await client.send(command);
 * // { // SendManagedThingCommandResponse
 * //   TraceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendManagedThingCommandCommandInput - {@link SendManagedThingCommandCommandInput}
 * @returns {@link SendManagedThingCommandCommandOutput}
 * @see {@link SendManagedThingCommandCommandInput} for command's `input` shape.
 * @see {@link SendManagedThingCommandCommandOutput} for command's `response` shape.
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
export class SendManagedThingCommandCommand extends $Command
  .classBuilder<
    SendManagedThingCommandCommandInput,
    SendManagedThingCommandCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "SendManagedThingCommand", {})
  .n("IoTManagedIntegrationsClient", "SendManagedThingCommandCommand")
  .sc(SendManagedThingCommand$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendManagedThingCommandRequest;
      output: SendManagedThingCommandResponse;
    };
    sdk: {
      input: SendManagedThingCommandCommandInput;
      output: SendManagedThingCommandCommandOutput;
    };
  };
}
