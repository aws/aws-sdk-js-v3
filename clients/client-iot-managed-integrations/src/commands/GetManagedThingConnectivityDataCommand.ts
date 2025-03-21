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
import { GetManagedThingConnectivityDataRequest, GetManagedThingConnectivityDataResponse } from "../models/models_0";
import {
  de_GetManagedThingConnectivityDataCommand,
  se_GetManagedThingConnectivityDataCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetManagedThingConnectivityDataCommand}.
 */
export interface GetManagedThingConnectivityDataCommandInput extends GetManagedThingConnectivityDataRequest {}
/**
 * @public
 *
 * The output of {@link GetManagedThingConnectivityDataCommand}.
 */
export interface GetManagedThingConnectivityDataCommandOutput
  extends GetManagedThingConnectivityDataResponse,
    __MetadataBearer {}

/**
 * <p>Get the connectivity status of a managed thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, GetManagedThingConnectivityDataCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, GetManagedThingConnectivityDataCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // GetManagedThingConnectivityDataRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetManagedThingConnectivityDataCommand(input);
 * const response = await client.send(command);
 * // { // GetManagedThingConnectivityDataResponse
 * //   ManagedThingId: "STRING_VALUE",
 * //   Connected: true || false,
 * //   Timestamp: new Date("TIMESTAMP"),
 * //   DisconnectReason: "AUTH_ERROR" || "CLIENT_INITIATED_DISCONNECT" || "CLIENT_ERROR" || "CONNECTION_LOST" || "DUPLICATE_CLIENTID" || "FORBIDDEN_ACCESS" || "MQTT_KEEP_ALIVE_TIMEOUT" || "SERVER_ERROR" || "SERVER_INITIATED_DISCONNECT" || "THROTTLED" || "WEBSOCKET_TTL_EXPIRATION" || "CUSTOMAUTH_TTL_EXPIRATION" || "UNKNOWN" || "NONE",
 * // };
 *
 * ```
 *
 * @param GetManagedThingConnectivityDataCommandInput - {@link GetManagedThingConnectivityDataCommandInput}
 * @returns {@link GetManagedThingConnectivityDataCommandOutput}
 * @see {@link GetManagedThingConnectivityDataCommandInput} for command's `input` shape.
 * @see {@link GetManagedThingConnectivityDataCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetManagedThingConnectivityDataCommand extends $Command
  .classBuilder<
    GetManagedThingConnectivityDataCommandInput,
    GetManagedThingConnectivityDataCommandOutput,
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
  .s("IotManagedIntegrations", "GetManagedThingConnectivityData", {})
  .n("IoTManagedIntegrationsClient", "GetManagedThingConnectivityDataCommand")
  .f(void 0, void 0)
  .ser(se_GetManagedThingConnectivityDataCommand)
  .de(de_GetManagedThingConnectivityDataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetManagedThingConnectivityDataRequest;
      output: GetManagedThingConnectivityDataResponse;
    };
    sdk: {
      input: GetManagedThingConnectivityDataCommandInput;
      output: GetManagedThingConnectivityDataCommandOutput;
    };
  };
}
