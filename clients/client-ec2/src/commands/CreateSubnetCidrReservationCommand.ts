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
  CreateSubnetCidrReservationRequest,
  CreateSubnetCidrReservationRequestFilterSensitiveLog,
  CreateSubnetCidrReservationResult,
  CreateSubnetCidrReservationResultFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_ec2CreateSubnetCidrReservationCommand,
  serializeAws_ec2CreateSubnetCidrReservationCommand,
} from "../protocols/Aws_ec2";

export interface CreateSubnetCidrReservationCommandInput extends CreateSubnetCidrReservationRequest {}
export interface CreateSubnetCidrReservationCommandOutput extends CreateSubnetCidrReservationResult, __MetadataBearer {}

/**
 * <p>Creates a subnet CIDR reservation. For information about subnet CIDR reservations, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/subnet-cidr-reservation.html">Subnet CIDR reservations</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateSubnetCidrReservationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateSubnetCidrReservationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateSubnetCidrReservationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSubnetCidrReservationCommandInput} for command's `input` shape.
 * @see {@link CreateSubnetCidrReservationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateSubnetCidrReservationCommand extends $Command<
  CreateSubnetCidrReservationCommandInput,
  CreateSubnetCidrReservationCommandOutput,
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

  constructor(readonly input: CreateSubnetCidrReservationCommandInput) {
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
  ): Handler<CreateSubnetCidrReservationCommandInput, CreateSubnetCidrReservationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSubnetCidrReservationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateSubnetCidrReservationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSubnetCidrReservationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateSubnetCidrReservationResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSubnetCidrReservationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateSubnetCidrReservationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateSubnetCidrReservationCommandOutput> {
    return deserializeAws_ec2CreateSubnetCidrReservationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
