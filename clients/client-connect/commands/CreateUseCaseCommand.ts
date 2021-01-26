import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { CreateUseCaseRequest, CreateUseCaseResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateUseCaseCommand,
  serializeAws_restJson1CreateUseCaseCommand,
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

export type CreateUseCaseCommandInput = CreateUseCaseRequest;
export type CreateUseCaseCommandOutput = CreateUseCaseResponse & __MetadataBearer;

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Creates a use case for an AppIntegration association.</p>
 */
export class CreateUseCaseCommand extends $Command<
  CreateUseCaseCommandInput,
  CreateUseCaseCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateUseCaseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateUseCaseCommandInput, CreateUseCaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "CreateUseCaseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateUseCaseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateUseCaseResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateUseCaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateUseCaseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateUseCaseCommandOutput> {
    return deserializeAws_restJson1CreateUseCaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
