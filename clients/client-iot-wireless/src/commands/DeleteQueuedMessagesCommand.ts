// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteQueuedMessagesRequest, DeleteQueuedMessagesResponse } from "../models/models_0";
import { DeleteQueuedMessages$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteQueuedMessagesCommand}.
 */
export interface DeleteQueuedMessagesCommandInput extends DeleteQueuedMessagesRequest {}
/**
 * @public
 *
 * The output of {@link DeleteQueuedMessagesCommand}.
 */
export interface DeleteQueuedMessagesCommandOutput extends DeleteQueuedMessagesResponse, __MetadataBearer {}

/**
 * Remove queued messages from the downlink queue.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DeleteQueuedMessagesCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DeleteQueuedMessagesCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // DeleteQueuedMessagesRequest
 *   Id: "STRING_VALUE", // required
 *   MessageId: "STRING_VALUE", // required
 *   WirelessDeviceType: "Sidewalk" || "LoRaWAN",
 * };
 * const command = new DeleteQueuedMessagesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteQueuedMessagesCommandInput - {@link DeleteQueuedMessagesCommandInput}
 * @returns {@link DeleteQueuedMessagesCommandOutput}
 * @see {@link DeleteQueuedMessagesCommandInput} for command's `input` shape.
 * @see {@link DeleteQueuedMessagesCommandOutput} for command's `response` shape.
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
export class DeleteQueuedMessagesCommand extends command<DeleteQueuedMessagesCommandInput, DeleteQueuedMessagesCommandOutput>(
  _ep0,
  _mw0,
  "DeleteQueuedMessages",
  DeleteQueuedMessages$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteQueuedMessagesRequest;
      output: {};
    };
    sdk: {
      input: DeleteQueuedMessagesCommandInput;
      output: DeleteQueuedMessagesCommandOutput;
    };
  };
}
