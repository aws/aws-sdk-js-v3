// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateVehicleRequest, UpdateVehicleResponse } from "../models/models_0";
import { UpdateVehicle$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateVehicleCommand}.
 */
export interface UpdateVehicleCommandInput extends UpdateVehicleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateVehicleCommand}.
 */
export interface UpdateVehicleCommandOutput extends UpdateVehicleResponse, __MetadataBearer {}

/**
 * Updates a vehicle.
 *
 * > **Important:** Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see [Amazon Web Services Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the *Amazon Web Services IoT FleetWise Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, UpdateVehicleCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, UpdateVehicleCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // UpdateVehicleRequest
 *   vehicleName: "STRING_VALUE", // required
 *   modelManifestArn: "STRING_VALUE",
 *   decoderManifestArn: "STRING_VALUE",
 *   attributes: { // attributesMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   attributeUpdateMode: "Overwrite" || "Merge",
 *   stateTemplatesToAdd: [ // StateTemplateAssociations
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
 *   stateTemplatesToRemove: [ // StateTemplateAssociationIdentifiers
 *     "STRING_VALUE",
 *   ],
 *   stateTemplatesToUpdate: [
 *     {
 *       identifier: "STRING_VALUE", // required
 *       stateTemplateUpdateStrategy: {//  Union: only one key present
 *         periodic: {
 *           stateTemplateUpdateRate: {
 *             unit: "MILLISECOND" || "SECOND" || "MINUTE" || "HOUR", // required
 *             value: Number("int"), // required
 *           },
 *         },
 *         onChange: {},
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateVehicleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVehicleResponse
 * //   vehicleName: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateVehicleCommandInput - {@link UpdateVehicleCommandInput}
 * @returns {@link UpdateVehicleCommandOutput}
 * @see {@link UpdateVehicleCommandInput} for command's `input` shape.
 * @see {@link UpdateVehicleCommandOutput} for command's `response` shape.
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
export class UpdateVehicleCommand extends command<UpdateVehicleCommandInput, UpdateVehicleCommandOutput>(
  _ep0,
  _mw0,
  "UpdateVehicle",
  UpdateVehicle$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateVehicleRequest;
      output: UpdateVehicleResponse;
    };
    sdk: {
      input: UpdateVehicleCommandInput;
      output: UpdateVehicleCommandOutput;
    };
  };
}
