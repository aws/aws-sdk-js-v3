import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 *
 *          <p>An exception thrown when a bulk publish operation is requested less than 24 hours after a previous bulk publish operation completed successfully.</p>
 *
 */
export interface AlreadyStreamedException extends _smithy.SmithyException, $MetadataBearer {
  __type: "AlreadyStreamedException";
  $fault: "client";
  /**
   *
   *          <p>The message associated with the AlreadyStreamedException exception.</p>
   *
   */
  message: string | undefined;
}

export namespace AlreadyStreamedException {
  export function isa(o: any): o is AlreadyStreamedException {
    return _smithy.isa(o, "AlreadyStreamedException");
  }
}

/**
 *
 *          <p>The input for the BulkPublish operation.</p>
 *
 */
export interface BulkPublishRequest {
  __type?: "BulkPublishRequest";
  /**
   *
   *          <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.</p>
   *
   */
  IdentityPoolId: string | undefined;
}

export namespace BulkPublishRequest {
  export function isa(o: any): o is BulkPublishRequest {
    return _smithy.isa(o, "BulkPublishRequest");
  }
}

/**
 *
 *          <p>The output for the BulkPublish operation.</p>
 *
 */
export interface BulkPublishResponse extends $MetadataBearer {
  __type?: "BulkPublishResponse";
  /**
   *
   *          <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.</p>
   *
   */
  IdentityPoolId?: string;
}

export namespace BulkPublishResponse {
  export function isa(o: any): o is BulkPublishResponse {
    return _smithy.isa(o, "BulkPublishResponse");
  }
}

export enum BulkPublishStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_STARTED = "NOT_STARTED",
  SUCCEEDED = "SUCCEEDED",
}

/**
 *
 *          <p>Configuration options for configure Cognito streams.</p>
 *
 */
export interface CognitoStreams {
  __type?: "CognitoStreams";
  /**
   *
   *          <p>A string containing the reason why streaming of updates to the identity pool was disabled.</p>
   *
   */
  DisabledReason?: string;

  /**
   *
   *          <p>The ARN of the role Amazon Cognito can assume in order to publish to the stream. This role must grant access to Amazon Cognito (cognito-sync) to invoke PutRecord on your Cognito stream.</p>
   *
   */
  RoleArn?: string;

  /**
   *
   *          <p>The name of the Cognito stream to receive updates. This stream must be in the developers account and in the same region as the identity pool.</p>
   *
   */
  StreamName?: string;

  /**
   *
   *          <p>Status of the Cognito streams. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>ENABLED - Streaming of updates to identity pool is enabled.</p>
   *             </li>
   *             <li>
   *                <p>DISABLED - Streaming of updates to identity pool is disabled. Bulk publish will also fail if StreamingStatus is DISABLED.</p>
   *             </li>
   *          </ul>
   *
   */
  StreamingStatus?: StreamingStatus | string;
}

export namespace CognitoStreams {
  export function isa(o: any): o is CognitoStreams {
    return _smithy.isa(o, "CognitoStreams");
  }
}

/**
 *
 *          <p>Thrown if there are parallel requests to modify a resource.</p>
 *
 */
export interface ConcurrentModificationException extends _smithy.SmithyException, $MetadataBearer {
  __type: "ConcurrentModificationException";
  $fault: "client";
  /**
   *
   *          <p>The message returned by a ConcurrentModificationException.</p>
   *
   */
  message: string | undefined;
}

export namespace ConcurrentModificationException {
  export function isa(o: any): o is ConcurrentModificationException {
    return _smithy.isa(o, "ConcurrentModificationException");
  }
}

/**
 *
 *          <p>A collection of data for an identity pool. An identity pool can have multiple
 *        datasets. A dataset is per identity and can be general or associated with a particular entity
 *        in an application (like a saved game). Datasets are automatically created if they don't
 *        exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value pairs.</p>
 *
 */
export interface Dataset {
  __type?: "Dataset";
  /**
   *
   *          <p>Date on which the dataset was created.</p>
   *
   */
  CreationDate?: Date;

  /**
   *
   *          <p>Total size in bytes of the records in this dataset.</p>
   *
   */
  DataStorage?: number;

  /**
   *
   *          <p>A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).</p>
   *
   */
  DatasetName?: string;

  /**
   *
   *          <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
   *        created by Amazon Cognito. GUID generation is unique within a region.</p>
   *
   */
  IdentityId?: string;

  /**
   *
   *          <p>The device that made the last change to this dataset.</p>
   *
   */
  LastModifiedBy?: string;

  /**
   *
   *          <p>Date when the dataset was last modified.</p>
   *
   */
  LastModifiedDate?: Date;

  /**
   *
   *          <p>Number of records in this dataset.</p>
   *
   */
  NumRecords?: number;
}

export namespace Dataset {
  export function isa(o: any): o is Dataset {
    return _smithy.isa(o, "Dataset");
  }
}

/**
 *
 *          <p>A request to delete the specific dataset.</p>
 *
 */
export interface DeleteDatasetRequest {
  __type?: "DeleteDatasetRequest";
  /**
   *
   *          <p>A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_'
   *        (underscore), '-' (dash), and '.' (dot). </p>
   *
   */
  DatasetName: string | undefined;

  /**
   *
   *          <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
   *        created by Amazon Cognito. GUID generation is unique within a region.</p>
   *
   */
  IdentityId: string | undefined;

  /**
   *
   *          <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
   *        created by Amazon Cognito. GUID generation is unique within a region.</p>
   *
   */
  IdentityPoolId: string | undefined;
}

export namespace DeleteDatasetRequest {
  export function isa(o: any): o is DeleteDatasetRequest {
    return _smithy.isa(o, "DeleteDatasetRequest");
  }
}

/**
 *
 *          <p>Response to a successful DeleteDataset request.</p>
 *
 */
export interface DeleteDatasetResponse extends $MetadataBearer {
  __type?: "DeleteDatasetResponse";
  /**
   *
   *          <p>A collection of data for an identity pool. An identity pool can have multiple
   *        datasets. A dataset is per identity and can be general or associated with a particular entity
   *        in an application (like a saved game). Datasets are automatically created if they don't
   *        exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value pairs.</p>
   *
   */
  Dataset?: Dataset;
}

export namespace DeleteDatasetResponse {
  export function isa(o: any): o is DeleteDatasetResponse {
    return _smithy.isa(o, "DeleteDatasetResponse");
  }
}

/**
 *
 *          <p>A request for meta data about a dataset (creation date, number of records, size) by
 *        owner and dataset name.</p>
 *
 */
export interface DescribeDatasetRequest {
  __type?: "DescribeDatasetRequest";
  /**
   *
   *          <p>A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_'
   *        (underscore), '-' (dash), and '.' (dot).</p>
   *
   */
  DatasetName: string | undefined;

  /**
   *
   *          <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
   *        created by Amazon Cognito. GUID generation is unique within a region.</p>
   *
   */
  IdentityId: string | undefined;

  /**
   *
   *          <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
   *        created by Amazon Cognito. GUID generation is unique within a region.</p>
   *
   */
  IdentityPoolId: string | undefined;
}

export namespace DescribeDatasetRequest {
  export function isa(o: any): o is DescribeDatasetRequest {
    return _smithy.isa(o, "DescribeDatasetRequest");
  }
}

/**
 *
 *          <p>Response to a successful DescribeDataset request.</p>
 *
 */
export interface DescribeDatasetResponse extends $MetadataBearer {
  __type?: "DescribeDatasetResponse";
  /**
   *
   *          <p>Metadata for a collection of data for an identity. An identity can have multiple
   *        datasets. A dataset can be general or associated with a particular entity in an application
   *        (like a saved game). Datasets are automatically created if they don't exist. Data is synced
   *        by dataset, and a dataset can hold up to 1MB of key-value pairs</p>
   *
   */
  Dataset?: Dataset;
}

export namespace DescribeDatasetResponse {
  export function isa(o: any): o is DescribeDatasetResponse {
    return _smithy.isa(o, "DescribeDatasetResponse");
  }
}

/**
 *
 *          <p>A request for usage information about the identity pool.</p>
 *
 */
export interface DescribeIdentityPoolUsageRequest {
  __type?: "DescribeIdentityPoolUsageRequest";
  /**
   *
   *          <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
   *        created by Amazon Cognito. GUID generation is unique within a region.</p>
   *
   */
  IdentityPoolId: string | undefined;
}

export namespace DescribeIdentityPoolUsageRequest {
  export function isa(o: any): o is DescribeIdentityPoolUsageRequest {
    return _smithy.isa(o, "DescribeIdentityPoolUsageRequest");
  }
}

/**
 *
 *          <p>Response to a successful DescribeIdentityPoolUsage request.</p>
 *
 */
export interface DescribeIdentityPoolUsageResponse extends $MetadataBearer {
  __type?: "DescribeIdentityPoolUsageResponse";
  /**
   *
   *          <p>Information about the usage of the identity pool.</p>
   *
   */
  IdentityPoolUsage?: IdentityPoolUsage;
}

export namespace DescribeIdentityPoolUsageResponse {
  export function isa(o: any): o is DescribeIdentityPoolUsageResponse {
    return _smithy.isa(o, "DescribeIdentityPoolUsageResponse");
  }
}

/**
 *
 *          <p>A request for information about the usage of an identity pool.</p>
 *
 */
export interface DescribeIdentityUsageRequest {
  __type?: "DescribeIdentityUsageRequest";
  /**
   *
   *          <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
   *        created by Amazon Cognito. GUID generation is unique within a region.</p>
   *
   */
  IdentityId: string | undefined;

  /**
   *
   *          <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
   *        created by Amazon Cognito. GUID generation is unique within a region.</p>
   *
   */
  IdentityPoolId: string | undefined;
}

export namespace DescribeIdentityUsageRequest {
  export function isa(o: any): o is DescribeIdentityUsageRequest {
    return _smithy.isa(o, "DescribeIdentityUsageRequest");
  }
}

/**
 *
 *          <p>The response to a successful DescribeIdentityUsage request.</p>
 *
 */
export interface DescribeIdentityUsageResponse extends $MetadataBearer {
  __type?: "DescribeIdentityUsageResponse";
  /**
   *
   *          <p>Usage information for the identity.</p>
   *
   */
  IdentityUsage?: IdentityUsage;
}

export namespace DescribeIdentityUsageResponse {
  export function isa(o: any): o is DescribeIdentityUsageResponse {
    return _smithy.isa(o, "DescribeIdentityUsageResponse");
  }
}

/**
 *
 *          <p>An exception thrown when there is an IN_PROGRESS bulk publish operation for the given identity pool.</p>
 *
 */
export interface DuplicateRequestException extends _smithy.SmithyException, $MetadataBearer {
  __type: "DuplicateRequestException";
  $fault: "client";
  /**
   *
   *          <p>The message associated with the DuplicateRequestException exception.</p>
   *
   */
  message: string | undefined;
}

export namespace DuplicateRequestException {
  export function isa(o: any): o is DuplicateRequestException {
    return _smithy.isa(o, "DuplicateRequestException");
  }
}

/**
 *
 *          <p>The input for the GetBulkPublishDetails operation.</p>
 *
 */
export interface GetBulkPublishDetailsRequest {
  __type?: "GetBulkPublishDetailsRequest";
  /**
   *
   *          <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.</p>
   *
   */
  IdentityPoolId: string | undefined;
}

export namespace GetBulkPublishDetailsRequest {
  export function isa(o: any): o is GetBulkPublishDetailsRequest {
    return _smithy.isa(o, "GetBulkPublishDetailsRequest");
  }
}

/**
 *
 *          <p>The output for the GetBulkPublishDetails operation.</p>
 *
 */
export interface GetBulkPublishDetailsResponse extends $MetadataBearer {
  __type?: "GetBulkPublishDetailsResponse";
  /**
   *
   *          <p>If BulkPublishStatus is SUCCEEDED, the time the last bulk publish operation completed.</p>
   *
   */
  BulkPublishCompleteTime?: Date;

  /**
   *
   *          <p>The date/time at which the last bulk publish was initiated.</p>
   *
   */
  BulkPublishStartTime?: Date;

  /**
   *
   *          <p>Status of the last bulk publish operation, valid values are: </p>
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
   *
   */
  BulkPublishStatus?: BulkPublishStatus | string;

  /**
   *
   *          <p>If BulkPublishStatus is FAILED this field will contain the error message that caused the bulk publish to fail.</p>
   *
   */
  FailureMessage?: string;

  /**
   *
   *          <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.</p>
   *
   */
  IdentityPoolId?: string;
}

export namespace GetBulkPublishDetailsResponse {
  export function isa(o: any): o is GetBulkPublishDetailsResponse {
    return _smithy.isa(o, "GetBulkPublishDetailsResponse");
  }
}

/**
 *
 *          <p>A request for a list of the configured Cognito Events</p>
 *
 */
export interface GetCognitoEventsRequest {
  __type?: "GetCognitoEventsRequest";
  /**
   *
   *          <p>The Cognito Identity Pool ID for the request</p>
   *
   */
  IdentityPoolId: string | undefined;
}

export namespace GetCognitoEventsRequest {
  export function isa(o: any): o is GetCognitoEventsRequest {
    return _smithy.isa(o, "GetCognitoEventsRequest");
  }
}

/**
 *
 *          <p>The response from the GetCognitoEvents request</p>
 *
 */
export interface GetCognitoEventsResponse extends $MetadataBearer {
  __type?: "GetCognitoEventsResponse";
  /**
   *
   *          <p>The Cognito Events returned from the GetCognitoEvents request</p>
   *
   */
  Events?: { [key: string]: string };
}

export namespace GetCognitoEventsResponse {
  export function isa(o: any): o is GetCognitoEventsResponse {
    return _smithy.isa(o, "GetCognitoEventsResponse");
  }
}

/**
 *
 *          <p>The input for the GetIdentityPoolConfiguration operation.</p>
 *
 */
export interface GetIdentityPoolConfigurationRequest {
  __type?: "GetIdentityPoolConfigurationRequest";
  /**
   *
   *          <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. This is the ID of the pool for which to return a configuration.</p>
   *
   */
  IdentityPoolId: string | undefined;
}

export namespace GetIdentityPoolConfigurationRequest {
  export function isa(o: any): o is GetIdentityPoolConfigurationRequest {
    return _smithy.isa(o, "GetIdentityPoolConfigurationRequest");
  }
}

/**
 *
 *          <p>The output for the GetIdentityPoolConfiguration operation.</p>
 *
 */
export interface GetIdentityPoolConfigurationResponse extends $MetadataBearer {
  __type?: "GetIdentityPoolConfigurationResponse";
  /**
   *
   *          <p>Options to apply to this identity pool for Amazon Cognito streams.</p>
   *
   */
  CognitoStreams?: CognitoStreams;

  /**
   *
   *          <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito.</p>
   *
   */
  IdentityPoolId?: string;

  /**
   *
   *          <p>Options to apply to this identity pool for push synchronization.</p>
   *
   */
  PushSync?: PushSync;
}

export namespace GetIdentityPoolConfigurationResponse {
  export function isa(o: any): o is GetIdentityPoolConfigurationResponse {
    return _smithy.isa(o, "GetIdentityPoolConfigurationResponse");
  }
}

/**
 *
 *          <p>Usage information for the identity pool.</p>
 *
 */
export interface IdentityPoolUsage {
  __type?: "IdentityPoolUsage";
  /**
   *
   *          <p>Data storage information for the identity pool.</p>
   *
   */
  DataStorage?: number;

  /**
   *
   *          <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
   *        created by Amazon Cognito. GUID generation is unique within a region.</p>
   *
   */
  IdentityPoolId?: string;

  /**
   *
   *          <p>Date on which the identity pool was last modified.</p>
   *
   */
  LastModifiedDate?: Date;

  /**
   *
   *          <p>Number of sync sessions for the identity pool.</p>
   *
   */
  SyncSessionsCount?: number;
}

export namespace IdentityPoolUsage {
  export function isa(o: any): o is IdentityPoolUsage {
    return _smithy.isa(o, "IdentityPoolUsage");
  }
}

/**
 *
 *          <p>Usage information for the identity.</p>
 *
 */
export interface IdentityUsage {
  __type?: "IdentityUsage";
  /**
   *
   *          <p>Total data storage for this identity.</p>
   *
   */
  DataStorage?: number;

  /**
   *
   *          <p>Number of datasets for the identity.</p>
   *
   */
  DatasetCount?: number;

  /**
   *
   *          <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
   *        created by Amazon Cognito. GUID generation is unique within a region.</p>
   *
   */
  IdentityId?: string;

  /**
   *
   *          <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
   *        created by Amazon Cognito. GUID generation is unique within a region.</p>
   *
   */
  IdentityPoolId?: string;

  /**
   *
   *          <p>Date on which the identity was last modified.</p>
   *
   */
  LastModifiedDate?: Date;
}

export namespace IdentityUsage {
  export function isa(o: any): o is IdentityUsage {
    return _smithy.isa(o, "IdentityUsage");
  }
}

/**
 *
 *          <p>Indicates an internal service error.</p>
 *
 */
export interface InternalErrorException extends _smithy.SmithyException, $MetadataBearer {
  __type: "InternalErrorException";
  $fault: "server";
  /**
   *
   *          <p>Message returned by InternalErrorException.</p>
   *
   */
  message: string | undefined;
}

export namespace InternalErrorException {
  export function isa(o: any): o is InternalErrorException {
    return _smithy.isa(o, "InternalErrorException");
  }
}

/**
 *
 *          <p>This exception is thrown when Amazon Cognito detects an invalid configuration.</p>
 *
 */
export interface InvalidConfigurationException extends _smithy.SmithyException, $MetadataBearer {
  __type: "InvalidConfigurationException";
  $fault: "client";
  /**
   *
   *          <p>Message returned by InvalidConfigurationException.</p>
   *
   */
  message: string | undefined;
}

export namespace InvalidConfigurationException {
  export function isa(o: any): o is InvalidConfigurationException {
    return _smithy.isa(o, "InvalidConfigurationException");
  }
}

/**
 *
 *          <p>The AWS Lambda function returned invalid output or an exception.</p>
 *
 */
export interface InvalidLambdaFunctionOutputException extends _smithy.SmithyException, $MetadataBearer {
  __type: "InvalidLambdaFunctionOutputException";
  $fault: "client";
  /**
   *
   *          <p>A message returned when an InvalidLambdaFunctionOutputException occurs</p>
   *
   */
  message: string | undefined;
}

export namespace InvalidLambdaFunctionOutputException {
  export function isa(o: any): o is InvalidLambdaFunctionOutputException {
    return _smithy.isa(o, "InvalidLambdaFunctionOutputException");
  }
}

/**
 *
 *          <p>Thrown when a request parameter does not comply with the associated constraints.</p>
 *
 */
export interface InvalidParameterException extends _smithy.SmithyException, $MetadataBearer {
  __type: "InvalidParameterException";
  $fault: "client";
  /**
   *
   *          <p>Message returned by InvalidParameterException.</p>
   *
   */
  message: string | undefined;
}

export namespace InvalidParameterException {
  export function isa(o: any): o is InvalidParameterException {
    return _smithy.isa(o, "InvalidParameterException");
  }
}

/**
 *
 *          <p>This exception is thrown when your Lambda function fails to respond within 5 seconds.
 *       For more information, see <a href="http://docs.aws.amazon.com/cognito/latest/developerguide/cognito-events.html">Amazon
 *         Cognito Events</a>.</p>
 *
 */
export interface LambdaSocketTimeoutException extends _smithy.SmithyException, $MetadataBearer {
  __type: "LambdaSocketTimeoutException";
  $fault: "client";
  message: string | undefined;
}

export namespace LambdaSocketTimeoutException {
  export function isa(o: any): o is LambdaSocketTimeoutException {
    return _smithy.isa(o, "LambdaSocketTimeoutException");
  }
}

/**
 *
 *          <p>AWS Lambda throttled your account, please contact AWS Support</p>
 *
 */
export interface LambdaThrottledException extends _smithy.SmithyException, $MetadataBearer {
  __type: "LambdaThrottledException";
  $fault: "client";
  /**
   *
   *          <p>A message returned when an LambdaThrottledException is thrown</p>
   *
   */
  message: string | undefined;
}

export namespace LambdaThrottledException {
  export function isa(o: any): o is LambdaThrottledException {
    return _smithy.isa(o, "LambdaThrottledException");
  }
}

/**
 *
 *          <p>Thrown when the limit on the number of objects or operations has been exceeded.</p>
 *
 */
export interface LimitExceededException extends _smithy.SmithyException, $MetadataBearer {
  __type: "LimitExceededException";
  $fault: "client";
  /**
   *
   *          <p>Message returned by LimitExceededException.</p>
   *
   */
  message: string | undefined;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return _smithy.isa(o, "LimitExceededException");
  }
}

/**
 *
 *          <p>Request for a list of datasets for an identity.</p>
 *
 */
export interface ListDatasetsRequest {
  __type?: "ListDatasetsRequest";
  /**
   *
   *          <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.</p>
   *
   */
  IdentityId: string | undefined;

  /**
   *
   *          <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.</p>
   *
   */
  IdentityPoolId: string | undefined;

  /**
   *
   *          <p>The maximum number of results to be returned.</p>
   *
   */
  MaxResults?: string;

  /**
   *
   *          <p>A pagination token for obtaining the next page of results.</p>
   *
   */
  NextToken?: string;
}

export namespace ListDatasetsRequest {
  export function isa(o: any): o is ListDatasetsRequest {
    return _smithy.isa(o, "ListDatasetsRequest");
  }
}

/**
 *
 *          <p>Returned for a successful ListDatasets request.</p>
 *
 */
export interface ListDatasetsResponse extends $MetadataBearer {
  __type?: "ListDatasetsResponse";
  /**
   *
   *          <p>Number of datasets returned.</p>
   *
   */
  Count?: number;

  /**
   *
   *          <p>A set of datasets.</p>
   *
   */
  Datasets?: Array<Dataset>;

  /**
   *
   *          <p>A pagination token for obtaining the next page of results.</p>
   *
   */
  NextToken?: string;
}

export namespace ListDatasetsResponse {
  export function isa(o: any): o is ListDatasetsResponse {
    return _smithy.isa(o, "ListDatasetsResponse");
  }
}

/**
 *
 *          <p>A request for usage information on an identity pool.</p>
 *
 */
export interface ListIdentityPoolUsageRequest {
  __type?: "ListIdentityPoolUsageRequest";
  /**
   *
   *          <p>The maximum number of results to be returned.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   *          <p>A pagination token for obtaining the next page of results.</p>
   *
   */
  NextToken?: string;
}

export namespace ListIdentityPoolUsageRequest {
  export function isa(o: any): o is ListIdentityPoolUsageRequest {
    return _smithy.isa(o, "ListIdentityPoolUsageRequest");
  }
}

/**
 *
 *          <p>Returned for a successful ListIdentityPoolUsage request.</p>
 *
 */
export interface ListIdentityPoolUsageResponse extends $MetadataBearer {
  __type?: "ListIdentityPoolUsageResponse";
  /**
   *
   *          <p>Total number of identities for the identity pool.</p>
   *
   */
  Count?: number;

  /**
   *
   *          <p>Usage information for the identity pools.</p>
   *
   */
  IdentityPoolUsages?: Array<IdentityPoolUsage>;

  /**
   *
   *          <p>The maximum number of results to be returned.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   *          <p>A pagination token for obtaining the next page of results.</p>
   *
   */
  NextToken?: string;
}

export namespace ListIdentityPoolUsageResponse {
  export function isa(o: any): o is ListIdentityPoolUsageResponse {
    return _smithy.isa(o, "ListIdentityPoolUsageResponse");
  }
}

/**
 *
 *          <p>A request for a list of records.</p>
 *
 */
export interface ListRecordsRequest {
  __type?: "ListRecordsRequest";
  /**
   *
   *          <p>A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).</p>
   *
   */
  DatasetName: string | undefined;

  /**
   *
   *          <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.</p>
   *
   */
  IdentityId: string | undefined;

  /**
   *
   *          <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.</p>
   *
   */
  IdentityPoolId: string | undefined;

  /**
   *
   *          <p>The last server sync count for this record.</p>
   *
   */
  LastSyncCount?: number;

  /**
   *
   *          <p>The maximum number of results to be returned.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   *          <p>A pagination token for obtaining the next page of results.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *          <p>A token containing a session ID, identity ID, and expiration.</p>
   *
   */
  SyncSessionToken?: string;
}

export namespace ListRecordsRequest {
  export function isa(o: any): o is ListRecordsRequest {
    return _smithy.isa(o, "ListRecordsRequest");
  }
}

/**
 *
 *          <p>Returned for a successful ListRecordsRequest.</p>
 *
 */
export interface ListRecordsResponse extends $MetadataBearer {
  __type?: "ListRecordsResponse";
  /**
   *
   *          <p>Total number of records.</p>
   *
   */
  Count?: number;

  /**
   *
   *          <p>A boolean value specifying whether to delete the dataset locally.</p>
   *
   */
  DatasetDeletedAfterRequestedSyncCount?: boolean;

  /**
   *
   *          <p>Indicates whether the dataset exists.</p>
   *
   */
  DatasetExists?: boolean;

  /**
   *
   *          <p>Server sync count for this dataset.</p>
   *
   */
  DatasetSyncCount?: number;

  /**
   *
   *          <p>The user/device that made the last change to this record.</p>
   *
   */
  LastModifiedBy?: string;

  /**
   *
   *          <p>Names of merged datasets.</p>
   *
   */
  MergedDatasetNames?: Array<string>;

  /**
   *
   *          <p>A pagination token for obtaining the next page of results.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *          <p>A list of all records.</p>
   *
   */
  Records?: Array<_Record>;

  /**
   *
   *          <p>A token containing a session ID, identity ID, and expiration.</p>
   *
   */
  SyncSessionToken?: string;
}

export namespace ListRecordsResponse {
  export function isa(o: any): o is ListRecordsResponse {
    return _smithy.isa(o, "ListRecordsResponse");
  }
}

/**
 *
 *          <p>Thrown when a user is not authorized to access the requested resource.</p>
 *
 */
export interface NotAuthorizedException extends _smithy.SmithyException, $MetadataBearer {
  __type: "NotAuthorizedException";
  $fault: "client";
  /**
   *
   *          <p>The message returned by a NotAuthorizedException.</p>
   *
   */
  message: string | undefined;
}

export namespace NotAuthorizedException {
  export function isa(o: any): o is NotAuthorizedException {
    return _smithy.isa(o, "NotAuthorizedException");
  }
}

export type Operation = "remove" | "replace"

export type Platform = "ADM" | "APNS" | "APNS_SANDBOX" | "GCM"

/**
 *
 *          <p>Configuration options to be applied to the identity pool.</p>
 *
 */
export interface PushSync {
  __type?: "PushSync";
  /**
   *
   *          <p>List of SNS platform application ARNs that could be used by clients.</p>
   *
   */
  ApplicationArns?: Array<string>;

  /**
   *
   *          <p>A role configured to allow Cognito to call SNS on behalf of the developer.</p>
   *
   */
  RoleArn?: string;
}

export namespace PushSync {
  export function isa(o: any): o is PushSync {
    return _smithy.isa(o, "PushSync");
  }
}

/**
 *
 *          <p>The basic data structure of a dataset.</p>
 *
 */
export interface _Record {
  __type?: "Record";
  /**
   *
   *          <p>The last modified date of the client device.</p>
   *
   */
  DeviceLastModifiedDate?: Date;

  /**
   *
   *          <p>The key for the record.</p>
   *
   */
  Key?: string;

  /**
   *
   *          <p>The user/device that made the last change to this record.</p>
   *
   */
  LastModifiedBy?: string;

  /**
   *
   *          <p>The date on which the record was last modified.</p>
   *
   */
  LastModifiedDate?: Date;

  /**
   *
   *          <p>The server sync count for this record.</p>
   *
   */
  SyncCount?: number;

  /**
   *
   *          <p>The value for the record.</p>
   *
   */
  Value?: string;
}

export namespace _Record {
  export function isa(o: any): o is _Record {
    return _smithy.isa(o, "Record");
  }
}

/**
 *
 *          <p>An update operation for a record.</p>
 *
 */
export interface RecordPatch {
  __type?: "RecordPatch";
  /**
   *
   *          <p>The last modified date of the client device.</p>
   *
   */
  DeviceLastModifiedDate?: Date;

  /**
   *
   *          <p>The key associated with the record patch.</p>
   *
   */
  Key: string | undefined;

  /**
   *
   *          <p>An operation, either replace or remove.</p>
   *
   */
  Op: Operation | string | undefined;

  /**
   *
   *          <p>Last known server sync count for this record. Set to 0 if unknown.</p>
   *
   */
  SyncCount: number | undefined;

  /**
   *
   *          <p>The value associated with the record patch.</p>
   *
   */
  Value?: string;
}

export namespace RecordPatch {
  export function isa(o: any): o is RecordPatch {
    return _smithy.isa(o, "RecordPatch");
  }
}

/**
 *
 *          <p>A request to RegisterDevice.</p>
 *
 */
export interface RegisterDeviceRequest {
  __type?: "RegisterDeviceRequest";
  /**
   *
   *          <p>The unique ID for this identity.</p>
   *
   */
  IdentityId: string | undefined;

  /**
   *
   *          <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. Here, the ID of the pool that the identity belongs to.</p>
   *
   */
  IdentityPoolId: string | undefined;

  /**
   *
   *          <p>The SNS platform type (e.g. GCM, SDM, APNS, APNS_SANDBOX).</p>
   *
   */
  Platform: Platform | string | undefined;

  /**
   *
   *          <p>The push token.</p>
   *
   */
  Token: string | undefined;
}

export namespace RegisterDeviceRequest {
  export function isa(o: any): o is RegisterDeviceRequest {
    return _smithy.isa(o, "RegisterDeviceRequest");
  }
}

/**
 *
 *          <p>Response to a RegisterDevice request.</p>
 *
 */
export interface RegisterDeviceResponse extends $MetadataBearer {
  __type?: "RegisterDeviceResponse";
  /**
   *
   *          <p>The unique ID generated for this device by Cognito.</p>
   *
   */
  DeviceId?: string;
}

export namespace RegisterDeviceResponse {
  export function isa(o: any): o is RegisterDeviceResponse {
    return _smithy.isa(o, "RegisterDeviceResponse");
  }
}

/**
 *
 *          <p>Thrown if an update can't be applied because the resource was changed by another call and this would result in a conflict.</p>
 *
 */
export interface ResourceConflictException extends _smithy.SmithyException, $MetadataBearer {
  __type: "ResourceConflictException";
  $fault: "client";
  /**
   *
   *          <p>The message returned by a ResourceConflictException.</p>
   *
   */
  message: string | undefined;
}

export namespace ResourceConflictException {
  export function isa(o: any): o is ResourceConflictException {
    return _smithy.isa(o, "ResourceConflictException");
  }
}

/**
 *
 *          <p>Thrown if the resource doesn't exist.</p>
 *
 */
export interface ResourceNotFoundException extends _smithy.SmithyException, $MetadataBearer {
  __type: "ResourceNotFoundException";
  $fault: "client";
  /**
   *
   *          <p>Message returned by a ResourceNotFoundException.</p>
   *
   */
  message: string | undefined;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return _smithy.isa(o, "ResourceNotFoundException");
  }
}

/**
 *
 *          <p>A request to configure Cognito Events.</p>
 *
 */
export interface SetCognitoEventsRequest {
  __type?: "SetCognitoEventsRequest";
  /**
   *
   *          <p>The events to configure</p>
   *
   */
  Events: { [key: string]: string } | undefined;

  /**
   *
   *          <p>The Cognito Identity Pool to use when configuring Cognito Events</p>
   *
   */
  IdentityPoolId: string | undefined;
}

export namespace SetCognitoEventsRequest {
  export function isa(o: any): o is SetCognitoEventsRequest {
    return _smithy.isa(o, "SetCognitoEventsRequest");
  }
}

/**
 *
 *          <p>The input for the SetIdentityPoolConfiguration operation.</p>
 *
 */
export interface SetIdentityPoolConfigurationRequest {
  __type?: "SetIdentityPoolConfigurationRequest";
  /**
   *
   *          <p>Options to apply to this identity pool for Amazon Cognito streams.</p>
   *
   */
  CognitoStreams?: CognitoStreams;

  /**
   *
   *          <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. This is the ID of the pool to modify.</p>
   *
   */
  IdentityPoolId: string | undefined;

  /**
   *
   *          <p>Options to apply to this identity pool for push synchronization.</p>
   *
   */
  PushSync?: PushSync;
}

export namespace SetIdentityPoolConfigurationRequest {
  export function isa(o: any): o is SetIdentityPoolConfigurationRequest {
    return _smithy.isa(o, "SetIdentityPoolConfigurationRequest");
  }
}

/**
 *
 *          <p>The output for the SetIdentityPoolConfiguration operation</p>
 *
 */
export interface SetIdentityPoolConfigurationResponse extends $MetadataBearer {
  __type?: "SetIdentityPoolConfigurationResponse";
  /**
   *
   *          <p>Options to apply to this identity pool for Amazon Cognito streams.</p>
   *
   */
  CognitoStreams?: CognitoStreams;

  /**
   *
   *          <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito.</p>
   *
   */
  IdentityPoolId?: string;

  /**
   *
   *          <p>Options to apply to this identity pool for push synchronization.</p>
   *
   */
  PushSync?: PushSync;
}

export namespace SetIdentityPoolConfigurationResponse {
  export function isa(o: any): o is SetIdentityPoolConfigurationResponse {
    return _smithy.isa(o, "SetIdentityPoolConfigurationResponse");
  }
}

export type StreamingStatus = "DISABLED" | "ENABLED"

/**
 *
 *          <p>A request to SubscribeToDatasetRequest.</p>
 *
 */
export interface SubscribeToDatasetRequest {
  __type?: "SubscribeToDatasetRequest";
  /**
   *
   *          <p>The name of the dataset to subcribe to.</p>
   *
   */
  DatasetName: string | undefined;

  /**
   *
   *          <p>The unique ID generated for this device by Cognito.</p>
   *
   */
  DeviceId: string | undefined;

  /**
   *
   *          <p>Unique ID for this identity.</p>
   *
   */
  IdentityId: string | undefined;

  /**
   *
   *          <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. The ID of the pool to which the identity belongs.</p>
   *
   */
  IdentityPoolId: string | undefined;
}

export namespace SubscribeToDatasetRequest {
  export function isa(o: any): o is SubscribeToDatasetRequest {
    return _smithy.isa(o, "SubscribeToDatasetRequest");
  }
}

/**
 *
 *          <p>Response to a SubscribeToDataset request.</p>
 *
 */
export interface SubscribeToDatasetResponse extends $MetadataBearer {
  __type?: "SubscribeToDatasetResponse";
}

export namespace SubscribeToDatasetResponse {
  export function isa(o: any): o is SubscribeToDatasetResponse {
    return _smithy.isa(o, "SubscribeToDatasetResponse");
  }
}

/**
 *
 *          <p>Thrown if the request is throttled.</p>
 *
 */
export interface TooManyRequestsException extends _smithy.SmithyException, $MetadataBearer {
  __type: "TooManyRequestsException";
  $fault: "client";
  /**
   *
   *          <p>Message returned by a TooManyRequestsException.</p>
   *
   */
  message: string | undefined;
}

export namespace TooManyRequestsException {
  export function isa(o: any): o is TooManyRequestsException {
    return _smithy.isa(o, "TooManyRequestsException");
  }
}

/**
 *
 *          <p>A request to UnsubscribeFromDataset.</p>
 *
 */
export interface UnsubscribeFromDatasetRequest {
  __type?: "UnsubscribeFromDatasetRequest";
  /**
   *
   *          <p>The name of the dataset from which to unsubcribe.</p>
   *
   */
  DatasetName: string | undefined;

  /**
   *
   *          <p>The unique ID generated for this device by Cognito.</p>
   *
   */
  DeviceId: string | undefined;

  /**
   *
   *          <p>Unique ID for this identity.</p>
   *
   */
  IdentityId: string | undefined;

  /**
   *
   *          <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. The ID of the pool to which this identity belongs.</p>
   *
   */
  IdentityPoolId: string | undefined;
}

export namespace UnsubscribeFromDatasetRequest {
  export function isa(o: any): o is UnsubscribeFromDatasetRequest {
    return _smithy.isa(o, "UnsubscribeFromDatasetRequest");
  }
}

/**
 *
 *          <p>Response to an UnsubscribeFromDataset request.</p>
 *
 */
export interface UnsubscribeFromDatasetResponse extends $MetadataBearer {
  __type?: "UnsubscribeFromDatasetResponse";
}

export namespace UnsubscribeFromDatasetResponse {
  export function isa(o: any): o is UnsubscribeFromDatasetResponse {
    return _smithy.isa(o, "UnsubscribeFromDatasetResponse");
  }
}

/**
 *
 *          <p>A request to post updates to records or add and delete records for a dataset and user.</p>
 *
 */
export interface UpdateRecordsRequest {
  __type?: "UpdateRecordsRequest";
  /**
   *
   *          <p>Intended to supply a device ID that will populate the lastModifiedBy field referenced in other methods. The ClientContext field is not yet implemented.</p>
   *
   */
  ClientContext?: string;

  /**
   *
   *          <p>A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).</p>
   *
   */
  DatasetName: string | undefined;

  /**
   *
   *          <p>The unique ID generated for this device by Cognito.</p>
   *
   */
  DeviceId?: string;

  /**
   *
   *          <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.</p>
   *
   */
  IdentityId: string | undefined;

  /**
   *
   *          <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.</p>
   *
   */
  IdentityPoolId: string | undefined;

  /**
   *
   *          <p>A list of patch operations.</p>
   *
   */
  RecordPatches?: Array<RecordPatch>;

  /**
   *
   *          <p>The SyncSessionToken returned by a previous call to ListRecords for this dataset and identity.</p>
   *
   */
  SyncSessionToken: string | undefined;
}

export namespace UpdateRecordsRequest {
  export function isa(o: any): o is UpdateRecordsRequest {
    return _smithy.isa(o, "UpdateRecordsRequest");
  }
}

/**
 *
 *          <p>Returned for a successful UpdateRecordsRequest.</p>
 *
 */
export interface UpdateRecordsResponse extends $MetadataBearer {
  __type?: "UpdateRecordsResponse";
  /**
   *
   *          <p>A list of records that have been updated.</p>
   *
   */
  Records?: Array<_Record>;
}

export namespace UpdateRecordsResponse {
  export function isa(o: any): o is UpdateRecordsResponse {
    return _smithy.isa(o, "UpdateRecordsResponse");
  }
}
