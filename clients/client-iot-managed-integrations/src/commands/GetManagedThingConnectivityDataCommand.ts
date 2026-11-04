// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetManagedThingConnectivityDataRequest,
  GetManagedThingConnectivityDataResponse,
} from "../models/models_0";
import { GetManagedThingConnectivityData$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetManagedThingConnectivityDataCommandOutput extends GetManagedThingConnectivityDataResponse, __MetadataBearer {}

/**
 * Get the connectivity status of a managed thing.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, GetManagedThingConnectivityDataCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, GetManagedThingConnectivityDataCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
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
 *
 * User is not authorized.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal error from the service that indicates an unexpected error or that the service is unavailable.
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
 * @throws {@link ValidationException} (client fault)
 *
 * A validation error occurred when performing the API request.
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 *
 * Base exception class for all service exceptions from IoTManagedIntegrations service.
 *
 * @public
 */
export class GetManagedThingConnectivityDataCommand extends command<GetManagedThingConnectivityDataCommandInput, GetManagedThingConnectivityDataCommandOutput>(
  _ep0,
  _mw0,
  "GetManagedThingConnectivityData",
  GetManagedThingConnectivityData$
) {
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
