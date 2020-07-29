import { ActivateGatewayCommandInput, ActivateGatewayCommandOutput } from "./commands/ActivateGatewayCommand";
import { AddCacheCommandInput, AddCacheCommandOutput } from "./commands/AddCacheCommand";
import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "./commands/AddTagsToResourceCommand";
import { AddUploadBufferCommandInput, AddUploadBufferCommandOutput } from "./commands/AddUploadBufferCommand";
import { AddWorkingStorageCommandInput, AddWorkingStorageCommandOutput } from "./commands/AddWorkingStorageCommand";
import { AssignTapePoolCommandInput, AssignTapePoolCommandOutput } from "./commands/AssignTapePoolCommand";
import { AttachVolumeCommandInput, AttachVolumeCommandOutput } from "./commands/AttachVolumeCommand";
import { CancelArchivalCommandInput, CancelArchivalCommandOutput } from "./commands/CancelArchivalCommand";
import { CancelRetrievalCommandInput, CancelRetrievalCommandOutput } from "./commands/CancelRetrievalCommand";
import {
  CreateCachediSCSIVolumeCommandInput,
  CreateCachediSCSIVolumeCommandOutput,
} from "./commands/CreateCachediSCSIVolumeCommand";
import { CreateNFSFileShareCommandInput, CreateNFSFileShareCommandOutput } from "./commands/CreateNFSFileShareCommand";
import { CreateSMBFileShareCommandInput, CreateSMBFileShareCommandOutput } from "./commands/CreateSMBFileShareCommand";
import { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "./commands/CreateSnapshotCommand";
import {
  CreateSnapshotFromVolumeRecoveryPointCommandInput,
  CreateSnapshotFromVolumeRecoveryPointCommandOutput,
} from "./commands/CreateSnapshotFromVolumeRecoveryPointCommand";
import {
  CreateStorediSCSIVolumeCommandInput,
  CreateStorediSCSIVolumeCommandOutput,
} from "./commands/CreateStorediSCSIVolumeCommand";
import {
  CreateTapeWithBarcodeCommandInput,
  CreateTapeWithBarcodeCommandOutput,
} from "./commands/CreateTapeWithBarcodeCommand";
import { CreateTapesCommandInput, CreateTapesCommandOutput } from "./commands/CreateTapesCommand";
import {
  DeleteBandwidthRateLimitCommandInput,
  DeleteBandwidthRateLimitCommandOutput,
} from "./commands/DeleteBandwidthRateLimitCommand";
import {
  DeleteChapCredentialsCommandInput,
  DeleteChapCredentialsCommandOutput,
} from "./commands/DeleteChapCredentialsCommand";
import { DeleteFileShareCommandInput, DeleteFileShareCommandOutput } from "./commands/DeleteFileShareCommand";
import { DeleteGatewayCommandInput, DeleteGatewayCommandOutput } from "./commands/DeleteGatewayCommand";
import {
  DeleteSnapshotScheduleCommandInput,
  DeleteSnapshotScheduleCommandOutput,
} from "./commands/DeleteSnapshotScheduleCommand";
import { DeleteTapeArchiveCommandInput, DeleteTapeArchiveCommandOutput } from "./commands/DeleteTapeArchiveCommand";
import { DeleteTapeCommandInput, DeleteTapeCommandOutput } from "./commands/DeleteTapeCommand";
import { DeleteVolumeCommandInput, DeleteVolumeCommandOutput } from "./commands/DeleteVolumeCommand";
import {
  DescribeAvailabilityMonitorTestCommandInput,
  DescribeAvailabilityMonitorTestCommandOutput,
} from "./commands/DescribeAvailabilityMonitorTestCommand";
import {
  DescribeBandwidthRateLimitCommandInput,
  DescribeBandwidthRateLimitCommandOutput,
} from "./commands/DescribeBandwidthRateLimitCommand";
import { DescribeCacheCommandInput, DescribeCacheCommandOutput } from "./commands/DescribeCacheCommand";
import {
  DescribeCachediSCSIVolumesCommandInput,
  DescribeCachediSCSIVolumesCommandOutput,
} from "./commands/DescribeCachediSCSIVolumesCommand";
import {
  DescribeChapCredentialsCommandInput,
  DescribeChapCredentialsCommandOutput,
} from "./commands/DescribeChapCredentialsCommand";
import {
  DescribeGatewayInformationCommandInput,
  DescribeGatewayInformationCommandOutput,
} from "./commands/DescribeGatewayInformationCommand";
import {
  DescribeMaintenanceStartTimeCommandInput,
  DescribeMaintenanceStartTimeCommandOutput,
} from "./commands/DescribeMaintenanceStartTimeCommand";
import {
  DescribeNFSFileSharesCommandInput,
  DescribeNFSFileSharesCommandOutput,
} from "./commands/DescribeNFSFileSharesCommand";
import {
  DescribeSMBFileSharesCommandInput,
  DescribeSMBFileSharesCommandOutput,
} from "./commands/DescribeSMBFileSharesCommand";
import {
  DescribeSMBSettingsCommandInput,
  DescribeSMBSettingsCommandOutput,
} from "./commands/DescribeSMBSettingsCommand";
import {
  DescribeSnapshotScheduleCommandInput,
  DescribeSnapshotScheduleCommandOutput,
} from "./commands/DescribeSnapshotScheduleCommand";
import {
  DescribeStorediSCSIVolumesCommandInput,
  DescribeStorediSCSIVolumesCommandOutput,
} from "./commands/DescribeStorediSCSIVolumesCommand";
import {
  DescribeTapeArchivesCommandInput,
  DescribeTapeArchivesCommandOutput,
} from "./commands/DescribeTapeArchivesCommand";
import {
  DescribeTapeRecoveryPointsCommandInput,
  DescribeTapeRecoveryPointsCommandOutput,
} from "./commands/DescribeTapeRecoveryPointsCommand";
import { DescribeTapesCommandInput, DescribeTapesCommandOutput } from "./commands/DescribeTapesCommand";
import {
  DescribeUploadBufferCommandInput,
  DescribeUploadBufferCommandOutput,
} from "./commands/DescribeUploadBufferCommand";
import { DescribeVTLDevicesCommandInput, DescribeVTLDevicesCommandOutput } from "./commands/DescribeVTLDevicesCommand";
import {
  DescribeWorkingStorageCommandInput,
  DescribeWorkingStorageCommandOutput,
} from "./commands/DescribeWorkingStorageCommand";
import { DetachVolumeCommandInput, DetachVolumeCommandOutput } from "./commands/DetachVolumeCommand";
import { DisableGatewayCommandInput, DisableGatewayCommandOutput } from "./commands/DisableGatewayCommand";
import { JoinDomainCommandInput, JoinDomainCommandOutput } from "./commands/JoinDomainCommand";
import { ListFileSharesCommandInput, ListFileSharesCommandOutput } from "./commands/ListFileSharesCommand";
import { ListGatewaysCommandInput, ListGatewaysCommandOutput } from "./commands/ListGatewaysCommand";
import { ListLocalDisksCommandInput, ListLocalDisksCommandOutput } from "./commands/ListLocalDisksCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTapesCommandInput, ListTapesCommandOutput } from "./commands/ListTapesCommand";
import {
  ListVolumeInitiatorsCommandInput,
  ListVolumeInitiatorsCommandOutput,
} from "./commands/ListVolumeInitiatorsCommand";
import {
  ListVolumeRecoveryPointsCommandInput,
  ListVolumeRecoveryPointsCommandOutput,
} from "./commands/ListVolumeRecoveryPointsCommand";
import { ListVolumesCommandInput, ListVolumesCommandOutput } from "./commands/ListVolumesCommand";
import { NotifyWhenUploadedCommandInput, NotifyWhenUploadedCommandOutput } from "./commands/NotifyWhenUploadedCommand";
import { RefreshCacheCommandInput, RefreshCacheCommandOutput } from "./commands/RefreshCacheCommand";
import {
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "./commands/RemoveTagsFromResourceCommand";
import { ResetCacheCommandInput, ResetCacheCommandOutput } from "./commands/ResetCacheCommand";
import {
  RetrieveTapeArchiveCommandInput,
  RetrieveTapeArchiveCommandOutput,
} from "./commands/RetrieveTapeArchiveCommand";
import {
  RetrieveTapeRecoveryPointCommandInput,
  RetrieveTapeRecoveryPointCommandOutput,
} from "./commands/RetrieveTapeRecoveryPointCommand";
import {
  SetLocalConsolePasswordCommandInput,
  SetLocalConsolePasswordCommandOutput,
} from "./commands/SetLocalConsolePasswordCommand";
import {
  SetSMBGuestPasswordCommandInput,
  SetSMBGuestPasswordCommandOutput,
} from "./commands/SetSMBGuestPasswordCommand";
import { ShutdownGatewayCommandInput, ShutdownGatewayCommandOutput } from "./commands/ShutdownGatewayCommand";
import {
  StartAvailabilityMonitorTestCommandInput,
  StartAvailabilityMonitorTestCommandOutput,
} from "./commands/StartAvailabilityMonitorTestCommand";
import { StartGatewayCommandInput, StartGatewayCommandOutput } from "./commands/StartGatewayCommand";
import {
  UpdateBandwidthRateLimitCommandInput,
  UpdateBandwidthRateLimitCommandOutput,
} from "./commands/UpdateBandwidthRateLimitCommand";
import {
  UpdateChapCredentialsCommandInput,
  UpdateChapCredentialsCommandOutput,
} from "./commands/UpdateChapCredentialsCommand";
import {
  UpdateGatewayInformationCommandInput,
  UpdateGatewayInformationCommandOutput,
} from "./commands/UpdateGatewayInformationCommand";
import {
  UpdateGatewaySoftwareNowCommandInput,
  UpdateGatewaySoftwareNowCommandOutput,
} from "./commands/UpdateGatewaySoftwareNowCommand";
import {
  UpdateMaintenanceStartTimeCommandInput,
  UpdateMaintenanceStartTimeCommandOutput,
} from "./commands/UpdateMaintenanceStartTimeCommand";
import { UpdateNFSFileShareCommandInput, UpdateNFSFileShareCommandOutput } from "./commands/UpdateNFSFileShareCommand";
import { UpdateSMBFileShareCommandInput, UpdateSMBFileShareCommandOutput } from "./commands/UpdateSMBFileShareCommand";
import {
  UpdateSMBSecurityStrategyCommandInput,
  UpdateSMBSecurityStrategyCommandOutput,
} from "./commands/UpdateSMBSecurityStrategyCommand";
import {
  UpdateSnapshotScheduleCommandInput,
  UpdateSnapshotScheduleCommandOutput,
} from "./commands/UpdateSnapshotScheduleCommand";
import {
  UpdateVTLDeviceTypeCommandInput,
  UpdateVTLDeviceTypeCommandOutput,
} from "./commands/UpdateVTLDeviceTypeCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | ActivateGatewayCommandInput
  | AddCacheCommandInput
  | AddTagsToResourceCommandInput
  | AddUploadBufferCommandInput
  | AddWorkingStorageCommandInput
  | AssignTapePoolCommandInput
  | AttachVolumeCommandInput
  | CancelArchivalCommandInput
  | CancelRetrievalCommandInput
  | CreateCachediSCSIVolumeCommandInput
  | CreateNFSFileShareCommandInput
  | CreateSMBFileShareCommandInput
  | CreateSnapshotCommandInput
  | CreateSnapshotFromVolumeRecoveryPointCommandInput
  | CreateStorediSCSIVolumeCommandInput
  | CreateTapeWithBarcodeCommandInput
  | CreateTapesCommandInput
  | DeleteBandwidthRateLimitCommandInput
  | DeleteChapCredentialsCommandInput
  | DeleteFileShareCommandInput
  | DeleteGatewayCommandInput
  | DeleteSnapshotScheduleCommandInput
  | DeleteTapeArchiveCommandInput
  | DeleteTapeCommandInput
  | DeleteVolumeCommandInput
  | DescribeAvailabilityMonitorTestCommandInput
  | DescribeBandwidthRateLimitCommandInput
  | DescribeCacheCommandInput
  | DescribeCachediSCSIVolumesCommandInput
  | DescribeChapCredentialsCommandInput
  | DescribeGatewayInformationCommandInput
  | DescribeMaintenanceStartTimeCommandInput
  | DescribeNFSFileSharesCommandInput
  | DescribeSMBFileSharesCommandInput
  | DescribeSMBSettingsCommandInput
  | DescribeSnapshotScheduleCommandInput
  | DescribeStorediSCSIVolumesCommandInput
  | DescribeTapeArchivesCommandInput
  | DescribeTapeRecoveryPointsCommandInput
  | DescribeTapesCommandInput
  | DescribeUploadBufferCommandInput
  | DescribeVTLDevicesCommandInput
  | DescribeWorkingStorageCommandInput
  | DetachVolumeCommandInput
  | DisableGatewayCommandInput
  | JoinDomainCommandInput
  | ListFileSharesCommandInput
  | ListGatewaysCommandInput
  | ListLocalDisksCommandInput
  | ListTagsForResourceCommandInput
  | ListTapesCommandInput
  | ListVolumeInitiatorsCommandInput
  | ListVolumeRecoveryPointsCommandInput
  | ListVolumesCommandInput
  | NotifyWhenUploadedCommandInput
  | RefreshCacheCommandInput
  | RemoveTagsFromResourceCommandInput
  | ResetCacheCommandInput
  | RetrieveTapeArchiveCommandInput
  | RetrieveTapeRecoveryPointCommandInput
  | SetLocalConsolePasswordCommandInput
  | SetSMBGuestPasswordCommandInput
  | ShutdownGatewayCommandInput
  | StartAvailabilityMonitorTestCommandInput
  | StartGatewayCommandInput
  | UpdateBandwidthRateLimitCommandInput
  | UpdateChapCredentialsCommandInput
  | UpdateGatewayInformationCommandInput
  | UpdateGatewaySoftwareNowCommandInput
  | UpdateMaintenanceStartTimeCommandInput
  | UpdateNFSFileShareCommandInput
  | UpdateSMBFileShareCommandInput
  | UpdateSMBSecurityStrategyCommandInput
  | UpdateSnapshotScheduleCommandInput
  | UpdateVTLDeviceTypeCommandInput;

export type ServiceOutputTypes =
  | ActivateGatewayCommandOutput
  | AddCacheCommandOutput
  | AddTagsToResourceCommandOutput
  | AddUploadBufferCommandOutput
  | AddWorkingStorageCommandOutput
  | AssignTapePoolCommandOutput
  | AttachVolumeCommandOutput
  | CancelArchivalCommandOutput
  | CancelRetrievalCommandOutput
  | CreateCachediSCSIVolumeCommandOutput
  | CreateNFSFileShareCommandOutput
  | CreateSMBFileShareCommandOutput
  | CreateSnapshotCommandOutput
  | CreateSnapshotFromVolumeRecoveryPointCommandOutput
  | CreateStorediSCSIVolumeCommandOutput
  | CreateTapeWithBarcodeCommandOutput
  | CreateTapesCommandOutput
  | DeleteBandwidthRateLimitCommandOutput
  | DeleteChapCredentialsCommandOutput
  | DeleteFileShareCommandOutput
  | DeleteGatewayCommandOutput
  | DeleteSnapshotScheduleCommandOutput
  | DeleteTapeArchiveCommandOutput
  | DeleteTapeCommandOutput
  | DeleteVolumeCommandOutput
  | DescribeAvailabilityMonitorTestCommandOutput
  | DescribeBandwidthRateLimitCommandOutput
  | DescribeCacheCommandOutput
  | DescribeCachediSCSIVolumesCommandOutput
  | DescribeChapCredentialsCommandOutput
  | DescribeGatewayInformationCommandOutput
  | DescribeMaintenanceStartTimeCommandOutput
  | DescribeNFSFileSharesCommandOutput
  | DescribeSMBFileSharesCommandOutput
  | DescribeSMBSettingsCommandOutput
  | DescribeSnapshotScheduleCommandOutput
  | DescribeStorediSCSIVolumesCommandOutput
  | DescribeTapeArchivesCommandOutput
  | DescribeTapeRecoveryPointsCommandOutput
  | DescribeTapesCommandOutput
  | DescribeUploadBufferCommandOutput
  | DescribeVTLDevicesCommandOutput
  | DescribeWorkingStorageCommandOutput
  | DetachVolumeCommandOutput
  | DisableGatewayCommandOutput
  | JoinDomainCommandOutput
  | ListFileSharesCommandOutput
  | ListGatewaysCommandOutput
  | ListLocalDisksCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTapesCommandOutput
  | ListVolumeInitiatorsCommandOutput
  | ListVolumeRecoveryPointsCommandOutput
  | ListVolumesCommandOutput
  | NotifyWhenUploadedCommandOutput
  | RefreshCacheCommandOutput
  | RemoveTagsFromResourceCommandOutput
  | ResetCacheCommandOutput
  | RetrieveTapeArchiveCommandOutput
  | RetrieveTapeRecoveryPointCommandOutput
  | SetLocalConsolePasswordCommandOutput
  | SetSMBGuestPasswordCommandOutput
  | ShutdownGatewayCommandOutput
  | StartAvailabilityMonitorTestCommandOutput
  | StartGatewayCommandOutput
  | UpdateBandwidthRateLimitCommandOutput
  | UpdateChapCredentialsCommandOutput
  | UpdateGatewayInformationCommandOutput
  | UpdateGatewaySoftwareNowCommandOutput
  | UpdateMaintenanceStartTimeCommandOutput
  | UpdateNFSFileShareCommandOutput
  | UpdateSMBFileShareCommandOutput
  | UpdateSMBSecurityStrategyCommandOutput
  | UpdateSnapshotScheduleCommandOutput
  | UpdateVTLDeviceTypeCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Provider function that return promise of a maxAttempts string
   */
  maxAttemptsDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type StorageGatewayClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type StorageGatewayClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>AWS Storage Gateway Service</fullname>
 *
 *          <p>AWS Storage Gateway is the service that connects an on-premises software appliance
 *          with cloud-based storage to provide seamless and secure integration between an
 *          organization's on-premises IT environment and the AWS storage infrastructure. The service
 *          enables you to securely upload data to the AWS cloud for cost effective backup and rapid
 *          disaster recovery.</p>
 *          <p>Use the following links to get started using the <i>AWS Storage Gateway
 *             Service API Reference</i>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewayHTTPRequestsHeaders">AWS Storage Gateway Required Request Headers</a>: Describes the required
 *                headers that you must send with every POST request to AWS Storage Gateway.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewaySigningRequests">Signing Requests</a>: AWS Storage Gateway requires that you authenticate
 *                every request you send; this topic describes how sign such a request.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#APIErrorResponses">Error Responses</a>: Provides reference information about AWS Storage Gateway
 *                errors.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_Operations.html">Operations in AWS
 *                   Storage Gateway</a>: Contains detailed descriptions of all AWS Storage Gateway
 *                operations, their request parameters, response elements, possible errors, and
 *                examples of requests and responses.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#sg_region">AWS
 *                   Storage Gateway Regions and Endpoints:</a> Provides a list of each AWS Region
 *                and the endpoints available for use with AWS Storage Gateway. </p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>AWS Storage Gateway resource IDs are in uppercase. When you use these resource IDs
 *             with the Amazon EC2 API, EC2 expects resource IDs in lowercase. You must change your
 *             resource ID to lowercase to use it with the EC2 API. For example, in Storage Gateway the
 *             ID for a volume might be <code>vol-AA22BB012345DAF670</code>. When you use this ID with
 *             the EC2 API, you must change it to <code>vol-aa22bb012345daf670</code>. Otherwise, the
 *             EC2 API might not behave as expected.</p>
 *          </note>
 *          <important>
 *             <p>IDs for Storage Gateway volumes and Amazon EBS snapshots created from gateway
 *             volumes are changing to a longer format. Starting in December 2016, all new volumes and
 *             snapshots will be created with a 17-character string. Starting in April 2016, you will
 *             be able to use these longer IDs so you can test your systems with the new format. For
 *             more information, see <a href="https://aws.amazon.com/ec2/faqs/#longer-ids">Longer
 *                EC2 and EBS Resource IDs</a>. </p>
 *             <p> For example, a volume Amazon Resource Name (ARN) with the longer volume ID format
 *             looks like the following:</p>
 *             <p>
 *                <code>arn:aws:storagegateway:us-west-2:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABBCCDDEEFFG</code>.</p>
 *             <p>A snapshot ID with the longer ID format looks like the following:
 *                <code>snap-78e226633445566ee</code>.</p>
 *             <p>For more information, see <a href="https://forums.aws.amazon.com/ann.jspa?annID=3557">Announcement: Heads-up –
 *                Longer AWS Storage Gateway volume and snapshot IDs coming in 2016</a>.</p>
 *          </important>
 */
export class StorageGatewayClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  StorageGatewayClientResolvedConfig
> {
  readonly config: StorageGatewayClientResolvedConfig;

  constructor(configuration: StorageGatewayClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
