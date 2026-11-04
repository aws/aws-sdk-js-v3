// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartFuotaTaskRequest, StartFuotaTaskResponse } from "../models/models_1";
import { StartFuotaTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartFuotaTaskCommand}.
 */
export interface StartFuotaTaskCommandInput extends StartFuotaTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartFuotaTaskCommand}.
 */
export interface StartFuotaTaskCommandOutput extends StartFuotaTaskResponse, __MetadataBearer {}

/**
 * Starts a FUOTA task.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, StartFuotaTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, StartFuotaTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // StartFuotaTaskRequest
 *   Id: "STRING_VALUE", // required
 *   LoRaWAN: { // LoRaWANStartFuotaTask
 *     StartTime: new Date("TIMESTAMP"),
 *   },
 * };
 * const command = new StartFuotaTaskCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartFuotaTaskCommandInput - {@link StartFuotaTaskCommandInput}
 * @returns {@link StartFuotaTaskCommandOutput}
 * @see {@link StartFuotaTaskCommandInput} for command's `input` shape.
 * @see {@link StartFuotaTaskCommandOutput} for command's `response` shape.
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
export class StartFuotaTaskCommand extends command<StartFuotaTaskCommandInput, StartFuotaTaskCommandOutput>(
  _ep0,
  _mw0,
  "StartFuotaTask",
  StartFuotaTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartFuotaTaskRequest;
      output: {};
    };
    sdk: {
      input: StartFuotaTaskCommandInput;
      output: StartFuotaTaskCommandOutput;
    };
  };
}
