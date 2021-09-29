import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { DisableOrganizationAdminAccountRequest, DisableOrganizationAdminAccountResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DisableOrganizationAdminAccountCommand,
  serializeAws_restJson1DisableOrganizationAdminAccountCommand,
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

export interface DisableOrganizationAdminAccountCommandInput extends DisableOrganizationAdminAccountRequest {}
export interface DisableOrganizationAdminAccountCommandOutput
  extends DisableOrganizationAdminAccountResponse,
    __MetadataBearer {}

/**
 * <p>Disables an account as the delegated Amazon Macie administrator account for an Amazon Web Services organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, DisableOrganizationAdminAccountCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, DisableOrganizationAdminAccountCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new DisableOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link DisableOrganizationAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DisableOrganizationAdminAccountCommand extends $Command<
  DisableOrganizationAdminAccountCommandInput,
  DisableOrganizationAdminAccountCommandOutput,
  Macie2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisableOrganizationAdminAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisableOrganizationAdminAccountCommandInput, DisableOrganizationAdminAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "DisableOrganizationAdminAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableOrganizationAdminAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisableOrganizationAdminAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisableOrganizationAdminAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DisableOrganizationAdminAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableOrganizationAdminAccountCommandOutput> {
    return deserializeAws_restJson1DisableOrganizationAdminAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
