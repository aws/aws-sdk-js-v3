import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { PurchaseHostReservationRequest, PurchaseHostReservationResult } from "../models/models_5";
import {
  deserializeAws_ec2PurchaseHostReservationCommand,
  serializeAws_ec2PurchaseHostReservationCommand,
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

export interface PurchaseHostReservationCommandInput extends PurchaseHostReservationRequest {}
export interface PurchaseHostReservationCommandOutput extends PurchaseHostReservationResult, __MetadataBearer {}

/**
 * <p>Purchase a reservation with configurations that match those of your Dedicated Host.
 *             You must have active Dedicated Hosts in your account before you purchase a reservation.
 *             This action results in the specified reservation being purchased and charged to your
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, PurchaseHostReservationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, PurchaseHostReservationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new PurchaseHostReservationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PurchaseHostReservationCommandInput} for command's `input` shape.
 * @see {@link PurchaseHostReservationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PurchaseHostReservationCommand extends $Command<
  PurchaseHostReservationCommandInput,
  PurchaseHostReservationCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PurchaseHostReservationCommandInput) {
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
  ): Handler<PurchaseHostReservationCommandInput, PurchaseHostReservationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "PurchaseHostReservationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PurchaseHostReservationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PurchaseHostReservationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PurchaseHostReservationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2PurchaseHostReservationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PurchaseHostReservationCommandOutput> {
    return deserializeAws_ec2PurchaseHostReservationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
