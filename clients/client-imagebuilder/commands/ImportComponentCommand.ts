import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ImportComponentRequest, ImportComponentResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ImportComponentCommand,
  serializeAws_restJson1ImportComponentCommand,
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

export type ImportComponentCommandInput = ImportComponentRequest;
export type ImportComponentCommandOutput = ImportComponentResponse & __MetadataBearer;

/**
 * <p>Imports a component and transforms its data into a component document. </p>
 */
export class ImportComponentCommand extends $Command<
  ImportComponentCommandInput,
  ImportComponentCommandOutput,
  ImagebuilderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ImportComponentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportComponentCommandInput, ImportComponentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "ImportComponentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportComponentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ImportComponentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportComponentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ImportComponentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportComponentCommandOutput> {
    return deserializeAws_restJson1ImportComponentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
