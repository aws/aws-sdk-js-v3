import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { MarkAsArchivedRequest, SourceServer } from "../models/models_0";
import {
  deserializeAws_restJson1MarkAsArchivedCommand,
  serializeAws_restJson1MarkAsArchivedCommand,
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

export interface MarkAsArchivedCommandInput extends MarkAsArchivedRequest {}
export interface MarkAsArchivedCommandOutput extends SourceServer, __MetadataBearer {}

/**
 * <p>Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle.state which equals DISCONNECTED or CUTOVER.</p>
 */
export class MarkAsArchivedCommand extends $Command<
  MarkAsArchivedCommandInput,
  MarkAsArchivedCommandOutput,
  MgnClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: MarkAsArchivedCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MgnClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<MarkAsArchivedCommandInput, MarkAsArchivedCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "MarkAsArchivedCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: MarkAsArchivedRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SourceServer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: MarkAsArchivedCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1MarkAsArchivedCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<MarkAsArchivedCommandOutput> {
    return deserializeAws_restJson1MarkAsArchivedCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
