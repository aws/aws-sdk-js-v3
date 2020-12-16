import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { CreateBackendAPIRequest, CreateBackendAPIResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateBackendAPICommand,
  serializeAws_restJson1CreateBackendAPICommand,
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

export type CreateBackendAPICommandInput = CreateBackendAPIRequest;
export type CreateBackendAPICommandOutput = CreateBackendAPIResponse & __MetadataBearer;

/**
 * <p>Creates a new backend API resource.</p>
 */
export class CreateBackendAPICommand extends $Command<
  CreateBackendAPICommandInput,
  CreateBackendAPICommandOutput,
  AmplifyBackendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateBackendAPICommandInput) {
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
  ): Handler<CreateBackendAPICommandInput, CreateBackendAPICommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyBackendClient";
    const commandName = "CreateBackendAPICommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateBackendAPIRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateBackendAPIResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateBackendAPICommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateBackendAPICommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBackendAPICommandOutput> {
    return deserializeAws_restJson1CreateBackendAPICommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
