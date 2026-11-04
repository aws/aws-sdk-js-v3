// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssumeRoleRequest, AssumeRoleResponse } from "../models/models_0";
import { AssumeRole$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssumeRoleCommand}.
 */
export interface AssumeRoleCommandInput extends AssumeRoleRequest {}
/**
 * @public
 *
 * The output of {@link AssumeRoleCommand}.
 */
export interface AssumeRoleCommandOutput extends AssumeRoleResponse, __MetadataBearer {}

/**
 * Returns a set of temporary security credentials that you can use to access Amazon Web Services resources. These temporary credentials consist of an access key ID, a secret access key, and a security token. Typically, you use `AssumeRole` within your account or for cross-account access. For a comparison of `AssumeRole` with other API operations that produce temporary credentials, see [Requesting Temporary Security Credentials](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html) and [Compare STS credentials](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_sts-comparison.html) in the *IAM User Guide*.
 *
 * **Permissions**
 *
 * The temporary security credentials created by `AssumeRole` can be used to make API calls to any Amazon Web Services service with the following exception: You cannot call the Amazon Web Services STS `GetFederationToken` or `GetSessionToken` API operations.
 *
 * (Optional) You can pass inline or managed session policies to this operation. You can pass a single JSON policy document to use as an inline session policy. You can also specify up to 10 managed policy Amazon Resource Names (ARNs) to use as managed session policies. The plaintext that you use for both inline and managed session policies can't exceed 2,048 characters. Passing policies to this operation returns new temporary credentials. The resulting session's permissions are the intersection of the role's identity-based policy and the session policies. You can use the role's temporary credentials in subsequent Amazon Web Services API calls to access resources in the account that owns the role. You cannot use session policies to grant more permissions than those allowed by the identity-based policy of the role that is being assumed. For more information, see [Session Policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session) in the *IAM User Guide*.
 *
 * When you create a role, you create two policies: a role trust policy that specifies *who* can assume the role, and a permissions policy that specifies *what* can be done with the role. You specify the trusted principal that is allowed to assume the role in the role trust policy.
 *
 * To assume a role from a different account, your Amazon Web Services account must be trusted by the role. The trust relationship is defined in the role's trust policy when the role is created. That trust policy states which accounts are allowed to delegate that access to users in the account.
 *
 * A user who wants to access a role in a different account must also have permissions that are delegated from the account administrator. The administrator must attach a policy that allows the user to call `AssumeRole` for the ARN of the role in the other account.
 *
 * To allow a user to assume a role in the same account, you can do either of the following:
 *
 * - Attach a policy to the user that allows the user to call `AssumeRole` (as long as the role's trust policy trusts the account).
 * - Add the user as a principal directly in the role's trust policy.
 *
 * You can do either because the role’s trust policy acts as an IAM resource-based policy. When a resource-based policy grants access to a principal in the same account, no additional identity-based policy is required. For more information about trust policies and resource-based policies, see [IAM Policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html) in the *IAM User Guide*.
 *
 * **Tags**
 *
 * (Optional) You can pass tag key-value pairs to your session. These tags are called session tags. For more information about session tags, see [Passing Session Tags in STS](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html) in the *IAM User Guide*.
 *
 * An administrator must grant you the permissions necessary to pass session tags. The administrator can also create granular permissions to allow you to pass only specific session tags. For more information, see [Tutorial: Using Tags for Attribute-Based Access Control](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_attribute-based-access-control.html) in the *IAM User Guide*.
 *
 * You can set the session tags as transitive. Transitive tags persist during role chaining. For more information, see [Chaining Roles with Session Tags](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html#id_session-tags_role-chaining) in the *IAM User Guide*.
 *
 * **Using MFA with AssumeRole**
 *
 * (Optional) You can include multi-factor authentication (MFA) information when you call `AssumeRole`. This is useful for cross-account scenarios to ensure that the user that assumes the role has been authenticated with an Amazon Web Services MFA device. In that scenario, the trust policy of the role being assumed includes a condition that tests for MFA authentication. If the caller does not include valid MFA information, the request to assume the role is denied. The condition in a trust policy that tests for MFA authentication might look like the following example.
 *
 * `"Condition": \{"Bool": \{"aws:MultiFactorAuthPresent": true\}\}`
 *
 * For more information, see [Configuring MFA-Protected API Access](https://docs.aws.amazon.com/IAM/latest/UserGuide/MFAProtectedAPI.html) in the *IAM User Guide* guide.
 *
 * To use MFA with `AssumeRole`, you pass values for the `SerialNumber` and `TokenCode` parameters. The `SerialNumber` value identifies the user's hardware or virtual MFA device. The `TokenCode` is the time-based one-time password (TOTP) that the MFA device produces.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { STSClient, AssumeRoleCommand } from "@aws-sdk/client-sts"; // ES Modules import
 * // const { STSClient, AssumeRoleCommand } = require("@aws-sdk/client-sts"); // CommonJS import
 * // import type { STSClientConfig } from "@aws-sdk/client-sts";
 * const config = {}; // type is STSClientConfig
 * const client = new STSClient(config);
 * const input = { // AssumeRoleRequest
 *   RoleArn: "STRING_VALUE", // required
 *   RoleSessionName: "STRING_VALUE", // required
 *   PolicyArns: [ // policyDescriptorListType
 *     { // PolicyDescriptorType
 *       arn: "STRING_VALUE",
 *     },
 *   ],
 *   Policy: "STRING_VALUE",
 *   DurationSeconds: Number("int"),
 *   Tags: [ // tagListType
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   TransitiveTagKeys: [ // tagKeyListType
 *     "STRING_VALUE",
 *   ],
 *   ExternalId: "STRING_VALUE",
 *   SerialNumber: "STRING_VALUE",
 *   TokenCode: "STRING_VALUE",
 *   SourceIdentity: "STRING_VALUE",
 *   ProvidedContexts: [ // ProvidedContextsListType
 *     { // ProvidedContext
 *       ProviderArn: "STRING_VALUE",
 *       ContextAssertion: "STRING_VALUE",
 *     },
 *   ],
 *   MinimumSessionTokenSize: Number("int"),
 * };
 * const command = new AssumeRoleCommand(input);
 * const response = await client.send(command);
 * // { // AssumeRoleResponse
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
 * //   SourceIdentity: "STRING_VALUE",
 * //   SessionTokenUtilization: Number("int"),
 * //   SessionTokenSize: Number("int"),
 * // };
 *
 * ```
 *
 * @param AssumeRoleCommandInput - {@link AssumeRoleCommandInput}
 * @returns {@link AssumeRoleCommandOutput}
 * @see {@link AssumeRoleCommandInput} for command's `input` shape.
 * @see {@link AssumeRoleCommandOutput} for command's `response` shape.
 * @see {@link STSClientResolvedConfig | config} for STSClient's `config` shape.
 *
 * @throws {@link ExpiredTokenException} (client fault)
 *
 * The web identity token that was passed is expired or is not valid. Get a new identity token from the identity provider and then retry the request.
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
 * @example To assume a role
 * ```javascript
 * //
 * const input = {
 *   ExternalId: "123ABC",
 *   Policy: "escaped-JSON-IAM-POLICY",
 *   RoleArn: "arn:aws:iam::123456789012:role/demo",
 *   RoleSessionName: "testAssumeRoleSession",
 *   Tags: [
 *     {
 *       Key: "Project",
 *       Value: "Unicorn"
 *     },
 *     {
 *       Key: "Team",
 *       Value: "Automation"
 *     },
 *     {
 *       Key: "Cost-Center",
 *       Value: "12345"
 *     }
 *   ],
 *   TransitiveTagKeys: [
 *     "Project",
 *     "Cost-Center"
 *   ]
 * };
 * const command = new AssumeRoleCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AssumedRoleUser: {
 *     Arn: "arn:aws:sts::123456789012:assumed-role/demo/Bob",
 *     AssumedRoleId: "ARO123EXAMPLE123:Bob"
 *   },
 *   Credentials: {
 *     AccessKeyId: "AKIAIOSFODNN7EXAMPLE",
 *     Expiration: "2011-07-15T23:28:33.359Z",
 *     SecretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYzEXAMPLEKEY",
 *     SessionToken: "AQoDYXdzEPT//////////wEXAMPLEtc764bNrC9SAPBSM22wDOk4x4HIZ8j4FZTwdQWLWsKWHGBuFqwAeMicRXmxfpSPfIeoIYRqTflfKD8YUuwthAx7mSEI/qkPpKPi/kMcGdQrmGdeehM4IC1NtBmUpp2wUE8phUZampKsburEDy0KPkyQDYwT7WZ0wq5VSXDvp75YU9HFvlRd8Tx6q6fE8YQcHNVXAkiY9q6d+xo0rKwT38xVqr7ZD0u0iPPkUL64lIZbqBAz+scqKmlzm8FDrypNC9Yjc8fPOLn9FX9KSYvKTr4rvx3iSIlTJabIQwj2ICCR/oLxBA=="
 *   },
 *   PackedPolicySize: 8
 * }
 * *\/
 * ```
 *
 * @public
 */
export class AssumeRoleCommand extends command<AssumeRoleCommandInput, AssumeRoleCommandOutput>(
  _ep0,
  _mw0,
  "AssumeRole",
  AssumeRole$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssumeRoleRequest;
      output: AssumeRoleResponse;
    };
    sdk: {
      input: AssumeRoleCommandInput;
      output: AssumeRoleCommandOutput;
    };
  };
}
