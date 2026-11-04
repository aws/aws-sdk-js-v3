// smithy-typescript generated code
import type { DeletionMode, ExpirationTimeResponse, TargetStore, TtlDurationUnit } from "./enums";

/**
 * The identifier that identifies the batch of Records you are retrieving in a batch.
 *
 * @public
 */
export interface BatchGetRecordIdentifier {
  /**
   * The name or Amazon Resource Name (ARN) of the `FeatureGroup` containing the records you are retrieving in a batch.
   *
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * The value for a list of record identifiers in string format.
   *
   * @public
   */
  RecordIdentifiersValueAsString: string[] | undefined;

  /**
   * List of names of Features to be retrieved. If not specified, the latest value for all the Features are returned.
   *
   * @public
   */
  FeatureNames?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetRecordRequest {
  /**
   * A list containing the name or Amazon Resource Name (ARN) of the `FeatureGroup`, the list of names of `Feature`s to be retrieved, and the corresponding `RecordIdentifier` values as strings.
   *
   * @public
   */
  Identifiers: BatchGetRecordIdentifier[] | undefined;

  /**
   * Parameter to request `ExpiresAt` in response. If `Enabled`, `BatchGetRecord` will return the value of `ExpiresAt`, if it is not null. If `Disabled` and null, `BatchGetRecord` will return null.
   *
   * @public
   */
  ExpirationTimeResponse?: ExpirationTimeResponse | undefined;
}

/**
 * The error that has occurred when attempting to retrieve a batch of Records.
 *
 * @public
 */
export interface BatchGetRecordError {
  /**
   * The name of the feature group that the record belongs to.
   *
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * The value for the `RecordIdentifier` in string format of a Record from a `FeatureGroup` that is causing an error when attempting to be retrieved.
   *
   * @public
   */
  RecordIdentifierValueAsString: string | undefined;

  /**
   * The error code of an error that has occurred when attempting to retrieve a batch of Records. For more information on errors, see [Errors](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_feature_store_GetRecord.html#API_feature_store_GetRecord_Errors).
   *
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * The error message of an error that has occurred when attempting to retrieve a record in the batch.
   *
   * @public
   */
  ErrorMessage: string | undefined;
}

/**
 * The value associated with a feature.
 *
 * @public
 */
export interface FeatureValue {
  /**
   * The name of a feature that a feature value corresponds to.
   *
   * @public
   */
  FeatureName: string | undefined;

  /**
   * The value in string format associated with a feature. Used when your `CollectionType` is `None`. Note that features types can be `String`, `Integral`, or `Fractional`. This value represents all three types as a string.
   *
   * @public
   */
  ValueAsString?: string | undefined;

  /**
   * The list of values in string format associated with a feature. Used when your `CollectionType` is a `List`, `Set`, or `Vector`. Note that features types can be `String`, `Integral`, or `Fractional`. These values represents all three types as a string.
   *
   * @public
   */
  ValueAsStringList?: string[] | undefined;
}

/**
 * The output of records that have been retrieved in a batch.
 *
 * @public
 */
export interface BatchGetRecordResultDetail {
  /**
   * The `FeatureGroupName` containing Records you retrieved in a batch.
   *
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * The value of the record identifier in string format.
   *
   * @public
   */
  RecordIdentifierValueAsString: string | undefined;

  /**
   * The `Record` retrieved.
   *
   * @public
   */
  Record: FeatureValue[] | undefined;

  /**
   * The `ExpiresAt` ISO string of the requested record.
   *
   * @public
   */
  ExpiresAt?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetRecordResponse {
  /**
   * A list of Records you requested to be retrieved in batch.
   *
   * @public
   */
  Records: BatchGetRecordResultDetail[] | undefined;

  /**
   * A list of errors that have occurred when retrieving a batch of Records.
   *
   * @public
   */
  Errors: BatchGetRecordError[] | undefined;

  /**
   * A unprocessed list of `FeatureGroup` names, with their corresponding `RecordIdentifier` value, and Feature name.
   *
   * @public
   */
  UnprocessedIdentifiers: BatchGetRecordIdentifier[] | undefined;
}

/**
 * Time to live duration, where the record is hard deleted after the expiration time is reached; `ExpiresAt` = `EventTime` + `TtlDuration`. For information on HardDelete, see the [DeleteRecord](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_feature_store_DeleteRecord.html) API in the Amazon SageMaker API Reference guide.
 *
 * @public
 */
export interface TtlDuration {
  /**
   * `TtlDuration` time unit.
   *
   * @public
   */
  Unit: TtlDurationUnit | undefined;

  /**
   * `TtlDuration` time value.
   *
   * @public
   */
  Value: number | undefined;
}

/**
 * An entry to write as part of a `BatchWriteRecord` request.
 *
 * @public
 */
export interface BatchWriteRecordEntry {
  /**
   * The name or Amazon Resource Name (ARN) of the `FeatureGroup` to write the record to.
   *
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * List of FeatureValues to be inserted. This will be a full over-write.
   *
   * @public
   */
  Record: FeatureValue[] | undefined;

  /**
   * A list of stores to which you're adding the record. By default, Feature Store adds the record to all of the stores that you're using for the `FeatureGroup`.
   *
   * @public
   */
  TargetStores?: TargetStore[] | undefined;

  /**
   * Time to live duration for this entry, where the record is hard deleted after the expiration time is reached; `ExpiresAt` = `EventTime` + `TtlDuration`. This overrides the request level `TtlDuration`.
   *
   * @public
   */
  TtlDuration?: TtlDuration | undefined;
}

/**
 * @public
 */
export interface BatchWriteRecordRequest {
  /**
   * A list of records to write. Each entry specifies the `FeatureGroup`, the record data, and optionally target stores and a TTL duration.
   *
   * @public
   */
  Entries: BatchWriteRecordEntry[] | undefined;

  /**
   * Time to live duration applied to all entries in the batch that do not specify their own `TtlDuration`; `ExpiresAt` = `EventTime` + `TtlDuration`. For information on HardDelete, see the [DeleteRecord](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_feature_store_DeleteRecord.html) API in the Amazon SageMaker API Reference guide.
   *
   * @public
   */
  TtlDuration?: TtlDuration | undefined;
}

/**
 * The error that has occurred when attempting to write a record in a batch.
 *
 * @public
 */
export interface BatchWriteRecordError {
  /**
   * The entry that failed to be written.
   *
   * @public
   */
  Entry: BatchWriteRecordEntry | undefined;

  /**
   * The error code for the failed record write.
   *
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * The error message for the failed record write.
   *
   * @public
   */
  ErrorMessage: string | undefined;
}

/**
 * @public
 */
export interface BatchWriteRecordResponse {
  /**
   * A list of errors that occurred when writing records in the batch.
   *
   * @public
   */
  Errors: BatchWriteRecordError[] | undefined;

  /**
   * A list of entries that were not processed. These entries can be retried.
   *
   * @public
   */
  UnprocessedEntries: BatchWriteRecordEntry[] | undefined;
}

/**
 * @public
 */
export interface DeleteRecordRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the feature group to delete the record from.
   *
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * The value for the `RecordIdentifier` that uniquely identifies the record, in string format.
   *
   * @public
   */
  RecordIdentifierValueAsString: string | undefined;

  /**
   * Timestamp indicating when the deletion event occurred. `EventTime` can be used to query data at a certain point in time.
   *
   * @public
   */
  EventTime: string | undefined;

  /**
   * A list of stores from which you're deleting the record. By default, Feature Store deletes the record from all of the stores that you're using for the `FeatureGroup`.
   *
   * @public
   */
  TargetStores?: TargetStore[] | undefined;

  /**
   * The name of the deletion mode for deleting the record. By default, the deletion mode is set to `SoftDelete`.
   *
   * @public
   */
  DeletionMode?: DeletionMode | undefined;
}

/**
 * @public
 */
export interface GetRecordRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the feature group from which you want to retrieve a record.
   *
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * The value that corresponds to `RecordIdentifier` type and uniquely identifies the record in the `FeatureGroup`.
   *
   * @public
   */
  RecordIdentifierValueAsString: string | undefined;

  /**
   * List of names of Features to be retrieved. If not specified, the latest value for all the Features are returned.
   *
   * @public
   */
  FeatureNames?: string[] | undefined;

  /**
   * Parameter to request `ExpiresAt` in response. If `Enabled`, `GetRecord` will return the value of `ExpiresAt`, if it is not null. If `Disabled` and null, `GetRecord` will return null.
   *
   * @public
   */
  ExpirationTimeResponse?: ExpirationTimeResponse | undefined;
}

/**
 * @public
 */
export interface GetRecordResponse {
  /**
   * The record you requested. A list of `FeatureValues`.
   *
   * @public
   */
  Record?: FeatureValue[] | undefined;

  /**
   * The `ExpiresAt` ISO string of the requested record.
   *
   * @public
   */
  ExpiresAt?: string | undefined;
}

/**
 * @public
 */
export interface ListRecordsRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the feature group to list records from.
   *
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * The maximum number of record identifiers to return in a single page of results. For the `InMemory` tier, this value is a hint and not a strict requirement. The response may contain more or fewer results than the specified `MaxResults`.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token to resume pagination of `ListRecords` results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * If set to `true`, the result includes records that have been soft deleted.
   *
   * @public
   */
  IncludeSoftDeletedRecords?: boolean | undefined;
}

/**
 * @public
 */
export interface ListRecordsResponse {
  /**
   * A list of record identifier values for the records stored in the `OnlineStore`.
   *
   * @public
   */
  RecordIdentifiers: string[] | undefined;

  /**
   * A token to resume pagination if the response includes more record identifiers than `MaxResults`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutRecordRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the feature group that you want to insert the record into.
   *
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * List of FeatureValues to be inserted. This will be a full over-write. If you only want to update few of the feature values, do the following:
   *
   * - Use `GetRecord` to retrieve the latest record.
   * - Update the record returned from `GetRecord`.
   * - Use `PutRecord` to update feature values.
   *
   * @public
   */
  Record: FeatureValue[] | undefined;

  /**
   * A list of stores to which you're adding the record. By default, Feature Store adds the record to all of the stores that you're using for the `FeatureGroup`.
   *
   * @public
   */
  TargetStores?: TargetStore[] | undefined;

  /**
   * Time to live duration, where the record is hard deleted after the expiration time is reached; `ExpiresAt` = `EventTime` + `TtlDuration`. For information on HardDelete, see the [DeleteRecord](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_feature_store_DeleteRecord.html) API in the Amazon SageMaker API Reference guide.
   *
   * @public
   */
  TtlDuration?: TtlDuration | undefined;
}

/**
 * @public
 */
export interface UpdateRecordRequest {
  /**
   * The identifier for the feature group that contains the record to update. You can specify one of the following:
   *
   * - The feature group name.
   * - The feature group Amazon Resource Name (ARN).
   *
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * The value that uniquely identifies the record in the feature group. This must match the value defined by the feature group's record identifier feature.
   *
   * @public
   */
  RecordIdentifierValueAsString: string | undefined;

  /**
   * The feature values to write to the record.
   *
   * @public
   */
  Features: FeatureValue[] | undefined;

  /**
   * The target stores for the record update. By default, Amazon SageMaker Feature Store updates the record in all stores associated with the `FeatureGroup`.
   *
   * @public
   */
  TargetStores?: TargetStore[] | undefined;

  /**
   * The time-to-live (TTL) duration for the record. Amazon SageMaker Feature Store deletes the record when `EventTime` + `TtlDuration` elapses. If you omit this parameter, the record's existing TTL setting remains unchanged. For information about `HardDelete`, see the [DeleteRecord](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_feature_store_DeleteRecord.html) operation in the Amazon SageMaker API Reference.
   *
   * @public
   */
  TtlDuration?: TtlDuration | undefined;
}
