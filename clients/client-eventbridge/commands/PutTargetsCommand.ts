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

export type PutTargetsCommandInput = PutTargetsRequest;
export type PutTargetsCommandOutput = PutTargetsResponse & __MetadataBearer;

/**
 * <p>Adds the specified targets to the specified rule, or updates the targets if they
 *             are already associated with the rule.</p>
 *         <p>Targets are the resources that are invoked when a rule is triggered.</p>
 *         <p>You can configure the following as targets for Events:</p>
 *
 *         <ul>
 *             <li>
 *                 <p>EC2 instances</p>
 *             </li>
 *             <li>
 *                 <p>SSM Run Command</p>
 *             </li>
 *             <li>
 *                 <p>SSM Automation</p>
 *             </li>
 *             <li>
 *                 <p>AWS Lambda functions</p>
 *             </li>
 *             <li>
 *                 <p>Data streams in Amazon Kinesis Data Streams</p>
 *             </li>
 *             <li>
 *                 <p>Data delivery streams in Amazon Kinesis Data Firehose</p>
 *             </li>
 *             <li>
 *                 <p>Amazon ECS tasks</p>
 *             </li>
 *             <li>
 *                 <p>AWS Step Functions state machines</p>
 *             </li>
 *             <li>
 *                 <p>AWS Batch jobs</p>
 *             </li>
 *             <li>
 *                 <p>AWS CodeBuild projects</p>
 *             </li>
 *             <li>
 *                 <p>Pipelines in AWS CodePipeline</p>
 *             </li>
 *             <li>
 *                 <p>Amazon Inspector assessment templates</p>
 *             </li>
 *             <li>
 *                 <p>Amazon SNS topics</p>
 *             </li>
 *             <li>
 *                 <p>Amazon SQS queues, including FIFO queues</p>
 *             </li>
 *             <li>
 *                 <p>The default event bus of another AWS account</p>
 *             </li>
 *             <li>
 *                 <p>Amazon API Gateway REST APIs</p>
 *             </li>
 *             <li>
 *                 <p>Redshift Clusters to invoke Data API ExecuteStatement on</p>
 *             </li>
 *          </ul>
 *
 *
 *
 *         <p>Creating rules with built-in targets is supported only in the AWS Management
 *             Console. The built-in targets are <code>EC2 CreateSnapshot API call</code>, <code>EC2
 *                 RebootInstances API call</code>, <code>EC2 StopInstances API call</code>, and
 *                 <code>EC2 TerminateInstances API call</code>. </p>
 *
 *         <p>For some target types, <code>PutTargets</code> provides target-specific parameters.
 *             If the target is a Kinesis data stream, you can optionally specify which shard the event
 *             goes to by using the <code>KinesisParameters</code> argument. To invoke a command on
 *             multiple EC2 instances with one rule, you can use the <code>RunCommandParameters</code>
 *             field.</p>
 *
 *         <p>To be able to make API calls against the resources that you own, Amazon EventBridge
 *             (CloudWatch Events) needs the appropriate permissions. For AWS Lambda and Amazon SNS resources,
 *             EventBridge relies on resource-based policies. For EC2 instances, Kinesis data
 *             streams, AWS Step Functions state machines and API Gateway REST APIs, EventBridge relies on IAM roles
 *             that you specify in the <code>RoleARN</code> argument in <code>PutTargets</code>. For more information,
 *             see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/auth-and-access-control-eventbridge.html">Authentication and Access Control</a> in the <i>Amazon EventBridge User
 *                 Guide</i>.</p>
 *
 *         <p>If another AWS account is in the same region and has granted you permission (using
 *                 <code>PutPermission</code>), you can send events to that account. Set that account's
 *             event bus as a target of the rules in your account. To send the matched events to the
 *             other account, specify that account's event bus as the <code>Arn</code> value when you
 *             run <code>PutTargets</code>. If your account sends events to another account, your
 *             account is charged for each sent event. Each event sent to another account is charged as
 *             a custom event. The account receiving the event is not charged. For more information,
 *             see <a href="https://aws.amazon.com/eventbridge/pricing/">Amazon EventBridge (CloudWatch Events)
 *                 Pricing</a>.</p>
 *
 *         <note>
 *             <p>
 *                <code>Input</code>, <code>InputPath</code>, and <code>InputTransformer</code> are
 *                 not available with <code>PutTarget</code> if the target is an event bus of a
 *                 different AWS account.</p>
 *         </note>
 *
 *         <p>If you are setting the event bus of another account as the target, and that account
 *             granted permission to your account through an organization instead of directly by the
 *             account ID, then you must specify a <code>RoleArn</code> with proper permissions in the
 *                 <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between AWS Accounts</a> in the <i>Amazon
 *                 EventBridge User Guide</i>.</p>
 *
 *         <p>For more information about enabling cross-account events, see <a>PutPermission</a>.</p>
 *
 *         <p>
 *             <b>Input</b>, <b>InputPath</b>, and
 *                 <b>InputTransformer</b> are mutually exclusive and
 *             optional parameters of a target. When a rule is triggered due to a matched
 *             event:</p>
 *
 *         <ul>
 *             <li>
 *                 <p>If none of the following arguments are specified for a target, then the
 *                     entire event is passed to the target in JSON format (unless the target is Amazon
 *                     EC2 Run Command or Amazon ECS task, in which case nothing from the event is
 *                     passed to the target).</p>
 *             </li>
 *             <li>
 *                 <p>If <b>Input</b> is specified in the form of valid
 *                     JSON, then the matched event is overridden with this constant.</p>
 *             </li>
 *             <li>
 *                 <p>If <b>InputPath</b> is specified in the form of
 *                     JSONPath (for example, <code>$.detail</code>), then only the part of the event
 *                     specified in the path is passed to the target (for example, only the detail part
 *                     of the event is passed).</p>
 *             </li>
 *             <li>
 *                 <p>If <b>InputTransformer</b> is specified, then one
 *                     or more specified JSONPaths are extracted from the event and used as values in a
 *                     template that you specify as the input to the target.</p>
 *             </li>
 *          </ul>
 *
 *         <p>When you specify <code>InputPath</code> or <code>InputTransformer</code>, you must
 *             use JSON dot notation, not bracket notation.</p>
 *
 *         <p>When you add targets to a rule and the associated rule triggers soon after, new or
 *             updated targets might not be immediately invoked. Allow a short period of time for
 *             changes to take effect.</p>
 *
 *         <p>This action can partially fail if too many requests are made at the same time. If
 *             that happens, <code>FailedEntryCount</code> is non-zero in the response and each entry
 *             in <code>FailedEntries</code> provides the ID of the failed target and the error
 *             code.</p>
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
