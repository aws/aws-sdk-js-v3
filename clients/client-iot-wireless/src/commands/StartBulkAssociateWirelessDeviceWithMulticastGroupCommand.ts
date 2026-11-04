// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  StartBulkAssociateWirelessDeviceWithMulticastGroupRequest,
  StartBulkAssociateWirelessDeviceWithMulticastGroupResponse,
} from "../models/models_1";
import { StartBulkAssociateWirelessDeviceWithMulticastGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartBulkAssociateWirelessDeviceWithMulticastGroupCommand}.
 */
export interface StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput extends StartBulkAssociateWirelessDeviceWithMulticastGroupRequest {}
/**
 * @public
 *
 * The output of {@link StartBulkAssociateWirelessDeviceWithMulticastGroupCommand}.
 */
export interface StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput extends StartBulkAssociateWirelessDeviceWithMulticastGroupResponse, __MetadataBearer {}

/**
 * Starts a bulk association of all qualifying wireless devices with a multicast group.
 *
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
 *
 * User does not have permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because it exceeded the allowed API request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input did not meet the specified constraints.
 *
 * @throws {@link IoTWirelessServiceException}
 *
 * Base exception class for all service exceptions from IoTWireless service.
 *
 * @public
 */
export class StartBulkAssociateWirelessDeviceWithMulticastGroupCommand extends command<StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput, StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput>(
  _ep0,
  _mw0,
  "StartBulkAssociateWirelessDeviceWithMulticastGroup",
  StartBulkAssociateWirelessDeviceWithMulticastGroup$
) {
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
