import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { GetBackendAPIRequest, GetBackendAPIResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetBackendAPICommand,
  serializeAws_restJson1GetBackendAPICommand,
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

export type GetBackendAPICommandInput = GetBackendAPIRequest;
export type GetBackendAPICommandOutput = GetBackendAPIResponse & __MetadataBearer;

/**
 * <p>Gets the details for a backend API.</p>
 */
export class GetBackendAPICommand extends $Command<
  GetBackendAPICommandInput,
  GetBackendAPICommandOutput,
  AmplifyBackendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBackendAPICommandInput) {
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
  ): Handler<GetBackendAPICommandInput, GetBackendAPICommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyBackendClient";
    const commandName = "GetBackendAPICommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBackendAPIRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBackendAPIResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBackendAPICommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBackendAPICommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBackendAPICommandOutput> {
    return deserializeAws_restJson1GetBackendAPICommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
