import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { InstallationMedia } from "../models/models_0";
import { ImportInstallationMediaMessage } from "../models/models_1";
import {
  deserializeAws_queryImportInstallationMediaCommand,
  serializeAws_queryImportInstallationMediaCommand,
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

export type ImportInstallationMediaCommandInput = ImportInstallationMediaMessage;
export type ImportInstallationMediaCommandOutput = InstallationMedia & __MetadataBearer;

/**
 * <p>Imports the installation media for a DB engine that requires an on-premises
 *           customer provided license, such as SQL Server.</p>
 */
export class ImportInstallationMediaCommand extends $Command<
  ImportInstallationMediaCommandInput,
  ImportInstallationMediaCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ImportInstallationMediaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportInstallationMediaCommandInput, ImportInstallationMediaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ImportInstallationMediaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportInstallationMediaMessage.filterSensitiveLog,
      outputFilterSensitiveLog: InstallationMedia.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportInstallationMediaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryImportInstallationMediaCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportInstallationMediaCommandOutput> {
    return deserializeAws_queryImportInstallationMediaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
