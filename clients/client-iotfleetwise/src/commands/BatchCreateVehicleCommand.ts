// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchCreateVehicleRequest, BatchCreateVehicleResponse } from "../models/models_0";
import { BatchCreateVehicle$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a group, or batch, of vehicles.
 *
 * > **Note:** You must specify a decoder manifest and a vehicle model (model manifest) for each vehicle.
 *
 * For more information, see [Create multiple vehicles (AWS CLI)](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/create-vehicles-cli.html) in the *Amazon Web Services IoT FleetWise Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, BatchCreateVehicleCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, BatchCreateVehicleCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
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
export class BatchCreateVehicleCommand extends command<BatchCreateVehicleCommandInput, BatchCreateVehicleCommandOutput>(
  _ep0,
  _mw0,
  "BatchCreateVehicle",
  BatchCreateVehicle$
) {
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
