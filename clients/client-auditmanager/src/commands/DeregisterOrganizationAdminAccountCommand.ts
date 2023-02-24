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

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import {
  DeregisterOrganizationAdminAccountRequest,
  DeregisterOrganizationAdminAccountRequestFilterSensitiveLog,
  DeregisterOrganizationAdminAccountResponse,
  DeregisterOrganizationAdminAccountResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeregisterOrganizationAdminAccountCommand,
  serializeAws_restJson1DeregisterOrganizationAdminAccountCommand,
} from "../protocols/Aws_restJson1";

export interface DeregisterOrganizationAdminAccountCommandInput extends DeregisterOrganizationAdminAccountRequest {}
export interface DeregisterOrganizationAdminAccountCommandOutput
  extends DeregisterOrganizationAdminAccountResponse,
    __MetadataBearer {}

/**
 * <p>Removes the specified Amazon Web Services account as a delegated administrator for
 *             Audit Manager. </p>
 *          <p>When you remove a delegated administrator from your Audit Manager settings, you
 *          continue to have access to the evidence that you previously collected under that account.
 *          This is also the case when you deregister a delegated administrator from Organizations. However, Audit Manager stops collecting and attaching evidence to
 *          that delegated administrator account moving forward.</p>
 *          <important>
 *             <p>Keep in mind the following cleanup task if you use evidence finder:</p>
 *             <p>Before you use your management account to remove a delegated administrator, make sure
 *             that the current delegated administrator account signs in to Audit Manager and
 *             disables evidence finder first. Disabling evidence finder automatically deletes the
 *             event data store that was created in their account when they enabled evidence finder. If
 *             this task isn’t completed, the event data store remains in their account. In this case,
 *             we recommend that the original delegated administrator goes to CloudTrail Lake
 *             and manually <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-eds-disable-termination.html">deletes the
 *                event data store</a>.</p>
 *             <p>This cleanup task is necessary to ensure that you don't end up with multiple event
 *             data stores. Audit Manager ignores an unused event data store after you remove or
 *             change a delegated administrator account. However, the unused event data store continues
 *             to incur storage costs from CloudTrail Lake if you don't delete it.</p>
 *          </important>
 *          <p>When you deregister a delegated administrator account for Audit Manager, the data
 *          for that account isn’t deleted. If you want to delete resource data for a delegated
 *          administrator account, you must perform that task separately before you deregister the
 *          account. Either, you can do this in the Audit Manager console. Or, you can use one of
 *          the delete API operations that are provided by Audit Manager. </p>
 *          <p>To delete your Audit Manager resource data, see the following instructions: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessment.html">DeleteAssessment</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-assessment.html">Deleting an
 *                   assessment</a> in the <i>Audit Manager User
 *                Guide</i>)</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFramework.html">DeleteAssessmentFramework</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-custom-framework.html">Deleting a
 *                   custom framework</a> in the <i>Audit Manager User
 *                   Guide</i>)</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFrameworkShare.html">DeleteAssessmentFrameworkShare</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/deleting-shared-framework-requests.html">Deleting a share request</a> in the <i>Audit Manager User
 *                   Guide</i>)</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentReport.html">DeleteAssessmentReport</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/generate-assessment-report.html#delete-assessment-report-steps">Deleting an assessment report</a> in the <i>Audit Manager User
 *                   Guide</i>)</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteControl.html">DeleteControl</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-controls.html">Deleting a custom
 *                   control</a> in the <i>Audit Manager User
 *                Guide</i>)</p>
 *             </li>
 *          </ul>
 *          <p>At this time, Audit Manager doesn't provide an option to delete evidence for a
 *          specific delegated administrator. Instead, when your management account deregisters Audit Manager, we perform a cleanup for the current delegated administrator account at the
 *          time of deregistration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, DeregisterOrganizationAdminAccountCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, DeregisterOrganizationAdminAccountCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new DeregisterOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link DeregisterOrganizationAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 */
export class DeregisterOrganizationAdminAccountCommand extends $Command<
  DeregisterOrganizationAdminAccountCommandInput,
  DeregisterOrganizationAdminAccountCommandOutput,
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

  constructor(readonly input: DeregisterOrganizationAdminAccountCommandInput) {
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
  ): Handler<DeregisterOrganizationAdminAccountCommandInput, DeregisterOrganizationAdminAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeregisterOrganizationAdminAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "DeregisterOrganizationAdminAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterOrganizationAdminAccountRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeregisterOrganizationAdminAccountResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeregisterOrganizationAdminAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeregisterOrganizationAdminAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeregisterOrganizationAdminAccountCommandOutput> {
    return deserializeAws_restJson1DeregisterOrganizationAdminAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
