// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { PutTargetsRequest, PutTargetsResponse } from "../models/models_0";
import { de_PutTargetsCommand, se_PutTargetsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Adds the specified targets to the specified rule, or updates the targets if they are
 *       already associated with the rule.</p>
 *          <p>Targets are the resources that are invoked when a rule is triggered.</p>
 *          <p>You can configure the following as targets for Events:</p>
 *
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-destinations.html">API
 *           destination</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Amazon API Gateway REST API endpoints</p>
 *             </li>
 *             <li>
 *                <p>API Gateway</p>
 *             </li>
 *             <li>
 *                <p>Batch job queue</p>
 *             </li>
 *             <li>
 *                <p>CloudWatch Logs group</p>
 *             </li>
 *             <li>
 *                <p>CodeBuild project</p>
 *             </li>
 *             <li>
 *                <p>CodePipeline</p>
 *             </li>
 *             <li>
 *                <p>Amazon EC2 <code>CreateSnapshot</code> API call</p>
 *             </li>
 *             <li>
 *                <p>Amazon EC2 <code>RebootInstances</code> API call</p>
 *             </li>
 *             <li>
 *                <p>Amazon EC2 <code>StopInstances</code> API call</p>
 *             </li>
 *             <li>
 *                <p>Amazon EC2 <code>TerminateInstances</code> API call</p>
 *             </li>
 *             <li>
 *                <p>Amazon ECS tasks</p>
 *             </li>
 *             <li>
 *                <p>Event bus in a different Amazon Web Services account or Region.</p>
 *                <p>You can use an event bus in the US East (N. Virginia) us-east-1, US West (Oregon)
 *           us-west-2, or Europe (Ireland) eu-west-1 Regions as a target for a rule.</p>
 *             </li>
 *             <li>
 *                <p>Firehose delivery stream (Kinesis Data Firehose)</p>
 *             </li>
 *             <li>
 *                <p>Inspector assessment template (Amazon Inspector)</p>
 *             </li>
 *             <li>
 *                <p>Kinesis stream (Kinesis Data Stream)</p>
 *             </li>
 *             <li>
 *                <p>Lambda function</p>
 *             </li>
 *             <li>
 *                <p>Redshift clusters (Data API statement execution)</p>
 *             </li>
 *             <li>
 *                <p>Amazon SNS topic</p>
 *             </li>
 *             <li>
 *                <p>Amazon SQS queues (includes FIFO queues</p>
 *             </li>
 *             <li>
 *                <p>SSM Automation</p>
 *             </li>
 *             <li>
 *                <p>SSM OpsItem</p>
 *             </li>
 *             <li>
 *                <p>SSM Run Command</p>
 *             </li>
 *             <li>
 *                <p>Step Functions state machines</p>
 *             </li>
 *          </ul>
 *
 *          <p>Creating rules with built-in targets is supported only in the Management Console. The
 *       built-in targets are <code>EC2 CreateSnapshot API call</code>, <code>EC2 RebootInstances API
 *         call</code>, <code>EC2 StopInstances API call</code>, and <code>EC2 TerminateInstances API
 *         call</code>. </p>
 *
 *          <p>For some target types, <code>PutTargets</code> provides target-specific parameters. If the
 *       target is a Kinesis data stream, you can optionally specify which shard the event goes to by
 *       using the <code>KinesisParameters</code> argument. To invoke a command on multiple EC2
 *       instances with one rule, you can use the <code>RunCommandParameters</code> field.</p>
 *
 *          <p>To be able to make API calls against the resources that you own, Amazon EventBridge
 *       needs the appropriate permissions. For Lambda and Amazon SNS
 *       resources, EventBridge relies on resource-based policies. For EC2 instances, Kinesis Data Streams,
 *       Step Functions state machines and API Gateway REST APIs, EventBridge relies on
 *       IAM roles that you specify in the <code>RoleARN</code> argument in <code>PutTargets</code>.
 *       For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/auth-and-access-control-eventbridge.html">Authentication
 *         and Access Control</a> in the <i>Amazon EventBridge User Guide</i>.</p>
 *
 *          <p>If another Amazon Web Services account is in the same region and has granted you permission (using
 *         <code>PutPermission</code>), you can send events to that account. Set that account's event
 *       bus as a target of the rules in your account. To send the matched events to the other account,
 *       specify that account's event bus as the <code>Arn</code> value when you run
 *         <code>PutTargets</code>. If your account sends events to another account, your account is
 *       charged for each sent event. Each event sent to another account is charged as a custom event.
 *       The account receiving the event is not charged. For more information, see <a href="http://aws.amazon.com/eventbridge/pricing/">Amazon EventBridge
 *         Pricing</a>.</p>
 *
 *          <note>
 *             <p>
 *                <code>Input</code>, <code>InputPath</code>, and <code>InputTransformer</code> are not
 *         available with <code>PutTarget</code> if the target is an event bus of a different Amazon Web Services
 *         account.</p>
 *          </note>
 *
 *          <p>If you are setting the event bus of another account as the target, and that account
 *       granted permission to your account through an organization instead of directly by the account
 *       ID, then you must specify a <code>RoleArn</code> with proper permissions in the
 *         <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and
 *           Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User
 *         Guide</i>.</p>
 *
 *          <p>For more information about enabling cross-account events, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html">PutPermission</a>.</p>
 *
 *          <p>
 *             <b>Input</b>, <b>InputPath</b>, and
 *         <b>InputTransformer</b> are mutually exclusive and optional
 *       parameters of a target. When a rule is triggered due to a matched event:</p>
 *
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
 *
 *          <p>When you specify <code>InputPath</code> or <code>InputTransformer</code>, you must use
 *       JSON dot notation, not bracket notation.</p>
 *
 *          <p>When you add targets to a rule and the associated rule triggers soon after, new or updated
 *       targets might not be immediately invoked. Allow a short period of time for changes to take
 *       effect.</p>
 *
 *          <p>This action can partially fail if too many requests are made at the same time. If that
 *       happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in
 *         <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, PutTargetsCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, PutTargetsCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
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
 *         LaunchType: "STRING_VALUE",
 *         NetworkConfiguration: { // NetworkConfiguration
 *           awsvpcConfiguration: { // AwsVpcConfiguration
 *             Subnets: [ // StringList // required
 *               "STRING_VALUE",
 *             ],
 *             SecurityGroups: [
 *               "STRING_VALUE",
 *             ],
 *             AssignPublicIp: "STRING_VALUE",
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
 *             type: "STRING_VALUE",
 *             expression: "STRING_VALUE",
 *           },
 *         ],
 *         PlacementStrategy: [ // PlacementStrategies
 *           { // PlacementStrategy
 *             type: "STRING_VALUE",
 *             field: "STRING_VALUE",
 *           },
 *         ],
 *         PropagateTags: "STRING_VALUE",
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
 *         Sql: "STRING_VALUE", // required
 *         StatementName: "STRING_VALUE",
 *         WithEvent: true || false,
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
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
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
 *  <p>This rule was created by an Amazon Web Services service on behalf of your account. It is managed by that
 *       service. If you see this error in response to <code>DeleteRule</code> or
 *         <code>RemoveTargets</code>, you can use the <code>Force</code> parameter in those calls to
 *       delete the rule or remove targets from the rule. You cannot modify these managed rules by
 *       using <code>DisableRule</code>, <code>EnableRule</code>, <code>PutTargets</code>,
 *         <code>PutRule</code>, <code>TagResource</code>, or <code>UntagResource</code>. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 */
export class PutTargetsCommand extends $Command<
  PutTargetsCommandInput,
  PutTargetsCommandOutput,
  CloudWatchEventsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: PutTargetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutTargetsCommandInput, PutTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutTargetsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchEventsClient";
    const commandName = "PutTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: PutTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutTargetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutTargetsCommandOutput> {
    return de_PutTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
