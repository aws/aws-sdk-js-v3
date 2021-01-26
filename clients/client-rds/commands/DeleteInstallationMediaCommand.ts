import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DeleteInstallationMediaMessage, InstallationMedia } from "../models/models_0";
import {
  deserializeAws_queryDeleteInstallationMediaCommand,
  serializeAws_queryDeleteInstallationMediaCommand,
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

export type DeleteInstallationMediaCommandInput = DeleteInstallationMediaMessage;
export type DeleteInstallationMediaCommandOutput = InstallationMedia & __MetadataBearer;

/**
 * <p>Deletes the installation medium for a DB engine that requires an on-premises customer provided license,
 *             such as Microsoft SQL Server.</p>
 */
export class DeleteInstallationMediaCommand extends $Command<
  DeleteInstallationMediaCommandInput,
  DeleteInstallationMediaCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteInstallationMediaCommandInput) {
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
  ): Handler<DeleteInstallationMediaCommandInput, DeleteInstallationMediaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DeleteInstallationMediaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteInstallationMediaMessage.filterSensitiveLog,
      outputFilterSensitiveLog: InstallationMedia.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteInstallationMediaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteInstallationMediaCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteInstallationMediaCommandOutput> {
    return deserializeAws_queryDeleteInstallationMediaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
