import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { FunctionEventInvokeConfig, PutFunctionEventInvokeConfigRequest } from "../models/models_0";
import {
  deserializeAws_restJson1PutFunctionEventInvokeConfigCommand,
  serializeAws_restJson1PutFunctionEventInvokeConfigCommand,
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

export type PutFunctionEventInvokeConfigCommandInput = PutFunctionEventInvokeConfigRequest;
export type PutFunctionEventInvokeConfigCommandOutput = FunctionEventInvokeConfig & __MetadataBearer;

/**
 * <p>Configures options for <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous
 *         invocation</a> on a function, version, or alias. If a configuration already exists for a function, version,
 *       or alias, this operation overwrites it. If you exclude any settings, they are removed. To set one option without
 *       affecting existing settings for other options, use <a>UpdateFunctionEventInvokeConfig</a>.</p>
 *          <p>By default, Lambda retries an asynchronous invocation twice if the function returns an error. It retains
 *       events in a queue for up to six hours. When an event fails all processing attempts or stays in the asynchronous
 *       invocation queue for too long, Lambda discards it. To retain discarded events, configure a dead-letter queue with
 *         <a>UpdateFunctionConfiguration</a>.</p>
 *          <p>To send an invocation record to a queue, topic, function, or event bus, specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations">destination</a>. You can configure separate destinations for successful invocations (on-success) and events
 *       that fail all processing attempts (on-failure). You can configure destinations in addition to or instead of a
 *       dead-letter queue.</p>
 */
export class PutFunctionEventInvokeConfigCommand extends $Command<
  PutFunctionEventInvokeConfigCommandInput,
  PutFunctionEventInvokeConfigCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutFunctionEventInvokeConfigCommandInput) {
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
  ): Handler<PutFunctionEventInvokeConfigCommandInput, PutFunctionEventInvokeConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "PutFunctionEventInvokeConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutFunctionEventInvokeConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: FunctionEventInvokeConfig.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutFunctionEventInvokeConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutFunctionEventInvokeConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutFunctionEventInvokeConfigCommandOutput> {
    return deserializeAws_restJson1PutFunctionEventInvokeConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
