// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  CancelCapacityReservationRequest,
  CancelCapacityReservationRequestFilterSensitiveLog,
  CancelCapacityReservationResult,
  CancelCapacityReservationResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_ec2CancelCapacityReservationCommand,
  serializeAws_ec2CancelCapacityReservationCommand,
} from "../protocols/Aws_ec2";

export interface CancelCapacityReservationCommandInput extends CancelCapacityReservationRequest {}
export interface CancelCapacityReservationCommandOutput extends CancelCapacityReservationResult, __MetadataBearer {}

/**
 * <p>Cancels the specified Capacity Reservation, releases the reserved capacity, and changes the Capacity Reservation's state to
 * 			<code>cancelled</code>.</p>
 *          <p>Instances running in the reserved capacity continue running until you stop them. Stopped
 * 			instances that target the Capacity Reservation can no longer launch. Modify these instances to either
 * 			target a different Capacity Reservation, launch On-Demand Instance capacity, or run in any open Capacity Reservation
 * 			that has matching attributes and sufficient capacity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelCapacityReservationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelCapacityReservationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CancelCapacityReservationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelCapacityReservationCommandInput} for command's `input` shape.
 * @see {@link CancelCapacityReservationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CancelCapacityReservationCommand extends $Command<
  CancelCapacityReservationCommandInput,
  CancelCapacityReservationCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelCapacityReservationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CancelCapacityReservationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelCapacityReservationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CancelCapacityReservationResultFilterSensitiveLog,
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
