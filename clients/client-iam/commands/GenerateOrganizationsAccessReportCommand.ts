import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  GenerateOrganizationsAccessReportRequest,
  GenerateOrganizationsAccessReportResponse,
} from "../models/models_0";
import {
  deserializeAws_queryGenerateOrganizationsAccessReportCommand,
  serializeAws_queryGenerateOrganizationsAccessReportCommand,
} from "../protocols/Aws_query";
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

export interface GenerateOrganizationsAccessReportCommandInput extends GenerateOrganizationsAccessReportRequest {}
export interface GenerateOrganizationsAccessReportCommandOutput
  extends GenerateOrganizationsAccessReportResponse,
    __MetadataBearer {}

/**
 * <p>Generates a report for service last accessed data for AWS Organizations. You can generate a report
 *             for any entities (organization root, organizational unit, or account) or policies in
 *             your organization.</p>
 *         <p>To call this operation, you must be signed in using your AWS Organizations management account
 *             credentials. You can use your long-term IAM user or root user credentials, or
 *             temporary credentials from assuming an IAM role. SCPs must be enabled for your
 *             organization root. You must have the required IAM and AWS Organizations permissions. For more
 *             information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining permissions using
 *                 service last accessed data</a> in the
 *             <i>IAM User Guide</i>.</p>
 *         <p>You can generate a service last accessed data report for entities by specifying only
 *             the entity's path. This data includes a list of services that are allowed by any service
 *             control policies (SCPs) that apply to the entity.</p>
 *         <p>You can generate a service last accessed data report for a policy by specifying an
 *             entity's path and an optional AWS Organizations policy ID. This data includes a list of services that
 *             are allowed by the specified SCP.</p>
 *         <p>For each service in both report types, the data includes the most recent account
 *             activity that the policy allows to account principals in the entity or the entity's
 *             children. For important information about the data, reporting period, permissions
 *             required, troubleshooting, and supported Regions see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using
 *                 service last accessed data</a> in the
 *             <i>IAM User Guide</i>.</p>
 *         <important>
 *             <p>The data includes all attempts to access AWS, not just the successful ones. This
 *                 includes all attempts that were made using the AWS Management Console, the AWS API through any
 *                 of the SDKs, or any of the command line tools. An unexpected entry in the service
 *                 last accessed data does not mean that an account has been compromised, because the
 *                 request might have been denied. Refer to your CloudTrail logs as the authoritative
 *                 source for information about all API calls and whether they were successful or
 *                 denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging IAM events with
 *                     CloudTrail</a> in the <i>IAM User Guide</i>.</p>
 *         </important>
 *         <p>This operation returns a <code>JobId</code>. Use this parameter in the <code>
 *                <a>GetOrganizationsAccessReport</a>
 *             </code> operation to check the status of
 *             the report generation. To check the status of this request, use the <code>JobId</code>
 *             parameter in the <code>
 *                <a>GetOrganizationsAccessReport</a>
 *             </code> operation
 *             and test the <code>JobStatus</code> response parameter. When the job is complete, you
 *             can retrieve the report.</p>
 *         <p>To generate a service last accessed data report for entities, specify an entity path
 *             without specifying the optional AWS Organizations policy ID. The type of entity that you specify
 *             determines the data returned in the report.</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <b>Root</b> – When you specify the
 *                     organizations root as the entity, the resulting report lists all of the services
 *                     allowed by SCPs that are attached to your root. For each service, the report
 *                     includes data for all accounts in your organization except the
 *                     management account, because the management account is not limited by SCPs.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>OU</b> – When you specify an
 *                     organizational unit (OU) as the entity, the resulting report lists all of the
 *                     services allowed by SCPs that are attached to the OU and its parents. For each
 *                     service, the report includes data for all accounts in the OU or its children.
 *                     This data excludes the management account, because the management account is not
 *                     limited by SCPs.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>management account</b> – When you specify the
 *                     management account, the resulting report lists all AWS services, because the
 *                     management account is not limited by SCPs. For each service, the report includes
 *                     data for only the management account.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Account</b> – When you specify another
 *                     account as the entity, the resulting report lists all of the services allowed by
 *                     SCPs that are attached to the account and its parents. For each service, the
 *                     report includes data for only the specified account.</p>
 *             </li>
 *          </ul>
 *         <p>To generate a service last accessed data report for policies, specify an entity path
 *             and the optional AWS Organizations policy ID. The type of entity that you specify determines the data
 *             returned for each service.</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <b>Root</b> – When you specify the root
 *                     entity and a policy ID, the resulting report lists all of the services that are
 *                     allowed by the specified SCP. For each service, the report includes data for all
 *                     accounts in your organization to which the SCP applies. This data excludes the
 *                     management account, because the management account is not limited by SCPs. If the
 *                     SCP is not attached to any entities in the organization, then the report will
 *                     return a list of services with no data.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>OU</b> – When you specify an OU entity and
 *                     a policy ID, the resulting report lists all of the services that are allowed by
 *                     the specified SCP. For each service, the report includes data for all accounts
 *                     in the OU or its children to which the SCP applies. This means that other
 *                     accounts outside the OU that are affected by the SCP might not be included in
 *                     the data. This data excludes the management account, because the
 *                     management account is not limited by SCPs. If the SCP is not attached to the OU
 *                     or one of its children, the report will return a list of services with no
 *                     data.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>management account</b> – When you specify the
 *                     management account, the resulting report lists all AWS services, because the
 *                     management account is not limited by SCPs. If you specify a policy ID in the CLI
 *                     or API, the policy is ignored. For each service, the report includes data for
 *                     only the management account.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Account</b> – When you specify another
 *                     account entity and a policy ID, the resulting report lists all of the services
 *                     that are allowed by the specified SCP. For each service, the report includes
 *                     data for only the specified account. This means that other accounts in the
 *                     organization that are affected by the SCP might not be included in the data. If
 *                     the SCP is not attached to the account, the report will return a list of
 *                     services with no data.</p>
 *             </li>
 *          </ul>
 *         <note>
 *             <p>Service last accessed data does not use other policy types when determining
 *                 whether a principal could access a service. These other policy types include
 *                 identity-based policies, resource-based policies, access control lists, IAM
 *                 permissions boundaries, and STS assume role policies. It only applies SCP logic.
 *                 For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the
 *                 <i>IAM User Guide</i>.</p>
 *         </note>
 *         <p>For more information about service last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing policy scope by
 *                 viewing user activity</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GenerateOrganizationsAccessReportCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GenerateOrganizationsAccessReportCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GenerateOrganizationsAccessReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateOrganizationsAccessReportCommandInput} for command's `input` shape.
 * @see {@link GenerateOrganizationsAccessReportCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GenerateOrganizationsAccessReportCommand extends $Command<
  GenerateOrganizationsAccessReportCommandInput,
  GenerateOrganizationsAccessReportCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GenerateOrganizationsAccessReportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GenerateOrganizationsAccessReportCommandInput, GenerateOrganizationsAccessReportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GenerateOrganizationsAccessReportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GenerateOrganizationsAccessReportRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GenerateOrganizationsAccessReportResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GenerateOrganizationsAccessReportCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryGenerateOrganizationsAccessReportCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GenerateOrganizationsAccessReportCommandOutput> {
    return deserializeAws_queryGenerateOrganizationsAccessReportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
