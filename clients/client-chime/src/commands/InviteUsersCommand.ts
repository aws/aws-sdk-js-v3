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
  InviteUsersRequest,
  InviteUsersRequestFilterSensitiveLog,
  InviteUsersResponse,
  InviteUsersResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1InviteUsersCommand,
  serializeAws_restJson1InviteUsersCommand,
} from "../protocols/Aws_restJson1";

export interface InviteUsersCommandInput extends InviteUsersRequest {}
export interface InviteUsersCommandOutput extends InviteUsersResponse, __MetadataBearer {}

/**
 * <p>Sends email to a maximum of 50 users, inviting them to the specified Amazon Chime
 *                 <code>Team</code> account. Only <code>Team</code> account types are currently
 *             supported for this action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, InviteUsersCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, InviteUsersCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new InviteUsersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InviteUsersCommandInput} for command's `input` shape.
 * @see {@link InviteUsersCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class InviteUsersCommand extends $Command<
  InviteUsersCommandInput,
  InviteUsersCommandOutput,
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

  constructor(readonly input: InviteUsersCommandInput) {
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
  ): Handler<InviteUsersCommandInput, InviteUsersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, InviteUsersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "InviteUsersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InviteUsersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: InviteUsersResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InviteUsersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1InviteUsersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InviteUsersCommandOutput> {
    return deserializeAws_restJson1InviteUsersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
