import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import {
  DisassociateFromAdministratorAccountRequest,
  DisassociateFromAdministratorAccountResponse,
} from "../models/models_1";
import {
  deserializeAws_restJson1DisassociateFromAdministratorAccountCommand,
  serializeAws_restJson1DisassociateFromAdministratorAccountCommand,
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

export interface DisassociateFromAdministratorAccountCommandInput extends DisassociateFromAdministratorAccountRequest {}
export interface DisassociateFromAdministratorAccountCommandOutput
  extends DisassociateFromAdministratorAccountResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates the current Security Hub member account from the associated administrator
 *          account.</p>
 *          <p>This operation is only used by accounts that are not part of an organization. For
 *          organization accounts, only the administrator account can
 *          disassociate a member account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DisassociateFromAdministratorAccountCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DisassociateFromAdministratorAccountCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DisassociateFromAdministratorAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateFromAdministratorAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateFromAdministratorAccountCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DisassociateFromAdministratorAccountCommand extends $Command<
  DisassociateFromAdministratorAccountCommandInput,
  DisassociateFromAdministratorAccountCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateFromAdministratorAccountCommandInput) {
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
  ): Handler<DisassociateFromAdministratorAccountCommandInput, DisassociateFromAdministratorAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "DisassociateFromAdministratorAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateFromAdministratorAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateFromAdministratorAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateFromAdministratorAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateFromAdministratorAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateFromAdministratorAccountCommandOutput> {
    return deserializeAws_restJson1DisassociateFromAdministratorAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
