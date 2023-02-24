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
  CreateDefaultVpcRequest,
  CreateDefaultVpcRequestFilterSensitiveLog,
  CreateDefaultVpcResult,
  CreateDefaultVpcResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_ec2CreateDefaultVpcCommand,
  serializeAws_ec2CreateDefaultVpcCommand,
} from "../protocols/Aws_ec2";

export interface CreateDefaultVpcCommandInput extends CreateDefaultVpcRequest {}
export interface CreateDefaultVpcCommandOutput extends CreateDefaultVpcResult, __MetadataBearer {}

/**
 * <p>Creates a default VPC with a size <code>/16</code> IPv4 CIDR block and a default subnet
 * 			in each Availability Zone. For more information about the components of a default VPC,
 * 			see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html">Default VPC and
 * 			default subnets</a> in the <i>Amazon Virtual Private Cloud User Guide</i>. You cannot
 * 			specify the components of the default VPC yourself.</p>
 *          <p>If you deleted your previous default VPC, you can create a default VPC. You cannot have
 * 			more than one default VPC per Region.</p>
 *          <p>If your account supports EC2-Classic, you cannot use this action to create a default VPC
 * 			in a Region that supports EC2-Classic. If you want a default VPC in a Region that
 * 			supports EC2-Classic, see "I really want a default VPC for my existing EC2 account. Is
 * 			that possible?" in the <a href="http://aws.amazon.com/vpc/faqs/#Default_VPCs">Default VPCs
 * 			FAQ</a>.</p>
 *          <note>
 *             <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateDefaultVpcCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateDefaultVpcCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateDefaultVpcCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDefaultVpcCommandInput} for command's `input` shape.
 * @see {@link CreateDefaultVpcCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateDefaultVpcCommand extends $Command<
  CreateDefaultVpcCommandInput,
  CreateDefaultVpcCommandOutput,
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

  constructor(readonly input: CreateDefaultVpcCommandInput) {
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
  ): Handler<CreateDefaultVpcCommandInput, CreateDefaultVpcCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDefaultVpcCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateDefaultVpcCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDefaultVpcRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDefaultVpcResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDefaultVpcCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateDefaultVpcCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDefaultVpcCommandOutput> {
    return deserializeAws_ec2CreateDefaultVpcCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
