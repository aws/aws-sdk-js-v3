// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { RegisterAccountRequest, RegisterAccountResponse } from "../models/models_0";
import { de_RegisterAccountCommand, se_RegisterAccountCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RegisterAccountCommand}.
 */
export interface RegisterAccountCommandInput extends RegisterAccountRequest {}
/**
 * @public
 *
 * The output of {@link RegisterAccountCommand}.
 */
export interface RegisterAccountCommandOutput extends RegisterAccountResponse, __MetadataBearer {}

/**
 * @public
 * <p> Enables Audit Manager for the specified Amazon Web Services account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, RegisterAccountCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, RegisterAccountCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = { // RegisterAccountRequest
 *   kmsKey: "STRING_VALUE",
 *   delegatedAdminAccount: "STRING_VALUE",
 * };
 * const command = new RegisterAccountCommand(input);
 * const response = await client.send(command);
 * // { // RegisterAccountResponse
 * //   status: "ACTIVE" || "INACTIVE" || "PENDING_ACTIVATION",
 * // };
 *
 * ```
 *
 * @param RegisterAccountCommandInput - {@link RegisterAccountCommandInput}
 * @returns {@link RegisterAccountCommandOutput}
 * @see {@link RegisterAccountCommandInput} for command's `input` shape.
 * @see {@link RegisterAccountCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> Your account isn't registered with Audit Manager. Check the delegated
 *          administrator setup on the Audit Manager settings page, and try again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *          later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource that's specified in the request can't be found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AuditManagerServiceException}
 * <p>Base exception class for all service exceptions from AuditManager service.</p>
 *
 */
export class RegisterAccountCommand extends $Command<
  RegisterAccountCommandInput,
  RegisterAccountCommandOutput,
  AuditManagerClientResolvedConfig
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
  constructor(readonly input: RegisterAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterAccountCommandInput, RegisterAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "RegisterAccountCommand";
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
  private serialize(input: RegisterAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RegisterAccountCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterAccountCommandOutput> {
    return de_RegisterAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
