// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ProvisionDeviceRequest, ProvisionDeviceResponse } from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { de_ProvisionDeviceCommand, se_ProvisionDeviceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ProvisionDeviceCommand}.
 */
export interface ProvisionDeviceCommandInput extends ProvisionDeviceRequest {}
/**
 * @public
 *
 * The output of {@link ProvisionDeviceCommand}.
 */
export interface ProvisionDeviceCommandOutput extends ProvisionDeviceResponse, __MetadataBearer {}

/**
 * <p>Creates a device and returns a configuration archive. The configuration archive is a ZIP file that contains a
 *       provisioning certificate that is valid for 5 minutes. Name the configuration archive
 *           <code>certificates-omni_<i>device-name</i>.zip</code> and transfer it to the device within 5
 *       minutes. Use the included USB storage device and connect it to the USB 3.0 port next to the HDMI output.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, ProvisionDeviceCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, ProvisionDeviceCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const input = { // ProvisionDeviceRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   NetworkingConfiguration: { // NetworkPayload
 *     Ethernet0: { // EthernetPayload
 *       ConnectionType: "STRING_VALUE", // required
 *       StaticIpConnectionInfo: { // StaticIpConnectionInfo
 *         IpAddress: "STRING_VALUE", // required
 *         Mask: "STRING_VALUE", // required
 *         Dns: [ // DnsList // required
 *           "STRING_VALUE",
 *         ],
 *         DefaultGateway: "STRING_VALUE", // required
 *       },
 *     },
 *     Ethernet1: {
 *       ConnectionType: "STRING_VALUE", // required
 *       StaticIpConnectionInfo: {
 *         IpAddress: "STRING_VALUE", // required
 *         Mask: "STRING_VALUE", // required
 *         Dns: [ // required
 *           "STRING_VALUE",
 *         ],
 *         DefaultGateway: "STRING_VALUE", // required
 *       },
 *     },
 *     Ntp: { // NtpPayload
 *       NtpServers: [ // NtpServerList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 * };
 * const command = new ProvisionDeviceCommand(input);
 * const response = await client.send(command);
 * // { // ProvisionDeviceResponse
 * //   DeviceId: "STRING_VALUE",
 * //   Arn: "STRING_VALUE", // required
 * //   Status: "STRING_VALUE", // required
 * //   Certificates: new Uint8Array(),
 * //   IotThingName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ProvisionDeviceCommandInput - {@link ProvisionDeviceCommandInput}
 * @returns {@link ProvisionDeviceCommandOutput}
 * @see {@link ProvisionDeviceCommandInput} for command's `input` shape.
 * @see {@link ProvisionDeviceCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requestor does not have permission to access the target action or resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The target resource is in use.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a limit to be exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value.</p>
 *
 * @throws {@link PanoramaServiceException}
 * <p>Base exception class for all service exceptions from Panorama service.</p>
 *
 * @public
 */
export class ProvisionDeviceCommand extends $Command
  .classBuilder<
    ProvisionDeviceCommandInput,
    ProvisionDeviceCommandOutput,
    PanoramaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PanoramaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OmniCloudServiceLambda", "ProvisionDevice", {})
  .n("PanoramaClient", "ProvisionDeviceCommand")
  .f(void 0, void 0)
  .ser(se_ProvisionDeviceCommand)
  .de(de_ProvisionDeviceCommand)
  .build() {}
