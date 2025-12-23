// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DeleteIdentityProviderConfigurationRequest,
  DeleteIdentityProviderConfigurationResponse,
} from "../models/models_0";
import { DeleteIdentityProviderConfiguration$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIdentityProviderConfigurationCommand}.
 */
export interface DeleteIdentityProviderConfigurationCommandInput extends DeleteIdentityProviderConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIdentityProviderConfigurationCommand}.
 */
export interface DeleteIdentityProviderConfigurationCommandOutput extends DeleteIdentityProviderConfigurationResponse, __MetadataBearer {}

/**
 * <p>
 *          Disables the integration between IdC and WorkMail. Authentication will continue with the directory as it was before the IdC integration. You might have to reset your directory passwords and reconfigure your desktop and mobile email clients.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DeleteIdentityProviderConfigurationCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DeleteIdentityProviderConfigurationCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // DeleteIdentityProviderConfigurationRequest
 *   OrganizationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteIdentityProviderConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIdentityProviderConfigurationCommandInput - {@link DeleteIdentityProviderConfigurationCommandInput}
 * @returns {@link DeleteIdentityProviderConfigurationCommandOutput}
 * @see {@link DeleteIdentityProviderConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteIdentityProviderConfigurationCommandOutput} for command's `response` shape.
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
export class DeleteIdentityProviderConfigurationCommand extends $Command
  .classBuilder<
    DeleteIdentityProviderConfigurationCommandInput,
    DeleteIdentityProviderConfigurationCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "DeleteIdentityProviderConfiguration", {})
  .n("WorkMailClient", "DeleteIdentityProviderConfigurationCommand")
  .sc(DeleteIdentityProviderConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIdentityProviderConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteIdentityProviderConfigurationCommandInput;
      output: DeleteIdentityProviderConfigurationCommandOutput;
    };
  };
}
