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
import { Reservation, ReservationFilterSensitiveLog } from "../models/models_3";
import { RunInstancesRequest, RunInstancesRequestFilterSensitiveLog } from "../models/models_6";
import { deserializeAws_ec2RunInstancesCommand, serializeAws_ec2RunInstancesCommand } from "../protocols/Aws_ec2";

export interface RunInstancesCommandInput extends RunInstancesRequest {}
export interface RunInstancesCommandOutput extends Reservation, __MetadataBearer {}

/**
 * <p>Launches the specified number of instances using an AMI for which you have
 *             permissions.</p>
 *          <p>You can specify a number of options, or leave the default options. The following rules
 *             apply:</p>
 *          <ul>
 *             <li>
 *                <p>[EC2-VPC] If you don't specify a subnet ID, we choose a default subnet from
 *                     your default VPC for you. If you don't have a default VPC, you must specify a
 *                     subnet ID in the request.</p>
 *             </li>
 *             <li>
 *                <p>[EC2-Classic] If don't specify an Availability Zone, we choose one for
 *                     you.</p>
 *             </li>
 *             <li>
 *                <p>Some instance types must be launched into a VPC. If you do not have a default
 *                     VPC, or if you do not specify a subnet ID, the request fails. For more
 *                     information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-vpc.html#vpc-only-instance-types">Instance types available only in a VPC</a>.</p>
 *             </li>
 *             <li>
 *                <p>[EC2-VPC] All instances have a network interface with a primary private IPv4
 *                     address. If you don't specify this address, we choose one from the IPv4 range of
 *                     your subnet.</p>
 *             </li>
 *             <li>
 *                <p>Not all instance types support IPv6 addresses. For more information, see
 *                         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance
 *                     types</a>.</p>
 *             </li>
 *             <li>
 *                <p>If you don't specify a security group ID, we use the default security group.
 *                     For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html">Security
 *                         groups</a>.</p>
 *             </li>
 *             <li>
 *                <p>If any of the AMIs have a product code attached for which the user has not
 *                     subscribed, the request fails.</p>
 *             </li>
 *          </ul>
 *          <p>You can create a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">launch template</a>,
 *             which is a resource that contains the parameters to launch an instance. When you launch
 *             an instance using <a>RunInstances</a>, you can specify the launch template
 *             instead of specifying the launch parameters.</p>
 *          <p>To ensure faster instance launches, break up large requests into smaller batches. For
 *             example, create five separate launch requests for 100 instances each instead of one
 *             launch request for 500 instances.</p>
 *          <p>An instance is ready for you to use when it's in the <code>running</code> state. You
 *             can check the state of your instance using <a>DescribeInstances</a>. You can
 *             tag instances and EBS volumes during launch, after launch, or both. For more
 *             information, see <a>CreateTags</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging your Amazon EC2
 *                 resources</a>.</p>
 *          <p>Linux instances have access to the public key of the key pair at boot. You can use
 *             this key to provide secure access to the instance. Amazon EC2 public images use this
 *             feature to provide secure access without passwords. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Key
 *                 pairs</a>.</p>
 *          <p>For troubleshooting, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_InstanceStraightToTerminated.html">What to do if
 *                 an instance immediately terminates</a>, and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesConnecting.html">Troubleshooting connecting to your instance</a>.</p>
 *          <note>
 *             <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a
 *                 VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a
 *                     VPC</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RunInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RunInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RunInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RunInstancesCommandInput} for command's `input` shape.
 * @see {@link RunInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class RunInstancesCommand extends $Command<
  RunInstancesCommandInput,
  RunInstancesCommandOutput,
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

  constructor(readonly input: RunInstancesCommandInput) {
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
  ): Handler<RunInstancesCommandInput, RunInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, RunInstancesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RunInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RunInstancesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ReservationFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RunInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2RunInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RunInstancesCommandOutput> {
    return deserializeAws_ec2RunInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
