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

import {
  RemoveAccountFromOrganizationRequest,
  RemoveAccountFromOrganizationRequestFilterSensitiveLog,
} from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1RemoveAccountFromOrganizationCommand,
  serializeAws_json1_1RemoveAccountFromOrganizationCommand,
} from "../protocols/Aws_json1_1";

export interface RemoveAccountFromOrganizationCommandInput extends RemoveAccountFromOrganizationRequest {}
export interface RemoveAccountFromOrganizationCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the specified account from the organization.</p>
 *         <p>The removed account becomes a standalone account that isn't a member of any
 *             organization. It's no longer subject to any policies and is responsible for its own bill
 *             payments. The organization's management account is no longer charged for any expenses
 *             accrued by the member account after it's removed from the organization.</p>
 *         <p>This operation can be called only from the organization's management account. Member accounts can remove themselves with <a>LeaveOrganization</a> instead.</p>
 *         <important>
 *             <ul>
 *                <li>
 *                     <p>You can remove an account from your organization only if the account is
 *                         configured with the information required to operate as a standalone account.
 *                         When you create an account in an organization using the Organizations console,
 *                         API, or CLI commands, the information required of standalone accounts is
 *                             <i>not</i> automatically collected. For an account that
 *                         you want to make standalone, you must choose a support plan, provide and
 *                         verify the required contact information, and provide a current payment
 *                         method. Amazon Web Services uses the payment method to charge for any billable (not free
 *                         tier) Amazon Web Services activity that occurs while the account isn't attached to an
 *                         organization. To remove an account that doesn't yet have this information,
 *                         you must sign in as the member account and follow the steps at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization when all required account information has not
 *                             yet been provided</a> in the
 *                         <i>Organizations User Guide.</i>
 *                   </p>
 *                 </li>
 *                <li>
 *                     <p>The account that you want to leave must not be a delegated administrator
 *                         account for any Amazon Web Services service enabled for your organization. If the account
 *                         is a delegated administrator, you must first change the delegated
 *                         administrator account to another account that is remaining in the
 *                         organization.</p>
 *                 </li>
 *                <li>
 *                     <p>After the account leaves the organization, all tags that were attached to
 *                         the account object in the organization are deleted. Amazon Web Services accounts outside
 *                         of an organization do not support tags.</p>
 *                 </li>
 *             </ul>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, RemoveAccountFromOrganizationCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, RemoveAccountFromOrganizationCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new RemoveAccountFromOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveAccountFromOrganizationCommandInput} for command's `input` shape.
 * @see {@link RemoveAccountFromOrganizationCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 */
export class RemoveAccountFromOrganizationCommand extends $Command<
  RemoveAccountFromOrganizationCommandInput,
  RemoveAccountFromOrganizationCommandOutput,
  OrganizationsClientResolvedConfig
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

  constructor(readonly input: RemoveAccountFromOrganizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OrganizationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveAccountFromOrganizationCommandInput, RemoveAccountFromOrganizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RemoveAccountFromOrganizationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "RemoveAccountFromOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveAccountFromOrganizationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveAccountFromOrganizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RemoveAccountFromOrganizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveAccountFromOrganizationCommandOutput> {
    return deserializeAws_json1_1RemoveAccountFromOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
