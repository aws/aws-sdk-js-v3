import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";
import { PutCodeBindingRequest, PutCodeBindingResponse } from "../models/models_0";
import {
  deserializeAws_restJson1PutCodeBindingCommand,
  serializeAws_restJson1PutCodeBindingCommand,
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

export type PutCodeBindingCommandInput = PutCodeBindingRequest;
export type PutCodeBindingCommandOutput = PutCodeBindingResponse & __MetadataBearer;

/**
 * <p>Put code binding URI</p>
 */
export class PutCodeBindingCommand extends $Command<
  PutCodeBindingCommandInput,
  PutCodeBindingCommandOutput,
  SchemasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutCodeBindingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SchemasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutCodeBindingCommandInput, PutCodeBindingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SchemasClient";
    const commandName = "PutCodeBindingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutCodeBindingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutCodeBindingResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutCodeBindingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutCodeBindingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutCodeBindingCommandOutput> {
    return deserializeAws_restJson1PutCodeBindingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
