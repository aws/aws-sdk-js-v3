// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { BatchCreateVehicleRequest, BatchCreateVehicleResponse } from "../models/models_0";
import { de_BatchCreateVehicleCommand, se_BatchCreateVehicleCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchCreateVehicleCommand}.
 */
export interface BatchCreateVehicleCommandInput extends BatchCreateVehicleRequest {}
/**
 * @public
 *
 * The output of {@link BatchCreateVehicleCommand}.
 */
export interface BatchCreateVehicleCommandOutput extends BatchCreateVehicleResponse, __MetadataBearer {}

/**
 * <p> Creates a group, or batch, of vehicles. </p>
 *          <note>
 *             <p> You must specify a decoder manifest and a vehicle model (model manifest) for each
 *                 vehicle. </p>
 *          </note>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/create-vehicles-cli.html">Create multiple
 *                 vehicles (AWS CLI)</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, BatchCreateVehicleCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, BatchCreateVehicleCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTFleetWiseClient(config);
 * const input = { // BatchCreateVehicleRequest
 *   vehicles: [ // createVehicleRequestItems // required
 *     { // CreateVehicleRequestItem
 *       vehicleName: "STRING_VALUE", // required
 *       modelManifestArn: "STRING_VALUE", // required
 *       decoderManifestArn: "STRING_VALUE", // required
 *       attributes: { // attributesMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       associationBehavior: "CreateIotThing" || "ValidateIotThingExists",
 *       tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *       stateTemplates: [ // StateTemplateAssociations
 *         { // StateTemplateAssociation
 *           identifier: "STRING_VALUE", // required
 *           stateTemplateUpdateStrategy: { // StateTemplateUpdateStrategy Union: only one key present
 *             periodic: { // PeriodicStateTemplateUpdateStrategy
 *               stateTemplateUpdateRate: { // TimePeriod
 *                 unit: "MILLISECOND" || "SECOND" || "MINUTE" || "HOUR", // required
 *                 value: Number("int"), // required
 *               },
 *             },
 *             onChange: {},
 *           },
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new BatchCreateVehicleCommand(input);
 * const response = await client.send(command);
 * // { // BatchCreateVehicleResponse
 * //   vehicles: [ // createVehicleResponses
 * //     { // CreateVehicleResponseItem
 * //       vehicleName: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       thingArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   errors: [ // createVehicleErrors
 * //     { // CreateVehicleError
 * //       vehicleName: "STRING_VALUE",
 * //       code: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchCreateVehicleCommandInput - {@link BatchCreateVehicleCommandInput}
 * @returns {@link BatchCreateVehicleCommandOutput}
 * @see {@link BatchCreateVehicleCommandInput} for command's `input` shape.
 * @see {@link BatchCreateVehicleCommandOutput} for command's `response` shape.
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
export class BatchCreateVehicleCommand extends $Command
  .classBuilder<
    BatchCreateVehicleCommandInput,
    BatchCreateVehicleCommandOutput,
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
  .s("IoTAutobahnControlPlane", "BatchCreateVehicle", {})
  .n("IoTFleetWiseClient", "BatchCreateVehicleCommand")
  .f(void 0, void 0)
  .ser(se_BatchCreateVehicleCommand)
  .de(de_BatchCreateVehicleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchCreateVehicleRequest;
      output: BatchCreateVehicleResponse;
    };
    sdk: {
      input: BatchCreateVehicleCommandInput;
      output: BatchCreateVehicleCommandOutput;
    };
  };
}
