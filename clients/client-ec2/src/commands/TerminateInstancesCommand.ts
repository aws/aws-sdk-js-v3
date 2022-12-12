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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  TerminateInstancesRequest,
  TerminateInstancesRequestFilterSensitiveLog,
  TerminateInstancesResult,
  TerminateInstancesResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2TerminateInstancesCommand,
  serializeAws_ec2TerminateInstancesCommand,
} from "../protocols/Aws_ec2";

export interface TerminateInstancesCommandInput extends TerminateInstancesRequest {}
export interface TerminateInstancesCommandOutput extends TerminateInstancesResult, __MetadataBearer {}

/**
 * <p>Shuts down the specified instances. This operation is idempotent; if you terminate an
 *             instance more than once, each call succeeds. </p>
 *          <p>If you specify multiple instances and the request fails (for example, because of a
 *             single incorrect instance ID), none of the instances are terminated.</p>
 *          <p>If you terminate multiple instances across multiple Availability Zones, and one or
 *             more of the specified instances are enabled for termination protection, the request
 *             fails with the following results:</p>
 *          <ul>
 *             <li>
 *                <p>The specified instances that are in the same Availability Zone as the
 *                     protected instance are not terminated.</p>
 *             </li>
 *             <li>
 *                <p>The specified instances that are in different Availability Zones, where no
 *                     other specified instances are protected, are successfully terminated.</p>
 *             </li>
 *          </ul>
 *          <p>For example, say you have the following instances:</p>
 *          <ul>
 *             <li>
 *                <p>Instance A: <code>us-east-1a</code>; Not protected</p>
 *             </li>
 *             <li>
 *                <p>Instance B: <code>us-east-1a</code>; Not protected</p>
 *             </li>
 *             <li>
 *                <p>Instance C: <code>us-east-1b</code>; Protected</p>
 *             </li>
 *             <li>
 *                <p>Instance D: <code>us-east-1b</code>; not protected</p>
 *             </li>
 *          </ul>
 *          <p>If you attempt to terminate all of these instances in the same request, the request
 *             reports failure with the following results:</p>
 *          <ul>
 *             <li>
 *                <p>Instance A and Instance B are successfully terminated because none of the
 *                     specified instances in <code>us-east-1a</code> are enabled for termination
 *                     protection.</p>
 *             </li>
 *             <li>
 *                <p>Instance C and Instance D fail to terminate because at least one of the
 *                     specified instances in <code>us-east-1b</code> (Instance C) is enabled for
 *                     termination protection.</p>
 *             </li>
 *          </ul>
 *          <p>Terminated instances remain visible after termination (for approximately one
 *             hour).</p>
 *          <p>By default, Amazon EC2 deletes all EBS volumes that were attached when the instance
 *             launched. Volumes attached after instance launch continue running.</p>
 *          <p>You can stop, start, and terminate EBS-backed instances. You can only terminate
 *             instance store-backed instances. What happens to an instance differs if you stop it or
 *             terminate it. For example, when you stop an instance, the root device and any other
 *             devices attached to the instance persist. When you terminate an instance, any attached
 *             EBS volumes with the <code>DeleteOnTermination</code> block device mapping parameter set
 *             to <code>true</code> are automatically deleted. For more information about the
 *             differences between stopping and terminating instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html">Instance lifecycle</a>
 *             in the <i>Amazon EC2 User Guide</i>.</p>
 *          <p>For more information about troubleshooting, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesShuttingDown.html">Troubleshooting terminating your instance</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, TerminateInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, TerminateInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new TerminateInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TerminateInstancesCommandInput} for command's `input` shape.
 * @see {@link TerminateInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class TerminateInstancesCommand extends $Command<
  TerminateInstancesCommandInput,
  TerminateInstancesCommandOutput,
  EC2ClientResolvedConfig
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

  constructor(readonly input: TerminateInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TerminateInstancesCommandInput, TerminateInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TerminateInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "TerminateInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TerminateInstancesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: TerminateInstancesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TerminateInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2TerminateInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TerminateInstancesCommandOutput> {
    return deserializeAws_ec2TerminateInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
