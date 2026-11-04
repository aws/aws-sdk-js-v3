// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteIdentityProviderConfigurationRequest,
  DeleteIdentityProviderConfigurationResponse,
} from "../models/models_0";
import { DeleteIdentityProviderConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Disables the integration between IdC and WorkMail. Authentication will continue with the directory as it was before the IdC integration. You might have to reset your directory passwords and reconfigure your desktop and mobile email clients.
 *
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
export class DeleteIdentityProviderConfigurationCommand extends command<DeleteIdentityProviderConfigurationCommandInput, DeleteIdentityProviderConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteIdentityProviderConfiguration",
  DeleteIdentityProviderConfiguration$
) {
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
