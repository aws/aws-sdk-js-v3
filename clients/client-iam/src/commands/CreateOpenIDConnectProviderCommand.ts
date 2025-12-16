// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { CreateOpenIDConnectProviderRequest, CreateOpenIDConnectProviderResponse } from "../models/models_0";
import { CreateOpenIDConnectProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateOpenIDConnectProviderCommand}.
 */
export interface CreateOpenIDConnectProviderCommandInput extends CreateOpenIDConnectProviderRequest {}
/**
 * @public
 *
 * The output of {@link CreateOpenIDConnectProviderCommand}.
 */
export interface CreateOpenIDConnectProviderCommandOutput
  extends CreateOpenIDConnectProviderResponse,
    __MetadataBearer {}

/**
 * <p>Creates an IAM entity to describe an identity provider (IdP) that supports <a href="http://openid.net/connect/">OpenID Connect (OIDC)</a>.</p>
 *          <p>The OIDC provider that you create with this operation can be used as a principal in a
 *             role's trust policy. Such a policy establishes a trust relationship between Amazon Web Services and
 *             the OIDC provider.</p>
 *          <p>If you are using an OIDC identity provider from Google, Facebook, or Amazon Cognito, you don't
 *             need to create a separate IAM identity provider. These OIDC identity providers are
 *             already built-in to Amazon Web Services and are available for your use. Instead, you can move directly
 *             to creating new roles using your identity provider. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html">Creating
 *                 a role for web identity or OpenID connect federation</a> in the <i>IAM
 *                 User Guide</i>.</p>
 *          <p>When you create the IAM OIDC provider, you specify the following:</p>
 *          <ul>
 *             <li>
 *                <p>The URL of the OIDC identity provider (IdP) to trust</p>
 *             </li>
 *             <li>
 *                <p>A list of client IDs (also known as audiences) that identify the application
 *                     or applications allowed to authenticate using the OIDC provider</p>
 *             </li>
 *             <li>
 *                <p>A list of tags that are attached to the specified IAM OIDC provider</p>
 *             </li>
 *             <li>
 *                <p>A list of thumbprints of one or more server certificates that the IdP
 *                     uses</p>
 *             </li>
 *          </ul>
 *          <p>You get all of this information from the OIDC IdP you want to use to access
 *             Amazon Web Services.</p>
 *          <note>
 *             <p>Amazon Web Services secures communication with OIDC identity providers (IdPs) using our library of
 *             trusted root certificate authorities (CAs) to verify the JSON Web Key Set (JWKS)
 *             endpoint's TLS certificate. If your OIDC IdP relies on a certificate that is not signed
 *             by one of these trusted CAs, only then we secure communication using the thumbprints set
 *             in the IdP's configuration.</p>
 *          </note>
 *          <note>
 *             <p>The trust for the OIDC provider is derived from the IAM provider that this
 *                 operation creates. Therefore, it is best to limit access to the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html">CreateOpenIDConnectProvider</a> operation to highly privileged
 *                 users.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateOpenIDConnectProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateOpenIDConnectProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // CreateOpenIDConnectProviderRequest
 *   Url: "STRING_VALUE", // required
 *   ClientIDList: [ // clientIDListType
 *     "STRING_VALUE",
 *   ],
 *   ThumbprintList: [ // thumbprintListType
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // tagListType
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateOpenIDConnectProviderCommand(input);
 * const response = await client.send(command);
 * // { // CreateOpenIDConnectProviderResponse
 * //   OpenIDConnectProviderArn: "STRING_VALUE",
 * //   Tags: [ // tagListType
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateOpenIDConnectProviderCommandInput - {@link CreateOpenIDConnectProviderCommandInput}
 * @returns {@link CreateOpenIDConnectProviderCommandOutput}
 * @see {@link CreateOpenIDConnectProviderCommandInput} for command's `input` shape.
 * @see {@link CreateOpenIDConnectProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The request was rejected because it attempted to create a resource that already
 *       exists.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link OpenIdIdpCommunicationErrorException} (client fault)
 *  <p>The request failed because IAM cannot connect to the OpenID Connect identity provider
 *       URL.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @example To create an instance profile
 * ```javascript
 * // The following example defines a new OIDC provider in IAM with a client ID of my-application-id and pointing at the server with a URL of https://server.example.com.
 * const input = {
 *   ClientIDList: [
 *     "my-application-id"
 *   ],
 *   ThumbprintList: [
 *     "3768084dfb3d2b68b7897bf5f565da8efEXAMPLE"
 *   ],
 *   Url: "https://server.example.com"
 * };
 * const command = new CreateOpenIDConnectProviderCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   OpenIDConnectProviderArn: "arn:aws:iam::123456789012:oidc-provider/server.example.com"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateOpenIDConnectProviderCommand extends $Command
  .classBuilder<
    CreateOpenIDConnectProviderCommandInput,
    CreateOpenIDConnectProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "CreateOpenIDConnectProvider", {})
  .n("IAMClient", "CreateOpenIDConnectProviderCommand")
  .sc(CreateOpenIDConnectProvider$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOpenIDConnectProviderRequest;
      output: CreateOpenIDConnectProviderResponse;
    };
    sdk: {
      input: CreateOpenIDConnectProviderCommandInput;
      output: CreateOpenIDConnectProviderCommandOutput;
    };
  };
}
