// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateImpersonationRoleRequest, CreateImpersonationRoleResponse } from "../models/models_0";
import { CreateImpersonationRole$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateImpersonationRoleCommand}.
 */
export interface CreateImpersonationRoleCommandInput extends CreateImpersonationRoleRequest {}
/**
 * @public
 *
 * The output of {@link CreateImpersonationRoleCommand}.
 */
export interface CreateImpersonationRoleCommandOutput extends CreateImpersonationRoleResponse, __MetadataBearer {}

/**
 * Creates an impersonation role for the given WorkMail organization.
 *
 * *Idempotency* ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries also complete successfully without performing any further actions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, CreateImpersonationRoleCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, CreateImpersonationRoleCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // CreateImpersonationRoleRequest
 *   ClientToken: "STRING_VALUE",
 *   OrganizationId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Type: "FULL_ACCESS" || "READ_ONLY", // required
 *   Description: "STRING_VALUE",
 *   Rules: [ // ImpersonationRuleList // required
 *     { // ImpersonationRule
 *       ImpersonationRuleId: "STRING_VALUE", // required
 *       Name: "STRING_VALUE",
 *       Description: "STRING_VALUE",
 *       Effect: "ALLOW" || "DENY", // required
 *       TargetUsers: [ // TargetUsers
 *         "STRING_VALUE",
 *       ],
 *       NotTargetUsers: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new CreateImpersonationRoleCommand(input);
 * const response = await client.send(command);
 * // { // CreateImpersonationRoleResponse
 * //   ImpersonationRoleId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateImpersonationRoleCommandInput - {@link CreateImpersonationRoleCommandInput}
 * @returns {@link CreateImpersonationRoleCommandOutput}
 * @see {@link CreateImpersonationRoleCommandInput} for command's `input` shape.
 * @see {@link CreateImpersonationRoleCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request exceeds the limit of the resource.
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *
 * An operation received a valid organization identifier that either doesn't belong or exist in the system.
 *
 * @throws {@link OrganizationStateException} (client fault)
 *
 * The organization must have a valid state to perform certain operations on the organization or its members.
 *
 * @throws {@link WorkMailServiceException}
 *
 * Base exception class for all service exceptions from WorkMail service.
 *
 * @public
 */
export class CreateImpersonationRoleCommand extends command<CreateImpersonationRoleCommandInput, CreateImpersonationRoleCommandOutput>(
  _ep0,
  _mw0,
  "CreateImpersonationRole",
  CreateImpersonationRole$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateImpersonationRoleRequest;
      output: CreateImpersonationRoleResponse;
    };
    sdk: {
      input: CreateImpersonationRoleCommandInput;
      output: CreateImpersonationRoleCommandOutput;
    };
  };
}
