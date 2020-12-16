import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeSpotDatafeedSubscriptionRequest, DescribeSpotDatafeedSubscriptionResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeSpotDatafeedSubscriptionCommand,
  serializeAws_ec2DescribeSpotDatafeedSubscriptionCommand,
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

export type DescribeSpotDatafeedSubscriptionCommandInput = DescribeSpotDatafeedSubscriptionRequest;
export type DescribeSpotDatafeedSubscriptionCommandOutput = DescribeSpotDatafeedSubscriptionResult & __MetadataBearer;

/**
 * <p>Describes the data feed for Spot Instances. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-data-feeds.html">Spot
 *                 Instance data feed</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
 */
export class DescribeSpotDatafeedSubscriptionCommand extends $Command<
  DescribeSpotDatafeedSubscriptionCommandInput,
  DescribeSpotDatafeedSubscriptionCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSpotDatafeedSubscriptionCommandInput) {
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
  ): Handler<DescribeSpotDatafeedSubscriptionCommandInput, DescribeSpotDatafeedSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeSpotDatafeedSubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSpotDatafeedSubscriptionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSpotDatafeedSubscriptionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeSpotDatafeedSubscriptionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeSpotDatafeedSubscriptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSpotDatafeedSubscriptionCommandOutput> {
    return deserializeAws_ec2DescribeSpotDatafeedSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
