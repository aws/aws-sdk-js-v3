// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTargetsByRuleRequest, ListTargetsByRuleResponse } from "../models/models_0";
import { de_ListTargetsByRuleCommand, se_ListTargetsByRuleCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTargetsByRuleCommand}.
 */
export interface ListTargetsByRuleCommandInput extends ListTargetsByRuleRequest {}
/**
 * @public
 *
 * The output of {@link ListTargetsByRuleCommand}.
 */
export interface ListTargetsByRuleCommandOutput extends ListTargetsByRuleResponse, __MetadataBearer {}

/**
 * <p>Lists the targets assigned to the specified rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, ListTargetsByRuleCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, ListTargetsByRuleCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
 * const config = {}; // type is CloudWatchEventsClientConfig
 * const client = new CloudWatchEventsClient(config);
 * const input = { // ListTargetsByRuleRequest
 *   Rule: "STRING_VALUE", // required
 *   EventBusName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListTargetsByRuleCommand(input);
 * const response = await client.send(command);
 * // { // ListTargetsByRuleResponse
 * //   Targets: [ // TargetList
 * //     { // Target
 * //       Id: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       RoleArn: "STRING_VALUE",
 * //       Input: "STRING_VALUE",
 * //       InputPath: "STRING_VALUE",
 * //       InputTransformer: { // InputTransformer
 * //         InputPathsMap: { // TransformerPaths
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         InputTemplate: "STRING_VALUE", // required
 * //       },
 * //       KinesisParameters: { // KinesisParameters
 * //         PartitionKeyPath: "STRING_VALUE", // required
 * //       },
 * //       RunCommandParameters: { // RunCommandParameters
 * //         RunCommandTargets: [ // RunCommandTargets // required
 * //           { // RunCommandTarget
 * //             Key: "STRING_VALUE", // required
 * //             Values: [ // RunCommandTargetValues // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       EcsParameters: { // EcsParameters
 * //         TaskDefinitionArn: "STRING_VALUE", // required
 * //         TaskCount: Number("int"),
 * //         LaunchType: "EC2" || "FARGATE" || "EXTERNAL",
 * //         NetworkConfiguration: { // NetworkConfiguration
 * //           awsvpcConfiguration: { // AwsVpcConfiguration
 * //             Subnets: [ // StringList // required
 * //               "STRING_VALUE",
 * //             ],
 * //             SecurityGroups: [
 * //               "STRING_VALUE",
 * //             ],
 * //             AssignPublicIp: "ENABLED" || "DISABLED",
 * //           },
 * //         },
 * //         PlatformVersion: "STRING_VALUE",
 * //         Group: "STRING_VALUE",
 * //         CapacityProviderStrategy: [ // CapacityProviderStrategy
 * //           { // CapacityProviderStrategyItem
 * //             capacityProvider: "STRING_VALUE", // required
 * //             weight: Number("int"),
 * //             base: Number("int"),
 * //           },
 * //         ],
 * //         EnableECSManagedTags: true || false,
 * //         EnableExecuteCommand: true || false,
 * //         PlacementConstraints: [ // PlacementConstraints
 * //           { // PlacementConstraint
 * //             type: "distinctInstance" || "memberOf",
 * //             expression: "STRING_VALUE",
 * //           },
 * //         ],
 * //         PlacementStrategy: [ // PlacementStrategies
 * //           { // PlacementStrategy
 * //             type: "random" || "spread" || "binpack",
 * //             field: "STRING_VALUE",
 * //           },
 * //         ],
 * //         PropagateTags: "TASK_DEFINITION",
 * //         ReferenceId: "STRING_VALUE",
 * //         Tags: [ // TagList
 * //           { // Tag
 * //             Key: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       BatchParameters: { // BatchParameters
 * //         JobDefinition: "STRING_VALUE", // required
 * //         JobName: "STRING_VALUE", // required
 * //         ArrayProperties: { // BatchArrayProperties
 * //           Size: Number("int"),
 * //         },
 * //         RetryStrategy: { // BatchRetryStrategy
 * //           Attempts: Number("int"),
 * //         },
 * //       },
 * //       SqsParameters: { // SqsParameters
 * //         MessageGroupId: "STRING_VALUE",
 * //       },
 * //       HttpParameters: { // HttpParameters
 * //         PathParameterValues: [ // PathParameterList
 * //           "STRING_VALUE",
 * //         ],
 * //         HeaderParameters: { // HeaderParametersMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         QueryStringParameters: { // QueryStringParametersMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       RedshiftDataParameters: { // RedshiftDataParameters
 * //         SecretManagerArn: "STRING_VALUE",
 * //         Database: "STRING_VALUE", // required
 * //         DbUser: "STRING_VALUE",
 * //         Sql: "STRING_VALUE", // required
 * //         StatementName: "STRING_VALUE",
 * //         WithEvent: true || false,
 * //       },
 * //       SageMakerPipelineParameters: { // SageMakerPipelineParameters
 * //         PipelineParameterList: [ // SageMakerPipelineParameterList
 * //           { // SageMakerPipelineParameter
 * //             Name: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       DeadLetterConfig: { // DeadLetterConfig
 * //         Arn: "STRING_VALUE",
 * //       },
 * //       RetryPolicy: { // RetryPolicy
 * //         MaximumRetryAttempts: Number("int"),
 * //         MaximumEventAgeInSeconds: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTargetsByRuleCommandInput - {@link ListTargetsByRuleCommandInput}
 * @returns {@link ListTargetsByRuleCommandOutput}
 * @see {@link ListTargetsByRuleCommandInput} for command's `input` shape.
 * @see {@link ListTargetsByRuleCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 *
 * @public
 */
export class ListTargetsByRuleCommand extends $Command
  .classBuilder<
    ListTargetsByRuleCommandInput,
    ListTargetsByRuleCommandOutput,
    CloudWatchEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchEventsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSEvents", "ListTargetsByRule", {})
  .n("CloudWatchEventsClient", "ListTargetsByRuleCommand")
  .f(void 0, void 0)
  .ser(se_ListTargetsByRuleCommand)
  .de(de_ListTargetsByRuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTargetsByRuleRequest;
      output: ListTargetsByRuleResponse;
    };
    sdk: {
      input: ListTargetsByRuleCommandInput;
      output: ListTargetsByRuleCommandOutput;
    };
  };
}
