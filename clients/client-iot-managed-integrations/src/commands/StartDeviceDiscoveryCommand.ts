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
import {
  StartDeviceDiscoveryRequest,
  StartDeviceDiscoveryRequestFilterSensitiveLog,
  StartDeviceDiscoveryResponse,
} from "../models/models_0";
import { de_StartDeviceDiscoveryCommand, se_StartDeviceDiscoveryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> This API is used to start device discovery for hub-connected and third-party-connected devices. The authentication material (install code) is passed as a message to the controller telling it to start the discovery.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, StartDeviceDiscoveryCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, StartDeviceDiscoveryCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // StartDeviceDiscoveryRequest
 *   DiscoveryType: "ZWAVE" || "ZIGBEE" || "CLOUD" || "CUSTOM", // required
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
 *  <p>User is not authorized.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict with the request.</p>
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
export class StartDeviceDiscoveryCommand extends $Command
  .classBuilder<
    StartDeviceDiscoveryCommandInput,
    StartDeviceDiscoveryCommandOutput,
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
  .s("IotManagedIntegrations", "StartDeviceDiscovery", {})
  .n("IoTManagedIntegrationsClient", "StartDeviceDiscoveryCommand")
  .f(StartDeviceDiscoveryRequestFilterSensitiveLog, void 0)
  .ser(se_StartDeviceDiscoveryCommand)
  .de(de_StartDeviceDiscoveryCommand)
  .build() {
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
