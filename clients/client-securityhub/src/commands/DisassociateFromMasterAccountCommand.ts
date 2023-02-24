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
  DisassociateFromMasterAccountRequest,
  DisassociateFromMasterAccountRequestFilterSensitiveLog,
  DisassociateFromMasterAccountResponse,
  DisassociateFromMasterAccountResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_restJson1DisassociateFromMasterAccountCommand,
  serializeAws_restJson1DisassociateFromMasterAccountCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

export interface DisassociateFromMasterAccountCommandInput extends DisassociateFromMasterAccountRequest {}
export interface DisassociateFromMasterAccountCommandOutput
  extends DisassociateFromMasterAccountResponse,
    __MetadataBearer {}

/**
 * @deprecated
 *
 * <p>This method is deprecated. Instead, use <code>DisassociateFromAdministratorAccount</code>.</p>
 *          <p>The Security Hub console continues to use <code>DisassociateFromMasterAccount</code>. It will eventually change to use <code>DisassociateFromAdministratorAccount</code>. Any IAM policies that specifically control access to this function must continue to use <code>DisassociateFromMasterAccount</code>. You should also add <code>DisassociateFromAdministratorAccount</code> to your policies to ensure that the correct permissions are in place after the console begins to use <code>DisassociateFromAdministratorAccount</code>.</p>
 *          <p>Disassociates the current Security Hub member account from the associated administrator
 *          account.</p>
 *          <p>This operation is only used by accounts that are not part of an organization. For
 *          organization accounts, only the administrator account can
 *          disassociate a member account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DisassociateFromMasterAccountCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DisassociateFromMasterAccountCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DisassociateFromMasterAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateFromMasterAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateFromMasterAccountCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 */
export class DisassociateFromMasterAccountCommand extends $Command<
  DisassociateFromMasterAccountCommandInput,
  DisassociateFromMasterAccountCommandOutput,
  SecurityHubClientResolvedConfig
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

  constructor(readonly input: DisassociateFromMasterAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateFromMasterAccountCommandInput, DisassociateFromMasterAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateFromMasterAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "DisassociateFromMasterAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateFromMasterAccountRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateFromMasterAccountResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateFromMasterAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateFromMasterAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateFromMasterAccountCommandOutput> {
    return deserializeAws_restJson1DisassociateFromMasterAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
