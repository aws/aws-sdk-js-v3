import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>An exception thrown when a bulk publish operation is requested less than 24 hours after a previous bulk publish operation completed successfully.</p>
 */
export interface AlreadyStreamedException extends __SmithyException, $MetadataBearer {
  name: "AlreadyStreamedException";
  $fault: "client";
  /**
   * <p>The message associated with the AlreadyStreamedException exception.</p>
   */
  message: string | undefined;
}

export namespace AlreadyStreamedException {
  export const filterSensitiveLog = (obj: AlreadyStreamedException): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the BulkPublish operation.</p>
 */
export interface BulkPublishRequest {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.</p>
   */
  IdentityPoolId: string | undefined;
}

export namespace BulkPublishRequest {
  export const filterSensitiveLog = (obj: BulkPublishRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output for the BulkPublish operation.</p>
 */
export interface BulkPublishResponse {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.</p>
   */
  IdentityPoolId?: string;
}

export namespace BulkPublishResponse {
  export const filterSensitiveLog = (obj: BulkPublishResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An exception thrown when there is an IN_PROGRESS bulk publish operation for the given identity pool.</p>
 */
export interface DuplicateRequestException extends __SmithyException, $MetadataBearer {
  name: "DuplicateRequestException";
  $fault: "client";
  /**
   * <p>The message associated with the DuplicateRequestException exception.</p>
   */
  message: string | undefined;
}

export namespace DuplicateRequestException {
  export const filterSensitiveLog = (obj: DuplicateRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates an internal service error.</p>
 */
export interface InternalErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalErrorException";
  $fault: "server";
  /**
   * <p>Message returned by InternalErrorException.</p>
   */
  message: string | undefined;
}

export namespace InternalErrorException {
  export const filterSensitiveLog = (obj: InternalErrorException): any => ({
    ...obj,
  });
}

/**
 * <p>Thrown when a request parameter does not comply with the associated constraints.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  /**
   * <p>Message returned by InvalidParameterException.</p>
   */
  message: string | undefined;
}

export namespace InvalidParameterException {
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj,
  });
}

/**
 * <p>Thrown when a user is not authorized to access the requested resource.</p>
 */
export interface NotAuthorizedException extends __SmithyException, $MetadataBearer {
  name: "NotAuthorizedException";
  $fault: "client";
  /**
   * <p>The message returned by a NotAuthorizedException.</p>
   */
  message: string | undefined;
}

export namespace NotAuthorizedException {
  export const filterSensitiveLog = (obj: NotAuthorizedException): any => ({
    ...obj,
  });
}

/**
 * <p>Thrown if the resource doesn't exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>Message returned by a ResourceNotFoundException.</p>
   */
  message: string | undefined;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>A request to delete the specific dataset.</p>
 */
export interface DeleteDatasetRequest {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
   *        created by Amazon Cognito. GUID generation is unique within a region.</p>
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
   *        created by Amazon Cognito. GUID generation is unique within a region.</p>
   */
  IdentityId: string | undefined;

  /**
   * <p>A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_'
   *        (underscore), '-' (dash), and '.' (dot). </p>
   */
  DatasetName: string | undefined;
}

export namespace DeleteDatasetRequest {
  export const filterSensitiveLog = (obj: DeleteDatasetRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of data for an identity pool. An identity pool can have multiple
 *        datasets. A dataset is per identity and can be general or associated with a particular entity
 *        in an application (like a saved game). Datasets are automatically created if they don't
 *        exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value pairs.</p>
 */
export interface Dataset {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
   *        created by Amazon Cognito. GUID generation is unique within a region.</p>
   */
  IdentityId?: string;

  /**
   * <p>A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).</p>
   */
  DatasetName?: string;

  /**
   * <p>Date on which the dataset was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>Date when the dataset was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The device that made the last change to this dataset.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>Total size in bytes of the records in this dataset.</p>
   */
  DataStorage?: number;

  /**
   * <p>Number of records in this dataset.</p>
   */
  NumRecords?: number;
}

export namespace Dataset {
  export const filterSensitiveLog = (obj: Dataset): any => ({
    ...obj,
  });
}

/**
 * <p>Response to a successful DeleteDataset request.</p>
 */
export interface DeleteDatasetResponse {
  /**
   * <p>A collection of data for an identity pool. An identity pool can have multiple
   *        datasets. A dataset is per identity and can be general or associated with a particular entity
   *        in an application (like a saved game). Datasets are automatically created if they don't
   *        exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value pairs.</p>
   */
  Dataset?: Dataset;
}

export namespace DeleteDatasetResponse {
  export const filterSensitiveLog = (obj: DeleteDatasetResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Thrown if an update can't be applied because the resource was changed by another call and this would result in a conflict.</p>
 */
export interface ResourceConflictException extends __SmithyException, $MetadataBearer {
  name: "ResourceConflictException";
  $fault: "client";
  /**
   * <p>The message returned by a ResourceConflictException.</p>
   */
  message: string | undefined;
}

export namespace ResourceConflictException {
  export const filterSensitiveLog = (obj: ResourceConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>Thrown if the request is throttled.</p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  /**
   * <p>Message returned by a TooManyRequestsException.</p>
   */
  message: string | undefined;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
}

/**
 * <p>A request for meta data about a dataset (creation date, number of records, size) by
 *        owner and dataset name.</p>
 */
export interface DescribeDatasetRequest {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
   *        created by Amazon Cognito. GUID generation is unique within a region.</p>
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
   *        created by Amazon Cognito. GUID generation is unique within a region.</p>
   */
  IdentityId: string | undefined;

  /**
   * <p>A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_'
   *        (underscore), '-' (dash), and '.' (dot).</p>
   */
  DatasetName: string | undefined;
}

export namespace DescribeDatasetRequest {
  export const filterSensitiveLog = (obj: DescribeDatasetRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Response to a successful DescribeDataset request.</p>
 */
export interface DescribeDatasetResponse {
  /**
   * <p>Metadata for a collection of data for an identity. An identity can have multiple
   *        datasets. A dataset can be general or associated with a particular entity in an application
   *        (like a saved game). Datasets are automatically created if they don't exist. Data is synced
   *        by dataset, and a dataset can hold up to 1MB of key-value pairs</p>
   */
  Dataset?: Dataset;
}

export namespace DescribeDatasetResponse {
  export const filterSensitiveLog = (obj: DescribeDatasetResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A request for usage information about the identity pool.</p>
 */
export interface DescribeIdentityPoolUsageRequest {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
   *        created by Amazon Cognito. GUID generation is unique within a region.</p>
   */
  IdentityPoolId: string | undefined;
}

export namespace DescribeIdentityPoolUsageRequest {
  export const filterSensitiveLog = (obj: DescribeIdentityPoolUsageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Usage information for the identity pool.</p>
 */
export interface IdentityPoolUsage {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
   *        created by Amazon Cognito. GUID generation is unique within a region.</p>
   */
  IdentityPoolId?: string;

  /**
   * <p>Number of sync sessions for the identity pool.</p>
   */
  SyncSessionsCount?: number;

  /**
   * <p>Data storage information for the identity pool.</p>
   */
  DataStorage?: number;

  /**
   * <p>Date on which the identity pool was last modified.</p>
   */
  LastModifiedDate?: Date;
}

export namespace IdentityPoolUsage {
  export const filterSensitiveLog = (obj: IdentityPoolUsage): any => ({
    ...obj,
  });
}

/**
 * <p>Response to a successful DescribeIdentityPoolUsage request.</p>
 */
export interface DescribeIdentityPoolUsageResponse {
  /**
   * <p>Information about the usage of the identity pool.</p>
   */
  IdentityPoolUsage?: IdentityPoolUsage;
}

export namespace DescribeIdentityPoolUsageResponse {
  export const filterSensitiveLog = (obj: DescribeIdentityPoolUsageResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A request for information about the usage of an identity pool.</p>
 */
export interface DescribeIdentityUsageRequest {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
   *        created by Amazon Cognito. GUID generation is unique within a region.</p>
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
   *        created by Amazon Cognito. GUID generation is unique within a region.</p>
   */
  IdentityId: string | undefined;
}

export namespace DescribeIdentityUsageRequest {
  export const filterSensitiveLog = (obj: DescribeIdentityUsageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Usage information for the identity.</p>
 */
export interface IdentityUsage {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
   *        created by Amazon Cognito. GUID generation is unique within a region.</p>
   */
  IdentityId?: string;

  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
   *        created by Amazon Cognito. GUID generation is unique within a region.</p>
   */
  IdentityPoolId?: string;

  /**
   * <p>Date on which the identity was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>Number of datasets for the identity.</p>
   */
  DatasetCount?: number;

  /**
   * <p>Total data storage for this identity.</p>
   */
  DataStorage?: number;
}

export namespace IdentityUsage {
  export const filterSensitiveLog = (obj: IdentityUsage): any => ({
    ...obj,
  });
}

/**
 * <p>The response to a successful DescribeIdentityUsage request.</p>
 */
export interface DescribeIdentityUsageResponse {
  /**
   * <p>Usage information for the identity.</p>
   */
  IdentityUsage?: IdentityUsage;
}

export namespace DescribeIdentityUsageResponse {
  export const filterSensitiveLog = (obj: DescribeIdentityUsageResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the GetBulkPublishDetails operation.</p>
 */
export interface GetBulkPublishDetailsRequest {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.</p>
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
 * <p>The output for the GetBulkPublishDetails operation.</p>
 */
export interface GetBulkPublishDetailsResponse {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.</p>
   */
  IdentityPoolId?: string;

  /**
   * <p>The date/time at which the last bulk publish was initiated.</p>
   */
  BulkPublishStartTime?: Date;

  /**
   * <p>If BulkPublishStatus is SUCCEEDED, the time the last bulk publish operation completed.</p>
   */
  BulkPublishCompleteTime?: Date;

  /**
   * <p>Status of the last bulk publish operation, valid values are: </p>
   *          <ul>
   *             <li>
   *                <p>NOT_STARTED - No bulk publish has been requested for this identity pool</p>
   *             </li>
   *             <li>
   *                <p>IN_PROGRESS - Data is being published to the configured stream</p>
   *             </li>
   *             <li>
   *                <p>SUCCEEDED - All data for the identity pool has been published to the configured stream</p>
   *             </li>
   *             <li>
   *                <p>FAILED - Some portion of the data has failed to publish, check FailureMessage for the cause.</p>
   *             </li>
   *          </ul>
   */
  BulkPublishStatus?: BulkPublishStatus | string;

  /**
   * <p>If BulkPublishStatus is FAILED this field will contain the error message that caused the bulk publish to fail.</p>
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
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. This is the ID of the pool for which to return a configuration.</p>
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
 * <p>Configuration options for configure Cognito streams.</p>
 */
export interface CognitoStreams {
  /**
   * <p>The name of the Cognito stream to receive updates. This stream must be in the developers account and in the same region as the identity pool.</p>
   */
  StreamName?: string;

  /**
   * <p>The ARN of the role Amazon Cognito can assume in order to publish to the stream. This role must grant access to Amazon Cognito (cognito-sync) to invoke PutRecord on your Cognito stream.</p>
   */
  RoleArn?: string;

  /**
   * <p>Status of the Cognito streams. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>ENABLED - Streaming of updates to identity pool is enabled.</p>
   *             </li>
   *             <li>
   *                <p>DISABLED - Streaming of updates to identity pool is disabled. Bulk publish will also fail if StreamingStatus is DISABLED.</p>
   *             </li>
   *          </ul>
   */
  StreamingStatus?: StreamingStatus | string;

  /**
   * <p>A string containing the reason why streaming of updates to the identity pool was disabled.</p>
   */
  DisabledReason?: string;
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
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito.</p>
   */
  IdentityPoolId?: string;

  /**
   * <p>Options to apply to this identity pool for push synchronization.</p>
   */
  PushSync?: PushSync;

  /**
   * <p>Options to apply to this identity pool for Amazon Cognito streams.</p>
   */
  CognitoStreams?: CognitoStreams;
}

export namespace GetIdentityPoolConfigurationResponse {
  export const filterSensitiveLog = (obj: GetIdentityPoolConfigurationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Request for a list of datasets for an identity.</p>
 */
export interface ListDatasetsRequest {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.</p>
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.</p>
   */
  IdentityId: string | undefined;

  /**
   * <p>A pagination token for obtaining the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned.</p>
   */
  MaxResults?: string;
}

export namespace ListDatasetsRequest {
  export const filterSensitiveLog = (obj: ListDatasetsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Returned for a successful ListDatasets request.</p>
 */
export interface ListDatasetsResponse {
  /**
   * <p>A set of datasets.</p>
   */
  Datasets?: Dataset[];

  /**
   * <p>Number of datasets returned.</p>
   */
  Count?: number;

  /**
   * <p>A pagination token for obtaining the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListDatasetsResponse {
  export const filterSensitiveLog = (obj: ListDatasetsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A request for usage information on an identity pool.</p>
 */
export interface ListIdentityPoolUsageRequest {
  /**
   * <p>A pagination token for obtaining the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned.</p>
   */
  MaxResults?: number;
}

export namespace ListIdentityPoolUsageRequest {
  export const filterSensitiveLog = (obj: ListIdentityPoolUsageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Returned for a successful ListIdentityPoolUsage request.</p>
 */
export interface ListIdentityPoolUsageResponse {
  /**
   * <p>Usage information for the identity pools.</p>
   */
  IdentityPoolUsages?: IdentityPoolUsage[];

  /**
   * <p>The maximum number of results to be returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>Total number of identities for the identity pool.</p>
   */
  Count?: number;

  /**
   * <p>A pagination token for obtaining the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListIdentityPoolUsageResponse {
  export const filterSensitiveLog = (obj: ListIdentityPoolUsageResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A request for a list of records.</p>
 */
export interface ListRecordsRequest {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.</p>
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.</p>
   */
  IdentityId: string | undefined;

  /**
   * <p>A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).</p>
   */
  DatasetName: string | undefined;

  /**
   * <p>The last server sync count for this record.</p>
   */
  LastSyncCount?: number;

  /**
   * <p>A pagination token for obtaining the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token containing a session ID, identity ID, and expiration.</p>
   */
  SyncSessionToken?: string;
}

export namespace ListRecordsRequest {
  export const filterSensitiveLog = (obj: ListRecordsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The basic data structure of a dataset.</p>
 */
export interface _Record {
  /**
   * <p>The key for the record.</p>
   */
  Key?: string;

  /**
   * <p>The value for the record.</p>
   */
  Value?: string;

  /**
   * <p>The server sync count for this record.</p>
   */
  SyncCount?: number;

  /**
   * <p>The date on which the record was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The user/device that made the last change to this record.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The last modified date of the client device.</p>
   */
  DeviceLastModifiedDate?: Date;
}

export namespace _Record {
  export const filterSensitiveLog = (obj: _Record): any => ({
    ...obj,
  });
}

/**
 * <p>Returned for a successful ListRecordsRequest.</p>
 */
export interface ListRecordsResponse {
  /**
   * <p>A list of all records.</p>
   */
  Records?: _Record[];

  /**
   * <p>A pagination token for obtaining the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Total number of records.</p>
   */
  Count?: number;

  /**
   * <p>Server sync count for this dataset.</p>
   */
  DatasetSyncCount?: number;

  /**
   * <p>The user/device that made the last change to this record.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>Names of merged datasets.</p>
   */
  MergedDatasetNames?: string[];

  /**
   * <p>Indicates whether the dataset exists.</p>
   */
  DatasetExists?: boolean;

  /**
   * <p>A boolean value specifying whether to delete the dataset locally.</p>
   */
  DatasetDeletedAfterRequestedSyncCount?: boolean;

  /**
   * <p>A token containing a session ID, identity ID, and expiration.</p>
   */
  SyncSessionToken?: string;
}

export namespace ListRecordsResponse {
  export const filterSensitiveLog = (obj: ListRecordsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when Amazon Cognito detects an invalid configuration.</p>
 */
export interface InvalidConfigurationException extends __SmithyException, $MetadataBearer {
  name: "InvalidConfigurationException";
  $fault: "client";
  /**
   * <p>Message returned by InvalidConfigurationException.</p>
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
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. Here, the ID of the pool that the identity belongs to.</p>
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
 * <p>A request to configure Cognito Events.</p>
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
   * <p>The message returned by a ConcurrentModificationException.</p>
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
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. This is the ID of the pool to modify.</p>
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>Options to apply to this identity pool for push synchronization.</p>
   */
  PushSync?: PushSync;

  /**
   * <p>Options to apply to this identity pool for Amazon Cognito streams.</p>
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
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito.</p>
   */
  IdentityPoolId?: string;

  /**
   * <p>Options to apply to this identity pool for push synchronization.</p>
   */
  PushSync?: PushSync;

  /**
   * <p>Options to apply to this identity pool for Amazon Cognito streams.</p>
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
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. The ID of the pool to which the identity belongs.</p>
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
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. The ID of the pool to which this identity belongs.</p>
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
 * <p>This exception is thrown when your Lambda function fails to respond within 5 seconds.
 *       For more information, see <a href="http://docs.aws.amazon.com/cognito/latest/developerguide/cognito-events.html">Amazon
 *         Cognito Events</a>.</p>
 */
export interface LambdaSocketTimeoutException extends __SmithyException, $MetadataBearer {
  name: "LambdaSocketTimeoutException";
  $fault: "client";
  message: string | undefined;
}

export namespace LambdaSocketTimeoutException {
  export const filterSensitiveLog = (obj: LambdaSocketTimeoutException): any => ({
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
 * <p>Thrown when the limit on the number of objects or operations has been exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * <p>Message returned by LimitExceededException.</p>
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
 * <p>An update operation for a record.</p>
 */
export interface RecordPatch {
  /**
   * <p>An operation, either replace or remove.</p>
   */
  Op: Operation | string | undefined;

  /**
   * <p>The key associated with the record patch.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value associated with the record patch.</p>
   */
  Value?: string;

  /**
   * <p>Last known server sync count for this record. Set to 0 if unknown.</p>
   */
  SyncCount: number | undefined;

  /**
   * <p>The last modified date of the client device.</p>
   */
  DeviceLastModifiedDate?: Date;
}

export namespace RecordPatch {
  export const filterSensitiveLog = (obj: RecordPatch): any => ({
    ...obj,
  });
}

/**
 * <p>A request to post updates to records or add and delete records for a dataset and user.</p>
 */
export interface UpdateRecordsRequest {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.</p>
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.</p>
   */
  IdentityId: string | undefined;

  /**
   * <p>A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).</p>
   */
  DatasetName: string | undefined;

  /**
   * <p>The unique ID generated for this device by Cognito.</p>
   */
  DeviceId?: string;

  /**
   * <p>A list of patch operations.</p>
   */
  RecordPatches?: RecordPatch[];

  /**
   * <p>The SyncSessionToken returned by a previous call to ListRecords for this dataset and identity.</p>
   */
  SyncSessionToken: string | undefined;

  /**
   * <p>Intended to supply a device ID that will populate the lastModifiedBy field referenced in other methods. The ClientContext field is not yet implemented.</p>
   */
  ClientContext?: string;
}

export namespace UpdateRecordsRequest {
  export const filterSensitiveLog = (obj: UpdateRecordsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Returned for a successful UpdateRecordsRequest.</p>
 */
export interface UpdateRecordsResponse {
  /**
   * <p>A list of records that have been updated.</p>
   */
  Records?: _Record[];
}

export namespace UpdateRecordsResponse {
  export const filterSensitiveLog = (obj: UpdateRecordsResponse): any => ({
    ...obj,
  });
}
