import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyCapacityReservationRequest, ModifyCapacityReservationResult } from "../models/models_4";
import {
  deserializeAws_ec2ModifyCapacityReservationCommand,
  serializeAws_ec2ModifyCapacityReservationCommand,
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

export type ModifyCapacityReservationCommandInput = ModifyCapacityReservationRequest;
export type ModifyCapacityReservationCommandOutput = ModifyCapacityReservationResult & __MetadataBearer;

/**
 * <p>Modifies a Capacity Reservation's capacity and the conditions under which it is to be released. You
 * 			cannot change a Capacity Reservation's instance type, EBS optimization, instance store settings,
 * 			platform, Availability Zone, or instance eligibility. If you need to modify any of these
 * 			attributes, we recommend that you cancel the Capacity Reservation, and then create a new one with
 * 			the required attributes.</p>
 */
export class ModifyCapacityReservationCommand extends $Command<
  ModifyCapacityReservationCommandInput,
  ModifyCapacityReservationCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyCapacityReservationCommandInput) {
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
  ): Handler<ModifyCapacityReservationCommandInput, ModifyCapacityReservationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyCapacityReservationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyCapacityReservationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyCapacityReservationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyCapacityReservationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyCapacityReservationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyCapacityReservationCommandOutput> {
    return deserializeAws_ec2ModifyCapacityReservationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
