// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateOpenIDConnectProviderRequest } from "../models/models_1";
import { UpdateOpenIDConnectProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateOpenIDConnectProviderCommand}.
 */
export interface UpdateOpenIDConnectProviderCommandInput extends UpdateOpenIDConnectProviderRequest {}
/**
 * @public
 *
 * The output of {@link UpdateOpenIDConnectProviderCommand}.
 */
export interface UpdateOpenIDConnectProviderCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the configuration of an existing IAM OpenID Connect (OIDC) identity provider
 *             resource object. Use this operation to set, change, or remove the trusted identity
 *             propagation context provider, and to associate or disassociate an IAM Identity Center
 *             instance with the provider.</p>
 *          <note>
 *             <p>This operation does not update the OIDC provider's server certificate thumbprints.
 *                 Thumbprints are managed only by the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateOpenIDConnectProviderThumbprint.html">UpdateOpenIDConnectProviderThumbprint</a> operation. To change a provider's
 *                 thumbprints, call that operation instead.</p>
 *          </note>
 *          <p>To remove a configuration rather than replace it, use the
 *                 <code>RemoveContextProvider</code> and <code>RemoveIdentityCenterInstance</code>
 *             parameters. For each configuration, provide either the new value or the corresponding
 *                 <code>Remove</code> flag in a single request, but not both. For example, specifying
 *             both <code>ContextProvider</code> and <code>RemoveContextProvider</code> in the same
 *             request is not allowed.</p>
 *          <p>A single request can change either the context provider or the IAM Identity Center
 *             association, but not both. To change both, make separate
 *                 <code>UpdateOpenIDConnectProvider</code> requests. To remove the context provider,
 *             first remove the IAM Identity Center association in a separate request.</p>
 *          <p>To control who can configure trusted identity propagation on an OIDC provider, use the
 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_EnableIdentityPropagation">iam:EnableIdentityPropagation</a>, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_EnableIdentityCenterAssociation">iam:EnableIdentityCenterAssociation</a>, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_ResourceIdentityProviderIssuers">iam:ResourceIdentityProviderIssuers</a>, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_RequestIdentityCenterInstanceArn">iam:RequestIdentityCenterInstanceArn</a>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_ResourceIdentityCenterInstanceArn">iam:ResourceIdentityCenterInstanceArn</a> condition keys in IAM
 *             policies. The <code>Request</code> keys contain the values in the request. The
 *                 <code>Resource</code> keys contain the values stored on the provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateOpenIDConnectProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateOpenIDConnectProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // UpdateOpenIDConnectProviderRequest
 *   OpenIDConnectProviderArn: "STRING_VALUE", // required
 *   ContextProvider: { // ContextProvider
 *     KeyDefinitionList: [ // keyDefinitionListType
 *       { // ContextProviderKeyDefinition
 *         SourceKey: "STRING_VALUE", // required
 *         TargetKey: "STRING_VALUE",
 *       },
 *     ],
 *     SubjectSourceKey: "STRING_VALUE", // required
 *     SubjectTypeValue: "STRING_VALUE",
 *     SubjectTypeSourceKey: "STRING_VALUE",
 *   },
 *   IdentityCenterInstanceArn: "STRING_VALUE",
 *   RemoveContextProvider: true || false,
 *   RemoveIdentityCenterInstance: true || false,
 * };
 * const command = new UpdateOpenIDConnectProviderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateOpenIDConnectProviderCommandInput - {@link UpdateOpenIDConnectProviderCommandInput}
 * @returns {@link UpdateOpenIDConnectProviderCommandOutput}
 * @see {@link UpdateOpenIDConnectProviderCommandInput} for command's `input` shape.
 * @see {@link UpdateOpenIDConnectProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
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
 * @example To set the context provider for an OIDC provider
 * ```javascript
 * // The following example sets a trusted identity propagation context provider on an existing OIDC provider. The context provider uses the sub claim as the subject and maps the department claim to a trusted context key.
 * const input = {
 *   ContextProvider: {
 *     KeyDefinitionList: [
 *       {
 *         SourceKey: "department",
 *         TargetKey: "department"
 *       }
 *     ],
 *     SubjectSourceKey: "sub",
 *     SubjectTypeValue: "user"
 *   },
 *   OpenIDConnectProviderArn: "arn:aws:iam::123456789012:oidc-provider/server.example.com"
 * };
 * const command = new UpdateOpenIDConnectProviderCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @example To associate an IAM Identity Center instance with an OIDC provider
 * ```javascript
 * // The following example associates an IAM Identity Center instance with an existing OIDC provider.
 * const input = {
 *   IdentityCenterInstanceArn: "arn:aws:sso:::instance/ssoins-1234567890abcdef",
 *   OpenIDConnectProviderArn: "arn:aws:iam::123456789012:oidc-provider/server.example.com"
 * };
 * const command = new UpdateOpenIDConnectProviderCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateOpenIDConnectProviderCommand extends command<UpdateOpenIDConnectProviderCommandInput, UpdateOpenIDConnectProviderCommandOutput>(
  _ep0,
  _mw0,
  "UpdateOpenIDConnectProvider",
  UpdateOpenIDConnectProvider$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateOpenIDConnectProviderRequest;
      output: {};
    };
    sdk: {
      input: UpdateOpenIDConnectProviderCommandInput;
      output: UpdateOpenIDConnectProviderCommandOutput;
    };
  };
}
