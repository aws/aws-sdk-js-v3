import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface CancelRotateSecretRequest {
  __type?: "CancelRotateSecretRequest";
  /**
   * <p>Specifies the secret for which you want to cancel a rotation request. You can specify
   *       either the Amazon Resource Name (ARN) or the friendly name of the secret.</p>
   *          <note>
   *             <p>If you specify an ARN, we generally recommend that you specify a complete ARN. You can
   *         specify a partial ARN too—for example, if you don’t include the final hyphen and six random
   *         characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN
   *         match can work as long as it uniquely matches only one secret. However, if your secret has a
   *         name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six
   *         characters to the ARN) and you try to use that as a partial ARN, then those characters cause
   *         Secrets Manager to assume that you’re specifying a complete ARN. This confusion can cause unexpected
   *         results. To avoid this situation, we recommend that you don’t create secret names that end
   *         with a hyphen followed by six characters.</p>
   *          </note>
   */
  SecretId: string | undefined;
}

export namespace CancelRotateSecretRequest {
  export const filterSensitiveLog = (obj: CancelRotateSecretRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelRotateSecretRequest =>
    __isa(o, "CancelRotateSecretRequest");
}

export interface CancelRotateSecretResponse {
  __type?: "CancelRotateSecretResponse";
  /**
   * <p>The ARN of the secret for which rotation was canceled.</p>
   */
  ARN?: string;

  /**
   * <p>The friendly name of the secret for which rotation was canceled.</p>
   */
  Name?: string;

  /**
   * <p>The unique identifier of the version of the secret that was created during the rotation.
   *       This version might not be complete, and should be evaluated for possible deletion. At the very
   *       least, you should remove the <code>VersionStage</code> value <code>AWSPENDING</code> to enable this
   *       version to be deleted. Failing to clean up a cancelled rotation can block you from
   *       successfully starting future rotations.</p>
   */
  VersionId?: string;
}

export namespace CancelRotateSecretResponse {
  export const filterSensitiveLog = (obj: CancelRotateSecretResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelRotateSecretResponse =>
    __isa(o, "CancelRotateSecretResponse");
}

export interface CreateSecretRequest {
  __type?: "CreateSecretRequest";
  /**
   * <p>(Optional) If you include <code>SecretString</code> or <code>SecretBinary</code>, then an
   *       initial version is created as part of the secret, and this parameter specifies a unique
   *       identifier for the new version. </p>
   *          <note>
   *             <p>If you use the AWS CLI or one of the AWS SDK to call this operation, then you can
   *         leave this parameter empty. The CLI or SDK generates a random UUID for you and includes it
   *         as the value for this parameter in the request. If you don't use the SDK and instead
   *         generate a raw HTTP request to the Secrets Manager service endpoint, then you must generate a
   *           <code>ClientRequestToken</code> yourself for the new version and include that value in the
   *         request.</p>
   *          </note>
   *          <p>This value helps ensure idempotency. Secrets Manager uses this value to prevent the accidental
   *       creation of duplicate versions if there are failures and retries during a rotation. We
   *       recommend that you generate a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID-type</a> value to
   *       ensure uniqueness of your versions within the specified secret. </p>
   *          <ul>
   *             <li>
   *                <p>If the <code>ClientRequestToken</code> value isn't already associated with a version
   *           of the secret then a new version of the secret is created. </p>
   *             </li>
   *             <li>
   *                <p>If a version with this value already exists and that version's
   *             <code>SecretString</code> and <code>SecretBinary</code> values are the same as those in
   *           the request, then the request is ignored (the operation is idempotent).</p>
   *             </li>
   *             <li>
   *                <p>If a version with this value already exists and that version's
   *             <code>SecretString</code> and <code>SecretBinary</code> values are different from those
   *           in the request then the request fails because you cannot modify an existing version.
   *           Instead, use <a>PutSecretValue</a> to create a new version.</p>
   *             </li>
   *          </ul>
   *          <p>This value becomes the <code>VersionId</code> of the new version.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>(Optional) Specifies a user-provided description of the secret.</p>
   */
  Description?: string;

  /**
   * <p>(Optional) Specifies the ARN, Key ID, or alias of the AWS KMS customer master key (CMK) to
   *       be used to encrypt the <code>SecretString</code> or <code>SecretBinary</code> values in the
   *       versions stored in this secret.</p>
   *          <p>You can specify any of the supported ways to identify a AWS KMS key ID. If you need to
   *       reference a CMK in a different account, you can use only the key ARN or the alias ARN.</p>
   *          <p>If you don't specify this value, then Secrets Manager defaults to using the AWS account's
   *       default CMK (the one named <code>aws/secretsmanager</code>). If a AWS KMS CMK with that name doesn't yet
   *       exist, then Secrets Manager creates it for you automatically the first time it needs to encrypt a
   *       version's <code>SecretString</code> or <code>SecretBinary</code> fields.</p>
   *          <important>
   *             <p>You can use the account's default CMK to encrypt and decrypt only if you call this
   *         operation using credentials from the same account that owns the secret. If the secret is in
   *         a different account, then you must create a custom CMK and specify the ARN in this field.
   *       </p>
   *          </important>
   */
  KmsKeyId?: string;

  /**
   * <p>Specifies the friendly name of the new secret.</p>
   *          <p>The secret name must be ASCII letters, digits, or the following characters :
   *       /_+=.@-</p>
   *          <note>
   *             <p>Don't end your secret name with a hyphen followed by six characters. If you do so, you
   *         risk confusion and unexpected results when searching for a secret by partial ARN. This is
   *         because Secrets Manager automatically adds a hyphen and six random characters at the end of the
   *         ARN.</p>
   *          </note>
   */
  Name: string | undefined;

  /**
   * <p>(Optional) Specifies binary data that you want to encrypt and store in the new version of
   *       the secret. To use this parameter in the command-line tools, we recommend that you store your
   *       binary data in a file and then use the appropriate technique for your tool to pass the
   *       contents of the file as a parameter.</p>
   *          <p>Either <code>SecretString</code> or <code>SecretBinary</code> must have a value, but not
   *       both. They cannot both be empty.</p>
   *          <p>This parameter is not available using the Secrets Manager console. It can be accessed only by
   *       using the AWS CLI or one of the AWS SDKs.</p>
   */
  SecretBinary?: Uint8Array;

  /**
   * <p>(Optional) Specifies text data that you want to encrypt and store in this new version of
   *       the secret.</p>
   *          <p>Either <code>SecretString</code> or <code>SecretBinary</code> must have a value, but not
   *       both. They cannot both be empty.</p>
   *          <p>If you create a secret by using the Secrets Manager console then Secrets Manager puts the protected
   *       secret text in only the <code>SecretString</code> parameter. The Secrets Manager console stores the
   *       information as a JSON structure of key/value pairs that the Lambda rotation function knows how
   *       to parse.</p>
   *          <p>For storing multiple values, we recommend that you use a JSON text string argument and
   *       specify key/value pairs. For information on how to format a JSON parameter for the various
   *       command line tool environments, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#cli-using-param-json">Using JSON for
   *         Parameters</a> in the <i>AWS CLI User Guide</i>. For example:</p>
   *          <p>
   *             <code>[{"username":"bob"},{"password":"abc123xyz456"}]</code>
   *          </p>
   *          <p>If your command-line tool or SDK requires quotation marks around the parameter, you should
   *       use single quotes to avoid confusion with the double quotes required in the JSON text. </p>
   */
  SecretString?: string;

  /**
   * <p>(Optional) Specifies a list of user-defined tags that are attached to the secret. Each tag
   *       is a "Key" and "Value" pair of strings. This operation only appends tags to the existing list
   *       of tags. To remove tags, you must use <a>UntagResource</a>.</p>
   *          <important>
   *             <ul>
   *                <li>
   *                   <p>Secrets Manager tag key names are case sensitive. A tag with the key "ABC" is a different tag
   *             from one with key "abc".</p>
   *                </li>
   *                <li>
   *                   <p>If you check tags in IAM policy <code>Condition</code> elements as part of your
   *             security strategy, then adding or removing a tag can change permissions. If the
   *             successful completion of this operation would result in you losing your permissions for
   *             this secret, then this operation is blocked and returns an <code>Access Denied</code>
   *             error.</p>
   *                </li>
   *             </ul>
   *          </important>
   *          <p>This parameter requires a JSON text string argument. For information on how to format a
   *       JSON parameter for the various command line tool environments, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#cli-using-param-json">Using JSON for
   *         Parameters</a> in the <i>AWS CLI User Guide</i>. For example:</p>
   *          <p>
   *             <code>[{"Key":"CostCenter","Value":"12345"},{"Key":"environment","Value":"production"}]</code>
   *          </p>
   *          <p>If your command-line tool or SDK requires quotation marks around the parameter, you should
   *       use single quotes to avoid confusion with the double quotes required in the JSON text. </p>
   *             <p>The following basic restrictions apply to tags:</p>
   *         <ul>
   *             <li>
   *                <p>Maximum number of tags per secret—50</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length—127 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length—255 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Do not use the <code>aws:</code> prefix in your tag names or values because it is
   *               reserved for AWS use. You can't edit or delete tag names or values with this
   *               prefix. Tags with this prefix do not count against your tags per secret limit.</p>
   *             </li>
   *             <li>
   *                <p>If your tagging schema will be used across multiple services and resources,
   *               remember that other services might have restrictions on allowed characters. Generally
   *               allowed characters are: letters, spaces, and numbers representable in UTF-8, plus the
   *               following special characters: + - = . _ : / @.</p>
   *             </li>
   *          </ul>
   */
  Tags?: Tag[];
}

export namespace CreateSecretRequest {
  export const filterSensitiveLog = (obj: CreateSecretRequest): any => ({
    ...obj,
    ...(obj.SecretBinary && { SecretBinary: SENSITIVE_STRING }),
    ...(obj.SecretString && { SecretString: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is CreateSecretRequest =>
    __isa(o, "CreateSecretRequest");
}

export interface CreateSecretResponse {
  __type?: "CreateSecretResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the secret that you just created.</p>
   *          <note>
   *             <p>Secrets Manager automatically adds several random characters to the name at the end of the ARN when
   *         you initially create a secret. This affects only the ARN and not the actual friendly name.
   *         This ensures that if you create a new secret with the same name as an old secret that you
   *         previously deleted, then users with access to the old secret <i>don't</i>
   *         automatically get access to the new secret because the ARNs are different.</p>
   *          </note>
   */
  ARN?: string;

  /**
   * <p>The friendly name of the secret that you just created.</p>
   */
  Name?: string;

  /**
   * <p>The unique identifier that's associated with the version of the secret you just
   *       created.</p>
   */
  VersionId?: string;
}

export namespace CreateSecretResponse {
  export const filterSensitiveLog = (obj: CreateSecretResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateSecretResponse =>
    __isa(o, "CreateSecretResponse");
}

/**
 * <p>Secrets Manager can't decrypt the protected secret text using the provided KMS key. </p>
 */
export interface DecryptionFailure extends __SmithyException, $MetadataBearer {
  name: "DecryptionFailure";
  $fault: "client";
  Message?: string;
}

export namespace DecryptionFailure {
  export const filterSensitiveLog = (obj: DecryptionFailure): any => ({
    ...obj
  });
  export const isa = (o: any): o is DecryptionFailure =>
    __isa(o, "DecryptionFailure");
}

export interface DeleteResourcePolicyRequest {
  __type?: "DeleteResourcePolicyRequest";
  /**
   * <p>Specifies the secret that you want to delete the attached resource-based policy for. You
   *       can specify either the Amazon Resource Name (ARN) or the friendly name of the secret.</p>
   *          <note>
   *             <p>If you specify an ARN, we generally recommend that you specify a complete ARN. You can
   *         specify a partial ARN too—for example, if you don’t include the final hyphen and six random
   *         characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN
   *         match can work as long as it uniquely matches only one secret. However, if your secret has a
   *         name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six
   *         characters to the ARN) and you try to use that as a partial ARN, then those characters cause
   *         Secrets Manager to assume that you’re specifying a complete ARN. This confusion can cause unexpected
   *         results. To avoid this situation, we recommend that you don’t create secret names that end
   *         with a hyphen followed by six characters.</p>
   *          </note>
   */
  SecretId: string | undefined;
}

export namespace DeleteResourcePolicyRequest {
  export const filterSensitiveLog = (
    obj: DeleteResourcePolicyRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteResourcePolicyRequest =>
    __isa(o, "DeleteResourcePolicyRequest");
}

export interface DeleteResourcePolicyResponse {
  __type?: "DeleteResourcePolicyResponse";
  /**
   * <p>The ARN of the secret that the resource-based policy was deleted for.</p>
   */
  ARN?: string;

  /**
   * <p>The friendly name of the secret that the resource-based policy was deleted for.</p>
   */
  Name?: string;
}

export namespace DeleteResourcePolicyResponse {
  export const filterSensitiveLog = (
    obj: DeleteResourcePolicyResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteResourcePolicyResponse =>
    __isa(o, "DeleteResourcePolicyResponse");
}

export interface DeleteSecretRequest {
  __type?: "DeleteSecretRequest";
  /**
   * <p>(Optional) Specifies that the secret is to be deleted without any recovery window. You
   *       can't use both this parameter and the <code>RecoveryWindowInDays</code> parameter in the same
   *       API call.</p>
   *          <p>An asynchronous background process performs the actual deletion, so there can be a short
   *       delay before the operation completes. If you write code to delete and then immediately
   *       recreate a secret with the same name, ensure that your code includes appropriate back off and
   *       retry logic.</p>
   *          <important>
   *             <p>Use this parameter with caution. This parameter causes the operation to skip the normal
   *         waiting period before the permanent deletion that AWS would normally impose with the
   *           <code>RecoveryWindowInDays</code> parameter. If you delete a secret with the
   *           <code>ForceDeleteWithouRecovery</code> parameter, then you have no opportunity to recover
   *         the secret. It is permanently lost.</p>
   *          </important>
   */
  ForceDeleteWithoutRecovery?: boolean;

  /**
   * <p>(Optional) Specifies the number of days that Secrets Manager waits before it can delete the secret.
   *       You can't use both this parameter and the <code>ForceDeleteWithoutRecovery</code> parameter in
   *       the same API call.</p>
   *          <p>This value can range from 7 to 30 days. The default value is 30.</p>
   */
  RecoveryWindowInDays?: number;

  /**
   * <p>Specifies the secret that you want to delete. You can specify either the Amazon Resource
   *       Name (ARN) or the friendly name of the secret.</p>
   *          <note>
   *             <p>If you specify an ARN, we generally recommend that you specify a complete ARN. You can
   *         specify a partial ARN too—for example, if you don’t include the final hyphen and six random
   *         characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN
   *         match can work as long as it uniquely matches only one secret. However, if your secret has a
   *         name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six
   *         characters to the ARN) and you try to use that as a partial ARN, then those characters cause
   *         Secrets Manager to assume that you’re specifying a complete ARN. This confusion can cause unexpected
   *         results. To avoid this situation, we recommend that you don’t create secret names that end
   *         with a hyphen followed by six characters.</p>
   *          </note>
   */
  SecretId: string | undefined;
}

export namespace DeleteSecretRequest {
  export const filterSensitiveLog = (obj: DeleteSecretRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSecretRequest =>
    __isa(o, "DeleteSecretRequest");
}

export interface DeleteSecretResponse {
  __type?: "DeleteSecretResponse";
  /**
   * <p>The ARN of the secret that is now scheduled for deletion.</p>
   */
  ARN?: string;

  /**
   * <p>The date and time after which this secret can be deleted by Secrets Manager and can no longer be
   *       restored. This value is the date and time of the delete request plus the number of days
   *       specified in <code>RecoveryWindowInDays</code>.</p>
   */
  DeletionDate?: Date;

  /**
   * <p>The friendly name of the secret that is now scheduled for deletion.</p>
   */
  Name?: string;
}

export namespace DeleteSecretResponse {
  export const filterSensitiveLog = (obj: DeleteSecretResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSecretResponse =>
    __isa(o, "DeleteSecretResponse");
}

export interface DescribeSecretRequest {
  __type?: "DescribeSecretRequest";
  /**
   * <p>The identifier of the secret whose details you want to retrieve. You can specify either
   *       the Amazon Resource Name (ARN) or the friendly name of the secret.</p>
   *          <note>
   *             <p>If you specify an ARN, we generally recommend that you specify a complete ARN. You can
   *         specify a partial ARN too—for example, if you don’t include the final hyphen and six random
   *         characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN
   *         match can work as long as it uniquely matches only one secret. However, if your secret has a
   *         name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six
   *         characters to the ARN) and you try to use that as a partial ARN, then those characters cause
   *         Secrets Manager to assume that you’re specifying a complete ARN. This confusion can cause unexpected
   *         results. To avoid this situation, we recommend that you don’t create secret names that end
   *         with a hyphen followed by six characters.</p>
   *          </note>
   */
  SecretId: string | undefined;
}

export namespace DescribeSecretRequest {
  export const filterSensitiveLog = (obj: DescribeSecretRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSecretRequest =>
    __isa(o, "DescribeSecretRequest");
}

export interface DescribeSecretResponse {
  __type?: "DescribeSecretResponse";
  /**
   * <p>The ARN of the secret.</p>
   */
  ARN?: string;

  /**
   * <p>This value exists if the secret is scheduled for deletion. Some time after the specified
   *       date and time, Secrets Manager deletes the secret and all of its versions.</p>
   *          <p>If a secret is scheduled for deletion, then its details, including the encrypted secret
   *       information, is not accessible. To cancel a scheduled deletion and restore access, use <a>RestoreSecret</a>.</p>
   */
  DeletedDate?: Date;

  /**
   * <p>The user-provided description of the secret.</p>
   */
  Description?: string;

  /**
   * <p>The ARN or alias of the AWS KMS customer master key (CMK) that's used to encrypt the
   *         <code>SecretString</code> or <code>SecretBinary</code> fields in each version of the secret.
   *       If you don't provide a key, then Secrets Manager defaults to encrypting the secret fields with the
   *       default AWS KMS CMK (the one named <code>awssecretsmanager</code>) for this account.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The last date that this secret was accessed. This value is truncated to midnight of the
   *       date and therefore shows only the date, not the time.</p>
   */
  LastAccessedDate?: Date;

  /**
   * <p>The last date and time that this secret was modified in any way.</p>
   */
  LastChangedDate?: Date;

  /**
   * <p>The most recent date and time that the Secrets Manager rotation process was successfully
   *       completed. This value is null if the secret has never rotated.</p>
   */
  LastRotatedDate?: Date;

  /**
   * <p>The user-provided friendly name of the secret.</p>
   */
  Name?: string;

  OwningService?: string;
  /**
   * <p>Specifies whether automatic rotation is enabled for this secret.</p>
   *          <p>To enable rotation, use <a>RotateSecret</a> with
   *         <code>AutomaticallyRotateAfterDays</code> set to a value greater than 0. To disable
   *       rotation, use <a>CancelRotateSecret</a>.</p>
   */
  RotationEnabled?: boolean;

  /**
   * <p>The ARN of a Lambda function that's invoked by Secrets Manager to rotate the
   *       secret either automatically per the schedule or manually by a call to
   *         <code>RotateSecret</code>.</p>
   */
  RotationLambdaARN?: string;

  /**
   * <p>A structure that contains the rotation configuration for this secret.</p>
   */
  RotationRules?: RotationRulesType;

  /**
   * <p>The list of user-defined tags that are associated with the secret. To add tags to a
   *       secret, use <a>TagResource</a>. To remove tags, use <a>UntagResource</a>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A list of all of the currently assigned <code>VersionStage</code> staging labels and the
   *         <code>VersionId</code> that each is attached to. Staging labels are used to keep track of
   *       the different versions during the rotation process.</p>
   *          <note>
   *             <p>A version that does not have any staging labels attached is considered deprecated and
   *         subject to deletion. Such versions are not included in this list.</p>
   *          </note>
   */
  VersionIdsToStages?: { [key: string]: string[] };
}

export namespace DescribeSecretResponse {
  export const filterSensitiveLog = (obj: DescribeSecretResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSecretResponse =>
    __isa(o, "DescribeSecretResponse");
}

/**
 * <p>Secrets Manager can't encrypt the protected secret text using the provided KMS key. Check that the
 *       customer master key (CMK) is available, enabled, and not in an invalid state. For more
 *       information, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a
 *         Customer Master Key</a>.</p>
 */
export interface EncryptionFailure extends __SmithyException, $MetadataBearer {
  name: "EncryptionFailure";
  $fault: "client";
  Message?: string;
}

export namespace EncryptionFailure {
  export const filterSensitiveLog = (obj: EncryptionFailure): any => ({
    ...obj
  });
  export const isa = (o: any): o is EncryptionFailure =>
    __isa(o, "EncryptionFailure");
}

export interface GetRandomPasswordRequest {
  __type?: "GetRandomPasswordRequest";
  /**
   * <p>A string that includes characters that should not be included in the generated password.
   *       The default is that all characters from the included sets can be used.</p>
   */
  ExcludeCharacters?: string;

  /**
   * <p>Specifies that the generated password should not include lowercase letters. The default if
   *       you do not include this switch parameter is that lowercase letters can be included.</p>
   */
  ExcludeLowercase?: boolean;

  /**
   * <p>Specifies that the generated password should not include digits. The default if you do not
   *       include this switch parameter is that digits can be included.</p>
   */
  ExcludeNumbers?: boolean;

  /**
   * <p>Specifies that the generated password should not include punctuation characters. The
   *       default if you do not include this switch parameter is that punctuation characters can be
   *       included.</p>
   *          <p>The following are the punctuation characters that <i>can</i> be included in
   *       the generated password if you don't explicitly exclude them with
   *         <code>ExcludeCharacters</code> or <code>ExcludePunctuation</code>:</p>
   *          <p>
   *             <code>! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | }
   *       ~</code>
   *          </p>
   */
  ExcludePunctuation?: boolean;

  /**
   * <p>Specifies that the generated password should not include uppercase letters. The default if
   *       you do not include this switch parameter is that uppercase letters can be included.</p>
   */
  ExcludeUppercase?: boolean;

  /**
   * <p>Specifies that the generated password can include the space character. The default if you
   *       do not include this switch parameter is that the space character is not included.</p>
   */
  IncludeSpace?: boolean;

  /**
   * <p>The desired length of the generated password. The default value if you do not include this
   *       parameter is 32 characters.</p>
   */
  PasswordLength?: number;

  /**
   * <p>A boolean value that specifies whether the generated password must include at least one of
   *       every allowed character type. The default value is <code>True</code> and the operation
   *       requires at least one of every character type.</p>
   */
  RequireEachIncludedType?: boolean;
}

export namespace GetRandomPasswordRequest {
  export const filterSensitiveLog = (obj: GetRandomPasswordRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRandomPasswordRequest =>
    __isa(o, "GetRandomPasswordRequest");
}

export interface GetRandomPasswordResponse {
  __type?: "GetRandomPasswordResponse";
  /**
   * <p>A string with the generated password.</p>
   */
  RandomPassword?: string;
}

export namespace GetRandomPasswordResponse {
  export const filterSensitiveLog = (obj: GetRandomPasswordResponse): any => ({
    ...obj,
    ...(obj.RandomPassword && { RandomPassword: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is GetRandomPasswordResponse =>
    __isa(o, "GetRandomPasswordResponse");
}

export interface GetResourcePolicyRequest {
  __type?: "GetResourcePolicyRequest";
  /**
   * <p>Specifies the secret that you want to retrieve the attached resource-based policy for. You
   *       can specify either the Amazon Resource Name (ARN) or the friendly name of the secret.</p>
   *          <note>
   *             <p>If you specify an ARN, we generally recommend that you specify a complete ARN. You can
   *         specify a partial ARN too—for example, if you don’t include the final hyphen and six random
   *         characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN
   *         match can work as long as it uniquely matches only one secret. However, if your secret has a
   *         name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six
   *         characters to the ARN) and you try to use that as a partial ARN, then those characters cause
   *         Secrets Manager to assume that you’re specifying a complete ARN. This confusion can cause unexpected
   *         results. To avoid this situation, we recommend that you don’t create secret names that end
   *         with a hyphen followed by six characters.</p>
   *          </note>
   */
  SecretId: string | undefined;
}

export namespace GetResourcePolicyRequest {
  export const filterSensitiveLog = (obj: GetResourcePolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetResourcePolicyRequest =>
    __isa(o, "GetResourcePolicyRequest");
}

export interface GetResourcePolicyResponse {
  __type?: "GetResourcePolicyResponse";
  /**
   * <p>The ARN of the secret that the resource-based policy was retrieved for.</p>
   */
  ARN?: string;

  /**
   * <p>The friendly name of the secret that the resource-based policy was retrieved for.</p>
   */
  Name?: string;

  /**
   * <p>A JSON-formatted string that describes the permissions that are associated with the
   *       attached secret. These permissions are combined with any permissions that are associated with
   *       the user or role that attempts to access this secret. The combined permissions specify who can
   *       access the secret and what actions they can perform. For more information, see <a href="http://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and Access Control for
   *         AWS Secrets Manager</a> in the <i>AWS Secrets Manager User Guide</i>.</p>
   */
  ResourcePolicy?: string;
}

export namespace GetResourcePolicyResponse {
  export const filterSensitiveLog = (obj: GetResourcePolicyResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetResourcePolicyResponse =>
    __isa(o, "GetResourcePolicyResponse");
}

export interface GetSecretValueRequest {
  __type?: "GetSecretValueRequest";
  /**
   * <p>Specifies the secret containing the version that you want to retrieve. You can specify
   *       either the Amazon Resource Name (ARN) or the friendly name of the secret.</p>
   *          <note>
   *             <p>If you specify an ARN, we generally recommend that you specify a complete ARN. You can
   *         specify a partial ARN too—for example, if you don’t include the final hyphen and six random
   *         characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN
   *         match can work as long as it uniquely matches only one secret. However, if your secret has a
   *         name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six
   *         characters to the ARN) and you try to use that as a partial ARN, then those characters cause
   *         Secrets Manager to assume that you’re specifying a complete ARN. This confusion can cause unexpected
   *         results. To avoid this situation, we recommend that you don’t create secret names that end
   *         with a hyphen followed by six characters.</p>
   *          </note>
   */
  SecretId: string | undefined;

  /**
   * <p>Specifies the unique identifier of the version of the secret that you want to retrieve. If
   *       you specify this parameter then don't specify <code>VersionStage</code>. If you
   *       don't specify either a <code>VersionStage</code> or <code>VersionId</code> then the
   *       default is to perform the operation on the version with the <code>VersionStage</code> value of
   *       <code>AWSCURRENT</code>.</p>
   *          <p>This value is typically a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID-type</a> value with
   *       32 hexadecimal digits.</p>
   */
  VersionId?: string;

  /**
   * <p>Specifies the secret version that you want to retrieve by the staging label attached to
   *       the version.</p>
   *          <p>Staging labels are used to keep track of different versions during the rotation process.
   *       If you use this parameter then don't specify <code>VersionId</code>. If you don't
   *       specify either a <code>VersionStage</code> or <code>VersionId</code>, then the default is to
   *       perform the operation on the version with the <code>VersionStage</code> value of
   *       <code>AWSCURRENT</code>.</p>
   */
  VersionStage?: string;
}

export namespace GetSecretValueRequest {
  export const filterSensitiveLog = (obj: GetSecretValueRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSecretValueRequest =>
    __isa(o, "GetSecretValueRequest");
}

export interface GetSecretValueResponse {
  __type?: "GetSecretValueResponse";
  /**
   * <p>The ARN of the secret.</p>
   */
  ARN?: string;

  /**
   * <p>The date and time that this version of the secret was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The friendly name of the secret.</p>
   */
  Name?: string;

  /**
   * <p>The decrypted part of the protected secret information that was originally provided as
   *       binary data in the form of a byte array. The response parameter represents the binary data as
   *       a <a href="https://tools.ietf.org/html/rfc4648#section-4">base64-encoded</a>
   *       string.</p>
   *          <p>This parameter is not used if the secret is created by the Secrets Manager console.</p>
   *          <p>If you store custom information in this field of the secret, then you must code your
   *       Lambda rotation function to parse and interpret whatever you store in the
   *         <code>SecretString</code> or <code>SecretBinary</code> fields.</p>
   */
  SecretBinary?: Uint8Array;

  /**
   * <p>The decrypted part of the protected secret information that was originally provided as a
   *       string.</p>
   *          <p>If you create this secret by using the Secrets Manager console then only the
   *         <code>SecretString</code> parameter contains data. Secrets Manager stores the information as a
   *       JSON structure of key/value pairs that the Lambda rotation function knows how to parse.</p>
   *          <p>If you store custom information in the secret by using the <a>CreateSecret</a>,
   *         <a>UpdateSecret</a>, or <a>PutSecretValue</a> API operations instead
   *       of the Secrets Manager console, or by using the <b>Other secret type</b> in
   *       the console, then you must code your Lambda rotation function to parse and interpret those
   *       values.</p>
   */
  SecretString?: string;

  /**
   * <p>The unique identifier of this version of the secret.</p>
   */
  VersionId?: string;

  /**
   * <p>A list of all of the staging labels currently attached to this version of the
   *       secret.</p>
   */
  VersionStages?: string[];
}

export namespace GetSecretValueResponse {
  export const filterSensitiveLog = (obj: GetSecretValueResponse): any => ({
    ...obj,
    ...(obj.SecretBinary && { SecretBinary: SENSITIVE_STRING }),
    ...(obj.SecretString && { SecretString: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is GetSecretValueResponse =>
    __isa(o, "GetSecretValueResponse");
}

/**
 * <p>An error occurred on the server side.</p>
 */
export interface InternalServiceError
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServiceError";
  $fault: "server";
  Message?: string;
}

export namespace InternalServiceError {
  export const filterSensitiveLog = (obj: InternalServiceError): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalServiceError =>
    __isa(o, "InternalServiceError");
}

/**
 * <p>You provided an invalid <code>NextToken</code> value.</p>
 */
export interface InvalidNextTokenException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidNextTokenException {
  export const filterSensitiveLog = (obj: InvalidNextTokenException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidNextTokenException =>
    __isa(o, "InvalidNextTokenException");
}

/**
 * <p>You provided an invalid value for a parameter.</p>
 */
export interface InvalidParameterException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidParameterException {
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidParameterException =>
    __isa(o, "InvalidParameterException");
}

/**
 * <p>You provided a parameter value that is not valid for the current state of the
 *       resource.</p>
 *          <p>Possible causes:</p>
 *          <ul>
 *             <li>
 *                <p>You tried to perform the operation on a secret that's currently marked deleted.</p>
 *             </li>
 *             <li>
 *                <p>You tried to enable rotation on a secret that doesn't already have a Lambda function
 *           ARN configured and you didn't include such an ARN as a parameter in this call. </p>
 *             </li>
 *          </ul>
 */
export interface InvalidRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidRequestException =>
    __isa(o, "InvalidRequestException");
}

/**
 * <p>The request failed because it would exceed one of the Secrets Manager internal limits.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj
  });
  export const isa = (o: any): o is LimitExceededException =>
    __isa(o, "LimitExceededException");
}

export interface ListSecretsRequest {
  __type?: "ListSecretsRequest";
  /**
   * <p>(Optional) Limits the number of results that you want to include in
   *     the response. If you don't include this parameter, it defaults to a value that's
   *     specific to the operation. If additional items exist beyond the maximum you specify, the
   *     <code>NextToken</code> response element is present and has a value (isn't null). Include
   *     that value as the <code>NextToken</code> request parameter in the next call to the operation to
   *     get the next part of the results. Note that Secrets Manager might return fewer results than the maximum
   *     even when there are more results available. You should check <code>NextToken</code> after every
   *     operation to ensure that you receive all of the results.</p>
   */
  MaxResults?: number;

  /**
   * <p>(Optional) Use this parameter in a request if you receive a
   *     <code>NextToken</code> response in a previous request that indicates that there's more
   *     output available. In a subsequent call, set it to the value of the previous call's
   *     <code>NextToken</code> response to indicate where the output should continue from.</p>
   */
  NextToken?: string;
}

export namespace ListSecretsRequest {
  export const filterSensitiveLog = (obj: ListSecretsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSecretsRequest =>
    __isa(o, "ListSecretsRequest");
}

export interface ListSecretsResponse {
  __type?: "ListSecretsResponse";
  /**
   * <p>If present in the response, this value indicates that
   *     there's more output available than what's included in the current response. This can
   *     occur even when the response includes no values at all, such as when you ask for a filtered view
   *     of a very long list. Use this value in the <code>NextToken</code> request parameter in a
   *     subsequent call to the operation to continue processing and get the next part of the output. You
   *     should repeat this until the <code>NextToken</code> response element comes back empty (as
   *     <code>null</code>).</p>
   */
  NextToken?: string;

  /**
   * <p>A list of the secrets in the account.</p>
   */
  SecretList?: SecretListEntry[];
}

export namespace ListSecretsResponse {
  export const filterSensitiveLog = (obj: ListSecretsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSecretsResponse =>
    __isa(o, "ListSecretsResponse");
}

export interface ListSecretVersionIdsRequest {
  __type?: "ListSecretVersionIdsRequest";
  /**
   * <p>(Optional) Specifies that you want the results to include versions that do not have any
   *       staging labels attached to them. Such versions are considered deprecated and are subject to
   *       deletion by Secrets Manager as needed.</p>
   */
  IncludeDeprecated?: boolean;

  /**
   * <p>(Optional) Limits the number of results that you want to include in
   *     the response. If you don't include this parameter, it defaults to a value that's
   *     specific to the operation. If additional items exist beyond the maximum you specify, the
   *     <code>NextToken</code> response element is present and has a value (isn't null). Include
   *     that value as the <code>NextToken</code> request parameter in the next call to the operation to
   *     get the next part of the results. Note that Secrets Manager might return fewer results than the maximum
   *     even when there are more results available. You should check <code>NextToken</code> after every
   *     operation to ensure that you receive all of the results.</p>
   */
  MaxResults?: number;

  /**
   * <p>(Optional) Use this parameter in a request if you receive a
   *     <code>NextToken</code> response in a previous request that indicates that there's more
   *     output available. In a subsequent call, set it to the value of the previous call's
   *     <code>NextToken</code> response to indicate where the output should continue from.</p>
   */
  NextToken?: string;

  /**
   * <p>The identifier for the secret containing the versions you want to list. You can specify
   *       either the Amazon Resource Name (ARN) or the friendly name of the secret.</p>
   *          <note>
   *             <p>If you specify an ARN, we generally recommend that you specify a complete ARN. You can
   *         specify a partial ARN too—for example, if you don’t include the final hyphen and six random
   *         characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN
   *         match can work as long as it uniquely matches only one secret. However, if your secret has a
   *         name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six
   *         characters to the ARN) and you try to use that as a partial ARN, then those characters cause
   *         Secrets Manager to assume that you’re specifying a complete ARN. This confusion can cause unexpected
   *         results. To avoid this situation, we recommend that you don’t create secret names that end
   *         with a hyphen followed by six characters.</p>
   *          </note>
   */
  SecretId: string | undefined;
}

export namespace ListSecretVersionIdsRequest {
  export const filterSensitiveLog = (
    obj: ListSecretVersionIdsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSecretVersionIdsRequest =>
    __isa(o, "ListSecretVersionIdsRequest");
}

export interface ListSecretVersionIdsResponse {
  __type?: "ListSecretVersionIdsResponse";
  /**
   * <p>The Amazon Resource Name (ARN) for the secret.</p>
   *          <note>
   *             <p>Secrets Manager automatically adds several random characters to the name at the end of the ARN when
   *         you initially create a secret. This affects only the ARN and not the actual friendly name.
   *         This ensures that if you create a new secret with the same name as an old secret that you
   *         previously deleted, then users with access to the old secret <i>don't</i>
   *         automatically get access to the new secret because the ARNs are different.</p>
   *          </note>
   */
  ARN?: string;

  /**
   * <p>The friendly name of the secret.</p>
   */
  Name?: string;

  /**
   * <p>If present in the response, this value indicates that
   *     there's more output available than what's included in the current response. This can
   *     occur even when the response includes no values at all, such as when you ask for a filtered view
   *     of a very long list. Use this value in the <code>NextToken</code> request parameter in a
   *     subsequent call to the operation to continue processing and get the next part of the output. You
   *     should repeat this until the <code>NextToken</code> response element comes back empty (as
   *     <code>null</code>).</p>
   */
  NextToken?: string;

  /**
   * <p>The list of the currently available versions of the specified secret.</p>
   */
  Versions?: SecretVersionsListEntry[];
}

export namespace ListSecretVersionIdsResponse {
  export const filterSensitiveLog = (
    obj: ListSecretVersionIdsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSecretVersionIdsResponse =>
    __isa(o, "ListSecretVersionIdsResponse");
}

/**
 * <p>The policy document that you provided isn't valid.</p>
 */
export interface MalformedPolicyDocumentException
  extends __SmithyException,
    $MetadataBearer {
  name: "MalformedPolicyDocumentException";
  $fault: "client";
  Message?: string;
}

export namespace MalformedPolicyDocumentException {
  export const filterSensitiveLog = (
    obj: MalformedPolicyDocumentException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MalformedPolicyDocumentException =>
    __isa(o, "MalformedPolicyDocumentException");
}

/**
 * <p>The request failed because you did not complete all the prerequisite steps.</p>
 */
export interface PreconditionNotMetException
  extends __SmithyException,
    $MetadataBearer {
  name: "PreconditionNotMetException";
  $fault: "client";
  Message?: string;
}

export namespace PreconditionNotMetException {
  export const filterSensitiveLog = (
    obj: PreconditionNotMetException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PreconditionNotMetException =>
    __isa(o, "PreconditionNotMetException");
}

export interface PutResourcePolicyRequest {
  __type?: "PutResourcePolicyRequest";
  /**
   * <p>A JSON-formatted string that's constructed according to the grammar and syntax for an
   *       AWS resource-based policy. The policy in the string identifies who can access or manage this
   *       secret and its versions. For information on how to format a JSON parameter for the various
   *       command line tool environments, see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#cli-using-param-json">Using
   *         JSON for Parameters</a> in the <i>AWS CLI User Guide</i>.</p>
   */
  ResourcePolicy: string | undefined;

  /**
   * <p>Specifies the secret that you want to attach the resource-based policy to. You can specify
   *       either the ARN or the friendly name of the secret.</p>
   *          <note>
   *             <p>If you specify an ARN, we generally recommend that you specify a complete ARN. You can
   *         specify a partial ARN too—for example, if you don’t include the final hyphen and six random
   *         characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN
   *         match can work as long as it uniquely matches only one secret. However, if your secret has a
   *         name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six
   *         characters to the ARN) and you try to use that as a partial ARN, then those characters cause
   *         Secrets Manager to assume that you’re specifying a complete ARN. This confusion can cause unexpected
   *         results. To avoid this situation, we recommend that you don’t create secret names that end
   *         with a hyphen followed by six characters.</p>
   *          </note>
   */
  SecretId: string | undefined;
}

export namespace PutResourcePolicyRequest {
  export const filterSensitiveLog = (obj: PutResourcePolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutResourcePolicyRequest =>
    __isa(o, "PutResourcePolicyRequest");
}

export interface PutResourcePolicyResponse {
  __type?: "PutResourcePolicyResponse";
  /**
   * <p>The ARN of the secret that the resource-based policy was retrieved for.</p>
   */
  ARN?: string;

  /**
   * <p>The friendly name of the secret that the resource-based policy was retrieved for.</p>
   */
  Name?: string;
}

export namespace PutResourcePolicyResponse {
  export const filterSensitiveLog = (obj: PutResourcePolicyResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutResourcePolicyResponse =>
    __isa(o, "PutResourcePolicyResponse");
}

export interface PutSecretValueRequest {
  __type?: "PutSecretValueRequest";
  /**
   * <p>(Optional) Specifies a unique identifier for the new version of the secret. </p>
   *          <note>
   *             <p>If you use the AWS CLI or one of the AWS SDK to call this operation, then you can
   *         leave this parameter empty. The CLI or SDK generates a random UUID for you and includes that
   *         in the request. If you don't use the SDK and instead generate a raw HTTP request to the
   *         Secrets Manager service endpoint, then you must generate a <code>ClientRequestToken</code> yourself
   *         for new versions and include that value in the request. </p>
   *          </note>
   *          <p>This value helps ensure idempotency. Secrets Manager uses this value to prevent the accidental
   *       creation of duplicate versions if there are failures and retries during the Lambda rotation
   *       function's processing. We recommend that you generate a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID-type</a> value to
   *       ensure uniqueness within the specified secret. </p>
   *          <ul>
   *             <li>
   *                <p>If the <code>ClientRequestToken</code> value isn't already associated with a version
   *           of the secret then a new version of the secret is created. </p>
   *             </li>
   *             <li>
   *                <p>If a version with this value already exists and that version's
   *             <code>SecretString</code> or <code>SecretBinary</code> values are the same as those in
   *           the request then the request is ignored (the operation is idempotent). </p>
   *             </li>
   *             <li>
   *                <p>If a version with this value already exists and that version's
   *             <code>SecretString</code> and <code>SecretBinary</code> values are different from those
   *           in the request then the request fails because you cannot modify an existing secret
   *           version. You can only create new versions to store new secret values.</p>
   *             </li>
   *          </ul>
   *          <p>This value becomes the <code>VersionId</code> of the new version.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>(Optional) Specifies binary data that you want to encrypt and store in the new version of
   *       the secret. To use this parameter in the command-line tools, we recommend that you store your
   *       binary data in a file and then use the appropriate technique for your tool to pass the
   *       contents of the file as a parameter. Either <code>SecretBinary</code> or
   *         <code>SecretString</code> must have a value, but not both. They cannot both be empty.</p>
   *
   *          <p>This parameter is not accessible if the secret using the Secrets Manager console.</p>
   *          <p></p>
   */
  SecretBinary?: Uint8Array;

  /**
   * <p>Specifies the secret to which you want to add a new version. You can specify either the
   *       Amazon Resource Name (ARN) or the friendly name of the secret. The secret must already
   *       exist.</p>
   *          <note>
   *             <p>If you specify an ARN, we generally recommend that you specify a complete ARN. You can
   *         specify a partial ARN too—for example, if you don’t include the final hyphen and six random
   *         characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN
   *         match can work as long as it uniquely matches only one secret. However, if your secret has a
   *         name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six
   *         characters to the ARN) and you try to use that as a partial ARN, then those characters cause
   *         Secrets Manager to assume that you’re specifying a complete ARN. This confusion can cause unexpected
   *         results. To avoid this situation, we recommend that you don’t create secret names that end
   *         with a hyphen followed by six characters.</p>
   *          </note>
   */
  SecretId: string | undefined;

  /**
   * <p>(Optional) Specifies text data that you want to encrypt and store in this new version of
   *       the secret. Either <code>SecretString</code> or <code>SecretBinary</code> must have a value,
   *       but not both. They cannot both be empty.</p>
   *
   *          <p>If you create this secret by using the Secrets Manager console then Secrets Manager puts the
   *       protected secret text in only the <code>SecretString</code> parameter. The Secrets Manager console
   *       stores the information as a JSON structure of key/value pairs that the default Lambda rotation
   *       function knows how to parse.</p>
   *          <p>For storing multiple values, we recommend that you use a JSON text string argument and
   *       specify key/value pairs. For information on how to format a JSON parameter for the various
   *       command line tool environments, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#cli-using-param-json">Using JSON for
   *         Parameters</a> in the <i>AWS CLI User Guide</i>.</p>
   *          <p> For example:</p>
   *          <p>
   *             <code>[{"username":"bob"},{"password":"abc123xyz456"}]</code>
   *          </p>
   *          <p>If your command-line tool or SDK requires quotation marks around the parameter, you should
   *       use single quotes to avoid confusion with the double quotes required in the JSON text.</p>
   */
  SecretString?: string;

  /**
   * <p>(Optional) Specifies a list of staging labels that are attached to this version of the
   *       secret. These staging labels are used to track the versions through the rotation process by
   *       the Lambda rotation function.</p>
   *          <p>A staging label must be unique to a single version of the secret. If you specify a staging
   *       label that's already associated with a different version of the same secret then that staging
   *       label is automatically removed from the other version and attached to this version.</p>
   *          <p>If you do not specify a value for <code>VersionStages</code> then Secrets Manager automatically
   *       moves the staging label <code>AWSCURRENT</code> to this new version.</p>
   */
  VersionStages?: string[];
}

export namespace PutSecretValueRequest {
  export const filterSensitiveLog = (obj: PutSecretValueRequest): any => ({
    ...obj,
    ...(obj.SecretBinary && { SecretBinary: SENSITIVE_STRING }),
    ...(obj.SecretString && { SecretString: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is PutSecretValueRequest =>
    __isa(o, "PutSecretValueRequest");
}

export interface PutSecretValueResponse {
  __type?: "PutSecretValueResponse";
  /**
   * <p>The Amazon Resource Name (ARN) for the secret for which you just created a version.</p>
   */
  ARN?: string;

  /**
   * <p>The friendly name of the secret for which you just created or updated a version.</p>
   */
  Name?: string;

  /**
   * <p>The unique identifier of the version of the secret you just created or updated.</p>
   */
  VersionId?: string;

  /**
   * <p>The list of staging labels that are currently attached to this version of the secret.
   *       Staging labels are used to track a version as it progresses through the secret rotation
   *       process.</p>
   */
  VersionStages?: string[];
}

export namespace PutSecretValueResponse {
  export const filterSensitiveLog = (obj: PutSecretValueResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutSecretValueResponse =>
    __isa(o, "PutSecretValueResponse");
}

/**
 * <p>A resource with the ID you requested already exists.</p>
 */
export interface ResourceExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceExistsException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceExistsException {
  export const filterSensitiveLog = (obj: ResourceExistsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceExistsException =>
    __isa(o, "ResourceExistsException");
}

/**
 * <p>We can't find the resource that you asked for.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceNotFoundException =>
    __isa(o, "ResourceNotFoundException");
}

export interface RestoreSecretRequest {
  __type?: "RestoreSecretRequest";
  /**
   * <p>Specifies the secret that you want to restore from a previously scheduled deletion. You
   *       can specify either the Amazon Resource Name (ARN) or the friendly name of the secret.</p>
   *          <note>
   *             <p>If you specify an ARN, we generally recommend that you specify a complete ARN. You can
   *         specify a partial ARN too—for example, if you don’t include the final hyphen and six random
   *         characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN
   *         match can work as long as it uniquely matches only one secret. However, if your secret has a
   *         name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six
   *         characters to the ARN) and you try to use that as a partial ARN, then those characters cause
   *         Secrets Manager to assume that you’re specifying a complete ARN. This confusion can cause unexpected
   *         results. To avoid this situation, we recommend that you don’t create secret names that end
   *         with a hyphen followed by six characters.</p>
   *          </note>
   */
  SecretId: string | undefined;
}

export namespace RestoreSecretRequest {
  export const filterSensitiveLog = (obj: RestoreSecretRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreSecretRequest =>
    __isa(o, "RestoreSecretRequest");
}

export interface RestoreSecretResponse {
  __type?: "RestoreSecretResponse";
  /**
   * <p>The ARN of the secret that was restored.</p>
   */
  ARN?: string;

  /**
   * <p>The friendly name of the secret that was restored.</p>
   */
  Name?: string;
}

export namespace RestoreSecretResponse {
  export const filterSensitiveLog = (obj: RestoreSecretResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreSecretResponse =>
    __isa(o, "RestoreSecretResponse");
}

export interface RotateSecretRequest {
  __type?: "RotateSecretRequest";
  /**
   * <p>(Optional) Specifies a unique identifier for the new version of the secret that helps
   *       ensure idempotency. </p>
   *          <p>If you use the AWS CLI or one of the AWS SDK to call this operation, then you can
   *       leave this parameter empty. The CLI or SDK generates a random UUID for you and includes that
   *       in the request for this parameter. If you don't use the SDK and instead generate a raw HTTP
   *       request to the Secrets Manager service endpoint, then you must generate a
   *         <code>ClientRequestToken</code> yourself for new versions and include that value in the
   *       request.</p>
   *          <p>You only need to specify your own value if you are implementing your own retry logic and
   *       want to ensure that a given secret is not created twice. We recommend that you generate a
   *         <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID-type</a>
   *       value to ensure uniqueness within the specified secret. </p>
   *          <p>Secrets Manager uses this value to prevent the accidental creation of duplicate versions if
   *       there are failures and retries during the function's processing. This value becomes the
   *         <code>VersionId</code> of the new version.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>(Optional) Specifies the ARN of the Lambda function that can rotate the secret.</p>
   */
  RotationLambdaARN?: string;

  /**
   * <p>A structure that defines the rotation configuration for this secret.</p>
   */
  RotationRules?: RotationRulesType;

  /**
   * <p>Specifies the secret that you want to rotate. You can specify either the Amazon Resource
   *       Name (ARN) or the friendly name of the secret.</p>
   *          <note>
   *             <p>If you specify an ARN, we generally recommend that you specify a complete ARN. You can
   *         specify a partial ARN too—for example, if you don’t include the final hyphen and six random
   *         characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN
   *         match can work as long as it uniquely matches only one secret. However, if your secret has a
   *         name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six
   *         characters to the ARN) and you try to use that as a partial ARN, then those characters cause
   *         Secrets Manager to assume that you’re specifying a complete ARN. This confusion can cause unexpected
   *         results. To avoid this situation, we recommend that you don’t create secret names that end
   *         with a hyphen followed by six characters.</p>
   *          </note>
   */
  SecretId: string | undefined;
}

export namespace RotateSecretRequest {
  export const filterSensitiveLog = (obj: RotateSecretRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is RotateSecretRequest =>
    __isa(o, "RotateSecretRequest");
}

export interface RotateSecretResponse {
  __type?: "RotateSecretResponse";
  /**
   * <p>The ARN of the secret.</p>
   */
  ARN?: string;

  /**
   * <p>The friendly name of the secret.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the new version of the secret created by the rotation started by this
   *       request.</p>
   */
  VersionId?: string;
}

export namespace RotateSecretResponse {
  export const filterSensitiveLog = (obj: RotateSecretResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is RotateSecretResponse =>
    __isa(o, "RotateSecretResponse");
}

/**
 * <p>A structure that defines the rotation configuration for the secret.</p>
 */
export interface RotationRulesType {
  __type?: "RotationRulesType";
  /**
   * <p>Specifies the number of days between automatic scheduled rotations of the secret.</p>
   *          <p>Secrets Manager schedules the next rotation when the previous
   *     one is complete. Secrets Manager schedules the date by adding the rotation interval (number of days) to the
   *     actual date of the last rotation. The service chooses the hour within that 24-hour date window
   *     randomly. The minute is also chosen somewhat randomly, but weighted towards the top of the hour
   *     and influenced by a variety of factors that help distribute load.</p>
   */
  AutomaticallyAfterDays?: number;
}

export namespace RotationRulesType {
  export const filterSensitiveLog = (obj: RotationRulesType): any => ({
    ...obj
  });
  export const isa = (o: any): o is RotationRulesType =>
    __isa(o, "RotationRulesType");
}

/**
 * <p>A structure that contains the details about a secret. It does not include the encrypted
 *         <code>SecretString</code> and <code>SecretBinary</code> values. To get those values, use the
 *         <a>GetSecretValue</a> operation.</p>
 */
export interface SecretListEntry {
  __type?: "SecretListEntry";
  /**
   * <p>The Amazon Resource Name (ARN) of the secret.</p>
   *          <p>For more information about ARNs in Secrets Manager, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-resources">Policy Resources</a> in the
   *     <i>AWS Secrets Manager User Guide</i>.</p>
   */
  ARN?: string;

  /**
   * <p>The date and time on which this secret was deleted. Not present on active secrets. The
   *       secret can be recovered until the number of days in the recovery window has passed, as
   *       specified in the <code>RecoveryWindowInDays</code> parameter of the <a>DeleteSecret</a> operation.</p>
   */
  DeletedDate?: Date;

  /**
   * <p>The user-provided description of the secret.</p>
   */
  Description?: string;

  /**
   * <p>The ARN or alias of the AWS KMS customer master key (CMK) that's used to encrypt the
   *         <code>SecretString</code> and <code>SecretBinary</code> fields in each version of the
   *       secret. If you don't provide a key, then Secrets Manager defaults to encrypting the secret fields with
   *       the default KMS CMK (the one named <code>awssecretsmanager</code>) for this account.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The last date that this secret was accessed. This value is truncated to midnight of the
   *       date and therefore shows only the date, not the time.</p>
   */
  LastAccessedDate?: Date;

  /**
   * <p>The last date and time that this secret was modified in any way.</p>
   */
  LastChangedDate?: Date;

  /**
   * <p>The last date and time that the rotation process for this secret was invoked.</p>
   */
  LastRotatedDate?: Date;

  /**
   * <p>The friendly name of the secret. You can use forward slashes in the name to represent a
   *       path hierarchy. For example, <code>/prod/databases/dbserver1</code> could represent the secret
   *       for a server named <code>dbserver1</code> in the folder <code>databases</code> in the folder
   *         <code>prod</code>. </p>
   */
  Name?: string;

  OwningService?: string;
  /**
   * <p>Indicated whether automatic, scheduled rotation is enabled for this secret.</p>
   */
  RotationEnabled?: boolean;

  /**
   * <p>The ARN of an AWS Lambda function that's invoked by Secrets Manager to rotate and expire the
   *       secret either automatically per the schedule or manually by a call to <a>RotateSecret</a>.</p>
   */
  RotationLambdaARN?: string;

  /**
   * <p>A structure that defines the rotation configuration for the secret.</p>
   */
  RotationRules?: RotationRulesType;

  /**
   * <p>A list of all of the currently assigned <code>SecretVersionStage</code> staging labels and
   *       the <code>SecretVersionId</code> that each is attached to. Staging labels are used to keep
   *       track of the different versions during the rotation process.</p>
   *          <note>
   *             <p>A version that does not have any <code>SecretVersionStage</code> is considered
   *         deprecated and subject to deletion. Such versions are not included in this list.</p>
   *          </note>
   */
  SecretVersionsToStages?: { [key: string]: string[] };

  /**
   * <p>The list of user-defined tags that are associated with the secret. To add tags to a
   *       secret, use <a>TagResource</a>. To remove tags, use <a>UntagResource</a>.</p>
   */
  Tags?: Tag[];
}

export namespace SecretListEntry {
  export const filterSensitiveLog = (obj: SecretListEntry): any => ({
    ...obj
  });
  export const isa = (o: any): o is SecretListEntry =>
    __isa(o, "SecretListEntry");
}

/**
 * <p>A structure that contains information about one version of a secret.</p>
 */
export interface SecretVersionsListEntry {
  __type?: "SecretVersionsListEntry";
  /**
   * <p>The date and time this version of the secret was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The date that this version of the secret was last accessed. Note that the resolution of
   *       this field is at the date level and does not include the time.</p>
   */
  LastAccessedDate?: Date;

  /**
   * <p>The unique version identifier of this version of the secret.</p>
   */
  VersionId?: string;

  /**
   * <p>An array of staging labels that are currently associated with this version of the
   *       secret.</p>
   */
  VersionStages?: string[];
}

export namespace SecretVersionsListEntry {
  export const filterSensitiveLog = (obj: SecretVersionsListEntry): any => ({
    ...obj
  });
  export const isa = (o: any): o is SecretVersionsListEntry =>
    __isa(o, "SecretVersionsListEntry");
}

/**
 * <p>A structure that contains information about a tag.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The key identifier, or name, of the tag.</p>
   */
  Key?: string;

  /**
   * <p>The string value that's associated with the key of the tag.</p>
   */
  Value?: string;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The identifier for the secret that you want to attach tags to. You can specify either the
   *       Amazon Resource Name (ARN) or the friendly name of the secret.</p>
   *          <note>
   *             <p>If you specify an ARN, we generally recommend that you specify a complete ARN. You can
   *         specify a partial ARN too—for example, if you don’t include the final hyphen and six random
   *         characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN
   *         match can work as long as it uniquely matches only one secret. However, if your secret has a
   *         name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six
   *         characters to the ARN) and you try to use that as a partial ARN, then those characters cause
   *         Secrets Manager to assume that you’re specifying a complete ARN. This confusion can cause unexpected
   *         results. To avoid this situation, we recommend that you don’t create secret names that end
   *         with a hyphen followed by six characters.</p>
   *          </note>
   */
  SecretId: string | undefined;

  /**
   * <p>The tags to attach to the secret. Each element in the list consists of a <code>Key</code>
   *       and a <code>Value</code>.</p>
   *          <p>This parameter to the API requires a JSON text string argument. For information on how to
   *       format a JSON parameter for the various command line tool environments, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#cli-using-param-json">Using JSON for Parameters</a> in the <i>AWS CLI User Guide</i>. For the
   *       AWS CLI, you can also use the syntax: <code>--Tags
   *         Key="Key1",Value="Value1",Key="Key2",Value="Value2"[,…]</code>
   *          </p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagResourceRequest =>
    __isa(o, "TagResourceRequest");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The identifier for the secret that you want to remove tags from. You can specify either
   *       the Amazon Resource Name (ARN) or the friendly name of the secret.</p>
   *          <note>
   *             <p>If you specify an ARN, we generally recommend that you specify a complete ARN. You can
   *         specify a partial ARN too—for example, if you don’t include the final hyphen and six random
   *         characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN
   *         match can work as long as it uniquely matches only one secret. However, if your secret has a
   *         name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six
   *         characters to the ARN) and you try to use that as a partial ARN, then those characters cause
   *         Secrets Manager to assume that you’re specifying a complete ARN. This confusion can cause unexpected
   *         results. To avoid this situation, we recommend that you don’t create secret names that end
   *         with a hyphen followed by six characters.</p>
   *          </note>
   */
  SecretId: string | undefined;

  /**
   * <p>A list of tag key names to remove from the secret. You don't specify the value. Both the
   *       key and its associated value are removed.</p>
   *          <p>This parameter to the API requires a JSON text string argument. For information on how to
   *       format a JSON parameter for the various command line tool environments, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#cli-using-param-json">Using JSON for Parameters</a> in the <i>AWS CLI User Guide</i>.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceRequest =>
    __isa(o, "UntagResourceRequest");
}

export interface UpdateSecretRequest {
  __type?: "UpdateSecretRequest";
  /**
   * <p>(Optional) If you want to add a new version to the secret, this parameter specifies a
   *       unique identifier for the new version that helps ensure idempotency. </p>
   *          <p>If you use the AWS CLI or one of the AWS SDK to call this operation, then you can
   *       leave this parameter empty. The CLI or SDK generates a random UUID for you and includes that
   *       in the request. If you don't use the SDK and instead generate a raw HTTP request to the Secrets Manager
   *       service endpoint, then you must generate a <code>ClientRequestToken</code> yourself for new
   *       versions and include that value in the request.</p>
   *          <p>You typically only need to interact with this value if you implement your own retry logic
   *       and want to ensure that a given secret is not created twice. We recommend that you generate a
   *         <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID-type</a>
   *       value to ensure uniqueness within the specified secret. </p>
   *          <p>Secrets Manager uses this value to prevent the accidental creation of duplicate versions if
   *       there are failures and retries during the Lambda rotation function's processing.</p>
   *          <ul>
   *             <li>
   *                <p>If the <code>ClientRequestToken</code> value isn't already associated with a version
   *           of the secret then a new version of the secret is created. </p>
   *             </li>
   *             <li>
   *                <p>If a version with this value already exists and that version's
   *             <code>SecretString</code> and <code>SecretBinary</code> values are the same as those in
   *           the request then the request is ignored (the operation is idempotent). </p>
   *             </li>
   *             <li>
   *                <p>If a version with this value already exists and that version's
   *             <code>SecretString</code> and <code>SecretBinary</code> values are different from the
   *           request then an error occurs because you cannot modify an existing secret value.</p>
   *             </li>
   *          </ul>
   *          <p>This value becomes the <code>VersionId</code> of the new version.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>(Optional) Specifies an updated user-provided description of the secret.</p>
   */
  Description?: string;

  /**
   * <p>(Optional) Specifies an updated ARN or alias of the AWS KMS customer master key (CMK) to be
   *       used to encrypt the protected text in new versions of this secret.</p>
   *          <important>
   *             <p>You can only use the account's default CMK to encrypt and decrypt if you call this
   *         operation using credentials from the same account that owns the secret. If the secret is in
   *         a different account, then you must create a custom CMK and provide the ARN of that CMK in
   *         this field. The user making the call must have permissions to both the secret and the CMK in
   *         their respective accounts.</p>
   *          </important>
   */
  KmsKeyId?: string;

  /**
   * <p>(Optional) Specifies updated binary data that you want to encrypt and store in the new
   *       version of the secret. To use this parameter in the command-line tools, we recommend that you
   *       store your binary data in a file and then use the appropriate technique for your tool to pass
   *       the contents of the file as a parameter. Either <code>SecretBinary</code> or
   *         <code>SecretString</code> must have a value, but not both. They cannot both be empty.</p>
   *          <p>This parameter is not accessible using the Secrets Manager console.</p>
   */
  SecretBinary?: Uint8Array;

  /**
   * <p>Specifies the secret that you want to modify or to which you want to add a new version.
   *       You can specify either the Amazon Resource Name (ARN) or the friendly name of the
   *       secret.</p>
   *          <note>
   *             <p>If you specify an ARN, we generally recommend that you specify a complete ARN. You can
   *         specify a partial ARN too—for example, if you don’t include the final hyphen and six random
   *         characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN
   *         match can work as long as it uniquely matches only one secret. However, if your secret has a
   *         name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six
   *         characters to the ARN) and you try to use that as a partial ARN, then those characters cause
   *         Secrets Manager to assume that you’re specifying a complete ARN. This confusion can cause unexpected
   *         results. To avoid this situation, we recommend that you don’t create secret names that end
   *         with a hyphen followed by six characters.</p>
   *          </note>
   */
  SecretId: string | undefined;

  /**
   * <p>(Optional) Specifies updated text data that you want to encrypt and store in this new
   *       version of the secret. Either <code>SecretBinary</code> or <code>SecretString</code> must have
   *       a value, but not both. They cannot both be empty.</p>
   *          <p>If you create this secret by using the Secrets Manager console then Secrets Manager puts the
   *       protected secret text in only the <code>SecretString</code> parameter. The Secrets Manager console
   *       stores the information as a JSON structure of key/value pairs that the default Lambda rotation
   *       function knows how to parse.</p>
   *          <p>For storing multiple values, we recommend that you use a JSON text string argument and
   *       specify key/value pairs. For information on how to format a JSON parameter for the various
   *       command line tool environments, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#cli-using-param-json">Using JSON for
   *         Parameters</a> in the <i>AWS CLI User Guide</i>. For example:</p>
   *          <p>
   *             <code>[{"username":"bob"},{"password":"abc123xyz456"}]</code>
   *          </p>
   *          <p>If your command-line tool or SDK requires quotation marks around the parameter, you should
   *       use single quotes to avoid confusion with the double quotes required in the JSON text. You can
   *       also 'escape' the double quote character in the embedded JSON text by prefacing each with a
   *       backslash. For example, the following string is surrounded by double-quotes. All of the
   *       embedded double quotes are escaped:</p>
   *          <p>
   *             <code>"[{\"username\":\"bob\"},{\"password\":\"abc123xyz456\"}]"</code>
   *          </p>
   */
  SecretString?: string;
}

export namespace UpdateSecretRequest {
  export const filterSensitiveLog = (obj: UpdateSecretRequest): any => ({
    ...obj,
    ...(obj.SecretBinary && { SecretBinary: SENSITIVE_STRING }),
    ...(obj.SecretString && { SecretString: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is UpdateSecretRequest =>
    __isa(o, "UpdateSecretRequest");
}

export interface UpdateSecretResponse {
  __type?: "UpdateSecretResponse";
  /**
   * <p>The ARN of the secret that was updated.</p>
   *          <note>
   *             <p>Secrets Manager automatically adds several random characters to the name at the end of the ARN when
   *         you initially create a secret. This affects only the ARN and not the actual friendly name.
   *         This ensures that if you create a new secret with the same name as an old secret that you
   *         previously deleted, then users with access to the old secret <i>don't</i>
   *         automatically get access to the new secret because the ARNs are different.</p>
   *          </note>
   */
  ARN?: string;

  /**
   * <p>The friendly name of the secret that was updated.</p>
   */
  Name?: string;

  /**
   * <p>If a new version of the secret was created by this operation, then <code>VersionId</code>
   *       contains the unique identifier of the new version.</p>
   */
  VersionId?: string;
}

export namespace UpdateSecretResponse {
  export const filterSensitiveLog = (obj: UpdateSecretResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateSecretResponse =>
    __isa(o, "UpdateSecretResponse");
}

export interface UpdateSecretVersionStageRequest {
  __type?: "UpdateSecretVersionStageRequest";
  /**
   * <p>(Optional) The secret version ID that you want to add the staging label to. If you want to
   *       remove a label from a version, then do not specify this parameter.</p>
   *          <p>If the staging label is already attached to a different version of the secret, then you
   *       must also specify the <code>RemoveFromVersionId</code> parameter. </p>
   */
  MoveToVersionId?: string;

  /**
   * <p>Specifies the secret version ID of the version that the staging label is to be removed
   *       from. If the staging label you are trying to attach to one version is already attached to a
   *       different version, then you must include this parameter and specify the version that the label
   *       is to be removed from. If the label is attached and you either do not specify this parameter,
   *       or the version ID does not match, then the operation fails.</p>
   */
  RemoveFromVersionId?: string;

  /**
   * <p>Specifies the secret with the version whose list of staging labels you want to modify. You
   *       can specify either the Amazon Resource Name (ARN) or the friendly name of the secret.</p>
   *          <note>
   *             <p>If you specify an ARN, we generally recommend that you specify a complete ARN. You can
   *         specify a partial ARN too—for example, if you don’t include the final hyphen and six random
   *         characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN
   *         match can work as long as it uniquely matches only one secret. However, if your secret has a
   *         name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six
   *         characters to the ARN) and you try to use that as a partial ARN, then those characters cause
   *         Secrets Manager to assume that you’re specifying a complete ARN. This confusion can cause unexpected
   *         results. To avoid this situation, we recommend that you don’t create secret names that end
   *         with a hyphen followed by six characters.</p>
   *          </note>
   */
  SecretId: string | undefined;

  /**
   * <p>The staging label to add to this version.</p>
   */
  VersionStage: string | undefined;
}

export namespace UpdateSecretVersionStageRequest {
  export const filterSensitiveLog = (
    obj: UpdateSecretVersionStageRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateSecretVersionStageRequest =>
    __isa(o, "UpdateSecretVersionStageRequest");
}

export interface UpdateSecretVersionStageResponse {
  __type?: "UpdateSecretVersionStageResponse";
  /**
   * <p>The ARN of the secret with the staging label that was modified.</p>
   */
  ARN?: string;

  /**
   * <p>The friendly name of the secret with the staging label that was modified.</p>
   */
  Name?: string;
}

export namespace UpdateSecretVersionStageResponse {
  export const filterSensitiveLog = (
    obj: UpdateSecretVersionStageResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateSecretVersionStageResponse =>
    __isa(o, "UpdateSecretVersionStageResponse");
}
