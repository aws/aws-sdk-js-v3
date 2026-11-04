// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DisassociateWirelessGatewayFromThingRequest,
  DisassociateWirelessGatewayFromThingResponse,
} from "../models/models_0";
import { DisassociateWirelessGatewayFromThing$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateWirelessGatewayFromThingCommand}.
 */
export interface DisassociateWirelessGatewayFromThingCommandInput extends DisassociateWirelessGatewayFromThingRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateWirelessGatewayFromThingCommand}.
 */
export interface DisassociateWirelessGatewayFromThingCommandOutput extends DisassociateWirelessGatewayFromThingResponse, __MetadataBearer {}

/**
 * Disassociates a wireless gateway from its currently associated thing.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DisassociateWirelessGatewayFromThingCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DisassociateWirelessGatewayFromThingCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // DisassociateWirelessGatewayFromThingRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DisassociateWirelessGatewayFromThingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateWirelessGatewayFromThingCommandInput - {@link DisassociateWirelessGatewayFromThingCommandInput}
 * @returns {@link DisassociateWirelessGatewayFromThingCommandOutput}
 * @see {@link DisassociateWirelessGatewayFromThingCommandInput} for command's `input` shape.
 * @see {@link DisassociateWirelessGatewayFromThingCommandOutput} for command's `response` shape.
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
export class DisassociateWirelessGatewayFromThingCommand extends command<DisassociateWirelessGatewayFromThingCommandInput, DisassociateWirelessGatewayFromThingCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateWirelessGatewayFromThing",
  DisassociateWirelessGatewayFromThing$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateWirelessGatewayFromThingRequest;
      output: {};
    };
    sdk: {
      input: DisassociateWirelessGatewayFromThingCommandInput;
      output: DisassociateWirelessGatewayFromThingCommandOutput;
    };
  };
}
