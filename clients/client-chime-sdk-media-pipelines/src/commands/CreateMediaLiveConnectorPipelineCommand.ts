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
  CreateMediaLiveConnectorPipelineRequest,
  CreateMediaLiveConnectorPipelineRequestFilterSensitiveLog,
  CreateMediaLiveConnectorPipelineResponse,
  CreateMediaLiveConnectorPipelineResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateMediaLiveConnectorPipelineCommand,
  serializeAws_restJson1CreateMediaLiveConnectorPipelineCommand,
} from "../protocols/Aws_restJson1";

export interface CreateMediaLiveConnectorPipelineCommandInput extends CreateMediaLiveConnectorPipelineRequest {}
export interface CreateMediaLiveConnectorPipelineCommandOutput
  extends CreateMediaLiveConnectorPipelineResponse,
    __MetadataBearer {}

/**
 * <p>Creates a streaming media pipeline in an Amazon Chime SDK meeting.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, CreateMediaLiveConnectorPipelineCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, CreateMediaLiveConnectorPipelineCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const command = new CreateMediaLiveConnectorPipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMediaLiveConnectorPipelineCommandInput} for command's `input` shape.
 * @see {@link CreateMediaLiveConnectorPipelineCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMediaPipelinesClientResolvedConfig | config} for ChimeSDKMediaPipelinesClient's `config` shape.
 *
 */
export class CreateMediaLiveConnectorPipelineCommand extends $Command<
  CreateMediaLiveConnectorPipelineCommandInput,
  CreateMediaLiveConnectorPipelineCommandOutput,
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

  constructor(readonly input: CreateMediaLiveConnectorPipelineCommandInput) {
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
  ): Handler<CreateMediaLiveConnectorPipelineCommandInput, CreateMediaLiveConnectorPipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateMediaLiveConnectorPipelineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMediaPipelinesClient";
    const commandName = "CreateMediaLiveConnectorPipelineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMediaLiveConnectorPipelineRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateMediaLiveConnectorPipelineResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateMediaLiveConnectorPipelineCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateMediaLiveConnectorPipelineCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateMediaLiveConnectorPipelineCommandOutput> {
    return deserializeAws_restJson1CreateMediaLiveConnectorPipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
