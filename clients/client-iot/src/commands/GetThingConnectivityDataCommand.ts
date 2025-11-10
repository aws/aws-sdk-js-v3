// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetThingConnectivityDataRequest, GetThingConnectivityDataResponse } from "../models/models_1";
import { GetThingConnectivityData } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetThingConnectivityDataCommand}.
 */
export interface GetThingConnectivityDataCommandInput extends GetThingConnectivityDataRequest {}
/**
 * @public
 *
 * The output of {@link GetThingConnectivityDataCommand}.
 */
export interface GetThingConnectivityDataCommandOutput extends GetThingConnectivityDataResponse, __MetadataBearer {}

/**
 * <p>Retrieves the live connectivity status per device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetThingConnectivityDataCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetThingConnectivityDataCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // GetThingConnectivityDataRequest
 *   thingName: "STRING_VALUE", // required
 * };
 * const command = new GetThingConnectivityDataCommand(input);
 * const response = await client.send(command);
 * // { // GetThingConnectivityDataResponse
 * //   thingName: "STRING_VALUE",
 * //   connected: true || false,
 * //   timestamp: new Date("TIMESTAMP"),
 * //   disconnectReason: "AUTH_ERROR" || "CLIENT_INITIATED_DISCONNECT" || "CLIENT_ERROR" || "CONNECTION_LOST" || "DUPLICATE_CLIENTID" || "FORBIDDEN_ACCESS" || "MQTT_KEEP_ALIVE_TIMEOUT" || "SERVER_ERROR" || "SERVER_INITIATED_DISCONNECT" || "THROTTLED" || "WEBSOCKET_TTL_EXPIRATION" || "CUSTOMAUTH_TTL_EXPIRATION" || "UNKNOWN" || "NONE",
 * // };
 *
 * ```
 *
 * @param GetThingConnectivityDataCommandInput - {@link GetThingConnectivityDataCommandInput}
 * @returns {@link GetThingConnectivityDataCommandOutput}
 * @see {@link GetThingConnectivityDataCommandInput} for command's `input` shape.
 * @see {@link GetThingConnectivityDataCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link IndexNotReadyException} (client fault)
 *  <p>The index is not ready.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
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
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class GetThingConnectivityDataCommand extends $Command
  .classBuilder<
    GetThingConnectivityDataCommandInput,
    GetThingConnectivityDataCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "GetThingConnectivityData", {})
  .n("IoTClient", "GetThingConnectivityDataCommand")
  .sc(GetThingConnectivityData)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetThingConnectivityDataRequest;
      output: GetThingConnectivityDataResponse;
    };
    sdk: {
      input: GetThingConnectivityDataCommandInput;
      output: GetThingConnectivityDataCommandOutput;
    };
  };
}
