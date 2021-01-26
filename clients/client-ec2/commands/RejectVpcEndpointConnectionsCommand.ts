import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RejectVpcEndpointConnectionsRequest, RejectVpcEndpointConnectionsResult } from "../models/models_4";
import {
  deserializeAws_ec2RejectVpcEndpointConnectionsCommand,
  serializeAws_ec2RejectVpcEndpointConnectionsCommand,
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

export type RejectVpcEndpointConnectionsCommandInput = RejectVpcEndpointConnectionsRequest;
export type RejectVpcEndpointConnectionsCommandOutput = RejectVpcEndpointConnectionsResult & __MetadataBearer;

/**
 * <p>Rejects one or more VPC endpoint connection requests to your VPC endpoint
 *             service.</p>
 */
export class RejectVpcEndpointConnectionsCommand extends $Command<
  RejectVpcEndpointConnectionsCommandInput,
  RejectVpcEndpointConnectionsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RejectVpcEndpointConnectionsCommandInput) {
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
  ): Handler<RejectVpcEndpointConnectionsCommandInput, RejectVpcEndpointConnectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RejectVpcEndpointConnectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RejectVpcEndpointConnectionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RejectVpcEndpointConnectionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RejectVpcEndpointConnectionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2RejectVpcEndpointConnectionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RejectVpcEndpointConnectionsCommandOutput> {
    return deserializeAws_ec2RejectVpcEndpointConnectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
