// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteWirelessGatewayRequest, DeleteWirelessGatewayResponse } from "../models/models_0";
import { DeleteWirelessGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteWirelessGatewayCommand}.
 */
export interface DeleteWirelessGatewayCommandInput extends DeleteWirelessGatewayRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWirelessGatewayCommand}.
 */
export interface DeleteWirelessGatewayCommandOutput extends DeleteWirelessGatewayResponse, __MetadataBearer {}

/**
 * Deletes a wireless gateway.
 *
 * > **Note:**
 * >
 * > When deleting a wireless gateway, you might run into duplication errors for the following reasons.
 * >
 * > - If you specify a `GatewayEui` value that already exists.
 * > - If you used a `ClientRequestToken` with the same parameters within the last 10 minutes.
 * >
 * > To avoid this error, make sure that you use unique identifiers and parameters for each request within the specified time period.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DeleteWirelessGatewayCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DeleteWirelessGatewayCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // DeleteWirelessGatewayRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteWirelessGatewayCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWirelessGatewayCommandInput - {@link DeleteWirelessGatewayCommandInput}
 * @returns {@link DeleteWirelessGatewayCommandOutput}
 * @see {@link DeleteWirelessGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteWirelessGatewayCommandOutput} for command's `response` shape.
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
export class DeleteWirelessGatewayCommand extends command<DeleteWirelessGatewayCommandInput, DeleteWirelessGatewayCommandOutput>(
  _ep0,
  _mw0,
  "DeleteWirelessGateway",
  DeleteWirelessGateway$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWirelessGatewayRequest;
      output: {};
    };
    sdk: {
      input: DeleteWirelessGatewayCommandInput;
      output: DeleteWirelessGatewayCommandOutput;
    };
  };
}
