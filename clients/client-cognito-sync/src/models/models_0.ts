// smithy-typescript generated code
import { BulkPublishStatus, Operation, Platform, StreamingStatus } from "./enums";

/**
 * The input for the BulkPublish operation.
 * @public
 */
export interface BulkPublishRequest {
  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   * @public
   */
  IdentityPoolId: string | undefined;
}

/**
 * The output for the BulkPublish operation.
 * @public
 */
export interface BulkPublishResponse {
  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   * @public
   */
  IdentityPoolId?: string | undefined;
}

/**
 * A request to delete the specific
 *       dataset.
 * @public
 */
export interface DeleteDatasetRequest {
  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   * @public
   */
  IdentityId: string | undefined;

  /**
   * A string of up to 128 characters.
   *       Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.'
   *       (dot).
   * @public
   */
  DatasetName: string | undefined;
}

/**
 * A collection of data for an identity pool. An identity pool can
 *       have multiple datasets. A dataset is per identity and can be general or associated with a
 *       particular entity in an application (like a saved game). Datasets are automatically created if
 *       they don't exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value
 *       pairs.
 * @public
 */
export interface Dataset {
  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   * @public
   */
  IdentityId?: string | undefined;

  /**
   * A string of up to 128 characters. Allowed characters
   *       are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * Date on which the dataset was
   *       created.
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * Date when the dataset was last
   *       modified.
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The device that made the last change to this
   *       dataset.
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * Total size in bytes of the records in this
   *       dataset.
   * @public
   */
  DataStorage?: number | undefined;

  /**
   * Number of records in this dataset.
   * @public
   */
  NumRecords?: number | undefined;
}

/**
 * Response to a successful DeleteDataset
 *       request.
 * @public
 */
export interface DeleteDatasetResponse {
  /**
   * A collection of data for an identity pool.
   *       An identity pool can have multiple datasets. A dataset is per identity and can be general or
   *       associated with a particular entity in an application (like a saved game). Datasets are
   *       automatically created if they don't exist. Data is synced by dataset, and a dataset can hold
   *       up to 1MB of key-value pairs.
   * @public
   */
  Dataset?: Dataset | undefined;
}

/**
 * A request for meta data about a dataset (creation
 *       date, number of records, size) by owner and dataset name.
 * @public
 */
export interface DescribeDatasetRequest {
  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   * @public
   */
  IdentityId: string | undefined;

  /**
   * A string of up to 128 characters.
   *       Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.'
   *       (dot).
   * @public
   */
  DatasetName: string | undefined;
}

/**
 * Response to a successful DescribeDataset
 *       request.
 * @public
 */
export interface DescribeDatasetResponse {
  /**
   * Meta data for a collection of data for an
   *       identity. An identity can have multiple datasets. A dataset can be general or associated with
   *       a particular entity in an application (like a saved game). Datasets are automatically created
   *       if they don't exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value
   *       pairs.
   * @public
   */
  Dataset?: Dataset | undefined;
}

/**
 * A request for usage information about
 *       the identity pool.
 * @public
 */
export interface DescribeIdentityPoolUsageRequest {
  /**
   * A name-spaced GUID (for
   *       example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID
   *       generation is unique within a region.
   * @public
   */
  IdentityPoolId: string | undefined;
}

/**
 * Usage information for the identity
 *       pool.
 * @public
 */
export interface IdentityPoolUsage {
  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   * @public
   */
  IdentityPoolId?: string | undefined;

  /**
   * Number of sync sessions for the
   *       identity pool.
   * @public
   */
  SyncSessionsCount?: number | undefined;

  /**
   * Data storage information for the identity
   *       pool.
   * @public
   */
  DataStorage?: number | undefined;

  /**
   * Date on which the identity pool was
   *       last modified.
   * @public
   */
  LastModifiedDate?: Date | undefined;
}

/**
 * Response to a successful
 *       DescribeIdentityPoolUsage request.
 * @public
 */
export interface DescribeIdentityPoolUsageResponse {
  /**
   * Information about the
   *       usage of the identity pool.
   * @public
   */
  IdentityPoolUsage?: IdentityPoolUsage | undefined;
}

/**
 * A request for information about the usage of
 *       an identity pool.
 * @public
 */
export interface DescribeIdentityUsageRequest {
  /**
   * A name-spaced GUID (for
   *       example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID
   *       generation is unique within a region.
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   * @public
   */
  IdentityId: string | undefined;
}

/**
 * Usage information for the identity.
 * @public
 */
export interface IdentityUsage {
  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   * @public
   */
  IdentityId?: string | undefined;

  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   * @public
   */
  IdentityPoolId?: string | undefined;

  /**
   * Date on which the identity was last
   *       modified.
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * Number of datasets for the
   *       identity.
   * @public
   */
  DatasetCount?: number | undefined;

  /**
   * Total data storage for this
   *       identity.
   * @public
   */
  DataStorage?: number | undefined;
}

/**
 * The response to a successful
 *       DescribeIdentityUsage request.
 * @public
 */
export interface DescribeIdentityUsageResponse {
  /**
   * Usage information for the
   *       identity.
   * @public
   */
  IdentityUsage?: IdentityUsage | undefined;
}

/**
 * The input for the GetBulkPublishDetails operation.
 * @public
 */
export interface GetBulkPublishDetailsRequest {
  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   * @public
   */
  IdentityPoolId: string | undefined;
}

/**
 * The output for the GetBulkPublishDetails operation.
 * @public
 */
export interface GetBulkPublishDetailsResponse {
  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   * @public
   */
  IdentityPoolId?: string | undefined;

  /**
   * The date/time at which the last bulk publish was initiated.
   * @public
   */
  BulkPublishStartTime?: Date | undefined;

  /**
   * If BulkPublishStatus is SUCCEEDED, the time the last bulk publish operation completed.
   * @public
   */
  BulkPublishCompleteTime?: Date | undefined;

  /**
   * Status of the last bulk publish operation, valid values are:
   *       <p>NOT_STARTED - No bulk publish has been requested for this identity pool</p>
   *       <p>IN_PROGRESS - Data is being published to the configured stream</p>
   *       <p>SUCCEEDED - All data for the identity pool has been published to the configured stream</p>
   *       <p>FAILED - Some portion of the data has failed to publish, check FailureMessage for the cause.</p>
   * @public
   */
  BulkPublishStatus?: BulkPublishStatus | undefined;

  /**
   * If BulkPublishStatus is FAILED this field will contain the error message that caused the bulk publish to fail.
   * @public
   */
  FailureMessage?: string | undefined;
}

/**
 * <p>A request for a list of the configured Cognito Events</p>
 * @public
 */
export interface GetCognitoEventsRequest {
  /**
   * <p>The Cognito Identity Pool ID for the request</p>
   * @public
   */
  IdentityPoolId: string | undefined;
}

/**
 * <p>The response from the GetCognitoEvents request</p>
 * @public
 */
export interface GetCognitoEventsResponse {
  /**
   * <p>The Cognito Events returned from the GetCognitoEvents request</p>
   * @public
   */
  Events?: Record<string, string> | undefined;
}

/**
 * <p>The input for the GetIdentityPoolConfiguration operation.</p>
 * @public
 */
export interface GetIdentityPoolConfigurationRequest {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by
   *          Amazon Cognito. This is the ID of the pool for which to return a configuration.</p>
   * @public
   */
  IdentityPoolId: string | undefined;
}

/**
 * Configuration options for configure Cognito streams.
 * @public
 */
export interface CognitoStreams {
  /**
   * The name of the Cognito stream to receive updates. This stream must be in the developers account and in the same region as the identity pool.
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The ARN of the role Amazon Cognito can assume in order to publish to the stream. This role must grant access to Amazon Cognito (cognito-sync) to invoke PutRecord on your Cognito stream.
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * Status of the Cognito streams. Valid values are:
   *       <p>ENABLED - Streaming of updates to identity pool is enabled.</p>
   *       <p>DISABLED - Streaming of updates to identity pool is disabled. Bulk publish will also fail if StreamingStatus is DISABLED.</p>
   * @public
   */
  StreamingStatus?: StreamingStatus | undefined;
}

/**
 * <p>Configuration options to be applied to the identity pool.</p>
 * @public
 */
export interface PushSync {
  /**
   * <p>List of SNS platform application ARNs that could be used by clients.</p>
   * @public
   */
  ApplicationArns?: string[] | undefined;

  /**
   * <p>A role configured to allow Cognito to call SNS on behalf of the developer.</p>
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * <p>The output for the GetIdentityPoolConfiguration operation.</p>
 * @public
 */
export interface GetIdentityPoolConfigurationResponse {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by
   *          Amazon Cognito.</p>
   * @public
   */
  IdentityPoolId?: string | undefined;

  /**
   * <p>Options to apply to this identity pool for push synchronization.</p>
   * @public
   */
  PushSync?: PushSync | undefined;

  /**
   * Options to apply to this identity pool for Amazon Cognito streams.
   * @public
   */
  CognitoStreams?: CognitoStreams | undefined;
}

/**
 * Request for a list of datasets for an
 *       identity.
 * @public
 */
export interface ListDatasetsRequest {
  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   * @public
   */
  IdentityId: string | undefined;

  /**
   * A pagination token for obtaining the next
   *       page of results.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be
   *       returned.
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Returned for a successful ListDatasets
 *       request.
 * @public
 */
export interface ListDatasetsResponse {
  /**
   * A set of datasets.
   * @public
   */
  Datasets?: Dataset[] | undefined;

  /**
   * Number of datasets returned.
   * @public
   */
  Count?: number | undefined;

  /**
   * A pagination token for obtaining the next
   *       page of results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A request for usage information on an
 *       identity pool.
 * @public
 */
export interface ListIdentityPoolUsageRequest {
  /**
   * A pagination token for obtaining
   *       the next page of results.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to
   *       be returned.
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Returned for a successful
 *       ListIdentityPoolUsage request.
 * @public
 */
export interface ListIdentityPoolUsageResponse {
  /**
   * Usage information for
   *       the identity pools.
   * @public
   */
  IdentityPoolUsages?: IdentityPoolUsage[] | undefined;

  /**
   * The maximum number of results to
   *       be returned.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Total number of identities for the
   *       identity pool.
   * @public
   */
  Count?: number | undefined;

  /**
   * A pagination token for obtaining
   *       the next page of results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A request for a list of records.
 * @public
 */
export interface ListRecordsRequest {
  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   * @public
   */
  IdentityId: string | undefined;

  /**
   * A string of up to 128 characters. Allowed
   *       characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).
   * @public
   */
  DatasetName: string | undefined;

  /**
   * The last server sync count for this
   *       record.
   * @public
   */
  LastSyncCount?: number | undefined;

  /**
   * A pagination token for obtaining the next
   *       page of results.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be
   *       returned.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token containing a session ID,
   *       identity ID, and expiration.
   * @public
   */
  SyncSessionToken?: string | undefined;
}

/**
 * The basic data structure of a dataset.
 * @public
 */
export interface _Record {
  /**
   * The key for the record.
   * @public
   */
  Key?: string | undefined;

  /**
   * The value for the record.
   * @public
   */
  Value?: string | undefined;

  /**
   * The server sync count for this record.
   * @public
   */
  SyncCount?: number | undefined;

  /**
   * The date on which the record was last
   *       modified.
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The user/device that made the last change to this
   *       record.
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * The last modified date of the client
   *       device.
   * @public
   */
  DeviceLastModifiedDate?: Date | undefined;
}

/**
 * Returned for a successful
 *       ListRecordsRequest.
 * @public
 */
export interface ListRecordsResponse {
  /**
   * A list of all records.
   * @public
   */
  Records?: _Record[] | undefined;

  /**
   * A pagination token for obtaining the next
   *       page of results.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Total number of records.
   * @public
   */
  Count?: number | undefined;

  /**
   * Server sync count for this
   *       dataset.
   * @public
   */
  DatasetSyncCount?: number | undefined;

  /**
   * The user/device that made the last
   *       change to this record.
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * Names of merged
   *       datasets.
   * @public
   */
  MergedDatasetNames?: string[] | undefined;

  /**
   * Indicates whether the dataset
   *       exists.
   * @public
   */
  DatasetExists?: boolean | undefined;

  /**
   * A boolean value
   *       specifying whether to delete the dataset locally.
   * @public
   */
  DatasetDeletedAfterRequestedSyncCount?: boolean | undefined;

  /**
   * A token containing a session ID,
   *       identity ID, and expiration.
   * @public
   */
  SyncSessionToken?: string | undefined;
}

/**
 * <p>A request to RegisterDevice.</p>
 * @public
 */
export interface RegisterDeviceRequest {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by
   *          Amazon Cognito. Here, the ID of the pool that the identity belongs to.</p>
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>The unique ID for this identity.</p>
   * @public
   */
  IdentityId: string | undefined;

  /**
   * <p>The SNS platform type (e.g. GCM, SDM, APNS, APNS_SANDBOX).</p>
   * @public
   */
  Platform: Platform | undefined;

  /**
   * <p>The push token.</p>
   * @public
   */
  Token: string | undefined;
}

/**
 * <p>Response to a RegisterDevice request.</p>
 * @public
 */
export interface RegisterDeviceResponse {
  /**
   * <p>The unique ID generated for this device by Cognito.</p>
   * @public
   */
  DeviceId?: string | undefined;
}

/**
 * <p>A request to configure Cognito Events"</p>"
 * @public
 */
export interface SetCognitoEventsRequest {
  /**
   * <p>The Cognito Identity Pool to use when configuring Cognito Events</p>
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>The events to configure</p>
   * @public
   */
  Events: Record<string, string> | undefined;
}

/**
 * <p>The input for the SetIdentityPoolConfiguration operation.</p>
 * @public
 */
export interface SetIdentityPoolConfigurationRequest {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by
   *          Amazon Cognito. This is the ID of the pool to modify.</p>
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>Options to apply to this identity pool for push synchronization.</p>
   * @public
   */
  PushSync?: PushSync | undefined;

  /**
   * Options to apply to this identity pool for Amazon Cognito streams.
   * @public
   */
  CognitoStreams?: CognitoStreams | undefined;
}

/**
 * <p>The output for the SetIdentityPoolConfiguration operation</p>
 * @public
 */
export interface SetIdentityPoolConfigurationResponse {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by
   *          Amazon Cognito.</p>
   * @public
   */
  IdentityPoolId?: string | undefined;

  /**
   * <p>Options to apply to this identity pool for push synchronization.</p>
   * @public
   */
  PushSync?: PushSync | undefined;

  /**
   * Options to apply to this identity pool for Amazon Cognito streams.
   * @public
   */
  CognitoStreams?: CognitoStreams | undefined;
}

/**
 * <p>A request to SubscribeToDatasetRequest.</p>
 * @public
 */
export interface SubscribeToDatasetRequest {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by
   *          Amazon Cognito. The ID of the pool to which the identity belongs.</p>
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>Unique ID for this identity.</p>
   * @public
   */
  IdentityId: string | undefined;

  /**
   * <p>The name of the dataset to subcribe to.</p>
   * @public
   */
  DatasetName: string | undefined;

  /**
   * <p>The unique ID generated for this device by Cognito.</p>
   * @public
   */
  DeviceId: string | undefined;
}

/**
 * <p>Response to a SubscribeToDataset request.</p>
 * @public
 */
export interface SubscribeToDatasetResponse {}

/**
 * <p>A request to UnsubscribeFromDataset.</p>
 * @public
 */
export interface UnsubscribeFromDatasetRequest {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by
   *          Amazon Cognito. The ID of the pool to which this identity belongs.</p>
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>Unique ID for this identity.</p>
   * @public
   */
  IdentityId: string | undefined;

  /**
   * <p>The name of the dataset from which to unsubcribe.</p>
   * @public
   */
  DatasetName: string | undefined;

  /**
   * <p>The unique ID generated for this device by Cognito.</p>
   * @public
   */
  DeviceId: string | undefined;
}

/**
 * <p>Response to an UnsubscribeFromDataset request.</p>
 * @public
 */
export interface UnsubscribeFromDatasetResponse {}

/**
 * An update operation for a record.
 * @public
 */
export interface RecordPatch {
  /**
   * An operation, either replace or remove.
   * @public
   */
  Op: Operation | undefined;

  /**
   * The key associated with the record patch.
   * @public
   */
  Key: string | undefined;

  /**
   * The value associated with the record
   *       patch.
   * @public
   */
  Value?: string | undefined;

  /**
   * Last known server sync count for this record. Set
   *       to 0 if unknown.
   * @public
   */
  SyncCount: number | undefined;

  /**
   * The last modified date of the client
   *       device.
   * @public
   */
  DeviceLastModifiedDate?: Date | undefined;
}

/**
 * A request to post updates to records or add and
 *       delete records for a dataset and user.
 * @public
 */
export interface UpdateRecordsRequest {
  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   * @public
   */
  IdentityId: string | undefined;

  /**
   * A string of up to 128 characters.
   *       Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.'
   *       (dot).
   * @public
   */
  DatasetName: string | undefined;

  /**
   * <p>The unique ID generated for this device by Cognito.</p>
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * A list of patch
   *       operations.
   * @public
   */
  RecordPatches?: RecordPatch[] | undefined;

  /**
   * The SyncSessionToken returned by a
   *       previous call to ListRecords for this dataset and identity.
   * @public
   */
  SyncSessionToken: string | undefined;

  /**
   * Intended to supply a device ID that
   *       will populate the lastModifiedBy field referenced in other methods. The
   *          ClientContext field is not yet implemented.
   * @public
   */
  ClientContext?: string | undefined;
}

/**
 * Returned for a successful
 *       UpdateRecordsRequest.
 * @public
 */
export interface UpdateRecordsResponse {
  /**
   * A list of records that have been
   *       updated.
   * @public
   */
  Records?: _Record[] | undefined;
}
