// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyInstanceFleetInput } from "../models/models_0";
import { de_ModifyInstanceFleetCommand, se_ModifyInstanceFleetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyInstanceFleetCommand}.
 */
export interface ModifyInstanceFleetCommandInput extends ModifyInstanceFleetInput {}
/**
 * @public
 *
 * The output of {@link ModifyInstanceFleetCommand}.
 */
export interface ModifyInstanceFleetCommandOutput extends __MetadataBearer {}

/**
 * <p>Modifies the target On-Demand and target Spot capacities for the instance fleet with the
 *          specified InstanceFleetID within the cluster specified using ClusterID. The call either
 *          succeeds or fails atomically.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR releases
 *             4.8.0 and later, excluding 5.0.x versions.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ModifyInstanceFleetCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ModifyInstanceFleetCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // ModifyInstanceFleetInput
 *   ClusterId: "STRING_VALUE", // required
 *   InstanceFleet: { // InstanceFleetModifyConfig
 *     InstanceFleetId: "STRING_VALUE", // required
 *     TargetOnDemandCapacity: Number("int"),
 *     TargetSpotCapacity: Number("int"),
 *     ResizeSpecifications: { // InstanceFleetResizingSpecifications
 *       SpotResizeSpecification: { // SpotResizingSpecification
 *         TimeoutDurationMinutes: Number("int"), // required
 *       },
 *       OnDemandResizeSpecification: { // OnDemandResizingSpecification
 *         TimeoutDurationMinutes: Number("int"), // required
 *       },
 *     },
 *   },
 * };
 * const command = new ModifyInstanceFleetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyInstanceFleetCommandInput - {@link ModifyInstanceFleetCommandInput}
 * @returns {@link ModifyInstanceFleetCommandOutput}
 * @see {@link ModifyInstanceFleetCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceFleetCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 * @public
 */
export class ModifyInstanceFleetCommand extends $Command
  .classBuilder<
    ModifyInstanceFleetCommandInput,
    ModifyInstanceFleetCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticMapReduce", "ModifyInstanceFleet", {})
  .n("EMRClient", "ModifyInstanceFleetCommand")
  .f(void 0, void 0)
  .ser(se_ModifyInstanceFleetCommand)
  .de(de_ModifyInstanceFleetCommand)
  .build() {}
