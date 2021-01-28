import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetMLTransformRequest, GetMLTransformResponse } from "../models/models_1";
import {
  deserializeAws_json1_1GetMLTransformCommand,
  serializeAws_json1_1GetMLTransformCommand,
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

export type GetMLTransformCommandInput = GetMLTransformRequest;
export type GetMLTransformCommandOutput = GetMLTransformResponse & __MetadataBearer;

/**
 * <p>Gets an AWS Glue machine learning transform artifact and all its corresponding metadata.
 *       Machine learning transforms are a special type of transform that use machine learning to learn
 *       the details of the transformation to be performed by learning from examples provided by
 *       humans. These transformations are then saved by AWS Glue. You can retrieve their metadata by
 *       calling <code>GetMLTransform</code>.</p>
 */
export class GetMLTransformCommand extends $Command<
  GetMLTransformCommandInput,
  GetMLTransformCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMLTransformCommandInput) {
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
  ): Handler<GetMLTransformCommandInput, GetMLTransformCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetMLTransformCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMLTransformRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetMLTransformResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMLTransformCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetMLTransformCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMLTransformCommandOutput> {
    return deserializeAws_json1_1GetMLTransformCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
