// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { PutMetricAlarmInput, PutMetricAlarmInputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_queryPutMetricAlarmCommand,
  serializeAws_queryPutMetricAlarmCommand,
} from "../protocols/Aws_query";

export interface PutMetricAlarmCommandInput extends PutMetricAlarmInput {}
export interface PutMetricAlarmCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates or updates an alarm and associates it with the specified metric, metric math expression,
 * 			anomaly detection model, or Metrics Insights query. For more information about using
 * 			a Metrics Insights query for an alarm, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Metrics_Insights_Alarm.html">Create alarms on Metrics Insights queries</a>.</p>
 *          <p>Alarms based on anomaly detection models cannot have Auto Scaling actions.</p>
 *          <p>When this operation creates an alarm, the alarm state is immediately set to
 * 			<code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set
 * 			appropriately. Any actions associated with the new state are then executed.</p>
 *          <p>When you update an existing alarm, its state is left unchanged, but the
 * 			update completely overwrites the previous configuration of the alarm.</p>
 *          <p>If you are an IAM user, you must have
 * 			Amazon EC2 permissions for some alarm operations:</p>
 *          <ul>
 *             <li>
 *                <p>The <code>iam:CreateServiceLinkedRole</code> for all alarms with EC2 actions</p>
 *             </li>
 *             <li>
 *                <p>The <code>iam:CreateServiceLinkedRole</code> to create an alarm
 * 					with Systems Manager OpsItem actions.</p>
 *             </li>
 *          </ul>
 *          <p>The first time you create an alarm in the
 * 			Amazon Web Services Management Console, the CLI, or by using the PutMetricAlarm API, CloudWatch
 * 			creates the necessary service-linked role for you. The service-linked roles
 * 			are called <code>AWSServiceRoleForCloudWatchEvents</code> and
 * 			<code>AWSServiceRoleForCloudWatchAlarms_ActionSSM</code>.
 * 			For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">Amazon Web Services service-linked role</a>.</p>
 *          <p>
 *             <b>Cross-account alarms</b>
 *          </p>
 *          <p>You can set an alarm on metrics in the current account, or in another
 * 			account. To create a cross-account alarm that watches a metric in a different account, you must have completed the following
 * 			pre-requisites:</p>
 *          <ul>
 *             <li>
 *                <p>The account where the metrics are located (the <i>sharing account</i>) must
 * 				already have a sharing role named <b>CloudWatch-CrossAccountSharingRole</b>. If it does not already
 * 				have this role, you must create it using the instructions in <b>Set up a
 * 					sharing account</b> in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html#enable-cross-account-cross-Region">
 * 					Cross-account cross-Region CloudWatch console</a>. The policy for that
 * 				role must grant access
 * 				to the ID of the account where you are creating the alarm.
 * 			</p>
 *             </li>
 *             <li>
 *                <p>The account where you are creating the alarm (the <i>monitoring account</i>) must
 * 				already have a service-linked role named
 * 				<b>AWSServiceRoleForCloudWatchCrossAccount</b> to allow
 * 				CloudWatch to assume the sharing role in the sharing account. If it does not, you must create it following the directions in <b>Set up a
 * 					monitoring account</b> in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html#enable-cross-account-cross-Region">
 * 						Cross-account cross-Region CloudWatch console</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, PutMetricAlarmCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, PutMetricAlarmCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new PutMetricAlarmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutMetricAlarmCommandInput} for command's `input` shape.
 * @see {@link PutMetricAlarmCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 */
export class PutMetricAlarmCommand extends $Command<
  PutMetricAlarmCommandInput,
  PutMetricAlarmCommandOutput,
  CloudWatchClientResolvedConfig
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

  constructor(readonly input: PutMetricAlarmCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutMetricAlarmCommandInput, PutMetricAlarmCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutMetricAlarmCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "PutMetricAlarmCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutMetricAlarmInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutMetricAlarmCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPutMetricAlarmCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutMetricAlarmCommandOutput> {
    return deserializeAws_queryPutMetricAlarmCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
