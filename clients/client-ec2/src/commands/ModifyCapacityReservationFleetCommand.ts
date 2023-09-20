// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyCapacityReservationFleetRequest, ModifyCapacityReservationFleetResult } from "../models/models_6";
import {
  de_ModifyCapacityReservationFleetCommand,
  se_ModifyCapacityReservationFleetCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyCapacityReservationFleetCommand}.
 */
export interface ModifyCapacityReservationFleetCommandInput extends ModifyCapacityReservationFleetRequest {}
/**
 * @public
 *
 * The output of {@link ModifyCapacityReservationFleetCommand}.
 */
export interface ModifyCapacityReservationFleetCommandOutput
  extends ModifyCapacityReservationFleetResult,
    __MetadataBearer {}

/**
 * @public
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
 * const input = { // ModifyCapacityReservationFleetRequest
 *   CapacityReservationFleetId: "STRING_VALUE", // required
 *   TotalTargetCapacity: Number("int"),
 *   EndDate: new Date("TIMESTAMP"),
 *   DryRun: true || false,
 *   RemoveEndDate: true || false,
 * };
 * const command = new ModifyCapacityReservationFleetCommand(input);
 * const response = await client.send(command);
 * // { // ModifyCapacityReservationFleetResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param ModifyCapacityReservationFleetCommandInput - {@link ModifyCapacityReservationFleetCommandInput}
 * @returns {@link ModifyCapacityReservationFleetCommandOutput}
 * @see {@link ModifyCapacityReservationFleetCommandInput} for command's `input` shape.
 * @see {@link ModifyCapacityReservationFleetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ModifyCapacityReservationFleet",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: ModifyCapacityReservationFleetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ModifyCapacityReservationFleetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyCapacityReservationFleetCommandOutput> {
    return de_ModifyCapacityReservationFleetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
