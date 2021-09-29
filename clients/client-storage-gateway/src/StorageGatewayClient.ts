import { ActivateGatewayCommandInput, ActivateGatewayCommandOutput } from "./commands/ActivateGatewayCommand";
import { AddCacheCommandInput, AddCacheCommandOutput } from "./commands/AddCacheCommand";
import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "./commands/AddTagsToResourceCommand";
import { AddUploadBufferCommandInput, AddUploadBufferCommandOutput } from "./commands/AddUploadBufferCommand";
import { AddWorkingStorageCommandInput, AddWorkingStorageCommandOutput } from "./commands/AddWorkingStorageCommand";
import { AssignTapePoolCommandInput, AssignTapePoolCommandOutput } from "./commands/AssignTapePoolCommand";
import {
  AssociateFileSystemCommandInput,
  AssociateFileSystemCommandOutput,
} from "./commands/AssociateFileSystemCommand";
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
import { CreateTapePoolCommandInput, CreateTapePoolCommandOutput } from "./commands/CreateTapePoolCommand";
import {
  CreateTapeWithBarcodeCommandInput,
  CreateTapeWithBarcodeCommandOutput,
} from "./commands/CreateTapeWithBarcodeCommand";
import { CreateTapesCommandInput, CreateTapesCommandOutput } from "./commands/CreateTapesCommand";
import {
  DeleteAutomaticTapeCreationPolicyCommandInput,
  DeleteAutomaticTapeCreationPolicyCommandOutput,
} from "./commands/DeleteAutomaticTapeCreationPolicyCommand";
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
import { DeleteTapePoolCommandInput, DeleteTapePoolCommandOutput } from "./commands/DeleteTapePoolCommand";
import { DeleteVolumeCommandInput, DeleteVolumeCommandOutput } from "./commands/DeleteVolumeCommand";
import {
  DescribeAvailabilityMonitorTestCommandInput,
  DescribeAvailabilityMonitorTestCommandOutput,
} from "./commands/DescribeAvailabilityMonitorTestCommand";
import {
  DescribeBandwidthRateLimitCommandInput,
  DescribeBandwidthRateLimitCommandOutput,
} from "./commands/DescribeBandwidthRateLimitCommand";
import {
  DescribeBandwidthRateLimitScheduleCommandInput,
  DescribeBandwidthRateLimitScheduleCommandOutput,
} from "./commands/DescribeBandwidthRateLimitScheduleCommand";
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
  DescribeFileSystemAssociationsCommandInput,
  DescribeFileSystemAssociationsCommandOutput,
} from "./commands/DescribeFileSystemAssociationsCommand";
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
import {
  DisassociateFileSystemCommandInput,
  DisassociateFileSystemCommandOutput,
} from "./commands/DisassociateFileSystemCommand";
import { JoinDomainCommandInput, JoinDomainCommandOutput } from "./commands/JoinDomainCommand";
import {
  ListAutomaticTapeCreationPoliciesCommandInput,
  ListAutomaticTapeCreationPoliciesCommandOutput,
} from "./commands/ListAutomaticTapeCreationPoliciesCommand";
import { ListFileSharesCommandInput, ListFileSharesCommandOutput } from "./commands/ListFileSharesCommand";
import {
  ListFileSystemAssociationsCommandInput,
  ListFileSystemAssociationsCommandOutput,
} from "./commands/ListFileSystemAssociationsCommand";
import { ListGatewaysCommandInput, ListGatewaysCommandOutput } from "./commands/ListGatewaysCommand";
import { ListLocalDisksCommandInput, ListLocalDisksCommandOutput } from "./commands/ListLocalDisksCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTapePoolsCommandInput, ListTapePoolsCommandOutput } from "./commands/ListTapePoolsCommand";
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
  UpdateAutomaticTapeCreationPolicyCommandInput,
  UpdateAutomaticTapeCreationPolicyCommandOutput,
} from "./commands/UpdateAutomaticTapeCreationPolicyCommand";
import {
  UpdateBandwidthRateLimitCommandInput,
  UpdateBandwidthRateLimitCommandOutput,
} from "./commands/UpdateBandwidthRateLimitCommand";
import {
  UpdateBandwidthRateLimitScheduleCommandInput,
  UpdateBandwidthRateLimitScheduleCommandOutput,
} from "./commands/UpdateBandwidthRateLimitScheduleCommand";
import {
  UpdateChapCredentialsCommandInput,
  UpdateChapCredentialsCommandOutput,
} from "./commands/UpdateChapCredentialsCommand";
import {
  UpdateFileSystemAssociationCommandInput,
  UpdateFileSystemAssociationCommandOutput,
} from "./commands/UpdateFileSystemAssociationCommand";
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
  UpdateSMBFileShareVisibilityCommandInput,
  UpdateSMBFileShareVisibilityCommandOutput,
} from "./commands/UpdateSMBFileShareVisibilityCommand";
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
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
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
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
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
  Provider,
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | ActivateGatewayCommandInput
  | AddCacheCommandInput
  | AddTagsToResourceCommandInput
  | AddUploadBufferCommandInput
  | AddWorkingStorageCommandInput
  | AssignTapePoolCommandInput
  | AssociateFileSystemCommandInput
  | AttachVolumeCommandInput
  | CancelArchivalCommandInput
  | CancelRetrievalCommandInput
  | CreateCachediSCSIVolumeCommandInput
  | CreateNFSFileShareCommandInput
  | CreateSMBFileShareCommandInput
  | CreateSnapshotCommandInput
  | CreateSnapshotFromVolumeRecoveryPointCommandInput
  | CreateStorediSCSIVolumeCommandInput
  | CreateTapePoolCommandInput
  | CreateTapeWithBarcodeCommandInput
  | CreateTapesCommandInput
  | DeleteAutomaticTapeCreationPolicyCommandInput
  | DeleteBandwidthRateLimitCommandInput
  | DeleteChapCredentialsCommandInput
  | DeleteFileShareCommandInput
  | DeleteGatewayCommandInput
  | DeleteSnapshotScheduleCommandInput
  | DeleteTapeArchiveCommandInput
  | DeleteTapeCommandInput
  | DeleteTapePoolCommandInput
  | DeleteVolumeCommandInput
  | DescribeAvailabilityMonitorTestCommandInput
  | DescribeBandwidthRateLimitCommandInput
  | DescribeBandwidthRateLimitScheduleCommandInput
  | DescribeCacheCommandInput
  | DescribeCachediSCSIVolumesCommandInput
  | DescribeChapCredentialsCommandInput
  | DescribeFileSystemAssociationsCommandInput
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
  | DisassociateFileSystemCommandInput
  | JoinDomainCommandInput
  | ListAutomaticTapeCreationPoliciesCommandInput
  | ListFileSharesCommandInput
  | ListFileSystemAssociationsCommandInput
  | ListGatewaysCommandInput
  | ListLocalDisksCommandInput
  | ListTagsForResourceCommandInput
  | ListTapePoolsCommandInput
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
  | UpdateAutomaticTapeCreationPolicyCommandInput
  | UpdateBandwidthRateLimitCommandInput
  | UpdateBandwidthRateLimitScheduleCommandInput
  | UpdateChapCredentialsCommandInput
  | UpdateFileSystemAssociationCommandInput
  | UpdateGatewayInformationCommandInput
  | UpdateGatewaySoftwareNowCommandInput
  | UpdateMaintenanceStartTimeCommandInput
  | UpdateNFSFileShareCommandInput
  | UpdateSMBFileShareCommandInput
  | UpdateSMBFileShareVisibilityCommandInput
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
  | AssociateFileSystemCommandOutput
  | AttachVolumeCommandOutput
  | CancelArchivalCommandOutput
  | CancelRetrievalCommandOutput
  | CreateCachediSCSIVolumeCommandOutput
  | CreateNFSFileShareCommandOutput
  | CreateSMBFileShareCommandOutput
  | CreateSnapshotCommandOutput
  | CreateSnapshotFromVolumeRecoveryPointCommandOutput
  | CreateStorediSCSIVolumeCommandOutput
  | CreateTapePoolCommandOutput
  | CreateTapeWithBarcodeCommandOutput
  | CreateTapesCommandOutput
  | DeleteAutomaticTapeCreationPolicyCommandOutput
  | DeleteBandwidthRateLimitCommandOutput
  | DeleteChapCredentialsCommandOutput
  | DeleteFileShareCommandOutput
  | DeleteGatewayCommandOutput
  | DeleteSnapshotScheduleCommandOutput
  | DeleteTapeArchiveCommandOutput
  | DeleteTapeCommandOutput
  | DeleteTapePoolCommandOutput
  | DeleteVolumeCommandOutput
  | DescribeAvailabilityMonitorTestCommandOutput
  | DescribeBandwidthRateLimitCommandOutput
  | DescribeBandwidthRateLimitScheduleCommandOutput
  | DescribeCacheCommandOutput
  | DescribeCachediSCSIVolumesCommandOutput
  | DescribeChapCredentialsCommandOutput
  | DescribeFileSystemAssociationsCommandOutput
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
  | DisassociateFileSystemCommandOutput
  | JoinDomainCommandOutput
  | ListAutomaticTapeCreationPoliciesCommandOutput
  | ListFileSharesCommandOutput
  | ListFileSystemAssociationsCommandOutput
  | ListGatewaysCommandOutput
  | ListLocalDisksCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTapePoolsCommandOutput
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
  | UpdateAutomaticTapeCreationPolicyCommandOutput
  | UpdateBandwidthRateLimitCommandOutput
  | UpdateBandwidthRateLimitScheduleCommandOutput
  | UpdateChapCredentialsCommandOutput
  | UpdateFileSystemAssociationCommandOutput
  | UpdateGatewayInformationCommandOutput
  | UpdateGatewaySoftwareNowCommandOutput
  | UpdateMaintenanceStartTimeCommandOutput
  | UpdateNFSFileShareCommandOutput
  | UpdateSMBFileShareCommandOutput
  | UpdateSMBFileShareVisibilityCommandOutput
  | UpdateSMBSecurityStrategyCommandOutput
  | UpdateSnapshotScheduleCommandOutput
  | UpdateVTLDeviceTypeCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

type StorageGatewayClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of StorageGatewayClient class constructor that set the region, credentials and other options.
 */
export interface StorageGatewayClientConfig extends StorageGatewayClientConfigType {}

type StorageGatewayClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of StorageGatewayClient class. This is resolved and normalized from the {@link StorageGatewayClientConfig | constructor configuration interface}.
 */
export interface StorageGatewayClientResolvedConfig extends StorageGatewayClientResolvedConfigType {}

/**
 * <fullname>Storage Gateway Service</fullname>
 *
 *          <p>Storage Gateway is the service that connects an on-premises software appliance with
 *          cloud-based storage to provide seamless and secure integration between an
 *          organization's on-premises IT environment and the Amazon Web Services storage infrastructure. The
 *          service enables you to securely upload data to the Cloud for cost effective backup and
 *          rapid disaster recovery.</p>
 *
 *          <p>Use the following links to get started using the <i>Storage Gateway Service
 *             API Reference</i>:</p>
 *
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewayHTTPRequestsHeaders">Storage Gateway required request headers</a>: Describes the required
 *                headers that you must send with every POST request to Storage Gateway.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewaySigningRequests">Signing requests</a>: Storage Gateway requires that you authenticate
 *                every request you send; this topic describes how sign such a request.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#APIErrorResponses">Error responses</a>: Provides reference information about Storage Gateway
 *                errors.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_Operations.html">Operations in
 *                   Storage Gateway</a>: Contains detailed descriptions of all Storage Gateway
 *                operations, their request parameters, response elements, possible errors, and
 *                examples of requests and responses.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/general/latest/gr/sg.html">Storage Gateway
 *                   endpoints and quotas</a>: Provides a list of each Region and the endpoints
 *                available for use with Storage Gateway.</p>
 *             </li>
 *          </ul>
 *
 *          <note>
 *             <p>Storage Gateway resource IDs are in uppercase. When you use these resource IDs
 *             with the Amazon EC2 API, EC2 expects resource IDs in lowercase. You must change your
 *             resource ID to lowercase to use it with the EC2 API. For example, in Storage Gateway the
 *             ID for a volume might be <code>vol-AA22BB012345DAF670</code>. When you use this ID with
 *             the EC2 API, you must change it to <code>vol-aa22bb012345daf670</code>. Otherwise, the
 *             EC2 API might not behave as expected.</p>
 *          </note>
 *
 *          <important>
 *             <p>IDs for Storage Gateway volumes and Amazon EBS snapshots created from gateway volumes
 *             are changing to a longer format. Starting in December 2016, all new volumes and
 *             snapshots will be created with a 17-character string. Starting in April 2016, you will
 *             be able to use these longer IDs so you can test your systems with the new format. For
 *             more information, see <a href="http://aws.amazon.com/ec2/faqs/#longer-ids">Longer EC2 and
 *                EBS resource IDs</a>.</p>
 *
 *             <p>For example, a volume Amazon Resource Name (ARN) with the longer volume ID format
 *             looks like the following:</p>
 *
 *             <p>
 *                <code>arn:aws:storagegateway:us-west-2:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABBCCDDEEFFG</code>.</p>
 *
 *             <p>A snapshot ID with the longer ID format looks like the following:
 *                <code>snap-78e226633445566ee</code>.</p>
 *
 *             <p>For more information, see <a href="http://forums.aws.amazon.com/ann.jspa?annID=3557">Announcement:
 *             Heads-up – Longer Storage Gateway volume and snapshot IDs coming in
 *             2016</a>.</p>
 *          </important>
 */
export class StorageGatewayClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  StorageGatewayClientResolvedConfig
> {
  /**
   * The resolved configuration of StorageGatewayClient class. This is resolved and normalized from the {@link StorageGatewayClientConfig | constructor configuration interface}.
   */
  readonly config: StorageGatewayClientResolvedConfig;

  constructor(configuration: StorageGatewayClientConfig) {
    let _config_0 = __getRuntimeConfig(configuration);
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveAwsAuthConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
