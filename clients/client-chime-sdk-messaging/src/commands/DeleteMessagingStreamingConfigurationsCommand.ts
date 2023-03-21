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
  ChimeSDKMessagingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMessagingClient";
import {
  DeleteMessagingStreamingConfigurationsRequest,
  DeleteMessagingStreamingConfigurationsRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteMessagingStreamingConfigurationsCommand,
  serializeAws_restJson1DeleteMessagingStreamingConfigurationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link DeleteMessagingStreamingConfigurationsCommand}.
 */
export interface DeleteMessagingStreamingConfigurationsCommandInput
  extends DeleteMessagingStreamingConfigurationsRequest {}
/**
 * The output of {@link DeleteMessagingStreamingConfigurationsCommand}.
 */
export interface DeleteMessagingStreamingConfigurationsCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the streaming configurations for an <code>AppInstance</code>. For more information, see
 *          <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/streaming-export.html">Streaming messaging data</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, DeleteMessagingStreamingConfigurationsCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, DeleteMessagingStreamingConfigurationsCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const command = new DeleteMessagingStreamingConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMessagingStreamingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DeleteMessagingStreamingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 *
 */
export class DeleteMessagingStreamingConfigurationsCommand extends $Command<
  DeleteMessagingStreamingConfigurationsCommandInput,
  DeleteMessagingStreamingConfigurationsCommandOutput,
  ChimeSDKMessagingClientResolvedConfig
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

  constructor(readonly input: DeleteMessagingStreamingConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKMessagingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteMessagingStreamingConfigurationsCommandInput, DeleteMessagingStreamingConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteMessagingStreamingConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMessagingClient";
    const commandName = "DeleteMessagingStreamingConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteMessagingStreamingConfigurationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteMessagingStreamingConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteMessagingStreamingConfigurationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteMessagingStreamingConfigurationsCommandOutput> {
    return deserializeAws_restJson1DeleteMessagingStreamingConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
