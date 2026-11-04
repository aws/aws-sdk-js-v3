// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateVehicleRequest, CreateVehicleResponse } from "../models/models_0";
import { CreateVehicle$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a vehicle, which is an instance of a vehicle model (model manifest). Vehicles created from the same vehicle model consist of the same signals inherited from the vehicle model.
 *
 * > **Note:** If you have an existing Amazon Web Services IoT thing, you can use Amazon Web Services IoT FleetWise to create a vehicle and collect data from your thing.
 *
 * For more information, see [Create a vehicle (AWS CLI)](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/create-vehicle-cli.html) in the *Amazon Web Services IoT FleetWise Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, CreateVehicleCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, CreateVehicleCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
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
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.
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
export class CreateVehicleCommand extends command<CreateVehicleCommandInput, CreateVehicleCommandOutput>(
  _ep0,
  _mw0,
  "CreateVehicle",
  CreateVehicle$
) {
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
