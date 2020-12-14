import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ImportCatalogToGlueRequest, ImportCatalogToGlueResponse } from "../models/models_1";
import {
  deserializeAws_json1_1ImportCatalogToGlueCommand,
  serializeAws_json1_1ImportCatalogToGlueCommand,
} from "../protocols/Aws_json1_1";
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

export type ImportCatalogToGlueCommandInput = ImportCatalogToGlueRequest;
export type ImportCatalogToGlueCommandOutput = ImportCatalogToGlueResponse & __MetadataBearer;

/**
 * <p>Imports an existing Amazon Athena Data Catalog to AWS Glue</p>
 */
export class ImportCatalogToGlueCommand extends $Command<
  ImportCatalogToGlueCommandInput,
  ImportCatalogToGlueCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ImportCatalogToGlueCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportCatalogToGlueCommandInput, ImportCatalogToGlueCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "ImportCatalogToGlueCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportCatalogToGlueRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ImportCatalogToGlueResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportCatalogToGlueCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ImportCatalogToGlueCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportCatalogToGlueCommandOutput> {
    return deserializeAws_json1_1ImportCatalogToGlueCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
