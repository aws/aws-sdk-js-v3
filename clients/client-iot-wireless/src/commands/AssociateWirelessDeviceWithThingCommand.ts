// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  AssociateWirelessDeviceWithThingRequest,
  AssociateWirelessDeviceWithThingResponse,
} from "../models/models_0";
import { AssociateWirelessDeviceWithThing$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateWirelessDeviceWithThingCommand}.
 */
export interface AssociateWirelessDeviceWithThingCommandInput extends AssociateWirelessDeviceWithThingRequest {}
/**
 * @public
 *
 * The output of {@link AssociateWirelessDeviceWithThingCommand}.
 */
export interface AssociateWirelessDeviceWithThingCommandOutput extends AssociateWirelessDeviceWithThingResponse, __MetadataBearer {}

/**
 * Associates a wireless device with a thing.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, AssociateWirelessDeviceWithThingCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, AssociateWirelessDeviceWithThingCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // AssociateWirelessDeviceWithThingRequest
 *   Id: "STRING_VALUE", // required
 *   ThingArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateWirelessDeviceWithThingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateWirelessDeviceWithThingCommandInput - {@link AssociateWirelessDeviceWithThingCommandInput}
 * @returns {@link AssociateWirelessDeviceWithThingCommandOutput}
 * @see {@link AssociateWirelessDeviceWithThingCommandInput} for command's `input` shape.
 * @see {@link AssociateWirelessDeviceWithThingCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have permission to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Adding, updating, or deleting the resource can cause an inconsistent state.
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
export class AssociateWirelessDeviceWithThingCommand extends command<AssociateWirelessDeviceWithThingCommandInput, AssociateWirelessDeviceWithThingCommandOutput>(
  _ep0,
  _mw0,
  "AssociateWirelessDeviceWithThing",
  AssociateWirelessDeviceWithThing$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateWirelessDeviceWithThingRequest;
      output: {};
    };
    sdk: {
      input: AssociateWirelessDeviceWithThingCommandInput;
      output: AssociateWirelessDeviceWithThingCommandOutput;
    };
  };
}
