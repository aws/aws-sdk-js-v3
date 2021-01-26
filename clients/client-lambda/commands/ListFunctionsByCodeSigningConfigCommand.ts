import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { ListFunctionsByCodeSigningConfigRequest, ListFunctionsByCodeSigningConfigResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListFunctionsByCodeSigningConfigCommand,
  serializeAws_restJson1ListFunctionsByCodeSigningConfigCommand,
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

export type ListFunctionsByCodeSigningConfigCommandInput = ListFunctionsByCodeSigningConfigRequest;
export type ListFunctionsByCodeSigningConfigCommandOutput = ListFunctionsByCodeSigningConfigResponse & __MetadataBearer;

/**
 * <p>List the functions that use the specified code signing configuration. You can use this method prior to deleting a
 *       code signing configuration, to verify that no functions are using it.</p>
 */
export class ListFunctionsByCodeSigningConfigCommand extends $Command<
  ListFunctionsByCodeSigningConfigCommandInput,
  ListFunctionsByCodeSigningConfigCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFunctionsByCodeSigningConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFunctionsByCodeSigningConfigCommandInput, ListFunctionsByCodeSigningConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "ListFunctionsByCodeSigningConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFunctionsByCodeSigningConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFunctionsByCodeSigningConfigResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListFunctionsByCodeSigningConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListFunctionsByCodeSigningConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListFunctionsByCodeSigningConfigCommandOutput> {
    return deserializeAws_restJson1ListFunctionsByCodeSigningConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
