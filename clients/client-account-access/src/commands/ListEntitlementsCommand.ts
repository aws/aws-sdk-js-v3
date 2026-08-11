// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListEntitlementsRequest, ListEntitlementsResponse } from "../models/models_0";
import { ListEntitlements$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEntitlementsCommand}.
 */
export interface ListEntitlementsCommandInput extends ListEntitlementsRequest {}
/**
 * @public
 *
 * The output of {@link ListEntitlementsCommand}.
 */
export interface ListEntitlementsCommandOutput extends ListEntitlementsResponse, __MetadataBearer {}

/**
 * <p>Lists the entitlements for a specified account access manager application. You can filter results by principal, IAM role, or account. Use pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountAccessClient, ListEntitlementsCommand } from "@aws-sdk/client-account-access"; // ES Modules import
 * // const { AccountAccessClient, ListEntitlementsCommand } = require("@aws-sdk/client-account-access"); // CommonJS import
 * // import type { AccountAccessClientConfig } from "@aws-sdk/client-account-access";
 * const config = {}; // type is AccountAccessClientConfig
 * const client = new AccountAccessClient(config);
 * const input = { // ListEntitlementsRequest
 *   applicationArn: "STRING_VALUE", // required
 *   filter: { // EntitlementFilter
 *     principalRole: { // PrincipalRoleEntitlementFilter
 *       principal: { // PrincipalFilter Union: only one key present
 *         identityCenter: { // IdentityCenterPrincipalFilter Union: only one key present
 *           userId: "STRING_VALUE",
 *           groupId: "STRING_VALUE",
 *         },
 *       },
 *       roleArn: "STRING_VALUE",
 *       account: "STRING_VALUE",
 *     },
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListEntitlementsCommand(input);
 * const response = await client.send(command);
 * // { // ListEntitlementsResponse
 * //   entitlements: [ // EntitlementsList // required
 * //     { // EntitlementsListMember
 * //       entitlementId: "STRING_VALUE", // required
 * //       entitlement: { // EntitlementSummary Union: only one key present
 * //         principalRole: { // PrincipalRoleEntitlementSummary
 * //           principal: { // Principal Union: only one key present
 * //             identityCenter: { // IdentityCenterPrincipal Union: only one key present
 * //               userId: "STRING_VALUE",
 * //               groupId: "STRING_VALUE",
 * //             },
 * //           },
 * //           roleArn: "STRING_VALUE", // required
 * //           account: "STRING_VALUE", // required
 * //           accountName: "STRING_VALUE",
 * //         },
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEntitlementsCommandInput - {@link ListEntitlementsCommandInput}
 * @returns {@link ListEntitlementsCommandOutput}
 * @see {@link ListEntitlementsCommandInput} for command's `input` shape.
 * @see {@link ListEntitlementsCommandOutput} for command's `response` shape.
 * @see {@link AccountAccessClientResolvedConfig | config} for AccountAccessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred. Try your request again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist. Verify that the resource identifier is correct and that the resource exists in the current Region.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Try your request again later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by the service. Check your request parameters and retry the request.</p>
 *
 * @throws {@link AccountAccessServiceException}
 * <p>Base exception class for all service exceptions from AccountAccess service.</p>
 *
 *
 * @public
 */
export class ListEntitlementsCommand extends command<ListEntitlementsCommandInput, ListEntitlementsCommandOutput>(
  _ep0,
  _mw0,
  "ListEntitlements",
  ListEntitlements$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEntitlementsRequest;
      output: ListEntitlementsResponse;
    };
    sdk: {
      input: ListEntitlementsCommandInput;
      output: ListEntitlementsCommandOutput;
    };
  };
}
