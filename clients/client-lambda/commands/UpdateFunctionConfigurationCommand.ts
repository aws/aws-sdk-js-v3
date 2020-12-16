import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { FunctionConfiguration, UpdateFunctionConfigurationRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateFunctionConfigurationCommand,
  serializeAws_restJson1UpdateFunctionConfigurationCommand,
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

export type UpdateFunctionConfigurationCommandInput = UpdateFunctionConfigurationRequest;
export type UpdateFunctionConfigurationCommandOutput = FunctionConfiguration & __MetadataBearer;

/**
 * <p>Modify the version-specific settings of a Lambda function.</p>
 *
 *          <p>When you update a function, Lambda provisions an instance of the function and its supporting resources. If
 *       your function connects to a VPC, this process can take a minute. During this time, you can't modify the function,
 *       but you can still invoke it. The <code>LastUpdateStatus</code>, <code>LastUpdateStatusReason</code>, and
 *         <code>LastUpdateStatusReasonCode</code> fields in the response from <a>GetFunctionConfiguration</a>
 *       indicate when the update is complete and the function is processing events with the new configuration. For more
 *       information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Function
 *       States</a>.</p>
 *
 *          <p>These settings can vary between versions of a function and are locked when you publish a version. You can't
 *       modify the configuration of a published version, only the unpublished version.</p>
 *
 *          <p>To configure function concurrency, use <a>PutFunctionConcurrency</a>. To grant invoke permissions
 *       to an account or AWS service, use <a>AddPermission</a>.</p>
 */
export class UpdateFunctionConfigurationCommand extends $Command<
  UpdateFunctionConfigurationCommandInput,
  UpdateFunctionConfigurationCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "UpdateFunctionConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFunctionConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: FunctionConfiguration.filterSensitiveLog,
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
