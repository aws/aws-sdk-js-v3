// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetScheduleInput, GetScheduleOutput } from "../models/models_0";
import { de_GetScheduleCommand, se_GetScheduleCommand } from "../protocols/Aws_restJson1";
import { SchedulerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchedulerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetScheduleCommand}.
 */
export interface GetScheduleCommandInput extends GetScheduleInput {}
/**
 * @public
 *
 * The output of {@link GetScheduleCommand}.
 */
export interface GetScheduleCommandOutput extends GetScheduleOutput, __MetadataBearer {}

/**
 * <p>Retrieves the specified schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchedulerClient, GetScheduleCommand } from "@aws-sdk/client-scheduler"; // ES Modules import
 * // const { SchedulerClient, GetScheduleCommand } = require("@aws-sdk/client-scheduler"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SchedulerClient(config);
 * const input = { // GetScheduleInput
 *   Name: "STRING_VALUE", // required
 *   GroupName: "STRING_VALUE",
 * };
 * const command = new GetScheduleCommand(input);
 * const response = await client.send(command);
 * // { // GetScheduleOutput
 * //   Arn: "STRING_VALUE",
 * //   GroupName: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   ScheduleExpression: "STRING_VALUE",
 * //   StartDate: new Date("TIMESTAMP"),
 * //   EndDate: new Date("TIMESTAMP"),
 * //   Description: "STRING_VALUE",
 * //   ScheduleExpressionTimezone: "STRING_VALUE",
 * //   State: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   LastModificationDate: new Date("TIMESTAMP"),
 * //   KmsKeyArn: "STRING_VALUE",
 * //   Target: { // Target
 * //     Arn: "STRING_VALUE", // required
 * //     RoleArn: "STRING_VALUE", // required
 * //     DeadLetterConfig: { // DeadLetterConfig
 * //       Arn: "STRING_VALUE",
 * //     },
 * //     RetryPolicy: { // RetryPolicy
 * //       MaximumEventAgeInSeconds: Number("int"),
 * //       MaximumRetryAttempts: Number("int"),
 * //     },
 * //     Input: "STRING_VALUE",
 * //     EcsParameters: { // EcsParameters
 * //       TaskDefinitionArn: "STRING_VALUE", // required
 * //       TaskCount: Number("int"),
 * //       LaunchType: "STRING_VALUE",
 * //       NetworkConfiguration: { // NetworkConfiguration
 * //         awsvpcConfiguration: { // AwsVpcConfiguration
 * //           Subnets: [ // Subnets // required
 * //             "STRING_VALUE",
 * //           ],
 * //           SecurityGroups: [ // SecurityGroups
 * //             "STRING_VALUE",
 * //           ],
 * //           AssignPublicIp: "STRING_VALUE",
 * //         },
 * //       },
 * //       PlatformVersion: "STRING_VALUE",
 * //       Group: "STRING_VALUE",
 * //       CapacityProviderStrategy: [ // CapacityProviderStrategy
 * //         { // CapacityProviderStrategyItem
 * //           capacityProvider: "STRING_VALUE", // required
 * //           weight: Number("int"),
 * //           base: Number("int"),
 * //         },
 * //       ],
 * //       EnableECSManagedTags: true || false,
 * //       EnableExecuteCommand: true || false,
 * //       PlacementConstraints: [ // PlacementConstraints
 * //         { // PlacementConstraint
 * //           type: "STRING_VALUE",
 * //           expression: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PlacementStrategy: [ // PlacementStrategies
 * //         { // PlacementStrategy
 * //           type: "STRING_VALUE",
 * //           field: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PropagateTags: "STRING_VALUE",
 * //       ReferenceId: "STRING_VALUE",
 * //       Tags: [ // Tags
 * //         { // TagMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     EventBridgeParameters: { // EventBridgeParameters
 * //       DetailType: "STRING_VALUE", // required
 * //       Source: "STRING_VALUE", // required
 * //     },
 * //     KinesisParameters: { // KinesisParameters
 * //       PartitionKey: "STRING_VALUE", // required
 * //     },
 * //     SageMakerPipelineParameters: { // SageMakerPipelineParameters
 * //       PipelineParameterList: [ // SageMakerPipelineParameterList
 * //         { // SageMakerPipelineParameter
 * //           Name: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     SqsParameters: { // SqsParameters
 * //       MessageGroupId: "STRING_VALUE",
 * //     },
 * //   },
 * //   FlexibleTimeWindow: { // FlexibleTimeWindow
 * //     Mode: "STRING_VALUE", // required
 * //     MaximumWindowInMinutes: Number("int"),
 * //   },
 * //   ActionAfterCompletion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetScheduleCommandInput - {@link GetScheduleCommandInput}
 * @returns {@link GetScheduleCommandOutput}
 * @see {@link GetScheduleCommandInput} for command's `input` shape.
 * @see {@link GetScheduleCommandOutput} for command's `response` shape.
 * @see {@link SchedulerClientResolvedConfig | config} for SchedulerClient's `config` shape.
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
 * @public
 */
export class GetScheduleCommand extends $Command
  .classBuilder<
    GetScheduleCommandInput,
    GetScheduleCommandOutput,
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
  .s("AWSChronosService", "GetSchedule", {})
  .n("SchedulerClient", "GetScheduleCommand")
  .f(void 0, void 0)
  .ser(se_GetScheduleCommand)
  .de(de_GetScheduleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetScheduleInput;
      output: GetScheduleOutput;
    };
    sdk: {
      input: GetScheduleCommandInput;
      output: GetScheduleCommandOutput;
    };
  };
}
