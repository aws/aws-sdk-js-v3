import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVpcEndpointConnectionsRequest, DescribeVpcEndpointConnectionsResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeVpcEndpointConnectionsCommand,
  serializeAws_ec2DescribeVpcEndpointConnectionsCommand,
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

export type DescribeVpcEndpointConnectionsCommandInput = DescribeVpcEndpointConnectionsRequest;
export type DescribeVpcEndpointConnectionsCommandOutput = DescribeVpcEndpointConnectionsResult & __MetadataBearer;

/**
 * <p>Describes the VPC endpoint connections to your VPC endpoint services, including any
 *             endpoints that are pending your acceptance.</p>
 */
export class DescribeVpcEndpointConnectionsCommand extends $Command<
  DescribeVpcEndpointConnectionsCommandInput,
  DescribeVpcEndpointConnectionsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeVpcEndpointConnectionsCommandInput) {
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
  ): Handler<DescribeVpcEndpointConnectionsCommandInput, DescribeVpcEndpointConnectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVpcEndpointConnectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeVpcEndpointConnectionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeVpcEndpointConnectionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeVpcEndpointConnectionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeVpcEndpointConnectionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVpcEndpointConnectionsCommandOutput> {
    return deserializeAws_ec2DescribeVpcEndpointConnectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
