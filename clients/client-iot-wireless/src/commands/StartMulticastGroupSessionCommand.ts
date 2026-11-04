// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartMulticastGroupSessionRequest, StartMulticastGroupSessionResponse } from "../models/models_1";
import { StartMulticastGroupSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartMulticastGroupSessionCommand}.
 */
export interface StartMulticastGroupSessionCommandInput extends StartMulticastGroupSessionRequest {}
/**
 * @public
 *
 * The output of {@link StartMulticastGroupSessionCommand}.
 */
export interface StartMulticastGroupSessionCommandOutput extends StartMulticastGroupSessionResponse, __MetadataBearer {}

/**
 * Starts a multicast group session.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, StartMulticastGroupSessionCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, StartMulticastGroupSessionCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // StartMulticastGroupSessionRequest
 *   Id: "STRING_VALUE", // required
 *   LoRaWAN: { // LoRaWANMulticastSession
 *     DlDr: Number("int"),
 *     DlFreq: Number("int"),
 *     SessionStartTime: new Date("TIMESTAMP"),
 *     SessionTimeout: Number("int"),
 *     PingSlotPeriod: Number("int"),
 *   },
 * };
 * const command = new StartMulticastGroupSessionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartMulticastGroupSessionCommandInput - {@link StartMulticastGroupSessionCommandInput}
 * @returns {@link StartMulticastGroupSessionCommandOutput}
 * @see {@link StartMulticastGroupSessionCommandInput} for command's `input` shape.
 * @see {@link StartMulticastGroupSessionCommandOutput} for command's `response` shape.
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
export class StartMulticastGroupSessionCommand extends command<StartMulticastGroupSessionCommandInput, StartMulticastGroupSessionCommandOutput>(
  _ep0,
  _mw0,
  "StartMulticastGroupSession",
  StartMulticastGroupSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMulticastGroupSessionRequest;
      output: {};
    };
    sdk: {
      input: StartMulticastGroupSessionCommandInput;
      output: StartMulticastGroupSessionCommandOutput;
    };
  };
}
