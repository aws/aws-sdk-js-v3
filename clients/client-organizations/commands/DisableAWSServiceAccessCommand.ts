import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { DisableAWSServiceAccessRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DisableAWSServiceAccessCommand,
  serializeAws_json1_1DisableAWSServiceAccessCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DisableAWSServiceAccessCommandInput = DisableAWSServiceAccessRequest;
export type DisableAWSServiceAccessCommandOutput = __MetadataBearer;

/**
 * <p>Disables the integration of an AWS service (the service that is specified by
 *                 <code>ServicePrincipal</code>) with AWS Organizations. When you disable integration, the
 *             specified service no longer can create a <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">service-linked role</a> in
 *                 <i>new</i> accounts in your organization. This means the service can't
 *             perform operations on your behalf on any new accounts in your organization. The service
 *             can still perform operations in older accounts until the service completes its clean-up
 *             from AWS Organizations.</p>
 *         <important>
 *             <p>We <b>
 *                   <i>strongly recommend</i>
 *                </b> that
 *                 you don't use this command to disable integration between AWS Organizations and the specified
 *                 AWS service. Instead, use the console or commands that are provided by the
 *                 specified service. This lets the trusted service perform any required initialization
 *                 when enabling trusted access, such as creating any required resources and any
 *                 required clean up of resources when disabling trusted access. </p>
 *             <p>For information about how to disable trusted service access to your organization
 *                 using the trusted service, see the <b>Learn more</b> link
 *                 under the <b>Supports Trusted Access</b> column at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services_list.html">AWS
 *                     services that you can use with AWS Organizations</a>. on this page.</p>
 *             <p>If you disable access by using this command, it causes the following actions to
 *                 occur:</p>
 *             <ul>
 *                <li>
 *                     <p>The service can no longer create a service-linked role in the accounts in
 *                         your organization. This means that the service can't perform operations on
 *                         your behalf on any new accounts in your organization. The service can still
 *                         perform operations in older accounts until the service completes its
 *                         clean-up from AWS Organizations. </p>
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
 *                 documentation for the other AWS service. </p>
 *         </important>
 *         <p>After you perform the <code>DisableAWSServiceAccess</code> operation, the specified
 *             service can no longer perform operations in your organization's accounts </p>
 *         <p>For more information about integrating other services with AWS Organizations, including the
 *             list of services that work with Organizations, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating AWS Organizations with Other
 *                 AWS Services</a> in the <i>AWS Organizations User Guide.</i>
 *          </p>
 *         <p>This operation can be called only from the organization's management account.</p>
 */
export class DisableAWSServiceAccessCommand extends $Command<
  DisableAWSServiceAccessCommandInput,
  DisableAWSServiceAccessCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "DisableAWSServiceAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableAWSServiceAccessRequest.filterSensitiveLog,
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
