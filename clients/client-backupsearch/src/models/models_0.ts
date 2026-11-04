// smithy-typescript generated code
import type {
  ExportJobStatus,
  LongConditionOperator,
  ResourceType,
  SearchJobState,
  StringConditionOperator,
  TimeConditionOperator,
} from "./enums";

/**
 * This filters by recovery points within the CreatedAfter and CreatedBefore timestamps.
 *
 * @public
 */
export interface BackupCreationTimeFilter {
  /**
   * This timestamp includes recovery points only created after the specified time.
   *
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * This timestamp includes recovery points only created before the specified time.
   *
   * @public
   */
  CreatedBefore?: Date | undefined;
}

/**
 * @public
 */
export interface ListSearchJobBackupsInput {
  /**
   * The unique string that specifies the search job.
   *
   * @public
   */
  SearchJobIdentifier: string | undefined;

  /**
   * The next item following a partial list of returned backups included in a search job.
   *
   * For example, if a request is made to return `MaxResults` number of backups, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of resource list items to be returned.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * This contains the information about recovery points returned in results of a search job.
 *
 * @public
 */
export interface SearchJobBackupsResult {
  /**
   * This is the status of the search job backup result.
   *
   * @public
   */
  Status?: SearchJobState | undefined;

  /**
   * This is the status message included with the results.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * This is the resource type of the search.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the backup resources.
   *
   * @public
   */
  BackupResourceArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the source resources.
   *
   * @public
   */
  SourceResourceArn?: string | undefined;

  /**
   * This is the creation time of the backup index.
   *
   * @public
   */
  IndexCreationTime?: Date | undefined;

  /**
   * This is the creation time of the backup (recovery point).
   *
   * @public
   */
  BackupCreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListSearchJobBackupsOutput {
  /**
   * The recovery points returned the results of a search job
   *
   * @public
   */
  Results: SearchJobBackupsResult[] | undefined;

  /**
   * The next item following a partial list of returned backups included in a search job.
   *
   * For example, if a request is made to return `MaxResults` number of backups, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSearchJobResultsInput {
  /**
   * The unique string that specifies the search job.
   *
   * @public
   */
  SearchJobIdentifier: string | undefined;

  /**
   * The next item following a partial list of returned search job results.
   *
   * For example, if a request is made to return `MaxResults` number of search job results, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of resource list items to be returned.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * These are the items returned in the results of a search of Amazon EBS backup metadata.
 *
 * @public
 */
export interface EBSResultItem {
  /**
   * These are one or more items in the results that match values for the Amazon Resource Name (ARN) of recovery points returned in a search of Amazon EBS backup metadata.
   *
   * @public
   */
  BackupResourceArn?: string | undefined;

  /**
   * These are one or more items in the results that match values for the Amazon Resource Name (ARN) of source resources returned in a search of Amazon EBS backup metadata.
   *
   * @public
   */
  SourceResourceArn?: string | undefined;

  /**
   * The name of the backup vault.
   *
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * These are one or more items in the results that match values for file systems returned in a search of Amazon EBS backup metadata.
   *
   * @public
   */
  FileSystemIdentifier?: string | undefined;

  /**
   * These are one or more items in the results that match values for file paths returned in a search of Amazon EBS backup metadata.
   *
   * @public
   */
  FilePath?: string | undefined;

  /**
   * These are one or more items in the results that match values for file sizes returned in a search of Amazon EBS backup metadata.
   *
   * @public
   */
  FileSize?: number | undefined;

  /**
   * These are one or more items in the results that match values for creation times returned in a search of Amazon EBS backup metadata.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * These are one or more items in the results that match values for Last Modified Time returned in a search of Amazon EBS backup metadata.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * These are the items returned in the results of a search of Amazon S3 backup metadata.
 *
 * @public
 */
export interface S3ResultItem {
  /**
   * These are items in the returned results that match recovery point Amazon Resource Names (ARN) input during a search of Amazon S3 backup metadata.
   *
   * @public
   */
  BackupResourceArn?: string | undefined;

  /**
   * These are items in the returned results that match source Amazon Resource Names (ARN) input during a search of Amazon S3 backup metadata.
   *
   * @public
   */
  SourceResourceArn?: string | undefined;

  /**
   * The name of the backup vault.
   *
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * This is one or more items returned in the results of a search of Amazon S3 backup metadata that match the values input for object key.
   *
   * @public
   */
  ObjectKey?: string | undefined;

  /**
   * These are items in the returned results that match values for object size(s) input during a search of Amazon S3 backup metadata.
   *
   * @public
   */
  ObjectSize?: number | undefined;

  /**
   * These are one or more items in the returned results that match values for item creation time input during a search of Amazon S3 backup metadata.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * These are one or more items in the returned results that match values for ETags input during a search of Amazon S3 backup metadata.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * These are one or more items in the returned results that match values for version IDs input during a search of Amazon S3 backup metadata.
   *
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * This is an object representing the item returned in the results of a search for a specific resource type.
 *
 * @public
 */
export type ResultItem =
  | ResultItem.EBSResultItemMember
  | ResultItem.S3ResultItemMember
  | ResultItem.$UnknownMember;

/**
 * @public
 */
export namespace ResultItem {
  /**
   * These are items returned in the search results of an Amazon S3 search.
   *
   * @public
   */
  export interface S3ResultItemMember {
    S3ResultItem: S3ResultItem;
    EBSResultItem?: never;
    $unknown?: never;
  }

  /**
   * These are items returned in the search results of an Amazon EBS search.
   *
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
   * The results consist of either EBSResultItem or S3ResultItem.
   *
   * @public
   */
  Results: ResultItem[] | undefined;

  /**
   * The next item following a partial list of search job results.
   *
   * For example, if a request is made to return `MaxResults` number of backups, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the resource.&gt;
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * List of tags returned by the operation.
   *
   * @public
   */
  Tags?: Record<string, string | null> | undefined;
}

/**
 * This contains information results retrieved from a search job that may not have completed.
 *
 * @public
 */
export interface CurrentSearchProgress {
  /**
   * This number is the sum of all backups that have been scanned so far during a search job.
   *
   * @public
   */
  RecoveryPointsScannedCount?: number | undefined;

  /**
   * This number is the sum of all items that have been scanned so far during a search job.
   *
   * @public
   */
  ItemsScannedCount?: number | undefined;

  /**
   * This number is the sum of all items that match the item filters in a search job in progress.
   *
   * @public
   */
  ItemsMatchedCount?: number | undefined;
}

/**
 * @public
 */
export interface GetSearchJobInput {
  /**
   * Required unique string that specifies the search job.
   *
   * @public
   */
  SearchJobIdentifier: string | undefined;
}

/**
 * A time condition denotes a creation time, last modification time, or other time.
 *
 * @public
 */
export interface TimeCondition {
  /**
   * This is the timestamp value of the time condition.
   *
   * @public
   */
  Value: Date | undefined;

  /**
   * A string that defines what values will be returned.
   *
   * If this is included, avoid combinations of operators that will return all possible values. For example, including both `EQUALS_TO` and `NOT_EQUALS_TO` with a value of `4` will return all values.
   *
   * @public
   */
  Operator?: TimeConditionOperator | undefined;
}

/**
 * This contains the value of the string and can contain one or more operators.
 *
 * @public
 */
export interface StringCondition {
  /**
   * The value of the string.
   *
   * @public
   */
  Value: string | undefined;

  /**
   * A string that defines what values will be returned.
   *
   * If this is included, avoid combinations of operators that will return all possible values. For example, including both `EQUALS_TO` and `NOT_EQUALS_TO` with a value of `4` will return all values.
   *
   * @public
   */
  Operator?: StringConditionOperator | undefined;
}

/**
 * The long condition contains a `Value` and can optionally contain an `Operator`.
 *
 * @public
 */
export interface LongCondition {
  /**
   * The value of an item included in one of the search item filters.
   *
   * @public
   */
  Value: number | undefined;

  /**
   * A string that defines what values will be returned.
   *
   * If this is included, avoid combinations of operators that will return all possible values. For example, including both `EQUALS_TO` and `NOT_EQUALS_TO` with a value of `4` will return all values.
   *
   * @public
   */
  Operator?: LongConditionOperator | undefined;
}

/**
 * This contains arrays of objects, which may include CreationTimes time condition objects, FilePaths string objects, LastModificationTimes time condition objects,
 *
 * @public
 */
export interface EBSItemFilter {
  /**
   * You can include 1 to 10 values.
   *
   * If one file path is included, the results will return only items that match the file path.
   *
   * If more than one file path is included, the results will return all items that match any of the file paths.
   *
   * @public
   */
  FilePaths?: StringCondition[] | undefined;

  /**
   * You can include 1 to 10 values.
   *
   * If one is included, the results will return only items that match.
   *
   * If more than one is included, the results will return all items that match any of the included values.
   *
   * @public
   */
  Sizes?: LongCondition[] | undefined;

  /**
   * You can include 1 to 10 values.
   *
   * If one is included, the results will return only items that match.
   *
   * If more than one is included, the results will return all items that match any of the included values.
   *
   * @public
   */
  CreationTimes?: TimeCondition[] | undefined;

  /**
   * You can include 1 to 10 values.
   *
   * If one is included, the results will return only items that match.
   *
   * If more than one is included, the results will return all items that match any of the included values.
   *
   * @public
   */
  LastModificationTimes?: TimeCondition[] | undefined;
}

/**
 * This contains arrays of objects, which may include ObjectKeys, Sizes, CreationTimes, VersionIds, and/or Etags.
 *
 * @public
 */
export interface S3ItemFilter {
  /**
   * You can include 1 to 10 values.
   *
   * If one value is included, the results will return only items that match the value.
   *
   * If more than one value is included, the results will return all items that match any of the values.
   *
   * @public
   */
  ObjectKeys?: StringCondition[] | undefined;

  /**
   * You can include 1 to 10 values.
   *
   * If one value is included, the results will return only items that match the value.
   *
   * If more than one value is included, the results will return all items that match any of the values.
   *
   * @public
   */
  Sizes?: LongCondition[] | undefined;

  /**
   * You can include 1 to 10 values.
   *
   * If one value is included, the results will return only items that match the value.
   *
   * If more than one value is included, the results will return all items that match any of the values.
   *
   * @public
   */
  CreationTimes?: TimeCondition[] | undefined;

  /**
   * You can include 1 to 10 values.
   *
   * If one value is included, the results will return only items that match the value.
   *
   * If more than one value is included, the results will return all items that match any of the values.
   *
   * @public
   */
  VersionIds?: StringCondition[] | undefined;

  /**
   * You can include 1 to 10 values.
   *
   * If one value is included, the results will return only items that match the value.
   *
   * If more than one value is included, the results will return all items that match any of the values.
   *
   * @public
   */
  ETags?: StringCondition[] | undefined;
}

/**
 * Item Filters represent all input item properties specified when the search was created.
 *
 * Contains either EBSItemFilters or S3ItemFilters
 *
 * @public
 */
export interface ItemFilters {
  /**
   * This array can contain CreationTimes, ETags, ObjectKeys, Sizes, or VersionIds objects.
   *
   * @public
   */
  S3ItemFilters?: S3ItemFilter[] | undefined;

  /**
   * This array can contain CreationTimes, FilePaths, LastModificationTimes, or Sizes objects.
   *
   * @public
   */
  EBSItemFilters?: EBSItemFilter[] | undefined;
}

/**
 * The search scope is all backup properties input into a search.
 *
 * @public
 */
export interface SearchScope {
  /**
   * The resource types included in a search.
   *
   * Eligible resource types include S3 and EBS.
   *
   * @public
   */
  BackupResourceTypes: ResourceType[] | undefined;

  /**
   * This is the time a backup resource was created.
   *
   * @public
   */
  BackupResourceCreationTime?: BackupCreationTimeFilter | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the source resources.
   *
   * @public
   */
  SourceResourceArns?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the backup resources.
   *
   * @public
   */
  BackupResourceArns?: string[] | undefined;

  /**
   * These are one or more tags on the backup (recovery point).
   *
   * @public
   */
  BackupResourceTags?: Record<string, string | null> | undefined;
}

/**
 * The summary of the specified search job scope, including:
 *
 * - TotalBackupsToScanCount, the number of recovery points returned by the search.
 * - TotalItemsToScanCount, the number of items returned by the search.
 *
 * @public
 */
export interface SearchScopeSummary {
  /**
   * This is the count of the total number of backups that will be scanned in a search.
   *
   * @public
   */
  TotalRecoveryPointsToScanCount?: number | undefined;

  /**
   * This is the count of the total number of items that will be scanned in a search.
   *
   * @public
   */
  TotalItemsToScanCount?: number | undefined;
}

/**
 * @public
 */
export interface GetSearchJobOutput {
  /**
   * Returned name of the specified search job.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Returned summary of the specified search job scope, including:
   *
   * - TotalBackupsToScanCount, the number of recovery points returned by the search.
   * - TotalItemsToScanCount, the number of items returned by the search.
   *
   * @public
   */
  SearchScopeSummary?: SearchScopeSummary | undefined;

  /**
   * Returns numbers representing BackupsScannedCount, ItemsScanned, and ItemsMatched.
   *
   * @public
   */
  CurrentSearchProgress?: CurrentSearchProgress | undefined;

  /**
   * A status message will be returned for either a earch job with a status of `ERRORED` or a status of `COMPLETED` jobs with issues.
   *
   * For example, a message may say that a search contained recovery points unable to be scanned because of a permissions issue.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The encryption key for the specified search job.
   *
   * Example: `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * The date and time that a search job completed, in Unix format and Coordinated Universal Time (UTC). The value of `CompletionTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * The current status of the specified search job.
   *
   * A search job may have one of the following statuses: `RUNNING`; `COMPLETED`; `STOPPED`; `FAILED`; `TIMED_OUT`; or `EXPIRED` .
   *
   * @public
   */
  Status: SearchJobState | undefined;

  /**
   * The search scope is all backup properties input into a search.
   *
   * @public
   */
  SearchScope: SearchScope | undefined;

  /**
   * Item Filters represent all input item properties specified when the search was created.
   *
   * @public
   */
  ItemFilters: ItemFilters | undefined;

  /**
   * The date and time that a search job was created, in Unix format and Coordinated Universal Time (UTC). The value of `CompletionTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The unique string that identifies the specified search job.
   *
   * @public
   */
  SearchJobIdentifier: string | undefined;

  /**
   * The unique string that identifies the Amazon Resource Name (ARN) of the specified search job.
   *
   * @public
   */
  SearchJobArn: string | undefined;
}

/**
 * @public
 */
export interface ListSearchJobsInput {
  /**
   * Include this parameter to filter list by search job status.
   *
   * @public
   */
  ByStatus?: SearchJobState | undefined;

  /**
   * The next item following a partial list of returned search jobs.
   *
   * For example, if a request is made to return `MaxResults` number of backups, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of resource list items to be returned.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * This is information pertaining to a search job.
 *
 * @public
 */
export interface SearchJobSummary {
  /**
   * The unique string that specifies the search job.
   *
   * @public
   */
  SearchJobIdentifier?: string | undefined;

  /**
   * The unique string that identifies the Amazon Resource Name (ARN) of the specified search job.
   *
   * @public
   */
  SearchJobArn?: string | undefined;

  /**
   * This is the name of the search job.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * This is the status of the search job.
   *
   * @public
   */
  Status?: SearchJobState | undefined;

  /**
   * This is the creation time of the search job.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * This is the completion time of the search job.
   *
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * Returned summary of the specified search job scope, including:
   *
   * - TotalBackupsToScanCount, the number of recovery points returned by the search.
   * - TotalItemsToScanCount, the number of items returned by the search.
   *
   * @public
   */
  SearchScopeSummary?: SearchScopeSummary | undefined;

  /**
   * A status message will be returned for either a earch job with a status of `ERRORED` or a status of `COMPLETED` jobs with issues.
   *
   * For example, a message may say that a search contained recovery points unable to be scanned because of a permissions issue.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListSearchJobsOutput {
  /**
   * The search jobs among the list, with details of the returned search jobs.
   *
   * @public
   */
  SearchJobs: SearchJobSummary[] | undefined;

  /**
   * The next item following a partial list of returned backups included in a search job.
   *
   * For example, if a request is made to return `MaxResults` number of backups, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartSearchJobInput {
  /**
   * List of tags returned by the operation.
   *
   * @public
   */
  Tags?: Record<string, string | null> | undefined;

  /**
   * Include alphanumeric characters to create a name for this search job.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The encryption key for the specified search job.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * Include this parameter to allow multiple identical calls for idempotency.
   *
   * A client token is valid for 8 hours after the first request that uses it is completed. After this time, any request with the same token is treated as a new request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * This object can contain BackupResourceTypes, BackupResourceArns, BackupResourceCreationTime, BackupResourceTags, and SourceResourceArns to filter the recovery points returned by the search job.
   *
   * @public
   */
  SearchScope: SearchScope | undefined;

  /**
   * Item Filters represent all input item properties specified when the search was created.
   *
   * Contains either EBSItemFilters or S3ItemFilters
   *
   * @public
   */
  ItemFilters?: ItemFilters | undefined;
}

/**
 * @public
 */
export interface StartSearchJobOutput {
  /**
   * The unique string that identifies the Amazon Resource Name (ARN) of the specified search job.
   *
   * @public
   */
  SearchJobArn?: string | undefined;

  /**
   * The date and time that a job was created, in Unix format and Coordinated Universal Time (UTC). The value of `CompletionTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The unique string that specifies the search job.
   *
   * @public
   */
  SearchJobIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface StopSearchJobInput {
  /**
   * The unique string that specifies the search job.
   *
   * @public
   */
  SearchJobIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopSearchJobOutput {}

/**
 * This specification contains a required string of the destination bucket; optionally, you can include the destination prefix.
 *
 * @public
 */
export interface S3ExportSpecification {
  /**
   * This specifies the destination Amazon S3 bucket for the export job.
   *
   * @public
   */
  DestinationBucket: string | undefined;

  /**
   * This specifies the prefix for the destination Amazon S3 bucket for the export job.
   *
   * @public
   */
  DestinationPrefix?: string | undefined;
}

/**
 * This contains the export specification object.
 *
 * @public
 */
export type ExportSpecification =
  | ExportSpecification.S3ExportSpecificationMember
  | ExportSpecification.$UnknownMember;

/**
 * @public
 */
export namespace ExportSpecification {
  /**
   * This specifies the destination Amazon S3 bucket for the export job. And, if included, it also specifies the destination prefix.
   *
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
   * This is the unique string that identifies a specific export job.
   *
   * Required for this operation.
   *
   * @public
   */
  ExportJobIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetSearchResultExportJobOutput {
  /**
   * This is the unique string that identifies the specified export job.
   *
   * @public
   */
  ExportJobIdentifier: string | undefined;

  /**
   * The unique Amazon Resource Name (ARN) that uniquely identifies the export job.
   *
   * @public
   */
  ExportJobArn?: string | undefined;

  /**
   * This is the current status of the export job.
   *
   * @public
   */
  Status?: ExportJobStatus | undefined;

  /**
   * The date and time that an export job was created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The date and time that an export job completed, in Unix format and Coordinated Universal Time (UTC). The value of `CreationTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * A status message is a string that is returned for search job with a status of `FAILED`, along with steps to remedy and retry the operation.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The export specification consists of the destination S3 bucket to which the search results were exported, along with the destination prefix.
   *
   * @public
   */
  ExportSpecification?: ExportSpecification | undefined;

  /**
   * The unique string that identifies the Amazon Resource Name (ARN) of the specified search job.
   *
   * @public
   */
  SearchJobArn?: string | undefined;
}

/**
 * @public
 */
export interface ListSearchResultExportJobsInput {
  /**
   * The search jobs to be included in the export job can be filtered by including this parameter.
   *
   * @public
   */
  Status?: ExportJobStatus | undefined;

  /**
   * The unique string that specifies the search job.
   *
   * @public
   */
  SearchJobIdentifier?: string | undefined;

  /**
   * The next item following a partial list of returned backups included in a search job.
   *
   * For example, if a request is made to return `MaxResults` number of backups, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of resource list items to be returned.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * This is the summary of an export job.
 *
 * @public
 */
export interface ExportJobSummary {
  /**
   * This is the unique string that identifies a specific export job.
   *
   * @public
   */
  ExportJobIdentifier: string | undefined;

  /**
   * This is the unique ARN (Amazon Resource Name) that belongs to the new export job.
   *
   * @public
   */
  ExportJobArn?: string | undefined;

  /**
   * The status of the export job is one of the following:
   *
   * `CREATED`; `RUNNING`; `FAILED`; or `COMPLETED`.
   *
   * @public
   */
  Status?: ExportJobStatus | undefined;

  /**
   * This is a timestamp of the time the export job was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * This is a timestamp of the time the export job compeleted.
   *
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * A status message is a string that is returned for an export job.
   *
   * A status message is included for any status other than `COMPLETED` without issues.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The unique string that identifies the Amazon Resource Name (ARN) of the specified search job.
   *
   * @public
   */
  SearchJobArn?: string | undefined;
}

/**
 * @public
 */
export interface ListSearchResultExportJobsOutput {
  /**
   * The operation returns the included export jobs.
   *
   * @public
   */
  ExportJobs: ExportJobSummary[] | undefined;

  /**
   * The next item following a partial list of returned backups included in a search job.
   *
   * For example, if a request is made to return `MaxResults` number of backups, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartSearchResultExportJobInput {
  /**
   * The unique string that specifies the search job.
   *
   * @public
   */
  SearchJobIdentifier: string | undefined;

  /**
   * This specification contains a required string of the destination bucket; optionally, you can include the destination prefix.
   *
   * @public
   */
  ExportSpecification: ExportSpecification | undefined;

  /**
   * Include this parameter to allow multiple identical calls for idempotency.
   *
   * A client token is valid for 8 hours after the first request that uses it is completed. After this time, any request with the same token is treated as a new request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Optional tags to include. A tag is a key-value pair you can use to manage, filter, and search for your resources. Allowed characters include UTF-8 letters, numbers, spaces, and the following characters: + - = . _ : /.
   *
   * @public
   */
  Tags?: Record<string, string | null> | undefined;

  /**
   * This parameter specifies the role ARN used to start the search results export jobs.
   *
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * @public
 */
export interface StartSearchResultExportJobOutput {
  /**
   * This is the unique ARN (Amazon Resource Name) that belongs to the new export job.
   *
   * @public
   */
  ExportJobArn?: string | undefined;

  /**
   * This is the unique identifier that specifies the new export job.
   *
   * @public
   */
  ExportJobIdentifier: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the resource.
   *
   * This is the resource that will have the indicated tags.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Required tags to include. A tag is a key-value pair you can use to manage, filter, and search for your resources. Allowed characters include UTF-8 letters, numbers, spaces, and the following characters: + - = . _ : /.
   *
   * @public
   */
  Tags: Record<string, string | null> | undefined;
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
   * The Amazon Resource Name (ARN) that uniquely identifies the resource where you want to remove tags.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * This required parameter contains the tag keys you want to remove from the source.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
