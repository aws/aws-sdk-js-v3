import {
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticTranscoderClient";
import { UpdatePipelineRequest, UpdatePipelineResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdatePipelineCommand,
  serializeAws_restJson1UpdatePipelineCommand,
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

export type UpdatePipelineCommandInput = UpdatePipelineRequest;
export type UpdatePipelineCommandOutput = UpdatePipelineResponse & __MetadataBearer;

/**
 * <p> Use the <code>UpdatePipeline</code> operation to update settings for a pipeline.</p>
 *         <important>
 *             <p>When you change pipeline settings, your changes take effect immediately.
 *             Jobs that you have already submitted and that Elastic Transcoder has not started to process are
 *             affected in addition to jobs that you submit after you change settings. </p>
 *          </important>
 */
export class UpdatePipelineCommand extends $Command<
  UpdatePipelineCommandInput,
  UpdatePipelineCommandOutput,
  ElasticTranscoderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdatePipelineCommandInput) {
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
  ): Handler<UpdatePipelineCommandInput, UpdatePipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticTranscoderClient";
    const commandName = "UpdatePipelineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePipelineRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdatePipelineResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePipelineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdatePipelineCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePipelineCommandOutput> {
    return deserializeAws_restJson1UpdatePipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
