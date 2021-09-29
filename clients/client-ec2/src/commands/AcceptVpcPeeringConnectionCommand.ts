import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AcceptVpcPeeringConnectionRequest, AcceptVpcPeeringConnectionResult } from "../models/models_0";
import {
  deserializeAws_ec2AcceptVpcPeeringConnectionCommand,
  serializeAws_ec2AcceptVpcPeeringConnectionCommand,
} from "../protocols/Aws_ec2";
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

export interface AcceptVpcPeeringConnectionCommandInput extends AcceptVpcPeeringConnectionRequest {}
export interface AcceptVpcPeeringConnectionCommandOutput extends AcceptVpcPeeringConnectionResult, __MetadataBearer {}

/**
 * <p>Accept a VPC peering connection request. To accept a request, the VPC peering connection must
 *       be in the <code>pending-acceptance</code> state, and you must be the owner of the peer VPC.
 *       Use <a>DescribeVpcPeeringConnections</a> to view your outstanding VPC
 *       peering connection requests.</p>
 *   	      <p>For an inter-Region VPC peering connection request, you must accept the VPC peering
 *       connection in the Region of the accepter VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AcceptVpcPeeringConnectionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AcceptVpcPeeringConnectionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AcceptVpcPeeringConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptVpcPeeringConnectionCommandInput} for command's `input` shape.
 * @see {@link AcceptVpcPeeringConnectionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AcceptVpcPeeringConnectionCommand extends $Command<
  AcceptVpcPeeringConnectionCommandInput,
  AcceptVpcPeeringConnectionCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AcceptVpcPeeringConnectionCommandInput) {
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
  ): Handler<AcceptVpcPeeringConnectionCommandInput, AcceptVpcPeeringConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AcceptVpcPeeringConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptVpcPeeringConnectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AcceptVpcPeeringConnectionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AcceptVpcPeeringConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AcceptVpcPeeringConnectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AcceptVpcPeeringConnectionCommandOutput> {
    return deserializeAws_ec2AcceptVpcPeeringConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
