// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { PutTargetsRequest, PutTargetsRequestFilterSensitiveLog, PutTargetsResponse } from "../models/models_0";
import { de_PutTargetsCommand, se_PutTargetsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutTargetsCommand}.
 */
export interface PutTargetsCommandInput extends PutTargetsRequest {}
/**
 * @public
 *
 * The output of {@link PutTargetsCommand}.
 */
export interface PutTargetsCommandOutput extends PutTargetsResponse, __MetadataBearer {}

/**
 * <p>Adds the specified targets to the specified rule, or updates the targets if they are
 *       already associated with the rule.</p>
 *          <p>Targets are the resources that are invoked when a rule is triggered.</p>
 *          <p>The maximum number of entries per request is 10.</p>
 *          <note>
 *             <p>Each rule can have up to five (5) targets associated with it at one time.</p>
 *          </note>
 *          <p>For a list of services you can configure as targets for events, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-targets.html">EventBridge targets</a>
 *       in the <i>
 *                <i>Amazon EventBridge User Guide</i>
 *             </i>.</p>
 *          <p>Creating rules with built-in targets is supported only in the Amazon Web Services Management Console. The
 *       built-in targets are:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Amazon EBS CreateSnapshot API call</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Amazon EC2 RebootInstances API call</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Amazon EC2 StopInstances API call</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Amazon EC2 TerminateInstances API call</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>For some target types, <code>PutTargets</code> provides target-specific parameters. If the
 *       target is a Kinesis data stream, you can optionally specify which shard the event
 *       goes to by using the <code>KinesisParameters</code> argument. To invoke a command on multiple
 *       EC2 instances with one rule, you can use the <code>RunCommandParameters</code> field.</p>
 *          <p>To be able to make API calls against the resources that you own, Amazon EventBridge
 *       needs the appropriate permissions: </p>
 *          <ul>
 *             <li>
 *                <p>For Lambda and Amazon SNS resources, EventBridge relies
 *           on resource-based policies.</p>
 *             </li>
 *             <li>
 *                <p>For EC2 instances, Kinesis Data Streams, Step Functions state machines and
 *             API Gateway APIs, EventBridge relies on IAM roles that you specify in the
 *             <code>RoleARN</code> argument in <code>PutTargets</code>.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/auth-and-access-control-eventbridge.html">Authentication
 *         and Access Control</a> in the <i>
 *                <i>Amazon EventBridge User Guide</i>
 *             </i>.</p>
 *          <p>If another Amazon Web Services account is in the same region and has granted you permission
 *       (using <code>PutPermission</code>), you can send events to that account. Set that account's
 *       event bus as a target of the rules in your account. To send the matched events to the other
 *       account, specify that account's event bus as the <code>Arn</code> value when you run
 *         <code>PutTargets</code>. If your account sends events to another account, your account is
 *       charged for each sent event. Each event sent to another account is charged as a custom event.
 *       The account receiving the event is not charged. For more information, see <a href="http://aws.amazon.com/eventbridge/pricing/">Amazon EventBridge Pricing</a>.</p>
 *          <note>
 *             <p>
 *                <code>Input</code>, <code>InputPath</code>, and <code>InputTransformer</code> are not
 *         available with <code>PutTarget</code> if the target is an event bus of a different Amazon Web Services account.</p>
 *          </note>
 *          <p>If you are setting the event bus of another account as the target, and that account
 *       granted permission to your account through an organization instead of directly by the account
 *       ID, then you must specify a <code>RoleArn</code> with proper permissions in the
 *         <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and
 *         Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p>
 *          <note>
 *             <p>If you have an IAM role on a cross-account event bus target, a <code>PutTargets</code>
 *         call without a role on the same target (same <code>Id</code> and <code>Arn</code>) will not
 *         remove the role.</p>
 *          </note>
 *          <p>For more information about enabling cross-account events, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html">PutPermission</a>.</p>
 *          <p>
 *             <b>Input</b>, <b>InputPath</b>, and
 *         <b>InputTransformer</b> are mutually exclusive and optional
 *       parameters of a target. When a rule is triggered due to a matched event:</p>
 *          <ul>
 *             <li>
 *                <p>If none of the following arguments are specified for a target, then the entire event
 *           is passed to the target in JSON format (unless the target is Amazon EC2 Run Command or
 *           Amazon ECS task, in which case nothing from the event is passed to the target).</p>
 *             </li>
 *             <li>
 *                <p>If <b>Input</b> is specified in the form of valid JSON, then
 *           the matched event is overridden with this constant.</p>
 *             </li>
 *             <li>
 *                <p>If <b>InputPath</b> is specified in the form of JSONPath
 *           (for example, <code>$.detail</code>), then only the part of the event specified in the
 *           path is passed to the target (for example, only the detail part of the event is
 *           passed).</p>
 *             </li>
 *             <li>
 *                <p>If <b>InputTransformer</b> is specified, then one or more
 *           specified JSONPaths are extracted from the event and used as values in a template that you
 *           specify as the input to the target.</p>
 *             </li>
 *          </ul>
 *          <p>When you specify <code>InputPath</code> or <code>InputTransformer</code>, you must use
 *       JSON dot notation, not bracket notation.</p>
 *          <p>When you add targets to a rule and the associated rule triggers soon after, new or updated
 *       targets might not be immediately invoked. Allow a short period of time for changes to take
 *       effect.</p>
 *          <p>This action can partially fail if too many requests are made at the same time. If that
 *       happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in
 *         <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, PutTargetsCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, PutTargetsCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // PutTargetsRequest
 *   Rule: "STRING_VALUE", // required
 *   EventBusName: "STRING_VALUE",
 *   Targets: [ // TargetList // required
 *     { // Target
 *       Id: "STRING_VALUE", // required
 *       Arn: "STRING_VALUE", // required
 *       RoleArn: "STRING_VALUE",
 *       Input: "STRING_VALUE",
 *       InputPath: "STRING_VALUE",
 *       InputTransformer: { // InputTransformer
 *         InputPathsMap: { // TransformerPaths
 *           "<keys>": "STRING_VALUE",
 *         },
 *         InputTemplate: "STRING_VALUE", // required
 *       },
 *       KinesisParameters: { // KinesisParameters
 *         PartitionKeyPath: "STRING_VALUE", // required
 *       },
 *       RunCommandParameters: { // RunCommandParameters
 *         RunCommandTargets: [ // RunCommandTargets // required
 *           { // RunCommandTarget
 *             Key: "STRING_VALUE", // required
 *             Values: [ // RunCommandTargetValues // required
 *               "STRING_VALUE",
 *             ],
 *           },
 *         ],
 *       },
 *       EcsParameters: { // EcsParameters
 *         TaskDefinitionArn: "STRING_VALUE", // required
 *         TaskCount: Number("int"),
 *         LaunchType: "EC2" || "FARGATE" || "EXTERNAL",
 *         NetworkConfiguration: { // NetworkConfiguration
 *           awsvpcConfiguration: { // AwsVpcConfiguration
 *             Subnets: [ // StringList // required
 *               "STRING_VALUE",
 *             ],
 *             SecurityGroups: [
 *               "STRING_VALUE",
 *             ],
 *             AssignPublicIp: "ENABLED" || "DISABLED",
 *           },
 *         },
 *         PlatformVersion: "STRING_VALUE",
 *         Group: "STRING_VALUE",
 *         CapacityProviderStrategy: [ // CapacityProviderStrategy
 *           { // CapacityProviderStrategyItem
 *             capacityProvider: "STRING_VALUE", // required
 *             weight: Number("int"),
 *             base: Number("int"),
 *           },
 *         ],
 *         EnableECSManagedTags: true || false,
 *         EnableExecuteCommand: true || false,
 *         PlacementConstraints: [ // PlacementConstraints
 *           { // PlacementConstraint
 *             type: "distinctInstance" || "memberOf",
 *             expression: "STRING_VALUE",
 *           },
 *         ],
 *         PlacementStrategy: [ // PlacementStrategies
 *           { // PlacementStrategy
 *             type: "random" || "spread" || "binpack",
 *             field: "STRING_VALUE",
 *           },
 *         ],
 *         PropagateTags: "TASK_DEFINITION",
 *         ReferenceId: "STRING_VALUE",
 *         Tags: [ // TagList
 *           { // Tag
 *             Key: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *       BatchParameters: { // BatchParameters
 *         JobDefinition: "STRING_VALUE", // required
 *         JobName: "STRING_VALUE", // required
 *         ArrayProperties: { // BatchArrayProperties
 *           Size: Number("int"),
 *         },
 *         RetryStrategy: { // BatchRetryStrategy
 *           Attempts: Number("int"),
 *         },
 *       },
 *       SqsParameters: { // SqsParameters
 *         MessageGroupId: "STRING_VALUE",
 *       },
 *       HttpParameters: { // HttpParameters
 *         PathParameterValues: [ // PathParameterList
 *           "STRING_VALUE",
 *         ],
 *         HeaderParameters: { // HeaderParametersMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *         QueryStringParameters: { // QueryStringParametersMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *       RedshiftDataParameters: { // RedshiftDataParameters
 *         SecretManagerArn: "STRING_VALUE",
 *         Database: "STRING_VALUE", // required
 *         DbUser: "STRING_VALUE",
 *         Sql: "STRING_VALUE",
 *         StatementName: "STRING_VALUE",
 *         WithEvent: true || false,
 *         Sqls: [ // Sqls
 *           "STRING_VALUE",
 *         ],
 *       },
 *       SageMakerPipelineParameters: { // SageMakerPipelineParameters
 *         PipelineParameterList: [ // SageMakerPipelineParameterList
 *           { // SageMakerPipelineParameter
 *             Name: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *       DeadLetterConfig: { // DeadLetterConfig
 *         Arn: "STRING_VALUE",
 *       },
 *       RetryPolicy: { // RetryPolicy
 *         MaximumRetryAttempts: Number("int"),
 *         MaximumEventAgeInSeconds: Number("int"),
 *       },
 *       AppSyncParameters: { // AppSyncParameters
 *         GraphQLOperation: "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new PutTargetsCommand(input);
 * const response = await client.send(command);
 * // { // PutTargetsResponse
 * //   FailedEntryCount: Number("int"),
 * //   FailedEntries: [ // PutTargetsResultEntryList
 * //     { // PutTargetsResultEntry
 * //       TargetId: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutTargetsCommandInput - {@link PutTargetsCommandInput}
 * @returns {@link PutTargetsCommandOutput}
 * @see {@link PutTargetsCommandInput} for command's `input` shape.
 * @see {@link PutTargetsCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request failed because it attempted to create resource beyond the allowed service
 *       quota.</p>
 *
 * @throws {@link ManagedRuleException} (client fault)
 *  <p>This rule was created by an Amazon Web Services service on behalf of your account. It is
 *       managed by that service. If you see this error in response to <code>DeleteRule</code> or
 *         <code>RemoveTargets</code>, you can use the <code>Force</code> parameter in those calls to
 *       delete the rule or remove targets from the rule. You cannot modify these managed rules by
 *       using <code>DisableRule</code>, <code>EnableRule</code>, <code>PutTargets</code>,
 *         <code>PutRule</code>, <code>TagResource</code>, or <code>UntagResource</code>. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 * @public
 */
export class PutTargetsCommand extends $Command
  .classBuilder<
    PutTargetsCommandInput,
    PutTargetsCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EventBridgeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSEvents", "PutTargets", {})
  .n("EventBridgeClient", "PutTargetsCommand")
  .f(PutTargetsRequestFilterSensitiveLog, void 0)
  .ser(se_PutTargetsCommand)
  .de(de_PutTargetsCommand)
  .build() {}
