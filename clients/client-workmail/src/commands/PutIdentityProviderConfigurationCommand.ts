// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutIdentityProviderConfigurationRequest,
  PutIdentityProviderConfigurationResponse,
} from "../models/models_0";
import { PutIdentityProviderConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutIdentityProviderConfigurationCommand}.
 */
export interface PutIdentityProviderConfigurationCommandInput extends PutIdentityProviderConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutIdentityProviderConfigurationCommand}.
 */
export interface PutIdentityProviderConfigurationCommandOutput extends PutIdentityProviderConfigurationResponse, __MetadataBearer {}

/**
 * Enables integration between IAM Identity Center (IdC) and WorkMail to proxy authentication requests for mailbox users. You can connect your IdC directory or your external directory to WorkMail through IdC and manage access to WorkMail mailboxes in a single place. For enhanced protection, you could enable Multifactor Authentication (MFA) and Personal Access Tokens.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, PutIdentityProviderConfigurationCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, PutIdentityProviderConfigurationCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // PutIdentityProviderConfigurationRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   AuthenticationMode: "IDENTITY_PROVIDER_ONLY" || "IDENTITY_PROVIDER_AND_DIRECTORY", // required
 *   IdentityCenterConfiguration: { // IdentityCenterConfiguration
 *     InstanceArn: "STRING_VALUE", // required
 *     ApplicationArn: "STRING_VALUE", // required
 *   },
 *   PersonalAccessTokenConfiguration: { // PersonalAccessTokenConfiguration
 *     Status: "ACTIVE" || "INACTIVE", // required
 *     LifetimeInDays: Number("int"),
 *   },
 * };
 * const command = new PutIdentityProviderConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutIdentityProviderConfigurationCommandInput - {@link PutIdentityProviderConfigurationCommandInput}
 * @returns {@link PutIdentityProviderConfigurationCommandOutput}
 * @see {@link PutIdentityProviderConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutIdentityProviderConfigurationCommandOutput} for command's `response` shape.
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
export class PutIdentityProviderConfigurationCommand extends command<PutIdentityProviderConfigurationCommandInput, PutIdentityProviderConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutIdentityProviderConfiguration",
  PutIdentityProviderConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutIdentityProviderConfigurationRequest;
      output: {};
    };
    sdk: {
      input: PutIdentityProviderConfigurationCommandInput;
      output: PutIdentityProviderConfigurationCommandOutput;
    };
  };
}
