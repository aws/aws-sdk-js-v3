// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteIdentityProviderRequest, DeleteIdentityProviderResponse } from "../models/models_0";
import { DeleteIdentityProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteIdentityProviderCommand}.
 */
export interface DeleteIdentityProviderCommandInput extends DeleteIdentityProviderRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIdentityProviderCommand}.
 */
export interface DeleteIdentityProviderCommandOutput extends DeleteIdentityProviderResponse, __MetadataBearer {}

/**
 * Deletes the identity provider.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, DeleteIdentityProviderCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, DeleteIdentityProviderCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // DeleteIdentityProviderRequest
 *   identityProviderArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteIdentityProviderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIdentityProviderCommandInput - {@link DeleteIdentityProviderCommandInput}
 * @returns {@link DeleteIdentityProviderCommandOutput}
 * @see {@link DeleteIdentityProviderCommandInput} for command's `input` shape.
 * @see {@link DeleteIdentityProviderCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is an internal server error.
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
export class DeleteIdentityProviderCommand extends command<DeleteIdentityProviderCommandInput, DeleteIdentityProviderCommandOutput>(
  _ep0,
  _mw0,
  "DeleteIdentityProvider",
  DeleteIdentityProvider$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIdentityProviderRequest;
      output: {};
    };
    sdk: {
      input: DeleteIdentityProviderCommandInput;
      output: DeleteIdentityProviderCommandOutput;
    };
  };
}
