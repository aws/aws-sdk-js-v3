import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  DisassociateSigninDelegateGroupsFromAccountRequest,
  DisassociateSigninDelegateGroupsFromAccountResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateSigninDelegateGroupsFromAccountCommand,
  serializeAws_restJson1DisassociateSigninDelegateGroupsFromAccountCommand,
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

export interface DisassociateSigninDelegateGroupsFromAccountCommandInput
  extends DisassociateSigninDelegateGroupsFromAccountRequest {}
export interface DisassociateSigninDelegateGroupsFromAccountCommandOutput
  extends DisassociateSigninDelegateGroupsFromAccountResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates the specified sign-in delegate groups from the specified Amazon Chime account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DisassociateSigninDelegateGroupsFromAccountCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DisassociateSigninDelegateGroupsFromAccountCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DisassociateSigninDelegateGroupsFromAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateSigninDelegateGroupsFromAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateSigninDelegateGroupsFromAccountCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DisassociateSigninDelegateGroupsFromAccountCommand extends $Command<
  DisassociateSigninDelegateGroupsFromAccountCommandInput,
  DisassociateSigninDelegateGroupsFromAccountCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateSigninDelegateGroupsFromAccountCommandInput) {
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
  ): Handler<
    DisassociateSigninDelegateGroupsFromAccountCommandInput,
    DisassociateSigninDelegateGroupsFromAccountCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "DisassociateSigninDelegateGroupsFromAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateSigninDelegateGroupsFromAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateSigninDelegateGroupsFromAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateSigninDelegateGroupsFromAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateSigninDelegateGroupsFromAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateSigninDelegateGroupsFromAccountCommandOutput> {
    return deserializeAws_restJson1DisassociateSigninDelegateGroupsFromAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
