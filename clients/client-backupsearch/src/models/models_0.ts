// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { BackupSearchServiceException as __BaseException } from "./BackupSearchServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * <p>This filters by recovery points within the CreatedAfter and CreatedBefore timestamps.</p>
 * @public
 */
export interface BackupCreationTimeFilter {
  /**
   * <p>This timestamp includes recovery points only created after the specified time.</p>
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * <p>This timestamp includes recovery points only created before the specified time.</p>
   * @public
   */
  CreatedBefore?: Date | undefined;
}

/**
 * <p>This exception occurs when a conflict with a previous successful operation is detected. This generally occurs when the previous operation did not have time to propagate to the host serving the current request.</p> <p>A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>Identifier of the resource affected.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>Type of the resource affected.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>An internal server error occurred. Retry your request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * <p>Retry the call after number of seconds.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
 */
export interface ListSearchJobBackupsInput {
  /**
   * <p>The unique string that specifies the search job.</p>
   * @public
   */
  SearchJobIdentifier: string | undefined;

  /**
   * <p>The next item following a partial list of returned backups included in a search job.</p> <p>For example, if a request is made to return <code>MaxResults</code> number of backups, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of resource list items to be returned.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceType = {
  EBS: "EBS",
  S3: "S3",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const SearchJobState = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;

/**
 * @public
 */
export type SearchJobState = (typeof SearchJobState)[keyof typeof SearchJobState];

/**
 * <p>This contains the information about recovery points returned in results of a search job.</p>
 * @public
 */
export interface SearchJobBackupsResult {
  /**
   * <p>This is the status of the search job backup result.</p>
   * @public
   */
  Status?: SearchJobState | undefined;

  /**
   * <p>This is the status message included with the results.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>This is the resource type of the search.</p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the backup resources.</p>
   * @public
   */
  BackupResourceArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the source resources.</p>
   * @public
   */
  SourceResourceArn?: string | undefined;

  /**
   * <p>This is the creation time of the backup index.</p>
   * @public
   */
  IndexCreationTime?: Date | undefined;

  /**
   * <p>This is the creation time of the backup (recovery point).</p>
   * @public
   */
  BackupCreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListSearchJobBackupsOutput {
  /**
   * <p>The recovery points returned the results of a search job</p>
   * @public
   */
  Results: SearchJobBackupsResult[] | undefined;

  /**
   * <p>The next item following a partial list of returned backups included in a search job.</p> <p>For example, if a request is made to return <code>MaxResults</code> number of backups, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The resource was not found for this request.</p> <p>Confirm the resource information, such as the ARN or type is correct and exists, then retry the request.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>Hypothetical identifier of the resource affected.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>Hypothetical type of the resource affected.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * <p>This is the code unique to the originating service.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>This is the code unique to the originating service with the quota.</p>
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * <p>Retry the call after number of seconds.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The input fails to satisfy the constraints specified by a service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * @public
 */
export interface ListSearchJobResultsInput {
  /**
   * <p>The unique string that specifies the search job.</p>
   * @public
   */
  SearchJobIdentifier: string | undefined;

  /**
   * <p>The next item following a partial list of returned search job results.</p> <p>For example, if a request is made to return <code>MaxResults</code> number of search job results, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of resource list items to be returned.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>These are the items returned in the results of a search of Amazon EBS backup metadata.</p>
 * @public
 */
export interface EBSResultItem {
  /**
   * <p>These are one or more items in the results that match values for the Amazon Resource Name (ARN) of recovery points returned in a search of Amazon EBS backup metadata.</p>
   * @public
   */
  BackupResourceArn?: string | undefined;

  /**
   * <p>These are one or more items in the results that match values for the Amazon Resource Name (ARN) of source resources returned in a search of Amazon EBS backup metadata.</p>
   * @public
   */
  SourceResourceArn?: string | undefined;

  /**
   * <p>The name of the backup vault.</p>
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * <p>These are one or more items in the results that match values for file systems returned in a search of Amazon EBS backup metadata.</p>
   * @public
   */
  FileSystemIdentifier?: string | undefined;

  /**
   * <p>These are one or more items in the results that match values for file paths returned in a search of Amazon EBS backup metadata.</p>
   * @public
   */
  FilePath?: string | undefined;

  /**
   * <p>These are one or more items in the results that match values for file sizes returned in a search of Amazon EBS backup metadata.</p>
   * @public
   */
  FileSize?: number | undefined;

  /**
   * <p>These are one or more items in the results that match values for creation times returned in a search of Amazon EBS backup metadata.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>These are one or more items in the results that match values for Last Modified Time returned in a search of Amazon EBS backup metadata.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * <p>These are the items returned in the results of a search of Amazon S3 backup metadata.</p>
 * @public
 */
export interface S3ResultItem {
  /**
   * <p>These are items in the returned results that match recovery point Amazon Resource Names (ARN) input during a search of Amazon S3 backup metadata.</p>
   * @public
   */
  BackupResourceArn?: string | undefined;

  /**
   * <p>These are items in the returned results that match source Amazon Resource Names (ARN) input during a search of Amazon S3 backup metadata.</p>
   * @public
   */
  SourceResourceArn?: string | undefined;

  /**
   * <p>The name of the backup vault.</p>
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * <p>This is one or more items returned in the results of a search of Amazon S3 backup metadata that match the values input for object key.</p>
   * @public
   */
  ObjectKey?: string | undefined;

  /**
   * <p>These are items in the returned results that match values for object size(s) input during a search of Amazon S3 backup metadata.</p>
   * @public
   */
  ObjectSize?: number | undefined;

  /**
   * <p>These are one or more items in the returned results that match values for item creation time input during a search of Amazon S3 backup metadata.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>These are one or more items in the returned results that match values for ETags input during a search of Amazon S3 backup metadata.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>These are one or more items in the returned results that match values for version IDs input during a search of Amazon S3 backup metadata.</p>
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * <p>This is an object representing the item returned in the results of a search for a specific resource type.</p>
 * @public
 */
export type ResultItem = ResultItem.EBSResultItemMember | ResultItem.S3ResultItemMember | ResultItem.$UnknownMember;

/**
 * @public
 */
export namespace ResultItem {
  /**
   * <p>These are items returned in the search results of an Amazon S3 search.</p>
   * @public
   */
  export interface S3ResultItemMember {
    S3ResultItem: S3ResultItem;
    EBSResultItem?: never;
    $unknown?: never;
  }

  /**
   * <p>These are items returned in the search results of an Amazon EBS search.</p>
   * @public
   */
  export interface EBSResultItemMember {
    S3ResultItem?: never;
    EBSResultItem: EBSResultItem;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    S3ResultItem?: never;
    EBSResultItem?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    S3ResultItem: (value: S3ResultItem) => T;
    EBSResultItem: (value: EBSResultItem) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListSearchJobResultsOutput {
  /**
   * <p>The results consist of either EBSResultItem or S3ResultItem.</p>
   * @public
   */
  Results: ResultItem[] | undefined;

  /**
   * <p>The next item following a partial list of search job results.</p> <p>For example, if a request is made to return <code>MaxResults</code> number of backups, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the resource.&gt;</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>List of tags returned by the operation.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>This contains information results retrieved from a search job that may not have completed.</p>
 * @public
 */
export interface CurrentSearchProgress {
  /**
   * <p>This number is the sum of all backups that have been scanned so far during a search job.</p>
   * @public
   */
  RecoveryPointsScannedCount?: number | undefined;

  /**
   * <p>This number is the sum of all items that have been scanned so far during a search job.</p>
   * @public
   */
  ItemsScannedCount?: number | undefined;

  /**
   * <p>This number is the sum of all items that match the item filters in a search job in progress.</p>
   * @public
   */
  ItemsMatchedCount?: number | undefined;
}

/**
 * @public
 */
export interface GetSearchJobInput {
  /**
   * <p>Required unique string that specifies the search job.</p>
   * @public
   */
  SearchJobIdentifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TimeConditionOperator = {
  EQUALS_TO: "EQUALS_TO",
  GREATER_THAN_EQUAL_TO: "GREATER_THAN_EQUAL_TO",
  LESS_THAN_EQUAL_TO: "LESS_THAN_EQUAL_TO",
  NOT_EQUALS_TO: "NOT_EQUALS_TO",
} as const;

/**
 * @public
 */
export type TimeConditionOperator = (typeof TimeConditionOperator)[keyof typeof TimeConditionOperator];

/**
 * <p>A time condition denotes a creation time, last modification time, or other time.</p>
 * @public
 */
export interface TimeCondition {
  /**
   * <p>This is the timestamp value of the time condition.</p>
   * @public
   */
  Value: Date | undefined;

  /**
   * <p>A string that defines what values will be returned.</p> <p>If this is included, avoid combinations of operators that will return all possible values. For example, including both <code>EQUALS_TO</code> and <code>NOT_EQUALS_TO</code> with a value of <code>4</code> will return all values.</p>
   * @public
   */
  Operator?: TimeConditionOperator | undefined;
}

/**
 * @public
 * @enum
 */
export const StringConditionOperator = {
  BEGINS_WITH: "BEGINS_WITH",
  CONTAINS: "CONTAINS",
  DOES_NOT_BEGIN_WITH: "DOES_NOT_BEGIN_WITH",
  DOES_NOT_CONTAIN: "DOES_NOT_CONTAIN",
  DOES_NOT_END_WITH: "DOES_NOT_END_WITH",
  ENDS_WITH: "ENDS_WITH",
  EQUALS_TO: "EQUALS_TO",
  NOT_EQUALS_TO: "NOT_EQUALS_TO",
} as const;

/**
 * @public
 */
export type StringConditionOperator = (typeof StringConditionOperator)[keyof typeof StringConditionOperator];

/**
 * <p>This contains the value of the string and can contain one or more operators.</p>
 * @public
 */
export interface StringCondition {
  /**
   * <p>The value of the string.</p>
   * @public
   */
  Value: string | undefined;

  /**
   * <p>A string that defines what values will be returned.</p> <p>If this is included, avoid combinations of operators that will return all possible values. For example, including both <code>EQUALS_TO</code> and <code>NOT_EQUALS_TO</code> with a value of <code>4</code> will return all values.</p>
   * @public
   */
  Operator?: StringConditionOperator | undefined;
}

/**
 * @public
 * @enum
 */
export const LongConditionOperator = {
  EQUALS_TO: "EQUALS_TO",
  GREATER_THAN_EQUAL_TO: "GREATER_THAN_EQUAL_TO",
  LESS_THAN_EQUAL_TO: "LESS_THAN_EQUAL_TO",
  NOT_EQUALS_TO: "NOT_EQUALS_TO",
} as const;

/**
 * @public
 */
export type LongConditionOperator = (typeof LongConditionOperator)[keyof typeof LongConditionOperator];

/**
 * <p>The long condition contains a <code>Value</code> and can optionally contain an <code>Operator</code>.</p>
 * @public
 */
export interface LongCondition {
  /**
   * <p>The value of an item included in one of the search item filters.</p>
   * @public
   */
  Value: number | undefined;

  /**
   * <p>A string that defines what values will be returned.</p> <p>If this is included, avoid combinations of operators that will return all possible values. For example, including both <code>EQUALS_TO</code> and <code>NOT_EQUALS_TO</code> with a value of <code>4</code> will return all values.</p>
   * @public
   */
  Operator?: LongConditionOperator | undefined;
}

/**
 * <p>This contains arrays of objects, which may include CreationTimes time condition objects, FilePaths string objects, LastModificationTimes time condition objects, </p>
 * @public
 */
export interface EBSItemFilter {
  /**
   * <p>You can include 1 to 10 values.</p> <p>If one file path is included, the results will return only items that match the file path.</p> <p>If more than one file path is included, the results will return all items that match any of the file paths.</p>
   * @public
   */
  FilePaths?: StringCondition[] | undefined;

  /**
   * <p>You can include 1 to 10 values.</p> <p>If one is included, the results will return only items that match.</p> <p>If more than one is included, the results will return all items that match any of the included values.</p>
   * @public
   */
  Sizes?: LongCondition[] | undefined;

  /**
   * <p>You can include 1 to 10 values.</p> <p>If one is included, the results will return only items that match.</p> <p>If more than one is included, the results will return all items that match any of the included values.</p>
   * @public
   */
  CreationTimes?: TimeCondition[] | undefined;

  /**
   * <p>You can include 1 to 10 values.</p> <p>If one is included, the results will return only items that match.</p> <p>If more than one is included, the results will return all items that match any of the included values.</p>
   * @public
   */
  LastModificationTimes?: TimeCondition[] | undefined;
}

/**
 * <p>This contains arrays of objects, which may include ObjectKeys, Sizes, CreationTimes, VersionIds, and/or Etags.</p>
 * @public
 */
export interface S3ItemFilter {
  /**
   * <p>You can include 1 to 10 values.</p> <p>If one value is included, the results will return only items that match the value.</p> <p>If more than one value is included, the results will return all items that match any of the values.</p>
   * @public
   */
  ObjectKeys?: StringCondition[] | undefined;

  /**
   * <p>You can include 1 to 10 values.</p> <p>If one value is included, the results will return only items that match the value.</p> <p>If more than one value is included, the results will return all items that match any of the values.</p>
   * @public
   */
  Sizes?: LongCondition[] | undefined;

  /**
   * <p>You can include 1 to 10 values.</p> <p>If one value is included, the results will return only items that match the value.</p> <p>If more than one value is included, the results will return all items that match any of the values.</p>
   * @public
   */
  CreationTimes?: TimeCondition[] | undefined;

  /**
   * <p>You can include 1 to 10 values.</p> <p>If one value is included, the results will return only items that match the value.</p> <p>If more than one value is included, the results will return all items that match any of the values.</p>
   * @public
   */
  VersionIds?: StringCondition[] | undefined;

  /**
   * <p>You can include 1 to 10 values.</p> <p>If one value is included, the results will return only items that match the value.</p> <p>If more than one value is included, the results will return all items that match any of the values.</p>
   * @public
   */
  ETags?: StringCondition[] | undefined;
}

/**
 * <p>Item Filters represent all input item properties specified when the search was created.</p> <p>Contains either EBSItemFilters or S3ItemFilters</p>
 * @public
 */
export interface ItemFilters {
  /**
   * <p>This array can contain CreationTimes, ETags, ObjectKeys, Sizes, or VersionIds objects.</p>
   * @public
   */
  S3ItemFilters?: S3ItemFilter[] | undefined;

  /**
   * <p>This array can contain CreationTimes, FilePaths, LastModificationTimes, or Sizes objects.</p>
   * @public
   */
  EBSItemFilters?: EBSItemFilter[] | undefined;
}

/**
 * <p>The search scope is all backup properties input into a search.</p>
 * @public
 */
export interface SearchScope {
  /**
   * <p>The resource types included in a search.</p> <p>Eligible resource types include S3 and EBS.</p>
   * @public
   */
  BackupResourceTypes: ResourceType[] | undefined;

  /**
   * <p>This is the time a backup resource was created.</p>
   * @public
   */
  BackupResourceCreationTime?: BackupCreationTimeFilter | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the source resources.</p>
   * @public
   */
  SourceResourceArns?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the backup resources.</p>
   * @public
   */
  BackupResourceArns?: string[] | undefined;

  /**
   * <p>These are one or more tags on the backup (recovery point).</p>
   * @public
   */
  BackupResourceTags?: Record<string, string> | undefined;
}

/**
 * <p>The summary of the specified search job scope, including: </p> <ul> <li> <p>TotalBackupsToScanCount, the number of recovery points returned by the search.</p> </li> <li> <p>TotalItemsToScanCount, the number of items returned by the search.</p> </li> </ul>
 * @public
 */
export interface SearchScopeSummary {
  /**
   * <p>This is the count of the total number of backups that will be scanned in a search.</p>
   * @public
   */
  TotalRecoveryPointsToScanCount?: number | undefined;

  /**
   * <p>This is the count of the total number of items that will be scanned in a search.</p>
   * @public
   */
  TotalItemsToScanCount?: number | undefined;
}

/**
 * @public
 */
export interface GetSearchJobOutput {
  /**
   * <p>Returned name of the specified search job.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Returned summary of the specified search job scope, including: </p> <ul> <li> <p>TotalBackupsToScanCount, the number of recovery points returned by the search.</p> </li> <li> <p>TotalItemsToScanCount, the number of items returned by the search.</p> </li> </ul>
   * @public
   */
  SearchScopeSummary?: SearchScopeSummary | undefined;

  /**
   * <p>Returns numbers representing BackupsScannedCount, ItemsScanned, and ItemsMatched.</p>
   * @public
   */
  CurrentSearchProgress?: CurrentSearchProgress | undefined;

  /**
   * <p>A status message will be returned for either a earch job with a status of <code>ERRORED</code> or a status of <code>COMPLETED</code> jobs with issues.</p> <p>For example, a message may say that a search contained recovery points unable to be scanned because of a permissions issue.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The encryption key for the specified search job.</p> <p>Example: <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * <p>The date and time that a search job completed, in Unix format and Coordinated Universal Time (UTC). The value of <code>CompletionTime</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * <p>The current status of the specified search job.</p> <p>A search job may have one of the following statuses: <code>RUNNING</code>; <code>COMPLETED</code>; <code>STOPPED</code>; <code>FAILED</code>; <code>TIMED_OUT</code>; or <code>EXPIRED</code> .</p>
   * @public
   */
  Status: SearchJobState | undefined;

  /**
   * <p>The search scope is all backup properties input into a search.</p>
   * @public
   */
  SearchScope: SearchScope | undefined;

  /**
   * <p>Item Filters represent all input item properties specified when the search was created.</p>
   * @public
   */
  ItemFilters: ItemFilters | undefined;

  /**
   * <p>The date and time that a search job was created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CompletionTime</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The unique string that identifies the specified search job.</p>
   * @public
   */
  SearchJobIdentifier: string | undefined;

  /**
   * <p>The unique string that identifies the Amazon Resource Name (ARN) of the specified search job.</p>
   * @public
   */
  SearchJobArn: string | undefined;
}

/**
 * @public
 */
export interface ListSearchJobsInput {
  /**
   * <p>Include this parameter to filter list by search job status.</p>
   * @public
   */
  ByStatus?: SearchJobState | undefined;

  /**
   * <p>The next item following a partial list of returned search jobs.</p> <p>For example, if a request is made to return <code>MaxResults</code> number of backups, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of resource list items to be returned.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>This is information pertaining to a search job.</p>
 * @public
 */
export interface SearchJobSummary {
  /**
   * <p>The unique string that specifies the search job.</p>
   * @public
   */
  SearchJobIdentifier?: string | undefined;

  /**
   * <p>The unique string that identifies the Amazon Resource Name (ARN) of the specified search job.</p>
   * @public
   */
  SearchJobArn?: string | undefined;

  /**
   * <p>This is the name of the search job.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>This is the status of the search job.</p>
   * @public
   */
  Status?: SearchJobState | undefined;

  /**
   * <p>This is the creation time of the search job.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>This is the completion time of the search job.</p>
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * <p>Returned summary of the specified search job scope, including: </p> <ul> <li> <p>TotalBackupsToScanCount, the number of recovery points returned by the search.</p> </li> <li> <p>TotalItemsToScanCount, the number of items returned by the search.</p> </li> </ul>
   * @public
   */
  SearchScopeSummary?: SearchScopeSummary | undefined;

  /**
   * <p>A status message will be returned for either a earch job with a status of <code>ERRORED</code> or a status of <code>COMPLETED</code> jobs with issues.</p> <p>For example, a message may say that a search contained recovery points unable to be scanned because of a permissions issue.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListSearchJobsOutput {
  /**
   * <p>The search jobs among the list, with details of the returned search jobs.</p>
   * @public
   */
  SearchJobs: SearchJobSummary[] | undefined;

  /**
   * <p>The next item following a partial list of returned backups included in a search job.</p> <p>For example, if a request is made to return <code>MaxResults</code> number of backups, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The request denied due to exceeding the quota limits permitted.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>Identifier of the resource.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>Type of resource.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>This is the code unique to the originating service with the quota.</p>
   * @public
   */
  serviceCode: string | undefined;

  /**
   * <p>This is the code specific to the quota type.</p>
   * @public
   */
  quotaCode: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * @public
 */
export interface StartSearchJobInput {
  /**
   * <p>List of tags returned by the operation.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Include alphanumeric characters to create a name for this search job.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The encryption key for the specified search job.</p>
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * <p>Include this parameter to allow multiple identical calls for idempotency.</p> <p>A client token is valid for 8 hours after the first request that uses it is completed. After this time, any request with the same token is treated as a new request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>This object can contain BackupResourceTypes, BackupResourceArns, BackupResourceCreationTime, BackupResourceTags, and SourceResourceArns to filter the recovery points returned by the search job.</p>
   * @public
   */
  SearchScope: SearchScope | undefined;

  /**
   * <p>Item Filters represent all input item properties specified when the search was created.</p> <p>Contains either EBSItemFilters or S3ItemFilters</p>
   * @public
   */
  ItemFilters?: ItemFilters | undefined;
}

/**
 * @public
 */
export interface StartSearchJobOutput {
  /**
   * <p>The unique string that identifies the Amazon Resource Name (ARN) of the specified search job.</p>
   * @public
   */
  SearchJobArn?: string | undefined;

  /**
   * <p>The date and time that a job was created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CompletionTime</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The unique string that specifies the search job.</p>
   * @public
   */
  SearchJobIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface StopSearchJobInput {
  /**
   * <p>The unique string that specifies the search job.</p>
   * @public
   */
  SearchJobIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopSearchJobOutput {}

/**
 * @public
 * @enum
 */
export const ExportJobStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type ExportJobStatus = (typeof ExportJobStatus)[keyof typeof ExportJobStatus];

/**
 * <p>This specification contains a required string of the destination bucket; optionally, you can include the destination prefix.</p>
 * @public
 */
export interface S3ExportSpecification {
  /**
   * <p>This specifies the destination Amazon S3 bucket for the export job.</p>
   * @public
   */
  DestinationBucket: string | undefined;

  /**
   * <p>This specifies the prefix for the destination Amazon S3 bucket for the export job.</p>
   * @public
   */
  DestinationPrefix?: string | undefined;
}

/**
 * <p>This contains the export specification object.</p>
 * @public
 */
export type ExportSpecification = ExportSpecification.S3ExportSpecificationMember | ExportSpecification.$UnknownMember;

/**
 * @public
 */
export namespace ExportSpecification {
  /**
   * <p>This specifies the destination Amazon S3 bucket for the export job. And, if included, it also specifies the destination prefix.</p>
   * @public
   */
  export interface S3ExportSpecificationMember {
    s3ExportSpecification: S3ExportSpecification;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3ExportSpecification?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3ExportSpecification: (value: S3ExportSpecification) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetSearchResultExportJobInput {
  /**
   * <p>This is the unique string that identifies a specific export job.</p> <p>Required for this operation.</p>
   * @public
   */
  ExportJobIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetSearchResultExportJobOutput {
  /**
   * <p>This is the unique string that identifies the specified export job.</p>
   * @public
   */
  ExportJobIdentifier: string | undefined;

  /**
   * <p>The unique Amazon Resource Name (ARN) that uniquely identifies the export job.</p>
   * @public
   */
  ExportJobArn?: string | undefined;

  /**
   * <p>This is the current status of the export job.</p>
   * @public
   */
  Status?: ExportJobStatus | undefined;

  /**
   * <p>The date and time that an export job was created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationTime</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The date and time that an export job completed, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationTime</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * <p>A status message is a string that is returned for search job with a status of <code>FAILED</code>, along with steps to remedy and retry the operation.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The export specification consists of the destination S3 bucket to which the search results were exported, along with the destination prefix.</p>
   * @public
   */
  ExportSpecification?: ExportSpecification | undefined;

  /**
   * <p>The unique string that identifies the Amazon Resource Name (ARN) of the specified search job.</p>
   * @public
   */
  SearchJobArn?: string | undefined;
}

/**
 * @public
 */
export interface ListSearchResultExportJobsInput {
  /**
   * <p>The search jobs to be included in the export job can be filtered by including this parameter.</p>
   * @public
   */
  Status?: ExportJobStatus | undefined;

  /**
   * <p>The unique string that specifies the search job.</p>
   * @public
   */
  SearchJobIdentifier?: string | undefined;

  /**
   * <p>The next item following a partial list of returned backups included in a search job.</p> <p>For example, if a request is made to return <code>MaxResults</code> number of backups, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of resource list items to be returned.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>This is the summary of an export job.</p>
 * @public
 */
export interface ExportJobSummary {
  /**
   * <p>This is the unique string that identifies a specific export job.</p>
   * @public
   */
  ExportJobIdentifier: string | undefined;

  /**
   * <p>This is the unique ARN (Amazon Resource Name) that belongs to the new export job.</p>
   * @public
   */
  ExportJobArn?: string | undefined;

  /**
   * <p>The status of the export job is one of the following:</p> <p> <code>CREATED</code>; <code>RUNNING</code>; <code>FAILED</code>; or <code>COMPLETED</code>.</p>
   * @public
   */
  Status?: ExportJobStatus | undefined;

  /**
   * <p>This is a timestamp of the time the export job was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>This is a timestamp of the time the export job compeleted.</p>
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * <p>A status message is a string that is returned for an export job.</p> <p>A status message is included for any status other than <code>COMPLETED</code> without issues.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The unique string that identifies the Amazon Resource Name (ARN) of the specified search job.</p>
   * @public
   */
  SearchJobArn?: string | undefined;
}

/**
 * @public
 */
export interface ListSearchResultExportJobsOutput {
  /**
   * <p>The operation returns the included export jobs.</p>
   * @public
   */
  ExportJobs: ExportJobSummary[] | undefined;

  /**
   * <p>The next item following a partial list of returned backups included in a search job.</p> <p>For example, if a request is made to return <code>MaxResults</code> number of backups, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartSearchResultExportJobInput {
  /**
   * <p>The unique string that specifies the search job.</p>
   * @public
   */
  SearchJobIdentifier: string | undefined;

  /**
   * <p>This specification contains a required string of the destination bucket; optionally, you can include the destination prefix.</p>
   * @public
   */
  ExportSpecification: ExportSpecification | undefined;

  /**
   * <p>Include this parameter to allow multiple identical calls for idempotency.</p> <p>A client token is valid for 8 hours after the first request that uses it is completed. After this time, any request with the same token is treated as a new request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Optional tags to include. A tag is a key-value pair you can use to manage, filter, and search for your resources. Allowed characters include UTF-8 letters, numbers, spaces, and the following characters: + - = . _ : /. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>This parameter specifies the role ARN used to start the search results export jobs.</p>
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * @public
 */
export interface StartSearchResultExportJobOutput {
  /**
   * <p>This is the unique ARN (Amazon Resource Name) that belongs to the new export job.</p>
   * @public
   */
  ExportJobArn?: string | undefined;

  /**
   * <p>This is the unique identifier that specifies the new export job.</p>
   * @public
   */
  ExportJobIdentifier: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the resource.</p> <p>This is the resource that will have the indicated tags.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Required tags to include. A tag is a key-value pair you can use to manage, filter, and search for your resources. Allowed characters include UTF-8 letters, numbers, spaces, and the following characters: + - = . _ : /. </p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the resource where you want to remove tags.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>This required parameter contains the tag keys you want to remove from the source.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
