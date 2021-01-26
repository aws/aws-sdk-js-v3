import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetGroupsForCapacityReservationRequest, GetGroupsForCapacityReservationResult } from "../models/models_4";
import {
  deserializeAws_ec2GetGroupsForCapacityReservationCommand,
  serializeAws_ec2GetGroupsForCapacityReservationCommand,
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

export type GetGroupsForCapacityReservationCommandInput = GetGroupsForCapacityReservationRequest;
export type GetGroupsForCapacityReservationCommandOutput = GetGroupsForCapacityReservationResult & __MetadataBearer;

/**
 * <p>Lists the resource groups to which a Capacity Reservation has been added.</p>
 */
export class GetGroupsForCapacityReservationCommand extends $Command<
  GetGroupsForCapacityReservationCommandInput,
  GetGroupsForCapacityReservationCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetGroupsForCapacityReservationCommandInput) {
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
  ): Handler<GetGroupsForCapacityReservationCommandInput, GetGroupsForCapacityReservationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetGroupsForCapacityReservationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetGroupsForCapacityReservationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetGroupsForCapacityReservationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetGroupsForCapacityReservationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2GetGroupsForCapacityReservationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetGroupsForCapacityReservationCommandOutput> {
    return deserializeAws_ec2GetGroupsForCapacityReservationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
