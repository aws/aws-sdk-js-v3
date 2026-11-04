// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchUpdateVehicleRequest, BatchUpdateVehicleResponse } from "../models/models_0";
import { BatchUpdateVehicle$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates a group, or batch, of vehicles.
 *
 * > **Note:** You must specify a decoder manifest and a vehicle model (model manifest) for each vehicle.
 *
 * For more information, see [Update multiple vehicles (AWS CLI)](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/update-vehicles-cli.html) in the *Amazon Web Services IoT FleetWise Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, BatchUpdateVehicleCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, BatchUpdateVehicleCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
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
 *       stateTemplatesToAdd: [ // StateTemplateAssociations
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
 *       stateTemplatesToRemove: [ // StateTemplateAssociationIdentifiers
 *         "STRING_VALUE",
 *       ],
 *       stateTemplatesToUpdate: [
 *         {
 *           identifier: "STRING_VALUE", // required
 *           stateTemplateUpdateStrategy: {//  Union: only one key present
 *             periodic: {
 *               stateTemplateUpdateRate: {
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
export class BatchUpdateVehicleCommand extends command<BatchUpdateVehicleCommandInput, BatchUpdateVehicleCommandOutput>(
  _ep0,
  _mw0,
  "BatchUpdateVehicle",
  BatchUpdateVehicle$
) {
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
