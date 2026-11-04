// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteVehicleRequest, DeleteVehicleResponse } from "../models/models_0";
import { DeleteVehicle$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteVehicleCommand}.
 */
export interface DeleteVehicleCommandInput extends DeleteVehicleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVehicleCommand}.
 */
export interface DeleteVehicleCommandOutput extends DeleteVehicleResponse, __MetadataBearer {}

/**
 * Deletes a vehicle and removes it from any campaigns.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, DeleteVehicleCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, DeleteVehicleCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // DeleteVehicleRequest
 *   vehicleName: "STRING_VALUE", // required
 * };
 * const command = new DeleteVehicleCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVehicleResponse
 * //   vehicleName: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteVehicleCommandInput - {@link DeleteVehicleCommandInput}
 * @returns {@link DeleteVehicleCommandOutput}
 * @see {@link DeleteVehicleCommandInput} for command's `input` shape.
 * @see {@link DeleteVehicleCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request couldn't be completed because the server temporarily failed.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request couldn't be completed due to throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link IoTFleetWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTFleetWise service.
 *
 * @public
 */
export class DeleteVehicleCommand extends command<DeleteVehicleCommandInput, DeleteVehicleCommandOutput>(
  _ep0,
  _mw0,
  "DeleteVehicle",
  DeleteVehicle$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVehicleRequest;
      output: DeleteVehicleResponse;
    };
    sdk: {
      input: DeleteVehicleCommandInput;
      output: DeleteVehicleCommandOutput;
    };
  };
}
