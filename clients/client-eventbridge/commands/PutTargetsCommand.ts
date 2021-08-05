import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { PutTargetsRequest, PutTargetsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutTargetsCommand,
  serializeAws_json1_1PutTargetsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface PutTargetsCommandInput extends PutTargetsRequest {}
export interface PutTargetsCommandOutput extends PutTargetsResponse, __MetadataBearer {}

/**
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
 *                <p>EC2 Image Builder</p>
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
 *          <p>Creating rules with built-in targets is supported only in the Amazon Web Services Management Console. The
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
 * import { EventBridgeClient, PutTargetsCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, PutTargetsCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new PutTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutTargetsCommandInput} for command's `input` shape.
 * @see {@link PutTargetsCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutTargetsCommand extends $Command<
  PutTargetsCommandInput,
  PutTargetsCommandOutput,
  EventBridgeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutTargetsCommandInput, PutTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EventBridgeClient";
    const commandName = "PutTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutTargetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutTargetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutTargetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutTargetsCommandOutput> {
    return deserializeAws_json1_1PutTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
