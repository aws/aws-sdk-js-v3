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
  CreateCapacityReservationFleetRequest,
  CreateCapacityReservationFleetRequestFilterSensitiveLog,
  CreateCapacityReservationFleetResult,
  CreateCapacityReservationFleetResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_ec2CreateCapacityReservationFleetCommand,
  serializeAws_ec2CreateCapacityReservationFleetCommand,
} from "../protocols/Aws_ec2";

export interface CreateCapacityReservationFleetCommandInput extends CreateCapacityReservationFleetRequest {}
export interface CreateCapacityReservationFleetCommandOutput
  extends CreateCapacityReservationFleetResult,
    __MetadataBearer {}

/**
 * <p>Creates a Capacity Reservation Fleet. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/work-with-cr-fleets.html#create-crfleet">Create a Capacity
 * 			Reservation Fleet</a> in the Amazon EC2 User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateCapacityReservationFleetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateCapacityReservationFleetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateCapacityReservationFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCapacityReservationFleetCommandInput} for command's `input` shape.
 * @see {@link CreateCapacityReservationFleetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateCapacityReservationFleetCommand extends $Command<
  CreateCapacityReservationFleetCommandInput,
  CreateCapacityReservationFleetCommandOutput,
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

  constructor(readonly input: CreateCapacityReservationFleetCommandInput) {
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
  ): Handler<CreateCapacityReservationFleetCommandInput, CreateCapacityReservationFleetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCapacityReservationFleetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateCapacityReservationFleetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCapacityReservationFleetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateCapacityReservationFleetResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateCapacityReservationFleetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2CreateCapacityReservationFleetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCapacityReservationFleetCommandOutput> {
    return deserializeAws_ec2CreateCapacityReservationFleetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
