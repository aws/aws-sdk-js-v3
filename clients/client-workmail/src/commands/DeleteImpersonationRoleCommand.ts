// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteImpersonationRoleRequest, DeleteImpersonationRoleResponse } from "../models/models_0";
import { DeleteImpersonationRole$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteImpersonationRoleCommand}.
 */
export interface DeleteImpersonationRoleCommandInput extends DeleteImpersonationRoleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteImpersonationRoleCommand}.
 */
export interface DeleteImpersonationRoleCommandOutput extends DeleteImpersonationRoleResponse, __MetadataBearer {}

/**
 * Deletes an impersonation role for the given WorkMail organization.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DeleteImpersonationRoleCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DeleteImpersonationRoleCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // DeleteImpersonationRoleRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   ImpersonationRoleId: "STRING_VALUE", // required
 * };
 * const command = new DeleteImpersonationRoleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteImpersonationRoleCommandInput - {@link DeleteImpersonationRoleCommandInput}
 * @returns {@link DeleteImpersonationRoleCommandOutput}
 * @see {@link DeleteImpersonationRoleCommandInput} for command's `input` shape.
 * @see {@link DeleteImpersonationRoleCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
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
 * @throws {@link WorkMailServiceException}
 *
 * Base exception class for all service exceptions from WorkMail service.
 *
 * @public
 */
export class DeleteImpersonationRoleCommand extends command<DeleteImpersonationRoleCommandInput, DeleteImpersonationRoleCommandOutput>(
  _ep0,
  _mw0,
  "DeleteImpersonationRole",
  DeleteImpersonationRole$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteImpersonationRoleRequest;
      output: {};
    };
    sdk: {
      input: DeleteImpersonationRoleCommandInput;
      output: DeleteImpersonationRoleCommandOutput;
    };
  };
}
