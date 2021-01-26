import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AcceptVpcEndpointConnectionsRequest, AcceptVpcEndpointConnectionsResult } from "../models/models_0";
import {
  deserializeAws_ec2AcceptVpcEndpointConnectionsCommand,
  serializeAws_ec2AcceptVpcEndpointConnectionsCommand,
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

export type AcceptVpcEndpointConnectionsCommandInput = AcceptVpcEndpointConnectionsRequest;
export type AcceptVpcEndpointConnectionsCommandOutput = AcceptVpcEndpointConnectionsResult & __MetadataBearer;

/**
 * <p>Accepts one or more interface VPC endpoint connection requests to your VPC endpoint
 *             service.</p>
 */
export class AcceptVpcEndpointConnectionsCommand extends $Command<
  AcceptVpcEndpointConnectionsCommandInput,
  AcceptVpcEndpointConnectionsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AcceptVpcEndpointConnectionsCommandInput) {
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
  ): Handler<AcceptVpcEndpointConnectionsCommandInput, AcceptVpcEndpointConnectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AcceptVpcEndpointConnectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptVpcEndpointConnectionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AcceptVpcEndpointConnectionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AcceptVpcEndpointConnectionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AcceptVpcEndpointConnectionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AcceptVpcEndpointConnectionsCommandOutput> {
    return deserializeAws_ec2AcceptVpcEndpointConnectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
