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
  CreateVpcPeeringConnectionRequest,
  CreateVpcPeeringConnectionRequestFilterSensitiveLog,
  CreateVpcPeeringConnectionResult,
  CreateVpcPeeringConnectionResultFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_ec2CreateVpcPeeringConnectionCommand,
  serializeAws_ec2CreateVpcPeeringConnectionCommand,
} from "../protocols/Aws_ec2";

export interface CreateVpcPeeringConnectionCommandInput extends CreateVpcPeeringConnectionRequest {}
export interface CreateVpcPeeringConnectionCommandOutput extends CreateVpcPeeringConnectionResult, __MetadataBearer {}

/**
 * <p>Requests a VPC peering connection between two VPCs: a requester VPC that you own and
 * 		  an accepter VPC with which to create the connection. The accepter VPC can belong to
 * 		  another Amazon Web Services account and can be in a different Region to the requester VPC.
 *           The requester VPC and accepter VPC cannot have overlapping CIDR blocks.</p>
 *          <note>
 *             <p>Limitations and rules apply to a VPC peering connection. For more information, see
 *           the <a href="https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-basics.html#vpc-peering-limitations">limitations</a> section in the <i>VPC Peering Guide</i>.</p>
 *          </note>
 *          <p>The owner of the accepter VPC must accept the peering request to activate the peering
 *             connection. The VPC peering connection request expires after 7 days, after which it
 *             cannot be accepted or rejected.</p>
 *          <p>If you create a VPC peering connection request between VPCs with overlapping CIDR
 *             blocks, the VPC peering connection has a status of <code>failed</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpcPeeringConnectionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpcPeeringConnectionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateVpcPeeringConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVpcPeeringConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateVpcPeeringConnectionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateVpcPeeringConnectionCommand extends $Command<
  CreateVpcPeeringConnectionCommandInput,
  CreateVpcPeeringConnectionCommandOutput,
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

  constructor(readonly input: CreateVpcPeeringConnectionCommandInput) {
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
  ): Handler<CreateVpcPeeringConnectionCommandInput, CreateVpcPeeringConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateVpcPeeringConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateVpcPeeringConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVpcPeeringConnectionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateVpcPeeringConnectionResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVpcPeeringConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateVpcPeeringConnectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateVpcPeeringConnectionCommandOutput> {
    return deserializeAws_ec2CreateVpcPeeringConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
