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
  AcceptHandshakeRequest,
  AcceptHandshakeRequestFilterSensitiveLog,
  AcceptHandshakeResponse,
  AcceptHandshakeResponseFilterSensitiveLog,
} from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1AcceptHandshakeCommand,
  serializeAws_json1_1AcceptHandshakeCommand,
} from "../protocols/Aws_json1_1";

export interface AcceptHandshakeCommandInput extends AcceptHandshakeRequest {}
export interface AcceptHandshakeCommandOutput extends AcceptHandshakeResponse, __MetadataBearer {}

/**
 * <p>Sends a response to the originator of a handshake agreeing to the action proposed by
 *             the handshake request.</p>
 *         <p>You can only call this operation by the following principals when they also have the
 *             relevant IAM permissions:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <b>Invitation to join</b> or <b>Approve all features request</b> handshakes: only a principal from
 *                     the member account.</p>
 *                 <p>The user who calls the API for an invitation to join must have the
 *                         <code>organizations:AcceptHandshake</code> permission. If you enabled all
 *                     features in the organization, the user must also have the
 *                         <code>iam:CreateServiceLinkedRole</code> permission so that Organizations can
 *                     create the required service-linked role named <code>AWSServiceRoleForOrganizations</code>. For
 *                     more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integration_services.html#orgs_integration_service-linked-roles">Organizations and Service-Linked Roles</a> in the
 *                         <i>Organizations User Guide</i>.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Enable all features final confirmation</b>
 *                     handshake: only a principal from the management account.</p>
 *                 <p>For more information about invitations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_invites.html">Inviting an
 *                         Amazon Web Services account to join your organization</a> in the
 *                         <i>Organizations User Guide.</i> For more information about requests to
 *                     enable all features in the organization, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling all features in your organization</a> in
 *                     the <i>Organizations User Guide.</i>
 *                </p>
 *             </li>
 *          </ul>
 *         <p>After you accept a handshake, it continues to appear in the results of relevant APIs
 *             for only 30 days. After that, it's deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, AcceptHandshakeCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, AcceptHandshakeCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new AcceptHandshakeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptHandshakeCommandInput} for command's `input` shape.
 * @see {@link AcceptHandshakeCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 */
export class AcceptHandshakeCommand extends $Command<
  AcceptHandshakeCommandInput,
  AcceptHandshakeCommandOutput,
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

  constructor(readonly input: AcceptHandshakeCommandInput) {
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
  ): Handler<AcceptHandshakeCommandInput, AcceptHandshakeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AcceptHandshakeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "AcceptHandshakeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptHandshakeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AcceptHandshakeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AcceptHandshakeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AcceptHandshakeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AcceptHandshakeCommandOutput> {
    return deserializeAws_json1_1AcceptHandshakeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
