import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetConnectorDefinitionRequest, GetConnectorDefinitionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetConnectorDefinitionCommand,
  serializeAws_restJson1GetConnectorDefinitionCommand,
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

export type GetConnectorDefinitionCommandInput = GetConnectorDefinitionRequest;
export type GetConnectorDefinitionCommandOutput = GetConnectorDefinitionResponse & __MetadataBearer;

/**
 * Retrieves information about a connector definition.
 */
export class GetConnectorDefinitionCommand extends $Command<
  GetConnectorDefinitionCommandInput,
  GetConnectorDefinitionCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetConnectorDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConnectorDefinitionCommandInput, GetConnectorDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "GetConnectorDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetConnectorDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetConnectorDefinitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetConnectorDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetConnectorDefinitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetConnectorDefinitionCommandOutput> {
    return deserializeAws_restJson1GetConnectorDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
