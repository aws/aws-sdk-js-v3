// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListOrganizationEnrollmentConfigurationsRequest,
  ListOrganizationEnrollmentConfigurationsResponse,
} from "../models/models_0";
import { ListOrganizationEnrollmentConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListOrganizationEnrollmentConfigurationsCommand}.
 */
export interface ListOrganizationEnrollmentConfigurationsCommandInput extends ListOrganizationEnrollmentConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListOrganizationEnrollmentConfigurationsCommand}.
 */
export interface ListOrganizationEnrollmentConfigurationsCommandOutput extends ListOrganizationEnrollmentConfigurationsResponse, __MetadataBearer {}

/**
 * <p> Lists the organization enrollment configurations that are stored directly on accounts, organizational units (OUs), and the organization root. </p> <note> <p>Only the management account or a delegated administrator can perform this action.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerAutomationClient, ListOrganizationEnrollmentConfigurationsCommand } from "@aws-sdk/client-compute-optimizer-automation"; // ES Modules import
 * // const { ComputeOptimizerAutomationClient, ListOrganizationEnrollmentConfigurationsCommand } = require("@aws-sdk/client-compute-optimizer-automation"); // CommonJS import
 * // import type { ComputeOptimizerAutomationClientConfig } from "@aws-sdk/client-compute-optimizer-automation";
 * const config = {}; // type is ComputeOptimizerAutomationClientConfig
 * const client = new ComputeOptimizerAutomationClient(config);
 * const input = { // ListOrganizationEnrollmentConfigurationsRequest
 *   targetType: "Account" || "OrganizationalUnit",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListOrganizationEnrollmentConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListOrganizationEnrollmentConfigurationsResponse
 * //   organizationEnrollmentConfigurations: [ // OrganizationEnrollmentConfigurations // required
 * //     { // OrganizationEnrollmentConfiguration
 * //       targetId: "STRING_VALUE", // required
 * //       targetType: "Account" || "OrganizationalUnit", // required
 * //       organizationRuleMode: "AnyAllowed" || "NoneAllowed",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOrganizationEnrollmentConfigurationsCommandInput - {@link ListOrganizationEnrollmentConfigurationsCommandInput}
 * @returns {@link ListOrganizationEnrollmentConfigurationsCommandOutput}
 * @see {@link ListOrganizationEnrollmentConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationEnrollmentConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerAutomationClientResolvedConfig | config} for ComputeOptimizerAutomationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p> You are not authorized to perform this action. </p>
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
export class ListOrganizationEnrollmentConfigurationsCommand extends command<ListOrganizationEnrollmentConfigurationsCommandInput, ListOrganizationEnrollmentConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "ListOrganizationEnrollmentConfigurations",
  ListOrganizationEnrollmentConfigurations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOrganizationEnrollmentConfigurationsRequest;
      output: ListOrganizationEnrollmentConfigurationsResponse;
    };
    sdk: {
      input: ListOrganizationEnrollmentConfigurationsCommandInput;
      output: ListOrganizationEnrollmentConfigurationsCommandOutput;
    };
  };
}
