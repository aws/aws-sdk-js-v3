// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListOrganizationalUnitsRequest, ListOrganizationalUnitsResponse } from "../models/models_0";
import { ListOrganizationalUnits$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListOrganizationalUnitsCommand}.
 */
export interface ListOrganizationalUnitsCommandInput extends ListOrganizationalUnitsRequest {}
/**
 * @public
 *
 * The output of {@link ListOrganizationalUnitsCommand}.
 */
export interface ListOrganizationalUnitsCommandOutput extends ListOrganizationalUnitsResponse, __MetadataBearer {}

/**
 * <p> Lists the organization root and organizational units (OUs), including whether an applicable organization enrollment configuration enables Automation for member accounts and the effective organization rule mode for each root or OU. </p> <note> <p>Only the management account or a delegated administrator can perform this action.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerAutomationClient, ListOrganizationalUnitsCommand } from "@aws-sdk/client-compute-optimizer-automation"; // ES Modules import
 * // const { ComputeOptimizerAutomationClient, ListOrganizationalUnitsCommand } = require("@aws-sdk/client-compute-optimizer-automation"); // CommonJS import
 * // import type { ComputeOptimizerAutomationClientConfig } from "@aws-sdk/client-compute-optimizer-automation";
 * const config = {}; // type is ComputeOptimizerAutomationClientConfig
 * const client = new ComputeOptimizerAutomationClient(config);
 * const input = { // ListOrganizationalUnitsRequest
 *   organizationalUnitIds: [ // OrganizationalUnitIds
 *     "STRING_VALUE",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListOrganizationalUnitsCommand(input);
 * const response = await client.send(command);
 * // { // ListOrganizationalUnitsResponse
 * //   organizationalUnits: [ // OrganizationalUnitInfoList // required
 * //     { // OrganizationalUnitInfo
 * //       organizationalUnitId: "STRING_VALUE", // required
 * //       autoEnrollMemberAccounts: "All" || "None", // required
 * //       organizationRuleMode: "AnyAllowed" || "NoneAllowed", // required
 * //       organizationRuleModeSource: { // OrganizationRuleModeSource
 * //         sourceType: "Applied" || "Inherited" || "Direct" || "Default", // required
 * //         sourceTargetId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOrganizationalUnitsCommandInput - {@link ListOrganizationalUnitsCommandInput}
 * @returns {@link ListOrganizationalUnitsCommandOutput}
 * @see {@link ListOrganizationalUnitsCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationalUnitsCommandOutput} for command's `response` shape.
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
export class ListOrganizationalUnitsCommand extends command<ListOrganizationalUnitsCommandInput, ListOrganizationalUnitsCommandOutput>(
  _ep0,
  _mw0,
  "ListOrganizationalUnits",
  ListOrganizationalUnits$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOrganizationalUnitsRequest;
      output: ListOrganizationalUnitsResponse;
    };
    sdk: {
      input: ListOrganizationalUnitsCommandInput;
      output: ListOrganizationalUnitsCommandOutput;
    };
  };
}
