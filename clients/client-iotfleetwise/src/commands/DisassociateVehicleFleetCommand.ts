// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { DisassociateVehicleFleetRequest, DisassociateVehicleFleetResponse } from "../models/models_0";
import { de_DisassociateVehicleFleetCommand, se_DisassociateVehicleFleetCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Removes, or disassociates, a vehicle from a fleet. Disassociating a vehicle from a
 *             fleet doesn't delete the vehicle.</p>
 *          <note>
 *             <p>If the vehicle is successfully dissociated from a fleet, Amazon Web Services IoT FleetWise sends back an
 *                 HTTP 200 response with an empty body.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, DisassociateVehicleFleetCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, DisassociateVehicleFleetCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
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
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 * @public
 */
export class DisassociateVehicleFleetCommand extends $Command
  .classBuilder<
    DisassociateVehicleFleetCommandInput,
    DisassociateVehicleFleetCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IoTAutobahnControlPlane", "DisassociateVehicleFleet", {})
  .n("IoTFleetWiseClient", "DisassociateVehicleFleetCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateVehicleFleetCommand)
  .de(de_DisassociateVehicleFleetCommand)
  .build() {}
