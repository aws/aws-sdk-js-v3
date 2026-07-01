// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAccessControlRulesRequest, ListAccessControlRulesResponse } from "../models/models_0";
import { ListAccessControlRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAccessControlRulesCommand}.
 */
export interface ListAccessControlRulesCommandInput extends ListAccessControlRulesRequest {}
/**
 * @public
 *
 * The output of {@link ListAccessControlRulesCommand}.
 */
export interface ListAccessControlRulesCommandOutput extends ListAccessControlRulesResponse, __MetadataBearer {}

/**
 * <p>Lists the access control rules for the specified organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListAccessControlRulesCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListAccessControlRulesCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // ListAccessControlRulesRequest
 *   OrganizationId: "STRING_VALUE", // required
 * };
 * const command = new ListAccessControlRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListAccessControlRulesResponse
 * //   Rules: [ // AccessControlRulesList
 * //     { // AccessControlRule
 * //       Name: "STRING_VALUE",
 * //       Effect: "ALLOW" || "DENY",
 * //       Description: "STRING_VALUE",
 * //       IpRanges: [ // IpRangeList
 * //         "STRING_VALUE",
 * //       ],
 * //       NotIpRanges: [
 * //         "STRING_VALUE",
 * //       ],
 * //       Actions: [ // ActionsList
 * //         "STRING_VALUE",
 * //       ],
 * //       NotActions: [
 * //         "STRING_VALUE",
 * //       ],
 * //       UserIds: [ // UserIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       NotUserIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //       DateCreated: new Date("TIMESTAMP"),
 * //       DateModified: new Date("TIMESTAMP"),
 * //       ImpersonationRoleIds: [ // ImpersonationRoleIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       NotImpersonationRoleIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAccessControlRulesCommandInput - {@link ListAccessControlRulesCommandInput}
 * @returns {@link ListAccessControlRulesCommandOutput}
 * @see {@link ListAccessControlRulesCommandInput} for command's `input` shape.
 * @see {@link ListAccessControlRulesCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class ListAccessControlRulesCommand extends command<ListAccessControlRulesCommandInput, ListAccessControlRulesCommandOutput>(
  _ep0,
  _mw0,
  "ListAccessControlRules",
  ListAccessControlRules$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccessControlRulesRequest;
      output: ListAccessControlRulesResponse;
    };
    sdk: {
      input: ListAccessControlRulesCommandInput;
      output: ListAccessControlRulesCommandOutput;
    };
  };
}
