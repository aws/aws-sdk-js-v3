import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeTransitGatewayPeeringAttachmentsRequest,
  DescribeTransitGatewayPeeringAttachmentsResult,
} from "../models/models_3";
import {
  deserializeAws_ec2DescribeTransitGatewayPeeringAttachmentsCommand,
  serializeAws_ec2DescribeTransitGatewayPeeringAttachmentsCommand,
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

export type DescribeTransitGatewayPeeringAttachmentsCommandInput = DescribeTransitGatewayPeeringAttachmentsRequest;
export type DescribeTransitGatewayPeeringAttachmentsCommandOutput = DescribeTransitGatewayPeeringAttachmentsResult &
  __MetadataBearer;

/**
 * <p>Describes your transit gateway peering attachments.</p>
 */
export class DescribeTransitGatewayPeeringAttachmentsCommand extends $Command<
  DescribeTransitGatewayPeeringAttachmentsCommandInput,
  DescribeTransitGatewayPeeringAttachmentsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTransitGatewayPeeringAttachmentsCommandInput) {
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
  ): Handler<
    DescribeTransitGatewayPeeringAttachmentsCommandInput,
    DescribeTransitGatewayPeeringAttachmentsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeTransitGatewayPeeringAttachmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTransitGatewayPeeringAttachmentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTransitGatewayPeeringAttachmentsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeTransitGatewayPeeringAttachmentsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeTransitGatewayPeeringAttachmentsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTransitGatewayPeeringAttachmentsCommandOutput> {
    return deserializeAws_ec2DescribeTransitGatewayPeeringAttachmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
