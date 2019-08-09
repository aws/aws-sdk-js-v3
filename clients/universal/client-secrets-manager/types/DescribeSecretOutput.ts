import { _UnmarshalledRotationRulesType } from "./_RotationRulesType";
import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeSecretOutput shape
 */
export interface DescribeSecretOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the secret.</p>
   */
  ARN?: string;

  /**
   * <p>The user-provided friendly name of the secret.</p>
   */
  Name?: string;

  /**
   * <p>The user-provided description of the secret.</p>
   */
  Description?: string;

  /**
   * <p>The ARN or alias of the AWS KMS customer master key (CMK) that's used to encrypt the <code>SecretString</code> or <code>SecretBinary</code> fields in each version of the secret. If you don't provide a key, then Secrets Manager defaults to encrypting the secret fields with the default AWS KMS CMK (the one named <code>awssecretsmanager</code>) for this account.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Specifies whether automatic rotation is enabled for this secret.</p> <p>To enable rotation, use <a>RotateSecret</a> with <code>AutomaticallyRotateAfterDays</code> set to a value greater than 0. To disable rotation, use <a>CancelRotateSecret</a>.</p>
   */
  RotationEnabled?: boolean;

  /**
   * <p>The ARN of a Lambda function that's invoked by Secrets Manager to rotate the secret either automatically per the schedule or manually by a call to <code>RotateSecret</code>.</p>
   */
  RotationLambdaARN?: string;

  /**
   * <p>A structure that contains the rotation configuration for this secret.</p>
   */
  RotationRules?: _UnmarshalledRotationRulesType;

  /**
   * <p>The most recent date and time that the Secrets Manager rotation process was successfully completed. This value is null if the secret has never rotated.</p>
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
   * <p>This value exists if the secret is scheduled for deletion. Some time after the specified date and time, Secrets Manager deletes the secret and all of its versions.</p> <p>If a secret is scheduled for deletion, then its details, including the encrypted secret information, is not accessible. To cancel a scheduled deletion and restore access, use <a>RestoreSecret</a>.</p>
   */
  DeletedDate?: Date;

  /**
   * <p>The list of user-defined tags that are associated with the secret. To add tags to a secret, use <a>TagResource</a>. To remove tags, use <a>UntagResource</a>.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * <p>A list of all of the currently assigned <code>VersionStage</code> staging labels and the <code>VersionId</code> that each is attached to. Staging labels are used to keep track of the different versions during the rotation process.</p> <note> <p>A version that does not have any staging labels attached is considered deprecated and subject to deletion. Such versions are not included in this list.</p> </note>
   */
  VersionIdsToStages?: { [key: string]: Array<string> };

  /**
   * _OwningServiceType shape
   */
  OwningService?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
