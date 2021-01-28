import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { GenerateBackendAPIModelsRequest, GenerateBackendAPIModelsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GenerateBackendAPIModelsCommand,
  serializeAws_restJson1GenerateBackendAPIModelsCommand,
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

export type GenerateBackendAPIModelsCommandInput = GenerateBackendAPIModelsRequest;
export type GenerateBackendAPIModelsCommandOutput = GenerateBackendAPIModelsResponse & __MetadataBearer;

/**
 * <p>Generates a model schema for an existing backend API resource.</p>
 */
export class GenerateBackendAPIModelsCommand extends $Command<
  GenerateBackendAPIModelsCommandInput,
  GenerateBackendAPIModelsCommandOutput,
  AmplifyBackendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GenerateBackendAPIModelsCommandInput) {
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
  ): Handler<GenerateBackendAPIModelsCommandInput, GenerateBackendAPIModelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyBackendClient";
    const commandName = "GenerateBackendAPIModelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GenerateBackendAPIModelsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GenerateBackendAPIModelsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GenerateBackendAPIModelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GenerateBackendAPIModelsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GenerateBackendAPIModelsCommandOutput> {
    return deserializeAws_restJson1GenerateBackendAPIModelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
