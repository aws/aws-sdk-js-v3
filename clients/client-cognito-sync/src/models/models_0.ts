// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { CognitoSyncServiceException as __BaseException } from "./CognitoSyncServiceException";

/**
 * An exception thrown when a bulk publish operation is requested less than 24 hours after a previous bulk publish operation completed successfully.
 */
export class AlreadyStreamedException extends __BaseException {
  readonly name: "AlreadyStreamedException" = "AlreadyStreamedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AlreadyStreamedException, __BaseException>) {
    super({
      name: "AlreadyStreamedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AlreadyStreamedException.prototype);
  }
}

/**
 * The input for the BulkPublish operation.
 */
export interface BulkPublishRequest {
  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityPoolId: string | undefined;
}

/**
 * The output for the BulkPublish operation.
 */
export interface BulkPublishResponse {
  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityPoolId?: string;
}

/**
 * An exception thrown when there is an IN_PROGRESS bulk publish operation for the given identity pool.
 */
export class DuplicateRequestException extends __BaseException {
  readonly name: "DuplicateRequestException" = "DuplicateRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateRequestException, __BaseException>) {
    super({
      name: "DuplicateRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateRequestException.prototype);
  }
}

/**
 * Indicates an internal service
 *       error.
 */
export class InternalErrorException extends __BaseException {
  readonly name: "InternalErrorException" = "InternalErrorException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalErrorException, __BaseException>) {
    super({
      name: "InternalErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalErrorException.prototype);
  }
}

/**
 * Thrown when a request parameter does not comply
 *       with the associated constraints.
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
  }
}

/**
 * Thrown when a user is not authorized to access the
 *       requested resource.
 */
export class NotAuthorizedException extends __BaseException {
  readonly name: "NotAuthorizedException" = "NotAuthorizedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotAuthorizedException, __BaseException>) {
    super({
      name: "NotAuthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotAuthorizedException.prototype);
  }
}

/**
 * Thrown if the resource doesn't
 *       exist.
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * A request to delete the specific
 *       dataset.
 */
export interface DeleteDatasetRequest {
  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityPoolId: string | undefined;

  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityId: string | undefined;

  /**
   * A string of up to 128 characters.
   *       Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.'
   *       (dot).
   */
  DatasetName: string | undefined;
}

/**
 * A collection of data for an identity pool. An identity pool can
 *       have multiple datasets. A dataset is per identity and can be general or associated with a
 *       particular entity in an application (like a saved game). Datasets are automatically created if
 *       they don't exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value
 *       pairs.
 */
export interface Dataset {
  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityId?: string;

  /**
   * A string of up to 128 characters. Allowed characters
   *       are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).
   */
  DatasetName?: string;

  /**
   * Date on which the dataset was
   *       created.
   */
  CreationDate?: Date;

  /**
   * Date when the dataset was last
   *       modified.
   */
  LastModifiedDate?: Date;

  /**
   * The device that made the last change to this
   *       dataset.
   */
  LastModifiedBy?: string;

  /**
   * Total size in bytes of the records in this
   *       dataset.
   */
  DataStorage?: number;

  /**
   * Number of records in this dataset.
   */
  NumRecords?: number;
}

/**
 * Response to a successful DeleteDataset
 *       request.
 */
export interface DeleteDatasetResponse {
  /**
   * A collection of data for an identity pool.
   *       An identity pool can have multiple datasets. A dataset is per identity and can be general or
   *       associated with a particular entity in an application (like a saved game). Datasets are
   *       automatically created if they don't exist. Data is synced by dataset, and a dataset can hold
   *       up to 1MB of key-value pairs.
   */
  Dataset?: Dataset;
}

/**
 * Thrown if an update can't be applied because
 *       the resource was changed by another call and this would result in a conflict.
 */
export class ResourceConflictException extends __BaseException {
  readonly name: "ResourceConflictException" = "ResourceConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceConflictException, __BaseException>) {
    super({
      name: "ResourceConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceConflictException.prototype);
  }
}

/**
 * Thrown if the request is
 *       throttled.
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
  }
}

/**
 * A request for meta data about a dataset (creation
 *       date, number of records, size) by owner and dataset name.
 */
export interface DescribeDatasetRequest {
  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityPoolId: string | undefined;

  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityId: string | undefined;

  /**
   * A string of up to 128 characters.
   *       Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.'
   *       (dot).
   */
  DatasetName: string | undefined;
}

/**
 * Response to a successful DescribeDataset
 *       request.
 */
export interface DescribeDatasetResponse {
  /**
   * Meta data for a collection of data for an
   *       identity. An identity can have multiple datasets. A dataset can be general or associated with
   *       a particular entity in an application (like a saved game). Datasets are automatically created
   *       if they don't exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value
   *       pairs.
   */
  Dataset?: Dataset;
}

/**
 * A request for usage information about
 *       the identity pool.
 */
export interface DescribeIdentityPoolUsageRequest {
  /**
   * A name-spaced GUID (for
   *       example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID
   *       generation is unique within a region.
   */
  IdentityPoolId: string | undefined;
}

/**
 * Usage information for the identity
 *       pool.
 */
export interface IdentityPoolUsage {
  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityPoolId?: string;

  /**
   * Number of sync sessions for the
   *       identity pool.
   */
  SyncSessionsCount?: number;

  /**
   * Data storage information for the identity
   *       pool.
   */
  DataStorage?: number;

  /**
   * Date on which the identity pool was
   *       last modified.
   */
  LastModifiedDate?: Date;
}

/**
 * Response to a successful
 *       DescribeIdentityPoolUsage request.
 */
export interface DescribeIdentityPoolUsageResponse {
  /**
   * Information about the
   *       usage of the identity pool.
   */
  IdentityPoolUsage?: IdentityPoolUsage;
}

/**
 * A request for information about the usage of
 *       an identity pool.
 */
export interface DescribeIdentityUsageRequest {
  /**
   * A name-spaced GUID (for
   *       example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID
   *       generation is unique within a region.
   */
  IdentityPoolId: string | undefined;

  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityId: string | undefined;
}

/**
 * Usage information for the identity.
 */
export interface IdentityUsage {
  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityId?: string;

  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityPoolId?: string;

  /**
   * Date on which the identity was last
   *       modified.
   */
  LastModifiedDate?: Date;

  /**
   * Number of datasets for the
   *       identity.
   */
  DatasetCount?: number;

  /**
   * Total data storage for this
   *       identity.
   */
  DataStorage?: number;
}

/**
 * The response to a successful
 *       DescribeIdentityUsage request.
 */
export interface DescribeIdentityUsageResponse {
  /**
   * Usage information for the
   *       identity.
   */
  IdentityUsage?: IdentityUsage;
}

/**
 * The input for the GetBulkPublishDetails operation.
 */
export interface GetBulkPublishDetailsRequest {
  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityPoolId: string | undefined;
}

export enum BulkPublishStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_STARTED = "NOT_STARTED",
  SUCCEEDED = "SUCCEEDED",
}

/**
 * The output for the GetBulkPublishDetails operation.
 */
export interface GetBulkPublishDetailsResponse {
  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityPoolId?: string;

  /**
   * The date/time at which the last bulk publish was initiated.
   */
  BulkPublishStartTime?: Date;

  /**
   * If BulkPublishStatus is SUCCEEDED, the time the last bulk publish operation completed.
   */
  BulkPublishCompleteTime?: Date;

  /**
   * Status of the last bulk publish operation, valid values are:
   *       <p>NOT_STARTED - No bulk publish has been requested for this identity pool</p>
   *       <p>IN_PROGRESS - Data is being published to the configured stream</p>
   *       <p>SUCCEEDED - All data for the identity pool has been published to the configured stream</p>
   *       <p>FAILED - Some portion of the data has failed to publish, check FailureMessage for the cause.</p>
   */
  BulkPublishStatus?: BulkPublishStatus | string;

  /**
   * If BulkPublishStatus is FAILED this field will contain the error message that caused the bulk publish to fail.
   */
  FailureMessage?: string;
}

/**
 * <p>A request for a list of the configured Cognito Events</p>
 */
export interface GetCognitoEventsRequest {
  /**
   * <p>The Cognito Identity Pool ID for the request</p>
   */
  IdentityPoolId: string | undefined;
}

/**
 * <p>The response from the GetCognitoEvents request</p>
 */
export interface GetCognitoEventsResponse {
  /**
   * <p>The Cognito Events returned from the GetCognitoEvents request</p>
   */
  Events?: Record<string, string>;
}

/**
 * <p>The input for the GetIdentityPoolConfiguration operation.</p>
 */
export interface GetIdentityPoolConfigurationRequest {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by
   *          Amazon Cognito. This is the ID of the pool for which to return a configuration.</p>
   */
  IdentityPoolId: string | undefined;
}

export type StreamingStatus = "DISABLED" | "ENABLED";

/**
 * Configuration options for configure Cognito streams.
 */
export interface CognitoStreams {
  /**
   * The name of the Cognito stream to receive updates. This stream must be in the developers account and in the same region as the identity pool.
   */
  StreamName?: string;

  /**
   * The ARN of the role Amazon Cognito can assume in order to publish to the stream. This role must grant access to Amazon Cognito (cognito-sync) to invoke PutRecord on your Cognito stream.
   */
  RoleArn?: string;

  /**
   * Status of the Cognito streams. Valid values are:
   *       <p>ENABLED - Streaming of updates to identity pool is enabled.</p>
   *       <p>DISABLED - Streaming of updates to identity pool is disabled. Bulk publish will also fail if StreamingStatus is DISABLED.</p>
   */
  StreamingStatus?: StreamingStatus | string;
}

/**
 * <p>Configuration options to be applied to the identity pool.</p>
 */
export interface PushSync {
  /**
   * <p>List of SNS platform application ARNs that could be used by clients.</p>
   */
  ApplicationArns?: string[];

  /**
   * <p>A role configured to allow Cognito to call SNS on behalf of the developer.</p>
   */
  RoleArn?: string;
}

/**
 * <p>The output for the GetIdentityPoolConfiguration operation.</p>
 */
export interface GetIdentityPoolConfigurationResponse {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by
   *          Amazon Cognito.</p>
   */
  IdentityPoolId?: string;

  /**
   * <p>Options to apply to this identity pool for push synchronization.</p>
   */
  PushSync?: PushSync;

  /**
   * Options to apply to this identity pool for Amazon Cognito streams.
   */
  CognitoStreams?: CognitoStreams;
}

/**
 * Request for a list of datasets for an
 *       identity.
 */
export interface ListDatasetsRequest {
  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityPoolId: string | undefined;

  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityId: string | undefined;

  /**
   * A pagination token for obtaining the next
   *       page of results.
   */
  NextToken?: string;

  /**
   * The maximum number of results to be
   *       returned.
   */
  MaxResults?: number;
}

/**
 * Returned for a successful ListDatasets
 *       request.
 */
export interface ListDatasetsResponse {
  /**
   * A set of datasets.
   */
  Datasets?: Dataset[];

  /**
   * Number of datasets returned.
   */
  Count?: number;

  /**
   * A pagination token for obtaining the next
   *       page of results.
   */
  NextToken?: string;
}

/**
 * A request for usage information on an
 *       identity pool.
 */
export interface ListIdentityPoolUsageRequest {
  /**
   * A pagination token for obtaining
   *       the next page of results.
   */
  NextToken?: string;

  /**
   * The maximum number of results to
   *       be returned.
   */
  MaxResults?: number;
}

/**
 * Returned for a successful
 *       ListIdentityPoolUsage request.
 */
export interface ListIdentityPoolUsageResponse {
  /**
   * Usage information for
   *       the identity pools.
   */
  IdentityPoolUsages?: IdentityPoolUsage[];

  /**
   * The maximum number of results to
   *       be returned.
   */
  MaxResults?: number;

  /**
   * Total number of identities for the
   *       identity pool.
   */
  Count?: number;

  /**
   * A pagination token for obtaining
   *       the next page of results.
   */
  NextToken?: string;
}

/**
 * A request for a list of records.
 */
export interface ListRecordsRequest {
  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityPoolId: string | undefined;

  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityId: string | undefined;

  /**
   * A string of up to 128 characters. Allowed
   *       characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).
   */
  DatasetName: string | undefined;

  /**
   * The last server sync count for this
   *       record.
   */
  LastSyncCount?: number;

  /**
   * A pagination token for obtaining the next
   *       page of results.
   */
  NextToken?: string;

  /**
   * The maximum number of results to be
   *       returned.
   */
  MaxResults?: number;

  /**
   * A token containing a session ID,
   *       identity ID, and expiration.
   */
  SyncSessionToken?: string;
}

/**
 * The basic data structure of a dataset.
 */
export interface _Record {
  /**
   * The key for the record.
   */
  Key?: string;

  /**
   * The value for the record.
   */
  Value?: string;

  /**
   * The server sync count for this record.
   */
  SyncCount?: number;

  /**
   * The date on which the record was last
   *       modified.
   */
  LastModifiedDate?: Date;

  /**
   * The user/device that made the last change to this
   *       record.
   */
  LastModifiedBy?: string;

  /**
   * The last modified date of the client
   *       device.
   */
  DeviceLastModifiedDate?: Date;
}

/**
 * Returned for a successful
 *       ListRecordsRequest.
 */
export interface ListRecordsResponse {
  /**
   * A list of all records.
   */
  Records?: _Record[];

  /**
   * A pagination token for obtaining the next
   *       page of results.
   */
  NextToken?: string;

  /**
   * Total number of records.
   */
  Count?: number;

  /**
   * Server sync count for this
   *       dataset.
   */
  DatasetSyncCount?: number;

  /**
   * The user/device that made the last
   *       change to this record.
   */
  LastModifiedBy?: string;

  /**
   * Names of merged
   *       datasets.
   */
  MergedDatasetNames?: string[];

  /**
   * Indicates whether the dataset
   *       exists.
   */
  DatasetExists?: boolean;

  /**
   * A boolean value
   *       specifying whether to delete the dataset locally.
   */
  DatasetDeletedAfterRequestedSyncCount?: boolean;

  /**
   * A token containing a session ID,
   *       identity ID, and expiration.
   */
  SyncSessionToken?: string;
}

export class InvalidConfigurationException extends __BaseException {
  readonly name: "InvalidConfigurationException" = "InvalidConfigurationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidConfigurationException, __BaseException>) {
    super({
      name: "InvalidConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidConfigurationException.prototype);
  }
}

export type Platform = "ADM" | "APNS" | "APNS_SANDBOX" | "GCM";

/**
 * <p>A request to RegisterDevice.</p>
 */
export interface RegisterDeviceRequest {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by
   *          Amazon Cognito. Here, the ID of the pool that the identity belongs to.</p>
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>The unique ID for this identity.</p>
   */
  IdentityId: string | undefined;

  /**
   * <p>The SNS platform type (e.g. GCM, SDM, APNS, APNS_SANDBOX).</p>
   */
  Platform: Platform | string | undefined;

  /**
   * <p>The push token.</p>
   */
  Token: string | undefined;
}

/**
 * <p>Response to a RegisterDevice request.</p>
 */
export interface RegisterDeviceResponse {
  /**
   * <p>The unique ID generated for this device by Cognito.</p>
   */
  DeviceId?: string;
}

/**
 * <p>A request to configure Cognito Events"</p>"
 */
export interface SetCognitoEventsRequest {
  /**
   * <p>The Cognito Identity Pool to use when configuring Cognito Events</p>
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>The events to configure</p>
   */
  Events: Record<string, string> | undefined;
}

/**
 * <p>Thrown if there are parallel requests to modify a resource.</p>
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
  }
}

/**
 * <p>The input for the SetIdentityPoolConfiguration operation.</p>
 */
export interface SetIdentityPoolConfigurationRequest {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by
   *          Amazon Cognito. This is the ID of the pool to modify.</p>
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>Options to apply to this identity pool for push synchronization.</p>
   */
  PushSync?: PushSync;

  /**
   * Options to apply to this identity pool for Amazon Cognito streams.
   */
  CognitoStreams?: CognitoStreams;
}

/**
 * <p>The output for the SetIdentityPoolConfiguration operation</p>
 */
export interface SetIdentityPoolConfigurationResponse {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by
   *          Amazon Cognito.</p>
   */
  IdentityPoolId?: string;

  /**
   * <p>Options to apply to this identity pool for push synchronization.</p>
   */
  PushSync?: PushSync;

  /**
   * Options to apply to this identity pool for Amazon Cognito streams.
   */
  CognitoStreams?: CognitoStreams;
}

/**
 * <p>A request to SubscribeToDatasetRequest.</p>
 */
export interface SubscribeToDatasetRequest {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by
   *          Amazon Cognito. The ID of the pool to which the identity belongs.</p>
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>Unique ID for this identity.</p>
   */
  IdentityId: string | undefined;

  /**
   * <p>The name of the dataset to subcribe to.</p>
   */
  DatasetName: string | undefined;

  /**
   * <p>The unique ID generated for this device by Cognito.</p>
   */
  DeviceId: string | undefined;
}

/**
 * <p>Response to a SubscribeToDataset request.</p>
 */
export interface SubscribeToDatasetResponse {}

/**
 * <p>A request to UnsubscribeFromDataset.</p>
 */
export interface UnsubscribeFromDatasetRequest {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by
   *          Amazon Cognito. The ID of the pool to which this identity belongs.</p>
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>Unique ID for this identity.</p>
   */
  IdentityId: string | undefined;

  /**
   * <p>The name of the dataset from which to unsubcribe.</p>
   */
  DatasetName: string | undefined;

  /**
   * <p>The unique ID generated for this device by Cognito.</p>
   */
  DeviceId: string | undefined;
}

/**
 * <p>Response to an UnsubscribeFromDataset request.</p>
 */
export interface UnsubscribeFromDatasetResponse {}

/**
 * <p>The AWS Lambda function returned invalid output or an exception.</p>
 */
export class InvalidLambdaFunctionOutputException extends __BaseException {
  readonly name: "InvalidLambdaFunctionOutputException" = "InvalidLambdaFunctionOutputException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLambdaFunctionOutputException, __BaseException>) {
    super({
      name: "InvalidLambdaFunctionOutputException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLambdaFunctionOutputException.prototype);
  }
}

/**
 * <p>AWS Lambda throttled your account, please contact AWS Support</p>
 */
export class LambdaThrottledException extends __BaseException {
  readonly name: "LambdaThrottledException" = "LambdaThrottledException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LambdaThrottledException, __BaseException>) {
    super({
      name: "LambdaThrottledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LambdaThrottledException.prototype);
  }
}

/**
 * Thrown when the limit on the number of objects or
 *       operations has been exceeded.
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

export type Operation = "remove" | "replace";

/**
 * An update operation for a record.
 */
export interface RecordPatch {
  /**
   * An operation, either replace or remove.
   */
  Op: Operation | string | undefined;

  /**
   * The key associated with the record patch.
   */
  Key: string | undefined;

  /**
   * The value associated with the record
   *       patch.
   */
  Value?: string;

  /**
   * Last known server sync count for this record. Set
   *       to 0 if unknown.
   */
  SyncCount: number | undefined;

  /**
   * The last modified date of the client
   *       device.
   */
  DeviceLastModifiedDate?: Date;
}

/**
 * A request to post updates to records or add and
 *       delete records for a dataset and user.
 */
export interface UpdateRecordsRequest {
  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityPoolId: string | undefined;

  /**
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityId: string | undefined;

  /**
   * A string of up to 128 characters.
   *       Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.'
   *       (dot).
   */
  DatasetName: string | undefined;

  /**
   * <p>The unique ID generated for this device by Cognito.</p>
   */
  DeviceId?: string;

  /**
   * A list of patch
   *       operations.
   */
  RecordPatches?: RecordPatch[];

  /**
   * The SyncSessionToken returned by a
   *       previous call to ListRecords for this dataset and identity.
   */
  SyncSessionToken: string | undefined;

  /**
   * Intended to supply a device ID that
   *       will populate the lastModifiedBy field referenced in other methods. The
   *          ClientContext field is not yet implemented.
   */
  ClientContext?: string;
}

/**
 * Returned for a successful
 *       UpdateRecordsRequest.
 */
export interface UpdateRecordsResponse {
  /**
   * A list of records that have been
   *       updated.
   */
  Records?: _Record[];
}

/**
 * @internal
 */
export const BulkPublishRequestFilterSensitiveLog = (obj: BulkPublishRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BulkPublishResponseFilterSensitiveLog = (obj: BulkPublishResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDatasetRequestFilterSensitiveLog = (obj: DeleteDatasetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetFilterSensitiveLog = (obj: Dataset): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDatasetResponseFilterSensitiveLog = (obj: DeleteDatasetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDatasetRequestFilterSensitiveLog = (obj: DescribeDatasetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDatasetResponseFilterSensitiveLog = (obj: DescribeDatasetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeIdentityPoolUsageRequestFilterSensitiveLog = (obj: DescribeIdentityPoolUsageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IdentityPoolUsageFilterSensitiveLog = (obj: IdentityPoolUsage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeIdentityPoolUsageResponseFilterSensitiveLog = (obj: DescribeIdentityPoolUsageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeIdentityUsageRequestFilterSensitiveLog = (obj: DescribeIdentityUsageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IdentityUsageFilterSensitiveLog = (obj: IdentityUsage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeIdentityUsageResponseFilterSensitiveLog = (obj: DescribeIdentityUsageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBulkPublishDetailsRequestFilterSensitiveLog = (obj: GetBulkPublishDetailsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBulkPublishDetailsResponseFilterSensitiveLog = (obj: GetBulkPublishDetailsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCognitoEventsRequestFilterSensitiveLog = (obj: GetCognitoEventsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCognitoEventsResponseFilterSensitiveLog = (obj: GetCognitoEventsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetIdentityPoolConfigurationRequestFilterSensitiveLog = (
  obj: GetIdentityPoolConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CognitoStreamsFilterSensitiveLog = (obj: CognitoStreams): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PushSyncFilterSensitiveLog = (obj: PushSync): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetIdentityPoolConfigurationResponseFilterSensitiveLog = (
  obj: GetIdentityPoolConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDatasetsRequestFilterSensitiveLog = (obj: ListDatasetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDatasetsResponseFilterSensitiveLog = (obj: ListDatasetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListIdentityPoolUsageRequestFilterSensitiveLog = (obj: ListIdentityPoolUsageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListIdentityPoolUsageResponseFilterSensitiveLog = (obj: ListIdentityPoolUsageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRecordsRequestFilterSensitiveLog = (obj: ListRecordsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const _RecordFilterSensitiveLog = (obj: _Record): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRecordsResponseFilterSensitiveLog = (obj: ListRecordsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterDeviceRequestFilterSensitiveLog = (obj: RegisterDeviceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterDeviceResponseFilterSensitiveLog = (obj: RegisterDeviceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetCognitoEventsRequestFilterSensitiveLog = (obj: SetCognitoEventsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetIdentityPoolConfigurationRequestFilterSensitiveLog = (
  obj: SetIdentityPoolConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetIdentityPoolConfigurationResponseFilterSensitiveLog = (
  obj: SetIdentityPoolConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubscribeToDatasetRequestFilterSensitiveLog = (obj: SubscribeToDatasetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubscribeToDatasetResponseFilterSensitiveLog = (obj: SubscribeToDatasetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnsubscribeFromDatasetRequestFilterSensitiveLog = (obj: UnsubscribeFromDatasetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnsubscribeFromDatasetResponseFilterSensitiveLog = (obj: UnsubscribeFromDatasetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecordPatchFilterSensitiveLog = (obj: RecordPatch): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRecordsRequestFilterSensitiveLog = (obj: UpdateRecordsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRecordsResponseFilterSensitiveLog = (obj: UpdateRecordsResponse): any => ({
  ...obj,
});
