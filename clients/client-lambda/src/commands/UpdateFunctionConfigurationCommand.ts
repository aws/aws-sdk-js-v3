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
  UpdateFunctionConfigurationRequest,
  UpdateFunctionConfigurationRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateFunctionConfigurationCommand,
  serializeAws_restJson1UpdateFunctionConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateFunctionConfigurationCommandInput extends UpdateFunctionConfigurationRequest {}
export interface UpdateFunctionConfigurationCommandOutput extends FunctionConfiguration, __MetadataBearer {}

/**
 * <p>Modify the version-specific settings of a Lambda function.</p>
 *          <p>When you update a function, Lambda provisions an instance of the function and its supporting
 *       resources. If your function connects to a VPC, this process can take a minute. During this time, you can't modify
 *       the function, but you can still invoke it. The <code>LastUpdateStatus</code>, <code>LastUpdateStatusReason</code>,
 *       and <code>LastUpdateStatusReasonCode</code> fields in the response from <a>GetFunctionConfiguration</a>
 *       indicate when the update is complete and the function is processing events with the new configuration. For more
 *       information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Lambda
 *         function states</a>.</p>
 *          <p>These settings can vary between versions of a function and are locked when you publish a version. You can't
 *       modify the configuration of a published version, only the unpublished version.</p>
 *          <p>To configure function concurrency, use <a>PutFunctionConcurrency</a>. To grant invoke permissions
 *       to an Amazon Web Services account or Amazon Web Service, use <a>AddPermission</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, UpdateFunctionConfigurationCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, UpdateFunctionConfigurationCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new UpdateFunctionConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFunctionConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateFunctionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 */
export class UpdateFunctionConfigurationCommand extends $Command<
  UpdateFunctionConfigurationCommandInput,
  UpdateFunctionConfigurationCommandOutput,
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

  constructor(readonly input: UpdateFunctionConfigurationCommandInput) {
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
  ): Handler<UpdateFunctionConfigurationCommandInput, UpdateFunctionConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateFunctionConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "UpdateFunctionConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFunctionConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: FunctionConfigurationFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFunctionConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateFunctionConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateFunctionConfigurationCommandOutput> {
    return deserializeAws_restJson1UpdateFunctionConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
