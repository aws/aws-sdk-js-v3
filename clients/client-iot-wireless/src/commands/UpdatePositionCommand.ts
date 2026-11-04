// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePositionRequest, UpdatePositionResponse } from "../models/models_1";
import { UpdatePosition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdatePositionCommand}.
 */
export interface UpdatePositionCommandInput extends UpdatePositionRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePositionCommand}.
 */
export interface UpdatePositionCommandOutput extends UpdatePositionResponse, __MetadataBearer {}

/**
 * Update the position information of a resource.
 *
 * > **Important:** This action is no longer supported. Calls to update the position information should use the [UpdateResourcePosition](https://docs.aws.amazon.com/iot-wireless/latest/apireference/API_UpdateResourcePosition.html) API operation instead.
 *
 * @deprecated This operation is no longer supported.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdatePositionCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdatePositionCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // UpdatePositionRequest
 *   ResourceIdentifier: "STRING_VALUE", // required
 *   ResourceType: "WirelessDevice" || "WirelessGateway", // required
 *   Position: [ // PositionCoordinate // required
 *     Number("float"),
 *   ],
 * };
 * const command = new UpdatePositionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdatePositionCommandInput - {@link UpdatePositionCommandInput}
 * @returns {@link UpdatePositionCommandOutput}
 * @see {@link UpdatePositionCommandInput} for command's `input` shape.
 * @see {@link UpdatePositionCommandOutput} for command's `response` shape.
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
export class UpdatePositionCommand extends command<UpdatePositionCommandInput, UpdatePositionCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePosition",
  UpdatePosition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePositionRequest;
      output: {};
    };
    sdk: {
      input: UpdatePositionCommandInput;
      output: UpdatePositionCommandOutput;
    };
  };
}
