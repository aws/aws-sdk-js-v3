import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListLambdaFunctionsRequest, ListLambdaFunctionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListLambdaFunctionsCommand,
  serializeAws_restJson1ListLambdaFunctionsCommand,
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

export type ListLambdaFunctionsCommandInput = ListLambdaFunctionsRequest;
export type ListLambdaFunctionsCommandOutput = ListLambdaFunctionsResponse & __MetadataBearer;

/**
 * <p>Returns a paginated list of all the Lambda functions that show up in the drop-down options
 *    in the relevant contact flow blocks.</p>
 */
export class ListLambdaFunctionsCommand extends $Command<
  ListLambdaFunctionsCommandInput,
  ListLambdaFunctionsCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListLambdaFunctionsCommandInput) {
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
  ): Handler<ListLambdaFunctionsCommandInput, ListLambdaFunctionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListLambdaFunctionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListLambdaFunctionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListLambdaFunctionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListLambdaFunctionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListLambdaFunctionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLambdaFunctionsCommandOutput> {
    return deserializeAws_restJson1ListLambdaFunctionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
