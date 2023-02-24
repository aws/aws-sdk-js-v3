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
  RegisterSlackWorkspaceForOrganizationRequest,
  RegisterSlackWorkspaceForOrganizationRequestFilterSensitiveLog,
  RegisterSlackWorkspaceForOrganizationResult,
  RegisterSlackWorkspaceForOrganizationResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1RegisterSlackWorkspaceForOrganizationCommand,
  serializeAws_restJson1RegisterSlackWorkspaceForOrganizationCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SupportAppClientResolvedConfig } from "../SupportAppClient";

export interface RegisterSlackWorkspaceForOrganizationCommandInput
  extends RegisterSlackWorkspaceForOrganizationRequest {}
export interface RegisterSlackWorkspaceForOrganizationCommandOutput
  extends RegisterSlackWorkspaceForOrganizationResult,
    __MetadataBearer {}

/**
 * <p>Registers a Slack workspace for your Amazon Web Services account. To call this API, your account must be
 *       part of an organization in Organizations.</p>
 *          <p>If you're the <i>management account</i> and you want to register Slack
 *       workspaces for your organization, you must complete the following tasks:</p>
 *          <ol>
 *             <li>
 *                <p>Sign in to the <a href="https://console.aws.amazon.com/support/app">Amazon Web Services Support Center</a> and
 *           authorize the Slack workspaces where you want your organization to have access to. See
 *             <a href="https://docs.aws.amazon.com/awssupport/latest/user/authorize-slack-workspace.html">Authorize a Slack workspace</a> in the <i>Amazon Web Services Support User
 *           Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>Call the <code>RegisterSlackWorkspaceForOrganization</code> API to authorize each
 *           Slack workspace for the organization.</p>
 *             </li>
 *          </ol>
 *          <p>After the management account authorizes the Slack workspace, member accounts can call this
 *       API to authorize the same Slack workspace for their individual accounts. Member accounts don't
 *       need to authorize the Slack workspace manually through the <a href="https://console.aws.amazon.com/support/app">Amazon Web Services Support Center</a>.</p>
 *          <p>To use the Amazon Web Services Support App, each account must then complete the following tasks:</p>
 *          <ul>
 *             <li>
 *                <p>Create an Identity and Access Management (IAM) role with the required permission. For more information,
 *           see <a href="https://docs.aws.amazon.com/awssupport/latest/user/support-app-permissions.html">Managing access to the Amazon Web Services Support App</a>.</p>
 *             </li>
 *             <li>
 *                <p>Configure a Slack channel to use the Amazon Web Services Support App for support cases for that account. For
 *           more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/add-your-slack-channel.html">Configuring a Slack channel</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportAppClient, RegisterSlackWorkspaceForOrganizationCommand } from "@aws-sdk/client-support-app"; // ES Modules import
 * // const { SupportAppClient, RegisterSlackWorkspaceForOrganizationCommand } = require("@aws-sdk/client-support-app"); // CommonJS import
 * const client = new SupportAppClient(config);
 * const command = new RegisterSlackWorkspaceForOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterSlackWorkspaceForOrganizationCommandInput} for command's `input` shape.
 * @see {@link RegisterSlackWorkspaceForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link SupportAppClientResolvedConfig | config} for SupportAppClient's `config` shape.
 *
 */
export class RegisterSlackWorkspaceForOrganizationCommand extends $Command<
  RegisterSlackWorkspaceForOrganizationCommandInput,
  RegisterSlackWorkspaceForOrganizationCommandOutput,
  SupportAppClientResolvedConfig
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

  constructor(readonly input: RegisterSlackWorkspaceForOrganizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SupportAppClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterSlackWorkspaceForOrganizationCommandInput, RegisterSlackWorkspaceForOrganizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterSlackWorkspaceForOrganizationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportAppClient";
    const commandName = "RegisterSlackWorkspaceForOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterSlackWorkspaceForOrganizationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RegisterSlackWorkspaceForOrganizationResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RegisterSlackWorkspaceForOrganizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1RegisterSlackWorkspaceForOrganizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RegisterSlackWorkspaceForOrganizationCommandOutput> {
    return deserializeAws_restJson1RegisterSlackWorkspaceForOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
