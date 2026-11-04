// smithy-typescript generated code
import type { FilterNameStringType, SortByType, SortOrderType, StatusType } from "./enums";

/**
 * A custom type that specifies a `Region` and the `KmsKeyId` for a replica secret.
 *
 * @public
 */
export interface ReplicaRegionType {
  /**
   * A Region code. For a list of Region codes, see [Name and code of Regions](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints).
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The ARN, key ID, or alias of the KMS key to encrypt the secret. If you don't include this field, Secrets Manager uses `aws/secretsmanager`.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * The error Secrets Manager encountered while retrieving an individual secret as part of BatchGetSecretValue.
 *
 * @public
 */
export interface APIErrorType {
  /**
   * The ARN or name of the secret.
   *
   * @public
   */
  SecretId?: string | undefined;

  /**
   * The error Secrets Manager encountered while retrieving an individual secret as part of BatchGetSecretValue, for example `ResourceNotFoundException`,`InvalidParameterException`, `InvalidRequestException`, `DecryptionFailure`, or `AccessDeniedException`.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * A message describing the error.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Allows you to add filters when you use the search function in Secrets Manager. For more information, see [Find secrets in Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_search-secret.html).
 *
 * @public
 */
export interface Filter {
  /**
   * The following are keys you can use:
   *
   * - **description**: Prefix match, not case-sensitive.
   * - **name**: Prefix match, case-sensitive.
   * - **tag-key**: Prefix match, case-sensitive.
   * - **tag-value**: Prefix match, case-sensitive.
   * - **primary-region**: Prefix match, case-sensitive.
   * - **owning-service**: Prefix match, case-sensitive.
   * - **all**: Breaks the filter value string into words and then searches all attributes for matches. Not case-sensitive.
   *
   * @public
   */
  Key?: FilterNameStringType | undefined;

  /**
   * The keyword to filter for.
   *
   * You can prefix your search value with an exclamation mark (`!`) in order to perform negation filters.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetSecretValueRequest {
  /**
   * The ARN or names of the secrets to retrieve. You must include `Filters` or `SecretIdList`, but not both.
   *
   * @public
   */
  SecretIdList?: string[] | undefined;

  /**
   * The filters to choose which secrets to retrieve. You must include `Filters` or `SecretIdList`, but not both.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The number of results to include in the response.
   *
   * If there are more results available, in the response, Secrets Manager includes `NextToken`. To get the next results, call `BatchGetSecretValue` again with the value from `NextToken`. To use this parameter, you must also use the `Filters` parameter.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token that indicates where the output should continue from, if a previous call did not show all results. To get the next results, call `BatchGetSecretValue` again with this value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A structure that contains the secret value and other details for a secret.
 *
 * @public
 */
export interface SecretValueEntry {
  /**
   * The Amazon Resource Name (ARN) of the secret.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The friendly name of the secret.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The unique version identifier of this version of the secret.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * The decrypted secret value, if the secret value was originally provided as binary data in the form of a byte array. The parameter represents the binary data as a [base64-encoded](https://tools.ietf.org/html/rfc4648#section-4) string.
   *
   * @public
   */
  SecretBinary?: Uint8Array | undefined;

  /**
   * The decrypted secret value, if the secret value was originally provided as a string or through the Secrets Manager console.
   *
   * @public
   */
  SecretString?: string | undefined;

  /**
   * A list of all of the staging labels currently attached to this version of the secret.
   *
   * @public
   */
  VersionStages?: string[] | undefined;

  /**
   * The date the secret was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;
}

/**
 * @public
 */
export interface BatchGetSecretValueResponse {
  /**
   * A list of secret values.
   *
   * @public
   */
  SecretValues?: SecretValueEntry[] | undefined;

  /**
   * Secrets Manager includes this value if there's more output available than what is included in the current response. This can occur even when the response includes no values at all, such as when you ask for a filtered view of a long list. To get the next results, call `BatchGetSecretValue` again with this value.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of errors Secrets Manager encountered while attempting to retrieve individual secrets.
   *
   * @public
   */
  Errors?: APIErrorType[] | undefined;
}

/**
 * @public
 */
export interface CancelRotateSecretRequest {
  /**
   * The ARN or name of the secret.
   *
   * For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See [Finding a secret from a partial ARN](https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen).
   *
   * @public
   */
  SecretId: string | undefined;
}

/**
 * @public
 */
export interface CancelRotateSecretResponse {
  /**
   * The ARN of the secret.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The name of the secret.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The unique identifier of the version of the secret created during the rotation. This version might not be complete, and should be evaluated for possible deletion. We recommend that you remove the `VersionStage` value `AWSPENDING` from this version so that Secrets Manager can delete it. Failing to clean up a cancelled rotation can block you from starting future rotations.
   *
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * A structure that contains information about a tag.
 *
 * @public
 */
export interface Tag {
  /**
   * The key identifier, or name, of the tag.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The string value associated with the key of the tag.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreateSecretRequest {
  /**
   * The name of the new secret.
   *
   * The secret name can contain ASCII letters, numbers, and the following characters: /_+=.@-
   *
   * Do not end your secret name with a hyphen followed by six characters. If you do so, you risk confusion and unexpected results when searching for a secret by partial ARN. Secrets Manager automatically adds a hyphen and six random characters after the secret name at the end of the ARN.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * If you include `SecretString` or `SecretBinary`, then Secrets Manager creates an initial version for the secret, and this parameter specifies the unique identifier for the new version.
   *
   * > **Note:** If you use the Amazon Web Services CLI or one of the Amazon Web Services SDKs to call this operation, then you can leave this parameter empty. The CLI or SDK generates a random UUID for you and includes it as the value for this parameter in the request.
   *
   * If you generate a raw HTTP request to the Secrets Manager service endpoint, then you must generate a `ClientRequestToken` and include it in the request.
   *
   * This value helps ensure idempotency. Secrets Manager uses this value to prevent the accidental creation of duplicate versions if there are failures and retries during a rotation. We recommend that you generate a [UUID-type](https://wikipedia.org/wiki/Universally_unique_identifier) value to ensure uniqueness of your versions within the specified secret.
   *
   * - If the `ClientRequestToken` value isn't already associated with a version of the secret then a new version of the secret is created.
   * - If a version with this value already exists and the version `SecretString` and `SecretBinary` values are the same as those in the request, then the request is ignored.
   * - If a version with this value already exists and that version's `SecretString` and `SecretBinary` values are different from those in the request, then the request fails because you cannot modify an existing version. Instead, use PutSecretValue to create a new version.
   *
   * This value becomes the `VersionId` of the new version.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The description of the secret.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN, key ID, or alias of the KMS key that Secrets Manager uses to encrypt the secret value in the secret. An alias is always prefixed by `alias/`, for example `alias/aws/secretsmanager`. For more information, see [About aliases](https://docs.aws.amazon.com/kms/latest/developerguide/alias-about.html).
   *
   * To use a KMS key in a different account, use the key ARN or the alias ARN.
   *
   * If you don't specify this value, then Secrets Manager uses the key `aws/secretsmanager`. If that key doesn't yet exist, then Secrets Manager creates it for you automatically the first time it encrypts the secret value.
   *
   * If the secret is in a different Amazon Web Services account from the credentials calling the API, then you can't use `aws/secretsmanager` to encrypt the secret, and you must create and use a customer managed KMS key.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The binary data to encrypt and store in the new version of the secret. We recommend that you store your binary data in a file and then pass the contents of the file as a parameter.
   *
   * Either `SecretString` or `SecretBinary` must have a value, but not both.
   *
   * This parameter is not available in the Secrets Manager console.
   *
   * Sensitive: This field contains sensitive information, so the service does not include it in CloudTrail log entries. If you create your own log entries, you must also avoid logging the information in this field.
   *
   * @public
   */
  SecretBinary?: Uint8Array | undefined;

  /**
   * The text data to encrypt and store in this new version of the secret. We recommend you use a JSON structure of key/value pairs for your secret value.
   *
   * Either `SecretString` or `SecretBinary` must have a value, but not both.
   *
   * If you create a secret by using the Secrets Manager console then Secrets Manager puts the protected secret text in only the `SecretString` parameter. The Secrets Manager console stores the information as a JSON structure of key/value pairs that a Lambda rotation function can parse.
   *
   * Sensitive: This field contains sensitive information, so the service does not include it in CloudTrail log entries. If you create your own log entries, you must also avoid logging the information in this field.
   *
   * @public
   */
  SecretString?: string | undefined;

  /**
   * A list of tags to attach to the secret. Each tag is a key and value pair of strings in a JSON text string, for example:
   *
   * `[\{"Key":"CostCenter","Value":"12345"\},\{"Key":"environment","Value":"production"\}]`
   *
   * Secrets Manager tag key names are case sensitive. A tag with the key "ABC" is a different tag from one with key "abc".
   *
   * If you check tags in permissions policies as part of your security strategy, then adding or removing a tag can change permissions. If the completion of this operation would result in you losing your permissions for this secret, then Secrets Manager blocks the operation and returns an `Access Denied` error. For more information, see [Control access to secrets using tags](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html#tag-secrets-abac) and [Limit access to identities with tags that match secrets' tags](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html#auth-and-access_tags2).
   *
   * For information about how to format a JSON parameter for the various command line tool environments, see [Using JSON for Parameters](https://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#cli-using-param-json). If your command-line tool or SDK requires quotation marks around the parameter, you should use single quotes to avoid confusion with the double quotes required in the JSON text.
   *
   * For tag quotas and naming restrictions, see [Service quotas for Tagging](https://docs.aws.amazon.com/general/latest/gr/arg.html#taged-reference-quotas) in the *Amazon Web Services General Reference guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A list of Regions and KMS keys to replicate secrets.
   *
   * @public
   */
  AddReplicaRegions?: ReplicaRegionType[] | undefined;

  /**
   * Specifies whether to overwrite a secret with the same name in the destination Region. By default, secrets aren't overwritten.
   *
   * @public
   */
  ForceOverwriteReplicaSecret?: boolean | undefined;

  /**
   * The exact string that identifies the partner that holds the external secret. For more information, see [Using Secrets Manager managed external secrets](https://docs.aws.amazon.com/secretsmanager/latest/userguide/managed-external-secrets.html).
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * A replication object consisting of a `RegionReplicationStatus` object and includes a Region, KMSKeyId, status, and status message.
 *
 * @public
 */
export interface ReplicationStatusType {
  /**
   * The Region where replication occurs.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * Can be an `ARN`, `Key ID`, or `Alias`.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The status can be `InProgress`, `Failed`, or `InSync`.
   *
   * @public
   */
  Status?: StatusType | undefined;

  /**
   * Status message such as "*Secret with this name already exists in this region*".
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The date that the secret was last accessed in the Region. This field is omitted if the secret has never been retrieved in the Region.
   *
   * @public
   */
  LastAccessedDate?: Date | undefined;
}

/**
 * @public
 */
export interface CreateSecretResponse {
  /**
   * The ARN of the new secret. The ARN includes the name of the secret followed by six random characters. This ensures that if you create a new secret with the same name as a deleted secret, then users with access to the old secret don't get access to the new secret because the ARNs are different.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The name of the new secret.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The unique identifier associated with the version of the new secret.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * A list of the replicas of this secret and their status:
   *
   * - `Failed`, which indicates that the replica was not created.
   * - `InProgress`, which indicates that Secrets Manager is in the process of creating the replica.
   * - `InSync`, which indicates that the replica was created.
   *
   * @public
   */
  ReplicationStatus?: ReplicationStatusType[] | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * The ARN or name of the secret to delete the attached resource-based policy for.
   *
   * For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See [Finding a secret from a partial ARN](https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen).
   *
   * @public
   */
  SecretId: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {
  /**
   * The ARN of the secret that the resource-based policy was deleted for.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The name of the secret that the resource-based policy was deleted for.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSecretRequest {
  /**
   * The ARN or name of the secret to delete.
   *
   * For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See [Finding a secret from a partial ARN](https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen).
   *
   * @public
   */
  SecretId: string | undefined;

  /**
   * The number of days from 7 to 30 that Secrets Manager waits before permanently deleting the secret. You can't use both this parameter and `ForceDeleteWithoutRecovery` in the same call. If you don't use either, then by default Secrets Manager uses a 30 day recovery window.
   *
   * @public
   */
  RecoveryWindowInDays?: number | undefined;

  /**
   * Specifies whether to delete the secret without any recovery window. You can't use both this parameter and `RecoveryWindowInDays` in the same call. If you don't use either, then by default Secrets Manager uses a 30 day recovery window.
   *
   * Secrets Manager performs the actual deletion with an asynchronous background process, so there might be a short delay before the secret is permanently deleted. If you delete a secret and then immediately create a secret with the same name, use appropriate back off and retry logic.
   *
   * If you forcibly delete an already deleted or nonexistent secret, the operation does not return `ResourceNotFoundException`.
   *
   * > **Important:** Use this parameter with caution. This parameter causes the operation to skip the normal recovery window before the permanent deletion that Secrets Manager would normally impose with the `RecoveryWindowInDays` parameter. If you delete a secret with the `ForceDeleteWithoutRecovery` parameter, then you have no opportunity to recover the secret. You lose the secret permanently.
   *
   * @public
   */
  ForceDeleteWithoutRecovery?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteSecretResponse {
  /**
   * The ARN of the secret.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The name of the secret.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The date and time after which this secret Secrets Manager can permanently delete this secret, and it can no longer be restored. This value is the date and time of the delete request plus the number of days in `RecoveryWindowInDays`.
   *
   * @public
   */
  DeletionDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeSecretRequest {
  /**
   * The ARN or name of the secret.
   *
   * For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See [Finding a secret from a partial ARN](https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen).
   *
   * @public
   */
  SecretId: string | undefined;
}

/**
 * The metadata needed to successfully rotate a managed external secret. A list of key value pairs in JSON format specified by the partner. For more information, see [Managed external secret partners](https://docs.aws.amazon.com/secretsmanager/latest/userguide/mes-partners.html).
 *
 * @public
 */
export interface ExternalSecretRotationMetadataItem {
  /**
   * The key that identifies the item.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value of the specified item.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * A structure that defines the rotation configuration for the secret.
 *
 * @public
 */
export interface RotationRulesType {
  /**
   * The number of days between rotations of the secret. You can use this value to check that your secret meets your compliance guidelines for how often secrets must be rotated. If you use this field to set the rotation schedule, Secrets Manager calculates the next rotation date based on the previous rotation. Manually updating the secret value by calling `PutSecretValue` or `UpdateSecret` is considered a valid rotation.
   *
   * In `DescribeSecret` and `ListSecrets`, this value is calculated from the rotation schedule after every successful rotation. In `RotateSecret`, you can set the rotation schedule in `RotationRules` with `AutomaticallyAfterDays` or `ScheduleExpression`, but not both. To set a rotation schedule in hours, use `ScheduleExpression`.
   *
   * @public
   */
  AutomaticallyAfterDays?: number | undefined;

  /**
   * The length of the rotation window in hours, for example `3h` for a three hour window. Secrets Manager rotates your secret at any time during this window. The window must not extend into the next rotation window or the next UTC day. The window starts according to the `ScheduleExpression`. If you don't specify a `Duration`, for a `ScheduleExpression` in hours, the window automatically closes after one hour. For a `ScheduleExpression` in days, the window automatically closes at the end of the UTC day. For more information, including examples, see [Schedule expressions in Secrets Manager rotation](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_schedule.html) in the *Secrets Manager Users Guide*.
   *
   * @public
   */
  Duration?: string | undefined;

  /**
   * A `cron()` or `rate()` expression that defines the schedule for rotating your secret. Secrets Manager rotation schedules use UTC time zone. Secrets Manager rotates your secret any time during a rotation window.
   *
   * Secrets Manager `rate()` expressions represent the interval in hours or days that you want to rotate your secret, for example `rate(12 hours)` or `rate(10 days)`. You can rotate a secret as often as every four hours. If you use a `rate()` expression, the rotation window starts at midnight. For a rate in hours, the default rotation window closes after one hour. For a rate in days, the default rotation window closes at the end of the day. You can set the `Duration` to change the rotation window. The rotation window must not extend into the next UTC day or into the next rotation window.
   *
   * You can use a `cron()` expression to create a rotation schedule that is more detailed than a rotation interval. For more information, including examples, see [Schedule expressions in Secrets Manager rotation](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_schedule.html) in the *Secrets Manager Users Guide*. For a cron expression that represents a schedule in hours, the default rotation window closes after one hour. For a cron expression that represents a schedule in days, the default rotation window closes at the end of the day. You can set the `Duration` to change the rotation window. The rotation window must not extend into the next UTC day or into the next rotation window.
   *
   * @public
   */
  ScheduleExpression?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSecretResponse {
  /**
   * The ARN of the secret.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The name of the secret.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The exact string that identifies the partner that holds the external secret. For more information, see [Using Secrets Manager managed external secrets](https://docs.aws.amazon.com/secretsmanager/latest/userguide/managed-external-secrets.html).
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The description of the secret.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The key ID or alias ARN of the KMS key that Secrets Manager uses to encrypt the secret value. If the secret is encrypted with the Amazon Web Services managed key `aws/secretsmanager`, this field is omitted. Secrets created using the console use an KMS key ID.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Specifies whether automatic rotation is turned on for this secret. If the secret has never been configured for rotation, Secrets Manager returns null.
   *
   * To turn on rotation, use RotateSecret. To turn off rotation, use CancelRotateSecret.
   *
   * @public
   */
  RotationEnabled?: boolean | undefined;

  /**
   * The ARN of the Lambda function that Secrets Manager invokes to rotate the secret.
   *
   * @public
   */
  RotationLambdaARN?: string | undefined;

  /**
   * The rotation schedule and Lambda function for this secret. If the secret previously had rotation turned on, but it is now turned off, this field shows the previous rotation schedule and rotation function. If the secret never had rotation turned on, this field is omitted.
   *
   * @public
   */
  RotationRules?: RotationRulesType | undefined;

  /**
   * The metadata needed to successfully rotate a managed external secret. A list of key value pairs in JSON format specified by the partner. For more information about the required information, see [Managed external secrets partners](https://docs.aws.amazon.com/secretsmanager/latest/userguide/mes-partners.html).
   *
   * @public
   */
  ExternalSecretRotationMetadata?: ExternalSecretRotationMetadataItem[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role that allows Secrets Manager to rotate a secret held by a third-party partner. For more information, see [Security and permissions](https://docs.aws.amazon.com/secretsmanager/latest/userguide/mes-security.html).
   *
   * @public
   */
  ExternalSecretRotationRoleArn?: string | undefined;

  /**
   * The last date and time that Secrets Manager rotated the secret. If the secret isn't configured for rotation or rotation has been disabled, Secrets Manager returns null.
   *
   * @public
   */
  LastRotatedDate?: Date | undefined;

  /**
   * The last date and time that this secret was modified in any way.
   *
   * @public
   */
  LastChangedDate?: Date | undefined;

  /**
   * The date that the secret was last accessed in the Region. This field is omitted if the secret has never been retrieved in the Region.
   *
   * @public
   */
  LastAccessedDate?: Date | undefined;

  /**
   * The date the secret is scheduled for deletion. If it is not scheduled for deletion, this field is omitted. When you delete a secret, Secrets Manager requires a recovery window of at least 7 days before deleting the secret. Some time after the deleted date, Secrets Manager deletes the secret, including all of its versions.
   *
   * If a secret is scheduled for deletion, then its details, including the encrypted secret value, is not accessible. To cancel a scheduled deletion and restore access to the secret, use RestoreSecret.
   *
   * @public
   */
  DeletedDate?: Date | undefined;

  /**
   * The next rotation is scheduled to occur on or before this date. If the secret isn't configured for rotation or rotation has been disabled, Secrets Manager returns null. If rotation fails, Secrets Manager retries the entire rotation process multiple times. If rotation is unsuccessful, this date may be in the past.
   *
   * This date represents the latest date that rotation will occur, but it is not an approximate rotation date. In some cases, for example if you turn off automatic rotation and then turn it back on, the next rotation may occur much sooner than this date.
   *
   * @public
   */
  NextRotationDate?: Date | undefined;

  /**
   * The list of tags attached to the secret. To add tags to a secret, use TagResource. To remove tags, use UntagResource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A list of the versions of the secret that have staging labels attached. Versions that don't have staging labels are considered deprecated and Secrets Manager can delete them.
   *
   * Secrets Manager uses staging labels to indicate the status of a secret version during rotation. The three staging labels for rotation are:
   *
   * - `AWSCURRENT`, which indicates the current version of the secret.
   * - `AWSPENDING`, which indicates the version of the secret that contains new secret information that will become the next current version when rotation finishes.
   *
   *   During rotation, Secrets Manager creates an `AWSPENDING` version ID before creating the new secret version. To check if a secret version exists, call GetSecretValue.
   * - `AWSPREVIOUS`, which indicates the previous current version of the secret. You can use this as the *last known good* version.
   *
   * For more information about rotation and staging labels, see [How rotation works](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_how.html).
   *
   * @public
   */
  VersionIdsToStages?: Record<string, string[]> | undefined;

  /**
   * The ID of the service that created this secret. For more information, see [Secrets managed by other Amazon Web Services services](https://docs.aws.amazon.com/secretsmanager/latest/userguide/service-linked-secrets.html).
   *
   * @public
   */
  OwningService?: string | undefined;

  /**
   * The date the secret was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The Region the secret is in. If a secret is replicated to other Regions, the replicas are listed in `ReplicationStatus`.
   *
   * @public
   */
  PrimaryRegion?: string | undefined;

  /**
   * A list of the replicas of this secret and their status:
   *
   * - `Failed`, which indicates that the replica was not created.
   * - `InProgress`, which indicates that Secrets Manager is in the process of creating the replica.
   * - `InSync`, which indicates that the replica was created.
   *
   * @public
   */
  ReplicationStatus?: ReplicationStatusType[] | undefined;
}

/**
 * @public
 */
export interface GetRandomPasswordRequest {
  /**
   * The length of the password. If you don't include this parameter, the default length is 32 characters.
   *
   * @public
   */
  PasswordLength?: number | undefined;

  /**
   * A string of the characters that you don't want in the password.
   *
   * @public
   */
  ExcludeCharacters?: string | undefined;

  /**
   * Specifies whether to exclude numbers from the password. If you don't include this switch, the password can contain numbers.
   *
   * @public
   */
  ExcludeNumbers?: boolean | undefined;

  /**
   * Specifies whether to exclude the following punctuation characters from the password: ``! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` \{ | \} ~``. If you don't include this switch, the password can contain punctuation.
   *
   * @public
   */
  ExcludePunctuation?: boolean | undefined;

  /**
   * Specifies whether to exclude uppercase letters from the password. If you don't include this switch, the password can contain uppercase letters.
   *
   * @public
   */
  ExcludeUppercase?: boolean | undefined;

  /**
   * Specifies whether to exclude lowercase letters from the password. If you don't include this switch, the password can contain lowercase letters.
   *
   * @public
   */
  ExcludeLowercase?: boolean | undefined;

  /**
   * Specifies whether to include the space character. If you include this switch, the password can contain space characters.
   *
   * @public
   */
  IncludeSpace?: boolean | undefined;

  /**
   * Specifies whether to include at least one upper and lowercase letter, one number, and one punctuation. If you don't include this switch, the password contains at least one of every character type.
   *
   * @public
   */
  RequireEachIncludedType?: boolean | undefined;
}

/**
 * @public
 */
export interface GetRandomPasswordResponse {
  /**
   * A string with the password.
   *
   * @public
   */
  RandomPassword?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * The ARN or name of the secret to retrieve the attached resource-based policy for.
   *
   * For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See [Finding a secret from a partial ARN](https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen).
   *
   * @public
   */
  SecretId: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * The ARN of the secret that the resource-based policy was retrieved for.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The name of the secret that the resource-based policy was retrieved for.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A JSON-formatted string that contains the permissions policy attached to the secret. For more information about permissions policies, see [Authentication and access control for Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html).
   *
   * @public
   */
  ResourcePolicy?: string | undefined;
}

/**
 * @public
 */
export interface GetSecretValueRequest {
  /**
   * The ARN or name of the secret to retrieve. To retrieve a secret from another account, you must use an ARN.
   *
   * For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See [Finding a secret from a partial ARN](https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen).
   *
   * @public
   */
  SecretId: string | undefined;

  /**
   * The unique identifier of the version of the secret to retrieve. If you include both this parameter and `VersionStage`, the two parameters must refer to the same secret version. If you don't specify either a `VersionStage` or `VersionId`, then Secrets Manager returns the `AWSCURRENT` version.
   *
   * This value is typically a [UUID-type](https://wikipedia.org/wiki/Universally_unique_identifier) value with 32 hexadecimal digits.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * The staging label of the version of the secret to retrieve.
   *
   * Secrets Manager uses staging labels to keep track of different versions during the rotation process. If you include both this parameter and `VersionId`, the two parameters must refer to the same secret version. If you don't specify either a `VersionStage` or `VersionId`, Secrets Manager returns the `AWSCURRENT` version.
   *
   * @public
   */
  VersionStage?: string | undefined;
}

/**
 * @public
 */
export interface GetSecretValueResponse {
  /**
   * The ARN of the secret.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The friendly name of the secret.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The unique identifier of this version of the secret.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * The decrypted secret value, if the secret value was originally provided as binary data in the form of a byte array. When you retrieve a `SecretBinary` using the HTTP API, the Python SDK, or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not encoded.
   *
   * If the secret was created by using the Secrets Manager console, or if the secret value was originally provided as a string, then this field is omitted. The secret value appears in `SecretString` instead.
   *
   * Sensitive: This field contains sensitive information, so the service does not include it in CloudTrail log entries. If you create your own log entries, you must also avoid logging the information in this field.
   *
   * @public
   */
  SecretBinary?: Uint8Array | undefined;

  /**
   * The decrypted secret value, if the secret value was originally provided as a string or through the Secrets Manager console.
   *
   * If this secret was created by using the console, then Secrets Manager stores the information as a JSON structure of key/value pairs.
   *
   * Sensitive: This field contains sensitive information, so the service does not include it in CloudTrail log entries. If you create your own log entries, you must also avoid logging the information in this field.
   *
   * @public
   */
  SecretString?: string | undefined;

  /**
   * A list of all of the staging labels currently attached to this version of the secret.
   *
   * @public
   */
  VersionStages?: string[] | undefined;

  /**
   * The date and time that this version of the secret was created. If you don't specify which version in `VersionId` or `VersionStage`, then Secrets Manager uses the `AWSCURRENT` version.
   *
   * @public
   */
  CreatedDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListSecretsRequest {
  /**
   * Specifies whether to include secrets scheduled for deletion. By default, secrets scheduled for deletion aren't included.
   *
   * @public
   */
  IncludePlannedDeletion?: boolean | undefined;

  /**
   * The number of results to include in the response.
   *
   * If there are more results available, in the response, Secrets Manager includes `NextToken`. To get the next results, call `ListSecrets` again with the value from `NextToken`.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token that indicates where the output should continue from, if a previous call did not show all results. To get the next results, call `ListSecrets` again with this value.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The filters to apply to the list of secrets.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Secrets are listed by `CreatedDate`.
   *
   * @public
   */
  SortOrder?: SortOrderType | undefined;

  /**
   * If not specified, secrets are listed by `CreatedDate`.
   *
   * @public
   */
  SortBy?: SortByType | undefined;
}

/**
 * A structure that contains the details about a secret. It does not include the encrypted `SecretString` and `SecretBinary` values. To get those values, use [GetSecretValue](https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html) .
 *
 * @public
 */
export interface SecretListEntry {
  /**
   * The Amazon Resource Name (ARN) of the secret.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The friendly name of the secret.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The exact string that identifies the third-party partner that holds the external secret. For more information, see [Managed external secret partners](https://docs.aws.amazon.com/secretsmanager/latest/userguide/mes-partners.html).
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The user-provided description of the secret.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the KMS key that Secrets Manager uses to encrypt the secret value. If the secret is encrypted with the Amazon Web Services managed key `aws/secretsmanager`, this field is omitted.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Indicates whether automatic, scheduled rotation is enabled for this secret.
   *
   * @public
   */
  RotationEnabled?: boolean | undefined;

  /**
   * The ARN of an Amazon Web Services Lambda function invoked by Secrets Manager to rotate and expire the secret either automatically per the schedule or manually by a call to [`RotateSecret`](https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_RotateSecret.html).
   *
   * @public
   */
  RotationLambdaARN?: string | undefined;

  /**
   * A structure that defines the rotation configuration for the secret.
   *
   * @public
   */
  RotationRules?: RotationRulesType | undefined;

  /**
   * The metadata needed to successfully rotate a managed external secret. A list of key value pairs in JSON format specified by the partner. For more information about the required information, see [Managed external secrets partners](https://docs.aws.amazon.com/secretsmanager/latest/userguide/mes-partners.html).
   *
   * @public
   */
  ExternalSecretRotationMetadata?: ExternalSecretRotationMetadataItem[] | undefined;

  /**
   * The role that Secrets Manager assumes to call APIs required to perform the rotation. For more information about the required information, see [Managed external secrets partners](https://docs.aws.amazon.com/secretsmanager/latest/userguide/mes-partners.html).
   *
   * @public
   */
  ExternalSecretRotationRoleArn?: string | undefined;

  /**
   * The most recent date and time that the Secrets Manager rotation process was successfully completed. This value is null if the secret hasn't ever rotated.
   *
   * @public
   */
  LastRotatedDate?: Date | undefined;

  /**
   * The last date and time that this secret was modified in any way.
   *
   * @public
   */
  LastChangedDate?: Date | undefined;

  /**
   * The date that the secret was last accessed in the Region. This field is omitted if the secret has never been retrieved in the Region.
   *
   * @public
   */
  LastAccessedDate?: Date | undefined;

  /**
   * The date and time the deletion of the secret occurred. Not present on active secrets. The secret can be recovered until the number of days in the recovery window has passed, as specified in the `RecoveryWindowInDays` parameter of the [`DeleteSecret`](https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_DeleteSecret.html) operation.
   *
   * @public
   */
  DeletedDate?: Date | undefined;

  /**
   * The next rotation is scheduled to occur on or before this date. If the secret isn't configured for rotation or rotation has been disabled, Secrets Manager returns null.
   *
   * @public
   */
  NextRotationDate?: Date | undefined;

  /**
   * The list of user-defined tags associated with the secret. To add tags to a secret, use [`TagResource`](https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_TagResource.html). To remove tags, use [`UntagResource`](https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_UntagResource.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A list of all of the currently assigned `SecretVersionStage` staging labels and the `SecretVersionId` attached to each one. Staging labels are used to keep track of the different versions during the rotation process.
   *
   * > **Note:** A version that does not have any `SecretVersionStage` is considered deprecated and subject to deletion. Such versions are not included in this list.
   *
   * @public
   */
  SecretVersionsToStages?: Record<string, string[]> | undefined;

  /**
   * Returns the name of the service that created the secret.
   *
   * @public
   */
  OwningService?: string | undefined;

  /**
   * The date and time when a secret was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The Region where Secrets Manager originated the secret.
   *
   * @public
   */
  PrimaryRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListSecretsResponse {
  /**
   * A list of the secrets in the account.
   *
   * @public
   */
  SecretList?: SecretListEntry[] | undefined;

  /**
   * Secrets Manager includes this value if there's more output available than what is included in the current response. This can occur even when the response includes no values at all, such as when you ask for a filtered view of a long list. To get the next results, call `ListSecrets` again with this value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSecretVersionIdsRequest {
  /**
   * The ARN or name of the secret whose versions you want to list.
   *
   * For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See [Finding a secret from a partial ARN](https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen).
   *
   * @public
   */
  SecretId: string | undefined;

  /**
   * The number of results to include in the response.
   *
   * If there are more results available, in the response, Secrets Manager includes `NextToken`. To get the next results, call `ListSecretVersionIds` again with the value from `NextToken`.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token that indicates where the output should continue from, if a previous call did not show all results. To get the next results, call `ListSecretVersionIds` again with this value.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies whether to include versions of secrets that don't have any staging labels attached to them. Versions without staging labels are considered deprecated and are subject to deletion by Secrets Manager. By default, versions without staging labels aren't included.
   *
   * @public
   */
  IncludeDeprecated?: boolean | undefined;
}

/**
 * A structure that contains information about one version of a secret.
 *
 * @public
 */
export interface SecretVersionsListEntry {
  /**
   * The unique version identifier of this version of the secret.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * An array of staging labels that are currently associated with this version of the secret.
   *
   * @public
   */
  VersionStages?: string[] | undefined;

  /**
   * The date that this version of the secret was last accessed. Note that the resolution of this field is at the date level and does not include the time.
   *
   * @public
   */
  LastAccessedDate?: Date | undefined;

  /**
   * The date and time this version of the secret was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The KMS keys used to encrypt the secret version.
   *
   * @public
   */
  KmsKeyIds?: string[] | undefined;
}

/**
 * @public
 */
export interface ListSecretVersionIdsResponse {
  /**
   * A list of the versions of the secret.
   *
   * @public
   */
  Versions?: SecretVersionsListEntry[] | undefined;

  /**
   * Secrets Manager includes this value if there's more output available than what is included in the current response. This can occur even when the response includes no values at all, such as when you ask for a filtered view of a long list. To get the next results, call `ListSecretVersionIds` again with this value.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ARN of the secret.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The name of the secret.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * The ARN or name of the secret to attach the resource-based policy.
   *
   * For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See [Finding a secret from a partial ARN](https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen).
   *
   * @public
   */
  SecretId: string | undefined;

  /**
   * A JSON-formatted string for an Amazon Web Services resource-based policy. For example policies, see [Permissions policy examples](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html).
   *
   * @public
   */
  ResourcePolicy: string | undefined;

  /**
   * Specifies whether to block resource-based policies that allow broad access to the secret, for example those that use a wildcard for the principal. By default, public policies aren't blocked.
   *
   * > **Important:**
   * >
   * > Resource policy validation and the BlockPublicPolicy parameter help protect your resources by preventing public access from being granted through the resource policies that are directly attached to your secrets. In addition to using these features, carefully inspect the following policies to confirm that they do not grant public access:
   * >
   * > - Identity-based policies attached to associated Amazon Web Services principals (for example, IAM roles)
   * > - Resource-based policies attached to associated Amazon Web Services resources (for example, Key Management Service (KMS) keys)
   * >
   * > To review permissions to your secrets, see [Determine who has permissions to your secrets](https://docs.aws.amazon.com/secretsmanager/latest/userguide/determine-acccess_examine-iam-policies.html).
   *
   * @public
   */
  BlockPublicPolicy?: boolean | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * The ARN of the secret.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The name of the secret.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface PutSecretValueRequest {
  /**
   * The ARN or name of the secret to add a new version to.
   *
   * For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See [Finding a secret from a partial ARN](https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen).
   *
   * If the secret doesn't already exist, use `CreateSecret` instead.
   *
   * @public
   */
  SecretId: string | undefined;

  /**
   * A unique identifier for the new version of the secret.
   *
   * > **Note:** If you use the Amazon Web Services CLI or one of the Amazon Web Services SDKs to call this operation, then you can leave this parameter empty. The CLI or SDK generates a random UUID for you and includes it as the value for this parameter in the request.
   *
   * If you generate a raw HTTP request to the Secrets Manager service endpoint, then you must generate a `ClientRequestToken` and include it in the request.
   *
   * This value helps ensure idempotency. Secrets Manager uses this value to prevent the accidental creation of duplicate versions if there are failures and retries during a rotation. We recommend that you generate a [UUID-type](https://wikipedia.org/wiki/Universally_unique_identifier) value to ensure uniqueness of your versions within the specified secret.
   *
   * - If the `ClientRequestToken` value isn't already associated with a version of the secret then a new version of the secret is created.
   * - If a version with this value already exists and that version's `SecretString` or `SecretBinary` values are the same as those in the request then the request is ignored. The operation is idempotent.
   * - If a version with this value already exists and the version of the `SecretString` and `SecretBinary` values are different from those in the request, then the request fails because you can't modify a secret version. You can only create new versions to store new secret values.
   *
   * This value becomes the `VersionId` of the new version.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The binary data to encrypt and store in the new version of the secret. To use this parameter in the command-line tools, we recommend that you store your binary data in a file and then pass the contents of the file as a parameter.
   *
   * You must include `SecretBinary` or `SecretString`, but not both.
   *
   * You can't access this value from the Secrets Manager console.
   *
   * Sensitive: This field contains sensitive information, so the service does not include it in CloudTrail log entries. If you create your own log entries, you must also avoid logging the information in this field.
   *
   * @public
   */
  SecretBinary?: Uint8Array | undefined;

  /**
   * The text to encrypt and store in the new version of the secret.
   *
   * You must include `SecretBinary` or `SecretString`, but not both.
   *
   * We recommend you create the secret string as JSON key/value pairs, as shown in the example.
   *
   * Sensitive: This field contains sensitive information, so the service does not include it in CloudTrail log entries. If you create your own log entries, you must also avoid logging the information in this field.
   *
   * @public
   */
  SecretString?: string | undefined;

  /**
   * A list of staging labels to attach to this version of the secret. Secrets Manager uses staging labels to track versions of a secret through the rotation process.
   *
   * If you specify a staging label that's already associated with a different version of the same secret, then Secrets Manager removes the label from the other version and attaches it to this version. If you specify `AWSCURRENT`, and it is already attached to another version, then Secrets Manager also moves the staging label `AWSPREVIOUS` to the version that `AWSCURRENT` was removed from.
   *
   * If you don't include `VersionStages`, then Secrets Manager automatically moves the staging label `AWSCURRENT` to this version.
   *
   * @public
   */
  VersionStages?: string[] | undefined;

  /**
   * A unique identifier that indicates the source of the request. Required for secret rotations using an IAM assumed role or cross-account rotation, in which you rotate a secret in one account by using a Lambda rotation function in another account. In both cases, the rotation function assumes an IAM role to call Secrets Manager, and then Secrets Manager validates the identity using the token. For more information, see [How rotation works](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html) and [Rotation by Lambda functions](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_lambda).
   *
   * Sensitive: This field contains sensitive information, so the service does not include it in CloudTrail log entries. If you create your own log entries, you must also avoid logging the information in this field.
   *
   * @public
   */
  RotationToken?: string | undefined;
}

/**
 * @public
 */
export interface PutSecretValueResponse {
  /**
   * The ARN of the secret.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The name of the secret.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The unique identifier of the version of the secret.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * The list of staging labels that are currently attached to this version of the secret. Secrets Manager uses staging labels to track a version as it progresses through the secret rotation process.
   *
   * @public
   */
  VersionStages?: string[] | undefined;
}

/**
 * @public
 */
export interface RemoveRegionsFromReplicationRequest {
  /**
   * The ARN or name of the secret.
   *
   * @public
   */
  SecretId: string | undefined;

  /**
   * The Regions of the replicas to remove.
   *
   * @public
   */
  RemoveReplicaRegions: string[] | undefined;
}

/**
 * @public
 */
export interface RemoveRegionsFromReplicationResponse {
  /**
   * The ARN of the primary secret.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The status of replicas for this secret after you remove Regions.
   *
   * @public
   */
  ReplicationStatus?: ReplicationStatusType[] | undefined;
}

/**
 * @public
 */
export interface ReplicateSecretToRegionsRequest {
  /**
   * The ARN or name of the secret to replicate.
   *
   * @public
   */
  SecretId: string | undefined;

  /**
   * A list of Regions in which to replicate the secret.
   *
   * @public
   */
  AddReplicaRegions: ReplicaRegionType[] | undefined;

  /**
   * Specifies whether to overwrite a secret with the same name in the destination Region. By default, secrets aren't overwritten.
   *
   * @public
   */
  ForceOverwriteReplicaSecret?: boolean | undefined;
}

/**
 * @public
 */
export interface ReplicateSecretToRegionsResponse {
  /**
   * The ARN of the primary secret.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The status of replication.
   *
   * @public
   */
  ReplicationStatus?: ReplicationStatusType[] | undefined;
}

/**
 * @public
 */
export interface RestoreSecretRequest {
  /**
   * The ARN or name of the secret to restore.
   *
   * For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See [Finding a secret from a partial ARN](https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen).
   *
   * @public
   */
  SecretId: string | undefined;
}

/**
 * @public
 */
export interface RestoreSecretResponse {
  /**
   * The ARN of the secret that was restored.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The name of the secret that was restored.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface RotateSecretRequest {
  /**
   * The ARN or name of the secret to rotate.
   *
   * For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See [Finding a secret from a partial ARN](https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen).
   *
   * @public
   */
  SecretId: string | undefined;

  /**
   * A unique identifier for the new version of the secret. You only need to specify this value if you implement your own retry logic and you want to ensure that Secrets Manager doesn't attempt to create a secret version twice.
   *
   * > **Note:** If you use the Amazon Web Services CLI or one of the Amazon Web Services SDKs to call this operation, then you can leave this parameter empty. The CLI or SDK generates a random UUID for you and includes it as the value for this parameter in the request.
   *
   * If you generate a raw HTTP request to the Secrets Manager service endpoint, then you must generate a `ClientRequestToken` and include it in the request.
   *
   * This value helps ensure idempotency. Secrets Manager uses this value to prevent the accidental creation of duplicate versions if there are failures and retries during a rotation. We recommend that you generate a [UUID-type](https://wikipedia.org/wiki/Universally_unique_identifier) value to ensure uniqueness of your versions within the specified secret.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * For secrets that use a Lambda rotation function to rotate, the ARN of the Lambda rotation function.
   *
   * For secrets that use *managed rotation*, omit this field. For more information, see [Managed rotation](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_managed.html) in the *Secrets Manager User Guide*.
   *
   * @public
   */
  RotationLambdaARN?: string | undefined;

  /**
   * A structure that defines the rotation configuration for this secret.
   *
   * > **Important:**
   * >
   * > When changing an existing rotation schedule and setting `RotateImmediately` to `false`:
   * >
   * > - If using `AutomaticallyAfterDays` or a `ScheduleExpression` with `rate()`, the previously scheduled rotation might still occur.
   * > - To prevent unintended rotations, use a `ScheduleExpression` with `cron()` for granular control over rotation windows.
   *
   * @public
   */
  RotationRules?: RotationRulesType | undefined;

  /**
   * The metadata needed to successfully rotate a managed external secret. A list of key value pairs in JSON format specified by the partner. For more information about the required information, see [Using Secrets Manager managed external secrets](https://docs.aws.amazon.com/secretsmanager/latest/userguide/managed-external-secrets.html)
   *
   * @public
   */
  ExternalSecretRotationMetadata?: ExternalSecretRotationMetadataItem[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role that allows Secrets Manager to rotate a secret held by a third-party partner. For more information, see [Security and permissions](https://docs.aws.amazon.com/secretsmanager/latest/userguide/mes-security.html).
   *
   * @public
   */
  ExternalSecretRotationRoleArn?: string | undefined;

  /**
   * Specifies whether to rotate the secret immediately or wait until the next scheduled rotation window. The rotation schedule is defined in RotateSecretRequest$RotationRules.
   *
   * The default for `RotateImmediately` is `true`. If you don't specify this value, Secrets Manager rotates the secret immediately.
   *
   * If you set `RotateImmediately` to `false`, Secrets Manager tests the rotation configuration by running the [`testSecret` step](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_how.html) of the Lambda rotation function. This test creates an `AWSPENDING` version of the secret and then removes it.
   *
   * When changing an existing rotation schedule and setting `RotateImmediately` to `false`:
   *
   * - If using `AutomaticallyAfterDays` or a `ScheduleExpression` with `rate()`, the previously scheduled rotation might still occur.
   * - To prevent unintended rotations, use a `ScheduleExpression` with `cron()` for granular control over rotation windows.
   *
   * Rotation is an asynchronous process. For more information, see [How rotation works](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_how.html).
   *
   * @public
   */
  RotateImmediately?: boolean | undefined;
}

/**
 * @public
 */
export interface RotateSecretResponse {
  /**
   * The ARN of the secret.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The name of the secret.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of the new version of the secret.
   *
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * @public
 */
export interface StopReplicationToReplicaRequest {
  /**
   * The name of the secret or the replica ARN. The replica ARN is the same as the original primary secret ARN expect the Region is changed to the replica Region.
   *
   * @public
   */
  SecretId: string | undefined;
}

/**
 * @public
 */
export interface StopReplicationToReplicaResponse {
  /**
   * The ARN of the promoted secret. The ARN is the same as the original primary secret except the Region is changed.
   *
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The identifier for the secret to attach tags to. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret.
   *
   * For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See [Finding a secret from a partial ARN](https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen).
   *
   * @public
   */
  SecretId: string | undefined;

  /**
   * The tags to attach to the secret as a JSON text string argument. Each element in the list consists of a `Key` and a `Value`.
   *
   * For storing multiple values, we recommend that you use a JSON text string argument and specify key/value pairs. For more information, see [Specifying parameter values for the Amazon Web Services CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters.html) in the Amazon Web Services CLI User Guide.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN or name of the secret.
   *
   * For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See [Finding a secret from a partial ARN](https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen).
   *
   * @public
   */
  SecretId: string | undefined;

  /**
   * A list of tag key names to remove from the secret. You don't specify the value. Both the key and its associated value are removed.
   *
   * This parameter requires a JSON text string argument.
   *
   * For storing multiple values, we recommend that you use a JSON text string argument and specify key/value pairs. For more information, see [Specifying parameter values for the Amazon Web Services CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters.html) in the Amazon Web Services CLI User Guide.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateSecretRequest {
  /**
   * The ARN or name of the secret.
   *
   * For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See [Finding a secret from a partial ARN](https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen).
   *
   * @public
   */
  SecretId: string | undefined;

  /**
   * If you include `SecretString` or `SecretBinary`, then Secrets Manager creates a new version for the secret, and this parameter specifies the unique identifier for the new version.
   *
   * > **Note:** If you use the Amazon Web Services CLI or one of the Amazon Web Services SDKs to call this operation, then you can leave this parameter empty. The CLI or SDK generates a random UUID for you and includes it as the value for this parameter in the request.
   *
   * If you generate a raw HTTP request to the Secrets Manager service endpoint, then you must generate a `ClientRequestToken` and include it in the request.
   *
   * This value helps ensure idempotency. Secrets Manager uses this value to prevent the accidental creation of duplicate versions if there are failures and retries during a rotation. We recommend that you generate a [UUID-type](https://wikipedia.org/wiki/Universally_unique_identifier) value to ensure uniqueness of your versions within the specified secret.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The description of the secret.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN, key ID, or alias of the KMS key that Secrets Manager uses to encrypt new secret versions as well as any existing versions with the staging labels `AWSCURRENT`, `AWSPENDING`, or `AWSPREVIOUS`. If you don't have `kms:Encrypt` permission to the new key, Secrets Manager does not re-encrypt existing secret versions with the new key. For more information about versions and staging labels, see [Concepts: Version](https://docs.aws.amazon.com/secretsmanager/latest/userguide/getting-started.html#term_version).
   *
   * A key alias is always prefixed by `alias/`, for example `alias/aws/secretsmanager`. For more information, see [About aliases](https://docs.aws.amazon.com/kms/latest/developerguide/alias-about.html).
   *
   * If you set this to an empty string, Secrets Manager uses the Amazon Web Services managed key `aws/secretsmanager`. If this key doesn't already exist in your account, then Secrets Manager creates it for you automatically. All users and roles in the Amazon Web Services account automatically have access to use `aws/secretsmanager`. Creating `aws/secretsmanager` can result in a one-time significant delay in returning the result.
   *
   * > **Important:** You can only use the Amazon Web Services managed key `aws/secretsmanager` if you call this operation using credentials from the same Amazon Web Services account that owns the secret. If the secret is in a different account, then you must use a customer managed key and provide the ARN of that KMS key in this field. The user making the call must have permissions to both the secret and the KMS key in their respective accounts.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The binary data to encrypt and store in the new version of the secret. We recommend that you store your binary data in a file and then pass the contents of the file as a parameter.
   *
   * Either `SecretBinary` or `SecretString` must have a value, but not both.
   *
   * You can't access this parameter in the Secrets Manager console.
   *
   * Sensitive: This field contains sensitive information, so the service does not include it in CloudTrail log entries. If you create your own log entries, you must also avoid logging the information in this field.
   *
   * @public
   */
  SecretBinary?: Uint8Array | undefined;

  /**
   * The text data to encrypt and store in the new version of the secret. We recommend you use a JSON structure of key/value pairs for your secret value.
   *
   * Either `SecretBinary` or `SecretString` must have a value, but not both.
   *
   * Sensitive: This field contains sensitive information, so the service does not include it in CloudTrail log entries. If you create your own log entries, you must also avoid logging the information in this field.
   *
   * @public
   */
  SecretString?: string | undefined;

  /**
   * The exact string that identifies the third-party partner that holds the external secret. For more information, see [Managed external secret partners](https://docs.aws.amazon.com/secretsmanager/latest/userguide/mes-partners.html).
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSecretResponse {
  /**
   * The ARN of the secret that was updated.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The name of the secret that was updated.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * If Secrets Manager created a new version of the secret during this operation, then `VersionId` contains the unique identifier of the new version.
   *
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSecretVersionStageRequest {
  /**
   * The ARN or the name of the secret with the version and staging labelsto modify.
   *
   * For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See [Finding a secret from a partial ARN](https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen).
   *
   * @public
   */
  SecretId: string | undefined;

  /**
   * The staging label to add to this version.
   *
   * @public
   */
  VersionStage: string | undefined;

  /**
   * The ID of the version that the staging label is to be removed from. If the staging label you are trying to attach to one version is already attached to a different version, then you must include this parameter and specify the version that the label is to be removed from. If the label is attached and you either do not specify this parameter, or the version ID does not match, then the operation fails.
   *
   * @public
   */
  RemoveFromVersionId?: string | undefined;

  /**
   * The ID of the version to add the staging label to. To remove a label from a version, then do not specify this parameter.
   *
   * If the staging label is already attached to a different version of the secret, then you must also specify the `RemoveFromVersionId` parameter.
   *
   * @public
   */
  MoveToVersionId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSecretVersionStageResponse {
  /**
   * The ARN of the secret that was updated.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The name of the secret that was updated.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface ValidateResourcePolicyRequest {
  /**
   * The ARN or name of the secret with the resource-based policy you want to validate.
   *
   * @public
   */
  SecretId?: string | undefined;

  /**
   * A JSON-formatted string that contains an Amazon Web Services resource-based policy. The policy in the string identifies who can access or manage this secret and its versions. For example policies, see [Permissions policy examples](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html).
   *
   * @public
   */
  ResourcePolicy: string | undefined;
}

/**
 * Displays errors that occurred during validation of the resource policy.
 *
 * @public
 */
export interface ValidationErrorsEntry {
  /**
   * Checks the name of the policy.
   *
   * @public
   */
  CheckName?: string | undefined;

  /**
   * Displays error messages if validation encounters problems during validation of the resource policy.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface ValidateResourcePolicyResponse {
  /**
   * True if your policy passes validation, otherwise false.
   *
   * @public
   */
  PolicyValidationPassed?: boolean | undefined;

  /**
   * Validation errors if your policy didn't pass validation.
   *
   * @public
   */
  ValidationErrors?: ValidationErrorsEntry[] | undefined;
}
