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
  AcceptAdministratorInvitationRequest,
  AcceptAdministratorInvitationRequestFilterSensitiveLog,
  AcceptAdministratorInvitationResponse,
  AcceptAdministratorInvitationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AcceptAdministratorInvitationCommand,
  serializeAws_restJson1AcceptAdministratorInvitationCommand,
} from "../protocols/Aws_restJson1";

export interface AcceptAdministratorInvitationCommandInput extends AcceptAdministratorInvitationRequest {}
export interface AcceptAdministratorInvitationCommandOutput
  extends AcceptAdministratorInvitationResponse,
    __MetadataBearer {}

/**
 * <p>Accepts the invitation to be a member account and get monitored by a GuardDuty administrator account that sent the invitation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, AcceptAdministratorInvitationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, AcceptAdministratorInvitationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new AcceptAdministratorInvitationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptAdministratorInvitationCommandInput} for command's `input` shape.
 * @see {@link AcceptAdministratorInvitationCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 */
export class AcceptAdministratorInvitationCommand extends $Command<
  AcceptAdministratorInvitationCommandInput,
  AcceptAdministratorInvitationCommandOutput,
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

  constructor(readonly input: AcceptAdministratorInvitationCommandInput) {
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
  ): Handler<AcceptAdministratorInvitationCommandInput, AcceptAdministratorInvitationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AcceptAdministratorInvitationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "AcceptAdministratorInvitationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptAdministratorInvitationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AcceptAdministratorInvitationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AcceptAdministratorInvitationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AcceptAdministratorInvitationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AcceptAdministratorInvitationCommandOutput> {
    return deserializeAws_restJson1AcceptAdministratorInvitationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
