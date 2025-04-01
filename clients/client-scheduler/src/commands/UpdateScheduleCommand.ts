// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateScheduleInput, UpdateScheduleOutput } from "../models/models_0";
import { de_UpdateScheduleCommand, se_UpdateScheduleCommand } from "../protocols/Aws_restJson1";
import { SchedulerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchedulerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateScheduleCommand}.
 */
export interface UpdateScheduleCommandInput extends UpdateScheduleInput {}
/**
 * @public
 *
 * The output of {@link UpdateScheduleCommand}.
 */
export interface UpdateScheduleCommandOutput extends UpdateScheduleOutput, __MetadataBearer {}

/**
 * <p>
 *          Updates the specified schedule. When you call <code>UpdateSchedule</code>, EventBridge Scheduler uses all values, including empty values, specified in the request and
 *          overrides the existing schedule. This is by design. This means that if you do not set an optional field in your request, that field will be set to
 *          its system-default value after the update.
 *       </p>
 *          <p>
 *          Before calling this operation, we recommend that you call the <code>GetSchedule</code> API operation and make a note of all optional parameters
 *          for your <code>UpdateSchedule</code> call.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchedulerClient, UpdateScheduleCommand } from "@aws-sdk/client-scheduler"; // ES Modules import
 * // const { SchedulerClient, UpdateScheduleCommand } = require("@aws-sdk/client-scheduler"); // CommonJS import
 * const client = new SchedulerClient(config);
 * const input = { // UpdateScheduleInput
 *   Name: "STRING_VALUE", // required
 *   GroupName: "STRING_VALUE",
 *   ScheduleExpression: "STRING_VALUE", // required
 *   StartDate: new Date("TIMESTAMP"),
 *   EndDate: new Date("TIMESTAMP"),
 *   Description: "STRING_VALUE",
 *   ScheduleExpressionTimezone: "STRING_VALUE",
 *   State: "STRING_VALUE",
 *   KmsKeyArn: "STRING_VALUE",
 *   Target: { // Target
 *     Arn: "STRING_VALUE", // required
 *     RoleArn: "STRING_VALUE", // required
 *     DeadLetterConfig: { // DeadLetterConfig
 *       Arn: "STRING_VALUE",
 *     },
 *     RetryPolicy: { // RetryPolicy
 *       MaximumEventAgeInSeconds: Number("int"),
 *       MaximumRetryAttempts: Number("int"),
 *     },
 *     Input: "STRING_VALUE",
 *     EcsParameters: { // EcsParameters
 *       TaskDefinitionArn: "STRING_VALUE", // required
 *       TaskCount: Number("int"),
 *       LaunchType: "STRING_VALUE",
 *       NetworkConfiguration: { // NetworkConfiguration
 *         awsvpcConfiguration: { // AwsVpcConfiguration
 *           Subnets: [ // Subnets // required
 *             "STRING_VALUE",
 *           ],
 *           SecurityGroups: [ // SecurityGroups
 *             "STRING_VALUE",
 *           ],
 *           AssignPublicIp: "STRING_VALUE",
 *         },
 *       },
 *       PlatformVersion: "STRING_VALUE",
 *       Group: "STRING_VALUE",
 *       CapacityProviderStrategy: [ // CapacityProviderStrategy
 *         { // CapacityProviderStrategyItem
 *           capacityProvider: "STRING_VALUE", // required
 *           weight: Number("int"),
 *           base: Number("int"),
 *         },
 *       ],
 *       EnableECSManagedTags: true || false,
 *       EnableExecuteCommand: true || false,
 *       PlacementConstraints: [ // PlacementConstraints
 *         { // PlacementConstraint
 *           type: "STRING_VALUE",
 *           expression: "STRING_VALUE",
 *         },
 *       ],
 *       PlacementStrategy: [ // PlacementStrategies
 *         { // PlacementStrategy
 *           type: "STRING_VALUE",
 *           field: "STRING_VALUE",
 *         },
 *       ],
 *       PropagateTags: "STRING_VALUE",
 *       ReferenceId: "STRING_VALUE",
 *       Tags: [ // Tags
 *         { // TagMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *       ],
 *     },
 *     EventBridgeParameters: { // EventBridgeParameters
 *       DetailType: "STRING_VALUE", // required
 *       Source: "STRING_VALUE", // required
 *     },
 *     KinesisParameters: { // KinesisParameters
 *       PartitionKey: "STRING_VALUE", // required
 *     },
 *     SageMakerPipelineParameters: { // SageMakerPipelineParameters
 *       PipelineParameterList: [ // SageMakerPipelineParameterList
 *         { // SageMakerPipelineParameter
 *           Name: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     SqsParameters: { // SqsParameters
 *       MessageGroupId: "STRING_VALUE",
 *     },
 *   },
 *   FlexibleTimeWindow: { // FlexibleTimeWindow
 *     Mode: "STRING_VALUE", // required
 *     MaximumWindowInMinutes: Number("int"),
 *   },
 *   ClientToken: "STRING_VALUE",
 *   ActionAfterCompletion: "STRING_VALUE",
 * };
 * const command = new UpdateScheduleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateScheduleOutput
 * //   ScheduleArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateScheduleCommandInput - {@link UpdateScheduleCommandInput}
 * @returns {@link UpdateScheduleCommandOutput}
 * @see {@link UpdateScheduleCommandInput} for command's `input` shape.
 * @see {@link UpdateScheduleCommandOutput} for command's `response` shape.
 * @see {@link SchedulerClientResolvedConfig | config} for SchedulerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting the resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error encountered while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link SchedulerServiceException}
 * <p>Base exception class for all service exceptions from Scheduler service.</p>
 *
 *
 * @public
 */
export class UpdateScheduleCommand extends $Command
  .classBuilder<
    UpdateScheduleCommandInput,
    UpdateScheduleCommandOutput,
    SchedulerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SchedulerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSChronosService", "UpdateSchedule", {})
  .n("SchedulerClient", "UpdateScheduleCommand")
  .f(void 0, void 0)
  .ser(se_UpdateScheduleCommand)
  .de(de_UpdateScheduleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateScheduleInput;
      output: UpdateScheduleOutput;
    };
    sdk: {
      input: UpdateScheduleCommandInput;
      output: UpdateScheduleCommandOutput;
    };
  };
}
