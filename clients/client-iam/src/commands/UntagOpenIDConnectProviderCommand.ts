// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UntagOpenIDConnectProviderRequest } from "../models/models_1";
import { UntagOpenIDConnectProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UntagOpenIDConnectProviderCommand}.
 */
export interface UntagOpenIDConnectProviderCommandInput extends UntagOpenIDConnectProviderRequest {}
/**
 * @public
 *
 * The output of {@link UntagOpenIDConnectProviderCommand}.
 */
export interface UntagOpenIDConnectProviderCommandOutput extends __MetadataBearer {}

/**
 * Removes the specified tags from the specified OpenID Connect (OIDC)-compatible identity provider in IAM. For more information about OIDC providers, see [About web identity federation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html). For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UntagOpenIDConnectProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UntagOpenIDConnectProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // UntagOpenIDConnectProviderRequest
 *   OpenIDConnectProviderArn: "STRING_VALUE", // required
 *   TagKeys: [ // tagKeyListType // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UntagOpenIDConnectProviderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UntagOpenIDConnectProviderCommandInput - {@link UntagOpenIDConnectProviderCommandInput}
 * @returns {@link UntagOpenIDConnectProviderCommandOutput}
 * @see {@link UntagOpenIDConnectProviderCommandInput} for command's `input` shape.
 * @see {@link UntagOpenIDConnectProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * The request was rejected because multiple requests to change this object were submitted simultaneously. Wait a few minutes and submit your request again.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The request was rejected because an invalid or out-of-range value was supplied for an input parameter.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
 *
 * @public
 */
export class UntagOpenIDConnectProviderCommand extends command<UntagOpenIDConnectProviderCommandInput, UntagOpenIDConnectProviderCommandOutput>(
  _ep0,
  _mw0,
  "UntagOpenIDConnectProvider",
  UntagOpenIDConnectProvider$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UntagOpenIDConnectProviderRequest;
      output: {};
    };
    sdk: {
      input: UntagOpenIDConnectProviderCommandInput;
      output: UntagOpenIDConnectProviderCommandOutput;
    };
  };
}
