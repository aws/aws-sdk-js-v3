// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSAMLProviderRequest, CreateSAMLProviderResponse } from "../models/models_0";
import { CreateSAMLProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSAMLProviderCommand}.
 */
export interface CreateSAMLProviderCommandInput extends CreateSAMLProviderRequest {}
/**
 * @public
 *
 * The output of {@link CreateSAMLProviderCommand}.
 */
export interface CreateSAMLProviderCommandOutput extends CreateSAMLProviderResponse, __MetadataBearer {}

/**
 * <p>Creates an IAM resource that describes an identity provider (IdP) that supports SAML
 *             2.0.</p>
 *          <p>The SAML provider resource that you create with this operation can be used as a
 *             principal in an IAM role's trust policy. Such a policy can enable federated users who
 *             sign in using the SAML IdP to assume the role. You can create an IAM role that
 *             supports Web-based single sign-on (SSO) to the Amazon Web Services Management Console or one that supports API access
 *             to Amazon Web Services.</p>
 *          <p>When you create the SAML provider resource, you upload a SAML metadata document that
 *             you get from your IdP. That document includes the issuer's name, expiration information,
 *             and keys that can be used to validate the SAML authentication response (assertions) that
 *             the IdP sends. You must generate the metadata document using the identity management
 *             software that is used as your organization's IdP.</p>
 *          <note>
 *             <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
 *          </note>
 *          <p> For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-saml.html">Enabling SAML 2.0
 *                 federated users to access the Amazon Web Services Management Console</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based
 *                 federation</a> in the <i>IAM User Guide</i>.</p>
 *          <p>To control who can configure trusted identity propagation on a SAML provider, use the
 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_EnableIdentityPropagation">iam:EnableIdentityPropagation</a>, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_EnableIdentityCenterAssociation">iam:EnableIdentityCenterAssociation</a>, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_RequestIdentityProviderIssuers">iam:RequestIdentityProviderIssuers</a>, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_ResourceIdentityProviderIssuers">iam:ResourceIdentityProviderIssuers</a>, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_RequestIdentityCenterInstanceArn">iam:RequestIdentityCenterInstanceArn</a>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_ResourceIdentityCenterInstanceArn">iam:ResourceIdentityCenterInstanceArn</a> condition keys in IAM
 *             policies. The <code>Request</code> keys contain the values in the request. The
 *                 <code>Resource</code> keys contain the values stored on the provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateSAMLProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateSAMLProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // CreateSAMLProviderRequest
 *   SAMLMetadataDocument: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Tags: [ // tagListType
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   AssertionEncryptionMode: "Required" || "Allowed",
 *   AddPrivateKey: "STRING_VALUE",
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
 * };
 * const command = new CreateSAMLProviderCommand(input);
 * const response = await client.send(command);
 * // { // CreateSAMLProviderResponse
 * //   SAMLProviderArn: "STRING_VALUE",
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
 * @param CreateSAMLProviderCommandInput - {@link CreateSAMLProviderCommandInput}
 * @returns {@link CreateSAMLProviderCommandOutput}
 * @see {@link CreateSAMLProviderCommandInput} for command's `input` shape.
 * @see {@link CreateSAMLProviderCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @example To create a SAML provider
 * ```javascript
 * // The following example creates a SAML provider named MyUniversity from a SAML metadata document.
 * const input = {
 *   Name: "MyUniversity",
 *   SAMLMetadataDocument: `<?xml version="1.0" encoding="UTF-8"?><md:EntityDescriptor xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata" entityID="https://idp.example.com/saml"><md:IDPSSODescriptor WantAuthnRequestsSigned="false" protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol"><md:KeyDescriptor use="signing"><ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#"><ds:X509Data><ds:X509Certificate>MIIDdzCCAl+gAwIBAgIEbySuqTANBgkqhkiG9w0BAQsFADBsMRAwDgYDVQQGEwdVbmtub3duMRAwDgYDVQQIEwdVbmtub3duMRAwDgYDVQQHEwdVbmtub3duMRAwDgYDVQQKEwdVbmtub3duMRAwDgYDVQQLEwdVbmtub3duMRAwDgYDVQQDEwdFWEFNUExFMB4XDTI2MTEwMTAwMDAwMFoXDTM2MTEwMTAwMDAwMFowbDEQMA4GA1UEBhMHVW5rbm93bjEQMA4GA1UECBMHVW5rbm93bjEQMA4GA1UEBxMHVW5rbm93bjEQMA4GA1UEChMHVW5rbm93bjEQMA4GA1UECxMHVW5rbm93bjEQMA4GA1UEAxMHRVhBTVBMRTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAEXAMPLE</ds:X509Certificate></ds:X509Data></ds:KeyInfo></md:KeyDescriptor><md:NameIDFormat>urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress</md:NameIDFormat><md:SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect" Location="https://idp.example.com/saml/sso"/></md:IDPSSODescriptor></md:EntityDescriptor>`
 * };
 * const command = new CreateSAMLProviderCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SAMLProviderArn: "arn:aws:iam::123456789012:saml-provider/MyUniversity"
 * }
 * *\/
 * ```
 *
 * @example To create a SAML provider with trusted identity propagation
 * ```javascript
 * // The following example creates a SAML provider with a context provider that uses the email attribute as the subject and maps the department attribute to a trusted context key. It also associates an IAM Identity Center instance with the provider.
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
 *   IdentityCenterInstanceArn: "arn:aws:sso:::instance/ssoins-1234567890abcdef",
 *   Name: "MyUniversity",
 *   SAMLMetadataDocument: `<?xml version="1.0" encoding="UTF-8"?><md:EntityDescriptor xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata" entityID="https://idp.example.com/saml"><md:IDPSSODescriptor WantAuthnRequestsSigned="false" protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol"><md:KeyDescriptor use="signing"><ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#"><ds:X509Data><ds:X509Certificate>MIIDdzCCAl+gAwIBAgIEbySuqTANBgkqhkiG9w0BAQsFADBsMRAwDgYDVQQGEwdVbmtub3duMRAwDgYDVQQIEwdVbmtub3duMRAwDgYDVQQHEwdVbmtub3duMRAwDgYDVQQKEwdVbmtub3duMRAwDgYDVQQLEwdVbmtub3duMRAwDgYDVQQDEwdFWEFNUExFMB4XDTI2MTEwMTAwMDAwMFoXDTM2MTEwMTAwMDAwMFowbDEQMA4GA1UEBhMHVW5rbm93bjEQMA4GA1UECBMHVW5rbm93bjEQMA4GA1UEBxMHVW5rbm93bjEQMA4GA1UEChMHVW5rbm93bjEQMA4GA1UECxMHVW5rbm93bjEQMA4GA1UEAxMHRVhBTVBMRTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAEXAMPLE</ds:X509Certificate></ds:X509Data></ds:KeyInfo></md:KeyDescriptor><md:NameIDFormat>urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress</md:NameIDFormat><md:SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect" Location="https://idp.example.com/saml/sso"/></md:IDPSSODescriptor></md:EntityDescriptor>`
 * };
 * const command = new CreateSAMLProviderCommand(input);
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
export class CreateSAMLProviderCommand extends command<CreateSAMLProviderCommandInput, CreateSAMLProviderCommandOutput>(
  _ep0,
  _mw0,
  "CreateSAMLProvider",
  CreateSAMLProvider$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSAMLProviderRequest;
      output: CreateSAMLProviderResponse;
    };
    sdk: {
      input: CreateSAMLProviderCommandInput;
      output: CreateSAMLProviderCommandOutput;
    };
  };
}
