import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { RestorePhoneNumberRequest, RestorePhoneNumberResponse } from "../models/models_1";
import {
  deserializeAws_restJson1RestorePhoneNumberCommand,
  serializeAws_restJson1RestorePhoneNumberCommand,
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

export type RestorePhoneNumberCommandInput = RestorePhoneNumberRequest;
export type RestorePhoneNumberCommandOutput = RestorePhoneNumberResponse & __MetadataBearer;

/**
 * <p>Moves a phone number from the <b>Deletion queue</b> back into
 *       the phone number <b>Inventory</b>.</p>
 */
export class RestorePhoneNumberCommand extends $Command<
  RestorePhoneNumberCommandInput,
  RestorePhoneNumberCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RestorePhoneNumberCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RestorePhoneNumberCommandInput, RestorePhoneNumberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "RestorePhoneNumberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestorePhoneNumberRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RestorePhoneNumberResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestorePhoneNumberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RestorePhoneNumberCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RestorePhoneNumberCommandOutput> {
    return deserializeAws_restJson1RestorePhoneNumberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
