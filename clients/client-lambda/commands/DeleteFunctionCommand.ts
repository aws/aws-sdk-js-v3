import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { DeleteFunctionRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteFunctionCommand,
  serializeAws_restJson1DeleteFunctionCommand,
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

export type DeleteFunctionCommandInput = DeleteFunctionRequest;
export type DeleteFunctionCommandOutput = __MetadataBearer;

/**
 * <p>Deletes a Lambda function. To delete a specific function version, use the <code>Qualifier</code> parameter.
 *       Otherwise, all versions and aliases are deleted.</p>
 *
 *          <p>To delete Lambda event source mappings that invoke a function, use <a>DeleteEventSourceMapping</a>.
 *       For AWS services and resources that invoke your function directly, delete the trigger in the service where you
 *       originally configured it.</p>
 */
export class DeleteFunctionCommand extends $Command<
  DeleteFunctionCommandInput,
  DeleteFunctionCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFunctionCommandInput) {
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
  ): Handler<DeleteFunctionCommandInput, DeleteFunctionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "DeleteFunctionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFunctionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteFunctionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteFunctionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFunctionCommandOutput> {
    return deserializeAws_restJson1DeleteFunctionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
