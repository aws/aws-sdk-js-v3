import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetHostReservationPurchasePreviewRequest, GetHostReservationPurchasePreviewResult } from "../models/models_4";
import {
  deserializeAws_ec2GetHostReservationPurchasePreviewCommand,
  serializeAws_ec2GetHostReservationPurchasePreviewCommand,
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

export type GetHostReservationPurchasePreviewCommandInput = GetHostReservationPurchasePreviewRequest;
export type GetHostReservationPurchasePreviewCommandOutput = GetHostReservationPurchasePreviewResult & __MetadataBearer;

/**
 * <p>Preview a reservation purchase with configurations that match those of your
 *             Dedicated Host. You must have active Dedicated Hosts in your account before you purchase
 *             a reservation.</p>
 *         <p>This is a preview of the <a>PurchaseHostReservation</a> action and does
 *             not result in the offering being purchased.</p>
 */
export class GetHostReservationPurchasePreviewCommand extends $Command<
  GetHostReservationPurchasePreviewCommandInput,
  GetHostReservationPurchasePreviewCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetHostReservationPurchasePreviewCommandInput) {
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
  ): Handler<GetHostReservationPurchasePreviewCommandInput, GetHostReservationPurchasePreviewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetHostReservationPurchasePreviewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetHostReservationPurchasePreviewRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetHostReservationPurchasePreviewResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetHostReservationPurchasePreviewCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2GetHostReservationPurchasePreviewCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetHostReservationPurchasePreviewCommandOutput> {
    return deserializeAws_ec2GetHostReservationPurchasePreviewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
