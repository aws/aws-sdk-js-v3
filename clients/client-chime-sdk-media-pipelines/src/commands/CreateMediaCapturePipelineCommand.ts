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
  CreateMediaCapturePipelineRequest,
  CreateMediaCapturePipelineRequestFilterSensitiveLog,
  CreateMediaCapturePipelineResponse,
  CreateMediaCapturePipelineResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateMediaCapturePipelineCommand,
  serializeAws_restJson1CreateMediaCapturePipelineCommand,
} from "../protocols/Aws_restJson1";

export interface CreateMediaCapturePipelineCommandInput extends CreateMediaCapturePipelineRequest {}
export interface CreateMediaCapturePipelineCommandOutput extends CreateMediaCapturePipelineResponse, __MetadataBearer {}

/**
 * <p>Creates a media pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, CreateMediaCapturePipelineCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, CreateMediaCapturePipelineCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const command = new CreateMediaCapturePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMediaCapturePipelineCommandInput} for command's `input` shape.
 * @see {@link CreateMediaCapturePipelineCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMediaPipelinesClientResolvedConfig | config} for ChimeSDKMediaPipelinesClient's `config` shape.
 *
 */
export class CreateMediaCapturePipelineCommand extends $Command<
  CreateMediaCapturePipelineCommandInput,
  CreateMediaCapturePipelineCommandOutput,
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

  constructor(readonly input: CreateMediaCapturePipelineCommandInput) {
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
  ): Handler<CreateMediaCapturePipelineCommandInput, CreateMediaCapturePipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateMediaCapturePipelineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMediaPipelinesClient";
    const commandName = "CreateMediaCapturePipelineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMediaCapturePipelineRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateMediaCapturePipelineResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateMediaCapturePipelineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateMediaCapturePipelineCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateMediaCapturePipelineCommandOutput> {
    return deserializeAws_restJson1CreateMediaCapturePipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
