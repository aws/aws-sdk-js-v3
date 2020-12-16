import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteMLTransformRequest, DeleteMLTransformResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteMLTransformCommand,
  serializeAws_json1_1DeleteMLTransformCommand,
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

export type DeleteMLTransformCommandInput = DeleteMLTransformRequest;
export type DeleteMLTransformCommandOutput = DeleteMLTransformResponse & __MetadataBearer;

/**
 * <p>Deletes an AWS Glue machine learning transform. Machine learning transforms are a special
 *       type of transform that use machine learning to learn the details of the transformation to be
 *       performed by learning from examples provided by humans. These transformations are then saved
 *       by AWS Glue. If you no longer need a transform, you can delete it by calling
 *         <code>DeleteMLTransforms</code>. However, any AWS Glue jobs that still reference the deleted
 *       transform will no longer succeed.</p>
 */
export class DeleteMLTransformCommand extends $Command<
  DeleteMLTransformCommandInput,
  DeleteMLTransformCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteMLTransformCommandInput) {
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
  ): Handler<DeleteMLTransformCommandInput, DeleteMLTransformCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "DeleteMLTransformCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteMLTransformRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteMLTransformResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteMLTransformCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteMLTransformCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMLTransformCommandOutput> {
    return deserializeAws_json1_1DeleteMLTransformCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
