import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ReplaceRouteRequest } from "../models/models_4";
import { deserializeAws_ec2ReplaceRouteCommand, serializeAws_ec2ReplaceRouteCommand } from "../protocols/Aws_ec2";
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

export type ReplaceRouteCommandInput = ReplaceRouteRequest;
export type ReplaceRouteCommandOutput = __MetadataBearer;

/**
 * <p>Replaces an existing route within a route table in a VPC. You must provide only one of
 *             the following: internet gateway, virtual private gateway, NAT instance, NAT gateway, VPC
 *             peering connection, network interface, egress-only internet gateway, or transit
 *             gateway.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route Tables</a> in the
 *                 <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 */
export class ReplaceRouteCommand extends $Command<
  ReplaceRouteCommandInput,
  ReplaceRouteCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ReplaceRouteCommandInput) {
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
  ): Handler<ReplaceRouteCommandInput, ReplaceRouteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ReplaceRouteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ReplaceRouteRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ReplaceRouteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ReplaceRouteCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReplaceRouteCommandOutput> {
    return deserializeAws_ec2ReplaceRouteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
