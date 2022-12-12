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
  ModifyCapacityReservationFleetRequest,
  ModifyCapacityReservationFleetRequestFilterSensitiveLog,
  ModifyCapacityReservationFleetResult,
  ModifyCapacityReservationFleetResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2ModifyCapacityReservationFleetCommand,
  serializeAws_ec2ModifyCapacityReservationFleetCommand,
} from "../protocols/Aws_ec2";

export interface ModifyCapacityReservationFleetCommandInput extends ModifyCapacityReservationFleetRequest {}
export interface ModifyCapacityReservationFleetCommandOutput
  extends ModifyCapacityReservationFleetResult,
    __MetadataBearer {}

/**
 * <p>Modifies a Capacity Reservation Fleet.</p>
 *          <p>When you modify the total target capacity of a Capacity Reservation Fleet, the Fleet automatically
 * 			creates new Capacity Reservations, or modifies or cancels existing Capacity Reservations in the Fleet
 * 			to meet the new total target capacity. When you modify the end date for the Fleet, the end dates for
 * 			all of the individual Capacity Reservations in the Fleet are updated accordingly.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyCapacityReservationFleetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyCapacityReservationFleetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyCapacityReservationFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyCapacityReservationFleetCommandInput} for command's `input` shape.
 * @see {@link ModifyCapacityReservationFleetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ModifyCapacityReservationFleetCommand extends $Command<
  ModifyCapacityReservationFleetCommandInput,
  ModifyCapacityReservationFleetCommandOutput,
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

  constructor(readonly input: ModifyCapacityReservationFleetCommandInput) {
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
  ): Handler<ModifyCapacityReservationFleetCommandInput, ModifyCapacityReservationFleetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyCapacityReservationFleetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyCapacityReservationFleetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyCapacityReservationFleetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyCapacityReservationFleetResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ModifyCapacityReservationFleetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyCapacityReservationFleetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyCapacityReservationFleetCommandOutput> {
    return deserializeAws_ec2ModifyCapacityReservationFleetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
