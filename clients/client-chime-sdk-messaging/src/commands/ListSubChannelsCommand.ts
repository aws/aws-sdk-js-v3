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
} from "@smithy/types";

import {
  ChimeSDKMessagingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMessagingClient";
import {
  ListSubChannelsRequest,
  ListSubChannelsRequestFilterSensitiveLog,
  ListSubChannelsResponse,
  ListSubChannelsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListSubChannelsCommand, se_ListSubChannelsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSubChannelsCommand}.
 */
export interface ListSubChannelsCommandInput extends ListSubChannelsRequest {}
/**
 * @public
 *
 * The output of {@link ListSubChannelsCommand}.
 */
export interface ListSubChannelsCommandOutput extends ListSubChannelsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all the SubChannels in an elastic channel when given a channel ID. Available only to the app instance admins and channel moderators of elastic channels.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, ListSubChannelsCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, ListSubChannelsCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // ListSubChannelsRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   ChimeBearer: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSubChannelsCommand(input);
 * const response = await client.send(command);
 * // { // ListSubChannelsResponse
 * //   ChannelArn: "STRING_VALUE",
 * //   SubChannels: [ // SubChannelSummaryList
 * //     { // SubChannelSummary
 * //       SubChannelId: "STRING_VALUE",
 * //       MembershipCount: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSubChannelsCommandInput - {@link ListSubChannelsCommandInput}
 * @returns {@link ListSubChannelsCommandOutput}
 * @see {@link ListSubChannelsCommandInput} for command's `input` shape.
 * @see {@link ListSubChannelsCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
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
 * @throws {@link ChimeSDKMessagingServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKMessaging service.</p>
 *
 */
export class ListSubChannelsCommand extends $Command<
  ListSubChannelsCommandInput,
  ListSubChannelsCommandOutput,
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
  constructor(readonly input: ListSubChannelsCommandInput) {
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
  ): Handler<ListSubChannelsCommandInput, ListSubChannelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSubChannelsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMessagingClient";
    const commandName = "ListSubChannelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSubChannelsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListSubChannelsResponseFilterSensitiveLog,
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
  private serialize(input: ListSubChannelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSubChannelsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSubChannelsCommandOutput> {
    return de_ListSubChannelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
