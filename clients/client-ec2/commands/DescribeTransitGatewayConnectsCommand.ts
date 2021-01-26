import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeTransitGatewayConnectsRequest, DescribeTransitGatewayConnectsResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeTransitGatewayConnectsCommand,
  serializeAws_ec2DescribeTransitGatewayConnectsCommand,
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

export type DescribeTransitGatewayConnectsCommandInput = DescribeTransitGatewayConnectsRequest;
export type DescribeTransitGatewayConnectsCommandOutput = DescribeTransitGatewayConnectsResult & __MetadataBearer;

/**
 * <p>Describes one or more Connect attachments.</p>
 */
export class DescribeTransitGatewayConnectsCommand extends $Command<
  DescribeTransitGatewayConnectsCommandInput,
  DescribeTransitGatewayConnectsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTransitGatewayConnectsCommandInput) {
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
  ): Handler<DescribeTransitGatewayConnectsCommandInput, DescribeTransitGatewayConnectsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeTransitGatewayConnectsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTransitGatewayConnectsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTransitGatewayConnectsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeTransitGatewayConnectsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeTransitGatewayConnectsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTransitGatewayConnectsCommandOutput> {
    return deserializeAws_ec2DescribeTransitGatewayConnectsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
