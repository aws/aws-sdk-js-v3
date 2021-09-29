import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { InvokeAsyncRequest, InvokeAsyncResponse } from "../models/models_0";
import {
  deserializeAws_restJson1InvokeAsyncCommand,
  serializeAws_restJson1InvokeAsyncCommand,
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

type InvokeAsyncCommandInputType = Omit<InvokeAsyncRequest, "InvokeArgs"> & {
  /**
   * For *`InvokeAsyncRequest["InvokeArgs"]`*, see {@link InvokeAsyncRequest.InvokeArgs}.
   */
  InvokeArgs: InvokeAsyncRequest["InvokeArgs"] | string | Uint8Array | Buffer;
};
/**
 * This interface extends from `InvokeAsyncRequest` interface. There are more parameters than `InvokeArgs` defined in {@link InvokeAsyncRequest}
 */
export interface InvokeAsyncCommandInput extends InvokeAsyncCommandInputType {}
export interface InvokeAsyncCommandOutput extends InvokeAsyncResponse, __MetadataBearer {}

/**
 * @deprecated
 *
 * <important>
 *             <p>For asynchronous function invocation, use <a>Invoke</a>.</p>
 *          </important>
 *          <p>Invokes a function asynchronously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, InvokeAsyncCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, InvokeAsyncCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new InvokeAsyncCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InvokeAsyncCommandInput} for command's `input` shape.
 * @see {@link InvokeAsyncCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class InvokeAsyncCommand extends $Command<
  InvokeAsyncCommandInput,
  InvokeAsyncCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: InvokeAsyncCommandInput) {
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
  ): Handler<InvokeAsyncCommandInput, InvokeAsyncCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "InvokeAsyncCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InvokeAsyncRequest.filterSensitiveLog,
      outputFilterSensitiveLog: InvokeAsyncResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InvokeAsyncCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1InvokeAsyncCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InvokeAsyncCommandOutput> {
    return deserializeAws_restJson1InvokeAsyncCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
