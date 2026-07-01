// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateIdentityProviderRequest, CreateIdentityProviderResponse } from "../models/models_0";
import { CreateIdentityProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateIdentityProviderCommand}.
 */
export interface CreateIdentityProviderCommandInput extends CreateIdentityProviderRequest {}
/**
 * @public
 *
 * The output of {@link CreateIdentityProviderCommand}.
 */
export interface CreateIdentityProviderCommandOutput extends CreateIdentityProviderResponse, __MetadataBearer {}

/**
 * <p>Creates an identity provider resource that is then associated with a web portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, CreateIdentityProviderCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, CreateIdentityProviderCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // CreateIdentityProviderRequest
 *   portalArn: "STRING_VALUE", // required
 *   identityProviderName: "STRING_VALUE", // required
 *   identityProviderType: "STRING_VALUE", // required
 *   identityProviderDetails: { // IdentityProviderDetails // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateIdentityProviderCommand(input);
 * const response = await client.send(command);
 * // { // CreateIdentityProviderResponse
 * //   identityProviderArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateIdentityProviderCommandInput - {@link CreateIdentityProviderCommandInput}
 * @returns {@link CreateIdentityProviderCommandOutput}
 * @see {@link CreateIdentityProviderCommandInput} for command's `input` shape.
 * @see {@link CreateIdentityProviderCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
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
export class CreateIdentityProviderCommand extends command<CreateIdentityProviderCommandInput, CreateIdentityProviderCommandOutput>(
  _ep0,
  _mw0,
  "CreateIdentityProvider",
  CreateIdentityProvider$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIdentityProviderRequest;
      output: CreateIdentityProviderResponse;
    };
    sdk: {
      input: CreateIdentityProviderCommandInput;
      output: CreateIdentityProviderCommandOutput;
    };
  };
}
