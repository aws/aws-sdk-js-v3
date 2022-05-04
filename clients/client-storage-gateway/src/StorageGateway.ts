// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  ActivateGatewayCommand,
  ActivateGatewayCommandInput,
  ActivateGatewayCommandOutput,
} from "./commands/ActivateGatewayCommand";
import { AddCacheCommand, AddCacheCommandInput, AddCacheCommandOutput } from "./commands/AddCacheCommand";
import {
  AddTagsToResourceCommand,
  AddTagsToResourceCommandInput,
  AddTagsToResourceCommandOutput,
} from "./commands/AddTagsToResourceCommand";
import {
  AddUploadBufferCommand,
  AddUploadBufferCommandInput,
  AddUploadBufferCommandOutput,
} from "./commands/AddUploadBufferCommand";
import {
  AddWorkingStorageCommand,
  AddWorkingStorageCommandInput,
  AddWorkingStorageCommandOutput,
} from "./commands/AddWorkingStorageCommand";
import {
  AssignTapePoolCommand,
  AssignTapePoolCommandInput,
  AssignTapePoolCommandOutput,
} from "./commands/AssignTapePoolCommand";
import {
  AssociateFileSystemCommand,
  AssociateFileSystemCommandInput,
  AssociateFileSystemCommandOutput,
} from "./commands/AssociateFileSystemCommand";
import {
  AttachVolumeCommand,
  AttachVolumeCommandInput,
  AttachVolumeCommandOutput,
} from "./commands/AttachVolumeCommand";
import {
  CancelArchivalCommand,
  CancelArchivalCommandInput,
  CancelArchivalCommandOutput,
} from "./commands/CancelArchivalCommand";
import {
  CancelRetrievalCommand,
  CancelRetrievalCommandInput,
  CancelRetrievalCommandOutput,
} from "./commands/CancelRetrievalCommand";
import {
  CreateCachediSCSIVolumeCommand,
  CreateCachediSCSIVolumeCommandInput,
  CreateCachediSCSIVolumeCommandOutput,
} from "./commands/CreateCachediSCSIVolumeCommand";
import {
  CreateNFSFileShareCommand,
  CreateNFSFileShareCommandInput,
  CreateNFSFileShareCommandOutput,
} from "./commands/CreateNFSFileShareCommand";
import {
  CreateSMBFileShareCommand,
  CreateSMBFileShareCommandInput,
  CreateSMBFileShareCommandOutput,
} from "./commands/CreateSMBFileShareCommand";
import {
  CreateSnapshotCommand,
  CreateSnapshotCommandInput,
  CreateSnapshotCommandOutput,
} from "./commands/CreateSnapshotCommand";
import {
  CreateSnapshotFromVolumeRecoveryPointCommand,
  CreateSnapshotFromVolumeRecoveryPointCommandInput,
  CreateSnapshotFromVolumeRecoveryPointCommandOutput,
} from "./commands/CreateSnapshotFromVolumeRecoveryPointCommand";
import {
  CreateStorediSCSIVolumeCommand,
  CreateStorediSCSIVolumeCommandInput,
  CreateStorediSCSIVolumeCommandOutput,
} from "./commands/CreateStorediSCSIVolumeCommand";
import {
  CreateTapePoolCommand,
  CreateTapePoolCommandInput,
  CreateTapePoolCommandOutput,
} from "./commands/CreateTapePoolCommand";
import { CreateTapesCommand, CreateTapesCommandInput, CreateTapesCommandOutput } from "./commands/CreateTapesCommand";
import {
  CreateTapeWithBarcodeCommand,
  CreateTapeWithBarcodeCommandInput,
  CreateTapeWithBarcodeCommandOutput,
} from "./commands/CreateTapeWithBarcodeCommand";
import {
  DeleteAutomaticTapeCreationPolicyCommand,
  DeleteAutomaticTapeCreationPolicyCommandInput,
  DeleteAutomaticTapeCreationPolicyCommandOutput,
} from "./commands/DeleteAutomaticTapeCreationPolicyCommand";
import {
  DeleteBandwidthRateLimitCommand,
  DeleteBandwidthRateLimitCommandInput,
  DeleteBandwidthRateLimitCommandOutput,
} from "./commands/DeleteBandwidthRateLimitCommand";
import {
  DeleteChapCredentialsCommand,
  DeleteChapCredentialsCommandInput,
  DeleteChapCredentialsCommandOutput,
} from "./commands/DeleteChapCredentialsCommand";
import {
  DeleteFileShareCommand,
  DeleteFileShareCommandInput,
  DeleteFileShareCommandOutput,
} from "./commands/DeleteFileShareCommand";
import {
  DeleteGatewayCommand,
  DeleteGatewayCommandInput,
  DeleteGatewayCommandOutput,
} from "./commands/DeleteGatewayCommand";
import {
  DeleteSnapshotScheduleCommand,
  DeleteSnapshotScheduleCommandInput,
  DeleteSnapshotScheduleCommandOutput,
} from "./commands/DeleteSnapshotScheduleCommand";
import {
  DeleteTapeArchiveCommand,
  DeleteTapeArchiveCommandInput,
  DeleteTapeArchiveCommandOutput,
} from "./commands/DeleteTapeArchiveCommand";
import { DeleteTapeCommand, DeleteTapeCommandInput, DeleteTapeCommandOutput } from "./commands/DeleteTapeCommand";
import {
  DeleteTapePoolCommand,
  DeleteTapePoolCommandInput,
  DeleteTapePoolCommandOutput,
} from "./commands/DeleteTapePoolCommand";
import {
  DeleteVolumeCommand,
  DeleteVolumeCommandInput,
  DeleteVolumeCommandOutput,
} from "./commands/DeleteVolumeCommand";
import {
  DescribeAvailabilityMonitorTestCommand,
  DescribeAvailabilityMonitorTestCommandInput,
  DescribeAvailabilityMonitorTestCommandOutput,
} from "./commands/DescribeAvailabilityMonitorTestCommand";
import {
  DescribeBandwidthRateLimitCommand,
  DescribeBandwidthRateLimitCommandInput,
  DescribeBandwidthRateLimitCommandOutput,
} from "./commands/DescribeBandwidthRateLimitCommand";
import {
  DescribeBandwidthRateLimitScheduleCommand,
  DescribeBandwidthRateLimitScheduleCommandInput,
  DescribeBandwidthRateLimitScheduleCommandOutput,
} from "./commands/DescribeBandwidthRateLimitScheduleCommand";
import {
  DescribeCacheCommand,
  DescribeCacheCommandInput,
  DescribeCacheCommandOutput,
} from "./commands/DescribeCacheCommand";
import {
  DescribeCachediSCSIVolumesCommand,
  DescribeCachediSCSIVolumesCommandInput,
  DescribeCachediSCSIVolumesCommandOutput,
} from "./commands/DescribeCachediSCSIVolumesCommand";
import {
  DescribeChapCredentialsCommand,
  DescribeChapCredentialsCommandInput,
  DescribeChapCredentialsCommandOutput,
} from "./commands/DescribeChapCredentialsCommand";
import {
  DescribeFileSystemAssociationsCommand,
  DescribeFileSystemAssociationsCommandInput,
  DescribeFileSystemAssociationsCommandOutput,
} from "./commands/DescribeFileSystemAssociationsCommand";
import {
  DescribeGatewayInformationCommand,
  DescribeGatewayInformationCommandInput,
  DescribeGatewayInformationCommandOutput,
} from "./commands/DescribeGatewayInformationCommand";
import {
  DescribeMaintenanceStartTimeCommand,
  DescribeMaintenanceStartTimeCommandInput,
  DescribeMaintenanceStartTimeCommandOutput,
} from "./commands/DescribeMaintenanceStartTimeCommand";
import {
  DescribeNFSFileSharesCommand,
  DescribeNFSFileSharesCommandInput,
  DescribeNFSFileSharesCommandOutput,
} from "./commands/DescribeNFSFileSharesCommand";
import {
  DescribeSMBFileSharesCommand,
  DescribeSMBFileSharesCommandInput,
  DescribeSMBFileSharesCommandOutput,
} from "./commands/DescribeSMBFileSharesCommand";
import {
  DescribeSMBSettingsCommand,
  DescribeSMBSettingsCommandInput,
  DescribeSMBSettingsCommandOutput,
} from "./commands/DescribeSMBSettingsCommand";
import {
  DescribeSnapshotScheduleCommand,
  DescribeSnapshotScheduleCommandInput,
  DescribeSnapshotScheduleCommandOutput,
} from "./commands/DescribeSnapshotScheduleCommand";
import {
  DescribeStorediSCSIVolumesCommand,
  DescribeStorediSCSIVolumesCommandInput,
  DescribeStorediSCSIVolumesCommandOutput,
} from "./commands/DescribeStorediSCSIVolumesCommand";
import {
  DescribeTapeArchivesCommand,
  DescribeTapeArchivesCommandInput,
  DescribeTapeArchivesCommandOutput,
} from "./commands/DescribeTapeArchivesCommand";
import {
  DescribeTapeRecoveryPointsCommand,
  DescribeTapeRecoveryPointsCommandInput,
  DescribeTapeRecoveryPointsCommandOutput,
} from "./commands/DescribeTapeRecoveryPointsCommand";
import {
  DescribeTapesCommand,
  DescribeTapesCommandInput,
  DescribeTapesCommandOutput,
} from "./commands/DescribeTapesCommand";
import {
  DescribeUploadBufferCommand,
  DescribeUploadBufferCommandInput,
  DescribeUploadBufferCommandOutput,
} from "./commands/DescribeUploadBufferCommand";
import {
  DescribeVTLDevicesCommand,
  DescribeVTLDevicesCommandInput,
  DescribeVTLDevicesCommandOutput,
} from "./commands/DescribeVTLDevicesCommand";
import {
  DescribeWorkingStorageCommand,
  DescribeWorkingStorageCommandInput,
  DescribeWorkingStorageCommandOutput,
} from "./commands/DescribeWorkingStorageCommand";
import {
  DetachVolumeCommand,
  DetachVolumeCommandInput,
  DetachVolumeCommandOutput,
} from "./commands/DetachVolumeCommand";
import {
  DisableGatewayCommand,
  DisableGatewayCommandInput,
  DisableGatewayCommandOutput,
} from "./commands/DisableGatewayCommand";
import {
  DisassociateFileSystemCommand,
  DisassociateFileSystemCommandInput,
  DisassociateFileSystemCommandOutput,
} from "./commands/DisassociateFileSystemCommand";
import { JoinDomainCommand, JoinDomainCommandInput, JoinDomainCommandOutput } from "./commands/JoinDomainCommand";
import {
  ListAutomaticTapeCreationPoliciesCommand,
  ListAutomaticTapeCreationPoliciesCommandInput,
  ListAutomaticTapeCreationPoliciesCommandOutput,
} from "./commands/ListAutomaticTapeCreationPoliciesCommand";
import {
  ListFileSharesCommand,
  ListFileSharesCommandInput,
  ListFileSharesCommandOutput,
} from "./commands/ListFileSharesCommand";
import {
  ListFileSystemAssociationsCommand,
  ListFileSystemAssociationsCommandInput,
  ListFileSystemAssociationsCommandOutput,
} from "./commands/ListFileSystemAssociationsCommand";
import {
  ListGatewaysCommand,
  ListGatewaysCommandInput,
  ListGatewaysCommandOutput,
} from "./commands/ListGatewaysCommand";
import {
  ListLocalDisksCommand,
  ListLocalDisksCommandInput,
  ListLocalDisksCommandOutput,
} from "./commands/ListLocalDisksCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTapePoolsCommand,
  ListTapePoolsCommandInput,
  ListTapePoolsCommandOutput,
} from "./commands/ListTapePoolsCommand";
import { ListTapesCommand, ListTapesCommandInput, ListTapesCommandOutput } from "./commands/ListTapesCommand";
import {
  ListVolumeInitiatorsCommand,
  ListVolumeInitiatorsCommandInput,
  ListVolumeInitiatorsCommandOutput,
} from "./commands/ListVolumeInitiatorsCommand";
import {
  ListVolumeRecoveryPointsCommand,
  ListVolumeRecoveryPointsCommandInput,
  ListVolumeRecoveryPointsCommandOutput,
} from "./commands/ListVolumeRecoveryPointsCommand";
import { ListVolumesCommand, ListVolumesCommandInput, ListVolumesCommandOutput } from "./commands/ListVolumesCommand";
import {
  NotifyWhenUploadedCommand,
  NotifyWhenUploadedCommandInput,
  NotifyWhenUploadedCommandOutput,
} from "./commands/NotifyWhenUploadedCommand";
import {
  RefreshCacheCommand,
  RefreshCacheCommandInput,
  RefreshCacheCommandOutput,
} from "./commands/RefreshCacheCommand";
import {
  RemoveTagsFromResourceCommand,
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "./commands/RemoveTagsFromResourceCommand";
import { ResetCacheCommand, ResetCacheCommandInput, ResetCacheCommandOutput } from "./commands/ResetCacheCommand";
import {
  RetrieveTapeArchiveCommand,
  RetrieveTapeArchiveCommandInput,
  RetrieveTapeArchiveCommandOutput,
} from "./commands/RetrieveTapeArchiveCommand";
import {
  RetrieveTapeRecoveryPointCommand,
  RetrieveTapeRecoveryPointCommandInput,
  RetrieveTapeRecoveryPointCommandOutput,
} from "./commands/RetrieveTapeRecoveryPointCommand";
import {
  SetLocalConsolePasswordCommand,
  SetLocalConsolePasswordCommandInput,
  SetLocalConsolePasswordCommandOutput,
} from "./commands/SetLocalConsolePasswordCommand";
import {
  SetSMBGuestPasswordCommand,
  SetSMBGuestPasswordCommandInput,
  SetSMBGuestPasswordCommandOutput,
} from "./commands/SetSMBGuestPasswordCommand";
import {
  ShutdownGatewayCommand,
  ShutdownGatewayCommandInput,
  ShutdownGatewayCommandOutput,
} from "./commands/ShutdownGatewayCommand";
import {
  StartAvailabilityMonitorTestCommand,
  StartAvailabilityMonitorTestCommandInput,
  StartAvailabilityMonitorTestCommandOutput,
} from "./commands/StartAvailabilityMonitorTestCommand";
import {
  StartGatewayCommand,
  StartGatewayCommandInput,
  StartGatewayCommandOutput,
} from "./commands/StartGatewayCommand";
import {
  UpdateAutomaticTapeCreationPolicyCommand,
  UpdateAutomaticTapeCreationPolicyCommandInput,
  UpdateAutomaticTapeCreationPolicyCommandOutput,
} from "./commands/UpdateAutomaticTapeCreationPolicyCommand";
import {
  UpdateBandwidthRateLimitCommand,
  UpdateBandwidthRateLimitCommandInput,
  UpdateBandwidthRateLimitCommandOutput,
} from "./commands/UpdateBandwidthRateLimitCommand";
import {
  UpdateBandwidthRateLimitScheduleCommand,
  UpdateBandwidthRateLimitScheduleCommandInput,
  UpdateBandwidthRateLimitScheduleCommandOutput,
} from "./commands/UpdateBandwidthRateLimitScheduleCommand";
import {
  UpdateChapCredentialsCommand,
  UpdateChapCredentialsCommandInput,
  UpdateChapCredentialsCommandOutput,
} from "./commands/UpdateChapCredentialsCommand";
import {
  UpdateFileSystemAssociationCommand,
  UpdateFileSystemAssociationCommandInput,
  UpdateFileSystemAssociationCommandOutput,
} from "./commands/UpdateFileSystemAssociationCommand";
import {
  UpdateGatewayInformationCommand,
  UpdateGatewayInformationCommandInput,
  UpdateGatewayInformationCommandOutput,
} from "./commands/UpdateGatewayInformationCommand";
import {
  UpdateGatewaySoftwareNowCommand,
  UpdateGatewaySoftwareNowCommandInput,
  UpdateGatewaySoftwareNowCommandOutput,
} from "./commands/UpdateGatewaySoftwareNowCommand";
import {
  UpdateMaintenanceStartTimeCommand,
  UpdateMaintenanceStartTimeCommandInput,
  UpdateMaintenanceStartTimeCommandOutput,
} from "./commands/UpdateMaintenanceStartTimeCommand";
import {
  UpdateNFSFileShareCommand,
  UpdateNFSFileShareCommandInput,
  UpdateNFSFileShareCommandOutput,
} from "./commands/UpdateNFSFileShareCommand";
import {
  UpdateSMBFileShareCommand,
  UpdateSMBFileShareCommandInput,
  UpdateSMBFileShareCommandOutput,
} from "./commands/UpdateSMBFileShareCommand";
import {
  UpdateSMBFileShareVisibilityCommand,
  UpdateSMBFileShareVisibilityCommandInput,
  UpdateSMBFileShareVisibilityCommandOutput,
} from "./commands/UpdateSMBFileShareVisibilityCommand";
import {
  UpdateSMBLocalGroupsCommand,
  UpdateSMBLocalGroupsCommandInput,
  UpdateSMBLocalGroupsCommandOutput,
} from "./commands/UpdateSMBLocalGroupsCommand";
import {
  UpdateSMBSecurityStrategyCommand,
  UpdateSMBSecurityStrategyCommandInput,
  UpdateSMBSecurityStrategyCommandOutput,
} from "./commands/UpdateSMBSecurityStrategyCommand";
import {
  UpdateSnapshotScheduleCommand,
  UpdateSnapshotScheduleCommandInput,
  UpdateSnapshotScheduleCommandOutput,
} from "./commands/UpdateSnapshotScheduleCommand";
import {
  UpdateVTLDeviceTypeCommand,
  UpdateVTLDeviceTypeCommandInput,
  UpdateVTLDeviceTypeCommandOutput,
} from "./commands/UpdateVTLDeviceTypeCommand";
import { StorageGatewayClient } from "./StorageGatewayClient";

/**
 * <fullname>Storage Gateway Service</fullname>
 *
 *          <p>Storage Gateway is the service that connects an on-premises software appliance
 *          with cloud-based storage to provide seamless and secure integration between an
 *          organization's on-premises IT environment and the Amazon Web Services storage
 *          infrastructure. The service enables you to securely upload data to the Amazon Web Services Cloud for cost effective backup and rapid disaster recovery.</p>
 *
 *          <p>Use the following links to get started using the <i>Storage Gateway
 *             Service API Reference</i>:</p>
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
 *                   <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#APIErrorResponses">Error responses</a>: Provides reference information about Storage Gateway errors.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_Operations.html">Operations in Storage Gateway</a>: Contains detailed descriptions of all Storage Gateway operations, their request parameters, response elements, possible errors, and
 *                examples of requests and responses.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/general/latest/gr/sg.html">Storage Gateway
 *                   endpoints and quotas</a>: Provides a list of each Amazon Web Services Region
 *                and the endpoints available for use with Storage Gateway.</p>
 *             </li>
 *          </ul>
 *
 *          <note>
 *             <p>Storage Gateway resource IDs are in uppercase. When you use these resource IDs
 *             with the Amazon EC2 API, EC2 expects resource IDs in lowercase. You must change
 *             your resource ID to lowercase to use it with the EC2 API. For example, in Storage
 *             Gateway the ID for a volume might be <code>vol-AA22BB012345DAF670</code>. When you use
 *             this ID with the EC2 API, you must change it to <code>vol-aa22bb012345daf670</code>.
 *             Otherwise, the EC2 API might not behave as expected.</p>
 *          </note>
 *
 *          <important>
 *             <p>IDs for Storage Gateway volumes and Amazon EBS snapshots created from gateway
 *             volumes are changing to a longer format. Starting in December 2016, all new volumes and
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
 *                Heads-up – Longer Storage Gateway volume and snapshot IDs coming in
 *             2016</a>.</p>
 *          </important>
 */
export class StorageGateway extends StorageGatewayClient {
  /**
   * <p>Activates the gateway you previously deployed on your host. In the activation process,
   *          you specify information such as the Amazon Web Services Region that you want to use for
   *          storing snapshots or tapes, the time zone for scheduled snapshots the gateway snapshot
   *          schedule window, an activation key, and a name for your gateway. The activation process
   *          also associates your gateway with your account. For more information, see <a>UpdateGatewayInformation</a>.</p>
   *          <note>
   *             <p>You must turn on the gateway VM before you can activate your gateway.</p>
   *          </note>
   */
  public activateGateway(
    args: ActivateGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ActivateGatewayCommandOutput>;
  public activateGateway(
    args: ActivateGatewayCommandInput,
    cb: (err: any, data?: ActivateGatewayCommandOutput) => void
  ): void;
  public activateGateway(
    args: ActivateGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ActivateGatewayCommandOutput) => void
  ): void;
  public activateGateway(
    args: ActivateGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ActivateGatewayCommandOutput) => void),
    cb?: (err: any, data?: ActivateGatewayCommandOutput) => void
  ): Promise<ActivateGatewayCommandOutput> | void {
    const command = new ActivateGatewayCommand(args);
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
   * <p>Configures one or more gateway local disks as cache for a gateway. This operation is
   *          only supported in the cached volume, tape, and file gateway type (see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html">How Storage Gateway works (architecture)</a>.</p>
   *
   *          <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to
   *          add cache, and one or more disk IDs that you want to configure as cache.</p>
   */
  public addCache(args: AddCacheCommandInput, options?: __HttpHandlerOptions): Promise<AddCacheCommandOutput>;
  public addCache(args: AddCacheCommandInput, cb: (err: any, data?: AddCacheCommandOutput) => void): void;
  public addCache(
    args: AddCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddCacheCommandOutput) => void
  ): void;
  public addCache(
    args: AddCacheCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddCacheCommandOutput) => void),
    cb?: (err: any, data?: AddCacheCommandOutput) => void
  ): Promise<AddCacheCommandOutput> | void {
    const command = new AddCacheCommand(args);
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
   * <p>Adds one or more tags to the specified resource. You use tags to add metadata to
   *          resources, which you can use to categorize these resources. For example, you can categorize
   *          resources by purpose, owner, environment, or team. Each tag consists of a key and a value,
   *          which you define. You can add tags to the following Storage Gateway resources:</p>
   *
   *          <ul>
   *             <li>
   *                <p>Storage gateways of all types</p>
   *             </li>
   *             <li>
   *                <p>Storage volumes</p>
   *             </li>
   *             <li>
   *                <p>Virtual tapes</p>
   *             </li>
   *             <li>
   *                <p>NFS and SMB file shares</p>
   *             </li>
   *             <li>
   *                <p>File System associations</p>
   *             </li>
   *          </ul>
   *
   *          <p>You can create a maximum of 50 tags for each resource. Virtual tapes and storage volumes
   *          that are recovered to a new gateway maintain their tags.</p>
   */
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddTagsToResourceCommandOutput>;
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddTagsToResourceCommandOutput) => void),
    cb?: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): Promise<AddTagsToResourceCommandOutput> | void {
    const command = new AddTagsToResourceCommand(args);
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
   * <p>Configures one or more gateway local disks as upload buffer for a specified gateway.
   *          This operation is supported for the stored volume, cached volume, and tape gateway
   *          types.</p>
   *
   *          <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to
   *          add upload buffer, and one or more disk IDs that you want to configure as upload
   *          buffer.</p>
   */
  public addUploadBuffer(
    args: AddUploadBufferCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddUploadBufferCommandOutput>;
  public addUploadBuffer(
    args: AddUploadBufferCommandInput,
    cb: (err: any, data?: AddUploadBufferCommandOutput) => void
  ): void;
  public addUploadBuffer(
    args: AddUploadBufferCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddUploadBufferCommandOutput) => void
  ): void;
  public addUploadBuffer(
    args: AddUploadBufferCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddUploadBufferCommandOutput) => void),
    cb?: (err: any, data?: AddUploadBufferCommandOutput) => void
  ): Promise<AddUploadBufferCommandOutput> | void {
    const command = new AddUploadBufferCommand(args);
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
   * <p>Configures one or more gateway local disks as working storage for a gateway. This
   *          operation is only supported in the stored volume gateway type. This operation is deprecated
   *          in cached volume API version 20120630. Use <a>AddUploadBuffer</a>
   *          instead.</p>
   *
   *          <note>
   *             <p>Working storage is also referred to as upload buffer. You can also use the <a>AddUploadBuffer</a> operation to add upload buffer to a stored volume
   *             gateway.</p>
   *          </note>
   *
   *          <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to
   *          add working storage, and one or more disk IDs that you want to configure as working
   *          storage.</p>
   */
  public addWorkingStorage(
    args: AddWorkingStorageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddWorkingStorageCommandOutput>;
  public addWorkingStorage(
    args: AddWorkingStorageCommandInput,
    cb: (err: any, data?: AddWorkingStorageCommandOutput) => void
  ): void;
  public addWorkingStorage(
    args: AddWorkingStorageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddWorkingStorageCommandOutput) => void
  ): void;
  public addWorkingStorage(
    args: AddWorkingStorageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddWorkingStorageCommandOutput) => void),
    cb?: (err: any, data?: AddWorkingStorageCommandOutput) => void
  ): Promise<AddWorkingStorageCommandOutput> | void {
    const command = new AddWorkingStorageCommand(args);
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
   * <p>Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in
   *          the S3 storage class that is associated with the pool. When you use your backup application
   *          to eject the tape, the tape is archived directly into the S3 storage class (S3 Glacier or
   *          S3 Glacier Deep Archive) that corresponds to the pool.</p>
   */
  public assignTapePool(
    args: AssignTapePoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssignTapePoolCommandOutput>;
  public assignTapePool(
    args: AssignTapePoolCommandInput,
    cb: (err: any, data?: AssignTapePoolCommandOutput) => void
  ): void;
  public assignTapePool(
    args: AssignTapePoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssignTapePoolCommandOutput) => void
  ): void;
  public assignTapePool(
    args: AssignTapePoolCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssignTapePoolCommandOutput) => void),
    cb?: (err: any, data?: AssignTapePoolCommandOutput) => void
  ): Promise<AssignTapePoolCommandOutput> | void {
    const command = new AssignTapePoolCommand(args);
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
   * <p>Associate an Amazon FSx file system with the FSx File Gateway. After the
   *          association process is complete, the file shares on the Amazon FSx file system are
   *          available for access through the gateway. This operation only supports the FSx File Gateway
   *          type.</p>
   */
  public associateFileSystem(
    args: AssociateFileSystemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateFileSystemCommandOutput>;
  public associateFileSystem(
    args: AssociateFileSystemCommandInput,
    cb: (err: any, data?: AssociateFileSystemCommandOutput) => void
  ): void;
  public associateFileSystem(
    args: AssociateFileSystemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateFileSystemCommandOutput) => void
  ): void;
  public associateFileSystem(
    args: AssociateFileSystemCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateFileSystemCommandOutput) => void),
    cb?: (err: any, data?: AssociateFileSystemCommandOutput) => void
  ): Promise<AssociateFileSystemCommandOutput> | void {
    const command = new AssociateFileSystemCommand(args);
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
   * <p>Connects a volume to an iSCSI connection and then attaches the volume to the specified
   *          gateway. Detaching and attaching a volume enables you to recover your data from one gateway
   *          to a different gateway without creating a snapshot. It also makes it easier to move your
   *          volumes from an on-premises gateway to a gateway hosted on an Amazon EC2 instance.</p>
   */
  public attachVolume(
    args: AttachVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachVolumeCommandOutput>;
  public attachVolume(args: AttachVolumeCommandInput, cb: (err: any, data?: AttachVolumeCommandOutput) => void): void;
  public attachVolume(
    args: AttachVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachVolumeCommandOutput) => void
  ): void;
  public attachVolume(
    args: AttachVolumeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AttachVolumeCommandOutput) => void),
    cb?: (err: any, data?: AttachVolumeCommandOutput) => void
  ): Promise<AttachVolumeCommandOutput> | void {
    const command = new AttachVolumeCommand(args);
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
   * <p>Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving
   *          process is initiated. This operation is only supported in the tape gateway type.</p>
   */
  public cancelArchival(
    args: CancelArchivalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelArchivalCommandOutput>;
  public cancelArchival(
    args: CancelArchivalCommandInput,
    cb: (err: any, data?: CancelArchivalCommandOutput) => void
  ): void;
  public cancelArchival(
    args: CancelArchivalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelArchivalCommandOutput) => void
  ): void;
  public cancelArchival(
    args: CancelArchivalCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelArchivalCommandOutput) => void),
    cb?: (err: any, data?: CancelArchivalCommandOutput) => void
  ): Promise<CancelArchivalCommandOutput> | void {
    const command = new CancelArchivalCommand(args);
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
   * <p>Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after
   *          the retrieval process is initiated. The virtual tape is returned to the VTS. This operation
   *          is only supported in the tape gateway type.</p>
   */
  public cancelRetrieval(
    args: CancelRetrievalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelRetrievalCommandOutput>;
  public cancelRetrieval(
    args: CancelRetrievalCommandInput,
    cb: (err: any, data?: CancelRetrievalCommandOutput) => void
  ): void;
  public cancelRetrieval(
    args: CancelRetrievalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelRetrievalCommandOutput) => void
  ): void;
  public cancelRetrieval(
    args: CancelRetrievalCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelRetrievalCommandOutput) => void),
    cb?: (err: any, data?: CancelRetrievalCommandOutput) => void
  ): Promise<CancelRetrievalCommandOutput> | void {
    const command = new CancelRetrievalCommand(args);
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
   * <p>Creates a cached volume on a specified cached volume gateway. This operation is only
   *          supported in the cached volume gateway type.</p>
   *
   *          <note>
   *             <p>Cache storage must be allocated to the gateway before you can create a cached volume.
   *             Use the <a>AddCache</a> operation to add cache storage to a gateway.</p>
   *          </note>
   *
   *          <p>In the request, you must specify the gateway, size of the volume in bytes, the iSCSI
   *          target name, an IP address on which to expose the target, and a unique client token. In
   *          response, the gateway creates the volume and returns information about it. This information
   *          includes the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that
   *          initiators can use to connect to the volume target.</p>
   *
   *          <p>Optionally, you can provide the ARN for an existing volume as the
   *             <code>SourceVolumeARN</code> for this cached volume, which creates an exact copy of the
   *          existing volume’s latest recovery point. The <code>VolumeSizeInBytes</code> value must be
   *          equal to or larger than the size of the copied volume, in bytes.</p>
   */
  public createCachediSCSIVolume(
    args: CreateCachediSCSIVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCachediSCSIVolumeCommandOutput>;
  public createCachediSCSIVolume(
    args: CreateCachediSCSIVolumeCommandInput,
    cb: (err: any, data?: CreateCachediSCSIVolumeCommandOutput) => void
  ): void;
  public createCachediSCSIVolume(
    args: CreateCachediSCSIVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCachediSCSIVolumeCommandOutput) => void
  ): void;
  public createCachediSCSIVolume(
    args: CreateCachediSCSIVolumeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCachediSCSIVolumeCommandOutput) => void),
    cb?: (err: any, data?: CreateCachediSCSIVolumeCommandOutput) => void
  ): Promise<CreateCachediSCSIVolumeCommandOutput> | void {
    const command = new CreateCachediSCSIVolumeCommand(args);
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
   * <p>Creates a Network File System (NFS) file share on an existing S3 File Gateway. In
   *          Storage Gateway, a file share is a file system mount point backed by Amazon S3
   *          cloud storage. Storage Gateway exposes file shares using an NFS interface. This operation
   *          is only supported for S3 File Gateways.</p>
   *
   *          <important>
   *             <p>S3 File gateway requires Security Token Service (Amazon Web Services STS) to be
   *             activated to enable you to create a file share. Make sure Amazon Web Services STS is
   *             activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If
   *                Amazon Web Services STS is not activated in the Amazon Web Services Region, activate
   *             it. For information about how to activate Amazon Web Services STS, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
   *                deactivating Amazon Web Services STS in an Amazon Web Services Region</a> in the
   *                   <i>Identity and Access Management User Guide</i>.</p>
   *
   *             <p>S3 File Gateways do not support creating hard or symbolic links on a file
   *             share.</p>
   *          </important>
   */
  public createNFSFileShare(
    args: CreateNFSFileShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNFSFileShareCommandOutput>;
  public createNFSFileShare(
    args: CreateNFSFileShareCommandInput,
    cb: (err: any, data?: CreateNFSFileShareCommandOutput) => void
  ): void;
  public createNFSFileShare(
    args: CreateNFSFileShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNFSFileShareCommandOutput) => void
  ): void;
  public createNFSFileShare(
    args: CreateNFSFileShareCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateNFSFileShareCommandOutput) => void),
    cb?: (err: any, data?: CreateNFSFileShareCommandOutput) => void
  ): Promise<CreateNFSFileShareCommandOutput> | void {
    const command = new CreateNFSFileShareCommand(args);
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
   * <p>Creates a Server Message Block (SMB) file share on an existing S3 File Gateway. In
   *          Storage Gateway, a file share is a file system mount point backed by Amazon S3
   *          cloud storage. Storage Gateway exposes file shares using an SMB interface. This operation
   *          is only supported for S3 File Gateways.</p>
   *
   *          <important>
   *             <p>S3 File Gateways require Security Token Service (Amazon Web Services STS) to be
   *             activated to enable you to create a file share. Make sure that Amazon Web Services STS
   *             is activated in the Amazon Web Services Region you are creating your S3 File Gateway in.
   *             If Amazon Web Services STS is not activated in this Amazon Web Services Region, activate
   *             it. For information about how to activate Amazon Web Services STS, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
   *                deactivating Amazon Web Services STS in an Amazon Web Services Region</a> in the
   *                   <i>Identity and Access Management User Guide</i>.</p>
   *
   *             <p>File gateways don't support creating hard or symbolic links on a file
   *             share.</p>
   *          </important>
   */
  public createSMBFileShare(
    args: CreateSMBFileShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSMBFileShareCommandOutput>;
  public createSMBFileShare(
    args: CreateSMBFileShareCommandInput,
    cb: (err: any, data?: CreateSMBFileShareCommandOutput) => void
  ): void;
  public createSMBFileShare(
    args: CreateSMBFileShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSMBFileShareCommandOutput) => void
  ): void;
  public createSMBFileShare(
    args: CreateSMBFileShareCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSMBFileShareCommandOutput) => void),
    cb?: (err: any, data?: CreateSMBFileShareCommandOutput) => void
  ): Promise<CreateSMBFileShareCommandOutput> | void {
    const command = new CreateSMBFileShareCommand(args);
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
   * <p>Initiates a snapshot of a volume.</p>
   *
   *          <p>Storage Gateway provides the ability to back up point-in-time snapshots of your
   *          data to Amazon Simple Storage (Amazon S3) for durable off-site recovery, and also
   *          import the data to an Amazon Elastic Block Store (EBS) volume in Amazon Elastic Compute
   *          Cloud (EC2). You can take snapshots of your gateway volume on a scheduled or ad hoc basis.
   *          This API enables you to take an ad hoc snapshot. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/managing-volumes.html#SchedulingSnapshot">Editing a
   *             snapshot schedule</a>.</p>
   *
   *          <p>In the <code>CreateSnapshot</code> request, you identify the volume by providing its
   *          Amazon Resource Name (ARN). You must also provide description for the snapshot. When
   *             Storage Gateway takes the snapshot of specified volume, the snapshot and
   *          description appears in the Storage Gateway console. In response, Storage Gateway
   *          returns you a snapshot ID. You can use this snapshot ID to check the snapshot progress or
   *          later use it when you want to create a volume from a snapshot. This operation is only
   *          supported in stored and cached volume gateway type.</p>
   *
   *          <note>
   *             <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a>
   *             or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSnapshot.html">DeleteSnapshot</a> in the <i>Amazon Elastic Compute Cloud API
   *                Reference</i>.</p>
   *          </note>
   *
   *          <important>
   *             <p>Volume and snapshot IDs are changing to a longer length ID format. For more
   *             information, see the important note on the <a href="https://docs.aws.amazon.com/storagegateway/latest/APIReference/Welcome.html">Welcome</a> page.</p>
   *          </important>
   */
  public createSnapshot(
    args: CreateSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSnapshotCommandOutput>;
  public createSnapshot(
    args: CreateSnapshotCommandInput,
    cb: (err: any, data?: CreateSnapshotCommandOutput) => void
  ): void;
  public createSnapshot(
    args: CreateSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSnapshotCommandOutput) => void
  ): void;
  public createSnapshot(
    args: CreateSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSnapshotCommandOutput) => void),
    cb?: (err: any, data?: CreateSnapshotCommandOutput) => void
  ): Promise<CreateSnapshotCommandOutput> | void {
    const command = new CreateSnapshotCommand(args);
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
   * <p>Initiates a snapshot of a gateway from a volume recovery point. This operation is only
   *          supported in the cached volume gateway type.</p>
   *
   *          <p>A volume recovery point is a point in time at which all data of the volume is consistent
   *          and from which you can create a snapshot. To get a list of volume recovery point for cached
   *          volume gateway, use <a>ListVolumeRecoveryPoints</a>.</p>
   *
   *          <p>In the <code>CreateSnapshotFromVolumeRecoveryPoint</code> request, you identify the
   *          volume by providing its Amazon Resource Name (ARN). You must also provide a description for
   *          the snapshot. When the gateway takes a snapshot of the specified volume, the snapshot and
   *          its description appear in the Storage Gateway console.
   *           In response, the gateway returns
   *          you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use
   *          it when you want to create a volume from a snapshot.</p>
   *
   *          <note>
   *             <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a>
   *             or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSnapshot.html">DeleteSnapshot</a> in the <i>Amazon Elastic Compute Cloud API
   *                Reference</i>.</p>
   *          </note>
   */
  public createSnapshotFromVolumeRecoveryPoint(
    args: CreateSnapshotFromVolumeRecoveryPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSnapshotFromVolumeRecoveryPointCommandOutput>;
  public createSnapshotFromVolumeRecoveryPoint(
    args: CreateSnapshotFromVolumeRecoveryPointCommandInput,
    cb: (err: any, data?: CreateSnapshotFromVolumeRecoveryPointCommandOutput) => void
  ): void;
  public createSnapshotFromVolumeRecoveryPoint(
    args: CreateSnapshotFromVolumeRecoveryPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSnapshotFromVolumeRecoveryPointCommandOutput) => void
  ): void;
  public createSnapshotFromVolumeRecoveryPoint(
    args: CreateSnapshotFromVolumeRecoveryPointCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateSnapshotFromVolumeRecoveryPointCommandOutput) => void),
    cb?: (err: any, data?: CreateSnapshotFromVolumeRecoveryPointCommandOutput) => void
  ): Promise<CreateSnapshotFromVolumeRecoveryPointCommandOutput> | void {
    const command = new CreateSnapshotFromVolumeRecoveryPointCommand(args);
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
   * <p>Creates a volume on a specified gateway. This operation is only supported in the stored
   *          volume gateway type.</p>
   *
   *          <p>The size of the volume to create is inferred from the disk size. You can choose to
   *          preserve existing data on the disk, create volume from an existing snapshot, or create an
   *          empty volume. If you choose to create an empty gateway volume, then any existing data on
   *          the disk is erased.</p>
   *
   *          <p>In the request, you must specify the gateway and the disk information on which you are
   *          creating the volume. In response, the gateway creates the volume and returns volume
   *          information such as the volume Amazon Resource Name (ARN), its size, and the iSCSI target
   *          ARN that initiators can use to connect to the volume target.</p>
   */
  public createStorediSCSIVolume(
    args: CreateStorediSCSIVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStorediSCSIVolumeCommandOutput>;
  public createStorediSCSIVolume(
    args: CreateStorediSCSIVolumeCommandInput,
    cb: (err: any, data?: CreateStorediSCSIVolumeCommandOutput) => void
  ): void;
  public createStorediSCSIVolume(
    args: CreateStorediSCSIVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStorediSCSIVolumeCommandOutput) => void
  ): void;
  public createStorediSCSIVolume(
    args: CreateStorediSCSIVolumeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateStorediSCSIVolumeCommandOutput) => void),
    cb?: (err: any, data?: CreateStorediSCSIVolumeCommandOutput) => void
  ): Promise<CreateStorediSCSIVolumeCommandOutput> | void {
    const command = new CreateStorediSCSIVolumeCommand(args);
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
   * <p>Creates a new custom tape pool. You can use custom tape pool to enable tape retention
   *          lock on tapes that are archived in the custom pool.</p>
   */
  public createTapePool(
    args: CreateTapePoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTapePoolCommandOutput>;
  public createTapePool(
    args: CreateTapePoolCommandInput,
    cb: (err: any, data?: CreateTapePoolCommandOutput) => void
  ): void;
  public createTapePool(
    args: CreateTapePoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTapePoolCommandOutput) => void
  ): void;
  public createTapePool(
    args: CreateTapePoolCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTapePoolCommandOutput) => void),
    cb?: (err: any, data?: CreateTapePoolCommandOutput) => void
  ): Promise<CreateTapePoolCommandOutput> | void {
    const command = new CreateTapePoolCommand(args);
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
   * <p>Creates one or more virtual tapes. You write data to the virtual tapes and then archive
   *          the tapes. This operation is only supported in the tape gateway type.</p>
   *
   *          <note>
   *             <p>Cache storage must be allocated to the gateway before you can create virtual tapes.
   *             Use the <a>AddCache</a> operation to add cache storage to a gateway.</p>
   *          </note>
   */
  public createTapes(args: CreateTapesCommandInput, options?: __HttpHandlerOptions): Promise<CreateTapesCommandOutput>;
  public createTapes(args: CreateTapesCommandInput, cb: (err: any, data?: CreateTapesCommandOutput) => void): void;
  public createTapes(
    args: CreateTapesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTapesCommandOutput) => void
  ): void;
  public createTapes(
    args: CreateTapesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTapesCommandOutput) => void),
    cb?: (err: any, data?: CreateTapesCommandOutput) => void
  ): Promise<CreateTapesCommandOutput> | void {
    const command = new CreateTapesCommand(args);
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
   * <p>Creates a virtual tape by using your own barcode. You write data to the virtual tape and
   *          then archive the tape. A barcode is unique and cannot be reused if it has already been used
   *          on a tape. This applies to barcodes used on deleted tapes. This operation is only supported
   *          in the tape gateway type.</p>
   *
   *          <note>
   *             <p>Cache storage must be allocated to the gateway before you can create a virtual tape.
   *             Use the <a>AddCache</a> operation to add cache storage to a gateway.</p>
   *          </note>
   */
  public createTapeWithBarcode(
    args: CreateTapeWithBarcodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTapeWithBarcodeCommandOutput>;
  public createTapeWithBarcode(
    args: CreateTapeWithBarcodeCommandInput,
    cb: (err: any, data?: CreateTapeWithBarcodeCommandOutput) => void
  ): void;
  public createTapeWithBarcode(
    args: CreateTapeWithBarcodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTapeWithBarcodeCommandOutput) => void
  ): void;
  public createTapeWithBarcode(
    args: CreateTapeWithBarcodeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTapeWithBarcodeCommandOutput) => void),
    cb?: (err: any, data?: CreateTapeWithBarcodeCommandOutput) => void
  ): Promise<CreateTapeWithBarcodeCommandOutput> | void {
    const command = new CreateTapeWithBarcodeCommand(args);
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
   * <p>Deletes the automatic tape creation policy of a gateway. If you delete this policy, new
   *          virtual tapes must be created manually. Use the Amazon Resource Name (ARN) of the gateway
   *          in your request to remove the policy.</p>
   */
  public deleteAutomaticTapeCreationPolicy(
    args: DeleteAutomaticTapeCreationPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAutomaticTapeCreationPolicyCommandOutput>;
  public deleteAutomaticTapeCreationPolicy(
    args: DeleteAutomaticTapeCreationPolicyCommandInput,
    cb: (err: any, data?: DeleteAutomaticTapeCreationPolicyCommandOutput) => void
  ): void;
  public deleteAutomaticTapeCreationPolicy(
    args: DeleteAutomaticTapeCreationPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAutomaticTapeCreationPolicyCommandOutput) => void
  ): void;
  public deleteAutomaticTapeCreationPolicy(
    args: DeleteAutomaticTapeCreationPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAutomaticTapeCreationPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteAutomaticTapeCreationPolicyCommandOutput) => void
  ): Promise<DeleteAutomaticTapeCreationPolicyCommandOutput> | void {
    const command = new DeleteAutomaticTapeCreationPolicyCommand(args);
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
   * <p>Deletes the bandwidth rate limits of a gateway. You can delete either the upload and
   *          download bandwidth rate limit, or you can delete both. If you delete only one of the
   *          limits, the other limit remains unchanged. To specify which gateway to work with, use the
   *          Amazon Resource Name (ARN) of the gateway in your request. This operation is supported only
   *          for the stored volume, cached volume, and tape gateway types.</p>
   */
  public deleteBandwidthRateLimit(
    args: DeleteBandwidthRateLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBandwidthRateLimitCommandOutput>;
  public deleteBandwidthRateLimit(
    args: DeleteBandwidthRateLimitCommandInput,
    cb: (err: any, data?: DeleteBandwidthRateLimitCommandOutput) => void
  ): void;
  public deleteBandwidthRateLimit(
    args: DeleteBandwidthRateLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBandwidthRateLimitCommandOutput) => void
  ): void;
  public deleteBandwidthRateLimit(
    args: DeleteBandwidthRateLimitCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBandwidthRateLimitCommandOutput) => void),
    cb?: (err: any, data?: DeleteBandwidthRateLimitCommandOutput) => void
  ): Promise<DeleteBandwidthRateLimitCommandOutput> | void {
    const command = new DeleteBandwidthRateLimitCommand(args);
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
   * <p>Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified
   *          iSCSI target and initiator pair. This operation is supported in volume and tape gateway
   *          types.</p>
   */
  public deleteChapCredentials(
    args: DeleteChapCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChapCredentialsCommandOutput>;
  public deleteChapCredentials(
    args: DeleteChapCredentialsCommandInput,
    cb: (err: any, data?: DeleteChapCredentialsCommandOutput) => void
  ): void;
  public deleteChapCredentials(
    args: DeleteChapCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChapCredentialsCommandOutput) => void
  ): void;
  public deleteChapCredentials(
    args: DeleteChapCredentialsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteChapCredentialsCommandOutput) => void),
    cb?: (err: any, data?: DeleteChapCredentialsCommandOutput) => void
  ): Promise<DeleteChapCredentialsCommandOutput> | void {
    const command = new DeleteChapCredentialsCommand(args);
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
   * <p>Deletes a file share from an S3 File Gateway. This operation is only supported for S3
   *          File Gateways.</p>
   */
  public deleteFileShare(
    args: DeleteFileShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFileShareCommandOutput>;
  public deleteFileShare(
    args: DeleteFileShareCommandInput,
    cb: (err: any, data?: DeleteFileShareCommandOutput) => void
  ): void;
  public deleteFileShare(
    args: DeleteFileShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFileShareCommandOutput) => void
  ): void;
  public deleteFileShare(
    args: DeleteFileShareCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFileShareCommandOutput) => void),
    cb?: (err: any, data?: DeleteFileShareCommandOutput) => void
  ): Promise<DeleteFileShareCommandOutput> | void {
    const command = new DeleteFileShareCommand(args);
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
   * <p>Deletes a gateway. To specify which gateway to delete, use the Amazon Resource Name
   *          (ARN) of the gateway in your request. The operation deletes the gateway; however, it does
   *          not delete the gateway virtual machine (VM) from your host computer.</p>
   *
   *          <p>After you delete a gateway, you cannot reactivate it. Completed snapshots of the gateway
   *          volumes are not deleted upon deleting the gateway, however, pending snapshots will not
   *          complete. After you delete a gateway, your next step is to remove it from your
   *          environment.</p>
   *
   *          <important>
   *             <p>You no longer pay software charges after the gateway is deleted; however, your
   *             existing Amazon EBS snapshots persist and you will continue to be billed for these
   *             snapshots. You can choose to remove all remaining Amazon EBS snapshots by canceling your
   *             Amazon EC2 subscription.  If you prefer not to cancel your Amazon EC2 subscription, you
   *             can delete your snapshots using the Amazon EC2 console. For more information, see the
   *                <a href="http://aws.amazon.com/storagegateway">Storage Gateway detail
   *             page</a>.</p>
   *          </important>
   */
  public deleteGateway(
    args: DeleteGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGatewayCommandOutput>;
  public deleteGateway(
    args: DeleteGatewayCommandInput,
    cb: (err: any, data?: DeleteGatewayCommandOutput) => void
  ): void;
  public deleteGateway(
    args: DeleteGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGatewayCommandOutput) => void
  ): void;
  public deleteGateway(
    args: DeleteGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteGatewayCommandOutput) => void),
    cb?: (err: any, data?: DeleteGatewayCommandOutput) => void
  ): Promise<DeleteGatewayCommandOutput> | void {
    const command = new DeleteGatewayCommand(args);
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
   * <p>Deletes a snapshot of a volume.</p>
   *
   *          <p>You can take snapshots of your gateway volumes on a scheduled or ad hoc basis. This API
   *          action enables you to delete a snapshot schedule for a volume. For more information, see
   *             <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/backing-up-volumes.html">Backing up your
   *             volumes</a>. In the <code>DeleteSnapshotSchedule</code> request, you identify the
   *          volume by providing its Amazon Resource Name (ARN). This operation is only supported for
   *          cached volume gateway types.</p>
   *
   *          <note>
   *
   *             <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information,
   *             go to <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a>
   *             in the <i>Amazon Elastic Compute Cloud API Reference</i>.</p>
   *          </note>
   */
  public deleteSnapshotSchedule(
    args: DeleteSnapshotScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSnapshotScheduleCommandOutput>;
  public deleteSnapshotSchedule(
    args: DeleteSnapshotScheduleCommandInput,
    cb: (err: any, data?: DeleteSnapshotScheduleCommandOutput) => void
  ): void;
  public deleteSnapshotSchedule(
    args: DeleteSnapshotScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSnapshotScheduleCommandOutput) => void
  ): void;
  public deleteSnapshotSchedule(
    args: DeleteSnapshotScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSnapshotScheduleCommandOutput) => void),
    cb?: (err: any, data?: DeleteSnapshotScheduleCommandOutput) => void
  ): Promise<DeleteSnapshotScheduleCommandOutput> | void {
    const command = new DeleteSnapshotScheduleCommand(args);
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
   * <p>Deletes the specified virtual tape. This operation is only supported in the tape gateway
   *          type.</p>
   */
  public deleteTape(args: DeleteTapeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTapeCommandOutput>;
  public deleteTape(args: DeleteTapeCommandInput, cb: (err: any, data?: DeleteTapeCommandOutput) => void): void;
  public deleteTape(
    args: DeleteTapeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTapeCommandOutput) => void
  ): void;
  public deleteTape(
    args: DeleteTapeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTapeCommandOutput) => void),
    cb?: (err: any, data?: DeleteTapeCommandOutput) => void
  ): Promise<DeleteTapeCommandOutput> | void {
    const command = new DeleteTapeCommand(args);
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
   * <p>Deletes the specified virtual tape from the virtual tape shelf (VTS). This operation is
   *          only supported in the tape gateway type.</p>
   */
  public deleteTapeArchive(
    args: DeleteTapeArchiveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTapeArchiveCommandOutput>;
  public deleteTapeArchive(
    args: DeleteTapeArchiveCommandInput,
    cb: (err: any, data?: DeleteTapeArchiveCommandOutput) => void
  ): void;
  public deleteTapeArchive(
    args: DeleteTapeArchiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTapeArchiveCommandOutput) => void
  ): void;
  public deleteTapeArchive(
    args: DeleteTapeArchiveCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTapeArchiveCommandOutput) => void),
    cb?: (err: any, data?: DeleteTapeArchiveCommandOutput) => void
  ): Promise<DeleteTapeArchiveCommandOutput> | void {
    const command = new DeleteTapeArchiveCommand(args);
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
   * <p>Delete a custom tape pool. A custom tape pool can only be deleted if there are no tapes
   *          in the pool and if there are no automatic tape creation policies that reference the custom
   *          tape pool.</p>
   */
  public deleteTapePool(
    args: DeleteTapePoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTapePoolCommandOutput>;
  public deleteTapePool(
    args: DeleteTapePoolCommandInput,
    cb: (err: any, data?: DeleteTapePoolCommandOutput) => void
  ): void;
  public deleteTapePool(
    args: DeleteTapePoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTapePoolCommandOutput) => void
  ): void;
  public deleteTapePool(
    args: DeleteTapePoolCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTapePoolCommandOutput) => void),
    cb?: (err: any, data?: DeleteTapePoolCommandOutput) => void
  ): Promise<DeleteTapePoolCommandOutput> | void {
    const command = new DeleteTapePoolCommand(args);
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
   * <p>Deletes the specified storage volume that you previously created using the <a>CreateCachediSCSIVolume</a> or <a>CreateStorediSCSIVolume</a> API.
   *          This operation is only supported in the cached volume and stored volume types. For stored
   *          volume gateways, the local disk that was configured as the storage volume is not deleted.
   *          You can reuse the local disk to create another storage volume.</p>
   *
   *          <p>Before you delete a volume, make sure there are no iSCSI connections to the volume you
   *          are deleting. You should also make sure there is no snapshot in progress. You can use the
   *          Amazon Elastic Compute Cloud (Amazon EC2) API to query snapshots on the volume you are
   *          deleting and check the snapshot status. For more information, go to <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html">DescribeSnapshots</a> in the <i>Amazon Elastic Compute Cloud API
   *             Reference</i>.</p>
   *
   *          <p>In the request, you must provide the Amazon Resource Name (ARN) of the storage volume
   *          you want to delete.</p>
   */
  public deleteVolume(
    args: DeleteVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVolumeCommandOutput>;
  public deleteVolume(args: DeleteVolumeCommandInput, cb: (err: any, data?: DeleteVolumeCommandOutput) => void): void;
  public deleteVolume(
    args: DeleteVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVolumeCommandOutput) => void
  ): void;
  public deleteVolume(
    args: DeleteVolumeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVolumeCommandOutput) => void),
    cb?: (err: any, data?: DeleteVolumeCommandOutput) => void
  ): Promise<DeleteVolumeCommandOutput> | void {
    const command = new DeleteVolumeCommand(args);
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
   * <p>Returns information about the most recent high availability monitoring test that was
   *          performed on the host in a cluster. If a test isn't performed, the status and start
   *          time in the response would be null.</p>
   */
  public describeAvailabilityMonitorTest(
    args: DescribeAvailabilityMonitorTestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAvailabilityMonitorTestCommandOutput>;
  public describeAvailabilityMonitorTest(
    args: DescribeAvailabilityMonitorTestCommandInput,
    cb: (err: any, data?: DescribeAvailabilityMonitorTestCommandOutput) => void
  ): void;
  public describeAvailabilityMonitorTest(
    args: DescribeAvailabilityMonitorTestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAvailabilityMonitorTestCommandOutput) => void
  ): void;
  public describeAvailabilityMonitorTest(
    args: DescribeAvailabilityMonitorTestCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAvailabilityMonitorTestCommandOutput) => void),
    cb?: (err: any, data?: DescribeAvailabilityMonitorTestCommandOutput) => void
  ): Promise<DescribeAvailabilityMonitorTestCommandOutput> | void {
    const command = new DescribeAvailabilityMonitorTestCommand(args);
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
   * <p>Returns the bandwidth rate limits of a gateway. By default, these limits are not set,
   *          which means no bandwidth rate limiting is in effect. This operation is supported only for
   *          the stored volume, cached volume, and tape gateway types. To describe bandwidth rate limits
   *          for S3 file gateways, use <a>DescribeBandwidthRateLimitSchedule</a>.</p>
   *
   *          <p>This operation returns a value for a bandwidth rate limit only if the limit is set. If
   *          no limits are set for the gateway, then this operation returns only the gateway ARN in the
   *          response body. To specify which gateway to describe, use the Amazon Resource Name (ARN) of
   *          the gateway in your request.</p>
   */
  public describeBandwidthRateLimit(
    args: DescribeBandwidthRateLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBandwidthRateLimitCommandOutput>;
  public describeBandwidthRateLimit(
    args: DescribeBandwidthRateLimitCommandInput,
    cb: (err: any, data?: DescribeBandwidthRateLimitCommandOutput) => void
  ): void;
  public describeBandwidthRateLimit(
    args: DescribeBandwidthRateLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBandwidthRateLimitCommandOutput) => void
  ): void;
  public describeBandwidthRateLimit(
    args: DescribeBandwidthRateLimitCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeBandwidthRateLimitCommandOutput) => void),
    cb?: (err: any, data?: DescribeBandwidthRateLimitCommandOutput) => void
  ): Promise<DescribeBandwidthRateLimitCommandOutput> | void {
    const command = new DescribeBandwidthRateLimitCommand(args);
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
   * <p> Returns information about the bandwidth rate limit schedule of a gateway. By default,
   *          gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting
   *          is in effect. This operation is supported only for volume, tape and S3 file gateways. FSx
   *          file gateways do not support bandwidth rate limits.</p>
   *
   *          <p>This operation returns information about a gateway's bandwidth rate limit schedule. A
   *          bandwidth rate limit schedule consists of one or more bandwidth rate limit intervals. A
   *          bandwidth rate limit interval defines a period of time on one or more days of the week,
   *          during which bandwidth rate limits are specified for uploading, downloading, or both. </p>
   *
   *          <p> A bandwidth rate limit interval consists of one or more days of the week, a start hour
   *          and minute, an ending hour and minute, and bandwidth rate limits for uploading and
   *          downloading </p>
   *
   *          <p> If no bandwidth rate limit schedule intervals are set for the gateway, this operation
   *          returns an empty response. To specify which gateway to describe, use the Amazon Resource
   *          Name (ARN) of the gateway in your request.</p>
   */
  public describeBandwidthRateLimitSchedule(
    args: DescribeBandwidthRateLimitScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBandwidthRateLimitScheduleCommandOutput>;
  public describeBandwidthRateLimitSchedule(
    args: DescribeBandwidthRateLimitScheduleCommandInput,
    cb: (err: any, data?: DescribeBandwidthRateLimitScheduleCommandOutput) => void
  ): void;
  public describeBandwidthRateLimitSchedule(
    args: DescribeBandwidthRateLimitScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBandwidthRateLimitScheduleCommandOutput) => void
  ): void;
  public describeBandwidthRateLimitSchedule(
    args: DescribeBandwidthRateLimitScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeBandwidthRateLimitScheduleCommandOutput) => void),
    cb?: (err: any, data?: DescribeBandwidthRateLimitScheduleCommandOutput) => void
  ): Promise<DescribeBandwidthRateLimitScheduleCommandOutput> | void {
    const command = new DescribeBandwidthRateLimitScheduleCommand(args);
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
   * <p>Returns information about the cache of a gateway. This operation is only supported in
   *          the cached volume, tape, and file gateway types.</p>
   *
   *          <p>The response includes disk IDs that are configured as cache, and it includes the amount
   *          of cache allocated and used.</p>
   */
  public describeCache(
    args: DescribeCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCacheCommandOutput>;
  public describeCache(
    args: DescribeCacheCommandInput,
    cb: (err: any, data?: DescribeCacheCommandOutput) => void
  ): void;
  public describeCache(
    args: DescribeCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCacheCommandOutput) => void
  ): void;
  public describeCache(
    args: DescribeCacheCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCacheCommandOutput) => void),
    cb?: (err: any, data?: DescribeCacheCommandOutput) => void
  ): Promise<DescribeCacheCommandOutput> | void {
    const command = new DescribeCacheCommand(args);
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
   * <p>Returns a description of the gateway volumes specified in the request. This operation is
   *          only supported in the cached volume gateway types.</p>
   *
   *          <p>The list of gateway volumes in the request must be from one gateway. In the response,
   *             Storage Gateway returns volume information sorted by volume Amazon Resource Name
   *          (ARN).</p>
   */
  public describeCachediSCSIVolumes(
    args: DescribeCachediSCSIVolumesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCachediSCSIVolumesCommandOutput>;
  public describeCachediSCSIVolumes(
    args: DescribeCachediSCSIVolumesCommandInput,
    cb: (err: any, data?: DescribeCachediSCSIVolumesCommandOutput) => void
  ): void;
  public describeCachediSCSIVolumes(
    args: DescribeCachediSCSIVolumesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCachediSCSIVolumesCommandOutput) => void
  ): void;
  public describeCachediSCSIVolumes(
    args: DescribeCachediSCSIVolumesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCachediSCSIVolumesCommandOutput) => void),
    cb?: (err: any, data?: DescribeCachediSCSIVolumesCommandOutput) => void
  ): Promise<DescribeCachediSCSIVolumesCommandOutput> | void {
    const command = new DescribeCachediSCSIVolumesCommand(args);
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
   * <p>Returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials
   *          information for a specified iSCSI target, one for each target-initiator pair. This
   *          operation is supported in the volume and tape gateway types.</p>
   */
  public describeChapCredentials(
    args: DescribeChapCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChapCredentialsCommandOutput>;
  public describeChapCredentials(
    args: DescribeChapCredentialsCommandInput,
    cb: (err: any, data?: DescribeChapCredentialsCommandOutput) => void
  ): void;
  public describeChapCredentials(
    args: DescribeChapCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChapCredentialsCommandOutput) => void
  ): void;
  public describeChapCredentials(
    args: DescribeChapCredentialsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeChapCredentialsCommandOutput) => void),
    cb?: (err: any, data?: DescribeChapCredentialsCommandOutput) => void
  ): Promise<DescribeChapCredentialsCommandOutput> | void {
    const command = new DescribeChapCredentialsCommand(args);
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
   * <p>Gets the file system association information. This operation is only supported for FSx
   *          File Gateways.</p>
   */
  public describeFileSystemAssociations(
    args: DescribeFileSystemAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFileSystemAssociationsCommandOutput>;
  public describeFileSystemAssociations(
    args: DescribeFileSystemAssociationsCommandInput,
    cb: (err: any, data?: DescribeFileSystemAssociationsCommandOutput) => void
  ): void;
  public describeFileSystemAssociations(
    args: DescribeFileSystemAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFileSystemAssociationsCommandOutput) => void
  ): void;
  public describeFileSystemAssociations(
    args: DescribeFileSystemAssociationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFileSystemAssociationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeFileSystemAssociationsCommandOutput) => void
  ): Promise<DescribeFileSystemAssociationsCommandOutput> | void {
    const command = new DescribeFileSystemAssociationsCommand(args);
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
   * <p>Returns metadata about a gateway such as its name, network interfaces, configured time
   *          zone, and the state (whether the gateway is running or not). To specify which gateway to
   *          describe, use the Amazon Resource Name (ARN) of the gateway in your request.</p>
   */
  public describeGatewayInformation(
    args: DescribeGatewayInformationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGatewayInformationCommandOutput>;
  public describeGatewayInformation(
    args: DescribeGatewayInformationCommandInput,
    cb: (err: any, data?: DescribeGatewayInformationCommandOutput) => void
  ): void;
  public describeGatewayInformation(
    args: DescribeGatewayInformationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGatewayInformationCommandOutput) => void
  ): void;
  public describeGatewayInformation(
    args: DescribeGatewayInformationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeGatewayInformationCommandOutput) => void),
    cb?: (err: any, data?: DescribeGatewayInformationCommandOutput) => void
  ): Promise<DescribeGatewayInformationCommandOutput> | void {
    const command = new DescribeGatewayInformationCommand(args);
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
   * <p>Returns your gateway's weekly maintenance start time including the day and time of
   *          the week. Note that values are in terms of the gateway's time zone.</p>
   */
  public describeMaintenanceStartTime(
    args: DescribeMaintenanceStartTimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMaintenanceStartTimeCommandOutput>;
  public describeMaintenanceStartTime(
    args: DescribeMaintenanceStartTimeCommandInput,
    cb: (err: any, data?: DescribeMaintenanceStartTimeCommandOutput) => void
  ): void;
  public describeMaintenanceStartTime(
    args: DescribeMaintenanceStartTimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMaintenanceStartTimeCommandOutput) => void
  ): void;
  public describeMaintenanceStartTime(
    args: DescribeMaintenanceStartTimeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeMaintenanceStartTimeCommandOutput) => void),
    cb?: (err: any, data?: DescribeMaintenanceStartTimeCommandOutput) => void
  ): Promise<DescribeMaintenanceStartTimeCommandOutput> | void {
    const command = new DescribeMaintenanceStartTimeCommand(args);
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
   * <p>Gets a description for one or more Network File System (NFS) file shares from an S3 File
   *          Gateway. This operation is only supported for S3 File Gateways.</p>
   */
  public describeNFSFileShares(
    args: DescribeNFSFileSharesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNFSFileSharesCommandOutput>;
  public describeNFSFileShares(
    args: DescribeNFSFileSharesCommandInput,
    cb: (err: any, data?: DescribeNFSFileSharesCommandOutput) => void
  ): void;
  public describeNFSFileShares(
    args: DescribeNFSFileSharesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNFSFileSharesCommandOutput) => void
  ): void;
  public describeNFSFileShares(
    args: DescribeNFSFileSharesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeNFSFileSharesCommandOutput) => void),
    cb?: (err: any, data?: DescribeNFSFileSharesCommandOutput) => void
  ): Promise<DescribeNFSFileSharesCommandOutput> | void {
    const command = new DescribeNFSFileSharesCommand(args);
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
   * <p>Gets a description for one or more Server Message Block (SMB) file shares from a S3 File
   *          Gateway. This operation is only supported for S3 File Gateways.</p>
   */
  public describeSMBFileShares(
    args: DescribeSMBFileSharesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSMBFileSharesCommandOutput>;
  public describeSMBFileShares(
    args: DescribeSMBFileSharesCommandInput,
    cb: (err: any, data?: DescribeSMBFileSharesCommandOutput) => void
  ): void;
  public describeSMBFileShares(
    args: DescribeSMBFileSharesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSMBFileSharesCommandOutput) => void
  ): void;
  public describeSMBFileShares(
    args: DescribeSMBFileSharesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSMBFileSharesCommandOutput) => void),
    cb?: (err: any, data?: DescribeSMBFileSharesCommandOutput) => void
  ): Promise<DescribeSMBFileSharesCommandOutput> | void {
    const command = new DescribeSMBFileSharesCommand(args);
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
   * <p>Gets a description of a Server Message Block (SMB) file share settings from a file
   *          gateway. This operation is only supported for file gateways.</p>
   */
  public describeSMBSettings(
    args: DescribeSMBSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSMBSettingsCommandOutput>;
  public describeSMBSettings(
    args: DescribeSMBSettingsCommandInput,
    cb: (err: any, data?: DescribeSMBSettingsCommandOutput) => void
  ): void;
  public describeSMBSettings(
    args: DescribeSMBSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSMBSettingsCommandOutput) => void
  ): void;
  public describeSMBSettings(
    args: DescribeSMBSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSMBSettingsCommandOutput) => void),
    cb?: (err: any, data?: DescribeSMBSettingsCommandOutput) => void
  ): Promise<DescribeSMBSettingsCommandOutput> | void {
    const command = new DescribeSMBSettingsCommand(args);
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
   * <p>Describes the snapshot schedule for the specified gateway volume. The snapshot schedule
   *          information includes intervals at which snapshots are automatically initiated on the
   *          volume. This operation is only supported in the cached volume and stored volume
   *          types.</p>
   */
  public describeSnapshotSchedule(
    args: DescribeSnapshotScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSnapshotScheduleCommandOutput>;
  public describeSnapshotSchedule(
    args: DescribeSnapshotScheduleCommandInput,
    cb: (err: any, data?: DescribeSnapshotScheduleCommandOutput) => void
  ): void;
  public describeSnapshotSchedule(
    args: DescribeSnapshotScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSnapshotScheduleCommandOutput) => void
  ): void;
  public describeSnapshotSchedule(
    args: DescribeSnapshotScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSnapshotScheduleCommandOutput) => void),
    cb?: (err: any, data?: DescribeSnapshotScheduleCommandOutput) => void
  ): Promise<DescribeSnapshotScheduleCommandOutput> | void {
    const command = new DescribeSnapshotScheduleCommand(args);
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
   * <p>Returns the description of the gateway volumes specified in the request. The list of
   *          gateway volumes in the request must be from one gateway. In the response, Storage Gateway returns volume information sorted by volume ARNs. This operation is only
   *          supported in stored volume gateway type.</p>
   */
  public describeStorediSCSIVolumes(
    args: DescribeStorediSCSIVolumesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStorediSCSIVolumesCommandOutput>;
  public describeStorediSCSIVolumes(
    args: DescribeStorediSCSIVolumesCommandInput,
    cb: (err: any, data?: DescribeStorediSCSIVolumesCommandOutput) => void
  ): void;
  public describeStorediSCSIVolumes(
    args: DescribeStorediSCSIVolumesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStorediSCSIVolumesCommandOutput) => void
  ): void;
  public describeStorediSCSIVolumes(
    args: DescribeStorediSCSIVolumesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeStorediSCSIVolumesCommandOutput) => void),
    cb?: (err: any, data?: DescribeStorediSCSIVolumesCommandOutput) => void
  ): Promise<DescribeStorediSCSIVolumesCommandOutput> | void {
    const command = new DescribeStorediSCSIVolumesCommand(args);
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
   * <p>Returns a description of specified virtual tapes in the virtual tape shelf (VTS). This
   *          operation is only supported in the tape gateway type.</p>
   *
   *          <p>If a specific <code>TapeARN</code> is not specified, Storage Gateway returns a
   *          description of all virtual tapes found in the VTS associated with your account.</p>
   */
  public describeTapeArchives(
    args: DescribeTapeArchivesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTapeArchivesCommandOutput>;
  public describeTapeArchives(
    args: DescribeTapeArchivesCommandInput,
    cb: (err: any, data?: DescribeTapeArchivesCommandOutput) => void
  ): void;
  public describeTapeArchives(
    args: DescribeTapeArchivesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTapeArchivesCommandOutput) => void
  ): void;
  public describeTapeArchives(
    args: DescribeTapeArchivesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTapeArchivesCommandOutput) => void),
    cb?: (err: any, data?: DescribeTapeArchivesCommandOutput) => void
  ): Promise<DescribeTapeArchivesCommandOutput> | void {
    const command = new DescribeTapeArchivesCommand(args);
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
   * <p>Returns a list of virtual tape recovery points that are available for the specified tape
   *          gateway.</p>
   *
   *          <p>A recovery point is a point-in-time view of a virtual tape at which all the data on the
   *          virtual tape is consistent. If your gateway crashes, virtual tapes that have recovery
   *          points can be recovered to a new gateway. This operation is only supported in the tape
   *          gateway type.</p>
   */
  public describeTapeRecoveryPoints(
    args: DescribeTapeRecoveryPointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTapeRecoveryPointsCommandOutput>;
  public describeTapeRecoveryPoints(
    args: DescribeTapeRecoveryPointsCommandInput,
    cb: (err: any, data?: DescribeTapeRecoveryPointsCommandOutput) => void
  ): void;
  public describeTapeRecoveryPoints(
    args: DescribeTapeRecoveryPointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTapeRecoveryPointsCommandOutput) => void
  ): void;
  public describeTapeRecoveryPoints(
    args: DescribeTapeRecoveryPointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTapeRecoveryPointsCommandOutput) => void),
    cb?: (err: any, data?: DescribeTapeRecoveryPointsCommandOutput) => void
  ): Promise<DescribeTapeRecoveryPointsCommandOutput> | void {
    const command = new DescribeTapeRecoveryPointsCommand(args);
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
   * <p>Returns a description of the specified Amazon Resource Name (ARN) of virtual tapes. If a
   *             <code>TapeARN</code> is not specified, returns a description of all virtual tapes
   *          associated with the specified gateway. This operation is only supported in the tape gateway
   *          type.</p>
   */
  public describeTapes(
    args: DescribeTapesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTapesCommandOutput>;
  public describeTapes(
    args: DescribeTapesCommandInput,
    cb: (err: any, data?: DescribeTapesCommandOutput) => void
  ): void;
  public describeTapes(
    args: DescribeTapesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTapesCommandOutput) => void
  ): void;
  public describeTapes(
    args: DescribeTapesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTapesCommandOutput) => void),
    cb?: (err: any, data?: DescribeTapesCommandOutput) => void
  ): Promise<DescribeTapesCommandOutput> | void {
    const command = new DescribeTapesCommand(args);
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
   * <p>Returns information about the upload buffer of a gateway. This operation is supported
   *          for the stored volume, cached volume, and tape gateway types.</p>
   *
   *          <p>The response includes disk IDs that are configured as upload buffer space, and it
   *          includes the amount of upload buffer space allocated and used.</p>
   */
  public describeUploadBuffer(
    args: DescribeUploadBufferCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUploadBufferCommandOutput>;
  public describeUploadBuffer(
    args: DescribeUploadBufferCommandInput,
    cb: (err: any, data?: DescribeUploadBufferCommandOutput) => void
  ): void;
  public describeUploadBuffer(
    args: DescribeUploadBufferCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUploadBufferCommandOutput) => void
  ): void;
  public describeUploadBuffer(
    args: DescribeUploadBufferCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeUploadBufferCommandOutput) => void),
    cb?: (err: any, data?: DescribeUploadBufferCommandOutput) => void
  ): Promise<DescribeUploadBufferCommandOutput> | void {
    const command = new DescribeUploadBufferCommand(args);
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
   * <p>Returns a description of virtual tape library (VTL) devices for the specified tape
   *          gateway. In the response, Storage Gateway returns VTL device information.</p>
   *
   *          <p>This operation is only supported in the tape gateway type.</p>
   */
  public describeVTLDevices(
    args: DescribeVTLDevicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVTLDevicesCommandOutput>;
  public describeVTLDevices(
    args: DescribeVTLDevicesCommandInput,
    cb: (err: any, data?: DescribeVTLDevicesCommandOutput) => void
  ): void;
  public describeVTLDevices(
    args: DescribeVTLDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVTLDevicesCommandOutput) => void
  ): void;
  public describeVTLDevices(
    args: DescribeVTLDevicesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVTLDevicesCommandOutput) => void),
    cb?: (err: any, data?: DescribeVTLDevicesCommandOutput) => void
  ): Promise<DescribeVTLDevicesCommandOutput> | void {
    const command = new DescribeVTLDevicesCommand(args);
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
   * <p>Returns information about the working storage of a gateway. This operation is only
   *          supported in the stored volumes gateway type. This operation is deprecated in cached
   *          volumes API version (20120630). Use DescribeUploadBuffer instead.</p>
   *
   *          <note>
   *             <p>Working storage is also referred to as upload buffer. You can also use the
   *             DescribeUploadBuffer operation to add upload buffer to a stored volume gateway.</p>
   *          </note>
   *
   *          <p>The response includes disk IDs that are configured as working storage, and it includes
   *          the amount of working storage allocated and used.</p>
   */
  public describeWorkingStorage(
    args: DescribeWorkingStorageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkingStorageCommandOutput>;
  public describeWorkingStorage(
    args: DescribeWorkingStorageCommandInput,
    cb: (err: any, data?: DescribeWorkingStorageCommandOutput) => void
  ): void;
  public describeWorkingStorage(
    args: DescribeWorkingStorageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkingStorageCommandOutput) => void
  ): void;
  public describeWorkingStorage(
    args: DescribeWorkingStorageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeWorkingStorageCommandOutput) => void),
    cb?: (err: any, data?: DescribeWorkingStorageCommandOutput) => void
  ): Promise<DescribeWorkingStorageCommandOutput> | void {
    const command = new DescribeWorkingStorageCommand(args);
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
   * <p>Disconnects a volume from an iSCSI connection and then detaches the volume from the
   *          specified gateway. Detaching and attaching a volume enables you to recover your data from
   *          one gateway to a different gateway without creating a snapshot. It also makes it easier to
   *          move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2
   *          instance. This operation is only supported in the volume gateway type.</p>
   */
  public detachVolume(
    args: DetachVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachVolumeCommandOutput>;
  public detachVolume(args: DetachVolumeCommandInput, cb: (err: any, data?: DetachVolumeCommandOutput) => void): void;
  public detachVolume(
    args: DetachVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachVolumeCommandOutput) => void
  ): void;
  public detachVolume(
    args: DetachVolumeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetachVolumeCommandOutput) => void),
    cb?: (err: any, data?: DetachVolumeCommandOutput) => void
  ): Promise<DetachVolumeCommandOutput> | void {
    const command = new DetachVolumeCommand(args);
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
   * <p>Disables a tape gateway when the gateway is no longer functioning. For example, if your
   *          gateway VM is damaged, you can disable the gateway so you can recover virtual tapes.</p>
   *
   *          <p>Use this operation for a tape gateway that is not reachable or not functioning. This
   *          operation is only supported in the tape gateway type.</p>
   *
   *          <important>
   *             <p>After a gateway is disabled, it cannot be enabled.</p>
   *          </important>
   */
  public disableGateway(
    args: DisableGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableGatewayCommandOutput>;
  public disableGateway(
    args: DisableGatewayCommandInput,
    cb: (err: any, data?: DisableGatewayCommandOutput) => void
  ): void;
  public disableGateway(
    args: DisableGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableGatewayCommandOutput) => void
  ): void;
  public disableGateway(
    args: DisableGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableGatewayCommandOutput) => void),
    cb?: (err: any, data?: DisableGatewayCommandOutput) => void
  ): Promise<DisableGatewayCommandOutput> | void {
    const command = new DisableGatewayCommand(args);
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
   * <p>Disassociates an Amazon FSx file system from the specified gateway. After the
   *          disassociation process finishes, the gateway can no longer access the Amazon FSx
   *          file system. This operation is only supported in the FSx File Gateway type.</p>
   */
  public disassociateFileSystem(
    args: DisassociateFileSystemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateFileSystemCommandOutput>;
  public disassociateFileSystem(
    args: DisassociateFileSystemCommandInput,
    cb: (err: any, data?: DisassociateFileSystemCommandOutput) => void
  ): void;
  public disassociateFileSystem(
    args: DisassociateFileSystemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateFileSystemCommandOutput) => void
  ): void;
  public disassociateFileSystem(
    args: DisassociateFileSystemCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateFileSystemCommandOutput) => void),
    cb?: (err: any, data?: DisassociateFileSystemCommandOutput) => void
  ): Promise<DisassociateFileSystemCommandOutput> | void {
    const command = new DisassociateFileSystemCommand(args);
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
   * <p>Adds a file gateway to an Active Directory domain. This operation is only supported for
   *          file gateways that support the SMB file protocol.</p>
   */
  public joinDomain(args: JoinDomainCommandInput, options?: __HttpHandlerOptions): Promise<JoinDomainCommandOutput>;
  public joinDomain(args: JoinDomainCommandInput, cb: (err: any, data?: JoinDomainCommandOutput) => void): void;
  public joinDomain(
    args: JoinDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JoinDomainCommandOutput) => void
  ): void;
  public joinDomain(
    args: JoinDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: JoinDomainCommandOutput) => void),
    cb?: (err: any, data?: JoinDomainCommandOutput) => void
  ): Promise<JoinDomainCommandOutput> | void {
    const command = new JoinDomainCommand(args);
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
   * <p>Lists the automatic tape creation policies for a gateway. If there are no automatic tape
   *          creation policies for the gateway, it returns an empty list.</p>
   *
   *          <p>This operation is only supported for tape gateways.</p>
   */
  public listAutomaticTapeCreationPolicies(
    args: ListAutomaticTapeCreationPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAutomaticTapeCreationPoliciesCommandOutput>;
  public listAutomaticTapeCreationPolicies(
    args: ListAutomaticTapeCreationPoliciesCommandInput,
    cb: (err: any, data?: ListAutomaticTapeCreationPoliciesCommandOutput) => void
  ): void;
  public listAutomaticTapeCreationPolicies(
    args: ListAutomaticTapeCreationPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAutomaticTapeCreationPoliciesCommandOutput) => void
  ): void;
  public listAutomaticTapeCreationPolicies(
    args: ListAutomaticTapeCreationPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAutomaticTapeCreationPoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListAutomaticTapeCreationPoliciesCommandOutput) => void
  ): Promise<ListAutomaticTapeCreationPoliciesCommandOutput> | void {
    const command = new ListAutomaticTapeCreationPoliciesCommand(args);
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
   * <p>Gets a list of the file shares for a specific S3 File Gateway, or the list of file
   *          shares that belong to the calling user account. This operation is only supported for S3
   *          File Gateways.</p>
   */
  public listFileShares(
    args: ListFileSharesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFileSharesCommandOutput>;
  public listFileShares(
    args: ListFileSharesCommandInput,
    cb: (err: any, data?: ListFileSharesCommandOutput) => void
  ): void;
  public listFileShares(
    args: ListFileSharesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFileSharesCommandOutput) => void
  ): void;
  public listFileShares(
    args: ListFileSharesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFileSharesCommandOutput) => void),
    cb?: (err: any, data?: ListFileSharesCommandOutput) => void
  ): Promise<ListFileSharesCommandOutput> | void {
    const command = new ListFileSharesCommand(args);
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
   * <p>Gets a list of <code>FileSystemAssociationSummary</code> objects. Each object contains a
   *          summary of a file system association. This operation is only supported for FSx File
   *          Gateways.</p>
   */
  public listFileSystemAssociations(
    args: ListFileSystemAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFileSystemAssociationsCommandOutput>;
  public listFileSystemAssociations(
    args: ListFileSystemAssociationsCommandInput,
    cb: (err: any, data?: ListFileSystemAssociationsCommandOutput) => void
  ): void;
  public listFileSystemAssociations(
    args: ListFileSystemAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFileSystemAssociationsCommandOutput) => void
  ): void;
  public listFileSystemAssociations(
    args: ListFileSystemAssociationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFileSystemAssociationsCommandOutput) => void),
    cb?: (err: any, data?: ListFileSystemAssociationsCommandOutput) => void
  ): Promise<ListFileSystemAssociationsCommandOutput> | void {
    const command = new ListFileSystemAssociationsCommand(args);
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
   * <p>Lists gateways owned by an Amazon Web Services account in an Amazon Web Services Region
   *          specified in the request. The returned list is ordered by gateway Amazon Resource Name
   *          (ARN).</p>
   *
   *          <p>By default, the operation returns a maximum of 100 gateways. This operation supports
   *          pagination that allows you to optionally reduce the number of gateways returned in a
   *          response.</p>
   *
   *          <p>If you have more gateways than are returned in a response (that is, the response returns
   *          only a truncated list of your gateways), the response contains a marker that you can
   *          specify in your next request to fetch the next page of gateways.</p>
   */
  public listGateways(
    args: ListGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGatewaysCommandOutput>;
  public listGateways(args: ListGatewaysCommandInput, cb: (err: any, data?: ListGatewaysCommandOutput) => void): void;
  public listGateways(
    args: ListGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGatewaysCommandOutput) => void
  ): void;
  public listGateways(
    args: ListGatewaysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGatewaysCommandOutput) => void),
    cb?: (err: any, data?: ListGatewaysCommandOutput) => void
  ): Promise<ListGatewaysCommandOutput> | void {
    const command = new ListGatewaysCommand(args);
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
   * <p>Returns a list of the gateway's local disks. To specify which gateway to describe,
   *          you use the Amazon Resource Name (ARN) of the gateway in the body of the request.</p>
   *
   *          <p>The request returns a list of all disks, specifying which are configured as working
   *          storage, cache storage, or stored volume or not configured at all. The response includes a
   *             <code>DiskStatus</code> field. This field can have a value of present (the disk is
   *          available to use), missing (the disk is no longer connected to the gateway), or mismatch
   *          (the disk node is occupied by a disk that has incorrect metadata or the disk content is
   *          corrupted).</p>
   */
  public listLocalDisks(
    args: ListLocalDisksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLocalDisksCommandOutput>;
  public listLocalDisks(
    args: ListLocalDisksCommandInput,
    cb: (err: any, data?: ListLocalDisksCommandOutput) => void
  ): void;
  public listLocalDisks(
    args: ListLocalDisksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLocalDisksCommandOutput) => void
  ): void;
  public listLocalDisks(
    args: ListLocalDisksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLocalDisksCommandOutput) => void),
    cb?: (err: any, data?: ListLocalDisksCommandOutput) => void
  ): Promise<ListLocalDisksCommandOutput> | void {
    const command = new ListLocalDisksCommand(args);
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
   * <p>Lists the tags that have been added to the specified resource. This operation is
   *          supported in storage gateways of all types.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
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
   * <p>Lists custom tape pools. You specify custom tape pools to list by specifying one or more
   *          custom tape pool Amazon Resource Names (ARNs). If you don't specify a custom tape pool ARN,
   *          the operation lists all custom tape pools.</p>
   *
   *          <p>This operation supports pagination. You can optionally specify the <code>Limit</code>
   *          parameter in the body to limit the number of tape pools in the response. If the number of
   *          tape pools returned in the response is truncated, the response includes a
   *             <code>Marker</code> element that you can use in your subsequent request to retrieve the
   *          next set of tape pools.</p>
   */
  public listTapePools(
    args: ListTapePoolsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTapePoolsCommandOutput>;
  public listTapePools(
    args: ListTapePoolsCommandInput,
    cb: (err: any, data?: ListTapePoolsCommandOutput) => void
  ): void;
  public listTapePools(
    args: ListTapePoolsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTapePoolsCommandOutput) => void
  ): void;
  public listTapePools(
    args: ListTapePoolsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTapePoolsCommandOutput) => void),
    cb?: (err: any, data?: ListTapePoolsCommandOutput) => void
  ): Promise<ListTapePoolsCommandOutput> | void {
    const command = new ListTapePoolsCommand(args);
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
   * <p>Lists virtual tapes in your virtual tape library (VTL) and your virtual tape shelf
   *          (VTS). You specify the tapes to list by specifying one or more tape Amazon Resource Names
   *          (ARNs). If you don't specify a tape ARN, the operation lists all virtual tapes in both
   *          your VTL and VTS.</p>
   *
   *          <p>This operation supports pagination. By default, the operation returns a maximum of up to
   *          100 tapes. You can optionally specify the <code>Limit</code> parameter in the body to limit
   *          the number of tapes in the response. If the number of tapes returned in the response is
   *          truncated, the response includes a <code>Marker</code> element that you can use in your
   *          subsequent request to retrieve the next set of tapes. This operation is only supported in
   *          the tape gateway type.</p>
   */
  public listTapes(args: ListTapesCommandInput, options?: __HttpHandlerOptions): Promise<ListTapesCommandOutput>;
  public listTapes(args: ListTapesCommandInput, cb: (err: any, data?: ListTapesCommandOutput) => void): void;
  public listTapes(
    args: ListTapesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTapesCommandOutput) => void
  ): void;
  public listTapes(
    args: ListTapesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTapesCommandOutput) => void),
    cb?: (err: any, data?: ListTapesCommandOutput) => void
  ): Promise<ListTapesCommandOutput> | void {
    const command = new ListTapesCommand(args);
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
   * <p>Lists iSCSI initiators that are connected to a volume. You can use this operation to
   *          determine whether a volume is being used or not. This operation is only supported in the
   *          cached volume and stored volume gateway types.</p>
   */
  public listVolumeInitiators(
    args: ListVolumeInitiatorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVolumeInitiatorsCommandOutput>;
  public listVolumeInitiators(
    args: ListVolumeInitiatorsCommandInput,
    cb: (err: any, data?: ListVolumeInitiatorsCommandOutput) => void
  ): void;
  public listVolumeInitiators(
    args: ListVolumeInitiatorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVolumeInitiatorsCommandOutput) => void
  ): void;
  public listVolumeInitiators(
    args: ListVolumeInitiatorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVolumeInitiatorsCommandOutput) => void),
    cb?: (err: any, data?: ListVolumeInitiatorsCommandOutput) => void
  ): Promise<ListVolumeInitiatorsCommandOutput> | void {
    const command = new ListVolumeInitiatorsCommand(args);
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
   * <p>Lists the recovery points for a specified gateway. This operation is only supported in
   *          the cached volume gateway type.</p>
   *
   *          <p>Each cache volume has one recovery point. A volume recovery point is a point in time at
   *          which all data of the volume is consistent and from which you can create a snapshot or
   *          clone a new cached volume from a source volume. To create a snapshot from a volume recovery
   *          point use the <a>CreateSnapshotFromVolumeRecoveryPoint</a> operation.</p>
   */
  public listVolumeRecoveryPoints(
    args: ListVolumeRecoveryPointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVolumeRecoveryPointsCommandOutput>;
  public listVolumeRecoveryPoints(
    args: ListVolumeRecoveryPointsCommandInput,
    cb: (err: any, data?: ListVolumeRecoveryPointsCommandOutput) => void
  ): void;
  public listVolumeRecoveryPoints(
    args: ListVolumeRecoveryPointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVolumeRecoveryPointsCommandOutput) => void
  ): void;
  public listVolumeRecoveryPoints(
    args: ListVolumeRecoveryPointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVolumeRecoveryPointsCommandOutput) => void),
    cb?: (err: any, data?: ListVolumeRecoveryPointsCommandOutput) => void
  ): Promise<ListVolumeRecoveryPointsCommandOutput> | void {
    const command = new ListVolumeRecoveryPointsCommand(args);
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
   * <p>Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The
   *          response includes only the volume ARNs. If you want additional volume information, use the
   *             <a>DescribeStorediSCSIVolumes</a> or the <a>DescribeCachediSCSIVolumes</a> API.</p>
   *
   *          <p>The operation supports pagination. By default, the operation returns a maximum of up to
   *          100 volumes. You can optionally specify the <code>Limit</code> field in the body to limit
   *          the number of volumes in the response. If the number of volumes returned in the response is
   *          truncated, the response includes a Marker field. You can use this Marker value in your
   *          subsequent request to retrieve the next set of volumes. This operation is only supported in
   *          the cached volume and stored volume gateway types.</p>
   */
  public listVolumes(args: ListVolumesCommandInput, options?: __HttpHandlerOptions): Promise<ListVolumesCommandOutput>;
  public listVolumes(args: ListVolumesCommandInput, cb: (err: any, data?: ListVolumesCommandOutput) => void): void;
  public listVolumes(
    args: ListVolumesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVolumesCommandOutput) => void
  ): void;
  public listVolumes(
    args: ListVolumesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVolumesCommandOutput) => void),
    cb?: (err: any, data?: ListVolumesCommandOutput) => void
  ): Promise<ListVolumesCommandOutput> | void {
    const command = new ListVolumesCommand(args);
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
   * <p>Sends you notification through CloudWatch Events when all files written to your file
   *          share have been uploaded to S3. Amazon S3.</p>
   *
   *          <p>Storage Gateway can send a notification through Amazon CloudWatch Events when all
   *          files written to your file share up to that point in time have been uploaded to Amazon S3. These files include files written to the file share up to the time that you
   *          make a request for notification. When the upload is done, Storage Gateway sends you
   *          notification through an Amazon CloudWatch Event. You can configure CloudWatch Events to
   *          send the notification through event targets such as Amazon SNS or Lambda function. This operation is only supported for S3 File Gateways.</p>
   *
   *
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-upload-notification">Getting file upload notification</a> in the <i>Storage Gateway User
   *             Guide</i>.</p>
   */
  public notifyWhenUploaded(
    args: NotifyWhenUploadedCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NotifyWhenUploadedCommandOutput>;
  public notifyWhenUploaded(
    args: NotifyWhenUploadedCommandInput,
    cb: (err: any, data?: NotifyWhenUploadedCommandOutput) => void
  ): void;
  public notifyWhenUploaded(
    args: NotifyWhenUploadedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NotifyWhenUploadedCommandOutput) => void
  ): void;
  public notifyWhenUploaded(
    args: NotifyWhenUploadedCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: NotifyWhenUploadedCommandOutput) => void),
    cb?: (err: any, data?: NotifyWhenUploadedCommandOutput) => void
  ): Promise<NotifyWhenUploadedCommandOutput> | void {
    const command = new NotifyWhenUploadedCommand(args);
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
   * <p>Refreshes the cached inventory of objects for the specified file share. This operation
   *          finds objects in the Amazon S3 bucket that were added, removed, or replaced since
   *          the gateway last listed the bucket's contents and cached the results. This operation
   *          does not import files into the S3 File Gateway cache storage. It only updates the cached
   *          inventory to reflect changes in the inventory of the objects in the S3 bucket. This
   *          operation is only supported in the S3 File Gateway types.</p>
   *
   *          <p>You can subscribe to be notified through an Amazon CloudWatch event when your
   *             <code>RefreshCache</code> operation completes. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-notification">Getting notified about file operations</a> in the <i>Storage Gateway
   *             User Guide</i>. This operation is Only supported for S3 File Gateways.</p>
   *
   *          <p>When this API is called, it only initiates the refresh operation. When the API call
   *          completes and returns a success code, it doesn't necessarily mean that the file
   *          refresh has completed. You should use the refresh-complete notification to determine that
   *          the operation has completed before you check for new files on the gateway file share. You
   *          can subscribe to be notified through a CloudWatch event when your <code>RefreshCache</code>
   *          operation completes.</p>
   *
   *          <p>Throttle limit: This API is asynchronous, so the gateway will accept no more than two
   *          refreshes at any time. We recommend using the refresh-complete CloudWatch event
   *          notification before issuing additional requests. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-notification">Getting notified about file operations</a> in the <i>Storage Gateway
   *             User Guide</i>.</p>
   *
   *          <important>
   *             <ul>
   *                <li>
   *                   <p>Wait at least 60 seconds between consecutive RefreshCache API requests.</p>
   *                </li>
   *                <li>
   *                   <p>RefreshCache does not evict cache entries if invoked consecutively within 60
   *                   seconds of a previous RefreshCache request.</p>
   *                </li>
   *                <li>
   *                   <p>If you invoke the RefreshCache API when two requests are already being
   *                   processed, any new request will cause an
   *                      <code>InvalidGatewayRequestException</code> error because too many requests
   *                   were sent to the server.</p>
   *                </li>
   *             </ul>
   *          </important>
   *
   *          <note>
   *             <p>The S3 bucket name does not need to be included when entering the list of folders in
   *             the FolderList parameter.</p>
   *          </note>
   *
   *
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-notification">Getting notified about file operations</a> in the <i>Storage Gateway
   *             User Guide</i>.</p>
   */
  public refreshCache(
    args: RefreshCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RefreshCacheCommandOutput>;
  public refreshCache(args: RefreshCacheCommandInput, cb: (err: any, data?: RefreshCacheCommandOutput) => void): void;
  public refreshCache(
    args: RefreshCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RefreshCacheCommandOutput) => void
  ): void;
  public refreshCache(
    args: RefreshCacheCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RefreshCacheCommandOutput) => void),
    cb?: (err: any, data?: RefreshCacheCommandOutput) => void
  ): Promise<RefreshCacheCommandOutput> | void {
    const command = new RefreshCacheCommand(args);
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
   * <p>Removes one or more tags from the specified resource. This operation is supported in
   *          storage gateways of all types.</p>
   */
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveTagsFromResourceCommandOutput>;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveTagsFromResourceCommandOutput) => void),
    cb?: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): Promise<RemoveTagsFromResourceCommandOutput> | void {
    const command = new RemoveTagsFromResourceCommand(args);
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
   * <p>Resets all cache disks that have encountered an error and makes the disks available for
   *          reconfiguration as cache storage. If your cache disk encounters an error, the gateway
   *          prevents read and write operations on virtual tapes in the gateway. For example, an error
   *          can occur when a disk is corrupted or removed from the gateway. When a cache is reset, the
   *          gateway loses its cache storage. At this point, you can reconfigure the disks as cache
   *          disks. This operation is only supported in the cached volume and tape types.</p>
   *
   *          <important>
   *             <p>If the cache disk you are resetting contains data that has not been uploaded to
   *                Amazon S3 yet, that data can be lost. After you reset cache disks, there will
   *             be no configured cache disks left in the gateway, so you must configure at least one new
   *             cache disk for your gateway to function properly.</p>
   *          </important>
   */
  public resetCache(args: ResetCacheCommandInput, options?: __HttpHandlerOptions): Promise<ResetCacheCommandOutput>;
  public resetCache(args: ResetCacheCommandInput, cb: (err: any, data?: ResetCacheCommandOutput) => void): void;
  public resetCache(
    args: ResetCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetCacheCommandOutput) => void
  ): void;
  public resetCache(
    args: ResetCacheCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResetCacheCommandOutput) => void),
    cb?: (err: any, data?: ResetCacheCommandOutput) => void
  ): Promise<ResetCacheCommandOutput> | void {
    const command = new ResetCacheCommand(args);
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
   * <p>Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway.
   *          Virtual tapes archived in the VTS are not associated with any gateway. However after a tape
   *          is retrieved, it is associated with a gateway, even though it is also listed in the VTS,
   *          that is, archive. This operation is only supported in the tape gateway type.</p>
   *
   *          <p>Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to
   *          another gateway. You must archive the tape again before you can retrieve it to another
   *          gateway. This operation is only supported in the tape gateway type.</p>
   */
  public retrieveTapeArchive(
    args: RetrieveTapeArchiveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RetrieveTapeArchiveCommandOutput>;
  public retrieveTapeArchive(
    args: RetrieveTapeArchiveCommandInput,
    cb: (err: any, data?: RetrieveTapeArchiveCommandOutput) => void
  ): void;
  public retrieveTapeArchive(
    args: RetrieveTapeArchiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RetrieveTapeArchiveCommandOutput) => void
  ): void;
  public retrieveTapeArchive(
    args: RetrieveTapeArchiveCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RetrieveTapeArchiveCommandOutput) => void),
    cb?: (err: any, data?: RetrieveTapeArchiveCommandOutput) => void
  ): Promise<RetrieveTapeArchiveCommandOutput> | void {
    const command = new RetrieveTapeArchiveCommand(args);
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
   * <p>Retrieves the recovery point for the specified virtual tape. This operation is only
   *          supported in the tape gateway type.</p>
   *
   *          <p>A recovery point is a point in time view of a virtual tape at which all the data on the
   *          tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be
   *          recovered to a new gateway.</p>
   *
   *          <note>
   *             <p>The virtual tape can be retrieved to only one gateway. The retrieved tape is
   *             read-only. The virtual tape can be retrieved to only a tape gateway. There is no charge
   *             for retrieving recovery points.</p>
   *          </note>
   */
  public retrieveTapeRecoveryPoint(
    args: RetrieveTapeRecoveryPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RetrieveTapeRecoveryPointCommandOutput>;
  public retrieveTapeRecoveryPoint(
    args: RetrieveTapeRecoveryPointCommandInput,
    cb: (err: any, data?: RetrieveTapeRecoveryPointCommandOutput) => void
  ): void;
  public retrieveTapeRecoveryPoint(
    args: RetrieveTapeRecoveryPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RetrieveTapeRecoveryPointCommandOutput) => void
  ): void;
  public retrieveTapeRecoveryPoint(
    args: RetrieveTapeRecoveryPointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RetrieveTapeRecoveryPointCommandOutput) => void),
    cb?: (err: any, data?: RetrieveTapeRecoveryPointCommandOutput) => void
  ): Promise<RetrieveTapeRecoveryPointCommandOutput> | void {
    const command = new RetrieveTapeRecoveryPointCommand(args);
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
   * <p>Sets the password for your VM local console. When you log in to the local console for
   *          the first time, you log in to the VM with the default credentials. We recommend that you
   *          set a new password. You don't need to know the default password to set a new
   *          password.</p>
   */
  public setLocalConsolePassword(
    args: SetLocalConsolePasswordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetLocalConsolePasswordCommandOutput>;
  public setLocalConsolePassword(
    args: SetLocalConsolePasswordCommandInput,
    cb: (err: any, data?: SetLocalConsolePasswordCommandOutput) => void
  ): void;
  public setLocalConsolePassword(
    args: SetLocalConsolePasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetLocalConsolePasswordCommandOutput) => void
  ): void;
  public setLocalConsolePassword(
    args: SetLocalConsolePasswordCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetLocalConsolePasswordCommandOutput) => void),
    cb?: (err: any, data?: SetLocalConsolePasswordCommandOutput) => void
  ): Promise<SetLocalConsolePasswordCommandOutput> | void {
    const command = new SetLocalConsolePasswordCommand(args);
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
   * <p>Sets the password for the guest user <code>smbguest</code>. The <code>smbguest</code>
   *          user is the user when the authentication method for the file share is set to
   *             <code>GuestAccess</code>. This operation only supported for S3 File Gateways</p>
   */
  public setSMBGuestPassword(
    args: SetSMBGuestPasswordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetSMBGuestPasswordCommandOutput>;
  public setSMBGuestPassword(
    args: SetSMBGuestPasswordCommandInput,
    cb: (err: any, data?: SetSMBGuestPasswordCommandOutput) => void
  ): void;
  public setSMBGuestPassword(
    args: SetSMBGuestPasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetSMBGuestPasswordCommandOutput) => void
  ): void;
  public setSMBGuestPassword(
    args: SetSMBGuestPasswordCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetSMBGuestPasswordCommandOutput) => void),
    cb?: (err: any, data?: SetSMBGuestPasswordCommandOutput) => void
  ): Promise<SetSMBGuestPasswordCommandOutput> | void {
    const command = new SetSMBGuestPasswordCommand(args);
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
   * <p>Shuts down a gateway. To specify which gateway to shut down, use the Amazon Resource
   *          Name (ARN) of the gateway in the body of your request.</p>
   *
   *          <p>The operation shuts down the gateway service component running in the gateway's
   *          virtual machine (VM) and not the host VM.</p>
   *
   *          <note>
   *             <p>If you want to shut down the VM, it is recommended that you first shut down the
   *             gateway component in the VM to avoid unpredictable conditions.</p>
   *          </note>
   *
   *          <p>After the gateway is shutdown, you cannot call any other API except <a>StartGateway</a>, <a>DescribeGatewayInformation</a>, and <a>ListGateways</a>. For more information, see <a>ActivateGateway</a>.
   *          Your applications cannot read from or write to the gateway's storage volumes, and
   *          there are no snapshots taken.</p>
   *
   *          <note>
   *             <p>When you make a shutdown request, you will get a <code>200 OK</code> success response
   *             immediately. However, it might take some time for the gateway to shut down. You can call
   *             the <a>DescribeGatewayInformation</a> API to check the status. For more
   *             information, see <a>ActivateGateway</a>.</p>
   *          </note>
   *
   *          <p>If do not intend to use the gateway again, you must delete the gateway (using <a>DeleteGateway</a>) to no longer pay software charges associated with the
   *          gateway.</p>
   */
  public shutdownGateway(
    args: ShutdownGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ShutdownGatewayCommandOutput>;
  public shutdownGateway(
    args: ShutdownGatewayCommandInput,
    cb: (err: any, data?: ShutdownGatewayCommandOutput) => void
  ): void;
  public shutdownGateway(
    args: ShutdownGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ShutdownGatewayCommandOutput) => void
  ): void;
  public shutdownGateway(
    args: ShutdownGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ShutdownGatewayCommandOutput) => void),
    cb?: (err: any, data?: ShutdownGatewayCommandOutput) => void
  ): Promise<ShutdownGatewayCommandOutput> | void {
    const command = new ShutdownGatewayCommand(args);
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
   * <p>Start a test that verifies that the specified gateway is configured for High
   *          Availability monitoring in your host environment. This request only initiates the test and
   *          that a successful response only indicates that the test was started. It doesn't
   *          indicate that the test passed. For the status of the test, invoke the
   *             <code>DescribeAvailabilityMonitorTest</code> API.</p>
   *          <note>
   *             <p>Starting this test will cause your gateway to go offline for a brief period.</p>
   *          </note>
   */
  public startAvailabilityMonitorTest(
    args: StartAvailabilityMonitorTestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAvailabilityMonitorTestCommandOutput>;
  public startAvailabilityMonitorTest(
    args: StartAvailabilityMonitorTestCommandInput,
    cb: (err: any, data?: StartAvailabilityMonitorTestCommandOutput) => void
  ): void;
  public startAvailabilityMonitorTest(
    args: StartAvailabilityMonitorTestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAvailabilityMonitorTestCommandOutput) => void
  ): void;
  public startAvailabilityMonitorTest(
    args: StartAvailabilityMonitorTestCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartAvailabilityMonitorTestCommandOutput) => void),
    cb?: (err: any, data?: StartAvailabilityMonitorTestCommandOutput) => void
  ): Promise<StartAvailabilityMonitorTestCommandOutput> | void {
    const command = new StartAvailabilityMonitorTestCommand(args);
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
   * <p>Starts a gateway that you previously shut down (see <a>ShutdownGateway</a>).
   *          After the gateway starts, you can then make other API calls, your applications can read
   *          from or write to the gateway's storage volumes and you will be able to take snapshot
   *          backups.</p>
   *
   *          <note>
   *             <p>When you make a request, you will get a 200 OK success response immediately. However,
   *             it might take some time for the gateway to be ready. You should call <a>DescribeGatewayInformation</a> and check the status before making any
   *             additional API calls. For more information, see <a>ActivateGateway</a>.</p>
   *          </note>
   *
   *          <p>To specify which gateway to start, use the Amazon Resource Name (ARN) of the gateway in
   *          your request.</p>
   */
  public startGateway(
    args: StartGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartGatewayCommandOutput>;
  public startGateway(args: StartGatewayCommandInput, cb: (err: any, data?: StartGatewayCommandOutput) => void): void;
  public startGateway(
    args: StartGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartGatewayCommandOutput) => void
  ): void;
  public startGateway(
    args: StartGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartGatewayCommandOutput) => void),
    cb?: (err: any, data?: StartGatewayCommandOutput) => void
  ): Promise<StartGatewayCommandOutput> | void {
    const command = new StartGatewayCommand(args);
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
   * <p>Updates the automatic tape creation policy of a gateway. Use this to update the policy
   *          with a new set of automatic tape creation rules. This is only supported for tape
   *          gateways.</p>
   *
   *          <p>By default, there is no automatic tape creation policy.</p>
   *
   *          <note>
   *             <p>A gateway can have only one automatic tape creation policy.</p>
   *          </note>
   */
  public updateAutomaticTapeCreationPolicy(
    args: UpdateAutomaticTapeCreationPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAutomaticTapeCreationPolicyCommandOutput>;
  public updateAutomaticTapeCreationPolicy(
    args: UpdateAutomaticTapeCreationPolicyCommandInput,
    cb: (err: any, data?: UpdateAutomaticTapeCreationPolicyCommandOutput) => void
  ): void;
  public updateAutomaticTapeCreationPolicy(
    args: UpdateAutomaticTapeCreationPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAutomaticTapeCreationPolicyCommandOutput) => void
  ): void;
  public updateAutomaticTapeCreationPolicy(
    args: UpdateAutomaticTapeCreationPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAutomaticTapeCreationPolicyCommandOutput) => void),
    cb?: (err: any, data?: UpdateAutomaticTapeCreationPolicyCommandOutput) => void
  ): Promise<UpdateAutomaticTapeCreationPolicyCommandOutput> | void {
    const command = new UpdateAutomaticTapeCreationPolicyCommand(args);
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
   * <p>Updates the bandwidth rate limits of a gateway. You can update both the upload and
   *          download bandwidth rate limit or specify only one of the two. If you don't set a
   *          bandwidth rate limit, the existing rate limit remains. This operation is supported only for
   *          the stored volume, cached volume, and tape gateway types. To update bandwidth rate limits
   *          for S3 file gateways, use <a>UpdateBandwidthRateLimitSchedule</a>.</p>
   *
   *          <p>By default, a gateway's bandwidth rate limits are not set. If you don't set
   *          any limit, the gateway does not have any limitations on its bandwidth usage and could
   *          potentially use the maximum available bandwidth.</p>
   *
   *          <p>To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in
   *          your request.</p>
   */
  public updateBandwidthRateLimit(
    args: UpdateBandwidthRateLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBandwidthRateLimitCommandOutput>;
  public updateBandwidthRateLimit(
    args: UpdateBandwidthRateLimitCommandInput,
    cb: (err: any, data?: UpdateBandwidthRateLimitCommandOutput) => void
  ): void;
  public updateBandwidthRateLimit(
    args: UpdateBandwidthRateLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBandwidthRateLimitCommandOutput) => void
  ): void;
  public updateBandwidthRateLimit(
    args: UpdateBandwidthRateLimitCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBandwidthRateLimitCommandOutput) => void),
    cb?: (err: any, data?: UpdateBandwidthRateLimitCommandOutput) => void
  ): Promise<UpdateBandwidthRateLimitCommandOutput> | void {
    const command = new UpdateBandwidthRateLimitCommand(args);
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
   * <p> Updates the bandwidth rate limit schedule for a specified gateway. By default, gateways
   *          do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in
   *          effect. Use this to initiate or update a gateway's bandwidth rate limit schedule. This
   *          operation is supported only for volume, tape and S3 file gateways. FSx file gateways do not
   *          support bandwidth rate limits.</p>
   */
  public updateBandwidthRateLimitSchedule(
    args: UpdateBandwidthRateLimitScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBandwidthRateLimitScheduleCommandOutput>;
  public updateBandwidthRateLimitSchedule(
    args: UpdateBandwidthRateLimitScheduleCommandInput,
    cb: (err: any, data?: UpdateBandwidthRateLimitScheduleCommandOutput) => void
  ): void;
  public updateBandwidthRateLimitSchedule(
    args: UpdateBandwidthRateLimitScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBandwidthRateLimitScheduleCommandOutput) => void
  ): void;
  public updateBandwidthRateLimitSchedule(
    args: UpdateBandwidthRateLimitScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBandwidthRateLimitScheduleCommandOutput) => void),
    cb?: (err: any, data?: UpdateBandwidthRateLimitScheduleCommandOutput) => void
  ): Promise<UpdateBandwidthRateLimitScheduleCommandOutput> | void {
    const command = new UpdateBandwidthRateLimitScheduleCommand(args);
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
   * <p>Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a
   *          specified iSCSI target. By default, a gateway does not have CHAP enabled; however, for
   *          added security, you might use it. This operation is supported in the volume and tape
   *          gateway types.</p>
   *
   *          <important>
   *             <p>When you update CHAP credentials, all existing connections on the target are closed
   *             and initiators must reconnect with the new credentials.</p>
   *          </important>
   */
  public updateChapCredentials(
    args: UpdateChapCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChapCredentialsCommandOutput>;
  public updateChapCredentials(
    args: UpdateChapCredentialsCommandInput,
    cb: (err: any, data?: UpdateChapCredentialsCommandOutput) => void
  ): void;
  public updateChapCredentials(
    args: UpdateChapCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChapCredentialsCommandOutput) => void
  ): void;
  public updateChapCredentials(
    args: UpdateChapCredentialsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateChapCredentialsCommandOutput) => void),
    cb?: (err: any, data?: UpdateChapCredentialsCommandOutput) => void
  ): Promise<UpdateChapCredentialsCommandOutput> | void {
    const command = new UpdateChapCredentialsCommand(args);
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
   * <p>Updates a file system association. This operation is only supported in the FSx File
   *          Gateways.</p>
   */
  public updateFileSystemAssociation(
    args: UpdateFileSystemAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFileSystemAssociationCommandOutput>;
  public updateFileSystemAssociation(
    args: UpdateFileSystemAssociationCommandInput,
    cb: (err: any, data?: UpdateFileSystemAssociationCommandOutput) => void
  ): void;
  public updateFileSystemAssociation(
    args: UpdateFileSystemAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFileSystemAssociationCommandOutput) => void
  ): void;
  public updateFileSystemAssociation(
    args: UpdateFileSystemAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFileSystemAssociationCommandOutput) => void),
    cb?: (err: any, data?: UpdateFileSystemAssociationCommandOutput) => void
  ): Promise<UpdateFileSystemAssociationCommandOutput> | void {
    const command = new UpdateFileSystemAssociationCommand(args);
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
   * <p>Updates a gateway's metadata, which includes the gateway's name and time zone.
   *          To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in
   *          your request.</p>
   *
   *          <note>
   *             <p>For gateways activated after September 2, 2015, the gateway's ARN contains the
   *             gateway ID rather than the gateway name. However, changing the name of the gateway has
   *             no effect on the gateway's ARN.</p>
   *          </note>
   */
  public updateGatewayInformation(
    args: UpdateGatewayInformationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGatewayInformationCommandOutput>;
  public updateGatewayInformation(
    args: UpdateGatewayInformationCommandInput,
    cb: (err: any, data?: UpdateGatewayInformationCommandOutput) => void
  ): void;
  public updateGatewayInformation(
    args: UpdateGatewayInformationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGatewayInformationCommandOutput) => void
  ): void;
  public updateGatewayInformation(
    args: UpdateGatewayInformationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGatewayInformationCommandOutput) => void),
    cb?: (err: any, data?: UpdateGatewayInformationCommandOutput) => void
  ): Promise<UpdateGatewayInformationCommandOutput> | void {
    const command = new UpdateGatewayInformationCommand(args);
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
   * <p>Updates the gateway virtual machine (VM) software. The request immediately triggers the
   *          software update.</p>
   *
   *          <note>
   *             <p>When you make this request, you get a <code>200 OK</code> success response
   *             immediately. However, it might take some time for the update to complete. You can call
   *                <a>DescribeGatewayInformation</a> to verify the gateway is in the
   *                <code>STATE_RUNNING</code> state.</p>
   *          </note>
   *
   *          <important>
   *             <p>A software update forces a system restart of your gateway. You can minimize the
   *             chance of any disruption to your applications by increasing your iSCSI Initiators'
   *             timeouts. For more information about increasing iSCSI Initiator timeouts for Windows and
   *             Linux, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/ConfiguringiSCSIClientInitiatorWindowsClient.html#CustomizeWindowsiSCSISettings">Customizing your Windows iSCSI settings</a> and <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/ConfiguringiSCSIClientInitiatorRedHatClient.html#CustomizeLinuxiSCSISettings">Customizing your Linux iSCSI settings</a>, respectively.</p>
   *          </important>
   */
  public updateGatewaySoftwareNow(
    args: UpdateGatewaySoftwareNowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGatewaySoftwareNowCommandOutput>;
  public updateGatewaySoftwareNow(
    args: UpdateGatewaySoftwareNowCommandInput,
    cb: (err: any, data?: UpdateGatewaySoftwareNowCommandOutput) => void
  ): void;
  public updateGatewaySoftwareNow(
    args: UpdateGatewaySoftwareNowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGatewaySoftwareNowCommandOutput) => void
  ): void;
  public updateGatewaySoftwareNow(
    args: UpdateGatewaySoftwareNowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGatewaySoftwareNowCommandOutput) => void),
    cb?: (err: any, data?: UpdateGatewaySoftwareNowCommandOutput) => void
  ): Promise<UpdateGatewaySoftwareNowCommandOutput> | void {
    const command = new UpdateGatewaySoftwareNowCommand(args);
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
   * <p>Updates a gateway's weekly maintenance start time information, including day and
   *          time of the week. The maintenance time is the time in your gateway's time zone.</p>
   */
  public updateMaintenanceStartTime(
    args: UpdateMaintenanceStartTimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMaintenanceStartTimeCommandOutput>;
  public updateMaintenanceStartTime(
    args: UpdateMaintenanceStartTimeCommandInput,
    cb: (err: any, data?: UpdateMaintenanceStartTimeCommandOutput) => void
  ): void;
  public updateMaintenanceStartTime(
    args: UpdateMaintenanceStartTimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMaintenanceStartTimeCommandOutput) => void
  ): void;
  public updateMaintenanceStartTime(
    args: UpdateMaintenanceStartTimeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMaintenanceStartTimeCommandOutput) => void),
    cb?: (err: any, data?: UpdateMaintenanceStartTimeCommandOutput) => void
  ): Promise<UpdateMaintenanceStartTimeCommandOutput> | void {
    const command = new UpdateMaintenanceStartTimeCommand(args);
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
   * <p>Updates a Network File System (NFS) file share. This operation is only supported in S3
   *          File Gateways.</p>
   *
   *          <note>
   *             <p>To leave a file share field unchanged, set the corresponding input field to
   *             null.</p>
   *          </note>
   *
   *          <p>Updates the following file share settings:</p>
   *
   *          <ul>
   *             <li>
   *                <p>Default storage class for your S3 bucket</p>
   *             </li>
   *             <li>
   *                <p>Metadata defaults for your S3 bucket</p>
   *             </li>
   *             <li>
   *                <p>Allowed NFS clients for your file share</p>
   *             </li>
   *             <li>
   *                <p>Squash settings</p>
   *             </li>
   *             <li>
   *                <p>Write status of your file share</p>
   *             </li>
   *          </ul>
   */
  public updateNFSFileShare(
    args: UpdateNFSFileShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNFSFileShareCommandOutput>;
  public updateNFSFileShare(
    args: UpdateNFSFileShareCommandInput,
    cb: (err: any, data?: UpdateNFSFileShareCommandOutput) => void
  ): void;
  public updateNFSFileShare(
    args: UpdateNFSFileShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNFSFileShareCommandOutput) => void
  ): void;
  public updateNFSFileShare(
    args: UpdateNFSFileShareCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateNFSFileShareCommandOutput) => void),
    cb?: (err: any, data?: UpdateNFSFileShareCommandOutput) => void
  ): Promise<UpdateNFSFileShareCommandOutput> | void {
    const command = new UpdateNFSFileShareCommand(args);
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
   * <p>Updates a Server Message Block (SMB) file share. This operation is only supported for S3
   *          File Gateways.</p>
   *
   *          <note>
   *             <p>To leave a file share field unchanged, set the corresponding input field to
   *             null.</p>
   *          </note>
   *
   *          <important>
   *             <p>File gateways require Security Token Service (Amazon Web Services STS) to be
   *             activated to enable you to create a file share. Make sure that Amazon Web Services STS
   *             is activated in the Amazon Web Services Region you are creating your file gateway in. If
   *                Amazon Web Services STS is not activated in this Amazon Web Services Region, activate
   *             it. For information about how to activate Amazon Web Services STS, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
   *                deactivating Amazon Web Services STS in an Amazon Web Services Region</a> in the
   *                   <i>Identity and Access Management User Guide</i>.</p>
   *
   *             <p>File gateways don't support creating hard or symbolic links on a file
   *             share.</p>
   *          </important>
   */
  public updateSMBFileShare(
    args: UpdateSMBFileShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSMBFileShareCommandOutput>;
  public updateSMBFileShare(
    args: UpdateSMBFileShareCommandInput,
    cb: (err: any, data?: UpdateSMBFileShareCommandOutput) => void
  ): void;
  public updateSMBFileShare(
    args: UpdateSMBFileShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSMBFileShareCommandOutput) => void
  ): void;
  public updateSMBFileShare(
    args: UpdateSMBFileShareCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSMBFileShareCommandOutput) => void),
    cb?: (err: any, data?: UpdateSMBFileShareCommandOutput) => void
  ): Promise<UpdateSMBFileShareCommandOutput> | void {
    const command = new UpdateSMBFileShareCommand(args);
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
   * <p>Controls whether the shares on an S3 File Gateway are visible in a net view or browse
   *          list. The operation is only supported for S3 File Gateways.</p>
   */
  public updateSMBFileShareVisibility(
    args: UpdateSMBFileShareVisibilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSMBFileShareVisibilityCommandOutput>;
  public updateSMBFileShareVisibility(
    args: UpdateSMBFileShareVisibilityCommandInput,
    cb: (err: any, data?: UpdateSMBFileShareVisibilityCommandOutput) => void
  ): void;
  public updateSMBFileShareVisibility(
    args: UpdateSMBFileShareVisibilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSMBFileShareVisibilityCommandOutput) => void
  ): void;
  public updateSMBFileShareVisibility(
    args: UpdateSMBFileShareVisibilityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSMBFileShareVisibilityCommandOutput) => void),
    cb?: (err: any, data?: UpdateSMBFileShareVisibilityCommandOutput) => void
  ): Promise<UpdateSMBFileShareVisibilityCommandOutput> | void {
    const command = new UpdateSMBFileShareVisibilityCommand(args);
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
   * <p>Updates the list of Active Directory users and groups that have special permissions for
   *          SMB file shares on the gateway.</p>
   */
  public updateSMBLocalGroups(
    args: UpdateSMBLocalGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSMBLocalGroupsCommandOutput>;
  public updateSMBLocalGroups(
    args: UpdateSMBLocalGroupsCommandInput,
    cb: (err: any, data?: UpdateSMBLocalGroupsCommandOutput) => void
  ): void;
  public updateSMBLocalGroups(
    args: UpdateSMBLocalGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSMBLocalGroupsCommandOutput) => void
  ): void;
  public updateSMBLocalGroups(
    args: UpdateSMBLocalGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSMBLocalGroupsCommandOutput) => void),
    cb?: (err: any, data?: UpdateSMBLocalGroupsCommandOutput) => void
  ): Promise<UpdateSMBLocalGroupsCommandOutput> | void {
    const command = new UpdateSMBLocalGroupsCommand(args);
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
   * <p>Updates the SMB security strategy on a file gateway. This action is only supported in
   *          file gateways.</p>
   *
   *          <note>
   *             <p>This API is called Security level in the User Guide.</p>
   *
   *             <p>A higher security level can affect performance of the gateway.</p>
   *          </note>
   */
  public updateSMBSecurityStrategy(
    args: UpdateSMBSecurityStrategyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSMBSecurityStrategyCommandOutput>;
  public updateSMBSecurityStrategy(
    args: UpdateSMBSecurityStrategyCommandInput,
    cb: (err: any, data?: UpdateSMBSecurityStrategyCommandOutput) => void
  ): void;
  public updateSMBSecurityStrategy(
    args: UpdateSMBSecurityStrategyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSMBSecurityStrategyCommandOutput) => void
  ): void;
  public updateSMBSecurityStrategy(
    args: UpdateSMBSecurityStrategyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSMBSecurityStrategyCommandOutput) => void),
    cb?: (err: any, data?: UpdateSMBSecurityStrategyCommandOutput) => void
  ): Promise<UpdateSMBSecurityStrategyCommandOutput> | void {
    const command = new UpdateSMBSecurityStrategyCommand(args);
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
   * <p>Updates a snapshot schedule configured for a gateway volume. This operation is only
   *          supported in the cached volume and stored volume gateway types.</p>
   *
   *          <p>The default snapshot schedule for volume is once every 24 hours, starting at the
   *          creation time of the volume. You can use this API to change the snapshot schedule
   *          configured for the volume.</p>
   *
   *          <p>In the request you must identify the gateway volume whose snapshot schedule you want to
   *          update, and the schedule information, including when you want the snapshot to begin on a
   *          day and the frequency (in hours) of snapshots.</p>
   */
  public updateSnapshotSchedule(
    args: UpdateSnapshotScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSnapshotScheduleCommandOutput>;
  public updateSnapshotSchedule(
    args: UpdateSnapshotScheduleCommandInput,
    cb: (err: any, data?: UpdateSnapshotScheduleCommandOutput) => void
  ): void;
  public updateSnapshotSchedule(
    args: UpdateSnapshotScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSnapshotScheduleCommandOutput) => void
  ): void;
  public updateSnapshotSchedule(
    args: UpdateSnapshotScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSnapshotScheduleCommandOutput) => void),
    cb?: (err: any, data?: UpdateSnapshotScheduleCommandOutput) => void
  ): Promise<UpdateSnapshotScheduleCommandOutput> | void {
    const command = new UpdateSnapshotScheduleCommand(args);
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
   * <p>Updates the type of medium changer in a tape gateway. When you activate a tape gateway,
   *          you select a medium changer type for the tape gateway. This operation enables you to select
   *          a different type of medium changer after a tape gateway is activated. This operation is
   *          only supported in the tape gateway type.</p>
   */
  public updateVTLDeviceType(
    args: UpdateVTLDeviceTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVTLDeviceTypeCommandOutput>;
  public updateVTLDeviceType(
    args: UpdateVTLDeviceTypeCommandInput,
    cb: (err: any, data?: UpdateVTLDeviceTypeCommandOutput) => void
  ): void;
  public updateVTLDeviceType(
    args: UpdateVTLDeviceTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVTLDeviceTypeCommandOutput) => void
  ): void;
  public updateVTLDeviceType(
    args: UpdateVTLDeviceTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateVTLDeviceTypeCommandOutput) => void),
    cb?: (err: any, data?: UpdateVTLDeviceTypeCommandOutput) => void
  ): Promise<UpdateVTLDeviceTypeCommandOutput> | void {
    const command = new UpdateVTLDeviceTypeCommand(args);
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
