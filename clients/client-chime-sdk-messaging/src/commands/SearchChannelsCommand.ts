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
  SearchChannelsRequest,
  SearchChannelsRequestFilterSensitiveLog,
  SearchChannelsResponse,
  SearchChannelsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_SearchChannelsCommand, se_SearchChannelsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchChannelsCommand}.
 */
export interface SearchChannelsCommandInput extends SearchChannelsRequest {}
/**
 * @public
 *
 * The output of {@link SearchChannelsCommand}.
 */
export interface SearchChannelsCommandOutput extends SearchChannelsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Allows the <code>ChimeBearer</code> to search channels by channel members. Users or bots can search
 *          across the channels that they belong to. Users in the <code>AppInstanceAdmin</code> role can search across
 *          all channels.</p>
 *          <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *          ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in
 *          the header.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, SearchChannelsCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, SearchChannelsCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // SearchChannelsRequest
 *   ChimeBearer: "STRING_VALUE",
 *   Fields: [ // SearchFields // required
 *     { // SearchField
 *       Key: "MEMBERS", // required
 *       Values: [ // SearchFieldValues // required
 *         "STRING_VALUE",
 *       ],
 *       Operator: "EQUALS" || "INCLUDES", // required
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new SearchChannelsCommand(input);
 * const response = await client.send(command);
 * // { // SearchChannelsResponse
 * //   Channels: [ // ChannelSummaryList
 * //     { // ChannelSummary
 * //       Name: "STRING_VALUE",
 * //       ChannelArn: "STRING_VALUE",
 * //       Mode: "UNRESTRICTED" || "RESTRICTED",
 * //       Privacy: "PUBLIC" || "PRIVATE",
 * //       Metadata: "STRING_VALUE",
 * //       LastMessageTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchChannelsCommandInput - {@link SearchChannelsCommandInput}
 * @returns {@link SearchChannelsCommandOutput}
 * @see {@link SearchChannelsCommandInput} for command's `input` shape.
 * @see {@link SearchChannelsCommandOutput} for command's `response` shape.
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
export class SearchChannelsCommand extends $Command<
  SearchChannelsCommandInput,
  SearchChannelsCommandOutput,
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
  constructor(readonly input: SearchChannelsCommandInput) {
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
  ): Handler<SearchChannelsCommandInput, SearchChannelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchChannelsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMessagingClient";
    const commandName = "SearchChannelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchChannelsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SearchChannelsResponseFilterSensitiveLog,
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
  private serialize(input: SearchChannelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchChannelsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchChannelsCommandOutput> {
    return de_SearchChannelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
