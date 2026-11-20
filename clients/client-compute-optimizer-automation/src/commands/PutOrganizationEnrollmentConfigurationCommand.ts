// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutOrganizationEnrollmentConfigurationRequest,
  PutOrganizationEnrollmentConfigurationResponse,
} from "../models/models_0";
import { PutOrganizationEnrollmentConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutOrganizationEnrollmentConfigurationCommand}.
 */
export interface PutOrganizationEnrollmentConfigurationCommandInput extends PutOrganizationEnrollmentConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutOrganizationEnrollmentConfigurationCommand}.
 */
export interface PutOrganizationEnrollmentConfigurationCommandOutput extends PutOrganizationEnrollmentConfigurationResponse, __MetadataBearer {}

/**
 * <p> Creates or updates an organization enrollment configuration. The organization enrollment configuration sets the organization rule mode on the specified account, organizational unit (OU), or organization root and enables Automation for affected member accounts that have opted in to Compute Optimizer, including accounts that join later. Changes on an OU or the organization root can take up to 5 minutes. Organization enrollment configurations take precedence over settings made by <code>AssociateAccounts</code> and <code>DisassociateAccounts</code>. You must specify at least one configuration in the request. </p> <note> <p>Only the management account or a delegated administrator can perform this action.</p> <p>Organization enrollment configurations can't be created for the management account.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerAutomationClient, PutOrganizationEnrollmentConfigurationCommand } from "@aws-sdk/client-compute-optimizer-automation"; // ES Modules import
 * // const { ComputeOptimizerAutomationClient, PutOrganizationEnrollmentConfigurationCommand } = require("@aws-sdk/client-compute-optimizer-automation"); // CommonJS import
 * // import type { ComputeOptimizerAutomationClientConfig } from "@aws-sdk/client-compute-optimizer-automation";
 * const config = {}; // type is ComputeOptimizerAutomationClientConfig
 * const client = new ComputeOptimizerAutomationClient(config);
 * const input = { // PutOrganizationEnrollmentConfigurationRequest
 *   target: { // OrganizationTarget Union: only one key present
 *     accountId: "STRING_VALUE",
 *     organizationalUnitId: "STRING_VALUE",
 *   },
 *   organizationRuleMode: "AnyAllowed" || "NoneAllowed",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new PutOrganizationEnrollmentConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutOrganizationEnrollmentConfigurationCommandInput - {@link PutOrganizationEnrollmentConfigurationCommandInput}
 * @returns {@link PutOrganizationEnrollmentConfigurationCommandOutput}
 * @see {@link PutOrganizationEnrollmentConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutOrganizationEnrollmentConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerAutomationClientResolvedConfig | config} for ComputeOptimizerAutomationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> The request conflicts with a concurrent change to the same resource. Retry the request. </p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p> You are not authorized to perform this action. </p>
 *
 * @throws {@link IdempotencyTokenInUseException} (client fault)
 *  <p> The specified client token is already in use. </p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>Exception thrown when the same client token is used with different parameters, indicating a mismatch in idempotent request parameters.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal error occurred while processing the request. </p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p> One or more parameter values are not valid. </p>
 *
 * @throws {@link OptInRequiredException} (client fault)
 *  <p> The account must be opted in to Compute Optimizer Automation before performing this action. </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p> The service is temporarily unavailable. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The request was denied due to request throttling. </p>
 *
 * @throws {@link ComputeOptimizerAutomationServiceException}
 * <p>Base exception class for all service exceptions from ComputeOptimizerAutomation service.</p>
 *
 *
 * @public
 */
export class PutOrganizationEnrollmentConfigurationCommand extends command<PutOrganizationEnrollmentConfigurationCommandInput, PutOrganizationEnrollmentConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutOrganizationEnrollmentConfiguration",
  PutOrganizationEnrollmentConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutOrganizationEnrollmentConfigurationRequest;
      output: {};
    };
    sdk: {
      input: PutOrganizationEnrollmentConfigurationCommandInput;
      output: PutOrganizationEnrollmentConfigurationCommandOutput;
    };
  };
}
