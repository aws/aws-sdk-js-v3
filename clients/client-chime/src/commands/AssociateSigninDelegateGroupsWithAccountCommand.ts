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
  AssociateSigninDelegateGroupsWithAccountRequest,
  AssociateSigninDelegateGroupsWithAccountRequestFilterSensitiveLog,
  AssociateSigninDelegateGroupsWithAccountResponse,
  AssociateSigninDelegateGroupsWithAccountResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociateSigninDelegateGroupsWithAccountCommand,
  serializeAws_restJson1AssociateSigninDelegateGroupsWithAccountCommand,
} from "../protocols/Aws_restJson1";

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
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class AssociateSigninDelegateGroupsWithAccountCommand extends $Command<
  AssociateSigninDelegateGroupsWithAccountCommandInput,
  AssociateSigninDelegateGroupsWithAccountCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        AssociateSigninDelegateGroupsWithAccountCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "AssociateSigninDelegateGroupsWithAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateSigninDelegateGroupsWithAccountRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateSigninDelegateGroupsWithAccountResponseFilterSensitiveLog,
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
