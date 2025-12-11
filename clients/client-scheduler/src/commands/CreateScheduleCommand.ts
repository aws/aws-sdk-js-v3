// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateScheduleInput, CreateScheduleOutput } from "../models/models_0";
import type { SchedulerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchedulerClient";
import { CreateSchedule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateScheduleCommand}.
 */
export interface CreateScheduleCommandInput extends CreateScheduleInput {}
/**
 * @public
 *
 * The output of {@link CreateScheduleCommand}.
 */
export interface CreateScheduleCommandOutput extends CreateScheduleOutput, __MetadataBearer {}

/**
 * <p>Creates the specified schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchedulerClient, CreateScheduleCommand } from "@aws-sdk/client-scheduler"; // ES Modules import
 * // const { SchedulerClient, CreateScheduleCommand } = require("@aws-sdk/client-scheduler"); // CommonJS import
 * // import type { SchedulerClientConfig } from "@aws-sdk/client-scheduler";
 * const config = {}; // type is SchedulerClientConfig
 * const client = new SchedulerClient(config);
 * const input = { // CreateScheduleInput
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
 * const command = new CreateScheduleCommand(input);
 * const response = await client.send(command);
 * // { // CreateScheduleOutput
 * //   ScheduleArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateScheduleCommandInput - {@link CreateScheduleCommandInput}
 * @returns {@link CreateScheduleCommandOutput}
 * @see {@link CreateScheduleCommandInput} for command's `input` shape.
 * @see {@link CreateScheduleCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
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
export class CreateScheduleCommand extends $Command
  .classBuilder<
    CreateScheduleCommandInput,
    CreateScheduleCommandOutput,
    SchedulerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SchedulerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSChronosService", "CreateSchedule", {})
  .n("SchedulerClient", "CreateScheduleCommand")
  .sc(CreateSchedule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateScheduleInput;
      output: CreateScheduleOutput;
    };
    sdk: {
      input: CreateScheduleCommandInput;
      output: CreateScheduleCommandOutput;
    };
  };
}
