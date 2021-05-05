import { Role, SSHPublicKey, ServerCertificateMetadata, SigningCertificate, StatusType, Tag } from "./models_0";
import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface UntagPolicyRequest {
  /**
   * <p>The ARN of the IAM customer managed policy from which you want to remove
   *       tags.</p>
   *          <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: =,.@-</p>
   */
  PolicyArn: string | undefined;

  /**
   * <p>A list of key names as a simple array of strings. The tags with matching keys are
   *       removed from the specified policy.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagPolicyRequest): any => ({
    ...obj,
  });
}

export interface UntagRoleRequest {
  /**
   * <p>The name of the IAM role from which you want to remove tags.</p>
   *          <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;

  /**
   * <p>A list of key names as a simple array of strings. The tags with matching keys are
   *       removed from the specified role.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagRoleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagRoleRequest): any => ({
    ...obj,
  });
}

export interface UntagSAMLProviderRequest {
  /**
   * <p>The ARN of the SAML identity provider in IAM from which you want to remove
   *       tags.</p>
   *          <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: =,.@-</p>
   */
  SAMLProviderArn: string | undefined;

  /**
   * <p>A list of key names as a simple array of strings. The tags with matching keys are
   *       removed from the specified SAML identity provider.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagSAMLProviderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagSAMLProviderRequest): any => ({
    ...obj,
  });
}

export interface UntagServerCertificateRequest {
  /**
   * <p>The name of the IAM server certificate from which you want to remove tags.</p>
   *          <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: =,.@-</p>
   */
  ServerCertificateName: string | undefined;

  /**
   * <p>A list of key names as a simple array of strings. The tags with matching keys are
   *       removed from the specified IAM server certificate.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagServerCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagServerCertificateRequest): any => ({
    ...obj,
  });
}

export interface UntagUserRequest {
  /**
   * <p>The name of the IAM user from which you want to remove tags.</p>
   *          <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: =,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>A list of key names as a simple array of strings. The tags with matching keys are
   *       removed from the specified user.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagUserRequest): any => ({
    ...obj,
  });
}

export interface UpdateAccessKeyRequest {
  /**
   * <p>The name of the user whose key you want to update.</p>
   *         <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;

  /**
   * <p>The access key ID of the secret access key you want to update.</p>
   *         <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  AccessKeyId: string | undefined;

  /**
   * <p> The status you want to assign to the secret access key. <code>Active</code> means
   *             that the key can be used for programmatic calls to AWS, while <code>Inactive</code>
   *             means that the key cannot be used.</p>
   */
  Status: StatusType | string | undefined;
}

export namespace UpdateAccessKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAccessKeyRequest): any => ({
    ...obj,
  });
}

export interface UpdateAccountPasswordPolicyRequest {
  /**
   * <p>The minimum number of characters allowed in an IAM user password.</p>
   *         <p>If you do not specify a value for this parameter, then the operation uses the default
   *             value of <code>6</code>.</p>
   */
  MinimumPasswordLength?: number;

  /**
   * <p>Specifies whether IAM user passwords must contain at least one of the following
   *             non-alphanumeric characters:</p>
   *         <p>! @ # $ % ^ & * ( ) _ + - = [ ] { } | '</p>
   *         <p>If you do not specify a value for this parameter, then the operation uses the default
   *             value of <code>false</code>. The result is that passwords do not require at least one
   *             symbol character.</p>
   */
  RequireSymbols?: boolean;

  /**
   * <p>Specifies whether IAM user passwords must contain at least one numeric character (0
   *             to 9).</p>
   *         <p>If you do not specify a value for this parameter, then the operation uses the default
   *             value of <code>false</code>. The result is that passwords do not require at least one
   *             numeric character.</p>
   */
  RequireNumbers?: boolean;

  /**
   * <p>Specifies whether IAM user passwords must contain at least one uppercase character
   *             from the ISO basic Latin alphabet (A to Z).</p>
   *         <p>If you do not specify a value for this parameter, then the operation uses the default
   *             value of <code>false</code>. The result is that passwords do not require at least one
   *             uppercase character.</p>
   */
  RequireUppercaseCharacters?: boolean;

  /**
   * <p>Specifies whether IAM user passwords must contain at least one lowercase character
   *             from the ISO basic Latin alphabet (a to z).</p>
   *         <p>If you do not specify a value for this parameter, then the operation uses the default
   *             value of <code>false</code>. The result is that passwords do not require at least one
   *             lowercase character.</p>
   */
  RequireLowercaseCharacters?: boolean;

  /**
   * <p> Allows all IAM users in your account to use the AWS Management Console to change their own
   *             passwords. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/HowToPwdIAMUser.html">Letting IAM users change their own
   *                 passwords</a> in the <i>IAM User Guide</i>.</p>
   *         <p>If you do not specify a value for this parameter, then the operation uses the default
   *             value of <code>false</code>. The result is that IAM users in the account do not
   *             automatically have permissions to change their own password.</p>
   */
  AllowUsersToChangePassword?: boolean;

  /**
   * <p>The number of days that an IAM user password is valid.</p>
   *         <p>If you do not specify a value for this parameter, then the operation uses the default
   *             value of <code>0</code>. The result is that IAM user passwords never expire.</p>
   */
  MaxPasswordAge?: number;

  /**
   * <p>Specifies the number of previous passwords that IAM users are prevented from
   *             reusing.</p>
   *         <p>If you do not specify a value for this parameter, then the operation uses the default
   *             value of <code>0</code>. The result is that IAM users are not prevented from reusing
   *             previous passwords.</p>
   */
  PasswordReusePrevention?: number;

  /**
   * <p>Prevents IAM users from setting a new password after their password has expired. The
   *             IAM user cannot be accessed until an administrator resets the password.</p>
   *         <p>If you do not specify a value for this parameter, then the operation uses the default
   *             value of <code>false</code>. The result is that IAM users can change their passwords
   *             after they expire and continue to sign in as the user.</p>
   */
  HardExpiry?: boolean;
}

export namespace UpdateAccountPasswordPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAccountPasswordPolicyRequest): any => ({
    ...obj,
  });
}

export interface UpdateAssumeRolePolicyRequest {
  /**
   * <p>The name of the role to update with the new policy.</p>
   *         <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;

  /**
   * <p>The policy that grants an entity permission to assume the role.</p>
   *         <p>You must provide policies in JSON format in IAM. However, for AWS CloudFormation
   *             templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS
   *             CloudFormation always converts a YAML policy to JSON format before submitting it to
   *             IAM.</p>
   *         <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   */
  PolicyDocument: string | undefined;
}

export namespace UpdateAssumeRolePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAssumeRolePolicyRequest): any => ({
    ...obj,
  });
}

export interface UpdateGroupRequest {
  /**
   * <p>Name of the IAM group to update. If you're changing the name of the group, this is
   *             the original name.</p>
   *         <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  GroupName: string | undefined;

  /**
   * <p>New path for the IAM group. Only include this if changing the group's path.</p>
   *         <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  NewPath?: string;

  /**
   * <p>New name for the IAM group. Only include this if changing the group's name.</p>
   *         <p>IAM user, group, role, and policy names must be unique within the account. Names are
   *             not distinguished by case. For example, you cannot create resources named both
   *             "MyResource" and "myresource".</p>
   */
  NewGroupName?: string;
}

export namespace UpdateGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateLoginProfileRequest {
  /**
   * <p>The name of the user whose password you want to update.</p>
   *         <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>The new password for the specified IAM user.</p>
   *         <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   *         <p>However, the format can be further restricted by the account administrator by setting
   *             a password policy on the AWS account. For more information, see <a>UpdateAccountPasswordPolicy</a>.</p>
   */
  Password?: string;

  /**
   * <p>Allows this new password to be used only once by requiring the specified IAM user to
   *             set a new password on next sign-in.</p>
   */
  PasswordResetRequired?: boolean;
}

export namespace UpdateLoginProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateLoginProfileRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

export interface UpdateOpenIDConnectProviderThumbprintRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM OIDC provider resource object for which
   *             you want to update the thumbprint. You can get a list of OIDC provider ARNs by using the
   *                 <a>ListOpenIDConnectProviders</a> operation.</p>
   *         <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.</p>
   */
  OpenIDConnectProviderArn: string | undefined;

  /**
   * <p>A list of certificate thumbprints that are associated with the specified IAM OpenID
   *             Connect provider. For more information, see <a>CreateOpenIDConnectProvider</a>. </p>
   */
  ThumbprintList: string[] | undefined;
}

export namespace UpdateOpenIDConnectProviderThumbprintRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateOpenIDConnectProviderThumbprintRequest): any => ({
    ...obj,
  });
}

export interface UpdateRoleRequest {
  /**
   * <p>The name of the role that you want to modify.</p>
   */
  RoleName: string | undefined;

  /**
   * <p>The new description that you want to apply to the specified role.</p>
   */
  Description?: string;

  /**
   * <p>The maximum session duration (in seconds) that you want to set for the specified role.
   *             If you do not specify a value for this setting, the default maximum of one hour is
   *             applied. This setting can have a value from 1 hour to 12 hours.</p>
   *         <p>Anyone who assumes the role from the AWS CLI or API can use the
   *                 <code>DurationSeconds</code> API parameter or the <code>duration-seconds</code> CLI
   *             parameter to request a longer session. The <code>MaxSessionDuration</code> setting
   *             determines the maximum duration that can be requested using the
   *                 <code>DurationSeconds</code> parameter. If users don't specify a value for the
   *                 <code>DurationSeconds</code> parameter, their security credentials are valid for one
   *             hour by default. This applies when you use the <code>AssumeRole*</code> API operations
   *             or the <code>assume-role*</code> CLI operations but does not apply when you use those
   *             operations to create a console URL. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html">Using IAM
   *                 roles</a> in the <i>IAM User Guide</i>.</p>
   */
  MaxSessionDuration?: number;
}

export namespace UpdateRoleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoleRequest): any => ({
    ...obj,
  });
}

export interface UpdateRoleResponse {}

export namespace UpdateRoleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoleResponse): any => ({
    ...obj,
  });
}

export interface UpdateRoleDescriptionRequest {
  /**
   * <p>The name of the role that you want to modify.</p>
   */
  RoleName: string | undefined;

  /**
   * <p>The new description that you want to apply to the specified role.</p>
   */
  Description: string | undefined;
}

export namespace UpdateRoleDescriptionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoleDescriptionRequest): any => ({
    ...obj,
  });
}

export interface UpdateRoleDescriptionResponse {
  /**
   * <p>A structure that contains details about the modified role.</p>
   */
  Role?: Role;
}

export namespace UpdateRoleDescriptionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoleDescriptionResponse): any => ({
    ...obj,
  });
}

export interface UpdateSAMLProviderRequest {
  /**
   * <p>An XML document generated by an identity provider (IdP) that supports SAML 2.0. The
   *             document includes the issuer's name, expiration information, and keys that can be used
   *             to validate the SAML authentication response (assertions) that are received from the
   *             IdP. You must generate the metadata document using the identity management software that
   *             is used as your organization's IdP.</p>
   */
  SAMLMetadataDocument: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SAML provider to update.</p>
   *         <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.</p>
   */
  SAMLProviderArn: string | undefined;
}

export namespace UpdateSAMLProviderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSAMLProviderRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>UpdateSAMLProvider</a> request.
 *     </p>
 */
export interface UpdateSAMLProviderResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the SAML provider that was updated.</p>
   */
  SAMLProviderArn?: string;
}

export namespace UpdateSAMLProviderResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSAMLProviderResponse): any => ({
    ...obj,
  });
}

export interface UpdateServerCertificateRequest {
  /**
   * <p>The name of the server certificate that you want to update.</p>
   *         <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  ServerCertificateName: string | undefined;

  /**
   * <p>The new path for the server certificate. Include this only if you are updating the
   *             server certificate's path.</p>
   *         <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  NewPath?: string;

  /**
   * <p>The new name for the server certificate. Include this only if you are updating the
   *             server certificate's name. The name of the certificate cannot contain any spaces.</p>
   *         <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  NewServerCertificateName?: string;
}

export namespace UpdateServerCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateServerCertificateRequest): any => ({
    ...obj,
  });
}

export interface UpdateServiceSpecificCredentialRequest {
  /**
   * <p>The name of the IAM user associated with the service-specific credential. If you do
   *             not specify this value, then the operation assumes the user whose credentials are used
   *             to call the operation.</p>
   *         <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;

  /**
   * <p>The unique identifier of the service-specific credential.</p>
   *         <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  ServiceSpecificCredentialId: string | undefined;

  /**
   * <p>The status to be assigned to the service-specific credential.</p>
   */
  Status: StatusType | string | undefined;
}

export namespace UpdateServiceSpecificCredentialRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateServiceSpecificCredentialRequest): any => ({
    ...obj,
  });
}

export interface UpdateSigningCertificateRequest {
  /**
   * <p>The name of the IAM user the signing certificate belongs to.</p>
   *         <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;

  /**
   * <p>The ID of the signing certificate you want to update.</p>
   *         <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  CertificateId: string | undefined;

  /**
   * <p> The status you want to assign to the certificate. <code>Active</code> means that the
   *             certificate can be used for programmatic calls to AWS <code>Inactive</code> means that
   *             the certificate cannot be used.</p>
   */
  Status: StatusType | string | undefined;
}

export namespace UpdateSigningCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSigningCertificateRequest): any => ({
    ...obj,
  });
}

export interface UpdateSSHPublicKeyRequest {
  /**
   * <p>The name of the IAM user associated with the SSH public key.</p>
   *         <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>The unique identifier for the SSH public key.</p>
   *         <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  SSHPublicKeyId: string | undefined;

  /**
   * <p>The status to assign to the SSH public key. <code>Active</code> means that the key can
   *             be used for authentication with an AWS CodeCommit repository. <code>Inactive</code> means that
   *             the key cannot be used.</p>
   */
  Status: StatusType | string | undefined;
}

export namespace UpdateSSHPublicKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSSHPublicKeyRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserRequest {
  /**
   * <p>Name of the user to update. If you're changing the name of the user, this is the
   *             original user name.</p>
   *         <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>New path for the IAM user. Include this parameter only if you're changing the user's
   *             path.</p>
   *         <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  NewPath?: string;

  /**
   * <p>New name for the user. Include this parameter only if you're changing the user's
   *             name.</p>
   *         <p>IAM user, group, role, and policy names must be unique within the account. Names are
   *             not distinguished by case. For example, you cannot create resources named both
   *             "MyResource" and "myresource".</p>
   */
  NewUserName?: string;
}

export namespace UpdateUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the public key certificate and the private key do not
 *       match.</p>
 */
export interface KeyPairMismatchException extends __SmithyException, $MetadataBearer {
  name: "KeyPairMismatchException";
  $fault: "client";
  message?: string;
}

export namespace KeyPairMismatchException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeyPairMismatchException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the certificate was malformed or expired. The error
 *       message describes the specific error.</p>
 */
export interface MalformedCertificateException extends __SmithyException, $MetadataBearer {
  name: "MalformedCertificateException";
  $fault: "client";
  message?: string;
}

export namespace MalformedCertificateException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MalformedCertificateException): any => ({
    ...obj,
  });
}

export interface UploadServerCertificateRequest {
  /**
   * <p>The path for the server certificate. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *                 identifiers</a> in the <i>IAM User Guide</i>.</p>
   *         <p>This parameter is optional. If it is not included, it defaults to a slash (/).
   *             This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   *         <note>
   *             <p> If you are uploading a server certificate specifically for use with Amazon
   *                 CloudFront distributions, you must specify a path using the <code>path</code>
   *                 parameter. The path must begin with <code>/cloudfront</code> and must include a
   *                 trailing slash (for example, <code>/cloudfront/test/</code>).</p>
   *         </note>
   */
  Path?: string;

  /**
   * <p>The name for the server certificate. Do not include the path in this value. The name
   *             of the certificate cannot contain any spaces.</p>
   *         <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  ServerCertificateName: string | undefined;

  /**
   * <p>The contents of the public key certificate in PEM-encoded format.</p>
   *         <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   */
  CertificateBody: string | undefined;

  /**
   * <p>The contents of the private key in PEM-encoded format.</p>
   *         <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   */
  PrivateKey: string | undefined;

  /**
   * <p>The contents of the certificate chain. This is typically a concatenation of the
   *             PEM-encoded public key certificates of the chain.</p>
   *         <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   */
  CertificateChain?: string;

  /**
   * <p>A list of tags that you want to attach to the new IAM server certificate resource.
   *       Each tag consists of a key name and an associated value. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   *          <note>
   *             <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request
   *    fails and the resource is not created.</p>
   *          </note>
   */
  Tags?: Tag[];
}

export namespace UploadServerCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UploadServerCertificateRequest): any => ({
    ...obj,
    ...(obj.PrivateKey && { PrivateKey: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains the response to a successful <a>UploadServerCertificate</a>
 *       request. </p>
 */
export interface UploadServerCertificateResponse {
  /**
   * <p>The meta information of the uploaded server certificate without its certificate body,
   *             certificate chain, and private key.</p>
   */
  ServerCertificateMetadata?: ServerCertificateMetadata;

  /**
   * <p>A list of tags that are attached to the new IAM server certificate. The returned list of tags is sorted by tag key.
   *       For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace UploadServerCertificateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UploadServerCertificateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the same certificate is associated with an IAM user in
 *       the account.</p>
 */
export interface DuplicateCertificateException extends __SmithyException, $MetadataBearer {
  name: "DuplicateCertificateException";
  $fault: "client";
  message?: string;
}

export namespace DuplicateCertificateException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DuplicateCertificateException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the certificate is invalid.</p>
 */
export interface InvalidCertificateException extends __SmithyException, $MetadataBearer {
  name: "InvalidCertificateException";
  $fault: "client";
  message?: string;
}

export namespace InvalidCertificateException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidCertificateException): any => ({
    ...obj,
  });
}

export interface UploadSigningCertificateRequest {
  /**
   * <p>The name of the user the signing certificate is for.</p>
   *         <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;

  /**
   * <p>The contents of the signing certificate.</p>
   *         <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   */
  CertificateBody: string | undefined;
}

export namespace UploadSigningCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UploadSigningCertificateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>UploadSigningCertificate</a>
 *       request. </p>
 */
export interface UploadSigningCertificateResponse {
  /**
   * <p>Information about the certificate.</p>
   */
  Certificate: SigningCertificate | undefined;
}

export namespace UploadSigningCertificateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UploadSigningCertificateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the SSH public key is already associated with the
 *       specified IAM user.</p>
 */
export interface DuplicateSSHPublicKeyException extends __SmithyException, $MetadataBearer {
  name: "DuplicateSSHPublicKeyException";
  $fault: "client";
  message?: string;
}

export namespace DuplicateSSHPublicKeyException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DuplicateSSHPublicKeyException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the public key is malformed or otherwise invalid.</p>
 */
export interface InvalidPublicKeyException extends __SmithyException, $MetadataBearer {
  name: "InvalidPublicKeyException";
  $fault: "client";
  message?: string;
}

export namespace InvalidPublicKeyException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidPublicKeyException): any => ({
    ...obj,
  });
}

export interface UploadSSHPublicKeyRequest {
  /**
   * <p>The name of the IAM user to associate the SSH public key with.</p>
   *         <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>The SSH public key. The public key must be encoded in ssh-rsa format or PEM format.
   *             The minimum bit-length of the public key is 2048 bits. For example, you can generate a
   *             2048-bit key, and the resulting PEM file is 1679 bytes long.</p>
   *         <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   */
  SSHPublicKeyBody: string | undefined;
}

export namespace UploadSSHPublicKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UploadSSHPublicKeyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>UploadSSHPublicKey</a>
 *       request.</p>
 */
export interface UploadSSHPublicKeyResponse {
  /**
   * <p>Contains information about the SSH public key.</p>
   */
  SSHPublicKey?: SSHPublicKey;
}

export namespace UploadSSHPublicKeyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UploadSSHPublicKeyResponse): any => ({
    ...obj,
  });
}
