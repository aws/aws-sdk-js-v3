// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateVehicleFleetRequest, AssociateVehicleFleetResponse } from "../models/models_0";
import { AssociateVehicleFleet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateVehicleFleetCommand}.
 */
export interface AssociateVehicleFleetCommandInput extends AssociateVehicleFleetRequest {}
/**
 * @public
 *
 * The output of {@link AssociateVehicleFleetCommand}.
 */
export interface AssociateVehicleFleetCommandOutput extends AssociateVehicleFleetResponse, __MetadataBearer {}

/**
 * Adds, or associates, a vehicle with a fleet.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, AssociateVehicleFleetCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, AssociateVehicleFleetCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // AssociateVehicleFleetRequest
 *   vehicleName: "STRING_VALUE", // required
 *   fleetId: "STRING_VALUE", // required
 * };
 * const command = new AssociateVehicleFleetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateVehicleFleetCommandInput - {@link AssociateVehicleFleetCommandInput}
 * @returns {@link AssociateVehicleFleetCommandOutput}
 * @see {@link AssociateVehicleFleetCommandInput} for command's `input` shape.
 * @see {@link AssociateVehicleFleetCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * A service quota was exceeded.
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
export class AssociateVehicleFleetCommand extends command<AssociateVehicleFleetCommandInput, AssociateVehicleFleetCommandOutput>(
  _ep0,
  _mw0,
  "AssociateVehicleFleet",
  AssociateVehicleFleet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateVehicleFleetRequest;
      output: {};
    };
    sdk: {
      input: AssociateVehicleFleetCommandInput;
      output: AssociateVehicleFleetCommandOutput;
    };
  };
}
