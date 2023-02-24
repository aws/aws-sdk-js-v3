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
  ListMediaCapturePipelinesRequest,
  ListMediaCapturePipelinesRequestFilterSensitiveLog,
  ListMediaCapturePipelinesResponse,
  ListMediaCapturePipelinesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListMediaCapturePipelinesCommand,
  serializeAws_restJson1ListMediaCapturePipelinesCommand,
} from "../protocols/Aws_restJson1";

export interface ListMediaCapturePipelinesCommandInput extends ListMediaCapturePipelinesRequest {}
export interface ListMediaCapturePipelinesCommandOutput extends ListMediaCapturePipelinesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of media pipelines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, ListMediaCapturePipelinesCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, ListMediaCapturePipelinesCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const command = new ListMediaCapturePipelinesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMediaCapturePipelinesCommandInput} for command's `input` shape.
 * @see {@link ListMediaCapturePipelinesCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMediaPipelinesClientResolvedConfig | config} for ChimeSDKMediaPipelinesClient's `config` shape.
 *
 */
export class ListMediaCapturePipelinesCommand extends $Command<
  ListMediaCapturePipelinesCommandInput,
  ListMediaCapturePipelinesCommandOutput,
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

  constructor(readonly input: ListMediaCapturePipelinesCommandInput) {
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
  ): Handler<ListMediaCapturePipelinesCommandInput, ListMediaCapturePipelinesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMediaCapturePipelinesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMediaPipelinesClient";
    const commandName = "ListMediaCapturePipelinesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMediaCapturePipelinesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListMediaCapturePipelinesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMediaCapturePipelinesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListMediaCapturePipelinesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListMediaCapturePipelinesCommandOutput> {
    return deserializeAws_restJson1ListMediaCapturePipelinesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
