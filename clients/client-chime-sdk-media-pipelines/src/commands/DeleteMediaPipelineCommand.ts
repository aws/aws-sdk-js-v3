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
import { DeleteMediaPipelineRequest, DeleteMediaPipelineRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteMediaPipelineCommand,
  serializeAws_restJson1DeleteMediaPipelineCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteMediaPipelineCommandInput extends DeleteMediaPipelineRequest {}
export interface DeleteMediaPipelineCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the media pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, DeleteMediaPipelineCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, DeleteMediaPipelineCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const command = new DeleteMediaPipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMediaPipelineCommandInput} for command's `input` shape.
 * @see {@link DeleteMediaPipelineCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMediaPipelinesClientResolvedConfig | config} for ChimeSDKMediaPipelinesClient's `config` shape.
 *
 */
export class DeleteMediaPipelineCommand extends $Command<
  DeleteMediaPipelineCommandInput,
  DeleteMediaPipelineCommandOutput,
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

  constructor(readonly input: DeleteMediaPipelineCommandInput) {
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
  ): Handler<DeleteMediaPipelineCommandInput, DeleteMediaPipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteMediaPipelineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMediaPipelinesClient";
    const commandName = "DeleteMediaPipelineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteMediaPipelineRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteMediaPipelineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteMediaPipelineCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMediaPipelineCommandOutput> {
    return deserializeAws_restJson1DeleteMediaPipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
