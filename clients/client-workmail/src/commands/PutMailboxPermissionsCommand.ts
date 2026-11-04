// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutMailboxPermissionsRequest, PutMailboxPermissionsResponse } from "../models/models_0";
import { PutMailboxPermissions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutMailboxPermissionsCommand}.
 */
export interface PutMailboxPermissionsCommandInput extends PutMailboxPermissionsRequest {}
/**
 * @public
 *
 * The output of {@link PutMailboxPermissionsCommand}.
 */
export interface PutMailboxPermissionsCommandOutput extends PutMailboxPermissionsResponse, __MetadataBearer {}

/**
 * Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, PutMailboxPermissionsCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, PutMailboxPermissionsCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // PutMailboxPermissionsRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   EntityId: "STRING_VALUE", // required
 *   GranteeId: "STRING_VALUE", // required
 *   PermissionValues: [ // PermissionValues // required
 *     "FULL_ACCESS" || "SEND_AS" || "SEND_ON_BEHALF",
 *   ],
 * };
 * const command = new PutMailboxPermissionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutMailboxPermissionsCommandInput - {@link PutMailboxPermissionsCommandInput}
 * @returns {@link PutMailboxPermissionsCommandOutput}
 * @see {@link PutMailboxPermissionsCommandInput} for command's `input` shape.
 * @see {@link PutMailboxPermissionsCommandOutput} for command's `response` shape.
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
 * @throws {@link WorkMailServiceException}
 *
 * Base exception class for all service exceptions from WorkMail service.
 *
 * @public
 */
export class PutMailboxPermissionsCommand extends command<PutMailboxPermissionsCommandInput, PutMailboxPermissionsCommandOutput>(
  _ep0,
  _mw0,
  "PutMailboxPermissions",
  PutMailboxPermissions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutMailboxPermissionsRequest;
      output: {};
    };
    sdk: {
      input: PutMailboxPermissionsCommandInput;
      output: PutMailboxPermissionsCommandOutput;
    };
  };
}
