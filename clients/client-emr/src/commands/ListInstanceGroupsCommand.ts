// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListInstanceGroupsInput, ListInstanceGroupsOutput } from "../models/models_0";
import { de_ListInstanceGroupsCommand, se_ListInstanceGroupsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInstanceGroupsCommand}.
 */
export interface ListInstanceGroupsCommandInput extends ListInstanceGroupsInput {}
/**
 * @public
 *
 * The output of {@link ListInstanceGroupsCommand}.
 */
export interface ListInstanceGroupsCommandOutput extends ListInstanceGroupsOutput, __MetadataBearer {}

/**
 * <p>Provides all available details about the instance groups in a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListInstanceGroupsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListInstanceGroupsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // ListInstanceGroupsInput
 *   ClusterId: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListInstanceGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListInstanceGroupsOutput
 * //   InstanceGroups: [ // InstanceGroupList
 * //     { // InstanceGroup
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Market: "ON_DEMAND" || "SPOT",
 * //       InstanceGroupType: "MASTER" || "CORE" || "TASK",
 * //       BidPrice: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE",
 * //       RequestedInstanceCount: Number("int"),
 * //       RunningInstanceCount: Number("int"),
 * //       Status: { // InstanceGroupStatus
 * //         State: "PROVISIONING" || "BOOTSTRAPPING" || "RUNNING" || "RECONFIGURING" || "RESIZING" || "SUSPENDED" || "TERMINATING" || "TERMINATED" || "ARRESTED" || "SHUTTING_DOWN" || "ENDED",
 * //         StateChangeReason: { // InstanceGroupStateChangeReason
 * //           Code: "INTERNAL_ERROR" || "VALIDATION_ERROR" || "INSTANCE_FAILURE" || "CLUSTER_TERMINATED",
 * //           Message: "STRING_VALUE",
 * //         },
 * //         Timeline: { // InstanceGroupTimeline
 * //           CreationDateTime: new Date("TIMESTAMP"),
 * //           ReadyDateTime: new Date("TIMESTAMP"),
 * //           EndDateTime: new Date("TIMESTAMP"),
 * //         },
 * //       },
 * //       Configurations: [ // ConfigurationList
 * //         { // Configuration
 * //           Classification: "STRING_VALUE",
 * //           Configurations: [
 * //             {
 * //               Classification: "STRING_VALUE",
 * //               Configurations: "<ConfigurationList>",
 * //               Properties: { // StringMap
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //           Properties: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       ConfigurationsVersion: Number("long"),
 * //       LastSuccessfullyAppliedConfigurations: "<ConfigurationList>",
 * //       LastSuccessfullyAppliedConfigurationsVersion: Number("long"),
 * //       EbsBlockDevices: [ // EbsBlockDeviceList
 * //         { // EbsBlockDevice
 * //           VolumeSpecification: { // VolumeSpecification
 * //             VolumeType: "STRING_VALUE", // required
 * //             Iops: Number("int"),
 * //             SizeInGB: Number("int"), // required
 * //             Throughput: Number("int"),
 * //           },
 * //           Device: "STRING_VALUE",
 * //         },
 * //       ],
 * //       EbsOptimized: true || false,
 * //       ShrinkPolicy: { // ShrinkPolicy
 * //         DecommissionTimeout: Number("int"),
 * //         InstanceResizePolicy: { // InstanceResizePolicy
 * //           InstancesToTerminate: [ // EC2InstanceIdsList
 * //             "STRING_VALUE",
 * //           ],
 * //           InstancesToProtect: [
 * //             "STRING_VALUE",
 * //           ],
 * //           InstanceTerminationTimeout: Number("int"),
 * //         },
 * //       },
 * //       AutoScalingPolicy: { // AutoScalingPolicyDescription
 * //         Status: { // AutoScalingPolicyStatus
 * //           State: "PENDING" || "ATTACHING" || "ATTACHED" || "DETACHING" || "DETACHED" || "FAILED",
 * //           StateChangeReason: { // AutoScalingPolicyStateChangeReason
 * //             Code: "USER_REQUEST" || "PROVISION_FAILURE" || "CLEANUP_FAILURE",
 * //             Message: "STRING_VALUE",
 * //           },
 * //         },
 * //         Constraints: { // ScalingConstraints
 * //           MinCapacity: Number("int"), // required
 * //           MaxCapacity: Number("int"), // required
 * //         },
 * //         Rules: [ // ScalingRuleList
 * //           { // ScalingRule
 * //             Name: "STRING_VALUE", // required
 * //             Description: "STRING_VALUE",
 * //             Action: { // ScalingAction
 * //               Market: "ON_DEMAND" || "SPOT",
 * //               SimpleScalingPolicyConfiguration: { // SimpleScalingPolicyConfiguration
 * //                 AdjustmentType: "CHANGE_IN_CAPACITY" || "PERCENT_CHANGE_IN_CAPACITY" || "EXACT_CAPACITY",
 * //                 ScalingAdjustment: Number("int"), // required
 * //                 CoolDown: Number("int"),
 * //               },
 * //             },
 * //             Trigger: { // ScalingTrigger
 * //               CloudWatchAlarmDefinition: { // CloudWatchAlarmDefinition
 * //                 ComparisonOperator: "GREATER_THAN_OR_EQUAL" || "GREATER_THAN" || "LESS_THAN" || "LESS_THAN_OR_EQUAL", // required
 * //                 EvaluationPeriods: Number("int"),
 * //                 MetricName: "STRING_VALUE", // required
 * //                 Namespace: "STRING_VALUE",
 * //                 Period: Number("int"), // required
 * //                 Statistic: "SAMPLE_COUNT" || "AVERAGE" || "SUM" || "MINIMUM" || "MAXIMUM",
 * //                 Threshold: Number("double"), // required
 * //                 Unit: "NONE" || "SECONDS" || "MICRO_SECONDS" || "MILLI_SECONDS" || "BYTES" || "KILO_BYTES" || "MEGA_BYTES" || "GIGA_BYTES" || "TERA_BYTES" || "BITS" || "KILO_BITS" || "MEGA_BITS" || "GIGA_BITS" || "TERA_BITS" || "PERCENT" || "COUNT" || "BYTES_PER_SECOND" || "KILO_BYTES_PER_SECOND" || "MEGA_BYTES_PER_SECOND" || "GIGA_BYTES_PER_SECOND" || "TERA_BYTES_PER_SECOND" || "BITS_PER_SECOND" || "KILO_BITS_PER_SECOND" || "MEGA_BITS_PER_SECOND" || "GIGA_BITS_PER_SECOND" || "TERA_BITS_PER_SECOND" || "COUNT_PER_SECOND",
 * //                 Dimensions: [ // MetricDimensionList
 * //                   { // MetricDimension
 * //                     Key: "STRING_VALUE",
 * //                     Value: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       CustomAmiId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInstanceGroupsCommandInput - {@link ListInstanceGroupsCommandInput}
 * @returns {@link ListInstanceGroupsCommandOutput}
 * @see {@link ListInstanceGroupsCommandInput} for command's `input` shape.
 * @see {@link ListInstanceGroupsCommandOutput} for command's `response` shape.
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
export class ListInstanceGroupsCommand extends $Command
  .classBuilder<
    ListInstanceGroupsCommandInput,
    ListInstanceGroupsCommandOutput,
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
  .s("ElasticMapReduce", "ListInstanceGroups", {})
  .n("EMRClient", "ListInstanceGroupsCommand")
  .f(void 0, void 0)
  .ser(se_ListInstanceGroupsCommand)
  .de(de_ListInstanceGroupsCommand)
  .build() {}
