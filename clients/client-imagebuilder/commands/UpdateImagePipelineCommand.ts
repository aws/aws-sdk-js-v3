import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { UpdateImagePipelineRequest, UpdateImagePipelineResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateImagePipelineCommand,
  serializeAws_restJson1UpdateImagePipelineCommand,
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

export type UpdateImagePipelineCommandInput = UpdateImagePipelineRequest;
export type UpdateImagePipelineCommandOutput = UpdateImagePipelineResponse & __MetadataBearer;

/**
 * <p> Updates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images. </p>
 */
export class UpdateImagePipelineCommand extends $Command<
  UpdateImagePipelineCommandInput,
  UpdateImagePipelineCommandOutput,
  ImagebuilderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateImagePipelineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateImagePipelineCommandInput, UpdateImagePipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "UpdateImagePipelineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateImagePipelineRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateImagePipelineResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateImagePipelineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateImagePipelineCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateImagePipelineCommandOutput> {
    return deserializeAws_restJson1UpdateImagePipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
