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
  DeleteAccountRequest,
  DeleteAccountRequestFilterSensitiveLog,
  DeleteAccountResponse,
  DeleteAccountResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAccountCommand,
  serializeAws_restJson1DeleteAccountCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteAccountCommandInput extends DeleteAccountRequest {}
export interface DeleteAccountCommandOutput extends DeleteAccountResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified Amazon Chime account. You must suspend all users before deleting
 *                 <code>Team</code> account. You can use the <a>BatchSuspendUser</a> action
 *             to dodo.</p>
 *
 *          <p>For <code>EnterpriseLWA</code> and <code>EnterpriseAD</code> accounts, you must release the
 *             claimed domains for your Amazon Chime account before deletion. As soon as you release
 *             the domain, all users under that account are suspended.</p>
 *
 *          <p>Deleted accounts appear in your <code>Disabled</code> accounts list for 90 days. To restore
 *             deleted account from your <code>Disabled</code> accounts list, you must contact AWS
 *             Support.</p>
 *
 *          <p>After 90 days, deleted accounts are permanently removed from your
 * <code>Disabled</code> accounts list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteAccountCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteAccountCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccountCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class DeleteAccountCommand extends $Command<
  DeleteAccountCommandInput,
  DeleteAccountCommandOutput,
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

  constructor(readonly input: DeleteAccountCommandInput) {
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
  ): Handler<DeleteAccountCommandInput, DeleteAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteAccountCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "DeleteAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAccountRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteAccountResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteAccountCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAccountCommandOutput> {
    return deserializeAws_restJson1DeleteAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
