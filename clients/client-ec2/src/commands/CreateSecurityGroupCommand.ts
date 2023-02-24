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
  CreateSecurityGroupRequest,
  CreateSecurityGroupRequestFilterSensitiveLog,
  CreateSecurityGroupResult,
  CreateSecurityGroupResultFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_ec2CreateSecurityGroupCommand,
  serializeAws_ec2CreateSecurityGroupCommand,
} from "../protocols/Aws_ec2";

export interface CreateSecurityGroupCommandInput extends CreateSecurityGroupRequest {}
export interface CreateSecurityGroupCommandOutput extends CreateSecurityGroupResult, __MetadataBearer {}

/**
 * <p>Creates a security group.</p>
 *          <p>A security group acts as a virtual firewall for your instance to control inbound and outbound traffic.
 *          For more information, see
 * 				<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html">Amazon EC2 security groups</a> in
 * 				the <i>Amazon Elastic Compute Cloud User Guide</i> and
 * 				<a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html">Security groups for your VPC</a> in the
 * 				<i>Amazon Virtual Private Cloud User Guide</i>.</p>
 *          <p>When you create a security group, you specify a friendly name of your choice. You can have a security group for use in EC2-Classic with the same name as a security group for use in a VPC. However, you can't have two security groups for use in EC2-Classic with the same name or two security groups for use in a VPC with the same name.</p>
 *          <p>You have a default security group for use in EC2-Classic and a default security group for use in your VPC. If you don't specify a security group when you launch an instance, the instance is launched into the appropriate default security group. A default security group includes a default rule that grants instances unrestricted network access to each other.</p>
 *          <p>You can add or remove rules from your security groups using
 * 					<a>AuthorizeSecurityGroupIngress</a>,
 * 					<a>AuthorizeSecurityGroupEgress</a>,
 * 					<a>RevokeSecurityGroupIngress</a>, and
 * 					<a>RevokeSecurityGroupEgress</a>.</p>
 *          <p>For more information about VPC security group limits, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html">Amazon VPC Limits</a>.</p>
 *          <note>
 *             <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateSecurityGroupCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateSecurityGroupCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateSecurityGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link CreateSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateSecurityGroupCommand extends $Command<
  CreateSecurityGroupCommandInput,
  CreateSecurityGroupCommandOutput,
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

  constructor(readonly input: CreateSecurityGroupCommandInput) {
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
  ): Handler<CreateSecurityGroupCommandInput, CreateSecurityGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSecurityGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateSecurityGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSecurityGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateSecurityGroupResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSecurityGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateSecurityGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSecurityGroupCommandOutput> {
    return deserializeAws_ec2CreateSecurityGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
