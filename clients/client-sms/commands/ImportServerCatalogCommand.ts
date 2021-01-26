import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { ImportServerCatalogRequest, ImportServerCatalogResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ImportServerCatalogCommand,
  serializeAws_json1_1ImportServerCatalogCommand,
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

export type ImportServerCatalogCommandInput = ImportServerCatalogRequest;
export type ImportServerCatalogCommandOutput = ImportServerCatalogResponse & __MetadataBearer;

/**
 * <p>Gathers a complete list of on-premises servers. Connectors must be installed and
 *             monitoring all servers to import.</p>
 *         <p>This call returns immediately, but might take additional time to retrieve all the
 *             servers.</p>
 */
export class ImportServerCatalogCommand extends $Command<
  ImportServerCatalogCommandInput,
  ImportServerCatalogCommandOutput,
  SMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ImportServerCatalogCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportServerCatalogCommandInput, ImportServerCatalogCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "ImportServerCatalogCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportServerCatalogRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ImportServerCatalogResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportServerCatalogCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ImportServerCatalogCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportServerCatalogCommandOutput> {
    return deserializeAws_json1_1ImportServerCatalogCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
