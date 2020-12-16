import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeReservedInstancesOfferingsRequest,
  DescribeReservedInstancesOfferingsResult,
} from "../models/models_3";
import {
  deserializeAws_ec2DescribeReservedInstancesOfferingsCommand,
  serializeAws_ec2DescribeReservedInstancesOfferingsCommand,
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

export type DescribeReservedInstancesOfferingsCommandInput = DescribeReservedInstancesOfferingsRequest;
export type DescribeReservedInstancesOfferingsCommandOutput = DescribeReservedInstancesOfferingsResult &
  __MetadataBearer;

/**
 * <p>Describes Reserved Instance offerings that are available for purchase. With Reserved Instances, you purchase the right to launch instances for a period of time. During that time period, you do not receive insufficient capacity errors, and you pay a lower usage rate than the rate charged for On-Demand instances for the actual time used.</p>
 *          <p>If you have listed your own Reserved Instances for sale in the Reserved Instance Marketplace, they will be excluded from these results. This is to ensure that you do not purchase your own Reserved Instances.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a>
 * 				in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class DescribeReservedInstancesOfferingsCommand extends $Command<
  DescribeReservedInstancesOfferingsCommandInput,
  DescribeReservedInstancesOfferingsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeReservedInstancesOfferingsCommandInput) {
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
  ): Handler<DescribeReservedInstancesOfferingsCommandInput, DescribeReservedInstancesOfferingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeReservedInstancesOfferingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReservedInstancesOfferingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeReservedInstancesOfferingsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeReservedInstancesOfferingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeReservedInstancesOfferingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReservedInstancesOfferingsCommandOutput> {
    return deserializeAws_ec2DescribeReservedInstancesOfferingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
