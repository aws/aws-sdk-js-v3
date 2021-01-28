import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeTransitGatewayAttachmentsRequest, DescribeTransitGatewayAttachmentsResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeTransitGatewayAttachmentsCommand,
  serializeAws_ec2DescribeTransitGatewayAttachmentsCommand,
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

export type DescribeTransitGatewayAttachmentsCommandInput = DescribeTransitGatewayAttachmentsRequest;
export type DescribeTransitGatewayAttachmentsCommandOutput = DescribeTransitGatewayAttachmentsResult & __MetadataBearer;

/**
 * <p>Describes one or more attachments between resources and transit gateways. By default, all attachments are described.
 *          Alternatively, you can filter the results by attachment ID, attachment state, resource ID, or resource owner.</p>
 */
export class DescribeTransitGatewayAttachmentsCommand extends $Command<
  DescribeTransitGatewayAttachmentsCommandInput,
  DescribeTransitGatewayAttachmentsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTransitGatewayAttachmentsCommandInput) {
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
  ): Handler<DescribeTransitGatewayAttachmentsCommandInput, DescribeTransitGatewayAttachmentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeTransitGatewayAttachmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTransitGatewayAttachmentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTransitGatewayAttachmentsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeTransitGatewayAttachmentsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeTransitGatewayAttachmentsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTransitGatewayAttachmentsCommandOutput> {
    return deserializeAws_ec2DescribeTransitGatewayAttachmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
