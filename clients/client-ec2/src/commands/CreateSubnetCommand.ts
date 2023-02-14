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
  CreateSubnetRequest,
  CreateSubnetRequestFilterSensitiveLog,
  CreateSubnetResult,
  CreateSubnetResultFilterSensitiveLog,
} from "../models/models_2";
import { deserializeAws_ec2CreateSubnetCommand, serializeAws_ec2CreateSubnetCommand } from "../protocols/Aws_ec2";

export interface CreateSubnetCommandInput extends CreateSubnetRequest {}
export interface CreateSubnetCommandOutput extends CreateSubnetResult, __MetadataBearer {}

/**
 * <p>Creates a subnet in the specified VPC. For an IPv4 only subnet, specify an IPv4 CIDR block.
 *             If the VPC has an IPv6 CIDR block, you can create an IPv6 only subnet or a dual stack subnet instead.
 *             For an IPv6 only subnet, specify an IPv6 CIDR block. For a dual stack subnet, specify both
 *             an IPv4 CIDR block and an IPv6 CIDR block.</p>
 *          <p>A subnet CIDR block must not overlap the CIDR block of an existing subnet in the VPC.
 *             After you create a subnet, you can't change its CIDR block.</p>
 *          <p>The allowed size for an IPv4 subnet is between a /28 netmask (16 IP addresses) and
 *             a /16 netmask (65,536 IP addresses). Amazon Web Services reserves both the first four and
 *             the last IPv4 address in each subnet's CIDR block. They're not available for your use.</p>
 *          <p>If you've associated an IPv6 CIDR block with your VPC, you can associate an IPv6 CIDR block
 *             with a subnet when you create it. The allowed block size for an IPv6 subnet is a /64 netmask.</p>
 *          <p>If you add more than one subnet to a VPC, they're set up in a star topology with a
 *             logical router in the middle.</p>
 *          <p>When you stop an instance in a subnet, it retains its private IPv4 address. It's
 *             therefore possible to have a subnet with no running instances (they're all stopped), but
 *             no remaining IP addresses available.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html">Subnets</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateSubnetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateSubnetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateSubnetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSubnetCommandInput} for command's `input` shape.
 * @see {@link CreateSubnetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateSubnetCommand extends $Command<
  CreateSubnetCommandInput,
  CreateSubnetCommandOutput,
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

  constructor(readonly input: CreateSubnetCommandInput) {
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
  ): Handler<CreateSubnetCommandInput, CreateSubnetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateSubnetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateSubnetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSubnetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateSubnetResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSubnetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateSubnetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSubnetCommandOutput> {
    return deserializeAws_ec2CreateSubnetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
