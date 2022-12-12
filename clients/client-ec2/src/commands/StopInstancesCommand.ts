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
  StopInstancesRequest,
  StopInstancesRequestFilterSensitiveLog,
  StopInstancesResult,
  StopInstancesResultFilterSensitiveLog,
} from "../models/models_6";
import { deserializeAws_ec2StopInstancesCommand, serializeAws_ec2StopInstancesCommand } from "../protocols/Aws_ec2";

export interface StopInstancesCommandInput extends StopInstancesRequest {}
export interface StopInstancesCommandOutput extends StopInstancesResult, __MetadataBearer {}

/**
 * <p>Stops an Amazon EBS-backed instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html">Stop and start
 *                 your instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *          <p>You can use the Stop action to hibernate an instance if the instance is <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#enabling-hibernation">enabled for
 *                 hibernation</a> and it meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites">hibernation
 *                 prerequisites</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 *          <p>We don't charge usage for a stopped instance, or data transfer fees; however, your
 *             root partition Amazon EBS volume remains and continues to persist your data, and you are
 *             charged for Amazon EBS volume usage. Every time you start your instance, Amazon EC2
 *             charges a one-minute minimum for instance usage, and thereafter charges per second for
 *             instance usage.</p>
 *          <p>You can't stop or hibernate instance store-backed instances. You can't use the Stop
 *             action to hibernate Spot Instances, but you can specify that Amazon EC2 should hibernate
 *             Spot Instances when they are interrupted. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-interruptions.html#hibernate-spot-instances">Hibernating interrupted Spot Instances</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 *          <p>When you stop or hibernate an instance, we shut it down. You can restart your instance
 *             at any time. Before stopping or hibernating an instance, make sure it is in a state from
 *             which it can be restarted. Stopping an instance does not preserve data stored in RAM,
 *             but hibernating an instance does preserve data stored in RAM. If an instance cannot
 *             hibernate successfully, a normal shutdown occurs.</p>
 *          <p>Stopping and hibernating an instance is different to rebooting or terminating it. For
 *             example, when you stop or hibernate an instance, the root device and any other devices
 *             attached to the instance persist. When you terminate an instance, the root device and
 *             any other devices attached during the instance launch are automatically deleted. For
 *             more information about the differences between rebooting, stopping, hibernating, and
 *             terminating instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html">Instance lifecycle</a>
 *             in the <i>Amazon EC2 User Guide</i>.</p>
 *          <p>When you stop an instance, we attempt to shut it down forcibly after a short while. If
 *             your instance appears stuck in the stopping state after a period of time, there may be
 *             an issue with the underlying host computer. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesStopping.html">Troubleshoot
 *                 stopping your instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, StopInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, StopInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new StopInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopInstancesCommandInput} for command's `input` shape.
 * @see {@link StopInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class StopInstancesCommand extends $Command<
  StopInstancesCommandInput,
  StopInstancesCommandOutput,
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

  constructor(readonly input: StopInstancesCommandInput) {
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
  ): Handler<StopInstancesCommandInput, StopInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StopInstancesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "StopInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopInstancesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StopInstancesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2StopInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopInstancesCommandOutput> {
    return deserializeAws_ec2StopInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
