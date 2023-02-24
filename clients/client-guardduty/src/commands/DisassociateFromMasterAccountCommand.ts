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

import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import {
  DisassociateFromMasterAccountRequest,
  DisassociateFromMasterAccountRequestFilterSensitiveLog,
  DisassociateFromMasterAccountResponse,
  DisassociateFromMasterAccountResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateFromMasterAccountCommand,
  serializeAws_restJson1DisassociateFromMasterAccountCommand,
} from "../protocols/Aws_restJson1";

export interface DisassociateFromMasterAccountCommandInput extends DisassociateFromMasterAccountRequest {}
export interface DisassociateFromMasterAccountCommandOutput
  extends DisassociateFromMasterAccountResponse,
    __MetadataBearer {}

/**
 * @deprecated
 *
 * <p>Disassociates the current GuardDuty member account from its administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DisassociateFromMasterAccountCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DisassociateFromMasterAccountCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new DisassociateFromMasterAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateFromMasterAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateFromMasterAccountCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 */
export class DisassociateFromMasterAccountCommand extends $Command<
  DisassociateFromMasterAccountCommandInput,
  DisassociateFromMasterAccountCommandOutput,
  GuardDutyClientResolvedConfig
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
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateFromMasterAccountCommandInput, DisassociateFromMasterAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateFromMasterAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
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
