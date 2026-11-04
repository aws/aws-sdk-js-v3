// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetIdentityProviderRequest, GetIdentityProviderResponse } from "../models/models_0";
import { GetIdentityProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetIdentityProviderCommand}.
 */
export interface GetIdentityProviderCommandInput extends GetIdentityProviderRequest {}
/**
 * @public
 *
 * The output of {@link GetIdentityProviderCommand}.
 */
export interface GetIdentityProviderCommandOutput extends GetIdentityProviderResponse, __MetadataBearer {}

/**
 * Gets the identity provider.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, GetIdentityProviderCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, GetIdentityProviderCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // GetIdentityProviderRequest
 *   identityProviderArn: "STRING_VALUE", // required
 * };
 * const command = new GetIdentityProviderCommand(input);
 * const response = await client.send(command);
 * // { // GetIdentityProviderResponse
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
 * @param GetIdentityProviderCommandInput - {@link GetIdentityProviderCommandInput}
 * @returns {@link GetIdentityProviderCommandOutput}
 * @see {@link GetIdentityProviderCommandInput} for command's `input` shape.
 * @see {@link GetIdentityProviderCommandOutput} for command's `response` shape.
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
export class GetIdentityProviderCommand extends command<GetIdentityProviderCommandInput, GetIdentityProviderCommandOutput>(
  _ep0,
  _mw0,
  "GetIdentityProvider",
  GetIdentityProvider$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIdentityProviderRequest;
      output: GetIdentityProviderResponse;
    };
    sdk: {
      input: GetIdentityProviderCommandInput;
      output: GetIdentityProviderCommandOutput;
    };
  };
}
