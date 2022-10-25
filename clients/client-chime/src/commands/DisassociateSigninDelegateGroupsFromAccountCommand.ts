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
  DisassociateSigninDelegateGroupsFromAccountRequest,
  DisassociateSigninDelegateGroupsFromAccountRequestFilterSensitiveLog,
  DisassociateSigninDelegateGroupsFromAccountResponse,
  DisassociateSigninDelegateGroupsFromAccountResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateSigninDelegateGroupsFromAccountCommand,
  serializeAws_restJson1DisassociateSigninDelegateGroupsFromAccountCommand,
} from "../protocols/Aws_restJson1";

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
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class DisassociateSigninDelegateGroupsFromAccountCommand extends $Command<
  DisassociateSigninDelegateGroupsFromAccountCommandInput,
  DisassociateSigninDelegateGroupsFromAccountCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DisassociateSigninDelegateGroupsFromAccountCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "DisassociateSigninDelegateGroupsFromAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateSigninDelegateGroupsFromAccountRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateSigninDelegateGroupsFromAccountResponseFilterSensitiveLog,
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
