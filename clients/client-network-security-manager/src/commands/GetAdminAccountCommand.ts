// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAdminAccountRequest, GetAdminAccountResponse } from "../models/models_0";
import { GetAdminAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAdminAccountCommand}.
 */
export interface GetAdminAccountCommandInput extends GetAdminAccountRequest {}
/**
 * @public
 *
 * The output of {@link GetAdminAccountCommand}.
 */
export interface GetAdminAccountCommandOutput extends GetAdminAccountResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details of the specified AWS Network Security Manager administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, GetAdminAccountCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, GetAdminAccountCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // GetAdminAccountRequest
 *   accountId: "STRING_VALUE", // required
 * };
 * const command = new GetAdminAccountCommand(input);
 * const response = await client.send(command);
 * // { // GetAdminAccountResponse
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
 * @param GetAdminAccountCommandInput - {@link GetAdminAccountCommandInput}
 * @returns {@link GetAdminAccountCommandOutput}
 * @see {@link GetAdminAccountCommandInput} for command's `input` shape.
 * @see {@link GetAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link NetworkSecurityManagerClientResolvedConfig | config} for NetworkSecurityManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an internal error in the service. This is a retryable error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify that the resource identifier is correct and that the resource exists, then try your request again.</p>
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
 * @example Get an administrator account
 * ```javascript
 * // Retrieves the details and administrative scope of a Network Security Manager administrator account.
 * const input = {
 *   accountId: "234567890123"
 * };
 * const command = new GetAdminAccountCommand(input);
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
export class GetAdminAccountCommand extends command<GetAdminAccountCommandInput, GetAdminAccountCommandOutput>(
  _ep0,
  _mw0,
  "GetAdminAccount",
  GetAdminAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAdminAccountRequest;
      output: GetAdminAccountResponse;
    };
    sdk: {
      input: GetAdminAccountCommandInput;
      output: GetAdminAccountCommandOutput;
    };
  };
}
