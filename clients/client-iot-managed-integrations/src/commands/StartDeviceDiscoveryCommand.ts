// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartDeviceDiscoveryRequest, StartDeviceDiscoveryResponse } from "../models/models_0";
import { StartDeviceDiscovery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartDeviceDiscoveryCommand}.
 */
export interface StartDeviceDiscoveryCommandInput extends StartDeviceDiscoveryRequest {}
/**
 * @public
 *
 * The output of {@link StartDeviceDiscoveryCommand}.
 */
export interface StartDeviceDiscoveryCommandOutput extends StartDeviceDiscoveryResponse, __MetadataBearer {}

/**
 * This API is used to start device discovery for hub-connected and third-party-connected devices. The authentication material (install code) is delivered as a message to the controller instructing it to start the discovery.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, StartDeviceDiscoveryCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, StartDeviceDiscoveryCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // StartDeviceDiscoveryRequest
 *   DiscoveryType: "ZWAVE" || "ZIGBEE" || "CLOUD" || "CUSTOM" || "CONTROLLER_CAPABILITY_REDISCOVERY", // required
 *   CustomProtocolDetail: { // CustomProtocolDetail
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ControllerIdentifier: "STRING_VALUE",
 *   ConnectorAssociationIdentifier: "STRING_VALUE",
 *   AccountAssociationId: "STRING_VALUE",
 *   AuthenticationMaterial: "STRING_VALUE",
 *   AuthenticationMaterialType: "ZWAVE_INSTALL_CODE",
 *   ClientToken: "STRING_VALUE",
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ConnectorDeviceIdList: [ // ConnectorDeviceIdList
 *     "STRING_VALUE",
 *   ],
 *   Protocol: "ZWAVE" || "ZIGBEE" || "CUSTOM",
 *   EndDeviceIdentifier: "STRING_VALUE",
 * };
 * const command = new StartDeviceDiscoveryCommand(input);
 * const response = await client.send(command);
 * // { // StartDeviceDiscoveryResponse
 * //   Id: "STRING_VALUE",
 * //   StartedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param StartDeviceDiscoveryCommandInput - {@link StartDeviceDiscoveryCommandInput}
 * @returns {@link StartDeviceDiscoveryCommandOutput}
 * @see {@link StartDeviceDiscoveryCommandInput} for command's `input` shape.
 * @see {@link StartDeviceDiscoveryCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User is not authorized.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict with the request.
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
export class StartDeviceDiscoveryCommand extends command<StartDeviceDiscoveryCommandInput, StartDeviceDiscoveryCommandOutput>(
  _ep0,
  _mw0,
  "StartDeviceDiscovery",
  StartDeviceDiscovery$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDeviceDiscoveryRequest;
      output: StartDeviceDiscoveryResponse;
    };
    sdk: {
      input: StartDeviceDiscoveryCommandInput;
      output: StartDeviceDiscoveryCommandOutput;
    };
  };
}
