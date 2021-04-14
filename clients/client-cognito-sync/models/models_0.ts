import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * An exception thrown when a bulk publish operation is requested less than 24 hours after a previous bulk publish operation completed successfully.
 */
export interface AlreadyStreamedException extends __SmithyException, $MetadataBearer {
  name: "AlreadyStreamedException";
  $fault: "client";
  /**
   * The message associated with the AlreadyStreamedException exception.
   */
  message: string | undefined;
}

export namespace AlreadyStreamedException {
  export const filterSensitiveLog = (obj: AlreadyStreamedException): any => ({
    ...obj,
  });
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

export namespace BulkPublishRequest {
  export const filterSensitiveLog = (obj: BulkPublishRequest): any => ({
    ...obj,
  });
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

export namespace BulkPublishResponse {
  export const filterSensitiveLog = (obj: BulkPublishResponse): any => ({
    ...obj,
  });
}

/**
 * An exception thrown when there is an IN_PROGRESS bulk publish operation for the given identity pool.
 */
export interface DuplicateRequestException extends __SmithyException, $MetadataBearer {
  name: "DuplicateRequestException";
  $fault: "client";
  /**
   * The message associated with the DuplicateRequestException exception.
   */
  message: string | undefined;
}

export namespace DuplicateRequestException {
  export const filterSensitiveLog = (obj: DuplicateRequestException): any => ({
    ...obj,
  });
}

/**
 * Indicates an internal service
 *       error.
 */
export interface InternalErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalErrorException";
  $fault: "server";
  /**
   * Message returned by
   *       InternalErrorException.
   */
  message: string | undefined;
}

export namespace InternalErrorException {
  export const filterSensitiveLog = (obj: InternalErrorException): any => ({
    ...obj,
  });
}

/**
 * Thrown when a request parameter does not comply
 *       with the associated constraints.
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  /**
   * Message returned by
   *       InvalidParameterException.
   */
  message: string | undefined;
}

export namespace InvalidParameterException {
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj,
  });
}

/**
 * Thrown when a user is not authorized to access the
 *       requested resource.
 */
export interface NotAuthorizedException extends __SmithyException, $MetadataBearer {
  name: "NotAuthorizedException";
  $fault: "client";
  /**
   * The message returned by a
   *       NotAuthorizedException.
   */
  message: string | undefined;
}

export namespace NotAuthorizedException {
  export const filterSensitiveLog = (obj: NotAuthorizedException): any => ({
    ...obj,
  });
}

/**
 * Thrown if the resource doesn't
 *       exist.
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * Message returned by a
   *       ResourceNotFoundException.
   */
  message: string | undefined;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
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

export namespace DeleteDatasetRequest {
  export const filterSensitiveLog = (obj: DeleteDatasetRequest): any => ({
    ...obj,
  });
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

export namespace Dataset {
  export const filterSensitiveLog = (obj: Dataset): any => ({
    ...obj,
  });
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

export namespace DeleteDatasetResponse {
  export const filterSensitiveLog = (obj: DeleteDatasetResponse): any => ({
    ...obj,
  });
}

/**
 * Thrown if an update can't be applied because
 *       the resource was changed by another call and this would result in a conflict.
 */
export interface ResourceConflictException extends __SmithyException, $MetadataBearer {
  name: "ResourceConflictException";
  $fault: "client";
  /**
   * The message returned by a
   *       ResourceConflictException.
   */
  message: string | undefined;
}

export namespace ResourceConflictException {
  export const filterSensitiveLog = (obj: ResourceConflictException): any => ({
    ...obj,
  });
}

/**
 * Thrown if the request is
 *       throttled.
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  /**
   * Message returned by a
   *       TooManyRequestsException.
   */
  message: string | undefined;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
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

export namespace DescribeDatasetRequest {
  export const filterSensitiveLog = (obj: DescribeDatasetRequest): any => ({
    ...obj,
  });
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

export namespace DescribeDatasetResponse {
  export const filterSensitiveLog = (obj: DescribeDatasetResponse): any => ({
    ...obj,
  });
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

export namespace DescribeIdentityPoolUsageRequest {
  export const filterSensitiveLog = (obj: DescribeIdentityPoolUsageRequest): any => ({
    ...obj,
  });
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

export namespace IdentityPoolUsage {
  export const filterSensitiveLog = (obj: IdentityPoolUsage): any => ({
    ...obj,
  });
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

export namespace DescribeIdentityPoolUsageResponse {
  export const filterSensitiveLog = (obj: DescribeIdentityPoolUsageResponse): any => ({
    ...obj,
  });
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

export namespace DescribeIdentityUsageRequest {
  export const filterSensitiveLog = (obj: DescribeIdentityUsageRequest): any => ({
    ...obj,
  });
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

export namespace IdentityUsage {
  export const filterSensitiveLog = (obj: IdentityUsage): any => ({
    ...obj,
  });
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

export namespace DescribeIdentityUsageResponse {
  export const filterSensitiveLog = (obj: DescribeIdentityUsageResponse): any => ({
    ...obj,
  });
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

export namespace GetBulkPublishDetailsRequest {
  export const filterSensitiveLog = (obj: GetBulkPublishDetailsRequest): any => ({
    ...obj,
  });
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

export namespace GetBulkPublishDetailsResponse {
  export const filterSensitiveLog = (obj: GetBulkPublishDetailsResponse): any => ({
    ...obj,
  });
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

export namespace GetCognitoEventsRequest {
  export const filterSensitiveLog = (obj: GetCognitoEventsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The response from the GetCognitoEvents request</p>
 */
export interface GetCognitoEventsResponse {
  /**
   * <p>The Cognito Events returned from the GetCognitoEvents request</p>
   */
  Events?: { [key: string]: string };
}

export namespace GetCognitoEventsResponse {
  export const filterSensitiveLog = (obj: GetCognitoEventsResponse): any => ({
    ...obj,
  });
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

export namespace GetIdentityPoolConfigurationRequest {
  export const filterSensitiveLog = (obj: GetIdentityPoolConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace CognitoStreams {
  export const filterSensitiveLog = (obj: CognitoStreams): any => ({
    ...obj,
  });
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

export namespace PushSync {
  export const filterSensitiveLog = (obj: PushSync): any => ({
    ...obj,
  });
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

export namespace GetIdentityPoolConfigurationResponse {
  export const filterSensitiveLog = (obj: GetIdentityPoolConfigurationResponse): any => ({
    ...obj,
  });
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

export namespace ListDatasetsRequest {
  export const filterSensitiveLog = (obj: ListDatasetsRequest): any => ({
    ...obj,
  });
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

export namespace ListDatasetsResponse {
  export const filterSensitiveLog = (obj: ListDatasetsResponse): any => ({
    ...obj,
  });
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

export namespace ListIdentityPoolUsageRequest {
  export const filterSensitiveLog = (obj: ListIdentityPoolUsageRequest): any => ({
    ...obj,
  });
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

export namespace ListIdentityPoolUsageResponse {
  export const filterSensitiveLog = (obj: ListIdentityPoolUsageResponse): any => ({
    ...obj,
  });
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

export namespace ListRecordsRequest {
  export const filterSensitiveLog = (obj: ListRecordsRequest): any => ({
    ...obj,
  });
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

export namespace _Record {
  export const filterSensitiveLog = (obj: _Record): any => ({
    ...obj,
  });
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

export namespace ListRecordsResponse {
  export const filterSensitiveLog = (obj: ListRecordsResponse): any => ({
    ...obj,
  });
}

export interface InvalidConfigurationException extends __SmithyException, $MetadataBearer {
  name: "InvalidConfigurationException";
  $fault: "client";
  /**
   * Message returned by
   *       InvalidConfigurationException.
   */
  message: string | undefined;
}

export namespace InvalidConfigurationException {
  export const filterSensitiveLog = (obj: InvalidConfigurationException): any => ({
    ...obj,
  });
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

export namespace RegisterDeviceRequest {
  export const filterSensitiveLog = (obj: RegisterDeviceRequest): any => ({
    ...obj,
  });
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

export namespace RegisterDeviceResponse {
  export const filterSensitiveLog = (obj: RegisterDeviceResponse): any => ({
    ...obj,
  });
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
  Events: { [key: string]: string } | undefined;
}

export namespace SetCognitoEventsRequest {
  export const filterSensitiveLog = (obj: SetCognitoEventsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Thrown if there are parallel requests to modify a resource.</p>
 */
export interface ConcurrentModificationException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  /**
   * <p>The message returned by a ConcurrentModicationException.</p>
   */
  message: string | undefined;
}

export namespace ConcurrentModificationException {
  export const filterSensitiveLog = (obj: ConcurrentModificationException): any => ({
    ...obj,
  });
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

export namespace SetIdentityPoolConfigurationRequest {
  export const filterSensitiveLog = (obj: SetIdentityPoolConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace SetIdentityPoolConfigurationResponse {
  export const filterSensitiveLog = (obj: SetIdentityPoolConfigurationResponse): any => ({
    ...obj,
  });
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

export namespace SubscribeToDatasetRequest {
  export const filterSensitiveLog = (obj: SubscribeToDatasetRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Response to a SubscribeToDataset request.</p>
 */
export interface SubscribeToDatasetResponse {}

export namespace SubscribeToDatasetResponse {
  export const filterSensitiveLog = (obj: SubscribeToDatasetResponse): any => ({
    ...obj,
  });
}

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

export namespace UnsubscribeFromDatasetRequest {
  export const filterSensitiveLog = (obj: UnsubscribeFromDatasetRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Response to an UnsubscribeFromDataset request.</p>
 */
export interface UnsubscribeFromDatasetResponse {}

export namespace UnsubscribeFromDatasetResponse {
  export const filterSensitiveLog = (obj: UnsubscribeFromDatasetResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The AWS Lambda function returned invalid output or an exception.</p>
 */
export interface InvalidLambdaFunctionOutputException extends __SmithyException, $MetadataBearer {
  name: "InvalidLambdaFunctionOutputException";
  $fault: "client";
  /**
   * <p>A message returned when an InvalidLambdaFunctionOutputException occurs</p>
   */
  message: string | undefined;
}

export namespace InvalidLambdaFunctionOutputException {
  export const filterSensitiveLog = (obj: InvalidLambdaFunctionOutputException): any => ({
    ...obj,
  });
}

/**
 * <p>AWS Lambda throttled your account, please contact AWS Support</p>
 */
export interface LambdaThrottledException extends __SmithyException, $MetadataBearer {
  name: "LambdaThrottledException";
  $fault: "client";
  /**
   * <p>A message returned when an LambdaThrottledException is thrown</p>
   */
  message: string | undefined;
}

export namespace LambdaThrottledException {
  export const filterSensitiveLog = (obj: LambdaThrottledException): any => ({
    ...obj,
  });
}

/**
 * Thrown when the limit on the number of objects or
 *       operations has been exceeded.
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * Message returned by
   *       LimitExceededException.
   */
  message: string | undefined;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
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

export namespace RecordPatch {
  export const filterSensitiveLog = (obj: RecordPatch): any => ({
    ...obj,
  });
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

export namespace UpdateRecordsRequest {
  export const filterSensitiveLog = (obj: UpdateRecordsRequest): any => ({
    ...obj,
  });
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

export namespace UpdateRecordsResponse {
  export const filterSensitiveLog = (obj: UpdateRecordsResponse): any => ({
    ...obj,
  });
}
