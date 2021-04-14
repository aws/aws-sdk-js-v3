import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetPartnerAccountRequest, GetPartnerAccountResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetPartnerAccountCommand,
  serializeAws_restJson1GetPartnerAccountCommand,
} from "../protocols/Aws_restJson1";
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

export type GetPartnerAccountCommandInput = GetPartnerAccountRequest;
export type GetPartnerAccountCommandOutput = GetPartnerAccountResponse & __MetadataBearer;

/**
 * <p>Gets information about a partner account. If <code>PartnerAccountId</code> and <code>PartnerType</code> are <code>null</code>, returns all partner accounts.</p>
 */
export class GetPartnerAccountCommand extends $Command<
  GetPartnerAccountCommandInput,
  GetPartnerAccountCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPartnerAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPartnerAccountCommandInput, GetPartnerAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "GetPartnerAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPartnerAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetPartnerAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPartnerAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetPartnerAccountCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPartnerAccountCommandOutput> {
    return deserializeAws_restJson1GetPartnerAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
