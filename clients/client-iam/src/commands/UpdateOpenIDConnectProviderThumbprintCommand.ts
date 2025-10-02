// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateOpenIDConnectProviderThumbprintRequest } from "../models/models_1";
import {
  de_UpdateOpenIDConnectProviderThumbprintCommand,
  se_UpdateOpenIDConnectProviderThumbprintCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateOpenIDConnectProviderThumbprintCommand}.
 */
export interface UpdateOpenIDConnectProviderThumbprintCommandInput
  extends UpdateOpenIDConnectProviderThumbprintRequest {}
/**
 * @public
 *
 * The output of {@link UpdateOpenIDConnectProviderThumbprintCommand}.
 */
export interface UpdateOpenIDConnectProviderThumbprintCommandOutput extends __MetadataBearer {}

/**
 * <p>Replaces the existing list of server certificate thumbprints associated with an OpenID
 *             Connect (OIDC) provider resource object with a new list of thumbprints.</p>
 *          <p>The list that you pass with this operation completely replaces the existing list of
 *             thumbprints. (The lists are not merged.)</p>
 *          <p>Typically, you need to update a thumbprint only when the identity provider certificate
 *             changes, which occurs rarely. However, if the provider's certificate
 *                 <i>does</i> change, any attempt to assume an IAM role that specifies
 *             the OIDC provider as a principal fails until the certificate thumbprint is
 *             updated.</p>
 *          <note>
 *             <p>Amazon Web Services secures communication with OIDC identity providers (IdPs) using our library of
 *             trusted root certificate authorities (CAs) to verify the JSON Web Key Set (JWKS)
 *             endpoint's TLS certificate. If your OIDC IdP relies on a certificate that is not signed
 *             by one of these trusted CAs, only then we secure communication using the thumbprints set
 *             in the IdP's configuration.</p>
 *          </note>
 *          <note>
 *             <p>Trust for the OIDC provider is derived from the provider certificate and is
 *                 validated by the thumbprint. Therefore, it is best to limit access to the
 *                     <code>UpdateOpenIDConnectProviderThumbprint</code> operation to highly
 *                 privileged users.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateOpenIDConnectProviderThumbprintCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateOpenIDConnectProviderThumbprintCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // UpdateOpenIDConnectProviderThumbprintRequest
 *   OpenIDConnectProviderArn: "STRING_VALUE", // required
 *   ThumbprintList: [ // thumbprintListType // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateOpenIDConnectProviderThumbprintCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateOpenIDConnectProviderThumbprintCommandInput - {@link UpdateOpenIDConnectProviderThumbprintCommandInput}
 * @returns {@link UpdateOpenIDConnectProviderThumbprintCommandOutput}
 * @see {@link UpdateOpenIDConnectProviderThumbprintCommandInput} for command's `input` shape.
 * @see {@link UpdateOpenIDConnectProviderThumbprintCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class UpdateOpenIDConnectProviderThumbprintCommand extends $Command
  .classBuilder<
    UpdateOpenIDConnectProviderThumbprintCommandInput,
    UpdateOpenIDConnectProviderThumbprintCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "UpdateOpenIDConnectProviderThumbprint", {})
  .n("IAMClient", "UpdateOpenIDConnectProviderThumbprintCommand")
  .f(void 0, void 0)
  .ser(se_UpdateOpenIDConnectProviderThumbprintCommand)
  .de(de_UpdateOpenIDConnectProviderThumbprintCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateOpenIDConnectProviderThumbprintRequest;
      output: {};
    };
    sdk: {
      input: UpdateOpenIDConnectProviderThumbprintCommandInput;
      output: UpdateOpenIDConnectProviderThumbprintCommandOutput;
    };
  };
}
