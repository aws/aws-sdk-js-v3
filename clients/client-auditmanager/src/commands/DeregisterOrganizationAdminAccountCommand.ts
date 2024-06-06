// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeregisterOrganizationAdminAccountRequest,
  DeregisterOrganizationAdminAccountResponse,
} from "../models/models_0";
import {
  de_DeregisterOrganizationAdminAccountCommand,
  se_DeregisterOrganizationAdminAccountCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterOrganizationAdminAccountCommand}.
 */
export interface DeregisterOrganizationAdminAccountCommandInput extends DeregisterOrganizationAdminAccountRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterOrganizationAdminAccountCommand}.
 */
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
 * const input = { // DeregisterOrganizationAdminAccountRequest
 *   adminAccountId: "STRING_VALUE",
 * };
 * const command = new DeregisterOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterOrganizationAdminAccountCommandInput - {@link DeregisterOrganizationAdminAccountCommandInput}
 * @returns {@link DeregisterOrganizationAdminAccountCommandOutput}
 * @see {@link DeregisterOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link DeregisterOrganizationAdminAccountCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AuditManagerServiceException}
 * <p>Base exception class for all service exceptions from AuditManager service.</p>
 *
 * @public
 */
export class DeregisterOrganizationAdminAccountCommand extends $Command
  .classBuilder<
    DeregisterOrganizationAdminAccountCommandInput,
    DeregisterOrganizationAdminAccountCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BedrockAssessmentManagerLambda", "DeregisterOrganizationAdminAccount", {})
  .n("AuditManagerClient", "DeregisterOrganizationAdminAccountCommand")
  .f(void 0, void 0)
  .ser(se_DeregisterOrganizationAdminAccountCommand)
  .de(de_DeregisterOrganizationAdminAccountCommand)
  .build() {}
