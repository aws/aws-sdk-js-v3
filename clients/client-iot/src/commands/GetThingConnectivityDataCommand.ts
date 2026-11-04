// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetThingConnectivityDataRequest, GetThingConnectivityDataResponse } from "../models/models_1";
import { GetThingConnectivityData$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves the live connectivity status per device. If a device has never connected to IoT Core or was disconnected for more than 1 hour before fleet indexing's `thingConnectivityIndexingMode` was enabled, the response will have the `connected` field set to `false` with no additional session details.
 *
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
 *   includeSocketInformation: true || false,
 * };
 * const command = new GetThingConnectivityDataCommand(input);
 * const response = await client.send(command);
 * // { // GetThingConnectivityDataResponse
 * //   thingName: "STRING_VALUE",
 * //   connected: true || false,
 * //   timestamp: new Date("TIMESTAMP"),
 * //   disconnectReason: "AUTH_ERROR" || "CLIENT_INITIATED_DISCONNECT" || "CLIENT_ERROR" || "CONNECTION_LOST" || "DUPLICATE_CLIENTID" || "FORBIDDEN_ACCESS" || "MQTT_KEEP_ALIVE_TIMEOUT" || "SERVER_ERROR" || "SERVER_INITIATED_DISCONNECT" || "API_INITIATED_DISCONNECT" || "THROTTLED" || "WEBSOCKET_TTL_EXPIRATION" || "CUSTOMAUTH_TTL_EXPIRATION" || "UNKNOWN" || "NONE",
 * //   sourceIp: "STRING_VALUE",
 * //   sourcePort: Number("int"),
 * //   targetIp: "STRING_VALUE",
 * //   targetPort: Number("int"),
 * //   vpcEndpointId: "STRING_VALUE",
 * //   keepAliveDuration: Number("int"),
 * //   cleanSession: true || false,
 * //   sessionExpiry: Number("long"),
 * //   clientId: "STRING_VALUE",
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
 *
 * The index is not ready.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class GetThingConnectivityDataCommand extends command<GetThingConnectivityDataCommandInput, GetThingConnectivityDataCommandOutput>(
  _ep0,
  _mw0,
  "GetThingConnectivityData",
  GetThingConnectivityData$
) {
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
