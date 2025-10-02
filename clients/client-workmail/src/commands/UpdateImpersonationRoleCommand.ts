// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateImpersonationRoleRequest, UpdateImpersonationRoleResponse } from "../models/models_0";
import { de_UpdateImpersonationRoleCommand, se_UpdateImpersonationRoleCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateImpersonationRoleCommand}.
 */
export interface UpdateImpersonationRoleCommandInput extends UpdateImpersonationRoleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateImpersonationRoleCommand}.
 */
export interface UpdateImpersonationRoleCommandOutput extends UpdateImpersonationRoleResponse, __MetadataBearer {}

/**
 * <p>Updates an impersonation role for the given WorkMail organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, UpdateImpersonationRoleCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, UpdateImpersonationRoleCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // UpdateImpersonationRoleRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   ImpersonationRoleId: "STRING_VALUE", // required
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
 * const command = new UpdateImpersonationRoleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateImpersonationRoleCommandInput - {@link UpdateImpersonationRoleCommandInput}
 * @returns {@link UpdateImpersonationRoleCommandOutput}
 * @see {@link UpdateImpersonationRoleCommandInput} for command's `input` shape.
 * @see {@link UpdateImpersonationRoleCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeds the limit of the resource.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class UpdateImpersonationRoleCommand extends $Command
  .classBuilder<
    UpdateImpersonationRoleCommandInput,
    UpdateImpersonationRoleCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkMailService", "UpdateImpersonationRole", {})
  .n("WorkMailClient", "UpdateImpersonationRoleCommand")
  .f(void 0, void 0)
  .ser(se_UpdateImpersonationRoleCommand)
  .de(de_UpdateImpersonationRoleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateImpersonationRoleRequest;
      output: {};
    };
    sdk: {
      input: UpdateImpersonationRoleCommandInput;
      output: UpdateImpersonationRoleCommandOutput;
    };
  };
}
