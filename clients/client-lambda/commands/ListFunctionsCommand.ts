import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { ListFunctionsRequest, ListFunctionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListFunctionsCommand,
  serializeAws_restJson1ListFunctionsCommand,
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

export type ListFunctionsCommandInput = ListFunctionsRequest;
export type ListFunctionsCommandOutput = ListFunctionsResponse & __MetadataBearer;

/**
 * <p>Returns a list of Lambda functions, with the version-specific configuration of each. Lambda returns up to 50
 *       functions per call.</p>
 *          <p>Set <code>FunctionVersion</code> to <code>ALL</code> to include all published versions of each function in
 *       addition to the unpublished version. To get more information about a function or version, use <a>GetFunction</a>.</p>
 */
export class ListFunctionsCommand extends $Command<
  ListFunctionsCommandInput,
  ListFunctionsCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFunctionsCommandInput) {
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
  ): Handler<ListFunctionsCommandInput, ListFunctionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "ListFunctionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFunctionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFunctionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFunctionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListFunctionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFunctionsCommandOutput> {
    return deserializeAws_restJson1ListFunctionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
