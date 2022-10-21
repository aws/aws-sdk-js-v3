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
  RejectVpcPeeringConnectionRequest,
  RejectVpcPeeringConnectionRequestFilterSensitiveLog,
  RejectVpcPeeringConnectionResult,
  RejectVpcPeeringConnectionResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2RejectVpcPeeringConnectionCommand,
  serializeAws_ec2RejectVpcPeeringConnectionCommand,
} from "../protocols/Aws_ec2";

export interface RejectVpcPeeringConnectionCommandInput extends RejectVpcPeeringConnectionRequest {}
export interface RejectVpcPeeringConnectionCommandOutput extends RejectVpcPeeringConnectionResult, __MetadataBearer {}

/**
 * <p>Rejects a VPC peering connection request. The VPC peering connection must be in the
 * 				<code>pending-acceptance</code> state. Use the <a>DescribeVpcPeeringConnections</a> request
 * 			to view your outstanding VPC peering connection requests. To delete an active VPC peering
 * 			connection, or to delete a VPC peering connection request that you initiated, use	<a>DeleteVpcPeeringConnection</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RejectVpcPeeringConnectionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RejectVpcPeeringConnectionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RejectVpcPeeringConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectVpcPeeringConnectionCommandInput} for command's `input` shape.
 * @see {@link RejectVpcPeeringConnectionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class RejectVpcPeeringConnectionCommand extends $Command<
  RejectVpcPeeringConnectionCommandInput,
  RejectVpcPeeringConnectionCommandOutput,
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

  constructor(readonly input: RejectVpcPeeringConnectionCommandInput) {
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
  ): Handler<RejectVpcPeeringConnectionCommandInput, RejectVpcPeeringConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RejectVpcPeeringConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RejectVpcPeeringConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RejectVpcPeeringConnectionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RejectVpcPeeringConnectionResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RejectVpcPeeringConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2RejectVpcPeeringConnectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RejectVpcPeeringConnectionCommandOutput> {
    return deserializeAws_ec2RejectVpcPeeringConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
