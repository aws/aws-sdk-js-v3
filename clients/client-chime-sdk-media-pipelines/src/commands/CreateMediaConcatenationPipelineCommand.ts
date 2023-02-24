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
  ChimeSDKMediaPipelinesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMediaPipelinesClient";
import {
  CreateMediaConcatenationPipelineRequest,
  CreateMediaConcatenationPipelineRequestFilterSensitiveLog,
  CreateMediaConcatenationPipelineResponse,
  CreateMediaConcatenationPipelineResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateMediaConcatenationPipelineCommand,
  serializeAws_restJson1CreateMediaConcatenationPipelineCommand,
} from "../protocols/Aws_restJson1";

export interface CreateMediaConcatenationPipelineCommandInput extends CreateMediaConcatenationPipelineRequest {}
export interface CreateMediaConcatenationPipelineCommandOutput
  extends CreateMediaConcatenationPipelineResponse,
    __MetadataBearer {}

/**
 * <p>Creates a media concatenation pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, CreateMediaConcatenationPipelineCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, CreateMediaConcatenationPipelineCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const command = new CreateMediaConcatenationPipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMediaConcatenationPipelineCommandInput} for command's `input` shape.
 * @see {@link CreateMediaConcatenationPipelineCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMediaPipelinesClientResolvedConfig | config} for ChimeSDKMediaPipelinesClient's `config` shape.
 *
 */
export class CreateMediaConcatenationPipelineCommand extends $Command<
  CreateMediaConcatenationPipelineCommandInput,
  CreateMediaConcatenationPipelineCommandOutput,
  ChimeSDKMediaPipelinesClientResolvedConfig
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

  constructor(readonly input: CreateMediaConcatenationPipelineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKMediaPipelinesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMediaConcatenationPipelineCommandInput, CreateMediaConcatenationPipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateMediaConcatenationPipelineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMediaPipelinesClient";
    const commandName = "CreateMediaConcatenationPipelineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMediaConcatenationPipelineRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateMediaConcatenationPipelineResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateMediaConcatenationPipelineCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateMediaConcatenationPipelineCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateMediaConcatenationPipelineCommandOutput> {
    return deserializeAws_restJson1CreateMediaConcatenationPipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
