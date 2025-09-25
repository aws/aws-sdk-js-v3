// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  StartBulkAssociateWirelessDeviceWithMulticastGroupRequest,
  StartBulkAssociateWirelessDeviceWithMulticastGroupResponse,
} from "../models/models_1";
import { StartBulkAssociateWirelessDeviceWithMulticastGroup } from "../schemas/schemas_44_Multicast";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartBulkAssociateWirelessDeviceWithMulticastGroupCommand}.
 */
export interface StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput
  extends StartBulkAssociateWirelessDeviceWithMulticastGroupRequest {}
/**
 * @public
 *
 * The output of {@link StartBulkAssociateWirelessDeviceWithMulticastGroupCommand}.
 */
export interface StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput
  extends StartBulkAssociateWirelessDeviceWithMulticastGroupResponse,
    __MetadataBearer {}

/**
 * <p>Starts a bulk association of all qualifying wireless devices with a multicast
 *             group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, StartBulkAssociateWirelessDeviceWithMulticastGroupCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, StartBulkAssociateWirelessDeviceWithMulticastGroupCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // StartBulkAssociateWirelessDeviceWithMulticastGroupRequest
 *   Id: "STRING_VALUE", // required
 *   QueryString: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new StartBulkAssociateWirelessDeviceWithMulticastGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput - {@link StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput}
 * @returns {@link StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput}
 * @see {@link StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput} for command's `input` shape.
 * @see {@link StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 *
 * @public
 */
export class StartBulkAssociateWirelessDeviceWithMulticastGroupCommand extends $Command
  .classBuilder<
    StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput,
    StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "StartBulkAssociateWirelessDeviceWithMulticastGroup", {})
  .n("IoTWirelessClient", "StartBulkAssociateWirelessDeviceWithMulticastGroupCommand")
  .sc(StartBulkAssociateWirelessDeviceWithMulticastGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartBulkAssociateWirelessDeviceWithMulticastGroupRequest;
      output: {};
    };
    sdk: {
      input: StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput;
      output: StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput;
    };
  };
}
