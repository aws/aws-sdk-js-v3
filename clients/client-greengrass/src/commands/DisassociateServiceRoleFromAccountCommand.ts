import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import {
  DisassociateServiceRoleFromAccountRequest,
  DisassociateServiceRoleFromAccountResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateServiceRoleFromAccountCommand,
  serializeAws_restJson1DisassociateServiceRoleFromAccountCommand,
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

export interface DisassociateServiceRoleFromAccountCommandInput extends DisassociateServiceRoleFromAccountRequest {}
export interface DisassociateServiceRoleFromAccountCommandOutput
  extends DisassociateServiceRoleFromAccountResponse,
    __MetadataBearer {}

/**
 * Disassociates the service role from your account. Without a service role, deployments will not work.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DisassociateServiceRoleFromAccountCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DisassociateServiceRoleFromAccountCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new DisassociateServiceRoleFromAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateServiceRoleFromAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateServiceRoleFromAccountCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DisassociateServiceRoleFromAccountCommand extends $Command<
  DisassociateServiceRoleFromAccountCommandInput,
  DisassociateServiceRoleFromAccountCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateServiceRoleFromAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateServiceRoleFromAccountCommandInput, DisassociateServiceRoleFromAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "DisassociateServiceRoleFromAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateServiceRoleFromAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateServiceRoleFromAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateServiceRoleFromAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateServiceRoleFromAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateServiceRoleFromAccountCommandOutput> {
    return deserializeAws_restJson1DisassociateServiceRoleFromAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
