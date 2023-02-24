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
  ListChannelsModeratedByAppInstanceUserRequest,
  ListChannelsModeratedByAppInstanceUserRequestFilterSensitiveLog,
  ListChannelsModeratedByAppInstanceUserResponse,
  ListChannelsModeratedByAppInstanceUserResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListChannelsModeratedByAppInstanceUserCommand,
  serializeAws_restJson1ListChannelsModeratedByAppInstanceUserCommand,
} from "../protocols/Aws_restJson1";

export interface ListChannelsModeratedByAppInstanceUserCommandInput
  extends ListChannelsModeratedByAppInstanceUserRequest {}
export interface ListChannelsModeratedByAppInstanceUserCommandOutput
  extends ListChannelsModeratedByAppInstanceUserResponse,
    __MetadataBearer {}

/**
 * <p>A list of the channels moderated by an <code>AppInstanceUser</code>.</p>
 *
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
 *             the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, ListChannelsModeratedByAppInstanceUserCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, ListChannelsModeratedByAppInstanceUserCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const command = new ListChannelsModeratedByAppInstanceUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListChannelsModeratedByAppInstanceUserCommandInput} for command's `input` shape.
 * @see {@link ListChannelsModeratedByAppInstanceUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
 *
 */
export class ListChannelsModeratedByAppInstanceUserCommand extends $Command<
  ListChannelsModeratedByAppInstanceUserCommandInput,
  ListChannelsModeratedByAppInstanceUserCommandOutput,
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

  constructor(readonly input: ListChannelsModeratedByAppInstanceUserCommandInput) {
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
  ): Handler<ListChannelsModeratedByAppInstanceUserCommandInput, ListChannelsModeratedByAppInstanceUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListChannelsModeratedByAppInstanceUserCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMessagingClient";
    const commandName = "ListChannelsModeratedByAppInstanceUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListChannelsModeratedByAppInstanceUserRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListChannelsModeratedByAppInstanceUserResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListChannelsModeratedByAppInstanceUserCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListChannelsModeratedByAppInstanceUserCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListChannelsModeratedByAppInstanceUserCommandOutput> {
    return deserializeAws_restJson1ListChannelsModeratedByAppInstanceUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
