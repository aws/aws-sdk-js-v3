import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { RemoveAllBackendsRequest, RemoveAllBackendsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1RemoveAllBackendsCommand,
  serializeAws_restJson1RemoveAllBackendsCommand,
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

export type RemoveAllBackendsCommandInput = RemoveAllBackendsRequest;
export type RemoveAllBackendsCommandOutput = RemoveAllBackendsResponse & __MetadataBearer;

/**
 * <p>Removes all backend environments from your Amplify project.</p>
 */
export class RemoveAllBackendsCommand extends $Command<
  RemoveAllBackendsCommandInput,
  RemoveAllBackendsCommandOutput,
  AmplifyBackendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveAllBackendsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyBackendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveAllBackendsCommandInput, RemoveAllBackendsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyBackendClient";
    const commandName = "RemoveAllBackendsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveAllBackendsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RemoveAllBackendsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveAllBackendsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RemoveAllBackendsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveAllBackendsCommandOutput> {
    return deserializeAws_restJson1RemoveAllBackendsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
