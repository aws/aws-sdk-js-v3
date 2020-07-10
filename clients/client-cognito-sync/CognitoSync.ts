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
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>Amazon Cognito Sync</fullname>
 *          <p>Amazon Cognito Sync provides an AWS service and client library that enable cross-device syncing of application-related user data. High-level client libraries are available for both iOS and Android. You can use these libraries to persist data locally so that it's available even if the device is offline. Developer credentials don't need to be stored on the mobile device to access the service. You can use Amazon Cognito to obtain a normalized user ID and credentials. User data is persisted in a dataset that can store up to 1 MB of key-value pairs, and you can have up to 20 datasets per user identity.</p>
 *          <p>With Amazon Cognito Sync, the data stored for each identity is accessible only to
 *          credentials assigned to that identity. In order to use the Cognito Sync service, you need
 *          to make API calls using credentials retrieved with <a href="https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/Welcome.html">Amazon Cognito Identity service</a>.</p>
 *          <p>If you want to use Cognito Sync in an Android or iOS application, you will probably want to
 *          make API calls via the AWS Mobile SDK. To learn more, see the <a href="https://docs.aws.amazon.com/mobile/sdkforandroid/developerguide/cognito-sync.html">Developer Guide for Android</a> and the <a href="https://docs.aws.amazon.com/mobile/sdkforios/developerguide/cognito-sync.html">Developer Guide for iOS</a>.</p>
 */
export class CognitoSync extends CognitoSyncClient {
  /**
   * <p>Initiates a bulk publish of all existing datasets for an Identity Pool to the configured stream. Customers are limited to one successful bulk publish per 24 hours. Bulk publish is an asynchronous request, customers can see the status of the request via the GetBulkPublishDetails operation.</p>
   *          <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
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
   * <p>Deletes the specific dataset. The dataset will be deleted permanently, and the action can't be undone. Datasets that this dataset was merged with will no longer report the merge. Any subsequent operation on this dataset will result in a ResourceNotFoundException.</p>
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
   * <p>Gets meta data about a dataset by identity and dataset name. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p>
   *          <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>
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
   *          <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
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
   *          <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
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
   * <p>Get the status of the last BulkPublish operation for an identity pool.</p>
   *          <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
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
   * <p>Gets the events and the corresponding Lambda functions associated with an identity pool.</p>
   *          <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
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
   * <p>Gets the configuration settings of an identity pool.</p>
   *          <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
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
   * <p>Lists datasets for an identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p>
   *          <p>ListDatasets can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use the Cognito Identity credentials to make this API call.</p>
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
   *          <p>ListIdentityPoolUsage can only be called with developer credentials. You cannot make this API call with the temporary user credentials provided by Cognito Identity.</p>
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
   * <p>Gets paginated records, optionally changed after a particular sync count for a dataset and identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p>
   *          <p>ListRecords can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>
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
   * <p>Registers a device to receive push sync notifications.</p>
   *          <p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
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
   * <p>Sets the AWS Lambda function for a given event type for an identity pool. This request only updates the key/value pair specified. Other key/values pairs are not updated. To remove a key value pair, pass a empty value for the particular key.</p>
   *          <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
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
   * <p>Sets the necessary configuration for push sync.</p>
   *          <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
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
   * <p>Subscribes to receive notifications when a dataset is modified by another device.</p>
   *          <p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
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
   * <p>Unsubscribes from receiving notifications when a dataset is modified by another device.</p>
   *          <p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
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
   *          <p>The sync count in the record patch is your last known sync count for that record. The server will reject an UpdateRecords request with a ResourceConflictException if you try to patch a record with a new value but a stale sync count.</p>
   *          <p>For example, if the sync count on the server is 5 for a key called highScore and you try and submit a new highScore with sync count of 4, the request will be rejected. To obtain the current sync count for a record, call ListRecords. On a successful update of the record, the response returns the new sync count for that record. You should present that sync count the next time you try to update that same record. When the record does not exist, specify the sync count as 0.</p>
   *          <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
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
