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
  CreateAppInstanceAdminRequest,
  CreateAppInstanceAdminRequestFilterSensitiveLog,
  CreateAppInstanceAdminResponse,
  CreateAppInstanceAdminResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateAppInstanceAdminCommand,
  serializeAws_restJson1CreateAppInstanceAdminCommand,
} from "../protocols/Aws_restJson1";

export interface CreateAppInstanceAdminCommandInput extends CreateAppInstanceAdminRequest {}
export interface CreateAppInstanceAdminCommandOutput extends CreateAppInstanceAdminResponse, __MetadataBearer {}

/**
 * <p>Promotes an <code>AppInstanceUser</code> to an <code>AppInstanceAdmin</code>. The promoted user can perform the following actions.
 * </p>
 *
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ChannelModerator</code> actions across all channels in the <code>AppInstance</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteChannelMessage</code> actions.</p>
 *             </li>
 *          </ul>
 *
 *          <p>Only an <code>AppInstanceUser</code> can be promoted to an <code>AppInstanceAdmin</code> role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateAppInstanceAdminCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateAppInstanceAdminCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateAppInstanceAdminCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAppInstanceAdminCommandInput} for command's `input` shape.
 * @see {@link CreateAppInstanceAdminCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class CreateAppInstanceAdminCommand extends $Command<
  CreateAppInstanceAdminCommandInput,
  CreateAppInstanceAdminCommandOutput,
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
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAppInstanceAdminCommandInput, CreateAppInstanceAdminCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAppInstanceAdminCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "CreateAppInstanceAdminCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAppInstanceAdminRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateAppInstanceAdminResponseFilterSensitiveLog,
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
