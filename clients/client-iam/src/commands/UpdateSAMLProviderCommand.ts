// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSAMLProviderRequest, UpdateSAMLProviderResponse } from "../models/models_1";
import { UpdateSAMLProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSAMLProviderCommand}.
 */
export interface UpdateSAMLProviderCommandInput extends UpdateSAMLProviderRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSAMLProviderCommand}.
 */
export interface UpdateSAMLProviderCommandOutput extends UpdateSAMLProviderResponse, __MetadataBearer {}

/**
 * <p>Updates the metadata document, SAML encryption settings, and private keys for an
 *             existing SAML provider. To rotate private keys, add your new private key and then remove
 *             the old key in a separate request.</p>
 *          <p>You can also use this operation to set, change, or remove the trusted identity
 *             propagation context provider, and to associate or disassociate an IAM Identity Center
 *             instance with the provider. To remove a configuration rather than replace it, use the
 *                 <code>RemoveContextProvider</code> and <code>RemoveIdentityCenterInstance</code>
 *             parameters. For each configuration, provide either the new value or the corresponding
 *                 <code>Remove</code> flag in a single request, but not both.</p>
 *          <p>A single request can change either the context provider or the provider metadata, but
 *             not both. Provider metadata includes the SAML metadata document, assertion encryption
 *             mode, private keys, and IAM Identity Center association. To change both, make separate
 *                 <code>UpdateSAMLProvider</code> requests. To remove the context provider, first
 *             remove the IAM Identity Center association in a separate request.</p>
 *          <p>To control who can configure trusted identity propagation on a SAML provider, use the
 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_EnableIdentityPropagation">iam:EnableIdentityPropagation</a>, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_EnableIdentityCenterAssociation">iam:EnableIdentityCenterAssociation</a>, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_RequestIdentityProviderIssuers">iam:RequestIdentityProviderIssuers</a>, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_ResourceIdentityProviderIssuers">iam:ResourceIdentityProviderIssuers</a>, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_RequestIdentityCenterInstanceArn">iam:RequestIdentityCenterInstanceArn</a>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_ResourceIdentityCenterInstanceArn">iam:ResourceIdentityCenterInstanceArn</a> condition keys in IAM
 *             policies. The <code>Request</code> keys contain the values in the request. The
 *                 <code>Resource</code> keys contain the values stored on the provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateSAMLProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateSAMLProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // UpdateSAMLProviderRequest
 *   SAMLMetadataDocument: "STRING_VALUE",
 *   SAMLProviderArn: "STRING_VALUE", // required
 *   AssertionEncryptionMode: "Required" || "Allowed",
 *   AddPrivateKey: "STRING_VALUE",
 *   RemovePrivateKey: "STRING_VALUE",
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
 * const command = new UpdateSAMLProviderCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSAMLProviderResponse
 * //   SAMLProviderArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSAMLProviderCommandInput - {@link UpdateSAMLProviderCommandInput}
 * @returns {@link UpdateSAMLProviderCommandOutput}
 * @see {@link UpdateSAMLProviderCommandInput} for command's `input` shape.
 * @see {@link UpdateSAMLProviderCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
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
 * @example To set the context provider for a SAML provider
 * ```javascript
 * // The following example sets a trusted identity propagation context provider on an existing SAML provider. The context provider uses the email attribute as the subject and maps the department attribute to a trusted context key.
 * const input = {
 *   ContextProvider: {
 *     KeyDefinitionList: [
 *       {
 *         SourceKey: "department",
 *         TargetKey: "department"
 *       }
 *     ],
 *     SubjectSourceKey: "email",
 *     SubjectTypeValue: "user"
 *   },
 *   SAMLProviderArn: "arn:aws:iam::123456789012:saml-provider/MyUniversity"
 * };
 * const command = new UpdateSAMLProviderCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SAMLProviderArn: "arn:aws:iam::123456789012:saml-provider/MyUniversity"
 * }
 * *\/
 * ```
 *
 * @example To associate an IAM Identity Center instance with a SAML provider
 * ```javascript
 * // The following example associates an IAM Identity Center instance with an existing SAML provider.
 * const input = {
 *   IdentityCenterInstanceArn: "arn:aws:sso:::instance/ssoins-1234567890abcdef",
 *   SAMLProviderArn: "arn:aws:iam::123456789012:saml-provider/MyUniversity"
 * };
 * const command = new UpdateSAMLProviderCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SAMLProviderArn: "arn:aws:iam::123456789012:saml-provider/MyUniversity"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateSAMLProviderCommand extends command<UpdateSAMLProviderCommandInput, UpdateSAMLProviderCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSAMLProvider",
  UpdateSAMLProvider$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSAMLProviderRequest;
      output: UpdateSAMLProviderResponse;
    };
    sdk: {
      input: UpdateSAMLProviderCommandInput;
      output: UpdateSAMLProviderCommandOutput;
    };
  };
}
