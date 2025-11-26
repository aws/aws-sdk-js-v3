// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeGatewayInformationInput, DescribeGatewayInformationOutput } from "../models/models_0";
import { DescribeGatewayInformation } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  StorageGatewayClientResolvedConfig,
} from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeGatewayInformationCommand}.
 */
export interface DescribeGatewayInformationCommandInput extends DescribeGatewayInformationInput {}
/**
 * @public
 *
 * The output of {@link DescribeGatewayInformationCommand}.
 */
export interface DescribeGatewayInformationCommandOutput extends DescribeGatewayInformationOutput, __MetadataBearer {}

/**
 * <p>Returns metadata about a gateway such as its name, network interfaces, time zone,
 *          status, and software version. To specify which gateway to describe, use the Amazon Resource
 *          Name (ARN) of the gateway in your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeGatewayInformationCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeGatewayInformationCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeGatewayInformationInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new DescribeGatewayInformationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGatewayInformationOutput
 * //   GatewayARN: "STRING_VALUE",
 * //   GatewayId: "STRING_VALUE",
 * //   GatewayName: "STRING_VALUE",
 * //   GatewayTimezone: "STRING_VALUE",
 * //   GatewayState: "STRING_VALUE",
 * //   GatewayNetworkInterfaces: [ // GatewayNetworkInterfaces
 * //     { // NetworkInterface
 * //       Ipv4Address: "STRING_VALUE",
 * //       MacAddress: "STRING_VALUE",
 * //       Ipv6Address: "STRING_VALUE",
 * //     },
 * //   ],
 * //   GatewayType: "STRING_VALUE",
 * //   NextUpdateAvailabilityDate: "STRING_VALUE",
 * //   LastSoftwareUpdate: "STRING_VALUE",
 * //   Ec2InstanceId: "STRING_VALUE",
 * //   Ec2InstanceRegion: "STRING_VALUE",
 * //   Tags: [ // Tags
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   VPCEndpoint: "STRING_VALUE",
 * //   CloudWatchLogGroupARN: "STRING_VALUE",
 * //   HostEnvironment: "VMWARE" || "HYPER-V" || "EC2" || "KVM" || "OTHER" || "SNOWBALL",
 * //   EndpointType: "STRING_VALUE",
 * //   SoftwareUpdatesEndDate: "STRING_VALUE",
 * //   DeprecationDate: "STRING_VALUE",
 * //   GatewayCapacity: "Small" || "Medium" || "Large",
 * //   SupportedGatewayCapacities: [ // SupportedGatewayCapacities
 * //     "Small" || "Medium" || "Large",
 * //   ],
 * //   HostEnvironmentId: "STRING_VALUE",
 * //   SoftwareVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeGatewayInformationCommandInput - {@link DescribeGatewayInformationCommandInput}
 * @returns {@link DescribeGatewayInformationCommandOutput}
 * @see {@link DescribeGatewayInformationCommandInput} for command's `input` shape.
 * @see {@link DescribeGatewayInformationCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 *
 * @example To describe metadata about the gateway
 * ```javascript
 * // Returns metadata about a gateway such as its name, network interfaces, configured time zone, and the state (whether the gateway is running or not).
 * const input = {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * };
 * const command = new DescribeGatewayInformationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   GatewayId: "sgw-AABB1122",
 *   GatewayName: "My_Gateway",
 *   GatewayNetworkInterfaces: [
 *     {
 *       Ipv4Address: "10.35.69.216"
 *     }
 *   ],
 *   GatewayState: "STATE_RUNNING",
 *   GatewayTimezone: "GMT-8:00",
 *   GatewayType: "STORED",
 *   LastSoftwareUpdate: "2016-01-02T16:00:00",
 *   NextUpdateAvailabilityDate: "2017-01-02T16:00:00"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeGatewayInformationCommand extends $Command
  .classBuilder<
    DescribeGatewayInformationCommandInput,
    DescribeGatewayInformationCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "DescribeGatewayInformation", {})
  .n("StorageGatewayClient", "DescribeGatewayInformationCommand")
  .sc(DescribeGatewayInformation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeGatewayInformationInput;
      output: DescribeGatewayInformationOutput;
    };
    sdk: {
      input: DescribeGatewayInformationCommandInput;
      output: DescribeGatewayInformationCommandOutput;
    };
  };
}
