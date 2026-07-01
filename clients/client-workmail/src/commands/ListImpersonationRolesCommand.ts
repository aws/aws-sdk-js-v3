// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListImpersonationRolesRequest, ListImpersonationRolesResponse } from "../models/models_0";
import { ListImpersonationRoles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListImpersonationRolesCommand}.
 */
export interface ListImpersonationRolesCommandInput extends ListImpersonationRolesRequest {}
/**
 * @public
 *
 * The output of {@link ListImpersonationRolesCommand}.
 */
export interface ListImpersonationRolesCommandOutput extends ListImpersonationRolesResponse, __MetadataBearer {}

/**
 * <p>Lists all the impersonation roles for the given WorkMail organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListImpersonationRolesCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListImpersonationRolesCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // ListImpersonationRolesRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListImpersonationRolesCommand(input);
 * const response = await client.send(command);
 * // { // ListImpersonationRolesResponse
 * //   Roles: [ // ImpersonationRoleList
 * //     { // ImpersonationRole
 * //       ImpersonationRoleId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Type: "FULL_ACCESS" || "READ_ONLY",
 * //       DateCreated: new Date("TIMESTAMP"),
 * //       DateModified: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImpersonationRolesCommandInput - {@link ListImpersonationRolesCommandInput}
 * @returns {@link ListImpersonationRolesCommandOutput}
 * @see {@link ListImpersonationRolesCommandInput} for command's `input` shape.
 * @see {@link ListImpersonationRolesCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
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
export class ListImpersonationRolesCommand extends command<ListImpersonationRolesCommandInput, ListImpersonationRolesCommandOutput>(
  _ep0,
  _mw0,
  "ListImpersonationRoles",
  ListImpersonationRoles$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListImpersonationRolesRequest;
      output: ListImpersonationRolesResponse;
    };
    sdk: {
      input: ListImpersonationRolesCommandInput;
      output: ListImpersonationRolesCommandOutput;
    };
  };
}
