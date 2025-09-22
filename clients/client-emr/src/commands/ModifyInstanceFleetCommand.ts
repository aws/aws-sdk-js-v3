// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyInstanceFleetInput } from "../models/models_0";
import { ModifyInstanceFleet } from "../schemas/schemas_2_Instance";

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
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // ModifyInstanceFleetInput
 *   ClusterId: "STRING_VALUE", // required
 *   InstanceFleet: { // InstanceFleetModifyConfig
 *     InstanceFleetId: "STRING_VALUE", // required
 *     TargetOnDemandCapacity: Number("int"),
 *     TargetSpotCapacity: Number("int"),
 *     ResizeSpecifications: { // InstanceFleetResizingSpecifications
 *       SpotResizeSpecification: { // SpotResizingSpecification
 *         TimeoutDurationMinutes: Number("int"),
 *         AllocationStrategy: "capacity-optimized" || "price-capacity-optimized" || "lowest-price" || "diversified" || "capacity-optimized-prioritized",
 *       },
 *       OnDemandResizeSpecification: { // OnDemandResizingSpecification
 *         TimeoutDurationMinutes: Number("int"),
 *         AllocationStrategy: "lowest-price" || "prioritized",
 *         CapacityReservationOptions: { // OnDemandCapacityReservationOptions
 *           UsageStrategy: "use-capacity-reservations-first",
 *           CapacityReservationPreference: "open" || "none",
 *           CapacityReservationResourceGroupArn: "STRING_VALUE",
 *         },
 *       },
 *     },
 *     InstanceTypeConfigs: [ // InstanceTypeConfigList
 *       { // InstanceTypeConfig
 *         InstanceType: "STRING_VALUE", // required
 *         WeightedCapacity: Number("int"),
 *         BidPrice: "STRING_VALUE",
 *         BidPriceAsPercentageOfOnDemandPrice: Number("double"),
 *         EbsConfiguration: { // EbsConfiguration
 *           EbsBlockDeviceConfigs: [ // EbsBlockDeviceConfigList
 *             { // EbsBlockDeviceConfig
 *               VolumeSpecification: { // VolumeSpecification
 *                 VolumeType: "STRING_VALUE", // required
 *                 Iops: Number("int"),
 *                 SizeInGB: Number("int"), // required
 *                 Throughput: Number("int"),
 *               },
 *               VolumesPerInstance: Number("int"),
 *             },
 *           ],
 *           EbsOptimized: true || false,
 *         },
 *         Configurations: [ // ConfigurationList
 *           { // Configuration
 *             Classification: "STRING_VALUE",
 *             Configurations: [
 *               {
 *                 Classification: "STRING_VALUE",
 *                 Configurations: "<ConfigurationList>",
 *                 Properties: { // StringMap
 *                   "<keys>": "STRING_VALUE",
 *                 },
 *               },
 *             ],
 *             Properties: {
 *               "<keys>": "STRING_VALUE",
 *             },
 *           },
 *         ],
 *         CustomAmiId: "STRING_VALUE",
 *         Priority: Number("double"),
 *       },
 *     ],
 *     Context: "STRING_VALUE",
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticMapReduce", "ModifyInstanceFleet", {})
  .n("EMRClient", "ModifyInstanceFleetCommand")
  .sc(ModifyInstanceFleet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyInstanceFleetInput;
      output: {};
    };
    sdk: {
      input: ModifyInstanceFleetCommandInput;
      output: ModifyInstanceFleetCommandOutput;
    };
  };
}
