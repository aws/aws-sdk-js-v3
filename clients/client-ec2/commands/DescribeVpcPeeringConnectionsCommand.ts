import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVpcPeeringConnectionsRequest, DescribeVpcPeeringConnectionsResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeVpcPeeringConnectionsCommand,
  serializeAws_ec2DescribeVpcPeeringConnectionsCommand,
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

export type DescribeVpcPeeringConnectionsCommandInput = DescribeVpcPeeringConnectionsRequest;
export type DescribeVpcPeeringConnectionsCommandOutput = DescribeVpcPeeringConnectionsResult & __MetadataBearer;

/**
 * <p>Describes one or more of your VPC peering connections.</p>
 */
export class DescribeVpcPeeringConnectionsCommand extends $Command<
  DescribeVpcPeeringConnectionsCommandInput,
  DescribeVpcPeeringConnectionsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeVpcPeeringConnectionsCommandInput) {
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
  ): Handler<DescribeVpcPeeringConnectionsCommandInput, DescribeVpcPeeringConnectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVpcPeeringConnectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeVpcPeeringConnectionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeVpcPeeringConnectionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeVpcPeeringConnectionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeVpcPeeringConnectionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVpcPeeringConnectionsCommandOutput> {
    return deserializeAws_ec2DescribeVpcPeeringConnectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
