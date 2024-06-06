// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateIdentityProviderConfigurationRequest,
  UpdateIdentityProviderConfigurationResponse,
} from "../models/models_0";
import {
  de_UpdateIdentityProviderConfigurationCommand,
  se_UpdateIdentityProviderConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateIdentityProviderConfigurationCommand}.
 */
export interface UpdateIdentityProviderConfigurationCommandInput extends UpdateIdentityProviderConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateIdentityProviderConfigurationCommand}.
 */
export interface UpdateIdentityProviderConfigurationCommandOutput
  extends UpdateIdentityProviderConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the identity provider configuration for the fleet.</p>
 *
 * @deprecated Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, UpdateIdentityProviderConfigurationCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, UpdateIdentityProviderConfigurationCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const input = { // UpdateIdentityProviderConfigurationRequest
 *   FleetArn: "STRING_VALUE", // required
 *   IdentityProviderType: "SAML", // required
 *   IdentityProviderSamlMetadata: "STRING_VALUE",
 * };
 * const command = new UpdateIdentityProviderConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateIdentityProviderConfigurationCommandInput - {@link UpdateIdentityProviderConfigurationCommandInput}
 * @returns {@link UpdateIdentityProviderConfigurationCommandOutput}
 * @see {@link UpdateIdentityProviderConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateIdentityProviderConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for WorkLinkClient's `config` shape.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this action.</p>
 *
 * @throws {@link WorkLinkServiceException}
 * <p>Base exception class for all service exceptions from WorkLink service.</p>
 *
 * @public
 */
export class UpdateIdentityProviderConfigurationCommand extends $Command
  .classBuilder<
    UpdateIdentityProviderConfigurationCommandInput,
    UpdateIdentityProviderConfigurationCommandOutput,
    WorkLinkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkLinkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkLink", "UpdateIdentityProviderConfiguration", {})
  .n("WorkLinkClient", "UpdateIdentityProviderConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateIdentityProviderConfigurationCommand)
  .de(de_UpdateIdentityProviderConfigurationCommand)
  .build() {}
