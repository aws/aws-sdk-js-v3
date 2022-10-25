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
  FunctionConfiguration,
  FunctionConfigurationFilterSensitiveLog,
  GetFunctionConfigurationRequest,
  GetFunctionConfigurationRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetFunctionConfigurationCommand,
  serializeAws_restJson1GetFunctionConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface GetFunctionConfigurationCommandInput extends GetFunctionConfigurationRequest {}
export interface GetFunctionConfigurationCommandOutput extends FunctionConfiguration, __MetadataBearer {}

/**
 * <p>Returns the version-specific settings of a Lambda function or version. The output includes only options that
 *       can vary between versions of a function. To modify these settings, use <a>UpdateFunctionConfiguration</a>.</p>
 *          <p>To get all of a function's details, including function-level settings, use <a>GetFunction</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetFunctionConfigurationCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetFunctionConfigurationCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetFunctionConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFunctionConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetFunctionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 */
export class GetFunctionConfigurationCommand extends $Command<
  GetFunctionConfigurationCommandInput,
  GetFunctionConfigurationCommandOutput,
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

  constructor(readonly input: GetFunctionConfigurationCommandInput) {
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
  ): Handler<GetFunctionConfigurationCommandInput, GetFunctionConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetFunctionConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "GetFunctionConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFunctionConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: FunctionConfigurationFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetFunctionConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetFunctionConfigurationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFunctionConfigurationCommandOutput> {
    return deserializeAws_restJson1GetFunctionConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
