import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { GetFunctionRequest, GetFunctionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetFunctionCommand,
  serializeAws_restJson1GetFunctionCommand,
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

export interface GetFunctionCommandInput extends GetFunctionRequest {}
export interface GetFunctionCommandOutput extends GetFunctionResponse, __MetadataBearer {}

/**
 * <p>Returns information about the function or function version, with a link to download the deployment package
 *       that's valid for 10 minutes. If you specify a function version, only details that are specific to that version are
 *       returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetFunctionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetFunctionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFunctionCommandInput} for command's `input` shape.
 * @see {@link GetFunctionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetFunctionCommand extends $Command<
  GetFunctionCommandInput,
  GetFunctionCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetFunctionCommandInput) {
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
  ): Handler<GetFunctionCommandInput, GetFunctionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "GetFunctionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFunctionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetFunctionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetFunctionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetFunctionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFunctionCommandOutput> {
    return deserializeAws_restJson1GetFunctionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
