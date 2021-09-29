import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteSubnetCidrReservationRequest, DeleteSubnetCidrReservationResult } from "../models/models_2";
import {
  deserializeAws_ec2DeleteSubnetCidrReservationCommand,
  serializeAws_ec2DeleteSubnetCidrReservationCommand,
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

export interface DeleteSubnetCidrReservationCommandInput extends DeleteSubnetCidrReservationRequest {}
export interface DeleteSubnetCidrReservationCommandOutput extends DeleteSubnetCidrReservationResult, __MetadataBearer {}

/**
 * <p>Deletes a subnet CIDR reservation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteSubnetCidrReservationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteSubnetCidrReservationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteSubnetCidrReservationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSubnetCidrReservationCommandInput} for command's `input` shape.
 * @see {@link DeleteSubnetCidrReservationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteSubnetCidrReservationCommand extends $Command<
  DeleteSubnetCidrReservationCommandInput,
  DeleteSubnetCidrReservationCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteSubnetCidrReservationCommandInput) {
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
  ): Handler<DeleteSubnetCidrReservationCommandInput, DeleteSubnetCidrReservationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteSubnetCidrReservationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSubnetCidrReservationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteSubnetCidrReservationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSubnetCidrReservationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteSubnetCidrReservationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteSubnetCidrReservationCommandOutput> {
    return deserializeAws_ec2DeleteSubnetCidrReservationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
