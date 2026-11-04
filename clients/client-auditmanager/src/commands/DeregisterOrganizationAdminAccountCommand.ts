// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeregisterOrganizationAdminAccountRequest,
  DeregisterOrganizationAdminAccountResponse,
} from "../models/models_0";
import { DeregisterOrganizationAdminAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DeregisterOrganizationAdminAccountCommandOutput extends DeregisterOrganizationAdminAccountResponse, __MetadataBearer {}

/**
 * Removes the specified Amazon Web Services account as a delegated administrator for Audit Manager.
 *
 * When you remove a delegated administrator from your Audit Manager settings, you continue to have access to the evidence that you previously collected under that account. This is also the case when you deregister a delegated administrator from Organizations. However, Audit Manager stops collecting and attaching evidence to that delegated administrator account moving forward.
 *
 * > **Important:**
 * >
 * > Keep in mind the following cleanup task if you use evidence finder:
 * >
 * > Before you use your management account to remove a delegated administrator, make sure that the current delegated administrator account signs in to Audit Manager and disables evidence finder first. Disabling evidence finder automatically deletes the event data store that was created in their account when they enabled evidence finder. If this task isn’t completed, the event data store remains in their account. In this case, we recommend that the original delegated administrator goes to CloudTrail Lake and manually [deletes the event data store](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-eds-disable-termination.html).
 * >
 * > This cleanup task is necessary to ensure that you don't end up with multiple event data stores. Audit Manager ignores an unused event data store after you remove or change a delegated administrator account. However, the unused event data store continues to incur storage costs from CloudTrail Lake if you don't delete it.
 *
 * When you deregister a delegated administrator account for Audit Manager, the data for that account isn’t deleted. If you want to delete resource data for a delegated administrator account, you must perform that task separately before you deregister the account. Either, you can do this in the Audit Manager console. Or, you can use one of the delete API operations that are provided by Audit Manager.
 *
 * To delete your Audit Manager resource data, see the following instructions:
 *
 * - [DeleteAssessment](https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessment.html) (see also: [Deleting an assessment](https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-assessment.html) in the *Audit Manager User Guide*)
 * - [DeleteAssessmentFramework](https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFramework.html) (see also: [Deleting a custom framework](https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-custom-framework.html) in the *Audit Manager User Guide*)
 * - [DeleteAssessmentFrameworkShare](https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFrameworkShare.html) (see also: [Deleting a share request](https://docs.aws.amazon.com/audit-manager/latest/userguide/deleting-shared-framework-requests.html) in the *Audit Manager User Guide*)
 * - [DeleteAssessmentReport](https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentReport.html) (see also: [Deleting an assessment report](https://docs.aws.amazon.com/audit-manager/latest/userguide/generate-assessment-report.html#delete-assessment-report-steps) in the *Audit Manager User Guide*)
 * - [DeleteControl](https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteControl.html) (see also: [Deleting a custom control](https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-controls.html) in the *Audit Manager User Guide*)
 *
 * At this time, Audit Manager doesn't provide an option to delete evidence for a specific delegated administrator. Instead, when your management account deregisters Audit Manager, we perform a cleanup for the current delegated administrator account at the time of deregistration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, DeregisterOrganizationAdminAccountCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, DeregisterOrganizationAdminAccountCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
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
 *
 * Your account isn't registered with Audit Manager. Check the delegated administrator setup on the Audit Manager settings page, and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred during the processing of your request. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource that's specified in the request can't be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has invalid or missing parameters.
 *
 * @throws {@link AuditManagerServiceException}
 *
 * Base exception class for all service exceptions from AuditManager service.
 *
 * @public
 */
export class DeregisterOrganizationAdminAccountCommand extends command<DeregisterOrganizationAdminAccountCommandInput, DeregisterOrganizationAdminAccountCommandOutput>(
  _ep0,
  _mw0,
  "DeregisterOrganizationAdminAccount",
  DeregisterOrganizationAdminAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterOrganizationAdminAccountRequest;
      output: {};
    };
    sdk: {
      input: DeregisterOrganizationAdminAccountCommandInput;
      output: DeregisterOrganizationAdminAccountCommandOutput;
    };
  };
}
