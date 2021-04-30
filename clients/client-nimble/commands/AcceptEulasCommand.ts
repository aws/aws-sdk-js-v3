import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { AcceptEulasRequest, AcceptEulasResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AcceptEulasCommand,
  serializeAws_restJson1AcceptEulasCommand,
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

export interface AcceptEulasCommandInput extends AcceptEulasRequest {}
export interface AcceptEulasCommandOutput extends AcceptEulasResponse, __MetadataBearer {}

/**
 * <p>Accept EULAs.</p>
 */
export class AcceptEulasCommand extends $Command<
  AcceptEulasCommandInput,
  AcceptEulasCommandOutput,
  NimbleClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AcceptEulasCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AcceptEulasCommandInput, AcceptEulasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "AcceptEulasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptEulasRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AcceptEulasResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AcceptEulasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AcceptEulasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AcceptEulasCommandOutput> {
    return deserializeAws_restJson1AcceptEulasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
