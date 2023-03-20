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
  DisassociateFromAdministratorAccountRequest,
  DisassociateFromAdministratorAccountResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateFromAdministratorAccountCommand,
  serializeAws_restJson1DisassociateFromAdministratorAccountCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DisassociateFromAdministratorAccountCommand}.
 */
export interface DisassociateFromAdministratorAccountCommandInput extends DisassociateFromAdministratorAccountRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateFromAdministratorAccountCommand}.
 */
export interface DisassociateFromAdministratorAccountCommandOutput
  extends DisassociateFromAdministratorAccountResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Disassociates the current GuardDuty member account from its administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DisassociateFromAdministratorAccountCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DisassociateFromAdministratorAccountCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new DisassociateFromAdministratorAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DisassociateFromAdministratorAccountCommandInput - {@link DisassociateFromAdministratorAccountCommandInput}
 * @returns {@link DisassociateFromAdministratorAccountCommandOutput}
 * @see {@link DisassociateFromAdministratorAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateFromAdministratorAccountCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A bad request exception object.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error exception object.</p>
 *
 *
 */
export class DisassociateFromAdministratorAccountCommand extends $Command<
  DisassociateFromAdministratorAccountCommandInput,
  DisassociateFromAdministratorAccountCommandOutput,
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

  /**
   * @public
   */
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
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateFromAdministratorAccountCommandInput, DisassociateFromAdministratorAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateFromAdministratorAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "DisassociateFromAdministratorAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: DisassociateFromAdministratorAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateFromAdministratorAccountCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateFromAdministratorAccountCommandOutput> {
    return deserializeAws_restJson1DisassociateFromAdministratorAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
