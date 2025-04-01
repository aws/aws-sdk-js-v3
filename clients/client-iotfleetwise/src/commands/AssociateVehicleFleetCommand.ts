// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { AssociateVehicleFleetRequest, AssociateVehicleFleetResponse } from "../models/models_0";
import { de_AssociateVehicleFleetCommand, se_AssociateVehicleFleetCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> Adds, or associates, a vehicle with a fleet. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, AssociateVehicleFleetCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, AssociateVehicleFleetCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
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
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service quota was exceeded. </p>
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
 *
 * @public
 */
export class AssociateVehicleFleetCommand extends $Command
  .classBuilder<
    AssociateVehicleFleetCommandInput,
    AssociateVehicleFleetCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IoTAutobahnControlPlane", "AssociateVehicleFleet", {})
  .n("IoTFleetWiseClient", "AssociateVehicleFleetCommand")
  .f(void 0, void 0)
  .ser(se_AssociateVehicleFleetCommand)
  .de(de_AssociateVehicleFleetCommand)
  .build() {
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
