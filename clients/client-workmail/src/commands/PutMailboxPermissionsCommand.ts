// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutMailboxPermissionsRequest, PutMailboxPermissionsResponse } from "../models/models_0";
import { PutMailboxPermissions } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Sets permissions for a user, group, or resource. This replaces any pre-existing
 *          permissions.</p>
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
 *  <p>The identifier supplied for the user, group, or resource does not exist in your
 *          organization.</p>
 *
 * @throws {@link EntityStateException} (client fault)
 *  <p>You are performing an operation on a user, group, or resource that isn't in the
 *          expected state, such as trying to delete an active user.</p>
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
export class PutMailboxPermissionsCommand extends $Command
  .classBuilder<
    PutMailboxPermissionsCommandInput,
    PutMailboxPermissionsCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "PutMailboxPermissions", {})
  .n("WorkMailClient", "PutMailboxPermissionsCommand")
  .sc(PutMailboxPermissions)
  .build() {
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
