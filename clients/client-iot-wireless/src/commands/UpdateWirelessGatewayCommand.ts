// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateWirelessGatewayRequest, UpdateWirelessGatewayResponse } from "../models/models_1";
import { UpdateWirelessGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateWirelessGatewayCommand}.
 */
export interface UpdateWirelessGatewayCommandInput extends UpdateWirelessGatewayRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWirelessGatewayCommand}.
 */
export interface UpdateWirelessGatewayCommandOutput extends UpdateWirelessGatewayResponse, __MetadataBearer {}

/**
 * Updates properties of a wireless gateway.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateWirelessGatewayCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateWirelessGatewayCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // UpdateWirelessGatewayRequest
 *   Id: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   JoinEuiFilters: [ // JoinEuiFilters
 *     [ // JoinEuiRange
 *       "STRING_VALUE",
 *     ],
 *   ],
 *   NetIdFilters: [ // NetIdFilters
 *     "STRING_VALUE",
 *   ],
 *   MaxEirp: Number("float"),
 * };
 * const command = new UpdateWirelessGatewayCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateWirelessGatewayCommandInput - {@link UpdateWirelessGatewayCommandInput}
 * @returns {@link UpdateWirelessGatewayCommandOutput}
 * @see {@link UpdateWirelessGatewayCommandInput} for command's `input` shape.
 * @see {@link UpdateWirelessGatewayCommandOutput} for command's `response` shape.
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
export class UpdateWirelessGatewayCommand extends command<UpdateWirelessGatewayCommandInput, UpdateWirelessGatewayCommandOutput>(
  _ep0,
  _mw0,
  "UpdateWirelessGateway",
  UpdateWirelessGateway$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWirelessGatewayRequest;
      output: {};
    };
    sdk: {
      input: UpdateWirelessGatewayCommandInput;
      output: UpdateWirelessGatewayCommandOutput;
    };
  };
}
