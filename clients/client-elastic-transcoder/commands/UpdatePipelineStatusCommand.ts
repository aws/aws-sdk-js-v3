import {
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticTranscoderClient";
import { UpdatePipelineStatusRequest, UpdatePipelineStatusResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdatePipelineStatusCommand,
  serializeAws_restJson1UpdatePipelineStatusCommand,
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

export type UpdatePipelineStatusCommandInput = UpdatePipelineStatusRequest;
export type UpdatePipelineStatusCommandOutput = UpdatePipelineStatusResponse & __MetadataBearer;

/**
 * <p>The UpdatePipelineStatus operation pauses or reactivates a pipeline, so that the pipeline
 *             stops or restarts the processing of jobs.</p>
 *         <p>Changing the pipeline status is useful if you want to cancel one or more jobs. You can't
 *             cancel jobs after Elastic Transcoder has started processing them; if you pause the pipeline to which
 *             you submitted the jobs, you have more time to get the job IDs for the jobs that you want
 *             to cancel, and to send a <a>CancelJob</a> request. </p>
 */
export class UpdatePipelineStatusCommand extends $Command<
  UpdatePipelineStatusCommandInput,
  UpdatePipelineStatusCommandOutput,
  ElasticTranscoderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdatePipelineStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticTranscoderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePipelineStatusCommandInput, UpdatePipelineStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticTranscoderClient";
    const commandName = "UpdatePipelineStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePipelineStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdatePipelineStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePipelineStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdatePipelineStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePipelineStatusCommandOutput> {
    return deserializeAws_restJson1UpdatePipelineStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
