import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeHostReservationOfferingsRequest, DescribeHostReservationOfferingsResult } from "../models/models_2";
import {
  deserializeAws_ec2DescribeHostReservationOfferingsCommand,
  serializeAws_ec2DescribeHostReservationOfferingsCommand,
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

export type DescribeHostReservationOfferingsCommandInput = DescribeHostReservationOfferingsRequest;
export type DescribeHostReservationOfferingsCommandOutput = DescribeHostReservationOfferingsResult & __MetadataBearer;

/**
 * <p>Describes the Dedicated Host reservations that are available to purchase.</p>
 *         <p>The results describe all of the Dedicated Host reservation offerings, including
 * 			offerings that might not match the instance family and Region of your Dedicated Hosts.
 * 			When purchasing an offering, ensure that the instance family and Region of the offering
 * 			matches that of the Dedicated Hosts with which it is to be associated. For more
 * 			information about supported instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html">Dedicated Hosts
 * 				Overview</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. </p>
 */
export class DescribeHostReservationOfferingsCommand extends $Command<
  DescribeHostReservationOfferingsCommandInput,
  DescribeHostReservationOfferingsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeHostReservationOfferingsCommandInput) {
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
  ): Handler<DescribeHostReservationOfferingsCommandInput, DescribeHostReservationOfferingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeHostReservationOfferingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeHostReservationOfferingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeHostReservationOfferingsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeHostReservationOfferingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeHostReservationOfferingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeHostReservationOfferingsCommandOutput> {
    return deserializeAws_ec2DescribeHostReservationOfferingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
