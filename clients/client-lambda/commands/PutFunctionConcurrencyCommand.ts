import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { Concurrency, PutFunctionConcurrencyRequest } from "../models/models_0";
import {
  deserializeAws_restJson1PutFunctionConcurrencyCommand,
  serializeAws_restJson1PutFunctionConcurrencyCommand,
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

export type PutFunctionConcurrencyCommandInput = PutFunctionConcurrencyRequest;
export type PutFunctionConcurrencyCommandOutput = Concurrency & __MetadataBearer;

/**
 * <p>Sets the maximum number of simultaneous executions for a function, and reserves capacity for that concurrency
 *       level.</p>
 *          <p>Concurrency settings apply to the function as a whole, including all published versions and the unpublished
 *       version. Reserving concurrency both ensures that your function has capacity to process the specified number of
 *       events simultaneously, and prevents it from scaling beyond that level. Use <a>GetFunction</a> to see
 *       the current setting for a function.</p>
 *          <p>Use <a>GetAccountSettings</a> to see your Regional concurrency limit. You can reserve concurrency
 *       for as many functions as you like, as long as you leave at least 100 simultaneous executions unreserved for
 *       functions that aren't configured with a per-function limit. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html">Managing Concurrency</a>.</p>
 */
export class PutFunctionConcurrencyCommand extends $Command<
  PutFunctionConcurrencyCommandInput,
  PutFunctionConcurrencyCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutFunctionConcurrencyCommandInput) {
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
  ): Handler<PutFunctionConcurrencyCommandInput, PutFunctionConcurrencyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "PutFunctionConcurrencyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutFunctionConcurrencyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Concurrency.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutFunctionConcurrencyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutFunctionConcurrencyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutFunctionConcurrencyCommandOutput> {
    return deserializeAws_restJson1PutFunctionConcurrencyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
