import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetCatalogImportStatusRequest, GetCatalogImportStatusResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetCatalogImportStatusCommand,
  serializeAws_json1_1GetCatalogImportStatusCommand,
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

export type GetCatalogImportStatusCommandInput = GetCatalogImportStatusRequest;
export type GetCatalogImportStatusCommandOutput = GetCatalogImportStatusResponse & __MetadataBearer;

/**
 * <p>Retrieves the status of a migration operation.</p>
 */
export class GetCatalogImportStatusCommand extends $Command<
  GetCatalogImportStatusCommandInput,
  GetCatalogImportStatusCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCatalogImportStatusCommandInput) {
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
  ): Handler<GetCatalogImportStatusCommandInput, GetCatalogImportStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetCatalogImportStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCatalogImportStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCatalogImportStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCatalogImportStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCatalogImportStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCatalogImportStatusCommandOutput> {
    return deserializeAws_json1_1GetCatalogImportStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
