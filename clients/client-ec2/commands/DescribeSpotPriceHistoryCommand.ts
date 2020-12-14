import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeSpotPriceHistoryRequest, DescribeSpotPriceHistoryResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeSpotPriceHistoryCommand,
  serializeAws_ec2DescribeSpotPriceHistoryCommand,
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

export type DescribeSpotPriceHistoryCommandInput = DescribeSpotPriceHistoryRequest;
export type DescribeSpotPriceHistoryCommandOutput = DescribeSpotPriceHistoryResult & __MetadataBearer;

/**
 * <p>Describes the Spot price history. For more information, see
 * 		<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances-history.html">Spot Instance pricing history</a>
 *         in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
 * 	        <p>When you specify a start and end time, this operation returns the prices of the instance types within the time range that you specified and the time when the price changed.
 * 	        The price is valid within the time period that you specified; the response merely indicates the last time that the price changed.</p>
 */
export class DescribeSpotPriceHistoryCommand extends $Command<
  DescribeSpotPriceHistoryCommandInput,
  DescribeSpotPriceHistoryCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSpotPriceHistoryCommandInput) {
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
  ): Handler<DescribeSpotPriceHistoryCommandInput, DescribeSpotPriceHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeSpotPriceHistoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSpotPriceHistoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSpotPriceHistoryResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSpotPriceHistoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeSpotPriceHistoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSpotPriceHistoryCommandOutput> {
    return deserializeAws_ec2DescribeSpotPriceHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
