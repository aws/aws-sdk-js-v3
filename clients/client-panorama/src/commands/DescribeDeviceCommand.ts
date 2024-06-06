// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDeviceRequest, DescribeDeviceResponse } from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { de_DescribeDeviceCommand, se_DescribeDeviceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDeviceCommand}.
 */
export interface DescribeDeviceCommandInput extends DescribeDeviceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDeviceCommand}.
 */
export interface DescribeDeviceCommandOutput extends DescribeDeviceResponse, __MetadataBearer {}

/**
 * <p>Returns information about a device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, DescribeDeviceCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, DescribeDeviceCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const input = { // DescribeDeviceRequest
 *   DeviceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeDeviceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDeviceResponse
 * //   DeviceId: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Type: "STRING_VALUE",
 * //   DeviceConnectionStatus: "STRING_VALUE",
 * //   CreatedTime: new Date("TIMESTAMP"),
 * //   ProvisioningStatus: "STRING_VALUE",
 * //   LatestSoftware: "STRING_VALUE",
 * //   CurrentSoftware: "STRING_VALUE",
 * //   SerialNumber: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   NetworkingConfiguration: { // NetworkPayload
 * //     Ethernet0: { // EthernetPayload
 * //       ConnectionType: "STRING_VALUE", // required
 * //       StaticIpConnectionInfo: { // StaticIpConnectionInfo
 * //         IpAddress: "STRING_VALUE", // required
 * //         Mask: "STRING_VALUE", // required
 * //         Dns: [ // DnsList // required
 * //           "STRING_VALUE",
 * //         ],
 * //         DefaultGateway: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     Ethernet1: {
 * //       ConnectionType: "STRING_VALUE", // required
 * //       StaticIpConnectionInfo: {
 * //         IpAddress: "STRING_VALUE", // required
 * //         Mask: "STRING_VALUE", // required
 * //         Dns: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //         DefaultGateway: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     Ntp: { // NtpPayload
 * //       NtpServers: [ // NtpServerList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   CurrentNetworkingStatus: { // NetworkStatus
 * //     Ethernet0Status: { // EthernetStatus
 * //       IpAddress: "STRING_VALUE",
 * //       ConnectionStatus: "STRING_VALUE",
 * //       HwAddress: "STRING_VALUE",
 * //     },
 * //     Ethernet1Status: {
 * //       IpAddress: "STRING_VALUE",
 * //       ConnectionStatus: "STRING_VALUE",
 * //       HwAddress: "STRING_VALUE",
 * //     },
 * //     NtpStatus: { // NtpStatus
 * //       ConnectionStatus: "STRING_VALUE",
 * //       IpAddress: "STRING_VALUE",
 * //       NtpServerName: "STRING_VALUE",
 * //     },
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //   },
 * //   LeaseExpirationTime: new Date("TIMESTAMP"),
 * //   AlternateSoftwares: [ // AlternateSoftwares
 * //     { // AlternateSoftwareMetadata
 * //       Version: "STRING_VALUE",
 * //     },
 * //   ],
 * //   LatestAlternateSoftware: "STRING_VALUE",
 * //   Brand: "STRING_VALUE",
 * //   LatestDeviceJob: { // LatestDeviceJob
 * //     ImageVersion: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     JobType: "STRING_VALUE",
 * //   },
 * //   DeviceAggregatedStatus: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDeviceCommandInput - {@link DescribeDeviceCommandInput}
 * @returns {@link DescribeDeviceCommandOutput}
 * @see {@link DescribeDeviceCommandInput} for command's `input` shape.
 * @see {@link DescribeDeviceCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requestor does not have permission to access the target action or resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value.</p>
 *
 * @throws {@link PanoramaServiceException}
 * <p>Base exception class for all service exceptions from Panorama service.</p>
 *
 * @public
 */
export class DescribeDeviceCommand extends $Command
  .classBuilder<
    DescribeDeviceCommandInput,
    DescribeDeviceCommandOutput,
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
  .s("OmniCloudServiceLambda", "DescribeDevice", {})
  .n("PanoramaClient", "DescribeDeviceCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDeviceCommand)
  .de(de_DescribeDeviceCommand)
  .build() {}
