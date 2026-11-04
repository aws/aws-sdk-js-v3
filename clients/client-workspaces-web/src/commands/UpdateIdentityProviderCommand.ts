// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateIdentityProviderRequest, UpdateIdentityProviderResponse } from "../models/models_0";
import { UpdateIdentityProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the identity provider.
 *
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
 *
 * Access is denied.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is an internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * There is a throttling error.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * There is a validation error.
 *
 * @throws {@link WorkSpacesWebServiceException}
 *
 * Base exception class for all service exceptions from WorkSpacesWeb service.
 *
 * @public
 */
export class UpdateIdentityProviderCommand extends command<UpdateIdentityProviderCommandInput, UpdateIdentityProviderCommandOutput>(
  _ep0,
  _mw0,
  "UpdateIdentityProvider",
  UpdateIdentityProvider$
) {
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
