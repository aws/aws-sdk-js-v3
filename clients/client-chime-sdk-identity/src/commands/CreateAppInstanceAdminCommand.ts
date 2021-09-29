import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import { CreateAppInstanceAdminRequest, CreateAppInstanceAdminResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateAppInstanceAdminCommand,
  serializeAws_restJson1CreateAppInstanceAdminCommand,
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

export interface CreateAppInstanceAdminCommandInput extends CreateAppInstanceAdminRequest {}
export interface CreateAppInstanceAdminCommandOutput extends CreateAppInstanceAdminResponse, __MetadataBearer {}

/**
 * <p>Promotes an <code>AppInstanceUser</code> to an <code>AppInstanceAdmin</code>. The
 *          promoted user can perform the following actions. </p>
 *
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ChannelModerator</code> actions across all channels in the
 *                   <code>AppInstance</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteChannelMessage</code> actions.</p>
 *             </li>
 *          </ul>
 *
 *          <p>Only an <code>AppInstanceUser</code> can be promoted to an <code>AppInstanceAdmin</code>
 *          role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, CreateAppInstanceAdminCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, CreateAppInstanceAdminCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * const client = new ChimeSDKIdentityClient(config);
 * const command = new CreateAppInstanceAdminCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAppInstanceAdminCommandInput} for command's `input` shape.
 * @see {@link CreateAppInstanceAdminCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateAppInstanceAdminCommand extends $Command<
  CreateAppInstanceAdminCommandInput,
  CreateAppInstanceAdminCommandOutput,
  ChimeSDKIdentityClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAppInstanceAdminCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAppInstanceAdminCommandInput, CreateAppInstanceAdminCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKIdentityClient";
    const commandName = "CreateAppInstanceAdminCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAppInstanceAdminRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAppInstanceAdminResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAppInstanceAdminCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateAppInstanceAdminCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAppInstanceAdminCommandOutput> {
    return deserializeAws_restJson1CreateAppInstanceAdminCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
