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
  BatchSuspendUserRequest,
  BatchSuspendUserRequestFilterSensitiveLog,
  BatchSuspendUserResponse,
  BatchSuspendUserResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchSuspendUserCommand,
  serializeAws_restJson1BatchSuspendUserCommand,
} from "../protocols/Aws_restJson1";

export interface BatchSuspendUserCommandInput extends BatchSuspendUserRequest {}
export interface BatchSuspendUserCommandOutput extends BatchSuspendUserResponse, __MetadataBearer {}

/**
 * <p>Suspends up to 50 users from a <code>Team</code> or <code>EnterpriseLWA</code> Amazon Chime
 *             account. For more information about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the <i>Amazon Chime Administration
 *                 Guide</i>.</p>
 *
 *          <p>Users suspended from a <code>Team</code> account are disassociated from the account,but they
 *             can continue to use Amazon Chime as free users. To remove the suspension from suspended
 *                 <code>Team</code> account users, invite them to the <code>Team</code> account again.
 *             You can use the <a>InviteUsers</a> action to do so.</p>
 *
 *          <p>Users suspended from an <code>EnterpriseLWA</code> account are immediately signed out of
 *             Amazon Chime and can no longer sign in. To remove the suspension from suspended <code>EnterpriseLWA</code> account users, use the <a>BatchUnsuspendUser</a> action.</p>
 *
 *          <p>
 * To sign out users without suspending them, use the
 * <a>LogoutUser</a>
 * action.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, BatchSuspendUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, BatchSuspendUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new BatchSuspendUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchSuspendUserCommandInput} for command's `input` shape.
 * @see {@link BatchSuspendUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class BatchSuspendUserCommand extends $Command<
  BatchSuspendUserCommandInput,
  BatchSuspendUserCommandOutput,
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

  constructor(readonly input: BatchSuspendUserCommandInput) {
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
  ): Handler<BatchSuspendUserCommandInput, BatchSuspendUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchSuspendUserCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "BatchSuspendUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchSuspendUserRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchSuspendUserResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchSuspendUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchSuspendUserCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchSuspendUserCommandOutput> {
    return deserializeAws_restJson1BatchSuspendUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
