// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateVehicleFleetRequest, DisassociateVehicleFleetResponse } from "../models/models_0";
import { DisassociateVehicleFleet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateVehicleFleetCommand}.
 */
export interface DisassociateVehicleFleetCommandInput extends DisassociateVehicleFleetRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateVehicleFleetCommand}.
 */
export interface DisassociateVehicleFleetCommandOutput extends DisassociateVehicleFleetResponse, __MetadataBearer {}

/**
 * Removes, or disassociates, a vehicle from a fleet. Disassociating a vehicle from a fleet doesn't delete the vehicle.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, DisassociateVehicleFleetCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, DisassociateVehicleFleetCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // DisassociateVehicleFleetRequest
 *   vehicleName: "STRING_VALUE", // required
 *   fleetId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateVehicleFleetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateVehicleFleetCommandInput - {@link DisassociateVehicleFleetCommandInput}
 * @returns {@link DisassociateVehicleFleetCommandOutput}
 * @see {@link DisassociateVehicleFleetCommandInput} for command's `input` shape.
 * @see {@link DisassociateVehicleFleetCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource wasn't found.
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
export class DisassociateVehicleFleetCommand extends command<DisassociateVehicleFleetCommandInput, DisassociateVehicleFleetCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateVehicleFleet",
  DisassociateVehicleFleet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateVehicleFleetRequest;
      output: {};
    };
    sdk: {
      input: DisassociateVehicleFleetCommandInput;
      output: DisassociateVehicleFleetCommandOutput;
    };
  };
}
