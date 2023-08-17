// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CognitoSyncClient, CognitoSyncClientConfig } from "./CognitoSyncClient";
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

const commands = {
  BulkPublishCommand,
  DeleteDatasetCommand,
  DescribeDatasetCommand,
  DescribeIdentityPoolUsageCommand,
  DescribeIdentityUsageCommand,
  GetBulkPublishDetailsCommand,
  GetCognitoEventsCommand,
  GetIdentityPoolConfigurationCommand,
  ListDatasetsCommand,
  ListIdentityPoolUsageCommand,
  ListRecordsCommand,
  RegisterDeviceCommand,
  SetCognitoEventsCommand,
  SetIdentityPoolConfigurationCommand,
  SubscribeToDatasetCommand,
  UnsubscribeFromDatasetCommand,
  UpdateRecordsCommand,
};

export interface CognitoSync {
  /**
   * @see {@link BulkPublishCommand}
   */
  bulkPublish(args: BulkPublishCommandInput, options?: __HttpHandlerOptions): Promise<BulkPublishCommandOutput>;
  bulkPublish(args: BulkPublishCommandInput, cb: (err: any, data?: BulkPublishCommandOutput) => void): void;
  bulkPublish(
    args: BulkPublishCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BulkPublishCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDatasetCommand}
   */
  deleteDataset(args: DeleteDatasetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDatasetCommandOutput>;
  deleteDataset(args: DeleteDatasetCommandInput, cb: (err: any, data?: DeleteDatasetCommandOutput) => void): void;
  deleteDataset(
    args: DeleteDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDatasetCommand}
   */
  describeDataset(
    args: DescribeDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDatasetCommandOutput>;
  describeDataset(args: DescribeDatasetCommandInput, cb: (err: any, data?: DescribeDatasetCommandOutput) => void): void;
  describeDataset(
    args: DescribeDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIdentityPoolUsageCommand}
   */
  describeIdentityPoolUsage(
    args: DescribeIdentityPoolUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIdentityPoolUsageCommandOutput>;
  describeIdentityPoolUsage(
    args: DescribeIdentityPoolUsageCommandInput,
    cb: (err: any, data?: DescribeIdentityPoolUsageCommandOutput) => void
  ): void;
  describeIdentityPoolUsage(
    args: DescribeIdentityPoolUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIdentityPoolUsageCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIdentityUsageCommand}
   */
  describeIdentityUsage(
    args: DescribeIdentityUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIdentityUsageCommandOutput>;
  describeIdentityUsage(
    args: DescribeIdentityUsageCommandInput,
    cb: (err: any, data?: DescribeIdentityUsageCommandOutput) => void
  ): void;
  describeIdentityUsage(
    args: DescribeIdentityUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIdentityUsageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBulkPublishDetailsCommand}
   */
  getBulkPublishDetails(
    args: GetBulkPublishDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBulkPublishDetailsCommandOutput>;
  getBulkPublishDetails(
    args: GetBulkPublishDetailsCommandInput,
    cb: (err: any, data?: GetBulkPublishDetailsCommandOutput) => void
  ): void;
  getBulkPublishDetails(
    args: GetBulkPublishDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBulkPublishDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCognitoEventsCommand}
   */
  getCognitoEvents(
    args: GetCognitoEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCognitoEventsCommandOutput>;
  getCognitoEvents(
    args: GetCognitoEventsCommandInput,
    cb: (err: any, data?: GetCognitoEventsCommandOutput) => void
  ): void;
  getCognitoEvents(
    args: GetCognitoEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCognitoEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdentityPoolConfigurationCommand}
   */
  getIdentityPoolConfiguration(
    args: GetIdentityPoolConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIdentityPoolConfigurationCommandOutput>;
  getIdentityPoolConfiguration(
    args: GetIdentityPoolConfigurationCommandInput,
    cb: (err: any, data?: GetIdentityPoolConfigurationCommandOutput) => void
  ): void;
  getIdentityPoolConfiguration(
    args: GetIdentityPoolConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdentityPoolConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatasetsCommand}
   */
  listDatasets(args: ListDatasetsCommandInput, options?: __HttpHandlerOptions): Promise<ListDatasetsCommandOutput>;
  listDatasets(args: ListDatasetsCommandInput, cb: (err: any, data?: ListDatasetsCommandOutput) => void): void;
  listDatasets(
    args: ListDatasetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIdentityPoolUsageCommand}
   */
  listIdentityPoolUsage(
    args: ListIdentityPoolUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIdentityPoolUsageCommandOutput>;
  listIdentityPoolUsage(
    args: ListIdentityPoolUsageCommandInput,
    cb: (err: any, data?: ListIdentityPoolUsageCommandOutput) => void
  ): void;
  listIdentityPoolUsage(
    args: ListIdentityPoolUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIdentityPoolUsageCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecordsCommand}
   */
  listRecords(args: ListRecordsCommandInput, options?: __HttpHandlerOptions): Promise<ListRecordsCommandOutput>;
  listRecords(args: ListRecordsCommandInput, cb: (err: any, data?: ListRecordsCommandOutput) => void): void;
  listRecords(
    args: ListRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterDeviceCommand}
   */
  registerDevice(
    args: RegisterDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterDeviceCommandOutput>;
  registerDevice(args: RegisterDeviceCommandInput, cb: (err: any, data?: RegisterDeviceCommandOutput) => void): void;
  registerDevice(
    args: RegisterDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link SetCognitoEventsCommand}
   */
  setCognitoEvents(
    args: SetCognitoEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetCognitoEventsCommandOutput>;
  setCognitoEvents(
    args: SetCognitoEventsCommandInput,
    cb: (err: any, data?: SetCognitoEventsCommandOutput) => void
  ): void;
  setCognitoEvents(
    args: SetCognitoEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetCognitoEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link SetIdentityPoolConfigurationCommand}
   */
  setIdentityPoolConfiguration(
    args: SetIdentityPoolConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetIdentityPoolConfigurationCommandOutput>;
  setIdentityPoolConfiguration(
    args: SetIdentityPoolConfigurationCommandInput,
    cb: (err: any, data?: SetIdentityPoolConfigurationCommandOutput) => void
  ): void;
  setIdentityPoolConfiguration(
    args: SetIdentityPoolConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetIdentityPoolConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link SubscribeToDatasetCommand}
   */
  subscribeToDataset(
    args: SubscribeToDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SubscribeToDatasetCommandOutput>;
  subscribeToDataset(
    args: SubscribeToDatasetCommandInput,
    cb: (err: any, data?: SubscribeToDatasetCommandOutput) => void
  ): void;
  subscribeToDataset(
    args: SubscribeToDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubscribeToDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link UnsubscribeFromDatasetCommand}
   */
  unsubscribeFromDataset(
    args: UnsubscribeFromDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnsubscribeFromDatasetCommandOutput>;
  unsubscribeFromDataset(
    args: UnsubscribeFromDatasetCommandInput,
    cb: (err: any, data?: UnsubscribeFromDatasetCommandOutput) => void
  ): void;
  unsubscribeFromDataset(
    args: UnsubscribeFromDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnsubscribeFromDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRecordsCommand}
   */
  updateRecords(args: UpdateRecordsCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRecordsCommandOutput>;
  updateRecords(args: UpdateRecordsCommandInput, cb: (err: any, data?: UpdateRecordsCommandOutput) => void): void;
  updateRecords(
    args: UpdateRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRecordsCommandOutput) => void
  ): void;
}

/**
 * @public
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
export class CognitoSync extends CognitoSyncClient implements CognitoSync {}
createAggregatedClient(commands, CognitoSync);
