// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteImpersonationRoleRequest, DeleteImpersonationRoleResponse } from "../models/models_0";
import { DeleteImpersonationRole } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes an impersonation role for the given WorkMail organization.</p>
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
export class DeleteImpersonationRoleCommand extends $Command
  .classBuilder<
    DeleteImpersonationRoleCommandInput,
    DeleteImpersonationRoleCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "DeleteImpersonationRole", {})
  .n("WorkMailClient", "DeleteImpersonationRoleCommand")
  .sc(DeleteImpersonationRole)
  .build() {
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
