// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetImpersonationRoleEffectRequest, GetImpersonationRoleEffectResponse } from "../models/models_0";
import { GetImpersonationRoleEffect$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetImpersonationRoleEffectCommand}.
 */
export interface GetImpersonationRoleEffectCommandInput extends GetImpersonationRoleEffectRequest {}
/**
 * @public
 *
 * The output of {@link GetImpersonationRoleEffectCommand}.
 */
export interface GetImpersonationRoleEffectCommandOutput extends GetImpersonationRoleEffectResponse, __MetadataBearer {}

/**
 * Tests whether the given impersonation role can impersonate a target user.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, GetImpersonationRoleEffectCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, GetImpersonationRoleEffectCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // GetImpersonationRoleEffectRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   ImpersonationRoleId: "STRING_VALUE", // required
 *   TargetUser: "STRING_VALUE", // required
 * };
 * const command = new GetImpersonationRoleEffectCommand(input);
 * const response = await client.send(command);
 * // { // GetImpersonationRoleEffectResponse
 * //   Type: "FULL_ACCESS" || "READ_ONLY",
 * //   Effect: "ALLOW" || "DENY",
 * //   MatchedRules: [ // ImpersonationMatchedRuleList
 * //     { // ImpersonationMatchedRule
 * //       ImpersonationRuleId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetImpersonationRoleEffectCommandInput - {@link GetImpersonationRoleEffectCommandInput}
 * @returns {@link GetImpersonationRoleEffectCommandOutput}
 * @see {@link GetImpersonationRoleEffectCommandInput} for command's `input` shape.
 * @see {@link GetImpersonationRoleEffectCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * The identifier supplied for the user, group, or resource does not exist in your organization.
 *
 * @throws {@link EntityStateException} (client fault)
 *
 * You are performing an operation on a user, group, or resource that isn't in the expected state, such as trying to delete an active user.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the input parameters don't match the service's restrictions.
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *
 * An operation received a valid organization identifier that either doesn't belong or exist in the system.
 *
 * @throws {@link OrganizationStateException} (client fault)
 *
 * The organization must have a valid state to perform certain operations on the organization or its members.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource cannot be found.
 *
 * @throws {@link WorkMailServiceException}
 *
 * Base exception class for all service exceptions from WorkMail service.
 *
 * @public
 */
export class GetImpersonationRoleEffectCommand extends command<GetImpersonationRoleEffectCommandInput, GetImpersonationRoleEffectCommandOutput>(
  _ep0,
  _mw0,
  "GetImpersonationRoleEffect",
  GetImpersonationRoleEffect$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetImpersonationRoleEffectRequest;
      output: GetImpersonationRoleEffectResponse;
    };
    sdk: {
      input: GetImpersonationRoleEffectCommandInput;
      output: GetImpersonationRoleEffectCommandOutput;
    };
  };
}
