import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { CreateBackendAuthRequest, CreateBackendAuthResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateBackendAuthCommand,
  serializeAws_restJson1CreateBackendAuthCommand,
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

export type CreateBackendAuthCommandInput = CreateBackendAuthRequest;
export type CreateBackendAuthCommandOutput = CreateBackendAuthResponse & __MetadataBearer;

/**
 * <p>Creates a new backend authentication resource.</p>
 */
export class CreateBackendAuthCommand extends $Command<
  CreateBackendAuthCommandInput,
  CreateBackendAuthCommandOutput,
  AmplifyBackendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateBackendAuthCommandInput) {
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
  ): Handler<CreateBackendAuthCommandInput, CreateBackendAuthCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyBackendClient";
    const commandName = "CreateBackendAuthCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateBackendAuthRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateBackendAuthResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateBackendAuthCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateBackendAuthCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBackendAuthCommandOutput> {
    return deserializeAws_restJson1CreateBackendAuthCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
