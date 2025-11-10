// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateIdentityProviderRequest, UpdateIdentityProviderResponse } from "../models/models_0";
import { UpdateIdentityProvider } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateIdentityProviderCommand}.
 */
export interface UpdateIdentityProviderCommandInput extends UpdateIdentityProviderRequest {}
/**
 * @public
 *
 * The output of {@link UpdateIdentityProviderCommand}.
 */
export interface UpdateIdentityProviderCommandOutput extends UpdateIdentityProviderResponse, __MetadataBearer {}

/**
 * <p>Updates the identity provider. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, UpdateIdentityProviderCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, UpdateIdentityProviderCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // UpdateIdentityProviderRequest
 *   identityProviderArn: "STRING_VALUE", // required
 *   identityProviderName: "STRING_VALUE",
 *   identityProviderType: "STRING_VALUE",
 *   identityProviderDetails: { // IdentityProviderDetails
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateIdentityProviderCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIdentityProviderResponse
 * //   identityProvider: { // IdentityProvider
 * //     identityProviderArn: "STRING_VALUE", // required
 * //     identityProviderName: "STRING_VALUE",
 * //     identityProviderType: "STRING_VALUE",
 * //     identityProviderDetails: { // IdentityProviderDetails
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateIdentityProviderCommandInput - {@link UpdateIdentityProviderCommandInput}
 * @returns {@link UpdateIdentityProviderCommandOutput}
 * @see {@link UpdateIdentityProviderCommandInput} for command's `input` shape.
 * @see {@link UpdateIdentityProviderCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>There is a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There is a validation error.</p>
 *
 * @throws {@link WorkSpacesWebServiceException}
 * <p>Base exception class for all service exceptions from WorkSpacesWeb service.</p>
 *
 *
 * @public
 */
export class UpdateIdentityProviderCommand extends $Command
  .classBuilder<
    UpdateIdentityProviderCommandInput,
    UpdateIdentityProviderCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSErmineControlPlaneService", "UpdateIdentityProvider", {})
  .n("WorkSpacesWebClient", "UpdateIdentityProviderCommand")
  .sc(UpdateIdentityProvider)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIdentityProviderRequest;
      output: UpdateIdentityProviderResponse;
    };
    sdk: {
      input: UpdateIdentityProviderCommandInput;
      output: UpdateIdentityProviderCommandOutput;
    };
  };
}
