// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import {
  InvocationRequest,
  InvocationRequestFilterSensitiveLog,
  InvocationResponse,
  InvocationResponseFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_restJson1InvokeCommand, serializeAws_restJson1InvokeCommand } from "../protocols/Aws_restJson1";

export interface InvokeCommandInput extends InvocationRequest {}
export interface InvokeCommandOutput extends InvocationResponse, __MetadataBearer {}

/**
 * <p>Invokes a Lambda function. You can invoke a function synchronously (and wait for the response), or
 *       asynchronously. To invoke a function asynchronously, set <code>InvocationType</code> to <code>Event</code>.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-sync.html">synchronous invocation</a>,
 *       details about the function response, including errors, are included in the response body and headers. For either
 *       invocation type, you can find more information in the <a href="https://docs.aws.amazon.com/lambda/latest/dg/monitoring-functions.html">execution log</a> and <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-x-ray.html">trace</a>.</p>
 *          <p>When an error occurs, your function may be invoked multiple times. Retry behavior varies by error type,
 *       client, event source, and invocation type. For example, if you invoke a function asynchronously and it returns an
 *       error, Lambda executes the function up to two more times. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-retries.html">Error handling and automatic retries in
 *           Lambda</a>.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous invocation</a>,
 *       Lambda adds events to a queue before sending them to your function. If your function does not have enough capacity
 *       to keep up with the queue, events may be lost. Occasionally, your function may receive the same event multiple
 *       times, even if no error occurs. To retain events that were not processed, configure your function with a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq">dead-letter queue</a>.</p>
 *          <p>The status code in the API response doesn't reflect function errors. Error codes are reserved for errors that
 *       prevent your function from executing, such as permissions errors, <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">quota</a> errors, or issues with your function's code and
 *       configuration. For example, Lambda returns <code>TooManyRequestsException</code> if running the
 *       function would cause you to exceed a concurrency limit at either the account level
 *         (<code>ConcurrentInvocationLimitExceeded</code>) or function level
 *         (<code>ReservedFunctionConcurrentInvocationLimitExceeded</code>).</p>
 *          <p>For functions with a long timeout, your client might disconnect during synchronous invocation while it waits
 *       for a response. Configure your HTTP client, SDK, firewall, proxy, or operating system to allow for long
 *       connections with timeout or keep-alive settings.</p>
 *          <p>This operation requires permission for the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html">lambda:InvokeFunction</a> action. For details on how to set up
 *       permissions for cross-account invocations, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html#permissions-resource-xaccountinvoke">Granting function
 *       access to other accounts</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, InvokeCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, InvokeCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new InvokeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InvokeCommandInput} for command's `input` shape.
 * @see {@link InvokeCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 */
export class InvokeCommand extends $Command<InvokeCommandInput, InvokeCommandOutput, LambdaClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: InvokeCommandInput) {
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
  ): Handler<InvokeCommandInput, InvokeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, InvokeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "InvokeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InvocationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: InvocationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InvokeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1InvokeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InvokeCommandOutput> {
    return deserializeAws_restJson1InvokeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
