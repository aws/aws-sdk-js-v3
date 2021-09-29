import {
  ChimeSDKMessagingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMessagingClient";
import {
  ListChannelMembershipsForAppInstanceUserRequest,
  ListChannelMembershipsForAppInstanceUserResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListChannelMembershipsForAppInstanceUserCommand,
  serializeAws_restJson1ListChannelMembershipsForAppInstanceUserCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface ListChannelMembershipsForAppInstanceUserCommandInput
  extends ListChannelMembershipsForAppInstanceUserRequest {}
export interface ListChannelMembershipsForAppInstanceUserCommandOutput
  extends ListChannelMembershipsForAppInstanceUserResponse,
    __MetadataBearer {}

/**
 * <p> Lists all channels that a particular <code>AppInstanceUser</code> is a part of. Only an
 *             <code>AppInstanceAdmin</code> can call the API with a user ARN that is not their own. </p>
 *
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
 *             the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, ListChannelMembershipsForAppInstanceUserCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, ListChannelMembershipsForAppInstanceUserCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const command = new ListChannelMembershipsForAppInstanceUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListChannelMembershipsForAppInstanceUserCommandInput} for command's `input` shape.
 * @see {@link ListChannelMembershipsForAppInstanceUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListChannelMembershipsForAppInstanceUserCommand extends $Command<
  ListChannelMembershipsForAppInstanceUserCommandInput,
  ListChannelMembershipsForAppInstanceUserCommandOutput,
  ChimeSDKMessagingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListChannelMembershipsForAppInstanceUserCommandInput) {
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
  ): Handler<
    ListChannelMembershipsForAppInstanceUserCommandInput,
    ListChannelMembershipsForAppInstanceUserCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMessagingClient";
    const commandName = "ListChannelMembershipsForAppInstanceUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListChannelMembershipsForAppInstanceUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListChannelMembershipsForAppInstanceUserResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListChannelMembershipsForAppInstanceUserCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListChannelMembershipsForAppInstanceUserCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListChannelMembershipsForAppInstanceUserCommandOutput> {
    return deserializeAws_restJson1ListChannelMembershipsForAppInstanceUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
