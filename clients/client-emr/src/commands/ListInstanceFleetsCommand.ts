// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListInstanceFleetsInput, ListInstanceFleetsOutput } from "../models/models_0";
import { ListInstanceFleets } from "../schemas/schemas_2_Instance";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInstanceFleetsCommand}.
 */
export interface ListInstanceFleetsCommandInput extends ListInstanceFleetsInput {}
/**
 * @public
 *
 * The output of {@link ListInstanceFleetsCommand}.
 */
export interface ListInstanceFleetsCommandOutput extends ListInstanceFleetsOutput, __MetadataBearer {}

/**
 * <p>Lists all available details about the instance fleets in a cluster.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR releases
 *             4.8.0 and later, excluding 5.0.x versions.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListInstanceFleetsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListInstanceFleetsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // ListInstanceFleetsInput
 *   ClusterId: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListInstanceFleetsCommand(input);
 * const response = await client.send(command);
 * // { // ListInstanceFleetsOutput
 * //   InstanceFleets: [ // InstanceFleetList
 * //     { // InstanceFleet
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Status: { // InstanceFleetStatus
 * //         State: "PROVISIONING" || "BOOTSTRAPPING" || "RUNNING" || "RESIZING" || "SUSPENDED" || "TERMINATING" || "TERMINATED",
 * //         StateChangeReason: { // InstanceFleetStateChangeReason
 * //           Code: "INTERNAL_ERROR" || "VALIDATION_ERROR" || "INSTANCE_FAILURE" || "CLUSTER_TERMINATED",
 * //           Message: "STRING_VALUE",
 * //         },
 * //         Timeline: { // InstanceFleetTimeline
 * //           CreationDateTime: new Date("TIMESTAMP"),
 * //           ReadyDateTime: new Date("TIMESTAMP"),
 * //           EndDateTime: new Date("TIMESTAMP"),
 * //         },
 * //       },
 * //       InstanceFleetType: "MASTER" || "CORE" || "TASK",
 * //       TargetOnDemandCapacity: Number("int"),
 * //       TargetSpotCapacity: Number("int"),
 * //       ProvisionedOnDemandCapacity: Number("int"),
 * //       ProvisionedSpotCapacity: Number("int"),
 * //       InstanceTypeSpecifications: [ // InstanceTypeSpecificationList
 * //         { // InstanceTypeSpecification
 * //           InstanceType: "STRING_VALUE",
 * //           WeightedCapacity: Number("int"),
 * //           BidPrice: "STRING_VALUE",
 * //           BidPriceAsPercentageOfOnDemandPrice: Number("double"),
 * //           Configurations: [ // ConfigurationList
 * //             { // Configuration
 * //               Classification: "STRING_VALUE",
 * //               Configurations: [
 * //                 {
 * //                   Classification: "STRING_VALUE",
 * //                   Configurations: "<ConfigurationList>",
 * //                   Properties: { // StringMap
 * //                     "<keys>": "STRING_VALUE",
 * //                   },
 * //                 },
 * //               ],
 * //               Properties: {
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //           EbsBlockDevices: [ // EbsBlockDeviceList
 * //             { // EbsBlockDevice
 * //               VolumeSpecification: { // VolumeSpecification
 * //                 VolumeType: "STRING_VALUE", // required
 * //                 Iops: Number("int"),
 * //                 SizeInGB: Number("int"), // required
 * //                 Throughput: Number("int"),
 * //               },
 * //               Device: "STRING_VALUE",
 * //             },
 * //           ],
 * //           EbsOptimized: true || false,
 * //           CustomAmiId: "STRING_VALUE",
 * //           Priority: Number("double"),
 * //         },
 * //       ],
 * //       LaunchSpecifications: { // InstanceFleetProvisioningSpecifications
 * //         SpotSpecification: { // SpotProvisioningSpecification
 * //           TimeoutDurationMinutes: Number("int"), // required
 * //           TimeoutAction: "SWITCH_TO_ON_DEMAND" || "TERMINATE_CLUSTER", // required
 * //           BlockDurationMinutes: Number("int"),
 * //           AllocationStrategy: "capacity-optimized" || "price-capacity-optimized" || "lowest-price" || "diversified" || "capacity-optimized-prioritized",
 * //         },
 * //         OnDemandSpecification: { // OnDemandProvisioningSpecification
 * //           AllocationStrategy: "lowest-price" || "prioritized", // required
 * //           CapacityReservationOptions: { // OnDemandCapacityReservationOptions
 * //             UsageStrategy: "use-capacity-reservations-first",
 * //             CapacityReservationPreference: "open" || "none",
 * //             CapacityReservationResourceGroupArn: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       ResizeSpecifications: { // InstanceFleetResizingSpecifications
 * //         SpotResizeSpecification: { // SpotResizingSpecification
 * //           TimeoutDurationMinutes: Number("int"),
 * //           AllocationStrategy: "capacity-optimized" || "price-capacity-optimized" || "lowest-price" || "diversified" || "capacity-optimized-prioritized",
 * //         },
 * //         OnDemandResizeSpecification: { // OnDemandResizingSpecification
 * //           TimeoutDurationMinutes: Number("int"),
 * //           AllocationStrategy: "lowest-price" || "prioritized",
 * //           CapacityReservationOptions: {
 * //             UsageStrategy: "use-capacity-reservations-first",
 * //             CapacityReservationPreference: "open" || "none",
 * //             CapacityReservationResourceGroupArn: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       Context: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInstanceFleetsCommandInput - {@link ListInstanceFleetsCommandInput}
 * @returns {@link ListInstanceFleetsCommandOutput}
 * @see {@link ListInstanceFleetsCommandInput} for command's `input` shape.
 * @see {@link ListInstanceFleetsCommandOutput} for command's `response` shape.
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
export class ListInstanceFleetsCommand extends $Command
  .classBuilder<
    ListInstanceFleetsCommandInput,
    ListInstanceFleetsCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticMapReduce", "ListInstanceFleets", {})
  .n("EMRClient", "ListInstanceFleetsCommand")
  .sc(ListInstanceFleets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInstanceFleetsInput;
      output: ListInstanceFleetsOutput;
    };
    sdk: {
      input: ListInstanceFleetsCommandInput;
      output: ListInstanceFleetsCommandOutput;
    };
  };
}
