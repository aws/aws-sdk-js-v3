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

import { AcceptAdministratorInvitationRequest, AcceptAdministratorInvitationResponse } from "../models/models_0";
import {
  de_AcceptAdministratorInvitationCommand,
  se_AcceptAdministratorInvitationCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AcceptAdministratorInvitationCommand}.
 */
export interface AcceptAdministratorInvitationCommandInput extends AcceptAdministratorInvitationRequest {}
/**
 * @public
 *
 * The output of {@link AcceptAdministratorInvitationCommand}.
 */
export interface AcceptAdministratorInvitationCommandOutput
  extends AcceptAdministratorInvitationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Accepts the invitation to be a member account and be monitored by the Security Hub administrator
 *          account that the invitation was sent from.</p>
 *          <p>This operation is only used by member accounts that are not added through
 *          Organizations.</p>
 *          <p>When the member account accepts the invitation, permission is granted to the administrator
 *          account to view findings generated in the member account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, AcceptAdministratorInvitationCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, AcceptAdministratorInvitationCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // AcceptAdministratorInvitationRequest
 *   AdministratorId: "STRING_VALUE", // required
 *   InvitationId: "STRING_VALUE", // required
 * };
 * const command = new AcceptAdministratorInvitationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AcceptAdministratorInvitationCommandInput - {@link AcceptAdministratorInvitationCommandInput}
 * @returns {@link AcceptAdministratorInvitationCommandOutput}
 * @see {@link AcceptAdministratorInvitationCommandInput} for command's `input` shape.
 * @see {@link AcceptAdministratorInvitationCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @example To accept an invitation be a member account
 * ```javascript
 * // The following example demonstrates how an account can accept an invitation from the Security Hub administrator account to be a member account. This operation is applicable only to member accounts that are not added through AWS Organizations.
 * const input = {
 *   "AdministratorId": "123456789012",
 *   "InvitationId": "7ab938c5d52d7904ad09f9e7c20cc4eb"
 * };
 * const command = new AcceptAdministratorInvitationCommand(input);
 * await client.send(command);
 * // example id: to-accept-an-invitation-be-a-member-account-1674849870467
 * ```
 *
 */
export class AcceptAdministratorInvitationCommand extends $Command<
  AcceptAdministratorInvitationCommandInput,
  AcceptAdministratorInvitationCommandOutput,
  SecurityHubClientResolvedConfig
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
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AcceptAdministratorInvitationCommandInput, AcceptAdministratorInvitationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AcceptAdministratorInvitationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "AcceptAdministratorInvitationCommand";
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
  private serialize(input: AcceptAdministratorInvitationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AcceptAdministratorInvitationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AcceptAdministratorInvitationCommandOutput> {
    return de_AcceptAdministratorInvitationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
