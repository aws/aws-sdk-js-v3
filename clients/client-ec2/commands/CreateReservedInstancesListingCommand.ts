import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateReservedInstancesListingRequest, CreateReservedInstancesListingResult } from "../models/models_1";
import {
  deserializeAws_ec2CreateReservedInstancesListingCommand,
  serializeAws_ec2CreateReservedInstancesListingCommand,
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

export type CreateReservedInstancesListingCommandInput = CreateReservedInstancesListingRequest;
export type CreateReservedInstancesListingCommandOutput = CreateReservedInstancesListingResult & __MetadataBearer;

/**
 * <p>Creates a listing for Amazon EC2 Standard Reserved Instances to be sold in the Reserved Instance
 * 			Marketplace. You can submit one Standard Reserved Instance listing at a time. To get a list of your
 * 			Standard Reserved Instances, you can use the <a>DescribeReservedInstances</a> operation.</p>
 *          <note>
 *             <p>Only Standard Reserved Instances can be sold in the Reserved Instance Marketplace.
 *        Convertible Reserved Instances cannot be sold.</p>
 *          </note>
 * 		       <p>The Reserved Instance Marketplace matches sellers who want to resell Standard Reserved Instance capacity that they no longer need with buyers who want to purchase additional capacity. Reserved Instances bought and sold through the Reserved Instance Marketplace work like any other Reserved Instances.</p>
 * 		       <p>To sell your Standard Reserved Instances, you must first register as a seller in the Reserved Instance
 *       Marketplace. After completing the registration process, you can create a Reserved Instance
 *       Marketplace listing of some or all of your Standard Reserved Instances, and specify the upfront price
 *       to receive for them. Your Standard Reserved Instance listings then become available for purchase. To
 *       view the details of your Standard Reserved Instance listing, you can use the
 *         <a>DescribeReservedInstancesListings</a> operation.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a> in the
 * 				<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class CreateReservedInstancesListingCommand extends $Command<
  CreateReservedInstancesListingCommandInput,
  CreateReservedInstancesListingCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateReservedInstancesListingCommandInput) {
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
  ): Handler<CreateReservedInstancesListingCommandInput, CreateReservedInstancesListingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateReservedInstancesListingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateReservedInstancesListingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateReservedInstancesListingResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateReservedInstancesListingCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2CreateReservedInstancesListingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateReservedInstancesListingCommandOutput> {
    return deserializeAws_ec2CreateReservedInstancesListingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
