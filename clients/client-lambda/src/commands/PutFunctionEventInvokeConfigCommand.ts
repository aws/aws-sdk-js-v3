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
  FunctionEventInvokeConfig,
  FunctionEventInvokeConfigFilterSensitiveLog,
  PutFunctionEventInvokeConfigRequest,
  PutFunctionEventInvokeConfigRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutFunctionEventInvokeConfigCommand,
  serializeAws_restJson1PutFunctionEventInvokeConfigCommand,
} from "../protocols/Aws_restJson1";

export interface PutFunctionEventInvokeConfigCommandInput extends PutFunctionEventInvokeConfigRequest {}
export interface PutFunctionEventInvokeConfigCommandOutput extends FunctionEventInvokeConfig, __MetadataBearer {}

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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PutFunctionEventInvokeConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PutFunctionEventInvokeConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new PutFunctionEventInvokeConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutFunctionEventInvokeConfigCommandInput} for command's `input` shape.
 * @see {@link PutFunctionEventInvokeConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 */
export class PutFunctionEventInvokeConfigCommand extends $Command<
  PutFunctionEventInvokeConfigCommandInput,
  PutFunctionEventInvokeConfigCommandOutput,
  LambdaClientResolvedConfig
> {
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutFunctionEventInvokeConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "PutFunctionEventInvokeConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutFunctionEventInvokeConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: FunctionEventInvokeConfigFilterSensitiveLog,
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
