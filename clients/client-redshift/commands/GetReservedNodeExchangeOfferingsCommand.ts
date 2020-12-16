import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import {
  GetReservedNodeExchangeOfferingsInputMessage,
  GetReservedNodeExchangeOfferingsOutputMessage,
} from "../models/models_0";
import {
  deserializeAws_queryGetReservedNodeExchangeOfferingsCommand,
  serializeAws_queryGetReservedNodeExchangeOfferingsCommand,
} from "../protocols/Aws_query";
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

export type GetReservedNodeExchangeOfferingsCommandInput = GetReservedNodeExchangeOfferingsInputMessage;
export type GetReservedNodeExchangeOfferingsCommandOutput = GetReservedNodeExchangeOfferingsOutputMessage &
  __MetadataBearer;

/**
 * <p>Returns an array of DC2 ReservedNodeOfferings that matches the payment type, term,
 *             and usage price of the given DC1 reserved node.</p>
 */
export class GetReservedNodeExchangeOfferingsCommand extends $Command<
  GetReservedNodeExchangeOfferingsCommandInput,
  GetReservedNodeExchangeOfferingsCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetReservedNodeExchangeOfferingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetReservedNodeExchangeOfferingsCommandInput, GetReservedNodeExchangeOfferingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "GetReservedNodeExchangeOfferingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetReservedNodeExchangeOfferingsInputMessage.filterSensitiveLog,
      outputFilterSensitiveLog: GetReservedNodeExchangeOfferingsOutputMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetReservedNodeExchangeOfferingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryGetReservedNodeExchangeOfferingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetReservedNodeExchangeOfferingsCommandOutput> {
    return deserializeAws_queryGetReservedNodeExchangeOfferingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
