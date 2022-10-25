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
  GetFunctionEventInvokeConfigRequest,
  GetFunctionEventInvokeConfigRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetFunctionEventInvokeConfigCommand,
  serializeAws_restJson1GetFunctionEventInvokeConfigCommand,
} from "../protocols/Aws_restJson1";

export interface GetFunctionEventInvokeConfigCommandInput extends GetFunctionEventInvokeConfigRequest {}
export interface GetFunctionEventInvokeConfigCommandOutput extends FunctionEventInvokeConfig, __MetadataBearer {}

/**
 * <p>Retrieves the configuration for asynchronous invocation for a function, version, or alias.</p>
 *          <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetFunctionEventInvokeConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetFunctionEventInvokeConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetFunctionEventInvokeConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFunctionEventInvokeConfigCommandInput} for command's `input` shape.
 * @see {@link GetFunctionEventInvokeConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 */
export class GetFunctionEventInvokeConfigCommand extends $Command<
  GetFunctionEventInvokeConfigCommandInput,
  GetFunctionEventInvokeConfigCommandOutput,
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

  constructor(readonly input: GetFunctionEventInvokeConfigCommandInput) {
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
  ): Handler<GetFunctionEventInvokeConfigCommandInput, GetFunctionEventInvokeConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetFunctionEventInvokeConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "GetFunctionEventInvokeConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFunctionEventInvokeConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: FunctionEventInvokeConfigFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetFunctionEventInvokeConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetFunctionEventInvokeConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetFunctionEventInvokeConfigCommandOutput> {
    return deserializeAws_restJson1GetFunctionEventInvokeConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
