import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateConnectorDefinitionRequest, CreateConnectorDefinitionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateConnectorDefinitionCommand,
  serializeAws_restJson1CreateConnectorDefinitionCommand,
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

export type CreateConnectorDefinitionCommandInput = CreateConnectorDefinitionRequest;
export type CreateConnectorDefinitionCommandOutput = CreateConnectorDefinitionResponse & __MetadataBearer;

/**
 * Creates a connector definition. You may provide the initial version of the connector definition now or use ''CreateConnectorDefinitionVersion'' at a later time.
 */
export class CreateConnectorDefinitionCommand extends $Command<
  CreateConnectorDefinitionCommandInput,
  CreateConnectorDefinitionCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateConnectorDefinitionCommandInput) {
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
  ): Handler<CreateConnectorDefinitionCommandInput, CreateConnectorDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "CreateConnectorDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateConnectorDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateConnectorDefinitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateConnectorDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateConnectorDefinitionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateConnectorDefinitionCommandOutput> {
    return deserializeAws_restJson1CreateConnectorDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
