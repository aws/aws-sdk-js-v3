// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  ChimeSDKMessagingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMessagingClient";
import {
  CreateChannelFlowRequest,
  CreateChannelFlowRequestFilterSensitiveLog,
  CreateChannelFlowResponse,
} from "../models/models_0";
import { de_CreateChannelFlowCommand, se_CreateChannelFlowCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateChannelFlowCommand}.
 */
export interface CreateChannelFlowCommandInput extends CreateChannelFlowRequest {}
/**
 * @public
 *
 * The output of {@link CreateChannelFlowCommand}.
 */
export interface CreateChannelFlowCommandOutput extends CreateChannelFlowResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a channel flow, a container for processors. Processors are AWS Lambda functions
 *          that perform actions on chat messages, such as stripping out profanity. You can associate
 *          channel flows with channels, and the processors in the channel flow then take action on all
 *          messages sent to that channel. This is a developer API.</p>
 *          <p>Channel flows process the following items:</p>
 *          <ol>
 *             <li>
 *                <p>New and updated messages</p>
 *             </li>
 *             <li>
 *                <p>Persistent and non-persistent messages</p>
 *             </li>
 *             <li>
 *                <p>The Standard message type</p>
 *             </li>
 *          </ol>
 *          <note>
 *             <p>Channel flows don't process Control or System messages. For more information about the message types provided by Chime SDK messaging, refer to
 *            <a href="https://docs.aws.amazon.com/chime/latest/dg/using-the-messaging-sdk.html#msg-types">Message types</a> in the <i>Amazon Chime developer guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, CreateChannelFlowCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, CreateChannelFlowCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // CreateChannelFlowRequest
 *   AppInstanceArn: "STRING_VALUE", // required
 *   Processors: [ // ProcessorList // required
 *     { // Processor
 *       Name: "STRING_VALUE", // required
 *       Configuration: { // ProcessorConfiguration
 *         Lambda: { // LambdaConfiguration
 *           ResourceArn: "STRING_VALUE", // required
 *           InvocationType: "ASYNC", // required
 *         },
 *       },
 *       ExecutionOrder: Number("int"), // required
 *       FallbackAction: "CONTINUE" || "ABORT", // required
 *     },
 *   ],
 *   Name: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ClientRequestToken: "STRING_VALUE", // required
 * };
 * const command = new CreateChannelFlowCommand(input);
 * const response = await client.send(command);
 * // { // CreateChannelFlowResponse
 * //   ChannelFlowArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateChannelFlowCommandInput - {@link CreateChannelFlowCommandInput}
 * @returns {@link CreateChannelFlowCommandOutput}
 * @see {@link CreateChannelFlowCommandInput} for command's `input` shape.
 * @see {@link CreateChannelFlowCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
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
 * @throws {@link ChimeSDKMessagingServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKMessaging service.</p>
 *
 */
export class CreateChannelFlowCommand extends $Command<
  CreateChannelFlowCommandInput,
  CreateChannelFlowCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: CreateChannelFlowCommandInput) {
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
  ): Handler<CreateChannelFlowCommandInput, CreateChannelFlowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateChannelFlowCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMessagingClient";
    const commandName = "CreateChannelFlowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateChannelFlowRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ChimeMessagingService",
        operation: "CreateChannelFlow",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateChannelFlowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateChannelFlowCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateChannelFlowCommandOutput> {
    return de_CreateChannelFlowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
