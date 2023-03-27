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

import { CreateMembersRequest, CreateMembersResponse } from "../models/models_2";
import {
  deserializeAws_restJson1CreateMembersCommand,
  serializeAws_restJson1CreateMembersCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 *
 * The input for {@link CreateMembersCommand}.
 */
export interface CreateMembersCommandInput extends CreateMembersRequest {}
/**
 * @public
 *
 * The output of {@link CreateMembersCommand}.
 */
export interface CreateMembersCommandOutput extends CreateMembersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a member association in Security Hub between the specified accounts and the account
 *          used to make the request, which is the administrator account. If you are integrated with
 *          Organizations, then the administrator account is designated by the organization management account.</p>
 *          <p>
 *             <code>CreateMembers</code> is always used to add accounts that are not organization
 *          members.</p>
 *          <p>For accounts that are managed using Organizations, <code>CreateMembers</code> is only used
 *          in the following cases:</p>
 *          <ul>
 *             <li>
 *                <p>Security Hub is not configured to automatically add new organization accounts.</p>
 *             </li>
 *             <li>
 *                <p>The account was disassociated or deleted in Security Hub.</p>
 *             </li>
 *          </ul>
 *          <p>This action can only be used by an account that has Security Hub enabled. To enable Security Hub, you
 *          can use the <code>EnableSecurityHub</code> operation.</p>
 *          <p>For accounts that are not organization members, you create the account association and
 *          then send an invitation to the member account. To send the invitation, you use the
 *                <code>InviteMembers</code> operation. If the account owner accepts
 *          the invitation, the account becomes a member account in Security Hub.</p>
 *          <p>Accounts that are managed using Organizations do not receive an invitation. They
 *          automatically become a member account in Security Hub.</p>
 *          <ul>
 *             <li>
 *                <p>If the organization account does not have Security Hub enabled, then Security Hub and the default standards are automatically enabled. Note that Security Hub cannot be enabled automatically for the organization management account. The organization management account must enable Security Hub before the administrator account enables it as a member account.</p>
 *             </li>
 *             <li>
 *                <p>For organization accounts that already have Security Hub enabled, Security Hub does not make any other changes to those accounts. It does not change their enabled standards or controls.</p>
 *             </li>
 *          </ul>
 *          <p>A permissions policy is added that permits the administrator account to view the findings
 *          generated in the member account.</p>
 *          <p>To remove the association between the administrator and member accounts, use the <code>DisassociateFromMasterAccount</code> or <code>DisassociateMembers</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, CreateMembersCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, CreateMembersCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = {
 *   AccountDetails: [ // required
 *     {
 *       AccountId: "STRING_VALUE", // required
 *       Email: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateMembersCommandInput - {@link CreateMembersCommandInput}
 * @returns {@link CreateMembersCommandOutput}
 * @see {@link CreateMembersCommandInput} for command's `input` shape.
 * @see {@link CreateMembersCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource specified in the request conflicts with an existing resource.</p>
 *
 *
 */
export class CreateMembersCommand extends $Command<
  CreateMembersCommandInput,
  CreateMembersCommandOutput,
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
  constructor(readonly input: CreateMembersCommandInput) {
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
  ): Handler<CreateMembersCommandInput, CreateMembersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateMembersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "CreateMembersCommand";
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
  private serialize(input: CreateMembersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateMembersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMembersCommandOutput> {
    return deserializeAws_restJson1CreateMembersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
