// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest,
  StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse,
} from "../models/models_1";
import {
  de_StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand,
  se_StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand}.
 */
export interface StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput
  extends StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest {}
/**
 * @public
 *
 * The output of {@link StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand}.
 */
export interface StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput
  extends StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse,
    __MetadataBearer {}

/**
 * <p>Starts a bulk disassociatin of all qualifying wireless devices from a multicast
 *             group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest
 *   Id: "STRING_VALUE", // required
 *   QueryString: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput - {@link StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput}
 * @returns {@link StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput}
 * @see {@link StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput} for command's `input` shape.
 * @see {@link StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput} for command's `response` shape.
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
export class StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand extends $Command
  .classBuilder<
    StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput,
    StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("iotwireless", "StartBulkDisassociateWirelessDeviceFromMulticastGroup", {})
  .n("IoTWirelessClient", "StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand")
  .f(void 0, void 0)
  .ser(se_StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand)
  .de(de_StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest;
      output: {};
    };
    sdk: {
      input: StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput;
      output: StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput;
    };
  };
}
