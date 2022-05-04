// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CognitoSyncClient } from "./CognitoSyncClient";
import { BulkPublishCommand, BulkPublishCommandInput, BulkPublishCommandOutput } from "./commands/BulkPublishCommand";
import {
  DeleteDatasetCommand,
  DeleteDatasetCommandInput,
  DeleteDatasetCommandOutput,
} from "./commands/DeleteDatasetCommand";
import {
  DescribeDatasetCommand,
  DescribeDatasetCommandInput,
  DescribeDatasetCommandOutput,
} from "./commands/DescribeDatasetCommand";
import {
  DescribeIdentityPoolUsageCommand,
  DescribeIdentityPoolUsageCommandInput,
  DescribeIdentityPoolUsageCommandOutput,
} from "./commands/DescribeIdentityPoolUsageCommand";
import {
  DescribeIdentityUsageCommand,
  DescribeIdentityUsageCommandInput,
  DescribeIdentityUsageCommandOutput,
} from "./commands/DescribeIdentityUsageCommand";
import {
  GetBulkPublishDetailsCommand,
  GetBulkPublishDetailsCommandInput,
  GetBulkPublishDetailsCommandOutput,
} from "./commands/GetBulkPublishDetailsCommand";
import {
  GetCognitoEventsCommand,
  GetCognitoEventsCommandInput,
  GetCognitoEventsCommandOutput,
} from "./commands/GetCognitoEventsCommand";
import {
  GetIdentityPoolConfigurationCommand,
  GetIdentityPoolConfigurationCommandInput,
  GetIdentityPoolConfigurationCommandOutput,
} from "./commands/GetIdentityPoolConfigurationCommand";
import {
  ListDatasetsCommand,
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput,
} from "./commands/ListDatasetsCommand";
import {
  ListIdentityPoolUsageCommand,
  ListIdentityPoolUsageCommandInput,
  ListIdentityPoolUsageCommandOutput,
} from "./commands/ListIdentityPoolUsageCommand";
import { ListRecordsCommand, ListRecordsCommandInput, ListRecordsCommandOutput } from "./commands/ListRecordsCommand";
import {
  RegisterDeviceCommand,
  RegisterDeviceCommandInput,
  RegisterDeviceCommandOutput,
} from "./commands/RegisterDeviceCommand";
import {
  SetCognitoEventsCommand,
  SetCognitoEventsCommandInput,
  SetCognitoEventsCommandOutput,
} from "./commands/SetCognitoEventsCommand";
import {
  SetIdentityPoolConfigurationCommand,
  SetIdentityPoolConfigurationCommandInput,
  SetIdentityPoolConfigurationCommandOutput,
} from "./commands/SetIdentityPoolConfigurationCommand";
import {
  SubscribeToDatasetCommand,
  SubscribeToDatasetCommandInput,
  SubscribeToDatasetCommandOutput,
} from "./commands/SubscribeToDatasetCommand";
import {
  UnsubscribeFromDatasetCommand,
  UnsubscribeFromDatasetCommandInput,
  UnsubscribeFromDatasetCommandOutput,
} from "./commands/UnsubscribeFromDatasetCommand";
import {
  UpdateRecordsCommand,
  UpdateRecordsCommandInput,
  UpdateRecordsCommandOutput,
} from "./commands/UpdateRecordsCommand";

/**
 * <fullname>Amazon Cognito Sync</fullname>
 *       <p>Amazon Cognito Sync provides an AWS service and client library that enable cross-device syncing of
 *          application-related user data. High-level client libraries are available for both iOS and
 *          Android. You can use these libraries to persist data locally so that it's available even if
 *          the device is offline. Developer credentials don't need to be stored on the mobile device
 *          to access the service. You can use Amazon Cognito to obtain a normalized user ID and
 *          credentials. User data is persisted in a dataset that can store up to 1 MB of key-value
 *          pairs, and you can have up to 20 datasets per user identity.</p>
 *       <p>With Amazon Cognito Sync, the data stored for each identity is accessible only to
 *          credentials assigned to that identity. In order to use the Cognito Sync service, you need
 *          to make API calls using credentials retrieved with <a href="http://docs.aws.amazon.com/cognitoidentity/latest/APIReference/Welcome.html">Amazon Cognito Identity service</a>.</p>
 *       <p>If you want to use Cognito Sync in an Android or iOS application, you will probably want to
 *          make API calls via the AWS Mobile SDK. To learn more, see the <a href="http://docs.aws.amazon.com/mobile/sdkforandroid/developerguide/cognito-sync.html">Developer Guide for Android</a> and the <a href="http://docs.aws.amazon.com/mobile/sdkforios/developerguide/cognito-sync.html">Developer Guide for iOS</a>.</p>
 */
export class CognitoSync extends CognitoSyncClient {
  /**
   * <p>Initiates a bulk publish of all existing datasets for an Identity Pool to the configured stream. Customers are limited to one successful bulk publish per 24 hours. Bulk publish is an asynchronous request, customers can see the status of the request via the GetBulkPublishDetails operation.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
   */
  public bulkPublish(args: BulkPublishCommandInput, options?: __HttpHandlerOptions): Promise<BulkPublishCommandOutput>;
  public bulkPublish(args: BulkPublishCommandInput, cb: (err: any, data?: BulkPublishCommandOutput) => void): void;
  public bulkPublish(
    args: BulkPublishCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BulkPublishCommandOutput) => void
  ): void;
  public bulkPublish(
    args: BulkPublishCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BulkPublishCommandOutput) => void),
    cb?: (err: any, data?: BulkPublishCommandOutput) => void
  ): Promise<BulkPublishCommandOutput> | void {
    const command = new BulkPublishCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specific dataset. The dataset will be deleted permanently, and the action can't
   *          be undone. Datasets that this dataset was merged with will no longer report the merge. Any
   *          subsequent operation on this dataset will result in a
   *             ResourceNotFoundException.</p>
   *           <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
   */
  public deleteDataset(
    args: DeleteDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatasetCommandOutput>;
  public deleteDataset(
    args: DeleteDatasetCommandInput,
    cb: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): void;
  public deleteDataset(
    args: DeleteDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): void;
  public deleteDataset(
    args: DeleteDatasetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDatasetCommandOutput) => void),
    cb?: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): Promise<DeleteDatasetCommandOutput> | void {
    const command = new DeleteDatasetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets meta data about a dataset by identity and dataset name. With Amazon Cognito Sync, each
   *          identity has access only to its own data. Thus, the credentials used to make this API call
   *          need to have access to the identity data.</p>
   *       <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>
   */
  public describeDataset(
    args: DescribeDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDatasetCommandOutput>;
  public describeDataset(
    args: DescribeDatasetCommandInput,
    cb: (err: any, data?: DescribeDatasetCommandOutput) => void
  ): void;
  public describeDataset(
    args: DescribeDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDatasetCommandOutput) => void
  ): void;
  public describeDataset(
    args: DescribeDatasetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDatasetCommandOutput) => void),
    cb?: (err: any, data?: DescribeDatasetCommandOutput) => void
  ): Promise<DescribeDatasetCommandOutput> | void {
    const command = new DescribeDatasetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets usage details (for example, data storage) about a particular identity pool.</p>
   *       <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
   *
   *       <examples>
   *          <example>
   *             <name>DescribeIdentityPoolUsage</name>
   *             <description>The following examples have been edited for readability.</description>
   *             <request>
   * POST / HTTP/1.1
   * CONTENT-TYPE: application/json
   * X-AMZN-REQUESTID: 8dc0e749-c8cd-48bd-8520-da6be00d528b
   * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.DescribeIdentityPoolUsage
   * HOST: cognito-sync.us-east-1.amazonaws.com:443
   * X-AMZ-DATE: 20141111T205737Z
   * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;host;x-amz-date;x-amz-target;x-amzn-requestid, Signature=<signature>
   *
   * {
   *     "Operation": "com.amazonaws.cognito.sync.model#DescribeIdentityPoolUsage",
   *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
   *     "Input":
   *     {
   *         "IdentityPoolId": "IDENTITY_POOL_ID"
   *     }
   * }
   *                </request>
   *             <response>
   * 1.1 200 OK
   * x-amzn-requestid: 8dc0e749-c8cd-48bd-8520-da6be00d528b
   * content-type: application/json
   * content-length: 271
   * date: Tue, 11 Nov 2014 20:57:37 GMT
   *
   * {
   *     "Output":
   *     {
   *         "__type": "com.amazonaws.cognito.sync.model#DescribeIdentityPoolUsageResponse",
   *         "IdentityPoolUsage":
   *         {
   *             "DataStorage": 0,
   *             "IdentityPoolId": "IDENTITY_POOL_ID",
   *             "LastModifiedDate": 1.413231134115E9,
   *             "SyncSessionsCount": null
   *         }
   *     },
   *     "Version": "1.0"
   * }
   *                </response>
   *          </example>
   *       </examples>
   */
  public describeIdentityPoolUsage(
    args: DescribeIdentityPoolUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIdentityPoolUsageCommandOutput>;
  public describeIdentityPoolUsage(
    args: DescribeIdentityPoolUsageCommandInput,
    cb: (err: any, data?: DescribeIdentityPoolUsageCommandOutput) => void
  ): void;
  public describeIdentityPoolUsage(
    args: DescribeIdentityPoolUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIdentityPoolUsageCommandOutput) => void
  ): void;
  public describeIdentityPoolUsage(
    args: DescribeIdentityPoolUsageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeIdentityPoolUsageCommandOutput) => void),
    cb?: (err: any, data?: DescribeIdentityPoolUsageCommandOutput) => void
  ): Promise<DescribeIdentityPoolUsageCommandOutput> | void {
    const command = new DescribeIdentityPoolUsageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets usage information for an identity, including number of datasets and data usage.</p>
   *       <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
   *       <examples>
   *          <example>
   *             <name>DescribeIdentityUsage</name>
   *             <description>The following examples have been edited for readability.</description>
   *             <request>
   * POST / HTTP/1.1
   * CONTENT-TYPE: application/json
   * X-AMZN-REQUESTID: 33f9b4e4-a177-4aad-a3bb-6edb7980b283
   * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.DescribeIdentityUsage
   * HOST: cognito-sync.us-east-1.amazonaws.com:443
   * X-AMZ-DATE: 20141111T215129Z
   * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;host;x-amz-date;x-amz-target;x-amzn-requestid, Signature=<signature>
   *
   * {
   *     "Operation": "com.amazonaws.cognito.sync.model#DescribeIdentityUsage",
   *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
   *     "Input":
   *     {
   *         "IdentityPoolId": "IDENTITY_POOL_ID",
   *         "IdentityId": "IDENTITY_ID"
   *     }
   * }
   *                </request>
   *             <response>
   *                1.1 200 OK
   * x-amzn-requestid: 33f9b4e4-a177-4aad-a3bb-6edb7980b283
   * content-type: application/json
   * content-length: 318
   * date: Tue, 11 Nov 2014 21:51:29 GMT
   *
   * {
   *     "Output":
   *     {
   *         "__type": "com.amazonaws.cognito.sync.model#DescribeIdentityUsageResponse",
   *         "IdentityUsage":
   *         {
   *             "DataStorage": 16,
   *             "DatasetCount": 1,
   *             "IdentityId": "IDENTITY_ID",
   *             "IdentityPoolId": "IDENTITY_POOL_ID",
   *             "LastModifiedDate": 1.412974081336E9
   *         }
   *     },
   *     "Version": "1.0"
   * }
   *                </response>
   *          </example>
   *       </examples>
   */
  public describeIdentityUsage(
    args: DescribeIdentityUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIdentityUsageCommandOutput>;
  public describeIdentityUsage(
    args: DescribeIdentityUsageCommandInput,
    cb: (err: any, data?: DescribeIdentityUsageCommandOutput) => void
  ): void;
  public describeIdentityUsage(
    args: DescribeIdentityUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIdentityUsageCommandOutput) => void
  ): void;
  public describeIdentityUsage(
    args: DescribeIdentityUsageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeIdentityUsageCommandOutput) => void),
    cb?: (err: any, data?: DescribeIdentityUsageCommandOutput) => void
  ): Promise<DescribeIdentityUsageCommandOutput> | void {
    const command = new DescribeIdentityUsageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get the status of the last BulkPublish operation for an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
   */
  public getBulkPublishDetails(
    args: GetBulkPublishDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBulkPublishDetailsCommandOutput>;
  public getBulkPublishDetails(
    args: GetBulkPublishDetailsCommandInput,
    cb: (err: any, data?: GetBulkPublishDetailsCommandOutput) => void
  ): void;
  public getBulkPublishDetails(
    args: GetBulkPublishDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBulkPublishDetailsCommandOutput) => void
  ): void;
  public getBulkPublishDetails(
    args: GetBulkPublishDetailsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBulkPublishDetailsCommandOutput) => void),
    cb?: (err: any, data?: GetBulkPublishDetailsCommandOutput) => void
  ): Promise<GetBulkPublishDetailsCommandOutput> | void {
    const command = new GetBulkPublishDetailsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the events and the corresponding Lambda functions associated with an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
   */
  public getCognitoEvents(
    args: GetCognitoEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCognitoEventsCommandOutput>;
  public getCognitoEvents(
    args: GetCognitoEventsCommandInput,
    cb: (err: any, data?: GetCognitoEventsCommandOutput) => void
  ): void;
  public getCognitoEvents(
    args: GetCognitoEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCognitoEventsCommandOutput) => void
  ): void;
  public getCognitoEvents(
    args: GetCognitoEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCognitoEventsCommandOutput) => void),
    cb?: (err: any, data?: GetCognitoEventsCommandOutput) => void
  ): Promise<GetCognitoEventsCommandOutput> | void {
    const command = new GetCognitoEventsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the configuration settings of an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
   *       <examples>
   *          <example>
   *             <name>GetIdentityPoolConfiguration</name>
   *             <description>The following examples have been edited for readability.</description>
   *             <request>
   * POST / HTTP/1.1
   * CONTENT-TYPE: application/json
   * X-AMZN-REQUESTID: b1cfdd4b-f620-4fe4-be0f-02024a1d33da
   * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.GetIdentityPoolConfiguration
   * HOST: cognito-sync.us-east-1.amazonaws.com
   * X-AMZ-DATE: 20141004T195722Z
   * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;content-length;host;x-amz-date;x-amz-target, Signature=<signature>
   *
   * {
   *     "Operation": "com.amazonaws.cognito.sync.model#GetIdentityPoolConfiguration",
   *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
   *     "Input":
   *     {
   *         "IdentityPoolId": "ID_POOL_ID"
   *     }
   * }
   *
   *             </request>
   *             <response>
   * 1.1 200 OK
   * x-amzn-requestid: b1cfdd4b-f620-4fe4-be0f-02024a1d33da
   * date: Sat, 04 Oct 2014 19:57:22 GMT
   * content-type: application/json
   * content-length: 332
   *
   * {
   *     "Output":
   *     {
   *         "__type": "com.amazonaws.cognito.sync.model#GetIdentityPoolConfigurationResponse",
   *         "IdentityPoolId": "ID_POOL_ID",
   *         "PushSync":
   *         {
   *             "ApplicationArns": ["PLATFORMARN1", "PLATFORMARN2"],
   *             "RoleArn": "ROLEARN"
   *         }
   *     },
   *     "Version": "1.0"
   * }
   *  </response>
   *          </example>
   *       </examples>
   */
  public getIdentityPoolConfiguration(
    args: GetIdentityPoolConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIdentityPoolConfigurationCommandOutput>;
  public getIdentityPoolConfiguration(
    args: GetIdentityPoolConfigurationCommandInput,
    cb: (err: any, data?: GetIdentityPoolConfigurationCommandOutput) => void
  ): void;
  public getIdentityPoolConfiguration(
    args: GetIdentityPoolConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdentityPoolConfigurationCommandOutput) => void
  ): void;
  public getIdentityPoolConfiguration(
    args: GetIdentityPoolConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetIdentityPoolConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetIdentityPoolConfigurationCommandOutput) => void
  ): Promise<GetIdentityPoolConfigurationCommandOutput> | void {
    const command = new GetIdentityPoolConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists datasets for an identity. With Amazon Cognito Sync, each identity has access only to
   *          its own data. Thus, the credentials used to make this API call need to have access to the
   *          identity data.</p>
   *       <p>ListDatasets can be called with temporary user credentials provided by Cognito
   *          Identity or with developer credentials. You should use the Cognito Identity credentials to
   *          make this API call.</p>
   *       <examples>
   *          <example>
   *             <name>ListDatasets</name>
   *             <description>The following examples have been edited for readability.</description>
   *             <request>
   * POST / HTTP/1.1
   * CONTENT-TYPE: application/json
   * X-AMZN-REQUESTID: 15225768-209f-4078-aaed-7494ace9f2db
   * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.ListDatasets
   * HOST: cognito-sync.us-east-1.amazonaws.com:443
   * X-AMZ-DATE: 20141111T215640Z
   * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;host;x-amz-date;x-amz-target;x-amzn-requestid, Signature=<signature>
   *
   * {
   *     "Operation": "com.amazonaws.cognito.sync.model#ListDatasets",
   *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
   *     "Input":
   *     {
   *         "IdentityPoolId": "IDENTITY_POOL_ID",
   *         "IdentityId": "IDENTITY_ID",
   *         "MaxResults": "3"
   *     }
   * }
   *                </request>
   *             <response>
   * 1.1 200 OK
   * x-amzn-requestid: 15225768-209f-4078-aaed-7494ace9f2db, 15225768-209f-4078-aaed-7494ace9f2db
   * content-type: application/json
   * content-length: 355
   * date: Tue, 11 Nov 2014 21:56:40 GMT
   *
   * {
   *     "Output":
   *     {
   *         "__type": "com.amazonaws.cognito.sync.model#ListDatasetsResponse",
   *         "Count": 1,
   *         "Datasets": [
   *         {
   *             "CreationDate": 1.412974057151E9,
   *             "DataStorage": 16,
   *             "DatasetName": "my_list",
   *             "IdentityId": "IDENTITY_ID",
   *             "LastModifiedBy": "123456789012",
   *             "LastModifiedDate": 1.412974057244E9,
   *             "NumRecords": 1
   *         }],
   *         "NextToken": null
   *     },
   *     "Version": "1.0"
   * }
   *                </response>
   *          </example>
   *       </examples>
   */
  public listDatasets(
    args: ListDatasetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatasetsCommandOutput>;
  public listDatasets(args: ListDatasetsCommandInput, cb: (err: any, data?: ListDatasetsCommandOutput) => void): void;
  public listDatasets(
    args: ListDatasetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetsCommandOutput) => void
  ): void;
  public listDatasets(
    args: ListDatasetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDatasetsCommandOutput) => void),
    cb?: (err: any, data?: ListDatasetsCommandOutput) => void
  ): Promise<ListDatasetsCommandOutput> | void {
    const command = new ListDatasetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a list of identity pools registered with Cognito.</p>
   *       <p>ListIdentityPoolUsage can only be called with developer credentials. You
   *          cannot make this API call with the temporary user credentials provided by Cognito
   *          Identity.</p>
   *       <examples>
   *          <example>
   *             <name>ListIdentityPoolUsage</name>
   *             <description>The following examples have been edited for readability.</description>
   *             <request>
   * POST / HTTP/1.1
   * CONTENT-TYPE: application/json
   * X-AMZN-REQUESTID: 9be7c425-ef05-48c0-aef3-9f0ff2fe17d3
   * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.ListIdentityPoolUsage
   * HOST: cognito-sync.us-east-1.amazonaws.com:443
   * X-AMZ-DATE: 20141111T211414Z
   * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;host;x-amz-date;x-amz-target;x-amzn-requestid, Signature=<signature>
   *
   * {
   *     "Operation": "com.amazonaws.cognito.sync.model#ListIdentityPoolUsage",
   *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
   *     "Input":
   *     {
   *         "MaxResults": "2"
   *     }
   * }
   *                </request>
   *             <response>
   * 1.1 200 OK
   * x-amzn-requestid: 9be7c425-ef05-48c0-aef3-9f0ff2fe17d3
   * content-type: application/json
   * content-length: 519
   * date: Tue, 11 Nov 2014 21:14:14 GMT
   *
   * {
   *     "Output":
   *     {
   *         "__type": "com.amazonaws.cognito.sync.model#ListIdentityPoolUsageResponse",
   *         "Count": 2,
   *         "IdentityPoolUsages": [
   *         {
   *             "DataStorage": 0,
   *             "IdentityPoolId": "IDENTITY_POOL_ID",
   *             "LastModifiedDate": 1.413836234607E9,
   *             "SyncSessionsCount": null
   *         },
   *         {
   *             "DataStorage": 0,
   *             "IdentityPoolId": "IDENTITY_POOL_ID",
   *             "LastModifiedDate": 1.410892165601E9,
   *             "SyncSessionsCount": null
   *         }],
   *         "MaxResults": 2,
   *         "NextToken": "dXMtZWFzdC0xOjBjMWJhMDUyLWUwOTgtNDFmYS1hNzZlLWVhYTJjMTI1Zjg2MQ=="
   *     },
   *     "Version": "1.0"
   * }
   *                </response>
   *          </example>
   *       </examples>
   */
  public listIdentityPoolUsage(
    args: ListIdentityPoolUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIdentityPoolUsageCommandOutput>;
  public listIdentityPoolUsage(
    args: ListIdentityPoolUsageCommandInput,
    cb: (err: any, data?: ListIdentityPoolUsageCommandOutput) => void
  ): void;
  public listIdentityPoolUsage(
    args: ListIdentityPoolUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIdentityPoolUsageCommandOutput) => void
  ): void;
  public listIdentityPoolUsage(
    args: ListIdentityPoolUsageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListIdentityPoolUsageCommandOutput) => void),
    cb?: (err: any, data?: ListIdentityPoolUsageCommandOutput) => void
  ): Promise<ListIdentityPoolUsageCommandOutput> | void {
    const command = new ListIdentityPoolUsageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets paginated records, optionally changed after a particular sync count for a dataset and
   *          identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus,
   *          the credentials used to make this API call need to have access to the identity data.</p>
   *       <p>ListRecords can be called with temporary user credentials provided by Cognito
   *          Identity or with developer credentials. You should use Cognito Identity credentials to make
   *          this API call.</p>
   *       <examples>
   *          <example>
   *             <name>ListRecords</name>
   *             <description>The following examples have been edited for readability.</description>
   *             <request>
   * POST / HTTP/1.1
   * CONTENT-TYPE: application/json
   * X-AMZN-REQUESTID: b3d2e31e-d6b7-4612-8e84-c9ba288dab5d
   * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.ListRecords
   * HOST: cognito-sync.us-east-1.amazonaws.com:443
   * X-AMZ-DATE: 20141111T183230Z
   * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;host;x-amz-date;x-amz-target;x-amzn-requestid, Signature=<signature>
   *
   * {
   *     "Operation": "com.amazonaws.cognito.sync.model#ListRecords",
   *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
   *     "Input":
   *     {
   *         "IdentityPoolId": "IDENTITY_POOL_ID",
   *         "IdentityId": "IDENTITY_ID",
   *         "DatasetName": "newDataSet"
   *     }
   * }
   *                </request>
   *             <response>
   * 1.1 200 OK
   * x-amzn-requestid: b3d2e31e-d6b7-4612-8e84-c9ba288dab5d
   * content-type: application/json
   * content-length: 623
   * date: Tue, 11 Nov 2014 18:32:30 GMT
   *
   * {
   *     "Output":
   *     {
   *         "__type": "com.amazonaws.cognito.sync.model#ListRecordsResponse",
   *         "Count": 0,
   *         "DatasetDeletedAfterRequestedSyncCount": false,
   *         "DatasetExists": false,
   *         "DatasetSyncCount": 0,
   *         "LastModifiedBy": null,
   *         "MergedDatasetNames": null,
   *         "NextToken": null,
   *         "Records": [],
   *         "SyncSessionToken": "SYNC_SESSION_TOKEN"
   *     },
   *     "Version": "1.0"
   * }
   *                </response>
   *          </example>
   *       </examples>
   */
  public listRecords(args: ListRecordsCommandInput, options?: __HttpHandlerOptions): Promise<ListRecordsCommandOutput>;
  public listRecords(args: ListRecordsCommandInput, cb: (err: any, data?: ListRecordsCommandOutput) => void): void;
  public listRecords(
    args: ListRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecordsCommandOutput) => void
  ): void;
  public listRecords(
    args: ListRecordsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRecordsCommandOutput) => void),
    cb?: (err: any, data?: ListRecordsCommandOutput) => void
  ): Promise<ListRecordsCommandOutput> | void {
    const command = new ListRecordsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Registers a device to receive push sync notifications.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
   *       <examples>
   *          <example>
   *             <name>RegisterDevice</name>
   *             <description>The following examples have been edited for readability.</description>
   *             <request>
   * POST / HTTP/1.1
   * CONTENT-TYPE: application/json
   * X-AMZN-REQUESTID: 368f9200-3eca-449e-93b3-7b9c08d8e185
   * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.RegisterDevice
   * HOST: cognito-sync.us-east-1.amazonaws.com
   * X-AMZ-DATE: 20141004T194643Z
   * X-AMZ-SECURITY-TOKEN: <securitytoken>
   * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;content-length;host;x-amz-date;x-amz-target, Signature=<signature>
   *
   * {
   *     "Operation": "com.amazonaws.cognito.sync.model#RegisterDevice",
   *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
   *     "Input":
   *     {
   *         "IdentityPoolId": "ID_POOL_ID",
   *         "IdentityId": "IDENTITY_ID",
   *         "Platform": "GCM",
   *         "Token": "PUSH_TOKEN"
   *     }
   * }
   *                </request>
   *             <response>
   * 1.1 200 OK
   * x-amzn-requestid: 368f9200-3eca-449e-93b3-7b9c08d8e185
   * date: Sat, 04 Oct 2014 19:46:44 GMT
   * content-type: application/json
   * content-length: 145
   *
   * {
   *     "Output":
   *     {
   *         "__type": "com.amazonaws.cognito.sync.model#RegisterDeviceResponse",
   *         "DeviceId": "5cd28fbe-dd83-47ab-9f83-19093a5fb014"
   *     },
   *     "Version": "1.0"
   * }
   *                </response>
   *          </example>
   *       </examples>
   */
  public registerDevice(
    args: RegisterDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterDeviceCommandOutput>;
  public registerDevice(
    args: RegisterDeviceCommandInput,
    cb: (err: any, data?: RegisterDeviceCommandOutput) => void
  ): void;
  public registerDevice(
    args: RegisterDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterDeviceCommandOutput) => void
  ): void;
  public registerDevice(
    args: RegisterDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterDeviceCommandOutput) => void),
    cb?: (err: any, data?: RegisterDeviceCommandOutput) => void
  ): Promise<RegisterDeviceCommandOutput> | void {
    const command = new RegisterDeviceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sets the AWS Lambda function for a given event type for an identity pool. This request only updates the key/value pair specified. Other key/values pairs are not updated. To remove a key value pair, pass a empty value for the particular key.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
   */
  public setCognitoEvents(
    args: SetCognitoEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetCognitoEventsCommandOutput>;
  public setCognitoEvents(
    args: SetCognitoEventsCommandInput,
    cb: (err: any, data?: SetCognitoEventsCommandOutput) => void
  ): void;
  public setCognitoEvents(
    args: SetCognitoEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetCognitoEventsCommandOutput) => void
  ): void;
  public setCognitoEvents(
    args: SetCognitoEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetCognitoEventsCommandOutput) => void),
    cb?: (err: any, data?: SetCognitoEventsCommandOutput) => void
  ): Promise<SetCognitoEventsCommandOutput> | void {
    const command = new SetCognitoEventsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sets the necessary configuration for push sync.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
   *       <examples>
   *          <example>
   *             <name>SetIdentityPoolConfiguration</name>
   *             <description>The following examples have been edited for readability.</description>
   *             <request>
   * POST / HTTP/1.1
   * CONTENT-TYPE: application/json
   * X-AMZN-REQUESTID: a46db021-f5dd-45d6-af5b-7069fa4a211b
   * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.SetIdentityPoolConfiguration
   * HOST: cognito-sync.us-east-1.amazonaws.com
   * X-AMZ-DATE: 20141004T200006Z
   * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;content-length;host;x-amz-date;x-amz-target, Signature=<signature>
   *
   * {
   *     "Operation": "com.amazonaws.cognito.sync.model#SetIdentityPoolConfiguration",
   *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
   *     "Input":
   *     {
   *         "IdentityPoolId": "ID_POOL_ID",
   *         "PushSync":
   *         {
   *             "ApplicationArns": ["PLATFORMARN1", "PLATFORMARN2"],
   *             "RoleArn": "ROLEARN"
   *         }
   *     }
   * }
   *             </request>
   *             <response>
   * 1.1 200 OK
   * x-amzn-requestid: a46db021-f5dd-45d6-af5b-7069fa4a211b
   * date: Sat, 04 Oct 2014 20:00:06 GMT
   * content-type: application/json
   * content-length: 332
   *
   * {
   *     "Output":
   *     {
   *         "__type": "com.amazonaws.cognito.sync.model#SetIdentityPoolConfigurationResponse",
   *         "IdentityPoolId": "ID_POOL_ID",
   *         "PushSync":
   *         {
   *             "ApplicationArns": ["PLATFORMARN1", "PLATFORMARN2"],
   *             "RoleArn": "ROLEARN"
   *         }
   *     },
   *     "Version": "1.0"
   * }
   *             </response>
   *          </example>
   *       </examples>
   */
  public setIdentityPoolConfiguration(
    args: SetIdentityPoolConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetIdentityPoolConfigurationCommandOutput>;
  public setIdentityPoolConfiguration(
    args: SetIdentityPoolConfigurationCommandInput,
    cb: (err: any, data?: SetIdentityPoolConfigurationCommandOutput) => void
  ): void;
  public setIdentityPoolConfiguration(
    args: SetIdentityPoolConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetIdentityPoolConfigurationCommandOutput) => void
  ): void;
  public setIdentityPoolConfiguration(
    args: SetIdentityPoolConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetIdentityPoolConfigurationCommandOutput) => void),
    cb?: (err: any, data?: SetIdentityPoolConfigurationCommandOutput) => void
  ): Promise<SetIdentityPoolConfigurationCommandOutput> | void {
    const command = new SetIdentityPoolConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Subscribes to receive notifications when a dataset is modified by another device.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
   *       <examples>
   *          <example>
   *             <name>SubscribeToDataset</name>
   *             <description>The following examples have been edited for readability.</description>
   *             <request>
   * POST / HTTP/1.1
   * CONTENT-TYPE: application/json
   * X-AMZN-REQUESTID: 8b9932b7-201d-4418-a960-0a470e11de9f
   * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.SubscribeToDataset
   * HOST: cognito-sync.us-east-1.amazonaws.com
   * X-AMZ-DATE: 20141004T195350Z
   * X-AMZ-SECURITY-TOKEN: <securitytoken>
   * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;content-length;host;x-amz-date;x-amz-target, Signature=<signature>
   *
   * {
   *     "Operation": "com.amazonaws.cognito.sync.model#SubscribeToDataset",
   *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
   *     "Input":
   *     {
   *         "IdentityPoolId": "ID_POOL_ID",
   *         "IdentityId": "IDENTITY_ID",
   *         "DatasetName": "Rufus",
   *         "DeviceId": "5cd28fbe-dd83-47ab-9f83-19093a5fb014"
   *     }
   * }
   *                </request>
   *             <response>
   * 1.1 200 OK
   * x-amzn-requestid: 8b9932b7-201d-4418-a960-0a470e11de9f
   * date: Sat, 04 Oct 2014 19:53:50 GMT
   * content-type: application/json
   * content-length: 99
   *
   * {
   *     "Output":
   *     {
   *         "__type": "com.amazonaws.cognito.sync.model#SubscribeToDatasetResponse"
   *     },
   *     "Version": "1.0"
   * }
   *                </response>
   *          </example>
   *       </examples>
   */
  public subscribeToDataset(
    args: SubscribeToDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SubscribeToDatasetCommandOutput>;
  public subscribeToDataset(
    args: SubscribeToDatasetCommandInput,
    cb: (err: any, data?: SubscribeToDatasetCommandOutput) => void
  ): void;
  public subscribeToDataset(
    args: SubscribeToDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubscribeToDatasetCommandOutput) => void
  ): void;
  public subscribeToDataset(
    args: SubscribeToDatasetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SubscribeToDatasetCommandOutput) => void),
    cb?: (err: any, data?: SubscribeToDatasetCommandOutput) => void
  ): Promise<SubscribeToDatasetCommandOutput> | void {
    const command = new SubscribeToDatasetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Unsubscribes from receiving notifications when a dataset is modified by another device.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
   *       <examples>
   *          <example>
   *             <name>UnsubscribeFromDataset</name>
   *             <description>The following examples have been edited for readability.</description>
   *             <request>
   * POST / HTTP/1.1
   * CONTENT-TYPE: application/json
   * X-AMZ-REQUESTSUPERTRACE: true
   * X-AMZN-REQUESTID: 676896d6-14ca-45b1-8029-6d36b10a077e
   * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.UnsubscribeFromDataset
   * HOST: cognito-sync.us-east-1.amazonaws.com
   * X-AMZ-DATE: 20141004T195446Z
   * X-AMZ-SECURITY-TOKEN: <securitytoken>
   * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;content-length;host;x-amz-date;x-amz-target, Signature=<signature>
   *
   * {
   *     "Operation": "com.amazonaws.cognito.sync.model#UnsubscribeFromDataset",
   *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
   *     "Input":
   *     {
   *         "IdentityPoolId": "ID_POOL_ID",
   *         "IdentityId": "IDENTITY_ID",
   *         "DatasetName": "Rufus",
   *         "DeviceId": "5cd28fbe-dd83-47ab-9f83-19093a5fb014"
   *     }
   * }
   *                </request>
   *             <response>
   * 1.1 200 OK
   * x-amzn-requestid: 676896d6-14ca-45b1-8029-6d36b10a077e
   * date: Sat, 04 Oct 2014 19:54:46 GMT
   * content-type: application/json
   * content-length: 103
   *
   * {
   *     "Output":
   *     {
   *         "__type": "com.amazonaws.cognito.sync.model#UnsubscribeFromDatasetResponse"
   *     },
   *     "Version": "1.0"
   * }
   *                </response>
   *          </example>
   *       </examples>
   */
  public unsubscribeFromDataset(
    args: UnsubscribeFromDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnsubscribeFromDatasetCommandOutput>;
  public unsubscribeFromDataset(
    args: UnsubscribeFromDatasetCommandInput,
    cb: (err: any, data?: UnsubscribeFromDatasetCommandOutput) => void
  ): void;
  public unsubscribeFromDataset(
    args: UnsubscribeFromDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnsubscribeFromDatasetCommandOutput) => void
  ): void;
  public unsubscribeFromDataset(
    args: UnsubscribeFromDatasetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UnsubscribeFromDatasetCommandOutput) => void),
    cb?: (err: any, data?: UnsubscribeFromDatasetCommandOutput) => void
  ): Promise<UnsubscribeFromDatasetCommandOutput> | void {
    const command = new UnsubscribeFromDatasetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Posts updates to records and adds and deletes records for a dataset and user.</p>
   *       <p>The sync count in the record patch is your last known sync count for that record. The server will reject an UpdateRecords request with a ResourceConflictException if you try to patch a record with a new value but a stale sync count.</p><p>For example, if the sync count on the server is 5 for a key called highScore and you try and submit a new highScore with sync count of 4, the request will be rejected. To obtain the current sync count for a record, call ListRecords. On a successful update of the record, the response returns the new sync count for that record. You should present that sync count the next time you try to update that same record. When the record does not exist, specify the sync count as 0.</p>
   *       <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
   */
  public updateRecords(
    args: UpdateRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRecordsCommandOutput>;
  public updateRecords(
    args: UpdateRecordsCommandInput,
    cb: (err: any, data?: UpdateRecordsCommandOutput) => void
  ): void;
  public updateRecords(
    args: UpdateRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRecordsCommandOutput) => void
  ): void;
  public updateRecords(
    args: UpdateRecordsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRecordsCommandOutput) => void),
    cb?: (err: any, data?: UpdateRecordsCommandOutput) => void
  ): Promise<UpdateRecordsCommandOutput> | void {
    const command = new UpdateRecordsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
