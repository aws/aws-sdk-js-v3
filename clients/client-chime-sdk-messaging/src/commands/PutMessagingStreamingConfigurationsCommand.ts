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
  PutMessagingStreamingConfigurationsRequest,
  PutMessagingStreamingConfigurationsRequestFilterSensitiveLog,
  PutMessagingStreamingConfigurationsResponse,
  PutMessagingStreamingConfigurationsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutMessagingStreamingConfigurationsCommand,
  serializeAws_restJson1PutMessagingStreamingConfigurationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link PutMessagingStreamingConfigurationsCommand}.
 */
export interface PutMessagingStreamingConfigurationsCommandInput extends PutMessagingStreamingConfigurationsRequest {}
/**
 * The output of {@link PutMessagingStreamingConfigurationsCommand}.
 */
export interface PutMessagingStreamingConfigurationsCommandOutput
  extends PutMessagingStreamingConfigurationsResponse,
    __MetadataBearer {}

/**
 * <p>Sets the data streaming configuration for an <code>AppInstance</code>. For more information, see
 *          <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/streaming-export.html">Streaming messaging data</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, PutMessagingStreamingConfigurationsCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, PutMessagingStreamingConfigurationsCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const command = new PutMessagingStreamingConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutMessagingStreamingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link PutMessagingStreamingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
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
export class PutMessagingStreamingConfigurationsCommand extends $Command<
  PutMessagingStreamingConfigurationsCommandInput,
  PutMessagingStreamingConfigurationsCommandOutput,
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

  constructor(readonly input: PutMessagingStreamingConfigurationsCommandInput) {
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
  ): Handler<PutMessagingStreamingConfigurationsCommandInput, PutMessagingStreamingConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutMessagingStreamingConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMessagingClient";
    const commandName = "PutMessagingStreamingConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutMessagingStreamingConfigurationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutMessagingStreamingConfigurationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutMessagingStreamingConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutMessagingStreamingConfigurationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutMessagingStreamingConfigurationsCommandOutput> {
    return deserializeAws_restJson1PutMessagingStreamingConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
