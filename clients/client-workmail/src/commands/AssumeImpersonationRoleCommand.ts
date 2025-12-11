// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { AssumeImpersonationRoleRequest, AssumeImpersonationRoleResponse } from "../models/models_0";
import { AssumeImpersonationRole } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssumeImpersonationRoleCommand}.
 */
export interface AssumeImpersonationRoleCommandInput extends AssumeImpersonationRoleRequest {}
/**
 * @public
 *
 * The output of {@link AssumeImpersonationRoleCommand}.
 */
export interface AssumeImpersonationRoleCommandOutput extends AssumeImpersonationRoleResponse, __MetadataBearer {}

/**
 * <p>Assumes an impersonation role for the given WorkMail organization. This method returns an
 *          authentication token you can use to make impersonated calls.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, AssumeImpersonationRoleCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, AssumeImpersonationRoleCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // AssumeImpersonationRoleRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   ImpersonationRoleId: "STRING_VALUE", // required
 * };
 * const command = new AssumeImpersonationRoleCommand(input);
 * const response = await client.send(command);
 * // { // AssumeImpersonationRoleResponse
 * //   Token: "STRING_VALUE",
 * //   ExpiresIn: Number("long"),
 * // };
 *
 * ```
 *
 * @param AssumeImpersonationRoleCommandInput - {@link AssumeImpersonationRoleCommandInput}
 * @returns {@link AssumeImpersonationRoleCommandOutput}
 * @see {@link AssumeImpersonationRoleCommandInput} for command's `input` shape.
 * @see {@link AssumeImpersonationRoleCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class AssumeImpersonationRoleCommand extends $Command
  .classBuilder<
    AssumeImpersonationRoleCommandInput,
    AssumeImpersonationRoleCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "AssumeImpersonationRole", {})
  .n("WorkMailClient", "AssumeImpersonationRoleCommand")
  .sc(AssumeImpersonationRole)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssumeImpersonationRoleRequest;
      output: AssumeImpersonationRoleResponse;
    };
    sdk: {
      input: AssumeImpersonationRoleCommandInput;
      output: AssumeImpersonationRoleCommandOutput;
    };
  };
}
