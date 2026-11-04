// smithy-typescript generated code
import type { AssertionEncryptionModeType, StatusType } from "./enums";
import type { Role, ServerCertificateMetadata, SigningCertificate, SSHPublicKey, Tag } from "./models_0";

/**
 * @public
 */
export interface TagSAMLProviderRequest {
  /**
   * The ARN of the SAML identity provider in IAM to which you want to add tags.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  SAMLProviderArn: string | undefined;

  /**
   * The list of tags that you want to attach to the SAML identity provider in IAM. Each tag consists of a key name and an associated value.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagServerCertificateRequest {
  /**
   * The name of the IAM server certificate to which you want to add tags.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  ServerCertificateName: string | undefined;

  /**
   * The list of tags that you want to attach to the IAM server certificate. Each tag consists of a key name and an associated value.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagUserRequest {
  /**
   * The name of the IAM user to which you want to add tags.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The list of tags that you want to attach to the IAM user. Each tag consists of a key name and an associated value.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagInstanceProfileRequest {
  /**
   * The name of the IAM instance profile from which you want to remove tags.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  InstanceProfileName: string | undefined;

  /**
   * A list of key names as a simple array of strings. The tags with matching keys are removed from the specified instance profile.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagMFADeviceRequest {
  /**
   * The unique identifier for the IAM virtual MFA device from which you want to remove tags. For virtual MFA devices, the serial number is the same as the ARN.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  SerialNumber: string | undefined;

  /**
   * A list of key names as a simple array of strings. The tags with matching keys are removed from the specified instance profile.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagOpenIDConnectProviderRequest {
  /**
   * The ARN of the OIDC provider in IAM from which you want to remove tags.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  OpenIDConnectProviderArn: string | undefined;

  /**
   * A list of key names as a simple array of strings. The tags with matching keys are removed from the specified OIDC provider.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagPolicyRequest {
  /**
   * The ARN of the IAM customer managed policy from which you want to remove tags.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  PolicyArn: string | undefined;

  /**
   * A list of key names as a simple array of strings. The tags with matching keys are removed from the specified policy.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagRoleRequest {
  /**
   * The name of the IAM role from which you want to remove tags.
   *
   * This parameter accepts (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters that consist of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  RoleName: string | undefined;

  /**
   * A list of key names as a simple array of strings. The tags with matching keys are removed from the specified role.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagSAMLProviderRequest {
  /**
   * The ARN of the SAML identity provider in IAM from which you want to remove tags.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  SAMLProviderArn: string | undefined;

  /**
   * A list of key names as a simple array of strings. The tags with matching keys are removed from the specified SAML identity provider.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagServerCertificateRequest {
  /**
   * The name of the IAM server certificate from which you want to remove tags.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  ServerCertificateName: string | undefined;

  /**
   * A list of key names as a simple array of strings. The tags with matching keys are removed from the specified IAM server certificate.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagUserRequest {
  /**
   * The name of the IAM user from which you want to remove tags.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * A list of key names as a simple array of strings. The tags with matching keys are removed from the specified user.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAccessKeyRequest {
  /**
   * The name of the user whose key you want to update.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * The access key ID of the secret access key you want to update.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters that can consist of any upper or lowercased letter or digit.
   *
   * @public
   */
  AccessKeyId: string | undefined;

  /**
   * The status you want to assign to the secret access key. `Active` means that the key can be used for programmatic calls to Amazon Web Services, while `Inactive` means that the key cannot be used.
   *
   * @public
   */
  Status: StatusType | undefined;
}

/**
 * @public
 */
export interface UpdateAccountPasswordPolicyRequest {
  /**
   * The minimum number of characters allowed in an IAM user password.
   *
   * If you do not specify a value for this parameter, then the operation uses the default value of `6`.
   *
   * @public
   */
  MinimumPasswordLength?: number | undefined;

  /**
   * Specifies whether IAM user passwords must contain at least one of the following non-alphanumeric characters:
   *
   * ! @ # $ % ^ & * ( ) _ + - = [ ] \{ \} | '
   *
   * If you do not specify a value for this parameter, then the operation uses the default value of `false`. The result is that passwords do not require at least one symbol character.
   *
   * @public
   */
  RequireSymbols?: boolean | undefined;

  /**
   * Specifies whether IAM user passwords must contain at least one numeric character (0 to 9).
   *
   * If you do not specify a value for this parameter, then the operation uses the default value of `false`. The result is that passwords do not require at least one numeric character.
   *
   * @public
   */
  RequireNumbers?: boolean | undefined;

  /**
   * Specifies whether IAM user passwords must contain at least one uppercase character from the ISO basic Latin alphabet (A to Z).
   *
   * If you do not specify a value for this parameter, then the operation uses the default value of `false`. The result is that passwords do not require at least one uppercase character.
   *
   * @public
   */
  RequireUppercaseCharacters?: boolean | undefined;

  /**
   * Specifies whether IAM user passwords must contain at least one lowercase character from the ISO basic Latin alphabet (a to z).
   *
   * If you do not specify a value for this parameter, then the operation uses the default value of `false`. The result is that passwords do not require at least one lowercase character.
   *
   * @public
   */
  RequireLowercaseCharacters?: boolean | undefined;

  /**
   * Allows all IAM users in your account to use the Amazon Web Services Management Console to change their own passwords. For more information, see [Permitting IAM users to change their own passwords](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_enable-user-change.html) in the *IAM User Guide*.
   *
   * If you do not specify a value for this parameter, then the operation uses the default value of `false`. The result is that IAM users in the account do not automatically have permissions to change their own password.
   *
   * @public
   */
  AllowUsersToChangePassword?: boolean | undefined;

  /**
   * The number of days that an IAM user password is valid.
   *
   * If you do not specify a value for this parameter, then the operation uses the default value of `0`. The result is that IAM user passwords never expire.
   *
   * @public
   */
  MaxPasswordAge?: number | undefined;

  /**
   * Specifies the number of previous passwords that IAM users are prevented from reusing.
   *
   * If you do not specify a value for this parameter, then the operation uses the default value of `0`. The result is that IAM users are not prevented from reusing previous passwords.
   *
   * @public
   */
  PasswordReusePrevention?: number | undefined;

  /**
   * Prevents IAM users who are accessing the account via the Amazon Web Services Management Console from setting a new console password after their password has expired. The IAM user cannot access the console until an administrator resets the password.
   *
   * If you do not specify a value for this parameter, then the operation uses the default value of `false`. The result is that IAM users can change their passwords after they expire and continue to sign in as the user.
   *
   * > **Note:** In the Amazon Web Services Management Console, the custom password policy option **Allow users to change their own password** gives IAM users permissions to `iam:ChangePassword` for only their user and to the `iam:GetAccountPasswordPolicy` action. This option does not attach a permissions policy to each user, rather the permissions are applied at the account-level for all users by IAM. IAM users with `iam:ChangePassword` permission and active access keys can reset their own expired console password using the CLI or API.
   *
   * @public
   */
  HardExpiry?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateAssumeRolePolicyRequest {
  /**
   * The name of the role to update with the new policy.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  RoleName: string | undefined;

  /**
   * The policy that grants an entity permission to assume the role.
   *
   * You must provide policies in JSON format in IAM. However, for CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. CloudFormation always converts a YAML policy to JSON format before submitting it to IAM.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
   *
   * - Any printable ASCII character ranging from the space character (`\u0020`) through the end of the ASCII character range
   * - The printable characters in the Basic Latin and Latin-1 Supplement character set (through `\u00FF`)
   * - The special characters tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`)
   *
   * @public
   */
  PolicyDocument: string | undefined;
}

/**
 * @public
 */
export interface UpdateDelegationRequestRequest {
  /**
   * The unique identifier of the delegation request to update.
   *
   * @public
   */
  DelegationRequestId: string | undefined;

  /**
   * Additional notes or comments to add to the delegation request.
   *
   * @public
   */
  Notes?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGroupRequest {
  /**
   * Name of the IAM group to update. If you're changing the name of the group, this is the original name.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * New path for the IAM group. Only include this if changing the group's path.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (`\u0021`) through the DEL character (`\u007F`), including most punctuation characters, digits, and upper and lowercased letters.
   *
   * @public
   */
  NewPath?: string | undefined;

  /**
   * New name for the IAM group. Only include this if changing the group's name.
   *
   * IAM user, group, role, and policy names must be unique within the account. Names are not distinguished by case. For example, you cannot create resources named both "MyResource" and "myresource".
   *
   * @public
   */
  NewGroupName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateLoginProfileRequest {
  /**
   * The name of the user whose password you want to update.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The new password for the specified IAM user.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
   *
   * - Any printable ASCII character ranging from the space character (`\u0020`) through the end of the ASCII character range
   * - The printable characters in the Basic Latin and Latin-1 Supplement character set (through `\u00FF`)
   * - The special characters tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`)
   *
   * However, the format can be further restricted by the account administrator by setting a password policy on the Amazon Web Services account. For more information, see [UpdateAccountPasswordPolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAccountPasswordPolicy.html).
   *
   * @public
   */
  Password?: string | undefined;

  /**
   * Allows this new password to be used only once by requiring the specified IAM user to set a new password on next sign-in.
   *
   * @public
   */
  PasswordResetRequired?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateOpenIDConnectProviderThumbprintRequest {
  /**
   * The Amazon Resource Name (ARN) of the IAM OIDC provider resource object for which you want to update the thumbprint. You can get a list of OIDC provider ARNs by using the [ListOpenIDConnectProviders](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListOpenIDConnectProviders.html) operation.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  OpenIDConnectProviderArn: string | undefined;

  /**
   * A list of certificate thumbprints that are associated with the specified IAM OpenID Connect provider. For more information, see [CreateOpenIDConnectProvider](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html).
   *
   * @public
   */
  ThumbprintList: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateRoleRequest {
  /**
   * The name of the role that you want to modify.
   *
   * @public
   */
  RoleName: string | undefined;

  /**
   * The new description that you want to apply to the specified role.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The maximum session duration (in seconds) that you want to set for the specified role. If you do not specify a value for this setting, the default value of one hour is applied. This setting can have a value from 1 hour to 12 hours.
   *
   * Anyone who assumes the role from the CLI or API can use the `DurationSeconds` API parameter or the `duration-seconds` CLI parameter to request a longer session. The `MaxSessionDuration` setting determines the maximum duration that can be requested using the `DurationSeconds` parameter. If users don't specify a value for the `DurationSeconds` parameter, their security credentials are valid for one hour by default. This applies when you use the `AssumeRole*` API operations or the `assume-role*` CLI operations but does not apply when you use those operations to create a console URL. For more information, see [Using IAM roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html) in the *IAM User Guide*.
   *
   * > **Note:** IAM role credentials provided by Amazon EC2 instances assigned to the role are not subject to the specified maximum session duration.
   *
   * @public
   */
  MaxSessionDuration?: number | undefined;
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
   * The name of the role that you want to modify.
   *
   * @public
   */
  RoleName: string | undefined;

  /**
   * The new description that you want to apply to the specified role.
   *
   * @public
   */
  Description: string | undefined;
}

/**
 * @public
 */
export interface UpdateRoleDescriptionResponse {
  /**
   * A structure that contains details about the modified role.
   *
   * @public
   */
  Role?: Role | undefined;
}

/**
 * @public
 */
export interface UpdateSAMLProviderRequest {
  /**
   * An XML document generated by an identity provider (IdP) that supports SAML 2.0. The document includes the issuer's name, expiration information, and keys that can be used to validate the SAML authentication response (assertions) that are received from the IdP. You must generate the metadata document using the identity management software that is used as your IdP.
   *
   * @public
   */
  SAMLMetadataDocument?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the SAML provider to update.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  SAMLProviderArn: string | undefined;

  /**
   * Specifies the encryption setting for the SAML provider.
   *
   * @public
   */
  AssertionEncryptionMode?: AssertionEncryptionModeType | undefined;

  /**
   * Specifies the new private key from your external identity provider. The private key must be a .pem file that uses AES-GCM or AES-CBC encryption algorithm to decrypt SAML assertions.
   *
   * @public
   */
  AddPrivateKey?: string | undefined;

  /**
   * The Key ID of the private key to remove.
   *
   * @public
   */
  RemovePrivateKey?: string | undefined;
}

/**
 * Contains the response to a successful [UpdateSAMLProvider](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSAMLProvider.html) request.
 *
 * @public
 */
export interface UpdateSAMLProviderResponse {
  /**
   * The Amazon Resource Name (ARN) of the SAML provider that was updated.
   *
   * @public
   */
  SAMLProviderArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateServerCertificateRequest {
  /**
   * The name of the server certificate that you want to update.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  ServerCertificateName: string | undefined;

  /**
   * The new path for the server certificate. Include this only if you are updating the server certificate's path.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (`\u0021`) through the DEL character (`\u007F`), including most punctuation characters, digits, and upper and lowercased letters.
   *
   * @public
   */
  NewPath?: string | undefined;

  /**
   * The new name for the server certificate. Include this only if you are updating the server certificate's name. The name of the certificate cannot contain any spaces.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  NewServerCertificateName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateServiceSpecificCredentialRequest {
  /**
   * The name of the IAM user associated with the service-specific credential. If you do not specify this value, then the operation assumes the user whose credentials are used to call the operation.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * The unique identifier of the service-specific credential.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters that can consist of any upper or lowercased letter or digit.
   *
   * @public
   */
  ServiceSpecificCredentialId: string | undefined;

  /**
   * The status to be assigned to the service-specific credential.
   *
   * @public
   */
  Status: StatusType | undefined;
}

/**
 * @public
 */
export interface UpdateSigningCertificateRequest {
  /**
   * The name of the IAM user the signing certificate belongs to.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * The ID of the signing certificate you want to update.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters that can consist of any upper or lowercased letter or digit.
   *
   * @public
   */
  CertificateId: string | undefined;

  /**
   * The status you want to assign to the certificate. `Active` means that the certificate can be used for programmatic calls to Amazon Web Services `Inactive` means that the certificate cannot be used.
   *
   * @public
   */
  Status: StatusType | undefined;
}

/**
 * @public
 */
export interface UpdateSSHPublicKeyRequest {
  /**
   * The name of the IAM user associated with the SSH public key.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The unique identifier for the SSH public key.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters that can consist of any upper or lowercased letter or digit.
   *
   * @public
   */
  SSHPublicKeyId: string | undefined;

  /**
   * The status to assign to the SSH public key. `Active` means that the key can be used for authentication with an CodeCommit repository. `Inactive` means that the key cannot be used.
   *
   * @public
   */
  Status: StatusType | undefined;
}

/**
 * @public
 */
export interface UpdateUserRequest {
  /**
   * Name of the user to update. If you're changing the name of the user, this is the original user name.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * New path for the IAM user. Include this parameter only if you're changing the user's path.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (`\u0021`) through the DEL character (`\u007F`), including most punctuation characters, digits, and upper and lowercased letters.
   *
   * @public
   */
  NewPath?: string | undefined;

  /**
   * New name for the user. Include this parameter only if you're changing the user's name.
   *
   * IAM user, group, role, and policy names must be unique within the account. Names are not distinguished by case. For example, you cannot create resources named both "MyResource" and "myresource".
   *
   * @public
   */
  NewUserName?: string | undefined;
}

/**
 * @public
 */
export interface UploadServerCertificateRequest {
  /**
   * The path for the server certificate. For more information about paths, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * This parameter is optional. If it is not included, it defaults to a slash (/). This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (`\u0021`) through the DEL character (`\u007F`), including most punctuation characters, digits, and upper and lowercased letters.
   *
   * > **Note:** If you are uploading a server certificate specifically for use with Amazon CloudFront distributions, you must specify a path using the `path` parameter. The path must begin with `/cloudfront` and must include a trailing slash (for example, `/cloudfront/test/`).
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The name for the server certificate. Do not include the path in this value. The name of the certificate cannot contain any spaces.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  ServerCertificateName: string | undefined;

  /**
   * The contents of the public key certificate in PEM-encoded format.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
   *
   * - Any printable ASCII character ranging from the space character (`\u0020`) through the end of the ASCII character range
   * - The printable characters in the Basic Latin and Latin-1 Supplement character set (through `\u00FF`)
   * - The special characters tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`)
   *
   * @public
   */
  CertificateBody: string | undefined;

  /**
   * The contents of the private key in PEM-encoded format.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
   *
   * - Any printable ASCII character ranging from the space character (`\u0020`) through the end of the ASCII character range
   * - The printable characters in the Basic Latin and Latin-1 Supplement character set (through `\u00FF`)
   * - The special characters tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`)
   *
   * @public
   */
  PrivateKey: string | undefined;

  /**
   * The contents of the certificate chain. This is typically a concatenation of the PEM-encoded public key certificates of the chain.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
   *
   * - Any printable ASCII character ranging from the space character (`\u0020`) through the end of the ASCII character range
   * - The printable characters in the Basic Latin and Latin-1 Supplement character set (through `\u00FF`)
   * - The special characters tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`)
   *
   * @public
   */
  CertificateChain?: string | undefined;

  /**
   * A list of tags that you want to attach to the new IAM server certificate resource. Each tag consists of a key name and an associated value. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.
   *
   * > **Note:** If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains the response to a successful [UploadServerCertificate](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadServerCertificate.html) request.
 *
 * @public
 */
export interface UploadServerCertificateResponse {
  /**
   * The meta information of the uploaded server certificate without its certificate body, certificate chain, and private key.
   *
   * @public
   */
  ServerCertificateMetadata?: ServerCertificateMetadata | undefined;

  /**
   * A list of tags that are attached to the new IAM server certificate. The returned list of tags is sorted by tag key. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface UploadSigningCertificateRequest {
  /**
   * The name of the user the signing certificate is for.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * The contents of the signing certificate.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
   *
   * - Any printable ASCII character ranging from the space character (`\u0020`) through the end of the ASCII character range
   * - The printable characters in the Basic Latin and Latin-1 Supplement character set (through `\u00FF`)
   * - The special characters tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`)
   *
   * @public
   */
  CertificateBody: string | undefined;
}

/**
 * Contains the response to a successful [UploadSigningCertificate](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSigningCertificate.html) request.
 *
 * @public
 */
export interface UploadSigningCertificateResponse {
  /**
   * Information about the certificate.
   *
   * @public
   */
  Certificate: SigningCertificate | undefined;
}

/**
 * @public
 */
export interface UploadSSHPublicKeyRequest {
  /**
   * The name of the IAM user to associate the SSH public key with.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The SSH public key. The public key must be encoded in ssh-rsa format or PEM format. The minimum bit-length of the public key is 2048 bits. For example, you can generate a 2048-bit key, and the resulting PEM file is 1679 bytes long.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
   *
   * - Any printable ASCII character ranging from the space character (`\u0020`) through the end of the ASCII character range
   * - The printable characters in the Basic Latin and Latin-1 Supplement character set (through `\u00FF`)
   * - The special characters tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`)
   *
   * @public
   */
  SSHPublicKeyBody: string | undefined;
}

/**
 * Contains the response to a successful [UploadSSHPublicKey](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSSHPublicKey.html) request.
 *
 * @public
 */
export interface UploadSSHPublicKeyResponse {
  /**
   * Contains information about the SSH public key.
   *
   * @public
   */
  SSHPublicKey?: SSHPublicKey | undefined;
}
