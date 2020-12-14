import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { CloneBackendRequest, CloneBackendResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CloneBackendCommand,
  serializeAws_restJson1CloneBackendCommand,
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

export type CloneBackendCommandInput = CloneBackendRequest;
export type CloneBackendCommandOutput = CloneBackendResponse & __MetadataBearer;

/**
 * <p>This operation clones an existing backend.</p>
 */
export class CloneBackendCommand extends $Command<
  CloneBackendCommandInput,
  CloneBackendCommandOutput,
  AmplifyBackendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CloneBackendCommandInput) {
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
  ): Handler<CloneBackendCommandInput, CloneBackendCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyBackendClient";
    const commandName = "CloneBackendCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CloneBackendRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CloneBackendResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CloneBackendCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CloneBackendCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CloneBackendCommandOutput> {
    return deserializeAws_restJson1CloneBackendCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
