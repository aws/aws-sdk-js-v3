// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { DeleteVehicleRequest, DeleteVehicleResponse } from "../models/models_0";
import { de_DeleteVehicleCommand, se_DeleteVehicleCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> Deletes a vehicle and removes it from any campaigns.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, DeleteVehicleCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, DeleteVehicleCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
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
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
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
export class DeleteVehicleCommand extends $Command
  .classBuilder<
    DeleteVehicleCommandInput,
    DeleteVehicleCommandOutput,
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
  .s("IoTAutobahnControlPlane", "DeleteVehicle", {})
  .n("IoTFleetWiseClient", "DeleteVehicleCommand")
  .f(void 0, void 0)
  .ser(se_DeleteVehicleCommand)
  .de(de_DeleteVehicleCommand)
  .build() {
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
