// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutAdminAccountRequest, PutAdminAccountResponse } from "../models/models_0";
import { PutAdminAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutAdminAccountCommand}.
 */
export interface PutAdminAccountCommandInput extends PutAdminAccountRequest {}
/**
 * @public
 *
 * The output of {@link PutAdminAccountCommand}.
 */
export interface PutAdminAccountCommandOutput extends PutAdminAccountResponse, __MetadataBearer {}

/**
 * <p>Sets the AWS account that serves as an AWS Network Security Manager administrator account, and optionally configures the scope of resources that the administrator can manage.</p> <p>You can't set an administrator account again immediately after you remove it, or while the service creates its service-linked role. Retry the request after a few minutes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, PutAdminAccountCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, PutAdminAccountCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // PutAdminAccountRequest
 *   accountId: "STRING_VALUE", // required
 *   priority: Number("int"), // required
 *   adminScope: { // AdminScopeInput
 *     scopeFilter: { // AdminScopeFilterInput Union: only one key present
 *       includeAll: {},
 *       includeOnly: { // AdminScopeSelectionInput
 *         accounts: [ // AccountIdList
 *           "STRING_VALUE",
 *         ],
 *         organizationalUnits: [ // OrganizationalUnitIdList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       excludeOnly: {
 *         accounts: [
 *           "STRING_VALUE",
 *         ],
 *         organizationalUnits: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     firewallTypeScope: { // AdminFirewallTypeScope
 *       allFirewallTypesEnabled: true || false,
 *       firewallTypes: [ // FirewallTypeList
 *         "WAF" || "SHIELD_ADVANCED",
 *       ],
 *     },
 *   },
 * };
 * const command = new PutAdminAccountCommand(input);
 * const response = await client.send(command);
 * // { // PutAdminAccountResponse
 * //   adminAccountDetails: { // AdminAccountDetails
 * //     adminAccount: "STRING_VALUE", // required
 * //     priority: Number("int"), // required
 * //     adminScope: { // AdminScope
 * //       scopeFilter: { // AdminScopeFilter Union: only one key present
 * //         includeAll: {},
 * //         includeOnly: { // AdminScopeSelection
 * //           accounts: [ // AccountReferenceList
 * //             { // AccountReference
 * //               accountId: "STRING_VALUE", // required
 * //               name: "STRING_VALUE",
 * //               email: "STRING_VALUE",
 * //             },
 * //           ],
 * //           organizationalUnits: [ // OrganizationalUnitReferenceList
 * //             { // OrganizationalUnitReference
 * //               ouId: "STRING_VALUE", // required
 * //               name: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //         excludeOnly: {
 * //           accounts: [
 * //             {
 * //               accountId: "STRING_VALUE", // required
 * //               name: "STRING_VALUE",
 * //               email: "STRING_VALUE",
 * //             },
 * //           ],
 * //           organizationalUnits: [
 * //             {
 * //               ouId: "STRING_VALUE", // required
 * //               name: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       firewallTypeScope: { // AdminFirewallTypeScope
 * //         allFirewallTypesEnabled: true || false,
 * //         firewallTypes: [ // FirewallTypeList
 * //           "WAF" || "SHIELD_ADVANCED",
 * //         ],
 * //       },
 * //     },
 * //     status: "ONBOARDED" || "OFFBOARDED",
 * //   },
 * // };
 *
 * ```
 *
 * @param PutAdminAccountCommandInput - {@link PutAdminAccountCommandInput}
 * @returns {@link PutAdminAccountCommandOutput}
 * @see {@link PutAdminAccountCommandInput} for command's `input` shape.
 * @see {@link PutAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link NetworkSecurityManagerClientResolvedConfig | config} for NetworkSecurityManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. For example, the resource was modified concurrently, or it is in a state that does not allow the requested operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an internal error in the service. This is a retryable error.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed a service quota.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable. This is a retryable error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Reduce your request rate and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation. For details, see the <code>reason</code> and <code>fieldList</code> members of the response.</p>
 *
 * @throws {@link NetworkSecurityManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkSecurityManager service.</p>
 *
 *
 * @example Designate an administrator account
 * ```javascript
 * // Designates an account as a Network Security Manager administrator, scoped to a specific organizational unit and the WAF firewall type.
 * const input = {
 *   accountId: "234567890123",
 *   adminScope: {
 *     firewallTypeScope: {
 *       allFirewallTypesEnabled: false,
 *       firewallTypes: [
 *         "WAF"
 *       ]
 *     },
 *     scopeFilter: {
 *       includeOnly: {
 *         organizationalUnits: [
 *           "ou-abcd-12345678"
 *         ]
 *       }
 *     }
 *   },
 *   priority: 2
 * };
 * const command = new PutAdminAccountCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   adminAccountDetails: {
 *     adminAccount: "234567890123",
 *     adminScope: {
 *       firewallTypeScope: {
 *         allFirewallTypesEnabled: false,
 *         firewallTypes: [
 *           "WAF"
 *         ]
 *       },
 *       scopeFilter: {
 *         includeOnly: {
 *           organizationalUnits: [
 *             {
 *               name: "Production",
 *               ouId: "ou-abcd-12345678"
 *             }
 *           ]
 *         }
 *       }
 *     },
 *     priority: 2,
 *     status: "ONBOARDED"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class PutAdminAccountCommand extends command<PutAdminAccountCommandInput, PutAdminAccountCommandOutput>(
  _ep0,
  _mw0,
  "PutAdminAccount",
  PutAdminAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAdminAccountRequest;
      output: PutAdminAccountResponse;
    };
    sdk: {
      input: PutAdminAccountCommandInput;
      output: PutAdminAccountCommandOutput;
    };
  };
}
