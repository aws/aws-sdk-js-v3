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

import {
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticTranscoderClient";
import {
  CreatePresetRequest,
  CreatePresetRequestFilterSensitiveLog,
  CreatePresetResponse,
  CreatePresetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreatePresetCommand,
  serializeAws_restJson1CreatePresetCommand,
} from "../protocols/Aws_restJson1";

export interface CreatePresetCommandInput extends CreatePresetRequest {}
export interface CreatePresetCommandOutput extends CreatePresetResponse, __MetadataBearer {}

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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, CreatePresetCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, CreatePresetCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new CreatePresetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePresetCommandInput} for command's `input` shape.
 * @see {@link CreatePresetCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for ElasticTranscoderClient's `config` shape.
 *
 */
export class CreatePresetCommand extends $Command<
  CreatePresetCommandInput,
  CreatePresetCommandOutput,
  ElasticTranscoderClientResolvedConfig
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
    this.middlewareStack.use(getEndpointPlugin(configuration, CreatePresetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticTranscoderClient";
    const commandName = "CreatePresetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePresetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreatePresetResponseFilterSensitiveLog,
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
