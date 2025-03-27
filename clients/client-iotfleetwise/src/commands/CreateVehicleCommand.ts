// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { CreateVehicleRequest, CreateVehicleResponse } from "../models/models_0";
import { de_CreateVehicleCommand, se_CreateVehicleCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVehicleCommand}.
 */
export interface CreateVehicleCommandInput extends CreateVehicleRequest {}
/**
 * @public
 *
 * The output of {@link CreateVehicleCommand}.
 */
export interface CreateVehicleCommandOutput extends CreateVehicleResponse, __MetadataBearer {}

/**
 * <p> Creates a vehicle, which is an instance of a vehicle model (model manifest). Vehicles
 *             created from the same vehicle model consist of the same signals inherited from the
 *             vehicle model.</p>
 *          <note>
 *             <p> If you have an existing Amazon Web Services IoT thing, you can use Amazon Web Services IoT FleetWise to create a
 *                 vehicle and collect data from your thing. </p>
 *          </note>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/create-vehicle-cli.html">Create a vehicle
 *                 (AWS CLI)</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, CreateVehicleCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, CreateVehicleCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const input = { // CreateVehicleRequest
 *   vehicleName: "STRING_VALUE", // required
 *   modelManifestArn: "STRING_VALUE", // required
 *   decoderManifestArn: "STRING_VALUE", // required
 *   attributes: { // attributesMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   associationBehavior: "CreateIotThing" || "ValidateIotThingExists",
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   stateTemplates: [ // StateTemplateAssociations
 *     { // StateTemplateAssociation
 *       identifier: "STRING_VALUE", // required
 *       stateTemplateUpdateStrategy: { // StateTemplateUpdateStrategy Union: only one key present
 *         periodic: { // PeriodicStateTemplateUpdateStrategy
 *           stateTemplateUpdateRate: { // TimePeriod
 *             unit: "MILLISECOND" || "SECOND" || "MINUTE" || "HOUR", // required
 *             value: Number("int"), // required
 *           },
 *         },
 *         onChange: {},
 *       },
 *     },
 *   ],
 * };
 * const command = new CreateVehicleCommand(input);
 * const response = await client.send(command);
 * // { // CreateVehicleResponse
 * //   vehicleName: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   thingArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateVehicleCommandInput - {@link CreateVehicleCommandInput}
 * @returns {@link CreateVehicleCommandOutput}
 * @see {@link CreateVehicleCommandInput} for command's `input` shape.
 * @see {@link CreateVehicleCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time.</p>
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
export class CreateVehicleCommand extends $Command
  .classBuilder<
    CreateVehicleCommandInput,
    CreateVehicleCommandOutput,
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
  .s("IoTAutobahnControlPlane", "CreateVehicle", {})
  .n("IoTFleetWiseClient", "CreateVehicleCommand")
  .f(void 0, void 0)
  .ser(se_CreateVehicleCommand)
  .de(de_CreateVehicleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVehicleRequest;
      output: CreateVehicleResponse;
    };
    sdk: {
      input: CreateVehicleCommandInput;
      output: CreateVehicleCommandOutput;
    };
  };
}
