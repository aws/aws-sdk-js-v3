import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateCapacityReservationRequest, CreateCapacityReservationResult } from "../models/models_0";
import {
  deserializeAws_ec2CreateCapacityReservationCommand,
  serializeAws_ec2CreateCapacityReservationCommand,
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

export type CreateCapacityReservationCommandInput = CreateCapacityReservationRequest;
export type CreateCapacityReservationCommandOutput = CreateCapacityReservationResult & __MetadataBearer;

/**
 * <p>Creates a new Capacity Reservation with the specified attributes.</p>
 * 		       <p>Capacity Reservations enable you to reserve capacity for your Amazon EC2 instances in a specific Availability Zone for any duration. This
 * 			gives you the flexibility to selectively add capacity reservations and still get the Regional RI discounts for that usage.
 * 			By creating Capacity Reservations, you ensure that you always have access to Amazon EC2 capacity when you need it, for as long as you need it.
 * 			For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html">Capacity Reservations</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *
 * 		       <p>Your request to create a Capacity Reservation could fail if Amazon EC2 does not have sufficient capacity to
 * 			fulfill the request. If your request fails due to Amazon EC2 capacity constraints, either try
 * 			again at a later time, try in a different Availability Zone, or request a smaller
 * 			capacity reservation. If your application is flexible across instance types and sizes,
 * 			try to create a Capacity Reservation with different instance attributes.</p>
 *
 * 		       <p>Your request could also fail if the requested quantity exceeds your On-Demand Instance
 * 			limit for the selected instance type. If your request fails due to limit constraints,
 * 			increase your On-Demand Instance limit for the required instance type and try again. For
 * 			more information about increasing your instance limits, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html">Amazon EC2 Service
 * 				Limits</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class CreateCapacityReservationCommand extends $Command<
  CreateCapacityReservationCommandInput,
  CreateCapacityReservationCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCapacityReservationCommandInput) {
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
  ): Handler<CreateCapacityReservationCommandInput, CreateCapacityReservationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateCapacityReservationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCapacityReservationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCapacityReservationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCapacityReservationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateCapacityReservationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCapacityReservationCommandOutput> {
    return deserializeAws_ec2CreateCapacityReservationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
