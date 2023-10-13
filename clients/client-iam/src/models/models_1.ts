// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { IAMServiceException as __BaseException } from "./IAMServiceException";
import { Role, ServerCertificateMetadata, SigningCertificate, SSHPublicKey, StatusType, Tag } from "./models_0";

/**
 * @public
 */
export interface UntagMFADeviceRequest {
  /**
   * @public
   * <p>The unique identifier for the IAM virtual MFA device from which you want to remove
   *       tags. For virtual MFA devices, the serial number is the same as the ARN.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  SerialNumber: string | undefined;

  /**
   * @public
   * <p>A list of key names as a simple array of strings. The tags with matching keys are
   *       removed from the specified instance profile.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagOpenIDConnectProviderRequest {
  /**
   * @public
   * <p>The ARN of the OIDC provider in IAM from which you want to remove tags.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  OpenIDConnectProviderArn: string | undefined;

  /**
   * @public
   * <p>A list of key names as a simple array of strings. The tags with matching keys are
   *       removed from the specified OIDC provider.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagPolicyRequest {
  /**
   * @public
   * <p>The ARN of the IAM customer managed policy from which you want to remove
   *       tags.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  PolicyArn: string | undefined;

  /**
   * @public
   * <p>A list of key names as a simple array of strings. The tags with matching keys are
   *       removed from the specified policy.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagRoleRequest {
  /**
   * @public
   * <p>The name of the IAM role from which you want to remove tags.</p>
   *          <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;

  /**
   * @public
   * <p>A list of key names as a simple array of strings. The tags with matching keys are
   *       removed from the specified role.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagSAMLProviderRequest {
  /**
   * @public
   * <p>The ARN of the SAML identity provider in IAM from which you want to remove
   *       tags.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  SAMLProviderArn: string | undefined;

  /**
   * @public
   * <p>A list of key names as a simple array of strings. The tags with matching keys are
   *       removed from the specified SAML identity provider.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagServerCertificateRequest {
  /**
   * @public
   * <p>The name of the IAM server certificate from which you want to remove tags.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  ServerCertificateName: string | undefined;

  /**
   * @public
   * <p>A list of key names as a simple array of strings. The tags with matching keys are
   *       removed from the specified IAM server certificate.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagUserRequest {
  /**
   * @public
   * <p>The name of the IAM user from which you want to remove tags.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * @public
   * <p>A list of key names as a simple array of strings. The tags with matching keys are
   *       removed from the specified user.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAccessKeyRequest {
  /**
   * @public
   * <p>The name of the user whose key you want to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;

  /**
   * @public
   * <p>The access key ID of the secret access key you want to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  AccessKeyId: string | undefined;

  /**
   * @public
   * <p> The status you want to assign to the secret access key. <code>Active</code> means
   *             that the key can be used for programmatic calls to Amazon Web Services, while <code>Inactive</code>
   *             means that the key cannot be used.</p>
   */
  Status: StatusType | undefined;
}

/**
 * @public
 */
export interface UpdateAccountPasswordPolicyRequest {
  /**
   * @public
   * <p>The minimum number of characters allowed in an IAM user password.</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *             value of <code>6</code>.</p>
   */
  MinimumPasswordLength?: number;

  /**
   * @public
   * <p>Specifies whether IAM user passwords must contain at least one of the following
   *             non-alphanumeric characters:</p>
   *          <p>! @ # $ % ^ & * ( ) _ + - = [ ] \{ \} | '</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *             value of <code>false</code>. The result is that passwords do not require at least one
   *             symbol character.</p>
   */
  RequireSymbols?: boolean;

  /**
   * @public
   * <p>Specifies whether IAM user passwords must contain at least one numeric character (0
   *             to 9).</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *             value of <code>false</code>. The result is that passwords do not require at least one
   *             numeric character.</p>
   */
  RequireNumbers?: boolean;

  /**
   * @public
   * <p>Specifies whether IAM user passwords must contain at least one uppercase character
   *             from the ISO basic Latin alphabet (A to Z).</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *             value of <code>false</code>. The result is that passwords do not require at least one
   *             uppercase character.</p>
   */
  RequireUppercaseCharacters?: boolean;

  /**
   * @public
   * <p>Specifies whether IAM user passwords must contain at least one lowercase character
   *             from the ISO basic Latin alphabet (a to z).</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *             value of <code>false</code>. The result is that passwords do not require at least one
   *             lowercase character.</p>
   */
  RequireLowercaseCharacters?: boolean;

  /**
   * @public
   * <p> Allows all IAM users in your account to use the Amazon Web Services Management Console to change their own
   *             passwords. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_enable-user-change.html">Permitting
   *                 IAM users to change their own passwords</a> in the
   *                 <i>IAM User Guide</i>.</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *             value of <code>false</code>. The result is that IAM users in the account do not
   *             automatically have permissions to change their own password.</p>
   */
  AllowUsersToChangePassword?: boolean;

  /**
   * @public
   * <p>The number of days that an IAM user password is valid.</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *             value of <code>0</code>. The result is that IAM user passwords never expire.</p>
   */
  MaxPasswordAge?: number;

  /**
   * @public
   * <p>Specifies the number of previous passwords that IAM users are prevented from
   *             reusing.</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *             value of <code>0</code>. The result is that IAM users are not prevented from reusing
   *             previous passwords.</p>
   */
  PasswordReusePrevention?: number;

  /**
   * @public
   * <p> Prevents IAM users who are accessing the account via the Amazon Web Services Management Console from setting a
   *             new console password after their password has expired. The IAM user cannot access the
   *             console until an administrator resets the password.</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *             value of <code>false</code>. The result is that IAM users can change their passwords
   *             after they expire and continue to sign in as the user.</p>
   *          <note>
   *             <p> In the Amazon Web Services Management Console, the custom password policy option <b>Allow
   *                     users to change their own password</b> gives IAM users permissions to
   *                     <code>iam:ChangePassword</code> for only their user and to the
   *                     <code>iam:GetAccountPasswordPolicy</code> action. This option does not attach a
   *                 permissions policy to each user, rather the permissions are applied at the
   *                 account-level for all users by IAM. IAM users with
   *                     <code>iam:ChangePassword</code> permission and active access keys can reset
   *                 their own expired console password using the CLI or API.</p>
   *          </note>
   */
  HardExpiry?: boolean;
}

/**
 * @public
 */
export interface UpdateAssumeRolePolicyRequest {
  /**
   * @public
   * <p>The name of the role to update with the new policy.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;

  /**
   * @public
   * <p>The policy that grants an entity permission to assume the role.</p>
   *          <p>You must provide policies in JSON format in IAM. However, for CloudFormation
   *             templates formatted in YAML, you can provide the policy in JSON or YAML format. CloudFormation always converts a YAML policy to JSON format before submitting it to
   *             IAM.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
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

/**
 * @public
 */
export interface UpdateGroupRequest {
  /**
   * @public
   * <p>Name of the IAM group to update. If you're changing the name of the group, this is
   *             the original name.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  GroupName: string | undefined;

  /**
   * @public
   * <p>New path for the IAM group. Only include this if changing the group's path.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  NewPath?: string;

  /**
   * @public
   * <p>New name for the IAM group. Only include this if changing the group's name.</p>
   *          <p>IAM user, group, role, and policy names must be unique within the account. Names are
   *             not distinguished by case. For example, you cannot create resources named both
   *             "MyResource" and "myresource".</p>
   */
  NewGroupName?: string;
}

/**
 * @public
 */
export interface UpdateLoginProfileRequest {
  /**
   * @public
   * <p>The name of the user whose password you want to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * @public
   * <p>The new password for the specified IAM user.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
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
   *          <p>However, the format can be further restricted by the account administrator by setting
   *             a password policy on the Amazon Web Services account. For more information, see <a>UpdateAccountPasswordPolicy</a>.</p>
   */
  Password?: string;

  /**
   * @public
   * <p>Allows this new password to be used only once by requiring the specified IAM user to
   *             set a new password on next sign-in.</p>
   */
  PasswordResetRequired?: boolean;
}

/**
 * @public
 */
export interface UpdateOpenIDConnectProviderThumbprintRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM OIDC provider resource object for which
   *             you want to update the thumbprint. You can get a list of OIDC provider ARNs by using the
   *                 <a>ListOpenIDConnectProviders</a> operation.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  OpenIDConnectProviderArn: string | undefined;

  /**
   * @public
   * <p>A list of certificate thumbprints that are associated with the specified IAM OpenID
   *             Connect provider. For more information, see <a>CreateOpenIDConnectProvider</a>. </p>
   */
  ThumbprintList: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateRoleRequest {
  /**
   * @public
   * <p>The name of the role that you want to modify.</p>
   */
  RoleName: string | undefined;

  /**
   * @public
   * <p>The new description that you want to apply to the specified role.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The maximum session duration (in seconds) that you want to set for the specified role.
   *             If you do not specify a value for this setting, the default value of one hour is
   *             applied. This setting can have a value from 1 hour to 12 hours.</p>
   *          <p>Anyone who assumes the role from the CLI or API can use the
   *                 <code>DurationSeconds</code> API parameter or the <code>duration-seconds</code>
   *             CLI parameter to request a longer session. The <code>MaxSessionDuration</code> setting
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

/**
 * @public
 */
export interface UpdateRoleResponse {}

/**
 * @public
 */
export interface UpdateRoleDescriptionRequest {
  /**
   * @public
   * <p>The name of the role that you want to modify.</p>
   */
  RoleName: string | undefined;

  /**
   * @public
   * <p>The new description that you want to apply to the specified role.</p>
   */
  Description: string | undefined;
}

/**
 * @public
 */
export interface UpdateRoleDescriptionResponse {
  /**
   * @public
   * <p>A structure that contains details about the modified role.</p>
   */
  Role?: Role;
}

/**
 * @public
 */
export interface UpdateSAMLProviderRequest {
  /**
   * @public
   * <p>An XML document generated by an identity provider (IdP) that supports SAML 2.0. The
   *             document includes the issuer's name, expiration information, and keys that can be used
   *             to validate the SAML authentication response (assertions) that are received from the
   *             IdP. You must generate the metadata document using the identity management software that
   *             is used as your organization's IdP.</p>
   */
  SAMLMetadataDocument: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the SAML provider to update.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  SAMLProviderArn: string | undefined;
}

/**
 * @public
 * <p>Contains the response to a successful <a>UpdateSAMLProvider</a> request.
 *     </p>
 */
export interface UpdateSAMLProviderResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the SAML provider that was updated.</p>
   */
  SAMLProviderArn?: string;
}

/**
 * @public
 */
export interface UpdateServerCertificateRequest {
  /**
   * @public
   * <p>The name of the server certificate that you want to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  ServerCertificateName: string | undefined;

  /**
   * @public
   * <p>The new path for the server certificate. Include this only if you are updating the
   *             server certificate's path.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  NewPath?: string;

  /**
   * @public
   * <p>The new name for the server certificate. Include this only if you are updating the
   *             server certificate's name. The name of the certificate cannot contain any spaces.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  NewServerCertificateName?: string;
}

/**
 * @public
 */
export interface UpdateServiceSpecificCredentialRequest {
  /**
   * @public
   * <p>The name of the IAM user associated with the service-specific credential. If you do
   *             not specify this value, then the operation assumes the user whose credentials are used
   *             to call the operation.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;

  /**
   * @public
   * <p>The unique identifier of the service-specific credential.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  ServiceSpecificCredentialId: string | undefined;

  /**
   * @public
   * <p>The status to be assigned to the service-specific credential.</p>
   */
  Status: StatusType | undefined;
}

/**
 * @public
 */
export interface UpdateSigningCertificateRequest {
  /**
   * @public
   * <p>The name of the IAM user the signing certificate belongs to.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;

  /**
   * @public
   * <p>The ID of the signing certificate you want to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  CertificateId: string | undefined;

  /**
   * @public
   * <p> The status you want to assign to the certificate. <code>Active</code> means that the
   *             certificate can be used for programmatic calls to Amazon Web Services <code>Inactive</code> means that
   *             the certificate cannot be used.</p>
   */
  Status: StatusType | undefined;
}

/**
 * @public
 */
export interface UpdateSSHPublicKeyRequest {
  /**
   * @public
   * <p>The name of the IAM user associated with the SSH public key.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the SSH public key.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  SSHPublicKeyId: string | undefined;

  /**
   * @public
   * <p>The status to assign to the SSH public key. <code>Active</code> means that the key can
   *             be used for authentication with an CodeCommit repository. <code>Inactive</code> means that
   *             the key cannot be used.</p>
   */
  Status: StatusType | undefined;
}

/**
 * @public
 */
export interface UpdateUserRequest {
  /**
   * @public
   * <p>Name of the user to update. If you're changing the name of the user, this is the
   *             original user name.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * @public
   * <p>New path for the IAM user. Include this parameter only if you're changing the user's
   *             path.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  NewPath?: string;

  /**
   * @public
   * <p>New name for the user. Include this parameter only if you're changing the user's
   *             name.</p>
   *          <p>IAM user, group, role, and policy names must be unique within the account. Names are
   *             not distinguished by case. For example, you cannot create resources named both
   *             "MyResource" and "myresource".</p>
   */
  NewUserName?: string;
}

/**
 * @public
 * <p>The request was rejected because the public key certificate and the private key do not
 *       match.</p>
 */
export class KeyPairMismatchException extends __BaseException {
  readonly name: "KeyPairMismatchException" = "KeyPairMismatchException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KeyPairMismatchException, __BaseException>) {
    super({
      name: "KeyPairMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KeyPairMismatchException.prototype);
  }
}

/**
 * @public
 * <p>The request was rejected because the certificate was malformed or expired. The error
 *       message describes the specific error.</p>
 */
export class MalformedCertificateException extends __BaseException {
  readonly name: "MalformedCertificateException" = "MalformedCertificateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MalformedCertificateException, __BaseException>) {
    super({
      name: "MalformedCertificateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MalformedCertificateException.prototype);
  }
}

/**
 * @public
 */
export interface UploadServerCertificateRequest {
  /**
   * @public
   * <p>The path for the server certificate. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *                 identifiers</a> in the <i>IAM User Guide</i>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/).
   *             This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   *          <note>
   *             <p> If you are uploading a server certificate specifically for use with Amazon
   *                 CloudFront distributions, you must specify a path using the <code>path</code>
   *                 parameter. The path must begin with <code>/cloudfront</code> and must include a
   *                 trailing slash (for example, <code>/cloudfront/test/</code>).</p>
   *          </note>
   */
  Path?: string;

  /**
   * @public
   * <p>The name for the server certificate. Do not include the path in this value. The name
   *             of the certificate cannot contain any spaces.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  ServerCertificateName: string | undefined;

  /**
   * @public
   * <p>The contents of the public key certificate in PEM-encoded format.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
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
   * @public
   * <p>The contents of the private key in PEM-encoded format.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
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
   * @public
   * <p>The contents of the certificate chain. This is typically a concatenation of the
   *             PEM-encoded public key certificates of the chain.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
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
   * @public
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

/**
 * @public
 * <p>Contains the response to a successful <a>UploadServerCertificate</a>
 *       request. </p>
 */
export interface UploadServerCertificateResponse {
  /**
   * @public
   * <p>The meta information of the uploaded server certificate without its certificate body,
   *             certificate chain, and private key.</p>
   */
  ServerCertificateMetadata?: ServerCertificateMetadata;

  /**
   * @public
   * <p>A list of tags that are attached to the new IAM server certificate. The returned list of tags is sorted by tag key.
   *       For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>The request was rejected because the same certificate is associated with an IAM user in
 *       the account.</p>
 */
export class DuplicateCertificateException extends __BaseException {
  readonly name: "DuplicateCertificateException" = "DuplicateCertificateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateCertificateException, __BaseException>) {
    super({
      name: "DuplicateCertificateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateCertificateException.prototype);
  }
}

/**
 * @public
 * <p>The request was rejected because the certificate is invalid.</p>
 */
export class InvalidCertificateException extends __BaseException {
  readonly name: "InvalidCertificateException" = "InvalidCertificateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCertificateException, __BaseException>) {
    super({
      name: "InvalidCertificateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCertificateException.prototype);
  }
}

/**
 * @public
 */
export interface UploadSigningCertificateRequest {
  /**
   * @public
   * <p>The name of the user the signing certificate is for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;

  /**
   * @public
   * <p>The contents of the signing certificate.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
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

/**
 * @public
 * <p>Contains the response to a successful <a>UploadSigningCertificate</a>
 *       request. </p>
 */
export interface UploadSigningCertificateResponse {
  /**
   * @public
   * <p>Information about the certificate.</p>
   */
  Certificate: SigningCertificate | undefined;
}

/**
 * @public
 * <p>The request was rejected because the SSH public key is already associated with the
 *       specified IAM user.</p>
 */
export class DuplicateSSHPublicKeyException extends __BaseException {
  readonly name: "DuplicateSSHPublicKeyException" = "DuplicateSSHPublicKeyException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateSSHPublicKeyException, __BaseException>) {
    super({
      name: "DuplicateSSHPublicKeyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateSSHPublicKeyException.prototype);
  }
}

/**
 * @public
 * <p>The request was rejected because the public key is malformed or otherwise invalid.</p>
 */
export class InvalidPublicKeyException extends __BaseException {
  readonly name: "InvalidPublicKeyException" = "InvalidPublicKeyException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPublicKeyException, __BaseException>) {
    super({
      name: "InvalidPublicKeyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPublicKeyException.prototype);
  }
}

/**
 * @public
 */
export interface UploadSSHPublicKeyRequest {
  /**
   * @public
   * <p>The name of the IAM user to associate the SSH public key with.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * @public
   * <p>The SSH public key. The public key must be encoded in ssh-rsa format or PEM format.
   *             The minimum bit-length of the public key is 2048 bits. For example, you can generate a
   *             2048-bit key, and the resulting PEM file is 1679 bytes long.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
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

/**
 * @public
 * <p>Contains the response to a successful <a>UploadSSHPublicKey</a>
 *       request.</p>
 */
export interface UploadSSHPublicKeyResponse {
  /**
   * @public
   * <p>Contains information about the SSH public key.</p>
   */
  SSHPublicKey?: SSHPublicKey;
}

/**
 * @internal
 */
export const UpdateLoginProfileRequestFilterSensitiveLog = (obj: UpdateLoginProfileRequest): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UploadServerCertificateRequestFilterSensitiveLog = (obj: UploadServerCertificateRequest): any => ({
  ...obj,
  ...(obj.PrivateKey && { PrivateKey: SENSITIVE_STRING }),
});
