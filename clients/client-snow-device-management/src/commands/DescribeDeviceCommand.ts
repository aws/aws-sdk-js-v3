// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDeviceInput, DescribeDeviceOutput } from "../models/models_0";
import { DescribeDevice } from "../schemas/schemas_1_Describe";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SnowDeviceManagementClientResolvedConfig,
} from "../SnowDeviceManagementClient";

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
export interface DescribeDeviceCommandInput extends DescribeDeviceInput {}
/**
 * @public
 *
 * The output of {@link DescribeDeviceCommand}.
 */
export interface DescribeDeviceCommandOutput extends DescribeDeviceOutput, __MetadataBearer {}

/**
 * <p>Checks device-specific information, such as the device type, software version, IP
 *       addresses, and lock status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowDeviceManagementClient, DescribeDeviceCommand } from "@aws-sdk/client-snow-device-management"; // ES Modules import
 * // const { SnowDeviceManagementClient, DescribeDeviceCommand } = require("@aws-sdk/client-snow-device-management"); // CommonJS import
 * // import type { SnowDeviceManagementClientConfig } from "@aws-sdk/client-snow-device-management";
 * const config = {}; // type is SnowDeviceManagementClientConfig
 * const client = new SnowDeviceManagementClient(config);
 * const input = { // DescribeDeviceInput
 *   managedDeviceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeDeviceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDeviceOutput
 * //   lastReachedOutAt: new Date("TIMESTAMP"),
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   managedDeviceId: "STRING_VALUE",
 * //   managedDeviceArn: "STRING_VALUE",
 * //   deviceType: "STRING_VALUE",
 * //   associatedWithJob: "STRING_VALUE",
 * //   deviceState: "STRING_VALUE",
 * //   physicalNetworkInterfaces: [ // PhysicalNetworkInterfaceList
 * //     { // PhysicalNetworkInterface
 * //       physicalNetworkInterfaceId: "STRING_VALUE",
 * //       physicalConnectorType: "STRING_VALUE",
 * //       ipAddressAssignment: "STRING_VALUE",
 * //       ipAddress: "STRING_VALUE",
 * //       netmask: "STRING_VALUE",
 * //       defaultGateway: "STRING_VALUE",
 * //       macAddress: "STRING_VALUE",
 * //     },
 * //   ],
 * //   deviceCapacities: [ // CapacityList
 * //     { // Capacity
 * //       name: "STRING_VALUE",
 * //       unit: "STRING_VALUE",
 * //       total: Number("long"),
 * //       used: Number("long"),
 * //       available: Number("long"),
 * //     },
 * //   ],
 * //   software: { // SoftwareInformation
 * //     installedVersion: "STRING_VALUE",
 * //     installingVersion: "STRING_VALUE",
 * //     installState: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDeviceCommandInput - {@link DescribeDeviceCommandInput}
 * @returns {@link DescribeDeviceCommandOutput}
 * @see {@link DescribeDeviceCommandInput} for command's `input` shape.
 * @see {@link DescribeDeviceCommandOutput} for command's `response` shape.
 * @see {@link SnowDeviceManagementClientResolvedConfig | config} for SnowDeviceManagementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SnowDeviceManagementServiceException}
 * <p>Base exception class for all service exceptions from SnowDeviceManagement service.</p>
 *
 *
 * @public
 */
export class DescribeDeviceCommand extends $Command
  .classBuilder<
    DescribeDeviceCommandInput,
    DescribeDeviceCommandOutput,
    SnowDeviceManagementClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SnowDeviceManagementClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SnowDeviceManagement", "DescribeDevice", {})
  .n("SnowDeviceManagementClient", "DescribeDeviceCommand")
  .sc(DescribeDevice)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDeviceInput;
      output: DescribeDeviceOutput;
    };
    sdk: {
      input: DescribeDeviceCommandInput;
      output: DescribeDeviceCommandOutput;
    };
  };
}
