// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteOrganizationEnrollmentConfigurationRequest,
  DeleteOrganizationEnrollmentConfigurationResponse,
} from "../models/models_0";
import { DeleteOrganizationEnrollmentConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteOrganizationEnrollmentConfigurationCommand}.
 */
export interface DeleteOrganizationEnrollmentConfigurationCommandInput extends DeleteOrganizationEnrollmentConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOrganizationEnrollmentConfigurationCommand}.
 */
export interface DeleteOrganizationEnrollmentConfigurationCommandOutput extends DeleteOrganizationEnrollmentConfigurationResponse, __MetadataBearer {}

/**
 * <p> Deletes the specified configuration types from an organization enrollment configuration. After deletion, Automation stays enabled for affected accounts and earlier account associations aren't restored. Affected accounts inherit the organization rule mode from the closest parent that has an organization enrollment configuration, or get None allowed if no parent has one. </p> <note> <p>Only the management account or a delegated administrator can perform this action.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerAutomationClient, DeleteOrganizationEnrollmentConfigurationCommand } from "@aws-sdk/client-compute-optimizer-automation"; // ES Modules import
 * // const { ComputeOptimizerAutomationClient, DeleteOrganizationEnrollmentConfigurationCommand } = require("@aws-sdk/client-compute-optimizer-automation"); // CommonJS import
 * // import type { ComputeOptimizerAutomationClientConfig } from "@aws-sdk/client-compute-optimizer-automation";
 * const config = {}; // type is ComputeOptimizerAutomationClientConfig
 * const client = new ComputeOptimizerAutomationClient(config);
 * const input = { // DeleteOrganizationEnrollmentConfigurationRequest
 *   target: { // OrganizationTarget Union: only one key present
 *     accountId: "STRING_VALUE",
 *     organizationalUnitId: "STRING_VALUE",
 *   },
 *   configurationTypes: [ // OrganizationEnrollmentConfigurationTypes // required
 *     "OrganizationRuleMode",
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteOrganizationEnrollmentConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOrganizationEnrollmentConfigurationCommandInput - {@link DeleteOrganizationEnrollmentConfigurationCommandInput}
 * @returns {@link DeleteOrganizationEnrollmentConfigurationCommandOutput}
 * @see {@link DeleteOrganizationEnrollmentConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteOrganizationEnrollmentConfigurationCommandOutput} for command's `response` shape.
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
export class DeleteOrganizationEnrollmentConfigurationCommand extends command<DeleteOrganizationEnrollmentConfigurationCommandInput, DeleteOrganizationEnrollmentConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteOrganizationEnrollmentConfiguration",
  DeleteOrganizationEnrollmentConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOrganizationEnrollmentConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteOrganizationEnrollmentConfigurationCommandInput;
      output: DeleteOrganizationEnrollmentConfigurationCommandOutput;
    };
  };
}
