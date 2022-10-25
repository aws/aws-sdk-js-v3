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
  GetFunctionConcurrencyRequest,
  GetFunctionConcurrencyRequestFilterSensitiveLog,
  GetFunctionConcurrencyResponse,
  GetFunctionConcurrencyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetFunctionConcurrencyCommand,
  serializeAws_restJson1GetFunctionConcurrencyCommand,
} from "../protocols/Aws_restJson1";

export interface GetFunctionConcurrencyCommandInput extends GetFunctionConcurrencyRequest {}
export interface GetFunctionConcurrencyCommandOutput extends GetFunctionConcurrencyResponse, __MetadataBearer {}

/**
 * <p>Returns details about the reserved concurrency configuration for a function. To set a concurrency limit for a
 *       function, use <a>PutFunctionConcurrency</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetFunctionConcurrencyCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetFunctionConcurrencyCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetFunctionConcurrencyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFunctionConcurrencyCommandInput} for command's `input` shape.
 * @see {@link GetFunctionConcurrencyCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 */
export class GetFunctionConcurrencyCommand extends $Command<
  GetFunctionConcurrencyCommandInput,
  GetFunctionConcurrencyCommandOutput,
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

  constructor(readonly input: GetFunctionConcurrencyCommandInput) {
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
  ): Handler<GetFunctionConcurrencyCommandInput, GetFunctionConcurrencyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetFunctionConcurrencyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "GetFunctionConcurrencyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFunctionConcurrencyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetFunctionConcurrencyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetFunctionConcurrencyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetFunctionConcurrencyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFunctionConcurrencyCommandOutput> {
    return deserializeAws_restJson1GetFunctionConcurrencyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
