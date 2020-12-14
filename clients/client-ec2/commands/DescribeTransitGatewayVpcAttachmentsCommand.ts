import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeTransitGatewayVpcAttachmentsRequest,
  DescribeTransitGatewayVpcAttachmentsResult,
} from "../models/models_3";
import {
  deserializeAws_ec2DescribeTransitGatewayVpcAttachmentsCommand,
  serializeAws_ec2DescribeTransitGatewayVpcAttachmentsCommand,
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

export type DescribeTransitGatewayVpcAttachmentsCommandInput = DescribeTransitGatewayVpcAttachmentsRequest;
export type DescribeTransitGatewayVpcAttachmentsCommandOutput = DescribeTransitGatewayVpcAttachmentsResult &
  __MetadataBearer;

/**
 * <p>Describes one or more VPC attachments. By default, all VPC attachments are described.
 *          Alternatively, you can filter the results.</p>
 */
export class DescribeTransitGatewayVpcAttachmentsCommand extends $Command<
  DescribeTransitGatewayVpcAttachmentsCommandInput,
  DescribeTransitGatewayVpcAttachmentsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTransitGatewayVpcAttachmentsCommandInput) {
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
  ): Handler<DescribeTransitGatewayVpcAttachmentsCommandInput, DescribeTransitGatewayVpcAttachmentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeTransitGatewayVpcAttachmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTransitGatewayVpcAttachmentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTransitGatewayVpcAttachmentsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeTransitGatewayVpcAttachmentsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeTransitGatewayVpcAttachmentsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTransitGatewayVpcAttachmentsCommandOutput> {
    return deserializeAws_ec2DescribeTransitGatewayVpcAttachmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
