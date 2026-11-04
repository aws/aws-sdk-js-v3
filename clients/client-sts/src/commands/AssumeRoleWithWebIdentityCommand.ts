// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssumeRoleWithWebIdentityRequest, AssumeRoleWithWebIdentityResponse } from "../models/models_0";
import { AssumeRoleWithWebIdentity$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssumeRoleWithWebIdentityCommand}.
 */
export interface AssumeRoleWithWebIdentityCommandInput extends AssumeRoleWithWebIdentityRequest {}
/**
 * @public
 *
 * The output of {@link AssumeRoleWithWebIdentityCommand}.
 */
export interface AssumeRoleWithWebIdentityCommandOutput extends AssumeRoleWithWebIdentityResponse, __MetadataBearer {}

/**
 * Returns a set of temporary security credentials for users who have been authenticated in a mobile or web application with a web identity provider. Example providers include the OAuth 2.0 providers Login with Amazon and Facebook, or any OpenID Connect-compatible identity provider such as Google or [Amazon Cognito federated identities](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-identity.html).
 *
 * > **Note:**
 * >
 * > For mobile applications, we recommend that you use Amazon Cognito. You can use Amazon Cognito with the [Amazon Web Services SDK for iOS Developer Guide](http://aws.amazon.com/sdkforios/) and the [Amazon Web Services SDK for Android Developer Guide](http://aws.amazon.com/sdkforandroid/) to uniquely identify a user. You can also supply the user with a consistent identity throughout the lifetime of an application.
 * >
 * > To learn more about Amazon Cognito, see [Amazon Cognito identity pools](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-identity.html) in *Amazon Cognito Developer Guide*.
 *
 * Calling `AssumeRoleWithWebIdentity` does not require the use of Amazon Web Services security credentials. Therefore, you can distribute an application (for example, on mobile devices) that requests temporary security credentials without including long-term Amazon Web Services credentials in the application. You also don't need to deploy server-based proxy services that use long-term Amazon Web Services credentials. Instead, the identity of the caller is validated by using a token from the web identity provider. For a comparison of `AssumeRoleWithWebIdentity` with the other API operations that produce temporary credentials, see [Requesting Temporary Security Credentials](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html) and [Compare STS credentials](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_sts-comparison.html) in the *IAM User Guide*.
 *
 * The temporary security credentials returned by this API consist of an access key ID, a secret access key, and a security token. Applications can use these temporary security credentials to sign calls to Amazon Web Services service API operations.
 *
 * **Session Duration**
 *
 * By default, the temporary security credentials created by `AssumeRoleWithWebIdentity` last for one hour. However, you can use the optional `DurationSeconds` parameter to specify the duration of your session. You can provide a value from 900 seconds (15 minutes) up to the maximum session duration setting for the role. This setting can have a value from 1 hour to 12 hours. To learn how to view the maximum value for your role, see [Update the maximum session duration for a role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_update-role-settings.html#id_roles_update-session-duration) in the *IAM User Guide*. The maximum session duration limit applies when you use the `AssumeRole*` API operations or the `assume-role*` CLI commands. However the limit does not apply when you use those operations to create a console URL. For more information, see [Using IAM Roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html) in the *IAM User Guide*.
 *
 * **Permissions**
 *
 * The temporary security credentials created by `AssumeRoleWithWebIdentity` can be used to make API calls to any Amazon Web Services service with the following exception: you cannot call the STS `GetFederationToken` or `GetSessionToken` API operations.
 *
 * (Optional) You can pass inline or managed [session policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session) to this operation. You can pass a single JSON policy document to use as an inline session policy. You can also specify up to 10 managed policy Amazon Resource Names (ARNs) to use as managed session policies. The plaintext that you use for both inline and managed session policies can't exceed 2,048 characters. Passing policies to this operation returns new temporary credentials. The resulting session's permissions are the intersection of the role's identity-based policy and the session policies. You can use the role's temporary credentials in subsequent Amazon Web Services API calls to access resources in the account that owns the role. You cannot use session policies to grant more permissions than those allowed by the identity-based policy of the role that is being assumed. For more information, see [Session Policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session) in the *IAM User Guide*.
 *
 * **Tags**
 *
 * (Optional) You can configure your IdP to pass attributes into your web identity token as session tags. Each session tag consists of a key name and an associated value. For more information about session tags, see [Passing session tags using AssumeRoleWithWebIdentity](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html#id_session-tags_adding-assume-role-idp) in the *IAM User Guide*.
 *
 * You can pass up to 50 session tags. The plaintext session tag keys can’t exceed 128 characters and the values can’t exceed 256 characters. For these and additional limits, see [IAM and STS Character Limits](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-limits.html#reference_iam-limits-entity-length) in the *IAM User Guide*.
 *
 * > **Note:** An Amazon Web Services conversion compresses the passed inline session policy, managed policy ARNs, and session tags into a packed binary format that has a separate limit. Your request can fail for this limit even if your plaintext meets the other requirements. The `PackedPolicySize` response element indicates by percentage how close the policies and tags for your request are to the upper size limit.
 *
 * You can pass a session tag with the same key as a tag that is attached to the role. When you do, the session tag overrides the role tag with the same key.
 *
 * An administrator must grant you the permissions necessary to pass session tags. The administrator can also create granular permissions to allow you to pass only specific session tags. For more information, see [Tutorial: Using Tags for Attribute-Based Access Control](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_attribute-based-access-control.html) in the *IAM User Guide*.
 *
 * You can set the session tags as transitive. Transitive tags persist during role chaining. For more information, see [Chaining Roles with Session Tags](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html#id_session-tags_role-chaining) in the *IAM User Guide*.
 *
 * **Identities**
 *
 * Before your application can call `AssumeRoleWithWebIdentity`, you must have an identity token from a supported identity provider and create a role that the application can assume. The role that your application assumes must trust the identity provider that is associated with the identity token. In other words, the identity provider must be specified in the role's trust policy.
 *
 * > **Important:** Calling `AssumeRoleWithWebIdentity` can result in an entry in your CloudTrail logs. The entry includes the [Subject](http://openid.net/specs/openid-connect-core-1_0.html#Claims) of the provided web identity token. We recommend that you avoid using any personally identifiable information (PII) in this field. For example, you could instead use a GUID or a pairwise identifier, as [suggested in the OIDC specification](http://openid.net/specs/openid-connect-core-1_0.html#SubjectIDTypes).
 *
 * For more information about how to use OIDC federation and the `AssumeRoleWithWebIdentity` API, see the following resources:
 *
 * - [Using Web Identity Federation API Operations for Mobile Apps](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc_manual.html) and [Federation Through a Web-based Identity Provider](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_assumerolewithwebidentity).
 * - [Amazon Web Services SDK for iOS Developer Guide](http://aws.amazon.com/sdkforios/) and [Amazon Web Services SDK for Android Developer Guide](http://aws.amazon.com/sdkforandroid/). These toolkits contain sample apps that show how to invoke the identity providers. The toolkits then show how to use the information from these providers to get and use temporary security credentials.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { STSClient, AssumeRoleWithWebIdentityCommand } from "@aws-sdk/client-sts"; // ES Modules import
 * // const { STSClient, AssumeRoleWithWebIdentityCommand } = require("@aws-sdk/client-sts"); // CommonJS import
 * // import type { STSClientConfig } from "@aws-sdk/client-sts";
 * const config = {}; // type is STSClientConfig
 * const client = new STSClient(config);
 * const input = { // AssumeRoleWithWebIdentityRequest
 *   RoleArn: "STRING_VALUE", // required
 *   RoleSessionName: "STRING_VALUE", // required
 *   WebIdentityToken: "STRING_VALUE", // required
 *   ProviderId: "STRING_VALUE",
 *   PolicyArns: [ // policyDescriptorListType
 *     { // PolicyDescriptorType
 *       arn: "STRING_VALUE",
 *     },
 *   ],
 *   Policy: "STRING_VALUE",
 *   DurationSeconds: Number("int"),
 *   MinimumSessionTokenSize: Number("int"),
 * };
 * const command = new AssumeRoleWithWebIdentityCommand(input);
 * const response = await client.send(command);
 * // { // AssumeRoleWithWebIdentityResponse
 * //   Credentials: { // Credentials
 * //     AccessKeyId: "STRING_VALUE", // required
 * //     SecretAccessKey: "STRING_VALUE", // required
 * //     SessionToken: "STRING_VALUE", // required
 * //     Expiration: new Date("TIMESTAMP"), // required
 * //   },
 * //   SubjectFromWebIdentityToken: "STRING_VALUE",
 * //   AssumedRoleUser: { // AssumedRoleUser
 * //     AssumedRoleId: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //   },
 * //   PackedPolicySize: Number("int"),
 * //   Provider: "STRING_VALUE",
 * //   Audience: "STRING_VALUE",
 * //   SourceIdentity: "STRING_VALUE",
 * //   SessionTokenUtilization: Number("int"),
 * //   SessionTokenSize: Number("int"),
 * // };
 *
 * ```
 *
 * @param AssumeRoleWithWebIdentityCommandInput - {@link AssumeRoleWithWebIdentityCommandInput}
 * @returns {@link AssumeRoleWithWebIdentityCommandOutput}
 * @see {@link AssumeRoleWithWebIdentityCommandInput} for command's `input` shape.
 * @see {@link AssumeRoleWithWebIdentityCommandOutput} for command's `response` shape.
 * @see {@link STSClientResolvedConfig | config} for STSClient's `config` shape.
 *
 * @throws {@link ExpiredTokenException} (client fault)
 *
 * The web identity token that was passed is expired or is not valid. Get a new identity token from the identity provider and then retry the request.
 *
 * @throws {@link IDPCommunicationErrorException} (client fault)
 *
 * The request could not be fulfilled because the identity provider (IDP) that was asked to verify the incoming identity token could not be reached. This is often a transient error caused by network conditions. Retry the request a limited number of times so that you don't exceed the request rate. If the error persists, the identity provider might be down or not responding.
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
 * @example To assume a role as an OpenID Connect-federated user
 * ```javascript
 * //
 * const input = {
 *   DurationSeconds: 3600,
 *   Policy: "escaped-JSON-IAM-POLICY",
 *   ProviderId: "www.amazon.com",
 *   RoleArn: "arn:aws:iam::123456789012:role/FederatedWebIdentityRole",
 *   RoleSessionName: "app1",
 *   WebIdentityToken: "Atza%7CIQEBLjAsAhRFiXuWpUXuRvQ9PZL3GMFcYevydwIUFAHZwXZXXXXXXXXJnrulxKDHwy87oGKPznh0D6bEQZTSCzyoCtL_8S07pLpr0zMbn6w1lfVZKNTBdDansFBmtGnIsIapjI6xKR02Yc_2bQ8LZbUXSGm6Ry6_BG7PrtLZtj_dfCTj92xNGed-CrKqjG7nPBjNIL016GGvuS5gSvPRUxWES3VYfm1wl7WTI7jn-Pcb6M-buCgHhFOzTQxod27L9CqnOLio7N3gZAGpsp6n1-AJBOCJckcyXe2c6uD0srOJeZlKUm2eTDVMf8IehDVI0r1QOnTV6KzzAI3OY87Vd_cVMQ"
 * };
 * const command = new AssumeRoleWithWebIdentityCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AssumedRoleUser: {
 *     Arn: "arn:aws:sts::123456789012:assumed-role/FederatedWebIdentityRole/app1",
 *     AssumedRoleId: "AROACLKWSDQRAOEXAMPLE:app1"
 *   },
 *   Audience: "client.5498841531868486423.1548@apps.example.com",
 *   Credentials: {
 *     AccessKeyId: "AKIAIOSFODNN7EXAMPLE",
 *     Expiration: "2014-10-24T23:00:23Z",
 *     SecretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYzEXAMPLEKEY",
 *     SessionToken: "AQoDYXdzEE0a8ANXXXXXXXXNO1ewxE5TijQyp+IEXAMPLE"
 *   },
 *   PackedPolicySize: 123,
 *   Provider: "www.amazon.com",
 *   SubjectFromWebIdentityToken: "amzn1.account.AF6RHO7KZU5XRVQJGXK6HEXAMPLE"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class AssumeRoleWithWebIdentityCommand extends command<AssumeRoleWithWebIdentityCommandInput, AssumeRoleWithWebIdentityCommandOutput>(
  _ep0,
  _mw0,
  "AssumeRoleWithWebIdentity",
  AssumeRoleWithWebIdentity$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssumeRoleWithWebIdentityRequest;
      output: AssumeRoleWithWebIdentityResponse;
    };
    sdk: {
      input: AssumeRoleWithWebIdentityCommandInput;
      output: AssumeRoleWithWebIdentityCommandOutput;
    };
  };
}
