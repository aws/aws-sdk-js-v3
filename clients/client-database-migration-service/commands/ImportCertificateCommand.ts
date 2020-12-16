import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { ImportCertificateMessage, ImportCertificateResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ImportCertificateCommand,
  serializeAws_json1_1ImportCertificateCommand,
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

export type ImportCertificateCommandInput = ImportCertificateMessage;
export type ImportCertificateCommandOutput = ImportCertificateResponse & __MetadataBearer;

/**
 * <p>Uploads the specified certificate.</p>
 */
export class ImportCertificateCommand extends $Command<
  ImportCertificateCommandInput,
  ImportCertificateCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ImportCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportCertificateCommandInput, ImportCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "ImportCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportCertificateMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ImportCertificateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ImportCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportCertificateCommandOutput> {
    return deserializeAws_json1_1ImportCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
