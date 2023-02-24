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
  CancelCapacityReservationFleetsRequest,
  CancelCapacityReservationFleetsRequestFilterSensitiveLog,
  CancelCapacityReservationFleetsResult,
  CancelCapacityReservationFleetsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_ec2CancelCapacityReservationFleetsCommand,
  serializeAws_ec2CancelCapacityReservationFleetsCommand,
} from "../protocols/Aws_ec2";

export interface CancelCapacityReservationFleetsCommandInput extends CancelCapacityReservationFleetsRequest {}
export interface CancelCapacityReservationFleetsCommandOutput
  extends CancelCapacityReservationFleetsResult,
    __MetadataBearer {}

/**
 * <p>Cancels one or more Capacity Reservation Fleets. When you cancel a Capacity Reservation
 * 			Fleet, the following happens:</p>
 *          <ul>
 *             <li>
 *                <p>The Capacity Reservation Fleet's status changes to <code>cancelled</code>.</p>
 *             </li>
 *             <li>
 *                <p>The individual Capacity Reservations in the Fleet are cancelled. Instances running
 * 					in the Capacity Reservations at the time of cancelling the Fleet continue to run in
 * 					shared capacity.</p>
 *             </li>
 *             <li>
 *                <p>The Fleet stops creating new Capacity Reservations.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelCapacityReservationFleetsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelCapacityReservationFleetsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CancelCapacityReservationFleetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelCapacityReservationFleetsCommandInput} for command's `input` shape.
 * @see {@link CancelCapacityReservationFleetsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CancelCapacityReservationFleetsCommand extends $Command<
  CancelCapacityReservationFleetsCommandInput,
  CancelCapacityReservationFleetsCommandOutput,
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

  constructor(readonly input: CancelCapacityReservationFleetsCommandInput) {
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
  ): Handler<CancelCapacityReservationFleetsCommandInput, CancelCapacityReservationFleetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelCapacityReservationFleetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CancelCapacityReservationFleetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelCapacityReservationFleetsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CancelCapacityReservationFleetsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CancelCapacityReservationFleetsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2CancelCapacityReservationFleetsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelCapacityReservationFleetsCommandOutput> {
    return deserializeAws_ec2CancelCapacityReservationFleetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
