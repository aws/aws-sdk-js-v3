import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CancelCapacityReservationRequest, CancelCapacityReservationResult } from "../models/models_0";
import {
  deserializeAws_ec2CancelCapacityReservationCommand,
  serializeAws_ec2CancelCapacityReservationCommand,
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

export type CancelCapacityReservationCommandInput = CancelCapacityReservationRequest;
export type CancelCapacityReservationCommandOutput = CancelCapacityReservationResult & __MetadataBearer;

/**
 * <p>Cancels the specified Capacity Reservation, releases the reserved capacity, and changes the Capacity Reservation's state to
 * 			<code>cancelled</code>.</p>
 * 		       <p>Instances running in the reserved capacity continue running until you stop them. Stopped
 * 			instances that target the Capacity Reservation can no longer launch. Modify these instances to either
 * 			target a different Capacity Reservation, launch On-Demand Instance capacity, or run in any open Capacity Reservation
 * 			that has matching attributes and sufficient capacity.</p>
 */
export class CancelCapacityReservationCommand extends $Command<
  CancelCapacityReservationCommandInput,
  CancelCapacityReservationCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelCapacityReservationCommandInput) {
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
  ): Handler<CancelCapacityReservationCommandInput, CancelCapacityReservationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CancelCapacityReservationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelCapacityReservationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelCapacityReservationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelCapacityReservationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CancelCapacityReservationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelCapacityReservationCommandOutput> {
    return deserializeAws_ec2CancelCapacityReservationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
