import {
  _RotationRulesType,
  _UnmarshalledRotationRulesType
} from "./_RotationRulesType";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>A structure that contains the details about a secret. It does not include the encrypted <code>SecretString</code> and <code>SecretBinary</code> values. To get those values, use the <a>GetSecretValue</a> operation.</p>
 */
export interface _SecretListEntry {
  /**
   * <p>The Amazon Resource Name (ARN) of the secret.</p> <p>For more information about ARNs in Secrets Manager, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-resources">Policy Resources</a> in the <i>AWS Secrets Manager User Guide</i>.</p>
   */
  ARN?: string;

  /**
   * <p>The friendly name of the secret. You can use forward slashes in the name to represent a path hierarchy. For example, <code>/prod/databases/dbserver1</code> could represent the secret for a server named <code>dbserver1</code> in the folder <code>databases</code> in the folder <code>prod</code>. </p>
   */
  Name?: string;

  /**
   * <p>The user-provided description of the secret.</p>
   */
  Description?: string;

  /**
   * <p>The ARN or alias of the AWS KMS customer master key (CMK) that's used to encrypt the <code>SecretString</code> and <code>SecretBinary</code> fields in each version of the secret. If you don't provide a key, then Secrets Manager defaults to encrypting the secret fields with the default KMS CMK (the one named <code>awssecretsmanager</code>) for this account.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Indicated whether automatic, scheduled rotation is enabled for this secret.</p>
   */
  RotationEnabled?: boolean;

  /**
   * <p>The ARN of an AWS Lambda function that's invoked by Secrets Manager to rotate and expire the secret either automatically per the schedule or manually by a call to <a>RotateSecret</a>.</p>
   */
  RotationLambdaARN?: string;

  /**
   * <p>A structure that defines the rotation configuration for the secret.</p>
   */
  RotationRules?: _RotationRulesType;

  /**
   * <p>The last date and time that the rotation process for this secret was invoked.</p>
   */
  LastRotatedDate?: Date | string | number;

  /**
   * <p>The last date and time that this secret was modified in any way.</p>
   */
  LastChangedDate?: Date | string | number;

  /**
   * <p>The last date that this secret was accessed. This value is truncated to midnight of the date and therefore shows only the date, not the time.</p>
   */
  LastAccessedDate?: Date | string | number;

  /**
   * <p>The date and time on which this secret was deleted. Not present on active secrets. The secret can be recovered until the number of days in the recovery window has passed, as specified in the <code>RecoveryWindowInDays</code> parameter of the <a>DeleteSecret</a> operation.</p>
   */
  DeletedDate?: Date | string | number;

  /**
   * <p>The list of user-defined tags that are associated with the secret. To add tags to a secret, use <a>TagResource</a>. To remove tags, use <a>UntagResource</a>.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>A list of all of the currently assigned <code>SecretVersionStage</code> staging labels and the <code>SecretVersionId</code> that each is attached to. Staging labels are used to keep track of the different versions during the rotation process.</p> <note> <p>A version that does not have any <code>SecretVersionStage</code> is considered deprecated and subject to deletion. Such versions are not included in this list.</p> </note>
   */
  SecretVersionsToStages?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;

  /**
   * _OwningServiceType shape
   */
  OwningService?: string;
}

export interface _UnmarshalledSecretListEntry extends _SecretListEntry {
  /**
   * <p>A structure that defines the rotation configuration for the secret.</p>
   */
  RotationRules?: _UnmarshalledRotationRulesType;

  /**
   * <p>The last date and time that the rotation process for this secret was invoked.</p>
   */
  LastRotatedDate?: Date;

  /**
   * <p>The last date and time that this secret was modified in any way.</p>
   */
  LastChangedDate?: Date;

  /**
   * <p>The last date that this secret was accessed. This value is truncated to midnight of the date and therefore shows only the date, not the time.</p>
   */
  LastAccessedDate?: Date;

  /**
   * <p>The date and time on which this secret was deleted. Not present on active secrets. The secret can be recovered until the number of days in the recovery window has passed, as specified in the <code>RecoveryWindowInDays</code> parameter of the <a>DeleteSecret</a> operation.</p>
   */
  DeletedDate?: Date;

  /**
   * <p>The list of user-defined tags that are associated with the secret. To add tags to a secret, use <a>TagResource</a>. To remove tags, use <a>UntagResource</a>.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * <p>A list of all of the currently assigned <code>SecretVersionStage</code> staging labels and the <code>SecretVersionId</code> that each is attached to. Staging labels are used to keep track of the different versions during the rotation process.</p> <note> <p>A version that does not have any <code>SecretVersionStage</code> is considered deprecated and subject to deletion. Such versions are not included in this list.</p> </note>
   */
  SecretVersionsToStages?: { [key: string]: Array<string> };
}
