// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMulticastGroupRequest, DeleteMulticastGroupResponse } from "../models/models_0";
import { DeleteMulticastGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteMulticastGroupCommand}.
 */
export interface DeleteMulticastGroupCommandInput extends DeleteMulticastGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMulticastGroupCommand}.
 */
export interface DeleteMulticastGroupCommandOutput extends DeleteMulticastGroupResponse, __MetadataBearer {}

/**
 * Deletes a multicast group if it is not in use by a FUOTA task.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DeleteMulticastGroupCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DeleteMulticastGroupCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // DeleteMulticastGroupRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteMulticastGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMulticastGroupCommandInput - {@link DeleteMulticastGroupCommandInput}
 * @returns {@link DeleteMulticastGroupCommandOutput}
 * @see {@link DeleteMulticastGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteMulticastGroupCommandOutput} for command's `response` shape.
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
export class DeleteMulticastGroupCommand extends command<DeleteMulticastGroupCommandInput, DeleteMulticastGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMulticastGroup",
  DeleteMulticastGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMulticastGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteMulticastGroupCommandInput;
      output: DeleteMulticastGroupCommandOutput;
    };
  };
}
