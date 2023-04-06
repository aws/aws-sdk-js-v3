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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  ListChannelMessagesRequest,
  ListChannelMessagesRequestFilterSensitiveLog,
  ListChannelMessagesResponse,
  ListChannelMessagesResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_ListChannelMessagesCommand, se_ListChannelMessagesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListChannelMessagesCommand}.
 */
export interface ListChannelMessagesCommandInput extends ListChannelMessagesRequest {}
/**
 * @public
 *
 * The output of {@link ListChannelMessagesCommand}.
 */
export interface ListChannelMessagesCommandOutput extends ListChannelMessagesResponse, __MetadataBearer {}

/**
 * @public
 * <p>List all the messages in a channel. Returns a paginated list of
 *             <code>ChannelMessages</code>. By default, sorted by creation timestamp in descending
 *          order.</p>
 *          <note>
 *             <p>Redacted messages appear in the results as empty, since they are only redacted, not
 *             deleted. Deleted messages do not appear in the results. This action always returns the
 *             latest version of an edited message.</p>
 *             <p>Also, the x-amz-chime-bearer request header is mandatory. Use the
 *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
 *             the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListChannelMessagesCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListChannelMessagesCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // ListChannelMessagesRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   SortOrder: "STRING_VALUE",
 *   NotBefore: new Date("TIMESTAMP"),
 *   NotAfter: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ChimeBearer: "STRING_VALUE",
 * };
 * const command = new ListChannelMessagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListChannelMessagesCommandInput - {@link ListChannelMessagesCommandInput}
 * @returns {@link ListChannelMessagesCommandOutput}
 * @see {@link ListChannelMessagesCommandInput} for command's `input` shape.
 * @see {@link ListChannelMessagesCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
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
 *
 */
export class ListChannelMessagesCommand extends $Command<
  ListChannelMessagesCommandInput,
  ListChannelMessagesCommandOutput,
  ChimeClientResolvedConfig
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
  constructor(readonly input: ListChannelMessagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListChannelMessagesCommandInput, ListChannelMessagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListChannelMessagesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListChannelMessagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListChannelMessagesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListChannelMessagesResponseFilterSensitiveLog,
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
  private serialize(input: ListChannelMessagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListChannelMessagesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListChannelMessagesCommandOutput> {
    return de_ListChannelMessagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
