// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { UpdateVehicleRequest, UpdateVehicleResponse } from "../models/models_0";
import { UpdateVehicle } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> Updates a vehicle.</p>
 *          <important>
 *             <p>Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html">Amazon Web Services Region and feature availability</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 *          </important>
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
export class UpdateVehicleCommand extends $Command
  .classBuilder<
    UpdateVehicleCommandInput,
    UpdateVehicleCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IoTAutobahnControlPlane", "UpdateVehicle", {})
  .n("IoTFleetWiseClient", "UpdateVehicleCommand")
  .sc(UpdateVehicle)
  .build() {
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
