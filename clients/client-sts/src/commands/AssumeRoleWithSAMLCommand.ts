// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssumeRoleWithSAMLRequest, AssumeRoleWithSAMLResponse } from "../models/models_0";
import { AssumeRoleWithSAML$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssumeRoleWithSAMLCommand}.
 */
export interface AssumeRoleWithSAMLCommandInput extends AssumeRoleWithSAMLRequest {}
/**
 * @public
 *
 * The output of {@link AssumeRoleWithSAMLCommand}.
 */
export interface AssumeRoleWithSAMLCommandOutput extends AssumeRoleWithSAMLResponse, __MetadataBearer {}

/**
 * Returns a set of temporary security credentials for users who have been authenticated via a SAML authentication response. This operation provides a mechanism for tying an enterprise identity store or directory to role-based Amazon Web Services access without user-specific credentials or configuration. For a comparison of `AssumeRoleWithSAML` with the other API operations that produce temporary credentials, see [Requesting Temporary Security Credentials](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html) and [Compare STS credentials](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_sts-comparison.html) in the *IAM User Guide*.
 *
 * The temporary security credentials returned by this operation consist of an access key ID, a secret access key, and a security token. Applications can use these temporary security credentials to sign calls to Amazon Web Services services.
 *
 * > **Note:** AssumeRoleWithSAML will not work on IAM Identity Center managed roles. These roles' names start with `AWSReservedSSO_`.
 *
 * **Session Duration**
 *
 * By default, the temporary security credentials created by `AssumeRoleWithSAML` last for one hour. However, you can use the optional `DurationSeconds` parameter to specify the duration of your session. Your role session lasts for the duration that you specify, or until the time specified in the SAML authentication response's `SessionNotOnOrAfter` value, whichever is shorter. You can provide a `DurationSeconds` value from 900 seconds (15 minutes) up to the maximum session duration setting for the role. This setting can have a value from 1 hour to 12 hours. To learn how to view the maximum value for your role, see [View the Maximum Session Duration Setting for a Role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html#id_roles_use_view-role-max-session) in the *IAM User Guide*. The maximum session duration limit applies when you use the `AssumeRole*` API operations or the `assume-role*` CLI commands. However the limit does not apply when you use those operations to create a console URL. For more information, see [Using IAM Roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html) in the *IAM User Guide*.
 *
 * > **Note:** [Role chaining](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-role-chaining) limits your CLI or Amazon Web Services API role session to a maximum of one hour. When you use the `AssumeRole` API operation to assume a role, you can specify the duration of your role session with the `DurationSeconds` parameter. You can specify a parameter value of up to 43200 seconds (12 hours), depending on the maximum session duration setting for your role. However, if you assume a role using role chaining and provide a `DurationSeconds` parameter value greater than one hour, the operation fails.
 *
 * **Permissions**
 *
 * The temporary security credentials created by `AssumeRoleWithSAML` can be used to make API calls to any Amazon Web Services service with the following exception: you cannot call the STS `GetFederationToken` or `GetSessionToken` API operations.
 *
 * (Optional) You can pass inline or managed [session policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session) to this operation. You can pass a single JSON policy document to use as an inline session policy. You can also specify up to 10 managed policy Amazon Resource Names (ARNs) to use as managed session policies. The plaintext that you use for both inline and managed session policies can't exceed 2,048 characters. Passing policies to this operation returns new temporary credentials. The resulting session's permissions are the intersection of the role's identity-based policy and the session policies. You can use the role's temporary credentials in subsequent Amazon Web Services API calls to access resources in the account that owns the role. You cannot use session policies to grant more permissions than those allowed by the identity-based policy of the role that is being assumed. For more information, see [Session Policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session) in the *IAM User Guide*.
 *
 * Calling `AssumeRoleWithSAML` does not require the use of Amazon Web Services security credentials. The identity of the caller is validated by using keys in the metadata document that is uploaded for the SAML provider entity for your identity provider.
 *
 * > **Important:** Calling `AssumeRoleWithSAML` can result in an entry in your CloudTrail logs. The entry includes the value in the `NameID` element of the SAML assertion. We recommend that you use a `NameIDType` that is not associated with any personally identifiable information (PII). For example, you could instead use the persistent identifier (`urn:oasis:names:tc:SAML:2.0:nameid-format:persistent`).
 *
 * **Tags**
 *
 * (Optional) You can configure your IdP to pass attributes into your SAML assertion as session tags. Each session tag consists of a key name and an associated value. For more information about session tags, see [Passing Session Tags in STS](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html) in the *IAM User Guide*.
 *
 * You can pass up to 50 session tags. The plaintext session tag keys can’t exceed 128 characters and the values can’t exceed 256 characters. For these and additional limits, see [IAM and STS Character Limits](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-limits.html#reference_iam-limits-entity-length) in the *IAM User Guide*.
 *
 * > **Note:** An Amazon Web Services conversion compresses the passed inline session policy, managed policy ARNs, and session tags into a packed binary format that has a separate limit. Your request can fail for this limit even if your plaintext meets the other requirements. The `PackedPolicySize` response element indicates by percentage how close the policies and tags for your request are to the upper size limit.
 *
 * You can pass a session tag with the same key as a tag that is attached to the role. When you do, session tags override the role's tags with the same key.
 *
 * An administrator must grant you the permissions necessary to pass session tags. The administrator can also create granular permissions to allow you to pass only specific session tags. For more information, see [Tutorial: Using Tags for Attribute-Based Access Control](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_attribute-based-access-control.html) in the *IAM User Guide*.
 *
 * You can set the session tags as transitive. Transitive tags persist during role chaining. For more information, see [Chaining Roles with Session Tags](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html#id_session-tags_role-chaining) in the *IAM User Guide*.
 *
 * **SAML Configuration**
 *
 * Before your application can call `AssumeRoleWithSAML`, you must configure your SAML identity provider (IdP) to issue the claims required by Amazon Web Services. Additionally, you must use Identity and Access Management (IAM) to create a SAML provider entity in your Amazon Web Services account that represents your identity provider. You must also create an IAM role that specifies this SAML provider in its trust policy.
 *
 * For more information, see the following resources:
 *
 * - [About SAML 2.0-based Federation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html) in the *IAM User Guide*.
 * - [Creating SAML Identity Providers](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_saml.html) in the *IAM User Guide*.
 * - [Configuring a Relying Party and Claims](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_saml_relying-party.html) in the *IAM User Guide*.
 * - [Creating a Role for SAML 2.0 Federation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_saml.html) in the *IAM User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { STSClient, AssumeRoleWithSAMLCommand } from "@aws-sdk/client-sts"; // ES Modules import
 * // const { STSClient, AssumeRoleWithSAMLCommand } = require("@aws-sdk/client-sts"); // CommonJS import
 * // import type { STSClientConfig } from "@aws-sdk/client-sts";
 * const config = {}; // type is STSClientConfig
 * const client = new STSClient(config);
 * const input = { // AssumeRoleWithSAMLRequest
 *   RoleArn: "STRING_VALUE", // required
 *   PrincipalArn: "STRING_VALUE", // required
 *   SAMLAssertion: "STRING_VALUE", // required
 *   PolicyArns: [ // policyDescriptorListType
 *     { // PolicyDescriptorType
 *       arn: "STRING_VALUE",
 *     },
 *   ],
 *   Policy: "STRING_VALUE",
 *   DurationSeconds: Number("int"),
 *   MinimumSessionTokenSize: Number("int"),
 * };
 * const command = new AssumeRoleWithSAMLCommand(input);
 * const response = await client.send(command);
 * // { // AssumeRoleWithSAMLResponse
 * //   Credentials: { // Credentials
 * //     AccessKeyId: "STRING_VALUE", // required
 * //     SecretAccessKey: "STRING_VALUE", // required
 * //     SessionToken: "STRING_VALUE", // required
 * //     Expiration: new Date("TIMESTAMP"), // required
 * //   },
 * //   AssumedRoleUser: { // AssumedRoleUser
 * //     AssumedRoleId: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //   },
 * //   PackedPolicySize: Number("int"),
 * //   Subject: "STRING_VALUE",
 * //   SubjectType: "STRING_VALUE",
 * //   Issuer: "STRING_VALUE",
 * //   Audience: "STRING_VALUE",
 * //   NameQualifier: "STRING_VALUE",
 * //   SourceIdentity: "STRING_VALUE",
 * //   SessionTokenUtilization: Number("int"),
 * //   SessionTokenSize: Number("int"),
 * // };
 *
 * ```
 *
 * @param AssumeRoleWithSAMLCommandInput - {@link AssumeRoleWithSAMLCommandInput}
 * @returns {@link AssumeRoleWithSAMLCommandOutput}
 * @see {@link AssumeRoleWithSAMLCommandInput} for command's `input` shape.
 * @see {@link AssumeRoleWithSAMLCommandOutput} for command's `response` shape.
 * @see {@link STSClientResolvedConfig | config} for STSClient's `config` shape.
 *
 * @throws {@link ExpiredTokenException} (client fault)
 *
 * The web identity token that was passed is expired or is not valid. Get a new identity token from the identity provider and then retry the request.
 *
 * @throws {@link IDPRejectedClaimException} (client fault)
 *
 * The identity provider (IdP) reported that authentication failed. This might be because the claim is invalid.
 *
 * If this error is returned for the `AssumeRoleWithWebIdentity` operation, it can also mean that the claim has expired or has been explicitly revoked.
 *
 * @throws {@link InvalidIdentityTokenException} (client fault)
 *
 * The web identity token that was passed could not be validated by Amazon Web Services. Get a new identity token from the identity provider and then retry the request.
 *
 * @throws {@link MalformedPolicyDocumentException} (client fault)
 *
 * The request was rejected because the policy document was malformed. The error message describes the specific error.
 *
 * @throws {@link PackedPolicyTooLargeException} (client fault)
 *
 * The request was rejected because the total packed size of the session policies and session tags combined was too large. An Amazon Web Services conversion compresses the session policy document, session policy ARNs, and session tags into a packed binary format that has a separate limit. The error message indicates by percentage how close the policies and tags are to the upper size limit. For more information, see [Passing Session Tags in STS](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html) in the *IAM User Guide*.
 *
 * You could receive this error even though you meet other defined session policy and session tag limits. For more information, see [IAM and STS Entity Character Limits](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-limits-entity-length) in the *IAM User Guide*.
 *
 * @throws {@link RegionDisabledException} (client fault)
 *
 * STS is not activated in the requested region for the account that is being asked to generate credentials. The account administrator must use the IAM console to activate STS in that region. For more information, see [Activating and Deactivating STS in an Amazon Web Services Region](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html#sts-regions-activate-deactivate) in the *IAM User Guide*.
 *
 * @throws {@link STSServiceException}
 *
 * Base exception class for all service exceptions from STS service.
 *
 * @example To assume a role using a SAML assertion
 * ```javascript
 * //
 * const input = {
 *   DurationSeconds: 3600,
 *   PrincipalArn: "arn:aws:iam::123456789012:saml-provider/SAML-test",
 *   RoleArn: "arn:aws:iam::123456789012:role/TestSaml",
 *   SAMLAssertion: "VERYLONGENCODEDASSERTIONEXAMPLExzYW1sOkF1ZGllbmNlPmJsYW5rPC9zYW1sOkF1ZGllbmNlPjwvc2FtbDpBdWRpZW5jZVJlc3RyaWN0aW9uPjwvc2FtbDpDb25kaXRpb25zPjxzYW1sOlN1YmplY3Q+PHNhbWw6TmFtZUlEIEZvcm1hdD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOm5hbWVpZC1mb3JtYXQ6dHJhbnNpZW50Ij5TYW1sRXhhbXBsZTwvc2FtbDpOYW1lSUQ+PHNhbWw6U3ViamVjdENvbmZpcm1hdGlvbiBNZXRob2Q9InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDpjbTpiZWFyZXIiPjxzYW1sOlN1YmplY3RDb25maXJtYXRpb25EYXRhIE5vdE9uT3JBZnRlcj0iMjAxOS0xMS0wMVQyMDoyNTowNS4xNDVaIiBSZWNpcGllbnQ9Imh0dHBzOi8vc2lnbmluLmF3cy5hbWF6b24uY29tL3NhbWwiLz48L3NhbWw6U3ViamVjdENvbmZpcm1hdGlvbj48L3NhbWw6U3ViamVjdD48c2FtbDpBdXRoblN0YXRlbWVudCBBdXRoPD94bWwgdmpSZXNwb25zZT4="
 * };
 * const command = new AssumeRoleWithSAMLCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AssumedRoleUser: {
 *     Arn: "arn:aws:sts::123456789012:assumed-role/TestSaml",
 *     AssumedRoleId: "ARO456EXAMPLE789:TestSaml"
 *   },
 *   Audience: "https://signin.aws.amazon.com/saml",
 *   Credentials: {
 *     AccessKeyId: "ASIAV3ZUEFP6EXAMPLE",
 *     Expiration: "2019-11-01T20:26:47Z",
 *     SecretAccessKey: "8P+SQvWIuLnKhh8d++jpw0nNmQRBZvNEXAMPLEKEY",
 *     SessionToken: "IQoJb3JpZ2luX2VjEOz////////////////////wEXAMPLEtMSJHMEUCIDoKK3JH9uGQE1z0sINr5M4jk+Na8KHDcCYRVjJCZEvOAiEA3OvJGtw1EcViOleS2vhs8VdCKFJQWPQrmGdeehM4IC1NtBmUpp2wUE8phUZampKsburEDy0KPkyQDYwT7WZ0wq5VSXDvp75YU9HFvlRd8Tx6q6fE8YQcHNVXAkiY9q6d+xo0rKwT38xVqr7ZD0u0iPPkUL64lIZbqBAz+scqKmlzm8FDrypNC9Yjc8fPOLn9FX9KSYvKTr4rvx3iSIlTJabIQwj2ICCR/oLxBA=="
 *   },
 *   Issuer: "https://integ.example.com/idp/shibboleth",
 *   NameQualifier: "SbdGOnUkh1i4+EXAMPLExL/jEvs=",
 *   PackedPolicySize: 6,
 *   Subject: "SamlExample",
 *   SubjectType: "transient"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class AssumeRoleWithSAMLCommand extends command<AssumeRoleWithSAMLCommandInput, AssumeRoleWithSAMLCommandOutput>(
  _ep0,
  _mw0,
  "AssumeRoleWithSAML",
  AssumeRoleWithSAML$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssumeRoleWithSAMLRequest;
      output: AssumeRoleWithSAMLResponse;
    };
    sdk: {
      input: AssumeRoleWithSAMLCommandInput;
      output: AssumeRoleWithSAMLCommandOutput;
    };
  };
}
