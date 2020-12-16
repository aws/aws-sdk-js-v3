import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { DisableDirectoryRequest, DisableDirectoryResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DisableDirectoryCommand,
  serializeAws_restJson1DisableDirectoryCommand,
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

export type DisableDirectoryCommandInput = DisableDirectoryRequest;
export type DisableDirectoryCommandOutput = DisableDirectoryResponse & __MetadataBearer;

/**
 * <p>Disables the specified directory. Disabled directories cannot be read or written to.
 *       Only enabled directories can be disabled. Disabled directories may be reenabled.</p>
 */
export class DisableDirectoryCommand extends $Command<
  DisableDirectoryCommandInput,
  DisableDirectoryCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisableDirectoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisableDirectoryCommandInput, DisableDirectoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "DisableDirectoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableDirectoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisableDirectoryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableDirectoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisableDirectoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisableDirectoryCommandOutput> {
    return deserializeAws_restJson1DisableDirectoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
