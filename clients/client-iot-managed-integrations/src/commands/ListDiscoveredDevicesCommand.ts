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
import { ListDiscoveredDevicesRequest, ListDiscoveredDevicesResponse } from "../models/models_0";
import { ListDiscoveredDevices } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDiscoveredDevicesCommand}.
 */
export interface ListDiscoveredDevicesCommandInput extends ListDiscoveredDevicesRequest {}
/**
 * @public
 *
 * The output of {@link ListDiscoveredDevicesCommand}.
 */
export interface ListDiscoveredDevicesCommandOutput extends ListDiscoveredDevicesResponse, __MetadataBearer {}

/**
 * <p>Lists all devices discovered during a specific device discovery task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, ListDiscoveredDevicesCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, ListDiscoveredDevicesCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // ListDiscoveredDevicesRequest
 *   Identifier: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDiscoveredDevicesCommand(input);
 * const response = await client.send(command);
 * // { // ListDiscoveredDevicesResponse
 * //   Items: [ // DiscoveredDeviceListDefinition
 * //     { // DiscoveredDeviceSummary
 * //       ConnectorDeviceId: "STRING_VALUE",
 * //       ConnectorDeviceName: "STRING_VALUE",
 * //       DeviceTypes: [ // DeviceTypeList
 * //         "STRING_VALUE",
 * //       ],
 * //       ManagedThingId: "STRING_VALUE",
 * //       Modification: "DISCOVERED" || "UPDATED" || "NO_CHANGE",
 * //       DiscoveredAt: new Date("TIMESTAMP"),
 * //       Brand: "STRING_VALUE",
 * //       Model: "STRING_VALUE",
 * //       AuthenticationMaterial: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDiscoveredDevicesCommandInput - {@link ListDiscoveredDevicesCommandInput}
 * @returns {@link ListDiscoveredDevicesCommandOutput}
 * @see {@link ListDiscoveredDevicesCommandInput} for command's `input` shape.
 * @see {@link ListDiscoveredDevicesCommandOutput} for command's `response` shape.
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
export class ListDiscoveredDevicesCommand extends $Command
  .classBuilder<
    ListDiscoveredDevicesCommandInput,
    ListDiscoveredDevicesCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "ListDiscoveredDevices", {})
  .n("IoTManagedIntegrationsClient", "ListDiscoveredDevicesCommand")
  .sc(ListDiscoveredDevices)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDiscoveredDevicesRequest;
      output: ListDiscoveredDevicesResponse;
    };
    sdk: {
      input: ListDiscoveredDevicesCommandInput;
      output: ListDiscoveredDevicesCommandOutput;
    };
  };
}
