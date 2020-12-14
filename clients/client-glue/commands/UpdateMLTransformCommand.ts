import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateMLTransformRequest, UpdateMLTransformResponse } from "../models/models_1";
import {
  deserializeAws_json1_1UpdateMLTransformCommand,
  serializeAws_json1_1UpdateMLTransformCommand,
} from "../protocols/Aws_json1_1";
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

export type UpdateMLTransformCommandInput = UpdateMLTransformRequest;
export type UpdateMLTransformCommandOutput = UpdateMLTransformResponse & __MetadataBearer;

/**
 * <p>Updates an existing machine learning transform. Call this operation to tune the algorithm parameters to achieve better results.</p>
 *
 *          <p>After calling this operation, you can call the <code>StartMLEvaluationTaskRun</code>
 *       operation to assess how well your new parameters achieved your goals (such as improving the
 *       quality of your machine learning transform, or making it more cost-effective).</p>
 */
export class UpdateMLTransformCommand extends $Command<
  UpdateMLTransformCommandInput,
  UpdateMLTransformCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateMLTransformCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateMLTransformCommandInput, UpdateMLTransformCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "UpdateMLTransformCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateMLTransformRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateMLTransformResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateMLTransformCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateMLTransformCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateMLTransformCommandOutput> {
    return deserializeAws_json1_1UpdateMLTransformCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
