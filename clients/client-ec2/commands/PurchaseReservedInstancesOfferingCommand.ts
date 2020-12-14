import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { PurchaseReservedInstancesOfferingRequest, PurchaseReservedInstancesOfferingResult } from "../models/models_4";
import {
  deserializeAws_ec2PurchaseReservedInstancesOfferingCommand,
  serializeAws_ec2PurchaseReservedInstancesOfferingCommand,
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

export type PurchaseReservedInstancesOfferingCommandInput = PurchaseReservedInstancesOfferingRequest;
export type PurchaseReservedInstancesOfferingCommandOutput = PurchaseReservedInstancesOfferingResult & __MetadataBearer;

/**
 * <p>Purchases a Reserved Instance for use with your account. With Reserved Instances, you pay a lower
 *        hourly rate compared to On-Demand instance pricing.</p>
 * 		       <p>Use <a>DescribeReservedInstancesOfferings</a> to get a list of Reserved Instance offerings
 * 			that match your specifications. After you've purchased a Reserved Instance, you can check for your
 * 			new Reserved Instance with <a>DescribeReservedInstances</a>.</p>
 *          <p>To queue a purchase for a future date and time, specify a purchase time. If you do not specify a
 *       purchase time, the default is the current time.</p>
 *    	     <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts-on-demand-reserved-instances.html">Reserved Instances</a> and
 *    	   <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a>
 *    	   in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class PurchaseReservedInstancesOfferingCommand extends $Command<
  PurchaseReservedInstancesOfferingCommandInput,
  PurchaseReservedInstancesOfferingCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PurchaseReservedInstancesOfferingCommandInput) {
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
  ): Handler<PurchaseReservedInstancesOfferingCommandInput, PurchaseReservedInstancesOfferingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "PurchaseReservedInstancesOfferingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PurchaseReservedInstancesOfferingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PurchaseReservedInstancesOfferingResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PurchaseReservedInstancesOfferingCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2PurchaseReservedInstancesOfferingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PurchaseReservedInstancesOfferingCommandOutput> {
    return deserializeAws_ec2PurchaseReservedInstancesOfferingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
