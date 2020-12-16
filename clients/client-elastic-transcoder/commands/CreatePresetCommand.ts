import {
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticTranscoderClient";
import { CreatePresetRequest, CreatePresetResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreatePresetCommand,
  serializeAws_restJson1CreatePresetCommand,
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

export type CreatePresetCommandInput = CreatePresetRequest;
export type CreatePresetCommandOutput = CreatePresetResponse & __MetadataBearer;

/**
 * <p>The CreatePreset operation creates a preset with settings that you specify.</p>
 *         <important>
 *             <p>Elastic Transcoder checks the CreatePreset settings to ensure that they meet Elastic Transcoder requirements
 *             and to determine whether they comply with H.264 standards. If your settings are not
 *             valid for Elastic Transcoder, Elastic Transcoder returns an HTTP 400 response (<code>ValidationException</code>) and
 *             does not create the preset. If the settings are valid for Elastic Transcoder but aren't strictly
 *             compliant with the H.264 standard, Elastic Transcoder creates the preset and returns a warning message
 *             in the response. This helps you determine whether your settings comply with the H.264
 *             standard while giving you greater flexibility with respect to the video that Elastic Transcoder
 *             produces.</p>
 *          </important>
 *         <p>Elastic Transcoder uses the H.264 video-compression format. For more information, see the International
 *             Telecommunication Union publication <i>Recommendation ITU-T H.264: Advanced video coding
 *                 for generic audiovisual services</i>.</p>
 */
export class CreatePresetCommand extends $Command<
  CreatePresetCommandInput,
  CreatePresetCommandOutput,
  ElasticTranscoderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePresetCommandInput) {
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
  ): Handler<CreatePresetCommandInput, CreatePresetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticTranscoderClient";
    const commandName = "CreatePresetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePresetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePresetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePresetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreatePresetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePresetCommandOutput> {
    return deserializeAws_restJson1CreatePresetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
