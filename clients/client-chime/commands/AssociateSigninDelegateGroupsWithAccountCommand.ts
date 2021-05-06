import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  AssociateSigninDelegateGroupsWithAccountRequest,
  AssociateSigninDelegateGroupsWithAccountResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociateSigninDelegateGroupsWithAccountCommand,
  serializeAws_restJson1AssociateSigninDelegateGroupsWithAccountCommand,
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

export interface AssociateSigninDelegateGroupsWithAccountCommandInput
  extends AssociateSigninDelegateGroupsWithAccountRequest {}
export interface AssociateSigninDelegateGroupsWithAccountCommandOutput
  extends AssociateSigninDelegateGroupsWithAccountResponse,
    __MetadataBearer {}

/**
 * <p>Associates the specified sign-in delegate groups with the specified Amazon Chime account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, AssociateSigninDelegateGroupsWithAccountCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, AssociateSigninDelegateGroupsWithAccountCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new AssociateSigninDelegateGroupsWithAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateSigninDelegateGroupsWithAccountCommandInput} for command's `input` shape.
 * @see {@link AssociateSigninDelegateGroupsWithAccountCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AssociateSigninDelegateGroupsWithAccountCommand extends $Command<
  AssociateSigninDelegateGroupsWithAccountCommandInput,
  AssociateSigninDelegateGroupsWithAccountCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateSigninDelegateGroupsWithAccountCommandInput) {
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
    AssociateSigninDelegateGroupsWithAccountCommandInput,
    AssociateSigninDelegateGroupsWithAccountCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "AssociateSigninDelegateGroupsWithAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateSigninDelegateGroupsWithAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateSigninDelegateGroupsWithAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateSigninDelegateGroupsWithAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateSigninDelegateGroupsWithAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateSigninDelegateGroupsWithAccountCommandOutput> {
    return deserializeAws_restJson1AssociateSigninDelegateGroupsWithAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
