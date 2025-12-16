// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { AddInstanceGroupsInput, AddInstanceGroupsOutput } from "../models/models_0";
import { AddInstanceGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddInstanceGroupsCommand}.
 */
export interface AddInstanceGroupsCommandInput extends AddInstanceGroupsInput {}
/**
 * @public
 *
 * The output of {@link AddInstanceGroupsCommand}.
 */
export interface AddInstanceGroupsCommandOutput extends AddInstanceGroupsOutput, __MetadataBearer {}

/**
 * <p>Adds one or more instance groups to a running cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, AddInstanceGroupsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, AddInstanceGroupsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // AddInstanceGroupsInput
 *   InstanceGroups: [ // InstanceGroupConfigList // required
 *     { // InstanceGroupConfig
 *       Name: "STRING_VALUE",
 *       Market: "ON_DEMAND" || "SPOT",
 *       InstanceRole: "MASTER" || "CORE" || "TASK", // required
 *       BidPrice: "STRING_VALUE",
 *       InstanceType: "STRING_VALUE", // required
 *       InstanceCount: Number("int"), // required
 *       Configurations: [ // ConfigurationList
 *         { // Configuration
 *           Classification: "STRING_VALUE",
 *           Configurations: [
 *             {
 *               Classification: "STRING_VALUE",
 *               Configurations: "<ConfigurationList>",
 *               Properties: { // StringMap
 *                 "<keys>": "STRING_VALUE",
 *               },
 *             },
 *           ],
 *           Properties: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *       ],
 *       EbsConfiguration: { // EbsConfiguration
 *         EbsBlockDeviceConfigs: [ // EbsBlockDeviceConfigList
 *           { // EbsBlockDeviceConfig
 *             VolumeSpecification: { // VolumeSpecification
 *               VolumeType: "STRING_VALUE", // required
 *               Iops: Number("int"),
 *               SizeInGB: Number("int"), // required
 *               Throughput: Number("int"),
 *             },
 *             VolumesPerInstance: Number("int"),
 *           },
 *         ],
 *         EbsOptimized: true || false,
 *       },
 *       AutoScalingPolicy: { // AutoScalingPolicy
 *         Constraints: { // ScalingConstraints
 *           MinCapacity: Number("int"), // required
 *           MaxCapacity: Number("int"), // required
 *         },
 *         Rules: [ // ScalingRuleList // required
 *           { // ScalingRule
 *             Name: "STRING_VALUE", // required
 *             Description: "STRING_VALUE",
 *             Action: { // ScalingAction
 *               Market: "ON_DEMAND" || "SPOT",
 *               SimpleScalingPolicyConfiguration: { // SimpleScalingPolicyConfiguration
 *                 AdjustmentType: "CHANGE_IN_CAPACITY" || "PERCENT_CHANGE_IN_CAPACITY" || "EXACT_CAPACITY",
 *                 ScalingAdjustment: Number("int"), // required
 *                 CoolDown: Number("int"),
 *               },
 *             },
 *             Trigger: { // ScalingTrigger
 *               CloudWatchAlarmDefinition: { // CloudWatchAlarmDefinition
 *                 ComparisonOperator: "GREATER_THAN_OR_EQUAL" || "GREATER_THAN" || "LESS_THAN" || "LESS_THAN_OR_EQUAL", // required
 *                 EvaluationPeriods: Number("int"),
 *                 MetricName: "STRING_VALUE", // required
 *                 Namespace: "STRING_VALUE",
 *                 Period: Number("int"), // required
 *                 Statistic: "SAMPLE_COUNT" || "AVERAGE" || "SUM" || "MINIMUM" || "MAXIMUM",
 *                 Threshold: Number("double"), // required
 *                 Unit: "NONE" || "SECONDS" || "MICRO_SECONDS" || "MILLI_SECONDS" || "BYTES" || "KILO_BYTES" || "MEGA_BYTES" || "GIGA_BYTES" || "TERA_BYTES" || "BITS" || "KILO_BITS" || "MEGA_BITS" || "GIGA_BITS" || "TERA_BITS" || "PERCENT" || "COUNT" || "BYTES_PER_SECOND" || "KILO_BYTES_PER_SECOND" || "MEGA_BYTES_PER_SECOND" || "GIGA_BYTES_PER_SECOND" || "TERA_BYTES_PER_SECOND" || "BITS_PER_SECOND" || "KILO_BITS_PER_SECOND" || "MEGA_BITS_PER_SECOND" || "GIGA_BITS_PER_SECOND" || "TERA_BITS_PER_SECOND" || "COUNT_PER_SECOND",
 *                 Dimensions: [ // MetricDimensionList
 *                   { // MetricDimension
 *                     Key: "STRING_VALUE",
 *                     Value: "STRING_VALUE",
 *                   },
 *                 ],
 *               },
 *             },
 *           },
 *         ],
 *       },
 *       CustomAmiId: "STRING_VALUE",
 *     },
 *   ],
 *   JobFlowId: "STRING_VALUE", // required
 * };
 * const command = new AddInstanceGroupsCommand(input);
 * const response = await client.send(command);
 * // { // AddInstanceGroupsOutput
 * //   JobFlowId: "STRING_VALUE",
 * //   InstanceGroupIds: [ // InstanceGroupIdsList
 * //     "STRING_VALUE",
 * //   ],
 * //   ClusterArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AddInstanceGroupsCommandInput - {@link AddInstanceGroupsCommandInput}
 * @returns {@link AddInstanceGroupsCommandOutput}
 * @see {@link AddInstanceGroupsCommandInput} for command's `input` shape.
 * @see {@link AddInstanceGroupsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class AddInstanceGroupsCommand extends $Command
  .classBuilder<
    AddInstanceGroupsCommandInput,
    AddInstanceGroupsCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticMapReduce", "AddInstanceGroups", {})
  .n("EMRClient", "AddInstanceGroupsCommand")
  .sc(AddInstanceGroups$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddInstanceGroupsInput;
      output: AddInstanceGroupsOutput;
    };
    sdk: {
      input: AddInstanceGroupsCommandInput;
      output: AddInstanceGroupsCommandOutput;
    };
  };
}
