// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { BatchUpdateVehicleRequest, BatchUpdateVehicleResponse } from "../models/models_0";
import { de_BatchUpdateVehicleCommand, se_BatchUpdateVehicleCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdateVehicleCommand}.
 */
export interface BatchUpdateVehicleCommandInput extends BatchUpdateVehicleRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateVehicleCommand}.
 */
export interface BatchUpdateVehicleCommandOutput extends BatchUpdateVehicleResponse, __MetadataBearer {}

/**
 * <p> Updates a group, or batch, of vehicles.</p>
 *          <note>
 *             <p> You must specify a decoder manifest and a vehicle model (model manifest) for each
 *                 vehicle. </p>
 *          </note>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/update-vehicles-cli.html">Update multiple
 *                 vehicles (AWS CLI)</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, BatchUpdateVehicleCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, BatchUpdateVehicleCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const input = { // BatchUpdateVehicleRequest
 *   vehicles: [ // updateVehicleRequestItems // required
 *     { // UpdateVehicleRequestItem
 *       vehicleName: "STRING_VALUE", // required
 *       modelManifestArn: "STRING_VALUE",
 *       decoderManifestArn: "STRING_VALUE",
 *       attributes: { // attributesMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       attributeUpdateMode: "Overwrite" || "Merge",
 *     },
 *   ],
 * };
 * const command = new BatchUpdateVehicleCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateVehicleResponse
 * //   vehicles: [ // updateVehicleResponseItems
 * //     { // UpdateVehicleResponseItem
 * //       vehicleName: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   errors: [ // updateVehicleErrors
 * //     { // UpdateVehicleError
 * //       vehicleName: "STRING_VALUE",
 * //       code: Number("int"),
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdateVehicleCommandInput - {@link BatchUpdateVehicleCommandInput}
 * @returns {@link BatchUpdateVehicleCommandOutput}
 * @see {@link BatchUpdateVehicleCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateVehicleCommandOutput} for command's `response` shape.
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
export class BatchUpdateVehicleCommand extends $Command
  .classBuilder<
    BatchUpdateVehicleCommandInput,
    BatchUpdateVehicleCommandOutput,
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
  .s("IoTAutobahnControlPlane", "BatchUpdateVehicle", {})
  .n("IoTFleetWiseClient", "BatchUpdateVehicleCommand")
  .f(void 0, void 0)
  .ser(se_BatchUpdateVehicleCommand)
  .de(de_BatchUpdateVehicleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchUpdateVehicleRequest;
      output: BatchUpdateVehicleResponse;
    };
    sdk: {
      input: BatchUpdateVehicleCommandInput;
      output: BatchUpdateVehicleCommandOutput;
    };
  };
}
