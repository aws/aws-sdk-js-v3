// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { AddInstanceFleetInput, AddInstanceFleetOutput } from "../models/models_0";
import { AddInstanceFleet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddInstanceFleetCommand}.
 */
export interface AddInstanceFleetCommandInput extends AddInstanceFleetInput {}
/**
 * @public
 *
 * The output of {@link AddInstanceFleetCommand}.
 */
export interface AddInstanceFleetCommandOutput extends AddInstanceFleetOutput, __MetadataBearer {}

/**
 * <p>Adds an instance fleet to a running cluster.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR releases
 *             4.8.0 and later, excluding 5.0.x.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, AddInstanceFleetCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, AddInstanceFleetCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // AddInstanceFleetInput
 *   ClusterId: "STRING_VALUE", // required
 *   InstanceFleet: { // InstanceFleetConfig
 *     Name: "STRING_VALUE",
 *     InstanceFleetType: "MASTER" || "CORE" || "TASK", // required
 *     TargetOnDemandCapacity: Number("int"),
 *     TargetSpotCapacity: Number("int"),
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
 *     LaunchSpecifications: { // InstanceFleetProvisioningSpecifications
 *       SpotSpecification: { // SpotProvisioningSpecification
 *         TimeoutDurationMinutes: Number("int"), // required
 *         TimeoutAction: "SWITCH_TO_ON_DEMAND" || "TERMINATE_CLUSTER", // required
 *         BlockDurationMinutes: Number("int"),
 *         AllocationStrategy: "capacity-optimized" || "price-capacity-optimized" || "lowest-price" || "diversified" || "capacity-optimized-prioritized",
 *       },
 *       OnDemandSpecification: { // OnDemandProvisioningSpecification
 *         AllocationStrategy: "lowest-price" || "prioritized", // required
 *         CapacityReservationOptions: { // OnDemandCapacityReservationOptions
 *           UsageStrategy: "use-capacity-reservations-first",
 *           CapacityReservationPreference: "open" || "none",
 *           CapacityReservationResourceGroupArn: "STRING_VALUE",
 *         },
 *       },
 *     },
 *     ResizeSpecifications: { // InstanceFleetResizingSpecifications
 *       SpotResizeSpecification: { // SpotResizingSpecification
 *         TimeoutDurationMinutes: Number("int"),
 *         AllocationStrategy: "capacity-optimized" || "price-capacity-optimized" || "lowest-price" || "diversified" || "capacity-optimized-prioritized",
 *       },
 *       OnDemandResizeSpecification: { // OnDemandResizingSpecification
 *         TimeoutDurationMinutes: Number("int"),
 *         AllocationStrategy: "lowest-price" || "prioritized",
 *         CapacityReservationOptions: {
 *           UsageStrategy: "use-capacity-reservations-first",
 *           CapacityReservationPreference: "open" || "none",
 *           CapacityReservationResourceGroupArn: "STRING_VALUE",
 *         },
 *       },
 *     },
 *     Context: "STRING_VALUE",
 *   },
 * };
 * const command = new AddInstanceFleetCommand(input);
 * const response = await client.send(command);
 * // { // AddInstanceFleetOutput
 * //   ClusterId: "STRING_VALUE",
 * //   InstanceFleetId: "STRING_VALUE",
 * //   ClusterArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AddInstanceFleetCommandInput - {@link AddInstanceFleetCommandInput}
 * @returns {@link AddInstanceFleetCommandOutput}
 * @see {@link AddInstanceFleetCommandInput} for command's `input` shape.
 * @see {@link AddInstanceFleetCommandOutput} for command's `response` shape.
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
export class AddInstanceFleetCommand extends $Command
  .classBuilder<
    AddInstanceFleetCommandInput,
    AddInstanceFleetCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticMapReduce", "AddInstanceFleet", {})
  .n("EMRClient", "AddInstanceFleetCommand")
  .sc(AddInstanceFleet$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddInstanceFleetInput;
      output: AddInstanceFleetOutput;
    };
    sdk: {
      input: AddInstanceFleetCommandInput;
      output: AddInstanceFleetCommandOutput;
    };
  };
}
