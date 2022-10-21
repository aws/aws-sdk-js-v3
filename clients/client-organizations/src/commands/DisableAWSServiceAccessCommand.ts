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

import { DisableAWSServiceAccessRequest, DisableAWSServiceAccessRequestFilterSensitiveLog } from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1DisableAWSServiceAccessCommand,
  serializeAws_json1_1DisableAWSServiceAccessCommand,
} from "../protocols/Aws_json1_1";

export interface DisableAWSServiceAccessCommandInput extends DisableAWSServiceAccessRequest {}
export interface DisableAWSServiceAccessCommandOutput extends __MetadataBearer {}

/**
 * <p>Disables the integration of an Amazon Web Services service (the service that is specified by
 *                 <code>ServicePrincipal</code>) with Organizations. When you disable integration, the
 *             specified service no longer can create a <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">service-linked role</a> in
 *                 <i>new</i> accounts in your organization. This means the service can't
 *             perform operations on your behalf on any new accounts in your organization. The service
 *             can still perform operations in older accounts until the service completes its clean-up
 *             from Organizations.</p>
 *         <important>
 *             <p>We <b>
 *                   <i>strongly recommend</i>
 *                </b> that
 *                 you don't use this command to disable integration between Organizations and the specified
 *                 Amazon Web Services service. Instead, use the console or commands that are provided by the
 *                 specified service. This lets the trusted service perform any required initialization
 *                 when enabling trusted access, such as creating any required resources and any
 *                 required clean up of resources when disabling trusted access. </p>
 *             <p>For information about how to disable trusted service access to your organization
 *                 using the trusted service, see the <b>Learn more</b> link
 *                 under the <b>Supports Trusted Access</b> column at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services_list.html">Amazon Web Services services that you can use with Organizations</a>. on this page.</p>
 *             <p>If you disable access by using this command, it causes the following actions to
 *                 occur:</p>
 *             <ul>
 *                <li>
 *                     <p>The service can no longer create a service-linked role in the accounts in
 *                         your organization. This means that the service can't perform operations on
 *                         your behalf on any new accounts in your organization. The service can still
 *                         perform operations in older accounts until the service completes its
 *                         clean-up from Organizations. </p>
 *                 </li>
 *                <li>
 *                     <p>The service can no longer perform tasks in the member accounts in the
 *                         organization, unless those operations are explicitly permitted by the IAM
 *                         policies that are attached to your roles. This includes any data aggregation
 *                         from the member accounts to the management account, or to a delegated
 *                         administrator account, where relevant.</p>
 *                 </li>
 *                <li>
 *                     <p>Some services detect this and clean up any remaining data or resources
 *                         related to the integration, while other services stop accessing the
 *                         organization but leave any historical data and configuration in place to
 *                         support a possible re-enabling of the integration.</p>
 *                 </li>
 *             </ul>
 *             <p>Using the other service's console or commands to disable the integration ensures
 *                 that the other service is aware that it can clean up any resources that are required
 *                 only for the integration. How the service cleans up its resources in the
 *                 organization's accounts depends on that service. For more information, see the
 *                 documentation for the other Amazon Web Services service. </p>
 *         </important>
 *         <p>After you perform the <code>DisableAWSServiceAccess</code> operation, the specified
 *             service can no longer perform operations in your organization's accounts </p>
 *         <p>For more information about integrating other services with Organizations, including the
 *             list of services that work with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating Organizations with Other
 *                 Amazon Web Services Services</a> in the <i>Organizations User Guide.</i>
 *          </p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DisableAWSServiceAccessCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DisableAWSServiceAccessCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DisableAWSServiceAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableAWSServiceAccessCommandInput} for command's `input` shape.
 * @see {@link DisableAWSServiceAccessCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 */
export class DisableAWSServiceAccessCommand extends $Command<
  DisableAWSServiceAccessCommandInput,
  DisableAWSServiceAccessCommandOutput,
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

  constructor(readonly input: DisableAWSServiceAccessCommandInput) {
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
  ): Handler<DisableAWSServiceAccessCommandInput, DisableAWSServiceAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisableAWSServiceAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "DisableAWSServiceAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableAWSServiceAccessRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableAWSServiceAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisableAWSServiceAccessCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisableAWSServiceAccessCommandOutput> {
    return deserializeAws_json1_1DisableAWSServiceAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
