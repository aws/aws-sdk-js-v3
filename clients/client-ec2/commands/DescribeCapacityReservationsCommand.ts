import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeCapacityReservationsRequest, DescribeCapacityReservationsResult } from "../models/models_2";
import {
  deserializeAws_ec2DescribeCapacityReservationsCommand,
  serializeAws_ec2DescribeCapacityReservationsCommand,
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

export type DescribeCapacityReservationsCommandInput = DescribeCapacityReservationsRequest;
export type DescribeCapacityReservationsCommandOutput = DescribeCapacityReservationsResult & __MetadataBearer;

/**
 * <p>Describes one or more of your Capacity Reservations. The results describe only the Capacity Reservations in the AWS
 * 			Region that you're currently using.</p>
 */
export class DescribeCapacityReservationsCommand extends $Command<
  DescribeCapacityReservationsCommandInput,
  DescribeCapacityReservationsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCapacityReservationsCommandInput) {
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
  ): Handler<DescribeCapacityReservationsCommandInput, DescribeCapacityReservationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeCapacityReservationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCapacityReservationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCapacityReservationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCapacityReservationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeCapacityReservationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCapacityReservationsCommandOutput> {
    return deserializeAws_ec2DescribeCapacityReservationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
